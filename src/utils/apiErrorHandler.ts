import axios from "axios";

export interface ApiError {
  message: string;
  statusCode?: number;
  fieldErrors?: Record<string, string>;
}

export interface ValidationError {
  detail?: Array<{
    loc: string[];
    msg: string;
    type: string;
  }>;
}

/**
 * Centralized API error handler that provides user-friendly error messages
 * and handles different response formats from the backend
 */
export function handleApiError(error: unknown): ApiError {
  // Network errors
  if (!axios.isAxiosError(error)) {
    return {
      message: "Network error. Please check your connection and try again.",
      statusCode: 0,
    };
  }

  const axiosError = error;
  const statusCode = axiosError.response?.status;
  const responseData = axiosError.response?.data;

  // Handle different HTTP status codes
  switch (statusCode) {
    case 400:
      return handleBadRequest(responseData);

    case 401:
      return {
        message: "Invalid email or password. Please check your credentials and try again.",
        statusCode: 401,
      };

    case 403:
      return {
        message: "Access denied. You don't have permission to perform this action.",
        statusCode: 403,
      };

    case 404:
      return {
        message: "The requested resource was not found.",
        statusCode: 404,
      };

    case 409:
      return handleConflict(responseData);

    case 422:
      return handleValidationError(responseData);

    case 429:
      return {
        message: "Too many requests. Please wait a moment and try again.",
        statusCode: 429,
      };

    case 500:
    case 502:
    case 503:
    case 504:
      return {
        message: "Server error. Please try again later.",
        statusCode: statusCode,
      };

    default:
      // Generic fallback
      return {
        message: responseData?.message || "Something went wrong. Please try again.",
        statusCode: statusCode,
      };
  }
}

/**
 * Handle 400 Bad Request errors
 */
function handleBadRequest(data: any): ApiError {
  if (data?.message) {
    return {
      message: data.message,
      statusCode: 400,
    };
  }

  return {
    message: "Invalid request. Please check your input and try again.",
    statusCode: 400,
  };
}

/**
 * Handle 409 Conflict errors (e.g., email already verified)
 */
function handleConflict(data: any): ApiError {
  if (data?.message?.toLowerCase().includes("already verified")) {
    return {
      message: "Your email is already verified. You can sign in to your account.",
      statusCode: 409,
    };
  }

  if (data?.message?.toLowerCase().includes("already exists")) {
    return {
      message: "An account with this email already exists. Please try signing in instead.",
      statusCode: 409,
    };
  }

  return {
    message: data?.message || "Conflict with existing data. Please try again.",
    statusCode: 409,
  };
}

/**
 * Handle 422 Validation errors with field-specific messages
 */
function handleValidationError(data: any): ApiError {
  const fieldErrors: Record<string, string> = {};

  // Handle FastAPI/Pydantic validation errors
  if (data?.detail && Array.isArray(data.detail)) {
    data.detail.forEach((error: any) => {
      if (error.loc && error.loc.length > 0 && error.msg) {
        // Convert field path to field name (e.g., ["body", "email"] -> "email")
        const fieldName = error.loc[error.loc.length - 1];
        fieldErrors[fieldName] = error.msg;
      }
    });

    // If we have field errors, return them
    if (Object.keys(fieldErrors).length > 0) {
      return {
        message: "Please check your input and try again.",
        statusCode: 422,
        fieldErrors,
      };
    }
  }

  // Handle other validation error formats
  if (data?.message) {
    return {
      message: data.message,
      statusCode: 422,
    };
  }

  return {
    message: "Validation failed. Please check your input and try again.",
    statusCode: 422,
  };
}
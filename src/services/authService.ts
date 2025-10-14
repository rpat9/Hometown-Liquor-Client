import axios from "axios";
import type {
    SignupRequest,
    SignupResponse,
    LoginRequest,
    LoginResponse
} from "../types/api.types";
import { handleApiError } from "../utils/apiErrorHandler";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class AuthService {
    private api = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    async signup(data: SignupRequest): Promise<SignupResponse> {
        try {
            // Transform the data to match API expectations
            const requestData = {
                email: data.email,
                password: data.password, // API expects 'password', not 'password_hash'
                name: data.name,
                phone: data.phone,
                role: "user",
                email_verified: false,
                low_stock_alerts: false,
                new_stock_alerts: false,
                restock_alerts: false,
            };

            const response = await this.api.post<SignupResponse>("/api/auth/signup", requestData);
            return response.data;
        } catch (error) {
            const apiError = handleApiError(error);
            throw new Error(apiError.message);
        }
    }

    async login(data: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await this.api.post<LoginResponse>("/api/auth/login", data);
            return response.data;
        } catch (error) {
            const apiError = handleApiError(error);
            throw new Error(apiError.message);
        }
    }

    async verifyEmail(token: string): Promise<void> {
        try {
            await this.api.get(`/api/auth/verify-email?token=${token}`);
        } catch (error) {
            const apiError = handleApiError(error);
            throw new Error(apiError.message);
        }
    }

    async resendVerification(email: string): Promise<void> {
        try {
            await this.api.post("/api/auth/resend-verification", { email });
        } catch (error) {
            const apiError = handleApiError(error);
            throw new Error(apiError.message);
        }
    }

    async forgotPassword(email: string): Promise<void> {
        try {
            await this.api.post("/api/auth/forgot-password", { email });
        } catch (error) {
            throw new Error("Failed to send password reset email. Please try again.");
        }
    }

    async resetPassword(token: string, newPassword: string): Promise<void> {
        try {
            await this.api.post("/api/auth/reset-password", {
                token,
                password: newPassword,
            });
        } catch (error) {
            throw new Error("Password reset failed. Please try again.");
        }
    }

    async refreshToken(refreshToken: string): Promise<LoginResponse> {
        try {
            const response = await this.api.post<LoginResponse>("/api/auth/refresh", {
                refresh_token: refreshToken,
            });
            return response.data;
        } catch (error) {
            throw new Error("Session expired. Please log in again.");
        }
    }

    async logout(): Promise<void> {
        try {
            // Get tokens from storage
            const tokens = localStorage.getItem("tokens");
            if (tokens) {
                const parsedTokens = JSON.parse(tokens);
                const accessToken = parsedTokens.access_token;

                await this.api.post("/api/auth/logout", {}, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });
            }
        } catch (error) {
            // Logout should succeed even if API call fails
            console.warn("Logout API call failed:", error);
        } finally {
            // Always clear local storage regardless of API call success/failure
            localStorage.removeItem("user");
            localStorage.removeItem("tokens");
            localStorage.removeItem("refresh_token");
        }
    }

    async getCurrentUser(): Promise<any> {
        try {
            const response = await this.api.get("/api/auth/me");
            return response.data;
        } catch (error) {
            throw new Error("Failed to get user profile.");
        }
    }
}

export const authService = new AuthService();
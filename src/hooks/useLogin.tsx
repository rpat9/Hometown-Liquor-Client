import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { useAuth } from "./useAuth";
import { validateEmail } from "../utils/validation";
import { toast } from "sonner";

interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface LoginErrors {
    email?: string;
    password?: string;
    general?: string;
}

export const useLogin = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState<LoginErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: LoginErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const updateField = (field: keyof LoginFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear field-specific error when user starts typing
        if (errors[field as keyof LoginErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const submitLogin = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({});

        try {
            const response = await authService.login({
                email: formData.email,
                password: formData.password,
            });

            // Login successful - update auth context
            login(response.user, {
                access_token: response.access_token,
                refresh_token: response.refresh_token,
                token_type: response.token_type,
            });

            toast.success("Welcome back!", {
                description: `Hello ${response.user.name}, you've been signed in successfully.`,
            });

            // Navigate to products page
            navigate("/products");
        } catch (error) {
            console.error("Login error:", error);
            const errorMessage = error instanceof Error ? error.message : "Login failed. Please try again.";
            toast.error("Login failed", {
                description: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        errors,
        isLoading,
        updateField,
        submitLogin,
    };
};
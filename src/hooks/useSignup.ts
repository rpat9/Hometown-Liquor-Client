import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import type { SignupRequest } from "../types/api.types";
import { toast } from "sonner";

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
}

interface SignupErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    agreeToTerms?: string;
    general?: string;
}

export function useSignup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<SignupFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<SignupErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = useCallback((): boolean => {
        const newErrors: SignupErrors = {};

        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        // Last name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain uppercase, lowercase, and number";
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Terms agreement validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must agree to the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    const updateField = useCallback((field: keyof SignupFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear field-specific error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    }, [errors]);

    const submitSignup = useCallback(async () => {
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            const signupData: SignupRequest = {
                email: formData.email,
                password: formData.password,
                name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
                phone: formData.phone,
            };

            await authService.signup(signupData);

            setIsSuccess(true);
            toast.success("Account created successfully!", {
                description: "Please check your email to verify your account before signing in.",
            });

            // Show success message and redirect to login
            // Note: User cannot login until email is verified
            setTimeout(() => {
                navigate("/login", {
                    state: {
                        message: "Account created successfully! Please check your email to verify your account before logging in."
                    }
                });
            }, 2000);

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Signup failed. Please try again.";
            toast.error("Signup failed", {
                description: errorMessage,
            });
        } finally {
            setIsLoading(false);
        }
    }, [formData, validateForm, navigate]);

    const resetForm = useCallback(() => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            agreeToTerms: false,
        });
        setErrors({});
        setIsSuccess(false);
    }, []);

    return {
        formData,
        errors,
        isLoading,
        isSuccess,
        updateField,
        submitSignup,
        resetForm,
        validateForm,
    };
}
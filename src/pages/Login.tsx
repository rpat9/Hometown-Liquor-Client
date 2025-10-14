import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Shield, Star } from "lucide-react";
import { useLogin } from "../hooks/useLogin";
import RegularButton from "../components/Buttons/RegularButton";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        formData,
        errors,
        isLoading,
        updateField,
        submitLogin,
    } = useLogin();

    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side - Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="card p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-dark)] rounded-2xl mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                            <p className="text-secondary">
                                Sign in to your Hometown Liquor account
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={(e) => { e.preventDefault(); submitLogin(); }} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all ${
                                            errors.email ? "border-red-500" : "border-[var(--color-border)]"
                                        }`}
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]" />
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => updateField("password", e.target.value)}
                                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all ${
                                            errors.password ? "border-red-500" : "border-[var(--color-border)]"
                                        }`}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={(e) => updateField("rememberMe", e.target.checked)}
                                        className="w-4 h-4 text-[var(--color-accent)] border-[var(--color-border)] rounded focus:ring-[var(--color-accent)] cursor-pointer"
                                    />
                                    <span className="ml-2 text-sm text-secondary">
                                        Remember me
                                    </span>
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-sm text-hover-accent hover:text-[var(--color-primary-dark)] transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* General Error */}
                            {errors.general && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                    <p className="text-red-600 text-sm">{errors.general}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <RegularButton
                                text={isLoading ? "Signing In..." : "Sign In"}
                                type="submit"
                                variant="primary"
                                onClick={() => {}}
                            />
                        </form>

                        {/* Social Login Placeholder */}
                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-[var(--color-border)]"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-secondary text-primary">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <RegularButton
                                    text="Google"
                                    type="button"
                                    variant="primary"
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                    }
                                    onClick={() => {
                                        // TODO: Integrate Google OAuth
                                        console.log("Google login clicked");
                                    }}
                                />

                                <RegularButton
                                    text="Facebook"
                                    type="button"
                                    variant="primary"
                                    icon={
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    }
                                    onClick={() => {
                                        // TODO: Integrate Facebook OAuth
                                        console.log("Facebook login clicked");
                                    }}
                                />
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center mt-8 text-secondary">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-hover-accent hover:text-[var(--color-primary-dark)] font-semibold transition-colors"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Side - Welcome Content */}
                <div className="hidden lg:block">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-2 py-2 m-6">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-primary text-sm font-medium">Braceville's #1 Rated Liquor Store</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Welcome Back to<br />
                            <span className="text-gradient">Hometown Liquor</span>
                        </h2>

                        <p className="text-xl text-primary/90 mb-8 max-w-md mx-auto">
                            Access your account to browse our selection, manage orders, and enjoy exclusive member benefits.
                        </p>

                        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-primary/80">Premium Wines</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-sm text-primary/80">Online Access</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
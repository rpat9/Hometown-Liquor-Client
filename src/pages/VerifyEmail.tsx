import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Mail, CheckCircle, XCircle, RefreshCw, ArrowRight } from "lucide-react";
import { authService } from "../services/authService";
import RegularButton from "../components/Buttons/RegularButton";
import { toast } from "sonner";

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error" | "expired">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");

    // Auto-verify if token is present
    useEffect(() => {
        if (token) {
            verifyEmail(token);
        }
    }, [token]);

    const verifyEmail = async (verificationToken: string) => {
        setIsVerifying(true);
        setVerificationStatus("idle");

        try {
            await authService.verifyEmail(verificationToken);
            setVerificationStatus("success");
            toast.success("Email verified!", {
                description: "Your email has been successfully verified. You can now sign in to your account.",
            });
        } catch (error) {
            console.error("Email verification error:", error);
            const errorMsg = error instanceof Error ? error.message : "Verification failed";

            if (errorMsg.includes("expired") || errorMsg.includes("Invalid")) {
                setVerificationStatus("expired");
                toast.error("Verification link expired", {
                    description: "This verification link has expired or is invalid. Please request a new one.",
                });
            } else if (errorMsg.includes("already verified")) {
                setVerificationStatus("success");
                toast.success("Email already verified", {
                    description: "Your email is already verified. You can sign in to your account.",
                });
            } else {
                setVerificationStatus("error");
                toast.error("Verification failed", {
                    description: errorMsg,
                });
            }
            setErrorMessage(errorMsg);
        } finally {
            setIsVerifying(false);
        }
    };

    const resendVerification = async () => {
        if (!email.trim()) {
            setErrorMessage("Please enter your email address");
            return;
        }

        setIsResending(true);
        setErrorMessage("");

        try {
            await authService.resendVerification(email);
            toast.success("Verification email sent!", {
                description: "Please check your inbox for the verification link.",
            });
            setErrorMessage("Verification email sent! Please check your inbox.");
        } catch (error) {
            console.error("Resend verification error:", error);
            const errorMsg = error instanceof Error ? error.message : "Failed to resend verification email";
            toast.error("Failed to resend email", {
                description: errorMsg,
            });
            setErrorMessage(errorMsg);
        } finally {
            setIsResending(false);
        }
    };

    if (token) {
        // Token verification page
        return (
            <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md mx-auto">
                    <div className="card p-8 text-center">
                        {isVerifying ? (
                            <>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                                    <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
                                </div>
                                <h1 className="text-2xl font-bold mb-4">Verifying Email</h1>
                                <p className="text-secondary">Please wait while we verify your email address...</p>
                            </>
                        ) : verificationStatus === "success" ? (
                            <>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h1 className="text-2xl font-bold mb-4">Email Verified!</h1>
                                <p className="text-secondary mb-6">
                                    Your email has been successfully verified. You can now sign in to your account.
                                </p>
                                <Link to="/login">
                                    <RegularButton
                                        text="Continue to Sign In"
                                        type="button"
                                        variant="primary"
                                        icon={<ArrowRight className="w-4 h-4" />}
                                        onClick={() => {}}
                                    />
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                                    <XCircle className="w-8 h-8 text-red-600" />
                                </div>
                                <h1 className="text-2xl font-bold mb-4">
                                    {verificationStatus === "expired" ? "Link Expired" : "Verification Failed"}
                                </h1>
                                <p className="text-secondary mb-6">
                                    {verificationStatus === "expired"
                                        ? "This verification link has expired or is invalid. Please request a new one."
                                        : errorMessage || "We couldn't verify your email. Please try again."
                                    }
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <RegularButton
                                        text={isResending ? "Sending..." : "Resend Verification Email"}
                                        type="button"
                                        variant="primary"
                                        onClick={isResending ? () => {} : resendVerification}
                                    />
                                </div>
                                {errorMessage && !errorMessage.includes("Verification email sent") && (
                                    <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
                                )}
                                {errorMessage && errorMessage.includes("Verification email sent") && (
                                    <p className="text-green-600 text-sm mt-4">{errorMessage}</p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Manual verification request page
    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md mx-auto">
                <div className="card p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
                    <p className="text-secondary mb-6">
                        Enter your email address below to receive a verification link.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                            />
                        </div>
                        <RegularButton
                            text={isResending ? "Sending..." : "Send Verification Email"}
                            type="button"
                            variant="primary"
                            onClick={isResending ? () => {} : resendVerification}
                        />
                    </div>

                    {errorMessage && !errorMessage.includes("Verification email sent") && (
                        <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
                    )}
                    {errorMessage && errorMessage.includes("Verification email sent") && (
                        <p className="text-green-600 text-sm mt-4">{errorMessage}</p>
                    )}

                    <p className="text-center mt-6 text-secondary">
                        Remember your password?{" "}
                        <Link
                            to="/login"
                            className="text-hover-accent hover:text-[var(--color-primary-dark)] font-semibold transition-colors"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
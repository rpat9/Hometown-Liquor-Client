import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { User } from "../types/database.types";

interface AuthTokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
}

interface AuthContextType {
    user: User | null;
    tokens: AuthTokens | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (user: User, tokens: AuthTokens) => void;
    logout: () => void;
    updateUser: (user: User) => void;
    refreshTokens: (tokens: AuthTokens) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [tokens, setTokens] = useState<AuthTokens | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load auth state from localStorage on mount
    useEffect(() => {
        const loadAuthState = () => {
            try {
                const storedUser = localStorage.getItem("user");
                const storedTokens = localStorage.getItem("tokens");

                if (storedUser && storedTokens) {
                    const parsedUser = JSON.parse(storedUser);
                    const parsedTokens = JSON.parse(storedTokens);

                    // Validate token expiration (basic check)
                    if (parsedTokens.access_token) {
                        setUser(parsedUser);
                        setTokens(parsedTokens);
                    } else {
                        // Clear invalid tokens
                        localStorage.removeItem("user");
                        localStorage.removeItem("tokens");
                        localStorage.removeItem("refresh_token");
                    }
                }
            } catch (error) {
                console.error("Error loading auth state:", error);
                // Clear corrupted data
                localStorage.removeItem("user");
                localStorage.removeItem("tokens");
                localStorage.removeItem("refresh_token");
            } finally {
                setIsLoading(false);
            }
        };

        loadAuthState();
    }, []);

    const login = (userData: User, tokenData: AuthTokens) => {
        setUser(userData);
        setTokens(tokenData);

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("tokens", JSON.stringify(tokenData));
        localStorage.setItem("refresh_token", tokenData.refresh_token);
    };

    const logout = () => {
        setUser(null);
        setTokens(null);

        // Clear localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("tokens");
        localStorage.removeItem("refresh_token");
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
    };

    const refreshTokens = (newTokens: AuthTokens) => {
        setTokens(newTokens);
        localStorage.setItem("tokens", JSON.stringify(newTokens));
        localStorage.setItem("refresh_token", newTokens.refresh_token);
    };

    const value: AuthContextType = {
        user,
        tokens,
        isLoading,
        isAuthenticated: !!user && !!tokens,
        login,
        logout,
        updateUser,
        refreshTokens,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
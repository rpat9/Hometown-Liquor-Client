import { MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
    const currentUser = false;

    return (
        <footer className="bg-card text-secondary py-12 px-6 border-t border-[var(--color-border)]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div>
                        <h3 className="font-bold mb-4 text-heading text-lg">Contact Info</h3>

                        <div className="space-y-3 text-primary">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <p className="text-sm">103 Illinois 53, Braceville, IL</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <p className="text-sm">(630) 669-3023</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <p className="text-sm">hometown53route@gmail.com</p>
                            </div>

                        </div>

                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-heading text-lg">Store Hours</h3>

                        <div className="space-y-2 text-sm text-primary">
                            <p>Monday - Saturday: 9am - 9pm</p>
                            <p>Sunday: 9am - 7pm</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-heading text-lg">Quick Links</h3>
                        <div className="space-y-2 text-sm">
                            <Link 
                                to="/products"
                                className="block text-primary hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                            >
                                Shop Products
                            </Link>

                            <Link 
                                to="/dashboard"
                                className="block text-primary hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                            >
                                Dashboard
                            </Link>

                            {currentUser ? (
                                <Link 
                                    to="/dashboard"
                                    className="block text-primary hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                                >
                                    Your Cart
                                </Link>
                                ) : (
                                <Link 
                                    to="/login"
                                    className="block text-primary hover:text-[var(--color-accent)] transition-colors text-left cursor-pointer"
                                >
                                    Account Login
                                </Link>
                            )}

                        </div>
                    </div>

                    <div>

                        <h3 className="font-bold mb-4 text-heading text-lg">About</h3>

                        <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                            Proudly serving Braceville and surrounding communities with premium 
                            beverages and exceptional service since our founding.
                        </p>

                    </div>

                </div>

                <div className="border-t border-[var(--color-border)] pt-8 text-center">

                    <p className="text-sm text-primary">
                        &copy; {new Date().getFullYear()} Hometown Liquor. All rights reserved. | 
                        <span className="ml-2">Drink Responsibly. Must be 21+</span>
                    </p>

                </div>

            </div>
        </footer>
    )
}
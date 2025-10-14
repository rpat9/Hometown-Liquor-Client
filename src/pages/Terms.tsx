import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            {/* Header */}
            <div className="bg-primary border-b border-[var(--color-border)]">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-[var(--color-accent)] transition-colors mb-4"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-primary">Terms of Service</h1>
                    <p className="text-secondary mt-2">Last updated: October 14, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-lg max-w-none text-primary">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using Hometown Liquor's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. Age Restrictions</h2>
                        <p className="mb-4">
                            You must be at least 21 years of age to purchase alcoholic beverages from Hometown Liquor. By using our services, you certify that you are of legal drinking age in your jurisdiction. We reserve the right to refuse service to anyone who cannot provide proper identification proving they are of legal age.
                        </p>
                        <p className="mb-4">
                            We are committed to responsible alcohol sales and will not sell to individuals who appear intoxicated or who we believe intend to provide alcohol to minors.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
                        <p className="mb-4">
                            While we strive to provide accurate product descriptions, pricing, and availability information, we do not warrant that product descriptions or other content on our site is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment</h2>
                        <p className="mb-4">
                            All prices are subject to change without notice. We reserve the right to modify pricing for any reason, including but not limited to changes in supplier pricing, market conditions, or promotional activities.
                        </p>
                        <p className="mb-4">
                            Payment must be made at the time of purchase. We accept major credit cards, debit cards, and other payment methods as indicated on our website. All payments are processed securely through our payment processors.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
                        <p className="mb-4">
                            We offer delivery services within our designated delivery area. Delivery fees and minimum order requirements may apply. We strive to deliver orders within the estimated timeframes provided, but delivery dates are estimates only and we are not liable for delays.
                        </p>
                        <p className="mb-4">
                            All deliveries require adult signature (21+) at the time of delivery. We reserve the right to refuse delivery if proper identification cannot be provided.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
                        <p className="mb-4">
                            Due to the nature of our products (alcoholic beverages), we do not accept returns except in cases of damaged or defective products. If you receive a damaged product, please contact us immediately for resolution.
                        </p>
                        <p className="mb-4">
                            Refunds will be processed within 3-5 business days after approval. Refunds will be issued to the original payment method.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. User Accounts</h2>
                        <p className="mb-4">
                            To place orders, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>
                        <p className="mb-4">
                            You agree to provide accurate and complete information when creating your account and to update this information as necessary to keep it current.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Prohibited Uses</h2>
                        <p className="mb-4">
                            You agree not to use our website or services for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You also agree not to:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                            <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                            <li>Transmit any viruses, worms, defects, Trojan horses, or any items of a destructive nature</li>
                            <li>Use our services to transmit any abusive, harassing, or otherwise objectionable material</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event shall Hometown Liquor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                        <p className="mb-4">
                            These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Illinois, USA.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="bg-secondary p-4 rounded-lg">
                            <p><strong>Hometown Liquor</strong></p>
                            <p>103 IL 53, Braceville, IL 60407</p>
                            <p>Phone: (630) 669-3023</p>
                            <p>Email: hometown53route@gmail.com</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
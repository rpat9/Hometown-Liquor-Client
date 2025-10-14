import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                    <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>
                    <p className="text-secondary mt-2">Last updated: October 14, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-lg max-w-none text-primary">

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Name, email address, phone number, and mailing address</li>
                            <li>Payment information (processed securely by third-party payment processors)</li>
                            <li>Age verification information</li>
                            <li>Order history and preferences</li>
                            <li>Communications with us</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Process and fulfill your orders</li>
                            <li>Verify your age and identity for legal compliance</li>
                            <li>Communicate with you about your orders and account</li>
                            <li>Provide customer service and support</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                        <p className="mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Service Providers:</strong> We may share information with third-party service providers who help us operate our business, such as payment processors, delivery services, and age verification providers.</li>
                            <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation.</li>
                            <li><strong>Business Protection:</strong> We may share information to protect our rights, property, or safety, or that of our customers.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Age Verification</h2>
                        <p className="mb-4">
                            As a licensed alcohol retailer, we are required by law to verify that all customers are of legal drinking age (21+). We may collect and store age verification information, including copies of government-issued identification, in accordance with applicable laws and regulations.
                        </p>
                        <p className="mb-4">
                            Age verification information is stored securely and is only used for compliance purposes. We do not use this information for marketing or share it with third parties except as required by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>SSL encryption for data transmission</li>
                            <li>Secure payment processing</li>
                            <li>Regular security audits and updates</li>
                            <li>Limited access to personal information on a need-to-know basis</li>
                        </ul>
                        <p className="mb-4">
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                        <p className="mb-4">
                            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                        </p>
                        <p className="mb-4">
                            We may also use analytics services to understand how visitors use our website. This information is aggregated and anonymized.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                        <p className="mb-4">
                            Depending on your location, you may have certain rights regarding your personal information:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                        </ul>
                        <p className="mb-4">
                            To exercise these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                        <p className="mb-4">
                            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary depending on the type of information and the purpose for which it was collected.
                        </p>
                        <p className="mb-4">
                            Age verification records may be retained longer as required by law for licensed alcohol retailers.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                        <p className="mb-4">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                        <p className="mb-4">
                            Our services are not intended for individuals under 21 years of age. We do not knowingly collect personal information from children under 21. If we become aware that we have collected personal information from a child under 21, we will take steps to delete such information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                        </p>
                        <div className="bg-secondary p-4 rounded-lg">
                            <p><strong>Hometown Liquor</strong></p>
                            <p>103 IL 53, Braceville, IL 60407</p>
                            <p>Phone: (630) 669-3023</p>
                            <p>Email: hometown53route@gmail.com</p>
                        </div>
                        <p className="mt-4">
                            For privacy-related concerns, you can also contact our Privacy Officer at the email address above.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
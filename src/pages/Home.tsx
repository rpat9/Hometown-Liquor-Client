import { ShoppingBag, Wine, Truck, Clock, Star, MapPin, Phone, Award, Users, ArrowRight, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarColor: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function Home() {
  const howItWorksSteps: HowItWorksStep[] = [
    {
      number: 1,
      title: "Browse & Select",
      description: "Explore our extensive collection online or visit our store. Use our filters to find exactly what you're looking for."
    },
    {
      number: 2,
      title: "Order Online",
      description: "Add items to your cart and checkout securely. Choose your preferred pickup time for maximum convenience."
    },
    {
      number: 3,
      title: "Pickup & Enjoy",
      description: "Arrive at your scheduled time, show ID, and pick up your order. Ready to enjoy in minutes!"
    }
  ];

  const features: Feature[] = [
    {
      icon: Wine,
      title: "Premium Selection",
      description: "Curated collection of fine wines, craft beers, and premium spirits from around the world.",
      gradientFrom: "from-[var(--color-accent)]",
      gradientTo: "to-[var(--color-primary-dark)]"
    },
    {
      icon: Truck,
      title: "Convenient Pickup",
      description: "Order online and pick up same-day. No delivery fees, no waiting in line.",
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600"
    },
    {
      icon: Users,
      title: "Family Service",
      description: "Family-owned business providing personal attention and care to every customer who walks through our doors.",
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600"
    },
    {
      icon: Award,
      title: "Special Orders",
      description: "Tell us what you're looking for and we'll get it for you. We'll hold special requests until your next visit.",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open 7 days a week with convenient evening hours for your schedule.",
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-600"
    },
    {
      icon: Heart,
      title: "Event Support",
      description: "We support local events and celebrations. Contact us about hosting your next gathering or special occasion.",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Best liquor store in town! The staff knows their stuff and the selection is incredible. Love the online ordering system.",
      author: "Sarah M.",
      title: "Braceville Resident",
      avatarColor: "from-[var(--color-primary)] to-[var(--color-primary-dark)]"
    },
    {
      quote: "Convenient pickup process and great prices. The wine recommendations have been spot-on every time!",
      author: "Mike R.",
      title: "Regular Customer",
      avatarColor: "from-green-500 to-green-600"
    },
    {
      quote: "Family-owned business with genuine care for customers. They've been serving our community for generations.",
      author: "Jennifer L.",
      title: "Local Business Owner",
      avatarColor: "from-blue-500 to-blue-600"
    }
  ];

  const stats: Stat[] = [
    {
      value: "1st",
      label: "Year In Braceville"
    },
    {
      value: "400+",
      label: "Happy Customers"
    },
    {
      value: "5.0★",
      label: "Average Rating"
    }
  ];

    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
      
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hometown-liquor-background.webp)'}}>
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative max-w-6xl mx-auto text-center px-6">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-2 text-white text-sm m-6">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">Braceville's #1 Rated Liquor Store</span>
                    </div>

                    {/* Main Headline */}
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-relaxed">
                        <h1 className="text-white">The Perfect Bottle For</h1>
                        <h1 className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl leading-relaxed">
                            Every Occasion
                        </h1>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">Quality You Can Trust</h1>
                    </div>

                   

                    {/* Key Benefits */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10 sm:mt-20">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-white font-medium">500+ Varieties</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                            <Truck className="w-4 h-4 text-blue-400" />
                            <span className="text-white font-medium">Same-Day Pickup</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">Family-Owned</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/products"
                            className="group px-8 py-4 bg-card text-primary rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-[var(--color-border)]"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span>Browse Collection</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="tel:+16306693023"
                            className="px-8 py-4 bg-transparent border-2 border-white/50 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-10 mb-16 max-w-md mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-10 absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Why Choose Hometown Liquor?</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        More than just a liquor store. We're your trusted neighborhood destination.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className="card group cursor-pointer">
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-secondary">Simple steps to your perfect selection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorksSteps.map((step) => (
                            <div key={step.number} className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">What Our Customers Say</h2>
                    <p className="text-xl text-secondary">Real reviews from real customers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-secondary mb-4 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-sm text-[var(--color-text-muted)]">{testimonial.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Experience the Difference?</h2>
                    <p className="text-xl text-primary/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust Hometown Liquor for their beverage needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/products"
                            className="group px-8 py-4 bg-card text-primary rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-[var(--color-border)]"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span>Shop Now</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="https://maps.google.com/?q=103+Illinois+53,+Braceville,+IL"
                            className="group px-8 py-4 bg-card text-primary rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-[var(--color-border)]"
                        >
                            <MapPin className="w-5 h-5" />
                            <span>Find Us</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
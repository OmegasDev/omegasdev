import React from "react";
import { Header } from "../components/Header";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Monitor, 
  Database, 
  Palette, 
  Zap,
  Target,
  Rocket,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "../components/ui/button";

// Import design assets
import circleAsset from "../assets/darkBgAsset.png";
import solidCircleAsset from "../assets/circleAsset.png";
import waveAsset from "figma:asset/56226bb63c56f89d5a430f67270f03462a759be6.png";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Professional websites that make your business stand out online.",
    features: ["Corporate & SME Websites", "Business Landing Pages", "Blog & Portfolio Setup", "SEO for Google Search"],
    price: "From ₦200,000",
    color: "from-electric-blue to-cyber-purple"
  },
  {
    icon: Monitor,
    title: "Website Revamp",
    description: "Upgrade your current site with modern features to attract more customers.",
    features: ["Add Chatbots for Customer Service", "AI Integration", "SEO Optimization", "Payment Integration"],
    price: "From ₦150,000",
    color: "from-orange-glow to-hot-pink"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Custom apps that put your business in your customers’ hands.",
    features: ["Android & iOS Apps", "Customer Loyalty Apps", "Push Notifications", "Simple Admin Dashboard"],
    price: "From ₦400,000",
    color: "from-hot-pink to-orange-glow"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Solid systems that power your apps and websites behind the scenes.",
    features: ["REST APIs", "Database Setup", "User Accounts & Payments", "Scalable Architecture"],
    price: "From ₦250,000",
    color: "from-cyber-purple to-hot-pink"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean and modern designs that keep customers engaged.",
    features: ["User-Friendly Layouts", "Wireframes & Prototypes", "Brand Identity Design", "Responsive Design"],
    price: "From ₦100,000",
    color: "from-orange-glow to-hot-pink"
  }
];

const process = [
  {
    icon: Target,
    title: "Understand Your Business",
    description: "We sit with you to know your goals and what your customers really need."
  },
  {
    icon: Palette,
    title: "Design That Works",
    description: "We create designs that are simple, professional, and customer-friendly."
  },
  {
    icon: Rocket,
    title: "Development & Setup",
    description: "We build your solution using the right technology for your business size."
  },
  {
    icon: Users,
    title: "Launch & Support",
    description: "We put your project live and continue to support you as your business grows."
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f23] to-[#1a0a2e] relative overflow-hidden">
      {/* Animated Background Assets */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <img src={circleAsset} alt="" className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 w-64 h-64 opacity-10"
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={solidCircleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full mb-6">
              <Zap className="w-5 h-5 text-electric-blue" />
              <span className="text-electric-blue text-sm font-grotesk uppercase tracking-wider">Our Services</span>
            </div>
            
            <h1 className="heading-hero text-4xl sm:text-5xl lg:text-7xl text-white mb-6">
              Digital Solutions<br />
              <span className="bg-gradient-to-r from-electric-blue via-cyber-purple to-hot-pink bg-clip-text text-transparent">
                For Nigerian Businesses
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We help local businesses grow online with modern websites, mobile apps, and digital tools 
              that attract customers and boost sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-full p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-gray-700/50 backdrop-blur-sm group-hover:border-electric-blue/30 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="heading-card text-2xl text-white mb-4 group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-green flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <div className="text-2xl font-grotesk font-bold text-white mb-4">
                        {service.price}
                      </div>
                      <Button className="w-full btn-primary bg-electric-blue hover:bg-cyber-purple">
                        Get Started <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="heading-section text-4xl lg:text-5xl text-white mb-6">
              Our <span className="text-electric-blue">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We keep it simple and clear, so you know exactly what to expect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-electric-blue to-cyber-purple rounded-2xl p-5">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-hot-pink rounded-full flex items-center justify-center text-white font-mono font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="heading-card text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Cloud, Smartphone, Code2, Database, Palette, Shield, Zap, Monitor, CheckCircle2 } from "lucide-react";
import { useNavigate } from "./Router";
import { motion } from "motion/react";

export function DemoShowcase() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Professional websites that make your business stand out online.",
      benefit: [
        "Corporate & SME Websites",
        "Business Landing Pages",
        "Blog & Portfolio Setup",
        "SEO for Google Search",
      ],
      color: "from-blue-500 to-cyan-500",
      price: "From ₦200,000",
    },
    {
      icon: Monitor,
      title: "Website Revamp",
      description: "Upgrade your current site with modern features to attract more customers.",
      benefit: ["Add Chatbots for Customer Service", "AI Integration", "SEO Optimization", "Payment Integration"],
      price: "From ₦150,000",
      color: "from-orange-glow to-hot-pink"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Custom apps that put your business in your customers’ hands.",
      benefit: ["Android & iOS Apps", "Customer Loyalty Apps", "Push Notifications", "Simple Admin Dashboard"],
      price: "From ₦400,000",
      color: "from-hot-pink to-orange-glow"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Solid systems that power your apps and websites behind the scenes.",
      benefit: ["REST APIs", "Database Setup", "User Accounts & Payments", "Scalable Architecture"],
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
    },
  ];

  return (
    <section className="bg-[#0a0a1a] py-20 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/5 "></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-600/5 rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-600/5 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-6 lg:p-8 bg-gradient-to-br from-gray-600/50 to-gray-700/30 border border-gray-700/50 backdrop-blur-sm overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl  p-3 lg:p-4 mb-6 relative `}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 300 },
                    rotate: { duration: 0.5 },
                  }}
                >
                  <IconComponent className="w-full h-full text-white" />

                  {/* Icon glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} blur-lg opacity-0 group-hover:opacity-30`}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-white text-lg lg:text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </motion.p>

                

                {/* Benefits list (if exists) */}
                {feature.benefit && (
                  <ul className="space-y-3 mt-4">
                    {feature.benefit.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Price (if exists) */}
                {feature.price && (
                  <motion.p className="text-2xl font-grotesk font-bold text-white mb-4 mt-6">
                    {feature.price}
                  </motion.p>
                )}

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <Zap className="w-5 h-5 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

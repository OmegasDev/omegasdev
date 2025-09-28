import React from "react";
import { motion } from "motion/react";
import { Code2, Palette, Database, Cloud, Smartphone, Zap, Globe, Users, TrendingUp, Rocket, Shield, Layers } from "lucide-react";

// Import the design assets
import circleAsset from "../assets/darkBgAsset.png";
import solidCircleAsset from "../assets/circleAsset.png";
import waveAsset from "figma:asset/56226bb63c56f89d5a430f67270f03462a759be6.png";

const features = [
  {
    icon: Code2,
    title: "Modern Development",
    description: "Cutting-edge technologies and frameworks for scalable applications",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work flawlessly across all devices",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description: "Robust and scalable backend systems with modern APIs",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless deployment and scaling with cloud services",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Palette,
    title: "UI/UX Excellence",
    description: "Beautiful, intuitive interfaces that users love",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security and data protection",
    color: "from-teal-500 to-blue-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#0a0a1a] to-[#1a1a2e] relative overflow-hidden">
      {/* Animated Background Assets */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 opacity-5"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <img src={circleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-0 w-48 h-48 opacity-10"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={solidCircleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 opacity-5"
        animate={{ 
          x: [0, 50, -50, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={waveAsset} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm uppercase tracking-wider">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building Digital Solutions<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Scale
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From concept to deployment, we deliver comprehensive digital solutions using the latest technologies 
            and best practices to ensure your project succeeds in today's competitive market.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
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
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
              >
                <div className="relative p-6 lg:p-8 bg-gradient-to-br from-gray-600/50 to-gray-700/30  border border-gray-700/50 backdrop-blur-sm overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl  p-3 lg:p-4 mb-6 relative `}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ 
                      scale: { type: "spring", stiffness: 300 },
                      rotate: { duration: 0.5 }
                    }}
                  >
                    <IconComponent className="w-full h-full text-white" />
                    
                    {/* Icon glow */}
                    <motion.div 
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} blur-lg opacity-0 group-hover:opacity-30`}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-white text-lg lg:text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {feature.description}
                  </motion.p>

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

        {/* Stats Section */}
        <motion.div 
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: Users, value: "50+", label: "Happy Clients" },
            { icon: Globe, value: "100+", label: "Projects Delivered" },
            { icon: TrendingUp, value: "99%", label: "Success Rate" },
            { icon: Layers, value: "24/7", label: "Support" }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl border border-gray-700/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-300 rounded-lg mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <StatIcon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-2xl lg:text-3xl text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
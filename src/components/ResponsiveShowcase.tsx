import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, Tablet, Smartphone, Laptop, Code, Palette, Database, Cloud } from "lucide-react";

// Import the design assets
import circleAsset from "../assets/darkBgAsset.png";
import solidCircleAsset from "../assets/circleAsset.png";
import waveAsset from "figma:asset/56226bb63c56f89d5a430f67270f03462a759be6.png";

const tabs = [
  { id: "desktop", label: "Desktop", icon: Monitor, isActive: true },
  { id: "laptop", label: "Laptop", icon: Laptop, isActive: false },
  { id: "tablet", label: "Tablet", icon: Tablet, isActive: false },
  { id: "mobile", label: "Mobile", icon: Smartphone, isActive: false },
];

export function ResponsiveShowcase() {
  const [activeTab, setActiveTab] = useState("desktop");

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] relative overflow-hidden">
      {/* Animated Background Assets */}
      <motion.div 
        className="absolute top-10 right-10 w-48 h-48 opacity-15"
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <img src={circleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 opacity-20"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={solidCircleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-0 w-full h-40 opacity-10"
        animate={{ 
          x: [0, 100, -100, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={waveAsset} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat"
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex bg-black/20 backdrop-blur-sm rounded-lg p-1 border border-white/10 overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label} Screen Layout</span>
                  <span className="sm:hidden">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Device Showcase */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Development Dashboard */}
          <div className="relative">
            <motion.div 
              className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Main Screen */}
              <motion.div 
                className="bg-black rounded-lg overflow-hidden mx-auto"
                style={{ 
                  width: "100%", 
                  maxWidth: activeTab === "mobile" ? "300px" : activeTab === "tablet" ? "500px" : "680px", 
                  height: activeTab === "mobile" ? "500px" : "420px" 
                }}
                layout
                transition={{ duration: 0.5 }}
              >
                {/* Browser Chrome */}
                <div className="bg-gray-900 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-2 sm:ml-4 text-xs text-gray-400 truncate">omega-dev.com</div>
                  <div className="ml-auto hidden sm:flex items-center gap-2 lg:gap-4 text-xs text-gray-400">
                    <span>HOME</span>
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                  </div>
                </div>
                
                {/* Development Dashboard Content */}
                <div className="bg-black p-4 sm:p-6 lg:p-8 h-full relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTc5MzI0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Developer Workspace"
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded"></div>
                  <motion.div 
                    className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-white text-xl sm:text-2xl lg:text-3xl mb-2">Omega'sDev</h2>
                    <p className="text-blue-400 text-xs sm:text-sm mb-3 lg:mb-4">Web & App Development Agency</p>
                    <motion.button 
                      className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded text-xs sm:text-sm flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                      Start Project
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Phone - Only show on larger screens */}
          <AnimatePresence>
            {activeTab !== "mobile" && (
              <motion.div 
                className="absolute right-4 sm:right-0 top-4 hidden sm:block"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [12, 15, 12],
                  opacity: 1,
                  x: 0
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-800 rounded-3xl p-2 shadow-xl" style={{ width: "140px", height: "280px" }}>
                  <div className="bg-black rounded-2xl h-full overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-gray-900 px-3 py-2 flex items-center justify-between">
                      <div className="text-xs text-gray-400">Omega'sDev</div>
                      <div className="w-4 h-2 bg-gray-700 rounded"></div>
                    </div>
                    
                    {/* Phone Content */}
                    <div className="p-3 bg-black h-full">
                      <h3 className="text-white text-xs mb-1">Mobile Development</h3>
                      <p className="text-gray-400 text-xs mb-2">React Native & Flutter</p>
                      <motion.button 
                        className="bg-blue-600 text-white px-2 py-1 rounded text-xs mb-3 flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Smartphone className="w-2 h-2" />
                        Get Quote
                      </motion.button>
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1730818875087-182c15e1e7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NTc5MzI0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Mobile Development"
                        className="w-full h-16 object-cover rounded mb-2"
                      />
                      <div className="text-xs text-white mb-2">Services</div>
                      <div className="grid grid-cols-2 gap-1">
                        <motion.div 
                          className="bg-blue-600 h-4 rounded flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs text-white">Web</span>
                        </motion.div>
                        <motion.div 
                          className="bg-purple-600 h-4 rounded flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs text-white">App</span>
                        </motion.div>
                        <motion.div 
                          className="bg-green-600 h-4 rounded flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs text-white">API</span>
                        </motion.div>
                        <motion.div 
                          className="bg-orange-600 h-4 rounded flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-xs text-white">UI/UX</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Code Editor Floating Panel */}
          <motion.div 
            className="absolute -left-8 sm:-left-16 top-8 hidden lg:block"
            animate={{ 
              rotate: [-6, -4, -6],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-700" style={{ width: "240px" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs ml-2 flex items-center gap-1">
                  <Database className="w-3 h-3" />
                  omega-app.tsx
                </span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-purple-400">import React from 'react';</div>
                <div className="text-blue-400">const</div>
                <div className="text-white">OmegaApp = () =&gt; &#123;</div>
                <div className="text-green-400 ml-2">// Building the future</div>
                <div className="text-yellow-400 ml-2">return (</div>
                <div className="text-white ml-4">&lt;Innovation /&gt;</div>
                <div className="text-yellow-400 ml-2">);</div>
                <div className="text-white">&#125;;</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute bottom-10 left-10 hidden xl:block">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg"
          >
            <Palette className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <div className="absolute top-20 right-10 hidden xl:block">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -360, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
          >
            <Cloud className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Service Description */}
        <motion.div 
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h3 
            className="text-white text-xl sm:text-2xl mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Technologies We Master
          </motion.h3>
          <motion.p 
            className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            At Omega'sDev, we leverage cutting-edge technologies to build responsive web applications, 
            native mobile apps, and scalable backend systems. From React and Next.js to React Native 
            and Node.js, we deliver solutions that perform flawlessly across all devices and platforms.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
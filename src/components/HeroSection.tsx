import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Play, Star } from "lucide-react";
import { useNavigate } from "./Router";

// Import the design assets for subtle background elements
import circleAsset from "../assets/circleAsset.png"; // Update the path to the actual location of the asset
import darkBgAsset from "../assets/darkBgAsset.png"; 
import heroAsset from "../assets/hero-mockup.jpg";
import numberThirty from "../assets/title-shape.png"

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-background min-h-screen relative overflow-hidden bg-grid-pattern">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <img src={darkBgAsset} alt="" className="w-full h-full object-cover opacity-70" />
      </div>

      <div className="absolute inset-0">
  <img
    src={heroAsset}
    alt=""
    className="w-full h-full object-contain opacity-40"
  />
</div>
      
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 opacity-15"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <img src={circleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We Build Web Applications That{" "}
              <span className="text-accent-blue">Drive Results</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-muted text-lg lg:text-xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
             Your website should do more than look good,  It should work hard for your business.<br/>
               At Omega’s Dev, We design and develop web solutions that engage, convert,
               and keep customers coming back.”
              </motion.p>
                
                {/* Key Benefits */}
                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    "Fast & Responsive Design",
                    "SEO Optimized",
                    "Mobile-First Approach",
                    "24/7 Support"
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                      <span className="text-primary-light font-medium">{benefit}</span>
                    </div>
                  ))}
                </motion.div>
            </motion.div>
            
            {/* CTA Buttons */}
<motion.div 
  className="flex flex-col sm:flex-row gap-4 sm:mb-8 px-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>
  <Button 
    className="btn-primary px-8 py-4 text-lg font-medium group"
    onClick={() => navigate("/contact")}
  >
    Start Your Project
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>

  <Button 
    variant="outline" 
    className="btn-secondary px-8 py-4 text-lg font-medium group"
    onClick={() => navigate("/portfolio")}
  >
    <Play className="w-5 h-5 mr-2" />
    View Our Work
  </Button>
</motion.div>


            <div className="relative">
  {/* Background Image */}
  <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
    <img 
      src={numberThirty} 
      alt="" 
      className="w-44 md:w-72 opacity-100 pointer-events-none select-none mb-4 "
    />
  </div>

  {/* Social Proof Numbers */}
  <motion.div 
    className="grid grid-cols-3 gap-8 pt-8 border-t border-muted relative z-10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2 }}
  >
    {[
      { number: "30+", label: "Projects Completed" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "5+", label: "Years Experience" }
    ].map((stat) => (
      <div key={stat.label} className="text-center">
        <div className="text-2xl lg:text-3xl font-bold text-accent-blue mb-1">
          {stat.number}
        </div>
        <div className="text-muted text-sm font-medium">{stat.label}</div>
      </div>
    ))}
  </motion.div>
</div>

          

          {/* Visual Showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10">
              {/* Main Display */}
              <motion.div 
                className="relative bg-card  p-6 shadow-professional-lg border border-muted"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background rounded-xl overflow-hidden border border-muted">
                  {/* Browser Chrome */}
                  <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-muted">
                    <div className="flex items-center gap-2">
                      
                    </div>
                    <div className="text-muted text-sm font-mono">omega-dev.com</div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="relative h-64 lg:h-80">

                  <motion.p 
              className="text-muted text-lg lg:text-xl leading-relaxed max-w-2xl p-2 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Professional web development services that help your business grow. 
              From custom websites to complex web applications, we deliver solutions 
              that convert visitors into customers.
            </motion.p>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      
                      <p className="text-muted text-sm mb-3">Web/App development Agency</p>
                      <Button className="bg-accent-blue hover:bg-blue-600 text-primary-light px-4 py-2 text-sm">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              

              
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
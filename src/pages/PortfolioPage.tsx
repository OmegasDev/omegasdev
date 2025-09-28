import React from "react";
import { Header } from "../components/Header";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag, Star, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import design assets for subtle background
import circleAsset from "../assets/darkBgAsset.png";
import darkBgAsset from "figma:asset/46d5bc8243dda45af32d8dad08f3b11b60f8bf40.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online store with payment integration, inventory management, and analytics dashboard",
    image: "https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNTc3OTQ3NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Web Application",
    description: "Real-time analytics platform with custom reporting and data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    technologies: ["Next.js", "TypeScript", "D3.js", "MongoDB"],
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "Website",
    description: "Modern corporate website with CMS integration and SEO optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    technologies: ["React", "Sanity CMS", "Tailwind CSS"],
    year: "2024",
    featured: false
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Application", 
    description: "Patient management system with appointment scheduling and telemedicine features",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    year: "2023",
    featured: false
  },
  {
    id: 5,
    title: "Restaurant Management System",
    category: "Web Application",
    description: "Complete restaurant POS system with inventory tracking and customer management",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", 
    technologies: ["React", "Express", "MongoDB"],
    year: "2023",
    featured: false
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Website",
    description: "Property listing website with advanced search and virtual tour integration",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    year: "2023",
    featured: false
  }
];

const categories = ["All", "Web Development", "Web Application", "Website"];

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden bg-grid-pattern">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <img src={darkBgAsset} alt="" className="w-full h-full object-cover opacity-5" />
      </div>
      
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <img src={circleAsset} alt="" className="w-full h-full" />
      </motion.div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-muted rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-accent-blue" />
              <span className="text-muted text-sm font-medium">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light mb-6">
              Our Recent <span className="text-accent-blue">Projects</span>
            </h1>
            
            <p className="text-muted text-lg lg:text-xl max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful web development projects. 
              Each solution is crafted to meet specific business goals and deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-accent-blue text-primary-light shadow-professional"
                    : "bg-card text-muted border border-muted hover:bg-secondary hover:text-primary-light"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard project={project} index={index} isMobile />
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 auto-rows-min">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index, isMobile = false, ...props }) {
  const gridClasses = project.featured 
    ? "lg:col-span-8" 
    : "lg:col-span-4";

  return (
    <motion.div
      className={`group relative ${!isMobile ? gridClasses : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className={`bg-card rounded-2xl border border-muted overflow-hidden group-hover:border-accent-blue/50 transition-all duration-300 shadow-professional ${
        project.featured ? 'min-h-[500px]' : 'min-h-[400px]'
      }`}>
        
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              project.featured ? 'h-64 lg:h-80' : 'h-48 lg:h-64'
            }`}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button size="sm" className="bg-accent-blue hover:bg-blue-600 text-primary-light">
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-card hover:bg-secondary text-primary-light border border-muted">
              <Github className="w-4 h-4" />
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-blue/20 backdrop-blur-sm text-accent-blue rounded-full text-sm font-medium border border-accent-blue/30">
              <Tag className="w-3 h-3" />
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-muted text-sm">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent-blue/10 text-accent-blue rounded text-sm font-medium">
                <TrendingUp className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          
          <h3 className="text-xl lg:text-2xl font-bold text-primary-light mb-3 group-hover:text-accent-blue transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-primary-light rounded-lg text-sm font-medium border border-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="w-full btn-primary">
            View Project Details
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
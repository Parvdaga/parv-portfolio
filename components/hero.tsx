"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles, Code2 } from "lucide-react"
import { DownloadButton } from "./download-button"
import Image from "next/image" // <-- 1. Import the Image component

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-bounce-gentle" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Welcome to my portfolio</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Parv Daga</span>
          </h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 leading-relaxed">
            <Code2 className="inline h-8 w-8 mr-2 text-primary" />
            Full Stack Developer & <span className="gradient-text">AI Enthusiast</span>
          </h2>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Building innovative solutions with modern web technologies and artificial intelligence. Currently pursuing
            Computer Science with a minor in AI & ML at VIT Bhopal.
          </p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <DownloadButton fileUrl="/Parv Daga Resume.pdf" fileName="Parv_Daga_Resume.pdf" size="lg" />
            <Button variant="outline" asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <motion.div variants={itemVariants} className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 hover:bg-primary/10">
              <a
                href="https://linkedin.com/in/parvdaga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 hover:bg-primary/10">
              <a href="https://github.com/parvdaga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 hover:bg-primary/10">
              <a href="mailto:parvdaga29@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 hover:bg-primary/10">
              <a href="tel:+919826651800" aria-label="Phone">
                <Phone className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Profile image container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl floating-animation pulse-glow">
            <Image
              src="/profile.jpg"
              alt="Parv Daga"
              width={400}
              height={400}
              priority={true}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
            />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Code2 className="h-8 w-8 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Sparkles className="h-6 w-6 text-purple-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

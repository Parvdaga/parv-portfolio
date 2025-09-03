"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ExternalLink, Rocket, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const projectVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const projects = [
  {
    title: "Travel Agency Payment Management System",
    period: "Mar 2025 – Apr 2025",
    description: [
      "Developed a complete payment transaction platform using Node.js, React, and MongoDB.",
      "Enabled customer selection, online/offline payment options, and secure submission.",
      "Integrated WhatsApp API and email automation for real-time confirmations.",
      "Built admin dashboard and automated PDF invoice generation.",
    ],
    link: "https://github.com/Parvdaga/payflow-nexus-manager",
  },
  {
    title: "Smart Object Detector (YOLOv8 + Voice Control)",
    period: "Mar 2025 – Apr 2025",
    description: [
      "Built a real-time object detector with 95% accuracy, identifying objects by class and color.",
      "Integrated voice commands (Google Speech API) and text-to-speech feedback.",
      "Optimized YOLOv8 model to process 30 FPS with a confidence threshold of 0.5.",
      "Reduced false positives by 40% using multi-attribute verification",
    ],
    link: "https://github.com/Parvdaga/voice-controlled-object-detection",
  },
  {
    title: "MicroTaskVault – AI-powered SaaS Platform",
    period: "Oct 2024 – Apr 2025",
    description: [
      "Leading frontend using Next.js and Tailwind CSS, integrating Supabase for scalable backend.",
      "Developed ML-powered automation features and participated in blockchain integration efforts.",
      "Worked cross-functionally on frontend-backend synergy and deployment pipelines.",
    ],
    link: "https://your-link-to-microtaskvault.com", // <-- FIX HERE
  },
  {
    title: "Plant Leaf Disease Detection (ML – CNN/SVM/RF)",
    period: "Oct 2023 – Dec 2023",
    description: [
      "Built and evaluated CNN, SVM, and Random Forest models to detect diseases in apple leaves.",
      "Achieved 90% accuracy, optimized model performance, and visualized metrics with Matplotlib.",
    ],
    link: "https://github.com/Parvdaga/Instance-segmentation-for-plants-leaf-disease-detection",
  },
  {
    title: "Solar Radiation Prediction using Regression",
    period: "Jan 2024 – May 2024",
    description: [
      "Used Linear Regression to predict solar radiation from weather datasets.",
      "Achieved 85% accuracy, applied data preprocessing and visualization with NumPy & Matplotlib.",
    ],
    link: "https://your-link-to-solar-prediction.com", // <-- FIX HERE
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-16 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Projects</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={projectVariants}
            whileHover={{ 
              scale: 1.03,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="h-full glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full relative">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
                  <div className="flex items-center gap-3 text-muted-foreground mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{project.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 list-disc list-inside text-muted-foreground mb-8 flex-grow text-base leading-relaxed">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Button variant="outline" size="default" className="w-fit group-hover:scale-105 transition-all duration-300" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Project <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects

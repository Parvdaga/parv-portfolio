"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    link: "#",
  },
  {
    title: "MicroTaskVault – AI-powered SaaS Platform",
    period: "Ongoing",
    description: [
      "Leading frontend using Next.js and Tailwind CSS, integrating Supabase for scalable backend.",
      "Developed ML-powered automation features and participated in blockchain integration efforts.",
      "Worked cross-functionally on frontend-backend synergy and deployment pipelines.",
    ],
    link: "#",
  },
  {
    title: "Plant Leaf Disease Detection (ML – CNN/SVM/RF)",
    period: "Oct 2023 – Dec 2023",
    description: [
      "Built and evaluated CNN, SVM, and Random Forest models to detect diseases in apple leaves.",
      "Achieved 90% accuracy, optimized model performance, and visualized metrics with Matplotlib.",
    ],
    link: "#",
  },
  {
    title: "Solar Radiation Prediction using Regression",
    period: "Jan 2024 – May 2024",
    description: [
      "Used Linear Regression to predict solar radiation from weather datasets.",
      "Achieved 85% accuracy, applied data preprocessing and visualization with NumPy & Matplotlib.",
    ],
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground mb-6 flex-grow">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-fit" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

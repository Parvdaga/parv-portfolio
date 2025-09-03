"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, Cpu, Terminal, Cloud, Braces, Zap } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS" ],
  },
  {
    title: "Machine Learning & AI",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["TensorFlow", "Scikit-Learn", "NumPy", "Matplotlib", "CNNs", "RNNs", "NLP", "Prompt Engineering"],
  },
  {
    title: "Systems & Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Git", "VS Code", "Langchain", "n8n.io", "Supabase", "MongoDB"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "SQL (Basic)"],
  },
  {
    title: "Cloud/DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["Microservices", "Web Scraping"],
  },
  {
    title: "Core CS",
    icon: <Braces className="h-5 w-5" />,
    skills: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "TCP/IP",
    ],
  },
  {
    title: "Operating Systems",
    icon: <Server className="h-5 w-5" />,
    skills: ["Linux/Unix", "Windows"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Technical Skills</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl gradient-bg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3 flex-grow">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill} 
                      className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-default"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, Cpu, Terminal, Cloud, Braces } from "lucide-react"

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
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">AI & Full-Stack Developer Intern</h3>
                  <p className="text-primary font-medium">Tuileip AI Solutions</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 2025 – March 2025</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Briefcase className="h-4 w-4" />
                <span>Remote</span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  Engineered automation workflows using n8n.io and Python to process 500+ daily video searches via LLM
                  APIs, improving summarization efficiency by 30%.
                </li>
                <li>Optimized AI content pipelines using NLP and prompt engineering, reducing manual edits by 25%.</li>
                <li>
                  Developed a React.js frontend integrated with Node.js microservices, supporting 10k+ active users at
                  launch.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">President, Linux Club</h3>
                  <p className="text-primary font-medium">VIT Bhopal</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>May 2024 – Present</span>
                </div>
              </div>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  Organized AdVITya 2024 & 2025 with 600+ participants, generating a combined revenue of ₹2 lakh and
                  profit of ₹1 lakh through strategic partnerships and digital campaigns.
                </li>
                <li>
                  Served as Student Coordinator for the Cyber Save Hackathon, jointly organized by VIT Bhopal and Madhya
                  Pradesh Police.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, Award, TrendingUp } from "lucide-react"

const experienceVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 right-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Work Experience</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          variants={experienceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-br-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:gradient-text transition-all duration-300">AI & Full-Stack Developer Intern</h3>
                  <p className="text-primary font-semibold text-lg">Tuileip AI Solutions</p>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Jan 2025 – March 2025</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="font-medium">Remote</span>
              </div>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground text-base leading-relaxed">
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
          variants={experienceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-display font-semibold group-hover:gradient-text transition-all duration-300">President, Linux Club</h3>
                  </div>
                  <p className="text-primary font-semibold text-lg">VIT Bhopal</p>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">May 2024 – Present</span>
                </div>
              </div>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground text-base leading-relaxed">
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

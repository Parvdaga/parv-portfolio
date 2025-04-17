"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { DownloadButton } from "./download-button"

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6">
          Hey! I’m a Computer Science Engineering student with a minor in Artificial Intelligence and Machine Learning, graduating in 2026. I’m passionate about building impactful digital products—from full-stack web applications to intelligent ML models.
          </p>
          <p className="text-lg mb-6">
          As the President of the Linux Club at VIT Bhopal, I’ve led technical and non-technical teams, scaled operations, and launched development-focused initiatives. I’ve also worked on a variety of projects, including SaaS products, automation tools, and production-grade websites for startups.
          </p>
          <p className="text-lg mb-6">
          I love blending tech with business strategy, and I'm currently working on MicroTaskVault, a SaaS product that streamlines microtask management using AI automation.
          </p>
          <p className="text-lg">
          When I’m not building something cool, you’ll probably find me exploring design ideas, solving DSA problems, or brewing up the next big idea over a cup of coffee
          </p>
          <div className="mt-6">
            <DownloadButton fileUrl="/Parv_Daga_Resume.pdf" fileName="Parv_Daga_Resume.pdf" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Indore, India</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Preferred Locations</p>
                  <p className="text-muted-foreground">Bengaluru, Gurugram, Hyderabad, Mumbai, Pune</p>
                </div>
                <div>
                  <p className="font-medium">Languages</p>
                  <p className="text-muted-foreground">English (Fluent), Hindi (Fluent)</p>
                </div>
                <div>
                  <p className="font-medium">Interests</p>
                  <p className="text-muted-foreground">
                  Open-source contributions, Competitive programming, UI/UX design and creative problem-solving, Building SaaS products & automation tools, Exploring startup ecosystems and business models, Tech blogging & content creation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About

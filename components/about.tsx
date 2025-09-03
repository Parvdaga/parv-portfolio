"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Heart, Coffee, Lightbulb } from "lucide-react"
import { DownloadButton } from "./download-button"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">About Me</h2>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg mb-6 leading-relaxed">
          Hey! I’m a Computer Science Engineering student with a minor in Artificial Intelligence and Machine Learning, graduating in 2026. I’m passionate about building impactful digital products—from full-stack web applications to intelligent ML models.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          As the President of the Linux Club at VIT Bhopal, I’ve led technical and non-technical teams, scaled operations, and launched development-focused initiatives. I’ve also worked on a variety of projects, including SaaS products, automation tools, and production-grade websites for startups.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          I love blending tech with business strategy, and I'm currently working on MicroTaskVault, a SaaS product that streamlines microtask management using AI automation.
          </p>
          <p className="text-lg leading-relaxed flex items-center gap-2">
          When I'm not building something cool, you'll probably find me exploring design ideas, solving DSA problems, or brewing up the next big idea over a cup of coffee
          <Coffee className="h-5 w-5 text-primary animate-bounce-gentle" />
          </p>
          <motion.div 
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <DownloadButton fileUrl="/Parv_Daga_Resume.pdf" fileName="Parv_Daga_Resume.pdf" size="lg" />
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
                <h3 className="text-2xl font-display font-semibold">Personal Details</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-0.5 group-hover:animate-bounce-gentle" />
                  <div>
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-muted-foreground text-base">Indore, India</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-lg">Preferred Locations</p>
                  <p className="text-muted-foreground text-base">Bengaluru, Gurugram, Hyderabad, Mumbai, Pune</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Languages</p>
                  <p className="text-muted-foreground text-base">English (Fluent), Hindi (Fluent)</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-lg">Interests</p>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
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

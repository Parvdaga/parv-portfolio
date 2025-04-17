"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import { DownloadButton } from "./download-button"

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Parv Daga</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Building innovative solutions with modern web technologies and artificial intelligence. Currently pursuing
            Computer Science with a minor in AI & ML at VIT Bhopal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <DownloadButton fileUrl="/Parv Daga Resume.pdf" fileName="Parv_Daga_Resume.pdf" />
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/parvdaga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/parvdaga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:parvdaga29@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:+919826651800" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="/profile.jpg?height=320&width=320" alt="Parv Daga" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

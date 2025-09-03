"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, BookOpen, Award, Trophy, Star } from "lucide-react"

const educationVariants = {
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

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 right-16 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-16 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Education</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:gradient-text transition-all duration-300">VIT Bhopal University</h3>
                  <p className="text-primary font-semibold text-lg">Bachelor of Technology in Computer Science Engineering</p>
                  <p className="text-muted-foreground font-medium">Minor: Artificial Intelligence & Machine Learning</p>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground whitespace-nowrap">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium">Expected Graduation: May 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <Star className="h-5 w-5 text-primary" />
                <span className="font-semibold text-lg">CGPA: 8.45/10</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-lg">Relevant Coursework</h4>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Distributed Systems, Linux/Unix, Data Structures & Algorithms, Machine Learning, NLP
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:gradient-text transition-all duration-300">Advanced Academy</h3>
                  <p className="text-primary font-semibold text-lg">Indore, Madhya Pradesh</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">CBSE 12th – 84% | June 2022</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">CBSE 10th – 87% | June 2020</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-display font-semibold group-hover:gradient-text transition-all duration-300">Certifications</h3>
              </div>
              <ul className="space-y-4 list-disc list-inside text-muted-foreground text-base leading-relaxed">
                <li>Applied Machine Learning in Python – University of Michigan (Coursera), Dec 2023</li>
                <li>Introduction to Python – VITyarthi, May 2023</li>
                <li>Web Development – MyCaptain, June 2023</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={educationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-display font-semibold group-hover:gradient-text transition-all duration-300">Achievements</h3>
              </div>
              <ul className="space-y-4 list-disc list-inside text-muted-foreground text-base leading-relaxed">
                <li>Full Stack Hackathon: Built a real-time chat app using MERN stack under mentorship.</li>
                <li>TCS IT Wiz – Secured 9th rank in Indore region</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

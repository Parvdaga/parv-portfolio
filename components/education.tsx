"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, BookOpen } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Education</h2>
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
                  <h3 className="text-xl font-semibold">VIT Bhopal University</h3>
                  <p className="text-primary font-medium">Bachelor of Technology in Computer Science Engineering</p>
                  <p className="text-muted-foreground">Minor: Artificial Intelligence & Machine Learning</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>Expected Graduation: May 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <GraduationCap className="h-4 w-4" />
                <span>CGPA: 8.45/10</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Relevant Coursework</h4>
                </div>
                <p className="text-muted-foreground">
                  Distributed Systems, Linux/Unix, Data Structures & Algorithms, Machine Learning, NLP
                </p>
              </div>
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
                  <h3 className="text-xl font-semibold">Advanced Academy</h3>
                  <p className="text-primary font-medium">Indore, Madhya Pradesh</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>CBSE 12th – 84% | June 2022</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>CBSE 10th – 87% | June 2020</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Applied Machine Learning in Python – University of Michigan (Coursera), Dec 2023</li>
                <li>Introduction to Python – VITyarthi, May 2023</li>
                <li>Web Development – MyCaptain, June 2023</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
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

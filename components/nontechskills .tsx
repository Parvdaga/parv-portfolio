"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, MessageSquare, Clock, Lightbulb, TrendingUp, Heart, Zap } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
}

const skillCardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const skillCategories = [
  {
    title: "Leadership & Management",
    icon: <Users className="h-6 w-6" />,
    skills: ["Leadership", "Team Management", "Decision Making","Organizational Skills", "Event Management" ],
  },
  {
    title: "Business & Strategy",
    icon: <Target className="h-6 w-6" />,
    skills: ["Business Development", "Strategic Thinking", "Entrepreneurial Mindset", "Branding & Marketing", "Customer-Centric Thinking"],
  },
  {
    title: "Communication & Content",
    icon: <MessageSquare className="h-6 w-6" />,
    skills: ["Communication Skills", "Public Speaking"],
  },
  {
    title: "Personal Effectiveness",
    icon: <Clock className="h-6 w-6" />,
    skills: ["Crisis Management", "Problem Solving",  "Time Management"],
  }
]

const Nontechskills = () => {
  return (
    <section id="nontechskills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-12 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <Heart className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Non Technical Skills</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={skillCardVariants}
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
                  <h3 className="text-xl font-display font-semibold group-hover:gradient-text transition-all duration-300">{category.title}</h3>
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

export default Nontechskills

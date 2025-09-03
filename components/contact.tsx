"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Zap } from "lucide-react"

const contactVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="h-8 w-8 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Contact Me</h2>
        </div>
        <div className="h-1.5 w-24 gradient-bg rounded-full mb-8 shadow-lg"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-8 group-hover:gradient-text transition-all duration-300">Get In Touch</h3>
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-xl gradient-bg text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a
                      href="mailto:parvdaga29@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-base hover:underline"
                    >
                      parvdaga29@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-xl gradient-bg text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <a href="tel:+919826651800" className="text-muted-foreground hover:text-primary transition-all duration-300 text-base hover:underline">
                      +91 9826651800
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 rounded-xl gradient-bg text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground text-base">Indore, India</p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass-effect border-2 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-8 group-hover:gradient-text transition-all duration-300">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="rounded-xl border-2 focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full group" size="lg">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                  Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

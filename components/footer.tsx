import { motion } from "framer-motion"
import { Heart, Coffee } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 border-t-2 border-border/50 bg-gradient-to-r from-background to-secondary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-base font-medium">© {currentYear} Parv Daga. All rights reserved.</p>
          <div className="flex items-center gap-2 text-muted-foreground text-base mt-2 md:mt-0">
            <span>Made with</span>
            <Heart className="h-5 w-5 text-red-500 animate-bounce-gentle" />
            <span>&</span>
            <Coffee className="h-5 w-5 text-primary animate-bounce-gentle" />
            <span>by Parv Daga</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

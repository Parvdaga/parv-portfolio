import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Nontechskills from "@/components/nontechskills "
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Nontechskills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Parv Daga. All rights reserved.</p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">Made with ❤️ & a lot of coffee by Parv Daga</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

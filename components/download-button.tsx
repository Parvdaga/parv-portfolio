import { Download } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface DownloadButtonProps extends ButtonProps {
  fileUrl: string
  fileName: string
}

export function DownloadButton({ fileUrl, fileName, className, ...props }: DownloadButtonProps) {
  return (
    <Button variant="outline" className={`group ${className}`} asChild {...props}>
      <a href={fileUrl} download={fileName}>
        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
        Download Resume
      </a>
    </Button>
  )
}

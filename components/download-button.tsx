import { Download } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface DownloadButtonProps extends ButtonProps {
  fileUrl: string
  fileName: string
}

export function DownloadButton({ fileUrl, fileName, className, ...props }: DownloadButtonProps) {
  return (
    <Button variant="outline" className={className} asChild {...props}>
      <a href={fileUrl} download={fileName}>
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </a>
    </Button>
  )
}

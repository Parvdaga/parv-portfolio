"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function PdfInstructions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Adding Your Resume PDF</CardTitle>
        <CardDescription>Follow these steps to add your actual resume PDF</CardDescription>
      </CardHeader>
      <CardContent>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Instructions</AlertTitle>
          <AlertDescription>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Export your resume as a PDF file named &quot;Parv_Daga_Resume.pdf&quot;</li>
              <li>
                Place the PDF file in the <code className="bg-muted px-1 py-0.5 rounded">public</code> folder of your
                Next.js project
              </li>
              <li>The download button will automatically link to this file</li>
              <li>You can update the PDF file anytime by replacing it in the public folder</li>
            </ol>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}

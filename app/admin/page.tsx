import { PdfInstructions } from "@/components/pdf-instructions"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Instructions</h1>
      <div className="max-w-2xl mx-auto">
        <PdfInstructions />
      </div>
    </div>
  )
}

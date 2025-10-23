"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface PdfViewerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  pdfUrl: string
}

export function PdfViewerDialog({ open, onOpenChange, pdfUrl }: PdfViewerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[95vw] w-[95vw] h-[90vh] p-0 gap-0 bg-gray-900 rounded-lg border-0" showCloseButton={false}>
        <DialogTitle className="sr-only">PDF Document Viewer</DialogTitle>
        <div className="relative w-full h-full flex flex-col">
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-full bg-white/90 hover:bg-white p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label="Close PDF viewer"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          <div className="w-full h-full">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0 rounded-lg"
              title="PDF Viewer"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

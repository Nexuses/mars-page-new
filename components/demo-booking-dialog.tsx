"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// Removed Supabase import as we're now using SMTP email
import { toast } from "sonner"

interface DemoBookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoBookingDialog({ open, onOpenChange }: DemoBookingDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    company_email: "",
    name: "",
    position: "",
    preferred_date: "",
    preferred_time: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/demo-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Demo booking request submitted successfully!", {
          description: "We'll get back to you shortly to confirm your demo.",
        })

        setFormData({
          company_email: "",
          name: "",
          position: "",
          preferred_date: "",
          preferred_time: "",
        })

        onOpenChange(false)
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit demo booking')
      }
    } catch (error) {
      console.error("Error submitting demo booking:", error)
      toast.error("Failed to submit booking request", {
        description: "Please try again or contact support.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Schedule a Demo</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you to confirm your demo session.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="space-y-2">
            <Label htmlFor="company_email" className="text-sm font-medium">
              Company Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="company_email"
              name="company_email"
              type="email"
              placeholder="you@company.com"
              value={formData.company_email}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position" className="text-sm font-medium">
              Position <span className="text-red-500">*</span>
            </Label>
            <Input
              id="position"
              name="position"
              type="text"
              placeholder="Hiring Manager"
              value={formData.position}
              onChange={handleChange}
              required
              className="h-11"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferred_date" className="text-sm font-medium">
                Preferred Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="preferred_date"
                name="preferred_date"
                type="date"
                value={formData.preferred_date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferred_time" className="text-sm font-medium">
                Preferred Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="preferred_time"
                name="preferred_time"
                type="time"
                value={formData.preferred_time}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 h-11"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-11 font-semibold"
              style={{ backgroundColor: "#B3262F" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Schedule Demo"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

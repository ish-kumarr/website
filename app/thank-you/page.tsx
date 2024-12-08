import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">Your form has been submitted successfully. We&apos;ll be in touch soon!</p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}


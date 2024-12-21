import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Career Discovery',
  description: 'Career Discovery Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white pt-32 pb-16">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-400 to-blue-100 opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              At Career Discovery, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-primary px-6">1. Information We Collect</AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>We collect personal information that you voluntarily provide to us when you use our services, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Name, email address, and phone number</li>
                <li>Educational background and career interests</li>
                <li>Assessment results and career preferences</li>
                <li>Information provided in forms, surveys, or other interactive portions of our service</li>
              </ul>
              <p className="mt-2">We may also automatically collect certain information about your device, including your IP address, browser type, and operating system.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Add more AccordionItems for the remaining sections */}
        </Accordion>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              By using Career Discovery, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button asChild variant="ghost">
            <Link href="/" className="inline-flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


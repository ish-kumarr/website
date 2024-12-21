import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Career Discovery',
  description: 'Career Discovery Terms of Service - Read our terms and conditions for using our career guidance and educational planning services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white pt-32 pb-16">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-400 to-blue-100 opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Welcome to Career Discovery. These Terms of Service govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-primary px-6">1. Acceptance of Terms</AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>By accessing or using Career Discovery&apos;s services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-primary px-6">2. Description of Service</AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>Career Discovery provides career guidance and educational planning services to students and parents. Our services include, but are not limited to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Career assessments and personality tests</li>
                <li>Personalized career advice and counseling</li>
                <li>Educational resources and learning materials</li>
                <li>College and university application assistance</li>
                <li>Interview preparation and resume building workshops</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Add more AccordionItems for the remaining sections */}
        </Accordion>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              By using Career Discovery, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
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


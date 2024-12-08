import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Career Discovery',
  description: 'Career Discovery Cookie Policy - Learn about how we use cookies and similar technologies on our website.',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white pt-32 pb-16">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-400 to-blue-100 opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              This Cookie Policy explains how Career Discovery uses cookies and similar technologies to recognize you when you visit our website. 
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-primary px-6">1. What Are Cookies</AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
              <p className="mt-2">Cookies set by the website owner (in this case, Career Discovery) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>
            </AccordionContent>
          </AccordionItem>

          {/* Add more AccordionItems for the remaining sections */}
        </Accordion>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">
              By using Career Discovery, you acknowledge that you have read and understood this Cookie Policy and agree to its terms.
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


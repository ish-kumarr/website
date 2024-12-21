'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import TestimonialsMobile from './TestimonialsMobile'

const Blob1 = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path fill="currentColor" d="M41.3,-70.9C53.9,-64.3,64.6,-53.1,71.5,-39.8C78.4,-26.5,81.5,-11,80.3,3.7C79.1,18.4,73.6,32.3,65.3,44.1C57.1,55.9,46.1,65.6,33.6,70.5C21.1,75.4,7.1,75.5,-6.7,74.3C-20.5,73.1,-34,70.6,-45.6,64.3C-57.2,58,-66.8,47.9,-71.8,36C-76.8,24.1,-77.2,10.5,-76.1,-2.6C-75,-15.8,-72.4,-28.5,-65.8,-38.3C-59.2,-48,-48.6,-54.8,-37.4,-62.4C-26.2,-69.9,-13.1,-78.2,0.8,-79.5C14.7,-80.8,29.4,-75.1,41.3,-70.9Z" transform="translate(100 100)" />
  </svg>
)

const Blob2 = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path fill="currentColor" d="M45.4,-77.5C58.9,-69.7,70,-56.6,77.7,-41.9C85.5,-27.2,89.8,-11,88.5,4.8C87.2,20.5,80.2,35.8,70.6,48.7C61,61.6,48.8,72.1,34.9,77.7C21,83.3,5.4,84,-9.4,81.1C-24.2,78.3,-38.2,72,-50.8,63C-63.5,54,-74.8,42.3,-79.3,28.6C-83.8,14.8,-81.5,-1,-76.9,-15.6C-72.2,-30.2,-65.3,-43.6,-54.9,-52.9C-44.5,-62.2,-30.7,-67.4,-16.6,-71.5C-2.5,-75.6,11.8,-78.6,26.3,-79.1C40.8,-79.6,55.4,-77.6,45.4,-77.5Z" transform="translate(100 100)" />
  </svg>
)

const testimonials = [
  {
    quote: "We helped him develop and deliver online financial literacy workshops in collaboration with NGOs, allowing him to give back while exploring his passion.",
    name: "Aarav Kaushik",
    role: "Student",
    company: "United World College of South East Asia, Singapore",
    image: "https://i.imgur.com/gbf5drV.png"
  },
  {
    quote: "We guided him in establishing Celebrate Smiles, a unique marketplace NGO connecting donors with nonprofits to fulfill essential needs, creating positive and lasting impacts.",
    name: "Girik Gupta",
    role: "Student",
    company: "DPS International, Gurgaon, India",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "We supported her in launching a podcast featuring diverse voices and assisted with research on women's voting roles, boosting her platform and impact.",
    name: "Ishaani Agarwal",
    role: "Student",
    company: "Modern School, Barakhambha Road, India",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "We helped her launch a project focused on advocating for transgender rights and raising awareness through outreach, educational resources, and community partnerships.",
    name: "Safira Chatwal",
    role: "Student",
    company: "Marlborough College, United Kingdom",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "We connected her with resources, training, and mentorship to launch a sustainable fashion initiative empowering underprivileged women through skill development and economic opportunities.",
    name: "Aadya Kapur",
    role: "Student",
    company: "Shri Ram Moulsari, Gurgaon, India",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    quote: "We helped her create and promote a video series on Instagram highlighting inspiring stories of heroes from around the globe, broadening her reach and impact.",
    name: "Anaya Agarwal",
    role: "Student",
    company: "Pathways School, Gurgaon, India",
    image: "/placeholder.svg?height=80&width=80"
  }
]

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[400px] bg-white rounded-xl p-6 mx-4 flex-shrink-0">
    <div className="mb-4">
      <p className="text-lg text-gray-800">{testimonial.quote}</p>
    </div>
    <div className="flex items-center">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="ml-3">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
  </div>
)

export default function SuccessStories() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const repeatedTestimonials = [...Array(5)].flatMap(() => testimonials);

  return (
    <>
      {isMobile ? (
        <TestimonialsMobile />
      ) : (
        <section className="py-20 bg-[#2e5ee6] relative overflow-hidden">
          <Blob1 className="absolute top-0 left-0 text-indigo-400/30 w-96 h-96 -translate-x-1/2 -translate-y-1/2" />
          <Blob2 className="absolute bottom-0 right-0 text-indigo-400/30 w-96 h-96 translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
                <Star className="w-4 h-4 text-white mr-2 fill-white" />
                <span className="text-sm text-white">Rated 4/5 by over 1 Lakh users</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white max-w-3xl mx-auto">
              Success Stories from Our Students
            </h2>
          </div>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#2e5ee6] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#2e5ee6] to-transparent z-10"></div>

            {/* First Row - Left to Right */}
            <div className="mb-8">
              <div className="flex animate-marquee">
                {repeatedTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div>
              <div className="flex animate-marquee-reverse">
                {repeatedTestimonials.reverse().map((testimonial, index) => (
                  <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}


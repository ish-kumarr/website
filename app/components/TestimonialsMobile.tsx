'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "We helped him develop and deliver online financial literacy workshops in collaboration with NGOs, allowing him to give back while exploring his passion.",
    name: "Aarav Kaushik",
    role: "Student",
    company: "United World College of South East Asia, Singapore",
    image: "/placeholder.svg?height=80&width=80"
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
  <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
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

export default function TestimonialsMobile() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevTestimonial()
      } else if (event.key === 'ArrowRight') {
        nextTestimonial()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-16 bg-[#4338ca] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
            <Star className="w-4 h-4 text-white mr-2 fill-white" />
            <span className="text-sm text-white">Rated 4/5 by over 1 Lakh users</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Success Stories from Our Students
        </h2>

        <div className="relative overflow-visible">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  nextTestimonial()
                } else if (swipe > swipeConfidenceThreshold) {
                  prevTestimonial()
                }
              }}
              className="w-full"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={prevTestimonial}
            className="bg-white/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="bg-white/30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}


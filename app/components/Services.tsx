'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Megaphone, Cpu, Brain, Database, Briefcase, Mic, CreditCard, Microscope, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const careerPathways = [
  {
    title: "MARKETING",
    icon: Megaphone,
    details: ["Social Media Strategy", "Influencer Marketing Campaign", "Brand Engagement", "New Product Launch", "Market Research"],
    outcomes: ["Agency", "Brand Page", "Content Creator"],
    gradient: "from-pink-400 to-red-500"
  },
  {
    title: "ROBOTICS",
    icon: Cpu,
    details: ["Hands-on Experience", "Robotics Basics and Application", "Pick and Place Robotic Arm", "In-Depth Training Sessions"],
    outcomes: ["Robots", "Start-up", "Robotics Engineer"],
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "A.I.",
    icon: Brain,
    details: ["Introduction to A.I.", "A.I. and its Application", "A.I. Chatbot", "A.I. Integration"],
    outcomes: ["Website", "Apps", "AI Chatbot"],
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "DATA SCIENCE",
    icon: Database,
    details: ["Data Analytics", "Statistics and its Uses", "Data Science in Real World", "Insightful Sessions"],
    outcomes: ["Research", "Market Analysis", "Data Scientist"],
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    title: "ENTREPRENEURSHIP",
    icon: Briefcase,
    details: ["Podcast Series", "Report on Local Community Issue", "Public Speaking Skills Workshop", "Blogs", "Interview Series"],
    outcomes: ["Start-up", "Fashion Store", "Non-profit"],
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "JOURNALISM/PUBLIC SPEAKING",
    icon: Mic,
    details: ["Podcast Series", "Report on Local Community Issue", "Public Speaking Skills Workshop", "Blogs", "Interview Series"],
    outcomes: ["Influencer", "Anchor", "Podcast"],
    gradient: "from-red-400 to-pink-500"
  },
  {
    title: "FINANCE/ECONOMICS",
    icon: CreditCard,
    details: ["Personal Finance", "Financial Management", "Financial Literacy Campaign", "Basics of Cryptocurrency"],
    outcomes: ["Financial Tools", "Clubs", "Apps and Website"],
    gradient: "from-green-400 to-blue-500"
  },
  {
    title: "S.T.E.M.",
    icon: Microscope,
    details: ["Research Paper with Acclaimed Professors of Prestigious Colleges", "Mentoring and Training Sessions"],
    outcomes: ["Research", "Publications", "Paper Analysis"],
    gradient: "from-indigo-400 to-purple-500"
  }
]

const CareerCard = ({ career, isMobile }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event from bubbling up to the carousel
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`relative w-full ${isMobile ? 'h-[400px]' : 'h-[320px]'} cursor-pointer perspective`}
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`}>
          <div>
            <career.icon className="w-12 h-12 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-white">{career.title}</h3>
            <ul className="text-sm text-white">
              {career.details.map((detail, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View outcomes
            </button>
          )}
        </div>
        <div 
          className={`absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col justify-between backface-hidden bg-gradient-to-br ${career.gradient}`} 
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Outcomes</h3>
            <ul className="text-lg mb-4 text-white">
              {career.outcomes.map((outcome, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          {isMobile && (
            <button 
              className="mt-4 text-white text-sm underline opacity-70"
              onClick={handleFlip}
            >
              View details
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

const CarouselProgress = ({ total, current }) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === current 
              ? 'w-8 bg-primary' 
              : 'w-4 bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

const Services = () => {
  const carouselRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current
      const slideWidth = scrollWidth / careerPathways.length
      const currentIndex = Math.round(scrollLeft / slideWidth)
      setCurrentSlide(currentIndex)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          badge="Career Pathways"
          title="Explore Your Future"
          highlightedWord="Career"
          subtitle="Discover diverse career paths and their potential outcomes tailored to your interests and abilities"
        />
        
        {isMobile ? (
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
              onScroll={handleScroll}
            >
              {careerPathways.map((career, index) => (
                <div 
                  key={index} 
                  className="w-[85vw] flex-shrink-0 snap-center mr-4"
                >
                  <CareerCard career={career} isMobile={true} />
                </div>
              ))}
            </div>
            <CarouselProgress total={careerPathways.length} current={currentSlide} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {careerPathways.map((career, index) => (
              <CareerCard key={index} career={career} isMobile={false} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block">
            <p className="text-3xl font-bold text-gray-800 mb-2">
              Discover <span className="text-primary">50+ more</span> career pathways
            </p>
            <div className="h-1 w-1/2 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tailored to your unique skills and interests, our extensive database offers a world of possibilities for your future career.
          </p>
          <button className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring:primary focus:ring-opacity-50">
            Explore All Pathways
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services


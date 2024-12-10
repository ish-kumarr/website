'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, MapPin, Calendar, CheckCircle, UserIcon, StarIcon, HeartIcon, MapIcon, BarChartIcon, BriefcaseIcon, GlobeIcon, TrendingUpIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'

// ... rest of the component code remains the same
const compactSteps = [
  {
    title: "Assessment",
    description: "Take our in-depth psychometric test to uncover your strengths and potential.",
    icon: Brain
  },
  {
    title: "Career Mapping",
    description: "We match your profile to over 50 thriving career pathways.",
    icon: MapPin
  },
  {
    title: "Choose Your Plan",
    description: "Select a tailored journey that fits your career goals.",
    icon: Calendar
  }
];

const Step = ({ number, title, description, icon: Icon, isVisible, isActive, children }) => {
  return (
    <motion.div 
      className={`flex gap-8 items-start ${isVisible ? 'opacity-100' : 'opacity-50'}`}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-primary text-white' : 'bg-blue-100'}`}>
          <span className="text-lg font-semibold">{number}</span>
        </div>
      </div>
      <div className="flex-1 pt-2">
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`w-6 h-6 hidden md:block ${isActive ? 'text-primary' : 'text-blue-400'}`} />
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {children}
      </div>
    </motion.div>
  )
}

const renderCompactStep = (step, index) => (
  <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4 relative overflow-hidden">
    <div className="bg-[#356bff] rounded-full p-2 text-white relative z-10">
      <step.icon size={24} />
    </div>
    <div className="relative z-10 flex-1">
      <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
      <p className="text-sm text-gray-600">{step.description}</p>
    </div>
    <div className="absolute top-2 right-2 text-3xl font-bold text-gray-200">
      {index + 1}
    </div>
  </div>
);


export default function HowItWorks() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(1)
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]))
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepNumber = parseInt(entry.target.getAttribute('data-step'))
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, stepNumber]))
            setActiveStep(stepNumber)
          }
        })
      },
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0
      }
    )

    const elements = document.querySelectorAll('[data-step]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <SectionHeading 
          badge="How It Works"
          title="Your Journey to"
          highlightedWord="Success"
          subtitle="Discover how we guide you through every step of your career exploration and development"
        />

        {/* Desktop version */}
        <div className="hidden md:block relative" ref={containerRef}>
          <div className="absolute left-[23px] top-6 w-[3px] h-[calc(100%-3rem)] rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-blue-400 to-blue-500"
              style={{ height: progressHeight }}
            />
          </div>

          <div className="space-y-32">
            <div data-step="1">
              <Step
                number={1}
                title="Comprehensive Psychometric Assessment"
                description="Embark on your journey with our in-depth psychometric test, meticulously designed to uncover your unique strengths, interests, and potential."
                icon={Brain}
                isVisible={visibleSteps.has(1)}
                isActive={activeStep === 1}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 mt-4 border border-primary/10">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">What you&apos;ll gain:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start md:items-center mb-2">
                        <UserIcon className="w-4 h-4 md:w-5 md:h-5 hidden md:block text-primary mr-2 mt-1 md:mt-0" />
                        <h5 className="font-semibold text-gray-700">Personality Insights</h5>
                      </div>
                      <p className="text-sm text-gray-600">Understand your traits and work preferences</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start md:items-center mb-2">
                        <StarIcon className="w-4 h-4 md:w-5 md:h-5 hidden md:block text-primary mr-2 mt-1 md:mt-0" />
                        <h5 className="font-semibold text-gray-700">Natural Talents</h5>
                      </div>
                      <p className="text-sm text-gray-600">Discover your aptitudes and strengths</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start md:items-center mb-2">
                        <HeartIcon className="w-4 h-4 md:w-5 md:h-5 hidden md:block text-primary mr-2 mt-1 md:mt-0" />
                        <h5 className="font-semibold text-gray-700">Values & Motivations</h5>
                      </div>
                      <p className="text-sm text-gray-600">Gain clarity on what drives you</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-start md:items-center mb-2">
                        <MapIcon className="w-4 h-4 md:w-5 md:h-5 hidden md:block text-primary mr-2 mt-1 md:mt-0" />
                        <h5 className="font-semibold text-gray-700">Career Directions</h5>
                      </div>
                      <p className="text-sm text-gray-600">Identify potential paths aligned with your profile</p>
                    </div>
                  </div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h5 className="text-lg font-semibold mb-4 text-gray-800">How it works:</h5>
                    <ol className="space-y-4">
                      {[
                        "Complete our comprehensive online assessment",
                        "Receive a detailed report of your results",
                        "Schedule a one-on-one session with a career advisor",
                        "Discuss your results and explore potential career paths"
                      ].map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Step>
            </div>

            <div data-step="2">
              <Step
                number={2}
                title="Personalized Career Mapping"
                description="Using advanced algorithms and expert analysis, we map your assessment results to over 50 thriving career pathways, each offering unique opportunities for growth and success."
                icon={MapPin}
                isVisible={visibleSteps.has(2)}
                isActive={activeStep === 2}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 mt-4 border border-primary/10">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">Explore Career Possibilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center mb-2">
                        <BarChartIcon className="w-5 h-5 text-primary mr-2" />
                        <h5 className="font-semibold text-gray-700">Data-Driven Insights</h5>
                      </div>
                      <p className="text-sm text-gray-600">Leverage advanced algorithms to match your profile with ideal career paths</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center mb-2">
                        <GlobeIcon className="w-5 h-5 text-primary mr-2" />
                        <h5 className="font-semibold text-gray-700">Global Opportunities</h5>
                      </div>
                      <p className="text-sm text-gray-600">Explore international career prospects tailored to your profile</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center mb-2">
                        <BriefcaseIcon className="w-5 h-5 text-primary mr-2" />
                        <h5 className="font-semibold text-gray-700">Industry Alignment</h5>
                      </div>
                      <p className="text-sm text-gray-600">Discover careers that align with current market trends and future projections</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                      <div className="flex items-center mb-2">
                        <TrendingUpIcon className="w-5 h-5 text-primary mr-2" />
                        <h5 className="font-semibold text-gray-700">Skill Gap Analysis</h5>
                      </div>
                      <p className="text-sm text-gray-600">Identify areas for improvement and personalized learning recommendations</p>
                    </div>
                  </div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h5 className="text-lg font-semibold mb-4 text-gray-800">Our mapping process:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                        <span className="text-gray-700">Analysis of your psychometric results</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                        <span className="text-gray-700">Matching with industry trends and job market demands</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                        <span className="text-gray-700">Consideration of your long-term career goals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                        <span className="text-gray-700">Identification of skills gaps and development opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Step>
            </div>

            <div data-step="3">
              <Step
                number={3}
                title="Choose Your Tailored Journey"
                description="Select from our expertly crafted plans, each designed to provide the perfect balance of guidance, practical experience, and skill development to launch your career."
                icon={Calendar}
                isVisible={visibleSteps.has(3)}
                isActive={activeStep === 3}
              >
                <div className="relative mt-6">
                  <Button 
                    href="#plans" 
                    variant="primary" 
                    className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Explore Plans
                  </Button>
                </div>
              </Step>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden space-y-6 relative">
          <div className="absolute left-8 top-4 bottom-4 w-px border-l-2 border-dashed border-[#356bff]/30"></div>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#356bff]/5 rounded-full filter blur-3xl"></div>
          {compactSteps.map((step, index) => (
            <div key={index} className="relative">
              {renderCompactStep(step, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


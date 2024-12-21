'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

const planData = [
{
  duration: "3 Months",
  price: "2500",
  description: "Ideal for those starting their career journey, seeking guidance and initial skill development.",
  mentorship: [
    "Guidance and Direction: Gain clarity on your career aspirations with expert guidance and actionable roadmaps.",
    "Boosting Confidence: Overcome initial doubts and empower yourself to tackle challenges head-on and build resilience."
  ],
  projects: [
    "Skill Building with Real-World Tasks: Participate in beginner-level projects, such as creating a chatbot or conducting a simple data analysis.",
    "Confidence through Application: Witness tangible results, enhancing your belief in your growing capabilities.",
    "Focused Feedback: Receive constructive insights to refine your approach and foster rapid improvement."
  ],
  outcomes: [
    "Launch your own podcast, blog, or small-scale project with confidence.",
    "Gain foundational skills to pursue larger projects or entrepreneurial ventures.",
    "Build a strong understanding of professional time management and accountability."
  ],
  buttonText: "Get started"
},
{
  duration: "6 Months",
  price: "3800",
  isPopular: true,
  description: "Perfect for those looking to deepen their skills and expand their professional network.",
  mentorship: [
    "Goal Refinement and Strategic Planning: Midway into your journey, we help fine-tune your career goals with advanced strategies.",
    "Networking Opportunities: Begin connecting with industry professionals, mentors, and like-minded peers to expand your horizons.",
    "Personalized Feedback: Dive deeper into personalized advice, fostering growth in your strengths and addressing key areas for improvement."
  ],
  projects: [
    "Hands-On Skill Development: Work on intermediate projects, such as building data dashboards or designing a marketing strategy, to apply learning effectively.",
    "Encouraging Problem Solving: Tackle industry-inspired challenges that spark innovative thinking.",
    "Building Professional Discipline: Experience real-world timelines and deliverables to master accountability."
  ],
  outcomes: [
    "Leverage your skills and profile to secure speaking engagements, including opportunities like TED.",
    "Develop a professional portfolio showcasing your expertise and achievements.",
    "Set up the foundation for a successful personal brand or creative agency."
  ],
  buttonText: "Get started"
},
{
  duration: "9 Months",
  price: "2000",
  description: "Comprehensive program for those committed to long-term career growth and mastery in their chosen field.",
  mentorship: [
    "Comprehensive Career Advancement: Develop a portfolio of skills and achievements that sets you apart in competitive fields.",
    "Expanding Professional Networks: Gain access to a robust network of industry experts and influencers to unlock career opportunities.",
    "Refining the Path Ahead: With our mentorship, craft a long-term vision that aligns with your aspirations."
  ],
  projects: [
    "Advanced Project Experience: Engage in complex projects like designing AI models, conducting in-depth market research, or launching campaign simulations.",
    "Mastery through Feedback: Receive detailed and focused feedback to perfect your outputs and enhance problem-solving abilities.",
    "Career-Ready Skills: These projects solidify your readiness for professional environments by reinforcing critical thinking, leadership, and discipline."
  ],
  outcomes: [
    "Generate revenue through your entrepreneurial or creative endeavors.",
    "Establish yourself as an expert in your field, ready to apply for competitive roles or global opportunities.",
    "Expand your personal or professional brand to impact a wider audience."
  ],
  buttonText: "Book a Call"
}
]

const AccordionItem = ({ title, children, isOpen, onClick }) => {
return (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 px-6 text-left"
      onClick={onClick}
    >
      <span className="font-semibold text-gray-700">{title}</span>
      <ChevronDown
        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 bg-gray-50">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)
}

const PlanCard = ({ plan, isOpen, toggleOpen }) => {
const [openSection, setOpenSection] = useState('')

const toggleSection = (section) => {
  setOpenSection(openSection === section ? '' : section)
}

return (
  <div className={`rounded-lg shadow-md overflow-hidden ${plan.isPopular ? 'border-2 border-[#356bff]' : 'border border-gray-200'}`}>
    <div
      className={`p-6 ${plan.isPopular ? 'bg-[#356bff] text-white' : 'bg-white'}`}
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{plan.duration}</h3>
        {plan.isPopular && (
          <Badge variant="secondary" className="bg-white text-[#356bff]">
            Most Popular
          </Badge>
        )}
      </div>
      <p className="mt-2 text-sm">{plan.description}</p>
      <div className="flex items-center mt-2 text-sm">
        <span className="mr-1">More details</span>
        <ChevronDown
          className={`w-4 h-4 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="bg-white">
            <AccordionItem
              title="Mentorship"
              isOpen={openSection === 'mentorship'}
              onClick={() => toggleSection('mentorship')}
            >
              <ul className="space-y-2">
                {plan.mentorship.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-[#356bff] mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem
              title="Projects"
              isOpen={openSection === 'projects'}
              onClick={() => toggleSection('projects')}
            >
              <ul className="space-y-2">
                {plan.projects.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-[#356bff] mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem
              title="Outcomes"
              isOpen={openSection === 'outcomes'}
              onClick={() => toggleSection('outcomes')}
            >
              <ul className="space-y-2">
                {plan.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-4 h-4 text-[#356bff] mr-2 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </div>
          <div className="p-6">
            <Button 
              variant={plan.isPopular ? "default" : "outline"} 
              className={`w-full ${
                plan.isPopular 
                  ? 'bg-[#356bff] hover:bg-[#2e5ee6] text-white' 
                  : 'border-gray-200 hover:bg-gray-50 text-[#356bff]'
              }`}
            >
              {plan.buttonText}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)
}

const MobilePlans = () => {
const [openPlan, setOpenPlan] = useState(1) // 6-month plan (index 1) is open by default

const togglePlan = (index) => {
  setOpenPlan(openPlan === index ? -1 : index)
}

return (
  <section className="py-12 bg-gray-50 md:hidden">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Plans to Shape Your Career Journey</h2>
      <p className="text-lg text-center text-gray-600 mb-8">Choose the plan that best fits your career goals and aspirations</p>
      
      <div className="space-y-6">
        {planData.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PlanCard 
              plan={plan} 
              isOpen={openPlan === index}
              toggleOpen={() => togglePlan(index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
}

export default MobilePlans


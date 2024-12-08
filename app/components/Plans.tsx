'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'
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

const PlanCard = ({ plan }) => (
<div className={`rounded-3xl p-8 ${plan.isPopular ? 'bg-gradient-to-b from-[#437cef]/10 via-[#437cef]/5 to-amber-50/30 border-2 border-primary' : 'bg-white'} shadow-lg flex flex-col h-full`}>
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-bold text-gray-800">{plan.duration}</h3>
      {plan.isPopular && (
        <Badge variant="secondary" className="bg-[#437cef] text-white">
          Most Popular
        </Badge>
      )}
    </div>
    <p className="text-sm text-gray-600 mb-6">
      {plan.description}
      <span className="block mt-2 italic">Contact us to discuss pricing options tailored to your needs.</span>
    </p>
    
    <div className="mb-8">
    </div>
  </div>

  <div className="flex-grow space-y-8">
    <div>
      <h4 className="font-semibold mb-4 text-gray-800">Mentorship:</h4>
      <ul className="space-y-3">
        {plan.mentorship.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div>
      <h4 className="font-semibold mb-4 text-gray-800">Projects:</h4>
      <ul className="space-y-3">
        {plan.projects.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div>
      <h4 className="font-semibold mb-4 text-gray-800">Outcomes:</h4>
      <ul className="space-y-3">
        {plan.outcomes.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="mt-8">
    <Button 
      variant={plan.isPopular ? "default" : "outline"} 
      className={`w-full ${
        plan.isPopular 
          ? 'bg-[#1E1B2C] hover:bg-[#2A2640] text-white' 
          : 'border-gray-200 hover:bg-gray-50'
      }`}
    >
      {plan.buttonText}
    </Button>
  </div>
</div>
)

const Plans = () => {
return (
  <section className="py-20 bg-gray-50 hidden md:block">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Our Plans to Shape Your Career Journey</h2>
      <p className="text-xl text-center text-gray-600 mb-12">Choose the plan that best fits your career goals and aspirations</p>
      
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {[planData[0], planData[1], planData[2]].map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PlanCard plan={plan} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
}

export default Plans


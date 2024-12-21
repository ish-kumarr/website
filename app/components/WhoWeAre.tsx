'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Compass, Briefcase, LightbulbIcon } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import SectionHeading from "./SectionHeading"

const specializations = [
  {
    title: "Student Success Strategy",
    description: "Supporting students' strengths, sparking self-discovery, and shaping success stories.",
    icon: GraduationCap,
    image: "https://images.pexels.com/photos/3862380/pexels-photo-3862380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Expert Empowerment",
    description: "Experienced mentors delivering expert-driven, empowering education.",
    icon: Users,
    image: "https://images.pexels.com/photos/9489072/pexels-photo-9489072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Personalized Pathways",
    description: "Crafting tailored mentorship to unlock each student's unique potential and propel their progress.",
    icon: Compass,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Hands-On Projects",
    description: "Bridging theory and practice with immersive, real-world projects that shape students' expertise.",
    icon: Briefcase,
    image: "https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Career Clarity",
    description: "Guiding students through diverse career paths with precision, providing them with the clarity and direction needed to thrive.",
    icon: LightbulbIcon,
    image: "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

const SpecializationCard = ({ spec, index }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg h-[300px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Image
        src={spec.image}
        alt={spec.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
          <spec.icon className="w-6 h-6" />
        </div>
        <p className="text-sm leading-relaxed">
          {spec.description}
        </p>
      </div>
    </motion.div>
  )
}

const CarouselDots = ({ count, current }) => {
  return (
    <div className="carousel-dots">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`carousel-dot ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default function WhoWeAre() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    if (!api) return

    const autoPlay = () => {
      api.scrollNext()
    }

    const intervalId = setInterval(autoPlay, 5000)

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          badge="Who We Are"
          title="Empowering Your Educational"
          highlightedWord="Journey"
          subtitle="We are a dedicated team of former Ivy League graduates, Big 4 Consultants, and professionals from renowned companies."
        />

        <motion.h4
          className="text-2xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We specialize in the following:
        </motion.h4>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-6 gap-4">
          {specializations.map((spec, index) => (
            <div 
              key={index}
              className={index === 0 ? 'col-span-6 sm:col-span-4' : 'col-span-6 sm:col-span-2'}
            >
              <SpecializationCard spec={spec} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {specializations.map((spec, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <SpecializationCard spec={spec} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselDots count={count} current={current} />
        </div>
      </div>
    </section>
  )
}


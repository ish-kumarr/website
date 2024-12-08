import Image from 'next/image'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-transparent min-h-screen flex items-center">
      <div className="container max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="mb-8 inline-block rounded-full bg-white/30 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-medium text-gray-800">
            Turning Ambition into Achievement
          </span>
        </div>
        <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          Discover Your Perfect<br />Career Path
        </h1>
        <div className="mb-8">
          <p className="text-base md:text-xl text-gray-600 text-center">
            Career Discovery is the ultimate guide for ages 13 to 20, empowering young minds to navigate the complex world of career choices, explore their options, make informed decisions, and excel in their professional journeys.
          </p>
        </div>
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-white">
                <Image 
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Trusted user 1" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-white">
                <Image 
                  src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Trusted user 2" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-white">
                <Image 
                  src="https://images.pexels.com/photos/2423537/pexels-photo-2423537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Trusted user 3" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-white">
                <Image 
                  src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Trusted user 4" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border-2 border-white">
                <Image 
                  src="https://images.pexels.com/photos/9665015/pexels-photo-9665015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Trusted user 5" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-600">Trusted already by 2k people</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href="#contact" variant="secondary" className="group">
            Start Career Assessment
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
          <Button href="#services" variant="primary" shimmer={true} className="min-w-[180px]">
            Explore Careers
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero


import Image from 'next/image'

const universities = [
  { name: 'Harvard University', location: 'USA', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Oxford University', location: 'UK', image: '/placeholder.svg?height=100&width=100' },
  { name: 'National University of Singapore', location: 'Singapore', image: '/placeholder.svg?height=100&width=100' },
  { name: 'University of Tokyo', location: 'Japan', image: '/placeholder.svg?height=100&width=100' },
]

export default function FeaturedUniversities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Universities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <Image src={uni.image} alt={uni.name} width={100} height={100} className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">{uni.name}</h3>
              <p className="text-gray-600">{uni.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


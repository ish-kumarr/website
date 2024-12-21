import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Student at Harvard',
    quote: 'Career Discovery helped me find my dream university. The process was smooth and the support was incredible.',
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    name: 'Jane Smith',
    role: 'Graduate from Oxford',
    quote: 'I couldn\'t have navigated the complex world of international education without Career Discovery. Highly recommended!',
    image: '/placeholder.svg?height=80&width=80'
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


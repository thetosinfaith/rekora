import About1 from '../../assets/about1.jpg'

export default function AboutHero() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-12">
          About Rekora
          <br />
         
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="aspect-square">
            <img
              src={About1}
              alt="Woman at cafe working"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Woman laughing at social event"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Group craft activity with flowers"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Group photo outdoors"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

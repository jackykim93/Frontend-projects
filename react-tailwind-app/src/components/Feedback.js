import React from 'react'

const Feedback = () => {
  const image = 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc';
  return (
    <section name="testimonials" className='w-full my-24 text-white bg-slate-700'>
      <div className='max-w-6xl px-5 mx-auto text-center py-12'>
        <h2 className='text-4xl font-bold'>
          Testimonials
        </h2>

        <p className='py-8 text-2xl text-white'>
          Integer fermentum tellus non tortor faucibus pharetra.
        </p>

        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='flex flex-col items-center p-6 space-7-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt="person" />
            <h5 className='text-lg font-bold'>David King</h5>
            <p className='text-sm'>
            Fusce condimentum tincidunt risus, at rutrum magna sodales ut.
            </p>
          </div>

          <div className='hidden md:flex flex-col items-center p-6 space-7-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt="person" />
            <h5 className='text-lg font-bold'>Zach Richer</h5>
            <p className='text-sm'>
            Donec in nisl egestas, consequat lectus id, rhoncus lorem.
            </p>
          </div>

          <div className='hidden md:flex flex-col items-center p-6 space-7-6 rounded-lg bg-gray-100/30 md:w-1/3'>
            <img src={image} className='w-16 -mt-14 rounded-full' alt="person" />
            <h5 className='text-lg font-bold'>Kenny Bowser</h5>
            <p className='text-sm'>
            Praesent id urna in risus efficitur cursus non et elit.
            </p>
          </div>
        </div>

        <button className='px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
          Get Started
        </button>

      </div>
    </section>
  )
}

export default Feedback
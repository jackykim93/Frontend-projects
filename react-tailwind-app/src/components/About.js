import React from 'react'

const About = () => {
  return (
    <section
      name="about"
      className='w-full h-screen'  
    >
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p=4 mx-auto'>
        <div className='text-center'>
        <h2 className='text-5xl font-bold'>About this Company</h2>
        <p className='py-6 text-3xl text-gray-500'>""Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>

        <p className='mt-20 text-xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <p className='mt-20 text-xl'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        </p>

      </div>
    </section>
  )
}

export default About
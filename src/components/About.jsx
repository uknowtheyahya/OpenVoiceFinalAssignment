import React from 'react'

const About = () => {
  return (
    <div className=' px-6 py-4'>

      <div className='flex justify-between gap-8 flex-col lg:flex-row w-full p-5'>
         {/* left img */}
              <div className=' lg:w-[50%] text-center'>
                <img className='rounded' src="https://images.unsplash.com/photo-1589275776107-e193042128bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

              </div>
{/* right text */}
                  <div className=' lg:w-[50%]  '>
                    <h1  className='text-2xl text-blue-500'>ABOUT US</h1>
                    <p className='text-white py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum quia sed voluptate fuga inventore voluptatibus libero neque dolores quos, tenetur praesentium cum! Sed praesentium officia impedit autem explicabo soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquam, earum a corporis vero corrupti id quisquam esse eveniet sequi sunt! Id voluptate laborum, quaerat sint numquam ullam corrupti delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vitae quidem at suscipit obcaecati laborum officia ipsum ipsa amet expedita nam, provident reprehenderit voluptatum soluta sint, consequatur debitis deserunt impedit!</p>

                  </div>

      </div>
     
    </div>
  )
}

export default About
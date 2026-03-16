import { menu } from '@/data'
import Image from 'next/image'

const MenuPage = () => {
  return (
    <div className=' '>
      <div className='bg-amber-100 p-2'>
        <h1 className='text-xl md:text-5xl text-center mb-8 text-gray-700 font-semibold'>Our Menu</h1>

      </div>
      <div className='flex flex-col gap-8 justify-around md:grid grid-cols-3 mt-8 p-6'>
        {
          menu.map((item)=>(
            <div key={item.id} className='border border-gray-200 rounded p-6 flex flex-col items-center gap-2 hover:bg-amber-200 cursor-pointer '>
              <Image src={item.image} alt='' width={200} height={200}/>
              <h1 className='text-xl font-bold text-amber-400 '>{item.category}</h1>
              <h2 className='text-lg text-gray-500 font-semibold'>{item.name}</h2>
              <p className='text-gray-400 text-justify'>{item.description}</p>
              <span className=' font-semibold'>{item.price}</span>
            </div>
          ))
        }

      </div>
      
    </div>
  )
}

export default MenuPage

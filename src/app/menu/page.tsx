import { menu } from '@/data'
import Image from 'next/image'

const MenuPage = () => {
  return (
    <div className=''>
      <h1 className='text-center text-5xl font-bold text-gray-800 my-4 '>Menu Page</h1>
     <div className='border-2 border-amber-400 p-4 bg-red-400 grid grid-cols-2 gap-2'>
       {
        menu.map((items)=>(
          <div key={items.id} className='  border border-gray-300 p-4'>
            <div>
              <div className='relative'>
                <Image src={items.image} alt='' fill/>
              
              </div>
              <div className='flex flex-col items-center'>
                <h2>{items.category}</h2>
                <p>{items.description}</p>
                <span>{items.price}</span>
                
              </div>

            </div>

          </div>
        ))
      }

     </div>
      
    </div>
  )
}

export default MenuPage

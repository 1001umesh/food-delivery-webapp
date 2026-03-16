import Image from "next/image"
import CountDown from "./CountDown"

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/temp/offerBg.png')] md:h-[70vh]">
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-8 ">
            <h1 className="text-5xl text-white font-bold xl:text-6xl hover:text-amber-200">Delicious Burger & French Fry</h1>
            <p className="text-white xl:text-xl">Our menu is a celebration of both local and international flavors, carefully curated to delight every palate.</p>
            <CountDown/>
            <button className="bg-white py-4 px-6 w-fit rounded  font-bold text-green-500 hover:bg-amber-300 hover:text-white cursor-pointer">Order Now</button>

        </div>
        <div className=" flex-1 w-full  relative md:h-full">
            <Image src='/temp/offerProduct.png' alt="" fill className="object-contain"/>
        </div>
      
    </div>
  )
}

export default Offer

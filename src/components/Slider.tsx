'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const data = [
  {
    id: 1,
    title: "Authentic Nepali Taste",
    message: "Enjoy traditional Nepali dishes made with fresh local ingredients and timeless recipes.",
    image: "/temp/img1.png"
  },
  {
    id: 2,
    title: "Taste Like Home",
    message: "Every meal is prepared with love to give you the warmth of homemade Nepali food.",
    image: "/temp/img2.png"
  },
  {
    id: 3,
    title: "Fresh & Healthy Food",
    message: "We serve freshly cooked Dal, Bhat, Tarkari and other Nepali delicacies every day.",
    image: "/temp/img3.jpg"
  },
  {
    id: 4,
    title: "Perfect Place for Family",
    message: "Share delicious Nepali meals and memorable moments with your family and friends.",
    image: "/temp/slide4.jpg"
  },
  {
    id: 5,
    title: "Traditional Flavors",
    message: "Experience the rich flavors of Nepali cuisine prepared with authentic spices.",
    image: "/temp/slide5.jpg"
  },
  {
    id: 6,
    title: "Warm Nepali Hospitality",
    message: "We welcome every guest with the warmth and kindness of Nepali culture.",
    image: "/temp/slide6.jpg"
  },
  {
    id: 7,
    title: "Delicious Meals Every Day",
    message: "From momo to thakali khana set, enjoy the best Nepali food anytime.",
    image: "/temp/slide7.jpg"
  },
];

const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentSlide((prev)=>(prev==data.length-1?0:prev+1))

        },2000)
        return ()=> clearInterval(interval);
    },[])
  return (
    <div className="flex flex-col items-center max-h-xl md:max-h-2xl gap-8 lg:flex-row ">
        <div className="h-1/2 flex flex-col items-center justify-center gap-4">
            <div className="text-center flex flex-col items-center " >
             <h1 className="text-xl md:text-2xl xl:text-4xl font-bold p-4 text-amber-500 hover:text-amber-300">{data[currentSlide].title}</h1>
            <p className=" text-gray-400 text-lg font-semibold md:text-xl hover:text-amber-300">{data[currentSlide].message}</p>
            </div>
            <button className="bg-orange-500 w-fit px-6 py-4 rounded hover:bg-orange-600 cursor-pointer text-gray-100 font-semibold">Order Now</button>
        </div>
        <div className="w-full h-60 md:h-100 relative">
            <Image src={data[currentSlide].image} alt="" fill className="object-cocontain"  />

        </div>

      
    </div>
  )

}

export default Slider



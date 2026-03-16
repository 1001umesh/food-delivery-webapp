import { featureProducts } from "@/data";
import Image from "next/image";

const FeatureItmes = () => {
  return (
    <div className="w-screen overflow-x-scroll scrollbar-hide text-gray-900 p-6 mad:p-10">
      <div className="w-max flex gap-4">
        {featureProducts.map((item) => (
          <div
            key={item.id}
            className="w-64 sm:w-72 md:w-80 h-[60vh] flex flex-col p-6  border-2 border-gray-200 rounded mt-10 transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-amber-100"
          >
            <div className="relative flex-1 w-full">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 md:gap-4 items-center text-center my-4">
              <h1 className="text-lg font-bold uppercase ">{item.title}</h1>
              <p className="text-gray-600 ">{item.description}</p>
              <span className="text-base font-semibold">Rs.{item.price}</span>
              <button className=" w-fit bg-green-600 py-2 px-4 text-white rounded hover:bg-green-500 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureItmes;

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 px-8">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Kumari Restaurant</h1>
        <p className="text-gray-400 font-semibold hover:text-amber-200">"Taste the tradition where every bite feels like home"</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-2">Our Social Links</h1>
        <div className="flex flex-col gap-2 text-gray-400">
          <Link href="/facebook" className="hover:text-blue-800 ">Facebook</Link>
          <Link href="/instagram" className="hover:text-orange-600">Instragram</Link>
          <Link href="/ticktok" className="hover:text-green-600">TickTok</Link>
        </div>
      </div>
       <div>
          <h1 className="text-xl">Our Locations</h1>
          <div className="text-gray-400 flex flex-col">
            <span>Address:Jorpati, Kathmandu</span>
            <span>Contact Number:+977:9823613852</span>
            <span>Email: uumeshmagar223@gmail.com</span>
          </div>
        </div>
        
    </div>
    <div className="border-t border-gray-100 mt-4 pt-6 text-center text-gray-400 text-sm">
      @ 2026 Kumari Restaurant. All Righst Reserved.

    </div>
    </div>
   
  );
};

export default Footer;

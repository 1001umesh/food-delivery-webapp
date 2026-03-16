import Link from "next/link"
import Menu from "./Menu"
import CartIcon from "./CartIcon"

const Navbar = () => {
  const user=false;
  
  return (
    <div className="h-12 text-black p-6 flex items-center justify-between border-b-2 border-be-red-500 uppercase cursor-pointer md:h-20 lg:px-18 xl:24">
      {/* logo */} 
      <div className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800">
        <Link href="/">Kumari Restaurant</Link>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        {user &&(<Link href="/orders">Orders</Link>)} 
        <Link href="/">Contact</Link>

      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu/>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <CartIcon/>
        <Link href='/login'>Login</Link>
        
      </div>
    </div>
  )
}

export default Navbar

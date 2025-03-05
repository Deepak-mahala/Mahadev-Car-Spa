import { FaBars } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import "../Home/style.css";
import Logo from "../assets/mahadevlogo.png"
import { Button } from "react-bootstrap";

function NavbarMain() {
  return (
    <>
    <nav className='p-3 flex back-colorr text-white justify-between items-center sticky top-0 z-10'>
    <a href="#" id='brand' className='flex gap-2 items-center'>
      {/* <img className='object-cover max-w-12 max-h-12' src="" alt="" /> */}
      <img src={Logo} alt="" className="logow object-cover px-4" />
    </a>
    <div id="nav-menu" className="hidden md:flex gap-12">
      <a href="" className='font-medium text-[18px] hover:text-red-600'>Home</a>
      <a href="#hero4-container" className='font-medium text-[18px] hover:text-red-600'>Overview</a>
      <a href="#hero6-container" className='font-medium text-[18px] hover:text-red-600'>About Us</a>
      <a href="" className='font-medium text-[18px] hover:text-red-600'>Contact</a>
      {/* <a href="" className='font-medium hover:text-red-600'>Car Rental</a> */}
    </div>

    <div className="px-4 hover:-translate-1 transition group">
    <Button className="px-5 py-1 font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.open("https://wa.me/+918209913189", "_blank")}> <span className="flex gap-2"><IoCallOutline className="mt-1"/> Book Now </span></Button>         

    </div>

    {/* <button className='p-2 md:hidden'>
    <FaBars className='text-gray-600 ' aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-top" data-hs-overlay="#hs-offcanvas-top"/>
    </button> */}

    <div id="hs-offcanvas-top" className="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 size-full z-[80] bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hidden" role="dialog" tabIndex="-1" aria-labelledby="hs-offcanvas-top-label">
  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    <h3 id="hs-offcanvas-top-label" className="font-bold text-gray-800 dark:text-white">
      Offcanvas title
    </h3>
    <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-offcanvas-top">
      <span className="sr-only">Close</span>
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div className="p-4">
    <p className="text-gray-800 dark:text-neutral-400">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>
    
    
    
    </nav>
    </>
  );
}

export default NavbarMain;
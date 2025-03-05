import React from 'react'
import NavbarMain from '../common/Navbar'
import "./style.css"
import { Button } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import  victorr from '../assets/victordesign.png'
import jp from '../assets/jpbhai.jpeg'
import ppf from '../assets/Vector.png'
import Ceramic from '../assets/u_wind-moon.png'
import Rubbing from '../assets/u_wind-sun.png'
import Deepclening from '../assets/Vector (1).png'
import Woksvegon from '../assets/about-protection.jpg'
import detaling from '../assets/Detaling.mp4'
import pppf from '../assets/titaniumnew34.gif'
import accories from '../assets/banner-store.webp'
import logom from '../assets/mahadevlogo.png'

const Home = () => {
  return (
    <>
        <div className="back-image container bg-cover bg-center ">
        <NavbarMain />
        <div className="overlay">
         <div id="hero-container" className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
         <div id="main-Heading">
          <div className="">
            <h1 className='mt-30 text-white font-bold text-5xl font-serif md:text-7xl leading'>The shine that <br /> lasts <br /> <span className='primaryRed md:text-8xl'>Forever.</span>
            </h1>
            <p className='text-white max-w-2xl font-medium leading-6 mt-5'>Your car deserves the best care! 🚗💦 Get a deep clean,  premium wax, <br /> PPF, Cerimic Coating, and a dazzling finish that protects and shines. <br /> Visit us today for a spotless ride that turns heads !</p>
            <p className='text-white max-w-2xl font-medium leading-6 mt-5'>🌟 Because your car deserves to shine! 🌟</p>
          </div>
          <div className="mt-10 w-fit shadow-red-800 hover:shadow-lg rounded-2xl hover:-translate-1 transition">
          <Button className="px-30 py-5 text-2xl font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.open("https://wa.me/8209913189", "_blank")}> Book Now </Button>         
          </div>
         </div>


         <div className='md:flex flex-col hidden md:visible'>
         <h1 className="bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer" onClick={() => window.open("https://www.facebook.com/share/15dfEauJNN/", "_blank")}> <FaFacebookF /> </h1>    
         <h1 className='bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer' onClick={()=> window.open("https://www.instagram.com/mahadev_car_decor_jaipur?igsh=MTk2bTFpczgwdGwxcg==","_blank")}><FaInstagram /></h1>
         <h1 className='bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer' onClick={()=> window.open("https://youtube.com/@mahadevcardecor?si=XUTC9SkEs68UmHIU","_blank")}><FaYoutube /></h1>
         </div>
         </div>
        </div>
        </div>
        <div className=" bg-black container">
        <div className="">
        <div id="hero2-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
          <div id="main-Heading">
            <div className="  px-6">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-15 md:py-10 '>Professional Washing And Cleaning.</h1>
              <p className='text-white'>Give your car the care it deserves! From deep cleaning to premium waxing, we ensure a spotless, shiny finish. Safe, fast, and efficient service for a brand-new look. Visit us today and drive with confidence!</p>
            </div>

            <div className="mt-10 px-6 w-fit rounded-2xl hover:-translate-1 transition">
          <Button className="px-18 py-4  text-1xl font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.location.href = "tel:8209913189"}>+91 8209913189</Button>         
          </div>
           
          </div>
          <div className="w-full flex items-center justify-center  pt-16">
              <img src={victorr} alt="" className='' />
            </div>
        </div>
        </div>
        </div>

        <div className=" bg-black container">
        <div className="">
        <div id="hero4-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className=" flex items-center justify-center  pt-16 pb-10">
              <img src={jp} alt="" className='rounded-2xl' />
            </div>
          <div id="main-Heading5">
            <div className="  px-6">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-5 md:py-2 '>Founder & Ceo</h1>
              <p className=' text-2xl font-bold font-serif md:text-2xl py-5 md:py-8 primaryRed'>J.P Choudhary</p>

              <p className='text-white'>Give your car the care it deserves! From deep cleaning to premium waxing, we ensure a spotless, shiny finish. Safe, fast, and efficient service for a brand-new look. Visit us today and drive with confidence!</p>
            </div>

            <div className="mt-10 mb-4 px-6 w-fit rounded-2xl hover:-translate-1 transition">
          <Button className="px-18 py-4  text-1xl font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.location.href = "tel:8209913189"}>+91 8209913189</Button>         
          </div>
           
          </div>
         
        </div>
        </div>
        </div>

        <div className="background-imgg container bg-cover bg-center">
          <div className="">
            <div id="hero-container" className='max-w-7xl  mx-auto flex items-center justify-between'>
          <div id='main-Heading '>
           <div className="">
            <h1 className='text-white font-bold text-3xl font-serif md:text-5xl mt-40 mx-8 md:mx-0'>Our Deteling Services <span className='text-base font-light '>WITH <span className='text-base font-light primaryRed'>MODERN EQUIPMENT</span></span></h1>
           </div>
          
          <div className="w-full">
          <div className="w-full">
          {/* Mobile View - Horizontal Scroll (One Card at a Time) */}
          <div className="flex lg:hidden gap-4 overflow-x-auto w-100 scrollbar-hide px-4 snap-x snap-mandatory scroll-smooth">
            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={ppf} alt="" className='max-w-10'/>
                  <h1 className='primaryRed font-bold mt-2'>Paint Protection Film</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a transparent and durable film that protects a car’s paint from scratches, stone chips, UV rays, and minor damages. It has self-healing properties, which allow small scratches to repair themselves. PPF is commonly used on luxury and sports cars but can be applied to any vehicle.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Ceramic} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Ceramic Coating</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a liquid polymer applied to a car’s exterior to create a protective layer over the paint. It enhances shine, repels water and dirt, and provides protection against UV rays, minor scratches, and chemical stains.it lasts for years and reduces the need for frequent polishing.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Rubbing} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Rubbing & Polishing</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a paint restoration process that removes minor scratches, swirl marks, and oxidation. Rubbing compound smooths imperfections, while polishing enhances shine and restores the paint’s glossy finish. It helps maintain the car’s fresh look and protects it from dullness over time.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Deepclening} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Deep Cleaning</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' > is a thorough car cleaning process that removes dirt, stains, and grime from both the interior and exterior. It includes vacuuming, steam cleaning, and detailing to restore a fresh and spotless look. This process enhances hygiene, and provides long-lasting cleanliness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Grid (No Scroll) */}
          <div className="hidden lg:grid lg:grid-cols-4 justify-between lg:gap-30 md:grid-cols-1 object-cover">
            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
                <div className="justify-items-center mt-4">
                  <img src={ppf} alt="" className='max-w-10'/>
                  <h1 className='primaryRed font-bold mt-2'>Paint Protection Film</h1>
                  <p className='text-white fonttsize p-3 text-center' >is a transparent and durable film that protects a car’s paint from scratches, stone chips, UV rays, and minor damages. It has self-healing properties, which allow small scratches to repair themselves. PPF is commonly used on luxury and sports cars but can be applied to any vehicle.</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Ceramic} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Ceramic Coating</h1>
                  <p className='text-white fonttsize p-3 text-center' >is a liquid polymer applied to a car’s exterior to create a protective layer over the paint. It enhances shine, repels water and dirt, and provides protection against UV rays, minor scratches, and chemical stains. Unlike wax, it lasts for years and reduces the need for frequent polishing.</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Rubbing} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Rubbing & Polishing</h1>
                  <p className='text-white fonttsize p-3 text-center' >is a paint restoration process that removes minor scratches, swirl marks, and oxidation. Rubbing compound smooths imperfections, while polishing enhances shine and restores the paint’s glossy finish. It helps maintain the car’s fresh look and protects it from dullness over time.</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Deepclening} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Deep Cleaning</h1>
                  <p className='text-white fonttsize p-3 text-center' > is a thorough car cleaning process that removes dirt, stains, and grime from both the interior and exterior. It includes vacuuming, steam cleaning, and detailing to restore a fresh and spotless look. This process enhances hygiene, and provides long-lasting cleanliness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

         </div>

          </div>
          </div>
          </div>
        </div>

        <div className=" bg-black container">
        <div className="">
        <div id="hero2-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
          <div id="main-Heading" className='mb-20'>
            <div className="  px-6">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-15 md:py-10 '>Benifits of  <span className='primaryRed'>PPF</span></h1>
              <p className='text-white mb-2'><span className='primaryRed font-bold'>PPF (Paint Protection Film)</span> lagwane se aap apni car ki paint ko scratches, UV rays, dirt, aur minor damages se protect kar sakte hain. Yeh ek transparent aur durable film hoti hai jo car ki body par lagayi jati hai!</p>
              <p className='text-white'>✅ Scratch Protection – Chhoti-moti kharochon se bachata hai.</p>
              <p className='text-white'>✅ UV Protection – Paint ka color fade hone se rokti hai.</p>
              <p className='text-white'>✅ Self-Healing – Halke scratches time ke sath khud theek ho jate hain.</p>
              <p className='text-white'>✅ Water & Dust Resistance – Car par mitti aur paani ka asar kam hota hai.</p>
              <p className='text-white'>✅ Resale Value Badhata Hai – Car ka look naye jaisa bana rehta hai.</p>
            </div>

            <div className="mt-10 px-6 w-fit rounded-2xl hover:-translate-1 transition">
          <Button className="px-18 py-4  text-1xl font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.location.href = "tel:8209913189"}>+91 8209913189</Button>         
          </div>
           
          </div>
          <div className="w-full flex items-center justify-center  pt-16 mb-25">
              <img src={Woksvegon} alt="" className='rounded-2xl' style={{borderRadius:"6rem 0.5rem 4rem 0.5rem"}} />
            </div>
        </div>
        </div>
        </div>

        <div className=" bg-black container">
        <div className="">
        <h1 className='text-white text-center text-4xl md:text-6xl font-bold mb-1 md:mb-9 primaryRed p-5'>What We Do</h1>
        <div id="hero2-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
          <div className="w-full flex items-center justify-center pt-1 md:pt-16 mb-1 md:mb-14">
              <video autoPlay muted loop className='mt-8 rounded-2xl' style={{borderRadius:"0.5rem 5rem 0.5rem 0.5rem"}}>
                <source src={detaling} type="video/mp4" />
              </video>
            </div>
            <div id="main-Heading">
            <div className="  px-6">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-15 md:py-10 '>Detailing</h1>
              <p className='text-white mb-2'>In Skin Restoration Service, the surface of the vehicle is buffed to get rid of the old and dull layer of the paint to reveal a brand new and shiny layer.It not only enhances the car’s appearance but also adds a protective layer.</p>
              <p className='text-white'>✅ Skin Restoration</p>
              <p className='text-white'>✅ Headlight Restoration</p>
              <p className='text-white'>✅ Chrome Restoration</p>
              <p className='text-white'>✅ Wheel Restoration</p>
              <p className='text-white'>✅ Trim Restoration</p>
              <p className='text-white'>✅ Fabric Restoration</p>
              <p className='text-white'>✅ Leather Restoration</p>
            </div>

            <div className="mt-10 px-6 w-fit rounded-2xl hover:-translate-1 transition mb-5">
          <Button className="px-18 py-4  text-1xl font-bold rounded-lg primaryRed1 text-white cursor-pointer hover:" onClick={() => window.location.href = "tel:8209913189"}>+91 8209913189</Button>         
          </div>
           
          </div>
        </div>
        </div>
        </div>

        <div className=" bg-black container">
        <div className="">
        <div id="hero2-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
          <div className="w-full flex items-center justify-center pt-5 md:pt-16 mb-1 md:mb-14">
              <img src={pppf} alt="" className='w-full rounded-2xl'/>
            </div>
            <div id="main-Heading">
            <div className="  px-6 mb-10">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-10 md:py-8 '>Protection <span className='text-2xl md:text-2xl primaryRed'>With PPF</span></h1>
              <p className='text-white mb-2'>A transparent, self-healing film that protects car paint from scratches, chips, and UV damage. It helps maintain the vehicle’s original shine and prevents fading. PPF also enhances durability and preserves resale value.</p>
              <p className='text-white'>✅ Preserve the pristine showroom quality finish of your vehicle</p>
              <p className='text-white'>✅ Maintain the original Colour of your vehicle while extending its youthful appearance</p>
              <p className='text-white'>✅ Protect vulnerable areas such as front bumpers, hoods, side mirrors, door handle cavities, door edges, rocker panels, and rear fender panels from scratches & damages</p>
              <p className='text-white'>✅ Ensure your vehicles looks newer longer, enhancing its aesthetic appeal and longevity</p>
              <p className='text-white'>✅ Safequard your investment, potentially increasing the resale value of your car</p>
              
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="bg-black container">
            <div id="hero-container" className='max-w-7xl  mx-auto flex items-center justify-between'>
          <div id='main-Heading '>
           <div className="">
            <h1 className='text-white font-bold text-3xl font-serif md:text-5xl mt-10 mx-8 md:mx-0'>Our Car Accessories Services <span className='text-base font-light '>WITH <span className='text-base font-light primaryRed'>MODERN EQUIPMENT</span></span></h1>
           </div>
          
          <div className="w-full">
          <div className="w-full">
          {/* Mobile View - Horizontal Scroll (One Card at a Time) */}
          <div className="flex lg:hidden gap-4 overflow-x-auto w-100 scrollbar-hide px-4 snap-x snap-mandatory scroll-smooth mb-10">
            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={ppf} alt="" className='max-w-10'/>
                  <h1 className='primaryRed font-bold mt-2'>Seat Cover</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a transparent and durable film that protects a car’s paint from scratches, stone chips, UV rays, and minor damages. It has self-healing properties, which allow small scratches to repair themselves. PPF is commonly used on luxury and sports cars but can be applied to any vehicle.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Ceramic} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Ceramic Coating</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a liquid polymer applied to a car’s exterior to create a protective layer over the paint. It enhances shine, repels water and dirt, and provides protection against UV rays, minor scratches, and chemical stains.it lasts for years and reduces the need for frequent polishing.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Rubbing} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Rubbing & Polishing</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' >is a paint restoration process that removes minor scratches, swirl marks, and oxidation. Rubbing compound smooths imperfections, while polishing enhances shine and restores the paint’s glossy finish. It helps maintain the car’s fresh look and protects it from dullness over time.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex-shrink-0 snap-center">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[260px] w-[90%] mx-auto aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Deepclening} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Deep Cleaning</h1>
                  <p className='text-white fonttsizemobile p-3 text-center' > is a thorough car cleaning process that removes dirt, stains, and grime from both the interior and exterior. It includes vacuuming, steam cleaning, and detailing to restore a fresh and spotless look. This process enhances hygiene, and provides long-lasting cleanliness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Grid (No Scroll) */}
          <div className="hidden lg:grid lg:grid-cols-4 justify-between lg:gap-30 md:grid-cols-1 object-cover mb-10">
            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20 ">
                <div className="justify-items-center mt-4">
                  <img src={ppf} alt="" className='max-w-10'/>
                  <h1 className='primaryRed font-bold mt-2'> Seat Cover</h1>
                  <p className='text-white fonttsize p-3 text-center' >Protect and upgrade your car seats with premium seat covers for added comfort and style. Available in various designs and materials, they keep your seats clean, durable, and stylish. Give your car a fresh,improves hygiene and extends seat life, personalized look today !</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Ceramic} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>7D Matting</h1>
                  <p className='text-white fonttsize p-3 text-center' >Upgrade your car’s interior with premium 7D mats for ultimate protection and luxury. Designed for a perfect fit, they keep your car clean by preventing dust, spills, and dirt buildup.Made from high-quality materials, Easy to maintain and stylish,  they add a premium touch to your ride !</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Rubbing} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Fog Lamp & Projector</h1>
                  <p className='text-white fonttsize p-3 text-center' >Upgrade your car’s lighting for better visibility and a stylish look. Fog lamps cut through fog, rain, and low-light conditions, ensuring a safer drive. Projector headlights provide a focused beam, improving night driving clarity. Enhance safety, style, and performance with high-quality lighting !</p>
                </div>
              </div>
            </div>

            <div className="grid place-items-start h-full isolate">
              <div className="bg-white/5 border border-white/10 shadow-xl h-[225px] w-[220px] aspect-[1/1.6] rounded-2xl backdrop-blur-lg mt-20">
              <div className="justify-items-center mt-4">
                  <img src={Deepclening} alt="" className='max-w-12'/>
                  <h1 className='primaryRed font-bold mt-2'>Music System</h1>
                  <p className='text-white fonttsize p-3 text-center' > Upgrade your car with a premium music system for an immersive audio experience. Enjoy crystal-clear sound, deep bass, and seamless connectivity with Bluetooth, USB, and AUX support. Enhance every drive with high-quality speakers, amplifiers, and subwoofers for the perfect sound experience !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         </div>
          </div>
          </div>
          </div>

        <div className=" bg-black container">
        <div className="">
        <div id="hero2-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
          <div className="w-full flex items-center justify-center pt-5 md:pt-16 mb-1 md:mb-14">
              <img src={accories} alt="" className='w-full rounded-2xl'/>
            </div>
            <div id="main-Heading">
            <div className="  px-6 pb-10">
              <h1 className='text-white text-2xl font-bold font-serif md:text-6xl py-10 md:py-8'>Accessories </h1>
              <p className='text-white mb-2 font-bold'>Upgrade your car with high-quality accessories for better comfort, style, and safety. From seat covers to LED lights, we offer the best products to enhance your driving experience. Make your car more stylish and functional today!</p>
              <p className='text-gray-400'>✅ Interior Accessories: Seat covers, steering covers, floor mats, sunshades, and ambient lighting for a stylish and comfortable cabin.</p>
              <p className='text-gray-400'>✅ Exterior Accessories: Chrome trims, door visors, roof rails, and body covers to protect and enhance your car’s appearance.</p>
              <p className='text-gray-400'>✅ Lighting & Electronics: LED lights, fog lamps, projectors, music systems, and reverse cameras for better visibility and entertainment.</p>
              <p className='text-gray-400'>✅ Utility & Protection: Car organizers, mobile holders, anti-theft locks, and dashboard cleaners for a more convenient and safe driving experience.</p>
              <p className='text-gray-400'>✅ Upgrade your car today with the best accessories for a premium, stylish, and comfortable ride!</p>
              
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="bg-black container">
          <div className="">
            <div id="hero6-container" className=' px-6 flex flex-col md:flex-row items-center justify-between'>
             <div id="main-Heading">
            <div className="  px-6 pb-10">
              <p className='text-white font-serif py-2 mt-2'>Get in Touch with Us</p>
              <h1 className='text-white text-2xl font-bold font-serif md:text-2xl md:py-3 mb-3'>Mahadev Office Address</h1>
              <p className='text-gray-400 mb-2 '>Address: Near chai bagh,  dhabas puliya ,Sarthi Marg , Vaishali Nagar, Jaipur, Rajasthan 302021</p>
              <p className='text-gray-400'>Contect. +91 8209913189</p>
              <div className="flex gap-2 mt-3">
                <h1 className="bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer" onClick={() => window.open("https://www.facebook.com/share/15dfEauJNN/", "_blank")}> <FaFacebookF /> </h1>
                <p className='text-gray-400 mt-3'>Mahadev Car Decore</p>
              </div>    
              <div className="flex gap-2 mt-2">
                <h1 className='bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer' onClick={()=> window.open("https://www.instagram.com/mahadev_car_decor_jaipur?igsh=MTk2bTFpczgwdGwxcg==","_blank")}><FaInstagram /></h1>
                <p className='text-gray-400 mt-3'>Mahadev_Car_Decore_jaipur</p>
              </div>
              <div className="flex gap-2 mt-2">
                <h1 className='bg-amber-50 w-fit p-2 rounded-2xl mt-2 cursor-pointer' onClick={()=> window.open("https://youtube.com/@mahadevcardecor?si=XUTC9SkEs68UmHIU","_blank")}><FaYoutube /></h1>
                <p className='text-gray-400 mt-3'>Mahadev Car Decore</p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center pt-5 md:pt-16 mb-2 md:mb-14">
              <div className="w-full flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.466478222207!2d75.73240901110636!3d26.89581076071927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5641eba40dd%3A0x28e86e357d412701!2sMahadev%20Car%20Decor%20jaipur!5e1!3m2!1sen!2sin!4v1740835086402!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
            </div>
            </div>
          </div>
        </div>

        <div className="bg-red-color container">
          <div className="">
            <div id="hero-container" className='px-6 flex flex-col  items-center'>
              <div id="main-Heading">
                <div className="mb-4">
                  <img src={logom} alt="" className='w-100'/>
                </div>
              </div>
            </div><hr className='text-yellow-50'/>
          </div>
        </div>
        <div className="bg-red-color container">
          <div className="">
            <div id="hero-container" className='px-6 flex flex-col  items-center'>
              <div id="main-Heading">
                <div className="mb-4">
                <p className='text-white mt-3'>Copyright ©2025 Mahadev. All Rights Reserved Copyright</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    </>
  )
}

export default Home

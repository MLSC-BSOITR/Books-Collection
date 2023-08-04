import React from 'react'
import {AiFillGithub} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className='p-3 flex justify-between text-[#ffffff] sticky left-0 top-0 bg-[#030a1a]/10 backdrop-blur bg-blur'>
        <h3 className='font-sans text-2xl lg:text-3xl'>MLSC-BSOITR</h3>
        <div className='text-2xl lg:text-3xl'>
            <a href="https://github.com/MLSC-BSOITR/Books-Collection">
            <AiFillGithub/>
            </a>
        </div>
    </div>
  )
}

export default Navbar
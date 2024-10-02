import { Link } from 'react-router-dom';
import React from 'react'
import logo from '../images/lusore_img.png'
function Header() {
    return (
        <> 
        <div class="bg-dark-grey p-6 space-x-3 flex">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img class="size-10 top-80" src={logo} alt="logo"/>
                <p class="text-gold font-semibold text-3xl block py-2 px-3 ">
                    Lusore     
                </p>
                <p class="text-gold text-xl p-1 block py-2 px-3">
                    Features
                </p>
                <p class="text-gold text-xl p-1 block py-2 px-3">
                    About
                </p>
                <p class="text-gold text-xl p-1 block py-2 px-3">
                    Support/Feedback
                </p>
                <p class="text-gold text-xl p-1 block py-2 px-3">
                    Contact
                </p>
                <p class="text-gold text-xl p-1 block py-2 px-3 ">
                    <Link to = "/Dashboard">Login</Link> | Register
                </p>
            </div>
                
          
            

        </div>
        </>
    )
}

export default Header;
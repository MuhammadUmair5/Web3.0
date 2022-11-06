import React from "react";
import {HiMenuAlt4} from "react-icons/hi";
import {AiOtlineClose} from "react-icons/ai";


const Navbar =()=>{
    return (
        <div>
        <nav className = "w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-inital justify-center items-center">
                <img src ={logo} alt="logo" className="w-32 cursor-pointer"> </img>

            </div>
        </nav>
        
        </div>

    );
}

export default Navbar;
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import botox from "../assets/images/botox-logo.jpg";
import dermal from "../assets/images/dermal-fillers.jpg";
import secret from "../assets/images/secret-rf.jpeg";
import harmonyca from "../assets/images/harmonyca.png";
import prophilo from "../assets/images/profhiloo.png";
import sclerotherapy from "../assets/images/sclerotherapy.jpg";
import facials from "../assets/images/facials.jpg";

const options = [
    {
      text: 'Anti Wrinkle Treatment',
      imageSrc: botox,
    },
    {
      text: 'Dermal Fillers',
      imageSrc: dermal,
    },
    {
      text: 'Secret RF',
      imageSrc: secret,
    },
    {
      text: 'HArmonyCA',
      imageSrc: harmonyca,
    },
    {
      text: 'Prophilio',
      imageSrc: prophilo, 
    },
    {
      text: 'Facials',
      imageSrc: facials,
    },
    {
      text: 'Sclerotherapy',
      imageSrc: sclerotherapy,
    },
  ];

function Body({handleChange}) {
  return (
       <div className="bg-light-grey text-center p-5 grow">
          <form className="w-full lg:w-1/3 font-medium text-lg m-auto bg-white text-left p-10 shadow-black mb-4">
            {options.map((option, index) => {
              return (
                <div onClick={() => handleChange(option.text)} className="border cursor-pointer border-solid border-x-light-grey px-4 py-2 mb-4 flex items-center justify-between" key={index}>
                  <div className="flex items-center">
                    <img
                      src={option.imageSrc}
                      alt=""
                      className="mr-3 w-12 h-12 object-contain"
                    />
                    <span>{option.text}</span>
                  </div>
                  <AiOutlineArrowRight />
                </div>
              );
            })}
          </form>
          <div className="w-full lg:w-1/3 m-auto bg-white text-center px-10 py-5 shadow-black">
            <p className="text-sm font-medium text-gray-400">
              Not sure about consultation time? Please, call{" "}
              <a href="tel:02037959063" className="text-blue-600">
                02037959063
              </a>
            </p>
          </div>
        </div>
  )
}

export default Body

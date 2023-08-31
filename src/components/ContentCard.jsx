import { useState, useEffect } from "react";
import { smallImg } from "../constants";
import { bigImg1 } from "../assets/images";
const ContentCard = ({ imgURL, changeContent, bigImage }) => {
    const handleClick = () => {
        if (bigImage !== imgURL.bigImg) {
            changeContent(imgURL.bigImg)
        }
    };
    

    return (
        <div
          className={`border-2 rounded-xl ${
            bigImage === imgURL.bigImg
              ? "border-slate-300"
              : "border-transparent"
          } cursor-pointer max-sm:flex-1`}
          onClick={handleClick}
         
        >
          <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img
              src={imgURL.thumbnail}
              alt='shoe collection'
              width={127}
              height={103.34}
              className='object-contain rounded-2xl'
            />
          </div>
        </div>
    );
};

export default ContentCard;

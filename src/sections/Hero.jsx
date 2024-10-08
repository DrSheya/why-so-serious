import { arrowRight } from "../assets/icons";
import { bigImg1 } from "../assets/images";
import { Button } from "../components";
import ContentCard from "../components/ContentCard";
import { smallImg, statistics } from "../constants";
import { useState } from "react";
import { navLinks } from "../constants";

const Hero = () => {
  const [bigImg, setNextImage] = useState(bigImg1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-monserrat text-slate-300">
          Willkommen auf unserer Homepage !
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[82px] font-bold text-slate-300 ">
          <span className="xl:bg-dark xl:whitespace-nowrap relative z-10 pr-10 ">
            Therapy Enraged
          </span>
          <br />
          <span className="text-slate-500 inline-block mt-3 relative z-10">@Blackmoore</span> 
        </h1>
        <p className="font-montserrat text-slate-300 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Seid ihr daran interessiert ein teil von <span>Therapy Enraged</span> zu werden ?
         Dann bewerbt euch jetzt ! 
         Wir Rekrutieren derzeit sämtliche Klassen und Spezialisierungen! 
        </p>
        <a href={navLinks[3].href}>
          <Button lable="Erfahre Mehr!" iconURL={arrowRight} />
        </a>
        
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center max-lg:hidden">
        <img
          src={bigImg}
          alt="collection"
          width={610}
          height={490}
          className="object-contain relative z-11 rounded-2xl"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[25%] max-sm:px-6">
          {smallImg.map((image, index) => (
            <div key={index}>
              <ContentCard
                index={index}
                imgURL={image}
                changeContent={(smallImg) => setNextImage(smallImg)}
                bigImage={bigImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;

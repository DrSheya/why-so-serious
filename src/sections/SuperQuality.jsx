// About us
import { Button } from "../components";
import { bigImg3 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex felx-1 flex-col" >
        <h2 className="font-palanquin text-4xl capitalize font-bold text-slate-300 lg:max-w-lg">
          <span className="xl:bg-dark xl:whitespace-nowrap relative z-10 pr-10  ">
           Über uns 
          </span>
          <br />
          <span className="text-slate-500 inline-block mt-3 relative z-10">why so serious</span> 
        </h2>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
          why so serious wurde aus dem Gedanken gegründen eine solide Heroic only Raidgruppe zu schaffen,
          welche in einem angemessenen Tempo den Hc-content cleared (Woche 1 spätestens Woche 2).

        </p>
        <div className="mt-11">
            <Button lable="Raider.Io profile!" />
        </div>
        
      </div>
      
      <div className="justify-center items-center">
        <img src={bigImg3} alt="Here is usually a image !" 
        width={570}
        height={522}
        className="object-contain rounded-3xl"
        />
      </div>
    </section>
  )
}

export default SuperQuality
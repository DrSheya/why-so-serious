// About us
import { Button } from "../components";
import { bigImg3 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex felx-1 flex-col" >
        <h2 className="font-palanquin text-4xl capitalize font-bold text-slate-300 lg:max-w-lg">
          <span className="xl:bg-dark xl:whitespace-nowrap relative z-10 pr-10  ">
           Über uns 
          </span>
          <br />
          <span className="text-slate-500 inline-block mt-3 relative z-10">why so serious</span> 
        </h2>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
          why so serious wurde aus dem Gedanken gegründet eine solide Heroic only Raidgruppe zu schaffen,
          welche in einem angemessenen Tempo den Hc-content cleared (Woche 1 spätestens Woche 2).
        </p>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
            Neben dem Raidbetrieb wollen wir ebenso unseren Fokus auf Mythic + setzen, um so das ein oder andere M+ Drama 
            mit Pug's zu umgehen. 
        </p>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
            Der leitende Part der Gilde hat bereits in diversen sHc / Hc Gilden zusammen geraidet und kann somit 
            einiges an erfahrung in punkto Leitung vorweisen.
            Da wir aber alle nicht jünger werden und zum teil auch Familie haben, kam uns die idee eine Raid Gilde zu schaffen die sich 
            ausschließlich auf den Heroic content fokusiert. 

        </p>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
          Sollte dich dieser kleine aber feine Text angesprochen haben, zögere nicht dich bei uns vorzustellen. 
          Oder falls fragen bestehen einen der Gildenleiter anzusprechen.

        </p>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
          Auf Bald ! 
          <br />
          - Die Gildenleitung von why so serious

        </p>
        <div className="mt-11">
          <a href="https://raider.io/guilds/eu/blackmoore/why%20s%C3%B4%20seri%C3%B4us">
            <Button lable="Raider.Io profile!" />
          </a>
            
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
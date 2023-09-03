import { offer } from "../assets/images"
import { Button } from "../components";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-5 max-container" id="contact-us">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-100 rounded-4xl max-lg:hidden" />
      </div>
      <div className="flex felx-1 flex-col" >
        <h2 className="font-palanquin text-4xl capitalize font-bold text-slate-300 lg:max-w-lg">
          <span className="xl:bg-dark xl:whitespace-nowrap relative z-10 pr-10  ">
            Wir suchen
          </span>
          <br />
          <span className="text-slate-500 inline-block mt-3 relative z-10">Dich !</span> 
        </h2>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
         Seid ihr daran interessiert ein teil von <span>why so serious</span> zu werden ?
         Dann bewerbt euch jetzt ! 
         Wir Rekrutieren derzeit sämtliche Klassen und Spezialisierungen!  
        </p>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
         Was wir bieten :
        </p>
        <ul >
          <li>-Erfahrene Gildenleitung die sich seit vielen jahren kennt & Progress erfahrung aus vorherigen Addons vorweisen kann.</li>
          <li>-Verständnis fürs RL ( da einige auch einen Partner haben / Kinder, ist es selbstverständlich das diese auch ihren vorrang genießen )</li>
          <li>-Loot verteilung via RC-lootcouncil ( dem raid nutzend entsprechend )</li>
          <li>-M+ begeisterung auch nach clearen des Raid-Contents</li>
        </ul>
        <p className="font-montserrat text-slate-300 text-lg leading-7 mt-4 mb-10 lg:max-w-lg sm:max-w-sm">
         Was wir bieten :
        </p>
        <ul >
          <li>- Kritikfähigkeit </li>
          <li>- Kommunikation </li>
          <li>- Selbständige Raidvorbereitung (Food, Flask, Echants) etc . </li>
          <li>- Humor ( wer viel lacht hat mehr spaß und steckt den einen oder anderen damit vielleicht an!)</li>
        </ul>
        <div className="mt-11">
            <Button lable="Jetzt Bewerben!" />
        </div>
        
      </div>
    </section>
  )
}
// change img to the file you want found in => index.js/images
export default SpecialOffer
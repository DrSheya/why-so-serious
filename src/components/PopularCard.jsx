import { star } from "../assets/icons";

const PopularCard = ({ imgURL, name, rank}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-2xl object-cover"/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={50} height={24} className="rounded-full" /> 
            <p className="font-montserrat text-2xl leading-normal text-slate-300">
             {name}
            </p>
            
        </div>
        <h3 className="mt-2 text-slate-300 text-xl leading-normal font-semibold font-palanquin">{rank}</h3>
    </div>
   
  )
}
// star => wss logo in small 
// change main img to own files get found in => index.js/constants
export default PopularCard;
import { products } from "../constants";
import { PopularCard } from "../components";

const Popular = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5" >
        <h2 className="text-4xl font-bold font-palanquin">Roster</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-300">
          Hier einige unserer Mitglieder
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14" >
        {products.map( (product) => (
          <PopularCard key={products.name}{...product} />
        ))}
      </div>
    </section>
  )
}

export default Popular
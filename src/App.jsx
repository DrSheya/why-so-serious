import {     Hero, Popular, Footer, CoustomerReviews, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import { Nav } from "./components";
const App = () => (
  <main className="relative" > 
     <Nav /> 
    <section className="xl:padding-l wide:padding-r padding-b " >
      <Hero />
    </section>
    <section className="padding" >
      <SuperQuality />
    </section>
    <section className="padding" >
      <Popular />
    </section>

    <section className="padding" >
      <SpecialOffer />
    </section>
 

    <section className="padding bg-black padding-x padding-t pb-8 " >
      <Footer />
    </section>
  </main>
);
export default App;

/*
// this comopnents can be used if needed ... 
    <section className="padding-x py-10" >
      <Services />
    </section>
    <section className="padding bg-slate-400" >
      <CoustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full" >
      <Subscribe />
    </section>

*/
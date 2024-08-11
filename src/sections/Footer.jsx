import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/"><img src={headerLogo} width={80} height={80} className="rounded-full" /></a>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map ( (item, index) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full  hover:bg-slate-300 cursor-pointer" >
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </div>

            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map ( (section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul className="mt-5">
                {section.links.map ( (link) => (
                  <li className="font-montserrat text-base leading-normal hover:text-slate-400"><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  )
}

export default Footer
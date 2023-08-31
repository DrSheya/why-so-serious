import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-2 z-20 w-full fixed  bg-stone-900 '>
        <nav className='flex justify-between items-center max-container'>
            <a href={navLinks[0].href}>
                <img src={headerLogo} alt="Logo" width={250} height={50} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='font-montserrat leadeing-normal text-lg text-slate-300  hover:text-white' >{item.label}</a>
                </li>
              ) )}
            </ul>
            <div className='lg:hidden' >
              <img src={hamburger} alt="hamburgermenu" width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav;
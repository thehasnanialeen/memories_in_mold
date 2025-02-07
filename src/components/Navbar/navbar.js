//Navbar
import './navbar.scss'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/images'
import {motion} from 'framer-motion'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const sectionList=[
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'about',
            link: '#about'
        },
        {
            name: 'products',
            link: '#products'
        },
        {
            name: 'contact',
            link: '#contact'
        }
    ];

    return (
        <header className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logo}></img>
                </Link>
            </div>
            <div className='nav-sections'>
                {sectionList.map((section, index) => (
                    <HashLink to={section.link}>
                        <motion.p
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            {section.name}
                        </motion.p>
                    </HashLink>
                ))}
            </div>
        </header>
    )
};

export default Navbar;
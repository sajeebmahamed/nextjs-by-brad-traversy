import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/' > Home </Link>
                </li>
                <li>
                    <Link href='/about' > Abut </Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Nav;
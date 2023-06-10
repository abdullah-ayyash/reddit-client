import { NavLink } from 'react-router-dom'
import SearchBar from '../features/search/SearchBar';
import logo from '../assets/reddit.png'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                <NavLink to="/">
                <img src={logo} alt='logo' width="100%" height="80px" />
                </NavLink>
                    
                </li>
                <li>
                    <NavLink to="/" 
                    className={({isActive}) => isActive ? "nav-link-active": "nav-link" }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/popular" 
                    className={({isActive}) => isActive ? "nav-link-active": "nav-link" }
                    >
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sub-reddits" 
                    className={({isActive}) => isActive ? "nav-link-active": "nav-link" }
                    >
                        Sub-Reddits
                    </NavLink>
                </li>
                <li>
                    <SearchBar />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

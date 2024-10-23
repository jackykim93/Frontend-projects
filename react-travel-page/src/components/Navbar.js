import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; 
import { animateScroll as scroll, scroller } from "react-scroll";
import { navItems } from "./Navitems";
import { GiKoala } from "react-icons/gi";
import Dropdown from "./Dropdown";
import { HotelsData, AirlinesData } from "./DropdownData";
import { FaHotel, FaPlane } from "react-icons/fa";
import '../css/Navbar.css';

function Navbar() {
    const [hotelsDropdown, setHotelsDropdown] = useState(false);
    const [airlinesDropdown, setAirlinesDropdown] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const [scrollTarget, setScrollTarget] = useState(null);

    useEffect(() => {
        
        if (scrollTarget && location.pathname === "/") {
            scroller.scrollTo(scrollTarget, {
                duration: 500,
                smooth: true,
                offset: -70, 
            });
            setScrollTarget(null);
        }
    }, [location, scrollTarget]);

    const handleNavigation = (path, scrollTarget) => {
        if (location.pathname === "/") {
            scroller.scrollTo(scrollTarget, {
                duration: 500,
                smooth: true,
                offset: -70, 
            });
        } else {
            setScrollTarget(scrollTarget);
            navigate("/");
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-heading">
                <div className="navbar-logo">
                    <GiKoala />
                </div>
                <h1>Koala Travels</h1>
            </div>
            <ul className="nav-items">
                {navItems.map((item) => {
                    if (item.title === "Hotels") {
                        return (
                            <li key={item.id} className={item.cName}
                                onMouseEnter={() => setHotelsDropdown(true)}
                                onMouseLeave={() => setHotelsDropdown(false)}
                            >
                                <RouterLink to={item.path}>
                                    <FaHotel style={{ marginRight: '8px' }} />
                                    {item.title}
                                </RouterLink>
                                {hotelsDropdown && <Dropdown menuItems={HotelsData} />}
                            </li>
                        );
                    }

                    if (item.title === "Airlines") {
                        return (
                            <li key={item.id} className={item.cName}
                                onMouseEnter={() => setAirlinesDropdown(true)}
                                onMouseLeave={() => setAirlinesDropdown(false)}
                            >
                                <RouterLink to={item.path}>
                                    <FaPlane style={{ marginRight: '8px' }} />
                                    {item.title}
                                </RouterLink>
                                {airlinesDropdown && <Dropdown menuItems={AirlinesData} />}
                            </li>
                        );
                    }

                    if (["Worldmap", "Recommendations", "Contact"].includes(item.title)) {
                        return (
                            <li key={item.id} className={item.cName}>
                                <div
                                    onClick={() => handleNavigation("/", item.path)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {item.title}
                                </div>
                            </li>
                        );
                    }

                    return (
                        <li key={item.id} className={item.cName}>
                            <RouterLink to={item.path}>{item.title}</RouterLink>
                        </li>
                    );
                })}
            </ul>
            <div className="navbar-buttons">
                <button className="signin">Sign In</button>
                <button className="signup">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;

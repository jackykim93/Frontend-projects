import React from 'react';
import '../css/Dropdown.css';

function Dropdown({ menuItems, closeDropdown }) {
    return (
        <ul className="dropdown-submenu">
            {menuItems.map(item => {
                return (
                    <li key={item.id}>
                        <a
                            href={item.url} 
                            className={item.cName}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default Dropdown;

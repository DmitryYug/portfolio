import React from 'react';
import {Dropdown} from 'antd';
import {FaHamburger} from "react-icons/fa";
import {Link} from "react-scroll";

export const HeaderNav = () => {


    const navigationLinks = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'Skills', value: 'skills'},
        {title: 'Projects', value: 'projects'},
        {title: 'Contacts', value: 'contacts'}
    ]

    return (
        <nav className='nav'>
            <Dropdown overlayClassName='nav-dropdown'
                      dropdownRender={() => (
                          <ul>
                              {navigationLinks.map((sidBarItem, idx) => (
                                  <Link to={sidBarItem.value}
                                        smooth={true}
                                        delay={300}
                                  >
                                      <li key={`${idx} + ${sidBarItem.value}`}
                                          className='item'
                                      >
                                          {sidBarItem.title}
                                      </li>
                                  </Link>
                              ))}
                          </ul>
                      )}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <FaHamburger color='#aab1b8'
                                 size={40}
                                 style={{backgroundColor: "#111418"}}
                    />
                </a>
            </Dropdown>
        </nav>
    );
}


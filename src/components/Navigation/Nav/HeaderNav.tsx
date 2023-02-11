import React from 'react';
import {Dropdown} from 'antd';
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi";

export const HeaderNav = () => {


    const navigationLinks = [
        {title: 'About Me', value: 'aboutMe'},
        {title: 'CV', value: 'cv'},
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
                                        key={sidBarItem.value + idx}
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
                    <GiHamburgerMenu color='#aab1b8'
                                 size={40}
                                 style={{backgroundColor: "#111418"}}
                    />
                </a>
            </Dropdown>
        </nav>
    );
}


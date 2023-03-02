import React, {useState} from 'react';
import {Dropdown} from 'antd';
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi";
import {links} from "../../../content";

export const HeaderNav = () => {

    return (
        <nav className='nav'>
            <Dropdown overlayClassName='nav-dropdown'
                      trigger={['click']}
                      dropdownRender={() => (
                          <ul>
                              {links.navigation.map((sidBarItem, idx) => (
                                  <Link to={sidBarItem.value}
                                        smooth={true}
                                        delay={300}
                                        key={sidBarItem.value + idx}
                                        offset={-80}
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


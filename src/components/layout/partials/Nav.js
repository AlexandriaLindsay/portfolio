import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {removeClass, scroll} from '../../../assets/js/Functions'

const Nav = ({
  className,
  ID,
  ...props
}) => {

  const classes = classNames(
    'nav-main',
    className
  );

  return (
    <>
      <nav
        {...props}
        className={classes}
        id={ID}
        role='navigation'
      >
        <ul>
            <li><a className="hover-2" href='/#membership' onClick={() => scroll('about')}>01. ABOUT</a></li>
            <li><a className="hover-2" href='/#experience' onClick={() => scroll('experience')}>02. EXPERIENCE</a></li>           
            <li><a className="hover-2" href='/#projects' onClick={() => scroll('projects')}>03. PROJECTS</a></li>           
            <li><a className="hover-2" href='/#contact' onClick={() => scroll('contact')}>04. CONNECT</a></li>           
        </ul>
      </nav>
    </>
  );
}


export default Nav;
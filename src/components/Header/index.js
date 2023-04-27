import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react';
import './style.scss';

const Header = ({section, setSection, getData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="container">
      {open && 
          <ul className="header__nav">
            <li onClick={function(){
              setSection('world');
              setOpen(false);
              getData('world');
            }}>World</li>

            <li onClick={function(){
              setSection('arts');
              setOpen(false);
              getData('arts');
            }}>Arts</li>

            <li onClick={function(){
              setSection('automobiles');
              setOpen(false);
              getData('automobiles');
            }}>Automobiles</li>

            <li onClick={function(){
              setSection('business');
              setOpen(false);
              getData('business');
            }}>Business</li>

            <li onClick={function(){
              setSection('health');
              setOpen(false);
              getData('health');
            }}>Health</li>

            <li onClick={function(){
              setSection('fashion');
              setOpen(false);
              getData('fashion');
            }}>Fashion</li>

            <li onClick={function(){
              setSection('food');
              setOpen(false);
              getData('food');
            }}>Food</li>
            
            <li onClick={function(){
              setSection('movies');
              setOpen(false);
              getData('movies');
            }}>Movies</li>

            <li onClick={function(){
              setSection('politics');
              setOpen(false);
              getData('politics');
            }}>Politics</li>

            <li onClick={function(){
              setSection('science');
              setOpen(false);
              getData('science');
            }}>Science</li>

            <li onClick={function(){
              setSection('sports');
              setOpen(false);
              getData('sports');
            }}>Sports</li>

            <li onClick={function(){
              setSection('technology');
              setOpen(false);
              getData('technology');
            }}>Technology</li>

            <li onClick={function(){
              setSection('travel');
              setOpen(false);
              getData('travel');
            }}>Travel</li>
          </ul>
          }
          <div className="header__top">
            <h1 className="header__h1">{section.charAt(0).toUpperCase() + section.slice(1)} News</h1>
            <Hamburger toggled={open} toggle={setOpen} />
          </div>
      </div>
    </div>
  )
}

export default Header

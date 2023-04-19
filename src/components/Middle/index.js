import { useState, useEffect } from 'react';
import './middle.scss';
import no_photo from './no-photo.jpg';
import { Sling as Hamburger } from 'hamburger-react';

const keyApis = [
  "8O2f06YEeOpoZ0FP0pr3MbkWoDE3DeX8",
  "CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI",
  "2CxKOCm170DAig3ccKboNG2NV0vhmPOo"
];
const keyApi = keyApis[0];

const Middle = function() {
  const [data, setData] = useState([]);
  const [section, setSection] = useState('World');

  const getData = function(cat) {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=${keyApi}`)
    .then((response) => response.json())
    .then((dataObj) => setData(dataObj.results))
  }
  
  useEffect(function() {
    getData(section);
  }, []);

  const handleClick = function(event) {
    setOpen(true);
  }

  let [open, setOpen] = useState(false);

  return (
    <div className="middle">
        <div className="container">
          <div className="wrapper">
          {open && 
          <ul className="middle__nav">
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
            <div className="middle__top">
              <h1 className="middle__h1">{section.charAt(0).toUpperCase() + section.slice(1)} News</h1>
              <Hamburger toggled={open} toggle={setOpen} />
            </div>
            <div className="header-fix"></div>
          {data && data.map(function(el) {
            const place = el.geo_facet[0] || el.subsection || 'United States';
            const category = el.des_facet[1] || el.des_facet[0];
            const photo = el.multimedia ? el.multimedia[1].url : no_photo ;

            if (!el.title || !category) {
              return null;
            }

            return (
              <div className="item" key={el.url}>
                <h2 className="middle__category">{category}</h2>
                <div className="middle__timeplace">
                  <h3 className="middle__place">{place}</h3>
                  <div className="middle__time">
                    <p className="middle__place">{(el.updated_date).substring(0,10)}</p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99984 12.8332C3.77809 12.8332 1.1665 10.2216 1.1665 6.99984C1.1665 3.77809 3.77809 1.1665 6.99984 1.1665C10.2216 1.1665 12.8332 3.77809 12.8332 6.99984C12.8332 10.2216 10.2216 12.8332 6.99984 12.8332ZM6.99984 11.6665C8.23751 11.6665 9.4245 11.1748 10.2997 10.2997C11.1748 9.4245 11.6665 8.23751 11.6665 6.99984C11.6665 5.76216 11.1748 4.57518 10.2997 3.70001C9.4245 2.82484 8.23751 2.33317 6.99984 2.33317C5.76216 2.33317 4.57518 2.82484 3.70001 3.70001C2.82484 4.57518 2.33317 5.76216 2.33317 6.99984C2.33317 8.23751 2.82484 9.4245 3.70001 10.2997C4.57518 11.1748 5.76216 11.6665 6.99984 11.6665ZM7.58317 6.99984H9.9165V8.1665H6.4165V4.08317H7.58317V6.99984Z" fill="#B0B3B8"/>
                    </svg>
                    <p className="middle__place">{(el.updated_date).substring(11,16)}</p>
                  </div>
                </div>
                <img className="middle__photo" src= {photo} alt={el.title} />
                <h2 className="middle__title">{el.title}</h2>
                <p className="middle__description">{el.abstract}</p>
                <a href={el.url} target="_blank" rel="noreferrer">Read More</a>
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}
export default Middle
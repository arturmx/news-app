import { useState, useEffect } from 'react';
import './middle.scss';
import no_photo from './no-photo.jpg';

const Middle = function() {
  let [data, setData] = useState([]);

  //   8O2f06YEeOpoZ0FP0pr3MbkWoDE3DeX8
  //   CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI
  //   2CxKOCm170DAig3ccKboNG2NV0vhmPOo
  let keyApi = 'CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI'

  const getData = function() {
    fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${keyApi}`)
    .then((response) => response.json())
    .then((dataObj) => setData(dataObj.results));
  }
  
  useEffect(function() {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="middle">
        <div className="container">
          <div className="wrapper">
          {data.map(function(el) {
            const place = el.geo_facet[0] || el.subsection || 'United States';
            const category = el.des_facet[1] || el.des_facet[0];
            const photo = el.multimedia === null ? no_photo : el.multimedia[1].url;

            return (
              <div className="item">
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
                <a href={el.url} target="_blank">Read More</a>
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}
export default Middle
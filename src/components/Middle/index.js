import './middle.scss';
import { useState, useEffect } from 'react';

const Middle = function() {

  let [data, setData] = useState([]);

//   8O2f06YEeOpoZ0FP0pr3MbkWoDE3DeX8
//   CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI
//   2CxKOCm170DAig3ccKboNG2NV0vhmPOo
  let keyApi = '2CxKOCm170DAig3ccKboNG2NV0vhmPOo'

useEffect (function() {
  fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${keyApi}`)
  .then((response) => response.json())
  .then((dataObj) => setData(dataObj.results));},[])
  
//   let data = [];
// if (data1.length > 0) {
//   data = data1
// }

let category = '';
let photo = '';
let place = '';
let title = '';
let description = '';
  for (let i = 0; i < data.length; i++ ) {
    category = data[i].des_facet[0];
    photo = data[i].multimedia[1].url;
    // place = data[i].geo_facet[0];
    place = (data[i].subsection).toUpperCase();
    title = data[i].title;
    description = data[i].abstract;
  }

console.log(data);



  
  

    return (
        <div className="middle">
            <div className="container">
              <div className="wrapper">
                <h2 className="middle__category">{category}</h2>
                <img className="middle__photo" src= {photo}></img>
                <h3 className="middle__place">{place}</h3>
                <h2 className="middle__title">{title}</h2>
                <p className="middle__description">{description}</p>
              </div>
            </div>
        </div>
    )
}
export default Middle
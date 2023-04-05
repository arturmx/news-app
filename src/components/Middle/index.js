import './middle.scss';
import { useState, useEffect } from 'react';

const Middle = function() {

  let [data, setData] = useState([]);
  let [photo, setPhoto] = useState();
  let [place, setPlace] = useState();
  let [title, setTitle] = useState();
  let [time, setTime] = useState();



//   8O2f06YEeOpoZ0FP0pr3MbkWoDE3DeX8
//   CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI
//   2CxKOCm170DAig3ccKboNG2NV0vhmPOo
  let keyApi = 'CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI'

useEffect (function() {
  fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${keyApi}`)
  .then((response) => response.json())
  .then((dataObj) => setData(dataObj.results));},[])
  

// photos:
// let photos = data;
  // for (let i = 0; data.length )
  console.log(data[1]);
    return (
        <div className="middle">
            <div className="container">
              <div className="wrapper">
                <h2 className="middle__h2">Popular Topics</h2>
                <img src=""></img>
              </div>
            </div>
        </div>
    )
}
export default Middle
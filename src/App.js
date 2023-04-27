import {useState, useEffect} from 'react'
import Middle from './components/Middle'
import Header from './components/Header'
import './reset.scss'
import './common.scss'

const keyApis = [
  "8O2f06YEeOpoZ0FP0pr3MbkWoDE3DeX8",
  "CmVVCGlwUVoDbtX59c6f0u7kR0fAfcBI",
  "2CxKOCm170DAig3ccKboNG2NV0vhmPOo"
];
const keyApi = keyApis[0];

function App() {
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

  return (
    <div>
      <Header section={section} setSection={setSection} getData={getData} />
      <Middle data={data} />
    </div>
  );
}

export default App;

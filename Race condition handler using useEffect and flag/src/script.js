import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const getRandomTime = () => Math.floor(Math.random() * 3000);

function getRandomData(data) {
 return new Promise((res, rej) => {
   const time = getRandomTime();
   setTimeout(() => {
     res(data);
   }, time);
 });
}

const App = () => {
   const [searchText, setSearchText] = useState('');
   const [result, setResult] = useState('');

   const onChange = (event) => {
       const { value } = event.target;
       setSearchText(value);
   }
   
   useEffect(() => {
     let flag = true;
     getRandomData(searchText).then((val) => {
         if(flag){
            setResult(val);
         }
     });
     
     return () => {
       flag = false;
     }
   }, [searchText])
   
   
   return (
       <div className="App">
           <input name="search" placeholder="search" value={searchText} onChange={onChange} />
           <div>{result}</div>
       </div>
   );
}

ReactDOM.render(<App />, document.getElementById('root'));
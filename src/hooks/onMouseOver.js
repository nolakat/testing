import { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import ReactDOM from "react-dom";

const useMouseOver = () => {

  const [mouseStatus, setMouse] = useState('red');
  var links = useState(null);

  useEffect(() => {

    links = document.getElementsByTagName('a');
    testing();

  }, []);
  
  const handler = (mouseStatus) => {
    setMouse('blue');
  };


function testing(){


const divyArray = Array.prototype.slice.call(links);

  divyArray.map((value, index) => {
    console.log( value);
    value.addEventListener('mousemove', handler);
    return () => {
      value.removeEventListener('mousemove', handler);
    };
    
  });
}

  return mouseStatus;
};


 export default useMouseOver;



//  const useMouseOver = () => {
//   const [click, setClick] = useState('false');

//   useEventListener('click', (e) => {



//     setClick('true');

//     console.log('clicked!', e);
//     console.log(click);

    
//   });

//   return click;
// };
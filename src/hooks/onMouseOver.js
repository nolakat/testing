import { useState, useEffect } from 'react';

var linksNodeList = document.getElementsByTagName('a');

const onMouseOver = (props) => {
  const [isHovering, setMouse] = useState(false);
  let linkArray = Array.prototype.slice.call(linksNodeList);


  useEffect(() => {

    console.log('use effect running');
    _getAllLinks();

    return () => {
      console.log('will unmount');
      setMouse(false);

      linkArray.map((value, index) => {
          value.removeEventListener('mouseenter', _Enterhandler);
          value.removeEventListener('mouseleave', _Exithandler);
      });
    }
  }, [props]);

  const _Enterhandler = () => {
    setMouse(true);
  };

  const _Exithandler = () => {
    setMouse(false);
  };

  const _getAllLinks = () =>{

    // var linksNodeList = document.getElementsByTagName('a');
    // console.log(linksNodeList);

    linkArray = Array.prototype.slice.call(linksNodeList);
    console.log(linkArray);
    _updateHoverState();

  }

  const _updateHoverState = () => {
   
  linkArray.map((value, index) => {

    value.addEventListener('mouseenter', _Enterhandler);
    value.addEventListener('mouseleave', _Exithandler);

  });

  return;

}

  return isHovering;
};

 export default onMouseOver;

import { useState, useEffect } from 'react';

var linksNodeList = document.getElementsByTagName('a');

const onMouseOver = (props) => {
  const [isHovering, setMouse] = useState(false);
  const [allLinks, setallLinks] = useState(linksNodeList);
  let linkArray = Array.prototype.slice.call(linksNodeList);


  useEffect(() => {

    _getAllLinks();

    return () => {
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

    linkArray = Array.prototype.slice.call(linksNodeList);
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

import { useState, useEffect } from 'react';


const onMouseOver = (props) => {
  var linksNodeList = document.getElementsByTagName('a');
  const [isHovering, setMouse] = useState(false);
  // eslint-disable-next-line 
  const [allLinks, setallLinks] = useState(linksNodeList);
  let linkArray = Array.prototype.slice.call(linksNodeList);


  useEffect(() => {

    _getAllLinks();

    return () => {
      setMouse(false);

      linkArray.map((value, index) => {
          value.removeEventListener('mouseenter', _Enterhandler);
          value.removeEventListener('mouseleave', _Exithandler);
          return;
      });
    }
  }, [props]);

  const _Enterhandler = () => {
    return setMouse(true);
  };

  const _Exithandler = () => {
    return setMouse(false);
  };

  const _getAllLinks = () =>{

    linkArray = Array.prototype.slice.call(linksNodeList);
    return _updateHoverState();

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

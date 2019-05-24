import { useState, useEffect } from 'react';

const onMouseOver = () => {

  const [isHovering, setMouse] = useState(false);
  var linksNodeList = document.getElementsByTagName('a');
  var linkArray = {}; 

  useEffect(() => {
    console.log(linksNodeList);

    linkArray = Array.prototype.slice.call(linksNodeList);
    _updateHoverState();
    
    return () => {
      console.log('will unmount');
      // linksNodeList= setList(null);
      linkArray.map((value, index) => {
          value.removeEventListener('mouseenter', _Enterhandler);
          value.removeEventListener('mouseleave', _Exithandler);
      });
    }

  }, []);

  const _Enterhandler = () => {
    setMouse(true);
  };

  const _Exithandler = () => {
    setMouse(false);
  };

  const _updateHoverState = () => {
  console.log('component mounted');
   
  linkArray.map((value, index) => {
    console.log('link array', value);

    value.addEventListener('mouseenter', _Enterhandler);
    value.addEventListener('mouseleave', _Exithandler);

  });

}

  return isHovering;
};

 export default onMouseOver;

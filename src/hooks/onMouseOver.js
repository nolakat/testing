import { useState, useEffect } from 'react';

const onMouseOver = () => {

  const [isHovering, setMouse] = useState(false);
  var linksNodeList = useState(null);

  useEffect(() => {
    linksNodeList = document.getElementsByTagName('a');
    _updateHoverState();

  }, []);

  const _Enterhandler = () => {
    setMouse(true);
  };

  const _Exithandler = () => {
    setMouse(false);
  };

  const _updateHoverState = () => {

  const linkArray = Array.prototype.slice.call(linksNodeList);

  linkArray.map((value, index) => {

    value.addEventListener('mouseenter', _Enterhandler);
    value.addEventListener('mouseleave', _Exithandler);

    return () => {

      value.removeEventListener('mouseenter', _Enterhandler);
      value.removeEventListener('mouseleave', _Exithandler);

    };
  });
}

  return isHovering;
};

 export default onMouseOver;

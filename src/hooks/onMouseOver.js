import { useState, useEffect } from 'react';


const onMouseOver = (location) => {
  var linksNodeList;
  var linkArray = [];
  const [isHovering, setMouse] = useState(false);

  useEffect(() => {

     console.log('useEffect');
    _getAllLinks();

    return () => {
      //@remind -- I had this set to false for some reason
      // will probably remember why later.
      // right now it's to keep the hover-state on animated
      // link reloads
       //setMouse(false);

      // document.addEventListener('DOMNodeInserted', _flagInsertedElement, false);

      linkArray.map((value, index) => {
          value.removeEventListener('mouseenter', _Enterhandler);
          value.removeEventListener('mouseleave', _Exithandler);
          return;
      });
    }
  }, [location]);

  const _flagInsertedElement = (event) => {
    console.log('flag raised');
    var el = event.target;

    if( el.classList !== undefined && el.children.length > 0 ){
      _getAllLinks();
    }
 }

  const _Enterhandler = () => {
    return setMouse(true);
  };

  const _Exithandler = () => {
    return setMouse(false);
  };

  const _getAllLinks = (links) =>{
    linkArray = [];

    let test = document.getElementsByClassName('tl-wrapper-status--entered')[0];
    console.log(test);
    // let newArray = test.getElementsByTagName('a');
    // console.log(newArray);

    linksNodeList = document.getElementsByTagName('a');
    linkArray = Array.prototype.slice.call(linksNodeList);

    return _updateHoverState(linkArray);
  }

  const _updateHoverState = (linkArray) => {

  linkArray.map((value, index) => {

    value.addEventListener('mouseenter', _Enterhandler);
    value.addEventListener('mouseleave', _Exithandler);

  });

  return;
}

  return isHovering;
};

 export default onMouseOver;

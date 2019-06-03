import { useState, useEffect } from 'react';


const onMouseOver = (location) => {
  var linksNodeList;
  var linkArray = [];
  const [isHovering, setMouse] = useState(false);

  useEffect(() => {
    // runs once when the window location changes
    _getAllLinks();

    _runObserver();

    return () => {
      //@remind -- I had this set to false for some reason
      // will probably remember why later.
      // right now it's to keep the hover-state on animated
      // link reloads
      //  setMouse(false);

      linkArray.map((value, index) => {
          value.removeEventListener('mouseenter', _Enterhandler);
          value.removeEventListener('mouseleave', _Exithandler);
          return;
      });
    }
  }, [location]);

  const _runObserver = () =>{
    // set observer on child of Transition Link's Layout that takes classNames
    // during Transition. If ClassName contains 'mount' search for links.
    var targetNode = document.getElementsByClassName('tl-edges')[0];

    var _callback = (mutationList) => {
      mutationList.forEach(function(mutation) {

        if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].classList.contains('tl-wrapper--mount')){
          return _getAllLinks();
        }

      });
    };

    var config = {
      attributeFilter: [ "class" ],
      childList: true,
      subtree: false };

    var observer = new MutationObserver(_callback);
    observer.observe(targetNode, config);
  }

  const _Enterhandler = () => {
    return setMouse(true);
  };

  const _Exithandler = () => {
    return setMouse(false);
  };

  const _Clickhandler = (e) => {

    let targetParent = e.target.parentElement.localName;

    if(targetParent === 'header'){
      return;
    } else {
      return setMouse(false);
    }
  }

  const _getAllLinks = (links) =>{

    //!@remind -- try to find a more efficent way to do this
    //works for now
    linksNodeList = document.getElementsByTagName('a');
    linkArray = Array.prototype.slice.call(linksNodeList);

    return _updateHoverState(linkArray);
  }

  const _updateHoverState = (linkArray) => {

  linkArray.map((value, index) => {
    value.addEventListener('mouseenter', _Enterhandler);
    value.addEventListener('mouseleave', _Exithandler);
    value.addEventListener('click', _Clickhandler);
  });

  return;
}

  return isHovering;
};

 export default onMouseOver;

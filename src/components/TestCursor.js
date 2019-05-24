import React, {useState, useEffect} from 'react';
import { css } from '@emotion/core';
import { TweenMax } from "gsap/TweenMax";
import useMouseMove from '../hooks/useMouseMove';
import onMouseOver from '../hooks/onMouseOver';


const TestCursor = () =>{

    var outerCursor = useState(null);
    var outerTween = useState(null);
    let outerCursorSize = 20;


    var innerCursor = useState(null);
    var innerTween = useState(null);
    var increaseCursor = useState(null);
    const innerCursorSize = 10;


    const [posX, posY] = useMouseMove();
    const hoverStatus = onMouseOver();



    useEffect(() => {

        outerTween = TweenMax
        .to(outerCursor, .25, {x: posX - (outerCursorSize / 2), y: posY - (outerCursorSize / 2)});
        if(hoverStatus){
        TweenMax
        .to(outerCursor, 1, {scale: 2} );
        } else {
        TweenMax
        .to(outerCursor, 1, {scale: 1} );
        }
        innerTween = TweenMax
        .to(innerCursor, 0, {x: posX - (innerCursorSize / 2), y: posY - (innerCursorSize / 2)});

    });


    return (
        <>
         <div
                ref={div => innerCursor = div}

                css={css`
                    width: ${innerCursorSize}px;
                    height: ${innerCursorSize}px;
                    background: green;
                    display: block;
                    position: absolute;
                    border-radius: 100%;
                    pointer-events: none;

                `}/>

                <div
                ref={div => outerCursor= div}

                css={css`
                    width: ${outerCursorSize}px;
                    height: ${outerCursorSize}px;
                    background: ${hoverStatus ? 'blue' : 'red' };
                    opacity: .5;
                    position: absolute;
                    display: block;
                    border-radius: 100%;
                    pointer-events: none;
                `} />

          The mouse position is ({posX}, {posY}). <br />
          The hover status is {hoverStatus}.
        </>
      );
}

export default TestCursor;
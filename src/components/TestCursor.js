import React, {useState, useEffect} from 'react';
import { css } from '@emotion/core';
import { TweenMax, Back, Bounce, Circ, Elastic } from "gsap/TweenMax";
import useMouseMove from '../hooks/useMouseMove';
import onMouseOver from '../hooks/onMouseOver';

const TestCursor = (props) =>{

    var outerCursor = useState(null);
    // eslint-disable-next-line
    var outerTween = useState(null);
    let outerCursorSize = 10;
    let outerCursorBorderWidth = 2;

    var innerCursor = useState(null);
    // eslint-disable-next-line
    var innerTween = useState(null);
    // eslint-disable-next-line
    var increaseCursor = useState(null);
    const innerCursorSize = 10;


    const location = props.location;
    const node = props.entryNode;

    const [posX, posY] = useMouseMove();
    const hoverStatus = onMouseOver(location);
    // console.log('locaLinks TestCursor', props);
    // const hoverStatus = false;
    // const [posX, posY] = [0, 0]

    useEffect(() => {
        outerTween = TweenMax
        .to(outerCursor, .75, {x: posX - (outerCursorSize / 2) - outerCursorBorderWidth,
                               y: posY - (outerCursorSize / 2) - outerCursorBorderWidth,
                               ease: Back.easeOut.config(1.5) } );

            if(hoverStatus){
            TweenMax
            .to(outerCursor, .75,
            { width: 40,
                height: 40,
                xPercent:-40,
                yPercent: -40,
                ease: Bounce.easeOut
            } );
            } else {
            TweenMax
            .to(outerCursor, .5, {width:  outerCursorSize, height: outerCursorSize, xPercent: 0, yPercent: 0} );
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
                    z-index: 999;

                `}/>

                <div
                ref={div => outerCursor= div}

                css={css`
                    width: ${outerCursorSize}px;
                    height: ${outerCursorSize}px;
                    // background: ${hoverStatus ? 'blue' : 'red' };
                    background: #fff;
                    opacity: .5;
                    border: ${outerCursorBorderWidth}px solid green;
                    position: absolute;
                    display: block;
                    border-radius: 100%;
                    pointer-events: none;
                    z-index: 999;
           
                `} />

            <pre css={css`
            border: 1px solid #ccc;
            width: fit-content;
            padding: 20px;
            position: absolute;
            bottom: 0px;
            left: 20px;
            z-index: 998;
            `}>
            The mouse position is ({posX}, {posY}). <br />
            Link Hover Status: {JSON.stringify({hoverStatus})}. <br/>
            Location: {props.location} <br/>
            </pre>
        </>
      );
}

export default TestCursor;
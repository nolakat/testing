import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape,Rect, Box, dragRotate, useRender } from 'react-zdog'
import { a, useSpring } from 'react-spring'
import { css } from '@emotion/core';


/** --- Basic, re-usable shapes -------------------------- */
const AnimShape = a(Shape)
const TAU = Math.PI * 2

/** --- Assembly ----------------------------------------- */
function Guy(props) {
  // Change motion every second
  const [up, setUp] = useState(true)
  useEffect(() => void setInterval(() => setUp(previous => !previous), 500), [])
  // Turn static values into animated values
  const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#EA0' : 'tomato', rotation: up ? 0 : Math.PI })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0
  useRender(() => (ref.current.rotate.y = Math.cos((t += .05) / TAU)))
  return (
      <>
        <Box ref={ref} width={50} height={50} depth={50} color="purple" topFace="#56638A" bottomFace="#56638A" leftFace="#53DD6C" rightFace="#56638A" fill/>
      </>
    )
}



export default () => {

    return(
  <div className="test" css={css` width: 100vw; height: 100vh; background: #fff;`}>
        <h1>Test Animation</h1>
        <Illustration>
            <Guy />
        </Illustration>
    </div>
    )
}
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape, Box, useRender } from 'react-zdog'
import { a, useSpring } from 'react-spring'
import { css } from '@emotion/core';

/** --- Basic, re-usable shapes -------------------------- */
const AnimShape = a(Shape)
const TAU = Math.PI * 1



/** --- Assembly ----------------------------------------- */
const Plant = (props) => {
    // Change motion every second
    const [up, setUp] = useState(true)
    useEffect(() => void setInterval(() => setUp(previous => !previous), 100), [])
    // Turn static values into animated values
    const { rotation, color, size } = useSpring({ color: up ? '#EA0' : 'tomato', rotation: up ? 0 : -1 })
    // useRender allows us to hook into the render-loop
    let t = 400
    useRender(() => (ref.current.rotate.y  += .0025))
    const ref = useRef()
    const Leaf = props =>  <Ellipse  ref={ref} width={50} height={50} stroke={20} color='green'  {...props}/>

    return (
        <div css={css`border: 1px solid red;`}>
          {/* <Box ref={ref} width={150} height={150} depth={150} color="#56484D" topFace="#56484D" bottomFace="#56638A" leftFace="#53DD6C" rightFace="#56638A" fill/> */}
          {/* <Ellipse  ref={ref} width={50} height={50} stroke={20} color='green'  {...props}/> */}
          <Shape ref={ref}>

          <Leaf />
          <Leaf translate={{ x: -150, y: .025 }}   />


          </Shape>



        </div>
      )
  }

  export default Plant;
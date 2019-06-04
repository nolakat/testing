import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, useRender } from 'react-zdog'
import { a, useSpring } from 'react-spring'
import { css } from '@emotion/core';


/** --- Basic, re-usable shapes -------------------------- */
const AnimShape = a(Shape)
const AnimAnchor = a(Anchor)
const AnimEllipse = a(Ellipse)
const TAU = Math.PI * 2
const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.5} {...props} />
const Leg = props => (
  <AnimShape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
    <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
  </AnimShape>
)
const Arm = props => (
  <AnimShape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
    <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
  </AnimShape>
)

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
  useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))
  return (
    <Shape ref={ref} path={[{ x: -3 }, { x: 3 }]} stroke={4} color="#747B9E" {...props}>
      <AnimAnchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
        <Shape path={[{ x: -1.5 }, { x: 1.5 }]} translate={{ y: -6 }} stroke={9} color="#E1E5EE">
          <AnimShape stroke={11} translate={{ y: -9.5 }} color={color}>
            <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" />
            <Ellipse diameter={6} rotate={{ x: -TAU / 10 }} translate={{ y: -4, z: -1 }} stroke={4} color="#444B6E" fill />
            <Eye />
            <Eye translate={{ x: 2.2, z: 4.5 }} />
            <AnimEllipse diameter={1.3} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#444B6E" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={0.5} translate={{ x: 4.5, y: -4.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.5} fill />
          </AnimShape>
          <Arm rotate={rotation.interpolate(r => ({ x: -TAU / 4 + r }))} />
          <Arm translate={{ x: 5, y: -2 }} rotate={rotation.interpolate(r => ({ x: TAU / 4 - r }))} />
        </Shape>
      </AnimAnchor>
      <Leg rotate={rotation.interpolate(r => ({ x: TAU / 5 - r / 1.2 }))} />
      <Leg translate={{ x: 3 }} rotate={rotation.interpolate(r => ({ x: -TAU / 5 + r / 1.2 }))} />
    </Shape>
  )
}



export default () => {

    return(
  <div className="test" css={css` width: 100vw; height: 100vh; background: #fff;`}>
    <Illustration zoom={8} >
        <Ellipse diameter={25} rotate={{ x: -TAU / 3 }} translate={{ y: 15, z: -100 }} stroke={4} color="#ded89a" fill />
        <Guy />
      </Illustration>
</div>
    )
}
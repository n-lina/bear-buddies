import React, { useRef, useState, useEffect } from 'react';
import { Illustration, Ellipse, Shape, RoundedRect, useRender, Polygon } from 'react-zdog';
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog';

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#241d19" stroke={0.5} {...props} />
const Leg = props => (
    <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
        <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
        <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
    </a.Shape>
)
const Arm = props => (
    <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
        <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
        <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
    </a.Shape>
)

/** --- Assembly ----------------------------------------- */
function Test() {
    // useRender allows us to hook into the render-loop
    const [up, setUp] = useState(true)
    const { rotation, color, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#7a5843' : 'tomato', rotation: up ? 0 : Math.PI })
    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));
    return (
        <a.Shape ref={ref} stroke={11} translate={{ y: -9.5 }} color={color}>
            {/* <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" /> */}
            <a.Shape ref={ref} stroke={4} translate={{ x: -5, y: -4.5 }} color={color} fill />
            <a.Shape ref={ref} stroke={4} translate={{ x: 5, y: -4.5 }} color={color} fill />
            <Eye />
            <Eye translate={{ x: 2.2, z: 4.5 }} />
            <a.Ellipse height={3} width={2} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={0.5} fill />
            <a.Ellipse height={1.3} width={1} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={0.5} translate={{ x: 4.5, y: -4.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.5} fill />
        </a.Shape>
    )
}


function Bear() {
    return (
        <Test />
    )
}

export default Bear;
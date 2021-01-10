import React, { useRef, useState, useEffect } from 'react'
import "./main.css"
import ProgressBar from '@ramonak/react-progress-bar';
import { Illustration, Ellipse, Shape, RoundedRect, useRender } from 'react-zdog'
import { a, useSpring } from 'react-spring/zdog';
import Bear from './../animations/bear';
import {useStores} from "../models/RootStoreContext"

/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 4.5 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.5} {...props} />
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

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // setup the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


/** --- Assembly ----------------------------------------- */
function Guy(props) {
  // Change motion every second
  const {templateStore} = props

  const [up, setUp] = useState(true)
  // useEffect(() => void setInterval(() => setUp(previous => !previous), 450), [])
  useInterval(() => {
    setUp(!up)
  }, 450);
  // Turn static values into animated values
  const aaa = templateStore.eat ? 'tomato' : '#EA0'
  const bbb = templateStore.eat ? 0.2 : 1.2
  const ccc = templateStore.eat ? Math.PI : 0

  const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0
  useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))
  return (
    <Shape ref={ref} path={[{ x: -3 }, { x: 3 }]} stroke={4} color="#747B9E">
      <a.Anchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
        <Shape path={[{ x: -1.5 }, { x: 1.5 }]} translate={{ y: -6 }} stroke={9} color="#E1E5EE">
          <a.Shape stroke={11} translate={{ y: -9.5 }} color={color}>
            <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" />
            <Ellipse diameter={6} rotate={{ x: -TAU / 10 }} translate={{ y: -4, z: -1 }} stroke={4} color="#444B6E" fill />
            <Eye />
            <Eye translate={{ x: 2.2, z: 4.5 }} />
            <a.Ellipse diameter={1.3} scale={size} translate={{ y: 2, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="#444B6E" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill />
            <Ellipse diameter={0.5} translate={{ x: 4.5, y: -4.5, z: 4.5 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.5} fill />
          </a.Shape>
          <Arm rotate={rotation.interpolate(r => ({ x: -TAU / 4 + r }))} />
          <Arm translate={{ x: 5, y: -2 }} rotate={rotation.interpolate(r => ({ x: TAU / 4 - r }))} />
        </Shape>
      </a.Anchor>
      <Leg rotate={rotation.interpolate(r => ({ x: TAU / 5 - r / 1.2 }))} />
      <Leg translate={{ x: 3 }} rotate={rotation.interpolate(r => ({ x: -TAU / 5 + r / 1.2 }))} />
    </Shape>
  )
}

const MainPage = () => {
  const {templateStore} = useStores()
  console.log(templateStore.eat)

  return (
    <div className="main">
      <div className="leftSide">
        <div className="level">
          <p className="label"> Level </p>
          <div className="level-circle">{templateStore.level}</div>
          <ProgressBar completed={templateStore.levelProgress}  labelSize	={0}  />
        </div>
        <div className="vitals">
          <p className="label">Fullness</p>
          <ProgressBar completed={templateStore.full}  labelSize	={0} />
          <p className="label">Cleanliness</p>
          <ProgressBar completed={templateStore.clean}  labelSize	={0} />
          <p className="label">Energy</p>
          <ProgressBar completed={templateStore.energy}  labelSize	={0} />
          <p className="label">Happiness</p>
          <ProgressBar completed={templateStore.happy} labelSize	={0}  />
          <p className="label">Calmness</p>
          <ProgressBar completed={templateStore.calm} labelSize	={0}  />
          <p className="label">Health</p>
          <ProgressBar completed={templateStore.health} labelSize	={0} />
        </div>
        <div className="userToolbar">
          <div className="icon">Camera</div>
          <div className="icon">Accessories</div>
        </div>
      </div>
      <div className="zdog">
        <Illustration zoom={8}>
            <Ellipse diameter={20} rotate={{ x: -TAU / 3 }} translate={{ y: 15, z: -100 }} stroke={4} color="#373740" fill />
            <Guy templateStore={templateStore}/>
        </Illustration>
      </div>
      <div className="rightSide">
        <div className="control" onClick={() => templateStore.setEat(!templateStore.eat)}>Feed</div>
        <div className="control">Bathe</div>
        <div className="control">Play</div>
        <div className="control">Sleep</div>
        <div className="control">Breate</div>
        <div className="control">Pet</div>
      </div>
    </div>
  );
};

export default MainPage;
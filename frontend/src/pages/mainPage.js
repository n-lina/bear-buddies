import React, { useRef, useState, useEffect } from 'react'
import "./main.css"
import ProgressBar from '@ramonak/react-progress-bar';
import { Illustration, Ellipse, Shape, RoundedRect, useRender } from 'react-zdog'
import { a, useSpring } from 'react-spring/zdog';
import Bear from './../animations/bear';
import { useStores } from "../models/RootStoreContext"
import { exportComponentAsPNG } from 'react-component-export-image';
import { IoShirt } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { observer } from "mobx-react"
import axios from 'axios';
import { auth } from "../firebase"
import forest1 from "../assets/forest.jpg"
import forest2 from "../assets/fall-forest.jpg"
import forest3 from "../assets/forest1.jpg"
import forest4 from "../assets/forest2.png"
import forest5 from "../assets/night.jpg"
import bear from "../assets/bear.jpg"
import bear2 from "../assets/bear2.jpg"
import berry from "../assets/badge-berry-purple.PNG"
import berry1 from "../assets/badge-berry-red.PNG"
import fish from "../assets/badge-fish-blue.PNG"
import fish1 from "../assets/badge-fish-gold.PNG"
import honey from "../assets/badge-honey.PNG"
import tree from "../assets/badge-tree-gold.PNG"
import tree1 from "../assets/badge-tree-green.PNG"
import Logout from '../components/Logout'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const icons = [<img className="badge" src={berry}></img>,
<img className="badge" src={berry1}></img>,
<img className="badge" src={fish}></img>,
<img className="badge" src={fish1}></img>,
<img className="badge" src={honey}></img>,
<img className="badge" src={tree}></img>,
<img className="badge" src={tree1}></img>]


/** --- Basic, re-usable shapes -------------------------- */
const TAU = Math.PI * 2
const Eye = props => <Ellipse diameter={1.7} quarters={2} translate={{ x: -2.2, y: 0, z: 4.7 }} rotate={{ z: -TAU / 4 }} color="#444B6E" stroke={0.7} {...props} />
const Leg = props => (
  <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
    <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.7 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
  </a.Shape>
)
const Arm = props => (
  <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -7, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
    <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
    <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={7.4} color="#EA0" />
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
  const { templateStore } = props

  const [up, setUp] = useState(true)
  // useEffect(() => void setInterval(() => setUp(previous => !previous), 450), [])
  useInterval(() => {
    setUp(!up)
  }, 450);

  // Turn static values into animated values
  const aaa = templateStore.eatBool ? 'tomato' : '#EA0'
  const bbb = templateStore.eatBool ? 0.2 : 1.2
  const ccc = templateStore.eatBool ? Math.PI : 0

  const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
  // useRender allows us to hook into the render-loop
  const ref = useRef()
  let t = 0
  useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)))
  return (
    <Shape ref={ref} path={[{ x: -3 }, { x: 3 }]} stroke={4} color="#747B9E">
      <a.Anchor rotate={rotation.interpolate(r => ({ x: TAU / 18 + -r / 4 }))}>
        <Shape path={[{ x: -1.7 }, { x: 1.7 }]} translate={{ y: -6 }} stroke={9} color="#E1E5EE">
          <a.Shape stroke={11} translate={{ y: -9.7 }} color={color}>
            <Shape translate={{ x: 0, y: -2, z: -4 }} stroke={8} color="#747B9E" />
            <Ellipse diameter={6} rotate={{ x: -TAU / 7 }} translate={{ y: -4, z: -1 }} stroke={4} color="#444B6E" fill />
            <Eye />
            <Eye translate={{ x: 2.2, z: 4.7 }} />
            <a.Ellipse diameter={1.3} scale={size} translate={{ y: 2, z: 4.7 }} rotate={{ z: TAU / 4 }} closed color="#444B6E" stroke={0.7} fill />
            <Ellipse diameter={1} translate={{ x: -3.7, y: 1.7, z: 4.7 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.7} fill />
            <Ellipse diameter={1} translate={{ x: 3.7, y: 1.7, z: 4.7 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.7} fill />
            <Ellipse diameter={0.7} translate={{ x: 4.7, y: -4.7, z: 4.7 }} rotate={{ z: TAU / 4 }} closed color="lightblue" stroke={0.7} fill />
          </a.Shape>
          <Arm rotate={rotation.interpolate(r => ({ x: -TAU / 4 + r }))} />
          <Arm translate={{ x: 7, y: -2 }} rotate={rotation.interpolate(r => ({ x: TAU / 4 - r }))} />
        </Shape>
      </a.Anchor>
      <Leg rotate={rotation.interpolate(r => ({ x: TAU / 7 - r / 1.2 }))} />
      <Leg translate={{ x: 3 }} rotate={rotation.interpolate(r => ({ x: -TAU / 7 + r / 1.2 }))} />
    </Shape>
  )
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MainPage = () => {
  const { templateStore } = useStores()
  const zdogRef = useRef()
  const [lookup, setLookup] = useState(false)
  const [showA, setShowA] = useState(false)
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        axios({
          method: 'post',
          url: `/api/${user.uid}`
        }).then((res) => {
          templateStore.setName(res.data.animalName)
          templateStore.setFull(res.data.fullness)
          templateStore.setClean(res.data.cleanliness)
          templateStore.setEnergy(res.data.energy)
          templateStore.setHappy(res.data.happiness)
          templateStore.setHealth(res.data.health)
          templateStore.setCalm(res.data.calmness)
          templateStore.setLevel(res.data.level)
          templateStore.setLvlProgress(res.data.experience)
          setLookup(true);
        }).catch((err) => {
          templateStore.setName('Odie');
          console.log(err);
        });
      }
    });
  };

  const updateData = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("hello")
        console.log(templateStore.calm)
        axios({
          method: 'put',
          url: '/api/',
          data: {
            requesterID: `${user.uid}`,
            level: templateStore.level,
            experience: templateStore.experience,
            animalName: templateStore.name,
            fullness: templateStore.fullness,
            happiness: templateStore.happy,
            cleanliness: templateStore.clean,
            energy: templateStore.energy,
            calmness: templateStore.calm,
            health: templateStore.health
          }
        });
      }
    });
  }

  useEffect(() => {
    console.log('here');
    if (!lookup) {
      getData();
    }
    else {
      updateData();
    }
  }, [templateStore.full, templateStore.clean, templateStore.energy, templateStore.happy, templateStore.calm, templateStore.health, templateStore.levelProgress, templateStore.level]);

  return (
    <div className="main">
      <div className="leftSide">
        <div className="level">
          <div style={{height: 15}}></div>
          <p className="label-top">— level —</p>
          <div className="level-left-ear"></div>
          <div className="level-right-ear"></div>
          <div className="level-circle">
            <p style={{ fontWeight: 'bold', color: 'brown', textAlign: 'center', marginTop: 5, marginLeft: 5, fontSize: 17, borderStyle: 'solid', borderColor: 'brown', borderRadius: 30, height: 30, width: 30 }}>
              <p style={{ marginTop: 3 }}>{templateStore.level}</p>
            </p>
          </div>
          <div className="bar-level"><ProgressBar completed={templateStore.levelProgress} labelSize="0" width="91%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} /></div>
        </div>
        <div className="vitals">
          <div style={{ height: 7 }}></div>
          <p className="label">— fullness —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.full} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
          <div style={{ height: 7 }}></div>
          <p className="label">— cleanliness —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.clean} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
          <div style={{ height: 7 }}></div>
          <p className="label">— energy —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.energy} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
          <div style={{ height: 7 }}></div>
          <p className="label">— happiness —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.happy} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
          <div style={{ height: 7 }}></div>
          <p className="label">— calmness —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.calm} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
          <div style={{ height: 7 }}></div>
          <p className="label">— health —</p>
          <div style={{ height: 7 }}></div>
          <div className="bar"><ProgressBar completed={templateStore.health} labelSize="0" width="92%" bgcolor={"#145E0A"} baseBgColor={"#D9B680"} height="15px" /></div>
        </div>
        <div className="userToolbar">
          <div className="icon" onClick={() => exportComponentAsPNG(zdogRef)}><FaCameraRetro size={50} color="#3D2A02" /></div>
          <div className="icon" onClick={() => setShowA(!showA)}><IoShirt size={50} color="#3D2A02" /></div>
          <div className="icon" onClick={handleOpen}><MdInfo size={50} color="#3D2A02" /></div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Bear Buddies</h2>
                <p id="transition-modal-description">Ease your anxiety and improve your mental wellness by taking care of your own pet!
                  <br /> Make sure to pet, feed, and play with it often!</p>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
      <div className="zdog" ref={zdogRef}>
        {showA && <div className="access">
            {icons[0]}
          </div>}
        <Illustration zoom={8} dragRotate={true}>
          {/* <Ellipse diameter={7} rotate={{ x: -TAU / 3 }} translate={{ y: 15, z: -100 }} stroke={4} color="#373740" fill /> */}
          <Bear templateStore={templateStore} />
        </Illustration>
        <div className="name">
          <div className="inner-name">
              <p className = "nametag">{templateStore.name} the Bear 🤍</p>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightButtons">
          <div className="date">Jan 10, 2021</div>
          <div className="control" onClick={() => templateStore.handleEat(!templateStore.eatBool)}>Feed</div>
          <div className="control" onClick={() => templateStore.handleClean(!templateStore.cleanBool)}>Bathe</div>
          <div className="control" onClick={() => templateStore.handlePlay(!templateStore.healthBool)}>Play</div>
          <div className="control" onClick={() => templateStore.handleSleep(!templateStore.sleepBool)}>Sleep</div>
          <div className="control" onClick={() => templateStore.handleBreathe(!templateStore.breatheBool)}>Breathe</div>
          <div className="control" onClick={() => templateStore.handlePet(!templateStore.petBool)}>Pet</div>
          <Logout/>
        </div>
      </div>
    </div>
  );
};

export default observer(MainPage);
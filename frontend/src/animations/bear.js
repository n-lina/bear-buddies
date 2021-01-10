import React, { useRef, useState, useEffect } from 'react';
import { Illustration, Ellipse, Shape, RoundedRect, useRender, Polygon } from 'react-zdog';
// New react-spring target, for native animation outside of React
import { a, useSpring } from 'react-spring/zdog';
import { observer } from "mobx-react";

/** --- CONSTANTS -------------------------- */
const TAU = Math.PI * 2;

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

function NormalBear() {
    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const rotation = 0;
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));

    // add conditional to check for accessories
    const Glasses = () => (
        <a.Shape stroke={0}>
            <Ellipse diameter={3} translate={{ x: -2.2, y: -1, z: 6.8 }} closed color="gold" stroke={0.3} />
            <Ellipse diameter={3} translate={{ x: 2.2, y: -1, z: 6.8 }} closed color="gold" stroke={0.3} />
            <Shape path={[{ x: -0.5 }, { x: 0.5 }]} stroke={0.3} translate={{ x: 0, y: -1, z: 6.8 }} color="gold" />
        </a.Shape>
    );

    const Scarf = () => (
        <a.Shape stroke={0}>
            <Ellipse diameter={13} quarters={2} color="purple" stroke={2} rotate={{ x: TAU / 4.5, y: TAU / 1, z: TAU / 3.5 }} translate={{ x: 0, y: 6, z: 0 }} />
        </a.Shape>
    );

    const NeutralFace = () => (
        <a.Shape stroke={0}>
            <a.Shape ref={ref} stroke={1.2} translate={{ x: -2.2, y: -1, z: 6.8 }} color="#241d19" fill /> {/*left eye*/}
            <a.Shape ref={ref} stroke={1.2} translate={{ x: 2.2, y: -1, z: 6.8 }} color="#241d19" fill /> {/*right eye*/}
        </a.Shape>
    );

    const HappyFace = () => (
        <a.Shape stroke={0}>
            <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: -2.2, y: -1, z: 6 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*left eye*/}
            <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: 2.2, y: -1, z: 6 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*right eye*/}
        </a.Shape>
    );

    // happiness indicator
    const SadFace = () => (
        <a.Shape stroke={0}>
            <Shape path={[{ x: -2.75 }, { x: -2 }]} stroke={0.5} translate={{ x: 0, y: -1, z: 6.8 }} color="#241d19" />
            <Shape path={[{ x: 2 }, { x: 2.75 }]} stroke={0.5} translate={{ x: 0, y: -1, z: 6.8 }} color="#241d19" />
            <Shape path={[{ x: 2.5 }, { x: 2.5, y: 3 }]} stroke={1} translate={{ x: 0, y: -0.3, z: 6.8 }} color="#87c9e8" />
            <Shape path={[{ x: -2.5 }, { x: -2.5, y: 4 }]} stroke={1} translate={{ x: 0, y: -0.3, z: 6.8 }} color="#87c9e8" />
        </a.Shape>
    );

    // calmness indicator
    const AngryFace = () => (
        <a.Shape stroke={0}>
            <Shape path={[{ x: -2.75 }, { x: -2 }]} stroke={0.5} translate={{ x: 0, y: -1, z: 6.8 }} color="#241d19" />
            <Shape path={[{ x: 2 }, { x: 2.75 }]} stroke={0.5} translate={{ x: 0, y: -1, z: 6.8 }} color="#241d19" />
            <Shape path={[{ x: -2.75 }, { x: -2 }]} stroke={0.5} translate={{ x: 0, y: -2, z: 6.8 }} rotate={{ z: TAU - TAU / 1.1 }} color="#241d19" />
            <Shape path={[{ x: 2 }, { x: 2.75 }]} stroke={0.5} translate={{ x: 0, y: -2, z: 6.8 }} rotate={{ z: TAU - TAU / 9 }} color="#241d19" />
        </a.Shape>
    );

    return (
        <a.Shape ref={ref} stroke={15} translate={{ y: -9.5 }} color={color}> {/*head*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
            <AngryFace />
            <Glasses />
            <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
            <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
            </a.Shape>
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
            <a.Ellipse height={7} width={4} ref={ref} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 11, y: 10 }} rotate={{ z: TAU / 3 }} color={color_tint} fill /> {/*left arm*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -11, y: 10 }} rotate={{ z: TAU / -3 }} color={color_tint} fill /> {/*right arm*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 6, y: 23 }} rotate={{ z: TAU / 1 }} color={color_tint} fill /> {/*left leg*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -6, y: 23 }} rotate={{ z: TAU / 1 }} color={color_tint} fill /> {/*right leg*/}
            <Scarf />
        </a.Shape>
    );
}

function FeedBear() {
    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const two = 15;

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));

    return (
        <a.Shape ref={ref} stroke={15} translate={{ y: -9.5 }} color={color}> {/*head*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
            <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: -1, z: 6.8 }} rotate={{ z: -TAU / 4 }} color="#241d19" stroke={0.5} /> {/*left eye*/}
            <Ellipse diameter={1.5} quarters={2} translate={{ x: 2.2, y: -1, z: 6.8 }} rotate={{ z: -TAU / 4 }} color="#241d19" stroke={0.5} /> {/*right eye*/}
            <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
            <Ellipse diameter={2.5} quarters={2} translate={{ y: 3, z: 7 }} rotate={{ z: TAU / 4 }} closed={true} color="#FED" fill />
            <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
            </a.Shape>
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
            <a.Ellipse height={7} width={4} ref={ref} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 11, y: 8 }} rotate={{ z: TAU / 6 }} color={color_tint} fill /> {/*left arm*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -11, y: 8 }} rotate={{ z: TAU / -6 }} color={color_tint} fill /> {/*right arm*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 6, y: 23 }} rotate={{ z: TAU / 1 }} color={color_tint} fill /> {/*left leg*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -6, y: 23 }} rotate={{ z: TAU / 1 }} color={color_tint} fill /> {/*right leg*/}
            <a.Shape stroke={0} ref={ref}>
                <a.Shape path={[{ x: -20, y: 0.5, z: 12 }, { x: -17, y: -5, z: 12 }, { x: -14, y: 0.5, z: 12 }]} color="#2d6636" closed={false} />
                <a.Ellipse height={1} width={1} stroke={4} color='#c21540' translate={{ x: -20, y: 1.5, z: 14 }} fill />
                <a.Ellipse height={1} width={1} stroke={4} color='#c21540' translate={{ x: -14, y: 1.5, z: 14 }} fill />
            </a.Shape>
            <a.Shape stroke={0} ref={ref}>
                <a.Shape path={[{ x: -20 + two, y: 0.5 + two, z: 12 }, { x: -17 + two, y: -5 + two, z: 12 }, { x: -14 + two, y: 0.5 + two, z: 12 }]} color="#2d6636" closed={false} />
                <a.Ellipse height={1} width={1} stroke={4} color='#c21540' translate={{ x: -20 + two, y: 1.5 + two, z: 14 }} fill />
                <a.Ellipse height={1} width={1} stroke={4} color='#c21540' translate={{ x: -14 + two, y: 1.5 + two, z: 14 }} fill />
            </a.Shape>
            <a.Shape stroke={0} ref={ref}>
                <a.Ellipse height={5} width={1} stroke={4} rotate={{ z: TAU / 4 }} translate={{ x: 15, y: -5, z: 12 }} color="#6d7f87" fill>
                    <a.Shape height={1} width={1} color="black" translate={{ y: 2.5, z: 1.5 }} />
                </a.Ellipse>
            </a.Shape>
        </a.Shape>
    );

}

function PlayBear() {
    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    // const { rotation, color, color_tint, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#7a5843' : '#7a5843', color_tint: up ? '#7b6044' : '#7b6044', rotation: up ? 0 : Math.PI });
    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const rotation = 0;
    // const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));

    const Headband = () => (
        <a.Shape stroke={0}>
            <Ellipse diameter={10} quarters={2} color="#9c162c" stroke={2} rotate={{ x: TAU / 4, y: TAU / 1, z: TAU / 3.5 }} translate={{ x: 0, y: -4, z: 1 }} />
            <Ellipse diameter={11} quarters={2} color="white" stroke={0.2} rotate={{ x: TAU / 4, y: TAU / 1, z: TAU / 3.5 }} translate={{ x: 0, y: -4, z: 1 }} />
        </a.Shape>
    );

    return (
        <a.Shape ref={ref} stroke={15} translate={{ y: -9.5 }} color={color}> {/*head*/}
            <a.Shape>
                <a.Shape ref={ref} stroke={1.5} translate={{ x: 15, y: 0, z: 5 }} color="#87c9e8" fill />
                <a.Shape ref={ref} stroke={1.5} translate={{ x: 0, y: 1, z: 5 }} color="#87c9e8" fill />
            </a.Shape>

            <Shape path={[{ x: 0 }, { x: 1 }]} stroke={0.5} translate={{ x: -2, y: -1, z: 5 }} rotate={{ z: TAU / 1.8 }} color="#241d19" />
            <Shape path={[{ x: 0 }, { x: 1 }]} stroke={0.5} translate={{ x: -2, y: -1, z: 5 }} rotate={{ z: TAU / 2.5 }} color="#241d19" />

            <Shape path={[{ x: 0 }, { x: 1 }]} stroke={0.5} translate={{ x: 3, y: -1, z: 5 }} rotate={{ z: TAU / 1.1 }} color="#241d19" />
            <Shape path={[{ x: 0 }, { x: 1 }]} stroke={0.5} translate={{ x: 3, y: -1, z: 5 }} rotate={{ z: TAU / 8.5 }} color="#241d19" />

            <a.Shape ref={ref} stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}

            <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
            <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
            </a.Shape>
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
            <a.Ellipse height={7} width={4} ref={ref} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 11, y: up ? 10 : 10 - 3 }} rotate={{ z: TAU / (up ? 3 : leftArm) }} color={color_tint} fill /> {/*left arm*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -11, y: up ? 10 : 10 - 3 }} rotate={{ z: TAU / (up ? -3 : rightArm) }} color={color_tint} fill /> {/*right arm*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 6, y: up ? 23 : 23 - 2 }} rotate={{ z: TAU / (up ? 1 : leftLeg) }} color={color_tint} fill /> {/*left leg*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -6, y: up ? 23 : 23 - 2 }} rotate={{ z: TAU / (up ? 1 : rightLeg) }} color={color_tint} fill /> {/*right leg*/}
            <Headband />
        </a.Shape>
    );
}

function BreatheBear() {
    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    const tummy = up ? 1 : 1.1;

    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));

    return (
        <a.Shape ref={ref} stroke={15} translate={{ y: -9.5 }} color={color}> {/*head*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
            <a.Shape ref={ref} stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
            <a.Ellipse stroke={0.3} diameter={3} quarters={1} translate={{ x: -2.2, y: -3, z: 5 }} rotate={{ z: TAU / 3 }} color="#241d19" /> {/*left eye*/}
            <a.Ellipse stroke={0.3} diameter={3} quarters={1} translate={{ x: 2.2, y: -3, z: 5 }} rotate={{ z: TAU / 3 }} color="#241d19" /> {/*right eye*/}
            <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
            <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
            </a.Shape>
            <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
            <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
            <a.Ellipse height={7} width={4} ref={ref} stroke={14} scale={up ? 1 : tummy} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 4, y: 10, z: 6 }} rotate={{ z: TAU / -8 }} color={color_tint} fill /> {/*left arm*/}
            <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -4, y: 10, z: 6 }} rotate={{ z: TAU / 8 }} color={color_tint} fill /> {/*right arm*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 4, y: 23 }} rotate={{ z: TAU / 5 }} color={color_tint} fill /> {/*left leg*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -4, y: 23 }} rotate={{ z: TAU / -5 }} color={color_tint} fill /> {/*right leg*/}
        </a.Shape>
    );
}

function BatheBear() {
    const TAU = Math.PI * 2

    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    // const { rotation, color, color_tint, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#7a5843' : '#7a5843', color_tint: up ? '#7b6044' : '#7b6044', rotation: up ? 0 : Math.PI });
    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const rotation = 0;
    // const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = 2 * Math.cos((t += 0.1) / TAU)));

    return (
        <a.Shape stroke={0} translate={{ y: 4 }}>
            <a.Shape stroke={15} translate={{ y: -9.5 }} color={color}> {/*head*/}
                <a.Shape stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
                <a.Shape stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
                {/*<Eye /> left eye*/}
                <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: -2.2, y: -1, z: 5 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*left eye*/}
                {/*<Eye translate={{ x: 2.2, z: 6.8 }} /> right eye*/}
                <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: 2.2, y: -1, z: 5 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*right eye*/}
                <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
                <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                    <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
                </a.Shape>
                <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
                <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
                <a.Ellipse height={7} width={4} ref={ref} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
                <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 11, y: (up ? 10 : 8) }} rotate={{ z: TAU / (up ? 3 : leftArm) }} color={color_tint} fill /> {/*left arm*/}
                <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -11, y: (up ? 10 : 8) }} rotate={{ z: TAU / (up ? -3 : rightArm) }} color={color_tint} fill /> {/*right arm*/}
                <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 6, y: 22, z: 5 }} rotate={{ x: TAU / 4 }} color={color_tint} fill /> {/*left leg*/}
                <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -6, y: 22, z: 5 }} rotate={{ x: TAU / 4 }} color={color_tint} fill /> {/*right leg*/}
                {/* had to put 0.001 cuz cant divide by 0    */}
            </a.Shape>
            <a.Shape stroke={0} ref={ref} translate={{ y: 6, z: -1 }}>
                <a.Shape stroke={5} color='blue' translate={{ x: 5, y: 16, z: 2 }} />
                <a.Shape stroke={8} color='blue' translate={{ x: -25, y: -8, z: 10 }} />
                <a.Shape stroke={12} color='blue' translate={{ x: -8, y: 10, z: -15 }} />
                <a.Shape stroke={16} color='blue' translate={{ x: 21, y: -3, z: -8 }} />
                <a.Shape stroke={18} color='blue' translate={{ x: 13, y: 6, z: 8 }} />
                <a.Shape stroke={20} color='blue' translate={{ x: -19, y: -9, z: 17 }} />
                <a.Shape stroke={3} color='skyBlue' translate={{ x: -6, y: 1.5, z: 9 }} />
                <a.Shape stroke={7} color='skyBlue' translate={{ x: 10, y: -4, z: -10 }} />
                <a.Shape stroke={11} color='skyBlue' translate={{ x: 13, y: 20, z: 15 }} />
                <a.Shape stroke={15} color='skyBlue' translate={{ x: -18, y: -15, z: 5 }} />
                <a.Shape stroke={3} color='cyan' translate={{ x: -5, y: -9, z: 10 }} />
                <a.Shape stroke={5} color='cyan' translate={{ x: 12, y: 20, z: 18 }} />
                <a.Shape stroke={7} color='cyan' translate={{ x: -16, y: 13, z: -9 }} />
            </a.Shape>

        </a.Shape>
    )

}

function SleepBear() {
    const TAU = Math.PI * 2

    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = up ? 3 : 6;
    const leftLeg = up ? 1 : 3;
    const rightArm = up ? -3 : -6;
    const rightLeg = up ? 1 : -3;

    // const { rotation, color, color_tint, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#7a5843' : '#7a5843', color_tint: up ? '#7b6044' : '#7b6044', rotation: up ? 0 : Math.PI });
    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const rotation = 0;
    // const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));
    // const Eye = props => <Ellipse diameter={1.5} quarters={2} translate={{ x: -2.2, y: 0, z: 6.8 }} rotate={{ z: -TAU / 4 }} color="#241d19" stroke={0.5} />
    // const Leg = props => (
    //     <a.Shape path={[{ y: 0 }, { y: 6 }]} translate={{ x: -3 }} color="#747B9E" stroke={4} {...props}>
    //         <Shape path={[{ y: 0 }, { y: 6 }]} translate={{ y: 6 }} rotate={{ x: -TAU / 8 }} color="#747B9E" stroke={4} />
    //         <RoundedRect width={2} height={4} cornerRadius={1} translate={{ y: 12, z: -3.5 }} rotate={{ x: TAU / 6 }} color="#444B6E" fill stroke={4} />
    //     </a.Shape>
    // )
    // const Arm = props => (
    //     <a.Shape path={[{ y: 0 }, { y: 4 }]} translate={{ x: -5, y: -2 }} color="#F0F2EF" stroke={4} {...props}>
    //         <Shape path={[{ y: 0 }, { y: 4 }]} translate={{ y: 6 }} rotate={{ x: TAU / 8 }} color="#EA0" stroke={4} />
    //         <Shape translate={{ z: 4, y: 9, x: 0 }} stroke={5.4} color="#EA0" />
    //     </a.Shape>
    // )
    return (
        <a.Shape stroke={0} translate={{ y: 10 }}>
            <a.Shape stroke={15} translate={{ y: 0, x: 10 }} rotate={{ z: TAU / 4, x: TAU / 4 }} color={color}> {/*head*/}
                <a.Shape stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
                <a.Shape stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
                {/*<Eye /> left eye*/}
                <a.Ellipse stroke={0.3} diameter={3} quarters={1} translate={{ x: -2.2, y: -3, z: 5 }} rotate={{ z: TAU / 3 }} color="#241d19" /> {/*left eye*/}
                {/*<Eye translate={{ x: 2.2, z: 6.8 }} /> right eye*/}
                <a.Ellipse stroke={0.3} diameter={3} quarters={1} translate={{ x: 2.2, y: -3, z: 5 }} rotate={{ z: TAU / 3 }} color="#241d19" /> {/*right eye*/}
                <a.Shape height={3} width={2} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
                <a.Shape height={1.3} width={1} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                    <a.Ellipse height={.1} width={.05} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
                </a.Shape>
                <a.Ellipse height={7} width={4} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
                <a.Ellipse height={6} width={3} stroke={5} translate={{ x: 11, y: 10 }} rotate={{ z: TAU / 3 }} color={color_tint} fill /> {/*left arm*/}
                <a.Ellipse height={6} width={3} stroke={5} translate={{ x: -11, y: 10 }} rotate={{ z: TAU / -3 }} color={color_tint} fill /> {/*right arm*/}
                <a.Ellipse height={4} width={4} stroke={7} translate={{ x: 7, y: 23 }} color={color_tint} fill /> {/*left leg*/}
                <a.Ellipse height={4} width={4} stroke={7} translate={{ x: -7, y: 23 }} color={color_tint} fill /> {/*right leg*/}

            </a.Shape>
            <a.Shape stroke={0} ref={ref}>
                <a.Shape closed={false} stroke={1} color='#636' path={[{ x: -1, y: -2 }, // start at top left
                { x: 1, y: -2 }, // line to top right
                { x: -1, y: 2 }, // line to bottom left
                { x: 1, y: 2 }]}
                    translate={{ x: -20, y: 1.5, z: 15 }}
                    rotate={{ y: TAU / 3 }}
                />
                <a.Shape closed={false} stroke={1.6} color='#636' path={[{ x: -1, y: -3 }, // start at top left
                { x: 1, y: -3 }, // line to top right
                { x: -1, y: 3 }, // line to bottom left
                { x: 1, y: 3 }]}
                    translate={{ x: 20, y: 1.5, z: 20 }}
                />
                <a.Shape closed={false} stroke={2} color='#636' path={[{ x: -1, y: -3 }, // start at top left
                { x: 1, y: -3 }, // line to top right
                { x: -1, y: 3 }, // line to bottom left
                { x: 1, y: 3 }]}
                    translate={{ x: 0, y: -15, z: -30 }}
                    rotate={{ y: TAU }}
                />
            </a.Shape>

        </a.Shape>
    )
}

function PetBear() {
    const [up, setUp] = useState(true)

    useInterval(() => {
        setUp(!up)
    }, 450);

    const leftArm = 4
    const leftLeg = 3
    const rightArm = -4
    const rightLeg = -3

    // const { rotation, color, color_tint, size } = useSpring({ size: up ? 1.2 : 0.2, color: up ? '#7a5843' : '#7a5843', color_tint: up ? '#7b6044' : '#7b6044', rotation: up ? 0 : Math.PI });
    const size = 1.2;
    const color = "#7a5843"
    const color_tint = "#7b6044"
    const rotation = 0;
    // const { rotation, color, size } = useSpring({ size: up ? 1.2 : bbb, color: up ? '#EA0' : aaa, rotation: up ? 0 : ccc })
    const { la, ll, ra, rl } = useSpring({ la: up ? 3 : leftArm, ll: up ? 0 : leftLeg, ra: up ? -3 : rightArm, rl: up ? 0 : rightLeg });

    const ref = useRef()
    let t = 0
    useRender(() => (ref.current.rotate.y = Math.cos((t += 0.1) / TAU)));

    return (
        <a.Shape translate={{ y: -10 }}>
            <a.Shape ref={ref} stroke={15} translate={{ y: (up ? 0 : 0.5) }} color={color}> {/*head*/}
                <a.Shape ref={ref} stroke={4} translate={{ x: -7, y: -4 }} color={color_tint} fill /> {/*left ear*/}
                <a.Shape ref={ref} stroke={4} translate={{ x: 7, y: -4 }} color={color_tint} fill /> {/*right ear*/}
                {/*<Eye /> left eye*/}
                <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: -2.2, y: -1, z: 5 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*left eye*/}
                {/*<Eye translate={{ x: 2.2, z: 6.8 }} /> right eye*/}
                <a.Ellipse stroke={0.5} diameter={1.5} quarters={2} translate={{ x: 2.2, y: -1, z: 5 }} rotate={{ z: TAU - TAU / 4 }} color="#241d19" /> {/*right eye*/}
                <a.Shape height={3} width={2} ref={ref} scale={size} translate={{ y: 2.5, z: 6.8 }} rotate={{ z: TAU / 4 }} closed color="#b08b74" stroke={6} fill /> {/*mouth*/}
                <a.Shape height={1.3} width={1} ref={ref} scale={size} translate={{ y: 2, z: 9 }} rotate={{ z: TAU / 4 }} closed color="#241d19" stroke={3} fill> {/*nose*/}
                    <a.Ellipse height={.1} width={.05} ref={ref} translate={{ x: -.5, y: 0, z: 0 }} color="white" fill />
                </a.Shape>
                <Ellipse diameter={1} translate={{ x: -3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left blush*/}
                <Ellipse diameter={1} translate={{ x: 3.5, y: 1.5, z: 6.5 }} rotate={{ z: TAU / 4 }} closed color="indianred" stroke={0.5} fill /> {/*left right*/}
                <a.Ellipse height={7} width={4} ref={ref} stroke={14} translate={{ x: 0, y: 13 }} color={color} fill /> {/*body*/}
                <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: 6, y: 8, z: 5 }} rotate={{ z: TAU / (up ? -6 : -7), y: TAU / -8 }} color={color_tint} fill /> {/*left arm*/}
                <a.Ellipse height={6} width={1.5} ref={ref} stroke={5} translate={{ x: -6, y: 8, z: 5 }} rotate={{ z: TAU / (up ? 6 : 7), y: TAU / 8 }} color={color_tint} fill /> {/*right arm*/}

            </a.Shape>
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: 6, y: 21, z: 5 }} rotate={{ x: TAU / 4 }} color={color_tint} fill /> {/*left leg*/}
            <a.Ellipse height={4} width={2} ref={ref} stroke={7} translate={{ x: -6, y: 21, z: 5 }} rotate={{ x: TAU / 4 }} color={color_tint} fill /> {/*right leg*/}

        </a.Shape>
    );
}


/** --- Delegate types of bear based on boolean ---------------------------------------- */
function Bear(props) {
    const { templateStore } = props;

    let bear;
    if (templateStore.healthBool) {
        bear = PlayBear();
        return bear;
    } else if (templateStore.eatBool) {
        bear = FeedBear();
        return bear;
    } else if (templateStore.sleepBool) {
        bear = SleepBear();
        return bear;
    } else if (templateStore.cleanBool) {
        bear = BatheBear();
        return bear;
    } else if (templateStore.breatheBool) {
        bear = BreatheBear();
        return bear;
    } else if (templateStore.petBool) {
        bear = PetBear();
        return bear;
    } else {
        bear = NormalBear();
        return bear;
    }
}


export default observer(Bear);
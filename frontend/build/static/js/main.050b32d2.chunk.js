(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(1),l=a.n(c),s=a(17),i=a.n(s),r=(a(131),a(27)),o=a(30),j=a(32),d=a(31),h=a(77),b=(a(132),a(63)),u=a(18),m=function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"},children:Object(n.jsx)("h1",{children:"Landing"})})},p=a(78),x=a(20),O=(a(133),a(44)),f=a.n(O),v=a(11),g=a(26);Math.PI;var y=l.a.createContext(),S=y.Provider,k=a(104),B=a(106),E=a(105),N=a(107),C=2*Math.PI,z=function(e){return Object(n.jsx)(v.Ellipse,Object(x.a)({diameter:1.5,quarters:2,translate:{x:-2.2,y:0,z:4.5},rotate:{z:-C/4},color:"#444B6E",stroke:.5},e))},w=function(e){return Object(n.jsxs)(g.a.Shape,Object(x.a)(Object(x.a)({path:[{y:0},{y:6}],translate:{x:-3},color:"#747B9E",stroke:4},e),{},{children:[Object(n.jsx)(v.Shape,{path:[{y:0},{y:6}],translate:{y:6},rotate:{x:-C/8},color:"#747B9E",stroke:4}),Object(n.jsx)(v.RoundedRect,{width:2,height:4,cornerRadius:1,translate:{y:12,z:-3.5},rotate:{x:C/6},color:"#444B6E",fill:!0,stroke:4})]}))},P=function(e){return Object(n.jsxs)(g.a.Shape,Object(x.a)(Object(x.a)({path:[{y:0},{y:4}],translate:{x:-5,y:-2},color:"#F0F2EF",stroke:4},e),{},{children:[Object(n.jsx)(v.Shape,{path:[{y:0},{y:4}],translate:{y:6},rotate:{x:C/8},color:"#EA0",stroke:4}),Object(n.jsx)(v.Shape,{translate:{z:4,y:9,x:0},stroke:5.4,color:"#EA0"})]}))};function A(e){var t=e.templateStore,a=Object(c.useState)(!0),l=Object(p.a)(a,2),s=l[0],i=l[1];!function(e,t){var a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){i(!s)}),450);var r=t.eatBool?"tomato":"#EA0",o=t.eatBool?.2:1.2,j=t.eatBool?Math.PI:0,d=Object(g.b)({size:s?1.2:o,color:s?"#EA0":r,rotation:s?0:j}),h=d.rotation,b=d.color,u=d.size,m=Object(c.useRef)(),x=0;return Object(v.useRender)((function(){return m.current.rotate.y=Math.cos((x+=.1)/C)})),Object(n.jsxs)(v.Shape,{ref:m,path:[{x:-3},{x:3}],stroke:4,color:"#747B9E",children:[Object(n.jsx)(g.a.Anchor,{rotate:h.interpolate((function(e){return{x:C/18+-e/4}})),children:Object(n.jsxs)(v.Shape,{path:[{x:-1.5},{x:1.5}],translate:{y:-6},stroke:9,color:"#E1E5EE",children:[Object(n.jsxs)(g.a.Shape,{stroke:11,translate:{y:-9.5},color:b,children:[Object(n.jsx)(v.Shape,{translate:{x:0,y:-2,z:-4},stroke:8,color:"#747B9E"}),Object(n.jsx)(v.Ellipse,{diameter:6,rotate:{x:-C/10},translate:{y:-4,z:-1},stroke:4,color:"#444B6E",fill:!0}),Object(n.jsx)(z,{}),Object(n.jsx)(z,{translate:{x:2.2,z:4.5}}),Object(n.jsx)(g.a.Ellipse,{diameter:1.3,scale:u,translate:{y:2,z:4.5},rotate:{z:C/4},closed:!0,color:"#444B6E",stroke:.5,fill:!0}),Object(n.jsx)(v.Ellipse,{diameter:1,translate:{x:-3.5,y:1.5,z:4.5},rotate:{z:C/4},closed:!0,color:"indianred",stroke:.5,fill:!0}),Object(n.jsx)(v.Ellipse,{diameter:1,translate:{x:3.5,y:1.5,z:4.5},rotate:{z:C/4},closed:!0,color:"indianred",stroke:.5,fill:!0}),Object(n.jsx)(v.Ellipse,{diameter:.5,translate:{x:4.5,y:-4.5,z:4.5},rotate:{z:C/4},closed:!0,color:"lightblue",stroke:.5,fill:!0})]}),Object(n.jsx)(P,{rotate:h.interpolate((function(e){return{x:-C/4+e}}))}),Object(n.jsx)(P,{translate:{x:5,y:-2},rotate:h.interpolate((function(e){return{x:C/4-e}}))})]})}),Object(n.jsx)(w,{rotate:h.interpolate((function(e){return{x:C/5-e/1.2}}))}),Object(n.jsx)(w,{translate:{x:3},rotate:h.interpolate((function(e){return{x:-C/5+e/1.2}}))})]})}var I=Object(h.a)((function(){var e=l.a.useContext(y).templateStore,t=Object(c.useRef)();return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("div",{className:"leftSide",children:[Object(n.jsxs)("div",{className:"level",children:[Object(n.jsx)("p",{className:"label",children:" Level "}),Object(n.jsx)("div",{className:"level-left-ear"}),Object(n.jsx)("div",{className:"level-right-ear"}),Object(n.jsx)("div",{className:"level-circle",children:e.level}),Object(n.jsx)("div",{className:"bar-level",children:Object(n.jsx)(f.a,{completed:e.levelProgress,labelSize:0,width:"91%",bgcolor:"#145E0A",baseBgColor:"#D9B680"})})]}),Object(n.jsxs)("div",{className:"vitals",children:[Object(n.jsx)("p",{className:"label",children:"Fullness"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.full,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})}),Object(n.jsx)("p",{className:"label",children:"Cleanliness"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.clean,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})}),Object(n.jsx)("p",{className:"label",children:"Energy"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.energy,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})}),Object(n.jsx)("p",{className:"label",children:"Happiness"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.happy,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})}),Object(n.jsx)("p",{className:"label",children:"Calmness"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.calm,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})}),Object(n.jsx)("p",{className:"label",children:"Health"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)(f.a,{completed:e.health,labelSize:0,width:"92%",bgcolor:"#145E0A",baseBgColor:"#D9B680",height:"15px"})})]}),Object(n.jsxs)("div",{className:"userToolbar",children:[Object(n.jsx)("div",{className:"icon",onClick:function(){return Object(k.exportComponentAsPNG)(t)},children:Object(n.jsx)(E.a,{size:50})}),Object(n.jsx)("div",{className:"icon",onClick:function(){return console.log("hi")},children:Object(n.jsx)(B.a,{size:50})}),Object(n.jsx)("div",{className:"icon",onClick:function(){return console.log("hi")},children:Object(n.jsx)(N.a,{size:50})})]})]}),Object(n.jsxs)("div",{className:"zdog",ref:t,children:[Object(n.jsxs)(v.Illustration,{zoom:8,children:[Object(n.jsx)(v.Ellipse,{diameter:20,rotate:{x:-C/3},translate:{y:15,z:-100},stroke:4,color:"#373740",fill:!0}),Object(n.jsx)(A,{templateStore:e})]}),Object(n.jsx)("div",{className:"name",children:"Name"})]}),Object(n.jsxs)("div",{className:"rightSide",children:[Object(n.jsx)("div",{className:"date",children:"Date"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handleEat(!e.eatBool)},children:"Feed"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handleClean(!e.cleanBool)},children:"Bathe"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handlePlay(!e.healthBool)},children:"Play"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handleSleep(!e.sleepBool)},children:"Sleep"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handleBreathe(!e.breatheBool)},children:"Breathe"}),Object(n.jsx)("div",{className:"control",onClick:function(){return e.handlePet(!e.petBool)},children:"Pet"})]})]})})),D=function(){return Object(n.jsxs)("div",{className:"Background",children:[Object(n.jsx)("div",{className:"header",children:" bear buddies"}),Object(n.jsx)("div",{className:"InnerApp",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/else",component:m}),Object(n.jsx)(u.b,{path:"/main",component:I}),Object(n.jsx)(u.b,{path:"/",component:m})]})})]})},F=a(24),L=a(217),U=a(214),W=a(208),R=a(211),T=a(210),M=a(209),q=a(213),J=a(76),V=a.n(J),H=a(181),G=a(8),Y=a(205),K=a(86);a(150),a(179);K.a.initializeApp({apiKey:"AIzaSyCg7Y_5xEvrd8Xn2xFbJiffFMuzOVgtv0U",authDomain:"nwhacks-2021.firebaseapp.com",projectId:"nwhacks-2021",storageBucket:"nwhacks-2021.appspot.com",messagingSenderId:"455525571397",appId:"1:455525571397:web:b49755cc3476fb5e99bc2c",measurementId:"G-BJVNYS53F7"});var X=K.a.auth(),_=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={email:"",pass:""},n.handleEmail=n.handleEmail.bind(Object(F.a)(n)),n.handlePass=n.handlePass.bind(Object(F.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(F.a)(n)),n}return Object(o.a)(a,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePass",value:function(e){this.setState({pass:e.target.value})}},{key:"handleSubmit",value:function(e){X.signInWithEmailAndPassword(this.state.email,this.state.pass).then((function(e){})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(W.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(L.a,{className:e.avatar,children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(H.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,onSubmit:this.handleSubmit,noValidate:!0,children:[Object(n.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleEmail}),Object(n.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handlePass}),Object(n.jsx)(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(n.jsx)(M.a,{container:!0,children:Object(n.jsx)(M.a,{item:!0,children:Object(n.jsx)(T.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(n.jsx)(q.a,{mt:8})]})}}]),a}(l.a.Component),Q=Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(_),Z=a(108),$=a.n(Z),ee=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={email:"",pass:""},n.handleEmail=n.handleEmail.bind(Object(F.a)(n)),n.handlePass=n.handlePass.bind(Object(F.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(F.a)(n)),n}return Object(o.a)(a,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePass",value:function(e){this.setState({pass:e.target.value})}},{key:"handleSubmit",value:function(e){console.log(this.state.email),console.log(this.state.pass),X.createUserWithEmailAndPassword(this.state.email,this.state.pass).then((function(e){$()({method:"post",url:"/api/",data:{requesterID:e.uuid,level:1,experience:0,animalName:"Odie",hunger:0,happiness:100,cleanliness:100}})})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)(Y.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(W.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(L.a,{className:e.avatar,children:Object(n.jsx)(V.a,{})}),Object(n.jsx)(H.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(n.jsxs)("form",{className:e.form,onSubmit:this.handleSubmit,noValidate:!0,children:[Object(n.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleEmail}),Object(n.jsx)(R.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handlePass}),Object(n.jsx)(U.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(n.jsx)(M.a,{container:!0,children:Object(n.jsx)(M.a,{item:!0,children:Object(n.jsx)(T.a,{href:"#",variant:"body2",children:"Have an account? Sign In"})})})]})]}),Object(n.jsx)(q.a,{mt:8})]})}}]),a}(l.a.Component),te=Object(G.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.secondary},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(ee),ae=a(67),ne=ae.a.model("Template",{eatBool:!1,cleanBool:!1,healthBool:!1,sleepBool:!1,breatheBool:!1,petBool:!1,full:80,clean:80,energy:80,happy:80,calm:80,health:80,level:1,levelProgress:50}).actions((function(e){return{checkLevelUp:function(){e.full>=100&&e.clean>=100&&e.health>=100&&e.energy>=100&&e.calm>=100&&e.happy>=100&&(e.levelProgress+=10,e.levelProgress>=100&&(e.level+=1))}}})).actions((function(e){return{handleEat:function(t){e.eatBool=t,t&&(e.full+=10,e.checkLevelUp())},handleClean:function(t){e.cleanBool=t,t&&(e.clean+=10,e.checkLevelUp())},handlePlay:function(t){e.playBool=t,t&&(e.health+=10,e.checkLevelUp())},handleSleep:function(t){e.sleepBool=t,t&&(e.energy+=10,e.checkLevelUp())},handleBreathe:function(t){e.calmBool=t,t&&(e.calm+=10,e.checkLevelUp())},handlePet:function(t){e.happyBool=t,t&&(e.happy+=10,e.checkLevelUp())}}})).views((function(e){return{}})),ce=ae.a.model("RootStore").props({templateStore:ae.a.optional(ne,{})}),le=a(79),se=function(e){var t=e.component,a=e.authenticated,c=Object(le.a)(e,["component","authenticated"]);return Object(n.jsx)(u.b,Object(x.a)(Object(x.a)({},c),{},{render:function(e){return!0===a?Object(n.jsx)(t,Object(x.a)({},e)):Object(n.jsx)(u.a,{to:"/signin"})}}))},ie=function(e){var t=e.component,a=e.authenticated,c=Object(le.a)(e,["component","authenticated"]);return Object(n.jsx)(u.b,Object(x.a)(Object(x.a)({},c),{},{render:function(e){return!1===a?Object(n.jsx)(t,Object(x.a)({},e)):Object(n.jsx)(u.a,{to:"/"})}}))},re=ce.create(),oe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={authenticated:!1,loading:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;X.onAuthStateChanged((function(t){console.log(t),t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?Object(n.jsx)("h2",{children:"Loading..."}):Object(n.jsx)("div",{children:Object(n.jsx)(S,{value:re,children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(ie,{path:"/signin",component:Q,authenticated:this.state.authenticated,exact:!0}),Object(n.jsx)(ie,{path:"/signup",component:te,authenticated:this.state.authenticated,exact:!0}),Object(n.jsx)(se,{path:"/",component:D,authenticated:this.state.authenticated,user:this.state.user})]})})})})}}]),a}(c.Component),je=Object(h.a)(oe),de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,218)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),l(e),s(e)}))};a(176);i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(je,{})}),document.getElementById("root")),de()}},[[177,1,2]]]);
//# sourceMappingURL=main.050b32d2.chunk.js.map
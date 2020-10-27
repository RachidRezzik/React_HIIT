(this.webpackJsonphiit_react=this.webpackJsonphiit_react||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),s=n.n(a),i=n(1),l=n(2),u=n(4),c=n(3);n(15);var p={textAlign:"center",background:"black",color:"white",borderRadius:"5px 5px 0px 0px",padding:"5px"},m=function(){return r.a.createElement("div",{style:p},r.a.createElement("h1",null,"HIIT Workout Timer"),r.a.createElement("p",{style:{width:"90%",margin:"0px auto"}},"Save Your Rounds/Work/Rest Preferences to Start Your Workout"))},d=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{background:e.props.isRest?"red":"rgb(7, 197, 7)",textAlign:"center",padding:"10px",borderRadius:"0px 0px 5px 5px"}},e.previousPeriod=function(){0!==e.props.periods&&e.props.workRest("previous")},e.nextPeriod=function(){e.props.roundsCompleted!==e.props.workout[0].rounds&&e.props.workRest("next")},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.workoutFinished?r.a.createElement("div",{style:{background:"blue",padding:"20px",color:"white",borderRadius:"0px 0px 5px 5px"}},r.a.createElement("h1",null,"Your Workout is Finished! Great Job!")):r.a.createElement("div",{style:this.getStyle()},r.a.createElement("div",{className:"time"},r.a.createElement("span",{style:{marginRight:"7.5px",transform:"rotate(180deg)",fontSize:"17.5px",cursor:"pointer"},onClick:this.previousPeriod},"\u27a4"),r.a.createElement("h2",null," ",this.props.minutes),r.a.createElement("span",null,":"),r.a.createElement("h2",null," ",this.props.seconds),r.a.createElement("span",{style:{marginLeft:"7.5px",fontSize:"17.5px",cursor:"pointer"},onClick:this.nextPeriod},"\u27a4")),r.a.createElement("button",{onClick:this.props.handleTimer},this.props.isRunning?"Stop":"Start"),r.a.createElement("button",{style:{marginLeft:"2.5px"},onClick:this.props.resetTime},"Reset Duration"),r.a.createElement("h3",null,"Rounds Completed: ",r.a.createElement("span",null,this.props.roundsCompleted,"/",this.props.workout[0].rounds)))}}]),n}(o.Component),k=n(8),h=n.n(k),w=n(9),E=n.n(w),S=n(5),v=new S.Howl({src:[h.a]}),f=new S.Howl({src:[E.a]});S.Howler.volume(.05);var g=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={workout:[{rounds:0,workMin:"00",workSec:"00",restMin:"00",restSec:"00"}],isRunning:!1,workoutFinished:!1,elapsedTime:0,previousTime:0,isRest:!1,minutes:"00",seconds:"00",periods:0,roundsCompleted:0,workoutSaved:!1},e.workRestHandler=function(t){console.log(e.state.periods,e.state.roundsCompleted),!0!==e.state.isRest||e.state.periods!==2*e.state.workout[0].rounds-1||"previous"===t&&0!==e.state.periods?!0===e.state.workoutSaved&&("next"===t?e.setState({periods:e.state.periods+1}):"previous"===t&&e.setState({periods:e.state.periods-1}),console.log(e.state.periods),e.setState((function(e){return{isRest:!e.isRest,elapsedTime:0,roundsCompleted:Math.floor(e.periods/2)}})),e.state.isRunning&&v.play()):!0===e.state.isRest&&e.state.periods===2*e.state.workout[0].rounds-1&&(console.log("champion"),e.setState((function(e){return{isRunning:!1,previousTime:0,elapsedTime:0,minutes:"00",seconds:"00",roundsCompleted:Math.floor((e.periods+1)/2),workoutFinished:!0}})),f.play())},e.tick=function(){var t="";if(e.state.isRunning){var n=Date.now();e.setState((function(e){return{previousTime:n,elapsedTime:e.elapsedTime+(n-e.previousTime)}}))}var o=Math.floor(e.state.elapsedTime/1e3);t=!1===e.state.isRest?60*Number(e.state.workout[0].workMin)+Number(e.state.workout[0].workSec):60*Number(e.state.workout[0].restMin)+Number(e.state.workout[0].restSec),t-=o;var r=Math.floor(t/60),a=t-60*(r="0".concat(r));1===a.toString().length&&(a="0".concat(a)),e.setState({seconds:a,minutes:r}),!1===e.state.isRunning&&e.state.roundsCompleted===e.state.workout[0].rounds&&e.setState({seconds:"00",minutes:"00"}),"00"===e.state.workout[0].workMin&&"00"===e.state.workout[0].workSec||"00"===e.state.workout[0].restMin&&"00"===e.state.workout[0].restSec||!0!==e.state.isRunning||0===t&&e.workRestHandler("next")},e.handleTimer=function(){"00"===e.state.workout[0].workMin&&"00"===e.state.workout[0].workSec||"00"===e.state.workout[0].restMin&&"00"===e.state.workout[0].restSec||(e.setState((function(e){return{isRunning:!e.isRunning}})),e.state.isRunning||e.setState({previousTime:Date.now()}),0===e.state.elapsedTime&&v.play())},e.handleResetTime=function(){"00"===e.state.workout[0].workMin&&"00"===e.state.workout[0].workSec||"00"===e.state.workout[0].restMin&&"00"===e.state.workout[0].restSec||(e.state.isRunning?(e.setState({elapsedTime:0}),v.play()):e.setState({elapsedTime:0,previousTime:0}))},e.roundSelect=r.a.createRef(),e.workMinSelect=r.a.createRef(),e.workSecSelect=r.a.createRef(),e.restMinSelect=r.a.createRef(),e.restSecSelect=r.a.createRef(),e.saveWorkoutInfo=function(){if(f.stop(),("00"!==e.workMinSelect.current.value||"00"!==e.workSecSelect.current.value)&&("00"!==e.restMinSelect.current.value||"00"!==e.restSecSelect.current.value)&&"00"!==e.roundSelect.current.value){var t=e.roundSelect.current.value;"0"===t[0]&&(t=t[1]),e.setState({workoutFinished:!1,workoutSaved:!0,isRunning:!1,elapsedTime:0,previousTime:0,isRest:!1,minutes:"00",seconds:"00",periods:0,roundsCompleted:0,workout:e.state.workout.map((function(n){return n.rounds=t,n.workMin=e.workMinSelect.current.value,n.workSec=e.workSecSelect.current.value,n.restMin=e.restMinSelect.current.value,n.restSec=e.restSecSelect.current.value,n}))})}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),100)}},{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",background:"lightgrey",paddingBottom:"0px",borderRadius:"0px 0px 5px 5px"}},r.a.createElement("h3",null,"Total Rounds (Work+Rest)"),r.a.createElement("select",{ref:this.roundSelect},r.a.createElement("option",null,"00"),r.a.createElement("option",null,"01"),r.a.createElement("option",null,"02"),r.a.createElement("option",null,"03"),r.a.createElement("option",null,"04"),r.a.createElement("option",null,"05"),r.a.createElement("option",null,"06"),r.a.createElement("option",null,"07"),r.a.createElement("option",null,"08"),r.a.createElement("option",null,"09"),r.a.createElement("option",null,"10"),r.a.createElement("option",null,"11"),r.a.createElement("option",null,"12"),r.a.createElement("option",null,"13"),r.a.createElement("option",null,"14"),r.a.createElement("option",null,"15")),r.a.createElement("h3",null,"Work Duration (MM:SS)"),r.a.createElement("div",null,r.a.createElement("select",{ref:this.workMinSelect},r.a.createElement("option",null,"00"),r.a.createElement("option",null,"01"),r.a.createElement("option",null,"02"),r.a.createElement("option",null,"03"),r.a.createElement("option",null,"04"),r.a.createElement("option",null,"05")),r.a.createElement("span",{style:{padding:"0px 5px"}},":"),r.a.createElement("select",{ref:this.workSecSelect},r.a.createElement("option",null,"00"),r.a.createElement("option",null,"15"),r.a.createElement("option",null,"30"),r.a.createElement("option",null,"45"))),r.a.createElement("h3",null,"Rest Duration (MM:SS)"),r.a.createElement("div",{style:{paddingBottom:"10px"}},r.a.createElement("select",{ref:this.restMinSelect},r.a.createElement("option",null,"00"),r.a.createElement("option",null,"01"),r.a.createElement("option",null,"02"),r.a.createElement("option",null,"03"),r.a.createElement("option",null,"04"),r.a.createElement("option",null,"05")),r.a.createElement("span",{style:{padding:"0px 5px"}},":"),r.a.createElement("select",{ref:this.restSecSelect},r.a.createElement("option",null,"00"),r.a.createElement("option",null,"15"),r.a.createElement("option",null,"30"),r.a.createElement("option",null,"45")),r.a.createElement("button",{style:{display:"block",margin:"0px auto",marginTop:"20px"},onClick:this.saveWorkoutInfo},"Save/Update")),r.a.createElement(d,{workout:this.state.workout,isRunning:this.state.isRunning,isRest:this.state.isRest,elapsedTime:this.state.elapsedTime,previousTime:this.state.previousTime,handleTimer:this.handleTimer,resetTime:this.handleResetTime,workRest:this.workRestHandler,minutes:this.state.minutes,seconds:this.state.seconds,periods:this.state.periods,roundsCompleted:this.state.roundsCompleted,workoutFinished:this.state.workoutFinished,workoutSaved:this.state.workoutSaved}))}}]),n}(o.Component),R=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(g,null))}}]),n}(o.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n.p+"static/media/boxingBell.fbed6af8.mp3"},9:function(e,t,n){e.exports=n.p+"static/media/champions.3e4af462.mp3"}},[[10,1,2]]]);
//# sourceMappingURL=main.dc11fe67.chunk.js.map
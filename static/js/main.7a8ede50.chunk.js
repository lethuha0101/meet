(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,n){},125:function(e,n){},127:function(e,n){},138:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(67),i=t.n(o),c=(t(78),t(1)),u=t(72),l=t(3),s=t(7),d=t(2),f=t(68),m=t.n(f)()("http://103.101.161.72:3001",{autoConnect:!0,forceNew:!0});function p(){var e=Object(c.a)(["\n  padding: 5px;\n  margin-top: 35px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  color: #ffffff;\n  background-color: #03a9f4;\n  font-size: 25px;\n  font-weight: 500;\n\n  :hover {\n    background-color: #7bb1d1;\n    cursor: pointer;\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(c.a)(["\n  margin-top: 10px;\n  font-size: 20px;\n  color: #e85a71;\n"]);return v=function(){return e},e}function g(){var e=Object(c.a)(["\n  width: 150px;\n  height: 35px;\n  margin-left: 15px;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n"]);return g=function(){return e},e}function b(){var e=Object(c.a)([""]);return b=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 15px;\n  line-height: 35px;\n"]);return h=function(){return e},e}function x(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return x=function(){return e},e}var j=d.a.div(x()),E=d.a.div(h()),O=d.a.label(b()),k=d.a.input(g()),w=d.a.div(v()),y=d.a.button(p()),N=function(e){var n=Object(r.useRef)(),t=Object(r.useRef)(),o=Object(r.useState)(!1),i=Object(s.a)(o,2),c=i[0],u=i[1],l=Object(r.useState)(""),d=Object(s.a)(l,2),f=d[0],p=d[1];return Object(r.useEffect)((function(){m.on("FE-error-user-exist",(function(r){var a=r.error;if(a)u(a),p("User name already exist");else{var o=n.current.value,i=t.current.value;sessionStorage.setItem("user",i),e.history.push("./room/".concat(o))}}))}),[e.history]),a.a.createElement(j,null,a.a.createElement(E,null,a.a.createElement(O,{htmlFor:"roomName"},"M\xe3 ph\xf2ng"),a.a.createElement(k,{type:"text",id:"roomName",ref:n})),a.a.createElement(E,null,a.a.createElement(O,{htmlFor:"userName"},"T\xean c\u1ee7a b\u1ea1n"),a.a.createElement(k,{type:"text",id:"userName",ref:t})),a.a.createElement(y,{onClick:function(){var e=n.current.value,r=t.current.value;e&&r?m.emit("BE-check-user",{roomId:e,userName:r}):(u(!0),p("Enter Room Name or User Name"))}}," Tham gia "),c?a.a.createElement(w,null,f):null)},I=t(23),S=t(17),C=t(10),z=t(38),D=t.n(z);function T(){var e=Object(c.a)([""]);return T=function(){return e},e}var F=d.a.video(T()),R=function(e){var n=Object(r.useRef)(),t=e.peer;return Object(r.useEffect)((function(){t.on("stream",(function(e){n.current.srcObject=e})),t.on("track",(function(e,n){}))}),[t]),a.a.createElement(F,{playsInline:!0,autoPlay:!0,ref:n})};function B(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: -65.95px;\n  left: 80px;\n  background-color: #4ea1d3;\n  color: white;\n  padding-top: 5px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  text-align: left;\n\n  > div {\n    font-size: 0.85rem;\n    padding: 1px;\n    margin-bottom: 5px;\n\n    :not(:last-child):hover {\n      background-color: #77b7dd;\n      cursor: pointer;\n    }\n  }\n\n  > div:last-child {\n    border-top: 1px solid white;\n    cursor: context-menu !important;\n  }\n"]);return B=function(){return e},e}function U(){var e=Object(c.a)(["\n  display: flex;\n  position: absolute;\n  width: 20px;\n  top: 7px;\n  left: 80px;\n  z-index: 1;\n\n  :hover {\n    background-color: #476d84;\n    cursor: pointer;\n    border-radius: 15px;\n  }\n\n  * {\n    pointer-events: none;\n  }\n\n  > i {\n    width: 90%;\n    font-size: calc(10px + 1vmin);\n  }\n"]);return U=function(){return e},e}function A(){var e=Object(c.a)(["\n  position: relative;\n  width: 75px;\n  border: none;\n  font-size: 0.9375rem;\n  padding: 5px;\n\n  :hover {\n    background-color: #77b7dd;\n    cursor: pointer;\n    border-radius: 15px;\n  }\n\n  * {\n    pointer-events: none;\n  }\n\n  .fa-microphone-slash {\n    color: #ee2560;\n  }\n\n  .fa-video-slash {\n    color: #ee2560;\n  }\n"]);return A=function(){return e},e}function q(){var e=Object(c.a)(["\n  width: 75px;\n  height: 30px;\n  border: none;\n  font-size: 0.9375rem;\n  line-height: 30px;\n  margin-right: 15px;\n  background-color: #ee2560;\n  border-radius: 15px;\n\n  :hover {\n    background-color: #f25483;\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}function V(){var e=Object(c.a)(["\n  width: 30px;\n  font-size: calc(16px + 1vmin);\n"]);return V=function(){return e},e}function M(){var e=Object(c.a)(["\n  width: auto;\n  border: none;\n  font-size: 0.9375rem;\n  padding: 5px;\n\n  :hover {\n    background-color: #77b7dd;\n    cursor: pointer;\n    border-radius: 15px;\n  }\n\n  .sharing {\n    color: #ee2560;\n  }\n"]);return M=function(){return e},e}function P(){var e=Object(c.a)(["\n  width: 75px;\n  border: none;\n  font-size: 0.9375rem;\n  padding: 5px;\n\n  :hover {\n    background-color: #77b7dd;\n    cursor: pointer;\n    border-radius: 15px;\n  }\n\n  * {\n    pointer-events: none;\n  }\n"]);return P=function(){return e},e}function J(){var e=Object(c.a)([""]);return J=function(){return e},e}function W(){var e=Object(c.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n"]);return W=function(){return e},e}function G(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n\n  margin-left: 15px;\n"]);return G=function(){return e},e}function K(){var e=Object(c.a)(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  background-color: #03a9f4;\n"]);return K=function(){return e},e}var L=d.a.div(K()),$=d.a.div(G()),H=d.a.div(W()),Q=d.a.div(J()),X=d.a.div(P()),Y=d.a.div(M()),Z=d.a.i(V()),_=d.a.div(q()),ee=d.a.div(A()),ne=d.a.div(U()),te=d.a.div(B()),re=function(e){var n=e.clickChat,t=e.clickCameraDevice,o=e.goToBack,i=e.toggleCameraAudio,c=e.userVideoAudio,u=e.clickScreenSharing,l=e.screenShare,s=e.videoDevices,d=e.showVideoDevices,f=e.setShowVideoDevices,m=Object(r.useCallback)((function(e){f((function(e){return!e}))}),[f]);return a.a.createElement(L,null,a.a.createElement($,null,a.a.createElement(ee,{onClick:i,"data-switch":"video"},a.a.createElement("div",null,c.video?a.a.createElement(Z,{className:"fas fa-video"}):a.a.createElement(Z,{className:"fas fa-video-slash"})),"Camera"),d&&a.a.createElement(te,null,s.length>0&&s.map((function(e){return a.a.createElement("div",{key:e.deviceId,onClick:t,"data-value":e.deviceId},e.label)})),a.a.createElement("div",null,"Switch Camera")),a.a.createElement(ne,{onClick:m},a.a.createElement("i",{className:"fas fa-angle-up"})),a.a.createElement(ee,{onClick:i,"data-switch":"audio"},a.a.createElement("div",null,c.audio?a.a.createElement(Z,{className:"fas fa-microphone"}):a.a.createElement(Z,{className:"fas fa-microphone-slash"})),"Audio")),a.a.createElement(H,null,a.a.createElement(X,{onClick:n},a.a.createElement("div",null,a.a.createElement(Z,{className:"fas fa-comments"})),"Chat"),a.a.createElement(Y,{onClick:u},a.a.createElement("div",null,a.a.createElement(Z,{className:"fas fa-desktop ".concat(l?"sharing":"")})),"Share Screen")),a.a.createElement(Q,null,a.a.createElement(_,{onClick:o},"Stop")))};function ae(){var e=Object(c.a)(["\n  bottom: 0;\n  width: 100%;\n  height: 8%;\n  padding: 15px;\n  border-top: 1px solid rgb(69, 69, 82, 0.25);\n  box-sizing: border-box;\n  opacity: 0.7;\n\n  :focus {\n    outline: none;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n  font-size: 16px;\n  margin-top: 15px;\n  text-align: right;\n\n  > strong {\n    margin-right: 35px;\n  }\n\n  > p {\n    max-width: 65%;\n    width: auto;\n    padding: 9px;\n    margin-top: 3px;\n    margin-right: 30px;\n    border: 1px solid rgb(78, 161, 211, 0.3);\n    border-radius: 15px;\n    background-color: #4ea1d3;\n    color: white;\n    font-size: 14px;\n    text-align: left;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  margin-top: 15px;\n  margin-left: 15px;\n  text-align: left;\n\n  > strong {\n    margin-left: 3px;\n  }\n\n  > p {\n    max-width: 65%;\n    width: auto;\n    padding: 9px;\n    margin-top: 3px;\n    border: 1px solid rgb(78, 161, 211, 0.3);\n    border-radius: 15px;\n    box-shadow: 0px 0px 3px #4ea1d3;\n    font-size: 14px;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding: 15px;\n  color: #454552;\n"]);return ce=function(){return e},e}function ue(){var e=Object(c.a)(["\n  width: 100%;\n  height: 83%;\n  max-height: 83%;\n  overflow-x: hidden;\n  overflow-y: auto;\n"]);return ue=function(){return e},e}function le(){var e=Object(c.a)(["\n  width: 100%;\n  margin-top: 15px;\n  font-weight: 600;\n  font-size: 20px;\n  color: black;\n"]);return le=function(){return e},e}function se(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  hieght: 100%;\n  background-color: white;\n  transition: all 0.5s ease;\n  overflow: hidden;\n"]);return se=function(){return e},e}var de=d.a.div(se()),fe=d.a.div(le()),me=d.a.div(ue()),pe=d.a.div(ce()),ve=d.a.div(ie()),ge=d.a.div(oe()),be=d.a.input(ae()),he=function(e){var n=e.display,t=e.roomId,o=sessionStorage.getItem("user"),i=Object(r.useState)([]),c=Object(s.a)(i,2),u=c[0],l=c[1],d=Object(r.useRef)(null),f=Object(r.useRef)();Object(r.useEffect)((function(){m.on("FE-receive-message",(function(e){var n=e.msg,t=e.sender;l((function(e){return[].concat(Object(I.a)(e),[{sender:t,msg:n}])}))}))}),[]),Object(r.useEffect)((function(){p()}),[u]);var p=function(){d.current.scrollIntoView({behavior:"smooth"})};return a.a.createElement(de,{className:n?"":"width0"},a.a.createElement(fe,null,"Group Chat Room"),a.a.createElement(me,null,a.a.createElement(pe,null,u&&u.map((function(e,n){var t=e.sender,r=e.msg;return t!==o?a.a.createElement(ve,{key:n},a.a.createElement("strong",null,t),a.a.createElement("p",null,r)):a.a.createElement(ge,{key:n},a.a.createElement("strong",null,t),a.a.createElement("p",null,r))})),a.a.createElement("div",{style:{float:"left",clear:"both"},ref:d}))),a.a.createElement(be,{ref:f,onKeyUp:function(e){if("Enter"===e.key){var n=e.target.value;n&&(m.emit("BE-send-message",{roomId:t,msg:n,sender:o}),f.current.value="")}},placeholder:"Enter your message"}))};function xe(){var e=Object(c.a)(["\n  display: none;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n"]);return xe=function(){return e},e}function je(){var e=Object(c.a)(["\n  position: absolute;\n  font-size: calc(20px + 5vmin);\n  z-index: 1;\n"]);return je=function(){return e},e}function Ee(){var e=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > video {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  :hover {\n    > i {\n      display: block;\n    }\n  }\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(c.a)([""]);return Oe=function(){return e},e}function ke(){var e=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n"]);return ke=function(){return e},e}function we(){var e=Object(c.a)(["\n  max-width: 100%;\n  height: 92%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 15px;\n  box-sizing: border-box;\n  gap: 10px;\n"]);return we=function(){return e},e}function ye(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  max-height: 100vh;\n  flex-direction: row;\n"]);return ye=function(){return e},e}var Ne=d.a.div(ye()),Ie=d.a.div(we()),Se=d.a.div(ke()),Ce=d.a.video(Oe()),ze=d.a.div(Ee()),De=d.a.div(je()),Te=d.a.i(xe()),Fe=function(e){var n=sessionStorage.getItem("user"),t=Object(r.useState)([]),o=Object(s.a)(t,2),i=o[0],c=o[1],u=Object(r.useState)({localUser:{video:!0,audio:!0}}),l=Object(s.a)(u,2),d=l[0],f=l[1],p=Object(r.useState)([]),v=Object(s.a)(p,2),g=v[0],b=v[1],h=Object(r.useState)(!1),x=Object(s.a)(h,2),j=x[0],E=x[1],O=Object(r.useState)(!1),k=Object(s.a)(O,2),w=k[0],y=k[1],N=Object(r.useState)(!1),z=Object(s.a)(N,2),T=z[0],F=z[1],B=Object(r.useRef)([]),U=Object(r.useRef)(),A=Object(r.useRef)(),q=Object(r.useRef)(),V=e.match.params.roomId;function M(e){return B.current.find((function(n){return n.peerID===e}))}function P(e,n,t){return a.a.createElement(ze,{className:"width-peer".concat(i.length>8?"":i.length),onClick:W,key:n},function(e,n){if(d.hasOwnProperty(e)&&!d[e].video)return a.a.createElement(De,{key:e},e)}(e.userName),a.a.createElement(Te,{className:"fas fa-expand"}),a.a.createElement(R,{key:n,peer:e,number:t.length}))}Object(r.useEffect)((function(){return navigator.mediaDevices.enumerateDevices().then((function(e){var n=e.filter((function(e){return"videoinput"===e.kind}));b(n)})),window.addEventListener("popstate",J),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){U.current.srcObject=e,q.current=e,m.emit("BE-join-room",{roomId:V,userName:n}),m.on("FE-user-join",(function(t){var r=[];t.forEach((function(t){var a=t.userId,o=t.info,i=o.userName,c=o.video,u=o.audio;if(i!==n){var l=function(e,n,t){var r=new D.a({initiator:!0,trickle:!1,stream:t});return r.on("signal",(function(t){m.emit("BE-call-user",{userToCall:e,from:n,signal:t})})),r.on("disconnect",(function(){r.destroy()})),r}(a,m.id,e);l.userName=i,l.peerID=a,B.current.push({peerID:a,peer:l,userName:i}),r.push(l),f((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(S.a)({},l.userName,{video:c,audio:u}))}))}})),c(r)})),m.on("FE-receive-call",(function(n){var t=n.signal,r=n.from,a=n.info,o=a.userName,i=a.video,u=a.audio;if(!M(r)){var l=function(e,n,t){var r=new D.a({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(e){m.emit("BE-accept-call",{signal:e,to:n})})),r.on("disconnect",(function(){r.destroy()})),r.signal(e),r}(t,r,e);l.userName=o,B.current.push({peerID:r,peer:l,userName:o}),c((function(e){return[].concat(Object(I.a)(e),[l])})),f((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(S.a)({},l.userName,{video:i,audio:u}))}))}})),m.on("FE-call-accepted",(function(e){var n=e.signal;M(e.answerId).peer.signal(n)})),m.on("FE-user-leave",(function(e){var n=e.userId,t=(e.userName,M(n));t.peer.destroy(),c((function(e){return e=e.filter((function(e){return e.peerID!==t.peer.peerID})),Object(I.a)(e)})),B.current=B.current.filter((function(e){return e.peerID!==n}))}))})),m.on("FE-toggle-camera",(function(e){var n=e.userId,t=e.switchTarget,r=M(n);f((function(e){var n=e[r.userName].video,a=e[r.userName].audio;return"video"===t?n=!n:a=!a,Object(C.a)(Object(C.a)({},e),{},Object(S.a)({},r.userName,{video:n,audio:a}))}))})),function(){m.disconnect()}}),[]);var J=function(e){e.preventDefault(),m.emit("BE-leave-room",{roomId:V,leaver:n}),sessionStorage.removeItem("user"),window.location.href="/"},W=function(e){var n=e.target;n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen()};return a.a.createElement(Ne,{onClick:function(){T&&F(!1)}},a.a.createElement(Se,null,a.a.createElement(Ie,null,a.a.createElement(ze,{className:"width-peer".concat(i.length>8?"":i.length)},d.localUser.video?null:a.a.createElement(De,null,n),a.a.createElement(Te,{className:"fas fa-expand"}),a.a.createElement(Ce,{onClick:W,ref:U,muted:!0,autoPlay:!0,playInline:!0})),i&&i.map((function(e,n,t){return P(e,n,t)}))),a.a.createElement(re,{clickScreenSharing:function(){w?A.current.onended():navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){var n=e.getTracks()[0];B.current.forEach((function(e){var t=e.peer;t.replaceTrack(t.streams[0].getTracks().find((function(e){return"video"===e.kind})),n,q.current)})),n.onended=function(){B.current.forEach((function(e){var t=e.peer;t.replaceTrack(n,t.streams[0].getTracks().find((function(e){return"video"===e.kind})),q.current)})),U.current.srcObject=q.current,y(!1)},U.current.srcObject=e,A.current=n,y(!0)}))},clickChat:function(e){e.stopPropagation(),E(!j)},clickCameraDevice:function(e){if(e&&e.target&&e.target.dataset&&e.target.dataset.value){var n=e.target.dataset.value,t=U.current.srcObject.getAudioTracks()[0].enabled;navigator.mediaDevices.getUserMedia({video:{deviceId:n},audio:t}).then((function(e){var n=e.getTracks().find((function(e){return"video"===e.kind})),t=q.current.getTracks().find((function(e){return"video"===e.kind}));q.current.removeTrack(t),q.current.addTrack(n),B.current.forEach((function(e){e.peer.replaceTrack(t,n,q.current)}))}))}},goToBack:J,toggleCameraAudio:function(e){var n=e.target.getAttribute("data-switch");f((function(e){var t=e.localUser.video,r=e.localUser.audio;if("video"===n){t=!t,U.current.srcObject.getVideoTracks()[0].enabled=t}else{var a=U.current.srcObject.getAudioTracks()[0];r=!r,a?a.enabled=r:q.current.getAudioTracks()[0].enabled=r}return Object(C.a)(Object(C.a)({},e),{},{localUser:{video:t,audio:r}})})),m.emit("BE-toggle-camera-audio",{roomId:V,switchTarget:n})},userVideoAudio:d.localUser,screenShare:w,videoDevices:g,showVideoDevices:T,setShowVideoDevices:F})),a.a.createElement(he,{display:j,roomId:V}))};function Re(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(8px + 2vmin);\n  color: white;\n  background-color: #454552;\n  text-align: center;\n"]);return Re=function(){return e},e}var Be=d.a.div(Re()),Ue=function(){return a.a.createElement(u.a,null,a.a.createElement(Be,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:N}),a.a.createElement(l.a,{exact:!0,path:"/room/:roomId",component:Fe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,n,t){e.exports=t(138)},78:function(e,n,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.7a8ede50.chunk.js.map
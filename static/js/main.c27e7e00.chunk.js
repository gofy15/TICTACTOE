(this.webpackJsonpreact_tic_tac_toe=this.webpackJsonpreact_tic_tac_toe||[]).push([[0],{28:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e(9),o=e.n(c),a=(e(28),e(2)),u=e(3),l=e(4),s={1:1,0:0,2:-1},f="not_started",d="in_progress",p="over",b={easy:"easy",medium:"medium",difficult:"difficult"},h=e(17),j=function n(t){var e=this;Object(h.a)(this,n),this.makeMove=function(n,t){null===e.grid[n]&&(e.grid[n]=t)},this.getEmptySquares=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[];return n.forEach((function(n,e){null===n&&t.push(e)})),t},this.isEmpty=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid;return e.getEmptySquares(n).length===Math.pow(3,2)},this.getWinner=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=null;return t.forEach((function(t,i){null!==n[t[0]]&&n[t[0]]===n[t[1]]&&n[t[0]]===n[t[2]]?(r=n[t[0]],e.winningIndex=i):null===r&&0===e.getEmptySquares(n).length&&(r=0,e.winningIndex=null)})),r},this.getStrikethroughStyles=function(){var n=285;switch(e.winningIndex){case 0:return"\n          transform: none;\n          top: 41px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 1:return"\n          transform: none;\n          top: 140px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 2:return"\n          transform: none;\n          top: 242px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 3:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: -86px;\n          width: ".concat(n,"px;\n        ");case 4:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 15px;\n          width: ".concat(n,"px;\n        ");case 5:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 115px;\n          width: ".concat(n,"px;\n        ");case 6:return"\n          transform: rotate(45deg);\n          top: 145px;\n          left: -44px;\n          width: ".concat(400,"px;\n        ");case 7:return"\n          transform: rotate(-45deg);\n          top: 145px;\n          left: -46px;\n          width: ".concat(400,"px;\n        ");default:return null}},this.clone=function(){return new n(e.grid.concat())},this.grid=t||new Array(Math.pow(3,2)).fill(null),this.winningIndex=null},x=function(n){return 1===n?2:1},m=function(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n},O=e(18),v=function n(t,e){var r,i=s[String(e)],c=-1,o=null;if(null!==t.getWinner())return[s[t.getWinner()],0];var a,u=Object(O.a)(t.getEmptySquares());try{for(u.s();!(a=u.n()).done;){var l=a.value,f=t.clone();f.makeMove(l,e),(r=i*n(f,x(e))[0])>=c&&(c=r,o=l)}}catch(d){u.e(d)}finally{u.f()}return[i*c,o]},g=e(5),w=e.n(g);function y(){var n=Object(a.a)(["\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n"]);return y=function(){return n},n}var k=Object(u.a)(y());function S(){var n=Object(a.a)(["\n  font-size: 16px;\n"]);return S=function(){return n},n}function C(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  width: 100%;\n"]);return C=function(){return n},n}function E(){var n=Object(a.a)(["\n  flex: 1 1 auto;\n  text-align: center;\n"]);return E=function(){return n},n}function _(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return _=function(){return n},n}function M(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: #fff;\n  max-height: 100%;\n  height: 100%;\n  align-items: center;\n  backface-visibility: hidden;\n  padding: 1.25rem;\n  ",";\n"]);return M=function(){return n},n}function q(){var n=Object(a.a)(["\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  top: 10%;\n  right: auto;\n  bottom: auto;\n  width: 320px;\n  outline: none;\n  display: flex;\n  flex-direction: column;\n"]);return q=function(){return n},n}var I={overlay:{backgroundColor:"rgba(0,0,0, 0.6)"}},W=function(n){var t=n.isOpen,e=n.close,i=n.startNewGame,c=n.winner;return Object(r.jsx)(A,{isOpen:t,onRequestClose:e,style:I,ariaHideApp:!1,children:Object(r.jsxs)(G,{children:[Object(r.jsx)(N,{children:"Game over"}),Object(r.jsx)(z,{children:c}),Object(r.jsxs)(T,{children:[Object(r.jsx)(X,{onClick:e,children:"Close"}),Object(r.jsx)(X,{onClick:i,children:"Start over"})]})]})})},A=Object(u.b)(w.a)(q()),G=u.b.div(M(),k),N=u.b.p(_()),z=u.b.p(E());z.displayName="ModalContent";var T=u.b.div(C()),X=u.b.button(S());function B(){var n=Object(a.a)(["\n  position: absolute;\n  ","\n  background-color: indianred;\n  height: 5px;\n  width: ",";\n"]);return B=function(){return n},n}function J(){var n=Object(a.a)([""]);return J=function(){return n},n}function P(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return P=function(){return n},n}function R(){var n=Object(a.a)([""]);return R=function(){return n},n}function F(){var n=Object(a.a)(["\n  display: flex;\n  width: 150px;\n  justify-content: space-between;\n"]);return F=function(){return n},n}function H(){var n=Object(a.a)(["\n  font-size: 68px;\n"]);return H=function(){return n},n}function V(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return V=function(){return n},n}function $(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n  flex-flow: wrap;\n  position: relative;\n"]);return $=function(){return n},n}var D=new Array(Math.pow(3,2)).fill(null),K=new j,L=u.b.div($(),(function(n){var t=n.dims;return"".concat(105*t,"px")})),Q=u.b.div(V(),100,100,k);Q.displayName="Square";var U=u.b.p(H()),Y=u.b.div(F()),Z=u.b.div(R()),nn=u.b.div(P()),tn=u.b.p(J()),en=u.b.div(B(),(function(n){return n.styles}),(function(n){return!n.styles&&"0px"})),rn=function(n){var t=n.squares,e=void 0===t?D:t,c=Object(i.useState)({human:null,computer:null}),o=Object(l.a)(c,2),a=o[0],u=o[1],s=Object(i.useState)(f),h=Object(l.a)(s,2),O=h[0],g=h[1],w=Object(i.useState)(e),y=Object(l.a)(w,2),k=y[0],S=y[1],C=Object(i.useState)(null),E=Object(l.a)(C,2),_=E[0],M=E[1],q=Object(i.useState)(null),I=Object(l.a)(q,2),A=I[0],G=I[1],N=Object(i.useState)(!1),z=Object(l.a)(N,2),T=z[0],X=z[1],B=Object(i.useState)(b.medium),J=Object(l.a)(B,2),P=J[0],R=J[1];Object(i.useEffect)((function(){var n=K.getWinner(k);null!==n&&O!==p&&function(n){var t;switch(n){case 1:t="Player X wins!";break;case 2:t="Player O wins!";break;case 0:default:t="It's a draw"}g(p),M(t),setTimeout((function(){return X(!0)}),300)}(n)}),[O,k,A]);var F=Object(i.useCallback)((function(n,t){t&&O===d&&S((function(e){var r=e.concat();return r[n]=t,r}))}),[O]),H=Object(i.useCallback)((function(){var n,t=new j(k.concat()),e=t.getEmptySquares(k);switch(P){case b.easy:do{n=m(0,8)}while(!e.includes(n));break;case b.medium:if(!t.isEmpty(k)&&Math.random()<.5)n=v(t,a.computer)[1];else do{n=m(0,8)}while(!e.includes(n));break;case b.difficult:default:n=t.isEmpty(k)?m(0,8):v(t,a.computer)[1]}k[n]||(F(n,a.computer),G(a.human))}),[F,k,a,P]);Object(i.useEffect)((function(){var n;return null!==A&&A===a.computer&&O!==p&&(n=setTimeout((function(){H()}),500)),function(){return n&&clearTimeout(n)}}),[A,H,a.computer,O]);var V=function(n){u({human:n,computer:x(n)}),g(d),G(1)};return O===f?Object(r.jsxs)(Z,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"Select difficulty"}),Object(r.jsx)("select",{onChange:function(n){R(n.target.value)},value:P,children:Object.keys(b).map((function(n){var t=b[n];return Object(r.jsx)("option",{value:t,children:n},t)}))})]}),Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{children:"Choose your player"}),Object(r.jsxs)(Y,{children:[Object(r.jsx)("button",{onClick:function(){return V(1)},children:"X"}),Object(r.jsx)("p",{children:"or"}),Object(r.jsx)("button",{onClick:function(){return V(2)},children:"O"})]})]})]}):Object(r.jsxs)(L,{dims:3,children:[k.map((function(n,t){var e=null!==n;return Object(r.jsx)(Q,{"data-testid":"square_".concat(t),onClick:function(){return function(n){k[n]||A!==a.human||(F(n,a.human),G(a.computer))}(t)},children:e&&Object(r.jsx)(U,{children:1===n?"X":"O"})},t)})),Object(r.jsx)(en,{styles:O===p&&K.getStrikethroughStyles()}),Object(r.jsx)(W,{isOpen:T,winner:_,close:function(){return X(!1)},startNewGame:function(){g(f),S(D),X(!1)}})]})};e(42);function cn(){var n=Object(a.a)(["\n  padding: 16px 0;\n"]);return cn=function(){return n},n}function on(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex: 0 0 auto;\n"]);return on=function(){return n},n}function an(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0 auto;\n"]);return an=function(){return n},n}var un=u.b.main(an()),ln=u.b.footer(on()),sn=u.b.div(cn()),fn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,{children:Object(r.jsx)(rn,{})}),Object(r.jsx)(ln,{children:Object(r.jsxs)(sn,{children:["View the code on"," ",Object(r.jsx)("a",{href:"https://github.com/Clarity-89/React_tic_tac_toe",children:"Github"})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.setAppElement("#root"),o.a.render(Object(r.jsx)(fn,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.c27e7e00.chunk.js.map
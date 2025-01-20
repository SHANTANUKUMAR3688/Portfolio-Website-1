(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function e1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Uf={exports:{}},pa={},Ff={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function t1(){if(Wg)return ht;Wg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,J,we){this.props=N,this.context=J,this.refs=T,this.updater=we||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(N,J,we){this.props=N,this.context=J,this.refs=T,this.updater=we||x}var b=D.prototype=new y;b.constructor=D,M(b,S.prototype),b.isPureReactComponent=!0;var R=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(N,J,we){var $,fe={},Ee=null,ye=null;if(J!=null)for($ in J.ref!==void 0&&(ye=J.ref),J.key!==void 0&&(Ee=""+J.key),J)O.call(J,$)&&!U.hasOwnProperty($)&&(fe[$]=J[$]);var Ae=arguments.length-2;if(Ae===1)fe.children=we;else if(1<Ae){for(var Ue=Array(Ae),Je=0;Je<Ae;Je++)Ue[Je]=arguments[Je+2];fe.children=Ue}if(N&&N.defaultProps)for($ in Ae=N.defaultProps,Ae)fe[$]===void 0&&(fe[$]=Ae[$]);return{$$typeof:n,type:N,key:Ee,ref:ye,props:fe,_owner:F.current}}function P(N,J){return{$$typeof:n,type:N.type,key:J,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function k(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(we){return J[we]})}var oe=/\/+/g;function Q(N,J){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):J.toString(36)}function ce(N,J,we,$,fe){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case n:case e:ye=!0}}if(ye)return ye=N,fe=fe(ye),N=$===""?"."+Q(ye,0):$,R(fe)?(we="",N!=null&&(we=N.replace(oe,"$&/")+"/"),ce(fe,J,we,"",function(Je){return Je})):fe!=null&&(C(fe)&&(fe=P(fe,we+(!fe.key||ye&&ye.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+N)),J.push(fe)),1;if(ye=0,$=$===""?".":$+":",R(N))for(var Ae=0;Ae<N.length;Ae++){Ee=N[Ae];var Ue=$+Q(Ee,Ae);ye+=ce(Ee,J,we,Ue,fe)}else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),Ae=0;!(Ee=N.next()).done;)Ee=Ee.value,Ue=$+Q(Ee,Ae++),ye+=ce(Ee,J,we,Ue,fe);else if(Ee==="object")throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ye}function de(N,J,we){if(N==null)return N;var $=[],fe=0;return ce(N,$,"","",function(Ee){return J.call(we,Ee,fe++)}),$}function le(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(we){(N._status===0||N._status===-1)&&(N._status=1,N._result=we)},function(we){(N._status===0||N._status===-1)&&(N._status=2,N._result=we)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var se={current:null},V={transition:null},ue={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function q(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:de,forEach:function(N,J,we){de(N,function(){J.apply(this,arguments)},we)},count:function(N){var J=0;return de(N,function(){J++}),J},toArray:function(N){return de(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=q,ht.cloneElement=function(N,J,we){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var $=M({},N.props),fe=N.key,Ee=N.ref,ye=N._owner;if(J!=null){if(J.ref!==void 0&&(Ee=J.ref,ye=F.current),J.key!==void 0&&(fe=""+J.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Ue in J)O.call(J,Ue)&&!U.hasOwnProperty(Ue)&&($[Ue]=J[Ue]===void 0&&Ae!==void 0?Ae[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)$.children=we;else if(1<Ue){Ae=Array(Ue);for(var Je=0;Je<Ue;Je++)Ae[Je]=arguments[Je+2];$.children=Ae}return{$$typeof:n,type:N.type,key:fe,ref:Ee,props:$,_owner:ye}},ht.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ht.createElement=B,ht.createFactory=function(N){var J=B.bind(null,N);return J.type=N,J},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:c,render:N}},ht.isValidElement=C,ht.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:le}},ht.memo=function(N,J){return{$$typeof:h,type:N,compare:J===void 0?null:J}},ht.startTransition=function(N){var J=V.transition;V.transition={};try{N()}finally{V.transition=J}},ht.unstable_act=q,ht.useCallback=function(N,J){return se.current.useCallback(N,J)},ht.useContext=function(N){return se.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return se.current.useDeferredValue(N)},ht.useEffect=function(N,J){return se.current.useEffect(N,J)},ht.useId=function(){return se.current.useId()},ht.useImperativeHandle=function(N,J,we){return se.current.useImperativeHandle(N,J,we)},ht.useInsertionEffect=function(N,J){return se.current.useInsertionEffect(N,J)},ht.useLayoutEffect=function(N,J){return se.current.useLayoutEffect(N,J)},ht.useMemo=function(N,J){return se.current.useMemo(N,J)},ht.useReducer=function(N,J,we){return se.current.useReducer(N,J,we)},ht.useRef=function(N){return se.current.useRef(N)},ht.useState=function(N){return se.current.useState(N)},ht.useSyncExternalStore=function(N,J,we){return se.current.useSyncExternalStore(N,J,we)},ht.useTransition=function(){return se.current.useTransition()},ht.version="18.3.1",ht}var jg;function Uh(){return jg||(jg=1,Ff.exports=t1()),Ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function n1(){if(Xg)return pa;Xg=1;var n=Uh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)r.call(d,p)&&!l.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return pa.Fragment=t,pa.jsx=u,pa.jsxs=u,pa}var Yg;function i1(){return Yg||(Yg=1,Uf.exports=n1()),Uf.exports}var ie=i1(),qe=Uh();const er=e1(qe);var Ql={},Of={exports:{}},kn={},kf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function r1(){return qg||(qg=1,function(n){function e(V,ue){var q=V.length;V.push(ue);e:for(;0<q;){var N=q-1>>>1,J=V[N];if(0<o(J,ue))V[N]=ue,V[q]=J,q=N;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ue=V[0],q=V.pop();if(q!==ue){V[0]=q;e:for(var N=0,J=V.length,we=J>>>1;N<we;){var $=2*(N+1)-1,fe=V[$],Ee=$+1,ye=V[Ee];if(0>o(fe,q))Ee<J&&0>o(ye,fe)?(V[N]=ye,V[Ee]=q,N=Ee):(V[N]=fe,V[$]=q,N=$);else if(Ee<J&&0>o(ye,q))V[N]=ye,V[Ee]=q,N=Ee;else break e}}return ue}function o(V,ue){var q=V.sortIndex-ue.sortIndex;return q!==0?q:V.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(V){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=V)r(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function R(V){if(T=!1,b(V),!M)if(t(d)!==null)M=!0,le(O);else{var ue=t(h);ue!==null&&se(R,ue.startTime-V)}}function O(V,ue){M=!1,T&&(T=!1,y(B),B=-1),x=!0;var q=v;try{for(b(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||V&&!k());){var N=g.callback;if(typeof N=="function"){g.callback=null,v=g.priorityLevel;var J=N(g.expirationTime<=ue);ue=n.unstable_now(),typeof J=="function"?g.callback=J:g===t(d)&&r(d),b(ue)}else r(d);g=t(d)}if(g!==null)var we=!0;else{var $=t(h);$!==null&&se(R,$.startTime-ue),we=!1}return we}finally{g=null,v=q,x=!1}}var F=!1,U=null,B=-1,P=5,C=-1;function k(){return!(n.unstable_now()-C<P)}function oe(){if(U!==null){var V=n.unstable_now();C=V;var ue=!0;try{ue=U(!0,V)}finally{ue?Q():(F=!1,U=null)}}else F=!1}var Q;if(typeof D=="function")Q=function(){D(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=oe,Q=function(){de.postMessage(null)}}else Q=function(){S(oe,0)};function le(V){U=V,F||(F=!0,Q())}function se(V,ue){B=S(function(){V(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,le(O))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(V){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var q=v;v=ue;try{return V()}finally{v=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,ue){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=v;v=V;try{return ue()}finally{v=q}},n.unstable_scheduleCallback=function(V,ue,q){var N=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?N+q:N):q=N,V){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=q+J,V={id:p++,callback:ue,priorityLevel:V,startTime:q,expirationTime:J,sortIndex:-1},q>N?(V.sortIndex=q,e(h,V),t(d)===null&&V===t(h)&&(T?(y(B),B=-1):T=!0,se(R,q-N))):(V.sortIndex=J,e(d,V),M||x||(M=!0,le(O))),V},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(V){var ue=v;return function(){var q=v;v=ue;try{return V.apply(this,arguments)}finally{v=q}}}}(Bf)),Bf}var $g;function s1(){return $g||($g=1,kf.exports=r1()),kf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function o1(){if(Kg)return kn;Kg=1;var n=Uh(),e=s1();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,m,_,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,m,f)&&(a=null),f||m===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),V=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=V&&i[V]||i["@@iterator"],typeof i=="function"?i:null)}var q=Object.assign,N;function J(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var we=!1;function $(i,s){if(!i||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var f=ee}Reflect.construct(i,[],s)}else{try{s.call()}catch(ee){f=ee}i.call(s.prototype)}else{try{throw Error()}catch(ee){f=ee}i()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var m=ee.stack.split(`
`),_=f.stack.split(`
`),E=m.length-1,I=_.length-1;1<=E&&0<=I&&m[E]!==_[I];)I--;for(;1<=E&&0<=I;E--,I--)if(m[E]!==_[I]){if(E!==1||I!==1)do if(E--,I--,0>I||m[E]!==_[I]){var z=`
`+m[E].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=E&&0<=I);break}}}finally{we=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?J(i):""}function fe(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=$(i.type,!1),i;case 11:return i=$(i.type.render,!1),i;case 1:return i=$(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case ce:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case oe:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case de:return s=i.displayName||null,s!==null?s:Ee(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return Ee(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(s);case 8:return s===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Ue(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(E){f=""+E,_.call(this,E)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pt(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ue(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var a=s.checked;return q({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function wn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ae(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ft(i,s){pt(i,s);var a=Ae(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ct(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ct(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ye(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ct(i,s,a){(s!=="number"||It(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var je=Array.isArray;function L(i,s,a,f){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ae(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Z(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ae(a)}}function me(i,s){var a=Ae(s.value),f=Ae(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ve(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Fe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,m)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function Ke(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=Ke(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var Ve=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(Ve[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function j(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,ae=null,pe=null;function Le(i){if(i=Jo(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=hl(s),Re(i.stateNode,i.type,s))}}function De(i){ae?pe?pe.push(i):pe=[i]:ae=i}function ot(){if(ae){var i=ae,s=pe;if(pe=ae=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ut(i,s){return i(s)}function en(){}var xt=!1;function Ln(i,s,a){if(xt)return i(s,a);xt=!0;try{return Ut(i,s,a)}finally{xt=!1,(ae!==null||pe!==null)&&(en(),ot())}}function An(i,s){var a=i.stateNode;if(a===null)return null;var f=hl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ps=!1;if(c)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ps=!1}function Ni(i,s,a,f,m,_,E,I,z){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(a,ee)}catch(_e){this.onError(_e)}}var Ui=!1,Xr=null,Yr=!1,ur=null,Xa={onError:function(i){Ui=!0,Xr=i}};function bs(i,s,a,f,m,_,E,I,z){Ui=!1,Xr=null,Ni.apply(Xa,arguments)}function Ya(i,s,a,f,m,_,E,I,z){if(bs.apply(this,arguments),Ui){if(Ui){var ee=Xr;Ui=!1,Xr=null}else throw Error(t(198));Yr||(Yr=!0,ur=ee)}}function Ti(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function qa(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function $a(i){if(Ti(i)!==i)throw Error(t(188))}function ic(i){var s=i.alternate;if(!s){if(s=Ti(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var m=a.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===a)return $a(m),i;if(_===f)return $a(m),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=_;else{for(var E=!1,I=m.child;I;){if(I===a){E=!0,a=m,f=_;break}if(I===f){E=!0,f=m,a=_;break}I=I.sibling}if(!E){for(I=_.child;I;){if(I===a){E=!0,a=_,f=m;break}if(I===f){E=!0,f=_,a=m;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Ka(i){return i=ic(i),i!==null?Za(i):null}function Za(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Za(i);if(s!==null)return s;i=i.sibling}return null}var A=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,G=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,Xe=null,at=null;function Mt(i){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Xe,i,void 0,(i.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:$e,Bt=Math.log,yt=Math.LN2;function $e(i){return i>>>=0,i===0?32:31-(Bt(i)/yt|0)|0}var Wt=64,vt=4194304;function cn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function li(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,E=a&268435455;if(E!==0){var I=E&~m;I!==0?f=cn(I):(_&=E,_!==0&&(f=cn(_)))}else E=a&~m,E!==0?f=cn(E):_!==0&&(f=cn(_));if(f===0)return 0;if(s!==0&&s!==f&&!(s&m)&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if(f&4&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-Et(s),m=1<<a,f|=i[a],s&=~m;return f}function Cn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-Et(_),I=1<<E,z=m[E];z===-1?(!(I&a)||I&f)&&(m[E]=Cn(I,s)):z<=s&&(i.expiredLanes|=I),_&=~I}}function bt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Rn(){var i=Wt;return Wt<<=1,!(Wt&4194240)&&(Wt=64),i}function mn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Yt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Et(s),i[s]=a}function gn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-Et(a),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,a&=~_}}function $r(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-Et(a),m=1<<f;m&s|i[f]&s&&(i[f]|=s),a&=~m}}var mt=0;function Mp(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Ep,rc,Tp,wp,Ap,sc=!1,Qa=[],cr=null,fr=null,dr=null,Oo=new Map,ko=new Map,hr=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(i,s){switch(i){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Oo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(s.pointerId)}}function Bo(i,s,a,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=Jo(s),s!==null&&rc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Tx(i,s,a,f,m){switch(s){case"focusin":return cr=Bo(cr,i,s,a,f,m),!0;case"dragenter":return fr=Bo(fr,i,s,a,f,m),!0;case"mouseover":return dr=Bo(dr,i,s,a,f,m),!0;case"pointerover":var _=m.pointerId;return Oo.set(_,Bo(Oo.get(_)||null,i,s,a,f,m)),!0;case"gotpointercapture":return _=m.pointerId,ko.set(_,Bo(ko.get(_)||null,i,s,a,f,m)),!0}return!1}function Rp(i){var s=Kr(i.target);if(s!==null){var a=Ti(s);if(a!==null){if(s=a.tag,s===13){if(s=qa(a),s!==null){i.blockedOn=s,Ap(i.priority,function(){Tp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ja(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=ac(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);At=f,a.target.dispatchEvent(f),At=null}else return s=Jo(a),s!==null&&rc(s),i.blockedOn=a,!1;s.shift()}return!0}function Pp(i,s,a){Ja(i)&&a.delete(s)}function wx(){sc=!1,cr!==null&&Ja(cr)&&(cr=null),fr!==null&&Ja(fr)&&(fr=null),dr!==null&&Ja(dr)&&(dr=null),Oo.forEach(Pp),ko.forEach(Pp)}function Vo(i,s){i.blockedOn===s&&(i.blockedOn=null,sc||(sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wx)))}function zo(i){function s(m){return Vo(m,i)}if(0<Qa.length){Vo(Qa[0],i);for(var a=1;a<Qa.length;a++){var f=Qa[a];f.blockedOn===i&&(f.blockedOn=null)}}for(cr!==null&&Vo(cr,i),fr!==null&&Vo(fr,i),dr!==null&&Vo(dr,i),Oo.forEach(s),ko.forEach(s),a=0;a<hr.length;a++)f=hr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Rp(a),a.blockedOn===null&&hr.shift()}var Ds=R.ReactCurrentBatchConfig,el=!0;function Ax(i,s,a,f){var m=mt,_=Ds.transition;Ds.transition=null;try{mt=1,oc(i,s,a,f)}finally{mt=m,Ds.transition=_}}function Cx(i,s,a,f){var m=mt,_=Ds.transition;Ds.transition=null;try{mt=4,oc(i,s,a,f)}finally{mt=m,Ds.transition=_}}function oc(i,s,a,f){if(el){var m=ac(i,s,a,f);if(m===null)Tc(i,s,f,tl,a),Cp(i,f);else if(Tx(m,i,s,a,f))f.stopPropagation();else if(Cp(i,f),s&4&&-1<Ex.indexOf(i)){for(;m!==null;){var _=Jo(m);if(_!==null&&Ep(_),_=ac(i,s,a,f),_===null&&Tc(i,s,f,tl,a),_===m)break;m=_}m!==null&&f.stopPropagation()}else Tc(i,s,f,null,a)}}var tl=null;function ac(i,s,a,f){if(tl=null,i=j(f),i=Kr(i),i!==null)if(s=Ti(i),s===null)i=null;else if(a=s.tag,a===13){if(i=qa(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return tl=i,null}function bp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Pe:return 1;case Ne:return 4;case Oe:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var pr=null,lc=null,nl=null;function Dp(){if(nl)return nl;var i,s=lc,a=s.length,f,m="value"in pr?pr.value:pr.textContent,_=m.length;for(i=0;i<a&&s[i]===m[i];i++);var E=a-i;for(f=1;f<=E&&s[a-f]===m[_-f];f++);return nl=m.slice(i,1<f?1-f:void 0)}function il(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function rl(){return!0}function Lp(){return!1}function Gn(i){function s(a,f,m,_,E){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:Lp,this.isPropagationStopped=Lp,this}return q(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Gn(Ls),Ho=q({},Ls,{view:0,detail:0}),Rx=Gn(Ho),cc,fc,Go,sl=q({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Go&&(Go&&i.type==="mousemove"?(cc=i.screenX-Go.screenX,fc=i.screenY-Go.screenY):fc=cc=0,Go=i),cc)},movementY:function(i){return"movementY"in i?i.movementY:fc}}),Ip=Gn(sl),Px=q({},sl,{dataTransfer:0}),bx=Gn(Px),Dx=q({},Ho,{relatedTarget:0}),dc=Gn(Dx),Lx=q({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=Gn(Lx),Nx=q({},Ls,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ux=Gn(Nx),Fx=q({},Ls,{data:0}),Np=Gn(Fx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Bx[i])?!!s[i]:!1}function hc(){return Vx}var zx=q({},Ho,{key:function(i){if(i.key){var s=Ox[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=il(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?kx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(i){return i.type==="keypress"?il(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?il(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Hx=Gn(zx),Gx=q({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Gn(Gx),Wx=q({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),jx=Gn(Wx),Xx=q({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=Gn(Xx),qx=q({},sl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Gn(qx),Kx=[9,13,27,32],pc=c&&"CompositionEvent"in window,Wo=null;c&&"documentMode"in document&&(Wo=document.documentMode);var Zx=c&&"TextEvent"in window&&!Wo,Fp=c&&(!pc||Wo&&8<Wo&&11>=Wo),Op=" ",kp=!1;function Bp(i,s){switch(i){case"keyup":return Kx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Is=!1;function Qx(i,s){switch(i){case"compositionend":return Vp(s);case"keypress":return s.which!==32?null:(kp=!0,Op);case"textInput":return i=s.data,i===Op&&kp?null:i;default:return null}}function Jx(i,s){if(Is)return i==="compositionend"||!pc&&Bp(i,s)?(i=Dp(),nl=lc=pr=null,Is=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Fp&&s.locale!=="ko"?null:s.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!eS[i.type]:s==="textarea"}function Hp(i,s,a,f){De(f),s=cl(s,"onChange"),0<s.length&&(a=new uc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var jo=null,Xo=null;function tS(i){om(i,0)}function ol(i){var s=ks(i);if(gt(s))return i}function nS(i,s){if(i==="change")return s}var Gp=!1;if(c){var mc;if(c){var gc="oninput"in document;if(!gc){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),gc=typeof Wp.oninput=="function"}mc=gc}else mc=!1;Gp=mc&&(!document.documentMode||9<document.documentMode)}function jp(){jo&&(jo.detachEvent("onpropertychange",Xp),Xo=jo=null)}function Xp(i){if(i.propertyName==="value"&&ol(Xo)){var s=[];Hp(s,Xo,i,j(i)),Ln(tS,s)}}function iS(i,s,a){i==="focusin"?(jp(),jo=s,Xo=a,jo.attachEvent("onpropertychange",Xp)):i==="focusout"&&jp()}function rS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ol(Xo)}function sS(i,s){if(i==="click")return ol(s)}function oS(i,s){if(i==="input"||i==="change")return ol(s)}function aS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var ui=typeof Object.is=="function"?Object.is:aS;function Yo(i,s){if(ui(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!d.call(s,m)||!ui(i[m],s[m]))return!1}return!0}function Yp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function qp(i,s){var a=Yp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function $p(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?$p(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Kp(){for(var i=window,s=It();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=It(i.document)}return s}function vc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function lS(i){var s=Kp(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&$p(a.ownerDocument.documentElement,a)){if(f!==null&&vc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=qp(a,_);var E=qp(a,f);m&&E&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var uS=c&&"documentMode"in document&&11>=document.documentMode,Ns=null,_c=null,qo=null,yc=!1;function Zp(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||Ns==null||Ns!==It(f)||(f=Ns,"selectionStart"in f&&vc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),qo&&Yo(qo,f)||(qo=f,f=cl(_c,"onSelect"),0<f.length&&(s=new uc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ns)))}function al(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Us={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},xc={},Qp={};c&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function ll(i){if(xc[i])return xc[i];if(!Us[i])return i;var s=Us[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Qp)return xc[i]=s[a];return i}var Jp=ll("animationend"),em=ll("animationiteration"),tm=ll("animationstart"),nm=ll("transitionend"),im=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(i,s){im.set(i,s),l(s,[i])}for(var Sc=0;Sc<rm.length;Sc++){var Mc=rm[Sc],cS=Mc.toLowerCase(),fS=Mc[0].toUpperCase()+Mc.slice(1);mr(cS,"on"+fS)}mr(Jp,"onAnimationEnd"),mr(em,"onAnimationIteration"),mr(tm,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(nm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function sm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Ya(f,s,void 0,i),i.currentTarget=null}function om(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var E=f.length-1;0<=E;E--){var I=f[E],z=I.instance,ee=I.currentTarget;if(I=I.listener,z!==_&&m.isPropagationStopped())break e;sm(m,I,ee),_=z}else for(E=0;E<f.length;E++){if(I=f[E],z=I.instance,ee=I.currentTarget,I=I.listener,z!==_&&m.isPropagationStopped())break e;sm(m,I,ee),_=z}}}if(Yr)throw i=ur,Yr=!1,ur=null,i}function Ft(i,s){var a=s[bc];a===void 0&&(a=s[bc]=new Set);var f=i+"__bubble";a.has(f)||(am(s,i,2,!1),a.add(f))}function Ec(i,s,a){var f=0;s&&(f|=4),am(a,i,f,s)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ko(i){if(!i[ul]){i[ul]=!0,r.forEach(function(a){a!=="selectionchange"&&(dS.has(a)||Ec(a,!1,i),Ec(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ul]||(s[ul]=!0,Ec("selectionchange",!1,s))}}function am(i,s,a,f){switch(bp(s)){case 1:var m=Ax;break;case 4:m=Cx;break;default:m=oc}a=m.bind(null,s,a,i),m=void 0,!Ps||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Tc(i,s,a,f,m){var _=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var I=f.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(E===4)for(E=f.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;E=E.return}for(;I!==null;){if(E=Kr(I),E===null)return;if(z=E.tag,z===5||z===6){f=_=E;continue e}I=I.parentNode}}f=f.return}Ln(function(){var ee=_,_e=j(a),xe=[];e:{var ge=im.get(i);if(ge!==void 0){var Ie=uc,ze=i;switch(i){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":Ie=Hx;break;case"focusin":ze="focus",Ie=dc;break;case"focusout":ze="blur",Ie=dc;break;case"beforeblur":case"afterblur":Ie=dc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=jx;break;case Jp:case em:case tm:Ie=Ix;break;case nm:Ie=Yx;break;case"scroll":Ie=Rx;break;case"wheel":Ie=$x;break;case"copy":case"cut":case"paste":Ie=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Up}var He=(s&4)!==0,qt=!He&&i==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var W=ee,K;W!==null;){K=W;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,Y!==null&&(Te=An(W,Y),Te!=null&&He.push(Zo(W,Te,K)))),qt)break;W=W.return}0<He.length&&(ge=new Ie(ge,ze,null,a,_e),xe.push({event:ge,listeners:He}))}}if(!(s&7)){e:{if(ge=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",ge&&a!==At&&(ze=a.relatedTarget||a.fromElement)&&(Kr(ze)||ze[Fi]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=ee,ze=ze?Kr(ze):null,ze!==null&&(qt=Ti(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(He=Ip,Te="onMouseLeave",Y="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(He=Up,Te="onPointerLeave",Y="onPointerEnter",W="pointer"),qt=Ie==null?ge:ks(Ie),K=ze==null?ge:ks(ze),ge=new He(Te,W+"leave",Ie,a,_e),ge.target=qt,ge.relatedTarget=K,Te=null,Kr(_e)===ee&&(He=new He(Y,W+"enter",ze,a,_e),He.target=K,He.relatedTarget=qt,Te=He),qt=Te,Ie&&ze)t:{for(He=Ie,Y=ze,W=0,K=He;K;K=Fs(K))W++;for(K=0,Te=Y;Te;Te=Fs(Te))K++;for(;0<W-K;)He=Fs(He),W--;for(;0<K-W;)Y=Fs(Y),K--;for(;W--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=Fs(He),Y=Fs(Y)}He=null}else He=null;Ie!==null&&lm(xe,ge,Ie,He,!1),ze!==null&&qt!==null&&lm(xe,qt,ze,He,!0)}}e:{if(ge=ee?ks(ee):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var We=nS;else if(zp(ge))if(Gp)We=oS;else{We=rS;var Ze=iS}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=sS);if(We&&(We=We(i,ee))){Hp(xe,We,a,_e);break e}Ze&&Ze(i,ge,ee),i==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch(Ze=ee?ks(ee):window,i){case"focusin":(zp(Ze)||Ze.contentEditable==="true")&&(Ns=Ze,_c=ee,qo=null);break;case"focusout":qo=_c=Ns=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Zp(xe,a,_e);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":Zp(xe,a,_e)}var Qe;if(pc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Is?Bp(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Fp&&a.locale!=="ko"&&(Is||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Is&&(Qe=Dp()):(pr=_e,lc="value"in pr?pr.value:pr.textContent,Is=!0)),Ze=cl(ee,rt),0<Ze.length&&(rt=new Np(rt,i,null,a,_e),xe.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=Vp(a),Qe!==null&&(rt.data=Qe)))),(Qe=Zx?Qx(i,a):Jx(i,a))&&(ee=cl(ee,"onBeforeInput"),0<ee.length&&(_e=new Np("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ee}),_e.data=Qe))}om(xe,s)})}function Zo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function cl(i,s){for(var a=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=An(i,a),_!=null&&f.unshift(Zo(i,_,m)),_=An(i,s),_!=null&&f.push(Zo(i,_,m))),i=i.return}return f}function Fs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function lm(i,s,a,f,m){for(var _=s._reactName,E=[];a!==null&&a!==f;){var I=a,z=I.alternate,ee=I.stateNode;if(z!==null&&z===f)break;I.tag===5&&ee!==null&&(I=ee,m?(z=An(a,_),z!=null&&E.unshift(Zo(a,z,I))):m||(z=An(a,_),z!=null&&E.push(Zo(a,z,I)))),a=a.return}E.length!==0&&i.push({event:s,listeners:E})}var hS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function um(i){return(typeof i=="string"?i:""+i).replace(hS,`
`).replace(pS,"")}function fl(i,s,a){if(s=um(s),um(i)!==s&&a)throw Error(t(425))}function dl(){}var wc=null,Ac=null;function Cc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(i){return cm.resolve(null).then(i).catch(vS)}:Rc;function vS(i){setTimeout(function(){throw i})}function Pc(i,s){var a=s,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),zo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);zo(s)}function gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function fm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Os=Math.random().toString(36).slice(2),wi="__reactFiber$"+Os,Qo="__reactProps$"+Os,Fi="__reactContainer$"+Os,bc="__reactEvents$"+Os,_S="__reactListeners$"+Os,yS="__reactHandles$"+Os;function Kr(i){var s=i[wi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Fi]||a[wi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=fm(i);i!==null;){if(a=i[wi])return a;i=fm(i)}return s}i=a,a=i.parentNode}return null}function Jo(i){return i=i[wi]||i[Fi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ks(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function hl(i){return i[Qo]||null}var Dc=[],Bs=-1;function vr(i){return{current:i}}function Ot(i){0>Bs||(i.current=Dc[Bs],Dc[Bs]=null,Bs--)}function Nt(i,s){Bs++,Dc[Bs]=i.current,i.current=s}var _r={},vn=vr(_r),In=vr(!1),Zr=_r;function Vs(i,s){var a=i.type.contextTypes;if(!a)return _r;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in a)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Nn(i){return i=i.childContextTypes,i!=null}function pl(){Ot(In),Ot(vn)}function dm(i,s,a){if(vn.current!==_r)throw Error(t(168));Nt(vn,s),Nt(In,a)}function hm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ye(i)||"Unknown",m));return q({},a,f)}function ml(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||_r,Zr=vn.current,Nt(vn,i),Nt(In,In.current),!0}function pm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=hm(i,s,Zr),f.__reactInternalMemoizedMergedChildContext=i,Ot(In),Ot(vn),Nt(vn,i)):Ot(In),Nt(In,a)}var Oi=null,gl=!1,Lc=!1;function mm(i){Oi===null?Oi=[i]:Oi.push(i)}function xS(i){gl=!0,mm(i)}function yr(){if(!Lc&&Oi!==null){Lc=!0;var i=0,s=mt;try{var a=Oi;for(mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Oi=null,gl=!1}catch(m){throw Oi!==null&&(Oi=Oi.slice(i+1)),A(Pe,yr),m}finally{mt=s,Lc=!1}}return null}var zs=[],Hs=0,vl=null,_l=0,Zn=[],Qn=0,Qr=null,ki=1,Bi="";function Jr(i,s){zs[Hs++]=_l,zs[Hs++]=vl,vl=i,_l=s}function gm(i,s,a){Zn[Qn++]=ki,Zn[Qn++]=Bi,Zn[Qn++]=Qr,Qr=i;var f=ki;i=Bi;var m=32-Et(f)-1;f&=~(1<<m),a+=1;var _=32-Et(s)+m;if(30<_){var E=m-m%5;_=(f&(1<<E)-1).toString(32),f>>=E,m-=E,ki=1<<32-Et(s)+m|a<<m|f,Bi=_+i}else ki=1<<_|a<<m|f,Bi=i}function Ic(i){i.return!==null&&(Jr(i,1),gm(i,1,0))}function Nc(i){for(;i===vl;)vl=zs[--Hs],zs[Hs]=null,_l=zs[--Hs],zs[Hs]=null;for(;i===Qr;)Qr=Zn[--Qn],Zn[Qn]=null,Bi=Zn[--Qn],Zn[Qn]=null,ki=Zn[--Qn],Zn[Qn]=null}var Wn=null,jn=null,Vt=!1,ci=null;function vm(i,s){var a=ni(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function _m(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Wn=i,jn=gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Wn=i,jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qr!==null?{id:ki,overflow:Bi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ni(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Wn=i,jn=null,!0):!1;default:return!1}}function Uc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Fc(i){if(Vt){var s=jn;if(s){var a=s;if(!_m(i,s)){if(Uc(i))throw Error(t(418));s=gr(a.nextSibling);var f=Wn;s&&_m(i,s)?vm(f,a):(i.flags=i.flags&-4097|2,Vt=!1,Wn=i)}}else{if(Uc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,Wn=i}}}function ym(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wn=i}function yl(i){if(i!==Wn)return!1;if(!Vt)return ym(i),Vt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Cc(i.type,i.memoizedProps)),s&&(s=jn)){if(Uc(i))throw xm(),Error(t(418));for(;s;)vm(i,s),s=gr(s.nextSibling)}if(ym(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){jn=gr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}jn=null}}else jn=Wn?gr(i.stateNode.nextSibling):null;return!0}function xm(){for(var i=jn;i;)i=gr(i.nextSibling)}function Gs(){jn=Wn=null,Vt=!1}function Oc(i){ci===null?ci=[i]:ci.push(i)}var SS=R.ReactCurrentBatchConfig;function ea(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(E){var I=m.refs;E===null?delete I[_]:I[_]=E},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function xl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Sm(i){var s=i._init;return s(i._payload)}function Mm(i){function s(Y,W){if(i){var K=Y.deletions;K===null?(Y.deletions=[W],Y.flags|=16):K.push(W)}}function a(Y,W){if(!i)return null;for(;W!==null;)s(Y,W),W=W.sibling;return null}function f(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function m(Y,W){return Y=Cr(Y,W),Y.index=0,Y.sibling=null,Y}function _(Y,W,K){return Y.index=K,i?(K=Y.alternate,K!==null?(K=K.index,K<W?(Y.flags|=2,W):K):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function E(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,W,K,Te){return W===null||W.tag!==6?(W=Pf(K,Y.mode,Te),W.return=Y,W):(W=m(W,K),W.return=Y,W)}function z(Y,W,K,Te){var We=K.type;return We===U?_e(Y,W,K.props.children,Te,K.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===le&&Sm(We)===W.type)?(Te=m(W,K.props),Te.ref=ea(Y,W,K),Te.return=Y,Te):(Te=Wl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ea(Y,W,K),Te.return=Y,Te)}function ee(Y,W,K,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=bf(K,Y.mode,Te),W.return=Y,W):(W=m(W,K.children||[]),W.return=Y,W)}function _e(Y,W,K,Te,We){return W===null||W.tag!==7?(W=as(K,Y.mode,Te,We),W.return=Y,W):(W=m(W,K),W.return=Y,W)}function xe(Y,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Pf(""+W,Y.mode,K),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case O:return K=Wl(W.type,W.key,W.props,null,Y.mode,K),K.ref=ea(Y,null,W),K.return=Y,K;case F:return W=bf(W,Y.mode,K),W.return=Y,W;case le:var Te=W._init;return xe(Y,Te(W._payload),K)}if(je(W)||ue(W))return W=as(W,Y.mode,K,null),W.return=Y,W;xl(Y,W)}return null}function ge(Y,W,K,Te){var We=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:I(Y,W,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return K.key===We?z(Y,W,K,Te):null;case F:return K.key===We?ee(Y,W,K,Te):null;case le:return We=K._init,ge(Y,W,We(K._payload),Te)}if(je(K)||ue(K))return We!==null?null:_e(Y,W,K,Te,null);xl(Y,K)}return null}function Ie(Y,W,K,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(K)||null,I(W,Y,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return Y=Y.get(Te.key===null?K:Te.key)||null,z(W,Y,Te,We);case F:return Y=Y.get(Te.key===null?K:Te.key)||null,ee(W,Y,Te,We);case le:var Ze=Te._init;return Ie(Y,W,K,Ze(Te._payload),We)}if(je(Te)||ue(Te))return Y=Y.get(K)||null,_e(W,Y,Te,We,null);xl(W,Te)}return null}function ze(Y,W,K,Te){for(var We=null,Ze=null,Qe=W,rt=W=0,ln=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var Tt=ge(Y,Qe,K[rt],Te);if(Tt===null){Qe===null&&(Qe=ln);break}i&&Qe&&Tt.alternate===null&&s(Y,Qe),W=_(Tt,W,rt),Ze===null?We=Tt:Ze.sibling=Tt,Ze=Tt,Qe=ln}if(rt===K.length)return a(Y,Qe),Vt&&Jr(Y,rt),We;if(Qe===null){for(;rt<K.length;rt++)Qe=xe(Y,K[rt],Te),Qe!==null&&(W=_(Qe,W,rt),Ze===null?We=Qe:Ze.sibling=Qe,Ze=Qe);return Vt&&Jr(Y,rt),We}for(Qe=f(Y,Qe);rt<K.length;rt++)ln=Ie(Qe,Y,rt,K[rt],Te),ln!==null&&(i&&ln.alternate!==null&&Qe.delete(ln.key===null?rt:ln.key),W=_(ln,W,rt),Ze===null?We=ln:Ze.sibling=ln,Ze=ln);return i&&Qe.forEach(function(Rr){return s(Y,Rr)}),Vt&&Jr(Y,rt),We}function He(Y,W,K,Te){var We=ue(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var Ze=We=null,Qe=W,rt=W=0,ln=null,Tt=K.next();Qe!==null&&!Tt.done;rt++,Tt=K.next()){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var Rr=ge(Y,Qe,Tt.value,Te);if(Rr===null){Qe===null&&(Qe=ln);break}i&&Qe&&Rr.alternate===null&&s(Y,Qe),W=_(Rr,W,rt),Ze===null?We=Rr:Ze.sibling=Rr,Ze=Rr,Qe=ln}if(Tt.done)return a(Y,Qe),Vt&&Jr(Y,rt),We;if(Qe===null){for(;!Tt.done;rt++,Tt=K.next())Tt=xe(Y,Tt.value,Te),Tt!==null&&(W=_(Tt,W,rt),Ze===null?We=Tt:Ze.sibling=Tt,Ze=Tt);return Vt&&Jr(Y,rt),We}for(Qe=f(Y,Qe);!Tt.done;rt++,Tt=K.next())Tt=Ie(Qe,Y,rt,Tt.value,Te),Tt!==null&&(i&&Tt.alternate!==null&&Qe.delete(Tt.key===null?rt:Tt.key),W=_(Tt,W,rt),Ze===null?We=Tt:Ze.sibling=Tt,Ze=Tt);return i&&Qe.forEach(function(JS){return s(Y,JS)}),Vt&&Jr(Y,rt),We}function qt(Y,W,K,Te){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case O:e:{for(var We=K.key,Ze=W;Ze!==null;){if(Ze.key===We){if(We=K.type,We===U){if(Ze.tag===7){a(Y,Ze.sibling),W=m(Ze,K.props.children),W.return=Y,Y=W;break e}}else if(Ze.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===le&&Sm(We)===Ze.type){a(Y,Ze.sibling),W=m(Ze,K.props),W.ref=ea(Y,Ze,K),W.return=Y,Y=W;break e}a(Y,Ze);break}else s(Y,Ze);Ze=Ze.sibling}K.type===U?(W=as(K.props.children,Y.mode,Te,K.key),W.return=Y,Y=W):(Te=Wl(K.type,K.key,K.props,null,Y.mode,Te),Te.ref=ea(Y,W,K),Te.return=Y,Y=Te)}return E(Y);case F:e:{for(Ze=K.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){a(Y,W.sibling),W=m(W,K.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else s(Y,W);W=W.sibling}W=bf(K,Y.mode,Te),W.return=Y,Y=W}return E(Y);case le:return Ze=K._init,qt(Y,W,Ze(K._payload),Te)}if(je(K))return ze(Y,W,K,Te);if(ue(K))return He(Y,W,K,Te);xl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(a(Y,W.sibling),W=m(W,K),W.return=Y,Y=W):(a(Y,W),W=Pf(K,Y.mode,Te),W.return=Y,Y=W),E(Y)):a(Y,W)}return qt}var Ws=Mm(!0),Em=Mm(!1),Sl=vr(null),Ml=null,js=null,kc=null;function Bc(){kc=js=Ml=null}function Vc(i){var s=Sl.current;Ot(Sl),i._currentValue=s}function zc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){Ml=i,kc=js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Un=!0),i.firstContext=null)}function Jn(i){var s=i._currentValue;if(kc!==i)if(i={context:i,memoizedValue:s,next:null},js===null){if(Ml===null)throw Error(t(308));js=i,Ml.dependencies={lanes:0,firstContext:i}}else js=js.next=i;return s}var es=null;function Hc(i){es===null?es=[i]:es.push(i)}function Tm(i,s,a,f){var m=s.interleaved;return m===null?(a.next=a,Hc(s)):(a.next=m.next,m.next=a),s.interleaved=a,Vi(i,f)}function Vi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var xr=!1;function Gc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Sr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,St&2){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Vi(i,a)}return m=f.interleaved,m===null?(s.next=s,Hc(f)):(s.next=m.next,m.next=s),f.interleaved=s,Vi(i,a)}function El(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}function Am(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?m=_=E:_=_.next=E,a=a.next}while(a!==null);_===null?m=_=s:_=_.next=s}else m=_=s;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Tl(i,s,a,f){var m=i.updateQueue;xr=!1;var _=m.firstBaseUpdate,E=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var z=I,ee=z.next;z.next=null,E===null?_=ee:E.next=ee,E=z;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==E&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=z))}if(_!==null){var xe=m.baseState;E=0,_e=ee=z=null,I=_;do{var ge=I.lane,Ie=I.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=i,He=I;switch(ge=s,Ie=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){xe=ze.call(Ie,xe,ge);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(Ie,xe,ge):ze,ge==null)break e;xe=q({},xe,ge);break e;case 2:xr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=m.effects,ge===null?m.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Ie,z=xe):_e=_e.next=Ie,E|=ge;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(_e===null&&(z=xe),m.baseState=z,m.firstBaseUpdate=ee,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do E|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);is|=E,i.lanes=E,i.memoizedState=xe}}function Cm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ta={},Ai=vr(ta),na=vr(ta),ia=vr(ta);function ts(i){if(i===ta)throw Error(t(174));return i}function Wc(i,s){switch(Nt(ia,s),Nt(na,i),Nt(Ai,ta),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ge(s,i)}Ot(Ai),Nt(Ai,s)}function Ys(){Ot(Ai),Ot(na),Ot(ia)}function Rm(i){ts(ia.current);var s=ts(Ai.current),a=Ge(s,i.type);s!==a&&(Nt(na,i),Nt(Ai,a))}function jc(i){na.current===i&&(Ot(Ai),Ot(na))}var zt=vr(0);function wl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Xc=[];function Yc(){for(var i=0;i<Xc.length;i++)Xc[i]._workInProgressVersionPrimary=null;Xc.length=0}var Al=R.ReactCurrentDispatcher,qc=R.ReactCurrentBatchConfig,ns=0,Ht=null,tn=null,on=null,Cl=!1,ra=!1,sa=0,MS=0;function _n(){throw Error(t(321))}function $c(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!ui(i[a],s[a]))return!1;return!0}function Kc(i,s,a,f,m,_){if(ns=_,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Al.current=i===null||i.memoizedState===null?AS:CS,i=a(f,m),ra){_=0;do{if(ra=!1,sa=0,25<=_)throw Error(t(301));_+=1,on=tn=null,s.updateQueue=null,Al.current=RS,i=a(f,m)}while(ra)}if(Al.current=bl,s=tn!==null&&tn.next!==null,ns=0,on=tn=Ht=null,Cl=!1,s)throw Error(t(300));return i}function Zc(){var i=sa!==0;return sa=0,i}function Ci(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Ht.memoizedState=on=i:on=on.next=i,on}function ei(){if(tn===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=on===null?Ht.memoizedState:on.next;if(s!==null)on=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?Ht.memoizedState=on=i:on=on.next=i}return on}function oa(i,s){return typeof s=="function"?s(i):s}function Qc(i){var s=ei(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,m=f.baseQueue,_=a.pending;if(_!==null){if(m!==null){var E=m.next;m.next=_.next,_.next=E}f.baseQueue=m=_,a.pending=null}if(m!==null){_=m.next,f=f.baseState;var I=E=null,z=null,ee=_;do{var _e=ee.lane;if((ns&_e)===_e)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:i(f,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(I=z=xe,E=f):z=z.next=xe,Ht.lanes|=_e,is|=_e}ee=ee.next}while(ee!==null&&ee!==_);z===null?E=f:z.next=I,ui(f,s.memoizedState)||(Un=!0),s.memoizedState=f,s.baseState=E,s.baseQueue=z,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do _=m.lane,Ht.lanes|=_,is|=_,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Jc(i){var s=ei(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,_=s.memoizedState;if(m!==null){a.pending=null;var E=m=m.next;do _=i(_,E.action),E=E.next;while(E!==m);ui(_,s.memoizedState)||(Un=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Pm(){}function bm(i,s){var a=Ht,f=ei(),m=s(),_=!ui(f.memoizedState,m);if(_&&(f.memoizedState=m,Un=!0),f=f.queue,ef(Im.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,aa(9,Lm.bind(null,a,f,m,s),void 0,null),an===null)throw Error(t(349));ns&30||Dm(a,s,m)}return m}function Dm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Lm(i,s,a,f){s.value=a,s.getSnapshot=f,Nm(s)&&Um(i)}function Im(i,s,a){return a(function(){Nm(s)&&Um(i)})}function Nm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!ui(i,a)}catch{return!0}}function Um(i){var s=Vi(i,1);s!==null&&pi(s,i,1,-1)}function Fm(i){var s=Ci();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},s.queue=i,i=i.dispatch=wS.bind(null,Ht,i),[s.memoizedState,i]}function aa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Om(){return ei().memoizedState}function Rl(i,s,a,f){var m=Ci();Ht.flags|=i,m.memoizedState=aa(1|s,a,void 0,f===void 0?null:f)}function Pl(i,s,a,f){var m=ei();f=f===void 0?null:f;var _=void 0;if(tn!==null){var E=tn.memoizedState;if(_=E.destroy,f!==null&&$c(f,E.deps)){m.memoizedState=aa(s,a,_,f);return}}Ht.flags|=i,m.memoizedState=aa(1|s,a,_,f)}function km(i,s){return Rl(8390656,8,i,s)}function ef(i,s){return Pl(2048,8,i,s)}function Bm(i,s){return Pl(4,2,i,s)}function Vm(i,s){return Pl(4,4,i,s)}function zm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Hm(i,s,a){return a=a!=null?a.concat([i]):null,Pl(4,4,zm.bind(null,s,i),a)}function tf(){}function Gm(i,s){var a=ei();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&$c(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Wm(i,s){var a=ei();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&$c(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function jm(i,s,a){return ns&21?(ui(a,s)||(a=Rn(),Ht.lanes|=a,is|=a,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Un=!0),i.memoizedState=a)}function ES(i,s){var a=mt;mt=a!==0&&4>a?a:4,i(!0);var f=qc.transition;qc.transition={};try{i(!1),s()}finally{mt=a,qc.transition=f}}function Xm(){return ei().memoizedState}function TS(i,s,a){var f=wr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Ym(i))qm(s,a);else if(a=Tm(i,s,a,f),a!==null){var m=bn();pi(a,i,f,m),$m(a,s,f)}}function wS(i,s,a){var f=wr(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ym(i))qm(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var E=s.lastRenderedState,I=_(E,a);if(m.hasEagerState=!0,m.eagerState=I,ui(I,E)){var z=s.interleaved;z===null?(m.next=m,Hc(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}finally{}a=Tm(i,s,m,f),a!==null&&(m=bn(),pi(a,i,f,m),$m(a,s,f))}}function Ym(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function qm(i,s){ra=Cl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function $m(i,s,a){if(a&4194240){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,$r(i,a)}}var bl={readContext:Jn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},AS={readContext:Jn,useCallback:function(i,s){return Ci().memoizedState=[i,s===void 0?null:s],i},useContext:Jn,useEffect:km,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Rl(4194308,4,zm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Rl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Rl(4,2,i,s)},useMemo:function(i,s){var a=Ci();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ci();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=TS.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Ci();return i={current:i},s.memoizedState=i},useState:Fm,useDebugValue:tf,useDeferredValue:function(i){return Ci().memoizedState=i},useTransition:function(){var i=Fm(!1),s=i[0];return i=ES.bind(null,i[1]),Ci().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,m=Ci();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),an===null)throw Error(t(349));ns&30||Dm(f,s,a)}m.memoizedState=a;var _={value:a,getSnapshot:s};return m.queue=_,km(Im.bind(null,f,_,i),[i]),f.flags|=2048,aa(9,Lm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ci(),s=an.identifierPrefix;if(Vt){var a=Bi,f=ki;a=(f&~(1<<32-Et(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=sa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=MS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},CS={readContext:Jn,useCallback:Gm,useContext:Jn,useEffect:ef,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Qc,useRef:Om,useState:function(){return Qc(oa)},useDebugValue:tf,useDeferredValue:function(i){var s=ei();return jm(s,tn.memoizedState,i)},useTransition:function(){var i=Qc(oa)[0],s=ei().memoizedState;return[i,s]},useMutableSource:Pm,useSyncExternalStore:bm,useId:Xm,unstable_isNewReconciler:!1},RS={readContext:Jn,useCallback:Gm,useContext:Jn,useEffect:ef,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Jc,useRef:Om,useState:function(){return Jc(oa)},useDebugValue:tf,useDeferredValue:function(i){var s=ei();return tn===null?s.memoizedState=i:jm(s,tn.memoizedState,i)},useTransition:function(){var i=Jc(oa)[0],s=ei().memoizedState;return[i,s]},useMutableSource:Pm,useSyncExternalStore:bm,useId:Xm,unstable_isNewReconciler:!1};function fi(i,s){if(i&&i.defaultProps){s=q({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function nf(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:q({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Dl={isMounted:function(i){return(i=i._reactInternals)?Ti(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=bn(),m=wr(i),_=zi(f,m);_.payload=s,a!=null&&(_.callback=a),s=Sr(i,_,m),s!==null&&(pi(s,i,m,f),El(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=bn(),m=wr(i),_=zi(f,m);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Sr(i,_,m),s!==null&&(pi(s,i,m,f),El(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=bn(),f=wr(i),m=zi(a,f);m.tag=2,s!=null&&(m.callback=s),s=Sr(i,m,f),s!==null&&(pi(s,i,f,a),El(s,i,f))}};function Km(i,s,a,f,m,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,E):s.prototype&&s.prototype.isPureReactComponent?!Yo(a,f)||!Yo(m,_):!0}function Zm(i,s,a){var f=!1,m=_r,_=s.contextType;return typeof _=="object"&&_!==null?_=Jn(_):(m=Nn(s)?Zr:vn.current,f=s.contextTypes,_=(f=f!=null)?Vs(i,m):_r),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Dl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function Qm(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Dl.enqueueReplaceState(s,s.state,null)}function rf(i,s,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},Gc(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=Jn(_):(_=Nn(s)?Zr:vn.current,m.context=Vs(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(nf(i,s,_,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Dl.enqueueReplaceState(m,m.state,null),Tl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function qs(i,s){try{var a="",f=s;do a+=fe(f),f=f.return;while(f);var m=a}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function sf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function of(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function Jm(i,s,a){a=zi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){kl||(kl=!0,Sf=f),of(i,s)},a}function eg(i,s,a){a=zi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;a.payload=function(){return f(m)},a.callback=function(){of(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){of(i,s),typeof f!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function tg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new PS;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(a)||(m.add(a),i=GS.bind(null,i,s,a),s.then(i,i))}function ng(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ig(i,s,a,f,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=zi(-1,1),s.tag=2,Sr(a,s,1))),a.lanes|=1),i)}var bS=R.ReactCurrentOwner,Un=!1;function Pn(i,s,a,f){s.child=i===null?Em(s,null,a,f):Ws(s,i.child,a,f)}function rg(i,s,a,f,m){a=a.render;var _=s.ref;return Xs(s,m),f=Kc(i,s,a,f,_,m),a=Zc(),i!==null&&!Un?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Hi(i,s,m)):(Vt&&a&&Ic(s),s.flags|=1,Pn(i,s,f,m),s.child)}function sg(i,s,a,f,m){if(i===null){var _=a.type;return typeof _=="function"&&!Rf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,og(i,s,_,f,m)):(i=Wl(a.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,!(i.lanes&m)){var E=_.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(E,f)&&i.ref===s.ref)return Hi(i,s,m)}return s.flags|=1,i=Cr(_,f),i.ref=s.ref,i.return=s,s.child=i}function og(i,s,a,f,m){if(i!==null){var _=i.memoizedProps;if(Yo(_,f)&&i.ref===s.ref)if(Un=!1,s.pendingProps=f=_,(i.lanes&m)!==0)i.flags&131072&&(Un=!0);else return s.lanes=i.lanes,Hi(i,s,m)}return af(i,s,a,f,m)}function ag(i,s,a){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ks,Xn),Xn|=a;else{if(!(a&1073741824))return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Nt(Ks,Xn),Xn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Nt(Ks,Xn),Xn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Nt(Ks,Xn),Xn|=f;return Pn(i,s,m,a),s.child}function lg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function af(i,s,a,f,m){var _=Nn(a)?Zr:vn.current;return _=Vs(s,_),Xs(s,m),a=Kc(i,s,a,f,_,m),f=Zc(),i!==null&&!Un?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,Hi(i,s,m)):(Vt&&f&&Ic(s),s.flags|=1,Pn(i,s,a,m),s.child)}function ug(i,s,a,f,m){if(Nn(a)){var _=!0;ml(s)}else _=!1;if(Xs(s,m),s.stateNode===null)Il(i,s),Zm(s,a,f),rf(s,a,f,m),f=!0;else if(i===null){var E=s.stateNode,I=s.memoizedProps;E.props=I;var z=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Jn(ee):(ee=Nn(a)?Zr:vn.current,ee=Vs(s,ee));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==f||z!==ee)&&Qm(s,E,f,ee),xr=!1;var ge=s.memoizedState;E.state=ge,Tl(s,f,E,m),z=s.memoizedState,I!==f||ge!==z||In.current||xr?(typeof _e=="function"&&(nf(s,a,_e,f),z=s.memoizedState),(I=xr||Km(s,a,I,f,ge,z,ee))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),E.props=f,E.state=z,E.context=ee,f=I):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{E=s.stateNode,wm(i,s),I=s.memoizedProps,ee=s.type===s.elementType?I:fi(s.type,I),E.props=ee,xe=s.pendingProps,ge=E.context,z=a.contextType,typeof z=="object"&&z!==null?z=Jn(z):(z=Nn(a)?Zr:vn.current,z=Vs(s,z));var Ie=a.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==z)&&Qm(s,E,f,z),xr=!1,ge=s.memoizedState,E.state=ge,Tl(s,f,E,m);var ze=s.memoizedState;I!==xe||ge!==ze||In.current||xr?(typeof Ie=="function"&&(nf(s,a,Ie,f),ze=s.memoizedState),(ee=xr||Km(s,a,ee,f,ge,ze,z)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,ze,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,ze,z)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=ze),E.props=f,E.state=ze,E.context=z,f=ee):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return lf(i,s,a,f,_,m)}function lf(i,s,a,f,m,_){lg(i,s);var E=(s.flags&128)!==0;if(!f&&!E)return m&&pm(s,a,!1),Hi(i,s,_);f=s.stateNode,bS.current=s;var I=E&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&E?(s.child=Ws(s,i.child,null,_),s.child=Ws(s,null,I,_)):Pn(i,s,I,_),s.memoizedState=f.state,m&&pm(s,a,!0),s.child}function cg(i){var s=i.stateNode;s.pendingContext?dm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&dm(i,s.context,!1),Wc(i,s.containerInfo)}function fg(i,s,a,f,m){return Gs(),Oc(m),s.flags|=256,Pn(i,s,a,f),s.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(i){return{baseLanes:i,cachePool:null,transitions:null}}function dg(i,s,a){var f=s.pendingProps,m=zt.current,_=!1,E=(s.flags&128)!==0,I;if((I=E)||(I=i!==null&&i.memoizedState===null?!1:(m&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Nt(zt,m&1),i===null)return Fc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(E=f.children,i=f.fallback,_?(f=s.mode,_=s.child,E={mode:"hidden",children:E},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=E):_=jl(E,f,0,null),i=as(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=cf(a),s.memoizedState=uf,i):ff(s,E));if(m=i.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return DS(i,s,E,f,I,m,a);if(_){_=f.fallback,E=s.mode,m=i.child,I=m.sibling;var z={mode:"hidden",children:f.children};return!(E&1)&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Cr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),I!==null?_=Cr(I,_):(_=as(_,E,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,E=i.child.memoizedState,E=E===null?cf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~a,s.memoizedState=uf,f}return _=i.child,i=_.sibling,f=Cr(_,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function ff(i,s){return s=jl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ll(i,s,a,f){return f!==null&&Oc(f),Ws(s,i.child,null,a),i=ff(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function DS(i,s,a,f,m,_,E){if(a)return s.flags&256?(s.flags&=-257,f=sf(Error(t(422))),Ll(i,s,E,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=jl({mode:"visible",children:f.children},m,0,null),_=as(_,m,E,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,s.mode&1&&Ws(s,i.child,null,E),s.child.memoizedState=cf(E),s.memoizedState=uf,_);if(!(s.mode&1))return Ll(i,s,E,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var I=f.dgst;return f=I,_=Error(t(419)),f=sf(_,f,void 0),Ll(i,s,E,f)}if(I=(E&i.childLanes)!==0,Un||I){if(f=an,f!==null){switch(E&-E){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|E)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Vi(i,m),pi(f,i,m,-1))}return Cf(),f=sf(Error(t(421))),Ll(i,s,E,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=WS.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,jn=gr(m.nextSibling),Wn=s,Vt=!0,ci=null,i!==null&&(Zn[Qn++]=ki,Zn[Qn++]=Bi,Zn[Qn++]=Qr,ki=i.id,Bi=i.overflow,Qr=s),s=ff(s,f.children),s.flags|=4096,s)}function hg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),zc(i.return,s,a)}function df(i,s,a,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=m)}function pg(i,s,a){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(Pn(i,s,f.children,a),f=zt.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&hg(i,a,s);else if(i.tag===19)hg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Nt(zt,f),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&wl(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),df(s,!1,m,a,_);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&wl(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}df(s,!0,a,null,_);break;case"together":df(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Il(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Hi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),is|=s.lanes,!(a&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Cr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Cr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function LS(i,s,a){switch(s.tag){case 3:cg(s),Gs();break;case 5:Rm(s);break;case 1:Nn(s.type)&&ml(s);break;case 4:Wc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Nt(Sl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Nt(zt,zt.current&1),s.flags|=128,null):a&s.child.childLanes?dg(i,s,a):(Nt(zt,zt.current&1),i=Hi(i,s,a),i!==null?i.sibling:null);Nt(zt,zt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,i.flags&128){if(f)return pg(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Nt(zt,zt.current),f)break;return null;case 22:case 23:return s.lanes=0,ag(i,s,a)}return Hi(i,s,a)}var mg,hf,gg,vg;mg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hf=function(){},gg=function(i,s,a,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,ts(Ai.current);var _=null;switch(a){case"input":m=H(i,m),f=H(i,f),_=[];break;case"select":m=q({},m,{value:void 0}),f=q({},f,{value:void 0}),_=[];break;case"textarea":m=w(i,m),f=w(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=dl)}dt(a,f);var E;a=null;for(ee in m)if(!f.hasOwnProperty(ee)&&m.hasOwnProperty(ee)&&m[ee]!=null)if(ee==="style"){var I=m[ee];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?_||(_=[]):(_=_||[]).push(ee,null));for(ee in f){var z=f[ee];if(I=m!=null?m[ee]:void 0,f.hasOwnProperty(ee)&&z!==I&&(z!=null||I!=null))if(ee==="style")if(I){for(E in I)!I.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in z)z.hasOwnProperty(E)&&I[E]!==z[E]&&(a||(a={}),a[E]=z[E])}else a||(_||(_=[]),_.push(ee,a)),a=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(_=_||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Ft("scroll",i),_||I===z||(_=[])):(_=_||[]).push(ee,z))}a&&(_=_||[]).push("style",a);var ee=_;(s.updateQueue=ee)&&(s.flags|=4)}},vg=function(i,s,a,f){a!==f&&(s.flags|=4)};function la(i,s){if(!Vt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function yn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function IS(i,s,a){var f=s.pendingProps;switch(Nc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(s),null;case 1:return Nn(s.type)&&pl(),yn(s),null;case 3:return f=s.stateNode,Ys(),Ot(In),Ot(vn),Yc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(yl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,ci!==null&&(Tf(ci),ci=null))),hf(i,s),yn(s),null;case 5:jc(s);var m=ts(ia.current);if(a=s.type,i!==null&&s.stateNode!=null)gg(i,s,a,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return yn(s),null}if(i=ts(Ai.current),yl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[wi]=s,f[Qo]=_,i=(s.mode&1)!==0,a){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(m=0;m<$o.length;m++)Ft($o[m],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":wn(f,_),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",f);break;case"textarea":Z(f,_),Ft("invalid",f)}dt(a,_),m=null;for(var E in _)if(_.hasOwnProperty(E)){var I=_[E];E==="children"?typeof I=="string"?f.textContent!==I&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,I,i),m=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,I,i),m=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ft("scroll",f)}switch(a){case"input":Pt(f),Ye(f,_,!0);break;case"textarea":Pt(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=dl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{E=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=E.createElement(a,{is:f.is}):(i=E.createElement(a),a==="select"&&(E=i,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):i=E.createElementNS(i,a),i[wi]=s,i[Qo]=f,mg(i,s,!1,!1),s.stateNode=i;e:{switch(E=st(a,f),a){case"dialog":Ft("cancel",i),Ft("close",i),m=f;break;case"iframe":case"object":case"embed":Ft("load",i),m=f;break;case"video":case"audio":for(m=0;m<$o.length;m++)Ft($o[m],i);m=f;break;case"source":Ft("error",i),m=f;break;case"img":case"image":case"link":Ft("error",i),Ft("load",i),m=f;break;case"details":Ft("toggle",i),m=f;break;case"input":wn(i,f),m=H(i,f),Ft("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=q({},f,{value:void 0}),Ft("invalid",i);break;case"textarea":Z(i,f),m=w(i,f),Ft("invalid",i);break;default:m=f}dt(a,m),I=m;for(_ in I)if(I.hasOwnProperty(_)){var z=I[_];_==="style"?tt(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Fe(i,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ct(i,z):typeof z=="number"&&ct(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Ft("scroll",i):z!=null&&b(i,_,z,E))}switch(a){case"input":Pt(i),Ye(i,f,!1);break;case"textarea":Pt(i),ve(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?L(i,!!f.multiple,_,!1):f.defaultValue!=null&&L(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return yn(s),null;case 6:if(i&&s.stateNode!=null)vg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ts(ia.current),ts(Ai.current),yl(s)){if(f=s.stateNode,a=s.memoizedProps,f[wi]=s,(_=f.nodeValue!==a)&&(i=Wn,i!==null))switch(i.tag){case 3:fl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&fl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[wi]=s,s.stateNode=f}return yn(s),null;case 13:if(Ot(zt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&jn!==null&&s.mode&1&&!(s.flags&128))xm(),Gs(),s.flags|=98560,_=!1;else if(_=yl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[wi]=s}else Gs(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;yn(s),_=!1}else ci!==null&&(Tf(ci),ci=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||zt.current&1?nn===0&&(nn=3):Cf())),s.updateQueue!==null&&(s.flags|=4),yn(s),null);case 4:return Ys(),hf(i,s),i===null&&Ko(s.stateNode.containerInfo),yn(s),null;case 10:return Vc(s.type._context),yn(s),null;case 17:return Nn(s.type)&&pl(),yn(s),null;case 19:if(Ot(zt),_=s.memoizedState,_===null)return yn(s),null;if(f=(s.flags&128)!==0,E=_.rendering,E===null)if(f)la(_,!1);else{if(nn!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(E=wl(i),E!==null){for(s.flags|=128,la(_,!1),f=E.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Nt(zt,zt.current&1|2),s.child}i=i.sibling}_.tail!==null&&G()>Zs&&(s.flags|=128,f=!0,la(_,!1),s.lanes=4194304)}else{if(!f)if(i=wl(E),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),la(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!Vt)return yn(s),null}else 2*G()-_.renderingStartTime>Zs&&a!==1073741824&&(s.flags|=128,f=!0,la(_,!1),s.lanes=4194304);_.isBackwards?(E.sibling=s.child,s.child=E):(a=_.last,a!==null?a.sibling=E:s.child=E,_.last=E)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=G(),s.sibling=null,a=zt.current,Nt(zt,f?a&1|2:a&1),s):(yn(s),null);case 22:case 23:return Af(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?Xn&1073741824&&(yn(s),s.subtreeFlags&6&&(s.flags|=8192)):yn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function NS(i,s){switch(Nc(s),s.tag){case 1:return Nn(s.type)&&pl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ys(),Ot(In),Ot(vn),Yc(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return jc(s),null;case 13:if(Ot(zt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ot(zt),null;case 4:return Ys(),null;case 10:return Vc(s.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var Nl=!1,xn=!1,US=typeof WeakSet=="function"?WeakSet:Set,ke=null;function $s(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){jt(i,s,f)}else a.current=null}function pf(i,s,a){try{a()}catch(f){jt(i,s,f)}}var _g=!1;function FS(i,s){if(wc=el,i=Kp(),vc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var E=0,I=-1,z=-1,ee=0,_e=0,xe=i,ge=null;t:for(;;){for(var Ie;xe!==a||m!==0&&xe.nodeType!==3||(I=E+m),xe!==_||f!==0&&xe.nodeType!==3||(z=E+f),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===i)break t;if(ge===a&&++ee===m&&(I=E),ge===_&&++_e===f&&(z=E),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:i,selectionRange:a},el=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var ze=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,qt=ze.memoizedState,Y=s.stateNode,W=Y.getSnapshotBeforeUpdate(s.elementType===s.type?He:fi(s.type,He),qt);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){jt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return ze=_g,_g=!1,ze}function ua(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&pf(s,a,_)}m=m.next}while(m!==f)}}function Ul(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function mf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function yg(i){var s=i.alternate;s!==null&&(i.alternate=null,yg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[wi],delete s[Qo],delete s[bc],delete s[_S],delete s[yS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function xg(i){return i.tag===5||i.tag===3||i.tag===4}function Sg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dl));else if(f!==4&&(i=i.child,i!==null))for(gf(i,s,a),i=i.sibling;i!==null;)gf(i,s,a),i=i.sibling}function vf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(vf(i,s,a),i=i.sibling;i!==null;)vf(i,s,a),i=i.sibling}var fn=null,di=!1;function Mr(i,s,a){for(a=a.child;a!==null;)Mg(i,s,a),a=a.sibling}function Mg(i,s,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Xe,a)}catch{}switch(a.tag){case 5:xn||$s(a,s);case 6:var f=fn,m=di;fn=null,Mr(i,s,a),fn=f,di=m,fn!==null&&(di?(i=fn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(di?(i=fn,a=a.stateNode,i.nodeType===8?Pc(i.parentNode,a):i.nodeType===1&&Pc(i,a),zo(i)):Pc(fn,a.stateNode));break;case 4:f=fn,m=di,fn=a.stateNode.containerInfo,di=!0,Mr(i,s,a),fn=f,di=m;break;case 0:case 11:case 14:case 15:if(!xn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,E=_.destroy;_=_.tag,E!==void 0&&(_&2||_&4)&&pf(a,s,E),m=m.next}while(m!==f)}Mr(i,s,a);break;case 1:if(!xn&&($s(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){jt(a,s,I)}Mr(i,s,a);break;case 21:Mr(i,s,a);break;case 22:a.mode&1?(xn=(f=xn)||a.memoizedState!==null,Mr(i,s,a),xn=f):Mr(i,s,a);break;default:Mr(i,s,a)}}function Eg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new US),s.forEach(function(f){var m=jS.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function hi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var _=i,E=s,I=E;e:for(;I!==null;){switch(I.tag){case 5:fn=I.stateNode,di=!1;break e;case 3:fn=I.stateNode.containerInfo,di=!0;break e;case 4:fn=I.stateNode.containerInfo,di=!0;break e}I=I.return}if(fn===null)throw Error(t(160));Mg(_,E,m),fn=null,di=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ee){jt(m,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Tg(s,i),s=s.sibling}function Tg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hi(s,i),Ri(i),f&4){try{ua(3,i,i.return),Ul(3,i)}catch(He){jt(i,i.return,He)}try{ua(5,i,i.return)}catch(He){jt(i,i.return,He)}}break;case 1:hi(s,i),Ri(i),f&512&&a!==null&&$s(a,a.return);break;case 5:if(hi(s,i),Ri(i),f&512&&a!==null&&$s(a,a.return),i.flags&32){var m=i.stateNode;try{ct(m,"")}catch(He){jt(i,i.return,He)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,E=a!==null?a.memoizedProps:_,I=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&pt(m,_),st(I,E);var ee=st(I,_);for(E=0;E<z.length;E+=2){var _e=z[E],xe=z[E+1];_e==="style"?tt(m,xe):_e==="dangerouslySetInnerHTML"?Fe(m,xe):_e==="children"?ct(m,xe):b(m,_e,xe,ee)}switch(I){case"input":ft(m,_);break;case"textarea":me(m,_);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?L(m,!!_.multiple,Ie,!1):ge!==!!_.multiple&&(_.defaultValue!=null?L(m,!!_.multiple,_.defaultValue,!0):L(m,!!_.multiple,_.multiple?[]:"",!1))}m[Qo]=_}catch(He){jt(i,i.return,He)}}break;case 6:if(hi(s,i),Ri(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(He){jt(i,i.return,He)}}break;case 3:if(hi(s,i),Ri(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(s.containerInfo)}catch(He){jt(i,i.return,He)}break;case 4:hi(s,i),Ri(i);break;case 13:hi(s,i),Ri(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(xf=G())),f&4&&Eg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(xn=(ee=xn)||_e,hi(s,i),xn=ee):hi(s,i),Ri(i),f&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!_e&&i.mode&1)for(ke=i,_e=i.child;_e!==null;){for(xe=ke=_e;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:ua(4,ge,ge.return);break;case 1:$s(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(He){jt(f,a,He)}}break;case 5:$s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Cg(xe);continue}}Ie!==null?(Ie.return=ge,ke=Ie):Cg(xe)}_e=_e.sibling}e:for(_e=null,xe=i;;){if(xe.tag===5){if(_e===null){_e=xe;try{m=xe.stateNode,ee?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=xe.stateNode,z=xe.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=Ke("display",E))}catch(He){jt(i,i.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(He){jt(i,i.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:hi(s,i),Ri(i),f&4&&Eg(i);break;case 21:break;default:hi(s,i),Ri(i)}}function Ri(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(xg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ct(m,""),f.flags&=-33);var _=Sg(i);vf(i,_,m);break;case 3:case 4:var E=f.stateNode.containerInfo,I=Sg(i);gf(i,I,E);break;default:throw Error(t(161))}}catch(z){jt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function OS(i,s,a){ke=i,wg(i)}function wg(i,s,a){for(var f=(i.mode&1)!==0;ke!==null;){var m=ke,_=m.child;if(m.tag===22&&f){var E=m.memoizedState!==null||Nl;if(!E){var I=m.alternate,z=I!==null&&I.memoizedState!==null||xn;I=Nl;var ee=xn;if(Nl=E,(xn=z)&&!ee)for(ke=m;ke!==null;)E=ke,z=E.child,E.tag===22&&E.memoizedState!==null?Rg(m):z!==null?(z.return=E,ke=z):Rg(m);for(;_!==null;)ke=_,wg(_),_=_.sibling;ke=m,Nl=I,xn=ee}Ag(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,ke=_):Ag(i)}}function Ag(i){for(;ke!==null;){var s=ke;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:xn||Ul(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!xn)if(a===null)f.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:fi(s.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Cm(s,_,f);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Cm(s,E,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&zo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||s.flags&512&&mf(s)}catch(ge){jt(s,s.return,ge)}}if(s===i){ke=null;break}if(a=s.sibling,a!==null){a.return=s.return,ke=a;break}ke=s.return}}function Cg(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ke=a;break}ke=s.return}}function Rg(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ul(4,s)}catch(z){jt(s,a,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){jt(s,m,z)}}var _=s.return;try{mf(s)}catch(z){jt(s,_,z)}break;case 5:var E=s.return;try{mf(s)}catch(z){jt(s,E,z)}}}catch(z){jt(s,s.return,z)}if(s===i){ke=null;break}var I=s.sibling;if(I!==null){I.return=s.return,ke=I;break}ke=s.return}}var kS=Math.ceil,Fl=R.ReactCurrentDispatcher,_f=R.ReactCurrentOwner,ti=R.ReactCurrentBatchConfig,St=0,an=null,Qt=null,dn=0,Xn=0,Ks=vr(0),nn=0,ca=null,is=0,Ol=0,yf=0,fa=null,Fn=null,xf=0,Zs=1/0,Gi=null,kl=!1,Sf=null,Er=null,Bl=!1,Tr=null,Vl=0,da=0,Mf=null,zl=-1,Hl=0;function bn(){return St&6?G():zl!==-1?zl:zl=G()}function wr(i){return i.mode&1?St&2&&dn!==0?dn&-dn:SS.transition!==null?(Hl===0&&(Hl=Rn()),Hl):(i=mt,i!==0||(i=window.event,i=i===void 0?16:bp(i.type)),i):1}function pi(i,s,a,f){if(50<da)throw da=0,Mf=null,Error(t(185));Yt(i,a,f),(!(St&2)||i!==an)&&(i===an&&(!(St&2)&&(Ol|=a),nn===4&&Ar(i,dn)),On(i,f),a===1&&St===0&&!(s.mode&1)&&(Zs=G()+500,gl&&yr()))}function On(i,s){var a=i.callbackNode;qr(i,s);var f=li(i,i===an?dn:0);if(f===0)a!==null&&X(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&X(a),s===1)i.tag===0?xS(bg.bind(null,i)):mm(bg.bind(null,i)),gS(function(){!(St&6)&&yr()}),a=null;else{switch(Mp(f)){case 1:a=Pe;break;case 4:a=Ne;break;case 16:a=Oe;break;case 536870912:a=it;break;default:a=Oe}a=kg(a,Pg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Pg(i,s){if(zl=-1,Hl=0,St&6)throw Error(t(327));var a=i.callbackNode;if(Qs()&&i.callbackNode!==a)return null;var f=li(i,i===an?dn:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=Gl(i,f);else{s=f;var m=St;St|=2;var _=Lg();(an!==i||dn!==s)&&(Gi=null,Zs=G()+500,ss(i,s));do try{zS();break}catch(I){Dg(i,I)}while(!0);Bc(),Fl.current=_,St=m,Qt!==null?s=0:(an=null,dn=0,s=nn)}if(s!==0){if(s===2&&(m=bt(i),m!==0&&(f=m,s=Ef(i,m))),s===1)throw a=ca,ss(i,0),Ar(i,f),On(i,G()),a;if(s===6)Ar(i,f);else{if(m=i.current.alternate,!(f&30)&&!BS(m)&&(s=Gl(i,f),s===2&&(_=bt(i),_!==0&&(f=_,s=Ef(i,_))),s===1))throw a=ca,ss(i,0),Ar(i,f),On(i,G()),a;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:os(i,Fn,Gi);break;case 3:if(Ar(i,f),(f&130023424)===f&&(s=xf+500-G(),10<s)){if(li(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){bn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Rc(os.bind(null,i,Fn,Gi),s);break}os(i,Fn,Gi);break;case 4:if(Ar(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var E=31-Et(f);_=1<<E,E=s[E],E>m&&(m=E),f&=~_}if(f=m,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*kS(f/1960))-f,10<f){i.timeoutHandle=Rc(os.bind(null,i,Fn,Gi),f);break}os(i,Fn,Gi);break;case 5:os(i,Fn,Gi);break;default:throw Error(t(329))}}}return On(i,G()),i.callbackNode===a?Pg.bind(null,i):null}function Ef(i,s){var a=fa;return i.current.memoizedState.isDehydrated&&(ss(i,s).flags|=256),i=Gl(i,s),i!==2&&(s=Fn,Fn=a,s!==null&&Tf(s)),i}function Tf(i){Fn===null?Fn=i:Fn.push.apply(Fn,i)}function BS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],_=m.getSnapshot;m=m.value;try{if(!ui(_(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ar(i,s){for(s&=~yf,s&=~Ol,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Et(s),f=1<<a;i[a]=-1,s&=~f}}function bg(i){if(St&6)throw Error(t(327));Qs();var s=li(i,0);if(!(s&1))return On(i,G()),null;var a=Gl(i,s);if(i.tag!==0&&a===2){var f=bt(i);f!==0&&(s=f,a=Ef(i,f))}if(a===1)throw a=ca,ss(i,0),Ar(i,s),On(i,G()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,os(i,Fn,Gi),On(i,G()),null}function wf(i,s){var a=St;St|=1;try{return i(s)}finally{St=a,St===0&&(Zs=G()+500,gl&&yr())}}function rs(i){Tr!==null&&Tr.tag===0&&!(St&6)&&Qs();var s=St;St|=1;var a=ti.transition,f=mt;try{if(ti.transition=null,mt=1,i)return i()}finally{mt=f,ti.transition=a,St=s,!(St&6)&&yr()}}function Af(){Xn=Ks.current,Ot(Ks)}function ss(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,mS(a)),Qt!==null)for(a=Qt.return;a!==null;){var f=a;switch(Nc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pl();break;case 3:Ys(),Ot(In),Ot(vn),Yc();break;case 5:jc(f);break;case 4:Ys();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Vc(f.type._context);break;case 22:case 23:Af()}a=a.return}if(an=i,Qt=i=Cr(i.current,null),dn=Xn=s,nn=0,ca=null,yf=Ol=is=0,Fn=fa=null,es!==null){for(s=0;s<es.length;s++)if(a=es[s],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,_=a.pending;if(_!==null){var E=_.next;_.next=m,f.next=E}a.pending=f}es=null}return i}function Dg(i,s){do{var a=Qt;try{if(Bc(),Al.current=bl,Cl){for(var f=Ht.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Cl=!1}if(ns=0,on=tn=Ht=null,ra=!1,sa=0,_f.current=null,a===null||a.return===null){nn=1,ca=s,Qt=null;break}e:{var _=i,E=a.return,I=a,z=s;if(s=dn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,_e=I,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=ng(E);if(Ie!==null){Ie.flags&=-257,ig(Ie,E,I,_,s),Ie.mode&1&&tg(_,ee,s),s=Ie,z=ee;var ze=s.updateQueue;if(ze===null){var He=new Set;He.add(z),s.updateQueue=He}else ze.add(z);break e}else{if(!(s&1)){tg(_,ee,s),Cf();break e}z=Error(t(426))}}else if(Vt&&I.mode&1){var qt=ng(E);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),ig(qt,E,I,_,s),Oc(qs(z,I));break e}}_=z=qs(z,I),nn!==4&&(nn=2),fa===null?fa=[_]:fa.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=Jm(_,z,s);Am(_,Y);break e;case 1:I=z;var W=_.type,K=_.stateNode;if(!(_.flags&128)&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Er===null||!Er.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=eg(_,I,s);Am(_,Te);break e}}_=_.return}while(_!==null)}Ng(a)}catch(We){s=We,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Lg(){var i=Fl.current;return Fl.current=bl,i===null?bl:i}function Cf(){(nn===0||nn===3||nn===2)&&(nn=4),an===null||!(is&268435455)&&!(Ol&268435455)||Ar(an,dn)}function Gl(i,s){var a=St;St|=2;var f=Lg();(an!==i||dn!==s)&&(Gi=null,ss(i,s));do try{VS();break}catch(m){Dg(i,m)}while(!0);if(Bc(),St=a,Fl.current=f,Qt!==null)throw Error(t(261));return an=null,dn=0,nn}function VS(){for(;Qt!==null;)Ig(Qt)}function zS(){for(;Qt!==null&&!te();)Ig(Qt)}function Ig(i){var s=Og(i.alternate,i,Xn);i.memoizedProps=i.pendingProps,s===null?Ng(i):Qt=s,_f.current=null}function Ng(i){var s=i;do{var a=s.alternate;if(i=s.return,s.flags&32768){if(a=NS(a,s),a!==null){a.flags&=32767,Qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Qt=null;return}}else if(a=IS(a,s,Xn),a!==null){Qt=a;return}if(s=s.sibling,s!==null){Qt=s;return}Qt=s=i}while(s!==null);nn===0&&(nn=5)}function os(i,s,a){var f=mt,m=ti.transition;try{ti.transition=null,mt=1,HS(i,s,a,f)}finally{ti.transition=m,mt=f}return null}function HS(i,s,a,f){do Qs();while(Tr!==null);if(St&6)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(gn(i,_),i===an&&(Qt=an=null,dn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Bl||(Bl=!0,kg(Oe,function(){return Qs(),null})),_=(a.flags&15990)!==0,a.subtreeFlags&15990||_){_=ti.transition,ti.transition=null;var E=mt;mt=1;var I=St;St|=4,_f.current=null,FS(i,a),Tg(a,i),lS(Ac),el=!!wc,Ac=wc=null,i.current=a,OS(a),ne(),St=I,mt=E,ti.transition=_}else i.current=a;if(Bl&&(Bl=!1,Tr=i,Vl=m),_=i.pendingLanes,_===0&&(Er=null),Mt(a.stateNode),On(i,G()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(kl)throw kl=!1,i=Sf,Sf=null,i;return Vl&1&&i.tag!==0&&Qs(),_=i.pendingLanes,_&1?i===Mf?da++:(da=0,Mf=i):da=0,yr(),null}function Qs(){if(Tr!==null){var i=Mp(Vl),s=ti.transition,a=mt;try{if(ti.transition=null,mt=16>i?16:i,Tr===null)var f=!1;else{if(i=Tr,Tr=null,Vl=0,St&6)throw Error(t(331));var m=St;for(St|=4,ke=i.current;ke!==null;){var _=ke,E=_.child;if(ke.flags&16){var I=_.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ee=I[z];for(ke=ee;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:ua(8,_e,_)}var xe=_e.child;if(xe!==null)xe.return=_e,ke=xe;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ie=_e.return;if(yg(_e),_e===ee){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var ze=_.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var qt=He.sibling;He.sibling=null,He=qt}while(He!==null)}}ke=_}}if(_.subtreeFlags&2064&&E!==null)E.return=_,ke=E;else e:for(;ke!==null;){if(_=ke,_.flags&2048)switch(_.tag){case 0:case 11:case 15:ua(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,ke=Y;break e}ke=_.return}}var W=i.current;for(ke=W;ke!==null;){E=ke;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,ke=K;else e:for(E=W;ke!==null;){if(I=ke,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Ul(9,I)}}catch(We){jt(I,I.return,We)}if(I===E){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(St=m,yr(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Xe,i)}catch{}f=!0}return f}finally{mt=a,ti.transition=s}}return!1}function Ug(i,s,a){s=qs(a,s),s=Jm(i,s,1),i=Sr(i,s,1),s=bn(),i!==null&&(Yt(i,1,s),On(i,s))}function jt(i,s,a){if(i.tag===3)Ug(i,i,a);else for(;s!==null;){if(s.tag===3){Ug(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Er===null||!Er.has(f))){i=qs(a,i),i=eg(s,i,1),s=Sr(s,i,1),i=bn(),s!==null&&(Yt(s,1,i),On(s,i));break}}s=s.return}}function GS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=bn(),i.pingedLanes|=i.suspendedLanes&a,an===i&&(dn&a)===a&&(nn===4||nn===3&&(dn&130023424)===dn&&500>G()-xf?ss(i,0):yf|=a),On(i,s)}function Fg(i,s){s===0&&(i.mode&1?(s=vt,vt<<=1,!(vt&130023424)&&(vt=4194304)):s=1);var a=bn();i=Vi(i,s),i!==null&&(Yt(i,s,a),On(i,a))}function WS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Fg(i,a)}function jS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Fg(i,a)}var Og;Og=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||In.current)Un=!0;else{if(!(i.lanes&a)&&!(s.flags&128))return Un=!1,LS(i,s,a);Un=!!(i.flags&131072)}else Un=!1,Vt&&s.flags&1048576&&gm(s,_l,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Il(i,s),i=s.pendingProps;var m=Vs(s,vn.current);Xs(s,a),m=Kc(null,s,f,i,m,a);var _=Zc();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Nn(f)?(_=!0,ml(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Gc(s),m.updater=Dl,s.stateNode=m,m._reactInternals=s,rf(s,f,i,a),s=lf(null,s,f,!0,_,a)):(s.tag=0,Vt&&_&&Ic(s),Pn(null,s,m,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Il(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=YS(f),i=fi(f,i),m){case 0:s=af(null,s,f,i,a);break e;case 1:s=ug(null,s,f,i,a);break e;case 11:s=rg(null,s,f,i,a);break e;case 14:s=sg(null,s,f,fi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:fi(f,m),af(i,s,f,m,a);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:fi(f,m),ug(i,s,f,m,a);case 3:e:{if(cg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,wm(i,s),Tl(s,f,null,a);var E=s.memoizedState;if(f=E.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=qs(Error(t(423)),s),s=fg(i,s,f,a,m);break e}else if(f!==m){m=qs(Error(t(424)),s),s=fg(i,s,f,a,m);break e}else for(jn=gr(s.stateNode.containerInfo.firstChild),Wn=s,Vt=!0,ci=null,a=Em(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),f===m){s=Hi(i,s,a);break e}Pn(i,s,f,a)}s=s.child}return s;case 5:return Rm(s),i===null&&Fc(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,E=m.children,Cc(f,m)?E=null:_!==null&&Cc(f,_)&&(s.flags|=32),lg(i,s),Pn(i,s,E,a),s.child;case 6:return i===null&&Fc(s),null;case 13:return dg(i,s,a);case 4:return Wc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Ws(s,null,f,a):Pn(i,s,f,a),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:fi(f,m),rg(i,s,f,m,a);case 7:return Pn(i,s,s.pendingProps,a),s.child;case 8:return Pn(i,s,s.pendingProps.children,a),s.child;case 12:return Pn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,E=m.value,Nt(Sl,f._currentValue),f._currentValue=E,_!==null)if(ui(_.value,E)){if(_.children===m.children&&!In.current){s=Hi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){E=_.child;for(var z=I.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=zi(-1,a&-a),z.tag=2;var ee=_.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ee.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),zc(_.return,a,s),I.lanes|=a;break}z=z.next}}else if(_.tag===10)E=_.type===s.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),zc(E,a,s),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===s){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Pn(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Xs(s,a),m=Jn(m),f=f(m),s.flags|=1,Pn(i,s,f,a),s.child;case 14:return f=s.type,m=fi(f,s.pendingProps),m=fi(f.type,m),sg(i,s,f,m,a);case 15:return og(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:fi(f,m),Il(i,s),s.tag=1,Nn(f)?(i=!0,ml(s)):i=!1,Xs(s,a),Zm(s,f,m),rf(s,f,m,a),lf(null,s,f,!0,i,a);case 19:return pg(i,s,a);case 22:return ag(i,s,a)}throw Error(t(156,s.tag))};function kg(i,s){return A(i,s)}function XS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(i,s,a,f){return new XS(i,s,a,f)}function Rf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function YS(i){if(typeof i=="function")return Rf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===oe)return 11;if(i===de)return 14}return 2}function Cr(i,s){var a=i.alternate;return a===null?(a=ni(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Wl(i,s,a,f,m,_){var E=2;if(f=i,typeof i=="function")Rf(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case U:return as(a.children,m,_,s);case B:E=8,m|=8;break;case P:return i=ni(12,a,s,m|2),i.elementType=P,i.lanes=_,i;case Q:return i=ni(13,a,s,m),i.elementType=Q,i.lanes=_,i;case ce:return i=ni(19,a,s,m),i.elementType=ce,i.lanes=_,i;case se:return jl(a,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:E=10;break e;case k:E=9;break e;case oe:E=11;break e;case de:E=14;break e;case le:E=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ni(E,a,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function as(i,s,a,f){return i=ni(7,i,f,s),i.lanes=a,i}function jl(i,s,a,f){return i=ni(22,i,f,s),i.elementType=se,i.lanes=a,i.stateNode={isHidden:!1},i}function Pf(i,s,a){return i=ni(6,i,null,s),i.lanes=a,i}function bf(i,s,a){return s=ni(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function qS(i,s,a,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Df(i,s,a,f,m,_,E,I,z){return i=new qS(i,s,a,I,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ni(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(_),i}function $S(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Bg(i){if(!i)return _r;i=i._reactInternals;e:{if(Ti(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Nn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Nn(a))return hm(i,a,s)}return s}function Vg(i,s,a,f,m,_,E,I,z){return i=Df(a,f,!0,i,m,_,E,I,z),i.context=Bg(null),a=i.current,f=bn(),m=wr(a),_=zi(f,m),_.callback=s??null,Sr(a,_,m),i.current.lanes=m,Yt(i,m,f),On(i,f),i}function Xl(i,s,a,f){var m=s.current,_=bn(),E=wr(m);return a=Bg(a),s.context===null?s.context=a:s.pendingContext=a,s=zi(_,E),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Sr(m,s,E),i!==null&&(pi(i,m,E,_),El(i,m,E)),E}function Yl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function zg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Lf(i,s){zg(i,s),(i=i.alternate)&&zg(i,s)}var Hg=typeof reportError=="function"?reportError:function(i){console.error(i)};function If(i){this._internalRoot=i}ql.prototype.render=If.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Xl(i,s,null,null)},ql.prototype.unmount=If.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;rs(function(){Xl(null,i,null,null)}),s[Fi]=null}};function ql(i){this._internalRoot=i}ql.prototype.unstable_scheduleHydration=function(i){if(i){var s=wp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<hr.length&&s!==0&&s<hr[a].priority;a++);hr.splice(a,0,i),a===0&&Rp(i)}};function Nf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function $l(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function KS(i,s,a,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var ee=Yl(E);_.call(ee)}}var E=Vg(s,f,i,0,null,!1,!1,"",Gg);return i._reactRootContainer=E,i[Fi]=E.current,Ko(i.nodeType===8?i.parentNode:i),rs(),E}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var I=f;f=function(){var ee=Yl(z);I.call(ee)}}var z=Df(i,0,!1,null,null,!1,!1,"",Gg);return i._reactRootContainer=z,i[Fi]=z.current,Ko(i.nodeType===8?i.parentNode:i),rs(function(){Xl(s,z,a,f)}),z}function Kl(i,s,a,f,m){var _=a._reactRootContainer;if(_){var E=_;if(typeof m=="function"){var I=m;m=function(){var z=Yl(E);I.call(z)}}Xl(s,E,i,m)}else E=KS(a,s,i,m,f);return Yl(E)}Ep=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=cn(s.pendingLanes);a!==0&&($r(s,a|1),On(s,G()),!(St&6)&&(Zs=G()+500,yr()))}break;case 13:rs(function(){var f=Vi(i,1);if(f!==null){var m=bn();pi(f,i,1,m)}}),Lf(i,1)}},rc=function(i){if(i.tag===13){var s=Vi(i,134217728);if(s!==null){var a=bn();pi(s,i,134217728,a)}Lf(i,134217728)}},Tp=function(i){if(i.tag===13){var s=wr(i),a=Vi(i,s);if(a!==null){var f=bn();pi(a,i,s,f)}Lf(i,s)}},wp=function(){return mt},Ap=function(i,s){var a=mt;try{return mt=i,s()}finally{mt=a}},Re=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var m=hl(f);if(!m)throw Error(t(90));gt(f),ft(f,m)}}}break;case"textarea":me(i,a);break;case"select":s=a.value,s!=null&&L(i,!!a.multiple,s,!1)}},Ut=wf,en=rs;var ZS={usingClientEntryPoint:!1,Events:[Jo,ks,hl,De,ot,wf]},ha={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ka(i),i===null?null:i.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Xe=Zl.inject(QS),at=Zl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS,kn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(s))throw Error(t(200));return $S(i,s,null,a)},kn.createRoot=function(i,s){if(!Nf(i))throw Error(t(299));var a=!1,f="",m=Hg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Df(i,1,!1,null,null,a,!1,f,m),i[Fi]=s.current,Ko(i.nodeType===8?i.parentNode:i),new If(s)},kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Ka(s),i=i===null?null:i.stateNode,i},kn.flushSync=function(i){return rs(i)},kn.hydrate=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!0,a)},kn.hydrateRoot=function(i,s,a){if(!Nf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,_="",E=Hg;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=Vg(s,null,i,1,a??null,m,!1,_,E),i[Fi]=s.current,Ko(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new ql(s)},kn.render=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!1,a)},kn.unmountComponentAtNode=function(i){if(!$l(i))throw Error(t(40));return i._reactRootContainer?(rs(function(){Kl(null,null,i,!1,function(){i._reactRootContainer=null,i[Fi]=null})}),!0):!1},kn.unstable_batchedUpdates=wf,kn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!$l(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Kl(i,s,a,!1,f)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Zg;function a1(){if(Zg)return Of.exports;Zg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Of.exports=o1(),Of.exports}var Qg;function l1(){if(Qg)return Ql;Qg=1;var n=a1();return Ql.createRoot=n.createRoot,Ql.hydrateRoot=n.hydrateRoot,Ql}var u1=l1(),h_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jg=er.createContext&&er.createContext(h_),c1=["attr","size","title"];function f1(n,e){if(n==null)return{};var t=d1(n,e),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)r=l[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function d1(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Uu(){return Uu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Uu.apply(this,arguments)}function ev(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Fu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ev(Object(t),!0).forEach(function(r){h1(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ev(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function h1(n,e,t){return e=p1(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function p1(n){var e=m1(n,"string");return typeof e=="symbol"?e:e+""}function m1(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function p_(n){return n&&n.map((e,t)=>er.createElement(e.tag,Fu({key:t},e.attr),p_(e.child)))}function Wr(n){return e=>er.createElement(g1,Uu({attr:Fu({},n.attr)},e),p_(n.child))}function g1(n){var e=t=>{var{attr:r,size:o,title:l}=n,u=f1(n,c1),c=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),er.createElement("svg",Uu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:d,style:Fu(Fu({color:n.color||t.color},t.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&er.createElement("title",null,l),n.children)};return Jg!==void 0?er.createElement(Jg.Consumer,null,t=>e(t)):e(h_)}function v1(n){return Wr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(n)}function _1(n){return Wr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"48",d:"M88 152h336M88 256h336M88 360h336"},child:[]}]})(n)}function y1(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}function Yu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Pd=n=>Array.isArray(n);function m_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function Pa(n){return typeof n=="string"||Array.isArray(n)}function tv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Fh(n,e,t,r){if(typeof e=="function"){const[o,l]=tv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=tv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function qu(n,e,t){const r=n.getProps();return Fh(r,e,t!==void 0?t:r.custom,n)}const Oh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],kh=["initial",...Oh],Ua=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rs=new Set(Ua),tr=n=>n*1e3,nr=n=>n/1e3,x1={type:"spring",stiffness:500,damping:25,restSpeed:10},S1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),M1={type:"keyframes",duration:.8},E1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},T1=(n,{keyframes:e})=>e.length>2?M1:Rs.has(n)?n.startsWith("scale")?S1(e[1]):x1:E1;function Bh(n,e){return n?n[e]||n.default||n:void 0}const w1={skipAnimations:!1,useManualTiming:!1},A1=n=>n!==null;function $u(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(A1),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const $n=n=>n;let bd=$n;function C1(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,p=!1,g=!1)=>{const x=g&&r?e:t;return p&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Jl=["read","resolveKeyframes","update","preRender","render","postRender"],R1=40;function g_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=Jl.reduce((y,D)=>(y[D]=C1(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:p,render:g,postRender:v}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,R1),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:Jl.reduce((y,D)=>{const b=u[D];return y[D]=(R,O=!1,F=!1)=>(t||M(),b.schedule(R,O,F)),y},{}),cancel:y=>{for(let D=0;D<Jl.length;D++)u[Jl[D]].cancel(y)},state:o,steps:u}}const{schedule:kt,cancel:Vr,state:hn,steps:Vf}=g_(typeof requestAnimationFrame<"u"?requestAnimationFrame:$n,!0),v_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,P1=1e-7,b1=12;function D1(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=v_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>P1&&++c<b1);return u}function Fa(n,e,t,r){if(n===e&&t===r)return $n;const o=l=>D1(l,0,1,n,t);return l=>l===0||l===1?l:v_(o(l),e,r)}const __=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,y_=n=>e=>1-n(1-e),x_=Fa(.33,1.53,.69,.99),Vh=y_(x_),S_=__(Vh),M_=n=>(n*=2)<1?.5*Vh(n):.5*(2-Math.pow(2,-10*(n-1))),zh=n=>1-Math.sin(Math.acos(n)),E_=y_(zh),T_=__(zh),w_=n=>/^0[^.\s]+$/u.test(n);function L1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||w_(n):!0}const A_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),C_=n=>e=>typeof e=="string"&&e.startsWith(n),R_=C_("--"),I1=C_("var(--"),Hh=n=>I1(n)?N1.test(n.split("/*")[0].trim()):!1,N1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,U1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F1(n){const e=U1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function P_(n,e,t=1){const[r,o]=F1(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return A_(u)?parseFloat(u):u}return Hh(o)?P_(o,e,t+1):o}const rr=(n,e,t)=>t>e?e:t<n?n:t,No={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ba={...No,transform:n=>rr(0,1,n)},eu={...No,default:1},Oa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Ur=Oa("deg"),Li=Oa("%"),et=Oa("px"),O1=Oa("vh"),k1=Oa("vw"),nv={...Li,parse:n=>Li.parse(n)/100,transform:n=>Li.transform(n*100)},B1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),iv=n=>n===No||n===et,rv=(n,e)=>parseFloat(n.split(", ")[e]),sv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return rv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?rv(l[1],n):0}},V1=new Set(["x","y","z"]),z1=Ua.filter(n=>!V1.has(n));function H1(n){const e=[];return z1.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const To={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:sv(4,13),y:sv(5,14)};To.translateX=To.x;To.translateY=To.y;const b_=n=>e=>e.test(n),G1={test:n=>n==="auto",parse:n=>n},D_=[No,et,Li,Ur,k1,O1,G1],ov=n=>D_.find(b_(n)),Ts=new Set;let Dd=!1,Ld=!1;function L_(){if(Ld){const n=Array.from(Ts).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=H1(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ld=!1,Dd=!1,Ts.forEach(n=>n.complete()),Ts.clear()}function I_(){Ts.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ld=!0)})}function W1(){I_(),L_()}class Gh{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ts.add(this),Dd||(Dd=!0,kt.read(I_),kt.resolveKeyframes(L_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ts.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ts.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const wa=n=>Math.round(n*1e5)/1e5,Wh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function j1(n){return n==null}const X1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jh=(n,e)=>t=>!!(typeof t=="string"&&X1.test(t)&&t.startsWith(n)||e&&!j1(t)&&Object.prototype.hasOwnProperty.call(t,e)),N_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(Wh);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},Y1=n=>rr(0,255,n),zf={...No,transform:n=>Math.round(Y1(n))},Ss={test:jh("rgb","red"),parse:N_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+zf.transform(n)+", "+zf.transform(e)+", "+zf.transform(t)+", "+wa(ba.transform(r))+")"};function q1(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Id={test:jh("#"),parse:q1,transform:Ss.transform},mo={test:jh("hsl","hue"),parse:N_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Li.transform(wa(e))+", "+Li.transform(wa(t))+", "+wa(ba.transform(r))+")"},En={test:n=>Ss.test(n)||Id.test(n)||mo.test(n),parse:n=>Ss.test(n)?Ss.parse(n):mo.test(n)?mo.parse(n):Id.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ss.transform(n):mo.transform(n)},$1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Wh))===null||e===void 0?void 0:e.length)||0)+(((t=n.match($1))===null||t===void 0?void 0:t.length)||0)>0}const U_="number",F_="color",Z1="var",Q1="var(",av="${}",J1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Da(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(J1,d=>(En.test(d)?(r.color.push(l),o.push(F_),t.push(En.parse(d))):d.startsWith(Q1)?(r.var.push(l),o.push(Z1),t.push(d)):(r.number.push(l),o.push(U_),t.push(parseFloat(d))),++l,av)).split(av);return{values:t,split:c,indexes:r,types:o}}function O_(n){return Da(n).values}function k_(n){const{split:e,types:t}=Da(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===U_?l+=wa(o[u]):c===F_?l+=En.transform(o[u]):l+=o[u]}return l}}const eM=n=>typeof n=="number"?0:n;function tM(n){const e=O_(n);return k_(n)(e.map(eM))}const zr={test:K1,parse:O_,createTransformer:k_,getAnimatableNone:tM},nM=new Set(["brightness","contrast","saturate","opacity"]);function iM(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Wh)||[];if(!r)return n;const o=t.replace(r,"");let l=nM.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const rM=/\b([a-z-]*)\(.*?\)/gu,Nd={...zr,getAnimatableNone:n=>{const e=n.match(rM);return e?e.map(iM).join(" "):n}},sM={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},oM={rotate:Ur,rotateX:Ur,rotateY:Ur,rotateZ:Ur,scale:eu,scaleX:eu,scaleY:eu,scaleZ:eu,skew:Ur,skewX:Ur,skewY:Ur,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:ba,originX:nv,originY:nv,originZ:et},lv={...No,transform:Math.round},Xh={...sM,...oM,zIndex:lv,size:et,fillOpacity:ba,strokeOpacity:ba,numOctaves:lv},aM={...Xh,color:En,backgroundColor:En,outlineColor:En,fill:En,stroke:En,borderColor:En,borderTopColor:En,borderRightColor:En,borderBottomColor:En,borderLeftColor:En,filter:Nd,WebkitFilter:Nd},Yh=n=>aM[n];function B_(n,e){let t=Yh(n);return t!==Nd&&(t=zr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const lM=new Set(["auto","none","0"]);function uM(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!lM.has(l)&&Da(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=B_(t,o)}class V_ extends Gh{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Hh(h))){const p=P_(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!B1.has(r)||e.length!==2)return;const[o,l]=e,u=ov(o),c=ov(l);if(u!==c)if(iv(u)&&iv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)L1(e[o])&&r.push(o);r.length&&uM(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=To[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=To[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function qh(n){return typeof n=="function"}let Au;function cM(){Au=void 0}const Ii={now:()=>(Au===void 0&&Ii.set(hn.isProcessing||w1.useManualTiming?hn.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(cM)}},uv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(zr.test(n)||n==="0")&&!n.startsWith("url("));function fM(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function dM(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=uv(o,e),c=uv(l,e);return!u||!c?!1:fM(n)||(t==="spring"||qh(t))&&r}const hM=40;class z_{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ii.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>hM?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&W1(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ii.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!dM(e,r,o,l))if(u)this.options.duration=0;else{d==null||d($u(e,this.options,t)),c==null||c(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const wo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},H_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(wo(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function G_(n,e){return e?n*(1e3/e):0}const pM=5;function W_(n,e,t){const r=Math.max(e-pM,0);return G_(t-n(r),e-r)}const Xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Hf=.001;function mM({duration:n=Xt.duration,bounce:e=Xt.bounce,velocity:t=Xt.velocity,mass:r=Xt.mass}){let o,l,u=1-e;u=rr(Xt.minDamping,Xt.maxDamping,u),n=rr(Xt.minDuration,Xt.maxDuration,nr(n)),u<1?(o=h=>{const p=h*u,g=p*n,v=p-t,x=Ud(h,u),M=Math.exp(-g);return Hf-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),T=Ud(Math.pow(h,2),u);return(-o(h)+Hf>0?-1:1)*((v-x)*M)/T}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-Hf+p*g},l=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const c=5/n,d=vM(o,l,c);if(n=tr(n),isNaN(d))return{stiffness:Xt.stiffness,damping:Xt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const gM=12;function vM(n,e,t){let r=t;for(let o=1;o<gM;o++)r=r-n(r)/e(r);return r}function Ud(n,e){return n*Math.sqrt(1-e*e)}const Fd=2e4;function j_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Fd;)e+=t,r=n.next(e);return e>=Fd?1/0:e}const _M=["duration","bounce"],yM=["stiffness","damping","mass"];function cv(n,e){return e.some(t=>n[t]!==void 0)}function xM(n){let e={velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...n};if(!cv(n,yM)&&cv(n,_M))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*rr(.05,1,1-n.bounce)*Math.sqrt(o);e={...e,mass:Xt.mass,stiffness:o,damping:l}}else{const t=mM(n);e={...e,...t,mass:Xt.mass},e.isResolvedFromDuration=!0}return e}function X_(n=Xt.visualDuration,e=Xt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:x}=xM({...t,velocity:-nr(t.velocity||0)}),M=v||0,T=h/(2*Math.sqrt(d*p)),S=u-l,y=nr(Math.sqrt(d/p)),D=Math.abs(S)<5;r||(r=D?Xt.restSpeed.granular:Xt.restSpeed.default),o||(o=D?Xt.restDelta.granular:Xt.restDelta.default);let b;if(T<1){const O=Ud(y,T);b=F=>{const U=Math.exp(-T*y*F);return u-U*((M+T*y*S)/O*Math.sin(O*F)+S*Math.cos(O*F))}}else if(T===1)b=O=>u-Math.exp(-y*O)*(S+(M+y*S)*O);else{const O=y*Math.sqrt(T*T-1);b=F=>{const U=Math.exp(-T*y*F),B=Math.min(O*F,300);return u-U*((M+T*y*S)*Math.sinh(B)+O*S*Math.cosh(B))/O}}const R={calculatedDuration:x&&g||null,next:O=>{const F=b(O);if(x)c.done=O>=g;else{let U=0;T<1&&(U=O===0?tr(M):W_(b,O,F));const B=Math.abs(U)<=r,P=Math.abs(u-F)<=o;c.done=B&&P}return c.value=c.done?u:F,c},toString:()=>{const O=Math.min(j_(R),Fd),F=H_(U=>R.next(O*U).value,O,30);return O+"ms "+F}};return R}function fv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},x=B=>c!==void 0&&B<c||d!==void 0&&B>d,M=B=>c===void 0?d:d===void 0||Math.abs(c-B)<Math.abs(d-B)?c:d;let T=t*e;const S=g+T,y=u===void 0?S:u(S);y!==S&&(T=y-g);const D=B=>-T*Math.exp(-B/r),b=B=>y+D(B),R=B=>{const P=D(B),C=b(B);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let O,F;const U=B=>{x(v.value)&&(O=B,F=X_({keyframes:[v.value,M(v.value)],velocity:W_(b,B,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:p}))};return U(0),{calculatedDuration:null,next:B=>{let P=!1;return!F&&O===void 0&&(P=!0,R(B),U(B)),O!==void 0&&B>=O?F.next(B-O):(!P&&R(B),v)}}}const SM=Fa(.42,0,1,1),MM=Fa(0,0,.58,1),Y_=Fa(.42,0,.58,1),EM=n=>Array.isArray(n)&&typeof n[0]!="number",$h=n=>Array.isArray(n)&&typeof n[0]=="number",dv={linear:$n,easeIn:SM,easeInOut:Y_,easeOut:MM,circIn:zh,circInOut:T_,circOut:E_,backIn:Vh,backInOut:S_,backOut:x_,anticipate:M_},hv=n=>{if($h(n)){bd(n.length===4);const[e,t,r,o]=n;return Fa(e,t,r,o)}else if(typeof n=="string")return bd(dv[n]!==void 0),dv[n];return n},TM=(n,e)=>t=>e(n(t)),ka=(...n)=>n.reduce(TM),Gt=(n,e,t)=>n+(e-n)*t;function Gf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function wM({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Gf(d,c,n+1/3),l=Gf(d,c,n),u=Gf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Ou(n,e){return t=>t>0?e:n}const Wf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},AM=[Id,Ss,mo],CM=n=>AM.find(e=>e.test(n));function pv(n){const e=CM(n);if(!e)return!1;let t=e.parse(n);return e===mo&&(t=wM(t)),t}const mv=(n,e)=>{const t=pv(n),r=pv(e);if(!t||!r)return Ou(n,e);const o={...t};return l=>(o.red=Wf(t.red,r.red,l),o.green=Wf(t.green,r.green,l),o.blue=Wf(t.blue,r.blue,l),o.alpha=Gt(t.alpha,r.alpha,l),Ss.transform(o))},Od=new Set(["none","hidden"]);function RM(n,e){return Od.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function PM(n,e){return t=>Gt(n,e,t)}function Kh(n){return typeof n=="number"?PM:typeof n=="string"?Hh(n)?Ou:En.test(n)?mv:LM:Array.isArray(n)?q_:typeof n=="object"?En.test(n)?mv:bM:Ou}function q_(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Kh(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function bM(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Kh(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function DM(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const LM=(n,e)=>{const t=zr.createTransformer(e),r=Da(n),o=Da(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Od.has(n)&&!o.values.length||Od.has(e)&&!r.values.length?RM(n,e):ka(q_(DM(r,o),o.values),t):Ou(n,e)};function $_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Gt(n,e,t):Kh(n)(n,e)}function IM(n,e,t){const r=[],o=t||$_,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||$n:e;c=ka(d,c)}r.push(c)}return r}function NM(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(bd(l===e.length),l===1)return()=>e[0];if(l===2&&n[0]===n[1])return()=>e[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=IM(e,r,o),c=u.length,d=h=>{let p=0;if(c>1)for(;p<n.length-2&&!(h<n[p+1]);p++);const g=wo(n[p],n[p+1],h);return u[p](g)};return t?h=>d(rr(n[0],n[l-1],h)):d}function UM(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=wo(0,e,r);n.push(Gt(t,1,o))}}function FM(n){const e=[0];return UM(e,n.length-1),e}function OM(n,e){return n.map(t=>t*e)}function kM(n,e){return n.map(()=>e||Y_).splice(0,n.length-1)}function ku({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=EM(r)?r.map(hv):hv(r),l={done:!1,value:e[0]},u=OM(t&&t.length===e.length?t:FM(e),n),c=NM(u,e,{ease:Array.isArray(o)?o:kM(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const BM=n=>{const e=({timestamp:t})=>n(t);return{start:()=>kt.update(e,!0),stop:()=>Vr(e),now:()=>hn.isProcessing?hn.timestamp:Ii.now()}},VM={decay:fv,inertia:fv,tween:ku,keyframes:ku,spring:X_},zM=n=>n/100;class Zh extends z_{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Gh,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=qh(t)?t:VM[t]||ku;let d,h;c!==ku&&typeof e[0]!="number"&&(d=ka(zM,$_(e[0],e[1])),e=[0,100]);const p=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=j_(p));const{calculatedDuration:g}=p,v=g+o,x=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:B}=this.options;return{done:!0,value:B[B.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:x,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),D=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let b=this.currentTime,R=l;if(x){const B=Math.min(this.currentTime,p)/g;let P=Math.floor(B),C=B%1;!C&&B>=1&&(C=1),C===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(M==="reverse"?(C=1-C,T&&(C-=T/g)):M==="mirror"&&(R=u)),b=rr(0,1,C)*g}const O=D?{done:!1,value:d[0]}:R.next(b);c&&(O.value=c(O.value));let{done:F}=O;!D&&h!==null&&(F=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return U&&o!==void 0&&(O.value=$u(d,this.options,o)),S&&S(O.value),U&&this.finish(),O}get duration(){const{resolved:e}=this;return e?nr(e.calculatedDuration):0}get time(){return nr(this.currentTime)}set time(e){e=tr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=nr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=BM,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const HM=new Set(["opacity","clipPath","filter","transform"]);function Qh(n){let e;return()=>(e===void 0&&(e=n()),e)}const GM={linearEasing:void 0};function WM(n,e){const t=Qh(n);return()=>{var r;return(r=GM[e])!==null&&r!==void 0?r:t()}}const Bu=WM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function K_(n){return!!(typeof n=="function"&&Bu()||!n||typeof n=="string"&&(n in kd||Bu())||$h(n)||Array.isArray(n)&&n.every(K_))}const Sa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,kd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sa([0,.65,.55,1]),circOut:Sa([.55,0,1,.45]),backIn:Sa([.31,.01,.66,-.59]),backOut:Sa([.33,1.53,.69,.99])};function Z_(n,e){if(n)return typeof n=="function"&&Bu()?H_(n,e):$h(n)?Sa(n):Array.isArray(n)?n.map(t=>Z_(t,e)||kd.easeOut):kd[n]}function jM(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=Z_(c,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}function gv(n,e){n.timeline=e,n.onfinish=null}const XM=Qh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vu=10,YM=2e4;function qM(n){return qh(n.type)||n.type==="spring"||!K_(n.ease)}function $M(n,e){const t=new Zh({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<YM;)r=t.sample(l),o.push(r.value),l+=Vu;return{times:void 0,keyframes:o,duration:l-Vu,ease:"linear"}}const Q_={anticipate:M_,backInOut:S_,circInOut:T_};function KM(n){return n in Q_}class vv extends z_{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new V_(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){var r;let{duration:o=300,times:l,ease:u,type:c,motionValue:d,name:h,startTime:p}=this.options;if(!(!((r=d.owner)===null||r===void 0)&&r.current))return!1;if(typeof u=="string"&&Bu()&&KM(u)&&(u=Q_[u]),qM(this.options)){const{onComplete:v,onUpdate:x,motionValue:M,element:T,...S}=this.options,y=$M(e,S);e=y.keyframes,e.length===1&&(e[1]=e[0]),o=y.duration,l=y.times,u=y.ease,c="keyframes"}const g=jM(d.owner.current,h,e,{...this.options,duration:o,times:l,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(gv(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;d.set($u(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:o,times:l,type:c,ease:u,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return nr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return nr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=tr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return $n;const{animation:r}=t;gv(r,e)}return $n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,...x}=this.options,M=new Zh({...x,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),T=tr(this.time);h.setWithVelocity(M.sample(T-Vu).value,M.sample(T).value,Vu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;return XM()&&r&&HM.has(r)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const ZM=Qh(()=>window.ScrollTimeline!==void 0);class QM{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>ZM()&&o.attachTimeline?o.attachTimeline(e):t(o));return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function JM({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Jh=(n,e,t,r={},o,l)=>u=>{const c=Bh(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-tr(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};JM(c)||(p={...p,...T1(n,p)}),p.duration&&(p.duration=tr(p.duration)),p.repeatDelay&&(p.repeatDelay=tr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=$u(p.keyframes,c);if(v!==void 0)return kt.update(()=>{p.onUpdate(v),p.onComplete()}),new QM([])}return!l&&vv.supports(p)?new vv(p):new Zh(p)},eE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),tE=n=>Pd(n)?n[n.length-1]||0:n;function ep(n,e){n.indexOf(e)===-1&&n.push(e)}function tp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class np{constructor(){this.subscriptions=[]}add(e){return ep(this.subscriptions,e),()=>tp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _v=30,nE=n=>!isNaN(parseFloat(n));class iE{constructor(e,t={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ii.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ii.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=nE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new np);const r=this.events[e].add(t);return e==="change"?()=>{r(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>_v)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,_v);return G_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function La(n,e){return new iE(n,e)}function rE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,La(t))}function sE(n,e){const t=qu(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=tE(l[u]);rE(n,u,c)}}const ip=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),oE="framerAppearId",J_="data-"+ip(oE);function ey(n){return n.props[J_]}const Tn=n=>!!(n&&n.getVelocity);function aE(n){return!!(Tn(n)&&n.add)}function Bd(n,e){const t=n.getValue("willChange");if(aE(t))return t.add(e)}function lE({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ty(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||p&&lE(p,g))continue;const M={delay:t,...Bh(u||{},g)};let T=!1;if(window.MotionHandoffAnimation){const y=ey(n);if(y){const D=window.MotionHandoffAnimation(y,g,kt);D!==null&&(M.startTime=D,T=!0)}}Bd(n,g),v.start(Jh(g,v,x,n.shouldReduceMotion&&Rs.has(g)?{type:!1}:M,n,T));const S=v.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{kt.update(()=>{c&&sE(n,c)})}),h}function Vd(n,e,t={}){var r;const o=qu(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(ty(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=l;return uE(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,p]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function uE(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(cE).forEach((h,p)=>{h.notify("AnimationStart",e),u.push(Vd(h,e,{...l,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function cE(n,e){return n.sortNodePosition(e)}function fE(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Vd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Vd(n,e,t);else{const o=typeof e=="function"?qu(n,e,t.custom):e;r=Promise.all(ty(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const dE=kh.length;function ny(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?ny(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<dE;t++){const r=kh[t],o=n.props[r];(Pa(o)||o===!1)&&(e[r]=o)}return e}const hE=[...Oh].reverse(),pE=Oh.length;function mE(n){return e=>Promise.all(e.map(({animation:t,options:r})=>fE(n,t,r)))}function gE(n){let e=mE(n),t=yv(),r=!0;const o=d=>(h,p)=>{var g;const v=qu(n,p,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:x,transitionEnd:M,...T}=v;h={...h,...T,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,p=ny(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<pE;S++){const y=hE[S],D=t[y],b=h[y]!==void 0?h[y]:p[y],R=Pa(b),O=y===d?D.isActive:null;O===!1&&(M=S);let F=b===p[y]&&b!==h[y]&&R;if(F&&r&&n.manuallyAnimateOnMount&&(F=!1),D.protectedKeys={...x},!D.isActive&&O===null||!b&&!D.prevProp||Yu(b)||typeof b=="boolean")continue;const U=vE(D.prevProp,b);let B=U||y===d&&D.isActive&&!F&&R||S>M&&R,P=!1;const C=Array.isArray(b)?b:[b];let k=C.reduce(o(y),{});O===!1&&(k={});const{prevResolvedValues:oe={}}=D,Q={...oe,...k},ce=se=>{B=!0,v.has(se)&&(P=!0,v.delete(se)),D.needsAnimating[se]=!0;const V=n.getValue(se);V&&(V.liveStyle=!1)};for(const se in Q){const V=k[se],ue=oe[se];if(x.hasOwnProperty(se))continue;let q=!1;Pd(V)&&Pd(ue)?q=!m_(V,ue):q=V!==ue,q?V!=null?ce(se):v.add(se):V!==void 0&&v.has(se)?ce(se):D.protectedKeys[se]=!0}D.prevProp=b,D.prevResolvedValues=k,D.isActive&&(x={...x,...k}),r&&n.blockInitialAnimation&&(B=!1),B&&(!(F&&U)||P)&&g.push(...C.map(se=>({animation:se,options:{type:y}})))}if(v.size){const S={};v.forEach(y=>{const D=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=D??null}),g.push({animation:S})}let T=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(g):Promise.resolve()}function c(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var x;return(x=v.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=yv(),r=!0}}}function vE(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!m_(e,n):!1}function ls(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yv(){return{animate:ls(!0),whileInView:ls(),whileHover:ls(),whileTap:ls(),whileDrag:ls(),whileFocus:ls(),exit:ls()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class _E extends jr{constructor(e){super(e),e.animationState||(e.animationState=gE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let yE=0;class xE extends jr{constructor(){super(...arguments),this.id=yE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const SE={animation:{Feature:_E},exit:{Feature:xE}},_i={x:!1,y:!1};function iy(){return _i.x||_i.y}function ME(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function ry(n,e){const t=ME(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function xv(n){return e=>{e.pointerType==="touch"||iy()||n(e)}}function EE(n,e,t={}){const[r,o,l]=ry(n,t),u=xv(c=>{const{target:d}=c,h=e(c);if(!h||!d)return;const p=xv(g=>{h(g),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const rp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ma=new WeakSet;function Sv(n){return e=>{e.key==="Enter"&&n(e)}}function jf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const TE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Sv(()=>{if(Ma.has(t))return;jf(t,"down");const o=Sv(()=>{jf(t,"up")}),l=()=>jf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)},wE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AE(n){return wE.has(n.tagName)||n.tabIndex!==-1}const sy=(n,e)=>e?n===e?!0:sy(n,e.parentElement):!1;function Mv(n){return rp(n)&&!iy()}function CE(n,e,t={}){const[r,o,l]=ry(n,t),u=c=>{const d=c.currentTarget;if(!Mv(c)||Ma.has(d))return;Ma.add(d);const h=e(c),p=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!Mv(x)||!Ma.has(d))&&(Ma.delete(d),h&&h(x,{success:M}))},g=x=>{p(x,t.useGlobalTarget||sy(d,x.target))},v=x=>{p(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{AE(c)||(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>TE(h,o),o)}),l}function RE(n){return n==="x"||n==="y"?_i[n]?null:(_i[n]=!0,()=>{_i[n]=!1}):_i.x||_i.y?null:(_i.x=_i.y=!0,()=>{_i.x=_i.y=!1})}function Ba(n){return{point:{x:n.pageX,y:n.pageY}}}const PE=n=>e=>rp(e)&&n(e,Ba(e));function Ia(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Aa(n,e,t,r){return Ia(n,e,PE(t),r)}const Ev=(n,e)=>Math.abs(n-e);function bE(n,e){const t=Ev(n.x,e.x),r=Ev(n.y,e.y);return Math.sqrt(t**2+r**2)}class oy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Yf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=bE(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:M}=g,{timestamp:T}=hn;this.history.push({...M,timestamp:T});const{onStart:S,onMove:y}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Xf(v,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Yf(g.type==="pointercancel"?this.lastMoveEventInfo:Xf(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!rp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Ba(e),c=Xf(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=hn;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Yf(c,this.history)),this.removeListeners=ka(Aa(this.contextWindow,"pointermove",this.handlePointerMove),Aa(this.contextWindow,"pointerup",this.handlePointerUp),Aa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Vr(this.updatePoint)}}function Xf(n,e){return e?{point:e(n.point)}:n}function Tv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Yf({point:n},e){return{point:n,delta:Tv(n,ay(e)),offset:Tv(n,DE(e)),velocity:LE(e,.1)}}function DE(n){return n[0]}function ay(n){return n[n.length-1]}function LE(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=ay(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>tr(e)));)t--;if(!r)return{x:0,y:0};const l=nr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const ly=1e-4,IE=1-ly,NE=1+ly,uy=.01,UE=0-uy,FE=0+uy;function Kn(n){return n.max-n.min}function OE(n,e,t){return Math.abs(n-e)<=t}function wv(n,e,t,r=.5){n.origin=r,n.originPoint=Gt(e.min,e.max,n.origin),n.scale=Kn(t)/Kn(e),n.translate=Gt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=IE&&n.scale<=NE||isNaN(n.scale))&&(n.scale=1),(n.translate>=UE&&n.translate<=FE||isNaN(n.translate))&&(n.translate=0)}function Ca(n,e,t,r){wv(n.x,e.x,t.x,r?r.originX:void 0),wv(n.y,e.y,t.y,r?r.originY:void 0)}function Av(n,e,t){n.min=t.min+e.min,n.max=n.min+Kn(e)}function kE(n,e,t){Av(n.x,e.x,t.x),Av(n.y,e.y,t.y)}function Cv(n,e,t){n.min=e.min-t.min,n.max=n.min+Kn(e)}function Ra(n,e,t){Cv(n.x,e.x,t.x),Cv(n.y,e.y,t.y)}function BE(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Gt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Gt(t,n,r.max):Math.min(n,t)),n}function Rv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function VE(n,{top:e,left:t,bottom:r,right:o}){return{x:Rv(n.x,t,o),y:Rv(n.y,e,r)}}function Pv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function zE(n,e){return{x:Pv(n.x,e.x),y:Pv(n.y,e.y)}}function HE(n,e){let t=.5;const r=Kn(n),o=Kn(e);return o>r?t=wo(e.min,e.max-r,n.min):r>o&&(t=wo(n.min,n.max-o,e.min)),rr(0,1,t)}function GE(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const zd=.35;function WE(n=zd){return n===!1?n=0:n===!0&&(n=zd),{x:bv(n,"left","right"),y:bv(n,"top","bottom")}}function bv(n,e,t){return{min:Dv(n,e),max:Dv(n,t)}}function Dv(n,e){return typeof n=="number"?n:n[e]||0}const Lv=()=>({translate:0,scale:1,origin:0,originPoint:0}),vo=()=>({x:Lv(),y:Lv()}),Iv=()=>({min:0,max:0}),$t=()=>({x:Iv(),y:Iv()});function si(n){return[n("x"),n("y")]}function cy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function jE({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function XE(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function qf(n){return n===void 0||n===1}function Hd({scale:n,scaleX:e,scaleY:t}){return!qf(n)||!qf(e)||!qf(t)}function ms(n){return Hd(n)||fy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function fy(n){return Nv(n.x)||Nv(n.y)}function Nv(n){return n&&n!=="0%"}function zu(n,e,t){const r=n-t,o=e*r;return t+o}function Uv(n,e,t,r,o){return o!==void 0&&(n=zu(n,o,r)),zu(n,t,r)+e}function Gd(n,e=0,t=1,r,o){n.min=Uv(n.min,e,t,r,o),n.max=Uv(n.max,e,t,r,o)}function dy(n,{x:e,y:t}){Gd(n.x,e.translate,e.scale,e.originPoint),Gd(n.y,t.translate,t.scale,t.originPoint)}const Fv=.999999999999,Ov=1.0000000000001;function YE(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&yo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,dy(n,u)),r&&ms(l.latestValues)&&yo(n,l.latestValues))}e.x<Ov&&e.x>Fv&&(e.x=1),e.y<Ov&&e.y>Fv&&(e.y=1)}function _o(n,e){n.min=n.min+e,n.max=n.max+e}function kv(n,e,t,r,o=.5){const l=Gt(n.min,n.max,o);Gd(n,e,t,l,r)}function yo(n,e){kv(n.x,e.x,e.scaleX,e.scale,e.originX),kv(n.y,e.y,e.scaleY,e.scale,e.originY)}function hy(n,e){return cy(XE(n.getBoundingClientRect(),e))}function qE(n,e,t){const r=hy(n,t),{scroll:o}=e;return o&&(_o(r.x,o.offset.x),_o(r.y,o.offset.y)),r}const py=({current:n})=>n?n.ownerDocument.defaultView:null,$E=new WeakMap;class KE{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ba(p).point)},l=(p,g)=>{const{drag:v,dragPropagation:x,onDragStart:M}=this.getProps();if(v&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=RE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),si(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Li.test(y)){const{projection:D}=this.visualElement;if(D&&D.layout){const b=D.layout.layoutBox[S];b&&(y=Kn(b)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&kt.postRender(()=>M(p,g)),Bd(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},u=(p,g)=>{const{dragPropagation:v,dragDirectionLock:x,onDirectionLock:M,onDrag:T}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=ZE(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),T&&T(p,g)},c=(p,g)=>this.stop(p,g),d=()=>si(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new oy(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:py(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&kt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!tu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=BE(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&go(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=VE(o.layoutBox,t):this.constraints=!1,this.elastic=WE(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&si(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=GE(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=qE(r,o.root,this.visualElement.getTransformPagePoint());let u=zE(o.layout.layoutBox,l);if(t){const c=t(jE(u));this.hasMutatedConstraints=!!c,c&&(u=cy(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=si(p=>{if(!tu(p,t,this.currentDirection))return;let g=d[p]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Bd(this.visualElement,e),r.start(Jh(e,r,0,t,this.visualElement,!1))}stopAnimation(){si(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){si(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){si(t=>{const{drag:r}=this.getProps();if(!tu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Gt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};si(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=HE({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),si(u=>{if(!tu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Gt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;$E.set(this.visualElement,this);const e=this.visualElement.current,t=Aa(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),kt.read(r);const u=Ia(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(si(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())});return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=zd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function tu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function ZE(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class QE extends jr{constructor(e){super(e),this.removeGroupControls=$n,this.removeListeners=$n,this.controls=new KE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$n}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bv=n=>(e,t)=>{n&&kt.postRender(()=>n(e,t))};class JE extends jr{constructor(){super(...arguments),this.removePointerDownListener=$n}onPointerDown(e){this.session=new oy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:py(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Bv(e),onStart:Bv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&kt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Aa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const sp=qe.createContext(null);function eT(){const n=qe.useContext(sp);if(n===null)return[!0,null];const{isPresent:e,onExitComplete:t,register:r}=n,o=qe.useId();qe.useEffect(()=>r(o),[]);const l=qe.useCallback(()=>t&&t(o),[o,t]);return!e&&t?[!1,l]:[!0]}const my=qe.createContext({}),gy=qe.createContext({}),Cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ma={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=Vv(n,e.target.x),r=Vv(n,e.target.y);return`${t}% ${r}%`}},tT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=zr.parse(n);if(o.length>5)return r;const l=zr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Gt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}},Hu={};function nT(n){Object.assign(Hu,n)}const{schedule:op,cancel:M3}=g_(queueMicrotask,!1);class iT extends qe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;nT(rT),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||kt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),op.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vy(n){const[e,t]=eT(),r=qe.useContext(my);return ie.jsx(iT,{...n,layoutGroup:r,switchLayoutGroup:qe.useContext(gy),isPresent:e,safeToRemove:t})}const rT={borderRadius:{...ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ma,borderTopRightRadius:ma,borderBottomLeftRadius:ma,borderBottomRightRadius:ma,boxShadow:tT},_y=["TopLeft","TopRight","BottomLeft","BottomRight"],sT=_y.length,zv=n=>typeof n=="string"?parseFloat(n):n,Hv=n=>typeof n=="number"||et.test(n);function oT(n,e,t,r,o,l){o?(n.opacity=Gt(0,t.opacity!==void 0?t.opacity:1,aT(r)),n.opacityExit=Gt(e.opacity!==void 0?e.opacity:1,0,lT(r))):l&&(n.opacity=Gt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<sT;u++){const c=`border${_y[u]}Radius`;let d=Gv(e,c),h=Gv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Hv(d)===Hv(h)?(n[c]=Math.max(Gt(zv(d),zv(h),r),0),(Li.test(h)||Li.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Gt(e.rotate||0,t.rotate||0,r))}function Gv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const aT=yy(0,.5,E_),lT=yy(.5,.95,$n);function yy(n,e,t){return r=>r<n?0:r>e?1:t(wo(n,e,r))}function Wv(n,e){n.min=e.min,n.max=e.max}function ii(n,e){Wv(n.x,e.x),Wv(n.y,e.y)}function jv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Xv(n,e,t,r,o){return n-=e,n=zu(n,1/t,r),o!==void 0&&(n=zu(n,1/o,r)),n}function uT(n,e=0,t=1,r=.5,o,l=n,u=n){if(Li.test(e)&&(e=parseFloat(e),e=Gt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Gt(l.min,l.max,r);n===l&&(c-=e),n.min=Xv(n.min,e,t,c,o),n.max=Xv(n.max,e,t,c,o)}function Yv(n,e,[t,r,o],l,u){uT(n,e[t],e[r],e[o],e.scale,l,u)}const cT=["x","scaleX","originX"],fT=["y","scaleY","originY"];function qv(n,e,t,r){Yv(n.x,e,cT,t?t.x:void 0,r?r.x:void 0),Yv(n.y,e,fT,t?t.y:void 0,r?r.y:void 0)}function $v(n){return n.translate===0&&n.scale===1}function xy(n){return $v(n.x)&&$v(n.y)}function Kv(n,e){return n.min===e.min&&n.max===e.max}function dT(n,e){return Kv(n.x,e.x)&&Kv(n.y,e.y)}function Zv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Sy(n,e){return Zv(n.x,e.x)&&Zv(n.y,e.y)}function Qv(n){return Kn(n.x)/Kn(n.y)}function Jv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class hT{constructor(){this.members=[]}add(e){ep(this.members,e),e.scheduleRender()}remove(e){if(tp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pT(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const mT=(n,e)=>n.depth-e.depth;class gT{constructor(){this.children=[],this.isDirty=!1}add(e){ep(this.children,e),this.isDirty=!0}remove(e){tp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(mT),this.isDirty=!1,this.children.forEach(e)}}function Ru(n){const e=Tn(n)?n.get():n;return eE(e)?e.toValue():e}function vT(n,e){const t=Ii.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Vr(r),n(l-e))};return kt.read(r,!0),()=>Vr(r)}function _T(n){return n instanceof SVGElement&&n.tagName!=="svg"}function yT(n,e,t){const r=Tn(n)?n:La(n);return r.start(Jh("",r,e,t)),r.animation}const gs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ea=typeof window<"u"&&window.MotionDebug!==void 0,$f=["","X","Y","Z"],xT={visibility:"hidden"},e0=1e3;let ST=0;function Kf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function My(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ey(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",kt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&My(r)}function Ey({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=ST++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ea&&(gs.totalNodes=gs.resolvedTargetDeltas=gs.recalculatedProjection=0),this.nodes.forEach(TT),this.nodes.forEach(PT),this.nodes.forEach(bT),this.nodes.forEach(wT),Ea&&window.MotionDebug.record(gs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new gT)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new np),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=_T(u),this.instance=u;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=vT(v,250),Cu.hasAnimatedSinceResize&&(Cu.hasAnimatedSinceResize=!1,this.nodes.forEach(n0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||UT,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=p.getProps(),D=!this.targetLayout||!Sy(this.targetLayout,M)||x,b=!v&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||v&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const R={...Bh(T,"layout"),onPlay:S,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else v||n0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Vr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(DT),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&My(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(t0);return}this.isUpdating||this.nodes.forEach(CT),this.isUpdating=!1,this.nodes.forEach(RT),this.nodes.forEach(MT),this.nodes.forEach(ET),this.clearAllSnapshots();const c=Ii.now();hn.delta=rr(0,1e3/60,c-hn.timestamp),hn.timestamp=c,hn.isProcessing=!0,Vf.update.process(hn),Vf.preRender.process(hn),Vf.render.process(hn),hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,op.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(AT),this.sharedNodes.forEach(LT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!xy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&(c||ms(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),FT(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return $t();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(OT))){const{scroll:p}=this.root;p&&(_o(d.x,p.offset.x),_o(d.y,p.offset.y))}return d}removeElementScroll(u){var c;const d=$t();if(ii(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ii(d,u),_o(d.x,g.offset.x),_o(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=$t();ii(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&yo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ms(p.latestValues)&&yo(d,p.latestValues)}return ms(this.latestValues)&&yo(d,this.latestValues),d}removeTransform(u){const c=$t();ii(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ms(h.latestValues))continue;Hd(h.latestValues)&&h.updateSnapshot();const p=$t(),g=h.measurePageBox();ii(p,g),qv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ms(this.latestValues)&&qv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=hn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Ra(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ii(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ii(this.target,this.layout.layoutBox),dy(this.target,this.targetDelta)):ii(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Ra(this.relativeTargetOrigin,this.target,x.target),ii(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ea&&gs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Hd(this.parent.latestValues)||fy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===hn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;ii(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;YE(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=$t());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(jv(this.prevProjectionDelta.x,this.projectionDelta.x),jv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ca(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Jv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ea&&gs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vo(),this.projectionDelta=vo(),this.projectionDeltaWithTransform=vo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=vo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=$t(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(NT));this.animationProgress=0;let b;this.mixTargetDelta=R=>{const O=R/1e3;i0(g.x,u.x,O),i0(g.y,u.y,O),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ra(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IT(this.relativeTarget,this.relativeTargetOrigin,v,O),b&&dT(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=$t()),ii(b,this.relativeTarget)),T&&(this.animationValues=p,oT(p,h,this.latestValues,O,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Vr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{Cu.hasAnimatedSinceResize=!0,this.currentAnimation=yT(0,e0,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&Ty(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||$t();const g=Kn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Kn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ii(c,d),yo(c,p),Ca(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new hT),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Kf("z",u,h,this.animationValues);for(let p=0;p<$f.length;p++)Kf(`rotate${$f[p]}`,u,h,this.animationValues),Kf(`skew${$f[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return xT;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Ru(u==null?void 0:u.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Ru(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=pT(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in Hu){if(v[T]===void 0)continue;const{correct:S,applyTo:y}=Hu[T],D=h.transform==="none"?v[T]:S(v[T],g);if(y){const b=y.length;for(let R=0;R<b;R++)h[y[R]]=D}else h[T]=D}return this.options.layoutId&&(h.pointerEvents=g===this?Ru(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(t0),this.root.sharedNodes.clear()}}}function MT(n){n.updateLayout()}function ET(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?si(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Kn(v);v.min=r[g].min,v.max=v.min+x}):Ty(l,t.layoutBox,r)&&si(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Kn(r[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const c=vo();Ca(c,r,t.layoutBox);const d=vo();u?Ca(d,n.applyTransform(o,!0),t.measuredBox):Ca(d,r,t.layoutBox);const h=!xy(c);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const M=$t();Ra(M,t.layoutBox,v.layoutBox);const T=$t();Ra(T,r,x.layoutBox),Sy(M,T)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function TT(n){Ea&&gs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function wT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function AT(n){n.clearSnapshot()}function t0(n){n.clearMeasurements()}function CT(n){n.isLayoutDirty=!1}function RT(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function n0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function PT(n){n.resolveTargetDelta()}function bT(n){n.calcProjection()}function DT(n){n.resetSkewAndRotation()}function LT(n){n.removeLeadSnapshot()}function i0(n,e,t){n.translate=Gt(e.translate,0,t),n.scale=Gt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function r0(n,e,t,r){n.min=Gt(e.min,t.min,r),n.max=Gt(e.max,t.max,r)}function IT(n,e,t,r){r0(n.x,e.x,t.x,r),r0(n.y,e.y,t.y,r)}function NT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const UT={duration:.45,ease:[.4,0,.1,1]},s0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),o0=s0("applewebkit/")&&!s0("chrome/")?Math.round:$n;function a0(n){n.min=o0(n.min),n.max=o0(n.max)}function FT(n){a0(n.x),a0(n.y)}function Ty(n,e,t){return n==="position"||n==="preserve-aspect"&&!OE(Qv(e),Qv(t),.2)}function OT(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const kT=Ey({attachResizeListener:(n,e)=>Ia(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zf={current:void 0},wy=Ey({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Zf.current){const n=new kT({});n.mount(window),n.setOptions({layoutScroll:!0}),Zf.current=n}return Zf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),BT={pan:{Feature:JE},drag:{Feature:QE,ProjectionNode:wy,MeasureLayout:vy}};function l0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&kt.postRender(()=>l(e,Ba(e)))}class VT extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=EE(e,t=>(l0(this.node,t,"Start"),r=>l0(this.node,r,"End"))))}unmount(){}}class zT extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ka(Ia(this.node.current,"focus",()=>this.onFocus()),Ia(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&kt.postRender(()=>l(e,Ba(e)))}class HT extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=CE(e,t=>(u0(this.node,t,"Start"),(r,{success:o})=>u0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Wd=new WeakMap,Qf=new WeakMap,GT=n=>{const e=Wd.get(n.target);e&&e(n)},WT=n=>{n.forEach(GT)};function jT({root:n,...e}){const t=n||document;Qf.has(t)||Qf.set(t,{});const r=Qf.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(WT,{root:n,...e})),r[o]}function XT(n,e,t){const r=jT(e);return Wd.set(n,t),r.observe(n),()=>{Wd.delete(n),r.unobserve(n)}}const YT={some:0,all:1};class qT extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:YT[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return XT(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some($T(e,t))&&this.startObserver()}unmount(){}}function $T({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const KT={inView:{Feature:qT},tap:{Feature:HT},focus:{Feature:zT},hover:{Feature:VT}},ZT={layout:{ProjectionNode:wy,MeasureLayout:vy}},Ay=qe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Ku=qe.createContext({}),ap=typeof window<"u",QT=ap?qe.useLayoutEffect:qe.useEffect,Cy=qe.createContext({strict:!1});function JT(n,e,t,r,o){var l,u;const{visualElement:c}=qe.useContext(Ku),d=qe.useContext(Cy),h=qe.useContext(sp),p=qe.useContext(Ay).reducedMotion,g=qe.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,x=qe.useContext(gy);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&ew(g.current,t,o,x);const M=qe.useRef(!1);qe.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const T=t[J_],S=qe.useRef(!!T&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,T))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,T)));return QT(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),op.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),qe.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,T)}),S.current=!1))}),v}function ew(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Ry(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&go(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function Ry(n){if(n)return n.options.allowProjection!==!1?n.projection:Ry(n.parent)}function tw(n,e,t){return qe.useCallback(r=>{r&&n.mount&&n.mount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}function Zu(n){return Yu(n.animate)||kh.some(e=>Pa(n[e]))}function Py(n){return!!(Zu(n)||n.variants)}function nw(n,e){if(Zu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Pa(t)?t:void 0,animate:Pa(r)?r:void 0}}return n.inherit!==!1?e:{}}function iw(n){const{initial:e,animate:t}=nw(n,qe.useContext(Ku));return qe.useMemo(()=>({initial:e,animate:t}),[c0(e),c0(t)])}function c0(n){return Array.isArray(n)?n.join(" "):n}const f0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ao={};for(const n in f0)Ao[n]={isEnabled:e=>f0[n].some(t=>!!e[t])};function rw(n){for(const e in n)Ao[e]={...Ao[e],...n[e]}}const sw=Symbol.for("motionComponentSymbol");function ow({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){n&&rw(n);function l(c,d){let h;const p={...qe.useContext(Ay),...c,layoutId:aw(c)},{isStatic:g}=p,v=iw(c),x=r(c,g);if(!g&&ap){lw();const M=uw(p);h=M.MeasureLayout,v.visualElement=JT(o,x,p,e,M.ProjectionNode)}return ie.jsxs(Ku.Provider,{value:v,children:[h&&v.visualElement?ie.jsx(h,{visualElement:v.visualElement,...p}):null,t(o,c,tw(x,v.visualElement,d),x,g,v.visualElement)]})}const u=qe.forwardRef(l);return u[sw]=o,u}function aw({layoutId:n}){const e=qe.useContext(my).id;return e&&n!==void 0?e+"-"+n:n}function lw(n,e){qe.useContext(Cy).strict}function uw(n){const{drag:e,layout:t}=Ao;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const cw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lp(n){return typeof n!="string"||n.includes("-")?!1:!!(cw.indexOf(n)>-1||/[A-Z]/u.test(n))}function by(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const Dy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ly(n,e,t,r){by(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Dy.has(o)?o:ip(o),e.attrs[o])}function Iy(n,{layout:e,layoutId:t}){return Rs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Hu[n]||n==="opacity")}function up(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Tn(o[u])||e.style&&Tn(e.style[u])||Iy(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function Ny(n,e,t){const r=up(n,e,t);for(const o in n)if(Tn(n[o])||Tn(e[o])){const l=Ua.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function fw(n){const e=qe.useRef(null);return e.current===null&&(e.current=n()),e.current}function dw({scrapeMotionValuesFromProps:n,createRenderState:e,onMount:t},r,o,l){const u={latestValues:hw(r,o,l,n),renderState:e()};return t&&(u.mount=c=>t(r,c,u)),u}const Uy=n=>(e,t)=>{const r=qe.useContext(Ku),o=qe.useContext(sp),l=()=>dw(n,e,r,o);return t?l():fw(l)};function hw(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Ru(l[v]);let{initial:u,animate:c}=n;const d=Zu(n),h=Py(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const g=p?c:u;if(g&&typeof g!="boolean"&&!Yu(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=Fh(n,v[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const D in y){let b=y[D];if(Array.isArray(b)){const R=p?b.length-1:0;b=b[R]}b!==null&&(o[D]=b)}for(const D in T)o[D]=T[D]}}}return o}const cp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Fy=()=>({...cp(),attrs:{}}),Oy=(n,e)=>e&&typeof n=="number"?e.transform(n):n,pw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},mw=Ua.length;function gw(n,e,t){let r="",o=!0;for(let l=0;l<mw;l++){const u=Ua[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=Oy(c,Xh[u]);if(!d){o=!1;const p=pw[u]||u;r+=`${p}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function fp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Rs.has(d)){u=!0;continue}else if(R_(d)){o[d]=h;continue}else{const p=Oy(h,Xh[d]);d.startsWith("origin")?(c=!0,l[d]=p):r[d]=p}}if(e.transform||(u||t?r.transform=gw(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=l;r.transformOrigin=`${d} ${h} ${p}`}}function d0(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function vw(n,e,t){const r=d0(e,n.x,n.width),o=d0(t,n.y,n.height);return`${r} ${o}`}const _w={offset:"stroke-dashoffset",array:"stroke-dasharray"},yw={offset:"strokeDashoffset",array:"strokeDasharray"};function xw(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?_w:yw;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function dp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},p,g){if(fp(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:x,dimensions:M}=n;v.transform&&(M&&(x.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=vw(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&xw(v,u,c,d,!1)}const hp=n=>typeof n=="string"&&n.toLowerCase()==="svg",Sw={useVisualState:Uy({scrapeMotionValuesFromProps:Ny,createRenderState:Fy,onMount:(n,e,{renderState:t,latestValues:r})=>{kt.read(()=>{try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}),kt.render(()=>{dp(t,r,hp(e.tagName),n.transformTemplate),Ly(e,t)})}})},Mw={useVisualState:Uy({scrapeMotionValuesFromProps:up,createRenderState:cp})};function ky(n,e,t){for(const r in e)!Tn(e[r])&&!Iy(r,t)&&(n[r]=e[r])}function Ew({transformTemplate:n},e){return qe.useMemo(()=>{const t=cp();return fp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function Tw(n,e){const t=n.style||{},r={};return ky(r,t,n),Object.assign(r,Ew(n,e)),r}function ww(n,e){const t={},r=Tw(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const Aw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Gu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Aw.has(n)}let By=n=>!Gu(n);function Cw(n){n&&(By=e=>e.startsWith("on")?!Gu(e):n(e))}try{Cw(require("@emotion/is-prop-valid").default)}catch{}function Rw(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(By(o)||t===!0&&Gu(o)||!e&&!Gu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function Pw(n,e,t,r){const o=qe.useMemo(()=>{const l=Fy();return dp(l,e,hp(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};ky(l,n.style,n),o.style={...l,...o.style}}return o}function bw(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(lp(t)?Pw:ww)(r,l,u,t),h=Rw(r,typeof t=="string",n),p=t!==qe.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=qe.useMemo(()=>Tn(g)?g.get():g,[g]);return qe.createElement(t,{...p,children:v})}}function Dw(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...lp(r)?Sw:Mw,preloadedFeatures:n,useRender:bw(o),createVisualElement:e,Component:r};return ow(u)}}const jd={current:null},Vy={current:!1};function Lw(){if(Vy.current=!0,!!ap)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>jd.current=n.matches;n.addListener(e),e()}else jd.current=!1}function Iw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Tn(o))n.addValue(r,o);else if(Tn(l))n.addValue(r,La(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,La(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const h0=new WeakMap,Nw=[...D_,En,zr],Uw=n=>Nw.find(b_(n)),p0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Fw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Ii.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,kt.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=Zu(t),this.isVariantNode=Py(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const x=g[v];d[v]!==void 0&&Tn(x)&&x.set(d[v],!1)}}mount(e){this.current=e,h0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Vy.current||Lw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:jd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){h0.delete(this.current),this.projection&&this.projection.unmount(),Vr(this.notifyUpdate),Vr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Rs.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ao){const t=Ao[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<p0.length;r++){const o=p0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Iw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=La(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(A_(o)||w_(o))?o=parseFloat(o):!Uw(o)&&zr.test(t)&&(o=B_(e,t)),this.setBaseTarget(e,Tn(o)?o.get():o)),Tn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Fh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Tn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new np),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class zy extends Fw{constructor(){super(...arguments),this.KeyframeResolver=V_}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Ow(n){return window.getComputedStyle(n)}class kw extends zy{constructor(){super(...arguments),this.type="html",this.renderInstance=by}readValueFromInstance(e,t){if(Rs.has(t)){const r=Yh(t);return r&&r.default||0}else{const r=Ow(e),o=(R_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return hy(e,t)}build(e,t,r){fp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return up(e,t,r)}}class Bw extends zy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Rs.has(t)){const r=Yh(t);return r&&r.default||0}return t=Dy.has(t)?t:ip(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Ny(e,t,r)}build(e,t,r){dp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Ly(e,t,r,o)}mount(e){this.isSVGTag=hp(e.tagName),super.mount(e)}}const Vw=(n,e)=>lp(n)?new Bw(e):new kw(e,{allowProjection:n!==qe.Fragment}),zw=Dw({...SE,...KT,...BT,...ZT},Vw),pn=y1(zw),Hw=()=>{const[n,e]=qe.useState(!1),t={open:{clipPath:"circle(1200px at 43px 43px)",transition:{type:"spring",duration:.8}},closed:{clipPath:"circle(30px at 43px 43px)",transition:{type:"spring",duration:.8}}},r=[{id:1,text:"About"},{id:2,text:"Projects"},{id:3,text:"Skills"},{id:4,text:"Experience"},{id:5,text:"Contact"}];return ie.jsxs("div",{className:" top-0 left-0 w-full bg-black text-white z-50 lg:flex justify-between",children:[ie.jsxs(pn.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},transition:{duration:.5},className:"container mx-auto hidden md:flex justify-between items-center py-4 px-6",children:[ie.jsxs("div",{className:"text-2xl font-bold flex items-center gap-1 ",children:[ie.jsx("span",{className:"text-white",children:"Port"}),ie.jsx("span",{className:"text-purple-500",children:"folio"})]}),ie.jsx("div",{className:"flex items-center space-x-6 text-lg",children:r.map(o=>ie.jsx("a",{href:`#${o.text.toLowerCase()}`,className:"hover:text-purple-500 cursor-pointer",children:o.text},o.id))}),ie.jsx("a",{href:"https://docs.google.com/document/d/1nUqcfsOMmYIbqJSXOygvKtoSVqWpJfUf/edit?usp=sharing&ouid=115142436485296858419&rtpof=true&sd=true",target:"_blank",className:"bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full",children:"Download CV"})]}),ie.jsxs("div",{className:"flex md:hidden justify-between",children:[ie.jsx(pn.div,{animate:n?"open":"closed",children:ie.jsxs(pn.div,{variants:t,onClick:()=>e(o=>!o),className:"bg-white sm:w-2/4 h-[100%] text-black fixed z-10",children:[ie.jsx("div",{className:"px-7 py-6",children:n?ie.jsx(v1,{size:30}):ie.jsx(_1,{size:30})}),n&&ie.jsxs("div",{className:"flex flex-col items-center justify-center",children:[ie.jsx("ul",{className:"space-y-6 text-black text-lg",children:r.map(o=>ie.jsx("li",{className:"hover:text-purple-500 duration-200 cursor-pointer",children:o.text},o.id))}),ie.jsx("a",{className:"text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full",children:"Download CV"})]})]})}),ie.jsxs(pn.div,{className:"text-4xl font-bold items-center gap-2 py-6 pr-1",initial:{opacity:0,x:100,y:-100},animate:{opacity:1,x:0,y:0},transition:{duration:.5},children:[ie.jsx("span",{className:"text-white",children:"Port"}),ie.jsx("span",{className:"text-purple-500",children:"folio"})]})]})]})};function Gw(n){return Wr({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function Ww(n){return Wr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(n)}function jw(n){return Wr({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Xw(n){return Wr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},child:[]}]})(n)}function Yw(){const e={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{duration:2,ease:"easeInOut"}},hover:{scale:1.5,transition:{duration:.3}}};return ie.jsxs("div",{className:"flex space-x-4",children:[ie.jsx(pn.a,{className:"text-green-500 text-4xl",variants:e,initial:"initial",animate:"animate",whileHover:"hover",href:"https://wa.me/+9958060784",target:"_blank",children:ie.jsx(jw,{})}),ie.jsx(pn.a,{className:"text-red-500 text-4xl",variants:e,initial:"initial",animate:"animate",whileHover:"hover",href:"https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw",target:"_blank",children:ie.jsx(Xw,{})}),ie.jsx(pn.a,{className:"text-yellow-500 text-4xl",variants:e,initial:"initial",animate:"animate",whileHover:"hover",href:"https://github.com/SHANTANUKUMAR3688",target:"_blank",children:ie.jsx(Gw,{})}),ie.jsx(pn.a,{className:"text-blue-500 text-4xl",variants:e,initial:"initial",animate:"animate",whileHover:"hover",href:"https://www.linkedin.com/in/shantanukumar3688/",target:"_blank",children:ie.jsx(Ww,{})})]})}function Qu(n,e,t,r){return new(t||(t=Promise))(function(o,l){function u(h){try{d(r.next(h))}catch(p){l(p)}}function c(h){try{d(r.throw(h))}catch(p){l(p)}}function d(h){var p;h.done?o(h.value):(p=h.value,p instanceof t?p:new t(function(g){g(p)})).then(u,c)}d((r=r.apply(n,[])).next())})}function Or(n,e){var t,r,o,l,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(d){return function(h){return function(p){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&p[0]?r.return:p[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,p[1])).done)return o;switch(r=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return u.label++,{value:p[1],done:!1};case 5:u.label++,r=p[1],p=[0];continue;case 7:p=u.ops.pop(),u.trys.pop();continue;default:if(o=u.trys,!((o=o.length>0&&o[o.length-1])||p[0]!==6&&p[0]!==2)){u=0;continue}if(p[0]===3&&(!o||p[1]>o[0]&&p[1]<o[3])){u.label=p[1];break}if(p[0]===6&&u.label<o[1]){u.label=o[1],o=p;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(p);break}o[2]&&u.ops.pop(),u.trys.pop();continue}p=e.call(n,u)}catch(g){p=[6,g],r=0}finally{t=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([d,h])}}}function Xd(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function yi(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r,o,l=t.call(n),u=[];try{for(;(e===void 0||e-- >0)&&!(r=l.next()).done;)u.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return u}function bi(n,e,t){if(arguments.length===2)for(var r,o=0,l=e.length;o<l;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}function m0(n,e,t,r,o){for(var l=[],u=5;u<arguments.length;u++)l[u-5]=arguments[u];return Qu(this,void 0,void 0,function(){var c,d,h,p,g,v;return Or(this,function(x){switch(x.label){case 0:x.trys.push([0,12,13,14]),c=Xd(l),d=c.next(),x.label=1;case 1:if(d.done)return[3,11];switch(h=d.value,typeof h){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,qw(n,e,h,t,r,o)];case 3:return x.sent(),[3,10];case 4:return[4,Hy(h)];case 5:return x.sent(),[3,10];case 6:return[4,h.apply(void 0,bi([n,e,t,r,o],yi(l),!1))];case 7:return x.sent(),[3,10];case 8:return[4,h];case 9:x.sent(),x.label=10;case 10:return d=c.next(),[3,1];case 11:return[3,14];case 12:return p=x.sent(),g={error:p},[3,14];case 13:try{d&&!d.done&&(v=c.return)&&v.call(c)}finally{if(g)throw g.error}return[7];case 14:return[2]}})})}function qw(n,e,t,r,o,l){return Qu(this,void 0,void 0,function(){var u,c;return Or(this,function(d){switch(d.label){case 0:return u=n.textContent||"",c=function(h,p){var g=yi(p).slice(0);return bi(bi([],yi(h),!1),[NaN],!1).findIndex(function(v,x){return g[x]!==v})}(u,t),[4,$w(n,bi(bi([],yi(Zw(u,e,c)),!1),yi(Kw(t,e,c)),!1),r,o,l)];case 1:return d.sent(),[2]}})})}function Hy(n){return Qu(this,void 0,void 0,function(){return Or(this,function(e){switch(e.label){case 0:return[4,new Promise(function(t){return setTimeout(t,n)})];case 1:return e.sent(),[2]}})})}function $w(n,e,t,r,o){return Qu(this,void 0,void 0,function(){var l,u,c,d,h,p,g,v,x,M,T,S,y;return Or(this,function(D){switch(D.label){case 0:if(l=e,o){for(u=0,c=1;c<e.length;c++)if(d=yi([e[c-1],e[c]],2),h=d[0],(p=d[1]).length>h.length||p===""){u=c;break}l=e.slice(u,e.length)}D.label=1;case 1:D.trys.push([1,6,7,8]),g=Xd(function(b){var R,O,F,U,B,P,C;return Or(this,function(k){switch(k.label){case 0:R=function(oe){return Or(this,function(Q){switch(Q.label){case 0:return[4,{op:function(ce){return requestAnimationFrame(function(){return ce.textContent=oe})},opCode:function(ce){var de=ce.textContent||"";return oe===""||de.length>oe.length?"DELETE":"WRITING"}}];case 1:return Q.sent(),[2]}})},k.label=1;case 1:k.trys.push([1,6,7,8]),O=Xd(b),F=O.next(),k.label=2;case 2:return F.done?[3,5]:(U=F.value,[5,R(U)]);case 3:k.sent(),k.label=4;case 4:return F=O.next(),[3,2];case 5:return[3,8];case 6:return B=k.sent(),P={error:B},[3,8];case 7:try{F&&!F.done&&(C=O.return)&&C.call(O)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(l)),v=g.next(),D.label=2;case 2:return v.done?[3,5]:(x=v.value,M=x.opCode(n)==="WRITING"?t+t*(Math.random()-.5):r+r*(Math.random()-.5),x.op(n),[4,Hy(M)]);case 3:D.sent(),D.label=4;case 4:return v=g.next(),[3,2];case 5:return[3,8];case 6:return T=D.sent(),S={error:T},[3,8];case 7:try{v&&!v.done&&(y=g.return)&&y.call(g)}finally{if(S)throw S.error}return[7];case 8:return[2]}})})}function Kw(n,e,t){var r,o;return t===void 0&&(t=0),Or(this,function(l){switch(l.label){case 0:r=e(n),o=r.length,l.label=1;case 1:return t<o?[4,r.slice(0,++t).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function Zw(n,e,t){var r,o;return t===void 0&&(t=0),Or(this,function(l){switch(l.label){case 0:r=e(n),o=r.length,l.label=1;case 1:return o>t?[4,r.slice(0,--o).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var Qw="index-module_type__E-SaG";(function(n,e){e===void 0&&(e={});var t=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var Jw=qe.memo(qe.forwardRef(function(n,e){var t=n.sequence,r=n.repeat,o=n.className,l=n.speed,u=l===void 0?40:l,c=n.deletionSpeed,d=n.omitDeletionAnimation,h=d!==void 0&&d,p=n.preRenderFirstString,g=p!==void 0&&p,v=n.wrapper,x=v===void 0?"span":v,M=n.splitter,T=M===void 0?function(q){return bi([],yi(q),!1)}:M,S=n.cursor,y=S===void 0||S,D=n.style,b=function(q,N){var J={};for(var we in q)Object.prototype.hasOwnProperty.call(q,we)&&N.indexOf(we)<0&&(J[we]=q[we]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function"){var $=0;for(we=Object.getOwnPropertySymbols(q);$<we.length;$++)N.indexOf(we[$])<0&&Object.prototype.propertyIsEnumerable.call(q,we[$])&&(J[we[$]]=q[we[$]])}return J}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),R=b["aria-label"],O=b["aria-hidden"],F=b.role;c||(c=u);var U=new Array(2).fill(40);[u,c].forEach(function(q,N){switch(typeof q){case"number":U[N]=Math.abs(q-100);break;case"object":var J=q.type,we=q.value;if(typeof we!="number")break;J==="keyStrokeDelayInMs"&&(U[N]=we)}});var B,P,C,k,oe,Q,ce=U[0],de=U[1],le=function(q,N){N===void 0&&(N=null);var J=qe.useRef(N);return qe.useEffect(function(){q&&(typeof q=="function"?q(J.current):q.current=J.current)},[q]),J}(e),se=Qw;B=o?"".concat(y?se+" ":"").concat(o):y?se:"",P=qe.useRef(function(){var q,N=t;r===1/0?q=m0:typeof r=="number"&&(N=Array(1+r).fill(t).flat());var J=q?bi(bi([],yi(N),!1),[q],!1):bi([],yi(N),!1);return m0.apply(void 0,bi([le.current,T,ce,de,h],yi(J),!1)),function(){le.current}}),C=qe.useRef(),k=qe.useRef(!1),oe=qe.useRef(!1),Q=yi(qe.useState(0),2)[1],k.current&&(oe.current=!0),qe.useEffect(function(){return k.current||(C.current=P.current(),k.current=!0),Q(function(q){return q+1}),function(){oe.current&&C.current&&C.current()}},[]);var V=x,ue=g?t.find(function(q){return typeof q=="string"})||"":null;return er.createElement(V,{"aria-hidden":O,"aria-label":R,role:F,style:D,className:B,children:R?er.createElement("span",{"aria-hidden":"true",ref:le,children:ue}):ue,ref:R?void 0:le})}),function(n,e){return!0});function eA({codeColor:n,codeblock:e}){return ie.jsx("div",{className:`w-full flex flex-col gap-2 font-bold font-mono ${n}`,children:ie.jsx(Jw,{sequence:[e,2e3,""],repeat:1/0,cursor:!0,style:{whiteSpace:"pre-line",display:"block"},omitDeletionAnimation:!0})})}function tA(n){return Wr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17.0943 7.14643C17.6874 6.93123 17.9818 6.85378 18.1449 6.82608C18.1461 6.87823 18.1449 6.92051 18.1422 6.94825C17.9096 9.39217 16.8906 15.4048 16.3672 18.2026C16.2447 18.8578 16.1507 19.1697 15.5179 18.798C15.1014 18.5532 14.7245 18.2452 14.3207 17.9805C12.9961 17.1121 11.1 15.8189 11.2557 15.8967C9.95162 15.0373 10.4975 14.5111 11.2255 13.8093C11.3434 13.6957 11.466 13.5775 11.5863 13.4525C11.64 13.3967 11.9027 13.1524 12.2731 12.8081C13.4612 11.7035 15.7571 9.56903 15.8151 9.32202C15.8246 9.2815 15.8334 9.13045 15.7436 9.05068C15.6539 8.97092 15.5215 8.9982 15.4259 9.01989C15.2904 9.05064 13.1326 10.4769 8.95243 13.2986C8.33994 13.7192 7.78517 13.9242 7.28811 13.9134L7.29256 13.9156C6.63781 13.6847 5.9849 13.4859 5.32855 13.286C4.89736 13.1546 4.46469 13.0228 4.02904 12.8812C3.92249 12.8466 3.81853 12.8137 3.72083 12.783C8.24781 10.8109 11.263 9.51243 12.7739 8.884C14.9684 7.97124 16.2701 7.44551 17.0943 7.14643ZM19.5169 5.21806C19.2635 5.01244 18.985 4.91807 18.7915 4.87185C18.5917 4.82412 18.4018 4.80876 18.2578 4.8113C17.7814 4.81969 17.2697 4.95518 16.4121 5.26637C15.5373 5.58382 14.193 6.12763 12.0058 7.03736C10.4638 7.67874 7.39388 9.00115 2.80365 11.001C2.40046 11.1622 2.03086 11.3451 1.73884 11.5619C1.46919 11.7622 1.09173 12.1205 1.02268 12.6714C0.970519 13.0874 1.09182 13.4714 1.33782 13.7738C1.55198 14.037 1.82635 14.1969 2.03529 14.2981C2.34545 14.4483 2.76276 14.5791 3.12952 14.6941C3.70264 14.8737 4.27444 15.0572 4.84879 15.233C6.62691 15.7773 8.09066 16.2253 9.7012 17.2866C10.8825 18.0651 12.041 18.8775 13.2243 19.6531C13.6559 19.936 14.0593 20.2607 14.5049 20.5224C14.9916 20.8084 15.6104 21.0692 16.3636 20.9998C17.5019 20.8951 18.0941 19.8479 18.3331 18.5703C18.8552 15.7796 19.8909 9.68351 20.1332 7.13774C20.1648 6.80544 20.1278 6.433 20.097 6.25318C20.0653 6.068 19.9684 5.58448 19.5169 5.21806Z"},child:[]}]})(n)}const nA=()=>ie.jsxs("section",{className:"relative w-full",id:"about",children:[ie.jsx("header",{className:"w-1/2 aspect-[16/2] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"}),ie.jsx("header",{className:"w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"}),ie.jsx("section",{className:"w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative",children:ie.jsxs("article",{className:"grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-1 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto",children:[ie.jsxs("section",{className:"lg:py-0 lg:ml-20 flex flex-col justify-center items-center lg:items-start",children:[ie.jsxs("header",{className:"text-center lg:text-left",children:[ie.jsxs("h1",{className:"pt-4 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl",children:["Hi, I’m"," ",ie.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-500",children:"SHANTANU"})]}),ie.jsx("p",{className:"text-white font-bold text-xl sm:text-2xl mt-2",children:"Web Developer"})]}),ie.jsx(eA,{className:"pt-5 text-center lg:text-left mx-auto max-w-[280px] sm:max-w-[370px] md:max-w-xl",codeblock:"Passionate and motivated Full-Stack Developer specializing in the MERN Stack, with a solid foundation in software development principles.",codeColor:"text-white"}),ie.jsx("div",{className:"flex justify-center lg:justify-start mt-4",children:ie.jsx(Yw,{})}),ie.jsx("div",{className:"flex justify-center lg:justify-start mt-4",children:ie.jsxs("button",{className:"text-white flex items-center justify-center space=-x-2 bg-yellow-500 rounded-lg h-10 px-6 sm:w-44 font-bold",children:["Let’s Connect",ie.jsx(tA,{className:"text-2xl"})]})})]}),ie.jsx("figure",{className:"flex justify-center lg:justify-end mt-10 md:mt-0 lg:mr-10",children:ie.jsx(pn.div,{className:"w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] flex justify-center items-center p-3 rounded-full overflow-hidden relative",animate:{backgroundColor:["#FFC107","#FF7556","#ff6667"],scale:[1,1.1,1],rotate:[0,5,-5,0]},transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"reverse"},children:ie.jsx("img",{src:"https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg",alt:"Hero Pic",className:"absolute inset-0 w-full h-full object-cover z-10 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-500 ease-in-out"})})})]})})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="171",iA=0,g0=1,rA=2,Gy=1,sA=2,$i=3,Hr=0,Vn=1,Ki=2,kr=0,So=1,v0=2,_0=3,y0=4,oA=5,ys=100,aA=101,lA=102,uA=103,cA=104,fA=200,dA=201,hA=202,pA=203,Yd=204,qd=205,mA=206,gA=207,vA=208,_A=209,yA=210,xA=211,SA=212,MA=213,EA=214,$d=0,Kd=1,Zd=2,Co=3,Qd=4,Jd=5,eh=6,th=7,Wy=0,TA=1,wA=2,Br=0,AA=1,CA=2,RA=3,PA=4,bA=5,DA=6,LA=7,jy=300,Ro=301,Po=302,nh=303,ih=304,Ju=306,rh=1e3,Ms=1001,sh=1002,Mi=1003,IA=1004,nu=1005,Di=1006,Jf=1007,Es=1008,sr=1009,Xy=1010,Yy=1011,Na=1012,mp=1013,As=1014,Zi=1015,Va=1016,gp=1017,vp=1018,bo=1020,qy=35902,$y=1021,Ky=1022,Si=1023,Zy=1024,Qy=1025,Mo=1026,Do=1027,Jy=1028,_p=1029,ex=1030,yp=1031,xp=1033,Pu=33776,bu=33777,Du=33778,Lu=33779,oh=35840,ah=35841,lh=35842,uh=35843,ch=36196,fh=37492,dh=37496,hh=37808,ph=37809,mh=37810,gh=37811,vh=37812,_h=37813,yh=37814,xh=37815,Sh=37816,Mh=37817,Eh=37818,Th=37819,wh=37820,Ah=37821,Iu=36492,Ch=36494,Rh=36495,tx=36283,Ph=36284,bh=36285,Dh=36286,NA=3200,UA=3201,FA=0,OA=1,Fr="",oi="srgb",Lo="srgb-linear",Wu="linear",Dt="srgb",Js=7680,x0=519,kA=512,BA=513,VA=514,nx=515,zA=516,HA=517,GA=518,WA=519,S0=35044,M0="300 es",Qi=2e3,ju=2001;class Uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Lh=180/Math.PI;function za(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function jA(n,e){return(n%e+e)%e}function td(n,e,t){return(1-t)*n+t*e}function ga(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=d,p[6]=r,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],p=r[4],g=r[7],v=r[2],x=r[5],M=r[8],T=o[0],S=o[3],y=o[6],D=o[1],b=o[4],R=o[7],O=o[2],F=o[5],U=o[8];return l[0]=u*T+c*D+d*O,l[3]=u*S+c*b+d*F,l[6]=u*y+c*R+d*U,l[1]=h*T+p*D+g*O,l[4]=h*S+p*b+g*F,l[7]=h*y+p*R+g*U,l[2]=v*T+x*D+M*O,l[5]=v*S+x*b+M*F,l[8]=v*y+x*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-r*l*p+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(o*h-p*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(p*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(nd.makeScale(e,t)),this}rotate(e){return this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new lt;function ix(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XA(){const n=Xu("canvas");return n.style.display="block",n}const E0={};function po(n){n in E0||(E0[n]=!0,console.warn(n))}function YA(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function qA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $A(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const T0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KA(){const n={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?Wu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Lo]:{primaries:e,whitePoint:r,transfer:Wu,toXYZ:T0,fromXYZ:w0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:T0,fromXYZ:w0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}const wt=KA();function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let eo;class ZA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{eo===void 0&&(eo=Xu("canvas")),eo.width=e.width,eo.height=e.height;const r=eo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ir(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QA=0;class rx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(id(o[u].image)):l.push(id(o[u]))}else l=id(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function id(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JA=0;class zn extends Uo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=Ms,o=Ms,l=Di,u=Es,c=Si,d=sr,h=zn.DEFAULT_ANISOTROPY,p=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=za(),this.name="",this.source=new rx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rh:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rh:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=jy;zn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,R=(x+1)/2,O=(y+1)/2,F=(p+v)/4,U=(g+T)/4,B=(M+S)/4;return b>R&&b>O?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=F/r,l=U/r):R>O?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=F/o,l=B/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=U/l,o=B/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(v-p)*(v-p));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(v-p)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eC extends Uo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new zn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends eC{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class sx extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tC extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==v||h!==x||p!==M){let S=1-c;const y=d*v+h*x+p*M+g*T,D=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const O=Math.sqrt(b),F=Math.atan2(O,y*D);S=Math.sin(S*F)/O,c=Math.sin(c*F)/O}const R=c*D;if(d=d*S+v*R,h=h*S+x*R,p=p*S+M*R,g=g*S+T*R,S===1-c){const O=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=O,h*=O,p*=O,g*=O}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],p=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+p*g+d*x-h*v,e[t+1]=d*M+p*v+h*g-c*x,e[t+2]=h*M+p*x+c*v-d*g,e[t+3]=p*M-c*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),p=c(o/2),g=c(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*p*g+h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g-v*x*M;break;case"YXZ":this._x=v*p*g+h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g+v*x*M;break;case"ZXY":this._x=v*p*g-h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g-v*x*M;break;case"ZYX":this._x=v*p*g-h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g+v*x*M;break;case"YZX":this._x=v*p*g+h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g-v*x*M;break;case"XZY":this._x=v*p*g-h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=r+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(p-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+u*c+o*h-l*d,this._y=o*p+u*d+l*c-r*h,this._z=l*p+u*h+r*d-o*c,this._w=u*p-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(A0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(A0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),p=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*p,this.y=r+d*p+c*h-l*g,this.z=o+d*g+l*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new re,A0=new Ha;class Ga{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),iu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),iu.copy(r.boundingBox)),iu.applyMatrix4(e.matrixWorld),this.union(iu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ru.subVectors(this.max,va),to.subVectors(e.a,va),no.subVectors(e.b,va),io.subVectors(e.c,va),Pr.subVectors(no,to),br.subVectors(io,no),us.subVectors(to,io);let t=[0,-Pr.z,Pr.y,0,-br.z,br.y,0,-us.z,us.y,Pr.z,0,-Pr.x,br.z,0,-br.x,us.z,0,-us.x,-Pr.y,Pr.x,0,-br.y,br.x,0,-us.y,us.x,0];return!sd(t,to,no,io,ru)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,to,no,io,ru))?!1:(su.crossVectors(Pr,br),t=[su.x,su.y,su.z],sd(t,to,no,io,ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new re,new re,new re,new re,new re,new re,new re,new re],mi=new re,iu=new Ga,to=new re,no=new re,io=new re,Pr=new re,br=new re,us=new re,va=new re,ru=new re,su=new re,cs=new re;function sd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){cs.fromArray(n,l);const c=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),d=e.dot(cs),h=t.dot(cs),p=r.dot(cs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const nC=new Ga,_a=new re,od=new re;class ec{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):nC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(_a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(od)),this.expandByPoint(_a.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new re,ad=new re,ou=new re,Dr=new re,ld=new re,au=new re,ud=new re;class ox{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ad.copy(e).add(t).multiplyScalar(.5),ou.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(ad);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ou),c=Dr.dot(this.direction),d=-Dr.dot(ou),h=Dr.lengthSq(),p=Math.abs(1-u*u);let g,v,x,M;if(p>0)if(g=u*d-c,v=u*c-d,M=l*p,g>=0)if(v>=-M)if(v<=M){const T=1/p;g*=T,v*=T,x=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(ad).addScaledVector(ou,v),x}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),o=ji.dot(ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,o,l){ld.subVectors(t,e),au.subVectors(r,e),ud.crossVectors(ld,au);let u=this.direction.dot(ud),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Dr.subVectors(this.origin,e);const d=c*this.direction.dot(au.crossVectors(Dr,au));if(d<0)return null;const h=c*this.direction.dot(ld.cross(Dr));if(h<0||d+h>u)return null;const p=-c*Dr.dot(ud);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S)}set(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),l=1/ro.setFromMatrixColumn(e,1).length(),u=1/ro.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*p,x=u*g,M=c*p,T=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,x=d*g,M=h*p,T=h*g;t[0]=v+T*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=x*c-M,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,x=d*g,M=h*p,T=h*g;t[0]=v-T*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*p,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,x=u*g,M=c*p,T=c*g;t[0]=d*p,t[4]=M*h-x,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=T-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=x*g+M,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+T,t[5]=u*p,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*p,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iC,e,rC)}lookAt(e,t,r){const o=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Lr.crossVectors(r,Yn),Lr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Lr.crossVectors(r,Yn)),Lr.normalize(),lu.crossVectors(Yn,Lr),o[0]=Lr.x,o[4]=lu.x,o[8]=Yn.x,o[1]=Lr.y,o[5]=lu.y,o[9]=Yn.y,o[2]=Lr.z,o[6]=lu.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],p=r[1],g=r[5],v=r[9],x=r[13],M=r[2],T=r[6],S=r[10],y=r[14],D=r[3],b=r[7],R=r[11],O=r[15],F=o[0],U=o[4],B=o[8],P=o[12],C=o[1],k=o[5],oe=o[9],Q=o[13],ce=o[2],de=o[6],le=o[10],se=o[14],V=o[3],ue=o[7],q=o[11],N=o[15];return l[0]=u*F+c*C+d*ce+h*V,l[4]=u*U+c*k+d*de+h*ue,l[8]=u*B+c*oe+d*le+h*q,l[12]=u*P+c*Q+d*se+h*N,l[1]=p*F+g*C+v*ce+x*V,l[5]=p*U+g*k+v*de+x*ue,l[9]=p*B+g*oe+v*le+x*q,l[13]=p*P+g*Q+v*se+x*N,l[2]=M*F+T*C+S*ce+y*V,l[6]=M*U+T*k+S*de+y*ue,l[10]=M*B+T*oe+S*le+y*q,l[14]=M*P+T*Q+S*se+y*N,l[3]=D*F+b*C+R*ce+O*V,l[7]=D*U+b*k+R*de+O*ue,l[11]=D*B+b*oe+R*le+O*q,l[15]=D*P+b*Q+R*se+O*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*p-l*d*p)+S*(+t*h*g-t*c*x-l*u*g+r*u*x+l*c*p-r*h*p)+y*(-o*c*p-t*d*g+t*c*v+o*u*g-r*u*v+r*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=g*S*h-T*v*h+T*d*x-c*S*x-g*d*y+c*v*y,b=M*v*h-p*S*h-M*d*x+u*S*x+p*d*y-u*v*y,R=p*T*h-M*g*h+M*c*x-u*T*x-p*c*y+u*g*y,O=M*g*d-p*T*d-M*c*v+u*T*v+p*c*S-u*g*S,F=t*D+r*b+o*R+l*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(T*v*l-g*S*l-T*o*x+r*S*x+g*o*y-r*v*y)*U,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*y+r*d*y)*U,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*x-r*d*x)*U,e[4]=b*U,e[5]=(p*S*l-M*v*l+M*o*x-t*S*x-p*o*y+t*v*y)*U,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*U,e[7]=(u*v*l-p*d*l+p*o*h-t*v*h-u*o*x+t*d*x)*U,e[8]=R*U,e[9]=(M*g*l-p*T*l-M*r*x+t*T*x+p*r*y-t*g*y)*U,e[10]=(u*T*l-M*c*l+M*r*h-t*T*h-u*r*y+t*c*y)*U,e[11]=(p*c*l-u*g*l-p*r*h+t*g*h+u*r*x-t*c*x)*U,e[12]=O*U,e[13]=(p*T*o-M*g*o+M*r*v-t*T*v-p*r*S+t*g*S)*U,e[14]=(M*c*o-u*T*o-M*r*d+t*T*d+u*r*S-t*c*S)*U,e[15]=(u*g*o-p*c*o+p*r*d-t*g*d-u*r*v+t*c*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,p=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+r,p*d-o*u,0,h*d-o*c,p*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,p=u+u,g=c+c,v=l*h,x=l*p,M=l*g,T=u*p,S=u*g,y=c*g,D=d*h,b=d*p,R=d*g,O=r.x,F=r.y,U=r.z;return o[0]=(1-(T+y))*O,o[1]=(x+R)*O,o[2]=(M-b)*O,o[3]=0,o[4]=(x-R)*F,o[5]=(1-(v+y))*F,o[6]=(S+D)*F,o[7]=0,o[8]=(M+b)*U,o[9]=(S-D)*U,o[10]=(1-(v+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ro.set(o[0],o[1],o[2]).length();const u=ro.set(o[4],o[5],o[6]).length(),c=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],gi.copy(this);const h=1/l,p=1/u,g=1/c;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=p,gi.elements[5]*=p,gi.elements[6]*=p,gi.elements[8]*=g,gi.elements[9]*=g,gi.elements[10]*=g,t.setFromRotationMatrix(gi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Qi){const d=this.elements,h=2*l/(t-e),p=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let x,M;if(c===Qi)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===ju)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Qi){const d=this.elements,h=1/(t-e),p=1/(r-o),g=1/(u-l),v=(t+e)*h,x=(r+o)*p;let M,T;if(c===Qi)M=(u+l)*g,T=-2*g;else if(c===ju)M=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ro=new re,gi=new Zt,iC=new re(0,0,0),rC=new re(1,1,1),Lr=new re,lu=new re,Yn=new re,C0=new Zt,R0=new Ha;class or{constructor(e=0,t=0,r=0,o=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return C0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sC=0;const P0=new re,so=new Ha,Xi=new Zt,uu=new re,ya=new re,oC=new re,aC=new Ha,b0=new re(1,0,0),D0=new re(0,1,0),L0=new re(0,0,1),I0={type:"added"},lC={type:"removed"},oo={type:"childadded",child:null},cd={type:"childremoved",child:null};class Hn extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sC++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new re,t=new or,r=new Ha,o=new re(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new lt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(b0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(L0,e)}translateOnAxis(e,t){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(b0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(L0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?uu.copy(e):uu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ya,uu,this.up):Xi.lookAt(uu,ya,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),so.setFromRotationMatrix(Xi),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lC),cd.child=e,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,oC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,aC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Hn.DEFAULT_UP=new re(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new re,Yi=new re,fd=new re,qi=new re,ao=new re,lo=new re,N0=new re,dd=new re,hd=new re,pd=new re,md=new Kt,gd=new Kt,vd=new Kt;class xi{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vi.subVectors(e,t),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){vi.subVectors(o,t),Yi.subVectors(r,t),fd.subVectors(e,t);const u=vi.dot(vi),c=vi.dot(Yi),d=vi.dot(fd),h=Yi.dot(Yi),p=Yi.dot(fd),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-c*p)*v,M=(u*p-c*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,qi.x),d.addScaledVector(u,qi.y),d.addScaledVector(c,qi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return md.setScalar(0),gd.setScalar(0),vd.setScalar(0),md.fromBufferAttribute(e,t),gd.fromBufferAttribute(e,r),vd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(md,l.x),u.addScaledVector(gd,l.y),u.addScaledVector(vd,l.z),u}static isFrontFacing(e,t,r,o){return vi.subVectors(r,t),Yi.subVectors(e,t),vi.cross(Yi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;ao.subVectors(o,r),lo.subVectors(l,r),dd.subVectors(e,r);const d=ao.dot(dd),h=lo.dot(dd);if(d<=0&&h<=0)return t.copy(r);hd.subVectors(e,o);const p=ao.dot(hd),g=lo.dot(hd);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(r).addScaledVector(ao,u);pd.subVectors(e,l);const x=ao.dot(pd),M=lo.dot(pd);if(M>=0&&x<=M)return t.copy(l);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(lo,c);const S=p*M-x*g;if(S<=0&&g-p>=0&&x-M>=0)return N0.subVectors(l,o),c=(g-p)/(g-p+(x-M)),t.copy(o).addScaledVector(N0,c);const y=1/(S+T+v);return u=T*y,c=v*y,t.copy(r).addScaledVector(ao,u).addScaledVector(lo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},cu={h:0,s:0,l:0};function _d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=jA(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=_d(u,l,e+1/3),this.g=_d(u,l,e),this.b=_d(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=oi){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const r=lx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return wt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(_t(Mn.r*255,0,255))*65536+Math.round(_t(Mn.g*255,0,255))*256+Math.round(_t(Mn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Mn.copy(this),t);const r=Mn.r,o=Mn.g,l=Mn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=oi){wt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,o=Mn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(cu);const r=td(Ir.h,cu.h,t),o=td(Ir.s,cu.s,t),l=td(Ir.l,cu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Rt;Rt.NAMES=lx;let uC=0;class Wa extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=za(),this.name="",this.type="Material",this.blending=So,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=qd,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==qd&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ux extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=Wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new re,fu=new Lt;class Ei{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=S0,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)fu.fromBufferAttribute(this,t),fu.applyMatrix3(e),this.setXY(t,fu.x,fu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ga(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ga(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ga(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ga(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ga(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Bn(t,this.array),r=Bn(r,this.array),o=Bn(o,this.array),l=Bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==S0&&(e.usage=this.usage),e}}class cx extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fx extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ws extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}let cC=0;const ri=new Zt,yd=new Hn,uo=new re,qn=new Ga,xa=new Ga,un=new re;class ar extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?fx:cx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ws(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];xa.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(qn.min,xa.min),qn.expandByPoint(un),un.addVectors(qn.max,xa.max),qn.expandByPoint(un)):(qn.expandByPoint(xa.min),qn.expandByPoint(xa.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)un.fromBufferAttribute(c,h),d&&(uo.fromBufferAttribute(e,h),un.add(uo)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let B=0;B<r.count;B++)c[B]=new re,d[B]=new re;const h=new re,p=new re,g=new re,v=new Lt,x=new Lt,M=new Lt,T=new re,S=new re;function y(B,P,C){h.fromBufferAttribute(r,B),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),v.fromBufferAttribute(l,B),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),p.sub(h),g.sub(h),x.sub(v),M.sub(v);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(k),c[B].add(T),c[P].add(T),c[C].add(T),d[B].add(S),d[P].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,P=D.length;B<P;++B){const C=D[B],k=C.start,oe=C.count;for(let Q=k,ce=k+oe;Q<ce;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new re,R=new re,O=new re,F=new re;function U(B){O.fromBufferAttribute(o,B),F.copy(O);const P=c[B];b.copy(P),b.sub(O.multiplyScalar(O.dot(P))).normalize(),R.crossVectors(F,P);const k=R.dot(d[B])<0?-1:1;u.setXYZW(B,b.x,b.y,b.z,k)}for(let B=0,P=D.length;B<P;++B){const C=D[B],k=C.start,oe=C.count;for(let Q=k,ce=k+oe;Q<ce;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new re,l=new re,u=new re,c=new re,d=new re,h=new re,p=new re,g=new re;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(p),d.add(p),h.add(p),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?x=d[T]*c.data.stride+c.offset:x=d[T]*p;for(let y=0;y<p;y++)v[M++]=h[x++]}return new Ei(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];p.push(x.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U0=new Zt,fs=new ox,du=new ec,F0=new re,hu=new re,pu=new re,mu=new re,xd=new re,gu=new re,O0=new re,vu=new re;class Ji extends Hn{constructor(e=new ar,t=new ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){gu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const p=c[d],g=l[d];p!==0&&(xd.fromBufferAttribute(g,e),u?gu.addScaledVector(xd,p):gu.addScaledVector(xd.sub(t),p))}t.add(gu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(du.containsPoint(fs.origin)===!1&&(fs.intersectSphere(du,F0)===null||fs.origin.distanceToSquared(F0)>(e.far-e.near)**2))&&(U0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(U0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,O=b;R<O;R+=3){const F=c.getX(R),U=c.getX(R+1),B=c.getX(R+2);o=_u(this,y,e,r,h,p,g,F,U,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=c.getX(S),b=c.getX(S+1),R=c.getX(S+2);o=_u(this,u,e,r,h,p,g,D,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,O=b;R<O;R+=3){const F=R,U=R+1,B=R+2;o=_u(this,y,e,r,h,p,g,F,U,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=S,b=S+1,R=S+2;o=_u(this,u,e,r,h,p,g,D,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function fC(n,e,t,r,o,l,u,c){let d;if(e.side===Vn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Hr,c),d===null)return null;vu.copy(c),vu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(vu);return h<t.near||h>t.far?null:{distance:h,point:vu.clone(),object:n}}function _u(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,hu),n.getVertexPosition(d,pu),n.getVertexPosition(h,mu);const p=fC(n,e,t,r,hu,pu,mu,O0);if(p){const g=new re;xi.getBarycoord(O0,hu,pu,mu,g),o&&(p.uv=xi.getInterpolatedAttribute(o,c,d,h,g,new Lt)),l&&(p.uv1=xi.getInterpolatedAttribute(l,c,d,h,g,new Lt)),u&&(p.normal=xi.getInterpolatedAttribute(u,c,d,h,g,new re),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new re,materialIndex:0};xi.getNormal(hu,pu,mu,v.normal),p.face=v,p.barycoord=g}return p}class ja extends ar{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new ws(h,3)),this.setAttribute("normal",new ws(p,3)),this.setAttribute("uv",new ws(g,2));function M(T,S,y,D,b,R,O,F,U,B,P){const C=R/U,k=O/B,oe=R/2,Q=O/2,ce=F/2,de=U+1,le=B+1;let se=0,V=0;const ue=new re;for(let q=0;q<le;q++){const N=q*k-Q;for(let J=0;J<de;J++){const we=J*C-oe;ue[T]=we*D,ue[S]=N*b,ue[y]=ce,h.push(ue.x,ue.y,ue.z),ue[T]=0,ue[S]=0,ue[y]=F>0?1:-1,p.push(ue.x,ue.y,ue.z),g.push(J/U),g.push(1-q/B),se+=1}}for(let q=0;q<B;q++)for(let N=0;N<U;N++){const J=v+N+de*q,we=v+N+de*(q+1),$=v+(N+1)+de*(q+1),fe=v+(N+1)+de*q;d.push(J,we,fe),d.push(we,$,fe),V+=6}c.addGroup(x,V,P),x+=V,v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const r=Io(n[t]);for(const o in r)e[o]=r[o]}return e}function dC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const hC={clone:Io,merge:Dn};var pC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pC,this.fragmentShader=mC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=dC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class hx extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new re,k0=new Lt,B0=new Lt;class ai extends hx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,k0,B0),t.subVectors(B0,k0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const co=-90,fo=1;class gC extends Hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(co,fo,e,t);o.layers=this.layers,this.add(o);const l=new ai(co,fo,e,t);l.layers=this.layers,this.add(l);const u=new ai(co,fo,e,t);u.layers=this.layers,this.add(u);const c=new ai(co,fo,e,t);c.layers=this.layers,this.add(c);const d=new ai(co,fo,e,t);d.layers=this.layers,this.add(d);const h=new ai(co,fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class px extends zn{constructor(e,t,r,o,l,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ro,super(e,t,r,o,l,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vC extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new px(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ja(5,5,5),l=new Gr({name:"CubemapFromEquirect",uniforms:Io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:kr});l.uniforms.tEquirect.value=t;const u=new Ji(o,l),c=t.minFilter;return t.minFilter===Es&&(t.minFilter=Di),new gC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class _C extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Sd=new re,yC=new re,xC=new lt;class vs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Sd.subVectors(r,t).cross(yC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Sd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||xC.getNormalMatrix(e),o=this.coplanarPoint(Sd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new ec,yu=new re;class mx{constructor(e=new vs,t=new vs,r=new vs,o=new vs,l=new vs,u=new vs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qi){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],x=o[8],M=o[9],T=o[10],S=o[11],y=o[12],D=o[13],b=o[14],R=o[15];if(r[0].setComponents(d-l,v-h,S-x,R-y).normalize(),r[1].setComponents(d+l,v+h,S+x,R+y).normalize(),r[2].setComponents(d+u,v+p,S+M,R+D).normalize(),r[3].setComponents(d-u,v-p,S-M,R-D).normalize(),r[4].setComponents(d-c,v-g,S-T,R-b).normalize(),t===Qi)r[5].setComponents(d+c,v+g,S+T,R+b).normalize();else if(t===ju)r[5].setComponents(c,g,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(yu.x=o.normal.x>0?e.max.x:e.min.x,yu.y=o.normal.y>0?e.max.y:e.min.y,yu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const V0=new Zt,Ih=new ox,xu=new ec,Su=new re;class SC extends Hn{constructor(e=new ar,t=new gx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(o),xu.radius+=l,e.ray.intersectsSphere(xu)===!1)return;V0.copy(o).invert(),Ih.copy(e.ray).applyMatrix4(V0);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=r.index,g=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,T=x;M<T;M++){const S=h.getX(M);Su.fromBufferAttribute(g,S),z0(Su,S,d,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,T=x;M<T;M++)Su.fromBufferAttribute(g,M),z0(Su,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function z0(n,e,t,r,o,l,u){const c=Ih.distanceSqToPoint(n);if(c<t){const d=new re;Ih.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Mu extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class vx extends zn{constructor(e,t,r,o,l,u,c,d,h,p=Mo){if(p!==Mo&&p!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===Mo&&(r=As),r===void 0&&p===Do&&(r=bo),super(null,o,l,u,c,d,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mi,this.minFilter=d!==void 0?d:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tc extends ar{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<p;y++){const D=y*v-u;for(let b=0;b<h;b++){const R=b*g-l;M.push(R,-D,0),T.push(0,0,1),S.push(b/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<c;D++){const b=D+h*y,R=D+h*(y+1),O=D+1+h*(y+1),F=D+1+h*y;x.push(b,R,F),x.push(R,O,F)}this.setIndex(x),this.setAttribute("position",new ws(M,3)),this.setAttribute("normal",new ws(T,3)),this.setAttribute("uv",new ws(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}class MC extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EC extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class TC extends hx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wC extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function H0(n,e,t,r){const o=AC(r);switch(t){case $y:return n*e;case Zy:return n*e;case Qy:return n*e*2;case Jy:return n*e/o.components*o.byteLength;case _p:return n*e/o.components*o.byteLength;case ex:return n*e*2/o.components*o.byteLength;case yp:return n*e*2/o.components*o.byteLength;case Ky:return n*e*3/o.components*o.byteLength;case Si:return n*e*4/o.components*o.byteLength;case xp:return n*e*4/o.components*o.byteLength;case Pu:case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Du:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:case uh:return Math.max(n,16)*Math.max(e,8)/4;case oh:case lh:return Math.max(n,8)*Math.max(e,8)/2;case ch:case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Iu:case Ch:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tx:case Ph:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bh:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AC(n){switch(n){case sr:case Xy:return{byteLength:1,components:1};case Na:case Yy:case Va:return{byteLength:2,components:1};case gp:case vp:return{byteLength:2,components:4};case As:case mp:case Zi:return{byteLength:4,components:1};case qy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _x(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function CC(n){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,p);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],T=g[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,g[v]=T)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const T=g[x];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var RC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$C=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rR="gl_FragColor = linearToOutputTexel( gl_FragColor );",sR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_R=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ER=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$R=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:RC,alphahash_pars_fragment:PC,alphamap_fragment:bC,alphamap_pars_fragment:DC,alphatest_fragment:LC,alphatest_pars_fragment:IC,aomap_fragment:NC,aomap_pars_fragment:UC,batching_pars_vertex:FC,batching_vertex:OC,begin_vertex:kC,beginnormal_vertex:BC,bsdfs:VC,iridescence_fragment:zC,bumpmap_pars_fragment:HC,clipping_planes_fragment:GC,clipping_planes_pars_fragment:WC,clipping_planes_pars_vertex:jC,clipping_planes_vertex:XC,color_fragment:YC,color_pars_fragment:qC,color_pars_vertex:$C,color_vertex:KC,common:ZC,cube_uv_reflection_fragment:QC,defaultnormal_vertex:JC,displacementmap_pars_vertex:eR,displacementmap_vertex:tR,emissivemap_fragment:nR,emissivemap_pars_fragment:iR,colorspace_fragment:rR,colorspace_pars_fragment:sR,envmap_fragment:oR,envmap_common_pars_fragment:aR,envmap_pars_fragment:lR,envmap_pars_vertex:uR,envmap_physical_pars_fragment:xR,envmap_vertex:cR,fog_vertex:fR,fog_pars_vertex:dR,fog_fragment:hR,fog_pars_fragment:pR,gradientmap_pars_fragment:mR,lightmap_pars_fragment:gR,lights_lambert_fragment:vR,lights_lambert_pars_fragment:_R,lights_pars_begin:yR,lights_toon_fragment:SR,lights_toon_pars_fragment:MR,lights_phong_fragment:ER,lights_phong_pars_fragment:TR,lights_physical_fragment:wR,lights_physical_pars_fragment:AR,lights_fragment_begin:CR,lights_fragment_maps:RR,lights_fragment_end:PR,logdepthbuf_fragment:bR,logdepthbuf_pars_fragment:DR,logdepthbuf_pars_vertex:LR,logdepthbuf_vertex:IR,map_fragment:NR,map_pars_fragment:UR,map_particle_fragment:FR,map_particle_pars_fragment:OR,metalnessmap_fragment:kR,metalnessmap_pars_fragment:BR,morphinstance_vertex:VR,morphcolor_vertex:zR,morphnormal_vertex:HR,morphtarget_pars_vertex:GR,morphtarget_vertex:WR,normal_fragment_begin:jR,normal_fragment_maps:XR,normal_pars_fragment:YR,normal_pars_vertex:qR,normal_vertex:$R,normalmap_pars_fragment:KR,clearcoat_normal_fragment_begin:ZR,clearcoat_normal_fragment_maps:QR,clearcoat_pars_fragment:JR,iridescence_pars_fragment:e2,opaque_fragment:t2,packing:n2,premultiplied_alpha_fragment:i2,project_vertex:r2,dithering_fragment:s2,dithering_pars_fragment:o2,roughnessmap_fragment:a2,roughnessmap_pars_fragment:l2,shadowmap_pars_fragment:u2,shadowmap_pars_vertex:c2,shadowmap_vertex:f2,shadowmask_pars_fragment:d2,skinbase_vertex:h2,skinning_pars_vertex:p2,skinning_vertex:m2,skinnormal_vertex:g2,specularmap_fragment:v2,specularmap_pars_fragment:_2,tonemapping_fragment:y2,tonemapping_pars_fragment:x2,transmission_fragment:S2,transmission_pars_fragment:M2,uv_pars_fragment:E2,uv_pars_vertex:T2,uv_vertex:w2,worldpos_vertex:A2,background_vert:C2,background_frag:R2,backgroundCube_vert:P2,backgroundCube_frag:b2,cube_vert:D2,cube_frag:L2,depth_vert:I2,depth_frag:N2,distanceRGBA_vert:U2,distanceRGBA_frag:F2,equirect_vert:O2,equirect_frag:k2,linedashed_vert:B2,linedashed_frag:V2,meshbasic_vert:z2,meshbasic_frag:H2,meshlambert_vert:G2,meshlambert_frag:W2,meshmatcap_vert:j2,meshmatcap_frag:X2,meshnormal_vert:Y2,meshnormal_frag:q2,meshphong_vert:$2,meshphong_frag:K2,meshphysical_vert:Z2,meshphysical_frag:Q2,meshtoon_vert:J2,meshtoon_frag:eP,points_vert:tP,points_frag:nP,shadow_vert:iP,shadow_frag:rP,sprite_vert:sP,sprite_frag:oP},be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Pi={basic:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Dn([be.points,be.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Dn([be.common,be.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Dn([be.sprite,be.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Dn([be.common,be.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Dn([be.lights,be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Pi.physical={uniforms:Dn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Eu={r:0,b:0,g:0},hs=new or,aP=new Zt;function lP(n,e,t,r,o,l,u){const c=new Rt(0);let d=l===!0?0:1,h,p,g=null,v=0,x=null;function M(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function T(b){let R=!1;const O=M(b);O===null?y(c,d):O&&O.isColor&&(y(O,1),R=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,R){const O=M(R);O&&(O.isCubeTexture||O.mapping===Ju)?(p===void 0&&(p=new Ji(new ja(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Io(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),hs.copy(R.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.material.uniforms.envMap.value=O,p.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(aP.makeRotationFromEuler(hs)),p.material.toneMapped=wt.getTransfer(O.colorSpace)!==Dt,(g!==O||v!==O.version||x!==n.toneMapping)&&(p.material.needsUpdate=!0,g=O,v=O.version,x=n.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new Ji(new tc(2,2),new Gr({name:"BackgroundMaterial",uniforms:Io(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=wt.getTransfer(O.colorSpace)!==Dt,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=O,v=O.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,R){b.getRGB(Eu,dx(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,R,u)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,R=1){c.set(b),d=R,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:T,addToRenderList:S,dispose:D}}function uP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,k,oe,Q,ce){let de=!1;const le=g(Q,oe,k);l!==le&&(l=le,h(l.object)),de=x(C,Q,oe,ce),de&&M(C,Q,oe,ce),ce!==null&&e.update(ce,n.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(C,k,oe,Q),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function g(C,k,oe){const Q=oe.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let de=ce[k.id];de===void 0&&(de={},ce[k.id]=de);let le=de[Q];return le===void 0&&(le=v(d()),de[Q]=le),le}function v(C){const k=[],oe=[],Q=[];for(let ce=0;ce<t;ce++)k[ce]=0,oe[ce]=0,Q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:Q,object:C,attributes:{},index:null}}function x(C,k,oe,Q){const ce=l.attributes,de=k.attributes;let le=0;const se=oe.getAttributes();for(const V in se)if(se[V].location>=0){const q=ce[V];let N=de[V];if(N===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),q===void 0||q.attribute!==N||N&&q.data!==N.data)return!0;le++}return l.attributesNum!==le||l.index!==Q}function M(C,k,oe,Q){const ce={},de=k.attributes;let le=0;const se=oe.getAttributes();for(const V in se)if(se[V].location>=0){let q=de[V];q===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));const N={};N.attribute=q,q&&q.data&&(N.data=q.data),ce[V]=N,le++}l.attributes=ce,l.attributesNum=le,l.index=Q}function T(){const C=l.newAttributes;for(let k=0,oe=C.length;k<oe;k++)C[k]=0}function S(C){y(C,0)}function y(C,k){const oe=l.newAttributes,Q=l.enabledAttributes,ce=l.attributeDivisors;oe[C]=1,Q[C]===0&&(n.enableVertexAttribArray(C),Q[C]=1),ce[C]!==k&&(n.vertexAttribDivisor(C,k),ce[C]=k)}function D(){const C=l.newAttributes,k=l.enabledAttributes;for(let oe=0,Q=k.length;oe<Q;oe++)k[oe]!==C[oe]&&(n.disableVertexAttribArray(oe),k[oe]=0)}function b(C,k,oe,Q,ce,de,le){le===!0?n.vertexAttribIPointer(C,k,oe,ce,de):n.vertexAttribPointer(C,k,oe,Q,ce,de)}function R(C,k,oe,Q){T();const ce=Q.attributes,de=oe.getAttributes(),le=k.defaultAttributeValues;for(const se in de){const V=de[se];if(V.location>=0){let ue=ce[se];if(ue===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const q=ue.normalized,N=ue.itemSize,J=e.get(ue);if(J===void 0)continue;const we=J.buffer,$=J.type,fe=J.bytesPerElement,Ee=$===n.INT||$===n.UNSIGNED_INT||ue.gpuType===mp;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Ae=ye.stride,Ue=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<V.locationSize;Je++)y(V.location+Je,ye.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<V.locationSize;Je++)S(V.location+Je);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Je=0;Je<V.locationSize;Je++)b(V.location+Je,N/V.locationSize,$,q,Ae*fe,(Ue+N/V.locationSize*Je)*fe,Ee)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye,ue.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<V.locationSize;ye++)S(V.location+ye);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ye=0;ye<V.locationSize;ye++)b(V.location+ye,N/V.locationSize,$,q,N*fe,N/V.locationSize*ye*fe,Ee)}}else if(le!==void 0){const q=le[se];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(V.location,q);break;case 3:n.vertexAttrib3fv(V.location,q);break;case 4:n.vertexAttrib4fv(V.location,q);break;default:n.vertexAttrib1fv(V.location,q)}}}}D()}function O(){B();for(const C in r){const k=r[C];for(const oe in k){const Q=k[oe];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete k[oe]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const oe in k){const Q=k[oe];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete k[oe]}delete r[C.id]}function U(C){for(const k in r){const oe=r[k];if(oe[C.id]===void 0)continue;const Q=oe[C.id];for(const ce in Q)p(Q[ce].object),delete Q[ce];delete oe[C.id]}}function B(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:B,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function cP(n,e,t){let r;function o(h){r=h}function l(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,g){g!==0&&(n.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];t.update(x,r,1)}function d(h,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],p[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=p[T]*v[T];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function fP(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Si&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const B=U===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==sr&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Zi&&!B)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:O,maxSamples:F}}function dP(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new vs,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?p(null):h();else{const D=l?0:r,b=D*4;let R=y.clippingState||null;d.value=R,R=p(M,v,b,x);for(let O=0;O!==b;++O)R[O]=t[O];y.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,x,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,R=x;b!==T;++b,R+=4)u.copy(g[b]).applyMatrix4(D,c),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function hP(n){let e=new WeakMap;function t(u,c){return c===nh?u.mapping=Ro:c===ih&&(u.mapping=Po),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===nh||c===ih)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new vC(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const xo=4,G0=[.125,.215,.35,.446,.526,.582],xs=20,Md=new TC,W0=new Rt;let Ed=null,Td=0,wd=0,Ad=!1;const _s=(1+Math.sqrt(5))/2,ho=1/_s,j0=[new re(-_s,ho,0),new re(_s,ho,0),new re(-ho,0,_s),new re(ho,0,_s),new re(0,_s,-ho),new re(0,_s,ho),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class X0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Td,wd),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Va,format:Si,colorSpace:Lo,depthBuffer:!1},o=Y0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pP(l)),this._blurMaterial=mP(l,e,t)}return o}_compileMaterial(e){const t=new Ji(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,r,o){const c=new ai(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(W0),p.toneMapping=Br,p.autoClear=!1;const x=new ux({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new Ji(new ja,x);let T=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,T=!0):(x.color.copy(W0),T=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):D===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const b=this._cubeSize;Tu(o,D*b,y>2?b:0,b,b),p.setRenderTarget(o),T&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ro||e.mapping===Po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ji(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Tu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Md)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=j0[(o-l-1)%j0.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Ji(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*xs-1),T=l/M,S=isFinite(l)?1+Math.floor(p*T):xs;S>xs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const y=[];let D=0;for(let U=0;U<xs;++U){const B=U/T,P=Math.exp(-B*B/2);y.push(P),U===0?D+=P:U<S&&(D+=2*P)}for(let U=0;U<y.length;U++)y[U]=y[U]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const R=this._sizeLods[o],O=3*R*(o>b-xo?o-b+xo:0),F=4*(this._cubeSize-R);Tu(t,O,F,3*R,2*R),d.setRenderTarget(t),d.render(g,Md)}}function pP(n){const e=[],t=[],r=[];let o=n;const l=n-xo+1+G0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-xo?d=G0[u-n+xo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*x),b=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let F=0;F<x;F++){const U=F%3*2/3-1,B=F>2?0:-1,P=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];D.set(P,T*M*F),b.set(v,S*M*F);const C=[F,F,F,F,F,F];R.set(C,y*M*F)}const O=new ar;O.setAttribute("position",new Ei(D,T)),O.setAttribute("uv",new Ei(b,S)),O.setAttribute("faceIndex",new Ei(R,y)),e.push(O),o>xo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Y0(n,e,t){const r=new Cs(n,e,t);return r.texture.mapping=Ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function mP(n,e,t){const r=new Float32Array(xs),o=new re(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function q0(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function $0(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gP(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===nh||d===ih,p=d===Ro||d===Po;if(h||p){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new X0(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new X0(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function vP(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&po("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function _P(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,M=g.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let b=0,R=D.length;b<R;b+=3){const O=D[b+0],F=D[b+1],U=D[b+2];v.push(O,F,F,U,U,O)}}else if(M!==void 0){const D=M.array;T=M.version;for(let b=0,R=D.length/3-1;b<R;b+=3){const O=b+0,F=b+1,U=b+2;v.push(O,F,F,U,U,O)}}else return;const S=new(ix(v)?fx:cx)(v,1);S.version=T;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function p(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function yP(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function p(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function xP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function SP(n,e,t){const r=new WeakMap,o=new Kt;function l(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){B.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var x=C;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let O=c.attributes.position.count*R,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*F*4*g),B=new sx(U,O,F,g);B.type=Zi,B.needsUpdate=!0;const P=R*4;for(let k=0;k<g;k++){const oe=y[k],Q=D[k],ce=b[k],de=O*F*4*k;for(let le=0;le<oe.count;le++){const se=le*P;M===!0&&(o.fromBufferAttribute(oe,le),U[de+se+0]=o.x,U[de+se+1]=o.y,U[de+se+2]=o.z,U[de+se+3]=0),T===!0&&(o.fromBufferAttribute(Q,le),U[de+se+4]=o.x,U[de+se+5]=o.y,U[de+se+6]=o.z,U[de+se+7]=0),S===!0&&(o.fromBufferAttribute(ce,le),U[de+se+8]=o.x,U[de+se+9]=o.y,U[de+se+10]=o.z,U[de+se+11]=ce.itemSize===4?o.w:1)}}v={count:g,texture:B,size:new Lt(O,F)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function MP(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const yx=new zn,K0=new vx(1,1),xx=new sx,Sx=new tC,Mx=new px,Z0=[],Q0=[],J0=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function Fo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=Z0[o];if(l===void 0&&(l=new Float32Array(o),Z0[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function nc(n,e){let t=Q0[e];t===void 0&&(t=new Int32Array(e),Q0[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function EP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function wP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function AP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function CP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;t_.set(r),n.uniformMatrix2fv(this.addr,!1,t_),sn(t,r)}}function RP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;e_.set(r),n.uniformMatrix3fv(this.addr,!1,e_),sn(t,r)}}function PP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;J0.set(r),n.uniformMatrix4fv(this.addr,!1,J0),sn(t,r)}}function bP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function LP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function NP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function kP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(K0.compareFunction=nx,l=K0):l=yx,t.setTexture2D(e||l,o)}function BP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Sx,o)}function VP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Mx,o)}function zP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||xx,o)}function HP(n){switch(n){case 5126:return EP;case 35664:return TP;case 35665:return wP;case 35666:return AP;case 35674:return CP;case 35675:return RP;case 35676:return PP;case 5124:case 35670:return bP;case 35667:case 35671:return DP;case 35668:case 35672:return LP;case 35669:case 35673:return IP;case 5125:return NP;case 36294:return UP;case 36295:return FP;case 36296:return OP;case 35678:case 36198:case 36298:case 36306:case 35682:return kP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return VP;case 36289:case 36303:case 36311:case 36292:return zP}}function GP(n,e){n.uniform1fv(this.addr,e)}function WP(n,e){const t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function jP(n,e){const t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function XP(n,e){const t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function YP(n,e){const t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qP(n,e){const t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $P(n,e){const t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KP(n,e){n.uniform1iv(this.addr,e)}function ZP(n,e){n.uniform2iv(this.addr,e)}function QP(n,e){n.uniform3iv(this.addr,e)}function JP(n,e){n.uniform4iv(this.addr,e)}function eb(n,e){n.uniform1uiv(this.addr,e)}function tb(n,e){n.uniform2uiv(this.addr,e)}function nb(n,e){n.uniform3uiv(this.addr,e)}function ib(n,e){n.uniform4uiv(this.addr,e)}function rb(n,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||yx,l[u])}function sb(n,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Sx,l[u])}function ob(n,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Mx,l[u])}function ab(n,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||xx,l[u])}function lb(n){switch(n){case 5126:return GP;case 35664:return WP;case 35665:return jP;case 35666:return XP;case 35674:return YP;case 35675:return qP;case 35676:return $P;case 5124:case 35670:return KP;case 35667:case 35671:return ZP;case 35668:case 35672:return QP;case 35669:case 35673:return JP;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}class ub{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=HP(t.type)}}class cb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lb(t.type)}}class fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function n_(n,e){n.seq.push(e),n.map[e.id]=e}function db(n,e,t){const r=n.name,o=r.length;for(Cd.lastIndex=0;;){const l=Cd.exec(r),u=Cd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){n_(t,h===void 0?new ub(c,n,e):new cb(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new fb(c),n_(t,g)),t=g}}}class Nu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);db(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function i_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const hb=37297;let pb=0;function mb(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const r_=new lt;function gb(n){wt._getMatrix(r_,wt.workingColorSpace,n);const e=`mat3( ${r_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Wu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function s_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+mb(n.getShaderSource(e),u)}else return o}function vb(n,e){const t=gb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _b(n,e){let t;switch(e){case AA:t="Linear";break;case CA:t="Reinhard";break;case RA:t="Cineon";break;case PA:t="ACESFilmic";break;case DA:t="AgX";break;case LA:t="Neutral";break;case bA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wu=new re;function yb(){wt.getLuminanceCoefficients(wu);const n=wu.x.toFixed(4),e=wu.y.toFixed(4),t=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function Sb(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Mb(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ta(n){return n!==""}function o_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(n){return n.replace(Eb,wb)}const Tb=new Map;function wb(n,e){let t=ut[e];if(t===void 0){const r=Tb.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}const Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(n){return n.replace(Ab,Cb)}function Cb(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function u_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ro:case Po:e="ENVMAP_TYPE_CUBE";break;case Ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Po:e="ENVMAP_MODE_REFRACTION";break}return e}function Db(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wy:e="ENVMAP_BLENDING_MULTIPLY";break;case TA:e="ENVMAP_BLENDING_MIX";break;case wA:e="ENVMAP_BLENDING_ADD";break}return e}function Lb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Ib(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=Rb(t),h=Pb(t),p=bb(t),g=Db(t),v=Lb(t),x=xb(t),M=Sb(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ta).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ta).join(`
`),y.length>0&&(y+=`
`)):(S=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),y=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ut.tonemapping_pars_fragment:"",t.toneMapping!==Br?_b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,vb("linearToOutputTexel",t.outputColorSpace),yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),u=Nh(u),u=o_(u,t),u=a_(u,t),c=Nh(c),c=o_(c,t),c=a_(c,t),u=l_(u),c=l_(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=D+S+u,R=D+y+c,O=i_(o,o.VERTEX_SHADER,b),F=i_(o,o.FRAGMENT_SHADER,R);o.attachShader(T,O),o.attachShader(T,F),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(k){if(n.debug.checkShaderErrors){const oe=o.getProgramInfoLog(T).trim(),Q=o.getShaderInfoLog(O).trim(),ce=o.getShaderInfoLog(F).trim();let de=!0,le=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(de=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,O,F);else{const se=s_(o,O,"vertex"),V=s_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+se+`
`+V)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(Q===""||ce==="")&&(le=!1);le&&(k.diagnostics={runnable:de,programLog:oe,vertexShader:{log:Q,prefix:S},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(O),o.deleteShader(F),B=new Nu(o,T),P=Mb(o,T)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,hb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pb++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=F,this}let Nb=0;class Ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Fb(e),t.set(e,r)),r}}class Fb{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}}function Ob(n,e,t,r,o,l,u){const c=new ax,d=new Ub,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,k,oe,Q){const ce=oe.fog,de=Q.geometry,le=P.isMeshStandardMaterial?oe.environment:null,se=(P.isMeshStandardMaterial?t:e).get(P.envMap||le),V=se&&se.mapping===Ju?se.image.height:null,ue=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const q=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=q!==void 0?q.length:0;let J=0;de.morphAttributes.position!==void 0&&(J=1),de.morphAttributes.normal!==void 0&&(J=2),de.morphAttributes.color!==void 0&&(J=3);let we,$,fe,Ee;if(ue){const xt=Pi[ue];we=xt.vertexShader,$=xt.fragmentShader}else we=P.vertexShader,$=P.fragmentShader,d.update(P),fe=d.getVertexShaderID(P),Ee=d.getFragmentShaderID(P);const ye=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ue=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,Pt=!!P.map,gt=!!P.matcap,It=!!se,H=!!P.aoMap,wn=!!P.lightMap,pt=!!P.bumpMap,ft=!!P.normalMap,Ye=!!P.displacementMap,Ct=!!P.emissiveMap,je=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,Z=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,he=P.sheen>0,Ge=P.transmission>0,Ce=w&&!!P.anisotropyMap,Fe=Z&&!!P.clearcoatMap,ct=Z&&!!P.clearcoatNormalMap,Me=Z&&!!P.clearcoatRoughnessMap,Be=ve&&!!P.iridescenceMap,Ke=ve&&!!P.iridescenceThicknessMap,tt=he&&!!P.sheenColorMap,Ve=he&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,j=Ge&&!!P.transmissionMap,Re=Ge&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,Le=P.alphaTest>0,De=!!P.alphaHash,ot=!!P.extensions;let Ut=Br;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const en={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:we,fragmentShader:$,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,instancingMorph:Ue&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Lo,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:gt,envMap:It,envMapMode:It&&se.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:wn,bumpMap:pt,normalMap:ft,displacementMap:v&&Ye,emissiveMap:Ct,normalMapObjectSpace:ft&&P.normalMapType===OA,normalMapTangentSpace:ft&&P.normalMapType===FA,metalnessMap:je,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:Ke,sheen:he,sheenColorMap:tt,sheenRoughnessMap:Ve,specularMap:dt,specularColorMap:st,specularIntensityMap:At,transmission:Ge,transmissionMap:j,thicknessMap:Re,gradientMap:ae,opaque:P.transparent===!1&&P.blending===So&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:De,combine:P.combine,mapUv:Pt&&T(P.map.channel),aoMapUv:H&&T(P.aoMap.channel),lightMapUv:wn&&T(P.lightMap.channel),bumpMapUv:pt&&T(P.bumpMap.channel),normalMapUv:ft&&T(P.normalMap.channel),displacementMapUv:Ye&&T(P.displacementMap.channel),emissiveMapUv:Ct&&T(P.emissiveMap.channel),metalnessMapUv:je&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ce&&T(P.anisotropyMap.channel),clearcoatMapUv:Fe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(P.sheenRoughnessMap.channel),specularMapUv:dt&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:j&&T(P.transmissionMap.channel),thicknessMapUv:Re&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ft||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(Pt||pe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ct&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ki,flipSided:P.side===Vn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)C.push(k),C.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(D(C,P),b(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const C=M[P.type];let k;if(C){const oe=Pi[C];k=hC.clone(oe.uniforms)}else k=P.uniforms;return k}function O(P,C){let k;for(let oe=0,Q=p.length;oe<Q;oe++){const ce=p[oe];if(ce.cacheKey===C){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new Ib(n,C,P,l),p.push(k)),k}function F(P){if(--P.usedTimes===0){const C=p.indexOf(P);p[C]=p[p.length-1],p.pop(),P.destroy()}}function U(P){d.remove(P)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:O,releaseProgram:F,releaseShaderCache:U,programs:p,dispose:B}}function kb(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Bb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function c_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,T,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=T,y.group=S),e++,y}function c(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||Bb),r.length>1&&r.sort(v||c_),o.length>1&&o.sort(v||c_)}function p(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:p,sort:h}}function Vb(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new f_,n.set(r,[u])):o>=l.length?(u=new f_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Rt};break;case"SpotLight":t={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function Hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gb=0;function Wb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jb(n){const e=new zb,t=Hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const o=new re,l=new Zt,u=new Zt;function c(h){let p=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,D=0,b=0,R=0,O=0,F=0,U=0;h.sort(Wb);for(let P=0,C=h.length;P<C;P++){const k=h[P],oe=k.color,Q=k.intensity,ce=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=oe.r*Q,g+=oe.g*Q,v+=oe.b*Q;else if(k.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(k.sh.coefficients[le],Q);U++}else if(k.isDirectionalLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const se=k.shadow,V=t.get(k);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=de,r.directionalShadowMatrix[x]=k.shadow.matrix,D++}r.directional[x]=le,x++}else if(k.isSpotLight){const le=e.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(oe).multiplyScalar(Q),le.distance=ce,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,r.spot[T]=le;const se=k.shadow;if(k.map&&(r.spotLightMap[O]=k.map,O++,se.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[T]=se.matrix,k.castShadow){const V=t.get(k);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,r.spotShadow[T]=V,r.spotShadowMap[T]=de,R++}T++}else if(k.isRectAreaLight){const le=e.get(k);le.color.copy(oe).multiplyScalar(Q),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=le,S++}else if(k.isPointLight){const le=e.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity),le.distance=k.distance,le.decay=k.decay,k.castShadow){const se=k.shadow,V=t.get(k);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=k.shadow.matrix,b++}r.point[M]=le,M++}else if(k.isHemisphereLight){const le=e.get(k);le.skyColor.copy(k.color).multiplyScalar(Q),le.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[y]=le,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==x||B.pointLength!==M||B.spotLength!==T||B.rectAreaLength!==S||B.hemiLength!==y||B.numDirectionalShadows!==D||B.numPointShadows!==b||B.numSpotShadows!==R||B.numSpotMaps!==O||B.numLightProbes!==U)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,B.directionalLength=x,B.pointLength=M,B.spotLength=T,B.rectAreaLength=S,B.hemiLength=y,B.numDirectionalShadows=D,B.numPointShadows=b,B.numSpotShadows=R,B.numSpotMaps=O,B.numLightProbes=U,r.version=Gb++)}function d(h,p){let g=0,v=0,x=0,M=0,T=0;const S=p.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const b=h[y];if(b.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),g++}else if(b.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function d_(n){const e=new jb(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function Xb(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new d_(n),e.set(o,[c])):l>=u.length?(c=new d_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $b(n,e,t){let r=new mx;const o=new Lt,l=new Lt,u=new Kt,c=new MC({depthPacking:UA}),d=new EC,h={},p=t.maxTextureSize,g={[Hr]:Vn,[Vn]:Hr,[Ki]:Ki},v=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Yb,fragmentShader:qb}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new ar;M.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ji(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gy;let y=this.type;this.render=function(F,U,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(kr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const Q=y!==$i&&this.type===$i,ce=y===$i&&this.type!==$i;for(let de=0,le=F.length;de<le;de++){const se=F[de],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ue=V.getFrameExtents();if(o.multiply(ue),l.copy(V.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ue.x),o.x=l.x*ue.x,V.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ue.y),o.y=l.y*ue.y,V.mapSize.y=l.y)),V.map===null||Q===!0||ce===!0){const N=this.type!==$i?{minFilter:Mi,magFilter:Mi}:{};V.map!==null&&V.map.dispose(),V.map=new Cs(o.x,o.y,N),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const q=V.getViewportCount();for(let N=0;N<q;N++){const J=V.getViewport(N);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),oe.viewport(u),V.updateMatrices(se,N),r=V.getFrustum(),R(U,B,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===$i&&D(V,B),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,k)};function D(F,U){const B=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Cs(o.x,o.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(U,null,B,v,T,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(U,null,B,x,T,null)}function b(F,U,B,P){let C=null;const k=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)C=k;else if(C=B.isPointLight===!0?d:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=C.uuid,Q=U.uuid;let ce=h[oe];ce===void 0&&(ce={},h[oe]=ce);let de=ce[Q];de===void 0&&(de=C.clone(),ce[Q]=de,U.addEventListener("dispose",O)),C=de}if(C.visible=U.visible,C.wireframe=U.wireframe,P===$i?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=n.properties.get(C);oe.light=B}return C}function R(F,U,B,P,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===$i)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ce=F.material;if(Array.isArray(ce)){const de=Q.groups;for(let le=0,se=de.length;le<se;le++){const V=de[le],ue=ce[V.materialIndex];if(ue&&ue.visible){const q=b(F,ue,P,C);F.onBeforeShadow(n,F,U,B,Q,q,V),n.renderBufferDirect(B,null,Q,q,F,V),F.onAfterShadow(n,F,U,B,Q,q,V)}}}else if(ce.visible){const de=b(F,ce,P,C);F.onBeforeShadow(n,F,U,B,Q,de,null),n.renderBufferDirect(B,null,Q,de,F,null),F.onAfterShadow(n,F,U,B,Q,de,null)}}const oe=F.children;for(let Q=0,ce=oe.length;Q<ce;Q++)R(oe[Q],U,B,P,C)}function O(F){F.target.removeEventListener("dispose",O);for(const B in h){const P=h[B],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const Kb={[$d]:Kd,[Zd]:eh,[Qd]:th,[Co]:Jd,[Kd]:$d,[eh]:Zd,[th]:Qd,[Jd]:Co};function Zb(n,e){function t(){let j=!1;const Re=new Kt;let ae=null;const pe=new Kt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!j&&(n.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){j=Le},setClear:function(Le,De,ot,Ut,en){en===!0&&(Le*=Ut,De*=Ut,ot*=Ut),Re.set(Le,De,ot,Ut),pe.equals(Re)===!1&&(n.clearColor(Le,De,ot,Ut),pe.copy(Re))},reset:function(){j=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,ae=null,pe=null,Le=null;return{setReversed:function(De){if(Re!==De){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Re=De},getReversed:function(){return Re},setTest:function(De){De?ye(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(n.depthMask(De),ae=De)},setFunc:function(De){if(Re&&(De=Kb[De]),pe!==De){switch(De){case $d:n.depthFunc(n.NEVER);break;case Kd:n.depthFunc(n.ALWAYS);break;case Zd:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case Qd:n.depthFunc(n.EQUAL);break;case Jd:n.depthFunc(n.GEQUAL);break;case eh:n.depthFunc(n.GREATER);break;case th:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=De}},setLocked:function(De){j=De},setClear:function(De){Le!==De&&(Re&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){j=!1,ae=null,pe=null,Le=null,Re=!1}}}function o(){let j=!1,Re=null,ae=null,pe=null,Le=null,De=null,ot=null,Ut=null,en=null;return{setTest:function(xt){j||(xt?ye(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!j&&(n.stencilMask(xt),Re=xt)},setFunc:function(xt,Ln,An){(ae!==xt||pe!==Ln||Le!==An)&&(n.stencilFunc(xt,Ln,An),ae=xt,pe=Ln,Le=An)},setOp:function(xt,Ln,An){(De!==xt||ot!==Ln||Ut!==An)&&(n.stencilOp(xt,Ln,An),De=xt,ot=Ln,Ut=An)},setLocked:function(xt){j=xt},setClear:function(xt){en!==xt&&(n.clearStencil(xt),en=xt)},reset:function(){j=!1,Re=null,ae=null,pe=null,Le=null,De=null,ot=null,Ut=null,en=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,R=null,O=null,F=null,U=new Rt(0,0,0),B=0,P=!1,C=null,k=null,oe=null,Q=null,ce=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,se=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),le=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),le=se>=2);let ue=null,q={};const N=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),we=new Kt().fromArray(N),$=new Kt().fromArray(J);function fe(j,Re,ae,pe){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(j,De),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<ae;ot++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Re+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Ee={};Ee[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ye(n.DEPTH_TEST),u.setFunc(Co),pt(!1),ft(g0),ye(n.CULL_FACE),H(kr);function ye(j){p[j]!==!0&&(n.enable(j),p[j]=!0)}function Ae(j){p[j]!==!1&&(n.disable(j),p[j]=!1)}function Ue(j,Re){return g[j]!==Re?(n.bindFramebuffer(j,Re),g[j]=Re,j===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Re),j===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(j,Re){let ae=x,pe=!1;if(j){ae=v.get(Re),ae===void 0&&(ae=[],v.set(Re,ae));const Le=j.textures;if(ae.length!==Le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let De=0,ot=Le.length;De<ot;De++)ae[De]=n.COLOR_ATTACHMENT0+De;ae.length=Le.length,pe=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ae)}function Pt(j){return M!==j?(n.useProgram(j),M=j,!0):!1}const gt={[ys]:n.FUNC_ADD,[aA]:n.FUNC_SUBTRACT,[lA]:n.FUNC_REVERSE_SUBTRACT};gt[uA]=n.MIN,gt[cA]=n.MAX;const It={[fA]:n.ZERO,[dA]:n.ONE,[hA]:n.SRC_COLOR,[Yd]:n.SRC_ALPHA,[yA]:n.SRC_ALPHA_SATURATE,[vA]:n.DST_COLOR,[mA]:n.DST_ALPHA,[pA]:n.ONE_MINUS_SRC_COLOR,[qd]:n.ONE_MINUS_SRC_ALPHA,[_A]:n.ONE_MINUS_DST_COLOR,[gA]:n.ONE_MINUS_DST_ALPHA,[xA]:n.CONSTANT_COLOR,[SA]:n.ONE_MINUS_CONSTANT_COLOR,[MA]:n.CONSTANT_ALPHA,[EA]:n.ONE_MINUS_CONSTANT_ALPHA};function H(j,Re,ae,pe,Le,De,ot,Ut,en,xt){if(j===kr){T===!0&&(Ae(n.BLEND),T=!1);return}if(T===!1&&(ye(n.BLEND),T=!0),j!==oA){if(j!==S||xt!==P){if((y!==ys||R!==ys)&&(n.blendEquation(n.FUNC_ADD),y=ys,R=ys),xt)switch(j){case So:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v0:n.blendFunc(n.ONE,n.ONE);break;case _0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case y0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case y0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,b=null,O=null,F=null,U.set(0,0,0),B=0,S=j,P=xt}return}Le=Le||Re,De=De||ae,ot=ot||pe,(Re!==y||Le!==R)&&(n.blendEquationSeparate(gt[Re],gt[Le]),y=Re,R=Le),(ae!==D||pe!==b||De!==O||ot!==F)&&(n.blendFuncSeparate(It[ae],It[pe],It[De],It[ot]),D=ae,b=pe,O=De,F=ot),(Ut.equals(U)===!1||en!==B)&&(n.blendColor(Ut.r,Ut.g,Ut.b,en),U.copy(Ut),B=en),S=j,P=!1}function wn(j,Re){j.side===Ki?Ae(n.CULL_FACE):ye(n.CULL_FACE);let ae=j.side===Vn;Re&&(ae=!ae),pt(ae),j.blending===So&&j.transparent===!1?H(kr):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const pe=j.stencilWrite;c.setTest(pe),pe&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ct(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(j){C!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),C=j)}function ft(j){j!==iA?(ye(n.CULL_FACE),j!==k&&(j===g0?n.cullFace(n.BACK):j===rA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),k=j}function Ye(j){j!==oe&&(le&&n.lineWidth(j),oe=j)}function Ct(j,Re,ae){j?(ye(n.POLYGON_OFFSET_FILL),(Q!==Re||ce!==ae)&&(n.polygonOffset(Re,ae),Q=Re,ce=ae)):Ae(n.POLYGON_OFFSET_FILL)}function je(j){j?ye(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function L(j){j===void 0&&(j=n.TEXTURE0+de-1),ue!==j&&(n.activeTexture(j),ue=j)}function w(j,Re,ae){ae===void 0&&(ue===null?ae=n.TEXTURE0+de-1:ae=ue);let pe=q[ae];pe===void 0&&(pe={type:void 0,texture:void 0},q[ae]=pe),(pe.type!==j||pe.texture!==Re)&&(ue!==ae&&(n.activeTexture(ae),ue=ae),n.bindTexture(j,Re||Ee[j]),pe.type=j,pe.texture=Re)}function Z(){const j=q[ue];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ge(){try{n.texSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{n.texImage3D.apply(n,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(j){we.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),we.copy(j))}function Ve(j){$.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function dt(j,Re){let ae=h.get(Re);ae===void 0&&(ae=new WeakMap,h.set(Re,ae));let pe=ae.get(j);pe===void 0&&(pe=n.getUniformBlockIndex(Re,j.name),ae.set(j,pe))}function st(j,Re){const pe=h.get(Re).get(j);d.get(Re)!==pe&&(n.uniformBlockBinding(Re,pe,j.__bindingPointIndex),d.set(Re,pe))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ue=null,q={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,R=null,O=null,F=null,U=new Rt(0,0,0),B=0,P=!1,C=null,k=null,oe=null,Q=null,ce=null,we.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ye,disable:Ae,bindFramebuffer:Ue,drawBuffers:Je,useProgram:Pt,setBlending:H,setMaterial:wn,setFlipSided:pt,setCullFace:ft,setLineWidth:Ye,setPolygonOffset:Ct,setScissorTest:je,activeTexture:L,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Be,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:tt,viewport:Ve,reset:At}}function Qb(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Xu("canvas")}function T(L,w,Z){let me=1;const ve=je(L);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(me*ve.width),Ge=Math.floor(me*ve.height);g===void 0&&(g=M(he,Ge));const Ce=w?M(he,Ge):g;return Ce.width=he,Ce.height=Ge,Ce.getContext("2d").drawImage(L,0,0,he,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+Ge+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,w,Z,me,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;if(w===n.RED&&(Z===n.FLOAT&&(he=n.R32F),Z===n.HALF_FLOAT&&(he=n.R16F),Z===n.UNSIGNED_BYTE&&(he=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.R8UI),Z===n.UNSIGNED_SHORT&&(he=n.R16UI),Z===n.UNSIGNED_INT&&(he=n.R32UI),Z===n.BYTE&&(he=n.R8I),Z===n.SHORT&&(he=n.R16I),Z===n.INT&&(he=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(he=n.RG32F),Z===n.HALF_FLOAT&&(he=n.RG16F),Z===n.UNSIGNED_BYTE&&(he=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RG8UI),Z===n.UNSIGNED_SHORT&&(he=n.RG16UI),Z===n.UNSIGNED_INT&&(he=n.RG32UI),Z===n.BYTE&&(he=n.RG8I),Z===n.SHORT&&(he=n.RG16I),Z===n.INT&&(he=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(he=n.RGB16UI),Z===n.UNSIGNED_INT&&(he=n.RGB32UI),Z===n.BYTE&&(he=n.RGB8I),Z===n.SHORT&&(he=n.RGB16I),Z===n.INT&&(he=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),Z===n.UNSIGNED_INT&&(he=n.RGBA32UI),Z===n.BYTE&&(he=n.RGBA8I),Z===n.SHORT&&(he=n.RGBA16I),Z===n.INT&&(he=n.RGBA32I)),w===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),w===n.RGBA){const Ge=ve?Wu:wt.getTransfer(me);Z===n.FLOAT&&(he=n.RGBA32F),Z===n.HALF_FLOAT&&(he=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(he=Ge===Dt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(L,w){let Z;return L?w===null||w===As||w===bo?Z=n.DEPTH24_STENCIL8:w===Zi?Z=n.DEPTH32F_STENCIL8:w===Na&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===As||w===bo?Z=n.DEPTH_COMPONENT24:w===Zi?Z=n.DEPTH_COMPONENT32F:w===Na&&(Z=n.DEPTH_COMPONENT16),Z}function O(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mi&&L.minFilter!==Di?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function F(L){const w=L.target;w.removeEventListener("dispose",F),B(w),w.isVideoTexture&&p.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function B(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Z=L.source,me=v.get(Z);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(L),Object.keys(me).length===0&&v.delete(Z)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const Z=L.source,me=v.get(Z);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)n.deleteFramebuffer(w.__webglFramebuffer[me]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=L.textures;for(let me=0,ve=Z.length;me<ve;me++){const he=r.get(Z[me]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(Z[me])}r.remove(L)}let k=0;function oe(){k=0}function Q(){const L=k;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function de(L,w){const Z=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Z,L,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function le(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){$(Z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function se(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){$(Z,L,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function V(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){fe(Z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const ue={[rh]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[sh]:n.MIRRORED_REPEAT},q={[Mi]:n.NEAREST,[IA]:n.NEAREST_MIPMAP_NEAREST,[nu]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[Jf]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},N={[kA]:n.NEVER,[WA]:n.ALWAYS,[BA]:n.LESS,[nx]:n.LEQUAL,[VA]:n.EQUAL,[GA]:n.GEQUAL,[zA]:n.GREATER,[HA]:n.NOTEQUAL};function J(L,w){if(w.type===Zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Di||w.magFilter===Jf||w.magFilter===nu||w.magFilter===Es||w.minFilter===Di||w.minFilter===Jf||w.minFilter===nu||w.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ue[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ue[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ue[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mi||w.minFilter!==nu&&w.minFilter!==Es||w.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function we(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const he=ce(w);if(he!==L.__cacheKey){ve[he]===void 0&&(ve[he]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[he].usedTimes++;const Ge=ve[L.__cacheKey];Ge!==void 0&&(ve[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(w)),L.__cacheKey=he,L.__webglTexture=ve[he].texture}return Z}function $(L,w,Z){let me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=n.TEXTURE_3D);const ve=we(L,w),he=w.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+Z);const Ge=r.get(he);if(he.version!==Ge.__version||ve===!0){t.activeTexture(n.TEXTURE0+Z);const Ce=wt.getPrimaries(wt.workingColorSpace),Fe=w.colorSpace===Fr?null:wt.getPrimaries(w.colorSpace),ct=w.colorSpace===Fr||Ce===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=T(w.image,!1,o.maxTextureSize);Me=Ct(w,Me);const Be=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let tt=b(w.internalFormat,Be,Ke,w.colorSpace,w.isVideoTexture);J(me,w);let Ve;const dt=w.mipmaps,st=w.isVideoTexture!==!0,At=Ge.__version===void 0||ve===!0,j=he.dataReady,Re=O(w,Me);if(w.isDepthTexture)tt=R(w.format===Do,w.type),At&&(st?t.texStorage2D(n.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,Ke,null));else if(w.isDataTexture)if(dt.length>0){st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Ve=dt[ae],st?j&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,Be,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,ae,tt,Ve.width,Ve.height,0,Be,Ke,Ve.data);w.generateMipmaps=!1}else st?(At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Me.width,Me.height),j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,Ke,Me.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,dt[0].width,dt[0].height,Me.depth);for(let ae=0,pe=dt.length;ae<pe;ae++)if(Ve=dt[ae],w.format!==Si)if(Be!==null)if(st){if(j)if(w.layerUpdates.size>0){const Le=H0(Ve.width,Ve.height,w.format,w.type);for(const De of w.layerUpdates){const ot=Ve.data.subarray(De*Le/Ve.data.BYTES_PER_ELEMENT,(De+1)*Le/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,De,Ve.width,Ve.height,1,Be,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ve.width,Ve.height,Me.depth,Be,Ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,tt,Ve.width,Ve.height,Me.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ve.width,Ve.height,Me.depth,Be,Ke,Ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,tt,Ve.width,Ve.height,Me.depth,0,Be,Ke,Ve.data)}else{st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Ve=dt[ae],w.format!==Si?Be!==null?st?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,tt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,Be,Ke,Ve.data):t.texImage2D(n.TEXTURE_2D,ae,tt,Ve.width,Ve.height,0,Be,Ke,Ve.data)}else if(w.isDataArrayTexture)if(st){if(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,Me.width,Me.height,Me.depth),j)if(w.layerUpdates.size>0){const ae=H0(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Be,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isData3DTexture)st?(At&&t.texStorage3D(n.TEXTURE_3D,Re,tt,Me.width,Me.height,Me.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,Ke,Me.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,Be,Ke,Me.data);else if(w.isFramebufferTexture){if(At)if(st)t.texStorage2D(n.TEXTURE_2D,Re,tt,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,tt,ae,pe,0,Be,Ke,null),ae>>=1,pe>>=1}}else if(dt.length>0){if(st&&At){const ae=je(dt[0]);t.texStorage2D(n.TEXTURE_2D,Re,tt,ae.width,ae.height)}for(let ae=0,pe=dt.length;ae<pe;ae++)Ve=dt[ae],st?j&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Be,Ke,Ve):t.texImage2D(n.TEXTURE_2D,ae,tt,Be,Ke,Ve);w.generateMipmaps=!1}else if(st){if(At){const ae=je(Me);t.texStorage2D(n.TEXTURE_2D,Re,tt,ae.width,ae.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Ke,Me)}else t.texImage2D(n.TEXTURE_2D,0,tt,Be,Ke,Me);S(w)&&y(me),Ge.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,Z){if(w.image.length!==6)return;const me=we(L,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const he=r.get(ve);if(ve.version!==he.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const Ge=wt.getPrimaries(wt.workingColorSpace),Ce=w.colorSpace===Fr?null:wt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Fr||Ge===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!ct&&!Me?Be[pe]=T(w.image[pe],!0,o.maxCubemapSize):Be[pe]=Me?w.image[pe].image:w.image[pe],Be[pe]=Ct(w,Be[pe]);const Ke=Be[0],tt=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type),dt=b(w.internalFormat,tt,Ve,w.colorSpace),st=w.isVideoTexture!==!0,At=he.__version===void 0||me===!0,j=ve.dataReady;let Re=O(w,Ke);J(n.TEXTURE_CUBE_MAP,w);let ae;if(ct){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){ae=Be[pe].mipmaps;for(let Le=0;Le<ae.length;Le++){const De=ae[Le];w.format!==Si?tt!==null?st?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,tt,Ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,De.width,De.height,0,tt,Ve,De.data)}}}else{if(ae=w.mipmaps,st&&At){ae.length>0&&Re++;const pe=je(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){st?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,tt,Ve,Be[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Be[pe].width,Be[pe].height,0,tt,Ve,Be[pe].data);for(let Le=0;Le<ae.length;Le++){const ot=ae[Le].image[pe].image;st?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ot.width,ot.height,tt,Ve,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,ot.width,ot.height,0,tt,Ve,ot.data)}}else{st?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Ve,Be[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,tt,Ve,Be[pe]);for(let Le=0;Le<ae.length;Le++){const De=ae[Le];st?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,tt,Ve,De.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,tt,Ve,De.image[pe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),he.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ee(L,w,Z,me,ve,he){const Ge=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Fe=b(Z.internalFormat,Ge,Ce,Z.colorSpace),ct=r.get(w),Me=r.get(Z);if(Me.__renderTarget=w,!ct.__hasExternalTextures){const Be=Math.max(1,w.width>>he),Ke=Math.max(1,w.height>>he);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Fe,Be,Ke,w.depth,0,Ge,Ce,null):t.texImage2D(ve,he,Fe,Be,Ke,0,Ge,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Me.__webglTexture,0,pt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Me.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(L,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,he=R(w.stencilBuffer,ve),Ge=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=pt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,he,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,he,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,L)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const he=me[ve],Ge=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Fe=b(he.internalFormat,Ge,Ce,he.colorSpace),ct=pt(w);Z&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Fe,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de(w.depthTexture,0);const ve=me.__webglTexture,he=pt(w);if(w.depthTexture.format===Mo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Do)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const w=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=n.createRenderbuffer(),ye(w.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,he)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ye(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(L,w,Z){const me=r.get(L);w!==void 0&&Ee(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ue(L)}function Pt(L){const w=L.texture,Z=r.get(L),me=r.get(w);L.addEventListener("dispose",U);const ve=L.textures,he=L.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=w.version,u.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Z.__webglFramebuffer[Ce][Fe]=n.createFramebuffer()}else Z.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=r.get(ve[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&ft(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];Z.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ct=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),Be=b(Fe.internalFormat,ct,Me,Fe.colorSpace,L.isXRRenderTarget===!0),Ke=pt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),J(n.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Ce][Fe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Ee(Z.__webglFramebuffer[Ce],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=ve[Ce],Me=r.get(ct);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),J(n.TEXTURE_2D,ct),Ee(Z.__webglFramebuffer,L,ct,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),S(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),J(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Fe],L,w,n.COLOR_ATTACHMENT0,Ce,Fe);else Ee(Z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ce,0);S(w)&&y(Ce),t.unbindTexture()}L.depthBuffer&&Ue(L)}function gt(L){const w=L.textures;for(let Z=0,me=w.length;Z<me;Z++){const ve=w[Z];if(S(ve)){const he=D(L),Ge=r.get(ve).__webglTexture;t.bindTexture(he,Ge),y(he),t.unbindTexture()}}}const It=[],H=[];function wn(L){if(L.samples>0){if(ft(L)===!1){const w=L.textures,Z=L.width,me=L.height;let ve=n.COLOR_BUFFER_BIT;const he=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=r.get(L),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,n.NEAREST),d===!0&&(It.length=0,H.length=0,It.push(n.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(It.push(he),H.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pt(L){return Math.min(o.maxSamples,L.samples)}function ft(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(L){const w=u.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function Ct(L,w){const Z=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Lo&&Z!==Fr&&(wt.getTransfer(Z)===Dt?(me!==Si||ve!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ft}function Jb(n,e){function t(r,o=Fr){let l;const u=wt.getTransfer(o);if(r===sr)return n.UNSIGNED_BYTE;if(r===gp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===qy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Xy)return n.BYTE;if(r===Yy)return n.SHORT;if(r===Na)return n.UNSIGNED_SHORT;if(r===mp)return n.INT;if(r===As)return n.UNSIGNED_INT;if(r===Zi)return n.FLOAT;if(r===Va)return n.HALF_FLOAT;if(r===$y)return n.ALPHA;if(r===Ky)return n.RGB;if(r===Si)return n.RGBA;if(r===Zy)return n.LUMINANCE;if(r===Qy)return n.LUMINANCE_ALPHA;if(r===Mo)return n.DEPTH_COMPONENT;if(r===Do)return n.DEPTH_STENCIL;if(r===Jy)return n.RED;if(r===_p)return n.RED_INTEGER;if(r===ex)return n.RG;if(r===yp)return n.RG_INTEGER;if(r===xp)return n.RGBA_INTEGER;if(r===Pu||r===bu||r===Du||r===Lu)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===ah||r===lh||r===uh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===oh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ch||r===fh||r===dh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ch||r===fh)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===dh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===yh||r===xh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===hh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ah)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Iu||r===Ch||r===Rh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Iu)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tx||r===Ph||r===bh||r===Dh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Iu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const e3={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(e3)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const t3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new zn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gr({vertexShader:t3,fragmentShader:n3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new tc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r3 extends Uo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,x=null,M=null;const T=new i3,S=t.getContextAttributes();let y=null,D=null;const b=[],R=[],O=new Lt;let F=null;const U=new ai;U.viewport=new Kt;const B=new ai;B.viewport=new Kt;const P=[U,B],C=new wC;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=b[$];return fe===void 0&&(fe=new Rd,b[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=b[$];return fe===void 0&&(fe=new Rd,b[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=b[$];return fe===void 0&&(fe=new Rd,b[$]=fe),fe.getHandSpace()};function Q($){const fe=R.indexOf($.inputSource);if(fe===-1)return;const Ee=b[fe];Ee!==void 0&&(Ee.update($.inputSource,$.frame,h||u),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function ce(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",de);for(let $=0;$<b.length;$++){const fe=R[$];fe!==null&&(R[$]=null,b[$].disconnect(fe))}k=null,oe=null,T.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,D=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Cs(x.framebufferWidth,x.framebufferHeight,{format:Si,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ee=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Do:Mo,Ee=S.stencil?bo:As);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Cs(v.textureWidth,v.textureHeight,{format:Si,type:sr,depthTexture:new vx(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),we.setContext(o),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de($){for(let fe=0;fe<$.removed.length;fe++){const Ee=$.removed[fe],ye=R.indexOf(Ee);ye>=0&&(R[ye]=null,b[ye].disconnect(Ee))}for(let fe=0;fe<$.added.length;fe++){const Ee=$.added[fe];let ye=R.indexOf(Ee);if(ye===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=R.length){R.push(Ee),ye=Ue;break}else if(R[Ue]===null){R[Ue]=Ee,ye=Ue;break}if(ye===-1)break}const Ae=b[ye];Ae&&Ae.connect(Ee)}}const le=new re,se=new re;function V($,fe,Ee){le.setFromMatrixPosition(fe.matrixWorld),se.setFromMatrixPosition(Ee.matrixWorld);const ye=le.distanceTo(se),Ae=fe.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Je=Ae[14]/(Ae[10]-1),Pt=Ae[14]/(Ae[10]+1),gt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],wn=(Ue[8]+1)/Ue[0],pt=Je*H,ft=Je*wn,Ye=ye/(-H+wn),Ct=Ye*-H;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ct),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Je+Ye,L=Pt+Ye,w=pt-Ct,Z=ft+(ye-Ct),me=gt*Pt/L*je,ve=It*Pt/L*je;$.projectionMatrix.makePerspective(w,Z,me,ve,je,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let fe=$.near,Ee=$.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=B.near=U.near=fe,C.far=B.far=U.far=Ee,(k!==C.near||oe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,oe=C.far),U.layers.mask=$.layers.mask|2,B.layers.mask=$.layers.mask|4,C.layers.mask=U.layers.mask|B.layers.mask;const ye=$.parent,Ae=C.cameras;ue(C,ye);for(let Ue=0;Ue<Ae.length;Ue++)ue(Ae[Ue],ye);Ae.length===2?V(C,U,B):C.projectionMatrix.copy(U.projectionMatrix),q($,C,ye)};function q($,fe,Ee){Ee===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function($){d=$,v!==null&&(v.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let N=null;function J($,fe){if(p=fe.getViewerPose(h||u),M=fe,p!==null){const Ee=p.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let ye=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Je=Ee[Ue];let Pt=null;if(x!==null)Pt=x.getViewport(Je);else{const It=g.getViewSubImage(v,Je);Pt=It.viewport,Ue===0&&(e.setRenderTargetTextures(D,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(D))}let gt=P[Ue];gt===void 0&&(gt=new ai,gt.layers.enable(Ue),gt.viewport=new Kt,P[Ue]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ue===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(gt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=g.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const ye=R[Ee],Ae=b[Ee];ye!==null&&Ae!==void 0&&Ae.update(ye,fe,h||u)}N&&N($,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const we=new _x;we.setAnimationLoop(J),this.setAnimationLoop=function($){N=$},this.dispose=function(){}}}const ps=new or,s3=new Zt;function o3(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,dx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,b,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),p(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,D,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Vn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Vn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),b=D.envMap,R=D.envMapRotation;b&&(S.envMap.value=b,ps.copy(R),ps.x*=-1,ps.y*=-1,ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(s3.makeRotationFromEuler(ps)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function a3(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const R=b.program;r.uniformBlockBinding(D,R)}function h(D,b){let R=o[D.id];R===void 0&&(M(D),R=p(D),o[D.id]=R,D.addEventListener("dispose",S));const O=b.program;r.updateUBOMapping(D,O);const F=e.render.frame;l[D.id]!==F&&(v(D),l[D.id]=F)}function p(D){const b=g();D.__bindingPointIndex=b;const R=n.createBuffer(),O=D.__size,F=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function g(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=o[D.id],R=D.uniforms,O=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let F=0,U=R.length;F<U;F++){const B=Array.isArray(R[F])?R[F]:[R[F]];for(let P=0,C=B.length;P<C;P++){const k=B[P];if(x(k,F,P,O)===!0){const oe=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let de=0;de<Q.length;de++){const le=Q[de],se=T(le);typeof le=="number"||typeof le=="boolean"?(k.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,oe+ce,k.__data)):le.isMatrix3?(k.__data[0]=le.elements[0],k.__data[1]=le.elements[1],k.__data[2]=le.elements[2],k.__data[3]=0,k.__data[4]=le.elements[3],k.__data[5]=le.elements[4],k.__data[6]=le.elements[5],k.__data[7]=0,k.__data[8]=le.elements[6],k.__data[9]=le.elements[7],k.__data[10]=le.elements[8],k.__data[11]=0):(le.toArray(k.__data,ce),ce+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,b,R,O){const F=D.value,U=b+"_"+R;if(O[U]===void 0)return typeof F=="number"||typeof F=="boolean"?O[U]=F:O[U]=F.clone(),!0;{const B=O[U];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return O[U]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function M(D){const b=D.uniforms;let R=0;const O=16;for(let U=0,B=b.length;U<B;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,k=P.length;C<k;C++){const oe=P[C],Q=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,de=Q.length;ce<de;ce++){const le=Q[ce],se=T(le),V=R%O,ue=V%se.boundary,q=V+ue;R+=ue,q!==0&&O-q<se.storage&&(R+=O-q),oe.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=se.storage}}}const F=R%O;return F>0&&(R+=O-F),D.__size=R,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function S(D){const b=D.target;b.removeEventListener("dispose",S);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class l3{constructor(e={}){const{canvas:t=XA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Br,this.toneMappingExposure=1;const R=this;let O=!1,F=0,U=0,B=null,P=-1,C=null;const k=new Kt,oe=new Kt;let Q=null;const ce=new Rt(0);let de=0,le=t.width,se=t.height,V=1,ue=null,q=null;const N=new Kt(0,0,le,se),J=new Kt(0,0,le,se);let we=!1;const $=new mx;let fe=!1,Ee=!1;const ye=new Zt,Ae=new Zt,Ue=new re,Je=new Kt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function It(){return B===null?V:1}let H=r;function wn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pp}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const X="webgl2";if(H=wn(X,A),H===null)throw wn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,ft,Ye,Ct,je,L,w,Z,me,ve,he,Ge,Ce,Fe,ct,Me,Be,Ke,tt,Ve,dt,st,At,j;function Re(){pt=new vP(H),pt.init(),st=new Jb(H,pt),ft=new fP(H,pt,e,st),Ye=new Zb(H,pt),ft.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Ct=new xP(H),je=new kb,L=new Qb(H,pt,Ye,je,ft,st,Ct),w=new hP(R),Z=new gP(R),me=new CC(H),At=new uP(H,me),ve=new _P(H,me,Ct,At),he=new MP(H,ve,me,Ct),tt=new SP(H,ft,L),Me=new dP(je),Ge=new Ob(R,w,Z,pt,ft,At,Me),Ce=new o3(R,je),Fe=new Vb,ct=new Xb(pt),Ke=new lP(R,w,Z,Ye,he,x,d),Be=new $b(R,he,ft),j=new a3(H,Ct,ft,Ye),Ve=new cP(H,pt,Ct),dt=new yP(H,pt,Ct),Ct.programs=Ge.programs,R.capabilities=ft,R.extensions=pt,R.properties=je,R.renderLists=Fe,R.shadowMap=Be,R.state=Ye,R.info=Ct}Re();const ae=new r3(R,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(le,se,!1))},this.getSize=function(A){return A.set(le,se)},this.setSize=function(A,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,se=X,t.width=Math.floor(A*V),t.height=Math.floor(X*V),te===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*V,se*V).floor()},this.setDrawingBufferSize=function(A,X,te){le=A,se=X,V=te,t.width=Math.floor(A*te),t.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,X,te,ne){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,te,ne),Ye.viewport(k.copy(N).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,X,te,ne){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,te,ne),Ye.scissor(oe.copy(J).multiplyScalar(V).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Ye.setScissorTest(we=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,X=!0,te=!0){let ne=0;if(A){let G=!1;if(B!==null){const Se=B.texture.format;G=Se===xp||Se===yp||Se===_p}if(G){const Se=B.texture.type,Pe=Se===sr||Se===As||Se===Na||Se===bo||Se===gp||Se===vp,Ne=Ke.getClearColor(),Oe=Ke.getClearAlpha(),nt=Ne.r,it=Ne.g,Xe=Ne.b;Pe?(M[0]=nt,M[1]=it,M[2]=Xe,M[3]=Oe,H.clearBufferuiv(H.COLOR,0,M)):(T[0]=nt,T[1]=it,T[2]=Xe,T[3]=Oe,H.clearBufferiv(H.COLOR,0,T))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Fe.dispose(),ct.dispose(),je.dispose(),w.dispose(),Z.dispose(),he.dispose(),At.dispose(),j.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ps),ae.removeEventListener("sessionend",lr),Ni.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const A=Ct.autoReset,X=Be.enabled,te=Be.autoUpdate,ne=Be.needsUpdate,G=Be.type;Re(),Ct.autoReset=A,Be.enabled=X,Be.autoUpdate=te,Be.needsUpdate=ne,Be.type=G}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const X=A.target;X.removeEventListener("dispose",ot),Ut(X)}function Ut(A){en(A),je.remove(A)}function en(A){const X=je.get(A).programs;X!==void 0&&(X.forEach(function(te){Ge.releaseProgram(te)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,ne,G,Se){X===null&&(X=Pt);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Ne=qa(A,X,te,ne,G);Ye.setMaterial(ne,Pe);let Oe=te.index,nt=1;if(ne.wireframe===!0){if(Oe=ve.getWireframeAttribute(te),Oe===void 0)return;nt=2}const it=te.drawRange,Xe=te.attributes.position;let at=it.start*nt,Mt=(it.start+it.count)*nt;Se!==null&&(at=Math.max(at,Se.start*nt),Mt=Math.min(Mt,(Se.start+Se.count)*nt)),Oe!==null?(at=Math.max(at,0),Mt=Math.min(Mt,Oe.count)):Xe!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,Xe.count));const Et=Mt-at;if(Et<0||Et===1/0)return;At.setup(G,ne,Ne,te,Oe);let Bt,yt=Ve;if(Oe!==null&&(Bt=me.get(Oe),yt=dt,yt.setIndex(Bt)),G.isMesh)ne.wireframe===!0?(Ye.setLineWidth(ne.wireframeLinewidth*It()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(G.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*It()),G.isLineSegments?yt.setMode(H.LINES):G.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else G.isPoints?yt.setMode(H.POINTS):G.isSprite&&yt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const $e=G._multiDrawStarts,Wt=G._multiDrawCounts,vt=G._multiDrawCount,cn=Oe?me.get(Oe).bytesPerElement:1,li=je.get(ne).currentProgram.getUniforms();for(let Cn=0;Cn<vt;Cn++)li.setValue(H,"_gl_DrawID",Cn),yt.render($e[Cn]/cn,Wt[Cn])}else if(G.isInstancedMesh)yt.renderInstances(at,Et,G.count);else if(te.isInstancedBufferGeometry){const $e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,$e);yt.renderInstances(at,Et,Wt)}else yt.render(at,Et)};function xt(A,X,te){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,bs(A,X,te),A.side=Hr,A.needsUpdate=!0,bs(A,X,te),A.side=Ki):bs(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),y=ct.get(te),y.init(X),b.push(y),te.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),A!==te&&A.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const ne=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ne=Se[Pe];xt(Ne,te,G),ne.add(Ne)}else xt(Se,te,G),ne.add(Se)}),b.pop(),y=null,ne},this.compileAsync=function(A,X,te=null){const ne=this.compile(A,X,te);return new Promise(G=>{function Se(){if(ne.forEach(function(Pe){je.get(Pe).currentProgram.isReady()&&ne.delete(Pe)}),ne.size===0){G(A);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ln=null;function An(A){Ln&&Ln(A)}function Ps(){Ni.stop()}function lr(){Ni.start()}const Ni=new _x;Ni.setAnimationLoop(An),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Ln=A,ae.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},ae.addEventListener("sessionstart",Ps),ae.addEventListener("sessionend",lr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,B),y=ct.get(A,b.length),y.init(X),b.push(y),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Ee),S=Fe.get(A,D.length),S.init(),D.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Ui(Se,X,-1/0,R.sortObjects)}Ui(A,X,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ue,q),gt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gt&&Ke.addToRenderList(S,A),this.info.render.frame++,fe===!0&&Me.beginShadows();const te=y.state.shadowsArray;Be.render(te,A,X),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,G=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Se=X.cameras;if(G.length>0)for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Oe=Se[Pe];Yr(ne,G,A,Oe)}gt&&Ke.render(A);for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Oe=Se[Pe];Xr(S,A,Oe,Oe.viewport)}}else G.length>0&&Yr(ne,G,A,X),gt&&Ke.render(A),Xr(S,A,X);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),A.isScene===!0&&A.onAfterRender(R,A,X),At.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(y=b[b.length-1],fe===!0&&Me.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Ui(A,X,te,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){ne&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Pe=he.update(A),Ne=A.material;Ne.visible&&S.push(A,Pe,Ne,te,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){const Pe=he.update(A),Ne=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Je.copy(Pe.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ne)){const Oe=Pe.groups;for(let nt=0,it=Oe.length;nt<it;nt++){const Xe=Oe[nt],at=Ne[Xe.materialIndex];at&&at.visible&&S.push(A,Pe,at,te,Je.z,Xe)}}else Ne.visible&&S.push(A,Pe,Ne,te,Je.z,null)}}const Se=A.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)Ui(Se[Pe],X,te,ne)}function Xr(A,X,te,ne){const G=A.opaque,Se=A.transmissive,Pe=A.transparent;y.setupLightsView(te),fe===!0&&Me.setGlobalState(R.clippingPlanes,te),ne&&Ye.viewport(k.copy(ne)),G.length>0&&ur(G,X,te),Se.length>0&&ur(Se,X,te),Pe.length>0&&ur(Pe,X,te),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Yr(A,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new Cs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Va:sr,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[ne.id],Pe=ne.viewport||k;Se.setSize(Pe.z,Pe.w);const Ne=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(ce),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Ke.render(te);const Oe=R.toneMapping;R.toneMapping=Br;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),fe===!0&&Me.setGlobalState(R.clippingPlanes,ne),ur(A,te,ne),L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Xe=0,at=X.length;Xe<at;Xe++){const Mt=X[Xe],Et=Mt.object,Bt=Mt.geometry,yt=Mt.material,$e=Mt.group;if(yt.side===Ki&&Et.layers.test(ne.layers)){const Wt=yt.side;yt.side=Vn,yt.needsUpdate=!0,Xa(Et,te,ne,Bt,yt,$e),yt.side=Wt,yt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Se),L.updateRenderTargetMipmap(Se))}R.setRenderTarget(Ne),R.setClearColor(ce,de),nt!==void 0&&(ne.viewport=nt),R.toneMapping=Oe}function ur(A,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let G=0,Se=A.length;G<Se;G++){const Pe=A[G],Ne=Pe.object,Oe=Pe.geometry,nt=ne===null?Pe.material:ne,it=Pe.group;Ne.layers.test(te.layers)&&Xa(Ne,X,te,Oe,nt,it)}}function Xa(A,X,te,ne,G,Se){A.onBeforeRender(R,X,te,ne,G,Se),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,X,te,ne,A,Se),G.transparent===!0&&G.side===Ki&&G.forceSinglePass===!1?(G.side=Vn,G.needsUpdate=!0,R.renderBufferDirect(te,X,ne,G,A,Se),G.side=Hr,G.needsUpdate=!0,R.renderBufferDirect(te,X,ne,G,A,Se),G.side=Ki):R.renderBufferDirect(te,X,ne,G,A,Se),A.onAfterRender(R,X,te,ne,G,Se)}function bs(A,X,te){X.isScene!==!0&&(X=Pt);const ne=je.get(A),G=y.state.lights,Se=y.state.shadowsArray,Pe=G.state.version,Ne=Ge.getParameters(A,G.state,Se,X,te),Oe=Ge.getProgramCacheKey(Ne);let nt=ne.programs;ne.environment=A.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",ot),nt=new Map,ne.programs=nt);let it=nt.get(Oe);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Pe)return Ti(A,Ne),it}else Ne.uniforms=Ge.getUniforms(A),A.onBeforeCompile(Ne,R),it=Ge.acquireProgram(Ne,Oe),nt.set(Oe,it),ne.uniforms=Ne.uniforms;const Xe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Ti(A,Ne),ne.needsLights=ic(A),ne.lightsStateVersion=Pe,ne.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Ya(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Nu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ti(A,X){const te=je.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function qa(A,X,te,ne,G){X.isScene!==!0&&(X=Pt),L.resetTextureUnits();const Se=X.fog,Pe=ne.isMeshStandardMaterial?X.environment:null,Ne=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Lo,Oe=(ne.isMeshStandardMaterial?Z:w).get(ne.envMap||Pe),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Xe=!!te.morphAttributes.position,at=!!te.morphAttributes.normal,Mt=!!te.morphAttributes.color;let Et=Br;ne.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Et=R.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=Bt!==void 0?Bt.length:0,$e=je.get(ne),Wt=y.state.lights;if(fe===!0&&(Ee===!0||A!==C)){const Yt=A===C&&ne.id===P;Me.setState(ne,A,Yt)}let vt=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Ne||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isBatchedMesh&&$e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&$e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&$e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&$e.instancingMorph===!1&&G.morphTexture!==null||$e.envMap!==Oe||ne.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Me.numPlanes||$e.numIntersection!==Me.numIntersection)||$e.vertexAlphas!==nt||$e.vertexTangents!==it||$e.morphTargets!==Xe||$e.morphNormals!==at||$e.morphColors!==Mt||$e.toneMapping!==Et||$e.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,$e.__version=ne.version);let cn=$e.currentProgram;vt===!0&&(cn=bs(ne,X,G));let li=!1,Cn=!1,qr=!1;const bt=cn.getUniforms(),Rn=$e.uniforms;if(Ye.useProgram(cn.program)&&(li=!0,Cn=!0,qr=!0),ne.id!==P&&(P=ne.id,Cn=!0),li||C!==A){Ye.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),qA(ye),$A(ye),bt.setValue(H,"projectionMatrix",ye)):bt.setValue(H,"projectionMatrix",A.projectionMatrix),bt.setValue(H,"viewMatrix",A.matrixWorldInverse);const gn=bt.map.cameraPosition;gn!==void 0&&gn.setValue(H,Ue.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&bt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,qr=!0)}if(G.isSkinnedMesh){bt.setOptional(H,G,"bindMatrix"),bt.setOptional(H,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),bt.setValue(H,"boneTexture",Yt.boneTexture,L))}G.isBatchedMesh&&(bt.setOptional(H,G,"batchingTexture"),bt.setValue(H,"batchingTexture",G._matricesTexture,L),bt.setOptional(H,G,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",G._indirectTexture,L),bt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",G._colorsTexture,L));const mn=te.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&tt.update(G,te,cn),(Cn||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,bt.setValue(H,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Rn.envMap.value=Oe,Rn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),Cn&&(bt.setValue(H,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&$a(Rn,qr),Se&&ne.fog===!0&&Ce.refreshFogUniforms(Rn,Se),Ce.refreshMaterialUniforms(Rn,ne,V,se,y.state.transmissionRenderTarget[A.id]),Nu.upload(H,Ya($e),Rn,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Nu.upload(H,Ya($e),Rn,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&bt.setValue(H,"center",G.center),bt.setValue(H,"modelViewMatrix",G.modelViewMatrix),bt.setValue(H,"normalMatrix",G.normalMatrix),bt.setValue(H,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let gn=0,$r=Yt.length;gn<$r;gn++){const mt=Yt[gn];j.update(mt,cn),j.bind(mt,cn)}}return cn}function $a(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,X,te){je.get(A.texture).__webglTexture=X,je.get(A.depthTexture).__webglTexture=te;const ne=je.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const te=je.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,te=0){B=A,F=X,U=te;let ne=!0,G=null,Se=!1,Pe=!1;if(A){const Oe=je.get(A);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(Oe.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Oe.__hasExternalTextures)L.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Oe.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Pe=!0);const it=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?G=it[X][te]:G=it[X],Se=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?G=je.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[te]:G=it,k.copy(A.viewport),oe.copy(A.scissor),Q=A.scissorTest}else k.copy(N).multiplyScalar(V).floor(),oe.copy(J).multiplyScalar(V).floor(),Q=we;if(Ye.bindFramebuffer(H.FRAMEBUFFER,G)&&ne&&Ye.drawBuffers(A,G),Ye.viewport(k),Ye.scissor(oe),Ye.setScissorTest(Q),Se){const Oe=je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,te)}else if(Pe){const Oe=je.get(A.texture),nt=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,te||0,nt)}P=-1},this.readRenderTargetPixels=function(A,X,te,ne,G,Se,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const Oe=A.texture,nt=Oe.format,it=Oe.type;if(!ft.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-G&&H.readPixels(X,te,ne,G,st.convert(nt),st.convert(it),Se)}finally{const Oe=B!==null?je.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,ne,G,Se,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){const Oe=A.texture,nt=Oe.format,it=Oe.type;if(!ft.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-G){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),H.readPixels(X,te,ne,G,st.convert(nt),st.convert(it),0);const at=B!==null?je.get(B).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,at);const Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await YA(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(Xe),H.deleteSync(Mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,te=0){A.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),G=Math.floor(A.image.width*ne),Se=Math.floor(A.image.height*ne),Pe=X!==null?X.x:0,Ne=X!==null?X.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Pe,Ne,G,Se),Ye.unbindTexture()};const Ka=H.createFramebuffer(),Za=H.createFramebuffer();this.copyTextureToTexture=function(A,X,te=null,ne=null,G=0,Se=null){A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],X=arguments[2],Se=arguments[3]||0,te=null),Se===null&&(G!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=G,G=0):Se=0);let Pe,Ne,Oe,nt,it,Xe,at,Mt,Et;const Bt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(te!==null)Pe=te.max.x-te.min.x,Ne=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,it=te.min.y,Xe=te.isBox3?te.min.z:0;else{const mn=Math.pow(2,-G);Pe=Math.floor(Bt.width*mn),Ne=Math.floor(Bt.height*mn),A.isDataArrayTexture?Oe=Bt.depth:A.isData3DTexture?Oe=Math.floor(Bt.depth*mn):Oe=1,nt=0,it=0,Xe=0}ne!==null?(at=ne.x,Mt=ne.y,Et=ne.z):(at=0,Mt=0,Et=0);const yt=st.convert(X.format),$e=st.convert(X.type);let Wt;X.isData3DTexture?(L.setTexture3D(X,0),Wt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Wt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),li=H.getParameter(H.UNPACK_SKIP_PIXELS),Cn=H.getParameter(H.UNPACK_SKIP_ROWS),qr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const bt=A.isDataArrayTexture||A.isData3DTexture,Rn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const mn=je.get(A),Yt=je.get(X),gn=je.get(mn.__renderTarget),$r=je.get(Yt.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let mt=0;mt<Oe;mt++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(A).__webglTexture,G,Xe+mt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Se,Et+mt)),H.blitFramebuffer(nt,it,Pe,Ne,at,Mt,Pe,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||je.has(A)){const mn=je.get(A),Yt=je.get(X);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,Ka),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Za);for(let gn=0;gn<Oe;gn++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,G,Xe+gn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,G),Rn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.__webglTexture,Se,Et+gn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yt.__webglTexture,Se),G!==0?H.blitFramebuffer(nt,it,Pe,Ne,at,Mt,Pe,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):Rn?H.copyTexSubImage3D(Wt,Se,at,Mt,Et+gn,nt,it,Pe,Ne):H.copyTexSubImage2D(Wt,Se,at,Mt,nt,it,Pe,Ne);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Wt,Se,at,Mt,Et,Pe,Ne,Oe,yt,$e,Bt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Se,at,Mt,Et,Pe,Ne,Oe,yt,Bt.data):H.texSubImage3D(Wt,Se,at,Mt,Et,Pe,Ne,Oe,yt,$e,Bt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,at,Mt,Pe,Ne,yt,$e,Bt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,at,Mt,Bt.width,Bt.height,yt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,Se,at,Mt,Pe,Ne,yt,$e,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,li),H.pixelStorei(H.UNPACK_SKIP_ROWS,Cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qr),Se===0&&X.generateMipmaps&&H.generateMipmap(Wt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,ne=null,G=0){return A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],X=arguments[3],G=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,ne,G)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,U=0,B=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function u3(){const n=qe.useRef(null);return qe.useEffect(()=>{const e=new _C,t=new ai(75,window.innerWidth/window.innerHeight,.1,1e3),r=new l3;r.setSize(window.innerWidth,window.innerHeight),n.current.appendChild(r.domElement),t.position.z=5;const o=new ar,l=1500,u=new Float32Array(l*3);for(let v=0;v<l*3;v++)u[v]=(Math.random()-.5)*100;o.setAttribute("position",new Ei(u,3));const c=new gx({color:16777215,size:.1}),d=new SC(o,c);e.add(d);const h=v=>{const x=v.clientX/window.innerWidth*2-1,M=-(v.clientY/window.innerHeight)*2+1;d.rotation.x=M*.01,d.rotation.y=x*.01};window.addEventListener("mousemove",h);const p=()=>{const v=window.innerWidth,x=window.innerHeight;r.setSize(v,x),t.aspect=v/x,t.updateProjectionMatrix()};window.addEventListener("resize",p);const g=()=>{requestAnimationFrame(g),d.rotation.y+=.001,d.rotation.x+=.001,r.render(e,t)};return g(),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("resize",p),n.current.removeChild(r.domElement)}},[]),ie.jsx("div",{ref:n,className:"fixed inset-0 -z-50 overflow-hidden",style:{width:"100%",height:"100vvh"}})}function c3(n){return Wr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},child:[]}]})(n)}const f3=[{id:1,image:"https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=",title:"Gaming website",description:"Developed a feature-rich gaming website using React.js, framer-motion, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",name:"Gaming Website",githublink:"https://gaming-website-cyan.vercel.app/"},{id:2,image:"https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=",title:"E-commerce Website",description:"Developed a feature-rich education-tech website using React.js, Redux, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",name:"Education-tech Website",githublink:"https://education-tech-website.vercel.app/"},{id:3,image:"https://media.istockphoto.com/id/1335717953/photo/project-manager-working-on-computer-at-the-office-concept-with-icons-of-management-areas-such.jpg?s=612x612&w=0&k=20&c=HKKel0F9p7u9JL54sDOtYOuR1yVv81LA2ISHmuU7mdM=",title:"Food Delivery",description:"Developed a feature-rich food-delivery website using React.js, Redux, and Tailwind CSS, translating UI/UX mockups into a responsive and user-friendly interface.",name:"Food Delivery Website",githublink:"https://food-delivery-website-mocha.vercel.app/"}],d3=[{skill:"HTML",icon:"https://cdn-icons-png.flaticon.com/128/1051/1051277.png"},{skill:"CSS",icon:"https://cdn-icons-png.flaticon.com/128/16020/16020753.png"},{skill:"JavaScript",icon:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"},{skill:"React.js",icon:"https://cdn-icons-png.flaticon.com/128/3459/3459528.png"},{skill:"Node.js",icon:"https://cdn-icons-png.flaticon.com/128/15484/15484303.png"},{skill:"Express.js",icon:"https://logowik.com/content/uploads/images/t_express-js2119.logowik.com.webp"},{skill:"MongoDB",icon:"https://logowik.com/content/uploads/images/t_mongodb9740.logowik.com.webp"},{skill:"Tailwind_CSS",icon:"https://logowik.com/content/uploads/images/t_tailwind-css3232.logowik.com.webp"},{skill:"REDUX",icon:"https://logowik.com/content/uploads/images/t_redux.jpg"},{skill:"MySQL",icon:"https://logowik.com/content/uploads/images/t_mysql8604.logowik.com.webp"},{skill:"GIT",icon:"https://cdn-icons-png.flaticon.com/128/15466/15466163.png"},{skill:"GitHub",icon:"https://cdn-icons-png.flaticon.com/128/733/733553.png"},{skill:"Postman",icon:"https://logowik.com/content/uploads/images/t_postman-api-platform6643.logowik.com.webp"},{skill:"VS Code",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E5HZlsBUfIyQdZy53DBNd5c9aIxECWdFww&s"},{skill:"Intellij-idea",icon:"https://logowik.com/content/uploads/images/t_intellij-idea286.logowik.com.webp"}],h3=[{id:1,degree:"10 & 12",institution:"D.A.V PUBLIC SCHOOL",year:"2019",details:"I have completed my 10 & 12 from D.A.V PUBLIC SCHOOL JASOLA VIHAR in 2019.",icon:"https://cdn-icons-png.flaticon.com/128/1940/1940611.png",title:"Education",subtitle:"MANAV RACHNA UNIVERSITY"},{id:2,degree:"BCA",institution:"MAHARSHI DAYANAND UNIVERSITY",year:"2019-2022",details:"I have completed my BCA from Maharshi Dayanand University in 2022.",icon:"https://cdn-icons-png.flaticon.com/128/1940/1940611.png",title:"Education",subtitle:"MANAV RACHNA UNIVERSITY"},{id:3,degree:"MCA",institution:"MANAV RACHNA UNIVERSITY",year:"2023-2025",details:"I have completed my MCA from MANAV RACHNA UNIVERSITY in 2025 .",icon:"https://cdn-icons-png.flaticon.com/128/1940/1940611.png",title:"Education",subtitle:"MANAV RACHNA UNIVERSITY"},{id:4,degree:"Internship",institution:"OctaConfect Technology Pvt. Ltd",year:"2019-2022",details:"I have completed my internship from OctaConfect Technology Pvt. Ltd in July 2024.",icon:"https://cdn-icons-png.flaticon.com/128/2910/2910791.png",title:"Education",subtitle:"MANAV RACHNA UNIVERSITY"}],p3=[{id:1,title:"Address",icon:"https://cdn-icons-png.flaticon.com/512/4942/4942069.png",description:"New Delhi"},{id:2,title:"Phone",icon:"https://cdn-icons-png.flaticon.com/128/724/724664.png",description:"+91 9958060784"},{id:3,title:"Email",icon:"https://cdn-icons-png.flaticon.com/128/18154/18154191.png",description:"skr36880@gmail.com"}];function m3(){return ie.jsx(ie.Fragment,{children:ie.jsxs("section",{className:"pt-20 ml-7 mr-7",id:"projects",children:[ie.jsx("h2",{className:"mb-16 relative text-center text-6xl font-bold text-blue-500",children:"PROJECTS"}),ie.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",children:f3.map(n=>ie.jsxs("div",{className:"group relative overflow-hidden rounded-3xl",children:[ie.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"}),ie.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 md:group-hover:opacity-100",children:[ie.jsx("h3",{className:"mb-2 text-xl",children:n.name}),ie.jsx("p",{className:"mb-12 p-4",children:n.description}),ie.jsx("a",{href:n.githublink,target:"_blank",rel:"noopener noreferrer",className:"rounded-full bg-white px-4 py-2 text-black hover:bg-gray-500",children:ie.jsxs("div",{className:"flex items-center",children:[ie.jsx("span",{children:"See Live Preview"}),ie.jsx(c3,{})]})})]})]},n.id))})]})})}function g3(){const n=({skill:e,icon:t})=>{const o=2*Math.PI*50;return ie.jsxs(pn.article,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.1},transition:{duration:1},className:"relative flex flex-col items-center",children:[ie.jsxs("svg",{width:120,height:120,className:"rotate-[-90deg]",children:[ie.jsx("circle",{cx:60,cy:60,r:50,fill:"transparent",stroke:"#ffffff29",strokeWidth:10}),ie.jsx(pn.circle,{cx:60,cy:60,r:50,fill:"transparent",stroke:"#FFC107",strokeWidth:10,strokeDasharray:o,initial:{strokeDashoffset:o},animate:{strokeDashoffset:0},transition:{duration:2,ease:"easeInOut"}})]}),ie.jsxs("div",{className:"absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:[ie.jsx("img",{src:t,alt:e,className:"w-10 h-10 mb-1"}),ie.jsx("p",{className:"text-sm",children:e})]})]})};return ie.jsx(ie.Fragment,{children:ie.jsxs("section",{className:"relative",id:"skills",children:[ie.jsx("header",{className:"absolute w-1/2 aspect-[16/3] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"}),ie.jsx("header",{className:"absolute w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"}),ie.jsx("div",{className:"text-blue-500 text-center text-6xl font-bold mt-20",children:"My Skills"}),ie.jsx("section",{className:"grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-2",children:d3.map((e,t)=>ie.jsx(pn.article,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:t*.5},viewport:{once:!0,amount:.5},children:ie.jsx(n,{skill:e.skill,icon:e.icon})},t))})]})})}const v3=({id:n,degree:e,institution:t,title:r,subtitle:o,details:l,year:u,icon:c})=>ie.jsx(pn.article,{className:"relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-[yellow] before:to-[pink] before:z-[-10] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[pink] after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1},children:ie.jsx("section",{className:"bg-black z-20 text-white rounded-xl",children:ie.jsxs("section",{className:"border border-yellow-500 bg-purple-900 rounded-xl p-3 flex items-center",children:[ie.jsx("img",{src:c,alt:"icon",width:64,height:64}),ie.jsxs("div",{className:"ml-10",children:[ie.jsx("h3",{className:"text-xl font-semibold",children:r}),ie.jsx("p",{className:"text-sm",children:o}),ie.jsx("p",{className:"text-sm italic",children:u}),l&&ie.jsx("p",{className:"mt-2",children:l})]})]})})});function _3(){return ie.jsxs("section",{className:"relative container mx-auto px-4 py-6 lg:p-2",id:"experience",children:[ie.jsx("div",{className:"text-blue-500 text-center text-6xl font-bold mt-10",children:"Education & Experience"}),ie.jsx("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mt-12",children:h3.map(n=>ie.jsx(v3,{title:n.degree,subtitle:n.institution,year:n.year,details:n.details,icon:n.icon},n.id))})]})}function y3(){return ie.jsxs("article",{className:"relative font-sans text-white rounded-lg p-16",id:"contact",children:[ie.jsx("header",{children:ie.jsx("div",{className:"text-blue-500 text-center text-6xl font-bold mt-10 mb-20",children:"Get in Touch"})}),ie.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 mt-6",children:[ie.jsx("section",{children:p3.map(n=>ie.jsx(pn.article,{inital:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5},viewports:{once:!0},className:"mb-10",children:ie.jsx("div",{className:"bg-black z-20 md:w-11/12 w-full text-white rounded-xl",children:ie.jsxs("div",{className:"border border-yellow-500 bg-pink-700 rounded-xl p-3 flex items-center",children:[ie.jsx("img",{src:n.icon,alt:n.title,width:64,height:64}),ie.jsxs("div",{className:"ml-10",children:[ie.jsx("h3",{className:"text-xl font-semibold",children:n.title}),ie.jsx("p",{className:"text-sm",children:n.description})]})]})})},n.id))}),ie.jsx(pn.article,{transition:{duration:.5,delay:.6},inital:{opacity:0},animate:{opacity:1},children:ie.jsx("form",{action:"",className:"space-y-6",children:ie.jsx("section",{className:"mx-auto rounded-lg max-w-lg",children:ie.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[ie.jsx("label",{htmlFor:"name",className:"block border-b",children:ie.jsx("input",{type:"text",id:"name",required:!0,placeholder:"your name",className:"apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"})}),ie.jsx("label",{htmlFor:"phone",className:"block border-b",children:ie.jsx("input",{type:"tel",id:"phone",required:!0,placeholder:"your phone number",className:"apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium"})}),ie.jsx("label",{htmlFor:"message",className:"block border-b",children:ie.jsx("textarea",{rows:"4",id:"message",required:!0,placeholder:"your name",className:"apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium",children:" "})}),ie.jsx("a",{href:"https://wa.me/+9958060784",className:"flex justify-center items-center",children:ie.jsx("div",{className:"text-center bg-yellow-500 rounded-full w-40 ",children:"Send Message"})})]})})})})]})]})}function x3(){const e="Made by SHANTANU".split(""),t={hidden:{opacity:0,y:10},visible:{opacity:1,y:0}};return ie.jsx(ie.Fragment,{children:ie.jsx("footer",{className:"relative z-10 text-white border-t-2 border-t-white mt-8 ",children:ie.jsxs("div",{className:"container p-8 flex justify-between sm:justify-between",children:[ie.jsx("nav",{className:"flex ml-2",children:e.map((r,o)=>ie.jsx(pn.span,{variants:t,initial:"hidden",whileInView:"visible",transition:{duration:.5},className:`inline-block ${r===" "?"mr-4":"mr-1"}`,children:r},o))}),ie.jsx("nav",{className:"flex mr-0",children:e.map((r,o)=>ie.jsx(pn.span,{variants:t,initial:"hidden",whileInView:"visible",transition:{duration:.5},className:`inline-block ${r===" "?"mr-4":"mr-1"}`,children:r},o))})]})})})}const S3=()=>ie.jsxs(ie.Fragment,{children:[ie.jsx(u3,{}),ie.jsx(Hw,{}),ie.jsx(nA,{}),ie.jsx(m3,{}),ie.jsx(g3,{}),ie.jsx(_3,{}),ie.jsx(y3,{}),ie.jsx(x3,{})]});u1.createRoot(document.getElementById("root")).render(ie.jsx(qe.StrictMode,{children:ie.jsx(S3,{})}));

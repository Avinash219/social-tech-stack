(self.webpackChunkmessaging=self.webpackChunkmessaging||[]).push([[546],{7546:(pe,P,I)=>{I.r(P),I.d(P,{Attribute:()=>k,EventContract:()=>Ee,EventContractContainer:()=>oe,EventDispatcher:()=>Zt,EventInfoWrapper:()=>C,EventPhase:()=>nt,JSACTION:()=>m,JSINSTANCE:()=>_,JSTRACK:()=>D,OI:()=>U,VED:()=>L,VET:()=>M,bootstrapEarlyEventContract:()=>le,isCaptureEvent:()=>K,isSupportedEvent:()=>Et,registerDispatcher:()=>ie});const m="jsaction",U="oi",L="ved",M="vet",_="jsinstance",D="jstrack",k={JSACTION:m,OI:U,VED:L,VET:M,JSINSTANCE:_,JSTRACK:D},i={AUXCLICK:"auxclick",CHANGE:"change",CLICK:"click",CLICKMOD:"clickmod",CLICKONLY:"clickonly",DBLCLICK:"dblclick",FOCUS:"focus",FOCUSIN:"focusin",BLUR:"blur",FOCUSOUT:"focusout",SUBMIT:"submit",KEYDOWN:"keydown",KEYPRESS:"keypress",KEYUP:"keyup",MOUSEUP:"mouseup",MOUSEDOWN:"mousedown",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",MOUSEMOVE:"mousemove",POINTERUP:"pointerup",POINTERDOWN:"pointerdown",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERMOVE:"pointermove",POINTERCANCEL:"pointercancel",GOTPOINTERCAPTURE:"gotpointercapture",LOSTPOINTERCAPTURE:"lostpointercapture",ERROR:"error",LOAD:"load",UNLOAD:"unload",TOUCHSTART:"touchstart",TOUCHEND:"touchend",TOUCHMOVE:"touchmove",INPUT:"input",SCROLL:"scroll",TOGGLE:"toggle",CUSTOM:"_custom"},ct=[i.MOUSEENTER,i.MOUSELEAVE,"pointerenter","pointerleave"],Et=e=>ut.indexOf(e)>=0,ut=[i.CLICK,i.DBLCLICK,i.FOCUS,i.FOCUSIN,i.BLUR,i.ERROR,i.FOCUSOUT,i.KEYDOWN,i.KEYUP,i.KEYPRESS,i.LOAD,i.MOUSEOVER,i.MOUSEOUT,i.SUBMIT,i.TOGGLE,i.TOUCHSTART,i.TOUCHEND,i.TOUCHMOVE,"touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"],K=e=>lt.indexOf(e)>=0,lt=[i.FOCUS,i.BLUR,i.ERROR,i.LOAD,i.TOGGLE],T="__jsaction",w={};function V(e,t){e[T]=t}function u(e){return e.eventType}function f(e,t){e.eventType=t}function l(e){return e.event}function B(e,t){e.event=t}function F(e){return e.targetElement}function Y(e,t){e.targetElement=t}function H(e){return e.eic}function d(e){return e.eia}function v(e,t,n){e.eia=[t,n]}function S(e){e.eia=void 0}function A(e){return e[1]}function G(e,t){e.eirp=t}function x(e){return e.eiack}function X(e){return e.eir}function W(e,t){e.eir=t}function j(e){return{eventType:e.eventType,event:e.event,targetElement:e.targetElement,eic:e.eic,eia:e.eia,timeStamp:e.timeStamp,eirp:e.eirp,eiack:e.eiack,eir:e.eir}}function J(e,t,n,r,s,o,a,E){return{eventType:e,event:t,targetElement:n,eic:r,timeStamp:s,eia:o,eirp:a,eiack:E}}class C{constructor(t){this.eventInfo=t}getEventType(){return u(this.eventInfo)}setEventType(t){f(this.eventInfo,t)}getEvent(){return l(this.eventInfo)}setEvent(t){B(this.eventInfo,t)}getTargetElement(){return F(this.eventInfo)}setTargetElement(t){Y(this.eventInfo,t)}getContainer(){return H(this.eventInfo)}setContainer(t){!function dt(e,t){e.eic=t}(this.eventInfo,t)}getTimestamp(){return function Ot(e){return e.timeStamp}(this.eventInfo)}setTimestamp(t){!function At(e,t){e.timeStamp=t}(this.eventInfo,t)}getAction(){const t=d(this.eventInfo);if(t)return{name:t[0],element:t[1]}}setAction(t){t?v(this.eventInfo,t.name,t.element):S(this.eventInfo)}getIsReplay(){return function Ct(e){return e.eirp}(this.eventInfo)}setIsReplay(t){G(this.eventInfo,t)}getResolved(){return X(this.eventInfo)}setResolved(t){W(this.eventInfo,t)}clone(){return new C(j(this.eventInfo))}}const c={MAC_ENTER:3,ENTER:13,SPACE:32};function gt(e,t){e.removeEventListener?e.removeEventListener(t.eventType,t.handler,t.capture):e.detachEvent&&e.detachEvent(`on${t.eventType}`,t.handler)}function $(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function g(e){let t=e.target;return!t.getAttribute&&t.parentNode&&(t=t.parentNode),t}let y=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);const Pt=typeof navigator<"u"&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent);typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||navigator),typeof navigator<"u"&&!/Opera|WebKit/.test(navigator.userAgent)&&navigator;const Dt={A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},Ft={Enter:c.ENTER," ":c.SPACE},z={A:c.ENTER,BUTTON:0,CHECKBOX:c.SPACE,COMBOBOX:c.ENTER,FILE:0,GRIDCELL:c.ENTER,LINK:c.ENTER,LISTBOX:c.ENTER,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:0,RADIO:c.SPACE,RADIOGROUP:c.SPACE,RESET:0,SUBMIT:0,SWITCH:c.SPACE,TAB:0,TREE:c.ENTER,TREEITEM:c.ENTER};function Q(e){return(e.getAttribute("type")||e.tagName).toUpperCase()in Gt}function Z(e){return(e.getAttribute("type")||e.tagName).toUpperCase()in xt}const Gt={CHECKBOX:!0,FILE:!0,OPTION:!0,RADIO:!0},xt={COLOR:!0,DATE:!0,DATETIME:!0,"DATETIME-LOCAL":!0,EMAIL:!0,MONTH:!0,NUMBER:!0,PASSWORD:!0,RANGE:!0,SEARCH:!0,TEL:!0,TEXT:!0,TEXTAREA:!0,TIME:!0,URL:!0,WEEK:!0},Xt={A:!0,AREA:!0,BUTTON:!0,DIALOG:!0,IMG:!0,INPUT:!0,LINK:!0,MENU:!0,OPTGROUP:!0,OPTION:!0,PROGRESS:!0,SELECT:!0,TEXTAREA:!0},Wt={},jt=/\s*;\s*/,Jt=i.CLICK;class tt{constructor({syntheticMouseEventSupport:t=!1}={}){this.a11yClickSupport=!1,this.updateEventInfoForA11yClick=void 0,this.preventDefaultForA11yClick=void 0,this.populateClickOnlyAction=void 0,this.syntheticMouseEventSupport=t}resolveEventType(t){u(t)===i.CLICK&&function Nt(e){return y&&e.metaKey||!y&&e.ctrlKey||function yt(e){return 2===e.which||null==e.which&&4===e.button}(e)||e.shiftKey}(l(t))?f(t,i.CLICKMOD):this.a11yClickSupport&&this.updateEventInfoForA11yClick(t)}resolveAction(t){X(t)||(this.populateAction(t,F(t)),W(t,!0))}resolveParentAction(t){const n=d(t),r=n&&A(n);S(t);const s=r&&this.getParentNode(r);s&&this.populateAction(t,s)}populateAction(t,n){let r=n;for(;r&&r!==H(t)&&(r.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(r,t),!d(t));)r=this.getParentNode(r);const s=d(t);if(s&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(t),this.syntheticMouseEventSupport&&(u(t)===i.MOUSEENTER||u(t)===i.MOUSELEAVE||u(t)===i.POINTERENTER||u(t)===i.POINTERLEAVE)))if(function Kt(e,t,n){const r=e.relatedTarget;return(e.type===i.MOUSEOVER&&t===i.MOUSEENTER||e.type===i.MOUSEOUT&&t===i.MOUSELEAVE||e.type===i.POINTEROVER&&t===i.POINTERENTER||e.type===i.POINTEROUT&&t===i.POINTERLEAVE)&&(!r||r!==n&&!function q(e,t){if(null===t)return!1;if("contains"in e&&1===t.nodeType)return e.contains(t);if("compareDocumentPosition"in e)return e===t||!!(16&e.compareDocumentPosition(t));for(;t&&e!==t;)t=t.parentNode;return t===e}(n,r))}(l(t),u(t),A(s))){const o=function bt(e,t){const n={};for(const r in e){if("srcElement"===r||"target"===r)continue;const o=e[r];"function"!=typeof o&&(n[r]=o)}return n.type=e.type===i.MOUSEOVER?i.MOUSEENTER:e.type===i.MOUSEOUT?i.MOUSELEAVE:e.type===i.POINTEROVER?i.POINTERENTER:i.POINTERLEAVE,n.target=n.srcElement=t,n.bubbles=!1,n}(l(t),A(s));B(t,o),Y(t,A(s))}else S(t)}getParentNode(t){const n=t.__owner;if(n)return n;const r=t.parentNode;return"#document-fragment"===r?.nodeName?r?.host??null:r}populateActionOnElement(t,n){const r=this.parseActions(t),s=r[u(n)];void 0!==s&&v(n,s,t),this.a11yClickSupport&&this.populateClickOnlyAction(t,n,r)}parseActions(t){let n=function ht(e){return e[T]}(t);if(!n){const r=t.getAttribute(k.JSACTION);if(r){if(n=function Tt(e){return w[e]}(r),!n){n={};const s=r.split(jt);for(let o=0;o<s.length;o++){const a=s[o];if(!a)continue;const E=a.indexOf(":"),h=-1!==E,O=h?a.substr(0,E).trim():Jt,R=h?a.substr(E+1).trim():a;n[O]=R}!function ft(e,t){w[e]=t}(r,n)}V(t,n)}else n=Wt,V(t,n)}return n}addA11yClickSupport(t,n,r){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=t,this.preventDefaultForA11yClick=n,this.populateClickOnlyAction=r}}var N=function(e){return e[e.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",e}(N||{});class qt{constructor(t,{actionResolver:n,eventReplayer:r}={}){this.dispatchDelegate=t,this.eventReplayScheduled=!1,this.replayEventInfoWrappers=[],this.actionResolver=n,this.eventReplayer=r}dispatch(t){const n=new C(t);this.actionResolver?.resolveEventType(t),this.actionResolver?.resolveAction(t);const r=n.getAction();r&&function $t(e,t){return"A"===e.tagName&&(t.getEventType()===i.CLICK||t.getEventType()===i.CLICKMOD)}(r.element,n)&&$(n.getEvent()),this.eventReplayer&&n.getIsReplay()?this.scheduleEventInfoWrapperReplay(n):this.dispatchDelegate(n)}scheduleEventInfoWrapperReplay(t){this.replayEventInfoWrappers.push(t),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}}const et=Symbol.for("propagationStopped"),nt={REPLAY:101};class Zt{constructor(t){this.dispatchDelegate=t,this.actionResolver=new tt,this.dispatcher=new qt(n=>{this.dispatchToDelegate(n)},{actionResolver:this.actionResolver})}dispatch(t){this.dispatcher.dispatch(t)}dispatchToDelegate(t){for(t.getIsReplay()&&function ne(e){const t=e.getEvent();p(t,"target",e.getTargetElement()),p(t,"eventPhase",nt.REPLAY),p(t,"preventDefault",()=>{throw new Error("`preventDefault` called during event replay.")}),p(t,"composedPath",()=>{throw new Error("`composedPath` called during event replay.")})}(t),function te(e){const t=e.getEvent(),n=()=>{t[et]=!0};p(t,"stopPropagation",n),p(t,"stopImmediatePropagation",n)}(t);t.getAction();){if(re(t),this.dispatchDelegate(t.getEvent(),t.getAction().name),t.getEvent()[et])return;this.actionResolver.resolveParentAction(t.eventInfo)}}}function re(e){const t=e.getEvent(),n=e.getAction()?.element;n&&p(t,"currentTarget",n,{configurable:!0})}function p(e,t,n,{configurable:r=!1}={}){Object.defineProperty(e,t,{value:n,configurable:r})}function ie(e,t){e.ecrd(n=>{t.dispatch(n)},N.I_AM_THE_JSACTION_FRAMEWORK)}const se=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent);class oe{constructor(t){this.element=t,this.handlerInfos=[]}addEventListener(t,n){se&&(this.element.style.cursor="pointer"),this.handlerInfos.push(function St(e,t,n){let r=!1;return K(t)&&(r=!0),e.addEventListener(t,n,r),{eventType:t,handler:n,capture:r}}(this.element,t,n(this.element)))}cleanUp(){for(let t=0;t<this.handlerInfos.length;t++)gt(this.element,this.handlerInfos[t]);this.handlerInfos=[]}}function rt(e){(function Lt(e){let t=e.which||e.keyCode;if(!t&&e.key&&(t=Ft[e.key]),Pt&&t===c.MAC_ENTER&&(t=c.ENTER),t!==c.ENTER&&t!==c.SPACE)return!1;const n=g(e);if(e.type!==i.KEYDOWN||!function It(e){return!(!("getAttribute"in e)||Z(e)||function Ht(e){return"BUTTON"===e.tagName.toUpperCase()||!!e.type&&"FILE"===e.type.toUpperCase()}(e)||e.isContentEditable)}(n)||function mt(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey}(e)||Q(n)&&t===c.SPACE||!function Mt(e){return(e.tagName in Dt||function _t(e){const t=e.getAttributeNode("tabindex");return null!=t&&t.specified}(e))&&!e.disabled}(n))return!1;const r=(n.getAttribute("role")||n.type||n.tagName).toUpperCase(),s=z[r]%t==0,o=!(r in z)&&t===c.ENTER,a="INPUT"!==n.tagName.toUpperCase()||!!n.type;return(s||o)&&a})(l(e))&&(function Rt(e,t){e.eiack=t}(e,!0),f(e,i.CLICK))}function it(e){!x(e)||!function kt(e){const t=e.which||e.keyCode,n=g(e),r=(n.type||n.tagName).toUpperCase();return t===c.SPACE&&"CHECKBOX"!==r}(l(e))&&!function Ut(e){const t=g(e),n=t.tagName.toUpperCase(),r=(t.getAttribute("role")||"").toUpperCase();return"BUTTON"===n||"BUTTON"===r||!(!function Yt(e){return e.tagName.toUpperCase()in Xt}(t)||"A"===n||"SELECT"===n||Q(t)||Z(t))}(l(e))||$(l(e))}function st(e,t,n){d(t)||u(t)!==i.CLICK||x(t)||void 0===n[i.CLICKONLY]||(f(t,i.CLICKONLY),v(t,n[i.CLICKONLY],e))}let Ee=(()=>{class e{static#t=this.A11Y_CLICK_SUPPORT=!1;static#e=this.MOUSE_SPECIAL_SUPPORT=!1;constructor(n,r=!0){this.useActionResolver=r,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[],this.addA11yClickListener=!1,this.containerManager=n,this.useActionResolver&&(this.actionResolver=new tt({syntheticMouseEventSupport:e.MOUSE_SPECIAL_SUPPORT})),e.A11Y_CLICK_SUPPORT&&this.addA11yClickSupport()}handleEvent(n,r,s){const o=J(n,r,r.target,s,Date.now());this.handleEventInfo(o)}handleEventInfo(n){if(!this.dispatcher)return G(n,!0),void this.queuedEventInfos?.push(n);this.useActionResolver&&(this.actionResolver.resolveEventType(n),this.actionResolver.resolveAction(n)),this.dispatcher(n)}addEvent(n,r){if(n in this.eventHandlers||!this.containerManager||!e.MOUSE_SPECIAL_SUPPORT&&ct.indexOf(n)>=0)return;const s=(a,E,h)=>{this.handleEvent(a,E,h)};this.eventHandlers[n]=s;const o=function vt(e){return e===i.MOUSEENTER?i.MOUSEOVER:e===i.MOUSELEAVE?i.MOUSEOUT:e===i.POINTERENTER?i.POINTEROVER:e===i.POINTERLEAVE?i.POINTEROUT:e}(r||n);if(o!==n){const a=this.browserEventTypeToExtraEventTypes[o]||[];a.push(n),this.browserEventTypeToExtraEventTypes[o]=a}this.containerManager.addEventListener(o,a=>E=>{s(n,E,a)}),this.addA11yClickListener&&n===i.CLICK&&this.addEvent(i.KEYDOWN)}replayEarlyEvents(n=window){const r=n._ejsa;if(!r)return;const s=r.q;for(let a=0;a<s.length;a++){const E=s[a],h=this.getEventTypesForBrowserEventType(E.eventType);for(let O=0;O<h.length;O++){const R=j(E);f(R,h[O]),this.handleEventInfo(R)}}const o=r.h;ot(r.c,r.et,o),ot(r.c,r.etc,o,!0),delete n._ejsa}getEventTypesForBrowserEventType(n){const r=[];return this.eventHandlers[n]&&r.push(n),this.browserEventTypeToExtraEventTypes[n]&&r.push(...this.browserEventTypeToExtraEventTypes[n]),r}handler(n){return this.eventHandlers[n]}cleanUp(){this.containerManager.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(n,r){this.ecrd(n,r)}ecrd(n,r){if(this.dispatcher=n,this.queuedEventInfos?.length){for(let s=0;s<this.queuedEventInfos.length;s++)this.handleEventInfo(this.queuedEventInfos[s]);this.queuedEventInfos=null}}addA11yClickSupport(){this.addA11yClickSupportImpl(rt,it,st)}exportAddA11yClickSupport(){this.addA11yClickListener=!0,this.ecaacs=this.addA11yClickSupportImpl.bind(this)}addA11yClickSupportImpl(n,r,s){this.addA11yClickListener=!0,this.useActionResolver&&this.actionResolver.addA11yClickSupport(n,r,s)}}return e})();function ot(e,t,n,r){for(let s=0;s<t.length;s++)e.removeEventListener(t[s],n,r)}class ue{constructor(t=window,n=window.document.documentElement){this.replaySink=t,this.container=n,t._ejsa={c:n,q:[],et:[],etc:[],h:r=>{const s=J(r.type,r,r.target,n,Date.now());t._ejsa.q.push(s)}}}addEvents(t,n){const r=this.replaySink._ejsa;for(let s=0;s<t.length;s++){const o=t[s];(n?r.etc:r.et).push(o),this.container.addEventListener(o,r.h,n)}}}function le(e,t,n,r,s,o=window){o[e]||(o[e]={}),o[e][n]={};const a=new ue(o[e][n],t);r&&a.addEvents(r),s&&a.addEvents(s,!0)}}}]);
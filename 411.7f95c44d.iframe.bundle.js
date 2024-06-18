(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[411,257],{"./node_modules/@babel/runtime/helpers/readOnlyError.js":module=>{module.exports=function _readOnlyError(r){throw new TypeError('"'+r+'" is read-only')},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@wcpos/components/src/collapsible/collapsible.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collapsible=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_useOnLayout3=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-on-layout.ts")),_header=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/header.tsx"),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_38721571846_init_data={code:"function anonymous(){const{open,withTiming}=this.__closure;return open?withTiming(1):withTiming(0);}"},_worklet_1721724864886_init_data={code:"function anonymous(){const{layout,progress}=this.__closure;return{height:layout.height*progress.value+1,opacity:progress.value===0?0:1,overflow:progress.value===1?'visible':'hidden'};}"},Collapsible=exports.Collapsible=function Collapsible(_ref){var anonymous,children=_ref.children,title=_ref.title,_ref$initExpand=_ref.initExpand,initExpand=void 0!==_ref$initExpand&&_ref$initExpand,onChangeState=_ref.onChangeState,_useOnLayout=(0,_useOnLayout3.default)(),_useOnLayout2=(0,_slicedToArray2.default)(_useOnLayout,2),layout=_useOnLayout2[0],onLayout=_useOnLayout2[1],_React$useState=React.useState(initExpand),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],progress=(0,_reactNativeReanimated.useDerivedValue)(((anonymous=function anonymous(){return open?(0,_reactNativeReanimated.withTiming)(1):(0,_reactNativeReanimated.withTiming)(0)}).__closure={open,withTiming:_reactNativeReanimated.withTiming},anonymous.__workletHash=38721571846,anonymous.__initData=_worklet_38721571846_init_data,anonymous)),style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var anonymous=function anonymous(){return{height:layout.height*progress.value+1,opacity:0===progress.value?0:1,overflow:1===progress.value?"visible":"hidden"}};return anonymous.__closure={layout,progress},anonymous.__workletHash=1721724864886,anonymous.__initData=_worklet_1721724864886_init_data,anonymous}()),toggleAccordion=React.useCallback((function(){setOpen(!open),onChangeState&&onChangeState(!open)}),[onChangeState,open]);return(0,_jsxRuntime.jsxs)(_box.default,{children:[(0,_jsxRuntime.jsx)(_pressable.default,{onPress:toggleAccordion,children:(0,_jsxRuntime.jsx)(_header.CollapsibleHeader,{title,open})}),(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[style],children:(0,_jsxRuntime.jsx)(_View.default,{onLayout,children})})]})};try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"Make long sections of information available in a block that can expand or collapse.\n\nShould not wrap views with shadows, as shadow will be clipped.",displayName:"Collapsible",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/header.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsibleHeader=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_box=(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts"))),_icon=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","size"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var CollapsibleHeader=exports.CollapsibleHeader=function CollapsibleHeader(_ref){var open=_ref.open,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),icon=open?"caretUp":"caretDown",title="string"==typeof props.title?(0,_jsxRuntime.jsx)(_text.default,{size,children:props.title}):props.title;return(0,_jsxRuntime.jsx)(_box.default,{fill:!0,marginBottom:"normal",borderBottom:"border",children:(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",paddingBottom:"small",align:"center",children:[(0,_jsxRuntime.jsx)(_box.default,{children:title}),(0,_jsxRuntime.jsx)(_icon.default,{name:icon})]})})};try{CollapsibleHeader.displayName="CollapsibleHeader",CollapsibleHeader.__docgenInfo={description:"",displayName:"CollapsibleHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"]={docgenInfo:CollapsibleHeader.__docgenInfo,name:"CollapsibleHeader",path:"node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _collapsible.Collapsible}});var _collapsible=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/collapsible.tsx")},"./node_modules/@wcpos/hooks/src/use-on-layout.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnLayout=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var useOnLayout=exports.useOnLayout=function useOnLayout(){var defaultHeight=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,defaultWidth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_React$useState=React.useState({height:defaultHeight,width:defaultWidth,x:0,y:0,measured:!1}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),layout=_React$useState2[0],setLayout=_React$useState2[1],onLayout=React.useCallback((function(_ref){var _nativeEvent$layout=_ref.nativeEvent.layout,height=_nativeEvent$layout.height,width=_nativeEvent$layout.width,x=_nativeEvent$layout.x,y=_nativeEvent$layout.y;height===layout.height&&width===layout.width||setLayout({height,width,x,y,measured:!0})}),[layout.height,layout.width]);return[layout,onLayout]};exports.default=useOnLayout},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{customAlphabet:()=>customAlphabet,customRandom:()=>customRandom,nanoid:()=>nanoid,random:()=>random,urlAlphabet:()=>urlAlphabet});let urlAlphabet="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",random=bytes=>crypto.getRandomValues(new Uint8Array(bytes)),customRandom=(alphabet,defaultSize,getRandom)=>{let mask=(2<<Math.log(alphabet.length-1)/Math.LN2)-1,step=-~(1.6*mask*defaultSize/alphabet.length);return(size=defaultSize)=>{let id="";for(;;){let bytes=getRandom(step),j=step;for(;j--;)if(id+=alphabet[bytes[j]&mask]||"",id.length===size)return id}}},customAlphabet=(alphabet,size=21)=>customRandom(alphabet,size,random),nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")}}]);
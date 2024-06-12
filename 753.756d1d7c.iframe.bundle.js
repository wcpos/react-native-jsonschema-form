(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[753,257,564,878,388],{"./node_modules/@wcpos/components/src/collapsible/collapsible.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collapsible=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/@wcpos/components/node_modules/react-native-reanimated/lib/module/index.web.js")),_useOnLayout3=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-on-layout.ts")),_header=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/header.tsx"),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_38721571846_init_data={code:"function anonymous(){const{open,withTiming}=this.__closure;return open?withTiming(1):withTiming(0);}"},_worklet_1721724864886_init_data={code:"function anonymous(){const{layout,progress}=this.__closure;return{height:layout.height*progress.value+1,opacity:progress.value===0?0:1,overflow:progress.value===1?'visible':'hidden'};}"},Collapsible=exports.Collapsible=function Collapsible(_ref){var anonymous,children=_ref.children,title=_ref.title,_ref$initExpand=_ref.initExpand,initExpand=void 0!==_ref$initExpand&&_ref$initExpand,onChangeState=_ref.onChangeState,_useOnLayout=(0,_useOnLayout3.default)(),_useOnLayout2=(0,_slicedToArray2.default)(_useOnLayout,2),layout=_useOnLayout2[0],onLayout=_useOnLayout2[1],_React$useState=React.useState(initExpand),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],progress=(0,_reactNativeReanimated.useDerivedValue)(((anonymous=function anonymous(){return open?(0,_reactNativeReanimated.withTiming)(1):(0,_reactNativeReanimated.withTiming)(0)}).__closure={open,withTiming:_reactNativeReanimated.withTiming},anonymous.__workletHash=38721571846,anonymous.__initData=_worklet_38721571846_init_data,anonymous)),style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var anonymous=function anonymous(){return{height:layout.height*progress.value+1,opacity:0===progress.value?0:1,overflow:1===progress.value?"visible":"hidden"}};return anonymous.__closure={layout,progress},anonymous.__workletHash=1721724864886,anonymous.__initData=_worklet_1721724864886_init_data,anonymous}()),toggleAccordion=React.useCallback((function(){setOpen(!open),onChangeState&&onChangeState(!open)}),[onChangeState,open]);return(0,_jsxRuntime.jsxs)(_box.default,{children:[(0,_jsxRuntime.jsx)(_pressable.default,{onPress:toggleAccordion,children:(0,_jsxRuntime.jsx)(_header.CollapsibleHeader,{title,open})}),(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[style],children:(0,_jsxRuntime.jsx)(_View.default,{onLayout,children})})]})};try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"Make long sections of information available in a block that can expand or collapse.\n\nShould not wrap views with shadows, as shadow will be clipped.",displayName:"Collapsible",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/header.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsibleHeader=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_box=(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts"))),_icon=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","size"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var CollapsibleHeader=exports.CollapsibleHeader=function CollapsibleHeader(_ref){var open=_ref.open,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),icon=open?"caretUp":"caretDown",title="string"==typeof props.title?(0,_jsxRuntime.jsx)(_text.default,{size,children:props.title}):props.title;return(0,_jsxRuntime.jsx)(_box.default,{fill:!0,marginBottom:"normal",borderBottom:"border",children:(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",paddingBottom:"small",align:"center",children:[(0,_jsxRuntime.jsx)(_box.default,{children:title}),(0,_jsxRuntime.jsx)(_icon.default,{name:icon})]})})};try{CollapsibleHeader.displayName="CollapsibleHeader",CollapsibleHeader.__docgenInfo={description:"",displayName:"CollapsibleHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"]={docgenInfo:CollapsibleHeader.__docgenInfo,name:"CollapsibleHeader",path:"node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _collapsible.Collapsible}});var _collapsible=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/collapsible.tsx")},"./node_modules/@wcpos/hooks/src/use-on-layout.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnLayout=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var useOnLayout=exports.useOnLayout=function useOnLayout(){var defaultHeight=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,defaultWidth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_React$useState=React.useState({height:defaultHeight,width:defaultWidth,x:0,y:0,measured:!1}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),layout=_React$useState2[0],setLayout=_React$useState2[1],onLayout=React.useCallback((function(_ref){var _nativeEvent$layout=_ref.nativeEvent.layout,height=_nativeEvent$layout.height,width=_nativeEvent$layout.width,x=_nativeEvent$layout.x,y=_nativeEvent$layout.y;height===layout.height&&width===layout.width||setLayout({height,width,x,y,measured:!0})}),[layout.height,layout.width]);return[layout,onLayout]};exports.default=useOnLayout},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{customAlphabet:()=>customAlphabet,customRandom:()=>customRandom,nanoid:()=>nanoid,random:()=>random,urlAlphabet:()=>urlAlphabet});let urlAlphabet="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",random=bytes=>crypto.getRandomValues(new Uint8Array(bytes)),customRandom=(alphabet,defaultSize,getRandom)=>{let mask=(2<<Math.log(alphabet.length-1)/Math.LN2)-1,step=-~(1.6*mask*defaultSize/alphabet.length);return(size=defaultSize)=>{let id="";for(;;){let bytes=getRandom(step),j=step;for(;j--;)if(id+=alphabet[bytes[j]&mask]||"",id.length===size)return id}}},customAlphabet=(alphabet,size=21)=>customRandom(alphabet,size,random),nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")},"./src/fields/boolean.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.BooleanField=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_context=__webpack_require__("./src/context.tsx"),_widgets=__webpack_require__("./src/widgets.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["widget"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var BooleanField=exports.BooleanField=function BooleanField(_ref){var enumOptions,schema=_ref.schema,formData=_ref.formData,name=_ref.name,idSchema=_ref.idSchema,uiSchema=_ref.uiSchema,_useFormContext=(0,_context.useFormContext)(),widgets=_useFormContext.widgets,onChange=_useFormContext.onChange,context=_useFormContext.context,_getUiOptions=(0,_utils.getUiOptions)(uiSchema),_getUiOptions$widget=_getUiOptions.widget,widget=void 0===_getUiOptions$widget?"checkbox":_getUiOptions$widget,options=(0,_objectWithoutProperties2.default)(_getUiOptions,_excluded),Widget=(0,_widgets.getWidget)(schema,widget,widgets);enumOptions=Array.isArray(schema.oneOf)?(0,_utils.optionsList)({oneOf:schema.oneOf.map((function(option){return Object.assign({},option,{title:option.title||(!0===option.const?"Yes":"No")})}))}):(0,_utils.optionsList)({enum:schema.enum||[!0,!1],enumNames:schema.enumNames||(schema.enum&&!1===schema.enum[0]?["No","Yes"]:["Yes","No"])});var handleOnChange=React.useCallback((function(value){onChange&&onChange((0,_defineProperty2.default)({},idSchema.$id,value))}),[idSchema.$id,onChange]),label=React.useMemo((function(){var _label=schema.title||name;return context&&context.label&&"function"==typeof context.label?context.label(idSchema.$id,_label):uiSchema["ui:label"]||_label}),[context,idSchema.$id,name,schema.title,uiSchema]);return(0,_jsxRuntime.jsx)(Widget,{label,value:formData,onChange:handleOnChange,options:Object.assign({},options,{enumOptions})})};try{BooleanField.displayName="BooleanField",BooleanField.__docgenInfo={description:"",displayName:"BooleanField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/boolean.tsx#BooleanField"]={docgenInfo:BooleanField.__docgenInfo,name:"BooleanField",path:"src/fields/boolean.tsx#BooleanField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/description.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.DescriptionField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var DescriptionField=exports.DescriptionField=function DescriptionField(_ref){var description=_ref.description;return(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{children:description})})};try{DescriptionField.displayName="DescriptionField",DescriptionField.__docgenInfo={description:"",displayName:"DescriptionField",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/description.tsx#DescriptionField"]={docgenInfo:DescriptionField.__docgenInfo,name:"DescriptionField",path:"src/fields/description.tsx#DescriptionField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _array=__webpack_require__("./src/fields/array.tsx"),_boolean=__webpack_require__("./src/fields/boolean.tsx"),_description=__webpack_require__("./src/fields/description.tsx"),_multiSchema=__webpack_require__("./src/fields/multi-schema.tsx"),_null=__webpack_require__("./src/fields/null.tsx"),_number=__webpack_require__("./src/fields/number.tsx"),_object=__webpack_require__("./src/fields/object.tsx"),_string=__webpack_require__("./src/fields/string.tsx"),_title=__webpack_require__("./src/fields/title.tsx"),_unsupported=__webpack_require__("./src/fields/unsupported.tsx");exports.default={AnyOfField:_multiSchema.MultiSchemaField,ArrayField:_array.ArrayField,BooleanField:_boolean.BooleanField,DescriptionField:_description.DescriptionField,NumberField:_number.NumberField,ObjectField:_object.ObjectField,OneOfField:_multiSchema.MultiSchemaField,StringField:_string.StringField,TitleField:_title.TitleField,NullField:_null.NullField,UnsupportedField:_unsupported.UnsupportedField}},"./src/fields/multi-schema.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultiSchemaField=void 0;exports.MultiSchemaField=function MultiSchemaField(){return"Multi Schema"}},"./src/fields/null.tsx":(__unused_webpack_module,exports)=>{function NullField(props){return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NullField=NullField;try{NullField.displayName="NullField",NullField.__docgenInfo={description:"",displayName:"NullField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/null.tsx#NullField"]={docgenInfo:NullField.__docgenInfo,name:"NullField",path:"src/fields/null.tsx#NullField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/number.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.NumberField=NumberField;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_context=__webpack_require__("./src/context.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["formData"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var trailingCharMatcherWithPrefix=/\.([0-9]*0)*$/,trailingCharMatcher=/[0.]0*$/;function NumberField(_ref){var formData=_ref.formData,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_useFormContext=(0,_context.useFormContext)(),fields=_useFormContext.fields,onChange=_useFormContext.onChange,StringField=fields.StringField,_React$useState=React.useState(props.value),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),lastValue=_React$useState2[0],setLastValue=_React$useState2[1],value=React.useMemo((function(){if("string"==typeof lastValue&&"number"==typeof value){var re=new RegExp("".concat("".concat(value).replace(".","\\."),"\\.?0*$"));if(lastValue.match(re))return lastValue}return formData}),[formData,lastValue]),handleChange=React.useCallback((function(value){setLastValue({lastValue:value}),"."==="".concat(value).charAt(0)&&(value="0".concat(value));var processed="string"==typeof value&&value.match(trailingCharMatcherWithPrefix)?(0,_utils.asNumber)(value.replace(trailingCharMatcher,"")):(0,_utils.asNumber)(value);onChange(processed)}),[onChange]);return(0,_jsxRuntime.jsx)(StringField,Object.assign({},props,{formData:value,onChange:handleChange}))}try{NumberField.displayName="NumberField",NumberField.__docgenInfo={description:"",displayName:"NumberField",props:{formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/number.tsx#NumberField"]={docgenInfo:NumberField.__docgenInfo,name:"NumberField",path:"src/fields/number.tsx#NumberField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectField=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_node=__webpack_require__("./src/templates/node.tsx"),_object=__webpack_require__("./src/templates/object.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ObjectField=exports.ObjectField=function ObjectField(_ref){var schema=_ref.schema,formData=_ref.formData,uiSchema=_ref.uiSchema,idSchema=_ref.idSchema,properties=React.useMemo((function(){var props=(0,_get.default)(schema,"properties",{});return(0,_utils.orderProperties)(Object.keys(props),uiSchema["ui:order"]).map((function(name){return{content:(0,_jsxRuntime.jsx)(_node.NodeTemplate,{name,schema:(0,_get.default)(props,name,{}),formData:(0,_get.default)(formData,name,void 0),uiSchema:(0,_get.default)(uiSchema,name,{}),idSchema:(0,_get.default)(idSchema,name,{})},name)}}))}),[formData,idSchema,schema,uiSchema]);return(0,_jsxRuntime.jsx)(_object.ObjectTemplate,{schema,uiSchema,properties})};try{ObjectField.displayName="ObjectField",ObjectField.__docgenInfo={description:"",displayName:"ObjectField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},idSchema:{defaultValue:null,description:"",name:"idSchema",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/object.tsx#ObjectField"]={docgenInfo:ObjectField.__docgenInfo,name:"ObjectField",path:"src/fields/object.tsx#ObjectField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/string.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.StringField=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_debounce=_interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js")),_context=__webpack_require__("./src/context.tsx"),_widgets=__webpack_require__("./src/widgets.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["widget","placeholder"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var StringField=exports.StringField=function StringField(_ref){var schema=_ref.schema,formData=_ref.formData,name=_ref.name,idSchema=_ref.idSchema,uiSchema=_ref.uiSchema,_React$useState=React.useState(formData),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_useFormContext=(0,_context.useFormContext)(),widgets=_useFormContext.widgets,onChange=_useFormContext.onChange,context=_useFormContext.context,enumOptions=_useFormContext.schemaUtils.isSelect(schema)&&(0,_utils.optionsList)(schema),defaultWidget=enumOptions?enumOptions.length<=2?"radio":enumOptions.length>=15?"combobox":"select":"text";schema.format&&(0,_widgets.hasWidget)(schema,schema.format,widgets)&&(defaultWidget=schema.format);var _getUiOptions=(0,_utils.getUiOptions)(uiSchema),_getUiOptions$widget=_getUiOptions.widget,widget=void 0===_getUiOptions$widget?defaultWidget:_getUiOptions$widget,_getUiOptions$placeho=_getUiOptions.placeholder,placeholder=void 0===_getUiOptions$placeho?"":_getUiOptions$placeho,options=(0,_objectWithoutProperties2.default)(_getUiOptions,_excluded),Widget=(0,_widgets.getWidget)(schema,widget,widgets),debouncedOnChange=React.useCallback((0,_debounce.default)((function(val){onChange((0,_defineProperty2.default)({},idSchema.$id,val))}),500),[idSchema.$id,onChange]),handleOnChange=React.useCallback((function(val){"select"===widget||"combobox"===widget||"radio"===widget||"string"!=typeof widget?(setValue(val),onChange((0,_defineProperty2.default)({},idSchema.$id,val))):(setValue(val),debouncedOnChange(val))}),[debouncedOnChange,idSchema.$id,onChange,widget]);React.useEffect((function(){setValue(formData)}),[formData]);var label=React.useMemo((function(){var _label=schema.title||name;return context&&context.label&&"function"==typeof context.label?context.label(idSchema.$id,_label):uiSchema["ui:label"]||_label}),[context,idSchema.$id,name,schema.title,uiSchema]);return(0,_jsxRuntime.jsx)(Widget,Object.assign({label,value,onChangeText:"text"===defaultWidget?handleOnChange:void 0,onChange:"text"!==defaultWidget||"string"!=typeof widget?handleOnChange:void 0,options:enumOptions,placeholder,withinPortal:!0},options))};try{StringField.displayName="StringField",StringField.__docgenInfo={description:"",displayName:"StringField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/string.tsx#StringField"]={docgenInfo:StringField.__docgenInfo,name:"StringField",path:"src/fields/string.tsx#StringField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/title.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var TitleField=exports.TitleField=function TitleField(_ref){var title=_ref.title;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,children:(0,_jsxRuntime.jsx)(_text.default,{size:"medium",weight:"medium",children:title})})};try{TitleField.displayName="TitleField",TitleField.__docgenInfo={description:"",displayName:"TitleField",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/title.tsx#TitleField"]={docgenInfo:TitleField.__docgenInfo,name:"TitleField",path:"src/fields/title.tsx#TitleField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/unsupported.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnsupportedField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var UnsupportedField=exports.UnsupportedField=function UnsupportedField(_ref){var schema=_ref.schema,reason=_ref.reason;return console.log(schema),(0,_jsxRuntime.jsx)(_text.default,{children:"".concat(reason," ").concat(null==schema?void 0:schema.type)})};try{UnsupportedField.displayName="UnsupportedField",UnsupportedField.__docgenInfo={description:"",displayName:"UnsupportedField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},reason:{defaultValue:null,description:"",name:"reason",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/unsupported.tsx#UnsupportedField"]={docgenInfo:UnsupportedField.__docgenInfo,name:"UnsupportedField",path:"src/fields/unsupported.tsx#UnsupportedField"})}catch(__react_docgen_typescript_loader_error){}},"./src/templates/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectTemplate=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_collapsible=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/collapsible/index.ts")),_context=__webpack_require__("./src/context.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ObjectTemplate=exports.ObjectTemplate=function ObjectTemplate(_ref){var uiSchema=_ref.uiSchema,required=_ref.required,properties=_ref.properties,schema=_ref.schema,fields=(0,_context.useFormContext)().fields,TitleField=fields.TitleField,DescriptionField=fields.DescriptionField,title=(0,_get.default)(uiSchema,"ui:title",schema.title),description=(0,_get.default)(uiSchema,"ui:description",schema.description),collapsible=(0,_get.default)(uiSchema,"ui:collapsible",!1);return collapsible?(0,_jsxRuntime.jsx)(_box.default,{space:"normal",paddingTop:"small",children:(0,_jsxRuntime.jsx)(_collapsible.default,{title:(0,_jsxRuntime.jsx)(TitleField,{title}),initExpand:"opened"===collapsible,children:(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref2){return _ref2.content}))]})})}):(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[title&&(0,_jsxRuntime.jsx)(TitleField,{title,required}),description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref3){return _ref3.content}))]})};try{ObjectTemplate.displayName="ObjectTemplate",ObjectTemplate.__docgenInfo={description:"",displayName:"ObjectTemplate",props:{uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},properties:{defaultValue:null,description:"",name:"properties",required:!0,type:{name:"any[]"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/templates/object.tsx#ObjectTemplate"]={docgenInfo:ObjectTemplate.__docgenInfo,name:"ObjectTemplate",path:"src/templates/object.tsx#ObjectTemplate"})}catch(__react_docgen_typescript_loader_error){}}}]);
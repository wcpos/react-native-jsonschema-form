(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[770,290],{"./node_modules/@wcpos/components/src/collapsible/collapsible.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collapsible=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_useOnLayout3=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/hooks/src/use-on-layout.ts")),_header=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/header.tsx"),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_pressable=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/pressable/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_38721571846_init_data={code:"function anonymous(){const{open,withTiming}=this.__closure;return open?withTiming(1):withTiming(0);}"},_worklet_1721724864886_init_data={code:"function anonymous(){const{layout,progress}=this.__closure;return{height:layout.height*progress.value+1,opacity:progress.value===0?0:1,overflow:progress.value===1?'visible':'hidden'};}"},Collapsible=exports.Collapsible=function Collapsible(_ref){var anonymous,children=_ref.children,title=_ref.title,_ref$initExpand=_ref.initExpand,initExpand=void 0!==_ref$initExpand&&_ref$initExpand,onChangeState=_ref.onChangeState,_useOnLayout=(0,_useOnLayout3.default)(),_useOnLayout2=(0,_slicedToArray2.default)(_useOnLayout,2),layout=_useOnLayout2[0],onLayout=_useOnLayout2[1],_React$useState=React.useState(initExpand),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],progress=(0,_reactNativeReanimated.useDerivedValue)(((anonymous=function anonymous(){return open?(0,_reactNativeReanimated.withTiming)(1):(0,_reactNativeReanimated.withTiming)(0)}).__closure={open,withTiming:_reactNativeReanimated.withTiming},anonymous.__workletHash=38721571846,anonymous.__initData=_worklet_38721571846_init_data,anonymous)),style=(0,_reactNativeReanimated.useAnimatedStyle)(function(){var anonymous=function anonymous(){return{height:layout.height*progress.value+1,opacity:0===progress.value?0:1,overflow:1===progress.value?"visible":"hidden"}};return anonymous.__closure={layout,progress},anonymous.__workletHash=1721724864886,anonymous.__initData=_worklet_1721724864886_init_data,anonymous}()),toggleAccordion=React.useCallback((function(){setOpen(!open),onChangeState&&onChangeState(!open)}),[onChangeState,open]);return(0,_jsxRuntime.jsxs)(_box.default,{children:[(0,_jsxRuntime.jsx)(_pressable.default,{onPress:toggleAccordion,children:(0,_jsxRuntime.jsx)(_header.CollapsibleHeader,{title,open})}),(0,_jsxRuntime.jsx)(_reactNativeReanimated.default.View,{style:[style],children:(0,_jsxRuntime.jsx)(_View.default,{onLayout,children})})]})};try{Collapsible.displayName="Collapsible",Collapsible.__docgenInfo={description:"Make long sections of information available in a block that can expand or collapse.\n\nShould not wrap views with shadows, as shadow will be clipped.",displayName:"Collapsible",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"]={docgenInfo:Collapsible.__docgenInfo,name:"Collapsible",path:"node_modules/@wcpos/components/src/collapsible/collapsible.tsx#Collapsible"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/header.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollapsibleHeader=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_box=(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts"))),_icon=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","size"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var CollapsibleHeader=exports.CollapsibleHeader=function CollapsibleHeader(_ref){var open=_ref.open,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),icon=open?"caretUp":"caretDown",title="string"==typeof props.title?(0,_jsxRuntime.jsx)(_text.default,{size,children:props.title}):props.title;return(0,_jsxRuntime.jsx)(_box.default,{fill:!0,marginBottom:"normal",borderBottom:"border",children:(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",paddingBottom:"small",align:"center",children:[(0,_jsxRuntime.jsx)(_box.default,{children:title}),(0,_jsxRuntime.jsx)(_icon.default,{name:icon})]})})};try{CollapsibleHeader.displayName="CollapsibleHeader",CollapsibleHeader.__docgenInfo={description:"",displayName:"CollapsibleHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"]={docgenInfo:CollapsibleHeader.__docgenInfo,name:"CollapsibleHeader",path:"node_modules/@wcpos/components/src/collapsible/header.tsx#CollapsibleHeader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@wcpos/components/src/collapsible/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function get(){return _collapsible.Collapsible}});var _collapsible=__webpack_require__("./node_modules/@wcpos/components/src/collapsible/collapsible.tsx")},"./node_modules/@wcpos/hooks/src/use-on-layout.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useOnLayout=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var useOnLayout=exports.useOnLayout=function useOnLayout(){var defaultHeight=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,defaultWidth=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,_React$useState=React.useState({height:defaultHeight,width:defaultWidth,x:0,y:0,measured:!1}),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),layout=_React$useState2[0],setLayout=_React$useState2[1],onLayout=React.useCallback((function(_ref){var _nativeEvent$layout=_ref.nativeEvent.layout,height=_nativeEvent$layout.height,width=_nativeEvent$layout.width,x=_nativeEvent$layout.x,y=_nativeEvent$layout.y;height===layout.height&&width===layout.width||setLayout({height,width,x,y,measured:!0})}),[layout.height,layout.width]);return[layout,onLayout]};exports.default=useOnLayout},"./src/context.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useFormContext=exports.FormContext=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var FormContext=exports.FormContext=React.createContext({fields:{},widgets:{},rootSchema:{},onChange:function onChange(){},context:null,schemaUtils:null,idPrefix:"",idSeparator:""});exports.useFormContext=function useFormContext(){var context=React.useContext(FormContext);if(!context)throw new Error("useFormContext must be called within FormContextProvider");return context}},"./src/templates/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectTemplate=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_collapsible=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/collapsible/index.ts")),_context=__webpack_require__("./src/context.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ObjectTemplate=exports.ObjectTemplate=function ObjectTemplate(_ref){var uiSchema=_ref.uiSchema,required=_ref.required,properties=_ref.properties,schema=_ref.schema,fields=(0,_context.useFormContext)().fields,TitleField=fields.TitleField,DescriptionField=fields.DescriptionField,title=(0,_get.default)(uiSchema,"ui:title",schema.title),description=(0,_get.default)(uiSchema,"ui:description",schema.description),collapsible=(0,_get.default)(uiSchema,"ui:collapsible",!1);return collapsible?(0,_jsxRuntime.jsx)(_box.default,{space:"normal",paddingTop:"small",children:(0,_jsxRuntime.jsx)(_collapsible.default,{title:(0,_jsxRuntime.jsx)(TitleField,{title}),initExpand:"opened"===collapsible,children:(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref2){return _ref2.content}))]})})}):(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[title&&(0,_jsxRuntime.jsx)(TitleField,{title,required}),description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref3){return _ref3.content}))]})};try{ObjectTemplate.displayName="ObjectTemplate",ObjectTemplate.__docgenInfo={description:"",displayName:"ObjectTemplate",props:{uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},properties:{defaultValue:null,description:"",name:"properties",required:!0,type:{name:"any[]"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/templates/object.tsx#ObjectTemplate"]={docgenInfo:ObjectTemplate.__docgenInfo,name:"ObjectTemplate",path:"src/templates/object.tsx#ObjectTemplate"})}catch(__react_docgen_typescript_loader_error){}}}]);
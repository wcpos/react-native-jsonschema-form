(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[963],{"./src/error-list.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorList=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ErrorList=exports.ErrorList=function ErrorList(_ref){var errors=_ref.errors,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",padding:"small",style:{backgroundColor:theme.colors.critical},children:[(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",size:"xLarge",type:"inverse"})}),(0,_jsxRuntime.jsxs)(_box.default,{fill:!0,style:{flexShrink:1},children:[(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",weight:"bold",children:"Something went wrong:"}),errors.map((function(error,i){return(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",children:error.stack},i)}))]})]})};try{ErrorList.displayName="ErrorList",ErrorList.__docgenInfo={description:"",displayName:"ErrorList",props:{errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"AjvError[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-list.tsx#ErrorList"]={docgenInfo:ErrorList.__docgenInfo,name:"ErrorList",path:"src/error-list.tsx#ErrorList"})}catch(__react_docgen_typescript_loader_error){}}}]);
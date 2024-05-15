(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[545,963,564,878,388],{"./src/error-list.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ErrorList=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _native=__webpack_require__("./node_modules/styled-components/native/dist/styled-components.native.esm.js"),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_icon=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/icon/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ErrorList=exports.ErrorList=function ErrorList(_ref){var errors=_ref.errors,theme=(0,_native.useTheme)();return(0,_jsxRuntime.jsxs)(_box.default,{horizontal:!0,space:"small",padding:"small",style:{backgroundColor:theme.colors.critical},children:[(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_icon.default,{name:"triangleExclamation",size:"xLarge",type:"inverse"})}),(0,_jsxRuntime.jsxs)(_box.default,{fill:!0,style:{flexShrink:1},children:[(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",weight:"bold",children:"Something went wrong:"}),errors.map((function(error,i){return(0,_jsxRuntime.jsx)(_text.default,{type:"inverse",children:error.stack},i)}))]})]})};try{ErrorList.displayName="ErrorList",ErrorList.__docgenInfo={description:"",displayName:"ErrorList",props:{errors:{defaultValue:null,description:"",name:"errors",required:!0,type:{name:"AjvError[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error-list.tsx#ErrorList"]={docgenInfo:ErrorList.__docgenInfo,name:"ErrorList",path:"src/error-list.tsx#ErrorList"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/boolean.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.BooleanField=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_context=__webpack_require__("./src/context.tsx"),_widgets=__webpack_require__("./src/widgets.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["widget"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var BooleanField=exports.BooleanField=function BooleanField(_ref){var enumOptions,schema=_ref.schema,formData=_ref.formData,name=_ref.name,idSchema=_ref.idSchema,uiSchema=_ref.uiSchema,_useFormContext=(0,_context.useFormContext)(),widgets=_useFormContext.widgets,onChange=_useFormContext.onChange,context=_useFormContext.context,_getUiOptions=(0,_utils.getUiOptions)(uiSchema),_getUiOptions$widget=_getUiOptions.widget,widget=void 0===_getUiOptions$widget?"checkbox":_getUiOptions$widget,options=(0,_objectWithoutProperties2.default)(_getUiOptions,_excluded),Widget=(0,_widgets.getWidget)(schema,widget,widgets);enumOptions=Array.isArray(schema.oneOf)?(0,_utils.optionsList)({oneOf:schema.oneOf.map((function(option){return Object.assign({},option,{title:option.title||(!0===option.const?"Yes":"No")})}))}):(0,_utils.optionsList)({enum:schema.enum||[!0,!1],enumNames:schema.enumNames||(schema.enum&&!1===schema.enum[0]?["No","Yes"]:["Yes","No"])});var handleOnChange=React.useCallback((function(value){onChange&&onChange((0,_defineProperty2.default)({},idSchema.$id,value))}),[idSchema.$id,onChange]),label=React.useMemo((function(){var _label=schema.title||name;return context&&context.label&&"function"==typeof context.label?context.label(idSchema.$id,_label):_label}),[context,idSchema.$id,name,schema.title]);return(0,_jsxRuntime.jsx)(Widget,{label,value:formData,onChange:handleOnChange,options:Object.assign({},options,{enumOptions})})};try{BooleanField.displayName="BooleanField",BooleanField.__docgenInfo={description:"",displayName:"BooleanField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/boolean.tsx#BooleanField"]={docgenInfo:BooleanField.__docgenInfo,name:"BooleanField",path:"src/fields/boolean.tsx#BooleanField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/description.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.DescriptionField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var DescriptionField=exports.DescriptionField=function DescriptionField(_ref){var description=_ref.description;return(0,_jsxRuntime.jsx)(_box.default,{children:(0,_jsxRuntime.jsx)(_text.default,{children:description})})};try{DescriptionField.displayName="DescriptionField",DescriptionField.__docgenInfo={description:"",displayName:"DescriptionField",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/description.tsx#DescriptionField"]={docgenInfo:DescriptionField.__docgenInfo,name:"DescriptionField",path:"src/fields/description.tsx#DescriptionField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _array=__webpack_require__("./src/fields/array.tsx"),_boolean=__webpack_require__("./src/fields/boolean.tsx"),_description=__webpack_require__("./src/fields/description.tsx"),_multiSchema=__webpack_require__("./src/fields/multi-schema.tsx"),_null=__webpack_require__("./src/fields/null.tsx"),_number=__webpack_require__("./src/fields/number.tsx"),_object=__webpack_require__("./src/fields/object.tsx"),_string=__webpack_require__("./src/fields/string.tsx"),_title=__webpack_require__("./src/fields/title.tsx"),_unsupported=__webpack_require__("./src/fields/unsupported.tsx");exports.default={AnyOfField:_multiSchema.MultiSchemaField,ArrayField:_array.ArrayField,BooleanField:_boolean.BooleanField,DescriptionField:_description.DescriptionField,NumberField:_number.NumberField,ObjectField:_object.ObjectField,OneOfField:_multiSchema.MultiSchemaField,StringField:_string.StringField,TitleField:_title.TitleField,NullField:_null.NullField,UnsupportedField:_unsupported.UnsupportedField}},"./src/fields/multi-schema.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultiSchemaField=void 0;exports.MultiSchemaField=function MultiSchemaField(){return"Multi Schema"}},"./src/fields/null.tsx":(__unused_webpack_module,exports)=>{function NullField(props){return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NullField=NullField;try{NullField.displayName="NullField",NullField.__docgenInfo={description:"",displayName:"NullField",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/null.tsx#NullField"]={docgenInfo:NullField.__docgenInfo,name:"NullField",path:"src/fields/null.tsx#NullField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/number.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.NumberField=NumberField;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_context=__webpack_require__("./src/context.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["formData"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var trailingCharMatcherWithPrefix=/\.([0-9]*0)*$/,trailingCharMatcher=/[0.]0*$/;function NumberField(_ref){var formData=_ref.formData,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_useFormContext=(0,_context.useFormContext)(),fields=_useFormContext.fields,onChange=_useFormContext.onChange,StringField=fields.StringField,_React$useState=React.useState(props.value),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),lastValue=_React$useState2[0],setLastValue=_React$useState2[1],value=React.useMemo((function(){if("string"==typeof lastValue&&"number"==typeof value){var re=new RegExp("".concat("".concat(value).replace(".","\\."),"\\.?0*$"));if(lastValue.match(re))return lastValue}return formData}),[formData,lastValue]),handleChange=React.useCallback((function(value){setLastValue({lastValue:value}),"."==="".concat(value).charAt(0)&&(value="0".concat(value));var processed="string"==typeof value&&value.match(trailingCharMatcherWithPrefix)?(0,_utils.asNumber)(value.replace(trailingCharMatcher,"")):(0,_utils.asNumber)(value);onChange(processed)}),[onChange]);return(0,_jsxRuntime.jsx)(StringField,Object.assign({},props,{formData:value,onChange:handleChange}))}try{NumberField.displayName="NumberField",NumberField.__docgenInfo={description:"",displayName:"NumberField",props:{formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/number.tsx#NumberField"]={docgenInfo:NumberField.__docgenInfo,name:"NumberField",path:"src/fields/number.tsx#NumberField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectField=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_node=__webpack_require__("./src/templates/node.tsx"),_object=__webpack_require__("./src/templates/object.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ObjectField=exports.ObjectField=function ObjectField(_ref){var schema=_ref.schema,formData=_ref.formData,uiSchema=_ref.uiSchema,idSchema=_ref.idSchema,properties=React.useMemo((function(){var props=(0,_get.default)(schema,"properties",{});return(0,_utils.orderProperties)(Object.keys(props),uiSchema["ui:order"]).map((function(name){return{content:(0,_jsxRuntime.jsx)(_node.NodeTemplate,{name,schema:(0,_get.default)(props,name,{}),formData:(0,_get.default)(formData,name,void 0),uiSchema:(0,_get.default)(uiSchema,name,{}),idSchema:(0,_get.default)(idSchema,name,{})},name)}}))}),[formData,idSchema,schema,uiSchema]);return(0,_jsxRuntime.jsx)(_object.ObjectTemplate,{schema,uiSchema,properties})};try{ObjectField.displayName="ObjectField",ObjectField.__docgenInfo={description:"",displayName:"ObjectField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},idSchema:{defaultValue:null,description:"",name:"idSchema",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/object.tsx#ObjectField"]={docgenInfo:ObjectField.__docgenInfo,name:"ObjectField",path:"src/fields/object.tsx#ObjectField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/string.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.StringField=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_debounce=_interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js")),_context=__webpack_require__("./src/context.tsx"),_widgets=__webpack_require__("./src/widgets.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["widget","placeholder"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var StringField=exports.StringField=function StringField(_ref){var schema=_ref.schema,formData=_ref.formData,name=_ref.name,idSchema=_ref.idSchema,uiSchema=_ref.uiSchema,_React$useState=React.useState(formData),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_useFormContext=(0,_context.useFormContext)(),widgets=_useFormContext.widgets,onChange=_useFormContext.onChange,context=_useFormContext.context,enumOptions=_useFormContext.schemaUtils.isSelect(schema)&&(0,_utils.optionsList)(schema),defaultWidget=enumOptions?enumOptions.length<=2?"radio":enumOptions.length>=15?"combobox":"select":"text";schema.format&&(0,_widgets.hasWidget)(schema,schema.format,widgets)&&(defaultWidget=schema.format);var _getUiOptions=(0,_utils.getUiOptions)(uiSchema),_getUiOptions$widget=_getUiOptions.widget,widget=void 0===_getUiOptions$widget?defaultWidget:_getUiOptions$widget,_getUiOptions$placeho=_getUiOptions.placeholder,placeholder=void 0===_getUiOptions$placeho?"":_getUiOptions$placeho,options=(0,_objectWithoutProperties2.default)(_getUiOptions,_excluded),Widget=(0,_widgets.getWidget)(schema,widget,widgets),debouncedOnChange=React.useCallback((0,_debounce.default)((function(val){onChange((0,_defineProperty2.default)({},idSchema.$id,val))}),500),[idSchema.$id,onChange]),handleOnChange=React.useCallback((function(val){"select"===widget||"combobox"===widget||"radio"===widget||"string"!=typeof widget?(setValue(val),onChange((0,_defineProperty2.default)({},idSchema.$id,val))):(setValue(val),debouncedOnChange(val))}),[debouncedOnChange,idSchema.$id,onChange,widget]);React.useEffect((function(){setValue(formData)}),[formData]);var label=React.useMemo((function(){var _label=schema.title||name;return context&&context.label&&"function"==typeof context.label?context.label(idSchema.$id,_label):_label}),[context,idSchema.$id,name,schema.title]);return(0,_jsxRuntime.jsx)(Widget,Object.assign({label,value,onChangeText:"text"===defaultWidget?handleOnChange:void 0,onChange:"text"!==defaultWidget||"string"!=typeof widget?handleOnChange:void 0,options:enumOptions,placeholder,withinPortal:!0},options))};try{StringField.displayName="StringField",StringField.__docgenInfo={description:"",displayName:"StringField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/string.tsx#StringField"]={docgenInfo:StringField.__docgenInfo,name:"StringField",path:"src/fields/string.tsx#StringField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/title.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var TitleField=exports.TitleField=function TitleField(_ref){var title=_ref.title;return(0,_jsxRuntime.jsx)(_box.default,{horizontal:!0,children:(0,_jsxRuntime.jsx)(_text.default,{size:"medium",weight:"medium",children:title})})};try{TitleField.displayName="TitleField",TitleField.__docgenInfo={description:"",displayName:"TitleField",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/title.tsx#TitleField"]={docgenInfo:TitleField.__docgenInfo,name:"TitleField",path:"src/fields/title.tsx#TitleField"})}catch(__react_docgen_typescript_loader_error){}},"./src/fields/unsupported.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.UnsupportedField=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _text=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/text/index.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var UnsupportedField=exports.UnsupportedField=function UnsupportedField(_ref){var schema=_ref.schema,reason=_ref.reason;return console.log(schema),(0,_jsxRuntime.jsx)(_text.default,{children:"".concat(reason," ").concat(null==schema?void 0:schema.type)})};try{UnsupportedField.displayName="UnsupportedField",UnsupportedField.__docgenInfo={description:"",displayName:"UnsupportedField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"JSONSchema7"}},reason:{defaultValue:null,description:"",name:"reason",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/unsupported.tsx#UnsupportedField"]={docgenInfo:UnsupportedField.__docgenInfo,name:"UnsupportedField",path:"src/fields/unsupported.tsx#UnsupportedField"})}catch(__react_docgen_typescript_loader_error){}},"./src/form.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Form=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_cloneDeep=_interopRequireDefault(__webpack_require__("./node_modules/lodash/cloneDeep.js")),_forEach=_interopRequireDefault(__webpack_require__("./node_modules/lodash/forEach.js")),_set=_interopRequireDefault(__webpack_require__("./node_modules/lodash/set.js")),_context=__webpack_require__("./src/context.tsx"),_errorList=__webpack_require__("./src/error-list.tsx"),_fields=_interopRequireDefault(__webpack_require__("./src/fields/index.ts")),_node=__webpack_require__("./src/templates/node.tsx"),_validator=_interopRequireDefault(__webpack_require__("./src/validator.ts")),_widgets=_interopRequireDefault(__webpack_require__("./src/widgets.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["schema","uiSchema","formData","extraErrors","onChange","idPrefix","idSeparator"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var Form=exports.Form=function Form(_ref){var schema=_ref.schema,_ref$uiSchema=_ref.uiSchema,uiSchema=void 0===_ref$uiSchema?{}:_ref$uiSchema,rawFormData=_ref.formData,_ref$extraErrors=_ref.extraErrors,extraErrors=void 0===_ref$extraErrors?{}:_ref$extraErrors,onChange=_ref.onChange,_ref$idPrefix=_ref.idPrefix,idPrefix=void 0===_ref$idPrefix?"root":_ref$idPrefix,_ref$idSeparator=_ref.idSeparator,idSeparator=void 0===_ref$idSeparator?".":_ref$idSeparator,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),rootSchema=schema,schemaUtils=(0,_utils.createSchemaUtils)((0,_validator.default)({foo:"bar"}),rootSchema),formData=schemaUtils.getDefaultFormState(schema,rawFormData),retrievedSchema=schemaUtils.retrieveSchema(rootSchema,formData),idSchema=schemaUtils.toIdSchema(retrievedSchema,uiSchema["ui:rootFieldId"],formData,idPrefix,idSeparator),errors=React.useMemo((function(){return schemaUtils.getValidator().toErrorList(extraErrors)}),[extraErrors,schemaUtils]),handleOnChange=React.useCallback((function(changes){var newData=(0,_cloneDeep.default)(formData),emittedChanges=null;(0,_forEach.default)(changes,(function(value,id){var path=id.split("."),root=path.shift();0===path.length&&root===idPrefix?(newData=value,emittedChanges=value):((0,_set.default)(newData,path,value),null===emittedChanges&&(emittedChanges={}),(0,_set.default)(emittedChanges,path,value))})),onChange&&onChange({changes:emittedChanges,formData:newData})}),[formData,onChange,idPrefix]);return(0,_jsxRuntime.jsxs)(_context.FormContext.Provider,{value:{fields:_fields.default,widgets:_widgets.default,schemaUtils,rootSchema,onChange:handleOnChange,context:props.formContext,idPrefix,idSeparator},children:[errors.length>0&&(0,_jsxRuntime.jsx)(_errorList.ErrorList,{errors}),(0,_jsxRuntime.jsx)(_node.NodeTemplate,{schema,formData,name:idPrefix,idSchema,uiSchema})]})};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{schema:{defaultValue:null,description:"The JSON schema object for the form",name:"schema",required:!0,type:{name:"RJSFSchema"}},validator:{defaultValue:null,description:"An implementation of the `ValidatorType` interface that is needed for form validation to work",name:"validator",required:!0,type:{name:"ValidatorType<T, RJSFSchema, any>"}},formData:{defaultValue:null,description:"The data for the form, used to prefill a form with existing data",name:"formData",required:!1,type:{name:"string | object"}},uiSchema:{defaultValue:{value:"{}"},description:"The uiSchema for the form",name:"uiSchema",required:!1,type:{name:"UiSchema"}},extraErrors:{defaultValue:{value:"{}"},description:"This prop allows passing in custom errors that are augmented with the existing JSON Schema errors on the form; it\ncan be used to implement asynchronous validation",name:"extraErrors",required:!1,type:{name:"ErrorSchema<T>"}},formContext:{defaultValue:null,description:"You can provide a `formContext` object to the form, which is passed down to all fields and widgets. Useful for\nimplementing context aware fields and widgets.\n\nNOTE: Setting `{readonlyAsDisabled: false}` on the formContext will make the antd theme treat readOnly fields as\ndisabled.",name:"formContext",required:!1,type:{name:"any"}},idPrefix:{defaultValue:{value:"root"},description:"To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids;\nDefault is `root`",name:"idPrefix",required:!1,type:{name:"string"}},idSeparator:{defaultValue:{value:"."},description:"To avoid using a path separator that is present in field names, it is possible to change the separator used for\nids (Default is `_`)",name:"idSeparator",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"If you plan on being notified every time the form data are updated, you can pass an `onChange` handler, which will\nreceive the same args as `onSubmit` any time a value is updated in the form. Can also return the `id` of the field\nthat caused the change",name:"onChange",required:!0,type:{name:"({ changes, formData }: { changes: IChangeEvent<T, RJSFSchema, any>; formData: T; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/templates/object.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObjectTemplate=void 0;(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n})(__webpack_require__("./node_modules/react/index.js"));var _get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_box=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/box/index.ts")),_collapsible=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/collapsible/index.ts")),_context=__webpack_require__("./src/context.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ObjectTemplate=exports.ObjectTemplate=function ObjectTemplate(_ref){var uiSchema=_ref.uiSchema,required=_ref.required,properties=_ref.properties,schema=_ref.schema,fields=(0,_context.useFormContext)().fields,TitleField=fields.TitleField,DescriptionField=fields.DescriptionField,title=(0,_get.default)(uiSchema,"ui:title",schema.title),description=(0,_get.default)(uiSchema,"ui:description",schema.description),collapsible=(0,_get.default)(uiSchema,"ui:collapsible",!1);return collapsible?(0,_jsxRuntime.jsx)(_box.default,{space:"normal",paddingTop:"small",children:(0,_jsxRuntime.jsx)(_collapsible.default,{title:(0,_jsxRuntime.jsx)(TitleField,{title}),initExpand:"opened"===collapsible,children:(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref2){return _ref2.content}))]})})}):(0,_jsxRuntime.jsxs)(_box.default,{space:"normal",paddingBottom:"normal",children:[title&&(0,_jsxRuntime.jsx)(TitleField,{title,required}),description&&(0,_jsxRuntime.jsx)(DescriptionField,{description}),properties.map((function(_ref3){return _ref3.content}))]})};try{ObjectTemplate.displayName="ObjectTemplate",ObjectTemplate.__docgenInfo={description:"",displayName:"ObjectTemplate",props:{uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},properties:{defaultValue:null,description:"",name:"properties",required:!0,type:{name:"any[]"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/templates/object.tsx#ObjectTemplate"]={docgenInfo:ObjectTemplate.__docgenInfo,name:"ObjectTemplate",path:"src/templates/object.tsx#ObjectTemplate"})}catch(__react_docgen_typescript_loader_error){}},"./src/validator.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function validator(){return new Validator};var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),_readOnlyError2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/readOnlyError.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),Validator=(0,_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")).default)((function Validator(){(0,_classCallCheck2.default)(this,Validator)}),[{key:"validateFormData",value:function validateFormData(formData,schema,customValidate,transformErrors,uiSchema){if(!this.isValid(schema,formData,schema)){var errors=this.rawValidation(schema,formData).errors;return customValidate&&customValidate(formData,(function(errors){errors.forEach((function(error){return errors.push(error)}))}),uiSchema),transformErrors&&(transformErrors(errors,uiSchema),(0,_readOnlyError2.default)("errors")),{errors}}return{errors:[]}}},{key:"toErrorList",value:function toErrorList(errorSchema){var _this=this,fieldPath=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],errors=[];return errorSchema?(errorSchema.__errors&&(errors=errorSchema.__errors.map((function(error){return{message:error,fieldPath:(0,_toConsumableArray2.default)(fieldPath)}}))),Object.entries(errorSchema).forEach((function(_ref){var _ref2=(0,_slicedToArray2.default)(_ref,2),key=_ref2[0],value=_ref2[1];"__errors"!==key&&(errors=errors.concat(_this.toErrorList(value,[].concat((0,_toConsumableArray2.default)(fieldPath),[key]))))})),errors):errors}},{key:"isValid",value:function isValid(schema,formData,rootSchema){return!0}},{key:"rawValidation",value:function rawValidation(schema,formData){return{errors:[]}}}])}}]);
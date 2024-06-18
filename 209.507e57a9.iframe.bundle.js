(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[209,290,659],{"./src/context.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useFormContext=exports.FormContext=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var FormContext=exports.FormContext=React.createContext({fields:{},widgets:{},rootSchema:{},onChange:function onChange(){},context:null,schemaUtils:null,idPrefix:"",idSeparator:""});exports.useFormContext=function useFormContext(){var context=React.useContext(FormContext);if(!context)throw new Error("useFormContext must be called within FormContextProvider");return context}},"./src/fields/multi-select.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.MultiSelectField=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_utils=(function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/@rjsf/utils/lib/index.js")),_context=__webpack_require__("./src/context.tsx"),_widgets=__webpack_require__("./src/widgets.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["schema","formData","uiSchema","name"],_excluded2=["widget"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var MultiSelectField=exports.MultiSelectField=function MultiSelectField(_ref){var schema=_ref.schema,formData=_ref.formData,uiSchema=_ref.uiSchema,name=_ref.name,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_useFormContext=(0,_context.useFormContext)(),widgets=_useFormContext.widgets,itemsSchema=_useFormContext.schemaUtils.retrieveSchema(schema.items,formData),enumOptions=(0,_utils.optionsList)(itemsSchema),_getUiOptions$enumOpt=Object.assign({},(0,_utils.getUiOptions)(uiSchema),{enumOptions}),_getUiOptions$enumOpt2=_getUiOptions$enumOpt.widget,widget=void 0===_getUiOptions$enumOpt2?"select":_getUiOptions$enumOpt2,options=(0,_objectWithoutProperties2.default)(_getUiOptions$enumOpt,_excluded2),Widget=(0,_widgets.getWidget)(schema,widget,widgets);return(0,_jsxRuntime.jsx)(Widget,Object.assign({multiple:!0,label:schema.title||name,schema,value:formData,options},props))};try{MultiSelectField.displayName="MultiSelectField",MultiSelectField.__docgenInfo={description:"",displayName:"MultiSelectField",props:{schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"any"}},formData:{defaultValue:null,description:"",name:"formData",required:!0,type:{name:"any"}},uiSchema:{defaultValue:null,description:"",name:"uiSchema",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/fields/multi-select.tsx#MultiSelectField"]={docgenInfo:MultiSelectField.__docgenInfo,name:"MultiSelectField",path:"src/fields/multi-select.tsx#MultiSelectField"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.getWidget=getWidget,exports.hasWidget=hasWidget;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/@rjsf/utils/lib/index.js"),_get=_interopRequireDefault(__webpack_require__("./node_modules/lodash/get.js")),_set=_interopRequireDefault(__webpack_require__("./node_modules/lodash/set.js")),_reactIs=_interopRequireDefault(__webpack_require__("./node_modules/react-is/index.js")),_checkbox=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/checkbox/index.ts")),_combobox=__webpack_require__("./node_modules/@wcpos/components/src/combobox/index.ts"),_radio=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/@wcpos/components/src/radio/index.ts")),_select=__webpack_require__("./node_modules/@wcpos/components/src/select/index.ts"),_slider=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/slider/index.ts")),_switch=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/switch/index.ts")),_textarea=_interopRequireDefault(__webpack_require__("./node_modules/@wcpos/components/src/textarea/index.ts")),_textinput=__webpack_require__("./node_modules/@wcpos/components/src/textinput/index.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["options"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default={Checkbox:_checkbox.default,Radio:_radio.default,RadioGroup:_radio.RadioGroupWithLabel,Select:_select.SelectWithLabel,Slider:_slider.default,Switch:_switch.default,TextArea:_textarea.default,TextInput:_textinput.TextInputWithLabel,Combobox:_combobox.ComboboxWithLabel};var widgetMap={boolean:{checkbox:"Checkbox",radio:"Radio",select:"Select",switch:"Switch",hidden:"HiddenWidget"},string:{text:"TextInput",password:"PasswordWidget",email:"EmailWidget",hostname:"TextInput",ipv4:"TextInput",ipv6:"TextInput",uri:"URLWidget","data-url":"FileWidget",radio:"RadioGroup",select:"Select",combobox:"Combobox",textarea:"TextArea",hidden:"HiddenWidget",date:"DateWidget",datetime:"DateTimeWidget","date-time":"DateTimeWidget","alt-date":"AltDateWidget","alt-datetime":"AltDateTimeWidget",color:"ColorWidget",file:"FileWidget"},number:{text:"TextInput",select:"Select",updown:"UpDownWidget",range:"Slider",radio:"RadioGroup",hidden:"HiddenWidget"},integer:{text:"TextInput",select:"Select",updown:"UpDownWidget",range:"Slider",radio:"RadioGroup",hidden:"HiddenWidget"},array:{select:"Select",checkboxes:"CheckboxesWidget",files:"FileWidget",hidden:"HiddenWidget"}};function getWidget(schema,widget){var registeredWidgets=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},type=(0,_utils.getSchemaType)(schema);if("function"==typeof widget||widget&&_reactIs.default.isForwardRef(_react.default.createElement(widget))||_reactIs.default.isMemo(widget))return function mergeWidgetOptions(AWidget){var MergedWidget=(0,_get.default)(AWidget,"MergedWidget");if(!MergedWidget){var defaultOptions=AWidget.defaultProps&&AWidget.defaultProps.options||{};MergedWidget=function MergedWidget(_ref){var options=_ref.options,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);return(0,_jsxRuntime.jsx)(AWidget,Object.assign({options:Object.assign({},defaultOptions,options)},props))},(0,_set.default)(AWidget,"MergedWidget",MergedWidget)}return MergedWidget}(widget);if("string"!=typeof widget)throw new Error("Unsupported widget definition: ".concat(typeof widget));if(widget in registeredWidgets)return getWidget(schema,registeredWidgets[widget],registeredWidgets);if("string"==typeof type){if(!(type in widgetMap))throw new Error("No widget for type '".concat(type,"'"));if(widget in widgetMap[type])return getWidget(schema,registeredWidgets[widgetMap[type][widget]],registeredWidgets)}throw new Error("No widget '".concat(widget,"' for type '").concat(type,"'"))}function hasWidget(schema,widget){var registeredWidgets=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};try{return getWidget(schema,widget,registeredWidgets),!0}catch(e){var err=e;if(err.message&&(err.message.startsWith("No widget")||err.message.startsWith("Unsupported widget")))return!1;throw e}}try{getWidget.displayName="getWidget",getWidget.__docgenInfo={description:"Given a schema representing a field to render and either the name or actual `Widget` implementation, returns the\nReact component that is used to render the widget. If the `widget` is already a React component, then it is wrapped\nwith a `MergedWidget`. Otherwise an attempt is made to look up the widget inside of the `registeredWidgets` map based\non the schema type and `widget` name. If no widget component can be found an `Error` is thrown.",displayName:"getWidget",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets.tsx#getWidget"]={docgenInfo:getWidget.__docgenInfo,name:"getWidget",path:"src/widgets.tsx#getWidget"})}catch(__react_docgen_typescript_loader_error){}try{hasWidget.displayName="hasWidget",hasWidget.__docgenInfo={description:"Detects whether the `widget` exists for the `schema` with the associated `registryWidgets` and returns true if it\ndoes, or false if it doesn't.",displayName:"hasWidget",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets.tsx#hasWidget"]={docgenInfo:hasWidget.__docgenInfo,name:"hasWidget",path:"src/widgets.tsx#hasWidget"})}catch(__react_docgen_typescript_loader_error){}}}]);
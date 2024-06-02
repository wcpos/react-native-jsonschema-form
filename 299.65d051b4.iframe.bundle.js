(self.webpackChunk_wcpos_react_native_jsonschema_form=self.webpackChunk_wcpos_react_native_jsonschema_form||[]).push([[299],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(r){if(Array.isArray(r))return r},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/readOnlyError.js":module=>{module.exports=function _readOnlyError(r){throw new TypeError('"'+r+'" is read-only')},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./src/validator.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function validator(){return new Validator};var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),_readOnlyError2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/readOnlyError.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),Validator=(0,_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")).default)((function Validator(){(0,_classCallCheck2.default)(this,Validator)}),[{key:"validateFormData",value:function validateFormData(formData,schema,customValidate,transformErrors,uiSchema){if(!this.isValid(schema,formData,schema)){var errors=this.rawValidation(schema,formData).errors;return customValidate&&customValidate(formData,(function(errors){errors.forEach((function(error){return errors.push(error)}))}),uiSchema),transformErrors&&(transformErrors(errors,uiSchema),(0,_readOnlyError2.default)("errors")),{errors}}return{errors:[]}}},{key:"toErrorList",value:function toErrorList(errorSchema){var _this=this,fieldPath=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],errors=[];return errorSchema?(errorSchema.__errors&&(errors=errorSchema.__errors.map((function(error){return{message:error,fieldPath:(0,_toConsumableArray2.default)(fieldPath)}}))),Object.entries(errorSchema).forEach((function(_ref){var _ref2=(0,_slicedToArray2.default)(_ref,2),key=_ref2[0],value=_ref2[1];"__errors"!==key&&(errors=errors.concat(_this.toErrorList(value,[].concat((0,_toConsumableArray2.default)(fieldPath),[key]))))})),errors):errors}},{key:"isValid",value:function isValid(schema,formData,rootSchema){return!0}},{key:"rawValidation",value:function rawValidation(schema,formData){return{errors:[]}}}])}}]);
"use strict";
exports.id = 4705;
exports.ids = [4705];
exports.modules = {

/***/ 97618:
/***/ (() => {


// UNUSED EXPORTS: guards, isType, pick

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@contentlayer+client@0.2.9/node_modules/@contentlayer/client/dist/guards.js

const fileName_1 = "packages/@contentlayer/client/src/guards.ts";
function is(typeName, _) {
    if (_) {
        if (Array.isArray(typeName)) {
            // TODO make type field name dynamic (probably will require to code-gen the guard function)
            return typeName.some((typeName_)=>_?.type === typeName_);
        } else {
            return typeName === _?.type;
        }
    } else {
        return (_)=>is(typeName, _);
    }
}
const isType = (/* unused pure expression or super */ null && (is));
const guards = {
    is,
    // isType,
    // hasAllFields,
    // allFields,
    hasField
};
function hasField(_, property) {
    return _.hasOwnProperty(property);
} //# sourceMappingURL=guards.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@contentlayer+client@0.2.9/node_modules/@contentlayer/client/dist/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/contentlayer@0.2.9/node_modules/contentlayer/dist/client/index.js
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 17651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useMDXComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94986);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93943);
/* harmony import */ var _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24333);

const fileName_1 = "packages/next-contentlayer/src/hooks/useMDXComponent.ts";
// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503

// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503

// @ts-expect-error React version workaround (This CJS workaround can be removed once Contentlayer is only targeting React 18+)

const getMDXComponent = (code, globals = {})=>{
    const scope = {
        React: react__WEBPACK_IMPORTED_MODULE_0__,
        ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__,
        _jsx_runtime: _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__/* ._jsx_runtime */ .i,
        ...globals
    };
    const fn = new Function(...Object.keys(scope), code);
    return fn(...Object.values(scope)).default;
};
const useMDXComponent = (code, globals = {})=>{
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>getMDXComponent(code, globals), [
        code,
        globals
    ]);
}; //# sourceMappingURL=useMDXComponent.js.map


/***/ }),

/***/ 11709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/client/image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 73805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(11709);


/***/ }),

/***/ 24333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const _jsx_runtime = __webpack_require__(65565);
module.exports.i = _jsx_runtime;


/***/ })

};
;
"use strict";
exports.id = 2118;
exports.ids = [2118];
exports.modules = {

/***/ 2118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ EmptyPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94986);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71331);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65082);




function EmptyPlaceholder({ className , children , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto flex max-w-[420px] flex-col items-center justify-center text-center",
            children: children
        })
    });
}
EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({ name , className , ...props }) {
    const Icon = _components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Icons */ .P[name];
    if (!Icon) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-20 w-20 items-center justify-center rounded-full bg-slate-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-10 w-10", className),
            ...props
        })
    });
};
EmptyPlaceholder.Title = function EmptyPlaceholderTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-6 text-xl font-semibold", className),
        ...props
    });
};
EmptyPlaceholder.Description = function EmptyPlaceholderDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-3 mb-8 text-center text-sm font-normal leading-6 text-slate-700", className),
        ...props
    });
};


/***/ }),

/***/ 65082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92810);

const Icons = {
    logo: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Command */ .mYg,
    close: lucide_react__WEBPACK_IMPORTED_MODULE_0__.X,
    spinner: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Loader2 */ .zM5,
    chevronLeft: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .ChevronLeft */ .s$$,
    chevronRight: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .ChevronRight */ ._Qn,
    trash: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Trash */ .rFk,
    post: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .FileText */ .acj,
    page: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .File */ .$BE,
    media: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .Eep,
    settings: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Settings */ .Zrf,
    billing: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .CreditCard */ .aBT,
    ellipsis: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .MoreVertical */ .hlC,
    add: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Plus */ .v37,
    warning: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .AlertTriangle */ .uyG,
    user: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .User */ .n5m,
    arrowRight: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .ArrowRight */ .olP,
    help: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .HelpCircle */ .j$F,
    pizza: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Pizza */ .k4s,
    gitHub: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Github */ .Eye,
    twitter: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Twitter */ .tLe,
    check: lucide_react__WEBPACK_IMPORTED_MODULE_0__/* .Check */ .JrY
};


/***/ })

};
;
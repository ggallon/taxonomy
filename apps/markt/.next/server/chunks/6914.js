"use strict";
exports.id = 6914;
exports.ids = [6914];
exports.modules = {

/***/ 56480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71331);
/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96597);



function Card({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("overflow-hidden rounded-lg border", className),
        ...props
    });
}
Card.Header = function CardHeader({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("grid gap-1 p-6", className),
        ...props
    });
};
Card.Content = function CardContent({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("px-6 pb-4", className),
        ...props
    });
};
Card.Footer = function CardFooter({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("border-t bg-slate-50 px-6 py-4", className),
        ...props
    });
};
Card.Title = function CardTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-lg font-medium", className),
        ...props
    });
};
Card.Description = function CardDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-sm text-gray-600", className),
        ...props
    });
};
Card.Skeleton = function CardSeleton() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Card.Header, {
                className: "gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                        className: "h-5 w-1/5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                        className: "h-4 w-4/5"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card.Content, {
                className: "h-10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__/* .Skeleton */ .O, {
                    className: "h-8 w-[120px] bg-slate-200"
                })
            })
        ]
    });
};


/***/ }),

/***/ 28133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
;// CONCATENATED MODULE: ./ui/skeleton.tsx


function Skeleton({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("h-5 w-2/5 animate-pulse rounded-lg bg-slate-100", className),
        ...props
    });
}

;// CONCATENATED MODULE: ./ui/card.tsx



function Card({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("overflow-hidden rounded-lg border", className),
        ...props
    });
}
Card.Header = function CardHeader({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("grid gap-1 p-6", className),
        ...props
    });
};
Card.Content = function CardContent({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("px-6 pb-4", className),
        ...props
    });
};
Card.Footer = function CardFooter({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("border-t bg-slate-50 px-6 py-4", className),
        ...props
    });
};
Card.Title = function CardTitle({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
        className: (0,utils.cn)("text-lg font-medium", className),
        ...props
    });
};
Card.Description = function CardDescription({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: (0,utils.cn)("text-sm text-gray-600", className),
        ...props
    });
};
Card.Skeleton = function CardSeleton() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card.Header, {
                className: "gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                        className: "h-5 w-1/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                        className: "h-4 w-4/5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card.Content, {
                className: "h-10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card.Footer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton, {
                    className: "h-8 w-[120px] bg-slate-200"
                })
            })
        ]
    });
};


/***/ })

};
;
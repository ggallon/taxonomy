"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

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


/***/ }),

/***/ 60175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ SiteFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78964);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65082);



function SiteFooter() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "container bg-white text-slate-600",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 md:h-24 md:flex-row md:py-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .Icons.logo */ .P.logo, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-center text-sm leading-loose md:text-left",
                            children: [
                                "Built by",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: _config_site__WEBPACK_IMPORTED_MODULE_1__/* .siteConfig.links.twitter */ .J.links.twitter,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-medium underline underline-offset-4",
                                    children: "shadcn"
                                }),
                                ". Hosted on",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://vercel.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-medium underline underline-offset-4",
                                    children: "Vercel"
                                }),
                                ". Illustrations by",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://popsy.co",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-medium underline underline-offset-4",
                                    children: "Popsy"
                                }),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-center text-sm md:text-left",
                    children: [
                        "The source code is available on",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: _config_site__WEBPACK_IMPORTED_MODULE_1__/* .siteConfig.links.github */ .J.links.github,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "font-medium underline underline-offset-4",
                            children: "GitHub"
                        }),
                        "."
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 78964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ siteConfig)
/* harmony export */ });
const siteConfig = {
    name: "Taxonomy",
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/taxonomy"
    }
};


/***/ })

};
;
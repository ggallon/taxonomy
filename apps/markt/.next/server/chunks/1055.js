exports.id = 1055;
exports.ids = [1055];
exports.modules = {

/***/ 82655:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77356));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26770));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96201))

/***/ }),

/***/ 69024:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 72558, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 60539, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29010, 23))

/***/ }),

/***/ 22450:
/***/ (() => {



/***/ }),

/***/ 60680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);

function Head() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Taxonomy"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "An open source application built using the new router, server components and everything new in Next.js 13."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "Taxonomy"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "https://tx.shadcn.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "https://tx.shadcn.com/og.jpg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: "Taxonomy"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: "https://tx.shadcn.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: "https://tx.shadcn.com/og.jpg"
            })
        ]
    });
}


/***/ }),

/***/ 86701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(65565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@next+font@13.0.6/node_modules/@next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter"}],"variableName":"fontSans"}
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_ = __webpack_require__(13651);
var layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(75404);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(71331);
// EXTERNAL MODULE: ./ui/toast.tsx
var toast = __webpack_require__(52293);
// EXTERNAL MODULE: ./components/help.tsx
var help = __webpack_require__(86452);
// EXTERNAL MODULE: ./components/analytics.tsx
var analytics = __webpack_require__(38699);
;// CONCATENATED MODULE: ./components/tailwind-indicator.tsx

function TailwindIndicator() {
    if (true) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "block sm:hidden",
                children: "xs"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden",
                children: "sm"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden md:block lg:hidden xl:hidden 2xl:hidden",
                children: "md"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden lg:block xl:hidden 2xl:hidden",
                children: "lg"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden xl:block 2xl:hidden",
                children: "xl"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "hidden 2xl:block",
                children: "2xl"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx








function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "en",
        className: (0,utils.cn)("bg-white font-sans text-slate-900 antialiased", (layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_fontSans_default()).variable),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("head", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                className: "min-h-screen",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime.jsx(analytics.Analytics, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(help.Help, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(toast.Toaster, {
                        position: "bottom-right"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(TailwindIndicator, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 38699:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/analytics.tsx");


/***/ }),

/***/ 86452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/help.tsx");


/***/ }),

/***/ 71331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ absoluteUrl),
/* harmony export */   "cn": () => (/* binding */ cn),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84843);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78062);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${"http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 52293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/ui/toast.tsx");


/***/ }),

/***/ 96201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Analytics": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62293);


function Analytics() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__/* .Analytics */ .c, {});
}


/***/ }),

/***/ 26770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Help": () => (/* binding */ Help)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(26253);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-popover@1.0.2_2zx2umvpluuhvlq44va5bta2da/node_modules/@radix-ui/react-popover/dist/index.js
var dist = __webpack_require__(7874);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
;// CONCATENATED MODULE: ./ui/popover.tsx




function Popover({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ...props
    });
}
Popover.Trigger = /*#__PURE__*/ react_.forwardRef(function PopoverTrigger({ ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Trigger, {
        ...props,
        ref: ref
    });
});
Popover.Portal = dist.Portal;
Popover.Content = /*#__PURE__*/ react_.forwardRef(function PopoverContent({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Content, {
        ref: ref,
        align: "end",
        className: (0,utils.cn)("overflow-hidden rounded-md border border-slate-50 bg-white shadow-md animate-in slide-in-from-top-1", className),
        ...props
    });
});

// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(83340);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(21610);
;// CONCATENATED MODULE: ./public/og.jpg
/* harmony default export */ const og = ({"src":"/_next/static/media/og.a25ca70e.jpg","height":1260,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAACAwEAAAAAAAAAAAAAAAABAgADESL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ArlNCpWV1iN3piYiIH//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./components/help.tsx






function Help() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Popover, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Popover.Trigger, {
                className: "fixed right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-brand text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.pizza */.P.pizza, {
                        className: "h-5 w-5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Toggle"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Popover.Content, {
                className: "bg-brand p-4 text-sm text-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid w-[300px] gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: og,
                            alt: "Screenshot",
                            className: "overflow-hidden rounded-sm"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "This app is a work in progress. I'm building this in public."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "You can follow the progress on Twitter",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: site/* siteConfig.links.twitter */.J.links.twitter,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "border-b border-b-white",
                                    children: "@shadcn"
                                }),
                                " ",
                                "or on",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: site/* siteConfig.links.github */.J.links.github,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "border-b border-b-white",
                                    children: "GitHub"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 83340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68431);

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

/***/ 21610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ cn),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony export absoluteUrl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22011);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62591);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}
function absoluteUrl(path) {
    return `${"http://localhost:3000"}${path}`;
}


/***/ }),

/***/ 77356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast),
/* harmony export */   "Toaster": () => (/* binding */ Toaster),
/* harmony export */   "toast": () => (/* binding */ toast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83414);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83340);





const Toaster = react_hot_toast__WEBPACK_IMPORTED_MODULE_2__/* .Toaster */ .x7;
function Toast({ visible , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg", visible && "animate-in slide-in-from-bottom-5", className),
        ...props
    });
}
Toast.Icon = function ToastIcon({ name , className , ...props }) {
    const Icon = _components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons */ .P[name];
    if (!Icon) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-20 w-20 items-center justify-center rounded-full bg-slate-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("h-10 w-10", className),
            ...props
        })
    });
};
Toast.Title = function ToastTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-medium", className),
        ...props
    });
};
Toast.Description = function ToastDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm opacity-80", className),
        ...props
    });
};
function toast(opts) {
    const { title , message , type ="default" , duration =3000  } = opts;
    return react_hot_toast__WEBPACK_IMPORTED_MODULE_2__/* ["default"].custom */ .ZP.custom(({ visible  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Toast, {
            visible: visible,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)({
                "bg-red-600 text-white": type === "error",
                "bg-black text-white": type === "success"
            }),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toast.Title, {
                    children: title
                }),
                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toast.Description, {
                    children: message
                })
            ]
        }), {
        duration
    });
}


/***/ }),

/***/ 75404:
/***/ (() => {



/***/ })

};
;
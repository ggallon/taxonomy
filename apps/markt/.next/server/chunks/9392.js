exports.id = 9392;
exports.ids = [9392];
exports.modules = {

/***/ 55223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68180, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19464))

/***/ }),

/***/ 94327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);

function AuthLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen",
        children: children
    });
}


/***/ }),

/***/ 24330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/dashboard/user-auth-form.tsx");


/***/ }),

/***/ 65082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 19464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserAuthForm": () => (/* binding */ UserAuthForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/navigation.js
var navigation = __webpack_require__(64178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next-auth@4.17.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js
var react = __webpack_require__(35696);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.40.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(26064);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.9.10_react-hook-form@7.40.0/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(52581);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.19.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(95820);
;// CONCATENATED MODULE: ./lib/validations/auth.ts

const userAuthSchema = lib/* object */.Ry({
    email: lib/* string */.Z_().email()
});

// EXTERNAL MODULE: ./ui/toast.tsx
var toast = __webpack_require__(77356);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(83340);
;// CONCATENATED MODULE: ./components/dashboard/user-auth-form.tsx










function UserAuthForm({ className , ...props }) {
    const { register , handleSubmit , formState: { errors  }  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod/* zodResolver */.F)(userAuthSchema)
    });
    const [isLoading, setIsLoading] = react_.useState(false);
    const searchParams = (0,navigation.useSearchParams)();
    async function onSubmit(data) {
        setIsLoading(true);
        const signInResult = await (0,react.signIn)("email", {
            email: data.email.toLowerCase(),
            redirect: false,
            callbackUrl: searchParams.get("from") || "/dashboard"
        });
        setIsLoading(false);
        if (!signInResult?.ok) {
            return (0,toast.toast)({
                title: "Something went wrong.",
                message: "Your sign in request failed. Please try again.",
                type: "error"
            });
        }
        return (0,toast.toast)({
            title: "Check your email",
            message: "We sent you a login link. Be sure to check your spam too.",
            type: "success"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,utils.cn)("grid gap-6", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "sr-only",
                                    htmlFor: "email",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "email",
                                    placeholder: "name@example.com",
                                    className: "my-0 mb-2 block h-9 w-full rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1",
                                    type: "email",
                                    autoCapitalize: "none",
                                    autoComplete: "email",
                                    autoCorrect: "off",
                                    name: "email",
                                    disabled: isLoading,
                                    ...register("email")
                                }),
                                errors?.email && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "px-1 text-xs text-red-600",
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500",
                            disabled: isLoading,
                            children: [
                                isLoading && /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.spinner */.P.spinner, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }),
                                "Sign In with Email"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full border-t border-slate-300"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative flex justify-center text-xs uppercase",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "bg-white px-2 text-slate-600",
                            children: "Or continue with"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "inline-flex w-full items-center justify-center rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500",
                onClick: ()=>(0,react.signIn)("github"),
                disabled: isLoading,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "mr-2 h-4 w-4",
                        "aria-hidden": "true",
                        focusable: "false",
                        "data-prefix": "fab",
                        "data-icon": "github",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 496 512",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "currentColor",
                            d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        })
                    }),
                    "Github"
                ]
            })
        ]
    });
}


/***/ })

};
;
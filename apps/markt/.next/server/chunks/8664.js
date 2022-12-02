exports.id = 8664;
exports.ids = [8664];
exports.modules = {

/***/ 17458:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68180, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11807));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29171))

/***/ }),

/***/ 28782:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45975));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26323));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 83514))

/***/ }),

/***/ 29704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(65565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/navigation.js
var navigation = __webpack_require__(45895);
;// CONCATENATED MODULE: ./config/dashboard.ts
const dashboardConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs"
        },
        {
            title: "Support",
            href: "/support",
            disabled: true
        }
    ],
    sidebarNav: [
        {
            title: "Posts",
            href: "/dashboard",
            icon: "post"
        },
        {
            title: "Pages",
            href: "/",
            icon: "page",
            disabled: true
        },
        {
            title: "Media",
            href: "/",
            icon: "media",
            disabled: true
        },
        {
            title: "Billing",
            href: "/dashboard/billing",
            icon: "billing"
        },
        {
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings"
        }
    ]
};

// EXTERNAL MODULE: ./lib/session.ts
var session = __webpack_require__(9013);
// EXTERNAL MODULE: ./components/dashboard/nav.tsx
var nav = __webpack_require__(13264);
// EXTERNAL MODULE: ./components/dashboard/user-account-nav.tsx
var user_account_nav = __webpack_require__(6790);
// EXTERNAL MODULE: ./components/main-nav.tsx
var main_nav = __webpack_require__(6455);
;// CONCATENATED MODULE: ./app/(dashboard)/dashboard/layout.tsx







async function DashboardLayout({ children  }) {
    const user = await (0,session/* getCurrentUser */.t)();
    if (!user) {
        return (0,navigation.notFound)();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mx-auto flex flex-col space-y-6",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "container sticky top-0 z-40 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex h-16 items-center justify-between border-b border-b-slate-200 py-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(main_nav.MainNav, {
                            items: dashboardConfig.mainNav
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(user_account_nav.UserAccountNav, {
                            user: {
                                name: user.name,
                                image: user.image,
                                email: user.email
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container grid gap-12 md:grid-cols-[200px_1fr]",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("aside", {
                        className: "hidden w-[200px] flex-col md:flex",
                        children: /*#__PURE__*/ jsx_runtime.jsx(nav.DashboardNav, {
                            items: dashboardConfig.sidebarNav
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: "flex w-full flex-1 flex-col overflow-hidden",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var _components_dashboard_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15141);
/* harmony import */ var _components_dashboard_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74576);
/* harmony import */ var _components_dashboard_post_create_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3477);
/* harmony import */ var _components_dashboard_post_create_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_dashboard_post_create_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60345);





function DashboardLoading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_dashboard_shell__WEBPACK_IMPORTED_MODULE_2__/* .DashboardShell */ .r, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_header__WEBPACK_IMPORTED_MODULE_1__/* .DashboardHeader */ .x, {
                heading: "Posts",
                text: "Create and manage posts.",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_create_button__WEBPACK_IMPORTED_MODULE_3__.PostCreateButton, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y divide-neutral-200 rounded-md border border-slate-200",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__/* .PostItem.Skeleton */ .Y.Skeleton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_item__WEBPACK_IMPORTED_MODULE_4__/* .PostItem.Skeleton */ .Y.Skeleton, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 15141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ DashboardHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);

function DashboardHeader({ heading , text , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between px-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl font-bold tracking-wide text-slate-900",
                        children: heading
                    }),
                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-neutral-500",
                        children: text
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 13264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/dashboard/nav.tsx");


/***/ }),

/***/ 3477:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/dashboard/post-create-button.tsx");


/***/ }),

/***/ 60345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ PostItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8175);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71331);
/* harmony import */ var _components_dashboard_post_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82101);
/* harmony import */ var _components_dashboard_post_operations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_dashboard_post_operations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96597);





function PostItem({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/editor/${post.id}`,
                        className: "font-semibold hover:underline",
                        children: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-slate-600",
                            children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p)(post.createdAt?.toDateString())
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_post_operations__WEBPACK_IMPORTED_MODULE_3__.PostOperations, {
                post: {
                    id: post.id,
                    title: post.title
                }
            })
        ]
    });
}
PostItem.Skeleton = function PostItemSkeleton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__/* .Skeleton */ .O, {
                    className: "h-5 w-2/5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__/* .Skeleton */ .O, {
                    className: "h-4 w-4/5"
                })
            ]
        })
    });
};


/***/ }),

/***/ 82101:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/dashboard/post-operations.tsx");


/***/ }),

/***/ 74576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DashboardShell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94986);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71331);



function DashboardShell({ children , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("grid items-start gap-8", className),
        ...props,
        children: children
    });
}


/***/ }),

/***/ 6790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/dashboard/user-account-nav.tsx");


/***/ }),

/***/ 26323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardNav": () => (/* binding */ DashboardNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52433);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64178);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83340);





function DashboardNav({ items  }) {
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    if (!items?.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "grid items-start gap-2",
        children: items.map((item, index)=>{
            const Icon = _components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons */ .P[item.icon];
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.disabled ? "/" : item.href,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100", path === item.href ? "bg-slate-200" : "transparent", item.disabled && "cursor-not-allowed opacity-80"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            className: "mr-2 h-4 w-4"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: item.title
                        })
                    ]
                })
            }, index);
        })
    });
}


/***/ }),

/***/ 29171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCreateButton": () => (/* binding */ PostCreateButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64178);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83340);
/* harmony import */ var _ui_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77356);






function PostCreateButton({ className , ...props }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    async function onClick() {
        setIsLoading(true);
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Untitled Post"
            })
        });
        setIsLoading(false);
        if (!response?.ok) {
            if (response.status === 402) {
                return (0,_ui_toast__WEBPACK_IMPORTED_MODULE_5__.toast)({
                    title: "Limit of 3 posts reached.",
                    message: "Please upgrade to the PRO plan.",
                    type: "error"
                });
            }
            return (0,_ui_toast__WEBPACK_IMPORTED_MODULE_5__.toast)({
                title: "Something went wrong.",
                message: "Your post was not created. Please try again.",
                type: "error"
            });
        }
        const post = await response.json();
        // This forces a cache invalidation.
        router.refresh();
        router.push(`/editor/${post.id}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: onClick,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2", {
            "cursor-not-allowed opacity-60": isLoading
        }, className),
        disabled: isLoading,
        ...props,
        children: [
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons.spinner */ .P.spinner, {
                className: "mr-2 h-4 w-4 animate-spin"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons.add */ .P.add, {
                className: "mr-2 h-4 w-4"
            }),
            "New post"
        ]
    });
}


/***/ }),

/***/ 11807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PostOperations": () => (/* binding */ PostOperations)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(52433);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/navigation.js
var navigation = __webpack_require__(64178);
// EXTERNAL MODULE: ./ui/dropdown.tsx
var dropdown = __webpack_require__(60170);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(83340);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-alert-dialog@1.0.2_2zx2umvpluuhvlq44va5bta2da/node_modules/@radix-ui/react-alert-dialog/dist/index.js
var dist = __webpack_require__(48610);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
;// CONCATENATED MODULE: ./ui/alert.tsx




function Alert({ ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        ...props
    });
}
Alert.Trigger = /*#__PURE__*/ react_.forwardRef(function AlertTrigger({ ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Trigger, {
        ...props,
        ref: ref
    });
});
Alert.Portal = dist.Portal;
Alert.Content = /*#__PURE__*/ react_.forwardRef(function AlertContent({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Alert.Portal, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(dist.Overlay, {
            className: "fixed inset-0 z-40 bg-black/50 opacity-100 transition-opacity animate-in fade-in",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed inset-0 z-40 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(dist.Content, {
                    ref: ref,
                    className: (0,utils.cn)("fixed z-50 grid w-[95vw] max-w-md scale-100 gap-4 rounded-lg bg-white p-6 opacity-100 animate-in fade-in-90 zoom-in-90 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 md:w-full", className),
                    ...props
                })
            })
        })
    });
});
Alert.Header = function AlertHeader({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("grid gap-1", className),
        ...props
    });
};
Alert.Title = /*#__PURE__*/ react_.forwardRef(function AlertTitle({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Title, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold text-slate-900", className),
        ...props
    });
});
Alert.Description = /*#__PURE__*/ react_.forwardRef(function AlertDescription({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Description, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-neutral-500", className),
        ...props
    });
});
Alert.Footer = function AlertFooter({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex justify-end space-x-2", className),
        ...props
    });
};
Alert.Cancel = /*#__PURE__*/ react_.forwardRef(function AlertCancel({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Cancel, {
        ref: ref,
        className: (0,utils.cn)("relative inline-flex h-9 items-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2", className),
        ...props
    });
});
Alert.Action = /*#__PURE__*/ react_.forwardRef(function AlertAction({ className , ...props }, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Action, {
        ref: ref,
        className: (0,utils.cn)("relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2", className),
        ...props
    });
});

// EXTERNAL MODULE: ./ui/toast.tsx
var toast = __webpack_require__(77356);
;// CONCATENATED MODULE: ./components/dashboard/post-operations.tsx








async function deletePost(postId) {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE"
    });
    if (!response?.ok) {
        (0,toast.toast)({
            title: "Something went wrong.",
            message: "Your post was not deleted. Please try again.",
            type: "error"
        });
    }
    return true;
}
function PostOperations({ post  }) {
    const router = (0,navigation.useRouter)();
    const [showDeleteAlert, setShowDeleteAlert] = react_.useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = react_.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown/* DropdownMenu */.h, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown/* DropdownMenu.Trigger */.h.Trigger, {
                        className: "flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-slate-50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.ellipsis */.P.ellipsis, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Open"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Portal */.h.Portal, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown/* DropdownMenu.Content */.h.Content, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/editor/${post.id}`,
                                        className: "flex w-full",
                                        children: "Edit"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Separator */.h.Separator, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                                    className: "flex cursor-pointer items-center text-red-600 focus:bg-red-50",
                                    onSelect: ()=>setShowDeleteAlert(true),
                                    children: "Delete"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Alert, {
                open: showDeleteAlert,
                onOpenChange: setShowDeleteAlert,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Alert.Content, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Alert.Header, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Alert.Title, {
                                    children: "Are you sure you want to delete this post?"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Alert.Description, {
                                    children: "This action cannot be undone."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Alert.Footer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Alert.Cancel, {
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Alert.Action, {
                                    onClick: async (event)=>{
                                        event.preventDefault();
                                        setIsDeleteLoading(true);
                                        const deleted = await deletePost(post.id);
                                        if (deleted) {
                                            setIsDeleteLoading(false);
                                            setShowDeleteAlert(false);
                                            router.refresh();
                                        }
                                    },
                                    className: "bg-red-600 focus:ring-red-600",
                                    children: [
                                        isDeleteLoading ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.spinner */.P.spinner, {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.trash */.P.trash, {
                                            className: "mr-2 h-4 w-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Delete"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 83514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserAccountNav": () => (/* binding */ UserAccountNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next-auth@4.17.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js
var react = __webpack_require__(35696);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(52433);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./config/site.ts
var site = __webpack_require__(21610);
// EXTERNAL MODULE: ./ui/dropdown.tsx
var dropdown = __webpack_require__(60170);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(83340);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@radix-ui+react-avatar@1.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-avatar/dist/index.js
var dist = __webpack_require__(7440);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(26253);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./ui/avatar.tsx




function Avatar({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Root, {
        className: (0,utils.cn)("flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-slate-100", className),
        ...props
    });
}
Avatar.Image = function AvatarImage({ src , className , alt , width =32 , height =32 , ...props }) {
    if (!src) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Avatar.Fallback, {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: src,
        className: (0,utils.cn)("", className),
        alt: alt,
        width: width,
        height: height,
        ...props
    });
};
Avatar.Fallback = function AvatarFallback({ className , children , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(dist.Fallback, {
        delayMs: 500,
        className: (0,utils.cn)("", className),
        ...props,
        children: children
    });
};

;// CONCATENATED MODULE: ./components/dashboard/user-avatar.tsx



function UserAvatar({ user , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Avatar, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Avatar.Image, {
                alt: "Picture",
                src: user.image
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Avatar.Fallback, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: user.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Icons.user */.P.user, {
                        className: "h-4 w-4"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/dashboard/user-account-nav.tsx






function UserAccountNav({ user  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown/* DropdownMenu */.h, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Trigger */.h.Trigger, {
                className: "flex items-center gap-2 overflow-hidden focus:ring-2 focus:ring-brand-900 focus:ring-offset-2 focus-visible:outline-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(UserAvatar, {
                    user: {
                        name: user.name,
                        image: user.image
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Portal */.h.Portal, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dropdown/* DropdownMenu.Content */.h.Content, {
                    className: "mt-2 md:w-[240px]",
                    align: "end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center justify-start gap-2 p-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col space-y-1 leading-none",
                                children: [
                                    user.name && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-medium",
                                        children: user.name
                                    }),
                                    user.email && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "w-[200px] truncate text-sm text-slate-600",
                                        children: user.email
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Separator */.h.Separator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard",
                                className: "w-full",
                                children: "Dashboard"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/billing",
                                className: "w-full",
                                children: "Billing"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/settings",
                                className: "w-full",
                                children: "Settings"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Separator */.h.Separator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/docs",
                                target: "_blank",
                                className: "w-full",
                                children: "Documentation"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: site/* siteConfig.links.github */.J.links.github,
                                className: "w-full",
                                target: "_blank",
                                children: "GitHub"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Separator */.h.Separator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* DropdownMenu.Item */.h.Item, {
                            className: "cursor-pointer",
                            onSelect: (event)=>{
                                event.preventDefault();
                                (0,react.signOut)({
                                    callbackUrl: `${window.location.origin}/login`
                                });
                            },
                            children: "Sign out"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 60170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53382);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607);




function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Root, {
        ...props
    });
}
DropdownMenu.Trigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DropdownMenuTrigger({ ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Trigger, {
        ...props,
        ref: ref
    });
});
DropdownMenu.Portal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Portal;
DropdownMenu.Content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DropdownMenuContent({ className , ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content, {
        ref: ref,
        align: "end",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("overflow-hidden rounded-md border border-slate-50 bg-white shadow-md animate-in slide-in-from-top-1 md:w-32", className),
        ...props
    });
});
DropdownMenu.Item = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DropdownMenuItem({ className , ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default select-none items-center py-2 px-3 text-sm text-slate-600 outline-none focus:bg-slate-50 focus:text-black", className),
        ...props
    });
});
DropdownMenu.Separator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function DropdownMenuItem({ className , ...props }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Separator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-px bg-slate-200", className),
        ...props
    });
});


/***/ })

};
;
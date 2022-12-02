exports.id = 3570;
exports.ids = [3570];
exports.modules = {

/***/ 63971:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68180, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45975));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 40537));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64234))

/***/ }),

/***/ 29642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DocsLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8175);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78964);
/* harmony import */ var _config_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51776);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65082);
/* harmony import */ var _components_main_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6455);
/* harmony import */ var _components_main_nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_main_nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90939);
/* harmony import */ var _components_docs_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_docs_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_site_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60175);
/* harmony import */ var _components_docs_sidebar_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84523);
/* harmony import */ var _components_docs_sidebar_nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_docs_sidebar_nav__WEBPACK_IMPORTED_MODULE_8__);









function DocsLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: "sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_main_nav__WEBPACK_IMPORTED_MODULE_5__.MainNav, {
                            items: _config_docs__WEBPACK_IMPORTED_MODULE_3__/* .docsConfig.mainNav */ .A.mainNav,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_docs_sidebar_nav__WEBPACK_IMPORTED_MODULE_8__.DocsSidebarNav, {
                                items: _config_docs__WEBPACK_IMPORTED_MODULE_3__/* .docsConfig.sidebarNav */ .A.sidebarNav
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-1 items-center space-x-4 sm:justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-1 sm:flex-grow-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_docs_search__WEBPACK_IMPORTED_MODULE_6__.DocsSearch, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                    className: "flex space-x-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: _config_site__WEBPACK_IMPORTED_MODULE_2__/* .siteConfig.links.github */ .J.links.github,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-slate-50 hover:bg-slate-600",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Icons.gitHub */ .P.gitHub, {
                                                    className: "h-4 w-4 fill-white"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "GitHub"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container flex-1",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_site_footer__WEBPACK_IMPORTED_MODULE_7__/* .SiteFooter */ .n, {})
        ]
    });
}


/***/ }),

/***/ 59907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DocsPageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71331);


function DocsPageHeader({ heading , text , className , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("space-y-4", className),
                ...props,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "inline-block text-4xl font-black tracking-tight text-slate-900 lg:text-5xl",
                        children: heading
                    }),
                    text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-slate-600",
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "my-4 border-slate-200"
            })
        ]
    });
}


/***/ }),

/***/ 90939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/docs/search.tsx");


/***/ }),

/***/ 84523:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/docs/sidebar-nav.tsx");


/***/ }),

/***/ 51776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ docsConfig)
/* harmony export */ });
const docsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs"
        },
        {
            title: "Guides",
            href: "/guides"
        }
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs"
                }
            ]
        },
        {
            title: "Documentation",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/documentation"
                },
                {
                    title: "Contentlayer",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Components",
                    href: "/docs/documentation/components"
                },
                {
                    title: "Code Blocks",
                    href: "/docs/documentation/code-blocks"
                },
                {
                    title: "Style Guide",
                    href: "/docs/documentation/style-guide"
                },
                {
                    title: "Search",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Blog",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Build your own",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Writing Posts",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Dashboard",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Layouts",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Server Components",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Authentication",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Database with Prisma",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "API Routes",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        },
        {
            title: "Marketing Site",
            items: [
                {
                    title: "Introduction",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "File Structure",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Tailwind CSS",
                    href: "/docs/in-progress",
                    disabled: true
                },
                {
                    title: "Typography",
                    href: "/docs/in-progress",
                    disabled: true
                }
            ]
        }
    ]
};


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsSearch": () => (/* binding */ DocsSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607);
/* harmony import */ var _ui_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77356);




function DocsSearch({ className , ...props }) {
    function onSubmit(event) {
        event.preventDefault();
        return (0,_ui_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({
            title: "Not implemented",
            message: "We're still working on the search.",
            type: "error"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: onSubmit,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative w-full", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "search",
                placeholder: "Search documentation...",
                className: "block h-8 w-full appearance-none rounded-md border border-slate-200 bg-slate-100 py-2 pl-3 pr-3 text-sm placeholder:text-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1 sm:w-64 sm:pr-12"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("kbd", {
                className: "pointer-events-none absolute top-1.5 right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 sm:flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-xs",
                        children: "⌘"
                    }),
                    "K"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 64234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsSidebarNav": () => (/* binding */ DocsSidebarNav),
/* harmony export */   "DocsSidebarNavItems": () => (/* binding */ DocsSidebarNavItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52433);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64178);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);




function DocsSidebarNav({ items  }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return items.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full",
        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("pb-8"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "mb-1 rounded-md px-2 py-1 text-sm font-medium",
                        children: item.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DocsSidebarNavItems, {
                        items: item.items,
                        pathname: pathname
                    })
                ]
            }, index))
    }) : null;
}
function DocsSidebarNavItems({ items , pathname  }) {
    return items?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-flow-row auto-rows-max text-sm",
        children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.disabled ? "#" : item.href,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex w-full items-center rounded-md px-2 py-2 hover:underline", item.disabled && "cursor-not-allowed opacity-60", {
                    "bg-slate-100": pathname === item.href
                }),
                target: item.external && "_blank",
                rel: item.external ? "noreferrer" : "",
                children: item.title
            }, index))
    }) : null;
}


/***/ })

};
;
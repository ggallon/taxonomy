exports.id = 6465;
exports.ids = [6465];
exports.modules = {

/***/ 83289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MdxHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65565);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20748);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71331);



function MdxHead({ params , og  }) {
    const slug = params?.slug?.join("/") || "";
    const mdxDoc = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allDocuments.find */ .cx.find((doc)=>doc.slugAsParams === slug);
    if (!mdxDoc) {
        return null;
    }
    const title = `${mdxDoc.title} - Taxonomy`;
    const url = "http://localhost:3000";
    let ogUrl = new URL(`${url}/og.jpg`);
    const ogTitle = og?.heading || mdxDoc.title;
    const ogDescription = mdxDoc.description;
    if (og?.type) {
        ogUrl = new URL(`${url}/api/og`);
        ogUrl.searchParams.set("heading", ogTitle);
        ogUrl.searchParams.set("type", og.type);
        ogUrl.searchParams.set("mode", og.mode || "dark");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__/* .absoluteUrl */ .G)(mdxDoc.slug)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: ogDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: ogTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: ogDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: ogUrl.toString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: ogTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: ogDescription
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: ogUrl.toString()
            })
        ]
    });
}


/***/ }),

/***/ 71034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ Mdx)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(65565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(94986);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(73805);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next-contentlayer@0.2.9_6jx7hpii6hgsrmhxgqrmo3277u/node_modules/next-contentlayer/dist/hooks/useMDXComponent.js
var useMDXComponent = __webpack_require__(17651);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(71331);
;// CONCATENATED MODULE: ./components/docs/callout.tsx


function Callout({ children , icon , type ="default" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("my-6 flex items-start rounded-md border border-l-4 p-4", {
            "border-slate-900 bg-slate-50": type === "default",
            "border-red-900 bg-red-50": type === "danger",
            "border-yellow-900 bg-yellow-50": type === "warning"
        }),
        ...props,
        children: [
            icon && /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "mr-4 text-2xl",
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@13.0.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(8175);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/docs/card.tsx



function Card({ href , className , children , disabled , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,utils.cn)("group relative rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg", disabled && "cursor-not-allowed opacity-60", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-col justify-between space-y-4",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "space-y-2 [&>p]:text-slate-600 [&>h4]:!mt-0 [&>h3]:!mt-0",
                    children: children
                })
            }),
            href && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: disabled ? "#" : href,
                className: "absolute inset-0",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "sr-only",
                    children: "View"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/docs/mdx.tsx







const components = {
    h1: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h1", {
            className: (0,utils.cn)("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className),
            ...props
        }),
    h2: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h2", {
            className: (0,utils.cn)("mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0", className),
            ...props
        }),
    h3: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h3", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className),
            ...props
        }),
    h4: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h4", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className),
            ...props
        }),
    h5: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h5", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className),
            ...props
        }),
    h6: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("h6", {
            className: (0,utils.cn)("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className),
            ...props
        }),
    a: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("a", {
            className: (0,utils.cn)("font-medium text-slate-900 underline underline-offset-4", className),
            ...props
        }),
    p: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("p", {
            className: (0,utils.cn)("leading-7 [&:not(:first-child)]:mt-6", className),
            ...props
        }),
    ul: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("ul", {
            className: (0,utils.cn)("my-6 ml-6 list-disc", className),
            ...props
        }),
    ol: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("ol", {
            className: (0,utils.cn)("my-6 ml-6 list-decimal", className),
            ...props
        }),
    li: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("li", {
            className: (0,utils.cn)("mt-2", className),
            ...props
        }),
    blockquote: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("blockquote", {
            className: (0,utils.cn)("mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600", className),
            ...props
        }),
    img: ({ className , alt , ...props })=>// eslint-disable-next-line @next/next/no-img-element
        /*#__PURE__*/ jsx_runtime.jsx("img", {
            className: (0,utils.cn)("rounded-md border border-slate-200", className),
            alt: alt,
            ...props
        }),
    hr: ({ ...props })=>/*#__PURE__*/ jsx_runtime.jsx("hr", {
            className: "my-4 border-slate-200 md:my-8",
            ...props
        }),
    table: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "my-6 w-full overflow-y-auto",
            children: /*#__PURE__*/ jsx_runtime.jsx("table", {
                className: (0,utils.cn)("w-full", className),
                ...props
            })
        }),
    tr: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("tr", {
            className: (0,utils.cn)("m-0 border-t border-slate-300 p-0 even:bg-slate-100", className),
            ...props
        }),
    th: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("th", {
            className: (0,utils.cn)("border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className),
            ...props
        }),
    td: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("td", {
            className: (0,utils.cn)("border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className),
            ...props
        }),
    pre: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("pre", {
            className: (0,utils.cn)("mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-900 py-4", className),
            ...props
        }),
    code: ({ className , ...props })=>/*#__PURE__*/ jsx_runtime.jsx("code", {
            className: (0,utils.cn)("relative rounded border bg-slate-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-600", className),
            ...props
        }),
    Image: (image_default()),
    Callout: Callout,
    Card: Card
};
function Mdx({ code  }) {
    const Component = (0,useMDXComponent/* useMDXComponent */.z)(code);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mdx",
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            components: components
        })
    });
}


/***/ }),

/***/ 66389:
/***/ (() => {



/***/ })

};
;
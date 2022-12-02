exports.id = 3114;
exports.ids = [3114];
exports.modules = {

/***/ 7466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4329);
module.exports = createProxy("/Users/gwen/develop/github/taxonomy/apps/markt/components/docs/toc.tsx");


/***/ }),

/***/ 4049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getTableOfContents)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30829);
/* harmony import */ var mdast_util_toc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96611);
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66119);



const textTypes = [
    "text",
    "emphasis",
    "strong",
    "inlineCode"
];
function flattenNode(node) {
    const p = [];
    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__/* .visit */ .Vn)(node, (node)=>{
        if (!textTypes.includes(node.type)) return;
        p.push(node.value);
    });
    return p.join(``);
}
function getItems(node, current) {
    if (!node) {
        return {};
    }
    if (node.type === "paragraph") {
        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__/* .visit */ .Vn)(node, (item)=>{
            if (item.type === "link") {
                current.url = item.url;
                current.title = flattenNode(node);
            }
            if (item.type === "text") {
                current.title = flattenNode(node);
            }
        });
        return current;
    }
    if (node.type === "list") {
        current.items = node.children.map((i)=>getItems(i, {}));
        return current;
    } else if (node.type === "listItem") {
        const heading = getItems(node.children[0], {});
        if (node.children.length > 1) {
            getItems(node.children[1], heading);
        }
        return heading;
    }
    return {};
}
const getToc = ()=>(node, file)=>{
        const table = (0,mdast_util_toc__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .d)(node);
        file.data = getItems(table.map, {});
    };
async function getTableOfContents(content) {
    const result = await (0,remark__WEBPACK_IMPORTED_MODULE_2__/* .remark */ .j)().use(getToc).process(content);
    return result.data;
}


/***/ }),

/***/ 90646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DashboardTableOfContents": () => (/* binding */ DashboardTableOfContents)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(607);
;// CONCATENATED MODULE: ./hooks/use-mounted.ts

function useMounted() {
    const [mounted, setMounted] = react_.useState(false);
    react_.useEffect(()=>{
        setMounted(true);
    }, []);
    return mounted;
}

;// CONCATENATED MODULE: ./components/docs/toc.tsx




function DashboardTableOfContents({ toc  }) {
    const itemIds = react_.useMemo(()=>toc.items ? toc.items.flatMap((item)=>[
                item.url,
                item?.items?.map((item)=>item.url)
            ]).flat().filter(Boolean).map((id)=>id.split("#")[1]) : [], [
        toc
    ]);
    const activeHeading = useActiveItem(itemIds);
    const mounted = useMounted();
    if (!toc?.items) {
        return null;
    }
    return mounted && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-medium",
                children: "On This Page"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Tree, {
                tree: toc,
                activeItem: activeHeading
            })
        ]
    });
}
function useActiveItem(itemIds) {
    const [activeId, setActiveId] = react_.useState(null);
    react_.useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: `0% 0% -80% 0%`
        });
        itemIds?.forEach((id)=>{
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });
        return ()=>{
            itemIds?.forEach((id)=>{
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [
        itemIds
    ]);
    return activeId;
}
function Tree({ tree , level =1 , activeItem  }) {
    return tree?.items?.length && level < 3 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (0,utils.cn)("m-0 list-none", {
            "pl-4": level !== 1
        }),
        children: tree.items.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (0,utils.cn)("mt-0 pt-2"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: item.url,
                        className: (0,utils.cn)("inline-block no-underline", item.url === `#${activeItem}` ? "text-state-900 font-medium" : "text-sm text-slate-600 hover:text-slate-900"),
                        children: item.title
                    }),
                    item.items?.length ? /*#__PURE__*/ jsx_runtime_.jsx(Tree, {
                        tree: item,
                        level: level + 1,
                        activeItem: activeItem
                    }) : null
                ]
            }, index);
        })
    }) : null;
}


/***/ })

};
;
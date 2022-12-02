"use strict";
(() => {
var exports = {};
exports.id = 8439;
exports.ids = [8439];
exports.modules = {

/***/ 32104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 62113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 9673:
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ 47459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 49834:
/***/ ((module) => {

module.exports = require("postmark");

/***/ }),

/***/ 38316:
/***/ ((module) => {

module.exports = require("zod");

/***/ }),

/***/ 86440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ withMethods)
/* harmony export */ });
function withMethods(methods, handler) {
    return async function(req, res) {
        if (!methods.includes(req.method)) {
            return res.status(405).end();
        }
        return handler(req, res);
    };
}


/***/ }),

/***/ 53915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _postId_)
});

// EXTERNAL MODULE: external "zod"
var external_zod_ = __webpack_require__(38316);
// EXTERNAL MODULE: ./lib/api-middlewares/with-methods.ts
var with_methods = __webpack_require__(86440);
// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(62113);
// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(9309);
// EXTERNAL MODULE: ./lib/db.ts
var db = __webpack_require__(65271);
;// CONCATENATED MODULE: ./lib/api-middlewares/with-post.ts




const schema = external_zod_.object({
    postId: external_zod_.string()
});
function withPost(handler) {
    return async function(req, res) {
        try {
            const query = await schema.parse(req.query);
            // Check if the user has access to this post.
            const session = await (0,next_.unstable_getServerSession)(req, res, auth/* authOptions */.L);
            const count = await db.db.post.count({
                where: {
                    id: query.postId,
                    authorId: session.user.id
                }
            });
            if (count < 1) {
                return res.status(403).end();
            }
            return handler(req, res);
        } catch (error) {
            if (error instanceof external_zod_.ZodError) {
                return res.status(422).json(error.issues);
            }
            return res.status(500).end();
        }
    };
}

;// CONCATENATED MODULE: ./lib/validations/post.ts

const postPatchSchema = external_zod_.object({
    title: external_zod_.string().min(3).max(128).optional(),
    // TODO: Type this properly from editorjs block types?
    content: external_zod_.any().optional()
});

;// CONCATENATED MODULE: ./pages/api/posts/[postId].ts





async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await db.db.post["delete"]({
                where: {
                    id: req.query.postId
                }
            });
            return res.status(204).end();
        } catch (error) {
            return res.status(500).end();
        }
    }
    if (req.method === "PATCH") {
        try {
            const postId = req.query.postId;
            const post = await db.db.post.findUnique({
                where: {
                    id: postId
                }
            });
            const body = postPatchSchema.parse(req.body);
            // TODO: Implement sanitization for content.
            await db.db.post.update({
                where: {
                    id: post.id
                },
                data: {
                    title: body.title || post.title,
                    content: body.content
                }
            });
            return res.end();
        } catch (error1) {
            if (error1 instanceof external_zod_.ZodError) {
                return res.status(422).json(error1.issues);
            }
            return res.status(422).end();
        }
    }
}
/* harmony default export */ const _postId_ = ((0,with_methods/* withMethods */.q)([
    "DELETE",
    "PATCH"
], withPost(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9309], () => (__webpack_exec__(53915)));
module.exports = __webpack_exports__;

})();
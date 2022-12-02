"use strict";
(() => {
var exports = {};
exports.id = 4610;
exports.ids = [4610];
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

/***/ 42984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ stripe)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./lib/stripe.ts

const stripe = new (external_stripe_default())(process.env.STRIPE_API_KEY, {
    apiVersion: "2022-11-15",
    typescript: true
});


/***/ }),

/***/ 41929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ users_stripe)
});

// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(62113);
// EXTERNAL MODULE: ./config/subscriptions.ts
var subscriptions = __webpack_require__(102);
// EXTERNAL MODULE: ./lib/api-middlewares/with-methods.ts
var with_methods = __webpack_require__(86440);
// EXTERNAL MODULE: ./lib/subscription.ts
var subscription = __webpack_require__(95171);
// EXTERNAL MODULE: ./lib/stripe.ts + 1 modules
var stripe = __webpack_require__(42984);
// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(9309);
;// CONCATENATED MODULE: ./lib/api-middlewares/with-authentication.ts


function withAuthentication(handler) {
    return async function(req, res) {
        const session = await (0,next_.unstable_getServerSession)(req, res, auth/* authOptions */.L);
        if (!session) {
            return res.status(403).end();
        }
        return handler(req, res);
    };
}

;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
;// CONCATENATED MODULE: external "tailwind-merge"
const external_tailwind_merge_namespaceObject = require("tailwind-merge");
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return twMerge(clsx(inputs));
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

;// CONCATENATED MODULE: ./pages/api/users/stripe.ts








const billingUrl = absoluteUrl("/dashboard/billing");
async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const session = await (0,next_.unstable_getServerSession)(req, res, auth/* authOptions */.L);
            const user = session.user;
            const subscriptionPlan = await (0,subscription/* getUserSubscriptionPlan */.b)(user.id);
            // The user is on the pro plan.
            // Create a portal session to manage subscription.
            if (subscriptionPlan.isPro) {
                const stripeSession = await stripe/* stripe.billingPortal.sessions.create */.A.billingPortal.sessions.create({
                    customer: subscriptionPlan.stripeCustomerId,
                    return_url: billingUrl
                });
                return res.json({
                    url: stripeSession.url
                });
            }
            // The user is on the free plan.
            // Create a checkout session to upgrade.
            const stripeSession1 = await stripe/* stripe.checkout.sessions.create */.A.checkout.sessions.create({
                success_url: billingUrl,
                cancel_url: billingUrl,
                payment_method_types: [
                    "card"
                ],
                mode: "subscription",
                billing_address_collection: "auto",
                customer_email: user.email,
                line_items: [
                    {
                        price: subscriptions/* proPlan.stripePriceId */.H.stripePriceId,
                        quantity: 1
                    }
                ],
                metadata: {
                    userId: user.id
                }
            });
            return res.json({
                url: stripeSession1.url
            });
        } catch (error) {
            console.log("[error]:", error);
            return res.status(500).end();
        }
    }
}
/* harmony default export */ const users_stripe = ((0,with_methods/* withMethods */.q)([
    "GET"
], withAuthentication(handler)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9309,7148], () => (__webpack_exec__(41929)));
module.exports = __webpack_exports__;

})();
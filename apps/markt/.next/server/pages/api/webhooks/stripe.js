"use strict";
(() => {
var exports = {};
exports.id = 4105;
exports.ids = [4105];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 65271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
const db = prisma;


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

/***/ 70086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42984);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65271);


const config = {
    api: {
        // Turn off the body parser so we can access raw body for verification.
        bodyParser: false
    }
};
async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable){
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
const relevantEvents = new Set([
    "checkout.session.completed",
    "invoice.payment_succeeded"
]);
async function handler(req, res) {
    // POST /api/webhooks/stripe – listen to Stripe webhooks
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]);
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed`
        });
    }
    const body = await buffer(req);
    const signature = req.headers["stripe-signature"];
    let event;
    try {
        event = _lib_stripe__WEBPACK_IMPORTED_MODULE_0__/* .stripe.webhooks.constructEvent */ .A.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        console.error(error);
        return res.status(400).send("Webhook error: Webhook handler failed. View logs.");
    }
    if (!relevantEvents.has(event.type)) {
        return res.status(400).send(`Webhook error: 🤷‍♀️ Unhandled event type: ${event.type}`);
    }
    const session = event.data.object;
    if (event.type === "checkout.session.completed") {
        // Retrieve the subscription details from Stripe.
        const subscription = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__/* .stripe.subscriptions.retrieve */ .A.subscriptions.retrieve(session.subscription);
        // Update the user stripe into in our database.
        // Since this is the initial subscription, we need to update
        // the subscription id and customer id.
        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.update({
            where: {
                id: session.metadata.userId
            },
            data: {
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
            }
        });
    }
    if (event.type === "invoice.payment_succeeded") {
        // Retrieve the subscription details from Stripe.
        const subscription1 = await _lib_stripe__WEBPACK_IMPORTED_MODULE_0__/* .stripe.subscriptions.retrieve */ .A.subscriptions.retrieve(session.subscription);
        // Update the price id and set the new period end.
        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.update({
            where: {
                stripeSubscriptionId: subscription1.id
            },
            data: {
                stripePriceId: subscription1.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(subscription1.current_period_end * 1000)
            }
        });
    }
    return res.json({
        received: true
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(70086));
module.exports = __webpack_exports__;

})();
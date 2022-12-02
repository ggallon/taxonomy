exports.id = 5766;
exports.ids = [5766];
exports.modules = {

/***/ 48610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $hLIh8$babelruntimehelpersextends = __webpack_require__(42791);
var $hLIh8$react = __webpack_require__(18038);
var $hLIh8$radixuireactcontext = __webpack_require__(80018);
var $hLIh8$radixuireactcomposerefs = __webpack_require__(12099);
var $hLIh8$radixuireactdialog = __webpack_require__(95216);
var $hLIh8$radixuiprimitive = __webpack_require__(7826);
var $hLIh8$radixuireactslot = __webpack_require__(73193);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAlertDialogScope", () => $8c7baeec26a63e97$export$b8891880751c2c5b);
$parcel$export(module.exports, "AlertDialog", () => $8c7baeec26a63e97$export$de466dd8317b0b75);
$parcel$export(module.exports, "AlertDialogTrigger", () => $8c7baeec26a63e97$export$6edd7a623ef0f40b);
$parcel$export(module.exports, "AlertDialogPortal", () => $8c7baeec26a63e97$export$660f2bfdb986706c);
$parcel$export(module.exports, "AlertDialogOverlay", () => $8c7baeec26a63e97$export$a707a4895ce23256);
$parcel$export(module.exports, "AlertDialogContent", () => $8c7baeec26a63e97$export$94e6af45f0af4efd);
$parcel$export(module.exports, "AlertDialogAction", () => $8c7baeec26a63e97$export$b454f818c58ee85d);
$parcel$export(module.exports, "AlertDialogCancel", () => $8c7baeec26a63e97$export$2f67a923571aaea0);
$parcel$export(module.exports, "AlertDialogTitle", () => $8c7baeec26a63e97$export$225e0da62d314b7);
$parcel$export(module.exports, "AlertDialogDescription", () => $8c7baeec26a63e97$export$a23b55cde55ad9a5);
$parcel$export(module.exports, "Root", () => $8c7baeec26a63e97$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $8c7baeec26a63e97$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $8c7baeec26a63e97$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $8c7baeec26a63e97$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $8c7baeec26a63e97$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Action", () => $8c7baeec26a63e97$export$e19cd5f9376f8cee);
$parcel$export(module.exports, "Cancel", () => $8c7baeec26a63e97$export$848c9b7ead0df967);
$parcel$export(module.exports, "Title", () => $8c7baeec26a63e97$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $8c7baeec26a63e97$export$393edc798c47379d);








/* -------------------------------------------------------------------------------------------------
 * AlertDialog
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$ROOT_NAME = 'AlertDialog';
const [$8c7baeec26a63e97$var$createAlertDialogContext, $8c7baeec26a63e97$export$b8891880751c2c5b] = $hLIh8$radixuireactcontext.createContextScope($8c7baeec26a63e97$var$ROOT_NAME, [
    $hLIh8$radixuireactdialog.createDialogScope
]);
const $8c7baeec26a63e97$var$useDialogScope = $hLIh8$radixuireactdialog.createDialogScope();
const $8c7baeec26a63e97$export$de466dd8317b0b75 = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...alertDialogProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Root, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, alertDialogProps, {
        modal: true
    }));
};
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$de466dd8317b0b75, {
    displayName: $8c7baeec26a63e97$var$ROOT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$TRIGGER_NAME = 'AlertDialogTrigger';
const $8c7baeec26a63e97$export$6edd7a623ef0f40b = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...triggerProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Trigger, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, triggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$6edd7a623ef0f40b, {
    displayName: $8c7baeec26a63e97$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$PORTAL_NAME = 'AlertDialogPortal';
const $8c7baeec26a63e97$export$660f2bfdb986706c = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...portalProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Portal, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, portalProps));
};
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$660f2bfdb986706c, {
    displayName: $8c7baeec26a63e97$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$OVERLAY_NAME = 'AlertDialogOverlay';
const $8c7baeec26a63e97$export$a707a4895ce23256 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...overlayProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Overlay, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, overlayProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$a707a4895ce23256, {
    displayName: $8c7baeec26a63e97$var$OVERLAY_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogContent
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$CONTENT_NAME = 'AlertDialogContent';
const [$8c7baeec26a63e97$var$AlertDialogContentProvider, $8c7baeec26a63e97$var$useAlertDialogContentContext] = $8c7baeec26a63e97$var$createAlertDialogContext($8c7baeec26a63e97$var$CONTENT_NAME);
const $8c7baeec26a63e97$export$94e6af45f0af4efd = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , children: children , ...contentProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    const contentRef = $hLIh8$react.useRef(null);
    const composedRefs = $hLIh8$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef);
    const cancelRef = $hLIh8$react.useRef(null);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.WarningProvider, {
        contentName: $8c7baeec26a63e97$var$CONTENT_NAME,
        titleName: $8c7baeec26a63e97$var$TITLE_NAME,
        docsSlug: "alert-dialog"
    }, /*#__PURE__*/ $hLIh8$react.createElement($8c7baeec26a63e97$var$AlertDialogContentProvider, {
        scope: __scopeAlertDialog,
        cancelRef: cancelRef
    }, /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Content, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({
        role: "alertdialog"
    }, dialogScope, contentProps, {
        ref: composedRefs,
        onOpenAutoFocus: $hLIh8$radixuiprimitive.composeEventHandlers(contentProps.onOpenAutoFocus, (event)=>{
            var _cancelRef$current;
            event.preventDefault();
            (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
                preventScroll: true
            });
        }),
        onPointerDownOutside: (event)=>event.preventDefault()
        ,
        onInteractOutside: (event)=>event.preventDefault()
    }), /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactslot.Slottable, null, children), false)));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$94e6af45f0af4efd, {
    displayName: $8c7baeec26a63e97$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$TITLE_NAME = 'AlertDialogTitle';
const $8c7baeec26a63e97$export$225e0da62d314b7 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...titleProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Title, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$225e0da62d314b7, {
    displayName: $8c7baeec26a63e97$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$DESCRIPTION_NAME = 'AlertDialogDescription';
const $8c7baeec26a63e97$export$a23b55cde55ad9a5 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...descriptionProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Description, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$a23b55cde55ad9a5, {
    displayName: $8c7baeec26a63e97$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogAction
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$ACTION_NAME = 'AlertDialogAction';
const $8c7baeec26a63e97$export$b454f818c58ee85d = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...actionProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Close, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, actionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$b454f818c58ee85d, {
    displayName: $8c7baeec26a63e97$var$ACTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogCancel
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$CANCEL_NAME = 'AlertDialogCancel';
const $8c7baeec26a63e97$export$2f67a923571aaea0 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...cancelProps } = props;
    const { cancelRef: cancelRef  } = $8c7baeec26a63e97$var$useAlertDialogContentContext($8c7baeec26a63e97$var$CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    const ref = $hLIh8$radixuireactcomposerefs.useComposedRefs(forwardedRef, cancelRef);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Close, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, cancelProps, {
        ref: ref
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$2f67a923571aaea0, {
    displayName: $8c7baeec26a63e97$var$CANCEL_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $8c7baeec26a63e97$var$DescriptionWarning = ({ contentRef: contentRef  })=>{
    const MESSAGE = `\`${$8c7baeec26a63e97$var$CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${$8c7baeec26a63e97$var$CONTENT_NAME}\` by passing a \`${$8c7baeec26a63e97$var$DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${$8c7baeec26a63e97$var$CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    $hLIh8$react.useEffect(()=>{
        var _contentRef$current;
        const hasDescription = document.getElementById((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'));
        if (!hasDescription) console.warn(MESSAGE);
    }, [
        MESSAGE,
        contentRef
    ]);
    return null;
};
const $8c7baeec26a63e97$export$be92b6f5f03c0fe9 = $8c7baeec26a63e97$export$de466dd8317b0b75;
const $8c7baeec26a63e97$export$41fb9f06171c75f4 = $8c7baeec26a63e97$export$6edd7a623ef0f40b;
const $8c7baeec26a63e97$export$602eac185826482c = $8c7baeec26a63e97$export$660f2bfdb986706c;
const $8c7baeec26a63e97$export$c6fdb837b070b4ff = $8c7baeec26a63e97$export$a707a4895ce23256;
const $8c7baeec26a63e97$export$7c6e2c02157bb7d2 = $8c7baeec26a63e97$export$94e6af45f0af4efd;
const $8c7baeec26a63e97$export$e19cd5f9376f8cee = $8c7baeec26a63e97$export$b454f818c58ee85d;
const $8c7baeec26a63e97$export$848c9b7ead0df967 = $8c7baeec26a63e97$export$2f67a923571aaea0;
const $8c7baeec26a63e97$export$f99233281efd08a0 = $8c7baeec26a63e97$export$225e0da62d314b7;
const $8c7baeec26a63e97$export$393edc798c47379d = $8c7baeec26a63e97$export$a23b55cde55ad9a5;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $6FDFN$babelruntimehelpersextends = __webpack_require__(42791);
var $6FDFN$react = __webpack_require__(18038);
var $6FDFN$radixuireactcontext = __webpack_require__(80018);
var $6FDFN$radixuireactusecallbackref = __webpack_require__(47440);
var $6FDFN$radixuireactuselayouteffect = __webpack_require__(49385);
var $6FDFN$radixuireactprimitive = __webpack_require__(92266);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAvatarScope", () => $94437fed6c1d6d8a$export$90370d16b488820f);
$parcel$export(module.exports, "Avatar", () => $94437fed6c1d6d8a$export$e2255cf6045e8d47);
$parcel$export(module.exports, "AvatarImage", () => $94437fed6c1d6d8a$export$2cd8ae1985206fe8);
$parcel$export(module.exports, "AvatarFallback", () => $94437fed6c1d6d8a$export$69fffb6a9571fbfe);
$parcel$export(module.exports, "Root", () => $94437fed6c1d6d8a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Image", () => $94437fed6c1d6d8a$export$3e431a229df88919);
$parcel$export(module.exports, "Fallback", () => $94437fed6c1d6d8a$export$fb8d7f40caaeea67);






/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$AVATAR_NAME = 'Avatar';
const [$94437fed6c1d6d8a$var$createAvatarContext, $94437fed6c1d6d8a$export$90370d16b488820f] = $6FDFN$radixuireactcontext.createContextScope($94437fed6c1d6d8a$var$AVATAR_NAME);
const [$94437fed6c1d6d8a$var$AvatarProvider, $94437fed6c1d6d8a$var$useAvatarContext] = $94437fed6c1d6d8a$var$createAvatarContext($94437fed6c1d6d8a$var$AVATAR_NAME);
const $94437fed6c1d6d8a$export$e2255cf6045e8d47 = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = $6FDFN$react.useState('idle');
    return /*#__PURE__*/ $6FDFN$react.createElement($94437fed6c1d6d8a$var$AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus: imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus
    }, /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, avatarProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$e2255cf6045e8d47, {
    displayName: $94437fed6c1d6d8a$var$AVATAR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarImage
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$IMAGE_NAME = 'AvatarImage';
const $94437fed6c1d6d8a$export$2cd8ae1985206fe8 = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , src: src , onLoadingStatusChange: onLoadingStatusChange = ()=>{} , ...imageProps } = props;
    const context = $94437fed6c1d6d8a$var$useAvatarContext($94437fed6c1d6d8a$var$IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = $94437fed6c1d6d8a$var$useImageLoadingStatus(src);
    const handleLoadingStatusChange = $6FDFN$radixuireactusecallbackref.useCallbackRef((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    $6FDFN$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (imageLoadingStatus !== 'idle') handleLoadingStatusChange(imageLoadingStatus);
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === 'loaded' ? /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.img, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, imageProps, {
        ref: forwardedRef,
        src: src
    })) : null;
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$2cd8ae1985206fe8, {
    displayName: $94437fed6c1d6d8a$var$IMAGE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarFallback
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$FALLBACK_NAME = 'AvatarFallback';
const $94437fed6c1d6d8a$export$69fffb6a9571fbfe = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , delayMs: delayMs , ...fallbackProps } = props;
    const context = $94437fed6c1d6d8a$var$useAvatarContext($94437fed6c1d6d8a$var$FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = $6FDFN$react.useState(delayMs === undefined);
    $6FDFN$react.useEffect(()=>{
        if (delayMs !== undefined) {
            const timerId = window.setTimeout(()=>setCanRender(true)
            , delayMs);
            return ()=>window.clearTimeout(timerId)
            ;
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== 'loaded' ? /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, fallbackProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$69fffb6a9571fbfe, {
    displayName: $94437fed6c1d6d8a$var$FALLBACK_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $94437fed6c1d6d8a$var$useImageLoadingStatus(src) {
    const [loadingStatus, setLoadingStatus] = $6FDFN$react.useState('idle');
    $6FDFN$react.useEffect(()=>{
        if (!src) {
            setLoadingStatus('error');
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            }
        ;
        setLoadingStatus('loading');
        image.onload = updateStatus('loaded');
        image.onerror = updateStatus('error');
        image.src = src;
        return ()=>{
            isMounted = false;
        };
    }, [
        src
    ]);
    return loadingStatus;
}
const $94437fed6c1d6d8a$export$be92b6f5f03c0fe9 = $94437fed6c1d6d8a$export$e2255cf6045e8d47;
const $94437fed6c1d6d8a$export$3e431a229df88919 = $94437fed6c1d6d8a$export$2cd8ae1985206fe8;
const $94437fed6c1d6d8a$export$fb8d7f40caaeea67 = $94437fed6c1d6d8a$export$69fffb6a9571fbfe;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 77996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $hnlpS$react = __webpack_require__(18038);
var $hnlpS$radixuireactcontext = __webpack_require__(80018);
var $hnlpS$radixuireactcomposerefs = __webpack_require__(12099);
var $hnlpS$radixuireactslot = __webpack_require__(73193);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createCollection", () => $1a96635ec239608b$export$c74125a8e3af6bb2);




// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $1a96635ec239608b$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = $hnlpS$radixuireactcontext.createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = ($parcel$interopDefault($hnlpS$react)).useRef(null);
        const itemMap = ($parcel$interopDefault($hnlpS$react)).useRef(new Map()).current;
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /*#__PURE__*/ Object.assign(CollectionProvider, {
        displayName: PROVIDER_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = $hnlpS$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement($hnlpS$radixuireactslot.Slot, {
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionSlot, {
        displayName: COLLECTION_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = ($parcel$interopDefault($hnlpS$react)).useRef(null);
        const composedRefs = $hnlpS$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        ($parcel$interopDefault($hnlpS$react)).useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement($hnlpS$radixuireactslot.Slot, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionItemSlot, {
        displayName: ITEM_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = ($parcel$interopDefault($hnlpS$react)).useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 95216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $aJCrN$babelruntimehelpersextends = __webpack_require__(42791);
var $aJCrN$react = __webpack_require__(18038);
var $aJCrN$radixuiprimitive = __webpack_require__(7826);
var $aJCrN$radixuireactcomposerefs = __webpack_require__(12099);
var $aJCrN$radixuireactcontext = __webpack_require__(80018);
var $aJCrN$radixuireactid = __webpack_require__(41442);
var $aJCrN$radixuireactusecontrollablestate = __webpack_require__(3929);
var $aJCrN$radixuireactdismissablelayer = __webpack_require__(9524);
var $aJCrN$radixuireactfocusscope = __webpack_require__(34724);
var $aJCrN$radixuireactportal = __webpack_require__(67338);
var $aJCrN$radixuireactpresence = __webpack_require__(93805);
var $aJCrN$radixuireactprimitive = __webpack_require__(92266);
var $aJCrN$radixuireactfocusguards = __webpack_require__(80704);
var $aJCrN$reactremovescroll = __webpack_require__(61704);
var $aJCrN$ariahidden = __webpack_require__(77726);
var $aJCrN$radixuireactslot = __webpack_require__(73193);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDialogScope", () => $f4833395aa1bca1a$export$cc702773b8ea3e41);
$parcel$export(module.exports, "Dialog", () => $f4833395aa1bca1a$export$3ddf2d174ce01153);
$parcel$export(module.exports, "DialogTrigger", () => $f4833395aa1bca1a$export$2e1e1122cf0cba88);
$parcel$export(module.exports, "DialogPortal", () => $f4833395aa1bca1a$export$dad7c95542bacce0);
$parcel$export(module.exports, "DialogOverlay", () => $f4833395aa1bca1a$export$bd1d06c79be19e17);
$parcel$export(module.exports, "DialogContent", () => $f4833395aa1bca1a$export$b6d9565de1e068cf);
$parcel$export(module.exports, "DialogTitle", () => $f4833395aa1bca1a$export$16f7638e4a34b909);
$parcel$export(module.exports, "DialogDescription", () => $f4833395aa1bca1a$export$94e94c2ec2c954d5);
$parcel$export(module.exports, "DialogClose", () => $f4833395aa1bca1a$export$fba2fb7cd781b7ac);
$parcel$export(module.exports, "Root", () => $f4833395aa1bca1a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $f4833395aa1bca1a$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $f4833395aa1bca1a$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $f4833395aa1bca1a$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $f4833395aa1bca1a$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Title", () => $f4833395aa1bca1a$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $f4833395aa1bca1a$export$393edc798c47379d);
$parcel$export(module.exports, "Close", () => $f4833395aa1bca1a$export$f39c2d165cd861fe);
$parcel$export(module.exports, "WarningProvider", () => $f4833395aa1bca1a$export$69b62a49393917d6);
















/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DIALOG_NAME = 'Dialog';
const [$f4833395aa1bca1a$var$createDialogContext, $f4833395aa1bca1a$export$cc702773b8ea3e41] = $aJCrN$radixuireactcontext.createContextScope($f4833395aa1bca1a$var$DIALOG_NAME);
const [$f4833395aa1bca1a$var$DialogProvider, $f4833395aa1bca1a$var$useDialogContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$DIALOG_NAME);
const $f4833395aa1bca1a$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = $aJCrN$react.useRef(null);
    const contentRef = $aJCrN$react.useRef(null);
    const [open = false, setOpen] = $aJCrN$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $aJCrN$radixuireactid.useId(),
        titleId: $aJCrN$radixuireactid.useId(),
        descriptionId: $aJCrN$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $aJCrN$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$3ddf2d174ce01153, {
    displayName: $f4833395aa1bca1a$var$DIALOG_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TRIGGER_NAME = 'DialogTrigger';
const $f4833395aa1bca1a$export$2e1e1122cf0cba88 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$2e1e1122cf0cba88, {
    displayName: $f4833395aa1bca1a$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$PORTAL_NAME = 'DialogPortal';
const [$f4833395aa1bca1a$var$PortalProvider, $f4833395aa1bca1a$var$usePortalContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, {
    forceMount: undefined
});
const $f4833395aa1bca1a$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, $aJCrN$react.Children.map(children, (child)=>/*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
            present: forceMount || context.open
        }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactportal.Portal, {
            asChild: true,
            container: container
        }, child))
    ));
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$dad7c95542bacce0, {
    displayName: $f4833395aa1bca1a$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$OVERLAY_NAME = 'DialogOverlay';
const $f4833395aa1bca1a$export$bd1d06c79be19e17 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogOverlayImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$bd1d06c79be19e17, {
    displayName: $f4833395aa1bca1a$var$OVERLAY_NAME
});
const $f4833395aa1bca1a$var$DialogOverlayImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    $aJCrN$react.createElement($aJCrN$reactremovescroll.RemoveScroll, {
        as: $aJCrN$radixuireactslot.Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CONTENT_NAME = 'DialogContent';
const $f4833395aa1bca1a$export$b6d9565de1e068cf = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentNonModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$b6d9565de1e068cf, {
    displayName: $f4833395aa1bca1a$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    $aJCrN$react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return $aJCrN$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $aJCrN$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentNonModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = $aJCrN$react.useRef(false);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) hasInteractedOutsideRef.current = true; // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            //
            // We use `onInteractOutside` as some browsers also
            // focus on pointer down, creating the same issue.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, __scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $aJCrN$radixuireactfocusguards.useFocusGuards();
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$react.Fragment, null, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactfocusscope.FocusScope, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactdismissablelayer.DismissableLayer, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TITLE_NAME = 'DialogTitle';
const $f4833395aa1bca1a$export$16f7638e4a34b909 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.h2, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$16f7638e4a34b909, {
    displayName: $f4833395aa1bca1a$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DESCRIPTION_NAME = 'DialogDescription';
const $f4833395aa1bca1a$export$94e94c2ec2c954d5 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.p, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$94e94c2ec2c954d5, {
    displayName: $f4833395aa1bca1a$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CLOSE_NAME = 'DialogClose';
const $f4833395aa1bca1a$export$fba2fb7cd781b7ac = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$fba2fb7cd781b7ac, {
    displayName: $f4833395aa1bca1a$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $f4833395aa1bca1a$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $f4833395aa1bca1a$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$f4833395aa1bca1a$export$69b62a49393917d6, $f4833395aa1bca1a$var$useWarningContext] = $aJCrN$radixuireactcontext.createContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME, {
    contentName: $f4833395aa1bca1a$var$CONTENT_NAME,
    titleName: $f4833395aa1bca1a$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $f4833395aa1bca1a$var$TitleWarning = ({ titleId: titleId  })=>{
    const titleWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    $aJCrN$react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) throw new Error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
const $f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME = 'DialogDescriptionWarning';
const $f4833395aa1bca1a$var$DescriptionWarning = ({ contentRef: contentRef , descriptionId: descriptionId  })=>{
    const descriptionWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    $aJCrN$react.useEffect(()=>{
        var _contentRef$current;
        const describedById = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'); // if we have an id and the user hasn't set aria-describedby={undefined}
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
const $f4833395aa1bca1a$export$be92b6f5f03c0fe9 = $f4833395aa1bca1a$export$3ddf2d174ce01153;
const $f4833395aa1bca1a$export$41fb9f06171c75f4 = $f4833395aa1bca1a$export$2e1e1122cf0cba88;
const $f4833395aa1bca1a$export$602eac185826482c = $f4833395aa1bca1a$export$dad7c95542bacce0;
const $f4833395aa1bca1a$export$c6fdb837b070b4ff = $f4833395aa1bca1a$export$bd1d06c79be19e17;
const $f4833395aa1bca1a$export$7c6e2c02157bb7d2 = $f4833395aa1bca1a$export$b6d9565de1e068cf;
const $f4833395aa1bca1a$export$f99233281efd08a0 = $f4833395aa1bca1a$export$16f7638e4a34b909;
const $f4833395aa1bca1a$export$393edc798c47379d = $f4833395aa1bca1a$export$94e94c2ec2c954d5;
const $f4833395aa1bca1a$export$f39c2d165cd861fe = $f4833395aa1bca1a$export$fba2fb7cd781b7ac;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $9g4ps$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useDirection", () => $cc45c1b701a63adc$export$b39126d51d94e6f3);
$parcel$export(module.exports, "Provider", () => $cc45c1b701a63adc$export$2881499e37b75b9a);
$parcel$export(module.exports, "DirectionProvider", () => $cc45c1b701a63adc$export$c760c09fdd558351);

const $cc45c1b701a63adc$var$DirectionContext = /*#__PURE__*/ $9g4ps$react.createContext(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $cc45c1b701a63adc$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $9g4ps$react.createElement($cc45c1b701a63adc$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $cc45c1b701a63adc$export$b39126d51d94e6f3(localDir) {
    const globalDir = $9g4ps$react.useContext($cc45c1b701a63adc$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $cc45c1b701a63adc$export$2881499e37b75b9a = $cc45c1b701a63adc$export$c760c09fdd558351;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 53382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $7dQ7Q$babelruntimehelpersextends = __webpack_require__(42791);
var $7dQ7Q$react = __webpack_require__(18038);
var $7dQ7Q$radixuiprimitive = __webpack_require__(7826);
var $7dQ7Q$radixuireactcomposerefs = __webpack_require__(12099);
var $7dQ7Q$radixuireactcontext = __webpack_require__(80018);
var $7dQ7Q$radixuireactusecontrollablestate = __webpack_require__(3929);
var $7dQ7Q$radixuireactprimitive = __webpack_require__(92266);
var $7dQ7Q$radixuireactmenu = __webpack_require__(21784);
var $7dQ7Q$radixuireactid = __webpack_require__(41442);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDropdownMenuScope", () => $d1bf075a6b218014$export$c0623cd925aeb687);
$parcel$export(module.exports, "DropdownMenu", () => $d1bf075a6b218014$export$e44a253a59704894);
$parcel$export(module.exports, "DropdownMenuTrigger", () => $d1bf075a6b218014$export$d2469213b3befba9);
$parcel$export(module.exports, "DropdownMenuPortal", () => $d1bf075a6b218014$export$cd369b4d4d54efc9);
$parcel$export(module.exports, "DropdownMenuContent", () => $d1bf075a6b218014$export$6e76d93a37c01248);
$parcel$export(module.exports, "DropdownMenuGroup", () => $d1bf075a6b218014$export$246bebaba3a2f70e);
$parcel$export(module.exports, "DropdownMenuLabel", () => $d1bf075a6b218014$export$76e48c5b57f24495);
$parcel$export(module.exports, "DropdownMenuItem", () => $d1bf075a6b218014$export$ed97964d1871885d);
$parcel$export(module.exports, "DropdownMenuCheckboxItem", () => $d1bf075a6b218014$export$53a69729da201fa9);
$parcel$export(module.exports, "DropdownMenuRadioGroup", () => $d1bf075a6b218014$export$3323ad73d55f587e);
$parcel$export(module.exports, "DropdownMenuRadioItem", () => $d1bf075a6b218014$export$e4f69b41b1637536);
$parcel$export(module.exports, "DropdownMenuItemIndicator", () => $d1bf075a6b218014$export$42355ae145153fb6);
$parcel$export(module.exports, "DropdownMenuSeparator", () => $d1bf075a6b218014$export$da160178fd3bc7e9);
$parcel$export(module.exports, "DropdownMenuArrow", () => $d1bf075a6b218014$export$34b8980744021ec5);
$parcel$export(module.exports, "DropdownMenuSub", () => $d1bf075a6b218014$export$2f307d81a64f5442);
$parcel$export(module.exports, "DropdownMenuSubTrigger", () => $d1bf075a6b218014$export$21dcb7ec56f874cf);
$parcel$export(module.exports, "DropdownMenuSubContent", () => $d1bf075a6b218014$export$f34ec8bc2482cc5f);
$parcel$export(module.exports, "Root", () => $d1bf075a6b218014$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $d1bf075a6b218014$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $d1bf075a6b218014$export$602eac185826482c);
$parcel$export(module.exports, "Content", () => $d1bf075a6b218014$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Group", () => $d1bf075a6b218014$export$eb2fcfdbd7ba97d4);
$parcel$export(module.exports, "Label", () => $d1bf075a6b218014$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Item", () => $d1bf075a6b218014$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "CheckboxItem", () => $d1bf075a6b218014$export$16ce288f89fa631c);
$parcel$export(module.exports, "RadioGroup", () => $d1bf075a6b218014$export$a98f0dcb43a68a25);
$parcel$export(module.exports, "RadioItem", () => $d1bf075a6b218014$export$371ab307eab489c0);
$parcel$export(module.exports, "ItemIndicator", () => $d1bf075a6b218014$export$c3468e2714d175fa);
$parcel$export(module.exports, "Separator", () => $d1bf075a6b218014$export$1ff3c3f08ae963c0);
$parcel$export(module.exports, "Arrow", () => $d1bf075a6b218014$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Sub", () => $d1bf075a6b218014$export$d7a01e11500dfb6f);
$parcel$export(module.exports, "SubTrigger", () => $d1bf075a6b218014$export$2ea8a7a591ac5eac);
$parcel$export(module.exports, "SubContent", () => $d1bf075a6b218014$export$6d4de93b380beddf);










/* -------------------------------------------------------------------------------------------------
 * DropdownMenu
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$DROPDOWN_MENU_NAME = 'DropdownMenu';
const [$d1bf075a6b218014$var$createDropdownMenuContext, $d1bf075a6b218014$export$c0623cd925aeb687] = $7dQ7Q$radixuireactcontext.createContextScope($d1bf075a6b218014$var$DROPDOWN_MENU_NAME, [
    $7dQ7Q$radixuireactmenu.createMenuScope
]);
const $d1bf075a6b218014$var$useMenuScope = $7dQ7Q$radixuireactmenu.createMenuScope();
const [$d1bf075a6b218014$var$DropdownMenuProvider, $d1bf075a6b218014$var$useDropdownMenuContext] = $d1bf075a6b218014$var$createDropdownMenuContext($d1bf075a6b218014$var$DROPDOWN_MENU_NAME);
const $d1bf075a6b218014$export$e44a253a59704894 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , dir: dir , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const triggerRef = $7dQ7Q$react.useRef(null);
    const [open = false, setOpen] = $7dQ7Q$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $7dQ7Q$react.createElement($d1bf075a6b218014$var$DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: $7dQ7Q$radixuireactid.useId(),
        triggerRef: triggerRef,
        contentId: $7dQ7Q$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $7dQ7Q$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Root, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, {
        open: open,
        onOpenChange: setOpen,
        dir: dir,
        modal: modal
    }), children));
};
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$e44a253a59704894, {
    displayName: $d1bf075a6b218014$var$DROPDOWN_MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$TRIGGER_NAME = 'DropdownMenuTrigger';
const $d1bf075a6b218014$export$d2469213b3befba9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , disabled: disabled = false , ...triggerProps } = props;
    const context = $d1bf075a6b218014$var$useDropdownMenuContext($d1bf075a6b218014$var$TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Anchor, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        asChild: true
    }, menuScope), /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : undefined,
        "data-state": context.open ? 'open' : 'closed',
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled
    }, triggerProps, {
        ref: $7dQ7Q$radixuireactcomposerefs.composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onPointerDown, (event)=>{
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onOpenToggle(); // prevent trigger focusing when opening
                // this allows the content to be given focus without competition
                if (!context.open) event.preventDefault();
            }
        }),
        onKeyDown: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            if (disabled) return;
            if ([
                'Enter',
                ' '
            ].includes(event.key)) context.onOpenToggle();
            if (event.key === 'ArrowDown') context.onOpenChange(true); // prevent keydown from scrolling window / first focused item to execute
            // that keydown (inadvertently closing the menu)
            if ([
                'Enter',
                ' ',
                'ArrowDown'
            ].includes(event.key)) event.preventDefault();
        })
    })));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$d2469213b3befba9, {
    displayName: $d1bf075a6b218014$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$PORTAL_NAME = 'DropdownMenuPortal';
const $d1bf075a6b218014$export$cd369b4d4d54efc9 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...portalProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Portal, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, portalProps));
};
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$cd369b4d4d54efc9, {
    displayName: $d1bf075a6b218014$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$CONTENT_NAME = 'DropdownMenuContent';
const $d1bf075a6b218014$export$6e76d93a37c01248 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...contentProps } = props;
    const context = $d1bf075a6b218014$var$useDropdownMenuContext($d1bf075a6b218014$var$CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = $7dQ7Q$react.useRef(false);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Content, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        id: context.contentId,
        "aria-labelledby": context.triggerId
    }, menuScope, contentProps, {
        ref: forwardedRef,
        onCloseAutoFocus: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            if (!hasInteractedOutsideRef.current) (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
            hasInteractedOutsideRef.current = false; // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
        }),
        onInteractOutside: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom property
            ['--radix-dropdown-menu-content-transform-origin']: 'var(--radix-popper-transform-origin)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$6e76d93a37c01248, {
    displayName: $d1bf075a6b218014$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$GROUP_NAME = 'DropdownMenuGroup';
const $d1bf075a6b218014$export$246bebaba3a2f70e = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...groupProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Group, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$246bebaba3a2f70e, {
    displayName: $d1bf075a6b218014$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$LABEL_NAME = 'DropdownMenuLabel';
const $d1bf075a6b218014$export$76e48c5b57f24495 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...labelProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Label, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$76e48c5b57f24495, {
    displayName: $d1bf075a6b218014$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$ITEM_NAME = 'DropdownMenuItem';
const $d1bf075a6b218014$export$ed97964d1871885d = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Item, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, itemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$ed97964d1871885d, {
    displayName: $d1bf075a6b218014$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$CHECKBOX_ITEM_NAME = 'DropdownMenuCheckboxItem';
const $d1bf075a6b218014$export$53a69729da201fa9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...checkboxItemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.CheckboxItem, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, checkboxItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$53a69729da201fa9, {
    displayName: $d1bf075a6b218014$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$RADIO_GROUP_NAME = 'DropdownMenuRadioGroup';
const $d1bf075a6b218014$export$3323ad73d55f587e = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioGroupProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.RadioGroup, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, radioGroupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$3323ad73d55f587e, {
    displayName: $d1bf075a6b218014$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$RADIO_ITEM_NAME = 'DropdownMenuRadioItem';
const $d1bf075a6b218014$export$e4f69b41b1637536 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioItemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.RadioItem, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, radioItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$e4f69b41b1637536, {
    displayName: $d1bf075a6b218014$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$INDICATOR_NAME = 'DropdownMenuItemIndicator';
const $d1bf075a6b218014$export$42355ae145153fb6 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemIndicatorProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.ItemIndicator, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$42355ae145153fb6, {
    displayName: $d1bf075a6b218014$var$INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SEPARATOR_NAME = 'DropdownMenuSeparator';
const $d1bf075a6b218014$export$da160178fd3bc7e9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...separatorProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Separator, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$da160178fd3bc7e9, {
    displayName: $d1bf075a6b218014$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$ARROW_NAME = 'DropdownMenuArrow';
const $d1bf075a6b218014$export$34b8980744021ec5 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...arrowProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Arrow, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$34b8980744021ec5, {
    displayName: $d1bf075a6b218014$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$export$2f307d81a64f5442 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , open: openProp , onOpenChange: onOpenChange , defaultOpen: defaultOpen  } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const [open = false, setOpen] = $7dQ7Q$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Sub, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, {
        open: open,
        onOpenChange: setOpen
    }), children);
};
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SUB_TRIGGER_NAME = 'DropdownMenuSubTrigger';
const $d1bf075a6b218014$export$21dcb7ec56f874cf = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subTriggerProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.SubTrigger, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, subTriggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$21dcb7ec56f874cf, {
    displayName: $d1bf075a6b218014$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SUB_CONTENT_NAME = 'DropdownMenuSubContent';
const $d1bf075a6b218014$export$f34ec8bc2482cc5f = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subContentProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.SubContent, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, subContentProps, {
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom property
            ['--radix-dropdown-menu-content-transform-origin']: 'var(--radix-popper-transform-origin)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$f34ec8bc2482cc5f, {
    displayName: $d1bf075a6b218014$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$export$be92b6f5f03c0fe9 = $d1bf075a6b218014$export$e44a253a59704894;
const $d1bf075a6b218014$export$41fb9f06171c75f4 = $d1bf075a6b218014$export$d2469213b3befba9;
const $d1bf075a6b218014$export$602eac185826482c = $d1bf075a6b218014$export$cd369b4d4d54efc9;
const $d1bf075a6b218014$export$7c6e2c02157bb7d2 = $d1bf075a6b218014$export$6e76d93a37c01248;
const $d1bf075a6b218014$export$eb2fcfdbd7ba97d4 = $d1bf075a6b218014$export$246bebaba3a2f70e;
const $d1bf075a6b218014$export$b04be29aa201d4f5 = $d1bf075a6b218014$export$76e48c5b57f24495;
const $d1bf075a6b218014$export$6d08773d2e66f8f2 = $d1bf075a6b218014$export$ed97964d1871885d;
const $d1bf075a6b218014$export$16ce288f89fa631c = $d1bf075a6b218014$export$53a69729da201fa9;
const $d1bf075a6b218014$export$a98f0dcb43a68a25 = $d1bf075a6b218014$export$3323ad73d55f587e;
const $d1bf075a6b218014$export$371ab307eab489c0 = $d1bf075a6b218014$export$e4f69b41b1637536;
const $d1bf075a6b218014$export$c3468e2714d175fa = $d1bf075a6b218014$export$42355ae145153fb6;
const $d1bf075a6b218014$export$1ff3c3f08ae963c0 = $d1bf075a6b218014$export$da160178fd3bc7e9;
const $d1bf075a6b218014$export$21b07c8f274aebd5 = $d1bf075a6b218014$export$34b8980744021ec5;
const $d1bf075a6b218014$export$d7a01e11500dfb6f = $d1bf075a6b218014$export$2f307d81a64f5442;
const $d1bf075a6b218014$export$2ea8a7a591ac5eac = $d1bf075a6b218014$export$21dcb7ec56f874cf;
const $d1bf075a6b218014$export$6d4de93b380beddf = $d1bf075a6b218014$export$f34ec8bc2482cc5f;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 21784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cnSS2$babelruntimehelpersextends = __webpack_require__(42791);
var $cnSS2$react = __webpack_require__(18038);
var $cnSS2$radixuiprimitive = __webpack_require__(7826);
var $cnSS2$radixuireactcollection = __webpack_require__(77996);
var $cnSS2$radixuireactcomposerefs = __webpack_require__(12099);
var $cnSS2$radixuireactcontext = __webpack_require__(80018);
var $cnSS2$radixuireactdirection = __webpack_require__(2374);
var $cnSS2$radixuireactdismissablelayer = __webpack_require__(9524);
var $cnSS2$radixuireactfocusguards = __webpack_require__(80704);
var $cnSS2$radixuireactfocusscope = __webpack_require__(34724);
var $cnSS2$radixuireactid = __webpack_require__(41442);
var $cnSS2$radixuireactpopper = __webpack_require__(27553);
var $cnSS2$radixuireactportal = __webpack_require__(67338);
var $cnSS2$radixuireactpresence = __webpack_require__(93805);
var $cnSS2$radixuireactprimitive = __webpack_require__(92266);
var $cnSS2$radixuireactrovingfocus = __webpack_require__(59684);
var $cnSS2$radixuireactslot = __webpack_require__(73193);
var $cnSS2$radixuireactusecallbackref = __webpack_require__(47440);
var $cnSS2$ariahidden = __webpack_require__(77726);
var $cnSS2$reactremovescroll = __webpack_require__(61704);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createMenuScope", () => $213e4d2df823067d$export$4027731b685e72eb);
$parcel$export(module.exports, "Menu", () => $213e4d2df823067d$export$d9b273488cd8ce6f);
$parcel$export(module.exports, "MenuAnchor", () => $213e4d2df823067d$export$9fa5ebd18bee4d43);
$parcel$export(module.exports, "MenuPortal", () => $213e4d2df823067d$export$793392f970497feb);
$parcel$export(module.exports, "MenuContent", () => $213e4d2df823067d$export$479f0f2f71193efe);
$parcel$export(module.exports, "MenuGroup", () => $213e4d2df823067d$export$22a631d1f72787bb);
$parcel$export(module.exports, "MenuLabel", () => $213e4d2df823067d$export$dd37bec0e8a99143);
$parcel$export(module.exports, "MenuItem", () => $213e4d2df823067d$export$2ce376c2cc3355c8);
$parcel$export(module.exports, "MenuCheckboxItem", () => $213e4d2df823067d$export$f6f243521332502d);
$parcel$export(module.exports, "MenuRadioGroup", () => $213e4d2df823067d$export$ea2200c9eee416b3);
$parcel$export(module.exports, "MenuRadioItem", () => $213e4d2df823067d$export$69bd225e9817f6d0);
$parcel$export(module.exports, "MenuItemIndicator", () => $213e4d2df823067d$export$a2593e23056970a3);
$parcel$export(module.exports, "MenuSeparator", () => $213e4d2df823067d$export$1cec7dcdd713e220);
$parcel$export(module.exports, "MenuArrow", () => $213e4d2df823067d$export$bcdda4773debf5fa);
$parcel$export(module.exports, "MenuSub", () => $213e4d2df823067d$export$71bdb9d1e2909932);
$parcel$export(module.exports, "MenuSubTrigger", () => $213e4d2df823067d$export$5fbbb3ba7297405f);
$parcel$export(module.exports, "MenuSubContent", () => $213e4d2df823067d$export$e7142ab31822bde6);
$parcel$export(module.exports, "Root", () => $213e4d2df823067d$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Anchor", () => $213e4d2df823067d$export$b688253958b8dfe7);
$parcel$export(module.exports, "Portal", () => $213e4d2df823067d$export$602eac185826482c);
$parcel$export(module.exports, "Content", () => $213e4d2df823067d$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Group", () => $213e4d2df823067d$export$eb2fcfdbd7ba97d4);
$parcel$export(module.exports, "Label", () => $213e4d2df823067d$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Item", () => $213e4d2df823067d$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "CheckboxItem", () => $213e4d2df823067d$export$16ce288f89fa631c);
$parcel$export(module.exports, "RadioGroup", () => $213e4d2df823067d$export$a98f0dcb43a68a25);
$parcel$export(module.exports, "RadioItem", () => $213e4d2df823067d$export$371ab307eab489c0);
$parcel$export(module.exports, "ItemIndicator", () => $213e4d2df823067d$export$c3468e2714d175fa);
$parcel$export(module.exports, "Separator", () => $213e4d2df823067d$export$1ff3c3f08ae963c0);
$parcel$export(module.exports, "Arrow", () => $213e4d2df823067d$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Sub", () => $213e4d2df823067d$export$d7a01e11500dfb6f);
$parcel$export(module.exports, "SubTrigger", () => $213e4d2df823067d$export$2ea8a7a591ac5eac);
$parcel$export(module.exports, "SubContent", () => $213e4d2df823067d$export$6d4de93b380beddf);






















const $213e4d2df823067d$var$SELECTION_KEYS = [
    'Enter',
    ' '
];
const $213e4d2df823067d$var$FIRST_KEYS = [
    'ArrowDown',
    'PageUp',
    'Home'
];
const $213e4d2df823067d$var$LAST_KEYS = [
    'ArrowUp',
    'PageDown',
    'End'
];
const $213e4d2df823067d$var$FIRST_LAST_KEYS = [
    ...$213e4d2df823067d$var$FIRST_KEYS,
    ...$213e4d2df823067d$var$LAST_KEYS
];
const $213e4d2df823067d$var$SUB_OPEN_KEYS = {
    ltr: [
        ...$213e4d2df823067d$var$SELECTION_KEYS,
        'ArrowRight'
    ],
    rtl: [
        ...$213e4d2df823067d$var$SELECTION_KEYS,
        'ArrowLeft'
    ]
};
const $213e4d2df823067d$var$SUB_CLOSE_KEYS = {
    ltr: [
        'ArrowLeft'
    ],
    rtl: [
        'ArrowRight'
    ]
};
/* -------------------------------------------------------------------------------------------------
 * Menu
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$MENU_NAME = 'Menu';
const [$213e4d2df823067d$var$Collection, $213e4d2df823067d$var$useCollection, $213e4d2df823067d$var$createCollectionScope] = $cnSS2$radixuireactcollection.createCollection($213e4d2df823067d$var$MENU_NAME);
const [$213e4d2df823067d$var$createMenuContext, $213e4d2df823067d$export$4027731b685e72eb] = $cnSS2$radixuireactcontext.createContextScope($213e4d2df823067d$var$MENU_NAME, [
    $213e4d2df823067d$var$createCollectionScope,
    $cnSS2$radixuireactpopper.createPopperScope,
    $cnSS2$radixuireactrovingfocus.createRovingFocusGroupScope
]);
const $213e4d2df823067d$var$usePopperScope = $cnSS2$radixuireactpopper.createPopperScope();
const $213e4d2df823067d$var$useRovingFocusGroupScope = $cnSS2$radixuireactrovingfocus.createRovingFocusGroupScope();
const [$213e4d2df823067d$var$MenuProvider, $213e4d2df823067d$var$useMenuContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$MENU_NAME);
const [$213e4d2df823067d$var$MenuRootProvider, $213e4d2df823067d$var$useMenuRootContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$MENU_NAME);
const $213e4d2df823067d$export$d9b273488cd8ce6f = (props)=>{
    const { __scopeMenu: __scopeMenu , open: open = false , children: children , dir: dir , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const [content, setContent] = $cnSS2$react.useState(null);
    const isUsingKeyboardRef = $cnSS2$react.useRef(false);
    const handleOpenChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onOpenChange);
    const direction = $cnSS2$radixuireactdirection.useDirection(dir);
    $cnSS2$react.useEffect(()=>{
        // Capture phase ensures we set the boolean before any side effects execute
        // in response to the key or pointer event as they might depend on this value.
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener('pointerdown', handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener('pointermove', handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false
        ;
        document.addEventListener('keydown', handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown, {
                capture: true
            });
            document.removeEventListener('pointerdown', handlePointer, {
                capture: true
            });
            document.removeEventListener('pointermove', handlePointer, {
                capture: true
            });
        };
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Root, popperScope, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootProvider, {
        scope: __scopeMenu,
        onClose: $cnSS2$react.useCallback(()=>handleOpenChange(false)
        , [
            handleOpenChange
        ]),
        isUsingKeyboardRef: isUsingKeyboardRef,
        dir: direction,
        modal: modal
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$d9b273488cd8ce6f, {
    displayName: $213e4d2df823067d$var$MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuAnchor
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ANCHOR_NAME = 'MenuAnchor';
const $213e4d2df823067d$export$9fa5ebd18bee4d43 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...anchorProps } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Anchor, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, popperScope, anchorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$9fa5ebd18bee4d43, {
    displayName: $213e4d2df823067d$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$PORTAL_NAME = 'MenuPortal';
const [$213e4d2df823067d$var$PortalProvider, $213e4d2df823067d$var$usePortalContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$PORTAL_NAME, {
    forceMount: undefined
});
const $213e4d2df823067d$export$793392f970497feb = (props)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , children: children , container: container  } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$PORTAL_NAME, __scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$PortalProvider, {
        scope: __scopeMenu,
        forceMount: forceMount
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactportal.Portal, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$793392f970497feb, {
    displayName: $213e4d2df823067d$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuContent
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$CONTENT_NAME = 'MenuContent';
const [$213e4d2df823067d$var$MenuContentProvider, $213e4d2df823067d$var$useMenuContentContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$CONTENT_NAME);
const $213e4d2df823067d$export$479f0f2f71193efe = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $213e4d2df823067d$var$usePortalContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, rootContext.modal ? /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootContentModal, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootContentNonModal, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })))));
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuRootContentModal = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref); // Hide everything from ARIA except the `MenuContent`
    $cnSS2$react.useEffect(()=>{
        const content = ref.current;
        if (content) return $cnSS2$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure we're not trapping once it's been closed
        ,
        trapFocus: context.open // make sure to only disable pointer events when open
        ,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        , {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
const $213e4d2df823067d$var$MenuRootContentNonModal = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuContentImpl = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , loop: loop = false , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , disableOutsidePointerEvents: disableOutsidePointerEvents , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , disableOutsideScroll: disableOutsideScroll , ...contentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, __scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, __scopeMenu);
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = $213e4d2df823067d$var$useRovingFocusGroupScope(__scopeMenu);
    const getItems = $213e4d2df823067d$var$useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = $cnSS2$react.useState(null);
    const contentRef = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = $cnSS2$react.useRef(0);
    const searchRef = $cnSS2$react.useRef('');
    const pointerGraceTimerRef = $cnSS2$react.useRef(0);
    const pointerGraceIntentRef = $cnSS2$react.useRef(null);
    const pointerDirRef = $cnSS2$react.useRef('right');
    const lastPointerXRef = $cnSS2$react.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? $cnSS2$reactremovescroll.RemoveScroll : $cnSS2$react.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: $cnSS2$radixuireactslot.Slot,
        allowPinchZoom: true
    } : undefined;
    const handleTypeaheadSearch = (key)=>{
        var _items$find, _items$find2;
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled
        );
        const currentItem = document.activeElement;
        const currentMatch = (_items$find = items.find((item)=>item.ref.current === currentItem
        )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
        const values = items.map((item)=>item.textValue
        );
        const nextMatch = $213e4d2df823067d$var$getNextMatch(values, search, currentMatch);
        const newItem = (_items$find2 = items.find((item)=>item.textValue === nextMatch
        )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current; // Reset `searchRef` 1 second after it was last updated
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
        if (newItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>newItem.focus()
        );
    };
    $cnSS2$react.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []); // Make sure the whole tree has focus guards as our `MenuContent` may be
    // the last element in the DOM (beacuse of the `Portal`)
    $cnSS2$radixuireactfocusguards.useFocusGuards();
    const isPointerMovingToSubmenu = $cnSS2$react.useCallback((event)=>{
        var _pointerGraceIntentRe, _pointerGraceIntentRe2;
        const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
        return isMovingTowards && $213e4d2df823067d$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentProvider, {
        scope: __scopeMenu,
        searchRef: searchRef,
        onItemEnter: $cnSS2$react.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: $cnSS2$react.useCallback((event)=>{
            var _contentRef$current;
            if (isPointerMovingToSubmenu(event)) return;
            (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: $cnSS2$react.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef: pointerGraceTimerRef,
        onPointerGraceIntentChange: $cnSS2$react.useCallback((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, [])
    }, /*#__PURE__*/ $cnSS2$react.createElement(ScrollLockWrapper, scrollLockWrapperProps, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactfocusscope.FocusScope, {
        asChild: true,
        trapped: trapFocus,
        onMountAutoFocus: $cnSS2$radixuiprimitive.composeEventHandlers(onOpenAutoFocus, (event)=>{
            var _contentRef$current2;
            // when opening, explicitly focus the content area only and leave
            // `onEntryFocus` in  control of focusing first item
            event.preventDefault();
            (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
        }),
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactdismissablelayer.DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents: disableOutsidePointerEvents,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: onFocusOutside,
        onInteractOutside: onInteractOutside,
        onDismiss: onDismiss
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactrovingfocus.Root, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, rovingFocusGroupScope, {
        dir: rootContext.dir,
        orientation: "vertical",
        loop: loop,
        currentTabStopId: currentItemId,
        onCurrentTabStopIdChange: setCurrentItemId,
        onEntryFocus: (event)=>{
            // only focus first item when using keyboard
            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
        }
    }), /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Content, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menu",
        "aria-orientation": "vertical",
        "data-state": $213e4d2df823067d$var$getOpenState(context.open),
        "data-radix-menu-content": "",
        dir: rootContext.dir
    }, popperScope, contentProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(contentProps.onKeyDown, (event)=>{
            // submenu key events bubble through portals. We only care about keys in this menu.
            const target = event.target;
            const isKeyDownInside = target.closest('[data-radix-menu-content]') === event.currentTarget;
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            const isCharacterKey = event.key.length === 1;
            if (isKeyDownInside) {
                // menus should not be navigated using tab key so we prevent it
                if (event.key === 'Tab') event.preventDefault();
                if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
            } // focus first/last item based on key pressed
            const content = contentRef.current;
            if (event.target !== content) return;
            if (!$213e4d2df823067d$var$FIRST_LAST_KEYS.includes(event.key)) return;
            event.preventDefault();
            const items = getItems().filter((item)=>!item.disabled
            );
            const candidateNodes = items.map((item)=>item.ref.current
            );
            if ($213e4d2df823067d$var$LAST_KEYS.includes(event.key)) candidateNodes.reverse();
            $213e4d2df823067d$var$focusFirst(candidateNodes);
        }),
        onBlur: $cnSS2$radixuiprimitive.composeEventHandlers(props.onBlur, (event)=>{
            // clear search buffer when leaving the menu
            if (!event.currentTarget.contains(event.target)) {
                window.clearTimeout(timerRef.current);
                searchRef.current = '';
            }
        }),
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            const target = event.target;
            const pointerXHasChanged = lastPointerXRef.current !== event.clientX; // We don't use `event.movementX` for this check because Safari will
            // always return `0` on a pointer event.
            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                const newDir = event.clientX > lastPointerXRef.current ? 'right' : 'left';
                pointerDirRef.current = newDir;
                lastPointerXRef.current = event.clientX;
            }
        }))
    })))))));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$479f0f2f71193efe, {
    displayName: $213e4d2df823067d$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$GROUP_NAME = 'MenuGroup';
const $213e4d2df823067d$export$22a631d1f72787bb = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...groupProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "group"
    }, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$22a631d1f72787bb, {
    displayName: $213e4d2df823067d$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$LABEL_NAME = 'MenuLabel';
const $213e4d2df823067d$export$dd37bec0e8a99143 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...labelProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$dd37bec0e8a99143, {
    displayName: $213e4d2df823067d$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ITEM_NAME = 'MenuItem';
const $213e4d2df823067d$var$ITEM_SELECT = 'menu.itemSelect';
const $213e4d2df823067d$export$2ce376c2cc3355c8 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { disabled: disabled = false , onSelect: onSelect , ...itemProps } = props;
    const ref = $cnSS2$react.useRef(null);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$ITEM_NAME, props.__scopeMenu);
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$ITEM_NAME, props.__scopeMenu);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = $cnSS2$react.useRef(false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent($213e4d2df823067d$var$ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener($213e4d2df823067d$var$ITEM_SELECT, (event)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event)
            , {
                once: true
            });
            $cnSS2$radixuireactprimitive.dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) isPointerDownRef.current = false;
            else rootContext.onClose();
        }
    };
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuItemImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, itemProps, {
        ref: composedRefs,
        disabled: disabled,
        onClick: $cnSS2$radixuiprimitive.composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            var _props$onPointerDown;
            (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
            isPointerDownRef.current = true;
        },
        onPointerUp: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerUp, (event)=>{
            var _event$currentTarget;
            // Pointer down can move to a different menu item which should activate it on pointer up.
            // We dispatch a click for selection to allow composition with click based triggers and to
            // prevent Firefox from getting stuck in text selection mode when the menu closes.
            if (!isPointerDownRef.current) (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
        }),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (disabled || isTypingAhead && event.key === ' ') return;
            if ($213e4d2df823067d$var$SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                /**
         * We prevent default browser behaviour for selection keys as they should trigger
         * a selection only:
         * - prevents space from scrolling the page.
         * - if keydown causes focus to move, prevents keydown from firing on the new target.
         */ event.preventDefault();
            }
        })
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$2ce376c2cc3355c8, {
    displayName: $213e4d2df823067d$var$ITEM_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuItemImpl = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , disabled: disabled = false , textValue: textValue , ...itemProps } = props;
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = $213e4d2df823067d$var$useRovingFocusGroupScope(__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = $cnSS2$react.useState(false); // get the item's `.textContent` as default strategy for typeahead `textValue`
    const [textContent, setTextContent] = $cnSS2$react.useState('');
    $cnSS2$react.useEffect(()=>{
        const menuItem = ref.current;
        if (menuItem) {
            var _menuItem$textContent;
            setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : '').trim());
        }
    }, [
        itemProps.children
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled: disabled,
        textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactrovingfocus.Item, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !disabled
    }), /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitem",
        "data-highlighted": isFocused ? '' : undefined,
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined
    }, itemProps, {
        ref: composedRefs,
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            if (disabled) contentContext.onItemLeave(event);
            else {
                contentContext.onItemEnter(event);
                if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus();
                }
            }
        })),
        onPointerLeave: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerLeave, $213e4d2df823067d$var$whenMouse((event)=>contentContext.onItemLeave(event)
        )),
        onFocus: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: $cnSS2$radixuiprimitive.composeEventHandlers(props.onBlur, ()=>setIsFocused(false)
        )
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * MenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$CHECKBOX_ITEM_NAME = 'MenuCheckboxItem';
const $213e4d2df823067d$export$f6f243521332502d = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { checked: checked = false , onCheckedChange: onCheckedChange , ...checkboxItemProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$2ce376c2cc3355c8, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitemcheckbox",
        "aria-checked": $213e4d2df823067d$var$isIndeterminate(checked) ? 'mixed' : checked
    }, checkboxItemProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(checked),
        onSelect: $cnSS2$radixuiprimitive.composeEventHandlers(checkboxItemProps.onSelect, ()=>onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($213e4d2df823067d$var$isIndeterminate(checked) ? true : !checked)
        , {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$f6f243521332502d, {
    displayName: $213e4d2df823067d$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$RADIO_GROUP_NAME = 'MenuRadioGroup';
const [$213e4d2df823067d$var$RadioGroupProvider, $213e4d2df823067d$var$useRadioGroupContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$RADIO_GROUP_NAME, {
    value: undefined,
    onValueChange: ()=>{}
});
const $213e4d2df823067d$export$ea2200c9eee416b3 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { value: value , onValueChange: onValueChange , ...groupProps } = props;
    const handleValueChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onValueChange);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$RadioGroupProvider, {
        scope: props.__scopeMenu,
        value: value,
        onValueChange: handleValueChange
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$22a631d1f72787bb, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, groupProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$ea2200c9eee416b3, {
    displayName: $213e4d2df823067d$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$RADIO_ITEM_NAME = 'MenuRadioItem';
const $213e4d2df823067d$export$69bd225e9817f6d0 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { value: value , ...radioItemProps } = props;
    const context = $213e4d2df823067d$var$useRadioGroupContext($213e4d2df823067d$var$RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$2ce376c2cc3355c8, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitemradio",
        "aria-checked": checked
    }, radioItemProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(checked),
        onSelect: $cnSS2$radixuiprimitive.composeEventHandlers(radioItemProps.onSelect, ()=>{
            var _context$onValueChang;
            return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
        }, {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$69bd225e9817f6d0, {
    displayName: $213e4d2df823067d$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ITEM_INDICATOR_NAME = 'MenuItemIndicator';
const [$213e4d2df823067d$var$ItemIndicatorProvider, $213e4d2df823067d$var$useItemIndicatorContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$ITEM_INDICATOR_NAME, {
    checked: false
});
const $213e4d2df823067d$export$a2593e23056970a3 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , ...itemIndicatorProps } = props;
    const indicatorContext = $213e4d2df823067d$var$useItemIndicatorContext($213e4d2df823067d$var$ITEM_INDICATOR_NAME, __scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || $213e4d2df823067d$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, itemIndicatorProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(indicatorContext.checked)
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$a2593e23056970a3, {
    displayName: $213e4d2df823067d$var$ITEM_INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SEPARATOR_NAME = 'MenuSeparator';
const $213e4d2df823067d$export$1cec7dcdd713e220 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...separatorProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "separator",
        "aria-orientation": "horizontal"
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$1cec7dcdd713e220, {
    displayName: $213e4d2df823067d$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ARROW_NAME = 'MenuArrow';
const $213e4d2df823067d$export$bcdda4773debf5fa = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...arrowProps } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Arrow, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$bcdda4773debf5fa, {
    displayName: $213e4d2df823067d$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSub
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_NAME = 'MenuSub';
const [$213e4d2df823067d$var$MenuSubProvider, $213e4d2df823067d$var$useMenuSubContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$SUB_NAME);
const $213e4d2df823067d$export$71bdb9d1e2909932 = (props)=>{
    const { __scopeMenu: __scopeMenu , children: children , open: open = false , onOpenChange: onOpenChange  } = props;
    const parentMenuContext = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$SUB_NAME, __scopeMenu);
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = $cnSS2$react.useState(null);
    const [content, setContent] = $cnSS2$react.useState(null);
    const handleOpenChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onOpenChange); // Prevent the parent menu from reopening with open submenus.
    $cnSS2$react.useEffect(()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false)
        ;
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Root, popperScope, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuSubProvider, {
        scope: __scopeMenu,
        contentId: $cnSS2$radixuireactid.useId(),
        triggerId: $cnSS2$radixuireactid.useId(),
        trigger: trigger,
        onTriggerChange: setTrigger
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$71bdb9d1e2909932, {
    displayName: $213e4d2df823067d$var$SUB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_TRIGGER_NAME = 'MenuSubTrigger';
const $213e4d2df823067d$export$5fbbb3ba7297405f = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = $213e4d2df823067d$var$useMenuSubContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = $cnSS2$react.useRef(null);
    const { pointerGraceTimerRef: pointerGraceTimerRef , onPointerGraceIntentChange: onPointerGraceIntentChange  } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = $cnSS2$react.useCallback(()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    $cnSS2$react.useEffect(()=>clearOpenTimer
    , [
        clearOpenTimer
    ]);
    $cnSS2$react.useEffect(()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$9fa5ebd18bee4d43, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, scope), /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuItemImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": $213e4d2df823067d$var$getOpenState(context.open)
    }, props, {
        ref: $cnSS2$radixuireactcomposerefs.composeRefs(forwardedRef, subContext.onTriggerChange) // This is redundant for mouse users but we cannot determine pointer type from
        ,
        onClick: (event)=>{
            var _props$onClick;
            (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
            if (props.disabled || event.defaultPrevented) return;
            /**
       * We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
       * and we rely heavily on `onFocusOutside` for submenus to close when switching
       * between separate submenus.
       */ event.currentTarget.focus();
            if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
                contentContext.onPointerGraceIntentChange(null);
                openTimerRef.current = window.setTimeout(()=>{
                    context.onOpenChange(true);
                    clearOpenTimer();
                }, 100);
            }
        })),
        onPointerLeave: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerLeave, $213e4d2df823067d$var$whenMouse((event)=>{
            var _context$content;
            clearOpenTimer();
            const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
            if (contentRect) {
                var _context$content2;
                // TODO: make sure to update this when we change positioning logic
                const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
                const rightSide = side === 'right';
                const bleed = rightSide ? -5 : 5;
                const contentNearEdge = contentRect[rightSide ? 'left' : 'right'];
                const contentFarEdge = contentRect[rightSide ? 'right' : 'left'];
                contentContext.onPointerGraceIntentChange({
                    area: [
                        // consistently within polygon bounds
                        {
                            x: event.clientX + bleed,
                            y: event.clientY
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.bottom
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.bottom
                        }
                    ],
                    side: side
                });
                window.clearTimeout(pointerGraceTimerRef.current);
                pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null)
                , 300);
            } else {
                contentContext.onTriggerLeave(event);
                if (event.defaultPrevented) return; // There's 100ms where the user may leave an item before the submenu was opened.
                contentContext.onPointerGraceIntentChange(null);
            }
        })),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (props.disabled || isTypingAhead && event.key === ' ') return;
            if ($213e4d2df823067d$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                var _context$content3;
                context.onOpenChange(true); // The trigger may hold focus if opened via pointer interaction
                // so we ensure content is given focus again when switching to keyboard.
                (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$5fbbb3ba7297405f, {
    displayName: $213e4d2df823067d$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_CONTENT_NAME = 'MenuSubContent';
const $213e4d2df823067d$export$e7142ab31822bde6 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $213e4d2df823067d$var$usePortalContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...subContentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const subContext = $213e4d2df823067d$var$useMenuSubContext($213e4d2df823067d$var$SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId
    }, subContentProps, {
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === 'rtl' ? 'left' : 'right',
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event)=>{
            var _ref$current;
            // when opening a submenu, focus content for keyboard users only
            if (rootContext.isUsingKeyboardRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
            event.preventDefault();
        } // The menu might close because of focusing another menu item in the parent menu. We
        ,
        onCloseAutoFocus: (event)=>event.preventDefault()
        ,
        onFocusOutside: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>{
            // We prevent closing when the trigger is focused to avoid triggering a re-open animation
            // on pointer interaction.
            if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onEscapeKeyDown, rootContext.onClose),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            // Submenu key events bubble through portals. We only care about keys in this menu.
            const isKeyDownInside = event.currentTarget.contains(event.target);
            const isCloseKey = $213e4d2df823067d$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
            if (isKeyDownInside && isCloseKey) {
                var _subContext$trigger;
                context.onOpenChange(false); // We focus manually because we prevented it in `onCloseAutoFocus`
                (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })))));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$e7142ab31822bde6, {
    displayName: $213e4d2df823067d$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $213e4d2df823067d$var$getOpenState(open) {
    return open ? 'open' : 'closed';
}
function $213e4d2df823067d$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $213e4d2df823067d$var$getCheckedState(checked) {
    return $213e4d2df823067d$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
function $213e4d2df823067d$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $213e4d2df823067d$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in all the values,
 * the search and the current match, and returns the next match (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through options starting with that character)
 *
 * We also reorder the values by wrapping the array around the current match.
 * This is so we always look forward from the current match, and picking the first
 * match will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current match from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current match still matches.
 */ function $213e4d2df823067d$var$getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = $213e4d2df823067d$var$wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch
    );
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextMatch !== currentMatch ? nextMatch : undefined;
}
// Determine if a point is inside of a polygon.
// Based on https://github.com/substack/point-in-polygon
function $213e4d2df823067d$var$isPointInPolygon(point, polygon) {
    const { x: x , y: y  } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y; // prettier-ignore
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function $213e4d2df823067d$var$isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return $213e4d2df823067d$var$isPointInPolygon(cursorPos, area);
}
function $213e4d2df823067d$var$whenMouse(handler) {
    return (event)=>event.pointerType === 'mouse' ? handler(event) : undefined
    ;
}
const $213e4d2df823067d$export$be92b6f5f03c0fe9 = $213e4d2df823067d$export$d9b273488cd8ce6f;
const $213e4d2df823067d$export$b688253958b8dfe7 = $213e4d2df823067d$export$9fa5ebd18bee4d43;
const $213e4d2df823067d$export$602eac185826482c = $213e4d2df823067d$export$793392f970497feb;
const $213e4d2df823067d$export$7c6e2c02157bb7d2 = $213e4d2df823067d$export$479f0f2f71193efe;
const $213e4d2df823067d$export$eb2fcfdbd7ba97d4 = $213e4d2df823067d$export$22a631d1f72787bb;
const $213e4d2df823067d$export$b04be29aa201d4f5 = $213e4d2df823067d$export$dd37bec0e8a99143;
const $213e4d2df823067d$export$6d08773d2e66f8f2 = $213e4d2df823067d$export$2ce376c2cc3355c8;
const $213e4d2df823067d$export$16ce288f89fa631c = $213e4d2df823067d$export$f6f243521332502d;
const $213e4d2df823067d$export$a98f0dcb43a68a25 = $213e4d2df823067d$export$ea2200c9eee416b3;
const $213e4d2df823067d$export$371ab307eab489c0 = $213e4d2df823067d$export$69bd225e9817f6d0;
const $213e4d2df823067d$export$c3468e2714d175fa = $213e4d2df823067d$export$a2593e23056970a3;
const $213e4d2df823067d$export$1ff3c3f08ae963c0 = $213e4d2df823067d$export$1cec7dcdd713e220;
const $213e4d2df823067d$export$21b07c8f274aebd5 = $213e4d2df823067d$export$bcdda4773debf5fa;
const $213e4d2df823067d$export$d7a01e11500dfb6f = $213e4d2df823067d$export$71bdb9d1e2909932;
const $213e4d2df823067d$export$2ea8a7a591ac5eac = $213e4d2df823067d$export$5fbbb3ba7297405f;
const $213e4d2df823067d$export$6d4de93b380beddf = $213e4d2df823067d$export$e7142ab31822bde6;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 59684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $9QJ9Y$babelruntimehelpersextends = __webpack_require__(42791);
var $9QJ9Y$react = __webpack_require__(18038);
var $9QJ9Y$radixuiprimitive = __webpack_require__(7826);
var $9QJ9Y$radixuireactcollection = __webpack_require__(77996);
var $9QJ9Y$radixuireactcomposerefs = __webpack_require__(12099);
var $9QJ9Y$radixuireactcontext = __webpack_require__(80018);
var $9QJ9Y$radixuireactid = __webpack_require__(41442);
var $9QJ9Y$radixuireactprimitive = __webpack_require__(92266);
var $9QJ9Y$radixuireactusecallbackref = __webpack_require__(47440);
var $9QJ9Y$radixuireactusecontrollablestate = __webpack_require__(3929);
var $9QJ9Y$radixuireactdirection = __webpack_require__(2374);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createRovingFocusGroupScope", () => $0063afae63b3fa70$export$c7109489551a4f4);
$parcel$export(module.exports, "RovingFocusGroup", () => $0063afae63b3fa70$export$8699f7c8af148338);
$parcel$export(module.exports, "RovingFocusGroupItem", () => $0063afae63b3fa70$export$ab9df7c53fe8454);
$parcel$export(module.exports, "Root", () => $0063afae63b3fa70$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Item", () => $0063afae63b3fa70$export$6d08773d2e66f8f2);











const $0063afae63b3fa70$var$ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus';
const $0063afae63b3fa70$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroup
 * -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$GROUP_NAME = 'RovingFocusGroup';
const [$0063afae63b3fa70$var$Collection, $0063afae63b3fa70$var$useCollection, $0063afae63b3fa70$var$createCollectionScope] = $9QJ9Y$radixuireactcollection.createCollection($0063afae63b3fa70$var$GROUP_NAME);
const [$0063afae63b3fa70$var$createRovingFocusGroupContext, $0063afae63b3fa70$export$c7109489551a4f4] = $9QJ9Y$radixuireactcontext.createContextScope($0063afae63b3fa70$var$GROUP_NAME, [
    $0063afae63b3fa70$var$createCollectionScope
]);
const [$0063afae63b3fa70$var$RovingFocusProvider, $0063afae63b3fa70$var$useRovingFocusContext] = $0063afae63b3fa70$var$createRovingFocusGroupContext($0063afae63b3fa70$var$GROUP_NAME);
const $0063afae63b3fa70$export$8699f7c8af148338 = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.Provider, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.Slot, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$RovingFocusGroupImpl, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($0063afae63b3fa70$export$8699f7c8af148338, {
    displayName: $0063afae63b3fa70$var$GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$RovingFocusGroupImpl = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , orientation: orientation , loop: loop = false , dir: dir , currentTabStopId: currentTabStopIdProp , defaultCurrentTabStopId: defaultCurrentTabStopId , onCurrentTabStopIdChange: onCurrentTabStopIdChange , onEntryFocus: onEntryFocus , ...groupProps } = props;
    const ref = $9QJ9Y$react.useRef(null);
    const composedRefs = $9QJ9Y$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const direction = $9QJ9Y$radixuireactdirection.useDirection(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = $9QJ9Y$radixuireactusecontrollablestate.useControllableState({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = $9QJ9Y$react.useState(false);
    const handleEntryFocus = $9QJ9Y$radixuireactusecallbackref.useCallbackRef(onEntryFocus);
    const getItems = $0063afae63b3fa70$var$useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = $9QJ9Y$react.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = $9QJ9Y$react.useState(0);
    $9QJ9Y$react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener($0063afae63b3fa70$var$ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener($0063afae63b3fa70$var$ENTRY_FOCUS, handleEntryFocus)
            ;
        }
    }, [
        handleEntryFocus
    ]);
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation: orientation,
        dir: direction,
        loop: loop,
        currentTabStopId: currentTabStopId,
        onItemFocus: $9QJ9Y$react.useCallback((tabStopId)=>setCurrentTabStopId(tabStopId)
        , [
            setCurrentTabStopId
        ]),
        onItemShiftTab: $9QJ9Y$react.useCallback(()=>setIsTabbingBackOut(true)
        , []),
        onFocusableItemAdd: $9QJ9Y$react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount + 1
            )
        , []),
        onFocusableItemRemove: $9QJ9Y$react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount - 1
            )
        , [])
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($9QJ9Y$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({
        tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
        "data-orientation": orientation
    }, groupProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...props.style
        },
        onMouseDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onMouseDown, ()=>{
            isClickFocusRef.current = true;
        }),
        onFocus: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onFocus, (event)=>{
            // We normally wouldn't need this check, because we already check
            // that the focus is on the current target and not bubbling to it.
            // We do this because Safari doesn't focus buttons when clicked, and
            // instead, the wrapper will get focused and not through a bubbling event.
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent($0063afae63b3fa70$var$ENTRY_FOCUS, $0063afae63b3fa70$var$EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                    const items = getItems().filter((item)=>item.focusable
                    );
                    const activeItem = items.find((item)=>item.active
                    );
                    const currentItem = items.find((item)=>item.id === currentTabStopId
                    );
                    const candidateItems = [
                        activeItem,
                        currentItem,
                        ...items
                    ].filter(Boolean);
                    const candidateNodes = candidateItems.map((item)=>item.ref.current
                    );
                    $0063afae63b3fa70$var$focusFirst(candidateNodes);
                }
            }
            isClickFocusRef.current = false;
        }),
        onBlur: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onBlur, ()=>setIsTabbingBackOut(false)
        )
    })));
});
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$ITEM_NAME = 'RovingFocusGroupItem';
const $0063afae63b3fa70$export$ab9df7c53fe8454 = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , focusable: focusable = true , active: active = false , ...itemProps } = props;
    const id = $9QJ9Y$radixuireactid.useId();
    const context = $0063afae63b3fa70$var$useRovingFocusContext($0063afae63b3fa70$var$ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = $0063afae63b3fa70$var$useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd: onFocusableItemAdd , onFocusableItemRemove: onFocusableItemRemove  } = context;
    $9QJ9Y$react.useEffect(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove()
            ;
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id: id,
        focusable: focusable,
        active: active
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($9QJ9Y$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({
        tabIndex: isCurrentTabStop ? 0 : -1,
        "data-orientation": context.orientation
    }, itemProps, {
        ref: forwardedRef,
        onMouseDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onMouseDown, (event)=>{
            // We prevent focusing non-focusable items on `mousedown`.
            // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
            if (!focusable) event.preventDefault(); // Safari doesn't focus a button when clicked so we run our logic on mousedown also
            else context.onItemFocus(id);
        }),
        onFocus: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onFocus, ()=>context.onItemFocus(id)
        ),
        onKeyDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            if (event.key === 'Tab' && event.shiftKey) {
                context.onItemShiftTab();
                return;
            }
            if (event.target !== event.currentTarget) return;
            const focusIntent = $0063afae63b3fa70$var$getFocusIntent(event, context.orientation, context.dir);
            if (focusIntent !== undefined) {
                event.preventDefault();
                const items = getItems().filter((item)=>item.focusable
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if (focusIntent === 'last') candidateNodes.reverse();
                else if (focusIntent === 'prev' || focusIntent === 'next') {
                    if (focusIntent === 'prev') candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? $0063afae63b3fa70$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>$0063afae63b3fa70$var$focusFirst(candidateNodes)
                );
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($0063afae63b3fa70$export$ab9df7c53fe8454, {
    displayName: $0063afae63b3fa70$var$ITEM_NAME
});
/* -----------------------------------------------------------------------------------------------*/ // prettier-ignore
const $0063afae63b3fa70$var$MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
};
function $0063afae63b3fa70$var$getDirectionAwareKey(key, dir) {
    if (dir !== 'rtl') return key;
    return key === 'ArrowLeft' ? 'ArrowRight' : key === 'ArrowRight' ? 'ArrowLeft' : key;
}
function $0063afae63b3fa70$var$getFocusIntent(event, orientation, dir) {
    const key = $0063afae63b3fa70$var$getDirectionAwareKey(event.key, dir);
    if (orientation === 'vertical' && [
        'ArrowLeft',
        'ArrowRight'
    ].includes(key)) return undefined;
    if (orientation === 'horizontal' && [
        'ArrowUp',
        'ArrowDown'
    ].includes(key)) return undefined;
    return $0063afae63b3fa70$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $0063afae63b3fa70$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $0063afae63b3fa70$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $0063afae63b3fa70$export$be92b6f5f03c0fe9 = $0063afae63b3fa70$export$8699f7c8af148338;
const $0063afae63b3fa70$export$6d08773d2e66f8f2 = $0063afae63b3fa70$export$ab9df7c53fe8454;




//# sourceMappingURL=index.js.map


/***/ })

};
;
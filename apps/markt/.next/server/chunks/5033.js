"use strict";
exports.id = 5033;
exports.ids = [5033];
exports.modules = {

/***/ 70577:
/***/ ((module) => {


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
    }
    return toStr.call(arr) === "[object Array]";
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, "constructor");
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj){}
    return typeof key === "undefined" || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
        });
    } else {
        target[options.name] = options.newValue;
    }
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
            return void 0;
        } else if (gOPD) {
            // In early versions of node, obj['__proto__'] is buggy when obj has
            // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
            return gOPD(obj, name).value;
        }
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
    }
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for(name in options){
                src = getProperty(target, name);
                copy = getProperty(options, name);
                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        setProperty(target, {
                            name: name,
                            newValue: extend(deep, clone, copy)
                        });
                    // Don't bring in undefined values
                    } else if (typeof copy !== "undefined") {
                        setProperty(target, {
                            name: name,
                            newValue: copy
                        });
                    }
                }
            }
        }
    }
    // Return the modified object
    return target;
};


/***/ }),

/***/ 96812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const regex = __webpack_require__(59481);
module.exports = BananaSlug;
const own = Object.hasOwnProperty;
function BananaSlug() {
    const self = this;
    if (!(self instanceof BananaSlug)) return new BananaSlug();
    self.reset();
}
/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
 * @return {string}       A unique slug string
 */ BananaSlug.prototype.slug = function(value, maintainCase) {
    const self = this;
    let slug = slugger(value, maintainCase === true);
    const originalSlug = slug;
    while(own.call(self.occurrences, slug)){
        self.occurrences[originalSlug]++;
        slug = originalSlug + "-" + self.occurrences[originalSlug];
    }
    self.occurrences[slug] = 0;
    return slug;
};
/**
 * Reset - Forget all previous slugs
 * @return void
 */ BananaSlug.prototype.reset = function() {
    this.occurrences = Object.create(null);
};
function slugger(string, maintainCase) {
    if (typeof string !== "string") return "";
    if (!maintainCase) string = string.toLowerCase();
    return string.replace(regex, "").replace(/ /g, "-");
}
BananaSlug.slug = slugger;


/***/ }),

/***/ 59481:
/***/ ((module) => {

// This module is generated by `script/`.
/* eslint-disable no-control-regex, no-misleading-character-class, no-useless-escape */ 
module.exports = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;


/***/ }),

/***/ 38326:
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ 
module.exports = function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};


/***/ }),

/***/ 65963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ toString)
/* harmony export */ });
/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */ /**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */ function toString(node, options) {
    var { includeImageAlt =true  } = options || {};
    return one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function one(node, includeImageAlt) {
    return node && typeof node === "object" && // @ts-ignore looks like a literal.
    (node.value || // @ts-ignore looks like an image.
    (includeImageAlt ? node.alt : "") || // @ts-ignore looks like a parent.
    "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function all(values, includeImageAlt) {
    /** @type {Array.<string>} */ var result = [];
    var index = -1;
    while(++index < values.length){
        result[index] = one(values[index], includeImageAlt);
    }
    return result.join("");
}


/***/ }),

/***/ 96611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ toc)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/github-slugger@1.5.0/node_modules/github-slugger/index.js
var github_slugger = __webpack_require__(96812);
var github_slugger_default = /*#__PURE__*/__webpack_require__.n(github_slugger);
// EXTERNAL MODULE: ../../node_modules/.pnpm/mdast-util-to-string@3.1.0/node_modules/mdast-util-to-string/index.js
var mdast_util_to_string = __webpack_require__(65963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unist-util-is@5.1.1/node_modules/unist-util-is/index.js
var unist_util_is = __webpack_require__(36293);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-visit-parents@4.1.1/node_modules/unist-util-visit-parents/color.js
/**
 * @param {string} d
 * @returns {string}
 */ function color(d) {
    return "\x1b[33m" + d + "\x1b[39m";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-visit-parents@4.1.1/node_modules/unist-util-visit-parents/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */ /**
 * @typedef {CONTINUE|SKIP|EXIT} Action Union of the action types
 * @typedef {number} Index Move to the sibling at index next (after node itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings (or next siblings, in case of reverse) Results less than 0 or greater than or equal to children.length stop traversing the parent
 * @typedef {[(Action|null|undefined|void)?, (Index|null|undefined)?]} ActionTuple List with one or two values, the first an action, the second an index.
 * @typedef {null|undefined|Action|Index|ActionTuple|void} VisitorResult Any value that can be returned from a visitor
 */ /**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {Array.<Parent>} ancestors Ancestors of node
 * @returns {VisitorResult}
 */ 

/**
 * Continue traversing as normal
 */ const CONTINUE = true;
/**
 * Do not traverse this node’s children
 */ const SKIP = "skip";
/**
 * Stop traversing immediately
 */ const EXIT = false;
const visitParents = /**
   * @type {(
   *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
   *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
   *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
   * )}
   */ /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        // @ts-ignore no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    var is = (0,unist_util_is/* convert */.O)(test);
    var step = reverse ? -1 : 1;
    factory(tree, null, [])();
    /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array.<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Object.<string, unknown>} */ var value = typeof node === "object" && node !== null ? node : {};
        /** @type {string} */ var name;
        if (typeof value.type === "string") {
            name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : undefined;
            Object.defineProperty(visit, "name", {
                value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
            });
        }
        return visit;
        function visit() {
            /** @type {ActionTuple} */ var result = [];
            /** @type {ActionTuple} */ var subresult;
            /** @type {number} */ var offset;
            /** @type {Array.<Parent>} */ var grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            if (node.children && result[0] !== SKIP) {
                // @ts-ignore looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-ignore looks like a parent.
                grandparents = parents.concat(node);
                // @ts-ignore looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === EXIT) {
                        return subresult;
                    }
                    offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
                }
            }
            return result;
        }
    }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === "number") {
        return [
            CONTINUE,
            value
        ];
    }
    return [
        value
    ];
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-visit@3.1.0/node_modules/unist-util-visit/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {number|null} index Position of `node` in `parent`
 * @param {Parent|null} parent Parent of `node`
 * @returns {VisitorResult}
 */ 

const visit = /**
   * @type {(
   *   (<T extends Node>(tree: Node, test: T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|import('unist-util-is').TestFunctionPredicate<T>>, visitor: Visitor<T>, reverse?: boolean) => void) &
   *   ((tree: Node, test: Test, visitor: Visitor<Node>, reverse?: boolean) => void) &
   *   ((tree: Node, visitor: Visitor<Node>, reverse?: boolean) => void)
   * )}
   */ /**
     * Visit children of tree which pass a test
     *
     * @param {Node} tree Abstract syntax tree to walk
     * @param {Test} test test Test node
     * @param {Visitor<Node>} visitor Function to run for each node
     * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    visitParents(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array.<Parent>} parents
       */ function overload(node, parents) {
        var parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-toc@6.1.0/node_modules/mdast-util-toc/lib/to-expression.js
/**
 * Transform a string into an applicable expression.
 *
 * @param {string} value
 * @returns {RegExp}
 */ function toExpression(value) {
    return new RegExp("^(" + value + ")$", "i");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-toc@6.1.0/node_modules/mdast-util-toc/lib/search.js
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('unist-util-visit').Visitor<Heading>} HeadingVisitor
 * @typedef {import('unist-util-is').Type} IsType
 * @typedef {import('unist-util-is').Props} IsProps
 * @typedef {import('unist-util-is').TestFunctionAnything} IsTestFunctionAnything
 *
 * @typedef SearchOptions
 * @property {string} [skip] Headings to skip, wrapped in `new RegExp('^(' + value + ')$', 'i')`. Any heading matching this expression will not be present in the table of contents.
 * @property {IsType|IsProps|IsTestFunctionAnything|Array.<IsType|IsProps|IsTestFunctionAnything>} [parents]
 * @property {Heading['depth']} [maxDepth=6] Maximum heading depth to include in the table of contents. This is inclusive: when set to `3`, level three headings are included (those with three hashes, `###`).
 *
 * @typedef SearchEntry
 * @property {Heading['depth']} depth
 * @property {Array.<PhrasingContent>} children
 * @property {string} id
 *
 * @typedef SearchResult
 * @property {number} index
 * @property {number} endIndex
 * @property {Array.<SearchEntry>} map
 */ 




const slugs = new (github_slugger_default())();
/**
 * Search a node for a toc.
 *
 * @param {Node} root
 * @param {RegExp|null} expression
 * @param {SearchOptions} settings
 * @returns {SearchResult}
 */ function search(root, expression, settings) {
    const skip = settings.skip && toExpression(settings.skip);
    const parents = (0,unist_util_is/* convert */.O)(settings.parents || ((d)=>d === root));
    /** @type {Array.<SearchEntry>} */ const map = [];
    /** @type {number|undefined} */ let index;
    /** @type {number} */ let endIndex;
    /** @type {Heading} */ let opening;
    slugs.reset();
    // Visit all headings in `root`.  We `slug` all headings (to account for
    // duplicates), but only create a TOC from top-level headings (by default).
    visit(root, "heading", onheading);
    return {
        index: index || -1,
        // <sindresorhus/eslint-plugin-unicorn#980>
        // @ts-expect-error Looks like a parent.
        endIndex: index ? endIndex || root.children.length : -1,
        map
    };
    /** @type {HeadingVisitor} */ function onheading(node, position, parent) {
        const value = (0,mdast_util_to_string/* toString */.B)(node, {
            includeImageAlt: false
        });
        /** @type {string} */ // @ts-expect-error `hProperties` from <https://github.com/syntax-tree/mdast-util-to-hast>
        const id = node.data && node.data.hProperties && node.data.hProperties.id;
        const slug = slugs.slug(id || value);
        if (!parents(parent)) {
            return;
        }
        // Our opening heading.
        if (position !== null && expression && !index && expression.test(value)) {
            index = position + 1;
            opening = node;
            return;
        }
        // Our closing heading.
        if (position !== null && opening && !endIndex && node.depth <= opening.depth) {
            endIndex = position;
        }
        // A heading after the closing (if we were looking for one).
        if ((endIndex || !expression) && (!settings.maxDepth || node.depth <= settings.maxDepth) && (!skip || !skip.test(value))) {
            map.push({
                depth: node.depth,
                children: node.children,
                id: slug
            });
        }
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var extend = __webpack_require__(70577);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-toc@6.1.0/node_modules/mdast-util-toc/lib/contents.js
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').StaticPhrasingContent} StaticPhrasingContent
 * @typedef {import('./search.js').SearchEntry} SearchEntry
 *
 * @typedef ContentsOptions
 * @property {boolean} [tight=false] Whether to compile list-items tightly.
 * @property {boolean} [ordered=false] Whether to compile list-items as an ordered list, otherwise they are unordered.
 * @property {string|null} [prefix=null] Add a prefix to links to headings in the table of contents. Useful for example when later going from mdast to hast and sanitizing with `hast-util-sanitize`.
 */ 
/**
 * Transform a list of heading objects to a markdown list.
 *
 * @param {Array.<SearchEntry>} map
 * @param {ContentsOptions} settings
 */ function contents(map, settings) {
    const { ordered =false , tight =false , prefix =null  } = settings;
    /** @type {List} */ const table = {
        type: "list",
        ordered,
        spread: false,
        children: []
    };
    let minDepth = Number.POSITIVE_INFINITY;
    let index = -1;
    // Find minimum depth.
    while(++index < map.length){
        if (map[index].depth < minDepth) {
            minDepth = map[index].depth;
        }
    }
    // Normalize depth.
    index = -1;
    while(++index < map.length){
        map[index].depth -= minDepth - 1;
    }
    // Add TOC to list.
    index = -1;
    while(++index < map.length){
        insert(map[index], table, {
            ordered,
            tight,
            prefix
        });
    }
    return table;
}
/**
 * Insert an entry into `parent`.
 *
 * @param {SearchEntry} entry
 * @param {List|ListItem} parent
 * @param {ContentsOptions} settings
 */ function insert(entry, parent, settings) {
    let index = -1;
    if (parent.type === "list") {
        if (entry.depth === 1) {
            parent.children.push({
                type: "listItem",
                spread: false,
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "link",
                                title: null,
                                url: "#" + (settings.prefix || "") + entry.id,
                                children: contents_all(entry.children)
                            }
                        ]
                    }
                ]
            });
        } else if (parent.children.length > 0) {
            insert(entry, parent.children[parent.children.length - 1], settings);
        } else {
            /** @type {ListItem} */ const item = {
                type: "listItem",
                spread: false,
                children: []
            };
            parent.children.push(item);
            insert(entry, item, settings);
        }
    } else if (parent.children[parent.children.length - 1] && parent.children[parent.children.length - 1].type === "list") {
        entry.depth--;
        insert(entry, // @ts-expect-error It’s a `list`, we just checked.
        parent.children[parent.children.length - 1], settings);
    } else {
        /** @type {List} */ const item1 = {
            type: "list",
            ordered: settings.ordered,
            spread: false,
            children: []
        };
        parent.children.push(item1);
        entry.depth--;
        insert(entry, item1, settings);
    }
    if (parent.type === "list" && !settings.tight) {
        parent.spread = false;
        while(++index < parent.children.length){
            if (parent.children[index].children.length > 1) {
                parent.spread = true;
                break;
            }
        }
    } else {
        parent.spread = !settings.tight;
    }
}
/**
 * @param {Array.<PhrasingContent>} [nodes]
 * @returns {Array.<StaticPhrasingContent>}
 */ function contents_all(nodes) {
    /** @type {Array.<StaticPhrasingContent>} */ let result = [];
    let index = -1;
    if (nodes) {
        while(++index < nodes.length){
            result = result.concat(one(nodes[index]));
        }
    }
    return result;
}
/**
 * @param {PhrasingContent} node
 * @returns {StaticPhrasingContent|Array.<StaticPhrasingContent>}
 */ function one(node) {
    if (node.type === "link" || node.type === "linkReference" || node.type === "footnote" || node.type === "footnoteReference") {
        // @ts-expect-error Looks like a parent.
        return contents_all(node.children);
    }
    if ("children" in node) {
        const { children , position , ...copy } = node;
        return Object.assign(extend_default()(true, {}, copy), {
            children: contents_all(node.children)
        });
    }
    const { position: position1 , ...copy1 } = node;
    return extend_default()(true, {}, copy1);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-toc@6.1.0/node_modules/mdast-util-toc/lib/index.js
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').List} List
 * @typedef {import('./search.js').SearchOptions} SearchOptions
 * @typedef {import('./contents.js').ContentsOptions} ContentsOptions
 * @typedef {SearchOptions & ContentsOptions & ExtraOptions} Options
 *
 * @typedef ExtraOptions
 * @property {string} [heading] Heading to look for, wrapped in `new RegExp('^(' + value + ')$', 'i')`.
 *
 * @typedef Result
 * @property {number|null} index
 * @property {number|null} endIndex
 * @property {List|null} map
 */ 


/**
 * Get a TOC representation of `node`.
 *
 * @param {Node} node
 * @param {Options} [options]
 * @returns {Result}
 */ function toc(node, options) {
    const settings = options || {};
    const heading = settings.heading ? toExpression(settings.heading) : null;
    const result = search(node, heading, settings);
    return {
        index: heading ? result.index : null,
        endIndex: heading ? result.endIndex : null,
        map: result.map.length > 0 ? contents(result.map, settings) : null
    };
}


/***/ }),

/***/ 30829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ remark)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/constructs.js
var constructs_namespaceObject = {};
__webpack_require__.r(constructs_namespaceObject);
__webpack_require__.d(constructs_namespaceObject, {
  "attentionMarkers": () => (attentionMarkers),
  "contentInitial": () => (contentInitial),
  "disable": () => (disable),
  "document": () => (constructs_document),
  "flow": () => (constructs_flow),
  "flowInitial": () => (flowInitial),
  "insideSpan": () => (insideSpan),
  "string": () => (constructs_string),
  "text": () => (constructs_text)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */ function bail(error) {
    if (error) {
        throw error;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/is-buffer@2.0.5/node_modules/is-buffer/index.js
var is_buffer = __webpack_require__(38326);
var is_buffer_default = /*#__PURE__*/__webpack_require__.n(is_buffer);
// EXTERNAL MODULE: ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var extend = __webpack_require__(70577);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
/**
 * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
 * @typedef {(...input: Array<any>) => any} Middleware
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 *   Middleware.
 */ /**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */ function trough() {
    /** @type {Array<Middleware>} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run,
        use
    };
    return pipeline;
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== "function") {
            throw new TypeError("Expected function as last argument, not " + callback);
        }
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {Array<any>} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length){
                if (output[index] === null || output[index] === undefined) {
                    output[index] = values[index];
                }
            }
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) {
                wrap(fn, next)(...output);
            } else {
                callback(null, ...output);
            }
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== "function") {
            throw new TypeError("Expected `middelware` to be a function, not " + middelware);
        }
        fns.push(middelware);
        return pipeline;
    }
}
/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */ function wrap(middleware, callback) {
    /** @type {boolean} */ let called;
    return wrapped;
    /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) {
            parameters.push(done);
        }
        try {
            result = middleware.apply(this, parameters);
        } catch (error) {
            const exception = /** @type {Error} */ error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) {
                throw exception;
            }
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result instanceof Promise) {
                result.then(then, done);
            } else if (result instanceof Error) {
                done(result);
            } else {
                then(result);
            }
        }
    }
    /**
   * Call `callback`, only once.
   * @type {Callback}
   */ function done(error, ...output) {
        if (!called) {
            called = true;
            callback(error, ...output);
        }
    }
    /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */ function then(value) {
        done(null, value);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-stringify-position@3.0.2/node_modules/unist-util-stringify-position/index.js
/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
 */ /**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|NodeLike|Position|Point|null} [value]
 * @returns {string}
 */ function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== "object") {
        return "";
    }
    // Node.
    if ("position" in value || "type" in value) {
        return position(value.position);
    }
    // Position.
    if ("start" in value || "end" in value) {
        return position(value);
    }
    // Point.
    if ("line" in value || "column" in value) {
        return point(value);
    }
    // ?
    return "";
}
/**
 * @param {Point|undefined} point
 * @returns {string}
 */ function point(point) {
    return index(point && point.line) + ":" + index(point && point.column);
}
/**
 * @param {Position|undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + "-" + point(pos && pos.end);
}
/**
 * @param {number|undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === "number" ? value : 1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/vfile-message@3.1.3/node_modules/vfile-message/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
 */ 
class VFileMessage extends Error {
    /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string|Error|VFileMessage} reason
   *   Reason for message.
   *   Uses the stack and message of the error if given.
   * @param {Node|NodeLike|Position|Point} [place]
   *   Place at which the message occurred in a file.
   * @param {string} [origin]
   *   Place in code the message originates from (example `'my-package:my-rule-name'`)
   */ constructor(reason, place, origin){
        /** @type {[string|null, string|null]} */ const parts = [
            null,
            null
        ];
        /** @type {Position} */ let position = {
            // @ts-expect-error: we always follows the structure of `position`.
            start: {
                line: null,
                column: null
            },
            // @ts-expect-error: "
            end: {
                line: null,
                column: null
            }
        };
        super();
        if (typeof place === "string") {
            origin = place;
            place = undefined;
        }
        if (typeof origin === "string") {
            const index = origin.indexOf(":");
            if (index === -1) {
                parts[1] = origin;
            } else {
                parts[0] = origin.slice(0, index);
                parts[1] = origin.slice(index + 1);
            }
        }
        if (place) {
            // Node.
            if ("type" in place || "position" in place) {
                if (place.position) {
                    // @ts-expect-error: looks like a position.
                    position = place.position;
                }
            } else if ("start" in place || "end" in place) {
                // @ts-expect-error: looks like a position.
                position = place;
            } else if ("line" in place || "column" in place) {
                position.start = place;
            }
        }
        // Fields from `Error`
        this.name = stringifyPosition(place) || "1:1";
        /** @type {string} */ this.message = typeof reason === "object" ? reason.message : reason;
        /** @type {string} */ this.stack = "";
        if (typeof reason === "object" && reason.stack) {
            this.stack = reason.stack;
        }
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.reason = this.message;
        /* eslint-disable no-unused-expressions */ /**
     * Whether this is a fatal problem that marks an associated file as no
     * longer processable.
     * If `true`, marks associated file as no longer processable.
     * If `false`, necessitates a (potential) change.
     * The value can also be `null` or `undefined`, for things that might not
     * need changing.
     *
     * @type {boolean?}
     */ this.fatal;
        /**
     * Starting line of error.
     *
     * @type {number?}
     */ this.line = position.start.line;
        /**
     * Starting column of error.
     *
     * @type {number?}
     */ this.column = position.start.column;
        /**
     * Full range information, when available.
     * Has `start` and `end` fields, both set to an object with `line` and
     * `column`, set to `number?`.
     *
     * @type {Position?}
     */ this.position = position;
        /**
     * Namespace of warning (example: `'my-package'`).
     *
     * @type {string?}
     */ this.source = parts[0];
        /**
     * Category of message (example: `'my-rule-name'`).
     *
     * @type {string?}
     */ this.ruleId = parts[1];
        /**
     * Path of a file (used throughout the VFile ecosystem).
     *
     * @type {string?}
     */ this.file;
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string?}
     */ this.actual;
        /**
     * Suggest values that should be used instead of `actual`, one or more
     * values that are deemed as acceptable.
     *
     * @type {Array<string>?}
     */ this.expected;
        /**
     * Link to documentation for the message.
     *
     * @type {string?}
     */ this.url;
        /**
     * Long form description of the message (supported by `vfile-reporter`).
     *
     * @type {string?}
     */ this.note;
    /* eslint-enable no-unused-expressions */ }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "process"
var external_process_ = __webpack_require__(77282);
var external_process_default = /*#__PURE__*/__webpack_require__.n(external_process_);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/minurl.shared.js
/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */ /**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */ // From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath) {
    return fileURLOrPath !== null && typeof fileURLOrPath === "object" && // @ts-expect-error: indexable.
    fileURLOrPath.href && // @ts-expect-error: indexable.
    fileURLOrPath.origin;
}

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(57310);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {Record<string, unknown> & {type: string, position?: Position|undefined}} NodeLike
 * @typedef {import('./minurl.shared.js').URL} URL
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Value} Value
 *
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'base64url'|'latin1'|'binary'|'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
 *
 * @typedef {Value|Options|VFile|URL} Compatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 * @property {Value} [value]
 * @property {string} [cwd]
 * @property {Array<string>} [history]
 * @property {string|URL} [path]
 * @property {string} [basename]
 * @property {string} [stem]
 * @property {string} [extname]
 * @property {string} [dirname]
 * @property {Data} [data]
 *
 * @typedef Map
 *   Raw source map, see:
 *   <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
 * @property {number} version
 * @property {Array<string>} sources
 * @property {Array<string>} names
 * @property {string|undefined} [sourceRoot]
 * @property {Array<string>|undefined} [sourcesContent]
 * @property {string} mappings
 * @property {string} file
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} Options
 *   Configuration: a bunch of keys that will be shallow copied over to the new
 *   file.
 *
 * @typedef {Record<string, unknown>} ReporterSettings
 * @typedef {<T = ReporterSettings>(files: Array<VFile>, options: T) => string} Reporter
 */ 




// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
const order = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
];
class VFile {
    /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, it’s treated as `{value: options}`.
   * If `options` is a `URL`, it’s treated as `{path: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All fields in `options` are set on the newly created `VFile`.
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {Compatible} [value]
   */ constructor(value){
        /** @type {Options} */ let options;
        if (!value) {
            options = {};
        } else if (typeof value === "string" || is_buffer_default()(value)) {
            // @ts-expect-error Looks like a buffer.
            options = {
                value
            };
        } else if (isUrl(value)) {
            options = {
                path: value
            };
        } else {
            // @ts-expect-error Looks like file or options.
            options = value;
        }
        /**
     * Place to store custom information (default: `{}`).
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     * @type {Data}
     */ this.data = {};
        /**
     * List of messages associated with the file.
     * @type {Array<VFileMessage>}
     */ this.messages = [];
        /**
     * List of filepaths the file moved between.
     * The first is the original path and the last is the current path.
     * @type {Array<string>}
     */ this.history = [];
        /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     * @type {string}
     */ this.cwd = external_process_default().cwd();
        /* eslint-disable no-unused-expressions */ /**
     * Raw value.
     * @type {Value}
     */ this.value;
        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.
        /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */ this.stored;
        /**
     * Sometimes files have a non-string, compiled, representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */ this.result;
        /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `Map` type, which is equivalent to the `RawSourceMap`
     * type from the `source-map` module.
     * @type {Map|undefined}
     */ this.map;
        /* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
        let index = -1;
        while(++index < order.length){
            const prop = order[index];
            // Note: we specifically use `in` instead of `hasOwnProperty` to accept
            // `vfile`s too.
            if (prop in options && options[prop] !== undefined) {
                // @ts-expect-error: TS is confused by the different types for `history`.
                this[prop] = prop === "history" ? [
                    ...options[prop]
                ] : options[prop];
            }
        }
        /** @type {string} */ let prop1;
        // Set non-path related properties.
        for(prop1 in options){
            // @ts-expect-error: fine to set other things.
            if (!order.includes(prop1)) this[prop1] = options[prop1];
        }
    }
    /**
   * Get the full path (example: `'~/index.min.js'`).
   * @returns {string}
   */ get path() {
        return this.history[this.history.length - 1];
    }
    /**
   * Set the full path (example: `'~/index.min.js'`).
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   * @param {string|URL} path
   */ set path(path) {
        if (isUrl(path)) {
            path = (0,external_url_.fileURLToPath)(path);
        }
        assertNonEmpty(path, "path");
        if (this.path !== path) {
            this.history.push(path);
        }
    }
    /**
   * Get the parent path (example: `'~'`).
   */ get dirname() {
        return typeof this.path === "string" ? external_path_default().dirname(this.path) : undefined;
    }
    /**
   * Set the parent path (example: `'~'`).
   * Cannot be set if there’s no `path` yet.
   */ set dirname(dirname) {
        assertPath(this.basename, "dirname");
        this.path = external_path_default().join(dirname || "", this.basename);
    }
    /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   */ get basename() {
        return typeof this.path === "string" ? external_path_default().basename(this.path) : undefined;
    }
    /**
   * Set basename (including extname) (`'index.min.js'`).
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */ set basename(basename) {
        assertNonEmpty(basename, "basename");
        assertPart(basename, "basename");
        this.path = external_path_default().join(this.dirname || "", basename);
    }
    /**
   * Get the extname (including dot) (example: `'.js'`).
   */ get extname() {
        return typeof this.path === "string" ? external_path_default().extname(this.path) : undefined;
    }
    /**
   * Set the extname (including dot) (example: `'.js'`).
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   */ set extname(extname) {
        assertPart(extname, "extname");
        assertPath(this.dirname, "extname");
        if (extname) {
            if (extname.charCodeAt(0) !== 46 /* `.` */ ) {
                throw new Error("`extname` must start with `.`");
            }
            if (extname.includes(".", 1)) {
                throw new Error("`extname` cannot contain multiple dots");
            }
        }
        this.path = external_path_default().join(this.dirname, this.stem + (extname || ""));
    }
    /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   */ get stem() {
        return typeof this.path === "string" ? external_path_default().basename(this.path, this.extname) : undefined;
    }
    /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   */ set stem(stem) {
        assertNonEmpty(stem, "stem");
        assertPart(stem, "stem");
        this.path = external_path_default().join(this.dirname || "", stem + (this.extname || ""));
    }
    /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8']
   *   When `value` is a `Buffer`, `encoding` is a character encoding to
   *   understand it as (default: `'utf8'`).
   * @returns {string}
   *   Serialized file.
   */ toString(encoding) {
        return (this.value || "").toString(encoding);
    }
    /**
   * Constructs a new `VFileMessage`, where `fatal` is set to `false`, and
   * associates it with the file by adding it to `vfile.messages` and setting
   * `message.file` to the current filepath.
   *
   * @param {string|Error|VFileMessage} reason
   *   Human readable reason for the message, uses the stack and message of the error if given.
   * @param {Node|NodeLike|Position|Point} [place]
   *   Place where the message occurred in the file.
   * @param {string} [origin]
   *   Computer readable reason for the message
   * @returns {VFileMessage}
   *   Message.
   */ message(reason, place, origin) {
        const message = new VFileMessage(reason, place, origin);
        if (this.path) {
            message.name = this.path + ":" + message.name;
            message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
    }
    /**
   * Like `VFile#message()`, but associates an informational message where
   * `fatal` is set to `null`.
   *
   * @param {string|Error|VFileMessage} reason
   *   Human readable reason for the message, uses the stack and message of the error if given.
   * @param {Node|NodeLike|Position|Point} [place]
   *   Place where the message occurred in the file.
   * @param {string} [origin]
   *   Computer readable reason for the message
   * @returns {VFileMessage}
   *   Message.
   */ info(reason, place, origin) {
        const message = this.message(reason, place, origin);
        message.fatal = null;
        return message;
    }
    /**
   * Like `VFile#message()`, but associates a fatal message where `fatal` is
   * set to `true`, and then immediately throws it.
   *
   * > 👉 **Note**: a fatal error means that a file is no longer processable.
   *
   * @param {string|Error|VFileMessage} reason
   *   Human readable reason for the message, uses the stack and message of the error if given.
   * @param {Node|NodeLike|Position|Point} [place]
   *   Place where the message occurred in the file.
   * @param {string} [origin]
   *   Computer readable reason for the message
   * @returns {never}
   *   Message.
   */ fail(reason, place, origin) {
        const message = this.message(reason, place, origin);
        message.fatal = true;
        throw message;
    }
}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */ function assertPart(part, name) {
    if (part && part.includes((external_path_default()).sep)) {
        throw new Error("`" + name + "` cannot be a path: did not expect `" + (external_path_default()).sep + "`");
    }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */ function assertNonEmpty(part, name) {
    if (!part) {
        throw new Error("`" + name + "` cannot be empty");
    }
}
/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */ function assertPath(path, name) {
    if (!path) {
        throw new Error("Setting `" + name + "` requires `path` to be set too");
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */ 





// Expose a frozen processor.
const unified = base().freeze();
const own = {}.hasOwnProperty;
// Function to create the first processor.
/**
 * @returns {Processor}
 */ function base() {
    const transformers = trough();
    /** @type {Processor['attachers']} */ const attachers = [];
    /** @type {Record<string, unknown>} */ let namespace = {};
    /** @type {boolean|undefined} */ let frozen;
    let freezeIndex = -1;
    // Data management.
    // @ts-expect-error: overloads are handled.
    processor.data = data;
    processor.Parser = undefined;
    processor.Compiler = undefined;
    // Lock.
    processor.freeze = freeze;
    // Plugins.
    processor.attachers = attachers;
    // @ts-expect-error: overloads are handled.
    processor.use = use;
    // API.
    processor.parse = parse;
    processor.stringify = stringify;
    // @ts-expect-error: overloads are handled.
    processor.run = run;
    processor.runSync = runSync;
    // @ts-expect-error: overloads are handled.
    processor.process = process;
    processor.processSync = processSync;
    // Expose.
    return processor;
    // Create a new processor based on the processor in the current scope.
    /** @type {Processor} */ function processor() {
        const destination = base();
        let index = -1;
        while(++index < attachers.length){
            destination.use(...attachers[index]);
        }
        destination.data(extend_default()(true, {}, namespace));
        return destination;
    }
    /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */ function data(key, value) {
        if (typeof key === "string") {
            // Set `key`.
            if (arguments.length === 2) {
                assertUnfrozen("data", frozen);
                namespace[key] = value;
                return processor;
            }
            // Get `key`.
            return own.call(namespace, key) && namespace[key] || null;
        }
        // Set space.
        if (key) {
            assertUnfrozen("data", frozen);
            namespace = key;
            return processor;
        }
        // Get space.
        return namespace;
    }
    /** @type {Processor['freeze']} */ function freeze() {
        if (frozen) {
            return processor;
        }
        while(++freezeIndex < attachers.length){
            const [attacher, ...options] = attachers[freezeIndex];
            if (options[0] === false) {
                continue;
            }
            if (options[0] === true) {
                options[0] = undefined;
            }
            /** @type {Transformer|void} */ const transformer = attacher.call(processor, ...options);
            if (typeof transformer === "function") {
                transformers.use(transformer);
            }
        }
        frozen = true;
        freezeIndex = Number.POSITIVE_INFINITY;
        return processor;
    }
    /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */ function use(value, ...options) {
        /** @type {Record<string, unknown>|undefined} */ let settings;
        assertUnfrozen("use", frozen);
        if (value === null || value === undefined) {
        // Empty.
        } else if (typeof value === "function") {
            addPlugin(value, ...options);
        } else if (typeof value === "object") {
            if (Array.isArray(value)) {
                addList(value);
            } else {
                addPreset(value);
            }
        } else {
            throw new TypeError("Expected usable value, not `" + value + "`");
        }
        if (settings) {
            namespace.settings = Object.assign(namespace.settings || {}, settings);
        }
        return processor;
        /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */ function add(value) {
            if (typeof value === "function") {
                addPlugin(value);
            } else if (typeof value === "object") {
                if (Array.isArray(value)) {
                    const [plugin, ...options] = value;
                    addPlugin(plugin, ...options);
                } else {
                    addPreset(value);
                }
            } else {
                throw new TypeError("Expected usable value, not `" + value + "`");
            }
        }
        /**
     * @param {Preset} result
     * @returns {void}
     */ function addPreset(result) {
            addList(result.plugins);
            if (result.settings) {
                settings = Object.assign(settings || {}, result.settings);
            }
        }
        /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */ function addList(plugins) {
            let index = -1;
            if (plugins === null || plugins === undefined) {
            // Empty.
            } else if (Array.isArray(plugins)) {
                while(++index < plugins.length){
                    const thing = plugins[index];
                    add(thing);
                }
            } else {
                throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
            }
        }
        /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */ function addPlugin(plugin, value) {
            let index = -1;
            /** @type {Processor['attachers'][number]|undefined} */ let entry;
            while(++index < attachers.length){
                if (attachers[index][0] === plugin) {
                    entry = attachers[index];
                    break;
                }
            }
            if (entry) {
                if (isPlainObject(entry[1]) && isPlainObject(value)) {
                    value = extend_default()(true, entry[1], value);
                }
                entry[1] = value;
            } else {
                // @ts-expect-error: fine.
                attachers.push([
                    ...arguments
                ]);
            }
        }
    }
    /** @type {Processor['parse']} */ function parse(doc) {
        processor.freeze();
        const file = vfile(doc);
        const Parser = processor.Parser;
        assertParser("parse", Parser);
        if (newable(Parser, "parse")) {
            // @ts-expect-error: `newable` checks this.
            return new Parser(String(file), file).parse();
        }
        // @ts-expect-error: `newable` checks this.
        return Parser(String(file), file) // eslint-disable-line new-cap
        ;
    }
    /** @type {Processor['stringify']} */ function stringify(node, doc) {
        processor.freeze();
        const file = vfile(doc);
        const Compiler = processor.Compiler;
        assertCompiler("stringify", Compiler);
        assertNode(node);
        if (newable(Compiler, "compile")) {
            // @ts-expect-error: `newable` checks this.
            return new Compiler(node, file).compile();
        }
        // @ts-expect-error: `newable` checks this.
        return Compiler(node, file) // eslint-disable-line new-cap
        ;
    }
    /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */ function run(node, doc, callback) {
        assertNode(node);
        processor.freeze();
        if (!callback && typeof doc === "function") {
            callback = doc;
            doc = undefined;
        }
        if (!callback) {
            return new Promise(executor);
        }
        executor(null, callback);
        /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */ function executor(resolve, reject) {
            // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
            transformers.run(node, vfile(doc), done);
            /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */ function done(error, tree, file) {
                tree = tree || node;
                if (error) {
                    reject(error);
                } else if (resolve) {
                    resolve(tree);
                } else {
                    // @ts-expect-error: `callback` is defined if `resolve` is not.
                    callback(null, tree, file);
                }
            }
        }
    }
    /** @type {Processor['runSync']} */ function runSync(node, file) {
        /** @type {Node|undefined} */ let result;
        /** @type {boolean|undefined} */ let complete;
        processor.run(node, file, done);
        assertDone("runSync", "run", complete);
        // @ts-expect-error: we either bailed on an error or have a tree.
        return result;
        /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */ function done(error, tree) {
            bail(error);
            result = tree;
            complete = true;
        }
    }
    /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */ function process(doc, callback) {
        processor.freeze();
        assertParser("process", processor.Parser);
        assertCompiler("process", processor.Compiler);
        if (!callback) {
            return new Promise(executor);
        }
        executor(null, callback);
        /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */ function executor(resolve, reject) {
            const file = vfile(doc);
            processor.run(processor.parse(file), file, (error, tree, file)=>{
                if (error || !tree || !file) {
                    done(error);
                } else {
                    /** @type {unknown} */ const result = processor.stringify(tree, file);
                    if (result === undefined || result === null) {
                    // Empty.
                    } else if (looksLikeAVFileValue(result)) {
                        file.value = result;
                    } else {
                        file.result = result;
                    }
                    done(error, file);
                }
            });
            /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */ function done(error, file) {
                if (error || !file) {
                    reject(error);
                } else if (resolve) {
                    resolve(file);
                } else {
                    // @ts-expect-error: `callback` is defined if `resolve` is not.
                    callback(null, file);
                }
            }
        }
    }
    /** @type {Processor['processSync']} */ function processSync(doc) {
        /** @type {boolean|undefined} */ let complete;
        processor.freeze();
        assertParser("processSync", processor.Parser);
        assertCompiler("processSync", processor.Compiler);
        const file = vfile(doc);
        processor.process(file, done);
        assertDone("processSync", "process", complete);
        return file;
        /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */ function done(error) {
            complete = true;
            bail(error);
        }
    }
}
/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */ function newable(value, name) {
    return typeof value === "function" && // Prototypes do exist.
    // type-coverage:ignore-next-line
    value.prototype && // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    // type-coverage:ignore-next-line
    (keys(value.prototype) || name in value.prototype);
}
/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */ function keys(value) {
    /** @type {string} */ let key;
    for(key in value){
        if (own.call(value, key)) {
            return true;
        }
    }
    return false;
}
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */ function assertParser(name, value) {
    if (typeof value !== "function") {
        throw new TypeError("Cannot `" + name + "` without `Parser`");
    }
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */ function assertCompiler(name, value) {
    if (typeof value !== "function") {
        throw new TypeError("Cannot `" + name + "` without `Compiler`");
    }
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */ function assertUnfrozen(name, frozen) {
    if (frozen) {
        throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
    }
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */ function assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!isPlainObject(node) || typeof node.type !== "string") {
        throw new TypeError("Expected node, got `" + node + "`");
    // Fine.
    }
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */ function assertDone(name, asyncName, complete) {
    if (!complete) {
        throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
    }
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */ function vfile(value) {
    return looksLikeAVFile(value) ? value : new VFile(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */ function looksLikeAVFile(value) {
    return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */ function looksLikeAVFileValue(value) {
    return typeof value === "string" || is_buffer_default()(value);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/mdast-util-to-string@3.1.0/node_modules/mdast-util-to-string/index.js
var mdast_util_to_string = __webpack_require__(65963);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js
/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */ function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {unknown[]} */ let parameters // Make start between zero and `end` (included).
    ;
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0 // No need to chunk the items if there’s only a couple (10k) items.
    ;
    if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
        ;
        [].splice.apply(list, parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) [].splice.apply(list, [
            start,
            remove
        ]) // Insert the items in chunks to not cause stack overflows.
        ;
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + 10000);
            parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
            ;
            [].splice.apply(list, parameters);
            chunkStart += 10000;
            start += 10000;
        }
    }
}
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */ function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js
/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ 
const micromark_util_combine_extensions_hasOwnProperty = {}.hasOwnProperty;
/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */ function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length){
        syntaxExtension(all, extensions[index]);
    }
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */ function syntaxExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = micromark_util_combine_extensions_hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let code;
        for(code in right){
            if (!micromark_util_combine_extensions_hasOwnProperty.call(left, code)) left[code] = [];
            const value = right[code];
            constructs(// @ts-expect-error Looks like a list.
            left[code], Array.isArray(value) ? value : value ? [
                value
            ] : []);
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {unknown[]} */ const before = [];
    while(++index < list.length){
        // @ts-expect-error Looks like an object.
        ;
        (list[index].add === "after" ? existing : before).push(list[index]);
    }
    splice(existing, 0, 0, before);
}
/**
 * Combine several HTML extensions into one.
 *
 * @param {HtmlExtension[]} htmlExtensions List of HTML extensions.
 * @returns {HtmlExtension} A single combined extension.
 */ function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length){
        htmlExtension(handlers, htmlExtensions[index]);
    }
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all Extension to merge into.
 * @param {HtmlExtension} extension Extension to merge.
 * @returns {void}
 */ function htmlExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = micromark_util_combine_extensions_hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let type;
        if (right) {
            for(type in right){
                left[type] = right[type];
            }
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
const unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ 
/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 */ const asciiAlpha = regexCheck(/[A-Za-z]/);
/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 */ const asciiDigit = regexCheck(/\d/);
/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 */ const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 */ const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 */ const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 */ const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */ function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127));
}
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */ function markdownLineEndingOrSpace(code) {
    return code !== null && (code < 0 || code === 32);
}
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */ function markdownLineEnding(code) {
    return code !== null && code < -2;
}
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */ function markdownSpace(code) {
    return code === -2 || code === -1 || code === 32;
}
/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */ const unicodeWhitespace = regexCheck(/\s/);
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */ // Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.
const unicodePunctuation = regexCheck(unicodePunctuationRegex);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */ function regexCheck(regex) {
    return check;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */ function check(code) {
        return code !== null && regex.test(String.fromCharCode(code));
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */ function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        if (markdownSpace(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if (markdownSpace(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/content.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 

/** @type {InitialConstruct} */ const content = {
    tokenize: initializeContent
};
/** @type {Initializer} */ function initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    return contentStart;
    /** @type {State} */ function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, contentStart, "linePrefix");
    }
    /** @type {State} */ function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter("chunkText", {
            contentType: "text",
            previous
        });
        if (previous) {
            previous.next = token;
        }
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            effects.exit("chunkText");
            effects.exit("paragraph");
            effects.consume(code);
            return;
        }
        if (markdownLineEnding(code)) {
            effects.consume(code);
            effects.exit("chunkText");
            return lineStart;
        } // Data.
        effects.consume(code);
        return data;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/document.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */ /**
 * @typedef {Record<string, unknown>} StackState
 * @typedef {[Construct, StackState]} StackItem
 */ 


/** @type {InitialConstruct} */ const document_document = {
    tokenize: initializeDocument
};
/** @type {Construct} */ const containerConstruct = {
    tokenize: tokenizeContainer
};
/** @type {Initializer} */ function initializeDocument(effects) {
    const self = this;
    /** @type {Array<StackItem>} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext|undefined} */ let childFlow;
    /** @type {Token|undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
    return start;
    /** @type {State} */ function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
            const item = stack[continued];
            self.containerState = item[1];
            return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
        } // Done.
        return checkNewContainers(code);
    }
    /** @type {State} */ function documentContinue(code) {
        continued++ // Note: this field is called `_closeFlow` but it also closes containers.
        ;
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.
        if (self.containerState._closeFlow) {
            self.containerState._closeFlow = undefined;
            if (childFlow) {
                closeFlow();
            } // Note: this algorithm for moving events around is similar to the
            // algorithm when dealing with lazy lines in `writeToChild`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {Point|undefined} */ let point // Find the flow chunk.
            ;
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                    point = self.events[indexBeforeFlow][1].end;
                    break;
                }
            }
            exitContainers(continued) // Fix positions.
            ;
            let index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
            return checkNewContainers(code);
        }
        return start(code);
    }
    /** @type {State} */ function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
            // No need to `check` whether there’s a container, of `exitContainers`
            // would be moot.
            // We can instead immediately `attempt` to parse one.
            if (!childFlow) {
                return documentContinued(code);
            } // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
                return flowStart(code);
            } // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
        } // Check if there is a new container.
        self.containerState = {};
        return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
    }
    /** @type {State} */ function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code);
    }
    /** @type {State} */ function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code);
    }
    /** @type {State} */ function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
    }
    /** @type {State} */ function containerContinue(code) {
        continued++;
        stack.push([
            self.currentConstruct,
            self.containerState
        ]) // Try another.
        ;
        return documentContinued(code);
    }
    /** @type {State} */ function flowStart(code) {
        if (code === null) {
            if (childFlow) closeFlow();
            exitContainers(0);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
            contentType: "flow",
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === null) {
            writeToChild(effects.exit("chunkFlow"), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if (markdownLineEnding(code)) {
            effects.consume(code);
            writeToChild(effects.exit("chunkFlow")) // Get ready for the next line.
            ;
            continued = 0;
            self.interrupt = undefined;
            return start;
        }
        effects.consume(code);
        return flowContinue;
    }
    /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */ function writeToChild(token, eof) {
        const stream = self.sliceStream(token);
        if (eof) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream) // Alright, so we just added a lazy line:
        ;
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.
        if (self.parser.lazy[token.start.line]) {
            let index = childFlow.events.length;
            while(index--){
                if (// The token starts before the line ending…
                childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
                (!childFlow.events[index][1].end || // …or ends after it.
                childFlow.events[index][1].end.offset > lineStartOffset)) {
                    // Exit: there’s still something open, which means it’s a lazy line
                    // part of something.
                    return;
                }
            } // Note: this algorithm for moving events around is similar to the
            // algorithm when closing flow in `documentContinue`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean|undefined} */ let seen;
            /** @type {Point|undefined} */ let point // Find the previous chunk (the one before the lazy line).
            ;
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                    if (seen) {
                        point = self.events[indexBeforeFlow][1].end;
                        break;
                    }
                    seen = true;
                }
            }
            exitContainers(continued) // Fix positions.
            ;
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
        }
    }
    /**
   * @param {number} size
   * @returns {void}
   */ function exitContainers(size) {
        let index = stack.length // Exit open containers.
        ;
        while(index-- > size){
            const entry = stack[index];
            self.containerState = entry[1];
            entry[0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function closeFlow() {
        childFlow.write([
            null
        ]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
    }
}
/** @type {Tokenizer} */ function tokenizeContainer(effects, ok, nok) {
    return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/blank-line.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 

/** @type {Construct} */ const blankLine = {
    tokenize: tokenizeBlankLine,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeBlankLine(effects, ok, nok) {
    return factorySpace(effects, afterWhitespace, "linePrefix");
    /** @type {State} */ function afterWhitespace(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-subtokenize@1.0.2/node_modules/micromark-util-subtokenize/index.js
/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */ 
/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */ function subtokenize(events) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number|undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Event[]} */ let parameters;
    /** @type {Event[]} */ let subevents;
    /** @type {boolean|undefined} */ let more;
    while(++index < events.length){
        while(index in jumps){
            index = jumps[index];
        }
        event = events[index] // Add a hook for the GFM tasklist extension, which needs to know if text
        ;
        // is in the first content of a list item.
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
                otherIndex += 2;
            }
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
                while(++otherIndex < subevents.length){
                    if (subevents[otherIndex][1].type === "content") {
                        break;
                    }
                    if (subevents[otherIndex][1].type === "chunkText") {
                        subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                        otherIndex++;
                    }
                }
            }
        } // Enter.
        if (event[0] === "enter") {
            if (event[1].contentType) {
                Object.assign(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events[otherIndex];
                if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
                    if (otherEvent[0] === "enter") {
                        if (lineIndex) {
                            events[lineIndex][1].type = "lineEndingBlank";
                        }
                        otherEvent[1].type = "lineEnding";
                        lineIndex = otherIndex;
                    }
                } else {
                    break;
                }
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = Object.assign({}, events[lineIndex][1].start) // Switch container exit w/ line endings.
                ;
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                splice(events, lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */ function subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    /** @type {number[]} */ const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    /** @type {[number, number][]} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Chunk[]} */ let stream;
    /** @type {Token|undefined} */ let previous;
    let index = -1;
    /** @type {Token|undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ] // Loop forward through the linked tokens to pass them in order to the
    ;
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events[++startPosition][1] !== current){
        // Empty.
        }
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) {
                stream.push(null);
            }
            if (previous) {
                tokenizer.defineSkip(current.start);
            }
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        } // Unravel the next token.
        previous = current;
        current = current.next;
    } // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length){
        if (// Find a void token that includes a break.
        childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
            start = index + 1;
            breaks.push(start) // Help GC.
            ;
            current._tokenizer = undefined;
            current.previous = undefined;
            current = current.next;
        }
    } // Help GC.
    tokenizer.events = [] // If there’s one more token (which is the cases for lines that end in an
    ;
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
    } else {
        breaks.pop();
    } // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start1 = startPositions.pop();
        jumps.unshift([
            start1,
            start1 + slice.length - 1
        ]);
        splice(events, start1, 2, slice);
    }
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/content.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 


/**
 * No name because it must not be turned off.
 * @type {Construct}
 */ const content_content = {
    tokenize: tokenizeContent,
    resolve: resolveContent
};
/** @type {Construct} */ const continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */ function resolveContent(events) {
    subtokenize(events);
    return events;
}
/** @type {Tokenizer} */ function tokenizeContent(effects, ok) {
    /** @type {Token} */ let previous;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
            contentType: "content"
        });
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            return contentEnd(code);
        }
        if (markdownLineEnding(code)) {
            return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
        } // Data.
        effects.consume(code);
        return data;
    }
    /** @type {State} */ function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
    }
    /** @type {State} */ function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous.next = effects.enter("chunkContent", {
            contentType: "content",
            previous
        });
        previous = previous.next;
        return data;
    }
}
/** @type {Tokenizer} */ function tokenizeContinuation(effects, ok, nok) {
    const self = this;
    return startLookahead;
    /** @type {State} */ function startLookahead(code) {
        effects.exit("chunkContent");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, prefixed, "linePrefix");
    }
    /** @type {State} */ function prefixed(code) {
        if (code === null || markdownLineEnding(code)) {
            return nok(code);
        }
        const tail = self.events[self.events.length - 1];
        if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
            return ok(code);
        }
        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/flow.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */ 


/** @type {InitialConstruct} */ const flow = {
    tokenize: initializeFlow
};
/** @type {Initializer} */ function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content_content, afterConstruct)), "linePrefix")));
    return initial;
    /** @type {State} */ function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = undefined;
        return initial;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/text.js
/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ const resolver = {
    resolveAll: createResolver()
};
const string = initializeFactory("string");
const text_text = initializeFactory("text");
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */ function initializeFactory(field) {
    return {
        tokenize: initializeText,
        resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : undefined)
    };
    /** @type {Initializer} */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text = effects.attempt(constructs, start, notText);
        return start;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? text(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter("data");
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit("data");
                return text(code);
            } // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     * @returns {boolean}
     */ function atBreak(code) {
            if (code === null) {
                return true;
            }
            const list = constructs[code];
            let index = -1;
            if (list) {
                while(++index < list.length){
                    const item = list[index];
                    if (!item.previous || item.previous.call(self, self.previous)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */ function createResolver(extraResolver) {
    return resolveAllText;
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number|undefined} */ let enter // A rather boring computation (to merge adjacent `data` events) which
        ;
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === "data") {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== "data") {
                // Don’t do anything if there is one data token.
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */ function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0 // Skip first.
    ;
    while(++eventIndex <= events.length){
        if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
            const data = events[eventIndex - 1][1];
            const chunks = context.sliceStream(data);
            let index = chunks.length;
            let bufferIndex = -1;
            let size = 0;
            /** @type {boolean|undefined} */ let tabs;
            while(index--){
                const chunk = chunks[index];
                if (typeof chunk === "string") {
                    bufferIndex = chunk.length;
                    while(chunk.charCodeAt(bufferIndex - 1) === 32){
                        size++;
                        bufferIndex--;
                    }
                    if (bufferIndex) break;
                    bufferIndex = -1;
                } else if (chunk === -2) {
                    tabs = true;
                    size++;
                } else if (chunk === -1) {
                // Empty
                } else {
                    // Replacement character, exit.
                    index++;
                    break;
                }
            }
            if (size) {
                const token = {
                    type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: data.end.line,
                        column: data.end.column - size,
                        offset: data.end.offset - size,
                        _index: data.start._index + index,
                        _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                    },
                    end: Object.assign({}, data.end)
                };
                data.end = Object.assign({}, token.start);
                if (data.start.offset === data.end.offset) {
                    Object.assign(data, token);
                } else {
                    events.splice(eventIndex, 0, [
                        "enter",
                        token,
                        context
                    ], [
                        "exit",
                        token,
                        context
                    ]);
                    eventIndex += 2;
                }
            }
            eventIndex++;
        }
    }
    return events;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js
/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */ function resolveAll(constructs, events, context) {
    /** @type {Resolver[]} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/create-tokenizer.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */ /**
 * @typedef Info
 * @property {() => void} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */ 


/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */ function createTokenizer(parser, initialize, from) {
    /** @type {Point} */ let point = Object.assign(from ? Object.assign({}, from) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    /** @type {Record<string, number>} */ const columnStart = {};
    /** @type {Array<Construct>} */ const resolveAllConstructs = [];
    /** @type {Array<Chunk>} */ let chunks = [];
    /** @type {Array<Token>} */ let stack = [];
    /** @type {boolean|undefined} */ let consumed = true;
    /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */ const effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        })
    };
    /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */ const context = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip,
        write
    };
    /**
   * The state function.
   *
   * @type {State|void}
   */ let state = initialize.tokenize.call(context, effects);
    /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */ let expectedCode;
    if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
    }
    return context;
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = push(chunks, slice);
        main() // Exit if we’re not done, resolve might change stuff.
        ;
        if (chunks[chunks.length - 1] !== null) {
            return [];
        }
        addResult(initialize, 0) // Otherwise, resolve, and exit.
        ;
        context.events = resolveAll(resolveAllConstructs, context.events, context);
        return context.events;
    } //
    // Tools.
    //
    /** @type {TokenizeContext['sliceSerialize']} */ function sliceSerialize(token, expandTabs) {
        return serializeChunks(sliceStream(token), expandTabs);
    }
    /** @type {TokenizeContext['sliceStream']} */ function sliceStream(token) {
        return sliceChunks(chunks, token);
    }
    /** @type {TokenizeContext['now']} */ function now() {
        return Object.assign({}, point);
    }
    /** @type {TokenizeContext['defineSkip']} */ function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
    } //
    // State management.
    //
    /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */ function main() {
        /** @type {number} */ let chunkIndex;
        while(point._index < chunks.length){
            const chunk = chunks[point._index] // If we’re in a buffer chunk, loop through it.
            ;
            if (typeof chunk === "string") {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) {
                    point._bufferIndex = 0;
                }
                while(point._index === chunkIndex && point._bufferIndex < chunk.length){
                    go(chunk.charCodeAt(point._bufferIndex));
                }
            } else {
                go(chunk);
            }
        }
    }
    /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */ function go(code) {
        consumed = undefined;
        expectedCode = code;
        state = state(code);
    }
    /** @type {Effects['consume']} */ function consume(code) {
        if (markdownLineEnding(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        } // Not in a string chunk.
        if (point._bufferIndex < 0) {
            point._index++;
        } else {
            point._bufferIndex++ // At end of string chunk.
            ;
            // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
            // strings.
            if (point._bufferIndex === chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        } // Expose the previous character.
        context.previous = code // Mark as consumed.
        ;
        consumed = true;
    }
    /** @type {Effects['enter']} */ function enter(type, fields) {
        /** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push([
            "enter",
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    /** @type {Effects['exit']} */ function exit(type) {
        const token = stack.pop();
        token.end = now();
        context.events.push([
            "exit",
            token,
            context
        ]);
        return token;
    }
    /**
   * Use results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulcheck(_, info) {
        info.restore();
    }
    /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */ function constructFactory(onreturn, fields) {
        return hook;
        /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Array<Construct>|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */ function hook(constructs, returnState, bogusState) {
            /** @type {Array<Construct>} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? /* c8 ignore next 1 */ handleListOfConstructs(constructs) : "tokenize" in constructs // @ts-expect-error Looks like a construct.
             ? handleListOfConstructs([
                constructs
            ]) : handleMapOfConstructs(constructs);
            /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */ function handleMapOfConstructs(map) {
                return start;
                /** @type {State} */ function start(code) {
                    const def = code !== null && map[code];
                    const all = code !== null && map.null;
                    const list = [
                        // To do: add more extension tests.
                        /* c8 ignore next 2 */ ...Array.isArray(def) ? def : def ? [
                            def
                        ] : [],
                        ...Array.isArray(all) ? all : all ? [
                            all
                        ] : []
                    ];
                    return handleListOfConstructs(list)(code);
                }
            }
            /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) {
                    return bogusState;
                }
                return handleConstruct(list[constructIndex]);
            }
            /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */ function handleConstruct(construct) {
                return start;
                /** @type {State} */ function start(code) {
                    // To do: not needed to store if there is no bogus state, probably?
                    // Currently doesn’t work because `inspect` in document does a check
                    // w/o a bogus, which doesn’t make sense. But it does seem to help perf
                    // by not storing.
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) {
                        context.currentConstruct = construct;
                    }
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
                        return nok(code);
                    }
                    return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
                    // prototype.
                    // This allows a “live binding”, which is needed for `interrupt`.
                    fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
                }
            }
            /** @type {State} */ function ok(code) {
                consumed = true;
                onreturn(currentConstruct, info);
                return returnState;
            }
            /** @type {State} */ function nok(code) {
                consumed = true;
                info.restore();
                if (++constructIndex < listOfConstructs.length) {
                    return handleConstruct(listOfConstructs[constructIndex]);
                }
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
            resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
            splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        }
        if (construct.resolveTo) {
            context.events = construct.resolveTo(context.events, context);
        }
    }
    /**
   * Store state.
   *
   * @returns {Info}
   */ function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
            restore,
            from: startEventsIndex
        };
        /**
     * Restore state.
     *
     * @returns {void}
     */ function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
        }
    }
    /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */ function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Array<Chunk>}
 */ function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Array<Chunk>} */ let view;
    if (startIndex === endIndex) {
        // @ts-expect-error `_bufferIndex` is used on string chunks.
        view = [
            chunks[startIndex].slice(startBufferIndex, endBufferIndex)
        ];
    } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
            // @ts-expect-error `_bufferIndex` is used on string chunks.
            view[0] = view[0].slice(startBufferIndex);
        }
        if (endBufferIndex > 0) {
            // @ts-expect-error `_bufferIndex` is used on string chunks.
            view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
    }
    return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */ function serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    /** @type {boolean|undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === "string") {
            value = chunk;
        } else switch(chunk){
            case -5:
                {
                    value = "\r";
                    break;
                }
            case -4:
                {
                    value = "\n";
                    break;
                }
            case -3:
                {
                    value = "\r" + "\n";
                    break;
                }
            case -2:
                {
                    value = expandTabs ? " " : "	";
                    break;
                }
            case -1:
                {
                    if (!expandTabs && atTab) continue;
                    value = " ";
                    break;
                }
            default:
                {
                    // Currently only replacement character.
                    value = String.fromCharCode(chunk);
                }
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join("");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/thematic-break.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/** @type {Construct} */ const thematicBreak = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
};
/** @type {Tokenizer} */ function tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
    }
    /** @type {State} */ function atBreak(code) {
        if (code === marker) {
            effects.enter("thematicBreakSequence");
            return sequence(code);
        }
        if (markdownSpace(code)) {
            return factorySpace(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !markdownLineEnding(code)) {
            return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/list.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @typedef {Record<string, unknown> & {marker: Code, type: string, size: number}} ListContainerState
 * @typedef {TokenizeContext & {containerState: ListContainerState}} TokenizeContextWithState
 */ 



/** @type {Construct} */ const list = {
    name: "list",
    tokenize: tokenizeListStart,
    continuation: {
        tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
};
/** @type {Construct} */ const listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
};
/** @type {Construct} */ const indentConstruct = {
    tokenize: tokenizeIndent,
    partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListStart(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === "listUnordered") {
                effects.enter("listItemPrefix");
                return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter("listItemPrefix");
                effects.enter("listItemValue");
                return inside(code);
            }
        }
        return nok(code);
    }
    /** @type {State} */ function inside(code) {
        if (asciiDigit(code) && ++size < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit("listItemValue");
            return atMarker(code);
        }
        return nok(code);
    }
    /**
   * @type {State}
   **/ function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    /** @type {State} */ function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    /** @type {State} */ function otherPrefix(code) {
        if (markdownSpace(code)) {
            effects.enter("listItemPrefixWhitespace");
            effects.consume(code);
            effects.exit("listItemPrefixWhitespace");
            return endOfPrefix;
        }
        return nok(code);
    }
    /** @type {State} */ function endOfPrefix(code) {
        self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
        return ok(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    return effects.check(blankLine, onBlank, notBlank);
    /** @type {State} */ function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine // We have a blank line.
        ;
        // Still, try to consume at most the items size.
        return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
    }
    /** @type {State} */ function notBlank(code) {
        if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
            self.containerState.furtherBlankLines = undefined;
            self.containerState.initialBlankLine = undefined;
            return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
    }
    /** @type {State} */ function notInCurrentItem(code) {
        // While we do continue, we signal that the flow should be closed.
        self.containerState._closeFlow = true // As we’re closing flow, we’re no longer interrupting.
        ;
        self.interrupt = undefined;
        return factorySpace(effects, effects.attempt(list, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeIndent(effects, ok, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
    }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */ function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    const self = this;
    return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4 + 1);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !markdownSpace(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/block-quote.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */ 

/** @type {Construct} */ const blockQuote = {
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
        tokenize: tokenizeBlockQuoteContinuation
    },
    exit
};
/** @type {Tokenizer} */ function tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 62) {
            const state = self.containerState;
            if (!state.open) {
                effects.enter("blockQuote", {
                    _container: true
                });
                state.open = true;
            }
            effects.enter("blockQuotePrefix");
            effects.enter("blockQuoteMarker");
            effects.consume(code);
            effects.exit("blockQuoteMarker");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if (markdownSpace(code)) {
            effects.enter("blockQuotePrefixWhitespace");
            effects.consume(code);
            effects.exit("blockQuotePrefixWhitespace");
            effects.exit("blockQuotePrefix");
            return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return factorySpace(effects, effects.attempt(blockQuote, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}
/** @type {Exiter} */ function exit(effects) {
    effects.exit("blockQuote");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-factory-destination@1.0.0/node_modules/micromark-factory-destination/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */ // eslint-disable-next-line max-params
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return destinationEnclosedBefore;
        }
        if (code === null || code === 41 || asciiControl(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationRaw(code);
    }
    /** @type {State} */ function destinationEnclosedBefore(code) {
        if (code === 62) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationEnclosed(code) {
        if (code === 62) {
            effects.exit("chunkString");
            effects.exit(stringType);
            return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || markdownLineEnding(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
    }
    /** @type {State} */ function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
            effects.consume(code);
            return destinationEnclosed;
        }
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationRaw(code) {
        if (code === 40) {
            if (++balance > limit) return nok(code);
            effects.consume(code);
            return destinationRaw;
        }
        if (code === 41) {
            if (!balance--) {
                effects.exit("chunkString");
                effects.exit(stringType);
                effects.exit(rawType);
                effects.exit(type);
                return ok(code);
            }
            effects.consume(code);
            return destinationRaw;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
            if (balance) return nok(code);
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (asciiControl(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
    }
    /** @type {State} */ function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
            effects.consume(code);
            return destinationRaw;
        }
        return destinationRaw(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-factory-label@1.0.2/node_modules/micromark-factory-label/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */ 
/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */ // eslint-disable-next-line max-params
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let data;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /** @type {State} */ function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || /* To do: remove in the future once we’ve switched from
       * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
       * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */ code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
            return nok(code);
        }
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        if (markdownLineEnding(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return atBreak;
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return label(code);
    }
    /** @type {State} */ function label(code) {
        if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        data = data || !markdownSpace(code);
        return code === 92 ? labelEscape : label;
    }
    /** @type {State} */ function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return label;
        }
        return label(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-factory-title@1.0.2/node_modules/micromark-factory-title/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */ // eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
    }
    /** @type {State} */ function atFirstTitleBreak(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
    }
    /** @type {State} */ function atTitleBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return atFirstTitleBreak(marker);
        }
        if (code === null) {
            return nok(code);
        } // Note: blank lines can’t exist in content.
        if (markdownLineEnding(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return factorySpace(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return title(code);
    }
    /** @type {State} */ function title(code) {
        if (code === marker || code === null || markdownLineEnding(code)) {
            effects.exit("chunkString");
            return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
    }
    /** @type {State} */ function titleEscape(code) {
        if (code === marker || code === 92) {
            effects.consume(code);
            return title;
        }
        return title(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ 

/**
 * @param {Effects} effects
 * @param {State} ok
 */ function factoryWhitespace(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    /** @type {State} */ function start(code) {
        if (markdownLineEnding(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            seen = true;
            return start;
        }
        if (markdownSpace(code)) {
            return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        }
        return ok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-normalize-identifier@1.0.0/node_modules/micromark-util-normalize-identifier/index.js
/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */ function normalizeIdentifier(value) {
    return value // Collapse Markdown whitespace.
    .replace(/[\t\n\r ]+/g, " ") // Trim.
    .replace(/^ | $/g, "") // Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/definition.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 






/** @type {Construct} */ const definition = {
    name: "definition",
    tokenize: tokenizeDefinition
};
/** @type {Construct} */ const titleConstruct = {
    tokenize: tokenizeTitle,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */ let identifier;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("definition");
        return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
    }
    /** @type {State} */ function labelAfter(code) {
        identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker") // Note: blank lines can’t exist in content.
            ;
            return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("definition");
            if (!self.parser.defined.includes(identifier)) {
                self.parser.defined.push(identifier);
            }
            return ok(code);
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeTitle(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
    }
    /** @type {State} */ function before(code) {
        if (code === 34 || code === 39 || code === 40) {
            return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-indented.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 

/** @type {Construct} */ const codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented
};
/** @type {Construct} */ const indentedContent = {
    tokenize: tokenizeIndentedContent,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeIndented");
        return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code);
    }
    /** @type {State} */ function afterStartPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        if (code === null) {
            return after(code);
        }
        if (markdownLineEnding(code)) {
            return effects.attempt(indentedContent, afterPrefix, after)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
    }
    /** @type {State} */ function content(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("codeFlowValue");
            return afterPrefix(code);
        }
        effects.consume(code);
        return content;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeIndented");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeIndentedContent(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) {
            return nok(code);
        }
        if (markdownLineEnding(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return start;
        }
        return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? start(code) : nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/heading-atx.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 


/** @type {Construct} */ const headingAtx = {
    name: "headingAtx",
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
};
/** @type {Resolver} */ function resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text // Prefix whitespace, part of the opening.
    ;
    if (events[contentStart][1].type === "whitespace") {
        contentStart += 2;
    } // Suffix whitespace, part of the closing.
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
        contentEnd -= 2;
    }
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
        contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }
    if (contentEnd > contentStart) {
        content = {
            type: "atxHeadingText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text = {
            type: "chunkText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            // @ts-expect-error Constants are fine to assign.
            contentType: "text"
        };
        splice(events, contentStart, contentEnd - contentStart + 1, [
            [
                "enter",
                content,
                context
            ],
            [
                "enter",
                text,
                context
            ],
            [
                "exit",
                text,
                context
            ],
            [
                "exit",
                content,
                context
            ]
        ]);
    }
    return events;
}
/** @type {Tokenizer} */ function tokenizeHeadingAtx(effects, ok, nok) {
    const self = this;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
    }
    /** @type {State} */ function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
            effects.consume(code);
            return fenceOpenInside;
        }
        if (code === null || markdownLineEndingOrSpace(code)) {
            effects.exit("atxHeadingSequence");
            return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
    }
    /** @type {State} */ function headingBreak(code) {
        if (code === 35) {
            effects.enter("atxHeadingSequence");
            return sequence(code);
        }
        if (code === null || markdownLineEnding(code)) {
            effects.exit("atxHeading");
            return ok(code);
        }
        if (markdownSpace(code)) {
            return factorySpace(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === 35) {
            effects.consume(code);
            return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
            effects.exit("atxHeadingText");
            return headingBreak(code);
        }
        effects.consume(code);
        return data;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/setext-underline.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/** @type {Construct} */ const setextUnderline = {
    name: "setextUnderline",
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
};
/** @type {Resolver} */ function resolveToSetextUnderline(events, context) {
    let index = events.length;
    /** @type {number|undefined} */ let content;
    /** @type {number|undefined} */ let text;
    /** @type {number|undefined} */ let definition // Find the opening of the content.
    ;
    // It’ll always exist: we don’t tokenize if it isn’t there.
    while(index--){
        if (events[index][0] === "enter") {
            if (events[index][1].type === "content") {
                content = index;
                break;
            }
            if (events[index][1].type === "paragraph") {
                text = index;
            }
        } else {
            if (events[index][1].type === "content") {
                // Remove the content end (if needed we’ll add it later)
                events.splice(index, 1);
            }
            if (!definition && events[index][1].type === "definition") {
                definition = index;
            }
        }
    }
    const heading = {
        type: "setextHeading",
        start: Object.assign({}, events[text][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    } // Change the paragraph to setext heading text.
    ;
    events[text][1].type = "setextHeadingText" // If we have definitions in the content, we’ll keep on having content,
    ;
    // but we need move it.
    if (definition) {
        events.splice(text, 0, [
            "enter",
            heading,
            context
        ]);
        events.splice(definition + 1, 0, [
            "exit",
            events[content][1],
            context
        ]);
        events[content][1].end = Object.assign({}, events[definition][1].end);
    } else {
        events[content][1] = heading;
    } // Add the heading exit at the end.
    events.push([
        "exit",
        heading,
        context
    ]);
    return events;
}
/** @type {Tokenizer} */ function tokenizeSetextUnderline(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {boolean} */ let paragraph // Find an opening.
    ;
    while(index--){
        // Skip enter/exit of line ending, line prefix, and content.
        // We can now either have a definition or a paragraph.
        if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
            paragraph = self.events[index][1].type === "paragraph";
            break;
        }
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
            effects.enter("setextHeadingLine");
            effects.enter("setextHeadingLineSequence");
            marker = code;
            return closingSequence(code);
        }
        return nok(code);
    }
    /** @type {State} */ function closingSequence(code) {
        if (code === marker) {
            effects.consume(code);
            return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
    }
    /** @type {State} */ function closingSequenceEnd(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("setextHeadingLine");
            return ok(code);
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-html-tag-name@1.1.0/node_modules/micromark-util-html-tag-name/index.js
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 */ const htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result in
 * HTML that can include lines w/o exiting, until a closing tag also in this
 * list is found (condition 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * Note that `textarea` was added in `CommonMark@0.30`.
 */ const htmlRawNames = [
    "pre",
    "script",
    "style",
    "textarea"
];

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-flow.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 


/** @type {Construct} */ const htmlFlow = {
    name: "htmlFlow",
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
};
/** @type {Construct} */ const nextBlankConstruct = {
    tokenize: tokenizeNextBlank,
    partial: true
};
/** @type {Resolver} */ function resolveToHtmlFlow(events) {
    let index = events.length;
    while(index--){
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
            break;
        }
    }
    if (index > 1 && events[index - 2][1].type === "linePrefix") {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.
        ;
        events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.
        ;
        events.splice(index - 2, 2);
    }
    return events;
}
/** @type {Tokenizer} */ function tokenizeHtmlFlow(effects, ok, nok) {
    const self = this;
    /** @type {number} */ let kind;
    /** @type {boolean} */ let startTag;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {Code} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("htmlFlow");
        effects.enter("htmlFlowData");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationStart;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
            ;
            // right now, so we do need to search for `>`, similar to declarations.
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        if (asciiAlpha(code)) {
            effects.consume(code);
            buffer = String.fromCharCode(code);
            startTag = true;
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function declarationStart(code) {
        if (code === 45) {
            effects.consume(code);
            kind = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects.consume(code);
            kind = 5;
            buffer = "CDATA[";
            index = 0;
            return cdataOpenInside;
        }
        if (asciiAlpha(code)) {
            effects.consume(code);
            kind = 4;
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /** @type {State} */ function commentOpenInside(code) {
        if (code === 45) {
            effects.consume(code);
            return self.interrupt ? ok : continuationDeclarationInside;
        }
        return nok(code);
    }
    /** @type {State} */ function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
        }
        return nok(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if (asciiAlpha(code)) {
            effects.consume(code);
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function tagName(code) {
        if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
            if (code !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
                kind = 1;
                return self.interrupt ? ok(code) : continuation(code);
            }
            if (htmlBlockNames.includes(buffer.toLowerCase())) {
                kind = 6;
                if (code === 47) {
                    effects.consume(code);
                    return basicSelfClosing;
                }
                return self.interrupt ? ok(code) : continuation(code);
            }
            kind = 7 // Do not support complete HTML when interrupting
            ;
            return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || asciiAlphanumeric(code)) {
            effects.consume(code);
            buffer += String.fromCharCode(code);
            return tagName;
        }
        return nok(code);
    }
    /** @type {State} */ function basicSelfClosing(code) {
        if (code === 62) {
            effects.consume(code);
            return self.interrupt ? ok : continuation;
        }
        return nok(code);
    }
    /** @type {State} */ function completeClosingTagAfter(code) {
        if (markdownSpace(code)) {
            effects.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects.consume(code);
            return completeEnd;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
            effects.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    /** @type {State} */ function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    /** @type {State} */ function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return completeAttributeValueQuoted;
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return completeAttributeValueBefore;
        }
        marker = null;
        return completeAttributeValueUnquoted(code);
    }
    /** @type {State} */ function completeAttributeValueQuoted(code) {
        if (code === null || markdownLineEnding(code)) {
            return nok(code);
        }
        if (code === marker) {
            effects.consume(code);
            return completeAttributeValueQuotedAfter;
        }
        effects.consume(code);
        return completeAttributeValueQuoted;
    }
    /** @type {State} */ function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
            return completeAttributeNameAfter(code);
        }
        effects.consume(code);
        return completeAttributeValueUnquoted;
    }
    /** @type {State} */ function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || markdownSpace(code)) {
            return completeAttributeNameBefore(code);
        }
        return nok(code);
    }
    /** @type {State} */ function completeEnd(code) {
        if (code === 62) {
            effects.consume(code);
            return completeAfter;
        }
        return nok(code);
    }
    /** @type {State} */ function completeAfter(code) {
        if (markdownSpace(code)) {
            effects.consume(code);
            return completeAfter;
        }
        return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
    }
    /** @type {State} */ function continuation(code) {
        if (code === 45 && kind === 2) {
            effects.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
            effects.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
            effects.consume(code);
            return continuationClose;
        }
        if (code === 63 && kind === 3) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
            effects.consume(code);
            return continuationCharacterDataInside;
        }
        if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
            return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || markdownLineEnding(code)) {
            return continuationAtLineEnding(code);
        }
        effects.consume(code);
        return continuation;
    }
    /** @type {State} */ function continuationAtLineEnding(code) {
        effects.exit("htmlFlowData");
        return htmlContinueStart(code);
    }
    /** @type {State} */ function htmlContinueStart(code) {
        if (code === null) {
            return done(code);
        }
        if (markdownLineEnding(code)) {
            return effects.attempt({
                tokenize: htmlLineEnd,
                partial: true
            }, htmlContinueStart, done)(code);
        }
        effects.enter("htmlFlowData");
        return continuation(code);
    }
    /** @type {Tokenizer} */ function htmlLineEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {State} */ function continuationCommentInside(code) {
        if (code === 45) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawTagOpen(code) {
        if (code === 47) {
            effects.consume(code);
            buffer = "";
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawEndTag(code) {
        if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
            effects.consume(code);
            return continuationClose;
        }
        if (asciiAlpha(code) && buffer.length < 8) {
            effects.consume(code);
            buffer += String.fromCharCode(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationCharacterDataInside(code) {
        if (code === 93) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationDeclarationInside(code) {
        if (code === 62) {
            effects.consume(code);
            return continuationClose;
        } // More dashes.
        if (code === 45 && kind === 2) {
            effects.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationClose(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("htmlFlowData");
            return done(code);
        }
        effects.consume(code);
        return continuationClose;
    }
    /** @type {State} */ function done(code) {
        effects.exit("htmlFlow");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeNextBlank(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt(blankLine, ok, nok);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-fenced.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/** @type {Construct} */ const codeFenced = {
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
    concrete: true
};
/** @type {Tokenizer} */ function tokenizeCodeFenced(effects, ok, nok) {
    const self = this;
    /** @type {Construct} */ const closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
    };
    /** @type {Construct} */ const nonLazyLine = {
        tokenize: tokenizeNonLazyLine,
        partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeFenced");
        effects.enter("codeFencedFence");
        effects.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
    }
    /** @type {State} */ function sequenceOpen(code) {
        if (code === marker) {
            effects.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
    }
    /** @type {State} */ function infoOpen(code) {
        if (code === null || markdownLineEnding(code)) {
            return openAfter(code);
        }
        effects.enter("codeFencedFenceInfo");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return info(code);
    }
    /** @type {State} */ function info(code) {
        if (code === null || markdownLineEndingOrSpace(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceInfo");
            return factorySpace(effects, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return info;
    }
    /** @type {State} */ function infoAfter(code) {
        if (code === null || markdownLineEnding(code)) {
            return openAfter(code);
        }
        effects.enter("codeFencedFenceMeta");
        effects.enter("chunkString", {
            contentType: "string"
        });
        return meta(code);
    }
    /** @type {State} */ function meta(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("chunkString");
            effects.exit("codeFencedFenceMeta");
            return openAfter(code);
        }
        if (code === 96 && code === marker) return nok(code);
        effects.consume(code);
        return meta;
    }
    /** @type {State} */ function openAfter(code) {
        effects.exit("codeFencedFence");
        return self.interrupt ? ok(code) : contentStart(code);
    }
    /** @type {State} */ function contentStart(code) {
        if (code === null) {
            return after(code);
        }
        if (markdownLineEnding(code)) {
            return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code);
        }
        effects.enter("codeFlowValue");
        return contentContinue(code);
    }
    /** @type {State} */ function contentContinue(code) {
        if (code === null || markdownLineEnding(code)) {
            effects.exit("codeFlowValue");
            return contentStart(code);
        }
        effects.consume(code);
        return contentContinue;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeFenced");
        return ok(code);
    }
    /** @type {Tokenizer} */ function tokenizeNonLazyLine(effects, ok, nok) {
        const self = this;
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {Tokenizer} */ function tokenizeClosingFence(effects, ok, nok) {
        let size = 0;
        return factorySpace(effects, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
        /** @type {State} */ function closingSequenceStart(code) {
            effects.enter("codeFencedFence");
            effects.enter("codeFencedFenceSequence");
            return closingSequence(code);
        }
        /** @type {State} */ function closingSequence(code) {
            if (code === marker) {
                effects.consume(code);
                size++;
                return closingSequence;
            }
            if (size < sizeOpen) return nok(code);
            effects.exit("codeFencedFenceSequence");
            return factorySpace(effects, closingSequenceEnd, "whitespace")(code);
        }
        /** @type {State} */ function closingSequenceEnd(code) {
            if (code === null || markdownLineEnding(code)) {
                effects.exit("codeFencedFence");
                return ok(code);
            }
            return nok(code);
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ const characterEntities = {
    AElig: "\xc6",
    AMP: "&",
    Aacute: "\xc1",
    Abreve: "Ă",
    Acirc: "\xc2",
    Acy: "А",
    Afr: "\uD835\uDD04",
    Agrave: "\xc0",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "\uD835\uDD38",
    ApplyFunction: "⁡",
    Aring: "\xc5",
    Ascr: "\uD835\uDC9C",
    Assign: "≔",
    Atilde: "\xc3",
    Auml: "\xc4",
    Backslash: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    Bcy: "Б",
    Because: "∵",
    Bernoullis: "ℬ",
    Beta: "Β",
    Bfr: "\uD835\uDD05",
    Bopf: "\uD835\uDD39",
    Breve: "˘",
    Bscr: "ℬ",
    Bumpeq: "≎",
    CHcy: "Ч",
    COPY: "\xa9",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    Cayleys: "ℭ",
    Ccaron: "Č",
    Ccedil: "\xc7",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "\xb8",
    CenterDot: "\xb7",
    Cfr: "ℭ",
    Chi: "Χ",
    CircleDot: "⊙",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    Colon: "∷",
    Colone: "⩴",
    Congruent: "≡",
    Conint: "∯",
    ContourIntegral: "∮",
    Copf: "ℂ",
    Coproduct: "∐",
    CounterClockwiseContourIntegral: "∳",
    Cross: "⨯",
    Cscr: "\uD835\uDC9E",
    Cup: "⋓",
    CupCap: "≍",
    DD: "ⅅ",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    Delta: "Δ",
    Dfr: "\uD835\uDD07",
    DiacriticalAcute: "\xb4",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    Diamond: "⋄",
    DifferentialD: "ⅆ",
    Dopf: "\uD835\uDD3B",
    Dot: "\xa8",
    DotDot: "⃜",
    DotEqual: "≐",
    DoubleContourIntegral: "∯",
    DoubleDot: "\xa8",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    Downarrow: "⇓",
    Dscr: "\uD835\uDC9F",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "\xd0",
    Eacute: "\xc9",
    Ecaron: "Ě",
    Ecirc: "\xca",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "\uD835\uDD08",
    Egrave: "\xc8",
    Element: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "\uD835\uDD3C",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    Equilibrium: "⇌",
    Escr: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "\xcb",
    Exists: "∃",
    ExponentialE: "ⅇ",
    Fcy: "Ф",
    Ffr: "\uD835\uDD09",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    Fopf: "\uD835\uDD3D",
    ForAll: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "\uD835\uDD0A",
    Gg: "⋙",
    Gopf: "\uD835\uDD3E",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "\uD835\uDCA2",
    Gt: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    Hopf: "ℍ",
    HorizontalLine: "─",
    Hscr: "ℋ",
    Hstrok: "Ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "\xcd",
    Icirc: "\xce",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Igrave: "\xcc",
    Im: "ℑ",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    Implies: "⇒",
    Int: "∬",
    Integral: "∫",
    Intersection: "⋂",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    Iogon: "Į",
    Iopf: "\uD835\uDD40",
    Iota: "Ι",
    Iscr: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "\xcf",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "\uD835\uDD0D",
    Jopf: "\uD835\uDD41",
    Jscr: "\uD835\uDCA5",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "\uD835\uDD0E",
    Kopf: "\uD835\uDD42",
    Kscr: "\uD835\uDCA6",
    LJcy: "Љ",
    LT: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Larr: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    LeftRightArrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    Leftarrow: "⇐",
    Leftrightarrow: "⇔",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    Lfr: "\uD835\uDD0F",
    Ll: "⋘",
    Lleftarrow: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    LongLeftRightArrow: "⟷",
    LongRightArrow: "⟶",
    Longleftarrow: "⟸",
    Longleftrightarrow: "⟺",
    Longrightarrow: "⟹",
    Lopf: "\uD835\uDD43",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    Lscr: "ℒ",
    Lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "\uD835\uDD10",
    MinusPlus: "∓",
    Mopf: "\uD835\uDD44",
    Mscr: "ℳ",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    Nfr: "\uD835\uDD11",
    NoBreak: "⁠",
    NonBreakingSpace: "\xa0",
    Nopf: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    Nscr: "\uD835\uDCA9",
    Ntilde: "\xd1",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "\uD835\uDD12",
    Ograve: "\xd2",
    Omacr: "Ō",
    Omega: "Ω",
    Omicron: "Ο",
    Oopf: "\uD835\uDD46",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    Or: "⩔",
    Oscr: "\uD835\uDCAA",
    Oslash: "\xd8",
    Otilde: "\xd5",
    Otimes: "⨷",
    Ouml: "\xd6",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    Pcy: "П",
    Pfr: "\uD835\uDD13",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "\xb1",
    Poincareplane: "ℌ",
    Popf: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    Prime: "″",
    Product: "∏",
    Proportion: "∷",
    Proportional: "∝",
    Pscr: "\uD835\uDCAB",
    Psi: "Ψ",
    QUOT: '"',
    Qfr: "\uD835\uDD14",
    Qopf: "ℚ",
    Qscr: "\uD835\uDCAC",
    RBarr: "⤐",
    REG: "\xae",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    Rfr: "ℜ",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    Rightarrow: "⇒",
    Ropf: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    Rscr: "ℛ",
    Rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "\uD835\uDD16",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    Sopf: "\uD835\uDD4A",
    Sqrt: "√",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    Sscr: "\uD835\uDCAE",
    Star: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    SuchThat: "∋",
    Sum: "∑",
    Sup: "⋑",
    Superset: "⊃",
    SupersetEqual: "⊇",
    Supset: "⋑",
    THORN: "\xde",
    TRADE: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "\uD835\uDD17",
    Therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    Topf: "\uD835\uDD4B",
    TripleDot: "⃛",
    Tscr: "\uD835\uDCAF",
    Tstrok: "Ŧ",
    Uacute: "\xda",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "\xdb",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "\uD835\uDD18",
    Ugrave: "\xd9",
    Umacr: "Ū",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    Uopf: "\uD835\uDD4C",
    UpArrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    UpEquilibrium: "⥮",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    Uparrow: "⇑",
    Updownarrow: "⇕",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "\uD835\uDCB0",
    Utilde: "Ũ",
    Uuml: "\xdc",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "\uD835\uDD19",
    Vopf: "\uD835\uDD4D",
    Vscr: "\uD835\uDCB1",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    Wfr: "\uD835\uDD1A",
    Wopf: "\uD835\uDD4E",
    Wscr: "\uD835\uDCB2",
    Xfr: "\uD835\uDD1B",
    Xi: "Ξ",
    Xopf: "\uD835\uDD4F",
    Xscr: "\uD835\uDCB3",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "\xdd",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "\uD835\uDD1C",
    Yopf: "\uD835\uDD50",
    Yscr: "\uD835\uDCB4",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    Zfr: "ℨ",
    Zopf: "ℤ",
    Zscr: "\uD835\uDCB5",
    aacute: "\xe1",
    abreve: "ă",
    ac: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "\xe2",
    acute: "\xb4",
    acy: "а",
    aelig: "\xe6",
    af: "⁡",
    afr: "\uD835\uDD1E",
    agrave: "\xe0",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "\xc5",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "\uD835\uDD52",
    ap: "≈",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    apid: "≋",
    apos: "'",
    approx: "≈",
    approxeq: "≊",
    aring: "\xe5",
    ascr: "\uD835\uDCB6",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    atilde: "\xe3",
    auml: "\xe4",
    awconint: "∳",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    bfr: "\uD835\uDD1F",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "\uD835\uDD53",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxh: "─",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    bprime: "‵",
    breve: "˘",
    brvbar: "\xa6",
    bscr: "\uD835\uDCB7",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    bumpeq: "≏",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "\xe7",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cedil: "\xb8",
    cemptyv: "⦲",
    cent: "\xa2",
    centerdot: "\xb7",
    cfr: "\uD835\uDD20",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledR: "\xae",
    circledS: "Ⓢ",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    conint: "∮",
    copf: "\uD835\uDD54",
    coprod: "∐",
    copy: "\xa9",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "\uD835\uDCB8",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "\xa4",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dArr: "⇓",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    darr: "↓",
    dash: "‐",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    dcaron: "ď",
    dcy: "д",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    ddotseq: "⩷",
    deg: "\xb0",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "\uD835\uDD21",
    dharl: "⇃",
    dharr: "⇂",
    diam: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "\xa8",
    digamma: "ϝ",
    disin: "⋲",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "\uD835\uDD55",
    dot: "˙",
    doteq: "≐",
    doteqdot: "≑",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    downarrow: "↓",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    dscr: "\uD835\uDCB9",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eDDot: "⩷",
    eDot: "≑",
    eacute: "\xe9",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    ecirc: "\xea",
    ecolon: "≕",
    ecy: "э",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    efr: "\uD835\uDD22",
    eg: "⪚",
    egrave: "\xe8",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "\uD835\uDD56",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    equals: "=",
    equest: "≟",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    erarr: "⥱",
    escr: "ℯ",
    esdot: "≐",
    esim: "≂",
    eta: "η",
    eth: "\xf0",
    euml: "\xeb",
    euro: "€",
    excl: "!",
    exist: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "\uD835\uDD23",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "\uD835\uDD57",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "\xbd",
    frac13: "⅓",
    frac14: "\xbc",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "\xbe",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "\uD835\uDCBB",
    gE: "≧",
    gEl: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gammad: "ϝ",
    gap: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    ge: "≥",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "\uD835\uDD24",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    gjcy: "ѓ",
    gl: "≷",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    gopf: "\uD835\uDD58",
    grave: "`",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hArr: "⇔",
    hairsp: " ",
    half: "\xbd",
    hamilt: "ℋ",
    hardcy: "ъ",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    hbar: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "\uD835\uDD25",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "\uD835\uDD59",
    horbar: "―",
    hscr: "\uD835\uDCBD",
    hslash: "ℏ",
    hstrok: "ħ",
    hybull: "⁃",
    hyphen: "‐",
    iacute: "\xed",
    ic: "⁣",
    icirc: "\xee",
    icy: "и",
    iecy: "е",
    iexcl: "\xa1",
    iff: "⇔",
    ifr: "\uD835\uDD26",
    igrave: "\xec",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    image: "ℑ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "\uD835\uDD5A",
    iota: "ι",
    iprod: "⨼",
    iquest: "\xbf",
    iscr: "\uD835\uDCBE",
    isin: "∈",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "\xef",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "\uD835\uDD27",
    jmath: "ȷ",
    jopf: "\uD835\uDD5B",
    jscr: "\uD835\uDCBF",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "\uD835\uDD28",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "\uD835\uDD5C",
    kscr: "\uD835\uDCC0",
    lAarr: "⇚",
    lArr: "⇐",
    lAtail: "⤛",
    lBarr: "⤎",
    lE: "≦",
    lEg: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    lambda: "λ",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    laquo: "\xab",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leftarrow: "←",
    leftarrowtail: "↢",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    leftthreetimes: "⋋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    lessgtr: "≶",
    lesssim: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    lfr: "\uD835\uDD29",
    lg: "≶",
    lgE: "⪑",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    lopf: "\uD835\uDD5D",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "\uD835\uDCC1",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    lstrok: "ł",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "\xaf",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    measuredangle: "∡",
    mfr: "\uD835\uDD2A",
    mho: "℧",
    micro: "\xb5",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "\xb7",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    mopf: "\uD835\uDD5E",
    mp: "∓",
    mscr: "\uD835\uDCC2",
    mstpos: "∾",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nGtv: "≫̸",
    nLeftarrow: "⇍",
    nLeftrightarrow: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nLtv: "≪̸",
    nRightarrow: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nabla: "∇",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: "\xa0",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    neArr: "⇗",
    nearhk: "⤤",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    nexist: "∄",
    nexists: "∄",
    nfr: "\uD835\uDD2B",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    ngsim: "≵",
    ngt: "≯",
    ngtr: "≯",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    njcy: "њ",
    nlArr: "⇍",
    nlE: "≦̸",
    nlarr: "↚",
    nldr: "‥",
    nle: "≰",
    nleftarrow: "↚",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nlsim: "≴",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nmid: "∤",
    nopf: "\uD835\uDD5F",
    not: "\xac",
    notin: "∉",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    nscr: "\uD835\uDCC3",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    ntilde: "\xf1",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    oS: "Ⓢ",
    oacute: "\xf3",
    oast: "⊛",
    ocir: "⊚",
    ocirc: "\xf4",
    ocy: "о",
    odash: "⊝",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "\uD835\uDD2C",
    ogon: "˛",
    ograve: "\xf2",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    oopf: "\uD835\uDD60",
    opar: "⦷",
    operp: "⦹",
    oplus: "⊕",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oscr: "ℴ",
    oslash: "\xf8",
    osol: "⊘",
    otilde: "\xf5",
    otimes: "⊗",
    otimesas: "⨶",
    ouml: "\xf6",
    ovbar: "⌽",
    par: "∥",
    para: "\xb6",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    pfr: "\uD835\uDD2D",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    plusmn: "\xb1",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "\xb1",
    pointint: "⨕",
    popf: "\uD835\uDD61",
    pound: "\xa3",
    pr: "≺",
    prE: "⪳",
    prap: "⪷",
    prcue: "≼",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    prime: "′",
    primes: "ℙ",
    prnE: "⪵",
    prnap: "⪹",
    prnsim: "⋨",
    prod: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    pscr: "\uD835\uDCC5",
    psi: "ψ",
    puncsp: " ",
    qfr: "\uD835\uDD2E",
    qint: "⨌",
    qopf: "\uD835\uDD62",
    qprime: "⁗",
    qscr: "\uD835\uDCC6",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    rAarr: "⇛",
    rArr: "⇒",
    rAtail: "⤜",
    rBarr: "⤏",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "\xbb",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    reg: "\xae",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "\uD835\uDD2F",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    rightarrow: "→",
    rightarrowtail: "↣",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    rightthreetimes: "⋌",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "\uD835\uDD63",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    rsaquo: "›",
    rscr: "\uD835\uDCC7",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    sbquo: "‚",
    sc: "≻",
    scE: "⪴",
    scap: "⪸",
    scaron: "š",
    sccue: "≽",
    sce: "⪰",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    scnap: "⪺",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    seArr: "⇘",
    searhk: "⤥",
    searr: "↘",
    searrow: "↘",
    sect: "\xa7",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    sfr: "\uD835\uDD30",
    sfrown: "⌢",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shortmid: "∣",
    shortparallel: "∥",
    shy: "\xad",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "\uD835\uDD64",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    square: "□",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    sscr: "\uD835\uDCC8",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "\xaf",
    sub: "⊂",
    subE: "⫅",
    subdot: "⪽",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    sum: "∑",
    sung: "♪",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    sup: "⊃",
    supE: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supe: "⊇",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swarhk: "⤦",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "\xdf",
    target: "⌖",
    tau: "τ",
    tbrk: "⎴",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    tfr: "\uD835\uDD31",
    there4: "∴",
    therefore: "∴",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    thorn: "\xfe",
    tilde: "˜",
    times: "\xd7",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    topf: "\uD835\uDD65",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "\uD835\uDCC9",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    uArr: "⇑",
    uHar: "⥣",
    uacute: "\xfa",
    uarr: "↑",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "\xfb",
    ucy: "у",
    udarr: "⇅",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    ufr: "\uD835\uDD32",
    ugrave: "\xf9",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uml: "\xa8",
    uogon: "ų",
    uopf: "\uD835\uDD66",
    uparrow: "↑",
    updownarrow: "↕",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    upsi: "υ",
    upsih: "ϒ",
    upsilon: "υ",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "\uD835\uDCCA",
    utdot: "⋰",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    uuml: "\xfc",
    uwangle: "⦧",
    vArr: "⇕",
    vBar: "⫨",
    vBarv: "⫩",
    vDash: "⊨",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vcy: "в",
    vdash: "⊢",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    vert: "|",
    vfr: "\uD835\uDD33",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    vopf: "\uD835\uDD67",
    vprop: "∝",
    vrtri: "⊳",
    vscr: "\uD835\uDCCB",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    wfr: "\uD835\uDD34",
    wopf: "\uD835\uDD68",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    wscr: "\uD835\uDCCC",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    xfr: "\uD835\uDD35",
    xhArr: "⟺",
    xharr: "⟷",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    xopf: "\uD835\uDD69",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    xscr: "\uD835\uDCCD",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    yacute: "\xfd",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "\xa5",
    yfr: "\uD835\uDD36",
    yicy: "ї",
    yopf: "\uD835\uDD6A",
    yscr: "\uD835\uDCCE",
    yucy: "ю",
    yuml: "\xff",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeetrf: "ℨ",
    zeta: "ζ",
    zfr: "\uD835\uDD37",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "\uD835\uDD6B",
    zscr: "\uD835\uDCCF",
    zwj: "‍",
    zwnj: "‌"
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js

const decode_named_character_reference_own = {}.hasOwnProperty;
/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */ function decodeNamedCharacterReference(value) {
    return decode_named_character_reference_own.call(characterEntities, value) ? characterEntities[value] : false;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-reference.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/** @type {Construct} */ const characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
};
/** @type {Tokenizer} */ function tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */ let max;
    /** @type {(code: Code) => code is number} */ let test;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 35) {
            effects.enter("characterReferenceMarkerNumeric");
            effects.consume(code);
            effects.exit("characterReferenceMarkerNumeric");
            return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = asciiAlphanumeric;
        return value(code);
    }
    /** @type {State} */ function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter("characterReferenceMarkerHexadecimal");
            effects.consume(code);
            effects.exit("characterReferenceMarkerHexadecimal");
            effects.enter("characterReferenceValue");
            max = 6;
            test = asciiHexDigit;
            return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = asciiDigit;
        return value(code);
    }
    /** @type {State} */ function value(code) {
        /** @type {Token} */ let token;
        if (code === 59 && size) {
            token = effects.exit("characterReferenceValue");
            if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
                return nok(code);
            }
            effects.enter("characterReferenceMarker");
            effects.consume(code);
            effects.exit("characterReferenceMarker");
            effects.exit("characterReference");
            return ok;
        }
        if (test(code) && size++ < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-escape.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
};
/** @type {Tokenizer} */ function tokenizeCharacterEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (asciiPunctuation(code)) {
            effects.enter("characterEscapeValue");
            effects.consume(code);
            effects.exit("characterEscapeValue");
            effects.exit("characterEscape");
            return ok;
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/line-ending.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 

/** @type {Construct} */ const lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
};
/** @type {Tokenizer} */ function tokenizeLineEnding(effects, ok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, ok, "linePrefix");
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-end.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 







/** @type {Construct} */ const labelEnd = {
    name: "labelEnd",
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
};
/** @type {Construct} */ const resourceConstruct = {
    tokenize: tokenizeResource
};
/** @type {Construct} */ const fullReferenceConstruct = {
    tokenize: tokenizeFullReference
};
/** @type {Construct} */ const collapsedReferenceConstruct = {
    tokenize: tokenizeCollapsedReference
};
/** @type {Resolver} */ function resolveAllLabelEnd(events) {
    let index = -1;
    /** @type {Token} */ let token;
    while(++index < events.length){
        token = events[index][1];
        if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
            // Remove the marker.
            events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
            token.type = "data";
            index++;
        }
    }
    return events;
}
/** @type {Resolver} */ function resolveToLabelEnd(events, context) {
    let index = events.length;
    let offset = 0;
    /** @type {Token} */ let token;
    /** @type {number|undefined} */ let open;
    /** @type {number|undefined} */ let close;
    /** @type {Event[]} */ let media // Find an opening.
    ;
    while(index--){
        token = events[index][1];
        if (open) {
            // If we see another link, or inactive link label, we’ve been here before.
            if (token.type === "link" || token.type === "labelLink" && token._inactive) {
                break;
            } // Mark other link openings as inactive, as we can’t have links in
            // links.
            if (events[index][0] === "enter" && token.type === "labelLink") {
                token._inactive = true;
            }
        } else if (close) {
            if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
                open = index;
                if (token.type !== "labelLink") {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === "labelEnd") {
            close = index;
        }
    }
    const group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
        type: "label",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[close][1].end)
    };
    const text = {
        type: "labelText",
        start: Object.assign({}, events[open + offset + 2][1].end),
        end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
        [
            "enter",
            group,
            context
        ],
        [
            "enter",
            label,
            context
        ]
    ] // Opening marker.
    ;
    media = push(media, events.slice(open + 1, open + offset + 3)) // Text open.
    ;
    media = push(media, [
        [
            "enter",
            text,
            context
        ]
    ]) // Between.
    ;
    media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)) // Text close, marker close, label close.
    ;
    media = push(media, [
        [
            "exit",
            text,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            "exit",
            label,
            context
        ]
    ]) // Reference, resource, or so.
    ;
    media = push(media, events.slice(close + 1)) // Media close.
    ;
    media = push(media, [
        [
            "exit",
            group,
            context
        ]
    ]);
    splice(events, open, events.length, media);
    return events;
}
/** @type {Tokenizer} */ function tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */ let labelStart;
    /** @type {boolean} */ let defined // Find an opening.
    ;
    while(index--){
        if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
            labelStart = self.events[index][1];
            break;
        }
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!labelStart) {
            return nok(code);
        } // It’s a balanced bracket, but contains a link.
        if (labelStart._inactive) return balanced(code);
        defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        })));
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
    }
    /** @type {State} */ function afterLabelEnd(code) {
        // Resource: `[asd](fgh)`.
        if (code === 40) {
            return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
        } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
        if (code === 91) {
            return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
        } // Shortcut reference: `[asd]`?
        return defined ? ok(code) : balanced(code);
    }
    /** @type {State} */ function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeResource(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return factoryWhitespace(effects, open);
    }
    /** @type {State} */ function open(code) {
        if (code === 41) {
            return end(code);
        }
        return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
    }
    /** @type {State} */ function destinationAfter(code) {
        return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
    }
    /** @type {State} */ function between(code) {
        if (code === 34 || code === 39 || code === 40) {
            return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        }
        return end(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 41) {
            effects.enter("resourceMarker");
            effects.consume(code);
            effects.exit("resourceMarker");
            effects.exit("resource");
            return ok;
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeFullReference(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
    }
    /** @type {State} */ function afterLabel(code) {
        return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeCollapsedReference(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 93) {
            effects.enter("referenceMarker");
            effects.consume(code);
            effects.exit("referenceMarker");
            effects.exit("reference");
            return ok;
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-image.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const labelStartImage = {
    name: "labelStartImage",
    tokenize: tokenizeLabelStartImage,
    resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */ function tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 91) {
            effects.enter("labelMarker");
            effects.consume(code);
            effects.exit("labelMarker");
            effects.exit("labelImage");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-classify-character@1.0.0/node_modules/micromark-util-classify-character/index.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ 
/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */ function classifyCharacter(code) {
    if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
        return 1;
    }
    if (unicodePunctuation(code)) {
        return 2;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/attention.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */ 


/** @type {Construct} */ const attention = {
    name: "attention",
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */ function resolveAllAttention(events, context) {
    let index = -1;
    /** @type {number} */ let open;
    /** @type {Token} */ let group;
    /** @type {Token} */ let text;
    /** @type {Token} */ let openingSequence;
    /** @type {Token} */ let closingSequence;
    /** @type {number} */ let use;
    /** @type {Event[]} */ let nextEvents;
    /** @type {number} */ let offset // Walk through all events.
    ;
    //
    // Note: performance of this is fine on an mb of normal markdown, but it’s
    // a bottleneck for malicious stuff.
    while(++index < events.length){
        // Find a token that can close.
        if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
            open = index // Now walk back to find an opener.
            ;
            while(open--){
                // Find a token that can open the closer.
                if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && // If the markers are the same:
                context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
                    // If the opening can close or the closing can open,
                    // and the close size *is not* a multiple of three,
                    // but the sum of the opening and closing size *is* multiple of three,
                    // then don’t match.
                    if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
                        continue;
                    } // Number of markers to use from the sequence.
                    use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
                    const start = Object.assign({}, events[open][1].end);
                    const end = Object.assign({}, events[index][1].start);
                    movePoint(start, -use);
                    movePoint(end, use);
                    openingSequence = {
                        type: use > 1 ? "strongSequence" : "emphasisSequence",
                        start,
                        end: Object.assign({}, events[open][1].end)
                    };
                    closingSequence = {
                        type: use > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, events[index][1].start),
                        end
                    };
                    text = {
                        type: use > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, events[open][1].end),
                        end: Object.assign({}, events[index][1].start)
                    };
                    group = {
                        type: use > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, openingSequence.start),
                        end: Object.assign({}, closingSequence.end)
                    };
                    events[open][1].end = Object.assign({}, openingSequence.start);
                    events[index][1].start = Object.assign({}, closingSequence.end);
                    nextEvents = [] // If there are more markers in the opening, add them before.
                    ;
                    if (events[open][1].end.offset - events[open][1].start.offset) {
                        nextEvents = push(nextEvents, [
                            [
                                "enter",
                                events[open][1],
                                context
                            ],
                            [
                                "exit",
                                events[open][1],
                                context
                            ]
                        ]);
                    } // Opening.
                    nextEvents = push(nextEvents, [
                        [
                            "enter",
                            group,
                            context
                        ],
                        [
                            "enter",
                            openingSequence,
                            context
                        ],
                        [
                            "exit",
                            openingSequence,
                            context
                        ],
                        [
                            "enter",
                            text,
                            context
                        ]
                    ]) // Between.
                    ;
                    nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)) // Closing.
                    ;
                    nextEvents = push(nextEvents, [
                        [
                            "exit",
                            text,
                            context
                        ],
                        [
                            "enter",
                            closingSequence,
                            context
                        ],
                        [
                            "exit",
                            closingSequence,
                            context
                        ],
                        [
                            "exit",
                            group,
                            context
                        ]
                    ]) // If there are more markers in the closing, add them after.
                    ;
                    if (events[index][1].end.offset - events[index][1].start.offset) {
                        offset = 2;
                        nextEvents = push(nextEvents, [
                            [
                                "enter",
                                events[index][1],
                                context
                            ],
                            [
                                "exit",
                                events[index][1],
                                context
                            ]
                        ]);
                    } else {
                        offset = 0;
                    }
                    splice(events, open - 1, index - open + 3, nextEvents);
                    index = open + nextEvents.length - offset - 2;
                    break;
                }
            }
        }
    } // Remove remaining sequences.
    index = -1;
    while(++index < events.length){
        if (events[index][1].type === "attentionSequence") {
            events[index][1].type = "data";
        }
    }
    return events;
}
/** @type {Tokenizer} */ function tokenizeAttention(effects, ok) {
    const attentionMarkers = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const before = classifyCharacter(previous);
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            return sequence;
        }
        const token = effects.exit("attentionSequence");
        const after = classifyCharacter(code);
        const open = !after || after === 2 && before || attentionMarkers.includes(code);
        const close = !before || before === 2 && after || attentionMarkers.includes(previous);
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code);
    }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */ function movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/autolink.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
};
/** @type {Tokenizer} */ function tokenizeAutolink(effects, ok, nok) {
    let size = 1;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (asciiAlpha(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return asciiAtext(code) ? emailAtext(code) : nok(code);
    }
    /** @type {State} */ function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
    }
    /** @type {State} */ function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
    }
    /** @type {State} */ function urlInside(code) {
        if (code === 62) {
            effects.exit("autolinkProtocol");
            return end(code);
        }
        if (code === null || code === 32 || code === 60 || asciiControl(code)) {
            return nok(code);
        }
        effects.consume(code);
        return urlInside;
    }
    /** @type {State} */ function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (asciiAtext(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    /** @type {State} */ function emailAtSignOrDot(code) {
        return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
    }
    /** @type {State} */ function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            // Exit, then change the type.
            effects.exit("autolinkProtocol").type = "autolinkEmail";
            return end(code);
        }
        return emailValue(code);
    }
    /** @type {State} */ function emailValue(code) {
        if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
            effects.consume(code);
            return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
    }
    /** @type {State} */ function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-text.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ 

/** @type {Construct} */ const htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
};
/** @type {Tokenizer} */ function tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>|undefined} */ let marker;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {State} */ let returnState;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            return instruction;
        }
        if (asciiAlpha(code)) {
            effects.consume(code);
            return tagOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentOpen;
        }
        if (code === 91) {
            effects.consume(code);
            buffer = "CDATA[";
            index = 0;
            return cdataOpen;
        }
        if (asciiAlpha(code)) {
            effects.consume(code);
            return declaration;
        }
        return nok(code);
    }
    /** @type {State} */ function commentOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentStart;
        }
        return nok(code);
    }
    /** @type {State} */ function commentStart(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentStartDash;
        }
        return comment(code);
    }
    /** @type {State} */ function commentStartDash(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        return comment(code);
    }
    /** @type {State} */ function comment(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if (markdownLineEnding(code)) {
            returnState = comment;
            return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
    }
    /** @type {State} */ function commentClose(code) {
        if (code === 45) {
            effects.consume(code);
            return end;
        }
        return comment(code);
    }
    /** @type {State} */ function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function cdata(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if (markdownLineEnding(code)) {
            returnState = cdata;
            return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
    }
    /** @type {State} */ function cdataClose(code) {
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function cdataEnd(code) {
        if (code === 62) {
            return end(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function declaration(code) {
        if (code === null || code === 62) {
            return end(code);
        }
        if (markdownLineEnding(code)) {
            returnState = declaration;
            return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
    }
    /** @type {State} */ function instruction(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if (markdownLineEnding(code)) {
            returnState = instruction;
            return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
    }
    /** @type {State} */ function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if (asciiAlpha(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    /** @type {State} */ function tagClose(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    /** @type {State} */ function tagCloseBetween(code) {
        if (markdownLineEnding(code)) {
            returnState = tagCloseBetween;
            return atLineEnding(code);
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpen(code) {
        if (code === 45 || asciiAlphanumeric(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        if (code === 58 || code === 95 || asciiAlpha(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if (markdownLineEnding(code)) {
            returnState = tagOpenBetween;
            return atLineEnding(code);
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
    }
    /** @type {State} */ function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        if (markdownLineEnding(code)) {
            returnState = tagOpenAttributeNameAfter;
            return atLineEnding(code);
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    /** @type {State} */ function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if (markdownLineEnding(code)) {
            returnState = tagOpenAttributeValueBefore;
            return atLineEnding(code);
        }
        if (markdownSpace(code)) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = undefined;
        return tagOpenAttributeValueUnquoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
            return nok(code);
        }
        if (markdownLineEnding(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
            return nok(code);
        }
        if (code === 62 || markdownLineEndingOrSpace(code)) {
            return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    } // We can’t have blank lines in content, so no need to worry about empty
    // tokens.
    /** @type {State} */ function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
    }
    /** @type {State} */ function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit("htmlTextData");
            effects.exit("htmlText");
            return ok;
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-link.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const labelStartLink = {
    name: "labelStartLink",
    tokenize: tokenizeLabelStartLink,
    resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */ function tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook. */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
};
/** @type {Tokenizer} */ function tokenizeHardBreakEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (markdownLineEnding(code)) {
            effects.exit("escapeMarker");
            effects.exit("hardBreakEscape");
            return ok(code);
        }
        return nok(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-text.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ 
/** @type {Construct} */ const codeText = {
    name: "codeText",
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous
};
/** @type {Resolver} */ function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */ let index;
    /** @type {number|undefined} */ let enter // If we start and end with an EOL or a space.
    ;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex // And we have data.
        ;
        while(++index < tailExitIndex){
            if (events[index][1].type === "codeTextData") {
                // Then we have padding.
                events[headEnterIndex][1].type = "codeTextPadding";
                events[tailExitIndex][1].type = "codeTextPadding";
                headEnterIndex += 2;
                tailExitIndex -= 2;
                break;
            }
        }
    } // Merge adjacent spaces and data.
    index = headEnterIndex - 1;
    tailExitIndex++;
    while(++index <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
                enter = index;
            }
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
            events[enter][1].type = "codeTextData";
            if (index !== enter + 2) {
                events[enter][1].end = events[index - 1][1].end;
                events.splice(enter + 2, index - enter - 2);
                tailExitIndex -= index - enter - 2;
                index = enter + 2;
            }
            enter = undefined;
        }
    }
    return events;
}
/** @type {Previous} */ function previous(code) {
    // If there is a previous code, there will always be a tail.
    return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
/** @type {Tokenizer} */ function tokenizeCodeText(effects, ok, nok) {
    const self = this;
    let sizeOpen = 0;
    /** @type {number} */ let size;
    /** @type {Token} */ let token;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
    }
    /** @type {State} */ function openingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
    }
    /** @type {State} */ function gap(code) {
        // EOF.
        if (code === null) {
            return nok(code);
        } // Closing fence?
        // Could also be data.
        if (code === 96) {
            token = effects.enter("codeTextSequence");
            size = 0;
            return closingSequence(code);
        } // Tabs don’t work, and virtual spaces don’t make sense.
        if (code === 32) {
            effects.enter("space");
            effects.consume(code);
            effects.exit("space");
            return gap;
        }
        if (markdownLineEnding(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return gap;
        } // Data.
        effects.enter("codeTextData");
        return data(code);
    } // In code.
    /** @type {State} */ function data(code) {
        if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
            effects.exit("codeTextData");
            return gap(code);
        }
        effects.consume(code);
        return data;
    } // Closing fence.
    /** @type {State} */ function closingSequence(code) {
        // More.
        if (code === 96) {
            effects.consume(code);
            size++;
            return closingSequence;
        } // Done!
        if (size === sizeOpen) {
            effects.exit("codeTextSequence");
            effects.exit("codeText");
            return ok(code);
        } // More or less accents: mark as data.
        token.type = "codeTextData";
        return data(code);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/constructs.js
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */ 

/** @type {Extension['document']} */ const constructs_document = {
    [42]: list,
    [43]: list,
    [45]: list,
    [48]: list,
    [49]: list,
    [50]: list,
    [51]: list,
    [52]: list,
    [53]: list,
    [54]: list,
    [55]: list,
    [56]: list,
    [57]: list,
    [62]: blockQuote
};
/** @type {Extension['contentInitial']} */ const contentInitial = {
    [91]: definition
};
/** @type {Extension['flowInitial']} */ const flowInitial = {
    [-2]: codeIndented,
    [-1]: codeIndented,
    [32]: codeIndented
};
/** @type {Extension['flow']} */ const constructs_flow = {
    [35]: headingAtx,
    [42]: thematicBreak,
    [45]: [
        setextUnderline,
        thematicBreak
    ],
    [60]: htmlFlow,
    [61]: setextUnderline,
    [95]: thematicBreak,
    [96]: codeFenced,
    [126]: codeFenced
};
/** @type {Extension['string']} */ const constructs_string = {
    [38]: characterReference,
    [92]: characterEscape
};
/** @type {Extension['text']} */ const constructs_text = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    [33]: labelStartImage,
    [38]: characterReference,
    [42]: attention,
    [60]: [
        autolink,
        htmlText
    ],
    [91]: labelStartLink,
    [92]: [
        hardBreakEscape,
        characterEscape
    ],
    [93]: labelEnd,
    [95]: attention,
    [96]: codeText
};
/** @type {Extension['insideSpan']} */ const insideSpan = {
    null: [
        attention,
        resolver
    ]
};
/** @type {Extension['attentionMarkers']} */ const attentionMarkers = {
    null: [
        42,
        95
    ]
};
/** @type {Extension['disable']} */ const disable = {
    null: []
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/parse.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */ 






/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */ function parse(options = {}) {
    /** @type {FullNormalizedExtension} */ // @ts-expect-error `defaultConstructs` is full, so the result will be too.
    const constructs = combineExtensions(// @ts-expect-error Same as above.
    [
        constructs_namespaceObject
    ].concat(options.extensions || []));
    /** @type {ParseContext} */ const parser = {
        defined: [],
        lazy: {},
        constructs,
        content: create(content),
        document: create(document_document),
        flow: create(flow),
        string: create(string),
        text: create(text_text)
    };
    return parser;
    /**
   * @param {InitialConstruct} initial
   */ function create(initial) {
        return creator;
        /** @type {Create} */ function creator(from) {
            return createTokenizer(parser, initial, from);
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/preprocess.js
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Array<Chunk>}
 */ const search = /[\0\t\n\r]/g;
/**
 * @returns {Preprocessor}
 */ function preprocess() {
    let column = 1;
    let buffer = "";
    /** @type {boolean|undefined} */ let start = true;
    /** @type {boolean|undefined} */ let atCarriageReturn;
    return preprocessor;
    /** @type {Preprocessor} */ function preprocessor(value, encoding, end) {
        /** @type {Array<Chunk>} */ const chunks = [];
        /** @type {RegExpMatchArray|null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code // @ts-expect-error `Buffer` does allow an encoding.
        ;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
            if (value.charCodeAt(0) === 65279) {
                startPosition++;
            }
            start = undefined;
        }
        while(startPosition < value.length){
            search.lastIndex = startPosition;
            match = search.exec(value);
            endPosition = match && match.index !== undefined ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === 10 && startPosition === endPosition && atCarriageReturn) {
                chunks.push(-3);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(-5);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                switch(code){
                    case 0:
                        {
                            chunks.push(65533);
                            column++;
                            break;
                        }
                    case 9:
                        {
                            next = Math.ceil(column / 4) * 4;
                            chunks.push(-2);
                            while(column++ < next)chunks.push(-1);
                            break;
                        }
                    case 10:
                        {
                            chunks.push(-4);
                            column = 1;
                            break;
                        }
                    default:
                        {
                            atCarriageReturn = true;
                            column = 1;
                        }
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(-5);
            if (buffer) chunks.push(buffer);
            chunks.push(null);
        }
        return chunks;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/postprocess.js
/**
 * @typedef {import('micromark-util-types').Event} Event
 */ 
/**
 * @param {Array<Event>} events
 * @returns {Array<Event>}
 */ function postprocess(events) {
    while(!subtokenize(events)){
    // Empty
    }
    return events;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.0.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */ function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space
    code < 9 || code === 11 || code > 13 && code < 32 || // Control character (DEL) of the basic block and C1 controls.
    code > 126 && code < 160 || // Lone high surrogates and low surrogates.
    code > 55295 && code < 57344 || // Noncharacters.
    code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
    code > 1114111) {
        return "�";
    }
    return String.fromCharCode(code);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/micromark-util-decode-string@1.0.2/node_modules/micromark-util-decode-string/index.js


const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
/**
 * Utility to decode markdown strings (which occur in places such as fenced
 * code info strings, destinations, labels, and titles).
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 * @returns {string}
 */ function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */ function decode($0, $1, $2) {
    if ($1) {
        // Escape.
        return $1;
    } // Reference.
    const head = $2.charCodeAt(0);
    if (head === 35) {
        const head1 = $2.charCodeAt(1);
        const hex = head1 === 120 || head1 === 88;
        return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return decodeNamedCharacterReference($2) || $0;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-from-markdown@1.2.0/node_modules/mdast-util-from-markdown/lib/index.js
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {Root|Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 *
 * @typedef {UnistParent & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */ /**
 * @typedef _CompileDataFields
 * @property {boolean|undefined} expectingFirstListItemValue
 * @property {boolean|undefined} flowCodeInside
 * @property {boolean|undefined} setextHeadingSlurpLineEnding
 * @property {boolean|undefined} atHardBreak
 * @property {'collapsed'|'full'} referenceType
 * @property {boolean|undefined} inReference
 * @property {'characterReferenceMarkerHexadecimal'|'characterReferenceMarkerNumeric'} characterReferenceType
 *
 * @typedef {Record<string, unknown> & Partial<_CompileDataFields>} CompileData
 *
 * @typedef {(tree: Root) => Root|void} Transform
 * @typedef {(this: CompileContext, token: Token) => void} Handle
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 * @typedef {Record<string, Record<string, unknown>|Array<unknown>> & {canContainEols: Array<string>, transforms: Array<Transform>, enter: Handles, exit: Handles}} NormalizedExtension
 * @typedef {Partial<NormalizedExtension>} Extension
 *   An mdast extension changes how markdown tokens are turned into mdast.
 *
 * @typedef {(this: Omit<CompileContext, 'sliceSerialize'>, left: Token|undefined, right: Token) => void} OnEnterError
 * @typedef {(this: Omit<CompileContext, 'sliceSerialize'>, left: Token, right: Token) => void} OnExitError
 *
 * @typedef CompileContext
 *   mdast compiler context
 * @property {Array<Node | Fragment>} stack
 * @property {Array<[Token, OnEnterError|undefined]>} tokenStack
 * @property {(key: string, value?: unknown) => void} setData
 *   Set data into the key-value store.
 * @property {<K extends string>(key: K) => CompileData[K]} getData
 *   Get data from the key-value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<N extends Node>(this: CompileContext, node: N, token: Token, onError?: OnEnterError) => N} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {NormalizedExtension} config
 *   Configuration.
 *
 * @typedef {{mdastExtensions?: Array<Extension|Array<Extension>>}} FromMarkdownOptions
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 */ 








const lib_own = {}.hasOwnProperty;
/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */ const fromMarkdown = /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
   *   ((value: Value, options?: Options) => Root)
   * )}
   */ /**
   * @param {Value} value
   * @param {Encoding} [encoding]
   * @param {Options} [options]
   * @returns {Root}
   */ function(value, encoding, options) {
    if (typeof encoding !== "string") {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */ function compiler(options = {}) {
    /** @type {NormalizedExtension} */ // @ts-expect-error: our base has all required fields, so the result will too.
    const config = configure({
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    }, options.mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    /**
   * @param {Array<Event>} events
   * @returns {Root}
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: "root",
            children: []
        };
        /** @type {CompileContext['stack']} */ const stack = [
            tree
        ];
        /** @type {CompileContext['tokenStack']} */ const tokenStack = [];
        /** @type {Array<number>} */ const listStack = [];
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack,
            tokenStack,
            config,
            enter,
            exit,
            buffer,
            resume,
            setData,
            getData
        };
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
                if (events[index][0] === "enter") {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if (lib_own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        if (tokenStack.length > 0) {
            const tail1 = tokenStack[tokenStack.length - 1];
            const handler1 = tail1[1] || defaultOnError;
            handler1.call(context, undefined, tail1[0]);
        } // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token|undefined} */ let listItem;
        /** @type {number|undefined} */ let lineIndex;
        /** @type {number|undefined} */ let firstBlankLineIndex;
        /** @type {boolean|undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
                if (event[0] === "enter") {
                    containerBalance++;
                } else {
                    containerBalance--;
                }
                atMarker = undefined;
            } else if (event[1].type === "lineEndingBlank") {
                if (event[0] === "enter") {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                        firstBlankLineIndex = index;
                    }
                    atMarker = undefined;
                }
            } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
            // Empty.
            } else {
                atMarker = undefined;
            }
            if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                            if (tailEvent[0] === "exit") continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = "lineEndingBlank";
                                listSpread = true;
                            }
                            tailEvent[1].type = "lineEnding";
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        // @ts-expect-error Patched.
                        listItem._spread = true;
                    } // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        "exit",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                } // Create a new list item.
                if (event[1].type === "listItemPrefix") {
                    listItem = {
                        type: "listItem",
                        // @ts-expect-error Patched
                        _spread: false,
                        start: Object.assign({}, event[1].start)
                    } // @ts-expect-error: `listItem` is most definitely defined, TS...
                    ;
                    events.splice(index, 0, [
                        "enter",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        } // @ts-expect-error Patched.
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * @type {CompileContext['setData']}
   * @param [value]
   */ function setData(key, value) {
        data[key] = value;
    }
    /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */ function getData(key) {
        return data[key];
    }
    /**
   * @param {Point} d
   * @returns {Point}
   */ function point(d) {
        return {
            line: d.line,
            column: d.column,
            offset: d.offset
        };
    }
    /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
   */ function opener(create, and) {
        return open;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /** @type {CompileContext['buffer']} */ function buffer() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @param {OnEnterError} [errorHandler]
   * @returns {N}
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler
        ]) // @ts-expect-error: `end` will be patched later.
        ;
        node.position = {
            start: point(token.start)
        };
        return node;
    }
    /**
   * @param {Handle} [and]
   * @returns {Handle}
   */ function closer(and) {
        return close;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @type {CompileContext['exit']}
   * @this {CompileContext}
   * @param {Token} token
   * @param {OnExitError} [onExitError]
   * @returns {Node}
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
                start: token.start,
                end: token.end
            }) + "): it’s not open");
        } else if (open[0].type !== token.type) {
            if (onExitError) {
                onExitError.call(this, token, open[0]);
            } else {
                const handler = open[1] || defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        node.position.end = point(token.end);
        return node;
    }
    /**
   * @this {CompileContext}
   * @returns {string}
   */ function resume() {
        return (0,mdast_util_to_string/* toString */.B)(this.stack.pop());
    } //
    // Handlers.
    //
    /** @type {Handle} */ function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
    }
    /** @type {Handle} */ function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
            const ancestor = /** @type {List} */ this.stack[this.stack.length - 2];
            ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
            setData("expectingFirstListItemValue");
        }
    }
    /** @type {Handle} */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.lang = data;
    }
    /** @type {Handle} */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.meta = data;
    }
    /** @type {Handle} */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
    }
    /** @type {Handle} */ function onexitcodefenced() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
    }
    /** @type {Handle} */ function onexitcodeindented() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.value = data.replace(/(\r?\n|\r)$/g, "");
    }
    /** @type {Handle} */ function onexitdefinitionlabelstring(token) {
        // Discard label, use the source content instead.
        const label = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    }
    /** @type {Handle} */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.title = data;
    }
    /** @type {Handle} */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.url = data;
    }
    /** @type {Handle} */ function onexitatxheadingsequence(token) {
        const node = /** @type {Heading} */ this.stack[this.stack.length - 1];
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            node.depth = depth;
        }
    }
    /** @type {Handle} */ function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
    }
    /** @type {Handle} */ function onexitsetextheadinglinesequence(token) {
        const node = /** @type {Heading} */ this.stack[this.stack.length - 1];
        node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /** @type {Handle} */ function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
    }
    /** @type {Handle} */ function onenterdata(token) {
        const parent = /** @type {Parent} */ this.stack[this.stack.length - 1];
        /** @type {Node} */ let tail = parent.children[parent.children.length - 1];
        if (!tail || tail.type !== "text") {
            // Add a new text node.
            tail = text() // @ts-expect-error: we’ll add `end` later.
            ;
            tail.position = {
                start: point(token.start)
            } // @ts-expect-error: Assume `parent` accepts `text`.
            ;
            parent.children.push(tail);
        }
        this.stack.push(tail);
    }
    /** @type {Handle} */ function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData("atHardBreak")) {
            const tail = context.children[context.children.length - 1];
            tail.position.end = point(token.end);
            setData("atHardBreak");
            return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /** @type {Handle} */ function onexithardbreak() {
        setData("atHardBreak", true);
    }
    /** @type {Handle} */ function onexithtmlflow() {
        const data = this.resume();
        const node = /** @type {HTML} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexithtmltext() {
        const data = this.resume();
        const node = /** @type {HTML} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexitcodetext() {
        const data = this.resume();
        const node = /** @type {InlineCode} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexitlink() {
        const context = /** @type {Link & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData("inReference")) {
            context.type += "Reference" // @ts-expect-error: mutate.
            ;
            context.referenceType = getData("referenceType") || "shortcut" // @ts-expect-error: mutate.
            ;
            delete context.url;
            delete context.title;
        } else {
            // @ts-expect-error: mutate.
            delete context.identifier // @ts-expect-error: mutate.
            ;
            delete context.label;
        }
        setData("referenceType");
    }
    /** @type {Handle} */ function onexitimage() {
        const context = /** @type {Image & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData("inReference")) {
            context.type += "Reference" // @ts-expect-error: mutate.
            ;
            context.referenceType = getData("referenceType") || "shortcut" // @ts-expect-error: mutate.
            ;
            delete context.url;
            delete context.title;
        } else {
            // @ts-expect-error: mutate.
            delete context.identifier // @ts-expect-error: mutate.
            ;
            delete context.label;
        }
        setData("referenceType");
    }
    /** @type {Handle} */ function onexitlabeltext(token) {
        const ancestor = /** @type {(Link|Image) & {identifier: string, label: string}} */ this.stack[this.stack.length - 2];
        const string = this.sliceSerialize(token);
        ancestor.label = decodeString(string);
        ancestor.identifier = normalizeIdentifier(string).toLowerCase();
    }
    /** @type {Handle} */ function onexitlabel() {
        const fragment = /** @type {Fragment} */ this.stack[this.stack.length - 1];
        const value = this.resume();
        const node = /** @type {(Link|Image) & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // Assume a reference.
        ;
        setData("inReference", true);
        if (node.type === "link") {
            // @ts-expect-error: Assume static phrasing content.
            node.children = fragment.children;
        } else {
            node.alt = value;
        }
    }
    /** @type {Handle} */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = /** @type {Link|Image} */ this.stack[this.stack.length - 1];
        node.url = data;
    }
    /** @type {Handle} */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = /** @type {Link|Image} */ this.stack[this.stack.length - 1];
        node.title = data;
    }
    /** @type {Handle} */ function onexitresource() {
        setData("inReference");
    }
    /** @type {Handle} */ function onenterreference() {
        setData("referenceType", "collapsed");
    }
    /** @type {Handle} */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = /** @type {LinkReference|ImageReference} */ this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
    }
    /** @type {Handle} */ function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
    }
    /** @type {Handle} */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData("characterReferenceType");
        /** @type {string} */ let value;
        if (type) {
            value = decodeNumericCharacterReference(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
            setData("characterReferenceType");
        } else {
            // @ts-expect-error `decodeNamedCharacterReference` can return false for
            // invalid named character references, but everything we’ve tokenized is
            // valid.
            value = decodeNamedCharacterReference(data);
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = /** @type {Link} */ this.stack[this.stack.length - 1];
        node.url = this.sliceSerialize(token);
    }
    /** @type {Handle} */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = /** @type {Link} */ this.stack[this.stack.length - 1];
        node.url = "mailto:" + this.sliceSerialize(token);
    } //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: "blockquote",
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: "emphasis",
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
            type: "heading",
            depth: undefined,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: "break"
        };
    }
    /** @returns {HTML} */ function html() {
        return {
            type: "html",
            value: ""
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: "list",
            ordered: token.type === "listOrdered",
            start: null,
            // @ts-expect-error Patched.
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: "listItem",
            // @ts-expect-error Patched.
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: "paragraph",
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: "strong",
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: "text",
            value: ""
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: "thematicBreak"
        };
    }
}
/**
 * @param {Extension} combined
 * @param {Array<Extension|Array<Extension>>} extensions
 * @returns {Extension}
 */ function configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) {
            configure(combined, value);
        } else {
            extension(combined, value);
        }
    }
    return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */ function extension(combined, extension) {
    /** @type {string} */ let key;
    for(key in extension){
        if (lib_own.call(extension, key)) {
            const list = key === "canContainEols" || key === "transforms";
            const maybe = lib_own.call(combined, key) ? combined[key] : undefined;
            /* c8 ignore next */ const left = maybe || (combined[key] = list ? [] : {});
            const right = extension[key];
            if (right) {
                if (list) {
                    // @ts-expect-error: `left` is an array.
                    combined[key] = [
                        ...left,
                        ...right
                    ];
                } else {
                    Object.assign(left, right);
                }
            }
        }
    }
}
/** @type {OnEnterError} */ function defaultOnError(left, right) {
    if (left) {
        throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
            start: left.start,
            end: left.end
        }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
            start: right.start,
            end: right.end
        }) + ") is open");
    } else {
        throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
            start: right.start,
            end: right.end
        }) + ") is still open");
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */ 
/** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */ function remarkParse(options) {
    /** @type {import('unified').ParserFunction<Root>} */ const parser = (doc)=>{
        // Assume options.
        const settings = /** @type {Options} */ this.data("settings");
        return fromMarkdown(doc, Object.assign({}, settings, options, {
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || []
        }));
    };
    Object.assign(this, {
        Parser: parser
    });
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js

/* harmony default export */ const remark_parse = (remarkParse);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/zwitch@2.0.4/node_modules/zwitch/index.js
/**
 * @callback Handler
 *   Handle a value, with a certain ID field set to a certain value.
 *   The ID field is passed to `zwitch`, and it’s value is this function’s
 *   place on the `handlers` record.
 * @param {...any} parameters
 *   Arbitrary parameters passed to the zwitch.
 *   The first will be an object with a certain ID field set to a certain value.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback UnknownHandler
 *   Handle values that do have a certain ID field, but it’s set to a value
 *   that is not listed in the `handlers` record.
 * @param {unknown} value
 *   An object with a certain ID field set to an unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {any}
 *   Anything!
 */ /**
 * @callback InvalidHandler
 *   Handle values that do not have a certain ID field.
 * @param {unknown} value
 *   Any unknown value.
 * @param {...any} rest
 *   Arbitrary parameters passed to the zwitch.
 * @returns {void|null|undefined|never}
 *   This should crash or return nothing.
 */ /**
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @typedef Options
 *   Configuration (required).
 * @property {Invalid} [invalid]
 *   Handler to use for invalid values.
 * @property {Unknown} [unknown]
 *   Handler to use for unknown values.
 * @property {Handlers} [handlers]
 *   Handlers to use.
 */ const zwitch_own = {}.hasOwnProperty;
/**
 * Handle values based on a field.
 *
 * @template {InvalidHandler} [Invalid=InvalidHandler]
 * @template {UnknownHandler} [Unknown=UnknownHandler]
 * @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
 * @param {string} key
 *   Field to switch on.
 * @param {Options<Invalid, Unknown, Handlers>} [options]
 *   Configuration (required).
 * @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}
 */ function zwitch(key, options) {
    const settings = options || {};
    /**
   * Handle one value.
   *
   * Based on the bound `key`, a respective handler will be called.
   * If `value` is not an object, or doesn’t have a `key` property, the special
   * “invalid” handler will be called.
   * If `value` has an unknown `key`, the special “unknown” handler will be
   * called.
   *
   * All arguments, and the context object, are passed through to the handler,
   * and it’s result is returned.
   *
   * @this {unknown}
   *   Any context object.
   * @param {unknown} [value]
   *   Any value.
   * @param {...unknown} parameters
   *   Arbitrary parameters passed to the zwitch.
   * @property {Handler} invalid
   *   Handle for values that do not have a certain ID field.
   * @property {Handler} unknown
   *   Handle values that do have a certain ID field, but it’s set to a value
   *   that is not listed in the `handlers` record.
   * @property {Handlers} handlers
   *   Record of handlers.
   * @returns {unknown}
   *   Anything.
   */ function one(value, ...parameters) {
        /** @type {Handler|undefined} */ let fn = one.invalid;
        const handlers = one.handlers;
        if (value && zwitch_own.call(value, key)) {
            // @ts-expect-error Indexable.
            const id = String(value[key]);
            // @ts-expect-error Indexable.
            fn = zwitch_own.call(handlers, id) ? handlers[id] : one.unknown;
        }
        if (fn) {
            return fn.call(this, value, ...parameters);
        }
    }
    one.handlers = settings.handlers || {};
    one.invalid = settings.invalid;
    one.unknown = settings.unknown;
    // @ts-expect-error: matches!
    return one;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/configure.js
/**
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 */ /**
 * @param {Context} base
 * @param {Options} extension
 * @returns {Context}
 */ function configure_configure(base, extension) {
    let index = -1;
    /** @type {string} */ let key;
    // First do subextensions.
    if (extension.extensions) {
        while(++index < extension.extensions.length){
            configure_configure(base, extension.extensions[index]);
        }
    }
    for(key in extension){
        if (key === "extensions") {
        // Empty.
        } else if (key === "unsafe" || key === "join") {
            /* c8 ignore next 2 */ // @ts-expect-error: hush.
            base[key] = [
                ...base[key] || [],
                ...extension[key] || []
            ];
        } else if (key === "handlers") {
            base[key] = Object.assign(base[key], extension[key] || {});
        } else {
            // @ts-expect-error: hush.
            base.options[key] = extension[key];
        }
    }
    return base;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/track.js
/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('../types.js').TrackFields} TrackFields
 */ /**
 * Functions to track output positions.
 * This info isn’t used yet but suchs functionality allows line wrapping,
 * and theoretically source maps (though, is there practical use in that?).
 *
 * @param {TrackFields} options_
 */ function track(options_) {
    // Defaults are used to prevent crashes when older utilities somehow activate
    // this code.
    /* c8 ignore next 5 */ const options = options_ || {};
    const now = options.now || {};
    let lineShift = options.lineShift || 0;
    let line = now.line || 1;
    let column = now.column || 1;
    return {
        move,
        current,
        shift
    };
    /**
   * Get the current tracked info.
   *
   * @returns {{now: Point, lineShift: number}}
   */ function current() {
        return {
            now: {
                line,
                column
            },
            lineShift
        };
    }
    /**
   * Define an increased line shift (the typical indent for lines).
   *
   * @param {number} value
   */ function shift(value) {
        lineShift += value;
    }
    /**
   * Move past a string.
   *
   * @param {string} value
   * @returns {string}
   */ function move(value = "") {
        const chunks = value.split(/\r?\n|\r/g);
        const tail = chunks[chunks.length - 1];
        line += chunks.length - 1;
        column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
        return value;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
/**
 * @typedef {import('../types.js').Node} Node
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').Join} Join
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').TrackFields} TrackFields
 */ 
/**
 * @param {Parent} parent
 * @param {Context} context
 * @param {TrackFields} safeOptions
 * @returns {string}
 */ function containerFlow(parent, context, safeOptions) {
    const indexStack = context.indexStack;
    const children = parent.children || [];
    const tracker = track(safeOptions);
    /** @type {Array<string>} */ const results = [];
    let index = -1;
    indexStack.push(-1);
    while(++index < children.length){
        const child = children[index];
        indexStack[indexStack.length - 1] = index;
        results.push(tracker.move(context.handle(child, parent, context, {
            before: "\n",
            after: "\n",
            ...tracker.current()
        })));
        if (child.type !== "list") {
            context.bulletLastUsed = undefined;
        }
        if (index < children.length - 1) {
            results.push(tracker.move(between(child, children[index + 1])));
        }
    }
    indexStack.pop();
    return results.join("");
    /**
   * @param {Node} left
   * @param {Node} right
   * @returns {string}
   */ function between(left, right) {
        let index = context.join.length;
        while(index--){
            const result = context.join[index](left, right, parent, context);
            if (result === true || result === 1) {
                break;
            }
            if (typeof result === "number") {
                return "\n".repeat(1 + result);
            }
            if (result === false) {
                return "\n\n<!---->\n\n";
            }
        }
        return "\n\n";
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
/**
 * @callback Map
 * @param {string} value
 * @param {number} line
 * @param {boolean} blank
 * @returns {string}
 */ const eol = /\r?\n|\r/g;
/**
 * @param {string} value
 * @param {Map} map
 * @returns {string}
 */ function indentLines(value, map) {
    /** @type {Array<string>} */ const result = [];
    let start = 0;
    let line = 0;
    /** @type {RegExpExecArray|null} */ let match;
    while(match = eol.exec(value)){
        one(value.slice(start, match.index));
        result.push(match[0]);
        start = match.index + match[0].length;
        line++;
    }
    one(value.slice(start));
    return result.join("");
    /**
   * @param {string} value
   */ function one(value) {
        result.push(map(value, line, !value));
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../util/indent-lines.js').Map} Map
 */ 


/**
 * @type {Handle}
 * @param {Blockquote} node
 */ function blockquote(node, _, context, safeOptions) {
    const exit = context.enter("blockquote");
    const tracker = track(safeOptions);
    tracker.move("> ");
    tracker.shift(2);
    const value = indentLines(containerFlow(node, context, tracker.current()), map);
    exit();
    return value;
}
/** @type {Map} */ function map(line, _, blank) {
    return ">" + (blank ? "" : " ") + line;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
/**
 * @typedef {import('../types.js').Unsafe} Unsafe
 */ /**
 * @param {Array<string>} stack
 * @param {Unsafe} pattern
 * @returns {boolean}
 */ function patternInScope(stack, pattern) {
    return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
/**
 * @param {Array<string>} stack
 * @param {Unsafe['inConstruct']} list
 * @param {boolean} none
 * @returns {boolean}
 */ function listInScope(stack, list, none) {
    if (!list) {
        return none;
    }
    if (typeof list === "string") {
        list = [
            list
        ];
    }
    let index = -1;
    while(++index < list.length){
        if (stack.includes(list[index])) {
            return true;
        }
    }
    return false;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/break.js
/**
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('mdast').Break} Break
 */ 
/**
 * @type {Handle}
 * @param {Break} _
 */ function hardBreak(_, _1, context, safe) {
    let index = -1;
    while(++index < context.unsafe.length){
        // If we can’t put eols in this construct (setext headings, tables), use a
        // space instead.
        if (context.unsafe[index].character === "\n" && patternInScope(context.stack, context.unsafe[index])) {
            return /[ \t]/.test(safe.before) ? "" : " ";
        }
    }
    return "\\\n";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/longest-streak@3.1.0/node_modules/longest-streak/index.js
/**
 * Get the count of the longest repeating streak of `substring` in `value`.
 *
 * @param {string} value
 *   Content to search in.
 * @param {string} substring
 *   Substring to look for, typically one character.
 * @returns {number}
 *   Count of most frequent adjacent `substring`s in `value`.
 */ function longestStreak(value, substring) {
    const source = String(value);
    let index = source.indexOf(substring);
    let expected = index;
    let count = 0;
    let max = 0;
    if (typeof substring !== "string") {
        throw new TypeError("Expected substring");
    }
    while(index !== -1){
        if (index === expected) {
            if (++count > max) {
                max = count;
            }
        } else {
            count = 1;
        }
        expected = index + substring.length;
        index = source.indexOf(substring, expected);
    }
    return max;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../types.js').Context} Context
 */ /**
 * @param {Code} node
 * @param {Context} context
 * @returns {boolean}
 */ function formatCodeAsIndented(node, context) {
    return Boolean(!context.options.fences && node.value && // If there’s no info…
    !node.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-fence.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['fence'], undefined>}
 */ function checkFence(context) {
    const marker = context.options.fence || "`";
    if (marker !== "`" && marker !== "~") {
        throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
/**
 * @typedef {import('../types.js').Unsafe} Unsafe
 */ /**
 * @param {Unsafe} pattern
 * @returns {RegExp}
 */ function patternCompile(pattern) {
    if (!pattern._compiled) {
        const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
        pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
    }
    return pattern._compiled;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/safe.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').SafeOptions} SafeOptions
 */ 

/**
 * @param {Context} context
 * @param {string|null|undefined} input
 * @param {SafeOptions & {encode?: Array<string>}} config
 * @returns {string}
 */ function safe(context, input, config) {
    const value = (config.before || "") + (input || "") + (config.after || "");
    /** @type {Array<number>} */ const positions = [];
    /** @type {Array<string>} */ const result = [];
    /** @type {Record<number, {before: boolean, after: boolean}>} */ const infos = {};
    let index = -1;
    while(++index < context.unsafe.length){
        const pattern = context.unsafe[index];
        if (!patternInScope(context.stack, pattern)) {
            continue;
        }
        const expression = patternCompile(pattern);
        /** @type {RegExpExecArray|null} */ let match;
        while(match = expression.exec(value)){
            const before = "before" in pattern || Boolean(pattern.atBreak);
            const after = "after" in pattern;
            const position = match.index + (before ? match[1].length : 0);
            if (positions.includes(position)) {
                if (infos[position].before && !before) {
                    infos[position].before = false;
                }
                if (infos[position].after && !after) {
                    infos[position].after = false;
                }
            } else {
                positions.push(position);
                infos[position] = {
                    before,
                    after
                };
            }
        }
    }
    positions.sort(numerical);
    let start = config.before ? config.before.length : 0;
    const end = value.length - (config.after ? config.after.length : 0);
    index = -1;
    while(++index < positions.length){
        const position1 = positions[index];
        // Character before or after matched:
        if (position1 < start || position1 >= end) {
            continue;
        }
        // If this character is supposed to be escaped because it has a condition on
        // the next character, and the next character is definitly being escaped,
        // then skip this escape.
        if (position1 + 1 < end && positions[index + 1] === position1 + 1 && infos[position1].after && !infos[position1 + 1].before && !infos[position1 + 1].after || positions[index - 1] === position1 - 1 && infos[position1].before && !infos[position1 - 1].before && !infos[position1 - 1].after) {
            continue;
        }
        if (start !== position1) {
            // If we have to use a character reference, an ampersand would be more
            // correct, but as backslashes only care about punctuation, either will
            // do the trick
            result.push(escapeBackslashes(value.slice(start, position1), "\\"));
        }
        start = position1;
        if (/[!-/:-@[-`{-~]/.test(value.charAt(position1)) && (!config.encode || !config.encode.includes(value.charAt(position1)))) {
            // Character escape.
            result.push("\\");
        } else {
            // Character reference.
            result.push("&#x" + value.charCodeAt(position1).toString(16).toUpperCase() + ";");
            start++;
        }
    }
    result.push(escapeBackslashes(value.slice(start, end), config.after));
    return result.join("");
}
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */ function numerical(a, b) {
    return a - b;
}
/**
 * @param {string} value
 * @param {string} after
 * @returns {string}
 */ function escapeBackslashes(value, after) {
    const expression = /\\(?=[!-/:-@[-`{-~])/g;
    /** @type {Array<number>} */ const positions = [];
    /** @type {Array<string>} */ const results = [];
    const whole = value + after;
    let index = -1;
    let start = 0;
    /** @type {RegExpExecArray|null} */ let match;
    while(match = expression.exec(whole)){
        positions.push(match.index);
    }
    while(++index < positions.length){
        if (start !== positions[index]) {
            results.push(value.slice(start, positions[index]));
        }
        results.push("\\");
        start = positions[index];
    }
    results.push(value.slice(start));
    return results.join("");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/code.js
/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../types.js').Exit} Exit
 * @typedef {import('../util/indent-lines.js').Map} Map
 */ 





/**
 * @type {Handle}
 * @param {Code} node
 */ function code(node, _, context, safeOptions) {
    const marker = checkFence(context);
    const raw = node.value || "";
    const suffix = marker === "`" ? "GraveAccent" : "Tilde";
    if (formatCodeAsIndented(node, context)) {
        const exit = context.enter("codeIndented");
        const value = indentLines(raw, code_map);
        exit();
        return value;
    }
    const tracker = track(safeOptions);
    const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
    const exit1 = context.enter("codeFenced");
    let value1 = tracker.move(sequence);
    if (node.lang) {
        const subexit = context.enter("codeFencedLang" + suffix);
        value1 += tracker.move(safe(context, node.lang, {
            before: value1,
            after: " ",
            encode: [
                "`"
            ],
            ...tracker.current()
        }));
        subexit();
    }
    if (node.lang && node.meta) {
        const subexit1 = context.enter("codeFencedMeta" + suffix);
        value1 += tracker.move(" ");
        value1 += tracker.move(safe(context, node.meta, {
            before: value1,
            after: "\n",
            encode: [
                "`"
            ],
            ...tracker.current()
        }));
        subexit1();
    }
    value1 += tracker.move("\n");
    if (raw) {
        value1 += tracker.move(raw + "\n");
    }
    value1 += tracker.move(sequence);
    exit1();
    return value1;
}
/** @type {Map} */ function code_map(line, _, blank) {
    return (blank ? "" : "    ") + line;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/association.js
/**
 * @typedef {import('mdast').Association} Association
 */ 
/**
 * The `label` of an association is the string value: character escapes and
 * references work, and casing is intact.
 * The `identifier` is used to match one association to another: controversially,
 * character escapes and references don’t work in this matching: `&copy;` does
 * not match `©`, and `\+` does not match `+`.
 * But casing is ignored (and whitespace) is trimmed and collapsed: ` A\nb`
 * matches `a b`.
 * So, we do prefer the label when figuring out how we’re going to serialize:
 * it has whitespace, casing, and we can ignore most useless character escapes
 * and all character references.
 *
 * @param {Association} node
 * @returns {string}
 */ function association(node) {
    if (node.label || !node.identifier) {
        return node.label || "";
    }
    return decodeString(node.identifier);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-quote.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['quote'], undefined>}
 */ function checkQuote(context) {
    const marker = context.options.quote || '"';
    if (marker !== '"' && marker !== "'") {
        throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/definition.js
/**
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('../types.js').Handle} Handle
 */ 



/**
 * @type {Handle}
 * @param {Definition} node
 */ function definition_definition(node, _, context, safeOptions) {
    const quote = checkQuote(context);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit = context.enter("definition");
    let subexit = context.enter("label");
    const tracker = track(safeOptions);
    let value = tracker.move("[");
    value += tracker.move(safe(context, association(node), {
        before: value,
        after: "]",
        ...tracker.current()
    }));
    value += tracker.move("]: ");
    subexit();
    if (// If there’s no url, or…
    !node.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = context.enter("destinationLiteral");
        value += tracker.move("<");
        value += tracker.move(safe(context, node.url, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter("destinationRaw");
        value += tracker.move(safe(context, node.url, {
            before: value,
            after: node.title ? " " : "\n",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = context.enter("title" + suffix);
        value += tracker.move(" " + quote);
        value += tracker.move(safe(context, node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    exit();
    return value;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['emphasis'], undefined>}
 */ function checkEmphasis(context) {
    const marker = context.options.emphasis || "*";
    if (marker !== "*" && marker !== "_") {
        throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
/**
 * @typedef {import('../types.js').Node} Node
 * @typedef {import('../types.js').Parent} Parent
 * @typedef {import('../types.js').SafeOptions} SafeOptions
 * @typedef {import('../types.js').Context} Context
 */ 
/**
 * @param {Parent} parent
 * @param {Context} context
 * @param {SafeOptions} safeOptions
 * @returns {string}
 */ function containerPhrasing(parent, context, safeOptions) {
    const indexStack = context.indexStack;
    const children = parent.children || [];
    /** @type {Array<string>} */ const results = [];
    let index = -1;
    let before = safeOptions.before;
    indexStack.push(-1);
    let tracker = track(safeOptions);
    while(++index < children.length){
        const child = children[index];
        /** @type {string} */ let after;
        indexStack[indexStack.length - 1] = index;
        if (index + 1 < children.length) {
            // @ts-expect-error: hush, it’s actually a `zwitch`.
            let handle = context.handle.handlers[children[index + 1].type];
            if (handle && handle.peek) handle = handle.peek;
            after = handle ? handle(children[index + 1], parent, context, {
                before: "",
                after: "",
                ...tracker.current()
            }).charAt(0) : "";
        } else {
            after = safeOptions.after;
        }
        // In some cases, html (text) can be found in phrasing right after an eol.
        // When we’d serialize that, in most cases that would be seen as html
        // (flow).
        // As we can’t escape or so to prevent it from happening, we take a somewhat
        // reasonable approach: replace that eol with a space.
        // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
        if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
            results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
            before = " ";
            // To do: does this work to reset tracker?
            tracker = track(safeOptions);
            tracker.move(results.join(""));
        }
        results.push(tracker.move(context.handle(child, parent, context, {
            ...tracker.current(),
            before,
            after
        })));
        before = results[results.length - 1].slice(-1);
    }
    indexStack.pop();
    return results.join("");
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../types.js').Handle} Handle
 */ 


emphasis.peek = emphasisPeek;
// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
/**
 * @type {Handle}
 * @param {Emphasis} node
 */ function emphasis(node, _, context, safeOptions) {
    const marker = checkEmphasis(context);
    const exit = context.enter("emphasis");
    const tracker = track(safeOptions);
    let value = tracker.move(marker);
    value += tracker.move(containerPhrasing(node, context, {
        before: value,
        after: marker,
        ...tracker.current()
    }));
    value += tracker.move(marker);
    exit();
    return value;
}
/**
 * @type {Handle}
 * @param {Emphasis} _
 */ function emphasisPeek(_, _1, context) {
    return context.options.emphasis || "*";
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js
var unist_util_visit = __webpack_require__(66119);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unist-util-visit-parents@5.1.1/node_modules/unist-util-visit-parents/index.js + 1 modules
var unist_util_visit_parents = __webpack_require__(16481);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../types.js').Context} Context
 */ 

/**
 * @param {Heading} node
 * @param {Context} context
 * @returns {boolean}
 */ function formatHeadingAsSetext(node, context) {
    let literalWithBreak = false;
    // Look for literals with a line break.
    // Note that this also
    (0,unist_util_visit/* visit */.Vn)(node, (node)=>{
        if ("value" in node && /\r?\n|\r/.test(node.value) || node.type === "break") {
            literalWithBreak = true;
            return unist_util_visit_parents/* EXIT */.BK;
        }
    });
    return Boolean((!node.depth || node.depth < 3) && (0,mdast_util_to_string/* toString */.B)(node) && (context.options.setext || literalWithBreak));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/heading.js
/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../types.js').Exit} Exit
 */ 


/**
 * @type {Handle}
 * @param {Heading} node
 */ function heading(node, _, context, safeOptions) {
    const rank = Math.max(Math.min(6, node.depth || 1), 1);
    const tracker = track(safeOptions);
    if (formatHeadingAsSetext(node, context)) {
        const exit = context.enter("headingSetext");
        const subexit = context.enter("phrasing");
        const value = containerPhrasing(node, context, {
            ...tracker.current(),
            before: "\n",
            after: "\n"
        });
        subexit();
        exit();
        return value + "\n" + (rank === 1 ? "=" : "-").repeat(// The whole size…
        value.length - // Minus the position of the character after the last EOL (or
        // 0 if there is none)…
        (Math.max(value.lastIndexOf("\r"), value.lastIndexOf("\n")) + 1));
    }
    const sequence = "#".repeat(rank);
    const exit1 = context.enter("headingAtx");
    const subexit1 = context.enter("phrasing");
    // Note: for proper tracking, we should reset the output positions when there
    // is no content returned, because then the space is not output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    tracker.move(sequence + " ");
    let value1 = containerPhrasing(node, context, {
        before: "# ",
        after: "\n",
        ...tracker.current()
    });
    if (/^[\t ]/.test(value1)) {
        // To do: what effect has the character reference on tracking?
        value1 = "&#x" + value1.charCodeAt(0).toString(16).toUpperCase() + ";" + value1.slice(1);
    }
    value1 = value1 ? sequence + " " + value1 : sequence;
    if (context.options.closeAtx) {
        value1 += " " + sequence;
    }
    subexit1();
    exit1();
    return value1;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/html.js
/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../types.js').Handle} Handle
 */ html.peek = htmlPeek;
/**
 * @type {Handle}
 * @param {HTML} node
 */ function html(node) {
    return node.value || "";
}
/**
 * @type {Handle}
 */ function htmlPeek() {
    return "<";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/image.js
/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../types.js').Handle} Handle
 */ 


image_image.peek = imagePeek;
/**
 * @type {Handle}
 * @param {Image} node
 */ function image_image(node, _, context, safeOptions) {
    const quote = checkQuote(context);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const exit = context.enter("image");
    let subexit = context.enter("label");
    const tracker = track(safeOptions);
    let value = tracker.move("![");
    value += tracker.move(safe(context, node.alt, {
        before: value,
        after: "]",
        ...tracker.current()
    }));
    value += tracker.move("](");
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = context.enter("destinationLiteral");
        value += tracker.move("<");
        value += tracker.move(safe(context, node.url, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter("destinationRaw");
        value += tracker.move(safe(context, node.url, {
            before: value,
            after: node.title ? " " : ")",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = context.enter("title" + suffix);
        value += tracker.move(" " + quote);
        value += tracker.move(safe(context, node.title, {
            before: value,
            after: quote,
            ...tracker.current()
        }));
        value += tracker.move(quote);
        subexit();
    }
    value += tracker.move(")");
    exit();
    return value;
}
/**
 * @type {Handle}
 */ function imagePeek() {
    return "!";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../types.js').Handle} Handle
 */ 


imageReference.peek = imageReferencePeek;
/**
 * @type {Handle}
 * @param {ImageReference} node
 */ function imageReference(node, _, context, safeOptions) {
    const type = node.referenceType;
    const exit = context.enter("imageReference");
    let subexit = context.enter("label");
    const tracker = track(safeOptions);
    let value = tracker.move("![");
    const alt = safe(context, node.alt, {
        before: value,
        after: "]",
        ...tracker.current()
    });
    value += tracker.move(alt + "][");
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = context.stack;
    context.stack = [];
    subexit = context.enter("reference");
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = safe(context, association(node), {
        before: value,
        after: "]",
        ...tracker.current()
    });
    subexit();
    context.stack = stack;
    exit();
    if (type === "full" || !alt || alt !== reference) {
        value += tracker.move(reference + "]");
    } else if (type === "shortcut") {
        // Remove the unwanted `[`.
        value = value.slice(0, -1);
    } else {
        value += tracker.move("]");
    }
    return value;
}
/**
 * @type {Handle}
 */ function imageReferencePeek() {
    return "!";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../types.js').Handle} Handle
 */ 
inlineCode.peek = inlineCodePeek;
/**
 * @type {Handle}
 * @param {InlineCode} node
 */ function inlineCode(node, _, context) {
    let value = node.value || "";
    let sequence = "`";
    let index = -1;
    // If there is a single grave accent on its own in the code, use a fence of
    // two.
    // If there are two in a row, use one.
    while(new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)){
        sequence += "`";
    }
    // If this is not just spaces or eols (tabs don’t count), and either the
    // first or last character are a space, eol, or tick, then pad with spaces.
    if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
        value = " " + value + " ";
    }
    // We have a potential problem: certain characters after eols could result in
    // blocks being seen.
    // For example, if someone injected the string `'\n# b'`, then that would
    // result in an ATX heading.
    // We can’t escape characters in `inlineCode`, but because eols are
    // transformed to spaces when going from markdown to HTML anyway, we can swap
    // them out.
    while(++index < context.unsafe.length){
        const pattern = context.unsafe[index];
        const expression = patternCompile(pattern);
        /** @type {RegExpExecArray|null} */ let match;
        // Only look for `atBreak`s.
        // Btw: note that `atBreak` patterns will always start the regex at LF or
        // CR.
        if (!pattern.atBreak) continue;
        while(match = expression.exec(value)){
            let position = match.index;
            // Support CRLF (patterns only look for one of the characters).
            if (value.charCodeAt(position) === 10 /* `\n` */  && value.charCodeAt(position - 1) === 13 /* `\r` */ ) {
                position--;
            }
            value = value.slice(0, position) + " " + value.slice(match.index + 1);
        }
    }
    return sequence + value + sequence;
}
/**
 * @type {Handle}
 */ function inlineCodePeek() {
    return "`";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../types.js').Context} Context
 */ 
/**
 * @param {Link} node
 * @param {Context} context
 * @returns {boolean}
 */ function formatLinkAsAutolink(node, context) {
    const raw = (0,mdast_util_to_string/* toString */.B)(node);
    return Boolean(!context.options.resourceLink && // If there’s a url…
    node.url && // And there’s a no title…
    !node.title && // And the content of `node` is a single text node…
    node.children && node.children.length === 1 && node.children[0].type === "text" && // And if the url is the same as the content…
    (raw === node.url || "mailto:" + raw === node.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node.url));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/link.js
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('../types.js').Exit} Exit
 */ 




link_link.peek = linkPeek;
/**
 * @type {Handle}
 * @param {Link} node
 */ function link_link(node, _, context, safeOptions) {
    const quote = checkQuote(context);
    const suffix = quote === '"' ? "Quote" : "Apostrophe";
    const tracker = track(safeOptions);
    /** @type {Exit} */ let exit;
    /** @type {Exit} */ let subexit;
    if (formatLinkAsAutolink(node, context)) {
        // Hide the fact that we’re in phrasing, because escapes don’t work.
        const stack = context.stack;
        context.stack = [];
        exit = context.enter("autolink");
        let value = tracker.move("<");
        value += tracker.move(containerPhrasing(node, context, {
            before: value,
            after: ">",
            ...tracker.current()
        }));
        value += tracker.move(">");
        exit();
        context.stack = stack;
        return value;
    }
    exit = context.enter("link");
    subexit = context.enter("label");
    let value1 = tracker.move("[");
    value1 += tracker.move(containerPhrasing(node, context, {
        before: value1,
        after: "](",
        ...tracker.current()
    }));
    value1 += tracker.move("](");
    subexit();
    if (// If there’s no url but there is a title…
    !node.url && node.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node.url)) {
        subexit = context.enter("destinationLiteral");
        value1 += tracker.move("<");
        value1 += tracker.move(safe(context, node.url, {
            before: value1,
            after: ">",
            ...tracker.current()
        }));
        value1 += tracker.move(">");
    } else {
        // No whitespace, raw is prettier.
        subexit = context.enter("destinationRaw");
        value1 += tracker.move(safe(context, node.url, {
            before: value1,
            after: node.title ? " " : ")",
            ...tracker.current()
        }));
    }
    subexit();
    if (node.title) {
        subexit = context.enter("title" + suffix);
        value1 += tracker.move(" " + quote);
        value1 += tracker.move(safe(context, node.title, {
            before: value1,
            after: quote,
            ...tracker.current()
        }));
        value1 += tracker.move(quote);
        subexit();
    }
    value1 += tracker.move(")");
    exit();
    return value1;
}
/**
 * @type {Handle}
 * @param {Link} node
 */ function linkPeek(node, _, context) {
    return formatLinkAsAutolink(node, context) ? "<" : "[";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../types.js').Handle} Handle
 */ 



linkReference.peek = linkReferencePeek;
/**
 * @type {Handle}
 * @param {LinkReference} node
 */ function linkReference(node, _, context, safeOptions) {
    const type = node.referenceType;
    const exit = context.enter("linkReference");
    let subexit = context.enter("label");
    const tracker = track(safeOptions);
    let value = tracker.move("[");
    const text = containerPhrasing(node, context, {
        before: value,
        after: "]",
        ...tracker.current()
    });
    value += tracker.move(text + "][");
    subexit();
    // Hide the fact that we’re in phrasing, because escapes don’t work.
    const stack = context.stack;
    context.stack = [];
    subexit = context.enter("reference");
    // Note: for proper tracking, we should reset the output positions when we end
    // up making a `shortcut` reference, because then there is no brace output.
    // Practically, in that case, there is no content, so it doesn’t matter that
    // we’ve tracked one too many characters.
    const reference = safe(context, association(node), {
        before: value,
        after: "]",
        ...tracker.current()
    });
    subexit();
    context.stack = stack;
    exit();
    if (type === "full" || !text || text !== reference) {
        value += tracker.move(reference + "]");
    } else if (type === "shortcut") {
        // Remove the unwanted `[`.
        value = value.slice(0, -1);
    } else {
        value += tracker.move("]");
    }
    return value;
}
/**
 * @type {Handle}
 */ function linkReferencePeek() {
    return "[";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['bullet'], undefined>}
 */ function checkBullet(context) {
    const marker = context.options.bullet || "*";
    if (marker !== "*" && marker !== "+" && marker !== "-") {
        throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ 
/**
 * @param {Context} context
 * @returns {Exclude<Options['bullet'], undefined>}
 */ function checkBulletOther(context) {
    const bullet = checkBullet(context);
    const bulletOther = context.options.bulletOther;
    if (!bulletOther) {
        return bullet === "*" ? "-" : "*";
    }
    if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
        throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    }
    if (bulletOther === bullet) {
        throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
    }
    return bulletOther;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['bulletOrdered'], undefined>}
 */ function checkBulletOrdered(context) {
    const marker = context.options.bulletOrdered || ".";
    if (marker !== "." && marker !== ")") {
        throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered-other.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ 
/**
 * @param {Context} context
 * @returns {Exclude<Options['bulletOrdered'], undefined>}
 */ function checkBulletOrderedOther(context) {
    const bulletOrdered = checkBulletOrdered(context);
    const bulletOrderedOther = context.options.bulletOrderedOther;
    if (!bulletOrderedOther) {
        return bulletOrdered === "." ? ")" : ".";
    }
    if (bulletOrderedOther !== "." && bulletOrderedOther !== ")") {
        throw new Error("Cannot serialize items with `" + bulletOrderedOther + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
    }
    if (bulletOrderedOther === bulletOrdered) {
        throw new Error("Expected `bulletOrdered` (`" + bulletOrdered + "`) and `bulletOrderedOther` (`" + bulletOrderedOther + "`) to be different");
    }
    return bulletOrderedOther;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-rule.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['rule'], undefined>}
 */ function checkRule(context) {
    const marker = context.options.rule || "*";
    if (marker !== "*" && marker !== "-" && marker !== "_") {
        throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/list.js
/**
 * @typedef {import('mdast').List} List
 * @typedef {import('../types.js').Handle} Handle
 */ 





/**
 * @type {Handle}
 * @param {List} node
 */ function list_list(node, parent, context, safeOptions) {
    const exit = context.enter("list");
    const bulletCurrent = context.bulletCurrent;
    /** @type {string} */ let bullet = node.ordered ? checkBulletOrdered(context) : checkBullet(context);
    /** @type {string} */ const bulletOther = node.ordered ? checkBulletOrderedOther(context) : checkBulletOther(context);
    const bulletLastUsed = context.bulletLastUsed;
    let useDifferentMarker = false;
    if (parent && // Explicit `other` set.
    (node.ordered ? context.options.bulletOrderedOther : context.options.bulletOther) && bulletLastUsed && bullet === bulletLastUsed) {
        useDifferentMarker = true;
    }
    if (!node.ordered) {
        const firstListItem = node.children ? node.children[0] : undefined;
        // If there’s an empty first list item directly in two list items,
        // we have to use a different bullet:
        //
        // ```markdown
        // * - *
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if (// Bullet could be used as a thematic break marker:
        (bullet === "*" || bullet === "-") && // Empty first list item:
        firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
        context.stack[context.stack.length - 1] === "list" && context.stack[context.stack.length - 2] === "listItem" && context.stack[context.stack.length - 3] === "list" && context.stack[context.stack.length - 4] === "listItem" && // That are each the first child.
        context.indexStack[context.indexStack.length - 1] === 0 && context.indexStack[context.indexStack.length - 2] === 0 && context.indexStack[context.indexStack.length - 3] === 0) {
            useDifferentMarker = true;
        }
        // If there’s a thematic break at the start of the first list item,
        // we have to use a different bullet:
        //
        // ```markdown
        // * ---
        // ```
        //
        // …because otherwise it would become one big thematic break.
        if (checkRule(context) === bullet && firstListItem) {
            let index = -1;
            while(++index < node.children.length){
                const item = node.children[index];
                if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
                    useDifferentMarker = true;
                    break;
                }
            }
        }
    }
    if (useDifferentMarker) {
        bullet = bulletOther;
    }
    context.bulletCurrent = bullet;
    const value = containerFlow(node, context, safeOptions);
    context.bulletLastUsed = bullet;
    context.bulletCurrent = bulletCurrent;
    exit();
    return value;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['listItemIndent'], undefined>}
 */ function checkListItemIndent(context) {
    const style = context.options.listItemIndent || "tab";
    // To do: remove in a major.
    // @ts-expect-error: deprecated.
    if (style === 1 || style === "1") {
        return "one";
    }
    if (style !== "tab" && style !== "one" && style !== "mixed") {
        throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    }
    return style;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').List} List
 * @typedef {import('../util/indent-lines.js').Map} Map
 * @typedef {import('../types.js').Options} Options
 * @typedef {import('../types.js').Handle} Handle
 */ 




/**
 * @type {Handle}
 * @param {ListItem} node
 */ function listItem(node, parent, context, safeOptions) {
    const listItemIndent = checkListItemIndent(context);
    let bullet = context.bulletCurrent || checkBullet(context);
    // Add the marker value for ordered lists.
    if (parent && parent.type === "list" && parent.ordered) {
        bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
    }
    let size = bullet.length + 1;
    if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) {
        size = Math.ceil(size / 4) * 4;
    }
    const tracker = track(safeOptions);
    tracker.move(bullet + " ".repeat(size - bullet.length));
    tracker.shift(size);
    const exit = context.enter("listItem");
    const value = indentLines(containerFlow(node, context, tracker.current()), map);
    exit();
    return value;
    /** @type {Map} */ function map(line, index, blank) {
        if (index) {
            return (blank ? "" : " ".repeat(size)) + line;
        }
        return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../types.js').Handle} Handle
 */ 
/**
 * @type {Handle}
 * @param {Paragraph} node
 */ function paragraph(node, _, context, safeOptions) {
    const exit = context.enter("paragraph");
    const subexit = context.enter("phrasing");
    const value = containerPhrasing(node, context, safeOptions);
    subexit();
    exit();
    return value;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/root.js
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../types.js').Handle} Handle
 */ 
/**
 * @type {Handle}
 * @param {Root} node
 */ function root(node, _, context, safeOptions) {
    return containerFlow(node, context, safeOptions);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-strong.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['strong'], undefined>}
 */ function checkStrong(context) {
    const marker = context.options.strong || "*";
    if (marker !== "*" && marker !== "_") {
        throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
    }
    return marker;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/strong.js
/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../types.js').Handle} Handle
 */ 


strong.peek = strongPeek;
// To do: there are cases where emphasis cannot “form” depending on the
// previous or next character of sequences.
// There’s no way around that though, except for injecting zero-width stuff.
// Do we need to safeguard against that?
/**
 * @type {Handle}
 * @param {Strong} node
 */ function strong(node, _, context, safeOptions) {
    const marker = checkStrong(context);
    const exit = context.enter("strong");
    const tracker = track(safeOptions);
    let value = tracker.move(marker + marker);
    value += tracker.move(containerPhrasing(node, context, {
        before: value,
        after: marker,
        ...tracker.current()
    }));
    value += tracker.move(marker + marker);
    exit();
    return value;
}
/**
 * @type {Handle}
 * @param {Strong} _
 */ function strongPeek(_, _1, context) {
    return context.options.strong || "*";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/text.js
/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../types.js').Handle} Handle
 */ 
/**
 * @type {Handle}
 * @param {Text} node
 */ function handle_text_text(node, _, context, safeOptions) {
    return safe(context, node.value, safeOptions);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
/**
 * @typedef {import('../types.js').Context} Context
 * @typedef {import('../types.js').Options} Options
 */ /**
 * @param {Context} context
 * @returns {Exclude<Options['ruleRepetition'], undefined>}
 */ function checkRuleRepetition(context) {
    const repetition = context.options.ruleRepetition || 3;
    if (repetition < 3) {
        throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
    }
    return repetition;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
/**
 * @typedef {import('../types.js').Handle} Handle
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 */ 

/**
 * @type {Handle}
 * @param {ThematicBreak} _
 */ function thematic_break_thematicBreak(_, _1, context) {
    const value = (checkRule(context) + (context.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(context));
    return context.options.ruleSpaces ? value.slice(0, -1) : value;
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/index.js



















const handle = {
    blockquote: blockquote,
    break: hardBreak,
    code: code,
    definition: definition_definition,
    emphasis: emphasis,
    hardBreak: hardBreak,
    heading: heading,
    html: html,
    image: image_image,
    imageReference: imageReference,
    inlineCode: inlineCode,
    link: link_link,
    linkReference: linkReference,
    list: list_list,
    listItem: listItem,
    paragraph: paragraph,
    root: root,
    strong: strong,
    text: handle_text_text,
    thematicBreak: thematic_break_thematicBreak
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/join.js
/**
 * @typedef {import('./types.js').Join} Join
 */ 

/** @type {Array<Join>} */ const join = [
    joinDefaults
];
/** @type {Join} */ function joinDefaults(left, right, parent, context) {
    // Indented code after list or another indented code.
    if (right.type === "code" && formatCodeAsIndented(right, context) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, context))) {
        return false;
    }
    // Two lists with the same marker.
    if (left.type === "list" && left.type === right.type && Boolean(left.ordered) === Boolean(right.ordered) && !(left.ordered ? context.options.bulletOrderedOther : context.options.bulletOther)) {
        return false;
    }
    // Join children of a list or an item.
    // In which case, `parent` has a `spread` field.
    if ("spread" in parent && typeof parent.spread === "boolean") {
        if (left.type === "paragraph" && // Two paragraphs.
        (left.type === right.type || right.type === "definition" || // Paragraph followed by a setext heading.
        right.type === "heading" && formatHeadingAsSetext(right, context))) {
            return;
        }
        return parent.spread ? 1 : 0;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/unsafe.js
/**
 * @typedef {import('./types.js').Unsafe} Unsafe
 */ /**
 * List of constructs that occur in phrasing (paragraphs, headings), but cannot
 * contain things like attention (emphasis, strong), images, or links.
 * So they sort of cancel each other out.
 * Note: could use a better name.
 */ const fullPhrasingSpans = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
];
/** @type {Array<Unsafe>} */ const unsafe = [
    {
        character: "	",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: "	",
        before: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: "	",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde"
        ]
    },
    {
        character: "\r",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
        ]
    },
    {
        character: "\n",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde",
            "codeFencedMetaGraveAccent",
            "codeFencedMetaTilde",
            "destinationLiteral",
            "headingAtx"
        ]
    },
    {
        character: " ",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: " ",
        before: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    {
        character: " ",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedLangTilde"
        ]
    },
    // An exclamation mark can start an image, if it is followed by a link or
    // a link reference.
    {
        character: "!",
        after: "\\[",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    // A quote can break out of a title.
    {
        character: '"',
        inConstruct: "titleQuote"
    },
    // A number sign could start an ATX heading if it starts a line.
    {
        atBreak: true,
        character: "#"
    },
    {
        character: "#",
        inConstruct: "headingAtx",
        after: "(?:[\r\n]|$)"
    },
    // Dollar sign and percentage are not used in markdown.
    // An ampersand could start a character reference.
    {
        character: "&",
        after: "[#A-Za-z]",
        inConstruct: "phrasing"
    },
    // An apostrophe can break out of a title.
    {
        character: "'",
        inConstruct: "titleApostrophe"
    },
    // A left paren could break out of a destination raw.
    {
        character: "(",
        inConstruct: "destinationRaw"
    },
    // A left paren followed by `]` could make something into a link or image.
    {
        before: "\\]",
        character: "(",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    // A right paren could start a list item or break out of a destination
    // raw.
    {
        atBreak: true,
        before: "\\d+",
        character: ")"
    },
    {
        character: ")",
        inConstruct: "destinationRaw"
    },
    // An asterisk can start thematic breaks, list items, emphasis, strong.
    {
        atBreak: true,
        character: "*"
    },
    {
        character: "*",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    // A plus sign could start a list item.
    {
        atBreak: true,
        character: "+"
    },
    // A dash can start thematic breaks, list items, and setext heading
    // underlines.
    {
        atBreak: true,
        character: "-"
    },
    // A dot could start a list item.
    {
        atBreak: true,
        before: "\\d+",
        character: ".",
        after: "(?:[ 	\r\n]|$)"
    },
    // Slash, colon, and semicolon are not used in markdown for constructs.
    // A less than can start html (flow or text) or an autolink.
    // HTML could start with an exclamation mark (declaration, cdata, comment),
    // slash (closing tag), question mark (instruction), or a letter (tag).
    // An autolink also starts with a letter.
    // Finally, it could break out of a destination literal.
    {
        atBreak: true,
        character: "<",
        after: "[!/?A-Za-z]"
    },
    {
        character: "<",
        after: "[!/?A-Za-z]",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    {
        character: "<",
        inConstruct: "destinationLiteral"
    },
    // An equals to can start setext heading underlines.
    {
        atBreak: true,
        character: "="
    },
    // A greater than can start block quotes and it can break out of a
    // destination literal.
    {
        atBreak: true,
        character: ">"
    },
    {
        character: ">",
        inConstruct: "destinationLiteral"
    },
    // Question mark and at sign are not used in markdown for constructs.
    // A left bracket can start definitions, references, labels,
    {
        atBreak: true,
        character: "["
    },
    {
        character: "[",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    {
        character: "[",
        inConstruct: [
            "label",
            "reference"
        ]
    },
    // A backslash can start an escape (when followed by punctuation) or a
    // hard break (when followed by an eol).
    // Note: typical escapes are handled in `safe`!
    {
        character: "\\",
        after: "[\\r\\n]",
        inConstruct: "phrasing"
    },
    // A right bracket can exit labels.
    {
        character: "]",
        inConstruct: [
            "label",
            "reference"
        ]
    },
    // Caret is not used in markdown for constructs.
    // An underscore can start emphasis, strong, or a thematic break.
    {
        atBreak: true,
        character: "_"
    },
    {
        character: "_",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    // A grave accent can start code (fenced or text), or it can break out of
    // a grave accent code fence.
    {
        atBreak: true,
        character: "`"
    },
    {
        character: "`",
        inConstruct: [
            "codeFencedLangGraveAccent",
            "codeFencedMetaGraveAccent"
        ]
    },
    {
        character: "`",
        inConstruct: "phrasing",
        notInConstruct: fullPhrasingSpans
    },
    // Left brace, vertical bar, right brace are not used in markdown for
    // constructs.
    // A tilde can start code (fenced).
    {
        atBreak: true,
        character: "~"
    }
];

;// CONCATENATED MODULE: ../../node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/index.js
/**
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Join} Join
 * @typedef {import('./types.js').Unsafe} Unsafe
 */ 




/**
 * @param {Node} tree
 * @param {Options} [options]
 * @returns {string}
 */ function toMarkdown(tree, options = {}) {
    /** @type {Context} */ // @ts-expect-error: we’ll add `handle` later.
    const context = {
        enter,
        stack: [],
        unsafe: [],
        join: [],
        handlers: {},
        options: {},
        indexStack: []
    };
    configure_configure(context, {
        unsafe: unsafe,
        join: join,
        handlers: handle
    });
    configure_configure(context, options);
    if (context.options.tightDefinitions) {
        configure_configure(context, {
            join: [
                joinDefinition
            ]
        });
    }
    /** @type {Handle} */ context.handle = zwitch("type", {
        invalid,
        // @ts-expect-error: hush.
        unknown,
        // @ts-expect-error: hush.
        handlers: context.handlers
    });
    let result = context.handle(tree, null, context, {
        before: "\n",
        after: "\n",
        now: {
            line: 1,
            column: 1
        },
        lineShift: 0
    });
    if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
        result += "\n";
    }
    return result;
    /** @type {Context['enter']} */ function enter(name) {
        context.stack.push(name);
        return exit;
        function exit() {
            context.stack.pop();
        }
    }
}
/**
 * @type {Handle}
 * @param {unknown} value
 */ function invalid(value) {
    throw new Error("Cannot handle value `" + value + "`, expected node");
}
/**
 * @type {Handle}
 * @param {Node} node
 */ function unknown(node) {
    throw new Error("Cannot handle unknown node `" + node.type + "`");
}
/** @type {Join} */ function joinDefinition(left, right) {
    // No blank line between adjacent definitions.
    if (left.type === "definition" && left.type === right.type) {
        return 0;
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/remark-stringify@10.0.2/node_modules/remark-stringify/lib/index.js
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownOptions
 * @typedef {Omit<ToMarkdownOptions, 'extensions'>} Options
 */ 
/** @type {import('unified').Plugin<[Options]|void[], Node, string>} */ function remarkStringify(options) {
    /** @type {import('unified').CompilerFunction<Node, string>} */ const compiler = (tree)=>{
        // Assume options.
        const settings = /** @type {Options} */ this.data("settings");
        return toMarkdown(tree, Object.assign({}, settings, options, {
            // Note: this option is not in the readme.
            // The goal is for it to be set by plugins on `data` instead of being
            // passed by users.
            extensions: /** @type {ToMarkdownOptions['extensions']} */ this.data("toMarkdownExtensions") || []
        }));
    };
    Object.assign(this, {
        Compiler: compiler
    });
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/remark-stringify@10.0.2/node_modules/remark-stringify/index.js

/* harmony default export */ const remark_stringify = (remarkStringify);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/remark@14.0.2/node_modules/remark/index.js



const remark = unified().use(remark_parse).use(remark_stringify).freeze();


/***/ }),

/***/ 36293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ convert)
/* harmony export */ });
/* unused harmony export is */
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */ /**
 * Check if a node passes a test
 *
 * @callback TestFunctionAnything
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean|void}
 */ /**
 * Check if a node passes a certain node test
 *
 * @template {Node} X
 * @callback TestFunctionPredicate
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is X}
 */ /**
 * @callback AssertAnything
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean}
 */ /**
 * Check if a node passes a certain node test
 *
 * @template {Node} Y
 * @callback AssertPredicate
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is Y}
 */ const is = /**
   * Check if a node passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (<T extends Node>(node: unknown, test: T['type']|Partial<T>|TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|TestFunctionPredicate<T>>, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => node is T) &
   *   ((node?: unknown, test?: Test, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => boolean)
   * )}
   */ /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @param {number|null|undefined} [index] Position of `node` in `parent`
     * @param {Parent|null|undefined} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
     */ // eslint-disable-next-line max-params
function is(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error("Expected positive finite index");
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error("Expected parent node");
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error("Expected both parent and index");
    }
    // @ts-expect-error Looks like a node.
    return node && node.type && typeof node.type === "string" ? Boolean(check.call(context, node, index, parent)) : false;
};
const convert = /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */ function(test) {
    if (test === undefined || test === null) {
        return ok;
    }
    if (typeof test === "string") {
        return typeFactory(test);
    }
    if (typeof test === "object") {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "function") {
        return castFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function anyFactory(tests) {
    /** @type {Array.<AssertAnything>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return castFactory(any);
    /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) return true;
        }
        return false;
    }
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */ function propsFactory(check) {
    return castFactory(all);
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        /** @type {string} */ let key;
        for(key in check){
            // @ts-expect-error: hush, it sure works as an index.
            if (node[key] !== check[key]) return false;
        }
        return true;
    }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */ function typeFactory(check) {
    return castFactory(type);
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */ function assertion(...parameters) {
        // @ts-expect-error: spreading is fine.
        return Boolean(check.call(this, ...parameters));
    }
}
// Utility to return true.
function ok() {
    return true;
}


/***/ }),

/***/ 16481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BK": () => (/* binding */ EXIT),
  "S4": () => (/* binding */ visitParents)
});

// UNUSED EXPORTS: CONTINUE, SKIP

// EXTERNAL MODULE: ../../node_modules/.pnpm/unist-util-is@5.1.1/node_modules/unist-util-is/index.js
var unist_util_is = __webpack_require__(36293);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-visit-parents@5.1.1/node_modules/unist-util-visit-parents/color.js
/**
 * @param {string} d
 * @returns {string}
 */ function color(d) {
    return "\x1b[33m" + d + "\x1b[39m";
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unist-util-visit-parents@5.1.1/node_modules/unist-util-visit-parents/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('./complex-types.js').Action} Action
 * @typedef {import('./complex-types.js').Index} Index
 * @typedef {import('./complex-types.js').ActionTuple} ActionTuple
 * @typedef {import('./complex-types.js').VisitorResult} VisitorResult
 * @typedef {import('./complex-types.js').Visitor} Visitor
 */ 

/**
 * Continue traversing as normal
 */ const CONTINUE = true;
/**
 * Do not traverse this node’s children
 */ const SKIP = "skip";
/**
 * Stop traversing immediately
 */ const EXIT = false;
/**
 * Visit children of tree which pass test.
 *
 * @param tree
 *   Tree to walk
 * @param [test]
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Function called for nodes that pass `test`.
 * @param [reverse=false]
 *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
 */ const visitParents = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types.js').Visitor<Node>} visitor
     * @param {boolean} [reverse=false]
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    const is = (0,unist_util_is/* convert */.O)(test);
    const step = reverse ? -1 : 1;
    factory(tree, null, [])();
    /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Record<string, unknown>} */ // @ts-expect-error: hush
        const value = typeof node === "object" && node !== null ? node : {};
        /** @type {string|undefined} */ let name;
        if (typeof value.type === "string") {
            name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : undefined;
            Object.defineProperty(visit, "name", {
                value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
            });
        }
        return visit;
        function visit() {
            /** @type {ActionTuple} */ let result = [];
            /** @type {ActionTuple} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<Parent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            // @ts-expect-error looks like a parent.
            if (node.children && result[0] !== SKIP) {
                // @ts-expect-error looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-expect-error looks like a parent.
                grandparents = parents.concat(node);
                // @ts-expect-error looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    // @ts-expect-error looks like a parent.
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === EXIT) {
                        return subresult;
                    }
                    offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
                }
            }
            return result;
        }
    }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === "number") {
        return [
            CONTINUE,
            value
        ];
    }
    return [
        value
    ];
}


/***/ }),

/***/ 66119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vn": () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16481);
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 * @typedef {import('./complex-types.js').Visitor} Visitor
 */ 
/**
 * Visit children of tree which pass test.
 *
 * @param tree
 *   Tree to walk
 * @param [test]
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Function called for nodes that pass `test`.
 * @param reverse
 *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
 */ const visit = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types.js').Visitor} visitor
     * @param {boolean} [reverse]
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__/* .visitParents */ .S4)(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array<Parent>} parents
       */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};



/***/ })

};
;
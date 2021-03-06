/*!
 * dist/inputmask/jquery.inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 5.0.0-beta.29
 */
!function webpackUniversalModuleDefinition(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jQuery")); else if ("function" == typeof define && define.amd) define([ "jQuery" ], t); else {
        var a = "object" == typeof exports ? t(require("jQuery")) : t(e.jQuery);
        for (var n in a) ("object" == typeof exports ? exports : e)[n] = a[n];
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
    return function(a) {
        var n = {};
        function __webpack_require__(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return a[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports;
        }
        return __webpack_require__.m = a, __webpack_require__.c = n, __webpack_require__.d = function(e, t, a) {
            __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            });
        }, __webpack_require__.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, __webpack_require__.t = function(t, e) {
            if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (__webpack_require__.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var n in t) __webpack_require__.d(a, n, function(e) {
                return t[e];
            }.bind(null, n));
            return a;
        }, __webpack_require__.n = function(e) {
            var t = e && e.__esModule ? function getDefault() {
                return e.default;
            } : function getModuleExports() {
                return e;
            };
            return __webpack_require__.d(t, "a", t), t;
        }, __webpack_require__.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(e, t, a) {
        "use strict";
        var n, i, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        i = [ a(1), a(2) ], void 0 === (s = "function" == typeof (n = function(i, s) {
            return void 0 === i.fn.inputmask && (i.fn.inputmask = function(e, t) {
                var a, n = this[0];
                if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                  case "unmaskedvalue":
                    return n && n.inputmask ? n.inputmask.unmaskedvalue() : i(n).val();

                  case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove();
                    });

                  case "getemptymask":
                    return n && n.inputmask ? n.inputmask.getemptymask() : "";

                  case "hasMaskedValue":
                    return !(!n || !n.inputmask) && n.inputmask.hasMaskedValue();

                  case "isComplete":
                    return !n || !n.inputmask || n.inputmask.isComplete();

                  case "getmetadata":
                    return n && n.inputmask ? n.inputmask.getmetadata() : void 0;

                  case "setvalue":
                    s.setValue(n, t);
                    break;

                  case "option":
                    if ("string" != typeof t) return this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(t);
                    });
                    if (n && void 0 !== n.inputmask) return n.inputmask.option(t);
                    break;

                  default:
                    return t.alias = e, a = new s(t), this.each(function() {
                        a.mask(this);
                    });
                } else {
                    if (Array.isArray(e)) return t.alias = e, a = new s(t), this.each(function() {
                        a.mask(this);
                    });
                    if ("object" == (void 0 === e ? "undefined" : r(e))) return a = new s(e), void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(e);
                        a.mask(this);
                    }) : this.each(function() {
                        a.mask(this);
                    });
                    if (void 0 === e) return this.each(function() {
                        (a = new s(t)).mask(this);
                    });
                }
            }), i.fn.inputmask;
        }) ? n.apply(t, i) : n) || (e.exports = s);
    }, function(e, t) {
        e.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(e, t, a) {
        "use strict";
        var n, i, s, x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        i = [ a(3), a(4) ], void 0 === (s = "function" == typeof (n = function(N, M, G) {
            var S = M.document, e = navigator.userAgent, _ = 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/"), P = isInputEventSupported("touchstart"), E = /iemobile/i.test(e), T = /iphone/i.test(e) && !E;
            function Inputmask(e, t, a) {
                if (!(this instanceof Inputmask)) return new Inputmask(e, t, a);
                this.el = G, this.events = {}, this.maskset = G, !(this.refreshValue = !1) !== a && (N.isPlainObject(e) ? t = e : (t = t || {}, 
                e && (t.alias = e)), this.opts = N.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== G, 
                this.userOptions = t || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, t, this.opts));
            }
            function resolveAlias(e, t, a) {
                var n = Inputmask.prototype.aliases[e];
                return n ? (n.alias && resolveAlias(n.alias, G, a), N.extend(!0, a, n), N.extend(!0, a, t), 
                !0) : (null === a.mask && (a.mask = e), !1);
            }
            function generateMaskSet(a, o) {
                function generateMask(e, t, a) {
                    var n = !1;
                    if (null !== e && "" !== e || (n = null !== a.regex, e = n ? (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (n = !0, 
                    ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), 
                    0 < a.repeat || "*" === a.repeat || "+" === a.repeat) {
                        var i = "*" === a.repeat ? 0 : "+" === a.repeat ? 1 : a.repeat;
                        e = a.groupmarker[0] + e + a.groupmarker[1] + a.quantifiermarker[0] + i + "," + a.repeat + a.quantifiermarker[1];
                    }
                    var s, r = n ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e;
                    return Inputmask.prototype.masksCache[r] === G || !0 === o ? (s = {
                        mask: e,
                        maskToken: Inputmask.prototype.analyseMask(e, n, a),
                        validPositions: {},
                        _buffer: G,
                        buffer: G,
                        tests: {},
                        excludes: {},
                        metadata: t,
                        maskLength: G
                    }, !0 !== o && (Inputmask.prototype.masksCache[r] = s, s = N.extend(!0, {}, Inputmask.prototype.masksCache[r]))) : s = N.extend(!0, {}, Inputmask.prototype.masksCache[r]), 
                    s;
                }
                if (N.isFunction(a.mask) && (a.mask = a.mask(a)), N.isArray(a.mask)) {
                    if (1 < a.mask.length) {
                        if (null === a.keepStatic) {
                            a.keepStatic = "auto";
                            for (var e = 0; e < a.mask.length; e++) if (a.mask[e].charAt(0) !== a.mask[0].charAt(0)) {
                                a.keepStatic = !0;
                                break;
                            }
                        }
                        var n = a.groupmarker[0];
                        return N.each(a.isRTL ? a.mask.reverse() : a.mask, function(e, t) {
                            1 < n.length && (n += a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]), 
                            t.mask === G || N.isFunction(t.mask) ? n += t : n += t.mask;
                        }), generateMask(n += a.groupmarker[1], a.mask, a);
                    }
                    a.mask = a.mask.pop();
                }
                return a.mask && a.mask.mask !== G && !N.isFunction(a.mask.mask) ? generateMask(a.mask.mask, a.mask, a) : generateMask(a.mask, a.mask, a);
            }
            function isInputEventSupported(e) {
                var t = S.createElement("input"), a = "on" + e, n = a in t;
                return n || (t.setAttribute(a, "return;"), n = "function" == typeof t[a]), t = null, 
                n;
            }
            function maskScope(e, t, V) {
                t = t || this.maskset, V = V || this.opts;
                var g, i, m, p, s, u = this, l = this.el, h = this.isRTL, r = !1, c = !1, d = !1, n = !1;
                function getMaskTemplate(e, t, a, n, i) {
                    var s = V.greedy;
                    i && (V.greedy = !1), t = t || 0;
                    var r, o, l, u = [], c = 0;
                    getLastValidPosition();
                    do {
                        if (!0 === e && getMaskSet().validPositions[c]) l = i && !0 === getMaskSet().validPositions[c].match.optionality && getMaskSet().validPositions[c + 1] === G && (!0 === getMaskSet().validPositions[c].generatedInput || getMaskSet().validPositions[c].input == V.skipOptionalPartCharacter && 0 < c) ? determineTestTemplate(c, getTests(c, r, c - 1)) : getMaskSet().validPositions[c], 
                        o = l.match, r = l.locator.slice(), u.push(!0 === a ? l.input : !1 === a ? o.nativeDef : getPlaceholder(c, o)); else {
                            l = getTestTemplate(c, r, c - 1), o = l.match, r = l.locator.slice();
                            var f = !0 !== n && (!1 !== V.jitMasking ? V.jitMasking : o.jit);
                            (!1 === f || f === G || "number" == typeof f && isFinite(f) && c < f) && u.push(!1 === a ? o.nativeDef : getPlaceholder(c, o));
                        }
                        "auto" === V.keepStatic && o.newBlockMarker && null !== o.fn && (V.keepStatic = c - 1), 
                        c++;
                    } while ((m === G || c < m) && (null !== o.fn || "" !== o.def) || c < t);
                    return "" === u[u.length - 1] && u.pop(), !1 === a && getMaskSet().maskLength !== G || (getMaskSet().maskLength = c - 1), 
                    V.greedy = s, u;
                }
                function getMaskSet() {
                    return t;
                }
                function resetMaskSet(e) {
                    var t = getMaskSet();
                    t.buffer = G, !0 !== e && (t.validPositions = {}, t.p = 0);
                }
                function getLastValidPosition(e, t, a) {
                    var n = -1, i = -1, s = a || getMaskSet().validPositions;
                    for (var r in e === G && (e = -1), s) {
                        var o = parseInt(r);
                        s[o] && (t || !0 !== s[o].generatedInput) && (o <= e && (n = o), e <= o && (i = o));
                    }
                    return -1 === n || n == e ? i : -1 == i ? n : e - n < i - e ? n : i;
                }
                function getDecisionTaker(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), t !== G ? t.toString() : "";
                }
                function getLocator(e, t) {
                    var a = (e.alternation != G ? e.mloc[getDecisionTaker(e)] : e.locator).join("");
                    if ("" !== a) for (;a.length < t; ) a += "0";
                    return a;
                }
                function determineTestTemplate(e, t) {
                    for (var a, n, i, s = getTest(e = 0 < e ? e - 1 : 0), r = getLocator(s), o = 0; o < t.length; o++) {
                        var l = t[o];
                        a = getLocator(l, r.length);
                        var u = Math.abs(a - r);
                        (n === G || "" !== a && u < n || i && i.match.optionality && "master" === i.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || i && i.match.optionalQuantifier && !l.match.optionalQuantifier) && (n = u, 
                        i = l);
                    }
                    return i;
                }
                function getTestTemplate(e, t, a) {
                    return getMaskSet().validPositions[e] || determineTestTemplate(e, getTests(e, t ? t.slice() : t, a));
                }
                function getTest(e, t) {
                    return getMaskSet().validPositions[e] ? getMaskSet().validPositions[e] : (t || getTests(e))[0];
                }
                function positionCanMatchDefinition(e, t) {
                    for (var a = !1, n = getTests(e), i = 0; i < n.length; i++) if (n[i].match && n[i].match.def === t) {
                        a = !0;
                        break;
                    }
                    return a;
                }
                function getTests(A, e, t) {
                    var O, a = getMaskSet().maskToken, I = e ? t : 0, n = e ? e.slice() : [ 0 ], j = [], D = !1, L = e ? e.join("") : "";
                    function resolveTestFromToken(w, B, e, t) {
                        function handleMatch(e, t, a) {
                            function isFirstMatch(a, n) {
                                var i = 0 === N.inArray(a, n.matches);
                                return i || N.each(n.matches, function(e, t) {
                                    if (!0 === t.isQuantifier ? i = isFirstMatch(a, n.matches[e - 1]) : t.hasOwnProperty("matches") && (i = isFirstMatch(a, t)), 
                                    i) return !1;
                                }), i;
                            }
                            function resolveNdxInitializer(e, i, s) {
                                var r, o;
                                if ((getMaskSet().tests[e] || getMaskSet().validPositions[e]) && N.each(getMaskSet().tests[e] || [ getMaskSet().validPositions[e] ], function(e, t) {
                                    if (t.mloc[i]) return r = t, !1;
                                    var a = s !== G ? s : t.alternation, n = t.locator[a] !== G ? t.locator[a].toString().indexOf(i) : -1;
                                    (o === G || n < o) && -1 !== n && (r = t, o = n);
                                }), r) {
                                    var t = r.locator[r.alternation], a = r.mloc[i] || r.mloc[t] || r.locator;
                                    return a.slice((s !== G ? s : r.alternation) + 1);
                                }
                                return s !== G ? resolveNdxInitializer(e, i) : G;
                            }
                            function isSubsetOf(e, t) {
                                function expand(e) {
                                    for (var t, a, n = [], i = 0, s = e.length; i < s; i++) if ("-" === e.charAt(i)) for (a = e.charCodeAt(i + 1); ++t < a; ) n.push(String.fromCharCode(t)); else t = e.charCodeAt(i), 
                                    n.push(e.charAt(i));
                                    return n.join("");
                                }
                                return V.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== expand(t.match.def.replace(/[\[\]]/g, "")).indexOf(expand(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef;
                            }
                            function setMergeLocators(e, t) {
                                if (t === G || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                    e.mloc = e.mloc || {};
                                    var a = e.locator[e.alternation];
                                    if (a !== G) {
                                        if ("string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === G && (e.mloc[a] = e.locator.slice()), 
                                        t !== G) {
                                            for (var n in t.mloc) "string" == typeof n && (n = n.split(",")[0]), e.mloc[n] === G && (e.mloc[n] = t.mloc[n]);
                                            e.locator[e.alternation] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = G;
                                }
                                return !1;
                            }
                            if (500 < I && a !== G) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                            if (I === A && e.matches === G) return j.push({
                                match: e,
                                locator: t.reverse(),
                                cd: L,
                                mloc: {}
                            }), !0;
                            if (e.matches !== G) {
                                if (e.isGroup && a !== e) {
                                    if (e = handleMatch(w.matches[N.inArray(e, w.matches) + 1], t, a)) return !0;
                                } else if (e.isOptional) {
                                    var n = e;
                                    if (e = resolveTestFromToken(e, B, t, a)) {
                                        if (N.each(j, function(e, t) {
                                            t.match.optionality = !0;
                                        }), O = j[j.length - 1].match, a !== G || !isFirstMatch(O, n)) return !0;
                                        D = !0, I = A;
                                    }
                                } else if (e.isAlternator) {
                                    var i, s = e, r = [], o = j.slice(), l = t.length, u = 0 < B.length ? B.shift() : -1;
                                    if (-1 === u || "string" == typeof u) {
                                        var c, f = I, p = B.slice(), k = [];
                                        if ("string" == typeof u) k = u.split(","); else for (c = 0; c < s.matches.length; c++) k.push(c.toString());
                                        if (getMaskSet().excludes[A]) {
                                            for (var m = k.slice(), g = 0, h = getMaskSet().excludes[A].length; g < h; g++) k.splice(k.indexOf(getMaskSet().excludes[A][g].toString()), 1);
                                            0 === k.length && (getMaskSet().excludes[A] = G, k = m);
                                        }
                                        (!0 === V.keepStatic || isFinite(parseInt(V.keepStatic)) && f >= V.keepStatic) && (k = k.slice(0, 1));
                                        for (var d = !1, v = 0; v < k.length; v++) {
                                            c = parseInt(k[v]), j = [], B = "string" == typeof u && resolveNdxInitializer(I, c, l) || p.slice(), 
                                            s.matches[c] && handleMatch(s.matches[c], [ c ].concat(t), a) ? e = !0 : 0 === v && (d = !0), 
                                            i = j.slice(), I = f, j = [];
                                            for (var b = 0; b < i.length; b++) {
                                                var y = i[b], M = !1;
                                                y.match.jit = y.match.jit || d, y.alternation = y.alternation || l, setMergeLocators(y);
                                                for (var S = 0; S < r.length; S++) {
                                                    var _ = r[S];
                                                    if ("string" != typeof u || y.alternation !== G && -1 !== N.inArray(y.locator[y.alternation].toString(), k)) {
                                                        if (y.match.nativeDef === _.match.nativeDef) {
                                                            M = !0, setMergeLocators(_, y);
                                                            break;
                                                        }
                                                        if (isSubsetOf(y, _)) {
                                                            setMergeLocators(y, _) && (M = !0, r.splice(r.indexOf(_), 0, y));
                                                            break;
                                                        }
                                                        if (isSubsetOf(_, y)) {
                                                            setMergeLocators(_, y);
                                                            break;
                                                        }
                                                        if (C = _, void 0, !(!((x = x = y).locator.slice(x.alternation).join("") == C.locator.slice(C.alternation).join("")) || null !== x.match.fn || null === C.match.fn) && C.match.fn.test(x.match.def, getMaskSet(), A, !1, V, !1)) {
                                                            setMergeLocators(y, _) && (M = !0, r.splice(r.indexOf(_), 0, y));
                                                            break;
                                                        }
                                                    }
                                                }
                                                M || r.push(y);
                                            }
                                        }
                                        j = o.concat(r), I = A, D = 0 < j.length, e = 0 < r.length, B = p.slice();
                                    } else e = handleMatch(s.matches[u] || w.matches[u], [ u ].concat(t), a);
                                    if (e) return !0;
                                } else if (e.isQuantifier && a !== w.matches[N.inArray(e, w.matches) - 1]) for (var P = e, E = 0 < B.length ? B.shift() : 0; E < (isNaN(P.quantifier.max) ? E + 1 : P.quantifier.max) && I <= A; E++) {
                                    var T = w.matches[N.inArray(P, w.matches) - 1];
                                    if (e = handleMatch(T, [ E ].concat(t), T)) {
                                        if ((O = j[j.length - 1].match).optionalQuantifier = E > P.quantifier.min - 1, O.jit = (E || 1) * T.matches.indexOf(O) >= P.quantifier.jit, 
                                        O.optionalQuantifier && isFirstMatch(O, T)) {
                                            D = !0, I = A;
                                            break;
                                        }
                                        return O.jit && !O.optionalQuantifier && (O.jitOffset = T.matches.indexOf(O)), !0;
                                    }
                                } else if (e = resolveTestFromToken(e, B, t, a)) return !0;
                            } else I++;
                            var x, C;
                        }
                        for (var a = 0 < B.length ? B.shift() : 0; a < w.matches.length; a++) if (!0 !== w.matches[a].isQuantifier) {
                            var n = handleMatch(w.matches[a], [ a ].concat(e), t);
                            if (n && I === A) return n;
                            if (A < I) break;
                        }
                    }
                    if (-1 < A) {
                        if (e === G) {
                            for (var i, s = A - 1; (i = getMaskSet().validPositions[s] || getMaskSet().tests[s]) === G && -1 < s; ) s--;
                            i !== G && -1 < s && (n = function mergeLocators(e, t) {
                                var n = [];
                                return N.isArray(t) || (t = [ t ]), 0 < t.length && (t[0].alternation === G ? 0 === (n = determineTestTemplate(e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : N.each(t, function(e, t) {
                                    if ("" !== t.def) if (0 === n.length) n = t.locator.slice(); else for (var a = 0; a < n.length; a++) t.locator[a] && -1 === n[a].toString().indexOf(t.locator[a]) && (n[a] += "," + t.locator[a]);
                                })), n;
                            }(s, i), L = n.join(""), I = s);
                        }
                        if (getMaskSet().tests[A] && getMaskSet().tests[A][0].cd === L) return getMaskSet().tests[A];
                        for (var r = n.shift(); r < a.length; r++) {
                            var o = resolveTestFromToken(a[r], n, [ r ]);
                            if (o && I === A || A < I) break;
                        }
                    }
                    return (0 === j.length || D) && j.push({
                        match: {
                            fn: null,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: L
                    }), e !== G && getMaskSet().tests[A] ? N.extend(!0, [], j) : (getMaskSet().tests[A] = N.extend(!0, [], j), 
                    getMaskSet().tests[A]);
                }
                function getBufferTemplate() {
                    return getMaskSet()._buffer === G && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
                    getMaskSet().buffer === G && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
                    getMaskSet()._buffer;
                }
                function getBuffer(e) {
                    return getMaskSet().buffer !== G && !0 !== e || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0), 
                    getMaskSet()._buffer === G && (getMaskSet()._buffer = getMaskSet().buffer.slice())), 
                    getMaskSet().buffer;
                }
                function refreshFromBuffer(e, t, a) {
                    var n, i;
                    if (!0 === e) resetMaskSet(), e = 0, t = a.length; else for (n = e; n < t; n++) delete getMaskSet().validPositions[n];
                    for (n = i = e; n < t; n++) if (resetMaskSet(!0), a[n] !== V.skipOptionalPartCharacter) {
                        var s = isValid(i, a[n], !0, !0);
                        !1 !== s && (resetMaskSet(!0), i = s.caret !== G ? s.caret : s.pos + 1);
                    }
                }
                function checkAlternationMatch(e, t, a) {
                    for (var n, i = V.greedy ? t : t.slice(0, 1), s = !1, r = a !== G ? a.split(",") : [], o = 0; o < r.length; o++) -1 !== (n = e.indexOf(r[o])) && e.splice(n, 1);
                    for (var l = 0; l < e.length; l++) if (-1 !== N.inArray(e[l], i)) {
                        s = !0;
                        break;
                    }
                    return s;
                }
                function alternate(e, t, a, n, i) {
                    var s, r, o, l, u, c, f, p = N.extend(!0, {}, getMaskSet().validPositions), k = !1, m = i !== G ? i : getLastValidPosition();
                    if (-1 === m && i === G) l = getTest(s = 0), r = l.alternation; else for (;0 <= m; m--) if ((o = getMaskSet().validPositions[m]) && o.alternation !== G) {
                        if (l && l.locator[o.alternation] !== o.locator[o.alternation]) break;
                        s = m, r = getMaskSet().validPositions[s].alternation, l = o;
                    }
                    if (r !== G) {
                        f = parseInt(s), getMaskSet().excludes[f] = getMaskSet().excludes[f] || [], !0 !== e && getMaskSet().excludes[f].push(getDecisionTaker(l));
                        var g = [], h = 0;
                        for (u = f; u < getLastValidPosition(G, !0) + 1; u++) (c = getMaskSet().validPositions[u]) && !0 !== c.generatedInput ? g.push(c.input) : u < e && h++, 
                        delete getMaskSet().validPositions[u];
                        for (;getMaskSet().excludes[f] && getMaskSet().excludes[f].length < 10; ) {
                            var d = -1 * h, v = g.slice();
                            for (getMaskSet().tests[f] = G, resetMaskSet(!0), k = !0; 0 < v.length; ) {
                                var b = v.shift();
                                if (!(k = isValid(getLastValidPosition(G, !0) + 1, b, !1, n, !0))) break;
                            }
                            if (k && t !== G) {
                                var y = getLastValidPosition(e) + 1;
                                for (u = f; u < getLastValidPosition() + 1; u++) ((c = getMaskSet().validPositions[u]) === G || null == c.match.fn) && u < e + d && d++;
                                k = isValid(y < (e += d) ? y : e, t, a, n, !0);
                            }
                            if (k) break;
                            if (resetMaskSet(), l = getTest(f), getMaskSet().validPositions = N.extend(!0, {}, p), 
                            !getMaskSet().excludes[f]) {
                                k = alternate(e, t, a, n, f - 1);
                                break;
                            }
                            var M = getDecisionTaker(l);
                            if (-1 !== getMaskSet().excludes[f].indexOf(M)) {
                                k = alternate(e, t, a, n, f - 1);
                                break;
                            }
                            for (getMaskSet().excludes[f].push(M), u = f; u < getLastValidPosition(G, !0) + 1; u++) delete getMaskSet().validPositions[u];
                        }
                    }
                    return getMaskSet().excludes[f] = G, k;
                }
                function isValid(u, e, t, c, a, n) {
                    function isSelection(e) {
                        return h ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1;
                    }
                    t = !0 === t;
                    var i = u;
                    function _isValid(s, r, o) {
                        var l = !1;
                        return N.each(getTests(s), function(e, t) {
                            var a = t.match;
                            if (getBuffer(!0), !1 !== (l = null != a.fn ? a.fn.test(r, getMaskSet(), s, o, V, isSelection(u)) : (r === a.def || r === V.skipOptionalPartCharacter) && "" !== a.def && {
                                c: getPlaceholder(s, a, !0) || a.def,
                                pos: s
                            })) {
                                var n = l.c !== G ? l.c : r, i = s;
                                return n = n === V.skipOptionalPartCharacter && null === a.fn ? getPlaceholder(s, a, !0) || a.def : n, 
                                l.remove !== G && (N.isArray(l.remove) || (l.remove = [ l.remove ]), N.each(l.remove.sort(function(e, t) {
                                    return t - e;
                                }), function(e, t) {
                                    revalidateMask({
                                        begin: t,
                                        end: t + 1
                                    });
                                })), l.insert !== G && (N.isArray(l.insert) || (l.insert = [ l.insert ]), N.each(l.insert.sort(function(e, t) {
                                    return e - t;
                                }), function(e, t) {
                                    isValid(t.pos, t.c, !0, c);
                                })), !0 !== l && l.pos !== G && l.pos !== s && (i = l.pos), !0 !== l && l.pos === G && l.c === G || revalidateMask(u, N.extend({}, t, {
                                    input: function casing(e, t, a) {
                                        switch (V.casing || t.casing) {
                                          case "upper":
                                            e = e.toUpperCase();
                                            break;

                                          case "lower":
                                            e = e.toLowerCase();
                                            break;

                                          case "title":
                                            var n = getMaskSet().validPositions[a - 1];
                                            e = 0 === a || n && n.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                            break;

                                          default:
                                            if (N.isFunction(V.casing)) {
                                                var i = Array.prototype.slice.call(arguments);
                                                i.push(getMaskSet().validPositions), e = V.casing.apply(this, i);
                                            }
                                        }
                                        return e;
                                    }(n, a, i)
                                }), c, i) || (l = !1), !1;
                            }
                        }), l;
                    }
                    u.begin !== G && (i = h ? u.end : u.begin);
                    var s = !0, r = N.extend(!0, {}, getMaskSet().validPositions);
                    if (N.isFunction(V.preValidation) && !t && !0 !== c && !0 !== n && (s = V.preValidation(getBuffer(), i, e, isSelection(u), V, getMaskSet())), 
                    !0 === s) {
                        if (trackbackPositions(G, i, !0), (m === G || i < m) && (s = _isValid(i, e, t), 
                        (!t || !0 === c) && !1 === s && !0 !== n)) {
                            var o = getMaskSet().validPositions[i];
                            if (!o || null !== o.match.fn || o.match.def !== e && e !== V.skipOptionalPartCharacter) {
                                if ((V.insertMode || getMaskSet().validPositions[seekNext(i)] === G) && !isMask(i, !0)) for (var l = i + 1, f = seekNext(i); l <= f; l++) if (!1 !== (s = _isValid(l, e, t))) {
                                    s = trackbackPositions(i, s.pos !== G ? s.pos : l) || s, i = l;
                                    break;
                                }
                            } else s = {
                                caret: seekNext(i)
                            };
                        }
                        !1 !== s || !1 === V.keepStatic || null != V.regex && !isComplete(getBuffer()) || t || !0 === a || (s = alternate(i, e, t, c)), 
                        !0 === s && (s = {
                            pos: i
                        });
                    }
                    if (N.isFunction(V.postValidation) && !1 !== s && !t && !0 !== c && !0 !== n) {
                        var p = V.postValidation(getBuffer(!0), u.begin !== G ? h ? u.end : u.begin : u, s, V);
                        if (p !== G) {
                            if (p.refreshFromBuffer && p.buffer) {
                                var k = p.refreshFromBuffer;
                                refreshFromBuffer(!0 === k ? k : k.start, k.end, p.buffer);
                            }
                            s = !0 === p ? s : p;
                        }
                    }
                    return s && s.pos === G && (s.pos = i), !1 !== s && !0 !== n || (resetMaskSet(!0), 
                    getMaskSet().validPositions = N.extend(!0, {}, r)), s;
                }
                function trackbackPositions(e, t, a) {
                    var n;
                    if (e === G) for (e = t - 1; 0 < e && !getMaskSet().validPositions[e]; e--) ;
                    for (var i = e; i < t; i++) if (getMaskSet().validPositions[i] === G && !isMask(i, !0)) {
                        var s = 0 == i ? getTest(i) : getMaskSet().validPositions[i - 1];
                        if (s) {
                            var r = getTests(i).slice();
                            "" === r[r.length - 1].match.def && r.pop();
                            var o = determineTestTemplate(i, r);
                            if ((o = N.extend({}, o, {
                                input: getPlaceholder(i, o.match, !0) || o.match.def
                            })).generatedInput = !0, revalidateMask(i, o, !0), !0 !== a) {
                                var l = getMaskSet().validPositions[t].input;
                                getMaskSet().validPositions[t] = G, n = isValid(t, l, !0, !0);
                            }
                        }
                    }
                    return n;
                }
                function revalidateMask(e, t, a, n) {
                    function IsEnclosedStatic(e, t, a) {
                        var n = t[e];
                        if (n === G || (null !== n.match.fn || !0 === n.match.optionality) && n.input !== V.radixPoint) return !1;
                        var i = a.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1], s = a.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                        return i && s;
                    }
                    var i = e.begin !== G ? e.begin : e, s = e.end !== G ? e.end : e;
                    if (e.begin > e.end && (i = e.end, s = e.begin), n = n !== G ? n : i, i !== s || V.insertMode && getMaskSet().validPositions[n] !== G && a === G) {
                        var r = N.extend(!0, {}, getMaskSet().validPositions), o = getLastValidPosition(G, !0);
                        for (getMaskSet().p = i, p = o; i <= p; p--) getMaskSet().validPositions[p] && "+" === getMaskSet().validPositions[p].match.nativeDef && (V.isNegative = !1), 
                        delete getMaskSet().validPositions[p];
                        var l = !0, u = n, c = (getMaskSet().validPositions, !1), f = u, p = u;
                        for (t && (getMaskSet().validPositions[n] = N.extend(!0, {}, t), f++, u++, i < s && p++); p <= o; p++) {
                            var k = r[p];
                            if (k !== G && (s <= p || i <= p && !0 !== k.generatedInput && IsEnclosedStatic(p, r, {
                                begin: i,
                                end: s
                            }))) {
                                for (;"" !== getTest(f).match.def; ) {
                                    if (!1 === c && r[f] && r[f].match.nativeDef === k.match.nativeDef) getMaskSet().validPositions[f] = N.extend(!0, {}, r[f]), 
                                    getMaskSet().validPositions[f].input = k.input, trackbackPositions(G, f, !0), u = f + 1, 
                                    l = !0; else if (V.shiftPositions && positionCanMatchDefinition(f, k.match.def)) {
                                        var m = isValid(f, k.input, !0, !0);
                                        l = !1 !== m, u = m.caret || m.insert ? getLastValidPosition() : f + 1, c = !0;
                                    } else l = !0 === k.generatedInput || k.input === V.radixPoint && !0 === V.numericInput;
                                    if (l) break;
                                    if (!l && s < f && isMask(f, !0) && (null !== k.match.fn || f > getMaskSet().maskLength)) break;
                                    f++;
                                }
                                "" == getTest(f).match.def && (l = !1), f = u;
                            }
                            if (!l) break;
                        }
                        if (!l) return getMaskSet().validPositions = N.extend(!0, {}, r), resetMaskSet(!0), 
                        !1;
                    } else t && (getMaskSet().validPositions[n] = N.extend(!0, {}, t));
                    return resetMaskSet(!0), !0;
                }
                function isMask(e, t) {
                    var a = getTestTemplate(e).match;
                    if ("" === a.def && (a = getTest(e).match), null != a.fn) return a.fn;
                    if (!0 !== t && -1 < e) {
                        var n = getTests(e);
                        return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0);
                    }
                    return !1;
                }
                function seekNext(e, t) {
                    for (var a = e + 1; "" !== getTest(a).match.def && (!0 === t && (!0 !== getTest(a).match.newBlockMarker || !isMask(a)) || !0 !== t && !isMask(a)); ) a++;
                    return a;
                }
                function seekPrevious(e, t) {
                    var a, n = e;
                    if (n <= 0) return 0;
                    for (;0 < --n && (!0 === t && !0 !== getTest(n).match.newBlockMarker || !0 !== t && !isMask(n) && ((a = getTests(n)).length < 2 || 2 === a.length && "" === a[1].match.def)); ) ;
                    return n;
                }
                function writeBuffer(e, t, a, n, i) {
                    if (n && N.isFunction(V.onBeforeWrite)) {
                        var s = V.onBeforeWrite.call(u, n, t, a, V);
                        if (s) {
                            if (s.refreshFromBuffer) {
                                var r = s.refreshFromBuffer;
                                refreshFromBuffer(!0 === r ? r : r.start, r.end, s.buffer || t), t = getBuffer(!0);
                            }
                            a !== G && (a = s.caret !== G ? s.caret : a);
                        }
                    }
                    if (e !== G && (e.inputmask._valueSet(t.join("")), a === G || n !== G && "blur" === n.type ? renderColorMask(e, a, 0 === t.length) : caret(e, a), 
                    !0 === i)) {
                        var o = N(e), l = e.inputmask._valueGet();
                        c = !0, o.trigger("input"), setTimeout(function() {
                            l === getBufferTemplate().join("") ? o.trigger("cleared") : !0 === isComplete(t) && o.trigger("complete");
                        }, 0);
                    }
                }
                function getPlaceholder(e, t, a) {
                    if ((t = t || getTest(e).match).placeholder !== G || !0 === a) return N.isFunction(t.placeholder) ? t.placeholder(V) : t.placeholder;
                    if (null !== t.fn) return V.placeholder.charAt(e % V.placeholder.length);
                    if (-1 < e && getMaskSet().validPositions[e] === G) {
                        var n, i = getTests(e), s = [];
                        if (i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)) for (var r = 0; r < i.length; r++) if (!0 !== i[r].match.optionality && !0 !== i[r].match.optionalQuantifier && (null === i[r].match.fn || n === G || !1 !== i[r].match.fn.test(n.match.def, getMaskSet(), e, !0, V)) && (s.push(i[r]), 
                        null === i[r].match.fn && (n = i[r]), 1 < s.length && /[0-9a-bA-Z]/.test(s[0].match.def))) return V.placeholder.charAt(e % V.placeholder.length);
                    }
                    return t.def;
                }
                function HandleNativePlaceholder(e, t) {
                    if (_ && e.inputmask._valueGet() !== t) {
                        var a = getBuffer().slice(), n = e.inputmask._valueGet();
                        n !== t && (-1 === getLastValidPosition() && n === getBufferTemplate().join("") ? a = [] : clearOptionalTail(a), 
                        writeBuffer(e, a));
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }
                var a, o = {
                    on: function on(e, t, s) {
                        var a = function ev(e) {
                            var t = this;
                            if (t.inputmask === G && "FORM" !== this.nodeName) {
                                var a = N.data(t, "_inputmask_opts");
                                a ? new Inputmask(a).mask(t) : o.off(t);
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(t.disabled || t.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === V.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                    switch (e.type) {
                                      case "input":
                                        if (!0 === c) return c = !1, e.preventDefault();
                                        if (P) {
                                            var n = arguments;
                                            return setTimeout(function() {
                                                s.apply(t, n), caret(t, t.inputmask.caretPos, G, !0);
                                            }, 0), !1;
                                        }
                                        break;

                                      case "keydown":
                                        c = r = !1;
                                        break;

                                      case "keypress":
                                        if (!0 === r) return e.preventDefault();
                                        r = !0;
                                        break;

                                      case "click":
                                        if (E || T) {
                                            var n = arguments;
                                            return setTimeout(function() {
                                                s.apply(t, n);
                                            }, 0), !1;
                                        }
                                    }
                                    var i = s.apply(t, arguments);
                                    return !1 === i && (e.preventDefault(), e.stopPropagation()), i;
                                }
                                e.preventDefault();
                            }
                        };
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(a), 
                        -1 !== N.inArray(t, [ "submit", "reset" ]) ? null !== e.form && N(e.form).on(t, a) : N(e).on(t, a);
                    },
                    off: function off(n, e) {
                        var t;
                        n.inputmask && n.inputmask.events && (e ? (t = [])[e] = n.inputmask.events[e] : t = n.inputmask.events, 
                        N.each(t, function(e, t) {
                            for (;0 < t.length; ) {
                                var a = t.pop();
                                -1 !== N.inArray(e, [ "submit", "reset" ]) ? null !== n.form && N(n.form).off(e, a) : N(n).off(e, a);
                            }
                            delete n.inputmask.events[e];
                        }));
                    }
                }, v = {
                    keydownEvent: function keydownEvent(e) {
                        var t = this, a = N(t), n = e.keyCode, i = caret(t);
                        if (n === Inputmask.keyCode.BACKSPACE || n === Inputmask.keyCode.DELETE || T && n === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && n === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), 
                        handleRemove(0, n, i), writeBuffer(t, getBuffer(!0), getMaskSet().p, e, t.inputmask._valueGet() !== getBuffer().join("")); else if (n === Inputmask.keyCode.END || n === Inputmask.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var s = seekNext(getLastValidPosition());
                            caret(t, e.shiftKey ? i.begin : s, s, !0);
                        } else n === Inputmask.keyCode.HOME && !e.shiftKey || n === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                        caret(t, 0, e.shiftKey ? i.begin : 0, !0)) : (V.undoOnEscape && n === Inputmask.keyCode.ESCAPE || 90 === n && e.ctrlKey) && !0 !== e.altKey ? (checkVal(t, !0, !1, g.split("")), 
                        a.trigger("click")) : n !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === V.tabThrough && n === Inputmask.keyCode.TAB && (!0 === e.shiftKey ? (null === getTest(i.begin).match.fn && (i.begin = seekNext(i.begin)), 
                        i.end = seekPrevious(i.begin, !0), i.begin = seekPrevious(i.end, !0)) : (i.begin = seekNext(i.begin, !0), 
                        i.end = seekNext(i.begin, !0), i.end < getMaskSet().maskLength && i.end--), i.begin < getMaskSet().maskLength && (e.preventDefault(), 
                        caret(t, i.begin, i.end))) : (V.insertMode = !V.insertMode, t.setAttribute("im-insert", V.insertMode));
                        V.onKeyDown.call(this, e, getBuffer(), caret(t).begin, V), d = -1 !== N.inArray(n, V.ignorables);
                    },
                    keypressEvent: function keypressEvent(e, t, a, n, i) {
                        var s = this, r = N(s), o = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || d)) return o === Inputmask.keyCode.ENTER && g !== getBuffer().join("") && (g = getBuffer().join(""), 
                        setTimeout(function() {
                            r.trigger("change");
                        }, 0)), !0;
                        if (o) {
                            46 === o && !1 === e.shiftKey && "" !== V.radixPoint && (o = V.radixPoint.charCodeAt(0));
                            var l, u = t ? {
                                begin: i,
                                end: i
                            } : caret(s), c = String.fromCharCode(o), f = 0;
                            if (V._radixDance && V.numericInput) {
                                var p = getBuffer().indexOf(V.radixPoint.charAt(0)) + 1;
                                u.begin <= p && (o === V.radixPoint.charCodeAt(0) && (f = 1), u.begin -= 1, u.end -= 1);
                            }
                            getMaskSet().writeOutBuffer = !0;
                            var k = isValid(u, c, n);
                            if (!1 !== k && (resetMaskSet(!0), l = k.caret !== G ? k.caret : seekNext(k.pos.begin ? k.pos.begin : k.pos), 
                            getMaskSet().p = l), l = (V.numericInput && k.caret === G ? seekPrevious(l) : l) + f, 
                            !1 !== a && (setTimeout(function() {
                                V.onKeyValidation.call(s, o, k, V);
                            }, 0), getMaskSet().writeOutBuffer && !1 !== k)) {
                                var m = getBuffer();
                                writeBuffer(s, m, l, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== k && (k.forwardPosition = l), k;
                        }
                    },
                    pasteEvent: function pasteEvent(e) {
                        var t, a = this, n = e.originalEvent || e, i = (N(a), a.inputmask._valueGet(!0)), s = caret(a);
                        h && (t = s.end, s.end = s.begin, s.begin = t);
                        var r = i.substr(0, s.begin), o = i.substr(s.end, i.length);
                        if (r === (h ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, s.begin).join("") && (r = ""), 
                        o === (h ? getBufferTemplate().reverse() : getBufferTemplate()).slice(s.end).join("") && (o = ""), 
                        M.clipboardData && M.clipboardData.getData) i = r + M.clipboardData.getData("Text") + o; else {
                            if (!n.clipboardData || !n.clipboardData.getData) return !0;
                            i = r + n.clipboardData.getData("text/plain") + o;
                        }
                        var l = i;
                        if (N.isFunction(V.onBeforePaste)) {
                            if (!1 === (l = V.onBeforePaste.call(u, i, V))) return e.preventDefault();
                            l || (l = i);
                        }
                        return checkVal(a, !1, !1, l.toString().split("")), writeBuffer(a, getBuffer(), seekNext(getLastValidPosition()), e, g !== getBuffer().join("")), 
                        e.preventDefault();
                    },
                    inputFallBackEvent: function inputFallBackEvent(e) {
                        var n = this, t = n.inputmask._valueGet();
                        if (getBuffer().join("") !== t) {
                            var a = caret(n);
                            if (t = function ieMobileHandler(e, t, a) {
                                if (E) {
                                    var n = t.replace(getBuffer().join(""), "");
                                    if (1 === n.length) {
                                        var i = t.split("");
                                        i.splice(a.begin, 0, n), t = i.join("");
                                    }
                                }
                                return t;
                            }(0, t = function radixPointHandler(e, t, a) {
                                return "." === t.charAt(a.begin - 1) && "" !== V.radixPoint && ((t = t.split(""))[a.begin - 1] = V.radixPoint.charAt(0), 
                                t = t.join("")), t;
                            }(0, t, a), a), getBuffer().join("") !== t) {
                                var i = getBuffer().join(""), s = !V.numericInput && t.length > i.length ? -1 : 0, r = t.substr(0, a.begin), o = t.substr(a.begin), l = i.substr(0, a.begin + s), u = i.substr(a.begin + s), c = a, f = "", p = !1;
                                if (r !== l) {
                                    var k, m = (p = r.length >= l.length) ? r.length : l.length;
                                    for (k = 0; r.charAt(k) === l.charAt(k) && k < m; k++) ;
                                    p && (c.begin = k - s, f += r.slice(k, c.end));
                                }
                                if (o !== u && (o.length > u.length ? f += o.slice(0, 1) : o.length < u.length && (c.end += u.length - o.length, 
                                p || "" === V.radixPoint || "" !== o || r.charAt(c.begin + s - 1) !== V.radixPoint || (c.begin--, 
                                f = V.radixPoint))), writeBuffer(n, getBuffer(), {
                                    begin: c.begin + s,
                                    end: c.end + s
                                }), 0 < f.length) N.each(f.split(""), function(e, t) {
                                    var a = new N.Event("keypress");
                                    a.which = t.charCodeAt(0), d = !1, v.keypressEvent.call(n, a);
                                }); else {
                                    c.begin === c.end - 1 && (c.begin = seekPrevious(c.begin + 1), c.begin === c.end - 1 ? caret(n, c.begin) : caret(n, c.begin, c.end));
                                    var g = new N.Event("keydown");
                                    g.keyCode = V.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE, 
                                    v.keydownEvent.call(n, g);
                                }
                                e.preventDefault();
                            }
                        }
                    },
                    beforeInputEvent: function beforeInputEvent(e) {
                        if (e.cancelable) {
                            var n = this;
                            switch (e.inputType) {
                              case "insertText":
                                return N.each(e.data.split(""), function(e, t) {
                                    var a = new N.Event("keypress");
                                    a.which = t.charCodeAt(0), d = !1, v.keypressEvent.call(n, a);
                                }), e.preventDefault();

                              case "deleteContentBackward":
                                var t = new N.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.BACKSPACE, v.keydownEvent.call(n, t), e.preventDefault();

                              case "deleteContentForward":
                                var t = new N.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.DELETE, v.keydownEvent.call(n, t), e.preventDefault();
                            }
                        }
                    },
                    setValueEvent: function setValueEvent(e) {
                        this.inputmask.refreshValue = !1;
                        var t = e && e.detail ? e.detail[0] : arguments[1], t = t || this.inputmask._valueGet(!0);
                        N.isFunction(V.onBeforeMask) && (t = V.onBeforeMask.call(u, t, V) || t), checkVal(this, !0, !1, t = t.split("")), 
                        g = getBuffer().join(""), (V.clearMaskOnLostFocus || V.clearIncomplete) && this.inputmask._valueGet() === getBufferTemplate().join("") && this.inputmask._valueSet("");
                    },
                    focusEvent: function focusEvent(e) {
                        var t = this, a = t.inputmask._valueGet();
                        V.showMaskOnFocus && (!V.showMaskOnHover || V.showMaskOnHover && "" === a) && (t.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(t, getBuffer(), seekNext(getLastValidPosition())) : !1 === n && caret(t, seekNext(getLastValidPosition()))), 
                        !0 === V.positionCaretOnTab && !1 === n && v.clickEvent.apply(t, [ e, !0 ]), g = getBuffer().join("");
                    },
                    mouseleaveEvent: function mouseleaveEvent(e) {
                        n = !1, V.clearMaskOnLostFocus && S.activeElement !== this && HandleNativePlaceholder(this, s);
                    },
                    clickEvent: function clickEvent(e, u) {
                        var c = this;
                        setTimeout(function() {
                            if (S.activeElement === c) {
                                var e = caret(c);
                                if (u && (h ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (V.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    caret(c, 0, getBuffer().length);
                                    break;

                                  case "ignore":
                                    caret(c, seekNext(getLastValidPosition()));
                                    break;

                                  case "radixFocus":
                                    if (function doRadixFocus(e) {
                                        if ("" !== V.radixPoint) {
                                            var t = getMaskSet().validPositions;
                                            if (t[e] === G || t[e].input === getPlaceholder(e)) {
                                                if (e < seekNext(-1)) return !0;
                                                var a = N.inArray(V.radixPoint, getBuffer());
                                                if (-1 !== a) {
                                                    for (var n in t) if (a < n && t[n].input !== getPlaceholder(n)) return !1;
                                                    return !0;
                                                }
                                            }
                                        }
                                        return !1;
                                    }(e.begin)) {
                                        var t = getBuffer().join("").indexOf(V.radixPoint);
                                        caret(c, V.numericInput ? seekNext(t) : t);
                                        break;
                                    }

                                  default:
                                    var a = e.begin, n = getLastValidPosition(a, !0), i = seekNext(n);
                                    if (a < i) caret(c, isMask(a, !0) || isMask(a - 1, !0) ? a : seekNext(a)); else {
                                        var s = getMaskSet().validPositions[n], r = getTestTemplate(i, s ? s.match.locator : G, s), o = getPlaceholder(i, r.match);
                                        if ("" !== o && getBuffer()[i] !== o && !0 !== r.match.optionalQuantifier && !0 !== r.match.newBlockMarker || !isMask(i, V.keepStatic) && r.match.def === o) {
                                            var l = seekNext(i);
                                            (l <= a || a === i) && (i = l);
                                        }
                                        caret(c, i);
                                    }
                                }
                            }
                        }, 0);
                    },
                    cutEvent: function cutEvent(e) {
                        N(this);
                        var t = caret(this), a = e.originalEvent || e, n = M.clipboardData || a.clipboardData, i = h ? getBuffer().slice(t.end, t.begin) : getBuffer().slice(t.begin, t.end);
                        n.setData("text", h ? i.reverse().join("") : i.join("")), S.execCommand && S.execCommand("copy"), 
                        handleRemove(0, Inputmask.keyCode.DELETE, t), writeBuffer(this, getBuffer(), getMaskSet().p, e, g !== getBuffer().join(""));
                    },
                    blurEvent: function blurEvent(e) {
                        var t = N(this);
                        if (this.inputmask) {
                            HandleNativePlaceholder(this, s);
                            var a = this.inputmask._valueGet(), n = getBuffer().slice();
                            "" === a && p === G || (V.clearMaskOnLostFocus && (-1 === getLastValidPosition() && a === getBufferTemplate().join("") ? n = [] : clearOptionalTail(n)), 
                            !1 === isComplete(n) && (setTimeout(function() {
                                t.trigger("incomplete");
                            }, 0), V.clearIncomplete && (resetMaskSet(), n = V.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                            writeBuffer(this, n, G, e)), g !== getBuffer().join("") && (g = n.join(""), t.trigger("change"));
                        }
                    },
                    mouseenterEvent: function mouseenterEvent(e) {
                        n = !0, S.activeElement !== this && V.showMaskOnHover && HandleNativePlaceholder(this, (h ? getBuffer().slice().reverse() : getBuffer()).join(""));
                    },
                    submitEvent: function submitEvent(e) {
                        g !== getBuffer().join("") && i.trigger("change"), V.clearMaskOnLostFocus && -1 === getLastValidPosition() && l.inputmask._valueGet && l.inputmask._valueGet() === getBufferTemplate().join("") && l.inputmask._valueSet(""), 
                        V.clearIncomplete && !1 === isComplete(getBuffer()) && l.inputmask._valueSet(""), 
                        V.removeMaskOnSubmit && (l.inputmask._valueSet(l.inputmask.unmaskedvalue(), !0), 
                        setTimeout(function() {
                            writeBuffer(l, getBuffer());
                        }, 0));
                    },
                    resetEvent: function resetEvent(e) {
                        l.inputmask.refreshValue = !0, setTimeout(function() {
                            i.trigger("setvalue");
                        }, 0);
                    }
                };
                function checkVal(i, e, s, t, a) {
                    var r = this || i.inputmask, o = t.slice(), l = "", u = -1, c = G;
                    if (resetMaskSet(), s || !0 === V.autoUnmask) u = seekNext(u); else {
                        var n = getBufferTemplate().slice(0, seekNext(-1)).join(""), f = o.join("").match(new RegExp("^" + Inputmask.escapeRegex(n), "g"));
                        f && 0 < f.length && (o.splice(0, f.length * n.length), u = seekNext(u));
                    }
                    -1 === u ? (getMaskSet().p = seekNext(u), u = 0) : getMaskSet().p = u, r.caretPos = {
                        begin: u
                    }, N.each(o, function(e, t) {
                        if (t !== G) if (getMaskSet().validPositions[e] === G && o[e] === getPlaceholder(e) && isMask(e, !0) && !1 === isValid(e, o[e], !0, G, G, !0)) getMaskSet().p++; else {
                            var a = new N.Event("_checkval");
                            a.which = t.charCodeAt(0), l += t;
                            var n = getLastValidPosition(G, !0);
                            !function isTemplateMatch(e, t) {
                                return -1 !== getMaskTemplate(!0, 0, !1).slice(e, seekNext(e)).join("").replace(/'/g, "").indexOf(t) && !isMask(e) && (getTest(e).match.nativeDef === t.charAt(0) || null === getTest(e).match.fn && getTest(e).match.nativeDef === "'" + t.charAt(0) || " " === getTest(e).match.nativeDef && (getTest(e + 1).match.nativeDef === t.charAt(0) || null === getTest(e + 1).match.fn && getTest(e + 1).match.nativeDef === "'" + t.charAt(0)));
                            }(u, l) ? (c = v.keypressEvent.call(i, a, !0, !1, s, r.caretPos.begin)) && (u = r.caretPos.begin + 1, 
                            l = "") : c = v.keypressEvent.call(i, a, !0, !1, s, n + 1), c && (writeBuffer(G, getBuffer(), c.forwardPosition, a, !1), 
                            r.caretPos = {
                                begin: c.forwardPosition,
                                end: c.forwardPosition
                            });
                        }
                    }), e && writeBuffer(i, getBuffer(), c ? c.forwardPosition : G, a || new N.Event("checkval"), a && "input" === a.type);
                }
                function unmaskedvalue(e) {
                    if (e) {
                        if (e.inputmask === G) return e.value;
                        e.inputmask && e.inputmask.refreshValue && v.setValueEvent.call(e);
                    }
                    var t = [], a = getMaskSet().validPositions;
                    for (var n in a) a[n].match && null != a[n].match.fn && t.push(a[n].input);
                    var i = 0 === t.length ? "" : (h ? t.reverse() : t).join("");
                    if (N.isFunction(V.onUnMask)) {
                        var s = (h ? getBuffer().slice().reverse() : getBuffer()).join("");
                        i = V.onUnMask.call(u, s, i, V);
                    }
                    return i;
                }
                function caret(e, t, a, n) {
                    function translatePosition(e) {
                        return !h || "number" != typeof e || V.greedy && "" === V.placeholder || !l || (e = l.inputmask._valueGet().length - e), 
                        e;
                    }
                    var i;
                    if (t === G) return "selectionStart" in e ? (t = e.selectionStart, a = e.selectionEnd) : M.getSelection ? (i = M.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && i.commonAncestorContainer !== e || (t = i.startOffset, 
                    a = i.endOffset) : S.selection && S.selection.createRange && (i = S.selection.createRange(), 
                    t = 0 - i.duplicate().moveStart("character", -e.inputmask._valueGet().length), a = t + i.text.length), 
                    {
                        begin: n ? t : translatePosition(t),
                        end: n ? a : translatePosition(a)
                    };
                    if (N.isArray(t) && (a = h ? t[0] : t[1], t = h ? t[1] : t[0]), t.begin !== G && (a = h ? t.begin : t.end, 
                    t = h ? t.end : t.begin), "number" == typeof t) {
                        t = n ? t : translatePosition(t), a = "number" == typeof (a = n ? a : translatePosition(a)) ? a : t;
                        var s = parseInt(((e.ownerDocument.defaultView || M).getComputedStyle ? (e.ownerDocument.defaultView || M).getComputedStyle(e, null) : e.currentStyle).fontSize) * a;
                        if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: a
                        }, e === S.activeElement) {
                            if ("selectionStart" in e) e.selectionStart = t, e.selectionEnd = a; else if (M.getSelection) {
                                if (i = S.createRange(), e.firstChild === G || null === e.firstChild) {
                                    var r = S.createTextNode("");
                                    e.appendChild(r);
                                }
                                i.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                i.setEnd(e.firstChild, a < e.inputmask._valueGet().length ? a : e.inputmask._valueGet().length), 
                                i.collapse(!0);
                                var o = M.getSelection();
                                o.removeAllRanges(), o.addRange(i);
                            } else e.createTextRange && ((i = e.createTextRange()).collapse(!0), i.moveEnd("character", a), 
                            i.moveStart("character", t), i.select());
                            renderColorMask(e, {
                                begin: t,
                                end: a
                            });
                        }
                    }
                }
                function determineLastRequiredPosition(e) {
                    var t, a, n = getMaskTemplate(!0, getLastValidPosition(), !0, !0), i = n.length, s = getLastValidPosition(), r = {}, o = getMaskSet().validPositions[s], l = o !== G ? o.locator.slice() : G;
                    for (t = s + 1; t < n.length; t++) a = getTestTemplate(t, l, t - 1), l = a.locator.slice(), 
                    r[t] = N.extend(!0, {}, a);
                    var u = o && o.alternation !== G ? o.locator[o.alternation] : G;
                    for (t = i - 1; s < t && ((a = r[t]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || u && (u !== r[t].locator[o.alternation] && null != a.match.fn || null === a.match.fn && a.locator[o.alternation] && checkAlternationMatch(a.locator[o.alternation].toString().split(","), u.toString().split(",")) && "" !== getTests(t)[0].def)) && n[t] === getPlaceholder(t, a.match); t--) i--;
                    return e ? {
                        l: i,
                        def: r[i] ? r[i].match : G
                    } : i;
                }
                function clearOptionalTail(e) {
                    for (var t, a = getMaskTemplate(!(e.length = 0), 0, !0, G, !0); (t = a.shift()) !== G; ) e.push(t);
                    return e;
                }
                function isComplete(e) {
                    if (N.isFunction(V.isComplete)) return V.isComplete(e, V);
                    if ("*" === V.repeat) return G;
                    var t = !1, a = determineLastRequiredPosition(!0), n = seekPrevious(a.l);
                    if (a.def === G || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
                        t = !0;
                        for (var i = 0; i <= n; i++) {
                            var s = getTestTemplate(i).match;
                            if (null !== s.fn && getMaskSet().validPositions[i] === G && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && e[i] !== getPlaceholder(i, s)) {
                                t = !1;
                                break;
                            }
                        }
                    }
                    return t;
                }
                function handleRemove(e, t, a, n, i) {
                    if ((V.numericInput || h) && (t === Inputmask.keyCode.BACKSPACE ? t = Inputmask.keyCode.DELETE : t === Inputmask.keyCode.DELETE && (t = Inputmask.keyCode.BACKSPACE), 
                    h)) {
                        var s = a.end;
                        a.end = a.begin, a.begin = s;
                    }
                    if (t === Inputmask.keyCode.BACKSPACE && a.end - a.begin < 1 ? (a.begin = seekPrevious(a.begin), 
                    getMaskSet().validPositions[a.begin] !== G && getMaskSet().validPositions[a.begin].input === V.groupSeparator && a.begin--) : t === Inputmask.keyCode.DELETE && a.begin === a.end && (a.end = isMask(a.end, !0) && getMaskSet().validPositions[a.end] && getMaskSet().validPositions[a.end].input !== V.radixPoint ? a.end + 1 : seekNext(a.end) + 1, 
                    getMaskSet().validPositions[a.begin] !== G && getMaskSet().validPositions[a.begin].input === V.groupSeparator && a.end++), 
                    revalidateMask(a), !0 !== n && !1 !== V.keepStatic || null !== V.regex) {
                        var r = alternate(!0);
                        if (r) {
                            var o = r.caret !== G ? r.caret : r.pos ? seekNext(r.pos.begin ? r.pos.begin : r.pos) : getLastValidPosition(-1, !0);
                            (t !== Inputmask.keyCode.DELETE || a.begin > o) && a.begin;
                        }
                    }
                    var l = getLastValidPosition(a.begin, !0);
                    if (l < a.begin || -1 === a.begin) getMaskSet().p = seekNext(l); else if (!0 !== n && (getMaskSet().p = a.begin, 
                    !0 !== i)) for (;getMaskSet().p < l && getMaskSet().validPositions[getMaskSet().p] === G; ) getMaskSet().p++;
                }
                function initializeColorMask(u) {
                    var c = (u.ownerDocument.defaultView || M).getComputedStyle(u, null), e = S.createElement("div");
                    e.style.width = c.width, e.style.textAlign = c.textAlign, p = S.createElement("div"), 
                    (u.inputmask.colorMask = p).className = "im-colormask", u.parentNode.insertBefore(p, u), 
                    u.parentNode.removeChild(u), p.appendChild(u), p.appendChild(e), u.style.left = e.offsetLeft + "px", 
                    N(p).on("mouseleave", function(e) {
                        return v.mouseleaveEvent.call(u, [ e ]);
                    }), N(p).on("mouseenter", function(e) {
                        return v.mouseenterEvent.call(u, [ e ]);
                    }), N(p).on("click", function(e) {
                        return caret(u, function findCaretPos(e) {
                            var t, a = S.createElement("span");
                            for (var n in c) isNaN(n) && -1 !== n.indexOf("font") && (a.style[n] = c[n]);
                            a.style.textTransform = c.textTransform, a.style.letterSpacing = c.letterSpacing, 
                            a.style.position = "absolute", a.style.height = "auto", a.style.width = "auto", 
                            a.style.visibility = "hidden", a.style.whiteSpace = "nowrap", S.body.appendChild(a);
                            var i, s = u.inputmask._valueGet(), r = 0;
                            for (t = 0, i = s.length; t <= i; t++) {
                                if (a.innerHTML += s.charAt(t) || "_", a.offsetWidth >= e) {
                                    var o = e - r, l = a.offsetWidth - e;
                                    a.innerHTML = s.charAt(t), o -= a.offsetWidth / 3, t = o < l ? t - 1 : t;
                                    break;
                                }
                                r = a.offsetWidth;
                            }
                            return S.body.removeChild(a), t;
                        }(e.clientX)), v.clickEvent.call(u, [ e ]);
                    });
                }
                function renderColorMask(e, t, a) {
                    var n, i, s, r = [], o = !1, l = 0;
                    function setEntry(e) {
                        if (e === G && (e = ""), o || null !== n.fn && i.input !== G) if (o && (null !== n.fn && i.input !== G || "" === n.def)) {
                            o = !1;
                            var t = r.length;
                            r[t - 1] = r[t - 1] + "</span>", r.push(e);
                        } else r.push(e); else o = !0, r.push("<span class='im-static'>" + e);
                    }
                    if (p !== G) {
                        var u = getBuffer();
                        if (t === G ? t = caret(e) : t.begin === G && (t = {
                            begin: t,
                            end: t
                        }), !0 !== a) {
                            for (var c = getLastValidPosition(); getMaskSet().validPositions[l] ? (i = getMaskSet().validPositions[l], 
                            n = i.match, s = i.locator.slice(), setEntry(u[l])) : (i = getTestTemplate(l, s, l - 1), 
                            n = i.match, s = i.locator.slice(), !1 === V.jitMasking || l < c || "number" == typeof V.jitMasking && isFinite(V.jitMasking) && V.jitMasking > l ? setEntry(getPlaceholder(l, n)) : o = !1), 
                            l++, (m === G || l < m) && (null !== n.fn || "" !== n.def) || l < c || o; ) ;
                            o && setEntry(), function setCaret() {
                                S.activeElement === e && (r.splice(t.begin, 0, t.begin === t.end || t.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), 
                                r.splice(t.end + 1, 0, "</mark>"));
                            }();
                        }
                        var f = p.getElementsByTagName("div")[0];
                        f.innerHTML = r.join(""), e.inputmask.positionColorMask(e, f);
                    }
                }
                if (Inputmask.prototype.positionColorMask = function(e, t) {
                    e.style.left = t.offsetLeft + "px";
                }, e !== G) switch (e.action) {
                  case "isComplete":
                    return l = e.el, isComplete(getBuffer());

                  case "unmaskedvalue":
                    return l !== G && e.value === G || (a = e.value, a = (N.isFunction(V.onBeforeMask) && V.onBeforeMask.call(u, a, V) || a).split(""), 
                    checkVal.call(this, G, !1, !1, a), N.isFunction(V.onBeforeWrite) && V.onBeforeWrite.call(u, G, getBuffer(), 0, V)), 
                    unmaskedvalue(l);

                  case "mask":
                    !function mask(e) {
                        function isElementTypeSupported(e, s) {
                            function patchValueProperty(e) {
                                var t, a, n;
                                function patchValhook(e) {
                                    if (N.valHooks && (N.valHooks[e] === G || !0 !== N.valHooks[e].inputmaskpatch)) {
                                        var a = N.valHooks[e] && N.valHooks[e].get ? N.valHooks[e].get : function(e) {
                                            return e.value;
                                        }, i = N.valHooks[e] && N.valHooks[e].set ? N.valHooks[e].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        N.valHooks[e] = {
                                            get: function get(e) {
                                                if (e.inputmask) {
                                                    if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                    var t = a(e);
                                                    return -1 !== getLastValidPosition(G, G, e.inputmask.maskset.validPositions) || !0 !== s.nullable ? t : "";
                                                }
                                                return a(e);
                                            },
                                            set: function set(e, t) {
                                                var a, n = N(e);
                                                return a = i(e, t), e.inputmask && n.trigger("setvalue", [ t ]), a;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }
                                function getter() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== s.nullable ? S.activeElement === this && s.clearMaskOnLostFocus ? (h ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : t.call(this) : "" : t.call(this);
                                }
                                function setter(e) {
                                    a.call(this, e), this.inputmask && N(this).trigger("setvalue", [ e ]);
                                }
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== s.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === x("test".__proto__) ? function(e) {
                                                return e.__proto__;
                                            } : function(e) {
                                                return e.constructor.prototype;
                                            });
                                            var i = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : G;
                                            i && i.get && i.set ? (t = i.get, a = i.set, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (t = function valueGet() {
                                                return this.textContent;
                                            }, a = function valueSet(e) {
                                                this.textContent = e;
                                            }, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            }));
                                        } else S.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"), 
                                        a = e.__lookupSetter__("value"), e.__defineGetter__("value", getter), e.__defineSetter__("value", setter));
                                        e.inputmask.__valueGet = t, e.inputmask.__valueSet = a;
                                    }
                                    e.inputmask._valueGet = function(e) {
                                        return h && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el);
                                    }, e.inputmask._valueSet = function(e, t) {
                                        a.call(this.el, null === e || e === G ? "" : !0 !== t && h ? e.split("").reverse().join("") : e);
                                    }, t === G && (t = function valueGet() {
                                        return this.value;
                                    }, a = function valueSet(e) {
                                        this.value = e;
                                    }, patchValhook(e.type), n = e, o.on(n, "mouseenter", function(e) {
                                        var t = N(this), a = this.inputmask._valueGet();
                                        a !== getBuffer().join("") && t.trigger("setvalue");
                                    }));
                                }
                            }
                            var t = e.getAttribute("type"), a = "INPUT" === e.tagName && -1 !== N.inArray(t, s.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!a) if ("INPUT" === e.tagName) {
                                var n = S.createElement("input");
                                n.setAttribute("type", t), a = "text" === n.type, n = null;
                            } else a = "partial";
                            return !1 !== a ? patchValueProperty(e) : e.inputmask = G, a;
                        }
                        o.off(e);
                        var t = isElementTypeSupported(e, V);
                        if (!1 !== t && (i = N(l = e), s = l.placeholder, -1 === (m = l !== G ? l.maxLength : G) && (m = G), 
                        !0 === V.colorMask && initializeColorMask(l), P && ("inputmode" in l && (l.inputmode = V.inputmode, 
                        l.setAttribute("inputmode", V.inputmode)), !0 === V.disablePredictiveText && ("autocorrect" in l ? l.autocorrect = !1 : (!0 !== V.colorMask && initializeColorMask(l), 
                        l.type = "password"))), !0 === t && (l.setAttribute("im-insert", V.insertMode), 
                        o.on(l, "submit", v.submitEvent), o.on(l, "reset", v.resetEvent), o.on(l, "blur", v.blurEvent), 
                        o.on(l, "focus", v.focusEvent), !0 !== V.colorMask && (o.on(l, "click", v.clickEvent), 
                        o.on(l, "mouseleave", v.mouseleaveEvent), o.on(l, "mouseenter", v.mouseenterEvent)), 
                        o.on(l, "paste", v.pasteEvent), o.on(l, "cut", v.cutEvent), o.on(l, "complete", V.oncomplete), 
                        o.on(l, "incomplete", V.onincomplete), o.on(l, "cleared", V.oncleared), P || !0 === V.inputEventOnly ? l.removeAttribute("maxLength") : (o.on(l, "keydown", v.keydownEvent), 
                        o.on(l, "keypress", v.keypressEvent)), o.on(l, "input", v.inputFallBackEvent), o.on(l, "beforeinput", v.beforeInputEvent)), 
                        o.on(l, "setvalue", v.setValueEvent), g = getBufferTemplate().join(""), "" !== l.inputmask._valueGet(!0) || !1 === V.clearMaskOnLostFocus || S.activeElement === l)) {
                            var a = N.isFunction(V.onBeforeMask) && V.onBeforeMask.call(u, l.inputmask._valueGet(!0), V) || l.inputmask._valueGet(!0);
                            "" !== a && checkVal(l, !0, !1, a.split(""));
                            var n = getBuffer().slice();
                            g = n.join(""), !1 === isComplete(n) && V.clearIncomplete && resetMaskSet(), V.clearMaskOnLostFocus && S.activeElement !== l && (-1 === getLastValidPosition() ? n = [] : clearOptionalTail(n)), 
                            (!1 === V.clearMaskOnLostFocus || V.showMaskOnFocus && S.activeElement === l || "" !== l.inputmask._valueGet(!0)) && writeBuffer(l, n), 
                            S.activeElement === l && caret(l, seekNext(getLastValidPosition()));
                        }
                    }(l);
                    break;

                  case "format":
                    return a = (N.isFunction(V.onBeforeMask) && V.onBeforeMask.call(u, e.value, V) || e.value).split(""), 
                    checkVal.call(this, G, !0, !1, a), e.metadata ? {
                        value: h ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, t, V)
                    } : h ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                  case "isValid":
                    e.value ? (a = e.value.split(""), checkVal.call(this, G, !0, !0, a)) : e.value = getBuffer().join("");
                    for (var f = getBuffer(), k = determineLastRequiredPosition(), b = f.length - 1; k < b && !isMask(b); b--) ;
                    return f.splice(k, b + 1 - k), isComplete(f) && e.value === getBuffer().join("");

                  case "getemptymask":
                    return getBufferTemplate().join("");

                  case "remove":
                    return l && l.inputmask && (N.data(l, "_inputmask_opts", null), i = N(l), l.inputmask._valueSet(V.autoUnmask ? unmaskedvalue(l) : l.inputmask._valueGet(!0)), 
                    o.off(l), l.inputmask.colorMask && ((p = l.inputmask.colorMask).removeChild(l), 
                    p.parentNode.insertBefore(l, p), p.parentNode.removeChild(p)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(l), "value") && l.inputmask.__valueGet && Object.defineProperty(l, "value", {
                        get: l.inputmask.__valueGet,
                        set: l.inputmask.__valueSet,
                        configurable: !0
                    }) : S.__lookupGetter__ && l.__lookupGetter__("value") && l.inputmask.__valueGet && (l.__defineGetter__("value", l.inputmask.__valueGet), 
                    l.__defineSetter__("value", l.inputmask.__valueSet)), l.inputmask = G), l;

                  case "getmetadata":
                    if (N.isArray(t.metadata)) {
                        var y = getMaskTemplate(!0, 0, !1).join("");
                        return N.each(t.metadata, function(e, t) {
                            if (t.mask === y) return y = t, !1;
                        }), y;
                    }
                    return t.metadata;
                }
            }
            return Inputmask.prototype = {
                dataAttribute: "data-inputmask",
                defaults: {
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: N.noop,
                    onincomplete: N.noop,
                    oncleared: N.noop,
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: N.noop,
                    onBeforeMask: null,
                    onBeforePaste: function onBeforePaste(e, t) {
                        return N.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: N.noop,
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "password", "search" ],
                    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: G,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "verbatim",
                    colorMask: !1,
                    disablePredictiveText: !1,
                    importDataAttributes: !0,
                    shiftPositions: !0
                },
                definitions: {
                    9: {
                        validator: "[0-9\uff11-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                },
                aliases: {},
                masksCache: {},
                mask: function mask(e) {
                    var i = this;
                    return "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), 
                    e = e.nodeName ? [ e ] : e, N.each(e, function(e, t) {
                        var a = N.extend(!0, {}, i.opts);
                        if (function importAttributeOptions(a, e, n, i) {
                            if (!0 === e.importDataAttributes) {
                                var t, s, r, o, l = function importOption(e, t) {
                                    null !== (t = t !== G ? t : a.getAttribute(i + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = M[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), 
                                    n[e] = t);
                                }, u = a.getAttribute(i);
                                if (u && "" !== u && (u = u.replace(/'/g, '"'), s = JSON.parse("{" + u + "}")), 
                                s) for (o in r = G, s) if ("alias" === o.toLowerCase()) {
                                    r = s[o];
                                    break;
                                }
                                for (t in l("alias", r), n.alias && resolveAlias(n.alias, n, e), e) {
                                    if (s) for (o in r = G, s) if (o.toLowerCase() === t.toLowerCase()) {
                                        r = s[o];
                                        break;
                                    }
                                    l(t, r);
                                }
                            }
                            return N.extend(!0, e, n), ("rtl" === a.dir || e.rightAlign) && (a.style.textAlign = "right"), 
                            ("rtl" === a.dir || e.numericInput) && (a.dir = "ltr", a.removeAttribute("dir"), 
                            e.isRTL = !0), Object.keys(n).length;
                        }(t, a, N.extend(!0, {}, i.userOptions), i.dataAttribute)) {
                            var n = generateMaskSet(a, i.noMasksCache);
                            n !== G && (t.inputmask !== G && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), 
                            t.inputmask = new Inputmask(G, G, !0), t.inputmask.opts = a, t.inputmask.noMasksCache = i.noMasksCache, 
                            t.inputmask.userOptions = N.extend(!0, {}, i.userOptions), t.inputmask.isRTL = a.isRTL || a.numericInput, 
                            (t.inputmask.el = t).inputmask.maskset = n, N.data(t, "_inputmask_opts", a), maskScope.call(t.inputmask, {
                                action: "mask"
                            }));
                        }
                    }), e && e[0] && e[0].inputmask || this;
                },
                option: function option(e, t) {
                    return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : x(e)) ? (N.extend(this.userOptions, e), 
                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                },
                unmaskedvalue: function unmaskedvalue(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "unmaskedvalue",
                        value: e
                    });
                },
                remove: function remove() {
                    return maskScope.call(this, {
                        action: "remove"
                    });
                },
                getemptymask: function getemptymask() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getemptymask"
                    });
                },
                hasMaskedValue: function hasMaskedValue() {
                    return !this.opts.autoUnmask;
                },
                isComplete: function isComplete() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isComplete"
                    });
                },
                getmetadata: function getmetadata() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getmetadata"
                    });
                },
                isValid: function isValid(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isValid",
                        value: e
                    });
                },
                format: function format(e, t) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "format",
                        value: e,
                        metadata: t
                    });
                },
                setValue: function setValue(e) {
                    this.el && N(this.el).trigger("setvalue", [ e ]);
                },
                analyseMask: function analyseMask(e, s, r) {
                    var t, a, n, i, o, l, u = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, c = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, f = !1, p = new MaskToken(), k = [], m = [];
                    function MaskToken(e, t, a, n) {
                        this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                        this.isOptional = t || !1, this.isQuantifier = a || !1, this.isAlternator = n || !1, 
                        this.quantifier = {
                            min: 1,
                            max: 1
                        };
                    }
                    function insertTestDefinition(a, e, n) {
                        n = n !== G ? n : a.matches.length;
                        var i = a.matches[n - 1];
                        if (s) 0 === e.indexOf("[") || f && /\\d|\\s|\\w]/i.test(e) || "." === e ? a.matches.splice(n++, 0, {
                            fn: new RegExp(e, r.casing ? "i" : ""),
                            optionality: !1,
                            newBlockMarker: i === G ? "master" : i.def !== e,
                            casing: null,
                            def: e,
                            placeholder: G,
                            nativeDef: e
                        }) : (f && (e = e[e.length - 1]), N.each(e.split(""), function(e, t) {
                            i = a.matches[n - 1], a.matches.splice(n++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: i === G ? "master" : i.def !== t && null !== i.fn,
                                casing: null,
                                def: r.staticDefinitionSymbol || t,
                                placeholder: r.staticDefinitionSymbol !== G ? t : G,
                                nativeDef: (f ? "'" : "") + t
                            });
                        })), f = !1; else {
                            var t = (r.definitions ? r.definitions[e] : G) || Inputmask.prototype.definitions[e];
                            t && !f ? a.matches.splice(n++, 0, {
                                fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, r.casing ? "i" : "") : new function() {
                                    this.test = t.validator;
                                }() : new RegExp("."),
                                optionality: !1,
                                newBlockMarker: i === G ? "master" : i.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            }) : (a.matches.splice(n++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: i === G ? "master" : i.def !== e && null !== i.fn,
                                casing: null,
                                def: r.staticDefinitionSymbol || e,
                                placeholder: r.staticDefinitionSymbol !== G ? e : G,
                                nativeDef: (f ? "'" : "") + e
                            }), f = !1);
                        }
                    }
                    function defaultCase() {
                        if (0 < k.length) {
                            if (insertTestDefinition(i = k[k.length - 1], a), i.isAlternator) {
                                o = k.pop();
                                for (var e = 0; e < o.matches.length; e++) o.matches[e].isGroup && (o.matches[e].isGroup = !1);
                                0 < k.length ? (i = k[k.length - 1]).matches.push(o) : p.matches.push(o);
                            }
                        } else insertTestDefinition(p, a);
                    }
                    function groupify(e) {
                        var t = new MaskToken(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    for (s && (r.optionalmarker[0] = G, r.optionalmarker[1] = G); t = s ? c.exec(e) : u.exec(e); ) {
                        if (a = t[0], s) switch (a.charAt(0)) {
                          case "?":
                            a = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            a = "{" + a + "}";
                        }
                        if (f) defaultCase(); else switch (a.charAt(0)) {
                          case "(?=":
                          case "(?!":
                          case "(?<=":
                          case "(?<!":
                            break;

                          case r.escapeChar:
                            f = !0, s && defaultCase();
                            break;

                          case r.optionalmarker[1]:
                          case r.groupmarker[1]:
                            if ((n = k.pop()).openGroup = !1, n !== G) if (0 < k.length) {
                                if ((i = k[k.length - 1]).matches.push(n), i.isAlternator) {
                                    o = k.pop();
                                    for (var g = 0; g < o.matches.length; g++) o.matches[g].isGroup = !1, o.matches[g].alternatorGroup = !1;
                                    0 < k.length ? (i = k[k.length - 1]).matches.push(o) : p.matches.push(o);
                                }
                            } else p.matches.push(n); else defaultCase();
                            break;

                          case r.optionalmarker[0]:
                            k.push(new MaskToken(!1, !0));
                            break;

                          case r.groupmarker[0]:
                            k.push(new MaskToken(!0));
                            break;

                          case r.quantifiermarker[0]:
                            var h = new MaskToken(!1, !1, !0), d = (a = a.replace(/[{}]/g, "")).split("|"), v = d[0].split(","), b = isNaN(v[0]) ? v[0] : parseInt(v[0]), y = 1 === v.length ? b : isNaN(v[1]) ? v[1] : parseInt(v[1]);
                            "*" !== b && "+" !== b || (b = "*" === y ? 0 : 1), h.quantifier = {
                                min: b,
                                max: y,
                                jit: d[1]
                            };
                            var M = 0 < k.length ? k[k.length - 1].matches : p.matches;
                            if ((t = M.pop()).isAlternator) {
                                M.push(t), M = t.matches;
                                var S = new MaskToken(!0), _ = M.pop();
                                M.push(S), M = S.matches, t = _;
                            }
                            t.isGroup || (t = groupify([ t ])), M.push(t), M.push(h);
                            break;

                          case r.alternatormarker:
                            var P = function groupQuantifier(e) {
                                var t = e.pop();
                                return t.isQuantifier && (t = groupify([ e.pop(), t ])), t;
                            };
                            if (0 < k.length) {
                                var E = (i = k[k.length - 1]).matches[i.matches.length - 1];
                                l = i.openGroup && (E.matches === G || !1 === E.isGroup && !1 === E.isAlternator) ? k.pop() : P(i.matches);
                            } else l = P(p.matches);
                            if (l.isAlternator) k.push(l); else if (l.alternatorGroup ? (o = k.pop(), l.alternatorGroup = !1) : o = new MaskToken(!1, !1, !1, !0), 
                            o.matches.push(l), k.push(o), l.openGroup) {
                                var T = new MaskToken(!(l.openGroup = !1));
                                T.alternatorGroup = !0, k.push(T);
                            }
                            break;

                          default:
                            defaultCase();
                        }
                    }
                    for (;0 < k.length; ) n = k.pop(), p.matches.push(n);
                    return 0 < p.matches.length && (function verifyGroupMarker(n) {
                        n && n.matches && N.each(n.matches, function(e, t) {
                            var a = n.matches[e + 1];
                            (a === G || a.matches === G || !1 === a.isQuantifier) && t && t.isGroup && (t.isGroup = !1, 
                            s || (insertTestDefinition(t, r.groupmarker[0], 0), !0 !== t.openGroup && insertTestDefinition(t, r.groupmarker[1]))), 
                            verifyGroupMarker(t);
                        });
                    }(p), m.push(p)), (r.numericInput || r.isRTL) && function reverseTokens(e) {
                        for (var t in e.matches = e.matches.reverse(), e.matches) if (e.matches.hasOwnProperty(t)) {
                            var a = parseInt(t);
                            if (e.matches[t].isQuantifier && e.matches[a + 1] && e.matches[a + 1].isGroup) {
                                var n = e.matches[t];
                                e.matches.splice(t, 1), e.matches.splice(a + 1, 0, n);
                            }
                            e.matches[t].matches !== G ? e.matches[t] = reverseTokens(e.matches[t]) : e.matches[t] = ((i = e.matches[t]) === r.optionalmarker[0] ? i = r.optionalmarker[1] : i === r.optionalmarker[1] ? i = r.optionalmarker[0] : i === r.groupmarker[0] ? i = r.groupmarker[1] : i === r.groupmarker[1] && (i = r.groupmarker[0]), 
                            i);
                        }
                        var i;
                        return e;
                    }(m[0]), m;
                }
            }, Inputmask.extendDefaults = function(e) {
                N.extend(!0, Inputmask.prototype.defaults, e);
            }, Inputmask.extendDefinitions = function(e) {
                N.extend(!0, Inputmask.prototype.definitions, e);
            }, Inputmask.extendAliases = function(e) {
                N.extend(!0, Inputmask.prototype.aliases, e);
            }, Inputmask.format = function(e, t, a) {
                return Inputmask(t).format(e, a);
            }, Inputmask.unmask = function(e, t) {
                return Inputmask(t).unmaskedvalue(e);
            }, Inputmask.isValid = function(e, t) {
                return Inputmask(t).isValid(e);
            }, Inputmask.remove = function(e) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                N.each(e, function(e, t) {
                    t.inputmask && t.inputmask.remove();
                });
            }, Inputmask.setValue = function(e, a) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                N.each(e, function(e, t) {
                    t.inputmask ? t.inputmask.setValue(a) : N(t).trigger("setvalue", [ a ]);
                });
            }, Inputmask.escapeRegex = function(e) {
                return e.replace(new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim"), "\\$1");
            }, Inputmask.keyCode = {
                BACKSPACE: 8,
                BACKSPACE_SAFARI: 127,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                X: 88,
                CONTROL: 17
            }, Inputmask.dependencyLib = N, M.Inputmask = Inputmask;
        }) ? n.apply(t, i) : n) || (e.exports = s);
    }, function(e, t, a) {
        "use strict";
        var n, i, s;
        "function" == typeof Symbol && Symbol.iterator;
        i = [ a(1) ], void 0 === (s = "function" == typeof (n = function(e) {
            return e;
        }) ? n.apply(t, i) : n) || (e.exports = s);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    } ]);
});
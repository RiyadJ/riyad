function initWebPixel() {
    (function(shopify) {
        "use strict";
        (() => {
            var n = (t, r) => () => (t && (r = t(t = 0)), r);
            var Zt = (t, r) => () => (r || t((r = {
                exports: {}
            }).exports, r), r.exports);
            var E = (t, r, o) => new Promise((e, i) => {
                var s = m => {
                        try {
                            l(o.next(m))
                        } catch (d) {
                            i(d)
                        }
                    },
                    u = m => {
                        try {
                            l(o.throw(m))
                        } catch (d) {
                            i(d)
                        }
                    },
                    l = m => m.done ? e(m.value) : Promise.resolve(m.value).then(s, u);
                l((o = o.apply(t, r)).next())
            });
            var Y, $ = n(() => {
                Y = "WebPixel::Render"
            });
            var H, J = n(() => {
                $();
                H = function(r) {
                    return shopify.extend(Y, r)
                }
            });
            var X = n(() => {});
            var Q = n(() => {
                J();
                X()
            });
            var Z = n(() => {
                Q()
            });

            function tt(t) {
                x = t
            }
            var x, b = n(() => {
                "use strict";
                x = {}
            });

            function rt(t) {
                D = t
            }
            var D, W = n(() => {
                "use strict"
            });

            function ot(t) {
                x.snaptr("init", t)
            }
            var et = n(() => {
                "use strict";
                b()
            });
            var it, nt, st, at, mt, ct, pt, C = n(() => {
                "use strict";
                it = "checkout_completed", nt = "checkout_started", st = "page_viewed", at = "payment_info_submitted", mt = "product_added_to_cart", ct = "product_viewed", pt = "search_submitted"
            });
            var ft, K, ut, xt, Et, _t, dt, Tt, T = n(() => {
                "use strict";
                ft = "ADD_BILLING", K = "ADD_CART", ut = "shopify-wpe", xt = "PAGE_VIEW", Et = "PURCHASE", _t = "SEARCH", dt = "START_CHECKOUT", Tt = "VIEW_CONTENT"
            });

            function lt(t) {
                return typeof t == "number"
            }
            var Ct = n(() => {
                "use strict"
            });

            function ht(t) {
                return t && typeof t == "object"
            }
            var gt = n(() => {
                "use strict"
            });

            function F(t) {
                return typeof t == "string"
            }
            var B = n(() => {
                "use strict"
            });

            function c(t) {
                return (ht(t) || F(t)) && lt(t.length) ? t.length : 0
            }
            var R = n(() => {
                "use strict";
                Ct();
                gt();
                B()
            });

            function h() {
                var t, r, o, e;
                return {
                    user_email: (r = (t = D) == null ? void 0 : t.customer) == null ? void 0 : r.email,
                    user_phone_number: (e = (o = D) == null ? void 0 : o.customer) == null ? void 0 : e.phone
                }
            }
            var k = n(() => {
                "use strict";
                W()
            });

            function It(t) {
                var o;
                let r = h();
                return t.email && c(t.email) && (r.user_email = t.email), t.phone && c(t.phone) ? r.user_phone_number = t.phone : ((o = t.shippingAddress) == null ? void 0 : o.phone) && c(t.shippingAddress.phone) && (r.user_phone_number = t.shippingAddress.phone), r
            }
            var At = n(() => {
                "use strict";
                R();
                k()
            });

            function Pt(t) {
                let r = [];
                for (let o = 0; o < t.length; o++) t[o] && r.push(String(t[o].variant_id));
                return r
            }
            var St = n(() => {
                "use strict"
            });

            function kt(t) {
                return t.map(r => ({
                    title: r.title,
                    quantity: r.quantity,
                    product_id: r.variant.product.id,
                    variant_id: r.variant.id,
                    sku: r.variant.sku,
                    variant_title: r.variant.title,
                    price: r.variant.price.amount
                }))
            }
            var Ot = n(() => {
                "use strict"
            });

            function I(t) {
                var i;
                let r = kt(t.lineItems),
                    o = Pt(r),
                    e = It(t);
                return e.item_ids = o, e.description = JSON.stringify(r), e.price = t.totalPrice.amount, e.currency = t.currencyCode, ((i = t.order) == null ? void 0 : i.id) && c(t.order.id) && (e.transaction_id = t.order.id), e
            }
            var V = n(() => {
                "use strict";
                R();
                At();
                St();
                Ot()
            });
            var Nt, yt, G = n(() => {
                "use strict";
                Nt = "_scid", yt = "https://tr.snapchat.com/scs/shopify"
            });

            function tr(t) {
                let r = -1,
                    o = "",
                    e = t && c(t);
                if (e)
                    for (;
                        (r += 1) < e;) {
                        let i = t.charCodeAt(r),
                            s = r + 1 < e ? t.charCodeAt(r + 1) : 0;
                        55296 <= i && i <= 56319 && 56320 <= s && s <= 57343 && (i = 65536 + ((i & 1023) << 10) + (s & 1023), r += 1), i <= 127 ? o += O(i) : i <= 2047 ? o += O(192 | i >>> 6 & 31, 128 | i & 63) : i <= 65535 ? o += O(224 | i >>> 12 & 15, 128 | i >>> 6 & 63, 128 | i & 63) : i <= 2097151 && (o += O(240 | i >>> 18 & 7, 128 | i >>> 12 & 63, 128 | i >>> 6 & 63, 128 | i & 63))
                    }
                return o
            }

            function a(t, r) {
                let o = (t & 65535) + (r & 65535);
                return (t >> 16) + (r >> 16) + (o >> 16) << 16 | o & 65535
            }

            function rr(t) {
                let r = "",
                    o = c(t);
                for (let e = 0; e < o; e += 1) {
                    let i = t.charCodeAt(e);
                    r += bt.charAt(i >>> 4 & 15) + bt.charAt(i & 15)
                }
                return r
            }

            function or(t) {
                let r = "",
                    o = c(t) * 32;
                for (let e = 0; e < o; e += 8) r += O(t[e >> 5] >>> 24 - e % 32 & 255);
                return r
            }

            function er(t) {
                let r = c(t) * 8,
                    o = Array(c(t) >> 2),
                    e = c(o),
                    i;
                for (i = 0; i < e; i += 1) o[i] = 0;
                for (i = 0; i < r; i += 8) o[i >> 5] |= (t.charCodeAt(i / 8) & 255) << 24 - i % 32;
                return o
            }

            function _(t, r) {
                return t >>> r | t << 32 - r
            }

            function Dt(t, r) {
                return t >>> r
            }

            function ir(t) {
                return _(t, 7) ^ _(t, 18) ^ Dt(t, 3)
            }

            function nr(t) {
                return _(t, 17) ^ _(t, 19) ^ Dt(t, 10)
            }

            function ar(t, r) {
                let o = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
                    e = new Array(64),
                    i, s, u, l, m, d, S, N, y, f, M, z;
                for (t[r >> 5] |= 128 << 24 - r % 32, t[(r + 64 >> 9 << 4) + 15] = r, y = 0; y < c(t); y += 16) {
                    for (i = o[0], s = o[1], u = o[2], l = o[3], m = o[4], d = o[5], S = o[6], N = o[7], f = 0; f < 64; f += 1) f < 16 ? e[f] = t[f + y] : e[f] = a(a(a(nr(e[f - 2]), e[f - 7]), ir(e[f - 15])), e[f - 16]), M = a(a(a(a(N, _(m, 6) ^ _(m, 11) ^ _(m, 25)), m & d ^ ~m & S), sr[f]), e[f]), z = a(_(i, 2) ^ _(i, 13) ^ _(i, 22), i & s ^ i & u ^ s & u), N = S, S = d, d = m, m = a(l, M), l = u, u = s, s = i, i = a(M, z);
                    o[0] = a(i, o[0]), o[1] = a(s, o[1]), o[2] = a(u, o[2]), o[3] = a(l, o[3]), o[4] = a(m, o[4]), o[5] = a(d, o[5]), o[6] = a(S, o[6]), o[7] = a(N, o[7])
                }
                return o
            }

            function U(t) {
                try {
                    return t = tr(F(t) ? t : ""), rr(or(ar(er(t), c(t) * 8)))
                } catch (r) {
                    return ""
                }
            }
            var O, bt, sr, Ft = n(() => {
                "use strict";
                R();
                B();
                O = String.fromCharCode, bt = "0123456789abcdef";
                sr = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]
            });

            function A(t, r) {
                return E(this, null, function*() {
                    let o = yield r.cookie.get(Nt), e = t.email !== null ? U(t.email) : "", i = t.phone !== null ? U(t.phone) : t.shippingAddress.phone !== null ? U(t.shippingAddress.phone) : "";
                    return {
                        hashedEmail: e,
                        hashedPhone: i,
                        cookie1: o
                    }
                })
            }
            var w = n(() => {
                "use strict";
                G();
                Ft()
            });

            function P(t, r) {
                let {
                    hashedEmail: o,
                    hashedPhone: e,
                    cookie1: i
                } = t, s = r.settings.pixelId;
                fetch(yt, {
                    method: "POST",
                    body: `pid=${s}&u_hem=${o}&u_hpn=${e}&u_c1=${i}`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            }
            var L = n(() => {
                "use strict";
                G()
            });

            function p(t, r = {}) {
                r.integration = ut, x.snaptr("track", t, r)
            }
            var g = n(() => {
                "use strict";
                T();
                b()
            });

            function Rt(t) {
                t.analytics.subscribe(at, r => E(this, null, function*() {
                    let o = I(r.data.checkout),
                        e = yield A(r.data.checkout, t.browser);
                    P(e, t), p(ft, o)
                }))
            }
            var Vt = n(() => {
                "use strict";
                C();
                T();
                V();
                w();
                L();
                g()
            });

            function Ut(t) {
                t.analytics.subscribe(it, r => E(this, null, function*() {
                    let o = I(r.data.checkout),
                        e = yield A(r.data.checkout, t.browser);
                    P(e, t), p(Et, o)
                }))
            }
            var wt = n(() => {
                "use strict";
                C();
                T();
                V();
                w();
                L();
                g()
            });

            function Lt(t) {
                t.analytics.subscribe(nt, r => E(this, null, function*() {
                    let o = I(r.data.checkout),
                        e = yield A(r.data.checkout, t.browser);
                    P(e, t), p(dt, o)
                }))
            }
            var vt = n(() => {
                "use strict";
                C();
                T();
                V();
                w();
                L();
                g()
            });

            function Mt(t) {
                t.analytics.subscribe(st, () => {
                    let r = h();
                    p(xt, r)
                })
            }
            var Ht = n(() => {
                "use strict";
                C();
                T();
                k();
                g()
            });

            function j(t) {
                let r = {};
                return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, (o, e, i) => (r[e] = i, i)), r
            }
            var Wt = n(() => {
                "use strict"
            });

            function Kt(t, r) {
                let o = "";
                try {
                    let e = new URL(t),
                        i = e.pathname.split("/");
                    if (i[i.length - 1] === "search") o = j(t).q;
                    else if (r) {
                        let s = new URL(r);
                        if (s.hostname === e.hostname) {
                            let u = s.pathname.split("/");
                            u[u.length - 1] === "search" && (o = j(s.href).q)
                        }
                    }
                } catch (e) {}
                return o
            }
            var Bt = n(() => {
                "use strict";
                Wt()
            });

            function v(t, r, o) {
                var s;
                let e = h();
                e.item_category = t.product.id, e.item_ids = [String(t.id)], e.description = (s = t.title) == null ? void 0 : s.trim(), e.price = t.price.amount, e.currency = t.price.currencyCode;
                let i = Kt(r, o);
                return i !== "" && (e.search_string = i), e
            }
            var q = n(() => {
                "use strict";
                k();
                Bt()
            });

            function Gt(t) {
                t.analytics.subscribe(mt, r => {
                    let o = r.data.cartLine;
                    if (o !== null) {
                        let e = v(o.merchandise, r.context.window.location.href, r.context.document.referrer);
                        p(K, e)
                    } else p(K)
                })
            }
            var jt = n(() => {
                "use strict";
                C();
                T();
                q();
                g()
            });

            function qt(t) {
                t.analytics.subscribe(ct, r => {
                    let o = v(r.data.productVariant, r.context.window.location.href, r.context.document.referrer);
                    p(Tt, o)
                })
            }
            var zt = n(() => {
                "use strict";
                C();
                T();
                q();
                g()
            });

            function Yt(t) {
                t.analytics.subscribe(pt, r => {
                    let o = h();
                    o.search_string = r.data.searchResult.query, p(_t, o)
                })
            }
            var $t = n(() => {
                "use strict";
                C();
                T();
                k();
                g()
            });

            function Jt(t) {
                ot(t.settings.pixelId), rt(t.init.data), Mt(t), Yt(t), qt(t), Gt(t), Rt(t), Lt(t), Ut(t)
            }
            var Xt = n(() => {
                "use strict";
                W();
                et();
                Vt();
                wt();
                vt();
                Ht();
                jt();
                zt();
                $t()
            });
            var mr = Zt(Qt => {
                Z();
                b();
                Xt();
                H(t => E(Qt, null, function*() {
                    x.api = t, x.document = t.init.context.document, x.navigator = t.init.context.navigator, location.shopifyContext = x, location.shopifyWindow = {
                        shopifyApi: t,
                        document: t.init.context.document,
                        location: t.init.context.document.location,
                        navigator: t.init.context.navigator
                    }, importScripts("https://sc-static.net/scevent.min.js"), location.shopifyWindow.shopifyReady && tt(location.shopifyWindow), yield x.shopifyReady, Jt(t)
                }))
            });
            mr();
        })();

    })(self.webPixelsManager.createShopifyExtend('3932358', 'app'));
}
importScripts('https://cdn.shopify.com/sac06c863w65c0ea9cp7faabe34m21d9c63em.js');
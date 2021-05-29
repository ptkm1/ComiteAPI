"use strict";
var app = function () {
    "use strict";
    function t() { }
    function e(t, e) { for (const n in e)
        t[n] = e[n]; return t; }
    function n(t) { return t(); }
    function o() { return Object.create(null); }
    function r(t) { t.forEach(n); }
    function s(t) { return "function" == typeof t; }
    function a(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t; }
    function c(e, ...n) { if (null == e)
        return t; const o = e.subscribe(...n); return o.unsubscribe ? () => o.unsubscribe() : o; }
    function i(t) { let e; return c(t, (t => e = t))(), e; }
    function u(t, e, n) { t.$$.on_destroy.push(c(e, n)); }
    function l(t, e, n, o) { if (t) {
        const r = d(t, e, n, o);
        return t[0](r);
    } }
    function d(t, n, o, r) { return t[1] && r ? e(o.ctx.slice(), t[1](r(n))) : o.ctx; }
    function f(t, e, n, o, r, s, a) { const c = function (t, e, n, o) { if (t[2] && o) {
        const r = t[2](o(n));
        if (void 0 === e.dirty)
            return r;
        if ("object" == typeof r) {
            const t = [], n = Math.max(e.dirty.length, r.length);
            for (let o = 0; o < n; o += 1)
                t[o] = e.dirty[o] | r[o];
            return t;
        }
        return e.dirty | r;
    } return e.dirty; }(e, o, r, s); if (c) {
        const r = d(e, n, o, a);
        t.p(r, c);
    } }
    function p(t) { const e = {}; for (const n in t)
        "$" !== n[0] && (e[n] = t[n]); return e; }
    function $(t, e) { const n = {}; e = new Set(e); for (const o in t)
        e.has(o) || "$" === o[0] || (n[o] = t[o]); return n; }
    function m(t, e) { t.appendChild(e); }
    function h(t, e, n) { t.insertBefore(e, n || null); }
    function g(t) { t.parentNode.removeChild(t); }
    function v(t) { return document.createElement(t); }
    function y(t) { return document.createTextNode(t); }
    function b() { return y(" "); }
    function x() { return y(""); }
    function w(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n); }
    function E(t, e) { const n = Object.getOwnPropertyDescriptors(t.__proto__); for (const o in e)
        null == e[o] ? t.removeAttribute(o) : "style" === o ? t.style.cssText = e[o] : "__value" === o ? t.value = t[o] = e[o] : n[o] && n[o].set ? t[o] = e[o] : w(t, o, e[o]); }
    function R(t, e) { e = "" + e, t.wholeText !== e && (t.data = e); }
    function _(t, e, n, o) { t.style.setProperty(e, n, o ? "important" : ""); }
    let A;
    function P(t) { A = t; }
    function q() { if (!A)
        throw new Error("Function called outside component initialization"); return A; }
    function C() { const t = q(); return (e, n) => { const o = t.$$.callbacks[e]; if (o) {
        const r = function (t, e) { const n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, !1, !1, e), n; }(e, n);
        o.slice().forEach((e => { e.call(t, r); }));
    } }; }
    function k(t, e) { q().$$.context.set(t, e); }
    function I(t) { return q().$$.context.get(t); }
    const T = [], S = [], L = [], O = [], U = Promise.resolve();
    let z = !1;
    function D() { z || (z = !0, U.then(F)); }
    function j(t) { L.push(t); }
    let N = !1;
    const M = new Set;
    function F() { if (!N) {
        N = !0;
        do {
            for (let t = 0; t < T.length; t += 1) {
                const e = T[t];
                P(e), H(e.$$);
            }
            for (P(null), T.length = 0; S.length;)
                S.pop()();
            for (let t = 0; t < L.length; t += 1) {
                const e = L[t];
                M.has(e) || (M.add(e), e());
            }
            L.length = 0;
        } while (T.length);
        for (; O.length;)
            O.pop()();
        z = !1, N = !1, M.clear();
    } }
    function H(t) { if (null !== t.fragment) {
        t.update(), r(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(j);
    } }
    const V = new Set;
    let B;
    function K() { B = { r: 0, c: [], p: B }; }
    function G() { B.r || r(B.c), B = B.p; }
    function Y(t, e) { t && t.i && (V.delete(t), t.i(e)); }
    function J(t, e, n, o) { if (t && t.o) {
        if (V.has(t))
            return;
        V.add(t), B.c.push((() => { V.delete(t), o && (n && t.d(1), o()); })), t.o(e);
    } }
    function Q(t, e) { const n = {}, o = {}, r = { $$scope: 1 }; let s = t.length; for (; s--;) {
        const a = t[s], c = e[s];
        if (c) {
            for (const t in a)
                t in c || (o[t] = 1);
            for (const t in c)
                r[t] || (n[t] = c[t], r[t] = 1);
            t[s] = c;
        }
        else
            for (const t in a)
                r[t] = 1;
    } for (const t in o)
        t in n || (n[t] = void 0); return n; }
    function W(t) { return "object" == typeof t && null !== t ? t : {}; }
    function X(t) { t && t.c(); }
    function Z(t, e, o, a) { const { fragment: c, on_mount: i, on_destroy: u, after_update: l } = t.$$; c && c.m(e, o), a || j((() => { const e = i.map(n).filter(s); u ? u.push(...e) : r(e), t.$$.on_mount = []; })), l.forEach(j); }
    function tt(t, e) { const n = t.$$; null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []); }
    function et(e, n, s, a, c, i, u = [-1]) { const l = A; P(e); const d = e.$$ = { fragment: null, ctx: null, props: i, update: t, not_equal: c, bound: o(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(l ? l.$$.context : n.context || []), callbacks: o(), dirty: u, skip_bound: !1 }; let f = !1; if (d.ctx = s ? s(e, n.props || {}, ((t, n, ...o) => { const r = o.length ? o[0] : n; return d.ctx && c(d.ctx[t], d.ctx[t] = r) && (!d.skip_bound && d.bound[t] && d.bound[t](r), f && function (t, e) { -1 === t.$$.dirty[0] && (T.push(t), D(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31; }(e, t)), n; })) : [], d.update(), f = !0, r(d.before_update), d.fragment = !!a && a(d.ctx), n.target) {
        if (n.hydrate) {
            const t = function (t) { return Array.from(t.childNodes); }(n.target);
            d.fragment && d.fragment.l(t), t.forEach(g);
        }
        else
            d.fragment && d.fragment.c();
        n.intro && Y(e.$$.fragment), Z(e, n.target, n.anchor, n.customElement), F();
    } P(l); }
    class nt {
        $destroy() { tt(this, 1), this.$destroy = t; }
        $on(t, e) { const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []); return n.push(e), () => { const t = n.indexOf(e); -1 !== t && n.splice(t, 1); }; }
        $set(t) { var e; this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1); }
    }
    function ot(e) { let n; return { c() { n = v("div"), n.textContent = "About", w(n, "id", "container"), w(n, "class", "svelte-1o1l175"); }, m(t, e) { h(t, n, e); }, p: t, i: t, o: t, d(t) { t && g(n); } }; }
    class rt extends nt {
        constructor(t) { super(), et(this, t, null, ot, a, {}); }
    }
    const st = t => void 0 === t, at = t => "function" == typeof t, ct = t => "number" == typeof t;
    function it() { let t = 0; return () => t++; }
    const ut = "undefined" == typeof window;
    function lt(t, e, n) { return t.addEventListener(e, n), () => t.removeEventListener(e, n); }
    const dt = [];
    function ft(e, n = t) { let o; const r = []; function s(t) { if (a(e, t) && (e = t, o)) {
        const t = !dt.length;
        for (let t = 0; t < r.length; t += 1) {
            const n = r[t];
            n[1](), dt.push(n, e);
        }
        if (t) {
            for (let t = 0; t < dt.length; t += 2)
                dt[t][0](dt[t + 1]);
            dt.length = 0;
        }
    } } return { set: s, update: function (t) { s(t(e)); }, subscribe: function (a, c = t) { const i = [a, c]; return r.push(i), 1 === r.length && (o = n(s) || t), a(e), () => { const t = r.indexOf(i); -1 !== t && r.splice(t, 1), 0 === r.length && (o(), o = null); }; } }; }
    function pt(e, n, o) { const a = !Array.isArray(e), i = a ? [e] : e, u = n.length < 2; return { subscribe: ft(o, (e => { let o = !1; const l = []; let d = 0, f = t; const p = () => { if (d)
            return; f(); const o = n(a ? l[0] : l, e); u ? e(o) : f = s(o) ? o : t; }, $ = i.map(((t, e) => c(t, (t => { l[e] = t, d &= ~(1 << e), o && p(); }), (() => { d |= 1 << e; })))); return o = !0, p(), function () { r($), f(); }; })).subscribe }; }
    const $t = t => `@@svnav-ctx__${t}`, mt = $t("LOCATION"), ht = $t("ROUTER"), gt = $t("ROUTE"), vt = $t("ROUTE_PARAMS"), yt = $t("FOCUS_ELEM"), bt = /^:(.+)/, xt = (t, e) => t.substr(0, e.length) === e, wt = t => "*" === t[0], Et = t => t.replace(/(^\/+|\/+$)/g, "");
    function Rt(t, e = !1) { const n = Et(t).split("/"); return e ? n.filter(Boolean) : n; }
    const _t = (t, e) => t + (e ? `?${e}` : ""), At = t => `/${Et(t)}`;
    function Pt(...t) { const e = t.map((t => Rt(t, !0).join("/"))).join("/"); return At(e); }
    const qt = { 1: "Link", 2: "Route", 3: "Router", 4: "useFocus", 5: "useLocation", 6: "useMatch", 7: "useNavigate", 8: "useParams", 9: "useResolvable", 10: "useResolve", 11: "navigate" }, Ct = t => qt[t];
    function kt(t, e, n, o) { const r = n && function (t, e) { let n; return 2 === t ? n = e.path ? `path="${e.path}"` : "default" : 1 === t ? n = `to="${e.to}"` : 3 === t && (n = `basepath="${e.basepath || ""}"`), `<${Ct(t)} ${n || ""} />`; }(o || t, n), s = r ? `\n\nOccurred in: ${r}` : "", a = Ct(t); return `<${a}> ${at(e) ? e(a) : e}${s}`; }
    const It = t => (...e) => t(kt(...e)), Tt = It((t => { throw new Error(t); })), St = It(console.warn);
    function Lt(t, e) { return { route: t, score: t.default ? 0 : Rt(t.fullPath).reduce(((t, e) => { let n = t; return n += 4, (t => "" === t)(e) ? n += 1 : (t => bt.test(t))(e) ? n += 2 : wt(e) ? n -= 5 : n += 3, n; }), 0), index: e }; }
    function Ot(t, e) { let n, o; const [r] = e.split("?"), s = Rt(r), a = "" === s[0], c = function (t) { return t.map(Lt).sort(((t, e) => t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index)); }(t); for (let t = 0, r = c.length; t < r; t++) {
        const { route: r } = c[t];
        let i = !1;
        const u = {}, l = t => ({ ...r, params: u, uri: t });
        if (r.default) {
            o = l(e);
            continue;
        }
        const d = Rt(r.fullPath), f = Math.max(s.length, d.length);
        let p = 0;
        for (; p < f; p++) {
            const t = d[p], e = s[p];
            if (!st(t) && wt(t)) {
                const e = "*" === t ? "*" : t.slice(1);
                u[e] = s.slice(p).map(decodeURIComponent).join("/");
                break;
            }
            if (st(e)) {
                i = !0;
                break;
            }
            const n = bt.exec(t);
            if (n && !a) {
                const t = decodeURIComponent(e);
                u[n[1]] = t;
            }
            else if (t !== e) {
                i = !0;
                break;
            }
        }
        if (!i) {
            n = l(Pt(...s.slice(0, p)));
            break;
        }
    } return n || o || null; }
    function Ut(t, e) { return Ot([t], e); }
    function zt(t, e) { const { pathname: n, hash: o = "", search: r = "", state: s } = t, a = Rt(e, !0), c = Rt(n, !0); for (; a.length;)
        a[0] !== c[0] && Tt(3, `Invalid state: All locations must begin with the basepath "${e}", found "${n}"`), a.shift(), c.shift(); return { pathname: Pt(...c), hash: o, search: r, state: s }; }
    const Dt = t => 1 === t.length ? "" : t;
    function jt(t) { const e = t.indexOf("?"), n = t.indexOf("#"), o = -1 !== e, r = -1 !== n, s = r ? Dt(t.substr(n)) : "", a = r ? t.substr(0, n) : t, c = o ? Dt(a.substr(e)) : ""; return { pathname: o ? a.substr(0, e) : a, search: c, hash: s }; }
    function Nt(t, e, n) { return Pt(n, function (t, e) { if (xt(t, "/"))
        return t; const [n, o] = t.split("?"), [r] = e.split("?"), s = Rt(n), a = Rt(r); if ("" === s[0])
        return _t(r, o); if (!xt(s[0], ".")) {
        const t = a.concat(s).join("/");
        return _t(("/" === r ? "" : "/") + t, o);
    } const c = a.concat(s), i = []; return c.forEach((t => { ".." === t ? i.pop() : "." !== t && i.push(t); })), _t(`/${i.join("/")}`, o); }(t, e)); }
    function Mt(t, e) { const n = At(t.replace(/\*.*$/, "")); const o = Rt(n, !0), r = Ut({ fullPath: n }, Pt(...Rt(e, !0).slice(0, o.length))); return r && r.uri; }
    const Ft = "POP";
    function Ht(t) { return { ...t.location, pathname: encodeURI(decodeURI(t.location.pathname)), state: t.history.state, _key: t.history.state && t.history.state._key || "initial" }; }
    function Vt(t, e) { return { ...jt(e), state: t }; }
    const Bt = !(ut || !window.document || !window.document.createElement), Kt = !ut && "null" === window.location.origin, Gt = function (t) { let e = [], n = Ht(t), o = Ft; const r = (t = e) => t.forEach((t => t({ location: n, action: o }))); return { get location() { return n; }, listen(s) { e.push(s); r([s]); const a = lt(t, "popstate", (() => { n = Ht(t), o = Ft, r([s]); })); return () => { a(), e = e.filter((t => t !== s)); }; }, navigate(e, s) { const { state: a = {}, replace: c = !1 } = s || {}; if (o = c ? "REPLACE" : "PUSH", ct(e))
            s && St(11, "Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."), o = Ft, t.history.go(e);
        else {
            const n = { ...a, _key: Math.random().toString(36).substring(2) };
            try {
                t.history[c ? "replaceState" : "pushState"](n, "", e);
            }
            catch (n) {
                t.location[c ? "replace" : "assign"](e);
            }
        } n = Ht(t), r(); } }; }(Bt && !Kt ? window : function (t = "/") { let e = 0, n = [Vt(null, t)]; return { get entries() { return n; }, get location() { return n[e]; }, addEventListener() { }, removeEventListener() { }, history: { get state() { return n[e].state; }, pushState(t, o, r) { e++, n = n.slice(0, e), n.push(Vt(t, r)); }, replaceState(t, o, r) { n[e] = Vt(t, r); }, go(t) { const o = e + t; o < 0 || o > n.length - 1 || (e = o); } } }; }());
    let Yt = null, Jt = !0;
    function Qt(t) { (!Yt || t.level > Yt.level || t.level === Yt.level && function (t, e) { const n = document.querySelectorAll("[data-svnav-router]"); for (let o = 0; o < n.length; o++) {
        const r = n[o], s = Number(r.dataset.svnavRouter);
        if (s === t)
            return !0;
        if (s === e)
            return !1;
    } return !1; }(t.routerId, Yt.routerId)) && (Yt = t); }
    function Wt(t) { if (!t)
        return !1; const e = "tabindex"; try {
        if (!t.hasAttribute(e)) {
            let n;
            t.setAttribute(e, "-1");
            const o = () => { t.removeAttribute(e), n(); };
            n = lt(t, "blur", o);
        }
        return t.focus(), document.activeElement === t;
    }
    catch (t) {
        return !1;
    } }
    function Xt(t, e) { return Number(t.dataset.svnavRouteEnd) === e; }
    function Zt(t, e = document) { return e.querySelector(t); }
    function te(t) { Promise.resolve(i(t.focusElement)).then((e => { const n = e || function (t) { let e = Zt(`[data-svnav-route-start="${t}"]`).nextElementSibling; for (; !Xt(e, t);) {
        if (/^H[1-6]$/i.test(e.tagName))
            return e;
        const t = Zt("h1,h2,h3,h4,h5,h6", e);
        if (t)
            return t;
        e = e.nextElementSibling;
    } return null; }(t.id); n || St(3, 'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.', t, 2); Wt(n) || Wt(document.documentElement); })); }
    const ee = (t, e, n) => (o, r) => (D(), U).then((() => { if (Yt && !Jt) {
        if (o && te(Yt.route), t.announcements && r) {
            const { path: o, fullPath: r, meta: s, params: a, uri: c } = Yt.route, u = t.createAnnouncement({ path: o, fullPath: r, meta: s, params: a, uri: c }, i(n));
            Promise.resolve(u).then((t => { e.set(t); }));
        }
        Yt = null;
    }
    else
        Jt = !1; }));
    function ne(t) { let e, n, o, r, s; const a = t[20].default, c = l(a, t, t[19], null); let i = t[2] && t[4] && t[1].announcements && function (t) { let e, n; return { c() { e = v("div"), n = y(t[0]), w(e, "role", "status"), w(e, "aria-atomic", "true"), w(e, "aria-live", "polite"), w(e, "style", "position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"); }, m(t, o) { h(t, e, o), m(e, n); }, p(t, e) { 1 & e[0] && R(n, t[0]); }, d(t) { t && g(e); } }; }(t); return { c() { e = v("div"), n = b(), c && c.c(), o = b(), i && i.c(), r = x(), _(e, "display", "none"), w(e, "aria-hidden", "true"), w(e, "data-svnav-router", t[3]); }, m(t, a) { h(t, e, a), h(t, n, a), c && c.m(t, a), h(t, o, a), i && i.m(t, a), h(t, r, a), s = !0; }, p(t, e) { c && c.p && (!s || 524288 & e[0]) && f(c, a, t, t[19], e, null, null), t[2] && t[4] && t[1].announcements && i.p(t, e); }, i(t) { s || (Y(c, t), s = !0); }, o(t) { J(c, t), s = !1; }, d(t) { t && g(e), t && g(n), c && c.d(t), t && g(o), i && i.d(t), t && g(r); } }; }
    const oe = it(), re = "/";
    function se(t, e, n) { let o, r, s, a, c, { $$slots: i = {}, $$scope: l } = e, { basepath: d = re } = e, { url: f = null } = e, { history: p = Gt } = e, { primary: $ = !0 } = e, { a11y: m = {} } = e; const h = { createAnnouncement: t => `Navigated to ${t.uri}`, announcements: !0, ...m }, g = d, v = At(d), y = I(mt), b = I(ht), x = !y, w = oe(), E = $ && !(b && !b.manageFocus), R = ft(""); u(t, R, (t => n(0, c = t))); const _ = ft([]); u(t, _, (t => n(16, r = t))); const A = ft(null); u(t, A, (t => n(18, a = t))); let P = !1; const C = x ? 0 : b.level + 1, T = x ? ft(zt(ut ? jt(f) : p.location, v)) : y; u(t, T, (t => n(15, o = t))); const S = ft(o); u(t, S, (t => n(17, s = t))); const L = ee(h, R, T), O = t => e => e.filter((e => e.id !== t)); var U; return x || d === re || St(3, 'Only top-level Routers can have a "basepath" prop. It is ignored.', { basepath: d }), x && (U = () => p.listen((t => { const e = zt(t.location, v); S.set(o), T.set(e); })), q().$$.on_mount.push(U), k(mt, T)), k(ht, { activeRoute: A, registerRoute: function (t) { if (ut) {
            if (P)
                return;
            const e = Ut(t, o.pathname);
            if (e)
                return P = !0, e;
        }
        else
            _.update((e => { const n = O(t.id)(e); return n.push(t), n; })); }, unregisterRoute: function (t) { _.update(O(t)); }, manageFocus: E, level: C, id: w, history: x ? p : b.history, basepath: x ? v : b.basepath }), t.$$set = t => { "basepath" in t && n(10, d = t.basepath), "url" in t && n(11, f = t.url), "history" in t && n(12, p = t.history), "primary" in t && n(13, $ = t.primary), "a11y" in t && n(14, m = t.a11y), "$$scope" in t && n(19, l = t.$$scope); }, t.$$.update = () => { if (1024 & t.$$.dirty[0] && d !== g && St(3, 'You cannot change the "basepath" prop. It is ignored.'), 98304 & t.$$.dirty[0]) {
        const t = Ot(r, o.pathname);
        A.set(t);
    } if (163840 & t.$$.dirty[0] && x) {
        const t = !!o.hash, e = !t && E, n = !t || o.pathname !== s.pathname;
        L(e, n);
    } 262144 & t.$$.dirty[0] && E && a && a.primary && Qt({ level: C, routerId: w, route: a }); }, [c, h, x, w, E, R, _, A, T, S, d, f, p, $, m, o, r, s, a, l, i]; }
    class ae extends nt {
        constructor(t) { super(), et(this, t, se, ne, a, { basepath: 10, url: 11, history: 12, primary: 13, a11y: 14 }, [-1, -1]); }
    }
    function ce(t, e, n = ht, o = 3) { I(n) || Tt(t, (t => `You cannot use ${t} outside of a ${Ct(o)}.`), e); }
    function ie() { return ce(5), (t => { const { subscribe: e } = I(t); return { subscribe: e }; })(mt); }
    function ue() { const { history: t } = I(ht); return t; }
    function le() { const t = I(gt); return t ? pt(t, (t => t.base)) : ft("/"); }
    function de() { ce(10); const t = le(), { basepath: e } = I(ht); return n => Nt(n, i(t), e); }
    const fe = t => ({ params: 16 & t, location: 4 & t }), pe = t => ({ params: ut ? i(t[9]) : t[4], location: t[2], navigate: t[10] });
    function $e(t) { let e, n; return e = new ae({ props: { primary: t[1], $$slots: { default: [ge] }, $$scope: { ctx: t } } }), { c() { X(e.$$.fragment); }, m(t, o) { Z(e, t, o), n = !0; }, p(t, n) { const o = {}; 2 & n && (o.primary = t[1]), 264213 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o); }, i(t) { n || (Y(e.$$.fragment, t), n = !0); }, o(t) { J(e.$$.fragment, t), n = !1; }, d(t) { tt(e, t); } }; }
    function me(t) { let e; const n = t[17].default, o = l(n, t, t[18], pe); return { c() { o && o.c(); }, m(t, n) { o && o.m(t, n), e = !0; }, p(t, r) { o && o.p && (!e || 262164 & r) && f(o, n, t, t[18], r, fe, pe); }, i(t) { e || (Y(o, t), e = !0); }, o(t) { J(o, t), e = !1; }, d(t) { o && o.d(t); } }; }
    function he(t) { let n, o, r; const s = [{ location: t[2] }, { navigate: t[10] }, ut ? i(t[9]) : t[4], t[11]]; var a = t[0]; function c(t) { let n = {}; for (let t = 0; t < s.length; t += 1)
        n = e(n, s[t]); return { props: n }; } return a && (n = new a(c())), { c() { n && X(n.$$.fragment), o = x(); }, m(t, e) { n && Z(n, t, e), h(t, o, e), r = !0; }, p(t, e) { const r = 3604 & e ? Q(s, [4 & e && { location: t[2] }, 1024 & e && { navigate: t[10] }, 528 & e && W(ut ? i(t[9]) : t[4]), 2048 & e && W(t[11])]) : {}; if (a !== (a = t[0])) {
            if (n) {
                K();
                const t = n;
                J(t.$$.fragment, 1, 0, (() => { tt(t, 1); })), G();
            }
            a ? (n = new a(c()), X(n.$$.fragment), Y(n.$$.fragment, 1), Z(n, o.parentNode, o)) : n = null;
        }
        else
            a && n.$set(r); }, i(t) { r || (n && Y(n.$$.fragment, t), r = !0); }, o(t) { n && J(n.$$.fragment, t), r = !1; }, d(t) { t && g(o), n && tt(n, t); } }; }
    function ge(t) { let e, n, o, r; const s = [he, me], a = []; function c(t, e) { return null !== t[0] ? 0 : 1; } return e = c(t), n = a[e] = s[e](t), { c() { n.c(), o = x(); }, m(t, n) { a[e].m(t, n), h(t, o, n), r = !0; }, p(t, r) { let i = e; e = c(t), e === i ? a[e].p(t, r) : (K(), J(a[i], 1, 1, (() => { a[i] = null; })), G(), n = a[e], n ? n.p(t, r) : (n = a[e] = s[e](t), n.c()), Y(n, 1), n.m(o.parentNode, o)); }, i(t) { r || (Y(n), r = !0); }, o(t) { J(n), r = !1; }, d(t) { a[e].d(t), t && g(o); } }; }
    function ve(t) { let e, n, o, r, s, a = t[3] && $e(t); return { c() { e = v("div"), n = b(), a && a.c(), o = b(), r = v("div"), _(e, "display", "none"), w(e, "aria-hidden", "true"), w(e, "data-svnav-route-start", t[5]), _(r, "display", "none"), w(r, "aria-hidden", "true"), w(r, "data-svnav-route-end", t[5]); }, m(t, c) { h(t, e, c), h(t, n, c), a && a.m(t, c), h(t, o, c), h(t, r, c), s = !0; }, p(t, [e]) { t[3] ? a ? (a.p(t, e), 8 & e && Y(a, 1)) : (a = $e(t), a.c(), Y(a, 1), a.m(o.parentNode, o)) : a && (K(), J(a, 1, 1, (() => { a = null; })), G()); }, i(t) { s || (Y(a), s = !0); }, o(t) { J(a), s = !1; }, d(t) { t && g(e), t && g(n), a && a.d(t), t && g(o), t && g(r); } }; }
    const ye = it();
    function be(t, n, o) { let r; const s = ["path", "component", "meta", "primary"]; let a, c, i, l, d = $(n, s), { $$slots: f = {}, $$scope: m } = n, { path: h = "" } = n, { component: g = null } = n, { meta: v = {} } = n, { primary: y = !0 } = n; ce(2, n); const b = ye(), { registerRoute: x, unregisterRoute: w, activeRoute: E } = I(ht); u(t, E, (t => o(16, i = t))); const R = le(); u(t, R, (t => o(15, a = t))); const _ = ie(); u(t, _, (t => o(2, c = t))); const A = ft(null); let P; const C = ft(), T = ft({}); u(t, T, (t => o(4, l = t))), k(gt, C), k(vt, T), k(yt, A); const S = function () { ce(7); const t = de(), { navigate: e } = ue(); return (n, o) => { const r = ct(n) ? n : t(n); return e(r, o); }; }(); var L; return ut || (L = () => w(b), q().$$.on_destroy.push(L)), t.$$set = t => { o(23, n = e(e({}, n), p(t))), o(11, d = $(n, s)), "path" in t && o(12, h = t.path), "component" in t && o(0, g = t.component), "meta" in t && o(13, v = t.meta), "primary" in t && o(1, y = t.primary), "$$scope" in t && o(18, m = t.$$scope); }, t.$$.update = () => { if (45062 & t.$$.dirty) {
        const t = "" === h, e = Pt(a, h), n = { id: b, path: h, meta: v, default: t, fullPath: t ? "" : e, base: t ? a : Mt(e, c.pathname), primary: y, focusElement: A };
        C.set(n), o(14, P = x(n));
    } if (81920 & t.$$.dirty && o(3, r = !!(P || i && i.id === b)), 81928 & t.$$.dirty && r) {
        const { params: t } = P || i;
        T.set(t);
    } }, n = p(n), [g, y, c, r, l, b, E, R, _, T, S, d, h, v, P, a, i, f, m]; }
    class xe extends nt {
        constructor(t) { super(), et(this, t, be, ve, a, { path: 12, component: 0, meta: 13, primary: 1 }); }
    }
    function we(t) { let n, o, r, s; const a = t[13].default, c = l(a, t, t[12], null); let i = [{ href: t[0] }, t[1], t[2]], u = {}; for (let t = 0; t < i.length; t += 1)
        u = e(u, i[t]); return { c() { n = v("a"), c && c.c(), E(n, u); }, m(e, a) { var i, u, l, d; h(e, n, a), c && c.m(n, null), o = !0, r || (i = n, u = "click", l = t[4], i.addEventListener(u, l, d), s = () => i.removeEventListener(u, l, d), r = !0); }, p(t, [e]) { c && c.p && (!o || 4096 & e) && f(c, a, t, t[12], e, null, null), E(n, u = Q(i, [(!o || 1 & e) && { href: t[0] }, 2 & e && t[1], 4 & e && t[2]])); }, i(t) { o || (Y(c, t), o = !0); }, o(t) { J(c, t), o = !1; }, d(t) { t && g(n), c && c.d(t), r = !1, s(); } }; }
    function Ee(t, n, o) { let r, s, a, c, i; const l = ["to", "replace", "state", "getProps"]; let d, f = $(n, l), { $$slots: m = {}, $$scope: h } = n, { to: g } = n, { replace: v = !1 } = n, { state: y = {} } = n, { getProps: b = null } = n; ce(1, n); const x = ie(); u(t, x, (t => o(9, d = t))); const w = C(), E = de(), { navigate: R } = ue(); return t.$$set = t => { o(17, n = e(e({}, n), p(t))), o(18, f = $(n, l)), "to" in t && o(5, g = t.to), "replace" in t && o(6, v = t.replace), "state" in t && o(7, y = t.state), "getProps" in t && o(8, b = t.getProps), "$$scope" in t && o(12, h = t.$$scope); }, t.$$.update = () => { 544 & t.$$.dirty && o(0, r = E(g, d)), 513 & t.$$.dirty && o(10, s = xt(d.pathname, r)), 513 & t.$$.dirty && o(11, a = r === d.pathname), 2048 & t.$$.dirty && o(1, c = a ? { "aria-current": "page" } : {}), o(2, i = (() => { if (at(b)) {
        const t = b({ location: d, href: r, isPartiallyCurrent: s, isCurrent: a });
        return { ...f, ...t };
    } return f; })()); }, n = p(n), [r, c, i, x, function (t) { if (w("click", t), function (t) { return !t.defaultPrevented && 0 === t.button && !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey); }(t)) {
            t.preventDefault();
            R(r, { state: y, replace: a || v });
        } }, g, v, y, b, d, s, a, h, m]; }
    class Re extends nt {
        constructor(t) { super(), et(this, t, Ee, we, a, { to: 5, replace: 6, state: 7, getProps: 8 }); }
    }
    function _e(t) { let e; return { c() { e = v("h2"), e.textContent = "Introdução", w(e, "class", "svelte-1ezoy4p"); }, m(t, n) { h(t, e, n); }, d(t) { t && g(e); } }; }
    function Ae(t) { let e; return { c() { e = y("Rotas de Administradores"); }, m(t, n) { h(t, e, n); }, d(t) { t && g(e); } }; }
    function Pe(t) { let e; return { c() { e = y("Rotas de Usuarios"); }, m(t, n) { h(t, e, n); }, d(t) { t && g(e); } }; }
    function qe(t) { let e, n, o, r, s, a, c, i, u, l, d, f, p, $, y, x; return i = new Re({ props: { to: "/", style: "color: #35343D;", $$slots: { default: [_e] }, $$scope: { ctx: t } } }), p = new Re({ props: { to: "admin", style: "\n    color: #35343D;\n    margin-left: 2em;\n    font-size: 0.9em;\n    ", $$slots: { default: [Ae] }, $$scope: { ctx: t } } }), y = new Re({ props: { to: "usuarios", style: "\n    color: #35343D;\n    margin-left: 2em;\n    font-size: 0.9em;\n    ", $$slots: { default: [Pe] }, $$scope: { ctx: t } } }), { c() { e = v("div"), n = v("img"), r = b(), s = v("div"), a = v("h3"), a.textContent = "Por onde começar?", c = b(), X(i.$$.fragment), u = b(), l = v("div"), d = v("h3"), d.textContent = "Rotas", f = b(), X(p.$$.fragment), $ = b(), X(y.$$.fragment), n.src !== (o = "./logo.svg") && w(n, "src", "./logo.svg"), w(n, "alt", "logoDPT"), _(n, "width", "3em"), _(n, "margin-left", "2em"), w(a, "class", "svelte-1ezoy4p"), w(s, "id", "wellcome"), w(s, "class", "svelte-1ezoy4p"), w(d, "class", "svelte-1ezoy4p"), w(l, "id", "wellcome"), w(l, "class", "svelte-1ezoy4p"), w(e, "id", "container"), w(e, "class", "svelte-1ezoy4p"); }, m(t, o) { h(t, e, o), m(e, n), m(e, r), m(e, s), m(s, a), m(s, c), Z(i, s, null), m(e, u), m(e, l), m(l, d), m(l, f), Z(p, l, null), m(l, $), Z(y, l, null), x = !0; }, p(t, [e]) { const n = {}; 1 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n); const o = {}; 1 & e && (o.$$scope = { dirty: e, ctx: t }), p.$set(o); const r = {}; 1 & e && (r.$$scope = { dirty: e, ctx: t }), y.$set(r); }, i(t) { x || (Y(i.$$.fragment, t), Y(p.$$.fragment, t), Y(y.$$.fragment, t), x = !0); }, o(t) { J(i.$$.fragment, t), J(p.$$.fragment, t), J(y.$$.fragment, t), x = !1; }, d(t) { t && g(e), tt(i), tt(p), tt(y); } }; }
    class Ce extends nt {
        constructor(t) { super(), et(this, t, null, qe, a, {}); }
    }
    function ke(t) { let e; return { c() { e = v("li"), e.textContent = "Administradores"; }, m(t, n) { h(t, e, n); }, d(t) { t && g(e); } }; }
    function Ie(t) { let e; return { c() { e = v("li"), e.textContent = "Usuarios comuns"; }, m(t, n) { h(t, e, n); }, d(t) { t && g(e); } }; }
    function Te(t) { let e, n, o, r, s, a, c, i, u, l, d, f, p, $, y, x, E; return $ = new Re({ props: { to: "/admin", $$slots: { default: [ke] }, $$scope: { ctx: t } } }), x = new Re({ props: { to: "/usuario", $$slots: { default: [Ie] }, $$scope: { ctx: t } } }), { c() { e = v("div"), n = v("section"), n.innerHTML = '<h3 class="svelte-17rx491">Bem vindo!</h3> \n    <h1 class="svelte-17rx491">Esta é a introdução a API do SISRG</h1>', o = b(), r = v("section"), r.innerHTML = '<h3>Prelúdio</h3> \n    <p class="svelte-17rx491">Esta API não é publica. Portanto, o uso da mesma não compete à desenvolvedores de fora dos serviços ao Instituto Pedro mello e/ou Departamento de Polícia técnica.</p> \n    <p class="svelte-17rx491">Esta documentação tem sído desenhada em prol de trazer ao desenvolvedor conforto e poder de produtividade, portanto, qualquer rota que for adicionada ao back-end\n      desse serviço, deve ser documentada aqui nesse local, utilizando o padrão de design já utilizado.</p> \n    <strong>A documentação começa aqui...</strong>', s = b(), a = v("section"), c = v("div"), c.innerHTML = '<h3 class="svelte-17rx491">Rotas!</h3> \n      <h1 class="svelte-17rx491">Ainda não verás as rotas disponíveis, pois esta página tem apenas o intuito de introduzir o desenvolvedor a algumas regras.</h1>', i = b(), u = v("p"), u.textContent = "Agora que já sabe algumas regrinhas e boas práticas, pode começar a ver a documentação utilizando os menús ou clicando em uma das entidades abaixo.", l = b(), d = v("strong"), d.textContent = "Você precisa trabalhar com qual entidade?", f = b(), p = v("ul"), X($.$$.fragment), y = b(), X(x.$$.fragment), w(n, "id", "title"), w(n, "class", "svelte-17rx491"), w(r, "class", "svelte-17rx491"), w(c, "id", "title"), w(c, "class", "svelte-17rx491"), w(u, "class", "svelte-17rx491"), w(a, "class", "svelte-17rx491"), w(e, "id", "container"), w(e, "class", "svelte-17rx491"); }, m(t, g) { h(t, e, g), m(e, n), m(e, o), m(e, r), m(e, s), m(e, a), m(a, c), m(a, i), m(a, u), m(a, l), m(a, d), m(a, f), m(a, p), Z($, p, null), m(p, y), Z(x, p, null), E = !0; }, p(t, [e]) { const n = {}; 1 & e && (n.$$scope = { dirty: e, ctx: t }), $.$set(n); const o = {}; 1 & e && (o.$$scope = { dirty: e, ctx: t }), x.$set(o); }, i(t) { E || (Y($.$$.fragment, t), Y(x.$$.fragment, t), E = !0); }, o(t) { J($.$$.fragment, t), J(x.$$.fragment, t), E = !1; }, d(t) { t && g(e), tt($), tt(x); } }; }
    class Se extends nt {
        constructor(t) { super(), et(this, t, null, Te, a, {}); }
    }
    function Le(e) { let n, o, r, s, a, c, i, u = (e[1] ? e[1] : "") + ""; return { c() { n = v("div"), o = v("span"), r = y(e[0]), s = b(), a = v("span"), c = y(u), w(a, "style", i = `${e[2] && "background:" + e[2] + ";"}`), w(a, "id", "method"), w(a, "class", "svelte-kx2c8p"), w(o, "class", "svelte-kx2c8p"), w(n, "id", "RouteCard"), w(n, "class", "svelte-kx2c8p"); }, m(t, e) { h(t, n, e), m(n, o), m(o, r), m(o, s), m(o, a), m(a, c); }, p(t, [e]) { 1 & e && R(r, t[0]), 2 & e && u !== (u = (t[1] ? t[1] : "") + "") && R(c, u), 4 & e && i !== (i = `${t[2] && "background:" + t[2] + ";"}`) && w(a, "style", i); }, i: t, o: t, d(t) { t && g(n); } }; }
    function Oe(t, e, n) { let { url: o } = e, { method: r } = e, { color: s } = e; return t.$$set = t => { "url" in t && n(0, o = t.url), "method" in t && n(1, r = t.method), "color" in t && n(2, s = t.color); }, [o, r, s]; }
    class Ue extends nt {
        constructor(t) { super(), et(this, t, Oe, Le, a, { url: 0, method: 1, color: 2 }); }
    }
    function ze(e) { let n, o, r, s, a, c, i, u, l, d, f, p, $, y, x, E, R, _, A, P, q, C, k, I, T, S, L, O, U, z, D, j, N, M, F; return y = new Ue({ props: { url: "/usuarios", method: "GET", color: "#7785FD" } }), A = new Ue({ props: { url: "/usuarios/:id", method: "GET", color: "#7785FD" } }), I = new Ue({ props: { url: "/usuarios", method: "POST", color: "#1AB0B0" } }), U = new Ue({ props: { url: "/usuarios", method: "PUT", color: "#5CA0EE" } }), M = new Ue({ props: { url: "/usuarios/:id", method: "DELETE", color: "tomato" } }), { c() { n = v("div"), o = v("section"), o.innerHTML = '<h3 class="svelte-1qlvccm">Administração</h3> \n    <h1 class="svelte-1qlvccm">Rotas com recursos adicionais.</h1>', r = b(), s = v("section"), s.innerHTML = '<h3>Recursos</h3> \n    <p class="svelte-1qlvccm">Nessa página, listamos as rotas que apenas usuários autenticados como administrador conseguem usar.</p> \n    <p class="svelte-1qlvccm">Essas rotas, criam, alteram e gerenciam postos SAC&#39;s do interior ou da capital, gerenciam também os chefes de postos\n      e horários. Registros e Relatórios possuem mais recursos também.</p>', a = b(), c = v("section"), i = v("div"), i.innerHTML = '<h3 class="svelte-1qlvccm">Tratando usuários.</h3> \n      <h1 class="svelte-1qlvccm">A criação de usuários (funcionários) é recurso exclusivo de <i>Administradores</i></h1>', u = b(), l = v("p"), l.textContent = "Agora que já sabe algumas regrinhas e boas práticas, pode começar a ver a documentação utilizando os menús ou clicando em uma das entidades abaixo.", d = b(), f = v("div"), p = v("strong"), p.textContent = "Rota para buscar Usuarios", $ = b(), X(y.$$.fragment), x = b(), E = v("div"), R = v("strong"), R.textContent = "Rota para buscar Usuario específico", _ = b(), X(A.$$.fragment), P = b(), q = v("div"), C = v("strong"), C.textContent = "Rota para Criar Usuarios", k = b(), X(I.$$.fragment), T = b(), S = v("div"), L = v("strong"), L.textContent = "Rota para Atualizar Usuario", O = b(), X(U.$$.fragment), z = b(), D = v("div"), j = v("strong"), j.textContent = "Rota para Deletar Usuario específico", N = b(), X(M.$$.fragment), w(o, "id", "title"), w(o, "class", "svelte-1qlvccm"), w(s, "class", "svelte-1qlvccm"), w(i, "id", "title"), w(i, "class", "svelte-1qlvccm"), w(l, "class", "svelte-1qlvccm"), w(f, "id", "spacingDIV"), w(f, "class", "svelte-1qlvccm"), w(E, "id", "spacingDIV"), w(E, "class", "svelte-1qlvccm"), w(q, "id", "spacingDIV"), w(q, "class", "svelte-1qlvccm"), w(S, "id", "spacingDIV"), w(S, "class", "svelte-1qlvccm"), w(D, "id", "spacingDIV"), w(D, "class", "svelte-1qlvccm"), w(c, "class", "svelte-1qlvccm"), w(n, "id", "container"), w(n, "class", "svelte-1qlvccm"); }, m(t, e) { h(t, n, e), m(n, o), m(n, r), m(n, s), m(n, a), m(n, c), m(c, i), m(c, u), m(c, l), m(c, d), m(c, f), m(f, p), m(f, $), Z(y, f, null), m(c, x), m(c, E), m(E, R), m(E, _), Z(A, E, null), m(c, P), m(c, q), m(q, C), m(q, k), Z(I, q, null), m(c, T), m(c, S), m(S, L), m(S, O), Z(U, S, null), m(c, z), m(c, D), m(D, j), m(D, N), Z(M, D, null), F = !0; }, p: t, i(t) { F || (Y(y.$$.fragment, t), Y(A.$$.fragment, t), Y(I.$$.fragment, t), Y(U.$$.fragment, t), Y(M.$$.fragment, t), F = !0); }, o(t) { J(y.$$.fragment, t), J(A.$$.fragment, t), J(I.$$.fragment, t), J(U.$$.fragment, t), J(M.$$.fragment, t), F = !1; }, d(t) { t && g(n), tt(y), tt(A), tt(I), tt(U), tt(M); } }; }
    class De extends nt {
        constructor(t) { super(), et(this, t, null, ze, a, {}); }
    }
    function je(t) { let e, n; return e = new Se({}), { c() { X(e.$$.fragment); }, m(t, o) { Z(e, t, o), n = !0; }, i(t) { n || (Y(e.$$.fragment, t), n = !0); }, o(t) { J(e.$$.fragment, t), n = !1; }, d(t) { tt(e, t); } }; }
    function Ne(t) { let e, n; return e = new De({}), { c() { X(e.$$.fragment); }, m(t, o) { Z(e, t, o), n = !0; }, i(t) { n || (Y(e.$$.fragment, t), n = !0); }, o(t) { J(e.$$.fragment, t), n = !1; }, d(t) { tt(e, t); } }; }
    function Me(t) { let e, n; return e = new rt({}), { c() { X(e.$$.fragment); }, m(t, o) { Z(e, t, o), n = !0; }, i(t) { n || (Y(e.$$.fragment, t), n = !0); }, o(t) { J(e.$$.fragment, t), n = !1; }, d(t) { tt(e, t); } }; }
    function Fe(t) { let e, n, o, r, s, a, c, i, u; return e = new Ce({}), r = new xe({ props: { path: "/", primary: !0, $$slots: { default: [je] }, $$scope: { ctx: t } } }), a = new xe({ props: { path: "/admin", primary: !1, $$slots: { default: [Ne] }, $$scope: { ctx: t } } }), i = new xe({ props: { path: "/usuarios", primary: !1, $$slots: { default: [Me] }, $$scope: { ctx: t } } }), { c() { X(e.$$.fragment), n = b(), o = v("main"), X(r.$$.fragment), s = b(), X(a.$$.fragment), c = b(), X(i.$$.fragment), w(o, "class", "svelte-1jqqav1"); }, m(t, l) { Z(e, t, l), h(t, n, l), h(t, o, l), Z(r, o, null), m(o, s), Z(a, o, null), m(o, c), Z(i, o, null), u = !0; }, p(t, e) { const n = {}; 1 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n); const o = {}; 1 & e && (o.$$scope = { dirty: e, ctx: t }), a.$set(o); const s = {}; 1 & e && (s.$$scope = { dirty: e, ctx: t }), i.$set(s); }, i(t) { u || (Y(e.$$.fragment, t), Y(r.$$.fragment, t), Y(a.$$.fragment, t), Y(i.$$.fragment, t), u = !0); }, o(t) { J(e.$$.fragment, t), J(r.$$.fragment, t), J(a.$$.fragment, t), J(i.$$.fragment, t), u = !1; }, d(t) { tt(e, t), t && g(n), t && g(o), tt(r), tt(a), tt(i); } }; }
    function He(t) { let e, n; return e = new ae({ props: { $$slots: { default: [Fe] }, $$scope: { ctx: t } } }), { c() { X(e.$$.fragment); }, m(t, o) { Z(e, t, o), n = !0; }, p(t, [n]) { const o = {}; 1 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o); }, i(t) { n || (Y(e.$$.fragment, t), n = !0); }, o(t) { J(e.$$.fragment, t), n = !1; }, d(t) { tt(e, t); } }; }
    return new class extends nt {
        constructor(t) { super(), et(this, t, null, He, a, {}); }
    }({ target: document.body });
}();
//# sourceMappingURL=bundle.js.map

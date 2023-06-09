import { bn as Pe, bp as Le, cF as Dt, cG as Pt, cH as Lt, cI as Ht, cJ as At, cK as Ot, cL as Mt, cM as Ft, cN as Nt, cO as $t, cP as jt, cQ as Ut, cR as Gt, cS as W, a0 as Q, cT as zt, b2 as q, a3 as he, cU as k, cV as qt, cW as Fe, aU as Bt, cX as Ne, N as s, cY as $e, as as B, cZ as pe, b1 as P, c_ as se, c$ as Vt, d0 as je, d1 as re, d2 as Ue, d3 as Ge, an as de, d4 as Ke, d5 as Wt, d6 as gt, d7 as Je, ah as Ye, d8 as Kt, d9 as Jt, _ as Yt, a as A, da as Zt, E as Xt, p as Qt, C as en, db as tn, g as nn, dc as on, cw as sn, bx as rn, dd as cn, de as an, a8 as ln, df as ke, dg as hn, dh as dn, di as un, dj as fn, dk as mn, dl as gn, dm as Ze, v as pn, d as Xe, dn as Tn, o as yn, bC as Sn } from "./verifyPrepare-e26a1ce7.js";
import { T as Te, p as Qe, a as Cn, b as In, c as ce, t as bn, S as et, E as F, V as Se, d as Ce, e as Ie, g as En, f as pt, h as ye, i as y } from "./tokenClassificationRegistry-e12b58f1.js";
import { g as ze } from "./jsonErrorMessages-5a450d8c.js";
const He = {};
function R(r, e) {
  let t = He[r];
  t || (He[r] = t = []), t.push(e);
}
function Tt(r, e) {
  for (const t of r)
    if (e.textMateRules.push(t), !t.scope) {
      const n = t.settings;
      if (!n)
        t.settings = {};
      else
        for (const o in n) {
          const i = o, c = He[i];
          if (c) {
            const a = n[i];
            if (typeof a == "string") {
              const h = W.fromHex(a);
              for (const u of c)
                e.colors[u] = h;
            }
          }
          i !== "foreground" && i !== "background" && i !== "fontStyle" && delete n[i];
        }
    }
}
R("background", Pe);
R("foreground", Le);
R("selection", Dt);
R("inactiveSelection", Pt);
R("selectionHighlightColor", Lt);
R("findMatchHighlight", Ht);
R("currentFindMatchHighlight", At);
R("hoverHighlight", Ot);
R("wordHighlight", "editor.wordHighlightBackground");
R("wordHighlightStrong", "editor.wordHighlightStrongBackground");
R("findRangeHighlight", Mt);
R("findMatchHighlight", "peekViewResult.matchHighlightBackground");
R("referenceHighlight", "peekViewEditor.matchHighlightBackground");
R("lineHighlight", Ft);
R("rangeHighlight", Nt);
R("caret", $t);
R("invisibles", jt);
R("guide", Ut);
R("activeGuide", Gt);
const kn = [
  "ansiBlack",
  "ansiRed",
  "ansiGreen",
  "ansiYellow",
  "ansiBlue",
  "ansiMagenta",
  "ansiCyan",
  "ansiWhite",
  "ansiBrightBlack",
  "ansiBrightRed",
  "ansiBrightGreen",
  "ansiBrightYellow",
  "ansiBrightBlue",
  "ansiBrightMagenta",
  "ansiBrightCyan",
  "ansiBrightWhite"
];
for (const r of kn)
  R(r, "terminal." + r);
function wn(r) {
  return xn(r, null, null);
}
function xn(r, e, t) {
  const n = r.length;
  let o = 0, i = 1, c = 0;
  n > 0 && r.charCodeAt(0) === 65279 && (o = 1);
  function a(l) {
    if (t === null)
      o = o + l;
    else
      for (; l > 0; )
        r.charCodeAt(o) === 10 ? (o++, i++, c = 0) : (o++, c++), l--;
  }
  function h(l) {
    t === null ? o = l : a(l - o);
  }
  function u() {
    for (; o < n; ) {
      const l = r.charCodeAt(o);
      if (l !== 32 && l !== 9 && l !== 13 && l !== 10)
        break;
      a(1);
    }
  }
  function f(l) {
    return r.substr(o, l.length) === l ? (a(l.length), !0) : !1;
  }
  function g(l) {
    const E = r.indexOf(l, o);
    h(E !== -1 ? E + l.length : n);
  }
  function S(l) {
    const E = r.indexOf(l, o);
    if (E !== -1) {
      const x = r.substring(o, E);
      return h(E + l.length), x;
    } else {
      const x = r.substr(o);
      return h(n), x;
    }
  }
  let d = 0, p = null;
  const T = [], C = [];
  let m = null;
  function I(l, E) {
    T.push(d), C.push(p), d = l, p = E;
  }
  function H() {
    if (T.length === 0)
      return b("illegal state stack");
    d = T.pop(), p = C.pop();
  }
  function b(l) {
    throw new Error("Near offset " + o + ": " + l + " ~~~" + r.substr(o, 50) + "~~~");
  }
  const U = {
    enterDict: function() {
      if (m === null)
        return b("missing <key>");
      const l = {};
      t !== null && (l[t] = {
        filename: e,
        line: i,
        char: c
      }), p[m] = l, m = null, I(1, l);
    },
    enterArray: function() {
      if (m === null)
        return b("missing <key>");
      const l = [];
      p[m] = l, m = null, I(2, l);
    }
  }, O = {
    enterDict: function() {
      const l = {};
      t !== null && (l[t] = {
        filename: e,
        line: i,
        char: c
      }), p.push(l), I(1, l);
    },
    enterArray: function() {
      const l = [];
      p.push(l), I(2, l);
    }
  };
  function te() {
    d === 1 ? U.enterDict() : d === 2 ? O.enterDict() : (p = {}, t !== null && (p[t] = {
      filename: e,
      line: i,
      char: c
    }), I(1, p));
  }
  function M() {
    if (d === 1)
      H();
    else
      return b("unexpected </dict>");
  }
  function ne() {
    d === 1 ? U.enterArray() : d === 2 ? O.enterArray() : (p = [], I(2, p));
  }
  function Z() {
    if (d === 1)
      return b("unexpected </array>");
    if (d === 2)
      H();
    else
      return b("unexpected </array>");
  }
  function v(l) {
    if (d === 1) {
      if (m !== null)
        return b("too many <key>");
      m = l;
    } else
      return b("unexpected <key>");
  }
  function w(l) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function N(l) {
    if (isNaN(l))
      return b("cannot parse float");
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function $(l) {
    if (isNaN(l))
      return b("cannot parse integer");
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function j(l) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function Rt(l) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function We(l) {
    if (d === 1) {
      if (m === null)
        return b("missing <key>");
      p[m] = l, m = null;
    } else
      d === 2 ? p.push(l) : p = l;
  }
  function vt(l) {
    return l.replace(/&#([0-9]+);/g, function(E, x) {
      return String.fromCodePoint(parseInt(x, 10));
    }).replace(/&#x([0-9a-f]+);/g, function(E, x) {
      return String.fromCodePoint(parseInt(x, 16));
    }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function(E) {
      switch (E) {
        case "&amp;":
          return "&";
        case "&lt;":
          return "<";
        case "&gt;":
          return ">";
        case "&quot;":
          return '"';
        case "&apos;":
          return "'";
      }
      return E;
    });
  }
  function _t() {
    let l = S(">"), E = !1;
    return l.charCodeAt(l.length - 1) === 47 && (E = !0, l = l.substring(0, l.length - 1)), {
      name: l.trim(),
      isClosed: E
    };
  }
  function G(l) {
    if (l.isClosed)
      return "";
    const E = S("</");
    return g(">"), vt(E);
  }
  for (; o < n && (u(), !(o >= n)); ) {
    const l = r.charCodeAt(o);
    if (a(1), l !== 60)
      return b("expected <");
    if (o >= n)
      return b("unexpected end of input");
    const E = r.charCodeAt(o);
    if (E === 63) {
      a(1), g("?>");
      continue;
    }
    if (E === 33) {
      if (a(1), f("--")) {
        g("-->");
        continue;
      }
      g(">");
      continue;
    }
    if (E === 47) {
      if (a(1), u(), f("plist")) {
        g(">");
        continue;
      }
      if (f("dict")) {
        g(">"), M();
        continue;
      }
      if (f("array")) {
        g(">"), Z();
        continue;
      }
      return b("unexpected closed tag");
    }
    const x = _t();
    switch (x.name) {
      case "dict":
        te(), x.isClosed && M();
        continue;
      case "array":
        ne(), x.isClosed && Z();
        continue;
      case "key":
        v(G(x));
        continue;
      case "string":
        w(G(x));
        continue;
      case "real":
        N(parseFloat(G(x)));
        continue;
      case "integer":
        $(parseInt(G(x), 10));
        continue;
      case "date":
        j(new Date(G(x)));
        continue;
      case "data":
        Rt(G(x));
        continue;
      case "true":
        G(x), We(!0);
        continue;
      case "false":
        G(x), We(!1);
        continue;
    }
    if (!/^plist/.test(x.name))
      return b("unexpected opened tag " + x.name);
  }
  return p;
}
function tt(r, e, t) {
  const n = Rn(r);
  let o = n.next();
  for (; o !== null; ) {
    let h = 0;
    if (o.length === 2 && o.charAt(1) === ":") {
      switch (o.charAt(0)) {
        case "R":
          h = 1;
          break;
        case "L":
          h = -1;
          break;
        default:
          console.log(`Unknown priority ${o} in scope selector`);
      }
      o = n.next();
    }
    const u = c();
    if (u && t.push({ matcher: u, priority: h }), o !== ",")
      break;
    o = n.next();
  }
  function i() {
    if (o === "-") {
      o = n.next();
      const h = i();
      return h ? (u) => h(u) < 0 ? 0 : -1 : null;
    }
    if (o === "(") {
      o = n.next();
      const h = a();
      return o === ")" && (o = n.next()), h;
    }
    if (nt(o)) {
      const h = [];
      do
        h.push(o), o = n.next();
      while (nt(o));
      return (u) => e(h, u);
    }
    return null;
  }
  function c() {
    let h = i();
    if (!h)
      return null;
    const u = [];
    for (; h; )
      u.push(h), h = i();
    return (f) => {
      let g = u[0](f);
      for (let S = 1; g >= 0 && S < u.length; S++)
        g = Math.min(g, u[S](f));
      return g;
    };
  }
  function a() {
    let h = c();
    if (!h)
      return null;
    const u = [];
    for (; h && (u.push(h), o === "|" || o === ","); ) {
      do
        o = n.next();
      while (o === "|" || o === ",");
      h = c();
    }
    return (f) => {
      let g = u[0](f);
      for (let S = 1; S < u.length; S++)
        g = Math.max(g, u[S](f));
      return g;
    };
  }
}
function nt(r) {
  return !!r && !!r.match(/[\w\.:]+/);
}
function Rn(r) {
  const e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let t = e.exec(r);
  return {
    next: () => {
      if (!t)
        return null;
      const n = t[0];
      return t = e.exec(r), n;
    }
  };
}
const vn = Q.as(zt.ColorContribution), ue = En(), ot = {
  comments: ["comment", "punctuation.definition.comment"],
  strings: ["string", "meta.embedded.assembly"],
  keywords: ["keyword - keyword.operator", "keyword.control", "storage", "storage.type"],
  numbers: ["constant.numeric"],
  types: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
  functions: ["entity.name.function", "support.function"],
  variables: ["variable", "entity.name.variable"]
};
class L {
  constructor(e, t, n) {
    this.themeTokenColors = [], this.customTokenColors = [], this.colorMap = {}, this.customColorMap = {}, this.semanticTokenRules = [], this.customSemanticTokenRules = [], this.textMateThemingRules = void 0, this.tokenColorIndex = void 0, this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1;
  }
  get semanticHighlighting() {
    return this.customSemanticHighlighting !== void 0 ? this.customSemanticHighlighting : this.customSemanticHighlightingDeprecated !== void 0 ? this.customSemanticHighlightingDeprecated : !!this.themeSemanticHighlighting;
  }
  get tokenColors() {
    if (!this.textMateThemingRules) {
      let i = function(c) {
        c.scope && c.settings && (c.scope === "token.info-token" && (o = !0), e.push({ scope: c.scope, settings: { foreground: X(c.settings.foreground), background: X(c.settings.background), fontStyle: c.settings.fontStyle } }));
      };
      const e = [], t = this.getColor(Le) || this.getDefault(Le), n = this.getColor(Pe) || this.getDefault(Pe);
      e.push({
        settings: {
          foreground: X(t),
          background: X(n)
        }
      });
      let o = !1;
      this.themeTokenColors.forEach(i), this.customTokenColors.forEach(i), o || Dn[this.type].forEach(i), this.textMateThemingRules = e;
    }
    return this.textMateThemingRules;
  }
  getColor(e, t) {
    let n = this.customColorMap[e];
    return n || (n = this.colorMap[e], t !== !1 && q(n) && (n = this.getDefault(e)), n);
  }
  getTokenStyle(e, t, n, o = !0, i = {}) {
    const c = {
      foreground: void 0,
      bold: void 0,
      underline: void 0,
      strikethrough: void 0,
      italic: void 0
    }, a = {
      foreground: -1,
      bold: -1,
      underline: -1,
      strikethrough: -1,
      italic: -1
    };
    function h(g, S, d) {
      S.foreground && a.foreground <= g && (a.foreground = g, c.foreground = S.foreground, i.foreground = d);
      for (const p of ["bold", "underline", "strikethrough", "italic"]) {
        const T = p, C = S[T];
        C !== void 0 && a[T] <= g && (a[T] = g, c[T] = C, i[T] = d);
      }
    }
    function u(g) {
      const S = g.selector.match(e, t, n);
      S >= 0 && h(S, g.style, g);
    }
    this.semanticTokenRules.forEach(u), this.customSemanticTokenRules.forEach(u);
    let f = !1;
    for (const g in a) {
      const S = g;
      a[S] === -1 ? f = !0 : a[S] = Number.MAX_VALUE;
    }
    if (f)
      for (const g of ue.getTokenStylingDefaultRules()) {
        const S = g.selector.match(e, t, n);
        if (S >= 0) {
          let d;
          if (g.defaults.scopesToProbe && (d = this.resolveScopes(g.defaults.scopesToProbe), d && h(S, d, g.defaults.scopesToProbe)), !d && o !== !1) {
            const p = g.defaults[this.type];
            d = this.resolveTokenStyleValue(p), d && h(S, d, p);
          }
        }
      }
    return Te.fromData(c);
  }
  resolveTokenStyleValue(e) {
    if (e !== void 0) {
      if (typeof e == "string") {
        const { type: t, modifiers: n, language: o } = Qe(e, "");
        return this.getTokenStyle(t, n, o);
      } else if (typeof e == "object")
        return e;
    }
  }
  getTokenColorIndex() {
    if (!this.tokenColorIndex) {
      const e = new Hn();
      this.tokenColors.forEach((t) => {
        e.add(t.settings.foreground), e.add(t.settings.background);
      }), this.semanticTokenRules.forEach((t) => e.add(t.style.foreground)), ue.getTokenStylingDefaultRules().forEach((t) => {
        const n = t.defaults[this.type];
        n && typeof n == "object" && e.add(n.foreground);
      }), this.customSemanticTokenRules.forEach((t) => e.add(t.style.foreground)), this.tokenColorIndex = e;
    }
    return this.tokenColorIndex;
  }
  get tokenColorMap() {
    return this.getTokenColorIndex().asArray();
  }
  getTokenStyleMetadata(e, t, n, o = !0, i = {}) {
    const { type: c, language: a } = Qe(e, n), h = this.getTokenStyle(c, t, a, o, i);
    if (h)
      return {
        foreground: this.getTokenColorIndex().get(h.foreground),
        bold: h.bold,
        underline: h.underline,
        strikethrough: h.strikethrough,
        italic: h.italic
      };
  }
  getTokenStylingRuleScope(e) {
    if (this.customSemanticTokenRules.indexOf(e) !== -1)
      return "setting";
    if (this.semanticTokenRules.indexOf(e) !== -1)
      return "theme";
  }
  getDefault(e) {
    return vn.resolveDefaultColor(e, this);
  }
  resolveScopes(e, t) {
    this.themeTokenScopeMatchers || (this.themeTokenScopeMatchers = this.themeTokenColors.map(ct)), this.customTokenScopeMatchers || (this.customTokenScopeMatchers = this.customTokenColors.map(ct));
    for (const n of e) {
      let f = function(g, S) {
        for (let d = 0; d < g.length; d++) {
          const p = g[d](n);
          if (p >= 0) {
            const T = S[d], C = S[d].settings;
            p >= c && C.foreground && (o = C.foreground, c = p, u = T), p >= a && P(C.fontStyle) && (i = C.fontStyle, a = p, h = T);
          }
        }
      }, o, i, c = -1, a = -1, h, u;
      if (f(this.themeTokenScopeMatchers, this.themeTokenColors), f(this.customTokenScopeMatchers, this.customTokenColors), o !== void 0 || i !== void 0)
        return t && (t.foreground = u, t.bold = t.italic = t.underline = t.strikethrough = h, t.scope = n), Te.fromSettings(o, i);
    }
  }
  defines(e) {
    return this.customColorMap.hasOwnProperty(e) || this.colorMap.hasOwnProperty(e);
  }
  setCustomizations(e) {
    this.setCustomColors(e.colorCustomizations), this.setCustomTokenColors(e.tokenColorCustomizations), this.setCustomSemanticTokenColors(e.semanticTokenColorCustomizations);
  }
  setCustomColors(e) {
    this.customColorMap = {}, this.overwriteCustomColors(e);
    const t = this.getThemeSpecificColors(e);
    he(t) && this.overwriteCustomColors(t), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
  }
  overwriteCustomColors(e) {
    for (const t in e) {
      const n = e[t];
      typeof n == "string" && (this.customColorMap[t] = W.fromHex(n));
    }
  }
  setCustomTokenColors(e) {
    this.customTokenColors = [], this.customSemanticHighlightingDeprecated = void 0, this.addCustomTokenColors(e);
    const t = this.getThemeSpecificColors(e);
    he(t) && this.addCustomTokenColors(t), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
  }
  setCustomSemanticTokenColors(e) {
    if (this.customSemanticTokenRules = [], this.customSemanticHighlighting = void 0, e) {
      this.customSemanticHighlighting = e.enabled, e.rules && this.readSemanticTokenRules(e.rules);
      const t = this.getThemeSpecificColors(e);
      he(t) && (t.enabled !== void 0 && (this.customSemanticHighlighting = t.enabled), t.rules && this.readSemanticTokenRules(t.rules));
    }
    this.tokenColorIndex = void 0, this.textMateThemingRules = void 0;
  }
  isThemeScope(e) {
    return e.charAt(0) === Cn && e.charAt(e.length - 1) === In;
  }
  isThemeScopeMatch(e) {
    const t = e.charAt(0), n = e.charAt(e.length - 1), o = e.slice(0, -1), i = e.slice(1, -1), c = e.slice(1);
    return e === this.settingsId || this.settingsId.includes(i) && t === ce && n === ce || this.settingsId.startsWith(o) && n === ce || this.settingsId.endsWith(c) && t === ce;
  }
  getThemeSpecificColors(e) {
    let t;
    for (const n in e) {
      const o = e[n];
      if (this.isThemeScope(n) && o instanceof Object && !Array.isArray(o)) {
        const i = n.match(bn) || [];
        for (const c of i) {
          const a = c.substring(1, c.length - 1);
          if (this.isThemeScopeMatch(a)) {
            t || (t = {});
            const h = o;
            for (const u in h) {
              const f = t[u], g = h[u];
              Array.isArray(f) && Array.isArray(g) ? t[u] = f.concat(g) : g && (t[u] = g);
            }
          }
        }
      }
    }
    return t;
  }
  readSemanticTokenRules(e) {
    for (const t in e)
      if (!this.isThemeScope(t))
        try {
          const n = St(t, e[t]);
          n && this.customSemanticTokenRules.push(n);
        } catch {
        }
  }
  addCustomTokenColors(e) {
    for (const t in ot) {
      const n = t, o = e[n];
      if (o) {
        const i = typeof o == "string" ? { foreground: o } : o, c = ot[n];
        for (const a of c)
          this.customTokenColors.push({ scope: a, settings: i });
      }
    }
    if (Array.isArray(e.textMateRules))
      for (const t of e.textMateRules)
        t.scope && t.settings && this.customTokenColors.push(t);
    e.semanticHighlighting !== void 0 && (this.customSemanticHighlightingDeprecated = e.semanticHighlighting);
  }
  ensureLoaded(e) {
    return this.isLoaded ? Promise.resolve(void 0) : this.load(e);
  }
  reload(e) {
    return this.load(e);
  }
  load(e) {
    if (!this.location)
      return Promise.resolve(void 0);
    this.themeTokenColors = [], this.clearCaches();
    const t = {
      colors: {},
      textMateRules: [],
      semanticTokenRules: [],
      semanticHighlighting: !1
    };
    return yt(e, this.location, t).then((n) => {
      this.isLoaded = !0, this.semanticTokenRules = t.semanticTokenRules, this.colorMap = t.colors, this.themeTokenColors = t.textMateRules, this.themeSemanticHighlighting = t.semanticHighlighting;
    });
  }
  clearCaches() {
    this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.themeTokenScopeMatchers = void 0, this.customTokenScopeMatchers = void 0;
  }
  toStorage(e) {
    const t = {};
    for (const o in this.colorMap)
      t[o] = W.Format.CSS.formatHexA(this.colorMap[o], !0);
    const n = JSON.stringify({
      id: this.id,
      label: this.label,
      settingsId: this.settingsId,
      themeTokenColors: this.themeTokenColors.map((o) => ({ settings: o.settings, scope: o.scope })),
      semanticTokenRules: this.semanticTokenRules.map(et.toJSONObject),
      extensionData: F.toJSONObject(this.extensionData),
      themeSemanticHighlighting: this.themeSemanticHighlighting,
      colorMap: t,
      watch: this.watch
    });
    e.store(L.STORAGE_KEY, n, 0, 0);
  }
  get baseTheme() {
    return this.classNames[0];
  }
  get classNames() {
    return this.id.split(" ");
  }
  get type() {
    switch (this.baseTheme) {
      case Ie:
        return k.LIGHT;
      case Ce:
        return k.HIGH_CONTRAST_DARK;
      case Se:
        return k.HIGH_CONTRAST_LIGHT;
      default:
        return k.DARK;
    }
  }
  static createUnloadedThemeForThemeType(e, t) {
    return L.createUnloadedTheme(qt(e), t);
  }
  static createUnloadedTheme(e, t) {
    const n = new L(e, "", "__" + e);
    if (n.isLoaded = !1, n.themeTokenColors = [], n.watch = !1, t)
      for (const o in t)
        n.colorMap[o] = W.fromHex(t[o]);
    return n;
  }
  static createLoadedEmptyTheme(e, t) {
    const n = new L(e, "", t);
    return n.isLoaded = !0, n.themeTokenColors = [], n.watch = !1, n;
  }
  static fromStorageData(e) {
    const t = e.get(L.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new L("", "", "");
        for (const i in n)
          switch (i) {
            case "colorMap": {
              const c = n[i];
              for (const a in c)
                o.colorMap[a] = W.fromHex(c[a]);
              break;
            }
            case "themeTokenColors":
            case "id":
            case "label":
            case "settingsId":
            case "watch":
            case "themeSemanticHighlighting":
              o[i] = n[i];
              break;
            case "semanticTokenRules": {
              const c = n[i];
              if (Array.isArray(c))
                for (const a of c) {
                  const h = et.fromJSONObject(ue, a);
                  h && o.semanticTokenRules.push(h);
                }
              break;
            }
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        return !o.id || !o.settingsId ? void 0 : o;
      } catch {
        return;
      }
  }
  static fromExtensionTheme(e, t, n) {
    const o = e.uiTheme || "vs-dark", i = _n(n.extensionId, e.path), c = `${o} ${i}`, a = e.label || Fe(e.path), h = e.id || a, u = new L(c, a, h);
    return u.description = e.description, u.watch = e._watch === !0, u.location = t, u.extensionData = n, u.isLoaded = !1, u;
  }
}
L.STORAGE_KEY = "colorThemeData";
function _n(r, e) {
  e.startsWith("./") && (e = e.substr(2));
  let t = `${r}-${e}`;
  return t = t.replace(/[^_a-zA-Z0-9-]/g, "-"), t.charAt(0).match(/[0-9-]/) && (t = "_" + t), t;
}
async function yt(r, e, t) {
  if (Bt(e) === ".json") {
    const n = await r.readExtensionResource(e), o = [], i = Ne(n, o);
    if (o.length > 0)
      return Promise.reject(new Error(s(
        "error.cannotparsejson",
        "Problems parsing JSON theme file: {0}",
        o.map((u) => ze(u.error)).join(", ")
      )));
    if ($e(i) !== "object")
      return Promise.reject(new Error(s(
        "error.invalidformat",
        "Invalid format for JSON theme file: Object expected."
      )));
    if (i.include && await yt(r, B(pe(e), i.include), t), Array.isArray(i.settings))
      return Tt(i.settings, t), null;
    t.semanticHighlighting = t.semanticHighlighting || i.semanticHighlighting;
    const c = i.colors;
    if (c) {
      if (typeof c != "object")
        return Promise.reject(new Error(s(
          { key: "error.invalidformat.colors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'colors' is not of type 'object'.",
          e.toString()
        )));
      for (const u in c)
        typeof c[u] == "string" && (t.colors[u] = W.fromHex(c[u]));
    }
    const a = i.tokenColors;
    if (a)
      if (Array.isArray(a))
        t.textMateRules.push(...a);
      else if (typeof a == "string")
        await it(r, B(pe(e), a), t);
      else
        return Promise.reject(new Error(s(
          { key: "error.invalidformat.tokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
          "Problem parsing color theme file: {0}. Property 'tokenColors' should be either an array specifying colors or a path to a TextMate theme file",
          e.toString()
        )));
    const h = i.semanticTokenColors;
    if (h && typeof h == "object")
      for (const u in h)
        try {
          const f = St(u, h[u]);
          f && t.semanticTokenRules.push(f);
        } catch {
          return Promise.reject(new Error(s(
            { key: "error.invalidformat.semanticTokenColors", comment: ["{0} will be replaced by a path. Values in quotes should not be translated."] },
            "Problem parsing color theme file: {0}. Property 'semanticTokenColors' contains a invalid selector",
            e.toString()
          )));
        }
  } else
    return it(r, e, t);
}
function it(r, e, t) {
  return r.readExtensionResource(e).then((n) => {
    try {
      const i = wn(n).settings;
      return Array.isArray(i) ? (Tt(i, t), Promise.resolve(null)) : Promise.reject(new Error(s(
        "error.plist.invalidformat",
        "Problem parsing tmTheme file: {0}. 'settings' is not array."
      )));
    } catch (o) {
      return Promise.reject(new Error(s("error.cannotparse", "Problems parsing tmTheme file: {0}", o.message)));
    }
  }, (n) => Promise.reject(new Error(s(
    "error.cannotload",
    "Problems loading tmTheme file {0}: {1}",
    e.toString(),
    n.message
  ))));
}
const Dn = {
  light: [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  dark: [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#f44747" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ],
  hcLight: [
    { scope: "token.info-token", settings: { foreground: "#316bcd" } },
    { scope: "token.warn-token", settings: { foreground: "#cd9731" } },
    { scope: "token.error-token", settings: { foreground: "#cd3131" } },
    { scope: "token.debug-token", settings: { foreground: "#800080" } }
  ],
  hcDark: [
    { scope: "token.info-token", settings: { foreground: "#6796e6" } },
    { scope: "token.warn-token", settings: { foreground: "#008000" } },
    { scope: "token.error-token", settings: { foreground: "#FF0000" } },
    { scope: "token.debug-token", settings: { foreground: "#b267e6" } }
  ]
}, st = (r) => -1;
function rt(r, e) {
  function t(i, c) {
    for (let a = c - 1; a >= 0; a--)
      if (Pn(i, r[a]))
        return a;
    return -1;
  }
  if (e.length < r.length)
    return -1;
  let n = e.length - 1, o = t(e[n--], r.length);
  if (o >= 0) {
    const i = (o + 1) * 65536 + r[o].length;
    for (; n >= 0; )
      if (o = t(e[n--], o), o === -1)
        return -1;
    return i;
  }
  return -1;
}
function Pn(r, e) {
  if (!r)
    return !1;
  if (r === e)
    return !0;
  const t = e.length;
  return r.length > t && r.substr(0, t) === e && r[t] === ".";
}
function ct(r) {
  const e = r.scope;
  if (!e || !r.settings)
    return st;
  const t = [];
  if (Array.isArray(e))
    for (const n of e)
      tt(n, rt, t);
  else
    tt(e, rt, t);
  return t.length === 0 ? st : (n) => {
    let o = t[0].matcher(n);
    for (let i = 1; i < t.length; i++)
      o = Math.max(o, t[i].matcher(n));
    return o;
  };
}
function St(r, e) {
  const t = ue.parseTokenSelector(r);
  let n;
  if (typeof e == "string" ? n = Te.fromSettings(e, void 0) : Ln(e) && (n = Te.fromSettings(e.foreground, e.fontStyle, e.bold, e.underline, e.strikethrough, e.italic)), n)
    return { selector: t, style: n };
}
function Ln(r) {
  return r && (P(r.foreground) || P(r.fontStyle) || se(r.italic) || se(r.underline) || se(r.strikethrough) || se(r.bold));
}
class Hn {
  constructor() {
    this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null);
  }
  add(e) {
    if (e = X(e), e === void 0)
      return 0;
    let t = this._color2id[e];
    return t || (t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t);
  }
  get(e) {
    if (e = X(e), e === void 0)
      return 0;
    const t = this._color2id[e];
    return t || (console.log(`Color ${e} not in index.`), 0);
  }
  asArray() {
    return this._id2color.slice(0);
  }
}
function X(r) {
  if (!r)
    return;
  typeof r != "string" && (r = W.Format.CSS.formatHexA(r, !0));
  const e = r.length;
  if (r.charCodeAt(0) !== 35 || e !== 4 && e !== 5 && e !== 7 && e !== 9)
    return;
  const t = [35];
  for (let n = 1; n < e; n++) {
    const o = An(r.charCodeAt(n));
    if (!o)
      return;
    t.push(o), (e === 4 || e === 5) && t.push(o);
  }
  return t.length === 9 && t[7] === 70 && t[8] === 70 && (t.length = 7), String.fromCharCode(...t);
}
function An(r) {
  return r >= 48 && r <= 57 || r >= 65 && r <= 70 ? r : r >= 97 && r <= 102 ? r - 97 + 65 : 0;
}
const qe = "^([\\w_-]+)$", Be = "^(normal|italic|(oblique[ \\w\\s-]+))$", Ve = "^(normal|bold|lighter|bolder|(\\d{0-1000}))$", at = "^([\\w .%_-]+)$", On = "^woff|woff2|truetype|opentype|embedded-opentype|svg$", Mn = "vscode://schemas/product-icon-theme", Fn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  properties: {
    fonts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: s("schema.id", "The ID of the font."),
            pattern: qe,
            patternErrorMessage: s(
              "schema.id.formatError",
              "The ID must only contain letters, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: s("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: s(
                    "schema.font-path",
                    "The font path, relative to the current product icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: s("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: s(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            anyOf: [
              { enum: ["normal", "bold", "lighter", "bolder"] },
              { type: "string", pattern: Ve }
            ]
          },
          style: {
            type: "string",
            description: s(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            anyOf: [
              { enum: ["normal", "italic", "oblique"] },
              { type: "string", pattern: Be }
            ]
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      description: s("schema.iconDefinitions", "Association of icon name to a font character."),
      $ref: Vt
    }
  }
};
function Nn() {
  Q.as(je.JSONContribution).registerSchema(Mn, Fn);
}
const $n = "vscode://schemas/icon-theme", jn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  definitions: {
    folderExpanded: {
      type: "string",
      description: s(
        "schema.folderExpanded",
        "The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown."
      )
    },
    folder: {
      type: "string",
      description: s(
        "schema.folder",
        "The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders."
      )
    },
    file: {
      type: "string",
      description: s(
        "schema.file",
        "The default file icon, shown for all files that don't match any extension, filename or language id."
      )
    },
    folderNames: {
      type: "object",
      description: s(
        "schema.folderNames",
        "Associates folder names to icons. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: s("schema.folderName", "The ID of the icon definition for the association.")
      }
    },
    folderNamesExpanded: {
      type: "object",
      description: s(
        "schema.folderNamesExpanded",
        "Associates folder names to icons for expanded folders. The object key is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: s(
          "schema.folderNameExpanded",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileExtensions: {
      type: "object",
      description: s(
        "schema.fileExtensions",
        "Associates file extensions to icons. The object key is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: s(
          "schema.fileExtension",
          "The ID of the icon definition for the association."
        )
      }
    },
    fileNames: {
      type: "object",
      description: s(
        "schema.fileNames",
        "Associates file names to icons. The object key is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive."
      ),
      additionalProperties: {
        type: "string",
        description: s("schema.fileName", "The ID of the icon definition for the association.")
      }
    },
    languageIds: {
      type: "object",
      description: s(
        "schema.languageIds",
        "Associates languages to icons. The object key is the language id as defined in the language contribution point."
      ),
      additionalProperties: {
        type: "string",
        description: s("schema.languageId", "The ID of the icon definition for the association.")
      }
    },
    associations: {
      type: "object",
      properties: {
        folderExpanded: {
          $ref: "#/definitions/folderExpanded"
        },
        folder: {
          $ref: "#/definitions/folder"
        },
        file: {
          $ref: "#/definitions/file"
        },
        folderNames: {
          $ref: "#/definitions/folderNames"
        },
        folderNamesExpanded: {
          $ref: "#/definitions/folderNamesExpanded"
        },
        fileExtensions: {
          $ref: "#/definitions/fileExtensions"
        },
        fileNames: {
          $ref: "#/definitions/fileNames"
        },
        languageIds: {
          $ref: "#/definitions/languageIds"
        }
      }
    }
  },
  properties: {
    fonts: {
      type: "array",
      description: s("schema.fonts", "Fonts that are used in the icon definitions."),
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: s("schema.id", "The ID of the font."),
            pattern: qe,
            patternErrorMessage: s(
              "schema.id.formatError",
              "The ID must only contain letter, numbers, underscore and minus."
            )
          },
          src: {
            type: "array",
            description: s("schema.src", "The location of the font."),
            items: {
              type: "object",
              properties: {
                path: {
                  type: "string",
                  description: s(
                    "schema.font-path",
                    "The font path, relative to the current file icon theme file."
                  )
                },
                format: {
                  type: "string",
                  description: s("schema.font-format", "The format of the font."),
                  enum: ["woff", "woff2", "truetype", "opentype", "embedded-opentype", "svg"]
                }
              },
              required: [
                "path",
                "format"
              ]
            }
          },
          weight: {
            type: "string",
            description: s(
              "schema.font-weight",
              "The weight of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight for valid values."
            ),
            pattern: Ve
          },
          style: {
            type: "string",
            description: s(
              "schema.font-style",
              "The style of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-style for valid values."
            ),
            pattern: Be
          },
          size: {
            type: "string",
            description: s(
              "schema.font-size",
              "The default size of the font. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-size for valid values."
            ),
            pattern: at
          }
        },
        required: [
          "id",
          "src"
        ]
      }
    },
    iconDefinitions: {
      type: "object",
      description: s(
        "schema.iconDefinitions",
        "Description of all icons that can be used when associating files to icons."
      ),
      additionalProperties: {
        type: "object",
        description: s(
          "schema.iconDefinition",
          "An icon definition. The object key is the ID of the definition."
        ),
        properties: {
          iconPath: {
            type: "string",
            description: s(
              "schema.iconPath",
              "When using a SVG or PNG: The path to the image. The path is relative to the icon set file."
            )
          },
          fontCharacter: {
            type: "string",
            description: s(
              "schema.fontCharacter",
              "When using a glyph font: The character in the font to use."
            )
          },
          fontColor: {
            type: "string",
            format: "color-hex",
            description: s("schema.fontColor", "When using a glyph font: The color to use.")
          },
          fontSize: {
            type: "string",
            description: s(
              "schema.fontSize",
              "When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition."
            ),
            pattern: at
          },
          fontId: {
            type: "string",
            description: s(
              "schema.fontId",
              "When using a font: The id of the font. If not set, defaults to the first font definition."
            )
          }
        }
      }
    },
    folderExpanded: {
      $ref: "#/definitions/folderExpanded"
    },
    folder: {
      $ref: "#/definitions/folder"
    },
    file: {
      $ref: "#/definitions/file"
    },
    folderNames: {
      $ref: "#/definitions/folderNames"
    },
    folderNamesExpanded: {
      $ref: "#/definitions/folderNamesExpanded"
    },
    fileExtensions: {
      $ref: "#/definitions/fileExtensions"
    },
    fileNames: {
      $ref: "#/definitions/fileNames"
    },
    languageIds: {
      $ref: "#/definitions/languageIds"
    },
    light: {
      $ref: "#/definitions/associations",
      description: s(
        "schema.light",
        "Optional associations for file icons in light color themes."
      )
    },
    highContrast: {
      $ref: "#/definitions/associations",
      description: s(
        "schema.highContrast",
        "Optional associations for file icons in high contrast color themes."
      )
    },
    hidesExplorerArrows: {
      type: "boolean",
      description: s(
        "schema.hidesExplorerArrows",
        "Configures whether the file explorer's arrows should be hidden when this theme is active."
      )
    },
    showLanguageModeIcons: {
      type: "boolean",
      description: s(
        "schema.showLanguageModeIcons",
        "Configures whether the default language icons should be used if the theme does not define an icon for a language."
      )
    }
  }
};
function Un() {
  Q.as(je.JSONContribution).registerSchema($n, jn);
}
class _ {
  constructor(e, t, n) {
    this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1, this.hasFileIcons = !1, this.hasFolderIcons = !1, this.hidesExplorerArrows = !1;
  }
  ensureLoaded(e) {
    return this.isLoaded ? Promise.resolve(this.styleSheetContent) : this.load(e);
  }
  reload(e) {
    return this.load(e);
  }
  load(e) {
    return e.load(this);
  }
  static fromExtensionTheme(e, t, n) {
    const o = n.extensionId + "-" + e.id, i = e.label || Fe(e.path), c = e.id, a = new _(o, i, c);
    return a.description = e.description, a.location = t, a.extensionData = n, a.watch = e._watch, a.isLoaded = !1, a;
  }
  static get noIconTheme() {
    let e = _._noIconTheme;
    return e || (e = _._noIconTheme = new _("", "", null), e.hasFileIcons = !1, e.hasFolderIcons = !1, e.hidesExplorerArrows = !1, e.isLoaded = !0, e.extensionData = void 0, e.watch = !1), e;
  }
  static createUnloadedTheme(e) {
    const t = new _(e, "", "__" + e);
    return t.isLoaded = !1, t.hasFileIcons = !1, t.hasFolderIcons = !1, t.hidesExplorerArrows = !1, t.extensionData = void 0, t.watch = !1, t;
  }
  static fromStorageData(e) {
    const t = e.get(_.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new _("", "", null);
        for (const i in n)
          switch (i) {
            case "id":
            case "label":
            case "description":
            case "settingsId":
            case "styleSheetContent":
            case "hasFileIcons":
            case "hidesExplorerArrows":
            case "hasFolderIcons":
            case "watch":
              o[i] = n[i];
              break;
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        return o;
      } catch {
        return;
      }
  }
  toStorage(e) {
    const t = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      hasFileIcons: this.hasFileIcons,
      hasFolderIcons: this.hasFolderIcons,
      hidesExplorerArrows: this.hidesExplorerArrows,
      extensionData: F.toJSONObject(this.extensionData),
      watch: this.watch
    });
    e.store(_.STORAGE_KEY, t, 0, 1);
  }
}
_.STORAGE_KEY = "iconThemeData";
_._noIconTheme = null;
class Gn {
  constructor(e, t) {
    this.fileService = e, this.languageService = t;
  }
  load(e) {
    return e.location ? this.loadIconThemeDocument(e.location).then((t) => {
      const n = this.processIconThemeDocument(e.id, e.location, t);
      return e.styleSheetContent = n.content, e.hasFileIcons = n.hasFileIcons, e.hasFolderIcons = n.hasFolderIcons, e.hidesExplorerArrows = n.hidesExplorerArrows, e.isLoaded = !0, e.styleSheetContent;
    }) : Promise.resolve(e.styleSheetContent);
  }
  loadIconThemeDocument(e) {
    return this.fileService.readExtensionResource(e).then((t) => {
      const n = [], o = Ne(t, n);
      return n.length > 0 ? Promise.reject(new Error(s(
        "error.cannotparseicontheme",
        "Problems parsing file icons file: {0}",
        n.map((i) => ze(i.error)).join(", ")
      ))) : $e(o) !== "object" ? Promise.reject(new Error(s(
        "error.invalidformat",
        "Invalid format for file icons theme file: Object expected."
      ))) : Promise.resolve(o);
    });
  }
  processIconThemeDocument(e, t, n) {
    const o = { content: "", hasFileIcons: !1, hasFolderIcons: !1, hidesExplorerArrows: !!n.hidesExplorerArrows };
    let i = !1;
    if (!n.iconDefinitions)
      return o;
    const c = {}, a = {}, h = pe(t);
    function u(T) {
      return B(h, T);
    }
    function f(T, C) {
      function m(I, H) {
        if (H) {
          let b = c[H];
          b || (b = c[H] = []), b.push(I);
        }
      }
      if (T) {
        let I = ".show-file-icons";
        C && (I = C + " " + I);
        const H = ".monaco-tl-twistie.collapsible:not(.collapsed) + .monaco-tl-contents";
        T.folder && (m(`${I} .folder-icon::before`, T.folder), o.hasFolderIcons = !0), T.folderExpanded && (m(`${I} ${H} .folder-icon::before`, T.folderExpanded), o.hasFolderIcons = !0);
        const b = T.rootFolder || T.folder, U = T.rootFolderExpanded || T.folderExpanded;
        b && (m(`${I} .rootfolder-icon::before`, b), o.hasFolderIcons = !0), U && (m(`${I} ${H} .rootfolder-icon::before`, U), o.hasFolderIcons = !0), T.file && (m(`${I} .file-icon::before`, T.file), o.hasFileIcons = !0);
        const O = T.folderNames;
        if (O)
          for (const v in O) {
            const w = [], N = ae(v.toLowerCase(), w);
            w.push(`.${z(N)}-name-folder-icon`), m(`${I} ${w.join("")}.folder-icon::before`, O[v]), o.hasFolderIcons = !0;
          }
        const te = T.folderNamesExpanded;
        if (te)
          for (const v in te) {
            const w = [], N = ae(v.toLowerCase(), w);
            w.push(`.${z(N)}-name-folder-icon`), m(`${I} ${H} ${w.join("")}.folder-icon::before`, te[v]), o.hasFolderIcons = !0;
          }
        const M = T.languageIds;
        if (M) {
          !M.jsonc && M.json && (M.jsonc = M.json);
          for (const v in M)
            m(`${I} .${z(v)}-lang-file-icon.file-icon::before`, M[v]), o.hasFileIcons = !0, i = !0, a[v] = !0;
        }
        const ne = T.fileExtensions;
        if (ne)
          for (const v in ne) {
            const w = [], $ = ae(v.toLowerCase(), w).split(".");
            if ($.length) {
              for (let j = 0; j < $.length; j++)
                w.push(`.${z($.slice(j).join("."))}-ext-file-icon`);
              w.push(".ext-file-icon");
            }
            m(`${I} ${w.join("")}.file-icon::before`, ne[v]), o.hasFileIcons = !0, i = !0;
          }
        const Z = T.fileNames;
        if (Z)
          for (const v in Z) {
            const w = [], N = ae(v.toLowerCase(), w);
            w.push(`.${z(N)}-name-file-icon`), w.push(".name-file-icon");
            const $ = N.split(".");
            if ($.length) {
              for (let j = 1; j < $.length; j++)
                w.push(`.${z($.slice(j).join("."))}-ext-file-icon`);
              w.push(".ext-file-icon");
            }
            m(`${I} ${w.join("")}.file-icon::before`, Z[v]), o.hasFileIcons = !0, i = !0;
          }
      }
    }
    if (f(n), f(n.light, ".vs"), f(n.highContrast, ".hc-black"), f(n.highContrast, ".hc-light"), !o.hasFileIcons && !o.hasFolderIcons)
      return o;
    const g = n.showLanguageModeIcons === !0 || i && n.showLanguageModeIcons !== !1, S = [], d = n.fonts, p = /* @__PURE__ */ new Map();
    if (Array.isArray(d)) {
      const T = d[0].size || "150%";
      d.forEach((C) => {
        const m = C.src.map((I) => `${re(u(I.path))} format('${I.format}')`).join(", ");
        S.push(`@font-face { src: ${m}; font-family: '${C.id}'; font-weight: ${C.weight}; font-style: ${C.style}; font-display: block; }`), C.size !== void 0 && C.size !== T && p.set(C.id, C.size);
      }), S.push(`.show-file-icons .file-icon::before, .show-file-icons .folder-icon::before, .show-file-icons .rootfolder-icon::before { font-family: '${d[0].id}'; font-size: ${T}; }`);
    }
    for (const T in c) {
      const C = c[T], m = n.iconDefinitions[T];
      if (m) {
        if (m.iconPath)
          S.push(`${C.join(", ")} { content: ' '; background-image: ${re(u(m.iconPath))}; }`);
        else if (m.fontCharacter || m.fontColor) {
          const I = [];
          m.fontColor && I.push(`color: ${m.fontColor};`), m.fontCharacter && I.push(`content: '${m.fontCharacter}';`);
          const H = m.fontSize ?? (m.fontId ? p.get(m.fontId) : void 0);
          H && I.push(`font-size: ${H};`), m.fontId && I.push(`font-family: ${m.fontId};`), g && I.push("background-image: unset;"), S.push(`${C.join(", ")} { ${I.join(" ")} }`);
        }
      }
    }
    if (g) {
      for (const T of this.languageService.getRegisteredLanguageIds())
        if (!a[T]) {
          const C = this.languageService.getIcon(T);
          if (C) {
            const m = `.show-file-icons .${z(T)}-lang-file-icon.file-icon::before`;
            S.push(`${m} { content: ' '; background-image: ${re(C.dark)}; }`), S.push(`.vs ${m} { content: ' '; background-image: ${re(C.light)}; }`);
          }
        }
    }
    return o.content = S.join(`
`), o;
  }
}
function ae(r, e) {
  const t = r.lastIndexOf("/");
  if (t >= 0) {
    const n = r.substring(0, t);
    return e.push(`.${z(n)}-name-dir-icon`), r.substring(t + 1);
  }
  return r;
}
function z(r) {
  return r = r.replace(/[\11\12\14\15\40]/g, "/"), window.CSS.escape(r);
}
const lt = [
  "comment",
  "comment.block",
  "comment.block.documentation",
  "comment.line",
  "constant",
  "constant.character",
  "constant.character.escape",
  "constant.numeric",
  "constant.numeric.integer",
  "constant.numeric.float",
  "constant.numeric.hex",
  "constant.numeric.octal",
  "constant.other",
  "constant.regexp",
  "constant.rgb-value",
  "emphasis",
  "entity",
  "entity.name",
  "entity.name.class",
  "entity.name.function",
  "entity.name.method",
  "entity.name.section",
  "entity.name.selector",
  "entity.name.tag",
  "entity.name.type",
  "entity.other",
  "entity.other.attribute-name",
  "entity.other.inherited-class",
  "invalid",
  "invalid.deprecated",
  "invalid.illegal",
  "keyword",
  "keyword.control",
  "keyword.operator",
  "keyword.operator.new",
  "keyword.operator.assignment",
  "keyword.operator.arithmetic",
  "keyword.operator.logical",
  "keyword.other",
  "markup",
  "markup.bold",
  "markup.changed",
  "markup.deleted",
  "markup.heading",
  "markup.inline.raw",
  "markup.inserted",
  "markup.italic",
  "markup.list",
  "markup.list.numbered",
  "markup.list.unnumbered",
  "markup.other",
  "markup.quote",
  "markup.raw",
  "markup.underline",
  "markup.underline.link",
  "meta",
  "meta.block",
  "meta.cast",
  "meta.class",
  "meta.function",
  "meta.function-call",
  "meta.preprocessor",
  "meta.return-type",
  "meta.selector",
  "meta.tag",
  "meta.type.annotation",
  "meta.type",
  "punctuation.definition.string.begin",
  "punctuation.definition.string.end",
  "punctuation.separator",
  "punctuation.separator.continuation",
  "punctuation.terminator",
  "storage",
  "storage.modifier",
  "storage.type",
  "string",
  "string.interpolated",
  "string.other",
  "string.quoted",
  "string.quoted.double",
  "string.quoted.other",
  "string.quoted.single",
  "string.quoted.triple",
  "string.regexp",
  "string.unquoted",
  "strong",
  "support",
  "support.class",
  "support.constant",
  "support.function",
  "support.other",
  "support.type",
  "support.type.property-name",
  "support.variable",
  "variable",
  "variable.language",
  "variable.name",
  "variable.other",
  "variable.other.readwrite",
  "variable.parameter"
], be = "vscode://schemas/textmate-colors", zn = `${be}#/definitions/colorGroup`, qn = {
  type: "array",
  definitions: {
    colorGroup: {
      default: "#FF0000",
      anyOf: [
        {
          type: "string",
          format: "color-hex"
        },
        {
          $ref: "#/definitions/settings"
        }
      ]
    },
    settings: {
      type: "object",
      description: s("schema.token.settings", "Colors and styles for the token."),
      properties: {
        foreground: {
          type: "string",
          description: s("schema.token.foreground", "Foreground color for the token."),
          format: "color-hex",
          default: "#ff0000"
        },
        background: {
          type: "string",
          deprecationMessage: s(
            "schema.token.background.warning",
            "Token background colors are currently not supported."
          )
        },
        fontStyle: {
          type: "string",
          description: s(
            "schema.token.fontStyle",
            "Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination. The empty string unsets inherited settings."
          ),
          pattern: "^(\\s*\\b(italic|bold|underline|strikethrough))*\\s*$",
          patternErrorMessage: s(
            "schema.fontStyle.error",
            "Font style must be 'italic', 'bold', 'underline', 'strikethrough' or a combination or the empty string."
          ),
          defaultSnippets: [
            { label: s("schema.token.fontStyle.none", "None (clear inherited style)"), bodyText: '""' },
            { body: "italic" },
            { body: "bold" },
            { body: "underline" },
            { body: "strikethrough" },
            { body: "italic bold" },
            { body: "italic underline" },
            { body: "italic strikethrough" },
            { body: "bold underline" },
            { body: "bold strikethrough" },
            { body: "underline strikethrough" },
            { body: "italic bold underline" },
            { body: "italic bold strikethrough" },
            { body: "italic underline strikethrough" },
            { body: "bold underline strikethrough" },
            { body: "italic bold underline strikethrough" }
          ]
        }
      },
      additionalProperties: !1,
      defaultSnippets: [{ body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" } }]
    }
  },
  items: {
    type: "object",
    defaultSnippets: [{ body: { scope: "${1:keyword.operator}", settings: { foreground: "${2:#FF0000}" } } }],
    properties: {
      name: {
        type: "string",
        description: s("schema.properties.name", "Description of the rule.")
      },
      scope: {
        description: s(
          "schema.properties.scope",
          "Scope selector against which this rule matches."
        ),
        anyOf: [
          {
            enum: lt
          },
          {
            type: "string"
          },
          {
            type: "array",
            items: {
              enum: lt
            }
          },
          {
            type: "array",
            items: {
              type: "string"
            }
          }
        ]
      },
      settings: {
        $ref: "#/definitions/settings"
      }
    },
    required: [
      "settings"
    ],
    additionalProperties: !1
  }
}, Bn = "vscode://schemas/color-theme", Vn = {
  type: "object",
  allowComments: !0,
  allowTrailingCommas: !0,
  properties: {
    colors: {
      description: s("schema.workbenchColors", "Colors in the workbench"),
      $ref: Ue,
      additionalProperties: !1
    },
    tokenColors: {
      anyOf: [
        {
          type: "string",
          description: s(
            "schema.tokenColors.path",
            "Path to a tmTheme file (relative to the current file)."
          )
        },
        {
          description: s("schema.colors", "Colors for syntax highlighting"),
          $ref: be
        }
      ]
    },
    semanticHighlighting: {
      type: "boolean",
      description: s(
        "schema.supportsSemanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      )
    },
    semanticTokenColors: {
      type: "object",
      description: s("schema.semanticTokenColors", "Colors for semantic tokens"),
      $ref: pt
    }
  }
};
function Wn() {
  const r = Q.as(je.JSONContribution);
  r.registerSchema(Bn, Vn), r.registerSchema(be, qn);
}
function Kn() {
  return Ge.registerExtensionPoint({
    extensionPoint: "themes",
    jsonSchema: {
      description: s(
        "vscode.extension.contributes.themes",
        "Contributes textmate color themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { label: "${1:label}", id: "${2:id}", uiTheme: ye, path: "./themes/${3:id}.tmTheme." } }],
        properties: {
          id: {
            description: s(
              "vscode.extension.contributes.themes.id",
              "Id of the color theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: s(
              "vscode.extension.contributes.themes.label",
              "Label of the color theme as shown in the UI."
            ),
            type: "string"
          },
          uiTheme: {
            description: s(
              "vscode.extension.contributes.themes.uiTheme",
              "Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme. 'hc-black' is the dark high contrast theme, 'hc-light' is the light high contrast theme."
            ),
            enum: [Ie, ye, Ce, Se]
          },
          path: {
            description: s(
              "vscode.extension.contributes.themes.path",
              "Path of the tmTheme file. The path is relative to the extension folder and is typically './colorthemes/awesome-color-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "uiTheme"]
      }
    }
  });
}
function Jn() {
  return Ge.registerExtensionPoint({
    extensionPoint: "iconThemes",
    jsonSchema: {
      description: s("vscode.extension.contributes.iconThemes", "Contributes file icon themes."),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./fileicons/${3:id}-icon-theme.json" } }],
        properties: {
          id: {
            description: s(
              "vscode.extension.contributes.iconThemes.id",
              "Id of the file icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: s(
              "vscode.extension.contributes.iconThemes.label",
              "Label of the file icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: s(
              "vscode.extension.contributes.iconThemes.path",
              "Path of the file icon theme definition file. The path is relative to the extension folder and is typically './fileicons/awesome-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
function Yn() {
  return Ge.registerExtensionPoint({
    extensionPoint: "productIconThemes",
    jsonSchema: {
      description: s(
        "vscode.extension.contributes.productIconThemes",
        "Contributes product icon themes."
      ),
      type: "array",
      items: {
        type: "object",
        defaultSnippets: [{ body: { id: "${1:id}", label: "${2:label}", path: "./producticons/${3:id}-product-icon-theme.json" } }],
        properties: {
          id: {
            description: s(
              "vscode.extension.contributes.productIconThemes.id",
              "Id of the product icon theme as used in the user settings."
            ),
            type: "string"
          },
          label: {
            description: s(
              "vscode.extension.contributes.productIconThemes.label",
              "Label of the product icon theme as shown in the UI."
            ),
            type: "string"
          },
          path: {
            description: s(
              "vscode.extension.contributes.productIconThemes.path",
              "Path of the product icon theme definition file. The path is relative to the extension folder and is typically './producticons/awesome-product-icon-theme.json'."
            ),
            type: "string"
          }
        },
        required: ["path", "id"]
      }
    }
  });
}
class we {
  constructor(e, t, n = !1, o = void 0) {
    this.themesExtPoint = e, this.create = t, this.idRequired = n, this.builtInTheme = o, this.onDidChangeEmitter = new de(), this.onDidChange = this.onDidChangeEmitter.event, this.extensionThemes = [], this.initialize();
  }
  initialize() {
    this.themesExtPoint.setHandler((e, t) => {
      const n = {}, o = [];
      for (const c of this.extensionThemes)
        n[c.id] = c;
      this.extensionThemes.length = 0;
      for (const c of e) {
        const a = F.fromName(c.description.publisher, c.description.name, c.description.isBuiltin);
        this.onThemes(a, c.description.extensionLocation, c.value, this.extensionThemes, c.collector);
      }
      for (const c of this.extensionThemes)
        n[c.id] ? delete n[c.id] : o.push(c);
      const i = Object.values(n);
      this.onDidChangeEmitter.fire({ themes: this.extensionThemes, added: o, removed: i });
    });
  }
  onThemes(e, t, n, o = [], i) {
    return Array.isArray(n) ? (n.forEach((c) => {
      if (!c.path || !P(c.path)) {
        i == null || i.error(s(
          "reqpath",
          "Expected string in `contributes.{0}.path`. Provided value: {1}",
          this.themesExtPoint.name,
          String(c.path)
        ));
        return;
      }
      if (this.idRequired && (!c.id || !P(c.id))) {
        i == null || i.error(s(
          "reqid",
          "Expected string in `contributes.{0}.id`. Provided value: {1}",
          this.themesExtPoint.name,
          String(c.id)
        ));
        return;
      }
      const a = B(t, c.path);
      Ke(a, t) || i == null || i.warn(s(
        "invalid.path.1",
        "Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
        this.themesExtPoint.name,
        a.path,
        t.path
      ));
      const h = this.create(c, a, e);
      o.push(h);
    }), o) : (i == null || i.error(s(
      "reqarray",
      "Extension point `{0}` must be an array.",
      this.themesExtPoint.name
    )), o);
  }
  findThemeById(e, t) {
    if (this.builtInTheme && this.builtInTheme.id === e)
      return this.builtInTheme;
    const n = this.getThemes();
    let o;
    for (const i of n) {
      if (i.id === e)
        return i;
      i.id === t && (o = i);
    }
    return o;
  }
  findThemeBySettingsId(e, t) {
    if (this.builtInTheme && this.builtInTheme.settingsId === e)
      return this.builtInTheme;
    const n = this.getThemes();
    let o;
    for (const i of n) {
      if (i.settingsId === e)
        return i;
      i.id === t && (o = i);
    }
    return o;
  }
  findThemeByExtensionLocation(e) {
    return e ? this.getThemes().filter((t) => t.location && Ke(t.location, e)) : [];
  }
  getThemes() {
    return this.extensionThemes;
  }
  getMarketplaceThemes(e, t, n) {
    var i;
    const o = (i = e == null ? void 0 : e.contributes) == null ? void 0 : i[this.themesExtPoint.name];
    return Array.isArray(o) ? this.onThemes(n, t, o) : [];
  }
}
const Ct = "Default Dark+", It = "Default Light+", Zn = "Default High Contrast", Xn = "Default High Contrast Light", Qn = "vs-seti", Ae = "Default", ee = Q.as(Wt.Configuration), K = [], J = [], Y = [], eo = {
  type: "string",
  description: s("colorTheme", "Specifies the color theme used in the workbench."),
  default: gt ? It : Ct,
  enum: K,
  enumDescriptions: Y,
  enumItemLabels: J,
  errorMessage: s("colorThemeError", "Theme is unknown or not installed.")
}, to = {
  type: "string",
  markdownDescription: s(
    { key: "preferredDarkColorTheme", comment: ["`#{0}#` will become a link to an other setting. Do not remove backtick or #"] },
    "Specifies the preferred color theme for dark OS appearance when `#{0}#` is enabled.",
    y.DETECT_COLOR_SCHEME
  ),
  default: Ct,
  enum: K,
  enumDescriptions: Y,
  enumItemLabels: J,
  errorMessage: s("colorThemeError", "Theme is unknown or not installed.")
}, no = {
  type: "string",
  markdownDescription: s(
    { key: "preferredLightColorTheme", comment: ["`#{0}#` will become a link to an other setting. Do not remove backtick or #"] },
    "Specifies the preferred color theme for light OS appearance when `#{0}#` is enabled.",
    y.DETECT_COLOR_SCHEME
  ),
  default: It,
  enum: K,
  enumDescriptions: Y,
  enumItemLabels: J,
  errorMessage: s("colorThemeError", "Theme is unknown or not installed.")
}, oo = {
  type: "string",
  markdownDescription: s(
    { key: "preferredHCDarkColorTheme", comment: ["`#{0}#` will become a link to an other setting. Do not remove backtick or #"] },
    "Specifies the preferred color theme used in high contrast dark mode when `#{0}#` is enabled.",
    y.DETECT_HC
  ),
  default: Zn,
  enum: K,
  enumDescriptions: Y,
  enumItemLabels: J,
  errorMessage: s("colorThemeError", "Theme is unknown or not installed.")
}, io = {
  type: "string",
  markdownDescription: s(
    { key: "preferredHCLightColorTheme", comment: ["`#{0}#` will become a link to an other setting. Do not remove backtick or #"] },
    "Specifies the preferred color theme used in high contrast light mode when `#{0}#` is enabled.",
    y.DETECT_HC
  ),
  default: Xn,
  enum: K,
  enumDescriptions: Y,
  enumItemLabels: J,
  errorMessage: s("colorThemeError", "Theme is unknown or not installed.")
}, so = {
  type: "boolean",
  markdownDescription: s(
    "detectColorScheme",
    "If set, automatically switch to the preferred color theme based on the OS appearance. If the OS appearance is dark, the theme specified at `#{0}#` is used, for light `#{1}#`.",
    y.PREFERRED_DARK_THEME,
    y.PREFERRED_LIGHT_THEME
  ),
  default: !1
}, bt = {
  type: "object",
  description: s(
    "workbenchColors",
    "Overrides colors from the currently selected color theme."
  ),
  allOf: [{ $ref: Ue }],
  default: {},
  defaultSnippets: [{
    body: {}
  }]
}, fe = {
  type: ["string", "null"],
  default: Qn,
  description: s(
    "iconTheme",
    "Specifies the file icon theme used in the workbench or 'null' to not show any file icons."
  ),
  enum: [null],
  enumItemLabels: [s("noIconThemeLabel", "None")],
  enumDescriptions: [s("noIconThemeDesc", "No file icons")],
  errorMessage: s("iconThemeError", "File icon theme is unknown or not installed.")
}, me = {
  type: ["string", "null"],
  default: Ae,
  description: s("productIconTheme", "Specifies the product icon theme used."),
  enum: [Ae],
  enumItemLabels: [s("defaultProductIconThemeLabel", "Default")],
  enumDescriptions: [s("defaultProductIconThemeDesc", "Default")],
  errorMessage: s("productIconThemeError", "Product icon theme is unknown or not installed.")
}, ro = {
  type: "boolean",
  default: !0,
  markdownDescription: s(
    "autoDetectHighContrast",
    "If enabled, will automatically change to high contrast theme if the OS is using a high contrast theme. The high contrast theme to use is specified by `#{0}#` and `#{1}#`.",
    y.PREFERRED_HC_DARK_THEME,
    y.PREFERRED_HC_LIGHT_THEME
  ),
  scope: 1
}, Ee = {
  id: "workbench",
  order: 7.1,
  type: "object",
  properties: {
    [y.COLOR_THEME]: eo,
    [y.PREFERRED_DARK_THEME]: to,
    [y.PREFERRED_LIGHT_THEME]: no,
    [y.PREFERRED_HC_DARK_THEME]: oo,
    [y.PREFERRED_HC_LIGHT_THEME]: io,
    [y.FILE_ICON_THEME]: fe,
    [y.COLOR_CUSTOMIZATIONS]: bt,
    [y.PRODUCT_ICON_THEME]: me
  }
};
ee.registerConfiguration(Ee);
const co = {
  id: "window",
  order: 8.1,
  type: "object",
  properties: {
    [y.DETECT_HC]: ro,
    [y.DETECT_COLOR_SCHEME]: so
  }
};
ee.registerConfiguration(co);
function V(r) {
  return {
    description: r,
    $ref: zn
  };
}
const xe = "^\\[[^\\]]*(\\]\\s*\\[[^\\]]*)*\\]$", Et = {
  type: "object",
  properties: {
    comments: V(s("editorColors.comments", "Sets the colors and styles for comments")),
    strings: V(s("editorColors.strings", "Sets the colors and styles for strings literals.")),
    keywords: V(s("editorColors.keywords", "Sets the colors and styles for keywords.")),
    numbers: V(s("editorColors.numbers", "Sets the colors and styles for number literals.")),
    types: V(s(
      "editorColors.types",
      "Sets the colors and styles for type declarations and references."
    )),
    functions: V(s(
      "editorColors.functions",
      "Sets the colors and styles for functions declarations and references."
    )),
    variables: V(s(
      "editorColors.variables",
      "Sets the colors and styles for variables declarations and references."
    )),
    textMateRules: {
      description: s(
        "editorColors.textMateRules",
        "Sets colors and styles using textmate theming rules (advanced)."
      ),
      $ref: be
    },
    semanticHighlighting: {
      description: s(
        "editorColors.semanticHighlighting",
        "Whether semantic highlighting should be enabled for this theme."
      ),
      deprecationMessage: s(
        "editorColors.semanticHighlighting.deprecationMessage",
        "Use `enabled` in `editor.semanticTokenColorCustomizations` setting instead."
      ),
      markdownDeprecationMessage: s(
        "editorColors.semanticHighlighting.deprecationMessageMarkdown",
        "Use `enabled` in `#editor.semanticTokenColorCustomizations#` setting instead."
      ),
      type: "boolean"
    }
  },
  additionalProperties: !1
}, kt = {
  description: s(
    "editorColors",
    "Overrides editor syntax colors and font style from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...Et, patternProperties: { "^\\[": {} } }]
}, Oe = {
  type: "object",
  properties: {
    enabled: {
      type: "boolean",
      description: s(
        "editorColors.semanticHighlighting.enabled",
        "Whether semantic highlighting is enabled or disabled for this theme"
      ),
      suggestSortText: "0_enabled"
    },
    rules: {
      $ref: pt,
      description: s(
        "editorColors.semanticHighlighting.rules",
        "Semantic token styling rules for this theme."
      ),
      suggestSortText: "0_rules"
    }
  },
  additionalProperties: !1
}, wt = {
  description: s(
    "semanticTokenColors",
    "Overrides editor semantic token color and styles from the currently selected color theme."
  ),
  default: {},
  allOf: [{ ...Oe, patternProperties: { "^\\[": {} } }]
}, xt = {
  id: "editor",
  order: 7.2,
  type: "object",
  properties: {
    [y.TOKEN_COLOR_CUSTOMIZATIONS]: kt,
    [y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS]: wt
  }
};
ee.registerConfiguration(xt);
function ht(r) {
  r.sort((c, a) => c.label.localeCompare(a.label)), K.splice(0, K.length, ...r.map((c) => c.settingsId)), Y.splice(0, Y.length, ...r.map((c) => c.description || "")), J.splice(0, J.length, ...r.map((c) => c.label || ""));
  const e = { properties: {} }, t = { properties: {} }, n = { properties: {} }, o = { $ref: Ue, additionalProperties: !1 }, i = { properties: Et.properties, additionalProperties: !1 };
  for (const c of r) {
    const a = `[${c.settingsId}]`;
    e.properties[a] = o, t.properties[a] = i, n.properties[a] = Oe;
  }
  e.patternProperties = { [xe]: o }, t.patternProperties = { [xe]: i }, n.patternProperties = { [xe]: Oe }, bt.allOf[1] = e, kt.allOf[1] = t, wt.allOf[1] = n, ee.notifyConfigurationSchemaUpdated(Ee, xt);
}
function dt(r) {
  fe.enum.splice(1, Number.MAX_VALUE, ...r.map((e) => e.settingsId)), fe.enumItemLabels.splice(1, Number.MAX_VALUE, ...r.map((e) => e.label)), fe.enumDescriptions.splice(1, Number.MAX_VALUE, ...r.map((e) => e.description || "")), ee.notifyConfigurationSchemaUpdated(Ee);
}
function ut(r) {
  me.enum.splice(1, Number.MAX_VALUE, ...r.map((e) => e.settingsId)), me.enumItemLabels.splice(1, Number.MAX_VALUE, ...r.map((e) => e.label)), me.enumDescriptions.splice(1, Number.MAX_VALUE, ...r.map((e) => e.description || "")), ee.notifyConfigurationSchemaUpdated(Ee);
}
class ao {
  constructor(e) {
    this.configurationService = e;
  }
  get colorTheme() {
    return this.configurationService.getValue(y.COLOR_THEME);
  }
  get fileIconTheme() {
    return this.configurationService.getValue(y.FILE_ICON_THEME);
  }
  get productIconTheme() {
    return this.configurationService.getValue(y.PRODUCT_ICON_THEME);
  }
  get colorCustomizations() {
    return this.configurationService.getValue(y.COLOR_CUSTOMIZATIONS) || {};
  }
  get tokenColorCustomizations() {
    return this.configurationService.getValue(y.TOKEN_COLOR_CUSTOMIZATIONS) || {};
  }
  get semanticTokenColorCustomizations() {
    return this.configurationService.getValue(y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS);
  }
  async setColorTheme(e, t) {
    return await this.writeConfiguration(y.COLOR_THEME, e.settingsId, t), e;
  }
  async setFileIconTheme(e, t) {
    return await this.writeConfiguration(y.FILE_ICON_THEME, e.settingsId, t), e;
  }
  async setProductIconTheme(e, t) {
    return await this.writeConfiguration(y.PRODUCT_ICON_THEME, e.settingsId, t), e;
  }
  isDefaultColorTheme() {
    var t;
    const e = this.configurationService.inspect(y.COLOR_THEME);
    return e && ((t = e.default) == null ? void 0 : t.value) === e.value;
  }
  findAutoConfigurationTarget(e) {
    const t = this.configurationService.inspect(e);
    if (q(t.workspaceFolderValue))
      if (q(t.workspaceValue)) {
        if (!q(t.userRemote))
          return 4;
      } else
        return 5;
    else
      return 6;
    return 2;
  }
  async writeConfiguration(e, t, n) {
    if (n === void 0 || n === "preview")
      return;
    const o = this.configurationService.inspect(e);
    if (n === "auto")
      return this.configurationService.updateValue(e, t);
    if (n === 2) {
      if (t === o.userValue)
        return Promise.resolve(void 0);
      if (t === o.defaultValue) {
        if (q(o.userValue))
          return Promise.resolve(void 0);
        t = void 0;
      }
    } else if ((n === 5 || n === 6 || n === 4) && t === o.value)
      return Promise.resolve(void 0);
    return this.configurationService.updateValue(e, t, n);
  }
}
const ge = "";
class D {
  constructor(e, t, n) {
    this.iconThemeDocument = { iconDefinitions: /* @__PURE__ */ new Map() }, this.id = e, this.label = t, this.settingsId = n, this.isLoaded = !1;
  }
  getIcon(e) {
    return uo(e, this.iconThemeDocument);
  }
  ensureLoaded(e, t) {
    return this.isLoaded ? Promise.resolve(this.styleSheetContent) : this.load(e, t);
  }
  reload(e, t) {
    return this.load(e, t);
  }
  async load(e, t) {
    const n = this.location;
    if (!n)
      return Promise.resolve(this.styleSheetContent);
    const o = [];
    return this.iconThemeDocument = await lo(e, n, o), this.isLoaded = !0, o.length && t.error(s(
      "error.parseicondefs",
      `Problems processing product icons definitions in {0}:
{1}`,
      n.toString(),
      o.join(`
`)
    )), this.styleSheetContent;
  }
  static fromExtensionTheme(e, t, n) {
    const o = n.extensionId + "-" + e.id, i = e.label || Fe(e.path), c = e.id, a = new D(o, i, c);
    return a.description = e.description, a.location = t, a.extensionData = n, a.watch = e._watch, a.isLoaded = !1, a;
  }
  static createUnloadedTheme(e) {
    const t = new D(e, "", "__" + e);
    return t.isLoaded = !1, t.extensionData = void 0, t.watch = !1, t;
  }
  static get defaultTheme() {
    let e = D._defaultProductIconTheme;
    return e || (e = D._defaultProductIconTheme = new D(ge, s("defaultTheme", "Default"), Ae), e.isLoaded = !0, e.extensionData = void 0, e.watch = !1), e;
  }
  static fromStorageData(e) {
    const t = e.get(D.STORAGE_KEY, 0);
    if (t)
      try {
        const n = JSON.parse(t), o = new D("", "", "");
        for (const a in n)
          switch (a) {
            case "id":
            case "label":
            case "description":
            case "settingsId":
            case "styleSheetContent":
            case "watch":
              o[a] = n[a];
              break;
            case "location":
              break;
            case "extensionData":
              o.extensionData = F.fromJSONObject(n.extensionData);
              break;
          }
        const { iconDefinitions: i, iconFontDefinitions: c } = n;
        if (Array.isArray(i) && he(c)) {
          const a = /* @__PURE__ */ new Map();
          for (const h of i) {
            const { id: u, fontCharacter: f, fontId: g } = h;
            if (P(u) && P(f))
              if (P(g)) {
                const S = Je.fromJSONObject(c[g]);
                S && a.set(u, { fontCharacter: f, font: { id: g, definition: S } });
              } else
                a.set(u, { fontCharacter: f });
          }
          o.iconThemeDocument = { iconDefinitions: a };
        }
        return o;
      } catch {
        return;
      }
  }
  toStorage(e) {
    const t = [], n = {};
    for (const i of this.iconThemeDocument.iconDefinitions.entries()) {
      const c = i[1].font;
      t.push({ id: i[0], fontCharacter: i[1].fontCharacter, fontId: c == null ? void 0 : c.id }), c && n[c.id] === void 0 && (n[c.id] = Je.toJSONObject(c.definition));
    }
    const o = JSON.stringify({
      id: this.id,
      label: this.label,
      description: this.description,
      settingsId: this.settingsId,
      styleSheetContent: this.styleSheetContent,
      watch: this.watch,
      extensionData: F.toJSONObject(this.extensionData),
      iconDefinitions: t,
      iconFontDefinitions: n
    });
    e.store(D.STORAGE_KEY, o, 0, 1);
  }
}
D.STORAGE_KEY = "productIconThemeData";
D._defaultProductIconTheme = null;
function lo(r, e, t) {
  return r.readExtensionResource(e).then((n) => {
    const o = [], i = Ne(n, o);
    if (o.length > 0)
      return Promise.reject(new Error(s(
        "error.cannotparseicontheme",
        "Problems parsing product icons file: {0}",
        o.map((f) => ze(f.error)).join(", ")
      )));
    if ($e(i) !== "object")
      return Promise.reject(new Error(s(
        "error.invalidformat",
        "Invalid format for product icons theme file: Object expected."
      )));
    if (!i.iconDefinitions || !Array.isArray(i.fonts) || !i.fonts.length)
      return Promise.reject(new Error(s(
        "error.missingProperties",
        "Invalid format for product icons theme file: Must contain iconDefinitions and fonts."
      )));
    const c = pe(e), a = /* @__PURE__ */ new Map();
    for (const f of i.fonts)
      if (P(f.id) && f.id.match(qe)) {
        const g = f.id;
        let S;
        P(f.weight) && f.weight.match(Ve) ? S = f.weight : t.push(s(
          "error.fontWeight",
          "Invalid font weight in font '{0}'. Ignoring setting.",
          f.id
        ));
        let d;
        P(f.style) && f.style.match(Be) ? d = f.style : t.push(s(
          "error.fontStyle",
          "Invalid font style in font '{0}'. Ignoring setting.",
          f.id
        ));
        const p = [];
        if (Array.isArray(f.src))
          for (const T of f.src)
            if (P(T.path) && P(T.format) && T.format.match(On)) {
              const C = B(c, T.path);
              p.push({ location: C, format: T.format });
            } else
              t.push(s(
                "error.fontSrc",
                "Invalid font source in font '{0}'. Ignoring source.",
                f.id
              ));
        p.length ? a.set(g, { weight: S, style: d, src: p }) : t.push(s(
          "error.noFontSrc",
          "No valid font source in font '{0}'. Ignoring font definition.",
          f.id
        ));
      } else
        t.push(s(
          "error.fontId",
          "Missing or invalid font id '{0}'. Skipping font definition.",
          f.id
        ));
    const h = /* @__PURE__ */ new Map(), u = i.fonts[0].id;
    for (const f in i.iconDefinitions) {
      const g = i.iconDefinitions[f];
      if (P(g.fontCharacter)) {
        const S = g.fontId ?? u, d = a.get(S);
        if (d) {
          const p = { id: `pi-${S}`, definition: d };
          h.set(f, { fontCharacter: g.fontCharacter, font: p });
        } else
          t.push(s(
            "error.icon.font",
            "Skipping icon definition '{0}'. Unknown font.",
            f
          ));
      } else
        t.push(s(
          "error.icon.fontCharacter",
          "Skipping icon definition '{0}'. Unknown fontCharacter.",
          f
        ));
    }
    return { iconDefinitions: h };
  });
}
const ho = Kt();
function uo(r, e) {
  const t = e.iconDefinitions;
  let n = t.get(r.id), o = r.defaults;
  for (; !n && Ye.isThemeIcon(o); ) {
    const i = ho.getIcon(o.id);
    if (i)
      n = t.get(i.id), o = i.defaults;
    else
      return;
  }
  if (n)
    return n;
  if (!Ye.isThemeIcon(o))
    return o;
}
const Re = "vs-dark vscode-theme-defaults-themes-dark_plus-json", fo = "vs vscode-theme-defaults-themes-light_plus-json", oe = "osColorScheme", ie = -1, le = "vscode-theme-defaults", ve = "vscode.vscode-theme-seti-vs-seti", ft = "file-icons-enabled", mo = "contributedColorTheme", go = "contributedFileIconTheme", po = "contributedProductIconTheme", mt = Q.as(Jt.ThemingContribution);
function To(r) {
  switch (r) {
    case Ie:
      return `vs ${le}-themes-light_vs-json`;
    case ye:
      return `vs-dark ${le}-themes-dark_vs-json`;
    case Ce:
      return `hc-black ${le}-themes-hc_black-json`;
    case Se:
      return `hc-light ${le}-themes-hc_light-json`;
  }
  return r;
}
const yo = Kn(), So = Jn(), Co = Yn();
let Me = class {
  constructor(e, t, n, o, i, c, a, h, u, f, g, S) {
    var U;
    this.storageService = t, this.configurationService = n, this.telemetryService = o, this.environmentService = i, this.extensionResourceLoaderService = a, this.logService = u, this.hostColorService = f, this.themeExtensionsActivated = /* @__PURE__ */ new Map(), this.container = h.container, this.settings = new ao(n), this.colorThemeRegistry = new we(yo, L.fromExtensionTheme), this.colorThemeWatcher = new _e(c, i, this.reloadCurrentColorTheme.bind(this)), this.onColorThemeChange = new de({ leakWarningThreshold: 400 }), this.currentColorTheme = L.createUnloadedTheme(""), this.colorThemeSequencer = new ke(), this.fileIconThemeWatcher = new _e(
      c,
      i,
      this.reloadCurrentFileIconTheme.bind(this)
    ), this.fileIconThemeRegistry = new we(
      So,
      _.fromExtensionTheme,
      !0,
      _.noIconTheme
    ), this.fileIconThemeLoader = new Gn(a, S), this.onFileIconThemeChange = new de({ leakWarningThreshold: 400 }), this.currentFileIconTheme = _.createUnloadedTheme(""), this.fileIconThemeSequencer = new ke(), this.productIconThemeWatcher = new _e(
      c,
      i,
      this.reloadCurrentProductIconTheme.bind(this)
    ), this.productIconThemeRegistry = new we(
      Co,
      D.fromExtensionTheme,
      !0,
      D.defaultTheme
    ), this.onProductIconThemeChange = new de(), this.currentProductIconTheme = D.createUnloadedTheme(""), this.productIconThemeSequencer = new ke();
    let d = L.fromStorageData(this.storageService);
    d && this.settings.colorTheme !== d.settingsId && this.settings.isDefaultColorTheme() && (d = void 0);
    const p = this.getPreferredColorScheme();
    if (p && (d == null ? void 0 : d.type) !== p && this.storageService.get(oe, ie) !== p && (d = L.createUnloadedThemeForThemeType(p)), !d) {
      const O = (U = i.options) == null ? void 0 : U.initialColorTheme;
      O && (d = L.createUnloadedThemeForThemeType(O.themeType, O.colors));
    }
    d || (d = L.createUnloadedThemeForThemeType(gt ? k.LIGHT : k.DARK)), d.setCustomizations(this.settings), this.applyTheme(d, void 0, !0);
    const T = _.fromStorageData(this.storageService);
    T && this.applyAndSetFileIconTheme(T, !0);
    const C = D.fromStorageData(this.storageService);
    C && this.applyAndSetProductIconTheme(C, !0), Promise.all([e.whenInstalledExtensionsRegistered(), g.whenInitializationFinished()]).then((O) => {
      this.installConfigurationListener(), this.installPreferredSchemeListener(), this.installRegistryListeners(), this.initialize().catch(hn);
    });
    const m = dn();
    m.id = "codiconStyles";
    const I = un(this);
    function H() {
      m.textContent = I.getCSS();
    }
    const b = new fn(H, 0);
    I.onDidChange(() => b.schedule()), b.schedule();
  }
  initialize() {
    const e = this.environmentService.extensionDevelopmentLocationURI, t = e && e.length === 1 ? e[0] : void 0, n = async () => {
      const c = this.colorThemeRegistry.findThemeByExtensionLocation(t);
      if (c.length)
        return this.setColorTheme(c[0].id, 8);
      const a = this.currentColorTheme.type === k.LIGHT ? fo : Re, h = this.colorThemeRegistry.findThemeBySettingsId(this.settings.colorTheme, a), u = this.getPreferredColorScheme(), f = this.storageService.get(oe, ie);
      return u !== f && (this.storageService.store(oe, u, ie, 0), u && (h == null ? void 0 : h.type) !== u) ? this.applyPreferredColorTheme(u) : this.setColorTheme(h && h.id, void 0);
    }, o = async () => {
      const c = this.fileIconThemeRegistry.findThemeByExtensionLocation(t);
      if (c.length)
        return this.setFileIconTheme(c[0].id, 8);
      const a = this.fileIconThemeRegistry.findThemeBySettingsId(this.settings.fileIconTheme);
      return this.setFileIconTheme(a ? a.id : ve, void 0);
    }, i = async () => {
      const c = this.productIconThemeRegistry.findThemeByExtensionLocation(t);
      if (c.length)
        return this.setProductIconTheme(c[0].id, 8);
      const a = this.productIconThemeRegistry.findThemeBySettingsId(this.settings.productIconTheme);
      return this.setProductIconTheme(a ? a.id : ge, void 0);
    };
    return Promise.all([n(), o(), i()]);
  }
  installConfigurationListener() {
    this.configurationService.onDidChangeConfiguration((e) => {
      let t = null;
      const n = () => (t === null && (t = this.getPreferredColorScheme()), t);
      if (e.affectsConfiguration(y.COLOR_THEME) && this.restoreColorTheme(), (e.affectsConfiguration(y.DETECT_COLOR_SCHEME) || e.affectsConfiguration(y.DETECT_HC)) && this.handlePreferredSchemeUpdated(), e.affectsConfiguration(y.PREFERRED_DARK_THEME) && n() === k.DARK && this.applyPreferredColorTheme(k.DARK), e.affectsConfiguration(y.PREFERRED_LIGHT_THEME) && n() === k.LIGHT && this.applyPreferredColorTheme(k.LIGHT), e.affectsConfiguration(y.PREFERRED_HC_DARK_THEME) && n() === k.HIGH_CONTRAST_DARK && this.applyPreferredColorTheme(k.HIGH_CONTRAST_DARK), e.affectsConfiguration(y.PREFERRED_HC_LIGHT_THEME) && n() === k.HIGH_CONTRAST_LIGHT && this.applyPreferredColorTheme(k.HIGH_CONTRAST_LIGHT), e.affectsConfiguration(y.FILE_ICON_THEME) && this.restoreFileIconTheme(), e.affectsConfiguration(y.PRODUCT_ICON_THEME) && this.restoreProductIconTheme(), this.currentColorTheme) {
        let o = !1;
        e.affectsConfiguration(y.COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomColors(this.settings.colorCustomizations), o = !0), e.affectsConfiguration(y.TOKEN_COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomTokenColors(this.settings.tokenColorCustomizations), o = !0), e.affectsConfiguration(y.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS) && (this.currentColorTheme.setCustomSemanticTokenColors(this.settings.semanticTokenColorCustomizations), o = !0), o && (this.updateDynamicCSSRules(this.currentColorTheme), this.onColorThemeChange.fire(this.currentColorTheme));
      }
    });
  }
  installRegistryListeners() {
    let e;
    this.colorThemeRegistry.onDidChange(async (o) => {
      ht(o.themes), await this.restoreColorTheme() ? this.currentColorTheme.id === Re && !q(e) && await this.colorThemeRegistry.findThemeById(e) ? (await this.setColorTheme(e, "auto"), e = void 0) : o.added.some((i) => i.settingsId === this.currentColorTheme.settingsId) && await this.reloadCurrentColorTheme() : o.removed.some((i) => i.settingsId === this.currentColorTheme.settingsId) && (e = this.currentColorTheme.id, await this.setColorTheme(Re, "auto"));
    });
    let t;
    this.fileIconThemeRegistry.onDidChange(async (o) => {
      dt(o.themes), await this.restoreFileIconTheme() ? this.currentFileIconTheme.id === ve && !q(t) && this.fileIconThemeRegistry.findThemeById(t) ? (await this.setFileIconTheme(t, "auto"), t = void 0) : o.added.some((i) => i.settingsId === this.currentFileIconTheme.settingsId) && await this.reloadCurrentFileIconTheme() : o.removed.some((i) => i.settingsId === this.currentFileIconTheme.settingsId) && (t = this.currentFileIconTheme.id, await this.setFileIconTheme(ve, "auto"));
    });
    let n;
    return this.productIconThemeRegistry.onDidChange(async (o) => {
      ut(o.themes), await this.restoreProductIconTheme() ? this.currentProductIconTheme.id === ge && !q(n) && this.productIconThemeRegistry.findThemeById(n) ? (await this.setProductIconTheme(n, "auto"), n = void 0) : o.added.some((i) => i.settingsId === this.currentProductIconTheme.settingsId) && await this.reloadCurrentProductIconTheme() : o.removed.some((i) => i.settingsId === this.currentProductIconTheme.settingsId) && (n = this.currentProductIconTheme.id, await this.setProductIconTheme(ge, "auto"));
    }), Promise.all([this.getColorThemes(), this.getFileIconThemes(), this.getProductIconThemes()]).then(([o, i, c]) => {
      ht(o), dt(i), ut(c);
    });
  }
  installPreferredSchemeListener() {
    this.hostColorService.onDidChangeColorScheme(() => this.handlePreferredSchemeUpdated());
  }
  async handlePreferredSchemeUpdated() {
    const e = this.getPreferredColorScheme(), t = this.storageService.get(oe, ie);
    if (e !== t) {
      if (this.storageService.store(oe, e, ie, 1), e)
        return t || (this.themeSettingIdBeforeSchemeSwitch = this.settings.colorTheme), this.applyPreferredColorTheme(e);
      if (t && this.themeSettingIdBeforeSchemeSwitch) {
        const n = this.colorThemeRegistry.findThemeBySettingsId(this.themeSettingIdBeforeSchemeSwitch, void 0);
        n && this.setColorTheme(n.id, "auto");
      }
    }
  }
  getPreferredColorScheme() {
    if (this.configurationService.getValue(y.DETECT_HC) && this.hostColorService.highContrast)
      return this.hostColorService.dark ? k.HIGH_CONTRAST_DARK : k.HIGH_CONTRAST_LIGHT;
    if (this.configurationService.getValue(y.DETECT_COLOR_SCHEME))
      return this.hostColorService.dark ? k.DARK : k.LIGHT;
  }
  async applyPreferredColorTheme(e) {
    let t;
    switch (e) {
      case k.LIGHT:
        t = y.PREFERRED_LIGHT_THEME;
        break;
      case k.HIGH_CONTRAST_DARK:
        t = y.PREFERRED_HC_DARK_THEME;
        break;
      case k.HIGH_CONTRAST_LIGHT:
        t = y.PREFERRED_HC_LIGHT_THEME;
        break;
      default:
        t = y.PREFERRED_DARK_THEME;
    }
    const n = this.configurationService.getValue(t);
    if (n && typeof n == "string") {
      const o = this.colorThemeRegistry.findThemeBySettingsId(n, void 0);
      if (o) {
        const i = this.settings.findAutoConfigurationTarget(t);
        return this.setColorTheme(o.id, i);
      }
    }
    return null;
  }
  getColorTheme() {
    return this.currentColorTheme;
  }
  async getColorThemes() {
    return this.colorThemeRegistry.getThemes();
  }
  async getMarketplaceColorThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(B(o, "package.json"));
        return this.colorThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  get onDidColorThemeChange() {
    return this.onColorThemeChange.event;
  }
  setColorTheme(e, t) {
    return this.colorThemeSequencer.queue(async () => this.internalSetColorTheme(e, t));
  }
  async internalSetColorTheme(e, t) {
    var i;
    if (!e)
      return null;
    const n = P(e) ? To(e) : e.id;
    if (this.currentColorTheme.isLoaded && n === this.currentColorTheme.id)
      return t !== "preview" && this.currentColorTheme.toStorage(this.storageService), this.settings.setColorTheme(this.currentColorTheme, t);
    let o = this.colorThemeRegistry.findThemeById(n);
    if (!o)
      if (e instanceof L)
        o = e;
      else
        return null;
    try {
      return await o.ensureLoaded(this.extensionResourceLoaderService), o.setCustomizations(this.settings), this.applyTheme(o, t);
    } catch (c) {
      throw new Error(s("error.cannotloadtheme", "Unable to load {0}: {1}", (i = o.location) == null ? void 0 : i.toString(), c.message));
    }
  }
  reloadCurrentColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      var e;
      try {
        const t = this.colorThemeRegistry.findThemeBySettingsId(this.currentColorTheme.settingsId) || this.currentColorTheme;
        await t.reload(this.extensionResourceLoaderService), t.setCustomizations(this.settings), await this.applyTheme(t, void 0, !1);
      } catch {
        this.logService.info("Unable to reload {0}: {1}", (e = this.currentColorTheme.location) == null ? void 0 : e.toString());
      }
    });
  }
  async restoreColorTheme() {
    return this.colorThemeSequencer.queue(async () => {
      const e = this.settings.colorTheme, t = this.colorThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentColorTheme.settingsId ? await this.internalSetColorTheme(t.id, void 0) : t !== this.currentColorTheme && (await t.ensureLoaded(this.extensionResourceLoaderService), t.setCustomizations(this.settings), await this.applyTheme(t, void 0, !0)), !0) : !1;
    });
  }
  updateDynamicCSSRules(e) {
    const t = /* @__PURE__ */ new Set(), n = {
      addRule: (i) => {
        t.has(i) || t.add(i);
      }
    };
    n.addRule(".monaco-workbench { forced-color-adjust: none; }"), mt.getThemingParticipants().forEach((i) => i(e, n, this.environmentService));
    const o = [];
    for (const i of mn().getColors()) {
      const c = e.getColor(i.id, !0);
      c && o.push(`${gn(i.id)}: ${c.toString()};`);
    }
    n.addRule(`.monaco-workbench { ${o.join(`
`)} }`), De([...t].join(`
`), mo);
  }
  applyTheme(e, t, n = !1) {
    return this.updateDynamicCSSRules(e), this.currentColorTheme.id ? this.container.classList.remove(...this.currentColorTheme.classNames) : this.container.classList.remove(ye, Ie, Ce, Se), this.container.classList.add(...e.classNames), this.currentColorTheme.clearCaches(), this.currentColorTheme = e, this.colorThemingParticipantChangeListener || (this.colorThemingParticipantChangeListener = mt.onThemingParticipantAdded((o) => this.updateDynamicCSSRules(this.currentColorTheme))), this.colorThemeWatcher.update(e), this.sendTelemetry(e.id, e.extensionData, "color"), n ? Promise.resolve(null) : (this.onColorThemeChange.fire(this.currentColorTheme), e.isLoaded && t !== "preview" && e.toStorage(this.storageService), this.settings.setColorTheme(this.currentColorTheme, t));
  }
  sendTelemetry(e, t, n) {
    if (t) {
      const o = n + t.extensionId;
      this.themeExtensionsActivated.get(o) || (this.telemetryService.publicLog2("activatePlugin", {
        id: t.extensionId,
        name: t.extensionName,
        isBuiltin: t.extensionIsBuiltin,
        publisherDisplayName: t.extensionPublisher,
        themeId: e
      }), this.themeExtensionsActivated.set(o, !0));
    }
  }
  async getFileIconThemes() {
    return this.fileIconThemeRegistry.getThemes();
  }
  getFileIconTheme() {
    return this.currentFileIconTheme;
  }
  get onDidFileIconThemeChange() {
    return this.onFileIconThemeChange.event;
  }
  async setFileIconTheme(e, t) {
    return this.fileIconThemeSequencer.queue(async () => this.internalSetFileIconTheme(e, t));
  }
  async internalSetFileIconTheme(e, t) {
    e === void 0 && (e = "");
    const n = P(e) ? e : e.id;
    if (n !== this.currentFileIconTheme.id || !this.currentFileIconTheme.isLoaded) {
      let i = this.fileIconThemeRegistry.findThemeById(n);
      !i && e instanceof _ && (i = e), i || (i = _.noIconTheme), await i.ensureLoaded(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(i);
    }
    const o = this.currentFileIconTheme;
    return o.isLoaded && t !== "preview" && (!o.location || !Ze(o.location)) && o.toStorage(this.storageService), await this.settings.setFileIconTheme(this.currentFileIconTheme, t), o;
  }
  async getMarketplaceFileIconThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(B(o, "package.json"));
        return this.fileIconThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  async reloadCurrentFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      await this.currentFileIconTheme.reload(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(this.currentFileIconTheme);
    });
  }
  async restoreFileIconTheme() {
    return this.fileIconThemeSequencer.queue(async () => {
      const e = this.settings.fileIconTheme, t = this.fileIconThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentFileIconTheme.settingsId ? await this.internalSetFileIconTheme(t.id, void 0) : t !== this.currentFileIconTheme && (await t.ensureLoaded(this.fileIconThemeLoader), this.applyAndSetFileIconTheme(t, !0)), !0) : !1;
    });
  }
  applyAndSetFileIconTheme(e, t = !1) {
    this.currentFileIconTheme = e, De(e.styleSheetContent, go), e.id ? this.container.classList.add(ft) : this.container.classList.remove(ft), this.fileIconThemeWatcher.update(e), e.id && this.sendTelemetry(e.id, e.extensionData, "fileIcon"), t || this.onFileIconThemeChange.fire(this.currentFileIconTheme);
  }
  async getProductIconThemes() {
    return this.productIconThemeRegistry.getThemes();
  }
  getProductIconTheme() {
    return this.currentProductIconTheme;
  }
  get onDidProductIconThemeChange() {
    return this.onProductIconThemeChange.event;
  }
  async setProductIconTheme(e, t) {
    return this.productIconThemeSequencer.queue(async () => this.internalSetProductIconTheme(e, t));
  }
  async internalSetProductIconTheme(e, t) {
    e === void 0 && (e = "");
    const n = P(e) ? e : e.id;
    if (n !== this.currentProductIconTheme.id || !this.currentProductIconTheme.isLoaded) {
      let i = this.productIconThemeRegistry.findThemeById(n);
      !i && e instanceof D && (i = e), i || (i = D.defaultTheme), await i.ensureLoaded(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(i);
    }
    const o = this.currentProductIconTheme;
    return o.isLoaded && t !== "preview" && (!o.location || !Ze(o.location)) && o.toStorage(this.storageService), await this.settings.setProductIconTheme(this.currentProductIconTheme, t), o;
  }
  async getMarketplaceProductIconThemes(e, t, n) {
    const o = this.extensionResourceLoaderService.getExtensionGalleryResourceURL({ publisher: e, name: t, version: n }, "extension");
    if (o)
      try {
        const i = await this.extensionResourceLoaderService.readExtensionResource(B(o, "package.json"));
        return this.productIconThemeRegistry.getMarketplaceThemes(JSON.parse(i), o, F.fromName(e, t));
      } catch (i) {
        this.logService.error("Problem loading themes from marketplace", i);
      }
    return [];
  }
  async reloadCurrentProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      await this.currentProductIconTheme.reload(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(this.currentProductIconTheme);
    });
  }
  async restoreProductIconTheme() {
    return this.productIconThemeSequencer.queue(async () => {
      const e = this.settings.productIconTheme, t = this.productIconThemeRegistry.findThemeBySettingsId(e);
      return t ? (e !== this.currentProductIconTheme.settingsId ? await this.internalSetProductIconTheme(t.id, void 0) : t !== this.currentProductIconTheme && (await t.ensureLoaded(this.extensionResourceLoaderService, this.logService), this.applyAndSetProductIconTheme(t, !0)), !0) : !1;
    });
  }
  applyAndSetProductIconTheme(e, t = !1) {
    this.currentProductIconTheme = e, De(e.styleSheetContent, po), this.productIconThemeWatcher.update(e), e.id && this.sendTelemetry(e.id, e.extensionData, "productIcon"), t || this.onProductIconThemeChange.fire(this.currentProductIconTheme);
  }
};
Me = Yt([
  A(0, Zt),
  A(1, Xt),
  A(2, Qt),
  A(3, en),
  A(4, tn),
  A(5, nn),
  A(6, on),
  A(7, sn),
  A(8, rn),
  A(9, cn),
  A(10, an),
  A(11, ln)
], Me);
class _e {
  constructor(e, t, n) {
    this.fileService = e, this.environmentService = t, this.onUpdate = n;
  }
  update(e) {
    pn(e.location, this.watchedLocation) || (this.dispose(), e.location && (e.watch || this.environmentService.isExtensionDevelopment) && (this.watchedLocation = e.location, this.watcherDisposable = this.fileService.watch(e.location), this.fileService.onDidFilesChange((t) => {
      this.watchedLocation && t.contains(this.watchedLocation, 0) && this.onUpdate();
    })));
  }
  dispose() {
    this.watcherDisposable = Xe(this.watcherDisposable), this.fileChangeListener = Xe(this.fileChangeListener), this.watchedLocation = void 0;
  }
}
function De(r, e) {
  const t = document.head.getElementsByClassName(e);
  if (t.length === 0) {
    const n = document.createElement("style");
    n.type = "text/css", n.className = e, n.textContent = r, document.head.appendChild(n);
  } else
    t[0].textContent = r;
}
Wn();
Un();
Nn();
class Io extends Me {
  registerEditorContainer() {
    return {
      dispose() {
      }
    };
  }
  setTheme(e) {
    this.getColorThemes().then((t) => {
      setTimeout(() => {
        this.setColorTheme(t.find((n) => n.settingsId === e) ?? e, 8);
      });
    });
  }
}
function xo() {
  return {
    ...Tn(),
    [yn.toString()]: new Sn(Io)
  };
}
export {
  xo as default
};

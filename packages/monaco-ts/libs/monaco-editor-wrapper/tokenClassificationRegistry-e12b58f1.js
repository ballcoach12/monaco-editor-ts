import { dS as w, o as D, b1 as b, c_ as A, N as i, a0 as L, d0 as P, dj as B, cS as y, an as j } from "./verifyPrepare-e26a1ce7.js";
const z = w(D), W = "vs", Z = "vs-dark", Y = "hc-black", Q = "hc-light", X = "[", ee = "]", te = "*", re = /\[(.+?)\]/g;
var O;
(function(t) {
  t.COLOR_THEME = "workbench.colorTheme", t.FILE_ICON_THEME = "workbench.iconTheme", t.PRODUCT_ICON_THEME = "workbench.productIconTheme", t.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations", t.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations", t.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = "editor.semanticTokenColorCustomizations", t.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme", t.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme", t.PREFERRED_HC_DARK_THEME = "workbench.preferredHighContrastColorTheme", t.PREFERRED_HC_LIGHT_THEME = "workbench.preferredHighContrastLightColorTheme", t.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme", t.DETECT_HC = "window.autoDetectHighContrast";
})(O || (O = {}));
var E;
(function(t) {
  function e(s) {
    return s && { _extensionId: s.extensionId, _extensionIsBuiltin: s.extensionIsBuiltin, _extensionName: s.extensionName, _extensionPublisher: s.extensionPublisher };
  }
  t.toJSONObject = e;
  function n(s) {
    if (s && b(s._extensionId) && A(s._extensionIsBuiltin) && b(s._extensionName) && b(s._extensionPublisher))
      return { extensionId: s._extensionId, extensionIsBuiltin: s._extensionIsBuiltin, extensionName: s._extensionName, extensionPublisher: s._extensionPublisher };
  }
  t.fromJSONObject = n;
  function o(s, a, l = !1) {
    return { extensionPublisher: s, extensionId: `${s}.${a}`, extensionName: a, extensionIsBuiltin: l };
  }
  t.fromName = o;
})(E || (E = {}));
const $ = "*", N = ":", M = ".", h = "\\w+[-_\\w+]*", g = `^${h}$`, J = `^(${h}|\\*)(\\${M}${h})*(${N}${h})?$`, F = "^(\\s*(italic|bold|underline|strikethrough))*\\s*$";
class f {
  constructor(e, n, o, s, a) {
    this.foreground = e, this.bold = n, this.underline = o, this.strikethrough = s, this.italic = a;
  }
}
(function(t) {
  function e(r) {
    return {
      _foreground: r.foreground === void 0 ? null : y.Format.CSS.formatHexA(r.foreground, !0),
      _bold: r.bold === void 0 ? null : r.bold,
      _underline: r.underline === void 0 ? null : r.underline,
      _italic: r.italic === void 0 ? null : r.italic,
      _strikethrough: r.strikethrough === void 0 ? null : r.strikethrough
    };
  }
  t.toJSONObject = e;
  function n(r) {
    if (r) {
      const c = (u) => typeof u == "boolean" ? u : void 0, d = (u) => typeof u == "string" ? y.fromHex(u) : void 0;
      return new t(
        d(r._foreground),
        c(r._bold),
        c(r._underline),
        c(r._strikethrough),
        c(r._italic)
      );
    }
  }
  t.fromJSONObject = n;
  function o(r, c) {
    return r === c ? !0 : r !== void 0 && c !== void 0 && (r.foreground instanceof y ? r.foreground.equals(c.foreground) : c.foreground === void 0) && r.bold === c.bold && r.underline === c.underline && r.strikethrough === c.strikethrough && r.italic === c.italic;
  }
  t.equals = o;
  function s(r) {
    return r instanceof t;
  }
  t.is = s;
  function a(r) {
    return new t(
      r.foreground,
      r.bold,
      r.underline,
      r.strikethrough,
      r.italic
    );
  }
  t.fromData = a;
  function l(r, c, d, u, p, m) {
    let _;
    if (r !== void 0 && (_ = y.fromHex(r)), c !== void 0) {
      d = m = u = p = !1;
      const H = /italic|bold|underline|strikethrough/g;
      let T;
      for (; T = H.exec(c); )
        switch (T[0]) {
          case "bold":
            d = !0;
            break;
          case "italic":
            m = !0;
            break;
          case "underline":
            u = !0;
            break;
          case "strikethrough":
            p = !0;
            break;
        }
    }
    return new t(_, d, u, p, m);
  }
  t.fromSettings = l;
})(f || (f = {}));
var C;
(function(t) {
  function e(a, l) {
    if (l && typeof l._selector == "string" && l._style) {
      const r = f.fromJSONObject(l._style);
      if (r)
        try {
          return { selector: a.parseTokenSelector(l._selector), style: r };
        } catch {
        }
    }
  }
  t.fromJSONObject = e;
  function n(a) {
    return {
      _selector: a.selector.id,
      _style: f.toJSONObject(a.style)
    };
  }
  t.toJSONObject = n;
  function o(a, l) {
    return a === l ? !0 : a !== void 0 && l !== void 0 && a.selector && l.selector && a.selector.id === l.selector.id && f.equals(a.style, l.style);
  }
  t.equals = o;
  function s(a) {
    return a && a.selector && typeof a.selector.id == "string" && f.is(a.style);
  }
  t.is = s;
})(C || (C = {}));
class G {
  constructor() {
    this._onDidChangeSchema = new j(), this.onDidChangeSchema = this._onDidChangeSchema.event, this.currentTypeNumber = 0, this.currentModifierBit = 1, this.tokenStylingDefaultRules = [], this.tokenStylingSchema = {
      type: "object",
      properties: {},
      patternProperties: {
        [J]: S()
      },
      additionalProperties: !1,
      definitions: {
        style: {
          type: "object",
          description: i("schema.token.settings", "Colors and styles for the token."),
          properties: {
            foreground: {
              type: "string",
              description: i("schema.token.foreground", "Foreground color for the token."),
              format: "color-hex",
              default: "#ff0000"
            },
            background: {
              type: "string",
              deprecationMessage: i(
                "schema.token.background.warning",
                "Token background colors are currently not supported."
              )
            },
            fontStyle: {
              type: "string",
              description: i(
                "schema.token.fontStyle",
                "Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or a combination. All styles that are not listed are unset. The empty string unsets all styles."
              ),
              pattern: F,
              patternErrorMessage: i(
                "schema.fontStyle.error",
                "Font style must be 'italic', 'bold', 'underline' or 'strikethrough' or a combination. The empty string unsets all styles."
              ),
              defaultSnippets: [
                { label: i("schema.token.fontStyle.none", "None (clear inherited style)"), bodyText: '""' },
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
            },
            bold: {
              type: "boolean",
              description: i(
                "schema.token.bold",
                "Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this setting."
              )
            },
            italic: {
              type: "boolean",
              description: i(
                "schema.token.italic",
                "Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this setting."
              )
            },
            underline: {
              type: "boolean",
              description: i(
                "schema.token.underline",
                "Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides this setting."
              )
            },
            strikethrough: {
              type: "boolean",
              description: i(
                "schema.token.strikethrough",
                "Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle' overrides this setting."
              )
            }
          },
          defaultSnippets: [{ body: { foreground: "${1:#FF0000}", fontStyle: "${2:bold}" } }]
        }
      }
    }, this.tokenTypeById = /* @__PURE__ */ Object.create(null), this.tokenModifierById = /* @__PURE__ */ Object.create(null), this.typeHierarchy = /* @__PURE__ */ Object.create(null);
  }
  registerTokenType(e, n, o, s) {
    if (!e.match(g))
      throw new Error("Invalid token type id.");
    if (o && !o.match(g))
      throw new Error("Invalid token super type id.");
    const l = { num: this.currentTypeNumber++, id: e, superType: o, description: n, deprecationMessage: s };
    this.tokenTypeById[e] = l;
    const r = S(n, s);
    this.tokenStylingSchema.properties[e] = r, this.typeHierarchy = /* @__PURE__ */ Object.create(null);
  }
  registerTokenModifier(e, n, o) {
    if (!e.match(g))
      throw new Error("Invalid token modifier id.");
    const s = this.currentModifierBit;
    this.currentModifierBit = this.currentModifierBit * 2;
    const a = { num: s, id: e, description: n, deprecationMessage: o };
    this.tokenModifierById[e] = a, this.tokenStylingSchema.properties[`*.${e}`] = S(n, o);
  }
  parseTokenSelector(e, n) {
    const o = K(e, n);
    return o.type ? {
      match: (s, a, l) => {
        let r = 0;
        if (o.language !== void 0) {
          if (o.language !== l)
            return -1;
          r += 10;
        }
        if (o.type !== $) {
          const d = this.getTypeHierarchy(s).indexOf(o.type);
          if (d === -1)
            return -1;
          r += 100 - d;
        }
        for (const c of o.modifiers)
          if (a.indexOf(c) === -1)
            return -1;
        return r + o.modifiers.length * 100;
      },
      id: `${[o.type, ...o.modifiers.sort()].join(".")}${o.language !== void 0 ? ":" + o.language : ""}`
    } : {
      match: () => -1,
      id: "$invalid"
    };
  }
  registerTokenStyleDefault(e, n) {
    this.tokenStylingDefaultRules.push({ selector: e, defaults: n });
  }
  deregisterTokenStyleDefault(e) {
    const n = e.id;
    this.tokenStylingDefaultRules = this.tokenStylingDefaultRules.filter((o) => o.selector.id !== n);
  }
  deregisterTokenType(e) {
    delete this.tokenTypeById[e], delete this.tokenStylingSchema.properties[e], this.typeHierarchy = /* @__PURE__ */ Object.create(null);
  }
  deregisterTokenModifier(e) {
    delete this.tokenModifierById[e], delete this.tokenStylingSchema.properties[`*.${e}`];
  }
  getTokenTypes() {
    return Object.keys(this.tokenTypeById).map((e) => this.tokenTypeById[e]);
  }
  getTokenModifiers() {
    return Object.keys(this.tokenModifierById).map((e) => this.tokenModifierById[e]);
  }
  getTokenStylingSchema() {
    return this.tokenStylingSchema;
  }
  getTokenStylingDefaultRules() {
    return this.tokenStylingDefaultRules;
  }
  getTypeHierarchy(e) {
    let n = this.typeHierarchy[e];
    if (!n) {
      this.typeHierarchy[e] = n = [e];
      let o = this.tokenTypeById[e];
      for (; o && o.superType; )
        n.push(o.superType), o = this.tokenTypeById[o.superType];
    }
    return n;
  }
  toString() {
    const e = (n, o) => {
      const s = n.indexOf(".") === -1 ? 0 : 1, a = o.indexOf(".") === -1 ? 0 : 1;
      return s !== a ? s - a : n.localeCompare(o);
    };
    return Object.keys(this.tokenTypeById).sort(e).map((n) => `- \`${n}\`: ${this.tokenTypeById[n].description}`).join(`
`);
  }
}
const I = N.charCodeAt(0), U = M.charCodeAt(0);
function K(t, e) {
  let n = t.length, o = e;
  const s = [];
  for (let l = n - 1; l >= 0; l--) {
    const r = t.charCodeAt(l);
    if (r === I || r === U) {
      const c = t.substring(l + 1, n);
      n = l, r === I ? o = c : s.push(c);
    }
  }
  return { type: t.substring(0, n), modifiers: s, language: o };
}
const k = q();
function q() {
  const t = new G();
  function e(o, s, a = [], l, r) {
    return t.registerTokenType(o, s, l, r), a && n(o, a), o;
  }
  function n(o, s) {
    try {
      const a = t.parseTokenSelector(o);
      t.registerTokenStyleDefault(a, { scopesToProbe: s });
    } catch (a) {
      console.log(a);
    }
  }
  return e("comment", i("comment", "Style for comments."), [["comment"]]), e("string", i("string", "Style for strings."), [["string"]]), e("keyword", i("keyword", "Style for keywords."), [["keyword.control"]]), e("number", i("number", "Style for numbers."), [["constant.numeric"]]), e("regexp", i("regexp", "Style for expressions."), [["constant.regexp"]]), e("operator", i("operator", "Style for operators."), [["keyword.operator"]]), e("namespace", i("namespace", "Style for namespaces."), [["entity.name.namespace"]]), e("type", i("type", "Style for types."), [["entity.name.type"], ["support.type"]]), e("struct", i("struct", "Style for structs."), [["entity.name.type.struct"]]), e("class", i("class", "Style for classes."), [["entity.name.type.class"], ["support.class"]]), e("interface", i("interface", "Style for interfaces."), [["entity.name.type.interface"]]), e("enum", i("enum", "Style for enums."), [["entity.name.type.enum"]]), e("typeParameter", i("typeParameter", "Style for type parameters."), [["entity.name.type.parameter"]]), e("function", i("function", "Style for functions"), [["entity.name.function"], ["support.function"]]), e("member", i("member", "Style for member functions"), [], "method", "Deprecated use `method` instead"), e("method", i("method", "Style for method (member functions)"), [["entity.name.function.member"], ["support.function"]]), e("macro", i("macro", "Style for macros."), [["entity.name.function.preprocessor"]]), e("variable", i("variable", "Style for variables."), [["variable.other.readwrite"], ["entity.name.variable"]]), e("parameter", i("parameter", "Style for parameters."), [["variable.parameter"]]), e("property", i("property", "Style for properties."), [["variable.other.property"]]), e("enumMember", i("enumMember", "Style for enum members."), [["variable.other.enummember"]]), e("event", i("event", "Style for events."), [["variable.other.event"]]), e("decorator", i("decorator", "Style for decorators & annotations."), [["entity.name.decorator"], ["entity.name.function"]]), e("label", i("labels", "Style for labels. "), void 0), t.registerTokenModifier("declaration", i("declaration", "Style for all symbol declarations."), void 0), t.registerTokenModifier("documentation", i("documentation", "Style to use for references in documentation."), void 0), t.registerTokenModifier("static", i("static", "Style to use for symbols that are static."), void 0), t.registerTokenModifier("abstract", i("abstract", "Style to use for symbols that are abstract."), void 0), t.registerTokenModifier("deprecated", i("deprecated", "Style to use for symbols that are deprecated."), void 0), t.registerTokenModifier("modification", i("modification", "Style to use for write accesses."), void 0), t.registerTokenModifier("async", i("async", "Style to use for symbols that are async."), void 0), t.registerTokenModifier("readonly", i("readonly", "Style to use for symbols that are readonly."), void 0), n("variable.readonly", [["variable.other.constant"]]), n("property.readonly", [["variable.other.constant.property"]]), n("type.defaultLibrary", [["support.type"]]), n("class.defaultLibrary", [["support.class"]]), n("interface.defaultLibrary", [["support.class"]]), n("variable.defaultLibrary", [["support.variable"], ["support.other.variable"]]), n("variable.defaultLibrary.readonly", [["support.constant"]]), n("property.defaultLibrary", [["support.variable.property"]]), n("property.defaultLibrary.readonly", [["support.constant.property"]]), n("function.defaultLibrary", [["support.function"]]), n("member.defaultLibrary", [["support.function"]]), t;
}
function ne() {
  return k;
}
function S(t, e) {
  return {
    description: t,
    deprecationMessage: e,
    defaultSnippets: [{ body: "${1:#ff0000}" }],
    anyOf: [
      {
        type: "string",
        format: "color-hex"
      },
      {
        $ref: "#/definitions/style"
      }
    ]
  };
}
const x = "vscode://schemas/token-styling", v = L.as(P.JSONContribution);
v.registerSchema(x, k.getTokenStylingSchema());
const R = new B(() => v.notifySchemaChanged(x), 200);
k.onDidChangeSchema(() => {
  R.isScheduled() || R.schedule();
});
export {
  E,
  z as I,
  C as S,
  f as T,
  Q as V,
  X as a,
  ee as b,
  te as c,
  Y as d,
  W as e,
  x as f,
  ne as g,
  Z as h,
  O as i,
  g as j,
  K as p,
  re as t
};

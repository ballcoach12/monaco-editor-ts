import { N as g, _ as D, a as p, ba as Z, da as we, ic as ye, en as Pe, id as Oe, e6 as Ge, b1 as O, ie as ke, b4 as Se, ig as Ae, e9 as Ke, a_ as be, aH as Te, ee as Be, ih as q, ii as oe, ij as x, ik as k, aq as je, il as ve, eV as v, im as Ue, e as Me, e$ as Ee, e7 as We, H as Ce, U as I, S as C, io as Le, cS as Fe, a3 as xe, f2 as Ve, p as Re, an as G, a0 as ee, d5 as te, ip as $e, hN as qe, D as ie, iq as K, ir as Je, is as ze, it as He, iu as Xe, dC as U, ft as Ye, a5 as Qe, n as Ze, G as et, f as tt, cj as it, fp as nt, d_ as st, er as rt, b as ot, I as at, iv as ut, a8 as lt, f9 as ct, iw as dt, bE as gt, ix as ae, iy as W, x as ue, iz as ht, iA as ft, iB as mt, iC as pt, aB as yt, cX as St, iD as bt, w as vt, gP as Mt, iE as Et, hO as le, bC as Ct } from "./verifyPrepare-e26a1ce7.js";
import { g as Lt } from "./unboundCommands-b88e3bb8.js";
const F = "keybinding.entry.template", ce = g("default", "System"), de = g("extension", "Extension"), ge = g("user", "User"), xt = q(Ue, x, ve), he = /@source:\s*(user|default|system|extension)/i, fe = /@ext:\s*((".+")|([^\s]+))/i;
let J = class M extends ye {
  constructor(e, t, i) {
    super(), this.keybindingsService = t, this.extensionService = i, this._keybindingItems = [], this._keybindingItemsSortedByPrecedence = [], this.modifierLabels = {
      ui: Pe.modifierLabels[e],
      aria: Oe.modifierLabels[e],
      user: Ge.modifierLabels[e]
    };
  }
  fetch(e, t = !1) {
    let i = t ? this._keybindingItemsSortedByPrecedence : this._keybindingItems;
    const n = /@command:\s*(.+)/i.exec(e);
    if (n && n[1])
      return i.filter((s) => s.command === n[1]).map(
        (s) => ({ id: M.getId(s), keybindingItem: s, templateId: F })
      );
    if (he.test(e))
      i = this.filterBySource(i, e), e = e.replace(he, "");
    else {
      const s = fe.exec(e);
      if (s && (s[2] || s[3])) {
        const r = s[2] ? s[2].substring(1, s[2].length - 1) : s[3];
        i = this.filterByExtension(i, r), e = e.replace(fe, "");
      } else {
        const r = /@keybinding:\s*((\".+\")|(\S+))/i.exec(e);
        r && (r[2] || r[3]) && (e = r[2] || `"${r[3]}"`);
      }
    }
    return e = e.trim(), e ? this.filterByText(i, e) : i.map(
      (s) => ({ id: M.getId(s), keybindingItem: s, templateId: F })
    );
  }
  filterBySource(e, t) {
    return /@source:\s*default/i.test(t) || /@source:\s*system/i.test(t) ? e.filter((i) => i.source === ce) : /@source:\s*user/i.test(t) ? e.filter((i) => i.source === ge) : /@source:\s*extension/i.test(t) ? e.filter((i) => !O(i.source) || i.source === de) : e;
  }
  filterByExtension(e, t) {
    return t = t.toLowerCase().trim(), e.filter((i) => {
      var n;
      return !O(i.source) && (ke.equals(i.source.identifier, t) || ((n = i.source.displayName) == null ? void 0 : n.toLowerCase()) === t.toLowerCase());
    });
  }
  filterByText(e, t) {
    const i = t.charAt(0) === '"', n = t.charAt(t.length - 1) === '"', s = i && n;
    i && (t = t.substring(1)), n && (t = t.substring(0, t.length - 1)), t = t.trim();
    const r = [], o = t.split(" "), l = this.splitKeybindingWords(o);
    for (const u of e) {
      const c = new Rt(
        this.modifierLabels,
        u,
        t,
        o,
        l,
        s
      );
      (c.commandIdMatches || c.commandLabelMatches || c.commandDefaultLabelMatches || c.sourceMatches || c.whenMatches || c.keybindingMatches || c.extensionIdMatches || c.extensionLabelMatches) && r.push({
        id: M.getId(u),
        templateId: F,
        commandLabelMatches: c.commandLabelMatches || void 0,
        commandDefaultLabelMatches: c.commandDefaultLabelMatches || void 0,
        keybindingItem: u,
        keybindingMatches: c.keybindingMatches || void 0,
        commandIdMatches: c.commandIdMatches || void 0,
        sourceMatches: c.sourceMatches || void 0,
        whenMatches: c.whenMatches || void 0,
        extensionIdMatches: c.extensionIdMatches || void 0,
        extensionLabelMatches: c.extensionLabelMatches || void 0
      });
    }
    return r;
  }
  splitKeybindingWords(e) {
    const t = [];
    for (const i of e)
      t.push(...Se(i.split("+")));
    return t;
  }
  async resolve(e = /* @__PURE__ */ new Map()) {
    const t = new Ae();
    for (const s of this.extensionService.extensions)
      t.set(s.identifier, s);
    this._keybindingItemsSortedByPrecedence = [];
    const i = /* @__PURE__ */ new Map();
    for (const s of this.keybindingsService.getKeybindings())
      s.command && (this._keybindingItemsSortedByPrecedence.push(M.toKeybindingEntry(s.command, s, e, t)), i.set(s.command, !0));
    const n = this.keybindingsService.getDefaultKeybindings().map((s) => s.command);
    for (const s of Lt(i)) {
      const r = new Ke(
        void 0,
        s,
        null,
        void 0,
        n.indexOf(s) === -1,
        null,
        !1
      );
      this._keybindingItemsSortedByPrecedence.push(M.toKeybindingEntry(s, r, e, t));
    }
    return this._keybindingItemsSortedByPrecedence = be(this._keybindingItemsSortedByPrecedence, (s) => M.getId(s)), this._keybindingItems = this._keybindingItemsSortedByPrecedence.slice(0).sort((s, r) => M.compareKeybindingData(s, r)), super.resolve();
  }
  static getId(e) {
    var t;
    return e.command + (((t = e == null ? void 0 : e.keybinding) == null ? void 0 : t.getAriaLabel()) ?? "") + e.when + (O(e.source) ? e.source : e.source.identifier.value);
  }
  static compareKeybindingData(e, t) {
    return e.keybinding && !t.keybinding ? -1 : t.keybinding && !e.keybinding ? 1 : e.commandLabel && !t.commandLabel ? -1 : t.commandLabel && !e.commandLabel ? 1 : e.commandLabel && t.commandLabel && e.commandLabel !== t.commandLabel ? e.commandLabel.localeCompare(t.commandLabel) : e.command === t.command ? e.keybindingItem.isDefault ? 1 : -1 : e.command.localeCompare(t.command);
  }
  static toKeybindingEntry(e, t, i, n) {
    var l;
    const s = Te.getCommand(e), r = i.get(e);
    let o = ge;
    if (t.isDefault) {
      const u = t.extensionId ?? (t.resolvedKeybinding || (l = s == null ? void 0 : s.source) == null ? void 0 : l.id);
      o = u ? n.get(u) ?? de : ce;
    }
    return {
      keybinding: t.resolvedKeybinding,
      keybindingItem: t,
      command: e,
      commandLabel: M.getCommandLabel(s, r),
      commandDefaultLabel: M.getCommandDefaultLabel(s),
      when: t.when ? t.when.serialize() : "",
      source: o
    };
  }
  static getCommandDefaultLabel(e) {
    if (!Be.isDefaultVariant() && e && e.title && e.title.original) {
      const t = e.category ? e.category.original : void 0, i = e.title.original;
      return t ? g("cat.title", "{0}: {1}", t, i) : i;
    }
    return null;
  }
  static getCommandLabel(e, t) {
    if (e) {
      const i = e.category ? typeof e.category == "string" ? e.category : e.category.value : void 0, n = typeof e.title == "string" ? e.title : e.title.value;
      return i ? g("cat.title", "{0}: {1}", i, n) : n;
    }
    return t || "";
  }
};
J = D([
  p(1, Z),
  p(2, we)
], J);
class Rt {
  constructor(e, t, i, n, s, r) {
    this.modifierLabels = e, this.commandIdMatches = null, this.commandLabelMatches = null, this.commandDefaultLabelMatches = null, this.sourceMatches = null, this.whenMatches = null, this.keybindingMatches = null, this.extensionIdMatches = null, this.extensionLabelMatches = null, r || (this.commandIdMatches = this.matches(i, t.command, q(x, oe), n), this.commandLabelMatches = t.commandLabel ? this.matches(i, t.commandLabel, (o, l) => x(o, t.commandLabel, !0), n) : null, this.commandDefaultLabelMatches = t.commandDefaultLabel ? this.matches(i, t.commandDefaultLabel, (o, l) => x(o, t.commandDefaultLabel, !0), n) : null, this.whenMatches = t.when ? this.matches(null, t.when, q(x, oe), n) : null, O(t.source) ? this.sourceMatches = this.matches(i, t.source, (o, l) => x(o, t.source, !0), n) : this.extensionLabelMatches = t.source.displayName ? this.matches(i, t.source.displayName, (o, l) => x(o, t.commandLabel, !0), n) : null), this.keybindingMatches = t.keybinding ? this.matchesKeybinding(t.keybinding, i, s, r) : null;
  }
  matches(e, t, i, n) {
    let s = e ? xt(e, t) : null;
    return s || (s = this.matchesWords(n, t, i)), s && (s = this.filterAndSort(s)), s;
  }
  matchesWords(e, t, i) {
    let n = [];
    for (const s of e) {
      const r = i(s, t);
      if (r)
        n = [...n || [], ...r];
      else {
        n = null;
        break;
      }
    }
    return n;
  }
  filterAndSort(e) {
    return be(e, (t) => t.start + "." + t.end).filter((t) => !e.some(
      (i) => !(i.start === t.start && i.end === t.end) && i.start <= t.start && i.end >= t.end
    )).sort((t, i) => t.start - i.start);
  }
  matchesKeybinding(e, t, i, n) {
    const [s, r] = e.getChords(), o = e.getUserSettingsLabel(), l = e.getAriaLabel(), u = e.getLabel();
    if (o && k(t, o) === 0 || l && k(t, l) === 0 || u && k(t, u) === 0)
      return {
        firstPart: this.createCompleteMatch(s),
        chordPart: this.createCompleteMatch(r)
      };
    const c = {};
    let d = {};
    const f = [], m = [];
    let h = [], S = !0;
    for (let b = 0; b < i.length; b++) {
      const L = i[b];
      let E = !1, R = !1;
      S = S && !c.keyCode;
      let N = !d.keyCode;
      if (S && (E = this.matchPart(s, c, L, n), c.keyCode)) {
        for (const w of h)
          m.indexOf(w) === -1 && f.splice(f.indexOf(w), 1);
        d = {}, h = [], N = !1;
      }
      N && (R = this.matchPart(r, d, L, n)), E && m.push(b), R && h.push(b), (E || R) && f.push(b), S = S && this.isModifier(L);
    }
    return f.length !== i.length || n && (!this.isCompleteMatch(s, c) || !je(d) && !this.isCompleteMatch(r, d)) ? null : this.hasAnyMatch(c) || this.hasAnyMatch(d) ? { firstPart: c, chordPart: d } : null;
  }
  matchPart(e, t, i, n) {
    let s = !1;
    return this.matchesMetaModifier(e, i) && (s = !0, t.metaKey = !0), this.matchesCtrlModifier(e, i) && (s = !0, t.ctrlKey = !0), this.matchesShiftModifier(e, i) && (s = !0, t.shiftKey = !0), this.matchesAltModifier(e, i) && (s = !0, t.altKey = !0), this.matchesKeyCode(e, i, n) && (t.keyCode = !0, s = !0), s;
  }
  matchesKeyCode(e, t, i) {
    if (!e)
      return !1;
    const n = e.keyAriaLabel || "";
    if (i || n.length === 1 || t.length === 1) {
      if (k(n, t) === 0)
        return !0;
    } else if (ve(t, n))
      return !0;
    return !1;
  }
  matchesMetaModifier(e, t) {
    return !e || !e.metaKey ? !1 : this.wordMatchesMetaModifier(t);
  }
  matchesCtrlModifier(e, t) {
    return !e || !e.ctrlKey ? !1 : this.wordMatchesCtrlModifier(t);
  }
  matchesShiftModifier(e, t) {
    return !e || !e.shiftKey ? !1 : this.wordMatchesShiftModifier(t);
  }
  matchesAltModifier(e, t) {
    return !e || !e.altKey ? !1 : this.wordMatchesAltModifier(t);
  }
  hasAnyMatch(e) {
    return !!e.altKey || !!e.ctrlKey || !!e.metaKey || !!e.shiftKey || !!e.keyCode;
  }
  isCompleteMatch(e, t) {
    return e ? !(!t.keyCode || e.metaKey && !t.metaKey || e.altKey && !t.altKey || e.ctrlKey && !t.ctrlKey || e.shiftKey && !t.shiftKey) : !0;
  }
  createCompleteMatch(e) {
    const t = {};
    return e && (t.keyCode = !0, e.metaKey && (t.metaKey = !0), e.altKey && (t.altKey = !0), e.ctrlKey && (t.ctrlKey = !0), e.shiftKey && (t.shiftKey = !0)), t;
  }
  isModifier(e) {
    return !!(this.wordMatchesAltModifier(e) || this.wordMatchesCtrlModifier(e) || this.wordMatchesMetaModifier(e) || this.wordMatchesShiftModifier(e));
  }
  wordMatchesAltModifier(e) {
    return !!(v(this.modifierLabels.ui.altKey, e) || v(this.modifierLabels.aria.altKey, e) || v(this.modifierLabels.user.altKey, e) || v(g("option", "option"), e));
  }
  wordMatchesCtrlModifier(e) {
    return !!(v(this.modifierLabels.ui.ctrlKey, e) || v(this.modifierLabels.aria.ctrlKey, e) || v(this.modifierLabels.user.ctrlKey, e));
  }
  wordMatchesMetaModifier(e) {
    return !!(v(this.modifierLabels.ui.metaKey, e) || v(this.modifierLabels.aria.metaKey, e) || v(this.modifierLabels.user.metaKey, e) || v(g("meta", "meta"), e));
  }
  wordMatchesShiftModifier(e) {
    return !!(v(this.modifierLabels.ui.shiftKey, e) || v(this.modifierLabels.aria.shiftKey, e) || v(this.modifierLabels.user.shiftKey, e));
  }
}
let T = class z extends Ee {
  constructor(e) {
    super(), this.searchOptions = null, this.resource = void 0, this.keybindingsModel = e.createInstance(J, We);
  }
  get typeId() {
    return z.ID;
  }
  getName() {
    return g("keybindingsInputName", "Keyboard Shortcuts");
  }
  async resolve() {
    return this.keybindingsModel;
  }
  matches(e) {
    return e instanceof z;
  }
  dispose() {
    this.keybindingsModel.dispose(), super.dispose();
  }
};
T.ID = "workbench.input.keybindings";
T = D([
  p(0, Me)
], T);
let B = class H extends Ee {
  constructor(e) {
    super(), this.resource = I.from({
      scheme: C.vscodeSettings,
      path: "settingseditor"
    }), this._settingsModel = e.createSettings2EditorModel();
  }
  matches(e) {
    return super.matches(e) || e instanceof H;
  }
  get typeId() {
    return H.ID;
  }
  getName() {
    return g("settingsEditor2InputName", "Settings");
  }
  async resolve() {
    return this._settingsModel;
  }
  dispose() {
    this._settingsModel.dispose(), super.dispose();
  }
};
B.ID = "workbench.input.settings2";
B = D([
  p(0, Ce)
], B);
function _(a, ...e) {
  return e.some((t) => a.includes(t));
}
function me(a) {
  return a === "" || Ve(a);
}
function Ie(a) {
  const e = Array.isArray(a.type) ? a.type : [a.type], t = _(e, "null"), i = (_(e, "number") || _(e, "integer")) && (e.length === 1 || e.length === 2 && t), n = _t(a), s = It(a), r = Dt(a), o = Nt(a);
  return (l) => {
    if (t && me(l))
      return "";
    const u = [];
    if (r) {
      const c = r(l);
      c && u.push(c);
    }
    if (o) {
      const c = o(l);
      c && u.push(c);
    }
    return a.type === "boolean" && l !== !0 && l !== !1 && u.push(g("validations.booleanIncorrectType", 'Incorrect type. Expected "boolean".')), i && (me(l) || typeof l == "boolean" || Array.isArray(l) || isNaN(+l) ? u.push(g("validations.expectedNumeric", "Value must be a number.")) : u.push(...n.filter((c) => !c.isValid(+l)).map((c) => c.message))), a.type === "string" && (a.enum && !Le(a.enum) ? u.push(g(
      "validations.stringIncorrectEnumOptions",
      "The enum options should be strings, but there is a non-string option. Please file an issue with the extension author."
    )) : O(l) ? u.push(...s.filter((c) => !c.isValid(l)).map((c) => c.message)) : u.push(g("validations.stringIncorrectType", 'Incorrect type. Expected "string".'))), u.length ? a.errorMessage ? [a.errorMessage, ...u].join(" ") : u.join(" ") : "";
  };
}
function It(a) {
  const e = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  let t;
  return typeof a.pattern == "string" && (t = new RegExp(a.pattern)), [
    {
      enabled: a.maxLength !== void 0,
      isValid: (i) => i.length <= a.maxLength,
      message: g(
        "validations.maxLength",
        "Value must be {0} or fewer characters long.",
        a.maxLength
      )
    },
    {
      enabled: a.minLength !== void 0,
      isValid: (i) => i.length >= a.minLength,
      message: g(
        "validations.minLength",
        "Value must be {0} or more characters long.",
        a.minLength
      )
    },
    {
      enabled: t !== void 0,
      isValid: (i) => t.test(i),
      message: a.patternErrorMessage || g("validations.regex", "Value must match regex `{0}`.", a.pattern)
    },
    {
      enabled: a.format === "color-hex",
      isValid: (i) => Fe.Format.CSS.parseHex(i),
      message: g(
        "validations.colorFormat",
        "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
      )
    },
    {
      enabled: a.format === "uri" || a.format === "uri-reference",
      isValid: (i) => !!i.length,
      message: g("validations.uriEmpty", "URI expected.")
    },
    {
      enabled: a.format === "uri" || a.format === "uri-reference",
      isValid: (i) => e.test(i),
      message: g("validations.uriMissing", "URI is expected.")
    },
    {
      enabled: a.format === "uri",
      isValid: (i) => {
        const n = i.match(e);
        return !!(n && n[2]);
      },
      message: g("validations.uriSchemeMissing", "URI with a scheme is expected.")
    },
    {
      enabled: a.enum !== void 0,
      isValid: (i) => a.enum.includes(i),
      message: g(
        "validations.invalidStringEnumValue",
        "Value is not accepted. Valid values: {0}.",
        a.enum ? a.enum.map((i) => `"${i}"`).join(", ") : "[]"
      )
    }
  ].filter((i) => i.enabled);
}
function _t(a) {
  const e = Array.isArray(a.type) ? a.type : [a.type], t = _(e, "null"), i = _(e, "integer") && (e.length === 1 || e.length === 2 && t);
  if (!(_(e, "number", "integer") && (e.length === 1 || e.length === 2 && t)))
    return [];
  let s, r;
  return typeof a.exclusiveMaximum == "boolean" ? s = a.exclusiveMaximum ? a.maximum : void 0 : s = a.exclusiveMaximum, typeof a.exclusiveMinimum == "boolean" ? r = a.exclusiveMinimum ? a.minimum : void 0 : r = a.exclusiveMinimum, [
    {
      enabled: s !== void 0 && (a.maximum === void 0 || s <= a.maximum),
      isValid: (o) => o < s,
      message: g(
        "validations.exclusiveMax",
        "Value must be strictly less than {0}.",
        s
      )
    },
    {
      enabled: r !== void 0 && (a.minimum === void 0 || r >= a.minimum),
      isValid: (o) => o > r,
      message: g(
        "validations.exclusiveMin",
        "Value must be strictly greater than {0}.",
        r
      )
    },
    {
      enabled: a.maximum !== void 0 && (s === void 0 || s > a.maximum),
      isValid: (o) => o <= a.maximum,
      message: g(
        "validations.max",
        "Value must be less than or equal to {0}.",
        a.maximum
      )
    },
    {
      enabled: a.minimum !== void 0 && (r === void 0 || r < a.minimum),
      isValid: (o) => o >= a.minimum,
      message: g(
        "validations.min",
        "Value must be greater than or equal to {0}.",
        a.minimum
      )
    },
    {
      enabled: a.multipleOf !== void 0,
      isValid: (o) => o % a.multipleOf === 0,
      message: g(
        "validations.multipleOf",
        "Value must be a multiple of {0}.",
        a.multipleOf
      )
    },
    {
      enabled: i,
      isValid: (o) => o % 1 === 0,
      message: g("validations.expectedInteger", "Value must be an integer.")
    }
  ].filter((o) => o.enabled);
}
function Dt(a) {
  if (a.type === "array" && a.items && !Array.isArray(a.items)) {
    const e = a.items;
    if (e && !Array.isArray(e.type)) {
      const t = (i) => "'" + i + "'";
      return (i) => {
        if (!i)
          return null;
        let n = "";
        if (!Array.isArray(i))
          return n += g("validations.arrayIncorrectType", "Incorrect type. Expected an array."), n += `
`, n;
        const s = i;
        if (a.uniqueItems && new Set(s).size < s.length && (n += g("validations.stringArrayUniqueItems", "Array has duplicate items"), n += `
`), a.minItems && s.length < a.minItems && (n += g(
          "validations.stringArrayMinItem",
          "Array must have at least {0} items",
          a.minItems
        ), n += `
`), a.maxItems && s.length > a.maxItems && (n += g(
          "validations.stringArrayMaxItem",
          "Array must have at most {0} items",
          a.maxItems
        ), n += `
`), e.type === "string") {
          if (!Le(s))
            return n += g(
              "validations.stringArrayIncorrectType",
              "Incorrect type. Expected a string array."
            ), n += `
`, n;
          if (typeof e.pattern == "string") {
            const o = new RegExp(e.pattern);
            s.forEach((l) => {
              o.test(l) || (n += e.patternErrorMessage || g(
                "validations.stringArrayItemPattern",
                "Value {0} must match regex {1}.",
                t(l),
                t(e.pattern)
              ));
            });
          }
          const r = e.enum;
          r && s.forEach((o) => {
            r.indexOf(o) === -1 && (n += g(
              "validations.stringArrayItemEnum",
              "Value {0} is not one of {1}",
              t(o),
              "[" + r.map(t).join(", ") + "]"
            ), n += `
`);
          });
        } else
          (e.type === "integer" || e.type === "number") && s.forEach((r) => {
            const o = A(e, r);
            o && (n += `${r}: ${o}
`);
          });
        return n;
      };
    }
  }
  return null;
}
function Nt(a) {
  if (a.type === "object") {
    const { properties: e, patternProperties: t, additionalProperties: i } = a;
    return (n) => {
      if (!n)
        return null;
      const s = [];
      return xe(n) ? Object.keys(n).forEach((r) => {
        const o = n[r];
        if (e && r in e) {
          const l = A(e[r], o);
          l && s.push(`${r}: ${l}
`);
          return;
        }
        if (t) {
          for (const l in t)
            if (RegExp(l).test(r)) {
              const u = A(t[l], o);
              u && s.push(`${r}: ${u}
`);
              return;
            }
        }
        if (i === !1)
          s.push(g("validations.objectPattern", `Property {0} is not allowed.
`, r));
        else if (typeof i == "object") {
          const l = A(i, o);
          l && s.push(`${r}: ${l}
`);
        }
      }) : s.push(g("validations.objectIncorrectType", "Incorrect type. Expected an object.")), s.length ? a.errorMessage ? [a.errorMessage, ...s].join(" ") : s.join(" ") : "";
    };
  }
  return null;
}
function A(a, e) {
  return Ie(a)(e);
}
const y = { startLineNumber: -1, startColumn: -1, endLineNumber: -1, endColumn: -1 };
function V(a) {
  return a.startLineNumber === -1 && a.startColumn === -1 && a.endLineNumber === -1 && a.endColumn === -1;
}
class ne extends ye {
  constructor() {
    super(...arguments), this._currentResultGroups = /* @__PURE__ */ new Map();
  }
  updateResultGroup(e, t) {
    return t ? this._currentResultGroups.set(e, t) : this._currentResultGroups.delete(e), this.removeDuplicateResults(), this.update();
  }
  removeDuplicateResults() {
    const e = /* @__PURE__ */ new Set();
    [...this._currentResultGroups.keys()].sort((t, i) => this._currentResultGroups.get(t).order - this._currentResultGroups.get(i).order).forEach((t) => {
      const i = this._currentResultGroups.get(t);
      i.result.filterMatches = i.result.filterMatches.filter((n) => !e.has(n.setting.key)), i.result.filterMatches.forEach((n) => e.add(n.setting.key));
    });
  }
  compareTwoNullableNumbers(e, t) {
    const i = e ?? Number.MAX_SAFE_INTEGER, n = t ?? Number.MAX_SAFE_INTEGER;
    return i < n ? -1 : i > n ? 1 : 0;
  }
  filterSettings(e, t, i) {
    const n = this.filterGroups, s = [];
    for (const r of n) {
      const o = t(r);
      for (const l of r.sections)
        for (const u of l.settings) {
          const c = i(u, r);
          (o || c) && s.push({
            setting: u,
            matches: c && c.matches,
            matchType: (c == null ? void 0 : c.matchType) ?? $e.None,
            score: (c == null ? void 0 : c.score) ?? 0
          });
        }
    }
    return s.sort((r, o) => {
      if (r.matchType !== o.matchType)
        return o.matchType - r.matchType;
      if (r.setting.extensionInfo && o.setting.extensionInfo && r.setting.extensionInfo.id === o.setting.extensionInfo.id) {
        if (r.setting.categoryLabel !== o.setting.categoryLabel && (r.setting.categoryOrder !== void 0 || o.setting.categoryOrder !== void 0) && r.setting.categoryOrder !== o.setting.categoryOrder)
          return this.compareTwoNullableNumbers(r.setting.categoryOrder, o.setting.categoryOrder);
        if (r.setting.categoryLabel === o.setting.categoryLabel && (r.setting.order !== void 0 || o.setting.order !== void 0) && r.setting.order !== o.setting.order)
          return this.compareTwoNullableNumbers(r.setting.order, o.setting.order);
      }
      return o.score - r.score;
    }), s;
  }
  getPreference(e) {
    for (const t of this.settingsGroups)
      for (const i of t.sections)
        for (const n of i.settings)
          if (e === n.key)
            return n;
  }
  collectMetadata(e) {
    const t = /* @__PURE__ */ Object.create(null);
    let i = !1;
    return e.forEach((n) => {
      n.result.metadata && (t[n.id] = n.result.metadata, i = !0);
    }), i ? t : null;
  }
  get filterGroups() {
    return this.settingsGroups;
  }
}
class _e extends ne {
  constructor(e, t) {
    super(), this._configurationTarget = t, this._onDidChangeGroups = this._register(new G()), this.onDidChangeGroups = this._onDidChangeGroups.event, this.settingsModel = e.object.textEditorModel, this._register(this.onWillDispose(() => e.dispose())), this._register(this.settingsModel.onDidChangeContent(() => {
      this._settingsGroups = void 0, this._onDidChangeGroups.fire();
    }));
  }
  get uri() {
    return this.settingsModel.uri;
  }
  get configurationTarget() {
    return this._configurationTarget;
  }
  get settingsGroups() {
    return this._settingsGroups || this.parse(), this._settingsGroups;
  }
  get content() {
    return this.settingsModel.getValue();
  }
  findValueMatches(e, t) {
    return this.settingsModel.findMatches(e, t.valueRange, !1, !1, null, !1).map((i) => i.range);
  }
  isSettingsProperty(e, t) {
    return t.length === 0;
  }
  parse() {
    this._settingsGroups = De(this.settingsModel, (e, t) => this.isSettingsProperty(e, t));
  }
  update() {
    const e = [...this._currentResultGroups.values()];
    if (!e.length)
      return;
    const t = [], i = [];
    e.forEach((o) => {
      o.result.filterMatches.forEach((l) => {
        t.push(l.setting), l.matches && i.push(...l.matches);
      });
    });
    let n;
    const s = this.settingsGroups[0];
    s && (n = {
      id: s.id,
      range: s.range,
      sections: [{
        settings: t
      }],
      title: s.title,
      titleRange: s.titleRange,
      order: s.order,
      extensionInfo: s.extensionInfo
    });
    const r = this.collectMetadata(e);
    return {
      allGroups: this.settingsGroups,
      filteredGroups: n ? [n] : [],
      matches: i,
      metadata: r
    };
  }
}
let X = class extends ne {
  constructor(e, t) {
    super(), this._defaultSettings = e, this._onDidChangeGroups = this._register(new G()), this.onDidChangeGroups = this._onDidChangeGroups.event, this.dirty = !1, this._register(t.onDidChangeConfiguration((i) => {
      i.source === 7 && (this.dirty = !0, this._onDidChangeGroups.fire());
    })), this._register(ee.as(te.Configuration).onDidSchemaChange((i) => {
      this.dirty = !0, this._onDidChangeGroups.fire();
    }));
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  get settingsGroups() {
    const e = this._defaultSettings.getSettingsGroups(this.dirty);
    return this.dirty = !1, e;
  }
  findValueMatches(e, t) {
    return [];
  }
  update() {
    throw new Error("Not supported");
  }
};
X = D([
  p(1, Re)
], X);
function De(a, e) {
  const t = [];
  let i = null, n = null, s = [];
  const r = [];
  let o = -1;
  const l = {
    startLineNumber: 0,
    startColumn: 0,
    endLineNumber: 0,
    endColumn: 0
  };
  function u(d, f, m) {
    if (Array.isArray(s) ? s.push(d) : n && (s[n] = d), r.length === o + 1 || r.length === o + 2 && i !== null) {
      const h = r.length === o + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
      if (h) {
        const S = a.getPositionAt(f), b = a.getPositionAt(f + m);
        h.value = d, h.valueRange = {
          startLineNumber: S.lineNumber,
          startColumn: S.column,
          endLineNumber: b.lineNumber,
          endColumn: b.column
        }, h.range = Object.assign(h.range, {
          endLineNumber: b.lineNumber,
          endColumn: b.column
        });
      }
    }
  }
  const c = {
    onObjectBegin: (d, f) => {
      if (e(n, r)) {
        o = r.length;
        const h = a.getPositionAt(d);
        l.startLineNumber = h.lineNumber, l.startColumn = h.column;
      }
      const m = {};
      u(m, d, f), s = m, n = null, r.push(s);
    },
    onObjectProperty: (d, f, m) => {
      if (n = d, r.length === o + 1 || r.length === o + 2 && i !== null) {
        const h = a.getPositionAt(f), S = {
          description: [],
          descriptionIsMarkdown: !1,
          key: d,
          keyRange: {
            startLineNumber: h.lineNumber,
            startColumn: h.column + 1,
            endLineNumber: h.lineNumber,
            endColumn: h.column + m
          },
          range: {
            startLineNumber: h.lineNumber,
            startColumn: h.column,
            endLineNumber: 0,
            endColumn: 0
          },
          value: null,
          valueRange: y,
          descriptionRanges: [],
          overrides: [],
          overrideOf: Qe(i)
        };
        r.length === o + 1 ? (t.push(S), K.test(d) && (i = S)) : i.overrides.push(S);
      }
    },
    onObjectEnd: (d, f) => {
      if (s = r.pop(), o !== -1 && (r.length === o + 1 || r.length === o + 2 && i !== null)) {
        const m = r.length === o + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
        if (m) {
          const h = a.getPositionAt(d + f);
          m.valueRange = Object.assign(m.valueRange, {
            endLineNumber: h.lineNumber,
            endColumn: h.column
          }), m.range = Object.assign(m.range, {
            endLineNumber: h.lineNumber,
            endColumn: h.column
          });
        }
        r.length === o + 1 && (i = null);
      }
      if (r.length === o) {
        const m = a.getPositionAt(d);
        l.endLineNumber = m.lineNumber, l.endColumn = m.column, o = -1;
      }
    },
    onArrayBegin: (d, f) => {
      const m = [];
      u(m, d, f), r.push(s), s = m, n = null;
    },
    onArrayEnd: (d, f) => {
      if (s = r.pop(), r.length === o + 1 || r.length === o + 2 && i !== null) {
        const m = r.length === o + 1 ? t[t.length - 1] : i.overrides[i.overrides.length - 1];
        if (m) {
          const h = a.getPositionAt(d + f);
          m.valueRange = Object.assign(m.valueRange, {
            endLineNumber: h.lineNumber,
            endColumn: h.column
          }), m.range = Object.assign(m.range, {
            endLineNumber: h.lineNumber,
            endColumn: h.column
          });
        }
      }
    },
    onLiteralValue: u,
    onError: (d) => {
      const f = t[t.length - 1];
      f && (V(f.range) || V(f.keyRange) || V(f.valueRange)) && t.pop();
    }
  };
  return a.isDisposed() || qe(a.getValue(), c), t.length > 0 ? [{
    sections: [
      {
        settings: t
      }
    ],
    title: "",
    titleRange: y,
    range: l
  }] : [];
}
class pe extends _e {
  constructor() {
    super(...arguments), this._configurationGroups = [];
  }
  get configurationGroups() {
    return this._configurationGroups;
  }
  parse() {
    super.parse(), this._configurationGroups = De(this.settingsModel, (e, t) => t.length === 0);
  }
  isSettingsProperty(e, t) {
    return e === "settings" && t.length === 1;
  }
}
class $ extends ie {
  constructor(e, t) {
    super(), this._mostCommonlyUsedSettingsKeys = e, this.target = t, this._settingsByName = /* @__PURE__ */ new Map(), this._onDidChange = this._register(new G()), this.onDidChange = this._onDidChange.event;
  }
  getContent(e = !1) {
    return (!this._content || e) && this.initialize(), this._content;
  }
  getContentWithoutMostCommonlyUsed(e = !1) {
    return (!this._contentWithoutMostCommonlyUsed || e) && this.initialize(), this._contentWithoutMostCommonlyUsed;
  }
  getSettingsGroups(e = !1) {
    return (!this._allSettingsGroups || e) && this.initialize(), this._allSettingsGroups;
  }
  initialize() {
    this._allSettingsGroups = this.parse(), this._content = this.toContent(this._allSettingsGroups, 0), this._contentWithoutMostCommonlyUsed = this.toContent(this._allSettingsGroups, 1);
  }
  parse() {
    const e = this.getRegisteredGroups();
    return this.initAllSettingsMap(e), [this.getMostCommonlyUsedSettings(e), ...e];
  }
  getRegisteredGroups() {
    const e = ee.as(te.Configuration).getConfigurations().slice(), t = this.removeEmptySettingsGroups(e.sort(this.compareConfigurationNodes).reduce((i, n, s, r) => this.parseConfig(n, i, r), []));
    return this.sortGroups(t);
  }
  sortGroups(e) {
    return e.forEach((t) => {
      t.sections.forEach((i) => {
        i.settings.sort((n, s) => n.key.localeCompare(s.key));
      });
    }), e;
  }
  initAllSettingsMap(e) {
    this._settingsByName = /* @__PURE__ */ new Map();
    for (const t of e)
      for (const i of t.sections)
        for (const n of i.settings)
          this._settingsByName.set(n.key, n);
  }
  getMostCommonlyUsedSettings(e) {
    const t = Se(this._mostCommonlyUsedSettingsKeys.map((i) => {
      const n = this._settingsByName.get(i);
      return n ? {
        description: n.description,
        key: n.key,
        value: n.value,
        keyRange: y,
        range: y,
        valueRange: y,
        overrides: [],
        scope: 4,
        type: n.type,
        enum: n.enum,
        enumDescriptions: n.enumDescriptions,
        descriptionRanges: []
      } : null;
    }));
    return {
      id: "mostCommonlyUsed",
      range: y,
      title: g("commonlyUsed", "Commonly Used"),
      titleRange: y,
      sections: [
        {
          settings: t
        }
      ]
    };
  }
  parseConfig(e, t, i, n, s) {
    var o;
    s = s || {};
    let r = e.title;
    if (!r) {
      const l = i.find((u) => u.id === e.id && u.title);
      l && (r = l.title);
    }
    if (r && (n ? n.sections[n.sections.length - 1].title = r : (n = t.find((l) => {
      var u, c;
      return l.title === r && ((u = l.extensionInfo) == null ? void 0 : u.id) === ((c = e.extensionInfo) == null ? void 0 : c.id);
    }), n || (n = { sections: [{ settings: [] }], id: e.id || "", title: r || "", titleRange: y, order: e.order, range: y, extensionInfo: e.extensionInfo }, t.push(n)))), e.properties) {
      n || (n = { sections: [{ settings: [] }], id: e.id || "", title: e.id || "", titleRange: y, order: e.order, range: y, extensionInfo: e.extensionInfo }, t.push(n));
      const l = [];
      for (const u of [...n.sections[n.sections.length - 1].settings, ...this.parseSettings(e)])
        s[u.key] || (l.push(u), s[u.key] = !0);
      l.length && (n.sections[n.sections.length - 1].settings = l);
    }
    return (o = e.allOf) == null || o.forEach((l) => this.parseConfig(l, t, i, n, s)), t;
  }
  removeEmptySettingsGroups(e) {
    const t = [];
    for (const i of e)
      i.sections = i.sections.filter((n) => n.settings.length > 0), i.sections.length && t.push(i);
    return t;
  }
  parseSettings(e) {
    var o;
    const t = [], i = e.properties, n = e.extensionInfo, s = ((o = e.extensionInfo) == null ? void 0 : o.id) === e.id ? e.title : e.id, r = e.order;
    for (const l in i) {
      const u = i[l];
      if (this.matchesScope(u)) {
        const c = u.default;
        let d = u.markdownDescription || u.description || "";
        typeof d != "string" && (d = "");
        const f = d.split(`
`), m = K.test(l) ? this.parseOverrideSettings(u.default) : [];
        let h;
        u.type === "array" && u.items && !Array.isArray(u.items) && u.items.type && (u.items.enum ? h = "enum" : Array.isArray(u.items.type) || (h = u.items.type));
        const S = u.type === "object" ? u.properties : void 0, b = u.type === "object" ? u.patternProperties : void 0, L = u.type === "object" ? u.additionalProperties : void 0;
        let E = u.enum, R = u.markdownEnumDescriptions ?? u.enumDescriptions, N = !!u.markdownEnumDescriptions;
        h === "enum" && !Array.isArray(u.items) && (E = u.items.enum, R = u.items.markdownEnumDescriptions ?? u.items.enumDescriptions, N = !!u.items.markdownEnumDescriptions);
        let w = !1;
        u.type === "object" && !u.additionalProperties && u.properties && Object.keys(u.properties).length && (w = Object.keys(u.properties).every((P) => u.properties[P].type === "boolean"));
        let j = !1;
        K.test(l) && (j = !0);
        let re;
        if (!j) {
          const P = u;
          P && P.defaultValueSource && (re = P.defaultValueSource);
        }
        t.push({
          key: l,
          value: c,
          description: f,
          descriptionIsMarkdown: !!u.markdownDescription,
          range: y,
          keyRange: y,
          valueRange: y,
          descriptionRanges: [],
          overrides: m,
          scope: u.scope,
          type: u.type,
          arrayItemType: h,
          objectProperties: S,
          objectPatternProperties: b,
          objectAdditionalProperties: L,
          enum: E,
          enumDescriptions: R,
          enumDescriptionsAreMarkdown: N,
          uniqueItems: u.uniqueItems,
          tags: u.tags,
          disallowSyncIgnore: u.disallowSyncIgnore,
          restricted: u.restricted,
          extensionInfo: n,
          deprecationMessage: u.markdownDeprecationMessage || u.deprecationMessage,
          deprecationMessageIsMarkdown: !!u.markdownDeprecationMessage,
          validator: Ie(u),
          enumItemLabels: u.enumItemLabels,
          allKeysAreBoolean: w,
          editPresentation: u.editPresentation,
          order: u.order,
          nonLanguageSpecificDefaultValueSource: re,
          isLanguageTagSetting: j,
          categoryLabel: s,
          categoryOrder: r
        });
      }
    }
    return t;
  }
  parseOverrideSettings(e) {
    return Object.keys(e).map((t) => ({
      key: t,
      value: e[t],
      description: [],
      descriptionIsMarkdown: !1,
      range: y,
      keyRange: y,
      valueRange: y,
      descriptionRanges: [],
      overrides: []
    }));
  }
  matchesScope(e) {
    return e.scope ? this.target === 6 ? Je.indexOf(e.scope) !== -1 : this.target === 5 ? ze.indexOf(e.scope) !== -1 : !0 : !0;
  }
  compareConfigurationNodes(e, t) {
    if (typeof e.order != "number")
      return 1;
    if (typeof t.order != "number")
      return -1;
    if (e.order === t.order) {
      const i = e.title || "", n = t.title || "";
      return i.localeCompare(n);
    }
    return e.order - t.order;
  }
  toContent(e, t) {
    const i = new se();
    for (let n = t; n < e.length; n++)
      i.pushGroup(e[n], n === t, n === e.length - 1);
    return i.getContent();
  }
}
class wt extends ne {
  constructor(e, t, i) {
    super(), this._uri = e, this.defaultSettings = i, this._onDidChangeGroups = this._register(new G()), this.onDidChangeGroups = this._onDidChangeGroups.event, this._register(i.onDidChange(() => this._onDidChangeGroups.fire())), this._model = t.object.textEditorModel, this._register(this.onWillDispose(() => t.dispose()));
  }
  get uri() {
    return this._uri;
  }
  get target() {
    return this.defaultSettings.target;
  }
  get settingsGroups() {
    return this.defaultSettings.getSettingsGroups();
  }
  get filterGroups() {
    return this.settingsGroups.slice(1);
  }
  update() {
    if (this._model.isDisposed())
      return;
    const e = [...this._currentResultGroups.values()].sort((o, l) => o.order - l.order), t = e.filter((o) => o.result.filterMatches.length), i = He(this.settingsGroups).range.endLineNumber + 2, { settingsGroups: n, matches: s } = this.writeResultGroups(t, i), r = this.collectMetadata(e);
    return e.length ? {
      allGroups: this.settingsGroups,
      filteredGroups: n,
      matches: s,
      metadata: r
    } : void 0;
  }
  writeResultGroups(e, t) {
    const i = t - 1, n = new se(i), s = [], r = [];
    e.length && (n.pushLine(","), e.forEach((f) => {
      const m = this.getGroup(f);
      s.push(m), r.push(...this.writeSettingsGroupToBuilder(n, m, f.result.filterMatches));
    }));
    const o = n.getContent() + `
`, l = this._model.getLineCount(), u = new Xe(t, 1, t, 1), c = {
      text: o,
      forceMoveMarkers: !0,
      range: new U(t, 1, l, 1)
    };
    this._model.pushEditOperations([u], [c], () => [u]);
    const d = Math.min(t + 60, this._model.getLineCount());
    return this._model.tokenization.forceTokenization(d), { matches: r, settingsGroups: s };
  }
  writeSettingsGroupToBuilder(e, t, i) {
    return i = i.map((s) => ({
      setting: s.setting,
      score: s.score,
      matches: s.matches && s.matches.map((r) => new U(
        r.startLineNumber - s.setting.range.startLineNumber,
        r.startColumn,
        r.endLineNumber - s.setting.range.startLineNumber,
        r.endColumn
      ))
    })), e.pushGroup(t), Ye(i.map((s) => s.matches || []).map((s, r) => {
      const o = t.sections[0].settings[r];
      return s.map((l) => new U(
        l.startLineNumber + o.range.startLineNumber,
        l.startColumn,
        l.endLineNumber + o.range.startLineNumber,
        l.endColumn
      ));
    }));
  }
  copySetting(e) {
    return {
      description: e.description,
      scope: e.scope,
      type: e.type,
      enum: e.enum,
      enumDescriptions: e.enumDescriptions,
      key: e.key,
      value: e.value,
      range: e.range,
      overrides: [],
      overrideOf: e.overrideOf,
      tags: e.tags,
      deprecationMessage: e.deprecationMessage,
      keyRange: y,
      valueRange: y,
      descriptionIsMarkdown: void 0,
      descriptionRanges: []
    };
  }
  findValueMatches(e, t) {
    return [];
  }
  getPreference(e) {
    for (const t of this.settingsGroups)
      for (const i of t.sections)
        for (const n of i.settings)
          if (n.key === e)
            return n;
  }
  getGroup(e) {
    return {
      id: e.id,
      range: y,
      title: e.label,
      titleRange: y,
      sections: [
        {
          settings: e.result.filterMatches.map((t) => this.copySetting(t.setting))
        }
      ]
    };
  }
}
class se {
  get lineCountWithOffset() {
    return this._contentByLines.length + this._rangeOffset;
  }
  get lastLine() {
    return this._contentByLines[this._contentByLines.length - 1] || "";
  }
  constructor(e = 0) {
    this._rangeOffset = e, this._contentByLines = [];
  }
  pushLine(...e) {
    this._contentByLines.push(...e);
  }
  pushGroup(e, t, i) {
    this._contentByLines.push(t ? "[{" : "{");
    const n = this._pushGroup(e, "  ");
    if (n) {
      const s = n.range.endLineNumber - this._rangeOffset, r = this._contentByLines[s - 2];
      this._contentByLines[s - 2] = r.substring(0, r.length - 1);
    }
    this._contentByLines.push(i ? "}]" : "},");
  }
  _pushGroup(e, t) {
    let i = null;
    const n = this.lineCountWithOffset + 1;
    for (const s of e.sections) {
      if (s.title) {
        const r = this.lineCountWithOffset + 1;
        this.addDescription([s.title], t, this._contentByLines), s.titleRange = { startLineNumber: r, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
      }
      if (s.settings.length)
        for (const r of s.settings)
          this.pushSetting(r, t), i = r;
    }
    return e.range = { startLineNumber: n, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length }, i;
  }
  getContent() {
    return this._contentByLines.join(`
`);
  }
  pushSetting(e, t) {
    const i = this.lineCountWithOffset + 1;
    this.pushSettingDescription(e, t);
    let n = t;
    const s = JSON.stringify(e.key);
    n += s, e.keyRange = { startLineNumber: this.lineCountWithOffset + 1, startColumn: n.indexOf(e.key) + 1, endLineNumber: this.lineCountWithOffset + 1, endColumn: e.key.length }, n += ": ";
    const r = this.lineCountWithOffset + 1;
    this.pushValue(e, n, t), e.valueRange = { startLineNumber: r, startColumn: n.length + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length + 1 }, this._contentByLines[this._contentByLines.length - 1] += ",", this._contentByLines.push(""), e.range = { startLineNumber: i, startColumn: 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length };
  }
  pushSettingDescription(e, t) {
    var r;
    const i = (o) => o.replace(/`#(.*)#`/g, (l, u) => `\`${u}\``);
    e.descriptionRanges = [];
    const n = t + "// ", s = ((r = e.deprecationMessage) == null ? void 0 : r.split(/\n/g)) ?? [];
    for (let o of [...s, ...e.description])
      o = i(o), this._contentByLines.push(n + o), e.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(o) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
    e.enumDescriptions && e.enumDescriptions.some((o) => !!o) && e.enumDescriptions.forEach((o, l) => {
      const u = Gt(String(e.enum[l])), c = o ? `${u}: ${i(o)}` : u, d = c.split(/\n/g);
      d[0] = " - " + d[0], this._contentByLines.push(...d.map((f) => `${t}// ${f}`)), e.descriptionRanges.push({ startLineNumber: this.lineCountWithOffset, startColumn: this.lastLine.indexOf(c) + 1, endLineNumber: this.lineCountWithOffset, endColumn: this.lastLine.length });
    });
  }
  pushValue(e, t, i) {
    const n = JSON.stringify(e.value, null, i);
    if (n && typeof e.value == "object")
      if (e.overrides && e.overrides.length) {
        this._contentByLines.push(t + " {");
        for (const o of e.overrides)
          this.pushSetting(o, i + i), this._contentByLines.pop();
        const s = e.overrides[e.overrides.length - 1], r = this._contentByLines[s.range.endLineNumber - 2];
        this._contentByLines[s.range.endLineNumber - 2] = r.substring(0, r.length - 1), this._contentByLines.push(i + "}");
      } else {
        const s = n.split(`
`);
        this._contentByLines.push(t + s[0]);
        for (let r = 1; r < s.length; r++)
          this._contentByLines.push(i + s[r]);
      }
    else
      this._contentByLines.push(t + n);
  }
  addDescription(e, t, i) {
    for (const n of e)
      i.push(t + "// " + n);
  }
}
class Pt extends se {
  constructor(e = "	") {
    super(0), this.indent = e;
  }
  pushGroup(e) {
    this._pushGroup(e, this.indent);
  }
}
class Ot extends ie {
  constructor(e) {
    super(), this.defaultSettings = e, this._content = null, this._register(e.onDidChange(() => this._content = null));
  }
  get content() {
    if (this._content === null) {
      const e = new Pt();
      e.pushLine("{");
      for (const t of this.defaultSettings.getRegisteredGroups())
        e.pushGroup(t);
      e.pushLine("}"), this._content = e.getContent();
    }
    return this._content;
  }
}
function Gt(a) {
  return a && a.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
function Ne(a) {
  return "// " + g(
    "defaultKeybindingsHeader",
    "Override key bindings by placing them into your key bindings file."
  ) + `
` + a.getDefaultKeybindingsContent();
}
let Y = class {
  constructor(e, t) {
    this._uri = e, this.keybindingService = t;
  }
  get uri() {
    return this._uri;
  }
  get content() {
    return this._content || (this._content = Ne(this.keybindingService)), this._content;
  }
  getPreference() {
    return null;
  }
  dispose() {
  }
};
Y = D([
  p(1, Z)
], Y);
const kt = `{
}`;
let Q = class extends ie {
  constructor(e, t, i, n, s, r, o, l, u, c, d, f, m, h, S, b, L) {
    super(), this.editorService = e, this.editorGroupService = t, this.textFileService = i, this.configurationService = n, this.notificationService = s, this.contextService = r, this.instantiationService = o, this.userDataProfileService = l, this.userDataProfilesService = u, this.textModelResolverService = c, this.modelService = f, this.jsonEditingService = m, this.languageService = h, this.labelService = S, this.remoteAgentService = b, this.textEditorService = L, this._onDispose = this._register(new G()), this.defaultKeybindingsResource = I.from(
      { scheme: C.vscode, authority: "defaultsettings", path: "/keybindings.json" }
    ), this.defaultSettingsRawResource = I.from(
      { scheme: C.vscode, authority: "defaultsettings", path: "/defaultSettings.json" }
    ), this._register(d.onDidUpdateKeybindings(() => {
      const E = f.getModel(this.defaultKeybindingsResource);
      E && f.updateModel(E, Ne(d));
    }));
  }
  get userSettingsResource() {
    return this.userDataProfileService.currentProfile.settingsResource;
  }
  get workspaceSettingsResource() {
    if (this.contextService.getWorkbenchState() === 1)
      return null;
    const e = this.contextService.getWorkspace();
    return e.configuration || e.folders[0].toResource(ae);
  }
  get settingsEditor2Input() {
    return this.instantiationService.createInstance(B);
  }
  getFolderSettingsResource(e) {
    const t = this.contextService.getWorkspaceFolder(e);
    return t ? t.toResource(ae) : null;
  }
  resolveModel(e) {
    if (this.isDefaultSettingsResource(e)) {
      const t = this.getConfigurationTargetFromDefaultSettingsResource(e), i = this.languageService.createById("jsonc"), n = this._register(this.modelService.createModel("", i, e));
      let s;
      return this.configurationService.onDidChangeConfiguration((r) => {
        if (r.source === 7) {
          const o = this.modelService.getModel(e);
          if (!o)
            return;
          s = this.getDefaultSettings(t), this.modelService.updateModel(o, s.getContentWithoutMostCommonlyUsed(!0)), s._onDidChange.fire();
        }
      }), s || (s = this.getDefaultSettings(t), this.modelService.updateModel(n, s.getContentWithoutMostCommonlyUsed(!0))), n;
    }
    if (this.defaultSettingsRawResource.toString() === e.toString()) {
      const t = this.instantiationService.createInstance(Ot, this.getDefaultSettings(3)), i = this.languageService.createById("jsonc");
      return this._register(this.modelService.createModel(t.content, i, e));
    }
    if (this.defaultKeybindingsResource.toString() === e.toString()) {
      const t = this.instantiationService.createInstance(Y, e), i = this.languageService.createById("jsonc");
      return this._register(this.modelService.createModel(t.content, i, e));
    }
    return null;
  }
  async createPreferencesEditorModel(e) {
    if (this.isDefaultSettingsResource(e))
      return this.createDefaultSettingsEditorModel(e);
    if (this.userSettingsResource.toString() === e.toString() || this.userDataProfilesService.defaultProfile.settingsResource.toString() === e.toString())
      return this.createEditableSettingsEditorModel(3, e);
    const t = await this.getEditableSettingsURI(5);
    if (t && t.toString() === e.toString())
      return this.createEditableSettingsEditorModel(5, t);
    if (this.contextService.getWorkbenchState() === 3) {
      const s = await this.getEditableSettingsURI(6, e);
      if (s && s.toString() === e.toString())
        return this.createEditableSettingsEditorModel(6, e);
    }
    const i = await this.remoteAgentService.getEnvironment(), n = i ? i.settingsPath : null;
    return n && n.toString() === e.toString() ? this.createEditableSettingsEditorModel(4, e) : null;
  }
  openRawDefaultSettings() {
    return this.editorService.openEditor({ resource: this.defaultSettingsRawResource });
  }
  openRawUserSettings() {
    return this.editorService.openEditor({ resource: this.userSettingsResource });
  }
  shouldOpenJsonByDefault() {
    return this.configurationService.getValue("workbench.settings.editor") === "json";
  }
  openSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, e.query && (e.jsonEditor = !1), this.open(this.userSettingsResource, e);
  }
  openLanguageSpecificSettings(e, t = {}) {
    return this.shouldOpenJsonByDefault() ? (t.query = void 0, t.revealSetting = { key: `[${e}]`, edit: !0 }) : t.query = `@lang:${e}${t.query ? ` ${t.query}` : ""}`, t.target = t.target ?? 3, this.open(this.userSettingsResource, t);
  }
  open(e, t) {
    return t = {
      ...t,
      jsonEditor: t.jsonEditor ?? this.shouldOpenJsonByDefault()
    }, t.jsonEditor ? this.openSettingsJson(e, t) : this.openSettings2(t);
  }
  async openSettings2(e) {
    const t = this.settingsEditor2Input;
    return e = {
      ...e,
      focusSearch: !0
    }, await this.editorService.openEditor(t, W(e), e.openToSide ? ue : void 0), this.editorGroupService.activeGroup.activeEditorPane;
  }
  openApplicationSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, this.open(this.userDataProfilesService.defaultProfile.settingsResource, e);
  }
  openUserSettings(e = {}) {
    return e = {
      ...e,
      target: 3
    }, this.open(this.userSettingsResource, e);
  }
  async openRemoteSettings(e = {}) {
    const t = await this.remoteAgentService.getEnvironment();
    t && (e = {
      ...e,
      target: 4
    }, this.open(t.settingsPath, e));
  }
  openWorkspaceSettings(e = {}) {
    return this.workspaceSettingsResource ? (e = {
      ...e,
      target: 5
    }, this.open(this.workspaceSettingsResource, e)) : (this.notificationService.info(g(
      "openFolderFirst",
      "Open a folder or workspace first to create workspace or folder settings."
    )), Promise.reject(null));
  }
  async openFolderSettings(e = {}) {
    if (e = {
      ...e,
      target: 6
    }, !e.folderUri)
      throw new Error("Missing folder URI");
    const t = await this.getEditableSettingsURI(6, e.folderUri);
    if (!t)
      throw new Error(`Invalid folder URI - ${e.folderUri.toString()}`);
    return this.open(t, e);
  }
  async openGlobalKeybindingSettings(e, t) {
    if (t = { pinned: !0, revealIfOpened: !0, ...t }, e) {
      const i = "// " + g(
        "emptyKeybindingsHeader",
        "Place your key bindings in this file to override the defaults"
      ) + `
[
]`, n = this.userDataProfileService.currentProfile.keybindingsResource, s = !!this.configurationService.getValue("workbench.settings.openDefaultKeybindings");
      if (await this.createIfNotExists(n, i), s) {
        const r = this.editorGroupService.activeGroup, o = this.editorGroupService.addGroup(r.id, 3);
        await Promise.all([
          this.editorService.openEditor({ resource: this.defaultKeybindingsResource, options: { pinned: !0, preserveFocus: !0, revealIfOpened: !0, override: ht.id }, label: g("defaultKeybindings", "Default Keybindings"), description: "" }),
          this.editorService.openEditor({ resource: n, options: t }, o.id)
        ]);
      } else
        await this.editorService.openEditor({ resource: n, options: t });
    } else {
      const i = await this.editorService.openEditor(this.instantiationService.createInstance(T), { ...t });
      t.query && i.search(t.query);
    }
  }
  openDefaultKeybindingsFile() {
    return this.editorService.openEditor({ resource: this.defaultKeybindingsResource, label: g("defaultKeybindings", "Default Keybindings") });
  }
  async openSettingsJson(e, t) {
    const i = t != null && t.openToSide ? ue : void 0, n = await this.doOpenSettingsJson(e, t, i);
    return n && (t != null && t.revealSetting) && await this.revealSetting(t.revealSetting.key, !!t.revealSetting.edit, n, e), n;
  }
  async doOpenSettingsJson(e, t, i) {
    const n = !!this.configurationService.getValue(ft), s = !!this.configurationService.getValue(mt);
    if (n || s)
      return this.doOpenSplitJSON(e, t, i);
    const r = (t == null ? void 0 : t.target) ?? 2, o = await this.getOrCreateEditableSettingsEditorInput(r, e);
    return t = { ...t, pinned: !0 }, await this.editorService.openEditor(o, W(t), i);
  }
  async doOpenSplitJSON(e, t = {}, i) {
    const n = t.target ?? 2;
    await this.createSettingsIfNotExists(n, e);
    const s = this.createSplitJsonEditorInput(n, e);
    return t = { ...t, pinned: !0 }, this.editorService.openEditor(s, W(t), i);
  }
  createSplitJsonEditorInput(e, t) {
    const i = this.textEditorService.createTextEditor({ resource: t }), n = this.instantiationService.createInstance(pt, this.getDefaultSettingsResource(e), void 0, void 0, void 0, void 0);
    return this.instantiationService.createInstance(yt, i.getName(), void 0, n, i);
  }
  createSettings2EditorModel() {
    return this.instantiationService.createInstance(X, this.getDefaultSettings(3));
  }
  getConfigurationTargetFromDefaultSettingsResource(e) {
    return this.isDefaultWorkspaceSettingsResource(e) ? 5 : this.isDefaultFolderSettingsResource(e) ? 6 : 3;
  }
  isDefaultSettingsResource(e) {
    return this.isDefaultUserSettingsResource(e) || this.isDefaultWorkspaceSettingsResource(e) || this.isDefaultFolderSettingsResource(e);
  }
  isDefaultUserSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === C.vscode && !!e.path.match(/\/(\d+\/)?settings\.json$/);
  }
  isDefaultWorkspaceSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === C.vscode && !!e.path.match(/\/(\d+\/)?workspaceSettings\.json$/);
  }
  isDefaultFolderSettingsResource(e) {
    return e.authority === "defaultsettings" && e.scheme === C.vscode && !!e.path.match(/\/(\d+\/)?resourceSettings\.json$/);
  }
  getDefaultSettingsResource(e) {
    switch (e) {
      case 5:
        return I.from(
          { scheme: C.vscode, authority: "defaultsettings", path: "/workspaceSettings.json" }
        );
      case 6:
        return I.from(
          { scheme: C.vscode, authority: "defaultsettings", path: "/resourceSettings.json" }
        );
    }
    return I.from(
      { scheme: C.vscode, authority: "defaultsettings", path: "/settings.json" }
    );
  }
  async getOrCreateEditableSettingsEditorInput(e, t) {
    return await this.createSettingsIfNotExists(e, t), this.textEditorService.createTextEditor({ resource: t });
  }
  async createEditableSettingsEditorModel(e, t) {
    const i = this.contextService.getWorkspace();
    if (i.configuration && i.configuration.toString() === t.toString()) {
      const s = await this.textModelResolverService.createModelReference(t);
      return this.instantiationService.createInstance(pe, s, e);
    }
    const n = await this.textModelResolverService.createModelReference(t);
    return this.instantiationService.createInstance(_e, n, e);
  }
  async createDefaultSettingsEditorModel(e) {
    const t = await this.textModelResolverService.createModelReference(e), i = this.getConfigurationTargetFromDefaultSettingsResource(e);
    return this.instantiationService.createInstance(wt, e, t, this.getDefaultSettings(i));
  }
  getDefaultSettings(e) {
    return e === 5 ? (this._defaultWorkspaceSettingsContentModel || (this._defaultWorkspaceSettingsContentModel = new $(this.getMostCommonlyUsedSettings(), e)), this._defaultWorkspaceSettingsContentModel) : e === 6 ? (this._defaultFolderSettingsContentModel || (this._defaultFolderSettingsContentModel = new $(this.getMostCommonlyUsedSettings(), e)), this._defaultFolderSettingsContentModel) : (this._defaultUserSettingsContentModel || (this._defaultUserSettingsContentModel = new $(this.getMostCommonlyUsedSettings(), e)), this._defaultUserSettingsContentModel);
  }
  async getEditableSettingsURI(e, t) {
    switch (e) {
      case 1:
        return this.userDataProfilesService.defaultProfile.settingsResource;
      case 2:
      case 3:
        return this.userSettingsResource;
      case 4: {
        const i = await this.remoteAgentService.getEnvironment();
        return i ? i.settingsPath : null;
      }
      case 5:
        return this.workspaceSettingsResource;
      case 6:
        if (t)
          return this.getFolderSettingsResource(t);
    }
    return null;
  }
  async createSettingsIfNotExists(e, t) {
    if (this.contextService.getWorkbenchState() === 3 && e === 5) {
      const i = this.contextService.getWorkspace().configuration;
      if (!i)
        return;
      const n = await this.textFileService.read(i);
      Object.keys(St(n.value)).indexOf("settings") === -1 && await this.jsonEditingService.write(t, [{ path: ["settings"], value: {} }], !0);
      return;
    }
    await this.createIfNotExists(t, kt);
  }
  async createIfNotExists(e, t) {
    try {
      await this.textFileService.read(e, { acceptTextOnly: !0 });
    } catch (i) {
      if (i.fileOperationResult === 1)
        try {
          await this.textFileService.write(e, t);
          return;
        } catch (n) {
          throw new Error(g("fail.createSettings", "Unable to create '{0}' ({1}).", this.labelService.getUriLabel(e, { relative: !0 }), bt(n)));
        }
      else
        throw i;
    }
  }
  getMostCommonlyUsedSettings() {
    return [
      "files.autoSave",
      "editor.fontSize",
      "editor.fontFamily",
      "editor.tabSize",
      "editor.renderWhitespace",
      "editor.cursorStyle",
      "editor.multiCursorModifier",
      "editor.insertSpaces",
      "editor.wordWrap",
      "files.exclude",
      "files.associations",
      "workbench.editor.enablePreview"
    ];
  }
  async revealSetting(e, t, i, n) {
    var l;
    const s = i ? vt(i.getControl()) : null;
    if (!s)
      return;
    const r = await this.createPreferencesEditorModel(n);
    if (!r)
      return;
    const o = await this.getPositionToReveal(e, t, r, s);
    o && (s.setPosition(o), s.revealPositionNearTop(o), s.focus(), t && ((l = Mt.get(s)) == null || l.triggerSuggest()));
  }
  async getPositionToReveal(e, t, i, n) {
    const s = n.getModel();
    if (!s)
      return null;
    const r = ee.as(te.Configuration).getConfigurationProperties()[e], o = K.test(e);
    if (!r && !o)
      return null;
    let l = null;
    const u = (r == null ? void 0 : r.type) ?? "object";
    let c = i.getPreference(e);
    if (!c && t) {
      let d = u === "object" || u === "array" ? this.configurationService.inspect(e).defaultValue : Et(u);
      if (d = d === void 0 && o ? {} : d, d !== void 0) {
        const f = i instanceof pe ? ["settings", e] : [e];
        await this.jsonEditingService.write(i.uri, [{ path: f, value: d }], !1), c = i.getPreference(e);
      }
    }
    if (c)
      if (t)
        if (xe(c.value) || Array.isArray(c.value)) {
          l = { lineNumber: c.valueRange.startLineNumber, column: c.valueRange.startColumn + 1 }, n.setPosition(l), await le.LineBreakInsert.runEditorCommand(null, n, null), l = { lineNumber: l.lineNumber + 1, column: s.getLineMaxColumn(l.lineNumber + 1) };
          const d = s.getLineFirstNonWhitespaceColumn(l.lineNumber);
          d && (n.setPosition({ lineNumber: l.lineNumber, column: d }), await le.LineBreakInsert.runEditorCommand(null, n, null), l = { lineNumber: l.lineNumber, column: s.getLineMaxColumn(l.lineNumber) });
        } else
          l = { lineNumber: c.valueRange.startLineNumber, column: c.valueRange.endColumn };
      else
        l = { lineNumber: c.keyRange.startLineNumber, column: c.keyRange.startColumn };
    return l;
  }
  dispose() {
    this._onDispose.fire(), super.dispose();
  }
};
Q = D([
  p(0, Ze),
  p(1, et),
  p(2, tt),
  p(3, Re),
  p(4, it),
  p(5, nt),
  p(6, Me),
  p(7, st),
  p(8, rt),
  p(9, ot),
  p(10, Z),
  p(11, at),
  p(12, ut),
  p(13, lt),
  p(14, ct),
  p(15, dt),
  p(16, gt)
], Q);
function Ut() {
  return {
    [Ce.toString()]: new Ct(Q)
  };
}
export {
  Ut as default
};

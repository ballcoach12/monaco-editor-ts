import { iG as Q, iH as B, it as Z, iI as D, iJ as ee, iK as te, iL as ie, iM as se, cW as j, cX as ne, cY as ae, N as u, iN as oe, iO as re, a3 as le, aG as ce, gG as $, _ as y, a as d, a8 as G, dE as H, iP as pe, iQ as he, iR as O, iS as de, iT as ue, dC as M, h8 as ge, iU as fe, d3 as Se, E as X, dF as me, d_ as _e, fp as ve, bx as be, g as xe, f as we, dc as ye, cx as Ie, e as Le, dZ as P, as as Ce, d4 as J, io as Pe, L as _, iV as Te, iW as We, iX as ke, aU as Fe, h$ as Ee, iY as Ne } from "./verifyPrepare-e26a1ce7.js";
import { l as Ue } from "./languageService-f5f48ab9.js";
class Re {
  constructor(t) {
    this.isBogous = !1, this.isTrivial = !1, this.usesClipboardVariable = !1, this.usesSelectionVariable = !1, this.codeSnippet = t;
    const e = new B().parse(t, !1), i = /* @__PURE__ */ new Map();
    let n = 0;
    for (const s of e.placeholders)
      n = Math.max(n, s.index);
    if (e.placeholders.length === 0)
      this.isTrivial = !0;
    else if (n === 0) {
      const s = Z(e.children);
      this.isTrivial = s instanceof D && s.isFinalTabstop;
    }
    const a = [...e.children];
    for (; a.length > 0; ) {
      const s = a.shift();
      if (s instanceof ee) {
        if (s.children.length === 0 && !te[s.name]) {
          const r = i.has(s.name) ? i.get(s.name) : ++n;
          i.set(s.name, r);
          const l = new D(r).appendChild(new ie(s.name));
          e.replace(s, [l]), this.isBogous = !0;
        }
        switch (s.name) {
          case "CLIPBOARD":
            this.usesClipboardVariable = !0;
            break;
          case "SELECTION":
          case "TM_SELECTED_TEXT":
            this.usesSelectionVariable = !0;
            break;
        }
      } else
        a.push(...s.children);
    }
    this.isBogous && (this.codeSnippet = e.toTextmateString());
  }
}
class z {
  constructor(t, e, i, n, a, s, r, l, g, c) {
    this.isFileTemplate = t, this.scopes = e, this.name = i, this.prefix = n, this.description = a, this.body = s, this.source = r, this.snippetSource = l, this.snippetIdentifier = g, this.extensionId = c, this.prefixLow = n.toLowerCase(), this._bodyInsights = new Q(() => new Re(this.body));
  }
  get codeSnippet() {
    return this._bodyInsights.value.codeSnippet;
  }
  get isBogous() {
    return this._bodyInsights.value.isBogous;
  }
  get isTrivial() {
    return this._bodyInsights.value.isTrivial;
  }
  get needsClipboard() {
    return this._bodyInsights.value.usesClipboardVariable;
  }
  get usesSelection() {
    return this._bodyInsights.value.usesSelectionVariable;
  }
}
function Ae(p) {
  return le(p) && !!p.body;
}
class T {
  constructor(t, e, i, n, a, s) {
    this.source = t, this.location = e, this.defaultScopes = i, this._extension = n, this._fileService = a, this._extensionResourceLoaderService = s, this.data = [], this.isGlobalSnippets = se(e.path) === ".code-snippets", this.isUserSnippets = !this._extension;
  }
  select(t, e) {
    this.isGlobalSnippets || !this.isUserSnippets ? this._scopeSelect(t, e) : this._filepathSelect(t, e);
  }
  _filepathSelect(t, e) {
    t + ".json" === j(this.location.path) && e.push(...this.data);
  }
  _scopeSelect(t, e) {
    for (const n of this.data) {
      const a = n.scopes.length;
      if (a === 0)
        e.push(n);
      else
        for (let s = 0; s < a; s++)
          if (n.scopes[s] === t) {
            e.push(n);
            break;
          }
    }
    const i = t.lastIndexOf(".");
    i >= 0 && this._scopeSelect(t.substring(0, i), e);
  }
  async _load() {
    return this._extension ? this._extensionResourceLoaderService.readExtensionResource(this.location) : (await this._fileService.readFile(this.location)).value.toString();
  }
  load() {
    return this._loadPromise || (this._loadPromise = Promise.resolve(this._load()).then((t) => {
      const e = ne(t);
      if (ae(e) === "object")
        for (const [i, n] of Object.entries(e))
          if (Ae(n))
            this._parseSnippet(i, n, this.data);
          else
            for (const [a, s] of Object.entries(n))
              this._parseSnippet(a, s, this.data);
      return this;
    })), this._loadPromise;
  }
  reset() {
    this._loadPromise = void 0, this.data.length = 0;
  }
  _parseSnippet(t, e, i) {
    var c;
    let { isFileTemplate: n, prefix: a, body: s, description: r } = e;
    if (a || (a = ""), Array.isArray(s) && (s = s.join(`
`)), typeof s != "string")
      return;
    Array.isArray(r) && (r = r.join(`
`));
    let l;
    this.defaultScopes ? l = this.defaultScopes : typeof e.scope == "string" ? l = e.scope.split(",").map((h) => h.trim()).filter(Boolean) : l = [];
    let g;
    this._extension ? g = this._extension.displayName || this._extension.name : this.source === 2 ? g = u("source.workspaceSnippetGlobal", "Workspace Snippet") : this.isGlobalSnippets ? g = u("source.userSnippetGlobal", "Global User Snippet") : g = u("source.userSnippet", "User Snippet");
    for (const h of oe.wrap(a))
      i.push(new z(
        !!n,
        l,
        t,
        h,
        r,
        s,
        g,
        this.source,
        this._extension ? `${re(this._extension.extensionLocation, this.location)}/${t}` : `${j(this.location.path)}/${t}`,
        (c = this._extension) == null ? void 0 : c.identifier
      ));
  }
}
const K = "_snippet.markAsUsed";
ce.registerCommand(K, (p, ...t) => {
  const e = p.get($), [i] = t;
  i instanceof z && e.updateUsageTimestamp(i);
});
class v {
  constructor(t, e) {
    this.snippet = t, this.label = { label: t.prefix, description: t.name }, this.detail = u(
      "detail.snippet",
      "{0} ({1})",
      t.description || t.name,
      t.source
    ), this.insertText = t.codeSnippet, this.extensionId = t.extensionId, this.range = e, this.sortText = `${t.snippetSource === 3 ? "z" : "a"}-${t.prefix}`, this.kind = 27, this.insertTextRules = 4, this.command = { id: K, title: "", arguments: [t] };
  }
  resolve() {
    return this.documentation = new ge().appendCodeblock("", B.asInsertText(this.snippet.codeSnippet)), this;
  }
  static compareByLabel(t, e) {
    return fe(t.label.label, e.label.label);
  }
}
let W = class {
  constructor(t, e, i) {
    this._languageService = t, this._snippets = e, this._languageConfigurationService = i, this._debugDisplayName = "snippetCompletions";
  }
  async provideCompletionItems(t, e, i) {
    var N;
    const n = new pe(!0), a = this._getLanguageIdAtPosition(t, e), s = this._languageConfigurationService.getLanguageConfiguration(a), r = new Set(await this._snippets.getSnippets(a)), l = t.getLineContent(e.lineNumber).toLowerCase(), g = t.getWordUntilPosition(e).word.toLowerCase(), c = [], h = e.column - 1, E = ((N = i.triggerCharacter) == null ? void 0 : N.toLowerCase()) ?? "";
    e:
      for (const o of r) {
        if (i.triggerKind === 1 && !o.prefixLow.startsWith(E))
          continue e;
        const m = he(1, s.getWordDefinition(), o.prefixLow, 0);
        if (g && m && !O(g, 0, g.length, o.prefixLow, 0, o.prefixLow.length))
          continue e;
        const f = de(o.prefixLow) === 0 ? Math.max(0, t.getLineFirstNonWhitespaceColumn(e.lineNumber) - 1) : 0;
        t:
          for (let S = Math.max(f, h - o.prefixLow.length); S < l.length; S++) {
            if (!O(l, S, h, o.prefixLow, 0, o.prefixLow.length))
              continue t;
            const U = o.prefixLow.length - (h - S), q = ue(l, o.prefixLow, h, h + U, h - S), I = e.with(void 0, S + 1);
            if (g && e.equals(I))
              continue e;
            let R = q === 0 ? e.column + U : e.column;
            if (h < l.length) {
              const L = s.getAutoClosingPairs().autoClosingPairsCloseSingleChar.get(l[h]);
              L != null && L.some((C) => C.open === l[I.column - 1] && o.prefix.startsWith(C.open) && o.prefix[o.prefix.length - 1] === C.close) && R++;
            }
            const A = M.fromPositions(I, { lineNumber: e.lineNumber, column: R }), Y = A.setEndPosition(e.lineNumber, e.column);
            c.push(new v(o, { replace: A, insert: Y })), r.delete(o);
            break;
          }
      }
    if (!E && (/\s/.test(l[e.column - 2]) || !l))
      for (const m of r) {
        const f = M.fromPositions(e), S = l.indexOf(m.prefixLow, h) === h ? f.setEndPosition(e.lineNumber, e.column + m.prefixLow.length) : f;
        c.push(new v(m, { replace: S, insert: f }));
      }
    c.sort(v.compareByLabel);
    for (let o = 0; o < c.length; o++) {
      const m = c[o];
      let f = o + 1;
      for (; f < c.length && m.label === c[f].label; f++)
        c[f].label.label = u(
          "snippetSuggest.longLabel",
          "{0}, {1}",
          c[f].label.label,
          c[f].snippet.name
        );
      f > o + 1 && (c[o].label.label = u(
        "snippetSuggest.longLabel",
        "{0}, {1}",
        c[o].label.label,
        c[o].snippet.name
      ), o = f);
    }
    return {
      suggestions: c,
      duration: n.elapsed()
    };
  }
  resolveCompletionItem(t) {
    return t instanceof v ? t.resolve() : t;
  }
  _getLanguageIdAtPosition(t, e) {
    t.tokenization.tokenizeIfCheap(e.lineNumber);
    let i = t.getLanguageIdAtPosition(e.lineNumber, e.column);
    return this._languageService.getLanguageName(i) || (i = t.getLanguageId()), i;
  }
};
W = y([
  d(0, G),
  d(1, $),
  d(2, H)
], W);
var b;
(function(p) {
  function t(e, i, n) {
    if (P(i.path))
      return e.collector.error(u(
        "invalid.path.0",
        "Expected string in `contributes.{0}.path`. Provided value: {1}",
        e.description.name,
        String(i.path)
      )), null;
    if (P(i.language) && !i.path.endsWith(".code-snippets"))
      return e.collector.error(u(
        "invalid.language.0",
        "When omitting the language, the value of `contributes.{0}.path` must be a `.code-snippets`-file. Provided value: {1}",
        e.description.name,
        String(i.path)
      )), null;
    if (!P(i.language) && !n.isRegisteredLanguageId(i.language))
      return e.collector.error(u(
        "invalid.language",
        "Unknown language in `contributes.{0}.language`. Provided value: {1}",
        e.description.name,
        String(i.language)
      )), null;
    const a = e.description.extensionLocation, s = Ce(a, i.path);
    return J(s, a) ? {
      language: i.language,
      location: s
    } : (e.collector.error(u(
      "invalid.path.1",
      "Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
      e.description.name,
      s.path,
      a.path
    )), null);
  }
  p.toValidSnippet = t, p.snippetsContribution = {
    description: u("vscode.extension.contributes.snippets", "Contributes snippets."),
    type: "array",
    defaultSnippets: [{ body: [{ language: "", path: "" }] }],
    items: {
      type: "object",
      defaultSnippets: [{ body: { language: "${1:id}", path: "./snippets/${2:id}.json." } }],
      properties: {
        language: {
          description: u(
            "vscode.extension.contributes.snippets-language",
            "Language identifier for which this snippet is contributed to."
          ),
          type: "string"
        },
        path: {
          description: u(
            "vscode.extension.contributes.snippets-path",
            "Path of the snippets file. The path is relative to the extension folder and typically starts with './snippets/'."
          ),
          type: "string"
        }
      }
    }
  }, p.point = Se.registerExtensionPoint({
    extensionPoint: "snippets",
    deps: [Ue],
    jsonSchema: p.snippetsContribution
  });
})(b || (b = {}));
function De(p, t, e) {
  return Ne(p.watch(t), p.onDidFilesChange((i) => {
    i.affects(t) && e();
  }));
}
let x = class k {
  constructor(t) {
    this._storageService = t;
    const e = t.get(k._key, 0, "");
    let i;
    try {
      i = JSON.parse(e);
    } catch {
    }
    this._ignored = Pe(i) ? new Set(i) : /* @__PURE__ */ new Set();
  }
  isIgnored(t) {
    return this._ignored.has(t);
  }
  updateIgnored(t, e) {
    let i = !1;
    this._ignored.has(t) && !e ? (this._ignored.delete(t), i = !0) : !this._ignored.has(t) && e && (this._ignored.add(t), i = !0), i && this._storageService.store(k._key, JSON.stringify(Array.from(this._ignored)), 0, 0);
  }
};
x._key = "snippets.ignoredSnippets";
x = y([
  d(0, X)
], x);
let w = class F {
  constructor(t) {
    this._storageService = t;
    const e = t.get(F._key, 0, "");
    let i;
    try {
      i = JSON.parse(e);
    } catch {
      i = [];
    }
    this._usages = Array.isArray(i) ? new Map(i) : /* @__PURE__ */ new Map();
  }
  getUsageTimestamp(t) {
    return this._usages.get(t);
  }
  updateUsageTimestamp(t) {
    this._usages.delete(t), this._usages.set(t, Date.now());
    const e = [...this._usages].slice(-100);
    this._storageService.store(F._key, JSON.stringify(e), 0, 0);
  }
};
w._key = "snippets.usageTimestamps";
w = y([
  d(0, X)
], w);
let V = class {
  constructor(t, e, i, n, a, s, r, l, g, c, h) {
    this._environmentService = t, this._userDataProfileService = e, this._contextService = i, this._languageService = n, this._logService = a, this._fileService = s, this._textfileService = r, this._extensionResourceLoaderService = l, this._disposables = new _(), this._pendingWork = [], this._files = new Te(), this._pendingWork.push(Promise.resolve(g.when(3).then(() => {
      this._initExtensionSnippets(), this._initUserSnippets(), this._initWorkspaceSnippets();
    }))), We(new W(this._languageService, this, h)), this._enablement = c.createInstance(x), this._usageTimestamps = c.createInstance(w);
  }
  dispose() {
    this._disposables.dispose();
  }
  isEnabled(t) {
    return !this._enablement.isIgnored(t.snippetIdentifier);
  }
  updateEnablement(t, e) {
    this._enablement.updateIgnored(t.snippetIdentifier, !e);
  }
  updateUsageTimestamp(t) {
    this._usageTimestamps.updateUsageTimestamp(t.snippetIdentifier);
  }
  _joinSnippets() {
    const t = this._pendingWork.slice(0);
    return this._pendingWork.length = 0, Promise.all(t);
  }
  async getSnippetFiles() {
    return await this._joinSnippets(), this._files.values();
  }
  async getSnippets(t, e) {
    await this._joinSnippets();
    const i = [], n = [];
    if (t) {
      if (this._languageService.isRegisteredLanguageId(t))
        for (const a of this._files.values())
          n.push(a.load().then((s) => s.select(t, i)).catch((s) => this._logService.error(s, a.location.toString())));
    } else
      for (const a of this._files.values())
        n.push(a.load().then((s) => ke(i, i.length, s.data)).catch((s) => this._logService.error(s, a.location.toString())));
    return await Promise.all(n), this._filterAndSortSnippets(i, e);
  }
  getSnippetsSync(t, e) {
    const i = [];
    if (this._languageService.isRegisteredLanguageId(t))
      for (const n of this._files.values())
        n.load().catch((a) => {
        }), n.select(t, i);
    return this._filterAndSortSnippets(i, e);
  }
  _filterAndSortSnippets(t, e) {
    const i = [];
    for (const n of t)
      !n.prefix && !(e != null && e.includeNoPrefixSnippets) || !this.isEnabled(n) && !(e != null && e.includeDisabledSnippets) || typeof (e == null ? void 0 : e.fileTemplateSnippets) == "boolean" && e.fileTemplateSnippets !== n.isFileTemplate || i.push(n);
    return i.sort((n, a) => {
      let s = 0;
      if (!(e != null && e.noRecencySort)) {
        const r = this._usageTimestamps.getUsageTimestamp(n.snippetIdentifier) ?? -1;
        s = (this._usageTimestamps.getUsageTimestamp(a.snippetIdentifier) ?? -1) - r;
      }
      return s === 0 && (s = this._compareSnippet(n, a)), s;
    });
  }
  _compareSnippet(t, e) {
    return t.snippetSource < e.snippetSource ? -1 : t.snippetSource > e.snippetSource ? 1 : t.source < e.source ? -1 : t.source > e.source || t.name > e.name ? 1 : t.name < e.name ? -1 : 0;
  }
  _initExtensionSnippets() {
    b.point.setHandler((t) => {
      for (const [e, i] of this._files)
        i.source === 3 && this._files.delete(e);
      for (const e of t)
        for (const i of e.value) {
          const n = b.toValidSnippet(e, i, this._languageService);
          if (!n)
            continue;
          const a = this._files.get(n.location);
          if (a)
            a.defaultScopes ? a.defaultScopes.push(n.language) : a.defaultScopes = [];
          else {
            const s = new T(
              3,
              n.location,
              n.language ? [n.language] : void 0,
              e.description,
              this._fileService,
              this._extensionResourceLoaderService
            );
            this._files.set(s.location, s), this._environmentService.isExtensionDevelopment && s.load().then((r) => {
              r.data.some((l) => l.isBogous) && e.collector.warn(u(
                "badVariableUse",
                "One or more snippets from the extension '{0}' very likely confuse snippet-variables and snippet-placeholders (see https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax for more details)",
                e.description.name
              ));
            }, (r) => {
              e.collector.warn(u(
                "badFile",
                'The snippet file "{0}" could not be read.',
                s.location.toString()
              ));
            });
          }
        }
    });
  }
  _initWorkspaceSnippets() {
    const t = new _(), e = () => {
      t.clear(), this._pendingWork.push(this._initWorkspaceFolderSnippets(this._contextService.getWorkspace(), t));
    };
    this._disposables.add(t), this._disposables.add(this._contextService.onDidChangeWorkspaceFolders(e)), this._disposables.add(this._contextService.onDidChangeWorkbenchState(e)), e();
  }
  async _initWorkspaceFolderSnippets(t, e) {
    const i = t.folders.map(async (n) => {
      const a = n.toResource(".vscode");
      await this._fileService.exists(a) ? this._initFolderSnippets(2, a, e) : e.add(this._fileService.onDidFilesChange((r) => {
        r.contains(a, 1) && this._initFolderSnippets(2, a, e);
      }));
    });
    await Promise.all(i);
  }
  async _initUserSnippets() {
    const t = new _(), e = async () => {
      t.clear();
      const i = this._userDataProfileService.currentProfile.snippetsHome;
      await this._fileService.createFolder(i), await this._initFolderSnippets(1, i, t);
    };
    this._disposables.add(t), this._disposables.add(this._userDataProfileService.onDidChangeCurrentProfile((i) => i.join((async () => {
      i.preserveData && await this._fileService.copy(i.previous.snippetsHome, i.profile.snippetsHome), this._pendingWork.push(e());
    })()))), await e();
  }
  _initFolderSnippets(t, e, i) {
    const n = new _(), a = async () => {
      if (n.clear(), !!await this._fileService.exists(e))
        try {
          const s = await this._fileService.resolve(e);
          for (const r of s.children || [])
            n.add(this._addSnippetFile(r.resource, t));
        } catch (s) {
          this._logService.error(`Failed snippets from folder '${e.toString()}'`, s);
        }
    };
    return i.add(this._textfileService.files.onDidSave((s) => {
      J(s.model.resource, e) && a();
    })), i.add(De(this._fileService, e, a)), i.add(n), a();
  }
  _addSnippetFile(t, e) {
    const i = Fe(t);
    if (e === 1 && i === ".json") {
      const n = Ee(t).replace(/\.json/, "");
      this._files.set(t, new T(
        e,
        t,
        [n],
        void 0,
        this._fileService,
        this._extensionResourceLoaderService
      ));
    } else
      i === ".code-snippets" && this._files.set(t, new T(
        e,
        t,
        void 0,
        void 0,
        this._fileService,
        this._extensionResourceLoaderService
      ));
    return {
      dispose: () => this._files.delete(t)
    };
  }
};
V = y([
  d(0, me),
  d(1, _e),
  d(2, ve),
  d(3, G),
  d(4, be),
  d(5, xe),
  d(6, we),
  d(7, ye),
  d(8, Ie),
  d(9, Le),
  d(10, H)
], V);
function $e(p, t) {
  const i = p.getLineContent(t.lineNumber).substr(0, t.column - 1), n = Math.max(0, i.length - 100);
  for (let a = i.length - 1; a >= n; a--) {
    const s = i.charAt(a);
    if (/\s/.test(s))
      return i.substr(a + 1);
  }
  return n === 0 ? i : "";
}
export {
  v as S,
  V as a,
  $e as g
};

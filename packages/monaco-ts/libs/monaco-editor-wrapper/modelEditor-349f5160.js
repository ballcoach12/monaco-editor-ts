import { _ as C, a as l, I as J, b as dt, c as $t, D as B, M as Tt, d as Xt, e as Z, f as wi, g as ct, h as Ci, R as Ii, U as T, S as V, T as Rt, i as bi, j as Di, k as Jt, A as Ai, l as Zt, n as S, o as Ge, p as O, q as _i, r as j, s as Ye, u as qe, v as se, w as Ti, x as ut, y as Ri, z as he, B as Gi, C as ke, E as lt, F as ht, G as f, H as ki, J as Oi, K as ei, L as ne, N as h, O as Pi, P as Mi, Q as x, V as Fi, W as Ni, X as Li, Y as xi, Z as Vi, $ as q, a0 as Oe, a1 as ti, a2 as Bi, a3 as ii, a4 as Ui, a5 as ge, a6 as te, a7 as we, a8 as Pe, a9 as Wi, aa as Hi, ab as Ki, ac as Gt, ad as zi, ae as ri, af as K, ag as Yi, ah as ae, ai as L, aj as kt, ak as qi, al as ji, am as Qi, an as U, ao as $i, ap as b, aq as Ot, ar as Xi, as as Ji, at as Zi, au as er, av as tr, aw as ir, ax as Ce, ay as rr, az as Pt, aA as Mt, aB as ie, aC as je, aD as v, aE as Qe, aF as gt, aG as A, aH as or, aI as de, aJ as Y, aK as sr, aL as nr, aM as Ft, aN as ar, aO as We, aP as k, aQ as R, aR as dr, aS as cr, aT as ur, aU as lr, aV as F, aW as y, aX as E, aY as le, aZ as hr, a_ as gr, a$ as pr, b0 as He, b1 as Nt, b2 as Lt, b3 as fr, b4 as Er, b5 as mr, b6 as pt, b7 as Me, b8 as vr, b9 as Sr, ba as ft, bb as yr, bc as oi, bd as wr, be as Cr, bf as Ir, bg as br, bh as Dr, bi as si, bj as Ar, bk as _r, bl as xt, bm as Ke, bn as Tr, bo as Rr, bp as Gr, bq as kr, br as Or, bs as Pr, bt as Mr, bu as Fr, bv as Nr, bw as Lr, bx as xr, by as Vr, bz as Br, bA as Ur, bB as Wr, bC as me, bD as $e, bE as Hr, bF as Kr, bG as G, bH as Vt, bI as zr, bJ as Yr } from "./verifyPrepare-e26a1ce7.js";
import { S as qr, a as jr, T as Bt, b as Se, A as Qr, M as ye, c as ze, d as Q, e as Ut, f as Wt } from "./theme-0816311d.js";
let Xe = class extends B {
  constructor(e, t, i) {
    super(), this._modelService = e, this._textModelService = t, this._undoRedoService = i, this._register(this._modelService.onModelRemoved((r) => {
      const s = this._undoRedoService.getElements(r.uri);
      if (!(s.past.length === 0 && s.future.length === 0)) {
        for (const o of s.past)
          o instanceof Tt && o.setDelegate(this);
        for (const o of s.future)
          o instanceof Tt && o.setDelegate(this);
      }
    }));
  }
  prepareUndoRedo(e) {
    const t = e.getMissingModels();
    if (t.length === 0)
      return B.None;
    const i = t.map(async (r) => {
      try {
        return await this._textModelService.createModelReference(r);
      } catch {
        return B.None;
      }
    });
    return Promise.all(i).then((r) => ({
      dispose: () => Xt(r)
    }));
  }
};
Xe = C([
  l(0, J),
  l(1, dt),
  l(2, $t)
], Xe);
let Je = class extends Ii {
  constructor(e, t, i, r) {
    super(), this.instantiationService = e, this.textFileService = t, this.fileService = i, this.modelService = r, this.providers = /* @__PURE__ */ new Map(), this.modelsToDispose = /* @__PURE__ */ new Set();
  }
  createReferencedObject(e) {
    return this.doCreateReferencedObject(e);
  }
  async doCreateReferencedObject(e, t) {
    this.modelsToDispose.delete(e);
    const i = T.parse(e);
    if (i.scheme === V.inMemory) {
      if (!this.modelService.getModel(i))
        throw new Error(`Unable to resolve inMemory resource ${e}`);
      const s = this.instantiationService.createInstance(Rt, i);
      if (this.ensureResolvedModel(s, e))
        return s;
    }
    if (i.scheme === V.untitled) {
      const r = await this.textFileService.untitled.resolve({ untitledResource: i });
      if (this.ensureResolvedModel(r, e))
        return r;
    }
    if (this.fileService.hasProvider(i)) {
      const r = await this.textFileService.files.resolve(i, { reason: 2 });
      if (this.ensureResolvedModel(r, e))
        return r;
    }
    if (this.providers.has(i.scheme)) {
      await this.resolveTextModelContent(e);
      const r = this.instantiationService.createInstance(Rt, i);
      if (this.ensureResolvedModel(r, e))
        return r;
    }
    if (!t)
      return await this.fileService.activateProvider(i.scheme), this.doCreateReferencedObject(e, !0);
    throw new Error(`Unable to resolve resource ${e}`);
  }
  ensureResolvedModel(e, t) {
    if (bi(e))
      return !0;
    throw new Error(`Unable to resolve resource ${t}`);
  }
  destroyReferencedObject(e, t) {
    const i = T.parse(e);
    i.scheme === V.untitled || i.scheme === V.inMemory || (this.modelsToDispose.add(e), (async () => {
      try {
        const r = await t;
        if (!this.modelsToDispose.has(e) || (r instanceof Di && await this.textFileService.files.canDispose(r), !this.modelsToDispose.has(e)))
          return;
        r.dispose();
      } catch {
      } finally {
        this.modelsToDispose.delete(e);
      }
    })());
  }
  registerTextModelContentProvider(e, t) {
    let i = this.providers.get(e);
    return i || (i = [], this.providers.set(e, i)), i.unshift(t), Jt(() => {
      const r = this.providers.get(e);
      if (!r)
        return;
      const s = r.indexOf(t);
      s !== -1 && (r.splice(s, 1), r.length === 0 && this.providers.delete(e));
    });
  }
  hasTextModelContentProvider(e) {
    return this.providers.get(e) !== void 0;
  }
  async resolveTextModelContent(e) {
    const t = T.parse(e), i = this.providers.get(t.scheme) || [];
    for (const r of i) {
      const s = await r.provideTextContent(t);
      if (s)
        return s;
    }
    throw new Error(`Unable to resolve text model content for resource ${e}`);
  }
};
Je = C([
  l(0, Z),
  l(1, wi),
  l(2, ct),
  l(3, J)
], Je);
let Ze = class extends B {
  get resourceModelCollection() {
    return this._resourceModelCollection || (this._resourceModelCollection = this.instantiationService.createInstance(Je)), this._resourceModelCollection;
  }
  get asyncModelCollection() {
    return this._asyncModelCollection || (this._asyncModelCollection = new Ai(this.resourceModelCollection)), this._asyncModelCollection;
  }
  constructor(e, t, i, r, s) {
    super(), this.instantiationService = e, this.fileService = t, this.undoRedoService = i, this.modelService = r, this.uriIdentityService = s, this._resourceModelCollection = void 0, this._asyncModelCollection = void 0, this._register(new Xe(this.modelService, this, this.undoRedoService));
  }
  async createModelReference(e) {
    return e = this.uriIdentityService.asCanonicalUri(e), await this.asyncModelCollection.acquire(e.toString());
  }
  registerTextModelContentProvider(e, t) {
    return this.resourceModelCollection.registerTextModelContentProvider(e, t);
  }
  canHandleResource(e) {
    return this.fileService.hasProvider(e) || e.scheme === V.untitled || e.scheme === V.inMemory ? !0 : this.resourceModelCollection.hasTextModelContentProvider(e.scheme);
  }
};
Ze = C([
  l(0, Z),
  l(1, ct),
  l(2, $t),
  l(3, J),
  l(4, Ci)
], Ze);
function Ie(d, e, t) {
  let i = !1;
  const r = $r(d);
  if (Zt(r) && (e.restoreViewState(r), i = !0), d.selection) {
    const s = {
      startLineNumber: d.selection.startLineNumber,
      startColumn: d.selection.startColumn,
      endLineNumber: d.selection.endLineNumber ?? d.selection.startLineNumber,
      endColumn: d.selection.endColumn ?? d.selection.startColumn
    };
    e.setSelection(s, d.selectionSource ?? "code.navigation"), d.selectionRevealType === 2 ? e.revealRangeNearTop(s, t) : d.selectionRevealType === 3 ? e.revealRangeNearTopIfOutsideViewport(s, t) : d.selectionRevealType === 1 ? e.revealRangeInCenterIfOutsideViewport(s, t) : e.revealRangeInCenter(s, t), i = !0;
  }
  return i;
}
function $r(d) {
  if (!d.selection || !d.viewState)
    return d.viewState;
  const e = d.viewState;
  if (e.modified)
    return e.modified.cursorState = [], e;
  const t = d.viewState;
  return t.cursorState && (t.cursorState = []), t;
}
let et = class extends _i {
  constructor(e, t, i) {
    super(t), this.editorService = e, this.configurationService = i, this.registerCodeEditorOpenHandler(this.doOpenCodeEditor.bind(this)), this.registerCodeEditorOpenHandler(this.doOpenCodeEditorFromDiff.bind(this));
  }
  getActiveCodeEditor() {
    var i;
    const e = this.editorService.activeTextEditorControl;
    if (j(e))
      return e;
    if (Ye(e))
      return e.getModifiedEditor();
    const t = (i = this.editorService.activeEditorPane) == null ? void 0 : i.getControl();
    return qe(t) && j(t.activeCodeEditor) ? t.activeCodeEditor : null;
  }
  async doOpenCodeEditorFromDiff(e, t, i) {
    var s;
    const r = this.editorService.activeTextEditorControl;
    if (!i && Ye(r) && e.options && e.resource && t === r.getModifiedEditor() && r.getModel() && se(e.resource, (s = r.getModel()) == null ? void 0 : s.modified.uri)) {
      const o = r.getModifiedEditor();
      return Ie(e.options, o, 0), o;
    }
    return null;
  }
  async doOpenCodeEditor(e, t, i) {
    var o, n, a, c;
    if (!((n = (o = this.configurationService.getValue().workbench) == null ? void 0 : o.editor) == null ? void 0 : n.enablePreviewFromCodeNavigation) && t && !((a = e.options) != null && a.pinned) && !i && !se((c = t.getModel()) == null ? void 0 : c.uri, e.resource)) {
      for (const u of this.editorService.visibleEditorPanes)
        if (Ti(u.getControl()) === t) {
          u.group.pinEditor();
          break;
        }
    }
    const s = await this.editorService.openEditor(e, i ? ut : Ri);
    if (s) {
      const u = s.getControl();
      if (j(u))
        return u;
      if (qe(u) && j(u.activeCodeEditor))
        return u.activeCodeEditor;
    }
    return null;
  }
};
et = C([
  l(0, S),
  l(1, Ge),
  l(2, O)
], et);
const z = new he(220, 70), be = new he(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
let $ = class ni extends Oi {
  get scopedContextKeyService() {
    if (!this.diffEditorControl)
      return;
    const e = this.diffEditorControl.getOriginalEditor(), t = this.diffEditorControl.getModifiedEditor();
    return (e.hasTextFocus() ? e : t).invokeWithinContext((i) => i.get(ei));
  }
  constructor(e, t, i, r, s, o, n, a, c) {
    super(ni.ID, e, t, i, r, o, s, n, a), this.preferencesService = c, this.diffEditorControl = void 0, this.diffNavigatorDisposables = this._register(new ne());
  }
  getTitle() {
    return this.input ? this.input.getName() : h("textDiffEditor", "Text Diff Editor");
  }
  createEditorControl(e, t) {
    this.diffEditorControl = this._register(this.instantiationService.createInstance(Pi, e, t, {}));
  }
  updateEditorControlOptions(e) {
    var t;
    (t = this.diffEditorControl) == null || t.updateOptions(e);
  }
  getMainControl() {
    var e;
    return (e = this.diffEditorControl) == null ? void 0 : e.getModifiedEditor();
  }
  async setInput(e, t, i, r) {
    var s, o, n;
    this.diffNavigatorDisposables.clear(), await super.setInput(e, t, i, r);
    try {
      const a = await e.resolve(t);
      if (r.isCancellationRequested)
        return;
      if (!(a instanceof Mi)) {
        this.openAsBinary(e, t);
        return;
      }
      const c = x(this.diffEditorControl), u = a;
      c.setModel(Fi(u.textDiffEditorModel));
      let g = !1;
      Zt(t == null ? void 0 : t.viewState) || (g = this.restoreTextDiffEditorViewState(e, t, i, c));
      let m = !1;
      t && (m = Ie(t, c, 1)), this.diffNavigator = this.instantiationService.createInstance(Ni, c, {
        alwaysRevealFirst: !m && !g,
        findResultLoop: (s = this.getMainControl()) == null ? void 0 : s.getOption(39).loop
      }), this.diffNavigatorDisposables.add(this.diffNavigator), c.updateOptions({
        readOnly: (o = u.modifiedModel) == null ? void 0 : o.isReadonly(),
        originalEditable: !((n = u.originalModel) != null && n.isReadonly())
      });
    } catch (a) {
      await this.handleSetInputError(a, e, t);
    }
  }
  async handleSetInputError(e, t, i) {
    if (this.isFileBinaryError(e))
      return this.openAsBinary(t, i);
    if (e.fileOperationResult === 7 && this.group) {
      let r;
      throw e instanceof Li ? r = h(
        "fileTooLargeForHeapErrorWithSize",
        "At least one file is not displayed in the text compare editor because it is very large ({0}).",
        xi.formatSize(e.size)
      ) : r = h(
        "fileTooLargeForHeapErrorWithoutSize",
        "At least one file is not displayed in the text compare editor because it is very large."
      ), Vi(this.group, t, i, r, this.preferencesService);
    }
    throw e;
  }
  restoreTextDiffEditorViewState(e, t, i, r) {
    const s = this.loadEditorViewState(e, i);
    return s ? (t != null && t.selection && s.modified && (s.modified.cursorState = []), r.restoreViewState(s), !0) : !1;
  }
  openAsBinary(e, t) {
    var n, a;
    const i = e.original, r = e.modified, s = this.instantiationService.createInstance(q, e.getName(), e.getDescription(), i, r, !0), o = Oe.as(ti.EditorFactory).getFileEditorFactory();
    o.isFileEditor(i) && i.setForceOpenAsBinary(), o.isFileEditor(r) && r.setForceOpenAsBinary(), (this.group ?? this.editorGroupService.activeGroup).replaceEditors([{
      editor: e,
      replacement: s,
      options: {
        ...t,
        activation: Bi.PRESERVE,
        pinned: (n = this.group) == null ? void 0 : n.isPinned(e),
        sticky: (a = this.group) == null ? void 0 : a.isSticky(e)
      }
    }]);
  }
  setOptions(e) {
    super.setOptions(e), e && Ie(e, x(this.diffEditorControl), 0);
  }
  shouldHandleConfigurationChangeEvent(e, t) {
    return super.shouldHandleConfigurationChangeEvent(e, t) ? !0 : e.affectsConfiguration(t, "diffEditor");
  }
  computeConfiguration(e) {
    const t = super.computeConfiguration(e);
    if (ii(e.diffEditor)) {
      const i = Ui(e.diffEditor);
      i.diffCodeLens = i.codeLens, delete i.codeLens, i.diffWordWrap = i.wordWrap, delete i.wordWrap, Object.assign(t, i);
    }
    return t;
  }
  getConfigurationOverrides() {
    const e = this.input instanceof q && this.input.modified.hasCapability(2);
    return {
      ...super.getConfigurationOverrides(),
      readOnly: e,
      originalEditable: this.input instanceof q && !this.input.original.hasCapability(2),
      lineDecorationsWidth: "2ch"
    };
  }
  updateReadonly(e) {
    var t;
    e instanceof q ? (t = this.diffEditorControl) == null || t.updateOptions({
      readOnly: e.hasCapability(2),
      originalEditable: !e.original.hasCapability(2)
    }) : super.updateReadonly(e);
  }
  isFileBinaryError(e) {
    return Array.isArray(e) ? e.some((i) => this.isFileBinaryError(i)) : e.textFileOperationResult === 0;
  }
  clearInput() {
    var e;
    super.clearInput(), this.diffNavigatorDisposables.clear(), (e = this.diffEditorControl) == null || e.setModel(null);
  }
  getDiffNavigator() {
    return this.diffNavigator;
  }
  getControl() {
    return this.diffEditorControl;
  }
  focus() {
    var e;
    (e = this.diffEditorControl) == null || e.focus();
  }
  hasFocus() {
    var e;
    return ((e = this.diffEditorControl) == null ? void 0 : e.hasTextFocus()) || super.hasFocus();
  }
  setEditorVisible(e, t) {
    var i, r;
    super.setEditorVisible(e, t), e ? (i = this.diffEditorControl) == null || i.onVisible() : (r = this.diffEditorControl) == null || r.onHide();
  }
  layout(e) {
    var t;
    (t = this.diffEditorControl) == null || t.layout(e);
  }
  setBoundarySashes(e) {
    var t;
    (t = this.diffEditorControl) == null || t.setBoundarySashes(e);
  }
  tracksEditorViewState(e) {
    return e instanceof q;
  }
  computeEditorViewState(e) {
    if (!this.diffEditorControl)
      return;
    const t = this.diffEditorControl.getModel();
    if (!t || !t.modified || !t.original)
      return;
    const i = this.toEditorViewStateResource(t);
    if (i && se(i, e))
      return ge(this.diffEditorControl.saveViewState());
  }
  toEditorViewStateResource(e) {
    let t, i;
    if (e instanceof q ? (t = e.original.resource, i = e.modified.resource) : te(e) || (t = e.original.uri, i = e.modified.uri), !(!t || !i))
      return T.from({ scheme: "diff", path: `${we(t.toString())}${we(i.toString())}` });
  }
};
$.ID = Gi;
$ = C([
  l(0, ke),
  l(1, Z),
  l(2, lt),
  l(3, ht),
  l(4, S),
  l(5, Ge),
  l(6, f),
  l(7, ct),
  l(8, ki)
], $);
let pe = class extends Wi {
  constructor(e, t, i, r, s) {
    super(e, {
      canAcceptInBackground: !0,
      noResultsPick: {
        label: h("noViewResults", "No matching editors"),
        groupId: -1
      }
    }), this.editorGroupService = t, this.editorService = i, this.modelService = r, this.languageService = s, this.pickState = new class {
      constructor() {
        this.scorerCache = /* @__PURE__ */ Object.create(null), this.isQuickNavigating = void 0;
      }
      reset(o) {
        o || (this.scorerCache = /* @__PURE__ */ Object.create(null)), this.isQuickNavigating = o;
      }
    }();
  }
  provide(e, t) {
    return this.pickState.reset(!!e.quickNavigate), super.provide(e, t);
  }
  _getPicks(e) {
    const t = Hi(e), i = this.doGetEditorPickItems().filter((s) => {
      if (!t.normalized)
        return !0;
      const o = Ki(s, t, !0, Gt, this.pickState.scorerCache);
      return o.score ? (s.highlights = { label: o.labelMatch, description: o.descriptionMatch }, !0) : !1;
    });
    if (t.normalized) {
      const s = this.editorGroupService.getGroups(2).map((o) => o.id);
      i.sort((o, n) => o.groupId !== n.groupId ? s.indexOf(o.groupId) - s.indexOf(n.groupId) : zi(o, n, t, !0, Gt, this.pickState.scorerCache));
    }
    const r = [];
    if (this.editorGroupService.count > 1) {
      let s;
      for (const o of i) {
        if (typeof s != "number" || s !== o.groupId) {
          const n = this.editorGroupService.getGroup(o.groupId);
          n && r.push({ type: "separator", label: n.label }), s = o.groupId;
        }
        r.push(o);
      }
    } else
      r.push(...i);
    return r;
  }
  doGetEditorPickItems() {
    const e = this.doGetEditors(), t = /* @__PURE__ */ new Map();
    for (const { groupId: i } of e)
      if (!t.has(i)) {
        const r = this.editorGroupService.getGroup(i);
        r && t.set(i, r.ariaLabel);
      }
    return this.doGetEditors().map(({ editor: i, groupId: r }) => {
      var c;
      const s = ri.getOriginalUri(i, { supportSideBySide: K.PRIMARY }), o = i.isDirty() && !i.isSaving(), n = i.getDescription(), a = n ? `${i.getName()} ${n}` : i.getName();
      return {
        groupId: r,
        resource: s,
        label: i.getName(),
        ariaLabel: (() => t.size > 1 ? o ? h(
          "entryAriaLabelWithGroupDirty",
          "{0}, unsaved changes, {1}",
          a,
          t.get(r)
        ) : h(
          "entryAriaLabelWithGroup",
          "{0}, {1}",
          a,
          t.get(r)
        ) : o ? h("entryAriaLabelDirty", "{0}, unsaved changes", a) : a)(),
        description: n,
        iconClasses: Yi(this.modelService, this.languageService, s).concat(i.getLabelExtraClasses()),
        italic: !((c = this.editorGroupService.getGroup(r)) != null && c.isPinned(i)),
        buttons: (() => [
          {
            iconClass: o ? "dirty-editor " + ae.asClassName(L.closeDirty) : ae.asClassName(L.close),
            tooltip: h("closeEditor", "Close Editor"),
            alwaysVisible: o
          }
        ])(),
        trigger: async () => {
          const u = this.editorGroupService.getGroup(r);
          return u && (await u.closeEditor(i, { preserveFocus: !0 }), !u.contains(i)) ? kt.REMOVE_ITEM : kt.NO_ACTION;
        },
        accept: (u, g) => {
          var m;
          return (m = this.editorGroupService.getGroup(r)) == null ? void 0 : m.openEditor(i, { preserveFocus: g.inBackground });
        }
      };
    });
  }
};
pe = C([
  l(1, f),
  l(2, S),
  l(3, J),
  l(4, Pe)
], pe);
let X = class ai extends pe {
  constructor(e, t, i, r) {
    super(ai.PREFIX, e, t, i, r);
  }
  doGetEditors() {
    const e = this.editorGroupService.activeGroup;
    return e.getEditors(0).map((t) => ({ editor: t, groupId: e.id }));
  }
};
X.PREFIX = "edt active ";
X = C([
  l(0, f),
  l(1, S),
  l(2, J),
  l(3, Pe)
], X);
let ce = class di extends pe {
  constructor(e, t, i, r) {
    super(di.PREFIX, e, t, i, r);
  }
  doGetEditors() {
    const e = [];
    for (const t of this.editorGroupService.getGroups(2))
      for (const i of t.getEditors(1))
        e.push({ editor: i, groupId: t.id });
    return e;
  }
};
ce.PREFIX = "edt ";
ce = C([
  l(0, f),
  l(1, S),
  l(2, J),
  l(3, Pe)
], ce);
let ue = class ci extends pe {
  constructor(e, t, i, r) {
    super(ci.PREFIX, e, t, i, r);
  }
  doGetEditors() {
    const e = [];
    for (const t of this.editorService.getEditors(0))
      e.push(t);
    return e;
  }
};
ue.PREFIX = "edt mru ";
ue = C([
  l(0, f),
  l(1, S),
  l(2, J),
  l(3, Pe)
], ue);
class Xr extends qi {
  constructor(e, t, i) {
    super(t), this.id = e, this.id = e, this.memento = new ji(this.id, i), this._register(i.onWillSaveState(() => {
      this.saveState(), this.memento.saveMemento();
    }));
  }
  getId() {
    return this.id;
  }
  getMemento(e, t) {
    return this.memento.getMemento(e, t);
  }
  saveState() {
  }
}
class Jr extends Xr {
  get onDidFocus() {
    return this._onDidFocus || (this._onDidFocus = this.registerFocusTrackEvents().onDidFocus), this._onDidFocus.event;
  }
  fireOnDidFocus() {
    var e;
    (e = this._onDidFocus) == null || e.fire();
  }
  get onDidBlur() {
    return this._onDidBlur || (this._onDidBlur = this.registerFocusTrackEvents().onDidBlur), this._onDidBlur.event;
  }
  hasFocus() {
    return this._hasFocus;
  }
  registerFocusTrackEvents() {
    const e = x(this.getContainer()), t = this._register(Qi(e)), i = this._onDidFocus = this._register(new U());
    this._register(t.onDidFocus(() => {
      this._hasFocus = !0, i.fire();
    }));
    const r = this._onDidBlur = this._register(new U());
    return this._register(t.onDidBlur(() => {
      this._hasFocus = !1, r.fire();
    })), { onDidFocus: i, onDidBlur: r };
  }
  get telemetryService() {
    return this._telemetryService;
  }
  constructor(e, t, i, r) {
    super(e, i, r), this._onTitleAreaUpdate = this._register(new U()), this.onTitleAreaUpdate = this._onTitleAreaUpdate.event, this._hasFocus = !1, this._telemetryService = t, this.visible = !1;
  }
  getTitle() {
  }
  create(e) {
    this.parent = e;
  }
  getContainer() {
    return this.parent;
  }
  setVisible(e) {
    this.visible !== !!e && (this.visible = e);
  }
  focus() {
  }
  updateStyles() {
    super.updateStyles();
  }
  getMenuIds() {
    return [];
  }
  getActions() {
    return [];
  }
  getSecondaryActions() {
    return [];
  }
  getContextMenuActions() {
    return [];
  }
  getActionViewItem(e) {
  }
  getActionsContext() {
    return null;
  }
  getActionRunner() {
    return this.actionRunner || (this.actionRunner = this._register(new $i())), this.actionRunner;
  }
  updateTitleArea() {
    this._onTitleAreaUpdate.fire();
  }
  isVisible() {
    return this.visible;
  }
  getControl() {
  }
}
class re extends Jr {
  get minimumWidth() {
    return z.width;
  }
  get maximumWidth() {
    return be.width;
  }
  get minimumHeight() {
    return z.height;
  }
  get maximumHeight() {
    return be.height;
  }
  get input() {
    return this._input;
  }
  get options() {
    return this._options;
  }
  get group() {
    return this._group;
  }
  get scopedContextKeyService() {
  }
  constructor(e, t, i, r) {
    super(e, t, i, r), this.onDidChangeSizeConstraints = b.None, this._onDidChangeControl = this._register(new U()), this.onDidChangeControl = this._onDidChangeControl.event;
  }
  create(e) {
    super.create(e), this.createEditor(e);
  }
  async setInput(e, t, i, r) {
    this._input = e, this._options = t;
  }
  clearInput() {
    this._input = void 0, this._options = void 0;
  }
  setOptions(e) {
    this._options = e;
  }
  setVisible(e, t) {
    super.setVisible(e), this.setEditorVisible(e, t);
  }
  setEditorVisible(e, t) {
    this._group = t;
  }
  setBoundarySashes(e) {
  }
  getEditorMemento(e, t, i, r = 10) {
    const s = `${this.getId()}${i}`;
    let o = re.EDITOR_MEMENTOS.get(s);
    return o || (o = this._register(new oe(
      this.getId(),
      i,
      this.getMemento(1, 1),
      r,
      e,
      t
    )), re.EDITOR_MEMENTOS.set(s, o)), o;
  }
  getViewState() {
  }
  saveState() {
    for (const [, e] of re.EDITOR_MEMENTOS)
      e.id === this.getId() && e.saveState();
    super.saveState();
  }
  dispose() {
    this._input = void 0, this._options = void 0, super.dispose();
  }
}
re.EDITOR_MEMENTOS = /* @__PURE__ */ new Map();
class oe extends B {
  constructor(e, t, i, r, s, o) {
    super(), this.id = e, this.key = t, this.memento = i, this.limit = r, this.editorGroupService = s, this.configurationService = o, this.cleanedUp = !1, this.shareEditorState = !1, this.updateConfiguration(void 0), this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration((e) => this.updateConfiguration(e)));
  }
  updateConfiguration(e) {
    (!e || e.affectsConfiguration(void 0, "workbench.editor.sharedViewState")) && (this.shareEditorState = this.configurationService.getValue(void 0, "workbench.editor.sharedViewState") === !0);
  }
  saveEditorState(e, t, i) {
    const r = this.doGetResource(t);
    if (!r || !e)
      return;
    const s = this.doLoad();
    let o = s.get(r.toString());
    o || (o = /* @__PURE__ */ Object.create(null), s.set(r.toString(), o)), o[e.id] = i, this.shareEditorState && (o[oe.SHARED_EDITOR_STATE] = i), te(t) && this.clearEditorStateOnDispose(r, t);
  }
  loadEditorState(e, t) {
    const i = this.doGetResource(t);
    if (!i || !e)
      return;
    const s = this.doLoad().get(i.toString());
    if (s) {
      const o = s[e.id];
      if (o)
        return o;
      if (this.shareEditorState)
        return s[oe.SHARED_EDITOR_STATE];
    }
  }
  clearEditorState(e, t) {
    var r;
    te(e) && ((r = this.editorDisposables) == null || r.delete(e));
    const i = this.doGetResource(e);
    if (i) {
      const s = this.doLoad();
      if (t) {
        const o = s.get(i.toString());
        o && (delete o[t.id], Ot(o) && s.delete(i.toString()));
      } else
        s.delete(i.toString());
    }
  }
  clearEditorStateOnDispose(e, t) {
    this.editorDisposables || (this.editorDisposables = /* @__PURE__ */ new Map()), this.editorDisposables.has(t) || this.editorDisposables.set(t, b.once(t.onWillDispose)(() => {
      var i;
      this.clearEditorState(e), (i = this.editorDisposables) == null || i.delete(t);
    }));
  }
  moveEditorState(e, t, i) {
    const r = this.doLoad(), s = [...r.keys()];
    for (const o of s) {
      const n = T.parse(o);
      if (!i.isEqualOrParent(n, e))
        continue;
      let a;
      if (se(e, n))
        a = t;
      else {
        const u = Xi(n.path, e.path);
        a = Ji(t, n.path.substr(u + e.path.length + 1));
      }
      const c = r.get(o, 0);
      c && (r.delete(o), r.set(a.toString(), c));
    }
  }
  doGetResource(e) {
    return te(e) ? e.resource : e;
  }
  doLoad() {
    if (!this.cache) {
      this.cache = new Zi(this.limit);
      const e = this.memento[this.key];
      Array.isArray(e) && this.cache.fromJSON(e);
    }
    return this.cache;
  }
  saveState() {
    const e = this.doLoad();
    this.cleanedUp || (this.cleanUp(), this.cleanedUp = !0), this.memento[this.key] = e.toJSON();
  }
  cleanUp() {
    const e = this.doLoad(), t = [...e.entries()];
    for (const [i, r] of t)
      for (const s of Object.keys(r)) {
        const o = Number(s);
        o === oe.SHARED_EDITOR_STATE && this.shareEditorState || this.editorGroupService.getGroup(o) || (delete r[o], Ot(r) && e.delete(i));
      }
  }
}
oe.SHARED_EDITOR_STATE = -1;
let tt = class extends re {
  constructor(e, t, i, r, s, o, n, a, c) {
    super(e, i, n, s), this.instantiationService = r, this.textResourceConfigurationService = o, this.editorService = a, this.editorGroupService = c, this.groupListener = this._register(new er()), this.viewState = this.getEditorMemento(c, o, t, 100);
  }
  setEditorVisible(e, t) {
    this.groupListener.value = t == null ? void 0 : t.onWillCloseEditor((i) => this.onWillCloseEditor(i)), super.setEditorVisible(e, t);
  }
  onWillCloseEditor(e) {
    const t = e.editor;
    t === this.input && this.updateEditorViewState(t);
  }
  clearInput() {
    this.updateEditorViewState(this.input), super.clearInput();
  }
  saveState() {
    this.updateEditorViewState(this.input), super.saveState();
  }
  updateEditorViewState(e) {
    if (!e || !this.tracksEditorViewState(e))
      return;
    const t = this.toEditorViewStateResource(e);
    t && (this.tracksDisposedEditorViewState() || (this.editorViewStateDisposables || (this.editorViewStateDisposables = /* @__PURE__ */ new Map()), this.editorViewStateDisposables.has(e) || this.editorViewStateDisposables.set(e, b.once(e.onWillDispose)(() => {
      var i;
      this.clearEditorViewState(t, this.group), (i = this.editorViewStateDisposables) == null || i.delete(e);
    }))), e.isDisposed() && !this.tracksDisposedEditorViewState() || !this.shouldRestoreEditorViewState(e) && (!this.group || !this.group.contains(e)) ? this.clearEditorViewState(t, this.group) : e.isDisposed() || this.saveEditorViewState(t));
  }
  shouldRestoreEditorViewState(e, t) {
    return t != null && t.newInGroup ? this.textResourceConfigurationService.getValue(ri.getOriginalUri(e, { supportSideBySide: K.PRIMARY }), "workbench.editor.restoreViewState") !== !1 : !0;
  }
  getViewState() {
    const e = this.input;
    if (!e || !this.tracksEditorViewState(e))
      return;
    const t = this.toEditorViewStateResource(e);
    if (t)
      return this.computeEditorViewState(t);
  }
  saveEditorViewState(e) {
    if (!this.group)
      return;
    const t = this.computeEditorViewState(e);
    t && this.viewState.saveEditorState(this.group, e, t);
  }
  loadEditorViewState(e, t) {
    if (!e || !this.group || !this.tracksEditorViewState(e) || !this.shouldRestoreEditorViewState(e, t))
      return;
    const i = this.toEditorViewStateResource(e);
    if (i)
      return this.viewState.loadEditorState(this.group, i);
  }
  moveEditorViewState(e, t, i) {
    return this.viewState.moveEditorState(e, t, i);
  }
  clearEditorViewState(e, t) {
    this.viewState.clearEditorState(e, t);
  }
  dispose() {
    if (super.dispose(), this.editorViewStateDisposables) {
      for (const [, e] of this.editorViewStateDisposables)
        e.dispose();
      this.editorViewStateDisposables = void 0;
    }
  }
  tracksDisposedEditorViewState() {
    return !1;
  }
};
tt = C([
  l(2, ke),
  l(3, Z),
  l(4, lt),
  l(5, ht),
  l(6, Ge),
  l(7, S),
  l(8, f)
], tt);
function Zr(d) {
  const e = d;
  return typeof (e == null ? void 0 : e.primary) == "object" && typeof e.secondary == "object";
}
let P = class ee extends tt {
  get minimumPrimaryWidth() {
    return this.primaryEditorPane ? this.primaryEditorPane.minimumWidth : 0;
  }
  get maximumPrimaryWidth() {
    return this.primaryEditorPane ? this.primaryEditorPane.maximumWidth : Number.POSITIVE_INFINITY;
  }
  get minimumPrimaryHeight() {
    return this.primaryEditorPane ? this.primaryEditorPane.minimumHeight : 0;
  }
  get maximumPrimaryHeight() {
    return this.primaryEditorPane ? this.primaryEditorPane.maximumHeight : Number.POSITIVE_INFINITY;
  }
  get minimumSecondaryWidth() {
    return this.secondaryEditorPane ? this.secondaryEditorPane.minimumWidth : 0;
  }
  get maximumSecondaryWidth() {
    return this.secondaryEditorPane ? this.secondaryEditorPane.maximumWidth : Number.POSITIVE_INFINITY;
  }
  get minimumSecondaryHeight() {
    return this.secondaryEditorPane ? this.secondaryEditorPane.minimumHeight : 0;
  }
  get maximumSecondaryHeight() {
    return this.secondaryEditorPane ? this.secondaryEditorPane.maximumHeight : Number.POSITIVE_INFINITY;
  }
  set minimumWidth(e) {
  }
  set maximumWidth(e) {
  }
  set minimumHeight(e) {
  }
  set maximumHeight(e) {
  }
  get minimumWidth() {
    return this.minimumPrimaryWidth + this.minimumSecondaryWidth;
  }
  get maximumWidth() {
    return this.maximumPrimaryWidth + this.maximumSecondaryWidth;
  }
  get minimumHeight() {
    return this.minimumPrimaryHeight + this.minimumSecondaryHeight;
  }
  get maximumHeight() {
    return this.maximumPrimaryHeight + this.maximumSecondaryHeight;
  }
  constructor(e, t, i, r, s, o, n, a) {
    super(ee.ID, ee.VIEW_STATE_PREFERENCE_KEY, e, t, r, o, i, n, a), this.configurationService = s, this.onDidCreateEditors = this._register(new U()), this._onDidChangeSizeConstraints = this._register(new ir()), this.onDidChangeSizeConstraints = b.any(this.onDidCreateEditors.event, this._onDidChangeSizeConstraints.event), this._onDidChangeSelection = this._register(new U()), this.onDidChangeSelection = this._onDidChangeSelection.event, this.primaryEditorPane = void 0, this.secondaryEditorPane = void 0, this.splitviewDisposables = this._register(new ne()), this.editorDisposables = this._register(new ne()), this.orientation = this.configurationService.getValue(ee.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? 0 : 1, this.dimension = new he(0, 0), this.lastFocusedSide = void 0, this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration((e) => this.onConfigurationUpdated(e)));
  }
  onConfigurationUpdated(e) {
    e.affectsConfiguration(ee.SIDE_BY_SIDE_LAYOUT_SETTING) && (this.orientation = this.configurationService.getValue(ee.SIDE_BY_SIDE_LAYOUT_SETTING) === "vertical" ? 0 : 1, this.splitview && this.recreateSplitview());
  }
  recreateSplitview() {
    const e = x(this.getContainer()), t = this.getSplitViewRatio();
    this.splitview && (e.removeChild(this.splitview.el), this.splitviewDisposables.clear()), this.createSplitView(e, t), this.layout(this.dimension);
  }
  getSplitViewRatio() {
    let e;
    if (this.splitview) {
      const t = this.splitview.getViewSize(0), i = this.splitview.getViewSize(1);
      if (Math.abs(t - i) > 1) {
        const r = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
        e = t / r;
      }
    }
    return e;
  }
  createEditor(e) {
    e.classList.add("side-by-side-editor"), this.secondaryEditorContainer = Ce(".side-by-side-editor-container.editor-instance"), this.primaryEditorContainer = Ce(".side-by-side-editor-container.editor-instance"), this.createSplitView(e);
  }
  createSplitView(e, t) {
    var n, a, c;
    this.splitview = this.splitviewDisposables.add(new rr(e, { orientation: this.orientation })), this.splitviewDisposables.add(this.splitview.onDidSashReset(() => {
      var u;
      return (u = this.splitview) == null ? void 0 : u.distributeViewSizes();
    })), this.orientation === 1 ? this.splitview.orthogonalEndSash = (n = this._boundarySashes) == null ? void 0 : n.bottom : (this.splitview.orthogonalStartSash = (a = this._boundarySashes) == null ? void 0 : a.left, this.splitview.orthogonalEndSash = (c = this._boundarySashes) == null ? void 0 : c.right);
    let i = Pt.Distribute, r = Pt.Distribute;
    if (t) {
      const u = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
      i = Math.round(u * t), r = u - i, this.splitview.layout(this.orientation === 1 ? this.dimension.width : this.dimension.height);
    }
    const s = x(this.secondaryEditorContainer);
    this.splitview.addView({
      element: s,
      layout: (u) => this.layoutPane(this.secondaryEditorPane, u),
      minimumSize: this.orientation === 1 ? z.width : z.height,
      maximumSize: Number.POSITIVE_INFINITY,
      onDidChange: b.None
    }, i);
    const o = x(this.primaryEditorContainer);
    this.splitview.addView({
      element: o,
      layout: (u) => this.layoutPane(this.primaryEditorPane, u),
      minimumSize: this.orientation === 1 ? z.width : z.height,
      maximumSize: Number.POSITIVE_INFINITY,
      onDidChange: b.None
    }, r), this.updateStyles();
  }
  getTitle() {
    return this.input ? this.input.getName() : h("sideBySideEditor", "Side by Side Editor");
  }
  async setInput(e, t, i, r) {
    var c, u, g;
    const s = this.input;
    await super.setInput(e, t, i, r), (!s || !e.matches(s)) && (s && this.disposeEditors(), this.createEditors(e));
    const { primary: o, secondary: n, viewState: a } = this.loadViewState(e, t, i);
    if (this.lastFocusedSide = a == null ? void 0 : a.focus, typeof (a == null ? void 0 : a.ratio) == "number" && this.splitview) {
      const m = this.splitview.orientation === 1 ? this.dimension.width : this.dimension.height;
      this.splitview.resizeView(0, Math.round(m * a.ratio));
    } else
      (c = this.splitview) == null || c.distributeViewSizes();
    await Promise.all([
      (u = this.secondaryEditorPane) == null ? void 0 : u.setInput(e.secondary, n, i, r),
      (g = this.primaryEditorPane) == null ? void 0 : g.setInput(e.primary, o, i, r)
    ]), typeof (t == null ? void 0 : t.target) == "number" && (this.lastFocusedSide = t.target);
  }
  loadViewState(e, t, i) {
    const r = Zr(t == null ? void 0 : t.viewState) ? t == null ? void 0 : t.viewState : this.loadEditorViewState(e, i);
    let s = /* @__PURE__ */ Object.create(null), o;
    return (t == null ? void 0 : t.target) === K.SECONDARY ? o = { ...t } : s = { ...t }, s.viewState = r == null ? void 0 : r.primary, r != null && r.secondary && (o ? o.viewState = r == null ? void 0 : r.secondary : o = { viewState: r.secondary }), { primary: s, secondary: o, viewState: r };
  }
  createEditors(e) {
    this.secondaryEditorPane = this.doCreateEditor(e.secondary, x(this.secondaryEditorContainer)), this.primaryEditorPane = this.doCreateEditor(e.primary, x(this.primaryEditorContainer)), this.layout(this.dimension), this._onDidChangeSizeConstraints.input = b.any(b.map(this.secondaryEditorPane.onDidChangeSizeConstraints, () => {
    }), b.map(this.primaryEditorPane.onDidChangeSizeConstraints, () => {
    })), this.onDidCreateEditors.fire(void 0), this.editorDisposables.add(this.primaryEditorPane.onDidFocus(() => this.onDidFocusChange(K.PRIMARY))), this.editorDisposables.add(this.secondaryEditorPane.onDidFocus(() => this.onDidFocusChange(K.SECONDARY)));
  }
  doCreateEditor(e, t) {
    const i = Oe.as(ti.EditorPane).getEditorPane(e);
    if (!i)
      throw new Error("No editor pane descriptor for editor found");
    const r = i.instantiate(this.instantiationService);
    return r.create(t), r.setVisible(this.isVisible(), this.group), Mt(r) && this.editorDisposables.add(r.onDidChangeSelection((s) => this._onDidChangeSelection.fire(s))), this.editorDisposables.add(r), r;
  }
  onDidFocusChange(e) {
    this.lastFocusedSide = e, this._onDidChangeControl.fire();
  }
  getSelection() {
    const e = this.getLastFocusedEditorPane();
    if (Mt(e)) {
      const t = e.getSelection();
      if (t)
        return new Et(
          t,
          e === this.primaryEditorPane ? K.PRIMARY : K.SECONDARY
        );
    }
  }
  setOptions(e) {
    var t;
    super.setOptions(e), typeof (e == null ? void 0 : e.target) == "number" && (this.lastFocusedSide = e.target), (t = this.getLastFocusedEditorPane()) == null || t.setOptions(e);
  }
  setEditorVisible(e, t) {
    var i, r;
    (i = this.primaryEditorPane) == null || i.setVisible(e, t), (r = this.secondaryEditorPane) == null || r.setVisible(e, t), super.setEditorVisible(e, t);
  }
  clearInput() {
    var e, t;
    super.clearInput(), (e = this.primaryEditorPane) == null || e.clearInput(), (t = this.secondaryEditorPane) == null || t.clearInput(), this.disposeEditors();
  }
  focus() {
    var e;
    (e = this.getLastFocusedEditorPane()) == null || e.focus();
  }
  getLastFocusedEditorPane() {
    return this.lastFocusedSide === K.SECONDARY ? this.secondaryEditorPane : this.primaryEditorPane;
  }
  layout(e) {
    this.dimension = e, x(this.splitview).layout(this.orientation === 1 ? e.width : e.height);
  }
  setBoundarySashes(e) {
    this._boundarySashes = e, this.splitview && (this.splitview.orthogonalEndSash = e.bottom);
  }
  layoutPane(e, t) {
    e == null || e.layout(this.orientation === 1 ? new he(t, this.dimension.height) : new he(this.dimension.width, t));
  }
  getControl() {
    var e;
    return (e = this.getLastFocusedEditorPane()) == null ? void 0 : e.getControl();
  }
  getPrimaryEditorPane() {
    return this.primaryEditorPane;
  }
  getSecondaryEditorPane() {
    return this.secondaryEditorPane;
  }
  tracksEditorViewState(e) {
    return e instanceof ie;
  }
  computeEditorViewState(e) {
    var r, s;
    if (!this.input || !se(e, this.toEditorViewStateResource(this.input)))
      return;
    const t = (r = this.primaryEditorPane) == null ? void 0 : r.getViewState(), i = (s = this.secondaryEditorPane) == null ? void 0 : s.getViewState();
    if (!(!t || !i))
      return {
        primary: t,
        secondary: i,
        focus: this.lastFocusedSide,
        ratio: this.getSplitViewRatio()
      };
  }
  toEditorViewStateResource(e) {
    let t, i;
    if (e instanceof ie && (t = e.primary.resource, i = e.secondary.resource), !(!i || !t))
      return T.from({ scheme: "sideBySide", path: `${we(i.toString())}${we(t.toString())}` });
  }
  updateStyles() {
    super.updateStyles(), this.primaryEditorContainer && (this.orientation === 1 ? (this.primaryEditorContainer.style.borderLeftWidth = "1px", this.primaryEditorContainer.style.borderLeftStyle = "solid", this.primaryEditorContainer.style.borderLeftColor = this.getColor(qr) ?? "", this.primaryEditorContainer.style.borderTopWidth = "0") : (this.primaryEditorContainer.style.borderTopWidth = "1px", this.primaryEditorContainer.style.borderTopStyle = "solid", this.primaryEditorContainer.style.borderTopColor = this.getColor(jr) ?? "", this.primaryEditorContainer.style.borderLeftWidth = "0"));
  }
  dispose() {
    this.disposeEditors(), super.dispose();
  }
  disposeEditors() {
    this.editorDisposables.clear(), this.secondaryEditorPane = void 0, this.primaryEditorPane = void 0, this.lastFocusedSide = void 0, this.secondaryEditorContainer && je(this.secondaryEditorContainer), this.primaryEditorContainer && je(this.primaryEditorContainer);
  }
};
P.ID = tr;
P.SIDE_BY_SIDE_LAYOUT_SETTING = "workbench.editor.splitInGroupLayout";
P.VIEW_STATE_PREFERENCE_KEY = "sideBySideEditorViewState";
P = C([
  l(0, ke),
  l(1, Z),
  l(2, Ge),
  l(3, lt),
  l(4, O),
  l(5, ht),
  l(6, S),
  l(7, f)
], P);
class Et {
  constructor(e, t) {
    this.selection = e, this.side = t;
  }
  compare(e) {
    return !(e instanceof Et) || this.side !== e.side ? 3 : this.selection.compare(e.selection);
  }
  restore(e) {
    const t = {
      ...e,
      target: this.side
    };
    return this.selection.restore(t);
  }
}
const eo = "workbench.action.closeUnmodifiedEditors", to = "workbench.action.closeEditorsInGroup", io = "workbench.action.closeEditorsAndGroup", ro = "workbench.action.closeEditorsToTheRight", ui = "workbench.action.closeActiveEditor", oo = "workbench.action.closeActivePinnedEditor", so = "workbench.action.closeGroup", no = "workbench.action.closeOtherEditors", ao = "moveActiveEditor", li = "copyActiveEditor", W = "layoutEditorGroups", co = "workbench.action.keepEditor", uo = "workbench.action.toggleKeepEditors", lo = "workbench.action.toggleEditorGroupLock", ho = "workbench.action.lockEditorGroup", go = "workbench.action.unlockEditorGroup", po = "workbench.action.showEditorsInGroup", fo = "workbench.action.reopenWithEditor", Eo = "workbench.action.pinEditor", hi = "workbench.action.unpinEditor", Ht = "toggle.diff.renderSideBySide", mo = "workbench.action.compareEditor.nextChange", vo = "workbench.action.compareEditor.previousChange", gi = "workbench.action.compareEditor.focusPrimarySide", pi = "workbench.action.compareEditor.focusSecondarySide", fi = "workbench.action.compareEditor.focusOtherSide", So = "workbench.action.compareEditor.openSide", Ei = "toggle.diff.ignoreTrimWhitespace", it = "workbench.action.splitEditorUp", rt = "workbench.action.splitEditorDown", yo = "workbench.action.splitEditorLeft", wo = "workbench.action.splitEditorRight", Co = "workbench.action.splitEditorInGroup", Io = "workbench.action.toggleSplitEditorInGroup", bo = "workbench.action.joinEditorInGroup", Do = "workbench.action.toggleSplitEditorInGroupLayout", Ao = "workbench.action.focusFirstSideEditor", _o = "workbench.action.focusSecondSideEditor", To = "workbench.action.focusOtherSideEditor", Ro = "workbench.action.focusLeftGroupWithoutWrap", Go = "workbench.action.focusRightGroupWithoutWrap", ko = "workbench.action.focusAboveGroupWithoutWrap", Oo = "workbench.action.focusBelowGroupWithoutWrap", Kt = "workbench.action.openEditorAtIndex", zt = "_workbench.open", Yt = "_workbench.diff", Po = "_workbench.openWith", qt = function(d) {
  return !(!ii(d) || !Nt(d.to) || !Lt(d.by) && !Nt(d.by) || !Lt(d.value) && !fr(d.value));
};
function Mo() {
  const d = {
    type: "object",
    required: ["to"],
    properties: {
      to: {
        type: "string",
        enum: ["left", "right"]
      },
      by: {
        type: "string",
        enum: ["tab", "group"]
      },
      value: {
        type: "number"
      }
    }
  };
  v.registerCommandAndKeybindingRule({
    id: ao,
    weight: 200,
    when: Qe.editorTextFocus,
    primary: 0,
    handler: (r, s) => e(!0, s, r),
    description: {
      description: h(
        "editorCommand.activeEditorMove.description",
        "Move the active editor by tabs or groups"
      ),
      args: [
        {
          name: h("editorCommand.activeEditorMove.arg.name", "Active editor move argument"),
          description: h(
            "editorCommand.activeEditorMove.arg.description",
            `Argument Properties:
	* 'to': String value providing where to move.
	* 'by': String value providing the unit for move (by tab or by group).
	* 'value': Number value providing how many positions or an absolute position to move.`
          ),
          constraint: qt,
          schema: d
        }
      ]
    }
  }), v.registerCommandAndKeybindingRule({
    id: li,
    weight: 200,
    when: Qe.editorTextFocus,
    primary: 0,
    handler: (r, s) => e(!1, s, r),
    description: {
      description: h(
        "editorCommand.activeEditorCopy.description",
        "Copy the active editor by groups"
      ),
      args: [
        {
          name: h("editorCommand.activeEditorCopy.arg.name", "Active editor copy argument"),
          description: h(
            "editorCommand.activeEditorCopy.arg.description",
            `Argument Properties:
	* 'to': String value providing where to copy.
	* 'value': Number value providing how many positions or an absolute position to copy.`
          ),
          constraint: qt,
          schema: d
        }
      ]
    }
  });
  function e(r, s = /* @__PURE__ */ Object.create(null), o) {
    s.to = s.to || "right", s.by = s.by || "tab", s.value = typeof s.value == "number" ? s.value : 1;
    const n = o.get(S).activeEditorPane;
    if (n)
      switch (s.by) {
        case "tab":
          if (r)
            return t(s, n);
          break;
        case "group":
          return i(r, s, n, o);
      }
  }
  function t(r, s) {
    const o = s.group;
    let n = o.getIndexOfEditor(s.input);
    switch (r.to) {
      case "first":
        n = 0;
        break;
      case "last":
        n = o.count - 1;
        break;
      case "left":
        n = n - r.value;
        break;
      case "right":
        n = n + r.value;
        break;
      case "center":
        n = Math.round(o.count / 2) - 1;
        break;
      case "position":
        n = r.value - 1;
        break;
    }
    n = n < 0 ? 0 : n >= o.count ? o.count - 1 : n, o.moveEditor(s.input, o, { index: n });
  }
  function i(r, s, o, n) {
    const a = n.get(f), c = n.get(O), u = o.group;
    let g;
    switch (s.to) {
      case "left":
        g = a.findGroup({ direction: 2 }, u), g || (g = a.addGroup(u, 2));
        break;
      case "right":
        g = a.findGroup({ direction: 3 }, u), g || (g = a.addGroup(u, 3));
        break;
      case "up":
        g = a.findGroup({ direction: 0 }, u), g || (g = a.addGroup(u, 0));
        break;
      case "down":
        g = a.findGroup({ direction: 1 }, u), g || (g = a.addGroup(u, 1));
        break;
      case "first":
        g = a.findGroup({ location: 0 }, u);
        break;
      case "last":
        g = a.findGroup({ location: 1 }, u);
        break;
      case "previous":
        g = a.findGroup({ location: 3 }, u);
        break;
      case "next":
        g = a.findGroup({ location: 2 }, u), g || (g = a.addGroup(u, gt(c)));
        break;
      case "center":
        g = a.getGroups(2)[a.count / 2 - 1];
        break;
      case "position":
        g = a.getGroups(2)[s.value - 1];
        break;
    }
    g && (r ? u.moveEditor(o.input, g) : u.id !== g.id && u.copyEditor(o.input, g), g.focus());
  }
}
function Fo() {
  function d(e, t) {
    if (!t || typeof t != "object")
      return;
    e.get(f).applyLayout(t);
  }
  A.registerCommand(W, (e, t) => {
    d(e, t);
  }), A.registerCommand({
    id: "vscode.setEditorLayout",
    handler: (e, t) => d(e, t),
    description: {
      description: "Set Editor Layout",
      args: [{
        name: "args",
        schema: {
          type: "object",
          required: ["groups"],
          properties: {
            orientation: {
              type: "number",
              default: 0,
              enum: [0, 1]
            },
            groups: {
              $ref: "#/definitions/editorGroupsSchema",
              default: [{}, {}]
            }
          }
        }
      }]
    }
  }), A.registerCommand({
    id: "vscode.getEditorLayout",
    handler: (e) => e.get(f).getLayout(),
    description: {
      description: "Get Editor Layout",
      args: [],
      returns: "An editor layout object, in the same format as vscode.setEditorLayout"
    }
  });
}
function No() {
  v.registerCommandAndKeybindingRule({
    id: mo,
    weight: 200,
    when: Bt,
    primary: 575,
    handler: (o) => e(o, !0)
  }), v.registerCommandAndKeybindingRule({
    id: vo,
    weight: 200,
    when: Bt,
    primary: 1599,
    handler: (o) => e(o, !1)
  });
  function d(o) {
    const n = o.get(S);
    for (const a of [n.activeEditorPane, ...n.visibleEditorPanes])
      if (a instanceof $)
        return a;
  }
  function e(o, n) {
    const a = d(o);
    if (a) {
      const c = a.getDiffNavigator();
      c && (n ? c.next() : c.previous());
    }
  }
  let t;
  (function(o) {
    o[o.Original = 0] = "Original", o[o.Modified = 1] = "Modified", o[o.Toggle = 2] = "Toggle";
  })(t || (t = {}));
  function i(o, n) {
    var c, u, g;
    const a = d(o);
    if (a)
      switch (n) {
        case t.Original:
          (c = a.getControl()) == null || c.getOriginalEditor().focus();
          break;
        case t.Modified:
          (u = a.getControl()) == null || u.getModifiedEditor().focus();
          break;
        case t.Toggle:
          return (g = a.getControl()) != null && g.getModifiedEditor().hasWidgetFocus() ? i(o, t.Original) : i(o, t.Modified);
      }
  }
  function r(o) {
    const n = o.get(O), a = !n.getValue("diffEditor.renderSideBySide");
    n.updateValue("diffEditor.renderSideBySide", a);
  }
  function s(o) {
    const n = o.get(O), a = !n.getValue("diffEditor.ignoreTrimWhitespace");
    n.updateValue("diffEditor.ignoreTrimWhitespace", a);
  }
  v.registerCommandAndKeybindingRule({
    id: Ht,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (o) => r(o)
  }), v.registerCommandAndKeybindingRule({
    id: gi,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (o) => i(o, t.Modified)
  }), v.registerCommandAndKeybindingRule({
    id: pi,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (o) => i(o, t.Original)
  }), v.registerCommandAndKeybindingRule({
    id: fi,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (o) => i(o, t.Toggle)
  }), or.appendMenuItem(de.CommandPalette, {
    command: {
      id: Ht,
      title: {
        value: h("toggleInlineView", "Toggle Inline View"),
        original: "Compare: Toggle Inline View"
      },
      category: h("compare", "Compare")
    },
    when: Se
  }), v.registerCommandAndKeybindingRule({
    id: Ei,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (o) => s(o)
  });
}
function Lo() {
  function d(e, t, i) {
    return e ? [
      { ...e.editorOptions, ...t ?? /* @__PURE__ */ Object.create(null) },
      e.sideBySide ? ut : i
    ] : [t, i];
  }
  A.registerCommand({
    id: "vscode.open",
    handler: (e, t) => {
      e.get(Y).executeCommand(zt, t);
    },
    description: {
      description: "Opens the provided resource in the editor.",
      args: [{ name: "Uri" }]
    }
  }), A.registerCommand(zt, async function(e, t, i, r, s) {
    const o = e.get(S), n = e.get(f), a = e.get(sr), c = e.get(nr), u = e.get(O), g = typeof t == "string" ? t : T.revive(t), [m, w] = i ?? [];
    if (w || typeof m == "number" || Ft(g, V.untitled)) {
      const [p, I] = d(s, w, m), D = T.isUri(g) ? g : T.parse(g);
      let H;
      ar(D) ? H = { resource: D.with({ scheme: c.defaultUriScheme }), forceUntitled: !0, options: p, label: r } : H = { resource: D, options: p, label: r }, await o.openEditor(H, We(n, u, I));
    } else {
      if (Ft(g, V.command))
        return;
      await a.open(g, { openToSide: s == null ? void 0 : s.sideBySide, editorOptions: s == null ? void 0 : s.editorOptions });
    }
  }), A.registerCommand({
    id: "vscode.diff",
    handler: (e, t, i, r) => {
      e.get(Y).executeCommand(Yt, t, i, r);
    },
    description: {
      description: "Opens the provided resources in the diff editor to compare their contents.",
      args: [
        { name: "left", description: "Left-hand side resource of the diff editor" },
        { name: "right", description: "Right-hand side resource of the diff editor" },
        { name: "title", description: "Human readable title for the diff editor" }
      ]
    }
  }), A.registerCommand(Yt, async function(e, t, i, r, s, o) {
    const n = e.get(S), a = e.get(f), c = e.get(O), [u, g] = s ?? [], [m, w] = d(o, g, u);
    let p, I;
    typeof r == "string" ? p = r : r && (p = r.label, I = r.description), await n.openEditor({
      original: { resource: T.revive(t) },
      modified: { resource: T.revive(i) },
      label: p,
      description: I,
      options: m
    }, We(a, c, w));
  }), A.registerCommand(Po, (e, t, i, r) => {
    const s = e.get(S), o = e.get(f), n = e.get(O), [a, c] = r ?? [];
    return s.openEditor({ resource: T.revive(t), options: { ...c, pinned: !0, override: i } }, We(o, n, a));
  });
}
function xo() {
  const d = (t, i) => {
    const r = t.get(S), s = r.activeEditorPane;
    if (s) {
      const o = s.group.getEditorByIndex(i);
      o && r.openEditor(o);
    }
  };
  A.registerCommand({
    id: Kt,
    handler: d
  });
  for (let t = 0; t < 9; t++) {
    const i = t, r = t + 1;
    v.registerCommandAndKeybindingRule({
      id: Kt + r,
      weight: 200,
      when: void 0,
      primary: 512 | e(r),
      mac: { primary: 256 | e(r) },
      handler: (s) => d(s, i)
    });
  }
  function e(t) {
    switch (t) {
      case 0:
        return 21;
      case 1:
        return 22;
      case 2:
        return 23;
      case 3:
        return 24;
      case 4:
        return 25;
      case 5:
        return 26;
      case 6:
        return 27;
      case 7:
        return 28;
      case 8:
        return 29;
      case 9:
        return 30;
    }
    throw new Error("invalid index");
  }
}
function Vo() {
  for (let t = 1; t < 8; t++)
    v.registerCommandAndKeybindingRule({
      id: d(t),
      weight: 200,
      when: void 0,
      primary: 2048 | e(t),
      handler: (i) => {
        const r = i.get(f), s = i.get(O);
        if (t > r.count)
          return;
        const o = r.getGroups(2);
        if (o[t])
          return o[t].focus();
        const n = gt(s), a = r.findGroup({ location: 1 });
        if (!a)
          return;
        r.addGroup(a, n).focus();
      }
    });
  function d(t) {
    switch (t) {
      case 1:
        return "workbench.action.focusSecondEditorGroup";
      case 2:
        return "workbench.action.focusThirdEditorGroup";
      case 3:
        return "workbench.action.focusFourthEditorGroup";
      case 4:
        return "workbench.action.focusFifthEditorGroup";
      case 5:
        return "workbench.action.focusSixthEditorGroup";
      case 6:
        return "workbench.action.focusSeventhEditorGroup";
      case 7:
        return "workbench.action.focusEighthEditorGroup";
    }
    throw new Error("Invalid index");
  }
  function e(t) {
    switch (t) {
      case 1:
        return 23;
      case 2:
        return 24;
      case 3:
        return 25;
      case 4:
        return 26;
      case 5:
        return 27;
      case 6:
        return 28;
      case 7:
        return 29;
    }
    throw new Error("Invalid index");
  }
}
function mi(d, e, t) {
  let i;
  if (t && typeof t.groupId == "number" ? i = d.getGroup(t.groupId) : i = d.activeGroup, !i)
    return;
  const r = d.addGroup(i, e);
  let s;
  t && typeof t.editorIndex == "number" ? s = i.getEditorByIndex(t.editorIndex) : s = ge(i.activeEditor), s && !s.hasCapability(8) && i.copyEditor(s, r, { preserveFocus: t == null ? void 0 : t.preserveFocus }), r.focus();
}
function Bo() {
  [
    { id: it, direction: 0 },
    { id: rt, direction: 1 },
    { id: yo, direction: 2 },
    { id: wo, direction: 3 }
  ].forEach(({ id: d, direction: e }) => {
    A.registerCommand(d, function(t, i, r) {
      mi(t.get(f), e, _(i, r));
    });
  });
}
function Uo() {
  function d(e, t, i, r) {
    var u;
    const s = e.get(f), o = e.get(S);
    let n = !0;
    if ((t || i || r) && (n = !1), n && !i && !r) {
      const g = s.activeGroup, m = g.activeEditor;
      if (m && g.isSticky(m)) {
        const w = g.getEditors(0, { excludeSticky: !0 })[0];
        if (w)
          return g.openEditor(w);
        const p = o.getEditors(0, { excludeSticky: !0 })[0];
        if (p)
          return Promise.resolve((u = s.getGroup(p.groupId)) == null ? void 0 : u.openEditor(p.editor));
      }
    }
    const { editors: a, groups: c } = ve(e, i, r);
    return Promise.all(c.map(async (g) => {
      if (g) {
        const m = Er(a.filter((w) => w.groupId === g.id).map(
          (w) => typeof w.editorIndex == "number" ? g.getEditorByIndex(w.editorIndex) : g.activeEditor
        )).filter((w) => !n || !g.isSticky(w));
        await g.closeEditors(m, { preserveFocus: r == null ? void 0 : r.preserveFocus });
      }
    }));
  }
  v.registerCommandAndKeybindingRule({
    id: ui,
    weight: 200,
    when: void 0,
    primary: 2101,
    win: { primary: 2110, secondary: [2101] },
    handler: (e, t, i) => d(e, !1, t, i)
  }), A.registerCommand(oo, (e, t, i) => d(e, !0, t, i)), v.registerCommandAndKeybindingRule({
    id: to,
    weight: 200,
    when: void 0,
    primary: k(2089, 53),
    handler: (e, t, i) => Promise.all(ve(e, t, i).groups.map(async (r) => {
      if (r) {
        await r.closeAllEditors({ excludeSticky: !0 });
        return;
      }
    }))
  }), v.registerCommandAndKeybindingRule({
    id: so,
    weight: 200,
    when: R.and(Qr, ye),
    primary: 2101,
    win: { primary: 2110, secondary: [2101] },
    handler: (e, t, i) => {
      const r = e.get(f), s = _(t, i);
      let o;
      s && typeof s.groupId == "number" ? o = r.getGroup(s.groupId) : o = r.activeGroup, o && r.removeGroup(o);
    }
  }), v.registerCommandAndKeybindingRule({
    id: eo,
    weight: 200,
    when: void 0,
    primary: k(2089, 51),
    handler: (e, t, i) => Promise.all(ve(e, t, i).groups.map(async (r) => {
      r && await r.closeEditors({ savedOnly: !0, excludeSticky: !0 }, { preserveFocus: i == null ? void 0 : i.preserveFocus });
    }))
  }), v.registerCommandAndKeybindingRule({
    id: no,
    weight: 200,
    when: void 0,
    primary: void 0,
    mac: { primary: 2610 },
    handler: (e, t, i) => {
      const { editors: r, groups: s } = ve(e, t, i);
      return Promise.all(s.map(async (o) => {
        if (o) {
          const n = r.filter((c) => c.groupId === o.id).map(
            (c) => typeof c.editorIndex == "number" ? o.getEditorByIndex(c.editorIndex) : o.activeEditor
          ), a = o.getEditors(1, { excludeSticky: !0 }).filter((c) => !n.includes(c));
          for (const c of n)
            c && o.pinEditor(c);
          await o.closeEditors(a, { preserveFocus: i == null ? void 0 : i.preserveFocus });
        }
      }));
    }
  }), v.registerCommandAndKeybindingRule({
    id: ro,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: async (e, t, i) => {
      const r = e.get(f), { group: s, editor: o } = N(r, _(t, i));
      s && o && (s.activeEditor && s.pinEditor(s.activeEditor), await s.closeEditors({ direction: 1, except: o, excludeSticky: !0 }, { preserveFocus: i == null ? void 0 : i.preserveFocus }));
    }
  }), v.registerCommandAndKeybindingRule({
    id: fo,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: async (e, t, i) => {
      var m, w, p;
      const r = e.get(f), s = e.get(S), o = e.get(dr), n = e.get(ke), { group: a, editor: c } = N(r, _(t, i));
      if (!c)
        return;
      const u = c.toUntyped();
      if (!u)
        return;
      u.options = { ...(m = s.activeEditorPane) == null ? void 0 : m.options, override: cr.PICK };
      const g = await o.resolveEditor(u, a);
      ur(g) && (await g.group.replaceEditors([
        {
          editor: c,
          replacement: g.editor,
          forceReplaceDirty: ((w = c.resource) == null ? void 0 : w.scheme) === V.untitled,
          options: g.options
        }
      ]), n.publicLog2("workbenchEditorReopen", {
        scheme: ((p = c.resource) == null ? void 0 : p.scheme) ?? "",
        ext: c.resource ? lr(c.resource) : "",
        from: c.editorId ?? "",
        to: g.editor.editorId ?? ""
      }), await g.group.openEditor(g.editor));
    }
  }), A.registerCommand(io, async (e, t, i) => {
    const r = e.get(f), { group: s } = N(r, _(t, i));
    s && (await s.closeAllEditors(), s.count === 0 && r.getGroup(s.id) && r.removeGroup(s));
  });
}
function Wo() {
  const d = [
    {
      id: Ro,
      direction: 2
    },
    {
      id: Go,
      direction: 3
    },
    {
      id: ko,
      direction: 0
    },
    {
      id: Oo,
      direction: 1
    }
  ];
  for (const e of d)
    A.registerCommand(e.id, async (t) => {
      const i = t.get(f), r = i.findGroup({ direction: e.direction }, i.activeGroup, !1);
      r == null || r.focus();
    });
}
function Ho() {
  async function d(t, i, r) {
    const s = t.get(f), o = t.get(Z), { group: n, editor: a } = N(s, _(i, r));
    a && await n.replaceEditors([{
      editor: a,
      replacement: o.createInstance(ie, void 0, void 0, a, a),
      forceReplaceDirty: !0
    }]);
  }
  F(class extends y {
    constructor() {
      super({
        id: Co,
        title: { value: h("splitEditorInGroup", "Split Editor in Group"), original: "Split Editor in Group" },
        category: E.View,
        precondition: ze,
        f1: !0,
        keybinding: {
          weight: 200,
          when: ze,
          primary: k(2089, 3160)
        }
      });
    }
    run(t, i, r) {
      return d(t, i, r);
    }
  });
  async function e(t, i, r) {
    const s = t.get(f), { group: o, editor: n } = N(s, _(i, r));
    if (!(n instanceof ie))
      return;
    let a;
    const c = o.activeEditorPane;
    if (c instanceof P && o.activeEditor === n) {
      for (const u of [c.getPrimaryEditorPane(), c.getSecondaryEditorPane()])
        if (u != null && u.hasFocus()) {
          a = { viewState: u.getViewState() };
          break;
        }
    }
    await o.replaceEditors([{
      editor: n,
      replacement: n.primary,
      options: a
    }]);
  }
  F(class extends y {
    constructor() {
      super({
        id: bo,
        title: { value: h("joinEditorInGroup", "Join Editor in Group"), original: "Join Editor in Group" },
        category: E.View,
        precondition: Q,
        f1: !0,
        keybinding: {
          weight: 200,
          when: Q,
          primary: k(2089, 3160)
        }
      });
    }
    run(t, i, r) {
      return e(t, i, r);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: Io,
        title: { value: h("toggleJoinEditorInGroup", "Toggle Split Editor in Group"), original: "Toggle Split Editor in Group" },
        category: E.View,
        precondition: R.or(ze, Q),
        f1: !0
      });
    }
    async run(t, i, r) {
      const s = t.get(f), { editor: o } = N(s, _(i, r));
      o instanceof ie ? await e(t, i, r) : o && await d(t, i, r);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: Do,
        title: { value: h("toggleSplitEditorInGroupLayout", "Toggle Layout of Split Editor in Group"), original: "Toggle Layout of Split Editor in Group" },
        category: E.View,
        precondition: Q,
        f1: !0
      });
    }
    async run(t) {
      const i = t.get(O), r = i.getValue(P.SIDE_BY_SIDE_LAYOUT_SETTING);
      let s;
      return r !== "horizontal" ? s = "horizontal" : s = "vertical", i.updateValue(P.SIDE_BY_SIDE_LAYOUT_SETTING, s);
    }
  });
}
function Ko() {
  F(class extends y {
    constructor() {
      super({
        id: Ao,
        title: { value: h("focusLeftSideEditor", "Focus First Side in Active Editor"), original: "Focus First Side in Active Editor" },
        category: E.View,
        precondition: R.or(Q, Se),
        f1: !0
      });
    }
    async run(d) {
      var r;
      const e = d.get(S), t = d.get(Y), i = e.activeEditorPane;
      i instanceof P ? (r = i.getSecondaryEditorPane()) == null || r.focus() : i instanceof $ && await t.executeCommand(pi);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: _o,
        title: { value: h("focusRightSideEditor", "Focus Second Side in Active Editor"), original: "Focus Second Side in Active Editor" },
        category: E.View,
        precondition: R.or(Q, Se),
        f1: !0
      });
    }
    async run(d) {
      var r;
      const e = d.get(S), t = d.get(Y), i = e.activeEditorPane;
      i instanceof P ? (r = i.getPrimaryEditorPane()) == null || r.focus() : i instanceof $ && await t.executeCommand(gi);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: To,
        title: { value: h("focusOtherSideEditor", "Focus Other Side in Active Editor"), original: "Focus Other Side in Active Editor" },
        category: E.View,
        precondition: R.or(Q, Se),
        f1: !0
      });
    }
    async run(d) {
      var r, s, o;
      const e = d.get(S), t = d.get(Y), i = e.activeEditorPane;
      i instanceof P ? (r = i.getPrimaryEditorPane()) != null && r.hasFocus() ? (s = i.getSecondaryEditorPane()) == null || s.focus() : (o = i.getPrimaryEditorPane()) == null || o.focus() : i instanceof $ && await t.executeCommand(fi);
    }
  });
}
function zo() {
  v.registerCommandAndKeybindingRule({
    id: co,
    weight: 200,
    when: void 0,
    primary: k(2089, 3),
    handler: async (e, t, i) => {
      const r = e.get(f), { group: s, editor: o } = N(r, _(t, i));
      if (s && o)
        return s.pinEditor(o);
    }
  }), A.registerCommand({
    id: uo,
    handler: (e) => {
      const t = e.get(O), r = t.getValue("workbench.editor.enablePreview") !== !0;
      t.updateValue("workbench.editor.enablePreview", r);
    }
  });
  function d(e, t, i, r) {
    const s = e.get(f), { group: o } = N(s, _(t, i));
    o == null || o.lock(r ?? !o.isLocked);
  }
  F(class extends y {
    constructor() {
      super({
        id: lo,
        title: { value: h("toggleEditorGroupLock", "Toggle Editor Group Lock"), original: "Toggle Editor Group Lock" },
        category: E.View,
        precondition: ye,
        f1: !0
      });
    }
    async run(e, t, i) {
      d(e, t, i);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: ho,
        title: { value: h("lockEditorGroup", "Lock Editor Group"), original: "Lock Editor Group" },
        category: E.View,
        precondition: R.and(ye, Ut.toNegated()),
        f1: !0
      });
    }
    async run(e, t, i) {
      d(e, t, i, !0);
    }
  }), F(class extends y {
    constructor() {
      super({
        id: go,
        title: { value: h("unlockEditorGroup", "Unlock Editor Group"), original: "Unlock Editor Group" },
        precondition: R.and(ye, Ut),
        category: E.View,
        f1: !0
      });
    }
    async run(e, t, i) {
      d(e, t, i, !1);
    }
  }), v.registerCommandAndKeybindingRule({
    id: Eo,
    weight: 200,
    when: Wt.toNegated(),
    primary: k(2089, 1027),
    handler: async (e, t, i) => {
      const r = e.get(f), { group: s, editor: o } = N(r, _(t, i));
      if (s && o)
        return s.stickEditor(o);
    }
  }), v.registerCommandAndKeybindingRule({
    id: So,
    weight: 200,
    when: Qe.inDiffEditor,
    primary: k(2089, 1069),
    handler: async (e) => {
      const t = e.get(S), i = e.get(f), r = t.activeEditor, s = t.activeTextEditorControl;
      if (!Ye(s) || !(r instanceof q))
        return;
      let o;
      return s.getOriginalEditor().hasTextFocus() ? o = r.original : o = r.modified, i.activeGroup.openEditor(o);
    }
  }), v.registerCommandAndKeybindingRule({
    id: hi,
    weight: 200,
    when: Wt,
    primary: k(2089, 1027),
    handler: async (e, t, i) => {
      const r = e.get(f), { group: s, editor: o } = N(r, _(t, i));
      if (s && o)
        return s.unstickEditor(o);
    }
  }), v.registerCommandAndKeybindingRule({
    id: po,
    weight: 200,
    when: void 0,
    primary: void 0,
    handler: (e, t, i) => {
      const r = e.get(f), s = e.get(le), o = _(t, i);
      if (o && typeof o.groupId == "number") {
        const n = r.getGroup(o.groupId);
        n && r.activateGroup(n);
      }
      return s.quickAccess.show(X.PREFIX);
    }
  });
}
function ve(d, e, t) {
  const i = d.get(f), r = d.get(hr), s = Yo(_(e, t), r, i), o = i.activeGroup;
  return s.length === 0 && o.activeEditor && s.push({
    groupId: o.id,
    editorIndex: o.getIndexOfEditor(o.activeEditor)
  }), {
    editors: s,
    groups: gr(s.map((n) => n.groupId)).map((n) => i.getGroup(n))
  };
}
function _(d, e) {
  if (T.isUri(d))
    return e;
  if (d && typeof d.groupId == "number")
    return d;
  if (e && typeof e.groupId == "number")
    return e;
}
function N(d, e) {
  let t = e && typeof e.groupId == "number" ? d.getGroup(e.groupId) : void 0, i = t && e && typeof e.editorIndex == "number" ? ge(t.getEditorByIndex(e.editorIndex)) : void 0;
  return t || (t = d.activeGroup), i || (i = ge(t.activeEditor)), { group: t, editor: i };
}
function Yo(d, e, t) {
  const i = e.lastFocusedList;
  if (i instanceof pr && i.getHTMLElement() === document.activeElement) {
    const r = (a) => {
      if (He(a))
        return { groupId: a.id, editorIndex: void 0 };
      const c = t.getGroup(a.groupId);
      return { groupId: a.groupId, editorIndex: c ? c.getIndexOfEditor(a.editor) : -1 };
    }, s = (a) => He(a) || mr(a), o = i.getFocusedElements().filter(s), n = d || (o.length ? o.map(r)[0] : void 0);
    if (n) {
      const a = i.getSelectedElements().filter(s);
      return a != null && a.some((c) => {
        if (He(c))
          return c.id === n.groupId;
        const u = t.getGroup(c.groupId);
        return c.groupId === n.groupId && (u ? u.getIndexOfEditor(c.editor) : -1) === n.editorIndex;
      }) ? a.map(r) : [n];
    }
  }
  return d ? [d] : [];
}
function qo() {
  Mo(), Fo(), No(), Lo(), xo(), Uo(), zo(), Ho(), Ko(), Vo(), Bo(), Wo();
}
class M extends y {
  constructor(e, t, i) {
    super(e), this.commandId = t, this.commandArgs = i;
  }
  run(e) {
    return e.get(Y).executeCommand(this.commandId, this.commandArgs);
  }
}
class jo extends y {
  getDirection(e) {
    return gt(e);
  }
  async run(e, t) {
    const i = e.get(f), r = e.get(O);
    mi(i, this.getDirection(r), t);
  }
}
class Fe extends jo {
  constructor() {
    super({
      id: Fe.ID,
      title: { value: h("splitEditor", "Split Editor"), original: "Split Editor" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 2136
      },
      category: E.View
    });
  }
}
Fe.ID = "workbench.action.splitEditor";
class Qo extends M {
  constructor() {
    super({
      id: it,
      title: { value: h("splitEditorGroupUp", "Split Editor Up"), original: "Split Editor Up" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: k(2089, 2136)
      },
      category: E.View
    }, it);
  }
}
Qo.LABEL = h("splitEditorGroupUp", "Split Editor Up");
class $o extends M {
  constructor() {
    super({
      id: rt,
      title: { value: h("splitEditorGroupDown", "Split Editor Down"), original: "Split Editor Down" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: k(2089, 2136)
      },
      category: E.View
    }, rt);
  }
}
$o.LABEL = h("splitEditorGroupDown", "Split Editor Down");
let De = class extends pt {
  constructor(e, t, i) {
    super(e, t, ae.asClassName(L.close)), this.commandService = i;
  }
  run(e) {
    return this.commandService.executeCommand(ui, void 0, e);
  }
};
De.ID = "workbench.action.closeActiveEditor";
De.LABEL = h("closeEditor", "Close Editor");
De = C([
  l(2, Y)
], De);
let Ae = class extends pt {
  constructor(e, t, i) {
    super(e, t, ae.asClassName(L.pinned)), this.commandService = i;
  }
  run(e) {
    return this.commandService.executeCommand(hi, void 0, e);
  }
};
Ae.ID = "workbench.action.unpinActiveEditor";
Ae.LABEL = h("unpinEditor", "Unpin Editor");
Ae = C([
  l(2, Y)
], Ae);
let _e = class extends pt {
  constructor(e, t, i) {
    super(e, t, ae.asClassName(L.close)), this.editorGroupService = i;
  }
  async run(e) {
    let t, i;
    if (e && (t = this.editorGroupService.getGroup(e.groupId), t && (i = e.editorIndex)), t || (t = this.editorGroupService.activeGroup), typeof i == "number") {
      const r = t.getEditorByIndex(i);
      if (r) {
        await t.closeEditor(r, { preserveFocus: e == null ? void 0 : e.preserveFocus });
        return;
      }
    }
    if (t.activeEditor) {
      await t.closeEditor(t.activeEditor, { preserveFocus: e == null ? void 0 : e.preserveFocus });
      return;
    }
  }
};
_e.ID = "workbench.action.closeActiveEditor";
_e.LABEL = h("closeOneEditor", "Close");
_e = C([
  l(2, f)
], _e);
class Xo extends y {
  groupsToClose(e) {
    const t = [], i = e.getGroups(2);
    for (let r = i.length - 1; r >= 0; r--)
      t.push(i[r]);
    return t;
  }
  async run(e) {
    var u, g, m, w;
    const t = e.get(S), i = e.get(f), r = e.get(oi), s = e.get(wr), o = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
    for (const { editor: p, groupId: I } of t.getEditors(1, { excludeSticky: this.excludeSticky })) {
      let D = !1;
      if (p.closeHandler ? D = p.closeHandler.showConfirm() : D = p.isDirty() && !p.isSaving(), !!D)
        if (typeof ((u = p.closeHandler) == null ? void 0 : u.confirm) == "function") {
          let H = c.get(p.typeId);
          H || (H = /* @__PURE__ */ new Set(), c.set(p.typeId, H)), H.add({ editor: p, groupId: I });
        } else
          r.getAutoSaveMode() === 3 && !p.hasCapability(4) ? n.add({ editor: p, groupId: I }) : Cr && (Ir || br) && r.getAutoSaveMode() === 4 && !p.hasCapability(4) ? a.add({ editor: p, groupId: I }) : o.add({ editor: p, groupId: I });
    }
    if (o.size > 0) {
      const p = Array.from(o.values());
      switch (await this.revealEditorsToConfirm(p, i), await s.showSaveConfirm(p.map(({ editor: D }) => D instanceof ie ? D.primary.getName() : D.getName()))) {
        case 2:
          return;
        case 1:
          await t.revert(p, { soft: !0 });
          break;
        case 0:
          await t.save(p, { reason: 1 });
          break;
      }
    }
    for (const [, p] of c) {
      const I = Array.from(p.values());
      await this.revealEditorsToConfirm(I, i);
      const D = await ((w = (m = (g = Dr(I)) == null ? void 0 : g.editor.closeHandler) == null ? void 0 : m.confirm) == null ? void 0 : w.call(m, I));
      if (typeof D == "number")
        switch (D) {
          case 2:
            return;
          case 1:
            await t.revert(I, { soft: !0 });
            break;
          case 0:
            await t.save(I, { reason: 1 });
            break;
        }
    }
    if (n.size > 0) {
      const p = Array.from(n.values());
      await t.save(p, { reason: 3 });
    }
    if (a.size > 0) {
      const p = Array.from(a.values());
      await t.save(p, { reason: 4 });
    }
    return this.doCloseAll(i);
  }
  async revealEditorsToConfirm(e, t) {
    try {
      const i = /* @__PURE__ */ new Set();
      for (const { editor: r, groupId: s } of e) {
        if (i.has(s))
          continue;
        i.add(s);
        const o = t.getGroup(s);
        await (o == null ? void 0 : o.openEditor(r));
      }
    } catch {
    }
  }
  async doCloseAll(e) {
    await Promise.all(this.groupsToClose(e).map((t) => t.closeAllEditors({ excludeSticky: this.excludeSticky })));
  }
}
class fe extends Xo {
  constructor() {
    super({
      id: fe.ID,
      title: fe.LABEL,
      f1: !0,
      keybinding: {
        weight: 200,
        primary: k(2089, 2101)
      },
      icon: L.closeAll,
      category: E.View
    });
  }
  get excludeSticky() {
    return !0;
  }
}
fe.ID = "workbench.action.closeAllEditors";
fe.LABEL = { value: h("closeAllEditors", "Close All Editors"), original: "Close All Editors" };
class Ne extends y {
  constructor() {
    super({
      id: Ne.ID,
      title: { value: h("navigateForward", "Go Forward"), original: "Go Forward", mnemonicTitle: h({ key: "miForward", comment: ["&& denotes a mnemonic"] }, "&&Forward") },
      f1: !0,
      icon: L.arrowRight,
      precondition: R.has("canNavigateForward"),
      keybinding: {
        weight: 200,
        win: { primary: 529 },
        mac: { primary: 1363 },
        linux: { primary: 3155 }
      },
      menu: [
        { id: de.MenubarGoMenu, group: "1_history_nav", order: 2 },
        { id: de.CommandCenter, order: 2 }
      ]
    });
  }
  async run(e) {
    await e.get(Me).goForward(0);
  }
}
Ne.ID = "workbench.action.navigateForward";
Ne.LABEL = h("navigateForward", "Go Forward");
class Le extends y {
  constructor() {
    super({
      id: Le.ID,
      title: { value: h("navigateBack", "Go Back"), original: "Go Back", mnemonicTitle: h({ key: "miBack", comment: ["&& denotes a mnemonic"] }, "&&Back") },
      f1: !0,
      precondition: R.has("canNavigateBack"),
      icon: L.arrowLeft,
      keybinding: {
        weight: 200,
        win: { primary: 527 },
        mac: { primary: 339 },
        linux: { primary: 2643 }
      },
      menu: [
        { id: de.MenubarGoMenu, group: "1_history_nav", order: 1 },
        { id: de.CommandCenter, order: 1 }
      ]
    });
  }
  async run(e) {
    await e.get(Me).goBack(0);
  }
}
Le.ID = "workbench.action.navigateBack";
Le.LABEL = h("navigateBack", "Go Back");
class mt extends y {
  constructor() {
    super({
      id: mt.ID,
      title: { value: h("reopenClosedEditor", "Reopen Closed Editor"), original: "Reopen Closed Editor" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 3122
      },
      category: E.View
    });
  }
  async run(e) {
    await e.get(Me).reopenLastClosedEditor();
  }
}
mt.ID = "workbench.action.reopenClosedEditor";
class vt extends y {
  constructor() {
    super({
      id: vt.ID,
      title: { value: h("clearRecentFiles", "Clear Recently Opened"), original: "Clear Recently Opened" },
      f1: !0,
      category: E.File
    });
  }
  async run(e) {
    const t = e.get(vr), i = e.get(Sr), r = e.get(Me), { confirmed: s } = await t.confirm({
      type: "warning",
      message: h(
        "confirmClearRecentsMessage",
        "Do you want to clear all recently opened files and workspaces?"
      ),
      detail: h("confirmClearDetail", "This action is irreversible!"),
      primaryButton: h({ key: "clearButtonLabel", comment: ["&& denotes a mnemonic"] }, "&&Clear")
    });
    s && (i.clearRecentlyOpened(), r.clearRecentlyOpened());
  }
}
vt.ID = "workbench.action.clearRecentFiles";
class xe extends y {
  constructor() {
    super({
      id: xe.ID,
      title: { value: h(
        "showEditorsInActiveGroup",
        "Show Editors in Active Group By Most Recently Used"
      ), original: "Show Editors in Active Group By Most Recently Used" },
      f1: !0,
      category: E.View
    });
  }
  async run(e) {
    e.get(le).quickAccess.show(X.PREFIX);
  }
}
xe.ID = "workbench.action.showEditorsInActiveGroup";
class Ve extends y {
  constructor() {
    super({
      id: Ve.ID,
      title: { value: h("showAllEditors", "Show All Editors By Appearance"), original: "Show All Editors By Appearance" },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: k(2089, 2094),
        mac: {
          primary: 2562
        }
      },
      category: E.File
    });
  }
  async run(e) {
    e.get(le).quickAccess.show(ce.PREFIX);
  }
}
Ve.ID = "workbench.action.showAllEditors";
class Be extends y {
  constructor() {
    super({
      id: Be.ID,
      title: { value: h(
        "showAllEditorsByMostRecentlyUsed",
        "Show All Editors By Most Recently Used"
      ), original: "Show All Editors By Most Recently Used" },
      f1: !0,
      category: E.View
    });
  }
  async run(e) {
    e.get(le).quickAccess.show(ue.PREFIX);
  }
}
Be.ID = "workbench.action.showAllEditorsByMostRecentlyUsed";
class Te extends y {
  constructor() {
    super({
      id: Te.ID,
      title: { value: h("navigateEditorHistoryByInput", "Quick Open Previous Editor from History"), original: "Quick Open Previous Editor from History" },
      f1: !0
    });
  }
  async run(e) {
    const t = e.get(ft), i = e.get(le), r = e.get(f), s = t.lookupKeybindings(Te.ID);
    let o;
    r.activeGroup.count === 0 && (o = yr.FIRST), i.quickAccess.show("", { quickNavigateConfiguration: { keybindings: s }, itemActivation: o });
  }
}
Te.ID = "workbench.action.openPreviousEditorFromHistory";
class vi extends M {
  constructor() {
    super({
      id: "workbench.action.splitEditorToLeftGroup",
      title: { value: h("splitEditorToLeftGroup", "Split Editor into Left Group"), original: "Split Editor into Left Group" },
      f1: !0,
      category: E.View
    }, li, { to: "left", by: "group" });
  }
}
vi.ID = "workbench.action.splitEditorToLeftGroup";
vi.LABEL = h("splitEditorToLeftGroup", "Split Editor into Left Group");
class St extends M {
  constructor() {
    super({
      id: St.ID,
      title: { value: h("editorLayoutSingle", "Single Column Editor Layout"), original: "Single Column Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}] });
  }
}
St.ID = "workbench.action.editorLayoutSingle";
class yt extends M {
  constructor() {
    super({
      id: yt.ID,
      title: { value: h("editorLayoutTwoColumns", "Two Columns Editor Layout"), original: "Two Columns Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, {}], orientation: 0 });
  }
}
yt.ID = "workbench.action.editorLayoutTwoColumns";
class wt extends M {
  constructor() {
    super({
      id: wt.ID,
      title: { value: h("editorLayoutThreeColumns", "Three Columns Editor Layout"), original: "Three Columns Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, {}, {}], orientation: 0 });
  }
}
wt.ID = "workbench.action.editorLayoutThreeColumns";
class Ct extends M {
  constructor() {
    super({
      id: Ct.ID,
      title: { value: h("editorLayoutTwoRows", "Two Rows Editor Layout"), original: "Two Rows Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, {}], orientation: 1 });
  }
}
Ct.ID = "workbench.action.editorLayoutTwoRows";
class It extends M {
  constructor() {
    super({
      id: It.ID,
      title: { value: h("editorLayoutThreeRows", "Three Rows Editor Layout"), original: "Three Rows Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, {}, {}], orientation: 1 });
  }
}
It.ID = "workbench.action.editorLayoutThreeRows";
class bt extends M {
  constructor() {
    super({
      id: bt.ID,
      title: { value: h("editorLayoutTwoByTwoGrid", "Grid Editor Layout (2x2)"), original: "Grid Editor Layout (2x2)" },
      f1: !0,
      category: E.View
    }, W, { groups: [{ groups: [{}, {}] }, { groups: [{}, {}] }] });
  }
}
bt.ID = "workbench.action.editorLayoutTwoByTwoGrid";
class Dt extends M {
  constructor() {
    super({
      id: Dt.ID,
      title: { value: h("editorLayoutTwoColumnsBottom", "Two Columns Bottom Editor Layout"), original: "Two Columns Bottom Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, { groups: [{}, {}] }], orientation: 1 });
  }
}
Dt.ID = "workbench.action.editorLayoutTwoColumnsBottom";
class At extends M {
  constructor() {
    super({
      id: At.ID,
      title: { value: h("editorLayoutTwoRowsRight", "Two Rows Right Editor Layout"), original: "Two Rows Right Editor Layout" },
      f1: !0,
      category: E.View
    }, W, { groups: [{}, { groups: [{}, {}] }], orientation: 0 });
  }
}
At.ID = "workbench.action.editorLayoutTwoRowsRight";
const Jo = "inQuickOpen", Zo = R.has(Jo);
function Si(d, e) {
  return (t) => {
    const i = t.get(ft), r = t.get(le), o = { keybindings: i.lookupKeybindings(d) };
    r.navigate(!!e, o);
  };
}
let Re = class ot extends B {
  constructor(e) {
    super(), this.editorService = e, this._onHighlightRemoved = this._register(new U()), this.onHighlightRemoved = this._onHighlightRemoved.event, this.rangeHighlightDecorationId = null, this.editor = null, this.editorDisposables = this._register(new ne());
  }
  removeHighlightRange() {
    if (this.editor && this.rangeHighlightDecorationId) {
      const e = this.rangeHighlightDecorationId;
      this.editor.changeDecorations((t) => {
        t.removeDecoration(e);
      }), this._onHighlightRemoved.fire();
    }
    this.rangeHighlightDecorationId = null;
  }
  highlightRange(e, t) {
    t = t ?? this.getEditor(e), j(t) ? this.doHighlightRange(t, e) : qe(t) && j(t.activeCodeEditor) && this.doHighlightRange(t.activeCodeEditor, e);
  }
  doHighlightRange(e, t) {
    this.removeHighlightRange(), e.changeDecorations((i) => {
      this.rangeHighlightDecorationId = i.addDecoration(t.range, this.createRangeHighlightDecoration(t.isWholeLine));
    }), this.setEditor(e);
  }
  getEditor(e) {
    var i;
    const t = (i = this.editorService.activeEditor) == null ? void 0 : i.resource;
    if (t && se(t, e.resource) && j(this.editorService.activeTextEditorControl))
      return this.editorService.activeTextEditorControl;
  }
  setEditor(e) {
    this.editor !== e && (this.editorDisposables.clear(), this.editor = e, this.editorDisposables.add(this.editor.onDidChangeCursorPosition((t) => {
      (t.reason === 0 || t.reason === 3 || t.reason === 5 || t.reason === 6) && this.removeHighlightRange();
    })), this.editorDisposables.add(this.editor.onDidChangeModel(() => {
      this.removeHighlightRange();
    })), this.editorDisposables.add(this.editor.onDidDispose(() => {
      this.removeHighlightRange(), this.editor = null;
    })));
  }
  createRangeHighlightDecoration(e = !0) {
    return e ? ot._WHOLE_LINE_RANGE_HIGHLIGHT : ot._RANGE_HIGHLIGHT;
  }
  dispose() {
    var e;
    super.dispose(), (e = this.editor) != null && e.getModel() && (this.removeHighlightRange(), this.editor = null);
  }
};
Re._WHOLE_LINE_RANGE_HIGHLIGHT = si.register({
  description: "codeeditor-range-highlight-whole",
  stickiness: 1,
  className: "rangeHighlight",
  isWholeLine: !0
});
Re._RANGE_HIGHLIGHT = si.register({
  description: "codeeditor-range-highlight",
  stickiness: 1,
  className: "rangeHighlight"
});
Re = C([
  l(0, S)
], Re);
let st = class extends _r {
  constructor(e, t, i, r) {
    if (super(), this.editor = e, this.label = t, this._onClick = this._register(new U()), this.onClick = this._onClick.event, this._domNode = Ce(".floating-click-widget"), this._domNode.style.padding = "6px 11px", this._domNode.style.borderRadius = "2px", this._domNode.style.cursor = "pointer", i) {
      const s = r.lookupKeybinding(i);
      s && (this.label += ` (${s.getLabel()})`);
    }
  }
  getId() {
    return "editor.overlayWidget.floatingClickWidget";
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return {
      preference: 1
    };
  }
  render() {
    je(this._domNode), this._domNode.style.backgroundColor = xt(Rr, Ke(Tr)), this._domNode.style.color = xt(kr, Ke(Gr)), this._domNode.style.border = `1px solid ${Ke(Or)}`, Pr(this._domNode, Ce("")).textContent = this.label, this.onclick(this._domNode, (e) => this._onClick.fire()), this.editor.addOverlayWidget(this);
  }
  dispose() {
    this.editor.removeOverlayWidget(this), super.dispose();
  }
};
st = C([
  l(3, ft)
], st);
let Ee = class extends B {
  constructor(e, t, i, r) {
    if (super(), !(e instanceof Mr)) {
      const s = i.createMenu(de.EditorContent, r), o = new ne(), n = () => {
        if (o.clear(), !e.hasModel() || e.getOption(59))
          return;
        const a = [];
        if (Fr(s, { renderShortTitle: !0, shouldForwardArgs: !0 }, a), a.length === 0)
          return;
        const [c] = a, u = t.createInstance(st, e, c.label, c.id);
        o.add(u), o.add(u.onClick(() => c.run(e.getModel().uri))), u.render();
      };
      this._store.add(s), this._store.add(o), this._store.add(s.onDidChange(n)), n();
    }
  }
};
Ee.ID = "editor.contrib.floatingClickMenu";
Ee = C([
  l(1, Z),
  l(2, Ar),
  l(3, ei)
], Ee);
let nt = class extends B {
  constructor(e, t, i, r, s, o) {
    super(), this.filesConfigurationService = e, this.hostService = t, this.editorService = i, this.editorGroupService = r, this.workingCopyService = s, this.logService = o, this.pendingAutoSavesAfterDelay = /* @__PURE__ */ new Map(), this.lastActiveEditor = void 0, this.lastActiveGroupId = void 0, this.lastActiveEditorControlDisposable = this._register(new ne()), this.onAutoSaveConfigurationChange(e.getAutoSaveConfiguration(), !1);
    for (const n of this.workingCopyService.dirtyWorkingCopies)
      this.onDidRegister(n);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.hostService.onDidChangeFocus((e) => this.onWindowFocusChange(e))), this._register(this.editorService.onDidActiveEditorChange(() => this.onDidActiveEditorChange())), this._register(this.filesConfigurationService.onAutoSaveConfigurationChange((e) => this.onAutoSaveConfigurationChange(e, !0))), this._register(this.workingCopyService.onDidRegister((e) => this.onDidRegister(e))), this._register(this.workingCopyService.onDidUnregister((e) => this.onDidUnregister(e))), this._register(this.workingCopyService.onDidChangeDirty((e) => this.onDidChangeDirty(e))), this._register(this.workingCopyService.onDidChangeContent((e) => this.onDidChangeContent(e)));
  }
  onWindowFocusChange(e) {
    e || this.maybeTriggerAutoSave(4);
  }
  onDidActiveEditorChange() {
    this.lastActiveEditor && typeof this.lastActiveGroupId == "number" && this.maybeTriggerAutoSave(3, { groupId: this.lastActiveGroupId, editor: this.lastActiveEditor });
    const e = this.editorGroupService.activeGroup, t = this.lastActiveEditor = ge(e.activeEditor);
    this.lastActiveGroupId = e.id, this.lastActiveEditorControlDisposable.clear();
    const i = this.editorService.activeEditorPane;
    t && i && this.lastActiveEditorControlDisposable.add(i.onDidBlur(() => {
      this.maybeTriggerAutoSave(3, { groupId: e.id, editor: t });
    }));
  }
  maybeTriggerAutoSave(e, t) {
    if (t != null && t.editor.hasCapability(2) || t != null && t.editor.hasCapability(4))
      return;
    const i = this.filesConfigurationService.getAutoSaveMode();
    (e === 4 && (i === 3 || i === 4) || e === 3 && i === 3) && (this.logService.trace(`[editor auto save] triggering auto save with reason ${e}`), t ? this.editorService.save(t, { reason: e }) : this.saveAllDirty({ reason: e }));
  }
  onAutoSaveConfigurationChange(e, t) {
    if (this.autoSaveAfterDelay = typeof e.autoSaveDelay == "number" && e.autoSaveDelay >= 0 ? e.autoSaveDelay : void 0, t) {
      let i;
      switch (this.filesConfigurationService.getAutoSaveMode()) {
        case 3:
          i = 3;
          break;
        case 4:
          i = 4;
          break;
        case 1:
        case 2:
          i = 2;
          break;
      }
      i && this.saveAllDirty({ reason: i });
    }
  }
  saveAllDirty(e) {
    for (const t of this.workingCopyService.dirtyWorkingCopies)
      t.capabilities & 2 || t.save(e);
  }
  onDidRegister(e) {
    e.isDirty() && this.scheduleAutoSave(e);
  }
  onDidUnregister(e) {
    this.discardAutoSave(e);
  }
  onDidChangeDirty(e) {
    e.isDirty() ? this.scheduleAutoSave(e) : this.discardAutoSave(e);
  }
  onDidChangeContent(e) {
    e.isDirty() && this.scheduleAutoSave(e);
  }
  scheduleAutoSave(e) {
    if (typeof this.autoSaveAfterDelay != "number" || e.capabilities & 2)
      return;
    this.discardAutoSave(e), this.logService.trace(`[editor auto save] scheduling auto save after ${this.autoSaveAfterDelay}ms`, e.resource.toString(), e.typeId);
    const t = setTimeout(() => {
      this.pendingAutoSavesAfterDelay.delete(e), e.isDirty() && (this.logService.trace("[editor auto save] running auto save", e.resource.toString(), e.typeId), e.save({ reason: 2 }));
    }, this.autoSaveAfterDelay);
    this.pendingAutoSavesAfterDelay.set(e, Jt(() => {
      this.logService.trace("[editor auto save] clearing pending auto save", e.resource.toString(), e.typeId), clearTimeout(t);
    }));
  }
  discardAutoSave(e) {
    Xt(this.pendingAutoSavesAfterDelay.get(e)), this.pendingAutoSavesAfterDelay.delete(e);
  }
};
nt = C([
  l(0, oi),
  l(1, Nr),
  l(2, S),
  l(3, f),
  l(4, Lr),
  l(5, xr)
], nt);
Oe.as(Vr.Workbench).registerWorkbenchContribution(nt, 2);
Br(Ee.ID, Ee, 1);
const _t = Oe.as(Ur.Quickaccess), Ue = "inEditorsPicker", yi = R.and(Zo, R.has(Ue));
_t.registerQuickAccessProvider({
  ctor: X,
  prefix: X.PREFIX,
  contextKey: Ue,
  placeholder: h("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: h(
    "activeGroupEditorsByMostRecentlyUsedQuickAccess",
    "Show Editors in Active Group by Most Recently Used"
  ), commandId: xe.ID }]
});
_t.registerQuickAccessProvider({
  ctor: ce,
  prefix: ce.PREFIX,
  contextKey: Ue,
  placeholder: h("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: h(
    "allEditorsByAppearanceQuickAccess",
    "Show All Opened Editors By Appearance"
  ), commandId: Ve.ID }]
});
_t.registerQuickAccessProvider({
  ctor: ue,
  prefix: ue.PREFIX,
  contextKey: Ue,
  placeholder: h("editorQuickAccessPlaceholder", "Type the name of an editor to open it."),
  helpEntries: [{ description: h(
    "allEditorsByMostRecentlyUsedQuickAccess",
    "Show All Opened Editors By Most Recently Used"
  ), commandId: Be.ID }]
});
const jt = "workbench.action.quickOpenNavigateNextInEditorPicker";
v.registerCommandAndKeybindingRule({
  id: jt,
  weight: 200 + 50,
  handler: Si(jt, !0),
  when: yi,
  primary: 2050,
  mac: { primary: 258 }
});
const Qt = "workbench.action.quickOpenNavigatePreviousInEditorPicker";
v.registerCommandAndKeybindingRule({
  id: Qt,
  weight: 200 + 50,
  handler: Si(Qt, !1),
  when: yi,
  primary: 3074,
  mac: { primary: 1282 }
});
qo();
Fe.ID, h("splitEditorRight", "Split Editor Right"), L.splitHorizontal, R.not("splitEditorsVertically");
const es = Wr("diff-editor-toggle-whitespace", L.whitespace, h(
  "toggleWhitespace",
  "Icon for the toggle whitespace action in the diff editor."
));
h("showTrimWhitespace.label", "Show Leading/Trailing Whitespace Differences"), ae.modify(es, "disabled");
class ts {
  constructor(e) {
    this.editor = e, this.onDidChangeControl = b.None, this.onDidChangeSizeConstraints = b.None, this.onDidFocus = b.None, this.onDidBlur = b.None, this.input = void 0, this.options = void 0, this.group = void 0, this.scopedContextKeyService = void 0, this.getViewState = G, this.isVisible = G, this.hasFocus = G, this.getId = G, this.getTitle = G, this.focus = G;
  }
  get minimumWidth() {
    return z.width;
  }
  get maximumWidth() {
    return be.width;
  }
  get minimumHeight() {
    return z.height;
  }
  get maximumHeight() {
    return be.height;
  }
  getControl() {
    return this.editor;
  }
}
let at = class extends B {
  constructor(e, t) {
    super(), this._openEditor = e, this.textModelService = t, this._onDidActiveEditorChange = this._register(new U()), this.onDidActiveEditorChange = this._onDidActiveEditorChange.event, this.onDidVisibleEditorsChange = b.None, this.onDidEditorsChange = b.None, this.onDidCloseEditor = b.None, this.activeTextEditorLanguageId = void 0, this.visibleEditorPanes = [], this.visibleEditors = [], this.visibleTextEditorControls = [], this.editors = [], this.count = 0, this.getEditors = () => [], this.openEditors = G, this.replaceEditors = G, this.isOpened = () => !1, this.isVisible = () => !1, this.findEditors = () => [], this.save = async () => !0, this.saveAll = async () => !0, this.revert = G, this.revertAll = G, this.closeEditor = G, this.closeEditors = G, setTimeout(() => {
      const i = Vt.get($e);
      this.activeTextEditorControl = i.getFocusedCodeEditor() ?? void 0;
      const r = (s) => {
        const o = () => {
          const n = i.getFocusedCodeEditor();
          n !== this.activeTextEditorControl && (this.activeTextEditorControl = n ?? void 0, this._onDidActiveEditorChange.fire());
        };
        s.onDidFocusEditorText(o), s.onDidFocusEditorWidget(o);
      };
      this._register(i.onCodeEditorAdd(r)), i.listCodeEditors().forEach(r);
    });
  }
  async openEditor(e, t, i) {
    const r = te(e) ? t : e.options;
    zr(t) && (i = t);
    const s = Yr(e) || te(e) ? e.resource : void 0;
    if (s == null)
      throw new Error("Diff editors not supported");
    let o;
    const n = await this.textModelService.createModelReference(s);
    if (o = Vt.get($e).listCodeEditors().find((c) => c.getModel() === n.object.textEditorModel), o == null && (o = await this._openEditor(n, r, i === ut)), o == null) {
      n.dispose();
      return;
    }
    return r != null && Ie(r, o, 1), o.focus(), new ts(o);
  }
};
at = C([
  l(1, dt)
], at);
function ms(d) {
  return {
    [dt.toString()]: new me(Ze, void 0, !0),
    [$e.toString()]: new me(et, void 0, !0),
    [S.toString()]: new me(at, [d]),
    [Hr.toString()]: new me(Kr)
  };
}
export {
  ms as default
};

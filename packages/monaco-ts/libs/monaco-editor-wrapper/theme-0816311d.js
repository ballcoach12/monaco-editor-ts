import { gF as n, N as e, _ as ie, a as E, K as ae, g as ne, a8 as se, I as de, L as he, v as V, h$ as ce, cZ as le, aU as ue, S as ge, h2 as t, bn as s, cS as r, i0 as i, br as o, i1 as z, i2 as Z, i3 as l, i4 as u, bp as I, hk as W, i5 as _, i6 as D, i7 as A, hc as g, i8 as Y, he as j, hd as v, hi as q, hY as K, i9 as S, ia as be, ib as C } from "./verifyPrepare-e26a1ce7.js";
const fe = new n("activeEditorIsPinned", !1, e("activeEditorIsPinned", "Whether the active editor is pinned")), ke = new n("activeEditorCanSplitInGroup", !0), we = new n("textCompareEditorVisible", !1, e("textCompareEditorVisible", "Whether a text compare editor is visible")), Be = new n("textCompareEditorActive", !1, e("textCompareEditorActive", "Whether a text compare editor is active")), me = new n("sideBySideEditorActive", !1, e("sideBySideEditorActive", "Whether a side by side editor is active")), ve = new n("activeEditorGroupEmpty", !1, e("activeEditorGroupEmpty", "Whether the active editor group is empty")), Te = new n("activeEditorGroupLocked", !1, e("activeEditorGroupLocked", "Whether the active editor group is locked")), De = new n("multipleEditorGroups", !1, e("multipleEditorGroups", "Whether there are multiple editor groups opened")), Fe = new n("notificationFocus", !0, e("notificationFocus", "Whether a notification has keyboard focus")), Le = new n("notificationCenterVisible", !1, e("notificationCenterVisible", "Whether the notifications center is visible")), Ie = new n("notificationToastsVisible", !1, e("notificationToastsVisible", "Whether a notification toast is visible")), ye = new n("panelFocus", !1, e("panelFocus", "Whether the panel has keyboard focus"));
let h = class c {
  constructor(a, L, y, U) {
    this._contextKeyService = a, this._fileService = L, this._languageService = y, this._modelService = U, this._disposables = new he(), this._schemeKey = c.Scheme.bindTo(this._contextKeyService), this._filenameKey = c.Filename.bindTo(this._contextKeyService), this._dirnameKey = c.Dirname.bindTo(this._contextKeyService), this._pathKey = c.Path.bindTo(this._contextKeyService), this._langIdKey = c.LangId.bindTo(this._contextKeyService), this._resourceKey = c.Resource.bindTo(this._contextKeyService), this._extensionKey = c.Extension.bindTo(this._contextKeyService), this._hasResource = c.HasResource.bindTo(this._contextKeyService), this._isFileSystemResource = c.IsFileSystemResource.bindTo(this._contextKeyService), this._disposables.add(L.onDidChangeFileSystemProviderRegistrations(() => {
      const m = this.get();
      this._isFileSystemResource.set(!!(m && L.hasProvider(m)));
    })), this._disposables.add(U.onModelAdded((m) => {
      V(m.uri, this.get()) && this._setLangId();
    })), this._disposables.add(U.onModelLanguageChanged((m) => {
      V(m.model.uri, this.get()) && this._setLangId();
    }));
  }
  dispose() {
    this._disposables.dispose();
  }
  _setLangId() {
    var y;
    const a = this.get();
    if (!a) {
      this._langIdKey.set(null);
      return;
    }
    const L = ((y = this._modelService.getModel(a)) == null ? void 0 : y.getLanguageId()) ?? this._languageService.guessLanguageIdByFilepathOrFirstLine(a);
    this._langIdKey.set(L);
  }
  set(a) {
    a = a ?? void 0, !V(this._value, a) && (this._value = a, this._contextKeyService.bufferChangeEvents(() => {
      this._resourceKey.set(a ? a.toString() : null), this._schemeKey.set(a ? a.scheme : null), this._filenameKey.set(a ? ce(a) : null), this._dirnameKey.set(a ? this.uriToPath(le(a)) : null), this._pathKey.set(a ? this.uriToPath(a) : null), this._setLangId(), this._extensionKey.set(a ? ue(a) : null), this._hasResource.set(!!a), this._isFileSystemResource.set(a ? this._fileService.hasProvider(a) : !1);
    }));
  }
  uriToPath(a) {
    return a.scheme === ge.file ? a.fsPath : a.path;
  }
  reset() {
    this._value = void 0, this._contextKeyService.bufferChangeEvents(() => {
      this._resourceKey.reset(), this._schemeKey.reset(), this._filenameKey.reset(), this._dirnameKey.reset(), this._pathKey.reset(), this._langIdKey.reset(), this._extensionKey.reset(), this._hasResource.reset(), this._isFileSystemResource.reset();
    });
  }
  get() {
    return this._value;
  }
};
h.Scheme = new n("resourceScheme", void 0, { type: "string", description: e("resourceScheme", "The scheme of the resource") });
h.Filename = new n(
  "resourceFilename",
  void 0,
  { type: "string", description: e("resourceFilename", "The file name of the resource") }
);
h.Dirname = new n(
  "resourceDirname",
  void 0,
  { type: "string", description: e("resourceDirname", "The folder name the resource is contained in") }
);
h.Path = new n("resourcePath", void 0, { type: "string", description: e("resourcePath", "The full path of the resource") });
h.LangId = new n("resourceLangId", void 0, { type: "string", description: e("resourceLangId", "The language identifier of the resource") });
h.Resource = new n("resource", void 0, { type: "URI", description: e("resource", "The full value of the resource including scheme and path") });
h.Extension = new n(
  "resourceExtname",
  void 0,
  { type: "string", description: e("resourceExtname", "The extension name of the resource") }
);
h.HasResource = new n("resourceSet", void 0, { type: "boolean", description: e("resourceSet", "Whether a resource is present or not") });
h.IsFileSystemResource = new n(
  "isFileSystemResource",
  void 0,
  { type: "boolean", description: e(
    "isFileSystemResource",
    "Whether the resource is backed by a file system provider"
  ) }
);
h = ie([
  E(0, ae),
  E(1, ne),
  E(2, se),
  E(3, de)
], h);
const R = t("tab.activeBackground", {
  dark: s,
  light: s,
  hcDark: s,
  hcLight: s
}, e(
  "tabActiveBackground",
  "Active tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedActiveBackground", {
  dark: R,
  light: R,
  hcDark: R,
  hcLight: R
}, e(
  "tabUnfocusedActiveBackground",
  "Active tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const x = t("tab.inactiveBackground", {
  dark: "#2D2D2D",
  light: "#ECECEC",
  hcDark: null,
  hcLight: null
}, e(
  "tabInactiveBackground",
  "Inactive tab background color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedInactiveBackground", {
  dark: x,
  light: x,
  hcDark: x,
  hcLight: x
}, e(
  "tabUnfocusedInactiveBackground",
  "Inactive tab background color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const G = t("tab.activeForeground", {
  dark: r.white,
  light: "#333333",
  hcDark: r.white,
  hcLight: "#292929"
}, e(
  "tabActiveForeground",
  "Active tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
)), $ = t("tab.inactiveForeground", {
  dark: i(G, 0.5),
  light: i(G, 0.7),
  hcDark: r.white,
  hcLight: "#292929"
}, e(
  "tabInactiveForeground",
  "Inactive tab foreground color in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedActiveForeground", {
  dark: i(G, 0.5),
  light: i(G, 0.7),
  hcDark: r.white,
  hcLight: "#292929"
}, e(
  "tabUnfocusedActiveForeground",
  "Active tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedInactiveForeground", {
  dark: i($, 0.5),
  light: i($, 0.5),
  hcDark: r.white,
  hcLight: "#292929"
}, e(
  "tabUnfocusedInactiveForeground",
  "Inactive tab foreground color in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const J = t("tab.hoverBackground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "tabHoverBackground",
  "Tab background color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedHoverBackground", {
  dark: i(J, 0.5),
  light: i(J, 0.7),
  hcDark: null,
  hcLight: null
}, e(
  "tabUnfocusedHoverBackground",
  "Tab background color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const Q = t("tab.hoverForeground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "tabHoverForeground",
  "Tab foreground color when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedHoverForeground", {
  dark: i(Q, 0.5),
  light: i(Q, 0.5),
  hcDark: null,
  hcLight: null
}, e(
  "tabUnfocusedHoverForeground",
  "Tab foreground color in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.border", {
  dark: "#252526",
  light: "#F3F3F3",
  hcDark: o,
  hcLight: o
}, e(
  "tabBorder",
  "Border to separate tabs from each other. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.lastPinnedBorder", {
  dark: z,
  light: z,
  hcDark: o,
  hcLight: o
}, e(
  "lastPinnedTabBorder",
  "Border to separate pinned tabs from other tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const X = t("tab.activeBorder", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "tabActiveBorder",
  "Border on the bottom of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedActiveBorder", {
  dark: i(X, 0.5),
  light: i(X, 0.7),
  hcDark: null,
  hcLight: null
}, e(
  "tabActiveUnfocusedBorder",
  "Border on the bottom of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const ee = t("tab.activeBorderTop", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: "#B5200D"
}, e(
  "tabActiveBorderTop",
  "Border to the top of an active tab. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedActiveBorderTop", {
  dark: i(ee, 0.5),
  light: i(ee, 0.7),
  hcDark: null,
  hcLight: "#B5200D"
}, e(
  "tabActiveUnfocusedBorderTop",
  "Border to the top of an active tab in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const te = t("tab.hoverBorder", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "tabHoverBorder",
  "Border to highlight tabs when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedHoverBorder", {
  dark: i(te, 0.5),
  light: i(te, 0.7),
  hcDark: null,
  hcLight: o
}, e(
  "tabUnfocusedHoverBorder",
  "Border to highlight tabs in an unfocused group when hovering. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
const M = t("tab.activeModifiedBorder", {
  dark: "#3399CC",
  light: "#33AAEE",
  hcDark: null,
  hcLight: o
}, e(
  "tabActiveModifiedBorder",
  "Border on the top of modified active tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
)), re = t("tab.inactiveModifiedBorder", {
  dark: i(M, 0.5),
  light: i(M, 0.5),
  hcDark: r.white,
  hcLight: o
}, e(
  "tabInactiveModifiedBorder",
  "Border on the top of modified inactive tabs in an active group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedActiveModifiedBorder", {
  dark: i(M, 0.5),
  light: i(M, 0.7),
  hcDark: r.white,
  hcLight: o
}, e(
  "unfocusedActiveModifiedBorder",
  "Border on the top of modified active tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("tab.unfocusedInactiveModifiedBorder", {
  dark: i(re, 0.5),
  light: i(re, 0.5),
  hcDark: r.white,
  hcLight: o
}, e(
  "unfocusedINactiveModifiedBorder",
  "Border on the top of modified inactive tabs in an unfocused group. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups."
));
t("editorPane.background", {
  dark: s,
  light: s,
  hcDark: s,
  hcLight: s
}, e(
  "editorPaneBackground",
  "Background color of the editor pane visible on the left and right side of the centered editor layout."
));
t("editorGroup.emptyBackground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "editorGroupEmptyBackground",
  "Background color of an empty editor group. Editor groups are the containers of editors."
));
t("editorGroup.focusedEmptyBorder", {
  dark: null,
  light: null,
  hcDark: Z,
  hcLight: Z
}, e(
  "editorGroupFocusedEmptyBorder",
  "Border color of an empty editor group that is focused. Editor groups are the containers of editors."
));
t("editorGroupHeader.tabsBackground", {
  dark: "#252526",
  light: "#F3F3F3",
  hcDark: null,
  hcLight: null
}, e(
  "tabsContainerBackground",
  "Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors."
));
t("editorGroupHeader.tabsBorder", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "tabsContainerBorder",
  "Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors."
));
t("editorGroupHeader.noTabsBackground", {
  dark: s,
  light: s,
  hcDark: s,
  hcLight: s
}, e(
  "editorGroupHeaderBackground",
  'Background color of the editor group title header when tabs are disabled (`"workbench.editor.showTabs": false`). Editor groups are the containers of editors.'
));
t("editorGroupHeader.border", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "editorTitleContainerBorder",
  "Border color of the editor group title header. Editor groups are the containers of editors."
));
const b = t("editorGroup.border", {
  dark: "#444444",
  light: "#E7E7E7",
  hcDark: o,
  hcLight: o
}, e(
  "editorGroupBorder",
  "Color to separate multiple editor groups from each other. Editor groups are the containers of editors."
)), p = t("editorGroup.dropBackground", {
  dark: r.fromHex("#53595D").transparent(0.5),
  light: r.fromHex("#2677CB").transparent(0.18),
  hcDark: null,
  hcLight: r.fromHex("#0F4A85").transparent(0.5)
}, e(
  "editorDragAndDropBackground",
  "Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through."
));
t("editorGroup.dropIntoPromptForeground", {
  dark: l,
  light: l,
  hcDark: l,
  hcLight: l
}, e(
  "editorDropIntoPromptForeground",
  "Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
));
t("editorGroup.dropIntoPromptBackground", {
  dark: u,
  light: u,
  hcDark: u,
  hcLight: u
}, e(
  "editorDropIntoPromptBackground",
  "Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
));
t("editorGroup.dropIntoPromptBorder", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "editorDropIntoPromptBorder",
  "Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor."
));
const Ee = t("sideBySideEditor.horizontalBorder", {
  dark: b,
  light: b,
  hcDark: b,
  hcLight: b
}, e(
  "sideBySideEditor.horizontalBorder",
  "Color to separate two editors from each other when shown side by side in an editor group from top to bottom."
)), _e = t("sideBySideEditor.verticalBorder", {
  dark: b,
  light: b,
  hcDark: b,
  hcLight: b
}, e(
  "sideBySideEditor.verticalBorder",
  "Color to separate two editors from each other when shown side by side in an editor group from left to right."
)), Ae = t("panel.background", {
  dark: s,
  light: s,
  hcDark: s,
  hcLight: s
}, e(
  "panelBackground",
  "Panel background color. Panels are shown below the editor area and contain views like output and integrated terminal."
)), O = t("panel.border", {
  dark: r.fromHex("#808080").transparent(0.35),
  light: r.fromHex("#808080").transparent(0.35),
  hcDark: o,
  hcLight: o
}, e(
  "panelBorder",
  "Panel border color to separate the panel from the editor. Panels are shown below the editor area and contain views like output and integrated terminal."
)), f = t("panelTitle.activeForeground", {
  dark: "#E7E7E7",
  light: "#424242",
  hcDark: r.white,
  hcLight: I
}, e(
  "panelActiveTitleForeground",
  "Title color for the active panel. Panels are shown below the editor area and contain views like output and integrated terminal."
));
t("panelTitle.inactiveForeground", {
  dark: i(f, 0.6),
  light: i(f, 0.75),
  hcDark: r.white,
  hcLight: I
}, e(
  "panelInactiveTitleForeground",
  "Title color for the inactive panel. Panels are shown below the editor area and contain views like output and integrated terminal."
));
t("panelTitle.activeBorder", {
  dark: f,
  light: f,
  hcDark: o,
  hcLight: "#B5200D"
}, e(
  "panelActiveTitleBorder",
  "Border color for the active panel title. Panels are shown below the editor area and contain views like output and integrated terminal."
));
t("panelInput.border", {
  dark: W,
  light: r.fromHex("#ddd"),
  hcDark: W,
  hcLight: W
}, e("panelInputBorder", "Input box border for inputs in the panel."));
t("panel.dropBorder", {
  dark: f,
  light: f,
  hcDark: f,
  hcLight: f
}, e(
  "panelDragAndDropBorder",
  "Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal."
));
t("panelSection.dropBackground", {
  dark: p,
  light: p,
  hcDark: p,
  hcLight: p
}, e(
  "panelSectionDragAndDropBackground",
  "Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."
));
t("panelSectionHeader.background", {
  dark: r.fromHex("#808080").transparent(0.2),
  light: r.fromHex("#808080").transparent(0.2),
  hcDark: null,
  hcLight: null
}, e(
  "panelSectionHeaderBackground",
  "Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."
));
t("panelSectionHeader.foreground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "panelSectionHeaderForeground",
  "Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."
));
t("panelSectionHeader.border", {
  dark: o,
  light: o,
  hcDark: o,
  hcLight: o
}, e(
  "panelSectionHeaderBorder",
  "Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."
));
t("panelSection.border", {
  dark: O,
  light: O,
  hcDark: O,
  hcLight: O
}, e(
  "panelSectionBorder",
  "Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal. Panel sections are views nested within the panels."
));
t("banner.background", {
  dark: _,
  light: D(_, 0.3),
  hcDark: _,
  hcLight: _
}, e(
  "banner.background",
  "Banner background color. The banner is shown under the title bar of the window."
));
t("banner.foreground", {
  dark: A,
  light: A,
  hcDark: A,
  hcLight: A
}, e(
  "banner.foreground",
  "Banner foreground color. The banner is shown under the title bar of the window."
));
t("banner.iconForeground", {
  dark: g,
  light: g,
  hcDark: g,
  hcLight: g
}, e(
  "banner.iconForeground",
  "Banner icon color. The banner is shown under the title bar of the window."
));
const d = t("statusBar.foreground", {
  dark: "#FFFFFF",
  light: "#FFFFFF",
  hcDark: "#FFFFFF",
  hcLight: I
}, e(
  "statusBarForeground",
  "Status bar foreground color when a workspace or folder is opened. The status bar is shown in the bottom of the window."
));
t("statusBar.noFolderForeground", {
  dark: d,
  light: d,
  hcDark: d,
  hcLight: d
}, e(
  "statusBarNoFolderForeground",
  "Status bar foreground color when no folder is opened. The status bar is shown in the bottom of the window."
));
t("statusBar.background", {
  dark: "#007ACC",
  light: "#007ACC",
  hcDark: null,
  hcLight: null
}, e(
  "statusBarBackground",
  "Status bar background color when a workspace or folder is opened. The status bar is shown in the bottom of the window."
));
t("statusBar.noFolderBackground", {
  dark: "#68217A",
  light: "#68217A",
  hcDark: null,
  hcLight: null
}, e(
  "statusBarNoFolderBackground",
  "Status bar background color when no folder is opened. The status bar is shown in the bottom of the window."
));
const N = t("statusBar.border", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "statusBarBorder",
  "Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window."
));
t("statusBar.focusBorder", {
  dark: d,
  light: d,
  hcDark: null,
  hcLight: d
}, e(
  "statusBarFocusBorder",
  "Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."
));
t("statusBar.noFolderBorder", {
  dark: N,
  light: N,
  hcDark: N,
  hcLight: N
}, e(
  "statusBarNoFolderBorder",
  "Status bar border color separating to the sidebar and editor when no folder is opened. The status bar is shown in the bottom of the window."
));
t("statusBarItem.activeBackground", {
  dark: r.white.transparent(0.18),
  light: r.white.transparent(0.18),
  hcDark: r.white.transparent(0.18),
  hcLight: r.black.transparent(0.18)
}, e(
  "statusBarItemActiveBackground",
  "Status bar item background color when clicking. The status bar is shown in the bottom of the window."
));
t("statusBarItem.focusBorder", {
  dark: d,
  light: d,
  hcDark: null,
  hcLight: Y
}, e(
  "statusBarItemFocusBorder",
  "Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window."
));
t("statusBarItem.hoverBackground", {
  dark: r.white.transparent(0.12),
  light: r.white.transparent(0.12),
  hcDark: r.white.transparent(0.12),
  hcLight: r.black.transparent(0.12)
}, e(
  "statusBarItemHoverBackground",
  "Status bar item background color when hovering. The status bar is shown in the bottom of the window."
));
t("statusBarItem.compactHoverBackground", {
  dark: r.white.transparent(0.2),
  light: r.white.transparent(0.2),
  hcDark: r.white.transparent(0.2),
  hcLight: r.black.transparent(0.2)
}, e(
  "statusBarItemCompactHoverBackground",
  "Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window."
));
t("statusBarItem.prominentForeground", {
  dark: d,
  light: d,
  hcDark: d,
  hcLight: d
}, e(
  "statusBarProminentItemForeground",
  "Status bar prominent items foreground color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."
));
t("statusBarItem.prominentBackground", {
  dark: r.black.transparent(0.5),
  light: r.black.transparent(0.5),
  hcDark: r.black.transparent(0.5),
  hcLight: r.black.transparent(0.5)
}, e(
  "statusBarProminentItemBackground",
  "Status bar prominent items background color. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."
));
t("statusBarItem.prominentHoverBackground", {
  dark: r.black.transparent(0.3),
  light: r.black.transparent(0.3),
  hcDark: r.black.transparent(0.3),
  hcLight: null
}, e(
  "statusBarProminentItemHoverBackground",
  "Status bar prominent items background color when hovering. Prominent items stand out from other status bar entries to indicate importance. Change mode `Toggle Tab Key Moves Focus` from command palette to see an example. The status bar is shown in the bottom of the window."
));
t("statusBarItem.errorBackground", {
  dark: D(j, 0.4),
  light: D(j, 0.4),
  hcDark: null,
  hcLight: "#B5200D"
}, e(
  "statusBarErrorItemBackground",
  "Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."
));
t("statusBarItem.errorForeground", {
  dark: r.white,
  light: r.white,
  hcDark: r.white,
  hcLight: r.white
}, e(
  "statusBarErrorItemForeground",
  "Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window."
));
t("statusBarItem.warningBackground", {
  dark: D(v, 0.4),
  light: D(v, 0.4),
  hcDark: null,
  hcLight: "#895503"
}, e(
  "statusBarWarningItemBackground",
  "Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
));
t("statusBarItem.warningForeground", {
  dark: r.white,
  light: r.white,
  hcDark: r.white,
  hcLight: r.white
}, e(
  "statusBarWarningItemForeground",
  "Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window."
));
t("activityBar.background", {
  dark: "#333333",
  light: "#2C2C2C",
  hcDark: "#000000",
  hcLight: "#FFFFFF"
}, e(
  "activityBarBackground",
  "Activity bar background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
const F = t("activityBar.foreground", {
  dark: r.white,
  light: r.white,
  hcDark: r.white,
  hcLight: I
}, e(
  "activityBarForeground",
  "Activity bar item foreground color when it is active. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.inactiveForeground", {
  dark: i(F, 0.4),
  light: i(F, 0.4),
  hcDark: r.white,
  hcLight: I
}, e(
  "activityBarInActiveForeground",
  "Activity bar item foreground color when it is inactive. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.border", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "activityBarBorder",
  "Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.activeBorder", {
  dark: F,
  light: F,
  hcDark: null,
  hcLight: o
}, e(
  "activityBarActiveBorder",
  "Activity bar border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.activeFocusBorder", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: "#B5200D"
}, e(
  "activityBarActiveFocusBorder",
  "Activity bar focus border color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.activeBackground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "activityBarActiveBackground",
  "Activity bar background color for the active item. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("activityBar.dropBorder", {
  dark: F,
  light: F,
  hcDark: null,
  hcLight: null
}, e(
  "activityBarDragAndDropBorder",
  "Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
const k = t("activityBarBadge.background", {
  dark: "#007ACC",
  light: "#007ACC",
  hcDark: "#000000",
  hcLight: "#0F4A85"
}, e(
  "activityBarBadgeBackground",
  "Activity notification badge background color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
)), w = t("activityBarBadge.foreground", {
  dark: r.white,
  light: r.white,
  hcDark: r.white,
  hcLight: r.white
}, e(
  "activityBarBadgeForeground",
  "Activity notification badge foreground color. The activity bar is showing on the far left or right and allows to switch between views of the side bar."
));
t("profileBadge.background", {
  dark: "#4D4D4D",
  light: "#C4C4C4",
  hcDark: r.white,
  hcLight: r.black
}, e(
  "profileBadgeBackground",
  "Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar."
));
t("profileBadge.foreground", {
  dark: r.white,
  light: "#333333",
  hcDark: r.black,
  hcLight: r.white
}, e(
  "profileBadgeForeground",
  "Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar."
));
t("statusBarItem.remoteBackground", {
  dark: k,
  light: k,
  hcDark: k,
  hcLight: k
}, e(
  "statusBarItemHostBackground",
  "Background color for the remote indicator on the status bar."
));
t("statusBarItem.remoteForeground", {
  dark: w,
  light: w,
  hcDark: w,
  hcLight: w
}, e(
  "statusBarItemHostForeground",
  "Foreground color for the remote indicator on the status bar."
));
t("extensionBadge.remoteBackground", {
  dark: k,
  light: k,
  hcDark: k,
  hcLight: k
}, e(
  "extensionBadge.remoteBackground",
  "Background color for the remote badge in the extensions view."
));
t("extensionBadge.remoteForeground", {
  dark: w,
  light: w,
  hcDark: w,
  hcLight: w
}, e(
  "extensionBadge.remoteForeground",
  "Foreground color for the remote badge in the extensions view."
));
const Se = t("sideBar.background", {
  dark: "#252526",
  light: "#F3F3F3",
  hcDark: "#000000",
  hcLight: "#FFFFFF"
}, e(
  "sideBarBackground",
  "Side bar background color. The side bar is the container for views like explorer and search."
)), B = t("sideBar.foreground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "sideBarForeground",
  "Side bar foreground color. The side bar is the container for views like explorer and search."
));
t("sideBar.border", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "sideBarBorder",
  "Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search."
));
t("sideBarTitle.foreground", {
  dark: B,
  light: B,
  hcDark: B,
  hcLight: B
}, e(
  "sideBarTitleForeground",
  "Side bar title foreground color. The side bar is the container for views like explorer and search."
));
t("sideBar.dropBackground", {
  dark: p,
  light: p,
  hcDark: p,
  hcLight: p
}, e(
  "sideBarDragAndDropBackground",
  "Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."
));
t("sideBarSectionHeader.background", {
  dark: r.fromHex("#808080").transparent(0.2),
  light: r.fromHex("#808080").transparent(0.2),
  hcDark: null,
  hcLight: null
}, e(
  "sideBarSectionHeaderBackground",
  "Side bar section header background color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."
));
t("sideBarSectionHeader.foreground", {
  dark: B,
  light: B,
  hcDark: B,
  hcLight: B
}, e(
  "sideBarSectionHeaderForeground",
  "Side bar section header foreground color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."
));
t("sideBarSectionHeader.border", {
  dark: o,
  light: o,
  hcDark: o,
  hcLight: o
}, e(
  "sideBarSectionHeaderBorder",
  "Side bar section header border color. The side bar is the container for views like explorer and search. Side bar sections are views nested within the side bar."
));
const T = t("titleBar.activeForeground", {
  dark: "#CCCCCC",
  light: "#333333",
  hcDark: "#FFFFFF",
  hcLight: "#292929"
}, e(
  "titleBarActiveForeground",
  "Title bar foreground when the window is active."
));
t("titleBar.inactiveForeground", {
  dark: i(T, 0.6),
  light: i(T, 0.6),
  hcDark: null,
  hcLight: "#292929"
}, e(
  "titleBarInactiveForeground",
  "Title bar foreground when the window is inactive."
));
const oe = t("titleBar.activeBackground", {
  dark: "#3C3C3C",
  light: "#DDDDDD",
  hcDark: "#000000",
  hcLight: "#FFFFFF"
}, e(
  "titleBarActiveBackground",
  "Title bar background when the window is active."
));
t("titleBar.inactiveBackground", {
  dark: i(oe, 0.6),
  light: i(oe, 0.6),
  hcDark: null,
  hcLight: null
}, e(
  "titleBarInactiveBackground",
  "Title bar background when the window is inactive."
));
t("titleBar.border", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e("titleBarBorder", "Title bar border color."));
t("menubar.selectionForeground", {
  dark: T,
  light: T,
  hcDark: T,
  hcLight: T
}, e(
  "menubarSelectionForeground",
  "Foreground color of the selected menu item in the menubar."
));
t("menubar.selectionBackground", {
  dark: q,
  light: q,
  hcDark: null,
  hcLight: null
}, e(
  "menubarSelectionBackground",
  "Background color of the selected menu item in the menubar."
));
t("menubar.selectionBorder", {
  dark: null,
  light: null,
  hcDark: Y,
  hcLight: Y
}, e(
  "menubarSelectionBorder",
  "Border color of the selected menu item in the menubar."
));
const Ce = t("notificationCenter.border", {
  dark: K,
  light: K,
  hcDark: o,
  hcLight: o
}, e(
  "notificationCenterBorder",
  "Notifications center border color. Notifications slide in from the bottom right of the window."
)), Re = t("notificationToast.border", {
  dark: K,
  light: K,
  hcDark: o,
  hcLight: o
}, e(
  "notificationToastBorder",
  "Notification toast border color. Notifications slide in from the bottom right of the window."
));
t("notifications.foreground", {
  dark: l,
  light: l,
  hcDark: l,
  hcLight: l
}, e(
  "notificationsForeground",
  "Notifications foreground color. Notifications slide in from the bottom right of the window."
));
const P = t("notifications.background", {
  dark: u,
  light: u,
  hcDark: u,
  hcLight: u
}, e(
  "notificationsBackground",
  "Notifications background color. Notifications slide in from the bottom right of the window."
));
t("notificationLink.foreground", {
  dark: S,
  light: S,
  hcDark: S,
  hcLight: S
}, e(
  "notificationsLink",
  "Notification links foreground color. Notifications slide in from the bottom right of the window."
));
const xe = t("notificationCenterHeader.foreground", {
  dark: null,
  light: null,
  hcDark: null,
  hcLight: null
}, e(
  "notificationCenterHeaderForeground",
  "Notifications center header foreground color. Notifications slide in from the bottom right of the window."
)), H = t("notificationCenterHeader.background", {
  dark: be(P, 0.3),
  light: D(P, 0.05),
  hcDark: P,
  hcLight: P
}, e(
  "notificationCenterHeaderBackground",
  "Notifications center header background color. Notifications slide in from the bottom right of the window."
));
t("notifications.border", {
  dark: H,
  light: H,
  hcDark: H,
  hcLight: H
}, e(
  "notificationsBorder",
  "Notifications border color separating from other notifications in the notifications center. Notifications slide in from the bottom right of the window."
));
t("notificationsErrorIcon.foreground", {
  dark: C,
  light: C,
  hcDark: C,
  hcLight: C
}, e(
  "notificationsErrorIconForeground",
  "The color used for the icon of error notifications. Notifications slide in from the bottom right of the window."
));
t("notificationsWarningIcon.foreground", {
  dark: v,
  light: v,
  hcDark: v,
  hcLight: v
}, e(
  "notificationsWarningIconForeground",
  "The color used for the icon of warning notifications. Notifications slide in from the bottom right of the window."
));
t("notificationsInfoIcon.foreground", {
  dark: g,
  light: g,
  hcDark: g,
  hcLight: g
}, e(
  "notificationsInfoIconForeground",
  "The color used for the icon of info notifications. Notifications slide in from the bottom right of the window."
));
t("window.activeBorder", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "windowActiveBorder",
  "The color used for the border of the window when it is active. Only supported in the macOS and Linux desktop client when using the custom title bar."
));
t("window.inactiveBorder", {
  dark: null,
  light: null,
  hcDark: o,
  hcLight: o
}, e(
  "windowInactiveBorder",
  "The color used for the border of the window when it is inactive. Only supported in the macOS and Linux desktop client when using the custom title bar."
));
export {
  ve as A,
  De as M,
  Le as N,
  ye as P,
  _e as S,
  we as T,
  Ee as a,
  Be as b,
  ke as c,
  me as d,
  Te as e,
  fe as f,
  Fe as g,
  Ie as h,
  P as i,
  Re as j,
  Ce as k,
  xe as l,
  H as m,
  Se as n,
  Ae as o
};

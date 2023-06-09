import { dT as S, dU as x, dV as _, dW as T, dX as Qe, aI as g, N as r, dY as Xe, L as De, d3 as Ee, dZ as F, ah as Me, as as q, aH as B, aQ as M, _ as J, a as C, K as Ze, aJ as ce, C as Pe, cj as Ue, d_ as et, bv as tt, da as Re, g as ue, bx as nt, d$ as Ge, e0 as it, aD as te, bN as ge, bT as be, e1 as ot, e2 as st, bO as Ce, e3 as rt, e4 as ne, e5 as Ke, e6 as at, e7 as w, e8 as $e, e9 as j, ea as v, bX as Oe, D as H, an as Q, dj as Fe, ap as qe, cZ as dt, eb as je, cX as We, a0 as R, d0 as ct, aG as ut, n as lt, bj as ht, e as Ne, ba as Be, b8 as yt, p as Ye, G as mt, H as ft, bZ as pt, ec as gt, ed as bt, ee as Ct, ef as Kt, ai as _t, aj as St, eg as kt, eh as vt, aW as wt, ei as It, aY as Lt, bf as ie, bg as xt, ej as Y, d5 as le, ek as _e, el as Tt, em as Ve, en as At, eo as Se, dF as Dt, E as Et, cY as Mt, ep as ke, bA as Pt, eq as Ut, bH as ve, er as Rt, es as Gt, dn as $t, bC as we, et as Ot, eu as Ft } from "./verifyPrepare-e26a1ce7.js";
import { g as qt } from "./unboundCommands-b88e3bb8.js";
class oe {
  static _readModifiers(e) {
    e = e.toLowerCase().trim();
    let t = !1, n = !1, i = !1, o = !1, s;
    do
      s = !1, /^ctrl(\+|\-)/.test(e) && (t = !0, e = e.substr(5), s = !0), /^shift(\+|\-)/.test(e) && (n = !0, e = e.substr(6), s = !0), /^alt(\+|\-)/.test(e) && (i = !0, e = e.substr(4), s = !0), /^meta(\+|\-)/.test(e) && (o = !0, e = e.substr(5), s = !0), /^win(\+|\-)/.test(e) && (o = !0, e = e.substr(4), s = !0), /^cmd(\+|\-)/.test(e) && (o = !0, e = e.substr(4), s = !0);
    while (s);
    let d;
    const u = e.indexOf(" ");
    return u > 0 ? (d = e.substring(0, u), e = e.substring(u)) : (d = e, e = ""), {
      remains: e,
      ctrl: t,
      shift: n,
      alt: i,
      meta: o,
      key: d
    };
  }
  static parseChord(e) {
    const t = this._readModifiers(e), n = t.key.match(/^\[([^\]]+)\]$/);
    if (n) {
      const o = n[1], s = S.lowerCaseToEnum(o);
      return [new x(t.ctrl, t.shift, t.alt, t.meta, s), t.remains];
    }
    const i = _.fromUserSettings(t.key);
    return [new T(t.ctrl, t.shift, t.alt, t.meta, i), t.remains];
  }
  static parseKeybinding(e) {
    if (!e)
      return null;
    const t = [];
    let n;
    for (; e.length > 0; )
      [n, e] = this.parseChord(e), t.push(n);
    return t.length > 0 ? new Qe(t) : null;
  }
}
const jt = [
  {
    key: "commandPalette",
    id: g.CommandPalette,
    description: r("menus.commandPalette", "The Command Palette"),
    supportsSubmenus: !1
  },
  {
    key: "touchBar",
    id: g.TouchBarContext,
    description: r("menus.touchBar", "The touch bar (macOS only)"),
    supportsSubmenus: !1
  },
  {
    key: "editor/title",
    id: g.EditorTitle,
    description: r("menus.editorTitle", "The editor title menu")
  },
  {
    key: "editor/title/run",
    id: g.EditorTitleRun,
    description: r("menus.editorTitleRun", "Run submenu inside the editor title menu")
  },
  {
    key: "editor/context",
    id: g.EditorContext,
    description: r("menus.editorContext", "The editor context menu")
  },
  {
    key: "editor/context/copy",
    id: g.EditorContextCopy,
    description: r(
      "menus.editorContextCopyAs",
      "'Copy as' submenu in the editor context menu"
    )
  },
  {
    key: "editor/context/share",
    id: g.EditorContextShare,
    description: r("menus.editorContextShare", "'Share' submenu in the editor context menu"),
    proposed: "contribShareMenu"
  },
  {
    key: "explorer/context",
    id: g.ExplorerContext,
    description: r("menus.explorerContext", "The file explorer context menu")
  },
  {
    key: "explorer/context/share",
    id: g.ExplorerContextShare,
    description: r(
      "menus.explorerContextShare",
      "'Share' submenu in the file explorer context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/title/context",
    id: g.EditorTitleContext,
    description: r("menus.editorTabContext", "The editor tabs context menu")
  },
  {
    key: "editor/title/context/share",
    id: g.EditorTitleContextShare,
    description: r(
      "menus.editorTitleContextShare",
      "'Share' submenu inside the editor title context menu"
    ),
    proposed: "contribShareMenu"
  },
  {
    key: "debug/callstack/context",
    id: g.DebugCallStackContext,
    description: r("menus.debugCallstackContext", "The debug callstack view context menu")
  },
  {
    key: "debug/variables/context",
    id: g.DebugVariablesContext,
    description: r("menus.debugVariablesContext", "The debug variables view context menu")
  },
  {
    key: "debug/toolBar",
    id: g.DebugToolBar,
    description: r("menus.debugToolBar", "The debug toolbar menu")
  },
  {
    key: "menuBar/home",
    id: g.MenubarHomeMenu,
    description: r("menus.home", "The home indicator context menu (web only)"),
    proposed: "contribMenuBarHome",
    supportsSubmenus: !1
  },
  {
    key: "menuBar/edit/copy",
    id: g.MenubarCopy,
    description: r("menus.opy", "'Copy as' submenu in the top level Edit menu")
  },
  {
    key: "scm/title",
    id: g.SCMTitle,
    description: r("menus.scmTitle", "The Source Control title menu")
  },
  {
    key: "scm/sourceControl",
    id: g.SCMSourceControl,
    description: r("menus.scmSourceControl", "The Source Control menu")
  },
  {
    key: "scm/resourceState/context",
    id: g.SCMResourceContext,
    description: r(
      "menus.resourceStateContext",
      "The Source Control resource state context menu"
    )
  },
  {
    key: "scm/resourceFolder/context",
    id: g.SCMResourceFolderContext,
    description: r(
      "menus.resourceFolderContext",
      "The Source Control resource folder context menu"
    )
  },
  {
    key: "scm/resourceGroup/context",
    id: g.SCMResourceGroupContext,
    description: r(
      "menus.resourceGroupContext",
      "The Source Control resource group context menu"
    )
  },
  {
    key: "scm/change/title",
    id: g.SCMChangeContext,
    description: r("menus.changeTitle", "The Source Control inline change menu")
  },
  {
    key: "statusBar/remoteIndicator",
    id: g.StatusBarRemoteIndicatorMenu,
    description: r(
      "menus.statusBarRemoteIndicator",
      "The remote indicator menu in the status bar"
    ),
    supportsSubmenus: !1
  },
  {
    key: "view/title",
    id: g.ViewTitle,
    description: r("view.viewTitle", "The contributed view title menu")
  },
  {
    key: "view/item/context",
    id: g.ViewItemContext,
    description: r("view.itemContext", "The contributed view item context menu")
  },
  {
    key: "comments/comment/editorActions",
    id: g.CommentEditorActions,
    description: r("commentThread.editorActions", "The contributed comment editor actions"),
    proposed: "contribCommentEditorActionsMenu"
  },
  {
    key: "comments/commentThread/title",
    id: g.CommentThreadTitle,
    description: r("commentThread.title", "The contributed comment thread title menu")
  },
  {
    key: "comments/commentThread/context",
    id: g.CommentThreadActions,
    description: r(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1
  },
  {
    key: "comments/commentThread/additionalActions",
    id: g.CommentThreadAdditionalActions,
    description: r(
      "commentThread.actions",
      "The contributed comment thread context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1,
    proposed: "contribCommentThreadAdditionalMenu"
  },
  {
    key: "comments/commentThread/title/context",
    id: g.CommentThreadTitleContext,
    description: r(
      "commentThread.titleContext",
      "The contributed comment thread title's peek context menu, rendered as a right click menu on the comment thread's peek title."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "comments/comment/title",
    id: g.CommentTitle,
    description: r("comment.title", "The contributed comment title menu")
  },
  {
    key: "comments/comment/context",
    id: g.CommentActions,
    description: r(
      "comment.actions",
      "The contributed comment context menu, rendered as buttons below the comment editor"
    ),
    supportsSubmenus: !1
  },
  {
    key: "comments/commentThread/comment/context",
    id: g.CommentThreadCommentContext,
    description: r(
      "comment.commentContext",
      "The contributed comment context menu, rendered as a right click menu on the an individual comment in the comment thread's peek view."
    ),
    proposed: "contribCommentPeekContext"
  },
  {
    key: "notebook/toolbar",
    id: g.NotebookToolbar,
    description: r("notebook.toolbar", "The contributed notebook toolbar menu")
  },
  {
    key: "notebook/kernelSource",
    id: g.NotebookKernelSource,
    description: r("notebook.kernelSource", "The contributed notebook kernel sources menu"),
    proposed: "notebookKernelSource"
  },
  {
    key: "notebook/cell/title",
    id: g.NotebookCellTitle,
    description: r("notebook.cell.title", "The contributed notebook cell title menu")
  },
  {
    key: "notebook/cell/execute",
    id: g.NotebookCellExecute,
    description: r("notebook.cell.execute", "The contributed notebook cell execution menu")
  },
  {
    key: "interactive/toolbar",
    id: g.InteractiveToolbar,
    description: r("interactive.toolbar", "The contributed interactive toolbar menu")
  },
  {
    key: "interactive/cell/title",
    id: g.InteractiveCellTitle,
    description: r("interactive.cell.title", "The contributed interactive cell title menu")
  },
  {
    key: "testing/item/context",
    id: g.TestItem,
    description: r("testing.item.context", "The contributed test item menu")
  },
  {
    key: "testing/item/gutter",
    id: g.TestItemGutter,
    description: r(
      "testing.item.gutter.title",
      "The menu for a gutter decoration for a test item"
    )
  },
  {
    key: "extension/context",
    id: g.ExtensionContext,
    description: r("menus.extensionContext", "The extension context menu")
  },
  {
    key: "timeline/title",
    id: g.TimelineTitle,
    description: r("view.timelineTitle", "The Timeline view title menu")
  },
  {
    key: "timeline/item/context",
    id: g.TimelineItemContext,
    description: r("view.timelineContext", "The Timeline view item context menu")
  },
  {
    key: "ports/item/context",
    id: g.TunnelContext,
    description: r("view.tunnelContext", "The Ports view item context menu")
  },
  {
    key: "ports/item/origin/inline",
    id: g.TunnelOriginInline,
    description: r("view.tunnelOriginInline", "The Ports view item origin inline menu")
  },
  {
    key: "ports/item/port/inline",
    id: g.TunnelPortInline,
    description: r("view.tunnelPortInline", "The Ports view item port inline menu")
  },
  {
    key: "file/newFile",
    id: g.NewFile,
    description: r(
      "file.newFile",
      "The 'New File...' quick pick, shown on welcome page and File menu."
    ),
    supportsSubmenus: !1
  },
  {
    key: "webview/context",
    id: g.WebviewContext,
    description: r("webview.context", "The webview context menu")
  },
  {
    key: "file/share",
    id: g.MenubarShare,
    description: r("menus.share", "Share submenu shown in the top level File menu."),
    proposed: "contribShareMenu"
  },
  {
    key: "editor/inlineCompletions/actions",
    id: g.InlineCompletionsActions,
    description: r(
      "inlineCompletions.actions",
      "The actions shown when hovering on an inline completion"
    ),
    supportsSubmenus: !1,
    proposed: "inlineCompletionsAdditions"
  },
  {
    key: "editor/content",
    id: g.EditorContent,
    description: r("merge.toolbar", "The prominent button in an editor, overlays its content"),
    proposed: "contribEditorContentMenu"
  },
  {
    key: "editor/lineNumber/context",
    id: g.EditorLineNumberContext,
    description: r(
      "editorLineNumberContext",
      "The contributed editor line number context menu"
    )
  },
  {
    key: "mergeEditor/result/title",
    id: g.MergeInputResultToolbar,
    description: r("menus.mergeEditorResult", "The result toolbar of the merge editor"),
    proposed: "contribMergeEditorMenus"
  }
];
var V;
(function(h) {
  function e(c) {
    return typeof c.command == "string";
  }
  h.isMenuItem = e;
  function t(c, p) {
    return typeof c.command != "string" ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "command"
    )), !1) : c.alt && typeof c.alt != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "alt"
    )), !1) : c.when && typeof c.when != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "when"
    )), !1) : c.group && typeof c.group != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "group"
    )), !1) : !0;
  }
  h.isValidMenuItem = t;
  function n(c, p) {
    return typeof c.submenu != "string" ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "submenu"
    )), !1) : c.when && typeof c.when != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "when"
    )), !1) : c.group && typeof c.group != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "group"
    )), !1) : !0;
  }
  h.isValidSubmenuItem = n;
  function i(c, p) {
    if (!Array.isArray(c))
      return p.error(r("requirearray", "submenu items must be an array")), !1;
    for (const f of c)
      if (e(f)) {
        if (!t(f, p))
          return !1;
      } else if (!n(f, p))
        return !1;
    return !0;
  }
  h.isValidItems = i;
  function o(c, p) {
    return typeof c != "object" ? (p.error(r("require", "submenu items must be an object")), !1) : typeof c.id != "string" ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "id"
    )), !1) : typeof c.label != "string" ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "label"
    )), !1) : !0;
  }
  h.isValidSubmenu = o;
  const s = {
    type: "object",
    required: ["command"],
    properties: {
      command: {
        description: r(
          "vscode.extension.contributes.menuItem.command",
          "Identifier of the command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      alt: {
        description: r(
          "vscode.extension.contributes.menuItem.alt",
          "Identifier of an alternative command to execute. The command must be declared in the 'commands'-section"
        ),
        type: "string"
      },
      when: {
        description: r(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: r(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  }, d = {
    type: "object",
    required: ["submenu"],
    properties: {
      submenu: {
        description: r(
          "vscode.extension.contributes.menuItem.submenu",
          "Identifier of the submenu to display in this item."
        ),
        type: "string"
      },
      when: {
        description: r(
          "vscode.extension.contributes.menuItem.when",
          "Condition which must be true to show this item"
        ),
        type: "string"
      },
      group: {
        description: r(
          "vscode.extension.contributes.menuItem.group",
          "Group into which this item belongs"
        ),
        type: "string"
      }
    }
  }, u = {
    type: "object",
    required: ["id", "label"],
    properties: {
      id: {
        description: r(
          "vscode.extension.contributes.submenu.id",
          "Identifier of the menu to display as a submenu."
        ),
        type: "string"
      },
      label: {
        description: r(
          "vscode.extension.contributes.submenu.label",
          "The label of the menu item which leads to this submenu."
        ),
        type: "string"
      },
      icon: {
        description: r(
          { key: "vscode.extension.contributes.submenu.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the submenu in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: r(
                  "vscode.extension.contributes.submenu.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: r(
                  "vscode.extension.contributes.submenu.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  h.menusContribution = {
    description: r(
      "vscode.extension.contributes.menus",
      "Contributes menu items to the editor"
    ),
    type: "object",
    properties: Xe(jt, (c) => c.key, (c) => ({
      markdownDescription: c.proposed ? r(
        "proposed",
        'Proposed API, requires `enabledApiProposal: ["{0}"]` - {1}',
        c.proposed,
        c.description
      ) : c.description,
      type: "array",
      items: c.supportsSubmenus === !1 ? s : { oneOf: [s, d] }
    })),
    additionalProperties: {
      description: "Submenu",
      type: "array",
      items: { oneOf: [s, d] }
    }
  }, h.submenusContribution = {
    description: r(
      "vscode.extension.contributes.submenus",
      "Contributes submenu items to the editor"
    ),
    type: "array",
    items: u
  };
  function m(c, p) {
    return c ? F(c.command) ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      "command"
    )), !1) : !a(c.title, p, "title") || c.shortTitle && !a(c.shortTitle, p, "shortTitle") ? !1 : c.enablement && typeof c.enablement != "string" ? (p.error(r(
      "optstring",
      "property `{0}` can be omitted or must be of type `string`",
      "precondition"
    )), !1) : !(c.category && !a(c.category, p, "category") || !l(c.icon, p)) : (p.error(r("nonempty", "expected non-empty value.")), !1);
  }
  h.isValidCommand = m;
  function l(c, p) {
    return typeof c > "u" || typeof c == "string" || typeof c.dark == "string" && typeof c.light == "string" ? !0 : (p.error(r(
      "opticon",
      "property `icon` can be omitted or must be either a string or a literal like `{dark, light}`"
    )), !1);
  }
  function a(c, p, f) {
    return typeof c > "u" ? (p.error(r(
      "requireStringOrObject",
      "property `{0}` is mandatory and must be of type `string` or `object`",
      f
    )), !1) : typeof c == "string" && F(c) ? (p.error(r(
      "requirestring",
      "property `{0}` is mandatory and must be of type `string`",
      f
    )), !1) : typeof c != "string" && (F(c.original) || F(c.value)) ? (p.error(r(
      "requirestrings",
      "properties `{0}` and `{1}` are mandatory and must be of type `string`",
      `${f}.value`,
      `${f}.original`
    )), !1) : !0;
  }
  const y = {
    type: "object",
    required: ["command", "title"],
    properties: {
      command: {
        description: r(
          "vscode.extension.contributes.commandType.command",
          "Identifier of the command to execute"
        ),
        type: "string"
      },
      title: {
        description: r(
          "vscode.extension.contributes.commandType.title",
          "Title by which the command is represented in the UI"
        ),
        type: "string"
      },
      shortTitle: {
        markdownDescription: r(
          "vscode.extension.contributes.commandType.shortTitle",
          "(Optional) Short title by which the command is represented in the UI. Menus pick either `title` or `shortTitle` depending on the context in which they show commands."
        ),
        type: "string"
      },
      category: {
        description: r(
          "vscode.extension.contributes.commandType.category",
          "(Optional) Category string by which the command is grouped in the UI"
        ),
        type: "string"
      },
      enablement: {
        description: r(
          "vscode.extension.contributes.commandType.precondition",
          "(Optional) Condition which must be true to enable the command in the UI (menu and keybindings). Does not prevent executing the command by other means, like the `executeCommand`-api."
        ),
        type: "string"
      },
      icon: {
        description: r(
          { key: "vscode.extension.contributes.commandType.icon", comment: ["do not translate or change `\\$(zap)`, \\ in front of $ is important."] },
          "(Optional) Icon which is used to represent the command in the UI. Either a file path, an object with file paths for dark and light themes, or a theme icon references, like `\\$(zap)`"
        ),
        anyOf: [
          {
            type: "string"
          },
          {
            type: "object",
            properties: {
              light: {
                description: r(
                  "vscode.extension.contributes.commandType.icon.light",
                  "Icon path when a light theme is used"
                ),
                type: "string"
              },
              dark: {
                description: r(
                  "vscode.extension.contributes.commandType.icon.dark",
                  "Icon path when a dark theme is used"
                ),
                type: "string"
              }
            }
          }
        ]
      }
    }
  };
  h.commandsContribution = {
    description: r(
      "vscode.extension.contributes.commands",
      "Contributes commands to the command palette."
    ),
    oneOf: [
      y,
      {
        type: "array",
        items: y
      }
    ]
  };
})(V || (V = {}));
const Ie = new De(), ze = Ee.registerExtensionPoint({
  extensionPoint: "commands",
  jsonSchema: V.commandsContribution,
  activationEventsGenerator: (h, e) => {
    for (const t of h)
      t.command && e.push(`onCommand:${t.command}`);
  }
});
ze.setHandler((h) => {
  function e(t, n) {
    if (!V.isValidCommand(t, n.collector))
      return;
    const { icon: i, enablement: o, category: s, title: d, shortTitle: u, command: m } = t;
    let l;
    i && (typeof i == "string" ? l = Me.fromString(i) ?? { dark: q(n.description.extensionLocation, i), light: q(n.description.extensionLocation, i) } : l = {
      dark: q(n.description.extensionLocation, i.dark),
      light: q(n.description.extensionLocation, i.light)
    }), B.getCommand(m) && n.collector.info(r(
      "dup",
      "Command `{0}` appears multiple times in the `commands` section.",
      t.command
    )), Ie.add(B.addCommand({
      id: m,
      title: d,
      source: { id: n.description.identifier.value, title: n.description.displayName ?? n.description.name },
      shortTitle: u,
      tooltip: d,
      category: s,
      precondition: M.deserialize(o),
      icon: l
    }));
  }
  Ie.clear();
  for (const t of h) {
    const { value: n } = t;
    if (Array.isArray(n))
      for (const i of n)
        e(i, t);
    else
      e(n, t);
  }
});
class Je {
  static writeKeybindingItem(e, t) {
    if (!t.resolvedKeybinding)
      return;
    const n = JSON.stringify(t.resolvedKeybinding.getUserSettingsLabel());
    e.write(`{ "key": ${Wt(n + ",", 25)} "command": `);
    const i = t.when ? JSON.stringify(t.when.serialize()) : "", o = JSON.stringify(t.command);
    i.length > 0 ? (e.write(`${o},`), e.writeLine(), e.write(`                                     "when": ${i}`)) : e.write(`${o}`), t.commandArgs && (e.write(","), e.writeLine(), e.write(`                                     "args": ${JSON.stringify(t.commandArgs)}`)), e.write(" }");
  }
  static readUserKeybindingItem(e) {
    const t = "key" in e && typeof e.key == "string" ? oe.parseKeybinding(e.key) : null, n = "when" in e && typeof e.when == "string" ? M.deserialize(e.when) : void 0, i = "command" in e && typeof e.command == "string" ? e.command : null, o = "args" in e && typeof e.args < "u" ? e.args : void 0;
    return {
      keybinding: t,
      command: i,
      commandArgs: o,
      when: n,
      _sourceKey: "key" in e && typeof e.key == "string" ? e.key : void 0
    };
  }
}
function Wt(h, e) {
  return h.length < e ? h + new Array(e - h.length).join(" ") : h;
}
class Nt {
  constructor() {
    this._lines = [], this._currentLine = "";
  }
  write(e) {
    this._currentLine += e;
  }
  writeLine(e = "") {
    this._lines.push(this._currentLine + e), this._currentLine = "";
  }
  toString() {
    return this.writeLine(), this._lines.join(`
`);
  }
}
function Bt(h, e) {
  return h ? typeof h.command != "string" ? (e.push(r(
    "requirestring",
    "property `{0}` is mandatory and must be of type `string`",
    "command"
  )), !1) : h.key && typeof h.key != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "key"
  )), !1) : h.when && typeof h.when != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "when"
  )), !1) : h.mac && typeof h.mac != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "mac"
  )), !1) : h.linux && typeof h.linux != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "linux"
  )), !1) : h.win && typeof h.win != "string" ? (e.push(r(
    "optstring",
    "property `{0}` can be omitted or must be of type `string`",
    "win"
  )), !1) : !0 : (e.push(r("nonempty", "expected non-empty value.")), !1);
}
const Le = {
  type: "object",
  default: { command: "", key: "" },
  properties: {
    command: {
      description: r(
        "vscode.extension.contributes.keybindings.command",
        "Identifier of the command to run when keybinding is triggered."
      ),
      type: "string"
    },
    args: {
      description: r(
        "vscode.extension.contributes.keybindings.args",
        "Arguments to pass to the command to execute."
      )
    },
    key: {
      description: r(
        "vscode.extension.contributes.keybindings.key",
        "Key or key sequence (separate keys with plus-sign and sequences with space, e.g. Ctrl+O and Ctrl+L L for a chord)."
      ),
      type: "string"
    },
    mac: {
      description: r(
        "vscode.extension.contributes.keybindings.mac",
        "Mac specific key or key sequence."
      ),
      type: "string"
    },
    linux: {
      description: r(
        "vscode.extension.contributes.keybindings.linux",
        "Linux specific key or key sequence."
      ),
      type: "string"
    },
    win: {
      description: r(
        "vscode.extension.contributes.keybindings.win",
        "Windows specific key or key sequence."
      ),
      type: "string"
    },
    when: {
      description: r(
        "vscode.extension.contributes.keybindings.when",
        "Condition when the key is active."
      ),
      type: "string"
    }
  }
}, xe = Ee.registerExtensionPoint({
  extensionPoint: "keybindings",
  deps: [ze],
  jsonSchema: {
    description: r("vscode.extension.contributes.keybindings", "Contributes keybindings."),
    oneOf: [
      Le,
      {
        type: "array",
        items: Le
      }
    ]
  }
}), Yt = [
  90,
  91,
  92,
  93,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105
], I = /* @__PURE__ */ new Map();
I.set(95, 22);
I.set(96, 23);
I.set(97, 24);
I.set(98, 25);
I.set(99, 26);
I.set(100, 27);
I.set(101, 28);
I.set(102, 29);
I.set(103, 30);
I.set(104, 21);
let se = class N extends it {
  constructor(e, t, n, i, o, s, d, u, m, l) {
    super(e, t, n, i, m), this.hostService = s, this.keyboardLayoutService = l, this._contributions = [], this.isComposingGlobalContextKey = e.createKey("isComposing", !1), this.kbsJsonSchema = new A(), this.updateKeybindingsJsonSchema(), this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper(), this.keyboardLayoutService.onDidChangeKeyboardLayout(() => {
      this._keyboardMapper = this.keyboardLayoutService.getKeyboardMapper(), this.updateResolver();
    }), this._cachedResolver = null, this.userKeybindings = this._register(new Vt(o, u, m)), this.userKeybindings.initialize().then(() => {
      this.userKeybindings.keybindings.length && this.updateResolver();
    }), this._register(this.userKeybindings.onDidChange(() => {
      m.debug("User keybindings changed"), this.updateResolver();
    })), xe.setHandler((a) => {
      const y = [];
      for (const c of a)
        this._handleKeybindingsExtensionPointUser(c.description.identifier, c.description.isBuiltin, c.value, c.collector, y);
      te.setExtensionKeybindings(y), this.updateResolver();
    }), this.updateKeybindingsJsonSchema(), this._register(d.onDidRegisterExtensions(() => this.updateKeybindingsJsonSchema())), this._register(ge(window, Ce.KEY_DOWN, (a) => {
      this.isComposingGlobalContextKey.set(a.isComposing);
      const y = new be(a);
      this._log(`/ Received  keydown event - ${ot(a)}`), this._log(`| Converted keydown event - ${st(y)}`), this._dispatch(y, y.target) && y.preventDefault(), this.isComposingGlobalContextKey.set(!1);
    })), this._register(ge(window, Ce.KEY_UP, (a) => {
      this.isComposingGlobalContextKey.set(a.isComposing);
      const y = new be(a);
      this._singleModifierDispatch(y, y.target) && y.preventDefault(), this.isComposingGlobalContextKey.set(!1);
    })), this._register(rt(() => {
      const a = navigator.keyboard;
      ne.keyboard !== 2 && (Ke() ? a == null || a.lock(["Escape"]) : a == null || a.unlock(), this._cachedResolver = null, this._onDidUpdateKeybindings.fire());
    }));
  }
  registerSchemaContribution(e) {
    this._contributions.push(e), e.onDidChange && this._register(e.onDidChange(() => this.updateKeybindingsJsonSchema())), this.updateKeybindingsJsonSchema();
  }
  updateKeybindingsJsonSchema() {
    this.kbsJsonSchema.updateSchema(this._contributions.flatMap((e) => e.getSchemaAdditions()));
  }
  _printKeybinding(e) {
    return at.toLabel(w, e.chords, (t) => t instanceof T ? _.toString(t.keyCode) : S.toString(t.scanCode)) || "[null]";
  }
  _printResolvedKeybinding(e) {
    return e.getDispatchChords().map((t) => t || "[null]").join(" ");
  }
  _printResolvedKeybindings(e, t, n) {
    const o = `${t.padStart(35, " ")} => `;
    if (n.length === 0) {
      e.push(`${o}${"[NO BINDING]".padStart(35, " ")}`);
      return;
    }
    for (const s of n)
      e.push(`${o}${this._printResolvedKeybinding(s).padStart(35, " ")}`);
  }
  _dumpResolveKeybindingDebugInfo() {
    const e = /* @__PURE__ */ new Set(), t = [];
    t.push("Default Resolved Keybindings (unique only):");
    for (const n of te.getDefaultKeybindings()) {
      if (!n.keybinding)
        continue;
      const i = this._printKeybinding(n.keybinding);
      if (e.has(i))
        continue;
      e.add(i);
      const o = this._keyboardMapper.resolveKeybinding(n.keybinding);
      this._printResolvedKeybindings(t, i, o);
    }
    t.push("User Resolved Keybindings (unique only):");
    for (const n of this.userKeybindings.keybindings) {
      if (!n.keybinding)
        continue;
      const i = n._sourceKey ?? "Impossible: missing source key, but has keybinding";
      if (e.has(i))
        continue;
      e.add(i);
      const o = this._keyboardMapper.resolveKeybinding(n.keybinding);
      this._printResolvedKeybindings(t, i, o);
    }
    return t.join(`
`);
  }
  _dumpDebugInfo() {
    const e = JSON.stringify(this.keyboardLayoutService.getCurrentKeyboardLayout(), null, "	"), t = this._keyboardMapper.dumpDebugInfo(), n = this._dumpResolveKeybindingDebugInfo(), i = JSON.stringify(this.keyboardLayoutService.getRawKeyboardMapping(), null, "	");
    return `Layout info:
${e}

${n}

${t}

Raw mapping:
${i}`;
  }
  _dumpDebugInfoJSON() {
    const e = {
      layout: this.keyboardLayoutService.getCurrentKeyboardLayout(),
      rawMapping: this.keyboardLayoutService.getRawKeyboardMapping()
    };
    return JSON.stringify(e, null, "	");
  }
  customKeybindingsCount() {
    return this.userKeybindings.keybindings.length;
  }
  updateResolver() {
    this._cachedResolver = null, this._onDidUpdateKeybindings.fire();
  }
  _getResolver() {
    if (!this._cachedResolver) {
      const e = this._resolveKeybindingItems(te.getDefaultKeybindings(), !0), t = this._resolveUserKeybindingItems(this.userKeybindings.keybindings, !1);
      this._cachedResolver = new $e(e, t, (n) => this._log(n));
    }
    return this._cachedResolver;
  }
  _documentHasFocus() {
    return this.hostService.hasFocus;
  }
  _resolveKeybindingItems(e, t) {
    const n = [];
    let i = 0;
    for (const o of e) {
      const s = o.when || void 0, d = o.keybinding;
      if (!d)
        n[i++] = new j(
          void 0,
          o.command,
          o.commandArgs,
          s,
          t,
          o.extensionId,
          o.isBuiltinExtension
        );
      else {
        if (this._assertBrowserConflicts(d))
          continue;
        const u = this._keyboardMapper.resolveKeybinding(d);
        for (let m = u.length - 1; m >= 0; m--) {
          const l = u[m];
          n[i++] = new j(
            l,
            o.command,
            o.commandArgs,
            s,
            t,
            o.extensionId,
            o.isBuiltinExtension
          );
        }
      }
    }
    return n;
  }
  _resolveUserKeybindingItems(e, t) {
    const n = [];
    let i = 0;
    for (const o of e) {
      const s = o.when || void 0;
      if (!o.keybinding)
        n[i++] = new j(void 0, o.command, o.commandArgs, s, t, null, !1);
      else {
        const d = this._keyboardMapper.resolveKeybinding(o.keybinding);
        for (const u of d)
          n[i++] = new j(
            u,
            o.command,
            o.commandArgs,
            s,
            t,
            null,
            !1
          );
      }
    }
    return n;
  }
  _assertBrowserConflicts(e) {
    if (ne.keyboard === 0 || ne.keyboard === 1 && Ke())
      return !1;
    for (const t of e.chords) {
      if (!t.metaKey && !t.altKey && !t.ctrlKey && !t.shiftKey)
        continue;
      const n = 3584;
      let i = 0;
      if (t.metaKey && (i |= 2048), t.shiftKey && (i |= 1024), t.altKey && (i |= 512), t.ctrlKey && w === 2 && (i |= 256), (i & n) === 2560 && (t instanceof x && (t.scanCode === 86 || t.scanCode === 85) || t instanceof T && (t.keyCode === 15 || t.keyCode === 17)) || (i & n) === 2048 && (t instanceof x && t.scanCode >= 36 && t.scanCode <= 45 || t instanceof T && t.keyCode >= 21 && t.keyCode <= 30))
        return !0;
    }
    return !1;
  }
  resolveKeybinding(e) {
    return this._keyboardMapper.resolveKeybinding(e);
  }
  resolveKeyboardEvent(e) {
    return this.keyboardLayoutService.validateCurrentKeyboardMapping(e), this._keyboardMapper.resolveKeyboardEvent(e);
  }
  resolveUserBinding(e) {
    const t = oe.parseKeybinding(e);
    return t ? this._keyboardMapper.resolveKeybinding(t) : [];
  }
  _handleKeybindingsExtensionPointUser(e, t, n, i, o) {
    if (Array.isArray(n))
      for (let s = 0, d = n.length; s < d; s++)
        this._handleKeybinding(e, t, s + 1, n[s], i, o);
    else
      this._handleKeybinding(e, t, 1, n, i, o);
  }
  _handleKeybinding(e, t, n, i, o, s) {
    const d = [];
    if (Bt(i, d)) {
      const u = this._asCommandRule(e, t, n++, i);
      u && s.push(u);
    }
    d.length > 0 && o.error(r(
      "invalid.keybindings",
      "Invalid `contributes.{0}`: {1}",
      xe.name,
      d.join(`
`)
    ));
  }
  static bindToCurrentPlatform(e, t, n, i) {
    if (w === 1 && i) {
      if (i)
        return i;
    } else if (w === 2) {
      if (t)
        return t;
    } else if (n)
      return n;
    return e;
  }
  _asCommandRule(e, t, n, i) {
    const { command: o, args: s, when: d, key: u, mac: m, linux: l, win: a } = i, y = N.bindToCurrentPlatform(u, m, l, a);
    if (!y)
      return;
    let c;
    t ? c = 300 + n : c = 400 + n;
    const p = B.getCommand(o), f = p && p.precondition;
    let b;
    return d && f ? b = M.and(f, M.deserialize(d)) : d ? b = M.deserialize(d) : f && (b = f), {
      id: o,
      args: s,
      when: b,
      weight: c,
      keybinding: oe.parseKeybinding(y),
      extensionId: e.value,
      isBuiltinExtension: t
    };
  }
  getDefaultKeybindingsContent() {
    const e = this._getResolver(), t = e.getDefaultKeybindings(), n = e.getDefaultBoundCommands();
    return N._getDefaultKeybindings(t) + `

` + N._getAllCommandsAsComment(n);
  }
  static _getDefaultKeybindings(e) {
    const t = new Nt();
    t.writeLine("[");
    const n = e.length - 1;
    return e.forEach((i, o) => {
      Je.writeKeybindingItem(t, i), o !== n ? t.writeLine(",") : t.writeLine();
    }), t.writeLine("]"), t.toString();
  }
  static _getAllCommandsAsComment(e) {
    const n = qt(e).sort().join(`
// - `);
    return "// " + r("unboundCommands", "Here are other available commands: ") + `
// - ` + n;
  }
  mightProducePrintableCharacter(e) {
    if (e.ctrlKey || e.metaKey || e.altKey)
      return !1;
    const t = S.toEnum(e.code);
    if (Yt.indexOf(t) !== -1)
      return !!(e.keyCode === v[t] || Oe && e.keyCode === I.get(t));
    if (v[t] !== -1)
      return !1;
    const i = this.keyboardLayoutService.getRawKeyboardMapping();
    if (!i)
      return !1;
    const o = i[e.code];
    return !(!o || !o.value || /\s/.test(o.value));
  }
};
se = J([
  C(0, Ze),
  C(1, ce),
  C(2, Pe),
  C(3, Ue),
  C(4, et),
  C(5, tt),
  C(6, Re),
  C(7, ue),
  C(8, nt),
  C(9, Ge)
], se);
class Vt extends H {
  get keybindings() {
    return this._keybindings;
  }
  constructor(e, t, n) {
    super(), this.userDataProfileService = e, this.fileService = t, this._rawKeybindings = [], this._keybindings = [], this.watchDisposables = this._register(new De()), this._onDidChange = this._register(new Q()), this.onDidChange = this._onDidChange.event, this.watch(), this.reloadConfigurationScheduler = this._register(new Fe(() => this.reload().then((i) => {
      i && this._onDidChange.fire();
    }), 50)), this._register(qe.filter(this.fileService.onDidFilesChange, (i) => i.contains(this.userDataProfileService.currentProfile.keybindingsResource))(() => {
      n.debug("Keybindings file changed"), this.reloadConfigurationScheduler.schedule();
    })), this._register(this.fileService.onDidRunOperation((i) => {
      i.operation === 4 && i.resource.toString() === this.userDataProfileService.currentProfile.keybindingsResource.toString() && (n.debug("Keybindings file written"), this.reloadConfigurationScheduler.schedule());
    })), this._register(e.onDidChangeCurrentProfile((i) => i.join(this.whenCurrentProfileChanged(i))));
  }
  async whenCurrentProfileChanged(e) {
    e.preserveData && await this.fileService.exists(e.previous.keybindingsResource) && await this.fileService.copy(e.previous.keybindingsResource, e.profile.keybindingsResource), this.watch(), this.reloadConfigurationScheduler.schedule();
  }
  watch() {
    this.watchDisposables.clear(), this.watchDisposables.add(this.fileService.watch(dt(this.userDataProfileService.currentProfile.keybindingsResource))), this.watchDisposables.add(this.fileService.watch(this.userDataProfileService.currentProfile.keybindingsResource));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const e = await this.readUserKeybindings();
    return je(this._rawKeybindings, e) ? !1 : (this._rawKeybindings = e, this._keybindings = this._rawKeybindings.map((t) => Je.readUserKeybindingItem(t)), !0);
  }
  async readUserKeybindings() {
    try {
      const e = await this.fileService.readFile(this.userDataProfileService.currentProfile.keybindingsResource), t = We(e.value.toString());
      return Array.isArray(t) ? t.filter((n) => n && typeof n == "object") : [];
    } catch {
      return [];
    }
  }
}
class A {
  constructor() {
    this.commandsSchemas = [], this.commandsEnum = [], this.removalCommandsEnum = [], this.commandsEnumDescriptions = [], this.schema = {
      id: A.schemaId,
      type: "array",
      title: r("keybindings.json.title", "Keybindings configuration"),
      allowTrailingCommas: !0,
      allowComments: !0,
      definitions: {
        editorGroupsSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              groups: {
                $ref: "#/definitions/editorGroupsSchema",
                default: [{}, {}]
              },
              size: {
                type: "number",
                default: 0.5
              }
            }
          }
        },
        commandNames: {
          type: "string",
          enum: this.commandsEnum,
          enumDescriptions: this.commandsEnumDescriptions,
          description: r("keybindings.json.command", "Name of the command to execute")
        },
        commandType: {
          anyOf: [
            {
              $ref: "#/definitions/commandNames"
            },
            {
              type: "string",
              enum: this.removalCommandsEnum,
              enumDescriptions: this.commandsEnumDescriptions,
              description: r(
                "keybindings.json.removalCommand",
                "Name of the command to remove keyboard shortcut for"
              )
            },
            {
              type: "string"
            }
          ]
        },
        commandsSchemas: {
          allOf: this.commandsSchemas
        }
      },
      items: {
        required: ["key"],
        type: "object",
        defaultSnippets: [{ body: { key: "$1", command: "$2", when: "$3" } }],
        properties: {
          key: {
            type: "string",
            description: r("keybindings.json.key", "Key or key sequence (separated by space)")
          },
          command: {
            anyOf: [
              {
                if: {
                  type: "array"
                },
                then: {
                  not: {
                    type: "array"
                  },
                  errorMessage: r(
                    "keybindings.commandsIsArray",
                    `Incorrect type. Expected "{0}". The field 'command' does not support running multiple commands. Use command 'runCommands' to pass it multiple commands to run.`,
                    "string"
                  )
                },
                else: {
                  $ref: "#/definitions/commandType"
                }
              },
              {
                $ref: "#/definitions/commandType"
              }
            ]
          },
          when: {
            type: "string",
            description: r("keybindings.json.when", "Condition when the key is active.")
          },
          args: {
            description: r("keybindings.json.args", "Arguments to pass to the command to execute.")
          }
        },
        $ref: "#/definitions/commandsSchemas"
      }
    }, this.schemaRegistry = R.as(ct.JSONContribution), this.schemaRegistry.registerSchema(A.schemaId, this.schema);
  }
  updateSchema(e) {
    this.commandsSchemas.length = 0, this.commandsEnum.length = 0, this.removalCommandsEnum.length = 0, this.commandsEnumDescriptions.length = 0;
    const t = /* @__PURE__ */ new Set(), n = (s, d) => {
      /^_/.test(s) || t.has(s) || (t.add(s), this.commandsEnum.push(s), this.commandsEnumDescriptions.push(d), this.removalCommandsEnum.push(`-${s}`));
    }, i = ut.getCommands();
    for (const [s, d] of i) {
      const u = d.description;
      if (n(s, u ? u.description : void 0), !u || !u.args || u.args.length !== 1 || !u.args[0].schema)
        continue;
      const m = u.args[0].schema, l = typeof u.args[0].isOptional < "u" ? !u.args[0].isOptional : Array.isArray(m.required) && m.required.length > 0, a = {
        if: {
          required: ["command"],
          properties: {
            command: { const: s }
          }
        },
        then: {
          required: [].concat(l ? ["args"] : []),
          properties: {
            args: m
          }
        }
      };
      this.commandsSchemas.push(a);
    }
    const o = B.getCommands();
    for (const s of o.keys())
      n(s);
    this.commandsSchemas.push(...e), this.schemaRegistry.notifySchemaChanged(A.schemaId);
  }
}
A.schemaId = "vscode://schemas/keybindings";
let z = class extends gt {
  get activeTextEditorControl() {
    return this.editorService.activeTextEditorControl;
  }
  get defaultFilterValue() {
    if (this.configuration.preserveInput)
      return bt.LAST;
  }
  constructor(e, t, n, i, o, s, d, u, m, l, a, y) {
    super({
      showAlias: !Ct.isDefaultVariant(),
      noResultsPick: {
        label: r("noCommandResults", "No matching commands"),
        commandId: ""
      }
    }, i, o, s, d, u), this.editorService = e, this.menuService = t, this.extensionService = n, this.configurationService = m, this.editorGroupService = l, this.preferencesService = a, this.productService = y, this.extensionRegistrationRace = Promise.race([
      Kt(800),
      this.extensionService.whenInstalledExtensionsRegistered()
    ]), this._register(m.onDidChangeConfiguration((c) => this.updateSuggestedCommandIds(c))), this.updateSuggestedCommandIds();
  }
  get configuration() {
    const e = this.configurationService.getValue().workbench.commandPalette;
    return {
      preserveInput: e.preserveInput,
      experimental: e.experimental
    };
  }
  updateSuggestedCommandIds(e) {
    var i;
    if (e && !e.affectsConfiguration("workbench.commandPalette.experimental.suggestCommands"))
      return;
    const n = this.configuration.experimental.suggestCommands && ((i = this.productService.commandPaletteSuggestedCommandIds) != null && i.length) ? new Set(this.productService.commandPaletteSuggestedCommandIds) : void 0;
    this.options.suggestedCommandIds = n;
  }
  async getCommandPicks(e) {
    return await this.extensionRegistrationRace, e.isCancellationRequested ? [] : [
      ...this.getCodeEditorCommandPicks(),
      ...this.getGlobalCommandPicks()
    ].map((t) => ({
      ...t,
      buttons: [{
        iconClass: Me.asClassName(_t.gear),
        tooltip: r("configure keybinding", "Configure Keybinding")
      }],
      trigger: () => (this.preferencesService.openGlobalKeybindingSettings(!1, { query: `@command:${t.commandId}` }), St.CLOSE_PICKER)
    }));
  }
  getGlobalCommandPicks() {
    var o, s;
    const e = [], t = ((o = this.editorService.activeEditorPane) == null ? void 0 : o.scopedContextKeyService) || this.editorGroupService.activeGroup.scopedContextKeyService, n = this.menuService.createMenu(g.CommandPalette, t), i = n.getActions().reduce((d, [, u]) => [...d, ...u], []).filter((d) => d instanceof kt && d.enabled);
    for (const d of i) {
      let u = (typeof d.item.title == "string" ? d.item.title : d.item.title.value) || d.item.id;
      const m = typeof d.item.category == "string" ? d.item.category : (s = d.item.category) == null ? void 0 : s.value;
      m && (u = r("commandWithCategory", "{0}: {1}", m, u));
      const l = typeof d.item.title != "string" ? d.item.title.original : void 0, a = m && d.item.category && typeof d.item.category != "string" ? d.item.category.original : void 0, y = l && m ? a ? `${a}: ${l}` : `${m}: ${l}` : l;
      e.push({
        commandId: d.item.id,
        commandAlias: y,
        label: vt(u)
      });
    }
    return n.dispose(), e;
  }
};
z = J([
  C(0, lt),
  C(1, ht),
  C(2, Re),
  C(3, Ne),
  C(4, Be),
  C(5, ce),
  C(6, Pe),
  C(7, yt),
  C(8, Ye),
  C(9, mt),
  C(10, ft),
  C(11, pt)
], z);
class he extends wt {
  constructor() {
    super({
      id: he.ID,
      title: { value: r("showTriggerActions", "Show All Commands"), original: "Show All Commands" },
      keybinding: {
        weight: 200,
        when: void 0,
        primary: It ? void 0 : 3118,
        secondary: [59]
      },
      f1: !0
    });
  }
  async run(e) {
    e.get(Lt).quickAccess.show(z.PREFIX);
  }
}
he.ID = "workbench.action.showCommands";
function zt(h) {
  const e = h, t = {};
  for (const n in e) {
    const i = e[n];
    if (i.length) {
      const o = i[0], s = i[1], d = i[2], u = i[3], m = Number(i[4]), l = i.length === 6 ? i[5] : void 0;
      t[n] = {
        value: o,
        vkey: l,
        withShift: s,
        withAltGr: d,
        withShiftAltGr: u,
        valueIsDeadKey: (m & 1) > 0,
        withShiftIsDeadKey: (m & 2) > 0,
        withAltGrIsDeadKey: (m & 4) > 0,
        withShiftAltGrIsDeadKey: (m & 8) > 0
      };
    } else
      t[n] = {
        value: "",
        valueIsDeadKey: !1,
        withShift: "",
        withShiftIsDeadKey: !1,
        withAltGr: "",
        withAltGrIsDeadKey: !1,
        withShiftAltGr: "",
        withShiftAltGrIsDeadKey: !1
      };
  }
  return t;
}
class X {
  constructor(e, t, n, i) {
    this.layout = e, this.secondaryLayouts = t, this.mapping = zt(n), this.isUserKeyboardLayout = !!i, this.layout.isUserKeyboardLayout = !!i;
  }
  static createKeyboardLayoutFromDebugInfo(e, t, n) {
    const i = new X(e, [], {}, !0);
    return i.mapping = t, i;
  }
  update(e) {
    this.layout = e.layout, this.secondaryLayouts = e.secondaryLayouts, this.mapping = e.mapping, this.isUserKeyboardLayout = e.isUserKeyboardLayout, this.layout.isUserKeyboardLayout = e.isUserKeyboardLayout;
  }
  getScore(e) {
    let t = 0;
    for (const n in e) {
      if (ie && (n === "Backslash" || n === "KeyQ") || xt && (n === "Backspace" || n === "Escape"))
        continue;
      const i = this.mapping[n];
      i === void 0 && (t -= 1);
      const o = e[n];
      i && o && i.value !== o.value && (t -= 1);
    }
    return t;
  }
  equal(e) {
    return this.isUserKeyboardLayout !== e.isUserKeyboardLayout || Y(this.layout) !== Y(e.layout) ? !1 : this.fuzzyEqual(e.mapping);
  }
  fuzzyEqual(e) {
    for (const t in e) {
      if (ie && (t === "Backslash" || t === "KeyQ"))
        continue;
      if (this.mapping[t] === void 0)
        return !1;
      const n = this.mapping[t], i = e[t];
      if (n.value !== i.value)
        return !1;
    }
    return !0;
  }
}
function Jt(h) {
  const e = h.getValue("keyboard"), t = (e == null ? void 0 : e.dispatch) === "keyCode" ? 1 : 0, n = !!(e != null && e.mapAltGrToCtrlAlt);
  return { dispatch: t, mapAltGrToCtrlAlt: n };
}
const Ht = R.as(le.Configuration), Qt = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: r("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.dispatch": {
      scope: 1,
      type: "string",
      enum: ["code", "keyCode"],
      default: "code",
      markdownDescription: r(
        "dispatch",
        "Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`."
      ),
      included: w === 2 || w === 3
    },
    "keyboard.mapAltGrToCtrlAlt": {
      scope: 1,
      type: "boolean",
      default: !1,
      markdownDescription: r(
        "mapAltGrToCtrlAlt",
        "Controls if the AltGraph+ modifier should be treated as Ctrl+Alt+."
      ),
      included: w === 1
    }
  }
};
Ht.registerConfiguration(Qt);
class Xt {
  constructor(e) {
    this._actual = e, this._cache = /* @__PURE__ */ new Map();
  }
  dumpDebugInfo() {
    return this._actual.dumpDebugInfo();
  }
  resolveKeyboardEvent(e) {
    return this._actual.resolveKeyboardEvent(e);
  }
  resolveKeybinding(e) {
    const t = e.getHashCode(), n = this._cache.get(t);
    if (!n) {
      const i = this._actual.resolveKeybinding(e);
      return this._cache.set(t, i), i;
    }
    return n;
  }
}
class W extends Ve {
  constructor(e, t) {
    super(1, t), this._mapper = e;
  }
  _getLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getUILabelForKeyCode(e.keyCode);
  }
  _getUSLabelForKeybinding(e) {
    return e.isDuplicateModifierCase() ? "" : _.toString(e.keyCode);
  }
  getUSLabel() {
    return At.toLabel(this._os, this._chords, (e) => this._getUSLabelForKeybinding(e));
  }
  _getAriaLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getAriaLabelForKeyCode(e.keyCode);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorForKeyBinding(e);
  }
  _getUserSettingsLabel(e) {
    if (e.isDuplicateModifierCase())
      return "";
    const t = this._mapper.getUserSettingsLabelForKeyCode(e.keyCode);
    return t && t.toLowerCase();
  }
  _isWYSIWYG(e) {
    return this.__isWYSIWYG(e.keyCode);
  }
  __isWYSIWYG(e) {
    if (e === 15 || e === 16 || e === 17 || e === 18)
      return !0;
    const t = this._mapper.getAriaLabelForKeyCode(e), n = this._mapper.getUserSettingsLabelForKeyCode(e);
    return t === n;
  }
  _getChordDispatch(e) {
    if (e.isModifierKey())
      return null;
    let t = "";
    return e.ctrlKey && (t += "ctrl+"), e.shiftKey && (t += "shift+"), e.altKey && (t += "alt+"), e.metaKey && (t += "meta+"), t += _.toString(e.keyCode), t;
  }
  _getSingleModifierChordDispatch(e) {
    return e.keyCode === 5 && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : e.keyCode === 4 && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : e.keyCode === 6 && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : e.keyCode === 57 && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
  static getProducedCharCode(e, t) {
    return t ? e.ctrlKey && e.shiftKey && e.altKey ? t.withShiftAltGr : e.ctrlKey && e.altKey ? t.withAltGr : e.shiftKey ? t.withShift : t.value : null;
  }
  static getProducedChar(e, t) {
    const n = this.getProducedCharCode(e, t);
    return n === null || n.length === 0 ? " --- " : "  " + n + "  ";
  }
}
class Zt {
  constructor(e, t, n) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = n, this._keyCodeToLabel = [], this._scanCodeToKeyCode = [], this._keyCodeToLabel = [], this._keyCodeExists = [], this._keyCodeToLabel[0] = _.toString(0);
    for (let d = 0; d < 193; d++) {
      const u = v[d];
      u !== -1 && (this._scanCodeToKeyCode[d] = u, this._keyCodeToLabel[u] = _.toString(u), this._keyCodeExists[u] = !0);
    }
    const i = [];
    let o = !1;
    this._codeInfo = [];
    for (const d in t)
      if (t.hasOwnProperty(d)) {
        const u = S.toEnum(d);
        if (u === 0)
          continue;
        const m = t[d], l = v[u];
        if (l !== -1) {
          const K = _e[m.vkey] || 0;
          if (K === 0 || l === K || u !== 134)
            continue;
        }
        const a = m.value, y = m.withShift, c = m.withAltGr, p = m.withShiftAltGr, f = _e[m.vkey] || 0, b = {
          scanCode: u,
          keyCode: f,
          value: a,
          withShift: y,
          withAltGr: c,
          withShiftAltGr: p
        };
        if (this._codeInfo[u] = b, this._scanCodeToKeyCode[u] = f, f === 0)
          continue;
        if (this._keyCodeExists[f] = !0, a.length === 0)
          this._keyCodeToLabel[f] = null;
        else if (a.length > 1)
          this._keyCodeToLabel[f] = a;
        else {
          const K = a.charCodeAt(0);
          if (K >= 97 && K <= 122) {
            const L = 65 + (K - 97);
            i[L] = !0, o = !0, this._keyCodeToLabel[f] = String.fromCharCode(65 + (K - 97));
          } else
            K >= 65 && K <= 90 ? (i[K] = !0, o = !0, this._keyCodeToLabel[f] = a) : this._keyCodeToLabel[f] = a;
        }
      }
    const s = (d, u) => {
      i[d] || (this._keyCodeToLabel[u] = String.fromCharCode(d));
    };
    if (s(65, 31), s(66, 32), s(67, 33), s(68, 34), s(69, 35), s(70, 36), s(71, 37), s(72, 38), s(73, 39), s(74, 40), s(75, 41), s(76, 42), s(77, 43), s(78, 44), s(79, 45), s(80, 46), s(81, 47), s(82, 48), s(83, 49), s(84, 50), s(85, 51), s(86, 52), s(87, 53), s(88, 54), s(89, 55), s(90, 56), !o) {
      const d = (u, m) => {
        this._keyCodeToLabel[u] = String.fromCharCode(m);
      };
      d(80, 59), d(81, 61), d(82, 44), d(83, 45), d(84, 46), d(85, 47), d(86, 96), d(87, 91), d(88, 92), d(89, 93), d(90, 39);
    }
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let n = 0;
    e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < 193; i++) {
      if (v[i] !== -1 && t.indexOf(i) === -1)
        continue;
      n % 6 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    |          UI label         |        User settings       | WYSIWYG |"), e.push("-----------------------------------------------------------------------------------------------------------------------------------------")), n++;
      const o = this._codeInfo[i], s = S.toString(i), d = [0, 2, 5, 7];
      for (const u of d) {
        const m = !!(u & 1), l = !!(u & 2), a = !!(u & 4), y = new x(m, l, a, !1, i), c = this._resolveChord(y), p = c ? _.toString(c.keyCode) : null, f = c ? new W(this, [c]) : null, b = `${m ? "Ctrl+" : ""}${l ? "Shift+" : ""}${a ? "Alt+" : ""}${s}`, K = f ? f.getAriaLabel() : null, L = K ? K.replace(/Control\+/, "Ctrl+") : null, ye = f ? f.getUserSettingsLabel() : null, G = W.getProducedChar(y, o), D = p ? `${m ? "Ctrl+" : ""}${l ? "Shift+" : ""}${a ? "Alt+" : ""}${p}` : null, Z = (f ? f.isWYSIWYG() : !1) ? "       " : "   NO  ";
        e.push(`| ${this._leftPad(b, 30)} | ${G} | ${this._leftPad(D, 25)} | ${this._leftPad(L, 25)} |  ${this._leftPad(ye, 25)} | ${Z} |`);
      }
      e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  getUILabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getAriaLabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getUserSettingsLabelForKeyCode(e) {
    return this._isUSStandard ? _.toUserSettingsUS(e) : _.toUserSettingsGeneral(e);
  }
  getElectronAcceleratorForKeyBinding(e) {
    return _.toElectronAccelerator(e.keyCode);
  }
  _getLabelForKeyCode(e) {
    return this._keyCodeToLabel[e] || _.toString(0);
  }
  resolveKeyboardEvent(e) {
    const t = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, n = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, i = new T(
      t,
      e.shiftKey,
      n,
      e.metaKey,
      e.keyCode
    );
    return new W(this, [i]);
  }
  _resolveChord(e) {
    if (!e)
      return null;
    if (e instanceof T)
      return this._keyCodeExists[e.keyCode] ? e : null;
    const t = this._scanCodeToKeyCode[e.scanCode] || 0;
    return t === 0 || !this._keyCodeExists[t] ? null : new T(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, t);
  }
  resolveKeybinding(e) {
    const t = Tt(e.chords.map((n) => this._resolveChord(n)));
    return t.length > 0 ? [new W(this, t)] : [];
  }
}
const P = [];
class Te extends Ve {
  constructor(e, t, n) {
    super(t, n), this._mapper = e;
  }
  _getLabel(e) {
    return this._mapper.getUILabelForScanCodeChord(e);
  }
  _getAriaLabel(e) {
    return this._mapper.getAriaLabelForScanCodeChord(e);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorLabelForScanCodeChord(e);
  }
  _getUserSettingsLabel(e) {
    return this._mapper.getUserSettingsLabelForScanCodeChord(e);
  }
  _isWYSIWYG(e) {
    if (!e || v[e.scanCode] !== -1)
      return !0;
    const t = this._mapper.getAriaLabelForScanCodeChord(e), n = this._mapper.getUserSettingsLabelForScanCodeChord(e);
    return !t && !n ? !0 : !t || !n ? !1 : t.toLowerCase() === n.toLowerCase();
  }
  _getChordDispatch(e) {
    return this._mapper.getDispatchStrForScanCodeChord(e);
  }
  _getSingleModifierChordDispatch(e) {
    return (e.scanCode === 157 || e.scanCode === 161) && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : (e.scanCode === 159 || e.scanCode === 163) && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : (e.scanCode === 158 || e.scanCode === 162) && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : (e.scanCode === 160 || e.scanCode === 164) && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
}
class U {
  constructor(e, t, n, i) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.scanCode = i;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${S.toString(this.scanCode)}`;
  }
  equals(e) {
    return this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.scanCode === e.scanCode;
  }
  getProducedCharCode(e) {
    return e ? this.ctrlKey && this.shiftKey && this.altKey ? e.withShiftAltGr : this.ctrlKey && this.altKey ? e.withAltGr : this.shiftKey ? e.withShift : e.value : "";
  }
  getProducedChar(e) {
    const t = k.getCharCode(this.getProducedCharCode(e));
    return t === 0 ? " --- " : t >= 768 && t <= 879 ? "U+" + t.toString(16) : "  " + String.fromCharCode(t) + "  ";
  }
}
class re {
  constructor(e, t, n, i) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.keyCode = i;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${_.toString(this.keyCode)}`;
  }
}
class en {
  constructor() {
    this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [], this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [];
  }
  registrationComplete() {
    this._moveToEnd(56), this._moveToEnd(106);
  }
  _moveToEnd(e) {
    for (let t = 0; t < 8; t++) {
      const n = this._scanCodeToKeyCode[(e << 3) + t];
      if (n)
        for (let i = 0, o = n.length; i < o; i++) {
          const s = this._keyCodeToScanCode[n[i]];
          if (s.length !== 1)
            for (let d = 0, u = s.length; d < u; d++) {
              const m = s[d];
              if (m >>> 3 === e) {
                for (let a = d + 1; a < u; a++)
                  s[a - 1] = s[a];
                s[u - 1] = m;
              }
            }
        }
    }
  }
  registerIfUnknown(e, t) {
    if (t.keyCode === 0)
      return;
    const n = this._encodeScanCodeCombo(e), i = this._encodeKeyCodeCombo(t), o = t.keyCode >= 21 && t.keyCode <= 30, s = t.keyCode >= 31 && t.keyCode <= 56, d = this._scanCodeToKeyCode[n];
    if (o || s) {
      if (d) {
        for (let u = 0, m = d.length; u < m; u++)
          if (d[u] === i)
            return;
      }
    } else if (d && d.length !== 0)
      return;
    this._scanCodeToKeyCode[n] = this._scanCodeToKeyCode[n] || [], this._scanCodeToKeyCode[n].unshift(i), this._keyCodeToScanCode[i] = this._keyCodeToScanCode[i] || [], this._keyCodeToScanCode[i].unshift(n);
  }
  lookupKeyCodeCombo(e) {
    const t = this._encodeKeyCodeCombo(e), n = this._keyCodeToScanCode[t];
    if (!n || n.length === 0)
      return [];
    const i = [];
    for (let o = 0, s = n.length; o < s; o++) {
      const d = n[o], u = !!(d & 1), m = !!(d & 2), l = !!(d & 4), a = d >>> 3;
      i[o] = new U(u, m, l, a);
    }
    return i;
  }
  lookupScanCodeCombo(e) {
    const t = this._encodeScanCodeCombo(e), n = this._scanCodeToKeyCode[t];
    if (!n || n.length === 0)
      return [];
    const i = [];
    for (let o = 0, s = n.length; o < s; o++) {
      const d = n[o], u = !!(d & 1), m = !!(d & 2), l = !!(d & 4), a = d >>> 3;
      i[o] = new re(u, m, l, a);
    }
    return i;
  }
  guessStableKeyCode(e) {
    if (e >= 36 && e <= 45)
      switch (e) {
        case 36:
          return 22;
        case 37:
          return 23;
        case 38:
          return 24;
        case 39:
          return 25;
        case 40:
          return 26;
        case 41:
          return 27;
        case 42:
          return 28;
        case 43:
          return 29;
        case 44:
          return 30;
        case 45:
          return 21;
      }
    const t = this.lookupScanCodeCombo(new U(!1, !1, !1, e)), n = this.lookupScanCodeCombo(new U(!1, !0, !1, e));
    if (t.length === 1 && n.length === 1) {
      const i = t[0].shiftKey, o = t[0].keyCode, s = n[0].shiftKey, d = n[0].keyCode;
      if (o === d && i !== s)
        return o;
    }
    return -1;
  }
  _encodeScanCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.scanCode);
  }
  _encodeKeyCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode);
  }
  _encode(e, t, n, i) {
    return ((e ? 1 : 0) << 0 | (t ? 1 : 0) << 1 | (n ? 1 : 0) << 2 | i << 3) >>> 0;
  }
}
class k {
  constructor(e, t, n, i) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = n, this._OS = i, this._scanCodeToLabel = [], this._scanCodeToDispatch = [], this._codeInfo = [], this._scanCodeKeyCodeMapper = new en(), this._scanCodeToLabel = [], this._scanCodeToDispatch = [];
    const o = (l, a, y, c, p, f, b, K) => {
      this._scanCodeKeyCodeMapper.registerIfUnknown(new U(
        !!l,
        !!a,
        !!y,
        c
      ), new re(
        !!p,
        !!f,
        !!b,
        K
      ));
    }, s = (l, a, y, c, p) => {
      for (let f = l; f <= 1; f++)
        for (let b = a; b <= 1; b++)
          for (let K = y; K <= 1; K++)
            o(f, b, K, c, f, b, K, p);
    };
    for (let l = 0; l < 193; l++)
      this._scanCodeToLabel[l] = null;
    for (let l = 0; l < 193; l++)
      this._scanCodeToDispatch[l] = null;
    for (let l = 0; l < 193; l++) {
      const a = v[l];
      a !== -1 && (s(0, 0, 0, l, a), this._scanCodeToLabel[l] = _.toString(a), a === 0 || a === 5 || a === 57 || a === 6 || a === 4 ? this._scanCodeToDispatch[l] = null : this._scanCodeToDispatch[l] = `[${S.toString(l)}]`);
    }
    const d = {};
    {
      const l = [];
      for (const y in t)
        if (t.hasOwnProperty(y)) {
          const c = S.toEnum(y);
          if (c === 0 || v[c] !== -1)
            continue;
          const p = t[y], f = k.getCharCode(p.value);
          if (f >= 97 && f <= 122) {
            const b = 65 + (f - 97);
            l[b] = !0;
          }
        }
      const a = (y, c, p, f) => {
        l[y] || (d[S.toString(c)] = {
          value: p,
          withShift: f,
          withAltGr: "",
          withShiftAltGr: ""
        });
      };
      a(65, 10, "a", "A"), a(66, 11, "b", "B"), a(67, 12, "c", "C"), a(68, 13, "d", "D"), a(69, 14, "e", "E"), a(70, 15, "f", "F"), a(71, 16, "g", "G"), a(72, 17, "h", "H"), a(73, 18, "i", "I"), a(74, 19, "j", "J"), a(75, 20, "k", "K"), a(76, 21, "l", "L"), a(77, 22, "m", "M"), a(78, 23, "n", "N"), a(79, 24, "o", "O"), a(80, 25, "p", "P"), a(81, 26, "q", "Q"), a(82, 27, "r", "R"), a(83, 28, "s", "S"), a(84, 29, "t", "T"), a(85, 30, "u", "U"), a(86, 31, "v", "V"), a(87, 32, "w", "W"), a(88, 33, "x", "X"), a(89, 34, "y", "Y"), a(90, 35, "z", "Z");
    }
    const u = [];
    let m = 0;
    for (const l in t)
      if (t.hasOwnProperty(l)) {
        const a = S.toEnum(l);
        if (a === 0 || v[a] !== -1)
          continue;
        this._codeInfo[a] = t[l];
        const y = d[l] || t[l], c = k.getCharCode(y.value), p = k.getCharCode(y.withShift), f = k.getCharCode(y.withAltGr), b = k.getCharCode(y.withShiftAltGr), K = {
          scanCode: a,
          value: c,
          withShift: p,
          withAltGr: f,
          withShiftAltGr: b
        };
        if (u[m++] = K, this._scanCodeToDispatch[a] = `[${S.toString(a)}]`, c >= 97 && c <= 122) {
          const L = 65 + (c - 97);
          this._scanCodeToLabel[a] = String.fromCharCode(L);
        } else
          c >= 65 && c <= 90 ? this._scanCodeToLabel[a] = String.fromCharCode(c) : c ? this._scanCodeToLabel[a] = String.fromCharCode(c) : this._scanCodeToLabel[a] = null;
      }
    for (let l = u.length - 1; l >= 0; l--) {
      const a = u[l], y = a.scanCode, c = a.withShiftAltGr;
      if (c === a.withAltGr || c === a.withShift || c === a.value)
        continue;
      const p = k._charCodeToKb(c);
      if (!p)
        continue;
      const f = p.shiftKey, b = p.keyCode;
      f ? o(1, 1, 1, y, 0, 1, 0, b) : o(1, 1, 1, y, 0, 0, 0, b);
    }
    for (let l = u.length - 1; l >= 0; l--) {
      const a = u[l], y = a.scanCode, c = a.withAltGr;
      if (c === a.withShift || c === a.value)
        continue;
      const p = k._charCodeToKb(c);
      if (!p)
        continue;
      const f = p.shiftKey, b = p.keyCode;
      f ? o(1, 0, 1, y, 0, 1, 0, b) : o(1, 0, 1, y, 0, 0, 0, b);
    }
    for (let l = u.length - 1; l >= 0; l--) {
      const a = u[l], y = a.scanCode, c = a.withShift;
      if (c === a.value)
        continue;
      const p = k._charCodeToKb(c);
      if (!p)
        continue;
      const f = p.shiftKey, b = p.keyCode;
      f ? (o(0, 1, 0, y, 0, 1, 0, b), o(0, 1, 1, y, 0, 1, 1, b), o(1, 1, 0, y, 1, 1, 0, b), o(1, 1, 1, y, 1, 1, 1, b)) : (o(0, 1, 0, y, 0, 0, 0, b), o(0, 1, 0, y, 0, 1, 0, b), o(0, 1, 1, y, 0, 0, 1, b), o(0, 1, 1, y, 0, 1, 1, b), o(1, 1, 0, y, 1, 0, 0, b), o(1, 1, 0, y, 1, 1, 0, b), o(1, 1, 1, y, 1, 0, 1, b), o(1, 1, 1, y, 1, 1, 1, b));
    }
    for (let l = u.length - 1; l >= 0; l--) {
      const a = u[l], y = a.scanCode, c = k._charCodeToKb(a.value);
      if (!c)
        continue;
      const p = c.shiftKey, f = c.keyCode;
      p ? (o(0, 0, 0, y, 0, 1, 0, f), o(0, 0, 1, y, 0, 1, 1, f), o(1, 0, 0, y, 1, 1, 0, f), o(1, 0, 1, y, 1, 1, 1, f)) : (o(0, 0, 0, y, 0, 0, 0, f), o(0, 0, 1, y, 0, 0, 1, f), o(0, 1, 0, y, 0, 1, 0, f), o(0, 1, 1, y, 0, 1, 1, f), o(1, 0, 0, y, 1, 0, 0, f), o(1, 0, 1, y, 1, 0, 1, f), o(1, 1, 0, y, 1, 1, 0, f), o(1, 1, 1, y, 1, 1, 1, f));
    }
    s(0, 0, 0, 36, 22), s(0, 0, 0, 37, 23), s(0, 0, 0, 38, 24), s(0, 0, 0, 39, 25), s(0, 0, 0, 40, 26), s(0, 0, 0, 41, 27), s(0, 0, 0, 42, 28), s(0, 0, 0, 43, 29), s(0, 0, 0, 44, 30), s(0, 0, 0, 45, 21), this._scanCodeKeyCodeMapper.registrationComplete();
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let n = 0;
    e.push(`isUSStandard: ${this._isUSStandard}`), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < 193; i++) {
      if (v[i] !== -1 && t.indexOf(i) === -1)
        continue;
      n % 4 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    | Pri |          UI label         |         User settings          |    Electron accelerator   |       Dispatching string       | WYSIWYG |"), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")), n++;
      const o = this._codeInfo[i];
      for (let s = 0; s < 8; s++) {
        const d = !!(s & 1), u = !!(s & 2), m = !!(s & 4), l = new U(d, u, m, i), a = this.resolveKeyboardEvent({
          _standardKeyboardEventBrand: !0,
          ctrlKey: l.ctrlKey,
          shiftKey: l.shiftKey,
          altKey: l.altKey,
          metaKey: !1,
          altGraphKey: !1,
          keyCode: -1,
          code: S.toString(i)
        }), y = l.toString(), c = l.getProducedChar(o), p = a.getAriaLabel(), f = p ? p.replace(/Control\+/, "Ctrl+") : null, b = a.getUserSettingsLabel(), K = a.getElectronAccelerator(), L = a.getDispatchChords()[0], G = (a ? a.isWYSIWYG() : !1) ? "       " : "   NO  ", D = this._scanCodeKeyCodeMapper.lookupScanCodeCombo(l);
        if (D.length === 0)
          e.push(`| ${this._leftPad(y, 30)} | ${c} | ${this._leftPad("", 25)} | ${this._leftPad("", 3)} | ${this._leftPad(f, 25)} | ${this._leftPad(b, 30)} | ${this._leftPad(K, 25)} | ${this._leftPad(L, 30)} | ${G} |`);
        else
          for (let E = 0, Z = D.length; E < Z; E++) {
            const me = D[E];
            let $;
            const ee = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(me);
            if (ee.length === 1)
              $ = "";
            else {
              let pe = -1;
              for (let O = 0; O < ee.length; O++)
                if (ee[O].equals(l)) {
                  pe = O + 1;
                  break;
                }
              $ = String(pe);
            }
            const fe = me.toString();
            E === 0 ? e.push(`| ${this._leftPad(y, 30)} | ${c} | ${this._leftPad(fe, 25)} | ${this._leftPad($, 3)} | ${this._leftPad(f, 25)} | ${this._leftPad(b, 30)} | ${this._leftPad(K, 25)} | ${this._leftPad(L, 30)} | ${G} |`) : e.push(`| ${this._leftPad("", 30)} |       | ${this._leftPad(fe, 25)} | ${this._leftPad($, 3)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} |         |`);
          }
      }
      e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  keyCodeChordToScanCodeChord(e) {
    if (e.keyCode === 3)
      return [new x(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        46
      )];
    const t = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(new re(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode)), n = [];
    for (let i = 0, o = t.length; i < o; i++) {
      const s = t[i];
      n[i] = new x(
        s.ctrlKey,
        s.shiftKey,
        s.altKey,
        e.metaKey,
        s.scanCode
      );
    }
    return n;
  }
  getUILabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    if (this._OS === 2)
      switch (e.scanCode) {
        case 86:
          return "←";
        case 88:
          return "↑";
        case 85:
          return "→";
        case 87:
          return "↓";
      }
    return this._scanCodeToLabel[e.scanCode];
  }
  getAriaLabelForScanCodeChord(e) {
    return e ? e.isDuplicateModifierCase() ? "" : this._scanCodeToLabel[e.scanCode] : null;
  }
  getDispatchStrForScanCodeChord(e) {
    const t = this._scanCodeToDispatch[e.scanCode];
    if (!t)
      return null;
    let n = "";
    return e.ctrlKey && (n += "ctrl+"), e.shiftKey && (n += "shift+"), e.altKey && (n += "alt+"), e.metaKey && (n += "meta+"), n += t, n;
  }
  getUserSettingsLabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    const t = v[e.scanCode];
    if (t !== -1)
      return _.toUserSettingsUS(t).toLowerCase();
    const n = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    if (n !== -1) {
      const i = this.keyCodeChordToScanCodeChord(new T(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        n
      ));
      for (let o = 0, s = i.length; o < s; o++)
        if (i[o].scanCode === e.scanCode)
          return _.toUserSettingsUS(n).toLowerCase();
    }
    return this._scanCodeToDispatch[e.scanCode];
  }
  getElectronAcceleratorLabelForScanCodeChord(e) {
    if (!e)
      return null;
    const t = v[e.scanCode];
    if (t !== -1)
      return _.toElectronAccelerator(t);
    const n = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    return this._OS === 3 && !this._isUSStandard && (n === 80 || n === 81 || n === 82 || n === 83 || n === 84 || n === 85 || n === 86 || n === 87 || n === 88 || n === 89) ? null : n !== -1 ? _.toElectronAccelerator(n) : null;
  }
  _toResolvedKeybinding(e) {
    if (e.length === 0)
      return [];
    const t = [];
    return this._generateResolvedKeybindings(e, 0, [], t), t;
  }
  _generateResolvedKeybindings(e, t, n, i) {
    const o = e[t], s = t === e.length - 1;
    for (let d = 0, u = o.length; d < u; d++) {
      const m = [...n, o[d]];
      s ? i.push(new Te(this, this._OS, m)) : this._generateResolvedKeybindings(e, t + 1, m, i);
    }
  }
  resolveKeyboardEvent(e) {
    let t = S.toEnum(e.code);
    t === 94 && (t = 46);
    const n = e.keyCode;
    if (n === 15 || n === 16 || n === 17 || n === 18 || n === 20 || n === 19 || n === 14 || n === 13 || n === 12 || n === 11 || n === 1) {
      const d = Se[n];
      d !== -1 && (t = d);
    } else if ((t === 95 || t === 96 || t === 97 || t === 98 || t === 99 || t === 100 || t === 101 || t === 102 || t === 103 || t === 104 || t === 105) && n >= 0) {
      const d = Se[n];
      d !== -1 && (t = d);
    }
    const i = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, o = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, s = new x(i, e.shiftKey, o, e.metaKey, t);
    return new Te(this, this._OS, [s]);
  }
  _resolveChord(e) {
    return e ? e instanceof x ? [e] : this.keyCodeChordToScanCodeChord(e) : [];
  }
  resolveKeybinding(e) {
    const t = e.chords.map((n) => this._resolveChord(n));
    return this._toResolvedKeybinding(t);
  }
  static _redirectCharCode(e) {
    switch (e) {
      case 12290:
        return 46;
      case 12300:
        return 91;
      case 12301:
        return 93;
      case 12304:
        return 91;
      case 12305:
        return 93;
      case 65307:
        return 59;
      case 65292:
        return 44;
    }
    return e;
  }
  static _charCodeToKb(e) {
    return e = this._redirectCharCode(e), e < P.length ? P[e] : null;
  }
  static getCharCode(e) {
    if (e.length === 0)
      return 0;
    const t = e.charCodeAt(0);
    switch (t) {
      case 768:
        return 96;
      case 769:
        return 180;
      case 770:
        return 94;
      case 771:
        return 732;
      case 772:
        return 175;
      case 773:
        return 8254;
      case 774:
        return 728;
      case 775:
        return 729;
      case 776:
        return 168;
      case 778:
        return 730;
      case 779:
        return 733;
    }
    return t;
  }
}
(function() {
  function h(e, t, n) {
    for (let i = P.length; i < e; i++)
      P[i] = null;
    P[e] = { keyCode: t, shiftKey: n };
  }
  for (let e = 65; e <= 90; e++)
    h(e, 31 + (e - 65), !0);
  for (let e = 97; e <= 122; e++)
    h(e, 31 + (e - 97), !1);
  h(59, 80, !1), h(58, 80, !0), h(61, 81, !1), h(43, 81, !0), h(44, 82, !1), h(60, 82, !0), h(45, 83, !1), h(95, 83, !0), h(46, 84, !1), h(62, 84, !0), h(47, 85, !1), h(63, 85, !0), h(96, 86, !1), h(126, 86, !0), h(91, 87, !1), h(123, 87, !0), h(92, 88, !1), h(124, 88, !0), h(93, 89, !1), h(125, 89, !0), h(39, 90, !1), h(34, 90, !0);
})();
function tn(h) {
  switch (h) {
    case "./keyboardLayouts/layout.contribution.darwin.js":
      return import("./layout.contribution.darwin-93445c57.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.linux.js":
      return import("./layout.contribution.linux-6a51d9a5.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.win.js":
      return import("./layout.contribution.win-4d436b82.js").then((e) => e.default ?? e);
    default:
      return new Promise(function(e, t) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          t.bind(null, new Error("Unknown variable dynamic import: " + h))
        );
      });
  }
}
class nn extends H {
  get activeKeymap() {
    return this._activeKeymapInfo;
  }
  get keymapInfos() {
    return this._keymapInfos;
  }
  get activeKeyboardLayout() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.layout) ?? null : null;
  }
  get activeKeyMapping() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.mapping) ?? null : null;
  }
  get keyboardLayouts() {
    return this._keymapInfos.map((e) => e.layout);
  }
  constructor(e) {
    super(), this._configurationService = e, this._onDidChangeKeyboardMapper = new Q(), this.onDidChangeKeyboardMapper = this._onDidChangeKeyboardMapper.event, this._keyboardMapper = null, this._initialized = !1, this._keymapInfos = [], this._mru = [], this._activeKeymapInfo = null, navigator.keyboard && navigator.keyboard.addEventListener && navigator.keyboard.addEventListener("layoutchange", () => {
      this._getBrowserKeyMapping().then((t) => {
        this.isKeyMappingActive(t) || this.setLayoutFromBrowserAPI();
      });
    }), this._register(this._configurationService.onDidChangeConfiguration((t) => {
      t.affectsConfiguration("keyboard") && (this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire());
    }));
  }
  registerKeyboardLayout(e) {
    this._keymapInfos.push(e), this._mru = this._keymapInfos;
  }
  removeKeyboardLayout(e) {
    let t = this._mru.indexOf(e);
    this._mru.splice(t, 1), t = this._keymapInfos.indexOf(e), this._keymapInfos.splice(t, 1);
  }
  getMatchedKeymapInfo(e) {
    if (!e)
      return null;
    const t = this.getUSStandardLayout();
    if (t) {
      let n = t.getScore(e);
      if (n === 0)
        return {
          result: t,
          score: 0
        };
      let i = t;
      for (let o = 0; o < this._mru.length; o++) {
        const s = this._mru[o].getScore(e);
        if (s > n) {
          if (s === 0)
            return {
              result: this._mru[o],
              score: 0
            };
          n = s, i = this._mru[o];
        }
      }
      return {
        result: i,
        score: n
      };
    }
    for (let n = 0; n < this._mru.length; n++)
      if (this._mru[n].fuzzyEqual(e))
        return {
          result: this._mru[n],
          score: 0
        };
    return null;
  }
  getUSStandardLayout() {
    const e = this._mru.filter((t) => t.layout.isUSStandard);
    return e.length ? e[0] : null;
  }
  isKeyMappingActive(e) {
    return this._activeKeymapInfo && e && this._activeKeymapInfo.fuzzyEqual(e);
  }
  setUSKeyboardLayout() {
    this._activeKeymapInfo = this.getUSStandardLayout();
  }
  setActiveKeyMapping(e) {
    let t = !1;
    const n = this.getMatchedKeymapInfo(e);
    if (n && (this._activeKeymapInfo ? e && n.result.getScore(e) > this._activeKeymapInfo.getScore(e) && (this._activeKeymapInfo = n.result, t = !0) : (this._activeKeymapInfo = n.result, t = !0)), this._activeKeymapInfo || (this._activeKeymapInfo = this.getUSStandardLayout(), t = !0), !this._activeKeymapInfo || !t)
      return;
    const i = this._mru.indexOf(this._activeKeymapInfo);
    this._mru.splice(i, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo);
  }
  setActiveKeymapInfo(e) {
    this._activeKeymapInfo = e;
    const t = this._mru.indexOf(this._activeKeymapInfo);
    t !== 0 && (this._mru.splice(t, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo));
  }
  setLayoutFromBrowserAPI() {
    this._updateKeyboardLayoutAsync(this._initialized);
  }
  _updateKeyboardLayoutAsync(e, t) {
    e && this._getBrowserKeyMapping(t).then((n) => {
      this.isKeyMappingActive(n) || this.setActiveKeyMapping(n);
    });
  }
  getKeyboardMapper() {
    const e = Jt(this._configurationService);
    return e.dispatch === 1 || !this._initialized || !this._activeKeymapInfo ? new ke(e.mapAltGrToCtrlAlt, w) : (this._keyboardMapper || (this._keyboardMapper = new Xt(
      He._createKeyboardMapper(this._activeKeymapInfo, e.mapAltGrToCtrlAlt)
    )), this._keyboardMapper);
  }
  validateCurrentKeyboardMapping(e) {
    !this._initialized || this._validateCurrentKeyboardMapping(e) || this._updateKeyboardLayoutAsync(!0, e);
  }
  setKeyboardLayout(e) {
    const t = this.keymapInfos.filter((n) => Y(n.layout) === e);
    t.length > 0 && this.setActiveKeymapInfo(t[0]);
  }
  _setKeyboardData(e) {
    this._initialized = !0, this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire();
  }
  static _createKeyboardMapper(e, t) {
    const n = e.mapping, i = !!e.layout.isUSStandard;
    return w === 1 ? new Zt(i, n, t) : Object.keys(n).length === 0 ? new ke(t, w) : new k(i, n, t, w);
  }
  _validateCurrentKeyboardMapping(e) {
    if (!this._initialized)
      return !0;
    const t = e, n = this._activeKeymapInfo;
    if (!n || t.browserEvent.key === "Dead" || t.browserEvent.isComposing)
      return !0;
    const i = n.mapping[t.code];
    if (!i)
      return !1;
    if (i.value === "")
      return (e.ctrlKey || e.metaKey) && setTimeout(() => {
        this._getBrowserKeyMapping().then((d) => {
          this.isKeyMappingActive(d) || this.setLayoutFromBrowserAPI();
        });
      }, 350), !0;
    const o = t.altKey && t.shiftKey ? i.withShiftAltGr : t.altKey ? i.withAltGr : t.shiftKey ? i.withShift : i.value, s = t.altKey && t.shiftKey && i.withShiftAltGrIsDeadKey || t.altKey && i.withAltGrIsDeadKey || t.shiftKey && i.withShiftIsDeadKey || i.valueIsDeadKey;
    return !(s && t.browserEvent.key !== "Dead" || !s && t.browserEvent.key !== o);
  }
  async _getBrowserKeyMapping(e) {
    if (navigator.keyboard)
      try {
        return navigator.keyboard.getLayoutMap().then((t) => {
          const n = {};
          for (const i of t)
            n[i[0]] = {
              value: i[1],
              withShift: "",
              withAltGr: "",
              withShiftAltGr: ""
            };
          return n;
        });
      } catch {
      }
    else if (e && !e.shiftKey && !e.altKey && !e.metaKey && !e.metaKey) {
      const t = {}, n = e;
      return t[n.browserEvent.code] = {
        value: n.browserEvent.key,
        withShift: "",
        withAltGr: "",
        withShiftAltGr: ""
      }, this.getMatchedKeymapInfo(t) ? t : null;
    }
    return null;
  }
}
class He extends nn {
  constructor(e, t, n, i) {
    super(e), tn("./keyboardLayouts/layout.contribution." + (ie ? "win" : Oe ? "darwin" : "linux") + ".js").then((s) => {
      const d = s.KeyboardLayoutContribution.INSTANCE.layoutInfos;
      this._keymapInfos.push(...d.map((u) => new X(
        u.layout,
        u.secondaryLayouts,
        u.mapping,
        u.isUserKeyboardLayout
      ))), this._mru = this._keymapInfos, this._initialized = !0, this.setLayoutFromBrowserAPI();
    });
  }
}
class on extends H {
  get keyboardLayout() {
    return this._keyboardLayout;
  }
  constructor(e, t) {
    super(), this.keyboardLayoutResource = e, this.fileService = t, this._onDidChange = this._register(new Q()), this.onDidChange = this._onDidChange.event, this._keyboardLayout = null, this.reloadConfigurationScheduler = this._register(new Fe(() => this.reload().then((n) => {
      n && this._onDidChange.fire();
    }), 50)), this._register(qe.filter(this.fileService.onDidFilesChange, (n) => n.contains(this.keyboardLayoutResource))(() => this.reloadConfigurationScheduler.schedule()));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const e = this._keyboardLayout;
    try {
      const t = await this.fileService.readFile(this.keyboardLayoutResource), n = We(t.value.toString());
      if (Mt(n) === "object") {
        const i = n.layout, o = n.rawMapping;
        this._keyboardLayout = X.createKeyboardLayoutFromDebugInfo(i, o, !0);
      } else
        this._keyboardLayout = null;
    } catch {
      this._keyboardLayout = null;
    }
    return e ? !je(e, this._keyboardLayout) : !0;
  }
}
let ae = class extends H {
  constructor(e, t, n, i, o, s) {
    super(), this.configurationService = s, this._onDidChangeKeyboardLayout = new Q(), this.onDidChangeKeyboardLayout = this._onDidChangeKeyboardLayout.event;
    const u = s.getValue("keyboard").layout;
    this._keyboardLayoutMode = u ?? "autodetect", this._factory = new He(s, n, i, o), this._register(this._factory.onDidChangeKeyboardMapper(() => {
      this._onDidChangeKeyboardLayout.fire();
    })), u && u !== "autodetect" && this._factory.setKeyboardLayout(u), this._register(s.onDidChangeConfiguration((m) => {
      if (m.affectsConfiguration("keyboard.layout")) {
        const a = s.getValue("keyboard").layout;
        this._keyboardLayoutMode = a, a === "autodetect" ? this._factory.setLayoutFromBrowserAPI() : this._factory.setKeyboardLayout(a);
      }
    })), this._userKeyboardLayout = new on(e.keyboardLayoutResource, t), this._userKeyboardLayout.initialize().then(() => {
      this._userKeyboardLayout.keyboardLayout && (this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched());
    }), this._register(this._userKeyboardLayout.onDidChange(() => {
      const m = this._factory.keymapInfos.filter((l) => l.isUserKeyboardLayout);
      m.length ? this._userKeyboardLayout.keyboardLayout ? m[0].update(this._userKeyboardLayout.keyboardLayout) : this._factory.removeKeyboardLayout(m[0]) : this._userKeyboardLayout.keyboardLayout && this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched();
    }));
  }
  setUserKeyboardLayoutIfMatched() {
    const t = this.configurationService.getValue("keyboard").layout;
    t && this._userKeyboardLayout.keyboardLayout && Y(this._userKeyboardLayout.keyboardLayout.layout) === t && this._factory.activeKeymap && (this._userKeyboardLayout.keyboardLayout.equal(this._factory.activeKeymap) || this._factory.setActiveKeymapInfo(this._userKeyboardLayout.keyboardLayout));
  }
  getKeyboardMapper() {
    return this._factory.getKeyboardMapper();
  }
  getCurrentKeyboardLayout() {
    return this._factory.activeKeyboardLayout;
  }
  getAllKeyboardLayouts() {
    return this._factory.keyboardLayouts;
  }
  getRawKeyboardMapping() {
    return this._factory.activeKeyMapping;
  }
  validateCurrentKeyboardMapping(e) {
    this._keyboardLayoutMode === "autodetect" && this._factory.validateCurrentKeyboardMapping(e);
  }
};
ae = J([
  C(0, Dt),
  C(1, ue),
  C(2, Ue),
  C(3, Et),
  C(4, ce),
  C(5, Ye)
], ae);
const sn = R.as(le.Configuration), rn = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: r("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.layout": {
      type: "string",
      default: "autodetect",
      description: r("keyboard.layout.config", "Control the keyboard layout used in web.")
    }
  }
};
sn.registerConfiguration(rn);
let de = class extends Ot(Ft) {
  constructor(e) {
    super(e), this.delegate = e.createInstance(se), this._cachedOverridenResolver = null, this.onDidUpdateKeybindings(() => {
      this._cachedOverridenResolver = null;
    }), this.delegate.onDidUpdateKeybindings(() => {
      this._cachedOverridenResolver = null;
    });
  }
  _getResolver() {
    if (this._cachedOverridenResolver == null) {
      const e = this._toNormalizedKeybindingItems(this._dynamicKeybindings, !1);
      this._cachedOverridenResolver = new $e(
        [...this.delegate._getResolver().getKeybindings()],
        e,
        (t) => this._log(t)
      );
    }
    return this._cachedOverridenResolver;
  }
};
de = J([
  C(0, Ne)
], de);
const an = R.as(Pt.Quickaccess), Ae = an.getQuickAccessProviders().find((h) => h.ctor === Ut);
Ae != null && (Ae.ctor = class extends z {
  get defaultFilterValue() {
  }
  async getCommandPicks(h) {
    return (await super.getCommandPicks(h)).map((e) => (e.buttons = [], e));
  }
});
const dn = R.as(le.Configuration);
dn.registerConfiguration({
  properties: {
    "workbench.commandPalette.history": {
      type: "number",
      description: r(
        "commandHistory",
        "Controls the number of recently used commands to keep in history for the command palette. Set to 0 to disable command history."
      ),
      default: 50,
      minimum: 0
    },
    "workbench.commandPalette.preserveInput": {
      type: "boolean",
      description: r(
        "preserveInput",
        "Controls whether the last typed input to the command palette should be restored when opening it the next time."
      ),
      default: !1
    },
    "workbench.commandPalette.experimental.suggestCommands": {
      type: "boolean",
      description: r(
        "suggestCommands",
        "Controls whether the command palette should have a list of commonly used commands."
      ),
      default: !1
    }
  }
});
async function mn(h) {
  const e = ve.get(Rt);
  await ve.get(ue).writeFile(e.defaultProfile.keybindingsResource, Gt.fromString(h));
}
function fn() {
  return {
    ...$t(),
    [Be.toString()]: new we(de),
    [Ge.toString()]: new we(ae, void 0, !0)
  };
}
export {
  fn as default,
  mn as updateUserKeybindings
};

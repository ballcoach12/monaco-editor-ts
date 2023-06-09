import { D, ax as h, bK as K, N as b, bL as U, bM as j, bN as v, bO as V, aC as z, bP as Q, bQ as X, bR as Y, bS as S, bT as L, bU as T, ah as p, ai as m, bV as Z, b6 as G, bW as J, bX as O, bg as ee, bf as te, _ as B, a as u, bx as _, bY as R, ba as M, e as q, bZ as F, b_ as P, b$ as se, c0 as ie, c1 as k, L as oe, c2 as ne, c3 as ae, c4 as re, c5 as le, c6 as ce, b8 as $, a0 as de, by as he, an as W, c7 as ge, c8 as ue, bC as pe, c9 as me } from "./verifyPrepare-e26a1ce7.js";
var N = globalThis && globalThis.__awaiter || function(w, e, t, s) {
  function r(o) {
    return o instanceof t ? o : new t(function(n) {
      n(o);
    });
  }
  return new (t || (t = Promise))(function(o, n) {
    function c(a) {
      try {
        l(s.next(a));
      } catch (d) {
        n(d);
      }
    }
    function i(a) {
      try {
        l(s.throw(a));
      } catch (d) {
        n(d);
      }
    }
    function l(a) {
      a.done ? o(a.value) : r(a.value).then(c, i);
    }
    l((s = s.apply(w, e || [])).next());
  });
};
class be extends D {
  constructor(e, t, s, r) {
    super(), this.container = e, this.message = t, this.options = r, this.modalElement = this.container.appendChild(h(".monaco-dialog-modal-block.dimmed")), this.shadowElement = this.modalElement.appendChild(h(".dialog-shadow")), this.element = this.shadowElement.appendChild(h(".monaco-dialog-box")), this.element.setAttribute("role", "dialog"), this.element.tabIndex = -1, K(this.element), this.buttonStyles = r.buttonStyles, Array.isArray(s) && s.length > 0 ? this.buttons = s : this.options.disableDefaultAction ? this.buttons = [] : this.buttons = [b("ok", "OK")];
    const o = this.element.appendChild(h(".dialog-buttons-row"));
    this.buttonsContainer = o.appendChild(h(".dialog-buttons"));
    const n = this.element.appendChild(h(".dialog-message-row"));
    if (this.iconElement = n.appendChild(h("#monaco-dialog-icon.dialog-icon")), this.iconElement.setAttribute("aria-label", this.getIconAriaLabel()), this.messageContainer = n.appendChild(h(".dialog-message-container")), this.options.detail || this.options.renderBody) {
      const l = this.messageContainer.appendChild(h(".dialog-message")).appendChild(h("#monaco-dialog-message-text.dialog-message-text"));
      l.innerText = this.message;
    }
    if (this.messageDetailElement = this.messageContainer.appendChild(h("#monaco-dialog-message-detail.dialog-message-detail")), this.options.detail || !this.options.renderBody ? this.messageDetailElement.innerText = this.options.detail ? this.options.detail : t : this.messageDetailElement.style.display = "none", this.options.renderBody) {
      const i = this.messageContainer.appendChild(h("#monaco-dialog-message-body.dialog-message-body"));
      this.options.renderBody(i);
      for (const l of this.messageContainer.querySelectorAll("a"))
        l.tabIndex = 0;
    }
    if (this.options.inputs ? this.inputs = this.options.inputs.map((i) => {
      var l;
      const a = this.messageContainer.appendChild(h(".dialog-message-input")), d = this._register(new U(a, void 0, {
        placeholder: i.placeholder,
        type: (l = i.type) !== null && l !== void 0 ? l : "text",
        inputBoxStyles: r.inputBoxStyles
      }));
      return i.value && (d.value = i.value), d;
    }) : this.inputs = [], this.options.checkboxLabel) {
      const i = this.messageContainer.appendChild(h(".dialog-checkbox-row")), l = this.checkbox = this._register(new j(this.options.checkboxLabel, !!this.options.checkboxChecked, r.checkboxStyles));
      i.appendChild(l.domNode);
      const a = i.appendChild(h(".dialog-checkbox-message"));
      a.innerText = this.options.checkboxLabel, this._register(v(a, V.CLICK, () => l.checked = !l.checked));
    }
    const c = this.element.appendChild(h(".dialog-toolbar-row"));
    this.toolbarContainer = c.appendChild(h(".dialog-toolbar")), this.applyStyles();
  }
  getIconAriaLabel() {
    const e = b("dialogInfoMessage", "Info");
    switch (this.options.type) {
      case "error":
        b("dialogErrorMessage", "Error");
        break;
      case "warning":
        b("dialogWarningMessage", "Warning");
        break;
      case "pending":
        b("dialogPendingMessage", "In Progress");
        break;
    }
    return e;
  }
  updateMessage(e) {
    this.messageDetailElement.innerText = e;
  }
  show() {
    return N(this, void 0, void 0, function* () {
      return this.focusToReturn = document.activeElement, new Promise((e) => {
        z(this.buttonsContainer);
        const t = this.buttonBar = this._register(new Q(this.buttonsContainer)), s = this.rearrangeButtons(this.buttons, this.options.cancelId);
        s.forEach((o, n) => {
          const c = s[n].index === 0, i = this.options.buttonDetails ? this._register(t.addButtonWithDescription(Object.assign({ title: !0, secondary: !c }, this.buttonStyles))) : this._register(t.addButton(Object.assign({ title: !0, secondary: !c }, this.buttonStyles)));
          i.label = X(s[n].label, !0), i instanceof Y && (i.description = this.options.buttonDetails[s[n].index]), this._register(i.onDidClick((l) => {
            l && S.stop(l), e({
              button: s[n].index,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
              values: this.inputs.length > 0 ? this.inputs.map((a) => a.value) : void 0
            });
          }));
        }), this._register(v(window, "keydown", (o) => {
          var n, c;
          const i = new L(o);
          if (i.equals(
            512
            /* KeyMod.Alt */
          ) && i.preventDefault(), i.equals(
            3
            /* KeyCode.Enter */
          )) {
            this.inputs.some((a) => a.hasFocus()) && (S.stop(o), e({
              button: (c = (n = s.find((a) => a.index !== this.options.cancelId)) === null || n === void 0 ? void 0 : n.index) !== null && c !== void 0 ? c : 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0,
              values: this.inputs.length > 0 ? this.inputs.map((a) => a.value) : void 0
            }));
            return;
          }
          if (i.equals(
            10
            /* KeyCode.Space */
          ))
            return;
          let l = !1;
          if (i.equals(
            2
            /* KeyCode.Tab */
          ) || i.equals(
            17
            /* KeyCode.RightArrow */
          ) || i.equals(
            1026
            /* KeyCode.Tab */
          ) || i.equals(
            15
            /* KeyCode.LeftArrow */
          )) {
            const a = [];
            let d = -1;
            if (this.messageContainer) {
              const g = this.messageContainer.querySelectorAll("a");
              for (const f of g)
                a.push(f), f === document.activeElement && (d = a.length - 1);
            }
            for (const g of this.inputs)
              a.push(g), g.hasFocus() && (d = a.length - 1);
            if (this.checkbox && (a.push(this.checkbox), this.checkbox.hasFocus() && (d = a.length - 1)), this.buttonBar)
              for (const g of this.buttonBar.buttons)
                a.push(g), g.hasFocus() && (d = a.length - 1);
            if (i.equals(
              2
              /* KeyCode.Tab */
            ) || i.equals(
              17
              /* KeyCode.RightArrow */
            )) {
              d === -1 && (d = 0);
              const g = (d + 1) % a.length;
              a[g].focus();
            } else {
              d === -1 && (d = a.length);
              let g = d - 1;
              g === -1 && (g = a.length - 1), a[g].focus();
            }
            l = !0;
          }
          l ? S.stop(o, !0) : this.options.keyEventProcessor && this.options.keyEventProcessor(i);
        }, !0)), this._register(v(window, "keyup", (o) => {
          S.stop(o, !0);
          const n = new L(o);
          !this.options.disableCloseAction && n.equals(
            9
            /* KeyCode.Escape */
          ) && e({
            button: this.options.cancelId || 0,
            checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
          });
        }, !0)), this._register(v(this.element, "focusout", (o) => {
          o.relatedTarget && this.element && (T(o.relatedTarget, this.element) || (this.focusToReturn = o.relatedTarget, o.target && (o.target.focus(), S.stop(o, !0))));
        }, !1));
        const r = "codicon-modifier-spin";
        if (this.iconElement.classList.remove(...p.asClassNameArray(m.dialogError), ...p.asClassNameArray(m.dialogWarning), ...p.asClassNameArray(m.dialogInfo), ...p.asClassNameArray(m.loading), r), this.options.icon)
          this.iconElement.classList.add(...p.asClassNameArray(this.options.icon));
        else
          switch (this.options.type) {
            case "error":
              this.iconElement.classList.add(...p.asClassNameArray(m.dialogError));
              break;
            case "warning":
              this.iconElement.classList.add(...p.asClassNameArray(m.dialogWarning));
              break;
            case "pending":
              this.iconElement.classList.add(...p.asClassNameArray(m.loading), r);
              break;
            case "none":
              this.iconElement.classList.add("no-codicon");
              break;
            case "info":
            case "question":
            default:
              this.iconElement.classList.add(...p.asClassNameArray(m.dialogInfo));
              break;
          }
        if (!this.options.disableCloseAction) {
          const o = this._register(new Z(this.toolbarContainer, {})), n = this._register(new G("dialog.close", b("dialogClose", "Close Dialog"), p.asClassName(m.dialogClose), !0, () => N(this, void 0, void 0, function* () {
            e({
              button: this.options.cancelId || 0,
              checkboxChecked: this.checkbox ? this.checkbox.checked : void 0
            });
          })));
          o.push(n, { icon: !0, label: !1 });
        }
        this.applyStyles(), this.element.setAttribute("aria-modal", "true"), this.element.setAttribute("aria-labelledby", "monaco-dialog-icon monaco-dialog-message-text"), this.element.setAttribute("aria-describedby", "monaco-dialog-icon monaco-dialog-message-text monaco-dialog-message-detail monaco-dialog-message-body"), J(this.element), this.inputs.length > 0 ? (this.inputs[0].focus(), this.inputs[0].select()) : s.forEach((o, n) => {
          o.index === 0 && t.buttons[n].focus();
        });
      });
    });
  }
  applyStyles() {
    const e = this.options.dialogStyles, t = e.dialogForeground, s = e.dialogBackground, r = e.dialogShadow ? `0 0px 8px ${e.dialogShadow}` : "", o = e.dialogBorder ? `1px solid ${e.dialogBorder}` : "", n = e.textLinkForeground;
    if (this.shadowElement.style.boxShadow = r, this.element.style.color = t ?? "", this.element.style.backgroundColor = s ?? "", this.element.style.border = o, n)
      for (const i of this.messageContainer.getElementsByTagName("a"))
        i.style.color = n;
    let c;
    switch (this.options.type) {
      case "error":
        c = e.errorIconForeground;
        break;
      case "warning":
        c = e.warningIconForeground;
        break;
      default:
        c = e.infoIconForeground;
        break;
    }
    c && (this.iconElement.style.color = c);
  }
  dispose() {
    super.dispose(), this.modalElement && (this.modalElement.remove(), this.modalElement = void 0), this.focusToReturn && T(this.focusToReturn, document.body) && (this.focusToReturn.focus(), this.focusToReturn = void 0);
  }
  rearrangeButtons(e, t) {
    const s = e.map((r, o) => ({ label: r, index: o }));
    if (e.length < 2)
      return s;
    if (O || ee) {
      if (typeof t == "number" && s[t]) {
        const r = s.splice(t, 1)[0];
        s.splice(1, 0, r);
      }
      s.reverse();
    } else if (te && typeof t == "number" && s[t]) {
      const r = s.splice(t, 1)[0];
      s.push(r);
    }
    return s;
  }
}
let C = class H extends se {
  constructor(e, t, s, r, o, n) {
    super(), this.logService = e, this.layoutService = t, this.keybindingService = s, this.instantiationService = r, this.productService = o, this.clipboardService = n, this.markdownRenderer = this.instantiationService.createInstance(ie, {});
  }
  async prompt(e) {
    this.logService.trace("DialogService#prompt", e.message);
    const t = this.getPromptButtons(e), { button: s, checkboxChecked: r } = await this.doShow(e.type, e.message, t, e.detail, e.cancelButton ? t.length - 1 : -1, e.checkbox, void 0, typeof (e == null ? void 0 : e.custom) == "object" ? e.custom : void 0);
    return this.getPromptResult(e, s, r);
  }
  async confirm(e) {
    this.logService.trace("DialogService#confirm", e.message);
    const t = this.getConfirmationButtons(e), { button: s, checkboxChecked: r } = await this.doShow(e.type ?? "question", e.message, t, e.detail, t.length - 1, e.checkbox, void 0, typeof (e == null ? void 0 : e.custom) == "object" ? e.custom : void 0);
    return { confirmed: s === 0, checkboxChecked: r };
  }
  async input(e) {
    this.logService.trace("DialogService#input", e.message);
    const t = this.getInputButtons(e), { button: s, checkboxChecked: r, values: o } = await this.doShow(e.type ?? "question", e.message, t, e.detail, t.length - 1, e == null ? void 0 : e.checkbox, e.inputs);
    return { confirmed: s === 0, checkboxChecked: r, values: o };
  }
  async about() {
    const e = (o) => b(
      "aboutDetail",
      `Version: {0}
Commit: {1}
Date: {2}
Browser: {3}`,
      this.productService.version || "Unknown",
      this.productService.commit || "Unknown",
      this.productService.date ? `${this.productService.date}${o ? " (" + ce(new Date(this.productService.date), !0) + ")" : ""}` : "Unknown",
      navigator.userAgent
    ), t = e(!0), s = e(!1), { button: r } = await this.doShow(k.Info, this.productService.nameLong, [
      b({ key: "copy", comment: ["&& denotes a mnemonic"] }, "&&Copy"),
      b("ok", "OK")
    ], t, 1);
    r === 0 && this.clipboardService.writeText(s);
  }
  async doShow(e, t, s, r, o, n, c, i) {
    const l = new oe(), a = i ? (f) => {
      var y;
      f.classList.add(...i.classes || []), (y = i.markdownDetails) == null || y.forEach((I) => {
        const x = this.markdownRenderer.render(I.markdown);
        f.appendChild(x.element), x.element.classList.add(...I.classes || []), l.add(x);
      });
    } : void 0, d = new be(this.layoutService.container, t, s, {
      detail: r,
      cancelId: o,
      type: this.getDialogType(e),
      keyEventProcessor: (f) => {
        const y = this.keybindingService.softDispatch(f, this.layoutService.container);
        y && y.kind === 2 && y.commandId && H.ALLOWABLE_COMMANDS.indexOf(y.commandId) === -1 && S.stop(f, !0);
      },
      renderBody: a,
      icon: i == null ? void 0 : i.icon,
      disableCloseAction: i == null ? void 0 : i.disableCloseAction,
      buttonDetails: i == null ? void 0 : i.buttonDetails,
      checkboxLabel: n == null ? void 0 : n.label,
      checkboxChecked: n == null ? void 0 : n.checked,
      inputs: c,
      buttonStyles: ne,
      checkboxStyles: ae,
      inputBoxStyles: re,
      dialogStyles: le
    });
    l.add(d);
    const g = await d.show();
    return l.dispose(), g;
  }
};
C.ALLOWABLE_COMMANDS = [
  "copy",
  "cut",
  "editor.action.selectAll",
  "editor.action.clipboardCopyAction",
  "editor.action.clipboardCutAction",
  "editor.action.clipboardPasteAction"
];
C = B([
  u(0, _),
  u(1, R),
  u(2, M),
  u(3, q),
  u(4, F),
  u(5, P)
], C);
let E = class extends D {
  constructor(e, t, s, r, o, n, c) {
    super(), this.dialogService = e, this.impl = new C(
      t,
      s,
      r,
      o,
      n,
      c
    ), this.model = this.dialogService.model, this._register(this.model.onWillShowDialog(() => {
      this.currentDialog || this.processDialogs();
    })), this.processDialogs();
  }
  async processDialogs() {
    for (; this.model.dialogs.length; ) {
      this.currentDialog = this.model.dialogs[0];
      let e;
      if (this.currentDialog.args.confirmArgs) {
        const t = this.currentDialog.args.confirmArgs;
        e = await this.impl.confirm(t.confirmation);
      } else if (this.currentDialog.args.inputArgs) {
        const t = this.currentDialog.args.inputArgs;
        e = await this.impl.input(t.input);
      } else if (this.currentDialog.args.promptArgs) {
        const t = this.currentDialog.args.promptArgs;
        e = await this.impl.prompt(t.prompt);
      } else
        await this.impl.about();
      this.currentDialog.close(e), this.currentDialog = void 0;
    }
  }
};
E = B([
  u(0, $),
  u(1, _),
  u(2, R),
  u(3, M),
  u(4, q),
  u(5, F),
  u(6, P)
], E);
const fe = de.as(he.Workbench);
fe.registerWorkbenchContribution(E, 1);
class we extends D {
  constructor() {
    super(...arguments), this.dialogs = [], this._onWillShowDialog = this._register(new W()), this.onWillShowDialog = this._onWillShowDialog.event, this._onDidShowDialog = this._register(new W()), this.onDidShowDialog = this._onDidShowDialog.event;
  }
  show(e) {
    const t = new ge(), s = {
      args: e,
      close: (r) => {
        this.dialogs.splice(0, 1), t.complete(r), this._onDidShowDialog.fire();
      }
    };
    return this.dialogs.push(s), this._onWillShowDialog.fire(), {
      item: s,
      result: t.p
    };
  }
}
let A = class extends D {
  constructor(e, t) {
    super(), this.environmentService = e, this.logService = t, this.model = this._register(new we()), this.onWillShowDialog = this.model.onWillShowDialog, this.onDidShowDialog = this.model.onDidShowDialog;
  }
  skipDialogs() {
    return this.environmentService.isExtensionDevelopment && this.environmentService.extensionTestsLocationURI ? !0 : !!this.environmentService.enableSmokeTestDriver;
  }
  async confirm(e) {
    return this.skipDialogs() ? (this.logService.trace("DialogService: refused to show confirmation dialog in tests."), { confirmed: !0 }) : await this.model.show({ confirmArgs: { confirmation: e } }).result;
  }
  async prompt(e) {
    if (this.skipDialogs())
      throw new Error(`DialogService: refused to show dialog in tests. Contents: ${e.message}`);
    return await this.model.show({ promptArgs: { prompt: e } }).result;
  }
  async input(e) {
    if (this.skipDialogs())
      throw new Error("DialogService: refused to show input dialog in tests.");
    return await this.model.show({ inputArgs: { input: e } }).result;
  }
  async info(e, t) {
    await this.prompt({ type: k.Info, message: e, detail: t });
  }
  async warn(e, t) {
    await this.prompt({ type: k.Warning, message: e, detail: t });
  }
  async error(e, t) {
    await this.prompt({ type: k.Error, message: e, detail: t });
  }
  async about() {
    if (this.skipDialogs())
      throw new Error("DialogService: refused to show about dialog in tests.");
    await this.model.show({}).result;
  }
};
A = B([
  u(0, ue),
  u(1, _)
], A);
function ke(w) {
  return {
    [$.toString()]: new pe(A, void 0, !0),
    ...me(w)
  };
}
export {
  ke as default
};

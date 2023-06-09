import { ca as It, D as S, an as g, cb as x, ap as O, k as St, cc as Kt, cd as u, ce as ie, cf as _, cg as Ot, ch as se, ci as ne, b6 as T, _ as p, a as h, C as ct, cj as Q, ck as Gt, aG as W, aD as C, aZ as rt, aQ as U, e as K, bh as Vt, N as d, aH as X, aI as $, ao as Wt, cl as Ut, bB as G, ai as I, aJ as J, b_ as oe, ah as L, cm as Mt, aK as re, ba as Xt, L as et, bV as $t, cn as ae, co as ce, cp as de, d as Tt, bN as Z, bS as at, bO as j, aC as At, U as he, cq as dt, bP as le, c2 as fe, ax as ue, cr as Dt, bT as ge, cs as pe, ct as me, cu as Ce, Q as it, am as ye, cv as tt, bU as z, cw as qt, o as Yt, G as jt, K as zt, cx as be, bv as Ne, ak as Qt, cy as De, z as ht, cz as ve, cA as Jt, E as _e, cB as vt, cC as Ie, cD as Se, bY as Te, cE as Ae, bC as Ee, c9 as we } from "./verifyPrepare-e26a1ce7.js";
import { N as lt, g as N, h as E, i as Zt, j as Le, k as xe, l as Oe, m as Me } from "./theme-0816311d.js";
class ke extends S {
  constructor(t, e) {
    super(), this.item = t, this.onClose = e, this._onDidClose = this._register(new g()), this.onDidClose = this._onDidClose.event, this._onDidChangeVisibility = this._register(new g()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.registerListeners();
  }
  registerListeners() {
    this._register(this.item.onDidChangeVisibility((t) => this._onDidChangeVisibility.fire(t))), O.once(this.item.onDidClose)(() => {
      this._onDidClose.fire(), this.dispose();
    });
  }
  get progress() {
    return this.item.progress;
  }
  updateSeverity(t) {
    this.item.updateSeverity(t);
  }
  updateMessage(t) {
    this.item.updateMessage(t);
  }
  updateActions(t) {
    this.item.updateActions(t);
  }
  close() {
    this.onClose(this.item), this.dispose();
  }
}
class Nt extends S {
  constructor() {
    super(...arguments), this._onDidChangeNotification = this._register(new g()), this.onDidChangeNotification = this._onDidChangeNotification.event, this._onDidChangeStatusMessage = this._register(new g()), this.onDidChangeStatusMessage = this._onDidChangeStatusMessage.event, this._onDidChangeFilter = this._register(new g()), this.onDidChangeFilter = this._onDidChangeFilter.event, this._notifications = [], this.filter = x.OFF;
  }
  get notifications() {
    return this._notifications;
  }
  get statusMessage() {
    return this._statusMessage;
  }
  setFilter(t) {
    this.filter = t, this._onDidChangeFilter.fire(t);
  }
  addNotification(t) {
    const e = this.createViewItem(t);
    if (!e)
      return Nt.NO_OP_NOTIFICATION;
    const i = this.findNotification(e);
    return i == null || i.close(), this._notifications.splice(0, 0, e), this._onDidChangeNotification.fire({ item: e, index: 0, kind: 0 }), new ke(e, (s) => this.onClose(s));
  }
  onClose(t) {
    const e = this.findNotification(t);
    e && e !== t ? e.close() : t.close();
  }
  findNotification(t) {
    return this._notifications.find((e) => e.equals(t));
  }
  createViewItem(t) {
    const e = v.create(t, this.filter);
    if (!e)
      return;
    const i = (o, r) => {
      const a = this._notifications.indexOf(e);
      a >= 0 && this._onDidChangeNotification.fire({ item: e, index: a, kind: o, detail: r });
    }, s = e.onDidChangeExpansion(() => i(2)), n = e.onDidChangeContent((o) => i(1, o.kind));
    return O.once(e.onDidClose)(() => {
      s.dispose(), n.dispose();
      const o = this._notifications.indexOf(e);
      o >= 0 && (this._notifications.splice(o, 1), this._onDidChangeNotification.fire({ item: e, index: o, kind: 3 }));
    }), e;
  }
  showStatusMessage(t, e) {
    const i = Fe.create(t, e);
    return i ? (this._statusMessage = i, this._onDidChangeStatusMessage.fire({ kind: 0, item: i }), St(() => {
      this._statusMessage === i && (this._statusMessage = void 0, this._onDidChangeStatusMessage.fire({ kind: 1, item: i }));
    })) : S.None;
  }
}
Nt.NO_OP_NOTIFICATION = new It();
function Et(c) {
  return c instanceof v;
}
class Re extends S {
  constructor() {
    super(), this._onDidChange = this._register(new g()), this.onDidChange = this._onDidChange.event, this._state = /* @__PURE__ */ Object.create(null);
  }
  get state() {
    return this._state;
  }
  infinite() {
    this._state.infinite || (this._state.infinite = !0, this._state.total = void 0, this._state.worked = void 0, this._state.done = void 0, this._onDidChange.fire());
  }
  done() {
    this._state.done || (this._state.done = !0, this._state.infinite = void 0, this._state.total = void 0, this._state.worked = void 0, this._onDidChange.fire());
  }
  total(t) {
    this._state.total !== t && (this._state.total = t, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire());
  }
  worked(t) {
    typeof this._state.worked == "number" ? this._state.worked += t : this._state.worked = t, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire();
  }
}
class v extends S {
  static create(t, e = x.OFF) {
    if (!t || !t.message || Kt(t.message))
      return;
    let i;
    typeof t.severity == "number" ? i = t.severity : i = u.Info;
    const s = v.parseNotificationMessage(t.message);
    if (!s)
      return;
    let n;
    t.actions ? n = t.actions : ie(t.message) && (n = { primary: t.message.actions });
    let o = t.priority ?? _.DEFAULT;
    return o === _.DEFAULT && (e === x.SILENT || e === x.ERROR && t.severity !== u.Error) && (o = _.SILENT), new v(
      t.id,
      i,
      t.sticky,
      o,
      s,
      t.source,
      t.progress,
      n
    );
  }
  static parseNotificationMessage(t) {
    let e;
    if (t instanceof Error ? e = Ot(t, !1) : typeof t == "string" && (e = t), !e)
      return;
    const i = e;
    e.length > v.MAX_MESSAGE_LENGTH && (e = `${e.substr(0, v.MAX_MESSAGE_LENGTH)}...`), e = e.replace(/(\r\n|\n|\r)/gm, " ").trim();
    const s = se(e);
    return { raw: i, linkedText: s, original: t };
  }
  constructor(t, e, i, s, n, o, r, a) {
    super(), this.id = t, this._severity = e, this._sticky = i, this._priority = s, this._message = n, this._source = o, this._visible = !1, this._onDidChangeExpansion = this._register(new g()), this.onDidChangeExpansion = this._onDidChangeExpansion.event, this._onDidClose = this._register(new g()), this.onDidClose = this._onDidClose.event, this._onDidChangeContent = this._register(new g()), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidChangeVisibility = this._register(new g()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, r && this.setProgress(r), this.setActions(a);
  }
  setProgress(t) {
    t.infinite ? this.progress.infinite() : t.total && (this.progress.total(t.total), t.worked && this.progress.worked(t.worked));
  }
  setActions(t = { primary: [], secondary: [] }) {
    this._actions = {
      primary: Array.isArray(t.primary) ? t.primary : [],
      secondary: Array.isArray(t.secondary) ? t.secondary : []
    }, this._expanded = t.primary && t.primary.length > 0;
  }
  get canCollapse() {
    return !this.hasActions;
  }
  get expanded() {
    return !!this._expanded;
  }
  get severity() {
    return this._severity;
  }
  get sticky() {
    if (this._sticky)
      return !0;
    const t = this.hasActions;
    return !!(t && this._severity === u.Error || !t && this._expanded || this._progress && !this._progress.state.done);
  }
  get priority() {
    return this._priority;
  }
  get hasActions() {
    return !this._actions || !this._actions.primary ? !1 : this._actions.primary.length > 0;
  }
  get hasProgress() {
    return !!this._progress;
  }
  get progress() {
    return this._progress || (this._progress = this._register(new Re()), this._register(this._progress.onDidChange(() => this._onDidChangeContent.fire({ kind: 3 })))), this._progress;
  }
  get message() {
    return this._message;
  }
  get source() {
    return typeof this._source == "string" ? this._source : this._source ? this._source.label : void 0;
  }
  get sourceId() {
    return this._source && typeof this._source != "string" && "id" in this._source ? this._source.id : void 0;
  }
  get actions() {
    return this._actions;
  }
  get visible() {
    return this._visible;
  }
  updateSeverity(t) {
    t !== this._severity && (this._severity = t, this._onDidChangeContent.fire({ kind: 0 }));
  }
  updateMessage(t) {
    const e = v.parseNotificationMessage(t);
    !e || e.raw === this._message.raw || (this._message = e, this._onDidChangeContent.fire({ kind: 1 }));
  }
  updateActions(t) {
    this.setActions(t), this._onDidChangeContent.fire({ kind: 2 });
  }
  updateVisibility(t) {
    this._visible !== t && (this._visible = t, this._onDidChangeVisibility.fire(t));
  }
  expand() {
    this._expanded || !this.canCollapse || (this._expanded = !0, this._onDidChangeExpansion.fire());
  }
  collapse(t) {
    !this._expanded || !this.canCollapse || (this._expanded = !1, t || this._onDidChangeExpansion.fire());
  }
  toggle() {
    this._expanded ? this.collapse() : this.expand();
  }
  close() {
    this._onDidClose.fire(), this.dispose();
  }
  equals(t) {
    if (this.hasProgress || t.hasProgress)
      return !1;
    if (typeof this.id == "string" || typeof t.id == "string")
      return this.id === t.id;
    if (typeof this._source == "object") {
      if (this._source.label !== t.source || this._source.id !== t.sourceId)
        return !1;
    } else if (this._source !== t.source)
      return !1;
    if (this._message.raw !== t.message.raw)
      return !1;
    const e = this._actions && this._actions.primary || [], i = t.actions && t.actions.primary || [];
    return ne(e, i, (s, n) => s.id + s.label === n.id + n.label);
  }
}
v.MAX_MESSAGE_LENGTH = 1e3;
class st extends T {
  constructor(t, e) {
    super(t, e.label, void 0, !0, async () => {
      e.run(), this._onDidRun.fire();
    }), this._onDidRun = this._register(new g()), this.onDidRun = this._onDidRun.event, this._keepOpen = !!e.keepOpen, this._menu = !e.isSecondary && e.menu ? e.menu.map((i, s) => new st(`${t}.${s}`, i)) : void 0;
  }
  get menu() {
    return this._menu;
  }
  get keepOpen() {
    return this._keepOpen;
  }
}
class Fe {
  static create(t, e) {
    if (!t || Kt(t))
      return;
    let i;
    if (t instanceof Error ? i = Ot(t, !1) : typeof t == "string" && (i = t), !!i)
      return { message: i, options: e };
  }
}
function ft(c, t, e) {
  return {
    id: Gt(c.toString()).toString(),
    silent: e,
    source: t || "core"
  };
}
let wt = class extends S {
  constructor(t, e) {
    super(), this.telemetryService = t, this.notificationService = e, this.registerListeners();
  }
  registerListeners() {
    this._register(this.notificationService.onDidAddNotification((t) => {
      const e = t.source && typeof t.source != "string" ? t.source.id : t.source;
      this.telemetryService.publicLog2("notification:show", ft(t.message, e, t.priority === _.SILENT));
    })), this._register(this.notificationService.onDidRemoveNotification((t) => {
      const e = t.source && typeof t.source != "string" ? t.source.id : t.source;
      this.telemetryService.publicLog2("notification:close", ft(t.message, e, t.priority === _.SILENT));
    }));
  }
};
wt = p([
  h(0, ct),
  h(1, Q)
], wt);
const Ht = "notifications.showList", ut = "notifications.hideList", Ve = "notifications.toggleList", _t = "notifications.hideToasts", Pt = "notifications.focusToasts", He = "notifications.focusNextToast", Pe = "notifications.focusPreviousToast", Be = "notifications.focusFirstToast", Ke = "notifications.focusLastToast", kt = "notification.collapse", Rt = "notification.expand", Bt = "notification.acceptPrimaryAction", Ge = "notification.toggle", Ft = "notification.clear", gt = "notifications.clearAll", pt = "notifications.toggleDoNotDisturbMode";
function We(c, t, e) {
  function i(n, o) {
    if (Et(o))
      return o;
    const r = n.lastFocusedList;
    if (r instanceof Ut) {
      const a = r.getFocusedElements()[0];
      if (Et(a))
        return a;
    }
  }
  W.registerCommand(Ht, () => {
    t.hide(), c.show();
  }), C.registerCommandAndKeybindingRule({
    id: ut,
    weight: 200 + 50,
    when: lt,
    primary: 9,
    handler: (n) => {
      const o = n.get(ct);
      for (const r of e.notifications)
        r.visible && o.publicLog2("notification:hide", ft(r.message.original, r.sourceId, r.priority === _.SILENT));
      c.hide();
    }
  }), W.registerCommand(Ve, (n) => {
    c.isVisible ? c.hide() : (t.hide(), c.show());
  }), C.registerCommandAndKeybindingRule({
    id: Ft,
    weight: 200,
    when: N,
    primary: 20,
    mac: {
      primary: 2049
    },
    handler: (n, o) => {
      const r = i(n.get(rt), o);
      r && !r.hasProgress && r.close();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Rt,
    weight: 200,
    when: N,
    primary: 17,
    handler: (n, o) => {
      const r = i(n.get(rt), o);
      r == null || r.expand();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Bt,
    weight: 200,
    when: U.and(E),
    primary: 3103,
    handler: (n) => {
      var l;
      const o = n.get(K).createInstance(nt), r = Vt(e.notifications);
      if (!r)
        return;
      const a = (l = r.actions) != null && l.primary ? Vt(r.actions.primary) : void 0;
      a && (o.run(a, r), r.close());
    }
  }), C.registerCommandAndKeybindingRule({
    id: kt,
    weight: 200,
    when: N,
    primary: 15,
    handler: (n, o) => {
      const r = i(n.get(rt), o);
      r == null || r.collapse();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Ge,
    weight: 200,
    when: N,
    primary: 10,
    secondary: [3],
    handler: (n) => {
      const o = i(n.get(rt));
      o == null || o.toggle();
    }
  }), W.registerCommand(_t, (n) => {
    const o = n.get(ct);
    for (const r of e.notifications)
      r.visible && o.publicLog2("notification:hide", ft(r.message.original, r.sourceId, r.priority === _.SILENT));
    t.hide();
  }), C.registerKeybindingRule({
    id: _t,
    weight: 200 - 50,
    when: E,
    primary: 9
  }), C.registerKeybindingRule({
    id: _t,
    weight: 200 + 100,
    when: U.and(E, N),
    primary: 9
  }), W.registerCommand(Pt, () => t.focus()), C.registerCommandAndKeybindingRule({
    id: He,
    weight: 200,
    when: U.and(N, E),
    primary: 18,
    handler: () => {
      t.focusNext();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Pe,
    weight: 200,
    when: U.and(N, E),
    primary: 16,
    handler: () => {
      t.focusPrevious();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Be,
    weight: 200,
    when: U.and(N, E),
    primary: 11,
    secondary: [14],
    handler: () => {
      t.focusFirst();
    }
  }), C.registerCommandAndKeybindingRule({
    id: Ke,
    weight: 200,
    when: U.and(N, E),
    primary: 12,
    secondary: [13],
    handler: () => {
      t.focusLast();
    }
  }), W.registerCommand(gt, () => c.clearAll()), W.registerCommand(pt, (n) => {
    const o = n.get(Q);
    o.doNotDisturbMode = !o.doNotDisturbMode;
  });
  const s = { value: d("notifications", "Notifications"), original: "Notifications" };
  X.appendMenuItem($.CommandPalette, { command: { id: Ht, title: { value: d("showNotifications", "Show Notifications"), original: "Show Notifications" }, category: s } }), X.appendMenuItem($.CommandPalette, { command: { id: ut, title: { value: d("hideNotifications", "Hide Notifications"), original: "Hide Notifications" }, category: s }, when: lt }), X.appendMenuItem($.CommandPalette, { command: { id: gt, title: { value: d("clearAllNotifications", "Clear All Notifications"), original: "Clear All Notifications" }, category: s } }), X.appendMenuItem($.CommandPalette, { command: { id: Bt, title: { value: d("acceptNotificationPrimaryAction", "Accept Notification Primary Action"), original: "Accept Notification Primary Action" }, category: s } }), X.appendMenuItem($.CommandPalette, { command: { id: pt, title: { value: d("toggleDoNotDisturbMode", "Toggle Do Not Disturb Mode"), original: "Toggle Do Not Disturb Mode" }, category: s } }), X.appendMenuItem($.CommandPalette, { command: { id: Pt, title: { value: d("focusNotificationToasts", "Focus Notification Toast"), original: "Focus Notification Toast" }, category: s }, when: E });
}
let nt = class extends Wt {
  constructor(t, e) {
    super(), this.telemetryService = t, this.notificationService = e;
  }
  async runAction(t, e) {
    this.telemetryService.publicLog2("workbenchActionExecuted", { id: t.id, from: "message" }), Et(e) && this.telemetryService.publicLog2("notification:actionExecuted", {
      id: Gt(e.message.original.toString()).toString(),
      actionLabel: t.label,
      source: e.sourceId || "core",
      silent: e.priority === _.SILENT
    });
    try {
      await super.runAction(t, e);
    } catch (i) {
      this.notificationService.error(i);
    }
  }
};
nt = p([
  h(0, ct),
  h(1, Q)
], nt);
const Ue = G("notifications-clear", I.close, d("clearIcon", "Icon for the clear action in notifications.")), Xe = G("notifications-clear-all", I.clearAll, d("clearAllIcon", "Icon for the clear all action in notifications.")), $e = G("notifications-hide", I.chevronDown, d("hideIcon", "Icon for the hide action in notifications.")), qe = G("notifications-expand", I.chevronUp, d("expandIcon", "Icon for the expand action in notifications.")), Ye = G("notifications-collapse", I.chevronDown, d("collapseIcon", "Icon for the collapse action in notifications.")), je = G("notifications-configure", I.gear, d("configureIcon", "Icon for the configure action in notifications.")), ze = G("notifications-do-not-disturb", I.bellSlash, d("doNotDisturbIcon", "Icon for the mute all action in notifications."));
let k = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(Ue)), this.commandService = i;
  }
  async run(t) {
    this.commandService.executeCommand(Ft, t);
  }
};
k.ID = Ft;
k.LABEL = d("clearNotification", "Clear Notification");
k = p([
  h(2, J)
], k);
let R = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(Xe)), this.commandService = i;
  }
  async run() {
    this.commandService.executeCommand(gt);
  }
};
R.ID = gt;
R.LABEL = d("clearNotifications", "Clear All Notifications");
R = p([
  h(2, J)
], R);
let F = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(ze)), this.commandService = i;
  }
  async run() {
    this.commandService.executeCommand(pt);
  }
};
F.ID = pt;
F.LABEL = d("toggleDoNotDisturbMode", "Toggle Do Not Disturb Mode");
F = p([
  h(2, J)
], F);
let V = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName($e)), this.commandService = i;
  }
  async run() {
    this.commandService.executeCommand(ut);
  }
};
V.ID = ut;
V.LABEL = d("hideNotificationsCenter", "Hide Notifications");
V = p([
  h(2, J)
], V);
let H = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(qe)), this.commandService = i;
  }
  async run(t) {
    this.commandService.executeCommand(Rt, t);
  }
};
H.ID = Rt;
H.LABEL = d("expandNotification", "Expand Notification");
H = p([
  h(2, J)
], H);
let P = class extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(Ye)), this.commandService = i;
  }
  async run(t) {
    this.commandService.executeCommand(kt, t);
  }
};
P.ID = kt;
P.LABEL = d("collapseNotification", "Collapse Notification");
P = p([
  h(2, J)
], P);
class Y extends T {
  constructor(t, e, i) {
    super(t, e, L.asClassName(je)), this.configurationActions = i;
  }
}
Y.ID = "workbench.action.configureNotification";
Y.LABEL = d("configureNotification", "Configure Notification");
let B = class extends T {
  constructor(t, e, i) {
    super(t, e), this.clipboardService = i;
  }
  run(t) {
    return this.clipboardService.writeText(t.message.raw);
  }
};
B.ID = "workbench.action.copyNotificationMessage";
B.LABEL = d("copyNotification", "Copy Text");
B = p([
  h(2, oe)
], B);
class D {
  constructor(t) {
    this.offsetHelper = this.createOffsetHelper(t);
  }
  createOffsetHelper(t) {
    const e = document.createElement("div");
    return e.classList.add("notification-offset-helper"), t.appendChild(e), e;
  }
  getHeight(t) {
    if (!t.expanded)
      return D.ROW_HEIGHT;
    let e = D.ROW_HEIGHT;
    const i = this.computePreferredHeight(t);
    if (D.LINE_HEIGHT < i) {
      const n = i - D.LINE_HEIGHT;
      e += n;
    }
    return (t.source || dt(t.actions && t.actions.primary)) && (e += D.ROW_HEIGHT), e === D.ROW_HEIGHT && t.collapse(!0), e;
  }
  computePreferredHeight(t) {
    let e = 1;
    t.canCollapse && e++, dt(t.actions && t.actions.secondary) && e++, this.offsetHelper.style.width = `${450 - (10 + 26 + e * (24 + 8) - 4)}px`;
    const i = te.render(t.message);
    this.offsetHelper.appendChild(i);
    const s = Math.max(this.offsetHelper.offsetHeight, this.offsetHelper.scrollHeight);
    return At(this.offsetHelper), s;
  }
  getTemplateId(t) {
    if (t instanceof v)
      return ot.TEMPLATE_ID;
    throw new Error("unknown element type: " + t);
  }
}
D.ROW_HEIGHT = 42;
D.LINE_HEIGHT = 22;
class te {
  static render(t, e) {
    const i = document.createElement("span");
    for (const s of t.linkedText.nodes)
      if (typeof s == "string")
        i.appendChild(document.createTextNode(s));
      else {
        let n = s.title;
        !n && s.href.startsWith("command:") ? n = d(
          "executeCommand",
          "Click to execute command '{0}'",
          s.href.substr(8)
        ) : n || (n = s.href);
        const o = ue("a", { href: s.href, title: n, tabIndex: 0 }, s.label);
        if (e) {
          const r = (A) => {
            Ce(A) && at.stop(A, !0), e.callback(s.href);
          }, a = e.toDispose.add(new Dt(o, j.CLICK)).event, l = e.toDispose.add(new Dt(o, j.KEY_DOWN)).event, m = e.toDispose.add(O.chain(l)).filter((A) => {
            const b = new ge(A);
            return b.equals(10) || b.equals(3);
          }).event;
          e.toDispose.add(pe.addTarget(o));
          const f = e.toDispose.add(new Dt(o, me.Tap)).event;
          O.any(a, f, m)(r, null, e.toDispose);
        }
        i.appendChild(o);
      }
    return i;
  }
}
let ot = class ee {
  constructor(t, e, i) {
    this.actionRunner = t, this.contextMenuService = e, this.instantiationService = i;
  }
  get templateId() {
    return ee.TEMPLATE_ID;
  }
  renderTemplate(t) {
    const e = /* @__PURE__ */ Object.create(null);
    e.toDispose = new et(), e.container = document.createElement("div"), e.container.classList.add("notification-list-item"), e.mainRow = document.createElement("div"), e.mainRow.classList.add("notification-list-item-main-row"), e.icon = document.createElement("div"), e.icon.classList.add("notification-list-item-icon", "codicon"), e.message = document.createElement("div"), e.message.classList.add("notification-list-item-message");
    const i = document.createElement("div");
    return i.classList.add("notification-list-item-toolbar-container"), e.toolbar = new $t(i, {
      ariaLabel: d("notificationActions", "Notification Actions"),
      actionViewItemProvider: (s) => {
        if (s && s instanceof Y) {
          const n = new ae(
            s,
            s.configurationActions,
            this.contextMenuService,
            { actionRunner: this.actionRunner, classNames: s.class }
          );
          return e.toDispose.add(n), n;
        }
      },
      actionRunner: this.actionRunner
    }), e.toDispose.add(e.toolbar), e.detailsRow = document.createElement("div"), e.detailsRow.classList.add("notification-list-item-details-row"), e.source = document.createElement("div"), e.source.classList.add("notification-list-item-source"), e.buttonsContainer = document.createElement("div"), e.buttonsContainer.classList.add("notification-list-item-buttons-container"), t.appendChild(e.container), e.container.appendChild(e.detailsRow), e.detailsRow.appendChild(e.source), e.detailsRow.appendChild(e.buttonsContainer), e.container.appendChild(e.mainRow), e.mainRow.appendChild(e.icon), e.mainRow.appendChild(e.message), e.mainRow.appendChild(i), e.progress = new ce(t, de), e.toDispose.add(e.progress), e.renderer = this.instantiationService.createInstance(mt, e, this.actionRunner), e.toDispose.add(e.renderer), e;
  }
  renderElement(t, e, i) {
    i.renderer.setInput(t);
  }
  disposeTemplate(t) {
    Tt(t.toDispose);
  }
};
ot.TEMPLATE_ID = "notification";
ot = p([
  h(1, Mt),
  h(2, K)
], ot);
let mt = class w extends S {
  constructor(t, e, i, s, n, o) {
    super(), this.template = t, this.actionRunner = e, this.openerService = i, this.instantiationService = s, this.keybindingService = n, this.contextMenuService = o, this.inputDisposables = this._register(new et()), w.closeNotificationAction || (w.closeNotificationAction = s.createInstance(k, k.ID, k.LABEL), w.expandNotificationAction = s.createInstance(H, H.ID, H.LABEL), w.collapseNotificationAction = s.createInstance(P, P.ID, P.LABEL));
  }
  setInput(t) {
    this.inputDisposables.clear(), this.render(t);
  }
  render(t) {
    this.template.container.classList.toggle("expanded", t.expanded), this.inputDisposables.add(Z(this.template.container, j.MOUSE_UP, (i) => {
      i.button === 1 && at.stop(i, !0);
    })), this.inputDisposables.add(Z(this.template.container, j.AUXCLICK, (i) => {
      !t.hasProgress && i.button === 1 && (at.stop(i, !0), t.close());
    })), this.renderSeverity(t);
    const e = this.renderMessage(t);
    this.renderSecondaryActions(t, e), this.renderSource(t), this.renderButtons(t), this.renderProgress(t), this.inputDisposables.add(t.onDidChangeContent((i) => {
      switch (i.kind) {
        case 0:
          this.renderSeverity(t);
          break;
        case 3:
          this.renderProgress(t);
          break;
        case 1:
          this.renderMessage(t);
          break;
      }
    }));
  }
  renderSeverity(t) {
    w.SEVERITIES.forEach((e) => {
      t.severity !== e && this.template.icon.classList.remove(...L.asClassNameArray(this.toSeverityIcon(e)));
    }), this.template.icon.classList.add(...L.asClassNameArray(this.toSeverityIcon(t.severity)));
  }
  renderMessage(t) {
    At(this.template.message), this.template.message.appendChild(te.render(t.message, {
      callback: (i) => this.openerService.open(he.parse(i), { allowCommands: !0 }),
      toDispose: this.inputDisposables
    }));
    const e = t.canCollapse && !t.expanded && this.template.message.scrollWidth > this.template.message.clientWidth;
    return e ? this.template.message.title = this.template.message.textContent + "" : this.template.message.removeAttribute("title"), e;
  }
  renderSecondaryActions(t, e) {
    const i = [], s = t.actions ? t.actions.secondary : void 0;
    if (dt(s)) {
      const o = this.instantiationService.createInstance(Y, Y.ID, Y.LABEL, s);
      i.push(o), this.inputDisposables.add(o);
    }
    let n = !1;
    t.canCollapse && (t.expanded || t.source || e) && (n = !0), n && i.push(t.expanded ? w.collapseNotificationAction : w.expandNotificationAction), t.hasProgress || i.push(w.closeNotificationAction), this.template.toolbar.clear(), this.template.toolbar.context = t, i.forEach((o) => this.template.toolbar.push(o, { icon: !0, label: !1, keybinding: this.getKeybindingLabel(o) }));
  }
  renderSource(t) {
    t.expanded && t.source ? (this.template.source.textContent = d("notificationSource", "Source: {0}", t.source), this.template.source.title = t.source) : (this.template.source.textContent = "", this.template.source.removeAttribute("title"));
  }
  renderButtons(t) {
    At(this.template.buttonsContainer);
    const e = t.actions ? t.actions.primary : void 0;
    if (t.expanded && dt(e)) {
      const i = this, s = new class extends Wt {
        async runAction(o) {
          i.actionRunner.run(o, t), (!(o instanceof st) || !o.keepOpen) && t.close();
        }
      }(), n = this.inputDisposables.add(new le(this.template.buttonsContainer));
      for (let o = 0; o < e.length; o++) {
        const r = e[o], a = {
          title: !0,
          secondary: o > 0,
          ...fe
        }, l = r instanceof st ? r.menu : void 0, m = this.inputDisposables.add(l ? n.addButtonWithDropdown({
          ...a,
          contextMenuProvider: this.contextMenuService,
          actions: l,
          actionRunner: s
        }) : n.addButton(a));
        m.label = r.label, this.inputDisposables.add(m.onDidClick((f) => {
          f && at.stop(f, !0), s.run(r);
        }));
      }
    }
  }
  renderProgress(t) {
    if (!t.hasProgress) {
      this.template.progress.stop().hide();
      return;
    }
    const e = t.progress.state;
    e.infinite ? this.template.progress.infinite().show() : typeof e.total == "number" || typeof e.worked == "number" ? (typeof e.total == "number" && !this.template.progress.hasTotal() && this.template.progress.total(e.total), typeof e.worked == "number" && this.template.progress.setWorked(e.worked).show()) : this.template.progress.done().hide();
  }
  toSeverityIcon(t) {
    switch (t) {
      case u.Warning:
        return I.warning;
      case u.Error:
        return I.error;
    }
    return I.info;
  }
  getKeybindingLabel(t) {
    const e = this.keybindingService.lookupKeybinding(t.id);
    return e ? e.getLabel() : null;
  }
};
mt.SEVERITIES = [u.Info, u.Warning, u.Error];
mt = p([
  h(2, re),
  h(3, K),
  h(4, Xt),
  h(5, Mt)
], mt);
let Ct = class extends S {
  constructor(t, e, i, s) {
    super(), this.container = t, this.options = e, this.instantiationService = i, this.contextMenuService = s, this.viewModel = [];
  }
  show(t) {
    if (this.isVisible) {
      t && it(this.list).domFocus();
      return;
    }
    this.list || this.createNotificationsList(), this.isVisible = !0, t && it(this.list).domFocus();
  }
  createNotificationsList() {
    this.listContainer = document.createElement("div"), this.listContainer.classList.add("notifications-list-container");
    const t = this._register(this.instantiationService.createInstance(nt)), e = this.instantiationService.createInstance(ot, t), i = this.listDelegate = new D(this.listContainer), s = this.options, n = this.list = this._register(this.instantiationService.createInstance(Ut, "NotificationsList", this.listContainer, i, [e], {
      ...s,
      setRowLineHeight: !1,
      horizontalScrolling: !1,
      overrideStyles: {
        listBackground: Zt
      },
      accessibilityProvider: {
        getAriaLabel(a) {
          return a.source ? d(
            "notificationWithSourceAriaLabel",
            "{0}, source: {1}, notification",
            a.message.raw,
            a.source
          ) : d("notificationAriaLabel", "{0}, notification", a.message.raw);
        },
        getWidgetAriaLabel() {
          return s.widgetAriaLabel ?? d("notificationsList", "Notifications List");
        },
        getRole() {
          return "dialog";
        }
      }
    })), o = this._register(this.instantiationService.createInstance(B, B.ID, B.LABEL));
    this._register(n.onContextMenu((a) => {
      a.element && this.contextMenuService.showContextMenu({
        getAnchor: () => a.anchor,
        getActions: () => [o],
        getActionsContext: () => a.element,
        actionRunner: t
      });
    })), this._register(n.onMouseDblClick((a) => a.element.toggle()));
    const r = this._register(ye(n.getHTMLElement()));
    this._register(r.onDidBlur(() => {
      document.hasFocus() && n.setFocus([]);
    })), N.bindTo(n.contextKeyService), this._register(n.onDidChangeSelection((a) => {
      a.indexes.length > 0 && n.setSelection([]);
    })), this.container.appendChild(this.listContainer);
  }
  updateNotificationsList(t, e, i = []) {
    const [s, n] = tt(this.list, this.listContainer), o = z(document.activeElement, n), r = s.getFocus()[0], a = this.viewModel[r];
    let l = null;
    if (typeof r == "number" && (l = s.getRelativeTop(r)), this.viewModel.splice(t, e, ...i), s.splice(t, e, i), s.layout(), this.viewModel.length === 0)
      this.hide();
    else if (typeof r == "number") {
      let m = 0;
      if (a) {
        let f = this.viewModel.indexOf(a);
        f === -1 && (f = r - 1), f < this.viewModel.length && f >= 0 && (m = f);
      }
      typeof l == "number" && s.reveal(m, l), s.setFocus([m]);
    }
    this.isVisible && o && s.domFocus();
  }
  updateNotificationHeight(t) {
    const e = this.viewModel.indexOf(t);
    if (e === -1)
      return;
    const [i, s] = tt(this.list, this.listDelegate);
    i.updateElementHeight(e, s.getHeight(t)), i.layout();
  }
  hide() {
    !this.isVisible || !this.list || (this.isVisible = !1, this.list.splice(0, this.viewModel.length), this.viewModel = []);
  }
  focusFirst() {
    !this.isVisible || !this.list || (this.list.focusFirst(), this.list.domFocus());
  }
  hasFocus() {
    return !this.isVisible || !this.listContainer ? !1 : z(document.activeElement, this.listContainer);
  }
  layout(t, e) {
    this.listContainer && this.list && (this.listContainer.style.width = `${t}px`, typeof e == "number" && (this.list.getHTMLElement().style.maxHeight = `${e}px`), this.list.layout());
  }
  dispose() {
    this.hide(), super.dispose();
  }
};
Ct = p([
  h(2, K),
  h(3, Mt)
], Ct);
var y;
(function(c) {
  c[c.HIDDEN_OR_VISIBLE = 0] = "HIDDEN_OR_VISIBLE", c[c.HIDDEN = 1] = "HIDDEN", c[c.VISIBLE = 2] = "VISIBLE";
})(y || (y = {}));
let M = class q extends Qt {
  get isVisible() {
    return !!this._isVisible;
  }
  constructor(t, e, i, s, n, o, r, a, l) {
    super(n), this.container = t, this.model = e, this.instantiationService = i, this.layoutService = s, this.editorGroupService = o, this.contextKeyService = r, this.lifecycleService = a, this.hostService = l, this._onDidChangeVisibility = this._register(new g()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this._isVisible = !1, this.mapNotificationToToast = /* @__PURE__ */ new Map(), this.mapNotificationToDisposable = /* @__PURE__ */ new Map(), this.notificationsToastsVisibleContextKey = E.bindTo(this.contextKeyService), this.addedToastsIntervalCounter = new De(q.SPAM_PROTECTION.interval), this.registerListeners();
  }
  registerListeners() {
    this._register(this.layoutService.onDidLayout((t) => this.layout(ht.lift(t)))), this.lifecycleService.when(3).then(() => {
      this.model.notifications.forEach((t) => this.addToast(t)), this._register(this.model.onDidChangeNotification((t) => this.onDidChangeNotification(t)));
    }), this._register(this.model.onDidChangeFilter((t) => {
      (t === x.SILENT || t === x.ERROR) && this.hide();
    }));
  }
  onDidChangeNotification(t) {
    switch (t.kind) {
      case 0:
        return this.addToast(t.item);
      case 3:
        return this.removeToast(t.item);
    }
  }
  addToast(t) {
    if (this.isNotificationsCenterVisible || t.priority === _.SILENT || this.addedToastsIntervalCounter.increment() > q.SPAM_PROTECTION.limit)
      return;
    const e = new et();
    this.mapNotificationToDisposable.set(t, e), e.add(ve(() => this.doAddToast(t, e)));
  }
  doAddToast(t, e) {
    let i = this.notificationsToastsContainer;
    i || (i = this.notificationsToastsContainer = document.createElement("div"), i.classList.add("notifications-toasts"), this.container.appendChild(i)), i.classList.add("visible");
    const s = document.createElement("div");
    s.classList.add("notification-toast-container");
    const n = i.firstChild;
    n ? i.insertBefore(s, n) : i.appendChild(s);
    const o = document.createElement("div");
    o.classList.add("notification-toast"), s.appendChild(o);
    const r = this.instantiationService.createInstance(Ct, o, {
      verticalScrollMode: 2,
      widgetAriaLabel: (() => t.source ? d(
        "notificationWithSourceAriaLabel",
        "{0}, source: {1}, notification",
        t.message.raw,
        t.source
      ) : d("notificationAriaLabel", "{0}, notification", t.message.raw))()
    });
    e.add(r);
    const a = { item: t, list: r, container: s, toast: o };
    this.mapNotificationToToast.set(t, a), e.add(St(() => this.updateToastVisibility(a, !1))), r.show();
    const l = this.computeMaxDimensions();
    this.layoutLists(l.width), r.updateNotificationsList(0, 0, [t]), this.layoutContainer(l.height), e.add(t.onDidChangeExpansion(() => {
      r.updateNotificationsList(0, 1, [t]);
    })), e.add(t.onDidChangeContent((m) => {
      switch (m.kind) {
        case 2:
          r.updateNotificationsList(0, 1, [t]);
          break;
        case 1:
          t.expanded && r.updateNotificationHeight(t);
          break;
      }
    })), O.once(t.onDidClose)(() => {
      this.removeToast(t);
    }), this.purgeNotification(t, s, r, e), this.updateStyles(), this.notificationsToastsVisibleContextKey.set(!0), o.classList.add("notification-fade-in"), e.add(Z(o, "transitionend", () => {
      o.classList.remove("notification-fade-in"), o.classList.add("notification-fade-in-done");
    })), t.updateVisibility(!0), this._isVisible || (this._isVisible = !0, this._onDidChangeVisibility.fire());
  }
  purgeNotification(t, e, i, s) {
    let n = !1;
    s.add(Z(e, j.MOUSE_OVER, () => n = !0)), s.add(Z(e, j.MOUSE_OUT, () => n = !1));
    let o, r;
    const a = () => {
      o = setTimeout(() => {
        this.hostService.hasFocus ? t.sticky || i.hasFocus() || n ? a() : this.removeToast(t) : r || (r = this.hostService.onDidChangeFocus((l) => {
          l && a();
        }), s.add(r));
      }, q.PURGE_TIMEOUT[t.severity]);
    };
    a(), s.add(St(() => clearTimeout(o)));
  }
  removeToast(t) {
    let e = !1;
    const i = this.mapNotificationToToast.get(t);
    i && (z(document.activeElement, i.container) && (e = !(this.focusNext() || this.focusPrevious())), this.mapNotificationToToast.delete(t));
    const s = this.mapNotificationToDisposable.get(t);
    s && (Tt(s), this.mapNotificationToDisposable.delete(t)), this.mapNotificationToToast.size > 0 ? this.layout(this.workbenchDimensions) : (this.doHide(), e && this.editorGroupService.activeGroup.focus());
  }
  removeToasts() {
    this.mapNotificationToToast.clear(), this.mapNotificationToDisposable.forEach((t) => Tt(t)), this.mapNotificationToDisposable.clear(), this.doHide();
  }
  doHide() {
    var t;
    (t = this.notificationsToastsContainer) == null || t.classList.remove("visible"), this.notificationsToastsVisibleContextKey.set(!1), this._isVisible && (this._isVisible = !1, this._onDidChangeVisibility.fire());
  }
  hide() {
    const t = this.notificationsToastsContainer ? z(document.activeElement, this.notificationsToastsContainer) : !1;
    this.removeToasts(), t && this.editorGroupService.activeGroup.focus();
  }
  focus() {
    const t = this.getToasts(y.VISIBLE);
    return t.length > 0 ? (t[0].list.focusFirst(), !0) : !1;
  }
  focusNext() {
    const t = this.getToasts(y.VISIBLE);
    for (let e = 0; e < t.length; e++)
      if (t[e].list.hasFocus()) {
        const s = t[e + 1];
        if (s)
          return s.list.focusFirst(), !0;
        break;
      }
    return !1;
  }
  focusPrevious() {
    const t = this.getToasts(y.VISIBLE);
    for (let e = 0; e < t.length; e++)
      if (t[e].list.hasFocus()) {
        const s = t[e - 1];
        if (s)
          return s.list.focusFirst(), !0;
        break;
      }
    return !1;
  }
  focusFirst() {
    const t = this.getToasts(y.VISIBLE)[0];
    return t ? (t.list.focusFirst(), !0) : !1;
  }
  focusLast() {
    const t = this.getToasts(y.VISIBLE);
    return t.length > 0 ? (t[t.length - 1].list.focusFirst(), !0) : !1;
  }
  update(t) {
    this.isNotificationsCenterVisible !== t && (this.isNotificationsCenterVisible = t, this.isNotificationsCenterVisible && this.removeToasts());
  }
  updateStyles() {
    this.mapNotificationToToast.forEach(({ toast: t }) => {
      const e = this.getColor(Zt);
      t.style.background = e || "";
      const i = this.getColor(Jt);
      t.style.boxShadow = i ? `0 0 8px 2px ${i}` : "";
      const s = this.getColor(Le);
      t.style.border = s ? `1px solid ${s}` : "";
    });
  }
  getToasts(t) {
    const e = [];
    return this.mapNotificationToToast.forEach((i) => {
      switch (t) {
        case y.HIDDEN_OR_VISIBLE:
          e.push(i);
          break;
        case y.HIDDEN:
          this.isToastInDOM(i) || e.push(i);
          break;
        case y.VISIBLE:
          this.isToastInDOM(i) && e.push(i);
          break;
      }
    }), e.reverse();
  }
  layout(t) {
    this.workbenchDimensions = t;
    const e = this.computeMaxDimensions();
    e.height && this.layoutContainer(e.height), this.layoutLists(e.width);
  }
  computeMaxDimensions() {
    const t = q.MAX_WIDTH;
    let e = t, i;
    return this.workbenchDimensions && (e = this.workbenchDimensions.width, e -= 2 * 8, i = this.workbenchDimensions.height, this.layoutService.isVisible("workbench.parts.statusbar") && (i -= 22), this.layoutService.isVisible("workbench.parts.titlebar") && (i -= 22), i -= 2 * 12), i = typeof i == "number" ? Math.round(i * 0.618) : 0, new ht(Math.min(t, e), i);
  }
  layoutLists(t) {
    this.mapNotificationToToast.forEach(({ list: e }) => e.layout(t));
  }
  layoutContainer(t) {
    let e = 0;
    for (const i of this.getToasts(y.HIDDEN_OR_VISIBLE)) {
      i.container.style.opacity = "0", this.updateToastVisibility(i, !0), t -= i.container.offsetHeight;
      let s = !1;
      e === q.MAX_NOTIFICATIONS ? s = !1 : t >= 0 && (s = !0), this.updateToastVisibility(i, s), i.container.style.opacity = "", s && e++;
    }
  }
  updateToastVisibility(t, e) {
    if (this.isToastInDOM(t) === e)
      return;
    const i = it(this.notificationsToastsContainer);
    e ? i.appendChild(t.container) : i.removeChild(t.container), t.item.updateVisibility(e);
  }
  isToastInDOM(t) {
    return !!t.container.parentElement;
  }
};
M.MAX_WIDTH = 450;
M.MAX_NOTIFICATIONS = 3;
M.PURGE_TIMEOUT = {
  [u.Info]: 15e3,
  [u.Warning]: 18e3,
  [u.Error]: 2e4
};
M.SPAM_PROTECTION = {
  interval: 800,
  limit: M.MAX_NOTIFICATIONS
};
M = p([
  h(2, K),
  h(3, qt),
  h(4, Yt),
  h(5, jt),
  h(6, zt),
  h(7, be),
  h(8, Ne)
], M);
let yt = class Lt extends S {
  constructor(t) {
    super(), this.storageService = t, this.model = this._register(new Nt()), this._onDidAddNotification = this._register(new g()), this.onDidAddNotification = this._onDidAddNotification.event, this._onDidRemoveNotification = this._register(new g()), this.onDidRemoveNotification = this._onDidRemoveNotification.event, this._onDidChangeDoNotDisturbMode = this._register(new g()), this.onDidChangeDoNotDisturbMode = this._onDidChangeDoNotDisturbMode.event, this._doNotDisturbMode = this.storageService.getBoolean(Lt.DND_SETTINGS_KEY, -1, !1), this.updateDoNotDisturbFilters(), this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((t) => {
      switch (t.kind) {
        case 0:
        case 3: {
          const e = {
            message: t.item.message.original,
            severity: t.item.severity,
            source: typeof t.item.sourceId == "string" && typeof t.item.source == "string" ? { id: t.item.sourceId, label: t.item.source } : t.item.source,
            priority: t.item.priority
          };
          t.kind === 0 && this._onDidAddNotification.fire(e), t.kind === 3 && this._onDidRemoveNotification.fire(e);
          break;
        }
      }
    }));
  }
  get doNotDisturbMode() {
    return this._doNotDisturbMode;
  }
  set doNotDisturbMode(t) {
    this._doNotDisturbMode !== t && (this.storageService.store(Lt.DND_SETTINGS_KEY, t, -1, 1), this._doNotDisturbMode = t, this.updateDoNotDisturbFilters(), this._onDidChangeDoNotDisturbMode.fire());
  }
  updateDoNotDisturbFilters() {
    let t;
    this._doNotDisturbMode ? t = x.ERROR : t = x.OFF, this.model.setFilter(t);
  }
  info(t) {
    if (Array.isArray(t)) {
      t.forEach((e) => this.info(e));
      return;
    }
    this.model.addNotification({ severity: u.Info, message: t });
  }
  warn(t) {
    if (Array.isArray(t)) {
      t.forEach((e) => this.warn(e));
      return;
    }
    this.model.addNotification({ severity: u.Warning, message: t });
  }
  error(t) {
    if (Array.isArray(t)) {
      t.forEach((e) => this.error(e));
      return;
    }
    this.model.addNotification({ severity: u.Error, message: t });
  }
  notify(t) {
    var s, n;
    const e = new et();
    if (t.neverShowAgain) {
      const o = this.toStorageScope(t.neverShowAgain), r = t.neverShowAgain.id;
      if (this.storageService.getBoolean(r, o))
        return new It();
      const a = e.add(new T("workbench.notification.neverShowAgain", d("neverShowAgain", "Don't Show Again"), void 0, !0, async () => {
        i.close(), this.storageService.store(r, !0, o, 0);
      })), l = {
        primary: ((s = t.actions) == null ? void 0 : s.primary) || [],
        secondary: ((n = t.actions) == null ? void 0 : n.secondary) || []
      };
      t.neverShowAgain.isSecondary ? l.secondary = [...l.secondary, a] : l.primary = [a, ...l.primary], t.actions = l;
    }
    const i = this.model.addNotification(t);
    return O.once(i.onDidClose)(() => e.dispose()), i;
  }
  toStorageScope(t) {
    switch (t.scope) {
      case vt.APPLICATION:
        return -1;
      case vt.PROFILE:
        return 0;
      case vt.WORKSPACE:
        return 1;
      default:
        return -1;
    }
  }
  prompt(t, e, i, s) {
    const n = new et();
    if (s != null && s.neverShowAgain) {
      const f = this.toStorageScope(s.neverShowAgain), A = s.neverShowAgain.id;
      if (this.storageService.getBoolean(A, f))
        return new It();
      const b = {
        label: d("neverShowAgain", "Don't Show Again"),
        run: () => this.storageService.store(A, !0, f, 0),
        isSecondary: s.neverShowAgain.isSecondary
      };
      s.neverShowAgain.isSecondary ? i = [...i, b] : i = [b, ...i];
    }
    let o = !1;
    const r = [], a = [];
    i.forEach((f, A) => {
      const b = new st(`workbench.dialog.choice.${A}`, f);
      f.isSecondary ? a.push(b) : r.push(b), n.add(b.onDidRun(() => {
        o = !0, f.keepOpen || m.close();
      })), n.add(b);
    });
    const l = { primary: r, secondary: a }, m = this.notify({ severity: t, message: e, actions: l, sticky: s == null ? void 0 : s.sticky, priority: s == null ? void 0 : s.priority });
    return O.once(m.onDidClose)(() => {
      n.dispose(), s && typeof s.onCancel == "function" && !o && s.onCancel();
    }), m;
  }
  status(t, e) {
    return this.model.showStatusMessage(t, e);
  }
};
yt.DND_SETTINGS_KEY = "notifications.doNotDisturbMode";
yt = p([
  h(0, _e)
], yt);
let bt = class xt extends Qt {
  constructor(t, e, i, s, n, o, r, a, l) {
    super(i), this.container = t, this.model = e, this.instantiationService = s, this.layoutService = n, this.contextKeyService = o, this.editorGroupService = r, this.keybindingService = a, this.notificationService = l, this._onDidChangeVisibility = this._register(new g()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.notificationsCenterVisibleContextKey = lt.bindTo(this.contextKeyService), this.notificationsCenterVisibleContextKey = lt.bindTo(o), this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((t) => this.onDidChangeNotification(t))), this._register(this.layoutService.onDidLayout((t) => this.layout(ht.lift(t)))), this._register(this.notificationService.onDidChangeDoNotDisturbMode(() => this.onDidChangeDoNotDisturbMode()));
  }
  onDidChangeDoNotDisturbMode() {
    this.hide();
  }
  get isVisible() {
    return !!this._isVisible;
  }
  show() {
    if (this._isVisible) {
      it(this.notificationsList).show(!0);
      return;
    }
    this.notificationsCenterContainer || this.create(), this.updateTitle();
    const [t, e] = tt(this.notificationsList, this.notificationsCenterContainer);
    this._isVisible = !0, e.classList.add("visible"), t.show(), this.layout(this.workbenchDimensions), t.updateNotificationsList(0, 0, this.model.notifications), t.focusFirst(), this.updateStyles(), this.model.notifications.forEach((i) => i.updateVisibility(!0)), this.notificationsCenterVisibleContextKey.set(!0), this._onDidChangeVisibility.fire();
  }
  updateTitle() {
    const [t, e] = tt(this.notificationsCenterTitle, this.clearAllAction);
    this.model.notifications.length === 0 ? (t.textContent = d("notificationsEmpty", "No new notifications"), e.enabled = !1) : (t.textContent = d("notifications", "Notifications"), e.enabled = this.model.notifications.some((i) => !i.hasProgress));
  }
  create() {
    this.notificationsCenterContainer = document.createElement("div"), this.notificationsCenterContainer.classList.add("notifications-center"), this.notificationsCenterHeader = document.createElement("div"), this.notificationsCenterHeader.classList.add("notifications-center-header"), this.notificationsCenterContainer.appendChild(this.notificationsCenterHeader), this.notificationsCenterTitle = document.createElement("span"), this.notificationsCenterTitle.classList.add("notifications-center-header-title"), this.notificationsCenterHeader.appendChild(this.notificationsCenterTitle);
    const t = document.createElement("div");
    t.classList.add("notifications-center-header-toolbar"), this.notificationsCenterHeader.appendChild(t);
    const e = this._register(this.instantiationService.createInstance(nt)), i = this._register(new $t(t, {
      ariaLabel: d("notificationsToolbar", "Notification Center Actions"),
      actionRunner: e
    }));
    this.clearAllAction = this._register(this.instantiationService.createInstance(R, R.ID, R.LABEL)), i.push(this.clearAllAction, { icon: !0, label: !1, keybinding: this.getKeybindingLabel(this.clearAllAction) }), this.toggleDoNotDisturbAction = this._register(this.instantiationService.createInstance(F, F.ID, F.LABEL)), i.push(this.toggleDoNotDisturbAction, { icon: !0, label: !1, keybinding: this.getKeybindingLabel(this.toggleDoNotDisturbAction) });
    const s = this._register(this.instantiationService.createInstance(V, V.ID, V.LABEL));
    i.push(s, { icon: !0, label: !1, keybinding: this.getKeybindingLabel(s) }), this.notificationsList = this.instantiationService.createInstance(Ct, this.notificationsCenterContainer, {
      widgetAriaLabel: d("notificationsCenterWidgetAriaLabel", "Notifications Center")
    }), this.container.appendChild(this.notificationsCenterContainer);
  }
  getKeybindingLabel(t) {
    const e = this.keybindingService.lookupKeybinding(t.id);
    return e ? e.getLabel() : null;
  }
  onDidChangeNotification(t) {
    if (!this._isVisible)
      return;
    let e = !1;
    const [i, s] = tt(this.notificationsList, this.notificationsCenterContainer);
    switch (t.kind) {
      case 0:
        i.updateNotificationsList(t.index, 0, [t.item]), t.item.updateVisibility(!0);
        break;
      case 1:
        switch (t.detail) {
          case 2:
            i.updateNotificationsList(t.index, 1, [t.item]);
            break;
          case 1:
            t.item.expanded && i.updateNotificationHeight(t.item);
            break;
        }
        break;
      case 2:
        i.updateNotificationsList(t.index, 1, [t.item]);
        break;
      case 3:
        e = z(document.activeElement, s), i.updateNotificationsList(t.index, 1), t.item.updateVisibility(!1);
        break;
    }
    this.updateTitle(), this.model.notifications.length === 0 && (this.hide(), e && this.editorGroupService.activeGroup.focus());
  }
  hide() {
    if (!this._isVisible || !this.notificationsCenterContainer || !this.notificationsList)
      return;
    const t = z(document.activeElement, this.notificationsCenterContainer);
    this._isVisible = !1, this.notificationsCenterContainer.classList.remove("visible"), this.notificationsList.hide(), this.model.notifications.forEach((e) => e.updateVisibility(!1)), this.notificationsCenterVisibleContextKey.set(!1), this._onDidChangeVisibility.fire(), t && this.editorGroupService.activeGroup.focus();
  }
  updateStyles() {
    if (this.notificationsCenterContainer && this.notificationsCenterHeader) {
      const t = this.getColor(Jt);
      this.notificationsCenterContainer.style.boxShadow = t ? `0 0 8px 2px ${t}` : "";
      const e = this.getColor(xe);
      this.notificationsCenterContainer.style.border = e ? `1px solid ${e}` : "";
      const i = this.getColor(Oe);
      this.notificationsCenterHeader.style.color = i ?? "";
      const s = this.getColor(Me);
      this.notificationsCenterHeader.style.background = s ?? "";
    }
  }
  layout(t) {
    if (this.workbenchDimensions = t, this._isVisible && this.notificationsCenterContainer) {
      const e = xt.MAX_DIMENSIONS.width, i = xt.MAX_DIMENSIONS.height;
      let s = e, n = i;
      this.workbenchDimensions && (s = this.workbenchDimensions.width, s -= 2 * 8, n = this.workbenchDimensions.height - 35, this.layoutService.isVisible("workbench.parts.statusbar") && (n -= 22), this.layoutService.isVisible("workbench.parts.titlebar") && (n -= 22), n -= 2 * 12), it(this.notificationsList).layout(Math.min(e, s), Math.min(i, n));
    }
  }
  clearAll() {
    this.hide();
    for (const t of [...this.model.notifications])
      t.hasProgress || t.close();
  }
};
bt.MAX_DIMENSIONS = new ht(450, 400);
bt = p([
  h(2, Yt),
  h(3, K),
  h(4, qt),
  h(5, zt),
  h(6, jt),
  h(7, Xt),
  h(8, Q)
], bt);
class Qe extends S {
  constructor(t) {
    super(), this.model = t;
    for (const e of t.notifications)
      this.triggerAriaAlert(e);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.model.onDidChangeNotification((t) => this.onDidChangeNotification(t)));
  }
  onDidChangeNotification(t) {
    t.kind === 0 && (this.triggerAriaAlert(t.item), t.item.severity === u.Error && (t.item.message.original instanceof Error ? console.error(t.item.message.original) : console.error(Ot(t.item.message.linkedText.toString(), !0))));
  }
  triggerAriaAlert(t) {
    if (t.priority === _.SILENT)
      return;
    const e = t.onDidChangeContent((i) => {
      i.kind === 1 && this.doTriggerAriaAlert(t);
    });
    O.once(t.onDidClose)(() => e.dispose()), this.doTriggerAriaAlert(t);
  }
  doTriggerAriaAlert(t) {
    let e;
    t.severity === u.Error ? e = d("alertErrorMessage", "Error: {0}", t.message.linkedText.toString()) : t.severity === u.Warning ? e = d("alertWarningMessage", "Warning: {0}", t.message.linkedText.toString()) : e = d("alertInfoMessage", "Info: {0}", t.message.linkedText.toString()), Ie(e);
  }
}
Se(async (c) => {
  const t = c.get(Te).container, e = c.get(Q).model, i = c.get(K);
  setTimeout(() => {
    const s = i.createInstance(bt, t, e), n = i.createInstance(M, t, e);
    i.createInstance(Qe, e), i.createInstance(wt), We(s, n, e), n.layout(Ae(t));
  });
});
function hi(c) {
  return {
    [Q.toString()]: new Ee(yt, void 0, !0),
    ...we(c)
  };
}
export {
  hi as default
};

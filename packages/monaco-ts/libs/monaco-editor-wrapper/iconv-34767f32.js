const c = new TextEncoder(), d = new TextDecoder(), r = {
  write(e) {
    return c.encode(e);
  },
  end() {
  }
}, o = {
  write(e) {
    return d.decode(e);
  },
  end() {
  }
};
function n(e) {
  if (!u(e))
    throw new Error(`Encoding not found: ${e}`);
}
const i = (e) => (n(e), r), s = (e) => (n(e), o), u = (e) => e === "utf8", w = (e, t) => (n(t), o.write(e)), E = (e, t) => (n(t), r.write(e));
export {
  w as decode,
  E as encode,
  u as encodingExists,
  s as getDecoder,
  i as getEncoder
};

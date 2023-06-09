import { dv as wn, dw as vn } from "./verifyPrepare-e26a1ce7.js";
function Sn(j, z) {
  for (var M = 0; M < z.length; M++) {
    const v = z[M];
    if (typeof v != "string" && !Array.isArray(v)) {
      for (const S in v)
        if (S !== "default" && !(S in j)) {
          const g = Object.getOwnPropertyDescriptor(v, S);
          g && Object.defineProperty(j, S, g.get ? g : {
            enumerable: !0,
            get: () => v[S]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(j, Symbol.toStringTag, { value: "Module" }));
}
var $ = { exports: {} }, Z;
function bn() {
  return Z || (Z = 1, function(j, z) {
    (function(M, v) {
      j.exports = v();
    })(wn, () => {
      return M = { 770: function(S, g, U) {
        var x = this && this.__importDefault || function(d) {
          return d && d.__esModule ? d : { default: d };
        };
        Object.defineProperty(g, "__esModule", { value: !0 }), g.setDefaultDebugCall = g.createOnigScanner = g.createOnigString = g.loadWASM = g.OnigScanner = g.OnigString = void 0;
        const I = x(U(418));
        let n = null, D = !1;
        class T {
          static _utf8ByteLength(e) {
            let s = 0;
            for (let c = 0, h = e.length; c < h; c++) {
              const f = e.charCodeAt(c);
              let i = f, o = !1;
              if (f >= 55296 && f <= 56319 && c + 1 < h) {
                const a = e.charCodeAt(c + 1);
                a >= 56320 && a <= 57343 && (i = 65536 + (f - 55296 << 10) | a - 56320, o = !0);
              }
              s += i <= 127 ? 1 : i <= 2047 ? 2 : i <= 65535 ? 3 : 4, o && c++;
            }
            return s;
          }
          constructor(e) {
            const s = e.length, c = T._utf8ByteLength(e), h = c !== s, f = h ? new Uint32Array(s + 1) : null;
            h && (f[s] = c);
            const i = h ? new Uint32Array(c + 1) : null;
            h && (i[c] = s);
            const o = new Uint8Array(c);
            let a = 0;
            for (let u = 0; u < s; u++) {
              const b = e.charCodeAt(u);
              let l = b, A = !1;
              if (b >= 55296 && b <= 56319 && u + 1 < s) {
                const R = e.charCodeAt(u + 1);
                R >= 56320 && R <= 57343 && (l = 65536 + (b - 55296 << 10) | R - 56320, A = !0);
              }
              h && (f[u] = a, A && (f[u + 1] = a), l <= 127 ? i[a + 0] = u : l <= 2047 ? (i[a + 0] = u, i[a + 1] = u) : l <= 65535 ? (i[a + 0] = u, i[a + 1] = u, i[a + 2] = u) : (i[a + 0] = u, i[a + 1] = u, i[a + 2] = u, i[a + 3] = u)), l <= 127 ? o[a++] = l : l <= 2047 ? (o[a++] = 192 | (1984 & l) >>> 6, o[a++] = 128 | (63 & l) >>> 0) : l <= 65535 ? (o[a++] = 224 | (61440 & l) >>> 12, o[a++] = 128 | (4032 & l) >>> 6, o[a++] = 128 | (63 & l) >>> 0) : (o[a++] = 240 | (1835008 & l) >>> 18, o[a++] = 128 | (258048 & l) >>> 12, o[a++] = 128 | (4032 & l) >>> 6, o[a++] = 128 | (63 & l) >>> 0), A && u++;
            }
            this.utf16Length = s, this.utf8Length = c, this.utf16Value = e, this.utf8Value = o, this.utf16OffsetToUtf8 = f, this.utf8OffsetToUtf16 = i;
          }
          createString(e) {
            const s = e._omalloc(this.utf8Length);
            return e.HEAPU8.set(this.utf8Value, s), s;
          }
        }
        class _ {
          constructor(e) {
            if (this.id = ++_.LAST_ID, !n)
              throw new Error("Must invoke loadWASM first.");
            this._onigBinding = n, this.content = e;
            const s = new T(e);
            this.utf16Length = s.utf16Length, this.utf8Length = s.utf8Length, this.utf16OffsetToUtf8 = s.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = s.utf8OffsetToUtf16, this.utf8Length < 1e4 && !_._sharedPtrInUse ? (_._sharedPtr || (_._sharedPtr = n._omalloc(1e4)), _._sharedPtrInUse = !0, n.HEAPU8.set(s.utf8Value, _._sharedPtr), this.ptr = _._sharedPtr) : this.ptr = s.createString(n);
          }
          convertUtf8OffsetToUtf16(e) {
            return this.utf8OffsetToUtf16 ? e < 0 ? 0 : e > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[e] : e;
          }
          convertUtf16OffsetToUtf8(e) {
            return this.utf16OffsetToUtf8 ? e < 0 ? 0 : e > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[e] : e;
          }
          dispose() {
            this.ptr === _._sharedPtr ? _._sharedPtrInUse = !1 : this._onigBinding._ofree(this.ptr);
          }
        }
        g.OnigString = _, _.LAST_ID = 0, _._sharedPtr = 0, _._sharedPtrInUse = !1;
        class N {
          constructor(e) {
            if (!n)
              throw new Error("Must invoke loadWASM first.");
            const s = [], c = [];
            for (let o = 0, a = e.length; o < a; o++) {
              const u = new T(e[o]);
              s[o] = u.createString(n), c[o] = u.utf8Length;
            }
            const h = n._omalloc(4 * e.length);
            n.HEAPU32.set(s, h / 4);
            const f = n._omalloc(4 * e.length);
            n.HEAPU32.set(c, f / 4);
            const i = n._createOnigScanner(h, f, e.length);
            for (let o = 0, a = e.length; o < a; o++)
              n._ofree(s[o]);
            n._ofree(f), n._ofree(h), i === 0 && function(o) {
              throw new Error(o.UTF8ToString(o._getLastOnigError()));
            }(n), this._onigBinding = n, this._ptr = i;
          }
          dispose() {
            this._onigBinding._freeOnigScanner(this._ptr);
          }
          findNextMatchSync(e, s, c) {
            let h = D, f = 0;
            if (typeof c == "number" ? (8 & c && (h = !0), f = c) : typeof c == "boolean" && (h = c), typeof e == "string") {
              e = new _(e);
              const i = this._findNextMatchSync(e, s, h, f);
              return e.dispose(), i;
            }
            return this._findNextMatchSync(e, s, h, f);
          }
          _findNextMatchSync(e, s, c, h) {
            const f = this._onigBinding;
            let i;
            if (i = c ? f._findNextOnigScannerMatchDbg(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(s), h) : f._findNextOnigScannerMatch(this._ptr, e.id, e.ptr, e.utf8Length, e.convertUtf16OffsetToUtf8(s), h), i === 0)
              return null;
            const o = f.HEAPU32;
            let a = i / 4;
            const u = o[a++], b = o[a++];
            let l = [];
            for (let A = 0; A < b; A++) {
              const R = e.convertUtf8OffsetToUtf16(o[a++]), k = e.convertUtf8OffsetToUtf16(o[a++]);
              l[A] = { start: R, end: k, length: k - R };
            }
            return { index: u, captureIndices: l };
          }
        }
        g.OnigScanner = N;
        let H = !1, P = null;
        g.loadWASM = function(d) {
          if (H)
            return P;
          let e, s, c, h;
          if (H = !0, function(f) {
            return typeof f.instantiator == "function";
          }(d))
            e = d.instantiator, s = d.print;
          else {
            let f;
            (function(i) {
              return i.data !== void 0;
            })(d) ? (f = d.data, s = d.print) : f = d, e = function(i) {
              return typeof Response < "u" && i instanceof Response;
            }(f) ? typeof WebAssembly.instantiateStreaming == "function" ? function(i) {
              return (o) => WebAssembly.instantiateStreaming(i, o);
            }(f) : function(i) {
              return async (o) => {
                const a = await i.arrayBuffer();
                return WebAssembly.instantiate(a, o);
              };
            }(f) : function(i) {
              return (o) => WebAssembly.instantiate(i, o);
            }(f);
          }
          return P = new Promise((f, i) => {
            c = f, h = i;
          }), function(f, i, o, a) {
            (0, I.default)({ print: i, instantiateWasm: (u, b) => {
              if (typeof performance > "u") {
                const l = () => Date.now();
                u.env.emscripten_get_now = l, u.wasi_snapshot_preview1.emscripten_get_now = l;
              }
              return f(u).then((l) => b(l.instance), a), {};
            } }).then((u) => {
              n = u, o();
            });
          }(e, s, c, h), P;
        }, g.createOnigString = function(d) {
          return new _(d);
        }, g.createOnigScanner = function(d) {
          return new N(d);
        }, g.setDefaultDebugCall = function(d) {
          D = d;
        };
      }, 418: (S) => {
        var g = (typeof document < "u" && document.currentScript && document.currentScript.src, function(U) {
          var x, I, n = (U = U || {}) !== void 0 ? U : {};
          n.ready = new Promise(function(t, r) {
            x = t, I = r;
          });
          var D, T = Object.assign({}, n), _ = !1, N = "";
          function H(t) {
            return n.locateFile ? n.locateFile(t, N) : N + t;
          }
          D = function(t) {
            let r;
            return typeof readbuffer == "function" ? new Uint8Array(readbuffer(t)) : (r = read(t, "binary"), h(typeof r == "object"), r);
          }, typeof scriptArgs < "u" && scriptArgs, typeof onig_print < "u" && (typeof console > "u" && (console = {}), console.log = onig_print, console.warn = console.error = typeof printErr < "u" ? printErr : onig_print);
          var P, d, e = n.print || console.log.bind(console), s = n.printErr || console.warn.bind(console);
          Object.assign(n, T), T = null, n.arguments && n.arguments, n.thisProgram && n.thisProgram, n.quit && n.quit, n.wasmBinary && (P = n.wasmBinary), n.noExitRuntime, typeof WebAssembly != "object" && F("no native wasm support detected");
          var c = !1;
          function h(t, r) {
            t || F(r);
          }
          var f, i, o, a = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
          function u(t, r, y) {
            for (var E = r + y, p = r; t[p] && !(p >= E); )
              ++p;
            if (p - r > 16 && t.buffer && a)
              return a.decode(t.subarray(r, p));
            for (var m = ""; r < p; ) {
              var w = t[r++];
              if (128 & w) {
                var W = 63 & t[r++];
                if ((224 & w) != 192) {
                  var C = 63 & t[r++];
                  if ((w = (240 & w) == 224 ? (15 & w) << 12 | W << 6 | C : (7 & w) << 18 | W << 12 | C << 6 | 63 & t[r++]) < 65536)
                    m += String.fromCharCode(w);
                  else {
                    var X = w - 65536;
                    m += String.fromCharCode(55296 | X >> 10, 56320 | 1023 & X);
                  }
                } else
                  m += String.fromCharCode((31 & w) << 6 | W);
              } else
                m += String.fromCharCode(w);
            }
            return m;
          }
          function b(t, r) {
            return t ? u(i, t, r) : "";
          }
          function l(t) {
            f = t, n.HEAP8 = new Int8Array(t), n.HEAP16 = new Int16Array(t), n.HEAP32 = new Int32Array(t), n.HEAPU8 = i = new Uint8Array(t), n.HEAPU16 = new Uint16Array(t), n.HEAPU32 = o = new Uint32Array(t), n.HEAPF32 = new Float32Array(t), n.HEAPF64 = new Float64Array(t);
          }
          n.INITIAL_MEMORY;
          var A = [], R = [], k = [];
          function tn() {
            if (n.preRun)
              for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length; )
                on(n.preRun.shift());
            V(A);
          }
          function en() {
            V(R);
          }
          function rn() {
            if (n.postRun)
              for (typeof n.postRun == "function" && (n.postRun = [n.postRun]); n.postRun.length; )
                sn(n.postRun.shift());
            V(k);
          }
          function on(t) {
            A.unshift(t);
          }
          function an(t) {
            R.unshift(t);
          }
          function sn(t) {
            k.unshift(t);
          }
          var L = 0, B = null;
          function fn(t) {
            L++, n.monitorRunDependencies && n.monitorRunDependencies(L);
          }
          function un(t) {
            if (L--, n.monitorRunDependencies && n.monitorRunDependencies(L), L == 0 && B) {
              var r = B;
              B = null, r();
            }
          }
          function F(t) {
            n.onAbort && n.onAbort(t), s(t = "Aborted(" + t + ")"), c = !0, t += ". Build with -sASSERTIONS for more info.";
            var r = new WebAssembly.RuntimeError(t);
            throw I(r), r;
          }
          var O, G, cn = "data:application/octet-stream;base64,";
          function Y(t) {
            return t.startsWith(cn);
          }
          function J(t) {
            try {
              if (t == O && P)
                return new Uint8Array(P);
              if (D)
                return D(t);
              throw "both async and sync fetching of the wasm failed";
            } catch (r) {
              F(r);
            }
          }
          function ln() {
            return P || !_ || typeof fetch != "function" ? Promise.resolve().then(function() {
              return J(O);
            }) : fetch(O, { credentials: "same-origin" }).then(function(t) {
              if (!t.ok)
                throw "failed to load wasm binary file at '" + O + "'";
              return t.arrayBuffer();
            }).catch(function() {
              return J(O);
            });
          }
          function hn() {
            var t = { env: K, wasi_snapshot_preview1: K };
            function r(p, m) {
              var w = p.exports;
              n.asm = w, l((d = n.asm.memory).buffer), n.asm.__indirect_function_table, an(n.asm.__wasm_call_ctors), un();
            }
            function y(p) {
              r(p.instance);
            }
            function E(p) {
              return ln().then(function(m) {
                return WebAssembly.instantiate(m, t);
              }).then(function(m) {
                return m;
              }).then(p, function(m) {
                s("failed to asynchronously prepare wasm: " + m), F(m);
              });
            }
            if (fn(), n.instantiateWasm)
              try {
                return n.instantiateWasm(t, r);
              } catch (p) {
                s("Module.instantiateWasm callback failed with error: " + p), I(p);
              }
            return (P || typeof WebAssembly.instantiateStreaming != "function" || Y(O) || typeof fetch != "function" ? E(y) : fetch(O, { credentials: "same-origin" }).then(function(p) {
              return WebAssembly.instantiateStreaming(p, t).then(y, function(m) {
                return s("wasm streaming compile failed: " + m), s("falling back to ArrayBuffer instantiation"), E(y);
              });
            })).catch(I), {};
          }
          function V(t) {
            for (; t.length > 0; )
              t.shift()(n);
          }
          function pn(t, r, y) {
            i.copyWithin(t, r, r + y);
          }
          function gn(t) {
            try {
              return d.grow(t - f.byteLength + 65535 >>> 16), l(d.buffer), 1;
            } catch {
            }
          }
          function dn(t) {
            var r, y = i.length, E = 2147483648;
            if ((t >>>= 0) > E)
              return !1;
            for (var p = 1; p <= 4; p *= 2) {
              var m = y * (1 + 0.2 / p);
              if (m = Math.min(m, t + 100663296), gn(Math.min(E, (r = Math.max(t, m)) + (65536 - r % 65536) % 65536)))
                return !0;
            }
            return !1;
          }
          Y(O = "onig.wasm") || (O = H(O)), G = typeof dateNow < "u" ? dateNow : () => performance.now();
          var mn = [null, [], []];
          function _n(t, r) {
            var y = mn[t];
            r === 0 || r === 10 ? ((t === 1 ? e : s)(u(y, 0)), y.length = 0) : y.push(r);
          }
          function yn(t, r, y, E) {
            for (var p = 0, m = 0; m < y; m++) {
              var w = o[r >> 2], W = o[r + 4 >> 2];
              r += 8;
              for (var C = 0; C < W; C++)
                _n(t, i[w + C]);
              p += W;
            }
            return o[E >> 2] = p, 0;
          }
          var q, K = { emscripten_get_now: G, emscripten_memcpy_big: pn, emscripten_resize_heap: dn, fd_write: yn };
          function Q(t) {
            function r() {
              q || (q = !0, n.calledRun = !0, c || (en(), x(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), rn()));
            }
            L > 0 || (tn(), L > 0 || (n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
              setTimeout(function() {
                n.setStatus("");
              }, 1), r();
            }, 1)) : r()));
          }
          if (hn(), n.___wasm_call_ctors = function() {
            return (n.___wasm_call_ctors = n.asm.__wasm_call_ctors).apply(null, arguments);
          }, n.___errno_location = function() {
            return (n.___errno_location = n.asm.__errno_location).apply(null, arguments);
          }, n._omalloc = function() {
            return (n._omalloc = n.asm.omalloc).apply(null, arguments);
          }, n._ofree = function() {
            return (n._ofree = n.asm.ofree).apply(null, arguments);
          }, n._getLastOnigError = function() {
            return (n._getLastOnigError = n.asm.getLastOnigError).apply(null, arguments);
          }, n._createOnigScanner = function() {
            return (n._createOnigScanner = n.asm.createOnigScanner).apply(null, arguments);
          }, n._freeOnigScanner = function() {
            return (n._freeOnigScanner = n.asm.freeOnigScanner).apply(null, arguments);
          }, n._findNextOnigScannerMatch = function() {
            return (n._findNextOnigScannerMatch = n.asm.findNextOnigScannerMatch).apply(null, arguments);
          }, n._findNextOnigScannerMatchDbg = function() {
            return (n._findNextOnigScannerMatchDbg = n.asm.findNextOnigScannerMatchDbg).apply(null, arguments);
          }, n.stackSave = function() {
            return (n.stackSave = n.asm.stackSave).apply(null, arguments);
          }, n.stackRestore = function() {
            return (n.stackRestore = n.asm.stackRestore).apply(null, arguments);
          }, n.stackAlloc = function() {
            return (n.stackAlloc = n.asm.stackAlloc).apply(null, arguments);
          }, n.dynCall_jiji = function() {
            return (n.dynCall_jiji = n.asm.dynCall_jiji).apply(null, arguments);
          }, n.UTF8ToString = b, B = function t() {
            q || Q(), q || (B = t);
          }, n.preInit)
            for (typeof n.preInit == "function" && (n.preInit = [n.preInit]); n.preInit.length > 0; )
              n.preInit.pop()();
          return Q(), U.ready;
        });
        S.exports = g;
      } }, v = {}, function S(g) {
        var U = v[g];
        if (U !== void 0)
          return U.exports;
        var x = v[g] = { exports: {} };
        return M[g].call(x.exports, x, x.exports, S), x.exports;
      }(770);
      var M, v;
    });
  }($)), $.exports;
}
var nn = bn();
const An = /* @__PURE__ */ vn(nn), Un = /* @__PURE__ */ Sn({
  __proto__: null,
  default: An
}, [nn]);
export {
  Un as m
};

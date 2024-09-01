var K1 = Object.defineProperty;
var Z1 = (s, t, e) => t in s ? K1(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var pt = (s, t, e) => (Z1(s, typeof t != "symbol" ? t + "" : t, e), e), Ip = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var o = (s, t, e) => (Ip(s, t, "read from private field"), e ? e.call(s) : t.get(s)), m = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, w = (s, t, e, n) => (Ip(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var qe = (s, t, e, n) => ({
  set _(i) {
    w(s, t, i, e);
  },
  get _() {
    return o(s, t, n);
  }
}), A = (s, t, e) => (Ip(s, t, "access private method"), e);
import { jsx as $, jsxs as on, Fragment as ny } from "react/jsx-runtime";
import ea, { useMemo as gn, useRef as Mn, useDebugValue as D0, createElement as J1, useContext as Be, createContext as ep, forwardRef as qm, useReducer as Xm, useEffect as Et, useImperativeHandle as iy, useCallback as Ls, useState as Ko, useLayoutEffect as Q1, memo as tA } from "react";
var hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sy(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function J2(s) {
  if (s.__esModule)
    return s;
  var t = s.default;
  if (typeof t == "function") {
    var e = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(s).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(s, n);
    Object.defineProperty(e, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return s[n];
      }
    });
  }), e;
}
var al = function(s) {
  return s && s.Math === Math && s;
}, ai = (
  // eslint-disable-next-line es/no-global-this -- safe
  al(typeof globalThis == "object" && globalThis) || al(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  al(typeof self == "object" && self) || al(typeof hl == "object" && hl) || al(typeof hl == "object" && hl) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ym = {}, Is = function(s) {
  try {
    return !!s();
  } catch {
    return !0;
  }
}, eA = Is, ca = !eA(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), nA = Is, ry = !nA(function() {
  var s = (function() {
  }).bind();
  return typeof s != "function" || s.hasOwnProperty("prototype");
}), iA = ry, au = Function.prototype.call, Km = iA ? au.bind(au) : function() {
  return au.apply(au, arguments);
}, ay = {}, oy = {}.propertyIsEnumerable, ly = Object.getOwnPropertyDescriptor, sA = ly && !oy.call({ 1: 2 }, 1);
ay.f = sA ? function(t) {
  var e = ly(this, t);
  return !!e && e.enumerable;
} : oy;
var cy = function(s, t) {
  return {
    enumerable: !(s & 1),
    configurable: !(s & 2),
    writable: !(s & 4),
    value: t
  };
}, hy = ry, uy = Function.prototype, cg = uy.call, rA = hy && uy.bind.bind(cg, cg), Yi = hy ? rA : function(s) {
  return function() {
    return cg.apply(s, arguments);
  };
}, dy = Yi, aA = dy({}.toString), oA = dy("".slice), lA = function(s) {
  return oA(aA(s), 8, -1);
}, cA = Yi, hA = Is, uA = lA, Mp = Object, dA = cA("".split), fA = hA(function() {
  return !Mp("z").propertyIsEnumerable(0);
}) ? function(s) {
  return uA(s) === "String" ? dA(s, "") : Mp(s);
} : Mp, fy = function(s) {
  return s == null;
}, pA = fy, gA = TypeError, py = function(s) {
  if (pA(s))
    throw new gA("Can't call method on " + s);
  return s;
}, mA = fA, vA = py, Zm = function(s) {
  return mA(vA(s));
}, Fp = typeof document == "object" && document.all, oi = typeof Fp > "u" && Fp !== void 0 ? function(s) {
  return typeof s == "function" || s === Fp;
} : function(s) {
  return typeof s == "function";
}, yA = oi, Jh = function(s) {
  return typeof s == "object" ? s !== null : yA(s);
}, Dp = ai, bA = oi, wA = function(s) {
  return bA(s) ? s : void 0;
}, gy = function(s, t) {
  return arguments.length < 2 ? wA(Dp[s]) : Dp[s] && Dp[s][t];
}, AA = Yi, _A = AA({}.isPrototypeOf), EA = typeof navigator < "u" && String(navigator.userAgent) || "", my = ai, Op = EA, O0 = my.process, N0 = my.Deno, B0 = O0 && O0.versions || N0 && N0.version, $0 = B0 && B0.v8, In, Qu;
$0 && (In = $0.split("."), Qu = In[0] > 0 && In[0] < 4 ? 1 : +(In[0] + In[1]));
!Qu && Op && (In = Op.match(/Edge\/(\d+)/), (!In || In[1] >= 74) && (In = Op.match(/Chrome\/(\d+)/), In && (Qu = +In[1])));
var SA = Qu, H0 = SA, xA = Is, CA = ai, TA = CA.String, vy = !!Object.getOwnPropertySymbols && !xA(function() {
  var s = Symbol("symbol detection");
  return !TA(s) || !(Object(s) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && H0 && H0 < 41;
}), PA = vy, yy = PA && !Symbol.sham && typeof Symbol.iterator == "symbol", RA = gy, LA = oi, kA = _A, IA = yy, MA = Object, by = IA ? function(s) {
  return typeof s == "symbol";
} : function(s) {
  var t = RA("Symbol");
  return LA(t) && kA(t.prototype, MA(s));
}, FA = String, DA = function(s) {
  try {
    return FA(s);
  } catch {
    return "Object";
  }
}, OA = oi, NA = DA, BA = TypeError, wy = function(s) {
  if (OA(s))
    return s;
  throw new BA(NA(s) + " is not a function");
}, $A = wy, HA = fy, UA = function(s, t) {
  var e = s[t];
  return HA(e) ? void 0 : $A(e);
}, Np = Km, Bp = oi, $p = Jh, jA = TypeError, zA = function(s, t) {
  var e, n;
  if (t === "string" && Bp(e = s.toString) && !$p(n = Np(e, s)) || Bp(e = s.valueOf) && !$p(n = Np(e, s)) || t !== "string" && Bp(e = s.toString) && !$p(n = Np(e, s)))
    return n;
  throw new jA("Can't convert object to primitive value");
}, Ay = { exports: {} }, U0 = ai, VA = Object.defineProperty, Jm = function(s, t) {
  try {
    VA(U0, s, { value: t, configurable: !0, writable: !0 });
  } catch {
    U0[s] = t;
  }
  return t;
}, GA = ai, WA = Jm, j0 = "__core-js_shared__", z0 = Ay.exports = GA[j0] || WA(j0, {});
(z0.versions || (z0.versions = [])).push({
  version: "3.37.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Qm = Ay.exports, V0 = Qm, _y = function(s, t) {
  return V0[s] || (V0[s] = t || {});
}, qA = py, XA = Object, YA = function(s) {
  return XA(qA(s));
}, KA = Yi, ZA = YA, JA = KA({}.hasOwnProperty), ha = Object.hasOwn || function(t, e) {
  return JA(ZA(t), e);
}, QA = Yi, t_ = 0, e_ = Math.random(), n_ = QA(1 .toString), Ey = function(s) {
  return "Symbol(" + (s === void 0 ? "" : s) + ")_" + n_(++t_ + e_, 36);
}, i_ = ai, s_ = _y, G0 = ha, r_ = Ey, a_ = vy, o_ = yy, Sa = i_.Symbol, Hp = s_("wks"), l_ = o_ ? Sa.for || Sa : Sa && Sa.withoutSetter || r_, c_ = function(s) {
  return G0(Hp, s) || (Hp[s] = a_ && G0(Sa, s) ? Sa[s] : l_("Symbol." + s)), Hp[s];
}, h_ = Km, W0 = Jh, q0 = by, u_ = UA, d_ = zA, f_ = c_, p_ = TypeError, g_ = f_("toPrimitive"), m_ = function(s, t) {
  if (!W0(s) || q0(s))
    return s;
  var e = u_(s, g_), n;
  if (e) {
    if (t === void 0 && (t = "default"), n = h_(e, s, t), !W0(n) || q0(n))
      return n;
    throw new p_("Can't convert object to primitive value");
  }
  return t === void 0 && (t = "number"), d_(s, t);
}, v_ = m_, y_ = by, Sy = function(s) {
  var t = v_(s, "string");
  return y_(t) ? t : t + "";
}, b_ = ai, X0 = Jh, hg = b_.document, w_ = X0(hg) && X0(hg.createElement), A_ = function(s) {
  return w_ ? hg.createElement(s) : {};
}, __ = ca, E_ = Is, S_ = A_, xy = !__ && !E_(function() {
  return Object.defineProperty(S_("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), x_ = ca, C_ = Km, T_ = ay, P_ = cy, R_ = Zm, L_ = Sy, k_ = ha, I_ = xy, Y0 = Object.getOwnPropertyDescriptor;
Ym.f = x_ ? Y0 : function(t, e) {
  if (t = R_(t), e = L_(e), I_)
    try {
      return Y0(t, e);
    } catch {
    }
  if (k_(t, e))
    return P_(!C_(T_.f, t, e), t[e]);
};
var np = {}, M_ = ca, F_ = Is, D_ = M_ && F_(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), O_ = Jh, N_ = String, B_ = TypeError, Cy = function(s) {
  if (O_(s))
    return s;
  throw new B_(N_(s) + " is not an object");
}, $_ = ca, H_ = xy, U_ = D_, ou = Cy, K0 = Sy, j_ = TypeError, Up = Object.defineProperty, z_ = Object.getOwnPropertyDescriptor, jp = "enumerable", zp = "configurable", Vp = "writable";
np.f = $_ ? U_ ? function(t, e, n) {
  if (ou(t), e = K0(e), ou(n), typeof t == "function" && e === "prototype" && "value" in n && Vp in n && !n[Vp]) {
    var i = z_(t, e);
    i && i[Vp] && (t[e] = n.value, n = {
      configurable: zp in n ? n[zp] : i[zp],
      enumerable: jp in n ? n[jp] : i[jp],
      writable: !1
    });
  }
  return Up(t, e, n);
} : Up : function(t, e, n) {
  if (ou(t), e = K0(e), ou(n), H_)
    try {
      return Up(t, e, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw new j_("Accessors not supported");
  return "value" in n && (t[e] = n.value), t;
};
var V_ = ca, G_ = np, W_ = cy, Ty = V_ ? function(s, t, e) {
  return G_.f(s, t, W_(1, e));
} : function(s, t, e) {
  return s[t] = e, s;
}, Py = { exports: {} }, ug = ca, q_ = ha, Ry = Function.prototype, X_ = ug && Object.getOwnPropertyDescriptor, t0 = q_(Ry, "name"), Y_ = t0 && (function() {
}).name === "something", K_ = t0 && (!ug || ug && X_(Ry, "name").configurable), Z_ = {
  EXISTS: t0,
  PROPER: Y_,
  CONFIGURABLE: K_
}, J_ = Yi, Q_ = oi, dg = Qm, tE = J_(Function.toString);
Q_(dg.inspectSource) || (dg.inspectSource = function(s) {
  return tE(s);
});
var eE = dg.inspectSource, nE = ai, iE = oi, Z0 = nE.WeakMap, sE = iE(Z0) && /native code/.test(String(Z0)), rE = _y, aE = Ey, J0 = rE("keys"), oE = function(s) {
  return J0[s] || (J0[s] = aE(s));
}, Ly = {}, lE = sE, ky = ai, cE = Jh, hE = Ty, Gp = ha, Wp = Qm, uE = oE, dE = Ly, Q0 = "Object already initialized", fg = ky.TypeError, fE = ky.WeakMap, td, kl, ed, pE = function(s) {
  return ed(s) ? kl(s) : td(s, {});
}, gE = function(s) {
  return function(t) {
    var e;
    if (!cE(t) || (e = kl(t)).type !== s)
      throw new fg("Incompatible receiver, " + s + " required");
    return e;
  };
};
if (lE || Wp.state) {
  var Dn = Wp.state || (Wp.state = new fE());
  Dn.get = Dn.get, Dn.has = Dn.has, Dn.set = Dn.set, td = function(s, t) {
    if (Dn.has(s))
      throw new fg(Q0);
    return t.facade = s, Dn.set(s, t), t;
  }, kl = function(s) {
    return Dn.get(s) || {};
  }, ed = function(s) {
    return Dn.has(s);
  };
} else {
  var ga = uE("state");
  dE[ga] = !0, td = function(s, t) {
    if (Gp(s, ga))
      throw new fg(Q0);
    return t.facade = s, hE(s, ga, t), t;
  }, kl = function(s) {
    return Gp(s, ga) ? s[ga] : {};
  }, ed = function(s) {
    return Gp(s, ga);
  };
}
var mE = {
  set: td,
  get: kl,
  has: ed,
  enforce: pE,
  getterFor: gE
}, e0 = Yi, vE = Is, yE = oi, lu = ha, pg = ca, bE = Z_.CONFIGURABLE, wE = eE, Iy = mE, AE = Iy.enforce, _E = Iy.get, tv = String, wu = Object.defineProperty, EE = e0("".slice), SE = e0("".replace), xE = e0([].join), CE = pg && !vE(function() {
  return wu(function() {
  }, "length", { value: 8 }).length !== 8;
}), TE = String(String).split("String"), PE = Py.exports = function(s, t, e) {
  EE(tv(t), 0, 7) === "Symbol(" && (t = "[" + SE(tv(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e && e.getter && (t = "get " + t), e && e.setter && (t = "set " + t), (!lu(s, "name") || bE && s.name !== t) && (pg ? wu(s, "name", { value: t, configurable: !0 }) : s.name = t), CE && e && lu(e, "arity") && s.length !== e.arity && wu(s, "length", { value: e.arity });
  try {
    e && lu(e, "constructor") && e.constructor ? pg && wu(s, "prototype", { writable: !1 }) : s.prototype && (s.prototype = void 0);
  } catch {
  }
  var n = AE(s);
  return lu(n, "source") || (n.source = xE(TE, typeof t == "string" ? t : "")), s;
};
Function.prototype.toString = PE(function() {
  return yE(this) && _E(this).source || wE(this);
}, "toString");
var RE = Py.exports, LE = oi, kE = np, IE = RE, ME = Jm, FE = function(s, t, e, n) {
  n || (n = {});
  var i = n.enumerable, r = n.name !== void 0 ? n.name : t;
  if (LE(e) && IE(e, r, n), n.global)
    i ? s[t] = e : ME(t, e);
  else {
    try {
      n.unsafe ? s[t] && (i = !0) : delete s[t];
    } catch {
    }
    i ? s[t] = e : kE.f(s, t, {
      value: e,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return s;
}, My = {}, DE = Math.ceil, OE = Math.floor, NE = Math.trunc || function(t) {
  var e = +t;
  return (e > 0 ? OE : DE)(e);
}, BE = NE, Fy = function(s) {
  var t = +s;
  return t !== t || t === 0 ? 0 : BE(t);
}, $E = Fy, HE = Math.max, UE = Math.min, jE = function(s, t) {
  var e = $E(s);
  return e < 0 ? HE(e + t, 0) : UE(e, t);
}, zE = Fy, VE = Math.min, GE = function(s) {
  var t = zE(s);
  return t > 0 ? VE(t, 9007199254740991) : 0;
}, WE = GE, qE = function(s) {
  return WE(s.length);
}, XE = Zm, YE = jE, KE = qE, ev = function(s) {
  return function(t, e, n) {
    var i = XE(t), r = KE(i);
    if (r === 0)
      return !s && -1;
    var a = YE(n, r), l;
    if (s && e !== e) {
      for (; r > a; )
        if (l = i[a++], l !== l)
          return !0;
    } else
      for (; r > a; a++)
        if ((s || a in i) && i[a] === e)
          return s || a || 0;
    return !s && -1;
  };
}, ZE = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: ev(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: ev(!1)
}, JE = Yi, qp = ha, QE = Zm, tS = ZE.indexOf, eS = Ly, nv = JE([].push), nS = function(s, t) {
  var e = QE(s), n = 0, i = [], r;
  for (r in e)
    !qp(eS, r) && qp(e, r) && nv(i, r);
  for (; t.length > n; )
    qp(e, r = t[n++]) && (~tS(i, r) || nv(i, r));
  return i;
}, iS = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], sS = nS, rS = iS, aS = rS.concat("length", "prototype");
My.f = Object.getOwnPropertyNames || function(t) {
  return sS(t, aS);
};
var Dy = {};
Dy.f = Object.getOwnPropertySymbols;
var oS = gy, lS = Yi, cS = My, hS = Dy, uS = Cy, dS = lS([].concat), fS = oS("Reflect", "ownKeys") || function(t) {
  var e = cS.f(uS(t)), n = hS.f;
  return n ? dS(e, n(t)) : e;
}, iv = ha, pS = fS, gS = Ym, mS = np, vS = function(s, t, e) {
  for (var n = pS(t), i = mS.f, r = gS.f, a = 0; a < n.length; a++) {
    var l = n[a];
    !iv(s, l) && !(e && iv(e, l)) && i(s, l, r(t, l));
  }
}, yS = Is, bS = oi, wS = /#|\.prototype\./, Qh = function(s, t) {
  var e = _S[AS(s)];
  return e === SS ? !0 : e === ES ? !1 : bS(t) ? yS(t) : !!t;
}, AS = Qh.normalize = function(s) {
  return String(s).replace(wS, ".").toLowerCase();
}, _S = Qh.data = {}, ES = Qh.NATIVE = "N", SS = Qh.POLYFILL = "P", xS = Qh, cu = ai, CS = Ym.f, TS = Ty, PS = FE, RS = Jm, LS = vS, kS = xS, IS = function(s, t) {
  var e = s.target, n = s.global, i = s.stat, r, a, l, c, u, h;
  if (n ? a = cu : i ? a = cu[e] || RS(e, {}) : a = cu[e] && cu[e].prototype, a)
    for (l in t) {
      if (u = t[l], s.dontCallGetSet ? (h = CS(a, l), c = h && h.value) : c = a[l], r = kS(n ? l : e + (i ? "." : "#") + l, s.forced), !r && c !== void 0) {
        if (typeof u == typeof c)
          continue;
        LS(u, c);
      }
      (s.sham || c && c.sham) && TS(u, "sham", !0), PS(a, l, u, s);
    }
}, Oy = {}, sv = wy, MS = TypeError, FS = function(s) {
  var t, e;
  this.promise = new s(function(n, i) {
    if (t !== void 0 || e !== void 0)
      throw new MS("Bad Promise constructor");
    t = n, e = i;
  }), this.resolve = sv(t), this.reject = sv(e);
};
Oy.f = function(s) {
  return new FS(s);
};
var DS = IS, OS = Oy;
DS({ target: "Promise", stat: !0 }, {
  withResolvers: function() {
    var t = OS.f(this);
    return {
      promise: t.promise,
      resolve: t.resolve,
      reject: t.reject
    };
  }
});
function NS(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ny = { exports: {} }, Zt = Ny.exports = {}, Nn, Bn;
function gg() {
  throw new Error("setTimeout has not been defined");
}
function mg() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Nn = setTimeout : Nn = gg;
  } catch {
    Nn = gg;
  }
  try {
    typeof clearTimeout == "function" ? Bn = clearTimeout : Bn = mg;
  } catch {
    Bn = mg;
  }
})();
function By(s) {
  if (Nn === setTimeout)
    return setTimeout(s, 0);
  if ((Nn === gg || !Nn) && setTimeout)
    return Nn = setTimeout, setTimeout(s, 0);
  try {
    return Nn(s, 0);
  } catch {
    try {
      return Nn.call(null, s, 0);
    } catch {
      return Nn.call(this, s, 0);
    }
  }
}
function BS(s) {
  if (Bn === clearTimeout)
    return clearTimeout(s);
  if ((Bn === mg || !Bn) && clearTimeout)
    return Bn = clearTimeout, clearTimeout(s);
  try {
    return Bn(s);
  } catch {
    try {
      return Bn.call(null, s);
    } catch {
      return Bn.call(this, s);
    }
  }
}
var zi = [], Ca = !1, Vs, Au = -1;
function $S() {
  !Ca || !Vs || (Ca = !1, Vs.length ? zi = Vs.concat(zi) : Au = -1, zi.length && $y());
}
function $y() {
  if (!Ca) {
    var s = By($S);
    Ca = !0;
    for (var t = zi.length; t; ) {
      for (Vs = zi, zi = []; ++Au < t; )
        Vs && Vs[Au].run();
      Au = -1, t = zi.length;
    }
    Vs = null, Ca = !1, BS(s);
  }
}
Zt.nextTick = function(s) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var e = 1; e < arguments.length; e++)
      t[e - 1] = arguments[e];
  zi.push(new Hy(s, t)), zi.length === 1 && !Ca && By($y);
};
function Hy(s, t) {
  this.fun = s, this.array = t;
}
Hy.prototype.run = function() {
  this.fun.apply(null, this.array);
};
Zt.title = "browser";
Zt.browser = !0;
Zt.env = {};
Zt.argv = [];
Zt.version = "";
Zt.versions = {};
function Ki() {
}
Zt.on = Ki;
Zt.addListener = Ki;
Zt.once = Ki;
Zt.off = Ki;
Zt.removeListener = Ki;
Zt.removeAllListeners = Ki;
Zt.emit = Ki;
Zt.prependListener = Ki;
Zt.prependOnceListener = Ki;
Zt.listeners = function(s) {
  return [];
};
Zt.binding = function(s) {
  throw new Error("process.binding is not supported");
};
Zt.cwd = function() {
  return "/";
};
Zt.chdir = function(s) {
  throw new Error("process.chdir is not supported");
};
Zt.umask = function() {
  return 0;
};
var HS = Ny.exports;
const ut = /* @__PURE__ */ NS(HS);
var Le = function() {
  return Le = Object.assign || function(t) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Le.apply(this, arguments);
};
function na(s, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, r; n < i; n++)
      (r || !(n in t)) && (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
  return s.concat(r || Array.prototype.slice.call(t));
}
function US(s) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = s(e)), t[e];
  };
}
var jS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zS = /* @__PURE__ */ US(
  function(s) {
    return jS.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ht = "-ms-", Tl = "-moz-", Pt = "-webkit-", Uy = "comm", ip = "rule", n0 = "decl", VS = "@import", jy = "@keyframes", GS = "@layer", zy = Math.abs, i0 = String.fromCharCode, vg = Object.assign;
function WS(s, t) {
  return me(s, 0) ^ 45 ? (((t << 2 ^ me(s, 0)) << 2 ^ me(s, 1)) << 2 ^ me(s, 2)) << 2 ^ me(s, 3) : 0;
}
function Vy(s) {
  return s.trim();
}
function ui(s, t) {
  return (s = t.exec(s)) ? s[0] : s;
}
function mt(s, t, e) {
  return s.replace(t, e);
}
function _u(s, t, e) {
  return s.indexOf(t, e);
}
function me(s, t) {
  return s.charCodeAt(t) | 0;
}
function Zo(s, t, e) {
  return s.slice(t, e);
}
function ii(s) {
  return s.length;
}
function Gy(s) {
  return s.length;
}
function ul(s, t) {
  return t.push(s), s;
}
function qS(s, t) {
  return s.map(t).join("");
}
function rv(s, t) {
  return s.filter(function(e) {
    return !ui(e, t);
  });
}
var sp = 1, Jo = 1, Wy = 0, mn = 0, ee = 0, il = "";
function rp(s, t, e, n, i, r, a, l) {
  return { value: s, root: t, parent: e, type: n, props: i, children: r, line: sp, column: Jo, length: a, return: "", siblings: l };
}
function Zi(s, t) {
  return vg(rp("", null, null, "", null, null, 0, s.siblings), s, { length: -s.length }, t);
}
function ma(s) {
  for (; s.root; )
    s = Zi(s.root, { children: [s] });
  ul(s, s.siblings);
}
function XS() {
  return ee;
}
function YS() {
  return ee = mn > 0 ? me(il, --mn) : 0, Jo--, ee === 10 && (Jo = 1, sp--), ee;
}
function Fn() {
  return ee = mn < Wy ? me(il, mn++) : 0, Jo++, ee === 10 && (Jo = 1, sp++), ee;
}
function Qr() {
  return me(il, mn);
}
function Eu() {
  return mn;
}
function ap(s, t) {
  return Zo(il, s, t);
}
function yg(s) {
  switch (s) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function KS(s) {
  return sp = Jo = 1, Wy = ii(il = s), mn = 0, [];
}
function ZS(s) {
  return il = "", s;
}
function Xp(s) {
  return Vy(ap(mn - 1, bg(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function JS(s) {
  for (; (ee = Qr()) && ee < 33; )
    Fn();
  return yg(s) > 2 || yg(ee) > 3 ? "" : " ";
}
function QS(s, t) {
  for (; --t && Fn() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return ap(s, Eu() + (t < 6 && Qr() == 32 && Fn() == 32));
}
function bg(s) {
  for (; Fn(); )
    switch (ee) {
      case s:
        return mn;
      case 34:
      case 39:
        s !== 34 && s !== 39 && bg(ee);
        break;
      case 40:
        s === 41 && bg(s);
        break;
      case 92:
        Fn();
        break;
    }
  return mn;
}
function tx(s, t) {
  for (; Fn() && s + ee !== 57; )
    if (s + ee === 84 && Qr() === 47)
      break;
  return "/*" + ap(t, mn - 1) + "*" + i0(s === 47 ? s : Fn());
}
function ex(s) {
  for (; !yg(Qr()); )
    Fn();
  return ap(s, mn);
}
function nx(s) {
  return ZS(Su("", null, null, null, [""], s = KS(s), 0, [0], s));
}
function Su(s, t, e, n, i, r, a, l, c) {
  for (var u = 0, h = 0, f = a, g = 0, v = 0, y = 0, _ = 1, C = 1, E = 1, P = 0, L = "", k = i, F = r, I = n, M = L; C; )
    switch (y = P, P = Fn()) {
      case 40:
        if (y != 108 && me(M, f - 1) == 58) {
          _u(M += mt(Xp(P), "&", "&\f"), "&\f", zy(u ? l[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        M += Xp(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        M += JS(y);
        break;
      case 92:
        M += QS(Eu() - 1, 7);
        continue;
      case 47:
        switch (Qr()) {
          case 42:
          case 47:
            ul(ix(tx(Fn(), Eu()), t, e, c), c);
            break;
          default:
            M += "/";
        }
        break;
      case 123 * _:
        l[u++] = ii(M) * E;
      case 125 * _:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            C = 0;
          case 59 + h:
            E == -1 && (M = mt(M, /\f/g, "")), v > 0 && ii(M) - f && ul(v > 32 ? ov(M + ";", n, e, f - 1, c) : ov(mt(M, " ", "") + ";", n, e, f - 2, c), c);
            break;
          case 59:
            M += ";";
          default:
            if (ul(I = av(M, t, e, u, h, i, l, L, k = [], F = [], f, r), r), P === 123)
              if (h === 0)
                Su(M, t, I, I, k, r, f, l, F);
              else
                switch (g === 99 && me(M, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Su(s, I, I, n && ul(av(s, I, I, 0, 0, i, l, L, i, k = [], f, F), F), i, F, f, l, n ? k : F);
                    break;
                  default:
                    Su(M, I, I, I, [""], F, 0, l, F);
                }
        }
        u = h = v = 0, _ = E = 1, L = M = "", f = a;
        break;
      case 58:
        f = 1 + ii(M), v = y;
      default:
        if (_ < 1) {
          if (P == 123)
            --_;
          else if (P == 125 && _++ == 0 && YS() == 125)
            continue;
        }
        switch (M += i0(P), P * _) {
          case 38:
            E = h > 0 ? 1 : (M += "\f", -1);
            break;
          case 44:
            l[u++] = (ii(M) - 1) * E, E = 1;
            break;
          case 64:
            Qr() === 45 && (M += Xp(Fn())), g = Qr(), h = f = ii(L = M += ex(Eu())), P++;
            break;
          case 45:
            y === 45 && ii(M) == 2 && (_ = 0);
        }
    }
  return r;
}
function av(s, t, e, n, i, r, a, l, c, u, h, f) {
  for (var g = i - 1, v = i === 0 ? r : [""], y = Gy(v), _ = 0, C = 0, E = 0; _ < n; ++_)
    for (var P = 0, L = Zo(s, g + 1, g = zy(C = a[_])), k = s; P < y; ++P)
      (k = Vy(C > 0 ? v[P] + " " + L : mt(L, /&\f/g, v[P]))) && (c[E++] = k);
  return rp(s, t, e, i === 0 ? ip : l, c, u, h, f);
}
function ix(s, t, e, n) {
  return rp(s, t, e, Uy, i0(XS()), Zo(s, 2, -2), 0, n);
}
function ov(s, t, e, n, i) {
  return rp(s, t, e, n0, Zo(s, 0, n), Zo(s, n + 1, -1), n, i);
}
function qy(s, t, e) {
  switch (WS(s, t)) {
    case 5103:
      return Pt + "print-" + s + s;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Pt + s + s;
    case 4789:
      return Tl + s + s;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pt + s + Tl + s + Ht + s + s;
    case 5936:
      switch (me(s, t + 11)) {
        case 114:
          return Pt + s + Ht + mt(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        case 108:
          return Pt + s + Ht + mt(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        case 45:
          return Pt + s + Ht + mt(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
    case 6828:
    case 4268:
    case 2903:
      return Pt + s + Ht + s + s;
    case 6165:
      return Pt + s + Ht + "flex-" + s + s;
    case 5187:
      return Pt + s + mt(s, /(\w+).+(:[^]+)/, Pt + "box-$1$2" + Ht + "flex-$1$2") + s;
    case 5443:
      return Pt + s + Ht + "flex-item-" + mt(s, /flex-|-self/g, "") + (ui(s, /flex-|baseline/) ? "" : Ht + "grid-row-" + mt(s, /flex-|-self/g, "")) + s;
    case 4675:
      return Pt + s + Ht + "flex-line-pack" + mt(s, /align-content|flex-|-self/g, "") + s;
    case 5548:
      return Pt + s + Ht + mt(s, "shrink", "negative") + s;
    case 5292:
      return Pt + s + Ht + mt(s, "basis", "preferred-size") + s;
    case 6060:
      return Pt + "box-" + mt(s, "-grow", "") + Pt + s + Ht + mt(s, "grow", "positive") + s;
    case 4554:
      return Pt + mt(s, /([^-])(transform)/g, "$1" + Pt + "$2") + s;
    case 6187:
      return mt(mt(mt(s, /(zoom-|grab)/, Pt + "$1"), /(image-set)/, Pt + "$1"), s, "") + s;
    case 5495:
    case 3959:
      return mt(s, /(image-set\([^]*)/, Pt + "$1$`$1");
    case 4968:
      return mt(mt(s, /(.+:)(flex-)?(.*)/, Pt + "box-pack:$3" + Ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Pt + s + s;
    case 4200:
      if (!ui(s, /flex-|baseline/))
        return Ht + "grid-column-align" + Zo(s, t) + s;
      break;
    case 2592:
    case 3360:
      return Ht + mt(s, "template-", "") + s;
    case 4384:
    case 3616:
      return e && e.some(function(n, i) {
        return t = i, ui(n.props, /grid-\w+-end/);
      }) ? ~_u(s + (e = e[t].value), "span", 0) ? s : Ht + mt(s, "-start", "") + s + Ht + "grid-row-span:" + (~_u(e, "span", 0) ? ui(e, /\d+/) : +ui(e, /\d+/) - +ui(s, /\d+/)) + ";" : Ht + mt(s, "-start", "") + s;
    case 4896:
    case 4128:
      return e && e.some(function(n) {
        return ui(n.props, /grid-\w+-start/);
      }) ? s : Ht + mt(mt(s, "-end", "-span"), "span ", "") + s;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return mt(s, /(.+)-inline(.+)/, Pt + "$1$2") + s;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ii(s) - 1 - t > 6)
        switch (me(s, t + 1)) {
          case 109:
            if (me(s, t + 4) !== 45)
              break;
          case 102:
            return mt(s, /(.+:)(.+)-([^]+)/, "$1" + Pt + "$2-$3$1" + Tl + (me(s, t + 3) == 108 ? "$3" : "$2-$3")) + s;
          case 115:
            return ~_u(s, "stretch", 0) ? qy(mt(s, "stretch", "fill-available"), t, e) + s : s;
        }
      break;
    case 5152:
    case 5920:
      return mt(s, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, r, a, l, c, u) {
        return Ht + i + ":" + r + u + (a ? Ht + i + "-span:" + (l ? c : +c - +r) + u : "") + s;
      });
    case 4949:
      if (me(s, t + 6) === 121)
        return mt(s, ":", ":" + Pt) + s;
      break;
    case 6444:
      switch (me(s, me(s, 14) === 45 ? 18 : 11)) {
        case 120:
          return mt(s, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Pt + (me(s, 14) === 45 ? "inline-" : "") + "box$3$1" + Pt + "$2$3$1" + Ht + "$2box$3") + s;
        case 100:
          return mt(s, ":", ":" + Ht) + s;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return mt(s, "scroll-", "scroll-snap-") + s;
  }
  return s;
}
function nd(s, t) {
  for (var e = "", n = 0; n < s.length; n++)
    e += t(s[n], n, s, t) || "";
  return e;
}
function sx(s, t, e, n) {
  switch (s.type) {
    case GS:
      if (s.children.length)
        break;
    case VS:
    case n0:
      return s.return = s.return || s.value;
    case Uy:
      return "";
    case jy:
      return s.return = s.value + "{" + nd(s.children, n) + "}";
    case ip:
      if (!ii(s.value = s.props.join(",")))
        return "";
  }
  return ii(e = nd(s.children, n)) ? s.return = s.value + "{" + e + "}" : "";
}
function rx(s) {
  var t = Gy(s);
  return function(e, n, i, r) {
    for (var a = "", l = 0; l < t; l++)
      a += s[l](e, n, i, r) || "";
    return a;
  };
}
function ax(s) {
  return function(t) {
    t.root || (t = t.return) && s(t);
  };
}
function ox(s, t, e, n) {
  if (s.length > -1 && !s.return)
    switch (s.type) {
      case n0:
        s.return = qy(s.value, s.length, e);
        return;
      case jy:
        return nd([Zi(s, { value: mt(s.value, "@", "@" + Pt) })], n);
      case ip:
        if (s.length)
          return qS(e = s.props, function(i) {
            switch (ui(i, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ma(Zi(s, { props: [mt(i, /:(read-\w+)/, ":" + Tl + "$1")] })), ma(Zi(s, { props: [i] })), vg(s, { props: rv(e, n) });
                break;
              case "::placeholder":
                ma(Zi(s, { props: [mt(i, /:(plac\w+)/, ":" + Pt + "input-$1")] })), ma(Zi(s, { props: [mt(i, /:(plac\w+)/, ":" + Tl + "$1")] })), ma(Zi(s, { props: [mt(i, /:(plac\w+)/, Ht + "input-$1")] })), ma(Zi(s, { props: [i] })), vg(s, { props: rv(e, n) });
                break;
            }
            return "";
          });
    }
}
var lx = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ia = typeof ut < "u" && ut.env !== void 0 && (ut.env.REACT_APP_SC_ATTR || ut.env.SC_ATTR) || "data-styled", Xy = "active", Yy = "data-styled-version", op = "6.1.11", s0 = `/*!sc*/
`, r0 = typeof window < "u" && "HTMLElement" in window, cx = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ut < "u" && ut.env !== void 0 && ut.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ut.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ut.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ut.env.REACT_APP_SC_DISABLE_SPEEDY : typeof ut < "u" && ut.env !== void 0 && ut.env.SC_DISABLE_SPEEDY !== void 0 && ut.env.SC_DISABLE_SPEEDY !== "" ? ut.env.SC_DISABLE_SPEEDY !== "false" && ut.env.SC_DISABLE_SPEEDY : ut.env.NODE_ENV !== "production"), lv = /invalid hook call/i, hu = /* @__PURE__ */ new Set(), hx = function(s, t) {
  if (ut.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(s).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var r = !0;
      console.error = function(a) {
        for (var l = [], c = 1; c < arguments.length; c++)
          l[c - 1] = arguments[c];
        lv.test(a) ? (r = !1, hu.delete(n)) : i.apply(void 0, na([a], l, !1));
      }, Mn(), r && !hu.has(n) && (console.warn(n), hu.add(n));
    } catch (a) {
      lv.test(a.message) && hu.delete(n);
    } finally {
      console.error = i;
    }
  }
}, lp = Object.freeze([]), Qo = Object.freeze({});
function ux(s, t, e) {
  return e === void 0 && (e = Qo), s.theme !== e.theme && s.theme || t || e.theme;
}
var wg = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), dx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fx = /(^-|-$)/g;
function cv(s) {
  return s.replace(dx, "-").replace(fx, "");
}
var px = /(a)(d)/gi, uu = 52, hv = function(s) {
  return String.fromCharCode(s + (s > 25 ? 39 : 97));
};
function Ag(s) {
  var t, e = "";
  for (t = Math.abs(s); t > uu; t = t / uu | 0)
    e = hv(t % uu) + e;
  return (hv(t % uu) + e).replace(px, "$1-$2");
}
var Yp, Ky = 5381, Us = function(s, t) {
  for (var e = t.length; e; )
    s = 33 * s ^ t.charCodeAt(--e);
  return s;
}, Zy = function(s) {
  return Us(Ky, s);
};
function Jy(s) {
  return Ag(Zy(s) >>> 0);
}
function Qy(s) {
  return ut.env.NODE_ENV !== "production" && typeof s == "string" && s || s.displayName || s.name || "Component";
}
function Kp(s) {
  return typeof s == "string" && (ut.env.NODE_ENV === "production" || s.charAt(0) === s.charAt(0).toLowerCase());
}
var tb = typeof Symbol == "function" && Symbol.for, eb = tb ? Symbol.for("react.memo") : 60115, gx = tb ? Symbol.for("react.forward_ref") : 60112, mx = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, vx = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, nb = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, yx = ((Yp = {})[gx] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Yp[eb] = nb, Yp);
function uv(s) {
  return ("type" in (t = s) && t.type.$$typeof) === eb ? nb : "$$typeof" in s ? yx[s.$$typeof] : mx;
  var t;
}
var bx = Object.defineProperty, wx = Object.getOwnPropertyNames, dv = Object.getOwnPropertySymbols, Ax = Object.getOwnPropertyDescriptor, _x = Object.getPrototypeOf, fv = Object.prototype;
function ib(s, t, e) {
  if (typeof t != "string") {
    if (fv) {
      var n = _x(t);
      n && n !== fv && ib(s, n, e);
    }
    var i = wx(t);
    dv && (i = i.concat(dv(t)));
    for (var r = uv(s), a = uv(t), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in vx || e && e[c] || a && c in a || r && c in r)) {
        var u = Ax(t, c);
        try {
          bx(s, c, u);
        } catch {
        }
      }
    }
  }
  return s;
}
function sa(s) {
  return typeof s == "function";
}
function a0(s) {
  return typeof s == "object" && "styledComponentId" in s;
}
function Gs(s, t) {
  return s && t ? "".concat(s, " ").concat(t) : s || t || "";
}
function _g(s, t) {
  if (s.length === 0)
    return "";
  for (var e = s[0], n = 1; n < s.length; n++)
    e += s[n];
  return e;
}
function tl(s) {
  return s !== null && typeof s == "object" && s.constructor.name === Object.name && !("props" in s && s.$$typeof);
}
function Eg(s, t, e) {
  if (e === void 0 && (e = !1), !e && !tl(s) && !Array.isArray(s))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      s[n] = Eg(s[n], t[n]);
  else if (tl(t))
    for (var n in t)
      s[n] = Eg(s[n], t[n]);
  return s;
}
function o0(s, t) {
  Object.defineProperty(s, "toString", { value: t });
}
var Ex = ut.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Sx() {
  for (var s = [], t = 0; t < arguments.length; t++)
    s[t] = arguments[t];
  for (var e = s[0], n = [], i = 1, r = s.length; i < r; i += 1)
    n.push(s[i]);
  return n.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function Gi(s) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return ut.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Sx.apply(void 0, na([Ex[s]], t, !1)).trim());
}
var xx = function() {
  function s(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return s.prototype.indexOfGroup = function(t) {
    for (var e = 0, n = 0; n < t; n++)
      e += this.groupSizes[n];
    return e;
  }, s.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, i = n.length, r = i; t >= r; )
        if ((r <<= 1) < 0)
          throw Gi(16, "".concat(t));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
      for (var a = i; a < r; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = (a = 0, e.length); a < c; a++)
      this.tag.insertRule(l, e[a]) && (this.groupSizes[t]++, l++);
  }, s.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], n = this.indexOfGroup(t), i = n + e;
      this.groupSizes[t] = 0;
      for (var r = n; r < i; r++)
        this.tag.deleteRule(n);
    }
  }, s.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return e;
    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), r = i + n, a = i; a < r; a++)
      e += "".concat(this.tag.getRule(a)).concat(s0);
    return e;
  }, s;
}(), Cx = 1 << 30, xu = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Map(), Cu = 1, du = function(s) {
  if (xu.has(s))
    return xu.get(s);
  for (; id.has(Cu); )
    Cu++;
  var t = Cu++;
  if (ut.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Cx))
    throw Gi(16, "".concat(t));
  return xu.set(s, t), id.set(t, s), t;
}, Tx = function(s, t) {
  Cu = t + 1, xu.set(s, t), id.set(t, s);
}, Px = "style[".concat(ia, "][").concat(Yy, '="').concat(op, '"]'), Rx = new RegExp("^".concat(ia, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Lx = function(s, t, e) {
  for (var n, i = e.split(","), r = 0, a = i.length; r < a; r++)
    (n = i[r]) && s.registerName(t, n);
}, kx = function(s, t) {
  for (var e, n = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(s0), i = [], r = 0, a = n.length; r < a; r++) {
    var l = n[r].trim();
    if (l) {
      var c = l.match(Rx);
      if (c) {
        var u = 0 | parseInt(c[1], 10), h = c[2];
        u !== 0 && (Tx(h, u), Lx(s, h, c[3]), s.getTag().insertRules(u, i)), i.length = 0;
      } else
        i.push(l);
    }
  }
};
function Ix() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var sb = function(s) {
  var t = document.head, e = s || t, n = document.createElement("style"), i = function(l) {
    var c = Array.from(l.querySelectorAll("style[".concat(ia, "]")));
    return c[c.length - 1];
  }(e), r = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(ia, Xy), n.setAttribute(Yy, op);
  var a = Ix();
  return a && n.setAttribute("nonce", a), e.insertBefore(n, r), n;
}, Mx = function() {
  function s(t) {
    this.element = sb(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet)
        return e.sheet;
      for (var n = document.styleSheets, i = 0, r = n.length; i < r; i++) {
        var a = n[i];
        if (a.ownerNode === e)
          return a;
      }
      throw Gi(17);
    }(this.element), this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, s.prototype.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }, s;
}(), Fx = function() {
  function s(t) {
    this.element = sb(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(e);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, s.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, s.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, s;
}(), Dx = function() {
  function s(t) {
    this.rules = [], this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, s.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, s.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, s;
}(), pv = r0, Ox = { isServer: !r0, useCSSOMInjection: !cx }, rb = function() {
  function s(t, e, n) {
    t === void 0 && (t = Qo), e === void 0 && (e = {});
    var i = this;
    this.options = Le(Le({}, Ox), t), this.gs = e, this.names = new Map(n), this.server = !!t.isServer, !this.server && r0 && pv && (pv = !1, function(r) {
      for (var a = document.querySelectorAll(Px), l = 0, c = a.length; l < c; l++) {
        var u = a[l];
        u && u.getAttribute(ia) !== Xy && (kx(r, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), o0(this, function() {
      return function(r) {
        for (var a = r.getTag(), l = a.length, c = "", u = function(f) {
          var g = function(E) {
            return id.get(E);
          }(f);
          if (g === void 0)
            return "continue";
          var v = r.names.get(g), y = a.getGroup(f);
          if (v === void 0 || y.length === 0)
            return "continue";
          var _ = "".concat(ia, ".g").concat(f, '[id="').concat(g, '"]'), C = "";
          v !== void 0 && v.forEach(function(E) {
            E.length > 0 && (C += "".concat(E, ","));
          }), c += "".concat(y).concat(_, '{content:"').concat(C, '"}').concat(s0);
        }, h = 0; h < l; h++)
          u(h);
        return c;
      }(i);
    });
  }
  return s.registerId = function(t) {
    return du(t);
  }, s.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new s(Le(Le({}, this.options), t), this.gs, e && this.names || void 0);
  }, s.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, s.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var n = e.useCSSOMInjection, i = e.target;
      return e.isServer ? new Dx(i) : n ? new Mx(i) : new Fx(i);
    }(this.options), new xx(t)));
    var t;
  }, s.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, s.prototype.registerName = function(t, e) {
    if (du(t), this.names.has(t))
      this.names.get(t).add(e);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(e), this.names.set(t, n);
    }
  }, s.prototype.insertRules = function(t, e, n) {
    this.registerName(t, e), this.getTag().insertRules(du(t), n);
  }, s.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, s.prototype.clearRules = function(t) {
    this.getTag().clearGroup(du(t)), this.clearNames(t);
  }, s.prototype.clearTag = function() {
    this.tag = void 0;
  }, s;
}(), Nx = /&/g, Bx = /^\s*\/\/.*$/gm;
function ab(s, t) {
  return s.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = ab(e.children, t)), e;
  });
}
function $x(s) {
  var t, e, n, i = Qo, r = i.options, a = r === void 0 ? Qo : r, l = i.plugins, c = l === void 0 ? lp : l, u = function(g, v, y) {
    return y.startsWith(e) && y.endsWith(e) && y.replaceAll(e, "").length > 0 ? ".".concat(t) : g;
  }, h = c.slice();
  h.push(function(g) {
    g.type === ip && g.value.includes("&") && (g.props[0] = g.props[0].replace(Nx, e).replace(n, u));
  }), a.prefix && h.push(ox), h.push(sx);
  var f = function(g, v, y, _) {
    v === void 0 && (v = ""), y === void 0 && (y = ""), _ === void 0 && (_ = "&"), t = _, e = v, n = new RegExp("\\".concat(e, "\\b"), "g");
    var C = g.replace(Bx, ""), E = nx(y || v ? "".concat(y, " ").concat(v, " { ").concat(C, " }") : C);
    a.namespace && (E = ab(E, a.namespace));
    var P = [];
    return nd(E, rx(h.concat(ax(function(L) {
      return P.push(L);
    })))), P;
  };
  return f.hash = c.length ? c.reduce(function(g, v) {
    return v.name || Gi(15), Us(g, v.name);
  }, Ky).toString() : "", f;
}
var Hx = new rb(), Sg = $x(), ob = ea.createContext({ shouldForwardProp: void 0, styleSheet: Hx, stylis: Sg });
ob.Consumer;
ea.createContext(void 0);
function gv() {
  return Be(ob);
}
var xg = function() {
  function s(t, e) {
    var n = this;
    this.inject = function(i, r) {
      r === void 0 && (r = Sg);
      var a = n.name + r.hash;
      i.hasNameForId(n.id, a) || i.insertRules(n.id, a, r(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, o0(this, function() {
      throw Gi(12, String(n.name));
    });
  }
  return s.prototype.getName = function(t) {
    return t === void 0 && (t = Sg), this.name + t.hash;
  }, s;
}(), Ux = function(s) {
  return s >= "A" && s <= "Z";
};
function mv(s) {
  for (var t = "", e = 0; e < s.length; e++) {
    var n = s[e];
    if (e === 1 && n === "-" && s[0] === "-")
      return s;
    Ux(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var lb = function(s) {
  return s == null || s === !1 || s === "";
}, cb = function(s) {
  var t, e, n = [];
  for (var i in s) {
    var r = s[i];
    s.hasOwnProperty(i) && !lb(r) && (Array.isArray(r) && r.isCss || sa(r) ? n.push("".concat(mv(i), ":"), r, ";") : tl(r) ? n.push.apply(n, na(na(["".concat(i, " {")], cb(r), !1), ["}"], !1)) : n.push("".concat(mv(i), ": ").concat((t = i, (e = r) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in lx || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return n;
};
function ta(s, t, e, n) {
  if (lb(s))
    return [];
  if (a0(s))
    return [".".concat(s.styledComponentId)];
  if (sa(s)) {
    if (!sa(r = s) || r.prototype && r.prototype.isReactComponent || !t)
      return [s];
    var i = s(t);
    return ut.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof xg || tl(i) || i === null || console.error("".concat(Qy(s), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ta(i, t, e, n);
  }
  var r;
  return s instanceof xg ? e ? (s.inject(e, n), [s.getName(n)]) : [s] : tl(s) ? cb(s) : Array.isArray(s) ? Array.prototype.concat.apply(lp, s.map(function(a) {
    return ta(a, t, e, n);
  })) : [s.toString()];
}
function jx(s) {
  for (var t = 0; t < s.length; t += 1) {
    var e = s[t];
    if (sa(e) && !a0(e))
      return !1;
  }
  return !0;
}
var zx = Zy(op), Vx = function() {
  function s(t, e, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ut.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && jx(t), this.componentId = e, this.baseHash = Us(zx, e), this.baseStyle = n, rb.registerId(e);
  }
  return s.prototype.generateAndInjectStyles = function(t, e, n) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId))
        i = Gs(i, this.staticRulesId);
      else {
        var r = _g(ta(this.rules, t, e, n)), a = Ag(Us(this.baseHash, r) >>> 0);
        if (!e.hasNameForId(this.componentId, a)) {
          var l = n(r, ".".concat(a), void 0, this.componentId);
          e.insertRules(this.componentId, a, l);
        }
        i = Gs(i, a), this.staticRulesId = a;
      }
    else {
      for (var c = Us(this.baseHash, n.hash), u = "", h = 0; h < this.rules.length; h++) {
        var f = this.rules[h];
        if (typeof f == "string")
          u += f, ut.env.NODE_ENV !== "production" && (c = Us(c, f));
        else if (f) {
          var g = _g(ta(f, t, e, n));
          c = Us(c, g + h), u += g;
        }
      }
      if (u) {
        var v = Ag(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, n(u, ".".concat(v), void 0, this.componentId)), i = Gs(i, v);
      }
    }
    return i;
  }, s;
}(), sd = ea.createContext(void 0);
sd.Consumer;
function Gx(s) {
  var t = ea.useContext(sd), e = gn(function() {
    return function(n, i) {
      if (!n)
        throw Gi(14);
      if (sa(n)) {
        var r = n(i);
        if (ut.env.NODE_ENV !== "production" && (r === null || Array.isArray(r) || typeof r != "object"))
          throw Gi(7);
        return r;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw Gi(8);
      return i ? Le(Le({}, i), n) : n;
    }(s.theme, t);
  }, [s.theme, t]);
  return s.children ? ea.createElement(sd.Provider, { value: e }, s.children) : null;
}
var Zp = {}, vv = /* @__PURE__ */ new Set();
function Wx(s, t, e) {
  var n = a0(s), i = s, r = !Kp(s), a = t.attrs, l = a === void 0 ? lp : a, c = t.componentId, u = c === void 0 ? function(k, F) {
    var I = typeof k != "string" ? "sc" : cv(k);
    Zp[I] = (Zp[I] || 0) + 1;
    var M = "".concat(I, "-").concat(Jy(op + I + Zp[I]));
    return F ? "".concat(F, "-").concat(M) : M;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, f = h === void 0 ? function(k) {
    return Kp(k) ? "styled.".concat(k) : "Styled(".concat(Qy(k), ")");
  }(s) : h, g = t.displayName && t.componentId ? "".concat(cv(t.displayName), "-").concat(t.componentId) : t.componentId || u, v = n && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, y = t.shouldForwardProp;
  if (n && i.shouldForwardProp) {
    var _ = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      y = function(k, F) {
        return _(k, F) && C(k, F);
      };
    } else
      y = _;
  }
  var E = new Vx(e, g, n ? i.componentStyle : void 0);
  function P(k, F) {
    return function(I, M, x) {
      var T = I.attrs, D = I.componentStyle, N = I.defaultProps, U = I.foldedComponentIds, z = I.styledComponentId, V = I.target, K = ea.useContext(sd), X = gv(), B = I.shouldForwardProp || X.shouldForwardProp;
      ut.env.NODE_ENV !== "production" && D0(z);
      var G = ux(M, K, N) || Qo, W = function(J, lt, et) {
        for (var rt, q = Le(Le({}, lt), { className: void 0, theme: et }), Y = 0; Y < J.length; Y += 1) {
          var dt = sa(rt = J[Y]) ? rt(q) : rt;
          for (var gt in dt)
            q[gt] = gt === "className" ? Gs(q[gt], dt[gt]) : gt === "style" ? Le(Le({}, q[gt]), dt[gt]) : dt[gt];
        }
        return lt.className && (q.className = Gs(q.className, lt.className)), q;
      }(T, M, G), bt = W.as || V, At = {};
      for (var j in W)
        W[j] === void 0 || j[0] === "$" || j === "as" || j === "theme" && W.theme === G || (j === "forwardedAs" ? At.as = W.forwardedAs : B && !B(j, bt) || (At[j] = W[j], B || ut.env.NODE_ENV !== "development" || zS(j) || vv.has(j) || !wg.has(bt) || (vv.add(j), console.warn('styled-components: it looks like an unknown prop "'.concat(j, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var nt = function(J, lt) {
        var et = gv(), rt = J.generateAndInjectStyles(lt, et.styleSheet, et.stylis);
        return ut.env.NODE_ENV !== "production" && D0(rt), rt;
      }(D, W);
      ut.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(nt);
      var it = Gs(U, z);
      return nt && (it += " " + nt), W.className && (it += " " + W.className), At[Kp(bt) && !wg.has(bt) ? "class" : "className"] = it, At.ref = x, J1(bt, At);
    }(L, k, F);
  }
  P.displayName = f;
  var L = ea.forwardRef(P);
  return L.attrs = v, L.componentStyle = E, L.displayName = f, L.shouldForwardProp = y, L.foldedComponentIds = n ? Gs(i.foldedComponentIds, i.styledComponentId) : "", L.styledComponentId = g, L.target = n ? i.target : s, Object.defineProperty(L, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? function(F) {
      for (var I = [], M = 1; M < arguments.length; M++)
        I[M - 1] = arguments[M];
      for (var x = 0, T = I; x < T.length; x++)
        Eg(F, T[x], !0);
      return F;
    }({}, i.defaultProps, k) : k;
  } }), ut.env.NODE_ENV !== "production" && (hx(f, g), L.warnTooManyClasses = /* @__PURE__ */ function(k, F) {
    var I = {}, M = !1;
    return function(x) {
      if (!M && (I[x] = !0, Object.keys(I).length >= 200)) {
        var T = F ? ' with the id of "'.concat(F, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(k).concat(T, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, I = {};
      }
    };
  }(f, g)), o0(L, function() {
    return ".".concat(L.styledComponentId);
  }), r && ib(L, s, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), L;
}
function yv(s, t) {
  for (var e = [s[0]], n = 0, i = t.length; n < i; n += 1)
    e.push(t[n], s[n + 1]);
  return e;
}
var bv = function(s) {
  return Object.assign(s, { isCss: !0 });
};
function cp(s) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  if (sa(s) || tl(s))
    return bv(ta(yv(lp, na([s], t, !0))));
  var n = s;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ta(n) : bv(ta(yv(n, t)));
}
function Cg(s, t, e) {
  if (e === void 0 && (e = Qo), !t)
    throw Gi(1, t);
  var n = function(i) {
    for (var r = [], a = 1; a < arguments.length; a++)
      r[a - 1] = arguments[a];
    return s(t, e, cp.apply(void 0, na([i], r, !1)));
  };
  return n.attrs = function(i) {
    return Cg(s, t, Le(Le({}, e), { attrs: Array.prototype.concat(e.attrs, i).filter(Boolean) }));
  }, n.withConfig = function(i) {
    return Cg(s, t, Le(Le({}, e), i));
  }, n;
}
var hb = function(s) {
  return Cg(Wx, s);
}, yt = hb;
wg.forEach(function(s) {
  yt[s] = hb(s);
});
function qx(s) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  ut.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var n = _g(cp.apply(void 0, na([s], t, !1))), i = Jy(n);
  return new xg(i, n);
}
ut.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var fu = "__sc-".concat(ia, "__");
ut.env.NODE_ENV !== "production" && ut.env.NODE_ENV !== "test" && typeof window < "u" && (window[fu] || (window[fu] = 0), window[fu] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[fu] += 1);
const Xx = "Document {{ currentFileNo }} of {{ allFilesCount }}", Yx = "No renderer for file type: {{{ fileType }}}", Kx = "Download file", Zx = "Your file is broken. Please check it on your machine.", Jx = "Recipients", Qx = "Sender", tC = "Loading...", eC = "Page {{ currentPage }}/{{ allPagesCount }}", nC = {
  documentNavInfo: Xx,
  noRendererMessage: Yx,
  downloadButtonLabel: Kx,
  brokenFile: Zx,
  msgPluginRecipients: Jx,
  msgPluginSender: Qx,
  pdfPluginLoading: tC,
  pdfPluginPageNumber: eC
}, iC = "Dokument {{ currentFileNo }} z {{ allFilesCount }}", sC = "Brak funckji renderującej dla: {{{ fileType }}}", rC = "Pobierz plik", aC = "Twój plik jest uszkodzony. Sprawdź go na swoim komputerze.", oC = "Odbiorcy", lC = "Nadawca", cC = "Wczytywanie...", hC = "Strona {{ currentPage }}/{{ allPagesCount }}", uC = {
  documentNavInfo: iC,
  noRendererMessage: sC,
  downloadButtonLabel: rC,
  brokenFile: aC,
  msgPluginRecipients: oC,
  msgPluginSender: lC,
  pdfPluginLoading: cC,
  pdfPluginPageNumber: hC
}, dC = "Documento {{ currentFileNo }} de {{ allFilesCount }}", fC = "No hay procesador para el tipo de archivo: {{{ fileType }}}", pC = "Descargar archivo", gC = "Tu archivo está roto. Compruébalo en tu máquina.", mC = "Destinatarios", vC = "Remitente", yC = "Cargando...", bC = "Página {{ currentPage }}/{{ allPagesCount }}", wC = {
  documentNavInfo: dC,
  noRendererMessage: fC,
  downloadButtonLabel: pC,
  brokenFile: gC,
  msgPluginRecipients: mC,
  msgPluginSender: vC,
  pdfPluginLoading: yC,
  pdfPluginPageNumber: bC
}, AC = "Dokument {{ currentFileNo }} von {{ allFilesCount }}", _C = "Kein Renderer für Dateityp: {{{ fileType }}}", EC = "Datei herunterladen", SC = "Ihre Datei ist defekt. Bitte überprüfen Sie sie auf Ihrem Rechner.", xC = "Empfänger", CC = "Absender", TC = "Wird geladen...", PC = "Seite {{ currentPage }}/{{ allPagesCount }}", RC = {
  documentNavInfo: AC,
  noRendererMessage: _C,
  downloadButtonLabel: EC,
  brokenFile: SC,
  msgPluginRecipients: xC,
  msgPluginSender: CC,
  pdfPluginLoading: TC,
  pdfPluginPageNumber: PC
}, LC = "Documento {{ currentFileNo }} di {{ allFilesCount }}", kC = "Nessun renderer per il tipo di file: {{{ fileType }}}", IC = "Scarica file", MC = "Il tuo file è danneggiato. Controllalo sul tuo computer.", FC = "Destinatari", DC = "Mittente", OC = "Caricamento in corso...", NC = "Pagina {{ currentPage }}/{{ allPagesCount }}", BC = {
  documentNavInfo: LC,
  noRendererMessage: kC,
  downloadButtonLabel: IC,
  brokenFile: MC,
  msgPluginRecipients: FC,
  msgPluginSender: DC,
  pdfPluginLoading: OC,
  pdfPluginPageNumber: NC
}, $C = "Documento {{ currentFileNo }} de {{ allFilesCount }}", HC = "Nenhum renderizador para o tipo de arquivo: {{{ fileType }}}", UC = "Baixar arquivo", jC = "Seu arquivo está quebrado. Por favor, verifique-o em sua máquina.", zC = "Destinatários", VC = "Remetente", GC = "Carregando...", WC = "Página {{ currentPage }}/{{ allPagesCount }}", qC = {
  documentNavInfo: $C,
  noRendererMessage: HC,
  downloadButtonLabel: UC,
  brokenFile: jC,
  msgPluginRecipients: zC,
  msgPluginSender: VC,
  pdfPluginLoading: GC,
  pdfPluginPageNumber: WC
}, XC = "Document {{ currentFileNo }} de {{ allFilesCount }}", YC = "Aucun moteur de rendu pour le type de fichier : {{{ fileType }}}", KC = "Télécharger le fichier", ZC = "Votre fichier est cassé. Veuillez le vérifier sur votre machine.", JC = "Destinataires", QC = "Expéditeur", tT = "Chargement...", eT = "Page {{ currentPage }}/{{ allPagesCount }}", nT = {
  documentNavInfo: XC,
  noRendererMessage: YC,
  downloadButtonLabel: KC,
  brokenFile: ZC,
  msgPluginRecipients: JC,
  msgPluginSender: QC,
  pdfPluginLoading: tT,
  pdfPluginPageNumber: eT
}, iT = "مستند {{ currentFileNo }} من {{ allFilesCount }}", sT = "{{{ fileType }}} : لا يمكننا عرض هذا النوع من الملفات", rT = "تحميل الملف", aT = "الملف تالف، يرجى التحقق منه على جهازك الخاص.", oT = "المستلمين", lT = "المرسل", cT = "تحميل ...", hT = " {{ allPagesCount }} \\ {{ currentPage }} صفحة ", uT = {
  documentNavInfo: iT,
  noRendererMessage: sT,
  downloadButtonLabel: rT,
  brokenFile: aT,
  msgPluginRecipients: oT,
  msgPluginSender: lT,
  pdfPluginLoading: cT,
  pdfPluginPageNumber: hT
}, dT = "Dokument {{ currentFileNo }} od {{ allFilesCount }}", fT = "Ne postoji pregledač za tip fajla: {{ fileType }}", pT = "Preuzimanje fajla", gT = "Vaš fajl nije dobar. Molimo Vas da probate da ga otvorite na vašem računaru.", mT = "Primaoci", vT = "Pošiljalac", yT = "Učitavanje...", bT = "Strana {{ currentPage }}/{{ allPagesCount }}", wT = {
  documentNavInfo: dT,
  noRendererMessage: fT,
  downloadButtonLabel: pT,
  brokenFile: gT,
  msgPluginRecipients: mT,
  msgPluginSender: vT,
  pdfPluginLoading: yT,
  pdfPluginPageNumber: bT
}, AT = "Документ {{ currentFileNo }} od {{ allFilesCount }}", _T = "Не постоји прегледач за тип фајла: {{ fileType }}", ET = "Преузимање фајла", ST = "Ваш фајл није добар. Молимо Вас да пробате да га отворите на вашем рачунару.", xT = "Примаоци", CT = "Пошиљалац", TT = "Учитавање...", PT = "Страна {{ currentPage }}/{{ allPagesCount }}", RT = {
  documentNavInfo: AT,
  noRendererMessage: _T,
  downloadButtonLabel: ET,
  brokenFile: ST,
  msgPluginRecipients: xT,
  msgPluginSender: CT,
  pdfPluginLoading: TT,
  pdfPluginPageNumber: PT
}, LT = "ファイル {{ currentFileNo }} / {{ allFilesCount }}", kT = "ファイルタイプに対応したレンダラーはありません: {{ fileType }}", IT = "ダウンロード", MT = "ファイルが壊れています。あなたのマシンでファイルを確認してください。", FT = "受信者", DT = "送信者", OT = "ローティング中...", NT = "ページ {{ currentPage }}/{{ allPagesCount }}", BT = {
  documentNavInfo: LT,
  noRendererMessage: kT,
  downloadButtonLabel: IT,
  brokenFile: MT,
  msgPluginRecipients: FT,
  msgPluginSender: DT,
  pdfPluginLoading: OT,
  pdfPluginPageNumber: NT
}, $T = "Документ {{ currentFileNo }} из {{ allFilesCount }}", HT = "Данный тип файла не поддерживается рендером: {{{ fileType }}}", UT = "Скачать файл", jT = "Ваш файл сломан. Пожалуйста, проверьте его на своём комьютере.", zT = "Получатели", VT = "Отправитель", GT = "Загрузка...", WT = "Страница {{ currentPage }}/{{ allPagesCount }}", qT = {
  documentNavInfo: $T,
  noRendererMessage: HT,
  downloadButtonLabel: UT,
  brokenFile: jT,
  msgPluginRecipients: zT,
  msgPluginSender: VT,
  pdfPluginLoading: GT,
  pdfPluginPageNumber: WT
}, XT = "Dokument {{ currentFileNo }} av {{ allFilesCount }}", YT = "Ingen renderare för filtypen: {{{ fileType }}}", KT = "Ladda ner", ZT = "Filen är trasig. Var vänlig kontrollera den på din maskin.", JT = "Mottagare", QT = "Avsändare", tP = "Laddar...", eP = "Sida {{ currentPage }}/{{ allPagesCount }}", nP = {
  documentNavInfo: XT,
  noRendererMessage: YT,
  downloadButtonLabel: KT,
  brokenFile: ZT,
  msgPluginRecipients: JT,
  msgPluginSender: QT,
  pdfPluginLoading: tP,
  pdfPluginPageNumber: eP
}, rd = {
  en: nC,
  pl: uC,
  es: wC,
  de: RC,
  it: BC,
  pt: qC,
  fr: nT,
  ar: uT,
  sr: wT,
  sr_cyr: RT,
  ja: BT,
  ru: qT,
  se: nP
}, Q2 = Object.keys(rd), l0 = "en", ub = "SET_ALL_DOCUMENTS", db = "SET_DOCUMENT_LOADING", fb = "NEXT_DOCUMENT", pb = "PREVIOUS_DOCUMENT", gb = "UPDATE_CURRENT_DOCUMENT", mb = "SET_RENDERER_RECT", vb = "SET_MAIN_CONFIG", iP = (s, t) => ({
  type: ub,
  documents: s,
  initialActiveDocument: t
}), Jp = (s) => ({
  type: db,
  value: s
}), c0 = () => ({ type: fb }), h0 = () => ({
  type: pb
}), Tg = (s) => ({ type: gb, document: s }), sP = (s) => ({
  type: mb,
  rect: s
}), rP = (s) => ({
  type: vb,
  config: s
}), ad = {
  currentFileNo: 0,
  documents: [],
  documentLoading: !0,
  currentDocument: void 0,
  rendererRect: void 0,
  config: {},
  pluginRenderers: [],
  language: l0
}, aP = (s = ad, t) => {
  switch (t.type) {
    case ub: {
      const { documents: e, initialActiveDocument: n } = t;
      return {
        ...s,
        documents: e,
        currentDocument: n || e[0] || null,
        currentFileNo: n && e.includes(n) ? e.indexOf(n) : ad.currentFileNo
      };
    }
    case db: {
      const { value: e } = t;
      return { ...s, documentLoading: e };
    }
    case fb: {
      if (s.currentFileNo >= s.documents.length - 1)
        return s;
      const e = s.currentFileNo + 1;
      return s.onDocumentChange && s.onDocumentChange(s.documents[e]), {
        ...s,
        currentFileNo: e,
        currentDocument: s.documents[e],
        documentLoading: !0
      };
    }
    case pb: {
      if (s.currentFileNo <= 0)
        return s;
      const e = s.currentFileNo - 1;
      return s.onDocumentChange && s.onDocumentChange(s.documents[e]), {
        ...s,
        currentFileNo: s.currentFileNo - 1,
        currentDocument: s.documents[e],
        documentLoading: !0
      };
    }
    case gb: {
      const { document: e } = t;
      return {
        ...s,
        currentDocument: e,
        currentFileNo: s.documents.findIndex(
          (n) => n.uri === e.uri
        )
      };
    }
    case mb: {
      const { rect: e } = t;
      return {
        ...s,
        rendererRect: e
      };
    }
    case vb: {
      const { config: e } = t;
      return {
        ...s,
        config: e
      };
    }
    default:
      return s;
  }
}, Ms = ep({ state: ad, dispatch: () => null }), oP = qm((s, t) => {
  const {
    children: e,
    documents: n,
    config: i,
    pluginRenderers: r,
    prefetchMethod: a,
    requestHeaders: l,
    initialActiveDocument: c,
    language: u,
    activeDocument: h,
    onDocumentChange: f
  } = s, [g, v] = Xm(aP, {
    ...ad,
    documents: n || [],
    currentDocument: n && n.length ? c || n[0] : void 0,
    config: i,
    pluginRenderers: r,
    prefetchMethod: a,
    requestHeaders: l,
    currentFileNo: c ? n.findIndex((y) => y === c) ?? 0 : 0,
    language: u && rd[u] ? u : l0,
    activeDocument: h,
    onDocumentChange: f
  });
  return Et(() => {
    v(iP(n, c)), i && v(rP(i));
  }, [n, i, c]), Et(() => {
    h && v(Tg(h));
  }, [h]), iy(
    t,
    () => ({
      prev() {
        v(h0());
      },
      next() {
        v(c0());
      }
    }),
    [v]
  ), /* @__PURE__ */ $(Ms.Provider, { value: { state: g, dispatch: v }, children: e });
}), lP = cp`
  background-color: ${(s) => s.theme.primary};
  color: ${(s) => s.theme.textPrimary};
`, cP = cp`
  background-color: ${(s) => s.theme.secondary};
  color: ${(s) => s.theme.textSecondary};
`, hp = yt.button`
  ${lP}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0 0 0 5px;
  text-align: center;
  font-size: 18px;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  opacity: ${(s) => s.disabled ? 0.4 : 1};
  pointer-events: ${(s) => s.disabled ? "none" : "all"};
  box-shadow: 2px 2px 3px #00000033;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`, yb = yt.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 35px;
  background-color: ${(s) => s.theme.primary};
  color: ${(s) => s.theme.textPrimary};
  box-shadow: 2px 2px 3px #00000033;

  width: 35px;
  height: 35px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
`;
yt(hp)``;
const hP = yt(hp)`
  ${cP}
`, uP = (s) => /* @__PURE__ */ $(bb, { ...s }), dP = (s) => /* @__PURE__ */ $(bb, { ...s, reverse: !0 }), bb = ({ color: s, size: t, reverse: e }) => /* @__PURE__ */ $(
  "svg",
  {
    width: t || "100%",
    height: t || "100%",
    style: { transform: `${e ? "rotate(180deg)" : ""}` },
    id: "arrow_left",
    version: "1.1",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ $(
      "path",
      {
        clipRule: "evenodd",
        d: "M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z",
        fill: s || "#aaa",
        fillRule: "evenodd",
        id: "Arrow_Back"
      }
    )
  }
), fP = (s) => {
  const { color: t, size: e } = s;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      version: "1.1",
      id: "Icons",
      viewBox: "0 0 32 32",
      xmlSpace: "preserve",
      style: { alignSelf: "center", justifySelf: "center" },
      children: /* @__PURE__ */ on("g", { children: [
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,2c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1V3C17,2.4,16.6,2,16,2z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1
		z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M9,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h5C8.6,17,9,16.6,9,16z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M9.6,20.9l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4
		S10,20.6,9.6,20.9z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M16,23c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5C17,23.4,16.6,23,16,23z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M22.4,20.9c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.5,3.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4
		L22.4,20.9z`
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: "M29,15h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5c0.6,0,1-0.4,1-1S29.6,15,29,15z"
          }
        ),
        /* @__PURE__ */ $(
          "path",
          {
            fill: t || "#aaa",
            d: `M21.7,11.3c0.3,0,0.5-0.1,0.7-0.3l3.5-3.5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4
		C21.1,11.2,21.4,11.3,21.7,11.3z`
          }
        )
      ] })
    }
  );
};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var pP = Object.prototype.toString, sl = Array.isArray || function(t) {
  return pP.call(t) === "[object Array]";
};
function u0(s) {
  return typeof s == "function";
}
function gP(s) {
  return sl(s) ? "array" : typeof s;
}
function Qp(s) {
  return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function wv(s, t) {
  return s != null && typeof s == "object" && t in s;
}
function mP(s, t) {
  return s != null && typeof s != "object" && s.hasOwnProperty && s.hasOwnProperty(t);
}
var vP = RegExp.prototype.test;
function yP(s, t) {
  return vP.call(s, t);
}
var bP = /\S/;
function wP(s) {
  return !yP(bP, s);
}
var AP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function _P(s) {
  return String(s).replace(/[&<>"'`=\/]/g, function(e) {
    return AP[e];
  });
}
var EP = /\s*/, SP = /\s+/, Av = /\s*=/, xP = /\s*\}/, CP = /#|\^|\/|>|\{|&|=|!/;
function TP(s, t) {
  if (!s)
    return [];
  var e = !1, n = [], i = [], r = [], a = !1, l = !1, c = "", u = 0;
  function h() {
    if (a && !l)
      for (; r.length; )
        delete i[r.pop()];
    else
      r = [];
    a = !1, l = !1;
  }
  var f, g, v;
  function y(x) {
    if (typeof x == "string" && (x = x.split(SP, 2)), !sl(x) || x.length !== 2)
      throw new Error("Invalid tags: " + x);
    f = new RegExp(Qp(x[0]) + "\\s*"), g = new RegExp("\\s*" + Qp(x[1])), v = new RegExp("\\s*" + Qp("}" + x[1]));
  }
  y(t || an.tags);
  for (var _ = new tu(s), C, E, P, L, k, F; !_.eos(); ) {
    if (C = _.pos, P = _.scanUntil(f), P)
      for (var I = 0, M = P.length; I < M; ++I)
        L = P.charAt(I), wP(L) ? (r.push(i.length), c += L) : (l = !0, e = !0, c += " "), i.push(["text", L, C, C + 1]), C += 1, L === `
` && (h(), c = "", u = 0, e = !1);
    if (!_.scan(f))
      break;
    if (a = !0, E = _.scan(CP) || "name", _.scan(EP), E === "=" ? (P = _.scanUntil(Av), _.scan(Av), _.scanUntil(g)) : E === "{" ? (P = _.scanUntil(v), _.scan(xP), _.scanUntil(g), E = "&") : P = _.scanUntil(g), !_.scan(g))
      throw new Error("Unclosed tag at " + _.pos);
    if (E == ">" ? k = [E, P, C, _.pos, c, u, e] : k = [E, P, C, _.pos], u++, i.push(k), E === "#" || E === "^")
      n.push(k);
    else if (E === "/") {
      if (F = n.pop(), !F)
        throw new Error('Unopened section "' + P + '" at ' + C);
      if (F[1] !== P)
        throw new Error('Unclosed section "' + F[1] + '" at ' + C);
    } else
      E === "name" || E === "{" || E === "&" ? l = !0 : E === "=" && y(P);
  }
  if (h(), F = n.pop(), F)
    throw new Error('Unclosed section "' + F[1] + '" at ' + _.pos);
  return RP(PP(i));
}
function PP(s) {
  for (var t = [], e, n, i = 0, r = s.length; i < r; ++i)
    e = s[i], e && (e[0] === "text" && n && n[0] === "text" ? (n[1] += e[1], n[3] = e[3]) : (t.push(e), n = e));
  return t;
}
function RP(s) {
  for (var t = [], e = t, n = [], i, r, a = 0, l = s.length; a < l; ++a)
    switch (i = s[a], i[0]) {
      case "#":
      case "^":
        e.push(i), n.push(i), e = i[4] = [];
        break;
      case "/":
        r = n.pop(), r[5] = i[2], e = n.length > 0 ? n[n.length - 1][4] : t;
        break;
      default:
        e.push(i);
    }
  return t;
}
function tu(s) {
  this.string = s, this.tail = s, this.pos = 0;
}
tu.prototype.eos = function() {
  return this.tail === "";
};
tu.prototype.scan = function(t) {
  var e = this.tail.match(t);
  if (!e || e.index !== 0)
    return "";
  var n = e[0];
  return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
};
tu.prototype.scanUntil = function(t) {
  var e = this.tail.search(t), n;
  switch (e) {
    case -1:
      n = this.tail, this.tail = "";
      break;
    case 0:
      n = "";
      break;
    default:
      n = this.tail.substring(0, e), this.tail = this.tail.substring(e);
  }
  return this.pos += n.length, n;
};
function el(s, t) {
  this.view = s, this.cache = { ".": this.view }, this.parent = t;
}
el.prototype.push = function(t) {
  return new el(t, this);
};
el.prototype.lookup = function(t) {
  var e = this.cache, n;
  if (e.hasOwnProperty(t))
    n = e[t];
  else {
    for (var i = this, r, a, l, c = !1; i; ) {
      if (t.indexOf(".") > 0)
        for (r = i.view, a = t.split("."), l = 0; r != null && l < a.length; )
          l === a.length - 1 && (c = wv(r, a[l]) || mP(r, a[l])), r = r[a[l++]];
      else
        r = i.view[t], c = wv(i.view, t);
      if (c) {
        n = r;
        break;
      }
      i = i.parent;
    }
    e[t] = n;
  }
  return u0(n) && (n = n.call(this.view)), n;
};
function $e() {
  this.templateCache = {
    _cache: {},
    set: function(t, e) {
      this._cache[t] = e;
    },
    get: function(t) {
      return this._cache[t];
    },
    clear: function() {
      this._cache = {};
    }
  };
}
$e.prototype.clearCache = function() {
  typeof this.templateCache < "u" && this.templateCache.clear();
};
$e.prototype.parse = function(t, e) {
  var n = this.templateCache, i = t + ":" + (e || an.tags).join(":"), r = typeof n < "u", a = r ? n.get(i) : void 0;
  return a == null && (a = TP(t, e), r && n.set(i, a)), a;
};
$e.prototype.render = function(t, e, n, i) {
  var r = this.getConfigTags(i), a = this.parse(t, r), l = e instanceof el ? e : new el(e, void 0);
  return this.renderTokens(a, l, n, t, i);
};
$e.prototype.renderTokens = function(t, e, n, i, r) {
  for (var a = "", l, c, u, h = 0, f = t.length; h < f; ++h)
    u = void 0, l = t[h], c = l[0], c === "#" ? u = this.renderSection(l, e, n, i, r) : c === "^" ? u = this.renderInverted(l, e, n, i, r) : c === ">" ? u = this.renderPartial(l, e, n, r) : c === "&" ? u = this.unescapedValue(l, e) : c === "name" ? u = this.escapedValue(l, e, r) : c === "text" && (u = this.rawValue(l)), u !== void 0 && (a += u);
  return a;
};
$e.prototype.renderSection = function(t, e, n, i, r) {
  var a = this, l = "", c = e.lookup(t[1]);
  function u(g) {
    return a.render(g, e, n, r);
  }
  if (c) {
    if (sl(c))
      for (var h = 0, f = c.length; h < f; ++h)
        l += this.renderTokens(t[4], e.push(c[h]), n, i, r);
    else if (typeof c == "object" || typeof c == "string" || typeof c == "number")
      l += this.renderTokens(t[4], e.push(c), n, i, r);
    else if (u0(c)) {
      if (typeof i != "string")
        throw new Error("Cannot use higher-order sections without the original template");
      c = c.call(e.view, i.slice(t[3], t[5]), u), c != null && (l += c);
    } else
      l += this.renderTokens(t[4], e, n, i, r);
    return l;
  }
};
$e.prototype.renderInverted = function(t, e, n, i, r) {
  var a = e.lookup(t[1]);
  if (!a || sl(a) && a.length === 0)
    return this.renderTokens(t[4], e, n, i, r);
};
$e.prototype.indentPartial = function(t, e, n) {
  for (var i = e.replace(/[^ \t]/g, ""), r = t.split(`
`), a = 0; a < r.length; a++)
    r[a].length && (a > 0 || !n) && (r[a] = i + r[a]);
  return r.join(`
`);
};
$e.prototype.renderPartial = function(t, e, n, i) {
  if (n) {
    var r = this.getConfigTags(i), a = u0(n) ? n(t[1]) : n[t[1]];
    if (a != null) {
      var l = t[6], c = t[5], u = t[4], h = a;
      c == 0 && u && (h = this.indentPartial(a, u, l));
      var f = this.parse(h, r);
      return this.renderTokens(f, e, n, h, i);
    }
  }
};
$e.prototype.unescapedValue = function(t, e) {
  var n = e.lookup(t[1]);
  if (n != null)
    return n;
};
$e.prototype.escapedValue = function(t, e, n) {
  var i = this.getConfigEscape(n) || an.escape, r = e.lookup(t[1]);
  if (r != null)
    return typeof r == "number" && i === an.escape ? String(r) : i(r);
};
$e.prototype.rawValue = function(t) {
  return t[1];
};
$e.prototype.getConfigTags = function(t) {
  return sl(t) ? t : t && typeof t == "object" ? t.tags : void 0;
};
$e.prototype.getConfigEscape = function(t) {
  if (t && typeof t == "object" && !sl(t))
    return t.escape;
};
var an = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(s) {
    Il.templateCache = s;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return Il.templateCache;
  }
}, Il = new $e();
an.clearCache = function() {
  return Il.clearCache();
};
an.parse = function(t, e) {
  return Il.parse(t, e);
};
an.render = function(t, e, n, i) {
  if (typeof t != "string")
    throw new TypeError('Invalid template! Template should be a "string" but "' + gP(t) + '" was given as the first argument for mustache#render(template, view, partials)');
  return Il.render(t, e, n, i);
};
an.escape = _P;
an.Scanner = tu;
an.Context = el;
an.Writer = $e;
const ua = () => {
  const {
    state: { language: s }
  } = Be(Ms), t = rd[l0];
  return {
    t: Ls(
      (n, i) => {
        const r = rd[s];
        return r[n] ? an.render(r[n], i) : t[n] ? an.render(t[n], i) : n;
      },
      [s, t]
    )
  };
}, LP = () => {
  const {
    state: { currentDocument: s, currentFileNo: t, documents: e },
    dispatch: n
  } = Be(Ms), { t: i } = ua();
  if (e.length <= 1 || !s)
    return null;
  let r = s.uri || "";
  const a = r == null ? void 0 : r.split("/");
  return a.length && (r = a[a.length - 1]), /* @__PURE__ */ on(kP, { id: "doc-nav", children: [
    /* @__PURE__ */ $("p", { id: "doc-nav-info", children: i("documentNavInfo", {
      currentFileNo: t + 1,
      allFilesCount: e.length
    }) }),
    /* @__PURE__ */ $(
      wb,
      {
        id: "doc-nav-prev",
        onClick: () => n(h0()),
        disabled: t === 0,
        children: /* @__PURE__ */ $(uP, { color: "#fff", size: "60%" })
      }
    ),
    /* @__PURE__ */ $(
      IP,
      {
        id: "doc-nav-next",
        onClick: () => n(c0()),
        disabled: t >= e.length - 1,
        children: /* @__PURE__ */ $(dP, { color: "#fff", size: "60%" })
      }
    )
  ] });
}, kP = yt.div`
  min-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 10px;
  color: ${(s) => s.theme.textPrimary};
`, wb = yt(hP)`
  width: 30px;
  height: 30px;
  margin: 0 5px 0 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, IP = yt(wb)`
  margin: 0 5px;
`, Ab = (s, t) => {
  var n;
  if (!s)
    return "";
  let e = "";
  if (s.fileName)
    e = s.fileName;
  else {
    e = s.uri || "", e = decodeURI(e), t || (e = (n = e == null ? void 0 : e.split("?")) == null ? void 0 : n[0]);
    const i = e == null ? void 0 : e.split("/");
    i.length && (e = i[i.length - 1]);
  }
  return e;
}, MP = () => {
  var n, i;
  const {
    state: { config: s, currentDocument: t }
  } = Be(Ms);
  if (!t || (n = s == null ? void 0 : s.header) != null && n.disableFileName)
    return null;
  const e = Ab(
    t,
    ((i = s == null ? void 0 : s.header) == null ? void 0 : i.retainURLParams) || !1
  );
  return /* @__PURE__ */ $(FP, { id: "file-name", "data-testid": "file-name", children: e });
}, FP = yt.div`
  flex: 1;
  text-align: left;
  color: ${(s) => s.theme.textPrimary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`, DP = () => {
  var i, r, a;
  const { state: s, dispatch: t } = Be(Ms), { config: e } = s;
  if ((i = e == null ? void 0 : e.header) != null && i.disableHeader)
    return null;
  const n = (a = (r = e == null ? void 0 : e.header) == null ? void 0 : r.overrideComponent) == null ? void 0 : a.call(
    r,
    s,
    () => t(h0()),
    () => t(c0())
  );
  return n || /* @__PURE__ */ on(OP, { id: "header-bar", "data-testid": "header-bar", children: [
    /* @__PURE__ */ $(MP, {}),
    /* @__PURE__ */ $(LP, {})
  ] });
}, OP = yt.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
  background-color: ${(s) => s.theme.primary};
  font-size: 16px;
  min-height: 50px;

  @media (max-width: 768px) {
    min-height: 30px;
    padding: 5px;
    font-size: 10px;
  }
`, up = ({
  documentURI: s,
  signal: t,
  fileLoaderComplete: e,
  readerTypeFunction: n,
  headers: i
}) => fetch(s, { signal: t, headers: i }).then(async (r) => {
  const a = await r.blob(), l = new FileReader();
  switch (l.addEventListener(
    "loadend",
    () => e(l)
  ), n) {
    case "arrayBuffer":
      l.readAsArrayBuffer(a);
      break;
    case "binaryString":
      l.readAsBinaryString(a);
      break;
    case "dataURL":
      l.readAsDataURL(a);
      break;
    case "text":
      l.readAsText(a);
      break;
  }
}).catch((r) => r), NP = (s) => up({ ...s, readerTypeFunction: "arrayBuffer" }), _b = (s) => up({ ...s, readerTypeFunction: "dataURL" }), Eb = (s) => up({ ...s, readerTypeFunction: "text" }), tM = (s) => up({ ...s, readerTypeFunction: "binaryString" }), BP = _b, $P = () => {
  const {
    state: { currentDocument: s, pluginRenderers: t }
  } = Be(Ms), [e, n] = Ko();
  return Et(() => {
    if (!s)
      return;
    if (!s.fileType) {
      n(void 0);
      return;
    }
    const i = [];
    t == null || t.forEach((a) => {
      s.fileType !== void 0 && a.fileTypes.indexOf(s.fileType) >= 0 && i.push(a);
    });
    const [r] = i.sort(
      (a, l) => l.weight - a.weight
    );
    n(r && r !== void 0 ? () => r : null);
  }, [s, t]), { CurrentRenderer: e };
}, HP = () => {
  const { state: s, dispatch: t } = Be(Ms), { currentFileNo: e, currentDocument: n, prefetchMethod: i } = s, { CurrentRenderer: r } = $P(), a = (n == null ? void 0 : n.uri) || "";
  return Et(
    () => {
      if (!n || n.fileType !== void 0)
        return;
      const l = new AbortController(), { signal: c } = l;
      return fetch(a, {
        method: i || a.startsWith("blob:") ? "GET" : "HEAD",
        signal: c,
        headers: s == null ? void 0 : s.requestHeaders
      }).then((u) => {
        const h = u.headers.get("content-type"), f = (h == null ? void 0 : h.split(";")) || [], g = f.length ? f[0] : void 0;
        t(
          Tg({
            ...n,
            fileType: g || void 0
          })
        );
      }).catch((u) => {
        if ((u == null ? void 0 : u.name) !== "AbortError")
          throw u;
      }), () => {
        l.abort();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, a, n]
  ), Et(() => {
    var f;
    if (!n || r === void 0)
      return;
    const l = new AbortController(), { signal: c } = l, h = {
      documentURI: a,
      signal: c,
      fileLoaderComplete: (g) => {
        if (!n || !g) {
          t(Jp(!1));
          return;
        }
        const v = { ...n };
        g.result !== null && (v.fileData = g.result), t(Tg(v)), t(Jp(!1));
      },
      headers: s == null ? void 0 : s.requestHeaders
    };
    return r === null ? t(Jp(!1)) : r.fileLoader !== void 0 ? (f = r.fileLoader) == null || f.call(r, h) : BP(h), () => {
      l.abort();
    };
  }, [r, e]), { state: s, dispatch: t, CurrentRenderer: r };
}, UP = () => {
  const [s, t] = Ko({
    width: void 0,
    height: void 0
  });
  return Et(() => {
    function e() {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
  }, []), s;
}, _v = ({ children: s }) => {
  var r, a;
  const { state: t } = Be(Ms), { config: e } = t, [n, i] = Ko(
    ((r = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : r.showLoadingTimeout) === !1
  );
  return Et(() => {
    var l;
    setTimeout(
      () => {
        i(!0);
      },
      typeof ((l = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : l.showLoadingTimeout) == "number" ? e.loadingRenderer.showLoadingTimeout : 500
    );
  }, [(a = e == null ? void 0 : e.loadingRenderer) == null ? void 0 : a.showLoadingTimeout]), n ? /* @__PURE__ */ $(ny, { children: s }) : null;
}, jP = ({
  documents: s,
  documentLoading: t,
  config: e,
  currentDocument: n,
  fileName: i,
  CurrentRenderer: r,
  state: a,
  t: l
}) => {
  var c, u;
  if (s.length)
    if (t) {
      if (e && ((c = e == null ? void 0 : e.loadingRenderer) != null && c.overrideComponent)) {
        const h = e.loadingRenderer.overrideComponent;
        return /* @__PURE__ */ $(_v, { children: /* @__PURE__ */ $(h, { document: n, fileName: i }) });
      }
      return /* @__PURE__ */ $(_v, { children: /* @__PURE__ */ $(VP, { id: "loading-renderer", "data-testid": "loading-renderer", children: /* @__PURE__ */ $(WP, { children: /* @__PURE__ */ $(fP, { color: "#444", size: 40 }) }) }) });
    } else {
      if (r)
        return /* @__PURE__ */ $(r, { mainState: a });
      if (r === void 0)
        return null;
      if (e && ((u = e == null ? void 0 : e.noRenderer) != null && u.overrideComponent)) {
        const h = e.noRenderer.overrideComponent;
        return /* @__PURE__ */ $(h, { document: n, fileName: i });
      }
      return /* @__PURE__ */ on("div", { id: "no-renderer", "data-testid": "no-renderer", children: [
        l("noRendererMessage", {
          fileType: (n == null ? void 0 : n.fileType) ?? ""
        }),
        /* @__PURE__ */ $(
          qP,
          {
            id: "no-renderer-download",
            href: n == null ? void 0 : n.uri,
            download: n == null ? void 0 : n.uri,
            children: l("downloadButtonLabel")
          }
        )
      ] });
    }
  else
    return /* @__PURE__ */ $("div", { id: "no-documents" });
}, zP = () => {
  var f;
  const { state: s, dispatch: t, CurrentRenderer: e } = HP(), { documents: n, documentLoading: i, currentDocument: r, config: a } = s, l = UP(), { t: c } = ua(), u = Ls(
    (g) => {
      g && t(sP(g == null ? void 0 : g.getBoundingClientRect()));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, t]
  ), h = Ab(
    r,
    ((f = a == null ? void 0 : a.header) == null ? void 0 : f.retainURLParams) || !1
  );
  return /* @__PURE__ */ $("div", { id: "proxy-renderer", "data-testid": "proxy-renderer", ref: u, children: /* @__PURE__ */ $(
    jP,
    {
      state: s,
      documents: n,
      documentLoading: i,
      config: a,
      currentDocument: r,
      fileName: h,
      CurrentRenderer: e,
      t: c
    }
  ) });
}, VP = yt.div`
  display: flex;
  flex: 1;
  height: 75px;
  align-items: center;
  justify-content: center;
`, GP = qx`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, WP = yt.div`
  animation-name: ${GP};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`, qP = yt(yb)`
  width: 130px;
  height: 30px;
  background-color: ${(s) => s.theme.primary};
  @media (max-width: 768px) {
    width: 125px;
    height: 25px;
  }
`, Ev = {
  primary: "#fff",
  secondary: "#000",
  tertiary: "#ffffff99",
  textPrimary: "#000",
  textSecondary: "#fff",
  textTertiary: "#00000044",
  disableThemeScrollbar: !1
}, Xi = (s) => {
  const {
    mainState: { currentDocument: t },
    children: e
  } = s;
  return t ? /* @__PURE__ */ $(XP, { id: "image-renderer", ...s, children: e || /* @__PURE__ */ $(YP, { id: "image-img", src: t.fileData }) }) : null;
};
Xi.fileTypes = [];
Xi.weight = 0;
const XP = yt.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
`, YP = yt.img`
  max-width: 95%;
  max-height: 95%;
`, d0 = (s) => /* @__PURE__ */ $(Xi, { ...s });
d0.fileTypes = ["bmp", "image/bmp"];
d0.weight = 0;
const dp = ({ mainState: { currentDocument: s } }) => (Et(() => {
  const t = s == null ? void 0 : s.fileData;
  let e = "";
  const n = (t == null ? void 0 : t.replace(
    /^data:text\/html;(?:charset=([^;]*);)?base64,/,
    (c, u) => (e = u, "")
  )) || "";
  let i = window.atob(n);
  if (e) {
    const c = new Uint8Array(i.length);
    for (let u = 0; u < i.length; u++)
      c[u] = i.charCodeAt(u);
    i = new TextDecoder(e).decode(c);
  }
  const r = document.getElementById(
    "html-body"
  ), a = (r == null ? void 0 : r.contentWindow) && r.contentWindow;
  if (!a)
    return;
  const l = a.document;
  l.open(), l.write(`${i}`), l.close();
}, [s]), /* @__PURE__ */ $(KP, { id: "html-renderer", children: /* @__PURE__ */ $(ZP, { id: "html-body", sandbox: "allow-same-origin" }) }));
dp.fileTypes = ["htm", "html", "text/htm", "text/html"];
dp.weight = 0;
dp.fileLoader = _b;
const KP = yt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
`, ZP = yt.iframe`
  height: 100%;
  padding: 15px;
  margin: 20px 0 20px 0;
  border: 1px solid ${(s) => s.theme.secondary};
`, f0 = (s) => /* @__PURE__ */ $(Xi, { ...s });
f0.fileTypes = ["jpg", "jpeg", "image/jpg", "image/jpeg"];
f0.weight = 0;
const fp = ({ mainState: { currentDocument: s } }) => s ? /* @__PURE__ */ $(JP, { id: "msdoc-renderer", children: /* @__PURE__ */ $(
  QP,
  {
    id: "msdoc-iframe",
    title: "msdoc-iframe",
    src: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      s.uri
    )}`,
    frameBorder: "0"
  }
) }) : null, Ds = {
  odt: ["odt", "application/vnd.oasis.opendocument.text"],
  doc: ["doc", "application/msword"],
  docx: [
    "docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream"
  ],
  xls: ["xls", "application/vnd.ms-excel"],
  xlsx: [
    "xlsx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ],
  ppt: ["ppt", "application/vnd.ms-powerpoint"],
  pptx: [
    "pptx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ]
};
fp.fileTypes = [
  ...Ds.odt,
  ...Ds.doc,
  ...Ds.docx,
  ...Ds.xls,
  ...Ds.xlsx,
  ...Ds.ppt,
  ...Ds.pptx
];
fp.weight = 0;
fp.fileLoader = ({ fileLoaderComplete: s }) => s();
const JP = yt.div`
  width: 100%;
`, QP = yt.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;
var he = {}, pp = {};
pp.byteLength = nR;
pp.toByteArray = sR;
pp.fromByteArray = oR;
var si = [], cn = [], tR = typeof Uint8Array < "u" ? Uint8Array : Array, tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var va = 0, eR = tg.length; va < eR; ++va)
  si[va] = tg[va], cn[tg.charCodeAt(va)] = va;
cn[45] = 62;
cn[95] = 63;
function Sb(s) {
  var t = s.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = s.indexOf("=");
  e === -1 && (e = t);
  var n = e === t ? 0 : 4 - e % 4;
  return [e, n];
}
function nR(s) {
  var t = Sb(s), e = t[0], n = t[1];
  return (e + n) * 3 / 4 - n;
}
function iR(s, t, e) {
  return (t + e) * 3 / 4 - e;
}
function sR(s) {
  var t, e = Sb(s), n = e[0], i = e[1], r = new tR(iR(s, n, i)), a = 0, l = i > 0 ? n - 4 : n, c;
  for (c = 0; c < l; c += 4)
    t = cn[s.charCodeAt(c)] << 18 | cn[s.charCodeAt(c + 1)] << 12 | cn[s.charCodeAt(c + 2)] << 6 | cn[s.charCodeAt(c + 3)], r[a++] = t >> 16 & 255, r[a++] = t >> 8 & 255, r[a++] = t & 255;
  return i === 2 && (t = cn[s.charCodeAt(c)] << 2 | cn[s.charCodeAt(c + 1)] >> 4, r[a++] = t & 255), i === 1 && (t = cn[s.charCodeAt(c)] << 10 | cn[s.charCodeAt(c + 1)] << 4 | cn[s.charCodeAt(c + 2)] >> 2, r[a++] = t >> 8 & 255, r[a++] = t & 255), r;
}
function rR(s) {
  return si[s >> 18 & 63] + si[s >> 12 & 63] + si[s >> 6 & 63] + si[s & 63];
}
function aR(s, t, e) {
  for (var n, i = [], r = t; r < e; r += 3)
    n = (s[r] << 16 & 16711680) + (s[r + 1] << 8 & 65280) + (s[r + 2] & 255), i.push(rR(n));
  return i.join("");
}
function oR(s) {
  for (var t, e = s.length, n = e % 3, i = [], r = 16383, a = 0, l = e - n; a < l; a += r)
    i.push(aR(s, a, a + r > l ? l : a + r));
  return n === 1 ? (t = s[e - 1], i.push(
    si[t >> 2] + si[t << 4 & 63] + "=="
  )) : n === 2 && (t = (s[e - 2] << 8) + s[e - 1], i.push(
    si[t >> 10] + si[t >> 4 & 63] + si[t << 2 & 63] + "="
  )), i.join("");
}
var p0 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
p0.read = function(s, t, e, n, i) {
  var r, a, l = i * 8 - n - 1, c = (1 << l) - 1, u = c >> 1, h = -7, f = e ? i - 1 : 0, g = e ? -1 : 1, v = s[t + f];
  for (f += g, r = v & (1 << -h) - 1, v >>= -h, h += l; h > 0; r = r * 256 + s[t + f], f += g, h -= 8)
    ;
  for (a = r & (1 << -h) - 1, r >>= -h, h += n; h > 0; a = a * 256 + s[t + f], f += g, h -= 8)
    ;
  if (r === 0)
    r = 1 - u;
  else {
    if (r === c)
      return a ? NaN : (v ? -1 : 1) * (1 / 0);
    a = a + Math.pow(2, n), r = r - u;
  }
  return (v ? -1 : 1) * a * Math.pow(2, r - n);
};
p0.write = function(s, t, e, n, i, r) {
  var a, l, c, u = r * 8 - i - 1, h = (1 << u) - 1, f = h >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = n ? 0 : r - 1, y = n ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + f >= 1 ? t += g / c : t += g * Math.pow(2, 1 - f), t * c >= 2 && (a++, c /= 2), a + f >= h ? (l = 0, a = h) : a + f >= 1 ? (l = (t * c - 1) * Math.pow(2, i), a = a + f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; s[e + v] = l & 255, v += y, l /= 256, i -= 8)
    ;
  for (a = a << i | l, u += i; u > 0; s[e + v] = a & 255, v += y, a /= 256, u -= 8)
    ;
  s[e + v - y] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(s) {
  const t = pp, e = p0, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  s.Buffer = h, s.SlowBuffer = F, s.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  s.kMaxLength = i;
  const { Uint8Array: r, ArrayBuffer: a, SharedArrayBuffer: l } = globalThis;
  h.TYPED_ARRAY_SUPPORT = c(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const b = new r(1), d = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(d, r.prototype), Object.setPrototypeOf(b, d), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(h.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (h.isBuffer(this))
        return this.byteOffset;
    }
  });
  function u(b) {
    if (b > i)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const d = new r(b);
    return Object.setPrototypeOf(d, h.prototype), d;
  }
  function h(b, d, p) {
    if (typeof b == "number") {
      if (typeof d == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(b);
    }
    return f(b, d, p);
  }
  h.poolSize = 8192;
  function f(b, d, p) {
    if (typeof b == "string")
      return _(b, d);
    if (a.isView(b))
      return E(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (ot(b, a) || b && ot(b.buffer, a) || typeof l < "u" && (ot(b, l) || b && ot(b.buffer, l)))
      return P(b, d, p);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const S = b.valueOf && b.valueOf();
    if (S != null && S !== b)
      return h.from(S, d, p);
    const R = L(b);
    if (R)
      return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return h.from(b[Symbol.toPrimitive]("string"), d, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  h.from = function(b, d, p) {
    return f(b, d, p);
  }, Object.setPrototypeOf(h.prototype, r.prototype), Object.setPrototypeOf(h, r);
  function g(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function v(b, d, p) {
    return g(b), b <= 0 ? u(b) : d !== void 0 ? typeof p == "string" ? u(b).fill(d, p) : u(b).fill(d) : u(b);
  }
  h.alloc = function(b, d, p) {
    return v(b, d, p);
  };
  function y(b) {
    return g(b), u(b < 0 ? 0 : k(b) | 0);
  }
  h.allocUnsafe = function(b) {
    return y(b);
  }, h.allocUnsafeSlow = function(b) {
    return y(b);
  };
  function _(b, d) {
    if ((typeof d != "string" || d === "") && (d = "utf8"), !h.isEncoding(d))
      throw new TypeError("Unknown encoding: " + d);
    const p = I(b, d) | 0;
    let S = u(p);
    const R = S.write(b, d);
    return R !== p && (S = S.slice(0, R)), S;
  }
  function C(b) {
    const d = b.length < 0 ? 0 : k(b.length) | 0, p = u(d);
    for (let S = 0; S < d; S += 1)
      p[S] = b[S] & 255;
    return p;
  }
  function E(b) {
    if (ot(b, r)) {
      const d = new r(b);
      return P(d.buffer, d.byteOffset, d.byteLength);
    }
    return C(b);
  }
  function P(b, d, p) {
    if (d < 0 || b.byteLength < d)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < d + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let S;
    return d === void 0 && p === void 0 ? S = new r(b) : p === void 0 ? S = new r(b, d) : S = new r(b, d, p), Object.setPrototypeOf(S, h.prototype), S;
  }
  function L(b) {
    if (h.isBuffer(b)) {
      const d = k(b.length) | 0, p = u(d);
      return p.length === 0 || b.copy(p, 0, 0, d), p;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || Ie(b.length) ? u(0) : C(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return C(b.data);
  }
  function k(b) {
    if (b >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return b | 0;
  }
  function F(b) {
    return +b != b && (b = 0), h.alloc(+b);
  }
  h.isBuffer = function(d) {
    return d != null && d._isBuffer === !0 && d !== h.prototype;
  }, h.compare = function(d, p) {
    if (ot(d, r) && (d = h.from(d, d.offset, d.byteLength)), ot(p, r) && (p = h.from(p, p.offset, p.byteLength)), !h.isBuffer(d) || !h.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (d === p)
      return 0;
    let S = d.length, R = p.length;
    for (let O = 0, H = Math.min(S, R); O < H; ++O)
      if (d[O] !== p[O]) {
        S = d[O], R = p[O];
        break;
      }
    return S < R ? -1 : R < S ? 1 : 0;
  }, h.isEncoding = function(d) {
    switch (String(d).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, h.concat = function(d, p) {
    if (!Array.isArray(d))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (d.length === 0)
      return h.alloc(0);
    let S;
    if (p === void 0)
      for (p = 0, S = 0; S < d.length; ++S)
        p += d[S].length;
    const R = h.allocUnsafe(p);
    let O = 0;
    for (S = 0; S < d.length; ++S) {
      let H = d[S];
      if (ot(H, r))
        O + H.length > R.length ? (h.isBuffer(H) || (H = h.from(H)), H.copy(R, O)) : r.prototype.set.call(
          R,
          H,
          O
        );
      else if (h.isBuffer(H))
        H.copy(R, O);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      O += H.length;
    }
    return R;
  };
  function I(b, d) {
    if (h.isBuffer(b))
      return b.length;
    if (a.isView(b) || ot(b, a))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const p = b.length, S = arguments.length > 2 && arguments[2] === !0;
    if (!S && p === 0)
      return 0;
    let R = !1;
    for (; ; )
      switch (d) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return ue(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Lt(b).length;
        default:
          if (R)
            return S ? -1 : ue(b).length;
          d = ("" + d).toLowerCase(), R = !0;
      }
  }
  h.byteLength = I;
  function M(b, d, p) {
    let S = !1;
    if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, d >>>= 0, p <= d))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return j(this, d, p);
        case "utf8":
        case "utf-8":
          return B(this, d, p);
        case "ascii":
          return bt(this, d, p);
        case "latin1":
        case "binary":
          return At(this, d, p);
        case "base64":
          return X(this, d, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nt(this, d, p);
        default:
          if (S)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), S = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function x(b, d, p) {
    const S = b[d];
    b[d] = b[p], b[p] = S;
  }
  h.prototype.swap16 = function() {
    const d = this.length;
    if (d % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < d; p += 2)
      x(this, p, p + 1);
    return this;
  }, h.prototype.swap32 = function() {
    const d = this.length;
    if (d % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < d; p += 4)
      x(this, p, p + 3), x(this, p + 1, p + 2);
    return this;
  }, h.prototype.swap64 = function() {
    const d = this.length;
    if (d % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < d; p += 8)
      x(this, p, p + 7), x(this, p + 1, p + 6), x(this, p + 2, p + 5), x(this, p + 3, p + 4);
    return this;
  }, h.prototype.toString = function() {
    const d = this.length;
    return d === 0 ? "" : arguments.length === 0 ? B(this, 0, d) : M.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(d) {
    if (!h.isBuffer(d))
      throw new TypeError("Argument must be a Buffer");
    return this === d ? !0 : h.compare(this, d) === 0;
  }, h.prototype.inspect = function() {
    let d = "";
    const p = s.INSPECT_MAX_BYTES;
    return d = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (d += " ... "), "<Buffer " + d + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(d, p, S, R, O) {
    if (ot(d, r) && (d = h.from(d, d.offset, d.byteLength)), !h.isBuffer(d))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
      );
    if (p === void 0 && (p = 0), S === void 0 && (S = d ? d.length : 0), R === void 0 && (R = 0), O === void 0 && (O = this.length), p < 0 || S > d.length || R < 0 || O > this.length)
      throw new RangeError("out of range index");
    if (R >= O && p >= S)
      return 0;
    if (R >= O)
      return -1;
    if (p >= S)
      return 1;
    if (p >>>= 0, S >>>= 0, R >>>= 0, O >>>= 0, this === d)
      return 0;
    let H = O - R, wt = S - p;
    const Vt = Math.min(H, wt), jt = this.slice(R, O), Gt = d.slice(p, S);
    for (let Dt = 0; Dt < Vt; ++Dt)
      if (jt[Dt] !== Gt[Dt]) {
        H = jt[Dt], wt = Gt[Dt];
        break;
      }
    return H < wt ? -1 : wt < H ? 1 : 0;
  };
  function T(b, d, p, S, R) {
    if (b.length === 0)
      return -1;
    if (typeof p == "string" ? (S = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, Ie(p) && (p = R ? 0 : b.length - 1), p < 0 && (p = b.length + p), p >= b.length) {
      if (R)
        return -1;
      p = b.length - 1;
    } else if (p < 0)
      if (R)
        p = 0;
      else
        return -1;
    if (typeof d == "string" && (d = h.from(d, S)), h.isBuffer(d))
      return d.length === 0 ? -1 : D(b, d, p, S, R);
    if (typeof d == "number")
      return d = d & 255, typeof r.prototype.indexOf == "function" ? R ? r.prototype.indexOf.call(b, d, p) : r.prototype.lastIndexOf.call(b, d, p) : D(b, [d], p, S, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function D(b, d, p, S, R) {
    let O = 1, H = b.length, wt = d.length;
    if (S !== void 0 && (S = String(S).toLowerCase(), S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")) {
      if (b.length < 2 || d.length < 2)
        return -1;
      O = 2, H /= 2, wt /= 2, p /= 2;
    }
    function Vt(Gt, Dt) {
      return O === 1 ? Gt[Dt] : Gt.readUInt16BE(Dt * O);
    }
    let jt;
    if (R) {
      let Gt = -1;
      for (jt = p; jt < H; jt++)
        if (Vt(b, jt) === Vt(d, Gt === -1 ? 0 : jt - Gt)) {
          if (Gt === -1 && (Gt = jt), jt - Gt + 1 === wt)
            return Gt * O;
        } else
          Gt !== -1 && (jt -= jt - Gt), Gt = -1;
    } else
      for (p + wt > H && (p = H - wt), jt = p; jt >= 0; jt--) {
        let Gt = !0;
        for (let Dt = 0; Dt < wt; Dt++)
          if (Vt(b, jt + Dt) !== Vt(d, Dt)) {
            Gt = !1;
            break;
          }
        if (Gt)
          return jt;
      }
    return -1;
  }
  h.prototype.includes = function(d, p, S) {
    return this.indexOf(d, p, S) !== -1;
  }, h.prototype.indexOf = function(d, p, S) {
    return T(this, d, p, S, !0);
  }, h.prototype.lastIndexOf = function(d, p, S) {
    return T(this, d, p, S, !1);
  };
  function N(b, d, p, S) {
    p = Number(p) || 0;
    const R = b.length - p;
    S ? (S = Number(S), S > R && (S = R)) : S = R;
    const O = d.length;
    S > O / 2 && (S = O / 2);
    let H;
    for (H = 0; H < S; ++H) {
      const wt = parseInt(d.substr(H * 2, 2), 16);
      if (Ie(wt))
        return H;
      b[p + H] = wt;
    }
    return H;
  }
  function U(b, d, p, S) {
    return ie(ue(d, b.length - p), b, p, S);
  }
  function z(b, d, p, S) {
    return ie($t(d), b, p, S);
  }
  function V(b, d, p, S) {
    return ie(Lt(d), b, p, S);
  }
  function K(b, d, p, S) {
    return ie(Rt(d, b.length - p), b, p, S);
  }
  h.prototype.write = function(d, p, S, R) {
    if (p === void 0)
      R = "utf8", S = this.length, p = 0;
    else if (S === void 0 && typeof p == "string")
      R = p, S = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(S) ? (S = S >>> 0, R === void 0 && (R = "utf8")) : (R = S, S = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const O = this.length - p;
    if ((S === void 0 || S > O) && (S = O), d.length > 0 && (S < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let H = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return N(this, d, p, S);
        case "utf8":
        case "utf-8":
          return U(this, d, p, S);
        case "ascii":
        case "latin1":
        case "binary":
          return z(this, d, p, S);
        case "base64":
          return V(this, d, p, S);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return K(this, d, p, S);
        default:
          if (H)
            throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), H = !0;
      }
  }, h.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function X(b, d, p) {
    return d === 0 && p === b.length ? t.fromByteArray(b) : t.fromByteArray(b.slice(d, p));
  }
  function B(b, d, p) {
    p = Math.min(b.length, p);
    const S = [];
    let R = d;
    for (; R < p; ) {
      const O = b[R];
      let H = null, wt = O > 239 ? 4 : O > 223 ? 3 : O > 191 ? 2 : 1;
      if (R + wt <= p) {
        let Vt, jt, Gt, Dt;
        switch (wt) {
          case 1:
            O < 128 && (H = O);
            break;
          case 2:
            Vt = b[R + 1], (Vt & 192) === 128 && (Dt = (O & 31) << 6 | Vt & 63, Dt > 127 && (H = Dt));
            break;
          case 3:
            Vt = b[R + 1], jt = b[R + 2], (Vt & 192) === 128 && (jt & 192) === 128 && (Dt = (O & 15) << 12 | (Vt & 63) << 6 | jt & 63, Dt > 2047 && (Dt < 55296 || Dt > 57343) && (H = Dt));
            break;
          case 4:
            Vt = b[R + 1], jt = b[R + 2], Gt = b[R + 3], (Vt & 192) === 128 && (jt & 192) === 128 && (Gt & 192) === 128 && (Dt = (O & 15) << 18 | (Vt & 63) << 12 | (jt & 63) << 6 | Gt & 63, Dt > 65535 && Dt < 1114112 && (H = Dt));
        }
      }
      H === null ? (H = 65533, wt = 1) : H > 65535 && (H -= 65536, S.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), S.push(H), R += wt;
    }
    return W(S);
  }
  const G = 4096;
  function W(b) {
    const d = b.length;
    if (d <= G)
      return String.fromCharCode.apply(String, b);
    let p = "", S = 0;
    for (; S < d; )
      p += String.fromCharCode.apply(
        String,
        b.slice(S, S += G)
      );
    return p;
  }
  function bt(b, d, p) {
    let S = "";
    p = Math.min(b.length, p);
    for (let R = d; R < p; ++R)
      S += String.fromCharCode(b[R] & 127);
    return S;
  }
  function At(b, d, p) {
    let S = "";
    p = Math.min(b.length, p);
    for (let R = d; R < p; ++R)
      S += String.fromCharCode(b[R]);
    return S;
  }
  function j(b, d, p) {
    const S = b.length;
    (!d || d < 0) && (d = 0), (!p || p < 0 || p > S) && (p = S);
    let R = "";
    for (let O = d; O < p; ++O)
      R += Jt[b[O]];
    return R;
  }
  function nt(b, d, p) {
    const S = b.slice(d, p);
    let R = "";
    for (let O = 0; O < S.length - 1; O += 2)
      R += String.fromCharCode(S[O] + S[O + 1] * 256);
    return R;
  }
  h.prototype.slice = function(d, p) {
    const S = this.length;
    d = ~~d, p = p === void 0 ? S : ~~p, d < 0 ? (d += S, d < 0 && (d = 0)) : d > S && (d = S), p < 0 ? (p += S, p < 0 && (p = 0)) : p > S && (p = S), p < d && (p = d);
    const R = this.subarray(d, p);
    return Object.setPrototypeOf(R, h.prototype), R;
  };
  function it(b, d, p) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + d > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(d, p, S) {
    d = d >>> 0, p = p >>> 0, S || it(d, p, this.length);
    let R = this[d], O = 1, H = 0;
    for (; ++H < p && (O *= 256); )
      R += this[d + H] * O;
    return R;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(d, p, S) {
    d = d >>> 0, p = p >>> 0, S || it(d, p, this.length);
    let R = this[d + --p], O = 1;
    for (; p > 0 && (O *= 256); )
      R += this[d + --p] * O;
    return R;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(d, p) {
    return d = d >>> 0, p || it(d, 1, this.length), this[d];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(d, p) {
    return d = d >>> 0, p || it(d, 2, this.length), this[d] | this[d + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(d, p) {
    return d = d >>> 0, p || it(d, 2, this.length), this[d] << 8 | this[d + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]);
  }, h.prototype.readBigUInt64LE = Xt(function(d) {
    d = d >>> 0, tt(d, "offset");
    const p = this[d], S = this[d + 7];
    (p === void 0 || S === void 0) && Tt(d, this.length - 8);
    const R = p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24, O = this[++d] + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + S * 2 ** 24;
    return BigInt(R) + (BigInt(O) << BigInt(32));
  }), h.prototype.readBigUInt64BE = Xt(function(d) {
    d = d >>> 0, tt(d, "offset");
    const p = this[d], S = this[d + 7];
    (p === void 0 || S === void 0) && Tt(d, this.length - 8);
    const R = p * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d], O = this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + S;
    return (BigInt(R) << BigInt(32)) + BigInt(O);
  }), h.prototype.readIntLE = function(d, p, S) {
    d = d >>> 0, p = p >>> 0, S || it(d, p, this.length);
    let R = this[d], O = 1, H = 0;
    for (; ++H < p && (O *= 256); )
      R += this[d + H] * O;
    return O *= 128, R >= O && (R -= Math.pow(2, 8 * p)), R;
  }, h.prototype.readIntBE = function(d, p, S) {
    d = d >>> 0, p = p >>> 0, S || it(d, p, this.length);
    let R = p, O = 1, H = this[d + --R];
    for (; R > 0 && (O *= 256); )
      H += this[d + --R] * O;
    return O *= 128, H >= O && (H -= Math.pow(2, 8 * p)), H;
  }, h.prototype.readInt8 = function(d, p) {
    return d = d >>> 0, p || it(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
  }, h.prototype.readInt16LE = function(d, p) {
    d = d >>> 0, p || it(d, 2, this.length);
    const S = this[d] | this[d + 1] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt16BE = function(d, p) {
    d = d >>> 0, p || it(d, 2, this.length);
    const S = this[d + 1] | this[d] << 8;
    return S & 32768 ? S | 4294901760 : S;
  }, h.prototype.readInt32LE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24;
  }, h.prototype.readInt32BE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3];
  }, h.prototype.readBigInt64LE = Xt(function(d) {
    d = d >>> 0, tt(d, "offset");
    const p = this[d], S = this[d + 7];
    (p === void 0 || S === void 0) && Tt(d, this.length - 8);
    const R = this[d + 4] + this[d + 5] * 2 ** 8 + this[d + 6] * 2 ** 16 + (S << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(p + this[++d] * 2 ** 8 + this[++d] * 2 ** 16 + this[++d] * 2 ** 24);
  }), h.prototype.readBigInt64BE = Xt(function(d) {
    d = d >>> 0, tt(d, "offset");
    const p = this[d], S = this[d + 7];
    (p === void 0 || S === void 0) && Tt(d, this.length - 8);
    const R = (p << 24) + // Overflow
    this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + this[++d];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++d] * 2 ** 24 + this[++d] * 2 ** 16 + this[++d] * 2 ** 8 + S);
  }), h.prototype.readFloatLE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), e.read(this, d, !0, 23, 4);
  }, h.prototype.readFloatBE = function(d, p) {
    return d = d >>> 0, p || it(d, 4, this.length), e.read(this, d, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(d, p) {
    return d = d >>> 0, p || it(d, 8, this.length), e.read(this, d, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(d, p) {
    return d = d >>> 0, p || it(d, 8, this.length), e.read(this, d, !1, 52, 8);
  };
  function J(b, d, p, S, R, O) {
    if (!h.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (d > R || d < O)
      throw new RangeError('"value" argument is out of bounds');
    if (p + S > b.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(d, p, S, R) {
    if (d = +d, p = p >>> 0, S = S >>> 0, !R) {
      const wt = Math.pow(2, 8 * S) - 1;
      J(this, d, p, S, wt, 0);
    }
    let O = 1, H = 0;
    for (this[p] = d & 255; ++H < S && (O *= 256); )
      this[p + H] = d / O & 255;
    return p + S;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(d, p, S, R) {
    if (d = +d, p = p >>> 0, S = S >>> 0, !R) {
      const wt = Math.pow(2, 8 * S) - 1;
      J(this, d, p, S, wt, 0);
    }
    let O = S - 1, H = 1;
    for (this[p + O] = d & 255; --O >= 0 && (H *= 256); )
      this[p + O] = d / H & 255;
    return p + S;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 1, 255, 0), this[p] = d & 255, p + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 2, 65535, 0), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 2, 65535, 0), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 4, 4294967295, 0), this[p + 3] = d >>> 24, this[p + 2] = d >>> 16, this[p + 1] = d >>> 8, this[p] = d & 255, p + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 4, 4294967295, 0), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4;
  };
  function lt(b, d, p, S, R) {
    ct(d, S, R, b, p, 7);
    let O = Number(d & BigInt(4294967295));
    b[p++] = O, O = O >> 8, b[p++] = O, O = O >> 8, b[p++] = O, O = O >> 8, b[p++] = O;
    let H = Number(d >> BigInt(32) & BigInt(4294967295));
    return b[p++] = H, H = H >> 8, b[p++] = H, H = H >> 8, b[p++] = H, H = H >> 8, b[p++] = H, p;
  }
  function et(b, d, p, S, R) {
    ct(d, S, R, b, p, 7);
    let O = Number(d & BigInt(4294967295));
    b[p + 7] = O, O = O >> 8, b[p + 6] = O, O = O >> 8, b[p + 5] = O, O = O >> 8, b[p + 4] = O;
    let H = Number(d >> BigInt(32) & BigInt(4294967295));
    return b[p + 3] = H, H = H >> 8, b[p + 2] = H, H = H >> 8, b[p + 1] = H, H = H >> 8, b[p] = H, p + 8;
  }
  h.prototype.writeBigUInt64LE = Xt(function(d, p = 0) {
    return lt(this, d, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeBigUInt64BE = Xt(function(d, p = 0) {
    return et(this, d, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), h.prototype.writeIntLE = function(d, p, S, R) {
    if (d = +d, p = p >>> 0, !R) {
      const Vt = Math.pow(2, 8 * S - 1);
      J(this, d, p, S, Vt - 1, -Vt);
    }
    let O = 0, H = 1, wt = 0;
    for (this[p] = d & 255; ++O < S && (H *= 256); )
      d < 0 && wt === 0 && this[p + O - 1] !== 0 && (wt = 1), this[p + O] = (d / H >> 0) - wt & 255;
    return p + S;
  }, h.prototype.writeIntBE = function(d, p, S, R) {
    if (d = +d, p = p >>> 0, !R) {
      const Vt = Math.pow(2, 8 * S - 1);
      J(this, d, p, S, Vt - 1, -Vt);
    }
    let O = S - 1, H = 1, wt = 0;
    for (this[p + O] = d & 255; --O >= 0 && (H *= 256); )
      d < 0 && wt === 0 && this[p + O + 1] !== 0 && (wt = 1), this[p + O] = (d / H >> 0) - wt & 255;
    return p + S;
  }, h.prototype.writeInt8 = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[p] = d & 255, p + 1;
  }, h.prototype.writeInt16LE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 2, 32767, -32768), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2;
  }, h.prototype.writeInt16BE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 2, 32767, -32768), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2;
  }, h.prototype.writeInt32LE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 4, 2147483647, -2147483648), this[p] = d & 255, this[p + 1] = d >>> 8, this[p + 2] = d >>> 16, this[p + 3] = d >>> 24, p + 4;
  }, h.prototype.writeInt32BE = function(d, p, S) {
    return d = +d, p = p >>> 0, S || J(this, d, p, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4;
  }, h.prototype.writeBigInt64LE = Xt(function(d, p = 0) {
    return lt(this, d, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), h.prototype.writeBigInt64BE = Xt(function(d, p = 0) {
    return et(this, d, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function rt(b, d, p, S, R, O) {
    if (p + S > b.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function q(b, d, p, S, R) {
    return d = +d, p = p >>> 0, R || rt(b, d, p, 4), e.write(b, d, p, S, 23, 4), p + 4;
  }
  h.prototype.writeFloatLE = function(d, p, S) {
    return q(this, d, p, !0, S);
  }, h.prototype.writeFloatBE = function(d, p, S) {
    return q(this, d, p, !1, S);
  };
  function Y(b, d, p, S, R) {
    return d = +d, p = p >>> 0, R || rt(b, d, p, 8), e.write(b, d, p, S, 52, 8), p + 8;
  }
  h.prototype.writeDoubleLE = function(d, p, S) {
    return Y(this, d, p, !0, S);
  }, h.prototype.writeDoubleBE = function(d, p, S) {
    return Y(this, d, p, !1, S);
  }, h.prototype.copy = function(d, p, S, R) {
    if (!h.isBuffer(d))
      throw new TypeError("argument should be a Buffer");
    if (S || (S = 0), !R && R !== 0 && (R = this.length), p >= d.length && (p = d.length), p || (p = 0), R > 0 && R < S && (R = S), R === S || d.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (S < 0 || S >= this.length)
      throw new RangeError("Index out of range");
    if (R < 0)
      throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), d.length - p < R - S && (R = d.length - p + S);
    const O = R - S;
    return this === d && typeof r.prototype.copyWithin == "function" ? this.copyWithin(p, S, R) : r.prototype.set.call(
      d,
      this.subarray(S, R),
      p
    ), O;
  }, h.prototype.fill = function(d, p, S, R) {
    if (typeof d == "string") {
      if (typeof p == "string" ? (R = p, p = 0, S = this.length) : typeof S == "string" && (R = S, S = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !h.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (d.length === 1) {
        const H = d.charCodeAt(0);
        (R === "utf8" && H < 128 || R === "latin1") && (d = H);
      }
    } else
      typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
    if (p < 0 || this.length < p || this.length < S)
      throw new RangeError("Out of range index");
    if (S <= p)
      return this;
    p = p >>> 0, S = S === void 0 ? this.length : S >>> 0, d || (d = 0);
    let O;
    if (typeof d == "number")
      for (O = p; O < S; ++O)
        this[O] = d;
    else {
      const H = h.isBuffer(d) ? d : h.from(d, R), wt = H.length;
      if (wt === 0)
        throw new TypeError('The value "' + d + '" is invalid for argument "value"');
      for (O = 0; O < S - p; ++O)
        this[O + p] = H[O % wt];
    }
    return this;
  };
  const dt = {};
  function gt(b, d, p) {
    dt[b] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: d.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
      }
      get code() {
        return b;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  gt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), gt(
    "ERR_INVALID_ARG_TYPE",
    function(b, d) {
      return `The "${b}" argument must be of type number. Received type ${typeof d}`;
    },
    TypeError
  ), gt(
    "ERR_OUT_OF_RANGE",
    function(b, d, p) {
      let S = `The value of "${b}" is out of range.`, R = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? R = Q(String(p)) : typeof p == "bigint" && (R = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (R = Q(R)), R += "n"), S += ` It must be ${d}. Received ${R}`, S;
    },
    RangeError
  );
  function Q(b) {
    let d = "", p = b.length;
    const S = b[0] === "-" ? 1 : 0;
    for (; p >= S + 4; p -= 3)
      d = `_${b.slice(p - 3, p)}${d}`;
    return `${b.slice(0, p)}${d}`;
  }
  function ft(b, d, p) {
    tt(d, "offset"), (b[d] === void 0 || b[d + p] === void 0) && Tt(d, b.length - (p + 1));
  }
  function ct(b, d, p, S, R, O) {
    if (b > p || b < d) {
      const H = typeof d == "bigint" ? "n" : "";
      let wt;
      throw d === 0 || d === BigInt(0) ? wt = `>= 0${H} and < 2${H} ** ${(O + 1) * 8}${H}` : wt = `>= -(2${H} ** ${(O + 1) * 8 - 1}${H}) and < 2 ** ${(O + 1) * 8 - 1}${H}`, new dt.ERR_OUT_OF_RANGE("value", wt, b);
    }
    ft(S, R, O);
  }
  function tt(b, d) {
    if (typeof b != "number")
      throw new dt.ERR_INVALID_ARG_TYPE(d, "number", b);
  }
  function Tt(b, d, p) {
    throw Math.floor(b) !== b ? (tt(b, p), new dt.ERR_OUT_OF_RANGE("offset", "an integer", b)) : d < 0 ? new dt.ERR_BUFFER_OUT_OF_BOUNDS() : new dt.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${d}`,
      b
    );
  }
  const qt = /[^+/0-9A-Za-z-_]/g;
  function ne(b) {
    if (b = b.split("=")[0], b = b.trim().replace(qt, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function ue(b, d) {
    d = d || 1 / 0;
    let p;
    const S = b.length;
    let R = null;
    const O = [];
    for (let H = 0; H < S; ++H) {
      if (p = b.charCodeAt(H), p > 55295 && p < 57344) {
        if (!R) {
          if (p > 56319) {
            (d -= 3) > -1 && O.push(239, 191, 189);
            continue;
          } else if (H + 1 === S) {
            (d -= 3) > -1 && O.push(239, 191, 189);
            continue;
          }
          R = p;
          continue;
        }
        if (p < 56320) {
          (d -= 3) > -1 && O.push(239, 191, 189), R = p;
          continue;
        }
        p = (R - 55296 << 10 | p - 56320) + 65536;
      } else
        R && (d -= 3) > -1 && O.push(239, 191, 189);
      if (R = null, p < 128) {
        if ((d -= 1) < 0)
          break;
        O.push(p);
      } else if (p < 2048) {
        if ((d -= 2) < 0)
          break;
        O.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((d -= 3) < 0)
          break;
        O.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((d -= 4) < 0)
          break;
        O.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return O;
  }
  function $t(b) {
    const d = [];
    for (let p = 0; p < b.length; ++p)
      d.push(b.charCodeAt(p) & 255);
    return d;
  }
  function Rt(b, d) {
    let p, S, R;
    const O = [];
    for (let H = 0; H < b.length && !((d -= 2) < 0); ++H)
      p = b.charCodeAt(H), S = p >> 8, R = p % 256, O.push(R), O.push(S);
    return O;
  }
  function Lt(b) {
    return t.toByteArray(ne(b));
  }
  function ie(b, d, p, S) {
    let R;
    for (R = 0; R < S && !(R + p >= d.length || R >= b.length); ++R)
      d[R + p] = b[R];
    return R;
  }
  function ot(b, d) {
    return b instanceof d || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === d.name;
  }
  function Ie(b) {
    return b !== b;
  }
  const Jt = function() {
    const b = "0123456789abcdef", d = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const S = p * 16;
      for (let R = 0; R < 16; ++R)
        d[S + R] = b[p] + b[R];
    }
    return d;
  }();
  function Xt(b) {
    return typeof BigInt > "u" ? Me : b;
  }
  function Me() {
    throw new Error("BigInt not supported");
  }
})(he);
const Pg = he.Buffer, lR = he.Blob, cR = he.BlobOptions, hR = he.Buffer, uR = he.File, dR = he.FileOptions, fR = he.INSPECT_MAX_BYTES, pR = he.SlowBuffer, gR = he.TranscodeEncoding, mR = he.atob, vR = he.btoa, yR = he.constants, bR = he.isAscii, wR = he.isUtf8, AR = he.kMaxLength, _R = he.kStringMaxLength, ER = he.resolveObjectURL, SR = he.transcode, nM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Blob: lR,
  BlobOptions: cR,
  Buffer: hR,
  File: uR,
  FileOptions: dR,
  INSPECT_MAX_BYTES: fR,
  SlowBuffer: pR,
  TranscodeEncoding: gR,
  atob: mR,
  btoa: vR,
  constants: yR,
  default: Pg,
  isAscii: bR,
  isUtf8: wR,
  kMaxLength: AR,
  kStringMaxLength: _R,
  resolveObjectURL: ER,
  transcode: SR
}, Symbol.toStringTag, { value: "Module" }));
var Pl = {};
Pl.d = (s, t) => {
  for (var e in t)
    Pl.o(t, e) && !Pl.o(s, e) && Object.defineProperty(s, e, { enumerable: !0, get: t[e] });
};
Pl.o = (s, t) => Object.prototype.hasOwnProperty.call(s, t);
var at = globalThis.pdfjsLib = {};
Pl.d(at, {
  AbortException: () => (
    /* reexport */
    fa
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    Bm
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    ht
  ),
  AnnotationEditorType: () => (
    /* reexport */
    St
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    aa
  ),
  AnnotationLayer: () => (
    /* reexport */
    _k
  ),
  AnnotationMode: () => (
    /* reexport */
    es
  ),
  CMapCompressionType: () => (
    /* reexport */
    Lg
  ),
  ColorPicker: () => (
    /* reexport */
    fd
  ),
  DOMSVGFactory: () => (
    /* reexport */
    v0
  ),
  DrawLayer: () => (
    /* reexport */
    jm
  ),
  FeatureTest: () => (
    /* reexport */
    Ge
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    Wi
  ),
  ImageKind: () => (
    /* reexport */
    Tu
  ),
  InvalidPDFException: () => (
    /* reexport */
    Cb
  ),
  MissingPDFException: () => (
    /* reexport */
    da
  ),
  OPS: () => (
    /* reexport */
    yn
  ),
  Outliner: () => (
    /* reexport */
    bm
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Aw
  ),
  PDFDateString: () => (
    /* reexport */
    Mb
  ),
  PDFWorker: () => (
    /* reexport */
    Pa
  ),
  PasswordResponses: () => (
    /* reexport */
    PR
  ),
  PermissionFlag: () => (
    /* reexport */
    TR
  ),
  PixelsPerInch: () => (
    /* reexport */
    ks
  ),
  RenderingCancelledException: () => (
    /* reexport */
    y0
  ),
  TextLayer: () => (
    /* reexport */
    ud
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    yp
  ),
  Util: () => (
    /* reexport */
    Z
  ),
  VerbosityLevel: () => (
    /* reexport */
    gp
  ),
  XfaLayer: () => (
    /* reexport */
    Ew
  ),
  build: () => (
    /* reexport */
    nk
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    IR
  ),
  fetchData: () => (
    /* reexport */
    Ep
  ),
  getDocument: () => (
    /* reexport */
    qL
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    jR
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    zR
  ),
  getXfaPageViewport: () => (
    /* reexport */
    VR
  ),
  isDataScheme: () => (
    /* reexport */
    b0
  ),
  isPdfFile: () => (
    /* reexport */
    w0
  ),
  noContextMenu: () => (
    /* reexport */
    We
  ),
  normalizeUnicode: () => (
    /* reexport */
    BR
  ),
  renderTextLayer: () => (
    /* reexport */
    BL
  ),
  setLayerDimensions: () => (
    /* reexport */
    ra
  ),
  shadow: () => (
    /* reexport */
    Ct
  ),
  updateTextLayer: () => (
    /* reexport */
    $L
  ),
  version: () => (
    /* reexport */
    ek
  )
});
const ke = typeof ut == "object" && ut + "" == "[object process]" && !ut.versions.nw && !(ut.versions.electron && ut.type && ut.type !== "browser"), xb = [1, 0, 0, 1, 0, 0], Rg = [1e-3, 0, 0, 1e-3, 0, 0], xR = 1e7, eg = 1.35, pn = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, es = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, CR = "pdfjs_internal_editor_", St = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, ht = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, TR = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, xe = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Tu = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, se = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, ol = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, gp = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Lg = {
  NONE: 0,
  BINARY: 1
}, yn = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, PR = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let mp = gp.WARNINGS;
function RR(s) {
  Number.isInteger(s) && (mp = s);
}
function LR() {
  return mp;
}
function vp(s) {
  mp >= gp.INFOS && console.log(`Info: ${s}`);
}
function vt(s) {
  mp >= gp.WARNINGS && console.log(`Warning: ${s}`);
}
function Ft(s) {
  throw new Error(s);
}
function ce(s, t) {
  s || Ft(t);
}
function kR(s) {
  switch (s == null ? void 0 : s.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function IR(s, t = null, e = null) {
  if (!s)
    return null;
  try {
    if (e && typeof s == "string") {
      if (e.addDefaultProtocol && s.startsWith("www.")) {
        const i = s.match(/\./g);
        (i == null ? void 0 : i.length) >= 2 && (s = `http://${s}`);
      }
      if (e.tryConvertEncoding)
        try {
          s = NR(s);
        } catch {
        }
    }
    const n = t ? new URL(s, t) : new URL(s);
    if (kR(n))
      return n;
  } catch {
  }
  return null;
}
function Ct(s, t, e, n = !1) {
  return Object.defineProperty(s, t, {
    value: e,
    enumerable: !n,
    configurable: !0,
    writable: !1
  }), e;
}
const Fs = function() {
  function t(e, n) {
    this.constructor === t && Ft("Cannot initialize BaseException."), this.message = e, this.name = n;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class kg extends Fs {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Ig extends Fs {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Cb extends Fs {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class da extends Fs {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class yp extends Fs {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
}
class MR extends Fs {
  constructor(t) {
    super(t, "FormatError");
  }
}
class fa extends Fs {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Tb(s) {
  (typeof s != "object" || (s == null ? void 0 : s.length) === void 0) && Ft("Invalid argument for bytesToString");
  const t = s.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, s);
  const n = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = s.subarray(i, r);
    n.push(String.fromCharCode.apply(null, a));
  }
  return n.join("");
}
function bp(s) {
  typeof s != "string" && Ft("Invalid argument for stringToBytes");
  const t = s.length, e = new Uint8Array(t);
  for (let n = 0; n < t; ++n)
    e[n] = s.charCodeAt(n) & 255;
  return e;
}
function FR(s) {
  return String.fromCharCode(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, s & 255);
}
function g0(s) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, n] of s)
    t[e] = n;
  return t;
}
function DR() {
  const s = new Uint8Array(4);
  return s[0] = 1, new Uint32Array(s.buffer, 0, 1)[0] === 1;
}
function OR() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class Ge {
  static get isLittleEndian() {
    return Ct(this, "isLittleEndian", DR());
  }
  static get isEvalSupported() {
    return Ct(this, "isEvalSupported", OR());
  }
  static get isOffscreenCanvasSupported() {
    return Ct(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? Ct(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : Ct(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return Ct(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const ng = Array.from(Array(256).keys(), (s) => s.toString(16).padStart(2, "0"));
var ka, Pu, Fl, Mg;
class Z {
  static makeHexColor(t, e, n) {
    return `#${ng[t]}${ng[e]}${ng[n]}`;
  }
  static scaleMinMax(t, e) {
    let n;
    t[0] ? (t[0] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[3], e[3] *= t[3]) : (n = e[0], e[0] = e[1], e[1] = n, n = e[2], e[2] = e[3], e[3] = n, t[1] < 0 && (n = e[1], e[1] = e[3], e[3] = n), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (n = e[0], e[0] = e[2], e[2] = n), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const n = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [n, i];
  }
  static applyInverseTransform(t, e) {
    const n = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, r = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    return [i, r];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const n = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), r = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(n[0], i[0], r[0], a[0]), Math.min(n[1], i[1], r[1], a[1]), Math.max(n[0], i[0], r[0], a[0]), Math.max(n[1], i[1], r[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], n = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], r = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], l = (n + a) / 2, c = Math.sqrt((n + a) ** 2 - 4 * (n * a - r * i)) / 2, u = l + c || 1, h = l - c || 1;
    return [Math.sqrt(u), Math.sqrt(h)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const n = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (n > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [n, r, i, a];
  }
  static bezierBoundingBox(t, e, n, i, r, a, l, c, u) {
    return u ? (u[0] = Math.min(u[0], t, l), u[1] = Math.min(u[1], e, c), u[2] = Math.max(u[2], t, l), u[3] = Math.max(u[3], e, c)) : u = [Math.min(t, l), Math.min(e, c), Math.max(t, l), Math.max(e, c)], A(this, Fl, Mg).call(this, t, n, r, l, e, i, a, c, 3 * (-t + 3 * (n - r) + l), 6 * (t - 2 * n + r), 3 * (n - t), u), A(this, Fl, Mg).call(this, t, n, r, l, e, i, a, c, 3 * (-e + 3 * (i - a) + c), 6 * (e - 2 * i + a), 3 * (i - e), u), u;
  }
}
ka = new WeakSet(), Pu = function(t, e, n, i, r, a, l, c, u, h) {
  if (u <= 0 || u >= 1)
    return;
  const f = 1 - u, g = u * u, v = g * u, y = f * (f * (f * t + 3 * u * e) + 3 * g * n) + v * i, _ = f * (f * (f * r + 3 * u * a) + 3 * g * l) + v * c;
  h[0] = Math.min(h[0], y), h[1] = Math.min(h[1], _), h[2] = Math.max(h[2], y), h[3] = Math.max(h[3], _);
}, Fl = new WeakSet(), Mg = function(t, e, n, i, r, a, l, c, u, h, f, g) {
  if (Math.abs(u) < 1e-12) {
    Math.abs(h) >= 1e-12 && A(this, ka, Pu).call(this, t, e, n, i, r, a, l, c, -f / h, g);
    return;
  }
  const v = h ** 2 - 4 * f * u;
  if (v < 0)
    return;
  const y = Math.sqrt(v), _ = 2 * u;
  A(this, ka, Pu).call(this, t, e, n, i, r, a, l, c, (-h + y) / _, g), A(this, ka, Pu).call(this, t, e, n, i, r, a, l, c, (-h - y) / _, g);
}, m(Z, ka), m(Z, Fl);
function NR(s) {
  return decodeURIComponent(escape(s));
}
let ig = null, Sv = null;
function BR(s) {
  return ig || (ig = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Sv = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), s.replaceAll(ig, (t, e, n) => e ? e.normalize("NFKC") : Sv.get(n));
}
function $R() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const s = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(s);
  else
    for (let t = 0; t < 32; t++)
      s[t] = Math.floor(Math.random() * 255);
  return Tb(s);
}
const Pb = "pdfjs_internal_id_", li = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class wp {
  constructor() {
    this.constructor === wp && Ft("Cannot initialize BaseFilterFactory.");
  }
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, n, i, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var Dl;
const k0 = class k0 {
  constructor({
    enableHWA: t = !1
  } = {}) {
    m(this, Dl, !1);
    this.constructor === k0 && Ft("Cannot initialize BaseCanvasFactory."), w(this, Dl, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const n = this._createCanvas(t, e);
    return {
      canvas: n,
      context: n.getContext("2d", {
        willReadFrequently: !o(this, Dl)
      })
    };
  }
  reset(t, e, n) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || n <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = n;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Ft("Abstract method `_createCanvas` called.");
  }
};
Dl = new WeakMap();
let od = k0;
class Ap {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.constructor === Ap && Ft("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""), n = this.isCompressed ? Lg.BINARY : Lg.NONE;
    return this._fetchData(e, n).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(t, e) {
    Ft("Abstract method `_fetchData` called.");
  }
}
class _p {
  constructor({
    baseUrl: t = null
  }) {
    this.constructor === _p && Ft("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetchData(e).catch((n) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(t) {
    Ft("Abstract method `_fetchData` called.");
  }
}
class m0 {
  constructor() {
    this.constructor === m0 && Ft("Cannot initialize BaseSVGFactory.");
  }
  create(t, e, n = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), n || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Ft("Abstract method `_createSVG` called.");
  }
}
const hi = "http://www.w3.org/2000/svg", js = class js {
};
pt(js, "CSS", 96), pt(js, "PDF", 72), pt(js, "PDF_TO_CSS_UNITS", js.CSS / js.PDF);
let ks = js;
var Ws, $n, mi, Ue, md, qs, fe, Ce, is, ya, ss, ba, Ia, Ru, vd, Rb, Ol, Fg, rs, wa, Xs, dl, Ys, fl, Nl, Dg, Ks, pl;
class HR extends wp {
  constructor({
    docId: e,
    ownerDocument: n = globalThis.document
  } = {}) {
    super();
    m(this, fe);
    m(this, is);
    m(this, ss);
    m(this, Ia);
    m(this, vd);
    m(this, Ol);
    m(this, rs);
    m(this, Xs);
    m(this, Ys);
    m(this, Nl);
    m(this, Ks);
    m(this, Ws, void 0);
    m(this, $n, void 0);
    m(this, mi, void 0);
    m(this, Ue, void 0);
    m(this, md, void 0);
    m(this, qs, 0);
    w(this, mi, e), w(this, Ue, n);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let n = o(this, fe, Ce).get(e);
    if (n)
      return n;
    const [i, r, a] = A(this, Ia, Ru).call(this, e), l = e.length === 1 ? i : `${i}${r}${a}`;
    if (n = o(this, fe, Ce).get(l), n)
      return o(this, fe, Ce).set(e, n), n;
    const c = `g_${o(this, mi)}_transfer_map_${qe(this, qs)._++}`, u = `url(#${c})`;
    o(this, fe, Ce).set(e, u), o(this, fe, Ce).set(l, u);
    const h = A(this, rs, wa).call(this, c);
    return A(this, Ys, fl).call(this, i, r, a, h), u;
  }
  addHCMFilter(e, n) {
    var y;
    const i = `${e}-${n}`, r = "base";
    let a = o(this, is, ya).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((y = a.filter) == null || y.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, o(this, is, ya).set(r, a)), !e || !n))
      return a.url;
    const l = A(this, Ks, pl).call(this, e);
    e = Z.makeHexColor(...l);
    const c = A(this, Ks, pl).call(this, n);
    if (n = Z.makeHexColor(...c), o(this, ss, ba).style.color = "", e === "#000000" && n === "#ffffff" || e === n)
      return a.url;
    const u = new Array(256);
    for (let _ = 0; _ <= 255; _++) {
      const C = _ / 255;
      u[_] = C <= 0.03928 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
    }
    const h = u.join(","), f = `g_${o(this, mi)}_hcm_filter`, g = a.filter = A(this, rs, wa).call(this, f);
    A(this, Ys, fl).call(this, h, h, h, g), A(this, Ol, Fg).call(this, g);
    const v = (_, C) => {
      const E = l[_] / 255, P = c[_] / 255, L = new Array(C + 1);
      for (let k = 0; k <= C; k++)
        L[k] = E + k / C * (P - E);
      return L.join(",");
    };
    return A(this, Ys, fl).call(this, v(0, 5), v(1, 5), v(2, 5), g), a.url = `url(#${f})`, a.url;
  }
  addAlphaFilter(e) {
    let n = o(this, fe, Ce).get(e);
    if (n)
      return n;
    const [i] = A(this, Ia, Ru).call(this, [e]), r = `alpha_${i}`;
    if (n = o(this, fe, Ce).get(r), n)
      return o(this, fe, Ce).set(e, n), n;
    const a = `g_${o(this, mi)}_alpha_map_${qe(this, qs)._++}`, l = `url(#${a})`;
    o(this, fe, Ce).set(e, l), o(this, fe, Ce).set(r, l);
    const c = A(this, rs, wa).call(this, a);
    return A(this, Nl, Dg).call(this, i, c), l;
  }
  addLuminosityFilter(e) {
    let n = o(this, fe, Ce).get(e || "luminosity");
    if (n)
      return n;
    let i, r;
    if (e ? ([i] = A(this, Ia, Ru).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", n = o(this, fe, Ce).get(r), n)
      return o(this, fe, Ce).set(e, n), n;
    const a = `g_${o(this, mi)}_luminosity_map_${qe(this, qs)._++}`, l = `url(#${a})`;
    o(this, fe, Ce).set(e, l), o(this, fe, Ce).set(r, l);
    const c = A(this, rs, wa).call(this, a);
    return A(this, vd, Rb).call(this, c), e && A(this, Nl, Dg).call(this, i, c), l;
  }
  addHighlightHCMFilter(e, n, i, r, a) {
    var P;
    const l = `${n}-${i}-${r}-${a}`;
    let c = o(this, is, ya).get(e);
    if ((c == null ? void 0 : c.key) === l || (c ? ((P = c.filter) == null || P.remove(), c.key = l, c.url = "none", c.filter = null) : (c = {
      key: l,
      url: "none",
      filter: null
    }, o(this, is, ya).set(e, c)), !n || !i))
      return c.url;
    const [u, h] = [n, i].map(A(this, Ks, pl).bind(this));
    let f = Math.round(0.2126 * u[0] + 0.7152 * u[1] + 0.0722 * u[2]), g = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), [v, y] = [r, a].map(A(this, Ks, pl).bind(this));
    g < f && ([f, g, v, y] = [g, f, y, v]), o(this, ss, ba).style.color = "";
    const _ = (L, k, F) => {
      const I = new Array(256), M = (g - f) / F, x = L / 255, T = (k - L) / (255 * F);
      let D = 0;
      for (let N = 0; N <= F; N++) {
        const U = Math.round(f + N * M), z = x + N * T;
        for (let V = D; V <= U; V++)
          I[V] = z;
        D = U + 1;
      }
      for (let N = D; N < 256; N++)
        I[N] = I[D - 1];
      return I.join(",");
    }, C = `g_${o(this, mi)}_hcm_${e}_filter`, E = c.filter = A(this, rs, wa).call(this, C);
    return A(this, Ol, Fg).call(this, E), A(this, Ys, fl).call(this, _(v[0], y[0], 5), _(v[1], y[1], 5), _(v[2], y[2], 5), E), c.url = `url(#${C})`, c.url;
  }
  destroy(e = !1) {
    e && o(this, is, ya).size !== 0 || (o(this, $n) && (o(this, $n).parentNode.parentNode.remove(), w(this, $n, null)), o(this, Ws) && (o(this, Ws).clear(), w(this, Ws, null)), w(this, qs, 0));
  }
}
Ws = new WeakMap(), $n = new WeakMap(), mi = new WeakMap(), Ue = new WeakMap(), md = new WeakMap(), qs = new WeakMap(), fe = new WeakSet(), Ce = function() {
  return o(this, Ws) || w(this, Ws, /* @__PURE__ */ new Map());
}, is = new WeakSet(), ya = function() {
  return o(this, md) || w(this, md, /* @__PURE__ */ new Map());
}, ss = new WeakSet(), ba = function() {
  if (!o(this, $n)) {
    const e = o(this, Ue).createElement("div"), {
      style: n
    } = e;
    n.visibility = "hidden", n.contain = "strict", n.width = n.height = 0, n.position = "absolute", n.top = n.left = 0, n.zIndex = -1;
    const i = o(this, Ue).createElementNS(hi, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), w(this, $n, o(this, Ue).createElementNS(hi, "defs")), e.append(i), i.append(o(this, $n)), o(this, Ue).body.append(e);
  }
  return o(this, $n);
}, Ia = new WeakSet(), Ru = function(e) {
  if (e.length === 1) {
    const u = e[0], h = new Array(256);
    for (let g = 0; g < 256; g++)
      h[g] = u[g] / 255;
    const f = h.join(",");
    return [f, f, f];
  }
  const [n, i, r] = e, a = new Array(256), l = new Array(256), c = new Array(256);
  for (let u = 0; u < 256; u++)
    a[u] = n[u] / 255, l[u] = i[u] / 255, c[u] = r[u] / 255;
  return [a.join(","), l.join(","), c.join(",")];
}, vd = new WeakSet(), Rb = function(e) {
  const n = o(this, Ue).createElementNS(hi, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(n);
}, Ol = new WeakSet(), Fg = function(e) {
  const n = o(this, Ue).createElementNS(hi, "feColorMatrix");
  n.setAttribute("type", "matrix"), n.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(n);
}, rs = new WeakSet(), wa = function(e) {
  const n = o(this, Ue).createElementNS(hi, "filter");
  return n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("id", e), o(this, ss, ba).append(n), n;
}, Xs = new WeakSet(), dl = function(e, n, i) {
  const r = o(this, Ue).createElementNS(hi, n);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, Ys = new WeakSet(), fl = function(e, n, i, r) {
  const a = o(this, Ue).createElementNS(hi, "feComponentTransfer");
  r.append(a), A(this, Xs, dl).call(this, a, "feFuncR", e), A(this, Xs, dl).call(this, a, "feFuncG", n), A(this, Xs, dl).call(this, a, "feFuncB", i);
}, Nl = new WeakSet(), Dg = function(e, n) {
  const i = o(this, Ue).createElementNS(hi, "feComponentTransfer");
  n.append(i), A(this, Xs, dl).call(this, i, "feFuncA", e);
}, Ks = new WeakSet(), pl = function(e) {
  return o(this, ss, ba).style.color = e, A0(getComputedStyle(o(this, ss, ba)).getPropertyValue("color"));
};
class UR extends od {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  } = {}) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const n = this._document.createElement("canvas");
    return n.width = t, n.height = e, n;
  }
}
async function Ep(s, t = "text") {
  if (gl(s, document.baseURI)) {
    const e = await fetch(s);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, n) => {
    const i = new XMLHttpRequest();
    i.open("GET", s, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        n(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class Lb extends Ap {
  _fetchData(t, e) {
    return Ep(t, this.isCompressed ? "arraybuffer" : "text").then((n) => ({
      cMapData: n instanceof ArrayBuffer ? new Uint8Array(n) : bp(n),
      compressionType: e
    }));
  }
}
class kb extends _p {
  _fetchData(t) {
    return Ep(t, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class v0 extends m0 {
  _createSVG(t) {
    return document.createElementNS(hi, t);
  }
}
class eu {
  constructor({
    viewBox: t,
    scale: e,
    rotation: n,
    offsetX: i = 0,
    offsetY: r = 0,
    dontFlip: a = !1
  }) {
    this.viewBox = t, this.scale = e, this.rotation = n, this.offsetX = i, this.offsetY = r;
    const l = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
    let u, h, f, g;
    switch (n %= 360, n < 0 && (n += 360), n) {
      case 180:
        u = -1, h = 0, f = 0, g = 1;
        break;
      case 90:
        u = 0, h = 1, f = 1, g = 0;
        break;
      case 270:
        u = 0, h = -1, f = -1, g = 0;
        break;
      case 0:
        u = 1, h = 0, f = 0, g = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    a && (f = -f, g = -g);
    let v, y, _, C;
    u === 0 ? (v = Math.abs(c - t[1]) * e + i, y = Math.abs(l - t[0]) * e + r, _ = (t[3] - t[1]) * e, C = (t[2] - t[0]) * e) : (v = Math.abs(l - t[0]) * e + i, y = Math.abs(c - t[1]) * e + r, _ = (t[2] - t[0]) * e, C = (t[3] - t[1]) * e), this.transform = [u * e, h * e, f * e, g * e, v - u * e * l - f * e * c, y - h * e * l - g * e * c], this.width = _, this.height = C;
  }
  get rawDims() {
    const {
      viewBox: t
    } = this;
    return Ct(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: n = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new eu({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    return Z.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = Z.applyTransform([t[0], t[1]], this.transform), n = Z.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], n[0], n[1]];
  }
  convertToPdfPoint(t, e) {
    return Z.applyInverseTransform([t, e], this.transform);
  }
}
class y0 extends Fs {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function b0(s) {
  const t = s.length;
  let e = 0;
  for (; e < t && s[e].trim() === ""; )
    e++;
  return s.substring(e, e + 5).toLowerCase() === "data:";
}
function w0(s) {
  return typeof s == "string" && /\.pdf$/i.test(s);
}
function jR(s) {
  return [s] = s.split(/[#?]/, 1), s.substring(s.lastIndexOf("/") + 1);
}
function zR(s, t = "document.pdf") {
  if (typeof s != "string")
    return t;
  if (b0(s))
    return vt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, n = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(s);
  let r = n.exec(i[1]) || n.exec(i[2]) || n.exec(i[3]);
  if (r && (r = r[0], r.includes("%")))
    try {
      r = n.exec(decodeURIComponent(r))[0];
    } catch {
    }
  return r || t;
}
class xv {
  constructor() {
    pt(this, "started", /* @__PURE__ */ Object.create(null));
    pt(this, "times", []);
  }
  time(t) {
    t in this.started && vt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || vt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: n
    } of this.times)
      e = Math.max(n.length, e);
    for (const {
      name: n,
      start: i,
      end: r
    } of this.times)
      t.push(`${n.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
}
function gl(s, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(s, t) : new URL(s);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function We(s) {
  s.preventDefault();
}
function Ib(s) {
  console.log("Deprecated API usage: " + s);
}
let Cv;
class Mb {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    Cv || (Cv = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = Cv.exec(t);
    if (!e)
      return null;
    const n = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let l = parseInt(e[5], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    let c = parseInt(e[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const u = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let f = parseInt(e[9], 10) || 0;
    return f = f >= 0 && f <= 59 ? f : 0, u === "-" ? (a += h, l += f) : u === "+" && (a -= h, l -= f), new Date(Date.UTC(n, i, r, a, l, c));
  }
}
function VR(s, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: n,
    height: i
  } = s.attributes.style, r = [0, 0, parseInt(n), parseInt(i)];
  return new eu({
    viewBox: r,
    scale: t,
    rotation: e
  });
}
function A0(s) {
  if (s.startsWith("#")) {
    const t = parseInt(s.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return s.startsWith("rgb(") ? s.slice(4, -1).split(",").map((t) => parseInt(t)) : s.startsWith("rgba(") ? s.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (vt(`Not a valid color format: "${s}"`), [0, 0, 0]);
}
function GR(s) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of s.keys()) {
    t.style.color = e;
    const n = window.getComputedStyle(t).color;
    s.set(e, A0(n));
  }
  t.remove();
}
function zt(s) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: r,
    f: a
  } = s.getTransform();
  return [t, e, n, i, r, a];
}
function ci(s) {
  const {
    a: t,
    b: e,
    c: n,
    d: i,
    e: r,
    f: a
  } = s.getTransform().invertSelf();
  return [t, e, n, i, r, a];
}
function ra(s, t, e = !1, n = !0) {
  if (t instanceof eu) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = s, l = Ge.isCSSRoundSupported, c = `var(--scale-factor) * ${i}px`, u = `var(--scale-factor) * ${r}px`, h = l ? `round(${c}, 1px)` : `calc(${c})`, f = l ? `round(${u}, 1px)` : `calc(${u})`;
    !e || t.rotation % 180 === 0 ? (a.width = h, a.height = f) : (a.width = f, a.height = h);
  }
  n && s.setAttribute("data-main-rotation", t.rotation);
}
var Zs, Js, Ke, Qs, yd, Fb, bd, Db, wd, Ob, Ma, Lu, Ad, Nb, Bl, Ng;
const _d = class _d {
  constructor(t) {
    m(this, bd);
    m(this, wd);
    m(this, Ma);
    m(this, Ad);
    m(this, Bl);
    m(this, Zs, null);
    m(this, Js, null);
    m(this, Ke, void 0);
    m(this, Qs, null);
    w(this, Ke, t);
  }
  render() {
    const t = w(this, Zs, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar");
    const e = o(this, Ke)._uiManager._signal;
    t.addEventListener("contextmenu", We, {
      signal: e
    }), t.addEventListener("pointerdown", A(_d, yd, Fb), {
      signal: e
    });
    const n = w(this, Qs, document.createElement("div"));
    n.className = "buttons", t.append(n);
    const i = o(this, Ke).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = o(this, Ke)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return A(this, Ad, Nb).call(this), t;
  }
  hide() {
    var t;
    o(this, Zs).classList.add("hidden"), (t = o(this, Js)) == null || t.hideDropdown();
  }
  show() {
    o(this, Zs).classList.remove("hidden");
  }
  addAltTextButton(t) {
    A(this, Ma, Lu).call(this, t), o(this, Qs).prepend(t, o(this, Bl, Ng));
  }
  addColorPicker(t) {
    w(this, Js, t);
    const e = t.renderButton();
    A(this, Ma, Lu).call(this, e), o(this, Qs).prepend(e, o(this, Bl, Ng));
  }
  remove() {
    var t;
    o(this, Zs).remove(), (t = o(this, Js)) == null || t.destroy(), w(this, Js, null);
  }
};
Zs = new WeakMap(), Js = new WeakMap(), Ke = new WeakMap(), Qs = new WeakMap(), yd = new WeakSet(), Fb = function(t) {
  t.stopPropagation();
}, bd = new WeakSet(), Db = function(t) {
  o(this, Ke)._focusEventsAllowed = !1, t.preventDefault(), t.stopPropagation();
}, wd = new WeakSet(), Ob = function(t) {
  o(this, Ke)._focusEventsAllowed = !0, t.preventDefault(), t.stopPropagation();
}, Ma = new WeakSet(), Lu = function(t) {
  const e = o(this, Ke)._uiManager._signal;
  t.addEventListener("focusin", A(this, bd, Db).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", A(this, wd, Ob).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", We, {
    signal: e
  });
}, Ad = new WeakSet(), Nb = function() {
  const t = document.createElement("button");
  t.className = "delete", t.tabIndex = 0, t.setAttribute("data-l10n-id", `pdfjs-editor-remove-${o(this, Ke).editorType}-button`), A(this, Ma, Lu).call(this, t), t.addEventListener("click", (e) => {
    o(this, Ke)._uiManager.delete();
  }, {
    signal: o(this, Ke)._uiManager._signal
  }), o(this, Qs).append(t);
}, Bl = new WeakSet(), Ng = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, m(_d, yd);
let Og = _d;
var $l, tr, er, Ed, Bb, Sd, $b, xd, Hb;
class WR {
  constructor(t) {
    m(this, Ed);
    m(this, Sd);
    m(this, xd);
    m(this, $l, null);
    m(this, tr, null);
    m(this, er, void 0);
    w(this, er, t);
  }
  show(t, e, n) {
    const [i, r] = A(this, Sd, $b).call(this, e, n), {
      style: a
    } = o(this, tr) || w(this, tr, A(this, Ed, Bb).call(this));
    t.append(o(this, tr)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    o(this, tr).remove();
  }
}
$l = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), Ed = new WeakSet(), Bb = function() {
  const t = w(this, tr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", We, {
    signal: o(this, er)._signal
  });
  const e = w(this, $l, document.createElement("div"));
  return e.className = "buttons", t.append(e), A(this, xd, Hb).call(this), t;
}, Sd = new WeakSet(), $b = function(t, e) {
  let n = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < n)
      continue;
    const l = r.x + (e ? r.width : 0);
    if (a > n) {
      i = l, n = a;
      continue;
    }
    e ? l > i && (i = l) : l < i && (i = l);
  }
  return [e ? 1 - i : i, n];
}, xd = new WeakSet(), Hb = function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const n = o(this, er)._signal;
  t.addEventListener("contextmenu", We, {
    signal: n
  }), t.addEventListener("click", () => {
    o(this, er).highlightSelection("floating_button");
  }, {
    signal: n
  }), o(this, $l).append(t);
};
function ld(s, t, e) {
  for (const n of e)
    t.addEventListener(n, s[n].bind(s));
}
function qR(s) {
  return Math.round(Math.min(255, Math.max(1, 255 * s))).toString(16).padStart(2, "0");
}
var Cd;
class XR {
  constructor() {
    m(this, Cd, 0);
  }
  get id() {
    return `${CR}${qe(this, Cd)._++}`;
  }
}
Cd = new WeakMap();
var Hl, Td, hn, Ul, $g;
const I0 = class I0 {
  constructor() {
    m(this, Ul);
    m(this, Hl, $R());
    m(this, Td, 0);
    m(this, hn, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', n = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (n.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(n.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Ct(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: n,
      size: i,
      type: r
    } = t;
    return A(this, Ul, $g).call(this, `${e}_${n}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return A(this, Ul, $g).call(this, t, t);
  }
  async getFromId(t) {
    o(this, hn) || w(this, hn, /* @__PURE__ */ new Map());
    const e = o(this, hn).get(t);
    return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null;
  }
  getSvgUrl(t) {
    const e = o(this, hn).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    o(this, hn) || w(this, hn, /* @__PURE__ */ new Map());
    const e = o(this, hn).get(t);
    e && (e.refCounter -= 1, e.refCounter === 0 && (e.bitmap = null));
  }
  isValidId(t) {
    return t.startsWith(`image_${o(this, Hl)}_`);
  }
};
Hl = new WeakMap(), Td = new WeakMap(), hn = new WeakMap(), Ul = new WeakSet(), $g = async function(t, e) {
  o(this, hn) || w(this, hn, /* @__PURE__ */ new Map());
  let n = o(this, hn).get(t);
  if (n === null)
    return null;
  if (n != null && n.bitmap)
    return n.refCounter += 1, n;
  try {
    n || (n = {
      bitmap: null,
      id: `image_${o(this, Hl)}_${qe(this, Td)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (n.url = e, i = await Ep(e, "blob")) : i = n.file = e, i.type === "image/svg+xml") {
      const r = I0._isSVGFittingCanvas, a = new FileReader(), l = new Image(), c = new Promise((u, h) => {
        l.onload = () => {
          n.bitmap = l, n.isSvg = !0, u();
        }, a.onload = async () => {
          const f = n.svgUrl = a.result;
          l.src = await r ? `${f}#svgView(preserveAspectRatio(none))` : f;
        }, l.onerror = a.onerror = h;
      });
      a.readAsDataURL(i), await c;
    } else
      n.bitmap = await createImageBitmap(i);
    n.refCounter = 1;
  } catch (i) {
    console.error(i), n = null;
  }
  return o(this, hn).set(t, n), n && o(this, hn).set(n.id, n), n;
};
let Bg = I0;
var pe, as, jl, ge;
class YR {
  constructor(t = 128) {
    m(this, pe, []);
    m(this, as, !1);
    m(this, jl, void 0);
    m(this, ge, -1);
    w(this, jl, t);
  }
  add({
    cmd: t,
    undo: e,
    post: n,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: l = !1
  }) {
    if (i && t(), o(this, as))
      return;
    const c = {
      cmd: t,
      undo: e,
      post: n,
      type: r
    };
    if (o(this, ge) === -1) {
      o(this, pe).length > 0 && (o(this, pe).length = 0), w(this, ge, 0), o(this, pe).push(c);
      return;
    }
    if (a && o(this, pe)[o(this, ge)].type === r) {
      l && (c.undo = o(this, pe)[o(this, ge)].undo), o(this, pe)[o(this, ge)] = c;
      return;
    }
    const u = o(this, ge) + 1;
    u === o(this, jl) ? o(this, pe).splice(0, 1) : (w(this, ge, u), u < o(this, pe).length && o(this, pe).splice(u)), o(this, pe).push(c);
  }
  undo() {
    if (o(this, ge) === -1)
      return;
    w(this, as, !0);
    const {
      undo: t,
      post: e
    } = o(this, pe)[o(this, ge)];
    t(), e == null || e(), w(this, as, !1), w(this, ge, o(this, ge) - 1);
  }
  redo() {
    if (o(this, ge) < o(this, pe).length - 1) {
      w(this, ge, o(this, ge) + 1), w(this, as, !0);
      const {
        cmd: t,
        post: e
      } = o(this, pe)[o(this, ge)];
      t(), e == null || e(), w(this, as, !1);
    }
  }
  hasSomethingToUndo() {
    return o(this, ge) !== -1;
  }
  hasSomethingToRedo() {
    return o(this, ge) < o(this, pe).length - 1;
  }
  destroy() {
    w(this, pe, null);
  }
}
pe = new WeakMap(), as = new WeakMap(), jl = new WeakMap(), ge = new WeakMap();
var Pd, Ub;
class nu {
  constructor(t) {
    m(this, Pd);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Ge.platform;
    for (const [n, i, r = {}] of t)
      for (const a of n) {
        const l = a.startsWith("mac+");
        e && l ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !l && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const n = this.callbacks.get(A(this, Pd, Ub).call(this, e));
    if (!n)
      return;
    const {
      callback: i,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: l = null
      }
    } = n;
    l && !l(t, e) || (i.bind(t, ...a, e)(), r || (e.stopPropagation(), e.preventDefault()));
  }
}
Pd = new WeakSet(), Ub = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Rd = class Rd {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return GR(t), Ct(this, "_colors", t);
  }
  convert(t) {
    const e = A0(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [n, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Rd._colorsMapping.get(n);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? Z.makeHexColor(...e) : t;
  }
};
pt(Rd, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Hg = Rd;
var Fa, Ze, re, ye, Da, vi, Oa, bn, Na, nr, Hn, wn, ir, zl, Vl, Un, Ba, os, jn, Ld, ls, Gl, sr, Wl, $a, be, kt, yi, rr, ql, Xl, Yl, Kl, Zl, Jl, Ql, tc, ec, nc, ic, sc, rc, cs, zn, bi, ac, Ha, ku, kd, jb, Id, zb, Ua, Iu, Md, Vb, Fd, Gb, Dd, Wb, oc, Ug, Od, qb, lc, jg, cc, zg, Nd, Xb, we, Fe, Vn, Ji, Bd, Yb, $d, Kb, hc, Vg, Hd, Zb, ar, ml, uc, Gg;
const xa = class xa {
  constructor(t, e, n, i, r, a, l, c, u) {
    m(this, Ha);
    m(this, kd);
    m(this, Id);
    m(this, Ua);
    m(this, Md);
    m(this, Fd);
    m(this, Dd);
    m(this, oc);
    m(this, Od);
    m(this, lc);
    m(this, cc);
    m(this, Nd);
    m(this, we);
    m(this, Vn);
    m(this, Bd);
    m(this, $d);
    m(this, hc);
    m(this, Hd);
    m(this, ar);
    m(this, uc);
    m(this, Fa, new AbortController());
    m(this, Ze, null);
    m(this, re, /* @__PURE__ */ new Map());
    m(this, ye, /* @__PURE__ */ new Map());
    m(this, Da, null);
    m(this, vi, null);
    m(this, Oa, null);
    m(this, bn, new YR());
    m(this, Na, 0);
    m(this, nr, /* @__PURE__ */ new Set());
    m(this, Hn, null);
    m(this, wn, null);
    m(this, ir, /* @__PURE__ */ new Set());
    m(this, zl, !1);
    m(this, Vl, null);
    m(this, Un, null);
    m(this, Ba, null);
    m(this, os, !1);
    m(this, jn, null);
    m(this, Ld, new XR());
    m(this, ls, !1);
    m(this, Gl, !1);
    m(this, sr, null);
    m(this, Wl, null);
    m(this, $a, null);
    m(this, be, St.NONE);
    m(this, kt, /* @__PURE__ */ new Set());
    m(this, yi, null);
    m(this, rr, null);
    m(this, ql, null);
    m(this, Xl, this.blur.bind(this));
    m(this, Yl, this.focus.bind(this));
    m(this, Kl, this.copy.bind(this));
    m(this, Zl, this.cut.bind(this));
    m(this, Jl, this.paste.bind(this));
    m(this, Ql, this.keydown.bind(this));
    m(this, tc, this.keyup.bind(this));
    m(this, ec, this.onEditingAction.bind(this));
    m(this, nc, this.onPageChanging.bind(this));
    m(this, ic, this.onScaleChanging.bind(this));
    m(this, sc, this.onRotationChanging.bind(this));
    m(this, rc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, cs, [0, 0]);
    m(this, zn, null);
    m(this, bi, null);
    m(this, ac, null);
    this._signal = o(this, Fa).signal, w(this, bi, t), w(this, ac, e), w(this, Da, n), this._eventBus = i, this._eventBus._on("editingaction", o(this, ec)), this._eventBus._on("pagechanging", o(this, nc)), this._eventBus._on("scalechanging", o(this, ic)), this._eventBus._on("rotationchanging", o(this, sc)), A(this, Md, Vb).call(this), A(this, Nd, Xb).call(this), A(this, oc, Ug).call(this), w(this, vi, r.annotationStorage), w(this, Vl, r.filterFactory), w(this, rr, a), w(this, Ba, l || null), w(this, zl, c), w(this, $a, u || null), this.viewParameters = {
      realScale: ks.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const t = xa.prototype, e = (a) => o(a, bi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), n = (a, {
      target: l
    }) => {
      if (l instanceof HTMLInputElement) {
        const {
          type: c
        } = l;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return Ct(this, "_keyboardManager", new nu([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: n
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: n
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: n
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: n
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && o(a, bi).contains(l) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: l
      }) => !(l instanceof HTMLButtonElement) && o(a, bi).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, n;
    (t = o(this, Fa)) == null || t.abort(), w(this, Fa, null), this._signal = null, this._eventBus._off("editingaction", o(this, ec)), this._eventBus._off("pagechanging", o(this, nc)), this._eventBus._off("scalechanging", o(this, ic)), this._eventBus._off("rotationchanging", o(this, sc));
    for (const i of o(this, ye).values())
      i.destroy();
    o(this, ye).clear(), o(this, re).clear(), o(this, ir).clear(), w(this, Ze, null), o(this, kt).clear(), o(this, bn).destroy(), (e = o(this, Da)) == null || e.destroy(), (n = o(this, jn)) == null || n.hide(), w(this, jn, null), o(this, Un) && (clearTimeout(o(this, Un)), w(this, Un, null)), o(this, zn) && (clearTimeout(o(this, zn)), w(this, zn, null));
  }
  async mlGuess(t) {
    var e;
    return ((e = o(this, $a)) == null ? void 0 : e.guess(t)) || null;
  }
  get hasMLManager() {
    return !!o(this, $a);
  }
  get hcmFilter() {
    return Ct(this, "hcmFilter", o(this, rr) ? o(this, Vl).addHCMFilter(o(this, rr).foreground, o(this, rr).background) : "none");
  }
  get direction() {
    return Ct(this, "direction", getComputedStyle(o(this, bi)).direction);
  }
  get highlightColors() {
    return Ct(this, "highlightColors", o(this, Ba) ? new Map(o(this, Ba).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return Ct(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setMainHighlightColorPicker(t) {
    w(this, Wl, t);
  }
  editAltText(t) {
    var e;
    (e = o(this, Da)) == null || e.editAltText(this, t);
  }
  onPageChanging({
    pageNumber: t
  }) {
    w(this, Na, t - 1);
  }
  focusMainContainer() {
    o(this, bi).focus();
  }
  findParent(t, e) {
    for (const n of o(this, ye).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: l
      } = n.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + l)
        return n;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    o(this, ac).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    o(this, ir).add(t);
  }
  removeShouldRescale(t) {
    o(this, ir).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * ks.PDF_TO_CSS_UNITS;
    for (const e of o(this, ir))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: n,
      anchorOffset: i,
      focusNode: r,
      focusOffset: a
    } = e, l = e.toString(), u = A(this, Ha, ku).call(this, e).closest(".textLayer"), h = this.getSelectionBoxes(u);
    if (h) {
      e.empty(), o(this, be) === St.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: St.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const f of o(this, ye).values())
        if (f.hasTextLayer(u)) {
          f.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: t,
            boxes: h,
            anchorNode: n,
            anchorOffset: i,
            focusNode: r,
            focusOffset: a,
            text: l
          });
          break;
        }
    }
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && o(this, vi) && !o(this, vi).has(t.id) && o(this, vi).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, o(this, os) && (w(this, os, !1), A(this, Ua, Iu).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of o(this, kt))
      if (e.div.contains(t)) {
        w(this, sr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!o(this, sr))
      return;
    const [t, e] = o(this, sr);
    w(this, sr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    A(this, oc, Ug).call(this), A(this, lc, jg).call(this);
  }
  removeEditListeners() {
    A(this, Od, qb).call(this), A(this, cc, zg).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const n of o(this, wn))
        if (n.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const n of o(this, wn))
        if (n.isHandlingMimeForPasting(e.type)) {
          n.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var n;
    if (t.preventDefault(), (n = o(this, Ze)) == null || n.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of o(this, kt)) {
      const r = i.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of o(this, wn))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let n = e.getData("application/pdfjs");
    if (!n)
      return;
    try {
      n = JSON.parse(n);
    } catch (r) {
      vt(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(n))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const c of n) {
        const u = i.deserialize(c);
        if (!u)
          return;
        r.push(u);
      }
      const a = () => {
        for (const c of r)
          A(this, hc, Vg).call(this, c);
        A(this, uc, Gg).call(this, r);
      }, l = () => {
        for (const c of r)
          c.remove();
      };
      this.addCommands({
        cmd: a,
        undo: l,
        mustExec: !0
      });
    } catch (r) {
      vt(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), o(this, be) !== St.NONE && !this.isEditorHandlingKeyboard && xa._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, o(this, os) && (w(this, os, !1), A(this, Ua, Iu).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (A(this, Fd, Gb).call(this), A(this, lc, jg).call(this), A(this, we, Fe).call(this, {
      isEditing: o(this, be) !== St.NONE,
      isEmpty: A(this, ar, ml).call(this),
      hasSomethingToUndo: o(this, bn).hasSomethingToUndo(),
      hasSomethingToRedo: o(this, bn).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (A(this, Dd, Wb).call(this), A(this, cc, zg).call(this), A(this, we, Fe).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!o(this, wn)) {
      w(this, wn, t);
      for (const e of o(this, wn))
        A(this, Vn, Ji).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return o(this, Ld).id;
  }
  get currentLayer() {
    return o(this, ye).get(o(this, Na));
  }
  getLayer(t) {
    return o(this, ye).get(t);
  }
  get currentPageIndex() {
    return o(this, Na);
  }
  addLayer(t) {
    o(this, ye).set(t.pageIndex, t), o(this, ls) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    o(this, ye).delete(t.pageIndex);
  }
  updateMode(t, e = null, n = !1) {
    if (o(this, be) !== t) {
      if (w(this, be, t), t === St.NONE) {
        this.setEditingState(!1), A(this, $d, Kb).call(this);
        return;
      }
      this.setEditingState(!0), A(this, Bd, Yb).call(this), this.unselectAll();
      for (const i of o(this, ye).values())
        i.updateMode(t);
      if (!e && n) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (e) {
        for (const i of o(this, re).values())
          if (i.annotationElementId === e) {
            this.setSelected(i), i.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== o(this, be) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    var n;
    if (o(this, wn)) {
      switch (t) {
        case ht.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case ht.HIGHLIGHT_DEFAULT_COLOR:
          (n = o(this, Wl)) == null || n.updateColor(e);
          break;
        case ht.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (o(this, ql) || w(this, ql, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const i of o(this, kt))
        i.updateParams(t, e);
      for (const i of o(this, wn))
        i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, n = !1) {
    var r;
    for (const a of o(this, re).values())
      a.editorType === t && a.show(e);
    (((r = o(this, ql)) == null ? void 0 : r.get(ht.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, Vn, Ji).call(this, [[ht.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (o(this, Gl) !== t) {
      w(this, Gl, t);
      for (const e of o(this, ye).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const n of o(this, re).values())
      n.pageIndex === t && e.push(n);
    return e;
  }
  getEditor(t) {
    return o(this, re).get(t);
  }
  addEditor(t) {
    o(this, re).set(t.id, t);
  }
  removeEditor(t) {
    var e;
    t.div.contains(document.activeElement) && (o(this, Un) && clearTimeout(o(this, Un)), w(this, Un, setTimeout(() => {
      this.focusMainContainer(), w(this, Un, null);
    }, 0))), o(this, re).delete(t.id), this.unselect(t), (!t.annotationElementId || !o(this, nr).has(t.annotationElementId)) && ((e = o(this, vi)) == null || e.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    o(this, nr).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return o(this, nr).has(t);
  }
  removeDeletedAnnotationElement(t) {
    o(this, nr).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    o(this, Ze) !== t && (w(this, Ze, t), t && A(this, Vn, Ji).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    o(this, Hd, Zb) === t && A(this, Vn, Ji).call(this, t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (o(this, kt).has(t)) {
      o(this, kt).delete(t), t.unselect(), A(this, we, Fe).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    o(this, kt).add(t), t.select(), A(this, Vn, Ji).call(this, t.propertiesToUpdate), A(this, we, Fe).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    for (const e of o(this, kt))
      e !== t && e.unselect();
    o(this, kt).clear(), o(this, kt).add(t), t.select(), A(this, Vn, Ji).call(this, t.propertiesToUpdate), A(this, we, Fe).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return o(this, kt).has(t);
  }
  get firstSelectedEditor() {
    return o(this, kt).values().next().value;
  }
  unselect(t) {
    t.unselect(), o(this, kt).delete(t), A(this, we, Fe).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return o(this, kt).size !== 0;
  }
  get isEnterHandled() {
    return o(this, kt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    o(this, bn).undo(), A(this, we, Fe).call(this, {
      hasSomethingToUndo: o(this, bn).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, ar, ml).call(this)
    });
  }
  redo() {
    o(this, bn).redo(), A(this, we, Fe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: o(this, bn).hasSomethingToRedo(),
      isEmpty: A(this, ar, ml).call(this)
    });
  }
  addCommands(t) {
    o(this, bn).add(t), A(this, we, Fe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, ar, ml).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const t = [...o(this, kt)], e = () => {
      for (const i of t)
        i.remove();
    }, n = () => {
      for (const i of t)
        A(this, hc, Vg).call(this, i);
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = o(this, Ze)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return o(this, Ze) || this.hasSelection;
  }
  selectAll() {
    for (const t of o(this, kt))
      t.commit();
    A(this, uc, Gg).call(this, o(this, re).values());
  }
  unselectAll() {
    if (!(o(this, Ze) && (o(this, Ze).commitOrRemove(), o(this, be) !== St.NONE)) && this.hasSelection) {
      for (const t of o(this, kt))
        t.unselect();
      o(this, kt).clear(), A(this, we, Fe).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, n = !1) {
    if (n || this.commitOrRemove(), !this.hasSelection)
      return;
    o(this, cs)[0] += t, o(this, cs)[1] += e;
    const [i, r] = o(this, cs), a = [...o(this, kt)], l = 1e3;
    o(this, zn) && clearTimeout(o(this, zn)), w(this, zn, setTimeout(() => {
      w(this, zn, null), o(this, cs)[0] = o(this, cs)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of a)
            o(this, re).has(c.id) && c.translateInPage(i, r);
        },
        undo: () => {
          for (const c of a)
            o(this, re).has(c.id) && c.translateInPage(-i, -r);
        },
        mustExec: !1
      });
    }, l));
    for (const c of a)
      c.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), w(this, Hn, /* @__PURE__ */ new Map());
      for (const t of o(this, kt))
        o(this, Hn).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!o(this, Hn))
      return !1;
    this.disableUserSelect(!1);
    const t = o(this, Hn);
    w(this, Hn, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, l] of t)
      l.newX = i, l.newY = r, l.newPageIndex = a, e || (e = i !== l.savedX || r !== l.savedY || a !== l.savedPageIndex);
    if (!e)
      return !1;
    const n = (i, r, a, l) => {
      if (o(this, re).has(i.id)) {
        const c = o(this, ye).get(l);
        c ? i._setParentAndPosition(c, r, a) : (i.pageIndex = l, i.x = r, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: l
        }] of t)
          n(i, r, a, l);
      },
      undo: () => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: l
        }] of t)
          n(i, r, a, l);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (o(this, Hn))
      for (const n of o(this, Hn).keys())
        n.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || o(this, kt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return o(this, Ze) === t;
  }
  getActive() {
    return o(this, Ze);
  }
  getMode() {
    return o(this, be);
  }
  get imageManager() {
    return Ct(this, "imageManager", new Bg());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let u = 0, h = e.rangeCount; u < h; u++)
      if (!t.contains(e.getRangeAt(u).commonAncestorContainer))
        return null;
    const {
      x: n,
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let l;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        l = (u, h, f, g) => ({
          x: (h - i) / a,
          y: 1 - (u + f - n) / r,
          width: g / a,
          height: f / r
        });
        break;
      case "180":
        l = (u, h, f, g) => ({
          x: 1 - (u + f - n) / r,
          y: 1 - (h + g - i) / a,
          width: f / r,
          height: g / a
        });
        break;
      case "270":
        l = (u, h, f, g) => ({
          x: 1 - (h + g - i) / a,
          y: (u - n) / r,
          width: g / a,
          height: f / r
        });
        break;
      default:
        l = (u, h, f, g) => ({
          x: (u - n) / r,
          y: (h - i) / a,
          width: f / r,
          height: g / a
        });
        break;
    }
    const c = [];
    for (let u = 0, h = e.rangeCount; u < h; u++) {
      const f = e.getRangeAt(u);
      if (!f.collapsed)
        for (const {
          x: g,
          y: v,
          width: y,
          height: _
        } of f.getClientRects())
          y === 0 || _ === 0 || c.push(l(g, v, y, _));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (o(this, Oa) || w(this, Oa, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = o(this, Oa)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = o(this, Oa)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const n = o(this, vi).getRawValue(e);
    n && (o(this, be) === St.NONE && !n.hasBeenModified || n.renderAnnotationElement(t));
  }
};
Fa = new WeakMap(), Ze = new WeakMap(), re = new WeakMap(), ye = new WeakMap(), Da = new WeakMap(), vi = new WeakMap(), Oa = new WeakMap(), bn = new WeakMap(), Na = new WeakMap(), nr = new WeakMap(), Hn = new WeakMap(), wn = new WeakMap(), ir = new WeakMap(), zl = new WeakMap(), Vl = new WeakMap(), Un = new WeakMap(), Ba = new WeakMap(), os = new WeakMap(), jn = new WeakMap(), Ld = new WeakMap(), ls = new WeakMap(), Gl = new WeakMap(), sr = new WeakMap(), Wl = new WeakMap(), $a = new WeakMap(), be = new WeakMap(), kt = new WeakMap(), yi = new WeakMap(), rr = new WeakMap(), ql = new WeakMap(), Xl = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), Zl = new WeakMap(), Jl = new WeakMap(), Ql = new WeakMap(), tc = new WeakMap(), ec = new WeakMap(), nc = new WeakMap(), ic = new WeakMap(), sc = new WeakMap(), rc = new WeakMap(), cs = new WeakMap(), zn = new WeakMap(), bi = new WeakMap(), ac = new WeakMap(), Ha = new WeakSet(), ku = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, kd = new WeakSet(), jb = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const n = A(this, Ha, ku).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(n);
  i && (o(this, jn) || w(this, jn, new WR(this)), o(this, jn).show(n, i, this.direction === "ltr"));
}, Id = new WeakSet(), zb = function() {
  var r, a, l;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    o(this, yi) && ((r = o(this, jn)) == null || r.hide(), w(this, yi, null), A(this, we, Fe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === o(this, yi))
    return;
  if (!A(this, Ha, ku).call(this, t).closest(".textLayer")) {
    o(this, yi) && ((a = o(this, jn)) == null || a.hide(), w(this, yi, null), A(this, we, Fe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((l = o(this, jn)) == null || l.hide(), w(this, yi, e), A(this, we, Fe).call(this, {
    hasSelectedText: !0
  }), !(o(this, be) !== St.HIGHLIGHT && o(this, be) !== St.NONE) && (o(this, be) === St.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), w(this, os, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = this._signal, u = (h) => {
      h.type === "pointerup" && h.button !== 0 || (window.removeEventListener("pointerup", u), window.removeEventListener("blur", u), h.type === "pointerup" && A(this, Ua, Iu).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", u, {
      signal: c
    }), window.addEventListener("blur", u, {
      signal: c
    });
  }
}, Ua = new WeakSet(), Iu = function(t = "") {
  o(this, be) === St.HIGHLIGHT ? this.highlightSelection(t) : o(this, zl) && A(this, kd, jb).call(this);
}, Md = new WeakSet(), Vb = function() {
  document.addEventListener("selectionchange", A(this, Id, zb).bind(this), {
    signal: this._signal
  });
}, Fd = new WeakSet(), Gb = function() {
  const t = this._signal;
  window.addEventListener("focus", o(this, Yl), {
    signal: t
  }), window.addEventListener("blur", o(this, Xl), {
    signal: t
  });
}, Dd = new WeakSet(), Wb = function() {
  window.removeEventListener("focus", o(this, Yl)), window.removeEventListener("blur", o(this, Xl));
}, oc = new WeakSet(), Ug = function() {
  const t = this._signal;
  window.addEventListener("keydown", o(this, Ql), {
    signal: t
  }), window.addEventListener("keyup", o(this, tc), {
    signal: t
  });
}, Od = new WeakSet(), qb = function() {
  window.removeEventListener("keydown", o(this, Ql)), window.removeEventListener("keyup", o(this, tc));
}, lc = new WeakSet(), jg = function() {
  const t = this._signal;
  document.addEventListener("copy", o(this, Kl), {
    signal: t
  }), document.addEventListener("cut", o(this, Zl), {
    signal: t
  }), document.addEventListener("paste", o(this, Jl), {
    signal: t
  });
}, cc = new WeakSet(), zg = function() {
  document.removeEventListener("copy", o(this, Kl)), document.removeEventListener("cut", o(this, Zl)), document.removeEventListener("paste", o(this, Jl));
}, Nd = new WeakSet(), Xb = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, we = new WeakSet(), Fe = function(t) {
  Object.entries(t).some(([n, i]) => o(this, rc)[n] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(o(this, rc), t)
  }), o(this, be) === St.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, Vn, Ji).call(this, [[ht.HIGHLIGHT_FREE, !0]]));
}, Vn = new WeakSet(), Ji = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, Bd = new WeakSet(), Yb = function() {
  if (!o(this, ls)) {
    w(this, ls, !0);
    for (const t of o(this, ye).values())
      t.enable();
    for (const t of o(this, re).values())
      t.enable();
  }
}, $d = new WeakSet(), Kb = function() {
  if (this.unselectAll(), o(this, ls)) {
    w(this, ls, !1);
    for (const t of o(this, ye).values())
      t.disable();
    for (const t of o(this, re).values())
      t.disable();
  }
}, hc = new WeakSet(), Vg = function(t) {
  const e = o(this, ye).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Hd = new WeakSet(), Zb = function() {
  let t = null;
  for (t of o(this, kt))
    ;
  return t;
}, ar = new WeakSet(), ml = function() {
  if (o(this, re).size === 0)
    return !0;
  if (o(this, re).size === 1)
    for (const t of o(this, re).values())
      return t.isEmpty();
  return !1;
}, uc = new WeakSet(), Gg = function(t) {
  for (const e of o(this, kt))
    e.unselect();
  o(this, kt).clear();
  for (const e of t)
    e.isEmpty() || (o(this, kt).add(e), e.select());
  A(this, we, Fe).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, pt(xa, "TRANSLATE_SMALL", 1), pt(xa, "TRANSLATE_BIG", 10);
let aa = xa;
var wi, Ai, An, _i, Je, ja, _n, dc, Wg;
const di = class di {
  constructor(t) {
    m(this, dc);
    m(this, wi, "");
    m(this, Ai, !1);
    m(this, An, null);
    m(this, _i, null);
    m(this, Je, null);
    m(this, ja, !1);
    m(this, _n, null);
    w(this, _n, t);
  }
  static initialize(t) {
    di._l10nPromise || (di._l10nPromise = t);
  }
  async render() {
    const t = w(this, An, document.createElement("button"));
    t.className = "altText";
    const e = await di._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    t.textContent = e, t.setAttribute("aria-label", e), t.tabIndex = "0";
    const n = o(this, _n)._uiManager._signal;
    t.addEventListener("contextmenu", We, {
      signal: n
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: n
    });
    const i = (r) => {
      r.preventDefault(), o(this, _n)._uiManager.editAltText(o(this, _n));
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: n
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (w(this, ja, !0), i(r));
    }, {
      signal: n
    }), await A(this, dc, Wg).call(this), t;
  }
  finish() {
    o(this, An) && (o(this, An).focus({
      focusVisible: o(this, ja)
    }), w(this, ja, !1));
  }
  isEmpty() {
    return !o(this, wi) && !o(this, Ai);
  }
  get data() {
    return {
      altText: o(this, wi),
      decorative: o(this, Ai)
    };
  }
  set data({
    altText: t,
    decorative: e
  }) {
    o(this, wi) === t && o(this, Ai) === e || (w(this, wi, t), w(this, Ai, e), A(this, dc, Wg).call(this));
  }
  toggle(t = !1) {
    o(this, An) && (!t && o(this, Je) && (clearTimeout(o(this, Je)), w(this, Je, null)), o(this, An).disabled = !t);
  }
  destroy() {
    var t;
    (t = o(this, An)) == null || t.remove(), w(this, An, null), w(this, _i, null);
  }
};
wi = new WeakMap(), Ai = new WeakMap(), An = new WeakMap(), _i = new WeakMap(), Je = new WeakMap(), ja = new WeakMap(), _n = new WeakMap(), dc = new WeakSet(), Wg = async function() {
  var i;
  const t = o(this, An);
  if (!t)
    return;
  if (!o(this, wi) && !o(this, Ai)) {
    t.classList.remove("done"), (i = o(this, _i)) == null || i.remove();
    return;
  }
  t.classList.add("done"), di._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((r) => {
    t.setAttribute("aria-label", r);
  });
  let e = o(this, _i);
  if (!e) {
    w(this, _i, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip");
    const r = e.id = `alt-text-tooltip-${o(this, _n).id}`;
    t.setAttribute("aria-describedby", r);
    const a = 100, l = o(this, _n)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(o(this, Je)), w(this, Je, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      w(this, Je, setTimeout(() => {
        w(this, Je, null), o(this, _i).classList.add("show"), o(this, _n)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, a));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var c;
      o(this, Je) && (clearTimeout(o(this, Je)), w(this, Je, null)), (c = o(this, _i)) == null || c.classList.remove("show");
    }, {
      signal: l
    });
  }
  e.innerText = o(this, Ai) ? await di._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : o(this, wi), e.parentNode || t.append(e);
  const n = o(this, _n).getImageForAltText();
  n == null || n.setAttribute("aria-describedby", e.id);
}, pt(di, "_l10nPromise", null);
let cd = di;
var or, En, Te, za, lr, Ae, cr, Va, Ga, Pe, fc, hr, hs, pc, ur, Ei, Gn, Wa, qa, un, gc, Ud, mc, qg, vc, Xg, yc, Yg, jd, Jb, zd, Qb, bc, Kg, wc, Zg, Ac, Jg, Vd, tw, Gd, ew, Wd, nw, qd, iw, _c, Qg, dr, vl;
const Ot = class Ot {
  constructor(t) {
    m(this, mc);
    m(this, yc);
    m(this, jd);
    m(this, zd);
    m(this, bc);
    m(this, wc);
    m(this, Ac);
    m(this, Vd);
    m(this, Gd);
    m(this, Wd);
    m(this, qd);
    m(this, _c);
    m(this, dr);
    m(this, or, null);
    m(this, En, null);
    m(this, Te, null);
    m(this, za, !1);
    m(this, lr, !1);
    m(this, Ae, null);
    m(this, cr, null);
    m(this, Va, this.focusin.bind(this));
    m(this, Ga, this.focusout.bind(this));
    m(this, Pe, null);
    m(this, fc, "");
    m(this, hr, !1);
    m(this, hs, null);
    m(this, pc, !1);
    m(this, ur, !1);
    m(this, Ei, !1);
    m(this, Gn, null);
    m(this, Wa, 0);
    m(this, qa, 0);
    m(this, un, null);
    pt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    pt(this, "_isVisible", !0);
    pt(this, "_uiManager", null);
    pt(this, "_focusEventsAllowed", !0);
    pt(this, "_l10nPromise", null);
    m(this, gc, !1);
    m(this, Ud, Ot._zIndex++);
    this.constructor === Ot && Ft("Cannot initialize AnnotationEditor."), this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: n,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [n, i], this.pageTranslation = [r, a];
    const [l, c] = this.parentDimensions;
    this.x = t.x / l, this.y = t.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Ot.prototype._resizeWithKeyboard, e = aa.TRANSLATE_SMALL, n = aa.TRANSLATE_BIG;
    return Ct(this, "_resizerKeyboardManager", new nu([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-n, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [n, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -n]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, n]
    }], [["Escape", "mac+Escape"], Ot.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return Ct(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new KR({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e, n) {
    if (Ot._l10nPromise || (Ot._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((r) => [r, t.get(r.replaceAll(/([A-Z])/g, (a) => `-${a.toLowerCase()}`))]))), n != null && n.strings)
      for (const r of n.strings)
        Ot._l10nPromise.set(r, t.get(r));
    if (Ot._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    Ot._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Ft("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return o(this, gc);
  }
  set _isDraggable(t) {
    var e;
    w(this, gc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = o(this, Ud);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : A(this, dr, vl).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (o(this, hr) ? w(this, hr, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var n;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (n = this.parent) != null && n.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, n, i) {
    const [r, a] = this.parentDimensions;
    [n, i] = this.screenToPageTranslation(n, i), this.x = (t + n) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    A(this, mc, qg).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    o(this, hs) || w(this, hs, [this.x, this.y]), A(this, mc, qg).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    o(this, hs) || w(this, hs, [this.x, this.y]);
    const [n, i] = this.parentDimensions;
    if (this.x += t / n, this.y += e / i, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: h
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, h) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: r,
      y: a
    } = this;
    const [l, c] = this.getBaseTranslation();
    r += l, a += c, this.div.style.left = `${(100 * r).toFixed(2)}%`, this.div.style.top = `${(100 * a).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!o(this, hs) && (o(this, hs)[0] !== this.x || o(this, hs)[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: n
    } = Ot, i = n / t, r = n / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, n] = this.pageDimensions;
    let {
      x: i,
      y: r,
      width: a,
      height: l
    } = this;
    if (a *= e, l *= n, i *= e, r *= n, this._mustFixPosition)
      switch (t) {
        case 0:
          i = Math.max(0, Math.min(e - a, i)), r = Math.max(0, Math.min(n - l, r));
          break;
        case 90:
          i = Math.max(0, Math.min(e - l, i)), r = Math.min(n, Math.max(a, r));
          break;
        case 180:
          i = Math.min(e, Math.max(a, i)), r = Math.min(n, Math.max(l, r));
          break;
        case 270:
          i = Math.min(e, Math.max(l, i)), r = Math.max(0, Math.min(n - a, r));
          break;
      }
    this.x = i /= e, this.y = r /= n;
    const [c, u] = this.getBaseTranslation();
    i += c, r += u;
    const {
      style: h
    } = this.div;
    h.left = `${(100 * i).toFixed(2)}%`, h.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var n;
    return A(n = Ot, vc, Xg).call(n, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var n;
    return A(n = Ot, vc, Xg).call(n, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, n]
    } = this, i = e * t, r = n * t;
    return Ge.isCSSRoundSupported ? [Math.round(i), Math.round(r)] : [i, r];
  }
  setDims(t, e) {
    const [n, i] = this.parentDimensions;
    this.div.style.width = `${(100 * t / n).toFixed(2)}%`, o(this, lr) || (this.div.style.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: n
    } = t, i = n.endsWith("%"), r = !o(this, lr) && e.endsWith("%");
    if (i && r)
      return;
    const [a, l] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(n) / a).toFixed(2)}%`), !o(this, lr) && !r && (t.height = `${(100 * parseFloat(e) / l).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var t;
    (t = o(this, Te)) == null || t.finish();
  }
  async addEditToolbar() {
    return o(this, Pe) || o(this, ur) ? o(this, Pe) : (w(this, Pe, new Og(this)), this.div.append(o(this, Pe).render()), o(this, Te) && o(this, Pe).addAltTextButton(await o(this, Te).render()), o(this, Pe));
  }
  removeEditToolbar() {
    var t;
    o(this, Pe) && (o(this, Pe).remove(), w(this, Pe, null), (t = o(this, Te)) == null || t.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    o(this, Te) || (cd.initialize(Ot._l10nPromise), w(this, Te, new cd(this)), o(this, or) && (o(this, Te).data = o(this, or), w(this, or, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var t;
    return (t = o(this, Te)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    o(this, Te) && (o(this, Te).data = t);
  }
  hasAltText() {
    var t;
    return !((t = o(this, Te)) != null && t.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = o(this, za) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
    const t = this._uiManager._signal;
    this.div.addEventListener("focusin", o(this, Va), {
      signal: t
    }), this.div.addEventListener("focusout", o(this, Ga), {
      signal: t
    });
    const [e, n] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * n / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / n).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), ld(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Ge.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (w(this, hr, !0), this._isDraggable) {
      A(this, Vd, tw).call(this, t);
      return;
    }
    A(this, Ac, Jg).call(this, t);
  }
  moveInDOM() {
    o(this, Gn) && clearTimeout(o(this, Gn)), w(this, Gn, setTimeout(() => {
      var t;
      w(this, Gn, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, n) {
    t.changeParent(this), this.x = e, this.y = n, this.fixAndSetPosition();
  }
  getRect(t, e, n = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [l, c] = this.pageTranslation, u = t / i, h = e / i, f = this.x * r, g = this.y * a, v = this.width * r, y = this.height * a;
    switch (n) {
      case 0:
        return [f + u + l, a - g - h - y + c, f + u + v + l, a - g - h + c];
      case 90:
        return [f + h + l, a - g + u + c, f + h + y + l, a - g + u + v + c];
      case 180:
        return [f - u - v + l, a - g + h + c, f - u + l, a - g + h + y + c];
      case 270:
        return [f - h - y + l, a - g - u - v + c, f - h + l, a - g - u + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [n, i, r, a] = t, l = r - n, c = a - i;
    switch (this.rotation) {
      case 0:
        return [n, e - a, l, c];
      case 90:
        return [n, e - i, c, l];
      case 180:
        return [r, e - i, l, c];
      case 270:
        return [r, e - a, c, l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    w(this, ur, !0);
  }
  disableEditMode() {
    w(this, ur, !1);
  }
  isInEditMode() {
    return o(this, ur);
  }
  shouldGetKeyboardEvents() {
    return o(this, Ei);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var e, n;
    const t = this._uiManager._signal;
    (e = this.div) == null || e.addEventListener("focusin", o(this, Va), {
      signal: t
    }), (n = this.div) == null || n.addEventListener("focusout", o(this, Ga), {
      signal: t
    });
  }
  rotate(t) {
  }
  serialize(t = !1, e = null) {
    Ft("An editor must be serializable");
  }
  static deserialize(t, e, n) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: n
    });
    i.rotation = t.rotation, w(i, or, t.accessibilityData);
    const [r, a] = i.pageDimensions, [l, c, u, h] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = l / r, i.y = c / a, i.width = u / r, i.height = h / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", o(this, Va)), this.div.removeEventListener("focusout", o(this, Ga)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), o(this, Gn) && (clearTimeout(o(this, Gn)), w(this, Gn, null)), A(this, dr, vl).call(this), this.removeEditToolbar(), o(this, un)) {
      for (const t of o(this, un).values())
        clearTimeout(t);
      w(this, un, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (A(this, jd, Jb).call(this), o(this, Ae).classList.remove("hidden"), ld(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), w(this, cr, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = o(this, Ae).children;
    if (!o(this, En)) {
      w(this, En, Array.from(e));
      const a = A(this, Gd, ew).bind(this), l = A(this, Wd, nw).bind(this), c = this._uiManager._signal;
      for (const u of o(this, En)) {
        const h = u.getAttribute("data-resizer-name");
        u.setAttribute("role", "spinbutton"), u.addEventListener("keydown", a, {
          signal: c
        }), u.addEventListener("blur", l, {
          signal: c
        }), u.addEventListener("focus", A(this, qd, iw).bind(this, h), {
          signal: c
        }), Ot._l10nPromise.get(`pdfjs-editor-resizer-label-${h}`).then((f) => u.setAttribute("aria-label", f));
      }
    }
    const n = o(this, En)[0];
    let i = 0;
    for (const a of e) {
      if (a === n)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (o(this, En).length / 4);
    if (r !== i) {
      if (r < i)
        for (let l = 0; l < i - r; l++)
          o(this, Ae).append(o(this, Ae).firstChild);
      else if (r > i)
        for (let l = 0; l < r - i; l++)
          o(this, Ae).firstChild.before(o(this, Ae).lastChild);
      let a = 0;
      for (const l of e) {
        const u = o(this, En)[a++].getAttribute("data-resizer-name");
        Ot._l10nPromise.get(`pdfjs-editor-resizer-label-${u}`).then((h) => l.setAttribute("aria-label", h));
      }
    }
    A(this, _c, Qg).call(this, 0), w(this, Ei, !0), o(this, Ae).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    o(this, Ei) && A(this, wc, Zg).call(this, o(this, fc), {
      movementX: t,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    A(this, dr, vl).call(this), this.div.focus();
  }
  select() {
    var t, e;
    if (this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !o(this, Pe)) {
      this.addEditToolbar().then(() => {
        var n, i;
        (n = this.div) != null && n.classList.contains("selectedEditor") && ((i = o(this, Pe)) == null || i.show());
      });
      return;
    }
    (e = o(this, Pe)) == null || e.show();
  }
  unselect() {
    var t, e, n, i;
    (t = o(this, Ae)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (n = this.div) != null && n.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = o(this, Pe)) == null || i.hide();
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return o(this, pc);
  }
  set isEditing(t) {
    w(this, pc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    w(this, lr, !0);
    const n = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = n, i.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      o(this, un) || w(this, un, /* @__PURE__ */ new Map());
      const {
        action: n
      } = t;
      let i = o(this, un).get(n);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), o(this, un).delete(n), o(this, un).size === 0 && w(this, un, null);
      }, Ot._telemetryTimeout), o(this, un).set(n, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), w(this, za, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), w(this, za, !0);
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const n = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), n.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    e.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
or = new WeakMap(), En = new WeakMap(), Te = new WeakMap(), za = new WeakMap(), lr = new WeakMap(), Ae = new WeakMap(), cr = new WeakMap(), Va = new WeakMap(), Ga = new WeakMap(), Pe = new WeakMap(), fc = new WeakMap(), hr = new WeakMap(), hs = new WeakMap(), pc = new WeakMap(), ur = new WeakMap(), Ei = new WeakMap(), Gn = new WeakMap(), Wa = new WeakMap(), qa = new WeakMap(), un = new WeakMap(), gc = new WeakMap(), Ud = new WeakMap(), mc = new WeakSet(), qg = function([t, e], n, i) {
  [n, i] = this.screenToPageTranslation(n, i), this.x += n / t, this.y += i / e, this.fixAndSetPosition();
}, vc = new WeakSet(), Xg = function(t, e, n) {
  switch (n) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, yc = new WeakSet(), Yg = function(t) {
  switch (t) {
    case 90: {
      const [e, n] = this.pageDimensions;
      return [0, -e / n, n / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, n] = this.pageDimensions;
      return [0, e / n, -n / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, jd = new WeakSet(), Jb = function() {
  if (o(this, Ae))
    return;
  w(this, Ae, document.createElement("div")), o(this, Ae).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const n of t) {
    const i = document.createElement("div");
    o(this, Ae).append(i), i.classList.add("resizer", n), i.setAttribute("data-resizer-name", n), i.addEventListener("pointerdown", A(this, zd, Qb).bind(this, n), {
      signal: e
    }), i.addEventListener("contextmenu", We, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(o(this, Ae));
}, zd = new WeakSet(), Qb = function(t, e) {
  var _;
  e.preventDefault();
  const {
    isMac: n
  } = Ge.platform;
  if (e.button !== 0 || e.ctrlKey && n)
    return;
  (_ = o(this, Te)) == null || _.toggle(!1);
  const i = A(this, wc, Zg).bind(this, t), r = this._isDraggable;
  this._isDraggable = !1;
  const a = this._uiManager._signal, l = {
    passive: !0,
    capture: !0,
    signal: a
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", i, l), window.addEventListener("contextmenu", We, {
    signal: a
  });
  const c = this.x, u = this.y, h = this.width, f = this.height, g = this.parent.div.style.cursor, v = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const y = () => {
    var C;
    this.parent.togglePointerEvents(!0), (C = o(this, Te)) == null || C.toggle(!0), this._isDraggable = r, window.removeEventListener("pointerup", y), window.removeEventListener("blur", y), window.removeEventListener("pointermove", i, l), window.removeEventListener("contextmenu", We), this.parent.div.style.cursor = g, this.div.style.cursor = v, A(this, bc, Kg).call(this, c, u, h, f);
  };
  window.addEventListener("pointerup", y, {
    signal: a
  }), window.addEventListener("blur", y, {
    signal: a
  });
}, bc = new WeakSet(), Kg = function(t, e, n, i) {
  const r = this.x, a = this.y, l = this.width, c = this.height;
  r === t && a === e && l === n && c === i || this.addCommands({
    cmd: () => {
      this.width = l, this.height = c, this.x = r, this.y = a;
      const [u, h] = this.parentDimensions;
      this.setDims(u * l, h * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = n, this.height = i, this.x = t, this.y = e;
      const [u, h] = this.parentDimensions;
      this.setDims(u * n, h * i), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, wc = new WeakSet(), Zg = function(t, e) {
  const [n, i] = this.parentDimensions, r = this.x, a = this.y, l = this.width, c = this.height, u = Ot.MIN_SIZE / n, h = Ot.MIN_SIZE / i, f = (B) => Math.round(B * 1e4) / 1e4, g = A(this, yc, Yg).call(this, this.rotation), v = (B, G) => [g[0] * B + g[2] * G, g[1] * B + g[3] * G], y = A(this, yc, Yg).call(this, 360 - this.rotation), _ = (B, G) => [y[0] * B + y[2] * G, y[1] * B + y[3] * G];
  let C, E, P = !1, L = !1;
  switch (t) {
    case "topLeft":
      P = !0, C = (B, G) => [0, 0], E = (B, G) => [B, G];
      break;
    case "topMiddle":
      C = (B, G) => [B / 2, 0], E = (B, G) => [B / 2, G];
      break;
    case "topRight":
      P = !0, C = (B, G) => [B, 0], E = (B, G) => [0, G];
      break;
    case "middleRight":
      L = !0, C = (B, G) => [B, G / 2], E = (B, G) => [0, G / 2];
      break;
    case "bottomRight":
      P = !0, C = (B, G) => [B, G], E = (B, G) => [0, 0];
      break;
    case "bottomMiddle":
      C = (B, G) => [B / 2, G], E = (B, G) => [B / 2, 0];
      break;
    case "bottomLeft":
      P = !0, C = (B, G) => [0, G], E = (B, G) => [B, 0];
      break;
    case "middleLeft":
      L = !0, C = (B, G) => [0, G / 2], E = (B, G) => [B, G / 2];
      break;
  }
  const k = C(l, c), F = E(l, c);
  let I = v(...F);
  const M = f(r + I[0]), x = f(a + I[1]);
  let T = 1, D = 1, [N, U] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([N, U] = _(N / n, U / i), P) {
    const B = Math.hypot(l, c);
    T = D = Math.max(Math.min(Math.hypot(F[0] - k[0] - N, F[1] - k[1] - U) / B, 1 / l, 1 / c), u / l, h / c);
  } else
    L ? T = Math.max(u, Math.min(1, Math.abs(F[0] - k[0] - N))) / l : D = Math.max(h, Math.min(1, Math.abs(F[1] - k[1] - U))) / c;
  const z = f(l * T), V = f(c * D);
  I = v(...E(z, V));
  const K = M - I[0], X = x - I[1];
  this.width = z, this.height = V, this.x = K, this.y = X, this.setDims(n * z, i * V), this.fixAndSetPosition();
}, Ac = new WeakSet(), Jg = function(t) {
  const {
    isMac: e
  } = Ge.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Vd = new WeakSet(), tw = function(t) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let n, i;
  const r = this._uiManager._signal;
  e && (this.div.classList.add("moving"), n = {
    passive: !0,
    capture: !0,
    signal: r
  }, w(this, Wa, t.clientX), w(this, qa, t.clientY), i = (l) => {
    const {
      clientX: c,
      clientY: u
    } = l, [h, f] = this.screenToPageTranslation(c - o(this, Wa), u - o(this, qa));
    w(this, Wa, c), w(this, qa, u), this._uiManager.dragSelectedEditors(h, f);
  }, window.addEventListener("pointermove", i, n));
  const a = () => {
    window.removeEventListener("pointerup", a), window.removeEventListener("blur", a), e && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", i, n)), w(this, hr, !1), this._uiManager.endDragSession() || A(this, Ac, Jg).call(this, t);
  };
  window.addEventListener("pointerup", a, {
    signal: r
  }), window.addEventListener("blur", a, {
    signal: r
  });
}, Gd = new WeakSet(), ew = function(t) {
  Ot._resizerKeyboardManager.exec(this, t);
}, Wd = new WeakSet(), nw = function(t) {
  var e;
  o(this, Ei) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== o(this, Ae) && A(this, dr, vl).call(this);
}, qd = new WeakSet(), iw = function(t) {
  w(this, fc, o(this, Ei) ? t : "");
}, _c = new WeakSet(), Qg = function(t) {
  if (o(this, En))
    for (const e of o(this, En))
      e.tabIndex = t;
}, dr = new WeakSet(), vl = function() {
  if (w(this, Ei, !1), A(this, _c, Qg).call(this, -1), o(this, cr)) {
    const {
      savedX: t,
      savedY: e,
      savedWidth: n,
      savedHeight: i
    } = o(this, cr);
    A(this, bc, Kg).call(this, t, e, n, i), w(this, cr, null);
  }
}, m(Ot, vc), pt(Ot, "_borderLineWidth", -1), pt(Ot, "_colorManager", new Hg()), pt(Ot, "_zIndex", 1), pt(Ot, "_telemetryTimeout", 1e3);
let It = Ot;
class KR extends It {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const Tv = 3285377520, ln = 4294901760, On = 65535;
class sw {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Tv, this.h2 = t ? t & 4294967295 : Tv;
  }
  update(t) {
    let e, n;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), n = 0;
      for (let _ = 0, C = t.length; _ < C; _++) {
        const E = t.charCodeAt(_);
        E <= 255 ? e[n++] = E : (e[n++] = E >>> 8, e[n++] = E & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), n = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = n >> 2, r = n - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let l = 0, c = 0, u = this.h1, h = this.h2;
    const f = 3432918353, g = 461845907, v = f & On, y = g & On;
    for (let _ = 0; _ < i; _++)
      _ & 1 ? (l = a[_], l = l * f & ln | l * v & On, l = l << 15 | l >>> 17, l = l * g & ln | l * y & On, u ^= l, u = u << 13 | u >>> 19, u = u * 5 + 3864292196) : (c = a[_], c = c * f & ln | c * v & On, c = c << 15 | c >>> 17, c = c * g & ln | c * y & On, h ^= c, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
    switch (l = 0, r) {
      case 3:
        l ^= e[i * 4 + 2] << 16;
      case 2:
        l ^= e[i * 4 + 1] << 8;
      case 1:
        l ^= e[i * 4], l = l * f & ln | l * v & On, l = l << 15 | l >>> 17, l = l * g & ln | l * y & On, i & 1 ? u ^= l : h ^= l;
    }
    this.h1 = u, this.h2 = h;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ln | t * 36045 & On, e = e * 4283543511 & ln | ((e << 16 | t >>> 16) * 2950163797 & ln) >>> 16, t ^= e >>> 1, t = t * 444984403 & ln | t * 60499 & On, e = e * 3301882366 & ln | ((e << 16 | t >>> 16) * 3120437893 & ln) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const tm = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var fr, _e, Xd, rw;
class _0 {
  constructor() {
    m(this, Xd);
    m(this, fr, !1);
    m(this, _e, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const n = o(this, _e).get(t);
    return n === void 0 ? e : Object.assign(e, n);
  }
  getRawValue(t) {
    return o(this, _e).get(t);
  }
  remove(t) {
    if (o(this, _e).delete(t), o(this, _e).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of o(this, _e).values())
        if (e instanceof It)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const n = o(this, _e).get(t);
    let i = !1;
    if (n !== void 0)
      for (const [r, a] of Object.entries(e))
        n[r] !== a && (i = !0, n[r] = a);
    else
      i = !0, o(this, _e).set(t, e);
    i && A(this, Xd, rw).call(this), e instanceof It && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return o(this, _e).has(t);
  }
  getAll() {
    return o(this, _e).size > 0 ? g0(o(this, _e)) : null;
  }
  setAll(t) {
    for (const [e, n] of Object.entries(t))
      this.setValue(e, n);
  }
  get size() {
    return o(this, _e).size;
  }
  resetModified() {
    o(this, fr) && (w(this, fr, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new aw(this);
  }
  get serializable() {
    if (o(this, _e).size === 0)
      return tm;
    const t = /* @__PURE__ */ new Map(), e = new sw(), n = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, l] of o(this, _e)) {
      const c = l instanceof It ? l.serialize(!1, i) : l;
      c && (t.set(a, c), e.update(`${a}:${JSON.stringify(c)}`), r || (r = !!c.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && n.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: n
    } : tm;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const n of o(this, _e).values()) {
      if (!(n instanceof It))
        continue;
      const i = n.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: r
      } = i;
      e.has(r) || e.set(r, Object.getPrototypeOf(n).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const a = t[r] || (t[r] = /* @__PURE__ */ new Map());
      for (const [l, c] of Object.entries(i)) {
        if (l === "type")
          continue;
        let u = a.get(l);
        u || (u = /* @__PURE__ */ new Map(), a.set(l, u));
        const h = u.get(c) ?? 0;
        u.set(c, h + 1);
      }
    }
    for (const [n, i] of e)
      t[n] = i.computeTelemetryFinalData(t[n]);
    return t;
  }
}
fr = new WeakMap(), _e = new WeakMap(), Xd = new WeakSet(), rw = function() {
  o(this, fr) || (w(this, fr, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Ec;
class aw extends _0 {
  constructor(e) {
    super();
    m(this, Ec, void 0);
    const {
      map: n,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(n, r ? {
      transfer: r
    } : null);
    w(this, Ec, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    Ft("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return o(this, Ec);
  }
}
Ec = new WeakMap();
var Xa;
class ZR {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Xa, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), o(this, Xa).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || o(this, Xa).has(t.loadedName))) {
      if (ce(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: i,
          style: r
        } = t, a = new FontFace(n, i, r);
        this.addNativeFontFace(a);
        try {
          await a.load(), o(this, Xa).add(n), e == null || e(t);
        } catch {
          vt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
        }
        return;
      }
      Ft("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const n = t.createNativeFontFace();
      if (n) {
        this.addNativeFontFace(n);
        try {
          await n.loaded;
        } catch (i) {
          throw vt(`Failed to load font '${n.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((n) => {
        const i = this._queueLoadingCallback(n);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return Ct(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (ke || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = !0), Ct(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (ce(!i.done, "completeRequest() cannot be called twice."), i.done = !0; n.length > 0 && n[0].done; ) {
        const r = n.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: n
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return n.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Ct(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function n(k, F) {
      return k.charCodeAt(F) << 24 | k.charCodeAt(F + 1) << 16 | k.charCodeAt(F + 2) << 8 | k.charCodeAt(F + 3) & 255;
    }
    function i(k, F, I, M) {
      const x = k.substring(0, F), T = k.substring(F + I);
      return x + M + T;
    }
    let r, a;
    const l = this._document.createElement("canvas");
    l.width = 1, l.height = 1;
    const c = l.getContext("2d");
    let u = 0;
    function h(k, F) {
      if (++u > 30) {
        vt("Load test font never loaded."), F();
        return;
      }
      if (c.font = "30px " + k, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        F();
        return;
      }
      setTimeout(h.bind(null, k, F));
    }
    const f = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = i(g, 976, f.length, f);
    const y = 16, _ = 1482184792;
    let C = n(g, y);
    for (r = 0, a = f.length - 3; r < a; r += 4)
      C = C - _ + n(f, r) | 0;
    r < f.length && (C = C - _ + n(f + "XXX", r) | 0), g = i(g, y, 4, FR(C));
    const E = `url(data:font/opentype;base64,${btoa(g)});`, P = `@font-face {font-family:"${f}";src:${E}}`;
    this.insertRule(P);
    const L = this._document.createElement("div");
    L.style.visibility = "hidden", L.style.width = L.style.height = "10px", L.style.position = "absolute", L.style.top = L.style.left = "0px";
    for (const k of [t.loadedName, f]) {
      const F = this._document.createElement("span");
      F.textContent = "Hi", F.style.fontFamily = k, L.append(F);
    }
    this._document.body.append(L), h(f, () => {
      L.remove(), e.complete();
    });
  }
}
Xa = new WeakMap();
class JR {
  constructor(t, {
    disableFontFace: e = !1,
    inspectFont: n = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in t)
      this[i] = t[i];
    this.disableFontFace = e === !0, this._inspectFont = n;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const n = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (n.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, n);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = Tb(this.data), e = `url(data:${this.mimetype};base64,${btoa(t)});`;
    let n;
    if (!this.cssFontInfo)
      n = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let r = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (r += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), n = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${r}src:${e}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, e), n;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let n;
    try {
      n = t.get(this.loadedName + "_path_" + e);
    } catch (r) {
      vt(`getPathGenerator - ignoring character: "${r}".`);
    }
    if (!Array.isArray(n) || n.length === 0)
      return this.compiledGlyphs[e] = function(r, a) {
      };
    const i = [];
    for (let r = 0, a = n.length; r < a; )
      switch (n[r++]) {
        case li.BEZIER_CURVE_TO:
          {
            const [l, c, u, h, f, g] = n.slice(r, r + 6);
            i.push((v) => v.bezierCurveTo(l, c, u, h, f, g)), r += 6;
          }
          break;
        case li.MOVE_TO:
          {
            const [l, c] = n.slice(r, r + 2);
            i.push((u) => u.moveTo(l, c)), r += 2;
          }
          break;
        case li.LINE_TO:
          {
            const [l, c] = n.slice(r, r + 2);
            i.push((u) => u.lineTo(l, c)), r += 2;
          }
          break;
        case li.QUADRATIC_CURVE_TO:
          {
            const [l, c, u, h] = n.slice(r, r + 4);
            i.push((f) => f.quadraticCurveTo(l, c, u, h)), r += 4;
          }
          break;
        case li.RESTORE:
          i.push((l) => l.restore());
          break;
        case li.SAVE:
          i.push((l) => l.save());
          break;
        case li.SCALE:
          ce(i.length === 2, "Scale command is only valid at the third position.");
          break;
        case li.TRANSFORM:
          {
            const [l, c, u, h, f, g] = n.slice(r, r + 6);
            i.push((v) => v.transform(l, c, u, h, f, g)), r += 6;
          }
          break;
        case li.TRANSLATE:
          {
            const [l, c] = n.slice(r, r + 2);
            i.push((u) => u.translate(l, c)), r += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(a, l) {
      i[0](a), i[1](a), a.scale(l, -l);
      for (let c = 2, u = i.length; c < u; c++)
        i[c](a);
    };
  }
}
if (ke) {
  var em = Promise.withResolvers(), Rl = null;
  (async () => {
    const t = await import(
      /*webpackIgnore: true*/
      "./empty-GlqisfcO.js"
    ), e = await import(
      /*webpackIgnore: true*/
      "./index-aKnW8ajM.js"
    ).then((l) => l.i), n = await import(
      /*webpackIgnore: true*/
      "./index-DKKMwbGA.js"
    ).then((l) => l.i), i = await import(
      /*webpackIgnore: true*/
      "./url-CihSCOWg.js"
    ).then((l) => l.u);
    let r, a;
    return new Map(Object.entries({
      fs: t,
      http: e,
      https: n,
      url: i,
      canvas: r,
      path2d: a
    }));
  })().then((t) => {
    Rl = t, em.resolve();
  }, (t) => {
    vt(`loadPackages: ${t}`), Rl = /* @__PURE__ */ new Map(), em.resolve();
  });
}
class ri {
  static get promise() {
    return em.promise;
  }
  static get(t) {
    return Rl == null ? void 0 : Rl.get(t);
  }
}
const ow = function(s) {
  return ri.get("fs").promises.readFile(s).then((e) => new Uint8Array(e));
};
class QR extends wp {
}
class tL extends od {
  _createCanvas(t, e) {
    return ri.get("canvas").createCanvas(t, e);
  }
}
class eL extends Ap {
  _fetchData(t, e) {
    return ow(t).then((n) => ({
      cMapData: n,
      compressionType: e
    }));
  }
}
class nL extends _p {
  _fetchData(t) {
    return ow(t);
  }
}
const Ne = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function nm(s, t) {
  if (!t)
    return;
  const e = t[2] - t[0], n = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, n), s.clip(i);
}
class iu {
  constructor() {
    this.constructor === iu && Ft("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    Ft("Abstract method `getPattern` called.");
  }
}
class iL extends iu {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const n of this._colorStops)
      e.addColorStop(n[0], n[1]);
    return e;
  }
  getPattern(t, e, n, i) {
    let r;
    if (i === Ne.STROKE || i === Ne.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, zt(t)) || [0, 0, 0, 0], l = Math.ceil(a[2] - a[0]) || 1, c = Math.ceil(a[3] - a[1]) || 1, u = e.cachedCanvases.getCanvas("pattern", l, c, !0), h = u.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-a[0], -a[1]), n = Z.transform(n, [1, 0, 0, 1, a[0], a[1]]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), nm(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), r = t.createPattern(u.canvas, "no-repeat");
      const f = new DOMMatrix(n);
      r.setTransform(f);
    } else
      nm(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function sg(s, t, e, n, i, r, a, l) {
  const c = t.coords, u = t.colors, h = s.data, f = s.width * 4;
  let g;
  c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = r, r = a, a = g), c[n + 1] > c[i + 1] && (g = n, n = i, i = g, g = a, a = l, l = g), c[e + 1] > c[n + 1] && (g = e, e = n, n = g, g = r, r = a, a = g);
  const v = (c[e] + t.offsetX) * t.scaleX, y = (c[e + 1] + t.offsetY) * t.scaleY, _ = (c[n] + t.offsetX) * t.scaleX, C = (c[n + 1] + t.offsetY) * t.scaleY, E = (c[i] + t.offsetX) * t.scaleX, P = (c[i + 1] + t.offsetY) * t.scaleY;
  if (y >= P)
    return;
  const L = u[r], k = u[r + 1], F = u[r + 2], I = u[a], M = u[a + 1], x = u[a + 2], T = u[l], D = u[l + 1], N = u[l + 2], U = Math.round(y), z = Math.round(P);
  let V, K, X, B, G, W, bt, At;
  for (let j = U; j <= z; j++) {
    if (j < C) {
      const et = j < y ? 0 : (y - j) / (y - C);
      V = v - (v - _) * et, K = L - (L - I) * et, X = k - (k - M) * et, B = F - (F - x) * et;
    } else {
      let et;
      j > P ? et = 1 : C === P ? et = 0 : et = (C - j) / (C - P), V = _ - (_ - E) * et, K = I - (I - T) * et, X = M - (M - D) * et, B = x - (x - N) * et;
    }
    let nt;
    j < y ? nt = 0 : j > P ? nt = 1 : nt = (y - j) / (y - P), G = v - (v - E) * nt, W = L - (L - T) * nt, bt = k - (k - D) * nt, At = F - (F - N) * nt;
    const it = Math.round(Math.min(V, G)), J = Math.round(Math.max(V, G));
    let lt = f * j + it * 4;
    for (let et = it; et <= J; et++)
      nt = (V - et) / (V - G), nt < 0 ? nt = 0 : nt > 1 && (nt = 1), h[lt++] = K - (K - W) * nt | 0, h[lt++] = X - (X - bt) * nt | 0, h[lt++] = B - (B - At) * nt | 0, h[lt++] = 255;
  }
}
function sL(s, t, e) {
  const n = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const l = t.verticesPerRow, c = Math.floor(n.length / l) - 1, u = l - 1;
      for (r = 0; r < c; r++) {
        let h = r * l;
        for (let f = 0; f < u; f++, h++)
          sg(s, e, n[h], n[h + 1], n[h + l], i[h], i[h + 1], i[h + l]), sg(s, e, n[h + l + 1], n[h + 1], n[h + l], i[h + l + 1], i[h + 1], i[h + l]);
      }
      break;
    case "triangles":
      for (r = 0, a = n.length; r < a; r += 3)
        sg(s, e, n[r], n[r + 1], n[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class rL extends iu {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, n) {
    const l = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), u = Math.ceil(this._bounds[2]) - l, h = Math.ceil(this._bounds[3]) - c, f = Math.min(Math.ceil(Math.abs(u * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), v = u / f, y = h / g, _ = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -l,
      offsetY: -c,
      scaleX: 1 / v,
      scaleY: 1 / y
    }, C = f + 2 * 2, E = g + 2 * 2, P = n.getCanvas("mesh", C, E, !1), L = P.context, k = L.createImageData(f, g);
    if (e) {
      const I = k.data;
      for (let M = 0, x = I.length; M < x; M += 4)
        I[M] = e[0], I[M + 1] = e[1], I[M + 2] = e[2], I[M + 3] = 255;
    }
    for (const I of this._figures)
      sL(k, I, _);
    return L.putImageData(k, 2, 2), {
      canvas: P.canvas,
      offsetX: l - 2 * v,
      offsetY: c - 2 * y,
      scaleX: v,
      scaleY: y
    };
  }
  getPattern(t, e, n, i) {
    nm(t, this._bbox);
    let r;
    if (i === Ne.SHADING)
      r = Z.singularValueDecompose2dScale(zt(t));
    else if (r = Z.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const l = Z.singularValueDecompose2dScale(this.matrix);
      r = [r[0] * l[0], r[1] * l[1]];
    }
    const a = this._createMeshCanvas(r, i === Ne.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Ne.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class aL extends iu {
  getPattern() {
    return "hotpink";
  }
}
function oL(s) {
  switch (s[0]) {
    case "RadialAxial":
      return new iL(s);
    case "Mesh":
      return new rL(s);
    case "Dummy":
      return new aL();
  }
  throw new Error(`Unknown IR type: ${s[0]}`);
}
const Pv = {
  COLORED: 1,
  UNCOLORED: 2
}, Yd = class Yd {
  constructor(t, e, n, i, r) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = n, this.canvasGraphicsFactory = i, this.baseTransform = r;
  }
  createPatternCanvas(t) {
    const e = this.operatorList, n = this.bbox, i = this.xstep, r = this.ystep, a = this.paintType, l = this.tilingType, c = this.color, u = this.canvasGraphicsFactory;
    vp("TilingType: " + l);
    const h = n[0], f = n[1], g = n[2], v = n[3], y = Z.singularValueDecompose2dScale(this.matrix), _ = Z.singularValueDecompose2dScale(this.baseTransform), C = [y[0] * _[0], y[1] * _[1]], E = this.getSizeAndScale(i, this.ctx.canvas.width, C[0]), P = this.getSizeAndScale(r, this.ctx.canvas.height, C[1]), L = t.cachedCanvases.getCanvas("pattern", E.size, P.size, !0), k = L.context, F = u.createCanvasGraphics(k);
    F.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(F, a, c);
    let I = h, M = f, x = g, T = v;
    return h < 0 && (I = 0, x += Math.abs(h)), f < 0 && (M = 0, T += Math.abs(f)), k.translate(-(E.scale * I), -(P.scale * M)), F.transform(E.scale, 0, 0, P.scale, 0, 0), k.save(), this.clipBbox(F, I, M, x, T), F.baseTransform = zt(F.ctx), F.executeOperatorList(e), F.endDrawing(), {
      canvas: L.canvas,
      scaleX: E.scale,
      scaleY: P.scale,
      offsetX: I,
      offsetY: M
    };
  }
  getSizeAndScale(t, e, n) {
    t = Math.abs(t);
    const i = Math.max(Yd.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * n);
    return r >= i ? r = i : n = r / t, {
      scale: n,
      size: r
    };
  }
  clipBbox(t, e, n, i, r) {
    const a = i - e, l = r - n;
    t.ctx.rect(e, n, a, l), t.current.updateRectMinMax(zt(t.ctx), [e, n, i, r]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, n) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case Pv.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, r.fillColor = a.fillStyle, r.strokeColor = a.strokeStyle;
        break;
      case Pv.UNCOLORED:
        const l = Z.makeHexColor(n[0], n[1], n[2]);
        i.fillStyle = l, i.strokeStyle = l, r.fillColor = l, r.strokeColor = l;
        break;
      default:
        throw new MR(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, n, i) {
    let r = n;
    i !== Ne.SHADING && (r = Z.transform(r, e.baseTransform), this.matrix && (r = Z.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let l = new DOMMatrix(r);
    l = l.translate(a.offsetX, a.offsetY), l = l.scale(1 / a.scaleX, 1 / a.scaleY);
    const c = t.createPattern(a.canvas, "repeat");
    return c.setTransform(l), c;
  }
};
pt(Yd, "MAX_PATTERN_SIZE", 3e3);
let im = Yd;
function lL({
  src: s,
  srcPos: t = 0,
  dest: e,
  width: n,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const l = Ge.isLittleEndian ? 4278190080 : 255, [c, u] = a ? [r, l] : [l, r], h = n >> 3, f = n & 7, g = s.length;
  e = new Uint32Array(e.buffer);
  let v = 0;
  for (let y = 0; y < i; y++) {
    for (const C = t + h; t < C; t++) {
      const E = t < g ? s[t] : 255;
      e[v++] = E & 128 ? u : c, e[v++] = E & 64 ? u : c, e[v++] = E & 32 ? u : c, e[v++] = E & 16 ? u : c, e[v++] = E & 8 ? u : c, e[v++] = E & 4 ? u : c, e[v++] = E & 2 ? u : c, e[v++] = E & 1 ? u : c;
    }
    if (f === 0)
      continue;
    const _ = t < g ? s[t++] : 255;
    for (let C = 0; C < f; C++)
      e[v++] = _ & 1 << 7 - C ? u : c;
  }
  return {
    srcPos: t,
    destPos: v
  };
}
const Rv = 16, Lv = 100, cL = 15, kv = 10, Iv = 1e3, ze = 16;
function hL(s, t) {
  if (s._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  s.__originalSave = s.save, s.__originalRestore = s.restore, s.__originalRotate = s.rotate, s.__originalScale = s.scale, s.__originalTranslate = s.translate, s.__originalTransform = s.transform, s.__originalSetTransform = s.setTransform, s.__originalResetTransform = s.resetTransform, s.__originalClip = s.clip, s.__originalMoveTo = s.moveTo, s.__originalLineTo = s.lineTo, s.__originalBezierCurveTo = s.bezierCurveTo, s.__originalRect = s.rect, s.__originalClosePath = s.closePath, s.__originalBeginPath = s.beginPath, s._removeMirroring = () => {
    s.save = s.__originalSave, s.restore = s.__originalRestore, s.rotate = s.__originalRotate, s.scale = s.__originalScale, s.translate = s.__originalTranslate, s.transform = s.__originalTransform, s.setTransform = s.__originalSetTransform, s.resetTransform = s.__originalResetTransform, s.clip = s.__originalClip, s.moveTo = s.__originalMoveTo, s.lineTo = s.__originalLineTo, s.bezierCurveTo = s.__originalBezierCurveTo, s.rect = s.__originalRect, s.closePath = s.__originalClosePath, s.beginPath = s.__originalBeginPath, delete s._removeMirroring;
  }, s.save = function() {
    t.save(), this.__originalSave();
  }, s.restore = function() {
    t.restore(), this.__originalRestore();
  }, s.translate = function(n, i) {
    t.translate(n, i), this.__originalTranslate(n, i);
  }, s.scale = function(n, i) {
    t.scale(n, i), this.__originalScale(n, i);
  }, s.transform = function(n, i, r, a, l, c) {
    t.transform(n, i, r, a, l, c), this.__originalTransform(n, i, r, a, l, c);
  }, s.setTransform = function(n, i, r, a, l, c) {
    t.setTransform(n, i, r, a, l, c), this.__originalSetTransform(n, i, r, a, l, c);
  }, s.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, s.rotate = function(n) {
    t.rotate(n), this.__originalRotate(n);
  }, s.clip = function(n) {
    t.clip(n), this.__originalClip(n);
  }, s.moveTo = function(e, n) {
    t.moveTo(e, n), this.__originalMoveTo(e, n);
  }, s.lineTo = function(e, n) {
    t.lineTo(e, n), this.__originalLineTo(e, n);
  }, s.bezierCurveTo = function(e, n, i, r, a, l) {
    t.bezierCurveTo(e, n, i, r, a, l), this.__originalBezierCurveTo(e, n, i, r, a, l);
  }, s.rect = function(e, n, i, r) {
    t.rect(e, n, i, r), this.__originalRect(e, n, i, r);
  }, s.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, s.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class uL {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, n) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, n)) : (i = this.canvasFactory.create(e, n), this.cache[t] = i), i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function pu(s, t, e, n, i, r, a, l, c, u) {
  const [h, f, g, v, y, _] = zt(s);
  if (f === 0 && g === 0) {
    const P = a * h + y, L = Math.round(P), k = l * v + _, F = Math.round(k), I = (a + c) * h + y, M = Math.abs(Math.round(I) - L) || 1, x = (l + u) * v + _, T = Math.abs(Math.round(x) - F) || 1;
    return s.setTransform(Math.sign(h), 0, 0, Math.sign(v), L, F), s.drawImage(t, e, n, i, r, 0, 0, M, T), s.setTransform(h, f, g, v, y, _), [M, T];
  }
  if (h === 0 && v === 0) {
    const P = l * g + y, L = Math.round(P), k = a * f + _, F = Math.round(k), I = (l + u) * g + y, M = Math.abs(Math.round(I) - L) || 1, x = (a + c) * f + _, T = Math.abs(Math.round(x) - F) || 1;
    return s.setTransform(0, Math.sign(f), Math.sign(g), 0, L, F), s.drawImage(t, e, n, i, r, 0, 0, T, M), s.setTransform(h, f, g, v, y, _), [T, M];
  }
  s.drawImage(t, e, n, i, r, a, l, c, u);
  const C = Math.hypot(h, f), E = Math.hypot(g, v);
  return [C * c, E * u];
}
function dL(s) {
  const {
    width: t,
    height: e
  } = s;
  if (t > Iv || e > Iv)
    return null;
  const n = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), r = t + 1;
  let a = new Uint8Array(r * (e + 1)), l, c, u;
  const h = t + 7 & -8;
  let f = new Uint8Array(h * e), g = 0;
  for (const E of s.data) {
    let P = 128;
    for (; P > 0; )
      f[g++] = E & P ? 0 : 255, P >>= 1;
  }
  let v = 0;
  for (g = 0, f[g] !== 0 && (a[0] = 1, ++v), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (a[c] = f[g] ? 2 : 1, ++v), g++;
  for (f[g] !== 0 && (a[c] = 2, ++v), l = 1; l < e; l++) {
    g = l * h, u = l * r, f[g - h] !== f[g] && (a[u] = f[g] ? 1 : 8, ++v);
    let E = (f[g] ? 4 : 0) + (f[g - h] ? 8 : 0);
    for (c = 1; c < t; c++)
      E = (E >> 2) + (f[g + 1] ? 4 : 0) + (f[g - h + 1] ? 8 : 0), i[E] && (a[u + c] = i[E], ++v), g++;
    if (f[g - h] !== f[g] && (a[u + c] = f[g] ? 2 : 4, ++v), v > n)
      return null;
  }
  for (g = h * (e - 1), u = l * r, f[g] !== 0 && (a[u] = 8, ++v), c = 1; c < t; c++)
    f[g] !== f[g + 1] && (a[u + c] = f[g] ? 4 : 8, ++v), g++;
  if (f[g] !== 0 && (a[u + c] = 4, ++v), v > n)
    return null;
  const y = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]), _ = new Path2D();
  for (l = 0; v && l <= e; l++) {
    let E = l * r;
    const P = E + t;
    for (; E < P && !a[E]; )
      E++;
    if (E === P)
      continue;
    _.moveTo(E % r, l);
    const L = E;
    let k = a[E];
    do {
      const F = y[k];
      do
        E += F;
      while (!a[E]);
      const I = a[E];
      I !== 5 && I !== 10 ? (k = I, a[E] = 0) : (k = I & 51 * k >> 4, a[E] &= k >> 2 | k << 2), _.lineTo(E % r, E / r | 0), a[E] || --v;
    } while (L !== E);
    --l;
  }
  return f = null, a = null, function(E) {
    E.save(), E.scale(1 / t, -1 / e), E.translate(0, -e), E.fill(_), E.beginPath(), E.restore();
  };
}
class Mv {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = xb, this.textMatrixScale = 1, this.fontMatrix = Rg, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = xe.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, n) {
    [e, n] = Z.applyTransform([e, n], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, n), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, n);
  }
  updateRectMinMax(t, e) {
    const n = Z.applyTransform(e, t), i = Z.applyTransform(e.slice(2), t), r = Z.applyTransform([e[0], e[3]], t), a = Z.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, n[0], i[0], r[0], a[0]), this.minY = Math.min(this.minY, n[1], i[1], r[1], a[1]), this.maxX = Math.max(this.maxX, n[0], i[0], r[0], a[0]), this.maxY = Math.max(this.maxY, n[1], i[1], r[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    Z.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, n, i, r, a, l, c, u, h) {
    const f = Z.bezierBoundingBox(e, n, i, r, a, l, c, u, h);
    h || this.updateRectMinMax(t, f);
  }
  getPathBoundingBox(t = Ne.FILL, e = null) {
    const n = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Ne.STROKE) {
      e || Ft("Stroke bounding box must include transform.");
      const i = Z.singularValueDecompose2dScale(e), r = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      n[0] -= r, n[1] -= a, n[2] += r, n[3] += a;
    }
    return n;
  }
  updateClipFromPath() {
    const t = Z.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Ne.FILL, e = null) {
    return Z.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Fv(s, t) {
  if (typeof ImageData < "u" && t instanceof ImageData) {
    s.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % ze, r = (e - i) / ze, a = i === 0 ? r : r + 1, l = s.createImageData(n, ze);
  let c = 0, u;
  const h = t.data, f = l.data;
  let g, v, y, _;
  if (t.kind === Tu.GRAYSCALE_1BPP) {
    const C = h.byteLength, E = new Uint32Array(f.buffer, 0, f.byteLength >> 2), P = E.length, L = n + 7 >> 3, k = 4294967295, F = Ge.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (y = g < r ? ze : i, u = 0, v = 0; v < y; v++) {
        const I = C - c;
        let M = 0;
        const x = I > L ? n : I * 8 - 7, T = x & -8;
        let D = 0, N = 0;
        for (; M < T; M += 8)
          N = h[c++], E[u++] = N & 128 ? k : F, E[u++] = N & 64 ? k : F, E[u++] = N & 32 ? k : F, E[u++] = N & 16 ? k : F, E[u++] = N & 8 ? k : F, E[u++] = N & 4 ? k : F, E[u++] = N & 2 ? k : F, E[u++] = N & 1 ? k : F;
        for (; M < x; M++)
          D === 0 && (N = h[c++], D = 128), E[u++] = N & D ? k : F, D >>= 1;
      }
      for (; u < P; )
        E[u++] = 0;
      s.putImageData(l, 0, g * ze);
    }
  } else if (t.kind === Tu.RGBA_32BPP) {
    for (v = 0, _ = n * ze * 4, g = 0; g < r; g++)
      f.set(h.subarray(c, c + _)), c += _, s.putImageData(l, 0, v), v += ze;
    g < a && (_ = n * i * 4, f.set(h.subarray(c, c + _)), s.putImageData(l, 0, v));
  } else if (t.kind === Tu.RGB_24BPP)
    for (y = ze, _ = n * y, g = 0; g < a; g++) {
      for (g >= r && (y = i, _ = n * y), u = 0, v = _; v--; )
        f[u++] = h[c++], f[u++] = h[c++], f[u++] = h[c++], f[u++] = 255;
      s.putImageData(l, 0, g * ze);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Dv(s, t) {
  if (t.bitmap) {
    s.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, n = t.width, i = e % ze, r = (e - i) / ze, a = i === 0 ? r : r + 1, l = s.createImageData(n, ze);
  let c = 0;
  const u = t.data, h = l.data;
  for (let f = 0; f < a; f++) {
    const g = f < r ? ze : i;
    ({
      srcPos: c
    } = lL({
      src: u,
      srcPos: c,
      dest: h,
      width: n,
      height: g,
      nonBlackColor: 0
    })), s.putImageData(l, 0, f * ze);
  }
}
function ll(s, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const n of e)
    s[n] !== void 0 && (t[n] = s[n]);
  s.setLineDash !== void 0 && (t.setLineDash(s.getLineDash()), t.lineDashOffset = s.lineDashOffset);
}
function gu(s) {
  if (s.strokeStyle = s.fillStyle = "#000000", s.fillRule = "nonzero", s.globalAlpha = 1, s.lineWidth = 1, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 10, s.globalCompositeOperation = "source-over", s.font = "10px sans-serif", s.setLineDash !== void 0 && (s.setLineDash([]), s.lineDashOffset = 0), !ke) {
    const {
      filter: t
    } = s;
    t !== "none" && t !== "" && (s.filter = "none");
  }
}
function Ov(s, t) {
  if (t)
    return !0;
  const e = Z.singularValueDecompose2dScale(s);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const n = Math.fround((globalThis.devicePixelRatio || 1) * ks.PDF_TO_CSS_UNITS);
  return e[0] <= n && e[1] <= n;
}
const fL = ["butt", "round", "square"], pL = ["miter", "round", "bevel"], gL = {}, Nv = {};
var Sc, sm, xc, rm;
const M0 = class M0 {
  constructor(t, e, n, i, r, {
    optionalContentConfig: a,
    markedContentStack: l = null
  }, c, u) {
    m(this, Sc);
    m(this, xc);
    this.ctx = t, this.current = new Mv(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = n, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = l || [], this.optionalContentConfig = a, this.cachedCanvases = new uL(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = u, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: n = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, l = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = l, n) {
      const c = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...zt(this.compositeCtx));
    }
    this.ctx.save(), gu(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = zt(this.ctx);
  }
  executeOperatorList(t, e, n, i) {
    const r = t.argsArray, a = t.fnArray;
    let l = e || 0;
    const c = r.length;
    if (c === l)
      return l;
    const u = c - l > kv && typeof n == "function", h = u ? Date.now() + cL : 0;
    let f = 0;
    const g = this.commonObjs, v = this.objs;
    let y;
    for (; ; ) {
      if (i !== void 0 && l === i.nextBreakPoint)
        return i.breakIt(l, n), l;
      if (y = a[l], y !== yn.dependency)
        this[y].apply(this, r[l]);
      else
        for (const _ of r[l]) {
          const C = _.startsWith("g_") ? g : v;
          if (!C.has(_))
            return C.get(_, n), l;
        }
      if (l++, l === c)
        return l;
      if (u && ++f > kv) {
        if (Date.now() > h)
          return n(), l;
        f = 0;
      }
    }
  }
  endDrawing() {
    A(this, Sc, sm).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, xc, rm).call(this);
  }
  _scaleImage(t, e) {
    const n = t.width, i = t.height;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), l = n, c = i, u = "prescale1", h, f;
    for (; r > 2 && l > 1 || a > 2 && c > 1; ) {
      let g = l, v = c;
      r > 2 && l > 1 && (g = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), r /= l / g), a > 2 && c > 1 && (v = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, a /= c / v), h = this.cachedCanvases.getCanvas(u, g, v), f = h.context, f.clearRect(0, 0, g, v), f.drawImage(t, 0, 0, l, c, 0, 0, g, v), t = h.canvas, l = g, c = v, u = u === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: l,
      paintHeight: c
    };
  }
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: n,
      height: i
    } = t, r = this.current.fillColor, a = this.current.patternFill, l = zt(e);
    let c, u, h, f;
    if ((t.bitmap || t.data) && t.count > 1) {
      const x = t.bitmap || t.data.buffer;
      u = JSON.stringify(a ? l : [l.slice(0, 4), r]), c = this._cachedBitmapsMap.get(x), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(x, c));
      const T = c.get(u);
      if (T && !a) {
        const D = Math.round(Math.min(l[0], l[2]) + l[4]), N = Math.round(Math.min(l[1], l[3]) + l[5]);
        return {
          canvas: T,
          offsetX: D,
          offsetY: N
        };
      }
      h = T;
    }
    h || (f = this.cachedCanvases.getCanvas("maskCanvas", n, i), Dv(f.context, t));
    let g = Z.transform(l, [1 / n, 0, 0, -1 / i, 0, 0]);
    g = Z.transform(g, [1, 0, 0, 1, 0, -i]);
    const [v, y, _, C] = Z.getAxialAlignedBoundingBox([0, 0, n, i], g), E = Math.round(_ - v) || 1, P = Math.round(C - y) || 1, L = this.cachedCanvases.getCanvas("fillCanvas", E, P), k = L.context, F = v, I = y;
    k.translate(-F, -I), k.transform(...g), h || (h = this._scaleImage(f.canvas, ci(k)), h = h.img, c && a && c.set(u, h)), k.imageSmoothingEnabled = Ov(zt(k), t.interpolate), pu(k, h, 0, 0, h.width, h.height, 0, 0, n, i), k.globalCompositeOperation = "source-in";
    const M = Z.transform(ci(k), [1, 0, 0, 1, -F, -I]);
    return k.fillStyle = a ? r.getPattern(e, this, M, Ne.FILL) : r, k.fillRect(0, 0, n, i), c && !a && (this.cachedCanvases.delete("fillCanvas"), c.set(u, L.canvas)), {
      canvas: L.canvas,
      offsetX: Math.round(F),
      offsetY: Math.round(I)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = fL[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = pL[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const n = this.ctx;
    n.setLineDash !== void 0 && (n.setLineDash(t), n.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, n] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(n);
          break;
        case "LC":
          this.setLineCap(n);
          break;
        case "LJ":
          this.setLineJoin(n);
          break;
        case "ML":
          this.setMiterLimit(n);
          break;
        case "D":
          this.setDash(n[0], n[1]);
          break;
        case "RI":
          this.setRenderingIntent(n);
          break;
        case "FL":
          this.setFlatness(n);
          break;
        case "Font":
          this.setFont(n[0], n[1]);
          break;
        case "CA":
          this.current.strokeAlpha = n;
          break;
        case "ca":
          this.current.fillAlpha = n, this.ctx.globalAlpha = n;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = n;
          break;
        case "SMask":
          this.current.activeSMask = n ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, n = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(n, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const r = this.ctx;
    r.setTransform(...zt(this.suspendedCtx)), ll(this.suspendedCtx, r), hL(r, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), ll(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, n = this.suspendedCtx;
    this.composeSMask(n, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, n, i) {
    const r = i[0], a = i[1], l = i[2] - r, c = i[3] - a;
    l === 0 || c === 0 || (this.genericComposeSMask(e.context, n, l, c, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(n.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, n, i, r, a, l, c, u, h, f) {
    let g = t.canvas, v = c - h, y = u - f;
    if (a) {
      if (v < 0 || y < 0 || v + n > g.width || y + i > g.height) {
        const C = this.cachedCanvases.getCanvas("maskExtension", n, i), E = C.context;
        E.drawImage(g, -v, -y), a.some((P) => P !== 0) && (E.globalCompositeOperation = "destination-atop", E.fillStyle = Z.makeHexColor(...a), E.fillRect(0, 0, n, i), E.globalCompositeOperation = "source-over"), g = C.canvas, v = y = 0;
      } else if (a.some((C) => C !== 0)) {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const C = new Path2D();
        C.rect(v, y, n, i), t.clip(C), t.globalCompositeOperation = "destination-atop", t.fillStyle = Z.makeHexColor(...a), t.fillRect(v, y, n, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && l ? e.filter = this.filterFactory.addAlphaFilter(l) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(l));
    const _ = new Path2D();
    _.rect(c, u, n, i), e.clip(_), e.globalCompositeOperation = "destination-in", e.drawImage(g, v, y, n, i, c, u, n, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (ll(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), ll(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, n, i, r, a) {
    this.ctx.transform(t, e, n, i, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, n) {
    const i = this.ctx, r = this.current;
    let a = r.x, l = r.y, c, u;
    const h = zt(i), f = h[0] === 0 && h[3] === 0 || h[1] === 0 && h[2] === 0, g = f ? n.slice(0) : null;
    for (let v = 0, y = 0, _ = t.length; v < _; v++)
      switch (t[v] | 0) {
        case yn.rectangle:
          a = e[y++], l = e[y++];
          const C = e[y++], E = e[y++], P = a + C, L = l + E;
          i.moveTo(a, l), C === 0 || E === 0 ? i.lineTo(P, L) : (i.lineTo(P, l), i.lineTo(P, L), i.lineTo(a, L)), f || r.updateRectMinMax(h, [a, l, P, L]), i.closePath();
          break;
        case yn.moveTo:
          a = e[y++], l = e[y++], i.moveTo(a, l), f || r.updatePathMinMax(h, a, l);
          break;
        case yn.lineTo:
          a = e[y++], l = e[y++], i.lineTo(a, l), f || r.updatePathMinMax(h, a, l);
          break;
        case yn.curveTo:
          c = a, u = l, a = e[y + 4], l = e[y + 5], i.bezierCurveTo(e[y], e[y + 1], e[y + 2], e[y + 3], a, l), r.updateCurvePathMinMax(h, c, u, e[y], e[y + 1], e[y + 2], e[y + 3], a, l, g), y += 6;
          break;
        case yn.curveTo2:
          c = a, u = l, i.bezierCurveTo(a, l, e[y], e[y + 1], e[y + 2], e[y + 3]), r.updateCurvePathMinMax(h, c, u, a, l, e[y], e[y + 1], e[y + 2], e[y + 3], g), a = e[y + 2], l = e[y + 3], y += 4;
          break;
        case yn.curveTo3:
          c = a, u = l, a = e[y + 2], l = e[y + 3], i.bezierCurveTo(e[y], e[y + 1], a, l, a, l), r.updateCurvePathMinMax(h, c, u, e[y], e[y + 1], a, l, a, l, g), y += 4;
          break;
        case yn.closePath:
          i.closePath();
          break;
      }
    f && r.updateScalingPathMinMax(h, g), r.setCurrentPoint(a, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, n = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof n == "object" && (n != null && n.getPattern) ? (e.save(), e.strokeStyle = n.getPattern(e, this, ci(e), Ne.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    let r = !1;
    i && (e.save(), e.fillStyle = n.getPattern(e, this, ci(e), Ne.FILL), r = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), r && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = gL;
  }
  eoClip() {
    this.pendingClip = Nv;
  }
  beginText() {
    this.current.textMatrix = xb, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const n of t)
      e.setTransform(...n.transform), e.translate(n.x, n.y), n.addToPath(e, n.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    var h;
    const n = this.commonObjs.get(t), i = this.current;
    if (!n)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = n.fontMatrix || Rg, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && vt("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = n, this.current.fontSize = e, n.isType3Font)
      return;
    const r = n.loadedName || "sans-serif", a = ((h = n.systemFontInfo) == null ? void 0 : h.css) || `"${r}", ${n.fallbackName}`;
    let l = "normal";
    n.black ? l = "900" : n.bold && (l = "bold");
    const c = n.italic ? "italic" : "normal";
    let u = e;
    e < Rv ? u = Rv : e > Lv && (u = Lv), this.current.fontSizeScale = e / u, this.ctx.font = `${c} ${l} ${u}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, n, i, r, a) {
    this.current.textMatrix = [t, e, n, i, r, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, n, i) {
    const r = this.ctx, a = this.current, l = a.font, c = a.textRenderingMode, u = a.fontSize / a.fontSizeScale, h = c & xe.FILL_STROKE_MASK, f = !!(c & xe.ADD_TO_PATH_FLAG), g = a.patternFill && !l.missingFile;
    let v;
    (l.disableFontFace || f || g) && (v = l.getPathGenerator(this.commonObjs, t)), l.disableFontFace || g ? (r.save(), r.translate(e, n), r.beginPath(), v(r, u), i && r.setTransform(...i), (h === xe.FILL || h === xe.FILL_STROKE) && r.fill(), (h === xe.STROKE || h === xe.FILL_STROKE) && r.stroke(), r.restore()) : ((h === xe.FILL || h === xe.FILL_STROKE) && r.fillText(t, e, n), (h === xe.STROKE || h === xe.FILL_STROKE) && r.strokeText(t, e, n)), f && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: zt(r),
      x: e,
      y: n,
      fontSize: u,
      addToPath: v
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let n = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        n = !0;
        break;
      }
    return Ct(this, "isFontSubpixelAAEnabled", n);
  }
  showText(t) {
    const e = this.current, n = e.font;
    if (n.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const r = this.ctx, a = e.fontSizeScale, l = e.charSpacing, c = e.wordSpacing, u = e.fontDirection, h = e.textHScale * u, f = t.length, g = n.vertical, v = g ? 1 : -1, y = n.defaultVMetrics, _ = i * e.fontMatrix[0], C = e.textRenderingMode === xe.FILL && !n.disableFontFace && !e.patternFill;
    r.save(), r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), u > 0 ? r.scale(h, -1) : r.scale(h, 1);
    let E;
    if (e.patternFill) {
      r.save();
      const I = e.fillColor.getPattern(r, this, ci(r), Ne.FILL);
      E = zt(r), r.restore(), r.fillStyle = I;
    }
    let P = e.lineWidth;
    const L = e.textMatrixScale;
    if (L === 0 || P === 0) {
      const I = e.textRenderingMode & xe.FILL_STROKE_MASK;
      (I === xe.STROKE || I === xe.FILL_STROKE) && (P = this.getSinglePixelWidth());
    } else
      P /= L;
    if (a !== 1 && (r.scale(a, a), P /= a), r.lineWidth = P, n.isInvalidPDFjsFont) {
      const I = [];
      let M = 0;
      for (const x of t)
        I.push(x.unicode), M += x.width;
      r.fillText(I.join(""), 0, 0), e.x += M * _ * h, r.restore(), this.compose();
      return;
    }
    let k = 0, F;
    for (F = 0; F < f; ++F) {
      const I = t[F];
      if (typeof I == "number") {
        k += v * I * i / 1e3;
        continue;
      }
      let M = !1;
      const x = (I.isSpace ? c : 0) + l, T = I.fontChar, D = I.accent;
      let N, U, z = I.width;
      if (g) {
        const K = I.vmetric || y, X = -(I.vmetric ? K[1] : z * 0.5) * _, B = K[2] * _;
        z = K ? -K[0] : z, N = X / a, U = (k + B) / a;
      } else
        N = k / a, U = 0;
      if (n.remeasure && z > 0) {
        const K = r.measureText(T).width * 1e3 / i * a;
        if (z < K && this.isFontSubpixelAAEnabled) {
          const X = z / K;
          M = !0, r.save(), r.scale(X, 1), N /= X;
        } else
          z !== K && (N += (z - K) / 2e3 * i / a);
      }
      if (this.contentVisible && (I.isInFont || n.missingFile)) {
        if (C && !D)
          r.fillText(T, N, U);
        else if (this.paintChar(T, N, U, E), D) {
          const K = N + i * D.offset.x / a, X = U - i * D.offset.y / a;
          this.paintChar(D.fontChar, K, X, E);
        }
      }
      const V = g ? z * _ - x * u : z * _ + x * u;
      k += V, M && r.restore();
    }
    g ? e.y -= k : e.x += k * h, r.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, n = this.current, i = n.font, r = n.fontSize, a = n.fontDirection, l = i.vertical ? 1 : -1, c = n.charSpacing, u = n.wordSpacing, h = n.textHScale * a, f = n.fontMatrix || Rg, g = t.length, v = n.textRenderingMode === xe.INVISIBLE;
    let y, _, C, E;
    if (!(v || r === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...n.textMatrix), e.translate(n.x, n.y), e.scale(h, a), y = 0; y < g; ++y) {
        if (_ = t[y], typeof _ == "number") {
          E = l * _ * r / 1e3, this.ctx.translate(E, 0), n.x += E * h;
          continue;
        }
        const P = (_.isSpace ? u : 0) + c, L = i.charProcOperatorList[_.operatorListId];
        if (!L) {
          vt(`Type3 character "${_.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = _, this.save(), e.scale(r, r), e.transform(...f), this.executeOperatorList(L), this.restore()), C = Z.applyTransform([_.width, 0], f)[0] * r + P, e.translate(C, 0), n.x += C * h;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, n, i, r, a) {
    this.ctx.rect(n, i, r - n, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const n = t[1], i = this.baseTransform || zt(this.ctx), r = {
        createCanvasGraphics: (a) => new M0(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new im(t, n, this.ctx, r, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, n) {
    const i = Z.makeHexColor(t, e, n);
    this.ctx.strokeStyle = i, this.current.strokeColor = i;
  }
  setFillRGBColor(t, e, n) {
    const i = Z.makeHexColor(t, e, n);
    this.ctx.fillStyle = i, this.current.fillColor = i, this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let n;
    return this.cachedPatterns.has(t) ? n = this.cachedPatterns.get(t) : (n = oL(this.getObject(t)), this.cachedPatterns.set(t, n)), e && (n.matrix = e), n;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const n = this._getPattern(t);
    e.fillStyle = n.getPattern(e, this, ci(e), Ne.SHADING);
    const i = ci(e);
    if (i) {
      const {
        width: r,
        height: a
      } = e.canvas, [l, c, u, h] = Z.getAxialAlignedBoundingBox([0, 0, r, a], i);
      this.ctx.fillRect(l, c, u - l, h - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    Ft("Should not call beginInlineImage");
  }
  beginImageData() {
    Ft("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = zt(this.ctx), e)) {
      const n = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], n, i), this.current.updateRectMinMax(zt(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || vp("TODO: Support non-isolated groups."), t.knockout && vt("Knockout groups not supported.");
    const n = zt(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = Z.getAxialAlignedBoundingBox(t.bbox, zt(e));
    const r = [0, 0, e.canvas.width, e.canvas.height];
    i = Z.intersect(i, r) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), l = Math.floor(i[1]), c = Math.max(Math.ceil(i[2]) - a, 1), u = Math.max(Math.ceil(i[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, u]);
    let h = "groupAt" + this.groupLevel;
    t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
    const f = this.cachedCanvases.getCanvas(h, c, u), g = f.context;
    g.translate(-a, -l), g.transform(...n), t.smask ? this.smaskStack.push({
      canvas: f.canvas,
      context: g,
      offsetX: a,
      offsetY: l,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, l), e.save()), ll(e, g), this.ctx = g, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, n = this.groupStack.pop();
    if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = zt(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const r = Z.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
    }
  }
  beginAnnotation(t, e, n, i, r) {
    if (A(this, Sc, sm).call(this), gu(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], l = e[3] - e[1];
      if (r && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= e[0], n[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = l;
        const [c, u] = Z.singularValueDecompose2dScale(zt(this.ctx)), {
          viewportScale: h
        } = this, f = Math.ceil(a * this.outputScaleX * h), g = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(f, g);
        const {
          canvas: v,
          context: y
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, v), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -u, 0, l * u), gu(this.ctx);
      } else
        gu(this.ctx), this.ctx.rect(e[0], e[1], a, l), this.ctx.clip(), this.endPath();
    }
    this.current = new Mv(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...n), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), A(this, xc, rm).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const n = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = dL(t)), i.compiled)) {
      i.compiled(n);
      return;
    }
    const r = this._createMaskCanvas(t), a = r.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, r.offsetX, r.offsetY), n.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, n = 0, i = 0, r, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const l = this.ctx;
    l.save();
    const c = zt(l);
    l.transform(e, n, i, r, 0, 0);
    const u = this._createMaskCanvas(t);
    l.setTransform(1, 0, 0, 1, u.offsetX - c[4], u.offsetY - c[5]);
    for (let h = 0, f = a.length; h < f; h += 2) {
      const g = Z.transform(c, [e, n, i, r, a[h], a[h + 1]]), [v, y] = Z.applyTransform([0, 0], g);
      l.drawImage(u.canvas, v, y);
    }
    l.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, n = this.current.fillColor, i = this.current.patternFill;
    for (const r of t) {
      const {
        data: a,
        width: l,
        height: c,
        transform: u
      } = r, h = this.cachedCanvases.getCanvas("maskCanvas", l, c), f = h.context;
      f.save();
      const g = this.getObject(a, r);
      Dv(f, g), f.globalCompositeOperation = "source-in", f.fillStyle = i ? n.getPattern(f, this, ci(e), Ne.FILL) : n, f.fillRect(0, 0, l, c), f.restore(), e.save(), e.transform(...u), e.scale(1, -1), pu(e, h.canvas, 0, 0, l, c, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      vt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, n, i) {
    if (!this.contentVisible)
      return;
    const r = this.getObject(t);
    if (!r) {
      vt("Dependent image isn't ready yet");
      return;
    }
    const a = r.width, l = r.height, c = [];
    for (let u = 0, h = i.length; u < h; u += 2)
      c.push({
        transform: [e, 0, 0, n, i[u], i[u + 1]],
        x: 0,
        y: 0,
        w: a,
        h: l
      });
    this.paintInlineImageXObjectGroup(r, c);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: n,
      height: i
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", n, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, n = t.height, i = this.ctx;
    if (this.save(), !ke) {
      const {
        filter: l
      } = i;
      l !== "none" && l !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / n);
    let r;
    if (t.bitmap)
      r = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      r = t;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", e, n).context;
      Fv(c, t), r = this.applyTransferMapsToCanvas(c);
    }
    const a = this._scaleImage(r, ci(i));
    i.imageSmoothingEnabled = Ov(zt(i), t.interpolate), pu(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -n, e, n), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const n = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const r = t.width, a = t.height, c = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
      Fv(c, t), i = this.applyTransferMapsToCanvas(c);
    }
    for (const r of e)
      n.save(), n.transform(...r.transform), n.scale(1, -1), pu(n, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), n.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const n = this.ctx;
    this.pendingClip && (e || (this.pendingClip === Nv ? n.clip("evenodd") : n.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), n.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = zt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), n = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(n, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: n,
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, l;
      if (n === 0 && i === 0) {
        const c = Math.abs(e), u = Math.abs(r);
        if (c === u)
          if (t === 0)
            a = l = 1 / c;
          else {
            const h = c * t;
            a = l = h < 1 ? 1 / h : 1;
          }
        else if (t === 0)
          a = 1 / c, l = 1 / u;
        else {
          const h = c * t, f = u * t;
          a = h < 1 ? 1 / h : 1, l = f < 1 ? 1 / f : 1;
        }
      } else {
        const c = Math.abs(e * r - n * i), u = Math.hypot(e, n), h = Math.hypot(i, r);
        if (t === 0)
          a = h / c, l = u / c;
        else {
          const f = t * c;
          a = h > f ? h / f : 1, l = u > f ? u / f : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = l;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: n
    } = this.current, [i, r] = this.getScaleForStroking();
    if (e.lineWidth = n || 1, i === 1 && r === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, r), a.length > 0) {
      const l = Math.max(i, r);
      e.setLineDash(a.map((c) => c / l)), e.lineDashOffset /= l;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
Sc = new WeakSet(), sm = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, xc = new WeakSet(), rm = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
let Ta = M0;
for (const s in yn)
  Ta.prototype[s] !== void 0 && (Ta.prototype[yn[s]] = Ta.prototype[s]);
var Cc, Tc;
class Wi {
  static get workerPort() {
    return o(this, Cc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    w(this, Cc, t);
  }
  static get workerSrc() {
    return o(this, Tc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    w(this, Tc, t);
  }
}
Cc = new WeakMap(), Tc = new WeakMap(), m(Wi, Cc, null), m(Wi, Tc, "");
const mu = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, Qt = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Xe(s) {
  switch (s instanceof Error || typeof s == "object" && s !== null || Ft('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), s.name) {
    case "AbortException":
      return new fa(s.message);
    case "MissingPDFException":
      return new da(s.message);
    case "PasswordException":
      return new kg(s.message, s.code);
    case "UnexpectedResponseException":
      return new yp(s.message, s.status);
    case "UnknownErrorException":
      return new Ig(s.message, s.details);
    default:
      return new Ig(s.message, s.toString());
  }
}
var Kd, lw, Zd, cw, Ya, Mu;
class yl {
  constructor(t, e, n) {
    m(this, Kd);
    m(this, Zd);
    m(this, Ya);
    this.sourceName = t, this.targetName = e, this.comObj = n, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (i) => {
      const r = i.data;
      if (r.targetName !== this.sourceName)
        return;
      if (r.stream) {
        A(this, Zd, cw).call(this, r);
        return;
      }
      if (r.callback) {
        const l = r.callbackId, c = this.callbackCapabilities[l];
        if (!c)
          throw new Error(`Cannot resolve callback ${l}`);
        if (delete this.callbackCapabilities[l], r.callback === mu.DATA)
          c.resolve(r.data);
        else if (r.callback === mu.ERROR)
          c.reject(Xe(r.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const a = this.actionHandler[r.action];
      if (!a)
        throw new Error(`Unknown action from worker: ${r.action}`);
      if (r.callbackId) {
        const l = this.sourceName, c = r.sourceName;
        new Promise(function(u) {
          u(a(r.data));
        }).then(function(u) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: mu.DATA,
            callbackId: r.callbackId,
            data: u
          });
        }, function(u) {
          n.postMessage({
            sourceName: l,
            targetName: c,
            callback: mu.ERROR,
            callbackId: r.callbackId,
            reason: Xe(u)
          });
        });
        return;
      }
      if (r.streamId) {
        A(this, Kd, lw).call(this, r);
        return;
      }
      a(r.data);
    }, n.addEventListener("message", this._onComObjOnMessage);
  }
  on(t, e) {
    const n = this.actionHandler;
    if (n[t])
      throw new Error(`There is already an actionName called "${t}"`);
    n[t] = e;
  }
  send(t, e, n) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, n);
  }
  sendWithPromise(t, e, n) {
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, n);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, n, i) {
    const r = this.streamId++, a = this.sourceName, l = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (u) => {
        const h = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: u,
          startCall: h,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: a,
          targetName: l,
          action: t,
          streamId: r,
          data: e,
          desiredSize: u.desiredSize
        }, i), h.promise;
      },
      pull: (u) => {
        const h = Promise.withResolvers();
        return this.streamControllers[r].pullCall = h, c.postMessage({
          sourceName: a,
          targetName: l,
          stream: Qt.PULL,
          streamId: r,
          desiredSize: u.desiredSize
        }), h.promise;
      },
      cancel: (u) => {
        ce(u instanceof Error, "cancel must have a valid reason");
        const h = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = h, this.streamControllers[r].isClosed = !0, c.postMessage({
          sourceName: a,
          targetName: l,
          stream: Qt.CANCEL,
          streamId: r,
          reason: Xe(u)
        }), h.promise;
      }
    }, n);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
Kd = new WeakSet(), lw = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, r = this.comObj, a = this, l = this.actionHandler[t.action], c = {
    enqueue(u, h = 1, f) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= h, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: n,
        targetName: i,
        stream: Qt.ENQUEUE,
        streamId: e,
        chunk: u
      }, f);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: n,
        targetName: i,
        stream: Qt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(u) {
      ce(u instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: n,
        targetName: i,
        stream: Qt.ERROR,
        streamId: e,
        reason: Xe(u)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[e] = c, new Promise(function(u) {
    u(l(t.data, c));
  }).then(function() {
    r.postMessage({
      sourceName: n,
      targetName: i,
      stream: Qt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(u) {
    r.postMessage({
      sourceName: n,
      targetName: i,
      stream: Qt.START_COMPLETE,
      streamId: e,
      reason: Xe(u)
    });
  });
}, Zd = new WeakSet(), cw = function(t) {
  const e = t.streamId, n = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], l = this.streamSinks[e];
  switch (t.stream) {
    case Qt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Xe(t.reason));
      break;
    case Qt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Xe(t.reason));
      break;
    case Qt.PULL:
      if (!l) {
        r.postMessage({
          sourceName: n,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      l.desiredSize <= 0 && t.desiredSize > 0 && l.sinkCapability.resolve(), l.desiredSize = t.desiredSize, new Promise(function(c) {
        var u;
        c((u = l.onPull) == null ? void 0 : u.call(l));
      }).then(function() {
        r.postMessage({
          sourceName: n,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        r.postMessage({
          sourceName: n,
          targetName: i,
          stream: Qt.PULL_COMPLETE,
          streamId: e,
          reason: Xe(c)
        });
      });
      break;
    case Qt.ENQUEUE:
      if (ce(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Qt.CLOSE:
      if (ce(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), A(this, Ya, Mu).call(this, a, e);
      break;
    case Qt.ERROR:
      ce(a, "error should have stream controller"), a.controller.error(Xe(t.reason)), A(this, Ya, Mu).call(this, a, e);
      break;
    case Qt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Xe(t.reason)), A(this, Ya, Mu).call(this, a, e);
      break;
    case Qt.CANCEL:
      if (!l)
        break;
      new Promise(function(c) {
        var u;
        c((u = l.onCancel) == null ? void 0 : u.call(l, Xe(t.reason)));
      }).then(function() {
        r.postMessage({
          sourceName: n,
          targetName: i,
          stream: Qt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        r.postMessage({
          sourceName: n,
          targetName: i,
          stream: Qt.CANCEL_COMPLETE,
          streamId: e,
          reason: Xe(c)
        });
      }), l.sinkCapability.reject(Xe(t.reason)), l.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Ya = new WeakSet(), Mu = async function(t, e) {
  var n, i, r;
  await Promise.allSettled([(n = t.startCall) == null ? void 0 : n.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var pr, Pc;
class mL {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, pr, void 0);
    m(this, Pc, void 0);
    w(this, pr, t), w(this, Pc, e);
  }
  getRaw() {
    return o(this, Pc);
  }
  get(t) {
    return o(this, pr).get(t) ?? null;
  }
  getAll() {
    return g0(o(this, pr));
  }
  has(t) {
    return o(this, pr).has(t);
  }
}
pr = new WeakMap(), Pc = new WeakMap();
const Qi = Symbol("INTERNAL");
var Rc, Lc, kc, Ka;
class vL {
  constructor(t, {
    name: e,
    intent: n,
    usage: i
  }) {
    m(this, Rc, !1);
    m(this, Lc, !1);
    m(this, kc, !1);
    m(this, Ka, !0);
    w(this, Rc, !!(t & pn.DISPLAY)), w(this, Lc, !!(t & pn.PRINT)), this.name = e, this.intent = n, this.usage = i;
  }
  get visible() {
    if (o(this, kc))
      return o(this, Ka);
    if (!o(this, Ka))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return o(this, Rc) ? (e == null ? void 0 : e.viewState) !== "OFF" : o(this, Lc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, n = !1) {
    t !== Qi && Ft("Internal method `_setVisible` called."), w(this, kc, n), w(this, Ka, e);
  }
}
Rc = new WeakMap(), Lc = new WeakMap(), kc = new WeakMap(), Ka = new WeakMap();
var us, Mt, Za, Ja, Ic, am;
class yL {
  constructor(t, e = pn.DISPLAY) {
    m(this, Ic);
    m(this, us, null);
    m(this, Mt, /* @__PURE__ */ new Map());
    m(this, Za, null);
    m(this, Ja, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, w(this, Ja, t.order);
      for (const n of t.groups)
        o(this, Mt).set(n.id, new vL(e, n));
      if (t.baseState === "OFF")
        for (const n of o(this, Mt).values())
          n._setVisible(Qi, !1);
      for (const n of t.on)
        o(this, Mt).get(n)._setVisible(Qi, !0);
      for (const n of t.off)
        o(this, Mt).get(n)._setVisible(Qi, !1);
      w(this, Za, this.getHash());
    }
  }
  isVisible(t) {
    if (o(this, Mt).size === 0)
      return !0;
    if (!t)
      return vp("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return o(this, Mt).has(t.id) ? o(this, Mt).get(t.id).visible : (vt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return A(this, Ic, am).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!o(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (o(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!o(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (!o(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!o(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (!o(this, Mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!o(this, Mt).has(e))
            return vt(`Optional content group not found: ${e}`), !0;
          if (o(this, Mt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return vt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return vt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0) {
    const n = o(this, Mt).get(t);
    if (!n) {
      vt(`Optional content group not found: ${t}`);
      return;
    }
    n._setVisible(Qi, !!e, !0), w(this, us, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let n;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          n = i;
          continue;
      }
      const r = o(this, Mt).get(i);
      if (r)
        switch (n) {
          case "ON":
            r._setVisible(Qi, !0);
            break;
          case "OFF":
            r._setVisible(Qi, !1);
            break;
          case "Toggle":
            r._setVisible(Qi, !r.visible);
            break;
        }
    }
    w(this, us, null);
  }
  get hasInitialVisibility() {
    return o(this, Za) === null || this.getHash() === o(this, Za);
  }
  getOrder() {
    return o(this, Mt).size ? o(this, Ja) ? o(this, Ja).slice() : [...o(this, Mt).keys()] : null;
  }
  getGroups() {
    return o(this, Mt).size > 0 ? g0(o(this, Mt)) : null;
  }
  getGroup(t) {
    return o(this, Mt).get(t) || null;
  }
  getHash() {
    if (o(this, us) !== null)
      return o(this, us);
    const t = new sw();
    for (const [e, n] of o(this, Mt))
      t.update(`${e}:${n.visible}`);
    return w(this, us, t.hexdigest());
  }
}
us = new WeakMap(), Mt = new WeakMap(), Za = new WeakMap(), Ja = new WeakMap(), Ic = new WeakSet(), am = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const n = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = A(this, Ic, am).call(this, r);
    else if (o(this, Mt).has(r))
      a = o(this, Mt).get(r).visible;
    else
      return vt(`Optional content group not found: ${r}`), !0;
    switch (n) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return n === "And";
};
class bL {
  constructor(t, {
    disableRange: e = !1,
    disableStream: n = !1
  }) {
    ce(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: l
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = l, (r == null ? void 0 : r.length) > 0) {
      const c = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !n, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((c, u) => {
      this._onReceiveData({
        begin: c,
        chunk: u
      });
    }), t.addProgressListener((c, u) => {
      this._onProgress({
        loaded: c,
        total: u
      });
    }), t.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const n = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(n) : this._queuedChunks.push(n);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(n), !0);
      });
      ce(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, n, i, r;
    t.total === void 0 ? (n = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || n.call(e, {
      loaded: t.loaded
    }) : (r = (i = this._fullRequestReader) == null ? void 0 : i.onProgress) == null || r.call(i, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    ce(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new wL(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new AL(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeReaders.slice(0))
      n.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class wL {
  constructor(t, e, n = !1, i = null) {
    this._stream = t, this._done = n || !1, this._filename = w0(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class AL {
  constructor(t, e, n) {
    this._stream = t, this._begin = e, this._end = n, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const n of this._requests)
          n.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function _L(s) {
  let t = !0, e = n("filename\\*", "i").exec(s);
  if (e) {
    e = e[1];
    let h = l(e);
    return h = unescape(h), h = c(h), h = u(h), r(h);
  }
  if (e = a(s), e) {
    const h = u(e);
    return r(h);
  }
  if (e = n("filename", "i").exec(s), e) {
    e = e[1];
    let h = l(e);
    return h = u(h), r(h);
  }
  function n(h, f) {
    return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
  }
  function i(h, f) {
    if (h) {
      if (!/^[\x00-\xFF]+$/.test(f))
        return f;
      try {
        const g = new TextDecoder(h, {
          fatal: !0
        }), v = bp(f);
        f = g.decode(v), t = !1;
      } catch {
      }
    }
    return f;
  }
  function r(h) {
    return t && /[\x80-\xff]/.test(h) && (h = i("utf-8", h), t && (h = i("iso-8859-1", h))), h;
  }
  function a(h) {
    const f = [];
    let g;
    const v = n("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = v.exec(h)) !== null; ) {
      let [, _, C, E] = g;
      if (_ = parseInt(_, 10), _ in f) {
        if (_ === 0)
          break;
        continue;
      }
      f[_] = [C, E];
    }
    const y = [];
    for (let _ = 0; _ < f.length && _ in f; ++_) {
      let [C, E] = f[_];
      E = l(E), C && (E = unescape(E), _ === 0 && (E = c(E))), y.push(E);
    }
    return y.join("");
  }
  function l(h) {
    if (h.startsWith('"')) {
      const f = h.slice(1).split('\\"');
      for (let g = 0; g < f.length; ++g) {
        const v = f[g].indexOf('"');
        v !== -1 && (f[g] = f[g].slice(0, v), f.length = g + 1), f[g] = f[g].replaceAll(/\\(.)/g, "$1");
      }
      h = f.join('"');
    }
    return h;
  }
  function c(h) {
    const f = h.indexOf("'");
    if (f === -1)
      return h;
    const g = h.slice(0, f), y = h.slice(f + 1).replace(/^[^']*'/, "");
    return i(g, y);
  }
  function u(h) {
    return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, g, v, y) {
      if (v === "q" || v === "Q")
        return y = y.replaceAll("_", " "), y = y.replaceAll(/=([0-9a-fA-F]{2})/g, function(_, C) {
          return String.fromCharCode(parseInt(C, 16));
        }), i(g, y);
      try {
        y = atob(y);
      } catch {
      }
      return i(g, y);
    });
  }
  return "";
}
function E0({
  getResponseHeader: s,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: n
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(s("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || n || !t || s("Accept-Ranges") !== "bytes" || (s("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
function S0(s) {
  const t = s("Content-Disposition");
  if (t) {
    let e = _L(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (w0(e))
      return e;
  }
  return null;
}
function Sp(s, t) {
  return s === 404 || s === 0 && t.startsWith("file:") ? new da('Missing PDF "' + t + '".') : new yp(`Unexpected server response (${s}) while retrieving PDF "${t}".`, s);
}
function hw(s) {
  return s === 200 || s === 206;
}
function uw(s, t, e) {
  return {
    method: "GET",
    headers: s,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function dw(s) {
  const t = new Headers();
  for (const e in s) {
    const n = s[e];
    n !== void 0 && t.append(e, n);
  }
  return t;
}
function fw(s) {
  return s instanceof Uint8Array ? s.buffer : s instanceof ArrayBuffer ? s : (vt(`getArrayBuffer - unexpected data format: ${s}`), new Uint8Array(s).buffer);
}
class Bv {
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ce(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new EL(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = new SL(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class EL {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = dw(this._stream.httpHeaders);
    const n = e.url;
    fetch(n, uw(this._headers, this._withCredentials, this._abortController)).then((i) => {
      if (!hw(i.status))
        throw Sp(i.status, n);
      this._reader = i.body.getReader(), this._headersCapability.resolve();
      const r = (c) => i.headers.get(c), {
        allowRangeRequests: a,
        suggestedLength: l
      } = E0({
        getResponseHeader: r,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = a, this._contentLength = l || this._contentLength, this._filename = S0(r), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new fa("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: fw(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class SL {
  constructor(t, e, n) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController(), this._headers = dw(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${n - 1}`);
    const r = i.url;
    fetch(r, uw(this._headers, this._withCredentials, this._abortController)).then((a) => {
      if (!hw(a.status))
        throw Sp(a.status, r);
      this._readCapability.resolve(), this._reader = a.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: fw(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const rg = 200, ag = 206;
function xL(s) {
  const t = s.response;
  return typeof t != "string" ? t : bp(t).buffer;
}
class CL {
  constructor(t, e = {}) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.httpHeaders = this.isHttp && e.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(t, e, n) {
    const i = {
      begin: t,
      end: e
    };
    for (const r in n)
      i[r] = n[r];
    return this.request(i);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(), n = this.currXhrId++, i = this.pendingRequests[n] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const r in this.httpHeaders) {
      const a = this.httpHeaders[r];
      a !== void 0 && e.setRequestHeader(r, a);
    }
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = ag) : i.expectedStatus = rg, e.responseType = "arraybuffer", t.onError && (e.onerror = function(r) {
      t.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, n), e.onprogress = this.onProgress.bind(this, n), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), n;
  }
  onProgress(t, e) {
    var i;
    const n = this.pendingRequests[t];
    n && ((i = n.onProgress) == null || i.call(n, e));
  }
  onStateChange(t, e) {
    var c, u, h;
    const n = this.pendingRequests[t];
    if (!n)
      return;
    const i = n.xhr;
    if (i.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      (c = n.onError) == null || c.call(n, i.status);
      return;
    }
    const r = i.status || rg;
    if (!(r === rg && n.expectedStatus === ag) && r !== n.expectedStatus) {
      (u = n.onError) == null || u.call(n, i.status);
      return;
    }
    const l = xL(i);
    if (r === ag) {
      const f = i.getResponseHeader("Content-Range"), g = /bytes (\d+)-(\d+)\/(\d+)/.exec(f);
      n.onDone({
        begin: parseInt(g[1], 10),
        chunk: l
      });
    } else
      l ? n.onDone({
        begin: 0,
        chunk: l
      }) : (h = n.onError) == null || h.call(n, i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class TL {
  constructor(t) {
    this._source = t, this._manager = new CL(t.url, {
      httpHeaders: t.httpHeaders,
      withCredentials: t.withCredentials
    }), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return ce(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new PL(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const n = new RL(this._manager, t, e);
    return n.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class PL {
  constructor(t, e) {
    this._manager = t;
    const n = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = t.requestFull(n), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t), n = (a) => e.getResponseHeader(a), {
      allowRangeRequests: i,
      suggestedLength: r
    } = E0({
      getResponseHeader: n,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    i && (this._isRangeSupported = !0), this._contentLength = r || this._contentLength, this._filename = S0(n), this._isRangeSupported && this._manager.abortRequest(t), this._headersReceivedCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Sp(t, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersReceivedCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class RL {
  constructor(t, e, n) {
    this._manager = t;
    const i = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = t.url, this._requestId = t.requestRange(e, n, i), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const n of this._requests)
      n.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError = Sp(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const pw = /^file:\/\/\/[a-zA-Z]:\//;
function LL(s) {
  const t = ri.get("url"), e = t.parse(s);
  return e.protocol === "file:" || e.host ? e : /^[a-z]:[/\\]/i.test(s) ? t.parse(`file:///${s}`) : (e.host || (e.protocol = "file:"), e);
}
class kL {
  constructor(t) {
    this.source = t, this.url = LL(t.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && t.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return ce(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new FL(this) : new IL(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const n = this.isFsUrl ? new DL(this, t, e) : new ML(this, t, e);
    return this._rangeRequestReaders.push(n), n;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const n of this._rangeRequestReaders.slice(0))
      n.cancel(t);
  }
}
class gw {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new fa("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class mw {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var n;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (n = this.onProgress) == null || n.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function hd(s, t) {
  return {
    protocol: s.protocol,
    auth: s.auth,
    host: s.hostname,
    port: s.port,
    path: s.path,
    method: "GET",
    headers: t
  };
}
class IL extends gw {
  constructor(t) {
    super(t);
    const e = (n) => {
      if (n.statusCode === 404) {
        const l = new da(`Missing PDF "${this._url}".`);
        this._storedError = l, this._headersCapability.reject(l);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(n);
      const i = (l) => this._readableStream.headers[l.toLowerCase()], {
        allowRangeRequests: r,
        suggestedLength: a
      } = E0({
        getResponseHeader: i,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = r, this._contentLength = a || this._contentLength, this._filename = S0(i);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const n = ri.get("http");
      this._request = n.request(hd(this._url, t.httpHeaders), e);
    } else {
      const n = ri.get("https");
      this._request = n.request(hd(this._url, t.httpHeaders), e);
    }
    this._request.on("error", (n) => {
      this._storedError = n, this._headersCapability.reject(n);
    }), this._request.end();
  }
}
class ML extends mw {
  constructor(t, e, n) {
    super(t), this._httpHeaders = {};
    for (const r in t.httpHeaders) {
      const a = t.httpHeaders[r];
      a !== void 0 && (this._httpHeaders[r] = a);
    }
    this._httpHeaders.Range = `bytes=${e}-${n - 1}`;
    const i = (r) => {
      if (r.statusCode === 404) {
        const a = new da(`Missing PDF "${this._url}".`);
        this._storedError = a;
        return;
      }
      this._setReadableStream(r);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const r = ri.get("http");
      this._request = r.request(hd(this._url, this._httpHeaders), i);
    } else {
      const r = ri.get("https");
      this._request = r.request(hd(this._url, this._httpHeaders), i);
    }
    this._request.on("error", (r) => {
      this._storedError = r;
    }), this._request.end();
  }
}
class FL extends gw {
  constructor(t) {
    super(t);
    let e = decodeURIComponent(this._url.path);
    pw.test(this._url.href) && (e = e.replace(/^\//, ""));
    const n = ri.get("fs");
    n.promises.lstat(e).then((i) => {
      this._contentLength = i.size, this._setReadableStream(n.createReadStream(e)), this._headersCapability.resolve();
    }, (i) => {
      i.code === "ENOENT" && (i = new da(`Missing PDF "${e}".`)), this._storedError = i, this._headersCapability.reject(i);
    });
  }
}
class DL extends mw {
  constructor(t, e, n) {
    super(t);
    let i = decodeURIComponent(this._url.path);
    pw.test(this._url.href) && (i = i.replace(/^\//, ""));
    const r = ri.get("fs");
    this._setReadableStream(r.createReadStream(i, {
      start: e,
      end: n - 1
    }));
  }
}
const OL = 1e5, He = 30, NL = 0.8;
var ty, ds, je, Mc, Fc, gr, Si, Dc, Oc, mr, Qa, to, fs, eo, Nc, no, vr, Bc, $c, te, yr, br, ps, io, Jd, vw, Qd, yw, Hc, om, so, Fu, tf, bw, ef, ww;
let ud = (te = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: n
  }) {
    m(this, Jd);
    m(this, Qd);
    m(this, Hc);
    m(this, ds, Promise.withResolvers());
    m(this, je, null);
    m(this, Mc, !1);
    m(this, Fc, !!((ty = globalThis.FontInspector) != null && ty.enabled));
    m(this, gr, null);
    m(this, Si, null);
    m(this, Dc, 0);
    m(this, Oc, 0);
    m(this, mr, null);
    m(this, Qa, null);
    m(this, to, 0);
    m(this, fs, 0);
    m(this, eo, /* @__PURE__ */ Object.create(null));
    m(this, Nc, []);
    m(this, no, null);
    m(this, vr, []);
    m(this, Bc, /* @__PURE__ */ new WeakMap());
    m(this, $c, null);
    var c;
    if (t instanceof ReadableStream)
      w(this, no, t);
    else if (typeof t == "object")
      w(this, no, new ReadableStream({
        start(u) {
          u.enqueue(t), u.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    w(this, je, w(this, Qa, e)), w(this, fs, n.scale * (globalThis.devicePixelRatio || 1)), w(this, to, n.rotation), w(this, Si, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: r,
      pageX: a,
      pageY: l
    } = n.rawDims;
    w(this, $c, [1, 0, 0, -1, -a, l + r]), w(this, Oc, i), w(this, Dc, r), A(c = te, tf, bw).call(c), ra(e, n), o(this, ds).promise.catch(() => {
    }).then(() => {
      o(te, io).delete(this), w(this, Si, null), w(this, eo, null);
    });
  }
  render() {
    const t = () => {
      o(this, mr).read().then(({
        value: e,
        done: n
      }) => {
        if (n) {
          o(this, ds).resolve();
          return;
        }
        o(this, gr) ?? w(this, gr, e.lang), Object.assign(o(this, eo), e.styles), A(this, Jd, vw).call(this, e.items), t();
      }, o(this, ds).reject);
    };
    return w(this, mr, o(this, no).getReader()), o(te, io).add(this), t(), o(this, ds).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const n = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== o(this, to) && (e == null || e(), w(this, to, i), ra(o(this, Qa), {
      rotation: i
    })), n !== o(this, fs)) {
      e == null || e(), w(this, fs, n);
      const a = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: A(r = te, so, Fu).call(r, o(this, gr))
      };
      for (const l of o(this, vr))
        a.properties = o(this, Bc).get(l), a.div = l, A(this, Hc, om).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new fa("TextLayer task cancelled.");
    (e = o(this, mr)) == null || e.cancel(t).catch(() => {
    }), w(this, mr, null), o(this, ds).reject(t);
  }
  get textDivs() {
    return o(this, vr);
  }
  get textContentItemsStr() {
    return o(this, Nc);
  }
  static cleanup() {
    if (!(o(this, io).size > 0)) {
      o(this, yr).clear();
      for (const {
        canvas: t
      } of o(this, br).values())
        t.remove();
      o(this, br).clear();
    }
  }
}, ds = new WeakMap(), je = new WeakMap(), Mc = new WeakMap(), Fc = new WeakMap(), gr = new WeakMap(), Si = new WeakMap(), Dc = new WeakMap(), Oc = new WeakMap(), mr = new WeakMap(), Qa = new WeakMap(), to = new WeakMap(), fs = new WeakMap(), eo = new WeakMap(), Nc = new WeakMap(), no = new WeakMap(), vr = new WeakMap(), Bc = new WeakMap(), $c = new WeakMap(), yr = new WeakMap(), br = new WeakMap(), ps = new WeakMap(), io = new WeakMap(), Jd = new WeakSet(), vw = function(t) {
  var i, r;
  if (o(this, Mc))
    return;
  (r = o(this, Si)).ctx ?? (r.ctx = A(i = te, so, Fu).call(i, o(this, gr)));
  const e = o(this, vr), n = o(this, Nc);
  for (const a of t) {
    if (e.length > OL) {
      vt("Ignoring additional textDivs for performance reasons."), w(this, Mc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const l = o(this, je);
        w(this, je, document.createElement("span")), o(this, je).classList.add("markedContent"), a.id !== null && o(this, je).setAttribute("id", `${a.id}`), l.append(o(this, je));
      } else
        a.type === "endMarkedContent" && w(this, je, o(this, je).parentNode);
      continue;
    }
    n.push(a.str), A(this, Qd, yw).call(this, a);
  }
}, Qd = new WeakSet(), yw = function(t) {
  var _;
  const e = document.createElement("span"), n = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  o(this, vr).push(e);
  const i = Z.transform(o(this, $c), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = o(this, eo)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  const l = o(this, Fc) && a.fontSubstitution || a.fontFamily, c = Math.hypot(i[2], i[3]), u = c * A(_ = te, ef, ww).call(_, l, o(this, gr));
  let h, f;
  r === 0 ? (h = i[4], f = i[5] - u) : (h = i[4] + u * Math.sin(r), f = i[5] - u * Math.cos(r));
  const g = "calc(var(--scale-factor)*", v = e.style;
  o(this, je) === o(this, Qa) ? (v.left = `${(100 * h / o(this, Oc)).toFixed(2)}%`, v.top = `${(100 * f / o(this, Dc)).toFixed(2)}%`) : (v.left = `${g}${h.toFixed(2)}px)`, v.top = `${g}${f.toFixed(2)}px)`), v.fontSize = `${g}${(o(te, ps) * c).toFixed(2)}px)`, v.fontFamily = l, n.fontSize = c, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, o(this, Fc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (n.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const C = Math.abs(t.transform[0]), E = Math.abs(t.transform[3]);
    C !== E && Math.max(C, E) / Math.min(C, E) > 1.5 && (y = !0);
  }
  if (y && (n.canvasWidth = a.vertical ? t.height : t.width), o(this, Bc).set(e, n), o(this, Si).div = e, o(this, Si).properties = n, A(this, Hc, om).call(this, o(this, Si)), n.hasText && o(this, je).append(e), n.hasEOL) {
    const C = document.createElement("br");
    C.setAttribute("role", "presentation"), o(this, je).append(C);
  }
}, Hc = new WeakSet(), om = function(t) {
  const {
    div: e,
    properties: n,
    ctx: i,
    prevFontSize: r,
    prevFontFamily: a
  } = t, {
    style: l
  } = e;
  let c = "";
  if (o(te, ps) > 1 && (c = `scale(${1 / o(te, ps)})`), n.canvasWidth !== 0 && n.hasText) {
    const {
      fontFamily: u
    } = l, {
      canvasWidth: h,
      fontSize: f
    } = n;
    (r !== f || a !== u) && (i.font = `${f * o(this, fs)}px ${u}`, t.prevFontSize = f, t.prevFontFamily = u);
    const {
      width: g
    } = i.measureText(e.textContent);
    g > 0 && (c = `scaleX(${h * o(this, fs) / g}) ${c}`);
  }
  n.angle !== 0 && (c = `rotate(${n.angle}deg) ${c}`), c.length > 0 && (l.transform = c);
}, so = new WeakSet(), Fu = function(t = null) {
  let e = o(this, br).get(t || (t = ""));
  if (!e) {
    const n = document.createElement("canvas");
    n.className = "hiddenCanvasElement", n.lang = t, document.body.append(n), e = n.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), o(this, br).set(t, e);
  }
  return e;
}, tf = new WeakSet(), bw = function() {
  if (o(this, ps) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.textContent = "X", document.body.append(t), w(this, ps, t.getBoundingClientRect().height), t.remove();
}, ef = new WeakSet(), ww = function(t, e) {
  const n = o(this, yr).get(t);
  if (n)
    return n;
  const i = A(this, so, Fu).call(this, e), r = i.font;
  i.canvas.width = i.canvas.height = He, i.font = `${He}px ${t}`;
  const a = i.measureText("");
  let l = a.fontBoundingBoxAscent, c = Math.abs(a.fontBoundingBoxDescent);
  if (l) {
    const f = l / (l + c);
    return o(this, yr).set(t, f), i.canvas.width = i.canvas.height = 0, i.font = r, f;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, He, He), i.strokeText("g", 0, 0);
  let u = i.getImageData(0, 0, He, He).data;
  c = 0;
  for (let f = u.length - 1 - 3; f >= 0; f -= 4)
    if (u[f] > 0) {
      c = Math.ceil(f / 4 / He);
      break;
    }
  i.clearRect(0, 0, He, He), i.strokeText("A", 0, He), u = i.getImageData(0, 0, He, He).data, l = 0;
  for (let f = 0, g = u.length; f < g; f += 4)
    if (u[f] > 0) {
      l = He - Math.floor(f / 4 / He);
      break;
    }
  i.canvas.width = i.canvas.height = 0, i.font = r;
  const h = l ? l / (l + c) : NL;
  return o(this, yr).set(t, h), h;
}, m(te, so), m(te, tf), m(te, ef), m(te, yr, /* @__PURE__ */ new Map()), m(te, br, /* @__PURE__ */ new Map()), m(te, ps, null), m(te, io, /* @__PURE__ */ new Set()), te);
function BL() {
  Ib("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: s,
    container: t,
    viewport: e,
    ...n
  } = arguments[0], i = Object.keys(n);
  i.length > 0 && vt("Ignoring `renderTextLayer` parameters: " + i.join(", "));
  const r = new ud({
    textContentSource: s,
    container: t,
    viewport: e
  }), {
    textDivs: a,
    textContentItemsStr: l
  } = r;
  return {
    promise: r.render(),
    textDivs: a,
    textContentItemsStr: l
  };
}
function $L() {
  Ib("`updateTextLayer`, please use `TextLayer` instead.");
}
class Ml {
  static textContent(t) {
    const e = [], n = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      var c;
      if (!r)
        return;
      let a = null;
      const l = r.name;
      if (l === "#text")
        a = r.value;
      else if (Ml.shouldBuildText(l))
        (c = r == null ? void 0 : r.attributes) != null && c.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else
        return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const u of r.children)
          i(u);
    }
    return i(t), n;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const HL = 65536, UL = 100, jL = 5e3, zL = ke ? tL : UR, VL = ke ? eL : Lb, GL = ke ? QR : HR, WL = ke ? nL : kb;
function qL(s = {}) {
  typeof s == "string" || s instanceof URL ? s = {
    url: s
  } : (s instanceof ArrayBuffer || ArrayBuffer.isView(s)) && (s = {
    data: s
  });
  const t = new lm(), {
    docId: e
  } = t, n = s.url ? XL(s.url) : null, i = s.data ? YL(s.data) : null, r = s.httpHeaders || null, a = s.withCredentials === !0, l = s.password ?? null, c = s.range instanceof Aw ? s.range : null, u = Number.isInteger(s.rangeChunkSize) && s.rangeChunkSize > 0 ? s.rangeChunkSize : HL;
  let h = s.worker instanceof Pa ? s.worker : null;
  const f = s.verbosity, g = typeof s.docBaseUrl == "string" && !b0(s.docBaseUrl) ? s.docBaseUrl : null, v = typeof s.cMapUrl == "string" ? s.cMapUrl : null, y = s.cMapPacked !== !1, _ = s.CMapReaderFactory || VL, C = typeof s.standardFontDataUrl == "string" ? s.standardFontDataUrl : null, E = s.StandardFontDataFactory || WL, P = s.stopAtErrors !== !0, L = Number.isInteger(s.maxImageSize) && s.maxImageSize > -1 ? s.maxImageSize : -1, k = s.isEvalSupported !== !1, F = typeof s.isOffscreenCanvasSupported == "boolean" ? s.isOffscreenCanvasSupported : !ke, I = Number.isInteger(s.canvasMaxAreaInBytes) ? s.canvasMaxAreaInBytes : -1, M = typeof s.disableFontFace == "boolean" ? s.disableFontFace : ke, x = s.fontExtraProperties === !0, T = s.enableXfa === !0, D = s.ownerDocument || globalThis.document, N = s.disableRange === !0, U = s.disableStream === !0, z = s.disableAutoFetch === !0, V = s.pdfBug === !0, K = s.enableHWA === !0, X = c ? c.length : s.length ?? NaN, B = typeof s.useSystemFonts == "boolean" ? s.useSystemFonts : !ke && !M, G = typeof s.useWorkerFetch == "boolean" ? s.useWorkerFetch : _ === Lb && E === kb && v && C && gl(v, document.baseURI) && gl(C, document.baseURI), W = s.canvasFactory || new zL({
    ownerDocument: D,
    enableHWA: K
  }), bt = s.filterFactory || new GL({
    docId: e,
    ownerDocument: D
  }), At = null;
  RR(f);
  const j = {
    canvasFactory: W,
    filterFactory: bt
  };
  if (G || (j.cMapReaderFactory = new _({
    baseUrl: v,
    isCompressed: y
  }), j.standardFontDataFactory = new E({
    baseUrl: C
  })), !h) {
    const J = {
      verbosity: f,
      port: Wi.workerPort
    };
    h = J.port ? Pa.fromPort(J) : new Pa(J), t._worker = h;
  }
  const nt = {
    docId: e,
    apiVersion: "4.4.168",
    data: i,
    password: l,
    disableAutoFetch: z,
    rangeChunkSize: u,
    length: X,
    docBaseUrl: g,
    enableXfa: T,
    evaluatorOptions: {
      maxImageSize: L,
      disableFontFace: M,
      ignoreErrors: P,
      isEvalSupported: k,
      isOffscreenCanvasSupported: F,
      canvasMaxAreaInBytes: I,
      fontExtraProperties: x,
      useSystemFonts: B,
      cMapUrl: G ? v : null,
      standardFontDataUrl: G ? C : null
    }
  }, it = {
    disableFontFace: M,
    fontExtraProperties: x,
    ownerDocument: D,
    pdfBug: V,
    styleElement: At,
    loadingParams: {
      disableAutoFetch: z,
      enableXfa: T
    }
  };
  return h.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (h.destroyed)
      throw new Error("Worker was destroyed");
    const J = h.messageHandler.sendWithPromise("GetDocRequest", nt, i ? [i.buffer] : null);
    let lt;
    if (c)
      lt = new bL(c, {
        disableRange: N,
        disableStream: U
      });
    else if (!i) {
      if (!n)
        throw new Error("getDocument - no `url` parameter provided.");
      lt = ((rt) => ke ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && gl(rt.url) ? new Bv(rt) : new kL(rt) : gl(rt.url) ? new Bv(rt) : new TL(rt))({
        url: n,
        length: X,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: u,
        disableRange: N,
        disableStream: U
      });
    }
    return J.then((et) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (h.destroyed)
        throw new Error("Worker was destroyed");
      const rt = new yl(e, et, h.port), q = new QL(rt, t, lt, it, j);
      t._transport = q, rt.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
function XL(s) {
  if (s instanceof URL)
    return s.href;
  try {
    return new URL(s, window.location).href;
  } catch {
    if (ke && typeof s == "string")
      return s;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function YL(s) {
  if (ke && typeof Pg < "u" && s instanceof Pg)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (s instanceof Uint8Array && s.byteLength === s.buffer.byteLength)
    return s;
  if (typeof s == "string")
    return bp(s);
  if (s instanceof ArrayBuffer || ArrayBuffer.isView(s) || typeof s == "object" && !isNaN(s == null ? void 0 : s.length))
    return new Uint8Array(s);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function $v(s) {
  return typeof s == "object" && Number.isInteger(s == null ? void 0 : s.num) && s.num >= 0 && Number.isInteger(s == null ? void 0 : s.gen) && s.gen >= 0;
}
var nf;
const sf = class sf {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${qe(sf, nf)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, n;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (i) {
      throw (n = this._worker) != null && n.port && delete this._worker._pendingDestroy, i;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
nf = new WeakMap(), m(sf, nf, 0);
let lm = sf, Aw = class {
  constructor(t, e, n = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = n, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const n of this._rangeListeners)
      n(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const n of this._progressListeners)
        n(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    Ft("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
class KL {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Ct(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var gs, xi, ms, Aa, ro, Du;
class ZL {
  constructor(t, e, n, i = !1) {
    m(this, ms);
    m(this, ro);
    m(this, gs, null);
    m(this, xi, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = n, this._stats = i ? new xv() : null, this._pdfBug = i, this.commonObjs = n.commonObjs, this.objs = new _w(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: n = 0,
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new eu({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: n,
      offsetY: i,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Ct(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: n = "display",
    annotationMode: i = es.ENABLE,
    transform: r = null,
    background: a = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: u = null,
    printAnnotationStorage: h = null
  }) {
    var L, k;
    (L = this._stats) == null || L.time("Overall");
    const f = this._transport.getRenderingIntent(n, i, h), {
      renderingIntent: g,
      cacheKey: v
    } = f;
    w(this, xi, !1), A(this, ro, Du).call(this), l || (l = this._transport.getOptionalContentConfig(g));
    let y = this._intentStates.get(v);
    y || (y = /* @__PURE__ */ Object.create(null), this._intentStates.set(v, y)), y.streamReaderCancelTimeout && (clearTimeout(y.streamReaderCancelTimeout), y.streamReaderCancelTimeout = null);
    const _ = !!(g & pn.PRINT);
    y.displayReadyCapability || (y.displayReadyCapability = Promise.withResolvers(), y.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (k = this._stats) == null || k.time("Page Request"), this._pumpOperatorList(f));
    const C = (F) => {
      var I;
      y.renderTasks.delete(E), (this._maybeCleanupAfterRender || _) && w(this, xi, !0), A(this, ms, Aa).call(this, !_), F ? (E.capability.reject(F), this._abortOperatorList({
        intentState: y,
        reason: F instanceof Error ? F : new Error(F)
      })) : E.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (I = globalThis.Stats) != null && I.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, E = new hm({
      callback: C,
      params: {
        canvasContext: t,
        viewport: e,
        transform: r,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: u
    });
    (y.renderTasks || (y.renderTasks = /* @__PURE__ */ new Set())).add(E);
    const P = E.task;
    return Promise.all([y.displayReadyCapability.promise, l]).then(([F, I]) => {
      var M;
      if (this.destroyed) {
        C();
        return;
      }
      if ((M = this._stats) == null || M.time("Rendering"), !(I.renderingIntent & g))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      E.initializeGraphics({
        transparency: F,
        optionalContentConfig: I
      }), E.operatorListChanged();
    }).catch(C), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = es.ENABLE,
    printAnnotationStorage: n = null
  } = {}) {
    var c;
    function i() {
      a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(l));
    }
    const r = this._transport.getRenderingIntent(t, e, n, !0);
    let a = this._intentStates.get(r.cacheKey);
    a || (a = /* @__PURE__ */ Object.create(null), this._intentStates.set(r.cacheKey, a));
    let l;
    return a.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = i, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(l), a.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(r)), a.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((n) => Ml.textContent(n));
    const e = this.streamTextContent(t);
    return new Promise(function(n, i) {
      function r() {
        a.read().then(function({
          value: c,
          done: u
        }) {
          if (u) {
            n(l);
            return;
          }
          l.lang ?? (l.lang = c.lang), Object.assign(l.styles, c.styles), l.items.push(...c.items), r();
        }, i);
      }
      const a = e.getReader(), l = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const n of e.renderTasks)
          t.push(n.completed), n.cancel();
    return this.objs.clear(), w(this, xi, !1), A(this, ro, Du).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    w(this, xi, !0);
    const e = A(this, ms, Aa).call(this, !1);
    return t && e && this._stats && (this._stats = new xv()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const n = this._intentStates.get(e);
    n && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = n.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let n = 0, i = t.length; n < i; n++)
      e.operatorList.fnArray.push(t.fnArray[n]), e.operatorList.argsArray.push(t.argsArray[n]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const n of e.renderTasks)
      n.operatorListChanged();
    t.lastChunk && A(this, ms, Aa).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: n
  }) {
    const {
      map: i,
      transfer: r
    } = n, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: i
    }, r).getReader(), c = this._intentStates.get(e);
    c.streamReader = l;
    const u = () => {
      l.read().then(({
        value: h,
        done: f
      }) => {
        if (f) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(h, c), u());
      }, (h) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const f of c.renderTasks)
              f.operatorListChanged();
            A(this, ms, Aa).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(h);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(h);
          else
            throw h;
        }
      });
    };
    u();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: n = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !n) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof y0) {
          let i = UL;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new fa(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
gs = new WeakMap(), xi = new WeakMap(), ms = new WeakSet(), Aa = function(t = !1) {
  if (A(this, ro, Du).call(this), !o(this, xi) || this.destroyed)
    return !1;
  if (t)
    return w(this, gs, setTimeout(() => {
      w(this, gs, null), A(this, ms, Aa).call(this, !1);
    }, jL)), !1;
  for (const {
    renderTasks: e,
    operatorList: n
  } of this._intentStates.values())
    if (e.size > 0 || !n.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), w(this, xi, !1), !0;
}, ro = new WeakSet(), Du = function() {
  o(this, gs) && (clearTimeout(o(this, gs)), w(this, gs, null));
};
var wr, rf;
class JL {
  constructor() {
    m(this, wr, /* @__PURE__ */ new Set());
    m(this, rf, Promise.resolve());
  }
  postMessage(t, e) {
    const n = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    o(this, rf).then(() => {
      for (const i of o(this, wr))
        i.call(this, n);
    });
  }
  addEventListener(t, e) {
    o(this, wr).add(e);
  }
  removeEventListener(t, e) {
    o(this, wr).delete(e);
  }
  terminate() {
    o(this, wr).clear();
  }
}
wr = new WeakMap(), rf = new WeakMap();
const gi = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
ke && (gi.isWorkerDisabled = !0, Wi.workerSrc || (Wi.workerSrc = "./pdf.worker.mjs")), gi.isSameOrigin = function(s, t) {
  let e;
  try {
    if (e = new URL(s), !e.origin || e.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const n = new URL(t, e);
  return e.origin === n.origin;
}, gi.createCDNWrapper = function(s) {
  const t = `await import("${s}");`;
  return URL.createObjectURL(new Blob([t], {
    type: "text/javascript"
  }));
};
var Ar, ao, Ou, oo, Nu;
const Ye = class Ye {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: n = LR()
  } = {}) {
    m(this, ao);
    var i;
    if (this.name = t, this.destroyed = !1, this.verbosity = n, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((i = o(Ye, Ar)) != null && i.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (o(Ye, Ar) || w(Ye, Ar, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return ke ? Promise.all([ri.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new yl("main", "worker", t), this._messageHandler.on("ready", function() {
    }), A(this, ao, Ou).call(this);
  }
  _initialize() {
    if (gi.isWorkerDisabled || o(Ye, oo, Nu)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = Ye;
    try {
      gi.isSameOrigin(window.location.href, t) || (t = gi.createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), n = new yl("main", "worker", e), i = () => {
        r.abort(), n.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, r = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: r.signal
      }), n.on("test", (l) => {
        if (r.abort(), this.destroyed || !l) {
          i();
          return;
        }
        this._messageHandler = n, this._port = e, this._webWorker = e, A(this, ao, Ou).call(this);
      }), n.on("ready", (l) => {
        if (r.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = () => {
        const l = new Uint8Array();
        n.send("test", l, [l.buffer]);
      };
      a();
      return;
    } catch {
      vp("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    gi.isWorkerDisabled || (vt("Setting up fake worker."), gi.isWorkerDisabled = !0), Ye._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new JL();
      this._port = e;
      const n = `fake${gi.fakeWorkerId++}`, i = new yl(n + "_worker", n, e);
      t.setup(i, e), this._messageHandler = new yl(n, n + "_worker", e), A(this, ao, Ou).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    var t;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (t = o(Ye, Ar)) == null || t.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(t) {
    var n;
    if (!(t != null && t.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (n = o(this, Ar)) == null ? void 0 : n.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ye(t);
  }
  static get workerSrc() {
    if (Wi.workerSrc)
      return Wi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Ct(this, "_setupFakeWorkerGlobal", (async () => o(this, oo, Nu) ? o(this, oo, Nu) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
Ar = new WeakMap(), ao = new WeakSet(), Ou = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, oo = new WeakSet(), Nu = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(Ye, oo), m(Ye, Ar, void 0);
let Pa = Ye;
var Ci, Wn, lo, co, qn, _r, bl;
class QL {
  constructor(t, e, n, i, r) {
    m(this, _r);
    m(this, Ci, /* @__PURE__ */ new Map());
    m(this, Wn, /* @__PURE__ */ new Map());
    m(this, lo, /* @__PURE__ */ new Map());
    m(this, co, /* @__PURE__ */ new Map());
    m(this, qn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new _w(), this.fontLoader = new ZR({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = n, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return Ct(this, "annotationStorage", new _0());
  }
  getRenderingIntent(t, e = es.ENABLE, n = null, i = !1) {
    let r = pn.DISPLAY, a = tm;
    switch (t) {
      case "any":
        r = pn.ANY;
        break;
      case "display":
        break;
      case "print":
        r = pn.PRINT;
        break;
      default:
        vt(`getRenderingIntent - invalid intent: ${t}`);
    }
    switch (e) {
      case es.DISABLE:
        r += pn.ANNOTATIONS_DISABLE;
        break;
      case es.ENABLE:
        break;
      case es.ENABLE_FORMS:
        r += pn.ANNOTATIONS_FORMS;
        break;
      case es.ENABLE_STORAGE:
        r += pn.ANNOTATIONS_STORAGE, a = (r & pn.PRINT && n instanceof aw ? n : this.annotationStorage).serializable;
        break;
      default:
        vt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    return i && (r += pn.OPLIST), {
      renderingIntent: r,
      cacheKey: `${r}_${a.hash}`,
      annotationStorageSerializable: a
    };
  }
  destroy() {
    var n;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (n = o(this, qn)) == null || n.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of o(this, Wn).values())
      t.push(i._destroy());
    o(this, Wn).clear(), o(this, lo).clear(), o(this, co).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i;
      this.commonObjs.clear(), this.fontLoader.clear(), o(this, Ci).clear(), this.filterFactory.destroy(), ud.cleanup(), (i = this._networkStream) == null || i.cancelAllRequests(new fa("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (n, i) => {
      ce(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          ce(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", (n) => {
      const i = Promise.withResolvers(), r = this._fullReader;
      return r.headersReady.then(() => {
        var a;
        (!r.isStreamingSupported || !r.isRangeSupported) && (this._lastProgress && ((a = e.onProgress) == null || a.call(e, this._lastProgress)), r.onProgress = (l) => {
          var c;
          (c = e.onProgress) == null || c.call(e, {
            loaded: l.loaded,
            total: l.total
          });
        }), i.resolve({
          isStreamingSupported: r.isStreamingSupported,
          isRangeSupported: r.isRangeSupported,
          contentLength: r.contentLength
        });
      }, i.reject), i.promise;
    }), t.on("GetRangeReader", (n, i) => {
      ce(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(n.begin, n.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: l
        }) {
          if (l) {
            i.close();
            return;
          }
          ce(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((l) => {
          if (!this.destroyed)
            throw l;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: n
    }) => {
      this._numPages = n.numPages, this._htmlForXfa = n.htmlForXfa, delete n.htmlForXfa, e._capability.resolve(new KL(n, this));
    }), t.on("DocException", function(n) {
      let i;
      switch (n.name) {
        case "PasswordException":
          i = new kg(n.message, n.code);
          break;
        case "InvalidPDFException":
          i = new Cb(n.message);
          break;
        case "MissingPDFException":
          i = new da(n.message);
          break;
        case "UnexpectedResponseException":
          i = new yp(n.message, n.status);
          break;
        case "UnknownErrorException":
          i = new Ig(n.message, n.details);
          break;
        default:
          Ft("DocException - expected a valid Error.");
      }
      e._capability.reject(i);
    }), t.on("PasswordRequest", (n) => {
      if (w(this, qn, Promise.withResolvers()), e.onPassword) {
        const i = (r) => {
          r instanceof Error ? o(this, qn).reject(r) : o(this, qn).resolve({
            password: r
          });
        };
        try {
          e.onPassword(i, n.code);
        } catch (r) {
          o(this, qn).reject(r);
        }
      } else
        o(this, qn).reject(new kg(n.message, n.code));
      return o(this, qn).promise;
    }), t.on("DataLoaded", (n) => {
      var i;
      (i = e.onProgress) == null || i.call(e, {
        loaded: n.length,
        total: n.length
      }), this.downloadInfoCapability.resolve(n);
    }), t.on("StartRenderPage", (n) => {
      if (this.destroyed)
        return;
      o(this, Wn).get(n.pageIndex)._startRenderPage(n.transparency, n.cacheKey);
    }), t.on("commonobj", ([n, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(n))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: l,
            fontExtraProperties: c,
            pdfBug: u
          } = this._params;
          if ("error" in r) {
            const v = r.error;
            vt(`Error during font loading: ${v}`), this.commonObjs.resolve(n, v);
            break;
          }
          const h = u && ((a = globalThis.FontInspector) != null && a.enabled) ? (v, y) => globalThis.FontInspector.fontAdded(v, y) : null, f = new JR(r, {
            disableFontFace: l,
            inspectFont: h
          });
          this.fontLoader.bind(f).catch(() => t.sendWithPromise("FontFallback", {
            id: n
          })).finally(() => {
            !c && f.data && (f.data = null), this.commonObjs.resolve(n, f);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: g
          } = r;
          ce(g, "The imageRef must be defined.");
          for (const v of o(this, Wn).values())
            for (const [, y] of v.objs)
              if ((y == null ? void 0 : y.ref) === g)
                return y.dataLen ? (this.commonObjs.resolve(n, structuredClone(y)), y.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(n, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([n, i, r, a]) => {
      var c;
      if (this.destroyed)
        return;
      const l = o(this, Wn).get(i);
      if (!l.objs.has(n)) {
        if (l._intentStates.size === 0) {
          (c = a == null ? void 0 : a.bitmap) == null || c.close();
          return;
        }
        switch (r) {
          case "Image":
            l.objs.resolve(n, a), (a == null ? void 0 : a.dataLen) > xR && (l._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            l.objs.resolve(n, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (n) => {
      var i;
      this.destroyed || (i = e.onProgress) == null || i.call(e, {
        loaded: n.loaded,
        total: n.total
      });
    }), t.on("FetchBuiltInCMap", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(n) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), t.on("FetchStandardFontData", (n) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(n) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var n;
    this.annotationStorage.size <= 0 && vt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((n = this._fullReader) == null ? void 0 : n.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, n = o(this, lo).get(e);
    if (n)
      return n;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && o(this, co).set(r.refStr, t);
      const a = new ZL(e, r, this, this._params.pdfBug);
      return o(this, Wn).set(e, a), a;
    });
    return o(this, lo).set(e, i), i;
  }
  getPageIndex(t) {
    return $v(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return A(this, _r, bl).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return A(this, _r, bl).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return A(this, _r, bl).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return A(this, _r, bl).call(this, "GetOptionalContentConfig").then((e) => new yL(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = o(this, Ci).get(t);
    if (e)
      return e;
    const n = this.messageHandler.sendWithPromise(t, null).then((i) => {
      var r, a;
      return {
        info: i[0],
        metadata: i[1] ? new mL(i[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return o(this, Ci).set(t, n), n;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of o(this, Wn).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), o(this, Ci).clear(), this.filterFactory.destroy(!0), ud.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!$v(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return o(this, co).get(e) ?? null;
  }
}
Ci = new WeakMap(), Wn = new WeakMap(), lo = new WeakMap(), co = new WeakMap(), qn = new WeakMap(), _r = new WeakSet(), bl = function(t, e = null) {
  const n = o(this, Ci).get(t);
  if (n)
    return n;
  const i = this.messageHandler.sendWithPromise(t, e);
  return o(this, Ci).set(t, i), i;
};
const vu = Symbol("INITIAL_DATA");
var Sn, Uc, cm;
class _w {
  constructor() {
    m(this, Uc);
    m(this, Sn, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = A(this, Uc, cm).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const n = o(this, Sn)[t];
    if (!n || n.data === vu)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return n.data;
  }
  has(t) {
    const e = o(this, Sn)[t];
    return !!e && e.data !== vu;
  }
  resolve(t, e = null) {
    const n = A(this, Uc, cm).call(this, t);
    n.data = e, n.resolve();
  }
  clear() {
    var t;
    for (const e in o(this, Sn)) {
      const {
        data: n
      } = o(this, Sn)[e];
      (t = n == null ? void 0 : n.bitmap) == null || t.close();
    }
    w(this, Sn, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in o(this, Sn)) {
      const {
        data: e
      } = o(this, Sn)[t];
      e !== vu && (yield [t, e]);
    }
  }
}
Sn = new WeakMap(), Uc = new WeakSet(), cm = function(t) {
  var e;
  return (e = o(this, Sn))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: vu
  });
};
var vs;
class tk {
  constructor(t) {
    m(this, vs, null);
    w(this, vs, t), this.onContinue = null;
  }
  get promise() {
    return o(this, vs).capability.promise;
  }
  cancel(t = 0) {
    o(this, vs).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = o(this, vs).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = o(this, vs);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
vs = new WeakMap();
var ys, Er;
const zs = class zs {
  constructor({
    callback: t,
    params: e,
    objs: n,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: l,
    canvasFactory: c,
    filterFactory: u,
    useRequestAnimationFrame: h = !1,
    pdfBug: f = !1,
    pageColors: g = null
  }) {
    m(this, ys, null);
    this.callback = t, this.params = e, this.objs = n, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = l, this.canvasFactory = c, this.filterFactory = u, this._pdfBug = f, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = h === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new tk(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (o(zs, Er).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      o(zs, Er).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: n,
      viewport: i,
      transform: r,
      background: a
    } = this.params;
    this.gfx = new Ta(n, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: r,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var n;
    this.running = !1, this.cancelled = !0, (n = this.gfx) == null || n.endDrawing(), o(this, ys) && (window.cancelAnimationFrame(o(this, ys)), w(this, ys, null)), o(zs, Er).delete(this._canvas), this.callback(t || new y0(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var t;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.stepper) == null || t.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? w(this, ys, window.requestAnimationFrame(() => {
      w(this, ys, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), o(zs, Er).delete(this._canvas), this.callback())));
  }
};
ys = new WeakMap(), Er = new WeakMap(), m(zs, Er, /* @__PURE__ */ new WeakSet());
let hm = zs;
const ek = "4.4.168", nk = "19fbc8998";
function Hv(s) {
  return Math.floor(Math.max(0, Math.min(1, s)) * 255).toString(16).padStart(2, "0");
}
function cl(s) {
  return Math.max(0, Math.min(255, 255 * s));
}
class Uv {
  static CMYK_G([t, e, n, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * n + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = cl(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Hv(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, n]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * n];
  }
  static RGB_rgb(t) {
    return t.map(cl);
  }
  static RGB_HTML(t) {
    return `#${t.map(Hv).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, n, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, n + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, n, i]) {
    return [cl(1 - Math.min(1, t + i)), cl(1 - Math.min(1, n + i)), cl(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, n]) {
    const i = 1 - t, r = 1 - e, a = 1 - n, l = Math.min(i, r, a);
    return ["CMYK", i, r, a, l];
  }
}
class Ew {
  static setupStorage(t, e, n, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (n.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (l) => {
          i.setValue(e, {
            value: l.target.value
          });
        });
        break;
      case "input":
        if (n.attributes.type === "radio" || n.attributes.type === "checkbox") {
          if (a.value === n.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === n.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (l) => {
            i.setValue(e, {
              value: l.target.checked ? l.target.getAttribute("xfaOn") : l.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (l) => {
            i.setValue(e, {
              value: l.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const l of n.children)
            l.attributes.value === a.value ? l.attributes.selected = !0 : l.attributes.hasOwnProperty("selected") && delete l.attributes.selected;
        }
        t.addEventListener("input", (l) => {
          const c = l.target.options, u = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          i.setValue(e, {
            value: u
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: n = null,
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, l = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [c, u] of Object.entries(a))
      if (u != null)
        switch (c) {
          case "class":
            u.length && t.setAttribute(c, u.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", u);
            break;
          case "style":
            Object.assign(t.style, u);
            break;
          case "textContent":
            t.textContent = u;
            break;
          default:
            (!l || c !== "href" && c !== "newWindow") && t.setAttribute(c, u);
        }
    l && r.addLinkAttributes(t, a.href, a.newWindow), n && a.dataId && this.setupStorage(t, a.dataId, e, n);
  }
  static render(t) {
    var f, g;
    const e = t.annotationStorage, n = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: n
    });
    const l = r !== "richText", c = t.div;
    if (c.append(a), t.viewport) {
      const v = `matrix(${t.viewport.transform.join(",")})`;
      c.style.transform = v;
    }
    l && c.setAttribute("class", "xfaLayer xfaFont");
    const u = [];
    if (i.children.length === 0) {
      if (i.value) {
        const v = document.createTextNode(i.value);
        a.append(v), l && Ml.shouldBuildText(i.name) && u.push(v);
      }
      return {
        textDivs: u
      };
    }
    const h = [[i, -1, a]];
    for (; h.length > 0; ) {
      const [v, y, _] = h.at(-1);
      if (y + 1 === v.children.length) {
        h.pop();
        continue;
      }
      const C = v.children[++h.at(-1)[1]];
      if (C === null)
        continue;
      const {
        name: E
      } = C;
      if (E === "#text") {
        const L = document.createTextNode(C.value);
        u.push(L), _.append(L);
        continue;
      }
      const P = (f = C == null ? void 0 : C.attributes) != null && f.xmlns ? document.createElementNS(C.attributes.xmlns, E) : document.createElement(E);
      if (_.append(P), C.attributes && this.setAttributes({
        html: P,
        element: C,
        storage: e,
        intent: r,
        linkService: n
      }), ((g = C.children) == null ? void 0 : g.length) > 0)
        h.push([C, -1, P]);
      else if (C.value) {
        const L = document.createTextNode(C.value);
        l && Ml.shouldBuildText(E) && u.push(L), P.append(L);
      }
    }
    for (const v of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      v.setAttribute("readOnly", !0);
    return {
      textDivs: u
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const su = 1e3, ik = 9, oa = /* @__PURE__ */ new WeakSet();
function qi(s) {
  return {
    width: s[2] - s[0],
    height: s[3] - s[1]
  };
}
class sk {
  static create(t) {
    switch (t.data.annotationType) {
      case se.LINK:
        return new Sw(t);
      case se.TEXT:
        return new rk(t);
      case se.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new ak(t);
          case "Btn":
            return t.data.radioButton ? new Tw(t) : t.data.checkBox ? new lk(t) : new ck(t);
          case "Ch":
            return new hk(t);
          case "Sig":
            return new ok(t);
        }
        return new pa(t);
      case se.POPUP:
        return new dm(t);
      case se.FREETEXT:
        return new Iw(t);
      case se.LINE:
        return new dk(t);
      case se.SQUARE:
        return new fk(t);
      case se.CIRCLE:
        return new pk(t);
      case se.POLYLINE:
        return new Mw(t);
      case se.CARET:
        return new mk(t);
      case se.INK:
        return new Fw(t);
      case se.POLYGON:
        return new gk(t);
      case se.HIGHLIGHT:
        return new vk(t);
      case se.UNDERLINE:
        return new yk(t);
      case se.SQUIGGLY:
        return new bk(t);
      case se.STRIKEOUT:
        return new wk(t);
      case se.STAMP:
        return new Dw(t);
      case se.FILEATTACHMENT:
        return new Ak(t);
      default:
        return new Kt(t);
    }
  }
}
var Sr, ho, uo, jc, um;
const F0 = class F0 {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: n = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, jc);
    m(this, Sr, null);
    m(this, ho, !1);
    m(this, uo, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(n)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: n
  }) {
    return !!(t != null && t.str || e != null && e.str || n != null && n.str);
  }
  get hasPopupData() {
    return F0._hasPopupData(this.data);
  }
  updateEdited(t) {
    var n;
    if (!this.container)
      return;
    o(this, Sr) || w(this, Sr, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && A(this, jc, um).call(this, e), (n = o(this, uo)) == null || n.popup.updateEdited(t);
  }
  resetEdited() {
    var t;
    o(this, Sr) && (A(this, jc, um).call(this, o(this, Sr).rect), (t = o(this, uo)) == null || t.popup.resetEdited(), w(this, Sr, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: n,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), this instanceof pa || (r.tabIndex = su);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex++, e.popupRef && r.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof dm) {
      const {
        rotation: _
      } = e;
      return !e.hasOwnCanvas && _ !== 0 && this.setRotation(_, r), r;
    }
    const {
      width: l,
      height: c
    } = qi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const _ = e.borderStyle.horizontalCornerRadius, C = e.borderStyle.verticalCornerRadius;
      if (_ > 0 || C > 0) {
        const P = `calc(${_}px * var(--scale-factor)) / calc(${C}px * var(--scale-factor))`;
        a.borderRadius = P;
      } else if (this instanceof Tw) {
        const P = `calc(${l}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        a.borderRadius = P;
      }
      switch (e.borderStyle.style) {
        case ol.SOLID:
          a.borderStyle = "solid";
          break;
        case ol.DASHED:
          a.borderStyle = "dashed";
          break;
        case ol.BEVELED:
          vt("Unimplemented border style: beveled");
          break;
        case ol.INSET:
          vt("Unimplemented border style: inset");
          break;
        case ol.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const E = e.borderColor || null;
      E ? (w(this, ho, !0), a.borderColor = Z.makeHexColor(E[0] | 0, E[1] | 0, E[2] | 0)) : a.borderWidth = 0;
    }
    const u = Z.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]), {
      pageWidth: h,
      pageHeight: f,
      pageX: g,
      pageY: v
    } = i.rawDims;
    a.left = `${100 * (u[0] - g) / h}%`, a.top = `${100 * (u[1] - v) / f}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (a.width = `${100 * l / h}%`, a.height = `${100 * c / f}%`) : this.setRotation(y, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: n,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: r,
      height: a
    } = qi(this.data.rect);
    let l, c;
    t % 180 === 0 ? (l = 100 * r / n, c = 100 * a / i) : (l = 100 * a / n, c = 100 * r / i), e.style.width = `${l}%`, e.style.height = `${c}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, n, i) => {
      const r = i.detail[e], a = r[0], l = r.slice(1);
      i.target.style[n] = Uv[`${a}_HTML`](l), this.annotationStorage.setValue(this.data.id, {
        [n]: Uv[`${a}_rgb`](l)
      });
    };
    return Ct(this, "_commonActions", {
      display: (e) => {
        const {
          display: n
        } = e.detail, i = n % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: n === 1 || n === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: n
        } = e.detail;
        this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: n,
          noView: n
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const n = e.detail.rotation;
        this.setRotation(n), this.annotationStorage.setValue(this.data.id, {
          rotation: n
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const n = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || n[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const n = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = n[i];
      if (a) {
        const l = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(l), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, n, i, r] = this.data.rect.map((_) => Math.fround(_));
    if (t.length === 8) {
      const [_, C, E, P] = t.subarray(2, 6);
      if (i === _ && r === C && e === E && n === P)
        return;
    }
    const {
      style: a
    } = this.container;
    let l;
    if (o(this, ho)) {
      const {
        borderColor: _,
        borderWidth: C
      } = a;
      a.borderWidth = 0, l = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${_}" stroke-width="${C}">`], this.container.classList.add("hasBorder");
    }
    const c = i - e, u = r - n, {
      svgFactory: h
    } = this, f = h.createElement("svg");
    f.classList.add("quadrilateralsContainer"), f.setAttribute("width", 0), f.setAttribute("height", 0);
    const g = h.createElement("defs");
    f.append(g);
    const v = h.createElement("clipPath"), y = `clippath_${this.data.id}`;
    v.setAttribute("id", y), v.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(v);
    for (let _ = 2, C = t.length; _ < C; _ += 8) {
      const E = t[_], P = t[_ + 1], L = t[_ + 2], k = t[_ + 3], F = h.createElement("rect"), I = (L - e) / c, M = (r - P) / u, x = (E - L) / c, T = (P - k) / u;
      F.setAttribute("x", I), F.setAttribute("y", M), F.setAttribute("width", x), F.setAttribute("height", T), v.append(F), l == null || l.push(`<rect vector-effect="non-scaling-stroke" x="${I}" y="${M}" width="${x}" height="${T}"/>`);
    }
    o(this, ho) && (l.push("</g></svg>')"), a.backgroundImage = l.join("")), this.container.append(f), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup() {
    const {
      container: t,
      data: e
    } = this;
    t.setAttribute("aria-haspopup", "dialog");
    const n = w(this, uo, new dm({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(n.render());
  }
  render() {
    Ft("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const n = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: r,
          id: a,
          exportValues: l
        } of i) {
          if (r === -1 || a === e)
            continue;
          const c = typeof l == "string" ? l : null, u = document.querySelector(`[data-element-id="${a}"]`);
          if (u && !oa.has(u)) {
            vt(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          n.push({
            id: a,
            exportValue: c,
            domElement: u
          });
        }
      return n;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a !== e && oa.has(i) && n.push({
        id: a,
        exportValue: r,
        domElement: i
      });
    }
    return n;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var n;
      (n = this.linkService.eventBus) == null || n.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e
      });
    });
  }
};
Sr = new WeakMap(), ho = new WeakMap(), uo = new WeakMap(), jc = new WeakSet(), um = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: n,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: l,
          pageY: c
        }
      }
    }
  } = this;
  n == null || n.splice(0, 4, ...t);
  const {
    width: u,
    height: h
  } = qi(t);
  e.left = `${100 * (t[0] - l) / r}%`, e.top = `${100 * (a - t[3] + c) / a}%`, i === 0 ? (e.width = `${100 * u / r}%`, e.height = `${100 * h / a}%`) : this.setRotation(i);
};
let Kt = F0;
var Ti, Bs, af, xw, of, Cw;
class Sw extends Kt {
  constructor(e, n = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(n != null && n.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, Ti);
    m(this, af);
    m(this, of);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: n
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (n.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action), r = !0) : e.attachment ? (A(this, af, xw).call(this, i, e.attachment, e.attachmentDest), r = !0) : e.setOCGState ? (A(this, of, Cw).call(this, i, e.setOCGState), r = !0) : e.dest ? (this._bindLink(i, e.dest), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, n) {
    e.href = this.linkService.getDestinationHash(n), e.onclick = () => (n && this.linkService.goToDestination(n), !1), (n || n === "") && A(this, Ti, Bs).call(this);
  }
  _bindNamedAction(e, n) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(n), !1), A(this, Ti, Bs).call(this);
  }
  _bindJSAction(e, n) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(n.actions)) {
      const a = i.get(r);
      a && (e[a] = () => {
        var l;
        return (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: n.id,
            name: r
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), A(this, Ti, Bs).call(this);
  }
  _bindResetFormAction(e, n) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), A(this, Ti, Bs).call(this), !this._fieldObjects) {
      vt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var f;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: l
      } = n, c = [];
      if (r.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const v of r) {
          const y = this._fieldObjects[v] || [];
          for (const {
            id: _
          } of y)
            g.add(_);
        }
        for (const v of Object.values(this._fieldObjects))
          for (const y of v)
            g.has(y.id) === l && c.push(y);
      } else
        for (const g of Object.values(this._fieldObjects))
          c.push(...g);
      const u = this.annotationStorage, h = [];
      for (const g of c) {
        const {
          id: v
        } = g;
        switch (h.push(v), g.type) {
          case "text": {
            const _ = g.defaultValue || "";
            u.setValue(v, {
              value: _
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const _ = g.defaultValue === g.exportValues;
            u.setValue(v, {
              value: _
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const _ = g.defaultValue || "";
            u.setValue(v, {
              value: _
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${v}"]`);
        if (y) {
          if (!oa.has(y)) {
            vt(`_bindResetFormAction - element not allowed: ${v}`);
            continue;
          }
        } else
          continue;
        y.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: h,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Ti = new WeakSet(), Bs = function() {
  this.container.setAttribute("data-internal-link", "");
}, af = new WeakSet(), xw = function(e, n, i = null) {
  e.href = this.linkService.getAnchorUrl(""), n.description && (e.title = n.description), e.onclick = () => {
    var r;
    return (r = this.downloadManager) == null || r.openOrDownloadData(n.content, n.filename, i), !1;
  }, A(this, Ti, Bs).call(this);
}, of = new WeakSet(), Cw = function(e, n) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(n), !1), A(this, Ti, Bs).call(this);
};
class rk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class pa extends Kt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Ge.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, n, i, r) {
    n.includes("mouse") ? t.addEventListener(n, (a) => {
      var l;
      (l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(n, (a) => {
      var l;
      if (n === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (n === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((l = this.linkService.eventBus) == null || l.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, n, i) {
    var r, a, l;
    for (const [c, u] of n)
      (u === "Action" || (r = this.data.actions) != null && r[u]) && ((u === "Focus" || u === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, c, u, i), u === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : u === "Blur" && !((l = this.data.actions) != null && l.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : Z.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: n
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || ik, r = t.style;
    let a;
    const l = 2, c = (u) => Math.round(10 * u) / 10;
    if (this.data.multiLine) {
      const u = Math.abs(this.data.rect[3] - this.data.rect[1] - l), h = Math.round(u / (eg * i)) || 1, f = u / h;
      a = Math.min(i, c(f / eg));
    } else {
      const u = Math.abs(this.data.rect[3] - this.data.rect[1] - l);
      a = Math.min(i, c(u / eg));
    }
    r.fontSize = `calc(${a}px * var(--scale-factor))`, r.color = Z.makeHexColor(n[0], n[1], n[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class ak extends pa {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, n, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = n), r.setValue(a.id, {
        [i]: n
      });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let n = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let l = a.value || "";
      const c = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && l.length > c && (l = l.slice(0, c));
      let u = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      u && this.data.comb && (u = u.replaceAll(/\s+/g, ""));
      const h = {
        userValue: l,
        formattedValue: u,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (n = document.createElement("textarea"), n.textContent = u ?? l, this.data.doNotScroll && (n.style.overflowY = "hidden")) : (n = document.createElement("input"), n.type = "text", n.setAttribute("value", u ?? l), this.data.doNotScroll && (n.style.overflowX = "hidden")), this.data.hasOwnCanvas && (n.hidden = !0), oa.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, n.name = this.data.fieldName, n.tabIndex = su, this._setRequired(n, this.data.required), c && (n.maxLength = c), n.addEventListener("input", (g) => {
        t.setValue(e, {
          value: g.target.value
        }), this.setPropertyOnSiblings(n, "value", g.target.value, "value"), h.formattedValue = null;
      }), n.addEventListener("resetform", (g) => {
        const v = this.data.defaultFieldValue ?? "";
        n.value = h.userValue = v, h.formattedValue = null;
      });
      let f = (g) => {
        const {
          formattedValue: v
        } = h;
        v != null && (g.target.value = v), g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        n.addEventListener("focus", (v) => {
          var _;
          if (h.focused)
            return;
          const {
            target: y
          } = v;
          h.userValue && (y.value = h.userValue), h.lastCommittedValue = y.value, h.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (h.focused = !0);
        }), n.addEventListener("updatefromsandbox", (v) => {
          this.showElementAndHideCanvas(v.target);
          const y = {
            value(_) {
              h.userValue = _.detail.value ?? "", t.setValue(e, {
                value: h.userValue.toString()
              }), _.target.value = h.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: C
              } = _.detail;
              h.formattedValue = C, C != null && _.target !== document.activeElement && (_.target.value = C), t.setValue(e, {
                formattedValue: C
              });
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var L;
              const {
                charLimit: C
              } = _.detail, {
                target: E
              } = _;
              if (C === 0) {
                E.removeAttribute("maxLength");
                return;
              }
              E.setAttribute("maxLength", C);
              let P = h.userValue;
              !P || P.length <= C || (P = P.slice(0, C), E.value = h.userValue = P, t.setValue(e, {
                value: P
              }), (L = this.linkService.eventBus) == null || L.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: P,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: E.selectionStart,
                  selEnd: E.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(y, v);
        }), n.addEventListener("keydown", (v) => {
          var C;
          h.commitKey = 1;
          let y = -1;
          if (v.key === "Escape" ? y = 0 : v.key === "Enter" && !this.data.multiLine ? y = 2 : v.key === "Tab" && (h.commitKey = 3), y === -1)
            return;
          const {
            value: _
          } = v.target;
          h.lastCommittedValue !== _ && (h.lastCommittedValue = _, h.userValue = _, (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: y,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          }));
        });
        const g = f;
        f = null, n.addEventListener("blur", (v) => {
          var _, C;
          if (!h.focused || !v.relatedTarget)
            return;
          (_ = this.data.actions) != null && _.Blur || (h.focused = !1);
          const {
            value: y
          } = v.target;
          h.userValue = y, h.lastCommittedValue !== y && ((C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          })), g(v);
        }), (r = this.data.actions) != null && r.Keystroke && n.addEventListener("beforeinput", (v) => {
          var F;
          h.lastCommittedValue = null;
          const {
            data: y,
            target: _
          } = v, {
            value: C,
            selectionStart: E,
            selectionEnd: P
          } = _;
          let L = E, k = P;
          switch (v.inputType) {
            case "deleteWordBackward": {
              const I = C.substring(0, E).match(/\w*[^\w]*$/);
              I && (L -= I[0].length);
              break;
            }
            case "deleteWordForward": {
              const I = C.substring(E).match(/^[^\w]*\w*/);
              I && (k += I[0].length);
              break;
            }
            case "deleteContentBackward":
              E === P && (L -= 1);
              break;
            case "deleteContentForward":
              E === P && (k += 1);
              break;
          }
          v.preventDefault(), (F = this.linkService.eventBus) == null || F.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: C,
              change: y || "",
              willCommit: !1,
              selStart: L,
              selEnd: k
            }
          });
        }), this._setEventListeners(n, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (v) => v.target.value);
      }
      if (f && n.addEventListener("blur", f), this.data.comb) {
        const v = (this.data.rect[2] - this.data.rect[0]) / c;
        n.classList.add("comb"), n.style.letterSpacing = `calc(${v}px * var(--scale-factor) - 1ch)`;
      }
    } else
      n = document.createElement("div"), n.textContent = this.data.fieldValue, n.style.verticalAlign = "middle", n.style.display = "table-cell", this.data.hasOwnCanvas && (n.hidden = !0);
    return this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
class ok extends pa {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class lk extends pa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(n, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return oa.add(r), r.setAttribute("data-element-id", n), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = su, r.addEventListener("change", (a) => {
      const {
        name: l,
        checked: c
      } = a.target;
      for (const u of this._getElementsByName(l, n)) {
        const h = c && u.exportValue === e.exportValue;
        u.domElement && (u.domElement.checked = h), t.setValue(u.id, {
          value: h
        });
      }
      t.setValue(n, {
        value: c
      });
    }), r.addEventListener("resetform", (a) => {
      const l = e.defaultFieldValue || "Off";
      a.target.checked = l === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const l = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", t.setValue(n, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(l, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Tw extends pa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, n = e.id;
    let i = t.getValue(n, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(n, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, n))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (oa.add(r), r.setAttribute("data-element-id", n), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = su, r.addEventListener("change", (a) => {
      const {
        name: l,
        checked: c
      } = a.target;
      for (const u of this._getElementsByName(l, n))
        t.setValue(u.id, {
          value: !1
        });
      t.setValue(n, {
        value: c
      });
    }), r.addEventListener("resetform", (a) => {
      const l = e.defaultFieldValue;
      a.target.checked = l != null && l === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (l) => {
        const c = {
          value: (u) => {
            const h = a === u.detail.value;
            for (const f of this._getElementsByName(u.target.name)) {
              const g = h && f.id === n;
              f.domElement && (f.domElement.checked = g), t.setValue(f.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, l);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (l) => l.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class ck extends Sw {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (n) => {
      this._dispatchEventFromSandbox({}, n);
    })), t;
  }
}
class hk extends pa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, n = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    oa.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = su;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (h) => {
      const f = this.data.defaultFieldValue;
      for (const g of i.options)
        g.selected = g.value === f;
    });
    for (const h of this.data.options) {
      const f = document.createElement("option");
      f.textContent = h.displayValue, f.value = h.exportValue, n.value.includes(h.exportValue) && (f.setAttribute("selected", !0), r = !1), i.append(f);
    }
    let a = null;
    if (r) {
      const h = document.createElement("option");
      h.value = " ", h.setAttribute("hidden", !0), h.setAttribute("selected", !0), i.prepend(h), a = () => {
        h.remove(), i.removeEventListener("input", a), a = null;
      }, i.addEventListener("input", a);
    }
    const l = (h) => {
      const f = h ? "value" : "textContent", {
        options: g,
        multiple: v
      } = i;
      return v ? Array.prototype.filter.call(g, (y) => y.selected).map((y) => y[f]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][f];
    };
    let c = l(!1);
    const u = (h) => {
      const f = h.target.options;
      return Array.prototype.map.call(f, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (h) => {
      const f = {
        value(g) {
          a == null || a();
          const v = g.detail.value, y = new Set(Array.isArray(v) ? v : [v]);
          for (const _ of i.options)
            _.selected = y.has(_.value);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        multipleSelection(g) {
          i.multiple = !0;
        },
        remove(g) {
          const v = i.options, y = g.detail.remove;
          v[y].selected = !1, i.remove(y), v.length > 0 && Array.prototype.findIndex.call(v, (C) => C.selected) === -1 && (v[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: u(g)
          }), c = l(!1);
        },
        clear(g) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), c = l(!1);
        },
        insert(g) {
          const {
            index: v,
            displayValue: y,
            exportValue: _
          } = g.detail.insert, C = i.children[v], E = document.createElement("option");
          E.textContent = y, E.value = _, C ? C.before(E) : i.append(E), t.setValue(e, {
            value: l(!0),
            items: u(g)
          }), c = l(!1);
        },
        items(g) {
          const {
            items: v
          } = g.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const y of v) {
            const {
              displayValue: _,
              exportValue: C
            } = y, E = document.createElement("option");
            E.textContent = _, E.value = C, i.append(E);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: u(g)
          }), c = l(!1);
        },
        indices(g) {
          const v = new Set(g.detail.indices);
          for (const y of g.target.options)
            y.selected = v.has(y.index);
          t.setValue(e, {
            value: l(!0)
          }), c = l(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, h);
    }), i.addEventListener("input", (h) => {
      var v;
      const f = l(!0), g = l(!1);
      t.setValue(e, {
        value: f
      }), h.preventDefault(), (v = this.linkService.eventBus) == null || v.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: c,
          change: g,
          changeEx: f,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (h) => h.target.value)) : i.addEventListener("input", function(h) {
      t.setValue(e, {
        value: l(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class dm extends Kt {
  constructor(t) {
    const {
      data: e,
      elements: n
    } = t;
    super(t, {
      isRenderable: Kt._hasPopupData(e)
    }), this.elements = n, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new uk({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const n of this.elements)
      n.popup = t, e.push(n.data.id), n.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((n) => `${Pb}${n}`).join(",")), this.container;
  }
}
var fo, lf, cf, po, xr, Wt, Pi, Cr, zc, Vc, go, Ri, xn, Li, Gc, ki, Wc, Tr, Pr, mo, Bu, qc, fm, hf, Pw, uf, Rw, df, Lw, ff, kw, vo, $u, yo, Hu, Xc, pm;
class uk {
  constructor({
    container: t,
    color: e,
    elements: n,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: l,
    parent: c,
    rect: u,
    parentRect: h,
    open: f
  }) {
    m(this, mo);
    m(this, qc);
    m(this, hf);
    m(this, uf);
    m(this, df);
    m(this, ff);
    m(this, vo);
    m(this, yo);
    m(this, Xc);
    m(this, fo, A(this, df, Lw).bind(this));
    m(this, lf, A(this, Xc, pm).bind(this));
    m(this, cf, A(this, yo, Hu).bind(this));
    m(this, po, A(this, vo, $u).bind(this));
    m(this, xr, null);
    m(this, Wt, null);
    m(this, Pi, null);
    m(this, Cr, null);
    m(this, zc, null);
    m(this, Vc, null);
    m(this, go, null);
    m(this, Ri, !1);
    m(this, xn, null);
    m(this, Li, null);
    m(this, Gc, null);
    m(this, ki, null);
    m(this, Wc, null);
    m(this, Tr, null);
    m(this, Pr, !1);
    var g;
    w(this, Wt, t), w(this, Wc, i), w(this, Pi, a), w(this, ki, l), w(this, Vc, c), w(this, xr, e), w(this, Gc, u), w(this, go, h), w(this, zc, n), w(this, Cr, Mb.toDateObject(r)), this.trigger = n.flatMap((v) => v.getElementsToTriggerPopup());
    for (const v of this.trigger)
      v.addEventListener("click", o(this, po)), v.addEventListener("mouseenter", o(this, cf)), v.addEventListener("mouseleave", o(this, lf)), v.classList.add("popupTriggerArea");
    for (const v of n)
      (g = v.container) == null || g.addEventListener("keydown", o(this, fo));
    o(this, Wt).hidden = !0, f && A(this, vo, $u).call(this);
  }
  render() {
    if (o(this, xn))
      return;
    const t = w(this, xn, document.createElement("div"));
    if (t.className = "popup", o(this, xr)) {
      const r = t.style.outlineColor = Z.makeHexColor(...o(this, xr));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)` : t.style.backgroundColor = Z.makeHexColor(...o(this, xr).map((l) => Math.floor(0.7 * (255 - l) + l)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const n = document.createElement("h1");
    if (e.append(n), {
      dir: n.dir,
      str: n.textContent
    } = o(this, Wc), t.append(e), o(this, Cr)) {
      const r = document.createElement("span");
      r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        date: o(this, Cr).toLocaleDateString(),
        time: o(this, Cr).toLocaleTimeString()
      })), e.append(r);
    }
    const i = o(this, mo, Bu);
    if (i)
      Ew.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(o(this, Pi));
      t.append(r);
    }
    o(this, Wt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const n = document.createElement("p");
    n.classList.add("popupContent"), n.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let r = 0, a = i.length; r < a; ++r) {
      const l = i[r];
      n.append(document.createTextNode(l)), r < a - 1 && n.append(document.createElement("br"));
    }
    return n;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    var n;
    o(this, Tr) || w(this, Tr, {
      contentsObj: o(this, Pi),
      richText: o(this, ki)
    }), t && w(this, Li, null), e && (w(this, ki, A(this, uf, Rw).call(this, e)), w(this, Pi, null)), (n = o(this, xn)) == null || n.remove(), w(this, xn, null);
  }
  resetEdited() {
    var t;
    o(this, Tr) && ({
      contentsObj: qe(this, Pi)._,
      richText: qe(this, ki)._
    } = o(this, Tr), w(this, Tr, null), (t = o(this, xn)) == null || t.remove(), w(this, xn, null), w(this, Li, null));
  }
  forceHide() {
    w(this, Pr, this.isVisible), o(this, Pr) && (o(this, Wt).hidden = !0);
  }
  maybeShow() {
    o(this, Pr) && (o(this, xn) || A(this, yo, Hu).call(this), w(this, Pr, !1), o(this, Wt).hidden = !1);
  }
  get isVisible() {
    return o(this, Wt).hidden === !1;
  }
}
fo = new WeakMap(), lf = new WeakMap(), cf = new WeakMap(), po = new WeakMap(), xr = new WeakMap(), Wt = new WeakMap(), Pi = new WeakMap(), Cr = new WeakMap(), zc = new WeakMap(), Vc = new WeakMap(), go = new WeakMap(), Ri = new WeakMap(), xn = new WeakMap(), Li = new WeakMap(), Gc = new WeakMap(), ki = new WeakMap(), Wc = new WeakMap(), Tr = new WeakMap(), Pr = new WeakMap(), mo = new WeakSet(), Bu = function() {
  const t = o(this, ki), e = o(this, Pi);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && o(this, ki).html || null;
}, qc = new WeakSet(), fm = function() {
  var t, e, n;
  return ((n = (e = (t = o(this, mo, Bu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.fontSize) || 0;
}, hf = new WeakSet(), Pw = function() {
  var t, e, n;
  return ((n = (e = (t = o(this, mo, Bu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : n.color) || null;
}, uf = new WeakSet(), Rw = function(t) {
  const e = [], n = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: o(this, hf, Pw),
      fontSize: o(this, qc, fm) ? `calc(${o(this, qc, fm)}px * var(--scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return n;
}, df = new WeakSet(), Lw = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && o(this, Ri)) && A(this, vo, $u).call(this);
}, ff = new WeakSet(), kw = function() {
  if (o(this, Li) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: n,
        pageX: i,
        pageY: r
      }
    }
  } = o(this, Vc);
  let a = !!o(this, go), l = a ? o(this, go) : o(this, Gc);
  for (const y of o(this, zc))
    if (!l || Z.intersect(y.data.rect, l) !== null) {
      l = y.data.rect, a = !0;
      break;
    }
  const c = Z.normalizeRect([l[0], t[3] - l[1] + t[1], l[2], t[3] - l[3] + t[1]]), h = a ? l[2] - l[0] + 5 : 0, f = c[0] + h, g = c[1];
  w(this, Li, [100 * (f - i) / e, 100 * (g - r) / n]);
  const {
    style: v
  } = o(this, Wt);
  v.left = `${o(this, Li)[0]}%`, v.top = `${o(this, Li)[1]}%`;
}, vo = new WeakSet(), $u = function() {
  w(this, Ri, !o(this, Ri)), o(this, Ri) ? (A(this, yo, Hu).call(this), o(this, Wt).addEventListener("click", o(this, po)), o(this, Wt).addEventListener("keydown", o(this, fo))) : (A(this, Xc, pm).call(this), o(this, Wt).removeEventListener("click", o(this, po)), o(this, Wt).removeEventListener("keydown", o(this, fo)));
}, yo = new WeakSet(), Hu = function() {
  o(this, xn) || this.render(), this.isVisible ? o(this, Ri) && o(this, Wt).classList.add("focused") : (A(this, ff, kw).call(this), o(this, Wt).hidden = !1, o(this, Wt).style.zIndex = parseInt(o(this, Wt).style.zIndex) + 1e3);
}, Xc = new WeakSet(), pm = function() {
  o(this, Wt).classList.remove("focused"), !(o(this, Ri) || !this.isVisible) && (o(this, Wt).hidden = !0, o(this, Wt).style.zIndex = parseInt(o(this, Wt).style.zIndex) - 1e3);
};
class Iw extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = St.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const n = document.createElement("span");
        n.textContent = e, t.append(n);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var Yc;
class dk extends Kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Yc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = qi(e.rect), r = this.svgFactory.create(n, i, !0), a = w(this, Yc, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Yc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Yc = new WeakMap();
var Kc;
class fk extends Kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Kc, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = qi(e.rect), r = this.svgFactory.create(n, i, !0), a = e.borderStyle.width, l = w(this, Kc, this.svgFactory.createElement("svg:rect"));
    return l.setAttribute("x", a / 2), l.setAttribute("y", a / 2), l.setAttribute("width", n - a), l.setAttribute("height", i - a), l.setAttribute("stroke-width", a || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), r.append(l), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Kc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Kc = new WeakMap();
var Zc;
class pk extends Kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Zc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: n,
      height: i
    } = qi(e.rect), r = this.svgFactory.create(n, i, !0), a = e.borderStyle.width, l = w(this, Zc, this.svgFactory.createElement("svg:ellipse"));
    return l.setAttribute("cx", n / 2), l.setAttribute("cy", i / 2), l.setAttribute("rx", n / 2 - a / 2), l.setAttribute("ry", i / 2 - a / 2), l.setAttribute("stroke-width", a || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), r.append(l), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Zc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Zc = new WeakMap();
var Jc;
class Mw extends Kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Jc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: n,
        borderStyle: i,
        popupRef: r
      }
    } = this;
    if (!n)
      return this.container;
    const {
      width: a,
      height: l
    } = qi(e), c = this.svgFactory.create(a, l, !0);
    let u = [];
    for (let f = 0, g = n.length; f < g; f += 2) {
      const v = n[f] - e[0], y = e[3] - n[f + 1];
      u.push(`${v},${y}`);
    }
    u = u.join(" ");
    const h = w(this, Jc, this.svgFactory.createElement(this.svgElementName));
    return h.setAttribute("points", u), h.setAttribute("stroke-width", i.width || 1), h.setAttribute("stroke", "transparent"), h.setAttribute("fill", "transparent"), c.append(h), this.container.append(c), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Jc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Jc = new WeakMap();
class gk extends Mw {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class mk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Qc;
class Fw extends Kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Qc, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = St.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        inkLists: n,
        borderStyle: i,
        popupRef: r
      }
    } = this, {
      width: a,
      height: l
    } = qi(e), c = this.svgFactory.create(a, l, !0);
    for (const u of n) {
      let h = [];
      for (let g = 0, v = u.length; g < v; g += 2) {
        const y = u[g] - e[0], _ = e[3] - u[g + 1];
        h.push(`${y},${_}`);
      }
      h = h.join(" ");
      const f = this.svgFactory.createElement(this.svgElementName);
      o(this, Qc).push(f), f.setAttribute("points", h), f.setAttribute("stroke-width", i.width || 1), f.setAttribute("stroke", "transparent"), f.setAttribute("fill", "transparent"), !r && this.hasPopupData && this._createPopup(), c.append(f);
    }
    return this.container.append(c), this.container;
  }
  getElementsToTriggerPopup() {
    return o(this, Qc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Qc = new WeakMap();
class vk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class yk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class bk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class wk extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class Dw extends Kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var th, eh, gm;
class Ak extends Kt {
  constructor(e) {
    var i;
    super(e, {
      isRenderable: !0
    });
    m(this, eh);
    m(this, th, null);
    const {
      file: n
    } = this.data;
    this.filename = n.filename, this.content = n.content, (i = this.linkService.eventBus) == null || i.dispatch("fileattachmentannotation", {
      source: this,
      ...n
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: n
    } = this;
    let i;
    n.hasAppearance || n.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(n.name) ? "paperclip" : "pushpin"}.svg`, n.fillAlpha && n.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(n.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", A(this, eh, gm).bind(this)), w(this, th, i);
    const {
      isMac: r
    } = Ge.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && A(this, eh, gm).call(this);
    }), !n.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return o(this, th);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
th = new WeakMap(), eh = new WeakSet(), gm = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var nh, Rr, bo, pf, Ow, ih, mm, ey;
let _k = (ey = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: n,
    annotationEditorUIManager: i,
    page: r,
    viewport: a
  }) {
    m(this, pf);
    m(this, ih);
    m(this, nh, null);
    m(this, Rr, null);
    m(this, bo, /* @__PURE__ */ new Map());
    this.div = t, w(this, nh, e), w(this, Rr, n), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  async render(t) {
    var a;
    const {
      annotations: e
    } = t, n = this.div;
    ra(n, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: n,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new v0(),
      annotationStorage: t.annotationStorage || new _0(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const l of e) {
      if (l.noHTML)
        continue;
      const c = l.annotationType === se.POPUP;
      if (c) {
        const f = i.get(l.id);
        if (!f)
          continue;
        r.elements = f;
      } else {
        const {
          width: f,
          height: g
        } = qi(l.rect);
        if (f <= 0 || g <= 0)
          continue;
      }
      r.data = l;
      const u = sk.create(r);
      if (!u.isRenderable)
        continue;
      if (!c && l.popupRef) {
        const f = i.get(l.popupRef);
        f ? f.push(u) : i.set(l.popupRef, [u]);
      }
      const h = u.render();
      l.hidden && (h.style.visibility = "hidden"), A(this, pf, Ow).call(this, h, l.id), u.annotationEditorType > 0 && (o(this, bo).set(u.data.id, u), (a = this._annotationEditorUIManager) == null || a.renderAnnotationElement(u));
    }
    A(this, ih, mm).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, ra(e, {
      rotation: t.rotation
    }), A(this, ih, mm).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(o(this, bo).values());
  }
  getEditableAnnotation(t) {
    return o(this, bo).get(t);
  }
}, nh = new WeakMap(), Rr = new WeakMap(), bo = new WeakMap(), pf = new WeakSet(), Ow = function(t, e) {
  var i;
  const n = t.firstChild || t;
  n.id = `${Pb}${e}`, this.div.append(t), (i = o(this, nh)) == null || i.moveElementInDOM(this.div, t, n, !1);
}, ih = new WeakSet(), mm = function() {
  if (!o(this, Rr))
    return;
  const t = this.div;
  for (const [e, n] of o(this, Rr)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    n.className = "annotationContent";
    const {
      firstChild: r
    } = i;
    r ? r.nodeName === "CANVAS" ? r.replaceWith(n) : r.classList.contains("annotationContent") ? r.after(n) : r.before(n) : i.append(n);
  }
  o(this, Rr).clear();
}, ey);
const yu = /\r\n?|\n/g;
var sh, rh, ah, oh, lh, Cn, Qe, ch, tn, wo, gf, Nw, mf, Bw, vf, $w, Ao, Uu, _o, ju, Eo, zu, yf, Hw, hh, ym, bf, Uw;
const Nt = class Nt extends It {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, gf);
    m(this, mf);
    m(this, vf);
    m(this, Ao);
    m(this, Eo);
    m(this, yf);
    m(this, bf);
    m(this, sh, this.editorDivBlur.bind(this));
    m(this, rh, this.editorDivFocus.bind(this));
    m(this, ah, this.editorDivInput.bind(this));
    m(this, oh, this.editorDivKeydown.bind(this));
    m(this, lh, this.editorDivPaste.bind(this));
    m(this, Cn, void 0);
    m(this, Qe, "");
    m(this, ch, `${this.id}-editor`);
    m(this, tn, void 0);
    m(this, wo, null);
    w(this, Cn, e.color || Nt._defaultColor || It._defaultLineColor), w(this, tn, e.fontSize || Nt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = Nt.prototype, n = (a) => a.isEmpty(), i = aa.TRANSLATE_SMALL, r = aa.TRANSLATE_BIG;
    return Ct(this, "_keyboardManager", new nu([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: n
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: n
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: n
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: n
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: n
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: n
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: n
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: n
    }]]));
  }
  static initialize(e, n) {
    It.initialize(e, n, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case ht.FREETEXT_SIZE:
        Nt._defaultFontSize = n;
        break;
      case ht.FREETEXT_COLOR:
        Nt._defaultColor = n;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case ht.FREETEXT_SIZE:
        A(this, gf, Nw).call(this, n);
        break;
      case ht.FREETEXT_COLOR:
        A(this, mf, Bw).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ht.FREETEXT_SIZE, Nt._defaultFontSize], [ht.FREETEXT_COLOR, Nt._defaultColor || It._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[ht.FREETEXT_SIZE, o(this, tn)], [ht.FREETEXT_COLOR, o(this, Cn)]];
  }
  _translateEmpty(e, n) {
    this._uiManager.translateSelectedEditors(e, n, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Nt._internalPadding * e, -(Nt._internalPadding + o(this, tn)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(St.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant");
    const e = this._uiManager._signal;
    this.editorDiv.addEventListener("keydown", o(this, oh), {
      signal: e
    }), this.editorDiv.addEventListener("focus", o(this, rh), {
      signal: e
    }), this.editorDiv.addEventListener("blur", o(this, sh), {
      signal: e
    }), this.editorDiv.addEventListener("input", o(this, ah), {
      signal: e
    }), this.editorDiv.addEventListener("paste", o(this, lh), {
      signal: e
    });
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", o(this, ch)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", o(this, oh)), this.editorDiv.removeEventListener("focus", o(this, rh)), this.editorDiv.removeEventListener("blur", o(this, sh)), this.editorDiv.removeEventListener("input", o(this, ah)), this.editorDiv.removeEventListener("paste", o(this, lh)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var e;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (e = this._initialOptions) != null && e.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = o(this, Qe), n = w(this, Qe, A(this, vf, $w).call(this).trimEnd());
    if (e === n)
      return;
    const i = (r) => {
      if (w(this, Qe, r), !r) {
        this.remove();
        return;
      }
      A(this, Eo, zu).call(this), this._uiManager.rebuild(this), A(this, Ao, Uu).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(n);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), A(this, Ao, Uu).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Nt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", o(this, ch)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), It._l10nPromise.get("pdfjs-free-text-default-content").then((r) => {
      var a;
      return (a = this.editorDiv) == null ? void 0 : a.setAttribute("default-content", r);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${o(this, tn)}px * var(--scale-factor))`, i.color = o(this, Cn), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), ld(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: l
        } = o(this, wo);
        let [c, u] = this.getInitialTranslation();
        [c, u] = this.pageTranslationToScreen(c, u);
        const [h, f] = this.pageDimensions, [g, v] = this.pageTranslation;
        let y, _;
        switch (this.rotation) {
          case 0:
            y = e + (l[0] - g) / h, _ = n + this.height - (l[1] - v) / f;
            break;
          case 90:
            y = e + (l[0] - g) / h, _ = n - (l[1] - v) / f, [c, u] = [u, -c];
            break;
          case 180:
            y = e - this.width + (l[0] - g) / h, _ = n - (l[1] - v) / f, [c, u] = [-c, -u];
            break;
          case 270:
            y = e + (l[0] - g - this.height * f) / h, _ = n + (l[1] - v - this.width * h) / f, [c, u] = [-u, c];
            break;
        }
        this.setAt(y * r, _ * a, c, u);
      } else
        this.setAt(e * r, n * a, this.width * r, this.height * a);
      A(this, Eo, zu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, _, C;
    const n = e.clipboardData || window.clipboardData, {
      types: i
    } = n;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = A(y = Nt, hh, ym).call(y, n.getData("text") || "").replaceAll(yu, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const l = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      l.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: u
    } = l, h = [], f = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const E = c.parentElement;
      if (f.push(c.nodeValue.slice(u).replaceAll(yu, "")), E !== this.editorDiv) {
        let P = h;
        for (const L of this.editorDiv.childNodes) {
          if (L === E) {
            P = f;
            continue;
          }
          P.push(A(_ = Nt, _o, ju).call(_, L));
        }
      }
      h.push(c.nodeValue.slice(0, u).replaceAll(yu, ""));
    } else if (c === this.editorDiv) {
      let E = h, P = 0;
      for (const L of this.editorDiv.childNodes)
        P++ === u && (E = f), E.push(A(C = Nt, _o, ju).call(C, L));
    }
    w(this, Qe, `${h.join(`
`)}${r}${f.join(`
`)}`), A(this, Eo, zu).call(this);
    const g = new Range();
    let v = h.reduce((E, P) => E + P.length, 0);
    for (const {
      firstChild: E
    } of this.editorDiv.childNodes)
      if (E.nodeType === Node.TEXT_NODE) {
        const P = E.nodeValue.length;
        if (v <= P) {
          g.setStart(E, v), g.setEnd(E, v);
          break;
        }
        v -= P;
      }
    a.removeAllRanges(), a.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(e, n, i) {
    var l;
    let r = null;
    if (e instanceof Iw) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: u
          },
          rect: h,
          rotation: f,
          id: g
        },
        textContent: v,
        textPosition: y,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!v || v.length === 0)
        return null;
      r = e = {
        annotationType: St.FREETEXT,
        color: Array.from(u),
        fontSize: c,
        value: v.join(`
`),
        position: y,
        pageIndex: _ - 1,
        rect: h.slice(0),
        rotation: f,
        id: g,
        deleted: !1
      };
    }
    const a = super.deserialize(e, n, i);
    return w(a, tn, e.fontSize), w(a, Cn, Z.makeHexColor(...e.color)), w(a, Qe, A(l = Nt, hh, ym).call(l, e.value)), a.annotationElementId = e.id || null, w(a, wo, r), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const n = Nt._internalPadding * this.parentScale, i = this.getRect(n, n), r = It._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : o(this, Cn)), a = {
      annotationType: St.FREETEXT,
      color: r,
      fontSize: o(this, tn),
      value: A(this, yf, Hw).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !A(this, bf, Uw).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const n = super.renderAnnotationElement(e);
    if (this.deleted)
      return n;
    const {
      style: i
    } = n;
    i.fontSize = `calc(${o(this, tn)}px * var(--scale-factor))`, i.color = o(this, Cn), n.replaceChildren();
    for (const a of o(this, Qe).split(`
`)) {
      const l = document.createElement("div");
      l.append(a ? document.createTextNode(a) : document.createElement("br")), n.append(l);
    }
    const r = Nt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(r, r),
      popupContent: o(this, Qe)
    }), n;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
sh = new WeakMap(), rh = new WeakMap(), ah = new WeakMap(), oh = new WeakMap(), lh = new WeakMap(), Cn = new WeakMap(), Qe = new WeakMap(), ch = new WeakMap(), tn = new WeakMap(), wo = new WeakMap(), gf = new WeakSet(), Nw = function(e) {
  const n = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--scale-factor))`, this.translate(0, -(r - o(this, tn)) * this.parentScale), w(this, tn, r), A(this, Ao, Uu).call(this);
  }, i = o(this, tn);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, mf = new WeakSet(), Bw = function(e) {
  const n = (r) => {
    w(this, Cn, this.editorDiv.style.color = r);
  }, i = o(this, Cn);
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, vf = new WeakSet(), $w = function() {
  var n;
  const e = [];
  this.editorDiv.normalize();
  for (const i of this.editorDiv.childNodes)
    e.push(A(n = Nt, _o, ju).call(n, i));
  return e.join(`
`);
}, Ao = new WeakSet(), Uu = function() {
  const [e, n] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, l = a.style.display, c = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = l, a.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / n) : (this.width = i.height / e, this.height = i.width / n), this.fixAndSetPosition();
}, _o = new WeakSet(), ju = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(yu, "");
}, Eo = new WeakSet(), zu = function() {
  if (this.editorDiv.replaceChildren(), !!o(this, Qe))
    for (const e of o(this, Qe).split(`
`)) {
      const n = document.createElement("div");
      n.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(n);
    }
}, yf = new WeakSet(), Hw = function() {
  return o(this, Qe).replaceAll(" ", " ");
}, hh = new WeakSet(), ym = function(e) {
  return e.replaceAll(" ", " ");
}, bf = new WeakSet(), Uw = function(e) {
  const {
    value: n,
    fontSize: i,
    color: r,
    pageIndex: a
  } = o(this, wo);
  return this._hasBeenMoved || e.value !== n || e.fontSize !== i || e.color.some((l, c) => l !== r[c]) || e.pageIndex !== a;
}, m(Nt, _o), m(Nt, hh), pt(Nt, "_freeTextDefaultContent", ""), pt(Nt, "_internalPadding", 0), pt(Nt, "_defaultColor", null), pt(Nt, "_defaultFontSize", 10), pt(Nt, "_type", "freetext"), pt(Nt, "_editorType", St.FREETEXT);
let vm = Nt;
var uh, bs, Tn, wf, jw, So, Vu, Af, zw, _f, Vw, dh, wm;
class bm {
  constructor(t, e = 0, n = 0, i = !0) {
    m(this, wf);
    m(this, So);
    m(this, Af);
    m(this, _f);
    m(this, dh);
    m(this, uh, void 0);
    m(this, bs, []);
    m(this, Tn, []);
    let r = 1 / 0, a = -1 / 0, l = 1 / 0, c = -1 / 0;
    const h = 10 ** -4;
    for (const {
      x: E,
      y: P,
      width: L,
      height: k
    } of t) {
      const F = Math.floor((E - e) / h) * h, I = Math.ceil((E + L + e) / h) * h, M = Math.floor((P - e) / h) * h, x = Math.ceil((P + k + e) / h) * h, T = [F, M, x, !0], D = [I, M, x, !1];
      o(this, bs).push(T, D), r = Math.min(r, F), a = Math.max(a, I), l = Math.min(l, M), c = Math.max(c, x);
    }
    const f = a - r + 2 * n, g = c - l + 2 * n, v = r - n, y = l - n, _ = o(this, bs).at(i ? -1 : -2), C = [_[0], _[2]];
    for (const E of o(this, bs)) {
      const [P, L, k] = E;
      E[0] = (P - v) / f, E[1] = (L - y) / g, E[2] = (k - y) / g;
    }
    w(this, uh, {
      x: v,
      y,
      width: f,
      height: g,
      lastPoint: C
    });
  }
  getOutlines() {
    o(this, bs).sort((e, n) => e[0] - n[0] || e[1] - n[1] || e[2] - n[2]);
    const t = [];
    for (const e of o(this, bs))
      e[3] ? (t.push(...A(this, dh, wm).call(this, e)), A(this, Af, zw).call(this, e)) : (A(this, _f, Vw).call(this, e), t.push(...A(this, dh, wm).call(this, e)));
    return A(this, wf, jw).call(this, t);
  }
}
uh = new WeakMap(), bs = new WeakMap(), Tn = new WeakMap(), wf = new WeakSet(), jw = function(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [l, c, u] = a;
    e.push([l, c, a], [l, u, a]);
  }
  e.sort((a, l) => a[1] - l[1] || a[0] - l[0]);
  for (let a = 0, l = e.length; a < l; a += 2) {
    const c = e[a][2], u = e[a + 1][2];
    c.push(u), u.push(c), n.add(c), n.add(u);
  }
  const i = [];
  let r;
  for (; n.size > 0; ) {
    const a = n.values().next().value;
    let [l, c, u, h, f] = a;
    n.delete(a);
    let g = l, v = c;
    for (r = [l, u], i.push(r); ; ) {
      let y;
      if (n.has(h))
        y = h;
      else if (n.has(f))
        y = f;
      else
        break;
      n.delete(y), [l, c, u, h, f] = y, g !== l && (r.push(g, v, l, v === c ? c : u), g = l), v = v === c ? u : c;
    }
    r.push(g, v);
  }
  return new Ek(i, o(this, uh));
}, So = new WeakSet(), Vu = function(t) {
  const e = o(this, Tn);
  let n = 0, i = e.length - 1;
  for (; n <= i; ) {
    const r = n + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? n = r + 1 : i = r - 1;
  }
  return i + 1;
}, Af = new WeakSet(), zw = function([, t, e]) {
  const n = A(this, So, Vu).call(this, t);
  o(this, Tn).splice(n, 0, [t, e]);
}, _f = new WeakSet(), Vw = function([, t, e]) {
  const n = A(this, So, Vu).call(this, t);
  for (let i = n; i < o(this, Tn).length; i++) {
    const [r, a] = o(this, Tn)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      o(this, Tn).splice(i, 1);
      return;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    const [r, a] = o(this, Tn)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      o(this, Tn).splice(i, 1);
      return;
    }
  }
}, dh = new WeakSet(), wm = function(t) {
  const [e, n, i] = t, r = [[e, n, i]], a = A(this, So, Vu).call(this, i);
  for (let l = 0; l < a; l++) {
    const [c, u] = o(this, Tn)[l];
    for (let h = 0, f = r.length; h < f; h++) {
      const [, g, v] = r[h];
      if (!(u <= g || v <= c)) {
        if (g >= c) {
          if (v > u)
            r[h][1] = u;
          else {
            if (f === 1)
              return [];
            r.splice(h, 1), h--, f--;
          }
          continue;
        }
        r[h][2] = c, v > u && r.push([e, u, v]);
      }
    }
  }
  return r;
};
class Gw {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof _m;
  }
}
var fh, xo;
class Ek extends Gw {
  constructor(e, n) {
    super();
    m(this, fh, void 0);
    m(this, xo, void 0);
    w(this, xo, e), w(this, fh, n);
  }
  toSVGPath() {
    const e = [];
    for (const n of o(this, xo)) {
      let [i, r] = n;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < n.length; a += 2) {
        const l = n[a], c = n[a + 1];
        l === i ? (e.push(`V${c}`), r = c) : c === r && (e.push(`H${l}`), i = l);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, n, i, r], a) {
    const l = [], c = i - e, u = r - n;
    for (const h of o(this, xo)) {
      const f = new Array(h.length);
      for (let g = 0; g < h.length; g += 2)
        f[g] = e + h[g] * c, f[g + 1] = r - h[g + 1] * u;
      l.push(f);
    }
    return l;
  }
  get box() {
    return o(this, fh);
  }
}
fh = new WeakMap(), xo = new WeakMap();
var Xn, Ii, Co, To, Yn, _t, Lr, kr, ph, gh, Po, Ro, ws, mh, Ef, Sf, vh, Am;
const fi = class fi {
  constructor({
    x: t,
    y: e
  }, n, i, r, a, l = 0) {
    m(this, vh);
    m(this, Xn, void 0);
    m(this, Ii, []);
    m(this, Co, void 0);
    m(this, To, void 0);
    m(this, Yn, []);
    m(this, _t, new Float64Array(18));
    m(this, Lr, void 0);
    m(this, kr, void 0);
    m(this, ph, void 0);
    m(this, gh, void 0);
    m(this, Po, void 0);
    m(this, Ro, void 0);
    m(this, ws, []);
    w(this, Xn, n), w(this, Ro, r * i), w(this, To, a), o(this, _t).set([NaN, NaN, NaN, NaN, t, e], 6), w(this, Co, l), w(this, gh, o(fi, mh) * i), w(this, ph, o(fi, Sf) * i), w(this, Po, i), o(this, ws).push(t, e);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(o(this, _t)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var T;
    w(this, Lr, t), w(this, kr, e);
    const [n, i, r, a] = o(this, Xn);
    let [l, c, u, h] = o(this, _t).subarray(8, 12);
    const f = t - u, g = e - h, v = Math.hypot(f, g);
    if (v < o(this, ph))
      return !1;
    const y = v - o(this, gh), _ = y / v, C = _ * f, E = _ * g;
    let P = l, L = c;
    l = u, c = h, u += C, h += E, (T = o(this, ws)) == null || T.push(t, e);
    const k = -E / y, F = C / y, I = k * o(this, Ro), M = F * o(this, Ro);
    return o(this, _t).set(o(this, _t).subarray(2, 8), 0), o(this, _t).set([u + I, h + M], 4), o(this, _t).set(o(this, _t).subarray(14, 18), 12), o(this, _t).set([u - I, h - M], 16), isNaN(o(this, _t)[6]) ? (o(this, Yn).length === 0 && (o(this, _t).set([l + I, c + M], 2), o(this, Yn).push(NaN, NaN, NaN, NaN, (l + I - n) / r, (c + M - i) / a), o(this, _t).set([l - I, c - M], 14), o(this, Ii).push(NaN, NaN, NaN, NaN, (l - I - n) / r, (c - M - i) / a)), o(this, _t).set([P, L, l, c, u, h], 6), !this.isEmpty()) : (o(this, _t).set([P, L, l, c, u, h], 6), Math.abs(Math.atan2(L - c, P - l) - Math.atan2(E, C)) < Math.PI / 2 ? ([l, c, u, h] = o(this, _t).subarray(2, 6), o(this, Yn).push(NaN, NaN, NaN, NaN, ((l + u) / 2 - n) / r, ((c + h) / 2 - i) / a), [l, c, P, L] = o(this, _t).subarray(14, 18), o(this, Ii).push(NaN, NaN, NaN, NaN, ((P + l) / 2 - n) / r, ((L + c) / 2 - i) / a), !0) : ([P, L, l, c, u, h] = o(this, _t).subarray(0, 6), o(this, Yn).push(((P + 5 * l) / 6 - n) / r, ((L + 5 * c) / 6 - i) / a, ((5 * l + u) / 6 - n) / r, ((5 * c + h) / 6 - i) / a, ((l + u) / 2 - n) / r, ((c + h) / 2 - i) / a), [u, h, l, c, P, L] = o(this, _t).subarray(12, 18), o(this, Ii).push(((P + 5 * l) / 6 - n) / r, ((L + 5 * c) / 6 - i) / a, ((5 * l + u) / 6 - n) / r, ((5 * c + h) / 6 - i) / a, ((l + u) / 2 - n) / r, ((c + h) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = o(this, Yn), e = o(this, Ii), n = o(this, _t).subarray(4, 6), i = o(this, _t).subarray(16, 18), [r, a, l, c] = o(this, Xn), [u, h, f, g] = A(this, vh, Am).call(this);
    if (isNaN(o(this, _t)[6]) && !this.isEmpty())
      return `M${(o(this, _t)[2] - r) / l} ${(o(this, _t)[3] - a) / c} L${(o(this, _t)[4] - r) / l} ${(o(this, _t)[5] - a) / c} L${u} ${h} L${f} ${g} L${(o(this, _t)[16] - r) / l} ${(o(this, _t)[17] - a) / c} L${(o(this, _t)[14] - r) / l} ${(o(this, _t)[15] - a) / c} Z`;
    const v = [];
    v.push(`M${t[4]} ${t[5]}`);
    for (let y = 6; y < t.length; y += 6)
      isNaN(t[y]) ? v.push(`L${t[y + 4]} ${t[y + 5]}`) : v.push(`C${t[y]} ${t[y + 1]} ${t[y + 2]} ${t[y + 3]} ${t[y + 4]} ${t[y + 5]}`);
    v.push(`L${(n[0] - r) / l} ${(n[1] - a) / c} L${u} ${h} L${f} ${g} L${(i[0] - r) / l} ${(i[1] - a) / c}`);
    for (let y = e.length - 6; y >= 6; y -= 6)
      isNaN(e[y]) ? v.push(`L${e[y + 4]} ${e[y + 5]}`) : v.push(`C${e[y]} ${e[y + 1]} ${e[y + 2]} ${e[y + 3]} ${e[y + 4]} ${e[y + 5]}`);
    return v.push(`L${e[4]} ${e[5]} Z`), v.join(" ");
  }
  getOutlines() {
    var E;
    const t = o(this, Yn), e = o(this, Ii), n = o(this, _t), i = n.subarray(4, 6), r = n.subarray(16, 18), [a, l, c, u] = o(this, Xn), h = new Float64Array((((E = o(this, ws)) == null ? void 0 : E.length) ?? 0) + 2);
    for (let P = 0, L = h.length - 2; P < L; P += 2)
      h[P] = (o(this, ws)[P] - a) / c, h[P + 1] = (o(this, ws)[P + 1] - l) / u;
    h[h.length - 2] = (o(this, Lr) - a) / c, h[h.length - 1] = (o(this, kr) - l) / u;
    const [f, g, v, y] = A(this, vh, Am).call(this);
    if (isNaN(n[6]) && !this.isEmpty()) {
      const P = new Float64Array(36);
      return P.set([NaN, NaN, NaN, NaN, (n[2] - a) / c, (n[3] - l) / u, NaN, NaN, NaN, NaN, (n[4] - a) / c, (n[5] - l) / u, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, v, y, NaN, NaN, NaN, NaN, (n[16] - a) / c, (n[17] - l) / u, NaN, NaN, NaN, NaN, (n[14] - a) / c, (n[15] - l) / u], 0), new _m(P, h, o(this, Xn), o(this, Po), o(this, Co), o(this, To));
    }
    const _ = new Float64Array(o(this, Yn).length + 24 + o(this, Ii).length);
    let C = t.length;
    for (let P = 0; P < C; P += 2) {
      if (isNaN(t[P])) {
        _[P] = _[P + 1] = NaN;
        continue;
      }
      _[P] = t[P], _[P + 1] = t[P + 1];
    }
    _.set([NaN, NaN, NaN, NaN, (i[0] - a) / c, (i[1] - l) / u, NaN, NaN, NaN, NaN, f, g, NaN, NaN, NaN, NaN, v, y, NaN, NaN, NaN, NaN, (r[0] - a) / c, (r[1] - l) / u], C), C += 24;
    for (let P = e.length - 6; P >= 6; P -= 6)
      for (let L = 0; L < 6; L += 2) {
        if (isNaN(e[P + L])) {
          _[C] = _[C + 1] = NaN, C += 2;
          continue;
        }
        _[C] = e[P + L], _[C + 1] = e[P + L + 1], C += 2;
      }
    return _.set([NaN, NaN, NaN, NaN, e[4], e[5]], C), new _m(_, h, o(this, Xn), o(this, Po), o(this, Co), o(this, To));
  }
};
Xn = new WeakMap(), Ii = new WeakMap(), Co = new WeakMap(), To = new WeakMap(), Yn = new WeakMap(), _t = new WeakMap(), Lr = new WeakMap(), kr = new WeakMap(), ph = new WeakMap(), gh = new WeakMap(), Po = new WeakMap(), Ro = new WeakMap(), ws = new WeakMap(), mh = new WeakMap(), Ef = new WeakMap(), Sf = new WeakMap(), vh = new WeakSet(), Am = function() {
  const t = o(this, _t).subarray(4, 6), e = o(this, _t).subarray(16, 18), [n, i, r, a] = o(this, Xn);
  return [(o(this, Lr) + (t[0] - e[0]) / 2 - n) / r, (o(this, kr) + (t[1] - e[1]) / 2 - i) / a, (o(this, Lr) + (e[0] - t[0]) / 2 - n) / r, (o(this, kr) + (e[1] - t[1]) / 2 - i) / a];
}, m(fi, mh, 8), m(fi, Ef, 2), m(fi, Sf, o(fi, mh) + o(fi, Ef));
let dd = fi;
var Lo, Ir, Mi, yh, en, bh, Yt, Mr, wl, Fr, Al, xf, Ww;
class _m extends Gw {
  constructor(e, n, i, r, a, l) {
    super();
    m(this, Mr);
    m(this, Fr);
    m(this, xf);
    m(this, Lo, void 0);
    m(this, Ir, null);
    m(this, Mi, void 0);
    m(this, yh, void 0);
    m(this, en, void 0);
    m(this, bh, void 0);
    m(this, Yt, void 0);
    w(this, Yt, e), w(this, en, n), w(this, Lo, i), w(this, bh, r), w(this, Mi, a), w(this, yh, l), A(this, xf, Ww).call(this, l);
    const {
      x: c,
      y: u,
      width: h,
      height: f
    } = o(this, Ir);
    for (let g = 0, v = e.length; g < v; g += 2)
      e[g] = (e[g] - c) / h, e[g + 1] = (e[g + 1] - u) / f;
    for (let g = 0, v = n.length; g < v; g += 2)
      n[g] = (n[g] - c) / h, n[g + 1] = (n[g + 1] - u) / f;
  }
  toSVGPath() {
    const e = [`M${o(this, Yt)[4]} ${o(this, Yt)[5]}`];
    for (let n = 6, i = o(this, Yt).length; n < i; n += 6) {
      if (isNaN(o(this, Yt)[n])) {
        e.push(`L${o(this, Yt)[n + 4]} ${o(this, Yt)[n + 5]}`);
        continue;
      }
      e.push(`C${o(this, Yt)[n]} ${o(this, Yt)[n + 1]} ${o(this, Yt)[n + 2]} ${o(this, Yt)[n + 3]} ${o(this, Yt)[n + 4]} ${o(this, Yt)[n + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, n, i, r], a) {
    const l = i - e, c = r - n;
    let u, h;
    switch (a) {
      case 0:
        u = A(this, Mr, wl).call(this, o(this, Yt), e, r, l, -c), h = A(this, Mr, wl).call(this, o(this, en), e, r, l, -c);
        break;
      case 90:
        u = A(this, Fr, Al).call(this, o(this, Yt), e, n, l, c), h = A(this, Fr, Al).call(this, o(this, en), e, n, l, c);
        break;
      case 180:
        u = A(this, Mr, wl).call(this, o(this, Yt), i, n, -l, c), h = A(this, Mr, wl).call(this, o(this, en), i, n, -l, c);
        break;
      case 270:
        u = A(this, Fr, Al).call(this, o(this, Yt), i, r, -l, -c), h = A(this, Fr, Al).call(this, o(this, en), i, r, -l, -c);
        break;
    }
    return {
      outline: Array.from(u),
      points: [Array.from(h)]
    };
  }
  get box() {
    return o(this, Ir);
  }
  getNewOutline(e, n) {
    const {
      x: i,
      y: r,
      width: a,
      height: l
    } = o(this, Ir), [c, u, h, f] = o(this, Lo), g = a * h, v = l * f, y = i * h + c, _ = r * f + u, C = new dd({
      x: o(this, en)[0] * g + y,
      y: o(this, en)[1] * v + _
    }, o(this, Lo), o(this, bh), e, o(this, yh), n ?? o(this, Mi));
    for (let E = 2; E < o(this, en).length; E += 2)
      C.add({
        x: o(this, en)[E] * g + y,
        y: o(this, en)[E + 1] * v + _
      });
    return C.getOutlines();
  }
}
Lo = new WeakMap(), Ir = new WeakMap(), Mi = new WeakMap(), yh = new WeakMap(), en = new WeakMap(), bh = new WeakMap(), Yt = new WeakMap(), Mr = new WeakSet(), wl = function(e, n, i, r, a) {
  const l = new Float64Array(e.length);
  for (let c = 0, u = e.length; c < u; c += 2)
    l[c] = n + e[c] * r, l[c + 1] = i + e[c + 1] * a;
  return l;
}, Fr = new WeakSet(), Al = function(e, n, i, r, a) {
  const l = new Float64Array(e.length);
  for (let c = 0, u = e.length; c < u; c += 2)
    l[c] = n + e[c + 1] * r, l[c + 1] = i + e[c] * a;
  return l;
}, xf = new WeakSet(), Ww = function(e) {
  const n = o(this, Yt);
  let i = n[4], r = n[5], a = i, l = r, c = i, u = r, h = i, f = r;
  const g = e ? Math.max : Math.min;
  for (let E = 6, P = n.length; E < P; E += 6) {
    if (isNaN(n[E]))
      a = Math.min(a, n[E + 4]), l = Math.min(l, n[E + 5]), c = Math.max(c, n[E + 4]), u = Math.max(u, n[E + 5]), f < n[E + 5] ? (h = n[E + 4], f = n[E + 5]) : f === n[E + 5] && (h = g(h, n[E + 4]));
    else {
      const L = Z.bezierBoundingBox(i, r, ...n.slice(E, E + 6));
      a = Math.min(a, L[0]), l = Math.min(l, L[1]), c = Math.max(c, L[2]), u = Math.max(u, L[3]), f < L[3] ? (h = L[2], f = L[3]) : f === L[3] && (h = g(h, L[2]));
    }
    i = n[E + 4], r = n[E + 5];
  }
  const v = a - o(this, Mi), y = l - o(this, Mi), _ = c - a + 2 * o(this, Mi), C = u - l + 2 * o(this, Mi);
  w(this, Ir, {
    x: v,
    y,
    width: _,
    height: C,
    lastPoint: [h, f]
  });
};
var wh, Ah, Pn, Dr, ko, ae, _h, Io, Eh, Sh, Rn, Mo, xh, Em, Ch, Sm, Cf, qw, Fi, $s, Tf, Xw, Kn, ts;
const pi = class pi {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, xh);
    m(this, Ch);
    m(this, Cf);
    m(this, Fi);
    m(this, Tf);
    m(this, Kn);
    m(this, wh, A(this, Cf, qw).bind(this));
    m(this, Ah, A(this, Tf, Xw).bind(this));
    m(this, Pn, null);
    m(this, Dr, null);
    m(this, ko, void 0);
    m(this, ae, null);
    m(this, _h, !1);
    m(this, Io, !1);
    m(this, Eh, null);
    m(this, Sh, void 0);
    m(this, Rn, null);
    m(this, Mo, void 0);
    var n;
    t ? (w(this, Io, !1), w(this, Mo, ht.HIGHLIGHT_COLOR), w(this, Eh, t)) : (w(this, Io, !0), w(this, Mo, ht.HIGHLIGHT_DEFAULT_COLOR)), w(this, Rn, (t == null ? void 0 : t._uiManager) || e), w(this, Sh, o(this, Rn)._eventBus), w(this, ko, (t == null ? void 0 : t.color) || ((n = o(this, Rn)) == null ? void 0 : n.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return Ct(this, "_keyboardManager", new nu([[["Escape", "mac+Escape"], pi.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], pi.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], pi.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], pi.prototype._moveToPrevious], [["Home", "mac+Home"], pi.prototype._moveToBeginning], [["End", "mac+End"], pi.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = w(this, Pn, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = o(this, Rn)._signal;
    t.addEventListener("click", A(this, Fi, $s).bind(this), {
      signal: e
    }), t.addEventListener("keydown", o(this, wh), {
      signal: e
    });
    const n = w(this, Dr, document.createElement("span"));
    return n.className = "swatch", n.setAttribute("aria-hidden", !0), n.style.backgroundColor = o(this, ko), t.append(n), t;
  }
  renderMainDropdown() {
    const t = w(this, ae, A(this, xh, Em).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === o(this, Pn)) {
      A(this, Fi, $s).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && A(this, Ch, Sm).call(this, e, t);
  }
  _moveToNext(t) {
    var e, n;
    if (!o(this, Kn, ts)) {
      A(this, Fi, $s).call(this, t);
      return;
    }
    if (t.target === o(this, Pn)) {
      (e = o(this, ae).firstChild) == null || e.focus();
      return;
    }
    (n = t.target.nextSibling) == null || n.focus();
  }
  _moveToPrevious(t) {
    var e, n;
    if (t.target === ((e = o(this, ae)) == null ? void 0 : e.firstChild) || t.target === o(this, Pn)) {
      o(this, Kn, ts) && this._hideDropdownFromKeyboard();
      return;
    }
    o(this, Kn, ts) || A(this, Fi, $s).call(this, t), (n = t.target.previousSibling) == null || n.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!o(this, Kn, ts)) {
      A(this, Fi, $s).call(this, t);
      return;
    }
    (e = o(this, ae).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!o(this, Kn, ts)) {
      A(this, Fi, $s).call(this, t);
      return;
    }
    (e = o(this, ae).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t;
    (t = o(this, ae)) == null || t.classList.add("hidden"), window.removeEventListener("pointerdown", o(this, Ah));
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!o(this, Io)) {
      if (!o(this, Kn, ts)) {
        (t = o(this, Eh)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), o(this, Pn).focus({
        preventScroll: !0,
        focusVisible: o(this, _h)
      });
    }
  }
  updateColor(t) {
    if (o(this, Dr) && (o(this, Dr).style.backgroundColor = t), !o(this, ae))
      return;
    const e = o(this, Rn).highlightColors.values();
    for (const n of o(this, ae).children)
      n.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    var t, e;
    (t = o(this, Pn)) == null || t.remove(), w(this, Pn, null), w(this, Dr, null), (e = o(this, ae)) == null || e.remove(), w(this, ae, null);
  }
};
wh = new WeakMap(), Ah = new WeakMap(), Pn = new WeakMap(), Dr = new WeakMap(), ko = new WeakMap(), ae = new WeakMap(), _h = new WeakMap(), Io = new WeakMap(), Eh = new WeakMap(), Sh = new WeakMap(), Rn = new WeakMap(), Mo = new WeakMap(), xh = new WeakSet(), Em = function() {
  const t = document.createElement("div"), e = o(this, Rn)._signal;
  t.addEventListener("contextmenu", We, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [n, i] of o(this, Rn).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = n, r.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${n}`);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.setAttribute("aria-selected", i === o(this, ko)), r.addEventListener("click", A(this, Ch, Sm).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", o(this, wh), {
    signal: e
  }), t;
}, Ch = new WeakSet(), Sm = function(t, e) {
  e.stopPropagation(), o(this, Sh).dispatch("switchannotationeditorparams", {
    source: this,
    type: o(this, Mo),
    value: t
  });
}, Cf = new WeakSet(), qw = function(t) {
  pi._keyboardManager.exec(this, t);
}, Fi = new WeakSet(), $s = function(t) {
  if (o(this, Kn, ts)) {
    this.hideDropdown();
    return;
  }
  if (w(this, _h, t.detail === 0), window.addEventListener("pointerdown", o(this, Ah), {
    signal: o(this, Rn)._signal
  }), o(this, ae)) {
    o(this, ae).classList.remove("hidden");
    return;
  }
  const e = w(this, ae, A(this, xh, Em).call(this));
  o(this, Pn).append(e);
}, Tf = new WeakSet(), Xw = function(t) {
  var e;
  (e = o(this, ae)) != null && e.contains(t.target) || this.hideDropdown();
}, Kn = new WeakSet(), ts = function() {
  return o(this, ae) && !o(this, ae).classList.contains("hidden");
};
let fd = pi;
var Fo, Th, As, Or, Do, dn, Ph, Rh, Nr, Ln, De, nn, Pf, Oo, Br, oe, No, Zn, Lh, kh, xm, Ih, Cm, Rf, Yw, Lf, Kw, kf, Zw, Mh, Tm, $r, _l, _s, _a, If, Jw, Bo, Gu, Hr, El, Mf, Qw, Ff, t1, Df, e1, Of, n1;
const xt = class xt extends It {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, kh);
    m(this, Ih);
    m(this, Rf);
    m(this, Lf);
    m(this, kf);
    m(this, Mh);
    m(this, $r);
    m(this, If);
    m(this, Bo);
    m(this, Hr);
    m(this, Mf);
    m(this, Ff);
    m(this, Fo, null);
    m(this, Th, 0);
    m(this, As, void 0);
    m(this, Or, null);
    m(this, Do, null);
    m(this, dn, null);
    m(this, Ph, null);
    m(this, Rh, 0);
    m(this, Nr, null);
    m(this, Ln, null);
    m(this, De, null);
    m(this, nn, !1);
    m(this, Pf, A(this, If, Jw).bind(this));
    m(this, Oo, null);
    m(this, Br, void 0);
    m(this, oe, null);
    m(this, No, "");
    m(this, Zn, void 0);
    m(this, Lh, "");
    this.color = e.color || xt._defaultColor, w(this, Zn, e.thickness || xt._defaultThickness), w(this, Br, e.opacity || xt._defaultOpacity), w(this, As, e.boxes || null), w(this, Lh, e.methodOfCreation || ""), w(this, No, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (w(this, nn, !0), A(this, Ih, Cm).call(this, e), A(this, $r, _l).call(this)) : (w(this, Fo, e.anchorNode), w(this, Th, e.anchorOffset), w(this, Ph, e.focusNode), w(this, Rh, e.focusOffset), A(this, kh, xm).call(this), A(this, $r, _l).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = xt.prototype;
    return Ct(this, "_keyboardManager", new nu([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: o(this, nn) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: o(this, Zn),
      methodOfCreation: o(this, Lh)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, n) {
    var i;
    It.initialize(e, n), xt._defaultColor || (xt._defaultColor = ((i = n.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case ht.HIGHLIGHT_DEFAULT_COLOR:
        xt._defaultColor = n;
        break;
      case ht.HIGHLIGHT_THICKNESS:
        xt._defaultThickness = n;
        break;
    }
  }
  translateInPage(e, n) {
  }
  get toolbarPosition() {
    return o(this, Oo);
  }
  updateParams(e, n) {
    switch (e) {
      case ht.HIGHLIGHT_COLOR:
        A(this, Rf, Yw).call(this, n);
        break;
      case ht.HIGHLIGHT_THICKNESS:
        A(this, Lf, Kw).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ht.HIGHLIGHT_DEFAULT_COLOR, xt._defaultColor], [ht.HIGHLIGHT_THICKNESS, xt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[ht.HIGHLIGHT_COLOR, this.color || xt._defaultColor], [ht.HIGHLIGHT_THICKNESS, o(this, Zn) || xt._defaultThickness], [ht.HIGHLIGHT_FREE, o(this, nn)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (w(this, Do, new fd({
      editor: this
    })), e.addColorPicker(o(this, Do))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, Hr, El).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, n) {
    return super.getRect(e, n, A(this, Hr, El).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    A(this, Mh, Tm).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, $r, _l).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let n = !1;
    this.parent && !e ? A(this, Mh, Tm).call(this) : e && (A(this, $r, _l).call(this, e), n = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), n && this.select();
  }
  rotate(e) {
    var r, a, l;
    const {
      drawLayer: n
    } = this.parent;
    let i;
    o(this, nn) ? (e = (e - this.rotation + 360) % 360, i = A(r = xt, _s, _a).call(r, o(this, Ln).box, e)) : i = A(a = xt, _s, _a).call(a, this, e), n.rotate(o(this, De), e), n.rotate(o(this, oe), e), n.updateBox(o(this, De), i), n.updateBox(o(this, oe), A(l = xt, _s, _a).call(l, o(this, dn).box, e));
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    o(this, No) && (e.setAttribute("aria-label", o(this, No)), e.setAttribute("role", "mark")), o(this, nn) ? e.classList.add("free") : this.div.addEventListener("keydown", o(this, Pf), {
      signal: this._uiManager._signal
    });
    const n = w(this, Nr, document.createElement("div"));
    e.append(n), n.setAttribute("aria-hidden", "true"), n.className = "internal", n.style.clipPath = o(this, Or);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), ld(this, o(this, Nr), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.parent.drawLayer.addClass(o(this, oe), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(o(this, oe), "hovered");
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, Bo, Gu).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, Bo, Gu).call(this, !1);
        break;
    }
  }
  select() {
    var e, n;
    super.select(), o(this, oe) && ((e = this.parent) == null || e.drawLayer.removeClass(o(this, oe), "hovered"), (n = this.parent) == null || n.drawLayer.addClass(o(this, oe), "selected"));
  }
  unselect() {
    var e;
    super.unselect(), o(this, oe) && ((e = this.parent) == null || e.drawLayer.removeClass(o(this, oe), "selected"), o(this, nn) || A(this, Bo, Gu).call(this, !1));
  }
  get _mustFixPosition() {
    return !o(this, nn);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.show(o(this, De), e), this.parent.drawLayer.show(o(this, oe), e));
  }
  static startHighlighting(e, n, {
    target: i,
    x: r,
    y: a
  }) {
    const {
      x: l,
      y: c,
      width: u,
      height: h
    } = i.getBoundingClientRect(), f = (C) => {
      A(this, Df, e1).call(this, e, C);
    }, g = e._signal, v = {
      capture: !0,
      passive: !1,
      signal: g
    }, y = (C) => {
      C.preventDefault(), C.stopPropagation();
    }, _ = (C) => {
      i.removeEventListener("pointermove", f), window.removeEventListener("blur", _), window.removeEventListener("pointerup", _), window.removeEventListener("pointerdown", y, v), window.removeEventListener("contextmenu", We), A(this, Of, n1).call(this, e, C);
    };
    window.addEventListener("blur", _, {
      signal: g
    }), window.addEventListener("pointerup", _, {
      signal: g
    }), window.addEventListener("pointerdown", y, v), window.addEventListener("contextmenu", We, {
      signal: g
    }), i.addEventListener("pointermove", f, {
      signal: g
    }), this._freeHighlight = new dd({
      x: r,
      y: a
    }, [l, c, u, h], e.scale, this._defaultThickness / 2, n, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(e, n, i) {
    var _;
    const r = super.deserialize(e, n, i), {
      rect: [a, l, c, u],
      color: h,
      quadPoints: f
    } = e;
    r.color = Z.makeHexColor(...h), w(r, Br, e.opacity);
    const [g, v] = r.pageDimensions;
    r.width = (c - a) / g, r.height = (u - l) / v;
    const y = w(r, As, []);
    for (let C = 0; C < f.length; C += 8)
      y.push({
        x: (f[4] - c) / g,
        y: (u - (1 - f[C + 5])) / v,
        width: (f[C + 2] - f[C]) / g,
        height: (f[C + 5] - f[C + 1]) / v
      });
    return A(_ = r, kh, xm).call(_), r;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    const n = this.getRect(0, 0), i = It._colorManager.convert(this.color);
    return {
      annotationType: St.HIGHLIGHT,
      color: i,
      opacity: o(this, Br),
      thickness: o(this, Zn),
      quadPoints: A(this, Mf, Qw).call(this),
      outlines: A(this, Ff, t1).call(this, n),
      pageIndex: this.pageIndex,
      rect: n,
      rotation: A(this, Hr, El).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Fo = new WeakMap(), Th = new WeakMap(), As = new WeakMap(), Or = new WeakMap(), Do = new WeakMap(), dn = new WeakMap(), Ph = new WeakMap(), Rh = new WeakMap(), Nr = new WeakMap(), Ln = new WeakMap(), De = new WeakMap(), nn = new WeakMap(), Pf = new WeakMap(), Oo = new WeakMap(), Br = new WeakMap(), oe = new WeakMap(), No = new WeakMap(), Zn = new WeakMap(), Lh = new WeakMap(), kh = new WeakSet(), xm = function() {
  const e = new bm(o(this, As), 1e-3);
  w(this, Ln, e.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = o(this, Ln).box;
  const n = new bm(o(this, As), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  w(this, dn, n.getOutlines());
  const {
    lastPoint: i
  } = o(this, dn).box;
  w(this, Oo, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, Ih = new WeakSet(), Cm = function({
  highlightOutlines: e,
  highlightId: n,
  clipPathId: i
}) {
  var f, g;
  if (w(this, Ln, e), w(this, dn, e.getNewOutline(o(this, Zn) / 2 + 1.5, 25e-4)), n >= 0)
    w(this, De, n), w(this, Or, i), this.parent.drawLayer.finalizeLine(n, e), w(this, oe, this.parent.drawLayer.highlightOutline(o(this, dn)));
  else if (this.parent) {
    const v = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(o(this, De), e), this.parent.drawLayer.updateBox(o(this, De), A(f = xt, _s, _a).call(f, o(this, Ln).box, (v - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(o(this, oe), o(this, dn)), this.parent.drawLayer.updateBox(o(this, oe), A(g = xt, _s, _a).call(g, o(this, dn).box, v));
  }
  const {
    x: a,
    y: l,
    width: c,
    height: u
  } = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = l, this.width = c, this.height = u;
      break;
    case 90: {
      const [v, y] = this.parentDimensions;
      this.x = l, this.y = 1 - a, this.width = c * y / v, this.height = u * v / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - l, this.width = c, this.height = u;
      break;
    case 270: {
      const [v, y] = this.parentDimensions;
      this.x = 1 - l, this.y = a, this.width = c * y / v, this.height = u * v / y;
      break;
    }
  }
  const {
    lastPoint: h
  } = o(this, dn).box;
  w(this, Oo, [(h[0] - a) / c, (h[1] - l) / u]);
}, Rf = new WeakSet(), Yw = function(e) {
  const n = (r) => {
    var a, l;
    this.color = r, (a = this.parent) == null || a.drawLayer.changeColor(o(this, De), r), (l = o(this, Do)) == null || l.updateColor(r);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, Lf = new WeakSet(), Kw = function(e) {
  const n = o(this, Zn), i = (r) => {
    w(this, Zn, r), A(this, kf, Zw).call(this, r);
  };
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, kf = new WeakSet(), Zw = function(e) {
  if (!o(this, nn))
    return;
  A(this, Ih, Cm).call(this, {
    highlightOutlines: o(this, Ln).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [n, i] = this.parentDimensions;
  this.setDims(this.width * n, this.height * i);
}, Mh = new WeakSet(), Tm = function() {
  o(this, De) === null || !this.parent || (this.parent.drawLayer.remove(o(this, De)), w(this, De, null), this.parent.drawLayer.remove(o(this, oe)), w(this, oe, null));
}, $r = new WeakSet(), _l = function(e = this.parent) {
  o(this, De) === null && ({
    id: qe(this, De)._,
    clipPathId: qe(this, Or)._
  } = e.drawLayer.highlight(o(this, Ln), this.color, o(this, Br)), w(this, oe, e.drawLayer.highlightOutline(o(this, dn))), o(this, Nr) && (o(this, Nr).style.clipPath = o(this, Or)));
}, _s = new WeakSet(), _a = function({
  x: e,
  y: n,
  width: i,
  height: r
}, a) {
  switch (a) {
    case 90:
      return {
        x: 1 - n - r,
        y: e,
        width: r,
        height: i
      };
    case 180:
      return {
        x: 1 - e - i,
        y: 1 - n - r,
        width: i,
        height: r
      };
    case 270:
      return {
        x: n,
        y: 1 - e - i,
        width: r,
        height: i
      };
  }
  return {
    x: e,
    y: n,
    width: i,
    height: r
  };
}, If = new WeakSet(), Jw = function(e) {
  xt._keyboardManager.exec(this, e);
}, Bo = new WeakSet(), Gu = function(e) {
  if (!o(this, Fo))
    return;
  const n = window.getSelection();
  e ? n.setPosition(o(this, Fo), o(this, Th)) : n.setPosition(o(this, Ph), o(this, Rh));
}, Hr = new WeakSet(), El = function() {
  return o(this, nn) ? this.rotation : 0;
}, Mf = new WeakSet(), Qw = function() {
  if (o(this, nn))
    return null;
  const [e, n] = this.pageDimensions, i = o(this, As), r = new Float32Array(i.length * 8);
  let a = 0;
  for (const {
    x: l,
    y: c,
    width: u,
    height: h
  } of i) {
    const f = l * e, g = (1 - c - h) * n;
    r[a] = r[a + 4] = f, r[a + 1] = r[a + 3] = g, r[a + 2] = r[a + 6] = f + u * e, r[a + 5] = r[a + 7] = g + h * n, a += 8;
  }
  return r;
}, Ff = new WeakSet(), t1 = function(e) {
  return o(this, Ln).serialize(e, A(this, Hr, El).call(this));
}, Df = new WeakSet(), e1 = function(e, n) {
  this._freeHighlight.add(n) && e.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Of = new WeakSet(), n1 = function(e, n) {
  this._freeHighlight.isEmpty() ? e.drawLayer.removeFreeHighlight(this._freeHighlightId) : e.createAndAddNewEditor(n, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, m(xt, _s), m(xt, Df), m(xt, Of), pt(xt, "_defaultColor", null), pt(xt, "_defaultOpacity", 1), pt(xt, "_defaultThickness", 12), pt(xt, "_l10nPromise"), pt(xt, "_type", "highlight"), pt(xt, "_editorType", St.HIGHLIGHT), pt(xt, "_freeHighlightId", -1), pt(xt, "_freeHighlight", null), pt(xt, "_freeHighlightClipId", "");
let pd = xt;
var Ur, jr, Fh, Dh, Oh, zr, Jn, Di, fn, Vr, Gr, Oi, Wr, qr, Es, Nf, i1, Bf, s1, $f, r1, Hf, a1, Nh, Rm, Uf, o1, Bh, Lm, jf, l1, zf, c1, Vf, h1, Gf, u1, Wf, d1, Ni, Hs, $h, km, $o, Wu, Ho, qu, Ss, Ea, Hh, Im, Uo, Xu, qf, f1, Uh, Mm, Xf, p1, Yf, g1, jh, Fm, jo, Yu, Xr, Sl;
const Ut = class Ut extends It {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, Nf);
    m(this, Bf);
    m(this, $f);
    m(this, Hf);
    m(this, Nh);
    m(this, Uf);
    m(this, Bh);
    m(this, jf);
    m(this, zf);
    m(this, Vf);
    m(this, Gf);
    m(this, Wf);
    m(this, Ni);
    m(this, $h);
    m(this, $o);
    m(this, Ho);
    m(this, Ss);
    m(this, Hh);
    m(this, Uo);
    m(this, Yf);
    m(this, jh);
    m(this, jo);
    m(this, Xr);
    m(this, Ur, 0);
    m(this, jr, 0);
    m(this, Fh, this.canvasPointermove.bind(this));
    m(this, Dh, this.canvasPointerleave.bind(this));
    m(this, Oh, this.canvasPointerup.bind(this));
    m(this, zr, this.canvasPointerdown.bind(this));
    m(this, Jn, null);
    m(this, Di, new Path2D());
    m(this, fn, !1);
    m(this, Vr, !1);
    m(this, Gr, !1);
    m(this, Oi, null);
    m(this, Wr, 0);
    m(this, qr, 0);
    m(this, Es, null);
    this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(e, n) {
    It.initialize(e, n);
  }
  static updateDefaultParams(e, n) {
    switch (e) {
      case ht.INK_THICKNESS:
        Ut._defaultThickness = n;
        break;
      case ht.INK_COLOR:
        Ut._defaultColor = n;
        break;
      case ht.INK_OPACITY:
        Ut._defaultOpacity = n / 100;
        break;
    }
  }
  updateParams(e, n) {
    switch (e) {
      case ht.INK_THICKNESS:
        A(this, Nf, i1).call(this, n);
        break;
      case ht.INK_COLOR:
        A(this, Bf, s1).call(this, n);
        break;
      case ht.INK_OPACITY:
        A(this, $f, r1).call(this, n);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[ht.INK_THICKNESS, Ut._defaultThickness], [ht.INK_COLOR, Ut._defaultColor || It._defaultLineColor], [ht.INK_OPACITY, Math.round(Ut._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[ht.INK_THICKNESS, this.thickness || Ut._defaultThickness], [ht.INK_COLOR, this.color || Ut._defaultColor || It._defaultLineColor], [ht.INK_OPACITY, Math.round(100 * (this.opacity ?? Ut._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (A(this, $o, Wu).call(this), A(this, Ho, qu).call(this)), this.isAttachedToDOM || (this.parent.add(this), A(this, Ss, Ea).call(this)), A(this, Xr, Sl).call(this)));
  }
  remove() {
    var e;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, o(this, Jn) && (clearTimeout(o(this, Jn)), w(this, Jn, null)), (e = o(this, Oi)) == null || e.disconnect(), w(this, Oi, null), super.remove());
  }
  setParent(e) {
    !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
  }
  onScaleChanging() {
    const [e, n] = this.parentDimensions, i = this.width * e, r = this.height * n;
    this.setDimensions(i, r);
  }
  enableEditMode() {
    o(this, fn) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", o(this, zr), {
      signal: this._uiManager._signal
    }));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", o(this, zr)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    o(this, fn) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), w(this, fn, !0), this.div.classList.add("disabled"), A(this, Xr, Sl).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
  }
  canvasPointerdown(e) {
    e.button !== 0 || !this.isInEditMode() || o(this, fn) || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), A(this, Uf, o1).call(this, e.offsetX, e.offsetY));
  }
  canvasPointermove(e) {
    e.preventDefault(), A(this, Bh, Lm).call(this, e.offsetX, e.offsetY);
  }
  canvasPointerup(e) {
    e.preventDefault(), A(this, $h, km).call(this, e);
  }
  canvasPointerleave(e) {
    A(this, $h, km).call(this, e);
  }
  get isResizable() {
    return !this.isEmpty() && o(this, fn);
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    this.width && (e = this.x, n = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [i, r, a, l] = A(this, Hf, a1).call(this);
    if (this.setAt(i, r, 0, 0), this.setDims(a, l), A(this, $o, Wu).call(this), this.width) {
      const [c, u] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * u), this.setAt(e * c, n * u, this.width * c, this.height * u), w(this, Gr, !0), A(this, Ss, Ea).call(this), this.setDims(this.width * c, this.height * u), A(this, Ni, Hs).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return A(this, Ho, qu).call(this), this.div;
  }
  setDimensions(e, n) {
    const i = Math.round(e), r = Math.round(n);
    if (o(this, Wr) === i && o(this, qr) === r)
      return;
    w(this, Wr, i), w(this, qr, r), this.canvas.style.visibility = "hidden";
    const [a, l] = this.parentDimensions;
    this.width = e / a, this.height = n / l, this.fixAndSetPosition(), o(this, fn) && A(this, Hh, Im).call(this, e, n), A(this, Ss, Ea).call(this), A(this, Ni, Hs).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(e, n, i) {
    var C, E, P;
    if (e instanceof Fw)
      return null;
    const r = super.deserialize(e, n, i);
    r.thickness = e.thickness, r.color = Z.makeHexColor(...e.color), r.opacity = e.opacity;
    const [a, l] = r.pageDimensions, c = r.width * a, u = r.height * l, h = r.parentScale, f = e.thickness / 2;
    w(r, fn, !0), w(r, Wr, Math.round(c)), w(r, qr, Math.round(u));
    const {
      paths: g,
      rect: v,
      rotation: y
    } = e;
    for (let {
      bezier: L
    } of g) {
      L = A(C = Ut, Xf, p1).call(C, L, v, y);
      const k = [];
      r.paths.push(k);
      let F = h * (L[0] - f), I = h * (L[1] - f);
      for (let x = 2, T = L.length; x < T; x += 6) {
        const D = h * (L[x] - f), N = h * (L[x + 1] - f), U = h * (L[x + 2] - f), z = h * (L[x + 3] - f), V = h * (L[x + 4] - f), K = h * (L[x + 5] - f);
        k.push([[F, I], [D, N], [U, z], [V, K]]), F = V, I = K;
      }
      const M = A(this, qf, f1).call(this, k);
      r.bezierPath2D.push(M);
    }
    const _ = A(E = r, jh, Fm).call(E);
    return w(r, jr, Math.max(It.MIN_SIZE, _[2] - _[0])), w(r, Ur, Math.max(It.MIN_SIZE, _[3] - _[1])), A(P = r, Hh, Im).call(P, c, u), r;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const e = this.getRect(0, 0), n = It._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: St.INK,
      color: n,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: A(this, Yf, g1).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
Ur = new WeakMap(), jr = new WeakMap(), Fh = new WeakMap(), Dh = new WeakMap(), Oh = new WeakMap(), zr = new WeakMap(), Jn = new WeakMap(), Di = new WeakMap(), fn = new WeakMap(), Vr = new WeakMap(), Gr = new WeakMap(), Oi = new WeakMap(), Wr = new WeakMap(), qr = new WeakMap(), Es = new WeakMap(), Nf = new WeakSet(), i1 = function(e) {
  const n = (r) => {
    this.thickness = r, A(this, Xr, Sl).call(this);
  }, i = this.thickness;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Bf = new WeakSet(), s1 = function(e) {
  const n = (r) => {
    this.color = r, A(this, Ni, Hs).call(this);
  }, i = this.color;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, $f = new WeakSet(), r1 = function(e) {
  const n = (r) => {
    this.opacity = r, A(this, Ni, Hs).call(this);
  };
  e /= 100;
  const i = this.opacity;
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: ht.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Hf = new WeakSet(), a1 = function() {
  const {
    parentRotation: e,
    parentDimensions: [n, i]
  } = this;
  switch (e) {
    case 90:
      return [0, i, i, n];
    case 180:
      return [n, i, n, i];
    case 270:
      return [n, 0, i, n];
    default:
      return [0, 0, n, i];
  }
}, Nh = new WeakSet(), Rm = function() {
  const {
    ctx: e,
    color: n,
    opacity: i,
    thickness: r,
    parentScale: a,
    scaleFactor: l
  } = this;
  e.lineWidth = r * a / l, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${n}${qR(i)}`;
}, Uf = new WeakSet(), o1 = function(e, n) {
  const i = this._uiManager._signal;
  this.canvas.addEventListener("contextmenu", We, {
    signal: i
  }), this.canvas.addEventListener("pointerleave", o(this, Dh), {
    signal: i
  }), this.canvas.addEventListener("pointermove", o(this, Fh), {
    signal: i
  }), this.canvas.addEventListener("pointerup", o(this, Oh), {
    signal: i
  }), this.canvas.removeEventListener("pointerdown", o(this, zr)), this.isEditing = !0, o(this, Gr) || (w(this, Gr, !0), A(this, Ss, Ea).call(this), this.thickness || (this.thickness = Ut._defaultThickness), this.color || (this.color = Ut._defaultColor || It._defaultLineColor), this.opacity ?? (this.opacity = Ut._defaultOpacity)), this.currentPath.push([e, n]), w(this, Vr, !1), A(this, Nh, Rm).call(this), w(this, Es, () => {
    A(this, Vf, h1).call(this), o(this, Es) && window.requestAnimationFrame(o(this, Es));
  }), window.requestAnimationFrame(o(this, Es));
}, Bh = new WeakSet(), Lm = function(e, n) {
  const [i, r] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && e === i && n === r)
    return;
  const a = this.currentPath;
  let l = o(this, Di);
  if (a.push([e, n]), w(this, Vr, !0), a.length <= 2) {
    l.moveTo(...a[0]), l.lineTo(e, n);
    return;
  }
  a.length === 3 && (w(this, Di, l = new Path2D()), l.moveTo(...a[0])), A(this, Gf, u1).call(this, l, ...a.at(-3), ...a.at(-2), e, n);
}, jf = new WeakSet(), l1 = function() {
  if (this.currentPath.length === 0)
    return;
  const e = this.currentPath.at(-1);
  o(this, Di).lineTo(...e);
}, zf = new WeakSet(), c1 = function(e, n) {
  w(this, Es, null), e = Math.min(Math.max(e, 0), this.canvas.width), n = Math.min(Math.max(n, 0), this.canvas.height), A(this, Bh, Lm).call(this, e, n), A(this, jf, l1).call(this);
  let i;
  if (this.currentPath.length !== 1)
    i = A(this, Wf, d1).call(this);
  else {
    const u = [e, n];
    i = [[u, u.slice(), u.slice(), u]];
  }
  const r = o(this, Di), a = this.currentPath;
  this.currentPath = [], w(this, Di, new Path2D());
  const l = () => {
    this.allRawPaths.push(a), this.paths.push(i), this.bezierPath2D.push(r), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (A(this, $o, Wu).call(this), A(this, Ho, qu).call(this)), A(this, Xr, Sl).call(this));
  };
  this.addCommands({
    cmd: l,
    undo: c,
    mustExec: !0
  });
}, Vf = new WeakSet(), h1 = function() {
  if (!o(this, Vr))
    return;
  w(this, Vr, !1);
  const e = Math.ceil(this.thickness * this.parentScale), n = this.currentPath.slice(-3), i = n.map((l) => l[0]), r = n.map((l) => l[1]);
  Math.min(...i) - e, Math.max(...i) + e, Math.min(...r) - e, Math.max(...r) + e;
  const {
    ctx: a
  } = this;
  a.save(), a.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const l of this.bezierPath2D)
    a.stroke(l);
  a.stroke(o(this, Di)), a.restore();
}, Gf = new WeakSet(), u1 = function(e, n, i, r, a, l, c) {
  const u = (n + r) / 2, h = (i + a) / 2, f = (r + l) / 2, g = (a + c) / 2;
  e.bezierCurveTo(u + 2 * (r - u) / 3, h + 2 * (a - h) / 3, f + 2 * (r - f) / 3, g + 2 * (a - g) / 3, f, g);
}, Wf = new WeakSet(), d1 = function() {
  const e = this.currentPath;
  if (e.length <= 2)
    return [[e[0], e[0], e.at(-1), e.at(-1)]];
  const n = [];
  let i, [r, a] = e[0];
  for (i = 1; i < e.length - 2; i++) {
    const [v, y] = e[i], [_, C] = e[i + 1], E = (v + _) / 2, P = (y + C) / 2, L = [r + 2 * (v - r) / 3, a + 2 * (y - a) / 3], k = [E + 2 * (v - E) / 3, P + 2 * (y - P) / 3];
    n.push([[r, a], L, k, [E, P]]), [r, a] = [E, P];
  }
  const [l, c] = e[i], [u, h] = e[i + 1], f = [r + 2 * (l - r) / 3, a + 2 * (c - a) / 3], g = [u + 2 * (l - u) / 3, h + 2 * (c - h) / 3];
  return n.push([[r, a], f, g, [u, h]]), n;
}, Ni = new WeakSet(), Hs = function() {
  if (this.isEmpty()) {
    A(this, Uo, Xu).call(this);
    return;
  }
  A(this, Nh, Rm).call(this);
  const {
    canvas: e,
    ctx: n
  } = this;
  n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, e.width, e.height), A(this, Uo, Xu).call(this);
  for (const i of this.bezierPath2D)
    n.stroke(i);
}, $h = new WeakSet(), km = function(e) {
  this.canvas.removeEventListener("pointerleave", o(this, Dh)), this.canvas.removeEventListener("pointermove", o(this, Fh)), this.canvas.removeEventListener("pointerup", o(this, Oh)), this.canvas.addEventListener("pointerdown", o(this, zr), {
    signal: this._uiManager._signal
  }), o(this, Jn) && clearTimeout(o(this, Jn)), w(this, Jn, setTimeout(() => {
    w(this, Jn, null), this.canvas.removeEventListener("contextmenu", We);
  }, 10)), A(this, zf, c1).call(this, e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, $o = new WeakSet(), Wu = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, Ho = new WeakSet(), qu = function() {
  w(this, Oi, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && this.setDimensions(n.width, n.height);
  })), o(this, Oi).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = o(this, Oi)) == null || e.disconnect(), w(this, Oi, null);
  }, {
    once: !0
  });
}, Ss = new WeakSet(), Ea = function() {
  if (!o(this, Gr))
    return;
  const [e, n] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * n), A(this, Uo, Xu).call(this);
}, Hh = new WeakSet(), Im = function(e, n) {
  const i = A(this, jo, Yu).call(this), r = (e - i) / o(this, jr), a = (n - i) / o(this, Ur);
  this.scaleFactor = Math.min(r, a);
}, Uo = new WeakSet(), Xu = function() {
  const e = A(this, jo, Yu).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
}, qf = new WeakSet(), f1 = function(e) {
  const n = new Path2D();
  for (let i = 0, r = e.length; i < r; i++) {
    const [a, l, c, u] = e[i];
    i === 0 && n.moveTo(...a), n.bezierCurveTo(l[0], l[1], c[0], c[1], u[0], u[1]);
  }
  return n;
}, Uh = new WeakSet(), Mm = function(e, n, i) {
  const [r, a, l, c] = n;
  switch (i) {
    case 0:
      for (let u = 0, h = e.length; u < h; u += 2)
        e[u] += r, e[u + 1] = c - e[u + 1];
      break;
    case 90:
      for (let u = 0, h = e.length; u < h; u += 2) {
        const f = e[u];
        e[u] = e[u + 1] + r, e[u + 1] = f + a;
      }
      break;
    case 180:
      for (let u = 0, h = e.length; u < h; u += 2)
        e[u] = l - e[u], e[u + 1] += a;
      break;
    case 270:
      for (let u = 0, h = e.length; u < h; u += 2) {
        const f = e[u];
        e[u] = l - e[u + 1], e[u + 1] = c - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Xf = new WeakSet(), p1 = function(e, n, i) {
  const [r, a, l, c] = n;
  switch (i) {
    case 0:
      for (let u = 0, h = e.length; u < h; u += 2)
        e[u] -= r, e[u + 1] = c - e[u + 1];
      break;
    case 90:
      for (let u = 0, h = e.length; u < h; u += 2) {
        const f = e[u];
        e[u] = e[u + 1] - a, e[u + 1] = f - r;
      }
      break;
    case 180:
      for (let u = 0, h = e.length; u < h; u += 2)
        e[u] = l - e[u], e[u + 1] -= a;
      break;
    case 270:
      for (let u = 0, h = e.length; u < h; u += 2) {
        const f = e[u];
        e[u] = c - e[u + 1], e[u + 1] = l - f;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return e;
}, Yf = new WeakSet(), g1 = function(e, n, i, r) {
  var h, f;
  const a = [], l = this.thickness / 2, c = e * n + l, u = e * i + l;
  for (const g of this.paths) {
    const v = [], y = [];
    for (let _ = 0, C = g.length; _ < C; _++) {
      const [E, P, L, k] = g[_];
      if (E[0] === k[0] && E[1] === k[1] && C === 1) {
        const z = e * E[0] + c, V = e * E[1] + u;
        v.push(z, V), y.push(z, V);
        break;
      }
      const F = e * E[0] + c, I = e * E[1] + u, M = e * P[0] + c, x = e * P[1] + u, T = e * L[0] + c, D = e * L[1] + u, N = e * k[0] + c, U = e * k[1] + u;
      _ === 0 && (v.push(F, I), y.push(F, I)), v.push(M, x, T, D, N, U), y.push(M, x), _ === C - 1 && y.push(N, U);
    }
    a.push({
      bezier: A(h = Ut, Uh, Mm).call(h, v, r, this.rotation),
      points: A(f = Ut, Uh, Mm).call(f, y, r, this.rotation)
    });
  }
  return a;
}, jh = new WeakSet(), Fm = function() {
  let e = 1 / 0, n = -1 / 0, i = 1 / 0, r = -1 / 0;
  for (const a of this.paths)
    for (const [l, c, u, h] of a) {
      const f = Z.bezierBoundingBox(...l, ...c, ...u, ...h);
      e = Math.min(e, f[0]), i = Math.min(i, f[1]), n = Math.max(n, f[2]), r = Math.max(r, f[3]);
    }
  return [e, i, n, r];
}, jo = new WeakSet(), Yu = function() {
  return o(this, fn) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, Xr = new WeakSet(), Sl = function(e = !1) {
  if (this.isEmpty())
    return;
  if (!o(this, fn)) {
    A(this, Ni, Hs).call(this);
    return;
  }
  const n = A(this, jh, Fm).call(this), i = A(this, jo, Yu).call(this);
  w(this, jr, Math.max(It.MIN_SIZE, n[2] - n[0])), w(this, Ur, Math.max(It.MIN_SIZE, n[3] - n[1]));
  const r = Math.ceil(i + o(this, jr) * this.scaleFactor), a = Math.ceil(i + o(this, Ur) * this.scaleFactor), [l, c] = this.parentDimensions;
  this.width = r / l, this.height = a / c, this.setAspectRatio(r, a);
  const u = this.translationX, h = this.translationY;
  this.translationX = -n[0], this.translationY = -n[1], A(this, Ss, Ea).call(this), A(this, Ni, Hs).call(this), w(this, Wr, r), w(this, qr, a), this.setDims(r, a);
  const f = e ? i / this.scaleFactor / 2 : 0;
  this.translate(u - this.translationX - f, h - this.translationY - f);
}, m(Ut, qf), m(Ut, Uh), m(Ut, Xf), pt(Ut, "_defaultColor", null), pt(Ut, "_defaultOpacity", 1), pt(Ut, "_defaultThickness", 1), pt(Ut, "_type", "ink"), pt(Ut, "_editorType", St.INK);
let Pm = Ut;
var Ee, Se, xs, Bi, Cs, zo, Qn, $i, ti, kn, zh, Yr, xl, Kr, Cl, Vo, Ku, Vh, Om, Kf, m1, Zf, v1, Gh, Nm, Go, Zu, Jf, y1;
const Ll = class Ll extends It {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, Yr);
    m(this, Kr);
    m(this, Vo);
    m(this, Vh);
    m(this, Kf);
    m(this, Zf);
    m(this, Gh);
    m(this, Go);
    m(this, Jf);
    m(this, Ee, null);
    m(this, Se, null);
    m(this, xs, null);
    m(this, Bi, null);
    m(this, Cs, null);
    m(this, zo, "");
    m(this, Qn, null);
    m(this, $i, null);
    m(this, ti, null);
    m(this, kn, !1);
    m(this, zh, !1);
    w(this, Bi, e.bitmapUrl), w(this, Cs, e.bitmapFile);
  }
  static initialize(e, n) {
    It.initialize(e, n);
  }
  static get supportedTypes() {
    return Ct(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((n) => `image/${n}`));
  }
  static get supportedTypesStr() {
    return Ct(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, n) {
    n.pasteEditor(St.STAMP, {
      bitmapFile: e.getAsFile()
    });
  }
  remove() {
    var e, n;
    o(this, Se) && (w(this, Ee, null), this._uiManager.imageManager.deleteId(o(this, Se)), (e = o(this, Qn)) == null || e.remove(), w(this, Qn, null), (n = o(this, $i)) == null || n.disconnect(), w(this, $i, null), o(this, ti) && (clearTimeout(o(this, ti)), w(this, ti, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      o(this, Se) && A(this, Vo, Ku).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (o(this, Se) && o(this, Qn) === null && A(this, Vo, Ku).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(o(this, xs) || o(this, Ee) || o(this, Bi) || o(this, Cs) || o(this, Se));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, n;
    if (this.width && (e = this.x, n = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), o(this, Ee) ? A(this, Vh, Om).call(this) : A(this, Vo, Ku).call(this), this.width) {
      const [i, r] = this.parentDimensions;
      this.setAt(e * i, n * r, this.width * i, this.height * r);
    }
    return this.div;
  }
  getImageForAltText() {
    return o(this, Qn);
  }
  static deserialize(e, n, i) {
    if (e instanceof Dw)
      return null;
    const r = super.deserialize(e, n, i), {
      rect: a,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: u,
      accessibilityData: h
    } = e;
    c && i.imageManager.isValidId(c) ? w(r, Se, c) : w(r, Bi, l), w(r, kn, u);
    const [f, g] = r.pageDimensions;
    return r.width = (a[2] - a[0]) / f, r.height = (a[3] - a[1]) / g, h && (r.altTextData = h), r;
  }
  serialize(e = !1, n = null) {
    if (this.isEmpty())
      return null;
    const i = {
      annotationType: St.STAMP,
      bitmapId: o(this, Se),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: o(this, kn),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = A(this, Go, Zu).call(this, !0), i.accessibilityData = this.altTextData, i;
    const {
      decorative: r,
      altText: a
    } = this.altTextData;
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), n === null)
      return i;
    n.stamps || (n.stamps = /* @__PURE__ */ new Map());
    const l = o(this, kn) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!n.stamps.has(o(this, Se)))
      n.stamps.set(o(this, Se), {
        area: l,
        serialized: i
      }), i.bitmap = A(this, Go, Zu).call(this, !1);
    else if (o(this, kn)) {
      const c = n.stamps.get(o(this, Se));
      l > c.area && (c.area = l, c.serialized.bitmap.close(), c.serialized.bitmap = A(this, Go, Zu).call(this, !1));
    }
    return i;
  }
};
Ee = new WeakMap(), Se = new WeakMap(), xs = new WeakMap(), Bi = new WeakMap(), Cs = new WeakMap(), zo = new WeakMap(), Qn = new WeakMap(), $i = new WeakMap(), ti = new WeakMap(), kn = new WeakMap(), zh = new WeakMap(), Yr = new WeakSet(), xl = function(e, n = !1) {
  if (!e) {
    this.remove();
    return;
  }
  w(this, Ee, e.bitmap), n || (w(this, Se, e.id), w(this, kn, e.isSvg)), e.file && w(this, zo, e.file.name), A(this, Vh, Om).call(this);
}, Kr = new WeakSet(), Cl = function() {
  w(this, xs, null), this._uiManager.enableWaiting(!1), o(this, Qn) && this.div.focus();
}, Vo = new WeakSet(), Ku = function() {
  if (o(this, Se)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(o(this, Se)).then((i) => A(this, Yr, xl).call(this, i, !0)).finally(() => A(this, Kr, Cl).call(this));
    return;
  }
  if (o(this, Bi)) {
    const i = o(this, Bi);
    w(this, Bi, null), this._uiManager.enableWaiting(!0), w(this, xs, this._uiManager.imageManager.getFromUrl(i).then((r) => A(this, Yr, xl).call(this, r)).finally(() => A(this, Kr, Cl).call(this)));
    return;
  }
  if (o(this, Cs)) {
    const i = o(this, Cs);
    w(this, Cs, null), this._uiManager.enableWaiting(!0), w(this, xs, this._uiManager.imageManager.getFromFile(i).then((r) => A(this, Yr, xl).call(this, r)).finally(() => A(this, Kr, Cl).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Ll.supportedTypesStr;
  const n = this._uiManager._signal;
  w(this, xs, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        A(this, Yr, xl).call(this, r);
      }
      i();
    }, {
      signal: n
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: n
    });
  }).finally(() => A(this, Kr, Cl).call(this))), e.click();
}, Vh = new WeakSet(), Om = function() {
  const {
    div: e
  } = this;
  let {
    width: n,
    height: i
  } = o(this, Ee);
  const [r, a] = this.pageDimensions, l = 0.75;
  if (this.width)
    n = this.width * r, i = this.height * a;
  else if (n > l * r || i > l * a) {
    const f = Math.min(l * r / n, l * a / i);
    n *= f, i *= f;
  }
  const [c, u] = this.parentDimensions;
  this.setDims(n * c / r, i * u / a), this._uiManager.enableWaiting(!1);
  const h = w(this, Qn, document.createElement("canvas"));
  e.append(h), e.hidden = !1, A(this, Gh, Nm).call(this, n, i), A(this, Jf, y1).call(this), o(this, zh) || (this.parent.addUndoableEditor(this), w(this, zh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), o(this, zo) && h.setAttribute("aria-label", o(this, zo));
}, Kf = new WeakSet(), m1 = function(e, n) {
  var l;
  const [i, r] = this.parentDimensions;
  this.width = e / i, this.height = n / r, this.setDims(e, n), (l = this._initialOptions) != null && l.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, o(this, ti) !== null && clearTimeout(o(this, ti)), w(this, ti, setTimeout(() => {
    w(this, ti, null), A(this, Gh, Nm).call(this, e, n);
  }, 200));
}, Zf = new WeakSet(), v1 = function(e, n) {
  const {
    width: i,
    height: r
  } = o(this, Ee);
  let a = i, l = r, c = o(this, Ee);
  for (; a > 2 * e || l > 2 * n; ) {
    const u = a, h = l;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), l > 2 * n && (l = l >= 16384 ? Math.floor(l / 2) - 1 : Math.ceil(l / 2));
    const f = new OffscreenCanvas(a, l);
    f.getContext("2d").drawImage(c, 0, 0, u, h, 0, 0, a, l), c = f.transferToImageBitmap();
  }
  return c;
}, Gh = new WeakSet(), Nm = function(e, n) {
  e = Math.ceil(e), n = Math.ceil(n);
  const i = o(this, Qn);
  if (!i || i.width === e && i.height === n)
    return;
  i.width = e, i.height = n;
  const r = o(this, kn) ? o(this, Ee) : A(this, Zf, v1).call(this, e, n);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(e, n).getContext("2d");
    c.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, n), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, e, n).data,
        width: e,
        height: n,
        channels: 4
      }
    }).then((u) => {
      const h = (u == null ? void 0 : u.output) || "";
      this.parent && h && !this.hasAltText() && (this.altTextData = {
        altText: h,
        decorative: !1
      });
    });
  }
  const a = i.getContext("2d");
  a.filter = this._uiManager.hcmFilter, a.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, n);
}, Go = new WeakSet(), Zu = function(e) {
  if (e) {
    if (o(this, kn)) {
      const r = this._uiManager.imageManager.getSvgUrl(o(this, Se));
      if (r)
        return r;
    }
    const n = document.createElement("canvas");
    return {
      width: n.width,
      height: n.height
    } = o(this, Ee), n.getContext("2d").drawImage(o(this, Ee), 0, 0), n.toDataURL();
  }
  if (o(this, kn)) {
    const [n, i] = this.pageDimensions, r = Math.round(this.width * n * ks.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * ks.PDF_TO_CSS_UNITS), l = new OffscreenCanvas(r, a);
    return l.getContext("2d").drawImage(o(this, Ee), 0, 0, o(this, Ee).width, o(this, Ee).height, 0, 0, r, a), l.transferToImageBitmap();
  }
  return structuredClone(o(this, Ee));
}, Jf = new WeakSet(), y1 = function() {
  this._uiManager._signal && (w(this, $i, new ResizeObserver((e) => {
    const n = e[0].contentRect;
    n.width && n.height && A(this, Kf, m1).call(this, n.width, n.height);
  })), o(this, $i).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var e;
    (e = o(this, $i)) == null || e.disconnect(), w(this, $i, null);
  }, {
    once: !0
  }));
}, pt(Ll, "_type", "stamp"), pt(Ll, "_editorType", St.STAMP);
let Dm = Ll;
var Zr, Wo, ei, Jr, Hi, Ui, ji, sn, Ts, qo, Xo, Oe, st, Ps, Qf, b1, Wh, $m, qh, Hm, Xh, Um, Yo, Ju;
const vn = class vn {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: n,
    accessibilityManager: i,
    annotationLayer: r,
    drawLayer: a,
    textLayer: l,
    viewport: c,
    l10n: u
  }) {
    m(this, Qf);
    m(this, Wh);
    m(this, qh);
    m(this, Xh);
    m(this, Yo);
    m(this, Zr, void 0);
    m(this, Wo, !1);
    m(this, ei, null);
    m(this, Jr, null);
    m(this, Hi, null);
    m(this, Ui, null);
    m(this, ji, null);
    m(this, sn, /* @__PURE__ */ new Map());
    m(this, Ts, !1);
    m(this, qo, !1);
    m(this, Xo, !1);
    m(this, Oe, null);
    m(this, st, void 0);
    const h = [...o(vn, Ps).values()];
    if (!vn._initialized) {
      vn._initialized = !0;
      for (const f of h)
        f.initialize(u, t);
    }
    t.registerEditorTypes(h), w(this, st, t), this.pageIndex = e, this.div = n, w(this, Zr, i), w(this, ei, r), this.viewport = c, w(this, Oe, l), this.drawLayer = a, o(this, st).addLayer(this);
  }
  get isEmpty() {
    return o(this, sn).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && o(this, st).getMode() === St.NONE;
  }
  updateToolbar(t) {
    o(this, st).updateToolbar(t);
  }
  updateMode(t = o(this, st).getMode()) {
    switch (A(this, Yo, Ju).call(this), t) {
      case St.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case St.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case St.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const n of o(vn, Ps).values())
      e.toggle(`${n._type}Editing`, t === n._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = o(this, Oe)) == null ? void 0 : e.div);
  }
  addInkEditorIfNeeded(t) {
    if (o(this, st).getMode() !== St.INK)
      return;
    if (!t) {
      for (const n of o(this, sn).values())
        if (n.isEmpty()) {
          n.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(t) {
    o(this, st).setEditingState(t);
  }
  addCommands(t) {
    o(this, st).addCommands(t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = o(this, ei)) == null || e.div.classList.toggle("disabled", !t);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const n of o(this, sn).values())
      n.enableEditing(), n.show(!0), n.annotationElementId && (o(this, st).removeChangedExistingAnnotation(n), t.add(n.annotationElementId));
    if (!o(this, ei))
      return;
    const e = o(this, ei).getEditableAnnotations();
    for (const n of e) {
      if (n.hide(), o(this, st).isDeletedAnnotationElement(n.data.id) || t.has(n.data.id))
        continue;
      const i = this.deserialize(n);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
  }
  disable() {
    var i;
    w(this, Xo, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const r of o(this, sn).values())
      if (r.disableEditing(), !!r.annotationElementId) {
        if (r.serialize() !== null) {
          t.set(r.annotationElementId, r);
          continue;
        } else
          e.set(r.annotationElementId, r);
        (i = this.getEditableAnnotation(r.annotationElementId)) == null || i.show(), r.remove();
      }
    if (o(this, ei)) {
      const r = o(this, ei).getEditableAnnotations();
      for (const a of r) {
        const {
          id: l
        } = a.data;
        if (o(this, st).isDeletedAnnotationElement(l))
          continue;
        let c = e.get(l);
        if (c) {
          c.resetAnnotationElement(a), c.show(!1), a.show();
          continue;
        }
        c = t.get(l), c && (o(this, st).addChangedExistingAnnotation(c), c.renderAnnotationElement(a), c.show(!1)), a.show();
      }
    }
    A(this, Yo, Ju).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: n
    } = this.div;
    for (const r of o(vn, Ps).values())
      n.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), w(this, Xo, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = o(this, ei)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    o(this, st).getActive() !== t && o(this, st).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    this.div.tabIndex = -1, (t = o(this, Oe)) != null && t.div && !o(this, Ui) && (w(this, Ui, A(this, Qf, b1).bind(this)), o(this, Oe).div.addEventListener("pointerdown", o(this, Ui), {
      signal: o(this, st)._signal
    }), o(this, Oe).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = o(this, Oe)) != null && t.div && o(this, Ui) && (o(this, Oe).div.removeEventListener("pointerdown", o(this, Ui)), w(this, Ui, null), o(this, Oe).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (o(this, Hi))
      return;
    const t = o(this, st)._signal;
    w(this, Hi, this.pointerdown.bind(this)), w(this, Jr, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", o(this, Hi), {
      signal: t
    }), this.div.addEventListener("pointerup", o(this, Jr), {
      signal: t
    });
  }
  disableClick() {
    o(this, Hi) && (this.div.removeEventListener("pointerdown", o(this, Hi)), this.div.removeEventListener("pointerup", o(this, Jr)), w(this, Hi, null), w(this, Jr, null));
  }
  attach(t) {
    o(this, sn).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && o(this, st).isDeletedAnnotationElement(e) && o(this, st).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    o(this, sn).delete(t.id), (e = o(this, Zr)) == null || e.removePointerInTextLayer(t.contentDiv), !o(this, Xo) && t.annotationElementId && o(this, st).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), o(this, st).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1, o(this, qo) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (o(this, st).addDeletedAnnotationElement(t.annotationElementId), It.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), o(this, st).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(), o(this, st).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var n;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !o(this, ji) && (t._focusEventsAllowed = !1, w(this, ji, setTimeout(() => {
      w(this, ji, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: o(this, st)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (n = o(this, Zr)) == null ? void 0 : n.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), n = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: n,
      mustExec: !1
    });
  }
  getNextId() {
    return o(this, st).getId();
  }
  get _signal() {
    return o(this, st)._signal;
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = o(this, Wh, $m)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    o(this, st).updateToolbar(t), o(this, st).updateMode(t);
    const {
      offsetX: n,
      offsetY: i
    } = A(this, Xh, Um).call(this), r = this.getNextId(), a = A(this, qh, Hm).call(this, {
      parent: this,
      id: r,
      x: n,
      y: i,
      uiManager: o(this, st),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  deserialize(t) {
    var e;
    return ((e = o(vn, Ps).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, o(this, st))) || null;
  }
  createAndAddNewEditor(t, e, n = {}) {
    const i = this.getNextId(), r = A(this, qh, Hm).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: o(this, st),
      isCentered: e,
      ...n
    });
    return r && this.add(r), r;
  }
  addNewEditor() {
    this.createAndAddNewEditor(A(this, Xh, Um).call(this), !0);
  }
  setSelected(t) {
    o(this, st).setSelected(t);
  }
  toggleSelected(t) {
    o(this, st).toggleSelected(t);
  }
  isSelected(t) {
    return o(this, st).isSelected(t);
  }
  unselect(t) {
    o(this, st).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Ge.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && o(this, Ts)) {
      if (w(this, Ts, !1), !o(this, Wo)) {
        w(this, Wo, !0);
        return;
      }
      if (o(this, st).getMode() === St.STAMP) {
        o(this, st).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (o(this, st).getMode() === St.HIGHLIGHT && this.enableTextSelection(), o(this, Ts)) {
      w(this, Ts, !1);
      return;
    }
    const {
      isMac: e
    } = Ge.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    w(this, Ts, !0);
    const n = o(this, st).getActive();
    w(this, Wo, !n || n.isEmpty());
  }
  findNewParent(t, e, n) {
    const i = o(this, st).findParent(e, n);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  destroy() {
    var t, e;
    ((t = o(this, st).getActive()) == null ? void 0 : t.parent) === this && (o(this, st).commitOrRemove(), o(this, st).setActiveEditor(null)), o(this, ji) && (clearTimeout(o(this, ji)), w(this, ji, null));
    for (const n of o(this, sn).values())
      (e = o(this, Zr)) == null || e.removePointerInTextLayer(n.contentDiv), n.setParent(null), n.isAttachedToDOM = !1, n.div.remove();
    this.div = null, o(this, sn).clear(), o(this, st).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, ra(this.div, t);
    for (const e of o(this, st).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    o(this, st).commitOrRemove(), A(this, Yo, Ju).call(this);
    const e = this.viewport.rotation, n = t.rotation;
    if (this.viewport = t, ra(this.div, {
      rotation: n
    }), e !== n)
      for (const i of o(this, sn).values())
        i.rotate(n);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return o(this, st).viewParameters.realScale;
  }
};
Zr = new WeakMap(), Wo = new WeakMap(), ei = new WeakMap(), Jr = new WeakMap(), Hi = new WeakMap(), Ui = new WeakMap(), ji = new WeakMap(), sn = new WeakMap(), Ts = new WeakMap(), qo = new WeakMap(), Xo = new WeakMap(), Oe = new WeakMap(), st = new WeakMap(), Ps = new WeakMap(), Qf = new WeakSet(), b1 = function(t) {
  if (o(this, st).unselectAll(), t.target === o(this, Oe).div) {
    const {
      isMac: e
    } = Ge.platform;
    if (t.button !== 0 || t.ctrlKey && e)
      return;
    o(this, st).showAllEditors("highlight", !0, !0), o(this, Oe).div.classList.add("free"), pd.startHighlighting(this, o(this, st).direction === "ltr", t), o(this, Oe).div.addEventListener("pointerup", () => {
      o(this, Oe).div.classList.remove("free");
    }, {
      once: !0,
      signal: o(this, st)._signal
    }), t.preventDefault();
  }
}, Wh = new WeakSet(), $m = function() {
  return o(vn, Ps).get(o(this, st).getMode());
}, qh = new WeakSet(), Hm = function(t) {
  const e = o(this, Wh, $m);
  return e ? new e.prototype.constructor(t) : null;
}, Xh = new WeakSet(), Um = function() {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = this.div.getBoundingClientRect(), r = Math.max(0, t), a = Math.max(0, e), l = Math.min(window.innerWidth, t + n), c = Math.min(window.innerHeight, e + i), u = (r + l) / 2 - t, h = (a + c) / 2 - e, [f, g] = this.viewport.rotation % 180 === 0 ? [u, h] : [h, u];
  return {
    offsetX: f,
    offsetY: g
  };
}, Yo = new WeakSet(), Ju = function() {
  w(this, qo, !0);
  for (const t of o(this, sn).values())
    t.isEmpty() && t.remove();
  w(this, qo, !1);
}, pt(vn, "_initialized", !1), m(vn, Ps, new Map([vm, Pm, Dm, pd].map((t) => [t._editorType, t])));
let Bm = vn;
var ni, Yh, le, Rs, Kh, zm, Zh, Vm, tp, w1;
const ve = class ve {
  constructor({
    pageIndex: t
  }) {
    m(this, Zh);
    m(this, tp);
    m(this, ni, null);
    m(this, Yh, 0);
    m(this, le, /* @__PURE__ */ new Map());
    m(this, Rs, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!o(this, ni)) {
      w(this, ni, t);
      return;
    }
    if (o(this, ni) !== t) {
      if (o(this, le).size > 0)
        for (const e of o(this, le).values())
          e.remove(), t.append(e);
      w(this, ni, t);
    }
  }
  static get _svgFactory() {
    return Ct(this, "_svgFactory", new v0());
  }
  highlight(t, e, n, i = !1) {
    const r = qe(this, Yh)._++, a = A(this, Zh, Vm).call(this, t.box);
    a.classList.add("highlight"), t.free && a.classList.add("free");
    const l = ve._svgFactory.createElement("defs");
    a.append(l);
    const c = ve._svgFactory.createElement("path");
    l.append(c);
    const u = `path_p${this.pageIndex}_${r}`;
    c.setAttribute("id", u), c.setAttribute("d", t.toSVGPath()), i && o(this, Rs).set(r, c);
    const h = A(this, tp, w1).call(this, l, u), f = ve._svgFactory.createElement("use");
    return a.append(f), a.setAttribute("fill", e), a.setAttribute("fill-opacity", n), f.setAttribute("href", `#${u}`), o(this, le).set(r, a), {
      id: r,
      clipPathId: `url(#${h})`
    };
  }
  highlightOutline(t) {
    const e = qe(this, Yh)._++, n = A(this, Zh, Vm).call(this, t.box);
    n.classList.add("highlightOutline");
    const i = ve._svgFactory.createElement("defs");
    n.append(i);
    const r = ve._svgFactory.createElement("path");
    i.append(r);
    const a = `path_p${this.pageIndex}_${e}`;
    r.setAttribute("id", a), r.setAttribute("d", t.toSVGPath()), r.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (t.free) {
      n.classList.add("free");
      const h = ve._svgFactory.createElement("mask");
      i.append(h), l = `mask_p${this.pageIndex}_${e}`, h.setAttribute("id", l), h.setAttribute("maskUnits", "objectBoundingBox");
      const f = ve._svgFactory.createElement("rect");
      h.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const g = ve._svgFactory.createElement("use");
      h.append(g), g.setAttribute("href", `#${a}`), g.setAttribute("stroke", "none"), g.setAttribute("fill", "black"), g.setAttribute("fill-rule", "nonzero"), g.classList.add("mask");
    }
    const c = ve._svgFactory.createElement("use");
    n.append(c), c.setAttribute("href", `#${a}`), l && c.setAttribute("mask", `url(#${l})`);
    const u = c.cloneNode();
    return n.append(u), c.classList.add("mainOutline"), u.classList.add("secondaryOutline"), o(this, le).set(e, n), e;
  }
  finalizeLine(t, e) {
    const n = o(this, Rs).get(t);
    o(this, Rs).delete(t), this.updateBox(t, e.box), n.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    o(this, le).get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  removeFreeHighlight(t) {
    this.remove(t), o(this, Rs).delete(t);
  }
  updatePath(t, e) {
    o(this, Rs).get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    var n;
    A(n = ve, Kh, zm).call(n, o(this, le).get(t), e);
  }
  show(t, e) {
    o(this, le).get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    o(this, le).get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    o(this, le).get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    o(this, le).get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    o(this, le).get(t).classList.add(e);
  }
  removeClass(t, e) {
    o(this, le).get(t).classList.remove(e);
  }
  remove(t) {
    o(this, ni) !== null && (o(this, le).get(t).remove(), o(this, le).delete(t));
  }
  destroy() {
    w(this, ni, null);
    for (const t of o(this, le).values())
      t.remove();
    o(this, le).clear();
  }
};
ni = new WeakMap(), Yh = new WeakMap(), le = new WeakMap(), Rs = new WeakMap(), Kh = new WeakSet(), zm = function(t, {
  x: e = 0,
  y: n = 0,
  width: i = 1,
  height: r = 1
} = {}) {
  const {
    style: a
  } = t;
  a.top = `${100 * n}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, Zh = new WeakSet(), Vm = function(t) {
  var n;
  const e = ve._svgFactory.create(1, 1, !0);
  return o(this, ni).append(e), e.setAttribute("aria-hidden", !0), A(n = ve, Kh, zm).call(n, e, t), e;
}, tp = new WeakSet(), w1 = function(t, e) {
  const n = ve._svgFactory.createElement("clipPath");
  t.append(n);
  const i = `clip_${e}`;
  n.setAttribute("id", i), n.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = ve._svgFactory.createElement("use");
  return n.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, m(ve, Kh);
let jm = ve;
var Sk = at.AbortException, xk = at.AnnotationEditorLayer, Ck = at.AnnotationEditorParamsType, Tk = at.AnnotationEditorType, Pk = at.AnnotationEditorUIManager, A1 = at.AnnotationLayer, _1 = at.AnnotationMode, Rk = at.CMapCompressionType, Lk = at.ColorPicker, kk = at.DOMSVGFactory, Ik = at.DrawLayer, Mk = at.FeatureTest, x0 = at.GlobalWorkerOptions, Fk = at.ImageKind, Dk = at.InvalidPDFException, Ok = at.MissingPDFException, Nk = at.OPS, Bk = at.Outliner, $k = at.PDFDataRangeTransport, Hk = at.PDFDateString, Uk = at.PDFWorker, jk = at.PasswordResponses, zk = at.PermissionFlag, Vk = at.PixelsPerInch, Gk = at.RenderingCancelledException, E1 = at.TextLayer, Wk = at.UnexpectedResponseException, qk = at.Util, Xk = at.VerbosityLevel, Yk = at.XfaLayer, Kk = at.build, Zk = at.createValidAbsoluteUrl, Jk = at.fetchData, S1 = at.getDocument, Qk = at.getFilenameFromUrl, tI = at.getPdfFilenameFromUrl, eI = at.getXfaPageViewport, nI = at.isDataScheme, iI = at.isPdfFile, sI = at.noContextMenu, rI = at.normalizeUnicode, aI = at.renderTextLayer, oI = at.setLayerDimensions, lI = at.shadow, cI = at.updateTextLayer, x1 = at.version;
const hI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Sk,
  AnnotationEditorLayer: xk,
  AnnotationEditorParamsType: Ck,
  AnnotationEditorType: Tk,
  AnnotationEditorUIManager: Pk,
  AnnotationLayer: A1,
  AnnotationMode: _1,
  CMapCompressionType: Rk,
  ColorPicker: Lk,
  DOMSVGFactory: kk,
  DrawLayer: Ik,
  FeatureTest: Mk,
  GlobalWorkerOptions: x0,
  ImageKind: Fk,
  InvalidPDFException: Dk,
  MissingPDFException: Ok,
  OPS: Nk,
  Outliner: Bk,
  PDFDataRangeTransport: $k,
  PDFDateString: Hk,
  PDFWorker: Uk,
  PasswordResponses: jk,
  PermissionFlag: zk,
  PixelsPerInch: Vk,
  RenderingCancelledException: Gk,
  TextLayer: E1,
  UnexpectedResponseException: Wk,
  Util: qk,
  VerbosityLevel: Xk,
  XfaLayer: Yk,
  build: Kk,
  createValidAbsoluteUrl: Zk,
  fetchData: Jk,
  getDocument: S1,
  getFilenameFromUrl: Qk,
  getPdfFilenameFromUrl: tI,
  getXfaPageViewport: eI,
  isDataScheme: nI,
  isPdfFile: iI,
  noContextMenu: sI,
  normalizeUnicode: rI,
  renderTextLayer: aI,
  setLayerDimensions: oI,
  shadow: lI,
  updateTextLayer: cI,
  version: x1
}, Symbol.toStringTag, { value: "Module" }));
var de = function(s, t, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = t.length, r; n < i; n++)
      (r || !(n in t)) && (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
  return s.concat(r || Array.prototype.slice.call(t));
}, uI = ["onCopy", "onCut", "onPaste"], dI = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], fI = ["onFocus", "onBlur"], pI = ["onInput", "onInvalid", "onReset", "onSubmit"], gI = ["onLoad", "onError"], mI = ["onKeyDown", "onKeyPress", "onKeyUp"], vI = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], yI = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], bI = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], wI = ["onSelect"], AI = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], _I = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], EI = ["onScroll"], SI = ["onWheel"], xI = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], CI = ["onTransitionEnd"], TI = ["onToggle"], PI = ["onChange"], RI = de(de(de(de(de(de(de(de(de(de(de(de(de(de(de(de(de(de([], uI, !0), dI, !0), fI, !0), pI, !0), gI, !0), mI, !0), vI, !0), yI, !0), bI, !0), wI, !0), AI, !0), _I, !0), EI, !0), SI, !0), xI, !0), CI, !0), PI, !0), TI, !0);
function C1(s, t) {
  var e = {};
  return RI.forEach(function(n) {
    var i = s[n];
    i && (t ? e[n] = function(r) {
      return i(r, t(n));
    } : e[n] = i);
  }), e;
}
function ru(s) {
  var t = !1, e = new Promise(function(n, i) {
    s.then(function(r) {
      return !t && n(r);
    }).catch(function(r) {
      return !t && i(r);
    });
  });
  return {
    promise: e,
    cancel: function() {
      t = !0;
    }
  };
}
function T1(s) {
  var t, e, n = "";
  if (typeof s == "string" || typeof s == "number")
    n += s;
  else if (typeof s == "object")
    if (Array.isArray(s))
      for (t = 0; t < s.length; t++)
        s[t] && (e = T1(s[t])) && (n && (n += " "), n += e);
    else
      for (t in s)
        s[t] && (n && (n += " "), n += t);
  return n;
}
function xp() {
  for (var s, t, e = 0, n = ""; e < arguments.length; )
    (s = arguments[e++]) && (t = T1(s)) && (n && (n += " "), n += t);
  return n;
}
var LI = ut.env.NODE_ENV === "production", og = "Invariant failed";
function Bt(s, t) {
  if (!s) {
    if (LI)
      throw new Error(og);
    var e = typeof t == "function" ? t() : t, n = e ? "".concat(og, ": ").concat(e) : og;
    throw new Error(n);
  }
}
var kI = ut.env.NODE_ENV !== "production", P1 = function() {
};
if (kI) {
  var II = function(t, e) {
    var n = arguments.length;
    e = new Array(n > 1 ? n - 1 : 0);
    for (var i = 1; i < n; i++)
      e[i - 1] = arguments[i];
    var r = 0, a = "Warning: " + t.replace(/%s/g, function() {
      return e[r++];
    });
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  };
  P1 = function(s, t, e) {
    var n = arguments.length;
    e = new Array(n > 2 ? n - 2 : 0);
    for (var i = 2; i < n; i++)
      e[i - 2] = arguments[i];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    s || II.apply(null, [t].concat(e));
  };
}
var MI = P1;
const Re = /* @__PURE__ */ sy(MI);
var jv = Object.prototype.hasOwnProperty;
function zv(s, t, e) {
  for (e of s.keys())
    if (Ra(e, t))
      return e;
}
function Ra(s, t) {
  var e, n, i;
  if (s === t)
    return !0;
  if (s && t && (e = s.constructor) === t.constructor) {
    if (e === Date)
      return s.getTime() === t.getTime();
    if (e === RegExp)
      return s.toString() === t.toString();
    if (e === Array) {
      if ((n = s.length) === t.length)
        for (; n-- && Ra(s[n], t[n]); )
          ;
      return n === -1;
    }
    if (e === Set) {
      if (s.size !== t.size)
        return !1;
      for (n of s)
        if (i = n, i && typeof i == "object" && (i = zv(t, i), !i) || !t.has(i))
          return !1;
      return !0;
    }
    if (e === Map) {
      if (s.size !== t.size)
        return !1;
      for (n of s)
        if (i = n[0], i && typeof i == "object" && (i = zv(t, i), !i) || !Ra(n[1], t.get(i)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      s = new Uint8Array(s), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((n = s.byteLength) === t.byteLength)
        for (; n-- && s.getInt8(n) === t.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(s)) {
      if ((n = s.byteLength) === t.byteLength)
        for (; n-- && s[n] === t[n]; )
          ;
      return n === -1;
    }
    if (!e || typeof s == "object") {
      n = 0;
      for (e in s)
        if (jv.call(s, e) && ++n && !jv.call(t, e) || !(e in t) || !Ra(s[e], t[e]))
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return s !== s && t !== t;
}
const R1 = ep(null);
function La({ children: s, type: t }) {
  return $("div", { className: `react-pdf__message react-pdf__message--${t}`, children: s });
}
const FI = "noopener noreferrer nofollow";
class DI {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return Bt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    Bt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  goToDestination(t) {
    return new Promise((e) => {
      Bt(this.pdfDocument, "PDF document not loaded."), Bt(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Bt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const n = e[0];
      new Promise((i) => {
        Bt(this.pdfDocument, "PDF document not loaded."), n instanceof Object ? this.pdfDocument.getPageIndex(n).then((r) => {
          i(r);
        }).catch(() => {
          Bt(!1, `"${n}" is not a valid page reference.`);
        }) : typeof n == "number" ? i(n) : Bt(!1, `"${n}" is not a valid destination reference.`);
      }).then((i) => {
        const r = i + 1;
        Bt(this.pdfViewer, "PDF viewer is not initialized."), Bt(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: i,
          pageNumber: r
        });
      });
    });
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
  goToPage(t) {
    const e = t - 1;
    Bt(this.pdfViewer, "PDF viewer is not initialized."), Bt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  addLinkAttributes(t, e, n) {
    t.href = e, t.rel = this.externalLinkRel || FI, t.target = n ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const Vv = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, Cp = typeof document < "u", L1 = Cp && window.location.protocol === "file:";
function OI(s) {
  return typeof s < "u";
}
function Os(s) {
  return OI(s) && s !== null;
}
function NI(s) {
  return typeof s == "string";
}
function BI(s) {
  return s instanceof ArrayBuffer;
}
function $I(s) {
  return Bt(Cp, "isBlob can only be used in a browser environment"), s instanceof Blob;
}
function Gm(s) {
  return NI(s) && /^data:/.test(s);
}
function Gv(s) {
  Bt(Gm(s), "Invalid data URI.");
  const [t = "", e = ""] = s.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function HI() {
  return Cp && window.devicePixelRatio || 1;
}
const k1 = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Wv() {
  Re(!L1, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${k1}`);
}
function UI() {
  Re(!L1, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${k1}`);
}
function la(s) {
  s != null && s.cancel && s.cancel();
}
function Wm(s, t) {
  return Object.defineProperty(s, "width", {
    get() {
      return this.view[2] * t;
    },
    configurable: !0
  }), Object.defineProperty(s, "height", {
    get() {
      return this.view[3] * t;
    },
    configurable: !0
  }), Object.defineProperty(s, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(s, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), s;
}
function jI(s) {
  return s.name === "RenderingCancelledException";
}
function zI(s) {
  return new Promise((t, e) => {
    const n = new FileReader();
    n.onload = () => {
      if (!n.result)
        return e(new Error("Error while reading a file."));
      t(n.result);
    }, n.onerror = (i) => {
      if (!i.target)
        return e(new Error("Error while reading a file."));
      const { error: r } = i.target;
      if (!r)
        return e(new Error("Error while reading a file."));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case r.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case r.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, n.readAsArrayBuffer(s);
  });
}
function VI(s, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return s;
  }
}
function nl() {
  return Xm(VI, { value: void 0, error: void 0 });
}
var GI = function(s, t, e, n) {
  function i(r) {
    return r instanceof e ? r : new e(function(a) {
      a(r);
    });
  }
  return new (e || (e = Promise))(function(r, a) {
    function l(h) {
      try {
        u(n.next(h));
      } catch (f) {
        a(f);
      }
    }
    function c(h) {
      try {
        u(n.throw(h));
      } catch (f) {
        a(f);
      }
    }
    function u(h) {
      h.done ? r(h.value) : i(h.value).then(l, c);
    }
    u((n = n.apply(s, t || [])).next());
  });
}, qv = function(s, t) {
  var e = {};
  for (var n in s)
    Object.prototype.hasOwnProperty.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(s); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[i]) && (e[n[i]] = s[n[i]]);
  return e;
};
const { PDFDataRangeTransport: WI } = hI, qI = (s, t) => {
  switch (t) {
    case Vv.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      s(e);
      break;
    }
    case Vv.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      s(e);
      break;
    }
  }
};
function Xv(s) {
  return typeof s == "object" && s !== null && ("data" in s || "range" in s || "url" in s);
}
const XI = qm(function(t, e) {
  var { children: n, className: i, error: r = "Failed to load PDF file.", externalLinkRel: a, externalLinkTarget: l, file: c, inputRef: u, imageResourcesPath: h, loading: f = "Loading PDF…", noData: g = "No PDF file specified.", onItemClick: v, onLoadError: y, onLoadProgress: _, onLoadSuccess: C, onPassword: E = qI, onSourceError: P, onSourceSuccess: L, options: k, renderMode: F, rotate: I } = t, M = qv(t, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [x, T] = nl(), { value: D, error: N } = x, [U, z] = nl(), { value: V, error: K } = U, X = Mn(new DI()), B = Mn([]), G = Mn(void 0), W = Mn(void 0);
  c && c !== G.current && Xv(c) && (Re(!Ra(c, G.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), G.current = c), k && k !== W.current && (Re(!Ra(k, W.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), W.current = k);
  const bt = Mn({
    // Handling jumping to internal links target
    scrollPageIntoView: (Q) => {
      const { dest: ft, pageNumber: ct, pageIndex: tt = ct - 1 } = Q;
      if (v) {
        v({ dest: ft, pageIndex: tt, pageNumber: ct });
        return;
      }
      const Tt = B.current[tt];
      if (Tt) {
        Tt.scrollIntoView();
        return;
      }
      Re(!1, `An internal link leading to page ${ct} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  iy(e, () => ({
    linkService: X,
    pages: B,
    viewer: bt
  }), []);
  function At() {
    L && L();
  }
  function j() {
    N && (Re(!1, N.toString()), P && P(N));
  }
  function nt() {
    T({ type: "RESET" });
  }
  Et(nt, [c, T]);
  const it = Ls(() => GI(this, void 0, void 0, function* () {
    if (!c)
      return null;
    if (typeof c == "string")
      return Gm(c) ? { data: Gv(c) } : (Wv(), { url: c });
    if (c instanceof WI)
      return { range: c };
    if (BI(c))
      return { data: c };
    if (Cp && $I(c))
      return { data: yield zI(c) };
    if (Bt(typeof c == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), Bt(Xv(c), "Invalid parameter object: need either .data, .range or .url"), "url" in c && typeof c.url == "string") {
      if (Gm(c.url)) {
        const { url: Q } = c, ft = qv(c, ["url"]), ct = Gv(Q);
        return Object.assign({ data: ct }, ft);
      }
      Wv();
    }
    return c;
  }), [c]);
  Et(() => {
    const Q = ru(it());
    return Q.promise.then((ft) => {
      T({ type: "RESOLVE", value: ft });
    }).catch((ft) => {
      T({ type: "REJECT", error: ft });
    }), () => {
      la(Q);
    };
  }, [it, T]), Et(() => {
    if (!(typeof D > "u")) {
      if (D === !1) {
        j();
        return;
      }
      At();
    }
  }, [D]);
  function J() {
    V && (C && C(V), B.current = new Array(V.numPages), X.current.setDocument(V));
  }
  function lt() {
    K && (Re(!1, K.toString()), y && y(K));
  }
  Et(function() {
    z({ type: "RESET" });
  }, [z, D]), Et(function() {
    if (!D)
      return;
    const ft = Object.assign(Object.assign({}, D), k), ct = S1(ft);
    _ && (ct.onProgress = _), E && (ct.onPassword = E);
    const tt = ct;
    return tt.promise.then((Tt) => {
      z({ type: "RESOLVE", value: Tt });
    }).catch((Tt) => {
      tt.destroyed || z({ type: "REJECT", error: Tt });
    }), () => {
      tt.destroy();
    };
  }, [k, z, D]), Et(() => {
    if (!(typeof V > "u")) {
      if (V === !1) {
        lt();
        return;
      }
      J();
    }
  }, [V]), Et(function() {
    X.current.setViewer(bt.current), X.current.setExternalLinkRel(a), X.current.setExternalLinkTarget(l);
  }, [a, l]);
  const et = Ls((Q, ft) => {
    B.current[Q] = ft;
  }, []), rt = Ls((Q) => {
    delete B.current[Q];
  }, []), q = gn(() => ({
    imageResourcesPath: h,
    linkService: X.current,
    onItemClick: v,
    pdf: V,
    registerPage: et,
    renderMode: F,
    rotate: I,
    unregisterPage: rt
  }), [h, v, V, et, F, I, rt]), Y = gn(
    () => C1(M, () => V),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [M, V]
  );
  function dt() {
    return $(R1.Provider, { value: q, children: n });
  }
  function gt() {
    return c ? V == null ? $(La, { type: "loading", children: typeof f == "function" ? f() : f }) : V === !1 ? $(La, { type: "error", children: typeof r == "function" ? r() : r }) : dt() : $(La, { type: "no-data", children: typeof g == "function" ? g() : g });
  }
  return $("div", Object.assign({
    className: xp("react-pdf__Document", i),
    // Assertion is needed for React 18 compatibility
    ref: u,
    style: {
      "--scale-factor": "1"
    }
  }, Y, { children: gt() }));
});
function I1() {
  return Be(R1);
}
function M1() {
  for (var s = [], t = 0; t < arguments.length; t++)
    s[t] = arguments[t];
  var e = s.filter(Boolean);
  if (e.length <= 1) {
    var n = e[0];
    return n || null;
  }
  return function(r) {
    e.forEach(function(a) {
      typeof a == "function" ? a(r) : a && (a.current = r);
    });
  };
}
const F1 = ep(null), D1 = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, YI = /^H(\d+)$/;
function KI(s) {
  return s in D1;
}
function Tp(s) {
  return "children" in s;
}
function O1(s) {
  return Tp(s) ? s.children.length === 1 && 0 in s.children && "id" in s.children[0] : !1;
}
function ZI(s) {
  const t = {};
  if (Tp(s)) {
    const { role: e } = s, n = e.match(YI);
    if (n)
      t.role = "heading", t["aria-level"] = Number(n[1]);
    else if (KI(e)) {
      const i = D1[e];
      i && (t.role = i);
    }
  }
  return t;
}
function N1(s) {
  const t = {};
  if (Tp(s)) {
    if (s.alt !== void 0 && (t["aria-label"] = s.alt), s.lang !== void 0 && (t.lang = s.lang), O1(s)) {
      const [e] = s.children;
      if (e) {
        const n = N1(e);
        return Object.assign(Object.assign({}, t), n);
      }
    }
  } else
    "id" in s && (t["aria-owns"] = s.id);
  return t;
}
function JI(s) {
  return s ? Object.assign(Object.assign({}, ZI(s)), N1(s)) : null;
}
function B1({ className: s, node: t }) {
  const e = gn(() => JI(t), [t]), n = gn(() => !Tp(t) || O1(t) ? null : t.children.map((i, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    $(B1, { node: i }, r)
  )), [t]);
  return $("span", Object.assign({ className: s }, e, { children: n }));
}
function Pp() {
  return Be(F1);
}
function QI() {
  const s = Pp();
  Bt(s, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = s, [n, i] = nl(), { value: r, error: a } = n, { customTextRenderer: l, page: c } = s;
  function u() {
    r && e && e(r);
  }
  function h() {
    a && (Re(!1, a.toString()), t && t(a));
  }
  return Et(function() {
    i({ type: "RESET" });
  }, [i, c]), Et(function() {
    if (l || !c)
      return;
    const g = ru(c.getStructTree()), v = g;
    return g.promise.then((y) => {
      i({ type: "RESOLVE", value: y });
    }).catch((y) => {
      i({ type: "REJECT", error: y });
    }), () => la(v);
  }, [l, c, i]), Et(() => {
    if (r !== void 0) {
      if (r === !1) {
        h();
        return;
      }
      u();
    }
  }, [r]), r ? $(B1, { className: "react-pdf__Page__structTree structTree", node: r }) : null;
}
const Yv = _1;
function t2(s) {
  const t = Pp();
  Bt(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, t), s), { _className: n, canvasBackground: i, devicePixelRatio: r = HI(), onRenderError: a, onRenderSuccess: l, page: c, renderForms: u, renderTextLayer: h, rotate: f, scale: g } = e, { canvasRef: v } = s;
  Bt(c, "Attempted to render page canvas, but no page was specified.");
  const y = Mn(null);
  function _() {
    c && l && l(Wm(c, g));
  }
  function C(k) {
    jI(k) || (Re(!1, k.toString()), a && a(k));
  }
  const E = gn(() => c.getViewport({ scale: g * r, rotation: f }), [r, c, f, g]), P = gn(() => c.getViewport({ scale: g, rotation: f }), [c, f, g]);
  Et(function() {
    if (!c)
      return;
    c.cleanup();
    const { current: F } = y;
    if (!F)
      return;
    F.width = E.width, F.height = E.height, F.style.width = `${Math.floor(P.width)}px`, F.style.height = `${Math.floor(P.height)}px`, F.style.visibility = "hidden";
    const I = {
      annotationMode: u ? Yv.ENABLE_FORMS : Yv.ENABLE,
      canvasContext: F.getContext("2d", { alpha: !1 }),
      viewport: E
    };
    i && (I.background = i);
    const M = c.render(I), x = M;
    return M.promise.then(() => {
      F.style.visibility = "", _();
    }).catch(C), () => la(x);
  }, [i, c, u, E, P]);
  const L = Ls(() => {
    const { current: k } = y;
    k && (k.width = 0, k.height = 0);
  }, []);
  return Et(() => L, [L]), $("canvas", { className: `${n}__canvas`, dir: "ltr", ref: M1(v, y), style: {
    display: "block",
    userSelect: "none"
  }, children: h ? $(QI, {}) : null });
}
function e2(s) {
  return "str" in s;
}
function n2() {
  const s = Pp();
  Bt(s, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: n, onRenderTextLayerError: i, onRenderTextLayerSuccess: r, page: a, pageIndex: l, pageNumber: c, rotate: u, scale: h } = s;
  Bt(a, "Attempted to load page text content, but no page was specified.");
  const [f, g] = nl(), { value: v, error: y } = f, _ = Mn(null), C = Mn(void 0);
  Re(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function E() {
    v && n && n(v);
  }
  function P() {
    y && (Re(!1, y.toString()), e && e(y));
  }
  Et(function() {
    g({ type: "RESET" });
  }, [a, g]), Et(function() {
    if (!a)
      return;
    const T = ru(a.getTextContent()), D = T;
    return T.promise.then((N) => {
      g({ type: "RESOLVE", value: N });
    }).catch((N) => {
      g({ type: "REJECT", error: N });
    }), () => la(D);
  }, [a, g]), Et(() => {
    if (v !== void 0) {
      if (v === !1) {
        P();
        return;
      }
      E();
    }
  }, [v]);
  const L = Ls(() => {
    r && r();
  }, [r]), k = Ls((x) => {
    Re(!1, x.toString()), i && i(x);
  }, [i]);
  function F() {
    const x = C.current;
    x && x.classList.add("active");
  }
  function I() {
    const x = C.current;
    x && x.classList.remove("active");
  }
  const M = gn(() => a.getViewport({ scale: h, rotation: u }), [a, u, h]);
  return Q1(function() {
    if (!a || !v)
      return;
    const { current: T } = _;
    if (!T)
      return;
    T.innerHTML = "";
    const D = a.streamTextContent({ includeMarkedContent: !0 }), N = {
      container: T,
      textContentSource: D,
      viewport: M
    }, U = new E1(N), z = U;
    return U.render().then(() => {
      const V = document.createElement("div");
      V.className = "endOfContent", T.append(V), C.current = V;
      const K = T.querySelectorAll('[role="presentation"]');
      if (t) {
        let X = 0;
        v.items.forEach((B, G) => {
          if (!e2(B))
            return;
          const W = K[X];
          if (!W)
            return;
          const bt = t(Object.assign({
            pageIndex: l,
            pageNumber: c,
            itemIndex: G
          }, B));
          W.innerHTML = bt, X += B.str && B.hasEOL ? 2 : 1;
        });
      }
      L();
    }).catch(k), () => la(z);
  }, [
    t,
    k,
    L,
    a,
    l,
    c,
    v,
    M
  ]), $("div", { className: xp("react-pdf__Page__textContent", "textLayer"), onMouseUp: I, onMouseDown: F, ref: _ });
}
function i2() {
  const s = I1(), t = Pp();
  Bt(t, "Unable to find Page context.");
  const e = Object.assign(Object.assign({}, s), t), { imageResourcesPath: n, linkService: i, onGetAnnotationsError: r, onGetAnnotationsSuccess: a, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: u, pdf: h, renderForms: f, rotate: g, scale: v = 1 } = e;
  Bt(h, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), Bt(u, "Attempted to load page annotations, but no page was specified."), Bt(i, "Attempted to load page annotations, but no linkService was specified.");
  const [y, _] = nl(), { value: C, error: E } = y, P = Mn(null);
  Re(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function L() {
    C && a && a(C);
  }
  function k() {
    E && (Re(!1, E.toString()), r && r(E));
  }
  Et(function() {
    _({ type: "RESET" });
  }, [_, u]), Et(function() {
    if (!u)
      return;
    const T = ru(u.getAnnotations()), D = T;
    return T.promise.then((N) => {
      _({ type: "RESOLVE", value: N });
    }).catch((N) => {
      _({ type: "REJECT", error: N });
    }), () => {
      la(D);
    };
  }, [_, u]), Et(() => {
    if (C !== void 0) {
      if (C === !1) {
        k();
        return;
      }
      L();
    }
  }, [C]);
  function F() {
    c && c();
  }
  function I(x) {
    Re(!1, `${x}`), l && l(x);
  }
  const M = gn(() => u.getViewport({ scale: v, rotation: g }), [u, g, v]);
  return Et(function() {
    if (!h || !u || !i || !C)
      return;
    const { current: T } = P;
    if (!T)
      return;
    const D = M.clone({ dontFlip: !0 }), N = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      div: T,
      l10n: null,
      // TODO: Implement this
      page: u,
      viewport: D
    }, U = {
      annotations: C,
      annotationStorage: h.annotationStorage,
      div: T,
      imageResourcesPath: n,
      linkService: i,
      page: u,
      renderForms: f,
      viewport: D
    };
    T.innerHTML = "";
    try {
      new A1(N).render(U), F();
    } catch (z) {
      I(z);
    }
    return () => {
    };
  }, [C, n, i, u, h, f, M]), $("div", { className: xp("react-pdf__Page__annotations", "annotationLayer"), ref: P });
}
var s2 = function(s, t) {
  var e = {};
  for (var n in s)
    Object.prototype.hasOwnProperty.call(s, n) && t.indexOf(n) < 0 && (e[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(s); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[i]) && (e[n[i]] = s[n[i]]);
  return e;
};
const Kv = 1;
function r2(s) {
  const t = I1(), e = Object.assign(Object.assign({}, t), s), { _className: n = "react-pdf__Page", _enableRegisterUnregisterPage: i = !0, canvasBackground: r, canvasRef: a, children: l, className: c, customRenderer: u, customTextRenderer: h, devicePixelRatio: f, error: g = "Failed to load the page.", height: v, inputRef: y, loading: _ = "Loading page…", noData: C = "No page specified.", onGetAnnotationsError: E, onGetAnnotationsSuccess: P, onGetStructTreeError: L, onGetStructTreeSuccess: k, onGetTextError: F, onGetTextSuccess: I, onLoadError: M, onLoadSuccess: x, onRenderAnnotationLayerError: T, onRenderAnnotationLayerSuccess: D, onRenderError: N, onRenderSuccess: U, onRenderTextLayerError: z, onRenderTextLayerSuccess: V, pageIndex: K, pageNumber: X, pdf: B, registerPage: G, renderAnnotationLayer: W = !0, renderForms: bt = !1, renderMode: At = "canvas", renderTextLayer: j = !0, rotate: nt, scale: it = Kv, unregisterPage: J, width: lt } = e, et = s2(e, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [rt, q] = nl(), { value: Y, error: dt } = rt, gt = Mn(null);
  Bt(B, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const Q = Os(X) ? X - 1 : K ?? null, ft = X ?? (Os(K) ? K + 1 : null), ct = nt ?? (Y ? Y.rotate : null), tt = gn(() => {
    if (!Y)
      return null;
    let Jt = 1;
    const Xt = it ?? Kv;
    if (lt || v) {
      const Me = Y.getViewport({ scale: 1, rotation: ct });
      lt ? Jt = lt / Me.width : v && (Jt = v / Me.height);
    }
    return Xt * Jt;
  }, [v, Y, ct, it, lt]);
  Et(function() {
    return () => {
      Os(Q) && i && J && J(Q);
    };
  }, [i, B, Q, J]);
  function Tt() {
    if (x) {
      if (!Y || !tt)
        return;
      x(Wm(Y, tt));
    }
    if (i && G) {
      if (!Os(Q) || !gt.current)
        return;
      G(Q, gt.current);
    }
  }
  function qt() {
    dt && (Re(!1, dt.toString()), M && M(dt));
  }
  Et(function() {
    q({ type: "RESET" });
  }, [q, B, Q]), Et(function() {
    if (!B || !ft)
      return;
    const Xt = ru(B.getPage(ft)), Me = Xt;
    return Xt.promise.then((b) => {
      q({ type: "RESOLVE", value: b });
    }).catch((b) => {
      q({ type: "REJECT", error: b });
    }), () => la(Me);
  }, [q, B, ft]), Et(() => {
    if (Y !== void 0) {
      if (Y === !1) {
        qt();
        return;
      }
      Tt();
    }
  }, [Y, tt]);
  const ne = gn(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Y && Os(Q) && ft && Os(ct) && Os(tt) ? {
      _className: n,
      canvasBackground: r,
      customTextRenderer: h,
      devicePixelRatio: f,
      onGetAnnotationsError: E,
      onGetAnnotationsSuccess: P,
      onGetStructTreeError: L,
      onGetStructTreeSuccess: k,
      onGetTextError: F,
      onGetTextSuccess: I,
      onRenderAnnotationLayerError: T,
      onRenderAnnotationLayerSuccess: D,
      onRenderError: N,
      onRenderSuccess: U,
      onRenderTextLayerError: z,
      onRenderTextLayerSuccess: V,
      page: Y,
      pageIndex: Q,
      pageNumber: ft,
      renderForms: bt,
      renderTextLayer: j,
      rotate: ct,
      scale: tt
    } : null
  ), [
    n,
    r,
    h,
    f,
    E,
    P,
    L,
    k,
    F,
    I,
    T,
    D,
    N,
    U,
    z,
    V,
    Y,
    Q,
    ft,
    bt,
    j,
    ct,
    tt
  ]), ue = gn(
    () => C1(et, () => Y && (tt ? Wm(Y, tt) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [et, Y, tt]
  ), $t = `${Q}@${tt}/${ct}`;
  function Rt() {
    switch (At) {
      case "custom":
        return Bt(u, 'renderMode was set to "custom", but no customRenderer was passed.'), $(u, {}, `${$t}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return $(t2, { canvasRef: a }, `${$t}_canvas`);
    }
  }
  function Lt() {
    return j ? $(n2, {}, `${$t}_text`) : null;
  }
  function ie() {
    return W ? $(i2, {}, `${$t}_annotations`) : null;
  }
  function ot() {
    return on(F1.Provider, { value: ne, children: [Rt(), Lt(), ie(), l] });
  }
  function Ie() {
    return ft ? B === null || Y === void 0 || Y === null ? $(La, { type: "loading", children: typeof _ == "function" ? _() : _ }) : B === !1 || Y === !1 ? $(La, { type: "error", children: typeof g == "function" ? g() : g }) : ot() : $(La, { type: "no-data", children: typeof C == "function" ? C() : C });
  }
  return $("div", Object.assign({
    className: xp(n, c),
    "data-page-number": ft,
    // Assertion is needed for React 18 compatibility
    ref: M1(y, gt),
    style: {
      "--scale-factor": `${tt}`,
      backgroundColor: r || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    }
  }, ue, { children: Ie() }));
}
UI();
x0.workerSrc = "pdf.worker.mjs";
const $1 = "SET_ZOOM_LEVEL", lg = (s) => ({
  type: $1,
  value: s
}), H1 = "SET_PDF_PAGINATED", a2 = (s) => ({
  type: H1,
  value: s
}), U1 = "SET_NUM_PAGES", Zv = (s) => ({
  type: U1,
  value: s
}), j1 = "SET_CURRENT_PAGE", z1 = "SET_CURRENT_MAIN_STATE", Jv = (s) => ({
  type: j1,
  value: s
}), ns = {
  defaultZoomLevel: 1,
  zoomLevel: 1,
  zoomJump: 0.1,
  paginated: !0,
  numPages: 0,
  currentPage: 1
}, o2 = (s = ns, t) => {
  switch (t.type) {
    case $1: {
      const { value: e } = t;
      return { ...s, zoomLevel: e };
    }
    case H1: {
      const { value: e } = t;
      return { ...s, paginated: e };
    }
    case U1: {
      const { value: e } = t;
      return { ...s, numPages: e };
    }
    case j1: {
      const { value: e } = t;
      return { ...s, currentPage: e };
    }
    case z1: {
      const { value: e } = t;
      return { ...s, mainState: e };
    }
    default:
      return s;
  }
}, rl = ep({ state: ns, dispatch: () => null }), l2 = ({
  children: s,
  mainState: t
}) => {
  var i, r, a, l, c, u, h;
  const [e, n] = Xm(o2, {
    ...ns,
    defaultZoomLevel: ((r = (i = t.config) == null ? void 0 : i.pdfZoom) == null ? void 0 : r.defaultZoom) ?? ns.defaultZoomLevel,
    zoomLevel: ((l = (a = t.config) == null ? void 0 : a.pdfZoom) == null ? void 0 : l.defaultZoom) ?? ns.zoomLevel,
    zoomJump: ((u = (c = t.config) == null ? void 0 : c.pdfZoom) == null ? void 0 : u.zoomJump) ?? ns.zoomJump,
    paginated: (h = t.config) != null && h.pdfVerticalScrollByDefault ? !1 : ns.paginated,
    mainState: t
  });
  return Et(() => {
    n({
      type: z1,
      value: t
    });
  }, [t]), /* @__PURE__ */ $(rl.Provider, { value: { state: e, dispatch: n }, children: s });
}, V1 = ({ pageNum: s }) => {
  const {
    state: { mainState: t, paginated: e, zoomLevel: n, numPages: i, currentPage: r }
  } = Be(rl), { t: a } = ua(), l = (t == null ? void 0 : t.rendererRect) || null, c = s ?? r;
  return /* @__PURE__ */ on(c2, { id: "pdf-page-wrapper", $lastPage: c >= i, children: [
    !e && /* @__PURE__ */ $(h2, { id: "pdf-page-info", children: a("pdfPluginPageNumber", {
      currentPage: c,
      allPagesCount: i
    }) }),
    /* @__PURE__ */ $(
      r2,
      {
        pageNumber: c || r,
        scale: n,
        height: ((l == null ? void 0 : l.height) ?? 100) - 100,
        width: ((l == null ? void 0 : l.width) ?? 100) - 100,
        loading: a("pdfPluginLoading")
      }
    )
  ] });
}, c2 = yt.div`
  margin: ${(s) => s.$lastPage ? "20px 0" : void 0};
`, h2 = yt.div`
  padding: 0 0 10px 10px;
  color: ${(s) => s.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, u2 = () => {
  const {
    state: { numPages: s }
  } = Be(rl), t = [];
  for (let e = 0; e < s; e++)
    t.push(/* @__PURE__ */ $(V1, { pageNum: e + 1 }, e + 1));
  return /* @__PURE__ */ $(ny, { children: t });
}, d2 = () => {
  const {
    state: { mainState: s, paginated: t },
    dispatch: e
  } = Be(rl), { t: n } = ua(), i = (s == null ? void 0 : s.currentDocument) || null;
  return Et(() => {
    e(Zv(ns.numPages));
  }, [i]), !i || i.fileData === void 0 ? null : /* @__PURE__ */ $(
    f2,
    {
      file: i.fileData,
      onLoadSuccess: ({ numPages: r }) => e(Zv(r)),
      loading: /* @__PURE__ */ $("span", { children: n("pdfPluginLoading") }),
      children: t ? /* @__PURE__ */ $(V1, {}) : /* @__PURE__ */ $(u2, {})
    }
  );
}, f2 = yt(XI)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`, p2 = (s) => /* @__PURE__ */ $(G1, { ...s, reverse: !0 }), g2 = (s) => /* @__PURE__ */ $(G1, { ...s }), G1 = (s) => {
  const { color: t, size: e, reverse: n } = s;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      viewBox: "0 0 12 12",
      version: "1.1",
      children: /* @__PURE__ */ $(
        "g",
        {
          id: "Icons",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ $("g", { id: "Rounded", transform: "translate(-548.000000, -1000.000000)", children: /* @__PURE__ */ $("g", { id: "AV", transform: "translate(100.000000, 852.000000)", children: /* @__PURE__ */ $(
            "g",
            {
              id: "-Round-/-AV-/-skip_next",
              transform: "translate(442.000000, 142.000000)",
              children: /* @__PURE__ */ on("g", { children: [
                /* @__PURE__ */ $(
                  "rect",
                  {
                    id: "Rectangle-Copy-52",
                    x: "0",
                    y: "0",
                    width: "24",
                    height: "24"
                  }
                ),
                /* @__PURE__ */ $(
                  "path",
                  {
                    d: "M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z",
                    id: "icon_color",
                    fill: t || "#aaa"
                  }
                )
              ] })
            }
          ) }) })
        }
      )
    }
  );
}, m2 = (s) => {
  const { color: t, size: e, reverse: n } = s;
  return /* @__PURE__ */ on(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(180deg)" : ""}` },
      id: "Layer_1",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ $(
          "path",
          {
            d: "M20.57,9.43A8,8,0,0,0,5.26,10,5,5,0,1,0,5,20h5V18H5a3,3,0,0,1,0-6,3.1,3.1,0,0,1,.79.12l1.12.31.14-1.15a6,6,0,0,1,11.74-.82l.15.54.54.16A3.46,3.46,0,0,1,22,14.5,3.5,3.5,0,0,1,18.5,18H16v2h2.5A5.48,5.48,0,0,0,20.57,9.43Z",
            fill: t || "#aaa"
          }
        ),
        /* @__PURE__ */ $(
          "polygon",
          {
            points: "12 11 12 15.59 10.71 14.29 9.29 15.71 13 19.41 16.71 15.71 15.29 14.29 14 15.59 14 11 12 11",
            fill: t || "#aaa"
          }
        )
      ]
    }
  );
}, v2 = (s) => /* @__PURE__ */ $(W1, { ...s }), y2 = (s) => /* @__PURE__ */ $(W1, { ...s, reverse: !0 }), W1 = (s) => {
  const { color: t, size: e, reverse: n } = s;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      viewBox: "0 0 32 32",
      version: "1.1",
      children: /* @__PURE__ */ $(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ $("g", { id: "search-plus-icon", fill: t || "#aaa", children: /* @__PURE__ */ $(
            "path",
            {
              id: "search-plus",
              d: n ? "M 13 13 L 16 13 L 19 13 L 19 16 L 16 16 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z" : "M 13 13 L 13 10 L 16 10 L 16 13 L 19 13 L 19 16 L 16 16 L 16 19 L 13 19 L 13 16 L 10 16 L 10 13 Z M 19.4271 21.4271 C 18.0372 22.4175 16.3367 23 14.5 23 C 9.8056 23 6 19.1944 6 14.5 C 6 9.8056 9.8056 6 14.5 6 C 19.1944 6 23 9.8056 23 14.5 C 23 16.3367 22.4175 18.0372 21.4271 19.4271 L 27.0119 25.0119 C 27.5621 25.5621 27.5575 26.4425 27.0117 26.9883 L 26.9883 27.0117 C 26.4439 27.5561 25.5576 27.5576 25.0119 27.0119 L 19.4271 21.4271 L 19.4271 21.4271 L 19.4271 21.4271 Z M 14.5 21 C 18.0899 21 21 18.0899 21 14.5 C 21 10.9101 18.0899 8 14.5 8 C 10.9101 8 8 10.9101 8 14.5 C 8 18.0899 10.9101 21 14.5 21 L 14.5 21 Z"
            }
          ) })
        }
      )
    }
  );
}, b2 = (s) => {
  const { color: t, size: e } = s;
  return /* @__PURE__ */ $("svg", { width: e || "100%", height: e || "100%", viewBox: "0 0 24 24", children: /* @__PURE__ */ $(
    "path",
    {
      fill: t || "#aaa",
      d: "M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
    }
  ) });
}, w2 = (s) => {
  const { color: t, size: e, reverse: n } = s;
  return /* @__PURE__ */ $(
    "svg",
    {
      width: e || "100%",
      height: e || "100%",
      style: { transform: `${n ? "rotate(90deg)" : ""}` },
      version: "1.1",
      id: "Scroll_1",
      viewBox: "0 0 297 297",
      xmlSpace: "preserve",
      children: /* @__PURE__ */ $(
        "path",
        {
          fill: t || "#aaa",
          d: `M206.004,200.723h-31.231V96.277h31.231c0.005,0,0.014,0,0.019,0c5.289,0,9.575-4.287,9.575-9.574
  c0-2.342-0.841-4.488-2.236-6.151L156.168,3.851C154.36,1.428,151.515,0,148.492,0c-3.023,0-5.868,1.428-7.675,3.851L83.302,80.98
  c-2.166,2.902-2.507,6.779-0.883,10.017c1.624,3.236,4.936,5.28,8.559,5.28h31.231v104.445H90.978c-3.623,0-6.934,2.044-8.559,5.28
  c-1.624,3.237-1.283,7.114,0.883,10.017l57.513,77.129c1.808,2.424,4.652,3.852,7.675,3.852c3.023,0,5.868-1.428,7.676-3.852
  l57.514-77.129c2.164-2.902,2.507-6.779,0.883-10.017C212.938,202.767,209.627,200.723,206.004,200.723z`
        }
      )
    }
  );
}, A2 = () => {
  const {
    state: { currentPage: s, numPages: t },
    dispatch: e
  } = Be(rl), { t: n } = ua();
  return /* @__PURE__ */ on(_2, { id: "pdf-pagination", children: [
    /* @__PURE__ */ $(
      q1,
      {
        id: "pdf-pagination-prev",
        onClick: () => e(Jv(s - 1)),
        disabled: s === 1,
        children: /* @__PURE__ */ $(p2, { color: "#000", size: "50%" })
      }
    ),
    /* @__PURE__ */ $(S2, { id: "pdf-pagination-info", children: n("pdfPluginPageNumber", {
      currentPage: s,
      allPagesCount: t
    }) }),
    /* @__PURE__ */ $(
      E2,
      {
        id: "pdf-pagination-next",
        onClick: () => e(Jv(s + 1)),
        disabled: s >= t,
        children: /* @__PURE__ */ $(g2, { color: "#000", size: "50%" })
      }
    )
  ] });
}, _2 = yt.div`
  display: flex;
  align-items: center;
`, q1 = yt(hp)`
  width: 30px;
  height: 30px;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, E2 = yt(q1)`
  margin: 0 20px 0 5px;
`, S2 = yt.div`
  color: ${(s) => s.theme.textPrimary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`, x2 = () => {
  const { t: s } = ua(), {
    state: {
      mainState: t,
      paginated: e,
      zoomLevel: n,
      numPages: i,
      zoomJump: r,
      defaultZoomLevel: a
    },
    dispatch: l
  } = Be(rl), c = (t == null ? void 0 : t.currentDocument) || null;
  return /* @__PURE__ */ on(C2, { id: "pdf-controls", children: [
    e && i > 1 && /* @__PURE__ */ $(A2, {}),
    (c == null ? void 0 : c.fileData) && /* @__PURE__ */ $(
      T2,
      {
        id: "pdf-download",
        href: c == null ? void 0 : c.fileData,
        download: (c == null ? void 0 : c.fileName) || (c == null ? void 0 : c.uri),
        title: s("downloadButtonLabel"),
        children: /* @__PURE__ */ $(m2, { color: "#000", size: "75%" })
      }
    ),
    /* @__PURE__ */ $(
      bu,
      {
        id: "pdf-zoom-out",
        onMouseDown: () => l(lg(n - r)),
        children: /* @__PURE__ */ $(y2, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ $(
      bu,
      {
        id: "pdf-zoom-in",
        onMouseDown: () => l(lg(n + r)),
        children: /* @__PURE__ */ $(v2, { color: "#000", size: "80%" })
      }
    ),
    /* @__PURE__ */ $(
      bu,
      {
        id: "pdf-zoom-reset",
        onMouseDown: () => l(lg(a)),
        disabled: n === a,
        children: /* @__PURE__ */ $(b2, { color: "#000", size: "70%" })
      }
    ),
    i > 1 && /* @__PURE__ */ $(
      bu,
      {
        id: "pdf-toggle-pagination",
        onMouseDown: () => l(a2(!e)),
        children: /* @__PURE__ */ $(
          w2,
          {
            color: "#000",
            size: "70%",
            reverse: e
          }
        )
      }
    )
  ] });
}, C2 = yt.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
  padding: 8px;
  background-color: ${(s) => s.theme.tertiary};
  box-shadow: 0px 2px 3px #00000033;

  @media (max-width: 768px) {
    padding: 6px;
  }
`, bu = yt(hp)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`, T2 = yt(yb)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
x0.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${x1}/build/pdf.worker.min.mjs`
).toString();
const C0 = ({ mainState: s }) => /* @__PURE__ */ $(l2, { mainState: s, children: /* @__PURE__ */ on(P2, { id: "pdf-renderer", "data-testid": "pdf-renderer", children: [
  /* @__PURE__ */ $(x2, {}),
  /* @__PURE__ */ $(d2, {})
] }) });
C0.fileTypes = ["pdf", "application/pdf"];
C0.weight = 0;
const P2 = yt.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  /* width */
  &::-webkit-scrollbar {
    ${(s) => s.theme.disableThemeScrollbar ? "" : "width: 10px"};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(s) => s.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(s) => s.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(s) => s.theme.primary};
  }
`, R2 = yt(Xi)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`, T0 = (s) => /* @__PURE__ */ $(R2, { ...s });
T0.fileTypes = ["png", "image/png"];
T0.weight = 0;
let Vi, rn, gd = [];
const L2 = () => {
  var s = Ve(2, 0);
  if (s === 18761)
    rn = !0;
  else if (s === 19789)
    rn = !1;
  else
    throw TypeError("Invalid byte order value.");
  return rn;
}, k2 = () => {
  if (Ve(2, 2) !== 42)
    throw RangeError("You forgot your towel!");
  return !0;
}, I2 = (s) => {
  var t = {
    // TIFF Baseline
    315: "Artist",
    258: "BitsPerSample",
    265: "CellLength",
    264: "CellWidth",
    320: "ColorMap",
    259: "Compression",
    33432: "Copyright",
    306: "DateTime",
    338: "ExtraSamples",
    266: "FillOrder",
    289: "FreeByteCounts",
    288: "FreeOffsets",
    291: "GrayResponseCurve",
    290: "GrayResponseUnit",
    316: "HostComputer",
    270: "ImageDescription",
    257: "ImageLength",
    256: "ImageWidth",
    271: "Make",
    281: "MaxSampleValue",
    280: "MinSampleValue",
    272: "Model",
    254: "NewSubfileType",
    274: "Orientation",
    262: "PhotometricInterpretation",
    284: "PlanarConfiguration",
    296: "ResolutionUnit",
    278: "RowsPerStrip",
    277: "SamplesPerPixel",
    305: "Software",
    279: "StripByteCounts",
    273: "StripOffsets",
    255: "SubfileType",
    263: "Threshholding",
    282: "XResolution",
    283: "YResolution",
    // TIFF Extended
    326: "BadFaxLines",
    327: "CleanFaxData",
    343: "ClipPath",
    328: "ConsecutiveBadFaxLines",
    433: "Decode",
    434: "DefaultImageColor",
    269: "DocumentName",
    336: "DotRange",
    321: "HalftoneHints",
    346: "Indexed",
    347: "JPEGTables",
    285: "PageName",
    297: "PageNumber",
    317: "Predictor",
    319: "PrimaryChromaticities",
    532: "ReferenceBlackWhite",
    339: "SampleFormat",
    559: "StripRowCounts",
    330: "SubIFDs",
    292: "T4Options",
    293: "T6Options",
    325: "TileByteCounts",
    323: "TileLength",
    324: "TileOffsets",
    322: "TileWidth",
    301: "TransferFunction",
    318: "WhitePoint",
    344: "XClipPathUnits",
    286: "XPosition",
    529: "YCbCrCoefficients",
    531: "YCbCrPositioning",
    530: "YCbCrSubSampling",
    345: "YClipPathUnits",
    287: "YPosition",
    // EXIF
    37378: "ApertureValue",
    40961: "ColorSpace",
    36868: "DateTimeDigitized",
    36867: "DateTimeOriginal",
    34665: "Exif IFD",
    36864: "ExifVersion",
    33434: "ExposureTime",
    41728: "FileSource",
    37385: "Flash",
    40960: "FlashpixVersion",
    33437: "FNumber",
    42016: "ImageUniqueID",
    37384: "LightSource",
    37500: "MakerNote",
    37377: "ShutterSpeedValue",
    37510: "UserComment",
    // IPTC
    33723: "IPTC",
    // ICC
    34675: "ICC Profile",
    // XMP
    700: "XMP",
    // GDAL
    42112: "GDAL_METADATA",
    42113: "GDAL_NODATA",
    // Photoshop
    34377: "Photoshop"
  }, e;
  return s in t ? e = t[s] : e = "Tag" + s, e;
}, M2 = (s) => {
  var t = {
    1: "BYTE",
    2: "ASCII",
    3: "SHORT",
    4: "LONG",
    5: "RATIONAL",
    6: "SBYTE",
    7: "UNDEFINED",
    8: "SSHORT",
    9: "SLONG",
    10: "SRATIONAL",
    11: "FLOAT",
    12: "DOUBLE"
  }, e;
  return s in t && (e = t[s]), e;
}, F2 = (s) => {
  var t;
  return ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(s) !== -1 ? t = 1 : ["SHORT", "SSHORT"].indexOf(s) !== -1 ? t = 2 : ["LONG", "SLONG", "FLOAT"].indexOf(s) !== -1 ? t = 4 : ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(s) !== -1 && (t = 8), t;
}, D2 = (s, t, e) => {
  e = e || 0;
  var n = Math.floor(e / 8), i = t + n, r = e + s, a = 32 - s;
  if (r <= 0)
    throw RangeError("No bits requested");
  if (r <= 8)
    var l = 24 + e, c = Vi.getUint8(i, rn);
  else if (r <= 16)
    var l = 16 + e, c = Vi.getUint16(i, rn);
  else if (r <= 32)
    var l = e, c = Vi.getUint32(i, rn);
  else
    throw RangeError("Too many bits requested");
  var u = {
    bits: c << l >>> a,
    byteOffset: i + Math.floor(r / 8),
    bitOffset: r % 8
  };
  return u;
}, Ve = (s, t) => {
  if (s <= 0)
    throw RangeError("No bytes requested");
  if (s <= 1)
    return Vi.getUint8(t, rn);
  if (s <= 2)
    return Vi.getUint16(t, rn);
  if (s <= 3)
    return Vi.getUint32(t, rn) >>> 8;
  if (s <= 4)
    return Vi.getUint32(t, rn);
  throw RangeError("Too many bytes requested");
}, O2 = (s, t, e, n) => {
  var i = [], r = F2(t), a = r * e;
  if (a <= 4) {
    if (rn === !1)
      var l = n >>> (4 - r) * 8;
    else
      var l = n;
    i.push(l);
  } else
    for (var c = 0; c < e; c++) {
      var u = r * c;
      if (r >= 8)
        if (["RATIONAL", "SRATIONAL"].indexOf(t) !== -1)
          i.push(Ve(4, n + u)), i.push(Ve(4, n + u + 4));
        else
          throw TypeError("Can't handle this field type or size");
      else
        i.push(Ve(r, n + u));
    }
  return t === "ASCII" && i.forEach(function(h, f, g) {
    g[f] = String.fromCharCode(h);
  }), i;
}, Ns = (s, t) => {
  var e = Math.pow(2, 8 - t);
  return Math.floor(s * e + (e - 1));
}, Qv = (s, t, e, n) => (typeof n > "u" && (n = 1), "rgba(" + s + ", " + t + ", " + e + ", " + n + ")"), X1 = (s) => {
  for (var t = Ve(2, s), e = [], n = s + 2, i = 0; i < t; n += 12, i++) {
    var r = Ve(2, n), a = Ve(2, n + 2), l = Ve(4, n + 4), c = Ve(4, n + 8), u = I2(r), h = M2(a), f = O2(
      u,
      h,
      l,
      c
    );
    e[u] = { type: h, values: f };
  }
  gd.push(e);
  var g = Ve(4, n);
  return g === 0 ? gd : X1(g);
}, N2 = (s, t) => {
  let e = t || document.createElement("canvas");
  if (s && (Vi = new DataView(s), rn = L2(), !!k2())) {
    var n = Ve(4, 4);
    gd = X1(n);
    var i = gd[0], r = i.ImageWidth.values[0], a = i.ImageLength.values[0];
    e.width = r, e.height = a;
    var l = [], c = i.Compression ? i.Compression.values[0] : 1, u = i.SamplesPerPixel.values[0], h = [], f = 0, g = !1;
    if (i.BitsPerSample.values.forEach(function(ie, ot, Ie) {
      h[ot] = {
        bitsPerSample: ie,
        hasBytesPerSample: !1,
        bytesPerSample: void 0
      }, ie % 8 === 0 && (h[ot].hasBytesPerSample = !0, h[ot].bytesPerSample = ie / 8), f += ie;
    }, void 0), f % 8 === 0) {
      g = !0;
      var v = f / 8;
    }
    var y = i.StripOffsets.values, _ = y.length;
    if (i.StripByteCounts)
      var C = i.StripByteCounts.values;
    else if (_ === 1)
      var C = [
        Math.ceil(r * a * f / 8)
      ];
    else
      throw Error("Cannot recover from missing StripByteCounts");
    for (var E = 0; E < _; E++) {
      var P = y[E];
      l[E] = [];
      for (var L = C[E], k = 0, F = 0, I = 1, M = !0, x = [], T = 0, D = 0, N = 0; k < L; k += I)
        switch (c) {
          case 1:
            for (var U = 0, x = []; U < u; U++)
              if (h[U].hasBytesPerSample) {
                var z = h[U].bytesPerSample * U;
                x.push(
                  Ve(
                    h[U].bytesPerSample,
                    P + k + z
                  )
                );
              } else {
                var V = D2(
                  h[U].bitsPerSample,
                  P + k,
                  F
                );
                throw x.push(V.bits), k = V.byteOffset - P, F = V.bitOffset, RangeError("Cannot handle sub-byte bits per sample");
              }
            if (l[E].push(x), g)
              I = v;
            else
              throw I = 0, RangeError("Cannot handle sub-byte bits per pixel");
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 32773:
            if (M) {
              M = !1;
              var K = 1, X = 1, B = Vi.getInt8(
                P + k,
                rn
              );
              B >= 0 && B <= 127 ? K = B + 1 : B >= -127 && B <= -1 ? X = -B + 1 : M = !0;
            } else {
              for (var G = Ve(1, P + k), U = 0; U < X; U++) {
                if (h[D].hasBytesPerSample)
                  N = N << 8 * T | G, T++, T === h[D].bytesPerSample && (x.push(N), N = T = 0, D++);
                else
                  throw RangeError("Cannot handle sub-byte bits per sample");
                D === u && (l[E].push(x), x = [], D = 0);
              }
              K--, K === 0 && (M = !0);
            }
            I = 1;
            break;
        }
    }
    if (e.getContext) {
      var W = e.getContext("2d");
      if (W.fillStyle = Qv(255, 255, 255, 0), i.RowsPerStrip)
        var bt = i.RowsPerStrip.values[0];
      else
        var bt = a;
      var At = l.length, j = a % bt, nt = j === 0 ? bt : j, it = bt, J = 0, lt = i.PhotometricInterpretation.values[0], et = [], rt = 0;
      if (i.ExtraSamples && (et = i.ExtraSamples.values, rt = et.length), i.ColorMap)
        var q = i.ColorMap.values, Y = Math.pow(2, h[0].bitsPerSample);
      for (var E = 0; E < At; E++) {
        E + 1 === At && (it = nt);
        for (var dt = l[E].length, gt = J * E, Q = 0, ft = 0; ft < dt; Q++)
          for (var ct = 0; ct < r; ct++, ft++) {
            var tt = l[E][ft], Tt = 0, qt = 0, ne = 0, ue = 1;
            if (rt > 0) {
              for (var $t = 0; $t < rt; $t++)
                if (et[$t] === 1 || et[$t] === 2) {
                  ue = tt[3 + $t] / 256;
                  break;
                }
            }
            switch (lt) {
              case 0:
                if (h[0].hasBytesPerSample)
                  var Rt = Math.pow(
                    16,
                    h[0].bytesPerSample * 2
                  );
                tt.forEach(function(ot, Ie, Jt) {
                  Jt[Ie] = Rt - ot;
                });
              case 1:
                Tt = qt = ne = Ns(
                  tt[0],
                  h[0].bitsPerSample
                );
                break;
              case 2:
                Tt = Ns(
                  tt[0],
                  h[0].bitsPerSample
                ), qt = Ns(
                  tt[1],
                  h[1].bitsPerSample
                ), ne = Ns(
                  tt[2],
                  h[2].bitsPerSample
                );
                break;
              case 3:
                if (q === void 0)
                  throw Error("Palette image missing color map");
                var Lt = tt[0];
                Tt = Ns(q[Lt], 16), qt = Ns(
                  q[Y + Lt],
                  16
                ), ne = Ns(
                  q[2 * Y + Lt],
                  16
                );
                break;
              case 4:
                throw RangeError("Not Yet Implemented: Transparency mask");
              case 5:
                throw RangeError("Not Yet Implemented: CMYK");
              case 6:
                throw RangeError("Not Yet Implemented: YCbCr");
              case 8:
                throw RangeError("Not Yet Implemented: CIELab");
              default:
                throw RangeError(
                  "Unknown Photometric Interpretation:",
                  lt
                );
            }
            W.fillStyle = Qv(Tt, qt, ne, ue), W.fillRect(ct, gt + Q, 1, 1);
          }
        J = it;
      }
    }
    return e;
  }
}, Rp = (s) => {
  const {
    mainState: { currentDocument: t }
  } = s, { t: e } = ua(), [n, i] = Ko(!1), [r, a] = Ko(!1);
  return Et(() => {
    if (!t || n)
      return;
    const l = document.getElementById("tiff-img");
    try {
      l && N2(t.fileData, l), i(!0);
    } catch {
      a(!0);
    }
  }, [t, n]), r ? /* @__PURE__ */ $(Xi, { ...s, children: /* @__PURE__ */ $("div", { children: e("brokenFile") }) }) : /* @__PURE__ */ $(Xi, { ...s, children: /* @__PURE__ */ $(B2, { id: "tiff-img" }) });
};
Rp.fileTypes = ["tif", "tiff", "image/tif", "image/tiff"];
Rp.weight = 0;
Rp.fileLoader = NP;
const B2 = yt.canvas`
  max-width: 95%;
  max-height: 95%;
`, Lp = ({ mainState: { currentDocument: s } }) => /* @__PURE__ */ $($2, { id: "txt-renderer", children: s == null ? void 0 : s.fileData });
Lp.fileTypes = ["txt", "text/plain"];
Lp.weight = 0;
Lp.fileLoader = Eb;
const $2 = yt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;
var Y1 = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(s, t) {
  (function(e, n) {
    s.exports = n();
  })(hl, function e() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i = !n.document && !!n.postMessage, r = n.IS_PAPA_WORKER || !1, a = {}, l = 0, c = { parse: function(x, T) {
      var D = (T = T || {}).dynamicTyping || !1;
      if (M(D) && (T.dynamicTypingFunction = D, D = {}), T.dynamicTyping = D, T.transform = !!M(T.transform) && T.transform, T.worker && c.WORKERS_SUPPORTED) {
        var N = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var z = (K = n.URL || n.webkitURL || null, X = e.toString(), c.BLOB_URL || (c.BLOB_URL = K.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", X, ")();"], { type: "text/javascript" })))), V = new n.Worker(z), K, X;
          return V.onmessage = P, V.id = l++, a[V.id] = V;
        }();
        return N.userStep = T.step, N.userChunk = T.chunk, N.userComplete = T.complete, N.userError = T.error, T.step = M(T.step), T.chunk = M(T.chunk), T.complete = M(T.complete), T.error = M(T.error), delete T.worker, void N.postMessage({ input: x, config: T, workerId: N.id });
      }
      var U = null;
      return c.NODE_STREAM_INPUT, typeof x == "string" ? (x = function(z) {
        return z.charCodeAt(0) === 65279 ? z.slice(1) : z;
      }(x), U = T.download ? new f(T) : new v(T)) : x.readable === !0 && M(x.read) && M(x.on) ? U = new y(T) : (n.File && x instanceof File || x instanceof Object) && (U = new g(T)), U.stream(x);
    }, unparse: function(x, T) {
      var D = !1, N = !0, U = ",", z = `\r
`, V = '"', K = V + V, X = !1, B = null, G = !1;
      (function() {
        if (typeof T == "object") {
          if (typeof T.delimiter != "string" || c.BAD_DELIMITERS.filter(function(j) {
            return T.delimiter.indexOf(j) !== -1;
          }).length || (U = T.delimiter), (typeof T.quotes == "boolean" || typeof T.quotes == "function" || Array.isArray(T.quotes)) && (D = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (X = T.skipEmptyLines), typeof T.newline == "string" && (z = T.newline), typeof T.quoteChar == "string" && (V = T.quoteChar), typeof T.header == "boolean" && (N = T.header), Array.isArray(T.columns)) {
            if (T.columns.length === 0)
              throw new Error("Option columns is empty");
            B = T.columns;
          }
          T.escapeChar !== void 0 && (K = T.escapeChar + V), (typeof T.escapeFormulae == "boolean" || T.escapeFormulae instanceof RegExp) && (G = T.escapeFormulae instanceof RegExp ? T.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var W = new RegExp(C(V), "g");
      if (typeof x == "string" && (x = JSON.parse(x)), Array.isArray(x)) {
        if (!x.length || Array.isArray(x[0]))
          return bt(null, x, X);
        if (typeof x[0] == "object")
          return bt(B || Object.keys(x[0]), x, X);
      } else if (typeof x == "object")
        return typeof x.data == "string" && (x.data = JSON.parse(x.data)), Array.isArray(x.data) && (x.fields || (x.fields = x.meta && x.meta.fields || B), x.fields || (x.fields = Array.isArray(x.data[0]) ? x.fields : typeof x.data[0] == "object" ? Object.keys(x.data[0]) : []), Array.isArray(x.data[0]) || typeof x.data[0] == "object" || (x.data = [x.data])), bt(x.fields || [], x.data || [], X);
      throw new Error("Unable to serialize unrecognized input");
      function bt(j, nt, it) {
        var J = "";
        typeof j == "string" && (j = JSON.parse(j)), typeof nt == "string" && (nt = JSON.parse(nt));
        var lt = Array.isArray(j) && 0 < j.length, et = !Array.isArray(nt[0]);
        if (lt && N) {
          for (var rt = 0; rt < j.length; rt++)
            0 < rt && (J += U), J += At(j[rt], rt);
          0 < nt.length && (J += z);
        }
        for (var q = 0; q < nt.length; q++) {
          var Y = lt ? j.length : nt[q].length, dt = !1, gt = lt ? Object.keys(nt[q]).length === 0 : nt[q].length === 0;
          if (it && !lt && (dt = it === "greedy" ? nt[q].join("").trim() === "" : nt[q].length === 1 && nt[q][0].length === 0), it === "greedy" && lt) {
            for (var Q = [], ft = 0; ft < Y; ft++) {
              var ct = et ? j[ft] : ft;
              Q.push(nt[q][ct]);
            }
            dt = Q.join("").trim() === "";
          }
          if (!dt) {
            for (var tt = 0; tt < Y; tt++) {
              0 < tt && !gt && (J += U);
              var Tt = lt && et ? j[tt] : tt;
              J += At(nt[q][Tt], tt);
            }
            q < nt.length - 1 && (!it || 0 < Y && !gt) && (J += z);
          }
        }
        return J;
      }
      function At(j, nt) {
        if (j == null)
          return "";
        if (j.constructor === Date)
          return JSON.stringify(j).slice(1, 25);
        var it = !1;
        G && typeof j == "string" && G.test(j) && (j = "'" + j, it = !0);
        var J = j.toString().replace(W, K);
        return (it = it || D === !0 || typeof D == "function" && D(j, nt) || Array.isArray(D) && D[nt] || function(lt, et) {
          for (var rt = 0; rt < et.length; rt++)
            if (-1 < lt.indexOf(et[rt]))
              return !0;
          return !1;
        }(J, c.BAD_DELIMITERS) || -1 < J.indexOf(U) || J.charAt(0) === " " || J.charAt(J.length - 1) === " ") ? V + J + V : J;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = E, c.ParserHandle = _, c.NetworkStreamer = f, c.FileStreamer = g, c.StringStreamer = v, c.ReadableStreamStreamer = y, n.jQuery) {
      var u = n.jQuery;
      u.fn.parse = function(x) {
        var T = x.config || {}, D = [];
        return this.each(function(z) {
          if (!(u(this).prop("tagName").toUpperCase() === "INPUT" && u(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var V = 0; V < this.files.length; V++)
            D.push({ file: this.files[V], inputElem: this, instanceConfig: u.extend({}, T) });
        }), N(), this;
        function N() {
          if (D.length !== 0) {
            var z, V, K, X, B = D[0];
            if (M(x.before)) {
              var G = x.before(B.file, B.inputElem);
              if (typeof G == "object") {
                if (G.action === "abort")
                  return z = "AbortError", V = B.file, K = B.inputElem, X = G.reason, void (M(x.error) && x.error({ name: z }, V, K, X));
                if (G.action === "skip")
                  return void U();
                typeof G.config == "object" && (B.instanceConfig = u.extend(B.instanceConfig, G.config));
              } else if (G === "skip")
                return void U();
            }
            var W = B.instanceConfig.complete;
            B.instanceConfig.complete = function(bt) {
              M(W) && W(bt, B.file, B.inputElem), U();
            }, c.parse(B.file, B.instanceConfig);
          } else
            M(x.complete) && x.complete();
        }
        function U() {
          D.splice(0, 1), N();
        }
      };
    }
    function h(x) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
        var D = F(T);
        D.chunkSize = parseInt(D.chunkSize), T.step || T.chunk || (D.chunkSize = null), this._handle = new _(D), (this._handle.streamer = this)._config = D;
      }).call(this, x), this.parseChunk = function(T, D) {
        if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
          var N = this._config.beforeFirstChunk(T);
          N !== void 0 && (T = N);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var U = this._partialLine + T;
        this._partialLine = "";
        var z = this._handle.parse(U, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var V = z.meta.cursor;
          this._finished || (this._partialLine = U.substring(V - this._baseIndex), this._baseIndex = V), z && z.data && (this._rowCount += z.data.length);
          var K = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (r)
            n.postMessage({ results: z, workerId: c.WORKER_ID, finished: K });
          else if (M(this._config.chunk) && !D) {
            if (this._config.chunk(z, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            z = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(z.data), this._completeResults.errors = this._completeResults.errors.concat(z.errors), this._completeResults.meta = z.meta), this._completed || !K || !M(this._config.complete) || z && z.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), K || z && z.meta.paused || this._nextChunk(), z;
        }
        this._halted = !0;
      }, this._sendError = function(T) {
        M(this._config.error) ? this._config.error(T) : r && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: T, finished: !1 });
      };
    }
    function f(x) {
      var T;
      (x = x || {}).chunkSize || (x.chunkSize = c.RemoteChunkSize), h.call(this, x), this._nextChunk = i ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(D) {
        this._input = D, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), i || (T.onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
            var D = this._config.downloadRequestHeaders;
            for (var N in D)
              T.setRequestHeader(N, D[N]);
          }
          if (this._config.chunkSize) {
            var U = this._start + this._config.chunkSize - 1;
            T.setRequestHeader("Range", "bytes=" + this._start + "-" + U);
          }
          try {
            T.send(this._config.downloadRequestBody);
          } catch (z) {
            this._chunkError(z.message);
          }
          i && T.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : T.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(D) {
          var N = D.getResponseHeader("Content-Range");
          return N === null ? -1 : parseInt(N.substring(N.lastIndexOf("/") + 1));
        }(T), this.parseChunk(T.responseText)));
      }, this._chunkError = function(D) {
        var N = T.statusText || D;
        this._sendError(new Error(N));
      };
    }
    function g(x) {
      var T, D;
      (x = x || {}).chunkSize || (x.chunkSize = c.LocalChunkSize), h.call(this, x);
      var N = typeof FileReader < "u";
      this.stream = function(U) {
        this._input = U, D = U.slice || U.webkitSlice || U.mozSlice, N ? ((T = new FileReader()).onload = I(this._chunkLoaded, this), T.onerror = I(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var U = this._input;
        if (this._config.chunkSize) {
          var z = Math.min(this._start + this._config.chunkSize, this._input.size);
          U = D.call(U, this._start, z);
        }
        var V = T.readAsText(U, this._config.encoding);
        N || this._chunkLoaded({ target: { result: V } });
      }, this._chunkLoaded = function(U) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(U.target.result);
      }, this._chunkError = function() {
        this._sendError(T.error);
      };
    }
    function v(x) {
      var T;
      h.call(this, x = x || {}), this.stream = function(D) {
        return T = D, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var D, N = this._config.chunkSize;
          return N ? (D = T.substring(0, N), T = T.substring(N)) : (D = T, T = ""), this._finished = !T, this.parseChunk(D);
        }
      };
    }
    function y(x) {
      h.call(this, x = x || {});
      var T = [], D = !0, N = !1;
      this.pause = function() {
        h.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        h.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(U) {
        this._input = U, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        N && T.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : D = !0;
      }, this._streamData = I(function(U) {
        try {
          T.push(typeof U == "string" ? U : U.toString(this._config.encoding)), D && (D = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
        } catch (z) {
          this._streamError(z);
        }
      }, this), this._streamError = I(function(U) {
        this._streamCleanUp(), this._sendError(U);
      }, this), this._streamEnd = I(function() {
        this._streamCleanUp(), N = !0, this._streamData("");
      }, this), this._streamCleanUp = I(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function _(x) {
      var T, D, N, U = Math.pow(2, 53), z = -U, V = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, K = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, X = this, B = 0, G = 0, W = !1, bt = !1, At = [], j = { data: [], errors: [], meta: {} };
      if (M(x.step)) {
        var nt = x.step;
        x.step = function(q) {
          if (j = q, lt())
            J();
          else {
            if (J(), j.data.length === 0)
              return;
            B += q.data.length, x.preview && B > x.preview ? D.abort() : (j.data = j.data[0], nt(j, X));
          }
        };
      }
      function it(q) {
        return x.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
      }
      function J() {
        return j && N && (rt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), N = !1), x.skipEmptyLines && (j.data = j.data.filter(function(q) {
          return !it(q);
        })), lt() && function() {
          if (!j)
            return;
          function q(dt, gt) {
            M(x.transformHeader) && (dt = x.transformHeader(dt, gt)), At.push(dt);
          }
          if (Array.isArray(j.data[0])) {
            for (var Y = 0; lt() && Y < j.data.length; Y++)
              j.data[Y].forEach(q);
            j.data.splice(0, 1);
          } else
            j.data.forEach(q);
        }(), function() {
          if (!j || !x.header && !x.dynamicTyping && !x.transform)
            return j;
          function q(dt, gt) {
            var Q, ft = x.header ? {} : [];
            for (Q = 0; Q < dt.length; Q++) {
              var ct = Q, tt = dt[Q];
              x.header && (ct = Q >= At.length ? "__parsed_extra" : At[Q]), x.transform && (tt = x.transform(tt, ct)), tt = et(ct, tt), ct === "__parsed_extra" ? (ft[ct] = ft[ct] || [], ft[ct].push(tt)) : ft[ct] = tt;
            }
            return x.header && (Q > At.length ? rt("FieldMismatch", "TooManyFields", "Too many fields: expected " + At.length + " fields but parsed " + Q, G + gt) : Q < At.length && rt("FieldMismatch", "TooFewFields", "Too few fields: expected " + At.length + " fields but parsed " + Q, G + gt)), ft;
          }
          var Y = 1;
          return !j.data.length || Array.isArray(j.data[0]) ? (j.data = j.data.map(q), Y = j.data.length) : j.data = q(j.data, 0), x.header && j.meta && (j.meta.fields = At), G += Y, j;
        }();
      }
      function lt() {
        return x.header && At.length === 0;
      }
      function et(q, Y) {
        return dt = q, x.dynamicTypingFunction && x.dynamicTyping[dt] === void 0 && (x.dynamicTyping[dt] = x.dynamicTypingFunction(dt)), (x.dynamicTyping[dt] || x.dynamicTyping) === !0 ? Y === "true" || Y === "TRUE" || Y !== "false" && Y !== "FALSE" && (function(gt) {
          if (V.test(gt)) {
            var Q = parseFloat(gt);
            if (z < Q && Q < U)
              return !0;
          }
          return !1;
        }(Y) ? parseFloat(Y) : K.test(Y) ? new Date(Y) : Y === "" ? null : Y) : Y;
        var dt;
      }
      function rt(q, Y, dt, gt) {
        var Q = { type: q, code: Y, message: dt };
        gt !== void 0 && (Q.row = gt), j.errors.push(Q);
      }
      this.parse = function(q, Y, dt) {
        var gt = x.quoteChar || '"';
        if (x.newline || (x.newline = function(ct, tt) {
          ct = ct.substring(0, 1048576);
          var Tt = new RegExp(C(tt) + "([^]*?)" + C(tt), "gm"), qt = (ct = ct.replace(Tt, "")).split("\r"), ne = ct.split(`
`), ue = 1 < ne.length && ne[0].length < qt[0].length;
          if (qt.length === 1 || ue)
            return `
`;
          for (var $t = 0, Rt = 0; Rt < qt.length; Rt++)
            qt[Rt][0] === `
` && $t++;
          return $t >= qt.length / 2 ? `\r
` : "\r";
        }(q, gt)), N = !1, x.delimiter)
          M(x.delimiter) && (x.delimiter = x.delimiter(q), j.meta.delimiter = x.delimiter);
        else {
          var Q = function(ct, tt, Tt, qt, ne) {
            var ue, $t, Rt, Lt;
            ne = ne || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ie = 0; ie < ne.length; ie++) {
              var ot = ne[ie], Ie = 0, Jt = 0, Xt = 0;
              Rt = void 0;
              for (var Me = new E({ comments: qt, delimiter: ot, newline: tt, preview: 10 }).parse(ct), b = 0; b < Me.data.length; b++)
                if (Tt && it(Me.data[b]))
                  Xt++;
                else {
                  var d = Me.data[b].length;
                  Jt += d, Rt !== void 0 ? 0 < d && (Ie += Math.abs(d - Rt), Rt = d) : Rt = d;
                }
              0 < Me.data.length && (Jt /= Me.data.length - Xt), ($t === void 0 || Ie <= $t) && (Lt === void 0 || Lt < Jt) && 1.99 < Jt && ($t = Ie, ue = ot, Lt = Jt);
            }
            return { successful: !!(x.delimiter = ue), bestDelimiter: ue };
          }(q, x.newline, x.skipEmptyLines, x.comments, x.delimitersToGuess);
          Q.successful ? x.delimiter = Q.bestDelimiter : (N = !0, x.delimiter = c.DefaultDelimiter), j.meta.delimiter = x.delimiter;
        }
        var ft = F(x);
        return x.preview && x.header && ft.preview++, T = q, D = new E(ft), j = D.parse(T, Y, dt), J(), W ? { meta: { paused: !0 } } : j || { meta: { paused: !1 } };
      }, this.paused = function() {
        return W;
      }, this.pause = function() {
        W = !0, D.abort(), T = M(x.chunk) ? "" : T.substring(D.getCharIndex());
      }, this.resume = function() {
        X.streamer._halted ? (W = !1, X.streamer.parseChunk(T, !0)) : setTimeout(X.resume, 3);
      }, this.aborted = function() {
        return bt;
      }, this.abort = function() {
        bt = !0, D.abort(), j.meta.aborted = !0, M(x.complete) && x.complete(j), T = "";
      };
    }
    function C(x) {
      return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(x) {
      var T, D = (x = x || {}).delimiter, N = x.newline, U = x.comments, z = x.step, V = x.preview, K = x.fastMode, X = T = x.quoteChar === void 0 || x.quoteChar === null ? '"' : x.quoteChar;
      if (x.escapeChar !== void 0 && (X = x.escapeChar), (typeof D != "string" || -1 < c.BAD_DELIMITERS.indexOf(D)) && (D = ","), U === D)
        throw new Error("Comment character same as delimiter");
      U === !0 ? U = "#" : (typeof U != "string" || -1 < c.BAD_DELIMITERS.indexOf(U)) && (U = !1), N !== `
` && N !== "\r" && N !== `\r
` && (N = `
`);
      var B = 0, G = !1;
      this.parse = function(W, bt, At) {
        if (typeof W != "string")
          throw new Error("Input must be a string");
        var j = W.length, nt = D.length, it = N.length, J = U.length, lt = M(z), et = [], rt = [], q = [], Y = B = 0;
        if (!W)
          return p();
        if (x.header && !bt) {
          var dt = W.split(N)[0].split(D), gt = [], Q = {}, ft = !1;
          for (var ct in dt) {
            var tt = dt[ct];
            M(x.transformHeader) && (tt = x.transformHeader(tt, ct));
            var Tt = tt, qt = Q[tt] || 0;
            for (0 < qt && (ft = !0, Tt = tt + "_" + qt), Q[tt] = qt + 1; gt.includes(Tt); )
              Tt = Tt + "_" + qt;
            gt.push(Tt);
          }
          if (ft) {
            var ne = W.split(N);
            ne[0] = gt.join(D), W = ne.join(N);
          }
        }
        if (K || K !== !1 && W.indexOf(T) === -1) {
          for (var ue = W.split(N), $t = 0; $t < ue.length; $t++) {
            if (q = ue[$t], B += q.length, $t !== ue.length - 1)
              B += N.length;
            else if (At)
              return p();
            if (!U || q.substring(0, J) !== U) {
              if (lt) {
                if (et = [], Xt(q.split(D)), S(), G)
                  return p();
              } else
                Xt(q.split(D));
              if (V && V <= $t)
                return et = et.slice(0, V), p(!0);
            }
          }
          return p();
        }
        for (var Rt = W.indexOf(D, B), Lt = W.indexOf(N, B), ie = new RegExp(C(X) + C(T), "g"), ot = W.indexOf(T, B); ; )
          if (W[B] !== T)
            if (U && q.length === 0 && W.substring(B, B + J) === U) {
              if (Lt === -1)
                return p();
              B = Lt + it, Lt = W.indexOf(N, B), Rt = W.indexOf(D, B);
            } else if (Rt !== -1 && (Rt < Lt || Lt === -1))
              q.push(W.substring(B, Rt)), B = Rt + nt, Rt = W.indexOf(D, B);
            else {
              if (Lt === -1)
                break;
              if (q.push(W.substring(B, Lt)), d(Lt + it), lt && (S(), G))
                return p();
              if (V && et.length >= V)
                return p(!0);
            }
          else
            for (ot = B, B++; ; ) {
              if ((ot = W.indexOf(T, ot + 1)) === -1)
                return At || rt.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: et.length, index: B }), b();
              if (ot === j - 1)
                return b(W.substring(B, ot).replace(ie, T));
              if (T !== X || W[ot + 1] !== X) {
                if (T === X || ot === 0 || W[ot - 1] !== X) {
                  Rt !== -1 && Rt < ot + 1 && (Rt = W.indexOf(D, ot + 1)), Lt !== -1 && Lt < ot + 1 && (Lt = W.indexOf(N, ot + 1));
                  var Ie = Me(Lt === -1 ? Rt : Math.min(Rt, Lt));
                  if (W.substr(ot + 1 + Ie, nt) === D) {
                    q.push(W.substring(B, ot).replace(ie, T)), W[B = ot + 1 + Ie + nt] !== T && (ot = W.indexOf(T, B)), Rt = W.indexOf(D, B), Lt = W.indexOf(N, B);
                    break;
                  }
                  var Jt = Me(Lt);
                  if (W.substring(ot + 1 + Jt, ot + 1 + Jt + it) === N) {
                    if (q.push(W.substring(B, ot).replace(ie, T)), d(ot + 1 + Jt + it), Rt = W.indexOf(D, B), ot = W.indexOf(T, B), lt && (S(), G))
                      return p();
                    if (V && et.length >= V)
                      return p(!0);
                    break;
                  }
                  rt.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: et.length, index: B }), ot++;
                }
              } else
                ot++;
            }
        return b();
        function Xt(R) {
          et.push(R), Y = B;
        }
        function Me(R) {
          var O = 0;
          if (R !== -1) {
            var H = W.substring(ot + 1, R);
            H && H.trim() === "" && (O = H.length);
          }
          return O;
        }
        function b(R) {
          return At || (R === void 0 && (R = W.substring(B)), q.push(R), B = j, Xt(q), lt && S()), p();
        }
        function d(R) {
          B = R, Xt(q), q = [], Lt = W.indexOf(N, B);
        }
        function p(R) {
          return { data: et, errors: rt, meta: { delimiter: D, linebreak: N, aborted: G, truncated: !!R, cursor: Y + (bt || 0) } };
        }
        function S() {
          z(p()), et = [], rt = [];
        }
      }, this.abort = function() {
        G = !0;
      }, this.getCharIndex = function() {
        return B;
      };
    }
    function P(x) {
      var T = x.data, D = a[T.workerId], N = !1;
      if (T.error)
        D.userError(T.error, T.file);
      else if (T.results && T.results.data) {
        var U = { abort: function() {
          N = !0, L(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: k, resume: k };
        if (M(D.userStep)) {
          for (var z = 0; z < T.results.data.length && (D.userStep({ data: T.results.data[z], errors: T.results.errors, meta: T.results.meta }, U), !N); z++)
            ;
          delete T.results;
        } else
          M(D.userChunk) && (D.userChunk(T.results, U, T.file), delete T.results);
      }
      T.finished && !N && L(T.workerId, T.results);
    }
    function L(x, T) {
      var D = a[x];
      M(D.userComplete) && D.userComplete(T), D.terminate(), delete a[x];
    }
    function k() {
      throw new Error("Not implemented.");
    }
    function F(x) {
      if (typeof x != "object" || x === null)
        return x;
      var T = Array.isArray(x) ? [] : {};
      for (var D in x)
        T[D] = F(x[D]);
      return T;
    }
    function I(x, T) {
      return function() {
        x.apply(T, arguments);
      };
    }
    function M(x) {
      return typeof x == "function";
    }
    return r && (n.onmessage = function(x) {
      var T = x.data;
      if (c.WORKER_ID === void 0 && T && (c.WORKER_ID = T.workerId), typeof T.input == "string")
        n.postMessage({ workerId: c.WORKER_ID, results: c.parse(T.input, T.config), finished: !0 });
      else if (n.File && T.input instanceof File || T.input instanceof Object) {
        var D = c.parse(T.input, T.config);
        D && n.postMessage({ workerId: c.WORKER_ID, results: D, finished: !0 });
      }
    }), (f.prototype = Object.create(h.prototype)).constructor = f, (g.prototype = Object.create(h.prototype)).constructor = g, (v.prototype = Object.create(v.prototype)).constructor = v, (y.prototype = Object.create(h.prototype)).constructor = y, c;
  });
})(Y1);
var H2 = Y1.exports;
const U2 = /* @__PURE__ */ sy(H2), kp = ({
  mainState: { currentDocument: s, config: t }
}) => {
  const [e, n] = Ko([]);
  return Et(() => {
    var i;
    if (s != null && s.fileData) {
      const r = U2.parse(s.fileData, {
        delimiter: (t == null ? void 0 : t.csvDelimiter) ?? ","
      });
      !((i = r.errors) != null && i.length) && r.data && n(r.data);
    }
  }, [s, t == null ? void 0 : t.csvDelimiter]), e.length ? /* @__PURE__ */ $(j2, { children: /* @__PURE__ */ on(z2, { children: [
    /* @__PURE__ */ $("thead", { children: /* @__PURE__ */ $("tr", { children: e[0].map((i) => /* @__PURE__ */ $("th", { children: i }, i)) }) }),
    /* @__PURE__ */ $("tbody", { children: e.slice(1, e.length).map((i) => /* @__PURE__ */ $("tr", { children: i.map((r) => /* @__PURE__ */ $("td", { children: r }, r)) }, i.join(""))) })
  ] }) }) : null;
};
kp.fileTypes = ["csv", "text/csv"];
kp.weight = 0;
kp.fileLoader = Eb;
const j2 = yt.div`
  width: 100%;
`, z2 = yt.table`
  width: 100%;
  text-align: left;

  th,
  td {
    padding: 5px 10px;

    &:empty {
      display: none;
    }
  }
`, P0 = (s) => /* @__PURE__ */ $(Xi, { ...s });
P0.fileTypes = ["gif", "image/gif"];
P0.weight = 0;
const R0 = ({ mainState: { currentDocument: s } }) => s ? /* @__PURE__ */ $(V2, { id: "video-renderer", children: /* @__PURE__ */ $(G2, { controls: !0, src: s.uri }) }) : null;
R0.fileTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"];
R0.weight = 0;
const V2 = yt.div`
  width: 100%;
`, G2 = yt.video`
  width: 100%;
  height: 100%;
  border: 0;
`, L0 = (s) => /* @__PURE__ */ $(Xi, { ...s });
L0.fileTypes = ["webp", "image/webp"];
L0.weight = 0;
const W2 = [
  d0,
  dp,
  f0,
  fp,
  C0,
  T0,
  Rp,
  Lp,
  kp,
  P0,
  R0,
  L0
], q2 = qm((s, t) => {
  const { documents: e, theme: n } = s;
  if (!e)
    throw new Error("Please provide an array of documents to DocViewer!");
  return /* @__PURE__ */ $(
    oP,
    {
      ref: t,
      pluginRenderers: W2,
      ...s,
      children: /* @__PURE__ */ $(
        Gx,
        {
          theme: n ? { ...Ev, ...n } : Ev,
          children: /* @__PURE__ */ on(
            X2,
            {
              id: "react-doc-viewer",
              "data-testid": "react-doc-viewer",
              className: s.className,
              style: s.style,
              children: [
                /* @__PURE__ */ $(DP, {}),
                /* @__PURE__ */ $(zP, {})
              ]
            }
          )
        }
      )
    }
  );
}), rM = tA(q2), X2 = yt.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  height: 100%;
`;
export {
  Pg as B,
  kp as C,
  rM as D,
  dp as H,
  f0 as J,
  fp as M,
  C0 as P,
  Rp as T,
  R0 as V,
  L0 as W,
  J2 as a,
  W2 as b,
  hl as c,
  nM as d,
  NP as e,
  _b as f,
  sy as g,
  tM as h,
  BP as i,
  d0 as j,
  T0 as k,
  Lp as l,
  P0 as m,
  ut as p,
  Q2 as s,
  Eb as t
};

var fo = function(e, t) {
  return fo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r)
      Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, fo(e, t);
};
function Ot(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  fo(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function LO(e, t, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function s(p) {
      try {
        u(r.next(p));
      } catch (g) {
        o(g);
      }
    }
    function l(p) {
      try {
        u(r.throw(p));
      } catch (g) {
        o(g);
      }
    }
    function u(p) {
      p.done ? i(p.value) : a(p.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function ep(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(p) {
      return l([u, p]);
    };
  }
  function l(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (p) {
        u = [6, p], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ir(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ct(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function Yt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function nr(e) {
  return this instanceof nr ? (this.v = e, this) : new nr(e);
}
function zO(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), a, i = [];
  return a = {}, o("next"), o("throw"), o("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function o(m) {
    r[m] && (a[m] = function(h) {
      return new Promise(function(I, v) {
        i.push([m, h, I, v]) > 1 || s(m, h);
      });
    });
  }
  function s(m, h) {
    try {
      l(r[m](h));
    } catch (I) {
      g(i[0][3], I);
    }
  }
  function l(m) {
    m.value instanceof nr ? Promise.resolve(m.value.v).then(u, p) : g(i[0][2], m);
  }
  function u(m) {
    s("next", m);
  }
  function p(m) {
    s("throw", m);
  }
  function g(m, h) {
    m(h), i.shift(), i.length && s(i[0][0], i[0][1]);
  }
}
function UO(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof ir == "function" ? ir(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(i) {
    n[i] = e[i] && function(o) {
      return new Promise(function(s, l) {
        o = e[i](o), a(s, l, o.done, o.value);
      });
    };
  }
  function a(i, o, s, l) {
    Promise.resolve(l).then(function(u) {
      i({ value: u, done: s });
    }, o);
  }
}
function re(e) {
  return typeof e == "function";
}
function ds(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Zi = ds(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, r) {
      return r + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function La(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Nt = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, a, i;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var s = ir(o), l = s.next(); !l.done; l = s.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          o.remove(this);
      var p = this.initialTeardown;
      if (re(p))
        try {
          p();
        } catch (v) {
          i = v instanceof Zi ? v.errors : [v];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var m = ir(g), h = m.next(); !h.done; h = m.next()) {
            var I = h.value;
            try {
              Mc(I);
            } catch (v) {
              i = i ?? [], v instanceof Zi ? i = Yt(Yt([], Ct(i)), Ct(v.errors)) : i.push(v);
            }
          }
        } catch (v) {
          r = { error: v };
        } finally {
          try {
            h && !h.done && (a = m.return) && a.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new Zi(i);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Mc(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && La(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && La(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), tp = Nt.EMPTY;
function np(e) {
  return e instanceof Nt || e && "closed" in e && re(e.remove) && re(e.add) && re(e.unsubscribe);
}
function Mc(e) {
  re(e) ? e() : e.unsubscribe();
}
var rp = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, ZO = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Yt([e, t], Ct(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function ap(e) {
  ZO.setTimeout(function() {
    throw e;
  });
}
function mo() {
}
function Da(e) {
  e();
}
var ps = function(e) {
  Ot(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, np(n) && n.add(r)) : r.destination = WO, r;
  }
  return t.create = function(n, r, a) {
    return new za(n, r, a);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Nt), qO = Function.prototype.bind;
function qi(e, t) {
  return qO.call(e, t);
}
var BO = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        ka(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        ka(r);
      }
    else
      ka(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ka(n);
      }
  }, e;
}(), za = function(e) {
  Ot(t, e);
  function t(n, r, a) {
    var i = e.call(this) || this, o;
    if (re(n) || !n)
      o = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: a ?? void 0
      };
    else {
      var s;
      i && rp.useDeprecatedNextContext ? (s = Object.create(n), s.unsubscribe = function() {
        return i.unsubscribe();
      }, o = {
        next: n.next && qi(n.next, s),
        error: n.error && qi(n.error, s),
        complete: n.complete && qi(n.complete, s)
      }) : o = n;
    }
    return i.destination = new BO(o), i;
  }
  return t;
}(ps);
function ka(e) {
  ap(e);
}
function GO(e) {
  throw e;
}
var WO = {
  closed: !0,
  next: mo,
  error: GO,
  complete: mo
}, fs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Zn(e) {
  return e;
}
function KO(e) {
  return e.length === 0 ? Zn : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, r) {
      return r(n);
    }, t);
  };
}
var Me = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var a = this, i = YO(t) ? t : new za(t, n, r);
    return Da(function() {
      var o = a, s = o.operator, l = o.source;
      i.add(s ? s.call(i, l) : l ? a._subscribe(i) : a._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Ec(n), new n(function(a, i) {
      var o = new za({
        next: function(s) {
          try {
            t(s);
          } catch (l) {
            i(l), o.unsubscribe();
          }
        },
        error: i,
        complete: a
      });
      r.subscribe(o);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[fs] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return KO(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Ec(t), new t(function(r, a) {
      var i;
      n.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return a(o);
      }, function() {
        return r(i);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ec(e) {
  var t;
  return (t = e ?? rp.Promise) !== null && t !== void 0 ? t : Promise;
}
function HO(e) {
  return e && re(e.next) && re(e.error) && re(e.complete);
}
function YO(e) {
  return e && e instanceof ps || HO(e) && np(e);
}
function QO(e) {
  return re(e == null ? void 0 : e.lift);
}
function Ye(e) {
  return function(t) {
    if (QO(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Ee(e, t, n, r, a) {
  return new XO(e, t, n, r, a);
}
var XO = function(e) {
  Ot(t, e);
  function t(n, r, a, i, o, s) {
    var l = e.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = s, l._next = r ? function(u) {
      try {
        r(u);
      } catch (p) {
        n.error(p);
      }
    } : e.prototype._next, l._error = i ? function(u) {
      try {
        i(u);
      } catch (p) {
        n.error(p);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, l._complete = a ? function() {
      try {
        a();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, l;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(ps), $O = ds(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ve = function(e) {
  Ot(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new Cc(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new $O();
  }, t.prototype.next = function(n) {
    var r = this;
    Da(function() {
      var a, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = ir(r.currentObservers), s = o.next(); !s.done; s = o.next()) {
            var l = s.value;
            l.next(n);
          }
        } catch (u) {
          a = { error: u };
        } finally {
          try {
            s && !s.done && (i = o.return) && i.call(o);
          } finally {
            if (a)
              throw a.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    Da(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var a = r.observers; a.length; )
          a.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    Da(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, a = this, i = a.hasError, o = a.isStopped, s = a.observers;
    return i || o ? tp : (this.currentObservers = null, s.push(n), new Nt(function() {
      r.currentObservers = null, La(s, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, a = r.hasError, i = r.thrownError, o = r.isStopped;
    a ? n.error(i) : o && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new Me();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new Cc(n, r);
  }, t;
}(Me), Cc = function(e) {
  Ot(t, e);
  function t(n, r) {
    var a = e.call(this) || this;
    return a.destination = n, a.source = r, a;
  }
  return t.prototype.next = function(n) {
    var r, a;
    (a = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || a === void 0 || a.call(r, n);
  }, t.prototype.error = function(n) {
    var r, a;
    (a = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || a === void 0 || a.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, a;
    return (a = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && a !== void 0 ? a : tp;
  }, t;
}(Ve), se = function(e) {
  Ot(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(n) {
    var r = e.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, t.prototype.getValue = function() {
    var n = this, r = n.hasError, a = n.thrownError, i = n._value;
    if (r)
      throw a;
    return this._throwIfClosed(), i;
  }, t.prototype.next = function(n) {
    e.prototype.next.call(this, this._value = n);
  }, t;
}(Ve), ms = {
  now: function() {
    return (ms.delegate || Date).now();
  },
  delegate: void 0
}, eN = function(e) {
  Ot(t, e);
  function t(n, r, a) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), a === void 0 && (a = ms);
    var i = e.call(this) || this;
    return i._bufferSize = n, i._windowTime = r, i._timestampProvider = a, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = r === 1 / 0, i._bufferSize = Math.max(1, n), i._windowTime = Math.max(1, r), i;
  }
  return t.prototype.next = function(n) {
    var r = this, a = r.isStopped, i = r._buffer, o = r._infiniteTimeWindow, s = r._timestampProvider, l = r._windowTime;
    a || (i.push(n), !o && i.push(s.now() + l)), this._trimBuffer(), e.prototype.next.call(this, n);
  }, t.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), a = this, i = a._infiniteTimeWindow, o = a._buffer, s = o.slice(), l = 0; l < s.length && !n.closed; l += i ? 1 : 2)
      n.next(s[l]);
    return this._checkFinalizedStatuses(n), r;
  }, t.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, a = n._timestampProvider, i = n._buffer, o = n._infiniteTimeWindow, s = (o ? 1 : 2) * r;
    if (r < 1 / 0 && s < i.length && i.splice(0, i.length - s), !o) {
      for (var l = a.now(), u = 0, p = 1; p < i.length && i[p] <= l; p += 2)
        u = p;
      u && i.splice(0, u + 1);
    }
  }, t;
}(Ve), tN = function(e) {
  Ot(t, e);
  function t(n, r) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(n, r) {
    return this;
  }, t;
}(Nt), go = {
  setInterval: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var a = go.delegate;
    return a != null && a.setInterval ? a.setInterval.apply(a, Yt([e, t], Ct(n))) : setInterval.apply(void 0, Yt([e, t], Ct(n)));
  },
  clearInterval: function(e) {
    return clearInterval(e);
  },
  delegate: void 0
}, nN = function(e) {
  Ot(t, e);
  function t(n, r) {
    var a = e.call(this, n, r) || this;
    return a.scheduler = n, a.work = r, a.pending = !1, a;
  }
  return t.prototype.schedule = function(n, r) {
    var a;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var i = this.id, o = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = !0, this.delay = r, this.id = (a = this.id) !== null && a !== void 0 ? a : this.requestAsyncId(o, this.id, r), this;
  }, t.prototype.requestAsyncId = function(n, r, a) {
    return a === void 0 && (a = 0), go.setInterval(n.flush.bind(n, this), a);
  }, t.prototype.recycleAsyncId = function(n, r, a) {
    if (a === void 0 && (a = 0), a != null && this.delay === a && this.pending === !1)
      return r;
    r != null && go.clearInterval(r);
  }, t.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var a = this._execute(n, r);
    if (a)
      return a;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(n, r) {
    var a = !1, i;
    try {
      this.work(n);
    } catch (o) {
      a = !0, i = o || new Error("Scheduled action threw falsy error");
    }
    if (a)
      return this.unsubscribe(), i;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, a = n.scheduler, i = a.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, La(i, this), r != null && (this.id = this.recycleAsyncId(a, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(tN), Dc = function() {
  function e(t, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
  }
  return e.prototype.schedule = function(t, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
  }, e.now = ms.now, e;
}(), rN = function(e) {
  Ot(t, e);
  function t(n, r) {
    r === void 0 && (r = Dc.now);
    var a = e.call(this, n, r) || this;
    return a.actions = [], a._active = !1, a;
  }
  return t.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var a;
    this._active = !0;
    do
      if (a = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, a) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw a;
    }
  }, t;
}(Dc), ip = new rN(nN), aN = ip, op = new Me(function(e) {
  return e.complete();
});
function sp(e) {
  return e && re(e.schedule);
}
function gs(e) {
  return e[e.length - 1];
}
function lp(e) {
  return re(gs(e)) ? e.pop() : void 0;
}
function ys(e) {
  return sp(gs(e)) ? e.pop() : void 0;
}
function iN(e, t) {
  return typeof gs(e) == "number" ? e.pop() : t;
}
var hs = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function up(e) {
  return re(e == null ? void 0 : e.then);
}
function cp(e) {
  return re(e[fs]);
}
function dp(e) {
  return Symbol.asyncIterator && re(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function pp(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function oN() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var fp = oN();
function mp(e) {
  return re(e == null ? void 0 : e[fp]);
}
function gp(e) {
  return zO(this, arguments, function() {
    var t, n, r, a;
    return ep(this, function(i) {
      switch (i.label) {
        case 0:
          t = e.getReader(), i.label = 1;
        case 1:
          i.trys.push([1, , 9, 10]), i.label = 2;
        case 2:
          return [4, nr(t.read())];
        case 3:
          return n = i.sent(), r = n.value, a = n.done, a ? [4, nr(void 0)] : [3, 5];
        case 4:
          return [2, i.sent()];
        case 5:
          return [4, nr(r)];
        case 6:
          return [4, i.sent()];
        case 7:
          return i.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function yp(e) {
  return re(e == null ? void 0 : e.getReader);
}
function jt(e) {
  if (e instanceof Me)
    return e;
  if (e != null) {
    if (cp(e))
      return sN(e);
    if (hs(e))
      return lN(e);
    if (up(e))
      return uN(e);
    if (dp(e))
      return hp(e);
    if (mp(e))
      return cN(e);
    if (yp(e))
      return dN(e);
  }
  throw pp(e);
}
function sN(e) {
  return new Me(function(t) {
    var n = e[fs]();
    if (re(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function lN(e) {
  return new Me(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function uN(e) {
  return new Me(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, ap);
  });
}
function cN(e) {
  return new Me(function(t) {
    var n, r;
    try {
      for (var a = ir(e), i = a.next(); !i.done; i = a.next()) {
        var o = i.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (s) {
      n = { error: s };
    } finally {
      try {
        i && !i.done && (r = a.return) && r.call(a);
      } finally {
        if (n)
          throw n.error;
      }
    }
    t.complete();
  });
}
function hp(e) {
  return new Me(function(t) {
    pN(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function dN(e) {
  return hp(gp(e));
}
function pN(e, t) {
  var n, r, a, i;
  return LO(this, void 0, void 0, function() {
    var o, s;
    return ep(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = UO(e), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done)
            return [3, 4];
          if (o = r.value, t.next(o), t.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return s = l.sent(), a = { error: s }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (a)
            throw a.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function Mt(e, t, n, r, a) {
  r === void 0 && (r = 0), a === void 0 && (a = !1);
  var i = t.schedule(function() {
    n(), a ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !a)
    return i;
}
function vp(e, t) {
  return t === void 0 && (t = 0), Ye(function(n, r) {
    n.subscribe(Ee(r, function(a) {
      return Mt(r, e, function() {
        return r.next(a);
      }, t);
    }, function() {
      return Mt(r, e, function() {
        return r.complete();
      }, t);
    }, function(a) {
      return Mt(r, e, function() {
        return r.error(a);
      }, t);
    }));
  });
}
function _p(e, t) {
  return t === void 0 && (t = 0), Ye(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function fN(e, t) {
  return jt(e).pipe(_p(t), vp(t));
}
function mN(e, t) {
  return jt(e).pipe(_p(t), vp(t));
}
function gN(e, t) {
  return new Me(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function yN(e, t) {
  return new Me(function(n) {
    var r;
    return Mt(n, t, function() {
      r = e[fp](), Mt(n, t, function() {
        var a, i, o;
        try {
          a = r.next(), i = a.value, o = a.done;
        } catch (s) {
          n.error(s);
          return;
        }
        o ? n.complete() : n.next(i);
      }, 0, !0);
    }), function() {
      return re(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function bp(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new Me(function(n) {
    Mt(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      Mt(n, t, function() {
        r.next().then(function(a) {
          a.done ? n.complete() : n.next(a.value);
        });
      }, 0, !0);
    });
  });
}
function hN(e, t) {
  return bp(gp(e), t);
}
function vN(e, t) {
  if (e != null) {
    if (cp(e))
      return fN(e, t);
    if (hs(e))
      return gN(e, t);
    if (up(e))
      return mN(e, t);
    if (dp(e))
      return bp(e, t);
    if (mp(e))
      return yN(e, t);
    if (yp(e))
      return hN(e, t);
  }
  throw pp(e);
}
function yi(e, t) {
  return t ? vN(e, t) : jt(e);
}
function Sp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ys(e);
  return yi(e, n);
}
var vs = ds(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function yo(e, t) {
  var n = typeof t == "object";
  return new Promise(function(r, a) {
    var i = new za({
      next: function(o) {
        r(o), i.unsubscribe();
      },
      error: a,
      complete: function() {
        n ? r(t.defaultValue) : a(new vs());
      }
    });
    e.subscribe(i);
  });
}
function _N(e) {
  return e instanceof Date && !isNaN(e);
}
function yt(e, t) {
  return Ye(function(n, r) {
    var a = 0;
    n.subscribe(Ee(r, function(i) {
      r.next(e.call(t, i, a++));
    }));
  });
}
var bN = Array.isArray;
function SN(e, t) {
  return bN(t) ? e.apply(void 0, Yt([], Ct(t))) : e(t);
}
function Op(e) {
  return yt(function(t) {
    return SN(e, t);
  });
}
var ON = Array.isArray, NN = Object.getPrototypeOf, AN = Object.prototype, IN = Object.keys;
function wN(e) {
  if (e.length === 1) {
    var t = e[0];
    if (ON(t))
      return { args: t, keys: null };
    if (xN(t)) {
      var n = IN(t);
      return {
        args: n.map(function(r) {
          return t[r];
        }),
        keys: n
      };
    }
  }
  return { args: e, keys: null };
}
function xN(e) {
  return e && typeof e == "object" && NN(e) === AN;
}
function TN(e, t) {
  return e.reduce(function(n, r, a) {
    return n[r] = t[a], n;
  }, {});
}
function Pc() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ys(e), r = lp(e), a = wN(e), i = a.args, o = a.keys;
  if (i.length === 0)
    return yi([], n);
  var s = new Me(kN(i, n, o ? function(l) {
    return TN(o, l);
  } : Zn));
  return r ? s.pipe(Op(r)) : s;
}
function kN(e, t, n) {
  return n === void 0 && (n = Zn), function(r) {
    Rc(t, function() {
      for (var a = e.length, i = new Array(a), o = a, s = a, l = function(p) {
        Rc(t, function() {
          var g = yi(e[p], t), m = !1;
          g.subscribe(Ee(r, function(h) {
            i[p] = h, m || (m = !0, s--), s || r.next(n(i.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, u = 0; u < a; u++)
        l(u);
    }, r);
  };
}
function Rc(e, t, n) {
  e ? Mt(n, e, t) : t();
}
function MN(e, t, n, r, a, i, o, s) {
  var l = [], u = 0, p = 0, g = !1, m = function() {
    g && !l.length && !u && t.complete();
  }, h = function(v) {
    return u < r ? I(v) : l.push(v);
  }, I = function(v) {
    i && t.next(v), u++;
    var E = !1;
    jt(n(v, p++)).subscribe(Ee(t, function(R) {
      a == null || a(R), i ? h(R) : t.next(R);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var R = function() {
            var F = l.shift();
            o ? Mt(t, o, function() {
              return I(F);
            }) : I(F);
          }; l.length && u < r; )
            R();
          m();
        } catch (F) {
          t.error(F);
        }
    }));
  };
  return e.subscribe(Ee(t, h, function() {
    g = !0, m();
  })), function() {
    s == null || s();
  };
}
function hi(e, t, n) {
  return n === void 0 && (n = 1 / 0), re(t) ? hi(function(r, a) {
    return yt(function(i, o) {
      return t(r, i, a, o);
    })(jt(e(r, a)));
  }, n) : (typeof t == "number" && (n = t), Ye(function(r, a) {
    return MN(r, a, e, n);
  }));
}
function EN(e) {
  return e === void 0 && (e = 1 / 0), hi(Zn, e);
}
var CN = ["addListener", "removeListener"], DN = ["addEventListener", "removeEventListener"], PN = ["on", "off"];
function gt(e, t, n, r) {
  if (re(n) && (r = n, n = void 0), r)
    return gt(e, t, n).pipe(Op(r));
  var a = Ct(VN(e) ? DN.map(function(s) {
    return function(l) {
      return e[s](t, l, n);
    };
  }) : RN(e) ? CN.map(Fc(e, t)) : FN(e) ? PN.map(Fc(e, t)) : [], 2), i = a[0], o = a[1];
  if (!i && hs(e))
    return hi(function(s) {
      return gt(s, t, n);
    })(jt(e));
  if (!i)
    throw new TypeError("Invalid event target");
  return new Me(function(s) {
    var l = function() {
      for (var u = [], p = 0; p < arguments.length; p++)
        u[p] = arguments[p];
      return s.next(1 < u.length ? u : u[0]);
    };
    return i(l), function() {
      return o(l);
    };
  });
}
function Fc(e, t) {
  return function(n) {
    return function(r) {
      return e[n](t, r);
    };
  };
}
function RN(e) {
  return re(e.addListener) && re(e.removeListener);
}
function FN(e) {
  return re(e.on) && re(e.off);
}
function VN(e) {
  return re(e.addEventListener) && re(e.removeEventListener);
}
function ho(e, t, n) {
  e === void 0 && (e = 0), n === void 0 && (n = aN);
  var r = -1;
  return t != null && (sp(t) ? n = t : r = t), new Me(function(a) {
    var i = _N(e) ? +e - n.now() : e;
    i < 0 && (i = 0);
    var o = 0;
    return n.schedule(function() {
      a.closed || (a.next(o++), 0 <= r ? this.schedule(void 0, r) : a.complete());
    }, i);
  });
}
function Br() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ys(e), r = iN(e, 1 / 0), a = e;
  return a.length ? a.length === 1 ? jt(a[0]) : EN(r)(yi(a, n)) : op;
}
function Dt(e, t) {
  return Ye(function(n, r) {
    var a = 0;
    n.subscribe(Ee(r, function(i) {
      return e.call(t, i, a++) && r.next(i);
    }));
  });
}
function jN(e, t) {
  return t === void 0 && (t = ip), Ye(function(n, r) {
    var a = null, i = null, o = null, s = function() {
      if (a) {
        a.unsubscribe(), a = null;
        var u = i;
        i = null, r.next(u);
      }
    };
    function l() {
      var u = o + e, p = t.now();
      if (p < u) {
        a = this.schedule(void 0, u - p), r.add(a);
        return;
      }
      s();
    }
    n.subscribe(Ee(r, function(u) {
      i = u, o = t.now(), a || (a = t.schedule(l, e), r.add(a));
    }, function() {
      s(), r.complete();
    }, void 0, function() {
      i = a = null;
    }));
  });
}
function JN(e) {
  return Ye(function(t, n) {
    var r = !1;
    t.subscribe(Ee(n, function(a) {
      r = !0, n.next(a);
    }, function() {
      r || n.next(e), n.complete();
    }));
  });
}
function LN(e) {
  return e <= 0 ? function() {
    return op;
  } : Ye(function(t, n) {
    var r = 0;
    t.subscribe(Ee(n, function(a) {
      ++r <= e && (n.next(a), e <= r && n.complete());
    }));
  });
}
function zN(e) {
  return e === void 0 && (e = UN), Ye(function(t, n) {
    var r = !1;
    t.subscribe(Ee(n, function(a) {
      r = !0, n.next(a);
    }, function() {
      return r ? n.complete() : n.error(e());
    }));
  });
}
function UN() {
  return new vs();
}
function Np(e, t) {
  var n = arguments.length >= 2;
  return function(r) {
    return r.pipe(e ? Dt(function(a, i) {
      return e(a, i, r);
    }) : Zn, LN(1), n ? JN(t) : zN(function() {
      return new vs();
    }));
  };
}
function ZN(e) {
  return Dt(function(t, n) {
    return e <= n;
  });
}
function Et(e, t) {
  return Ye(function(n, r) {
    var a = null, i = 0, o = !1, s = function() {
      return o && !a && r.complete();
    };
    n.subscribe(Ee(r, function(l) {
      a == null || a.unsubscribe();
      var u = 0, p = i++;
      jt(e(l, p)).subscribe(a = Ee(r, function(g) {
        return r.next(t ? t(l, g, p, u++) : g);
      }, function() {
        a = null, s();
      }));
    }, function() {
      o = !0, s();
    }));
  });
}
function K(e, t, n) {
  var r = re(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Ye(function(a, i) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var s = !0;
    a.subscribe(Ee(i, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), i.next(l);
    }, function() {
      var l;
      s = !1, (l = r.complete) === null || l === void 0 || l.call(r), i.complete();
    }, function(l) {
      var u;
      s = !1, (u = r.error) === null || u === void 0 || u.call(r, l), i.error(l);
    }, function() {
      var l, u;
      s && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : Zn;
}
function Bi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = lp(e);
  return Ye(function(r, a) {
    for (var i = e.length, o = new Array(i), s = e.map(function() {
      return !1;
    }), l = !1, u = function(g) {
      jt(e[g]).subscribe(Ee(a, function(m) {
        o[g] = m, !l && !s[g] && (s[g] = !0, (l = s.every(Zn)) && (s = null));
      }, mo));
    }, p = 0; p < i; p++)
      u(p);
    r.subscribe(Ee(a, function(g) {
      if (l) {
        var m = Yt([g], Ct(o));
        a.next(n ? n.apply(void 0, Yt([], Ct(m))) : m);
      }
    }));
  });
}
function Gi(e, t, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function s(p) {
      try {
        u(r.next(p));
      } catch (g) {
        o(g);
      }
    }
    function l(p) {
      try {
        u(r.throw(p));
      } catch (g) {
        o(g);
      }
    }
    function u(p) {
      p.done ? i(p.value) : a(p.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Wi(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(p) {
      return l([u, p]);
    };
  }
  function l(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (p) {
        u = [6, p], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ua(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function wn(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var qN = {
  withStackTrace: !1
}, Ap = function(e, t, n) {
  n === void 0 && (n = qN);
  var r = t.isOk() ? { type: "Ok", value: t.value } : { type: "Err", value: t.error }, a = n.withStackTrace ? new Error().stack : void 0;
  return {
    data: r,
    message: e,
    stack: a
  };
}, At = (
  /** @class */
  function() {
    function e(t) {
      this._promise = t;
    }
    return e.fromSafePromise = function(t) {
      var n = t.then(function(r) {
        return new yn(r);
      });
      return new e(n);
    }, e.fromPromise = function(t, n) {
      var r = t.then(function(a) {
        return new yn(a);
      }).catch(function(a) {
        return new Sn(n(a));
      });
      return new e(r);
    }, e.combine = function(t) {
      return GN(t);
    }, e.combineWithAllErrors = function(t) {
      return WN(t);
    }, e.prototype.map = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return Gi(n, void 0, void 0, function() {
          var a;
          return Wi(this, function(i) {
            switch (i.label) {
              case 0:
                return r.isErr() ? [2, new Sn(r.error)] : (a = yn.bind, [4, t(r.value)]);
              case 1:
                return [2, new (a.apply(yn, [void 0, i.sent()]))()];
            }
          });
        });
      }));
    }, e.prototype.mapErr = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return Gi(n, void 0, void 0, function() {
          var a;
          return Wi(this, function(i) {
            switch (i.label) {
              case 0:
                return r.isOk() ? [2, new yn(r.value)] : (a = Sn.bind, [4, t(r.error)]);
              case 1:
                return [2, new (a.apply(Sn, [void 0, i.sent()]))()];
            }
          });
        });
      }));
    }, e.prototype.andThen = function(t) {
      return new e(this._promise.then(function(n) {
        if (n.isErr())
          return new Sn(n.error);
        var r = t(n.value);
        return r instanceof e ? r._promise : r;
      }));
    }, e.prototype.orElse = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return Gi(n, void 0, void 0, function() {
          return Wi(this, function(a) {
            return r.isErr() ? [2, t(r.error)] : [2, new yn(r.value)];
          });
        });
      }));
    }, e.prototype.match = function(t, n) {
      return this._promise.then(function(r) {
        return r.match(t, n);
      });
    }, e.prototype.unwrapOr = function(t) {
      return this._promise.then(function(n) {
        return n.unwrapOr(t);
      });
    }, e.prototype.then = function(t, n) {
      return this._promise.then(t, n);
    }, e;
  }()
), Vc = function(e) {
  return new At(Promise.resolve(new Sn(e)));
};
At.fromPromise;
At.fromSafePromise;
var BN = function(e) {
  return function(t) {
    return wn(wn([], Ua(t), !1), [e], !1);
  };
}, Ip = function(e) {
  return e.reduce(function(t, n) {
    return t.isOk() ? n.isErr() ? He(n.error) : t.map(BN(n.value)) : t;
  }, ht([]));
}, GN = function(e) {
  return At.fromSafePromise(Promise.all(e)).andThen(Ip);
}, wp = function(e) {
  return e.reduce(function(t, n) {
    return n.isErr() ? t.isErr() ? He(wn(wn([], Ua(t.error), !1), [n.error], !1)) : He([n.error]) : t.isErr() ? t : ht(wn(wn([], Ua(t.value), !1), [n.value], !1));
  }, ht([]));
}, WN = function(e) {
  return At.fromSafePromise(Promise.all(e)).andThen(wp);
}, vo;
(function(e) {
  function t(a, i) {
    return function() {
      for (var o = [], s = 0; s < arguments.length; s++)
        o[s] = arguments[s];
      try {
        var l = a.apply(void 0, wn([], Ua(o), !1));
        return ht(l);
      } catch (u) {
        return He(i ? i(u) : u);
      }
    };
  }
  e.fromThrowable = t;
  function n(a) {
    return Ip(a);
  }
  e.combine = n;
  function r(a) {
    return wp(a);
  }
  e.combineWithAllErrors = r;
})(vo || (vo = {}));
var ht = function(e) {
  return new yn(e);
}, He = function(e) {
  return new Sn(e);
}, yn = (
  /** @class */
  function() {
    function e(t) {
      this.value = t;
    }
    return e.prototype.isOk = function() {
      return !0;
    }, e.prototype.isErr = function() {
      return !this.isOk();
    }, e.prototype.map = function(t) {
      return ht(t(this.value));
    }, e.prototype.mapErr = function(t) {
      return ht(this.value);
    }, e.prototype.andThen = function(t) {
      return t(this.value);
    }, e.prototype.orElse = function(t) {
      return ht(this.value);
    }, e.prototype.asyncAndThen = function(t) {
      return t(this.value);
    }, e.prototype.asyncMap = function(t) {
      return At.fromSafePromise(t(this.value));
    }, e.prototype.unwrapOr = function(t) {
      return this.value;
    }, e.prototype.match = function(t, n) {
      return t(this.value);
    }, e.prototype._unsafeUnwrap = function(t) {
      return this.value;
    }, e.prototype._unsafeUnwrapErr = function(t) {
      throw Ap("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }, e;
  }()
), Sn = (
  /** @class */
  function() {
    function e(t) {
      this.error = t;
    }
    return e.prototype.isOk = function() {
      return !1;
    }, e.prototype.isErr = function() {
      return !this.isOk();
    }, e.prototype.map = function(t) {
      return He(this.error);
    }, e.prototype.mapErr = function(t) {
      return He(t(this.error));
    }, e.prototype.andThen = function(t) {
      return He(this.error);
    }, e.prototype.orElse = function(t) {
      return t(this.error);
    }, e.prototype.asyncAndThen = function(t) {
      return Vc(this.error);
    }, e.prototype.asyncMap = function(t) {
      return Vc(this.error);
    }, e.prototype.unwrapOr = function(t) {
      return t;
    }, e.prototype.match = function(t, n) {
      return n(this.error);
    }, e.prototype._unsafeUnwrap = function(t) {
      throw Ap("Called `_unsafeUnwrap` on an Err", this, t);
    }, e.prototype._unsafeUnwrapErr = function(t) {
      return this.error;
    }, e;
  }()
);
vo.fromThrowable;
var X;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function n(a) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (a) => {
    const i = {};
    for (const o of a)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (a) => {
    const i = e.objectKeys(a).filter((s) => typeof a[a[s]] != "number"), o = {};
    for (const s of i)
      o[s] = a[s];
    return e.objectValues(o);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(i) {
    return a[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const i = [];
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && i.push(o);
    return i;
  }, e.find = (a, i) => {
    for (const o of a)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function r(a, i = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (a, i) => typeof i == "bigint" ? i.toString() : i;
})(X || (X = {}));
var jc;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(jc || (jc = {}));
const k = X.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), On = (e) => {
  switch (typeof e) {
    case "undefined":
      return k.undefined;
    case "string":
      return k.string;
    case "number":
      return isNaN(e) ? k.nan : k.number;
    case "boolean":
      return k.boolean;
    case "function":
      return k.function;
    case "bigint":
      return k.bigint;
    case "symbol":
      return k.symbol;
    case "object":
      return Array.isArray(e) ? k.array : e === null ? k.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? k.promise : typeof Map < "u" && e instanceof Map ? k.map : typeof Set < "u" && e instanceof Set ? k.set : typeof Date < "u" && e instanceof Date ? k.date : k.object;
    default:
      return k.unknown;
  }
}, S = X.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
let Cn = class extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, r = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(r);
        else if (i.code === "invalid_return_type")
          r(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          r(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(t(i));
        else {
          let o = n, s = 0;
          for (; s < i.path.length; ) {
            const l = i.path[s];
            s === i.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(t(i))) : o[l] = o[l] || { _errors: [] }, o = o[l], s++;
          }
        }
    };
    return r(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, X.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const r of this.issues)
      r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : n.push(e(r));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
};
Cn.create = (e) => new Cn(e);
const xp = (e, t) => {
  let n;
  switch (e.code) {
    case S.invalid_type:
      e.received === k.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case S.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, X.jsonStringifyReplacer)}`;
      break;
    case S.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${X.joinValues(e.keys, ", ")}`;
      break;
    case S.invalid_union:
      n = "Invalid input";
      break;
    case S.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${X.joinValues(e.options)}`;
      break;
    case S.invalid_enum_value:
      n = `Invalid enum value. Expected ${X.joinValues(e.options)}, received '${e.received}'`;
      break;
    case S.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case S.invalid_return_type:
      n = "Invalid function return type";
      break;
    case S.invalid_date:
      n = "Invalid date";
      break;
    case S.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : X.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case S.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case S.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case S.custom:
      n = "Invalid input";
      break;
    case S.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case S.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case S.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, X.assertNever(e);
  }
  return { message: n };
};
let KN = xp;
function HN() {
  return KN;
}
const YN = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: a } = e, i = [...n, ...a.path || []], o = {
    ...a,
    path: i
  };
  let s = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    s = u(o, { data: t, defaultError: s }).message;
  return {
    ...a,
    path: i,
    message: a.message || s
  };
};
function T(e, t) {
  const n = YN({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      HN(),
      xp
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
let pt = class Tp {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const a of n) {
      if (a.status === "aborted")
        return G;
      a.status === "dirty" && t.dirty(), r.push(a.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const a of n)
      r.push({
        key: await a.key,
        value: await a.value
      });
    return Tp.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const a of n) {
      const { key: i, value: o } = a;
      if (i.status === "aborted" || o.status === "aborted")
        return G;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), (typeof o.value < "u" || a.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
};
const G = Object.freeze({
  status: "aborted"
}), QN = (e) => ({ status: "dirty", value: e }), Qe = (e) => ({ status: "valid", value: e }), Jc = (e) => e.status === "aborted", Lc = (e) => e.status === "dirty", _o = (e) => e.status === "valid", bo = (e) => typeof Promise < "u" && e instanceof Promise;
var D;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(D || (D = {}));
let Qt = class {
  constructor(t, n, r, a) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
};
const zc = (e, t) => {
  if (_o(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Cn(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function B(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: a } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: r ?? o.defaultError } : { message: n ?? o.defaultError }, description: a };
}
let Q = class {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return On(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: On(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new pt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: On(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (bo(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const a = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: On(t)
    }, i = this._parseSync({ data: t, path: a.path, parent: a });
    return zc(a, i);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: On(t)
    }, a = this._parse({ data: t, path: r.path, parent: r }), i = await (bo(a) ? a : Promise.resolve(a));
    return zc(r, i);
  }
  refine(t, n) {
    const r = (a) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(a) : n;
    return this._refinement((a, i) => {
      const o = t(a), s = () => i.addIssue({
        code: S.custom,
        ...r(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (s(), !1)) : o ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, a) => t(r) ? !0 : (a.addIssue(typeof n == "function" ? n(r, a) : n), !1));
  }
  _refinement(t) {
    return new sr({
      schema: this,
      typeName: j.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Gt.create(this, this._def);
  }
  nullable() {
    return lr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return or.create(this, this._def);
  }
  promise() {
    return Ba.create(this, this._def);
  }
  or(t) {
    return Za.create([this, t], this._def);
  }
  and(t) {
    return qa.create(this, t, this._def);
  }
  transform(t) {
    return new sr({
      ...B(this._def),
      schema: this,
      typeName: j.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Mo({
      ...B(this._def),
      innerType: this,
      defaultValue: n,
      typeName: j.ZodDefault
    });
  }
  brand() {
    return new uA({
      typeName: j.ZodBranded,
      type: this,
      ...B(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Eo({
      ...B(this._def),
      innerType: this,
      catchValue: n,
      typeName: j.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return cA.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
const XN = /^c[^\s-]{8,}$/i, $N = /^[a-z][a-z0-9]*$/, eA = /[0-9A-HJKMNP-TV-Z]{26}/, tA = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, nA = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, rA = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, aA = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, iA = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, oA = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function sA(e, t) {
  return !!((t === "v4" || !t) && aA.test(e) || (t === "v6" || !t) && iA.test(e));
}
let So = class jr extends Q {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((a) => t.test(a), {
      validation: n,
      code: S.invalid_string,
      ...D.errToObj(r)
    }), this.nonempty = (t) => this.min(1, D.errToObj(t)), this.trim = () => new jr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new jr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new jr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== k.string) {
      const a = this._getOrReturnCtx(t);
      return T(
        a,
        {
          code: S.invalid_type,
          expected: k.string,
          received: a.parsedType
        }
        //
      ), G;
    }
    const n = new pt();
    let r;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value, o = t.data.length < a.value;
        (i || o) && (r = this._getOrReturnCtx(t, r), i ? T(r, {
          code: S.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && T(r, {
          code: S.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        nA.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "email",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        rA.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "emoji",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        tA.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "uuid",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        XN.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "cuid",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        $N.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "cuid2",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        eA.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "ulid",
          code: S.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), T(r, {
            validation: "url",
            code: S.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "regex",
          code: S.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? oA(a).test(t.data) || (r = this._getOrReturnCtx(t, r), T(r, {
          code: S.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? sA(t.data, a.version) || (r = this._getOrReturnCtx(t, r), T(r, {
          validation: "ip",
          code: S.invalid_string,
          message: a.message
        }), n.dirty()) : X.assertNever(a);
    return { status: n.value, value: t.data };
  }
  _addCheck(t) {
    return new jr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...D.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...D.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...D.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...D.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...D.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...D.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...D.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...D.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ...D.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...D.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...D.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...D.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...D.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...D.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...D.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...D.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
};
So.create = (e) => {
  var t;
  return new So({
    checks: [],
    typeName: j.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...B(e)
  });
};
function lA(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, a = n > r ? n : r, i = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return i % o / Math.pow(10, a);
}
let Oo = class No extends Q {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== k.number) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: S.invalid_type,
        expected: k.number,
        received: a.parsedType
      }), G;
    }
    let n;
    const r = new pt();
    for (const a of this._def.checks)
      a.kind === "int" ? X.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), r.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), r.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), r.dirty()) : a.kind === "multipleOf" ? lA(t.data, a.value) !== 0 && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), r.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.not_finite,
        message: a.message
      }), r.dirty()) : X.assertNever(a);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, D.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, D.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, D.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, D.toString(n));
  }
  setLimit(t, n, r, a) {
    return new No({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: D.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new No({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: D.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: D.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: D.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: D.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: D.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: D.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: D.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: D.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: D.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && X.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
};
Oo.create = (e) => new Oo({
  checks: [],
  typeName: j.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...B(e)
});
let Uc = class Ao extends Q {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== k.bigint) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: S.invalid_type,
        expected: k.bigint,
        received: a.parsedType
      }), G;
    }
    let n;
    const r = new pt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), r.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), r.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), T(n, {
        code: S.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), r.dirty()) : X.assertNever(a);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, D.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, D.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, D.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, D.toString(n));
  }
  setLimit(t, n, r, a) {
    return new Ao({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: D.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Ao({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: D.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: D.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: D.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: D.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: D.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
};
Uc.create = (e) => {
  var t;
  return new Uc({
    checks: [],
    typeName: j.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...B(e)
  });
};
let Io = class extends Q {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== k.boolean) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.boolean,
        received: t.parsedType
      }), G;
    }
    return Qe(e.data);
  }
};
Io.create = (e) => new Io({
  typeName: j.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...B(e)
});
let Zc = class kp extends Q {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== k.date) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: S.invalid_type,
        expected: k.date,
        received: a.parsedType
      }), G;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: S.invalid_date
      }), G;
    }
    const n = new pt();
    let r;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (r = this._getOrReturnCtx(t, r), T(r, {
        code: S.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (r = this._getOrReturnCtx(t, r), T(r, {
        code: S.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : X.assertNever(a);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new kp({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: D.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: D.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
};
Zc.create = (e) => new Zc({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: j.ZodDate,
  ...B(e)
});
let qc = class extends Q {
  _parse(e) {
    if (this._getType(e) !== k.symbol) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.symbol,
        received: t.parsedType
      }), G;
    }
    return Qe(e.data);
  }
};
qc.create = (e) => new qc({
  typeName: j.ZodSymbol,
  ...B(e)
});
let Bc = class extends Q {
  _parse(e) {
    if (this._getType(e) !== k.undefined) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.undefined,
        received: t.parsedType
      }), G;
    }
    return Qe(e.data);
  }
};
Bc.create = (e) => new Bc({
  typeName: j.ZodUndefined,
  ...B(e)
});
let Gc = class extends Q {
  _parse(e) {
    if (this._getType(e) !== k.null) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.null,
        received: t.parsedType
      }), G;
    }
    return Qe(e.data);
  }
};
Gc.create = (e) => new Gc({
  typeName: j.ZodNull,
  ...B(e)
});
let Wc = class extends Q {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Qe(e.data);
  }
};
Wc.create = (e) => new Wc({
  typeName: j.ZodAny,
  ...B(e)
});
let Kc = class extends Q {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Qe(e.data);
  }
};
Kc.create = (e) => new Kc({
  typeName: j.ZodUnknown,
  ...B(e)
});
let Xt = class extends Q {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return T(n, {
      code: S.invalid_type,
      expected: k.never,
      received: n.parsedType
    }), G;
  }
};
Xt.create = (e) => new Xt({
  typeName: j.ZodNever,
  ...B(e)
});
let Hc = class extends Q {
  _parse(e) {
    if (this._getType(e) !== k.undefined) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.void,
        received: t.parsedType
      }), G;
    }
    return Qe(e.data);
  }
};
Hc.create = (e) => new Hc({
  typeName: j.ZodVoid,
  ...B(e)
});
let or = class Pa extends Q {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), a = this._def;
    if (n.parsedType !== k.array)
      return T(n, {
        code: S.invalid_type,
        expected: k.array,
        received: n.parsedType
      }), G;
    if (a.exactLength !== null) {
      const o = n.data.length > a.exactLength.value, s = n.data.length < a.exactLength.value;
      (o || s) && (T(n, {
        code: o ? S.too_big : S.too_small,
        minimum: s ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), r.dirty());
    }
    if (a.minLength !== null && n.data.length < a.minLength.value && (T(n, {
      code: S.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), r.dirty()), a.maxLength !== null && n.data.length > a.maxLength.value && (T(n, {
      code: S.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, s) => a.type._parseAsync(new Qt(n, o, n.path, s)))).then((o) => pt.mergeArray(r, o));
    const i = [...n.data].map((o, s) => a.type._parseSync(new Qt(n, o, n.path, s)));
    return pt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Pa({
      ...this._def,
      minLength: { value: t, message: D.toString(n) }
    });
  }
  max(t, n) {
    return new Pa({
      ...this._def,
      maxLength: { value: t, message: D.toString(n) }
    });
  }
  length(t, n) {
    return new Pa({
      ...this._def,
      exactLength: { value: t, message: D.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
or.create = (e, t) => new or({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: j.ZodArray,
  ...B(t)
});
function Xn(e) {
  if (e instanceof ft) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Gt.create(Xn(r));
    }
    return new ft({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof or ? new or({
      ...e._def,
      type: Xn(e.element)
    }) : e instanceof Gt ? Gt.create(Xn(e.unwrap())) : e instanceof lr ? lr.create(Xn(e.unwrap())) : e instanceof Gr ? Gr.create(e.items.map((t) => Xn(t))) : e;
}
let ft = class it extends Q {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = X.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== k.object) {
      const l = this._getOrReturnCtx(t);
      return T(l, {
        code: S.invalid_type,
        expected: k.object,
        received: l.parsedType
      }), G;
    }
    const { status: n, ctx: r } = this._processInputParams(t), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Xt && this._def.unknownKeys === "strip"))
      for (const l in r.data)
        i.includes(l) || o.push(l);
    const s = [];
    for (const l of i) {
      const u = a[l], p = r.data[l];
      s.push({
        key: { status: "valid", value: l },
        value: u._parse(new Qt(r, p, r.path, l)),
        alwaysSet: l in r.data
      });
    }
    if (this._def.catchall instanceof Xt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of o)
          s.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (l === "strict")
        o.length > 0 && (T(r, {
          code: S.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of o) {
        const p = r.data[u];
        s.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Qt(r, p, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of s) {
        const p = await u.key;
        l.push({
          key: p,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => pt.mergeObjectSync(n, l)) : pt.mergeObjectSync(n, s);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return D.errToObj, new it({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var a, i, o, s;
          const l = (o = (i = (a = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(a, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (s = D.errToObj(t).message) !== null && s !== void 0 ? s : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new it({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new it({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new it({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new it({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: j.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new it({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return X.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Xn(this);
  }
  partial(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      const a = this.shape[r];
      t && !t[r] ? n[r] = a : n[r] = a.optional();
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return X.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Gt; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Ep(X.objectKeys(this.shape));
  }
};
ft.create = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Xt.create(),
  typeName: j.ZodObject,
  ...B(t)
});
ft.strictCreate = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Xt.create(),
  typeName: j.ZodObject,
  ...B(t)
});
ft.lazycreate = (e, t) => new ft({
  shape: e,
  unknownKeys: "strip",
  catchall: Xt.create(),
  typeName: j.ZodObject,
  ...B(t)
});
let Za = class extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function r(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new Cn(o.ctx.common.issues));
      return T(t, {
        code: S.invalid_union,
        unionErrors: i
      }), G;
    }
    if (t.common.async)
      return Promise.all(n.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(r);
    {
      let a;
      const i = [];
      for (const s of n) {
        const l = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, u = s._parseSync({
          data: t.data,
          path: t.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((s) => new Cn(s));
      return T(t, {
        code: S.invalid_union,
        unionErrors: o
      }), G;
    }
  }
  get options() {
    return this._def.options;
  }
};
Za.create = (e, t) => new Za({
  options: e,
  typeName: j.ZodUnion,
  ...B(t)
});
function wo(e, t) {
  const n = On(e), r = On(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === k.object && r === k.object) {
    const a = X.objectKeys(t), i = X.objectKeys(e).filter((s) => a.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of i) {
      const l = wo(e[s], t[s]);
      if (!l.valid)
        return { valid: !1 };
      o[s] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === k.array && r === k.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], s = t[i], l = wo(o, s);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else
    return n === k.date && r === k.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
let qa = class extends Q {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), r = (a, i) => {
      if (Jc(a) || Jc(i))
        return G;
      const o = wo(a.value, i.value);
      return o.valid ? ((Lc(a) || Lc(i)) && t.dirty(), { status: t.value, value: o.data }) : (T(n, {
        code: S.invalid_intersection_types
      }), G);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, i]) => r(a, i)) : r(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
};
qa.create = (e, t, n) => new qa({
  left: e,
  right: t,
  typeName: j.ZodIntersection,
  ...B(n)
});
let Gr = class Mp extends Q {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.array)
      return T(r, {
        code: S.invalid_type,
        expected: k.array,
        received: r.parsedType
      }), G;
    if (r.data.length < this._def.items.length)
      return T(r, {
        code: S.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), G;
    !this._def.rest && r.data.length > this._def.items.length && (T(r, {
      code: S.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const s = this._def.items[o] || this._def.rest;
      return s ? s._parse(new Qt(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => pt.mergeArray(n, i)) : pt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Mp({
      ...this._def,
      rest: t
    });
  }
};
Gr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Gr({
    items: e,
    typeName: j.ZodTuple,
    rest: null,
    ...B(t)
  });
};
let Yc = class extends Q {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== k.map)
      return T(n, {
        code: S.invalid_type,
        expected: k.map,
        received: n.parsedType
      }), G;
    const r = this._def.keyType, a = this._def.valueType, i = [...n.data.entries()].map(([o, s], l) => ({
      key: r._parse(new Qt(n, o, n.path, [l, "key"])),
      value: a._parse(new Qt(n, s, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const s of i) {
          const l = await s.key, u = await s.value;
          if (l.status === "aborted" || u.status === "aborted")
            return G;
          (l.status === "dirty" || u.status === "dirty") && t.dirty(), o.set(l.value, u.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const s of i) {
        const l = s.key, u = s.value;
        if (l.status === "aborted" || u.status === "aborted")
          return G;
        (l.status === "dirty" || u.status === "dirty") && t.dirty(), o.set(l.value, u.value);
      }
      return { status: t.value, value: o };
    }
  }
};
Yc.create = (e, t, n) => new Yc({
  valueType: t,
  keyType: e,
  typeName: j.ZodMap,
  ...B(n)
});
let Qc = class xo extends Q {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.set)
      return T(r, {
        code: S.invalid_type,
        expected: k.set,
        received: r.parsedType
      }), G;
    const a = this._def;
    a.minSize !== null && r.data.size < a.minSize.value && (T(r, {
      code: S.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), n.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (T(r, {
      code: S.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const p of l) {
        if (p.status === "aborted")
          return G;
        p.status === "dirty" && n.dirty(), u.add(p.value);
      }
      return { status: n.value, value: u };
    }
    const s = [...r.data.values()].map((l, u) => i._parse(new Qt(r, l, r.path, u)));
    return r.common.async ? Promise.all(s).then((l) => o(l)) : o(s);
  }
  min(t, n) {
    return new xo({
      ...this._def,
      minSize: { value: t, message: D.toString(n) }
    });
  }
  max(t, n) {
    return new xo({
      ...this._def,
      maxSize: { value: t, message: D.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
Qc.create = (e, t) => new Qc({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: j.ZodSet,
  ...B(t)
});
let Xc = class extends Q {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
};
Xc.create = (e, t) => new Xc({
  getter: e,
  typeName: j.ZodLazy,
  ...B(t)
});
let To = class extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        received: t.data,
        code: S.invalid_literal,
        expected: this._def.value
      }), G;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
To.create = (e, t) => new To({
  value: e,
  typeName: j.ZodLiteral,
  ...B(t)
});
function Ep(e, t) {
  return new _s({
    values: e,
    typeName: j.ZodEnum,
    ...B(t)
  });
}
let _s = class ko extends Q {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return T(n, {
        expected: X.joinValues(r),
        received: n.parsedType,
        code: S.invalid_type
      }), G;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return T(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: r
      }), G;
    }
    return Qe(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return ko.create(t);
  }
  exclude(t) {
    return ko.create(this.options.filter((n) => !t.includes(n)));
  }
};
_s.create = Ep;
let $c = class extends Q {
  _parse(e) {
    const t = X.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== k.string && n.parsedType !== k.number) {
      const r = X.objectValues(t);
      return T(n, {
        expected: X.joinValues(r),
        received: n.parsedType,
        code: S.invalid_type
      }), G;
    }
    if (t.indexOf(e.data) === -1) {
      const r = X.objectValues(t);
      return T(n, {
        received: n.data,
        code: S.invalid_enum_value,
        options: r
      }), G;
    }
    return Qe(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
$c.create = (e, t) => new $c({
  values: e,
  typeName: j.ZodNativeEnum,
  ...B(t)
});
let Ba = class extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== k.promise && t.common.async === !1)
      return T(t, {
        code: S.invalid_type,
        expected: k.promise,
        received: t.parsedType
      }), G;
    const n = t.parsedType === k.promise ? t.data : Promise.resolve(t.data);
    return Qe(n.then((r) => this._def.type.parseAsync(r, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
};
Ba.create = (e, t) => new Ba({
  type: e,
  typeName: j.ZodPromise,
  ...B(t)
});
let sr = class extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === j.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), r = this._def.effect || null;
    if (r.type === "preprocess") {
      const i = r.transform(n.data);
      return n.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: i,
        path: n.path,
        parent: n
      });
    }
    const a = {
      addIssue: (i) => {
        T(n, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), r.type === "refinement") {
      const i = (o) => {
        const s = r.refinement(o, a);
        if (n.common.async)
          return Promise.resolve(s);
        if (s instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? G : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? G : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!_o(i))
          return i;
        const o = r.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => _o(i) ? Promise.resolve(r.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    X.assertNever(r);
  }
};
sr.create = (e, t, n) => new sr({
  schema: e,
  typeName: j.ZodEffects,
  effect: t,
  ...B(n)
});
sr.createWithPreprocess = (e, t, n) => new sr({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: j.ZodEffects,
  ...B(n)
});
let Gt = class extends Q {
  _parse(t) {
    return this._getType(t) === k.undefined ? Qe(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Gt.create = (e, t) => new Gt({
  innerType: e,
  typeName: j.ZodOptional,
  ...B(t)
});
let lr = class extends Q {
  _parse(e) {
    return this._getType(e) === k.null ? Qe(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
lr.create = (e, t) => new lr({
  innerType: e,
  typeName: j.ZodNullable,
  ...B(t)
});
let Mo = class extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === k.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Mo.create = (e, t) => new Mo({
  innerType: e,
  typeName: j.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...B(t)
});
let Eo = class extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return bo(r) ? r.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Cn(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new Cn(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Eo.create = (e, t) => new Eo({
  innerType: e,
  typeName: j.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...B(t)
});
let ed = class extends Q {
  _parse(e) {
    if (this._getType(e) !== k.nan) {
      const t = this._getOrReturnCtx(e);
      return T(t, {
        code: S.invalid_type,
        expected: k.nan,
        received: t.parsedType
      }), G;
    }
    return { status: "valid", value: e.data };
  }
};
ed.create = (e) => new ed({
  typeName: j.ZodNaN,
  ...B(e)
});
let uA = class extends Q {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}, cA = class Cp extends Q {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? G : a.status === "dirty" ? (n.dirty(), QN(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return a.status === "aborted" ? G : a.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Cp({
      in: t,
      out: n,
      typeName: j.ZodPipeline
    });
  }
};
ft.lazycreate;
var j;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(j || (j = {}));
const ee = So.create, vi = Oo.create, Wr = Io.create;
Xt.create;
const Kr = or.create, W = ft.create;
ft.strictCreate;
const Pe = Za.create;
qa.create;
Gr.create;
const ne = To.create;
_s.create;
Ba.create;
Gt.create;
lr.create;
const bs = W({
  address: ee(),
  label: ee(),
  appearanceId: vi()
}), br = W({
  publicKey: ee(),
  signature: ee(),
  curve: Pe([ne("curve25519"), ne("secp256k1")])
}), Dp = W({
  accountAddress: ee(),
  proof: br
}), Sr = W({ identityAddress: ee(), label: ee() }), Co = {
  western: "western",
  eastern: "eastern"
}, Pp = Pe([
  ne(Co.eastern),
  ne(Co.western)
]), Ss = W({
  variant: Pp,
  familyName: ee(),
  nickname: ee(),
  givenNames: ee()
}), ct = W({
  quantifier: Pe([ne("exactly"), ne("atLeast")]),
  quantity: vi().gte(0)
}), Ga = W({
  challenge: ee().optional(),
  numberOfAccounts: ct
}), Wa = W({
  accounts: Kr(bs),
  challenge: ee().optional(),
  proofs: Kr(Dp).optional()
}).refine((e) => {
  var t;
  return e.challenge || e != null && e.proofs ? e.challenge && ((t = e == null ? void 0 : e.proofs) == null ? void 0 : t.length) : !0;
}, "missing challenge or proofs"), Hr = W({
  isRequestingName: Wr().optional(),
  numberOfRequestedEmailAddresses: ct.optional(),
  numberOfRequestedPhoneNumbers: ct.optional()
}), Ka = W({
  name: Ss.optional(),
  emailAddresses: Kr(ee()).optional(),
  phoneNumbers: Kr(ee()).optional()
}), Rp = W({
  accounts: Wr(),
  personaData: Wr()
}), dA = W({
  persona: Sr,
  challenge: ee().optional(),
  proof: br.optional()
}).refine((e) => e.challenge || e.proof ? e.challenge && e.proof : !0, "missing challenge or proof"), Fp = W({
  discriminator: ne("unauthorizedRequest"),
  oneTimeAccounts: Ga.optional(),
  oneTimePersonaData: Hr.optional()
}), Vp = W({
  discriminator: ne("usePersona"),
  identityAddress: ee()
}), jp = W({
  discriminator: ne("loginWithoutChallenge")
}), Jp = W({
  discriminator: ne("loginWithChallenge"),
  challenge: ee()
}), Lp = Pe([
  jp,
  Jp
]), zp = Pe([
  Vp,
  Lp
]), Up = W({
  discriminator: ne("authorizedRequest"),
  auth: zp,
  reset: Rp.optional(),
  oneTimeAccounts: Ga.optional(),
  ongoingAccounts: Ga.optional(),
  oneTimePersonaData: Hr.optional(),
  ongoingPersonaData: Hr.optional()
}), Zp = Pe([
  Fp,
  Up
]), qp = W({
  transactionManifest: ee(),
  version: vi(),
  blobs: Kr(ee()).optional(),
  message: ee().optional()
}), Bp = W({
  discriminator: ne("transaction"),
  send: qp
}), Gp = W({
  transactionIntentHash: ee()
}), pA = W({
  discriminator: ne("transaction"),
  send: Gp
}), Wp = W({
  discriminator: ne("cancelRequest")
}), Kp = Pe([
  Zp,
  Bp,
  Wp
]), Os = W({
  version: ne(2),
  networkId: vi(),
  dAppDefinitionAddress: ee()
}), Hp = W({
  interactionId: ee(),
  metadata: Os,
  items: Kp
}), fA = W({
  discriminator: ne("unauthorizedRequest"),
  oneTimeAccounts: Wa.optional(),
  oneTimePersonaData: Ka.optional()
}), Yp = W({
  discriminator: ne("loginWithoutChallenge"),
  persona: Sr
}), Qp = W({
  discriminator: ne("loginWithChallenge"),
  persona: Sr,
  challenge: ee(),
  proof: br
}), Xp = Pe([
  Yp,
  Qp
]), mA = W({
  discriminator: ne("usePersona"),
  persona: Sr
}), $p = Pe([
  mA,
  Xp
]), ef = W({
  discriminator: ne("authorizedRequest"),
  auth: $p,
  oneTimeAccounts: Wa.optional(),
  ongoingAccounts: Wa.optional(),
  oneTimePersonaData: Ka.optional(),
  ongoingPersonaData: Ka.optional()
}), tf = Pe([
  fA,
  ef
]), gA = Pe([
  tf,
  pA
]), nf = W({
  discriminator: ne("success"),
  interactionId: ee(),
  items: gA
}), rf = W({
  discriminator: ne("failure"),
  interactionId: ee(),
  error: ee(),
  message: ee().optional()
}), Ns = Pe([
  nf,
  rf
]), yA = W({
  interactionId: ee(),
  discriminator: ne("extensionStatus")
}), Nn = {
  extensionStatus: "extensionStatus",
  receivedByExtension: "receivedByExtension",
  receivedByWallet: "receivedByWallet",
  requestCancelSuccess: "requestCancelSuccess",
  requestCancelFail: "requestCancelFail"
}, hA = W({
  eventType: ne(Nn.extensionStatus),
  interactionId: ee(),
  isWalletLinked: Wr(),
  isExtensionAvailable: Wr()
}), af = W({
  eventType: Pe([
    ne(Nn.extensionStatus),
    ne(Nn.receivedByExtension),
    ne(Nn.receivedByWallet),
    ne(Nn.requestCancelSuccess),
    ne(Nn.requestCancelFail)
  ]),
  interactionId: ee()
});
Pe([
  af,
  Ns
]);
const Jr = {
  outgoingMessage: "radix#chromeExtension#send",
  incomingMessage: "radix#chromeExtension#receive"
}, vA = (e, t) => At.fromPromise(
  e.parseAsync(t),
  (n) => n.issues
), of = (e) => (t, n, r = crypto.randomUUID()) => {
  const a = {
    items: n,
    interactionId: r,
    metadata: t
  };
  return vA(Hp, a).mapErr((i) => (e == null || e.error("🔵⬆️❌ invalidWalletInteraction", i), Wt(
    rr.walletRequestValidation,
    a.interactionId
  )));
}, _A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  walletInteractionFactory: of
}, Symbol.toStringTag, { value: "Module" })), sf = (e) => e, rr = {
  rejectedByUser: "rejectedByUser",
  missingExtension: "missingExtension",
  canceledByUser: "canceledByUser",
  walletRequestValidation: "walletRequestValidation",
  walletResponseValidation: "walletResponseValidation",
  wrongNetwork: "wrongNetwork",
  failedToPrepareTransaction: "failedToPrepareTransaction",
  failedToCompileTransaction: "failedToCompileTransaction",
  failedToSignTransaction: "failedToSignTransaction",
  failedToSubmitTransaction: "failedToSubmitTransaction",
  failedToPollSubmittedTransaction: "failedToPollSubmittedTransaction",
  submittedTransactionWasDuplicate: "submittedTransactionWasDuplicate",
  submittedTransactionHasFailedTransactionStatus: "submittedTransactionHasFailedTransactionStatus",
  submittedTransactionHasRejectedTransactionStatus: "submittedTransactionHasRejectedTransactionStatus",
  failedToFindAccountWithEnoughFundsToLockFee: "failedToFindAccountWithEnoughFundsToLockFee",
  wrongAccountType: "wrongAccountType",
  unknownWebsite: "unknownWebsite",
  radixJsonNotFound: "radixJsonNotFound",
  unknownDappDefinitionAddress: "unknownDappDefinitionAddress",
  invalidPersona: "invalidPersona"
}, bA = (/* @__PURE__ */ new Map()).set(rr.missingExtension, "extension could not be found").set(rr.rejectedByUser, "user rejected request").set(rr.canceledByUser, "user has canceled the request"), Wt = (e, t, n) => ({
  error: e,
  interactionId: t,
  message: n || bA.get(e) || ""
}), td = (e) => At.fromPromise(
  Ns.parseAsync(e),
  (t) => t.issues
).andThen(
  (t) => t.discriminator === "success" ? ht(t) : He(t)
).mapErr(() => Wt("walletResponseValidation", "")), SA = (e, t) => {
  const n = e.logger, r = of(n);
  return {
    request: (a, i = {}) => r(e, a).andThen(
      (o) => t.send(o, i)
    ).andThen(td).map((o) => o.items),
    sendTransaction: (a, i = {}) => r(e, {
      discriminator: "transaction",
      send: a
    }).andThen(
      (o) => t.send(o, i)
    ).andThen(td).map(
      (o) => o.items.send
    ),
    extensionStatus$: t.extensionStatus$,
    openPopup: t.openPopup
  };
};
var Do = function(e, t) {
  return Do = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r)
      Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, Do(e, t);
};
function sn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Do(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function OA(e, t, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function s(p) {
      try {
        u(r.next(p));
      } catch (g) {
        o(g);
      }
    }
    function l(p) {
      try {
        u(r.throw(p));
      } catch (g) {
        o(g);
      }
    }
    function u(p) {
      p.done ? i(p.value) : a(p.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function lf(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(p) {
      return l([u, p]);
    };
  }
  function l(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (p) {
        u = [6, p], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ur(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function cr(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function dr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ar(e) {
  return this instanceof ar ? (this.v = e, this) : new ar(e);
}
function NA(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), a, i = [];
  return a = {}, o("next"), o("throw"), o("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function o(m) {
    r[m] && (a[m] = function(h) {
      return new Promise(function(I, v) {
        i.push([m, h, I, v]) > 1 || s(m, h);
      });
    });
  }
  function s(m, h) {
    try {
      l(r[m](h));
    } catch (I) {
      g(i[0][3], I);
    }
  }
  function l(m) {
    m.value instanceof ar ? Promise.resolve(m.value.v).then(u, p) : g(i[0][2], m);
  }
  function u(m) {
    s("next", m);
  }
  function p(m) {
    s("throw", m);
  }
  function g(m, h) {
    m(h), i.shift(), i.length && s(i[0][0], i[0][1]);
  }
}
function AA(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof ur == "function" ? ur(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(i) {
    n[i] = e[i] && function(o) {
      return new Promise(function(s, l) {
        o = e[i](o), a(s, l, o.done, o.value);
      });
    };
  }
  function a(i, o, s, l) {
    Promise.resolve(l).then(function(u) {
      i({ value: u, done: s });
    }, o);
  }
}
function ge(e) {
  return typeof e == "function";
}
function As(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ki = As(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, r) {
      return r + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Ha(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Or = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, a, i;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var s = ur(o), l = s.next(); !l.done; l = s.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              l && !l.done && (n = s.return) && n.call(s);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          o.remove(this);
      var p = this.initialTeardown;
      if (ge(p))
        try {
          p();
        } catch (v) {
          i = v instanceof Ki ? v.errors : [v];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var m = ur(g), h = m.next(); !h.done; h = m.next()) {
            var I = h.value;
            try {
              nd(I);
            } catch (v) {
              i = i ?? [], v instanceof Ki ? i = dr(dr([], cr(i)), cr(v.errors)) : i.push(v);
            }
          }
        } catch (v) {
          r = { error: v };
        } finally {
          try {
            h && !h.done && (a = m.return) && a.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new Ki(i);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        nd(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Ha(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Ha(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), uf = Or.EMPTY;
function cf(e) {
  return e instanceof Or || e && "closed" in e && ge(e.remove) && ge(e.add) && ge(e.unsubscribe);
}
function nd(e) {
  ge(e) ? e() : e.unsubscribe();
}
var df = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, IA = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, dr([e, t], cr(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function pf(e) {
  IA.setTimeout(function() {
    throw e;
  });
}
function Po() {
}
function Ra(e) {
  e();
}
var Is = function(e) {
  sn(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, cf(n) && n.add(r)) : r.destination = kA, r;
  }
  return t.create = function(n, r, a) {
    return new pr(n, r, a);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Or), wA = Function.prototype.bind;
function Hi(e, t) {
  return wA.call(e, t);
}
var xA = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        Ma(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Ma(r);
      }
    else
      Ma(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Ma(n);
      }
  }, e;
}(), pr = function(e) {
  sn(t, e);
  function t(n, r, a) {
    var i = e.call(this) || this, o;
    if (ge(n) || !n)
      o = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: a ?? void 0
      };
    else {
      var s;
      i && df.useDeprecatedNextContext ? (s = Object.create(n), s.unsubscribe = function() {
        return i.unsubscribe();
      }, o = {
        next: n.next && Hi(n.next, s),
        error: n.error && Hi(n.error, s),
        complete: n.complete && Hi(n.complete, s)
      }) : o = n;
    }
    return i.destination = new xA(o), i;
  }
  return t;
}(Is);
function Ma(e) {
  pf(e);
}
function TA(e) {
  throw e;
}
var kA = {
  closed: !0,
  next: Po,
  error: TA,
  complete: Po
}, ws = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function _i(e) {
  return e;
}
function MA(e) {
  return e.length === 0 ? _i : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, r) {
      return r(n);
    }, t);
  };
}
var De = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var a = this, i = CA(t) ? t : new pr(t, n, r);
    return Ra(function() {
      var o = a, s = o.operator, l = o.source;
      i.add(s ? s.call(i, l) : l ? a._subscribe(i) : a._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = rd(n), new n(function(a, i) {
      var o = new pr({
        next: function(s) {
          try {
            t(s);
          } catch (l) {
            i(l), o.unsubscribe();
          }
        },
        error: i,
        complete: a
      });
      r.subscribe(o);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[ws] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return MA(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = rd(t), new t(function(r, a) {
      var i;
      n.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return a(o);
      }, function() {
        return r(i);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function rd(e) {
  var t;
  return (t = e ?? df.Promise) !== null && t !== void 0 ? t : Promise;
}
function EA(e) {
  return e && ge(e.next) && ge(e.error) && ge(e.complete);
}
function CA(e) {
  return e && e instanceof Is || EA(e) && cf(e);
}
function DA(e) {
  return ge(e == null ? void 0 : e.lift);
}
function Xe(e) {
  return function(t) {
    if (DA(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function je(e, t, n, r, a) {
  return new PA(e, t, n, r, a);
}
var PA = function(e) {
  sn(t, e);
  function t(n, r, a, i, o, s) {
    var l = e.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = s, l._next = r ? function(u) {
      try {
        r(u);
      } catch (p) {
        n.error(p);
      }
    } : e.prototype._next, l._error = i ? function(u) {
      try {
        i(u);
      } catch (p) {
        n.error(p);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, l._complete = a ? function() {
      try {
        a();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, l;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Is), RA = As(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), xn = function(e) {
  sn(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new ad(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new RA();
  }, t.prototype.next = function(n) {
    var r = this;
    Ra(function() {
      var a, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = ur(r.currentObservers), s = o.next(); !s.done; s = o.next()) {
            var l = s.value;
            l.next(n);
          }
        } catch (u) {
          a = { error: u };
        } finally {
          try {
            s && !s.done && (i = o.return) && i.call(o);
          } finally {
            if (a)
              throw a.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    Ra(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var a = r.observers; a.length; )
          a.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    Ra(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, a = this, i = a.hasError, o = a.isStopped, s = a.observers;
    return i || o ? uf : (this.currentObservers = null, s.push(n), new Or(function() {
      r.currentObservers = null, Ha(s, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, a = r.hasError, i = r.thrownError, o = r.isStopped;
    a ? n.error(i) : o && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new De();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new ad(n, r);
  }, t;
}(De), ad = function(e) {
  sn(t, e);
  function t(n, r) {
    var a = e.call(this) || this;
    return a.destination = n, a.source = r, a;
  }
  return t.prototype.next = function(n) {
    var r, a;
    (a = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || a === void 0 || a.call(r, n);
  }, t.prototype.error = function(n) {
    var r, a;
    (a = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || a === void 0 || a.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, a;
    return (a = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && a !== void 0 ? a : uf;
  }, t;
}(xn), FA = {
  now: function() {
    return Date.now();
  },
  delegate: void 0
}, VA = function(e) {
  sn(t, e);
  function t(n, r) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(n, r) {
    return this;
  }, t;
}(Or), Ro = {
  setInterval: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var a = Ro.delegate;
    return a != null && a.setInterval ? a.setInterval.apply(a, dr([e, t], cr(n))) : setInterval.apply(void 0, dr([e, t], cr(n)));
  },
  clearInterval: function(e) {
    return clearInterval(e);
  },
  delegate: void 0
}, jA = function(e) {
  sn(t, e);
  function t(n, r) {
    var a = e.call(this, n, r) || this;
    return a.scheduler = n, a.work = r, a.pending = !1, a;
  }
  return t.prototype.schedule = function(n, r) {
    var a;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var i = this.id, o = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(o, i, r)), this.pending = !0, this.delay = r, this.id = (a = this.id) !== null && a !== void 0 ? a : this.requestAsyncId(o, this.id, r), this;
  }, t.prototype.requestAsyncId = function(n, r, a) {
    return a === void 0 && (a = 0), Ro.setInterval(n.flush.bind(n, this), a);
  }, t.prototype.recycleAsyncId = function(n, r, a) {
    if (a === void 0 && (a = 0), a != null && this.delay === a && this.pending === !1)
      return r;
    r != null && Ro.clearInterval(r);
  }, t.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var a = this._execute(n, r);
    if (a)
      return a;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(n, r) {
    var a = !1, i;
    try {
      this.work(n);
    } catch (o) {
      a = !0, i = o || new Error("Scheduled action threw falsy error");
    }
    if (a)
      return this.unsubscribe(), i;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, a = n.scheduler, i = a.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Ha(i, this), r != null && (this.id = this.recycleAsyncId(a, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(VA), id = function() {
  function e(t, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
  }
  return e.prototype.schedule = function(t, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
  }, e.now = FA.now, e;
}(), JA = function(e) {
  sn(t, e);
  function t(n, r) {
    r === void 0 && (r = id.now);
    var a = e.call(this, n, r) || this;
    return a.actions = [], a._active = !1, a;
  }
  return t.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var a;
    this._active = !0;
    do
      if (a = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, a) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw a;
    }
  }, t;
}(id), LA = new JA(jA), zA = LA, ff = new De(function(e) {
  return e.complete();
});
function mf(e) {
  return e && ge(e.schedule);
}
function gf(e) {
  return e[e.length - 1];
}
function yf(e) {
  return mf(gf(e)) ? e.pop() : void 0;
}
function UA(e, t) {
  return typeof gf(e) == "number" ? e.pop() : t;
}
var hf = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function vf(e) {
  return ge(e == null ? void 0 : e.then);
}
function _f(e) {
  return ge(e[ws]);
}
function bf(e) {
  return Symbol.asyncIterator && ge(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Sf(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ZA() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Of = ZA();
function Nf(e) {
  return ge(e == null ? void 0 : e[Of]);
}
function Af(e) {
  return NA(this, arguments, function() {
    var t, n, r, a;
    return lf(this, function(i) {
      switch (i.label) {
        case 0:
          t = e.getReader(), i.label = 1;
        case 1:
          i.trys.push([1, , 9, 10]), i.label = 2;
        case 2:
          return [4, ar(t.read())];
        case 3:
          return n = i.sent(), r = n.value, a = n.done, a ? [4, ar(void 0)] : [3, 5];
        case 4:
          return [2, i.sent()];
        case 5:
          return [4, ar(r)];
        case 6:
          return [4, i.sent()];
        case 7:
          return i.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function If(e) {
  return ge(e == null ? void 0 : e.getReader);
}
function $e(e) {
  if (e instanceof De)
    return e;
  if (e != null) {
    if (_f(e))
      return qA(e);
    if (hf(e))
      return BA(e);
    if (vf(e))
      return GA(e);
    if (bf(e))
      return wf(e);
    if (Nf(e))
      return WA(e);
    if (If(e))
      return KA(e);
  }
  throw Sf(e);
}
function qA(e) {
  return new De(function(t) {
    var n = e[ws]();
    if (ge(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function BA(e) {
  return new De(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function GA(e) {
  return new De(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, pf);
  });
}
function WA(e) {
  return new De(function(t) {
    var n, r;
    try {
      for (var a = ur(e), i = a.next(); !i.done; i = a.next()) {
        var o = i.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (s) {
      n = { error: s };
    } finally {
      try {
        i && !i.done && (r = a.return) && r.call(a);
      } finally {
        if (n)
          throw n.error;
      }
    }
    t.complete();
  });
}
function wf(e) {
  return new De(function(t) {
    HA(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function KA(e) {
  return wf(Af(e));
}
function HA(e, t) {
  var n, r, a, i;
  return OA(this, void 0, void 0, function() {
    var o, s;
    return lf(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = AA(e), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done)
            return [3, 4];
          if (o = r.value, t.next(o), t.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return s = l.sent(), a = { error: s }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (a)
            throw a.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function Kt(e, t, n, r, a) {
  r === void 0 && (r = 0), a === void 0 && (a = !1);
  var i = t.schedule(function() {
    n(), a ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !a)
    return i;
}
function xf(e, t) {
  return t === void 0 && (t = 0), Xe(function(n, r) {
    n.subscribe(je(r, function(a) {
      return Kt(r, e, function() {
        return r.next(a);
      }, t);
    }, function() {
      return Kt(r, e, function() {
        return r.complete();
      }, t);
    }, function(a) {
      return Kt(r, e, function() {
        return r.error(a);
      }, t);
    }));
  });
}
function Tf(e, t) {
  return t === void 0 && (t = 0), Xe(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function YA(e, t) {
  return $e(e).pipe(Tf(t), xf(t));
}
function QA(e, t) {
  return $e(e).pipe(Tf(t), xf(t));
}
function XA(e, t) {
  return new De(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function $A(e, t) {
  return new De(function(n) {
    var r;
    return Kt(n, t, function() {
      r = e[Of](), Kt(n, t, function() {
        var a, i, o;
        try {
          a = r.next(), i = a.value, o = a.done;
        } catch (s) {
          n.error(s);
          return;
        }
        o ? n.complete() : n.next(i);
      }, 0, !0);
    }), function() {
      return ge(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function kf(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new De(function(n) {
    Kt(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      Kt(n, t, function() {
        r.next().then(function(a) {
          a.done ? n.complete() : n.next(a.value);
        });
      }, 0, !0);
    });
  });
}
function eI(e, t) {
  return kf(Af(e), t);
}
function tI(e, t) {
  if (e != null) {
    if (_f(e))
      return YA(e, t);
    if (hf(e))
      return XA(e, t);
    if (vf(e))
      return QA(e, t);
    if (bf(e))
      return kf(e, t);
    if (Nf(e))
      return $A(e, t);
    if (If(e))
      return eI(e, t);
  }
  throw Sf(e);
}
function Mf(e, t) {
  return t ? tI(e, t) : $e(e);
}
function od() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = yf(e);
  return Mf(e, n);
}
var xs = As(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Ef(e, t) {
  var n = typeof t == "object";
  return new Promise(function(r, a) {
    var i = new pr({
      next: function(o) {
        r(o), i.unsubscribe();
      },
      error: a,
      complete: function() {
        n ? r(t.defaultValue) : a(new xs());
      }
    });
    e.subscribe(i);
  });
}
function nI(e) {
  return e instanceof Date && !isNaN(e);
}
function hn(e, t) {
  return Xe(function(n, r) {
    var a = 0;
    n.subscribe(je(r, function(i) {
      r.next(e.call(t, i, a++));
    }));
  });
}
function rI(e, t, n, r, a, i, o, s) {
  var l = [], u = 0, p = 0, g = !1, m = function() {
    g && !l.length && !u && t.complete();
  }, h = function(v) {
    return u < r ? I(v) : l.push(v);
  }, I = function(v) {
    i && t.next(v), u++;
    var E = !1;
    $e(n(v, p++)).subscribe(je(t, function(R) {
      a == null || a(R), i ? h(R) : t.next(R);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var R = function() {
            var F = l.shift();
            o ? Kt(t, o, function() {
              return I(F);
            }) : I(F);
          }; l.length && u < r; )
            R();
          m();
        } catch (F) {
          t.error(F);
        }
    }));
  };
  return e.subscribe(je(t, h, function() {
    g = !0, m();
  })), function() {
    s == null || s();
  };
}
function Cf(e, t, n) {
  return n === void 0 && (n = 1 / 0), ge(t) ? Cf(function(r, a) {
    return hn(function(i, o) {
      return t(r, i, a, o);
    })($e(e(r, a)));
  }, n) : (typeof t == "number" && (n = t), Xe(function(r, a) {
    return rI(r, a, e, n);
  }));
}
function aI(e) {
  return e === void 0 && (e = 1 / 0), Cf(_i, e);
}
function sd(e, t, n) {
  e === void 0 && (e = 0), n === void 0 && (n = zA);
  var r = -1;
  return t != null && (mf(t) ? n = t : r = t), new De(function(a) {
    var i = nI(e) ? +e - n.now() : e;
    i < 0 && (i = 0);
    var o = 0;
    return n.schedule(function() {
      a.closed || (a.next(o++), 0 <= r ? this.schedule(void 0, r) : a.complete());
    }, i);
  });
}
function Fr() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = yf(e), r = UA(e, 1 / 0), a = e;
  return a.length ? a.length === 1 ? $e(a[0]) : aI(r)(Mf(a, n)) : ff;
}
var iI = Array.isArray;
function oI(e) {
  return e.length === 1 && iI(e[0]) ? e[0] : e;
}
function vn(e, t) {
  return Xe(function(n, r) {
    var a = 0;
    n.subscribe(je(r, function(i) {
      return e.call(t, i, a++) && r.next(i);
    }));
  });
}
function sI() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e = oI(e), e.length === 1 ? $e(e[0]) : new De(lI(e));
}
function lI(e) {
  return function(t) {
    for (var n = [], r = function(i) {
      n.push($e(e[i]).subscribe(je(t, function(o) {
        if (n) {
          for (var s = 0; s < n.length; s++)
            s !== i && n[s].unsubscribe();
          n = null;
        }
        t.next(o);
      })));
    }, a = 0; n && !t.closed && a < e.length; a++)
      r(a);
  };
}
function uI(e) {
  return Xe(function(t, n) {
    var r = !1;
    t.subscribe(je(n, function(a) {
      r = !0, n.next(a);
    }, function() {
      r || n.next(e), n.complete();
    }));
  });
}
function cI(e) {
  return e <= 0 ? function() {
    return ff;
  } : Xe(function(t, n) {
    var r = 0;
    t.subscribe(je(n, function(a) {
      ++r <= e && (n.next(a), e <= r && n.complete());
    }));
  });
}
function dI(e) {
  return e === void 0 && (e = pI), Xe(function(t, n) {
    var r = !1;
    t.subscribe(je(n, function(a) {
      r = !0, n.next(a);
    }, function() {
      return r ? n.complete() : n.error(e());
    }));
  });
}
function pI() {
  return new xs();
}
function ld(e, t) {
  var n = arguments.length >= 2;
  return function(r) {
    return r.pipe(e ? vn(function(a, i) {
      return e(a, i, r);
    }) : _i, cI(1), n ? uI(t) : dI(function() {
      return new xs();
    }));
  };
}
function fI(e) {
  e === void 0 && (e = {});
  var t = e.connector, n = t === void 0 ? function() {
    return new xn();
  } : t, r = e.resetOnError, a = r === void 0 ? !0 : r, i = e.resetOnComplete, o = i === void 0 ? !0 : i, s = e.resetOnRefCountZero, l = s === void 0 ? !0 : s;
  return function(u) {
    var p, g, m, h = 0, I = !1, v = !1, E = function() {
      g == null || g.unsubscribe(), g = void 0;
    }, R = function() {
      E(), p = m = void 0, I = v = !1;
    }, F = function() {
      var _ = p;
      R(), _ == null || _.unsubscribe();
    };
    return Xe(function(_, C) {
      h++, !v && !I && E();
      var L = m = m ?? n();
      C.add(function() {
        h--, h === 0 && !v && !I && (g = Yi(F, l));
      }), L.subscribe(C), !p && h > 0 && (p = new pr({
        next: function(M) {
          return L.next(M);
        },
        error: function(M) {
          v = !0, E(), g = Yi(R, a, M), L.error(M);
        },
        complete: function() {
          I = !0, E(), g = Yi(R, o), L.complete();
        }
      }), $e(_).subscribe(p));
    })(u);
  };
}
function Yi(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var a = new pr({
      next: function() {
        a.unsubscribe(), e();
      }
    });
    return $e(t.apply(void 0, dr([], cr(n)))).subscribe(a);
  }
}
function mI(e, t) {
  return Xe(function(n, r) {
    var a = null, i = 0, o = !1, s = function() {
      return o && !a && r.complete();
    };
    n.subscribe(je(r, function(l) {
      a == null || a.unsubscribe();
      var u = 0, p = i++;
      $e(e(l, p)).subscribe(a = je(r, function(g) {
        return r.next(t ? t(l, g, p, u++) : g);
      }, function() {
        a = null, s();
      }));
    }, function() {
      o = !0, s();
    }));
  });
}
function gI(e) {
  return Xe(function(t, n) {
    $e(e).subscribe(je(n, function() {
      return n.complete();
    }, Po)), !n.closed && t.subscribe(n);
  });
}
function Qn(e, t, n) {
  var r = ge(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Xe(function(a, i) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var s = !0;
    a.subscribe(je(i, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), i.next(l);
    }, function() {
      var l;
      s = !1, (l = r.complete) === null || l === void 0 || l.call(r), i.complete();
    }, function(l) {
      var u;
      s = !1, (u = r.error) === null || u === void 0 || u.call(r, l), i.error(l);
    }, function() {
      var l, u;
      s && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : _i;
}
const yI = () => ({
  outgoingMessageSubject: new xn(),
  incomingMessageSubject: new xn(),
  responseSubject: new xn(),
  messageLifeCycleEventSubject: new xn()
}), hI = (e) => At.fromPromise(Ef(e), sf).andThen(
  (t) => t
), ud = {
  extensionDetectionTime: 100
}, vI = (e) => {
  const t = e == null ? void 0 : e.logger, n = (e == null ? void 0 : e.subjects) ?? yI(), r = new Or();
  r.add(
    n.incomingMessageSubject.pipe(
      Qn((s) => {
        "eventType" in s ? (t == null || t.debug("🔵💬⬇️ messageLifecycleEvent", s), n.messageLifeCycleEventSubject.next(s)) : (t == null || t.debug("🔵⬇️ walletResponse", s), n.responseSubject.next(s));
      })
    ).subscribe()
  ), r.add(
    n.outgoingMessageSubject.pipe(
      Qn((s) => {
        t == null || t.debug("🔵⬆️ walletRequest", s), window.dispatchEvent(
          new CustomEvent(Jr.outgoingMessage, {
            detail: s
          })
        );
      })
    ).subscribe()
  );
  const a = (s) => {
    const l = s.detail;
    n.incomingMessageSubject.next(l);
  };
  addEventListener(Jr.incomingMessage, a);
  const i = (s, l) => {
    const u = new xn(), p = n.responseSubject.pipe(
      vn(
        (_) => _.interactionId === s.interactionId
      ),
      hn(
        (_) => _.discriminator === "success" ? ht(_) : He(_)
      )
    ), g = n.messageLifeCycleEventSubject.pipe(
      vn(
        ({ interactionId: _, eventType: C }) => s.interactionId === _ && ["requestCancelSuccess", "requestCancelFail"].includes(C)
      ),
      hn((_) => {
        const C = Wt("canceledByUser", _.interactionId);
        return t == null || t.debug("🔵⬆️❌ walletRequestCanceled", C), _;
      })
    ), m = () => (n.outgoingMessageSubject.next({
      interactionId: s.interactionId,
      items: { discriminator: "cancelRequest" },
      metadata: s.metadata
    }), setTimeout(() => {
      u.next(
        He(Wt("canceledByUser", s.interactionId))
      );
    }), At.fromSafePromise(
      Ef(
        Fr(
          p.pipe(hn(() => "requestCancelFail")),
          g.pipe(hn(({ eventType: _ }) => _))
        )
      )
    ));
    l.requestControl && l.requestControl({
      cancelRequest: () => m().andThen(
        (_) => _ === "requestCancelSuccess" ? ht("requestCancelSuccess") : He("requestCancelFail")
      ),
      getRequest: () => s
    });
    const h = Fr(
      p,
      u
    ).pipe(ld()), I = n.messageLifeCycleEventSubject.pipe(
      vn(
        ({ interactionId: _ }) => s.interactionId === _
      ),
      Qn((_) => {
        l.eventCallback && l.eventCallback(_.eventType);
      }),
      gI(p),
      fI()
    ), v = I.subscribe(), E = sd(ud.extensionDetectionTime).pipe(
      hn(
        () => He(Wt("missingExtension", s.interactionId))
      )
    ), R = Fr(
      E,
      I
    ).pipe(
      ld(),
      vn((_) => !("eventType" in _))
    ), F = od(s).pipe(
      Qn((_) => {
        n.outgoingMessageSubject.next(_);
      }),
      vn((_) => !1)
    );
    return hI(
      Fr(
        h,
        R,
        F
      ).pipe(
        Qn(() => {
          v.unsubscribe();
        })
      )
    );
  }, o = n.messageLifeCycleEventSubject.pipe(
    vn(
      (s) => s.eventType === "extensionStatus"
    )
  );
  return {
    send: i,
    destroy: () => {
      r.unsubscribe(), removeEventListener(Jr.incomingMessage, a);
    },
    openPopup: () => {
      window.dispatchEvent(
        new CustomEvent(Jr.outgoingMessage, {
          detail: { discriminator: "openPopup" }
        })
      );
    },
    extensionStatus$: od(!0).pipe(
      Qn(() => {
        n.outgoingMessageSubject.next({
          interactionId: crypto.randomUUID(),
          discriminator: "extensionStatus"
        });
      }),
      mI(
        () => sI(
          o,
          Fr(
            o,
            sd(ud.extensionDetectionTime).pipe(
              hn(
                () => ({
                  eventType: "extensionStatus",
                  isWalletLinked: !1,
                  isExtensionAvailable: !1
                })
              )
            )
          )
        )
      )
    )
  };
}, Fo = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  overline: [53, 55],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
function Vo(e, t, n, r = !1) {
  const a = String(t), i = (s, l) => `\x1B[${l[0]}m${s}\x1B[${l[1]}m`, o = (s, l) => l != null && typeof l == "string" ? i(s, Fo[l]) : l != null && Array.isArray(l) ? l.reduce((u, p) => o(u, p), s) : l != null && l[s.trim()] != null ? o(s, l[s.trim()]) : l != null && l["*"] != null ? o(s, l["*"]) : s;
  return a.replace(/{{(.+?)}}/g, (s, l) => {
    var u;
    const p = n[l] != null ? n[l] : r ? "" : s;
    return e.stylePrettyLogs ? o(p, (u = e == null ? void 0 : e.prettyLogStyles) == null ? void 0 : u[l]) + i("", Fo.reset) : p;
  });
}
function Df(e) {
  const t = /* @__PURE__ */ new Set();
  return JSON.stringify(e, (n, r) => {
    if (typeof r == "object" && r !== null) {
      if (t.has(r))
        return "[Circular]";
      t.add(r);
    }
    return r;
  });
}
function Ce(e, t) {
  const n = {
    seen: [],
    stylize: Pf
  };
  return t != null && jf(n, t), tr(n.showHidden) && (n.showHidden = !1), tr(n.depth) && (n.depth = 2), tr(n.colors) && (n.colors = !0), tr(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = bI), Ya(n, e, n.depth);
}
Ce.colors = Fo;
Ce.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function _I(e) {
  return typeof e == "boolean";
}
function tr(e) {
  return e == null;
}
function Pf(e) {
  return e;
}
function bI(e, t) {
  var n, r, a, i;
  const o = Ce.styles[t];
  return o != null && ((r = (n = Ce == null ? void 0 : Ce.colors) == null ? void 0 : n[o]) == null ? void 0 : r[0]) != null && ((i = (a = Ce == null ? void 0 : Ce.colors) == null ? void 0 : a[o]) == null ? void 0 : i[1]) != null ? "\x1B[" + Ce.colors[o][0] + "m" + e + "\x1B[" + Ce.colors[o][1] + "m" : e;
}
function Ea(e) {
  return typeof e == "function";
}
function Rf(e) {
  return typeof e == "string";
}
function SI(e) {
  return typeof e == "number";
}
function Ff(e) {
  return e === null;
}
function Vf(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Qi(e) {
  return bi(e) && Ts(e) === "[object RegExp]";
}
function bi(e) {
  return typeof e == "object" && e !== null;
}
function Xi(e) {
  return bi(e) && (Ts(e) === "[object Error]" || e instanceof Error);
}
function cd(e) {
  return bi(e) && Ts(e) === "[object Date]";
}
function Ts(e) {
  return Object.prototype.toString.call(e);
}
function OI(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = !0;
  }), t;
}
function NI(e, t, n, r, a) {
  const i = [];
  for (let o = 0, s = t.length; o < s; ++o)
    Vf(t, String(o)) ? i.push(jo(e, t, n, r, String(o), !0)) : i.push("");
  return a.forEach((o) => {
    o.match(/^\d+$/) || i.push(jo(e, t, n, r, o, !0));
  }), i;
}
function $i(e) {
  return "[" + Error.prototype.toString.call(e) + "]";
}
function Ya(e, t, n = 0) {
  if (e.customInspect && t != null && Ea(t) && (t == null ? void 0 : t.inspect) !== Ce && !(t != null && t.constructor && (t == null ? void 0 : t.constructor.prototype) === t)) {
    if (typeof t.inspect != "function" && t.toString != null)
      return t.toString();
    let p = t == null ? void 0 : t.inspect(n, e);
    return Rf(p) || (p = Ya(e, p, n)), p;
  }
  const r = _n(e, t);
  if (r)
    return r;
  let a = Object.keys(t);
  const i = OI(a);
  try {
    e.showHidden && Object.getOwnPropertyNames && (a = Object.getOwnPropertyNames(t));
  } catch {
  }
  if (Xi(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
    return $i(t);
  if (a.length === 0)
    if (Ea(e.stylize)) {
      if (Ea(t)) {
        const p = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + p + "]", "special");
      }
      if (Qi(t))
        return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (cd(t))
        return e.stylize(Date.prototype.toString.call(t), "date");
      if (Xi(t))
        return $i(t);
    } else
      return t;
  let o = "", s = !1, l = [`{
`, `
}`];
  if (Array.isArray(t) && (s = !0, l = [`[
`, `
]`]), Ea(t) && (o = " [Function" + (t.name ? ": " + t.name : "") + "]"), Qi(t) && (o = " " + RegExp.prototype.toString.call(t)), cd(t) && (o = " " + Date.prototype.toUTCString.call(t)), Xi(t) && (o = " " + $i(t)), a.length === 0 && (!s || t.length == 0))
    return l[0] + o + l[1];
  if (n < 0)
    return Qi(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
  e.seen.push(t);
  let u;
  return s ? u = NI(e, t, n, i, a) : u = a.map((p) => jo(e, t, n, i, p, s)), e.seen.pop(), AI(u, o, l);
}
function jo(e, t, n, r, a, i) {
  let o, s, l;
  l = { value: void 0 };
  try {
    l.value = t[a];
  } catch {
  }
  try {
    Object.getOwnPropertyDescriptor && (l = Object.getOwnPropertyDescriptor(t, a) || l);
  } catch {
  }
  if (l.get ? l.set ? s = e.stylize("[Getter/Setter]", "special") : s = e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")), Vf(r, a) || (o = "[" + a + "]"), s || (e.seen.indexOf(l.value) < 0 ? (Ff(n) ? s = Ya(e, l.value, void 0) : s = Ya(e, l.value, n - 1), s.indexOf(`
`) > -1 && (i ? s = s.split(`
`).map((u) => "  " + u).join(`
`).substr(2) : s = `
` + s.split(`
`).map((u) => "   " + u).join(`
`))) : s = e.stylize("[Circular]", "special")), tr(o)) {
    if (i && a.match(/^\d+$/))
      return s;
    o = JSON.stringify("" + a), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"));
  }
  return o + ": " + s;
}
function _n(e, t) {
  if (tr(t))
    return e.stylize("undefined", "undefined");
  if (Rf(t)) {
    const n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return e.stylize(n, "string");
  }
  if (SI(t))
    return e.stylize("" + t, "number");
  if (_I(t))
    return e.stylize("" + t, "boolean");
  if (Ff(t))
    return e.stylize("null", "null");
}
function AI(e, t, n) {
  return n[0] + (t === "" ? "" : t + `
`) + "  " + e.join(`,
  `) + " " + n[1];
}
function jf(e, t) {
  if (!t || !bi(t))
    return e;
  const n = Object.keys(t);
  let r = n.length;
  for (; r--; )
    e[n[r]] = t[n[r]];
  return e;
}
function II(e, ...t) {
  const n = {
    seen: [],
    stylize: Pf
  };
  e != null && jf(n, e);
  const r = t[0];
  let a = 0, i = "", o = "";
  if (typeof r == "string") {
    if (t.length === 1)
      return r;
    let s, l = 0;
    for (let u = 0; u < r.length - 1; u++)
      if (r.charCodeAt(u) === 37) {
        const p = r.charCodeAt(++u);
        if (a + 1 !== t.length) {
          switch (p) {
            case 115: {
              const g = t[++a];
              typeof g == "number" || typeof g == "bigint" ? s = _n(n, g) : typeof g != "object" || g === null ? s = String(g) : s = Ce(g, {
                ...e,
                compact: 3,
                colors: !1,
                depth: 0
              });
              break;
            }
            case 106:
              s = Df(t[++a]);
              break;
            case 100: {
              const g = t[++a];
              typeof g == "bigint" ? s = _n(n, g) : typeof g == "symbol" ? s = "NaN" : s = _n(n, g);
              break;
            }
            case 79:
              s = Ce(t[++a], e);
              break;
            case 111:
              s = Ce(t[++a], {
                ...e,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const g = t[++a];
              typeof g == "bigint" ? s = _n(n, g) : typeof g == "symbol" ? s = "NaN" : s = _n(n, parseInt(s));
              break;
            }
            case 102: {
              const g = t[++a];
              typeof g == "symbol" ? s = "NaN" : s = _n(n, parseInt(g));
              break;
            }
            case 99:
              a += 1, s = "";
              break;
            case 37:
              i += r.slice(l, u), l = u + 1;
              continue;
            default:
              continue;
          }
          l !== u - 1 && (i += r.slice(l, u - 1)), i += s, l = u + 1;
        } else
          p === 37 && (i += r.slice(l, u), l = u + 1);
      }
    l !== 0 && (a++, o = " ", l < r.length && (i += r.slice(l)));
  }
  for (; a < t.length; ) {
    const s = t[a];
    i += o, i += typeof s != "string" ? Ce(s, e) : s, o = " ", a++;
  }
  return i;
}
var dd;
const wI = {
  runtime: [typeof window, typeof document].includes("undefined") ? "Generic" : "Browser",
  browser: (dd = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : dd.userAgent
}, xI = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/;
function TI(e, t, n, r, a, i) {
  return Object.assign({}, wI, {
    name: a,
    parentNames: i,
    date: /* @__PURE__ */ new Date(),
    logLevelId: e,
    logLevelName: t,
    path: r ? void 0 : kI(n)
  });
}
function kI(e, t = Error()) {
  var n, r, a;
  return Lf((a = (r = (n = t == null ? void 0 : t.stack) == null ? void 0 : n.split(`
`)) == null ? void 0 : r.filter((i) => !i.includes("Error: "))) == null ? void 0 : a[e]);
}
function Jf(e) {
  var t, n, r;
  return (r = (n = (t = e == null ? void 0 : e.stack) == null ? void 0 : t.split(`
`)) == null ? void 0 : n.filter((a) => !a.includes("Error: "))) == null ? void 0 : r.reduce((a, i) => (a.push(Lf(i)), a), []);
}
function Lf(e) {
  const t = globalThis.location.origin, n = {
    fullFilePath: void 0,
    fileName: void 0,
    fileNameWithLine: void 0,
    fileColumn: void 0,
    fileLine: void 0,
    filePath: void 0,
    filePathWithLine: void 0,
    method: void 0
  };
  if (e != null) {
    const r = e.match(xI);
    if (r) {
      n.filePath = r[1].replace(/\?.*$/, ""), n.fullFilePath = `${t}${n.filePath}`;
      const a = n.filePath.split("/");
      n.fileName = a[a.length - 1], n.fileLine = r[2], n.fileColumn = r[3], n.filePathWithLine = `${n.filePath}:${n.fileLine}`, n.fileNameWithLine = `${n.fileName}:${n.fileLine}`;
    }
  }
  return n;
}
function Jo(e) {
  return e instanceof Error;
}
function MI(e, t) {
  return e.reduce((n, r) => (Jo(r) ? n.errors.push(EI(r, t)) : n.args.push(r), n), { args: [], errors: [] });
}
function EI(e, t) {
  const n = Jf(e).map((a) => Vo(t, t.prettyErrorStackTemplate, { ...a }, !0)), r = {
    errorName: ` ${e.name} `,
    errorMessage: e.message,
    errorStack: n.join(`
`)
  };
  return Vo(t, t.prettyErrorTemplate, r);
}
function CI(e, t, n, r) {
  const a = (n.length > 0 && t.length > 0 ? `
` : "") + n.join(`
`);
  r.prettyInspectOptions.colors = r.stylePrettyLogs, console.log(e + II(r.prettyInspectOptions, ...t) + a);
}
function DI(e) {
  console.log(Df(e));
}
function We(e, t = 2, n = 0) {
  return e != null && isNaN(e) ? "" : (e = e != null ? e + n : e, t === 2 ? e == null ? "--" : e < 10 ? "0" + e : e.toString() : e == null ? "---" : e < 10 ? "00" + e : e < 100 ? "0" + e : e.toString());
}
let PI = class {
  constructor(e, t, n = 4) {
    var r, a, i, o, s, l, u;
    this.logObj = t, this.stackDepthLevel = n;
    const p = ![typeof window, typeof document].includes("undefined"), g = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
    this.runtime = p ? "browser" : g ? "nodejs" : "unknown";
    const m = p ? (((window == null ? void 0 : window.chrome) || window.Intl && (Intl == null ? void 0 : Intl.v8BreakIterator)) && "CSS" in window) != null : !1, h = p ? /^((?!chrome|android).)*safari/i.test(navigator == null ? void 0 : navigator.userAgent) : !1;
    this.stackDepthLevel = h ? 4 : this.stackDepthLevel, this.settings = {
      type: (e == null ? void 0 : e.type) ?? "pretty",
      name: e == null ? void 0 : e.name,
      parentNames: e == null ? void 0 : e.parentNames,
      minLevel: (e == null ? void 0 : e.minLevel) ?? 0,
      argumentsArrayName: e == null ? void 0 : e.argumentsArrayName,
      hideLogPositionForProduction: (e == null ? void 0 : e.hideLogPositionForProduction) ?? !1,
      prettyLogTemplate: (e == null ? void 0 : e.prettyLogTemplate) ?? "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
      prettyErrorTemplate: (e == null ? void 0 : e.prettyErrorTemplate) ?? `
{{errorName}} {{errorMessage}}
error stack:
{{errorStack}}`,
      prettyErrorStackTemplate: (e == null ? void 0 : e.prettyErrorStackTemplate) ?? `  • {{fileName}}	{{method}}
	{{filePathWithLine}}`,
      prettyErrorParentNamesSeparator: (e == null ? void 0 : e.prettyErrorParentNamesSeparator) ?? ":",
      prettyErrorLoggerNameDelimiter: (e == null ? void 0 : e.prettyErrorLoggerNameDelimiter) ?? "	",
      stylePrettyLogs: (e == null ? void 0 : e.stylePrettyLogs) ?? !0,
      prettyLogTimeZone: (e == null ? void 0 : e.prettyLogTimeZone) ?? "UTC",
      prettyLogStyles: (e == null ? void 0 : e.prettyLogStyles) ?? {
        logLevelName: {
          "*": ["bold", "black", "bgWhiteBright", "dim"],
          SILLY: ["bold", "white"],
          TRACE: ["bold", "whiteBright"],
          DEBUG: ["bold", "green"],
          INFO: ["bold", "blue"],
          WARN: ["bold", "yellow"],
          ERROR: ["bold", "red"],
          FATAL: ["bold", "redBright"]
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
        fileNameWithLine: "white"
      },
      prettyInspectOptions: (e == null ? void 0 : e.prettyInspectOptions) ?? {
        colors: !0,
        compact: !1,
        depth: 1 / 0
      },
      metaProperty: (e == null ? void 0 : e.metaProperty) ?? "_meta",
      maskPlaceholder: (e == null ? void 0 : e.maskPlaceholder) ?? "[***]",
      maskValuesOfKeys: (e == null ? void 0 : e.maskValuesOfKeys) ?? ["password"],
      maskValuesOfKeysCaseInsensitive: (e == null ? void 0 : e.maskValuesOfKeysCaseInsensitive) ?? !1,
      maskValuesRegEx: e == null ? void 0 : e.maskValuesRegEx,
      prefix: [...(e == null ? void 0 : e.prefix) ?? []],
      attachedTransports: [...(e == null ? void 0 : e.attachedTransports) ?? []],
      overwrite: {
        mask: (r = e == null ? void 0 : e.overwrite) == null ? void 0 : r.mask,
        toLogObj: (a = e == null ? void 0 : e.overwrite) == null ? void 0 : a.toLogObj,
        addMeta: (i = e == null ? void 0 : e.overwrite) == null ? void 0 : i.addMeta,
        formatMeta: (o = e == null ? void 0 : e.overwrite) == null ? void 0 : o.formatMeta,
        formatLogObj: (s = e == null ? void 0 : e.overwrite) == null ? void 0 : s.formatLogObj,
        transportFormatted: (l = e == null ? void 0 : e.overwrite) == null ? void 0 : l.transportFormatted,
        transportJSON: (u = e == null ? void 0 : e.overwrite) == null ? void 0 : u.transportJSON
      }
    }, this.settings.stylePrettyLogs = this.settings.stylePrettyLogs && p && !m ? !1 : this.settings.stylePrettyLogs;
  }
  log(e, t, ...n) {
    var r, a, i, o, s, l, u, p, g, m, h, I, v, E;
    if (e < this.settings.minLevel)
      return;
    const R = [...this.settings.prefix, ...n], F = ((r = this.settings.overwrite) == null ? void 0 : r.mask) != null ? (a = this.settings.overwrite) == null ? void 0 : a.mask(R) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(R) : R, _ = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0, C = ((i = this.settings.overwrite) == null ? void 0 : i.toLogObj) != null ? (o = this.settings.overwrite) == null ? void 0 : o.toLogObj(F, _) : this._toLogObj(F, _), L = ((s = this.settings.overwrite) == null ? void 0 : s.addMeta) != null ? (l = this.settings.overwrite) == null ? void 0 : l.addMeta(C, e, t) : this._addMetaToLogObj(C, e, t);
    let M, Y;
    return ((u = this.settings.overwrite) == null ? void 0 : u.formatMeta) != null && (M = (p = this.settings.overwrite) == null ? void 0 : p.formatMeta(L == null ? void 0 : L[this.settings.metaProperty])), ((g = this.settings.overwrite) == null ? void 0 : g.formatLogObj) != null && (Y = (m = this.settings.overwrite) == null ? void 0 : m.formatLogObj(F, this.settings)), this.settings.type === "pretty" && (M = M ?? this._prettyFormatLogObjMeta(L == null ? void 0 : L[this.settings.metaProperty]), Y = Y ?? MI(F, this.settings)), M != null && Y != null ? ((h = this.settings.overwrite) == null ? void 0 : h.transportFormatted) != null ? (I = this.settings.overwrite) == null || I.transportFormatted(M, Y.args, Y.errors, this.settings) : CI(M, Y.args, Y.errors, this.settings) : ((v = this.settings.overwrite) == null ? void 0 : v.transportJSON) != null ? (E = this.settings.overwrite) == null || E.transportJSON(L) : this.settings.type !== "hidden" && DI(L), this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0 && this.settings.attachedTransports.forEach((z) => {
      z(L);
    }), L;
  }
  attachTransport(e) {
    this.settings.attachedTransports.push(e);
  }
  getSubLogger(e, t) {
    var n, r, a;
    const i = {
      ...this.settings,
      ...e,
      parentNames: ((n = this.settings) == null ? void 0 : n.parentNames) != null && ((r = this.settings) == null ? void 0 : r.name) != null ? [...this.settings.parentNames, this.settings.name] : ((a = this.settings) == null ? void 0 : a.name) != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...(e == null ? void 0 : e.prefix) ?? []]
    };
    return new this.constructor(i, t ?? this.logObj, this.stackDepthLevel);
  }
  _mask(e) {
    const t = this.settings.maskValuesOfKeysCaseInsensitive !== !0 ? this.settings.maskValuesOfKeys : this.settings.maskValuesOfKeys.map((n) => n.toLowerCase());
    return e == null ? void 0 : e.map((n) => this._recursiveCloneAndMaskValuesOfKeys(n, t));
  }
  _recursiveCloneAndMaskValuesOfKeys(e, t, n = []) {
    return n.includes(e) ? { ...e } : (typeof e == "object" && e != null && n.push(e), e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : Array.isArray(e) ? e.map((r) => this._recursiveCloneAndMaskValuesOfKeys(r, t, n)) : e instanceof Date ? new Date(e.getTime()) : Jo(e) ? Object.getOwnPropertyNames(e).reduce((r, a) => {
      var i;
      return r[a] = t.includes(((i = this.settings) == null ? void 0 : i.maskValuesOfKeysCaseInsensitive) !== !0 ? a : a.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(e[a], t, n), r;
    }, this._cloneError(e)) : e != null && typeof e == "object" ? Object.getOwnPropertyNames(e).reduce((r, a) => {
      var i;
      return r[a] = t.includes(((i = this.settings) == null ? void 0 : i.maskValuesOfKeysCaseInsensitive) !== !0 ? a : a.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(e[a], t, n), r;
    }, Object.create(Object.getPrototypeOf(e))) : ((r) => {
      var a, i;
      return (i = (a = this.settings) == null ? void 0 : a.maskValuesRegEx) == null || i.forEach((o) => {
        var s;
        r = (s = r == null ? void 0 : r.toString()) == null ? void 0 : s.replace(o, this.settings.maskPlaceholder);
      }), r;
    })(e));
  }
  _recursiveCloneAndExecuteFunctions(e, t = []) {
    return t.includes(e) ? { ...e } : (typeof e == "object" && t.push(e), Array.isArray(e) ? e.map((n) => this._recursiveCloneAndExecuteFunctions(n, t)) : e instanceof Date ? new Date(e.getTime()) : e && typeof e == "object" ? Object.getOwnPropertyNames(e).reduce((n, r) => (Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r)), n[r] = typeof e[r] == "function" ? e[r]() : this._recursiveCloneAndExecuteFunctions(e[r], t), n), Object.create(Object.getPrototypeOf(e))) : e);
  }
  _toLogObj(e, t = {}) {
    return e = e == null ? void 0 : e.map((n) => Jo(n) ? this._toErrorObject(n) : n), this.settings.argumentsArrayName == null ? e.length === 1 && !Array.isArray(e[0]) && (e[0], !0) && !(e[0] instanceof Date) ? t = typeof e[0] == "object" && e[0] != null ? { ...e[0], ...t } : { 0: e[0], ...t } : t = { ...t, ...e } : t = {
      ...t,
      [this.settings.argumentsArrayName]: e
    }, t;
  }
  _cloneError(e) {
    const t = e.constructor, n = new t(e.message);
    Object.assign(n, e);
    const r = Object.getOwnPropertyNames(n);
    for (const a of r) {
      const i = Object.getOwnPropertyDescriptor(n, a);
      i && (i.writable = !0, Object.defineProperty(n, a, i));
    }
    return n;
  }
  _toErrorObject(e) {
    return {
      nativeError: e,
      name: e.name ?? "Error",
      message: e.message,
      stack: Jf(e)
    };
  }
  _addMetaToLogObj(e, t, n) {
    return {
      ...e,
      [this.settings.metaProperty]: TI(t, n, this.stackDepthLevel, this.settings.hideLogPositionForProduction, this.settings.name, this.settings.parentNames)
    };
  }
  _prettyFormatLogObjMeta(e) {
    var t, n, r, a, i, o, s, l, u, p, g, m, h, I, v, E, R, F, _, C;
    if (e == null)
      return "";
    let L = this.settings.prettyLogTemplate;
    const M = {};
    L.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}") ? L = L.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}") : this.settings.prettyLogTimeZone === "UTC" ? (M.yyyy = ((t = e == null ? void 0 : e.date) == null ? void 0 : t.getUTCFullYear()) ?? "----", M.mm = We((n = e == null ? void 0 : e.date) == null ? void 0 : n.getUTCMonth(), 2, 1), M.dd = We((r = e == null ? void 0 : e.date) == null ? void 0 : r.getUTCDate(), 2), M.hh = We((a = e == null ? void 0 : e.date) == null ? void 0 : a.getUTCHours(), 2), M.MM = We((i = e == null ? void 0 : e.date) == null ? void 0 : i.getUTCMinutes(), 2), M.ss = We((o = e == null ? void 0 : e.date) == null ? void 0 : o.getUTCSeconds(), 2), M.ms = We((s = e == null ? void 0 : e.date) == null ? void 0 : s.getUTCMilliseconds(), 3)) : (M.yyyy = ((l = e == null ? void 0 : e.date) == null ? void 0 : l.getFullYear()) ?? "----", M.mm = We((u = e == null ? void 0 : e.date) == null ? void 0 : u.getMonth(), 2, 1), M.dd = We((p = e == null ? void 0 : e.date) == null ? void 0 : p.getDate(), 2), M.hh = We((g = e == null ? void 0 : e.date) == null ? void 0 : g.getHours(), 2), M.MM = We((m = e == null ? void 0 : e.date) == null ? void 0 : m.getMinutes(), 2), M.ss = We((h = e == null ? void 0 : e.date) == null ? void 0 : h.getSeconds(), 2), M.ms = We((I = e == null ? void 0 : e.date) == null ? void 0 : I.getMilliseconds(), 3));
    const Y = this.settings.prettyLogTimeZone === "UTC" ? e == null ? void 0 : e.date : new Date(((v = e == null ? void 0 : e.date) == null ? void 0 : v.getTime()) - ((E = e == null ? void 0 : e.date) == null ? void 0 : E.getTimezoneOffset()) * 6e4);
    M.rawIsoStr = Y == null ? void 0 : Y.toISOString(), M.dateIsoStr = Y == null ? void 0 : Y.toISOString().replace("T", " ").replace("Z", ""), M.logLevelName = e == null ? void 0 : e.logLevelName, M.fileNameWithLine = ((R = e == null ? void 0 : e.path) == null ? void 0 : R.fileNameWithLine) ?? "", M.filePathWithLine = ((F = e == null ? void 0 : e.path) == null ? void 0 : F.filePathWithLine) ?? "", M.fullFilePath = ((_ = e == null ? void 0 : e.path) == null ? void 0 : _.fullFilePath) ?? "";
    let z = (C = this.settings.parentNames) == null ? void 0 : C.join(this.settings.prettyErrorParentNamesSeparator);
    return z = z != null && (e == null ? void 0 : e.name) != null ? z + this.settings.prettyErrorParentNamesSeparator : void 0, M.name = (e == null ? void 0 : e.name) != null || z != null ? (z ?? "") + (e == null ? void 0 : e.name) : "", M.nameWithDelimiterPrefix = M.name.length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + M.name : "", M.nameWithDelimiterSuffix = M.name.length > 0 ? M.name + this.settings.prettyErrorLoggerNameDelimiter : "", Vo(this.settings, L, M);
  }
}, RI = class extends PI {
  constructor(e, t) {
    super(e, t, 5);
  }
  log(e, t, ...n) {
    return super.log(e, t, ...n);
  }
  silly(...e) {
    return super.log(0, "SILLY", ...e);
  }
  trace(...e) {
    return super.log(1, "TRACE", ...e);
  }
  debug(...e) {
    return super.log(2, "DEBUG", ...e);
  }
  info(...e) {
    return super.log(3, "INFO", ...e);
  }
  warn(...e) {
    return super.log(4, "WARN", ...e);
  }
  error(...e) {
    return super.log(5, "ERROR", ...e);
  }
  fatal(...e) {
    return super.log(6, "FATAL", ...e);
  }
  getSubLogger(e, t) {
    return super.getSubLogger(e, t);
  }
};
const FI = (e) => new RI({
  minLevel: e,
  prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	"
}), zf = (e) => {
  var t, n;
  const r = {
    version: 2,
    dAppDefinitionAddress: e.dAppDefinitionAddress,
    networkId: e.networkId
  };
  Os.parse(r), (t = e.logger) == null || t.debug("🔵 walletSdkInstantiated", r);
  const a = e.logger, i = ((n = e.providers) == null ? void 0 : n.connectorExtensionClient) ?? vI({ logger: a });
  return {
    ...SA(
      {
        version: 2,
        logger: e.logger,
        dAppDefinitionAddress: e.dAppDefinitionAddress,
        networkId: e.networkId
      },
      i
    ),
    destroy: () => {
      a == null || a.debug("🔵🧹 walletSdkInstantiatedDestroyed"), i.destroy();
    }
  };
};
var $;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function n(a) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (a) => {
    const i = {};
    for (const o of a)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (a) => {
    const i = e.objectKeys(a).filter((s) => typeof a[a[s]] != "number"), o = {};
    for (const s of i)
      o[s] = a[s];
    return e.objectValues(o);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(i) {
    return a[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const i = [];
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && i.push(o);
    return i;
  }, e.find = (a, i) => {
    for (const o of a)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function r(a, i = " | ") {
    return a.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (a, i) => typeof i == "bigint" ? i.toString() : i;
})($ || ($ = {}));
var pd;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(pd || (pd = {}));
const x = $.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), An = (e) => {
  switch (typeof e) {
    case "undefined":
      return x.undefined;
    case "string":
      return x.string;
    case "number":
      return isNaN(e) ? x.nan : x.number;
    case "boolean":
      return x.boolean;
    case "function":
      return x.function;
    case "bigint":
      return x.bigint;
    case "symbol":
      return x.symbol;
    case "object":
      return Array.isArray(e) ? x.array : e === null ? x.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? x.promise : typeof Map < "u" && e instanceof Map ? x.map : typeof Set < "u" && e instanceof Set ? x.set : typeof Date < "u" && e instanceof Date ? x.date : x.object;
    default:
      return x.unknown;
  }
}, b = $.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
let Dn = class extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, a = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(a);
        else if (o.code === "invalid_return_type")
          a(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          a(o.argumentsError);
        else if (o.path.length === 0)
          r._errors.push(n(o));
        else {
          let s = r, l = 0;
          for (; l < o.path.length; ) {
            const u = o.path[l];
            l === o.path.length - 1 ? (s[u] = s[u] || { _errors: [] }, s[u]._errors.push(n(o))) : s[u] = s[u] || { _errors: [] }, s = s[u], l++;
          }
        }
    };
    return a(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const a of this.issues)
      a.path.length > 0 ? (n[a.path[0]] = n[a.path[0]] || [], n[a.path[0]].push(t(a))) : r.push(t(a));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
};
Dn.create = (e) => new Dn(e);
const Uf = (e, t) => {
  let n;
  switch (e.code) {
    case b.invalid_type:
      e.received === x.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case b.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, $.jsonStringifyReplacer)}`;
      break;
    case b.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${$.joinValues(e.keys, ", ")}`;
      break;
    case b.invalid_union:
      n = "Invalid input";
      break;
    case b.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${$.joinValues(e.options)}`;
      break;
    case b.invalid_enum_value:
      n = `Invalid enum value. Expected ${$.joinValues(e.options)}, received '${e.received}'`;
      break;
    case b.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case b.invalid_return_type:
      n = "Invalid function return type";
      break;
    case b.invalid_date:
      n = "Invalid date";
      break;
    case b.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : $.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case b.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case b.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case b.custom:
      n = "Invalid input";
      break;
    case b.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case b.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case b.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, $.assertNever(e);
  }
  return { message: n };
};
let VI = Uf;
function jI() {
  return VI;
}
const JI = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: a } = e, i = [...n, ...a.path || []], o = {
    ...a,
    path: i
  };
  let s = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    s = u(o, { data: t, defaultError: s }).message;
  return {
    ...a,
    path: i,
    message: a.message || s
  };
};
function w(e, t) {
  const n = JI({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      jI(),
      Uf
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Je {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const a of n) {
      if (a.status === "aborted")
        return U;
      a.status === "dirty" && t.dirty(), r.push(a.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const a of n)
      r.push({
        key: await a.key,
        value: await a.value
      });
    return Je.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const a of n) {
      const { key: i, value: o } = a;
      if (i.status === "aborted" || o.status === "aborted")
        return U;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), (typeof o.value < "u" || a.alwaysSet) && (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const U = Object.freeze({
  status: "aborted"
}), LI = (e) => ({ status: "dirty", value: e }), et = (e) => ({ status: "valid", value: e }), fd = (e) => e.status === "aborted", md = (e) => e.status === "dirty", Lo = (e) => e.status === "valid", zo = (e) => typeof Promise < "u" && e instanceof Promise;
var P;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(P || (P = {}));
class $t {
  constructor(t, n, r, a) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const gd = (e, t) => {
  if (Lo(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Dn(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function q(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: a } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: r ?? o.defaultError } : { message: n ?? o.defaultError }, description: a };
}
let H = class {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return An(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: An(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Je(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: An(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (zo(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const a = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: An(t)
    }, i = this._parseSync({ data: t, path: a.path, parent: a });
    return gd(a, i);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: An(t)
    }, a = this._parse({ data: t, path: r.path, parent: r }), i = await (zo(a) ? a : Promise.resolve(a));
    return gd(r, i);
  }
  refine(t, n) {
    const r = (a) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(a) : n;
    return this._refinement((a, i) => {
      const o = t(a), s = () => i.addIssue({
        code: b.custom,
        ...r(a)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (s(), !1)) : o ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, a) => t(r) ? !0 : (a.addIssue(typeof n == "function" ? n(r, a) : n), !1));
  }
  _refinement(t) {
    return new Pt({
      schema: this,
      typeName: V.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Ht.create(this, this._def);
  }
  nullable() {
    return mr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return fr.create(this, this._def);
  }
  promise() {
    return ii.create(this, this._def);
  }
  or(t) {
    return ei.create([this, t], this._def);
  }
  and(t) {
    return ti.create(this, t, this._def);
  }
  transform(t) {
    return new Pt({
      ...q(this._def),
      schema: this,
      typeName: V.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new oi({
      ...q(this._def),
      innerType: this,
      defaultValue: n,
      typeName: V.ZodDefault
    });
  }
  brand() {
    return new XI({
      typeName: V.ZodBranded,
      type: this,
      ...q(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Bo({
      ...q(this._def),
      innerType: this,
      catchValue: n,
      typeName: V.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Ms.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
const zI = /^c[^\s-]{8,}$/i, UI = /^[a-z][a-z0-9]*$/, ZI = /[0-9A-HJKMNP-TV-Z]{26}/, qI = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, BI = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, GI = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, WI = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, KI = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, HI = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function YI(e, t) {
  return !!((t === "v4" || !t) && WI.test(e) || (t === "v6" || !t) && KI.test(e));
}
let Uo = class Lr extends H {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((a) => t.test(a), {
      validation: n,
      code: b.invalid_string,
      ...P.errToObj(r)
    }), this.nonempty = (t) => this.min(1, P.errToObj(t)), this.trim = () => new Lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Lr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== x.string) {
      const a = this._getOrReturnCtx(t);
      return w(
        a,
        {
          code: b.invalid_type,
          expected: x.string,
          received: a.parsedType
        }
        //
      ), U;
    }
    const n = new Je();
    let r;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = t.data.length > a.value, o = t.data.length < a.value;
        (i || o) && (r = this._getOrReturnCtx(t, r), i ? w(r, {
          code: b.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && w(r, {
          code: b.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        BI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "email",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        GI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "emoji",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        qI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "uuid",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        zI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "cuid",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        UI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "cuid2",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        ZI.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "ulid",
          code: b.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), w(r, {
            validation: "url",
            code: b.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "regex",
          code: b.invalid_string,
          message: a.message
        }), n.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), n.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), n.dirty()) : a.kind === "datetime" ? HI(a).test(t.data) || (r = this._getOrReturnCtx(t, r), w(r, {
          code: b.invalid_string,
          validation: "datetime",
          message: a.message
        }), n.dirty()) : a.kind === "ip" ? YI(t.data, a.version) || (r = this._getOrReturnCtx(t, r), w(r, {
          validation: "ip",
          code: b.invalid_string,
          message: a.message
        }), n.dirty()) : $.assertNever(a);
    return { status: n.value, value: t.data };
  }
  _addCheck(t) {
    return new Lr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...P.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...P.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...P.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...P.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...P.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...P.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...P.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...P.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ...P.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...P.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...P.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...P.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...P.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...P.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...P.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
};
Uo.create = (e) => {
  var t;
  return new Uo({
    checks: [],
    typeName: V.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...q(e)
  });
};
function QI(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, a = n > r ? n : r, i = parseInt(e.toFixed(a).replace(".", "")), o = parseInt(t.toFixed(a).replace(".", ""));
  return i % o / Math.pow(10, a);
}
class Yr extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== x.number) {
      const a = this._getOrReturnCtx(t);
      return w(a, {
        code: b.invalid_type,
        expected: x.number,
        received: a.parsedType
      }), U;
    }
    let n;
    const r = new Je();
    for (const a of this._def.checks)
      a.kind === "int" ? $.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), r.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), r.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), r.dirty()) : a.kind === "multipleOf" ? QI(t.data, a.value) !== 0 && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), r.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.not_finite,
        message: a.message
      }), r.dirty()) : $.assertNever(a);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, a) {
    return new Yr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Yr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: P.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: P.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: P.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: P.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && $.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Yr.create = (e) => new Yr({
  checks: [],
  typeName: V.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...q(e)
});
class Qr extends H {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== x.bigint) {
      const a = this._getOrReturnCtx(t);
      return w(a, {
        code: b.invalid_type,
        expected: x.bigint,
        received: a.parsedType
      }), U;
    }
    let n;
    const r = new Je();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), r.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), r.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), w(n, {
        code: b.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), r.dirty()) : $.assertNever(a);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, P.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, P.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, P.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, P.toString(n));
  }
  setLimit(t, n, r, a) {
    return new Qr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: P.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Qr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: P.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: P.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: P.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Qr.create = (e) => {
  var t;
  return new Qr({
    checks: [],
    typeName: V.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...q(e)
  });
};
class Zo extends H {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== x.boolean) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.boolean,
        received: n.parsedType
      }), U;
    }
    return et(t.data);
  }
}
Zo.create = (e) => new Zo({
  typeName: V.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...q(e)
});
class Qa extends H {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== x.date) {
      const a = this._getOrReturnCtx(t);
      return w(a, {
        code: b.invalid_type,
        expected: x.date,
        received: a.parsedType
      }), U;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return w(a, {
        code: b.invalid_date
      }), U;
    }
    const n = new Je();
    let r;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (r = this._getOrReturnCtx(t, r), w(r, {
        code: b.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (r = this._getOrReturnCtx(t, r), w(r, {
        code: b.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : $.assertNever(a);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Qa({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: P.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: P.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Qa.create = (e) => new Qa({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: V.ZodDate,
  ...q(e)
});
class yd extends H {
  _parse(t) {
    if (this._getType(t) !== x.symbol) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.symbol,
        received: n.parsedType
      }), U;
    }
    return et(t.data);
  }
}
yd.create = (e) => new yd({
  typeName: V.ZodSymbol,
  ...q(e)
});
class Xa extends H {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.undefined,
        received: n.parsedType
      }), U;
    }
    return et(t.data);
  }
}
Xa.create = (e) => new Xa({
  typeName: V.ZodUndefined,
  ...q(e)
});
class $a extends H {
  _parse(t) {
    if (this._getType(t) !== x.null) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.null,
        received: n.parsedType
      }), U;
    }
    return et(t.data);
  }
}
$a.create = (e) => new $a({
  typeName: V.ZodNull,
  ...q(e)
});
class hd extends H {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
hd.create = (e) => new hd({
  typeName: V.ZodAny,
  ...q(e)
});
class vd extends H {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return et(t.data);
  }
}
vd.create = (e) => new vd({
  typeName: V.ZodUnknown,
  ...q(e)
});
let en = class extends H {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return w(n, {
      code: b.invalid_type,
      expected: x.never,
      received: n.parsedType
    }), U;
  }
};
en.create = (e) => new en({
  typeName: V.ZodNever,
  ...q(e)
});
class _d extends H {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.void,
        received: n.parsedType
      }), U;
    }
    return et(t.data);
  }
}
_d.create = (e) => new _d({
  typeName: V.ZodVoid,
  ...q(e)
});
let fr = class Fa extends H {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), a = this._def;
    if (n.parsedType !== x.array)
      return w(n, {
        code: b.invalid_type,
        expected: x.array,
        received: n.parsedType
      }), U;
    if (a.exactLength !== null) {
      const o = n.data.length > a.exactLength.value, s = n.data.length < a.exactLength.value;
      (o || s) && (w(n, {
        code: o ? b.too_big : b.too_small,
        minimum: s ? a.exactLength.value : void 0,
        maximum: o ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), r.dirty());
    }
    if (a.minLength !== null && n.data.length < a.minLength.value && (w(n, {
      code: b.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), r.dirty()), a.maxLength !== null && n.data.length > a.maxLength.value && (w(n, {
      code: b.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, s) => a.type._parseAsync(new $t(n, o, n.path, s)))).then((o) => Je.mergeArray(r, o));
    const i = [...n.data].map((o, s) => a.type._parseSync(new $t(n, o, n.path, s)));
    return Je.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Fa({
      ...this._def,
      minLength: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new Fa({
      ...this._def,
      maxLength: { value: t, message: P.toString(n) }
    });
  }
  length(t, n) {
    return new Fa({
      ...this._def,
      exactLength: { value: t, message: P.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
fr.create = (e, t) => new fr({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: V.ZodArray,
  ...q(t)
});
function $n(e) {
  if (e instanceof de) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Ht.create($n(r));
    }
    return new de({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof fr ? new fr({
      ...e._def,
      type: $n(e.element)
    }) : e instanceof Ht ? Ht.create($n(e.unwrap())) : e instanceof mr ? mr.create($n(e.unwrap())) : e instanceof Pn ? Pn.create(e.items.map((t) => $n(t))) : e;
}
class de extends H {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = $.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== x.object) {
      const l = this._getOrReturnCtx(t);
      return w(l, {
        code: b.invalid_type,
        expected: x.object,
        received: l.parsedType
      }), U;
    }
    const { status: n, ctx: r } = this._processInputParams(t), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof en && this._def.unknownKeys === "strip"))
      for (const l in r.data)
        i.includes(l) || o.push(l);
    const s = [];
    for (const l of i) {
      const u = a[l], p = r.data[l];
      s.push({
        key: { status: "valid", value: l },
        value: u._parse(new $t(r, p, r.path, l)),
        alwaysSet: l in r.data
      });
    }
    if (this._def.catchall instanceof en) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of o)
          s.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] }
          });
      else if (l === "strict")
        o.length > 0 && (w(r, {
          code: b.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of o) {
        const p = r.data[u];
        s.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new $t(r, p, r.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of s) {
        const p = await u.key;
        l.push({
          key: p,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Je.mergeObjectSync(n, l)) : Je.mergeObjectSync(n, s);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return P.errToObj, new de({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var a, i, o, s;
          const l = (o = (i = (a = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(a, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (s = P.errToObj(t).message) !== null && s !== void 0 ? s : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new de({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new de({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new de({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new de({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: V.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new de({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return $.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return $.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $n(this);
  }
  partial(t) {
    const n = {};
    return $.objectKeys(this.shape).forEach((r) => {
      const a = this.shape[r];
      t && !t[r] ? n[r] = a : n[r] = a.optional();
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return $.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof Ht; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new de({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Zf($.objectKeys(this.shape));
  }
}
de.create = (e, t) => new de({
  shape: () => e,
  unknownKeys: "strip",
  catchall: en.create(),
  typeName: V.ZodObject,
  ...q(t)
});
de.strictCreate = (e, t) => new de({
  shape: () => e,
  unknownKeys: "strict",
  catchall: en.create(),
  typeName: V.ZodObject,
  ...q(t)
});
de.lazycreate = (e, t) => new de({
  shape: e,
  unknownKeys: "strip",
  catchall: en.create(),
  typeName: V.ZodObject,
  ...q(t)
});
class ei extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function a(i) {
      for (const s of i)
        if (s.result.status === "valid")
          return s.result;
      for (const s of i)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const o = i.map((s) => new Dn(s.ctx.common.issues));
      return w(n, {
        code: b.invalid_union,
        unionErrors: o
      }), U;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const o = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: o
          }),
          ctx: o
        };
      })).then(a);
    {
      let i;
      const o = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, p = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !i && (i = { result: p, ctx: u }), u.common.issues.length && o.push(u.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = o.map((l) => new Dn(l));
      return w(n, {
        code: b.invalid_union,
        unionErrors: s
      }), U;
    }
  }
  get options() {
    return this._def.options;
  }
}
ei.create = (e, t) => new ei({
  options: e,
  typeName: V.ZodUnion,
  ...q(t)
});
const Va = (e) => e instanceof ni ? Va(e.schema) : e instanceof Pt ? Va(e.innerType()) : e instanceof ri ? [e.value] : e instanceof Rn ? e.options : e instanceof ai ? Object.keys(e.enum) : e instanceof oi ? Va(e._def.innerType) : e instanceof Xa ? [void 0] : e instanceof $a ? [null] : null;
class ks extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.object)
      return w(n, {
        code: b.invalid_type,
        expected: x.object,
        received: n.parsedType
      }), U;
    const r = this.discriminator, a = n.data[r], i = this.optionsMap.get(a);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (w(n, {
      code: b.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), U);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const a = /* @__PURE__ */ new Map();
    for (const i of n) {
      const o = Va(i.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of o) {
        if (a.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        a.set(s, i);
      }
    }
    return new ks({
      typeName: V.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: a,
      ...q(r)
    });
  }
}
function qo(e, t) {
  const n = An(e), r = An(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === x.object && r === x.object) {
    const a = $.objectKeys(t), i = $.objectKeys(e).filter((s) => a.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of i) {
      const l = qo(e[s], t[s]);
      if (!l.valid)
        return { valid: !1 };
      o[s] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === x.array && r === x.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], s = t[i], l = qo(o, s);
      if (!l.valid)
        return { valid: !1 };
      a.push(l.data);
    }
    return { valid: !0, data: a };
  } else
    return n === x.date && r === x.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ti extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), a = (i, o) => {
      if (fd(i) || fd(o))
        return U;
      const s = qo(i.value, o.value);
      return s.valid ? ((md(i) || md(o)) && n.dirty(), { status: n.value, value: s.data }) : (w(r, {
        code: b.invalid_intersection_types
      }), U);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([i, o]) => a(i, o)) : a(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
ti.create = (e, t, n) => new ti({
  left: e,
  right: t,
  typeName: V.ZodIntersection,
  ...q(n)
});
class Pn extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.array)
      return w(r, {
        code: b.invalid_type,
        expected: x.array,
        received: r.parsedType
      }), U;
    if (r.data.length < this._def.items.length)
      return w(r, {
        code: b.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), U;
    !this._def.rest && r.data.length > this._def.items.length && (w(r, {
      code: b.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const s = this._def.items[o] || this._def.rest;
      return s ? s._parse(new $t(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => Je.mergeArray(n, i)) : Je.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Pn({
      ...this._def,
      rest: t
    });
  }
}
Pn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Pn({
    items: e,
    typeName: V.ZodTuple,
    rest: null,
    ...q(t)
  });
};
class bd extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.map)
      return w(r, {
        code: b.invalid_type,
        expected: x.map,
        received: r.parsedType
      }), U;
    const a = this._def.keyType, i = this._def.valueType, o = [...r.data.entries()].map(([s, l], u) => ({
      key: a._parse(new $t(r, s, r.path, [u, "key"])),
      value: i._parse(new $t(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key, p = await l.value;
          if (u.status === "aborted" || p.status === "aborted")
            return U;
          (u.status === "dirty" || p.status === "dirty") && n.dirty(), s.set(u.value, p.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const l of o) {
        const u = l.key, p = l.value;
        if (u.status === "aborted" || p.status === "aborted")
          return U;
        (u.status === "dirty" || p.status === "dirty") && n.dirty(), s.set(u.value, p.value);
      }
      return { status: n.value, value: s };
    }
  }
}
bd.create = (e, t, n) => new bd({
  valueType: t,
  keyType: e,
  typeName: V.ZodMap,
  ...q(n)
});
class Xr extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.set)
      return w(r, {
        code: b.invalid_type,
        expected: x.set,
        received: r.parsedType
      }), U;
    const a = this._def;
    a.minSize !== null && r.data.size < a.minSize.value && (w(r, {
      code: b.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), n.dirty()), a.maxSize !== null && r.data.size > a.maxSize.value && (w(r, {
      code: b.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = /* @__PURE__ */ new Set();
      for (const p of l) {
        if (p.status === "aborted")
          return U;
        p.status === "dirty" && n.dirty(), u.add(p.value);
      }
      return { status: n.value, value: u };
    }
    const s = [...r.data.values()].map((l, u) => i._parse(new $t(r, l, r.path, u)));
    return r.common.async ? Promise.all(s).then((l) => o(l)) : o(s);
  }
  min(t, n) {
    return new Xr({
      ...this._def,
      minSize: { value: t, message: P.toString(n) }
    });
  }
  max(t, n) {
    return new Xr({
      ...this._def,
      maxSize: { value: t, message: P.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Xr.create = (e, t) => new Xr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: V.ZodSet,
  ...q(t)
});
class ni extends H {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ni.create = (e, t) => new ni({
  getter: e,
  typeName: V.ZodLazy,
  ...q(t)
});
class ri extends H {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        received: n.data,
        code: b.invalid_literal,
        expected: this._def.value
      }), U;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ri.create = (e, t) => new ri({
  value: e,
  typeName: V.ZodLiteral,
  ...q(t)
});
function Zf(e, t) {
  return new Rn({
    values: e,
    typeName: V.ZodEnum,
    ...q(t)
  });
}
class Rn extends H {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return w(n, {
        expected: $.joinValues(r),
        received: n.parsedType,
        code: b.invalid_type
      }), U;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return w(n, {
        received: n.data,
        code: b.invalid_enum_value,
        options: r
      }), U;
    }
    return et(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return Rn.create(t);
  }
  exclude(t) {
    return Rn.create(this.options.filter((n) => !t.includes(n)));
  }
}
Rn.create = Zf;
class ai extends H {
  _parse(t) {
    const n = $.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== x.string && r.parsedType !== x.number) {
      const a = $.objectValues(n);
      return w(r, {
        expected: $.joinValues(a),
        received: r.parsedType,
        code: b.invalid_type
      }), U;
    }
    if (n.indexOf(t.data) === -1) {
      const a = $.objectValues(n);
      return w(r, {
        received: r.data,
        code: b.invalid_enum_value,
        options: a
      }), U;
    }
    return et(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ai.create = (e, t) => new ai({
  values: e,
  typeName: V.ZodNativeEnum,
  ...q(t)
});
class ii extends H {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== x.promise && n.common.async === !1)
      return w(n, {
        code: b.invalid_type,
        expected: x.promise,
        received: n.parsedType
      }), U;
    const r = n.parsedType === x.promise ? n.data : Promise.resolve(n.data);
    return et(r.then((a) => this._def.type.parseAsync(a, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ii.create = (e, t) => new ii({
  type: e,
  typeName: V.ZodPromise,
  ...q(t)
});
let Pt = class extends H {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === V.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), a = this._def.effect || null;
    if (a.type === "preprocess") {
      const o = a.transform(r.data);
      return r.common.async ? Promise.resolve(o).then((s) => this._def.schema._parseAsync({
        data: s,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: o,
        path: r.path,
        parent: r
      });
    }
    const i = {
      addIssue: (o) => {
        w(r, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), a.type === "refinement") {
      const o = (s) => {
        const l = a.refinement(s, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? U : (s.status === "dirty" && n.dirty(), o(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? U : (s.status === "dirty" && n.dirty(), o(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (a.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Lo(o))
          return o;
        const s = a.transform(o.value, i);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => Lo(o) ? Promise.resolve(a.transform(o.value, i)).then((s) => ({ status: n.value, value: s })) : o);
    $.assertNever(a);
  }
};
Pt.create = (e, t, n) => new Pt({
  schema: e,
  typeName: V.ZodEffects,
  effect: t,
  ...q(n)
});
Pt.createWithPreprocess = (e, t, n) => new Pt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: V.ZodEffects,
  ...q(n)
});
let Ht = class extends H {
  _parse(t) {
    return this._getType(t) === x.undefined ? et(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Ht.create = (e, t) => new Ht({
  innerType: e,
  typeName: V.ZodOptional,
  ...q(t)
});
class mr extends H {
  _parse(t) {
    return this._getType(t) === x.null ? et(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mr.create = (e, t) => new mr({
  innerType: e,
  typeName: V.ZodNullable,
  ...q(t)
});
class oi extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === x.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
oi.create = (e, t) => new oi({
  innerType: e,
  typeName: V.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...q(t)
});
class Bo extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return zo(a) ? a.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Dn(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Dn(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Bo.create = (e, t) => new Bo({
  innerType: e,
  typeName: V.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...q(t)
});
class Sd extends H {
  _parse(t) {
    if (this._getType(t) !== x.nan) {
      const n = this._getOrReturnCtx(t);
      return w(n, {
        code: b.invalid_type,
        expected: x.nan,
        received: n.parsedType
      }), U;
    }
    return { status: "valid", value: t.data };
  }
}
Sd.create = (e) => new Sd({
  typeName: V.ZodNaN,
  ...q(e)
});
class XI extends H {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ms extends H {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? U : a.status === "dirty" ? (n.dirty(), LI(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return a.status === "aborted" ? U : a.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Ms({
      in: t,
      out: n,
      typeName: V.ZodPipeline
    });
  }
}
de.lazycreate;
var V;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(V || (V = {}));
const ut = Uo.create, Ke = Zo.create;
Xa.create;
$a.create;
en.create;
const Zr = fr.create, we = de.create;
de.strictCreate;
ei.create;
const qf = ks.create;
ti.create;
Pn.create;
ni.create;
const la = ri.create;
Rn.create;
ai.create;
ii.create;
Pt.create;
Ht.create;
mr.create;
Pt.createWithPreprocess;
const Tn = {
  persona: "persona",
  account: "account"
}, Bf = we({
  challenge: ut(),
  proof: br,
  address: ut(),
  type: la(Tn.persona)
}), Gf = we({
  challenge: ut(),
  proof: br,
  address: ut(),
  type: la(Tn.account)
}), Wf = qf("type", [
  Bf,
  Gf
]), Kf = we({
  entry: la("fullName"),
  fields: Ss
}), Hf = we({
  entry: la("emailAddresses"),
  fields: Zr(ut())
}), Yf = we({
  entry: la("phoneNumbers"),
  fields: Zr(ut())
}), Qf = qf("entry", [
  Kf,
  Hf,
  Yf
]), Xf = we({
  accounts: Zr(bs),
  personaData: Zr(Qf),
  persona: Sr.optional(),
  proofs: Zr(Wf)
}), $f = we({
  persona: we({ proof: Ke() }).optional(),
  ongoingAccounts: we({
    numberOfAccounts: ct.optional(),
    proof: Ke()
  }).optional(),
  ongoingPersonaData: Hr.optional()
}), em = we({
  loggedInTimestamp: ut(),
  walletData: Xf,
  sharedData: $f
}), si = {
  accounts: [],
  personaData: [],
  proofs: [],
  persona: void 0
}, $I = () => ({
  walletData: new se(si),
  sharedData: new se({}),
  loggedInTimestamp: new se(""),
  initialized: new se(!1)
});
function eo(e, t, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(o) {
      o(i);
    });
  }
  return new (n || (n = Promise))(function(i, o) {
    function s(p) {
      try {
        u(r.next(p));
      } catch (g) {
        o(g);
      }
    }
    function l(p) {
      try {
        u(r.throw(p));
      } catch (g) {
        o(g);
      }
    }
    function u(p) {
      p.done ? i(p.value) : a(p.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function to(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(p) {
      return l([u, p]);
    };
  }
  function l(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done)
          return i;
        switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (p) {
        u = [6, p], a = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function li(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function kn(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ew = {
  withStackTrace: !1
}, tm = function(e, t, n) {
  n === void 0 && (n = ew);
  var r = t.isOk() ? { type: "Ok", value: t.value } : { type: "Err", value: t.error }, a = n.withStackTrace ? new Error().stack : void 0;
  return {
    data: r,
    message: e,
    stack: a
  };
}, me = (
  /** @class */
  function() {
    function e(t) {
      this._promise = t;
    }
    return e.fromSafePromise = function(t) {
      var n = t.then(function(r) {
        return new qt(r);
      });
      return new e(n);
    }, e.fromPromise = function(t, n) {
      var r = t.then(function(a) {
        return new qt(a);
      }).catch(function(a) {
        return new In(n(a));
      });
      return new e(r);
    }, e.combine = function(t) {
      return nw(t);
    }, e.combineWithAllErrors = function(t) {
      return rw(t);
    }, e.prototype.map = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return eo(n, void 0, void 0, function() {
          var a;
          return to(this, function(i) {
            switch (i.label) {
              case 0:
                return r.isErr() ? [2, new In(r.error)] : (a = qt.bind, [4, t(r.value)]);
              case 1:
                return [2, new (a.apply(qt, [void 0, i.sent()]))()];
            }
          });
        });
      }));
    }, e.prototype.mapErr = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return eo(n, void 0, void 0, function() {
          var a;
          return to(this, function(i) {
            switch (i.label) {
              case 0:
                return r.isOk() ? [2, new qt(r.value)] : (a = In.bind, [4, t(r.error)]);
              case 1:
                return [2, new (a.apply(In, [void 0, i.sent()]))()];
            }
          });
        });
      }));
    }, e.prototype.andThen = function(t) {
      return new e(this._promise.then(function(n) {
        if (n.isErr())
          return new In(n.error);
        var r = t(n.value);
        return r instanceof e ? r._promise : r;
      }));
    }, e.prototype.orElse = function(t) {
      var n = this;
      return new e(this._promise.then(function(r) {
        return eo(n, void 0, void 0, function() {
          return to(this, function(a) {
            return r.isErr() ? [2, t(r.error)] : [2, new qt(r.value)];
          });
        });
      }));
    }, e.prototype.match = function(t, n) {
      return this._promise.then(function(r) {
        return r.match(t, n);
      });
    }, e.prototype.unwrapOr = function(t) {
      return this._promise.then(function(n) {
        return n.unwrapOr(t);
      });
    }, e.prototype.then = function(t, n) {
      return this._promise.then(t, n);
    }, e;
  }()
), Od = function(e) {
  return new me(Promise.resolve(new qt(e)));
}, Nd = function(e) {
  return new me(Promise.resolve(new In(e)));
};
me.fromPromise;
me.fromSafePromise;
var tw = function(e) {
  return function(t) {
    return kn(kn([], li(t), !1), [e], !1);
  };
}, nm = function(e) {
  return e.reduce(function(t, n) {
    return t.isOk() ? n.isErr() ? dt(n.error) : t.map(tw(n.value)) : t;
  }, Ae([]));
}, nw = function(e) {
  return me.fromSafePromise(Promise.all(e)).andThen(nm);
}, rm = function(e) {
  return e.reduce(function(t, n) {
    return n.isErr() ? t.isErr() ? dt(kn(kn([], li(t.error), !1), [n.error], !1)) : dt([n.error]) : t.isErr() ? t : Ae(kn(kn([], li(t.value), !1), [n.value], !1));
  }, Ae([]));
}, rw = function(e) {
  return me.fromSafePromise(Promise.all(e)).andThen(rm);
}, Go;
(function(e) {
  function t(a, i) {
    return function() {
      for (var o = [], s = 0; s < arguments.length; s++)
        o[s] = arguments[s];
      try {
        var l = a.apply(void 0, kn([], li(o), !1));
        return Ae(l);
      } catch (u) {
        return dt(i ? i(u) : u);
      }
    };
  }
  e.fromThrowable = t;
  function n(a) {
    return nm(a);
  }
  e.combine = n;
  function r(a) {
    return rm(a);
  }
  e.combineWithAllErrors = r;
})(Go || (Go = {}));
var Ae = function(e) {
  return new qt(e);
}, dt = function(e) {
  return new In(e);
}, qt = (
  /** @class */
  function() {
    function e(t) {
      this.value = t;
    }
    return e.prototype.isOk = function() {
      return !0;
    }, e.prototype.isErr = function() {
      return !this.isOk();
    }, e.prototype.map = function(t) {
      return Ae(t(this.value));
    }, e.prototype.mapErr = function(t) {
      return Ae(this.value);
    }, e.prototype.andThen = function(t) {
      return t(this.value);
    }, e.prototype.orElse = function(t) {
      return Ae(this.value);
    }, e.prototype.asyncAndThen = function(t) {
      return t(this.value);
    }, e.prototype.asyncMap = function(t) {
      return me.fromSafePromise(t(this.value));
    }, e.prototype.unwrapOr = function(t) {
      return this.value;
    }, e.prototype.match = function(t, n) {
      return t(this.value);
    }, e.prototype._unsafeUnwrap = function(t) {
      return this.value;
    }, e.prototype._unsafeUnwrapErr = function(t) {
      throw tm("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }, e;
  }()
), In = (
  /** @class */
  function() {
    function e(t) {
      this.error = t;
    }
    return e.prototype.isOk = function() {
      return !1;
    }, e.prototype.isErr = function() {
      return !this.isOk();
    }, e.prototype.map = function(t) {
      return dt(this.error);
    }, e.prototype.mapErr = function(t) {
      return dt(t(this.error));
    }, e.prototype.andThen = function(t) {
      return dt(this.error);
    }, e.prototype.orElse = function(t) {
      return t(this.error);
    }, e.prototype.asyncAndThen = function(t) {
      return Nd(this.error);
    }, e.prototype.asyncMap = function(t) {
      return Nd(this.error);
    }, e.prototype.unwrapOr = function(t) {
      return t;
    }, e.prototype.match = function(t, n) {
      return n(this.error);
    }, e.prototype._unsafeUnwrap = function(t) {
      throw tm("Called `_unsafeUnwrap` on an Err", this, t);
    }, e.prototype._unsafeUnwrapErr = function(t) {
      return this.error;
    }, e;
  }()
);
Go.fromThrowable;
var am = Symbol.for("immer-nothing"), Ad = Symbol.for("immer-draftable"), Le = Symbol.for("immer-state");
function lt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var gr = Object.getPrototypeOf;
function yr(e) {
  return !!e && !!e[Le];
}
function Fn(e) {
  var t;
  return e ? im(e) || Array.isArray(e) || !!e[Ad] || !!((t = e.constructor) != null && t[Ad]) || Oi(e) || Ni(e) : !1;
}
var aw = Object.prototype.constructor.toString();
function im(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = gr(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === aw;
}
function $r(e, t) {
  Si(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Si(e) {
  const t = e[Le];
  return t ? t.type_ : Array.isArray(e) ? 1 : Oi(e) ? 2 : Ni(e) ? 3 : 0;
}
function Wo(e, t) {
  return Si(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function om(e, t, n) {
  const r = Si(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function iw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Oi(e) {
  return e instanceof Map;
}
function Ni(e) {
  return e instanceof Set;
}
function bn(e) {
  return e.copy_ || e.base_;
}
function Ko(e, t) {
  if (Oi(e))
    return new Map(e);
  if (Ni(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && im(e))
    return gr(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Le];
  let r = Reflect.ownKeys(n);
  for (let a = 0; a < r.length; a++) {
    const i = r[a], o = n[i];
    o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (n[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: o.enumerable,
      value: e[i]
    });
  }
  return Object.create(gr(e), n);
}
function Es(e, t = !1) {
  return Ai(e) || yr(e) || !Fn(e) || (Si(e) > 1 && (e.set = e.add = e.clear = e.delete = ow), Object.freeze(e), t && $r(e, (n, r) => Es(r, !0))), e;
}
function ow() {
  lt(2);
}
function Ai(e) {
  return Object.isFrozen(e);
}
var sw = {};
function Vn(e) {
  const t = sw[e];
  return t || lt(0, e), t;
}
var ea;
function sm() {
  return ea;
}
function lw(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Id(e, t) {
  t && (Vn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ho(e) {
  Yo(e), e.drafts_.forEach(uw), e.drafts_ = null;
}
function Yo(e) {
  e === ea && (ea = e.parent_);
}
function wd(e) {
  return ea = lw(ea, e);
}
function uw(e) {
  const t = e[Le];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function xd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Le].modified_ && (Ho(t), lt(4)), Fn(e) && (e = ui(t, e), t.parent_ || ci(t, e)), t.patches_ && Vn("Patches").generateReplacementPatches_(
    n[Le].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ui(t, n, []), Ho(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== am ? e : void 0;
}
function ui(e, t, n) {
  if (Ai(t))
    return t;
  const r = t[Le];
  if (!r)
    return $r(
      t,
      (a, i) => Td(e, r, t, a, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return ci(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const a = r.copy_;
    let i = a, o = !1;
    r.type_ === 3 && (i = new Set(a), a.clear(), o = !0), $r(
      i,
      (s, l) => Td(e, r, a, s, l, n, o)
    ), ci(e, a, !1), n && e.patches_ && Vn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Td(e, t, n, r, a, i, o) {
  if (yr(a)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Wo(t.assigned_, r) ? i.concat(r) : void 0, l = ui(e, a, s);
    if (om(n, r, l), yr(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    o && n.add(a);
  if (Fn(a) && !Ai(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ui(e, a), (!t || !t.scope_.parent_) && ci(e, a);
  }
}
function ci(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Es(t, n);
}
function cw(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : sm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = r, i = Cs;
  n && (a = [r], i = ta);
  const { revoke: o, proxy: s } = Proxy.revocable(a, i);
  return r.draft_ = s, r.revoke_ = o, s;
}
var Cs = {
  get(e, t) {
    if (t === Le)
      return e;
    const n = bn(e);
    if (!Wo(n, t))
      return dw(e, n, t);
    const r = n[t];
    return e.finalized_ || !Fn(r) ? r : r === no(e.base_, t) ? (ro(e), e.copy_[t] = Xo(r, e)) : r;
  },
  has(e, t) {
    return t in bn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(bn(e));
  },
  set(e, t, n) {
    const r = lm(bn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const a = no(bn(e), t), i = a == null ? void 0 : a[Le];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (iw(n, a) && (n !== void 0 || Wo(e.base_, t)))
        return !0;
      ro(e), Qo(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return no(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ro(e), Qo(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = bn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    lt(11);
  },
  getPrototypeOf(e) {
    return gr(e.base_);
  },
  setPrototypeOf() {
    lt(12);
  }
}, ta = {};
$r(Cs, (e, t) => {
  ta[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ta.deleteProperty = function(e, t) {
  return ta.set.call(this, e, t, void 0);
};
ta.set = function(e, t, n) {
  return Cs.set.call(this, e[0], t, n, e[0]);
};
function no(e, t) {
  const n = e[Le];
  return (n ? bn(n) : e)[t];
}
function dw(e, t, n) {
  var r;
  const a = lm(t, n);
  return a ? "value" in a ? a.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (r = a.get) == null ? void 0 : r.call(e.draft_)
  ) : void 0;
}
function lm(e, t) {
  if (!(t in e))
    return;
  let n = gr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = gr(n);
  }
}
function Qo(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Qo(e.parent_));
}
function ro(e) {
  e.copy_ || (e.copy_ = Ko(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var pw = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const o = this;
        return function(s = i, ...l) {
          return o.produce(s, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && lt(6), r !== void 0 && typeof r != "function" && lt(7);
      let a;
      if (Fn(t)) {
        const i = wd(this), o = Xo(t, void 0);
        let s = !0;
        try {
          a = n(o), s = !1;
        } finally {
          s ? Ho(i) : Yo(i);
        }
        return Id(i, r), xd(a, i);
      } else if (!t || typeof t != "object") {
        if (a = n(t), a === void 0 && (a = t), a === am && (a = void 0), this.autoFreeze_ && Es(a, !0), r) {
          const i = [], o = [];
          Vn("Patches").generateReplacementPatches_(t, a, i, o), r(i, o);
        }
        return a;
      } else
        lt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...o) => this.produceWithPatches(i, (s) => t(s, ...o));
      let r, a;
      return [this.produce(t, n, (i, o) => {
        r = i, a = o;
      }), r, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Fn(e) || lt(8), yr(e) && (e = fw(e));
    const t = wd(this), n = Xo(e, void 0);
    return n[Le].isManual_ = !0, Yo(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Le];
    (!n || !n.isManual_) && lt(9);
    const { scope_: r } = n;
    return Id(r, t), xd(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const a = t[n];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Vn("Patches").applyPatches_;
    return yr(e) ? r(e, t) : this.produce(
      e,
      (a) => r(a, t)
    );
  }
};
function Xo(e, t) {
  const n = Oi(e) ? Vn("MapSet").proxyMap_(e, t) : Ni(e) ? Vn("MapSet").proxySet_(e, t) : cw(e, t);
  return (t ? t.scope_ : sm()).drafts_.push(n), n;
}
function fw(e) {
  return yr(e) || lt(10, e), um(e);
}
function um(e) {
  if (!Fn(e) || Ai(e))
    return e;
  const t = e[Le];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ko(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ko(e, !0);
  return $r(n, (r, a) => {
    om(n, r, um(a));
  }), t && (t.finalized_ = !1), n;
}
var ze = new pw(), le = ze.produce;
ze.produceWithPatches.bind(
  ze
);
ze.setAutoFreeze.bind(ze);
ze.setUseStrictShallowCopy.bind(ze);
ze.applyPatches.bind(ze);
ze.createDraft.bind(ze);
ze.finishDraft.bind(ze);
var Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = { exports: {} };
di.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", a = 1, i = 2, o = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", p = "[object Boolean]", g = "[object Date]", m = "[object Error]", h = "[object Function]", I = "[object GeneratorFunction]", v = "[object Map]", E = "[object Number]", R = "[object Null]", F = "[object Object]", _ = "[object Promise]", C = "[object Proxy]", L = "[object RegExp]", M = "[object Set]", Y = "[object String]", z = "[object Symbol]", rt = "[object Undefined]", un = "[object WeakMap]", Kn = "[object ArrayBuffer]", Lt = "[object DataView]", N = "[object Float32Array]", fe = "[object Float64Array]", Re = "[object Int8Array]", It = "[object Int16Array]", Hn = "[object Int32Array]", Er = "[object Uint8Array]", Di = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", IS = "[object Uint32Array]", wS = /[\\^$.*+?()[\]{}|]/g, xS = /^\[object .+?Constructor\]$/, TS = /^(?:0|[1-9]\d*)$/, ae = {};
  ae[N] = ae[fe] = ae[Re] = ae[It] = ae[Hn] = ae[Er] = ae[Di] = ae[Pi] = ae[IS] = !0, ae[s] = ae[l] = ae[Kn] = ae[p] = ae[Lt] = ae[g] = ae[m] = ae[h] = ae[v] = ae[E] = ae[F] = ae[L] = ae[M] = ae[Y] = ae[un] = !1;
  var oc = typeof Ca == "object" && Ca && Ca.Object === Object && Ca, kS = typeof self == "object" && self && self.Object === Object && self, wt = oc || kS || Function("return this")(), sc = t && !t.nodeType && t, lc = sc && !0 && e && !e.nodeType && e, uc = lc && lc.exports === sc, Ri = uc && oc.process, cc = function() {
    try {
      return Ri && Ri.binding && Ri.binding("util");
    } catch {
    }
  }(), dc = cc && cc.isTypedArray;
  function MS(d, f) {
    for (var y = -1, A = d == null ? 0 : d.length, ie = 0, J = []; ++y < A; ) {
      var ue = d[y];
      f(ue, y, d) && (J[ie++] = ue);
    }
    return J;
  }
  function ES(d, f) {
    for (var y = -1, A = f.length, ie = d.length; ++y < A; )
      d[ie + y] = f[y];
    return d;
  }
  function CS(d, f) {
    for (var y = -1, A = d == null ? 0 : d.length; ++y < A; )
      if (f(d[y], y, d))
        return !0;
    return !1;
  }
  function DS(d, f) {
    for (var y = -1, A = Array(d); ++y < d; )
      A[y] = f(y);
    return A;
  }
  function PS(d) {
    return function(f) {
      return d(f);
    };
  }
  function RS(d, f) {
    return d.has(f);
  }
  function FS(d, f) {
    return d == null ? void 0 : d[f];
  }
  function VS(d) {
    var f = -1, y = Array(d.size);
    return d.forEach(function(A, ie) {
      y[++f] = [ie, A];
    }), y;
  }
  function jS(d, f) {
    return function(y) {
      return d(f(y));
    };
  }
  function JS(d) {
    var f = -1, y = Array(d.size);
    return d.forEach(function(A) {
      y[++f] = A;
    }), y;
  }
  var LS = Array.prototype, zS = Function.prototype, Sa = Object.prototype, Fi = wt["__core-js_shared__"], pc = zS.toString, mt = Sa.hasOwnProperty, fc = function() {
    var d = /[^.]+$/.exec(Fi && Fi.keys && Fi.keys.IE_PROTO || "");
    return d ? "Symbol(src)_1." + d : "";
  }(), mc = Sa.toString, US = RegExp(
    "^" + pc.call(mt).replace(wS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), gc = uc ? wt.Buffer : void 0, Oa = wt.Symbol, yc = wt.Uint8Array, hc = Sa.propertyIsEnumerable, ZS = LS.splice, cn = Oa ? Oa.toStringTag : void 0, vc = Object.getOwnPropertySymbols, qS = gc ? gc.isBuffer : void 0, BS = jS(Object.keys, Object), Vi = Yn(wt, "DataView"), Cr = Yn(wt, "Map"), ji = Yn(wt, "Promise"), Ji = Yn(wt, "Set"), Li = Yn(wt, "WeakMap"), Dr = Yn(Object, "create"), GS = fn(Vi), WS = fn(Cr), KS = fn(ji), HS = fn(Ji), YS = fn(Li), _c = Oa ? Oa.prototype : void 0, zi = _c ? _c.valueOf : void 0;
  function dn(d) {
    var f = -1, y = d == null ? 0 : d.length;
    for (this.clear(); ++f < y; ) {
      var A = d[f];
      this.set(A[0], A[1]);
    }
  }
  function QS() {
    this.__data__ = Dr ? Dr(null) : {}, this.size = 0;
  }
  function XS(d) {
    var f = this.has(d) && delete this.__data__[d];
    return this.size -= f ? 1 : 0, f;
  }
  function $S(d) {
    var f = this.__data__;
    if (Dr) {
      var y = f[d];
      return y === r ? void 0 : y;
    }
    return mt.call(f, d) ? f[d] : void 0;
  }
  function eO(d) {
    var f = this.__data__;
    return Dr ? f[d] !== void 0 : mt.call(f, d);
  }
  function tO(d, f) {
    var y = this.__data__;
    return this.size += this.has(d) ? 0 : 1, y[d] = Dr && f === void 0 ? r : f, this;
  }
  dn.prototype.clear = QS, dn.prototype.delete = XS, dn.prototype.get = $S, dn.prototype.has = eO, dn.prototype.set = tO;
  function xt(d) {
    var f = -1, y = d == null ? 0 : d.length;
    for (this.clear(); ++f < y; ) {
      var A = d[f];
      this.set(A[0], A[1]);
    }
  }
  function nO() {
    this.__data__ = [], this.size = 0;
  }
  function rO(d) {
    var f = this.__data__, y = Aa(f, d);
    if (y < 0)
      return !1;
    var A = f.length - 1;
    return y == A ? f.pop() : ZS.call(f, y, 1), --this.size, !0;
  }
  function aO(d) {
    var f = this.__data__, y = Aa(f, d);
    return y < 0 ? void 0 : f[y][1];
  }
  function iO(d) {
    return Aa(this.__data__, d) > -1;
  }
  function oO(d, f) {
    var y = this.__data__, A = Aa(y, d);
    return A < 0 ? (++this.size, y.push([d, f])) : y[A][1] = f, this;
  }
  xt.prototype.clear = nO, xt.prototype.delete = rO, xt.prototype.get = aO, xt.prototype.has = iO, xt.prototype.set = oO;
  function pn(d) {
    var f = -1, y = d == null ? 0 : d.length;
    for (this.clear(); ++f < y; ) {
      var A = d[f];
      this.set(A[0], A[1]);
    }
  }
  function sO() {
    this.size = 0, this.__data__ = {
      hash: new dn(),
      map: new (Cr || xt)(),
      string: new dn()
    };
  }
  function lO(d) {
    var f = Ia(this, d).delete(d);
    return this.size -= f ? 1 : 0, f;
  }
  function uO(d) {
    return Ia(this, d).get(d);
  }
  function cO(d) {
    return Ia(this, d).has(d);
  }
  function dO(d, f) {
    var y = Ia(this, d), A = y.size;
    return y.set(d, f), this.size += y.size == A ? 0 : 1, this;
  }
  pn.prototype.clear = sO, pn.prototype.delete = lO, pn.prototype.get = uO, pn.prototype.has = cO, pn.prototype.set = dO;
  function Na(d) {
    var f = -1, y = d == null ? 0 : d.length;
    for (this.__data__ = new pn(); ++f < y; )
      this.add(d[f]);
  }
  function pO(d) {
    return this.__data__.set(d, r), this;
  }
  function fO(d) {
    return this.__data__.has(d);
  }
  Na.prototype.add = Na.prototype.push = pO, Na.prototype.has = fO;
  function zt(d) {
    var f = this.__data__ = new xt(d);
    this.size = f.size;
  }
  function mO() {
    this.__data__ = new xt(), this.size = 0;
  }
  function gO(d) {
    var f = this.__data__, y = f.delete(d);
    return this.size = f.size, y;
  }
  function yO(d) {
    return this.__data__.get(d);
  }
  function hO(d) {
    return this.__data__.has(d);
  }
  function vO(d, f) {
    var y = this.__data__;
    if (y instanceof xt) {
      var A = y.__data__;
      if (!Cr || A.length < n - 1)
        return A.push([d, f]), this.size = ++y.size, this;
      y = this.__data__ = new pn(A);
    }
    return y.set(d, f), this.size = y.size, this;
  }
  zt.prototype.clear = mO, zt.prototype.delete = gO, zt.prototype.get = yO, zt.prototype.has = hO, zt.prototype.set = vO;
  function _O(d, f) {
    var y = wa(d), A = !y && PO(d), ie = !y && !A && Ui(d), J = !y && !A && !ie && Tc(d), ue = y || A || ie || J, Oe = ue ? DS(d.length, String) : [], Ie = Oe.length;
    for (var oe in d)
      (f || mt.call(d, oe)) && !(ue && // Safari 9 has enumerable `arguments.length` in strict mode.
      (oe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ie && (oe == "offset" || oe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      J && (oe == "buffer" || oe == "byteLength" || oe == "byteOffset") || // Skip index properties.
      kO(oe, Ie))) && Oe.push(oe);
    return Oe;
  }
  function Aa(d, f) {
    for (var y = d.length; y--; )
      if (Ac(d[y][0], f))
        return y;
    return -1;
  }
  function bO(d, f, y) {
    var A = f(d);
    return wa(d) ? A : ES(A, y(d));
  }
  function Pr(d) {
    return d == null ? d === void 0 ? rt : R : cn && cn in Object(d) ? xO(d) : DO(d);
  }
  function bc(d) {
    return Rr(d) && Pr(d) == s;
  }
  function Sc(d, f, y, A, ie) {
    return d === f ? !0 : d == null || f == null || !Rr(d) && !Rr(f) ? d !== d && f !== f : SO(d, f, y, A, Sc, ie);
  }
  function SO(d, f, y, A, ie, J) {
    var ue = wa(d), Oe = wa(f), Ie = ue ? l : Ut(d), oe = Oe ? l : Ut(f);
    Ie = Ie == s ? F : Ie, oe = oe == s ? F : oe;
    var Fe = Ie == F, at = oe == F, Te = Ie == oe;
    if (Te && Ui(d)) {
      if (!Ui(f))
        return !1;
      ue = !0, Fe = !1;
    }
    if (Te && !Fe)
      return J || (J = new zt()), ue || Tc(d) ? Oc(d, f, y, A, ie, J) : IO(d, f, Ie, y, A, ie, J);
    if (!(y & a)) {
      var Be = Fe && mt.call(d, "__wrapped__"), Ge = at && mt.call(f, "__wrapped__");
      if (Be || Ge) {
        var Zt = Be ? d.value() : d, Tt = Ge ? f.value() : f;
        return J || (J = new zt()), ie(Zt, Tt, y, A, J);
      }
    }
    return Te ? (J || (J = new zt()), wO(d, f, y, A, ie, J)) : !1;
  }
  function OO(d) {
    if (!xc(d) || EO(d))
      return !1;
    var f = Ic(d) ? US : xS;
    return f.test(fn(d));
  }
  function NO(d) {
    return Rr(d) && wc(d.length) && !!ae[Pr(d)];
  }
  function AO(d) {
    if (!CO(d))
      return BS(d);
    var f = [];
    for (var y in Object(d))
      mt.call(d, y) && y != "constructor" && f.push(y);
    return f;
  }
  function Oc(d, f, y, A, ie, J) {
    var ue = y & a, Oe = d.length, Ie = f.length;
    if (Oe != Ie && !(ue && Ie > Oe))
      return !1;
    var oe = J.get(d);
    if (oe && J.get(f))
      return oe == f;
    var Fe = -1, at = !0, Te = y & i ? new Na() : void 0;
    for (J.set(d, f), J.set(f, d); ++Fe < Oe; ) {
      var Be = d[Fe], Ge = f[Fe];
      if (A)
        var Zt = ue ? A(Ge, Be, Fe, f, d, J) : A(Be, Ge, Fe, d, f, J);
      if (Zt !== void 0) {
        if (Zt)
          continue;
        at = !1;
        break;
      }
      if (Te) {
        if (!CS(f, function(Tt, mn) {
          if (!RS(Te, mn) && (Be === Tt || ie(Be, Tt, y, A, J)))
            return Te.push(mn);
        })) {
          at = !1;
          break;
        }
      } else if (!(Be === Ge || ie(Be, Ge, y, A, J))) {
        at = !1;
        break;
      }
    }
    return J.delete(d), J.delete(f), at;
  }
  function IO(d, f, y, A, ie, J, ue) {
    switch (y) {
      case Lt:
        if (d.byteLength != f.byteLength || d.byteOffset != f.byteOffset)
          return !1;
        d = d.buffer, f = f.buffer;
      case Kn:
        return !(d.byteLength != f.byteLength || !J(new yc(d), new yc(f)));
      case p:
      case g:
      case E:
        return Ac(+d, +f);
      case m:
        return d.name == f.name && d.message == f.message;
      case L:
      case Y:
        return d == f + "";
      case v:
        var Oe = VS;
      case M:
        var Ie = A & a;
        if (Oe || (Oe = JS), d.size != f.size && !Ie)
          return !1;
        var oe = ue.get(d);
        if (oe)
          return oe == f;
        A |= i, ue.set(d, f);
        var Fe = Oc(Oe(d), Oe(f), A, ie, J, ue);
        return ue.delete(d), Fe;
      case z:
        if (zi)
          return zi.call(d) == zi.call(f);
    }
    return !1;
  }
  function wO(d, f, y, A, ie, J) {
    var ue = y & a, Oe = Nc(d), Ie = Oe.length, oe = Nc(f), Fe = oe.length;
    if (Ie != Fe && !ue)
      return !1;
    for (var at = Ie; at--; ) {
      var Te = Oe[at];
      if (!(ue ? Te in f : mt.call(f, Te)))
        return !1;
    }
    var Be = J.get(d);
    if (Be && J.get(f))
      return Be == f;
    var Ge = !0;
    J.set(d, f), J.set(f, d);
    for (var Zt = ue; ++at < Ie; ) {
      Te = Oe[at];
      var Tt = d[Te], mn = f[Te];
      if (A)
        var kc = ue ? A(mn, Tt, Te, f, d, J) : A(Tt, mn, Te, d, f, J);
      if (!(kc === void 0 ? Tt === mn || ie(Tt, mn, y, A, J) : kc)) {
        Ge = !1;
        break;
      }
      Zt || (Zt = Te == "constructor");
    }
    if (Ge && !Zt) {
      var xa = d.constructor, Ta = f.constructor;
      xa != Ta && "constructor" in d && "constructor" in f && !(typeof xa == "function" && xa instanceof xa && typeof Ta == "function" && Ta instanceof Ta) && (Ge = !1);
    }
    return J.delete(d), J.delete(f), Ge;
  }
  function Nc(d) {
    return bO(d, VO, TO);
  }
  function Ia(d, f) {
    var y = d.__data__;
    return MO(f) ? y[typeof f == "string" ? "string" : "hash"] : y.map;
  }
  function Yn(d, f) {
    var y = FS(d, f);
    return OO(y) ? y : void 0;
  }
  function xO(d) {
    var f = mt.call(d, cn), y = d[cn];
    try {
      d[cn] = void 0;
      var A = !0;
    } catch {
    }
    var ie = mc.call(d);
    return A && (f ? d[cn] = y : delete d[cn]), ie;
  }
  var TO = vc ? function(d) {
    return d == null ? [] : (d = Object(d), MS(vc(d), function(f) {
      return hc.call(d, f);
    }));
  } : jO, Ut = Pr;
  (Vi && Ut(new Vi(new ArrayBuffer(1))) != Lt || Cr && Ut(new Cr()) != v || ji && Ut(ji.resolve()) != _ || Ji && Ut(new Ji()) != M || Li && Ut(new Li()) != un) && (Ut = function(d) {
    var f = Pr(d), y = f == F ? d.constructor : void 0, A = y ? fn(y) : "";
    if (A)
      switch (A) {
        case GS:
          return Lt;
        case WS:
          return v;
        case KS:
          return _;
        case HS:
          return M;
        case YS:
          return un;
      }
    return f;
  });
  function kO(d, f) {
    return f = f ?? o, !!f && (typeof d == "number" || TS.test(d)) && d > -1 && d % 1 == 0 && d < f;
  }
  function MO(d) {
    var f = typeof d;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? d !== "__proto__" : d === null;
  }
  function EO(d) {
    return !!fc && fc in d;
  }
  function CO(d) {
    var f = d && d.constructor, y = typeof f == "function" && f.prototype || Sa;
    return d === y;
  }
  function DO(d) {
    return mc.call(d);
  }
  function fn(d) {
    if (d != null) {
      try {
        return pc.call(d);
      } catch {
      }
      try {
        return d + "";
      } catch {
      }
    }
    return "";
  }
  function Ac(d, f) {
    return d === f || d !== d && f !== f;
  }
  var PO = bc(function() {
    return arguments;
  }()) ? bc : function(d) {
    return Rr(d) && mt.call(d, "callee") && !hc.call(d, "callee");
  }, wa = Array.isArray;
  function RO(d) {
    return d != null && wc(d.length) && !Ic(d);
  }
  var Ui = qS || JO;
  function FO(d, f) {
    return Sc(d, f);
  }
  function Ic(d) {
    if (!xc(d))
      return !1;
    var f = Pr(d);
    return f == h || f == I || f == u || f == C;
  }
  function wc(d) {
    return typeof d == "number" && d > -1 && d % 1 == 0 && d <= o;
  }
  function xc(d) {
    var f = typeof d;
    return d != null && (f == "object" || f == "function");
  }
  function Rr(d) {
    return d != null && typeof d == "object";
  }
  var Tc = dc ? PS(dc) : NO;
  function VO(d) {
    return RO(d) ? _O(d) : AO(d);
  }
  function jO() {
    return [];
  }
  function JO() {
    return !1;
  }
  e.exports = FO;
})(di, di.exports);
var gw = di.exports;
const $o = /* @__PURE__ */ mw(gw), yw = (e, t, n) => {
  const r = n.logger, a = n.subjects ?? $I(), i = new Nt(), o = Pc([
    a.walletData,
    a.sharedData,
    a.loggedInTimestamp
  ]).pipe(
    yt(([m, h, I]) => ({
      walletData: m,
      sharedData: h,
      loggedInTimestamp: I
    }))
  ), s = () => t.getData(e).map((m) => (m && (r == null || r.debug("readFromStorage")), m)), l = (m) => t.setData(
    e,
    le(m, (h) => {
      h.walletData.proofs = [];
    })
  ).map(() => {
    r == null || r.trace("writeToStorage", m);
  }), u = (m) => {
    const { walletData: h, sharedData: I, loggedInTimestamp: v } = m;
    h && !$o(a.walletData.value, h) && a.walletData.next(h), I && a.sharedData.next(I), v !== void 0 && a.loggedInTimestamp.next(v);
  }, p = () => {
    $o(a.walletData.value, si) || a.walletData.next(si), a.sharedData.next({}), a.loggedInTimestamp.next("");
  };
  s().andThen((m) => me.fromPromise(
    em.parseAsync(m),
    (h) => h
  )).mapErr(() => {
    r == null || r.debug("loadedCorruptedStateFromStorage"), p();
  }).map((m) => {
    if (m)
      return r == null || r.debug("initializeStateFromStorage"), u(
        le(m, (h) => (h.walletData.persona = h.walletData.persona ?? void 0, h))
      );
    r == null || r.debug("initializeStateFromDefault"), p();
  }), i.add(o.pipe(Et(l)).subscribe()), i.add(
    o.pipe(
      ZN(1),
      Np(),
      K(() => {
        a.initialized.next(!0);
      })
    ).subscribe()
  );
  const g = () => ({
    walletData: a.walletData.value,
    sharedData: a.sharedData.value,
    loggedInTimestamp: a.loggedInTimestamp.value
  });
  return {
    setState: u,
    getState: g,
    walletData$: Pc([
      a.initialized,
      a.walletData
    ]).pipe(
      jN(1),
      Dt(([m]) => m),
      yt(() => a.walletData.value)
    ),
    getWalletData: () => a.walletData.value,
    state$: a.initialized.pipe(
      Dt((m) => m),
      Et(() => o)
    ),
    patchState: (m) => {
      u({ ...g(), ...m });
    },
    reset: p,
    stateInitialized$: a.initialized.asObservable(),
    destroy: () => {
      p(), i.unsubscribe();
    }
  };
}, hw = () => ({
  onConnect: new Ve(),
  onDisconnect: new Ve(),
  onUpdateSharedData: new Ve(),
  connected: new eN(1),
  requestItems: new se([]),
  onCancelRequestItem: new Ve(),
  accounts: new se([]),
  onShowPopover: new Ve(),
  status: new se(
    "default"
  ),
  loggedInTimestamp: new se(""),
  isMobile: new se(!1),
  isWalletLinked: new se(!1),
  isExtensionAvailable: new se(!1),
  fullWidth: new se(!1),
  activeTab: new se("sharing"),
  mode: new se("light"),
  theme: new se("radix-blue"),
  avatarUrl: new se(""),
  personaLabel: new se(""),
  personaData: new se([]),
  dAppName: new se(""),
  onLinkClick: new Ve()
}), vw = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  globalThis.navigator ? globalThis.navigator.userAgent : ""
), _w = (e) => {
  Promise.resolve().then(() => Hz);
  const t = e.subjects || hw(), n = e.logger, r = (s) => {
    s();
  }, a = e.onConnect || r, i = () => document.querySelector("radix-connect-button"), o = new Nt();
  return o.add(
    gt(document, "onRender").pipe(
      yt(() => i()),
      Dt((s) => !!s),
      Et((s) => {
        n == null || n.debug("connectButtonDiscovered");
        const l = gt(s, "onConnect").pipe(
          K(() => {
            a((N) => {
              !s.isWalletLinked || !s.isExtensionAvailable || t.onConnect.next(N);
            });
          })
        ), u = gt(
          s,
          "onDisconnect"
        ).pipe(
          K(() => {
            t.onDisconnect.next();
          })
        ), p = gt(s, "onLinkClick").pipe(
          K((N) => {
            t.onLinkClick.next(N.detail);
          })
        ), g = gt(s, "onDestroy").pipe(
          K(() => {
            n == null || n.debug("connectButtonRemovedFromDOM");
          })
        ), m = gt(
          s,
          "onCancelRequestItem"
        ).pipe(
          K((N) => {
            const fe = N.detail.id;
            n == null || n.debug("onCancelRequestItem", { id: fe }), t.onCancelRequestItem.next(fe);
          })
        ), h = gt(
          s,
          "onUpdateSharedData"
        ).pipe(
          K(() => {
            n == null || n.debug("onUpdateSharedData"), t.onUpdateSharedData.next();
          })
        ), I = gt(
          s,
          "onShowPopover"
        ).pipe(
          K(() => {
            t.onShowPopover.next();
          })
        ), v = t.status.pipe(
          K((N) => s.status = N)
        ), E = t.mode.pipe(
          K((N) => s.mode = N)
        ), R = t.connected.pipe(
          K((N) => {
            s.connected = N;
          })
        ), F = t.isMobile.pipe(
          K((N) => {
            s.isMobile = N;
          })
        ), _ = t.isWalletLinked.pipe(
          K((N) => {
            s.isWalletLinked = N;
          })
        ), C = t.isExtensionAvailable.pipe(
          K((N) => {
            s.isExtensionAvailable = N;
          })
        ), L = t.loggedInTimestamp.pipe(
          K((N) => {
            s.loggedInTimestamp = N;
          })
        ), M = t.activeTab.pipe(
          K((N) => {
            s.activeTab = N;
          })
        ), Y = t.requestItems.pipe(
          K((N) => {
            s.requestItems = N;
          })
        ), z = t.accounts.pipe(
          K((N) => {
            s.accounts = N;
          })
        ), rt = t.personaData.pipe(
          K((N) => {
            s.personaData = N;
          })
        ), un = t.personaLabel.pipe(
          K((N) => {
            s.personaLabel = N;
          })
        ), Kn = t.dAppName.pipe(
          K((N) => {
            s.dAppName = N;
          })
        ), Lt = t.theme.pipe(
          K((N) => {
            s.theme = N;
          })
        );
        return Br(
          l,
          v,
          Lt,
          E,
          R,
          Y,
          L,
          F,
          M,
          _,
          C,
          u,
          m,
          z,
          rt,
          un,
          g,
          h,
          I,
          Kn,
          p
        );
      })
    ).subscribe()
  ), {
    status$: t.status.asObservable(),
    onConnect$: t.onConnect.asObservable(),
    onDisconnect$: t.onDisconnect.asObservable(),
    onShowPopover$: t.onShowPopover.asObservable(),
    onUpdateSharedData$: t.onUpdateSharedData.asObservable(),
    onCancelRequestItem$: t.onCancelRequestItem.asObservable(),
    onLinkClick$: t.onLinkClick.asObservable(),
    setStatus: (s) => t.status.next(s),
    setTheme: (s) => t.theme.next(s),
    setMode: (s) => t.mode.next(s),
    setActiveTab: (s) => t.activeTab.next(s),
    setIsMobile: (s) => t.isMobile.next(s),
    setIsWalletLinked: (s) => t.isWalletLinked.next(s),
    setIsExtensionAvailable: (s) => t.isExtensionAvailable.next(s),
    setLoggedInTimestamp: (s) => t.loggedInTimestamp.next(s),
    setConnected: (s) => t.connected.next(s),
    setRequestItems: (s) => t.requestItems.next(s),
    setAccounts: (s) => t.accounts.next(s),
    setPersonaData: (s) => t.personaData.next(s),
    setPersonaLabel: (s) => t.personaLabel.next(s),
    setDappName: (s) => t.dAppName.next(s),
    disconnect: () => {
      t.connected.next(!1), t.status.next("default");
    },
    destroy: () => {
      o.unsubscribe();
    }
  };
};
var bw = Object.defineProperty, Sw = (e, t, n) => t in e ? bw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, st = (e, t, n) => (Sw(e, typeof t != "symbol" ? t + "" : t, n), n);
const cm = "https://mainnet.radixdlt.com".replace(/\/+$/, "");
class Ds {
  constructor(t = {}) {
    this.configuration = t;
  }
  set config(t) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : cm;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || Ps;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const t = this.configuration.apiKey;
    if (t)
      return typeof t == "function" ? t : () => t;
  }
  get accessToken() {
    const t = this.configuration.accessToken;
    if (t)
      return typeof t == "function" ? t : async () => t;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
}
const dm = new Ds();
class Nr {
  constructor(t = dm) {
    st(this, "middleware"), st(this, "fetchApi", async (n, r) => {
      let a = { url: n, init: r };
      for (const o of this.middleware)
        o.pre && (a = await o.pre({
          fetch: this.fetchApi,
          ...a
        }) || a);
      let i;
      try {
        i = await (this.configuration.fetchApi || fetch)(a.url, a.init);
      } catch (o) {
        for (const s of this.middleware)
          s.onError && (i = await s.onError({
            fetch: this.fetchApi,
            url: a.url,
            init: a.init,
            error: o,
            response: i ? i.clone() : void 0
          }) || i);
        if (i === void 0)
          throw o;
      }
      for (const o of this.middleware)
        o.post && (i = await o.post({
          fetch: this.fetchApi,
          url: a.url,
          init: a.init,
          response: i.clone()
        }) || i);
      return i;
    }), this.configuration = t, this.middleware = t.middleware;
  }
  withMiddleware(...t) {
    const n = this.clone();
    return n.middleware = n.middleware.concat(...t), n;
  }
  withPreMiddleware(...t) {
    const n = t.map((r) => ({ pre: r }));
    return this.withMiddleware(...n);
  }
  withPostMiddleware(...t) {
    const n = t.map((r) => ({ post: r }));
    return this.withMiddleware(...n);
  }
  async request(t, n) {
    const { url: r, init: a } = await this.createFetchParams(t, n), i = await this.fetchApi(r, a);
    if (i && i.status >= 200 && i.status < 300)
      return i;
    throw await na.from(i);
  }
  async createFetchParams(t, n) {
    let r = this.configuration.basePath + t.path;
    t.query !== void 0 && Object.keys(t.query).length !== 0 && (r += "?" + this.configuration.queryParamsStringify(t.query));
    const a = Object.assign({}, this.configuration.headers, t.headers);
    Object.keys(a).forEach((u) => a[u] === void 0 ? delete a[u] : {});
    const i = typeof n == "function" ? n : async () => n, o = {
      method: t.method,
      headers: a,
      body: t.body,
      credentials: this.configuration.credentials
    }, s = {
      ...o,
      ...await i({
        init: o,
        context: t
      })
    }, l = {
      ...s,
      body: Nw(s.body) || s.body instanceof URLSearchParams || Ow(s.body) ? s.body : JSON.stringify(s.body)
    };
    return { url: r, init: l };
  }
  clone() {
    const t = this.constructor, n = new t(this.configuration);
    return n.middleware = this.middleware.slice(), n;
  }
}
function Ow(e) {
  return typeof Blob < "u" && e instanceof Blob;
}
function Nw(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
class na extends Error {
  constructor(t, n, r) {
    super(r ? JSON.stringify(r) : "Unknown error occurred"), st(this, "name", "ResponseError"), this.fetchResponse = t, this.status = n, this.errorResponse = r;
  }
  static async from(t) {
    const n = t.status;
    try {
      const r = await t.json();
      return new na(t, n, r);
    } catch {
      return new na(t, n, void 0);
    }
  }
}
class be extends Error {
  constructor(t, n) {
    super(n), st(this, "name", "RequiredError"), this.field = t;
  }
}
const Aw = {
  csv: ",",
  ssv: " ",
  tsv: "	",
  pipes: "|"
};
function c(e, t) {
  return e[t] != null;
}
function Ps(e, t = "") {
  return Object.keys(e).map((n) => pm(n, e[n], t)).filter((n) => n.length > 0).join("&");
}
function pm(e, t, n = "") {
  const r = n + (n.length ? `[${e}]` : e);
  if (t instanceof Array) {
    const a = t.map((i) => encodeURIComponent(String(i))).join(`&${encodeURIComponent(r)}=`);
    return `${encodeURIComponent(r)}=${a}`;
  }
  if (t instanceof Set) {
    const a = Array.from(t);
    return pm(e, a, n);
  }
  return t instanceof Date ? `${encodeURIComponent(r)}=${encodeURIComponent(t.toISOString())}` : t instanceof Object ? Ps(t, r) : `${encodeURIComponent(r)}=${encodeURIComponent(String(t))}`;
}
function Iw(e, t) {
  return Object.keys(e).reduce(
    (n, r) => ({ ...n, [r]: t(e[r]) }),
    {}
  );
}
function ww(e) {
  for (const t of e)
    if (t.contentType === "multipart/form-data")
      return !0;
  return !1;
}
class ce {
  constructor(t, n = (r) => r) {
    this.raw = t, this.transformer = n;
  }
  async value() {
    return this.transformer(await this.raw.json());
  }
}
class xw {
  constructor(t) {
    this.raw = t;
  }
  async value() {
  }
}
class Tw {
  constructor(t) {
    this.raw = t;
  }
  async value() {
    return await this.raw.blob();
  }
}
class kw {
  constructor(t) {
    this.raw = t;
  }
  async value() {
    return await this.raw.text();
  }
}
function Mw(e) {
  return !0;
}
function ye(e) {
  return fm(e);
}
function fm(e, t) {
  return e == null ? e : {
    state_version: c(e, "state_version") ? e.state_version : void 0,
    timestamp: c(e, "timestamp") ? e.timestamp === null ? null : new Date(e.timestamp) : void 0,
    epoch: c(e, "epoch") ? e.epoch : void 0,
    round: c(e, "round") ? e.round : void 0
  };
}
function he(e) {
  if (e !== void 0)
    return e === null ? null : {
      state_version: e.state_version,
      timestamp: e.timestamp === void 0 ? void 0 : e.timestamp === null ? null : e.timestamp.toISOString(),
      epoch: e.epoch,
      round: e.round
    };
}
function Ew(e) {
  return !0;
}
function Cw(e) {
  return mm(e);
}
function mm(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0
  };
}
function Dw(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state)
    };
}
function Pw(e) {
  let t = !0;
  return t = t && "entity_address" in e, t = t && "resource_address" in e, t = t && "balance_change" in e, t;
}
function gm(e) {
  return ym(e);
}
function ym(e, t) {
  return e == null ? e : {
    entity_address: e.entity_address,
    resource_address: e.resource_address,
    balance_change: e.balance_change
  };
}
function hm(e) {
  if (e !== void 0)
    return e === null ? null : {
      entity_address: e.entity_address,
      resource_address: e.resource_address,
      balance_change: e.balance_change
    };
}
const Rw = {
  FeePayment: "FeePayment",
  FeeDistributed: "FeeDistributed",
  TipDistributed: "TipDistributed",
  RoyaltyDistributed: "RoyaltyDistributed"
};
function vm(e) {
  return _m(e);
}
function _m(e, t) {
  return e;
}
function Fw(e) {
  return e;
}
function Vw(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "entity_address" in e, t = t && "resource_address" in e, t = t && "balance_change" in e, t;
}
function bm(e) {
  return Sm(e);
}
function Sm(e, t) {
  return e == null ? e : {
    type: vm(e.type),
    entity_address: e.entity_address,
    resource_address: e.resource_address,
    balance_change: e.balance_change
  };
}
function Om(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      entity_address: e.entity_address,
      resource_address: e.resource_address,
      balance_change: e.balance_change
    };
}
function jw(e) {
  let t = !0;
  return t = t && "entity_address" in e, t = t && "resource_address" in e, t = t && "added" in e, t = t && "removed" in e, t;
}
function Nm(e) {
  return Am(e);
}
function Am(e, t) {
  return e == null ? e : {
    entity_address: e.entity_address,
    resource_address: e.resource_address,
    added: e.added,
    removed: e.removed
  };
}
function Im(e) {
  if (e !== void 0)
    return e === null ? null : {
      entity_address: e.entity_address,
      resource_address: e.resource_address,
      added: e.added,
      removed: e.removed
    };
}
function Jw(e) {
  let t = !0;
  return t = t && "fungible_fee_balance_changes" in e, t = t && "fungible_balance_changes" in e, t = t && "non_fungible_balance_changes" in e, t;
}
function wm(e) {
  return xm(e);
}
function xm(e, t) {
  return e == null ? e : {
    fungible_fee_balance_changes: e.fungible_fee_balance_changes.map(bm),
    fungible_balance_changes: e.fungible_balance_changes.map(gm),
    non_fungible_balance_changes: e.non_fungible_balance_changes.map(Nm)
  };
}
function Tm(e) {
  if (e !== void 0)
    return e === null ? null : {
      fungible_fee_balance_changes: e.fungible_fee_balance_changes.map(Om),
      fungible_balance_changes: e.fungible_balance_changes.map(hm),
      non_fungible_balance_changes: e.non_fungible_balance_changes.map(Im)
    };
}
const Lw = {
  Bool: "Bool",
  I8: "I8",
  I16: "I16",
  I32: "I32",
  I64: "I64",
  I128: "I128",
  U8: "U8",
  U16: "U16",
  U32: "U32",
  U64: "U64",
  U128: "U128",
  String: "String",
  Enum: "Enum",
  Array: "Array",
  Bytes: "Bytes",
  Map: "Map",
  Tuple: "Tuple",
  Reference: "Reference",
  Own: "Own",
  Decimal: "Decimal",
  PreciseDecimal: "PreciseDecimal",
  NonFungibleLocalId: "NonFungibleLocalId"
};
function vt(e) {
  return km(e);
}
function km(e, t) {
  return e;
}
function zw(e) {
  return e;
}
const Uw = {
  Array: "Array"
};
function Zw(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "element_kind" in e, t = t && "elements" in e, t;
}
function qw(e) {
  return Rs(e);
}
function Rs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    element_kind: vt(e.element_kind),
    element_type_name: c(e, "element_type_name") ? e.element_type_name : void 0,
    elements: e.elements.map(Ue)
  };
}
function Mm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      element_kind: e.element_kind,
      element_type_name: e.element_type_name,
      elements: e.elements.map(Ze)
    };
}
const Bw = {
  Bool: "Bool"
};
function Gw(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Ww(e) {
  return Fs(e);
}
function Fs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Em(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Kw = {
  Bytes: "Bytes"
};
function Hw(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "element_kind" in e, t = t && "hex" in e, t;
}
function Yw(e) {
  return Vs(e);
}
function Vs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    element_kind: vt(e.element_kind),
    element_type_name: c(e, "element_type_name") ? e.element_type_name : void 0,
    hex: e.hex
  };
}
function Cm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      element_kind: e.element_kind,
      element_type_name: e.element_type_name,
      hex: e.hex
    };
}
const Qw = {
  Decimal: "Decimal"
};
function Xw(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function $w(e) {
  return js(e);
}
function js(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Dm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const ex = {
  Enum: "Enum"
};
function tx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "variant_id" in e, t = t && "fields" in e, t;
}
function nx(e) {
  return Js(e);
}
function Js(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    variant_id: e.variant_id,
    variant_name: c(e, "variant_name") ? e.variant_name : void 0,
    fields: e.fields.map(Ue)
  };
}
function Pm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      variant_id: e.variant_id,
      variant_name: e.variant_name,
      fields: e.fields.map(Ze)
    };
}
const rx = {
  I128: "I128"
};
function ax(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function ix(e) {
  return Ls(e);
}
function Ls(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Rm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const ox = {
  I16: "I16"
};
function sx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function lx(e) {
  return zs(e);
}
function zs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Fm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const ux = {
  I32: "I32"
};
function cx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function dx(e) {
  return Us(e);
}
function Us(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Vm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const px = {
  I64: "I64"
};
function fx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function mx(e) {
  return Zs(e);
}
function Zs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function jm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const gx = {
  I8: "I8"
};
function yx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function hx(e) {
  return qs(e);
}
function qs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Jm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
function vx(e) {
  let t = !0;
  return t = t && "key" in e, t = t && "value" in e, t;
}
function Bs(e) {
  return Lm(e);
}
function Lm(e, t) {
  return e == null ? e : {
    key: Ue(e.key),
    value: Ue(e.value)
  };
}
function Gs(e) {
  if (e !== void 0)
    return e === null ? null : {
      key: Ze(e.key),
      value: Ze(e.value)
    };
}
const _x = {
  Map: "Map"
};
function bx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "key_kind" in e, t = t && "value_kind" in e, t = t && "entries" in e, t;
}
function Sx(e) {
  return Ws(e);
}
function Ws(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    key_kind: vt(e.key_kind),
    key_type_name: c(e, "key_type_name") ? e.key_type_name : void 0,
    value_kind: vt(e.value_kind),
    value_type_name: c(e, "value_type_name") ? e.value_type_name : void 0,
    entries: e.entries.map(Bs)
  };
}
function zm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      key_kind: e.key_kind,
      key_type_name: e.key_type_name,
      value_kind: e.value_kind,
      value_type_name: e.value_type_name,
      entries: e.entries.map(Gs)
    };
}
const Ox = {
  NonFungibleLocalId: "NonFungibleLocalId"
};
function Nx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Ax(e) {
  return Ks(e);
}
function Ks(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Um(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Ix = {
  Own: "Own"
};
function wx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function xx(e) {
  return Hs(e);
}
function Hs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Zm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Tx = {
  PreciseDecimal: "PreciseDecimal"
};
function kx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Mx(e) {
  return Ys(e);
}
function Ys(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function qm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Ex = {
  Reference: "Reference"
};
function Cx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Dx(e) {
  return Qs(e);
}
function Qs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Bm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Px = {
  String: "String"
};
function Rx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Fx(e) {
  return Xs(e);
}
function Xs(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Gm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Vx = {
  Tuple: "Tuple"
};
function jx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "fields" in e, t;
}
function Jx(e) {
  return $s(e);
}
function $s(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    fields: e.fields.map(Ue)
  };
}
function Wm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      fields: e.fields.map(Ze)
    };
}
const Lx = {
  U128: "U128"
};
function zx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Ux(e) {
  return el(e);
}
function el(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Km(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Zx = {
  U16: "U16"
};
function qx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Bx(e) {
  return tl(e);
}
function tl(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Hm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Gx = {
  U32: "U32"
};
function Wx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Kx(e) {
  return nl(e);
}
function nl(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Ym(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Hx = {
  U64: "U64"
};
function Yx(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function Qx(e) {
  return rl(e);
}
function rl(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Qm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
const Xx = {
  U8: "U8"
};
function $x(e) {
  let t = !0;
  return t = t && "kind" in e, t = t && "value" in e, t;
}
function eT(e) {
  return al(e);
}
function al(e, t) {
  return e == null ? e : {
    kind: e.kind,
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0,
    value: e.value
  };
}
function Xm(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name,
      value: e.value
    };
}
function Ue(e) {
  return $m(e);
}
function $m(e, t) {
  if (e == null)
    return e;
  switch (e.kind) {
    case "Array":
      return { ...Rs(e), kind: "Array" };
    case "Bool":
      return { ...Fs(e), kind: "Bool" };
    case "Bytes":
      return { ...Vs(e), kind: "Bytes" };
    case "Decimal":
      return { ...js(e), kind: "Decimal" };
    case "Enum":
      return { ...Js(e), kind: "Enum" };
    case "I128":
      return { ...Ls(e), kind: "I128" };
    case "I16":
      return { ...zs(e), kind: "I16" };
    case "I32":
      return { ...Us(e), kind: "I32" };
    case "I64":
      return { ...Zs(e), kind: "I64" };
    case "I8":
      return { ...qs(e), kind: "I8" };
    case "Map":
      return { ...Ws(e), kind: "Map" };
    case "NonFungibleLocalId":
      return { ...Ks(e), kind: "NonFungibleLocalId" };
    case "Own":
      return { ...Hs(e), kind: "Own" };
    case "PreciseDecimal":
      return { ...Ys(e), kind: "PreciseDecimal" };
    case "Reference":
      return { ...Qs(e), kind: "Reference" };
    case "String":
      return { ...Xs(e), kind: "String" };
    case "Tuple":
      return { ...$s(e), kind: "Tuple" };
    case "U128":
      return { ...el(e), kind: "U128" };
    case "U16":
      return { ...tl(e), kind: "U16" };
    case "U32":
      return { ...nl(e), kind: "U32" };
    case "U64":
      return { ...rl(e), kind: "U64" };
    case "U8":
      return { ...al(e), kind: "U8" };
    default:
      throw new Error(`No variant of ProgrammaticScryptoSborValue exists with 'kind=${e.kind}'`);
  }
}
function Ze(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.kind) {
      case "Array":
        return Mm(e);
      case "Bool":
        return Em(e);
      case "Bytes":
        return Cm(e);
      case "Decimal":
        return Dm(e);
      case "Enum":
        return Pm(e);
      case "I128":
        return Rm(e);
      case "I16":
        return Fm(e);
      case "I32":
        return Vm(e);
      case "I64":
        return jm(e);
      case "I8":
        return Jm(e);
      case "Map":
        return zm(e);
      case "NonFungibleLocalId":
        return Um(e);
      case "Own":
        return Zm(e);
      case "PreciseDecimal":
        return qm(e);
      case "Reference":
        return Bm(e);
      case "String":
        return Gm(e);
      case "Tuple":
        return Wm(e);
      case "U128":
        return Km(e);
      case "U16":
        return Hm(e);
      case "U32":
        return Ym(e);
      case "U64":
        return Qm(e);
      case "U8":
        return Xm(e);
      default:
        throw new Error(`No variant of ProgrammaticScryptoSborValue exists with 'kind=${e.kind}'`);
    }
  }
}
function tT(e) {
  let t = !0;
  return t = t && "name" in e, t = t && "emitter" in e, t = t && "data" in e, t;
}
function eg(e) {
  return tg(e);
}
function tg(e, t) {
  return e == null ? e : {
    name: e.name,
    emitter: e.emitter,
    data: Ue(e.data)
  };
}
function ng(e) {
  if (e !== void 0)
    return e === null ? null : {
      name: e.name,
      emitter: e.emitter,
      data: Ze(e.data)
    };
}
const es = {
  Unknown: "Unknown",
  CommittedSuccess: "CommittedSuccess",
  CommittedFailure: "CommittedFailure",
  Pending: "Pending",
  Rejected: "Rejected"
};
function Ar(e) {
  return rg(e);
}
function rg(e, t) {
  return e;
}
function nT(e) {
  return e;
}
function rT(e) {
  return !0;
}
function ag(e) {
  return ig(e);
}
function ig(e, t) {
  return e == null ? e : {
    status: c(e, "status") ? Ar(e.status) : void 0,
    fee_summary: c(e, "fee_summary") ? e.fee_summary : void 0,
    costing_parameters: c(e, "costing_parameters") ? e.costing_parameters : void 0,
    fee_destination: c(e, "fee_destination") ? e.fee_destination : void 0,
    fee_source: c(e, "fee_source") ? e.fee_source : void 0,
    state_updates: c(e, "state_updates") ? e.state_updates : void 0,
    next_epoch: c(e, "next_epoch") ? e.next_epoch : void 0,
    output: c(e, "output") ? e.output : void 0,
    events: c(e, "events") ? e.events.map(eg) : void 0,
    error_message: c(e, "error_message") ? e.error_message : void 0
  };
}
function og(e) {
  if (e !== void 0)
    return e === null ? null : {
      status: e.status,
      fee_summary: e.fee_summary,
      costing_parameters: e.costing_parameters,
      fee_destination: e.fee_destination,
      fee_source: e.fee_source,
      state_updates: e.state_updates,
      next_epoch: e.next_epoch,
      output: e.output,
      events: e.events === void 0 ? void 0 : e.events.map(ng),
      error_message: e.error_message
    };
}
function aT(e) {
  let t = !0;
  return t = t && "state_version" in e, t = t && "epoch" in e, t = t && "round" in e, t = t && "round_timestamp" in e, t = t && "transaction_status" in e, t;
}
function ua(e) {
  return sg(e);
}
function sg(e, t) {
  return e == null ? e : {
    state_version: e.state_version,
    epoch: e.epoch,
    round: e.round,
    round_timestamp: e.round_timestamp,
    transaction_status: Ar(e.transaction_status),
    payload_hash: c(e, "payload_hash") ? e.payload_hash : void 0,
    intent_hash: c(e, "intent_hash") ? e.intent_hash : void 0,
    fee_paid: c(e, "fee_paid") ? e.fee_paid : void 0,
    affected_global_entities: c(e, "affected_global_entities") ? e.affected_global_entities : void 0,
    confirmed_at: c(e, "confirmed_at") ? e.confirmed_at === null ? null : new Date(e.confirmed_at) : void 0,
    error_message: c(e, "error_message") ? e.error_message : void 0,
    raw_hex: c(e, "raw_hex") ? e.raw_hex : void 0,
    receipt: c(e, "receipt") ? ag(e.receipt) : void 0,
    message: c(e, "message") ? e.message : void 0,
    balance_changes: c(e, "balance_changes") ? wm(e.balance_changes) : void 0
  };
}
function ca(e) {
  if (e !== void 0)
    return e === null ? null : {
      state_version: e.state_version,
      epoch: e.epoch,
      round: e.round,
      round_timestamp: e.round_timestamp,
      transaction_status: e.transaction_status,
      payload_hash: e.payload_hash,
      intent_hash: e.intent_hash,
      fee_paid: e.fee_paid,
      affected_global_entities: e.affected_global_entities,
      confirmed_at: e.confirmed_at === void 0 ? void 0 : e.confirmed_at === null ? null : e.confirmed_at.toISOString(),
      error_message: e.error_message,
      raw_hex: e.raw_hex,
      receipt: og(e.receipt),
      message: e.message,
      balance_changes: Tm(e.balance_changes)
    };
}
const iT = {
  Explicit: "Explicit",
  Owner: "Owner"
};
function lg(e) {
  return ug(e);
}
function ug(e, t) {
  return e;
}
function oT(e) {
  return e;
}
function sT(e) {
  let t = !0;
  return t = t && "resolution" in e, t;
}
function cg(e) {
  return dg(e);
}
function dg(e, t) {
  return e == null ? e : {
    resolution: lg(e.resolution),
    explicit_rule: c(e, "explicit_rule") ? e.explicit_rule : void 0
  };
}
function pg(e) {
  if (e !== void 0)
    return e === null ? null : {
      resolution: e.resolution,
      explicit_rule: e.explicit_rule
    };
}
const lT = {
  Main: "Main",
  Metadata: "Metadata",
  Royalty: "Royalty",
  RoleAssignment: "RoleAssignment"
};
function fg(e) {
  return mg(e);
}
function mg(e, t) {
  return e;
}
function uT(e) {
  return e;
}
function cT(e) {
  let t = !0;
  return t = t && "name" in e, t = t && "module" in e, t;
}
function ts(e) {
  return gg(e);
}
function gg(e, t) {
  return e == null ? e : {
    name: e.name,
    module: fg(e.module)
  };
}
function ns(e) {
  if (e !== void 0)
    return e === null ? null : {
      name: e.name,
      module: e.module
    };
}
function dT(e) {
  let t = !0;
  return t = t && "role_key" in e, t = t && "assignment" in e, t;
}
function yg(e) {
  return hg(e);
}
function hg(e, t) {
  return e == null ? e : {
    role_key: ts(e.role_key),
    assignment: cg(e.assignment),
    updater_roles: c(e, "updater_roles") ? e.updater_roles.map(ts) : void 0
  };
}
function vg(e) {
  if (e !== void 0)
    return e === null ? null : {
      role_key: ns(e.role_key),
      assignment: pg(e.assignment),
      updater_roles: e.updater_roles === void 0 ? void 0 : e.updater_roles.map(ns)
    };
}
function pT(e) {
  let t = !0;
  return t = t && "owner" in e, t = t && "entries" in e, t;
}
function qn(e) {
  return _g(e);
}
function _g(e, t) {
  return e == null ? e : {
    owner: e.owner,
    entries: e.entries.map(yg)
  };
}
function Bn(e) {
  if (e !== void 0)
    return e === null ? null : {
      owner: e.owner,
      entries: e.entries.map(vg)
    };
}
function fT(e) {
  return !0;
}
function mT(e) {
  return bg(e);
}
function bg(e, t) {
  return e == null ? e : {
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0
  };
}
function gT(e) {
  if (e !== void 0)
    return e === null ? null : {
      cursor: e.cursor,
      limit_per_page: e.limit_per_page
    };
}
const yT = {
  BoolArray: "BoolArray"
};
function hT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function vT(e) {
  return il(e);
}
function il(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Sg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const _T = {
  Bool: "Bool"
};
function bT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function ST(e) {
  return ol(e);
}
function ol(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Og(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const OT = {
  DecimalArray: "DecimalArray"
};
function NT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function AT(e) {
  return sl(e);
}
function sl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Ng(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const IT = {
  Decimal: "Decimal"
};
function wT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function xT(e) {
  return ll(e);
}
function ll(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Ag(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const TT = {
  GlobalAddressArray: "GlobalAddressArray"
};
function kT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function MT(e) {
  return ul(e);
}
function ul(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Ig(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const ET = {
  GlobalAddress: "GlobalAddress"
};
function CT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function DT(e) {
  return cl(e);
}
function cl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function wg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const PT = {
  I32Array: "I32Array"
};
function RT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function FT(e) {
  return dl(e);
}
function dl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function xg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const VT = {
  I32: "I32"
};
function jT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function JT(e) {
  return pl(e);
}
function pl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Tg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const LT = {
  I64Array: "I64Array"
};
function zT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function UT(e) {
  return fl(e);
}
function fl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function kg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const ZT = {
  I64: "I64"
};
function qT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function BT(e) {
  return ml(e);
}
function ml(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Mg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const GT = {
  InstantArray: "InstantArray"
};
function WT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function KT(e) {
  return gl(e);
}
function gl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Eg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const HT = {
  Instant: "Instant"
};
function YT(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function QT(e) {
  return yl(e);
}
function yl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Cg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
function XT(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_id" in e, t;
}
function hl(e) {
  return Dg(e);
}
function Dg(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_id: e.non_fungible_id
  };
}
function vl(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_id: e.non_fungible_id
    };
}
const $T = {
  NonFungibleGlobalIdArray: "NonFungibleGlobalIdArray"
};
function ek(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function tk(e) {
  return _l(e);
}
function _l(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values.map(hl)
  };
}
function Pg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values.map(vl)
    };
}
const nk = {
  NonFungibleGlobalId: "NonFungibleGlobalId"
};
function rk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "resource_address" in e, t = t && "non_fungible_id" in e, t;
}
function ak(e) {
  return bl(e);
}
function bl(e, t) {
  return e == null ? e : {
    type: e.type,
    resource_address: e.resource_address,
    non_fungible_id: e.non_fungible_id
  };
}
function Rg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      resource_address: e.resource_address,
      non_fungible_id: e.non_fungible_id
    };
}
const ik = {
  NonFungibleLocalIdArray: "NonFungibleLocalIdArray"
};
function ok(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function sk(e) {
  return Sl(e);
}
function Sl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Fg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const lk = {
  NonFungibleLocalId: "NonFungibleLocalId"
};
function uk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function ck(e) {
  return Ol(e);
}
function Ol(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Vg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const dk = {
  OriginArray: "OriginArray"
};
function pk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function fk(e) {
  return Nl(e);
}
function Nl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function jg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const mk = {
  Origin: "Origin"
};
function gk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function yk(e) {
  return Al(e);
}
function Al(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Jg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const hk = {
  EcdsaSecp256k1: "EcdsaSecp256k1"
};
function vk(e) {
  let t = !0;
  return t = t && "key_type" in e, t = t && "key_hex" in e, t;
}
function _k(e) {
  return Il(e);
}
function Il(e, t) {
  return e == null ? e : {
    key_type: e.key_type,
    key_hex: e.key_hex
  };
}
function Lg(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_type: e.key_type,
      key_hex: e.key_hex
    };
}
const bk = {
  EddsaEd25519: "EddsaEd25519"
};
function Sk(e) {
  let t = !0;
  return t = t && "key_type" in e, t = t && "key_hex" in e, t;
}
function Ok(e) {
  return wl(e);
}
function wl(e, t) {
  return e == null ? e : {
    key_type: e.key_type,
    key_hex: e.key_hex
  };
}
function zg(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_type: e.key_type,
      key_hex: e.key_hex
    };
}
function tn(e) {
  return Ug(e);
}
function Ug(e, t) {
  if (e == null)
    return e;
  switch (e.key_type) {
    case "EcdsaSecp256k1":
      return { ...Il(e), key_type: "EcdsaSecp256k1" };
    case "EddsaEd25519":
      return { ...wl(e), key_type: "EddsaEd25519" };
    default:
      throw new Error(`No variant of PublicKey exists with 'key_type=${e.key_type}'`);
  }
}
function nn(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.key_type) {
      case "EcdsaSecp256k1":
        return Lg(e);
      case "EddsaEd25519":
        return zg(e);
      default:
        throw new Error(`No variant of PublicKey exists with 'key_type=${e.key_type}'`);
    }
  }
}
const Nk = {
  PublicKeyArray: "PublicKeyArray"
};
function Ak(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function Ik(e) {
  return xl(e);
}
function xl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values.map(tn)
  };
}
function Zg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values.map(nn)
    };
}
const wk = {
  EcdsaSecp256k1: "EcdsaSecp256k1"
};
function xk(e) {
  let t = !0;
  return t = t && "key_hash_type" in e, t = t && "hash_hex" in e, t;
}
function Tk(e) {
  return Tl(e);
}
function Tl(e, t) {
  return e == null ? e : {
    key_hash_type: e.key_hash_type,
    hash_hex: e.hash_hex
  };
}
function qg(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hash_type: e.key_hash_type,
      hash_hex: e.hash_hex
    };
}
const kk = {
  EddsaEd25519: "EddsaEd25519"
};
function Mk(e) {
  let t = !0;
  return t = t && "key_hash_type" in e, t = t && "hash_hex" in e, t;
}
function Ek(e) {
  return kl(e);
}
function kl(e, t) {
  return e == null ? e : {
    key_hash_type: e.key_hash_type,
    hash_hex: e.hash_hex
  };
}
function Bg(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hash_type: e.key_hash_type,
      hash_hex: e.hash_hex
    };
}
function da(e) {
  return Gg(e);
}
function Gg(e, t) {
  if (e == null)
    return e;
  switch (e.key_hash_type) {
    case "EcdsaSecp256k1":
      return { ...Tl(e), key_hash_type: "EcdsaSecp256k1" };
    case "EddsaEd25519":
      return { ...kl(e), key_hash_type: "EddsaEd25519" };
    default:
      throw new Error(`No variant of PublicKeyHash exists with 'key_hash_type=${e.key_hash_type}'`);
  }
}
function pa(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.key_hash_type) {
      case "EcdsaSecp256k1":
        return qg(e);
      case "EddsaEd25519":
        return Bg(e);
      default:
        throw new Error(`No variant of PublicKeyHash exists with 'key_hash_type=${e.key_hash_type}'`);
    }
  }
}
const Ck = {
  PublicKeyHashArray: "PublicKeyHashArray"
};
function Dk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function Pk(e) {
  return Ml(e);
}
function Ml(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values.map(da)
  };
}
function Wg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values.map(pa)
    };
}
const Rk = {
  PublicKeyHash: "PublicKeyHash"
};
function Fk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function Vk(e) {
  return El(e);
}
function El(e, t) {
  return e == null ? e : {
    type: e.type,
    value: da(e.value)
  };
}
function Kg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: pa(e.value)
    };
}
const jk = {
  PublicKey: "PublicKey"
};
function Jk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function Lk(e) {
  return Cl(e);
}
function Cl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: tn(e.value)
  };
}
function Hg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: nn(e.value)
    };
}
const zk = {
  StringArray: "StringArray"
};
function Uk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function Zk(e) {
  return Dl(e);
}
function Dl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Yg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const qk = {
  String: "String"
};
function Bk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function Gk(e) {
  return Pl(e);
}
function Pl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function Qg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const Wk = {
  U32Array: "U32Array"
};
function Kk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function Hk(e) {
  return Rl(e);
}
function Rl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function Xg(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const Yk = {
  U32: "U32"
};
function Qk(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function Xk(e) {
  return Fl(e);
}
function Fl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function $g(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const $k = {
  U64Array: "U64Array"
};
function eM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function tM(e) {
  return Vl(e);
}
function Vl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function ey(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const nM = {
  U64: "U64"
};
function rM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function aM(e) {
  return jl(e);
}
function jl(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function ty(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const iM = {
  U8Array: "U8Array"
};
function oM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value_hex" in e, t;
}
function sM(e) {
  return Jl(e);
}
function Jl(e, t) {
  return e == null ? e : {
    type: e.type,
    value_hex: e.value_hex
  };
}
function ny(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value_hex: e.value_hex
    };
}
const lM = {
  U8: "U8"
};
function uM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function cM(e) {
  return Ll(e);
}
function Ll(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function ry(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
const dM = {
  UrlArray: "UrlArray"
};
function pM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "values" in e, t;
}
function fM(e) {
  return zl(e);
}
function zl(e, t) {
  return e == null ? e : {
    type: e.type,
    values: e.values
  };
}
function ay(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      values: e.values
    };
}
const mM = {
  Url: "Url"
};
function gM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "value" in e, t;
}
function yM(e) {
  return Ul(e);
}
function Ul(e, t) {
  return e == null ? e : {
    type: e.type,
    value: e.value
  };
}
function iy(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      value: e.value
    };
}
function Zl(e) {
  return oy(e);
}
function oy(e, t) {
  if (e == null)
    return e;
  switch (e.type) {
    case "Bool":
      return { ...ol(e), type: "Bool" };
    case "BoolArray":
      return { ...il(e), type: "BoolArray" };
    case "Decimal":
      return { ...ll(e), type: "Decimal" };
    case "DecimalArray":
      return { ...sl(e), type: "DecimalArray" };
    case "GlobalAddress":
      return { ...cl(e), type: "GlobalAddress" };
    case "GlobalAddressArray":
      return { ...ul(e), type: "GlobalAddressArray" };
    case "I32":
      return { ...pl(e), type: "I32" };
    case "I32Array":
      return { ...dl(e), type: "I32Array" };
    case "I64":
      return { ...ml(e), type: "I64" };
    case "I64Array":
      return { ...fl(e), type: "I64Array" };
    case "Instant":
      return { ...yl(e), type: "Instant" };
    case "InstantArray":
      return { ...gl(e), type: "InstantArray" };
    case "NonFungibleGlobalId":
      return { ...bl(e), type: "NonFungibleGlobalId" };
    case "NonFungibleGlobalIdArray":
      return { ..._l(e), type: "NonFungibleGlobalIdArray" };
    case "NonFungibleLocalId":
      return { ...Ol(e), type: "NonFungibleLocalId" };
    case "NonFungibleLocalIdArray":
      return { ...Sl(e), type: "NonFungibleLocalIdArray" };
    case "Origin":
      return { ...Al(e), type: "Origin" };
    case "OriginArray":
      return { ...Nl(e), type: "OriginArray" };
    case "PublicKey":
      return { ...Cl(e), type: "PublicKey" };
    case "PublicKeyArray":
      return { ...xl(e), type: "PublicKeyArray" };
    case "PublicKeyHash":
      return { ...El(e), type: "PublicKeyHash" };
    case "PublicKeyHashArray":
      return { ...Ml(e), type: "PublicKeyHashArray" };
    case "String":
      return { ...Pl(e), type: "String" };
    case "StringArray":
      return { ...Dl(e), type: "StringArray" };
    case "U32":
      return { ...Fl(e), type: "U32" };
    case "U32Array":
      return { ...Rl(e), type: "U32Array" };
    case "U64":
      return { ...jl(e), type: "U64" };
    case "U64Array":
      return { ...Vl(e), type: "U64Array" };
    case "U8":
      return { ...Ll(e), type: "U8" };
    case "U8Array":
      return { ...Jl(e), type: "U8Array" };
    case "Url":
      return { ...Ul(e), type: "Url" };
    case "UrlArray":
      return { ...zl(e), type: "UrlArray" };
    default:
      throw new Error(`No variant of MetadataTypedValue exists with 'type=${e.type}'`);
  }
}
function ql(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.type) {
      case "Bool":
        return Og(e);
      case "BoolArray":
        return Sg(e);
      case "Decimal":
        return Ag(e);
      case "DecimalArray":
        return Ng(e);
      case "GlobalAddress":
        return wg(e);
      case "GlobalAddressArray":
        return Ig(e);
      case "I32":
        return Tg(e);
      case "I32Array":
        return xg(e);
      case "I64":
        return Mg(e);
      case "I64Array":
        return kg(e);
      case "Instant":
        return Cg(e);
      case "InstantArray":
        return Eg(e);
      case "NonFungibleGlobalId":
        return Rg(e);
      case "NonFungibleGlobalIdArray":
        return Pg(e);
      case "NonFungibleLocalId":
        return Vg(e);
      case "NonFungibleLocalIdArray":
        return Fg(e);
      case "Origin":
        return Jg(e);
      case "OriginArray":
        return jg(e);
      case "PublicKey":
        return Hg(e);
      case "PublicKeyArray":
        return Zg(e);
      case "PublicKeyHash":
        return Kg(e);
      case "PublicKeyHashArray":
        return Wg(e);
      case "String":
        return Qg(e);
      case "StringArray":
        return Yg(e);
      case "U32":
        return $g(e);
      case "U32Array":
        return Xg(e);
      case "U64":
        return ty(e);
      case "U64Array":
        return ey(e);
      case "U8":
        return ry(e);
      case "U8Array":
        return ny(e);
      case "Url":
        return iy(e);
      case "UrlArray":
        return ay(e);
      default:
        throw new Error(`No variant of MetadataTypedValue exists with 'type=${e.type}'`);
    }
  }
}
function hM(e) {
  let t = !0;
  return t = t && "raw_hex" in e, t = t && "programmatic_json" in e, t = t && "typed" in e, t;
}
function sy(e) {
  return ly(e);
}
function ly(e, t) {
  return e == null ? e : {
    raw_hex: e.raw_hex,
    programmatic_json: Ue(e.programmatic_json),
    typed: Zl(e.typed)
  };
}
function uy(e) {
  if (e !== void 0)
    return e === null ? null : {
      raw_hex: e.raw_hex,
      programmatic_json: Ze(e.programmatic_json),
      typed: ql(e.typed)
    };
}
function vM(e) {
  let t = !0;
  return t = t && "key" in e, t = t && "value" in e, t = t && "is_locked" in e, t = t && "last_updated_at_state_version" in e, t;
}
function Ii(e) {
  return cy(e);
}
function cy(e, t) {
  return e == null ? e : {
    key: e.key,
    value: sy(e.value),
    is_locked: e.is_locked,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function wi(e) {
  if (e !== void 0)
    return e === null ? null : {
      key: e.key,
      value: uy(e.value),
      is_locked: e.is_locked,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function _M(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function _t(e) {
  return dy(e);
}
function dy(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Ii)
  };
}
function bt(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(wi)
    };
}
function bM(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function SM(e) {
  return py(e);
}
function py(e, t) {
  return e == null ? e : {
    items: e.items.map(Ii)
  };
}
function OM(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(wi)
    };
}
function NM(e) {
  let t = !0;
  return t = t && "typed" in e, t;
}
function AM(e) {
  return fy(e);
}
function fy(e, t) {
  return e == null ? e : {
    typed: Zl(e.typed)
  };
}
function IM(e) {
  if (e !== void 0)
    return e === null ? null : {
      typed: ql(e.typed)
    };
}
const wM = {
  EntityNotFoundError: "EntityNotFoundError"
};
function xM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "address" in e, t;
}
function TM(e) {
  return Bl(e);
}
function Bl(e, t) {
  return e == null ? e : {
    type: e.type,
    address: e.address
  };
}
function my(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      address: e.address
    };
}
const kM = {
  EntityNotFoundError: "EntityNotFoundError"
};
function MM(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function EM(e) {
  return gy(e);
}
function gy(e, t) {
  return e == null ? e : {
    address: e.address,
    type: c(e, "type") ? e.type : void 0
  };
}
function CM(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      type: e.type
    };
}
const DM = {
  InternalServerError: "InternalServerError"
};
function PM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "exception" in e, t = t && "cause" in e, t;
}
function RM(e) {
  return Gl(e);
}
function Gl(e, t) {
  return e == null ? e : {
    type: e.type,
    exception: e.exception,
    cause: e.cause
  };
}
function yy(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      exception: e.exception,
      cause: e.cause
    };
}
const FM = {
  InvalidEntityError: "InvalidEntityError"
};
function VM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "address" in e, t;
}
function jM(e) {
  return Wl(e);
}
function Wl(e, t) {
  return e == null ? e : {
    type: e.type,
    address: e.address
  };
}
function hy(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      address: e.address
    };
}
function JM(e) {
  let t = !0;
  return t = t && "path" in e, t = t && "errors" in e, t;
}
function Kl(e) {
  return vy(e);
}
function vy(e, t) {
  return e == null ? e : {
    path: e.path,
    errors: e.errors
  };
}
function Hl(e) {
  if (e !== void 0)
    return e === null ? null : {
      path: e.path,
      errors: e.errors
    };
}
const LM = {
  InvalidRequestError: "InvalidRequestError"
};
function zM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "validation_errors" in e, t;
}
function UM(e) {
  return Yl(e);
}
function Yl(e, t) {
  return e == null ? e : {
    type: e.type,
    validation_errors: e.validation_errors.map(Kl)
  };
}
function _y(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      validation_errors: e.validation_errors.map(Hl)
    };
}
const ZM = {
  InvalidTransactionError: "InvalidTransactionError"
};
function qM(e) {
  let t = !0;
  return t = t && "type" in e, t;
}
function BM(e) {
  return Ql(e);
}
function Ql(e, t) {
  return e == null ? e : {
    type: e.type
  };
}
function by(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type
    };
}
const GM = {
  NotSyncedUpError: "NotSyncedUpError"
};
function WM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "request_type" in e, t = t && "current_sync_delay_seconds" in e, t = t && "max_allowed_sync_delay_seconds" in e, t;
}
function KM(e) {
  return Xl(e);
}
function Xl(e, t) {
  return e == null ? e : {
    type: e.type,
    request_type: e.request_type,
    current_sync_delay_seconds: e.current_sync_delay_seconds,
    max_allowed_sync_delay_seconds: e.max_allowed_sync_delay_seconds
  };
}
function Sy(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      request_type: e.request_type,
      current_sync_delay_seconds: e.current_sync_delay_seconds,
      max_allowed_sync_delay_seconds: e.max_allowed_sync_delay_seconds
    };
}
const HM = {
  TransactionNotFoundError: "TransactionNotFoundError"
};
function YM(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "intent_hash" in e, t;
}
function QM(e) {
  return $l(e);
}
function $l(e, t) {
  return e == null ? e : {
    type: e.type,
    intent_hash: e.intent_hash
  };
}
function Oy(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      intent_hash: e.intent_hash
    };
}
function Ny(e) {
  return Ay(e);
}
function Ay(e, t) {
  if (e == null)
    return e;
  switch (e.type) {
    case "EntityNotFoundError":
      return { ...Bl(e), type: "EntityNotFoundError" };
    case "InternalServerError":
      return { ...Gl(e), type: "InternalServerError" };
    case "InvalidEntityError":
      return { ...Wl(e), type: "InvalidEntityError" };
    case "InvalidRequestError":
      return { ...Yl(e), type: "InvalidRequestError" };
    case "InvalidTransactionError":
      return { ...Ql(e), type: "InvalidTransactionError" };
    case "NotSyncedUpError":
      return { ...Xl(e), type: "NotSyncedUpError" };
    case "TransactionNotFoundError":
      return { ...$l(e), type: "TransactionNotFoundError" };
    default:
      throw new Error(`No variant of GatewayError exists with 'type=${e.type}'`);
  }
}
function Iy(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.type) {
      case "EntityNotFoundError":
        return my(e);
      case "InternalServerError":
        return yy(e);
      case "InvalidEntityError":
        return hy(e);
      case "InvalidRequestError":
        return _y(e);
      case "InvalidTransactionError":
        return by(e);
      case "NotSyncedUpError":
        return Sy(e);
      case "TransactionNotFoundError":
        return Oy(e);
      default:
        throw new Error(`No variant of GatewayError exists with 'type=${e.type}'`);
    }
  }
}
function XM(e) {
  let t = !0;
  return t = t && "message" in e, t;
}
function $M(e) {
  return wy(e);
}
function wy(e, t) {
  return e == null ? e : {
    message: e.message,
    code: c(e, "code") ? e.code : void 0,
    details: c(e, "details") ? Ny(e.details) : void 0,
    trace_id: c(e, "trace_id") ? e.trace_id : void 0
  };
}
function eE(e) {
  if (e !== void 0)
    return e === null ? null : {
      message: e.message,
      code: e.code,
      details: Iy(e.details),
      trace_id: e.trace_id
    };
}
function tE(e) {
  return !0;
}
function nE(e) {
  return xy(e);
}
function xy(e, t) {
  return e == null ? e : {
    from_ledger_state: c(e, "from_ledger_state") ? ye(e.from_ledger_state) : void 0
  };
}
function rE(e) {
  if (e !== void 0)
    return e === null ? null : {
      from_ledger_state: he(e.from_ledger_state)
    };
}
const aE = {
  Global: "Global"
};
function iE(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t = t && "amount" in e, t = t && "last_updated_at_state_version" in e, t;
}
function oE(e) {
  return eu(e);
}
function eu(e, t) {
  return e == null ? e : {
    aggregation_level: e.aggregation_level,
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0,
    amount: e.amount,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function Ty(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata),
      amount: e.amount,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function sE(e) {
  let t = !0;
  return t = t && "vault_address" in e, t = t && "amount" in e, t = t && "last_updated_at_state_version" in e, t;
}
function Ir(e) {
  return ky(e);
}
function ky(e, t) {
  return e == null ? e : {
    vault_address: e.vault_address,
    amount: e.amount,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function wr(e) {
  if (e !== void 0)
    return e === null ? null : {
      vault_address: e.vault_address,
      amount: e.amount,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function lE(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function tu(e) {
  return My(e);
}
function My(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Ir)
  };
}
function nu(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(wr)
    };
}
const uE = {
  Vault: "Vault"
};
function cE(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t = t && "vaults" in e, t;
}
function dE(e) {
  return ru(e);
}
function ru(e, t) {
  return e == null ? e : {
    aggregation_level: e.aggregation_level,
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0,
    vaults: tu(e.vaults)
  };
}
function Ey(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata),
      vaults: nu(e.vaults)
    };
}
function xi(e) {
  return Cy(e);
}
function Cy(e, t) {
  if (e == null)
    return e;
  switch (e.aggregation_level) {
    case "Global":
      return { ...eu(e), aggregation_level: "Global" };
    case "Vault":
      return { ...ru(e), aggregation_level: "Vault" };
    default:
      throw new Error(`No variant of FungibleResourcesCollectionItem exists with 'aggregation_level=${e.aggregation_level}'`);
  }
}
function Ti(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.aggregation_level) {
      case "Global":
        return Ty(e);
      case "Vault":
        return Ey(e);
      default:
        throw new Error(`No variant of FungibleResourcesCollectionItem exists with 'aggregation_level=${e.aggregation_level}'`);
    }
  }
}
function pE(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function Dy(e) {
  return Py(e);
}
function Py(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(xi)
  };
}
function Ry(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Ti)
    };
}
function fE(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function mE(e) {
  return Fy(e);
}
function Fy(e, t) {
  return e == null ? e : {
    items: e.items.map(xi)
  };
}
function gE(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Ti)
    };
}
const Vy = {
  Global: "Global",
  Vault: "Vault"
};
function Jt(e) {
  return jy(e);
}
function jy(e, t) {
  return e;
}
function yE(e) {
  return e;
}
function hE(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t;
}
function vE(e) {
  return Jy(e);
}
function Jy(e, t) {
  return e == null ? e : {
    aggregation_level: Jt(e.aggregation_level),
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0
  };
}
function _E(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata)
    };
}
const bE = {
  Global: "Global"
};
function SE(e) {
  let t = !0;
  return t = t && "amount" in e, t = t && "last_updated_at_state_version" in e, t;
}
function OE(e) {
  return Ly(e);
}
function Ly(e, t) {
  return e == null ? e : {
    amount: e.amount,
    last_updated_at_state_version: e.last_updated_at_state_version,
    aggregation_level: c(e, "aggregation_level") ? e.aggregation_level : void 0
  };
}
function NE(e) {
  if (e !== void 0)
    return e === null ? null : {
      amount: e.amount,
      last_updated_at_state_version: e.last_updated_at_state_version,
      aggregation_level: e.aggregation_level
    };
}
const AE = {
  Vault: "Vault"
};
function IE(e) {
  let t = !0;
  return t = t && "vaults" in e, t;
}
function wE(e) {
  return zy(e);
}
function zy(e, t) {
  return e == null ? e : {
    vaults: tu(e.vaults),
    aggregation_level: c(e, "aggregation_level") ? e.aggregation_level : void 0
  };
}
function xE(e) {
  if (e !== void 0)
    return e === null ? null : {
      vaults: nu(e.vaults),
      aggregation_level: e.aggregation_level
    };
}
function TE(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function kE(e) {
  return Uy(e);
}
function Uy(e, t) {
  return e == null ? e : {
    items: e.items.map(Ir)
  };
}
function ME(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(wr)
    };
}
function EE(e) {
  let t = !0;
  return t = t && "type" in e, t;
}
function CE(e) {
  return Zy(e);
}
function Zy(e, t) {
  return e == null ? e : {
    type: e.type
  };
}
function DE(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type
    };
}
function PE(e) {
  let t = !0;
  return t = t && "state_version" in e, t;
}
function RE(e) {
  return qy(e);
}
function qy(e, t) {
  return e == null ? e : {
    state_version: e.state_version
  };
}
function FE(e) {
  if (e !== void 0)
    return e === null ? null : {
      state_version: e.state_version
    };
}
function VE(e) {
  let t = !0;
  return t = t && "release_version" in e, t = t && "open_api_schema_version" in e, t = t && "image_tag" in e, t;
}
function au(e) {
  return By(e);
}
function By(e, t) {
  return e == null ? e : {
    release_version: e.release_version,
    open_api_schema_version: e.open_api_schema_version,
    image_tag: e.image_tag
  };
}
function iu(e) {
  if (e !== void 0)
    return e === null ? null : {
      release_version: e.release_version,
      open_api_schema_version: e.open_api_schema_version,
      image_tag: e.image_tag
    };
}
function jE(e) {
  let t = !0;
  return t = t && "network" in e, t = t && "state_version" in e, t = t && "proposer_round_timestamp" in e, t = t && "epoch" in e, t = t && "round" in e, t;
}
function ve(e) {
  return Gy(e);
}
function Gy(e, t) {
  return e == null ? e : {
    network: e.network,
    state_version: e.state_version,
    proposer_round_timestamp: e.proposer_round_timestamp,
    epoch: e.epoch,
    round: e.round
  };
}
function _e(e) {
  if (e !== void 0)
    return e === null ? null : {
      network: e.network,
      state_version: e.state_version,
      proposer_round_timestamp: e.proposer_round_timestamp,
      epoch: e.epoch,
      round: e.round
    };
}
function JE(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "release_info" in e, t;
}
function Wy(e) {
  return Ky(e);
}
function Ky(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    release_info: au(e.release_info)
  };
}
function LE(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      release_info: iu(e.release_info)
    };
}
function zE(e) {
  let t = !0;
  return t = t && "release_info" in e, t;
}
function UE(e) {
  return Hy(e);
}
function Hy(e, t) {
  return e == null ? e : {
    release_info: au(e.release_info)
  };
}
function ZE(e) {
  if (e !== void 0)
    return e === null ? null : {
      release_info: iu(e.release_info)
    };
}
const qE = {
  InternalServerError: "InternalServerError"
};
function BE(e) {
  let t = !0;
  return t = t && "exception" in e, t = t && "cause" in e, t;
}
function GE(e) {
  return Yy(e);
}
function Yy(e, t) {
  return e == null ? e : {
    exception: e.exception,
    cause: e.cause,
    type: c(e, "type") ? e.type : void 0
  };
}
function WE(e) {
  if (e !== void 0)
    return e === null ? null : {
      exception: e.exception,
      cause: e.cause,
      type: e.type
    };
}
const KE = {
  InvalidEntityError: "InvalidEntityError"
};
function HE(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function YE(e) {
  return Qy(e);
}
function Qy(e, t) {
  return e == null ? e : {
    address: e.address,
    type: c(e, "type") ? e.type : void 0
  };
}
function QE(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      type: e.type
    };
}
const XE = {
  InvalidRequestError: "InvalidRequestError"
};
function $E(e) {
  let t = !0;
  return t = t && "validation_errors" in e, t;
}
function eC(e) {
  return Xy(e);
}
function Xy(e, t) {
  return e == null ? e : {
    validation_errors: e.validation_errors.map(Kl),
    type: c(e, "type") ? e.type : void 0
  };
}
function tC(e) {
  if (e !== void 0)
    return e === null ? null : {
      validation_errors: e.validation_errors.map(Hl),
      type: e.type
    };
}
const nC = {
  InvalidTransactionError: "InvalidTransactionError"
};
function rC(e) {
  return !0;
}
function aC(e) {
  return $y(e);
}
function $y(e, t) {
  return e == null ? e : {
    type: c(e, "type") ? e.type : void 0
  };
}
function iC(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type
    };
}
function oC(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t;
}
function sC(e) {
  return eh(e);
}
function eh(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state)
  };
}
function lC(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state)
    };
}
const uC = {
  BoolArray: "BoolArray"
};
function cC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function dC(e) {
  return th(e);
}
function th(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function pC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const fC = {
  Bool: "Bool"
};
function mC(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function gC(e) {
  return nh(e);
}
function nh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function yC(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const hC = {
  DecimalArray: "DecimalArray"
};
function vC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function _C(e) {
  return rh(e);
}
function rh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function bC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const SC = {
  Decimal: "Decimal"
};
function OC(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function NC(e) {
  return ah(e);
}
function ah(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function AC(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const IC = {
  GlobalAddressArray: "GlobalAddressArray"
};
function wC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function xC(e) {
  return ih(e);
}
function ih(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function TC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const kC = {
  GlobalAddress: "GlobalAddress"
};
function MC(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function EC(e) {
  return oh(e);
}
function oh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function CC(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const DC = {
  I32Array: "I32Array"
};
function PC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function RC(e) {
  return sh(e);
}
function sh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function FC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const VC = {
  I32: "I32"
};
function jC(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function JC(e) {
  return lh(e);
}
function lh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function LC(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const zC = {
  I64Array: "I64Array"
};
function UC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function ZC(e) {
  return uh(e);
}
function uh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function qC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const BC = {
  I64: "I64"
};
function GC(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function WC(e) {
  return ch(e);
}
function ch(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function KC(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const HC = {
  InstantArray: "InstantArray"
};
function YC(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function QC(e) {
  return dh(e);
}
function dh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function XC(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const $C = {
  Instant: "Instant"
};
function eD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function tD(e) {
  return ph(e);
}
function ph(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function nD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const rD = {
  NonFungibleGlobalIdArray: "NonFungibleGlobalIdArray"
};
function aD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function iD(e) {
  return fh(e);
}
function fh(e, t) {
  return e == null ? e : {
    values: e.values.map(hl),
    type: c(e, "type") ? e.type : void 0
  };
}
function oD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values.map(vl),
      type: e.type
    };
}
const sD = {
  NonFungibleGlobalId: "NonFungibleGlobalId"
};
function lD(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_id" in e, t;
}
function uD(e) {
  return mh(e);
}
function mh(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_id: e.non_fungible_id,
    type: c(e, "type") ? e.type : void 0
  };
}
function cD(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_id: e.non_fungible_id,
      type: e.type
    };
}
const dD = {
  NonFungibleLocalIdArray: "NonFungibleLocalIdArray"
};
function pD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function fD(e) {
  return gh(e);
}
function gh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function mD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const gD = {
  NonFungibleLocalId: "NonFungibleLocalId"
};
function yD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function hD(e) {
  return yh(e);
}
function yh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function vD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const _D = {
  OriginArray: "OriginArray"
};
function bD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function SD(e) {
  return hh(e);
}
function hh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function OD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const ND = {
  Origin: "Origin"
};
function AD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function ID(e) {
  return vh(e);
}
function vh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function wD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const xD = {
  PublicKeyArray: "PublicKeyArray"
};
function TD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function kD(e) {
  return _h(e);
}
function _h(e, t) {
  return e == null ? e : {
    values: e.values.map(tn),
    type: c(e, "type") ? e.type : void 0
  };
}
function MD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values.map(nn),
      type: e.type
    };
}
const ED = {
  PublicKeyHashArray: "PublicKeyHashArray"
};
function CD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function DD(e) {
  return bh(e);
}
function bh(e, t) {
  return e == null ? e : {
    values: e.values.map(da),
    type: c(e, "type") ? e.type : void 0
  };
}
function PD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values.map(pa),
      type: e.type
    };
}
const RD = {
  PublicKeyHash: "PublicKeyHash"
};
function FD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function VD(e) {
  return Sh(e);
}
function Sh(e, t) {
  return e == null ? e : {
    value: da(e.value),
    type: c(e, "type") ? e.type : void 0
  };
}
function jD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: pa(e.value),
      type: e.type
    };
}
const JD = {
  PublicKey: "PublicKey"
};
function LD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function zD(e) {
  return Oh(e);
}
function Oh(e, t) {
  return e == null ? e : {
    value: tn(e.value),
    type: c(e, "type") ? e.type : void 0
  };
}
function UD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: nn(e.value),
      type: e.type
    };
}
const ZD = {
  StringArray: "StringArray"
};
function qD(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function BD(e) {
  return Nh(e);
}
function Nh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function GD(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const WD = {
  String: "String"
};
function KD(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function HD(e) {
  return Ah(e);
}
function Ah(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function YD(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const QD = {
  String: "String",
  Bool: "Bool",
  U8: "U8",
  U32: "U32",
  U64: "U64",
  I32: "I32",
  I64: "I64",
  Decimal: "Decimal",
  GlobalAddress: "GlobalAddress",
  PublicKey: "PublicKey",
  NonFungibleGlobalId: "NonFungibleGlobalId",
  NonFungibleLocalId: "NonFungibleLocalId",
  Instant: "Instant",
  Url: "Url",
  Origin: "Origin",
  PublicKeyHash: "PublicKeyHash",
  StringArray: "StringArray",
  BoolArray: "BoolArray",
  U8Array: "U8Array",
  U32Array: "U32Array",
  U64Array: "U64Array",
  I32Array: "I32Array",
  I64Array: "I64Array",
  DecimalArray: "DecimalArray",
  GlobalAddressArray: "GlobalAddressArray",
  PublicKeyArray: "PublicKeyArray",
  NonFungibleGlobalIdArray: "NonFungibleGlobalIdArray",
  NonFungibleLocalIdArray: "NonFungibleLocalIdArray",
  InstantArray: "InstantArray",
  UrlArray: "UrlArray",
  OriginArray: "OriginArray",
  PublicKeyHashArray: "PublicKeyHashArray"
};
function Ih(e) {
  return wh(e);
}
function wh(e, t) {
  return e;
}
function XD(e) {
  return e;
}
function $D(e) {
  let t = !0;
  return t = t && "type" in e, t;
}
function eP(e) {
  return xh(e);
}
function xh(e, t) {
  return e == null ? e : {
    type: Ih(e.type)
  };
}
function tP(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type
    };
}
const nP = {
  U32Array: "U32Array"
};
function rP(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function aP(e) {
  return Th(e);
}
function Th(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function iP(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const oP = {
  U32: "U32"
};
function sP(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function lP(e) {
  return kh(e);
}
function kh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function uP(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const cP = {
  U64Array: "U64Array"
};
function dP(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function pP(e) {
  return Mh(e);
}
function Mh(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function fP(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const mP = {
  U64: "U64"
};
function gP(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function yP(e) {
  return Eh(e);
}
function Eh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function hP(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const vP = {
  U8Array: "U8Array"
};
function _P(e) {
  let t = !0;
  return t = t && "value_hex" in e, t;
}
function bP(e) {
  return Ch(e);
}
function Ch(e, t) {
  return e == null ? e : {
    value_hex: e.value_hex,
    type: c(e, "type") ? e.type : void 0
  };
}
function SP(e) {
  if (e !== void 0)
    return e === null ? null : {
      value_hex: e.value_hex,
      type: e.type
    };
}
const OP = {
  U8: "U8"
};
function NP(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function AP(e) {
  return Dh(e);
}
function Dh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function IP(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
const wP = {
  UrlArray: "UrlArray"
};
function xP(e) {
  let t = !0;
  return t = t && "values" in e, t;
}
function TP(e) {
  return Ph(e);
}
function Ph(e, t) {
  return e == null ? e : {
    values: e.values,
    type: c(e, "type") ? e.type : void 0
  };
}
function kP(e) {
  if (e !== void 0)
    return e === null ? null : {
      values: e.values,
      type: e.type
    };
}
const MP = {
  Url: "Url"
};
function EP(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function CP(e) {
  return Rh(e);
}
function Rh(e, t) {
  return e == null ? e : {
    value: e.value,
    type: c(e, "type") ? e.type : void 0
  };
}
function DP(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      type: e.type
    };
}
function PP(e) {
  let t = !0;
  return t = t && "xrd" in e, t = t && "secp256k1_signature_virtual_badge" in e, t = t && "ed25519_signature_virtual_badge" in e, t = t && "package_of_direct_caller_virtual_badge" in e, t = t && "global_caller_virtual_badge" in e, t = t && "system_transaction_badge" in e, t = t && "package_owner_badge" in e, t = t && "validator_owner_badge" in e, t = t && "account_owner_badge" in e, t = t && "identity_owner_badge" in e, t = t && "package_package" in e, t = t && "resource_package" in e, t = t && "account_package" in e, t = t && "identity_package" in e, t = t && "consensus_manager_package" in e, t = t && "access_controller_package" in e, t = t && "transaction_processor_package" in e, t = t && "metadata_module_package" in e, t = t && "royalty_module_package" in e, t = t && "access_rules_package" in e, t = t && "genesis_helper_package" in e, t = t && "faucet_package" in e, t = t && "consensus_manager" in e, t = t && "genesis_helper" in e, t = t && "faucet" in e, t = t && "pool_package" in e, t;
}
function Fh(e) {
  return Vh(e);
}
function Vh(e, t) {
  return e == null ? e : {
    xrd: e.xrd,
    secp256k1_signature_virtual_badge: e.secp256k1_signature_virtual_badge,
    ed25519_signature_virtual_badge: e.ed25519_signature_virtual_badge,
    package_of_direct_caller_virtual_badge: e.package_of_direct_caller_virtual_badge,
    global_caller_virtual_badge: e.global_caller_virtual_badge,
    system_transaction_badge: e.system_transaction_badge,
    package_owner_badge: e.package_owner_badge,
    validator_owner_badge: e.validator_owner_badge,
    account_owner_badge: e.account_owner_badge,
    identity_owner_badge: e.identity_owner_badge,
    package_package: e.package_package,
    resource_package: e.resource_package,
    account_package: e.account_package,
    identity_package: e.identity_package,
    consensus_manager_package: e.consensus_manager_package,
    access_controller_package: e.access_controller_package,
    transaction_processor_package: e.transaction_processor_package,
    metadata_module_package: e.metadata_module_package,
    royalty_module_package: e.royalty_module_package,
    access_rules_package: e.access_rules_package,
    genesis_helper_package: e.genesis_helper_package,
    faucet_package: e.faucet_package,
    consensus_manager: e.consensus_manager,
    genesis_helper: e.genesis_helper,
    faucet: e.faucet,
    pool_package: e.pool_package
  };
}
function jh(e) {
  if (e !== void 0)
    return e === null ? null : {
      xrd: e.xrd,
      secp256k1_signature_virtual_badge: e.secp256k1_signature_virtual_badge,
      ed25519_signature_virtual_badge: e.ed25519_signature_virtual_badge,
      package_of_direct_caller_virtual_badge: e.package_of_direct_caller_virtual_badge,
      global_caller_virtual_badge: e.global_caller_virtual_badge,
      system_transaction_badge: e.system_transaction_badge,
      package_owner_badge: e.package_owner_badge,
      validator_owner_badge: e.validator_owner_badge,
      account_owner_badge: e.account_owner_badge,
      identity_owner_badge: e.identity_owner_badge,
      package_package: e.package_package,
      resource_package: e.resource_package,
      account_package: e.account_package,
      identity_package: e.identity_package,
      consensus_manager_package: e.consensus_manager_package,
      access_controller_package: e.access_controller_package,
      transaction_processor_package: e.transaction_processor_package,
      metadata_module_package: e.metadata_module_package,
      royalty_module_package: e.royalty_module_package,
      access_rules_package: e.access_rules_package,
      genesis_helper_package: e.genesis_helper_package,
      faucet_package: e.faucet_package,
      consensus_manager: e.consensus_manager,
      genesis_helper: e.genesis_helper,
      faucet: e.faucet,
      pool_package: e.pool_package
    };
}
function RP(e) {
  let t = !0;
  return t = t && "network_id" in e, t = t && "network_name" in e, t = t && "well_known_addresses" in e, t;
}
function Jh(e) {
  return Lh(e);
}
function Lh(e, t) {
  return e == null ? e : {
    network_id: e.network_id,
    network_name: e.network_name,
    well_known_addresses: Fh(e.well_known_addresses)
  };
}
function FP(e) {
  if (e !== void 0)
    return e === null ? null : {
      network_id: e.network_id,
      network_name: e.network_name,
      well_known_addresses: jh(e.well_known_addresses)
    };
}
const VP = {
  String: "String",
  Integer: "Integer",
  Bytes: "Bytes",
  Ruid: "Ruid"
};
function fa(e) {
  return zh(e);
}
function zh(e, t) {
  return e;
}
function jP(e) {
  return e;
}
function JP(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function ou(e) {
  return Uh(e);
}
function Uh(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items
  };
}
function su(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items
    };
}
function LP(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function zP(e) {
  return Zh(e);
}
function Zh(e, t) {
  return e == null ? e : {
    items: e.items
  };
}
function UP(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items
    };
}
const ZP = {
  Global: "Global"
};
function qP(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t = t && "amount" in e, t = t && "last_updated_at_state_version" in e, t;
}
function BP(e) {
  return lu(e);
}
function lu(e, t) {
  return e == null ? e : {
    aggregation_level: e.aggregation_level,
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0,
    amount: e.amount,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function qh(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata),
      amount: e.amount,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function GP(e) {
  let t = !0;
  return t = t && "total_count" in e, t = t && "vault_address" in e, t = t && "last_updated_at_state_version" in e, t;
}
function xr(e) {
  return Bh(e);
}
function Bh(e, t) {
  return e == null ? e : {
    total_count: e.total_count,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: c(e, "items") ? e.items : void 0,
    vault_address: e.vault_address,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function Tr(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items,
      vault_address: e.vault_address,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function WP(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function uu(e) {
  return Gh(e);
}
function Gh(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(xr)
  };
}
function cu(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Tr)
    };
}
const KP = {
  Vault: "Vault"
};
function HP(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t = t && "vaults" in e, t;
}
function YP(e) {
  return du(e);
}
function du(e, t) {
  return e == null ? e : {
    aggregation_level: e.aggregation_level,
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0,
    vaults: uu(e.vaults)
  };
}
function Wh(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata),
      vaults: cu(e.vaults)
    };
}
function ki(e) {
  return Kh(e);
}
function Kh(e, t) {
  if (e == null)
    return e;
  switch (e.aggregation_level) {
    case "Global":
      return { ...lu(e), aggregation_level: "Global" };
    case "Vault":
      return { ...du(e), aggregation_level: "Vault" };
    default:
      throw new Error(`No variant of NonFungibleResourcesCollectionItem exists with 'aggregation_level=${e.aggregation_level}'`);
  }
}
function Mi(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.aggregation_level) {
      case "Global":
        return qh(e);
      case "Vault":
        return Wh(e);
      default:
        throw new Error(`No variant of NonFungibleResourcesCollectionItem exists with 'aggregation_level=${e.aggregation_level}'`);
    }
  }
}
function QP(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function Hh(e) {
  return Yh(e);
}
function Yh(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(ki)
  };
}
function Qh(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Mi)
    };
}
function XP(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function $P(e) {
  return Xh(e);
}
function Xh(e, t) {
  return e == null ? e : {
    items: e.items.map(ki)
  };
}
function e1(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Mi)
    };
}
function t1(e) {
  let t = !0;
  return t = t && "aggregation_level" in e, t = t && "resource_address" in e, t;
}
function n1(e) {
  return $h(e);
}
function $h(e, t) {
  return e == null ? e : {
    aggregation_level: Jt(e.aggregation_level),
    resource_address: e.resource_address,
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0
  };
}
function r1(e) {
  if (e !== void 0)
    return e === null ? null : {
      aggregation_level: e.aggregation_level,
      resource_address: e.resource_address,
      explicit_metadata: bt(e.explicit_metadata)
    };
}
const a1 = {
  Global: "Global"
};
function i1(e) {
  let t = !0;
  return t = t && "amount" in e, t = t && "last_updated_at_state_version" in e, t;
}
function o1(e) {
  return ev(e);
}
function ev(e, t) {
  return e == null ? e : {
    amount: e.amount,
    last_updated_at_state_version: e.last_updated_at_state_version,
    aggregation_level: c(e, "aggregation_level") ? e.aggregation_level : void 0
  };
}
function s1(e) {
  if (e !== void 0)
    return e === null ? null : {
      amount: e.amount,
      last_updated_at_state_version: e.last_updated_at_state_version,
      aggregation_level: e.aggregation_level
    };
}
const l1 = {
  Vault: "Vault"
};
function u1(e) {
  let t = !0;
  return t = t && "vaults" in e, t;
}
function c1(e) {
  return tv(e);
}
function tv(e, t) {
  return e == null ? e : {
    vaults: uu(e.vaults),
    aggregation_level: c(e, "aggregation_level") ? e.aggregation_level : void 0
  };
}
function d1(e) {
  if (e !== void 0)
    return e === null ? null : {
      vaults: cu(e.vaults),
      aggregation_level: e.aggregation_level
    };
}
function p1(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function f1(e) {
  return nv(e);
}
function nv(e, t) {
  return e == null ? e : {
    items: e.items.map(xr)
  };
}
function m1(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Tr)
    };
}
function g1(e) {
  let t = !0;
  return t = t && "vault_address" in e, t = t && "total_count" in e, t = t && "last_updated_at_state_version" in e, t;
}
function y1(e) {
  return rv(e);
}
function rv(e, t) {
  return e == null ? e : {
    vault_address: e.vault_address,
    total_count: e.total_count,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function h1(e) {
  if (e !== void 0)
    return e === null ? null : {
      vault_address: e.vault_address,
      total_count: e.total_count,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
const v1 = {
  NotSyncedUpError: "NotSyncedUpError"
};
function _1(e) {
  let t = !0;
  return t = t && "request_type" in e, t = t && "current_sync_delay_seconds" in e, t = t && "max_allowed_sync_delay_seconds" in e, t;
}
function b1(e) {
  return av(e);
}
function av(e, t) {
  return e == null ? e : {
    request_type: e.request_type,
    current_sync_delay_seconds: e.current_sync_delay_seconds,
    max_allowed_sync_delay_seconds: e.max_allowed_sync_delay_seconds,
    type: c(e, "type") ? e.type : void 0
  };
}
function S1(e) {
  if (e !== void 0)
    return e === null ? null : {
      request_type: e.request_type,
      current_sync_delay_seconds: e.current_sync_delay_seconds,
      max_allowed_sync_delay_seconds: e.max_allowed_sync_delay_seconds,
      type: e.type
    };
}
function O1(e) {
  return !0;
}
function N1(e) {
  return iv(e);
}
function iv(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: c(e, "items") ? e.items : void 0
  };
}
function A1(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items
    };
}
function I1(e) {
  return !0;
}
function w1(e) {
  return ov(e);
}
function ov(e, t) {
  return e == null ? e : {
    items: c(e, "items") ? e.items : void 0
  };
}
function x1(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items
    };
}
const T1 = {
  Native: "Native",
  ScryptoV1: "ScryptoV1"
};
function pu(e) {
  return sv(e);
}
function sv(e, t) {
  return e;
}
function k1(e) {
  return e;
}
const M1 = {
  Array: "Array"
};
function E1(e) {
  let t = !0;
  return t = t && "element_kind" in e, t = t && "elements" in e, t;
}
function C1(e) {
  return lv(e);
}
function lv(e, t) {
  return e == null ? e : {
    element_kind: vt(e.element_kind),
    element_type_name: c(e, "element_type_name") ? e.element_type_name : void 0,
    elements: e.elements.map(Ue),
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function D1(e) {
  if (e !== void 0)
    return e === null ? null : {
      element_kind: e.element_kind,
      element_type_name: e.element_type_name,
      elements: e.elements.map(Ze),
      kind: e.kind
    };
}
function P1(e) {
  let t = !0;
  return t = t && "kind" in e, t;
}
function R1(e) {
  return uv(e);
}
function uv(e, t) {
  return e == null ? e : {
    kind: vt(e.kind),
    type_name: c(e, "type_name") ? e.type_name : void 0,
    field_name: c(e, "field_name") ? e.field_name : void 0
  };
}
function F1(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind: e.kind,
      type_name: e.type_name,
      field_name: e.field_name
    };
}
const V1 = {
  Bool: "Bool"
};
function j1(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function J1(e) {
  return cv(e);
}
function cv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function L1(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const z1 = {
  Bytes: "Bytes"
};
function U1(e) {
  let t = !0;
  return t = t && "element_kind" in e, t = t && "hex" in e, t;
}
function Z1(e) {
  return dv(e);
}
function dv(e, t) {
  return e == null ? e : {
    element_kind: vt(e.element_kind),
    element_type_name: c(e, "element_type_name") ? e.element_type_name : void 0,
    hex: e.hex,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function q1(e) {
  if (e !== void 0)
    return e === null ? null : {
      element_kind: e.element_kind,
      element_type_name: e.element_type_name,
      hex: e.hex,
      kind: e.kind
    };
}
const B1 = {
  Decimal: "Decimal"
};
function G1(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function W1(e) {
  return pv(e);
}
function pv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function K1(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const H1 = {
  Enum: "Enum"
};
function Y1(e) {
  let t = !0;
  return t = t && "variant_id" in e, t = t && "fields" in e, t;
}
function Q1(e) {
  return fv(e);
}
function fv(e, t) {
  return e == null ? e : {
    variant_id: e.variant_id,
    variant_name: c(e, "variant_name") ? e.variant_name : void 0,
    fields: e.fields.map(Ue),
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function X1(e) {
  if (e !== void 0)
    return e === null ? null : {
      variant_id: e.variant_id,
      variant_name: e.variant_name,
      fields: e.fields.map(Ze),
      kind: e.kind
    };
}
const $1 = {
  I128: "I128"
};
function eR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function tR(e) {
  return mv(e);
}
function mv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function nR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const rR = {
  I16: "I16"
};
function aR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function iR(e) {
  return gv(e);
}
function gv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function oR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const sR = {
  I32: "I32"
};
function lR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function uR(e) {
  return yv(e);
}
function yv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function cR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const dR = {
  I64: "I64"
};
function pR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function fR(e) {
  return hv(e);
}
function hv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function mR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const gR = {
  I8: "I8"
};
function yR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function hR(e) {
  return vv(e);
}
function vv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function vR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const _R = {
  Map: "Map"
};
function bR(e) {
  let t = !0;
  return t = t && "key_kind" in e, t = t && "value_kind" in e, t = t && "entries" in e, t;
}
function SR(e) {
  return _v(e);
}
function _v(e, t) {
  return e == null ? e : {
    key_kind: vt(e.key_kind),
    key_type_name: c(e, "key_type_name") ? e.key_type_name : void 0,
    value_kind: vt(e.value_kind),
    value_type_name: c(e, "value_type_name") ? e.value_type_name : void 0,
    entries: e.entries.map(Bs),
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function OR(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_kind: e.key_kind,
      key_type_name: e.key_type_name,
      value_kind: e.value_kind,
      value_type_name: e.value_type_name,
      entries: e.entries.map(Gs),
      kind: e.kind
    };
}
const NR = {
  NonFungibleLocalId: "NonFungibleLocalId"
};
function AR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function IR(e) {
  return bv(e);
}
function bv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function wR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const xR = {
  Own: "Own"
};
function TR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function kR(e) {
  return Sv(e);
}
function Sv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function MR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const ER = {
  PreciseDecimal: "PreciseDecimal"
};
function CR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function DR(e) {
  return Ov(e);
}
function Ov(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function PR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const RR = {
  Reference: "Reference"
};
function FR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function VR(e) {
  return Nv(e);
}
function Nv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function jR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const JR = {
  String: "String"
};
function LR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function zR(e) {
  return Av(e);
}
function Av(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function UR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const ZR = {
  Tuple: "Tuple"
};
function qR(e) {
  let t = !0;
  return t = t && "fields" in e, t;
}
function BR(e) {
  return Iv(e);
}
function Iv(e, t) {
  return e == null ? e : {
    fields: e.fields.map(Ue),
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function GR(e) {
  if (e !== void 0)
    return e === null ? null : {
      fields: e.fields.map(Ze),
      kind: e.kind
    };
}
const WR = {
  U128: "U128"
};
function KR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function HR(e) {
  return wv(e);
}
function wv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function YR(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const QR = {
  U16: "U16"
};
function XR(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function $R(e) {
  return xv(e);
}
function xv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function eF(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const tF = {
  U32: "U32"
};
function nF(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function rF(e) {
  return Tv(e);
}
function Tv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function aF(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const iF = {
  U64: "U64"
};
function oF(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function sF(e) {
  return kv(e);
}
function kv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function lF(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const uF = {
  U8: "U8"
};
function cF(e) {
  let t = !0;
  return t = t && "value" in e, t;
}
function dF(e) {
  return Mv(e);
}
function Mv(e, t) {
  return e == null ? e : {
    value: e.value,
    kind: c(e, "kind") ? e.kind : void 0
  };
}
function pF(e) {
  if (e !== void 0)
    return e === null ? null : {
      value: e.value,
      kind: e.kind
    };
}
const fF = {
  EcdsaSecp256k1: "EcdsaSecp256k1",
  EddsaEd25519: "EddsaEd25519"
};
function Ev(e) {
  return Cv(e);
}
function Cv(e, t) {
  return e;
}
function mF(e) {
  return e;
}
function gF(e) {
  let t = !0;
  return t = t && "key_type" in e, t;
}
function yF(e) {
  return Dv(e);
}
function Dv(e, t) {
  return e == null ? e : {
    key_type: Ev(e.key_type)
  };
}
function hF(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_type: e.key_type
    };
}
const vF = {
  EcdsaSecp256k1: "EcdsaSecp256k1"
};
function _F(e) {
  let t = !0;
  return t = t && "key_hex" in e, t;
}
function bF(e) {
  return Pv(e);
}
function Pv(e, t) {
  return e == null ? e : {
    key_hex: e.key_hex,
    key_type: c(e, "key_type") ? e.key_type : void 0
  };
}
function SF(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hex: e.key_hex,
      key_type: e.key_type
    };
}
const OF = {
  EddsaEd25519: "EddsaEd25519"
};
function NF(e) {
  let t = !0;
  return t = t && "key_hex" in e, t;
}
function AF(e) {
  return Rv(e);
}
function Rv(e, t) {
  return e == null ? e : {
    key_hex: e.key_hex,
    key_type: c(e, "key_type") ? e.key_type : void 0
  };
}
function IF(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hex: e.key_hex,
      key_type: e.key_type
    };
}
const wF = {
  EcdsaSecp256k1: "EcdsaSecp256k1",
  EddsaEd25519: "EddsaEd25519"
};
function Fv(e) {
  return Vv(e);
}
function Vv(e, t) {
  return e;
}
function xF(e) {
  return e;
}
function TF(e) {
  let t = !0;
  return t = t && "key_hash_type" in e, t;
}
function kF(e) {
  return jv(e);
}
function jv(e, t) {
  return e == null ? e : {
    key_hash_type: Fv(e.key_hash_type)
  };
}
function MF(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hash_type: e.key_hash_type
    };
}
const EF = {
  EcdsaSecp256k1: "EcdsaSecp256k1"
};
function CF(e) {
  let t = !0;
  return t = t && "hash_hex" in e, t;
}
function DF(e) {
  return Jv(e);
}
function Jv(e, t) {
  return e == null ? e : {
    hash_hex: e.hash_hex,
    key_hash_type: c(e, "key_hash_type") ? e.key_hash_type : void 0
  };
}
function PF(e) {
  if (e !== void 0)
    return e === null ? null : {
      hash_hex: e.hash_hex,
      key_hash_type: e.key_hash_type
    };
}
const RF = {
  EddsaEd25519: "EddsaEd25519"
};
function FF(e) {
  let t = !0;
  return t = t && "hash_hex" in e, t;
}
function VF(e) {
  return Lv(e);
}
function Lv(e, t) {
  return e == null ? e : {
    hash_hex: e.hash_hex,
    key_hash_type: c(e, "key_hash_type") ? e.key_hash_type : void 0
  };
}
function jF(e) {
  if (e !== void 0)
    return e === null ? null : {
      hash_hex: e.hash_hex,
      key_hash_type: e.key_hash_type
    };
}
function JF(e) {
  return !0;
}
function LF(e) {
  return zv(e);
}
function zv(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0
  };
}
function zF(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor
    };
}
function UF(e) {
  let t = !0;
  return t = t && "raw_hex" in e, t = t && "programmatic_json" in e, t;
}
function pi(e) {
  return Uv(e);
}
function Uv(e, t) {
  return e == null ? e : {
    raw_hex: e.raw_hex,
    programmatic_json: Ue(e.programmatic_json)
  };
}
function fi(e) {
  if (e !== void 0)
    return e === null ? null : {
      raw_hex: e.raw_hex,
      programmatic_json: Ze(e.programmatic_json)
    };
}
function ZF(e) {
  return !0;
}
function fu(e) {
  return Zv(e);
}
function Zv(e, t) {
  return e == null ? e : {
    ancestor_identities: c(e, "ancestor_identities") ? e.ancestor_identities : void 0,
    component_royalty_vault_balance: c(e, "component_royalty_vault_balance") ? e.component_royalty_vault_balance : void 0,
    package_royalty_vault_balance: c(e, "package_royalty_vault_balance") ? e.package_royalty_vault_balance : void 0,
    non_fungible_include_nfids: c(e, "non_fungible_include_nfids") ? e.non_fungible_include_nfids : void 0,
    explicit_metadata: c(e, "explicit_metadata") ? e.explicit_metadata : void 0
  };
}
function mu(e) {
  if (e !== void 0)
    return e === null ? null : {
      ancestor_identities: e.ancestor_identities,
      component_royalty_vault_balance: e.component_royalty_vault_balance,
      package_royalty_vault_balance: e.package_royalty_vault_balance,
      non_fungible_include_nfids: e.non_fungible_include_nfids,
      explicit_metadata: e.explicit_metadata
    };
}
function qF(e) {
  let t = !0;
  return t = t && "addresses" in e, t;
}
function BF(e) {
  return qv(e);
}
function qv(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    opt_ins: c(e, "opt_ins") ? fu(e.opt_ins) : void 0,
    addresses: e.addresses,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0
  };
}
function Bv(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      opt_ins: mu(e.opt_ins),
      addresses: e.addresses,
      aggregation_level: e.aggregation_level
    };
}
function GF(e) {
  let t = !0;
  return t = t && "addresses" in e, t;
}
function WF(e) {
  return Gv(e);
}
function Gv(e, t) {
  return e == null ? e : {
    opt_ins: c(e, "opt_ins") ? fu(e.opt_ins) : void 0,
    addresses: e.addresses,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0
  };
}
function KF(e) {
  if (e !== void 0)
    return e === null ? null : {
      opt_ins: mu(e.opt_ins),
      addresses: e.addresses,
      aggregation_level: e.aggregation_level
    };
}
function HF(e) {
  return !0;
}
function Wv(e) {
  return Kv(e);
}
function Kv(e, t) {
  return e == null ? e : {
    parent_address: c(e, "parent_address") ? e.parent_address : void 0,
    owner_address: c(e, "owner_address") ? e.owner_address : void 0,
    global_address: c(e, "global_address") ? e.global_address : void 0
  };
}
function Hv(e) {
  if (e !== void 0)
    return e === null ? null : {
      parent_address: e.parent_address,
      owner_address: e.owner_address,
      global_address: e.global_address
    };
}
const YF = {
  Component: "Component"
};
function QF(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "blueprint_name" in e, t = t && "blueprint_version" in e, t;
}
function XF(e) {
  return gu(e);
}
function gu(e, t) {
  return e == null ? e : {
    type: e.type,
    package_address: c(e, "package_address") ? e.package_address : void 0,
    blueprint_name: e.blueprint_name,
    blueprint_version: e.blueprint_version,
    state: c(e, "state") ? e.state : void 0,
    role_assignments: c(e, "role_assignments") ? qn(e.role_assignments) : void 0,
    royalty_vault_balance: c(e, "royalty_vault_balance") ? e.royalty_vault_balance : void 0
  };
}
function Yv(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      package_address: e.package_address,
      blueprint_name: e.blueprint_name,
      blueprint_version: e.blueprint_version,
      state: e.state,
      role_assignments: Bn(e.role_assignments),
      royalty_vault_balance: e.royalty_vault_balance
    };
}
const $F = {
  FungibleResource: "FungibleResource"
};
function eV(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "role_assignments" in e, t = t && "divisibility" in e, t = t && "total_supply" in e, t = t && "total_minted" in e, t = t && "total_burned" in e, t;
}
function tV(e) {
  return yu(e);
}
function yu(e, t) {
  return e == null ? e : {
    type: e.type,
    role_assignments: qn(e.role_assignments),
    divisibility: e.divisibility,
    total_supply: e.total_supply,
    total_minted: e.total_minted,
    total_burned: e.total_burned
  };
}
function Qv(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      role_assignments: Bn(e.role_assignments),
      divisibility: e.divisibility,
      total_supply: e.total_supply,
      total_minted: e.total_minted,
      total_burned: e.total_burned
    };
}
const nV = {
  FungibleVault: "FungibleVault"
};
function rV(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "resource_address" in e, t = t && "balance" in e, t;
}
function aV(e) {
  return hu(e);
}
function hu(e, t) {
  return e == null ? e : {
    type: e.type,
    resource_address: e.resource_address,
    balance: Ir(e.balance)
  };
}
function Xv(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      resource_address: e.resource_address,
      balance: wr(e.balance)
    };
}
const iV = {
  NonFungibleResource: "NonFungibleResource"
};
function oV(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "role_assignments" in e, t = t && "non_fungible_id_type" in e, t = t && "total_supply" in e, t = t && "total_minted" in e, t = t && "total_burned" in e, t;
}
function sV(e) {
  return vu(e);
}
function vu(e, t) {
  return e == null ? e : {
    type: e.type,
    role_assignments: qn(e.role_assignments),
    non_fungible_id_type: fa(e.non_fungible_id_type),
    total_supply: e.total_supply,
    total_minted: e.total_minted,
    total_burned: e.total_burned
  };
}
function $v(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      role_assignments: Bn(e.role_assignments),
      non_fungible_id_type: e.non_fungible_id_type,
      total_supply: e.total_supply,
      total_minted: e.total_minted,
      total_burned: e.total_burned
    };
}
const lV = {
  NonFungibleVault: "NonFungibleVault"
};
function uV(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "resource_address" in e, t = t && "balance" in e, t;
}
function cV(e) {
  return _u(e);
}
function _u(e, t) {
  return e == null ? e : {
    type: e.type,
    resource_address: e.resource_address,
    balance: xr(e.balance)
  };
}
function e_(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      resource_address: e.resource_address,
      balance: Tr(e.balance)
    };
}
function dV(e) {
  let t = !0;
  return t = t && "name" in e, t = t && "version" in e, t = t && "definition" in e, t;
}
function bu(e) {
  return t_(e);
}
function t_(e, t) {
  return e == null ? e : {
    name: e.name,
    version: e.version,
    definition: e.definition,
    dependant_entities: c(e, "dependant_entities") ? e.dependant_entities : void 0,
    auth_template: c(e, "auth_template") ? e.auth_template : void 0,
    auth_template_is_locked: c(e, "auth_template_is_locked") ? e.auth_template_is_locked : void 0,
    royalty_config: c(e, "royalty_config") ? e.royalty_config : void 0,
    royalty_config_is_locked: c(e, "royalty_config_is_locked") ? e.royalty_config_is_locked : void 0
  };
}
function Su(e) {
  if (e !== void 0)
    return e === null ? null : {
      name: e.name,
      version: e.version,
      definition: e.definition,
      dependant_entities: e.dependant_entities,
      auth_template: e.auth_template,
      auth_template_is_locked: e.auth_template_is_locked,
      royalty_config: e.royalty_config,
      royalty_config_is_locked: e.royalty_config_is_locked
    };
}
function pV(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function Ou(e) {
  return n_(e);
}
function n_(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(bu)
  };
}
function Nu(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Su)
    };
}
function fV(e) {
  let t = !0;
  return t = t && "schema_hash_hex" in e, t = t && "schema_hex" in e, t;
}
function Au(e) {
  return r_(e);
}
function r_(e, t) {
  return e == null ? e : {
    schema_hash_hex: e.schema_hash_hex,
    schema_hex: e.schema_hex
  };
}
function Iu(e) {
  if (e !== void 0)
    return e === null ? null : {
      schema_hash_hex: e.schema_hash_hex,
      schema_hex: e.schema_hex
    };
}
function mV(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function wu(e) {
  return a_(e);
}
function a_(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Au)
  };
}
function xu(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Iu)
    };
}
const gV = {
  Package: "Package"
};
function yV(e) {
  let t = !0;
  return t = t && "type" in e, t = t && "vm_type" in e, t = t && "code_hash_hex" in e, t = t && "code_hex" in e, t;
}
function hV(e) {
  return Tu(e);
}
function Tu(e, t) {
  return e == null ? e : {
    type: e.type,
    vm_type: pu(e.vm_type),
    code_hash_hex: e.code_hash_hex,
    code_hex: e.code_hex,
    royalty_vault_balance: c(e, "royalty_vault_balance") ? e.royalty_vault_balance : void 0,
    blueprints: c(e, "blueprints") ? Ou(e.blueprints) : void 0,
    schemas: c(e, "schemas") ? wu(e.schemas) : void 0
  };
}
function i_(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type,
      vm_type: e.vm_type,
      code_hash_hex: e.code_hash_hex,
      code_hex: e.code_hex,
      royalty_vault_balance: e.royalty_vault_balance,
      blueprints: Nu(e.blueprints),
      schemas: xu(e.schemas)
    };
}
function o_(e) {
  return s_(e);
}
function s_(e, t) {
  if (e == null)
    return e;
  switch (e.type) {
    case "Component":
      return { ...gu(e), type: "Component" };
    case "FungibleResource":
      return { ...yu(e), type: "FungibleResource" };
    case "FungibleVault":
      return { ...hu(e), type: "FungibleVault" };
    case "NonFungibleResource":
      return { ...vu(e), type: "NonFungibleResource" };
    case "NonFungibleVault":
      return { ..._u(e), type: "NonFungibleVault" };
    case "Package":
      return { ...Tu(e), type: "Package" };
    default:
      throw new Error(`No variant of StateEntityDetailsResponseItemDetails exists with 'type=${e.type}'`);
  }
}
function l_(e) {
  if (e !== void 0) {
    if (e === null)
      return null;
    switch (e.type) {
      case "Component":
        return Yv(e);
      case "FungibleResource":
        return Qv(e);
      case "FungibleVault":
        return Xv(e);
      case "NonFungibleResource":
        return $v(e);
      case "NonFungibleVault":
        return e_(e);
      case "Package":
        return i_(e);
      default:
        throw new Error(`No variant of StateEntityDetailsResponseItemDetails exists with 'type=${e.type}'`);
    }
  }
}
function vV(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "metadata" in e, t;
}
function ku(e) {
  return u_(e);
}
function u_(e, t) {
  return e == null ? e : {
    address: e.address,
    fungible_resources: c(e, "fungible_resources") ? Dy(e.fungible_resources) : void 0,
    non_fungible_resources: c(e, "non_fungible_resources") ? Hh(e.non_fungible_resources) : void 0,
    ancestor_identities: c(e, "ancestor_identities") ? Wv(e.ancestor_identities) : void 0,
    metadata: _t(e.metadata),
    explicit_metadata: c(e, "explicit_metadata") ? _t(e.explicit_metadata) : void 0,
    details: c(e, "details") ? o_(e.details) : void 0
  };
}
function Mu(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      fungible_resources: Ry(e.fungible_resources),
      non_fungible_resources: Qh(e.non_fungible_resources),
      ancestor_identities: Hv(e.ancestor_identities),
      metadata: bt(e.metadata),
      explicit_metadata: bt(e.explicit_metadata),
      details: l_(e.details)
    };
}
function _V(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t;
}
function c_(e) {
  return d_(e);
}
function d_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    items: e.items.map(ku)
  };
}
function bV(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      items: e.items.map(Mu)
    };
}
function SV(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function OV(e) {
  return p_(e);
}
function p_(e, t) {
  return e == null ? e : {
    items: e.items.map(ku)
  };
}
function NV(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Mu)
    };
}
const AV = {
  Component: "Component"
};
function IV(e) {
  let t = !0;
  return t = t && "blueprint_name" in e, t = t && "blueprint_version" in e, t;
}
function wV(e) {
  return f_(e);
}
function f_(e, t) {
  return e == null ? e : {
    package_address: c(e, "package_address") ? e.package_address : void 0,
    blueprint_name: e.blueprint_name,
    blueprint_version: e.blueprint_version,
    state: c(e, "state") ? e.state : void 0,
    role_assignments: c(e, "role_assignments") ? qn(e.role_assignments) : void 0,
    royalty_vault_balance: c(e, "royalty_vault_balance") ? e.royalty_vault_balance : void 0,
    type: c(e, "type") ? e.type : void 0
  };
}
function xV(e) {
  if (e !== void 0)
    return e === null ? null : {
      package_address: e.package_address,
      blueprint_name: e.blueprint_name,
      blueprint_version: e.blueprint_version,
      state: e.state,
      role_assignments: Bn(e.role_assignments),
      royalty_vault_balance: e.royalty_vault_balance,
      type: e.type
    };
}
const TV = {
  FungibleResource: "FungibleResource"
};
function kV(e) {
  let t = !0;
  return t = t && "role_assignments" in e, t = t && "divisibility" in e, t = t && "total_supply" in e, t = t && "total_minted" in e, t = t && "total_burned" in e, t;
}
function MV(e) {
  return m_(e);
}
function m_(e, t) {
  return e == null ? e : {
    role_assignments: qn(e.role_assignments),
    divisibility: e.divisibility,
    total_supply: e.total_supply,
    total_minted: e.total_minted,
    total_burned: e.total_burned,
    type: c(e, "type") ? e.type : void 0
  };
}
function EV(e) {
  if (e !== void 0)
    return e === null ? null : {
      role_assignments: Bn(e.role_assignments),
      divisibility: e.divisibility,
      total_supply: e.total_supply,
      total_minted: e.total_minted,
      total_burned: e.total_burned,
      type: e.type
    };
}
const CV = {
  FungibleVault: "FungibleVault"
};
function DV(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "balance" in e, t;
}
function PV(e) {
  return g_(e);
}
function g_(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    balance: Ir(e.balance),
    type: c(e, "type") ? e.type : void 0
  };
}
function RV(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      balance: wr(e.balance),
      type: e.type
    };
}
const FV = {
  FungibleResource: "FungibleResource",
  NonFungibleResource: "NonFungibleResource",
  FungibleVault: "FungibleVault",
  NonFungibleVault: "NonFungibleVault",
  Package: "Package",
  Component: "Component"
};
function y_(e) {
  return h_(e);
}
function h_(e, t) {
  return e;
}
function VV(e) {
  return e;
}
function jV(e) {
  let t = !0;
  return t = t && "type" in e, t;
}
function JV(e) {
  return v_(e);
}
function v_(e, t) {
  return e == null ? e : {
    type: y_(e.type)
  };
}
function LV(e) {
  if (e !== void 0)
    return e === null ? null : {
      type: e.type
    };
}
const zV = {
  NonFungibleResource: "NonFungibleResource"
};
function UV(e) {
  let t = !0;
  return t = t && "role_assignments" in e, t = t && "non_fungible_id_type" in e, t = t && "total_supply" in e, t = t && "total_minted" in e, t = t && "total_burned" in e, t;
}
function ZV(e) {
  return __(e);
}
function __(e, t) {
  return e == null ? e : {
    role_assignments: qn(e.role_assignments),
    non_fungible_id_type: fa(e.non_fungible_id_type),
    total_supply: e.total_supply,
    total_minted: e.total_minted,
    total_burned: e.total_burned,
    type: c(e, "type") ? e.type : void 0
  };
}
function qV(e) {
  if (e !== void 0)
    return e === null ? null : {
      role_assignments: Bn(e.role_assignments),
      non_fungible_id_type: e.non_fungible_id_type,
      total_supply: e.total_supply,
      total_minted: e.total_minted,
      total_burned: e.total_burned,
      type: e.type
    };
}
const BV = {
  NonFungibleVault: "NonFungibleVault"
};
function GV(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "balance" in e, t;
}
function WV(e) {
  return b_(e);
}
function b_(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    balance: xr(e.balance),
    type: c(e, "type") ? e.type : void 0
  };
}
function KV(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      balance: Tr(e.balance),
      type: e.type
    };
}
const HV = {
  Package: "Package"
};
function YV(e) {
  let t = !0;
  return t = t && "vm_type" in e, t = t && "code_hash_hex" in e, t = t && "code_hex" in e, t;
}
function QV(e) {
  return S_(e);
}
function S_(e, t) {
  return e == null ? e : {
    vm_type: pu(e.vm_type),
    code_hash_hex: e.code_hash_hex,
    code_hex: e.code_hex,
    royalty_vault_balance: c(e, "royalty_vault_balance") ? e.royalty_vault_balance : void 0,
    blueprints: c(e, "blueprints") ? Ou(e.blueprints) : void 0,
    schemas: c(e, "schemas") ? wu(e.schemas) : void 0,
    type: c(e, "type") ? e.type : void 0
  };
}
function XV(e) {
  if (e !== void 0)
    return e === null ? null : {
      vm_type: e.vm_type,
      code_hash_hex: e.code_hash_hex,
      code_hex: e.code_hex,
      royalty_vault_balance: e.royalty_vault_balance,
      blueprints: Nu(e.blueprints),
      schemas: xu(e.schemas),
      type: e.type
    };
}
function $V(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function ej(e) {
  return O_(e);
}
function O_(e, t) {
  return e == null ? e : {
    items: e.items.map(bu)
  };
}
function tj(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Su)
    };
}
function nj(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function rj(e) {
  return N_(e);
}
function N_(e, t) {
  return e == null ? e : {
    items: e.items.map(Au)
  };
}
function aj(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Iu)
    };
}
function ij(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "resource_address" in e, t;
}
function oj(e) {
  return A_(e);
}
function A_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address,
    resource_address: e.resource_address
  };
}
function I_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address,
      resource_address: e.resource_address
    };
}
function sj(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "resource_address" in e, t;
}
function lj(e) {
  return w_(e);
}
function w_(e, t) {
  return e == null ? e : {
    address: e.address,
    resource_address: e.resource_address
  };
}
function uj(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      resource_address: e.resource_address
    };
}
function cj(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t = t && "resource_address" in e, t;
}
function x_(e) {
  return T_(e);
}
function T_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Ir),
    address: e.address,
    resource_address: e.resource_address
  };
}
function dj(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(wr),
      address: e.address,
      resource_address: e.resource_address
    };
}
function pj(e) {
  return !0;
}
function Eu(e) {
  return k_(e);
}
function k_(e, t) {
  return e == null ? e : {
    explicit_metadata: c(e, "explicit_metadata") ? e.explicit_metadata : void 0
  };
}
function Cu(e) {
  if (e !== void 0)
    return e === null ? null : {
      explicit_metadata: e.explicit_metadata
    };
}
function fj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function mj(e) {
  return M_(e);
}
function M_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0,
    opt_ins: c(e, "opt_ins") ? Eu(e.opt_ins) : void 0
  };
}
function E_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address,
      aggregation_level: e.aggregation_level,
      opt_ins: Cu(e.opt_ins)
    };
}
function gj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function yj(e) {
  return C_(e);
}
function C_(e, t) {
  return e == null ? e : {
    address: e.address,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0,
    opt_ins: c(e, "opt_ins") ? Eu(e.opt_ins) : void 0
  };
}
function hj(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      aggregation_level: e.aggregation_level,
      opt_ins: Cu(e.opt_ins)
    };
}
function vj(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t;
}
function D_(e) {
  return P_(e);
}
function P_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(xi),
    address: e.address
  };
}
function _j(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Ti),
      address: e.address
    };
}
function bj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function Sj(e) {
  return R_(e);
}
function R_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address
  };
}
function F_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address
    };
}
function Oj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function Nj(e) {
  return V_(e);
}
function V_(e, t) {
  return e == null ? e : {
    address: e.address
  };
}
function Aj(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address
    };
}
function Ij(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t;
}
function j_(e) {
  return J_(e);
}
function J_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Ii),
    address: e.address
  };
}
function wj(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(wi),
      address: e.address
    };
}
function xj(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "vault_address" in e, t = t && "resource_address" in e, t;
}
function Tj(e) {
  return L_(e);
}
function L_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address,
    vault_address: e.vault_address,
    resource_address: e.resource_address
  };
}
function z_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address,
      vault_address: e.vault_address,
      resource_address: e.resource_address
    };
}
function kj(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "vault_address" in e, t = t && "resource_address" in e, t;
}
function Mj(e) {
  return U_(e);
}
function U_(e, t) {
  return e == null ? e : {
    address: e.address,
    vault_address: e.vault_address,
    resource_address: e.resource_address
  };
}
function Ej(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      vault_address: e.vault_address,
      resource_address: e.resource_address
    };
}
function Cj(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t = t && "resource_address" in e, t;
}
function Z_(e) {
  return q_(e);
}
function q_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items,
    address: e.address,
    resource_address: e.resource_address
  };
}
function Dj(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items,
      address: e.address,
      resource_address: e.resource_address
    };
}
function Pj(e) {
  return !0;
}
function Du(e) {
  return B_(e);
}
function B_(e, t) {
  return e == null ? e : {
    non_fungible_include_nfids: c(e, "non_fungible_include_nfids") ? e.non_fungible_include_nfids : void 0
  };
}
function Pu(e) {
  if (e !== void 0)
    return e === null ? null : {
      non_fungible_include_nfids: e.non_fungible_include_nfids
    };
}
function Rj(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "resource_address" in e, t;
}
function Fj(e) {
  return G_(e);
}
function G_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address,
    resource_address: e.resource_address,
    opt_ins: c(e, "opt_ins") ? Du(e.opt_ins) : void 0
  };
}
function W_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address,
      resource_address: e.resource_address,
      opt_ins: Pu(e.opt_ins)
    };
}
function Vj(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "resource_address" in e, t;
}
function jj(e) {
  return K_(e);
}
function K_(e, t) {
  return e == null ? e : {
    address: e.address,
    resource_address: e.resource_address,
    opt_ins: c(e, "opt_ins") ? Du(e.opt_ins) : void 0
  };
}
function Jj(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      resource_address: e.resource_address,
      opt_ins: Pu(e.opt_ins)
    };
}
function Lj(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t = t && "resource_address" in e, t;
}
function H_(e) {
  return Y_(e);
}
function Y_(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(xr),
    address: e.address,
    resource_address: e.resource_address
  };
}
function zj(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Tr),
      address: e.address,
      resource_address: e.resource_address
    };
}
function Uj(e) {
  return !0;
}
function Ru(e) {
  return Q_(e);
}
function Q_(e, t) {
  return e == null ? e : {
    non_fungible_include_nfids: c(e, "non_fungible_include_nfids") ? e.non_fungible_include_nfids : void 0,
    explicit_metadata: c(e, "explicit_metadata") ? e.explicit_metadata : void 0
  };
}
function Fu(e) {
  if (e !== void 0)
    return e === null ? null : {
      non_fungible_include_nfids: e.non_fungible_include_nfids,
      explicit_metadata: e.explicit_metadata
    };
}
function Zj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function qj(e) {
  return X_(e);
}
function X_(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    address: e.address,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0,
    opt_ins: c(e, "opt_ins") ? Ru(e.opt_ins) : void 0
  };
}
function $_(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      address: e.address,
      aggregation_level: e.aggregation_level,
      opt_ins: Fu(e.opt_ins)
    };
}
function Bj(e) {
  let t = !0;
  return t = t && "address" in e, t;
}
function Gj(e) {
  return eb(e);
}
function eb(e, t) {
  return e == null ? e : {
    address: e.address,
    aggregation_level: c(e, "aggregation_level") ? Jt(e.aggregation_level) : void 0,
    opt_ins: c(e, "opt_ins") ? Ru(e.opt_ins) : void 0
  };
}
function Wj(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      aggregation_level: e.aggregation_level,
      opt_ins: Fu(e.opt_ins)
    };
}
function Kj(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t = t && "address" in e, t;
}
function tb(e) {
  return nb(e);
}
function nb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(ki),
    address: e.address
  };
}
function Hj(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Mi),
      address: e.address
    };
}
function Yj(e) {
  return !0;
}
function Vu(e) {
  return rb(e);
}
function rb(e, t) {
  return e == null ? e : {
    key_hex: c(e, "key_hex") ? e.key_hex : void 0,
    key_json: c(e, "key_json") ? Ue(e.key_json) : void 0
  };
}
function ju(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_hex: e.key_hex,
      key_json: Ze(e.key_json)
    };
}
function Qj(e) {
  let t = !0;
  return t = t && "key_value_store_address" in e, t = t && "keys" in e, t;
}
function Xj(e) {
  return ab(e);
}
function ab(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    key_value_store_address: e.key_value_store_address,
    keys: e.keys.map(Vu)
  };
}
function ib(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      key_value_store_address: e.key_value_store_address,
      keys: e.keys.map(ju)
    };
}
function $j(e) {
  let t = !0;
  return t = t && "key_value_store_address" in e, t = t && "keys" in e, t;
}
function e2(e) {
  return ob(e);
}
function ob(e, t) {
  return e == null ? e : {
    key_value_store_address: e.key_value_store_address,
    keys: e.keys.map(Vu)
  };
}
function t2(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_value_store_address: e.key_value_store_address,
      keys: e.keys.map(ju)
    };
}
function n2(e) {
  let t = !0;
  return t = t && "key" in e, t = t && "value" in e, t = t && "last_updated_at_state_version" in e, t = t && "is_locked" in e, t;
}
function Ju(e) {
  return sb(e);
}
function sb(e, t) {
  return e == null ? e : {
    key: pi(e.key),
    value: pi(e.value),
    last_updated_at_state_version: e.last_updated_at_state_version,
    is_locked: e.is_locked
  };
}
function Lu(e) {
  if (e !== void 0)
    return e === null ? null : {
      key: fi(e.key),
      value: fi(e.value),
      last_updated_at_state_version: e.last_updated_at_state_version,
      is_locked: e.is_locked
    };
}
function r2(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "key_value_store_address" in e, t = t && "entries" in e, t;
}
function lb(e) {
  return ub(e);
}
function ub(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    key_value_store_address: e.key_value_store_address,
    entries: e.entries.map(Ju)
  };
}
function a2(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      key_value_store_address: e.key_value_store_address,
      entries: e.entries.map(Lu)
    };
}
function i2(e) {
  let t = !0;
  return t = t && "key_value_store_address" in e, t = t && "entries" in e, t;
}
function o2(e) {
  return cb(e);
}
function cb(e, t) {
  return e == null ? e : {
    key_value_store_address: e.key_value_store_address,
    entries: e.entries.map(Ju)
  };
}
function s2(e) {
  if (e !== void 0)
    return e === null ? null : {
      key_value_store_address: e.key_value_store_address,
      entries: e.entries.map(Lu)
    };
}
function l2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function u2(e) {
  return db(e);
}
function db(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    resource_address: e.resource_address,
    non_fungible_ids: e.non_fungible_ids
  };
}
function pb(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      resource_address: e.resource_address,
      non_fungible_ids: e.non_fungible_ids
    };
}
function c2(e) {
  let t = !0;
  return t = t && "is_burned" in e, t = t && "non_fungible_id" in e, t = t && "last_updated_at_state_version" in e, t;
}
function zu(e) {
  return fb(e);
}
function fb(e, t) {
  return e == null ? e : {
    is_burned: e.is_burned,
    non_fungible_id: e.non_fungible_id,
    data: c(e, "data") ? pi(e.data) : void 0,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function Uu(e) {
  if (e !== void 0)
    return e === null ? null : {
      is_burned: e.is_burned,
      non_fungible_id: e.non_fungible_id,
      data: fi(e.data),
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function d2(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "resource_address" in e, t = t && "non_fungible_id_type" in e, t = t && "non_fungible_ids" in e, t;
}
function mb(e) {
  return gb(e);
}
function gb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    resource_address: e.resource_address,
    non_fungible_id_type: fa(e.non_fungible_id_type),
    non_fungible_ids: e.non_fungible_ids.map(zu)
  };
}
function p2(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      resource_address: e.resource_address,
      non_fungible_id_type: e.non_fungible_id_type,
      non_fungible_ids: e.non_fungible_ids.map(Uu)
    };
}
function f2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_id_type" in e, t = t && "non_fungible_ids" in e, t;
}
function m2(e) {
  return yb(e);
}
function yb(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_id_type: fa(e.non_fungible_id_type),
    non_fungible_ids: e.non_fungible_ids.map(zu)
  };
}
function g2(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_id_type: e.non_fungible_id_type,
      non_fungible_ids: e.non_fungible_ids.map(Uu)
    };
}
function y2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t;
}
function h2(e) {
  return hb(e);
}
function hb(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    resource_address: e.resource_address
  };
}
function vb(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      resource_address: e.resource_address
    };
}
function v2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t;
}
function _2(e) {
  return _b(e);
}
function _b(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address
  };
}
function b2(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address
    };
}
function S2(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function bb(e) {
  return Sb(e);
}
function Sb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    resource_address: e.resource_address,
    non_fungible_ids: ou(e.non_fungible_ids)
  };
}
function O2(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      resource_address: e.resource_address,
      non_fungible_ids: su(e.non_fungible_ids)
    };
}
function N2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function A2(e) {
  return Ob(e);
}
function Ob(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_ids: ou(e.non_fungible_ids)
  };
}
function I2(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_ids: su(e.non_fungible_ids)
    };
}
function w2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function x2(e) {
  return Nb(e);
}
function Nb(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    resource_address: e.resource_address,
    non_fungible_ids: e.non_fungible_ids
  };
}
function Ab(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      resource_address: e.resource_address,
      non_fungible_ids: e.non_fungible_ids
    };
}
function T2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function k2(e) {
  return Ib(e);
}
function Ib(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_ids: e.non_fungible_ids
  };
}
function M2(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_ids: e.non_fungible_ids
    };
}
function E2(e) {
  let t = !0;
  return t = t && "non_fungible_id" in e, t = t && "is_burned" in e, t = t && "last_updated_at_state_version" in e, t;
}
function Zu(e) {
  return wb(e);
}
function wb(e, t) {
  return e == null ? e : {
    non_fungible_id: e.non_fungible_id,
    owning_vault_address: c(e, "owning_vault_address") ? e.owning_vault_address : void 0,
    is_burned: e.is_burned,
    last_updated_at_state_version: e.last_updated_at_state_version
  };
}
function qu(e) {
  if (e !== void 0)
    return e === null ? null : {
      non_fungible_id: e.non_fungible_id,
      owning_vault_address: e.owning_vault_address,
      is_burned: e.is_burned,
      last_updated_at_state_version: e.last_updated_at_state_version
    };
}
function C2(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function xb(e) {
  return Tb(e);
}
function Tb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    resource_address: e.resource_address,
    non_fungible_ids: e.non_fungible_ids.map(Zu)
  };
}
function D2(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      resource_address: e.resource_address,
      non_fungible_ids: e.non_fungible_ids.map(qu)
    };
}
function P2(e) {
  let t = !0;
  return t = t && "resource_address" in e, t = t && "non_fungible_ids" in e, t;
}
function R2(e) {
  return kb(e);
}
function kb(e, t) {
  return e == null ? e : {
    resource_address: e.resource_address,
    non_fungible_ids: e.non_fungible_ids.map(Zu)
  };
}
function F2(e) {
  if (e !== void 0)
    return e === null ? null : {
      resource_address: e.resource_address,
      non_fungible_ids: e.non_fungible_ids.map(qu)
    };
}
function V2(e) {
  return !0;
}
function j2(e) {
  return Mb(e);
}
function Mb(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0
  };
}
function Eb(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      cursor: e.cursor
    };
}
function J2(e) {
  return !0;
}
function L2(e) {
  return Cb(e);
}
function Cb(e, t) {
  return e == null ? e : {
    cursor: c(e, "cursor") ? e.cursor : void 0
  };
}
function z2(e) {
  if (e !== void 0)
    return e === null ? null : {
      cursor: e.cursor
    };
}
function U2(e) {
  let t = !0;
  return t = t && "stake" in e, t = t && "stake_percentage" in e, t = t && "key" in e, t;
}
function Db(e) {
  return Pb(e);
}
function Pb(e, t) {
  return e == null ? e : {
    stake: e.stake,
    stake_percentage: e.stake_percentage,
    key: tn(e.key)
  };
}
function Rb(e) {
  if (e !== void 0)
    return e === null ? null : {
      stake: e.stake,
      stake_percentage: e.stake_percentage,
      key: nn(e.key)
    };
}
function Z2(e) {
  let t = !0;
  return t = t && "balance" in e, t = t && "last_changed_at_state_version" in e, t = t && "address" in e, t;
}
function zr(e) {
  return Fb(e);
}
function Fb(e, t) {
  return e == null ? e : {
    balance: e.balance,
    last_changed_at_state_version: e.last_changed_at_state_version,
    address: e.address
  };
}
function Ur(e) {
  if (e !== void 0)
    return e === null ? null : {
      balance: e.balance,
      last_changed_at_state_version: e.last_changed_at_state_version,
      address: e.address
    };
}
function q2(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "stake_vault" in e, t = t && "pending_xrd_withdraw_vault" in e, t = t && "locked_owner_stake_unit_vault" in e, t = t && "pending_owner_stake_unit_unlock_vault" in e, t = t && "metadata" in e, t;
}
function Bu(e) {
  return Vb(e);
}
function Vb(e, t) {
  return e == null ? e : {
    address: e.address,
    stake_vault: zr(e.stake_vault),
    pending_xrd_withdraw_vault: zr(e.pending_xrd_withdraw_vault),
    locked_owner_stake_unit_vault: zr(e.locked_owner_stake_unit_vault),
    pending_owner_stake_unit_unlock_vault: zr(e.pending_owner_stake_unit_unlock_vault),
    state: c(e, "state") ? e.state : void 0,
    active_in_epoch: c(e, "active_in_epoch") ? Db(e.active_in_epoch) : void 0,
    metadata: _t(e.metadata)
  };
}
function Gu(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      stake_vault: Ur(e.stake_vault),
      pending_xrd_withdraw_vault: Ur(e.pending_xrd_withdraw_vault),
      locked_owner_stake_unit_vault: Ur(e.locked_owner_stake_unit_vault),
      pending_owner_stake_unit_unlock_vault: Ur(e.pending_owner_stake_unit_unlock_vault),
      state: e.state,
      active_in_epoch: Rb(e.active_in_epoch),
      metadata: bt(e.metadata)
    };
}
function B2(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function Wu(e) {
  return jb(e);
}
function jb(e, t) {
  return e == null ? e : {
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(Bu)
  };
}
function Ku(e) {
  if (e !== void 0)
    return e === null ? null : {
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(Gu)
    };
}
function G2(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "validators" in e, t;
}
function Jb(e) {
  return Lb(e);
}
function Lb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    validators: Wu(e.validators)
  };
}
function W2(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      validators: Ku(e.validators)
    };
}
function K2(e) {
  let t = !0;
  return t = t && "validators" in e, t;
}
function H2(e) {
  return zb(e);
}
function zb(e, t) {
  return e == null ? e : {
    validators: Wu(e.validators)
  };
}
function Y2(e) {
  if (e !== void 0)
    return e === null ? null : {
      validators: Ku(e.validators)
    };
}
const Q2 = {
  Deposit: "Deposit",
  Withdrawal: "Withdrawal"
};
function X2(e) {
  let t = !0;
  return t = t && "event" in e, t;
}
function Hu(e) {
  return Ub(e);
}
function Ub(e, t) {
  return e == null ? e : {
    event: e.event,
    emitter_address: c(e, "emitter_address") ? e.emitter_address : void 0,
    resource_address: c(e, "resource_address") ? e.resource_address : void 0
  };
}
function Yu(e) {
  if (e !== void 0)
    return e === null ? null : {
      event: e.event,
      emitter_address: e.emitter_address,
      resource_address: e.resource_address
    };
}
function $2(e) {
  return !0;
}
function ma(e) {
  return Zb(e);
}
function Zb(e, t) {
  return e == null ? e : {
    raw_hex: c(e, "raw_hex") ? e.raw_hex : void 0,
    receipt_state_changes: c(e, "receipt_state_changes") ? e.receipt_state_changes : void 0,
    receipt_fee_summary: c(e, "receipt_fee_summary") ? e.receipt_fee_summary : void 0,
    receipt_fee_source: c(e, "receipt_fee_source") ? e.receipt_fee_source : void 0,
    receipt_fee_destination: c(e, "receipt_fee_destination") ? e.receipt_fee_destination : void 0,
    receipt_costing_parameters: c(e, "receipt_costing_parameters") ? e.receipt_costing_parameters : void 0,
    receipt_events: c(e, "receipt_events") ? e.receipt_events : void 0,
    receipt_output: c(e, "receipt_output") ? e.receipt_output : void 0,
    affected_global_entities: c(e, "affected_global_entities") ? e.affected_global_entities : void 0,
    balance_changes: c(e, "balance_changes") ? e.balance_changes : void 0
  };
}
function ga(e) {
  if (e !== void 0)
    return e === null ? null : {
      raw_hex: e.raw_hex,
      receipt_state_changes: e.receipt_state_changes,
      receipt_fee_summary: e.receipt_fee_summary,
      receipt_fee_source: e.receipt_fee_source,
      receipt_fee_destination: e.receipt_fee_destination,
      receipt_costing_parameters: e.receipt_costing_parameters,
      receipt_events: e.receipt_events,
      receipt_output: e.receipt_output,
      affected_global_entities: e.affected_global_entities,
      balance_changes: e.balance_changes
    };
}
const eJ = {
  User: "User",
  EpochChange: "EpochChange",
  All: "All"
}, tJ = {
  Asc: "Asc",
  Desc: "Desc"
};
function nJ(e) {
  return !0;
}
function rJ(e) {
  return qb(e);
}
function qb(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    from_ledger_state: c(e, "from_ledger_state") ? ye(e.from_ledger_state) : void 0,
    cursor: c(e, "cursor") ? e.cursor : void 0,
    limit_per_page: c(e, "limit_per_page") ? e.limit_per_page : void 0,
    kind_filter: c(e, "kind_filter") ? e.kind_filter : void 0,
    manifest_accounts_withdrawn_from_filter: c(e, "manifest_accounts_withdrawn_from_filter") ? e.manifest_accounts_withdrawn_from_filter : void 0,
    manifest_accounts_deposited_into_filter: c(e, "manifest_accounts_deposited_into_filter") ? e.manifest_accounts_deposited_into_filter : void 0,
    manifest_resources_filter: c(e, "manifest_resources_filter") ? e.manifest_resources_filter : void 0,
    affected_global_entities_filter: c(e, "affected_global_entities_filter") ? e.affected_global_entities_filter : void 0,
    events_filter: c(e, "events_filter") ? e.events_filter.map(Hu) : void 0,
    order: c(e, "order") ? e.order : void 0,
    opt_ins: c(e, "opt_ins") ? ma(e.opt_ins) : void 0
  };
}
function Bb(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      from_ledger_state: he(e.from_ledger_state),
      cursor: e.cursor,
      limit_per_page: e.limit_per_page,
      kind_filter: e.kind_filter,
      manifest_accounts_withdrawn_from_filter: e.manifest_accounts_withdrawn_from_filter,
      manifest_accounts_deposited_into_filter: e.manifest_accounts_deposited_into_filter,
      manifest_resources_filter: e.manifest_resources_filter,
      affected_global_entities_filter: e.affected_global_entities_filter,
      events_filter: e.events_filter === void 0 ? void 0 : e.events_filter.map(Yu),
      order: e.order,
      opt_ins: ga(e.opt_ins)
    };
}
const aJ = {
  User: "User",
  EpochChange: "EpochChange",
  All: "All"
}, iJ = {
  Asc: "Asc",
  Desc: "Desc"
};
function oJ(e) {
  return !0;
}
function sJ(e) {
  return Gb(e);
}
function Gb(e, t) {
  return e == null ? e : {
    kind_filter: c(e, "kind_filter") ? e.kind_filter : void 0,
    manifest_accounts_withdrawn_from_filter: c(e, "manifest_accounts_withdrawn_from_filter") ? e.manifest_accounts_withdrawn_from_filter : void 0,
    manifest_accounts_deposited_into_filter: c(e, "manifest_accounts_deposited_into_filter") ? e.manifest_accounts_deposited_into_filter : void 0,
    manifest_resources_filter: c(e, "manifest_resources_filter") ? e.manifest_resources_filter : void 0,
    affected_global_entities_filter: c(e, "affected_global_entities_filter") ? e.affected_global_entities_filter : void 0,
    events_filter: c(e, "events_filter") ? e.events_filter.map(Hu) : void 0,
    order: c(e, "order") ? e.order : void 0,
    opt_ins: c(e, "opt_ins") ? ma(e.opt_ins) : void 0
  };
}
function lJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      kind_filter: e.kind_filter,
      manifest_accounts_withdrawn_from_filter: e.manifest_accounts_withdrawn_from_filter,
      manifest_accounts_deposited_into_filter: e.manifest_accounts_deposited_into_filter,
      manifest_resources_filter: e.manifest_resources_filter,
      affected_global_entities_filter: e.affected_global_entities_filter,
      events_filter: e.events_filter === void 0 ? void 0 : e.events_filter.map(Yu),
      order: e.order,
      opt_ins: ga(e.opt_ins)
    };
}
function uJ(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "items" in e, t;
}
function Wb(e) {
  return Kb(e);
}
function Kb(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    total_count: c(e, "total_count") ? e.total_count : void 0,
    next_cursor: c(e, "next_cursor") ? e.next_cursor : void 0,
    items: e.items.map(ua)
  };
}
function cJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      total_count: e.total_count,
      next_cursor: e.next_cursor,
      items: e.items.map(ca)
    };
}
function dJ(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function pJ(e) {
  return Hb(e);
}
function Hb(e, t) {
  return e == null ? e : {
    items: e.items.map(ua)
  };
}
function fJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(ca)
    };
}
function mJ(e) {
  let t = !0;
  return t = t && "intent_hash" in e, t;
}
function gJ(e) {
  return Yb(e);
}
function Yb(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    intent_hash: e.intent_hash,
    opt_ins: c(e, "opt_ins") ? ma(e.opt_ins) : void 0
  };
}
function Qb(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      intent_hash: e.intent_hash,
      opt_ins: ga(e.opt_ins)
    };
}
function yJ(e) {
  let t = !0;
  return t = t && "intent_hash" in e, t;
}
function hJ(e) {
  return Xb(e);
}
function Xb(e, t) {
  return e == null ? e : {
    intent_hash: e.intent_hash,
    opt_ins: c(e, "opt_ins") ? ma(e.opt_ins) : void 0
  };
}
function vJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      intent_hash: e.intent_hash,
      opt_ins: ga(e.opt_ins)
    };
}
function _J(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "transaction" in e, t;
}
function $b(e) {
  return e0(e);
}
function e0(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    transaction: ua(e.transaction)
  };
}
function bJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      transaction: ca(e.transaction)
    };
}
function SJ(e) {
  let t = !0;
  return t = t && "transaction" in e, t;
}
function OJ(e) {
  return t0(e);
}
function t0(e, t) {
  return e == null ? e : {
    transaction: ua(e.transaction)
  };
}
function NJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      transaction: ca(e.transaction)
    };
}
function AJ(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t;
}
function n0(e) {
  return r0(e);
}
function r0(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state)
  };
}
function IJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state)
    };
}
const wJ = {
  Unknown: "Unknown",
  CommittedSuccess: "CommittedSuccess",
  CommittedFailure: "CommittedFailure",
  CommitPendingOutcomeUnknown: "CommitPendingOutcomeUnknown",
  PermanentlyRejected: "PermanentlyRejected",
  LikelyButNotCertainRejection: "LikelyButNotCertainRejection",
  Pending: "Pending"
};
function Qu(e) {
  return a0(e);
}
function a0(e, t) {
  return e;
}
function xJ(e) {
  return e;
}
const TJ = {
  TransactionNotFoundError: "TransactionNotFoundError"
};
function kJ(e) {
  let t = !0;
  return t = t && "intent_hash" in e, t;
}
function MJ(e) {
  return i0(e);
}
function i0(e, t) {
  return e == null ? e : {
    intent_hash: e.intent_hash,
    type: c(e, "type") ? e.type : void 0
  };
}
function EJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      intent_hash: e.intent_hash,
      type: e.type
    };
}
const CJ = {
  HandlingSubmission: "HandlingSubmission",
  Concluded: "Concluded"
};
function o0(e) {
  return s0(e);
}
function s0(e, t) {
  return e;
}
function DJ(e) {
  return e;
}
const PJ = {
  Unknown: "Unknown",
  CommittedSuccess: "CommittedSuccess",
  CommittedFailure: "CommittedFailure",
  CommitPendingOutcomeUnknown: "CommitPendingOutcomeUnknown",
  PermanentlyRejected: "PermanentlyRejected",
  TemporarilyRejected: "TemporarilyRejected",
  Pending: "Pending"
};
function l0(e) {
  return u0(e);
}
function u0(e, t) {
  return e;
}
function RJ(e) {
  return e;
}
function FJ(e) {
  let t = !0;
  return t = t && "use_free_credit" in e, t = t && "assume_all_signature_proofs" in e, t = t && "skip_epoch_check" in e, t;
}
function c0(e) {
  return d0(e);
}
function d0(e, t) {
  return e == null ? e : {
    use_free_credit: e.use_free_credit,
    assume_all_signature_proofs: e.assume_all_signature_proofs,
    skip_epoch_check: e.skip_epoch_check
  };
}
function p0(e) {
  if (e !== void 0)
    return e === null ? null : {
      use_free_credit: e.use_free_credit,
      assume_all_signature_proofs: e.assume_all_signature_proofs,
      skip_epoch_check: e.skip_epoch_check
    };
}
function VJ(e) {
  let t = !0;
  return t = t && "manifest" in e, t = t && "start_epoch_inclusive" in e, t = t && "end_epoch_exclusive" in e, t = t && "tip_percentage" in e, t = t && "nonce" in e, t = t && "signer_public_keys" in e, t = t && "flags" in e, t;
}
function jJ(e) {
  return f0(e);
}
function f0(e, t) {
  return e == null ? e : {
    manifest: e.manifest,
    blobs_hex: c(e, "blobs_hex") ? e.blobs_hex : void 0,
    start_epoch_inclusive: e.start_epoch_inclusive,
    end_epoch_exclusive: e.end_epoch_exclusive,
    notary_public_key: c(e, "notary_public_key") ? tn(e.notary_public_key) : void 0,
    notary_is_signatory: c(e, "notary_is_signatory") ? e.notary_is_signatory : void 0,
    tip_percentage: e.tip_percentage,
    nonce: e.nonce,
    signer_public_keys: e.signer_public_keys.map(tn),
    flags: c0(e.flags)
  };
}
function m0(e) {
  if (e !== void 0)
    return e === null ? null : {
      manifest: e.manifest,
      blobs_hex: e.blobs_hex,
      start_epoch_inclusive: e.start_epoch_inclusive,
      end_epoch_exclusive: e.end_epoch_exclusive,
      notary_public_key: nn(e.notary_public_key),
      notary_is_signatory: e.notary_is_signatory,
      tip_percentage: e.tip_percentage,
      nonce: e.nonce,
      signer_public_keys: e.signer_public_keys.map(nn),
      flags: p0(e.flags)
    };
}
function JJ(e) {
  let t = !0;
  return t = t && "level" in e, t = t && "message" in e, t;
}
function g0(e) {
  return y0(e);
}
function y0(e, t) {
  return e == null ? e : {
    level: e.level,
    message: e.message
  };
}
function h0(e) {
  if (e !== void 0)
    return e === null ? null : {
      level: e.level,
      message: e.message
    };
}
function LJ(e) {
  let t = !0;
  return t = t && "encoded_receipt" in e, t = t && "receipt" in e, t = t && "resource_changes" in e, t = t && "logs" in e, t;
}
function v0(e) {
  return _0(e);
}
function _0(e, t) {
  return e == null ? e : {
    encoded_receipt: e.encoded_receipt,
    receipt: e.receipt,
    resource_changes: e.resource_changes,
    logs: e.logs.map(g0)
  };
}
function zJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      encoded_receipt: e.encoded_receipt,
      receipt: e.receipt,
      resource_changes: e.resource_changes,
      logs: e.logs.map(h0)
    };
}
function UJ(e) {
  let t = !0;
  return t = t && "intent_hash" in e, t;
}
function ZJ(e) {
  return b0(e);
}
function b0(e, t) {
  return e == null ? e : {
    intent_hash: e.intent_hash
  };
}
function S0(e) {
  if (e !== void 0)
    return e === null ? null : {
      intent_hash: e.intent_hash
    };
}
function qJ(e) {
  let t = !0;
  return t = t && "intent_hash" in e, t;
}
function BJ(e) {
  return O0(e);
}
function O0(e, t) {
  return e == null ? e : {
    intent_hash: e.intent_hash
  };
}
function GJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      intent_hash: e.intent_hash
    };
}
function WJ(e) {
  let t = !0;
  return t = t && "payload_hash" in e, t = t && "status" in e, t;
}
function Xu(e) {
  return N0(e);
}
function N0(e, t) {
  return e == null ? e : {
    payload_hash: e.payload_hash,
    status: Ar(e.status),
    payload_status: c(e, "payload_status") ? l0(e.payload_status) : void 0,
    payload_status_description: c(e, "payload_status_description") ? e.payload_status_description : void 0,
    error_message: c(e, "error_message") ? e.error_message : void 0,
    latest_error_message: c(e, "latest_error_message") ? e.latest_error_message : void 0,
    handling_status: c(e, "handling_status") ? o0(e.handling_status) : void 0,
    handling_status_reason: c(e, "handling_status_reason") ? e.handling_status_reason : void 0,
    submission_error: c(e, "submission_error") ? e.submission_error : void 0
  };
}
function $u(e) {
  if (e !== void 0)
    return e === null ? null : {
      payload_hash: e.payload_hash,
      status: e.status,
      payload_status: e.payload_status,
      payload_status_description: e.payload_status_description,
      error_message: e.error_message,
      latest_error_message: e.latest_error_message,
      handling_status: e.handling_status,
      handling_status_reason: e.handling_status_reason,
      submission_error: e.submission_error
    };
}
function KJ(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "status" in e, t = t && "intent_status" in e, t = t && "intent_status_description" in e, t = t && "known_payloads" in e, t;
}
function A0(e) {
  return I0(e);
}
function I0(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    status: Ar(e.status),
    intent_status: Qu(e.intent_status),
    intent_status_description: e.intent_status_description,
    known_payloads: e.known_payloads.map(Xu),
    committed_state_version: c(e, "committed_state_version") ? e.committed_state_version : void 0,
    error_message: c(e, "error_message") ? e.error_message : void 0
  };
}
function HJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      status: e.status,
      intent_status: e.intent_status,
      intent_status_description: e.intent_status_description,
      known_payloads: e.known_payloads.map($u),
      committed_state_version: e.committed_state_version,
      error_message: e.error_message
    };
}
function YJ(e) {
  let t = !0;
  return t = t && "status" in e, t = t && "intent_status" in e, t = t && "intent_status_description" in e, t = t && "known_payloads" in e, t;
}
function QJ(e) {
  return w0(e);
}
function w0(e, t) {
  return e == null ? e : {
    status: Ar(e.status),
    intent_status: Qu(e.intent_status),
    intent_status_description: e.intent_status_description,
    known_payloads: e.known_payloads.map(Xu),
    committed_state_version: c(e, "committed_state_version") ? e.committed_state_version : void 0,
    error_message: c(e, "error_message") ? e.error_message : void 0
  };
}
function XJ(e) {
  if (e !== void 0)
    return e === null ? null : {
      status: e.status,
      intent_status: e.intent_status,
      intent_status_description: e.intent_status_description,
      known_payloads: e.known_payloads.map($u),
      committed_state_version: e.committed_state_version,
      error_message: e.error_message
    };
}
function $J(e) {
  let t = !0;
  return t = t && "notarized_transaction_hex" in e, t;
}
function eL(e) {
  return x0(e);
}
function x0(e, t) {
  return e == null ? e : {
    notarized_transaction_hex: e.notarized_transaction_hex
  };
}
function T0(e) {
  if (e !== void 0)
    return e === null ? null : {
      notarized_transaction_hex: e.notarized_transaction_hex
    };
}
function tL(e) {
  let t = !0;
  return t = t && "duplicate" in e, t;
}
function k0(e) {
  return M0(e);
}
function M0(e, t) {
  return e == null ? e : {
    duplicate: e.duplicate
  };
}
function nL(e) {
  if (e !== void 0)
    return e === null ? null : {
      duplicate: e.duplicate
    };
}
function rL(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function aL(e) {
  return E0(e);
}
function E0(e, t) {
  return e == null ? e : {
    items: e.items.map(Bu)
  };
}
function iL(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(Gu)
    };
}
function oL(e) {
  let t = !0;
  return t = t && "address" in e, t = t && "epochs_active_in" in e, t;
}
function C0(e) {
  return D0(e);
}
function D0(e, t) {
  return e == null ? e : {
    address: e.address,
    proposals_made: c(e, "proposals_made") ? e.proposals_made : void 0,
    proposals_missed: c(e, "proposals_missed") ? e.proposals_missed : void 0,
    epochs_active_in: e.epochs_active_in
  };
}
function P0(e) {
  if (e !== void 0)
    return e === null ? null : {
      address: e.address,
      proposals_made: e.proposals_made,
      proposals_missed: e.proposals_missed,
      epochs_active_in: e.epochs_active_in
    };
}
function sL(e) {
  let t = !0;
  return t = t && "items" in e, t;
}
function ec(e) {
  return R0(e);
}
function R0(e, t) {
  return e == null ? e : {
    items: e.items.map(C0)
  };
}
function tc(e) {
  if (e !== void 0)
    return e === null ? null : {
      items: e.items.map(P0)
    };
}
function lL(e) {
  return !0;
}
function uL(e) {
  return F0(e);
}
function F0(e, t) {
  return e == null ? e : {
    at_ledger_state: c(e, "at_ledger_state") ? ye(e.at_ledger_state) : void 0,
    from_ledger_state: c(e, "from_ledger_state") ? ye(e.from_ledger_state) : void 0,
    validator_addresses: c(e, "validator_addresses") ? e.validator_addresses : void 0
  };
}
function V0(e) {
  if (e !== void 0)
    return e === null ? null : {
      at_ledger_state: he(e.at_ledger_state),
      from_ledger_state: he(e.from_ledger_state),
      validator_addresses: e.validator_addresses
    };
}
function cL(e) {
  return !0;
}
function dL(e) {
  return j0(e);
}
function j0(e, t) {
  return e == null ? e : {
    validator_addresses: c(e, "validator_addresses") ? e.validator_addresses : void 0
  };
}
function pL(e) {
  if (e !== void 0)
    return e === null ? null : {
      validator_addresses: e.validator_addresses
    };
}
function fL(e) {
  let t = !0;
  return t = t && "ledger_state" in e, t = t && "validators" in e, t;
}
function J0(e) {
  return L0(e);
}
function L0(e, t) {
  return e == null ? e : {
    ledger_state: ve(e.ledger_state),
    validators: ec(e.validators)
  };
}
function mL(e) {
  if (e !== void 0)
    return e === null ? null : {
      ledger_state: _e(e.ledger_state),
      validators: tc(e.validators)
    };
}
function gL(e) {
  let t = !0;
  return t = t && "validators" in e, t;
}
function yL(e) {
  return z0(e);
}
function z0(e, t) {
  return e == null ? e : {
    validators: ec(e.validators)
  };
}
function hL(e) {
  if (e !== void 0)
    return e === null ? null : {
      validators: tc(e.validators)
    };
}
class U0 extends Nr {
  async entityFungibleResourceVaultPageRaw(t, n) {
    if (t.stateEntityFungibleResourceVaultsPageRequest === null || t.stateEntityFungibleResourceVaultsPageRequest === void 0)
      throw new be("stateEntityFungibleResourceVaultsPageRequest", "Required parameter requestParameters.stateEntityFungibleResourceVaultsPageRequest was null or undefined when calling entityFungibleResourceVaultPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/fungible-vaults/",
      method: "POST",
      headers: a,
      query: r,
      body: I_(t.stateEntityFungibleResourceVaultsPageRequest)
    }, n);
    return new ce(i, (o) => x_(o));
  }
  async entityFungibleResourceVaultPage(t, n) {
    return await (await this.entityFungibleResourceVaultPageRaw(t, n)).value();
  }
  async entityFungiblesPageRaw(t, n) {
    if (t.stateEntityFungiblesPageRequest === null || t.stateEntityFungiblesPageRequest === void 0)
      throw new be("stateEntityFungiblesPageRequest", "Required parameter requestParameters.stateEntityFungiblesPageRequest was null or undefined when calling entityFungiblesPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/fungibles/",
      method: "POST",
      headers: a,
      query: r,
      body: E_(t.stateEntityFungiblesPageRequest)
    }, n);
    return new ce(i, (o) => D_(o));
  }
  async entityFungiblesPage(t, n) {
    return await (await this.entityFungiblesPageRaw(t, n)).value();
  }
  async entityMetadataPageRaw(t, n) {
    if (t.stateEntityMetadataPageRequest === null || t.stateEntityMetadataPageRequest === void 0)
      throw new be("stateEntityMetadataPageRequest", "Required parameter requestParameters.stateEntityMetadataPageRequest was null or undefined when calling entityMetadataPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/metadata",
      method: "POST",
      headers: a,
      query: r,
      body: F_(t.stateEntityMetadataPageRequest)
    }, n);
    return new ce(i, (o) => j_(o));
  }
  async entityMetadataPage(t, n) {
    return await (await this.entityMetadataPageRaw(t, n)).value();
  }
  async entityNonFungibleIdsPageRaw(t, n) {
    if (t.stateEntityNonFungibleIdsPageRequest === null || t.stateEntityNonFungibleIdsPageRequest === void 0)
      throw new be("stateEntityNonFungibleIdsPageRequest", "Required parameter requestParameters.stateEntityNonFungibleIdsPageRequest was null or undefined when calling entityNonFungibleIdsPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/non-fungible-vault/ids",
      method: "POST",
      headers: a,
      query: r,
      body: z_(t.stateEntityNonFungibleIdsPageRequest)
    }, n);
    return new ce(i, (o) => Z_(o));
  }
  async entityNonFungibleIdsPage(t, n) {
    return await (await this.entityNonFungibleIdsPageRaw(t, n)).value();
  }
  async entityNonFungibleResourceVaultPageRaw(t, n) {
    if (t.stateEntityNonFungibleResourceVaultsPageRequest === null || t.stateEntityNonFungibleResourceVaultsPageRequest === void 0)
      throw new be("stateEntityNonFungibleResourceVaultsPageRequest", "Required parameter requestParameters.stateEntityNonFungibleResourceVaultsPageRequest was null or undefined when calling entityNonFungibleResourceVaultPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/non-fungible-vaults/",
      method: "POST",
      headers: a,
      query: r,
      body: W_(t.stateEntityNonFungibleResourceVaultsPageRequest)
    }, n);
    return new ce(i, (o) => H_(o));
  }
  async entityNonFungibleResourceVaultPage(t, n) {
    return await (await this.entityNonFungibleResourceVaultPageRaw(t, n)).value();
  }
  async entityNonFungiblesPageRaw(t, n) {
    if (t.stateEntityNonFungiblesPageRequest === null || t.stateEntityNonFungiblesPageRequest === void 0)
      throw new be("stateEntityNonFungiblesPageRequest", "Required parameter requestParameters.stateEntityNonFungiblesPageRequest was null or undefined when calling entityNonFungiblesPage.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/page/non-fungibles/",
      method: "POST",
      headers: a,
      query: r,
      body: $_(t.stateEntityNonFungiblesPageRequest)
    }, n);
    return new ce(i, (o) => tb(o));
  }
  async entityNonFungiblesPage(t, n) {
    return await (await this.entityNonFungiblesPageRaw(t, n)).value();
  }
  async keyValueStoreDataRaw(t, n) {
    if (t.stateKeyValueStoreDataRequest === null || t.stateKeyValueStoreDataRequest === void 0)
      throw new be("stateKeyValueStoreDataRequest", "Required parameter requestParameters.stateKeyValueStoreDataRequest was null or undefined when calling keyValueStoreData.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/key-value-store/data",
      method: "POST",
      headers: a,
      query: r,
      body: ib(t.stateKeyValueStoreDataRequest)
    }, n);
    return new ce(i, (o) => lb(o));
  }
  async keyValueStoreData(t, n) {
    return await (await this.keyValueStoreDataRaw(t, n)).value();
  }
  async nonFungibleDataRaw(t, n) {
    if (t.stateNonFungibleDataRequest === null || t.stateNonFungibleDataRequest === void 0)
      throw new be("stateNonFungibleDataRequest", "Required parameter requestParameters.stateNonFungibleDataRequest was null or undefined when calling nonFungibleData.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/non-fungible/data",
      method: "POST",
      headers: a,
      query: r,
      body: pb(t.stateNonFungibleDataRequest)
    }, n);
    return new ce(i, (o) => mb(o));
  }
  async nonFungibleData(t, n) {
    return await (await this.nonFungibleDataRaw(t, n)).value();
  }
  async nonFungibleIdsRaw(t, n) {
    if (t.stateNonFungibleIdsRequest === null || t.stateNonFungibleIdsRequest === void 0)
      throw new be("stateNonFungibleIdsRequest", "Required parameter requestParameters.stateNonFungibleIdsRequest was null or undefined when calling nonFungibleIds.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/non-fungible/ids",
      method: "POST",
      headers: a,
      query: r,
      body: vb(t.stateNonFungibleIdsRequest)
    }, n);
    return new ce(i, (o) => bb(o));
  }
  async nonFungibleIds(t, n) {
    return await (await this.nonFungibleIdsRaw(t, n)).value();
  }
  async nonFungibleLocationRaw(t, n) {
    if (t.stateNonFungibleLocationRequest === null || t.stateNonFungibleLocationRequest === void 0)
      throw new be("stateNonFungibleLocationRequest", "Required parameter requestParameters.stateNonFungibleLocationRequest was null or undefined when calling nonFungibleLocation.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/non-fungible/location",
      method: "POST",
      headers: a,
      query: r,
      body: Ab(t.stateNonFungibleLocationRequest)
    }, n);
    return new ce(i, (o) => xb(o));
  }
  async nonFungibleLocation(t, n) {
    return await (await this.nonFungibleLocationRaw(t, n)).value();
  }
  async stateEntityDetailsRaw(t, n) {
    if (t.stateEntityDetailsRequest === null || t.stateEntityDetailsRequest === void 0)
      throw new be("stateEntityDetailsRequest", "Required parameter requestParameters.stateEntityDetailsRequest was null or undefined when calling stateEntityDetails.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/entity/details",
      method: "POST",
      headers: a,
      query: r,
      body: Bv(t.stateEntityDetailsRequest)
    }, n);
    return new ce(i, (o) => c_(o));
  }
  async stateEntityDetails(t, n) {
    return await (await this.stateEntityDetailsRaw(t, n)).value();
  }
  async stateValidatorsListRaw(t, n) {
    if (t.stateValidatorsListRequest === null || t.stateValidatorsListRequest === void 0)
      throw new be("stateValidatorsListRequest", "Required parameter requestParameters.stateValidatorsListRequest was null or undefined when calling stateValidatorsList.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/state/validators/list",
      method: "POST",
      headers: a,
      query: r,
      body: Eb(t.stateValidatorsListRequest)
    }, n);
    return new ce(i, (o) => Jb(o));
  }
  async stateValidatorsList(t, n) {
    return await (await this.stateValidatorsListRaw(t, n)).value();
  }
}
class Z0 extends Nr {
  async validatorsUptimeRaw(t, n) {
    if (t.validatorsUptimeRequest === null || t.validatorsUptimeRequest === void 0)
      throw new be("validatorsUptimeRequest", "Required parameter requestParameters.validatorsUptimeRequest was null or undefined when calling validatorsUptime.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/statistics/validators/uptime",
      method: "POST",
      headers: a,
      query: r,
      body: V0(t.validatorsUptimeRequest)
    }, n);
    return new ce(i, (o) => J0(o));
  }
  async validatorsUptime(t, n) {
    return await (await this.validatorsUptimeRaw(t, n)).value();
  }
}
class q0 extends Nr {
  async gatewayStatusRaw(t) {
    const n = {}, r = {}, a = await this.request({
      path: "/status/gateway-status",
      method: "POST",
      headers: r,
      query: n
    }, t);
    return new ce(a, (i) => Wy(i));
  }
  async gatewayStatus(t) {
    return await (await this.gatewayStatusRaw(t)).value();
  }
  async networkConfigurationRaw(t) {
    const n = {}, r = {}, a = await this.request({
      path: "/status/network-configuration",
      method: "POST",
      headers: r,
      query: n
    }, t);
    return new ce(a, (i) => Jh(i));
  }
  async networkConfiguration(t) {
    return await (await this.networkConfigurationRaw(t)).value();
  }
}
class B0 extends Nr {
  async streamTransactionsRaw(t, n) {
    if (t.streamTransactionsRequest === null || t.streamTransactionsRequest === void 0)
      throw new be("streamTransactionsRequest", "Required parameter requestParameters.streamTransactionsRequest was null or undefined when calling streamTransactions.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/stream/transactions",
      method: "POST",
      headers: a,
      query: r,
      body: Bb(t.streamTransactionsRequest)
    }, n);
    return new ce(i, (o) => Wb(o));
  }
  async streamTransactions(t, n) {
    return await (await this.streamTransactionsRaw(t, n)).value();
  }
}
class G0 extends Nr {
  async transactionCommittedDetailsRaw(t, n) {
    if (t.transactionCommittedDetailsRequest === null || t.transactionCommittedDetailsRequest === void 0)
      throw new be("transactionCommittedDetailsRequest", "Required parameter requestParameters.transactionCommittedDetailsRequest was null or undefined when calling transactionCommittedDetails.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/transaction/committed-details",
      method: "POST",
      headers: a,
      query: r,
      body: Qb(t.transactionCommittedDetailsRequest)
    }, n);
    return new ce(i, (o) => $b(o));
  }
  async transactionCommittedDetails(t, n) {
    return await (await this.transactionCommittedDetailsRaw(t, n)).value();
  }
  async transactionConstructionRaw(t) {
    const n = {}, r = {}, a = await this.request({
      path: "/transaction/construction",
      method: "POST",
      headers: r,
      query: n
    }, t);
    return new ce(a, (i) => n0(i));
  }
  async transactionConstruction(t) {
    return await (await this.transactionConstructionRaw(t)).value();
  }
  async transactionPreviewRaw(t, n) {
    if (t.transactionPreviewRequest === null || t.transactionPreviewRequest === void 0)
      throw new be("transactionPreviewRequest", "Required parameter requestParameters.transactionPreviewRequest was null or undefined when calling transactionPreview.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/transaction/preview",
      method: "POST",
      headers: a,
      query: r,
      body: m0(t.transactionPreviewRequest)
    }, n);
    return new ce(i, (o) => v0(o));
  }
  async transactionPreview(t, n) {
    return await (await this.transactionPreviewRaw(t, n)).value();
  }
  async transactionStatusRaw(t, n) {
    if (t.transactionStatusRequest === null || t.transactionStatusRequest === void 0)
      throw new be("transactionStatusRequest", "Required parameter requestParameters.transactionStatusRequest was null or undefined when calling transactionStatus.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/transaction/status",
      method: "POST",
      headers: a,
      query: r,
      body: S0(t.transactionStatusRequest)
    }, n);
    return new ce(i, (o) => A0(o));
  }
  async transactionStatus(t, n) {
    return await (await this.transactionStatusRaw(t, n)).value();
  }
  async transactionSubmitRaw(t, n) {
    if (t.transactionSubmitRequest === null || t.transactionSubmitRequest === void 0)
      throw new be("transactionSubmitRequest", "Required parameter requestParameters.transactionSubmitRequest was null or undefined when calling transactionSubmit.");
    const r = {}, a = {};
    a["Content-Type"] = "application/json";
    const i = await this.request({
      path: "/transaction/submit",
      method: "POST",
      headers: a,
      query: r,
      body: T0(t.transactionSubmitRequest)
    }, n);
    return new ce(i, (o) => k0(o));
  }
  async transactionSubmit(t, n) {
    return await (await this.transactionSubmitRaw(t, n)).value();
  }
}
const qr = (e, t) => {
  const n = [];
  for (let r = 0, a = e.length; r < a; r += t)
    n.push(e.slice(r, r + t));
  return n;
}, rs = async (e, t) => {
  let n = t;
  const r = [];
  do {
    const a = await e(n);
    r.push(...a.items), n = a.next_cursor;
  } while (n);
  return r;
}, as = async (e, t) => {
  let n = t;
  const r = [];
  let a;
  do {
    const i = await e(n);
    a = i.ledger_state, r.push(...i.items), n = i.next_cursor;
  } while (n);
  return {
    aggregatedEntities: r,
    ledger_state: a
  };
};
class W0 {
  constructor(t, n) {
    this.innerClient = t, this.configuration = n;
  }
  async getEntityDetailsVaultAggregated(t, n, r) {
    var a, i, o, s, l;
    const u = Array.isArray(t);
    if (u && t.length === 0)
      return Promise.resolve([]);
    if (u && t.length > this.configuration.maxAddressesCount) {
      const m = qr(t, this.configuration.maxAddressesCount);
      return Promise.all(
        m.map(
          (h) => this.getEntityDetailsVaultAggregated(h, n, r)
        )
      ).then((h) => h.flat());
    }
    const { items: p, ledger_state: g } = await this.innerClient.stateEntityDetails({
      stateEntityDetailsRequest: {
        addresses: u ? t : [t],
        aggregation_level: Vy.Vault,
        opt_ins: {
          ancestor_identities: (a = n == null ? void 0 : n.ancestorIdentities) != null ? a : !1,
          component_royalty_vault_balance: (i = n == null ? void 0 : n.componentRoyaltyVaultBalance) != null ? i : !1,
          package_royalty_vault_balance: (o = n == null ? void 0 : n.packageRoyaltyVaultBalance) != null ? o : !1,
          non_fungible_include_nfids: (s = n == null ? void 0 : n.nonFungibleIncludeNfids) != null ? s : !0,
          explicit_metadata: (l = n == null ? void 0 : n.explicitMetadata) != null ? l : []
        },
        at_ledger_state: r
      }
    }).then((m) => this.ensureResourcesProperties(m));
    return u ? Promise.all(
      p.map(
        (m) => this.queryAllFungibles(
          m,
          r || {
            state_version: g.state_version
          }
        )
      )
    ) : this.queryAllFungibles(
      p[0],
      r || {
        state_version: g.state_version
      }
    );
  }
  async getEntityMetadata(t, n) {
    return this.innerClient.entityMetadataPage({
      stateEntityMetadataPageRequest: {
        address: t,
        cursor: n
      }
    });
  }
  async getNonFungibleLocation(t, n) {
    if (n.length > this.configuration.maxNftIdsCount) {
      const r = qr(n, this.configuration.maxNftIdsCount);
      return Promise.all(
        r.map((a) => this.getNonFungibleLocation(t, a))
      ).then((a) => a.flat());
    }
    return this.innerClient.nonFungibleLocation({
      stateNonFungibleLocationRequest: {
        resource_address: t,
        non_fungible_ids: n
      }
    }).then((r) => r.non_fungible_ids);
  }
  async getAllEntityMetadata(t, n) {
    return rs(
      this.getEntityMetadata.bind(this, t),
      n
    );
  }
  async getValidators(t) {
    return this.innerClient.stateValidatorsList({
      stateValidatorsListRequest: {
        cursor: t || null
      }
    }).then(({ validators: n }) => n);
  }
  async getAllValidators(t) {
    return rs(this.getValidators.bind(this), t);
  }
  async getValidatorsWithLedgerState(t) {
    return this.innerClient.stateValidatorsList({
      stateValidatorsListRequest: {
        cursor: t || null
      }
    });
  }
  async getAllValidatorsWithLedgerState(t) {
    return as(
      (n) => this.getValidatorsWithLedgerState(n).then((r) => ({
        items: r.validators.items,
        ledger_state: r.ledger_state
      })),
      t
    );
  }
  async getNonFungibleIds(t, n, r) {
    return this.innerClient.nonFungibleIds({
      stateNonFungibleIdsRequest: {
        resource_address: t,
        cursor: r,
        at_ledger_state: n
      }
    }).then(({ non_fungible_ids: a }) => a);
  }
  async getAllNonFungibleIds(t, n, r) {
    let a = r, i = n;
    const o = [];
    do {
      const s = await this.innerClient.nonFungibleIds({
        stateNonFungibleIdsRequest: {
          resource_address: t,
          cursor: i,
          at_ledger_state: a
        }
      });
      o.push(...s.non_fungible_ids.items), a = a || {
        state_version: s.ledger_state.state_version
      }, i = s.non_fungible_ids.next_cursor;
    } while (i);
    return o;
  }
  async getNonFungibleData(t, n, r) {
    const a = Array.isArray(n);
    if (a && n.length === 0)
      return Promise.resolve([]);
    if (a && n.length > this.configuration.maxNftIdsCount) {
      const o = qr(n, this.configuration.maxNftIdsCount);
      return Promise.all(
        o.map(
          (s) => this.getNonFungibleData(t, s, r)
        )
      ).then((s) => s.flat());
    }
    const { non_fungible_ids: i } = await this.innerClient.nonFungibleData({
      stateNonFungibleDataRequest: {
        resource_address: t,
        non_fungible_ids: a ? n : [n],
        at_ledger_state: r
      }
    });
    return a ? i : i[0];
  }
  async getEntityFungiblesPageVaultAggregated(t, n, r) {
    return this.innerClient.entityFungiblesPage({
      stateEntityFungiblesPageRequest: {
        address: t,
        cursor: n,
        aggregation_level: "Vault",
        at_ledger_state: r
      }
    });
  }
  async queryAllFungibles(t, n) {
    var r, a;
    const i = (r = t == null ? void 0 : t.fungible_resources) == null ? void 0 : r.next_cursor;
    if (!i)
      return Promise.resolve(t);
    const o = await as(
      (s) => this.getEntityFungiblesPageVaultAggregated(
        t.address,
        s,
        n
      ),
      i
    );
    return Promise.resolve({
      ...t,
      fungible_resources: {
        items: [
          ...((a = t == null ? void 0 : t.fungible_resources) == null ? void 0 : a.items) || [],
          ...o.aggregatedEntities
        ]
      }
    });
  }
  ensureResourcesProperties(t) {
    return {
      ...t,
      items: t.items.map((n) => ({
        ...n,
        fungible_resources: n.fungible_resources || {
          total_count: 0,
          items: []
        },
        non_fungible_resources: n.non_fungible_resources || {
          total_count: 0,
          items: []
        }
      }))
    };
  }
}
const vL = 20, _L = 29, is = 200, bL = "1.2.0", ot = {
  Mainnet: 1,
  Stokenet: 2,
  Alphanet: 10,
  Betanet: 11,
  Kisharnet: 12,
  RCnetV1: 12,
  Zabanet: 14,
  RCnetV3: 14,
  Gilganet: 32,
  Enkinet: 33,
  Hammunet: 34,
  Nergalnet: 35,
  Mardunet: 36,
  Dumunet: 37,
  LocalNet: 240,
  InternalTestNet: 241,
  Simulator: 242
}, K0 = {
  Mainnet: {
    networkName: "Mainnet",
    networkId: ot.Mainnet,
    gatewayUrl: "https://mainnet.radixdlt.com",
    dashboardUrl: "https://dashboard.radixdlt.com"
  },
  Stokenet: {
    networkName: "Stokenet",
    networkId: ot.Stokenet,
    gatewayUrl: "https://babylon-stokenet-gateway.radixdlt.com",
    dashboardUrl: "https://stokenet-dashboard.radixdlt.com"
  },
  Kisharnet: {
    networkName: "Kisharnet",
    networkId: ot.Kisharnet,
    gatewayUrl: "https://kisharnet-gateway.radixdlt.com",
    dashboardUrl: "https://kisharnet-dashboard.radixdlt.com"
  },
  RCnetV1: {
    networkName: "RCnetV1",
    networkId: ot.RCnetV1,
    gatewayUrl: "https://rcnet.radixdlt.com",
    dashboardUrl: "https://rcnet-dashboard.radixdlt.com"
  },
  Zabanet: {
    networkName: "Zabanet",
    networkId: ot.Zabanet,
    gatewayUrl: "https://zabanet-gateway.radixdlt.com",
    dashboardUrl: "https://rcnet-v3-dashboard.radixdlt.com"
  },
  RCnetV3: {
    networkName: "RCNetV3",
    networkId: ot.RCnetV3,
    gatewayUrl: "https://zabanet-gateway.radixdlt.com",
    dashboardUrl: "https://rcnet-v3-dashboard.radixdlt.com"
  },
  Gilganet: {
    networkName: "Gilganet",
    networkId: ot.Gilganet,
    gatewayUrl: "https://gilganet-gateway.radixdlt.com",
    dashboardUrl: ""
  },
  Enkinet: {
    networkName: "Enkinet",
    networkId: ot.Enkinet,
    gatewayUrl: "https://enkinet-gateway.radixdlt.com",
    dashboardUrl: "https://enkinet-dashboard.rdx-works-main.extratools.works"
  },
  Hammunet: {
    networkName: "Hammunet",
    networkId: ot.Hammunet,
    gatewayUrl: "https://hammunet-gateway.radixdlt.com",
    dashboardUrl: "https://hammunet-dashboard.rdx-works-main.extratools.works"
  },
  Dumunet: {
    networkName: "Dumunet",
    networkId: ot.Dumunet,
    gatewayUrl: "https://dumunet-gateway.radixdlt.com",
    dashboardUrl: "https://dumunet-dashboard.rdx-works-main.extratools.works"
  }
}, os = Object.values(K0).reduce(
  (e, t) => (e[t.networkId] = t, e),
  {}
);
class H0 {
  constructor(t, n) {
    this.innerClient = t, this.configuration = n;
  }
  getValidatorsUptimeFromTo(t, n, r) {
    var a, i;
    if (t.length > (((a = this.configuration) == null ? void 0 : a.maxValidatorsUptimeCount) || is)) {
      const o = qr(
        t,
        ((i = this.configuration) == null ? void 0 : i.maxValidatorsUptimeCount) || is
      );
      return Promise.all(
        o.map((s) => this.getValidatorsUptimeFromTo(s, n, r))
      ).then((s) => s.flat());
    }
    return this.innerClient.validatorsUptime({
      validatorsUptimeRequest: {
        validator_addresses: t,
        from_ledger_state: n !== void 0 ? n instanceof Date ? { timestamp: n } : { state_version: n } : void 0,
        at_ledger_state: r !== void 0 ? r instanceof Date ? { timestamp: r } : { state_version: r } : void 0
      }
    }).then((o) => o.validators.items);
  }
  getValidatorsUptime(t) {
    return this.innerClient.validatorsUptime({
      validatorsUptimeRequest: {
        validator_addresses: t
      }
    });
  }
}
class Y0 {
  constructor(t) {
    this.innerClient = t;
  }
  getCurrent() {
    return this.innerClient.gatewayStatus();
  }
  getNetworkConfiguration() {
    return this.innerClient.networkConfiguration();
  }
}
class Q0 {
  constructor(t) {
    this.innerClient = t;
  }
  getTransactionsList(t, n) {
    return this.innerClient.streamTransactions({
      streamTransactionsRequest: {
        cursor: n,
        affected_global_entities_filter: t
      }
    });
  }
}
class X0 {
  constructor(t) {
    this.innerClient = t;
  }
  getStatus(t) {
    return this.innerClient.transactionStatus({
      transactionStatusRequest: {
        intent_hash: t
      }
    });
  }
  getCommittedDetails(t, n) {
    var r, a, i, o, s, l, u, p, g, m;
    return this.innerClient.transactionCommittedDetails({
      transactionCommittedDetailsRequest: {
        intent_hash: t,
        opt_ins: {
          raw_hex: (r = n == null ? void 0 : n.rawHex) != null ? r : !0,
          receipt_events: (a = n == null ? void 0 : n.receiptEvents) != null ? a : !0,
          receipt_fee_source: (i = n == null ? void 0 : n.receiptFeeSource) != null ? i : !0,
          receipt_fee_destination: (o = n == null ? void 0 : n.receiptFeeDestination) != null ? o : !0,
          receipt_costing_parameters: (s = n == null ? void 0 : n.receiptCostingParameters) != null ? s : !0,
          receipt_fee_summary: (l = n == null ? void 0 : n.receiptFeeSummary) != null ? l : !0,
          receipt_state_changes: (u = n == null ? void 0 : n.receiptStateChanges) != null ? u : !0,
          affected_global_entities: (p = n == null ? void 0 : n.affectedGlobalEntities) != null ? p : !0,
          balance_changes: (g = n == null ? void 0 : n.balanceChanges) != null ? g : !0,
          receipt_output: (m = n == null ? void 0 : n.receiptOutput) != null ? m : !0
        }
      }
    });
  }
}
class SL extends Ds {
  constructor(t) {
    super(t), st(this, "extendedConfiguration"), this.extendedConfiguration = t;
  }
  get maxAddressesCount() {
    return this.extendedConfiguration.maxAddressesCount || vL;
  }
  get maxNftIdsCount() {
    return this.extendedConfiguration.maxNftIdsCount || _L;
  }
  get maxValidatorsUptimeCount() {
    return this.extendedConfiguration.maxValidatorsUptimeCount || is;
  }
}
const OL = (e) => e ? e.endsWith("/") ? e == null ? void 0 : e.slice(0, -1) : e : "";
class ra {
  constructor(t) {
    st(this, "state"), st(this, "stream"), st(this, "status"), st(this, "transaction"), st(this, "statistics"), st(this, "lowLevel"), this.lowLevel = {
      state: new U0(t),
      stream: new B0(t),
      status: new q0(t),
      transaction: new G0(t),
      statistics: new Z0(t)
    }, this.state = new W0(this.lowLevel.state, t), this.stream = new Q0(this.lowLevel.stream), this.status = new Y0(this.lowLevel.status), this.transaction = new X0(this.lowLevel.transaction), this.statistics = new H0(this.lowLevel.statistics, t);
  }
  static initialize(t) {
    const n = ra.constructConfiguration(t);
    return new ra(n);
  }
  static constructConfiguration(t) {
    var n, r, a, i;
    const o = OL(t == null ? void 0 : t.basePath), s = (n = t == null ? void 0 : t.applicationName) != null ? n : "Unknown";
    return new SL({
      ...t,
      basePath: o,
      applicationName: s,
      headers: {
        ...(r = t == null ? void 0 : t.headers) != null ? r : {},
        "RDX-Client-Name": "@radixdlt/babylon-gateway-api-sdk",
        "RDX-Client-Version": bL,
        "RDX-App-Name": s,
        "RDX-App-Version": (a = t.applicationVersion) != null ? a : "Unknown",
        "RDX-App-Dapp-Definition": (i = t.applicationDappDefinitionAddress) != null ? i : "Unknown"
      }
    });
  }
}
const NL = (e) => {
  const t = e.logger, n = e.requestItemClient, r = e.walletSdk, a = e.gatewayClient, i = new Ve(), o = (u) => {
    const p = new Ve();
    return {
      eventCallback: (g) => {
        p.next(g);
      },
      requestControl: ({ cancelRequest: g, getRequest: m }) => {
        yo(
          p.pipe(
            Dt((h) => h === "receivedByWallet"),
            yt(() => m()),
            K((h) => {
              h.items.discriminator === "transaction" && n.patch(u, { showCancel: !1 });
            })
          )
        ), yo(
          Br(e.onCancelRequestItem$, i).pipe(
            Dt((h) => h === u),
            Et(() => (n.cancel(u), n.updateStatus({
              id: u,
              status: "fail",
              error: "userCancelledRequest"
            }), g()))
          )
        );
      }
    };
  }, s = (u, p) => r.request(u, o(p)).map((g) => (t == null || t.debug("⬇️walletSuccessResponse", g), g)).mapErr((g) => (t == null || t.debug("⬇️walletErrorResponse", g), n.updateStatus({
    id: p,
    status: "fail",
    error: g.error
  }), g)), l = new Nt();
  return {
    request: s,
    sendTransaction: ({
      onTransactionId: u,
      ...p
    }) => {
      const { id: g } = n.add("sendTransaction");
      return r.sendTransaction({ version: 1, ...p }, o(g)).mapErr((m) => (n.updateStatus({
        id: g,
        status: "fail",
        error: m.error
      }), t == null || t.debug("⬇️ walletErrorResponse", m), m)).map((m) => (t == null || t.debug("⬇️ walletSuccessResponse", m), m)).andThen(({ transactionIntentHash: m }) => (u && u(m), a.pollTransactionStatus(m).map((h) => ({
        transactionIntentHash: m,
        status: h.status
      })))).andThen((m) => {
        const h = [
          es.Rejected,
          es.CommittedFailure
        ].includes(
          m.status
        );
        return n.updateStatus({
          id: g,
          status: h ? "fail" : "success",
          transactionIntentHash: m.transactionIntentHash
        }), t == null || t.debug("🔁 Gateway polling finished", m), h ? dt({ ...m, error: "transactionNotSuccessful" }) : Ae(m);
      });
    },
    extensionStatus$: r.extensionStatus$,
    requestItems$: n.items$,
    resetRequestItems: n.reset,
    cancelRequest: (u) => i.next(u),
    destroy: () => {
      n.destroy(), r.destroy(), l.unsubscribe();
    }
  };
}, kt = (e) => e, $0 = ({
  basePath: e,
  dAppDefinitionAddress: t,
  applicationName: n,
  applicationVersion: r
}) => {
  const { transaction: a, state: i, status: o } = ra.initialize({
    basePath: e,
    applicationName: n || t || "unknown",
    applicationVersion: r,
    applicationDappDefinitionAddress: t
  });
  return {
    getTransactionStatus: (s) => me.fromPromise(
      a.getStatus(s),
      kt
    ),
    getTransactionDetails: (s) => me.fromPromise(
      a.getCommittedDetails(s),
      kt
    ),
    getEntityDetails: (s) => me.fromPromise(
      i.getEntityDetailsVaultAggregated(s),
      kt
    ),
    getEntitiesDetails: (s) => me.fromPromise(
      i.getEntityDetailsVaultAggregated(s),
      kt
    ),
    getEntityNonFungibleIds: ({
      accountAddress: s,
      nftAddress: l,
      vaultAddress: u
    }) => me.fromPromise(
      i.innerClient.entityNonFungibleIdsPage({
        stateEntityNonFungibleIdsPageRequest: {
          address: s,
          vault_address: u,
          resource_address: l
        }
      }),
      kt
    ),
    getNetworkConfiguration: () => me.fromPromise(o.getNetworkConfiguration(), kt),
    transactionApi: a,
    stateApi: i,
    statusApi: o
  };
}, eS = ({
  maxDelayTime: e = 1e4,
  multiplier: t = 2,
  timeout: n,
  interval: r = 2e3
} = {}) => {
  const a = new Ve();
  let i = 0;
  const o = Br(
    Sp(0),
    a.pipe(
      yt(() => (i = i + 1, i))
    )
  ).pipe(
    Et((l) => {
      const u = l * r * t, p = u > e ? e : u;
      return ho(p).pipe(yt(() => Ae(l)));
    })
  ), s = n ? Br(
    o,
    ho(n).pipe(
      yt(() => dt(Wt("failedToPollSubmittedTransaction", "")))
    )
  ) : o;
  return { trigger: a, withBackoff$: s };
}, tS = (e) => {
  var t;
  const n = (t = e == null ? void 0 : e.value) == null ? void 0 : t.typed;
  return {
    stringified: n != null && n.value ? (n == null ? void 0 : n.value) || "" : n == null ? void 0 : n.values.join(", ")
  };
}, nS = ({
  gatewayApi: e,
  logger: t,
  retryConfig: n
}) => ({ pollTransactionStatus: (r) => {
  const a = eS(n), i = /* @__PURE__ */ new Set([
    "CommittedSuccess",
    "CommittedFailure",
    "Rejected"
  ]);
  return me.fromPromise(
    yo(
      a.withBackoff$.pipe(
        Et((o) => o.isErr() ? [o] : (t == null || t.debug(`pollingTxStatus retry #${o.value + 1}`), e.getTransactionStatus(r).map((s) => {
          if (i.has(s.status))
            return s;
          a.trigger.next();
        }).mapErr((s) => (t == null || t.debug(s), Wt("failedToPollSubmittedTransaction", ""))))),
        Dt(
          (o) => o.isOk() && !!o.value || o.isErr()
        ),
        Np()
      )
    ),
    (o) => o
  ).andThen((o) => o);
}, gatewayApi: e }), AL = () => ({
  initialized: new se(!1),
  onChange: new Ve(),
  items: new se([])
}), IL = (e, t, n) => {
  const r = n.logger, a = /* @__PURE__ */ new Set(), i = new Nt(), o = /* @__PURE__ */ new Map(), s = n.subjects || AL(), l = `${e}:requestItemStore`;
  t.getData(l).map((_) => {
    _ && Object.keys(_).forEach((C) => {
      a.add(C), o.set(C, _[C]);
    }), s.items.next(F());
  });
  const u = (_, C) => s.onChange.next({ oldValue: _, newValue: C }), p = (_) => ({
    type: _,
    status: "pending",
    timestamp: Date.now(),
    id: crypto.randomUUID(),
    showCancel: !0
  }), g = (_) => {
    const C = p(_);
    return o.set(C.id, C), a.add(C.id), u(void 0, C), r == null || r.trace("addRequestItem", {
      id: C.id,
      status: C.status
    }), C;
  }, m = (_) => {
    if (o.has(_)) {
      const C = o.get(_);
      o.delete(_), a.delete(_), u(C, void 0), r == null || r.trace("removeRequestItem", _);
    }
  }, h = (_, C) => {
    const L = o.get(_);
    if (L) {
      const M = {
        ...L,
        ...C
      };
      o.set(_, M), u(L, M), r == null || r.trace("patchRequestItemStatus", M);
    }
  }, I = (_) => {
    o.has(_) && (h(_, { status: "fail", error: rr.canceledByUser }), r == null || r.trace("cancelRequestItem", _));
  }, v = () => {
    o.clear(), a.clear(), u(void 0, void 0), r == null || r.trace("resetRequestItems");
  }, E = ({
    id: _,
    status: C,
    error: L,
    transactionIntentHash: M
  }) => {
    const Y = o.get(_);
    if (Y) {
      const z = {
        ...Y,
        status: C
      };
      z.status === "fail" && (z.error = L), z.status === "success" && z.type === "sendTransaction" && (z.transactionIntentHash = M), o.set(_, z), u(Y, z), r == null || r.trace("updateRequestItemStatus", z);
    }
  }, R = () => [...a].reverse(), F = () => R().map((_) => ({ id: _, ...o.get(_) })).filter((_) => !!_);
  return i.add(
    s.onChange.pipe(
      yt(() => F()),
      K((_) => s.items.next(_)),
      K(() => {
        const _ = Array.from(o.entries());
        t.setData(
          l,
          Object.fromEntries(
            _.filter(([, C]) => C.status !== "pending")
          )
        );
      })
    ).subscribe()
  ), {
    add: g,
    remove: m,
    cancel: I,
    updateStatus: E,
    patch: h,
    reset: v,
    destroy: () => {
      i.unsubscribe();
    },
    items$: s.items,
    change$: s.onChange.asObservable()
  };
}, wL = (e) => {
  try {
    return Ae(JSON.parse(e));
  } catch (t) {
    return dt(kt(t));
  }
}, xL = () => {
  const e = (n) => new Promise((r, a) => {
    try {
      const i = localStorage.getItem(n);
      return r(i || void 0);
    } catch (i) {
      return a(i);
    }
  }), t = (n, r) => new Promise((a, i) => {
    try {
      return localStorage.setItem(n, JSON.stringify(r)), a();
    } catch (o) {
      return i(o);
    }
  });
  return {
    getData: (n) => me.fromPromise(e(n), kt).andThen(
      (r) => r ? wL(r) : Ae(void 0)
    ),
    setData: (n, r) => me.fromPromise(t(n, r), kt)
  };
}, TL = (e) => (t) => {
  var n, r, a;
  let i = [];
  if (e.discriminator === "authorizedRequest") {
    const o = ((n = e.oneTimeAccounts) == null ? void 0 : n.accounts) ?? [], s = ((r = e.ongoingAccounts) == null ? void 0 : r.accounts) ?? [];
    i = [...o, ...s];
  } else
    e.discriminator === "unauthorizedRequest" && (i = ((a = e.oneTimeAccounts) == null ? void 0 : a.accounts) ?? []);
  return le(t, (o) => {
    o.accounts = i;
  });
}, ao = (e) => {
  const t = [];
  return e.name && t.push({
    entry: "fullName",
    fields: e.name
  }), e.emailAddresses && t.push({
    entry: "emailAddresses",
    fields: e.emailAddresses
  }), e.phoneNumbers && t.push({
    entry: "phoneNumbers",
    fields: e.phoneNumbers
  }), t;
}, kL = (e) => (t) => le(t, (n) => {
  e.discriminator === "authorizedRequest" ? (e.oneTimePersonaData && (n.personaData = ao(e.oneTimePersonaData)), e.ongoingPersonaData && (n.personaData = ao(e.ongoingPersonaData))) : e.discriminator === "unauthorizedRequest" && e.oneTimePersonaData && (n.personaData = ao(e.oneTimePersonaData));
}), ML = (e) => (t) => le(t, (n) => {
  var r;
  e.discriminator === "authorizedRequest" && (n.persona = (r = e.auth) == null ? void 0 : r.persona);
}), EL = (e) => (t) => le(t, (n) => {
  var r, a, i, o, s, l;
  if (n.proofs = [], e.discriminator === "authorizedRequest") {
    if (e.auth.discriminator === "loginWithChallenge" && n.proofs.push({
      challenge: e.auth.challenge,
      proof: e.auth.proof,
      address: e.auth.persona.identityAddress,
      type: Tn.persona
    }), (r = e.ongoingAccounts) != null && r.challenge && (a = e.ongoingAccounts.proofs) != null && a.length) {
      const u = e.ongoingAccounts.challenge, p = e.ongoingAccounts.proofs.map(
        ({ accountAddress: g, proof: m }) => ({
          proof: m,
          address: g,
          challenge: u,
          type: Tn.account
        })
      );
      n.proofs.push(...p);
    }
    if ((i = e.oneTimeAccounts) != null && i.challenge && (o = e.oneTimeAccounts.proofs) != null && o.length) {
      const u = e.oneTimeAccounts.challenge, p = e.oneTimeAccounts.proofs.map(
        ({ accountAddress: g, proof: m }) => ({
          proof: m,
          address: g,
          challenge: u,
          type: Tn.account
        })
      );
      n.proofs.push(...p);
    }
  }
  if (e.discriminator === "unauthorizedRequest" && (s = e.oneTimeAccounts) != null && s.challenge && (l = e.oneTimeAccounts.proofs) != null && l.length) {
    const u = e.oneTimeAccounts.challenge, p = e.oneTimeAccounts.proofs.map(
      ({ accountAddress: g, proof: m }) => ({
        proof: m,
        address: g,
        challenge: u,
        type: Tn.account
      })
    );
    n.proofs.push(...p);
  }
}), CL = (e) => Ae({
  accounts: [],
  personaData: [],
  proofs: [],
  persona: void 0
}).map(TL(e)).map(kL(e)).map(ML(e)).map(EL(e));
we({
  accounts: we({
    numberOfAccounts: ct,
    reset: Ke(),
    oneTime: Ke(),
    challenge: ut().optional()
  }).optional(),
  personaData: we({
    fullName: Ke().optional(),
    phoneNumbers: ct.optional(),
    emailAddresses: ct.optional(),
    reset: Ke(),
    oneTime: Ke().optional()
  }).optional(),
  persona: we({
    identityAddress: ut().optional(),
    label: ut().optional(),
    challenge: ut().optional()
  }).optional()
});
const DL = (e) => {
  const { persona: t, accounts: n, personaData: r } = e, a = !!t, i = (n == null ? void 0 : n.reset) || (r == null ? void 0 : r.reset), o = n && !(n != null && n.oneTime), s = r && !(r != null && r.oneTime);
  return !!(i || o || s || a);
}, PL = (e) => {
  var t, n, r;
  return (t = e.persona) != null && t.challenge ? {
    discriminator: "loginWithChallenge",
    challenge: e.persona.challenge
  } : (n = e.persona) != null && n.identityAddress ? {
    discriminator: "usePersona",
    identityAddress: (r = e.persona) == null ? void 0 : r.identityAddress
  } : {
    discriminator: "loginWithoutChallenge"
  };
}, rS = (e) => (t) => {
  var n, r;
  const a = { ...t }, { accounts: i } = e;
  if (i) {
    const o = {
      challenge: i.challenge,
      numberOfAccounts: i.numberOfAccounts
    }, s = a.discriminator === "authorizedRequest" && !((n = e.accounts) != null && n.oneTime), l = a.discriminator === "authorizedRequest";
    (r = e.accounts) != null && r.oneTime ? a.oneTimeAccounts = o : (s || l) && (a.ongoingAccounts = o);
  }
  return a;
}, aS = (e) => (t) => {
  var n, r;
  const a = { ...t };
  if (e.personaData) {
    const {
      fullName: i,
      phoneNumbers: o,
      emailAddresses: s
    } = e.personaData;
    (n = e.personaData) != null && n.oneTime && (a.oneTimePersonaData = {
      isRequestingName: i,
      numberOfRequestedPhoneNumbers: o,
      numberOfRequestedEmailAddresses: s
    });
    const l = a.discriminator === "authorizedRequest" && !((r = e.personaData) != null && r.oneTime), u = a.discriminator === "authorizedRequest";
    (l || u) && (a.ongoingPersonaData = {
      isRequestingName: i,
      numberOfRequestedPhoneNumbers: o,
      numberOfRequestedEmailAddresses: s
    });
  }
  return a;
}, RL = (e) => (t) => {
  const { accounts: n, personaData: r } = e;
  return {
    ...t,
    reset: { accounts: !!(n != null && n.reset), personaData: !!(r != null && r.reset) }
  };
}, FL = (e) => Ae({
  discriminator: "unauthorizedRequest"
}).map(rS(e)).map(aS(e)), VL = (e) => Ae({
  discriminator: "authorizedRequest",
  auth: PL(e)
}).map(rS(e)).map(aS(e)).map(RL(e)), jL = (e, t) => Ae(
  e ? le(t, (n) => {
    n.accounts && (n.accounts.oneTime = !1, n.accounts.reset = !1), n.personaData && (n.personaData.oneTime = !1, n.personaData.reset = !1);
  }) : t
), JL = (e, t) => jL(e, t).andThen(
  (n) => DL(n) ? VL(n) : FL(n)
), LL = ({
  dataRequestState: e,
  isConnect: t,
  challenge: n,
  oneTime: r,
  stateClient: a
}) => JL(
  t,
  le({}, (i) => {
    var o;
    if (e.accounts && (i.accounts = {
      numberOfAccounts: e.accounts.numberOfAccounts || {
        quantifier: "atLeast",
        quantity: 1
      },
      oneTime: r,
      reset: !!e.accounts.reset,
      challenge: e.accounts.withProof ? n : void 0
    }), e.personaData && (i.personaData = {
      ...e.personaData,
      reset: !!e.personaData.reset,
      oneTime: r
    }), !r) {
      const s = a.getState().walletData.persona;
      a.getState().walletData.persona && (i.persona = s), (o = e.persona) != null && o.withProof && (i.persona = { ...i.persona ?? {}, challenge: n }), Object.values(e).length === 0 && (i.persona = { challenge: void 0 });
    }
  })
), zL = (e, t) => {
  var n, r, a, i, o, s, l, u, p, g, m;
  if (e.discriminator === "authorizedRequest") {
    const h = ((n = e.reset) == null ? void 0 : n.accounts) || ((r = e.reset) == null ? void 0 : r.personaData), I = !!(e.oneTimeAccounts || e.oneTimePersonaData), v = e.auth.discriminator === "loginWithChallenge" || !!((a = e.oneTimeAccounts) != null && a.challenge) || !!((i = e.ongoingAccounts) != null && i.challenge);
    if (h || I || v)
      return !1;
    let E = !1;
    if (e.ongoingAccounts) {
      const { quantifier: R, quantity: F } = e.ongoingAccounts.numberOfAccounts;
      E = ((l = (s = (o = t.sharedData) == null ? void 0 : o.ongoingAccounts) == null ? void 0 : s.numberOfAccounts) == null ? void 0 : l.quantifier) === R && ((g = (p = (u = t.sharedData) == null ? void 0 : u.ongoingAccounts) == null ? void 0 : p.numberOfAccounts) == null ? void 0 : g.quantity) === F;
    }
    return e.ongoingPersonaData && (E = $o(
      e.ongoingPersonaData,
      (m = t.sharedData) == null ? void 0 : m.ongoingPersonaData
    )), E;
  }
  return !1;
}, UL = (e, t) => e.discriminator === "authorizedRequest" ? le({}, (n) => {
  n.persona = { proof: !1 }, n.ongoingAccounts = {
    proof: !1,
    numberOfAccounts: void 0
  }, e.auth.discriminator === "loginWithChallenge" && (n.persona.proof = !!e.auth.challenge), e.ongoingAccounts && (n.ongoingAccounts = {
    proof: !!e.ongoingAccounts.challenge,
    numberOfAccounts: e.ongoingAccounts.numberOfAccounts
  }), e.ongoingPersonaData && (n.ongoingPersonaData = e.ongoingPersonaData);
}) : t, ZL = (e) => le({}, (t) => {
  e.ongoingAccounts && (t.accounts = {
    numberOfAccounts: e.ongoingAccounts.numberOfAccounts,
    withProof: e.ongoingAccounts.proof,
    reset: !0
  }), e.ongoingPersonaData && (t.personaData = {
    fullName: e.ongoingPersonaData.isRequestingName,
    phoneNumbers: e.ongoingPersonaData.numberOfRequestedPhoneNumbers,
    emailAddresses: e.ongoingPersonaData.numberOfRequestedEmailAddresses,
    reset: !0
  }), e.persona && (t.persona = { withProof: !!e.persona.proof });
}), qL = ({
  stateClient: e,
  requestItemClient: t,
  walletClient: n,
  useCache: r,
  dataRequestStateClient: a,
  requestInterceptor: i
}) => {
  let o, s, l;
  const u = (E) => {
    var R, F;
    return ((R = E.accounts) == null ? void 0 : R.withProof) || ((F = E.persona) == null ? void 0 : F.withProof);
  }, p = (E) => {
    if (!u(E))
      return Od(void 0);
    if (!o)
      throw new Error("Expected proof but no challenge generator provided");
    return o();
  }, g = (E) => {
    o = () => me.fromPromise(E(), () => ({
      error: "GenerateChallengeError",
      message: "Failed to generate challenge"
    }));
  }, m = (E) => {
    s = (R) => E(R);
  }, h = (E) => {
    l = (R) => me.fromPromise(E(R), () => ({
      error: "LoginRejectedByDapp",
      message: "Login rejected by dApp"
    }));
  }, I = (...E) => v({
    dataRequestState: a.toDataRequestState(...E),
    isConnect: !1,
    oneTime: !0
  }), v = ({
    isConnect: E,
    oneTime: R,
    dataRequestState: F
  }) => Ae(F).asyncAndThen(
    (_) => p(_).andThen(
      (C) => LL({
        dataRequestState: _,
        isConnect: E,
        challenge: C,
        oneTime: R,
        stateClient: e
      })
    )
  ).andThen((_) => {
    const C = e.getState();
    if (zL(_, C) && r)
      return Od(C.walletData);
    const L = !e.getState().walletData.persona && _.discriminator === "authorizedRequest";
    return i({
      type: "dataRequest",
      payload: _
    }).map((M) => {
      const { id: Y } = t.add(
        L ? "loginRequest" : "dataRequest"
      );
      return { walletDataRequest: M, id: Y };
    }).andThen(
      ({ walletDataRequest: M, id: Y }) => n.request(M, Y).mapErr(
        ({ error: z, message: rt }) => ({
          error: z,
          message: rt
        })
      ).andThen(CL).andThen((z) => l ? l(z).map(() => (t.updateStatus({ id: Y, status: "success" }), z)).mapErr((rt) => (t.updateStatus({
        id: Y,
        status: "fail",
        error: rt.error
      }), rt)) : (t.updateStatus({ id: Y, status: "success" }), Ae(z))).map((z) => (R || e.setState({
        loggedInTimestamp: Date.now().toString(),
        walletData: z,
        sharedData: UL(
          M,
          e.getState().sharedData
        )
      }), z))
    );
  });
  return {
    provideChallengeGenerator: g,
    provideDataRequestControl: h,
    provideConnectResponseCallback: m,
    sendOneTimeRequest: I,
    setState: (...E) => (a.setState(...E), {
      sendRequest: () => v({
        dataRequestState: a.getState(),
        isConnect: !1,
        oneTime: !1
      })
    }),
    sendRequest: ({
      isConnect: E,
      oneTime: R
    }) => {
      const F = v({
        isConnect: E,
        oneTime: R,
        dataRequestState: a.getState()
      });
      return s && F.map((_) => {
        s(Ae(_));
      }).mapErr((_) => {
        s(dt(_));
      }), F;
    },
    updateSharedData: () => v({
      dataRequestState: ZL(
        e.getState().sharedData
      ),
      isConnect: !1,
      oneTime: !1
    })
  };
}, BL = (e) => {
  var t;
  const n = e.accounts ?? [], r = ((t = e == null ? void 0 : e.persona) == null ? void 0 : t.label) ?? "", a = !!(e != null && e.persona), i = e.personaData.map((o) => {
    if (o.entry === "fullName") {
      const { variant: s, givenNames: l, familyName: u, nickname: p } = o.fields;
      return {
        value: s === "western" ? `${l}${p ? ` "${p}" ` : " "}${u}` : `${u}${p ? ` "${p}" ` : " "}${l}`,
        field: "fullName"
      };
    } else {
      if (o.entry === "emailAddresses")
        return {
          // currently only one email address is supported
          value: o.fields[0],
          field: "emailAddress"
        };
      if (o.entry === "phoneNumbers")
        return {
          // currently only one phone number is supported
          value: o.fields[0],
          field: "phoneNumber"
        };
    }
  }).filter(
    (o) => !!o && !!o.value.trim()
  );
  return { accounts: n, personaLabel: r, connected: a, personaData: i };
}, iS = (e) => {
  const t = new se(e), n = () => t.next(e), r = (o) => t.next(o), a = () => t.getValue(), i = (...o) => o.filter((s) => typeof s._toObject == "function").reduce(
    (s, l) => ({
      ...s,
      ...l._toObject()
    }),
    {}
  );
  return {
    reset: n,
    setState: (...o) => {
      o.length === 0 ? n() : r(i(...o));
    },
    getState: a,
    patchState: (...o) => {
      o.length !== 0 && r({ ...a(), ...i(...o) });
    },
    removeState: (...o) => {
      r(
        le(a(), (s) => {
          o.forEach((l) => {
            delete s[l];
          });
        })
      );
    },
    toDataRequestState: i,
    state$: t.asObservable()
  };
}, oS = (e) => (t) => me.fromPromise(
  e(t),
  (n) => ({
    error: "requestInterceptorError",
    jsError: n
  })
), GL = (e) => {
  const {
    dAppDefinitionAddress: t,
    networkId: n,
    providers: r,
    logger: a,
    onDisconnect: i,
    explorer: o,
    gatewayBaseUrl: s,
    applicationName: l,
    applicationVersion: u,
    useCache: p = !0,
    requestInterceptor: g = async ({ payload: N }) => N
  } = e || {}, m = `rdt:${t}:${n}`, h = new se(
    t
  ), I = new Nt(), v = (r == null ? void 0 : r.connectButton) ?? _w({
    logger: a
  });
  v.setIsMobile(vw());
  const E = (r == null ? void 0 : r.gatewayClient) ?? nS({
    logger: a,
    gatewayApi: $0({
      basePath: s ?? os[n].gatewayUrl,
      dAppDefinitionAddress: t,
      applicationName: l,
      applicationVersion: u
    })
  }), R = (r == null ? void 0 : r.storageClient) ?? xL(), F = (r == null ? void 0 : r.walletSdk) ?? zf({
    logger: a,
    networkId: n,
    dAppDefinitionAddress: t
  }), _ = (r == null ? void 0 : r.requestItemClient) ?? IL(m, R, {
    logger: a
  }), C = (r == null ? void 0 : r.walletClient) ?? NL({
    logger: a,
    onCancelRequestItem$: v.onCancelRequestItem$,
    walletSdk: F,
    gatewayClient: E,
    requestItemClient: _
  }), L = (r == null ? void 0 : r.stateClient) ?? yw(m, R, {
    logger: a
  }), M = (r == null ? void 0 : r.dataRequestStateClient) ?? iS({}), Y = oS(g), z = (r == null ? void 0 : r.dataRequestClient) ?? qL({
    stateClient: L,
    requestItemClient: _,
    walletClient: C,
    useCache: p,
    dataRequestStateClient: M,
    requestInterceptor: Y
  }), rt = () => {
    _.items$.value.forEach((N) => {
      N.showCancel && C.cancelRequest(N.id);
    }), L.reset(), C.resetRequestItems(), v.disconnect(), i && i();
  };
  I.add(
    h.pipe(
      Dt((N) => !!N),
      Et(
        (N) => E.gatewayApi.getEntityDetails(N).map(
          (fe) => tS(
            fe == null ? void 0 : fe.metadata.items.find((Re) => Re.key === "name")
          ).stringified
        ).map((fe) => {
          v.setDappName(fe ?? "Unnamed dApp");
        })
      )
    ).subscribe()
  ), I.add(
    C.extensionStatus$.pipe(
      K((N) => {
        v.setIsExtensionAvailable(
          N.isExtensionAvailable
        ), v.setIsWalletLinked(N.isWalletLinked);
      })
    ).subscribe()
  ), I.add(
    v.onConnect$.pipe(
      Et(() => (L.reset(), z.sendRequest({
        isConnect: !0,
        oneTime: !1
      })))
    ).subscribe()
  ), I.add(
    v.onLinkClick$.pipe(
      K(({ type: N, data: fe }) => {
        if (["account", "transaction"].includes(N)) {
          const { baseUrl: Re, transactionPath: It, accountsPath: Hn } = o ?? {
            baseUrl: os[n].dashboardUrl,
            transactionPath: "/transaction/",
            accountsPath: "/account/"
          };
          if (!Re || !window)
            return;
          const Er = `${Re}${N === "transaction" ? It : Hn}${fe}`;
          window.open(Er);
        } else
          N === "setupGuide" ? window.open("https://wallet.radixdlt.com") : N === "showQrCode" && F.openPopup();
      })
    ).subscribe()
  ), I.add(
    v.onShowPopover$.pipe(
      Bi(C.requestItems$),
      K(([N, fe]) => {
        fe.filter((Re) => Re.status === "pending").length > 0 && v.setActiveTab("requests");
      })
    ).subscribe()
  ), I.add(
    v.onDisconnect$.pipe(K(rt)).subscribe()
  ), I.add(
    L.state$.pipe(
      K((N) => {
        const { personaData: fe, accounts: Re, personaLabel: It, connected: Hn } = BL(N.walletData);
        v.setLoggedInTimestamp(N.loggedInTimestamp), v.setAccounts(Re), v.setPersonaData(fe), v.setPersonaLabel(It), v.setConnected(Hn);
      })
    ).subscribe()
  ), I.add(
    C.requestItems$.pipe(K((N) => v.setRequestItems(N))).subscribe()
  ), I.add(
    _.change$.pipe(
      Bi(_.items$),
      K(([, N]) => {
        N.find((fe) => fe.status === "pending") && v.setStatus("pending");
      }),
      hi(([N]) => {
        var fe, Re;
        const It = (fe = N.newValue) == null ? void 0 : fe.status;
        return ((Re = N.oldValue) == null ? void 0 : Re.status) === "pending" && (It === "success" || It === "fail") ? (v.setStatus(
          It === "success" ? "success" : "error"
        ), ho(2e3).pipe(
          Bi(C.requestItems$),
          K(([Hn, Er]) => {
            const Di = Er.find(
              (Pi) => Pi.status === "pending"
            );
            v.setStatus(
              Di ? "pending" : "default"
            );
          })
        )) : Sp();
      })
    ).subscribe()
  ), I.add(
    Br(v.onUpdateSharedData$).pipe(Et(() => z.updateSharedData())).subscribe()
  );
  const un = {
    state: E.gatewayApi.stateApi,
    status: E.gatewayApi.statusApi,
    transaction: E.gatewayApi.transactionApi
  }, Kn = {
    setRequestData: z.setState,
    sendRequest: () => z.sendRequest({
      isConnect: !1,
      oneTime: !1
    }),
    provideChallengeGenerator: (N) => z.provideChallengeGenerator(N),
    dataRequestControl: (N) => {
      z.provideDataRequestControl(N);
    },
    provideConnectResponseCallback: z.provideConnectResponseCallback,
    updateSharedData: () => z.updateSharedData(),
    sendOneTimeRequest: z.sendOneTimeRequest,
    sendTransaction: (N) => Y({
      type: "sendTransaction",
      payload: N
    }).andThen(C.sendTransaction),
    walletData$: L.walletData$,
    getWalletData: () => L.getWalletData()
  }, Lt = {
    setTheme: v.setTheme,
    setMode: v.setMode,
    status$: v.status$
  };
  return {
    walletApi: Kn,
    gatewayApi: un,
    buttonApi: Lt,
    disconnect: rt,
    destroy: () => {
      L.destroy(), C.destroy(), I.unsubscribe(), v.destroy();
    }
  };
};
we({
  numberOfAccounts: ct,
  withProof: Ke().optional(),
  reset: Ke().optional()
});
const sS = () => {
  let e = le({
    numberOfAccounts: { quantifier: "atLeast", quantity: 1 }
  }, () => {
  });
  const t = {
    atLeast: (n) => (e = le(e, (r) => {
      r.numberOfAccounts.quantifier = "atLeast", r.numberOfAccounts.quantity = n;
    }), t),
    exactly: (n) => (e = le(e, (r) => {
      r.numberOfAccounts.quantifier = "exactly", r.numberOfAccounts.quantity = n;
    }), t),
    withProof: (n = !0) => (e = le(e, (r) => {
      r.withProof = n;
    }), t),
    reset: (n = !0) => (e = le(e, (r) => {
      r.reset = n;
    }), t),
    _toObject: () => ({
      accounts: e
    })
  };
  return t;
};
we({
  withProof: Ke().optional()
});
const WL = (e = {
  withProof: !1
}) => {
  let t = le(e, () => {
  });
  const n = {
    withProof: (r = !0) => (t = le(t, (a) => {
      a.withProof = r;
    }), n),
    _toObject: () => ({
      persona: t
    })
  };
  return n;
};
we({
  fullName: Ke(),
  emailAddresses: ct,
  phoneNumbers: ct,
  reset: Ke()
}).partial();
const lS = (e = {}) => {
  let t = le(e, () => {
  });
  const n = (i = !0) => (t = le(t, (o) => {
    o.fullName = i;
  }), a), r = (i) => ({
    atLeast: (o) => (t = le(t, (s) => {
      s[i] = { quantifier: "atLeast", quantity: o };
    }), a),
    exactly: (o) => (t = le(t, (s) => {
      s[i] = { quantifier: "exactly", quantity: o };
    }), a)
  }), a = {
    fullName: n,
    emailAddresses: (i = !0) => (r("emailAddresses").exactly(i ? 1 : 0), a),
    phoneNumbers: (i = !0) => (r("phoneNumbers").exactly(i ? 1 : 0), a),
    reset: (i = !0) => (t = le(t, (o) => {
      o.reset = i;
    }), a),
    _toObject: () => ({
      personaData: t
    })
  };
  return a;
}, uS = (e) => ({
  _toObject: () => ({ ...e })
}), KL = {
  accounts: sS,
  personaData: lS,
  persona: WL,
  config: uS
}, HL = {
  accounts: sS,
  personaData: lS
}, i4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Account: bs,
  AccountProof: Dp,
  AccountsRequestItem: Ga,
  AccountsRequestResponseItem: Wa,
  AtLedgerStateMixinFromJSON: Cw,
  AtLedgerStateMixinFromJSONTyped: mm,
  AtLedgerStateMixinToJSON: Dw,
  AuthLoginRequestItem: Lp,
  AuthLoginRequestResponseItem: Xp,
  AuthLoginWithChallengeRequestItem: Jp,
  AuthLoginWithChallengeRequestResponseItem: Qp,
  AuthLoginWithoutChallengeRequestItem: jp,
  AuthLoginWithoutChallengeRequestResponseItem: Yp,
  AuthRequestItem: zp,
  AuthRequestResponseItem: $p,
  AuthUsePersonaRequestItem: Vp,
  BASE_PATH: cm,
  BaseAPI: Nr,
  BlobApiResponse: Tw,
  COLLECTION_FORMATS: Aw,
  CancelRequest: Wp,
  CommittedTransactionInfoFromJSON: ua,
  CommittedTransactionInfoFromJSONTyped: sg,
  CommittedTransactionInfoToJSON: ca,
  ComponentEntityRoleAssignmentEntryAssignmentFromJSON: cg,
  ComponentEntityRoleAssignmentEntryAssignmentFromJSONTyped: dg,
  ComponentEntityRoleAssignmentEntryAssignmentToJSON: pg,
  ComponentEntityRoleAssignmentEntryFromJSON: yg,
  ComponentEntityRoleAssignmentEntryFromJSONTyped: hg,
  ComponentEntityRoleAssignmentEntryToJSON: vg,
  ComponentEntityRoleAssignmentsFromJSON: qn,
  ComponentEntityRoleAssignmentsFromJSONTyped: _g,
  ComponentEntityRoleAssignmentsToJSON: Bn,
  Configuration: Ds,
  CursorLimitMixinFromJSON: mT,
  CursorLimitMixinFromJSONTyped: bg,
  CursorLimitMixinToJSON: gT,
  DataRequestBuilder: KL,
  DataRequestStateClient: iS,
  DefaultConfig: dm,
  EntityMetadataCollectionAllOfFromJSON: SM,
  EntityMetadataCollectionAllOfFromJSONTyped: py,
  EntityMetadataCollectionAllOfToJSON: OM,
  EntityMetadataCollectionFromJSON: _t,
  EntityMetadataCollectionFromJSONTyped: dy,
  EntityMetadataCollectionToJSON: bt,
  EntityMetadataItemFromJSON: Ii,
  EntityMetadataItemFromJSONTyped: cy,
  EntityMetadataItemToJSON: wi,
  EntityMetadataItemValueAllOfFromJSON: AM,
  EntityMetadataItemValueAllOfFromJSONTyped: fy,
  EntityMetadataItemValueAllOfToJSON: IM,
  EntityMetadataItemValueFromJSON: sy,
  EntityMetadataItemValueFromJSONTyped: ly,
  EntityMetadataItemValueToJSON: uy,
  EntityNotFoundErrorAllOfFromJSON: EM,
  EntityNotFoundErrorAllOfFromJSONTyped: gy,
  EntityNotFoundErrorAllOfToJSON: CM,
  EntityNotFoundErrorAllOfTypeEnum: kM,
  EntityNotFoundErrorFromJSON: TM,
  EntityNotFoundErrorFromJSONTyped: Bl,
  EntityNotFoundErrorToJSON: my,
  EntityNotFoundErrorTypeEnum: wM,
  ErrorResponseFromJSON: $M,
  ErrorResponseFromJSONTyped: wy,
  ErrorResponseToJSON: eE,
  EventsItemFromJSON: eg,
  EventsItemFromJSONTyped: tg,
  EventsItemToJSON: ng,
  ExponentialBackoff: eS,
  ExtensionInteraction: yA,
  FromLedgerStateMixinFromJSON: nE,
  FromLedgerStateMixinFromJSONTyped: xy,
  FromLedgerStateMixinToJSON: rE,
  FungibleResourcesCollectionAllOfFromJSON: mE,
  FungibleResourcesCollectionAllOfFromJSONTyped: Fy,
  FungibleResourcesCollectionAllOfToJSON: gE,
  FungibleResourcesCollectionFromJSON: Dy,
  FungibleResourcesCollectionFromJSONTyped: Py,
  FungibleResourcesCollectionItemBaseFromJSON: vE,
  FungibleResourcesCollectionItemBaseFromJSONTyped: Jy,
  FungibleResourcesCollectionItemBaseToJSON: _E,
  FungibleResourcesCollectionItemFromJSON: xi,
  FungibleResourcesCollectionItemFromJSONTyped: Cy,
  FungibleResourcesCollectionItemGloballyAggregatedAggregationLevelEnum: aE,
  FungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum: bE,
  FungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSON: OE,
  FungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSONTyped: Ly,
  FungibleResourcesCollectionItemGloballyAggregatedAllOfToJSON: NE,
  FungibleResourcesCollectionItemGloballyAggregatedFromJSON: oE,
  FungibleResourcesCollectionItemGloballyAggregatedFromJSONTyped: eu,
  FungibleResourcesCollectionItemGloballyAggregatedToJSON: Ty,
  FungibleResourcesCollectionItemToJSON: Ti,
  FungibleResourcesCollectionItemVaultAggregatedAggregationLevelEnum: uE,
  FungibleResourcesCollectionItemVaultAggregatedAllOfAggregationLevelEnum: AE,
  FungibleResourcesCollectionItemVaultAggregatedAllOfFromJSON: wE,
  FungibleResourcesCollectionItemVaultAggregatedAllOfFromJSONTyped: zy,
  FungibleResourcesCollectionItemVaultAggregatedAllOfToJSON: xE,
  FungibleResourcesCollectionItemVaultAggregatedFromJSON: dE,
  FungibleResourcesCollectionItemVaultAggregatedFromJSONTyped: ru,
  FungibleResourcesCollectionItemVaultAggregatedToJSON: Ey,
  FungibleResourcesCollectionItemVaultAggregatedVaultAllOfFromJSON: kE,
  FungibleResourcesCollectionItemVaultAggregatedVaultAllOfFromJSONTyped: Uy,
  FungibleResourcesCollectionItemVaultAggregatedVaultAllOfToJSON: ME,
  FungibleResourcesCollectionItemVaultAggregatedVaultFromJSON: tu,
  FungibleResourcesCollectionItemVaultAggregatedVaultFromJSONTyped: My,
  FungibleResourcesCollectionItemVaultAggregatedVaultItemFromJSON: Ir,
  FungibleResourcesCollectionItemVaultAggregatedVaultItemFromJSONTyped: ky,
  FungibleResourcesCollectionItemVaultAggregatedVaultItemToJSON: wr,
  FungibleResourcesCollectionItemVaultAggregatedVaultToJSON: nu,
  FungibleResourcesCollectionToJSON: Ry,
  GatewayApiClient: ra,
  GatewayClient: nS,
  GatewayErrorBaseFromJSON: CE,
  GatewayErrorBaseFromJSONTyped: Zy,
  GatewayErrorBaseToJSON: DE,
  GatewayErrorFromJSON: Ny,
  GatewayErrorFromJSONTyped: Ay,
  GatewayErrorToJSON: Iy,
  GatewayInfoResponseKnownTargetFromJSON: RE,
  GatewayInfoResponseKnownTargetFromJSONTyped: qy,
  GatewayInfoResponseKnownTargetToJSON: FE,
  GatewayInfoResponseReleaseInfoFromJSON: au,
  GatewayInfoResponseReleaseInfoFromJSONTyped: By,
  GatewayInfoResponseReleaseInfoToJSON: iu,
  GatewayStatusResponseAllOfFromJSON: UE,
  GatewayStatusResponseAllOfFromJSONTyped: Hy,
  GatewayStatusResponseAllOfToJSON: ZE,
  GatewayStatusResponseFromJSON: Wy,
  GatewayStatusResponseFromJSONTyped: Ky,
  GatewayStatusResponseToJSON: LE,
  InternalServerErrorAllOfFromJSON: GE,
  InternalServerErrorAllOfFromJSONTyped: Yy,
  InternalServerErrorAllOfToJSON: WE,
  InternalServerErrorAllOfTypeEnum: qE,
  InternalServerErrorFromJSON: RM,
  InternalServerErrorFromJSONTyped: Gl,
  InternalServerErrorToJSON: yy,
  InternalServerErrorTypeEnum: DM,
  InvalidEntityErrorAllOfFromJSON: YE,
  InvalidEntityErrorAllOfFromJSONTyped: Qy,
  InvalidEntityErrorAllOfToJSON: QE,
  InvalidEntityErrorAllOfTypeEnum: KE,
  InvalidEntityErrorFromJSON: jM,
  InvalidEntityErrorFromJSONTyped: Wl,
  InvalidEntityErrorToJSON: hy,
  InvalidEntityErrorTypeEnum: FM,
  InvalidRequestErrorAllOfFromJSON: eC,
  InvalidRequestErrorAllOfFromJSONTyped: Xy,
  InvalidRequestErrorAllOfToJSON: tC,
  InvalidRequestErrorAllOfTypeEnum: XE,
  InvalidRequestErrorFromJSON: UM,
  InvalidRequestErrorFromJSONTyped: Yl,
  InvalidRequestErrorToJSON: _y,
  InvalidRequestErrorTypeEnum: LM,
  InvalidTransactionErrorAllOfFromJSON: aC,
  InvalidTransactionErrorAllOfFromJSONTyped: $y,
  InvalidTransactionErrorAllOfToJSON: iC,
  InvalidTransactionErrorAllOfTypeEnum: nC,
  InvalidTransactionErrorFromJSON: BM,
  InvalidTransactionErrorFromJSONTyped: Ql,
  InvalidTransactionErrorToJSON: by,
  InvalidTransactionErrorTypeEnum: ZM,
  JSONApiResponse: ce,
  LedgerStateFromJSON: ve,
  LedgerStateFromJSONTyped: Gy,
  LedgerStateMixinFromJSON: sC,
  LedgerStateMixinFromJSONTyped: eh,
  LedgerStateMixinToJSON: lC,
  LedgerStateSelectorFromJSON: ye,
  LedgerStateSelectorFromJSONTyped: fm,
  LedgerStateSelectorToJSON: he,
  LedgerStateToJSON: _e,
  LoginRequestResponseItem: dA,
  MessageLifeCycleEvent: af,
  MessageLifeCycleExtensionStatusEvent: hA,
  Metadata: Os,
  MetadataBoolArrayValueAllOfFromJSON: dC,
  MetadataBoolArrayValueAllOfFromJSONTyped: th,
  MetadataBoolArrayValueAllOfToJSON: pC,
  MetadataBoolArrayValueAllOfTypeEnum: uC,
  MetadataBoolArrayValueFromJSON: vT,
  MetadataBoolArrayValueFromJSONTyped: il,
  MetadataBoolArrayValueToJSON: Sg,
  MetadataBoolArrayValueTypeEnum: yT,
  MetadataBoolValueAllOfFromJSON: gC,
  MetadataBoolValueAllOfFromJSONTyped: nh,
  MetadataBoolValueAllOfToJSON: yC,
  MetadataBoolValueAllOfTypeEnum: fC,
  MetadataBoolValueFromJSON: ST,
  MetadataBoolValueFromJSONTyped: ol,
  MetadataBoolValueToJSON: Og,
  MetadataBoolValueTypeEnum: _T,
  MetadataDecimalArrayValueAllOfFromJSON: _C,
  MetadataDecimalArrayValueAllOfFromJSONTyped: rh,
  MetadataDecimalArrayValueAllOfToJSON: bC,
  MetadataDecimalArrayValueAllOfTypeEnum: hC,
  MetadataDecimalArrayValueFromJSON: AT,
  MetadataDecimalArrayValueFromJSONTyped: sl,
  MetadataDecimalArrayValueToJSON: Ng,
  MetadataDecimalArrayValueTypeEnum: OT,
  MetadataDecimalValueAllOfFromJSON: NC,
  MetadataDecimalValueAllOfFromJSONTyped: ah,
  MetadataDecimalValueAllOfToJSON: AC,
  MetadataDecimalValueAllOfTypeEnum: SC,
  MetadataDecimalValueFromJSON: xT,
  MetadataDecimalValueFromJSONTyped: ll,
  MetadataDecimalValueToJSON: Ag,
  MetadataDecimalValueTypeEnum: IT,
  MetadataGlobalAddressArrayValueAllOfFromJSON: xC,
  MetadataGlobalAddressArrayValueAllOfFromJSONTyped: ih,
  MetadataGlobalAddressArrayValueAllOfToJSON: TC,
  MetadataGlobalAddressArrayValueAllOfTypeEnum: IC,
  MetadataGlobalAddressArrayValueFromJSON: MT,
  MetadataGlobalAddressArrayValueFromJSONTyped: ul,
  MetadataGlobalAddressArrayValueToJSON: Ig,
  MetadataGlobalAddressArrayValueTypeEnum: TT,
  MetadataGlobalAddressValueAllOfFromJSON: EC,
  MetadataGlobalAddressValueAllOfFromJSONTyped: oh,
  MetadataGlobalAddressValueAllOfToJSON: CC,
  MetadataGlobalAddressValueAllOfTypeEnum: kC,
  MetadataGlobalAddressValueFromJSON: DT,
  MetadataGlobalAddressValueFromJSONTyped: cl,
  MetadataGlobalAddressValueToJSON: wg,
  MetadataGlobalAddressValueTypeEnum: ET,
  MetadataI32ArrayValueAllOfFromJSON: RC,
  MetadataI32ArrayValueAllOfFromJSONTyped: sh,
  MetadataI32ArrayValueAllOfToJSON: FC,
  MetadataI32ArrayValueAllOfTypeEnum: DC,
  MetadataI32ArrayValueFromJSON: FT,
  MetadataI32ArrayValueFromJSONTyped: dl,
  MetadataI32ArrayValueToJSON: xg,
  MetadataI32ArrayValueTypeEnum: PT,
  MetadataI32ValueAllOfFromJSON: JC,
  MetadataI32ValueAllOfFromJSONTyped: lh,
  MetadataI32ValueAllOfToJSON: LC,
  MetadataI32ValueAllOfTypeEnum: VC,
  MetadataI32ValueFromJSON: JT,
  MetadataI32ValueFromJSONTyped: pl,
  MetadataI32ValueToJSON: Tg,
  MetadataI32ValueTypeEnum: VT,
  MetadataI64ArrayValueAllOfFromJSON: ZC,
  MetadataI64ArrayValueAllOfFromJSONTyped: uh,
  MetadataI64ArrayValueAllOfToJSON: qC,
  MetadataI64ArrayValueAllOfTypeEnum: zC,
  MetadataI64ArrayValueFromJSON: UT,
  MetadataI64ArrayValueFromJSONTyped: fl,
  MetadataI64ArrayValueToJSON: kg,
  MetadataI64ArrayValueTypeEnum: LT,
  MetadataI64ValueAllOfFromJSON: WC,
  MetadataI64ValueAllOfFromJSONTyped: ch,
  MetadataI64ValueAllOfToJSON: KC,
  MetadataI64ValueAllOfTypeEnum: BC,
  MetadataI64ValueFromJSON: BT,
  MetadataI64ValueFromJSONTyped: ml,
  MetadataI64ValueToJSON: Mg,
  MetadataI64ValueTypeEnum: ZT,
  MetadataInstantArrayValueAllOfFromJSON: QC,
  MetadataInstantArrayValueAllOfFromJSONTyped: dh,
  MetadataInstantArrayValueAllOfToJSON: XC,
  MetadataInstantArrayValueAllOfTypeEnum: HC,
  MetadataInstantArrayValueFromJSON: KT,
  MetadataInstantArrayValueFromJSONTyped: gl,
  MetadataInstantArrayValueToJSON: Eg,
  MetadataInstantArrayValueTypeEnum: GT,
  MetadataInstantValueAllOfFromJSON: tD,
  MetadataInstantValueAllOfFromJSONTyped: ph,
  MetadataInstantValueAllOfToJSON: nD,
  MetadataInstantValueAllOfTypeEnum: $C,
  MetadataInstantValueFromJSON: QT,
  MetadataInstantValueFromJSONTyped: yl,
  MetadataInstantValueToJSON: Cg,
  MetadataInstantValueTypeEnum: HT,
  MetadataNonFungibleGlobalIdArrayValueAllOfFromJSON: iD,
  MetadataNonFungibleGlobalIdArrayValueAllOfFromJSONTyped: fh,
  MetadataNonFungibleGlobalIdArrayValueAllOfToJSON: oD,
  MetadataNonFungibleGlobalIdArrayValueAllOfTypeEnum: rD,
  MetadataNonFungibleGlobalIdArrayValueAllOfValuesFromJSON: hl,
  MetadataNonFungibleGlobalIdArrayValueAllOfValuesFromJSONTyped: Dg,
  MetadataNonFungibleGlobalIdArrayValueAllOfValuesToJSON: vl,
  MetadataNonFungibleGlobalIdArrayValueFromJSON: tk,
  MetadataNonFungibleGlobalIdArrayValueFromJSONTyped: _l,
  MetadataNonFungibleGlobalIdArrayValueToJSON: Pg,
  MetadataNonFungibleGlobalIdArrayValueTypeEnum: $T,
  MetadataNonFungibleGlobalIdValueAllOfFromJSON: uD,
  MetadataNonFungibleGlobalIdValueAllOfFromJSONTyped: mh,
  MetadataNonFungibleGlobalIdValueAllOfToJSON: cD,
  MetadataNonFungibleGlobalIdValueAllOfTypeEnum: sD,
  MetadataNonFungibleGlobalIdValueFromJSON: ak,
  MetadataNonFungibleGlobalIdValueFromJSONTyped: bl,
  MetadataNonFungibleGlobalIdValueToJSON: Rg,
  MetadataNonFungibleGlobalIdValueTypeEnum: nk,
  MetadataNonFungibleLocalIdArrayValueAllOfFromJSON: fD,
  MetadataNonFungibleLocalIdArrayValueAllOfFromJSONTyped: gh,
  MetadataNonFungibleLocalIdArrayValueAllOfToJSON: mD,
  MetadataNonFungibleLocalIdArrayValueAllOfTypeEnum: dD,
  MetadataNonFungibleLocalIdArrayValueFromJSON: sk,
  MetadataNonFungibleLocalIdArrayValueFromJSONTyped: Sl,
  MetadataNonFungibleLocalIdArrayValueToJSON: Fg,
  MetadataNonFungibleLocalIdArrayValueTypeEnum: ik,
  MetadataNonFungibleLocalIdValueAllOfFromJSON: hD,
  MetadataNonFungibleLocalIdValueAllOfFromJSONTyped: yh,
  MetadataNonFungibleLocalIdValueAllOfToJSON: vD,
  MetadataNonFungibleLocalIdValueAllOfTypeEnum: gD,
  MetadataNonFungibleLocalIdValueFromJSON: ck,
  MetadataNonFungibleLocalIdValueFromJSONTyped: Ol,
  MetadataNonFungibleLocalIdValueToJSON: Vg,
  MetadataNonFungibleLocalIdValueTypeEnum: lk,
  MetadataOriginArrayValueAllOfFromJSON: SD,
  MetadataOriginArrayValueAllOfFromJSONTyped: hh,
  MetadataOriginArrayValueAllOfToJSON: OD,
  MetadataOriginArrayValueAllOfTypeEnum: _D,
  MetadataOriginArrayValueFromJSON: fk,
  MetadataOriginArrayValueFromJSONTyped: Nl,
  MetadataOriginArrayValueToJSON: jg,
  MetadataOriginArrayValueTypeEnum: dk,
  MetadataOriginValueAllOfFromJSON: ID,
  MetadataOriginValueAllOfFromJSONTyped: vh,
  MetadataOriginValueAllOfToJSON: wD,
  MetadataOriginValueAllOfTypeEnum: ND,
  MetadataOriginValueFromJSON: yk,
  MetadataOriginValueFromJSONTyped: Al,
  MetadataOriginValueToJSON: Jg,
  MetadataOriginValueTypeEnum: mk,
  MetadataPublicKeyArrayValueAllOfFromJSON: kD,
  MetadataPublicKeyArrayValueAllOfFromJSONTyped: _h,
  MetadataPublicKeyArrayValueAllOfToJSON: MD,
  MetadataPublicKeyArrayValueAllOfTypeEnum: xD,
  MetadataPublicKeyArrayValueFromJSON: Ik,
  MetadataPublicKeyArrayValueFromJSONTyped: xl,
  MetadataPublicKeyArrayValueToJSON: Zg,
  MetadataPublicKeyArrayValueTypeEnum: Nk,
  MetadataPublicKeyHashArrayValueAllOfFromJSON: DD,
  MetadataPublicKeyHashArrayValueAllOfFromJSONTyped: bh,
  MetadataPublicKeyHashArrayValueAllOfToJSON: PD,
  MetadataPublicKeyHashArrayValueAllOfTypeEnum: ED,
  MetadataPublicKeyHashArrayValueFromJSON: Pk,
  MetadataPublicKeyHashArrayValueFromJSONTyped: Ml,
  MetadataPublicKeyHashArrayValueToJSON: Wg,
  MetadataPublicKeyHashArrayValueTypeEnum: Ck,
  MetadataPublicKeyHashValueAllOfFromJSON: VD,
  MetadataPublicKeyHashValueAllOfFromJSONTyped: Sh,
  MetadataPublicKeyHashValueAllOfToJSON: jD,
  MetadataPublicKeyHashValueAllOfTypeEnum: RD,
  MetadataPublicKeyHashValueFromJSON: Vk,
  MetadataPublicKeyHashValueFromJSONTyped: El,
  MetadataPublicKeyHashValueToJSON: Kg,
  MetadataPublicKeyHashValueTypeEnum: Rk,
  MetadataPublicKeyValueAllOfFromJSON: zD,
  MetadataPublicKeyValueAllOfFromJSONTyped: Oh,
  MetadataPublicKeyValueAllOfToJSON: UD,
  MetadataPublicKeyValueAllOfTypeEnum: JD,
  MetadataPublicKeyValueFromJSON: Lk,
  MetadataPublicKeyValueFromJSONTyped: Cl,
  MetadataPublicKeyValueToJSON: Hg,
  MetadataPublicKeyValueTypeEnum: jk,
  MetadataStringArrayValueAllOfFromJSON: BD,
  MetadataStringArrayValueAllOfFromJSONTyped: Nh,
  MetadataStringArrayValueAllOfToJSON: GD,
  MetadataStringArrayValueAllOfTypeEnum: ZD,
  MetadataStringArrayValueFromJSON: Zk,
  MetadataStringArrayValueFromJSONTyped: Dl,
  MetadataStringArrayValueToJSON: Yg,
  MetadataStringArrayValueTypeEnum: zk,
  MetadataStringValueAllOfFromJSON: HD,
  MetadataStringValueAllOfFromJSONTyped: Ah,
  MetadataStringValueAllOfToJSON: YD,
  MetadataStringValueAllOfTypeEnum: WD,
  MetadataStringValueFromJSON: Gk,
  MetadataStringValueFromJSONTyped: Pl,
  MetadataStringValueToJSON: Qg,
  MetadataStringValueTypeEnum: qk,
  MetadataTypedValueBaseFromJSON: eP,
  MetadataTypedValueBaseFromJSONTyped: xh,
  MetadataTypedValueBaseToJSON: tP,
  MetadataTypedValueFromJSON: Zl,
  MetadataTypedValueFromJSONTyped: oy,
  MetadataTypedValueToJSON: ql,
  MetadataU32ArrayValueAllOfFromJSON: aP,
  MetadataU32ArrayValueAllOfFromJSONTyped: Th,
  MetadataU32ArrayValueAllOfToJSON: iP,
  MetadataU32ArrayValueAllOfTypeEnum: nP,
  MetadataU32ArrayValueFromJSON: Hk,
  MetadataU32ArrayValueFromJSONTyped: Rl,
  MetadataU32ArrayValueToJSON: Xg,
  MetadataU32ArrayValueTypeEnum: Wk,
  MetadataU32ValueAllOfFromJSON: lP,
  MetadataU32ValueAllOfFromJSONTyped: kh,
  MetadataU32ValueAllOfToJSON: uP,
  MetadataU32ValueAllOfTypeEnum: oP,
  MetadataU32ValueFromJSON: Xk,
  MetadataU32ValueFromJSONTyped: Fl,
  MetadataU32ValueToJSON: $g,
  MetadataU32ValueTypeEnum: Yk,
  MetadataU64ArrayValueAllOfFromJSON: pP,
  MetadataU64ArrayValueAllOfFromJSONTyped: Mh,
  MetadataU64ArrayValueAllOfToJSON: fP,
  MetadataU64ArrayValueAllOfTypeEnum: cP,
  MetadataU64ArrayValueFromJSON: tM,
  MetadataU64ArrayValueFromJSONTyped: Vl,
  MetadataU64ArrayValueToJSON: ey,
  MetadataU64ArrayValueTypeEnum: $k,
  MetadataU64ValueAllOfFromJSON: yP,
  MetadataU64ValueAllOfFromJSONTyped: Eh,
  MetadataU64ValueAllOfToJSON: hP,
  MetadataU64ValueAllOfTypeEnum: mP,
  MetadataU64ValueFromJSON: aM,
  MetadataU64ValueFromJSONTyped: jl,
  MetadataU64ValueToJSON: ty,
  MetadataU64ValueTypeEnum: nM,
  MetadataU8ArrayValueAllOfFromJSON: bP,
  MetadataU8ArrayValueAllOfFromJSONTyped: Ch,
  MetadataU8ArrayValueAllOfToJSON: SP,
  MetadataU8ArrayValueAllOfTypeEnum: vP,
  MetadataU8ArrayValueFromJSON: sM,
  MetadataU8ArrayValueFromJSONTyped: Jl,
  MetadataU8ArrayValueToJSON: ny,
  MetadataU8ArrayValueTypeEnum: iM,
  MetadataU8ValueAllOfFromJSON: AP,
  MetadataU8ValueAllOfFromJSONTyped: Dh,
  MetadataU8ValueAllOfToJSON: IP,
  MetadataU8ValueAllOfTypeEnum: OP,
  MetadataU8ValueFromJSON: cM,
  MetadataU8ValueFromJSONTyped: Ll,
  MetadataU8ValueToJSON: ry,
  MetadataU8ValueTypeEnum: lM,
  MetadataUrlArrayValueAllOfFromJSON: TP,
  MetadataUrlArrayValueAllOfFromJSONTyped: Ph,
  MetadataUrlArrayValueAllOfToJSON: kP,
  MetadataUrlArrayValueAllOfTypeEnum: wP,
  MetadataUrlArrayValueFromJSON: fM,
  MetadataUrlArrayValueFromJSONTyped: zl,
  MetadataUrlArrayValueToJSON: ay,
  MetadataUrlArrayValueTypeEnum: dM,
  MetadataUrlValueAllOfFromJSON: CP,
  MetadataUrlValueAllOfFromJSONTyped: Rh,
  MetadataUrlValueAllOfToJSON: DP,
  MetadataUrlValueAllOfTypeEnum: MP,
  MetadataUrlValueFromJSON: yM,
  MetadataUrlValueFromJSONTyped: Ul,
  MetadataUrlValueToJSON: iy,
  MetadataUrlValueTypeEnum: mM,
  MetadataValue: tS,
  MetadataValueType: QD,
  MetadataValueTypeFromJSON: Ih,
  MetadataValueTypeFromJSONTyped: wh,
  MetadataValueTypeToJSON: XD,
  NetworkConfigurationResponseFromJSON: Jh,
  NetworkConfigurationResponseFromJSONTyped: Lh,
  NetworkConfigurationResponseToJSON: FP,
  NetworkConfigurationResponseWellKnownAddressesFromJSON: Fh,
  NetworkConfigurationResponseWellKnownAddressesFromJSONTyped: Vh,
  NetworkConfigurationResponseWellKnownAddressesToJSON: jh,
  NonFungibleIdType: VP,
  NonFungibleIdTypeFromJSON: fa,
  NonFungibleIdTypeFromJSONTyped: zh,
  NonFungibleIdTypeToJSON: jP,
  NonFungibleIdsCollectionAllOfFromJSON: zP,
  NonFungibleIdsCollectionAllOfFromJSONTyped: Zh,
  NonFungibleIdsCollectionAllOfToJSON: UP,
  NonFungibleIdsCollectionFromJSON: ou,
  NonFungibleIdsCollectionFromJSONTyped: Uh,
  NonFungibleIdsCollectionToJSON: su,
  NonFungibleResourcesCollectionAllOfFromJSON: $P,
  NonFungibleResourcesCollectionAllOfFromJSONTyped: Xh,
  NonFungibleResourcesCollectionAllOfToJSON: e1,
  NonFungibleResourcesCollectionFromJSON: Hh,
  NonFungibleResourcesCollectionFromJSONTyped: Yh,
  NonFungibleResourcesCollectionItemBaseFromJSON: n1,
  NonFungibleResourcesCollectionItemBaseFromJSONTyped: $h,
  NonFungibleResourcesCollectionItemBaseToJSON: r1,
  NonFungibleResourcesCollectionItemFromJSON: ki,
  NonFungibleResourcesCollectionItemFromJSONTyped: Kh,
  NonFungibleResourcesCollectionItemGloballyAggregatedAggregationLevelEnum: ZP,
  NonFungibleResourcesCollectionItemGloballyAggregatedAllOfAggregationLevelEnum: a1,
  NonFungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSON: o1,
  NonFungibleResourcesCollectionItemGloballyAggregatedAllOfFromJSONTyped: ev,
  NonFungibleResourcesCollectionItemGloballyAggregatedAllOfToJSON: s1,
  NonFungibleResourcesCollectionItemGloballyAggregatedFromJSON: BP,
  NonFungibleResourcesCollectionItemGloballyAggregatedFromJSONTyped: lu,
  NonFungibleResourcesCollectionItemGloballyAggregatedToJSON: qh,
  NonFungibleResourcesCollectionItemToJSON: Mi,
  NonFungibleResourcesCollectionItemVaultAggregatedAggregationLevelEnum: KP,
  NonFungibleResourcesCollectionItemVaultAggregatedAllOfAggregationLevelEnum: l1,
  NonFungibleResourcesCollectionItemVaultAggregatedAllOfFromJSON: c1,
  NonFungibleResourcesCollectionItemVaultAggregatedAllOfFromJSONTyped: tv,
  NonFungibleResourcesCollectionItemVaultAggregatedAllOfToJSON: d1,
  NonFungibleResourcesCollectionItemVaultAggregatedFromJSON: YP,
  NonFungibleResourcesCollectionItemVaultAggregatedFromJSONTyped: du,
  NonFungibleResourcesCollectionItemVaultAggregatedToJSON: Wh,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultAllOfFromJSON: f1,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultAllOfFromJSONTyped: nv,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultAllOfToJSON: m1,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultFromJSON: uu,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultFromJSONTyped: Gh,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemAllOfFromJSON: y1,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemAllOfFromJSONTyped: rv,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemAllOfToJSON: h1,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemFromJSON: xr,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemFromJSONTyped: Bh,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultItemToJSON: Tr,
  NonFungibleResourcesCollectionItemVaultAggregatedVaultToJSON: cu,
  NonFungibleResourcesCollectionToJSON: Qh,
  NotSyncedUpErrorAllOfFromJSON: b1,
  NotSyncedUpErrorAllOfFromJSONTyped: av,
  NotSyncedUpErrorAllOfToJSON: S1,
  NotSyncedUpErrorAllOfTypeEnum: v1,
  NotSyncedUpErrorFromJSON: KM,
  NotSyncedUpErrorFromJSONTyped: Xl,
  NotSyncedUpErrorToJSON: Sy,
  NotSyncedUpErrorTypeEnum: GM,
  NumberOfValues: ct,
  ObjectModuleId: lT,
  ObjectModuleIdFromJSON: fg,
  ObjectModuleIdFromJSONTyped: mg,
  ObjectModuleIdToJSON: uT,
  OneTimeDataRequestBuilder: HL,
  OptionalNonFungibleIdsCollectionAllOfFromJSON: w1,
  OptionalNonFungibleIdsCollectionAllOfFromJSONTyped: ov,
  OptionalNonFungibleIdsCollectionAllOfToJSON: x1,
  OptionalNonFungibleIdsCollectionFromJSON: N1,
  OptionalNonFungibleIdsCollectionFromJSONTyped: iv,
  OptionalNonFungibleIdsCollectionToJSON: A1,
  PackageVmType: T1,
  PackageVmTypeFromJSON: pu,
  PackageVmTypeFromJSONTyped: sv,
  PackageVmTypeToJSON: k1,
  Persona: Sr,
  PersonaDataName: Ss,
  PersonaDataNameVariant: Pp,
  PersonaDataRequestItem: Hr,
  PersonaDataRequestResponseItem: Ka,
  ProgrammaticScryptoSborValueArrayAllOfFromJSON: C1,
  ProgrammaticScryptoSborValueArrayAllOfFromJSONTyped: lv,
  ProgrammaticScryptoSborValueArrayAllOfKindEnum: M1,
  ProgrammaticScryptoSborValueArrayAllOfToJSON: D1,
  ProgrammaticScryptoSborValueArrayFromJSON: qw,
  ProgrammaticScryptoSborValueArrayFromJSONTyped: Rs,
  ProgrammaticScryptoSborValueArrayKindEnum: Uw,
  ProgrammaticScryptoSborValueArrayToJSON: Mm,
  ProgrammaticScryptoSborValueBaseFromJSON: R1,
  ProgrammaticScryptoSborValueBaseFromJSONTyped: uv,
  ProgrammaticScryptoSborValueBaseToJSON: F1,
  ProgrammaticScryptoSborValueBoolAllOfFromJSON: J1,
  ProgrammaticScryptoSborValueBoolAllOfFromJSONTyped: cv,
  ProgrammaticScryptoSborValueBoolAllOfKindEnum: V1,
  ProgrammaticScryptoSborValueBoolAllOfToJSON: L1,
  ProgrammaticScryptoSborValueBoolFromJSON: Ww,
  ProgrammaticScryptoSborValueBoolFromJSONTyped: Fs,
  ProgrammaticScryptoSborValueBoolKindEnum: Bw,
  ProgrammaticScryptoSborValueBoolToJSON: Em,
  ProgrammaticScryptoSborValueBytesAllOfFromJSON: Z1,
  ProgrammaticScryptoSborValueBytesAllOfFromJSONTyped: dv,
  ProgrammaticScryptoSborValueBytesAllOfKindEnum: z1,
  ProgrammaticScryptoSborValueBytesAllOfToJSON: q1,
  ProgrammaticScryptoSborValueBytesFromJSON: Yw,
  ProgrammaticScryptoSborValueBytesFromJSONTyped: Vs,
  ProgrammaticScryptoSborValueBytesKindEnum: Kw,
  ProgrammaticScryptoSborValueBytesToJSON: Cm,
  ProgrammaticScryptoSborValueDecimalAllOfFromJSON: W1,
  ProgrammaticScryptoSborValueDecimalAllOfFromJSONTyped: pv,
  ProgrammaticScryptoSborValueDecimalAllOfKindEnum: B1,
  ProgrammaticScryptoSborValueDecimalAllOfToJSON: K1,
  ProgrammaticScryptoSborValueDecimalFromJSON: $w,
  ProgrammaticScryptoSborValueDecimalFromJSONTyped: js,
  ProgrammaticScryptoSborValueDecimalKindEnum: Qw,
  ProgrammaticScryptoSborValueDecimalToJSON: Dm,
  ProgrammaticScryptoSborValueEnumAllOfFromJSON: Q1,
  ProgrammaticScryptoSborValueEnumAllOfFromJSONTyped: fv,
  ProgrammaticScryptoSborValueEnumAllOfKindEnum: H1,
  ProgrammaticScryptoSborValueEnumAllOfToJSON: X1,
  ProgrammaticScryptoSborValueEnumFromJSON: nx,
  ProgrammaticScryptoSborValueEnumFromJSONTyped: Js,
  ProgrammaticScryptoSborValueEnumKindEnum: ex,
  ProgrammaticScryptoSborValueEnumToJSON: Pm,
  ProgrammaticScryptoSborValueFromJSON: Ue,
  ProgrammaticScryptoSborValueFromJSONTyped: $m,
  ProgrammaticScryptoSborValueI128AllOfFromJSON: tR,
  ProgrammaticScryptoSborValueI128AllOfFromJSONTyped: mv,
  ProgrammaticScryptoSborValueI128AllOfKindEnum: $1,
  ProgrammaticScryptoSborValueI128AllOfToJSON: nR,
  ProgrammaticScryptoSborValueI128FromJSON: ix,
  ProgrammaticScryptoSborValueI128FromJSONTyped: Ls,
  ProgrammaticScryptoSborValueI128KindEnum: rx,
  ProgrammaticScryptoSborValueI128ToJSON: Rm,
  ProgrammaticScryptoSborValueI16AllOfFromJSON: iR,
  ProgrammaticScryptoSborValueI16AllOfFromJSONTyped: gv,
  ProgrammaticScryptoSborValueI16AllOfKindEnum: rR,
  ProgrammaticScryptoSborValueI16AllOfToJSON: oR,
  ProgrammaticScryptoSborValueI16FromJSON: lx,
  ProgrammaticScryptoSborValueI16FromJSONTyped: zs,
  ProgrammaticScryptoSborValueI16KindEnum: ox,
  ProgrammaticScryptoSborValueI16ToJSON: Fm,
  ProgrammaticScryptoSborValueI32AllOfFromJSON: uR,
  ProgrammaticScryptoSborValueI32AllOfFromJSONTyped: yv,
  ProgrammaticScryptoSborValueI32AllOfKindEnum: sR,
  ProgrammaticScryptoSborValueI32AllOfToJSON: cR,
  ProgrammaticScryptoSborValueI32FromJSON: dx,
  ProgrammaticScryptoSborValueI32FromJSONTyped: Us,
  ProgrammaticScryptoSborValueI32KindEnum: ux,
  ProgrammaticScryptoSborValueI32ToJSON: Vm,
  ProgrammaticScryptoSborValueI64AllOfFromJSON: fR,
  ProgrammaticScryptoSborValueI64AllOfFromJSONTyped: hv,
  ProgrammaticScryptoSborValueI64AllOfKindEnum: dR,
  ProgrammaticScryptoSborValueI64AllOfToJSON: mR,
  ProgrammaticScryptoSborValueI64FromJSON: mx,
  ProgrammaticScryptoSborValueI64FromJSONTyped: Zs,
  ProgrammaticScryptoSborValueI64KindEnum: px,
  ProgrammaticScryptoSborValueI64ToJSON: jm,
  ProgrammaticScryptoSborValueI8AllOfFromJSON: hR,
  ProgrammaticScryptoSborValueI8AllOfFromJSONTyped: vv,
  ProgrammaticScryptoSborValueI8AllOfKindEnum: gR,
  ProgrammaticScryptoSborValueI8AllOfToJSON: vR,
  ProgrammaticScryptoSborValueI8FromJSON: hx,
  ProgrammaticScryptoSborValueI8FromJSONTyped: qs,
  ProgrammaticScryptoSborValueI8KindEnum: gx,
  ProgrammaticScryptoSborValueI8ToJSON: Jm,
  ProgrammaticScryptoSborValueKind: Lw,
  ProgrammaticScryptoSborValueKindFromJSON: vt,
  ProgrammaticScryptoSborValueKindFromJSONTyped: km,
  ProgrammaticScryptoSborValueKindToJSON: zw,
  ProgrammaticScryptoSborValueMapAllOfFromJSON: SR,
  ProgrammaticScryptoSborValueMapAllOfFromJSONTyped: _v,
  ProgrammaticScryptoSborValueMapAllOfKindEnum: _R,
  ProgrammaticScryptoSborValueMapAllOfToJSON: OR,
  ProgrammaticScryptoSborValueMapEntryFromJSON: Bs,
  ProgrammaticScryptoSborValueMapEntryFromJSONTyped: Lm,
  ProgrammaticScryptoSborValueMapEntryToJSON: Gs,
  ProgrammaticScryptoSborValueMapFromJSON: Sx,
  ProgrammaticScryptoSborValueMapFromJSONTyped: Ws,
  ProgrammaticScryptoSborValueMapKindEnum: _x,
  ProgrammaticScryptoSborValueMapToJSON: zm,
  ProgrammaticScryptoSborValueNonFungibleLocalIdAllOfFromJSON: IR,
  ProgrammaticScryptoSborValueNonFungibleLocalIdAllOfFromJSONTyped: bv,
  ProgrammaticScryptoSborValueNonFungibleLocalIdAllOfKindEnum: NR,
  ProgrammaticScryptoSborValueNonFungibleLocalIdAllOfToJSON: wR,
  ProgrammaticScryptoSborValueNonFungibleLocalIdFromJSON: Ax,
  ProgrammaticScryptoSborValueNonFungibleLocalIdFromJSONTyped: Ks,
  ProgrammaticScryptoSborValueNonFungibleLocalIdKindEnum: Ox,
  ProgrammaticScryptoSborValueNonFungibleLocalIdToJSON: Um,
  ProgrammaticScryptoSborValueOwnAllOfFromJSON: kR,
  ProgrammaticScryptoSborValueOwnAllOfFromJSONTyped: Sv,
  ProgrammaticScryptoSborValueOwnAllOfKindEnum: xR,
  ProgrammaticScryptoSborValueOwnAllOfToJSON: MR,
  ProgrammaticScryptoSborValueOwnFromJSON: xx,
  ProgrammaticScryptoSborValueOwnFromJSONTyped: Hs,
  ProgrammaticScryptoSborValueOwnKindEnum: Ix,
  ProgrammaticScryptoSborValueOwnToJSON: Zm,
  ProgrammaticScryptoSborValuePreciseDecimalAllOfFromJSON: DR,
  ProgrammaticScryptoSborValuePreciseDecimalAllOfFromJSONTyped: Ov,
  ProgrammaticScryptoSborValuePreciseDecimalAllOfKindEnum: ER,
  ProgrammaticScryptoSborValuePreciseDecimalAllOfToJSON: PR,
  ProgrammaticScryptoSborValuePreciseDecimalFromJSON: Mx,
  ProgrammaticScryptoSborValuePreciseDecimalFromJSONTyped: Ys,
  ProgrammaticScryptoSborValuePreciseDecimalKindEnum: Tx,
  ProgrammaticScryptoSborValuePreciseDecimalToJSON: qm,
  ProgrammaticScryptoSborValueReferenceAllOfFromJSON: VR,
  ProgrammaticScryptoSborValueReferenceAllOfFromJSONTyped: Nv,
  ProgrammaticScryptoSborValueReferenceAllOfKindEnum: RR,
  ProgrammaticScryptoSborValueReferenceAllOfToJSON: jR,
  ProgrammaticScryptoSborValueReferenceFromJSON: Dx,
  ProgrammaticScryptoSborValueReferenceFromJSONTyped: Qs,
  ProgrammaticScryptoSborValueReferenceKindEnum: Ex,
  ProgrammaticScryptoSborValueReferenceToJSON: Bm,
  ProgrammaticScryptoSborValueStringAllOfFromJSON: zR,
  ProgrammaticScryptoSborValueStringAllOfFromJSONTyped: Av,
  ProgrammaticScryptoSborValueStringAllOfKindEnum: JR,
  ProgrammaticScryptoSborValueStringAllOfToJSON: UR,
  ProgrammaticScryptoSborValueStringFromJSON: Fx,
  ProgrammaticScryptoSborValueStringFromJSONTyped: Xs,
  ProgrammaticScryptoSborValueStringKindEnum: Px,
  ProgrammaticScryptoSborValueStringToJSON: Gm,
  ProgrammaticScryptoSborValueToJSON: Ze,
  ProgrammaticScryptoSborValueTupleAllOfFromJSON: BR,
  ProgrammaticScryptoSborValueTupleAllOfFromJSONTyped: Iv,
  ProgrammaticScryptoSborValueTupleAllOfKindEnum: ZR,
  ProgrammaticScryptoSborValueTupleAllOfToJSON: GR,
  ProgrammaticScryptoSborValueTupleFromJSON: Jx,
  ProgrammaticScryptoSborValueTupleFromJSONTyped: $s,
  ProgrammaticScryptoSborValueTupleKindEnum: Vx,
  ProgrammaticScryptoSborValueTupleToJSON: Wm,
  ProgrammaticScryptoSborValueU128AllOfFromJSON: HR,
  ProgrammaticScryptoSborValueU128AllOfFromJSONTyped: wv,
  ProgrammaticScryptoSborValueU128AllOfKindEnum: WR,
  ProgrammaticScryptoSborValueU128AllOfToJSON: YR,
  ProgrammaticScryptoSborValueU128FromJSON: Ux,
  ProgrammaticScryptoSborValueU128FromJSONTyped: el,
  ProgrammaticScryptoSborValueU128KindEnum: Lx,
  ProgrammaticScryptoSborValueU128ToJSON: Km,
  ProgrammaticScryptoSborValueU16AllOfFromJSON: $R,
  ProgrammaticScryptoSborValueU16AllOfFromJSONTyped: xv,
  ProgrammaticScryptoSborValueU16AllOfKindEnum: QR,
  ProgrammaticScryptoSborValueU16AllOfToJSON: eF,
  ProgrammaticScryptoSborValueU16FromJSON: Bx,
  ProgrammaticScryptoSborValueU16FromJSONTyped: tl,
  ProgrammaticScryptoSborValueU16KindEnum: Zx,
  ProgrammaticScryptoSborValueU16ToJSON: Hm,
  ProgrammaticScryptoSborValueU32AllOfFromJSON: rF,
  ProgrammaticScryptoSborValueU32AllOfFromJSONTyped: Tv,
  ProgrammaticScryptoSborValueU32AllOfKindEnum: tF,
  ProgrammaticScryptoSborValueU32AllOfToJSON: aF,
  ProgrammaticScryptoSborValueU32FromJSON: Kx,
  ProgrammaticScryptoSborValueU32FromJSONTyped: nl,
  ProgrammaticScryptoSborValueU32KindEnum: Gx,
  ProgrammaticScryptoSborValueU32ToJSON: Ym,
  ProgrammaticScryptoSborValueU64AllOfFromJSON: sF,
  ProgrammaticScryptoSborValueU64AllOfFromJSONTyped: kv,
  ProgrammaticScryptoSborValueU64AllOfKindEnum: iF,
  ProgrammaticScryptoSborValueU64AllOfToJSON: lF,
  ProgrammaticScryptoSborValueU64FromJSON: Qx,
  ProgrammaticScryptoSborValueU64FromJSONTyped: rl,
  ProgrammaticScryptoSborValueU64KindEnum: Hx,
  ProgrammaticScryptoSborValueU64ToJSON: Qm,
  ProgrammaticScryptoSborValueU8AllOfFromJSON: dF,
  ProgrammaticScryptoSborValueU8AllOfFromJSONTyped: Mv,
  ProgrammaticScryptoSborValueU8AllOfKindEnum: uF,
  ProgrammaticScryptoSborValueU8AllOfToJSON: pF,
  ProgrammaticScryptoSborValueU8FromJSON: eT,
  ProgrammaticScryptoSborValueU8FromJSONTyped: al,
  ProgrammaticScryptoSborValueU8KindEnum: Xx,
  ProgrammaticScryptoSborValueU8ToJSON: Xm,
  Proof: br,
  PublicKeyBaseFromJSON: yF,
  PublicKeyBaseFromJSONTyped: Dv,
  PublicKeyBaseToJSON: hF,
  PublicKeyEcdsaSecp256k1AllOfFromJSON: bF,
  PublicKeyEcdsaSecp256k1AllOfFromJSONTyped: Pv,
  PublicKeyEcdsaSecp256k1AllOfKeyTypeEnum: vF,
  PublicKeyEcdsaSecp256k1AllOfToJSON: SF,
  PublicKeyEcdsaSecp256k1FromJSON: _k,
  PublicKeyEcdsaSecp256k1FromJSONTyped: Il,
  PublicKeyEcdsaSecp256k1KeyTypeEnum: hk,
  PublicKeyEcdsaSecp256k1ToJSON: Lg,
  PublicKeyEddsaEd25519AllOfFromJSON: AF,
  PublicKeyEddsaEd25519AllOfFromJSONTyped: Rv,
  PublicKeyEddsaEd25519AllOfKeyTypeEnum: OF,
  PublicKeyEddsaEd25519AllOfToJSON: IF,
  PublicKeyEddsaEd25519FromJSON: Ok,
  PublicKeyEddsaEd25519FromJSONTyped: wl,
  PublicKeyEddsaEd25519KeyTypeEnum: bk,
  PublicKeyEddsaEd25519ToJSON: zg,
  PublicKeyFromJSON: tn,
  PublicKeyFromJSONTyped: Ug,
  PublicKeyHashBaseFromJSON: kF,
  PublicKeyHashBaseFromJSONTyped: jv,
  PublicKeyHashBaseToJSON: MF,
  PublicKeyHashEcdsaSecp256k1AllOfFromJSON: DF,
  PublicKeyHashEcdsaSecp256k1AllOfFromJSONTyped: Jv,
  PublicKeyHashEcdsaSecp256k1AllOfKeyHashTypeEnum: EF,
  PublicKeyHashEcdsaSecp256k1AllOfToJSON: PF,
  PublicKeyHashEcdsaSecp256k1FromJSON: Tk,
  PublicKeyHashEcdsaSecp256k1FromJSONTyped: Tl,
  PublicKeyHashEcdsaSecp256k1KeyHashTypeEnum: wk,
  PublicKeyHashEcdsaSecp256k1ToJSON: qg,
  PublicKeyHashEddsaEd25519AllOfFromJSON: VF,
  PublicKeyHashEddsaEd25519AllOfFromJSONTyped: Lv,
  PublicKeyHashEddsaEd25519AllOfKeyHashTypeEnum: RF,
  PublicKeyHashEddsaEd25519AllOfToJSON: jF,
  PublicKeyHashEddsaEd25519FromJSON: Ek,
  PublicKeyHashEddsaEd25519FromJSONTyped: kl,
  PublicKeyHashEddsaEd25519KeyHashTypeEnum: kk,
  PublicKeyHashEddsaEd25519ToJSON: Bg,
  PublicKeyHashFromJSON: da,
  PublicKeyHashFromJSONTyped: Gg,
  PublicKeyHashToJSON: pa,
  PublicKeyHashType: wF,
  PublicKeyHashTypeFromJSON: Fv,
  PublicKeyHashTypeFromJSONTyped: Vv,
  PublicKeyHashTypeToJSON: xF,
  PublicKeyToJSON: nn,
  PublicKeyType: fF,
  PublicKeyTypeFromJSON: Ev,
  PublicKeyTypeFromJSONTyped: Cv,
  PublicKeyTypeToJSON: mF,
  RadixDappToolkit: GL,
  RadixNetwork: ot,
  RadixNetworkConfig: K0,
  RadixNetworkConfigById: os,
  RdtGatewayApiClient: $0,
  RdtState: em,
  RequiredError: be,
  ResetRequestItem: Rp,
  ResourceAggregationLevel: Vy,
  ResourceAggregationLevelFromJSON: Jt,
  ResourceAggregationLevelFromJSONTyped: jy,
  ResourceAggregationLevelToJSON: yE,
  ResponseError: na,
  ResultSetCursorMixinFromJSON: LF,
  ResultSetCursorMixinFromJSONTyped: zv,
  ResultSetCursorMixinToJSON: zF,
  RoleAssignmentResolution: iT,
  RoleAssignmentResolutionFromJSON: lg,
  RoleAssignmentResolutionFromJSONTyped: ug,
  RoleAssignmentResolutionToJSON: oT,
  RoleKeyFromJSON: ts,
  RoleKeyFromJSONTyped: gg,
  RoleKeyToJSON: ns,
  ScryptoSborValueFromJSON: pi,
  ScryptoSborValueFromJSONTyped: Uv,
  ScryptoSborValueToJSON: fi,
  SendTransactionItem: qp,
  SendTransactionResponseItem: Gp,
  SharedData: $f,
  SignedChallenge: Wf,
  SignedChallengeAccount: Gf,
  SignedChallengePersona: Bf,
  State: W0,
  StateApi: U0,
  StateEntityDetailsOptInsFromJSON: fu,
  StateEntityDetailsOptInsFromJSONTyped: Zv,
  StateEntityDetailsOptInsToJSON: mu,
  StateEntityDetailsRequestAllOfFromJSON: WF,
  StateEntityDetailsRequestAllOfFromJSONTyped: Gv,
  StateEntityDetailsRequestAllOfToJSON: KF,
  StateEntityDetailsRequestFromJSON: BF,
  StateEntityDetailsRequestFromJSONTyped: qv,
  StateEntityDetailsRequestToJSON: Bv,
  StateEntityDetailsResponseAllOfFromJSON: OV,
  StateEntityDetailsResponseAllOfFromJSONTyped: p_,
  StateEntityDetailsResponseAllOfToJSON: NV,
  StateEntityDetailsResponseComponentDetailsAllOfFromJSON: wV,
  StateEntityDetailsResponseComponentDetailsAllOfFromJSONTyped: f_,
  StateEntityDetailsResponseComponentDetailsAllOfToJSON: xV,
  StateEntityDetailsResponseComponentDetailsAllOfTypeEnum: AV,
  StateEntityDetailsResponseComponentDetailsFromJSON: XF,
  StateEntityDetailsResponseComponentDetailsFromJSONTyped: gu,
  StateEntityDetailsResponseComponentDetailsToJSON: Yv,
  StateEntityDetailsResponseComponentDetailsTypeEnum: YF,
  StateEntityDetailsResponseFromJSON: c_,
  StateEntityDetailsResponseFromJSONTyped: d_,
  StateEntityDetailsResponseFungibleResourceDetailsAllOfFromJSON: MV,
  StateEntityDetailsResponseFungibleResourceDetailsAllOfFromJSONTyped: m_,
  StateEntityDetailsResponseFungibleResourceDetailsAllOfToJSON: EV,
  StateEntityDetailsResponseFungibleResourceDetailsAllOfTypeEnum: TV,
  StateEntityDetailsResponseFungibleResourceDetailsFromJSON: tV,
  StateEntityDetailsResponseFungibleResourceDetailsFromJSONTyped: yu,
  StateEntityDetailsResponseFungibleResourceDetailsToJSON: Qv,
  StateEntityDetailsResponseFungibleResourceDetailsTypeEnum: $F,
  StateEntityDetailsResponseFungibleVaultDetailsAllOfFromJSON: PV,
  StateEntityDetailsResponseFungibleVaultDetailsAllOfFromJSONTyped: g_,
  StateEntityDetailsResponseFungibleVaultDetailsAllOfToJSON: RV,
  StateEntityDetailsResponseFungibleVaultDetailsAllOfTypeEnum: CV,
  StateEntityDetailsResponseFungibleVaultDetailsFromJSON: aV,
  StateEntityDetailsResponseFungibleVaultDetailsFromJSONTyped: hu,
  StateEntityDetailsResponseFungibleVaultDetailsToJSON: Xv,
  StateEntityDetailsResponseFungibleVaultDetailsTypeEnum: nV,
  StateEntityDetailsResponseItemAncestorIdentitiesFromJSON: Wv,
  StateEntityDetailsResponseItemAncestorIdentitiesFromJSONTyped: Kv,
  StateEntityDetailsResponseItemAncestorIdentitiesToJSON: Hv,
  StateEntityDetailsResponseItemDetailsBaseFromJSON: JV,
  StateEntityDetailsResponseItemDetailsBaseFromJSONTyped: v_,
  StateEntityDetailsResponseItemDetailsBaseToJSON: LV,
  StateEntityDetailsResponseItemDetailsFromJSON: o_,
  StateEntityDetailsResponseItemDetailsFromJSONTyped: s_,
  StateEntityDetailsResponseItemDetailsToJSON: l_,
  StateEntityDetailsResponseItemDetailsType: FV,
  StateEntityDetailsResponseItemDetailsTypeFromJSON: y_,
  StateEntityDetailsResponseItemDetailsTypeFromJSONTyped: h_,
  StateEntityDetailsResponseItemDetailsTypeToJSON: VV,
  StateEntityDetailsResponseItemFromJSON: ku,
  StateEntityDetailsResponseItemFromJSONTyped: u_,
  StateEntityDetailsResponseItemToJSON: Mu,
  StateEntityDetailsResponseNonFungibleResourceDetailsAllOfFromJSON: ZV,
  StateEntityDetailsResponseNonFungibleResourceDetailsAllOfFromJSONTyped: __,
  StateEntityDetailsResponseNonFungibleResourceDetailsAllOfToJSON: qV,
  StateEntityDetailsResponseNonFungibleResourceDetailsAllOfTypeEnum: zV,
  StateEntityDetailsResponseNonFungibleResourceDetailsFromJSON: sV,
  StateEntityDetailsResponseNonFungibleResourceDetailsFromJSONTyped: vu,
  StateEntityDetailsResponseNonFungibleResourceDetailsToJSON: $v,
  StateEntityDetailsResponseNonFungibleResourceDetailsTypeEnum: iV,
  StateEntityDetailsResponseNonFungibleVaultDetailsAllOfFromJSON: WV,
  StateEntityDetailsResponseNonFungibleVaultDetailsAllOfFromJSONTyped: b_,
  StateEntityDetailsResponseNonFungibleVaultDetailsAllOfToJSON: KV,
  StateEntityDetailsResponseNonFungibleVaultDetailsAllOfTypeEnum: BV,
  StateEntityDetailsResponseNonFungibleVaultDetailsFromJSON: cV,
  StateEntityDetailsResponseNonFungibleVaultDetailsFromJSONTyped: _u,
  StateEntityDetailsResponseNonFungibleVaultDetailsToJSON: e_,
  StateEntityDetailsResponseNonFungibleVaultDetailsTypeEnum: lV,
  StateEntityDetailsResponsePackageDetailsAllOfFromJSON: QV,
  StateEntityDetailsResponsePackageDetailsAllOfFromJSONTyped: S_,
  StateEntityDetailsResponsePackageDetailsAllOfToJSON: XV,
  StateEntityDetailsResponsePackageDetailsAllOfTypeEnum: HV,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionAllOfFromJSON: ej,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionAllOfFromJSONTyped: O_,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionAllOfToJSON: tj,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionFromJSON: Ou,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionFromJSONTyped: n_,
  StateEntityDetailsResponsePackageDetailsBlueprintCollectionToJSON: Nu,
  StateEntityDetailsResponsePackageDetailsBlueprintItemFromJSON: bu,
  StateEntityDetailsResponsePackageDetailsBlueprintItemFromJSONTyped: t_,
  StateEntityDetailsResponsePackageDetailsBlueprintItemToJSON: Su,
  StateEntityDetailsResponsePackageDetailsFromJSON: hV,
  StateEntityDetailsResponsePackageDetailsFromJSONTyped: Tu,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionAllOfFromJSON: rj,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionAllOfFromJSONTyped: N_,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionAllOfToJSON: aj,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionFromJSON: wu,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionFromJSONTyped: a_,
  StateEntityDetailsResponsePackageDetailsSchemaCollectionToJSON: xu,
  StateEntityDetailsResponsePackageDetailsSchemaItemFromJSON: Au,
  StateEntityDetailsResponsePackageDetailsSchemaItemFromJSONTyped: r_,
  StateEntityDetailsResponsePackageDetailsSchemaItemToJSON: Iu,
  StateEntityDetailsResponsePackageDetailsToJSON: i_,
  StateEntityDetailsResponsePackageDetailsTypeEnum: gV,
  StateEntityDetailsResponseToJSON: bV,
  StateEntityFungibleResourceVaultsPageRequestAllOfFromJSON: lj,
  StateEntityFungibleResourceVaultsPageRequestAllOfFromJSONTyped: w_,
  StateEntityFungibleResourceVaultsPageRequestAllOfToJSON: uj,
  StateEntityFungibleResourceVaultsPageRequestFromJSON: oj,
  StateEntityFungibleResourceVaultsPageRequestFromJSONTyped: A_,
  StateEntityFungibleResourceVaultsPageRequestToJSON: I_,
  StateEntityFungibleResourceVaultsPageResponseFromJSON: x_,
  StateEntityFungibleResourceVaultsPageResponseFromJSONTyped: T_,
  StateEntityFungibleResourceVaultsPageResponseToJSON: dj,
  StateEntityFungiblesPageRequestAllOfFromJSON: yj,
  StateEntityFungiblesPageRequestAllOfFromJSONTyped: C_,
  StateEntityFungiblesPageRequestAllOfToJSON: hj,
  StateEntityFungiblesPageRequestFromJSON: mj,
  StateEntityFungiblesPageRequestFromJSONTyped: M_,
  StateEntityFungiblesPageRequestOptInsFromJSON: Eu,
  StateEntityFungiblesPageRequestOptInsFromJSONTyped: k_,
  StateEntityFungiblesPageRequestOptInsToJSON: Cu,
  StateEntityFungiblesPageRequestToJSON: E_,
  StateEntityFungiblesPageResponseFromJSON: D_,
  StateEntityFungiblesPageResponseFromJSONTyped: P_,
  StateEntityFungiblesPageResponseToJSON: _j,
  StateEntityMetadataPageRequestAllOfFromJSON: Nj,
  StateEntityMetadataPageRequestAllOfFromJSONTyped: V_,
  StateEntityMetadataPageRequestAllOfToJSON: Aj,
  StateEntityMetadataPageRequestFromJSON: Sj,
  StateEntityMetadataPageRequestFromJSONTyped: R_,
  StateEntityMetadataPageRequestToJSON: F_,
  StateEntityMetadataPageResponseFromJSON: j_,
  StateEntityMetadataPageResponseFromJSONTyped: J_,
  StateEntityMetadataPageResponseToJSON: wj,
  StateEntityNonFungibleIdsPageRequestAllOfFromJSON: Mj,
  StateEntityNonFungibleIdsPageRequestAllOfFromJSONTyped: U_,
  StateEntityNonFungibleIdsPageRequestAllOfToJSON: Ej,
  StateEntityNonFungibleIdsPageRequestFromJSON: Tj,
  StateEntityNonFungibleIdsPageRequestFromJSONTyped: L_,
  StateEntityNonFungibleIdsPageRequestToJSON: z_,
  StateEntityNonFungibleIdsPageResponseFromJSON: Z_,
  StateEntityNonFungibleIdsPageResponseFromJSONTyped: q_,
  StateEntityNonFungibleIdsPageResponseToJSON: Dj,
  StateEntityNonFungibleResourceVaultsPageOptInsFromJSON: Du,
  StateEntityNonFungibleResourceVaultsPageOptInsFromJSONTyped: B_,
  StateEntityNonFungibleResourceVaultsPageOptInsToJSON: Pu,
  StateEntityNonFungibleResourceVaultsPageRequestAllOfFromJSON: jj,
  StateEntityNonFungibleResourceVaultsPageRequestAllOfFromJSONTyped: K_,
  StateEntityNonFungibleResourceVaultsPageRequestAllOfToJSON: Jj,
  StateEntityNonFungibleResourceVaultsPageRequestFromJSON: Fj,
  StateEntityNonFungibleResourceVaultsPageRequestFromJSONTyped: G_,
  StateEntityNonFungibleResourceVaultsPageRequestToJSON: W_,
  StateEntityNonFungibleResourceVaultsPageResponseFromJSON: H_,
  StateEntityNonFungibleResourceVaultsPageResponseFromJSONTyped: Y_,
  StateEntityNonFungibleResourceVaultsPageResponseToJSON: zj,
  StateEntityNonFungiblesPageRequestAllOfFromJSON: Gj,
  StateEntityNonFungiblesPageRequestAllOfFromJSONTyped: eb,
  StateEntityNonFungiblesPageRequestAllOfToJSON: Wj,
  StateEntityNonFungiblesPageRequestFromJSON: qj,
  StateEntityNonFungiblesPageRequestFromJSONTyped: X_,
  StateEntityNonFungiblesPageRequestOptInsFromJSON: Ru,
  StateEntityNonFungiblesPageRequestOptInsFromJSONTyped: Q_,
  StateEntityNonFungiblesPageRequestOptInsToJSON: Fu,
  StateEntityNonFungiblesPageRequestToJSON: $_,
  StateEntityNonFungiblesPageResponseFromJSON: tb,
  StateEntityNonFungiblesPageResponseFromJSONTyped: nb,
  StateEntityNonFungiblesPageResponseToJSON: Hj,
  StateKeyValueStoreDataRequestAllOfFromJSON: e2,
  StateKeyValueStoreDataRequestAllOfFromJSONTyped: ob,
  StateKeyValueStoreDataRequestAllOfToJSON: t2,
  StateKeyValueStoreDataRequestFromJSON: Xj,
  StateKeyValueStoreDataRequestFromJSONTyped: ab,
  StateKeyValueStoreDataRequestKeyItemFromJSON: Vu,
  StateKeyValueStoreDataRequestKeyItemFromJSONTyped: rb,
  StateKeyValueStoreDataRequestKeyItemToJSON: ju,
  StateKeyValueStoreDataRequestToJSON: ib,
  StateKeyValueStoreDataResponseAllOfFromJSON: o2,
  StateKeyValueStoreDataResponseAllOfFromJSONTyped: cb,
  StateKeyValueStoreDataResponseAllOfToJSON: s2,
  StateKeyValueStoreDataResponseFromJSON: lb,
  StateKeyValueStoreDataResponseFromJSONTyped: ub,
  StateKeyValueStoreDataResponseItemFromJSON: Ju,
  StateKeyValueStoreDataResponseItemFromJSONTyped: sb,
  StateKeyValueStoreDataResponseItemToJSON: Lu,
  StateKeyValueStoreDataResponseToJSON: a2,
  StateNonFungibleDataRequestFromJSON: u2,
  StateNonFungibleDataRequestFromJSONTyped: db,
  StateNonFungibleDataRequestToJSON: pb,
  StateNonFungibleDataResponseAllOfFromJSON: m2,
  StateNonFungibleDataResponseAllOfFromJSONTyped: yb,
  StateNonFungibleDataResponseAllOfToJSON: g2,
  StateNonFungibleDataResponseFromJSON: mb,
  StateNonFungibleDataResponseFromJSONTyped: gb,
  StateNonFungibleDataResponseToJSON: p2,
  StateNonFungibleDetailsResponseItemFromJSON: zu,
  StateNonFungibleDetailsResponseItemFromJSONTyped: fb,
  StateNonFungibleDetailsResponseItemToJSON: Uu,
  StateNonFungibleIdsRequestAllOfFromJSON: _2,
  StateNonFungibleIdsRequestAllOfFromJSONTyped: _b,
  StateNonFungibleIdsRequestAllOfToJSON: b2,
  StateNonFungibleIdsRequestFromJSON: h2,
  StateNonFungibleIdsRequestFromJSONTyped: hb,
  StateNonFungibleIdsRequestToJSON: vb,
  StateNonFungibleIdsResponseAllOfFromJSON: A2,
  StateNonFungibleIdsResponseAllOfFromJSONTyped: Ob,
  StateNonFungibleIdsResponseAllOfToJSON: I2,
  StateNonFungibleIdsResponseFromJSON: bb,
  StateNonFungibleIdsResponseFromJSONTyped: Sb,
  StateNonFungibleIdsResponseToJSON: O2,
  StateNonFungibleLocationRequestAllOfFromJSON: k2,
  StateNonFungibleLocationRequestAllOfFromJSONTyped: Ib,
  StateNonFungibleLocationRequestAllOfToJSON: M2,
  StateNonFungibleLocationRequestFromJSON: x2,
  StateNonFungibleLocationRequestFromJSONTyped: Nb,
  StateNonFungibleLocationRequestToJSON: Ab,
  StateNonFungibleLocationResponseAllOfFromJSON: R2,
  StateNonFungibleLocationResponseAllOfFromJSONTyped: kb,
  StateNonFungibleLocationResponseAllOfToJSON: F2,
  StateNonFungibleLocationResponseFromJSON: xb,
  StateNonFungibleLocationResponseFromJSONTyped: Tb,
  StateNonFungibleLocationResponseItemFromJSON: Zu,
  StateNonFungibleLocationResponseItemFromJSONTyped: wb,
  StateNonFungibleLocationResponseItemToJSON: qu,
  StateNonFungibleLocationResponseToJSON: D2,
  StateValidatorsListRequestAllOfFromJSON: L2,
  StateValidatorsListRequestAllOfFromJSONTyped: Cb,
  StateValidatorsListRequestAllOfToJSON: z2,
  StateValidatorsListRequestFromJSON: j2,
  StateValidatorsListRequestFromJSONTyped: Mb,
  StateValidatorsListRequestToJSON: Eb,
  StateValidatorsListResponseAllOfFromJSON: H2,
  StateValidatorsListResponseAllOfFromJSONTyped: zb,
  StateValidatorsListResponseAllOfToJSON: Y2,
  StateValidatorsListResponseFromJSON: Jb,
  StateValidatorsListResponseFromJSONTyped: Lb,
  StateValidatorsListResponseToJSON: W2,
  Statistics: H0,
  StatisticsApi: Z0,
  Status: Y0,
  StatusApi: q0,
  Stream: Q0,
  StreamApi: B0,
  StreamTransactionsRequestAllOfFromJSON: sJ,
  StreamTransactionsRequestAllOfFromJSONTyped: Gb,
  StreamTransactionsRequestAllOfKindFilterEnum: aJ,
  StreamTransactionsRequestAllOfOrderEnum: iJ,
  StreamTransactionsRequestAllOfToJSON: lJ,
  StreamTransactionsRequestEventFilterItemEventEnum: Q2,
  StreamTransactionsRequestEventFilterItemFromJSON: Hu,
  StreamTransactionsRequestEventFilterItemFromJSONTyped: Ub,
  StreamTransactionsRequestEventFilterItemToJSON: Yu,
  StreamTransactionsRequestFromJSON: rJ,
  StreamTransactionsRequestFromJSONTyped: qb,
  StreamTransactionsRequestKindFilterEnum: eJ,
  StreamTransactionsRequestOrderEnum: tJ,
  StreamTransactionsRequestToJSON: Bb,
  StreamTransactionsResponseAllOfFromJSON: pJ,
  StreamTransactionsResponseAllOfFromJSONTyped: Hb,
  StreamTransactionsResponseAllOfToJSON: fJ,
  StreamTransactionsResponseFromJSON: Wb,
  StreamTransactionsResponseFromJSONTyped: Kb,
  StreamTransactionsResponseToJSON: cJ,
  TextApiResponse: kw,
  Transaction: X0,
  TransactionApi: G0,
  TransactionBalanceChangesFromJSON: wm,
  TransactionBalanceChangesFromJSONTyped: xm,
  TransactionBalanceChangesToJSON: Tm,
  TransactionCommittedDetailsRequestAllOfFromJSON: hJ,
  TransactionCommittedDetailsRequestAllOfFromJSONTyped: Xb,
  TransactionCommittedDetailsRequestAllOfToJSON: vJ,
  TransactionCommittedDetailsRequestFromJSON: gJ,
  TransactionCommittedDetailsRequestFromJSONTyped: Yb,
  TransactionCommittedDetailsRequestToJSON: Qb,
  TransactionCommittedDetailsResponseAllOfFromJSON: OJ,
  TransactionCommittedDetailsResponseAllOfFromJSONTyped: t0,
  TransactionCommittedDetailsResponseAllOfToJSON: NJ,
  TransactionCommittedDetailsResponseFromJSON: $b,
  TransactionCommittedDetailsResponseFromJSONTyped: e0,
  TransactionCommittedDetailsResponseToJSON: bJ,
  TransactionConstructionResponseFromJSON: n0,
  TransactionConstructionResponseFromJSONTyped: r0,
  TransactionConstructionResponseToJSON: IJ,
  TransactionDetailsOptInsFromJSON: ma,
  TransactionDetailsOptInsFromJSONTyped: Zb,
  TransactionDetailsOptInsToJSON: ga,
  TransactionFungibleBalanceChangesFromJSON: gm,
  TransactionFungibleBalanceChangesFromJSONTyped: ym,
  TransactionFungibleBalanceChangesToJSON: hm,
  TransactionFungibleFeeBalanceChangeType: Rw,
  TransactionFungibleFeeBalanceChangeTypeFromJSON: vm,
  TransactionFungibleFeeBalanceChangeTypeFromJSONTyped: _m,
  TransactionFungibleFeeBalanceChangeTypeToJSON: Fw,
  TransactionFungibleFeeBalanceChangesFromJSON: bm,
  TransactionFungibleFeeBalanceChangesFromJSONTyped: Sm,
  TransactionFungibleFeeBalanceChangesToJSON: Om,
  TransactionIntentStatus: wJ,
  TransactionIntentStatusFromJSON: Qu,
  TransactionIntentStatusFromJSONTyped: a0,
  TransactionIntentStatusToJSON: xJ,
  TransactionNonFungibleBalanceChangesFromJSON: Nm,
  TransactionNonFungibleBalanceChangesFromJSONTyped: Am,
  TransactionNonFungibleBalanceChangesToJSON: Im,
  TransactionNotFoundErrorAllOfFromJSON: MJ,
  TransactionNotFoundErrorAllOfFromJSONTyped: i0,
  TransactionNotFoundErrorAllOfToJSON: EJ,
  TransactionNotFoundErrorAllOfTypeEnum: TJ,
  TransactionNotFoundErrorFromJSON: QM,
  TransactionNotFoundErrorFromJSONTyped: $l,
  TransactionNotFoundErrorToJSON: Oy,
  TransactionNotFoundErrorTypeEnum: HM,
  TransactionPayloadGatewayHandlingStatus: CJ,
  TransactionPayloadGatewayHandlingStatusFromJSON: o0,
  TransactionPayloadGatewayHandlingStatusFromJSONTyped: s0,
  TransactionPayloadGatewayHandlingStatusToJSON: DJ,
  TransactionPayloadStatus: PJ,
  TransactionPayloadStatusFromJSON: l0,
  TransactionPayloadStatusFromJSONTyped: u0,
  TransactionPayloadStatusToJSON: RJ,
  TransactionPreviewRequestFlagsFromJSON: c0,
  TransactionPreviewRequestFlagsFromJSONTyped: d0,
  TransactionPreviewRequestFlagsToJSON: p0,
  TransactionPreviewRequestFromJSON: jJ,
  TransactionPreviewRequestFromJSONTyped: f0,
  TransactionPreviewRequestToJSON: m0,
  TransactionPreviewResponseFromJSON: v0,
  TransactionPreviewResponseFromJSONTyped: _0,
  TransactionPreviewResponseLogsInnerFromJSON: g0,
  TransactionPreviewResponseLogsInnerFromJSONTyped: y0,
  TransactionPreviewResponseLogsInnerToJSON: h0,
  TransactionPreviewResponseToJSON: zJ,
  TransactionReceiptFromJSON: ag,
  TransactionReceiptFromJSONTyped: ig,
  TransactionReceiptToJSON: og,
  TransactionStatus: es,
  TransactionStatusFromJSON: Ar,
  TransactionStatusFromJSONTyped: rg,
  TransactionStatusRequestAllOfFromJSON: BJ,
  TransactionStatusRequestAllOfFromJSONTyped: O0,
  TransactionStatusRequestAllOfToJSON: GJ,
  TransactionStatusRequestFromJSON: ZJ,
  TransactionStatusRequestFromJSONTyped: b0,
  TransactionStatusRequestToJSON: S0,
  TransactionStatusResponseAllOfFromJSON: QJ,
  TransactionStatusResponseAllOfFromJSONTyped: w0,
  TransactionStatusResponseAllOfToJSON: XJ,
  TransactionStatusResponseFromJSON: A0,
  TransactionStatusResponseFromJSONTyped: I0,
  TransactionStatusResponseKnownPayloadItemFromJSON: Xu,
  TransactionStatusResponseKnownPayloadItemFromJSONTyped: N0,
  TransactionStatusResponseKnownPayloadItemToJSON: $u,
  TransactionStatusResponseToJSON: HJ,
  TransactionStatusToJSON: nT,
  TransactionSubmitRequestFromJSON: eL,
  TransactionSubmitRequestFromJSONTyped: x0,
  TransactionSubmitRequestToJSON: T0,
  TransactionSubmitResponseFromJSON: k0,
  TransactionSubmitResponseFromJSONTyped: M0,
  TransactionSubmitResponseToJSON: nL,
  ValidationErrorsAtPathFromJSON: Kl,
  ValidationErrorsAtPathFromJSONTyped: vy,
  ValidationErrorsAtPathToJSON: Hl,
  ValidatorCollectionAllOfFromJSON: aL,
  ValidatorCollectionAllOfFromJSONTyped: E0,
  ValidatorCollectionAllOfToJSON: iL,
  ValidatorCollectionFromJSON: Wu,
  ValidatorCollectionFromJSONTyped: jb,
  ValidatorCollectionItemActiveInEpochFromJSON: Db,
  ValidatorCollectionItemActiveInEpochFromJSONTyped: Pb,
  ValidatorCollectionItemActiveInEpochToJSON: Rb,
  ValidatorCollectionItemFromJSON: Bu,
  ValidatorCollectionItemFromJSONTyped: Vb,
  ValidatorCollectionItemToJSON: Gu,
  ValidatorCollectionToJSON: Ku,
  ValidatorUptimeCollectionFromJSON: ec,
  ValidatorUptimeCollectionFromJSONTyped: R0,
  ValidatorUptimeCollectionItemFromJSON: C0,
  ValidatorUptimeCollectionItemFromJSONTyped: D0,
  ValidatorUptimeCollectionItemToJSON: P0,
  ValidatorUptimeCollectionToJSON: tc,
  ValidatorVaultItemFromJSON: zr,
  ValidatorVaultItemFromJSONTyped: Fb,
  ValidatorVaultItemToJSON: Ur,
  ValidatorsUptimeRequestAllOfFromJSON: dL,
  ValidatorsUptimeRequestAllOfFromJSONTyped: j0,
  ValidatorsUptimeRequestAllOfToJSON: pL,
  ValidatorsUptimeRequestFromJSON: uL,
  ValidatorsUptimeRequestFromJSONTyped: F0,
  ValidatorsUptimeRequestToJSON: V0,
  ValidatorsUptimeResponseAllOfFromJSON: yL,
  ValidatorsUptimeResponseAllOfFromJSONTyped: z0,
  ValidatorsUptimeResponseAllOfToJSON: hL,
  ValidatorsUptimeResponseFromJSON: J0,
  ValidatorsUptimeResponseFromJSONTyped: L0,
  ValidatorsUptimeResponseToJSON: mL,
  VoidApiResponse: xw,
  WalletAuthorizedRequestItems: Up,
  WalletAuthorizedRequestResponseItems: ef,
  WalletData: Xf,
  WalletDataPersonaData: Qf,
  WalletDataPersonaDataEmailAddresses: Hf,
  WalletDataPersonaDataFullName: Kf,
  WalletDataPersonaDataPhoneNumbersAddresses: Yf,
  WalletInteraction: Hp,
  WalletInteractionFailureResponse: rf,
  WalletInteractionItems: Kp,
  WalletInteractionResponse: Ns,
  WalletInteractionSuccessResponse: nf,
  WalletRequestItems: Zp,
  WalletRequestResponseItems: tf,
  WalletSdk: zf,
  WalletTransactionItems: Bp,
  WalletUnauthorizedRequestItems: Fp,
  canConsumeForm: ww,
  chunk: qr,
  config: uS,
  createLogger: FI,
  createSdkError: Wt,
  errorType: rr,
  eventType: Jr,
  exhaustPagination: rs,
  exhaustPaginationWithLedgerState: as,
  exists: c,
  instanceOfAtLedgerStateMixin: Ew,
  instanceOfCommittedTransactionInfo: aT,
  instanceOfComponentEntityRoleAssignmentEntry: dT,
  instanceOfComponentEntityRoleAssignmentEntryAssignment: sT,
  instanceOfComponentEntityRoleAssignments: pT,
  instanceOfCursorLimitMixin: fT,
  instanceOfEntityMetadataCollection: _M,
  instanceOfEntityMetadataCollectionAllOf: bM,
  instanceOfEntityMetadataItem: vM,
  instanceOfEntityMetadataItemValue: hM,
  instanceOfEntityMetadataItemValueAllOf: NM,
  instanceOfEntityNotFoundError: xM,
  instanceOfEntityNotFoundErrorAllOf: MM,
  instanceOfErrorResponse: XM,
  instanceOfEventsItem: tT,
  instanceOfFromLedgerStateMixin: tE,
  instanceOfFungibleResourcesCollection: pE,
  instanceOfFungibleResourcesCollectionAllOf: fE,
  instanceOfFungibleResourcesCollectionItemBase: hE,
  instanceOfFungibleResourcesCollectionItemGloballyAggregated: iE,
  instanceOfFungibleResourcesCollectionItemGloballyAggregatedAllOf: SE,
  instanceOfFungibleResourcesCollectionItemVaultAggregated: cE,
  instanceOfFungibleResourcesCollectionItemVaultAggregatedAllOf: IE,
  instanceOfFungibleResourcesCollectionItemVaultAggregatedVault: lE,
  instanceOfFungibleResourcesCollectionItemVaultAggregatedVaultAllOf: TE,
  instanceOfFungibleResourcesCollectionItemVaultAggregatedVaultItem: sE,
  instanceOfGatewayErrorBase: EE,
  instanceOfGatewayInfoResponseKnownTarget: PE,
  instanceOfGatewayInfoResponseReleaseInfo: VE,
  instanceOfGatewayStatusResponse: JE,
  instanceOfGatewayStatusResponseAllOf: zE,
  instanceOfInternalServerError: PM,
  instanceOfInternalServerErrorAllOf: BE,
  instanceOfInvalidEntityError: VM,
  instanceOfInvalidEntityErrorAllOf: HE,
  instanceOfInvalidRequestError: zM,
  instanceOfInvalidRequestErrorAllOf: $E,
  instanceOfInvalidTransactionError: qM,
  instanceOfInvalidTransactionErrorAllOf: rC,
  instanceOfLedgerState: jE,
  instanceOfLedgerStateMixin: oC,
  instanceOfLedgerStateSelector: Mw,
  instanceOfMetadataBoolArrayValue: hT,
  instanceOfMetadataBoolArrayValueAllOf: cC,
  instanceOfMetadataBoolValue: bT,
  instanceOfMetadataBoolValueAllOf: mC,
  instanceOfMetadataDecimalArrayValue: NT,
  instanceOfMetadataDecimalArrayValueAllOf: vC,
  instanceOfMetadataDecimalValue: wT,
  instanceOfMetadataDecimalValueAllOf: OC,
  instanceOfMetadataGlobalAddressArrayValue: kT,
  instanceOfMetadataGlobalAddressArrayValueAllOf: wC,
  instanceOfMetadataGlobalAddressValue: CT,
  instanceOfMetadataGlobalAddressValueAllOf: MC,
  instanceOfMetadataI32ArrayValue: RT,
  instanceOfMetadataI32ArrayValueAllOf: PC,
  instanceOfMetadataI32Value: jT,
  instanceOfMetadataI32ValueAllOf: jC,
  instanceOfMetadataI64ArrayValue: zT,
  instanceOfMetadataI64ArrayValueAllOf: UC,
  instanceOfMetadataI64Value: qT,
  instanceOfMetadataI64ValueAllOf: GC,
  instanceOfMetadataInstantArrayValue: WT,
  instanceOfMetadataInstantArrayValueAllOf: YC,
  instanceOfMetadataInstantValue: YT,
  instanceOfMetadataInstantValueAllOf: eD,
  instanceOfMetadataNonFungibleGlobalIdArrayValue: ek,
  instanceOfMetadataNonFungibleGlobalIdArrayValueAllOf: aD,
  instanceOfMetadataNonFungibleGlobalIdArrayValueAllOfValues: XT,
  instanceOfMetadataNonFungibleGlobalIdValue: rk,
  instanceOfMetadataNonFungibleGlobalIdValueAllOf: lD,
  instanceOfMetadataNonFungibleLocalIdArrayValue: ok,
  instanceOfMetadataNonFungibleLocalIdArrayValueAllOf: pD,
  instanceOfMetadataNonFungibleLocalIdValue: uk,
  instanceOfMetadataNonFungibleLocalIdValueAllOf: yD,
  instanceOfMetadataOriginArrayValue: pk,
  instanceOfMetadataOriginArrayValueAllOf: bD,
  instanceOfMetadataOriginValue: gk,
  instanceOfMetadataOriginValueAllOf: AD,
  instanceOfMetadataPublicKeyArrayValue: Ak,
  instanceOfMetadataPublicKeyArrayValueAllOf: TD,
  instanceOfMetadataPublicKeyHashArrayValue: Dk,
  instanceOfMetadataPublicKeyHashArrayValueAllOf: CD,
  instanceOfMetadataPublicKeyHashValue: Fk,
  instanceOfMetadataPublicKeyHashValueAllOf: FD,
  instanceOfMetadataPublicKeyValue: Jk,
  instanceOfMetadataPublicKeyValueAllOf: LD,
  instanceOfMetadataStringArrayValue: Uk,
  instanceOfMetadataStringArrayValueAllOf: qD,
  instanceOfMetadataStringValue: Bk,
  instanceOfMetadataStringValueAllOf: KD,
  instanceOfMetadataTypedValueBase: $D,
  instanceOfMetadataU32ArrayValue: Kk,
  instanceOfMetadataU32ArrayValueAllOf: rP,
  instanceOfMetadataU32Value: Qk,
  instanceOfMetadataU32ValueAllOf: sP,
  instanceOfMetadataU64ArrayValue: eM,
  instanceOfMetadataU64ArrayValueAllOf: dP,
  instanceOfMetadataU64Value: rM,
  instanceOfMetadataU64ValueAllOf: gP,
  instanceOfMetadataU8ArrayValue: oM,
  instanceOfMetadataU8ArrayValueAllOf: _P,
  instanceOfMetadataU8Value: uM,
  instanceOfMetadataU8ValueAllOf: NP,
  instanceOfMetadataUrlArrayValue: pM,
  instanceOfMetadataUrlArrayValueAllOf: xP,
  instanceOfMetadataUrlValue: gM,
  instanceOfMetadataUrlValueAllOf: EP,
  instanceOfNetworkConfigurationResponse: RP,
  instanceOfNetworkConfigurationResponseWellKnownAddresses: PP,
  instanceOfNonFungibleIdsCollection: JP,
  instanceOfNonFungibleIdsCollectionAllOf: LP,
  instanceOfNonFungibleResourcesCollection: QP,
  instanceOfNonFungibleResourcesCollectionAllOf: XP,
  instanceOfNonFungibleResourcesCollectionItemBase: t1,
  instanceOfNonFungibleResourcesCollectionItemGloballyAggregated: qP,
  instanceOfNonFungibleResourcesCollectionItemGloballyAggregatedAllOf: i1,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregated: HP,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregatedAllOf: u1,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregatedVault: WP,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregatedVaultAllOf: p1,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregatedVaultItem: GP,
  instanceOfNonFungibleResourcesCollectionItemVaultAggregatedVaultItemAllOf: g1,
  instanceOfNotSyncedUpError: WM,
  instanceOfNotSyncedUpErrorAllOf: _1,
  instanceOfOptionalNonFungibleIdsCollection: O1,
  instanceOfOptionalNonFungibleIdsCollectionAllOf: I1,
  instanceOfProgrammaticScryptoSborValueArray: Zw,
  instanceOfProgrammaticScryptoSborValueArrayAllOf: E1,
  instanceOfProgrammaticScryptoSborValueBase: P1,
  instanceOfProgrammaticScryptoSborValueBool: Gw,
  instanceOfProgrammaticScryptoSborValueBoolAllOf: j1,
  instanceOfProgrammaticScryptoSborValueBytes: Hw,
  instanceOfProgrammaticScryptoSborValueBytesAllOf: U1,
  instanceOfProgrammaticScryptoSborValueDecimal: Xw,
  instanceOfProgrammaticScryptoSborValueDecimalAllOf: G1,
  instanceOfProgrammaticScryptoSborValueEnum: tx,
  instanceOfProgrammaticScryptoSborValueEnumAllOf: Y1,
  instanceOfProgrammaticScryptoSborValueI128: ax,
  instanceOfProgrammaticScryptoSborValueI128AllOf: eR,
  instanceOfProgrammaticScryptoSborValueI16: sx,
  instanceOfProgrammaticScryptoSborValueI16AllOf: aR,
  instanceOfProgrammaticScryptoSborValueI32: cx,
  instanceOfProgrammaticScryptoSborValueI32AllOf: lR,
  instanceOfProgrammaticScryptoSborValueI64: fx,
  instanceOfProgrammaticScryptoSborValueI64AllOf: pR,
  instanceOfProgrammaticScryptoSborValueI8: yx,
  instanceOfProgrammaticScryptoSborValueI8AllOf: yR,
  instanceOfProgrammaticScryptoSborValueMap: bx,
  instanceOfProgrammaticScryptoSborValueMapAllOf: bR,
  instanceOfProgrammaticScryptoSborValueMapEntry: vx,
  instanceOfProgrammaticScryptoSborValueNonFungibleLocalId: Nx,
  instanceOfProgrammaticScryptoSborValueNonFungibleLocalIdAllOf: AR,
  instanceOfProgrammaticScryptoSborValueOwn: wx,
  instanceOfProgrammaticScryptoSborValueOwnAllOf: TR,
  instanceOfProgrammaticScryptoSborValuePreciseDecimal: kx,
  instanceOfProgrammaticScryptoSborValuePreciseDecimalAllOf: CR,
  instanceOfProgrammaticScryptoSborValueReference: Cx,
  instanceOfProgrammaticScryptoSborValueReferenceAllOf: FR,
  instanceOfProgrammaticScryptoSborValueString: Rx,
  instanceOfProgrammaticScryptoSborValueStringAllOf: LR,
  instanceOfProgrammaticScryptoSborValueTuple: jx,
  instanceOfProgrammaticScryptoSborValueTupleAllOf: qR,
  instanceOfProgrammaticScryptoSborValueU128: zx,
  instanceOfProgrammaticScryptoSborValueU128AllOf: KR,
  instanceOfProgrammaticScryptoSborValueU16: qx,
  instanceOfProgrammaticScryptoSborValueU16AllOf: XR,
  instanceOfProgrammaticScryptoSborValueU32: Wx,
  instanceOfProgrammaticScryptoSborValueU32AllOf: nF,
  instanceOfProgrammaticScryptoSborValueU64: Yx,
  instanceOfProgrammaticScryptoSborValueU64AllOf: oF,
  instanceOfProgrammaticScryptoSborValueU8: $x,
  instanceOfProgrammaticScryptoSborValueU8AllOf: cF,
  instanceOfPublicKeyBase: gF,
  instanceOfPublicKeyEcdsaSecp256k1: vk,
  instanceOfPublicKeyEcdsaSecp256k1AllOf: _F,
  instanceOfPublicKeyEddsaEd25519: Sk,
  instanceOfPublicKeyEddsaEd25519AllOf: NF,
  instanceOfPublicKeyHashBase: TF,
  instanceOfPublicKeyHashEcdsaSecp256k1: xk,
  instanceOfPublicKeyHashEcdsaSecp256k1AllOf: CF,
  instanceOfPublicKeyHashEddsaEd25519: Mk,
  instanceOfPublicKeyHashEddsaEd25519AllOf: FF,
  instanceOfResultSetCursorMixin: JF,
  instanceOfRoleKey: cT,
  instanceOfScryptoSborValue: UF,
  instanceOfStateEntityDetailsOptIns: ZF,
  instanceOfStateEntityDetailsRequest: qF,
  instanceOfStateEntityDetailsRequestAllOf: GF,
  instanceOfStateEntityDetailsResponse: _V,
  instanceOfStateEntityDetailsResponseAllOf: SV,
  instanceOfStateEntityDetailsResponseComponentDetails: QF,
  instanceOfStateEntityDetailsResponseComponentDetailsAllOf: IV,
  instanceOfStateEntityDetailsResponseFungibleResourceDetails: eV,
  instanceOfStateEntityDetailsResponseFungibleResourceDetailsAllOf: kV,
  instanceOfStateEntityDetailsResponseFungibleVaultDetails: rV,
  instanceOfStateEntityDetailsResponseFungibleVaultDetailsAllOf: DV,
  instanceOfStateEntityDetailsResponseItem: vV,
  instanceOfStateEntityDetailsResponseItemAncestorIdentities: HF,
  instanceOfStateEntityDetailsResponseItemDetailsBase: jV,
  instanceOfStateEntityDetailsResponseNonFungibleResourceDetails: oV,
  instanceOfStateEntityDetailsResponseNonFungibleResourceDetailsAllOf: UV,
  instanceOfStateEntityDetailsResponseNonFungibleVaultDetails: uV,
  instanceOfStateEntityDetailsResponseNonFungibleVaultDetailsAllOf: GV,
  instanceOfStateEntityDetailsResponsePackageDetails: yV,
  instanceOfStateEntityDetailsResponsePackageDetailsAllOf: YV,
  instanceOfStateEntityDetailsResponsePackageDetailsBlueprintCollection: pV,
  instanceOfStateEntityDetailsResponsePackageDetailsBlueprintCollectionAllOf: $V,
  instanceOfStateEntityDetailsResponsePackageDetailsBlueprintItem: dV,
  instanceOfStateEntityDetailsResponsePackageDetailsSchemaCollection: mV,
  instanceOfStateEntityDetailsResponsePackageDetailsSchemaCollectionAllOf: nj,
  instanceOfStateEntityDetailsResponsePackageDetailsSchemaItem: fV,
  instanceOfStateEntityFungibleResourceVaultsPageRequest: ij,
  instanceOfStateEntityFungibleResourceVaultsPageRequestAllOf: sj,
  instanceOfStateEntityFungibleResourceVaultsPageResponse: cj,
  instanceOfStateEntityFungiblesPageRequest: fj,
  instanceOfStateEntityFungiblesPageRequestAllOf: gj,
  instanceOfStateEntityFungiblesPageRequestOptIns: pj,
  instanceOfStateEntityFungiblesPageResponse: vj,
  instanceOfStateEntityMetadataPageRequest: bj,
  instanceOfStateEntityMetadataPageRequestAllOf: Oj,
  instanceOfStateEntityMetadataPageResponse: Ij,
  instanceOfStateEntityNonFungibleIdsPageRequest: xj,
  instanceOfStateEntityNonFungibleIdsPageRequestAllOf: kj,
  instanceOfStateEntityNonFungibleIdsPageResponse: Cj,
  instanceOfStateEntityNonFungibleResourceVaultsPageOptIns: Pj,
  instanceOfStateEntityNonFungibleResourceVaultsPageRequest: Rj,
  instanceOfStateEntityNonFungibleResourceVaultsPageRequestAllOf: Vj,
  instanceOfStateEntityNonFungibleResourceVaultsPageResponse: Lj,
  instanceOfStateEntityNonFungiblesPageRequest: Zj,
  instanceOfStateEntityNonFungiblesPageRequestAllOf: Bj,
  instanceOfStateEntityNonFungiblesPageRequestOptIns: Uj,
  instanceOfStateEntityNonFungiblesPageResponse: Kj,
  instanceOfStateKeyValueStoreDataRequest: Qj,
  instanceOfStateKeyValueStoreDataRequestAllOf: $j,
  instanceOfStateKeyValueStoreDataRequestKeyItem: Yj,
  instanceOfStateKeyValueStoreDataResponse: r2,
  instanceOfStateKeyValueStoreDataResponseAllOf: i2,
  instanceOfStateKeyValueStoreDataResponseItem: n2,
  instanceOfStateNonFungibleDataRequest: l2,
  instanceOfStateNonFungibleDataResponse: d2,
  instanceOfStateNonFungibleDataResponseAllOf: f2,
  instanceOfStateNonFungibleDetailsResponseItem: c2,
  instanceOfStateNonFungibleIdsRequest: y2,
  instanceOfStateNonFungibleIdsRequestAllOf: v2,
  instanceOfStateNonFungibleIdsResponse: S2,
  instanceOfStateNonFungibleIdsResponseAllOf: N2,
  instanceOfStateNonFungibleLocationRequest: w2,
  instanceOfStateNonFungibleLocationRequestAllOf: T2,
  instanceOfStateNonFungibleLocationResponse: C2,
  instanceOfStateNonFungibleLocationResponseAllOf: P2,
  instanceOfStateNonFungibleLocationResponseItem: E2,
  instanceOfStateValidatorsListRequest: V2,
  instanceOfStateValidatorsListRequestAllOf: J2,
  instanceOfStateValidatorsListResponse: G2,
  instanceOfStateValidatorsListResponseAllOf: K2,
  instanceOfStreamTransactionsRequest: nJ,
  instanceOfStreamTransactionsRequestAllOf: oJ,
  instanceOfStreamTransactionsRequestEventFilterItem: X2,
  instanceOfStreamTransactionsResponse: uJ,
  instanceOfStreamTransactionsResponseAllOf: dJ,
  instanceOfTransactionBalanceChanges: Jw,
  instanceOfTransactionCommittedDetailsRequest: mJ,
  instanceOfTransactionCommittedDetailsRequestAllOf: yJ,
  instanceOfTransactionCommittedDetailsResponse: _J,
  instanceOfTransactionCommittedDetailsResponseAllOf: SJ,
  instanceOfTransactionConstructionResponse: AJ,
  instanceOfTransactionDetailsOptIns: $2,
  instanceOfTransactionFungibleBalanceChanges: Pw,
  instanceOfTransactionFungibleFeeBalanceChanges: Vw,
  instanceOfTransactionNonFungibleBalanceChanges: jw,
  instanceOfTransactionNotFoundError: YM,
  instanceOfTransactionNotFoundErrorAllOf: kJ,
  instanceOfTransactionPreviewRequest: VJ,
  instanceOfTransactionPreviewRequestFlags: FJ,
  instanceOfTransactionPreviewResponse: LJ,
  instanceOfTransactionPreviewResponseLogsInner: JJ,
  instanceOfTransactionReceipt: rT,
  instanceOfTransactionStatusRequest: UJ,
  instanceOfTransactionStatusRequestAllOf: qJ,
  instanceOfTransactionStatusResponse: KJ,
  instanceOfTransactionStatusResponseAllOf: YJ,
  instanceOfTransactionStatusResponseKnownPayloadItem: WJ,
  instanceOfTransactionSubmitRequest: $J,
  instanceOfTransactionSubmitResponse: tL,
  instanceOfValidationErrorsAtPath: JM,
  instanceOfValidatorCollection: B2,
  instanceOfValidatorCollectionAllOf: rL,
  instanceOfValidatorCollectionItem: q2,
  instanceOfValidatorCollectionItemActiveInEpoch: U2,
  instanceOfValidatorUptimeCollection: sL,
  instanceOfValidatorUptimeCollectionItem: oL,
  instanceOfValidatorVaultItem: Z2,
  instanceOfValidatorsUptimeRequest: lL,
  instanceOfValidatorsUptimeRequestAllOf: cL,
  instanceOfValidatorsUptimeResponse: fL,
  instanceOfValidatorsUptimeResponseAllOf: gL,
  mapValues: Iw,
  messageLifeCycleEventType: Nn,
  personaDataFullNameVariant: Co,
  proofType: Tn,
  querystring: Ps,
  requestInterceptorFactory: oS,
  sdkError: sf,
  walletDataDefault: si,
  walletInteractionFactoryV2: _A
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ja = window, nc = ja.ShadowRoot && (ja.ShadyCSS === void 0 || ja.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, rc = Symbol(), kd = /* @__PURE__ */ new WeakMap();
let cS = class {
  constructor(t, n, r) {
    if (this._$cssResult$ = !0, r !== rc)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = n;
  }
  get styleSheet() {
    let t = this.o;
    const n = this.t;
    if (nc && t === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (t = kd.get(n)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && kd.set(n, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const te = (e) => new cS(typeof e == "string" ? e : e + "", void 0, rc), ke = (e, ...t) => {
  const n = e.length === 1 ? e[0] : t.reduce((r, a, i) => r + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + e[i + 1], e[0]);
  return new cS(n, e, rc);
}, YL = (e, t) => {
  nc ? e.adoptedStyleSheets = t.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet) : t.forEach((n) => {
    const r = document.createElement("style"), a = ja.litNonce;
    a !== void 0 && r.setAttribute("nonce", a), r.textContent = n.cssText, e.appendChild(r);
  });
}, Md = nc ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let n = "";
  for (const r of t.cssRules)
    n += r.cssText;
  return te(n);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var io;
const mi = window, Ed = mi.trustedTypes, QL = Ed ? Ed.emptyScript : "", Cd = mi.reactiveElementPolyfillSupport, ss = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? QL : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let n = e;
  switch (t) {
    case Boolean:
      n = e !== null;
      break;
    case Number:
      n = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(e);
      } catch {
        n = null;
      }
  }
  return n;
} }, dS = (e, t) => t !== e && (t == t || e == e), oo = { attribute: !0, type: String, converter: ss, reflect: !1, hasChanged: dS }, ls = "finalized";
let er = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(t) {
    var n;
    this.finalize(), ((n = this.h) !== null && n !== void 0 ? n : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((n, r) => {
      const a = this._$Ep(r, n);
      a !== void 0 && (this._$Ev.set(a, r), t.push(a));
    }), t;
  }
  static createProperty(t, n = oo) {
    if (n.state && (n.attribute = !1), this.finalize(), this.elementProperties.set(t, n), !n.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t, a = this.getPropertyDescriptor(t, r, n);
      a !== void 0 && Object.defineProperty(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, n, r) {
    return { get() {
      return this[n];
    }, set(a) {
      const i = this[t];
      this[n] = a, this.requestUpdate(t, i, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || oo;
  }
  static finalize() {
    if (this.hasOwnProperty(ls))
      return !1;
    this[ls] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const n = this.properties, r = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
      for (const a of r)
        this.createProperty(a, n[a]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const n = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const a of r)
        n.unshift(Md(a));
    } else
      t !== void 0 && n.push(Md(t));
    return n;
  }
  static _$Ep(t, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  _$Eu() {
    var t;
    this._$E_ = new Promise((n) => this.enableUpdating = n), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((n) => n(this));
  }
  addController(t) {
    var n, r;
    ((n = this._$ES) !== null && n !== void 0 ? n : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) === null || r === void 0 || r.call(t));
  }
  removeController(t) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, n) => {
      this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]), delete this[n]);
    });
  }
  createRenderRoot() {
    var t;
    const n = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return YL(n, this.constructor.elementStyles), n;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
      var r;
      return (r = n.hostConnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
      var r;
      return (r = n.hostDisconnected) === null || r === void 0 ? void 0 : r.call(n);
    });
  }
  attributeChangedCallback(t, n, r) {
    this._$AK(t, r);
  }
  _$EO(t, n, r = oo) {
    var a;
    const i = this.constructor._$Ep(t, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (((a = r.converter) === null || a === void 0 ? void 0 : a.toAttribute) !== void 0 ? r.converter : ss).toAttribute(n, r.type);
      this._$El = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$El = null;
    }
  }
  _$AK(t, n) {
    var r;
    const a = this.constructor, i = a._$Ev.get(t);
    if (i !== void 0 && this._$El !== i) {
      const o = a.getPropertyOptions(i), s = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((r = o.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? o.converter : ss;
      this._$El = i, this[i] = s.fromAttribute(n, o.type), this._$El = null;
    }
  }
  requestUpdate(t, n, r) {
    let a = !0;
    t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || dS)(this[t], n) ? (this._$AL.has(t) || this._$AL.set(t, n), r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, r))) : a = !1), !this.isUpdatePending && a && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (n) {
      Promise.reject(n);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((a, i) => this[i] = a), this._$Ei = void 0);
    let n = !1;
    const r = this._$AL;
    try {
      n = this.shouldUpdate(r), n ? (this.willUpdate(r), (t = this._$ES) === null || t === void 0 || t.forEach((a) => {
        var i;
        return (i = a.hostUpdate) === null || i === void 0 ? void 0 : i.call(a);
      }), this.update(r)) : this._$Ek();
    } catch (a) {
      throw n = !1, this._$Ek(), a;
    }
    n && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var n;
    (n = this._$ES) === null || n === void 0 || n.forEach((r) => {
      var a;
      return (a = r.hostUpdated) === null || a === void 0 ? void 0 : a.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((n, r) => this._$EO(r, this[r], n)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
er[ls] = !0, er.elementProperties = /* @__PURE__ */ new Map(), er.elementStyles = [], er.shadowRootOptions = { mode: "open" }, Cd == null || Cd({ ReactiveElement: er }), ((io = mi.reactiveElementVersions) !== null && io !== void 0 ? io : mi.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var so;
const gi = window, hr = gi.trustedTypes, Dd = hr ? hr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, us = "$lit$", Bt = `lit$${(Math.random() + "").slice(9)}$`, pS = "?" + Bt, XL = `<${pS}>`, jn = document, aa = () => jn.createComment(""), ia = (e) => e === null || typeof e != "object" && typeof e != "function", fS = Array.isArray, $L = (e) => fS(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", lo = `[ 	
\f\r]`, Vr = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Pd = /-->/g, Rd = />/g, gn = RegExp(`>|${lo}(?:([^\\s"'>=/]+)(${lo}*=${lo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Fd = /'/g, Vd = /"/g, mS = /^(?:script|style|textarea|title)$/i, ez = (e) => (t, ...n) => ({ _$litType$: e, strings: t, values: n }), Z = ez(1), rn = Symbol.for("lit-noChange"), Ne = Symbol.for("lit-nothing"), jd = /* @__PURE__ */ new WeakMap(), Mn = jn.createTreeWalker(jn, 129, null, !1);
function gS(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Dd !== void 0 ? Dd.createHTML(t) : t;
}
const tz = (e, t) => {
  const n = e.length - 1, r = [];
  let a, i = t === 2 ? "<svg>" : "", o = Vr;
  for (let s = 0; s < n; s++) {
    const l = e[s];
    let u, p, g = -1, m = 0;
    for (; m < l.length && (o.lastIndex = m, p = o.exec(l), p !== null); )
      m = o.lastIndex, o === Vr ? p[1] === "!--" ? o = Pd : p[1] !== void 0 ? o = Rd : p[2] !== void 0 ? (mS.test(p[2]) && (a = RegExp("</" + p[2], "g")), o = gn) : p[3] !== void 0 && (o = gn) : o === gn ? p[0] === ">" ? (o = a ?? Vr, g = -1) : p[1] === void 0 ? g = -2 : (g = o.lastIndex - p[2].length, u = p[1], o = p[3] === void 0 ? gn : p[3] === '"' ? Vd : Fd) : o === Vd || o === Fd ? o = gn : o === Pd || o === Rd ? o = Vr : (o = gn, a = void 0);
    const h = o === gn && e[s + 1].startsWith("/>") ? " " : "";
    i += o === Vr ? l + XL : g >= 0 ? (r.push(u), l.slice(0, g) + us + l.slice(g) + Bt + h) : l + Bt + (g === -2 ? (r.push(void 0), s) : h);
  }
  return [gS(e, i + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), r];
};
let cs = class yS {
  constructor({ strings: t, _$litType$: n }, r) {
    let a;
    this.parts = [];
    let i = 0, o = 0;
    const s = t.length - 1, l = this.parts, [u, p] = tz(t, n);
    if (this.el = yS.createElement(u, r), Mn.currentNode = this.el.content, n === 2) {
      const g = this.el.content, m = g.firstChild;
      m.remove(), g.append(...m.childNodes);
    }
    for (; (a = Mn.nextNode()) !== null && l.length < s; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) {
          const g = [];
          for (const m of a.getAttributeNames())
            if (m.endsWith(us) || m.startsWith(Bt)) {
              const h = p[o++];
              if (g.push(m), h !== void 0) {
                const I = a.getAttribute(h.toLowerCase() + us).split(Bt), v = /([.?@])?(.*)/.exec(h);
                l.push({ type: 1, index: i, name: v[2], strings: I, ctor: v[1] === "." ? rz : v[1] === "?" ? iz : v[1] === "@" ? oz : Ei });
              } else
                l.push({ type: 6, index: i });
            }
          for (const m of g)
            a.removeAttribute(m);
        }
        if (mS.test(a.tagName)) {
          const g = a.textContent.split(Bt), m = g.length - 1;
          if (m > 0) {
            a.textContent = hr ? hr.emptyScript : "";
            for (let h = 0; h < m; h++)
              a.append(g[h], aa()), Mn.nextNode(), l.push({ type: 2, index: ++i });
            a.append(g[m], aa());
          }
        }
      } else if (a.nodeType === 8)
        if (a.data === pS)
          l.push({ type: 2, index: i });
        else {
          let g = -1;
          for (; (g = a.data.indexOf(Bt, g + 1)) !== -1; )
            l.push({ type: 7, index: i }), g += Bt.length - 1;
        }
      i++;
    }
  }
  static createElement(t, n) {
    const r = jn.createElement("template");
    return r.innerHTML = t, r;
  }
};
function vr(e, t, n = e, r) {
  var a, i, o, s;
  if (t === rn)
    return t;
  let l = r !== void 0 ? (a = n._$Co) === null || a === void 0 ? void 0 : a[r] : n._$Cl;
  const u = ia(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== u && ((i = l == null ? void 0 : l._$AO) === null || i === void 0 || i.call(l, !1), u === void 0 ? l = void 0 : (l = new u(e), l._$AT(e, n, r)), r !== void 0 ? ((o = (s = n)._$Co) !== null && o !== void 0 ? o : s._$Co = [])[r] = l : n._$Cl = l), l !== void 0 && (t = vr(e, l._$AS(e, t.values), l, r)), t;
}
class nz {
  constructor(t, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var n;
    const { el: { content: r }, parts: a } = this._$AD, i = ((n = t == null ? void 0 : t.creationScope) !== null && n !== void 0 ? n : jn).importNode(r, !0);
    Mn.currentNode = i;
    let o = Mn.nextNode(), s = 0, l = 0, u = a[0];
    for (; u !== void 0; ) {
      if (s === u.index) {
        let p;
        u.type === 2 ? p = new ya(o, o.nextSibling, this, t) : u.type === 1 ? p = new u.ctor(o, u.name, u.strings, this, t) : u.type === 6 && (p = new sz(o, this, t)), this._$AV.push(p), u = a[++l];
      }
      s !== (u == null ? void 0 : u.index) && (o = Mn.nextNode(), s++);
    }
    return Mn.currentNode = jn, i;
  }
  v(t) {
    let n = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, n), n += r.strings.length - 2) : r._$AI(t[n])), n++;
  }
}
class ya {
  constructor(t, n, r, a) {
    var i;
    this.type = 2, this._$AH = Ne, this._$AN = void 0, this._$AA = t, this._$AB = n, this._$AM = r, this.options = a, this._$Cp = (i = a == null ? void 0 : a.isConnected) === null || i === void 0 || i;
  }
  get _$AU() {
    var t, n;
    return (n = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && n !== void 0 ? n : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = n.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, n = this) {
    t = vr(this, t, n), ia(t) ? t === Ne || t == null || t === "" ? (this._$AH !== Ne && this._$AR(), this._$AH = Ne) : t !== this._$AH && t !== rn && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : $L(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== Ne && ia(this._$AH) ? this._$AA.nextSibling.data = t : this.$(jn.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var n;
    const { values: r, _$litType$: a } = t, i = typeof a == "number" ? this._$AC(t) : (a.el === void 0 && (a.el = cs.createElement(gS(a.h, a.h[0]), this.options)), a);
    if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === i)
      this._$AH.v(r);
    else {
      const o = new nz(i, this), s = o.u(this.options);
      o.v(r), this.$(s), this._$AH = o;
    }
  }
  _$AC(t) {
    let n = jd.get(t.strings);
    return n === void 0 && jd.set(t.strings, n = new cs(t)), n;
  }
  T(t) {
    fS(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, a = 0;
    for (const i of t)
      a === n.length ? n.push(r = new ya(this.k(aa()), this.k(aa()), this, this.options)) : r = n[a], r._$AI(i), a++;
    a < n.length && (this._$AR(r && r._$AB.nextSibling, a), n.length = a);
  }
  _$AR(t = this._$AA.nextSibling, n) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, n); t && t !== this._$AB; ) {
      const a = t.nextSibling;
      t.remove(), t = a;
    }
  }
  setConnected(t) {
    var n;
    this._$AM === void 0 && (this._$Cp = t, (n = this._$AP) === null || n === void 0 || n.call(this, t));
  }
}
let Ei = class {
  constructor(t, n, r, a, i) {
    this.type = 1, this._$AH = Ne, this._$AN = void 0, this.element = t, this.name = n, this._$AM = a, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = Ne;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, n = this, r, a) {
    const i = this.strings;
    let o = !1;
    if (i === void 0)
      t = vr(this, t, n, 0), o = !ia(t) || t !== this._$AH && t !== rn, o && (this._$AH = t);
    else {
      const s = t;
      let l, u;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        u = vr(this, s[r + l], n, l), u === rn && (u = this._$AH[l]), o || (o = !ia(u) || u !== this._$AH[l]), u === Ne ? t = Ne : t !== Ne && (t += (u ?? "") + i[l + 1]), this._$AH[l] = u;
    }
    o && !a && this.j(t);
  }
  j(t) {
    t === Ne ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, rz = class extends Ei {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === Ne ? void 0 : t;
  }
};
const az = hr ? hr.emptyScript : "";
let iz = class extends Ei {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== Ne ? this.element.setAttribute(this.name, az) : this.element.removeAttribute(this.name);
  }
}, oz = class extends Ei {
  constructor(t, n, r, a, i) {
    super(t, n, r, a, i), this.type = 5;
  }
  _$AI(t, n = this) {
    var r;
    if ((t = (r = vr(this, t, n, 0)) !== null && r !== void 0 ? r : Ne) === rn)
      return;
    const a = this._$AH, i = t === Ne && a !== Ne || t.capture !== a.capture || t.once !== a.once || t.passive !== a.passive, o = t !== Ne && (a === Ne || i);
    i && this.element.removeEventListener(this.name, this, a), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var n, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, t) : this._$AH.handleEvent(t);
  }
}, sz = class {
  constructor(t, n, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    vr(this, t);
  }
};
const Jd = gi.litHtmlPolyfillSupport;
Jd == null || Jd(cs, ya), ((so = gi.litHtmlVersions) !== null && so !== void 0 ? so : gi.litHtmlVersions = []).push("2.8.0");
const lz = (e, t, n) => {
  var r, a;
  const i = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : t;
  let o = i._$litPart$;
  if (o === void 0) {
    const s = (a = n == null ? void 0 : n.renderBefore) !== null && a !== void 0 ? a : null;
    i._$litPart$ = o = new ya(t.insertBefore(aa(), s), s, void 0, n ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var uo, co;
class xe extends er {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, n;
    const r = super.createRenderRoot();
    return (t = (n = this.renderOptions).renderBefore) !== null && t !== void 0 || (n.renderBefore = r.firstChild), r;
  }
  update(t) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = lz(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return rn;
  }
}
xe.finalized = !0, xe._$litElement$ = !0, (uo = globalThis.litElementHydrateSupport) === null || uo === void 0 || uo.call(globalThis, { LitElement: xe });
const Ld = globalThis.litElementPolyfillSupport;
Ld == null || Ld({ LitElement: xe });
((co = globalThis.litElementVersions) !== null && co !== void 0 ? co : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qe = (e) => (t) => typeof t == "function" ? ((n, r) => (customElements.define(n, r), r))(e, t) : ((n, r) => {
  const { kind: a, elements: i } = r;
  return { kind: a, elements: i, finisher(o) {
    customElements.define(n, o);
  } };
})(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const uz = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(n) {
  n.createProperty(t.key, e);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(n) {
  n.createProperty(t.key, e);
} }, cz = (e, t, n) => {
  t.constructor.createProperty(n, e);
};
function O(e) {
  return (t, n) => n !== void 0 ? cz(e, t, n) : uz(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dz(e) {
  return O({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var po;
((po = window.HTMLSlotElement) === null || po === void 0 ? void 0 : po.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hS = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, vS = (e) => (...t) => ({ _$litDirective$: e, values: t });
let _S = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, n, r) {
    this._$Ct = t, this._$AM = n, this._$Ci = r;
  }
  _$AS(t, n) {
    return this.update(t, n);
  }
  update(t, n) {
    return this.render(...n);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = vS(class extends _S {
  constructor(e) {
    var t;
    if (super(e), e.type !== hS.ATTRIBUTE || e.name !== "class" || ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var n, r;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in t)
        t[i] && !(!((n = this.nt) === null || n === void 0) && n.has(i)) && this.it.add(i);
      return this.render(t);
    }
    const a = e.element.classList;
    this.it.forEach((i) => {
      i in t || (a.remove(i), this.it.delete(i));
    });
    for (const i in t) {
      const o = !!t[i];
      o === this.it.has(i) || !((r = this.nt) === null || r === void 0) && r.has(i) || (o ? (a.add(i), this.it.add(i)) : (a.remove(i), this.it.delete(i)));
    }
    return rn;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bS = "important", pz = " !" + bS, SS = vS(class extends _S {
  constructor(e) {
    var t;
    if (super(e), e.type !== hS.ATTRIBUTE || e.name !== "style" || ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, n) => {
      const r = e[n];
      return r == null ? t : t + `${n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(e, [t]) {
    const { style: n } = e.element;
    if (this.ht === void 0) {
      this.ht = /* @__PURE__ */ new Set();
      for (const r in t)
        this.ht.add(r);
      return this.render(t);
    }
    this.ht.forEach((r) => {
      t[r] == null && (this.ht.delete(r), r.includes("-") ? n.removeProperty(r) : n[r] = "");
    });
    for (const r in t) {
      const a = t[r];
      if (a != null) {
        this.ht.add(r);
        const i = typeof a == "string" && a.endsWith(pz);
        r.includes("-") || i ? n.setProperty(r, i ? a.slice(0, -11) : a, i ? bS : "") : n[r] = a;
      }
    }
    return rn;
  }
});
ke`
  :host {
    /* Core colors */
    --color-radix-green-1: #00ab84;
    --color-radix-green-2: #00c389;
    --color-radix-green-3: #21ffbe;
    --color-radix-blue-1: #060f8f;
    --color-radix-blue-2: #052cc0;
    --color-radix-blue-3: #20e4ff;
    --color-light: #ffffff;
    --color-dark: #000000;

    /* Accent colors */
    --color-accent-red: #ef4136;
    --color-accent-blue: #00aeef;
    --color-accent-yellow: #fff200;
    --color-alert: #e59700;
    --color-radix-error-red-1: #c82020;
    --color-radix-error-red-2: #fcebeb;

    /* Neutral colors */
    --color-grey-1: #003057;
    --color-grey-2: #8a8fa4;
    --color-grey-3: #ced0d6;
    --color-grey-4: #e2e5ed;
    --color-grey-5: #f4f5f9;
  }
`;
const tt = ke`
  :host {
    font-family: 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  :host([mode='light']) {
    --radix-popover-background: color-mix(in srgb, #f4f5f9 20%, transparent);
    --radix-popover-background-hover: var(--color-radix-blue-1);
    --radix-popover-border-color: var(--color-radix-blue-2);
    --radix-popover-text-color: var(--color-grey-1);

    --radix-popover-tabs-background: color-mix(
      in srgb,
      var(--color-grey-2) 15%,
      transparent
    );
    --radix-popover-tabs-button-active-background: var(--color-light);

    --radix-link-color: var(--color-radix-blue-2);

    --radix-card-background: var(--color-light);
    --radix-card-text-color: var(--color-grey-1);
    --radix-card-text-dimmed-color: var(--color-grey-2);
    --radix-card-inverted-background: var(--color-grey-1);
    --radix-card-inverted-text-color: var(--color-light);

    --radix-avatar-border-color: var(--color-grey-5);

    --radix-button-background: var(--color-light);
    --radix-button-text-color: var(--color-radix-blue-2);
    --radix-connect-now-disabled-button-background: color-mix(
      in srgb,
      var(--color-light) 40%,
      transparent
    );
    --radix-connect-now-disabled-button-text: var(--color-light);

    color: var(--color-grey-1);
  }

  :host([mode='dark']) {
    --radix-popover-background: color-mix(in srgb, #f4f5f9 20%, transparent);
    --radix-popover-background-hover: var(--color-radix-blue-1);
    --radix-popover-border-color: var(--color-radix-blue-2);
    --radix-popover-text-color: var(--color-light);

    --radix-popover-tabs-background: color-mix(
      in srgb,
      var(--color-dark) 60%,
      transparent
    );
    --radix-popover-tabs-button-active-text-color: var(--color-light);
    --radix-popover-tabs-button-active-background: #515151;

    --radix-link-color: var(--color-white);

    --radix-card-background: #515151;
    --radix-card-text-color: var(--color-light);
    --radix-card-text-dimmed-color: var(--color-grey-3);
    --radix-card-inverted-background: var(--color-grey-5);
    --radix-card-inverted-text-color: var(--color-grey-1);

    --radix-avatar-border-color: #656565;

    --radix-button-background: color-mix(
      in srgb,
      var(--color-dark) 40%,
      transparent
    );
    --radix-button-text-color: var(--color-light);
    --radix-connect-now-disabled-button-background: color-mix(
      in srgb,
      var(--color-dark) 40%,
      transparent
    );
    --radix-connect-now-disabled-button-text: color-mix(
      in srgb,
      var(--color-light) 20%,
      transparent
    );

    color: var(--color-light);
  }

  button {
    font-weight: 500;
    transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);
    border-radius: 12px;
    border: none;
    background: var(--radix-button-background);
    color: var(--radix-button-text-color);
    font-size: 14px;
    font-weight: 600;
  }

  :host([theme='radix-blue']) {
    --radix-connect-button-background: var(--color-radix-blue-2);
    --radix-connect-button-background-hover: var(--color-radix-blue-1);
    --radix-connect-button-border-color: var(--color-radix-blue-2);
    --radix-connect-button-text-color: var(--color-light);
  }

  :host([theme='black']) {
    --radix-connect-button-background: var(--color-dark);
    --radix-connect-button-background-hover: #3e3e3e;
    --radix-connect-button-border-color: var(--color-dark);
    --radix-connect-button-text-color: var(--color-light);
  }

  :host([theme='white-with-outline']) {
    --radix-connect-button-background: var(--color-light);
    --radix-connect-button-background-hover: var(--color-grey-5);
    --radix-connect-button-border-color: var(--color-dark);
    --radix-connect-button-text-color: var(--color-dark);
  }

  :host([theme='white']) {
    --radix-connect-button-background: var(--color-light);
    --radix-connect-button-background-hover: var(--color-grey-5);
    --radix-connect-button-border-color: var(--color-light);
    --radix-connect-button-text-color: var(--color-dark);
  }
`, En = {
  pending: "pending",
  success: "success",
  error: "error",
  default: "default"
}, nt = {
  light: "light",
  dark: "dark"
};
var fz = Object.defineProperty, mz = Object.getOwnPropertyDescriptor, ac = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? mz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && fz(t, n, a), a;
};
let oa = class extends xe {
  constructor() {
    super(...arguments), this.theme = nt.light, this.active = "sharing";
  }
  onClick(e, t) {
    this.dispatchEvent(
      new CustomEvent("onClick", {
        detail: { value: e, event: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return Z`
      <div class="tabs">
        <button
          @click=${(e) => this.onClick("sharing", e)}
          class=${Rt({
      active: this.active === "sharing"
    })}
        >
          Sharing
        </button>
        <button
          @click=${(e) => this.onClick("requests", e)}
          class=${Rt({
      active: this.active === "requests"
    })}
        >
          Requests
        </button>
        <div class="active-indicator"></div>
      </div>
    `;
  }
};
oa.styles = [
  tt,
  ke`
      :host {
        display: block;
        width: 100%;
        user-select: none;
      }

      .tabs {
        width: calc(100% - 10px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        padding: 5px;
        border-radius: 12px;
        position: relative;
        background: var(--radix-popover-tabs-background);
      }

      button {
        border: unset;
        font-size: 14px;
        background: transparent;
        text-align: center;
        flex: 1;
        border-radius: 8px;
        font-weight: 600;
        color: var(--radix-popover-text-color);
        width: 100%;
        height: 32px;
        z-index: 1;
        margin: 0;
        padding: 0;
      }

      button:not(.active) {
        cursor: pointer;
      }

      .active-indicator {
        width: calc(50% - 5px);
        height: 32px;
        border-radius: 8px;
        position: absolute;
        box-shadow: 0px 4px 5px 0px #0000001a;
        background: var(--radix-popover-tabs-button-active-background);
        top: 5px;
        transition: transform 0.125s cubic-bezier(0.45, 0, 0.55, 1);
      }

      :host([active='sharing']) .active-indicator {
        transform: translateX(5px);
      }

      :host([active='requests']) .active-indicator {
        transform: translateX(calc(100% + 5px));
      }

      button:focus,
      button:focus-visible {
        outline: 0px auto -webkit-focus-ring-color;
      }
    `
];
ac([
  O({
    type: String,
    reflect: !0
  })
], oa.prototype, "theme", 2);
ac([
  O({
    type: String,
    reflect: !0
  })
], oa.prototype, "active", 2);
oa = ac([
  qe("radix-tabs-menu")
], oa);
const gz = (e) => {
  if (typeof btoa == "function")
    return btoa(e);
  if (typeof Buffer == "function")
    return Buffer.from(e, "utf-8").toString("base64");
  throw new Error("Failed to determine the platform specific encoder");
}, zd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNzU4XzE0NjkpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMTkgNi40MUwxNy41OSA1TDEyIDEwLjU5TDYuNDEgNUw1IDYuNDFMMTAuNTkgMTJMNSAxNy41OUw2LjQxIDE5TDEyIDEzLjQxTDE3LjU5IDE5TDE5IDE3LjU5TDEzLjQxIDEyTDE5IDYuNDFaIgogICAgICAgICAgICBmaWxsPSIjMzIzMjMyIiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xNzU4XzE0NjkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiAvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgogICAg";
var yz = Object.defineProperty, hz = Object.getOwnPropertyDescriptor, kr = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? hz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && yz(t, n, a), a;
};
let an = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.connected = !1, this.compact = !1, this.isMobile = !1, this.height = 0;
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      const e = this.shadowRoot.getElementById(
        "radix-popover-content"
      );
      this.resizeObserver = new ResizeObserver(() => {
        e && e.scrollHeight && (this.height = e.scrollHeight);
      }), this.resizeObserver.observe(this);
    });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.resizeObserver) == null || e.unobserve(this);
  }
  closePopover() {
    this.dispatchEvent(
      new CustomEvent("onClosePopover", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  drawPopover() {
    const e = this.mode === "light" ? "#E7E7E7" : "#808080", t = this.height, n = 13, r = 8, a = 344, i = t, o = 12, s = o / 2, l = `
      <linearGradient id="gradient" x1="461.192" y1="52.4476" x2="81.1033" y2="460.678" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CE0D98" />
          <stop offset="0.210873" stop-color="#052CC0" />
          <stop offset="0.479167" stop-color="#20E4FF" />
          <stop offset="0.729604" stop-color="#052CC0" />
          <stop offset="1" stop-color="#21FFBE" />
      </linearGradient>`, u = (m, h, I) => `
      L ${m - I} ${h} 
      L ${m} 1
      L ${m + I} ${h}`, p = this.compact ? a - 30 : 300, g = `
    <svg viewBox="0 0 345 ${t + 1}"  fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"  >
        <path
            d="${[
      `M ${n} ${r}`,
      u(p, r, 7),
      `L ${a - o} ${r}`,
      `C ${a - s} ${r} ${a} ${r + s} ${a} ${r + o}`,
      `L ${a} ${i - o}`,
      `C ${a} ${i - s} ${a - s} ${i} ${a - o} ${i}`,
      `L ${n} ${i}`,
      `C ${n - s} ${i} ${n - o} ${i - s} ${n - o} ${i - o}`,
      `L ${n - o} ${r + o}`,
      `C ${n - o} ${r + s} ${n - s} ${r} ${n} ${r}`,
      "Z"
    ].join(" ")}"
            
            stroke-width="1"
            stroke-opacity="${this.connected ? 1 : 0}"
            fill="${e}"
            fill-opacity="0.98"
            stroke="url(#gradient)"
        />
        <defs>
          ${l}
        </defs>
     </svg>
    `;
    return `data:image/svg+xml;base64,${gz(g)}`;
  }
  render() {
    return this.isMobile ? Z`<div id="radix-mobile-popover-content">
          <button
            id="close-button"
            @click=${() => {
      this.closePopover();
    }}
          ></button>
          <div id="content"><slot></slot></div>
          <button
            id="close-button-blue"
            @click=${() => {
      this.closePopover();
    }}
          >
            Close
          </button>
        </div>` : Z`<style>
            :host {
              background-image: url(${this.drawPopover()});
            }
          </style>
          <div id="radix-popover-content">
            <slot />
          </div>`;
  }
};
an.styles = [
  tt,
  ke`
      :host {
        user-select: none;
        display: inline-flex;
        background-position: center top;
        background-repeat: no-repeat;
        justify-content: center;
        align-items: flex-start;
        padding: 18px 12px 10px;
      }

      #radix-popover-content {
        width: 344px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        min-height: 130px;
      }
      #content {
        width: 288px;
      }
      #radix-mobile-popover-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        min-height: 130px;
        background-color: var(--radix-card-background);
        padding: 1rem;
        border-radius: 12px;
        max-width: 344px;
      }

      #close-button {
        -webkit-mask-image: url(${te(zd)});
        mask-image: url(${te(zd)});
        background-color: var(--radix-card-text-color);
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        align-self: flex-start;
        cursor: pointer;
      }
      #close-button:hover {
        opacity: 0.8;
      }

      #close-button-blue {
        background-color: var(--color-radix-blue-2);
        color: var(--color-light);
        padding: 0.7rem 1rem;
        font-size: 14px;
        width: 100%;
        cursor: pointer;
        max-width: 236px;
      }
    `
];
kr([
  O({
    type: String,
    reflect: !0
  })
], an.prototype, "mode", 2);
kr([
  O({
    type: Boolean
  })
], an.prototype, "connected", 2);
kr([
  O({
    type: Boolean
  })
], an.prototype, "compact", 2);
kr([
  O({
    type: Boolean
  })
], an.prototype, "isMobile", 2);
kr([
  dz()
], an.prototype, "height", 2);
an = kr([
  qe("radix-popover")
], an);
const vz = 32, _z = 32, Ja = 138, Ud = Z`<div class="loading-spinner-container">
  <div class="loading-spinner"></div>
</div>`, bz = ke`
  .loading-spinner-container {
    display: flex;
  }

  @container (max-width: ${Ja - 16}px) {
    .loading-spinner-container {
      margin-left: 0;
      margin-right: 0;
    }
  }

  button.gradient > .loading-spinner {
    border-right-color: var(--color-light);
    border-left-color: color-mix(in srgb, var(--color-light) 30%, transparent);
    border-top-color: color-mix(in srgb, var(--color-light) 30%, transparent);
    border-bottom-color: color-mix(
      in srgb,
      var(--color-light) 30%,
      transparent
    );
  }

  .loading-spinner {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    border: 2px solid var(--radix-connect-button-text-color);
    border-left-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-top-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-bottom-color: color-mix(
      in srgb,
      var(--radix-connect-button-text-color) 30%,
      transparent
    );
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    align-self: center;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, Zd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzYzNzEgMTEuNzE4M0M1LjUxNDM0IDExLjcxODMgNS4yNzcyNiAxMS41OTg2IDUuMTI4NjIgMTEuMzkyNUwyLjAyNDQyIDcuMDcwOTdIMFY1LjQ5NzU4SDIuNDI0ODhDMi42NzY3MSA1LjQ5NzU4IDIuOTEyNTYgNS42MTg1MiAzLjA1OTk3IDUuODIzMzdMNS41OTY2NCA5LjM1MzkxTDkuNDY3MzcgMC40NzEzOThDOS41OTI2NiAwLjE4NTEwNCA5Ljg3Mzk3IDAgMTAuMTg0OCAwSDE1LjAyMzVWMS41NzMzOEgxMC42OTdMNi40ODExIDExLjI0NjlDNi4zNjgwOSAxMS41MDYxIDYuMTI2MDkgMTEuNjgzOCA1Ljg0NjAxIDExLjcxMzRDNS44MjAyMSAxMS43MTcxIDUuNzkxOTYgMTEuNzE4MyA1Ljc2MzcxIDExLjcxODNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K", Sz = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTM4IDQyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGcgZmlsdGVyPSJ1cmwoI3RvcC1sZWZ0LXRlYWwpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTAuNDA2MzI5IC0zNC40OTU3QzE2LjYxMSAtNDEuODMzMSAzNC42MTc0IC0zNy4wMjU4IDQwLjYyNSAtMjMuNzU4M0M0Ni42MzI1IC0xMC40OTA4IDM4LjM2NjEgNi4yMTI4NiAyMi4xNjE1IDEzLjU1MDNDNS45NTY4NiAyMC44ODc3IC00Mi41MTI3IC0xLjE3MzYgLTQ4LjUyMDIgLTE0LjQ0MTFDLTU0LjUyNzcgLTI3LjcwODcgLTE1Ljc5ODMgLTI3LjE1ODMgMC40MDYzMjkgLTM0LjQ5NTdaIgogICAgICAgICAgICBmaWxsPSIjMjFGRkJFIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJ0b3AtbGVmdC10ZWFsIiB4PSItNzkuMzQzIiB5PSItNjguMTI1NCIgd2lkdGg9IjE1MiIgaGVpZ2h0PSIxMTMiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTUuMDk3OSIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KCgogICAgPGcgZmlsdGVyPSJ1cmwoI2JvdHRvbS1yaWdodC1henVyZSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNNzcuOTQ4MiAyOC40NjdDODYuNzM2MiAyMi4wODY5IDk4LjA5NSAyMi43NDc4IDEwMy4zMTkgMjkuOTQzQzEwOC41NDIgMzcuMTM4MiAxMDUuNjUzIDQ4LjE0MzIgOTYuODY0OSA1NC41MjMzQzg4LjA3NjggNjAuOTAzNCA1Ni4zNzk5IDUzLjY3MDMgNTEuMTU2MiA0Ni40NzUxQzQ1LjkzMjUgMzkuMjc5OCA2OS4xNjAxIDM0Ljg0NzEgNzcuOTQ4MiAyOC40NjdaIgogICAgICAgICAgICBmaWxsPSIjMjBFNEZGIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtYXp1cmUiIHg9IjI2LjM5OTciIHk9IjAuMDgyNzcxMyIgd2lkdGg9IjEwMyIgaGVpZ2h0PSI4MSIKICAgICAgICAgICAgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KCgogICAgPGcgZmlsdGVyPSJ1cmwoI2JvdHRvbS1sZWZ0LWJsdWUpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgZD0iTTE2LjE0MjEgMjkuNTA5QzI2LjkyNjYgMzQuMDQyNyAzMi41MTE2IDQ1LjIyOTIgMjguNjE2NCA1NC40OTQ5QzI0LjcyMTMgNjMuNzYwNiAxMi44MjExIDY3LjU5NjYgMi4wMzY1OCA2My4wNjNDLTguNzQ3OTIgNTguNTI5MyAtMTkuMjc4MSAyNC4wOTA0IC0xNS4zODMgMTQuODI0N0MtMTEuNDg3OCA1LjU1OTAzIDUuMzU3NjUgMjQuOTc1NCAxNi4xNDIxIDI5LjUwOVoiCiAgICAgICAgICAgIGZpbGw9IiMwNjBGOEYiIC8+CgogICAgICAgIDxmaWx0ZXIgaWQ9ImJvdHRvbS1sZWZ0LWJsdWUiIHg9Ii0zNi4yMTA3IiB5PSItNy42NDk0MSIgd2lkdGg9Ijg2IiBoZWlnaHQ9IjkzIgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgoKICAgIDxnIGZpbHRlcj0idXJsKCNib3R0b20tcmlnaHQtcHVycGxlKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMjAuMTM1IDE2LjI2MTNDMTAzLjU3IDE3LjMyMDkgODkuNDM4MiA3LjE4NTI1IDg4LjU3MDcgLTYuMzc3MThDODcuNzAzMiAtMTkuOTM5NiAxMDAuNDI4IC0zMS43OTMgMTE2Ljk5MyAtMzIuODUyNkMxMzMuNTU4IC0zMy45MTIxIDE2OC41ODkgMS4zMzIzMiAxNjkuNDU2IDE0Ljg5NDdDMTcwLjMyNCAyOC40NTcyIDEzNi42OTkgMTUuMjAxOCAxMjAuMTM1IDE2LjI2MTNaIgogICAgICAgICAgICBmaWxsPSIjRkY0M0NBIiAvPgoKICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtcHVycGxlIiB4PSI0OC41Mjg5IiB5PSItNzIuODc1OSIgd2lkdGg9IjE2MSIgaGVpZ2h0PSIxMzQiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjAiIC8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2c+Cjwvc3ZnPgogICAg", Oz = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDIgNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBmaWx0ZXI9InVybCgjdG9wLWxlZnQtdGVhbCkiCiAgICAgICAgICAgIGQ9Ik0tNS4wMjMyMyAtMTUuMTI2NUMzLjYwMTggLTE5LjU0MTMgMTQuMTAyOCAtMTQuMzU5NyAxOC40MzE1IC0zLjU1Mjk5QzIyLjc2MDEgNy4yNTM2OCAxOS4yNzcyIDE5LjU5MzEgMTAuNjUyMiAyNC4wMDc5QzIuMDI3MTMgMjguNDIyNyAtMjYuODg0NiA3LjM3NTg3IC0zMS4yMTMzIC0zLjQzMDhDLTM1LjU0MTkgLTE0LjIzNzUgLTEzLjY0ODMgLTEwLjcxMTcgLTUuMDIzMjMgLTE1LjEyNjVaIgogICAgICAgICAgICBmaWxsPSIjMjFGRkJFIiAvPgogICAgICAgIDxmaWx0ZXIgaWQ9InRvcC1sZWZ0LXRlYWwiIHg9Ii01MS43NzM3IiB5PSItMzYuNzAxOSIgd2lkdGg9IjkyLjA2NTQiIGhlaWdodD0iODEuMzA5NiIKICAgICAgICAgICAgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIgLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGZpbHRlcj0idXJsKCNib3R0b20tcmlnaHQtYXp1cmUpIgogICAgICAgICAgICBkPSJNMjYuNjA3OSAyOS40NjdDMzQuMzgyIDIzLjA4NjkgNDQuNDMwMiAyMy43NDc3IDQ5LjA1MTIgMzAuOTQzQzUzLjY3MjEgMzguMTM4MiA1MS4xMTYgNDkuMTQzMiA0My4zNDIgNTUuNTIzM0MzNS41Njc5IDYxLjkwMzQgNy41MjgzNiA1NC42NzAzIDIuOTA3NCA0Ny40NzUxQy0xLjcxMzU3IDQwLjI3OTggMTguODMzOSAzNS44NDcxIDI2LjYwNzkgMjkuNDY3WiIKICAgICAgICAgICAgZmlsbD0iIzIwRTRGRiIgLz4KICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tcmlnaHQtYXp1cmUiIHg9Ii0xNy43NjE4IiB5PSI1LjA4Mjc2IiB3aWR0aD0iODkuMTE0NSIgaGVpZ2h0PSI3Mi45IgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgogICAgPGc+CiAgICAgICAgPHBhdGggZmlsdGVyPSJ1cmwoI2JvdHRvbS1sZWZ0LWJsdWUpIgogICAgICAgICAgICBkPSJNMTQuMjc5NiAyOS41MDlDMjMuODE5NyAzNC4wNDI3IDI4Ljc2MDIgNDUuMjI5MiAyNS4zMTQ1IDU0LjQ5NDlDMjEuODY4OCA2My43NjA1IDExLjM0MTcgNjcuNTk2NiAxLjgwMTU4IDYzLjA2M0MtNy43Mzg1NSA1OC41MjkzIC0xNy4wNTM3IDI0LjA5MDQgLTEzLjYwOCAxNC44MjQ3Qy0xMC4xNjIzIDUuNTU5MDQgNC43Mzk0NSAyNC45NzU0IDE0LjI3OTYgMjkuNTA5WiIKICAgICAgICAgICAgZmlsbD0iIzA2MEY4RiIgLz4KICAgICAgICA8ZmlsdGVyIGlkPSJib3R0b20tbGVmdC1ibHVlIiB4PSItMzQuMzQwMiIgeT0iLTcuNjQ5NDEiIHdpZHRoPSI4MC43NTE5IiBoZWlnaHQ9IjkyLjYxNzIiCiAgICAgICAgICAgIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAiIC8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgICA8cGF0aCBmaWx0ZXI9InVybCgjdG9wLXJpZ2h0LXB1cnBsZSkiCiAgICAgICAgICAgIGQ9Ik01NC4yNDk4IDI3LjQwMDFDMzkuNTA5MSAyOC40NjU5IDI2Ljk4NjUgMTkuMjA0IDI2LjI3OTggNi43MTI5NkMyNS41NzMgLTUuNzc4MDQgMzYuOTQ5NyAtMTYuNzY4IDUxLjY5MDMgLTE3LjgzMzhDNjYuNDMxIC0xOC44OTk3IDk3LjQyNDYgMTMuMzgzMSA5OC4xMzE0IDI1Ljg3NDFDOTguODM4MSAzOC4zNjUxIDY4Ljk5MDQgMjYuMzM0MiA1NC4yNDk4IDI3LjQwMDFaIgogICAgICAgICAgICBmaWxsPSIjRkY0M0NBIiAvPgogICAgICAgIDxmaWx0ZXIgaWQ9InRvcC1yaWdodC1wdXJwbGUiIHg9IjYuMjQ4NTIiIHk9Ii0zNy44NTk2IiB3aWR0aD0iMTExLjg5NSIgaGVpZ2h0PSI4OS40NTA2IgogICAgICAgICAgICBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwIiAvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9nPgo8L3N2Zz4KICAgIA==", qd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC40IiB5PSIwLjQiIHdpZHRoPSIyMS4yIiBoZWlnaHQ9IjIxLjIiIHJ4PSIxMC42IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuOCIvPgo8bWFzayBpZD0ibWFzazBfMTg5N18xODg5IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPgo8cmVjdCB4PSIwLjI0OTc1NiIgeT0iMC41IiB3aWR0aD0iMjEuNTExIiBoZWlnaHQ9IjIxLjUxMSIgcng9IjEwLjc1NTUiIGZpbGw9IiNGNEY1RjkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4OTdfMTg4OSkiPgo8Y2lyY2xlIG9wYWNpdHk9IjAuMiIgY3g9IjguODc0MDIiIGN5PSI5LjEyNSIgcj0iMy45NzUiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIxMy4xMjQzIiBjeT0iOS4xMjUiIHI9IjMuOTc1IiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTIxLjM0OTMgMjEuNUMyMS4zNDkzIDI1LjMwMzQgMTguNDMwNiAyOC4zNSAxNC44NzQzIDI4LjM1QzExLjMxOCAyOC4zNSA4LjM5OTI3IDI1LjMwMzQgOC4zOTkyNyAyMS41QzguMzk5MjcgMTcuNjk2NiAxMS4zMTggMTQuNjUgMTQuODc0MyAxNC42NUMxOC40MzA2IDE0LjY1IDIxLjM0OTMgMTcuNjk2NiAyMS4zNDkzIDIxLjVaIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTEzLjM0OTUgMjEuNUMxMy4zNDk1IDI1LjMwMzQgMTAuNDMwOCAyOC4zNSA2Ljg3NDUxIDI4LjM1QzMuMzE4MjIgMjguMzUgMC4zOTk1MTIgMjUuMzAzNCAwLjM5OTUxMiAyMS41QzAuMzk5NTEyIDE3LjY5NjYgMy4zMTgyMiAxNC42NSA2Ljg3NDUxIDE0LjY1QzEwLjQzMDggMTQuNjUgMTMuMzQ5NSAxNy42OTY2IDEzLjM0OTUgMjEuNVoiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KPGNpcmNsZSBjeD0iMTEiIGN5PSI5IiByPSI0LjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC44Ii8+CjxwYXRoIGQ9Ik0xNy4zNDkzIDIxLjVDMTcuMzQ5MyAyNS4zMDM0IDE0LjQzMDYgMjguMzUgMTAuODc0MyAyOC4zNUM3LjMxNzk4IDI4LjM1IDQuMzk5MjcgMjUuMzAzNCA0LjM5OTI3IDIxLjVDNC4zOTkyNyAxNy42OTY2IDcuMzE3OTggMTQuNjUgMTAuODc0MyAxNC42NUMxNC40MzA2IDE0LjY1IDE3LjM0OTMgMTcuNjk2NiAxNy4zNDkzIDIxLjVaIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuOCIvPgo8L2c+Cjwvc3ZnPgo=", Bd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEwLjUgMC41QzQuOTggMC41IDAuNSA0Ljk4IDAuNSAxMC41QzAuNSAxNi4wMiA0Ljk4IDIwLjUgMTAuNSAyMC41QzE2LjAyIDIwLjUgMjAuNSAxNi4wMiAyMC41IDEwLjVDMjAuNSA0Ljk4IDE2LjAyIDAuNSAxMC41IDAuNVpNMTAuNSAxOC41QzYuMDkgMTguNSAyLjUgMTQuOTEgMi41IDEwLjVDMi41IDYuMDkgNi4wOSAyLjUgMTAuNSAyLjVDMTQuOTEgMi41IDE4LjUgNi4wOSAxOC41IDEwLjVDMTguNSAxNC45MSAxNC45MSAxOC41IDEwLjUgMTguNVpNMTUuMDkgNi4wOEw4LjUgMTIuNjdMNS45MSAxMC4wOUw0LjUgMTEuNUw4LjUgMTUuNUwxNi41IDcuNUwxNS4wOSA2LjA4WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+CiAgICA=", Gd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTE1Ljk2ODkgOC41MjA4N0wxNC40NzkzIDcuMDMxMjNMMTEuNSAxMC4wMTA1TDguNTIwNzIgNy4wMzEyM0w3LjAzMTA4IDguNTIwODdMMTAuMDEwNCAxMS41MDAxTDcuMDMxMDggMTQuNDc5NEw4LjUyMDcyIDE1Ljk2OTFMMTEuNSAxMi45ODk4TDE0LjQ3OTMgMTUuOTY5MUwxNS45Njg5IDE0LjQ3OTRMMTIuOTg5NiAxMS41MDAxTDE1Ljk2ODkgOC41MjA4N1pNMTguOTQ4MiA0LjA1MTk1QzE0Ljg0NDIgLTAuMDUyMDAyNCA4LjE1NTc2IC0wLjA1MjAwMjcgNC4wNTE4MSA0LjA1MTk1Qy0wLjA1MjE0NTMgOC4xNTU5IC0wLjA1MjE0NTYgMTQuODQ0NCA0LjA1MTgxIDE4Ljk0ODNDOC4xNTU3NiAyMy4wNTIzIDE0Ljg0NDIgMjMuMDUyMyAxOC45NDgyIDE4Ljk0ODNDMjMuMDUyMSAxNC44NDQ0IDIzLjA1MjEgOC4xNTU5MSAxOC45NDgyIDQuMDUxOTVaTTUuNTQxNDUgMTcuNDU4N0MyLjI1Njc5IDE0LjE3NCAyLjI1Njc5IDguODI2MjQgNS41NDE0NSA1LjU0MTU5QzguODI2MSAyLjI1Njk0IDE0LjE3MzkgMi4yNTY5NCAxNy40NTg2IDUuNTQxNTlDMjAuNzQzMiA4LjgyNjI0IDIwLjc0MzIgMTQuMTc0IDE3LjQ1ODYgMTcuNDU4N0MxNC4xNzM5IDIwLjc0MzMgOC44MjYxIDIwLjc0MzMgNS41NDE0NSAxNy40NTg3WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+CiAgICA=";
var Nz = Object.defineProperty, Az = Object.getOwnPropertyDescriptor, ha = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Az(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Nz(t, n, a), a;
};
let Jn = class extends xe {
  constructor() {
    super(...arguments), this.status = En.default, this.connected = !1, this.fullWidth = !1, this.theme = "radix-blue";
  }
  onClick(e) {
    this.dispatchEvent(
      new CustomEvent("onClick", {
        detail: e,
        bubbles: !0,
        composed: !0
      })
    );
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      const e = this.shadowRoot.querySelector("button");
      this.resizeObserver = new ResizeObserver(() => {
        this.dispatchEvent(
          new CustomEvent("onResize", {
            bubbles: !0,
            composed: !1,
            detail: e
          })
        );
      }), this.resizeObserver.observe(e);
    });
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback();
    const t = this.shadowRoot.querySelector("button");
    (e = this.resizeObserver) == null || e.unobserve(t);
  }
  render() {
    const e = () => this.status === En.pending && this.connected ? Z`${Ud} <slot></slot>` : this.status === En.pending ? Ud : !this.connected && ["success", "error"].includes(this.status) ? "" : Z`<slot></slot>`, t = this.status !== "pending" && !this.connected, n = this.connected;
    return Z`
      <button
        @click=${this.onClick}
        class=${Rt({
      logo: t,
      gradient: n
    })}
        aria-label="Radix Connect Button"
      >
        ${e()}
      </button>
    `;
  }
};
Jn.styles = [
  tt,
  bz,
  ke`
      :host {
        width: max(var(--radix-connect-button-width, 138px), 40px);
        min-width: 40px;
        display: flex;
        justify-content: flex-end;
        container-type: inline-size;
        user-select: none;
        --radix-connect-button-text-color: var(--color-light);
      }

      :host([full-width]) > button {
        width: 100%;
      }

      :host([full-width]) {
        width: 100%;
        display: inline-block;
      }

      ::slotted(*) {
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        width: auto;
      }

      .gradient ::slotted(*) {
        padding: 0 4px;
      }

      button {
        width: max(var(--radix-connect-button-width, 138px), 40px);
        height: var(--radix-connect-button-height, 40px);
        min-width: ${_z}px;
        min-height: ${vz}px;
        border-radius: var(--radix-connect-button-border-radius, 0);
        background-color: var(--radix-connect-button-background);
        border: 1px solid var(--radix-connect-button-border-color);
        color: var(--radix-connect-button-text-color);
        font-size: 14px;
        align-content: center;
        align-items: center;
        font-family: inherit;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.1s cubic-bezier(0.45, 0, 0.55, 1);

        display: flex;
        gap: 3px;
        justify-content: center;
        padding: 0 10px;
      }

      button::before {
        min-height: 0.94em;
        min-width: 1.25em;
        display: block;
        -webkit-mask-position: center right;
        mask-position: center right;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        background-color: var(--radix-connect-button-text-color);
        width: 16px;
      }

      button:hover {
        background-color: var(--radix-connect-button-background-hover);
      }

      button.logo::before {
        content: '';
        mask-image: url(${te(Zd)});
        -webkit-mask-image: url(${te(Zd)});
      }

      button.gradient.logo::before {
        background-color: var(--color-light);
      }

      :host([status='pending']) > button.gradient::before {
        display: none;
      }

      button.gradient {
        border: 1px solid transparent;
        background-repeat: no-repeat;
        background-origin: border-box;
        background-size: cover;
        background-position: center;
        background-color: var(--color-radix-blue-2);
        color: var(--color-light);
        background-image: url(${te(Sz)});
        padding-right: 7px;
      }

      button.gradient::before {
        content: '';
        background-color: var(--color-light);
      }

      :host([status='default']) > button.gradient::before {
        mask-image: url(${te(qd)});
        -webkit-mask-image: url(${te(qd)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      :host([status='success']) > button::before {
        mask-image: url(${te(Bd)});
        -webkit-mask-image: url(${te(Bd)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      :host([status='error']) > button::before {
        mask-image: url(${te(Gd)});
        -webkit-mask-image: url(${te(Gd)});
        width: 22px;
        min-width: 22px;
        height: 22px;
        -webkit-mask-position: center;
        mask-position: center;
      }

      button.gradient:hover {
        background-color: var(--color-radix-blue-1);
      }

      button:focus,
      button:focus-visible {
        outline: 0px auto -webkit-focus-ring-color;
      }

      @container (width < ${Ja - 0.1}px) {
        button {
          width: var(--radix-connect-button-height, 40px);
          max-width: ${Ja}px;
          max-height: ${Ja}px;
          justify-content: center;
          padding: 0;
        }
        button::before {
          -webkit-mask-position: center;
          mask-position: center;
        }
        button.gradient {
          background-image: url(${te(Oz)});
          padding: 0;
        }
        button.logo::before {
          font-size: 16px;
        }
        ::slotted(*) {
          display: none;
        }
      }
    `
];
ha([
  O({
    type: String,
    reflect: !0
  })
], Jn.prototype, "status", 2);
ha([
  O({
    type: Boolean
  })
], Jn.prototype, "connected", 2);
ha([
  O({
    type: Boolean,
    reflect: !0
  })
], Jn.prototype, "fullWidth", 2);
ha([
  O({
    type: String,
    reflect: !0
  })
], Jn.prototype, "theme", 2);
Jn = ha([
  qe("radix-button")
], Jn);
const Wd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDU5Xzg3NikiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMiAyLjVDNi40OCAyLjUgMiA2Ljk4IDIgMTIuNUMyIDE4LjAyIDYuNDggMjIuNSAxMiAyMi41QzE3LjUyIDIyLjUgMjIgMTguMDIgMjIgMTIuNUMyMiA2Ljk4IDE3LjUyIDIuNSAxMiAyLjVaTTEyIDIwLjVDNy41OCAyMC41IDQgMTYuOTIgNCAxMi41QzQgOC4wOCA3LjU4IDQuNSAxMiA0LjVDMTYuNDIgNC41IDIwIDguMDggMjAgMTIuNUMyMCAxNi45MiAxNi40MiAyMC41IDEyIDIwLjVaIgogICAgICAgICAgICBmaWxsPSIjMDAzMDU3IiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xMDU5Xzg3NiI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIgLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4KICAgIA==", Kd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDU5Xzg5NikiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMkMyIDE3LjUyIDYuNDggMjIgMTIgMjJDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJDMjIgNi40OCAxNy41MiAyIDEyIDJaTTkuMjkgMTYuMjlMNS43IDEyLjdDNS4zMSAxMi4zMSA1LjMxIDExLjY4IDUuNyAxMS4yOUM2LjA5IDEwLjkgNi43MiAxMC45IDcuMTEgMTEuMjlMMTAgMTQuMTdMMTYuODggNy4yOUMxNy4yNyA2LjkgMTcuOSA2LjkgMTguMjkgNy4yOUMxOC42OCA3LjY4IDE4LjY4IDguMzEgMTguMjkgOC43TDEwLjcgMTYuMjlDMTAuMzIgMTYuNjggOS42OCAxNi42OCA5LjI5IDE2LjI5WiIKICAgICAgICAgICAgZmlsbD0iIzAwMzA1NyIgLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTA1OV84OTYiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiAvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgogICAg", Hd = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN0eWxlPi5zcGlubmVyX2FqUFl7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7YW5pbWF0aW9uOnNwaW5uZXJfQXRhQiAuNzVzIGluZmluaXRlIGxpbmVhcn1Aa2V5ZnJhbWVzIHNwaW5uZXJfQXRhQnsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19PC9zdHlsZT48cGF0aCBkPSJNMTIsMUExMSwxMSwwLDEsMCwyMywxMiwxMSwxMSwwLDAsMCwxMiwxWm0wLDE5YTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyLDIwWiIgb3BhY2l0eT0iLjI1Ii8+PHBhdGggZD0iTTEwLjE0LDEuMTZhMTEsMTEsMCwwLDAtOSw4LjkyQTEuNTksMS41OSwwLDAsMCwyLjQ2LDEyLDEuNTIsMS41MiwwLDAsMCw0LjExLDEwLjdhOCw4LDAsMCwxLDYuNjYtNi42MUExLjQyLDEuNDIsMCwwLDAsMTIsMi42OWgwQTEuNTcsMS41NywwLDAsMCwxMC4xNCwxLjE2WiIgY2xhc3M9InNwaW5uZXJfYWpQWSIvPjwvc3ZnPg==", Yd = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjE0XzI4NDkpIj4KICAgIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMkMyIDE3LjUyIDYuNDggMjIgMTIgMjJDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJDMjIgNi40OCAxNy41MiAyIDEyIDJaTSAxMS4xOTQzIDEyIEwgOCA4LjgwNTcxIEwgOC44MDU3MSA4IEwgMTIgMTEuMTk0MyBMIDE1LjE5NDMgOCBMIDE2IDguODA1NzEgTCAxMi44MDU3IDEyIEwgMTYgMTUuMTk0MyBMIDE1LjE5NDMgMTYgTCAxMiAxMi44MDU3IEwgOC44MDU3MSAxNiBMIDggMTUuMTk0MyBaIiBmaWxsPSIjOEE4RkE0Ii8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF82MTRfMjg0OSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgo8L3N2Zz4=", Iz = (e) => {
  const t = /* @__PURE__ */ new Date();
  return e.getDate() == t.getDate() && e.getMonth() == t.getMonth() && e.getFullYear() == t.getFullYear();
}, OS = (e, t = " ") => {
  const n = new Date(Number(e)), r = Iz(n), a = n.toLocaleTimeString("en-Gb", {
    // en-GB is causing midnight to be 00:00
    hour: "numeric",
    minute: "numeric",
    hour12: !1
  });
  return r ? `Today${t}${a}` : `${n.getDate()} ${n.toLocaleString("en-US", {
    month: "short"
  })}${t}${a}`;
};
var wz = Object.defineProperty, xz = Object.getOwnPropertyDescriptor, va = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? xz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && wz(t, n, a), a;
};
let Ln = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.header = "";
  }
  render() {
    const e = () => this.timestamp ? Z`<div class="timestamp">${OS(this.timestamp)}</div>` : "", t = `${this.icon ? "30px" : ""} 1fr ${this.timestamp ? "60px" : ""}`;
    return Z`<div class="card" style=${SS({ gridTemplateColumns: t })}>
      <i></i>
      <div class="content">
        <span>${this.header}</span>
        <slot />
      </div>
      ${e()}
    </div>`;
  }
};
Ln.styles = [
  tt,
  ke`
      :host {
        background-color: var(--radix-card-background);
        color: var(--radix-card-text-color);
        display: block;
        padding: 11px 20px;
        user-select: none;
        border-radius: 12px;
        width: 100%;
        box-sizing: border-box;
      }

      :host(.inverted) {
        background-color: var(--radix-card-inverted-background);
        color: var(--radix-card-inverted-text-color);
      }

      :host(.inverted) .card i::before {
        background-color: var(--radix-card-inverted-text-color);
      }

      :host(.dimmed) .card i::before {
        background-color: var(--radix-card-text-dimmed-color);
      }

      :host(.dimmed) .content {
        color: var(--radix-card-text-dimmed-color);
      }

      .timestamp {
        text-align: right;
        color: var(--radix-card-text-dimmed-color);
        font-size: 12px;
      }

      .card {
        display: grid;
        align-items: center;
        column-gap: 10px;
      }

      i::before {
        content: '';
        display: block;
        -webkit-mask-size: cover;
        mask-size: cover;
        background-color: var(--radix-card-text-color);
      }

      span {
        display: block;
        font-weight: 600;
        font-size: 14px;
      }

      p {
        margin: 0;
      }

      :host([icon='unchecked']) i::before {
        -webkit-mask-image: url(${te(Wd)});
        mask-image: url(${te(Wd)});
        width: 24px;
        height: 24px;
      }

      :host([icon='pending']) i::before {
        -webkit-mask-image: url(${te(Hd)});
        mask-image: url(${te(Hd)});
        width: 24px;
        height: 24px;
      }

      :host([icon='checked']) i::before {
        -webkit-mask-image: url(${te(Kd)});
        mask-image: url(${te(Kd)});
        width: 24px;
        height: 24px;
      }

      :host([icon='error']) i::before {
        -webkit-mask-image: url(${te(Yd)});
        mask-image: url(${te(Yd)});
        width: 24px;
        height: 24px;
      }
    `
];
va([
  O({
    type: String,
    reflect: !0
  })
], Ln.prototype, "mode", 2);
va([
  O({
    type: String,
    reflect: !0
  })
], Ln.prototype, "icon", 2);
va([
  O({
    type: String
  })
], Ln.prototype, "header", 2);
va([
  O({
    type: String,
    reflect: !0
  })
], Ln.prototype, "timestamp", 2);
Ln = va([
  qe("radix-card")
], Ln);
const Qd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0MDNfMTI3MSkiPgo8cGF0aCBkPSJNNS45OTkzNSAzLjgzMzk4VjUuMTY3MzJIMTAuMzkyN0wyLjY2NjAyIDEyLjg5NEwzLjYwNjAyIDEzLjgzNEwxMS4zMzI3IDYuMTA3MzJWMTAuNTAwN0gxMi42NjZWMy44MzM5OEg1Ljk5OTM1WiIgZmlsbD0iIzhBOEZBNCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE0MDNfMTI3MSI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
var Tz = Object.defineProperty, kz = Object.getOwnPropertyDescriptor, Ci = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? kz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Tz(t, n, a), a;
};
let _r = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.href = "", this.displayText = "";
  }
  render() {
    return Z`<a target="_blank" href=${this.href} class="link"
      >${this.displayText}
      <i class="icon-north-east-arrow"></i>
    </a>`;
  }
};
_r.styles = [
  tt,
  ke`
      .link {
        color: var(--radix-link-color);
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .icon-north-east-arrow::before {
        content: '';
        display: block;
        -webkit-mask-size: cover;
        mask-size: cover;
        background-color: var(--radix-card-text-dimmed-color);
        -webkit-mask-image: url(${te(Qd)});
        mask-image: url(${te(Qd)});
        width: 16px;
        height: 16px;
      }
    `
];
Ci([
  O({
    type: String,
    reflect: !0
  })
], _r.prototype, "mode", 2);
Ci([
  O({
    type: String
  })
], _r.prototype, "href", 2);
Ci([
  O({
    type: String
  })
], _r.prototype, "displayText", 2);
_r = Ci([
  qe("radix-link")
], _r);
const Mz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAC8CAYAAADCScSrAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAIE6SURBVHgB7b0L1HbbVRb2zPX+BMkdS9uEQHKOXK0XEEG0QoxQexlDEFCrtQSwDkVrIlBbRQi3ch3FMSABGZaBKBAZ2iBQwNqBKGkSLyBXtSgB5ZyQ5CQOL0nOIULO+fbsu9ecz5zP2u/7J/8XEgrD7HO+/33ffVl7XZ75rGfNNffahnfC9jM/8zMfev7Y/566bdt9p9PpKe5+Xx6+73D6fXjX9h/S9oB8f0P+wcweuLm5eeMY44E854H777//x/AO3gzvgO0M8Oecgf0J58x+yPnnc/Cu7V3bO2576RlbP37G1neeDeCl+EVubzfgzyB/6vnjM85/n3n+eyretb1re+dvD5z/vuj899Iz+B/A27G9XYB/8MEHP+NsdV+IdwH9Xdv/P9sD578XnkH/1bjldivA79r8rMX/yllvfchbO++h7TH81KNvweseewwP3TyGRx7b8KZtw8+dPx96y2PAdj7Jz/+fPx/6hfjtN+d95z/3+LTzvm3ftyGP+9yPzeL73Gdxzbaf7zON+f2837c8X9NgOpumez5/33XebzNfjnP25z7saXqnN9Pe8+2e9/VZjnne+foBy3tsUbX7p0clz/t6np/3G8jybnFsprvfA95pe16HvPe5Hs/1X3nj8f3afTc2Jhp/cU0eQxxzoNLcf1nsqX38WdczLWTZ97wY+v6WF7miIOvO4hre/hlPf3yd++Qn38GTn3RnXvY+5/3PeO/3wJOe9G744A988vn74/E+7/14vI3tgfPf77wN298z4JPVr1rUw+dWfsWjb8aPPPbzeMXPvxlvyoaeYEtg44YNRoD2/nkOAX845gTW/L2DaAeDFZDjOhdA79dbp53Ap/FE2l5A98d8yRfcFyOZhuCo9AlwGmGDucuHBGvkW4DL612Oe58zgUejI6DPn8PQwN4EWBu/0PD43fsz0B1lAMGb33hPTUOB63JMzzFfjWJmJY2KBpJgBzQJv5quyS/LfO3bDvpf+0FPwcc+52n4pI9/X7yV7QvPoP8i3MN2T4A/M/tfPn982nH/DvSXPPpGvOQtD+PhHeQEhTLo4fvwA3MT2AlGHMBe7L6DnCCbLN/Hu0cge5sci307axfojoaWBlCAvBEA5TlO4AuoJ3Myz+613wrMcc+ZtvP6FfjT+Mi2s2wNgpl+GoGTxfO8kcxZBgQ0qDZHgUkYnYCckJydkBgHJJ3c5rUCVKO5KHixfp95Hl0+IqxYXgzG9Dqwo/D6rp87+D/x4953Av8Z15n/q8+g/yy8je2tAj4Hpt+BK56Xlzz2JnzjW/4dHmHDuxXDOsEiwMLREES+IKXCBKVcV8Zykw10Y83qPOexTP9Gmdtif/UM5w8Bv0oZJEg3Mn6CcxpNShXmbx4DFoMg6Cl54AcJszVrl/wp2RL790Pj/PvmxqvRec38nUbg1Ru0RPA0mmrIKaeAI+ADOGKExfq+nF/yCW1QdS3POwKehmLAZa+gX4+G5Qu762/taCz/2S/bwf68P/5B+KSPu8r4Lz3/feIZ+G/AXbaBt75dgH1n9c959PV40aP/Bo9IlshAzGxZMz8P5S+L5j7v/e7HOrIJYp5ghzRdiErvW/uNx/qO7G6nkZ7TLj09d1ox8n7a0L5Z7kFAbO4LOVr+uFvl2hWaod6N0va9uG0Fcpsnuty/mHtzuYcVUMy6vi3vX3VhuFQwzM+8eAWe1ODVAvm148efa0KHa+JP76mdxWtf+2b8uc//Ufy5L/hRvOb8/bA9B4HZu253BfyZ3b8KB7C/Do/hjzz2Wrx8+/eZUxekGiyrUQc3uslYKrtsPRgsagdAd3prw/iRAfKbJ1hrvyMZtc/BFRLa3FYjRTd6yZXc6QdmDKOAsKeF5IAameXlVmnrfuS5HAxaFpznzQHx3O9ysYIuMzGsrvPjOS4kwEOHZvLDdxNwFsfYlQvUWA3Lzq4uq081qDZCHFXVYqjCcfiO7/5ZfMof+/tXQZ8S/Op2FfDnAeoXIPzrte1gf/6jrzt7YB5NZrH4wyUjeRnApWGz8Aur+JXreZ6TuBza1td6EBqMK6iPm9So3seu3Ff727GUor9pGS1Hhnv9bCnDNtXXyuJmxVpq0NvWN7YsxwLC7OnMjjXbhk3DOdbPBNfgLkGqi5EJu6rB4eJumQe7PH6t7gv0YhhuuFRAh6azNft53/j96te8Gc/9o1dB/2ln0H8mrmwXgD+feF/62Gt7aAf7Y6/D687C2M41ZksL2Fo+adTWKLgAtSlw923r/QqihUdl57H7jc+42KQL0B5n6XW8L6SrcYWQiRHYbJy1beNXeSa3vmalpQRv1vSRubfcGQbgvGv+78ISwpd57pqTrvc6Zm0wx2Ndld607BfkvPQGlQbWY8XWzhMvQWuSZjC6rVjpS/s4DsYOvV/8vfahu4L+qzLEZdmuMfz3648d7J+xvW4yfDTUMZfNtqVuVlK7tGJcMrvjULhtPW5S0HlPW49VTrxytNyr+pu8UfimrYAV0qXzUulJ+SoxySj1vdmxDEeJ15fz/GG2VOVI4JNlmScbJvmxCxCIdI/v2XvwRtOYsAJfkW04NqlVMatH4G/YAl6WZY5jcr9KMkWxwqA8U9JeC26yF7NDW1a5HUUGO9g/5Qz6Nz382PG0v3zcsQB+97WfP+5brvA34CF/rHJSAPYrgAZq58ymghbSrUHqy9drFo0JLIA2ARvzMLAC0g+AXAxCjFUlAXsA7qN08vSFu+RrkQvc57YasDRTGMLhnlIvNOySNMXAAdLRhK+9fgA5/xsD1QNOlTFMGNIPUm2l6RXn1ix8YPhmd1/asS+1y8H4geAONnVhEMvg2lgnfnWQX1jJG716H8x+wY8cT/vQo7QpwKeUWQ7+rbMf5v8+/2WacSNHzzuUPxmHBm8LVGKEWCW/Hq/RdJbjei8ByVZpdULliBMgNf3Ep2c61XPYmpdogx5EorPeA9g8Nl3aS6N0j+HCCMVqLU4CY/kHyiLrQd12MPD4vt+4WXyWQxh7GqqWxFomrGYuORajMCjQVwsw6dHuQr5LnV09KPe/MCzJj34/5npNPvZ+3/c/hG/61n+Jw/YF6V6fmzL8cyDsvkuZnd2RAK+7aMWkKWq3xG8E60W9HI0Ca5p6fRnNppf7HBwa+IcGdqGjLzYBfiGQ+t6w9FIrqPJuaRQjZUGVe/+6GZ0iy/VkZxfGXwzODyxZ1N1dexlBUp8VeZgcQ9PhleQWVDD/dgQL7yFVh9WAK68C5IpguLKtkqbzrLeD5MXzhtWb8pix57ALoF+ztf28r/3ff/IobZ6qRK6A/wI9a2f219tj0m1IgapgluxiLBaKWS9OxtplYrXWamSg2HdWxAJ2q9lOXrgda11BdvjWiloGpPOPfWqnkeEqdX2B2SIf8DX/JXUg+heXOh0pOXhC9wSm1TN/b8ncW4xsz9KlyYUgKZIwlorlwRXUHozpCnPymIJ+FANV9YmdrdCL6y7hWJpbvl9IV7OFKFU5+BWI2+Hu+7lvetOjZ5b/F8t5Y4zPqO/7P3s8O4Td920H/DFD9eH9JcDgd5EOWCo9ptsZiOVt3d4NcJU1HAv1LG7HhVl7n8kBdo9HLWvCemxQvX2ND7KMawOweLbUTTHbxutw0QMWSXgYVentnASrzaqP6l0m95UdPUjFHGjO4gjDuklBXXplwwUb62dUiy2HmCPvBsfxat0WI5C2sAP7eRf6YuzQlGrVg17ePbZvPsuaI8snxovhP0GP7mDfvTIruA/f528rgA8tDP/y+KLP6Gc2uyIhDhV2vF8izRjFeK2f9JWR3ZvVmZmySdf4GF/upzKqQGkCh2TkfSZ/2GV+lypzYSMPpuYJjIlpxkxDy+wmR2QdKTVWAbvchktiglybhTrYSgHN7JBzp7cIoKHoFr2BSVrX4H7YmwW9eqY3aWhP09XKuE3+WtPm94cffhTf99KHlqT3B5T2zxGZXcN9X443RyM7FvffkrAfGTMTLrbVyY82DLrJjpVHg0HedzGAKrXoPA85s89AdqyJMk/0BNUDSX+8pCncMblsYWxBRN5fKYd1BNDtpwBxFlcGcRwE85gtTNaeFatuf5gAznZj8cI80969NPu1GjxppoaYJZkXZE5nVbgU5xAeYc3+Da+uL7LtbDs1oAKzjDWqqWMmXH6C2FCDL00PrZv13syBZLnqfr/+H/3Qv4Zu+TRe4sz9OXrwp/GWSkBZWG8JSXzJhifAKAGYEJrtOYC0Yo3Qq1hJ9nA+6odxFtd3hm2QjqoUK8Nhzmxxx5n0Qr5UpE6I6WRUYelKDW9Z1iHn0IesciZINvLnG+8t+cn70RVHyRADt7gHdb0akfZGS6d3gGqXa/1byOuwlfRwIQtJrA19naGNa03an2Xx7lH4OQzrpdZGKvmVpIED2GlX3Pd93/86HLbn7P+M42zU7p157fnPsKpHPwCFM4PqB98U/L4CZumbEmS+9YWd2aIU6PS7i9Fs1bWb5A1lNJrpblD1qWe+tZfxLkNXoi0GjTXpKkppWl6ltqU0VbZlZRBL/ZAVM78cLNbg2QIwYRJevQX/I0szN91Wa77pM+9PHNhcKoQpmTKwVX7WCvGsc9dCdX3ayu5l3mxbyQdEKqkEa4rgpx1yG8d2WXOcfd2xvrf7fbpz1+6jMjLDoBbrmkcYBmur++0YFqCzl9CMMh6E3yEDUVdGb6vt3iNSYS8yTNPqayJpyhdf859MuWrizh/bjmxT+TH0gxlIDwwONgY1hG7k2SsNkwbyKreCnm1PmR8SYFv5gmUxtUaB6s6ibtkevrJjgbbrmbXj0MjQI+seQjPgGU7RxlfyxdZr1x5JU87fhoXFmb+jF4q7FkyAoD8Q9Pnvn7/yjYc74RLwP41Hk1ESiNXlWzX2OqmyMvvma2XW3dH7CELXk8j6kmOycs18ZvHIztPgSr+vFVMx7O6Lh6CBqKW2hSJcPl0oXuPO5322urobxrvqN0/D5C0cycRZh9BG694nxifpCCCTy71qQmxrkyEoiTlYzYmiq/TI2BJCZkd2XuuzjD9lSQ8sbU3dV0ArAVQJ9ITFEIRAq8ma6QHcVXqt5Yvt1a/598dTnnoB+EfOSCHLlcECNThTUHBfDAQ6Rnv1lffkkPWuKJ7MGFqBzkVHm5yv52Q6fJSu9AXWR/Xqvl6ttvYUwLEvjC4/f9ohFh7N2JzdpL69GHCi4NFsDInZybNbCYRO5/2GeRnHLMNQ2YflyUECt/sOD4PPrI+29wuW13zATIjA2+Cr7FvdIa43ITs74NgXY4bkYQlvkLpHGZEQgfW99Nwh4BT7qBP2/17z2hXw+xpJO1aXlQdm3AzB4+11aQMwAW/2AG4FumI4EyBm4WoySStSCk3Dqql3pinmzdF69TwcHGqlVWnUyjoPTKsoaclLN9SUPeimrE8jgwOHXn41ajGem5vI29ZMUfdvT4lVeW9YD9bZXAoileaZb2dIp0dFdrGcp0oP15mlN82w9gkL+CFA1QIz4SxTARTAUa5dXKcVZt0kS5UWyPPRwebFzmflkFYQv9/0yFv0ptgXBDsTij1Ld9L/rpWTxg8IRq7pcyRTbfUYW7NhAaDqyErSNOtqeKzEirhUYsaY1xNQEmNToEazpsa9zI9BVswdFQjTYFaw+hHUgDA4qs26x4gMDKHVrdISQJ7/oTuxylbGTmniB6lGI2eZ1vnHyfR+kF283RIfspSGVh3pXzRqt7maAwnG5IHuuNSKNChQfaniaNslIes8gGRZZehzDVg0/CGHOLL8w29aoyf31e8uwoOLZZUR+d372CIz0NZfrkE+46rgABZSDdBb/d73bNIraI9CTV51BgIXF5ttHZ7FR/fmbz5IDjQwiNalN2KZIOcc60Ra5YCh0NeZOXpVMsMmrKb1EwbWFqvMWMBvS57Hh1ToxXQ+KzolqvYmS9mrGIU4SaAzZ+Wz96Ub045Sr9LsQvEivUF20EDKOWbp4mk5Mxxt0exwPIlAOgw8/MijOG7jnPgiaR4hj/jBohaQt+/Zoc9briCxAr/sZxpan1JTHQ/SFaBpu9R3zFJKRaRhsAJmb4A0rA2X7Sn3pV7dUsNpJKU+nF31y7rRQqWhbBVWQMu0ZjsaeJ5ux5bkPasKeihW9ZkVGLOwEt5RZwYzOXIMIumXO1MMyy6iA9UKe26Ag91CuB2ITDaTL0Ma0bX+0BPvPOhHw2P16EVFZyjlQSwQd/vXV7/2YtB6qeEfnrRDN6Et1jlyNi8eetZMGY5PDNV1W4O0pEJWYMyUQqQLZEzQniA/THrs+/iMZ8kTGqC7eDQS+B6/FLSD5UOfuz/NFdP+UWuLZ+TAoH74Uh4VYBksslGOU1ghR1tdR0x7Fq787d3jHn3pWkbXc0gU+d0XNogKaOIoGHdBmiwvxgCs32Wj0UJ6qMO/G7JnI7lgTZ81RyPsfRDizB9eFoeaJ7EV/Efj0+36Q9wO6eG736sBLKIidRmHo6uS6RRUXWYe0zsTBqSTU2RB6voGCa9j0pvICgalwRuYKhVqwSNvclq3pp8tB5f57B1LvxgN5cn+mat8RGVag5Y22Nd2XUEMeWn4sOT83g2bt4syG2detSeM6+bXcQAAWVrsTSevaicCuGFg6iFqKdNuyDaq5Kc29Dr3LrArUMYgdPHI4OjpOVxqJpiMuqC52SH9i4tzuwR8E0HJDmNKHoPKYNecKaQRFJAbVAoSps3BajSg12zn1NZGw5BLPCdR0FJrbadDydQTVANWq8qyJpoaR9CgVj0tjKEXoCfR989hMSPawPdlsNuzkpm9BG0AMtMZXgZkVa50YWZ6oXMj/zX55ZItZpQTakJG0IadfCsHyGwm0atQ0YB0DGirSHIHVk0MLtKzMHgwgpJs1abbJRctt/NLthevUKWp6uewXfjhl8f5Dn+ULjqFP9cpcqkgAs3Jbr6ktxhUQmfbWs+1ROG5VmxPv38NZNFpkykV1GB9bMxjs4FL7I5WjS0sDqxBbpHr8iVNP7SVPOAZBRrt4rc+58j8qj333+OUxXKHzk9Mo0CfK8Gqbftk8/30mnxyrErEOn+GxdNSwF9O9xoh+4ENOQgfxryt4s2WlOS+dQaExazP8uUSaDBbd8iOepYBfR73vPrywe77rjL84msnQOszGJ6gGehFjNiQK8NhYc+jNDgytqXBmBhHkZemgwAc0eJSbIJe09ZozIpQ3ndujW5WlPTacFyyEpegi0jGHByC+bQl3wYBOjr6kZLBxUPB9CeD58VelZS9ToIsVnujNnaIW12ukYGu4KLSoBE5Qe9CJArsrmdtaAeN0mtcsURDZim79EdTWjIFmRAvnzuPVSyUGEJpASvTO3hvcLFd0fB9FxewEcw6EVWMn9/L2gr43IdqzJkGe4BMp91reWcavkmOqr66Cyw+2H8f/PFL9Xp7Tsp400VZTx9l2sdVxIROhHmsjJpnbNtydpdZvxem0kg9tO622YIF9n7M7Ky30eMmT4t2vcAJdCw46lx4z3e5TEVloQL08b17ZhpAV97iT19Llz2GLwF4EKpuW/IlX/yq9U45qNjLnC6g714j6qxWbag6XLerDF+AEp3OMo6aFu7PAZn5zBv1gkEQjZbWW7nNgSzBqk/wM0RgW2N1WuIw3baOqhzDRXtMVu4nvrvbv/Gl17BMctrBJj0F94+1nqw0ugxA2zKKxQmkAFdFjWTZPCNAXUKau8dp5kVjFHTFpZ99pK9cGIrKsEKwcUAUJF0yvgWohinI+t8FmUSir2dcDrS8vFjLebpdGCl6jGOmxc82sLUygBoE88xr97kAvLJ6J2vC4PRV9702ea71OJlS8iR/q0GpjnZ5JI5lTzLVeYq6nxRTekUGlkn9ef9RB86FUtUYTE1Q+jipPP57MZk2uylb5FxFgNa9Xe61/0XB1UhMeYQAqnrztfLy+ooWhUuX71lnVoTg1adkhZimKwMyafiGrHc5F4NBuYP1yEAza2PR0jXZv6P8eCtbj22WQbahyAFSKixp3327OtOq8qXlR8fNKLDKyGsmtBtfWd1FUmhPXO5FxOcQph7ZHq0P+zoFMlfxJbZI5GVw01bbO1SNqEzlfW2tf+N+IUnm/S2iGaN+2pu+EXDFnCaVGvdtKWgL33kdj0aMOkz34JB0IYVLMBByk+FGMmN6fhhDbzlVXUZx3A77rFiib1cNaD0GUNBaHuuBLQ4yCSKJbDF0hekywQYsmKF3sM/1uuY4Hrq2XZE0Vo0/hFQ6zqXwMZ82UuLxmmSyyaKsrRjk22XIwlKYBHqFIMuaMzSsygtwnIjpVcQOkmf/eoMlbLcGUhO5cS1jcwYAjfOLhlKWQ64f04NWZP2MYvdujHWugiBGSQ8HxJtjdR3gUvbVr10GoJUC9MPxW+fZpc4VuS6A5j71nqiP3sSowLpFX1c7bW0b97UnLeNhXZq0Uea19qkh5XV0FdvodHq8YGnQhoVoDtt1Pzw0DsYW8DQbJxx8TegYqrtOOGGpo+oJKr2+X36b33W5GdXTvB97GCizahomhuJ0W+U5g8th+FoFCTQy6/x3s7UKkql5p21TXQKsqxZnfPzS6lEQ9pwFLu8Z2829p80T+FO3G9oblrk281Vmyf5waLXON2WqpcoOIE7wdciHHM404x59ess7GpJcUkZnwBVgL+ReE0trz68LT1l2I+w5l8xdQfzVmVayIZGygFUBreCtW1jXk7Vs2dKABgtKg+DFwGIQE1yijecm5/cqCSYyxQowjkPaslXFoRtHxwVjuYwgZaYJHMCXzAFLizsuNKqJq/AitBjNyJ1WenF4b9MZZxpGs7/X9S1lmJyxN9CyFSaYvnwvxpDvZPGLSu061yJ7MYekcMRkWNMFPIv80IRTRn6NwdUesxfAvTK8ww6MnhNELqsSiLck2wIXM3ziKmQU5SYyaCmky4d3PD3vUXMjed4mD39Y5qcfv+thU4MAZaSWO00YuCVRsGo/9eVL3rYyEF/yP7IxuuL9ck15GSusFbBKpxIQB1xZpbxJZTQwm90blCbMwusX/0V3lesNq3H5Ia5JKOgdRQrwBHQDtO/T8UNJUyDLF6yti7VyQU/0rXLW+uL8OTS05FB/+3bdD+++AMAqwz2LRcC1ByeSO4JrE+KglofU8SauSDWE8uDIZwWauQtAqnOucQKcM5TasKiBdUm1fVMnRVZuG0zWiKEajPKCx11nibcum+l1BR5OjjQYR+Y+Vt+NC8oNnNc10LPRDOXzZuG6d/CaRKoXjRUrH/6OArvuo7166/kVjF6Vo2Wa7WcMivDOuTFlk6sp0TrtzkpREXREwd956/Uz79VjCFxsl27Jbf3ju5vqlYwHt2MD2xYzLR0HLM+5ehpJ6duDgei1PW18OQ6odA77ZoUWiG0xmn0r5bI1AGuhxCzCfDjbs2pzLqAIQB9smbfIgVKOIUxZMSuq14vxpXztNWIFbFiZM8+X5obJ5JighL1ryt6WNNTYkoYXA8m9TWUJQwYIrEwbKMiyN9l7m2VAXQxvEuXZIOcgX2OmzC57SJYrJJtV2qXzgcOitl3CY/ySble9NDXZJNPk1eOVxCnqqIT6wQiC3lD11vVXDHvxbKOCNw3CyqBcmLXvbYsxMZNWk0w9a9tX8sFu7yLnNZE5zjPs/55MKtcbY4vRZ6YjniQHV6AsIVgiMyMzXKCva5sgaqDswlb5b9WLaOvu4Ru4WaLOq60V7Xof3iENZUmVWlJ7m8XD0hKiy5vlsBV4pj2cteava7sxpL+Rf51uVZN2C7JlJGcd69wu2xXAO5Y4eAHwfnm9y+g4K9r1X+x7cZ7jgpH74W/dB2HB+N0uUomh53nexgGNr9mCfU0iCPePoZGTwv5KLp6MfiNlgpQRwOpmBcc3WtW+eFOQhksWZJ3iADxGT45CTuO1m9ClyfKe9IEzX7M6+EVG5Z7GkJV2fAg8Nk6AEIhScGiddXmVfWNftgMbqUuY1+YeMYjmsqZ7UizMuhcwO4geefAm0xqXeL+LH14GllrZ1OQ9fgljaPnR59bgFOHjHtJbMFcN6OxVgCuyBVXpvE/F0NcFkSdnhXSdd8NkXhbDMqyARBp3WjV7uirjQI0R2sUHsHHDbel9axcO92ZwLSQNbqNbVYoU1x0qDW1hjtXiiv2zQtzZF28JojhfxxC8YRnL8T4ELq8X78GxZ8EKm3XzRVThcmv8jLYAoHri1RyLQKueuydJ2wDuDfCZ+MLyEHmSKQmruwQ/6ZM4qt03SeM46cRufLKvXAMBifr8jZp5Y165P9Kmr1u7NF36mp4mPmy+bT3gnQBJo/ZNB4zd0Mz7dvg9mRkEWTJPor2lgi9G55lxXVVs/p+G2Jj0i2YqCLjIBBdGta2rJ2VVTxsc5hhc0mJNaZcHLAD3rpUC3CzHkN42OTxIJdIYdgg8cGHw/DYfGTBpez4IAKweGgQuOLcwi82VDYihw3YZWuDWcRhH1uUr3Z1H9NYNSg5ux0oU+dcFbbD3I3deg+Q0FBkou05i5R29BoKC6MzDErJ7uKfOvLah0Cg7rflzS6+PqAIFYzGK1HCBzrWRDuDcG8B6cFAz1aXzu+KMA8QRQBt6f3hrZ9VoWS+6Lk2cG4Njk8Y1LUz9YWFJBVAZtR2I1NMMhjemHZ2WdeV5fm1iknxf3DMf4pE8jBr4BG74BvDpJZJV3nS79NKA7CFs7NYnSl0s37c+t4jKsQZ+SeZZmGv6fVhLD72v6TWpy4eY29IrGApslEJLj4VmoQC6ujJTGlXEp1XCZGxf8NAt1ANGZAiCV09BRu8VlnvwOnsH6xlQW4Ce32f+t57zMOHZtFxfunXPHk3SIOMW/Dvfuo8TW1WhkLEH2t/ORu7BtU2ajSpL/78RU6iH5KvXBn3nZOx1oN6TapQtMes6nzITHMbLIqJbjKw5cM+SZotWsS5ruB1ZXJegrwOQomHzIRHV7QJUMj2LyecwxK1cMmg7yB/2LlyMlIslAas02jYsOo+VZVoI7ieo87P90MI4m5SPPQM69rtAnD2ChkNU/afx6XryZUCcSENKrQQg128s5vSujIqZMUAfZKFE6oEi2bgruCRMlgPWQKdxLeMh6dJY/mJwcVXHZ66FWdd4r4Mv09hOdobLfbpuRvUjtSvroQf/wU/0/kT7xQop1x/XvnPcwSmD7j4uG73OmmhKYGehbm6gA/KSCDp1X9XQ7bN4PKamNksF0UDgzzKgrXsiyLm60Y8e5zu6RFY90Iyk3LDKt6zBnXg3bKuEga9MjpYhszx7Xd9k2QimxYASzOAk0ZpGT8Z0fvtN313OvVd4yhMfh6c8+XHhEt164Gkubr9MpXzg5hLnIxWm5ZuE5XLgQJeOw774/uCr3hR1u/XgOCSHo0LIc2LKdB+w9ILcP4hHdE8R9RGkd6P4hFWvdjUiFFcAP4G5WTElBDA60RNg6b7HynXplY4J6KkXS8JwUiuBqHVr6BnYcjNuel9UOtE7uIChZQn3BesmezOWX9tK3FmRHjWm93O2YpAjG43gXMh1/7jppGsQ6V6BU8z7bBxqdfNaXYGSg4Rj9LiI2/Hj/6tn4nl/+Nfhd/zWp+OX0/a7PvHb8fK/9xoU/bIs6MHqLHMxuVdj9DmHzUxItAPJ9m0k4vjkGts50rsE/QXgCyQJ4n6kzwsYDCfogRK6yz8GRBAEnLHUQ3mMuovuRsqbrdxsYuVQDbx6X5heLRVtfR/UZzLXFtcGeM+fKQ9KF+4NtVkNWD210wz82mLsUD71KgeKquygm+kVqedQ2XOJoWdVgEYRPcFW9bml0bzgMz8Un/cZH4ZfrlvP5K4xQtP7MlmK0GfR4lyqHSu6N7Qb1CAKSdK1lksewI8ZY8PFamy4i5cmGmIdBNYM60ZGdmDx6DTrhn5WY4GkeUwXrUW9QVsr1WEFrOCxCh/39KUHqfECz8P6e68QeoKGk91tkQ493khGsu5ayziXeyy6Z63XBD7/M2H6umH+9QoHx7Qcz/197//LGux7FQyuN5Ptse+jq3Hf+jkC9mi2ODfKYZB7dK2hmrU1XPYHRoxYvTfguF1n+BqNeDG5CWgLrMwEz5EbY4N05707wE6jchIdKkJyZ081hmLAKM0yUVP5IPevWu/CwCltgNKnpvmFyIhtrS96g7aKpfEMn+ky6EyvMvcxjLjYrhz+fTKfcZ15SOZiRe+/f1mDfd9IQNhX62UXmxLRA7xbxjEZJ/JC9/RqErmLHy4sV9XBXTk+0AquAL97YXhq6lgqgjuT3RdWbt8vQcxJnAlI78Icg7yYY0odhulS++q5ythMy7R4h3NLx6ElkaMrSnurTcYgvjBuAhIuqE/mtT4vDJMmJ248bxcfjZD1VWMjR1WGgz1AVIjLf11I4Lmf9P541vs8Eb/cN18IsYmFMgSCo4UIDPKeLkmrEguDGblYJV/ZM3X9ed+ds4GNDH7SZwF0uy5pkGtH6vIR/Fu0erK9E2AJx8P5pa3RBSXwRmozau7yqwuAbWH86HX230vsMxp8LpXe4wCsyEd7LTZeW5oT1ZtUz+itIVmVPdOqjeh9zdY9Rr142PrenuVhrmsyKI2npM38f/vlz+77lpXN3poD9XqAHjEpxHOg9SIMzqRin4KbXjxp9+wJb/KBjahXw+mKZ/KKlyb55tB3lBSRfWR6duMhFfZnXVuy1CJNW+bwwMYzmRzQakgyGW+7AH68LMAUlAcD09/sRbp36TKQOAaLcONS+ecegG5CpGfZG9wu3cEcYIukm+xyo8aSK3MtzN4xKuWpEVa3TDjGCBt+x0c+/czuT8Iv940YYNsavQJRibHERh6vXlTbxFqZT6eCmciX9V7sDeSM2j/y0c3jdsnw4uzkzKnOVjd7W3pd8vzNVm8N4pybmi6PDB1X5uJqVeRnDjY4+K3BjLd3ZrBwW1i9ViIppqrNKDki88Pah172J2zR7th9LKHgljowCBH4wtz7xZwMm4ztvjzOZ8eKdBEwvromKY32r8/9vR+AXykbSxgTQgJHbSfjYDRVAvo7mb61eOOykOJyPta0plzdruftkvQJ7s3AhZjAG9BvLuDSLqjKCQFqnrMt/vyslmzQQYQ7loVCk0ynxl8eURSmnK7EG1xIqS0lA5fc2Cp9asnKQsXBA91LzeRlVTJ2r2CaJvJj08wGqPcYGbojh8RaeDF8F0THQtm57O8jqvrcdfun/L4PxK+UjT0klrGMLZJTz521QGBnj2BDiQpZvaZ72mMD8dfYcgaO213eAGKVUAGVlnhgaK4dAwk1WCSGN/i5bRtgiwEF85df3AFd9WyWNy2tHsRwxqGYHF/vaVKRdD2KhJ/SQ1fEYq81KybjHdqb7nVxG4sXzqsOxIukhhtptlFxp0um6Z3xDct8xgt+JWj3K1uFgFgDG8nWrdnThWiH+uLJo+XdEOafG5WBXKvv3r0WXHCxL5aSgAyoMmcSI6++dC/218wevTJqBJzIQYGdgOjVsqwGjgTvvI/MiFIytQGgmDykhNQJ4vqOnsyy0v+P6EWwtZa+eUwqyMNVGno70xMgz9RnaGwVBCbxLCwL36K9uXhroGkQGB4Pbpz/9rCBXb//Stn0ya3Yeu6FbTY/6LCQcF4GkdWKA4W3Jq9JROmpaa9O3Gc/tq+8HCHIBr+Sv+t++AwvmD85KEVnQB+m7pgMLMALzW0zXNUvjMGzJ3BhZE/AzlchQ913nnlydP+3SINMTwfO5RZNuVJsD61EMSyV/DcZYoDoASreKX31EVjn1SZRTxZXMD3eZ8sv87AWCOXi7M67Z1Wp7X/P73rWrQarD776Tfgjn/W9lTa3i+a/ggbWUREKur6qftB9VJHZ3BlI//F/8q9RcVgJ/pFMjgQoH8mr9DbL3q9xPus82Z1Pn0VEZJzAMSELQhU129SuiZnYrgA+E7fVsprFqY1RD25v6X6agVbnNjvtDElpA+sZN2Z2s2U1gwZwniteFcbK1GTPwehiAsgaRC4glHtWuEIaV4C9Da56j/zkNH6EEWRGvRt2MrZ7eYuYeLdDhhJAZlYzX/qKnsEyofNyyl5g//GCP3U7OfOib/hRvOwfvlqMijbkC5jAbBva/VnVaEIQtnhH2kBVHBw5PW9qVr3ayDeU1HLaHobDnpH1ps+kauqu+aiZxcwfkp+957GvTTrt211mWjlVb9AVdJ2ZFNA72jvDdzapxGlj6Wtmnt2XADFPH2qRNjiG4BR+zH4S0LUuzdYPjNzAq7Ib+Ot9d4DNqM7NF9Yr5ogrlq6y3kVV52/SW/jSMrO6JSqT8d1k+jC4raWLB9NXB4COLP2U3/uBt3ZFftf3/oswLhOyAgpQVS/9zwJo6mUXFj6Cj2vdRflGGTN7KmX3ZdKoEoCcn9egA8GGZtQ6UpRcblIgz/xWiHeea8ByB25Xn2lVRufgkZp7uJeVTjlV3gQOPMMVWTeV2BwaRjGHe/8xFer2/dJEIafzK9OOXqWWmttbb/tBx1edbz3ZQ4Z1x+LCqt+Z16hMrv6FNExDT/snk9vBfYv2syPLKE3U8e9FMBAQhsF9yi1dkd/8kp/Aq179cJWYDF7IS4KqSmnKRMmEfKlbjd1M+dvgEszSXhfLkhkPCcPyWHwv+VODy9HgZd1ZEleCd/MVviVn0hisJq+yHEiNj8vtkuFhy8Csp9fJ0pQd1o/FbSjWH5nBiq50/ommLNfjpazwi305CZXXLy9TYKhv1DqI42JLAXXW3fxxkw9bu/Q285wcxNYKWQbo+vT1sMWcXWOsS3apN44lFCHBW1GTBD51e0kJrNInp8SfeXZFPvsj3xu32b7kq34gB39pSLb0YR2HzrZk7Qn1mneg12Rb76mhhlB/liGgxzqmRsXzXL7X/eiyNcKrFvuSlq1FaimvJLug/RD0FL/b2oXUdkXSeLExv+vAjzICyZQVB7MPNlmJohcJOkoitkBJJWQ4Zx6r3iXHBZ4g4uB5ZL7CqLby/rD34H2H3H9m4aaZaqvVyiPNcmtRYsBzZhXUGZD2moNayqQJ1NTA7iw7C4OSNeqqj2xFAvX4H5K5sq5f8Pzbaff/5x+8Gq96zcPz+yauOXJwv4RB2BY6aAbYu0+9zV7VBMDM5Lb+pLStMuTvUffZeeuo3ZmD7qnXqMhMqNEvhgcpByoshca+ZO6wXV+IyVc/MjNaMofnsbsS2bJM4/OazGD93tIv7tHgFVogUgPF0JkmrPziWwJx3j+v3bIiCVKXuAp4Tu1vmHJrssHmBS6+L0nXrqm6tvbJk7HJ1PN2W3QNPePaM6c8P0KdezZVdT+lUQzC46r7n/nEqd9vs33Lt/2z6ohNZYiU39DMXW1SrsCQK3wyzupVJy1xaxY+rzlZylioi3D/PhLMA/TOVN9i7R7et/CCqXmgfff73vJRWqWfLoc5uGeZ6mVmtsfQxHXXRM2VpfYSwJH1ZOAGNGDYZFBKVjb032w+ZXWdZc0RjTM9AVcVTaRIvaZm6x7GlrSkIIlUw/Ghcw+gJw8lacNkhmx5JCzvz4HxVi4lzHibompKnPItby3HcpBK1m8mzYqp7Mb3TSrz4/6LZ+E22+6KfPG3/USTkW4JBkf/8fG4ONy6unoAT/ANSopoVUdLjuV6rM+fzvNSmscLl+MeJ040aFiBWCj954W5xAmfX45JKi+A1xiFRU2DZFtf267OtCqQW2q0dq8IuNqP0vSWQJzdWBkKSgL0pIvluVlJW7zcqyekAOn/5/k9GBbAbABfBBBsHUx54wwnCAAOATW7cgXjklH+nifTiPS3HGdGvOuu37oRO6LxGUbB22yZJ8iSG8Gwz/vUX4/bbF/8VT9YTMoSLsCXuqT8LMauvfs2oCG3JR32PE7kZimccif+TqOv4YoCdBP1CwpsvRODyqAE23cdZZhMtwm4SdKyF1hHFydrwz5uFxqeUY39vCmKhXgsBngmIEYN/BpImU5W+LYYB72lyRt+aBwIePLawQOeA1dKErmQz6O6Y5nUgvvBiGiQDu36a1CqgGdvo/XgLmMcr4xu6eqsXi3TDI8RB6Xh6QLlUPY4Y8S1f+gTPgD33cIV+cY3/QJe/gOvLm9MDUjNugcUvzUHs9H7WFU2DUEf5OEMRDlmMrbI0i1JmG1uVyCd8DWvGdRSAjlGKNWEzKunpNrQ5E+jyOvKvYnuZWZeBg53vyZorq5akHDIBjU0G+euYi53BUsiJbvGXnG4PTvNniaAlMGTy6QWB61iNCRhzSxfZ+POiveeMxDQk02zhaqRCG5d7iK9kaA02btRuiWp3+PnRg0WvRoZtqZ5FTxeBjLHfbzUIp980ulPfdrt2P27vvdf4sFXPcyHioqoamFXWN2nGhhJPoCcEdswW4GfRuTlBWE6CW9bewIXf/tIPLhMfXreAyQWgzBxGlRns66hpkd6dZZZai7AhJyN3WLfFYK/wvDpIWHlUUK4dCOUGIEyoGq7wBwNTOm7THYQtKnrrWQImlQJ9g01gF4ZO//oQXE2ilf6s2KZ3u6XSf1Xz7Uqy5dRebkza/BtssSIADbciJqH7i3UKPUJH1/2edXZyN7h2R/5dHzIr/2PcJvtS7/6BwKU5WdH4mb1mnSpNf4EqHkXRSCAJdx22AL+2h9n1lUcD/SLx9rzUi5DGiZ3otMhntfQBciAGIGbjDvoh7fz2rw3J6LaYdLbXWZac16R3YywL5q8ZsY2b//zVu7M+OMkldNhn4xfadTvI5illcTgXPLIaX3tbcqY8lgc6t5jE6Oq/VXmdklyFjSY2CUrXoxc+cq0eLwSzQxFWhkqjJ5/4Ho0XN13//3cT7qdZ+Z7/va/xAM/+/Cyb5nZ7OnmBpwLqPmPk0FHPzzP9sm0mGaTbJJh+gPpwpypJLv6dsUJuLUBLHCfQTaRGYK7FUsbmI3ubQyajyxMTlplti62q7E0tZZigmc2zNbZI0HNKfI8L6bfrbrnjp/fuqKdAEH1JC130H8gU/siS+L5V1+MbmFj5lcySp2uDKyv3ZEMsXYLrFz1y4utFM9RlvmG7McI5h7cOtPNHmBTa4WXsVhe96xnPAmf8km3m1l90Tf82AQA5d8FS+c/NZkHgGuoL9wnP0qilCFkreVOgsya1ifbel2bpdqkd7Fmfwjzs8pH6vaoT8mbS37QPNLvps38NWvVI6JTml0S/F1mWvv6YvgCYXbvITnGBD0BrkttzIzN86xAaQnyWM3LBVyGZnkmYOmr73RZCWRi8HRKAwiGt63GA/WE09b5D1lF42n34QR6MhalRhm9RwXUknH0Dlkb4ewVblrnT4OoqdoYnPbSdFvV0+f/qd+E22wPvvphvOwHXhttQXG9MC9Qk00ledrNF2MR6/o0YtNWLJSR62CxIx4Dq+mZSfDznPnTbDFDDjwrzYzb4Wt8FN5e31D0EGtL9v1521nSGmT0bPZxu2vwWA1UPQc/CYjW1HHe5gH6eVjiZCa7ysRPnozW2lbp1cRS3dzQ72v1ahQIMEvnM31vrV2yCVxKA2gGT6ZDVPDKvF3B1XPwvEyIrEWPDFzGAvt54QSuHgX0emWXNJ/OMhe2irI8+7fcLozgS1/4g8vvBiyqcQjy1VeNYk5WCd+G0nMKLVE8wexiCL4pW+d10jO05Gmo0/VKlTVQFoF+zX1C11g3bbinA3orwAxkfpOyr6uT6XaXlcesGqTewA0rliub9QgF3o/duHT1YjTIeHgr2cGewiX2ItnzEFBFbw+/07Mh2OxeFc30fS1/51DLY8lH5mFLiVT2sLgVM8UKq6BrM0HuLuTgGeabsucmpVvPtoXkE/aZuRph2J+8R0U+496X39jZ/Zte8s+KqZfNcCFZioSWc6ReTDWvLe6+IVDct2FWgqxCBxoO0NUJ5vlYPUUcI1ywtGSvegPr68jYLZoAyGC1jjmW1aeP2xUvDWQwmPWTRsBEdOLoRhq9wEdgZEdYjC43medtPaCkoR0HsZ1es/2+RXhBxpOLj5xhxAvwvWXEIl+8JQh7BM9rELZa9yTLGw3TtAyR2TLg2c9v3XJbd8sc9O7MfnMTA7TPv2XczMv+4WuKlUeioTwgwCITChyz3hswjE9HApLSkuCZbWHH67K3gh3MIIAXk2pWDMReQJ9HVqbWuJf1rZFe0kXdnLZc11IJ7Cm9XZxHI+J26Ye3ZnLKjv7MG6VR1Dk17a8TF6OAZmUUqCl3dVW2fs7Ce3tUKkCLFkugerM+0c11G9ljUPKcsBumoztYz1tVDefEEBI8LveKm5XB4SBryPbz9K3vPavDa3bZ0NcjgbE33Ef/lv/0Vuy+b1885YyVEZWeYVWUbu4SR9tCBpOqyoF+n3tBLo3dCjkj2z8uGwuDrrOabTg0qjgH0nv3p8u4o5lbsVTUiVppLItVETjehhBthQqN0O1S0pAda1a1u7cChDdoYpcJQPIpFy7cD2bCa/Drmy3SyAX09MMSuBOoS1xKG8Di4/YIJzAZNzCHN7ljWaZv83qaSg2JgVxgx20tawiIwFSWx6RnQWt7S2bf0z8NoB86XyrzPNH063Cb7Vv+xk9OSQNhWatKsCPpLsagIGDPOYE0Ut5ZaF8udMQZVU7oMdEyFGtDYg8d8eksXsc0lT0UuAMr2a90hKYBnfzo+6IdF3tgmEsvQuMOI7N0Ghw8UbldnXgic3SILS2vwa2yYAhoq0G3pJPU8bRcXbCoQdQNMJPlhFOd66u+z1DhMKSt9o9kN1cB5+t9COgNLYW6gbYGrUcddOjv1vmk8dCXjnyifpOypTQrGUbWYZbO/913ZvaP+9j7cJvtm7/tn4N8V3WoDL9s1ocdpfkrdmVQciLfzRTuRHpcYl4lnzfdrHqONpn4LI/Q+fOUxsOIyAoHSAIoyYT4ks9kgw/VlFdJfP88Xx/bozGzFxoi4+Zsa1bNcbseWpAuxEtGpS2hKw0y6OMAl/I1feyz4hKwY4J+W9yXBGv55BMk5SVKzIxkzoBeLJQ0F8Vn4Fj2Bh0GIUbLNOE9Z1Dyotk97svBssijBE0s9I+ecIOLvOtr5oTgaMOtx9Q8B3LnA5/7vNtr95f9w9eCphM9UFHCFUa7NigMRo/lviEUSeYJnWCqnavnaOAW7GvgkOVyMQWJi+lQhjTArQekKKO0fila1vdMV9ynfJBbH8GM/I9+mCT/HZfzXteDx8hiq3afVYR6OCS/b4tRJNgTrN0jqAYvGBXArXoHXypMdTxJviRXApfuSbogS58ztJcAjr3zeAyutroPj1o1fOt01rSL9NkYX5OuqUXb79/y6ad4ADyun9Nvmcaez/vf54n4+FuGAb/4238SIigiz5llug5r4qcY/XAukhDMJOx3iooFXCuPJ9GZftLkrJwczAs9JnMbksd4Oj0YeaypS3+xAL6OWb/XqWdiu8cqH74fCnvYrjN8gRhVeayEjhsP7uwJIeluEhgy5stK3eQ4r5Obu/YmDh1c9sCwewA1DmwCKJJVnec1WC7NBKzPkQrL68xvPX43GzI0/az4mypYsf1eBWO2iOcjf1jiiViWffuoj3ganvrkx+Fet123f/O3vXIZ+LH05XEpMukgMGpl8ldgtYezkNh3NaVwPzpsgeJ+n7EMRtnX8D62+JplDf6ytpGeMur2HuCOAl+cfBL3KGXNcYFUffBD87mwgmxX3/FUtVMNLiPj6J8Okz7sESBATjaoa6JH0FAB9dQs6QEX6ZfUcHp+mnGRDM5H/LhqQOULRxcielbUQxoxaKx6qvqdBmNIjZ7MDsAWVxMLghnBeRrq/ky5VY0EfN7zfzNus33pi35ouZ6A0zqexnjR0klMdpxcYtSitRyN1BX2xZTcd6IhmBUbl0PaWo7EbQR8KSOn7jbpffrSvE+aECcmK+zXKhNHbwz3k6DLHXsF9Ff98JDpfLLUTEE8NzVdz27E6xe2aojWyak4l+ZQGVOz745adoPoDw3t5QlZyuHori/sCpRjU8M3eWdcPeACwMgvDWRbEj4NrlvZ/nm+rIvaHI5lbZmNGn+rAi5d9H7/T/7E97+1K5JhBMjaRKVpF/u3mqq3kgMTCMtplqU0kUOcKEITA/8hW8MK7JlAXFeGlBYC8bnPOhl1bjxRlf58W7PEnjAmwxJHclIZRl4wzAtbcJE7lYt1u+6lcQKm5Un1SMnc0b4mUiNO2PT6AtJB3njeBz3g64FiGwFkpva4pF5LjmRr93YxspKZTlYGdTUHxq6zv9l6NMKZBGdbYegHOCTMIHuQ3e05u+cbMdBu3e4h8vrnfsLtoiJf/O2vxAOvegTrDChKL2/iDiTDaXsS0CTU6hlA7zaBZOGMAQGHAjHT1AezIazbKfZRVv3+tBSVyrCm5TKPbOtZhvYy1P3NNN/ZsyLHAT4S6BZLHbot+v+43UXDi30U8OJH2b174cRcr0MDSCau2iOS1ZHuxHpjXhpAXUojcK5khgIvq3MBZxlFA7G9Jy0vavKHrcH8Vll8uTcti4PfDr6hAaD9+QLyYPnYV+6289/7vvcTZ9z7bbYveeEPgTEiVjlaG1aZfhElg370ODL/TX2fxag1XCLUfIWJavg6PxE4R2VpfDQSObOYuNYx4ndhamT9Hdm7DMcghpplSldODBvawRDnt9Pl2upjd4mWTPHhFCFxS1Yu3XoNHGswFgsLwzqWgWrF5vB6GhOxmFr8mb/6V+G3v/97NkuWAclkkAakbYfJqTznjY88igdf92b8459+A5TNi/cMHTYQz+C3aTsZO9O0nAjLArkY16wymYCicZb8O39+3m1dkWcps8e8L8FQ1gBe1sZnY3vHqoSMMmlbElRTs2vPwHugYg/q3oaOpeF5+vwqQWdW9hl3GY2PaVzuBymzGgp/qctyXpvnsnfLXFcbVqkMV8Yysd39pWYEZeHDazKBnxz8eLKfy/XapejkENNVzwst2zUb50s+6gPeE1/3qf8Z3lHbg69/M/7M1/04vucVr8n8eBpYArIAuq35RHuOqpDuXeu0340zrGLdWUH7rz3m/bmfeDs587V/5Z+UFyMkjFVdEdw9oCODo17jU9fuodymbdrnNoOOMqAwmnaJ1OuFmK7ksZfVwIKLSt/bMIazh4FMAaw+erK7jrMY+dmG5nWfWnHMuge8C95xxTXPCrXOSIGYAF+/0+0Ibz04621rNmdBGOw0ygCAfgNIM3TU3V1y/XZuz/pPH4+//kW/DX9yPmhBho4/+st7lja7mnoaewM1uFuz9/TrZ4hvPS5ovZ+Wvzf48z/1dmEEuyvye/72A7J0Cl+rbutzoOA+/s7VAzhlWjKiFtmYy0ojB4aR1mhSQqdfD1Fn7I35ALV/f8t7cI+mmwY58q8G0Dnw3Y3qZOjf8/qAJZcTqf+IoXShxvoznRblFkt5bdWCy3Vpsq07wo0FRjYvhPVXkAbTx6HyP9PfkkZRHkPpAUqmiKXnAbwzts899xq/8f2eUoPXDh2I74YeJ+z/bxt7Ii/21/CFmw213LPnf7D21ATp+3mi6T7cZvvSF/1wNNzJiyXXdx7Zwoq6P1aYMPF2dC8QDzqPxUAahP34f2tiLt8x8oVk/TcXPEqQ7RvHA2Tl/ZrTsDKEAmhex/Pmgkw0FIgBGBbQz/3uRZyUZ7tH6GQ9CzuN4UqdXmX4bnKr5TWK+YuNr/lt+7xifXaCC8DjH5dm8jQqlQ7vWH7v7SlPfDf89S/57XjKE+6gpQknnOjrT7aeM7Jb+typaSUx9g4Jetdeg72Bx/Oqu6S5121n9+/+2w8iPETrQxinYdL7BfuW1CCD5lMVZg0UoHsBMv6Q45arJ+1gHHZiimU09bYOAV+H75q8TpLpEh1WE1uVXqUi5wiWAvSRV35f0wzvTxlY2iCJelREwLpdeco2K7ZeWZm6KBleQ33rrd1Z8WTFes2gsD4BTT1bIQfb6vftfLTH5p2xPetpT8Dn/OF9SQyuFiZSZkqXbZE3W/YAAeYtmdvhYiQMT2Za9Tzt+e/znne7iaaX/+BDeMPDv1BxSShm7N6TQKJM6D9udC1Y/QofOMUYQTzKUMjmoYkDUKGd4/s+ED5R2/uYM58lRRDnlewwk+MRWMbVfieAyfroBZzKCG2VK5UG9xeJrv+N6k2QBrhuVxmep0nHnkeCR9QFVqtY8cSsUJeZu5ZAmUFxibVLCc22BfR3IuLP2/N//wfh4z/qfWDlccmHXukFsgbtSKli8pYOgtsRLzHzzQVK9JQ4fsdHPu3WE01f8sIfjvukh6NMz0O7EtjuKCliB31cYKes2f8fKMY2E68LWl4QvgHaADoDsU7ZXj2gTcWcEohMHBNVVgBWaIaeHwncsYxJTjSEzNMp5Un1QrZ+p3SpFc829G/cC+CT1auLRPxWVqige/nXdZaNkoW9A0oNYOvDKNdnus+wap5fku3rP/e3TrbPHIOhCDmVWjO+S4wN4zWdPuB1/XgOWvcozr0RPvmWnpkX/41XzpWAT9lL7l13rRG0s+xNSxW2S0jaAOaUD4fl71D6nNeNOQCFsCJ0GDpnRsnaaUhzYDsadKONhIuXar7ae6MD3Agi0/6IndRJGH0Q7DYqZ4P6flj2Et1zzbRcBrKwK3C/BngmciBb7RpjrkiyLPgMZmcluUrk6gVoBJbnVwJ1jv2SYf4pT3zcBP1c69F6cKoSp+UWWX7/93KQ6xnITyl0On9/5jOegE/5xA/CbbYZFelZDdVqFtGGTvA2qOp4rtky1+gkOVl7WKJd6AFBpyPjMnp3TAaWk+HRIC/G9oSi5XcFbO5T1ue4ge5bZeLh7dUJVm/JPEiynmaXwJ4DVazyp/IPXDz4Pct9sSe1OmzhD+ggybwnH3g6ewZJpKXOunfx0PAelYzKmV8i0D/7w56G5/+BD67naTsic9XoYaRbzi7GPj64Hbofy7m7I/Pzn/fht8nKHKzu+r08E2TfvbpltYCZF2P9Zi3mwFNdfgQz+6p4OGLUwBI2FqkgguzgEpTvMJEZOHhq1mtGMjyNgl6XBmgPUAek5/JVmo1BlqdPPzrhkcZxqrR0THAvgE8rK92Y8iamz5Ph+2SpUMugsc4k8vryEKALwWZS6dPZI4/+0m1f+Zm/BR/ygb8aHGmbdEnD4o+xP72uoa/ABwe8kcZ7Pvlx+OhbLr/xZV/zw939ZU/KQStdu9F98wrVtmipiFybXTRyMLYM5ky9N63ZzU386KmVpzE1eOf+YaXls8MI4HFwmvkY9VCH9SAVh96FmtywsnXKpZF5IIZOIn3Yk5xo7E5JdBuGF1iycy+YFvAXfsEQiNYSDCaRkGgJQzbPwID5e5NGpP/6l3L7P/63j8FTzy7L0MMiaZCZxVYGQfnjSTVVTmtD/d0fe/+tXZHf8u2vBOtYe8LWrqmJTwPqY1e3YWnn0BBgaEBLkZWWCB16dVR7M50Yu42FsamTT2ksre9zWErQM8+2TFUVW08Aj5ouKgOrHsB4PUpeTUmjE1BIxj9/3hmolyUct8toyQRgtHGDs9yTF7yrz6kS1pEStTivi5TDdMiQcVlPI+cTYfPvr/69h/CtL39NDAr3Byq40tdNrv6VEWMVNHae6ZmP++1rvXzsffj6P/0RuM32rKc/ES/4o78J/8uf/wFw0MoxCD0A+gQVyxBLP9v0uRc52+6KvJ2c+ZbveGXXarIpH66uwC6T4UVBJyaa6EmJWBMrfc9As4okrB6X1R/tdMrnT5vs2C+jpBTQbZr2FNdvnvpexmNG6Tf6XqBxeF2f+q8HnyyZBMwFQXq9UZ3RlUiD0E4Rld/L7YLh1eb5zUu2ILtYES1pfcXH0kNkOVAdsfc9lr7BUYPdOs+62+XWnGr92N/Ws7/zsmyMF3/vz+BrBUD3uj3vD/46fPLHvX/9DoZJLw2HgiY5yoatBzyyIX/3x9yO3fdt985M8KTkKENDP4M7GTQHleV/TxnhotcXvzp6FpMQJnOXC9FGSlYxDs6nZDuRNXVgy2rgpBB7p2DpgDB7ADJy1JEMhG0dcN4ZAfbg+06bY4U7ZqnbRc9j/UP1aOt2l5lWgiuZxSRGxgSLBB6suj0G7XdqfRumcRQrx3zpb/fjvmSRtIuY2PDlXJbiy1/8T/Hg638Ot93+/P/0W/HMpz8pDNbTH0O3Y37nPPEaNdmS5vmf+htwm22Pef/Z1/ZKwMtM6kJDCRqTT8+Y+NHsXJRkOQJLzV1UI162cgtW6ucJpZOV1qdhzJTowaGX3QZ0AdNgcIjrWhDgLU+qZ2BPkMbEyUodeJaMA1K7o2P/8++OtZzbz7kz7B798BCWL/ZG+GDR3hkrw7DuR5aOpVmGR9gYrEQ2WnW5SLaELQPZ4+SWQ851guJye8Mjb8F/+/kvx223pzzpcfiGL3x2jUEmZw7KOZdoWIGlhVtzN5Bn7jHvt10r8mt/OOWS1Upls2qpT5OJ8255z+zOCUg/sK9Rd7MnTe09ZJJqIm208SQIud6nznRaphFqXxm4+o3cl14gAS19+sXoyfRTf7tduBRrJhY9AK15iTz3JMeqJ0Gh7wrc7zbTmpXhkkkC1lVuJNgVxAVsthitGT3NXcYiM7alRZXR9/SsG7fUkhpRJLpA3rsrwT/9F/8Of/brfhi33Z79m5+Or/zTv23pNdjz0TNT2jF165aP/33en7yddn/5D7wWr/rZRyZLJfV1hOqGAqgxRF3kCby9ET2BxDojLK2n3PnfjFJMI3LtE8Rbs+xtLwkZvmSSUa5ELzFdhYY2CGQPYiqL9sHlEIOx0vSnMjKU/Bpy3QQ5TAa9fa/TDFYL2N+bl2a2bELTCCy9MIHJSoUdJpt6qrrOtVHpqDRRuG9ZKd0rWN2NoC8vg6QxB46HKCG+UpJenxd920/iZT/+etx2e/4f+vV49ofH00nU8HdG8Dw9e+F3Z24Y8/7BuM324m//qfDyEO9ztnSEIZ86tGDC7MToU2uCSeD5JlGqwobVUoaa3Em7KuC26zjB56GZKxbGDp8c4NLgHFB/frfi0j8s2l3psIwFDXpOONH12O7IBLm3pFnPPxuTXQf31UErB0felFrW11AURjcSb1g7wVDAkJM271u6/LFnWaArMTcRWhyFjQU7Se2W79ewkkPBjPk7T/30r/gHU+LcdvuGL3oOnnqWOARIroYNviGQnQml1rM/4hm3Sf7sinwk15vBRHwMvPNzPp/HXhHVa1XciFNmoJn3KF/YYxQhYT0n89FrtCfkk+EZRryCN/Jx59TsTIanZEEBdBQjlzwZClyRK4DIHZEuJjIICH1utmCypIz1QPceGT4Q4uJHD5BRr1sB2A8D1mVQmpVK5l5cSdU46Go0srX0Enm850mEmuo6doc5GcRzB/MYO151HrzuoL/t9qz3fhK+8n/+z8sw+YJhNSZLBOyfL3je7VyhX/a1P1StNrR38x5Msp5qamuOpk0mgtKdawJ6K6oqoOhxznjCGqSTH73TZN0fWZuA6tlQFFiJlWqXum+TX8drJrNPto76oOEuTI72yJzQUueENhaNodGB7nG7fAAkK0mB3HaUW1bUKHB2pfR5JoNey243Gd1k1rAA3INVDBz2DzEE6SEsZUs1nlUZKAP4Bup9++6/9yp87Uv+GW67PffjPwjP/+9/fcuYKmHcjIb/3E/4oGkg97q98U1vOev3h5ppq06zfFuPeQBbXItz12bpdG9tPVLacKqd1aiTOQ21MAfe0wrcErU4wXgQIAnQRXJkXQQQEa5DU9ZNL0sOqPff7zbIwpGvOzlTeoKAFzJ28AY7w41LtjkqLzrIPW6XkiatEDV9HtXS3SWqiyxvCaQRrEGvoamGlhuWaYSrayz3AO+/bF5atRzthqUL78jMlY1IkTTkL/0rP44HH3oEt91e8Mc/Au/7tCcJgLq+5t+5Jm+r3b/77zyAB3dXpMVLmSexb5K4MGT93ht29L7pn2edewJgZO8rXh2p5QLnlCLWFFfangY2uhcd1pInZIkYSBLbqTwsVq1QbMs00AxPN6WydrkuHYfIR4J49BiAQWRABZL1ANbuTcMnkkAAs9uOWcQEMIKlrcDUFTshN+wA/KgoU3RA3ZHNcJQ3heqhv3H56f3B9CzdAsSJyxz9G3/u7Kp8wUtvreef8qR3x0u++r9ORmce0k15/vjoD3/GrfX7l33ND0UDj85rP+yLlmVYQV8uviSIU55brkgL/zjS2zKkLgho9eh0PDnPz+ramt3jVqMHtQVS9Kerlu+/o2ZXd+X8PlKXo0OEw12JChCbx5CRlPI3ROvXeEDydtzu6pbUbHueSo7YCshFtSjEQrU9RIqgdV3ZQxsWRXHtL7DG/ZRNKtuWOtYUED1GbtugJykO/OOf/jf4sm/8Mdx2+40f9F74yj/zUajRCuXBvrjSLUOAv+f7HsDPzp4ma3Vv1eU5VPS6iyxGnmd1b6BcioeQAI6iLVmzB7HqcWnDUdce41tYrx2Qhdb+sPL4tB8dJWsa0N0UNdiEDC7Rg9RpHJknDRKrQa+1zDnq9TaCmHS6Y/coaWqwKAAuplaawPH7KOCaGMBk3SzohlzIHqLFTQ1H0s1Gja4QF8fLG+Njen56wGro5UM670bPU177opf8BF72o6/DbbfnffJvPDP5e6MAdS7GM5/xZDz399xOznzdN//Tmb99RtOWeoUQhiOCyI69HJYJGFZfgTFnXQuQQIXXOgelTMc6bX7nY4DN4gm2AcJTNL4d/OByTaZP0NIgByfTksjCjRhyRfU601MvDSen5oA1wxBOQ3R71s3J7tUtmVbqUpEF4jxeXaSxYSDABYADcyPS4wREC1+J++DvYn352xtqMaBON/JEMIfR8eW1+/dtuadmy/DpX/6Kt8tV+fVf/LF46pPfPcp1/vvc//F2npkHX/MwXv6PHqo6pUds3/hSX5ppuRZrWcCWknWWAKoM31ctXS5JCKvDipFNZrb57CmZHrnfnADN9BJYdjhX5YrOhk7D8/yDPJ5XrJ2a3pgHqwFvhwugZA6Hcyf+5T3uDCGDw3aV4TV8IOsOWbPzY6vv2fVCsL0YCpPXGdqxjEmDkGQmd1KVhiWEERjEVUmgkNbQ8wFASxqr6/I+vhzEA2dJ8Qf+3N/FbbfdE/P1/+vH1P2e/eG30+5f/hd+pBUJxG89GsRQ9kZM1Rf40UY76t1McS3XcaQ/nb0jgcLqW2Yw+ZnndZSrsLy1vGpPC0ru8DxKi2hpgQINYEhoryNdi1jlSwGX8TptCGpMlC49sMViaCfcA+AbZ2uYgOeN3Wwh34R9DWiDpTuuAgLU7gFWVre8sR3AbD3vXGlEt5yDq4G6lgM/9STx47iWSlhxUOErzrLmL7zk/8Vtt4/7mPunvPnkj//g28W8vyZi3uPZ3higcqa2wyq6TuiytARuKdxkGs+9SJD49G6M0sRslq7rdgVKakwlpRDAyMTTKQBe2hzN7DVrSwOCiSGiZJX6xQuc8pDGSDaiB6d6pz3WxtCeHUe6PEMCcT/dneWtMcqhy/q/Eg9P0HiDfnFTtjuySLtWU80GAw3DE8hZK7v7LU80w8LY/F3X7FP4NzLbG4lO8tnXf+n1cuLeqteDHT16jhlKGKG1NNgJsp099tXCzse/5C/9GD7qQ5+OD/mAX43bbC/4Ex+BNzx8O0m0S5n2509rzPcq9UBcZ1BZtp7zsFy3MTV3snloby/gQQAJASJpaJk9tewoxbhYm/FGGF/P3xPIGAYGgXGJvgI9mk3LleoKaGF/Gqnex1C+fuhvkpx3+Tq+vg2XkDlulwyv2ZUrlgkP2KqN0QOeqi0Q0DQcq3T2vw22yJZKA92zsHeZmlxaouK2xf25GNAcHNPtSfYjYBIszPp5x5t+7lH8gc/+O2+Xq/I2E0379hVf9yMyTkkIm/XyGWRgO5TNxXsSlhu1dKrKzqeGkLVn6DXeFehWkqVnSfff8jRTHe97Ll4ctLSY+0Ru6ZIa4V7EEhG5p60DTbogI21LNyPERSkuSGvPDgfNdF/WjCviXPYCx+2Kho+2KNAl4OJn+86zulv24OBtqUYTb0w+U+lZSLaOiVnXu4doc9mdWh5DrpPiZcYB6p3bakImwa8TNG4a229d1vNJ+1NFD77uEXzZX/pRvDO3v/qdr5yP8bHu5gMSFrHny1o/WXUEHNA6n+Ol8qN7l7H+rQFq8j0DwECAZj1sK5tTL5vpgDee220/vcgeoP3ujtblpjLEehIJB2aXMqoh6bOrOtOqAWInlTTWcot+eI4NjtsVDd9sG3hqVpSPzG1jmtoeZAkTwxi2eHZ22XJTxtGuSxz2cYDrVflxnL1DMPrgJfDMUPcUEvYgPcuQ3mgkAvbfX/PXfwLf/bIH8c7aXvwdP4UGpFUYs4Njb1tkCLl5yLhUJSUnpnhmuyPRbkGgvCvV/t56vb4berBq2s/HwLjcoPM+Lro8vSJ5ful9AtdWV6V+n0yfrH+i73wBLj06EBdlR1JyQovhDCfoucgXKa/bpauSpGyt4WvCh2xZVZegUiOAiUvTxIvSzDvZ2KLFlJE5+ISlpg1raePLWu11U+xwjlWeef894tDFiNk7WCboB+P89C95xdsVevC2tn3pjVf88ENRnztAcnrUygBQRkoPi4K+YE1CAdlT8j9By5RQhk/GJuePYnw0k5p4QTzSprxQ+aNemBgotoShRqfMKJcnsLD7MDVGYXi6Qx3rQx00HlfQn/9cXZLx924Di9w5blcAb0tYMASoPB7YZCUn8AZ7gCyKdYPVz/wSnrRMN1vKeG8EU2+WTcIuZIJzVI/jNrrnMcxJLVZjB1mhIzDLYJP9JzP4Cqrzvjc88ig+/UtfgXf09uL/86dyAJj59tDYDHJjT8W860xnGasc4z5dpLSfeEIu2oQlrXpkDyjQx9J5bRhk/pErMSxAzbJQphAhysCLDjdZVAkr+5b0sJ4VHS6RjxDd7ljkSnh5sEge8/6k7LF7YvhZIivpMntYRzN8NQLQMeji3VnA3el51kBLkYNsMlsAme1Qy8ZV7yLGVv569gY6FogBQKU58ikY+u7nQBiWs8AKrDMb/8jr8DV/7SfwjtoefM0j+Nbv+in0ir4jZYzVLHRW1LqcuDVAydjVRAR8VbGBQ/OZ+NZMygc1Rp7Hx/76Wk9JYsK6bUgaJkCZoqt7lUFlejUrKsy/xNLYGklZxmDseaw+2WPcsT73pPkAexXV87kPdtEWVxketvrVCxwJZA33bfYZ5Um5Jmmqeq17BQagqRbHaCOI+6YxjZAnPN8bBRdGyDyPNLIxsBpZMnwuxJghD2mUed6ffeEP4sdf+W/xjti+/Ot+NBiYABBGrqfFpGfS5ewAMXhroJO+eA2rbomPGQnu0ftDtnuxesiSqHuu5XiMUpxsLgZYxiN/JwHoEXgth6xi34vB5Voenz1DHj/BKoisNL31wLQkmTwR1X+XbTHu1kg9fQ2QqldmlpnPOkUNA20wBL61obiJFh99XhjCqHvzXhvaiGKZipQwvP5KD+LJei7GSIlkBFPmM3wRNqUUFd0f/Ozvxxsfvn3owXF7+Q89lJUtEDGrZfHqcbkE5JYhwgHIWEEs/Nh9LRdloiib/zLuRoBaRoJu15NZVwW/O1nVU3tjkTTtTVHJcRiU2hqHTwMMgLa2vmNqHGIkSGPwHksskZFYP8sFiWR4l4mpHAQft+sM3/WfYEC7DhN41M8FrmpEr0bBkeWHoeUG79MNHcAUYCf4y/bkWssarVCIqOIC0jKWWEKTO9/1wIm1pBp5/p7W7qr80m/8cfxitr/6XT+NV73257JZ0aHAzkqM76dTNLK75D3resxzU+MP5GL/SRDC1Ez7NKzArG/koCxhRPk0tHxkkTobldNgzRr4og1HgawDXoYbhB/c2CL1XqcjuOu3id436vpVGi3Mje456nwc3JkyxtDtqpem2BWAoA3tFUEVtAeEyJWvVj2+pFtGgZI03LfN16kgwRzD9SP4yWwEvsl+Ze8wyJZNMM4BWLF79SzJsu3/Vzes4Wv/2j/H97zsVXh7t6/4iz9W2l09VqMAWtwWg85T1FPV/eKF4fWoeuHS0QYD5HOGGhOo1lqcXD/vuo0yhHqkEEUd85nVU+2jxMEFI/cAkr1AwOqOjYWNKXP0HiVbct9xtYOldzHdZ/MN6idJ79gb3LmiXy52XQwk4dn23saQkqNkBlKmENAGObfPL8ZFa+llN79krkqz21hmJxXg0RONZZ9dfE8vjzW46eePEPRktQxV7DiSyMgf+5K//3a5Kl/+Q6/HA+cB61pmCBmM+urpQ+/B5ehrhjCtmyyGlNWvxc8B6vJQddYzf9fakqaTRdlTJJjma3XyLTAdsgssQVoKQHR+9tqtiSHrvOqje+pu5DEC/44cq99onR7++u4hCug4eImucPwF4NXVB/1O1reQLV6YMtgFmLEEbFU47+gGpIfEBZxHI2FeqicZre/DtTlCB4++Xy0HPdrQyJAT7Pvx0R6cwd6i4nJPMV1//n3jkcc3PfLY2T9/+wfA/+K3/kROxGS5s9JG1tWyvCCs496zJyj342wYAjePwYS50XHuWWz1nZOJZ3VmihNk2juAcTg90tir5JSkNxcoHa3TyewE7H5OD1xtDREAatzA/crEClqdaKLhADqITTaHujeRD4j0XAJDiY/bdUkDiG5fAd0GQYYVwOb1ungSjFP48VfjrpEzjALUhaVH/7nJQLby1BKofPkmMTplGH3DzXrSq8YTmc76EIq8Zyj72Jf/yOvP8uYnca/brtv/5vf/bIE48qsduuWbMCK8oNdqzGMpDy0rz9BjqVmkZHtWupHtTi1j5pVJJHMpaVDv5350lbIXaE9PszfXndGwAbJ80kVpdkqXuh6r/InZUUiPIbIpj9NLc6cYHqvXR4yGvcj+m2vRqPfnuF0xAkt8iMeFwDU2BMHcCZLAdJm3bltJJL+vDD96ptVQcqoGtwxOGpIGew1bJcy8f9VgNM1WK3dRWo3lfKQnJwCZ3po0nH0Q6Tvrn49/9ot+CC/7kXtb0Okrvv7H17mAIo6MnxldJyY9GrX9vv/OEIBbSK2oa2Hy7AmKczbITGqyTRpGTchA9Dca4AE6gp2G1awZQE5gF/Db1XjKtOgpIegoTwjgki5DQwNMBtXSM6Dlzm6oXApb3Zhke04+xfmo/Ot2neGNIQUQBs/fgDC9nm9lAP2ASCZJ0CeY1X0YPvwI5VUDWFifTI8E9Eg9LgYQxJw9AYJRiYKTGMVYZFSeq/mpHmfILHAY0X7tn/jiH8SrHnrrC7T+41f+O3zrd/9MXTvStajRm4QOJWEw7ynkD2NtMr9kN8oUgjiuETBnD0ppA/R3XfeFr3Q0Y3pe2tqs04KjQF5MWsZgBcpgVWsWZ7lhF8bVg2DtKY6MnX/DZKzgSxhDuydb36tEGgn6twl4skd095GhDu6KHLqel/vSsVKzo3M7EZydZntigJ5EGilHBpZQ4NHAjJ7dysAsJ4yQmt3F9biZyqG4/8b4lJnRZnQdHKrXRwfDZOb92dlX/atH8N/8yb97HsReB/33vPTV+LhP/76U66ONyqSZi+kTSi4AzfHFrJvNJMwjJVBKpCHtUaEUPhpkJj0BRFsbMj/oN94V80s8eh47eYOTrj4Fa+huK/AV2wt4ybaLD13AeWf0WGCyPnoAO6QnoYHdsYNMsh60ckDLv+N28QAIWCGoWYv5vRZI2vJO+Tq+CSq+nb2uT8b2yJEyPNeC9GywOXkyYugWK1TszJ2ryufLAJyR//PtADsYIq51Z90t8zVBfz7OwWy8BjsBdP4+P3Z5spvJbDGmZ/UwSIW27env7yA9bdhu8v6ZhR2cr379z+E3fNJ343c/+xn4qA/7T+aLjn/2bACv+OF/dfbM/KtUWzn4m58e+Zo+dq71nsDMNMn4ZXxZt3FrcSnun1s2lfrivZmc6QxNtSQJspwGfakvICAyZWVr9ajgzzRNwFwTVmIMjOdJgbrkqcKOwfvbEkyG1PRcc5/X04U6BLKLIeaA1Te8bcBzLiT06+q9t3ziKEtR4Kb0mWSW4J+eHC4qZFsB30vaRNr7fMr+ZBNHMLOOuChRIiIMbgNj46fP3tIIJ2PnwiE1W0mDOP+8yQktpDFscX4Ex8fbV8cWb8ye92GrbZ7eG2SFe04W5QsZzuX7v17xWvzNl712rjNZEx3sgbbsG+f1EXM/47lybU02M5fIphfHUrIQTEhmNnVZDsohFNCR4CmAZhtO0MlyHwV+OW8omGd6Cc40uON5Oig1NDjJyBPsdY3VoHgkwiq8wGztLYYtD2ijjMiE6de8lKEgDVfzO+4B8FPj8mWqaZn1wEQuWxdAS9CTxUda1EHqeIlFZPw3+8UxH6+bhybouzTZ9vUZ6Z+/bCPykAbEFbZ2EM83ZydrW8qc/fvsSTy7JdvXIz+zNtPZzxo0JlRI6358PtK4JZBOyDVjoix87Q+fQT1lbdcjdmwRelEYGlCAG73+OuJaDTugh8XSggzWsSw9uIqeirq+zsw2yLLUGKZakfzfeTWVKgMN8vTM8AUHyqKXE0Q0Dl/2qVFwfLCEBCdgZxszH3LfunayfWK0YNQ9DOQeatxvE/DldsQB3GlxngwQ2turURhRSbdjjKvYEwQ7ppMhgLLLGLe1FhP0QdxeEYMTtPnyJ3ompn7nUr4mPcfO2jc7Y28Id1+AfbtJWXMTuqw6KPCaHdMzjCzKN40sw3eLrRP0GRYwoT8NOSJx4KcwlEy3BnynVFi04gIWY1/QA9qcXAEblPn0EjxTqzr3JYMXUOvTYNUjeDD3ASiUNobW1PowtRWQl+CNYnQDZRJ7OMcSLlB1kJ+bGs8VjW7IHotSx7sHEcPU6Myjwcb516B+F8CbsWPPCkppQpCDny7MPQvi0agEPcEaYjQliGeUYjJ6yoWQMtmIxPBG/3sYhlMuGXLG9OYsWfaBa7wq3lKPFplvlF8B8GDm3ei2lBWer4r3eXycUoKBmY+b1dv6SuNHI+0vWdu/DL6JHlbyxSgFPYiAK/siG4s+baRkmu40gSCy8b1A0Fp/pKyjT73Grsmazfx5IBgsXJ6QXmHkb2V3YekaR3Agmz2JTigVkIu1D+yt54nuplGqAXEMV2y9SB5PGeZtxMDSc/QIKK/HbRgelDI0guL7Yn/KHWV+NTVLacRQVqeZbv3Q8lwdl9OC1iEM8QBIfJ/BaGTGRFcwcFwXcTcJSEtm5wBxv3auTID67pQFpAy4jEuyzOf7DA/Z4RtHiGhAutd4wouBvaVcAmA/dmLdlEnn9yw234zNizljON/Kd2yyvBljfoIcrAbCKhn2fZwwKg3tDdLFMzOSxSkbfNXutcyei/+d90p2D1dhE0LNmKYR6KB2KNjLYLw0PHs2NbTq3QzQsAoF/8Wf3QPgC6DsxqvS2bouYOmBqtd+lLSfrDLipWAcODE3Ljme4HDuO00Wxo2VT9kJDt5vVvWWBoNm93nGLk+2pOHU+kbfu2dsWfZhqdGnpNlSz9/4fMvGzU3ImsEHSj0MZqRM63cgbTV28Y10Ef8MtGgYMZJvzV3laS+F8RUgSFmDHozFp4MLL8VpDXIaBNvLcgxCwDWAZAArrF29xQb1/vYTRnAZDEOYXOQFbGV3Oa8ADjuAXQwDB0M4XNtpvBWQZ1pZPW8b8Elgiml5TC52lPfG0UCyA8unh2IroDtcazq9NxPAN8FSvCllzwTmRlHqOWhND0ymMY1jri/p4Esy6SrdmesmXYGRx1gXx3gOQe+S/yl5MntZth2sN49h+sHne5zY0RmFArLnYq+T1UN5ZuE+5eN0rOcCJ1mdjDyNlYAP9ts3uhGjUcZkVJURZPbo/sOMahxBAHj7p0tymLD1boCLG9DWJsvvJwF0eV0olRwycJW0zZbBqurv6hU4wPb1WgJ5AX+Wpw3FCuQD17crDB8V6pQv7KrZG2cDxsBzByvpgwC1MoYAjVdUpQno6/tMJ+l9IFmU7S01YqgB63QNGgefDLrawg2552Lbp+59elsma2NjdzNfXozR+YO1xo+ypgafS3j5zMiW7E85Rbk3PIz/NA3LawBZy12z8cjYfAFTNo6nVOBa7sWyHIxmz6KP45H921TSLHzVxtTp+1b+8EzfKTEEiAUYFwOB5/0BLoB6Evmj3hyNh2mWb2l0MetqK3B5PnsK9khDyqehwF0Hjh7w9nETQnmrgN/k5JIpmfDC7pQiHEwiGYqa2Gg0nYEtr0tcl8QJ40kmm9Pw29oD0Lg2LMFn3NmDxFGeIc9ZB86Y2mmbXqCKRty8vUZ7VabHh4/dTWD7birsSXxKpKmSkj88wbLdoJiRMqwMitU+Fc0o4PVKWWiQo4FuNacAVCXmKmD799NAPhTe9dtsZxFE5gKqadcpiYyDv+wNkl0VrJaGVsFg3vzDNE/JFTUQFpAS2CpP+MjdjBFiGiYMjksjKCOxlcVbXnX9tkfoGtTvAngm4NmvB2v1AHale5EhdFfuwE1PSc10EaQmWj0HR2704bdMmt6PXUbsHfMOsqxYz+6aXh7Kjo0tigj74k3n/W441otERur1Ns4A+q7bPV9tH+BOo8y8zMmxPT8p34wuKcSAvPQ6e4/8i3F95tu7+vjAyQ4oSp9pRntiMaFchnAS0Af7Wq4h6dIbiDbfT9+qSmQMYAfQWLkLOQ4ayvhk4qxnLkUdQMXC3qXZhXFL1oBpKIgJ1FXqMP8X3iC0IegwkhKqy7iC/20CfsExsDw9Pw+P6OY9ZxyRv/lSMQDtubBUKoGf2R1uEzwQlka7PVmiBCQHiJzDsWzBmaecRZ3GsaefBsAxxT4bO3yrbn0ayOw9PBvF85roFZyYmo0dE1bR3ed5szMJ6bQz+UZkO5/AZ+ETqOhGgQRr1fFSNwY7SpRcYqP2ZBsU+NJAYubV2tORTHlaeg6gl7kO5jaTYDAXF2SxuBfzKvhHytZi72yjBdyUMTxeII3grwXgWS4NKKu3d5CtaUBaHsOVMUBKrazJgevbnWs73bryhdur4jdw5tP7/Jwc6vCCZmO6o5yTR/nXsiY1Oaf8Z2DXFnEylkaWUkOQkr1IzpoOekvi2tDGWfzqbfZK2cKec8BrW3xOrZ7pTF96Zm6OQLLxkTJirl4m8xMWUwHIIIissTRYAboRxxL34lgHlFYNbutAURq1PBreDVaMjT5/XsN2ObKudZrFiL4OgqdBiVShoZV0yXteeGJs/Qw5w3IaxuG8uq4AjkXP8xyVTXGNrWVNQycx3BPgyeYOF3bPyR82YIKYNE5JYsJs2sqebh/6i7fh6b1J/zzlUKKAHpuRx41vq4PDq/toY6E8Cv87KkiL3hoOCUBD3b/fhHHgtPXqwogBbzxbukV5txNOdzKIbOtQiJIMNGJy9IiG2DaWOash/fbUsdEdW7pDjcWLXiTruBoze4is7TSWKAcBVQ2+9SScKaOWASRwvXXu0ZAi/gaLdm6gW3thKCmYBg5Sx68wMfqaS5flagDGWV8xfp4DYMkz688kPbsXwGcdzS/TDw1hYtA/0WBOkdpyonx6DXJKG0qeGBukdr+JCtiy677o+1ODs2eYUtxEm8+/swHluQH6zOMIf32mFlm9YStH8uX2nPeb3B1sLmEPm4d2nykNT1nEoiQhWMuq0tUAOHcxsnInwMlEkyzCKBmESuMpkOHYiFZ8clrYOItltoCs4taFocsLggRxesaUkeuYt2eGYDuZpO8rYDmIHYbFXarhwDU4Npn8qvuZ6PLuyeoeJsye+eB74EoaGQ0d9wb4xHZ5Xyhf2EyeIKc0WEcRNuUA1UfgOLwcNUu50ThCE29OWZRf9pLdeAEucNNanrE4MejFHIiOEFqwqetzImlel4AWUM/YE/OWORmObCmPQp6lsSSLb5P1UaHQZZTI75OVPSRSAdS692FlDJMO0NKus245HrDuAbB1ozYAuudg7zHZlQRDLxPbUowhWN5r+Tq6ISsYjG5Isv4p2nPOAdx4gwyrQRYY7QBqHjcFri2MvkxGpdFUz+LpDQLHKLb0CqjerXsLgv4K3q9p+G5Ia9EZrDzb3hPfNC3IIDXRWOaXLF/hAV7jANdB6n7WDWPTkeiyGhOEJPGF5eOlvAmiKR8yYjJrf5aiZmK9Gvcmz9tuEjSlxVE9z57J6UE8y5kpdQZ97FEP8znXLWTeNG5HXR+RlQ5CvB5C8B5MIhsSZFprYEMBPcEJzm81O+dneD46sMsIajKlaZgukqVtfeKJ90CDjxGPBNygIYgUMfQjfQXuK4y+pGte4D7Jsfn7aBy1X3s7E7mDxfhG0bHWBe4B8JYNAZTPPb43sL2kjPU1aRjsoi1rwamHODGzD3pzQNvvfo1+0PIm8XBIjQRLn1ePIQCzcgSft8fyvG0VczWwZc+wZZxNxuEzzqbWV95ygBxdERJvwS9ptCMNEanZOWHW7A8M8dxUzwjDURvP2h45u4hu4NOBmU24pFxxMmFFzd6GI/eo717hDLFS12Gga6vxBNDzEwrc1aNylCuWxLa6G2UsYU0GKqHo4DD0uEUZnQAH5J6H/A9J97jdBfD0QUO6/WRz725zSTHvSPncIGfEZDY6B5M3Xt4PDlYntxo9Iox1T+NhyZnFzaF+/3qKaguPT3hbogbDI2MzstJu0nKS3cOJj8WVOo1kZzkPWcNzygMFoAdIWU5YTdoyq4xH2k+JTsFq1jOM2SoGn8zd1WnSuwmjERCje4Ie0AYLc80WE1AA3uxdALNL+eENrFOCtsGfBoOVoRV4E8gygB3H81iGxEnrciySh2npp6bDurfDvTn0AwDTCs3truHBxTwFapllTUaaKGH3be2qZBgx8vf8OSR6Uge8iEbbeL90L1o68Efq9MxCSxqOWNNtuM0auEmk9bgBFZDl+TB1nn+T7sYs39S1Wz4PG87rNEZqigS2gD5NJXgrexYOQVC9Y57l6wPMUIBba1OGR8dFlvq+G5ZpRhTmgfF5DoFZXXKDezJzGqYlO636GsvAdwUY6s0ax4Fkfafx2OG493EaUA1Wq3zqdXHo2EKBTaPongTdi0ne7Ari9zQe0B1Pu9MjhuiJrVqgHgo2ScyMPXbXPj/ZQHmOVVrJXnnNBMnJ5rOtKkWid0hmFfOeY719wmhn91xvZmrZ2ZKWC4gxo0NWKsj8zkO5qu5MI86LdOK6WpMHVuXmKgmxckJSQqbbEov1MKpn0XoLMkBNugWoeI7VolJcOYBmwcmaWvjI42HmXq66DYjjgmXQKE0EX6WIAlPZUtmbLx9gHI0eK6CnYelx4zHIagZpUL36rywFgja6Zb2aZb/IMJO8Gg0h2uhx73XxGPcDVyeeQo2kqUSzruxe3olkmdTtUM3P2qX/3qzCFTj1SrZPZ0XJHz5PGzjMg8mgBFb4512mA6yzl4OwGZx1ismlOZbkQyc3lpNOI4wMqHCICoADNXsGqMVrA6v0Vj0IlgGm33SvMc/KDBZLW/Q6NW1Pvs8xEBlX30w3prbLMjqWXgIKLGv2Zbvt5VkesN5l1ZDgL8MKYDuGDeQ5Oe+gYF2ehLJ1mQyDpKPpNZ8ph93le9dZzaT6pafG5K/kjHzX7Wq0pDeKEA8t59V+lDfSuHkH39jC3b+UNEr5HKEFluHDnTEGlyEbabthqbYOXyiGlsjLEMxzXJA0mvs9nm7iI307c+6TTDOQLEONk0nnXTNyjmWagLaR440wSDt5rXCA7KlqiJLXzIc3DN29OiQcoLtz5G/W+ym7VYPcj6+NHGjXJCeT/EqDI3s7mX2tp5Ygy2ikNFP9XoBzlQx+KUv428TH7ytYDbJPGFoNQV2wSxrGc2WgDCGNizID+lDIEfxvFfCzGYfV5EotqJq6WNl99UfneQluDkRRA0lkdlu/18PQVmO48DCaxbqO6UEJ0OpTTpFGx8nkADUZegFvUnANjKd3ZiyP+pWBVE059El/Lr4QcTVWjF1hwFlzMZbBXPrat4OMGLHvlFeYMHEEkdG9uRv7yIEtCqgmnK4zjzX+zvT2Oj1h1eX0eOg+HIBuYhhhSL6C2OwClDQcq7GGSJfsnRToKpuWGB2oYVHbHyalfAVxDWSd90e1F/9O73GB+Dec07cHdM/T72zSSrx61dKWGrl0OOzQusDR3PTVlFY1liBNjcuVtkqHD+6L62dXnPehDGLvk2smFbhrbUoesNbJvL9luro+Zpyeq5oZxwQ9rBp5jwAtz4lFnfayzFV3wddyxh9Dmjge4LqRSP3dIgkp59BsjShDgdpkXOFVpaJt1TD6s5bwUKAIEAtkYiRXZUqeW6y8hXGQ6ZdX23inr2HGMScis6uZP5VLy8pihmUgzBecHQfIF2OLJwwcAX/B8E8cHV4bZJuMmf9QX1ccl/Fsq9lSvr25/PX6KVLIs3svV6VO4gAJiC1WKMAmEgaVzgzNZTxLBreU8koCNy23royQVMcBeEy0bVXectDMyuSP0e658lJ5elQinQgsS3Um26ALFZnfLEP5o9FuQgL1lFnitTojWosUeYP8JEUvsPMzxwKLhEnwnDI/HDPUfcxWD8tMx9Z08xrV6dc+reQcAY5L3Z73WAySvVMBWwLo0IZ05N0LuJ+3O2fwPqg7nsg7FT5TWsBS25ONIhdcu6VqHFbuwF6MiZoha4Sh5JaTMcVysW/GKOZ9N8vIxHmbpPUbz5XE8pbps8/L0z0K1MQVQwmMEi0qafrtd/fkYLhDXgvkMnfRxc/rRlag+Na7zLE5pYC1tt/zccoVEWJgHCANF6SVZ4NyZ2RLzWtz/BTVE2WoW9NIITOqBUhUG5WvPp0EJT2EJdPusTxxhCva3ABOPLUf3uaYhq+q1F6lDJf5MmRvcJAtfsU4TIzA5F56zFZy0CbZ/+4cvDS7mtkZ/g2684mnrUBbDxJVJfdvWsU0CqwgCLZPwxCQezYcW6b85MmIXPclBn1b6fqSVPvXnLGIZT7STz8fvOZgeGTcTuYwg9MCkXG95wPiOvmjAXLzwXMPpuZgueLh52N/WCajRgKbFe8ZfRkNE5bYD11k/rf2nsQ9Ab7GsmPAW4uXVoZf9gK+AsOSzWta3rFOSB1AXI/OZR3EG/EOsqNY3guQuv6j+uVnWscgMliBXTV8GZLh8qEP4wC9jbCMQIDNfZAyTIN9r1XA3NzcvHHf84DufPop++L01U4vCxvXlLEBgr7GfcnU9PLQtTh7CY2nwfEzz09jYUyMiaFwSr8Yz1Dyaq+RbQugTklzI0w/d/UDHj0hFQnNp5kydGHmfiu11GHGzKDFuSNdL6XOWRSpR5OBW3llKiY/j8OXnqDBY9Xlx/IV63FKSwI3R6slPyL93CeAZN0RJDUTKudxKeqSOwgDrGdZrQ2Bs651ToJ4GlaWq0Hsq1G6yDMc2B1YB7L8nu3ZRoSLgapZ1/3pCbYA/jwWu2T4p51usG4CSoYVGP3STAm5xEQydkogMjuXjAjnQ3SBISc8p8+D/SKdrQ0kQVmRkSkrNsawMC83LoNYK4XkQM8HGA0ll+1A5utGkGrJ6sgno8wLWCyHndDPku63v9FK79nNCcQynAQqGS794KhnUtMwmCaUqaMwQ3sDrEAOr4yzCMvKvQTc4lun5raVEccRgARbsNfBEBhPo+d1cJj5UY4Adsx7Xm+2MrZOQNW+IXUCLKzenynfknFPz7wYok7A/5ju+YDTY9X41zdOCknwVzE5TyHiSEfAxRNSgSvp/pNBrbX/VDtk2IF6Yip1Ti6SFC02Mi/U9sGKniEH6JlNRzHy/D3y/jRM+q9H3nSTHihXNLBMKN635LKGzwhgjOj6QZbO+GfKolkHBQgNHbBLd+GhgWNf9Lo6Fd/M3gzKZrRDD0Q/v7JqA3eVDu0LPxqRXRhGpycGBZSb9JoMUdmjYGfvqURSvQOwfi+gc1/2NFdmWsf999+/AH5n+CcOoZmqtvUrJYLR7LIrmSyt+0buz1wefwerdu5jYskKLNJPoafqIwd6LnJ/MDxfuCb5kuvrUB6vlbxGuhfznpRFpTFHZSV85Xl/ujs9DYiVPmhULAsS9G4S4x3X1pNQttS2NGDmZ4JJ/M5kdhYhAb6vTjDddwO48KjAcAwuWxh4AWefv5zrei81ygSstZu0jQfyAgW5h8d9TnoPSfd0xbjs+Of9OXu0//ic2gHwO9ZHNshL9cCz3/0XsMaIrC1BvzlKGujxBq8VgNl0KjO6hfm7wCz3ctkX6cX3PfaGrnI1sn3wOtJfvxHoixES9IJeMYTpgZDyGfMoheJLG8onnnXStmJleMMauuULH7Sv1sCE9WysocDpNIvJmI41EMkfAJYBYRlLAdTr3BrUGpR/rrgXvQ0MzcrFziAJSO+Q9+GCTQS54WgoVoa29GZmFyBWA63vdjhmcf6dSznzUrCuzxJlefvuh77bW0qeX5pS/C3T+rC+2PQ6AQ6BOciciZ8CY16WhlCsjGBtzxLxbSJOixoJ1sUvZc3Mo9MahSBppVwPg4PLfd9WrA0sQV19y7ZtGupsmC7I0LwALakQP5y+c1uqqw13KMBsZVzzZnYQkNbnWjcVAcJ3Su0AO9naTHwBcXli5NplEOu4ZHnD4t6M69bQh0pPxxDGsqxGcfxjUFlJtirzun/pmfY0P+zdodu2bRPj2Qz4Tj340Y/7eTxpuDAVBIRs6KiubqRuPfqy9ZzOKqolQz+jPTKWQWEn68EmmqErL2VACYFFsEap2yORZUhjGSegGd0awMbeJJm4EE236yG9NISoQZU/vkgZywsLHJZ+7HmvUffrd6+a6O8AKN2/cTu6LJMdTRnc+rWOo41kbt5vwwOwDGDn+QuQGjys1nnuWFl1SN0tgDW7ZF6soNSeSY1hAXTlk0t7WPcKE+i+zsSy7Gcpc+ej3gO6nT0031mAv//++18K8dbsk0+//1f9XLG8V8NDq7BnMHsXlrBhljY/7YJdsciY0veZdoUBpIUNgn7EoM/zvDkTO08ZdX6FPcweQEZttqY9pE8mO0CNynAIN04jGa29Kz3LxVdpDEjQ5vEIK+4KYyNaQqtdd1a61rSBCRrx6qwgswIznHIBF3KCjG9odo38HBgcWF9Dqbr98J1svbA/LtMzAXYPgLE8ZrhMoh3yzYm0Cou+0iu920f9Khy2BxLjZcT79kI9Ywc8B68mAFWw7lu8XvJ4HCUHkMeo3SuOxajH26UIYGF22OpWZDjAlq3De+zBWkZgk73RunzVTfk3yJousfJosA5h8UpzFHC7t+l3uloywDgYhYmhxC2orDng3Go/14mJRu1nS0/ayAd21LiaBlbMEwTYG/jdVL6ASV2ZBUZbwWtZtnrJMJKpTR4CP16//EXdadrKzNX7XOy3C+bXHkNbdpzZfRzY/bx9Eb8o4L8aB5b/Hx7/MIrZD2CunAHt+RC2bja1umbQCAbTaSAU2NDA7mPtiYD1khKRNy+Do8eE3hK/YPU2oFHHZPAr54+s3fnUvhGMXXY2YEgnQ7/lsMursmpInTHct8crzeolX9ocur6h917Zj9WqXbzVcQ65RRIAiw7np07sWDG3LQCsa8Xw4HcB4lF3y/V6ju5X/lkeErdLNjes973zCU84emceQA5YAQH8/fffv4P9i/TM3//ub556HixU/luMjgZrG0EDSd3y4bcHyN7Ht3WfsjR8Yde21FY3OscRyvz7xqn8eg0PQZzphhTqgSy9LD2PKrqen9zP+xeK2lCH5I0hDDTsWvJO6wtYWHy0tacBMF1qdV8lCetBhi21dPWc+3ABV7+jloA5Ll56GisYeZ/j5JX2EvG5elYuwHzh6VnBqc2rQL58DtavAluNiJA7nZn9Cru/8IztB/hDGX4H/c7yi1/+c57wJrx3hgwf2btygd7fUYjZmMs1AfrIpOf5ccENWtbsaQ6RApe9RX+OrK0xpKcQBdOGwl4iDhBoR89NdZ8J/HKZ5v55DcSvbgrWUUZU+pvXO0qOkACKca0Hu5bpz1fF13mYFXuUF7ORgWLXGC+I7EkxT+2by7KlThZ9j2ZppqnaOGJ+egWzI4Cr084Jv/lbDEkNRWGz7D96YXiMjyN653Hpbeil2aXMmd0P2wOJaQi0LrY/rD+eeNaXL3zSv5kTUi1tBPRQA0jQyz6XY8X0YpZCmHXNWIzHCuwuRkNpVANpASYK5Fl5WTuMtbeq6TaCaBzJE3y5nvJklCGR2V3tuUDbVWTV8GVb3nljldJoyODrAyTiaqRRmE2vS98TF7q4GV4Z3Fr27Cmle7TkUFaLxqcvAJSqK5BDjGC7PK7jjiM7a70c9TnbhU9G8R4lu5jGeZLpzme/58VE03n7nccdF4C/P2ZeP0v3PW3c4EVP+rd4+p2bBiZwAfTaCMxsLD+AP3R3s+wy4zlClhDkAa4BlRErqPm9MzArWGqWTOmiA2LmXwa2FK5A92RZQy776JmqFQMgPULe75Q9VEGZ+TMUAOMaPxgKqoGVITuLMhOaDa/gSftrXU3t7n09B7P1JJJBZkS9jOlShthqFKZM34PKPn81muVPgV6DbVuuNzkXuDSU+txdkH/2PYED2M9+9y+6X6RMYQNXtvOJX32ejPom3UfQ759x5cqmzM1xhjYqpvd5VQTKULYEt48VAO2bAtQtWIPBMhTwwSPgSu/AVYiZz5osouYeiRTY4kWap8sT/pz+D29Dl6/OhawqwMYZfT1EdzcD46omPUqA0t1aFCN7RqohheJYe3Ww/Cm414Go+vex6HCDSgxfQU0/OdhLpHFQxum1/PPuXU5LL2LS/rbeF1iMcP6+O9hf+H7v935fiCub4a1sDzzwwPefgf8c3fe67YRv/PdPxN/6+ffIBvR82ALlHHd+z4eE55NMYIRgxJoboy3lcwalbXHdXBvSYxVe33htnr8Hje2/bzzPi4aY8fBb32fGyaPPs62Pz2OZR2zMawaR5bWzYbY+J/IW55zcK635AMRemRskHZ9PYtX39Fejvne+CZx6XC7PrfMSJFwmg0tmoOREXzMBpzLD+3PfN/fnE03U8gOt26dM8jUK8iSfYdQ9BjjVrGp86gRWnY+D0djaa+j5yHyMIxFgJYVxnkkdf+QpwOMvIPzSM2H/TtxlG3gr2xmAn3iMs9kZ/nOe8EZ8zpPeiKef+GYDAMLY1f2bugGTRapLbM/HkPPbC9NSyHRAOsvXrkROHLn0Ir3mi/W4A1b5IovS/84BrwlV9yxp9zg620f/OssRw8Msu6Pyuww80YO6ulVWn3pttKjNiGRYSYv5KuDYBagiLocyCyJLbJER2nssvYI27aFH4FKCyvp3Y2VNh2AXyJTX6eJ8SK+3/z3hnO//7kkYz3/qVbCf/z4Rb2Uz3MP2Mz/zM/tI9zOO+3e235l+/3voJsVuPvLnXNmK+zz2zSXs5mq8XuzOXiDeqLclw6N6iVoThj3Jfu7N2iNUWpuwuSdTF4sLy2f+2EOQ0fd058MWeb+4Pq498bw8rmyN7BlGlmcemz1AXMfeo5h9a/bmvZrpvdi4ehQ0Cyur8/edqPblmDLzcGHxBFGxvrVRxX0MuiTfHWumVomiy22sOn8F/pD71WAZHTuvUkUNZQH8e5x7j//yCee/x18D+o6Fb/o1v+bXfBrexnZPgN+3M+i/8PzxBXc7/rd+4T3w8p9/HH7q0XfD6x6LlwqUfEACiTSY7jGCOgAfDc3XQs4nmW4IShS45yN7NJY0BIhUoTxRsNvBAOZTejcNeiSwT95GAwJfDGUFdqZ5I8CH3CvPOXkbAhLINJ6+bpUxBHz9TiPZgVps734hWxrYGakIEynjJXloXHdMr8/xhF8+2KFGoTJlyL7y37P39YMvH7jQ6rVkn+FiNeF5/Azs8WG/CqcPfhzsLGHs8XeF62fdf3A/3m27Z8Dv2xn0950/vv/8d99bO+91N6fJ+D/96B08ch6RPvToqYzgkRvDI49Zan0/Hxu95LSAl7o9XjSGAgfZO56MSnCmUQw5FwftfWR2bBD231KLo3oPApSgrt6A4L3BFa1ObZ+sLaxOw6MOJ8tPcCq7e6THnkD1voLaDoBfv/uqsXldAd0iL4ZFr1cvggax6nsFv8arL4NvXyevmumD/d/tvRgQHNfvD1qPx5/nHHZw73/77/3vmXeuuRmXbY/yPcvFT7v/8EzHW9tuBXhuZ+B/JkLi3Id3be/afum3GRVwr6yu29sF+H1Ltn8OQubch3dt79re+dsO9D3I8avvj1CYW29vN+B1O4P/OWff5yecTqcPObox37W9a/tFbi/dH97Y49nvzxDfX8z2DgH8cTsbwIciWP++c2bvOxvCU/L3rrvO/iQ8VU6/D+/a/kPaHtAf1ks9PrCvG7MvpYFg8h+7jTa/1+3/A/AkytbeV/75AAAAAElFTkSuQmCC", Ez = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIG9wYWNpdHk9IjAuOCI+CiAgICAgICAgPHBhdGggb3BhY2l0eT0iMC44IgogICAgICAgICAgICBkPSJNOC4xMjQ5OCAwLjU0MTc0OEgyLjE2NjY1QzEuNTcwODEgMC41NDE3NDggMS4wODMzMSAxLjAyOTI1IDEuMDgzMzEgMS42MjUwOFY4LjY2Njc1QzEuMDgzMzEgOC45NjQ2NiAxLjMyNzA2IDkuMjA4NDEgMS42MjQ5OCA5LjIwODQxQzEuOTIyOSA5LjIwODQxIDIuMTY2NjUgOC45NjQ2NiAyLjE2NjY1IDguNjY2NzVWMi4xNjY3NUMyLjE2NjY1IDEuODY4ODMgMi40MTA0IDEuNjI1MDggMi43MDgzMSAxLjYyNTA4SDguMTI0OThDOC40MjI5IDEuNjI1MDggOC42NjY2NSAxLjM4MTMzIDguNjY2NjUgMS4wODM0MUM4LjY2NjY1IDAuNzg1NDk4IDguNDIyOSAwLjU0MTc0OCA4LjEyNDk4IDAuNTQxNzQ4Wk0xMC4yOTE2IDIuNzA4NDFINC4zMzMzMUMzLjczNzQ4IDIuNzA4NDEgMy4yNDk5OCAzLjE5NTkxIDMuMjQ5OTggMy43OTE3NVYxMS4zNzUxQzMuMjQ5OTggMTEuOTcwOSAzLjczNzQ4IDEyLjQ1ODQgNC4zMzMzMSAxMi40NTg0SDEwLjI5MTZDMTAuODg3NSAxMi40NTg0IDExLjM3NSAxMS45NzA5IDExLjM3NSAxMS4zNzUxVjMuNzkxNzVDMTEuMzc1IDMuMTk1OTEgMTAuODg3NSAyLjcwODQxIDEwLjI5MTYgMi43MDg0MVpNOS43NDk5OCAxMS4zNzUxSDQuODc0OThDNC41NzcwNiAxMS4zNzUxIDQuMzMzMzEgMTEuMTMxMyA0LjMzMzMxIDEwLjgzMzRWNC4zMzM0MUM0LjMzMzMxIDQuMDM1NSA0LjU3NzA2IDMuNzkxNzUgNC44NzQ5OCAzLjc5MTc1SDkuNzQ5OThDMTAuMDQ3OSAzLjc5MTc1IDEwLjI5MTYgNC4wMzU1IDEwLjI5MTYgNC4zMzM0MVYxMC44MzM0QzEwLjI5MTYgMTEuMTMxMyAxMC4wNDc5IDExLjM3NTEgOS43NDk5OCAxMS4zNzUxWiIKICAgICAgICAgICAgZmlsbD0id2hpdGUiIC8+CiAgICA8L2c+Cjwvc3ZnPgogICAg", NS = (e) => e ? `${e.slice(0, 4)}...${e.slice(
  e.length - 6,
  e.length
)}` : "";
var Cz = Object.defineProperty, Dz = Object.getOwnPropertyDescriptor, _a = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Dz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Cz(t, n, a), a;
};
let zn = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.address = "", this.label = "", this.appearanceId = 0;
  }
  formatAccountLabel(e) {
    return e.length > 14 ? `${e.slice(0, 12).trimEnd()}...` : e;
  }
  render() {
    return Z` <span class="label"
        >${this.formatAccountLabel(this.label)}</span
      >
      <a
        class="address"
        target="_blank"
        href=${`${this.address}`}
        @click=${(e) => {
      e.preventDefault(), this.dispatchEvent(
        new CustomEvent("onLinkClick", {
          bubbles: !0,
          composed: !0,
          detail: { type: "account", data: this.address }
        })
      );
    }}
      >
        ${NS(this.address)}<i
          @click=${(e) => {
      e.preventDefault(), e.stopImmediatePropagation(), navigator.clipboard.writeText(this.address);
    }}
        ></i>
      </a>`;
  }
};
zn.styles = [
  tt,
  ke`
      :host {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: 0.5rem;
        border-radius: 12px;
        color: var(--color-light);
        font-size: 14px;
        height: 40px;
        align-items: center;
        padding: 0 20px;
      }

      .label {
        font-weight: 600;
        color: var(--color-light);
      }

      a {
        color: var(--color-light);
        display: flex;
        align-items: center;
        gap: 4px;
        opacity: 0.8;
        font-size: 12px;
      }

      i {
        background-image: url(${te(Ez)});
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        width: 13px;
        height: 13px;
      }

      .label,
      a,
      i {
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.08);
      }

      :host([appearanceId='0']) {
        background: linear-gradient(276.58deg, #01e2a0 -0.6%, #052cc0 102.8%);
      }

      :host([appearanceId='1']) {
        background: linear-gradient(
          276.33deg,
          #ff43ca -14.55%,
          #052cc0 102.71%
        );
      }

      :host([appearanceId='2']) {
        background: linear-gradient(
          276.33deg,
          #20e4ff -14.55%,
          #052cc0 102.71%
        );
      }

      :host([appearanceId='3']) {
        background: linear-gradient(94.8deg, #00ab84 -1.2%, #052cc0 103.67%);
      }

      :host([appearanceId='4']) {
        background: linear-gradient(94.62deg, #ce0d98 -10.14%, #052cc0 104.1%);
      }

      :host([appearanceId='5']) {
        background: linear-gradient(
          276.33deg,
          #052cc0 -14.55%,
          #0dcae4 102.71%
        );
      }

      :host([appearanceId='6']) {
        background: linear-gradient(90.89deg, #003057 -2.21%, #03d597 102.16%);
      }

      :host([appearanceId='7']) {
        background: linear-gradient(276.23deg, #f31dbe -2.1%, #003057 102.67%);
      }

      :host([appearanceId='8']) {
        background: linear-gradient(276.48deg, #003057 -0.14%, #052cc0 102.77%);
      }

      :host([appearanceId='9']) {
        background: linear-gradient(276.32deg, #1af4b5 -5.15%, #0ba97d 102.7%);
      }

      :host([appearanceId='10']) {
        background: linear-gradient(276.23deg, #e225b3 -2.1%, #7e0d5f 102.67%);
      }

      :host([appearanceId='11']) {
        background: linear-gradient(276.48deg, #1f48e2 -0.14%, #040b72 102.77%);
      }
    `
];
_a([
  O({
    type: String,
    reflect: !0
  })
], zn.prototype, "mode", 2);
_a([
  O({
    type: String
  })
], zn.prototype, "address", 2);
_a([
  O({
    type: String
  })
], zn.prototype, "label", 2);
_a([
  O({
    type: Number,
    reflect: !0
  })
], zn.prototype, "appearanceId", 2);
zn = _a([
  qe("radix-account")
], zn);
var Pz = Object.defineProperty, Rz = Object.getOwnPropertyDescriptor, ln = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Rz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Pz(t, n, a), a;
};
let St = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.type = "dataRequest", this.status = "pending", this.showCancel = !1, this.timestamp = "", this.id = "", this.transactionIntentHash = "";
  }
  render() {
    const e = this.getIconFromStatus(), t = this.getStylingFromStatus(), n = {
      sendTransaction: {
        pending: "Pending Transaction",
        fail: "Transaction Failed",
        cancelled: "Transaction Cancelled",
        success: "Send transaction",
        content: Z`
          ${this.renderTxIntentHash()}
          ${this.getRequestContentTemplate(
          "Open your Radix Wallet app to review the transaction"
        )}
        `
      },
      dataRequest: {
        pending: "Data Request Pending",
        fail: "Data Request Rejected",
        cancelled: "Data Request Rejected",
        success: "Data Request",
        content: this.getRequestContentTemplate(
          "Open Your Radix Wallet App to complete the request"
        )
      },
      loginRequest: {
        pending: "Login Request Pending",
        fail: "Login Request Rejected",
        cancelled: "Login Request Rejected",
        success: "Login Request",
        content: this.getRequestContentTemplate(
          "Open Your Radix Wallet App to complete the request"
        )
      }
    };
    return Z`<radix-card
      icon="${e}"
      class=${t}
      mode=${this.mode}
      timestamp="${this.timestamp}"
      header="${n[this.type][this.status]}"
    >
      ${n[this.type].content}
    </radix-card>`;
  }
  getRequestContentTemplate(e) {
    return this.status === "pending" ? Z`<div class="request-content">
          ${e}
          ${this.showCancel ? Z`<div class="cancel" @click=${this.onCancel}>Cancel</div>` : ""}
        </div>` : "";
  }
  getIconFromStatus() {
    return this.status === "pending" ? "pending" : this.status === "cancelled" || this.status === "fail" ? "error" : "checked";
  }
  getStylingFromStatus() {
    return Rt({
      dimmed: this.status === "fail" || this.status === "cancelled",
      inverted: this.status === "pending"
    });
  }
  onCancel(e) {
    this.dispatchEvent(
      new CustomEvent("onCancelRequestItem", {
        detail: {
          ...e,
          id: this.id
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  renderTxIntentHash() {
    return this.transactionIntentHash ? Z`<div class="transaction">
          <span class="text-dimmed">ID:</span>
          <radix-link
            displayText="${NS(this.transactionIntentHash)}"
            mode=${this.mode}
            @click=${(e) => {
      e.preventDefault(), this.dispatchEvent(
        new CustomEvent("onLinkClick", {
          bubbles: !0,
          composed: !0,
          detail: {
            type: "transaction",
            data: this.transactionIntentHash
          }
        })
      );
    }}
          ></radix-link>
        </div>` : "";
  }
};
St.styles = [
  tt,
  ke`
      :host {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
      }

      .text-dimmed {
        color: var(--radix-card-text-dimmed-color);
        margin-right: 5px;
      }

      .transaction {
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
      }

      .cancel {
        cursor: pointer;
        text-decoration: underline;
      }

      .request-content {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
      }
    `
];
ln([
  O({
    type: String,
    reflect: !0
  })
], St.prototype, "mode", 2);
ln([
  O({
    type: String
  })
], St.prototype, "type", 2);
ln([
  O({
    type: String
  })
], St.prototype, "status", 2);
ln([
  O({
    type: Boolean
  })
], St.prototype, "showCancel", 2);
ln([
  O({
    type: String
  })
], St.prototype, "timestamp", 2);
ln([
  O({
    type: String
  })
], St.prototype, "id", 2);
ln([
  O({
    type: String
  })
], St.prototype, "transactionIntentHash", 2);
St = ln([
  qe("radix-request-card")
], St);
var Fz = Object.defineProperty, Vz = Object.getOwnPropertyDescriptor, ic = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Vz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Fz(t, n, a), a;
};
let sa = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.requestItems = [];
  }
  render() {
    return (this.requestItems || []).map(
      (e) => Z`<radix-request-card
        type="${e.type}"
        status="${e.status}"
        id="${e.id}"
        ?showCancel="${e.showCancel}"
        @onCancel=${(t) => {
        this.dispatchEvent(
          new CustomEvent("onCancel", {
            detail: t.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
        timestamp=${e.timestamp}
        mode=${this.mode}
      ></radix-request-card>`
    );
  }
};
sa.styles = [tt];
ic([
  O({
    type: String,
    reflect: !0
  })
], sa.prototype, "mode", 2);
ic([
  O({ type: Array })
], sa.prototype, "requestItems", 2);
sa = ic([
  qe("radix-request-cards")
], sa);
var jz = Object.defineProperty, Jz = Object.getOwnPropertyDescriptor, Gn = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Jz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && jz(t, n, a), a;
};
let Ft = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.isMobile = !1, this.status = En.default, this.isWalletLinked = !1, this.isExtensionAvailable = !1, this.requestItems = [];
  }
  render() {
    let e = this.renderConnectTemplate();
    return this.isMobile ? e = this.renderMobileTemplate() : this.isExtensionAvailable ? this.isWalletLinked ? this.status === En.pending && (e = this.renderRequestItemsTemplate()) : e = this.renderCeNotLinkedTemplate() : e = this.renderCeNotInstalledTemplate(), Z`
      <div class="wrapper connect-your-wallet">
        <img class="logo" src=${Mz} />
        <span class="text connect">Connect Your Radix Wallet</span>
      </div>
      ${e}
    `;
  }
  renderMobileTemplate() {
    return Z` <div class="mobile-wrapper">
      <div class="header">Mobile dApps are coming soon.</div>
      <div class="content">
        For now, please connect to Radix dApps using a desktop web browser.
      </div>
    </div>`;
  }
  renderRequestItemsTemplate() {
    return Z`<radix-request-cards
      class="request-cards"
      mode=${this.mode}
      .requestItems=${this.requestItems}
    ></radix-request-cards>`;
  }
  connectNowButtonTemplate() {
    const e = !this.isExtensionAvailable || !this.isWalletLinked;
    return Z`<button
      class="${Rt({
      "connect-now": !0,
      disabled: e
    })}"
      @click=${() => {
      e || this.dispatchEvent(
        new CustomEvent("onConnect", {
          bubbles: !0,
          composed: !0
        })
      );
    }}
    >
      Connect Now
    </button>`;
  }
  renderCeNotInstalledTemplate() {
    return Z`<div class="info">
        Before you can connect your Radix Wallet, you need the Radix Connector
        browser extension.
      </div>

      <div class="cta-link">
        <radix-link
          mode=${this.mode}
          href="http://wallet.radixdlt.com/"
          displayText="Download and Setup Guide"
          @click=${() => {
      this.dispatchEvent(
        new CustomEvent("onLinkClick", {
          bubbles: !0,
          composed: !0,
          detail: { type: "setupGuide" }
        })
      );
    }}
        ></radix-link>
      </div>

      ${this.connectNowButtonTemplate()} `;
  }
  renderCeNotLinkedTemplate() {
    return Z`<div class="info">
        To connect your Radix Wallet, you need to link it to your Radix
        Connector browser extension using a QR code.
      </div>

      <button
        class="${Rt({
      "connect-now": !0
    })}"
        @click=${() => {
      this.dispatchEvent(
        new CustomEvent("onLinkClick", {
          bubbles: !0,
          composed: !0,
          detail: { type: "showQrCode" }
        })
      );
    }}
      >
        Open QR Code to Link Wallet
      </button>

      <div class="cta-link">
        <radix-link
          mode=${this.mode}
          href="http://wallet.radixdlt.com/"
          displayText="Download and Setup Guide"
          @click=${() => {
      this.dispatchEvent(
        new CustomEvent("onLinkClick", {
          bubbles: !0,
          composed: !0,
          detail: { type: "setupGuide" }
        })
      );
    }}
        ></radix-link>
      </div>

      ${this.connectNowButtonTemplate()} `;
  }
  renderConnectTemplate() {
    return Z` ${this.connectNowButtonTemplate()} `;
  }
};
Ft.styles = [
  tt,
  ke`
      :host {
        width: 100%;
      }
      .wrapper.connect-your-wallet {
        display: flex;
        align-items: center;
        margin: 1rem 0.5rem 1.5rem;
        justify-content: center;
      }

      .request-cards {
        display: block;
        max-height: 410px;
        overflow-y: auto;
      }

      .card {
        margin-bottom: 10px;
      }
      .info {
        margin-bottom: 20px;
        font-size: 14px;
        text-align: center;
      }

      .connect-now {
        width: 100%;
        color: #fff;
        border-radius: 12px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
      }

      .connect-now:not(.disabled) {
        background: var(--color-radix-blue-2);
        cursor: pointer;
      }

      .connect-now.disabled {
        background: var(--radix-connect-now-disabled-button-background);
        color: var(--radix-connect-now-disabled-button-text);
      }

      .cta-link {
        display: flex;
        justify-content: center;
        margin: 25px 0 20px;
      }

      .logo {
        width: 46px;
        align-self: center;
      }

      .text.connect {
        color: var(--color-text-primary);
        font-size: 18px;
        width: 7.2rem;
        margin-left: 1rem;
        font-weight: 600;
        text-align: left;
      }

      .subtitle {
        color: var(--radix-card-text-dimmed-color);
      }

      .mobile-wrapper {
        display: flex;
        flex-direction: column;
        text-align: center;

        align-items: center;
        margin-bottom: 18px;
        margin-top: 25px;
        font-size: 14px;
      }

      .mobile-wrapper .header {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .mobile-wrapper .content {
        font-size: 16px;
        margin-bottom: 5px;
      }
      button {
        font-family: 'IBM Plex Sans', sans-serif;
      }
    `
];
Gn([
  O({
    type: String,
    reflect: !0
  })
], Ft.prototype, "mode", 2);
Gn([
  O({
    type: Boolean
  })
], Ft.prototype, "isMobile", 2);
Gn([
  O({
    type: String
  })
], Ft.prototype, "status", 2);
Gn([
  O({
    type: Boolean
  })
], Ft.prototype, "isWalletLinked", 2);
Gn([
  O({
    type: Boolean
  })
], Ft.prototype, "isExtensionAvailable", 2);
Gn([
  O({
    type: Array
  })
], Ft.prototype, "requestItems", 2);
Ft = Gn([
  qe("radix-not-connected-page")
], Ft);
const Lz = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC43MjcyNzMiIHk9IjAuNzI3MjczIiB3aWR0aD0iNjIuNTQ1NSIgaGVpZ2h0PSI2Mi41NDU1IiByeD0iMzEuMjcyNyIgZmlsbD0iI0UyRTVFRCIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPG1hc2sgaWQ9Im1hc2swXzExMjgxXzQxNDAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjEiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCAiPgo8cmVjdCB4PSIwLjcyNjU2MiIgeT0iMS4zMzUwOCIgd2lkdGg9IjYyLjU3NzQiIGhlaWdodD0iNjIuNTc3NCIgcng9IjMxLjI4ODciIGZpbGw9IiNGNEY1RjkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzExMjgxXzQxNDApIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNS44MTcxIiBjeT0iMjYuNTQ1NSIgcj0iMTIiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIxLjQ1NDU1Ii8+CjxjaXJjbGUgb3BhY2l0eT0iMC4yIiBjeD0iMzguMTgwNCIgY3k9IjI2LjU0NTUiIHI9IjEyIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMS40NTQ1NSIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik02Mi41NDQyIDYyLjU0NTVDNjIuNTQ0MiA3My44Mjg5IDUzLjg3OTYgODIuOTA5MSA0My4yNzE1IDgyLjkwOTFDMzIuNjYzNCA4Mi45MDkxIDIzLjk5ODggNzMuODI4OSAyMy45OTg4IDYyLjU0NTVDMjMuOTk4OCA1MS4yNjIxIDMyLjY2MzQgNDIuMTgxOSA0My4yNzE1IDQyLjE4MTlDNTMuODc5NiA0Mi4xODE5IDYyLjU0NDIgNTEuMjYyMSA2Mi41NDQyIDYyLjU0NTVaIiBzdHJva2U9IiNDRUQwRDYiIHN0cm9rZS13aWR0aD0iMS40NTQ1NSIvPgo8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0zOS4yNzE3IDYyLjU0NTVDMzkuMjcxNyA3My44Mjg5IDMwLjYwNzEgODIuOTA5MSAxOS45OTkgODIuOTA5MUM5LjM5MDkgODIuOTA5MSAwLjcyNjI5NiA3My44Mjg5IDAuNzI2Mjk2IDYyLjU0NTVDMC43MjYyOTYgNTEuMjYyMSA5LjM5MDkgNDIuMTgxOSAxOS45OTkgNDIuMTgxOUMzMC42MDcxIDQyLjE4MTkgMzkuMjcxNyA1MS4yNjIxIDM5LjI3MTcgNjIuNTQ1NVoiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLXdpZHRoPSIxLjQ1NDU1Ii8+CjxjaXJjbGUgY3g9IjMxLjk5OTEiIGN5PSIyNi4xODE5IiByPSIxMi4zNjM2IiBmaWxsPSIjRTJFNUVEIiBmaWxsLW9wYWNpdHk9IjAuNSIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPHBhdGggZD0iTTUwLjkwODUgNjIuNTQ1NUM1MC45MDg1IDczLjgyODkgNDIuMjQzOSA4Mi45MDkxIDMxLjYzNTcgODIuOTA5MUMyMS4wMjc2IDgyLjkwOTEgMTIuMzYzIDczLjgyODkgMTIuMzYzIDYyLjU0NTVDMTIuMzYzIDUxLjI2MjEgMjEuMDI3NiA0Mi4xODE5IDMxLjYzNTcgNDIuMTgxOUM0Mi4yNDM5IDQyLjE4MTkgNTAuOTA4NSA1MS4yNjIxIDUwLjkwODUgNjIuNTQ1NVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMTI4MV80MTQwKSIgc3Ryb2tlPSIjQ0VEMEQ2IiBzdHJva2Utd2lkdGg9IjEuNDU0NTUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExMjgxXzQxNDAiIHgxPSIzMS42MzU3IiB5MT0iNDUuMDkxIiB4Mj0iMzEuNjM1NyIgeTI9IjU3LjgxODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0UyRTVFRCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMkU1RUQiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";
var zz = Object.defineProperty, Uz = Object.getOwnPropertyDescriptor, Mr = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Uz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && zz(t, n, a), a;
};
let on = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.persona = "", this.personaData = [];
  }
  render() {
    return Z`<radix-card mode=${this.mode}>
      <div
        class=${Rt({
      center: (this.personaData || []).length < 2,
      "persona-card": !0
    })}
      >
        <div class="placeholder">
          <div
            class=${Rt({
      avatar: !!this.avatarUrl
    })}
            style=${SS({
      backgroundImage: `url(${te(this.avatarUrl)})`
    })}
          ></div>
        </div>
        <div class="content">
          <span class="persona">${this.persona}</span>
          <ul>
            ${(this.personaData || []).map((e) => Z`<li>${e}</li>`)}
          </ul>
        </div>
      </div></radix-card
    >`;
  }
};
on.styles = [
  tt,
  ke`
      :host {
        display: flex;
        width: 100%;
      }

      .avatar {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        align-self: center;
        border: 2px solid var(--radix-avatar-border-color);
      }

      .placeholder {
        width: 64px;
        height: 64px;
        background-image: url(${te(Lz)});
      }

      .persona-card {
        display: grid;
        gap: 20px;
        align-items: flex-start;
        grid-template-columns: 1fr 230px;
      }

      .persona-card.center {
        align-items: center;
      }

      .persona {
        font-size: 14px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        white-space: nowrap;
      }

      ul {
        margin-top: 5px;
        margin-bottom: 0;
        padding-inline-start: 20px;
      }

      li {
        font-size: 12px;
        word-break: break-word;
        line-height: 18px;
      }
    `
];
Mr([
  O({
    type: String,
    reflect: !0
  })
], on.prototype, "mode", 2);
Mr([
  O({
    type: String,
    reflect: !0
  })
], on.prototype, "icon", 2);
Mr([
  O({
    type: String
  })
], on.prototype, "persona", 2);
Mr([
  O({
    type: String
  })
], on.prototype, "avatarUrl", 2);
Mr([
  O({
    type: Array
  })
], on.prototype, "personaData", 2);
on = Mr([
  qe("radix-persona-card")
], on);
const Xd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMTg4XzQyOCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMy43Mzc4IDQuNzYyNUMxMi42NTAzIDMuNjc1IDExLjE1NzggMyA5LjUwMDMxIDNDNi4xODUzMSAzIDMuNTA3ODEgNS42ODUgMy41MDc4MSA5QzMuNTA3ODEgMTIuMzE1IDYuMTg1MzEgMTUgOS41MDAzMSAxNUMxMi4yOTc4IDE1IDE0LjYzMDMgMTMuMDg3NSAxNS4yOTc4IDEwLjVIMTMuNzM3OEMxMy4xMjI4IDEyLjI0NzUgMTEuNDU3OCAxMy41IDkuNTAwMzEgMTMuNUM3LjAxNzgxIDEzLjUgNS4wMDAzMSAxMS40ODI1IDUuMDAwMzEgOUM1LjAwMDMxIDYuNTE3NSA3LjAxNzgxIDQuNSA5LjUwMDMxIDQuNUMxMC43NDUzIDQuNSAxMS44NTUzIDUuMDE3NSAxMi42NjUzIDUuODM1TDEwLjI1MDMgOC4yNUgxNS41MDAzVjNMMTMuNzM3OCA0Ljc2MjVaIgogICAgICAgICAgICBmaWxsPSIjMDUyQ0MwIiAvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTg4XzQyOCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiIC8+CiAgICAgICAgPC9jbGlwUGF0aD4KICAgIDwvZGVmcz4KPC9zdmc+CiAgICA=", $d = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMTg4XzQyNCkiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgIGQ9Ik0xMi43NSA1LjI1TDExLjY5MjUgNi4zMDc1TDEzLjYyNzUgOC4yNUg2VjkuNzVIMTMuNjI3NUwxMS42OTI1IDExLjY4NUwxMi43NSAxMi43NUwxNi41IDlMMTIuNzUgNS4yNVpNMyAzLjc1SDlWMi4yNUgzQzIuMTc1IDIuMjUgMS41IDIuOTI1IDEuNSAzLjc1VjE0LjI1QzEuNSAxNS4wNzUgMi4xNzUgMTUuNzUgMyAxNS43NUg5VjE0LjI1SDNWMy43NVoiCiAgICAgICAgICAgIGZpbGw9IiMwNTJDQzAiIC8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzExODhfNDI0Ij4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4KICAgIA==", AS = ke`
  :host {
    width: 100%;
  }

  .header {
    font-size: 12px;
    font-weight: 400;
    margin: 15px 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    text-align: center;
  }
  .content {
    max-height: 360px;
    overflow: auto;
    width: 100%;
    margin-bottom: 0;
    position: relative;
    padding-bottom: 10px;
    -webkit-mask-image: linear-gradient(180deg, black 90%, transparent 100%);
    mask-image: linear-gradient(180deg, black 90%, transparent 95%);
  }
`;
var Zz = Object.defineProperty, qz = Object.getOwnPropertyDescriptor, Wn = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? qz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Zz(t, n, a), a;
};
let Vt = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.avatarUrl = "", this.persona = "", this.dAppName = "", this.personaData = [], this.accounts = [];
  }
  onUpdateData(e) {
    this.dispatchEvent(
      new CustomEvent("onUpdateData", {
        detail: e,
        bubbles: !0,
        composed: !0
      })
    );
  }
  onLogout(e) {
    this.dispatchEvent(
      new CustomEvent("onLogout", {
        detail: e,
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return Z` <div class="header">Sharing with ${this.dAppName}</div>
      <div class="content">
        <radix-persona-card
          avatarUrl=${this.avatarUrl}
          mode=${this.mode}
          persona=${this.persona}
          .personaData=${this.personaData}
        ></radix-persona-card>
        <div>
          ${(this.accounts || []).map(
      ({ label: e, address: t, appearanceId: n }) => Z`<radix-account
                label=${e}
                address=${t}
                appearanceId=${n}
              ></radix-account>`
    )}
        </div>
      </div>
      <div class="buttons">
        <button id="update-data" @click=${this.onUpdateData}>
          Update Data Sharing
        </button>
        <button id="logout" @click=${this.onLogout}>Log Out</button>
      </div>`;
  }
};
Vt.styles = [
  tt,
  AS,
  ke`
      :host {
        width: 100%;
      }
      .content {
        max-height: 193px;
        overflow-x: hidden;
      }
      .buttons {
        display: grid;
        bottom: 0;
        width: 100%;
        grid-template-columns: 1fr 143px;
        grid-gap: 10px;
        width: 100%;
        padding-top: 5px;
        align-items: end;
      }
      button {
        padding: 11px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }

      button::before {
        content: '';
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: var(--radix-button-text-color);
        display: block;
        width: 20px;
        height: 20px;
      }

      #update-data,
      #logout {
        cursor: pointer;
      }

      #update-data::before {
        -webkit-mask-image: url(${te(Xd)});
        mask-image: url(${te(Xd)});
      }

      #logout::before {
        -webkit-mask-image: url(${te($d)});
        mask-image: url(${te($d)});
      }
    `
];
Wn([
  O({
    type: String,
    reflect: !0
  })
], Vt.prototype, "mode", 2);
Wn([
  O({
    type: String
  })
], Vt.prototype, "avatarUrl", 2);
Wn([
  O({
    type: String
  })
], Vt.prototype, "persona", 2);
Wn([
  O({
    type: String
  })
], Vt.prototype, "dAppName", 2);
Wn([
  O({
    type: Array
  })
], Vt.prototype, "personaData", 2);
Wn([
  O({
    type: Array
  })
], Vt.prototype, "accounts", 2);
Vt = Wn([
  qe("radix-sharing-page")
], Vt);
var Bz = Object.defineProperty, Gz = Object.getOwnPropertyDescriptor, ba = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Gz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Bz(t, n, a), a;
};
let Un = class extends xe {
  constructor() {
    super(...arguments), this.mode = nt.light, this.requestItems = [], this.dAppName = "", this.loggedInTimestamp = "";
  }
  render() {
    return Z`
      <div class="header">Connected to ${this.dAppName}</div>
      <slot name="subheader"></slot>
      ${this.loggedInTimestamp ? Z`<div class="subheader">
            Since logged in: ${OS(this.loggedInTimestamp, ", ")}
          </div>` : ""}
      <div class="content">
        ${(this.requestItems || []).map(
      (e) => Z`<radix-request-card
            type="${e.type}"
            status="${e.status}"
            id="${e.id}"
            transactionIntentHash="${e.transactionIntentHash}"
            ?showCancel="${e.showCancel}"
            @onCancel=${(t) => {
        this.dispatchEvent(
          new CustomEvent("onCancel", {
            detail: t.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
            timestamp=${e.timestamp}
            mode=${this.mode}
          ></radix-request-card>`
    )}
      </div>
    `;
  }
};
Un.styles = [
  tt,
  AS,
  ke`
      .subheader {
        color: var(--radix-card-text-dimmed-color);
        margin-top: -12px;
        margin-bottom: 15px;
        text-align: center;
        font-size: 12px;
      }
    `
];
ba([
  O({
    type: String,
    reflect: !0
  })
], Un.prototype, "mode", 2);
ba([
  O({ type: Array })
], Un.prototype, "requestItems", 2);
ba([
  O({
    type: String
  })
], Un.prototype, "dAppName", 2);
ba([
  O({
    type: String
  })
], Un.prototype, "loggedInTimestamp", 2);
Un = ba([
  qe("radix-requests-page")
], Un);
var Wz = Object.defineProperty, Kz = Object.getOwnPropertyDescriptor, Se = (e, t, n, r) => {
  for (var a = r > 1 ? void 0 : r ? Kz(t, n) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (a = (r ? o(t, n, a) : o(a)) || a);
  return r && a && Wz(t, n, a), a;
};
let pe = class extends xe {
  constructor() {
    super(), this.theme = "radix-blue", this.dAppName = "", this.personaLabel = "", this.connected = !1, this.status = En.default, this.loggedInTimestamp = "", this.showPopoverMenu = !1, this.requestItems = [], this.accounts = [], this.personaData = [], this.isMobile = !1, this.isWalletLinked = !1, this.isExtensionAvailable = !1, this.fullWidth = !1, this.activeTab = "sharing", this.mode = "light", this.avatarUrl = "", this.compact = !1, this.windowClickEventHandler = (e) => {
      this.showPopoverMenu && (this.contains(e.target) || (this.showPopoverMenu = !1));
    }, document.addEventListener("click", this.windowClickEventHandler);
  }
  get hasSharedData() {
    return !!(this.accounts.length || this.personaData.length);
  }
  connectedCallback() {
    super.connectedCallback(), this.dispatchEvent(
      new CustomEvent("onRender", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.windowClickEventHandler), this.dispatchEvent(
      new CustomEvent("onDestroy", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  togglePopoverMenu() {
    this.showPopoverMenu = !this.showPopoverMenu, this.showPopoverMenu && this.dispatchEvent(
      new CustomEvent("onShowPopoverMenu", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  closePopover() {
    this.showPopoverMenu = !1;
  }
  connectButtonTemplate() {
    const e = this.connected ? this.personaLabel : "Connect";
    return Z` <radix-button
      status=${this.status}
      theme=${this.theme}
      ?connected=${this.connected}
      ?fullWidth=${this.fullWidth}
      @onClick=${this.togglePopoverMenu}
      @onResize=${(t) => {
      this.compact = t.detail.offsetWidth === 40;
    }}
      ><div>${e}</div></radix-button
    >`;
  }
  connectTemplate() {
    if (!this.connected)
      return Z` <radix-not-connected-page
      mode=${this.mode}
      status=${this.status}
      ?isMobile=${this.isMobile}
      .requestItems=${this.requestItems}
      ?isWalletLinked=${this.isWalletLinked}
      ?isExtensionAvailable=${this.isExtensionAvailable}
    >
    </radix-not-connected-page>`;
  }
  renderSharingTemplate() {
    return Z` <radix-sharing-page
      mode=${this.mode}
      dAppName=${this.dAppName}
      avatarUrl=${this.avatarUrl}
      persona=${this.personaLabel}
      .personaData=${(this.personaData || []).map((e) => e.value)}
      .accounts=${this.accounts}
      @onLogout=${() => {
      this.dispatchEvent(
        new CustomEvent("onDisconnect", {
          bubbles: !0,
          composed: !0
        })
      );
    }}
      @onUpdateData=${() => {
      this.dispatchEvent(
        new CustomEvent("onUpdateSharedData", {
          bubbles: !0,
          composed: !0
        })
      );
    }}
    ></radix-sharing-page>`;
  }
  renderRequestItemsTemplate() {
    return Z` <radix-requests-page
      mode=${this.mode}
      loggedInTimestamp=${this.loggedInTimestamp}
      dAppName=${this.dAppName}
      .requestItems=${this.requestItems}
    ></radix-requests-page>`;
  }
  popoverTemplate() {
    return this.showPopoverMenu ? Z` <radix-popover
      mode="${this.mode}"
      ?connected=${this.connected}
      ?compact=${this.compact}
      ?isMobile=${this.isMobile}
      @onClosePopover=${() => {
      this.closePopover();
    }}
      class=${Rt({
      popover: !0,
      "show-popover": this.showPopoverMenu,
      mobile: this.isMobile
    })}
    >
      ${this.connected ? Z`
            <radix-tabs-menu
              active=${this.activeTab}
              mode=${this.mode}
              @onClick="${(e) => {
      this.activeTab = e.detail.value;
    }}"
            ></radix-tabs-menu>

            ${this.activeTab === "sharing" ? this.renderSharingTemplate() : this.renderRequestItemsTemplate()}
          ` : this.connectTemplate()}
    </radix-popover>` : "";
  }
  render() {
    return Z`${this.connectButtonTemplate()} ${this.popoverTemplate()}`;
  }
};
pe.styles = ke`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;500;600;700&display=swap');

    :root {
      font-family: 'IBM Plex Sans';
      font-weight: 400;
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :host {
      text-align: left;
      font-family: 'IBM Plex Sans';
      position: relative;
      z-index: 1000;
      display: inline-block;

      /* Core colors */
      --color-radix-green-1: #00ab84;
      --color-radix-green-2: #00c389;
      --color-radix-green-3: #21ffbe;
      --color-radix-blue-1: #060f8f;
      --color-radix-blue-2: #052cc0;
      --color-radix-blue-3: #20e4ff;
      --color-light: #ffffff;
      --color-dark: #000000;

      /* Accent colors */
      --color-accent-red: #ef4136;
      --color-accent-blue: #00aeef;
      --color-accent-yellow: #fff200;
      --color-alert: #e59700;
      --color-radix-error-red-1: #c82020;
      --color-radix-error-red-2: #fcebeb;

      /* Neutral colors */
      --color-grey-1: #003057;
      --color-grey-2: #8a8fa4;
      --color-grey-3: #ced0d6;
      --color-grey-4: #e2e5ed;
      --color-grey-5: #f4f5f9;
    }

    .popover {
      position: absolute;
      top: calc(100% + 0.5rem);
      right: 0;
    }

    .mobile.popover {
      position: fixed;
      top: 0;
      left: 0;
      right: unset;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.4);
    }

    @-webkit-keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }
    @keyframes slide-bottom {
      0% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
      100% {
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        opacity: 1;
      }
    }

    radix-popover {
      opacity: 0;
    }
    radix-popover.show-popover {
      -webkit-animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  `;
Se([
  O({
    type: String
  })
], pe.prototype, "theme", 2);
Se([
  O({ type: String })
], pe.prototype, "dAppName", 2);
Se([
  O({ type: String })
], pe.prototype, "personaLabel", 2);
Se([
  O({ type: Boolean })
], pe.prototype, "connected", 2);
Se([
  O({
    type: String
  })
], pe.prototype, "status", 2);
Se([
  O({ type: String })
], pe.prototype, "loggedInTimestamp", 2);
Se([
  O({ type: Boolean })
], pe.prototype, "showPopoverMenu", 2);
Se([
  O({ type: Array })
], pe.prototype, "requestItems", 2);
Se([
  O({ type: Array })
], pe.prototype, "accounts", 2);
Se([
  O({
    type: Array
  })
], pe.prototype, "personaData", 2);
Se([
  O({
    type: Boolean
  })
], pe.prototype, "isMobile", 2);
Se([
  O({
    type: Boolean
  })
], pe.prototype, "isWalletLinked", 2);
Se([
  O({
    type: Boolean
  })
], pe.prototype, "isExtensionAvailable", 2);
Se([
  O({
    type: Boolean
  })
], pe.prototype, "fullWidth", 2);
Se([
  O({
    type: String
  })
], pe.prototype, "activeTab", 2);
Se([
  O({ type: String })
], pe.prototype, "mode", 2);
Se([
  O({ type: String })
], pe.prototype, "avatarUrl", 2);
Se([
  O({ type: Boolean, state: !0 })
], pe.prototype, "compact", 2);
pe = Se([
  qe("radix-connect-button")
], pe);
const Hz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ConnectButton() {
    return pe;
  },
  RadixButtonMode: nt,
  RadixButtonStatus: En
}, Symbol.toStringTag, { value: "Module" }));
export {
  i4 as default
};

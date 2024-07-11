/* eslint-disable */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("Flowbite", [], e)
    : "object" == typeof exports
    ? (exports.Flowbite = e())
    : (t.Flowbite = e());
})(self, function () {
  return (function () {
    "use strict";
    var t = {
        647: function (t, e, i) {
          i.r(e);
        },
        853: function (t, e, i) {
          i.r(e),
            i.d(e, {
              afterMain: function () {
                return w;
              },
              afterRead: function () {
                return y;
              },
              afterWrite: function () {
                return k;
              },
              applyStyles: function () {
                return H;
              },
              arrow: function () {
                return Z;
              },
              auto: function () {
                return a;
              },
              basePlacements: function () {
                return c;
              },
              beforeMain: function () {
                return b;
              },
              beforeRead: function () {
                return _;
              },
              beforeWrite: function () {
                return L;
              },
              bottom: function () {
                return o;
              },
              clippingParents: function () {
                return u;
              },
              computeStyles: function () {
                return it;
              },
              createPopper: function () {
                return Ht;
              },
              createPopperBase: function () {
                return Pt;
              },
              createPopperLite: function () {
                return Dt;
              },
              detectOverflow: function () {
                return mt;
              },
              end: function () {
                return d;
              },
              eventListeners: function () {
                return ot;
              },
              flip: function () {
                return yt;
              },
              hide: function () {
                return wt;
              },
              left: function () {
                return s;
              },
              main: function () {
                return E;
              },
              modifierPhases: function () {
                return O;
              },
              offset: function () {
                return Lt;
              },
              placements: function () {
                return g;
              },
              popper: function () {
                return h;
              },
              popperGenerator: function () {
                return Ct;
              },
              popperOffsets: function () {
                return At;
              },
              preventOverflow: function () {
                return kt;
              },
              read: function () {
                return m;
              },
              reference: function () {
                return f;
              },
              right: function () {
                return r;
              },
              start: function () {
                return l;
              },
              top: function () {
                return n;
              },
              variationPlacements: function () {
                return v;
              },
              viewport: function () {
                return p;
              },
              write: function () {
                return A;
              },
            });
          var n = "top",
            o = "bottom",
            r = "right",
            s = "left",
            a = "auto",
            c = [n, o, r, s],
            l = "start",
            d = "end",
            u = "clippingParents",
            p = "viewport",
            h = "popper",
            f = "reference",
            v = c.reduce(function (t, e) {
              return t.concat([e + "-" + l, e + "-" + d]);
            }, []),
            g = [].concat(c, [a]).reduce(function (t, e) {
              return t.concat([e, e + "-" + l, e + "-" + d]);
            }, []),
            _ = "beforeRead",
            m = "read",
            y = "afterRead",
            b = "beforeMain",
            E = "main",
            w = "afterMain",
            L = "beforeWrite",
            A = "write",
            k = "afterWrite",
            O = [_, m, y, b, E, w, L, A, k];
          function x(t) {
            return t ? (t.nodeName || "").toLowerCase() : null;
          }
          function I(t) {
            if (null == t) return window;
            if ("[object Window]" !== t.toString()) {
              var e = t.ownerDocument;
              return (e && e.defaultView) || window;
            }
            return t;
          }
          function T(t) {
            return t instanceof I(t).Element || t instanceof Element;
          }
          function C(t) {
            return t instanceof I(t).HTMLElement || t instanceof HTMLElement;
          }
          function P(t) {
            return (
              "undefined" != typeof ShadowRoot &&
              (t instanceof I(t).ShadowRoot || t instanceof ShadowRoot)
            );
          }
          var H = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                  n = e.attributes[t] || {},
                  o = e.elements[t];
                C(o) &&
                  x(o) &&
                  (Object.assign(o.style, i),
                  Object.keys(n).forEach(function (t) {
                    var e = n[t];
                    !1 === e
                      ? o.removeAttribute(t)
                      : o.setAttribute(t, !0 === e ? "" : e);
                  }));
              });
            },
            effect: function (t) {
              var e = t.state,
                i = {
                  popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow &&
                  Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                  Object.keys(e.elements).forEach(function (t) {
                    var n = e.elements[t],
                      o = e.attributes[t] || {},
                      r = Object.keys(
                        e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                      ).reduce(function (t, e) {
                        return (t[e] = ""), t;
                      }, {});
                    C(n) &&
                      x(n) &&
                      (Object.assign(n.style, r),
                      Object.keys(o).forEach(function (t) {
                        n.removeAttribute(t);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          };
          function D(t) {
            return t.split("-")[0];
          }
          var j = Math.max,
            S = Math.min,
            z = Math.round;
          function M() {
            var t = navigator.userAgentData;
            return null != t && t.brands
              ? t.brands
                  .map(function (t) {
                    return t.brand + "/" + t.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function q() {
            return !/^((?!chrome|android).)*safari/i.test(M());
          }
          function B(t, e, i) {
            void 0 === e && (e = !1), void 0 === i && (i = !1);
            var n = t.getBoundingClientRect(),
              o = 1,
              r = 1;
            e &&
              C(t) &&
              ((o = (t.offsetWidth > 0 && z(n.width) / t.offsetWidth) || 1),
              (r = (t.offsetHeight > 0 && z(n.height) / t.offsetHeight) || 1));
            var s = (T(t) ? I(t) : window).visualViewport,
              a = !q() && i,
              c = (n.left + (a && s ? s.offsetLeft : 0)) / o,
              l = (n.top + (a && s ? s.offsetTop : 0)) / r,
              d = n.width / o,
              u = n.height / r;
            return {
              width: d,
              height: u,
              top: l,
              right: c + d,
              bottom: l + u,
              left: c,
              x: c,
              y: l,
            };
          }
          function R(t) {
            var e = B(t),
              i = t.offsetWidth,
              n = t.offsetHeight;
            return (
              Math.abs(e.width - i) <= 1 && (i = e.width),
              Math.abs(e.height - n) <= 1 && (n = e.height),
              { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
            );
          }
          function V(t, e) {
            var i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && P(i)) {
              var n = e;
              do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
              } while (n);
            }
            return !1;
          }
          function W(t) {
            return I(t).getComputedStyle(t);
          }
          function F(t) {
            return ["table", "td", "th"].indexOf(x(t)) >= 0;
          }
          function K(t) {
            return ((T(t) ? t.ownerDocument : t.document) || window.document)
              .documentElement;
          }
          function N(t) {
            return "html" === x(t)
              ? t
              : t.assignedSlot ||
                  t.parentNode ||
                  (P(t) ? t.host : null) ||
                  K(t);
          }
          function U(t) {
            return C(t) && "fixed" !== W(t).position ? t.offsetParent : null;
          }
          function X(t) {
            for (
              var e = I(t), i = U(t);
              i && F(i) && "static" === W(i).position;

            )
              i = U(i);
            return i &&
              ("html" === x(i) ||
                ("body" === x(i) && "static" === W(i).position))
              ? e
              : i ||
                  (function (t) {
                    var e = /firefox/i.test(M());
                    if (
                      /Trident/i.test(M()) &&
                      C(t) &&
                      "fixed" === W(t).position
                    )
                      return null;
                    var i = N(t);
                    for (
                      P(i) && (i = i.host);
                      C(i) && ["html", "body"].indexOf(x(i)) < 0;

                    ) {
                      var n = W(i);
                      if (
                        "none" !== n.transform ||
                        "none" !== n.perspective ||
                        "paint" === n.contain ||
                        -1 !==
                          ["transform", "perspective"].indexOf(n.willChange) ||
                        (e && "filter" === n.willChange) ||
                        (e && n.filter && "none" !== n.filter)
                      )
                        return i;
                      i = i.parentNode;
                    }
                    return null;
                  })(t) ||
                  e;
          }
          function Y(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
          }
          function G(t, e, i) {
            return j(t, S(e, i));
          }
          function J(t) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              t
            );
          }
          function Q(t, e) {
            return e.reduce(function (e, i) {
              return (e[i] = t), e;
            }, {});
          }
          var Z = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
              var e,
                i = t.state,
                a = t.name,
                l = t.options,
                d = i.elements.arrow,
                u = i.modifiersData.popperOffsets,
                p = D(i.placement),
                h = Y(p),
                f = [s, r].indexOf(p) >= 0 ? "height" : "width";
              if (d && u) {
                var v = (function (t, e) {
                    return J(
                      "number" !=
                        typeof (t =
                          "function" == typeof t
                            ? t(
                                Object.assign({}, e.rects, {
                                  placement: e.placement,
                                })
                              )
                            : t)
                        ? t
                        : Q(t, c)
                    );
                  })(l.padding, i),
                  g = R(d),
                  _ = "y" === h ? n : s,
                  m = "y" === h ? o : r,
                  y =
                    i.rects.reference[f] +
                    i.rects.reference[h] -
                    u[h] -
                    i.rects.popper[f],
                  b = u[h] - i.rects.reference[h],
                  E = X(d),
                  w = E
                    ? "y" === h
                      ? E.clientHeight || 0
                      : E.clientWidth || 0
                    : 0,
                  L = y / 2 - b / 2,
                  A = v[_],
                  k = w - g[f] - v[m],
                  O = w / 2 - g[f] / 2 + L,
                  x = G(A, O, k),
                  I = h;
                i.modifiersData[a] =
                  (((e = {})[I] = x), (e.centerOffset = x - O), e);
              }
            },
            effect: function (t) {
              var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
              null != n &&
                ("string" != typeof n ||
                  (n = e.elements.popper.querySelector(n))) &&
                V(e.elements.popper, n) &&
                (e.elements.arrow = n);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function $(t) {
            return t.split("-")[1];
          }
          var tt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function et(t) {
            var e,
              i = t.popper,
              a = t.popperRect,
              c = t.placement,
              l = t.variation,
              u = t.offsets,
              p = t.position,
              h = t.gpuAcceleration,
              f = t.adaptive,
              v = t.roundOffsets,
              g = t.isFixed,
              _ = u.x,
              m = void 0 === _ ? 0 : _,
              y = u.y,
              b = void 0 === y ? 0 : y,
              E = "function" == typeof v ? v({ x: m, y: b }) : { x: m, y: b };
            (m = E.x), (b = E.y);
            var w = u.hasOwnProperty("x"),
              L = u.hasOwnProperty("y"),
              A = s,
              k = n,
              O = window;
            if (f) {
              var x = X(i),
                T = "clientHeight",
                C = "clientWidth";
              if (
                (x === I(i) &&
                  "static" !== W((x = K(i))).position &&
                  "absolute" === p &&
                  ((T = "scrollHeight"), (C = "scrollWidth")),
                c === n || ((c === s || c === r) && l === d))
              )
                (k = o),
                  (b -=
                    (g && x === O && O.visualViewport
                      ? O.visualViewport.height
                      : x[T]) - a.height),
                  (b *= h ? 1 : -1);
              if (c === s || ((c === n || c === o) && l === d))
                (A = r),
                  (m -=
                    (g && x === O && O.visualViewport
                      ? O.visualViewport.width
                      : x[C]) - a.width),
                  (m *= h ? 1 : -1);
            }
            var P,
              H = Object.assign({ position: p }, f && tt),
              D =
                !0 === v
                  ? (function (t) {
                      var e = t.x,
                        i = t.y,
                        n = window.devicePixelRatio || 1;
                      return { x: z(e * n) / n || 0, y: z(i * n) / n || 0 };
                    })({ x: m, y: b })
                  : { x: m, y: b };
            return (
              (m = D.x),
              (b = D.y),
              h
                ? Object.assign(
                    {},
                    H,
                    (((P = {})[k] = L ? "0" : ""),
                    (P[A] = w ? "0" : ""),
                    (P.transform =
                      (O.devicePixelRatio || 1) <= 1
                        ? "translate(" + m + "px, " + b + "px)"
                        : "translate3d(" + m + "px, " + b + "px, 0)"),
                    P)
                  )
                : Object.assign(
                    {},
                    H,
                    (((e = {})[k] = L ? b + "px" : ""),
                    (e[A] = w ? m + "px" : ""),
                    (e.transform = ""),
                    e)
                  )
            );
          }
          var it = {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (t) {
                var e = t.state,
                  i = t.options,
                  n = i.gpuAcceleration,
                  o = void 0 === n || n,
                  r = i.adaptive,
                  s = void 0 === r || r,
                  a = i.roundOffsets,
                  c = void 0 === a || a,
                  l = {
                    placement: D(e.placement),
                    variation: $(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === e.options.strategy,
                  };
                null != e.modifiersData.popperOffsets &&
                  (e.styles.popper = Object.assign(
                    {},
                    e.styles.popper,
                    et(
                      Object.assign({}, l, {
                        offsets: e.modifiersData.popperOffsets,
                        position: e.options.strategy,
                        adaptive: s,
                        roundOffsets: c,
                      })
                    )
                  )),
                  null != e.modifiersData.arrow &&
                    (e.styles.arrow = Object.assign(
                      {},
                      e.styles.arrow,
                      et(
                        Object.assign({}, l, {
                          offsets: e.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: c,
                        })
                      )
                    )),
                  (e.attributes.popper = Object.assign(
                    {},
                    e.attributes.popper,
                    { "data-popper-placement": e.placement }
                  ));
              },
              data: {},
            },
            nt = { passive: !0 };
          var ot = {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (t) {
                var e = t.state,
                  i = t.instance,
                  n = t.options,
                  o = n.scroll,
                  r = void 0 === o || o,
                  s = n.resize,
                  a = void 0 === s || s,
                  c = I(e.elements.popper),
                  l = [].concat(
                    e.scrollParents.reference,
                    e.scrollParents.popper
                  );
                return (
                  r &&
                    l.forEach(function (t) {
                      t.addEventListener("scroll", i.update, nt);
                    }),
                  a && c.addEventListener("resize", i.update, nt),
                  function () {
                    r &&
                      l.forEach(function (t) {
                        t.removeEventListener("scroll", i.update, nt);
                      }),
                      a && c.removeEventListener("resize", i.update, nt);
                  }
                );
              },
              data: {},
            },
            rt = { left: "right", right: "left", bottom: "top", top: "bottom" };
          function st(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
              return rt[t];
            });
          }
          var at = { start: "end", end: "start" };
          function ct(t) {
            return t.replace(/start|end/g, function (t) {
              return at[t];
            });
          }
          function lt(t) {
            var e = I(t);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
          }
          function dt(t) {
            return B(K(t)).left + lt(t).scrollLeft;
          }
          function ut(t) {
            var e = W(t),
              i = e.overflow,
              n = e.overflowX,
              o = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(i + o + n);
          }
          function pt(t) {
            return ["html", "body", "#document"].indexOf(x(t)) >= 0
              ? t.ownerDocument.body
              : C(t) && ut(t)
              ? t
              : pt(N(t));
          }
          function ht(t, e) {
            var i;
            void 0 === e && (e = []);
            var n = pt(t),
              o = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
              r = I(n),
              s = o ? [r].concat(r.visualViewport || [], ut(n) ? n : []) : n,
              a = e.concat(s);
            return o ? a : a.concat(ht(N(s)));
          }
          function ft(t) {
            return Object.assign({}, t, {
              left: t.x,
              top: t.y,
              right: t.x + t.width,
              bottom: t.y + t.height,
            });
          }
          function vt(t, e, i) {
            return e === p
              ? ft(
                  (function (t, e) {
                    var i = I(t),
                      n = K(t),
                      o = i.visualViewport,
                      r = n.clientWidth,
                      s = n.clientHeight,
                      a = 0,
                      c = 0;
                    if (o) {
                      (r = o.width), (s = o.height);
                      var l = q();
                      (l || (!l && "fixed" === e)) &&
                        ((a = o.offsetLeft), (c = o.offsetTop));
                    }
                    return { width: r, height: s, x: a + dt(t), y: c };
                  })(t, i)
                )
              : T(e)
              ? (function (t, e) {
                  var i = B(t, !1, "fixed" === e);
                  return (
                    (i.top = i.top + t.clientTop),
                    (i.left = i.left + t.clientLeft),
                    (i.bottom = i.top + t.clientHeight),
                    (i.right = i.left + t.clientWidth),
                    (i.width = t.clientWidth),
                    (i.height = t.clientHeight),
                    (i.x = i.left),
                    (i.y = i.top),
                    i
                  );
                })(e, i)
              : ft(
                  (function (t) {
                    var e,
                      i = K(t),
                      n = lt(t),
                      o = null == (e = t.ownerDocument) ? void 0 : e.body,
                      r = j(
                        i.scrollWidth,
                        i.clientWidth,
                        o ? o.scrollWidth : 0,
                        o ? o.clientWidth : 0
                      ),
                      s = j(
                        i.scrollHeight,
                        i.clientHeight,
                        o ? o.scrollHeight : 0,
                        o ? o.clientHeight : 0
                      ),
                      a = -n.scrollLeft + dt(t),
                      c = -n.scrollTop;
                    return (
                      "rtl" === W(o || i).direction &&
                        (a += j(i.clientWidth, o ? o.clientWidth : 0) - r),
                      { width: r, height: s, x: a, y: c }
                    );
                  })(K(t))
                );
          }
          function gt(t, e, i, n) {
            var o =
                "clippingParents" === e
                  ? (function (t) {
                      var e = ht(N(t)),
                        i =
                          ["absolute", "fixed"].indexOf(W(t).position) >= 0 &&
                          C(t)
                            ? X(t)
                            : t;
                      return T(i)
                        ? e.filter(function (t) {
                            return T(t) && V(t, i) && "body" !== x(t);
                          })
                        : [];
                    })(t)
                  : [].concat(e),
              r = [].concat(o, [i]),
              s = r[0],
              a = r.reduce(function (e, i) {
                var o = vt(t, i, n);
                return (
                  (e.top = j(o.top, e.top)),
                  (e.right = S(o.right, e.right)),
                  (e.bottom = S(o.bottom, e.bottom)),
                  (e.left = j(o.left, e.left)),
                  e
                );
              }, vt(t, s, n));
            return (
              (a.width = a.right - a.left),
              (a.height = a.bottom - a.top),
              (a.x = a.left),
              (a.y = a.top),
              a
            );
          }
          function _t(t) {
            var e,
              i = t.reference,
              a = t.element,
              c = t.placement,
              u = c ? D(c) : null,
              p = c ? $(c) : null,
              h = i.x + i.width / 2 - a.width / 2,
              f = i.y + i.height / 2 - a.height / 2;
            switch (u) {
              case n:
                e = { x: h, y: i.y - a.height };
                break;
              case o:
                e = { x: h, y: i.y + i.height };
                break;
              case r:
                e = { x: i.x + i.width, y: f };
                break;
              case s:
                e = { x: i.x - a.width, y: f };
                break;
              default:
                e = { x: i.x, y: i.y };
            }
            var v = u ? Y(u) : null;
            if (null != v) {
              var g = "y" === v ? "height" : "width";
              switch (p) {
                case l:
                  e[v] = e[v] - (i[g] / 2 - a[g] / 2);
                  break;
                case d:
                  e[v] = e[v] + (i[g] / 2 - a[g] / 2);
              }
            }
            return e;
          }
          function mt(t, e) {
            void 0 === e && (e = {});
            var i = e,
              s = i.placement,
              a = void 0 === s ? t.placement : s,
              l = i.strategy,
              d = void 0 === l ? t.strategy : l,
              v = i.boundary,
              g = void 0 === v ? u : v,
              _ = i.rootBoundary,
              m = void 0 === _ ? p : _,
              y = i.elementContext,
              b = void 0 === y ? h : y,
              E = i.altBoundary,
              w = void 0 !== E && E,
              L = i.padding,
              A = void 0 === L ? 0 : L,
              k = J("number" != typeof A ? A : Q(A, c)),
              O = b === h ? f : h,
              x = t.rects.popper,
              I = t.elements[w ? O : b],
              C = gt(
                T(I) ? I : I.contextElement || K(t.elements.popper),
                g,
                m,
                d
              ),
              P = B(t.elements.reference),
              H = _t({
                reference: P,
                element: x,
                strategy: "absolute",
                placement: a,
              }),
              D = ft(Object.assign({}, x, H)),
              j = b === h ? D : P,
              S = {
                top: C.top - j.top + k.top,
                bottom: j.bottom - C.bottom + k.bottom,
                left: C.left - j.left + k.left,
                right: j.right - C.right + k.right,
              },
              z = t.modifiersData.offset;
            if (b === h && z) {
              var M = z[a];
              Object.keys(S).forEach(function (t) {
                var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
                  i = [n, o].indexOf(t) >= 0 ? "y" : "x";
                S[t] += M[i] * e;
              });
            }
            return S;
          }
          var yt = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (t) {
              var e = t.state,
                i = t.options,
                d = t.name;
              if (!e.modifiersData[d]._skip) {
                for (
                  var u = i.mainAxis,
                    p = void 0 === u || u,
                    h = i.altAxis,
                    f = void 0 === h || h,
                    _ = i.fallbackPlacements,
                    m = i.padding,
                    y = i.boundary,
                    b = i.rootBoundary,
                    E = i.altBoundary,
                    w = i.flipVariations,
                    L = void 0 === w || w,
                    A = i.allowedAutoPlacements,
                    k = e.options.placement,
                    O = D(k),
                    x =
                      _ ||
                      (O === k || !L
                        ? [st(k)]
                        : (function (t) {
                            if (D(t) === a) return [];
                            var e = st(t);
                            return [ct(t), e, ct(e)];
                          })(k)),
                    I = [k].concat(x).reduce(function (t, i) {
                      return t.concat(
                        D(i) === a
                          ? (function (t, e) {
                              void 0 === e && (e = {});
                              var i = e,
                                n = i.placement,
                                o = i.boundary,
                                r = i.rootBoundary,
                                s = i.padding,
                                a = i.flipVariations,
                                l = i.allowedAutoPlacements,
                                d = void 0 === l ? g : l,
                                u = $(n),
                                p = u
                                  ? a
                                    ? v
                                    : v.filter(function (t) {
                                        return $(t) === u;
                                      })
                                  : c,
                                h = p.filter(function (t) {
                                  return d.indexOf(t) >= 0;
                                });
                              0 === h.length && (h = p);
                              var f = h.reduce(function (e, i) {
                                return (
                                  (e[i] = mt(t, {
                                    placement: i,
                                    boundary: o,
                                    rootBoundary: r,
                                    padding: s,
                                  })[D(i)]),
                                  e
                                );
                              }, {});
                              return Object.keys(f).sort(function (t, e) {
                                return f[t] - f[e];
                              });
                            })(e, {
                              placement: i,
                              boundary: y,
                              rootBoundary: b,
                              padding: m,
                              flipVariations: L,
                              allowedAutoPlacements: A,
                            })
                          : i
                      );
                    }, []),
                    T = e.rects.reference,
                    C = e.rects.popper,
                    P = new Map(),
                    H = !0,
                    j = I[0],
                    S = 0;
                  S < I.length;
                  S++
                ) {
                  var z = I[S],
                    M = D(z),
                    q = $(z) === l,
                    B = [n, o].indexOf(M) >= 0,
                    R = B ? "width" : "height",
                    V = mt(e, {
                      placement: z,
                      boundary: y,
                      rootBoundary: b,
                      altBoundary: E,
                      padding: m,
                    }),
                    W = B ? (q ? r : s) : q ? o : n;
                  T[R] > C[R] && (W = st(W));
                  var F = st(W),
                    K = [];
                  if (
                    (p && K.push(V[M] <= 0),
                    f && K.push(V[W] <= 0, V[F] <= 0),
                    K.every(function (t) {
                      return t;
                    }))
                  ) {
                    (j = z), (H = !1);
                    break;
                  }
                  P.set(z, K);
                }
                if (H)
                  for (
                    var N = function (t) {
                        var e = I.find(function (e) {
                          var i = P.get(e);
                          if (i)
                            return i.slice(0, t).every(function (t) {
                              return t;
                            });
                        });
                        if (e) return (j = e), "break";
                      },
                      U = L ? 3 : 1;
                    U > 0;
                    U--
                  ) {
                    if ("break" === N(U)) break;
                  }
                e.placement !== j &&
                  ((e.modifiersData[d]._skip = !0),
                  (e.placement = j),
                  (e.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function bt(t, e, i) {
            return (
              void 0 === i && (i = { x: 0, y: 0 }),
              {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
              }
            );
          }
          function Et(t) {
            return [n, r, o, s].some(function (e) {
              return t[e] >= 0;
            });
          }
          var wt = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
              var e = t.state,
                i = t.name,
                n = e.rects.reference,
                o = e.rects.popper,
                r = e.modifiersData.preventOverflow,
                s = mt(e, { elementContext: "reference" }),
                a = mt(e, { altBoundary: !0 }),
                c = bt(s, n),
                l = bt(a, o, r),
                d = Et(c),
                u = Et(l);
              (e.modifiersData[i] = {
                referenceClippingOffsets: c,
                popperEscapeOffsets: l,
                isReferenceHidden: d,
                hasPopperEscaped: u,
              }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-reference-hidden": d,
                  "data-popper-escaped": u,
                }));
            },
          };
          var Lt = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
              var e = t.state,
                i = t.options,
                o = t.name,
                a = i.offset,
                c = void 0 === a ? [0, 0] : a,
                l = g.reduce(function (t, i) {
                  return (
                    (t[i] = (function (t, e, i) {
                      var o = D(t),
                        a = [s, n].indexOf(o) >= 0 ? -1 : 1,
                        c =
                          "function" == typeof i
                            ? i(Object.assign({}, e, { placement: t }))
                            : i,
                        l = c[0],
                        d = c[1];
                      return (
                        (l = l || 0),
                        (d = (d || 0) * a),
                        [s, r].indexOf(o) >= 0 ? { x: d, y: l } : { x: l, y: d }
                      );
                    })(i, e.rects, c)),
                    t
                  );
                }, {}),
                d = l[e.placement],
                u = d.x,
                p = d.y;
              null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += u),
                (e.modifiersData.popperOffsets.y += p)),
                (e.modifiersData[o] = l);
            },
          };
          var At = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
              var e = t.state,
                i = t.name;
              e.modifiersData[i] = _t({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement,
              });
            },
            data: {},
          };
          var kt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
              var e = t.state,
                i = t.options,
                a = t.name,
                c = i.mainAxis,
                d = void 0 === c || c,
                u = i.altAxis,
                p = void 0 !== u && u,
                h = i.boundary,
                f = i.rootBoundary,
                v = i.altBoundary,
                g = i.padding,
                _ = i.tether,
                m = void 0 === _ || _,
                y = i.tetherOffset,
                b = void 0 === y ? 0 : y,
                E = mt(e, {
                  boundary: h,
                  rootBoundary: f,
                  padding: g,
                  altBoundary: v,
                }),
                w = D(e.placement),
                L = $(e.placement),
                A = !L,
                k = Y(w),
                O = "x" === k ? "y" : "x",
                x = e.modifiersData.popperOffsets,
                I = e.rects.reference,
                T = e.rects.popper,
                C =
                  "function" == typeof b
                    ? b(Object.assign({}, e.rects, { placement: e.placement }))
                    : b,
                P =
                  "number" == typeof C
                    ? { mainAxis: C, altAxis: C }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
                H = e.modifiersData.offset
                  ? e.modifiersData.offset[e.placement]
                  : null,
                z = { x: 0, y: 0 };
              if (x) {
                if (d) {
                  var M,
                    q = "y" === k ? n : s,
                    B = "y" === k ? o : r,
                    V = "y" === k ? "height" : "width",
                    W = x[k],
                    F = W + E[q],
                    K = W - E[B],
                    N = m ? -T[V] / 2 : 0,
                    U = L === l ? I[V] : T[V],
                    J = L === l ? -T[V] : -I[V],
                    Q = e.elements.arrow,
                    Z = m && Q ? R(Q) : { width: 0, height: 0 },
                    tt = e.modifiersData["arrow#persistent"]
                      ? e.modifiersData["arrow#persistent"].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    et = tt[q],
                    it = tt[B],
                    nt = G(0, I[V], Z[V]),
                    ot = A
                      ? I[V] / 2 - N - nt - et - P.mainAxis
                      : U - nt - et - P.mainAxis,
                    rt = A
                      ? -I[V] / 2 + N + nt + it + P.mainAxis
                      : J + nt + it + P.mainAxis,
                    st = e.elements.arrow && X(e.elements.arrow),
                    at = st
                      ? "y" === k
                        ? st.clientTop || 0
                        : st.clientLeft || 0
                      : 0,
                    ct = null != (M = null == H ? void 0 : H[k]) ? M : 0,
                    lt = W + rt - ct,
                    dt = G(m ? S(F, W + ot - ct - at) : F, W, m ? j(K, lt) : K);
                  (x[k] = dt), (z[k] = dt - W);
                }
                if (p) {
                  var ut,
                    pt = "x" === k ? n : s,
                    ht = "x" === k ? o : r,
                    ft = x[O],
                    vt = "y" === O ? "height" : "width",
                    gt = ft + E[pt],
                    _t = ft - E[ht],
                    yt = -1 !== [n, s].indexOf(w),
                    bt = null != (ut = null == H ? void 0 : H[O]) ? ut : 0,
                    Et = yt ? gt : ft - I[vt] - T[vt] - bt + P.altAxis,
                    wt = yt ? ft + I[vt] + T[vt] - bt - P.altAxis : _t,
                    Lt =
                      m && yt
                        ? (function (t, e, i) {
                            var n = G(t, e, i);
                            return n > i ? i : n;
                          })(Et, ft, wt)
                        : G(m ? Et : gt, ft, m ? wt : _t);
                  (x[O] = Lt), (z[O] = Lt - ft);
                }
                e.modifiersData[a] = z;
              }
            },
            requiresIfExists: ["offset"],
          };
          function Ot(t, e, i) {
            void 0 === i && (i = !1);
            var n,
              o,
              r = C(e),
              s =
                C(e) &&
                (function (t) {
                  var e = t.getBoundingClientRect(),
                    i = z(e.width) / t.offsetWidth || 1,
                    n = z(e.height) / t.offsetHeight || 1;
                  return 1 !== i || 1 !== n;
                })(e),
              a = K(e),
              c = B(t, s, i),
              l = { scrollLeft: 0, scrollTop: 0 },
              d = { x: 0, y: 0 };
            return (
              (r || (!r && !i)) &&
                (("body" !== x(e) || ut(a)) &&
                  (l =
                    (n = e) !== I(n) && C(n)
                      ? {
                          scrollLeft: (o = n).scrollLeft,
                          scrollTop: o.scrollTop,
                        }
                      : lt(n)),
                C(e)
                  ? (((d = B(e, !0)).x += e.clientLeft), (d.y += e.clientTop))
                  : a && (d.x = dt(a))),
              {
                x: c.left + l.scrollLeft - d.x,
                y: c.top + l.scrollTop - d.y,
                width: c.width,
                height: c.height,
              }
            );
          }
          function xt(t) {
            var e = new Map(),
              i = new Set(),
              n = [];
            function o(t) {
              i.add(t.name),
                []
                  .concat(t.requires || [], t.requiresIfExists || [])
                  .forEach(function (t) {
                    if (!i.has(t)) {
                      var n = e.get(t);
                      n && o(n);
                    }
                  }),
                n.push(t);
            }
            return (
              t.forEach(function (t) {
                e.set(t.name, t);
              }),
              t.forEach(function (t) {
                i.has(t.name) || o(t);
              }),
              n
            );
          }
          var It = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function Tt() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return !e.some(function (t) {
              return !(t && "function" == typeof t.getBoundingClientRect);
            });
          }
          function Ct(t) {
            void 0 === t && (t = {});
            var e = t,
              i = e.defaultModifiers,
              n = void 0 === i ? [] : i,
              o = e.defaultOptions,
              r = void 0 === o ? It : o;
            return function (t, e, i) {
              void 0 === i && (i = r);
              var o,
                s,
                a = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, It, r),
                  modifiersData: {},
                  elements: { reference: t, popper: e },
                  attributes: {},
                  styles: {},
                },
                c = [],
                l = !1,
                d = {
                  state: a,
                  setOptions: function (i) {
                    var o = "function" == typeof i ? i(a.options) : i;
                    u(),
                      (a.options = Object.assign({}, r, a.options, o)),
                      (a.scrollParents = {
                        reference: T(t)
                          ? ht(t)
                          : t.contextElement
                          ? ht(t.contextElement)
                          : [],
                        popper: ht(e),
                      });
                    var s = (function (t) {
                      var e = xt(t);
                      return O.reduce(function (t, i) {
                        return t.concat(
                          e.filter(function (t) {
                            return t.phase === i;
                          })
                        );
                      }, []);
                    })(
                      (function (t) {
                        var e = t.reduce(function (t, e) {
                          var i = t[e.name];
                          return (
                            (t[e.name] = i
                              ? Object.assign({}, i, e, {
                                  options: Object.assign(
                                    {},
                                    i.options,
                                    e.options
                                  ),
                                  data: Object.assign({}, i.data, e.data),
                                })
                              : e),
                            t
                          );
                        }, {});
                        return Object.keys(e).map(function (t) {
                          return e[t];
                        });
                      })([].concat(n, a.options.modifiers))
                    );
                    return (
                      (a.orderedModifiers = s.filter(function (t) {
                        return t.enabled;
                      })),
                      a.orderedModifiers.forEach(function (t) {
                        var e = t.name,
                          i = t.options,
                          n = void 0 === i ? {} : i,
                          o = t.effect;
                        if ("function" == typeof o) {
                          var r = o({
                              state: a,
                              name: e,
                              instance: d,
                              options: n,
                            }),
                            s = function () {};
                          c.push(r || s);
                        }
                      }),
                      d.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!l) {
                      var t = a.elements,
                        e = t.reference,
                        i = t.popper;
                      if (Tt(e, i)) {
                        (a.rects = {
                          reference: Ot(
                            e,
                            X(i),
                            "fixed" === a.options.strategy
                          ),
                          popper: R(i),
                        }),
                          (a.reset = !1),
                          (a.placement = a.options.placement),
                          a.orderedModifiers.forEach(function (t) {
                            return (a.modifiersData[t.name] = Object.assign(
                              {},
                              t.data
                            ));
                          });
                        for (var n = 0; n < a.orderedModifiers.length; n++)
                          if (!0 !== a.reset) {
                            var o = a.orderedModifiers[n],
                              r = o.fn,
                              s = o.options,
                              c = void 0 === s ? {} : s,
                              u = o.name;
                            "function" == typeof r &&
                              (a =
                                r({
                                  state: a,
                                  options: c,
                                  name: u,
                                  instance: d,
                                }) || a);
                          } else (a.reset = !1), (n = -1);
                      }
                    }
                  },
                  update:
                    ((o = function () {
                      return new Promise(function (t) {
                        d.forceUpdate(), t(a);
                      });
                    }),
                    function () {
                      return (
                        s ||
                          (s = new Promise(function (t) {
                            Promise.resolve().then(function () {
                              (s = void 0), t(o());
                            });
                          })),
                        s
                      );
                    }),
                  destroy: function () {
                    u(), (l = !0);
                  },
                };
              if (!Tt(t, e)) return d;
              function u() {
                c.forEach(function (t) {
                  return t();
                }),
                  (c = []);
              }
              return (
                d.setOptions(i).then(function (t) {
                  !l && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                d
              );
            };
          }
          var Pt = Ct(),
            Ht = Ct({ defaultModifiers: [ot, At, it, H, Lt, yt, kt, Z, wt] }),
            Dt = Ct({ defaultModifiers: [ot, At, it, H] });
        },
        902: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initAccordions = void 0);
          var o = i(423),
            r = {
              alwaysOpen: !1,
              activeClasses:
                "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
              inactiveClasses: "text-gray-500 dark:text-gray-400",
              onOpen: function () {},
              onClose: function () {},
              onToggle: function () {},
            },
            s = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = []),
                  void 0 === i && (i = r),
                  (this._accordionEl = t),
                  (this._items = e),
                  (this._options = n(n({}, r), i)),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance(
                    "Accordion",
                    this,
                    this._accordionEl.id,
                    !0
                  );
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._items.length &&
                    !this._initialized &&
                    (this._items.forEach(function (e) {
                      e.active && t.open(e.id);
                      var i = function () {
                        t.toggle(e.id);
                      };
                      e.triggerEl.addEventListener("click", i),
                        (e.clickHandler = i);
                    }),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._items.length &&
                    this._initialized &&
                    (this._items.forEach(function (t) {
                      t.triggerEl.removeEventListener("click", t.clickHandler),
                        delete t.clickHandler;
                    }),
                    (this._initialized = !1));
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Accordion", this._accordionEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.getItem = function (t) {
                  return this._items.filter(function (e) {
                    return e.id === t;
                  })[0];
                }),
                (t.prototype.open = function (t) {
                  var e,
                    i,
                    n = this,
                    o = this.getItem(t);
                  this._options.alwaysOpen ||
                    this._items.map(function (t) {
                      var e, i;
                      t !== o &&
                        ((e = t.triggerEl.classList).remove.apply(
                          e,
                          n._options.activeClasses.split(" ")
                        ),
                        (i = t.triggerEl.classList).add.apply(
                          i,
                          n._options.inactiveClasses.split(" ")
                        ),
                        t.targetEl.classList.add("hidden"),
                        t.triggerEl.setAttribute("aria-expanded", "false"),
                        (t.active = !1),
                        t.iconEl && t.iconEl.classList.remove("rotate-180"));
                    }),
                    (e = o.triggerEl.classList).add.apply(
                      e,
                      this._options.activeClasses.split(" ")
                    ),
                    (i = o.triggerEl.classList).remove.apply(
                      i,
                      this._options.inactiveClasses.split(" ")
                    ),
                    o.triggerEl.setAttribute("aria-expanded", "true"),
                    o.targetEl.classList.remove("hidden"),
                    (o.active = !0),
                    o.iconEl && o.iconEl.classList.add("rotate-180"),
                    this._options.onOpen(this, o);
                }),
                (t.prototype.toggle = function (t) {
                  var e = this.getItem(t);
                  e.active ? this.close(t) : this.open(t),
                    this._options.onToggle(this, e);
                }),
                (t.prototype.close = function (t) {
                  var e,
                    i,
                    n = this.getItem(t);
                  (e = n.triggerEl.classList).remove.apply(
                    e,
                    this._options.activeClasses.split(" ")
                  ),
                    (i = n.triggerEl.classList).add.apply(
                      i,
                      this._options.inactiveClasses.split(" ")
                    ),
                    n.targetEl.classList.add("hidden"),
                    n.triggerEl.setAttribute("aria-expanded", "false"),
                    (n.active = !1),
                    n.iconEl && n.iconEl.classList.remove("rotate-180"),
                    this._options.onClose(this, n);
                }),
                t
              );
            })();
          function a() {
            document.querySelectorAll("[data-accordion]").forEach(function (t) {
              var e = t.getAttribute("data-accordion"),
                i = t.getAttribute("data-active-classes"),
                n = t.getAttribute("data-inactive-classes"),
                o = [];
              t
                .querySelectorAll("[data-accordion-target]")
                .forEach(function (e) {
                  if (e.closest("[data-accordion]") === t) {
                    var i = {
                      id: e.getAttribute("data-accordion-target"),
                      triggerEl: e,
                      targetEl: document.querySelector(
                        e.getAttribute("data-accordion-target")
                      ),
                      iconEl: e.querySelector("[data-accordion-icon]"),
                      active: "true" === e.getAttribute("aria-expanded"),
                    };
                    o.push(i);
                  }
                }),
                new s(t, o, {
                  alwaysOpen: "open" === e,
                  activeClasses: i || r.activeClasses,
                  inactiveClasses: n || r.inactiveClasses,
                });
            });
          }
          (e.initAccordions = a),
            "undefined" != typeof window &&
              ((window.Accordion = s), (window.initAccordions = a)),
            (e.default = s);
        },
        33: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initCarousels = void 0);
          var o = i(423),
            r = {
              defaultPosition: 0,
              indicators: {
                items: [],
                activeClasses: "bg-white dark:bg-gray-800",
                inactiveClasses:
                  "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
              },
              interval: 3e3,
              onNext: function () {},
              onPrev: function () {},
              onChange: function () {},
            },
            s = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = []),
                  void 0 === i && (i = r),
                  (this._carouselEl = t),
                  (this._items = e),
                  (this._options = n(n(n({}, r), i), {
                    indicators: n(n({}, r.indicators), i.indicators),
                  })),
                  (this._activeItem = this.getItem(
                    this._options.defaultPosition
                  )),
                  (this._indicators = this._options.indicators.items),
                  (this._intervalDuration = this._options.interval),
                  (this._intervalInstance = null),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance(
                    "Carousel",
                    this,
                    this._carouselEl.id,
                    !0
                  );
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._items.length &&
                    !this._initialized &&
                    (this._items.map(function (t) {
                      t.el.classList.add(
                        "absolute",
                        "inset-0",
                        "transition-transform",
                        "transform"
                      );
                    }),
                    this._getActiveItem()
                      ? this.slideTo(this._getActiveItem().position)
                      : this.slideTo(0),
                    this._indicators.map(function (e, i) {
                      e.el.addEventListener("click", function () {
                        t.slideTo(i);
                      });
                    }),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._initialized && (this._initialized = !1);
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Carousel", this._carouselEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.getItem = function (t) {
                  return this._items[t];
                }),
                (t.prototype.slideTo = function (t) {
                  var e = this._items[t],
                    i = {
                      left:
                        0 === e.position
                          ? this._items[this._items.length - 1]
                          : this._items[e.position - 1],
                      middle: e,
                      right:
                        e.position === this._items.length - 1
                          ? this._items[0]
                          : this._items[e.position + 1],
                    };
                  this._rotate(i),
                    this._setActiveItem(e),
                    this._intervalInstance && (this.pause(), this.cycle()),
                    this._options.onChange(this);
                }),
                (t.prototype.next = function () {
                  var t = this._getActiveItem(),
                    e = null;
                  (e =
                    t.position === this._items.length - 1
                      ? this._items[0]
                      : this._items[t.position + 1]),
                    this.slideTo(e.position),
                    this._options.onNext(this);
                }),
                (t.prototype.prev = function () {
                  var t = this._getActiveItem(),
                    e = null;
                  (e =
                    0 === t.position
                      ? this._items[this._items.length - 1]
                      : this._items[t.position - 1]),
                    this.slideTo(e.position),
                    this._options.onPrev(this);
                }),
                (t.prototype._rotate = function (t) {
                  this._items.map(function (t) {
                    t.el.classList.add("hidden");
                  }),
                    t.left.el.classList.remove(
                      "-translate-x-full",
                      "translate-x-full",
                      "translate-x-0",
                      "hidden",
                      "z-20"
                    ),
                    t.left.el.classList.add("-translate-x-full", "z-10"),
                    t.middle.el.classList.remove(
                      "-translate-x-full",
                      "translate-x-full",
                      "translate-x-0",
                      "hidden",
                      "z-10"
                    ),
                    t.middle.el.classList.add("translate-x-0", "z-20"),
                    t.right.el.classList.remove(
                      "-translate-x-full",
                      "translate-x-full",
                      "translate-x-0",
                      "hidden",
                      "z-20"
                    ),
                    t.right.el.classList.add("translate-x-full", "z-10");
                }),
                (t.prototype.cycle = function () {
                  var t = this;
                  "undefined" != typeof window &&
                    (this._intervalInstance = window.setInterval(function () {
                      t.next();
                    }, this._intervalDuration));
                }),
                (t.prototype.pause = function () {
                  clearInterval(this._intervalInstance);
                }),
                (t.prototype._getActiveItem = function () {
                  return this._activeItem;
                }),
                (t.prototype._setActiveItem = function (t) {
                  var e,
                    i,
                    n = this;
                  this._activeItem = t;
                  var o = t.position;
                  this._indicators.length &&
                    (this._indicators.map(function (t) {
                      var e, i;
                      t.el.setAttribute("aria-current", "false"),
                        (e = t.el.classList).remove.apply(
                          e,
                          n._options.indicators.activeClasses.split(" ")
                        ),
                        (i = t.el.classList).add.apply(
                          i,
                          n._options.indicators.inactiveClasses.split(" ")
                        );
                    }),
                    (e = this._indicators[o].el.classList).add.apply(
                      e,
                      this._options.indicators.activeClasses.split(" ")
                    ),
                    (i = this._indicators[o].el.classList).remove.apply(
                      i,
                      this._options.indicators.inactiveClasses.split(" ")
                    ),
                    this._indicators[o].el.setAttribute(
                      "aria-current",
                      "true"
                    ));
                }),
                t
              );
            })();
          function a() {
            document.querySelectorAll("[data-carousel]").forEach(function (t) {
              var e = t.getAttribute("data-carousel-interval"),
                i = "slide" === t.getAttribute("data-carousel"),
                n = [],
                o = 0;
              t.querySelectorAll("[data-carousel-item]").length &&
                Array.from(t.querySelectorAll("[data-carousel-item]")).map(
                  function (t, e) {
                    n.push({ position: e, el: t }),
                      "active" === t.getAttribute("data-carousel-item") &&
                        (o = e);
                  }
                );
              var a = [];
              t.querySelectorAll("[data-carousel-slide-to]").length &&
                Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(
                  function (t) {
                    a.push({
                      position: parseInt(
                        t.getAttribute("data-carousel-slide-to")
                      ),
                      el: t,
                    });
                  }
                );
              var c = new s(t, n, {
                defaultPosition: o,
                indicators: { items: a },
                interval: e || r.interval,
              });
              i && c.cycle();
              var l = t.querySelector("[data-carousel-next]"),
                d = t.querySelector("[data-carousel-prev]");
              l &&
                l.addEventListener("click", function () {
                  c.next();
                }),
                d &&
                  d.addEventListener("click", function () {
                    c.prev();
                  });
            });
          }
          (e.initCarousels = a),
            "undefined" != typeof window &&
              ((window.Carousel = s), (window.initCarousels = a)),
            (e.default = s);
        },
        922: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initCollapses = void 0);
          var o = i(423),
            r = {
              onCollapse: function () {},
              onExpand: function () {},
              onToggle: function () {},
            },
            s = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = r),
                  (this._targetEl = t),
                  (this._triggerEl = e),
                  (this._options = n(n({}, r), i)),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance(
                    "Collapse",
                    this,
                    this._targetEl.id,
                    !0
                  );
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._triggerEl.hasAttribute("aria-expanded")
                      ? (this._visible =
                          "true" ===
                          this._triggerEl.getAttribute("aria-expanded"))
                      : (this._visible =
                          !this._targetEl.classList.contains("hidden")),
                    (this._clickHandler = function () {
                      t.toggle();
                    }),
                    this._triggerEl.addEventListener(
                      "click",
                      this._clickHandler
                    ),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._triggerEl &&
                    this._initialized &&
                    (this._triggerEl.removeEventListener(
                      "click",
                      this._clickHandler
                    ),
                    (this._initialized = !1));
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Collapse", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.collapse = function () {
                  this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                      this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onCollapse(this);
                }),
                (t.prototype.expand = function () {
                  this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                      this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onExpand(this);
                }),
                (t.prototype.toggle = function () {
                  this._visible ? this.collapse() : this.expand(),
                    this._options.onToggle(this);
                }),
                t
              );
            })();
          function a() {
            document
              .querySelectorAll("[data-collapse-toggle]")
              .forEach(function (t) {
                var e = t.getAttribute("data-collapse-toggle"),
                  i = document.getElementById(e);
                i
                  ? new s(i, t)
                  : console.error(
                      'The target element with id "'.concat(
                        e,
                        '" does not exist. Please check the data-collapse-toggle attribute.'
                      )
                    );
              });
          }
          (e.initCollapses = a),
            "undefined" != typeof window &&
              ((window.Collapse = s), (window.initCollapses = a)),
            (e.default = s);
        },
        556: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initDials = void 0);
          var o = i(423),
            r = {
              triggerType: "hover",
              onShow: function () {},
              onHide: function () {},
              onToggle: function () {},
            },
            s = (function () {
              function t(t, e, i, s) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = null),
                  void 0 === s && (s = r),
                  (this._parentEl = t),
                  (this._triggerEl = e),
                  (this._targetEl = i),
                  (this._options = n(n({}, r), s)),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance("Dial", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  if (this._triggerEl && this._targetEl && !this._initialized) {
                    var e = this._getTriggerEventTypes(
                      this._options.triggerType
                    );
                    (this._showEventHandler = function () {
                      t.show();
                    }),
                      e.showEvents.forEach(function (e) {
                        t._triggerEl.addEventListener(e, t._showEventHandler),
                          t._targetEl.addEventListener(e, t._showEventHandler);
                      }),
                      (this._hideEventHandler = function () {
                        t._parentEl.matches(":hover") || t.hide();
                      }),
                      e.hideEvents.forEach(function (e) {
                        t._parentEl.addEventListener(e, t._hideEventHandler);
                      }),
                      (this._initialized = !0);
                  }
                }),
                (t.prototype.destroy = function () {
                  var t = this;
                  if (this._initialized) {
                    var e = this._getTriggerEventTypes(
                      this._options.triggerType
                    );
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.removeEventListener(e, t._showEventHandler),
                        t._targetEl.removeEventListener(e, t._showEventHandler);
                    }),
                      e.hideEvents.forEach(function (e) {
                        t._parentEl.removeEventListener(e, t._hideEventHandler);
                      }),
                      (this._initialized = !1);
                  }
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Dial", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.hide = function () {
                  this._targetEl.classList.add("hidden"),
                    this._triggerEl &&
                      this._triggerEl.setAttribute("aria-expanded", "false"),
                    (this._visible = !1),
                    this._options.onHide(this);
                }),
                (t.prototype.show = function () {
                  this._targetEl.classList.remove("hidden"),
                    this._triggerEl &&
                      this._triggerEl.setAttribute("aria-expanded", "true"),
                    (this._visible = !0),
                    this._options.onShow(this);
                }),
                (t.prototype.toggle = function () {
                  this._visible ? this.hide() : this.show();
                }),
                (t.prototype.isHidden = function () {
                  return !this._visible;
                }),
                (t.prototype.isVisible = function () {
                  return this._visible;
                }),
                (t.prototype._getTriggerEventTypes = function (t) {
                  switch (t) {
                    case "hover":
                    default:
                      return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"],
                      };
                    case "click":
                      return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"],
                      };
                    case "none":
                      return { showEvents: [], hideEvents: [] };
                  }
                }),
                t
              );
            })();
          function a() {
            document.querySelectorAll("[data-dial-init]").forEach(function (t) {
              var e = t.querySelector("[data-dial-toggle]");
              if (e) {
                var i = e.getAttribute("data-dial-toggle"),
                  n = document.getElementById(i);
                if (n) {
                  var o = e.getAttribute("data-dial-trigger");
                  new s(t, e, n, { triggerType: o || r.triggerType });
                } else
                  console.error(
                    "Dial with id ".concat(
                      i,
                      " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
                    )
                  );
              } else console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
            });
          }
          (e.initDials = a),
            "undefined" != typeof window &&
              ((window.Dial = s), (window.initDials = a)),
            (e.default = s);
        },
        791: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initDismisses = void 0);
          var o = i(423),
            r = {
              transition: "transition-opacity",
              duration: 300,
              timing: "ease-out",
              onHide: function () {},
            },
            s = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = r),
                  (this._targetEl = t),
                  (this._triggerEl = e),
                  (this._options = n(n({}, r), i)),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance("Dismiss", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    ((this._clickHandler = function () {
                      t.hide();
                    }),
                    this._triggerEl.addEventListener(
                      "click",
                      this._clickHandler
                    ),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._triggerEl &&
                    this._initialized &&
                    (this._triggerEl.removeEventListener(
                      "click",
                      this._clickHandler
                    ),
                    (this._initialized = !1));
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Dismiss", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.hide = function () {
                  var t = this;
                  this._targetEl.classList.add(
                    this._options.transition,
                    "duration-".concat(this._options.duration),
                    this._options.timing,
                    "opacity-0"
                  ),
                    setTimeout(function () {
                      t._targetEl.classList.add("hidden");
                    }, this._options.duration),
                    this._options.onHide(this, this._targetEl);
                }),
                t
              );
            })();
          function a() {
            document
              .querySelectorAll("[data-dismiss-target]")
              .forEach(function (t) {
                var e = t.getAttribute("data-dismiss-target"),
                  i = document.querySelector(e);
                i
                  ? new s(i, t)
                  : console.error(
                      'The dismiss element with id "'.concat(
                        e,
                        '" does not exist. Please check the data-dismiss-target attribute.'
                      )
                    );
              });
          }
          (e.initDismisses = a),
            "undefined" != typeof window &&
              ((window.Dismiss = s), (window.initDismisses = a)),
            (e.default = s);
        },
        340: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initDrawers = void 0);
          var o = i(423),
            r = {
              placement: "left",
              bodyScrolling: !1,
              backdrop: !0,
              edge: !1,
              edgeOffset: "bottom-[60px]",
              backdropClasses:
                "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
              onShow: function () {},
              onHide: function () {},
              onToggle: function () {},
            },
            s = (function () {
              function t(t, e) {
                void 0 === t && (t = null),
                  void 0 === e && (e = r),
                  (this._targetEl = t),
                  (this._options = n(n({}, r), e)),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance("Drawer", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._targetEl &&
                    !this._initialized &&
                    (this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.classList.add("transition-transform"),
                    this._getPlacementClasses(this._options.placement).base.map(
                      function (e) {
                        t._targetEl.classList.add(e);
                      }
                    ),
                    (this._handleEscapeKey = function (e) {
                      "Escape" === e.key && t.isVisible() && t.hide();
                    }),
                    document.addEventListener("keydown", this._handleEscapeKey),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._initialized &&
                    (this.hide(),
                    document.removeEventListener(
                      "keydown",
                      this._handleEscapeKey
                    ),
                    (this._initialized = !1));
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Drawer", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.hide = function () {
                  var t = this;
                  this._options.edge
                    ? (this._getPlacementClasses(
                        this._options.placement + "-edge"
                      ).active.map(function (e) {
                        t._targetEl.classList.remove(e);
                      }),
                      this._getPlacementClasses(
                        this._options.placement + "-edge"
                      ).inactive.map(function (e) {
                        t._targetEl.classList.add(e);
                      }))
                    : (this._getPlacementClasses(
                        this._options.placement
                      ).active.map(function (e) {
                        t._targetEl.classList.remove(e);
                      }),
                      this._getPlacementClasses(
                        this._options.placement
                      ).inactive.map(function (e) {
                        t._targetEl.classList.add(e);
                      })),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._options.bodyScrolling ||
                      document.body.classList.remove("overflow-hidden"),
                    this._options.backdrop && this._destroyBackdropEl(),
                    (this._visible = !1),
                    this._options.onHide(this);
                }),
                (t.prototype.show = function () {
                  var t = this;
                  this._options.edge
                    ? (this._getPlacementClasses(
                        this._options.placement + "-edge"
                      ).active.map(function (e) {
                        t._targetEl.classList.add(e);
                      }),
                      this._getPlacementClasses(
                        this._options.placement + "-edge"
                      ).inactive.map(function (e) {
                        t._targetEl.classList.remove(e);
                      }))
                    : (this._getPlacementClasses(
                        this._options.placement
                      ).active.map(function (e) {
                        t._targetEl.classList.add(e);
                      }),
                      this._getPlacementClasses(
                        this._options.placement
                      ).inactive.map(function (e) {
                        t._targetEl.classList.remove(e);
                      })),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._options.bodyScrolling ||
                      document.body.classList.add("overflow-hidden"),
                    this._options.backdrop && this._createBackdrop(),
                    (this._visible = !0),
                    this._options.onShow(this);
                }),
                (t.prototype.toggle = function () {
                  this.isVisible() ? this.hide() : this.show();
                }),
                (t.prototype._createBackdrop = function () {
                  var t,
                    e = this;
                  if (!this._visible) {
                    var i = document.createElement("div");
                    i.setAttribute("drawer-backdrop", ""),
                      (t = i.classList).add.apply(
                        t,
                        this._options.backdropClasses.split(" ")
                      ),
                      document.querySelector("body").append(i),
                      i.addEventListener("click", function () {
                        e.hide();
                      });
                  }
                }),
                (t.prototype._destroyBackdropEl = function () {
                  this._visible &&
                    document.querySelector("[drawer-backdrop]").remove();
                }),
                (t.prototype._getPlacementClasses = function (t) {
                  switch (t) {
                    case "top":
                      return {
                        base: ["top-0", "left-0", "right-0"],
                        active: ["transform-none"],
                        inactive: ["-translate-y-full"],
                      };
                    case "right":
                      return {
                        base: ["right-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["translate-x-full"],
                      };
                    case "bottom":
                      return {
                        base: ["bottom-0", "left-0", "right-0"],
                        active: ["transform-none"],
                        inactive: ["translate-y-full"],
                      };
                    case "left":
                    default:
                      return {
                        base: ["left-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["-translate-x-full"],
                      };
                    case "bottom-edge":
                      return {
                        base: ["left-0", "top-0"],
                        active: ["transform-none"],
                        inactive: [
                          "translate-y-full",
                          this._options.edgeOffset,
                        ],
                      };
                  }
                }),
                (t.prototype.isHidden = function () {
                  return !this._visible;
                }),
                (t.prototype.isVisible = function () {
                  return this._visible;
                }),
                t
              );
            })();
          function a() {
            document
              .querySelectorAll("[data-drawer-target]")
              .forEach(function (t) {
                var e = t.getAttribute("data-drawer-target"),
                  i = document.getElementById(e);
                if (i) {
                  var n = t.getAttribute("data-drawer-placement"),
                    a = t.getAttribute("data-drawer-body-scrolling"),
                    c = t.getAttribute("data-drawer-backdrop"),
                    l = t.getAttribute("data-drawer-edge"),
                    d = t.getAttribute("data-drawer-edge-offset");
                  o.default.instanceExists("Drawer", i.getAttribute("id")) ||
                    new s(i, {
                      placement: n || r.placement,
                      bodyScrolling: a ? "true" === a : r.bodyScrolling,
                      backdrop: c ? "true" === c : r.backdrop,
                      edge: l ? "true" === l : r.edge,
                      edgeOffset: d || r.edgeOffset,
                    });
                } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
              }),
              document
                .querySelectorAll("[data-drawer-toggle]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-drawer-toggle"),
                    i = document.getElementById(e);
                  if (i) {
                    var n = o.default.getInstance(
                      "Drawer",
                      i.getAttribute("id")
                    );
                    n
                      ? t.addEventListener("click", function () {
                          n.toggle();
                        })
                      : console.error(
                          "Drawer with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-drawer-target attribute."
                          )
                        );
                  } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
                }),
              document
                .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-drawer-dismiss")
                      ? t.getAttribute("data-drawer-dismiss")
                      : t.getAttribute("data-drawer-hide"),
                    i = document.getElementById(e);
                  if (i) {
                    var n = o.default.getInstance(
                      "Drawer",
                      i.getAttribute("id")
                    );
                    n
                      ? t.addEventListener("click", function () {
                          n.hide();
                        })
                      : console.error(
                          "Drawer with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-drawer-target attribute."
                          )
                        );
                  } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
                }),
              document
                .querySelectorAll("[data-drawer-show]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-drawer-show"),
                    i = document.getElementById(e);
                  if (i) {
                    var n = o.default.getInstance(
                      "Drawer",
                      i.getAttribute("id")
                    );
                    n
                      ? t.addEventListener("click", function () {
                          n.show();
                        })
                      : console.error(
                          "Drawer with id ".concat(
                            e,
                            " has not been initialized. Please initialize it using the data-drawer-target attribute."
                          )
                        );
                  } else console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
                });
          }
          (e.initDrawers = a),
            "undefined" != typeof window &&
              ((window.Drawer = s), (window.initDrawers = a)),
            (e.default = s);
        },
        316: function (t, e, i) {
          var n =
              (this && this.__assign) ||
              function () {
                return (
                  (n =
                    Object.assign ||
                    function (t) {
                      for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in (e = arguments[i]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }),
                  n.apply(this, arguments)
                );
              },
            o =
              (this && this.__spreadArray) ||
              function (t, e, i) {
                if (i || 2 === arguments.length)
                  for (var n, o = 0, r = e.length; o < r; o++)
                    (!n && o in e) ||
                      (n || (n = Array.prototype.slice.call(e, 0, o)),
                      (n[o] = e[o]));
                return t.concat(n || Array.prototype.slice.call(e));
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initDropdowns = void 0);
          var r = i(853),
            s = i(423),
            a = {
              placement: "bottom",
              triggerType: "click",
              offsetSkidding: 0,
              offsetDistance: 10,
              delay: 300,
              ignoreClickOutsideClass: !1,
              onShow: function () {},
              onHide: function () {},
              onToggle: function () {},
            },
            c = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = a),
                  (this._targetEl = t),
                  (this._triggerEl = e),
                  (this._options = n(n({}, a), i)),
                  (this._popperInstance = null),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  s.default.addInstance(
                    "Dropdown",
                    this,
                    this._targetEl.id,
                    !0
                  );
              }
              return (
                (t.prototype.init = function () {
                  this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    ((this._popperInstance = this._createPopperInstance()),
                    this._setupEventListeners(),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  var t = this,
                    e = this._getTriggerEvents();
                  "click" === this._options.triggerType &&
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.removeEventListener(e, t._clickHandler);
                    }),
                    "hover" === this._options.triggerType &&
                      (e.showEvents.forEach(function (e) {
                        t._triggerEl.removeEventListener(
                          e,
                          t._hoverShowTriggerElHandler
                        ),
                          t._targetEl.removeEventListener(
                            e,
                            t._hoverShowTargetElHandler
                          );
                      }),
                      e.hideEvents.forEach(function (e) {
                        t._triggerEl.removeEventListener(
                          e,
                          t._hoverHideHandler
                        ),
                          t._targetEl.removeEventListener(
                            e,
                            t._hoverHideHandler
                          );
                      })),
                    this._popperInstance.destroy(),
                    (this._initialized = !1);
                }),
                (t.prototype.removeInstance = function () {
                  s.default.removeInstance("Dropdown", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype._setupEventListeners = function () {
                  var t = this,
                    e = this._getTriggerEvents();
                  (this._clickHandler = function () {
                    t.toggle();
                  }),
                    "click" === this._options.triggerType &&
                      e.showEvents.forEach(function (e) {
                        t._triggerEl.addEventListener(e, t._clickHandler);
                      }),
                    (this._hoverShowTriggerElHandler = function (e) {
                      "click" === e.type
                        ? t.toggle()
                        : setTimeout(function () {
                            t.show();
                          }, t._options.delay);
                    }),
                    (this._hoverShowTargetElHandler = function () {
                      t.show();
                    }),
                    (this._hoverHideHandler = function () {
                      setTimeout(function () {
                        t._targetEl.matches(":hover") || t.hide();
                      }, t._options.delay);
                    }),
                    "hover" === this._options.triggerType &&
                      (e.showEvents.forEach(function (e) {
                        t._triggerEl.addEventListener(
                          e,
                          t._hoverShowTriggerElHandler
                        ),
                          t._targetEl.addEventListener(
                            e,
                            t._hoverShowTargetElHandler
                          );
                      }),
                      e.hideEvents.forEach(function (e) {
                        t._triggerEl.addEventListener(e, t._hoverHideHandler),
                          t._targetEl.addEventListener(e, t._hoverHideHandler);
                      }));
                }),
                (t.prototype._createPopperInstance = function () {
                  return (0, r.createPopper)(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [
                            this._options.offsetSkidding,
                            this._options.offsetDistance,
                          ],
                        },
                      },
                    ],
                  });
                }),
                (t.prototype._setupClickOutsideListener = function () {
                  var t = this;
                  (this._clickOutsideEventListener = function (e) {
                    t._handleClickOutside(e, t._targetEl);
                  }),
                    document.body.addEventListener(
                      "click",
                      this._clickOutsideEventListener,
                      !0
                    );
                }),
                (t.prototype._removeClickOutsideListener = function () {
                  document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                  );
                }),
                (t.prototype._handleClickOutside = function (t, e) {
                  var i = t.target,
                    n = this._options.ignoreClickOutsideClass,
                    o = !1;
                  n &&
                    document
                      .querySelectorAll(".".concat(n))
                      .forEach(function (t) {
                        t.contains(i) && (o = !0);
                      });
                  i === e ||
                    e.contains(i) ||
                    this._triggerEl.contains(i) ||
                    o ||
                    !this.isVisible() ||
                    this.hide();
                }),
                (t.prototype._getTriggerEvents = function () {
                  switch (this._options.triggerType) {
                    case "hover":
                      return {
                        showEvents: ["mouseenter", "click"],
                        hideEvents: ["mouseleave"],
                      };
                    case "click":
                    default:
                      return { showEvents: ["click"], hideEvents: [] };
                    case "none":
                      return { showEvents: [], hideEvents: [] };
                  }
                }),
                (t.prototype.toggle = function () {
                  this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
                }),
                (t.prototype.isVisible = function () {
                  return this._visible;
                }),
                (t.prototype.show = function () {
                  this._targetEl.classList.remove("hidden"),
                    this._targetEl.classList.add("block"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !0 }],
                          !1
                        ),
                      });
                    }),
                    this._setupClickOutsideListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
                }),
                (t.prototype.hide = function () {
                  this._targetEl.classList.remove("block"),
                    this._targetEl.classList.add("hidden"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !1 }],
                          !1
                        ),
                      });
                    }),
                    (this._visible = !1),
                    this._removeClickOutsideListener(),
                    this._options.onHide(this);
                }),
                t
              );
            })();
          function l() {
            document
              .querySelectorAll("[data-dropdown-toggle]")
              .forEach(function (t) {
                var e = t.getAttribute("data-dropdown-toggle"),
                  i = document.getElementById(e);
                if (i) {
                  var n = t.getAttribute("data-dropdown-placement"),
                    o = t.getAttribute("data-dropdown-offset-skidding"),
                    r = t.getAttribute("data-dropdown-offset-distance"),
                    s = t.getAttribute("data-dropdown-trigger"),
                    l = t.getAttribute("data-dropdown-delay"),
                    d = t.getAttribute(
                      "data-dropdown-ignore-click-outside-class"
                    );
                  new c(i, t, {
                    placement: n || a.placement,
                    triggerType: s || a.triggerType,
                    offsetSkidding: o ? parseInt(o) : a.offsetSkidding,
                    offsetDistance: r ? parseInt(r) : a.offsetDistance,
                    delay: l ? parseInt(l) : a.delay,
                    ignoreClickOutsideClass: d || a.ignoreClickOutsideClass,
                  });
                } else console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
              });
          }
          (e.initDropdowns = l),
            "undefined" != typeof window &&
              ((window.Dropdown = c), (window.initDropdowns = l)),
            (e.default = c);
        },
        311: function (t, e, i) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initFlowbite = void 0);
          var n = i(902),
            o = i(33),
            r = i(922),
            s = i(556),
            a = i(791),
            c = i(340),
            l = i(316),
            d = i(16),
            u = i(903),
            p = i(247),
            h = i(671);
          function f() {
            (0, n.initAccordions)(),
              (0, r.initCollapses)(),
              (0, o.initCarousels)(),
              (0, a.initDismisses)(),
              (0, l.initDropdowns)(),
              (0, d.initModals)(),
              (0, c.initDrawers)(),
              (0, p.initTabs)(),
              (0, h.initTooltips)(),
              (0, u.initPopovers)(),
              (0, s.initDials)();
          }
          (e.initFlowbite = f),
            "undefined" != typeof window && (window.initFlowbite = f);
        },
        16: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initModals = void 0);
          var o = i(423),
            r = {
              placement: "center",
              backdropClasses:
                "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
              backdrop: "dynamic",
              closable: !0,
              onHide: function () {},
              onShow: function () {},
              onToggle: function () {},
            },
            s = (function () {
              function t(t, e) {
                void 0 === t && (t = null),
                  void 0 === e && (e = r),
                  (this._targetEl = t),
                  (this._options = n(n({}, r), e)),
                  (this._isHidden = !0),
                  (this._backdropEl = null),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance("Modal", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._targetEl &&
                    !this._initialized &&
                    (this._getPlacementClasses().map(function (e) {
                      t._targetEl.classList.add(e);
                    }),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  this._initialized && (this.hide(), (this._initialized = !1));
                }),
                (t.prototype.removeInstance = function () {
                  o.default.removeInstance("Modal", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype._createBackdrop = function () {
                  var t;
                  if (this._isHidden) {
                    var e = document.createElement("div");
                    e.setAttribute("modal-backdrop", ""),
                      (t = e.classList).add.apply(
                        t,
                        this._options.backdropClasses.split(" ")
                      ),
                      document.querySelector("body").append(e),
                      (this._backdropEl = e);
                  }
                }),
                (t.prototype._destroyBackdropEl = function () {
                  this._isHidden ||
                    document.querySelector("[modal-backdrop]").remove();
                }),
                (t.prototype._setupModalCloseEventListeners = function () {
                  var t = this;
                  "dynamic" === this._options.backdrop &&
                    ((this._clickOutsideEventListener = function (e) {
                      t._handleOutsideClick(e.target);
                    }),
                    this._targetEl.addEventListener(
                      "click",
                      this._clickOutsideEventListener,
                      !0
                    )),
                    (this._keydownEventListener = function (e) {
                      "Escape" === e.key && t.hide();
                    }),
                    document.body.addEventListener(
                      "keydown",
                      this._keydownEventListener,
                      !0
                    );
                }),
                (t.prototype._removeModalCloseEventListeners = function () {
                  "dynamic" === this._options.backdrop &&
                    this._targetEl.removeEventListener(
                      "click",
                      this._clickOutsideEventListener,
                      !0
                    ),
                    document.body.removeEventListener(
                      "keydown",
                      this._keydownEventListener,
                      !0
                    );
                }),
                (t.prototype._handleOutsideClick = function (t) {
                  (t === this._targetEl ||
                    (t === this._backdropEl && this.isVisible())) &&
                    this.hide();
                }),
                (t.prototype._getPlacementClasses = function () {
                  switch (this._options.placement) {
                    case "top-left":
                      return ["justify-start", "items-start"];
                    case "top-center":
                      return ["justify-center", "items-start"];
                    case "top-right":
                      return ["justify-end", "items-start"];
                    case "center-left":
                      return ["justify-start", "items-center"];
                    case "center":
                    default:
                      return ["justify-center", "items-center"];
                    case "center-right":
                      return ["justify-end", "items-center"];
                    case "bottom-left":
                      return ["justify-start", "items-end"];
                    case "bottom-center":
                      return ["justify-center", "items-end"];
                    case "bottom-right":
                      return ["justify-end", "items-end"];
                  }
                }),
                (t.prototype.toggle = function () {
                  this._isHidden ? this.show() : this.hide(),
                    this._options.onToggle(this);
                }),
                (t.prototype.show = function () {
                  this.isHidden &&
                    (this._targetEl.classList.add("flex"),
                    this._targetEl.classList.remove("hidden"),
                    this._targetEl.setAttribute("aria-modal", "true"),
                    this._targetEl.setAttribute("role", "dialog"),
                    this._targetEl.removeAttribute("aria-hidden"),
                    this._createBackdrop(),
                    (this._isHidden = !1),
                    this._options.closable &&
                      this._setupModalCloseEventListeners(),
                    document.body.classList.add("overflow-hidden"),
                    this._options.onShow(this));
                }),
                (t.prototype.hide = function () {
                  this.isVisible &&
                    (this._targetEl.classList.add("hidden"),
                    this._targetEl.classList.remove("flex"),
                    this._targetEl.setAttribute("aria-hidden", "true"),
                    this._targetEl.removeAttribute("aria-modal"),
                    this._targetEl.removeAttribute("role"),
                    this._destroyBackdropEl(),
                    (this._isHidden = !0),
                    document.body.classList.remove("overflow-hidden"),
                    this._options.closable &&
                      this._removeModalCloseEventListeners(),
                    this._options.onHide(this));
                }),
                (t.prototype.isVisible = function () {
                  return !this._isHidden;
                }),
                (t.prototype.isHidden = function () {
                  return this._isHidden;
                }),
                t
              );
            })();
          function a() {
            document
              .querySelectorAll("[data-modal-target]")
              .forEach(function (t) {
                var e = t.getAttribute("data-modal-target"),
                  i = document.getElementById(e);
                if (i) {
                  var n = i.getAttribute("data-modal-placement"),
                    a = i.getAttribute("data-modal-backdrop");
                  o.default.instanceExists("Modal", i.getAttribute("id")) &&
                    new s(i, {
                      placement: n || r.placement,
                      backdrop: a || r.backdrop,
                    });
                } else console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
              }),
              document
                .querySelectorAll("[data-modal-toggle]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-modal-toggle"),
                    i = document.getElementById(e);
                  if (i) {
                    var n,
                      a = i.getAttribute("data-modal-placement"),
                      c = i.getAttribute("data-modal-backdrop");
                    (n = o.default.instanceExists("Modal", i.getAttribute("id"))
                      ? o.default.getInstance("Modal", i.getAttribute("id"))
                      : new s(i, {
                          placement: a || r.placement,
                          backdrop: c || r.backdrop,
                        })),
                      t.addEventListener("click", function () {
                        n.toggle();
                      });
                  } else
                    console.error(
                      "Modal with id ".concat(
                        e,
                        " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
                      )
                    );
                }),
              document
                .querySelectorAll("[data-modal-show]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-modal-show"),
                    i = document.getElementById(e);
                  if (i)
                    if (
                      o.default.instanceExists("Modal", i.getAttribute("id"))
                    ) {
                      var n = o.default.getInstance(
                        "Modal",
                        i.getAttribute("id")
                      );
                      t.addEventListener("click", function () {
                        n.show();
                      });
                    } else
                      console.error(
                        "Modal with id ".concat(
                          e,
                          " has not been initialized. Please initialize it using the data-modal-target attribute."
                        )
                      );
                  else
                    console.error(
                      "Modal with id ".concat(
                        e,
                        " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"
                      )
                    );
                }),
              document
                .querySelectorAll("[data-modal-hide]")
                .forEach(function (t) {
                  var e = t.getAttribute("data-modal-hide"),
                    i = document.getElementById(e);
                  if (i)
                    if (
                      o.default.instanceExists("Modal", i.getAttribute("id"))
                    ) {
                      var n = o.default.getInstance(
                        "Modal",
                        i.getAttribute("id")
                      );
                      t.addEventListener("click", function () {
                        n.hide();
                      });
                    } else
                      console.error(
                        "Modal with id ".concat(
                          e,
                          " has not been initialized. Please initialize it using the data-modal-target attribute."
                        )
                      );
                  else
                    console.error(
                      "Modal with id ".concat(
                        e,
                        " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"
                      )
                    );
                });
          }
          (e.initModals = a),
            "undefined" != typeof window &&
              ((window.Modal = s), (window.initModals = a)),
            (e.default = s);
        },
        903: function (t, e, i) {
          var n =
              (this && this.__assign) ||
              function () {
                return (
                  (n =
                    Object.assign ||
                    function (t) {
                      for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in (e = arguments[i]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }),
                  n.apply(this, arguments)
                );
              },
            o =
              (this && this.__spreadArray) ||
              function (t, e, i) {
                if (i || 2 === arguments.length)
                  for (var n, o = 0, r = e.length; o < r; o++)
                    (!n && o in e) ||
                      (n || (n = Array.prototype.slice.call(e, 0, o)),
                      (n[o] = e[o]));
                return t.concat(n || Array.prototype.slice.call(e));
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initPopovers = void 0);
          var r = i(853),
            s = i(423),
            a = {
              placement: "top",
              offset: 10,
              triggerType: "hover",
              onShow: function () {},
              onHide: function () {},
              onToggle: function () {},
            },
            c = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = a),
                  (this._targetEl = t),
                  (this._triggerEl = e),
                  (this._options = n(n({}, a), i)),
                  (this._popperInstance = null),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  s.default.addInstance("Popover", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._setupEventListeners(),
                    (this._popperInstance = this._createPopperInstance()),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  var t = this;
                  if (this._initialized) {
                    var e = this._getTriggerEvents();
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.removeEventListener(e, t._showHandler),
                        t._targetEl.removeEventListener(e, t._showHandler);
                    }),
                      e.hideEvents.forEach(function (e) {
                        t._triggerEl.removeEventListener(e, t._hideHandler),
                          t._targetEl.removeEventListener(e, t._hideHandler);
                      }),
                      this._removeKeydownListener(),
                      this._removeClickOutsideListener(),
                      this._popperInstance && this._popperInstance.destroy(),
                      (this._initialized = !1);
                  }
                }),
                (t.prototype.removeInstance = function () {
                  s.default.removeInstance("Popover", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype._setupEventListeners = function () {
                  var t = this,
                    e = this._getTriggerEvents();
                  (this._showHandler = function () {
                    t.show();
                  }),
                    (this._hideHandler = function () {
                      setTimeout(function () {
                        t._targetEl.matches(":hover") || t.hide();
                      }, 100);
                    }),
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.addEventListener(e, t._showHandler),
                        t._targetEl.addEventListener(e, t._showHandler);
                    }),
                    e.hideEvents.forEach(function (e) {
                      t._triggerEl.addEventListener(e, t._hideHandler),
                        t._targetEl.addEventListener(e, t._hideHandler);
                    });
                }),
                (t.prototype._createPopperInstance = function () {
                  return (0, r.createPopper)(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                      {
                        name: "offset",
                        options: { offset: [0, this._options.offset] },
                      },
                    ],
                  });
                }),
                (t.prototype._getTriggerEvents = function () {
                  switch (this._options.triggerType) {
                    case "hover":
                    default:
                      return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"],
                      };
                    case "click":
                      return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"],
                      };
                    case "none":
                      return { showEvents: [], hideEvents: [] };
                  }
                }),
                (t.prototype._setupKeydownListener = function () {
                  var t = this;
                  (this._keydownEventListener = function (e) {
                    "Escape" === e.key && t.hide();
                  }),
                    document.body.addEventListener(
                      "keydown",
                      this._keydownEventListener,
                      !0
                    );
                }),
                (t.prototype._removeKeydownListener = function () {
                  document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                  );
                }),
                (t.prototype._setupClickOutsideListener = function () {
                  var t = this;
                  (this._clickOutsideEventListener = function (e) {
                    t._handleClickOutside(e, t._targetEl);
                  }),
                    document.body.addEventListener(
                      "click",
                      this._clickOutsideEventListener,
                      !0
                    );
                }),
                (t.prototype._removeClickOutsideListener = function () {
                  document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                  );
                }),
                (t.prototype._handleClickOutside = function (t, e) {
                  var i = t.target;
                  i === e ||
                    e.contains(i) ||
                    this._triggerEl.contains(i) ||
                    !this.isVisible() ||
                    this.hide();
                }),
                (t.prototype.isVisible = function () {
                  return this._visible;
                }),
                (t.prototype.toggle = function () {
                  this.isVisible() ? this.hide() : this.show(),
                    this._options.onToggle(this);
                }),
                (t.prototype.show = function () {
                  this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !0 }],
                          !1
                        ),
                      });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
                }),
                (t.prototype.hide = function () {
                  this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !1 }],
                          !1
                        ),
                      });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
                }),
                t
              );
            })();
          function l() {
            document
              .querySelectorAll("[data-popover-target]")
              .forEach(function (t) {
                var e = t.getAttribute("data-popover-target"),
                  i = document.getElementById(e);
                if (i) {
                  var n = t.getAttribute("data-popover-trigger"),
                    o = t.getAttribute("data-popover-placement"),
                    r = t.getAttribute("data-popover-offset");
                  new c(i, t, {
                    placement: o || a.placement,
                    offset: r ? parseInt(r) : a.offset,
                    triggerType: n || a.triggerType,
                  });
                } else console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
              });
          }
          (e.initPopovers = l),
            "undefined" != typeof window &&
              ((window.Popover = c), (window.initPopovers = l)),
            (e.default = c);
        },
        247: function (t, e, i) {
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                      for (var o in (e = arguments[i]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initTabs = void 0);
          var o = i(423),
            r = {
              defaultTabId: null,
              activeClasses:
                "text-darkblue-600 hover:text-darkblue-600 dark:text-darkblue-500 dark:hover:text-darkblue-500 border-darkblue-600 dark:border-darkblue-500",
              inactiveClasses:
                "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
              onShow: function () {},
            },
            s = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = []),
                  void 0 === i && (i = r),
                  (this._accordionEl = t),
                  (this._items = e),
                  (this._activeTab = i ? this.getTab(i.defaultTabId) : null),
                  (this._options = n(n({}, r), i)),
                  (this._initialized = !1),
                  this.init(),
                  o.default.addInstance("Tabs", this, this._accordionEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  var t = this;
                  this._items.length &&
                    !this._initialized &&
                    (this._activeTab || this.setActiveTab(this._items[0]),
                    this.show(this._activeTab.id, !0),
                    this._items.map(function (e) {
                      e.triggerEl.addEventListener("click", function () {
                        t.show(e.id);
                      });
                    }));
                }),
                (t.prototype.destroy = function () {
                  this._initialized && (this._initialized = !1);
                }),
                (t.prototype.removeInstance = function () {
                  this.destroy(),
                    o.default.removeInstance("Tabs", this._accordionEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype.getActiveTab = function () {
                  return this._activeTab;
                }),
                (t.prototype.setActiveTab = function (t) {
                  this._activeTab = t;
                }),
                (t.prototype.getTab = function (t) {
                  return this._items.filter(function (e) {
                    return e.id === t;
                  })[0];
                }),
                (t.prototype.show = function (t, e) {
                  var i,
                    n,
                    o = this;
                  void 0 === e && (e = !1);
                  var r = this.getTab(t);
                  (r !== this._activeTab || e) &&
                    (this._items.map(function (t) {
                      var e, i;
                      t !== r &&
                        ((e = t.triggerEl.classList).remove.apply(
                          e,
                          o._options.activeClasses.split(" ")
                        ),
                        (i = t.triggerEl.classList).add.apply(
                          i,
                          o._options.inactiveClasses.split(" ")
                        ),
                        t.targetEl.classList.add("hidden"),
                        t.triggerEl.setAttribute("aria-selected", "false"));
                    }),
                    (i = r.triggerEl.classList).add.apply(
                      i,
                      this._options.activeClasses.split(" ")
                    ),
                    (n = r.triggerEl.classList).remove.apply(
                      n,
                      this._options.inactiveClasses.split(" ")
                    ),
                    r.triggerEl.setAttribute("aria-selected", "true"),
                    r.targetEl.classList.remove("hidden"),
                    this.setActiveTab(r),
                    this._options.onShow(this, r));
                }),
                t
              );
            })();
          function a() {
            document
              .querySelectorAll("[data-tabs-toggle]")
              .forEach(function (t) {
                var e = [],
                  i = null;
                t.querySelectorAll('[role="tab"]').forEach(function (t) {
                  var n = "true" === t.getAttribute("aria-selected"),
                    o = {
                      id: t.getAttribute("data-tabs-target"),
                      triggerEl: t,
                      targetEl: document.querySelector(
                        t.getAttribute("data-tabs-target")
                      ),
                    };
                  e.push(o), n && (i = o.id);
                }),
                  new s(t, e, { defaultTabId: i });
              });
          }
          (e.initTabs = a),
            "undefined" != typeof window &&
              ((window.Tabs = s), (window.initTabs = a)),
            (e.default = s);
        },
        671: function (t, e, i) {
          var n =
              (this && this.__assign) ||
              function () {
                return (
                  (n =
                    Object.assign ||
                    function (t) {
                      for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in (e = arguments[i]))
                          Object.prototype.hasOwnProperty.call(e, o) &&
                            (t[o] = e[o]);
                      return t;
                    }),
                  n.apply(this, arguments)
                );
              },
            o =
              (this && this.__spreadArray) ||
              function (t, e, i) {
                if (i || 2 === arguments.length)
                  for (var n, o = 0, r = e.length; o < r; o++)
                    (!n && o in e) ||
                      (n || (n = Array.prototype.slice.call(e, 0, o)),
                      (n[o] = e[o]));
                return t.concat(n || Array.prototype.slice.call(e));
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.initTooltips = void 0);
          var r = i(853),
            s = i(423),
            a = {
              placement: "top",
              triggerType: "hover",
              onShow: function () {},
              onHide: function () {},
              onToggle: function () {},
            },
            c = (function () {
              function t(t, e, i) {
                void 0 === t && (t = null),
                  void 0 === e && (e = null),
                  void 0 === i && (i = a),
                  (this._targetEl = t),
                  (this._triggerEl = e),
                  (this._options = n(n({}, a), i)),
                  (this._popperInstance = null),
                  (this._visible = !1),
                  (this._initialized = !1),
                  this.init(),
                  s.default.addInstance("Tooltip", this, this._targetEl.id, !0);
              }
              return (
                (t.prototype.init = function () {
                  this._triggerEl &&
                    this._targetEl &&
                    !this._initialized &&
                    (this._setupEventListeners(),
                    (this._popperInstance = this._createPopperInstance()),
                    (this._initialized = !0));
                }),
                (t.prototype.destroy = function () {
                  var t = this;
                  if (this._initialized) {
                    var e = this._getTriggerEvents();
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.removeEventListener(e, t._showHandler);
                    }),
                      e.hideEvents.forEach(function (e) {
                        t._triggerEl.removeEventListener(e, t._hideHandler);
                      }),
                      this._removeKeydownListener(),
                      this._removeClickOutsideListener(),
                      this._popperInstance && this._popperInstance.destroy(),
                      (this._initialized = !1);
                  }
                }),
                (t.prototype.removeInstance = function () {
                  s.default.removeInstance("Tooltip", this._targetEl.id);
                }),
                (t.prototype.destroyAndRemoveInstance = function () {
                  this.destroy(), this.removeInstance();
                }),
                (t.prototype._setupEventListeners = function () {
                  var t = this,
                    e = this._getTriggerEvents();
                  (this._showHandler = function () {
                    t.show();
                  }),
                    (this._hideHandler = function () {
                      t.hide();
                    }),
                    e.showEvents.forEach(function (e) {
                      t._triggerEl.addEventListener(e, t._showHandler);
                    }),
                    e.hideEvents.forEach(function (e) {
                      t._triggerEl.addEventListener(e, t._hideHandler);
                    });
                }),
                (t.prototype._createPopperInstance = function () {
                  return (0, r.createPopper)(this._triggerEl, this._targetEl, {
                    placement: this._options.placement,
                    modifiers: [
                      { name: "offset", options: { offset: [0, 8] } },
                    ],
                  });
                }),
                (t.prototype._getTriggerEvents = function () {
                  switch (this._options.triggerType) {
                    case "hover":
                    default:
                      return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"],
                      };
                    case "click":
                      return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"],
                      };
                    case "none":
                      return { showEvents: [], hideEvents: [] };
                  }
                }),
                (t.prototype._setupKeydownListener = function () {
                  var t = this;
                  (this._keydownEventListener = function (e) {
                    "Escape" === e.key && t.hide();
                  }),
                    document.body.addEventListener(
                      "keydown",
                      this._keydownEventListener,
                      !0
                    );
                }),
                (t.prototype._removeKeydownListener = function () {
                  document.body.removeEventListener(
                    "keydown",
                    this._keydownEventListener,
                    !0
                  );
                }),
                (t.prototype._setupClickOutsideListener = function () {
                  var t = this;
                  (this._clickOutsideEventListener = function (e) {
                    t._handleClickOutside(e, t._targetEl);
                  }),
                    document.body.addEventListener(
                      "click",
                      this._clickOutsideEventListener,
                      !0
                    );
                }),
                (t.prototype._removeClickOutsideListener = function () {
                  document.body.removeEventListener(
                    "click",
                    this._clickOutsideEventListener,
                    !0
                  );
                }),
                (t.prototype._handleClickOutside = function (t, e) {
                  var i = t.target;
                  i === e ||
                    e.contains(i) ||
                    this._triggerEl.contains(i) ||
                    !this.isVisible() ||
                    this.hide();
                }),
                (t.prototype.isVisible = function () {
                  return this._visible;
                }),
                (t.prototype.toggle = function () {
                  this.isVisible() ? this.hide() : this.show();
                }),
                (t.prototype.show = function () {
                  this._targetEl.classList.remove("opacity-0", "invisible"),
                    this._targetEl.classList.add("opacity-100", "visible"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !0 }],
                          !1
                        ),
                      });
                    }),
                    this._setupClickOutsideListener(),
                    this._setupKeydownListener(),
                    this._popperInstance.update(),
                    (this._visible = !0),
                    this._options.onShow(this);
                }),
                (t.prototype.hide = function () {
                  this._targetEl.classList.remove("opacity-100", "visible"),
                    this._targetEl.classList.add("opacity-0", "invisible"),
                    this._popperInstance.setOptions(function (t) {
                      return n(n({}, t), {
                        modifiers: o(
                          o([], t.modifiers, !0),
                          [{ name: "eventListeners", enabled: !1 }],
                          !1
                        ),
                      });
                    }),
                    this._removeClickOutsideListener(),
                    this._removeKeydownListener(),
                    (this._visible = !1),
                    this._options.onHide(this);
                }),
                t
              );
            })();
          function l() {
            document
              .querySelectorAll("[data-tooltip-target]")
              .forEach(function (t) {
                var e = t.getAttribute("data-tooltip-target"),
                  i = document.getElementById(e);
                if (i) {
                  var n = t.getAttribute("data-tooltip-trigger"),
                    o = t.getAttribute("data-tooltip-placement");
                  new c(i, t, {
                    placement: o || a.placement,
                    triggerType: n || a.triggerType,
                  });
                } else console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
              });
          }
          (e.initTooltips = l),
            "undefined" != typeof window &&
              ((window.Tooltip = c), (window.initTooltips = l)),
            (e.default = c);
        },
        947: function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = (function () {
            function t(t, e) {
              void 0 === e && (e = []),
                (this._eventType = t),
                (this._eventFunctions = e);
            }
            return (
              (t.prototype.init = function () {
                var t = this;
                this._eventFunctions.forEach(function (e) {
                  "undefined" != typeof window &&
                    window.addEventListener(t._eventType, e);
                });
              }),
              t
            );
          })();
          e.default = i;
        },
        423: function (t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = new ((function () {
            function t() {
              this._instances = {
                Accordion: {},
                Carousel: {},
                Collapse: {},
                Dial: {},
                Dismiss: {},
                Drawer: {},
                Dropdown: {},
                Modal: {},
                Popover: {},
                Tabs: {},
                Tooltip: {},
              };
            }
            return (
              (t.prototype.addInstance = function (t, e, i, n) {
                if ((void 0 === n && (n = !1), !this._instances[t]))
                  return (
                    console.warn(
                      "Flowbite: Component ".concat(t, " does not exist.")
                    ),
                    !1
                  );
                !this._instances[t][i] || n
                  ? (this._instances[t][i || this._generateRandomId()] = e)
                  : console.warn(
                      "Flowbite: Instance with ID ".concat(
                        i,
                        " already exists."
                      )
                    );
              }),
              (t.prototype.getAllInstances = function () {
                return this._instances;
              }),
              (t.prototype.getInstances = function (t) {
                return this._instances[t]
                  ? this._instances[t]
                  : (console.warn(
                      "Flowbite: Component ".concat(t, " does not exist.")
                    ),
                    !1);
              }),
              (t.prototype.getInstance = function (t, e) {
                if (this._componentAndInstanceCheck(t, e)) {
                  if (this._instances[t][e]) return this._instances[t][e];
                  console.warn(
                    "Flowbite: Instance with ID ".concat(e, " does not exist.")
                  );
                }
              }),
              (t.prototype.destroyAndRemoveInstance = function (t, e) {
                this._componentAndInstanceCheck(t, e) &&
                  (this.destroyInstanceObject(t, e), this.removeInstance(t, e));
              }),
              (t.prototype.removeInstance = function (t, e) {
                this._componentAndInstanceCheck(t, e) &&
                  this._instances[t][e].removeInstance();
              }),
              (t.prototype.destroyInstanceObject = function (t, e) {
                this._componentAndInstanceCheck(t, e) &&
                  this._instances[t][e].destroy();
              }),
              (t.prototype.instanceExists = function (t, e) {
                return !!this._instances[t] && !!this._instances[t][e];
              }),
              (t.prototype._generateRandomId = function () {
                return Math.random().toString(36).substr(2, 9);
              }),
              (t.prototype._componentAndInstanceCheck = function (t, e) {
                return this._instances[t]
                  ? !!this._instances[t][e] ||
                      (console.warn(
                        "Flowbite: Instance with ID ".concat(
                          e,
                          " already exists."
                        )
                      ),
                      !1)
                  : (console.warn(
                      "Flowbite: Component ".concat(t, " does not exist.")
                    ),
                    !1);
              }),
              t
            );
          })())();
          (e.default = i),
            "undefined" != typeof window && (window.FlowbiteInstances = i);
        },
      },
      e = {};
    function i(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var r = (e[n] = { exports: {} });
      return t[n].call(r.exports, r, r.exports, i), r.exports;
    }
    (i.d = function (t, e) {
      for (var n in e)
        i.o(e, n) &&
          !i.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (function () {
        var t = n;
        Object.defineProperty(t, "__esModule", { value: !0 }), i(647);
        var e = i(902),
          o = i(33),
          r = i(922),
          s = i(556),
          a = i(791),
          c = i(340),
          l = i(316),
          d = i(16),
          u = i(903),
          p = i(247),
          h = i(671);
        i(311);
        var f = i(947);
        new f.default("load", [
          e.initAccordions,
          r.initCollapses,
          o.initCarousels,
          a.initDismisses,
          l.initDropdowns,
          d.initModals,
          c.initDrawers,
          p.initTabs,
          h.initTooltips,
          u.initPopovers,
          s.initDials,
        ]).init(),
          (t.default = {
            Accordion: e.default,
            Carousel: o.default,
            Collapse: r.default,
            Dial: s.default,
            Drawer: c.default,
            Dismiss: a.default,
            Dropdown: l.default,
            Modal: d.default,
            Popover: u.default,
            Tabs: p.default,
            Tooltip: h.default,
            Events: f.default,
          });
      })(),
      n
    );
  })();
});
//# sourceMappingURL=flowbite.min.js.map

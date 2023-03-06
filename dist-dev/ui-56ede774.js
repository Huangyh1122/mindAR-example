var x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function M(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var s = Function.bind.apply(t, o);
        return new s();
      }
      return t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(i, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), i;
}
const h = (e, t) => {
  const i = 2 * Math.PI * t * e;
  return i / (i + 1);
}, p = (e, t, i) => e * t + (1 - e) * i;
class w {
  constructor({ minCutOff: t, beta: i }) {
    this.minCutOff = t, this.beta = i, this.dCutOff = 1e-3, this.xPrev = null, this.dxPrev = null, this.tPrev = null, this.initialized = !1;
  }
  reset() {
    this.initialized = !1;
  }
  filter(t, i) {
    if (!this.initialized)
      return this.initialized = !0, this.xPrev = i, this.dxPrev = i.map(() => 0), this.tPrev = t, i;
    const { xPrev: n, tPrev: o, dxPrev: s } = this, r = t - o, u = h(r, this.dCutOff), c = [], d = [], l = [];
    for (let a = 0; a < i.length; a++) {
      c[a] = (i[a] - n[a]) / r, d[a] = p(u, c[a], s[a]);
      const m = this.minCutOff + this.beta * Math.abs(d[a]), g = h(r, m);
      l[a] = p(g, i[a], n[a]);
    }
    return this.xPrev = l, this.dxPrev = d, this.tPrev = t, l;
  }
}
const f = `<div class="mindar-ui-overlay mindar-ui-loading">
  <div class="loader"/>
</div>
`, v = `<div class="mindar-ui-overlay mindar-ui-compatibility">
  <div class="content">
    <h1>Failed to launch :(</h1>
    <p>
      Looks like your device/browser is not compatible.
    </p>

    <br/>
    <br/>
    <p>
      Please try the following recommended browsers:
    </p>
    <p>
      For Android device - Chrome
    </p>
    <p>
      For iOS device - Safari
    </p>
  </div>
</div>
`, y = `<div class="mindar-ui-overlay mindar-ui-scanning">
  <div class="scanning">
    <div class="inner">
      <div class="scanline"/>
    </div>
  </div>
</div>
`, b = ".mindar-ui-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;background:transparent;z-index:2}.mindar-ui-overlay.hidden{display:none}.mindar-ui-loading .loader{border:16px solid #222;border-top:16px solid white;opacity:.8;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.mindar-ui-compatibility .content{background:black;color:#fff;opacity:.8;text-align:center;margin:20px;padding:20px;min-height:50vh}@media (min-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:50vh;height:50vh}}@media (max-aspect-ratio: 1/1){.mindar-ui-scanning .scanning{width:80vw;height:80vw}}.mindar-ui-scanning .scanning .inner{position:relative;width:100%;height:100%;opacity:.8;background:linear-gradient(to right,white 10px,transparent 10px) 0 0,linear-gradient(to right,white 10px,transparent 10px) 0 100%,linear-gradient(to left,white 10px,transparent 10px) 100% 0,linear-gradient(to left,white 10px,transparent 10px) 100% 100%,linear-gradient(to bottom,white 10px,transparent 10px) 0 0,linear-gradient(to bottom,white 10px,transparent 10px) 100% 0,linear-gradient(to top,white 10px,transparent 10px) 0 100%,linear-gradient(to top,white 10px,transparent 10px) 100% 100%;background-repeat:no-repeat;background-size:40px 40px}.mindar-ui-scanning .scanning .inner .scanline{position:absolute;width:100%;height:10px;background:white;animation:move 2s linear infinite}@keyframes move{0%,to{top:0%}50%{top:calc(100% - 10px)}}";
class k {
  constructor({ uiLoading: t, uiScanning: i, uiError: n }) {
    const o = document.createElement("style");
    o.innerText = b, document.head.appendChild(o), t === "yes" ? this.loadingModal = this._loadHTML(f) : t !== "no" && (this.loadingModal = document.querySelector(t)), n === "yes" ? this.compatibilityModal = this._loadHTML(v) : n !== "no" && (this.compatibilityModal = document.querySelector(n)), i === "yes" ? this.scanningMask = this._loadHTML(y) : i !== "no" && (this.scanningMask = document.querySelector(i)), this.hideLoading(), this.hideCompatibility(), this.hideScanning();
  }
  showLoading() {
    this.loadingModal && this.loadingModal.classList.remove("hidden");
  }
  hideLoading() {
    this.loadingModal && this.loadingModal.classList.add("hidden");
  }
  showCompatibility() {
    this.compatibilityModal && this.compatibilityModal.classList.remove("hidden");
  }
  hideCompatibility() {
    this.compatibilityModal && this.compatibilityModal.classList.add("hidden");
  }
  showScanning() {
    this.scanningMask && this.scanningMask.classList.remove("hidden");
  }
  hideScanning() {
    this.scanningMask && this.scanningMask.classList.add("hidden");
  }
  _loadHTML(t) {
    const i = document.createElement("template");
    i.innerHTML = t.trim();
    const n = i.content.firstChild;
    return document.getElementsByTagName("body")[0].appendChild(n), n;
  }
}
export {
  w as O,
  k as U,
  x as c,
  M as g
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktNTZlZGU3NzQuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJzL29uZS1ldXJvLWZpbHRlci5qcyIsIi4uL3NyYy91aS9sb2FkaW5nLmh0bWw/cmF3IiwiLi4vc3JjL3VpL2NvbXBhdGliaWxpdHkuaHRtbD9yYXciLCIuLi9zcmMvdWkvc2Nhbm5pbmcuaHRtbD9yYXciLCIuLi9zcmMvdWkvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVmOiBodHRwczovL2phYW50b2xsYW5kZXIuY29tL3Bvc3Qvbm9pc2UtZmlsdGVyaW5nLXVzaW5nLW9uZS1ldXJvLWZpbHRlci8jbWp4LWVxbiUzQTFcblxuY29uc3Qgc21vb3RoaW5nRmFjdG9yID0gKHRlLCBjdXRvZmYpID0+IHtcbiAgY29uc3QgciA9IDIgKiBNYXRoLlBJICogY3V0b2ZmICogdGU7XG4gIHJldHVybiByIC8gKHIrMSk7XG59XG5cbmNvbnN0IGV4cG9uZW50aWFsU21vb3RoaW5nID0gKGEsIHgsIHhQcmV2KSA9PiB7XG4gIHJldHVybiBhICogeCArICgxIC0gYSkgKiB4UHJldjtcbn1cblxuY2xhc3MgT25lRXVyb0ZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHttaW5DdXRPZmYsIGJldGF9KSB7XG4gICAgdGhpcy5taW5DdXRPZmYgPSBtaW5DdXRPZmY7XG4gICAgdGhpcy5iZXRhID0gYmV0YTtcbiAgICB0aGlzLmRDdXRPZmYgPSAwLjAwMTsgLy8gcGVyaW9kIGluIG1pbGxpc2Vjb25kcywgc28gZGVmYXVsdCB0byAwLjAwMSA9IDFIelxuXG4gICAgdGhpcy54UHJldiA9IG51bGw7XG4gICAgdGhpcy5keFByZXYgPSBudWxsO1xuICAgIHRoaXMudFByZXYgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZpbHRlcih0LCB4KSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMueFByZXYgPSB4O1xuICAgICAgdGhpcy5keFByZXYgPSB4Lm1hcCgoKSA9PiAwKTtcbiAgICAgIHRoaXMudFByZXYgPSB0O1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgY29uc3Qge3hQcmV2LCB0UHJldiwgZHhQcmV2fSA9IHRoaXM7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyXCIsIHgsIHhQcmV2LCB4Lm1hcCgoeHgsIGkpID0+IHhbaV0gLSB4UHJldltpXSkpO1xuXG4gICAgY29uc3QgdGUgPSB0IC0gdFByZXY7XG5cbiAgICBjb25zdCBhZCA9IHNtb290aGluZ0ZhY3Rvcih0ZSwgdGhpcy5kQ3V0T2ZmKTtcblxuICAgIGNvbnN0IGR4ID0gW107XG4gICAgY29uc3QgZHhIYXQgPSBbXTtcbiAgICBjb25zdCB4SGF0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUaGUgZmlsdGVyZWQgZGVyaXZhdGl2ZSBvZiB0aGUgc2lnbmFsLlxuICAgICAgZHhbaV0gPSAoeFtpXSAtIHhQcmV2W2ldKSAvIHRlO1xuICAgICAgZHhIYXRbaV0gPSBleHBvbmVudGlhbFNtb290aGluZyhhZCwgZHhbaV0sIGR4UHJldltpXSk7XG5cbiAgICAgIC8vIFRoZSBmaWx0ZXJlZCBzaWduYWxcbiAgICAgIGNvbnN0IGN1dE9mZiA9IHRoaXMubWluQ3V0T2ZmICsgdGhpcy5iZXRhICogTWF0aC5hYnMoZHhIYXRbaV0pO1xuICAgICAgY29uc3QgYSA9IHNtb290aGluZ0ZhY3Rvcih0ZSwgY3V0T2ZmKTtcbiAgICAgIHhIYXRbaV0gPSBleHBvbmVudGlhbFNtb290aGluZyhhLCB4W2ldLCB4UHJldltpXSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHByZXZcbiAgICB0aGlzLnhQcmV2ID0geEhhdDsgXG4gICAgdGhpcy5keFByZXYgPSBkeEhhdDtcbiAgICB0aGlzLnRQcmV2ID0gdDtcblxuICAgIHJldHVybiB4SGF0O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIE9uZUV1cm9GaWx0ZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWluZGFyLXVpLW92ZXJsYXkgbWluZGFyLXVpLWxvYWRpbmdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIi8+XFxuPC9kaXY+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1pbmRhci11aS1vdmVybGF5IG1pbmRhci11aS1jb21wYXRpYmlsaXR5XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDE+RmFpbGVkIHRvIGxhdW5jaCA6KDwvaDE+XFxuICAgIDxwPlxcbiAgICAgIExvb2tzIGxpa2UgeW91ciBkZXZpY2UvYnJvd3NlciBpcyBub3QgY29tcGF0aWJsZS5cXG4gICAgPC9wPlxcblxcbiAgICA8YnIvPlxcbiAgICA8YnIvPlxcbiAgICA8cD5cXG4gICAgICBQbGVhc2UgdHJ5IHRoZSBmb2xsb3dpbmcgcmVjb21tZW5kZWQgYnJvd3NlcnM6XFxuICAgIDwvcD5cXG4gICAgPHA+XFxuICAgICAgRm9yIEFuZHJvaWQgZGV2aWNlIC0gQ2hyb21lXFxuICAgIDwvcD5cXG4gICAgPHA+XFxuICAgICAgRm9yIGlPUyBkZXZpY2UgLSBTYWZhcmlcXG4gICAgPC9wPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1pbmRhci11aS1vdmVybGF5IG1pbmRhci11aS1zY2FubmluZ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2FubmluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImlubmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY2FubGluZVxcXCIvPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiIiwiLy9pbXBvcnQgXCIuL3VpLnNjc3NcIjtcbmltcG9ydCBsb2FkaW5nSFRNTCBmcm9tICcuL2xvYWRpbmcuaHRtbD9yYXcnO1xuaW1wb3J0IGNvbXBhdGliaWxpdHlIVE1MIGZyb20gJy4vY29tcGF0aWJpbGl0eS5odG1sP3Jhdyc7XG5pbXBvcnQgc2Nhbm5pbmdIVE1MIGZyb20gJy4vc2Nhbm5pbmcuaHRtbD9yYXcnO1xuXG5jb25zdCBjc3M9YC5taW5kYXItdWktb3ZlcmxheXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt6LWluZGV4OjJ9Lm1pbmRhci11aS1vdmVybGF5LmhpZGRlbntkaXNwbGF5Om5vbmV9Lm1pbmRhci11aS1sb2FkaW5nIC5sb2FkZXJ7Ym9yZGVyOjE2cHggc29saWQgIzIyMjtib3JkZXItdG9wOjE2cHggc29saWQgd2hpdGU7b3BhY2l0eTouODtib3JkZXItcmFkaXVzOjUwJTt3aWR0aDoxMjBweDtoZWlnaHQ6MTIwcHg7YW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlfUBrZXlmcmFtZXMgc3BpbnswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19Lm1pbmRhci11aS1jb21wYXRpYmlsaXR5IC5jb250ZW50e2JhY2tncm91bmQ6YmxhY2s7Y29sb3I6I2ZmZjtvcGFjaXR5Oi44O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoyMHB4O3BhZGRpbmc6MjBweDttaW4taGVpZ2h0OjUwdmh9QG1lZGlhIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpey5taW5kYXItdWktc2Nhbm5pbmcgLnNjYW5uaW5ne3dpZHRoOjUwdmg7aGVpZ2h0OjUwdmh9fUBtZWRpYSAobWF4LWFzcGVjdC1yYXRpbzogMS8xKXsubWluZGFyLXVpLXNjYW5uaW5nIC5zY2FubmluZ3t3aWR0aDo4MHZ3O2hlaWdodDo4MHZ3fX0ubWluZGFyLXVpLXNjYW5uaW5nIC5zY2FubmluZyAuaW5uZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5Oi44O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMCAwLGxpbmVhci1ncmFkaWVudCh0byByaWdodCx3aGl0ZSAxMHB4LHRyYW5zcGFyZW50IDEwcHgpIDAgMTAwJSxsaW5lYXItZ3JhZGllbnQodG8gbGVmdCx3aGl0ZSAxMHB4LHRyYW5zcGFyZW50IDEwcHgpIDEwMCUgMCxsaW5lYXItZ3JhZGllbnQodG8gbGVmdCx3aGl0ZSAxMHB4LHRyYW5zcGFyZW50IDEwcHgpIDEwMCUgMTAwJSxsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMCAwLGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sd2hpdGUgMTBweCx0cmFuc3BhcmVudCAxMHB4KSAxMDAlIDAsbGluZWFyLWdyYWRpZW50KHRvIHRvcCx3aGl0ZSAxMHB4LHRyYW5zcGFyZW50IDEwcHgpIDAgMTAwJSxsaW5lYXItZ3JhZGllbnQodG8gdG9wLHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMTAwJSAxMDAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6NDBweCA0MHB4fS5taW5kYXItdWktc2Nhbm5pbmcgLnNjYW5uaW5nIC5pbm5lciAuc2NhbmxpbmV7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTBweDtiYWNrZ3JvdW5kOndoaXRlO2FuaW1hdGlvbjptb3ZlIDJzIGxpbmVhciBpbmZpbml0ZX1Aa2V5ZnJhbWVzIG1vdmV7MCUsdG97dG9wOjAlfTUwJXt0b3A6Y2FsYygxMDAlIC0gMTBweCl9fWA7XG5cbmV4cG9ydCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHt1aUxvYWRpbmcsIHVpU2Nhbm5pbmcsIHVpRXJyb3J9KSB7XG4gICAgY29uc3QgY3NzQmxvY2s9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjc3NCbG9jay5pbm5lclRleHQ9Y3NzO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzQmxvY2spO1xuICAgIGlmICh1aUxvYWRpbmcgPT09ICd5ZXMnKSB7XG4gICAgICB0aGlzLmxvYWRpbmdNb2RhbCA9IHRoaXMuX2xvYWRIVE1MKGxvYWRpbmdIVE1MKTtcbiAgICB9IGVsc2UgaWYgKHVpTG9hZGluZyAhPT0gJ25vJykge1xuICAgICAgdGhpcy5sb2FkaW5nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpTG9hZGluZyk7XG4gICAgfVxuXG4gICAgaWYgKHVpRXJyb3IgPT09ICd5ZXMnKSB7XG4gICAgICB0aGlzLmNvbXBhdGliaWxpdHlNb2RhbCA9IHRoaXMuX2xvYWRIVE1MKGNvbXBhdGliaWxpdHlIVE1MKTtcbiAgICB9IGVsc2UgaWYgKHVpRXJyb3IgIT09ICdubycpIHtcbiAgICAgIHRoaXMuY29tcGF0aWJpbGl0eU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aUVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodWlTY2FubmluZyA9PT0gJ3llcycpIHtcbiAgICAgIHRoaXMuc2Nhbm5pbmdNYXNrID0gdGhpcy5fbG9hZEhUTUwoc2Nhbm5pbmdIVE1MKTtcbiAgICB9IGVsc2UgaWYgKHVpU2Nhbm5pbmcgIT09ICdubycpIHtcbiAgICAgIHRoaXMuc2Nhbm5pbmdNYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNjYW5uaW5nKTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgdGhpcy5oaWRlQ29tcGF0aWJpbGl0eSgpO1xuICAgIHRoaXMuaGlkZVNjYW5uaW5nKCk7XG4gIH1cblxuICBzaG93TG9hZGluZygpIHtcbiAgICBpZiAoIXRoaXMubG9hZGluZ01vZGFsKSByZXR1cm47XG4gICAgdGhpcy5sb2FkaW5nTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBoaWRlTG9hZGluZygpIHtcbiAgICBpZiAoIXRoaXMubG9hZGluZ01vZGFsKSByZXR1cm47XG4gICAgdGhpcy5sb2FkaW5nTW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuICBzaG93Q29tcGF0aWJpbGl0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29tcGF0aWJpbGl0eU1vZGFsKSByZXR1cm47XG4gICAgdGhpcy5jb21wYXRpYmlsaXR5TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBoaWRlQ29tcGF0aWJpbGl0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29tcGF0aWJpbGl0eU1vZGFsKSByZXR1cm47XG4gICAgdGhpcy5jb21wYXRpYmlsaXR5TW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuICBzaG93U2Nhbm5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLnNjYW5uaW5nTWFzaykgcmV0dXJuO1xuICAgIHRoaXMuc2Nhbm5pbmdNYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbiAgaGlkZVNjYW5uaW5nKCkge1xuICAgIGlmICghdGhpcy5zY2FubmluZ01hc2spIHJldHVybjtcbiAgICB0aGlzLnNjYW5uaW5nTWFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgX2xvYWRIVE1MKGh0bWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBlLmlubmVySFRNTCA9IGh0bWwudHJpbSgpO1xuICAgIGNvbnN0IHJvb3ROb2RlID0gZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChyb290Tm9kZSk7XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xuICB9XG59XG5cblxuXG4iXSwibmFtZXMiOlsic21vb3RoaW5nRmFjdG9yIiwidGUiLCJjdXRvZmYiLCJyIiwiZXhwb25lbnRpYWxTbW9vdGhpbmciLCJhIiwieCIsInhQcmV2IiwiT25lRXVyb0ZpbHRlciIsIm1pbkN1dE9mZiIsImJldGEiLCJ0UHJldiIsImR4UHJldiIsImFkIiwiZHgiLCJkeEhhdCIsInhIYXQiLCJpIiwiY3V0T2ZmIiwibG9hZGluZ0hUTUwiLCJjb21wYXRpYmlsaXR5SFRNTCIsInNjYW5uaW5nSFRNTCIsImNzcyIsIlVJIiwidWlMb2FkaW5nIiwidWlTY2FubmluZyIsInVpRXJyb3IiLCJjc3NCbG9jayIsImh0bWwiLCJlIiwicm9vdE5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFrQixDQUFDQyxHQUFJQyxNQUFXO0FBQ3RDLFFBQU1DLElBQUksSUFBSSxLQUFLLEtBQUtELElBQVNEO0FBQ2pDLFNBQU9FLEtBQUtBLElBQUU7QUFDaEIsR0FFTUMsSUFBdUIsQ0FBQ0MsR0FBR0MsR0FBR0MsTUFDM0JGLElBQUlDLEtBQUssSUFBSUQsS0FBS0U7QUFHM0IsTUFBTUMsRUFBYztBQUFBLEVBQ2xCLFlBQVksRUFBQyxXQUFBQyxHQUFXLE1BQUFDLEVBQUksR0FBRztBQUM3QixTQUFLLFlBQVlELEdBQ2pCLEtBQUssT0FBT0MsR0FDWixLQUFLLFVBQVUsTUFFZixLQUFLLFFBQVEsTUFDYixLQUFLLFNBQVMsTUFDZCxLQUFLLFFBQVEsTUFDYixLQUFLLGNBQWM7QUFBQSxFQUNwQjtBQUFBLEVBRUQsUUFBUTtBQUNOLFNBQUssY0FBYztBQUFBLEVBQ3BCO0FBQUEsRUFFRCxPQUFPLEdBQUdKLEdBQUc7QUFDWCxRQUFJLENBQUMsS0FBSztBQUNSLGtCQUFLLGNBQWMsSUFDbkIsS0FBSyxRQUFRQSxHQUNiLEtBQUssU0FBU0EsRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUMzQixLQUFLLFFBQVEsR0FDTkE7QUFHVCxVQUFNLEVBQUMsT0FBQUMs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

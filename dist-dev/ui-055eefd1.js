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
`, y = `<div class="mindar-ui-overlay mindar-ui-scanning" id="scanning">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktMDU1ZWVmZDEuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJzL29uZS1ldXJvLWZpbHRlci5qcyIsIi4uL3NyYy91aS9sb2FkaW5nLmh0bWw/cmF3IiwiLi4vc3JjL3VpL2NvbXBhdGliaWxpdHkuaHRtbD9yYXciLCIuLi9zcmMvdWkvc2Nhbm5pbmcuaHRtbD9yYXciLCIuLi9zcmMvdWkvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVmOiBodHRwczovL2phYW50b2xsYW5kZXIuY29tL3Bvc3Qvbm9pc2UtZmlsdGVyaW5nLXVzaW5nLW9uZS1ldXJvLWZpbHRlci8jbWp4LWVxbiUzQTFcblxuY29uc3Qgc21vb3RoaW5nRmFjdG9yID0gKHRlLCBjdXRvZmYpID0+IHtcbiAgY29uc3QgciA9IDIgKiBNYXRoLlBJICogY3V0b2ZmICogdGU7XG4gIHJldHVybiByIC8gKHIrMSk7XG59XG5cbmNvbnN0IGV4cG9uZW50aWFsU21vb3RoaW5nID0gKGEsIHgsIHhQcmV2KSA9PiB7XG4gIHJldHVybiBhICogeCArICgxIC0gYSkgKiB4UHJldjtcbn1cblxuY2xhc3MgT25lRXVyb0ZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHttaW5DdXRPZmYsIGJldGF9KSB7XG4gICAgdGhpcy5taW5DdXRPZmYgPSBtaW5DdXRPZmY7XG4gICAgdGhpcy5iZXRhID0gYmV0YTtcbiAgICB0aGlzLmRDdXRPZmYgPSAwLjAwMTsgLy8gcGVyaW9kIGluIG1pbGxpc2Vjb25kcywgc28gZGVmYXVsdCB0byAwLjAwMSA9IDFIelxuXG4gICAgdGhpcy54UHJldiA9IG51bGw7XG4gICAgdGhpcy5keFByZXYgPSBudWxsO1xuICAgIHRoaXMudFByZXYgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZpbHRlcih0LCB4KSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMueFByZXYgPSB4O1xuICAgICAgdGhpcy5keFByZXYgPSB4Lm1hcCgoKSA9PiAwKTtcbiAgICAgIHRoaXMudFByZXYgPSB0O1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgY29uc3Qge3hQcmV2LCB0UHJldiwgZHhQcmV2fSA9IHRoaXM7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyXCIsIHgsIHhQcmV2LCB4Lm1hcCgoeHgsIGkpID0+IHhbaV0gLSB4UHJldltpXSkpO1xuXG4gICAgY29uc3QgdGUgPSB0IC0gdFByZXY7XG5cbiAgICBjb25zdCBhZCA9IHNtb290aGluZ0ZhY3Rvcih0ZSwgdGhpcy5kQ3V0T2ZmKTtcblxuICAgIGNvbnN0IGR4ID0gW107XG4gICAgY29uc3QgZHhIYXQgPSBbXTtcbiAgICBjb25zdCB4SGF0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUaGUgZmlsdGVyZWQgZGVyaXZhdGl2ZSBvZiB0aGUgc2lnbmFsLlxuICAgICAgZHhbaV0gPSAoeFtpXSAtIHhQcmV2W2ldKSAvIHRlO1xuICAgICAgZHhIYXRbaV0gPSBleHBvbmVudGlhbFNtb290aGluZyhhZCwgZHhbaV0sIGR4UHJldltpXSk7XG5cbiAgICAgIC8vIFRoZSBmaWx0ZXJlZCBzaWduYWxcbiAgICAgIGNvbnN0IGN1dE9mZiA9IHRoaXMubWluQ3V0T2ZmICsgdGhpcy5iZXRhICogTWF0aC5hYnMoZHhIYXRbaV0pO1xuICAgICAgY29uc3QgYSA9IHNtb290aGluZ0ZhY3Rvcih0ZSwgY3V0T2ZmKTtcbiAgICAgIHhIYXRbaV0gPSBleHBvbmVudGlhbFNtb290aGluZyhhLCB4W2ldLCB4UHJldltpXSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHByZXZcbiAgICB0aGlzLnhQcmV2ID0geEhhdDsgXG4gICAgdGhpcy5keFByZXYgPSBkeEhhdDtcbiAgICB0aGlzLnRQcmV2ID0gdDtcblxuICAgIHJldHVybiB4SGF0O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIE9uZUV1cm9GaWx0ZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWluZGFyLXVpLW92ZXJsYXkgbWluZGFyLXVpLWxvYWRpbmdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIi8+XFxuPC9kaXY+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1pbmRhci11aS1vdmVybGF5IG1pbmRhci11aS1jb21wYXRpYmlsaXR5XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDE+RmFpbGVkIHRvIGxhdW5jaCA6KDwvaDE+XFxuICAgIDxwPlxcbiAgICAgIExvb2tzIGxpa2UgeW91ciBkZXZpY2UvYnJvd3NlciBpcyBub3QgY29tcGF0aWJsZS5cXG4gICAgPC9wPlxcblxcbiAgICA8YnIvPlxcbiAgICA8YnIvPlxcbiAgICA8cD5cXG4gICAgICBQbGVhc2UgdHJ5IHRoZSBmb2xsb3dpbmcgcmVjb21tZW5kZWQgYnJvd3NlcnM6XFxuICAgIDwvcD5cXG4gICAgPHA+XFxuICAgICAgRm9yIEFuZHJvaWQgZGV2aWNlIC0gQ2hyb21lXFxuICAgIDwvcD5cXG4gICAgPHA+XFxuICAgICAgRm9yIGlPUyBkZXZpY2UgLSBTYWZhcmlcXG4gICAgPC9wPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1pbmRhci11aS1vdmVybGF5IG1pbmRhci11aS1zY2FubmluZ1xcXCIgaWQ9XFxcInNjYW5uaW5nXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInNjYW5uaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5uZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjYW5saW5lXFxcIi8+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIiLCIvL2ltcG9ydCBcIi4vdWkuc2Nzc1wiO1xuaW1wb3J0IGxvYWRpbmdIVE1MIGZyb20gJy4vbG9hZGluZy5odG1sP3Jhdyc7XG5pbXBvcnQgY29tcGF0aWJpbGl0eUhUTUwgZnJvbSAnLi9jb21wYXRpYmlsaXR5Lmh0bWw/cmF3JztcbmltcG9ydCBzY2FubmluZ0hUTUwgZnJvbSAnLi9zY2FubmluZy5odG1sP3Jhdyc7XG5cbmNvbnN0IGNzcz1gLm1pbmRhci11aS1vdmVybGF5e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3otaW5kZXg6Mn0ubWluZGFyLXVpLW92ZXJsYXkuaGlkZGVue2Rpc3BsYXk6bm9uZX0ubWluZGFyLXVpLWxvYWRpbmcgLmxvYWRlcntib3JkZXI6MTZweCBzb2xpZCAjMjIyO2JvcmRlci10b3A6MTZweCBzb2xpZCB3aGl0ZTtvcGFjaXR5Oi44O2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjEyMHB4O2hlaWdodDoxMjBweDthbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGV9QGtleWZyYW1lcyBzcGluezAle3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0ubWluZGFyLXVpLWNvbXBhdGliaWxpdHkgLmNvbnRlbnR7YmFja2dyb3VuZDpibGFjaztjb2xvcjojZmZmO29wYWNpdHk6Ljg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjIwcHg7cGFkZGluZzoyMHB4O21pbi1oZWlnaHQ6NTB2aH1AbWVkaWEgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSl7Lm1pbmRhci11aS1zY2FubmluZyAuc2Nhbm5pbmd7d2lkdGg6NTB2aDtoZWlnaHQ6NTB2aH19QG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEpey5taW5kYXItdWktc2Nhbm5pbmcgLnNjYW5uaW5ne3dpZHRoOjgwdnc7aGVpZ2h0Ojgwdnd9fS5taW5kYXItdWktc2Nhbm5pbmcgLnNjYW5uaW5nIC5pbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6Ljg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsd2hpdGUgMTBweCx0cmFuc3BhcmVudCAxMHB4KSAwIDAsbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMCAxMDAlLGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMTAwJSAwLGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMTAwJSAxMDAlLGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sd2hpdGUgMTBweCx0cmFuc3BhcmVudCAxMHB4KSAwIDAsbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSx3aGl0ZSAxMHB4LHRyYW5zcGFyZW50IDEwcHgpIDEwMCUgMCxsaW5lYXItZ3JhZGllbnQodG8gdG9wLHdoaXRlIDEwcHgsdHJhbnNwYXJlbnQgMTBweCkgMCAxMDAlLGxpbmVhci1ncmFkaWVudCh0byB0b3Asd2hpdGUgMTBweCx0cmFuc3BhcmVudCAxMHB4KSAxMDAlIDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2JhY2tncm91bmQtc2l6ZTo0MHB4IDQwcHh9Lm1pbmRhci11aS1zY2FubmluZyAuc2Nhbm5pbmcgLmlubmVyIC5zY2FubGluZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMHB4O2JhY2tncm91bmQ6d2hpdGU7YW5pbWF0aW9uOm1vdmUgMnMgbGluZWFyIGluZmluaXRlfUBrZXlmcmFtZXMgbW92ZXswJSx0b3t0b3A6MCV9NTAle3RvcDpjYWxjKDEwMCUgLSAxMHB4KX19YDtcblxuZXhwb3J0IGNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3Ioe3VpTG9hZGluZywgdWlTY2FubmluZywgdWlFcnJvcn0pIHtcbiAgICBjb25zdCBjc3NCbG9jaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNzc0Jsb2NrLmlubmVyVGV4dD1jc3M7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3NCbG9jayk7XG4gICAgaWYgKHVpTG9hZGluZyA9PT0gJ3llcycpIHtcbiAgICAgIHRoaXMubG9hZGluZ01vZGFsID0gdGhpcy5fbG9hZEhUTUwobG9hZGluZ0hUTUwpO1xuICAgIH0gZWxzZSBpZiAodWlMb2FkaW5nICE9PSAnbm8nKSB7XG4gICAgICB0aGlzLmxvYWRpbmdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlMb2FkaW5nKTtcbiAgICB9XG5cbiAgICBpZiAodWlFcnJvciA9PT0gJ3llcycpIHtcbiAgICAgIHRoaXMuY29tcGF0aWJpbGl0eU1vZGFsID0gdGhpcy5fbG9hZEhUTUwoY29tcGF0aWJpbGl0eUhUTUwpO1xuICAgIH0gZWxzZSBpZiAodWlFcnJvciAhPT0gJ25vJykge1xuICAgICAgdGhpcy5jb21wYXRpYmlsaXR5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpRXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh1aVNjYW5uaW5nID09PSAneWVzJykge1xuICAgICAgdGhpcy5zY2FubmluZ01hc2sgPSB0aGlzLl9sb2FkSFRNTChzY2FubmluZ0hUTUwpO1xuICAgIH0gZWxzZSBpZiAodWlTY2FubmluZyAhPT0gJ25vJykge1xuICAgICAgdGhpcy5zY2FubmluZ01hc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2Nhbm5pbmcpO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICB0aGlzLmhpZGVDb21wYXRpYmlsaXR5KCk7XG4gICAgdGhpcy5oaWRlU2Nhbm5pbmcoKTtcbiAgfVxuXG4gIHNob3dMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5sb2FkaW5nTW9kYWwpIHJldHVybjtcbiAgICB0aGlzLmxvYWRpbmdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5sb2FkaW5nTW9kYWwpIHJldHVybjtcbiAgICB0aGlzLmxvYWRpbmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG4gIHNob3dDb21wYXRpYmlsaXR5KCkge1xuICAgIGlmICghdGhpcy5jb21wYXRpYmlsaXR5TW9kYWwpIHJldHVybjtcbiAgICB0aGlzLmNvbXBhdGliaWxpdHlNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGhpZGVDb21wYXRpYmlsaXR5KCkge1xuICAgIGlmICghdGhpcy5jb21wYXRpYmlsaXR5TW9kYWwpIHJldHVybjtcbiAgICB0aGlzLmNvbXBhdGliaWxpdHlNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG4gIHNob3dTY2FubmluZygpIHtcbiAgICBpZiAoIXRoaXMuc2Nhbm5pbmdNYXNrKSByZXR1cm47XG4gICAgdGhpcy5zY2FubmluZ01hc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBoaWRlU2Nhbm5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLnNjYW5uaW5nTWFzaykgcmV0dXJuO1xuICAgIHRoaXMuc2Nhbm5pbmdNYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBfbG9hZEhUTUwoaHRtbCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIGUuaW5uZXJIVE1MID0gaHRtbC50cmltKCk7XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKHJvb3ROb2RlKTtcbiAgICByZXR1cm4gcm9vdE5vZGU7XG4gIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJzbW9vdGhpbmdGYWN0b3IiLCJ0ZSIsImN1dG9mZiIsInIiLCJleHBvbmVudGlhbFNtb290aGluZyIsImEiLCJ4IiwieFByZXYiLCJPbmVFdXJvRmlsdGVyIiwibWluQ3V0T2ZmIiwiYmV0YSIsInRQcmV2IiwiZHhQcmV2IiwiYWQiLCJkeCIsImR4SGF0IiwieEhhdCIsImkiLCJjdXRPZmYiLCJsb2FkaW5nSFRNTCIsImNvbXBhdGliaWxpdHlIVE1MIiwic2Nhbm5pbmdIVE1MIiwiY3NzIiwiVUkiLCJ1aUxvYWRpbmciLCJ1aVNjYW5uaW5nIiwidWlFcnJvciIsImNzc0Jsb2NrIiwiaHRtbCIsImUiLCJyb290Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLElBQWtCLENBQUNDLEdBQUlDLE1BQVc7QUFDdEMsUUFBTUMsSUFBSSxJQUFJLEtBQUssS0FBS0QsSUFBU0Q7QUFDakMsU0FBT0UsS0FBS0EsSUFBRTtBQUNoQixHQUVNQyxJQUF1QixDQUFDQyxHQUFHQyxHQUFHQyxNQUMzQkYsSUFBSUMsS0FBSyxJQUFJRCxLQUFLRTtBQUczQixNQUFNQyxFQUFjO0FBQUEsRUFDbEIsWUFBWSxFQUFDLFdBQUFDLEdBQVcsTUFBQUMsRUFBSSxHQUFHO0FBQzdCLFNBQUssWUFBWUQsR0FDakIsS0FBSyxPQUFPQyxHQUNaLEtBQUssVUFBVSxNQUVmLEtBQUssUUFBUSxNQUNiLEtBQUssU0FBUyxNQUNkLEtBQUssUUFBUSxNQUNiLEtBQUssY0FBYztBQUFBLEVBQ3BCO0FBQUEsRUFFRCxRQUFRO0FBQ04sU0FBSyxjQUFjO0FBQUEsRUFDcEI7QUFBQSxFQUVELE9BQU8sR0FBR0osR0FBRztBQUNYLFFBQUksQ0FBQyxLQUFLO0FBQ1Isa0JBQUssY0FBYyxJQUNuQixLQUFLLFFBQVFBLEdBQ2IsS0FBSyxTQUFTQSxFQUFFLElBQUksTUFBTSxDQUFDLEdBQzNCLEtBQUssUUFBUSxHQUNOQTtB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

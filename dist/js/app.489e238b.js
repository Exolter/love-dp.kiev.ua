(function (e) {
  function t(t) {
    for (
      var a, n, s = t[0], o = t[1], r = t[2], d = 0, u = [];
      d < s.length;
      d++
    )
      (n = s[d]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && u.push(i[n][0]),
        (i[n] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    b && b(t);
    while (u.length) u.shift()();
    return l.push.apply(l, r || []), c();
  }
  function c() {
    for (var e, t = 0; t < l.length; t++) {
      for (var c = l[t], a = !0, s = 1; s < c.length; s++) {
        var o = c[s];
        0 !== i[o] && (a = !1);
      }
      a && (l.splice(t--, 1), (e = n((n.s = c[0]))));
    }
    return e;
  }
  var a = {},
    i = { app: 0 },
    l = [];
  function n(t) {
    if (a[t]) return a[t].exports;
    var c = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
    (n.c = a),
    (n.d = function (e, t, c) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var c = Object.create(null);
      if (
        (n.r(c),
        Object.defineProperty(c, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            c,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return c;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var r = 0; r < s.length; r++) t(s[r]);
  var b = o;
  l.push([0, "chunk-vendors"]), c();
})({
  0: function (e, t, c) {
    e.exports = c("56d7");
  },
  "03e5": function (e, t, c) {
    e.exports = c.p + "img/blog-desc3.70d5acb9.webp";
  },
  "0a51": function (e, t, c) {
    e.exports = c.p + "img/blog-desc2.3a9ea13f.webp";
  },
  "23f3": function (e, t) {
    e.exports =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABfAF8DASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQYEBwEDCAAC/8QANRAAAgEDAwMDAgQFAwUAAAAAAQIDBAURABIhBjFBE1FhInEHFIGRFTKhscEjM0IkUnLh8P/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EAB8RAAICAwEBAAMAAAAAAAAAAAABAhEDEiExBCJBUf/aAAwDAQACEQMRAD8ApfpzmqVX2grEGTnGTzjj740x26hpI3/MPKjusZ2jHuSeR4PGk3oy4s9VD9IxkqCwz8k/17aZ47ksd7liMMlTOQPRhiTcXJ8fbnnXmTbTPVwRTJd9SjjipY5BvkdvUlRj/KucAftnWmprK+5QVFBR08CLUVSy1LBidypwsYPtjJP3079F/h7XV1a126kk9KWc7hTo+4qvhS3b3J+ftpyt/Q9no7g1ZHQREKMLHkkA+/OcnS3P+FaxuvSsYena6VPUcszyuGbjG7HYAeFGdP3TvRUdJan2RnfIQV3HAxjO3PjJ/wAaaqSzxDM3phpXIUluyL5wNMlKkXpspUGMnjIzoFcn0JQUVwpi60tTZpzeKZBVJGWWspnj/wBVVPfI/wCSn3HY4PbOl+69FUHUFMt76dq6cpMCyqn1L25Ug+R2IPI8av242ykkYyenGXx38/vpWl6eoKO7tc6WD0JnGJPSO1ZPll7E/PfXPajFGLObm6Eu0VEKt0gMDNwhJBTnB7/I0IvFsrfSKKFdVBUouA32+f0Oup5KOmenaNVVcg4G0H++ql666ZnmqahaUtuwHKquPtp2LJ3pNkw84iiaq2SPIU9TDY3AMD/nnQuE1FPLlHwPcHR7qmnq6G5erMJElRu+MA/0B0umZ452Y5bkkZ86vXUea1THTo15KOppaybaCMqVx2HYfr7avvoKyUsk09yEYDyMhjkXg429vtrnXpWoL3yip5HJIlBkzzkck510JYbtev4YgsVjeSBv9uSV9qt8gd8ahzxex6fyNalo0chIB4znjREFjEWU/Oquob/1PDOIrhao4W84JK5+D4092m5CeDDqY3xgr7aRWvpcqYU/M7MMzAKBySdDH6nEaCCgp5qx+fpQY2+Of11rusBqbdJArcnsPH66Xoma3xsrS7OcuQe51inRzV8DUTdSVkjSVE9LRRY+lM73z/bWfyd0gO43VJxjlGQ4Px/70qVXXNqtqu0gnqSncQoXx5GT2GdQYfxPoamWQVFsudIinaZHgJVf/LHb9dHUmroVtBOrGw1VQJzFUUu0E4DxsGX/AAdelijkALDPGNBaW/0lWV/LTCcE/SVOilQ5MAl5AxwNJckh0cbl4IP4rdPw1treZY1aVR3C4OudbhQMZnSJF3huR766pv0yz0UsMgA3DGfb51zv1dQvR3Sc7fpBHbzntq35ctqjz/u+bXpC/D2k/NdWIHGR9Xfzxz/TXQ69ZWbp23wfxCcQqQFQBSSccYGNU9+GFuQX+DLKXCyF08rqya/pWG4ohqTIY1YNGyLynPvoM8ouSsb8kJKDr0Yqz8QaCIQSSWS4pBOnqRz1CpCrLgnIDsDj6Tj34AySMmqe/UVfQJXUsMsJVVbJjKgqTjz85H3BGhtr6fp3SAVFTPWiIAR+uoYKB4GRopd6ClpqWmp6dUR5JAp255XJOPt5xpL0kuD4xyRf5MbLdLTyUAMkYLkZBxpV6voFqzIsTbAoGfk/4GmOiVYaRcnPjGsiiSVSzLnPb50AyivaS0TT2KaxmlpI6WaQPLMSxdm5Gf2OPbGiEHQlkpqXEZnqGb6pfUlYhj8knJPydOC08USlVjTPjjXzHD60v+ocRrpm8vLBWCDe1AChtkFOgEMMSlO3HGvVTM0JDhUOcd+NNFZTpFH9AyvbJ0v3VA8bbePganlFlmKkI9wd/UMZJ+odtVb15HHV3SRpHWFWcglvJH21aV5haOoU+Qf30ofiD07NLS/m4RuDEbVHj3/vp/zPV9JvuhvEAfhjGT1ZUVDnBeJxj5DDV52cKYwGOWHAPxqirVN/BeuVhl4QzSRN8Zbg6uyxz/yrnd+usncjvlSSaQx08GWXAIGfGtV0hUV8AbACjd851KSqEdPnABHZtAnusM18WOqk2cYUHjI9xrKobNeDHJMpiCrk4+daIbzJTZIgOPc9tZrrpbqa27WRPUU53hiSR2Ax/wDd9CqiprKiFUjt77WGFBYbj9/bXUCqfAtHd4KlwP5WPjRO3SwLIHZjt7H4Pvxofb7TELIkFREjy5LEjupJ8HUaa2XCjBkhmSdMZ2scMP17HWxddN3j4wzd5o9rFG4Gleqql3mPPB8419vXPKGieKRJMcq3jUc0zFwx7jkZ0MnYUZJRBF2hzOjMuTkHI8ah3yIGijiC7yT/AC6PXJRjdgEg6A184Dk5BIHc+NclQqTv0pTr6Grg6kqmqgiSNKxIjOQpyeAfP31Y/wCGnUD3S2Lvb/qac7JOeWHhv10m/iFRVbCStqgnqNM24KcgcnPOg3QN1a1dQCQs3osmJAPPI501VXSXHJxlw6RjM1TT4QEjy2hl2W31lQaOvjhZI1/5kAr8g9x+mjHRtfCzbGIdHUMPYg6g/iTZ6WvjMfppvHKMRz++lP0qu30j2qks6xen/FncgjYpl38fc6YaS+WS2wMsryTTrxgR/wBvGq7tPTrqY/WgIRT9RSQjj4089KWy3QTb5ohuQ5RiwPPznxo4qN9ZXLDhjG7s9WdbTSKwobNLgdnmfaP2AJ1toKW7V+2pulXsQ8rTU/Cj7nudGxR025pQfUdiCSAOfb41ujQDGV4Bzn40M2vETSljXIIhJbwXJ24deD9tRa1FR8ADPbRh5gImfaeR3PnQCWYPO0hICr4+dCgUwTfplSJQCM/Gk68ViRRNIzALxz786O9QTkyPjzpQulJJWuYScQxY3/LHxolzoLZi+RCoo4qWpoxcRNI2VoZ8/USG2hyOfoO7OMeAc6TbnS9OW2tmpDQ3Whr1MYEUlTG7lXP0gIMljnGccgftptevFHU2s0KVcK3eGKnqC8gWKBJVJTCjduYFTjjHHPfOm+2dEzPY5KaFoaO5qpD1IKlqFNmGkhYoTIfGWIbBOCvGqpYorjZI8unI+iX0L1a9DfJunLgpiqaKTYjFwQxHdTjjOrOe4x15jYuSrMFb4Gqb6j6YjXpW1vPFBbrh6rG3iOR5ZazHf1H4CKMZA5OSeedFeh77WVVoFVL/AL8GVqIx2YKSCyn340rLjVKUQ8OVtuMi36Gk2nYc48e2i9Jb4sZZR8caAdPXCOvooJ1dicc5Hx30zQVix7RtzjSUir9BejhSGB8AYwOMahXGeKORvSP0eNaa+7rHF9IxxzgaUKy51FXU/lKbmWTnLcBR76KVJUAl2ybc70iloE5IGoCtM0O5vp886xBb4aaTdITM45dz3J1EudZJPOtJD9JY4+w0vh1g2oV6idioL4O1QB/MfGpVbaRQ2xIGwZmO6RvnTH0xa0dfzrKvpRZWMf8Ac3ljqJ1GQ0rZ8H20MpGqNs//2Q==";
  },
  "256e": function (e, t, c) {
    e.exports = c.p + "img/businesses-1.14bdd06b.jpg";
  },
  "27fd": function (e, t, c) {
    e.exports = c.p + "img/team-img1.d1910311.webp";
  },
  "3a9b6": function (e, t, c) {
    e.exports = c.p + "img/businesses-3.e84d5f89.webp";
  },
  "3da1": function (e, t, c) {
    e.exports = c.p + "img/Dobrobut.07b21973.png";
  },
  "3dfc": function (e, t, c) {
    e.exports = c.p + "img/404.f78cd09c.png";
  },
  "464a": function (e, t) {
    e.exports =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABfAF8DASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABQIDBAYHAQgA/8QANxAAAgEDAgQEBAMHBQEAAAAAAQIDAAQRBSEGEjFBE1FhcQcUIjJCkbEjNFJigaHBFhckktHx/8QAGwEAAwEBAQEBAAAAAAAAAAAAAwQFAgEGAAf/xAAmEQACAgEEAgEEAwAAAAAAAAAAAQIRAwQSIUEFMRMGIlFhUrHR/9oADAMBAAIRAxEAPwD1aBvvXMdaWMeVcIxSaGbGzsre1NuwRMscD1p5sBGy2Biges3iICSwwo2Fcas1F0c1HUnXKxtyKe/c/wDlQobueVsxzSbd+1VfVNSeVnw+Fzyhh+I98elC34tk01liQBkA+ok1hV2FcZVwaJDq3I/Jc7jOCwGCPcUTidHjDowZT0I71nSa9a6vaC6tCcjZ0Oxz7VM0PiBbVwrPmJuqk9PahuVOujqg3H9l62pBHWmLO9trqPnglVx5A7j+lPE5ohjnsSRtSfelE0hiM74FaSO2G8U3K6ohZjsKXQjiCd1kigQgcwJY1tAhme/e4lKIcjGFwOlBr3T5maR5XLbdBR3Q4oxG07j62OOmOlNa3KEzIuQo/pQ8kq9jODGpFCvdLJGF22I37VXdS0XmJ58Ae9XLUZ25g4ICsd/SgGqToCwY9Djr1NJzyfgqYMP6K3bRHT5HELFQ45TilJes8nLKxUk7kd/WuXLl2IAz5VGnjyobbI3z50OM36YSeBdFn0PUJLK5QSyFUb7WH65rS9NujPbAucsNjjv61jtldIU+XkOY23U/wn0rR+CrhptPwzFmTCk+3Sm8TJWaFFjyKQzbmuFsDvTLPTAsWjFV7iUEuzDooAPpk1Y8YoRfIJJrmPGcKD+uKIlZiyHokjPacuGxkgZprVmIs5FZ1JG+/akWlwI7W7AODHjp2JGKovFGp6otvN4U7FAMHCjGPelsvuijpI2rH5JI3mljdxyhSyk+1AjJFc3fK7BlAJGaDaVqNxcCVZZ+eXGAp60xxMt5A0UpDxrIuQCCKTcaLMJJWl7HNV1S0hlaOLEjA4wtRU1KGVvCZSu3Q1VBPdSSslhZfOXLEhS74Rd/71JtItbjlX52K2du6xHHJ7k9RWXDiz5Pc6D15KbZAw+1SDV6+G+rD5jwGfKypke9Z/qCyy2GAPqXBOKc4VupotUt4IwSfFAHKd13/St4Z0JajA2mb4ZPpph5MDrSUJC4O486amb6TVDojUXqhl9iLUGbfEkePyopUa6iDzQtjOCR+YogJFSDhZWWQDwrluVSD75zVD4y4cS6trl9TvryBAuI4YD95P4j7bYHvWoajp2JAUwvht4o9RncUK1WKE2Uk77v1FKZG1ItaJRlGjDOG+HrptQUW0Fx4EDgiaZypGDnJ/Kr58QYHn05HdQCoyDjYCo8mtjT5Y7W3TxLq6mCrFnJbPai/HDiLQ7aK5YK5TJU9c96A23FlKOJRmjKrfS7cuJRNIu+D4bYIz2Bo7KtpFaiKBOUDqe59z3qs6ncwG4aC0vSLtSMxqAVA9R2puLUrhf2V2ys3Zx3oLdjcNkXQeKqHJU7HtRD4d28H+shIyEkqRg9BhSc+9V+2uOeRQGqRouvT6Xq0sqqqFXIBP417/8A2sRmoNNgs+PfCSX4Ny5xy0xK305zVA/3FtuX92l/7iuP8Q7Qj92kwf5hTr1mL+R55aLMn6PQJHam5ASAfIinO5rnaqFE9IZljVjlgDtis64wuHsvEjIYDBxkVpDY3qrceab87YeJGpMkZ3wO1L6iDcbXRS8dm2ZNr9MxfgmEahxq95dgFYAyqG/CaMcZabpMVm+JLgHxMqvjscZ69c1Js9F8LWobu1ZolnLJLg4yTuCPLoaFcZ6IIIixkluGZycmY/4xSsH9lFdJ5Mtt0Z8ZdO064kjQhQScnqT7nqaYOL6VESN443YYZhgkDyHUUQbSrG3cyNGA2fsAp3lRl5wvLyn7qXnwMOCT4YiApb87MyhY1JLeQFVd9VhmJmjnHK5JG29F9elEXDuqSM3S3k3z/Kaz/SNZWwskSW3EwffORkHlx3oXxLIuR7HheSL2q2izjUlxjxQRTi6lHj7x+dfabf6VePzDw4w0QwJUA+rJ28q49rD8nFIY0BZAdlFfPRKrsUyTljdTg0e5t+xxSS1Q9a1Wy0jT5L6/lMUEY+pghY/kKxjjn4xXkoe14fg+TibYXMgzKfYdF/uavSmo+zz/AI7xGq8hKsMeO30jR+POONH4Tt/+W/j3jDMdrGfqPqf4R71gXFnxV4r1i/iS0uBZW/jAhItlwDk57tt57VVNS1KeeR7m5lkmkkbLM7FmJ8yTQ2+dVt47tMq3i8opWeVy4P0vxn0ppdHDdP7p9v8Aw3/h/XdNvoheRyoCjJ4sXNvE4z19CDt6VP1XT4bq2dnYFfuTHlXn3TtWOk8ZabrPK0llcQmG7izgvH1yP5lO4rVuIdZl07QTeQztLZsoKScv1cp6ZBoFbTzvk/HvT6lxj66Buv21lbpyxKoI6ljvVT1S8iijMcbDp1/zQC+4vS+uJGMk2CSBhcb/ANag3WoJFGZpmzjoAM58qBNWYjipcsZ431J04ang5/2t2RGo8lJ3qk3rcoiiHUbkDripetak17d+NKP2ce4H6UN09jczPcv0zhR5CtwjtiVNFicbv3L+kFLQyRxnJPM3bsKI22p3MC8scrEfw9RQvxASQOv6U5Hv1FcovfFCS2tWf//Z";
  },
  "51c1": function (e, t, c) {
    e.exports = c.p + "img/team-img4.c2bc4da3.jpg";
  },
  "53c3": function (e, t, c) {
    e.exports = c.p + "img/intro-brovary-1.0869bcf6.webp";
  },
  5680: function (e, t, c) {
    e.exports = c.p + "img/team-img3.4e79e663.jpg";
  },
  "56d7": function (e, t, c) {
    "use strict";
    c.r(t);
    c("e260"), c("e6cf"), c("cca6"), c("a79d");
    var a = c("7a23");
    function i(e, t, c, i, l, n) {
      var s = Object(a["B"])("Preloader"),
        o = Object(a["B"])("router-view");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          l.isLoading
            ? (Object(a["v"])(), Object(a["e"])(s, { key: 0 }))
            : Object(a["f"])("", !0),
          Object(a["k"])(o),
        ])
      );
    }
    var l = { class: "preloader" },
      n = Object(a["h"])(
        "div",
        { class: "loader" },
        [
          Object(a["h"])("div", { class: "shadow" }),
          Object(a["h"])("div", { class: "box" }),
        ],
        -1
      ),
      s = [n];
    function o(e, t, c, i, n, o) {
      return Object(a["v"])(), Object(a["g"])("div", l, s);
    }
    var r = { name: "Preloader" },
      b = c("6b0d"),
      d = c.n(b);
    const u = d()(r, [["render", o]]);
    var v = u,
      j = {
        name: "App",
        components: { Preloader: v },
        data: function () {
          return { isLoading: !0 };
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            e.isLoading = !1;
          }, 2e3);
        },
      };
    const p = d()(j, [["render", i]]);
    var h = p,
      m = c("6c02");
    function O(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("MainBanner"),
        r = Object(a["B"])("Featured"),
        b = Object(a["B"])("Services"),
        d = Object(a["B"])("ServicesTwo"),
        u = Object(a["B"])("ServicesThree"),
        v = Object(a["B"])("FeaturesTwo"),
        j = Object(a["B"])("Invoicing"),
        p = Object(a["B"])("FunFacts"),
        h = Object(a["B"])("Feedback"),
        m = Object(a["B"])("ReadyToTalk"),
        O = Object(a["B"])("Partner"),
        g = Object(a["B"])("AppDownload"),
        f = Object(a["B"])("AccountCreate"),
        A = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
          Object(a["k"])(u),
          Object(a["k"])(v),
          Object(a["k"])(j),
          Object(a["k"])(p),
          Object(a["k"])(h),
          Object(a["k"])(m),
          Object(a["k"])(O),
          Object(a["k"])(g),
          Object(a["k"])(f),
          Object(a["k"])(A),
        ])
      );
    }
    var g = c("9d64"),
      f = c.n(g),
      A = c("a109"),
      k = c.n(A),
      w = { class: "dplove-nav" },
      y = { class: "container" },
      B = { class: "navbar navbar-expand-md navbar-light" },
      x = Object(a["h"])("img", { src: f.a, alt: "image" }, null, -1),
      T = Object(a["h"])("img", { src: k.a, alt: "image" }, null, -1),
      P = ["aria-pressed"],
      F = Object(a["h"])("span", { class: "icon-bar top-bar" }, null, -1),
      q = Object(a["h"])("span", { class: "icon-bar middle-bar" }, null, -1),
      S = Object(a["h"])("span", { class: "icon-bar bottom-bar" }, null, -1),
      E = [F, q, S],
      H = { class: "navbar-nav ml-auto" },
      J = { class: "nav-item" },
      I = Object(a["j"])(" Головна "),
      Q = { class: "nav-item" },
      G = Object(a["j"])(" Про пансіонат "),
      M = { class: "nav-item" },
      R = Object(a["j"])(" Персонал "),
      U = { class: "nav-item" },
      V = Object(a["j"])(" Послуги "),
      C = { class: "nav-item" },
      D = Object(a["j"])(" Блог "),
      L = { class: "nav-item" },
      K = Object(a["j"])(" Контакти ");
    function z(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link"),
        o = Object(a["B"])("b-collapse");
      return (
        Object(a["v"])(),
        Object(a["g"])(
          "div",
          {
            class: Object(a["q"])(["navbar-area", { "is-sticky": l.isSticky }]),
          },
          [
            Object(a["h"])("div", w, [
              Object(a["h"])("div", y, [
                Object(a["h"])("nav", B, [
                  Object(a["k"])(
                    s,
                    { class: "navbar-brand", to: "/" },
                    {
                      default: Object(a["J"])(function () {
                        return [x, T];
                      }),
                      _: 1,
                    }
                  ),
                  Object(a["h"])(
                    "div",
                    {
                      class: Object(a["q"])([
                        "navbar-toggler",
                        { active: l.button_active_state },
                      ]),
                      onClick: [
                        t[0] ||
                          (t[0] = function (e) {
                            return (l.active = !l.active);
                          }),
                        t[1] ||
                          (t[1] = function (e) {
                            return (l.button_active_state =
                              !l.button_active_state);
                          }),
                      ],
                      "aria-pressed": l.active ? "true" : "false",
                    },
                    E,
                    10,
                    P
                  ),
                  Object(a["k"])(
                    o,
                    {
                      class: Object(a["q"])([
                        "collapse navbar-collapse",
                        { show: l.active },
                      ]),
                      "is-nav": "",
                    },
                    {
                      default: Object(a["J"])(function () {
                        return [
                          Object(a["h"])("ul", H, [
                            Object(a["h"])("li", J, [
                              Object(a["k"])(
                                s,
                                { to: "/", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [I];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            Object(a["h"])("li", Q, [
                              Object(a["k"])(
                                s,
                                { to: "/about-us", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [G];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            Object(a["h"])("li", M, [
                              Object(a["k"])(
                                s,
                                { to: "/team", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [R];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            Object(a["h"])("li", U, [
                              Object(a["k"])(
                                s,
                                { to: "/features-1", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [V];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            Object(a["h"])("li", C, [
                              Object(a["k"])(
                                s,
                                { to: "/blog-1", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [D];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                            Object(a["h"])("li", L, [
                              Object(a["k"])(
                                s,
                                { to: "/contact", class: "nav-link" },
                                {
                                  default: Object(a["J"])(function () {
                                    return [K];
                                  }),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ),
                ]),
              ]),
            ]),
          ],
          2
        )
      );
    }
    var Z = {
      name: "Navbar",
      data: function () {
        return { isSticky: !1, active: !1, button_active_state: !1 };
      },
      mounted: function () {
        var e = this;
        window.addEventListener("scroll", function () {
          var t = window.scrollY;
          e.isSticky = t >= 100;
        });
      },
    };
    const Y = d()(Z, [["render", z]]);
    var X = Y,
      N = { class: "main-banner" },
      W = { class: "d-table" },
      _ = { class: "d-table-cell" },
      $ = { class: "container" },
      ee = { class: "main-banner-content" },
      te = Object(a["h"])("h1", null, 'Пансіонат для пристарілих "Любов"', -1),
      ce = Object(a["h"])(
        "p",
        null,
        " Головний представник щасливої старості. Зв'яжіться з нами, щоб отримати безкоштовну консультацію ",
        -1
      ),
      ae = Object(a["j"])(" Контакти "),
      ie = Object(a["h"])(
        "a",
        {
          href: "tel:+380443440444",
          style: { "margin-left": "10px" },
          class: "btn btn-primary",
        },
        "+38 (044) 344-04-44",
        -1
      );
    function le(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", N, [
          Object(a["h"])("div", W, [
            Object(a["h"])("div", _, [
              Object(a["h"])("div", $, [
                Object(a["h"])("div", ee, [
                  te,
                  ce,
                  Object(a["k"])(
                    s,
                    { to: "/contact", class: "btn btn-primary" },
                    {
                      default: Object(a["J"])(function () {
                        return [ae];
                      }),
                      _: 1,
                    }
                  ),
                  ie,
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var ne = { name: "MainBanner" };
    const se = d()(ne, [["render", le]]);
    var oe = se,
      re = { class: "featured-boxes-area" },
      be = { class: "container" },
      de = { class: "featured-boxes-inner" },
      ue = { class: "row m-0" },
      ve = { class: "col-lg-3 col-sm-6 col-md-6 p-0" },
      je = { class: "single-featured-box" },
      pe = Object(a["h"])(
        "div",
        { class: "icon color-fb7756" },
        [Object(a["h"])("i", { class: "flaticon-wallet" })],
        -1
      ),
      he = Object(a["h"])("h3", null, "Кваліфікований персонал", -1),
      me = Object(a["h"])(
        "p",
        null,
        " Вища освіта та багаторічний досвід команди - гарантують вашим близьким професійний догляд 24/7. ",
        -1
      ),
      Oe = Object(a["j"])("Дізнатись більше"),
      ge = { class: "col-lg-3 col-sm-6 col-md-6 p-0" },
      fe = { class: "single-featured-box" },
      Ae = Object(a["h"])(
        "div",
        { class: "icon color-facd60" },
        [Object(a["h"])("i", { class: "flaticon-shield" })],
        -1
      ),
      ke = Object(a["h"])("h3", null, "Безпека", -1),
      we = Object(a["h"])(
        "p",
        null,
        " Цілодобове знаходження в пансіонаті медсестри, доглядальниці, охорони та наявність індивідуальної кнопки виклику персоналу. ",
        -1
      ),
      ye = Object(a["j"])("Дізнатись більше"),
      Be = { class: "col-lg-3 col-sm-6 col-md-6 p-0" },
      xe = { class: "single-featured-box" },
      Te = Object(a["h"])(
        "div",
        { class: "icon color-1ac0c6" },
        [Object(a["h"])("i", { class: "flaticon-piggy-bank" })],
        -1
      ),
      Pe = Object(a["h"])("h3", null, "Доступні ціни", -1),
      Fe = Object(a["h"])(
        "p",
        null,
        " Ми гарантуємо гідні умови проживання, догляду, лікування та реабілітації за найнижчими цінами в регіоні. ",
        -1
      ),
      qe = Object(a["j"])("Дізнатись більше"),
      Se = { class: "col-lg-3 col-sm-6 col-md-6 p-0" },
      Ee = { class: "single-featured-box" },
      He = Object(a["h"])(
        "div",
        { class: "icon" },
        [Object(a["h"])("i", { class: "flaticon-data-encryption" })],
        -1
      ),
      Je = Object(a["h"])("h3", null, "Трансфер", -1),
      Ie = Object(a["h"])(
        "p",
        null,
        " Забезпечимо комфортну доставку до пансіонату на автомобілі швидкої допомоги. ",
        -1
      ),
      Qe = Object(a["j"])("Дізнатись більше");
    function Ge(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", re, [
          Object(a["h"])("div", be, [
            Object(a["h"])("div", de, [
              Object(a["h"])("div", ue, [
                Object(a["h"])("div", ve, [
                  Object(a["h"])("div", je, [
                    pe,
                    he,
                    me,
                    Object(a["k"])(
                      s,
                      { to: "/features-1", class: "read-more-btn" },
                      {
                        default: Object(a["J"])(function () {
                          return [Oe];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                Object(a["h"])("div", ge, [
                  Object(a["h"])("div", fe, [
                    Ae,
                    ke,
                    we,
                    Object(a["k"])(
                      s,
                      { to: "/features-1", class: "read-more-btn" },
                      {
                        default: Object(a["J"])(function () {
                          return [ye];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                Object(a["h"])("div", Be, [
                  Object(a["h"])("div", xe, [
                    Te,
                    Pe,
                    Fe,
                    Object(a["k"])(
                      s,
                      { to: "/features-1", class: "read-more-btn" },
                      {
                        default: Object(a["J"])(function () {
                          return [qe];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
                Object(a["h"])("div", Se, [
                  Object(a["h"])("div", Ee, [
                    He,
                    Je,
                    Ie,
                    Object(a["k"])(
                      s,
                      { to: "/features-1", class: "read-more-btn" },
                      {
                        default: Object(a["J"])(function () {
                          return [Qe];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var Me = { name: "Featured" };
    const Re = d()(Me, [["render", Ge]]);
    var Ue = Re,
      Ve = c("256e"),
      Ce = c.n(Ve),
      De = { class: "services-area ptb-70" },
      Le = Object(a["i"])(
        '<div class="container-fluid p-0"><div class="overview-box"><div class="overview-content"><div class="content left-content"><h2>Наші послуги незамінні</h2><div class="bar"></div><p> Європейська якість догляду, та прогресивна методика з багаторічним досвідом, дозволяють нам надавати першокласні послуги для комфорту та безпеки ваших рідних. </p><ul class="services-list"><li><span><i class="flaticon-check-mark"></i> Післяопераційний догляд</span></li><li><span><i class="flaticon-check-mark"></i> Реабілітація після інсульту та інфаркту</span></li><li><span><i class="flaticon-check-mark"></i> Гальмування деменції</span></li><li><span><i class="flaticon-check-mark"></i> Догляд за лежачими</span></li><li><span><i class="flaticon-check-mark"></i> Відновлення після травм</span></li><li><span><i class="flaticon-check-mark"></i> Догляд за людьми з віковими розладами</span></li></ul></div></div><div class="overview-image"><div class="image"><img src="' +
          Ce.a +
          '" alt="Дідусь обіймає бабусю"></div></div></div></div>',
        1
      ),
      Ke = [Le];
    function ze(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", De, Ke);
    }
    var Ze = { name: "Services" };
    const Ye = d()(Ze, [["render", ze]]);
    var Xe = Ye,
      Ne = c("c44d"),
      We = c.n(Ne),
      _e = { class: "services-area ptb-70 bg-f7fafd" },
      $e = Object(a["i"])(
        '<div class="container-fluid p-0"><div class="overview-box"><div class="overview-image"><div class="image"><img src="' +
          We.a +
          '" alt="image"></div></div><div class="overview-content"><div class="content"><h2>Домашня атмосфера</h2><div class="bar"></div><p> Пріоритетом для нас є приємне та безтурботне життя ваших рідних. Ми завжди допомагаємо підтримувати гарний настрій і позитивний психологічний стан наших мешканців. </p><ul class="services-list"><li><span><i class="flaticon-check-mark"></i> Арт-терапія</span></li><li><span><i class="flaticon-check-mark"></i> Фізичні вправи</span></li><li><span><i class="flaticon-check-mark"></i> Святкуємо всі свята</span></li><li><span><i class="flaticon-check-mark"></i> Запрошуємо класичних музикантів</span></li><li><span><i class="flaticon-check-mark"></i> Настільні ігри</span></li><li><span><i class="flaticon-check-mark"></i> Позитивне спілкування</span></li></ul></div></div></div></div>',
        1
      ),
      et = [$e];
    function tt(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", _e, et);
    }
    var ct = { name: "ServicesTwo" };
    const at = d()(ct, [["render", tt]]);
    var it = at,
      lt = c("3a9b6"),
      nt = c.n(lt),
      st = { class: "services-area ptb-70" },
      ot = Object(a["i"])(
        '<div class="container-fluid p-0"><div class="overview-box"><div class="overview-content"><div class="content left-content"><h2>Чому обирають нас?</h2><div class="bar"></div><p> «Пансіонат &quot;Любов&quot; - це другий дім для ваших рідних, де вони оточені турботою та любов’ю. Ми дуже уважно ставимось до потреб та побажань наших гостей а також до індивідуальних призначень спеціалістів. </p><ul class="services-list"><li><span><i class="flaticon-check-mark"></i> Консультації лікарів та персональний підбір лікування</span></li><li><span><i class="flaticon-check-mark"></i> Ретельний підхід до чистоти та гігієни</span></li><li><span><i class="flaticon-check-mark"></i> Свіжа та смачна їжа 4 рази на день</span></li><li><span><i class="flaticon-check-mark"></i> Індивідуальний підбір харчування для різних діагнозів</span></li><li><span><i class="flaticon-check-mark"></i> Спеціалізоване сучасне медичне обладнання</span></li><li><span><i class="flaticon-check-mark"></i> Висококваліфікована дбайлива позитивна команда професіоналів 24/7</span></li></ul></div></div><div class="overview-image"><div class="image"><img src="' +
          nt.a +
          '" alt="image"></div></div></div></div>',
        1
      ),
      rt = [ot];
    function bt(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", st, rt);
    }
    var dt = { name: "ServicesThree" };
    const ut = d()(dt, [["render", bt]]);
    var vt = ut,
      jt = { class: "features-area ptb-70 bg-f6f4f8" },
      pt = Object(a["i"])(
        '<div class="container"><div class="section-title"><h2>Переваги пансіонату Любов</h2><div class="bar"></div><p> Наша команда не просто персонал, а справжня сім’я професіоналів. На скільки відповідально ми ставимось до якості наших послуг, на стільки ж чуйно ми ставимось до кожної людини яка обирає провести старість з нами. Тому робимо все щоб ви та ваші рідні відчували нашу турботу </p></div><div class="row"><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon"><i class="flaticon-settings"></i></div><h3>Швидке заселення</h3><p>Спрощена процедура без бюрократичних вимог</p></div></div><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon bg-f78acb"><i class="flaticon-envelope-of-white-paper"></i></div><h3>Абсолютна безпека</h3><p> Закрита територія з охороною, цілодобове відеоспостереження та пожежна безпека </p></div></div><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon bg-cdf1d8"><i class="flaticon-menu"></i></div><h3>Інноваційне обладнання</h3><p> Спеціалізовані ліжка з протипролежневими матрацами, індивідуальні кнопки виклику персоналу, реабілітаційні тренажери, медичні поручні, інвалідні візки </p></div></div><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon bg-c679e3"><i class="flaticon-info"></i></div><h3>Регулярне обстеження лікарів</h3><p> Терапевт, Геронтолог, Кардіолог, Психіатр, Психолог, Реабілітолог, Фізіотерапевт, Массажист та Мануальний терапевт </p></div></div><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon bg-eb6b3d"><i class="flaticon-cursor"></i></div><h3>Все включено</h3><p> Смачна дієтична їжа, цілодобовий догляд, контроль прийому ліків, гігієнічні процедури, дезинфекція, зміна білизни, вологе прибирання, провітрювання, прогулянки, приємне дозвілля і домашня позивна атмосфера </p></div></div><div class="col-lg-4 col-sm-6 col-md-6"><div class="single-features-box"><div class="icon"><i class="flaticon-alarm"></i></div><h3>Завжди на зв’язку</h3><p> Візити рідних в будь який день і час та можливість відеозв’язку. Ми ж на телефоні з вами 24/7/365 надаємо всю необхідну інформацію </p></div></div></div></div>',
        1
      ),
      ht = [pt];
    function mt(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", jt, ht);
    }
    var Ot = { name: "FeaturesTwo" };
    const gt = d()(Ot, [["render", mt]]);
    var ft = gt,
      At = c("980b"),
      kt = c.n(At),
      wt = { class: "invoicing-area ptb-70" },
      yt = { class: "container-fluid" },
      Bt = { class: "row align-items-center" },
      xt = { class: "col-lg-6 col-md-12" },
      Tt = { class: "invoicing-content" },
      Pt = Object(a["h"])(
        "h2",
        null,
        " Досить перейматись за близьку людину коли ви працюєте чи відпочиваєте, тепер ми візьмемо на себе цю відповідальність ",
        -1
      ),
      Ft = Object(a["h"])("div", { class: "bar" }, null, -1),
      qt = Object(a["h"])(
        "p",
        null,
        ' У сучасному ритмі, дуже важко бути завжди поруч з рідними. А особливо тоді, коли це насправді необхідно. Проте тепер, вони будуть у безпеці 24/7 в Пансіонаті "Любов" ',
        -1
      ),
      St = Object(a["j"])(" Дізнатись ціну "),
      Et = Object(a["i"])(
        '<div class="col-lg-6 col-md-12"><div class="invoicing-image"><div class="main-image"><img src="' +
          kt.a +
          '" alt="image"></div><div class="main-mobile-image"><img src="' +
          kt.a +
          '" alt="image"></div></div></div>',
        1
      );
    function Ht(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", wt, [
          Object(a["h"])("div", yt, [
            Object(a["h"])("div", Bt, [
              Object(a["h"])("div", xt, [
                Object(a["h"])("div", Tt, [
                  Pt,
                  Ft,
                  qt,
                  Object(a["k"])(
                    s,
                    { to: "/contact", class: "btn btn-primary" },
                    {
                      default: Object(a["J"])(function () {
                        return [St];
                      }),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              Et,
            ]),
          ]),
        ])
      );
    }
    var Jt = { name: "Invoicing" };
    const It = d()(Jt, [["render", Ht]]);
    var Qt = It,
      Gt = c("8708"),
      Mt = c.n(Gt),
      Rt = { class: "funfacts-area ptb-70 pt-0" },
      Ut = { class: "container" },
      Vt = Object(a["i"])(
        '<div class="section-title"><h2>Понад 5 років ми піклуємось про наших дідусів та бабусь</h2><div class="bar"></div><p> Піклування про старість для нашої команди найвищий приорітет, тому що ми всі люди у яких теж є батьки. І до наших гостей ми ставимось як до своїх рідних. </p></div><div class="row"><div class="col-lg-3 col-sm-3 col-md-3 col-6"><div class="funfact"><h3>600+</h3><p>Мешканців</p></div></div><div class="col-lg-3 col-sm-3 col-md-3 col-6"><div class="funfact"><h3>5</h3><p>Відділень</p></div></div><div class="col-lg-3 col-sm-3 col-md-3 col-6"><div class="funfact"><h3>8+</h3><p>Лікарів</p></div></div><div class="col-lg-3 col-sm-3 col-md-3 col-6"><div class="funfact"><h3>45+</h3><p>Співробітників</p></div></div></div>',
        2
      ),
      Ct = { class: "contact-cta-box" },
      Dt = Object(a["h"])("h3", null, "Залишились запитання?", -1),
      Lt = Object(a["h"])(
        "p",
        null,
        "Зв'яжіться з нами просто зараз, це безкоштовно",
        -1
      ),
      Kt = Object(a["j"])("Контакти"),
      zt = Object(a["h"])(
        "div",
        { class: "map-bg" },
        [Object(a["h"])("img", { src: Mt.a, alt: "map" })],
        -1
      );
    function Zt(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Rt, [
          Object(a["h"])("div", Ut, [
            Vt,
            Object(a["h"])("div", Ct, [
              Dt,
              Lt,
              Object(a["k"])(
                s,
                { to: "/contact", class: "btn btn-primary" },
                {
                  default: Object(a["J"])(function () {
                    return [Kt];
                  }),
                  _: 1,
                }
              ),
            ]),
            zt,
          ]),
        ])
      );
    }
    var Yt = { name: "FunFacts" };
    const Xt = d()(Yt, [["render", Zt]]);
    var Nt = Xt,
      Wt =
        (c("b0c0"),
        c("a4d3"),
        c("e01a"),
        { class: "feedback-area ptb-70 bg-f7fafd" }),
      _t = { class: "container" },
      $t = Object(a["h"])(
        "div",
        { class: "section-title" },
        [
          Object(a["h"])("h2", null, "Відгуки наших клієнтів"),
          Object(a["h"])("div", { class: "bar" }),
        ],
        -1
      ),
      ec = { class: "feedback-slides" },
      tc = { class: "single-feedback" },
      cc = { class: "client-img" },
      ac = ["src"];
    function ic(e, t, c, i, l, n) {
      var s = Object(a["B"])("slide"),
        o = Object(a["B"])("Navigation"),
        r = Object(a["B"])("carousel");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Wt, [
          Object(a["h"])("div", _t, [
            $t,
            Object(a["h"])("div", ec, [
              Object(a["k"])(
                r,
                {
                  autoplay: 5e3,
                  settings: e.settings,
                  "wrap-around": !0,
                  breakpoints: e.breakpoints,
                },
                {
                  addons: Object(a["J"])(function () {
                    return [Object(a["k"])(o)];
                  }),
                  default: Object(a["J"])(function () {
                    return [
                      (Object(a["v"])(!0),
                      Object(a["g"])(
                        a["a"],
                        null,
                        Object(a["z"])(e.carouselItems, function (e) {
                          return (
                            Object(a["v"])(),
                            Object(a["e"])(
                              s,
                              { key: e.id },
                              {
                                default: Object(a["J"])(function () {
                                  return [
                                    Object(a["h"])("div", tc, [
                                      Object(a["h"])("div", cc, [
                                        Object(a["h"])(
                                          "img",
                                          { src: e.image, alt: "image" },
                                          null,
                                          8,
                                          ac
                                        ),
                                      ]),
                                      Object(a["h"])(
                                        "h3",
                                        null,
                                        Object(a["D"])(e.name),
                                        1
                                      ),
                                      Object(a["h"])(
                                        "span",
                                        null,
                                        Object(a["D"])(e.position),
                                        1
                                      ),
                                      Object(a["h"])(
                                        "p",
                                        null,
                                        Object(a["D"])(e.description),
                                        1
                                      ),
                                    ]),
                                  ];
                                }),
                                _: 2,
                              },
                              1024
                            )
                          );
                        }),
                        128
                      )),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["settings", "breakpoints"]
              ),
            ]),
          ]),
        ])
      );
    }
    var lc = c("0b81"),
      nc =
        (c("4001"),
        Object(a["l"])({
          name: "ManagePortfolio",
          components: {
            Carousel: lc["a"],
            Slide: lc["c"],
            Navigation: lc["b"],
          },
          data: function () {
            return {
              carouselItems: [
                {
                  id: 1,
                  image: c("97f7"),
                  name: "Валентина Григорівна, 80 років",
                  position: "Мешкає в пансіонаті більше 12 міс.",
                  description:
                    "Від щирого серця дякую вашому колективу за медичний догляд і турботу!",
                },
                {
                  id: 2,
                  image: c("23f3"),
                  name: "Олена Миколаївна",
                  position: "Її бабуся мешкає в пансіонаті більше 8 міс.",
                  description:
                    "Я знаю, що з першого дня, моя бабуся в надійних руках професіоналів. Дякую за допомогу!",
                },
                {
                  id: 3,
                  image: c("464a"),
                  name: "Анастасія Сергієвна, 72 роки",
                  position: "Мешкає в пансіонаті більше 4 міс.",
                  description:
                    "Дякую за теплий прийом та доброзичливу атмосферу в пансіонаті",
                },
              ],
              settings: { itemsToShow: 1, snapAlign: "center" },
            };
          },
        }));
    const sc = d()(nc, [["render", ic]]);
    var oc = sc,
      rc = { class: "ready-to-talk" },
      bc = { class: "container" },
      dc = { class: "ready-to-talk-content" },
      uc = Object(a["h"])(
        "h3",
        null,
        "Дізнайтесь тут, що потрібно саме вам",
        -1
      ),
      vc = Object(a["h"])(
        "p",
        null,
        "Безкоштовна консультація по телефону",
        -1
      ),
      jc = Object(a["j"])(" Контакти "),
      pc = Object(a["j"])(" Відправте заявку, ми вам передзвонимо ");
    function hc(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", rc, [
          Object(a["h"])("div", bc, [
            Object(a["h"])("div", dc, [
              uc,
              vc,
              Object(a["k"])(
                s,
                { to: "/contact", class: "btn btn-primary" },
                {
                  default: Object(a["J"])(function () {
                    return [jc];
                  }),
                  _: 1,
                }
              ),
              Object(a["h"])("span", null, [
                Object(a["k"])(
                  s,
                  { to: "/contact" },
                  {
                    default: Object(a["J"])(function () {
                      return [pc];
                    }),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    var mc = { name: "ReadyToTalk" };
    const Oc = d()(mc, [["render", hc]]);
    var gc = Oc,
      fc = c("3da1"),
      Ac = c.n(fc),
      kc = c("d6a0"),
      wc = c.n(kc),
      yc = c("a26f"),
      Bc = c.n(yc),
      xc = { class: "partner-area" },
      Tc = Object(a["i"])(
        '<div class="container"><h3>Ми працюємо пліч о пліч з найкращими медичними організаціями!</h3><div class="partner-inner"><div class="row align-items-center"><div class="col-lg-2 col-sm-4 col-md-3 col-6"><div class="partner-image"><img src="' +
          Ac.a +
          '" alt="partner"><img src="' +
          Ac.a +
          '" alt="partner"></div></div><div class="col-lg-2 col-sm-4 col-md-3 col-6"><div class="partner-image"><img src="' +
          wc.a +
          '" alt="partner"><img src="' +
          wc.a +
          '" alt="partner"></div></div><div class="col-lg-2 col-sm-4 col-md-3 col-6"><div class="partner-image"><img src="' +
          Bc.a +
          '" alt="partner"><img src="' +
          Bc.a +
          '" alt="partner"></div></div></div></div></div>',
        1
      ),
      Pc = [Tc];
    function Fc(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", xc, Pc);
    }
    var qc = { name: "Partner" };
    const Sc = d()(qc, [["render", Fc]]);
    var Ec = Sc,
      Hc = { class: "account-create-area" },
      Jc = { class: "container" },
      Ic = { class: "account-create-content" },
      Qc = Object(a["h"])("h2", null, "Відповіді на часті запитання", -1),
      Gc = Object(a["h"])("p", null, "Може серед них буде і ваше?", -1),
      Mc = Object(a["j"])(" Переглянути ");
    function Rc(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Hc, [
          Object(a["h"])("div", Jc, [
            Object(a["h"])("div", Ic, [
              Qc,
              Gc,
              Object(a["k"])(
                s,
                { to: "/faq", class: "btn btn-primary" },
                {
                  default: Object(a["J"])(function () {
                    return [Mc];
                  }),
                  _: 1,
                }
              ),
            ]),
          ]),
        ])
      );
    }
    var Uc = { name: "AccountCreate" };
    const Vc = d()(Uc, [["render", Rc]]);
    var Cc = Vc,
      Dc = { class: "footer-area" },
      Lc = { class: "container" },
      Kc = { class: "row" },
      zc = { class: "col-lg-3 col-sm-6 col-md-6" },
      Zc = { class: "single-footer-widget" },
      Yc = { class: "logo" },
      Xc = Object(a["h"])("img", { src: k.a, alt: "logo" }, null, -1),
      Nc = Object(a["h"])(
        "p",
        null,
        " Завдяки нашому професіоналізму та бездоганній репутації ми щодня надаємо допомогу людям похилого віку та піклуємося про ваших близьких. Вибираючи нас, ви можете бути впевнені в якісному догляді за своїми родичами. ",
        -1
      ),
      Wc = { class: "col-lg-3 col-sm-6 col-md-6" },
      _c = { class: "single-footer-widget pl-5" },
      $c = Object(a["h"])("h3", null, "Посилання", -1),
      ea = { class: "list" },
      ta = Object(a["j"])("Про пансіонат"),
      ca = Object(a["j"])("Послуги"),
      aa = Object(a["j"])("Блог"),
      ia = { class: "col-lg-3 col-sm-6 col-md-6" },
      la = { class: "single-footer-widget" },
      na = Object(a["h"])("h3", null, "Допомога", -1),
      sa = { class: "list" },
      oa = Object(a["j"])("Відповіді на постійні запитання"),
      ra = Object(a["j"])("Контакти"),
      ba = Object(a["i"])(
        '<div class="col-lg-3 col-sm-6 col-md-6"><div class="single-footer-widget"><h3>Контактна інформація</h3><ul class="footer-contact-info"><li><span>Адреса: </span><a href="https://goo.gl/maps/eBvR4PdtvYRyFZKAA" target="_blank">Бровари, вулиця Пантелеймона Куліша</a></li><li><span>Адреса: </span><a href="https://goo.gl/maps/7tW93yVqAdm1qqkLA" target="_blank">Бровари, вул. Чубинского 38</a></li><li><span>Адреса: </span><a href="https://goo.gl/maps/UG7rvaiXbMPxbdag9" target="_blank">Ворзель, вул. Тюльпанова 12</a></li><li><span>Адреса: </span><a href="https://goo.gl/maps/c4gf45ZPtE1VGo8VA" target="_blank">Зазим&#39;є, вул. Широка 94</a></li><li><span>Адреса: </span><a href="https://goo.gl/maps/hjxGMdvEsRdHmTru6" target="_blank">Літки, провулок Мельника, 8</a></li><li><span>Email: </span><a href="lovedp.kiev.ua@gmail.com">lovedp.kiev.ua@gmail.com</a></li><li><span>Телефон: </span><a href="tel:+380443440444"> +38 (044) 344-04-44</a></li></ul></div></div>',
        1
      ),
      da = { class: "copyright-area" },
      ua = Object(a["h"])(
        "a",
        { href: "tel:+380931199218", target: "_blank" },
        "Гаркуша Артур",
        -1
      ),
      va = Object(a["h"])(
        "div",
        { class: "map-image" },
        [Object(a["h"])("img", { src: Mt.a, alt: "map" })],
        -1
      ),
      ja = Object(a["h"])("i", { class: "fas fa-arrow-up" }, null, -1),
      pa = [ja];
    function ha(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["h"])("footer", Dc, [
            Object(a["h"])("div", Lc, [
              Object(a["h"])("div", Kc, [
                Object(a["h"])("div", zc, [
                  Object(a["h"])("div", Zc, [
                    Object(a["h"])("div", Yc, [
                      Object(a["k"])(
                        s,
                        { to: "/" },
                        {
                          default: Object(a["J"])(function () {
                            return [Xc];
                          }),
                          _: 1,
                        }
                      ),
                      Nc,
                    ]),
                  ]),
                ]),
                Object(a["h"])("div", Wc, [
                  Object(a["h"])("div", _c, [
                    $c,
                    Object(a["h"])("ul", ea, [
                      Object(a["h"])("li", null, [
                        Object(a["k"])(
                          s,
                          { to: "/about-us" },
                          {
                            default: Object(a["J"])(function () {
                              return [ta];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(a["h"])("li", null, [
                        Object(a["k"])(
                          s,
                          { to: "/features-1" },
                          {
                            default: Object(a["J"])(function () {
                              return [ca];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(a["h"])("li", null, [
                        Object(a["k"])(
                          s,
                          { to: "/blog" },
                          {
                            default: Object(a["J"])(function () {
                              return [aa];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                Object(a["h"])("div", ia, [
                  Object(a["h"])("div", la, [
                    na,
                    Object(a["h"])("ul", sa, [
                      Object(a["h"])("li", null, [
                        Object(a["k"])(
                          s,
                          { to: "/faq" },
                          {
                            default: Object(a["J"])(function () {
                              return [oa];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                      Object(a["h"])("li", null, [
                        Object(a["k"])(
                          s,
                          { to: "/contact" },
                          {
                            default: Object(a["J"])(function () {
                              return [ra];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                ba,
              ]),
              Object(a["h"])("div", da, [
                Object(a["h"])("p", null, [
                  Object(a["j"])(
                    " © " +
                      Object(a["D"])(l.currentYear) +
                      " Усі права захищені. Розробник ",
                    1
                  ),
                  ua,
                ]),
              ]),
            ]),
            va,
          ]),
          Object(a["h"])(
            "div",
            {
              onClick:
                t[0] ||
                (t[0] = function (e) {
                  return n.scrollToTop();
                }),
              class: Object(a["q"])(["back-to-top-btn", { "go-top": l.isTop }]),
            },
            pa,
            2
          ),
        ])
      );
    }
    var ma = {
      name: "Footer",
      data: function () {
        return { isTop: !1, currentYear: new Date().getFullYear() };
      },
      methods: {
        scrollToTop: function () {
          window.scrollTo(0, 0);
        },
      },
      mounted: function () {
        var e = this;
        window.addEventListener("scroll", function () {
          var t = window.scrollY;
          e.isTop = t >= 100;
        });
      },
    };
    const Oa = d()(ma, [["render", ha]]);
    var ga = Oa,
      fa = {
        name: "HomeDemoOne",
        components: {
          Navbar: X,
          MainBanner: oe,
          Featured: Ue,
          Services: Xe,
          ServicesTwo: it,
          ServicesThree: vt,
          FeaturesTwo: ft,
          Invoicing: Qt,
          FunFacts: Nt,
          Feedback: oc,
          ReadyToTalk: gc,
          Partner: Ec,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const Aa = d()(fa, [["render", O]]);
    var ka = Aa;
    function wa(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("About"),
        b = Object(a["B"])("Team"),
        d = Object(a["B"])("ReadyToTalk"),
        u = Object(a["B"])("Partner"),
        v = Object(a["B"])("AccountCreate"),
        j = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
          Object(a["k"])(u),
          Object(a["k"])(v),
          Object(a["k"])(j),
        ])
      );
    }
    var ya = { class: "page-title-area item-bg2" },
      Ba = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Про пансіонат"),
            Object(a["h"])("p", null, "Важлива інформація"),
          ]),
        ],
        -1
      ),
      xa = [Ba];
    function Ta(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", ya, xa);
    }
    var Pa = { name: "PageTitle" };
    const Fa = d()(Pa, [["render", Ta]]);
    var qa = Fa,
      Sa = c("df9d"),
      Ea = c.n(Sa),
      Ha = Object(a["i"])(
        '<div class="about-area ptb-70"><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-md-12"><div class="about-content"><span>Корисна інформація</span><h2>Коротко про Пансіонат</h2><p> Дім пристарілих &quot;Любов&quot; - це мережа пансіонатів в Києві та області. Ми займаємося доглядом за людьми похилого віку, а також инвалідами чи післяопераційними клієнтами. Авжеж, завдяки висококваліфікованому персоналу у сфері медицини. Будинки спеціально облаштовані для комфортного проживання, а також мають великі майданчики для прогулянок на подвір&#39;ї. Наші клієнти завжди знаходяться під контролем санітарів, сиділок, медсестер, психологу та адміністратору будику. </p><p> Завдяки більш ніж 5-ти річному досвіду роботи у сфері догляду за близькими - в компетенції нашого сервісу, перейматись не потрібно. Працюючи у правовому полі, ми гарантуємо безпеку та повний спектр послуг, який потрібен саме вашій родині. Ми, як ніхто інший, розуміємося в індивідуальному підході до наших мешканців - як с точки зору фізичних вад, а також психологічного здоров&#39;я. </p></div></div><div class="col-lg-6 col-md-12"><div class="about-image"><img src="' +
          Ea.a +
          '" alt="image"></div></div></div></div></div>',
        1
      ),
      Ja = { key: 0, class: "popup-video" },
      Ia = { class: "d-table" },
      Qa = { class: "d-table-cell" },
      Ga = Object(a["h"])(
        "div",
        { class: "popup-overlay-close-line" },
        null,
        -1
      ),
      Ma = Object(a["h"])(
        "div",
        { class: "popup-overlay-close-line" },
        null,
        -1
      ),
      Ra = [Ga, Ma],
      Ua = Object(a["h"])(
        "div",
        { class: "play-video" },
        [
          Object(a["h"])("iframe", {
            src: "https://www.youtube.com/embed/bk7McNUjWgw",
          }),
        ],
        -1
      );
    function Va(e, t, c, i, l, n) {
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Ha,
          l.isPopup
            ? (Object(a["v"])(),
              Object(a["g"])("div", Ja, [
                Object(a["h"])("div", Ia, [
                  Object(a["h"])("div", Qa, [
                    Object(a["h"])(
                      "div",
                      {
                        class: "popup-overlay-close",
                        onClick:
                          t[0] ||
                          (t[0] = function (e) {
                            return n.isPopupMethod(l.isPopup);
                          }),
                      },
                      Ra
                    ),
                    Ua,
                  ]),
                ]),
              ]))
            : Object(a["f"])("", !0),
        ])
      );
    }
    var Ca = {
      name: "About",
      data: function () {
        return { isPopup: !1 };
      },
      methods: {
        isPopupMethod: function (e) {
          return (this.isPopup = !e);
        },
      },
    };
    const Da = d()(Ca, [["render", Va]]);
    var La = Da,
      Ka = c("d16c"),
      za = c.n(Ka),
      Za = c("9740"),
      Ya = c.n(Za),
      Xa = c("f3a4"),
      Na = c.n(Xa),
      Wa = c("53c3"),
      _a = c.n(Wa),
      $a = c("8a1d"),
      ei = c.n($a),
      ti = { class: "team-area ptb-70 bg-f7fafd" },
      ci = Object(a["i"])(
        '<div class="container"><div class="section-title"><h2>Перелік будинків</h2><div class="bar"></div><p> Ви можете знайти всю необхідну інформацію натиснувши на зображення </p></div><div class="row"><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          za.a +
          '" alt="image"><ul class="social"><li><a href="https://goo.gl/maps/ULsrXzQem2tdbcm78" target="_blank" class="btn btn-primary">Повна інформація</a></li></ul></div><div class="member-content"><h3>Ворзель</h3><span>Пансіонат</span><p> Ворзель це чудове курортне містечко поруч із Києвом. Наш будинок для літніх людей у Ворзелі огорне ваших рідних теплом, турботою і свіжим цілющим повітрям. Сучасний будинок у санаторно-курортній зоні з великою зеленою територією та відпочинковою зоною. Затишні кімнати з усім необхідним для максимального комфорту. Також є домашні улюбленці для гарного настрою. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          Ya.a +
          '" alt="image"><ul class="social"><li><a href="https://goo.gl/maps/c4gf45ZPtE1VGo8VA" target="_blank" class="btn btn-primary">Повна інформація</a></li></ul></div><div class="member-content"><h3>Зазим&#39;є</h3><span>Пансіонат</span><p> Пансіонат для людей похилого віку в Зазим&#39;ї працює вже кілька років. Згуртований колектив та відмінні умови для життя чекає на нових постояльців нашого будинку для людей похилого віку. Прекрасний будинок з камінною кімнатою, зеленою територією та альтанками для відпочинку. Кімнати, уважний досвідчений персонал та домашня атмосфера. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          Na.a +
          '" alt="image"><ul class="social"><li><a href="https://goo.gl/maps/hjxGMdvEsRdHmTru6" target="_blank" class="btn btn-primary">Повна інформація</a></li></ul></div><div class="member-content"><h3>Літки</h3><span>Пансіонат</span><p> Влітку 2022 року ми відкрили велике відділення будинку для людей похилого віку &quot;ЛЮБОВ&quot; у Літках, біля Києва. У відділенні зроблено ремонт, все обладнано для життя наших бабусь та дідусів. Це не просто будинок для людей похилого віку, це цілий сучасний медичний комплекс з лікарями на постійній основі, стаціонаром та маніпуляційним кабінетом. Крім того, велика зелена зона з альтанками та котиками подарують чудовий настрій нашим гостям. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          _a.a +
          '" alt="image"><ul class="social"><li><a href="https://goo.gl/maps/eBvR4PdtvYRyFZKAA" target="_blank" class="btn btn-primary">Повна інформація</a></li></ul></div><div class="member-content"><h3>Бровари 1</h3><span>Пансіонат</span><p> Будинок для людей похилого віку в Броварах знаходиться в хорошому районі і оснащений усім необхідним для догляду за літніми людьми. Співробітники центру чекають на вас у гості у будь-який час. Будинок має дуже зручне розташування у центрі міста. Але при цьому чудова зелена зона навколо та домашні улюбленці для дозвілля гостей. Кожна кімната світла та приємна з функціональними меблями та всім необхідним для життя наших мешканців. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          ei.a +
          '" alt="image"><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/10.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/11.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/12.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/13.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/14.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/15.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/16.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/17.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/18.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/19.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/2.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/20.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/3.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/4.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/5.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/6.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/7.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/8.webp"></a><a data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/9.webp"></a><ul class="social"><li><a class="btn btn-primary" title="Борщагівка" data-fancybox="gallery" href="https://love-dp.com.ua/images/gallery/borschagovka/1.webp">Галерея</a></li><li><a href="https://goo.gl/maps/wgZ5tD7eosfoVLES6" target="_blank" class="btn btn-primary">Карта</a></li></ul></div><div class="member-content"><h3>Петропавлівська Борщагівка</h3><span>Пансіонат</span><p> Нещодавно ми відкрили в Петропавлівській Борщагівці відділення будинку для людей похилого віку, обладнали його всім необхідним і підібрали відмінну команду співробітників, щоб забезпечити найкращий догляд нашим бабусям та дідусям. Будинок має дуже зручне розташування у центрі міста. Але при цьому чудова зелена зона навколо та домашні улюбленці для дозвілля гостей. Кожна кімната світла та приємна з функціональними меблями та всім необхідним для життя наших мешканців. </p></div></div></div></div></div>',
        1
      ),
      ai = [ci];
    function ii(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", ti, ai);
    }
    var li = { name: "Team" };
    const ni = d()(li, [["render", ii]]);
    var si = ni,
      oi = {
        name: "AboutUs",
        components: {
          Navbar: X,
          PageTitle: qa,
          About: La,
          Team: si,
          ReadyToTalk: gc,
          Partner: Ec,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const ri = d()(oi, [["render", wa]]);
    var bi = ri;
    function di(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("VideoTitle"),
        b = Object(a["B"])("Services"),
        d = Object(a["B"])("ServicesTwo"),
        u = Object(a["B"])("ServicesThree"),
        v = Object(a["B"])("ReadyToTalk"),
        j = Object(a["B"])("Partner"),
        p = Object(a["B"])("AccountCreate"),
        h = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
          Object(a["k"])(u),
          Object(a["k"])(v),
          Object(a["k"])(j),
          Object(a["k"])(p),
          Object(a["k"])(h),
        ])
      );
    }
    var ui = { class: "page-title-area item-bg2" },
      vi = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Послуги"),
            Object(a["h"])("p", null, "Все що потрібно знати"),
          ]),
        ],
        -1
      ),
      ji = [vi];
    function pi(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", ui, ji);
    }
    var hi = { name: "PageTitle" };
    const mi = d()(hi, [["render", pi]]);
    var Oi = mi,
      gi = c("b874"),
      fi = c.n(gi),
      Ai = { class: "about-area ptb-70" },
      ki = { class: "container" },
      wi = { class: "row align-items-center" },
      yi = Object(a["h"])(
        "div",
        { class: "col-lg-6 col-md-12" },
        [
          Object(a["h"])("div", { class: "about-content" }, [
            Object(a["h"])("h2", null, "Реабілітація"),
          ]),
        ],
        -1
      ),
      Bi = { class: "col-lg-6 col-md-12" },
      xi = { class: "about-image" },
      Ti = Object(a["h"])("img", { src: fi.a, alt: "image" }, null, -1),
      Pi = Object(a["h"])("i", { class: "fas fa-play" }, null, -1),
      Fi = [Pi],
      qi = { key: 0, class: "popup-video" },
      Si = { class: "d-table" },
      Ei = { class: "d-table-cell" },
      Hi = Object(a["h"])(
        "div",
        { class: "popup-overlay-close-line" },
        null,
        -1
      ),
      Ji = Object(a["h"])(
        "div",
        { class: "popup-overlay-close-line" },
        null,
        -1
      ),
      Ii = [Hi, Ji],
      Qi = Object(a["h"])(
        "div",
        { class: "play-video" },
        [
          Object(a["h"])("iframe", {
            src: "https://www.youtube.com/embed/kIybwc9frBw",
          }),
        ],
        -1
      );
    function Gi(e, t, c, i, l, n) {
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["h"])("div", Ai, [
            Object(a["h"])("div", ki, [
              Object(a["h"])("div", wi, [
                yi,
                Object(a["h"])("div", Bi, [
                  Object(a["h"])("div", xi, [
                    Ti,
                    Object(a["h"])(
                      "div",
                      {
                        class: "video-btn popup-youtube",
                        onClick:
                          t[0] ||
                          (t[0] = function (e) {
                            return n.isPopupMethod(l.isPopup);
                          }),
                        style: { cursor: "pointer" },
                      },
                      Fi
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          l.isPopup
            ? (Object(a["v"])(),
              Object(a["g"])("div", qi, [
                Object(a["h"])("div", Si, [
                  Object(a["h"])("div", Ei, [
                    Object(a["h"])(
                      "div",
                      {
                        class: "popup-overlay-close",
                        onClick:
                          t[1] ||
                          (t[1] = function (e) {
                            return n.isPopupMethod(l.isPopup);
                          }),
                      },
                      Ii
                    ),
                    Qi,
                  ]),
                ]),
              ]))
            : Object(a["f"])("", !0),
        ])
      );
    }
    var Mi = {
      name: "VideoTitle",
      data: function () {
        return { isPopup: !1 };
      },
      methods: {
        isPopupMethod: function (e) {
          return (this.isPopup = !e);
        },
      },
    };
    const Ri = d()(Mi, [["render", Gi]]);
    var Ui = Ri,
      Vi = {
        name: "FeaturesOne",
        components: {
          Navbar: X,
          PageTitle: Oi,
          VideoTitle: Ui,
          Services: Xe,
          ServicesTwo: it,
          ServicesThree: vt,
          ReadyToTalk: gc,
          Partner: Ec,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const Ci = d()(Vi, [["render", di]]);
    var Di = Ci;
    function Li(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("TeamArea"),
        b = Object(a["B"])("AccountCreate"),
        d = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
        ])
      );
    }
    var Ki = { class: "page-title-area item-bg2" },
      zi = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Персонал"),
            Object(a["h"])("p", null, "Наші спеціалісти"),
          ]),
        ],
        -1
      ),
      Zi = [zi];
    function Yi(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", Ki, Zi);
    }
    var Xi = { name: "PageTitle" };
    const Ni = d()(Xi, [["render", Yi]]);
    var Wi = Ni,
      _i = c("27fd"),
      $i = c.n(_i),
      el = c("94cf"),
      tl = c.n(el),
      cl = c("5680"),
      al = c.n(cl),
      il = c("51c1"),
      ll = c.n(il),
      nl = { class: "team-area ptb-70 bg-f7fafd" },
      sl = Object(a["i"])(
        '<div class="container"><div class="section-title"><h2>Висококваліфокована команда</h2><div class="bar"></div><p> В наших будинка ще дуже багато персоналу, які не представлені нижче. Але вони також мають вищу освіту </p></div><div class="row"><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          $i.a +
          '" alt="image"><ul class="social"><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li></ul></div><div class="member-content"><h3>Писарчук Юрій Володимирович</h3><span>Гериатр</span><p> Лікар-геріатр надає медичну (терапевтичну) допомогу літнім та старим людям. Його мета – допомогти старіючій людині якомога довше зберегти незалежний спосіб життя. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          tl.a +
          '" alt="image"><ul class="social"><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li></ul></div><div class="member-content"><h3>Меримерина Вікторія Йосифівна</h3><span>Психотерапевт, психіатр</span><p> Допомога лікаря психіатра може знадобитися в різних ситуаціях. Подолати депресивні стани, тривожні розлади, проблеми з ідентифікацією особистості та ін. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          al.a +
          '" alt="image"><ul class="social"><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li></ul></div><div class="member-content"><h3>Михальчук Світлана Сергієвна</h3><span>Психолог, Арт терапевт</span><p> Арт терапія вкрай важлива в будинках для людей похилого віку, тому що люди похилого віку гостро відчувають потребу в спілкуванні, їм життєво необхідно «заняття по душі», щоб заповнити «порожнечу», що утворилася, — вільний час, який раніше вони витрачали на сім&#39;ю і роботу. </p></div></div></div><div class="col-lg-6 col-md-6"><div class="single-team-member"><div class="member-image"><img src="' +
          ll.a +
          '" alt="image"><ul class="social"><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li></ul></div><div class="member-content"><h3>Вишку Георгій Михайлович</h3><span>Реабілітолог, масажист вищої категорії, викладач лікувального масажу</span><p> Учень та послідовник академіка В. Н. Набойченко, володіє західними та східними техніками мануальної терапії. </p></div></div></div></div></div>',
        1
      ),
      ol = [sl];
    function rl(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", nl, ol);
    }
    var bl = { name: "TeamArea" };
    const dl = d()(bl, [["render", rl]]);
    var ul = dl,
      vl = {
        name: "Team",
        components: {
          Navbar: X,
          PageTitle: Wi,
          TeamArea: ul,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const jl = d()(vl, [["render", Li]]);
    var pl = jl;
    function hl(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("PricingArea"),
        b = Object(a["B"])("AccountCreate"),
        d = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
        ])
      );
    }
    var ml = { class: "page-title-area item-bg1" },
      Ol = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Transparent Pricing"),
            Object(a["h"])("p", null, "Borderless account pricing"),
          ]),
        ],
        -1
      ),
      gl = [Ol];
    function fl(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", ml, gl);
    }
    var Al = { name: "PageTitle" };
    const kl = d()(Al, [["render", fl]]);
    var wl = kl,
      yl = { class: "pricing-area ptb-70" },
      Bl = { class: "container" },
      xl = { class: "row" },
      Tl = { class: "col-lg-4 col-md-6 col-sm-6" },
      Pl = { class: "single-pricing-box" },
      Fl = Object(a["h"])(
        "div",
        { class: "pricing-header" },
        [
          Object(a["h"])("h3", null, "Basic"),
          Object(a["h"])("p", null, "Get your business up and running"),
        ],
        -1
      ),
      ql = Object(a["h"])(
        "div",
        { class: "price" },
        [Object(a["j"])("$0 "), Object(a["h"])("span", null, "/m")],
        -1
      ),
      Sl = { class: "buy-btn" },
      El = Object(a["j"])(" Choose this plan "),
      Hl = Object(a["i"])(
        '<ul class="pricing-features"><li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li><li><i class="fas fa-check"></i> 5 dplove Users</li><li><i class="fas fa-check"></i> 2 Business Mastercards</li><li><i class="fas fa-check"></i> Premium Support</li><li><i class="fas fa-check"></i> International payments</li><li><i class="fas fa-check"></i> Accounting integrations</li></ul>',
        1
      ),
      Jl = { class: "col-lg-4 col-md-6 col-sm-6" },
      Il = { class: "single-pricing-box" },
      Ql = Object(a["h"])(
        "div",
        { class: "pricing-header" },
        [
          Object(a["h"])("h3", null, "Advanced"),
          Object(a["h"])("p", null, "Get your business up and running"),
        ],
        -1
      ),
      Gl = Object(a["h"])(
        "div",
        { class: "price" },
        [Object(a["j"])("$12 "), Object(a["h"])("span", null, "/m")],
        -1
      ),
      Ml = { class: "buy-btn" },
      Rl = Object(a["j"])(" Choose this plan "),
      Ul = Object(a["i"])(
        '<ul class="pricing-features"><li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li><li><i class="fas fa-check"></i> 5 dplove Users</li><li><i class="fas fa-check"></i> 2 Business Mastercards</li><li><i class="fas fa-check"></i> Premium Support</li><li><i class="fas fa-check"></i> International payments</li><li><i class="fas fa-check"></i> Accounting integrations</li></ul>',
        1
      ),
      Vl = {
        class: "col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3",
      },
      Cl = { class: "single-pricing-box" },
      Dl = Object(a["h"])(
        "div",
        { class: "pricing-header" },
        [
          Object(a["h"])("h3", null, "Premium"),
          Object(a["h"])("p", null, "Get your business up and running"),
        ],
        -1
      ),
      Ll = Object(a["h"])(
        "div",
        { class: "price" },
        [Object(a["j"])("$24 "), Object(a["h"])("span", null, "/m")],
        -1
      ),
      Kl = { class: "buy-btn" },
      zl = Object(a["j"])(" Choose this plan "),
      Zl = Object(a["i"])(
        '<ul class="pricing-features"><li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li><li><i class="fas fa-check"></i> 5 dplove Users</li><li><i class="fas fa-check"></i> 2 Business Mastercards</li><li><i class="fas fa-check"></i> Premium Support</li><li><i class="fas fa-check"></i> International payments</li><li><i class="fas fa-check"></i> Accounting integrations</li></ul>',
        1
      );
    function Yl(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", yl, [
          Object(a["h"])("div", Bl, [
            Object(a["h"])("div", xl, [
              Object(a["h"])("div", Tl, [
                Object(a["h"])("div", Pl, [
                  Fl,
                  ql,
                  Object(a["h"])("div", Sl, [
                    Object(a["k"])(
                      s,
                      { to: "/register", class: "btn btn-primary" },
                      {
                        default: Object(a["J"])(function () {
                          return [El];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Hl,
                ]),
              ]),
              Object(a["h"])("div", Jl, [
                Object(a["h"])("div", Il, [
                  Ql,
                  Gl,
                  Object(a["h"])("div", Ml, [
                    Object(a["k"])(
                      s,
                      { to: "/register", class: "btn btn-primary" },
                      {
                        default: Object(a["J"])(function () {
                          return [Rl];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Ul,
                ]),
              ]),
              Object(a["h"])("div", Vl, [
                Object(a["h"])("div", Cl, [
                  Dl,
                  Ll,
                  Object(a["h"])("div", Kl, [
                    Object(a["k"])(
                      s,
                      { to: "/register", class: "btn btn-primary" },
                      {
                        default: Object(a["J"])(function () {
                          return [zl];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                  Zl,
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var Xl = { name: "PricingArea" };
    const Nl = d()(Xl, [["render", Yl]]);
    var Wl = Nl,
      _l = {
        name: "Pricing",
        components: {
          Navbar: X,
          PageTitle: wl,
          PricingArea: Wl,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const $l = d()(_l, [["render", hl]]);
    var en = $l;
    function tn(e, t, c, i, l, n) {
      var s = Object(a["B"])("ErrorArea");
      return Object(a["v"])(), Object(a["g"])("div", null, [Object(a["k"])(s)]);
    }
    var cn = c("3dfc"),
      an = c.n(cn),
      ln = { class: "error-area" },
      nn = { class: "d-table" },
      sn = { class: "d-table-cell" },
      on = { class: "container" },
      rn = { class: "error-content" },
      bn = Object(a["h"])("img", { src: an.a, alt: "error" }, null, -1),
      dn = Object(a["h"])("h3", null, "Page Not Found", -1),
      un = Object(a["h"])(
        "p",
        null,
        "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
        -1
      ),
      vn = Object(a["j"])("Go to Home");
    function jn(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", ln, [
          Object(a["h"])("div", nn, [
            Object(a["h"])("div", sn, [
              Object(a["h"])("div", on, [
                Object(a["h"])("div", rn, [
                  bn,
                  dn,
                  un,
                  Object(a["k"])(
                    s,
                    { to: "/", class: "btn btn-primary" },
                    {
                      default: Object(a["J"])(function () {
                        return [vn];
                      }),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var pn = { name: "ErrorArea" };
    const hn = d()(pn, [["render", jn]]);
    var mn = hn,
      On = { name: "Error", components: { ErrorArea: mn } };
    const gn = d()(On, [["render", tn]]);
    var fn = gn;
    function An(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("FaqArea"),
        b = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
        ])
      );
    }
    var kn = { class: "page-title-area item-bg1" },
      wn = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Відповіді на постійні запитання"),
            Object(a["h"])("p", null, "Можливо вам буде цікаво дізнатись"),
          ]),
        ],
        -1
      ),
      yn = [wn];
    function Bn(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", kn, yn);
    }
    var xn = { name: "PageTitle" };
    const Tn = d()(xn, [["render", Bn]]);
    var Pn = Tn,
      Fn = c("8760"),
      qn = c.n(Fn),
      Sn = { class: "faq-area ptb-70" },
      En = { class: "container" },
      Hn = { class: "row align-items-center" },
      Jn = Object(a["i"])(
        '<div class="col-lg-5 col-md-12"><div class="faq-content"><h2>Відповіді на постійні запитання</h2><div class="bar"></div><p>Тут ви можете знайти теми, які вас зацікавлять</p><div class="faq-image"><img src="' +
          qn.a +
          '" alt="image"></div></div></div>',
        1
      ),
      In = { class: "col-lg-7 col-md-12" },
      Qn = { class: "faq-accordion" },
      Gn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Що робити, якщо літня людина відмовляється переїхати до пансіонату? ",
        -1
      ),
      Mn = Object(a["h"])(
        "p",
        null,
        " Нерідко у людей похилого віку всілякі переїзди та зміна обстановки викликають почуття самотності та депресії, і вони починають звинувачувати близьких у спробах позбутися їх та небажанні доглядати за родичем. Наші психологи допоможуть вам і допоможуть делікатно і етично пояснити вашим близьким переваги проживання в будинку для літніх людей. Ще ми пропонуємо покращити самопочуття ваших близьких при проживанні у санаторії з лікувально-оздоровчою програмою. Там літня людина пройде всебічне медичне обстеження та отримає професійну допомогу лікарів та реабілітологів, а також зможе насолодитися відпочинком та захоплюючим дозвіллям у комфортних умовах приватного пансіонату-санаторію для літніх людей, який знаходиться в екологічно чистому районі. ",
        -1
      ),
      Rn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Які документи потрібні для того, щоби жити в пансіонаті? ",
        -1
      ),
      Un = Object(a["h"])(
        "p",
        null,
        " Після консультації зі співробітниками пансіонату ми складемо для вас список необхідних документів для укладання договору та термінів проживання в будинку для літніх людей. Вам потрібно надати копію паспорта опікуна та літнього родича, які укладають договір про добровільне бажання проживати у хоспісі. Крім того, знадобиться довідка від лікаря з переліком захворювань та інформацією про стан здоров'я літньої людини, про необхідну медичну допомогу, реабілітацію, прийом ліків, а також список аналізів – це допоможе скласти індивідуальний план проживання в пансіонаті та перелік лікувально-оздоровчих заходів для контролю за станом здоров'я та лікування захворювань. ",
        -1
      ),
      Vn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Як часто можна відвідувати родича? ",
        -1
      ),
      Cn = Object(a["h"])(
        "p",
        null,
        " Ви маєте повне право відвідувати близьку людину у будь-який час доби. Ми працюємо без свят та вихідних, наші двері завжди відчинені для гостей. Ми працюємо відкрито і прозоро, ви можете приїхати будь-якої миті і переконатися в тому, що вашому родичу надають належну медичну допомогу, турботу та кохання. Ми вітаємо відвідування та спільний час проведення членів сім'ї з людиною похилого віку, тому що це сприяє позитивному настрою у постояльців. ",
        -1
      ),
      Dn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Як можна підтримувати зв'язок із родичем? ",
        -1
      ),
      Ln = Object(a["h"])(
        "p",
        null,
        " Сучасні технології дозволяють не просто розмовляти телефоном або спілкуватися за допомогою повідомлень, а й розмовляти по відео зв'язку. Ви можете використовувати Viber, Telegram, Skype та інші технології, щоб залишатися на зв'язку з близькою людиною. Ми не обмежуємо постояльців та членів їхньої родини у спілкуванні. Навпаки, сприяємо регулярному спілкуванню та взаємодії із родичами. ",
        -1
      ),
      Kn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Що буде, якщо стан родича зміниться? ",
        -1
      ),
      zn = Object(a["h"])(
        "p",
        null,
        " Ми регулярно інформуємо близьких про будь-які зміни у стані здоров'я літньої людини, як на кращий, так і на гірший бік. Ми ведемо ретельний моніторинг та контроль змін. У більшості випадків – це зміни на краще, завдяки професіоналізму лікарів та реабілітологів. Але якщо стан погіршитися або людина похилого віку буде в пригніченому настрої - ми в першу чергу повідомимо про це вам. Крім того, ми запропонуємо вам план дій, якщо ваш стан близького змінився. ",
        -1
      ),
      Zn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Мені потрібно буде самостійно купувати та привозити ліки для родича? ",
        -1
      ),
      Yn = Object(a["h"])(
        "p",
        null,
        " Наш персонал проводить щоденне обстеження стану людини похилого віку, вимірювання рівня глюкози в крові, артеріального тиску та інших показників, що впливають на здоров'я. Якщо ваш родич приймає ліки, але ви не маєте часу, щоб приїхати і привезти все необхідне для медикаментозного лікування – наші фахівці завжди готові піти вам на зустріч. Ми складемо список всього необхідного для підтримки здоров'я вашої близької людини і самостійно купимо препарати, зберігши чеки і надавши їх вам для оплати у зручний для вас час. ",
        -1
      ),
      Xn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " У вашого персоналу є медичні сертифікати та дипломи? ",
        -1
      ),
      Nn = Object(a["h"])(
        "p",
        null,
        " Медична освіта є невід'ємною частиною формування команди співробітників, які проводять роботу з людьми похилого віку. Наші спеціалісти мають диплом про вищу освіту, регулярно відбуваються курси підвищення кваліфікації. Щодо сестринського догляду – доглядальниці проходять ретельний відбір при прийомі на роботу особисто у керівника пансіонату, це дозволяє переконатися у професіоналізмі, особистих якостях та компетентності медичного персоналу, який цілодобово перебуває з вашими близькими. Наш персонал – висококваліфіковані фахівці з великим досвідом роботи та бездоганною репутацією. ",
        -1
      ),
      Wn = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Чому стан родича погіршився з появою доглядальниці вдома? ",
        -1
      ),
      _n = Object(a["h"])(
        "p",
        null,
        " Багато доглядальниць, які надають допомогу літнім людям вдома не мають медичної освіти, досвіду роботи та переслідують корисливі цілі. Для них ваш родич - це робота, вони не виявляють емпатії або поваги і не мають чуйності, розуміння. Вони просто виконують свої обов'язки, за які отримують гроші, не дбаючи при цьому про настрій або переживання вашого близької людини. Ви ніколи не зможете бути впевнені у сторонній людині, яку пустили до своєї оселі. Гарантія безпеки та професіоналізму – це доглядальниця у приватному пансіонаті, яка має необхідні навички, а також людські якості, що дозволяє не лише надавати послуги з догляду на високому рівні, а й стати літній людині справжнім другом. ",
        -1
      ),
      $n = Object(a["h"])(
        "button",
        { class: "accordion-button" },
        " Які послуги не входять у вартість проживання? ",
        -1
      ),
      es = Object(a["h"])(
        "p",
        null,
        " При проживанні в пансіонаті ви самостійно оплачуєте ліки, які призначив лікар. Також ви можете попросити наших співробітників оновлювати список препаратів та надавати вам чеки про оплату. У вартість перебування не входить покупка одноразових пелюшок та підгузків у разі потреби. Якщо у вас немає часу, щоб купувати та привозити все необхідне – ми можемо робити це самостійно, надавши вам чеки в кінці місяця для оплати. ",
        -1
      ),
      ts = { class: "faq-contact" },
      cs = Object(a["h"])(
        "div",
        { class: "section-title" },
        [
          Object(a["h"])("h2", null, "Залишились запитання?"),
          Object(a["h"])("div", { class: "bar" }),
          Object(a["h"])(
            "p",
            null,
            "Ми з радістю вам відповімо на кожне з них"
          ),
        ],
        -1
      ),
      as = { class: "faq-contact-form" },
      is = { class: "row" },
      ls = { class: "col-lg-6 col-md-6" },
      ns = { class: "form-group" },
      ss = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      os = { class: "col-lg-6 col-md-6" },
      rs = { class: "form-group" },
      bs = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      ds = { class: "col-lg-6 col-md-6" },
      us = { class: "form-group" },
      vs = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      js = { class: "col-lg-6 col-md-6" },
      ps = { class: "form-group" },
      hs = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      ms = { class: "col-lg-12 col-md-12" },
      Os = { class: "form-group" },
      gs = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      fs = Object(a["h"])(
        "div",
        { class: "col-lg-12 col-md-12" },
        [
          Object(a["h"])(
            "button",
            { type: "submit", class: "btn btn-primary" },
            " Відправити "
          ),
          Object(a["h"])("div", {
            id: "msgSubmit",
            class: "h3 text-center hidden",
          }),
          Object(a["h"])("div", { class: "clearfix" }),
        ],
        -1
      );
    function As(e, t, c, i, l, n) {
      var s = Object(a["B"])("accordion-item"),
        o = Object(a["B"])("accordion");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Sn, [
          Object(a["h"])("div", En, [
            Object(a["h"])("div", Hn, [
              Jn,
              Object(a["h"])("div", In, [
                Object(a["h"])("div", Qn, [
                  Object(a["k"])(o, null, {
                    default: Object(a["J"])(function () {
                      return [
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Gn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Mn];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Rn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Un];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Vn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Cn];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Dn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Ln];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Kn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [zn];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Zn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Yn];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Xn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [Nn];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [Wn];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [_n];
                          }),
                          _: 1,
                        }),
                        Object(a["k"])(s, null, {
                          "accordion-trigger": Object(a["J"])(function () {
                            return [$n];
                          }),
                          "accordion-content": Object(a["J"])(function () {
                            return [es];
                          }),
                          _: 1,
                        }),
                      ];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
            ]),
            Object(a["h"])("div", ts, [
              cs,
              Object(a["h"])("div", as, [
                Object(a["h"])(
                  "form",
                  {
                    id: "contactForm",
                    onSubmit:
                      t[5] ||
                      (t[5] = Object(a["L"])(
                        function () {
                          return (
                            n.tBotMessage && n.tBotMessage.apply(n, arguments)
                          );
                        },
                        ["prevent"]
                      )),
                  },
                  [
                    Object(a["h"])("div", is, [
                      Object(a["h"])("div", ls, [
                        Object(a["h"])("div", ns, [
                          Object(a["K"])(
                            Object(a["h"])(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  t[0] ||
                                  (t[0] = function (t) {
                                    return (e.name = t);
                                  }),
                                name: "name",
                                id: "name",
                                class: "form-control",
                                required: "",
                                "data-error": "Please enter your name",
                                placeholder: "Ім'я",
                              },
                              null,
                              512
                            ),
                            [[a["F"], e.name]]
                          ),
                          ss,
                        ]),
                      ]),
                      Object(a["h"])("div", os, [
                        Object(a["h"])("div", rs, [
                          Object(a["K"])(
                            Object(a["h"])(
                              "input",
                              {
                                type: "email",
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = function (t) {
                                    return (e.email = t);
                                  }),
                                name: "email",
                                id: "email",
                                class: "form-control",
                                "data-error": "Please enter your email",
                                placeholder: "Email",
                              },
                              null,
                              512
                            ),
                            [[a["F"], e.email]]
                          ),
                          bs,
                        ]),
                      ]),
                      Object(a["h"])("div", ds, [
                        Object(a["h"])("div", us, [
                          Object(a["K"])(
                            Object(a["h"])(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = function (t) {
                                    return (e.phone = t);
                                  }),
                                name: "phone_number",
                                id: "phone_number",
                                required: "",
                                "data-error": "Please enter your number",
                                class: "form-control",
                                placeholder: "Телефон",
                              },
                              null,
                              512
                            ),
                            [[a["F"], e.phone]]
                          ),
                          vs,
                        ]),
                      ]),
                      Object(a["h"])("div", js, [
                        Object(a["h"])("div", ps, [
                          Object(a["K"])(
                            Object(a["h"])(
                              "input",
                              {
                                type: "text",
                                "onUpdate:modelValue":
                                  t[3] ||
                                  (t[3] = function (t) {
                                    return (e.subject = t);
                                  }),
                                name: "msg_subject",
                                id: "msg_subject",
                                class: "form-control",
                                "data-error": "Please enter your subject",
                                placeholder: "Тема",
                              },
                              null,
                              512
                            ),
                            [[a["F"], e.subject]]
                          ),
                          hs,
                        ]),
                      ]),
                      Object(a["h"])("div", ms, [
                        Object(a["h"])("div", Os, [
                          Object(a["K"])(
                            Object(a["h"])(
                              "textarea",
                              {
                                name: "message",
                                "onUpdate:modelValue":
                                  t[4] ||
                                  (t[4] = function (t) {
                                    return (e.message = t);
                                  }),
                                class: "form-control",
                                id: "message",
                                cols: "30",
                                rows: "6",
                                "data-error": "Напишіть щось",
                                placeholder: "Ваше повідомлення",
                              },
                              null,
                              512
                            ),
                            [[a["F"], e.message]]
                          ),
                          gs,
                        ]),
                      ]),
                      fs,
                    ]),
                  ],
                  32
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    c("99af");
    var ks = { class: "accordion" };
    function ws(e, t, c, i, l, n) {
      return (
        Object(a["v"])(),
        Object(a["g"])("ul", ks, [Object(a["A"])(e.$slots, "default")])
      );
    }
    var ys = {
      name: "Accordion",
      props: {},
      data: function () {
        return { Accordion: { count: 0, active: null } };
      },
      provide: function () {
        return { Accordion: this.Accordion };
      },
    };
    const Bs = d()(ys, [["render", ws]]);
    var xs = Bs,
      Ts = { class: "accordion__item" },
      Ps = { class: "accordion__content" };
    function Fs(e, t, c, i, l, n) {
      return (
        Object(a["v"])(),
        Object(a["g"])("li", Ts, [
          Object(a["h"])(
            "div",
            {
              class: Object(a["q"])([
                "accordion__trigger",
                { accordion__trigger_active: n.visible },
              ]),
              onClick:
                t[0] ||
                (t[0] = function () {
                  return n.open && n.open.apply(n, arguments);
                }),
            },
            [Object(a["A"])(e.$slots, "accordion-trigger")],
            2
          ),
          Object(a["k"])(
            a["b"],
            {
              name: "accordion",
              onEnter: n.start,
              onAfterEnter: n.end,
              onBeforeLeave: n.start,
              onAfterLeave: n.end,
            },
            {
              default: Object(a["J"])(function () {
                return [
                  Object(a["K"])(
                    Object(a["h"])(
                      "div",
                      Ps,
                      [
                        Object(a["h"])("ul", null, [
                          Object(a["A"])(e.$slots, "accordion-content"),
                        ]),
                      ],
                      512
                    ),
                    [[a["G"], n.visible]]
                  ),
                ];
              }),
              _: 3,
            },
            8,
            ["onEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"]
          ),
        ])
      );
    }
    var qs = {
      name: "AccordionItem",
      props: {},
      inject: ["Accordion"],
      data: function () {
        return { index: null };
      },
      computed: {
        visible: function () {
          return this.index == this.Accordion.active;
        },
      },
      methods: {
        open: function () {
          this.visible
            ? (this.Accordion.active = null)
            : (this.Accordion.active = this.index);
        },
        start: function (e) {
          e.style.height = e.scrollHeight + "px";
        },
        end: function (e) {
          e.style.height = "";
        },
      },
      created: function () {
        this.index = this.Accordion.count++;
      },
    };
    const Ss = d()(qs, [["render", Fs]]);
    var Es = Ss,
      Hs = c("bc3a"),
      Js = c.n(Hs),
      Is = {
        name: "FaqArea",
        components: { Accordion: xs, AccordionItem: Es },
        data: function () {
          return { name: "", email: "", phone: "", subject: "", message: "" };
        },
        methods: {
          tBotMessage: function () {
            var e = "5718289727:AAEO6-79DLBuwWD5zuElglQwGe43j8B3v5g",
              t = "-575919706",
              c = "https://api.telegram.org/bot".concat(e, "/sendMessage"),
              a = "Откуда: FAQ\nИмя: "
                .concat(this.name, "\nПочта: ")
                .concat(this.email, "\nТелефон: ")
                .concat(this.phone, "\nТема: ")
                .concat(this.subject, "\nСообщение: ")
                .concat(this.message);
            Js.a.post(c, { chat_id: t, text: a });
          },
        },
      };
    const Qs = d()(Is, [["render", As]]);
    var Gs = Qs,
      Ms = {
        name: "Faq",
        components: { Navbar: X, PageTitle: Pn, FaqArea: Gs, Footer: ga },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const Rs = d()(Ms, [["render", An]]);
    var Us = Rs;
    function Vs(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("Blog"),
        b = Object(a["B"])("AccountCreate"),
        d = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
        ])
      );
    }
    var Cs = { class: "page-title-area item-bg2" },
      Ds = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Блог"),
            Object(a["h"])("p", null, "Цікаво знати"),
          ]),
        ],
        -1
      ),
      Ls = [Ds];
    function Ks(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", Cs, Ls);
    }
    var zs = { name: "PageTitle" };
    const Zs = d()(zs, [["render", Ks]]);
    var Ys = Zs,
      Xs = c("6244"),
      Ns = c.n(Xs),
      Ws = { class: "blog-area ptb-70" },
      _s = { class: "container" },
      $s = { class: "row" },
      eo = { class: "col-lg-4 col-md-6" },
      to = { class: "single-blog-post" },
      co = { class: "blog-image" },
      ao = Object(a["h"])("img", { src: Ns.a, alt: "image" }, null, -1),
      io = Object(a["h"])(
        "div",
        { class: "date" },
        [
          Object(a["h"])("i", { class: "far fa-calendar-alt" }),
          Object(a["j"])(" Вересень 15, 2022 "),
        ],
        -1
      ),
      lo = { class: "blog-post-content" },
      no = Object(a["j"])(" Як обрати пансіонат для людини літнього віку? "),
      so = Object(a["h"])(
        "span",
        null,
        [
          Object(a["j"])("Додано "),
          Object(a["h"])("a", { href: "#" }, "Адміністратор"),
        ],
        -1
      ),
      oo = Object(a["h"])(
        "p",
        null,
        " Будинок для людей похилого віку – це чудова можливість забезпечити своєму літньому родичу професійний медичний догляд, найвищий комфорт, постійну допомогу та життя в найбільш сприятливій для нього атмосфері. Але щодо цієї теми все ще існує безліч питань та стереотипів. ",
        -1
      ),
      ro = Object(a["j"])(" Дізнатись більше "),
      bo = Object(a["h"])("i", { class: "fas fa-arrow-right" }, null, -1);
    function uo(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Ws, [
          Object(a["h"])("div", _s, [
            Object(a["h"])("div", $s, [
              Object(a["h"])("div", eo, [
                Object(a["h"])("div", to, [
                  Object(a["h"])("div", co, [
                    Object(a["k"])(
                      s,
                      { to: "/blog-details" },
                      {
                        default: Object(a["J"])(function () {
                          return [ao];
                        }),
                        _: 1,
                      }
                    ),
                    io,
                  ]),
                  Object(a["h"])("div", lo, [
                    Object(a["h"])("h3", null, [
                      Object(a["k"])(
                        s,
                        { to: "/blog-details" },
                        {
                          default: Object(a["J"])(function () {
                            return [no];
                          }),
                          _: 1,
                        }
                      ),
                    ]),
                    so,
                    oo,
                    Object(a["k"])(
                      s,
                      { to: "/blog-details", class: "read-more-btn" },
                      {
                        default: Object(a["J"])(function () {
                          return [ro, bo];
                        }),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var vo = { name: "Blog" };
    const jo = d()(vo, [["render", uo]]);
    var po = jo,
      ho = {
        name: "BlogOne",
        components: {
          Navbar: X,
          PageTitle: Ys,
          Blog: po,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const mo = d()(ho, [["render", Vs]]);
    var Oo = mo;
    function go(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("BlogDetails"),
        b = Object(a["B"])("AccountCreate"),
        d = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
        ])
      );
    }
    var fo = { class: "page-title-area item-bg2" },
      Ao = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Блог"),
            Object(a["h"])("p", null, "Цікаво знати"),
          ]),
        ],
        -1
      ),
      ko = [Ao];
    function wo(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", fo, ko);
    }
    var yo = { name: "PageTitle" };
    const Bo = d()(yo, [["render", wo]]);
    var xo = Bo,
      To = c("5cb4"),
      Po = c.n(To),
      Fo = c("0a51"),
      qo = c.n(Fo),
      So = c("03e5"),
      Eo = c.n(So),
      Ho = { class: "blog-details-area ptb-70" },
      Jo = { class: "container" },
      Io = { class: "row" },
      Qo = { class: "col-lg-8 col-md-12" },
      Go = { class: "blog-details" },
      Mo = Object(a["h"])(
        "div",
        { class: "article-image" },
        [Object(a["h"])("img", { src: Ns.a, alt: "image" })],
        -1
      ),
      Ro = { class: "article-content" },
      Uo = { class: "entry-meta" },
      Vo = Object(a["h"])(
        "li",
        null,
        [
          Object(a["h"])("span", null, "Додано: "),
          Object(a["j"])("Вересень 15, 2022"),
        ],
        -1
      ),
      Co = Object(a["h"])("span", null, "Ким: ", -1),
      Do = Object(a["j"])(" Адміністратор "),
      Lo = Object(a["i"])(
        '<h3>Як обрати пансіонат для людини літнього віку?</h3><p> Будинок для людей похилого віку – це чудова можливість забезпечити своєму літньому родичу професійний медичний догляд, найвищий комфорт, постійну допомогу та життя в найбільш сприятливій для нього атмосфері. Але щодо цієї теми все ще існує безліч питань та стереотипів. </p><p> У цьому матеріалі ми спробуємо розібратися, на що потрібно звернути увагу при виборі пансіонату. </p><p> Сучасні будинки для людей похилого віку – це комфортні котеджі, де для зручності літніх людей створені всі умови, можна яскраво і цікаво проводити час, і не переживати за здоров&#39;я, адже для їхньої зручності у всіх будинках для людей похилого віку працюють медики. Все це звучить чудово, але як правильно обрати пансіонат для людини похилого віку? Як не помилитися з вибором? Ми із задоволенням вам про все розповімо! </p><blockquote class="wp-block-quote"><p>Обираємо хороший будинок для людей похилого віку</p></blockquote><ul class="article-features-list"><li> Крок 1. Приватний пансіонат або державний будинок. Мабуть, це перше, з чим вам доведеться визначитися. Основна відмінність державного будинку для літніх людей у тому, що проживання в ньому або безкоштовне, або коштує в кілька разів дешевше, ніж у приватному пансіонаті. Орієнтуйтеся на свої фінансові можливості, але пам&#39;ятайте, що в приватних пансіонатах найчастіше створена більш сприятлива та комфортна атмосфера, оскільки вони не перенаселені і мають більш суттєвий бюджет, який дозволяє значно покращити умови проживання для літніх людей. </li><li> Крок 2. Ліцензія та всі необхідні документи. Якщо ви обрали приватний будинок для людей похилого віку, насамперед обов&#39;язково перевірте, чи є у пансіонату ліцензія на надання медичних послуг та ліцензія на ведення такого роду діяльності. Якщо всього цього немає, то не варто обирати їх послуги. </li><li> Крок 3. Повний день або догляд у певні години. Для багатьох це стане відкриттям, але далеко не всі будинки для людей похилого віку готові забирати до себе людей похилого віку на постійній основі. Перш ніж звернутися до соціального будинку за послугами, обов&#39;язково уточніть, за яким принципом вони працюють. </li><li> Крок 4. Пакет послуг. Послуги, які пропонують різні пансіонати можуть сильно відрізнятися. Обов&#39;язково перевірте такі пункти, як харчування, умови проживання (кількість осіб у кімнаті), медичне обслуговування, розваги, догляд. Хороший пансіонат повинен надавати все можливе для того, щоб створити життя, яке нічим не відрізняється від життя вдома, а то й перевершує його в комфорті. </li><li> Крок 5. Особисто перевіряємо будинок для людей похилого віку. Як обрати пансіонат для людей похилого віку, який в результаті виявиться по-справжньому якісним? Побачити все на власні очі! Відвідайте обраний пансіонат і попросіть провести вас по території. Як правило, якщо власникам є що приховувати – це видно неозброєним оком. </li></ul><ul class="wp-block-gallery columns-3"><li class="blocks-gallery-item"><figure><img src="' +
          Po.a +
          '" alt="image"></figure></li><li class="blocks-gallery-item"><figure><img src="' +
          qo.a +
          '" alt="image"></figure></li><li class="blocks-gallery-item"><figure><img src="' +
          Eo.a +
          '" alt="image"></figure></li></ul><h3> Основні ознаки якісного приватного пансіонату для людей похилого віку: </h3><ul class="article-features-list"><li>Наявність всіх документів</li><li>Ввічливий персонал</li><li> Повне медичне обслуговування пацієнтів, послуги з догляду </li><li>Доглянута територія</li><li>Комфортабельні кімнати</li><li>Не надто низька, але й не занадто висока вартість</li><li> Співробітники завжди самі готові на будь-який запит надати повну інструкцію про те, як правильно оформити літню людину в будинок для людей похилого віку </li></ul><p> Використовуйте цю просту інструкцію, і вам буде нескладно підібрати якісний, сучасний та комфортабельний будинок. Обираючи пансіонат для людей похилого віку пам&#39;ятайте, що ви вибираєте для свого родича другий будинок, а це означає, що в ньому йому повинно бути так само комфортно, як і у своїй старій оселі! </p><p> Зателефонувавши нашому менеджерові за консультацією, Ви можете одразу розпочати виконання кроків для підбору якісного будинку для своєї близької людини в Києві та передмісті. </p>',
        11
      ),
      Ko = Object(a["h"])(
        "div",
        { class: "article-footer" },
        [
          Object(a["h"])("div", { class: "article-tags" }, [
            Object(a["h"])("span", null, [
              Object(a["h"])("i", { class: "fas fa-bookmark" }),
            ]),
            Object(a["h"])(
              "a",
              { href: "/blog-1" },
              "Як обрати якісний пансіонат?"
            ),
          ]),
        ],
        -1
      ),
      zo = Object(a["h"])(
        "div",
        { class: "col-lg-4 col-md-12" },
        [
          Object(a["h"])("aside", { class: "widget-area", id: "secondary" }, [
            Object(a["h"])("div", { class: "widget widget_search" }, [
              Object(a["h"])("form", { class: "search-form" }, [
                Object(a["h"])("label", null, [
                  Object(a["h"])(
                    "span",
                    { class: "screen-reader-text" },
                    "Пошук:"
                  ),
                  Object(a["h"])("input", {
                    type: "search",
                    class: "search-field",
                    placeholder: "Пошук...",
                  }),
                ]),
                Object(a["h"])("button", { type: "submit" }, [
                  Object(a["h"])("i", { class: "fas fa-search" }),
                ]),
              ]),
            ]),
            Object(a["h"])(
              "div",
              { class: "widget widget_dplove_posts_thumb" },
              [
                Object(a["h"])(
                  "h3",
                  { class: "widget-title" },
                  "Популярні пости"
                ),
                Object(a["h"])("article", { class: "item" }, [
                  Object(a["h"])("a", { href: "#", class: "thumb" }, [
                    Object(a["h"])("span", {
                      class: "fullimage cover bg1",
                      role: "img",
                    }),
                  ]),
                  Object(a["h"])("div", { class: "info" }, [
                    Object(a["h"])(
                      "time",
                      { datetime: "2019-06-30" },
                      "Вересень 15, 2022"
                    ),
                    Object(a["h"])("h4", { class: "title usmall" }, [
                      Object(a["h"])(
                        "a",
                        { href: "#" },
                        "Як обрати пансіонат для людини літнього віку?"
                      ),
                    ]),
                  ]),
                  Object(a["h"])("div", { class: "clear" }),
                ]),
              ]
            ),
            Object(a["h"])("div", { class: "widget widget_recent_entries" }, [
              Object(a["h"])("h3", { class: "widget-title" }, "Останні пости"),
              Object(a["h"])("ul", null, [
                Object(a["h"])("li", null, [
                  Object(a["h"])(
                    "a",
                    { href: "#" },
                    "Як обрати пансіонат для людини літнього віку?"
                  ),
                ]),
              ]),
            ]),
            Object(a["h"])("div", { class: "widget widget_archive" }, [
              Object(a["h"])("h3", { class: "widget-title" }, "Архів"),
              Object(a["h"])("ul", null, [
                Object(a["h"])("li", null, [
                  Object(a["h"])("a", { href: "#" }, "Вересень 2022"),
                ]),
              ]),
            ]),
            Object(a["h"])("div", { class: "widget widget_categories" }, [
              Object(a["h"])("h3", { class: "widget-title" }, "Категорії"),
              Object(a["h"])("ul", null, [
                Object(a["h"])("li", null, [
                  Object(a["h"])("a", { href: "#" }, "Цікаво знати"),
                ]),
              ]),
            ]),
            Object(a["h"])("div", { class: "widget widget_tag_cloud" }, [
              Object(a["h"])("h3", { class: "widget-title" }, "Теги"),
              Object(a["h"])("div", { class: "tagcloud" }, [
                Object(a["h"])("a", { href: "#" }, [
                  Object(a["j"])("Як обрати якісний дім? "),
                  Object(a["h"])("span", { class: "tag-link-count" }, " (1)"),
                ]),
              ]),
            ]),
          ]),
        ],
        -1
      );
    function Zo(e, t, c, i, l, n) {
      var s = Object(a["B"])("router-link");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", Ho, [
          Object(a["h"])("div", Jo, [
            Object(a["h"])("div", Io, [
              Object(a["h"])("div", Qo, [
                Object(a["h"])("div", Go, [
                  Mo,
                  Object(a["h"])("div", Ro, [
                    Object(a["h"])("div", Uo, [
                      Object(a["h"])("ul", null, [
                        Vo,
                        Object(a["h"])("li", null, [
                          Co,
                          Object(a["k"])(
                            s,
                            { to: "/blog-details" },
                            {
                              default: Object(a["J"])(function () {
                                return [Do];
                              }),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                    ]),
                    Lo,
                  ]),
                  Ko,
                ]),
              ]),
              zo,
            ]),
          ]),
        ])
      );
    }
    var Yo = { name: "BlogDetails" };
    const Xo = d()(Yo, [["render", Zo]]);
    var No = Xo,
      Wo = {
        name: "BlogThree",
        components: {
          Navbar: X,
          PageTitle: xo,
          BlogDetails: No,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const _o = d()(Wo, [["render", go]]);
    var $o = _o;
    function er(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("ContactArea"),
        b = Object(a["B"])("AccountCreate"),
        d = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
          Object(a["k"])(d),
        ])
      );
    }
    var tr = { class: "page-title-area item-bg1" },
      cr = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Контакти"),
            Object(a["h"])(
              "p",
              null,
              "Вся необхідна інформація, щоб зв'язатись з нами"
            ),
          ]),
        ],
        -1
      ),
      ar = [cr];
    function ir(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", tr, ar);
    }
    var lr = { name: "PageTitle" };
    const nr = d()(lr, [["render", ir]]);
    var sr = nr,
      or = c("7049"),
      rr = c.n(or),
      br = { class: "contact-area ptb-70" },
      dr = { class: "container" },
      ur = Object(a["h"])(
        "div",
        { class: "section-title" },
        [
          Object(a["h"])(
            "h2",
            null,
            " Відправте нам повідомлення, з будь-яким запитанням, що вас цікавить "
          ),
          Object(a["h"])("div", { class: "bar" }),
          Object(a["h"])(
            "p",
            null,
            " Пісял цього - ми зв'яжемося з вами, і підберемо найкращий варіант саме для вас "
          ),
        ],
        -1
      ),
      vr = { class: "row align-items-center" },
      jr = Object(a["i"])(
        '<div class="col-lg-5 col-md-12"><div class="contact-info"><ul><li><div class="icon"><i class="fas fa-map-marker-alt"></i></div><span>Адреси будинків</span><ul class="contact-info-houses"><li><a href="https://goo.gl/maps/eBvR4PdtvYRyFZKAA" target="_blank">Бровары, вулиця Пантелеймона Куліша</a></li><li><a href="https://goo.gl/maps/7tW93yVqAdm1qqkLA" target="_blank">Бровары, вул. Чубинского 38</a></li><li><a href="https://goo.gl/maps/ULsrXzQem2tdbcm78" target="_blank">Ворзель, вул. Тюльпанова 12</a></li><li><a href="https://goo.gl/maps/c4gf45ZPtE1VGo8VA" target="_blank">Зазимье, вул. Широка 94</a></li><li><a href="https://goo.gl/maps/hjxGMdvEsRdHmTru6" target="_blank">Літки, провулок Мельника, 8</a></li></ul></li><li><div class="icon"><i class="fas fa-envelope"></i></div><span>Email</span><a href="mailto:lovedp.kiev.ua@gmail.com">lovedp.kiev.ua@gmail.com</a></li><li><div class="icon"><i class="fas fa-phone-volume"></i></div><span>Телефон</span><a href="tel:+380443440444">+38 (044) 344-04-44</a></li></ul></div></div>',
        1
      ),
      pr = { class: "col-lg-7 col-md-12" },
      hr = { class: "contact-form" },
      mr = { class: "row" },
      Or = { class: "col-lg-6 col-md-6" },
      gr = { class: "form-group" },
      fr = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      Ar = { class: "col-lg-6 col-md-6" },
      kr = { class: "form-group" },
      wr = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      yr = { class: "col-lg-6 col-md-6" },
      Br = { class: "form-group" },
      xr = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      Tr = { class: "col-lg-6 col-md-6" },
      Pr = { class: "form-group" },
      Fr = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      qr = { class: "col-lg-12 col-md-12" },
      Sr = { class: "form-group" },
      Er = Object(a["h"])("div", { class: "help-block with-errors" }, null, -1),
      Hr = Object(a["h"])(
        "div",
        { class: "col-lg-12 col-md-12" },
        [
          Object(a["h"])(
            "button",
            { type: "submit", class: "btn btn-primary" },
            " Відправити "
          ),
          Object(a["h"])("div", {
            id: "msgSubmit",
            class: "h3 text-center hidden",
          }),
          Object(a["h"])("div", { class: "clearfix" }),
        ],
        -1
      ),
      Jr = Object(a["h"])(
        "div",
        { class: "bg-map" },
        [Object(a["h"])("img", { src: rr.a, alt: "image" })],
        -1
      );
    function Ir(e, t, c, i, l, n) {
      return (
        Object(a["v"])(),
        Object(a["g"])("div", br, [
          Object(a["h"])("div", dr, [
            ur,
            Object(a["h"])("div", vr, [
              jr,
              Object(a["h"])("div", pr, [
                Object(a["h"])("div", hr, [
                  Object(a["h"])(
                    "form",
                    {
                      id: "contactForm",
                      ref: "clearForm",
                      onSubmit:
                        t[5] ||
                        (t[5] = Object(a["L"])(
                          function () {
                            return (
                              n.tBotMessage && n.tBotMessage.apply(n, arguments)
                            );
                          },
                          ["prevent"]
                        )),
                    },
                    [
                      Object(a["h"])("div", mr, [
                        Object(a["h"])("div", Or, [
                          Object(a["h"])("div", gr, [
                            Object(a["K"])(
                              Object(a["h"])(
                                "input",
                                {
                                  type: "text",
                                  "onUpdate:modelValue":
                                    t[0] ||
                                    (t[0] = function (t) {
                                      return (e.name = t);
                                    }),
                                  name: "name",
                                  id: "name",
                                  class: "form-control",
                                  required: "",
                                  "data-error": "Будьласка введіть Ім'я",
                                  placeholder: "Ім'я",
                                },
                                null,
                                512
                              ),
                              [[a["F"], e.name]]
                            ),
                            fr,
                          ]),
                        ]),
                        Object(a["h"])("div", Ar, [
                          Object(a["h"])("div", kr, [
                            Object(a["K"])(
                              Object(a["h"])(
                                "input",
                                {
                                  type: "email",
                                  "onUpdate:modelValue":
                                    t[1] ||
                                    (t[1] = function (t) {
                                      return (e.email = t);
                                    }),
                                  name: "email",
                                  id: "email",
                                  class: "form-control",
                                  "data-error": "Please enter your email",
                                  placeholder: "Email",
                                },
                                null,
                                512
                              ),
                              [[a["F"], e.email]]
                            ),
                            wr,
                          ]),
                        ]),
                        Object(a["h"])("div", yr, [
                          Object(a["h"])("div", Br, [
                            Object(a["K"])(
                              Object(a["h"])(
                                "input",
                                {
                                  type: "text",
                                  "onUpdate:modelValue":
                                    t[2] ||
                                    (t[2] = function (t) {
                                      return (e.phone = t);
                                    }),
                                  name: "phone_number",
                                  id: "phone_number",
                                  required: "",
                                  "data-error": "Please enter your number",
                                  class: "form-control",
                                  placeholder: "Телефон",
                                },
                                null,
                                512
                              ),
                              [[a["F"], e.phone]]
                            ),
                            xr,
                          ]),
                        ]),
                        Object(a["h"])("div", Tr, [
                          Object(a["h"])("div", Pr, [
                            Object(a["K"])(
                              Object(a["h"])(
                                "input",
                                {
                                  type: "text",
                                  "onUpdate:modelValue":
                                    t[3] ||
                                    (t[3] = function (t) {
                                      return (e.subject = t);
                                    }),
                                  name: "msg_subject",
                                  id: "msg_subject",
                                  class: "form-control",
                                  "data-error": "Please enter your subject",
                                  placeholder: "Тема",
                                },
                                null,
                                512
                              ),
                              [[a["F"], e.subject]]
                            ),
                            Fr,
                          ]),
                        ]),
                        Object(a["h"])("div", qr, [
                          Object(a["h"])("div", Sr, [
                            Object(a["K"])(
                              Object(a["h"])(
                                "textarea",
                                {
                                  name: "message",
                                  "onUpdate:modelValue":
                                    t[4] ||
                                    (t[4] = function (t) {
                                      return (e.message = t);
                                    }),
                                  class: "form-control",
                                  id: "message",
                                  cols: "30",
                                  rows: "6",
                                  "data-error": "Write your message",
                                  placeholder: "Ваше повідомлення",
                                },
                                null,
                                512
                              ),
                              [[a["F"], e.message]]
                            ),
                            Er,
                          ]),
                        ]),
                        Hr,
                      ]),
                    ],
                    544
                  ),
                ]),
              ]),
            ]),
          ]),
          Jr,
        ])
      );
    }
    var Qr = {
      name: "ContactArea",
      data: function () {
        return { name: "", email: "", phone: "", subject: "", message: "" };
      },
      methods: {
        tBotMessage: function () {
          var e = "5718289727:AAEO6-79DLBuwWD5zuElglQwGe43j8B3v5g",
            t = "-575919706",
            c = "https://api.telegram.org/bot".concat(e, "/sendMessage"),
            a = "Откуда: Контакты\nИмя: "
              .concat(this.name, "\nПочта: ")
              .concat(this.email, "\nТелефон: ")
              .concat(this.phone, "\nТема: ")
              .concat(this.subject, "\nСообщение: ")
              .concat(this.message);
          Js.a.post(c, { chat_id: t, text: a }),
            alert("Дякуємо за заявку, ми зателефонуємо вам найближчим часом!"),
            this.$refs.clearForm.reset();
        },
      },
    };
    const Gr = d()(Qr, [["render", Ir]]);
    var Mr = Gr,
      Rr = {
        name: "Contact",
        components: {
          Navbar: X,
          PageTitle: sr,
          ContactArea: Mr,
          AccountCreate: Cc,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const Ur = d()(Rr, [["render", er]]);
    var Vr = Ur;
    function Cr(e, t, c, i, l, n) {
      var s = Object(a["B"])("Navbar"),
        o = Object(a["B"])("PageTitle"),
        r = Object(a["B"])("TermsConditionArea"),
        b = Object(a["B"])("Footer");
      return (
        Object(a["v"])(),
        Object(a["g"])("div", null, [
          Object(a["k"])(s),
          Object(a["k"])(o),
          Object(a["k"])(r),
          Object(a["k"])(b),
        ])
      );
    }
    var Dr = { class: "page-title-area item-bg3" },
      Lr = Object(a["h"])(
        "div",
        { class: "container" },
        [
          Object(a["h"])("div", { class: "page-title-content" }, [
            Object(a["h"])("h2", null, "Terms Condition"),
            Object(a["h"])("p", null, "Vibion Terms Condition"),
          ]),
        ],
        -1
      ),
      Kr = [Lr];
    function zr(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", Dr, Kr);
    }
    var Zr = { name: "PageTitle" };
    const Yr = d()(Zr, [["render", zr]]);
    var Xr = Yr,
      Nr = { class: "privacy-policy-area ptb-100" },
      Wr = Object(a["i"])(
        '<div class="container"><div class="section-title"><h2>Vibion Terms of Service</h2><div class="bar"></div><p>INFORMATION &amp; NOTICES</p></div><div class="privacy-policy-content"><h3>1. Ownership of site agreement to terms of use</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p><ul><li>It has survived not only five centuries, but also the leap into electronic typesetting.</li><li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li><li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li></ul></div><div class="privacy-policy-content"><h3>2. General Conditions</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p></div><div class="privacy-policy-content"><h3>3. Modifications to the Service</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p></div><div class="privacy-policy-content"><h3>4. Entire Agreement</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p><ul><li>It has survived not only five centuries, but also the leap into electronic typesetting.</li><li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li><li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li></ul></div><div class="privacy-policy-content"><h3>5. Service Rules</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p></div><div class="privacy-policy-content"><h3>6. Limitation of Liability</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat.</p></div></div>',
        1
      ),
      _r = [Wr];
    function $r(e, t, c, i, l, n) {
      return Object(a["v"])(), Object(a["g"])("div", Nr, _r);
    }
    var eb = { name: "TermsConditionArea" };
    const tb = d()(eb, [["render", $r]]);
    var cb = tb,
      ab = {
        name: "TermsCondition",
        components: {
          Navbar: X,
          PageTitle: Xr,
          TermsConditionArea: cb,
          Footer: ga,
        },
        mounted: function () {
          document.dispatchEvent(new Event("render-complete"));
        },
      };
    const ib = d()(ab, [["render", Cr]]);
    var lb = ib,
      nb = [
        { path: "/", component: ka },
        { path: "/about-us", component: bi },
        { path: "/features-1", component: Di },
        { path: "/team", component: pl },
        { path: "/pricing", component: en },
        { path: "/error", component: fn },
        { path: "/faq", component: Us },
        { path: "/blog-1", component: Oo },
        { path: "/blog-details", component: $o },
        { path: "/contact", component: Vr },
        { path: "/terms-condition", component: lb },
      ],
      sb = Object(m["a"])({
        history: Object(m["b"])(),
        linkExactActiveClass: "active",
        routes: nb,
        scrollBehavior: function () {
          return { top: 0 };
        },
      }),
      ob = sb,
      rb = c("1144"),
      bb = (c("1393"), c("de82"), c("ad3d")),
      db = c("be33"),
      ub = c("11ca");
    db["c"].add(ub["a"]),
      rb["a"].bind('[data-fancybox="gallery"]', {}),
      Object(a["d"])(h)
        .component("font-awesome-icon", bb["a"])
        .use(ob)
        .mount("#app");
  },
  "5cb4": function (e, t, c) {
    e.exports = c.p + "img/blog-desc1.48a7ca43.webp";
  },
  6244: function (e, t, c) {
    e.exports = c.p + "img/blog-1.669a33bd.jpg";
  },
  7049: function (e, t, c) {
    e.exports = c.p + "img/bg-map.55d72133.png";
  },
  8708: function (e, t, c) {
    e.exports = c.p + "img/map.caeeab2f.png";
  },
  8760: function (e, t, c) {
    e.exports = c.p + "img/faq.063281a6.png";
  },
  "8a1d": function (e, t, c) {
    e.exports = c.p + "img/front_borshagovka.0acc7132.webp";
  },
  "94cf": function (e, t, c) {
    e.exports = c.p + "img/team-img2.66df644a.webp";
  },
  9740: function (e, t, c) {
    e.exports = c.p + "img/10.f7c1aec5.webp";
  },
  "97f7": function (e, t) {
    e.exports =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABfAF8DASIAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAABQcDBAYAAggB/8QAPxAAAgECBAMGAwYDBQkAAAAAAQIDBBEABRIhBjFBBxMUIlFhcYGxIzJCkaHwCBXRFiQzweFDUlNiZHKisvH/xAAaAQADAQEBAQAAAAAAAAAAAAADBAUCAQAG/8QAKhEAAgIBAwQCAAYDAAAAAAAAAQIAAxEEEiETIjFRBUEGMmFxgaGRwfH/2gAMAwEAAhEDEQA/AHTw/XNLmNDR61JjopJiRe93kP6bfXEFYS+cVjde8A/JRgf2bMtZxPOySa1hoo4bl728zkjGhNMorawn/jt/lj5x2ZzkyrUoUTN0ob+09afSjiX82Y4K0IJSQWP37cueKihIuI8xYqznRBGqr1NmP+uCSSKI3aN4o44yWk1g7D2tzPoPpzwGpGdsCHYjE+eVLFiFBPMnlgVTZxCGMEMU0oQt5yQBa59eeLuaNNNl6RUyxrLIx+1cXCAbXsPp9MUqdY6aeI1OYQwxNZSZQPMQAL6d/S9t+eHl0nHcZn+JfFfTPEHaQxg8u8FsWFXyhwbgi4IxWr4T4WXwcEFQo/2qIVI+Tn9OmM7QZs+WyvDmOpaN7jUi7RHqduQ9sDup6fgzi901n4SOuKVbdqyjF/usx/TF9NOm6nUCAQfUYpVlxX03/a5+mFie2bUc4mUpgJ+0TP3Ov7HL6SO4YjmZGxfpEHjpRY2WKMfpgVk8Yl444tqtch0x0sFr+UARs3L183PBik0+MqrjloH/AI4WY5myIJ7BM0euqs7rZHMjB447nnsn+uN1DUazUtc3Mz/XC6/hoiiXIc3k2OurtcdbIMMCkCIkrXG8jH9ThsZwMwZABOIOoS0ucZoSVB1xqGY20+Q3OIadZ2qwqecLIdBJ9STf9APyxcyHLYMxzerqp6k9yH1LAh/xGFgCx9Pb54nhiWOujlVQYpQSljz3/pihpKDXX1PcJTiyzaZ2zzXTUiFlpYGKkfZIQDb1354V2dZrVTZgsMBKzRu4Dg2JU22B5jl+pw182yyCoy86F0yXB+8bkfPGb4X4RMOctV1a+QXZQyXF7/HHNRuYgCUqtPWMt6mM4Wzirpq1qTMpTFPqujMNKHfkD0IwezjMFaDwztAt1vGwqUOo9bC98ajjLI6Cty94NEXekeV7WII5EAYUHE2UVGUvG0yETI40uNle3p+eFHsersPImm0dbjevEYXZtm4libKZwQ8bM1Pc38nUb+98aOtu2Yx8xpibb54UPDWcrT5zDVIAZInDgE7W3BB9Oow2YqyKsniqIgRFJBqGrmLnlhfxxJjrhsiZjIBfPeMZP+riX8qdf64JZa+qSrcKw+3tv1sowM4aIFRxZKdg2aNv6gRRjFzh+vhqTVJGkkciTsGSQeba2+21j0wvxmdaGODsiybIcvemyKPRDJIZHHel/Mdr3PwxYoo2egIa/m1X+ZOMP2H5hFluTtlOd5gGzCWqcxsRs4P3QD689sMGkmQUmkW35Xw9ZWynu4MVV1bwcwbwPBLJTVkULMDp7vX0XWbbe9r4I5vOgrqSlpFFoSRsL6UA2/8AXAXL6808NVT0zqg1ML3IAI9flt88R8MVhruJZ1nZl0RWKsLai1wD7c2/TFSuwdELGKEPV3SbjHijNqJ3gyCg/mMkCg1L95GsUd+QLuQA3sCfgMVeE+JK7Oah6Wsy2WCoRO8BRw6MRzFwdj7H3xa4q7OKXOKVIqyKmq4EbWqT95pDdWKow1E+98XuF8mGRvHEIIIibkCKMJt8Og9umF2D5GTLVZXB2xOcWcXcetnFSlIk2XUUTMX7qnapnIBA8qgj1HMgC45nFiPMa7O8vgo65dNQCpjSSmMEukjYmMk2PwPvhlVOVU1Xnk1HLL3b3MyxiSxZSdzt9cXv5RlGUZdIlPTxxgglnJuST/zHfCNikr+0YA58+Z5rzqfMcnzdYFiDyo90Yg6rE72I67XtyNsPzs/QvkMFS8YRpYvN7nUd/wArYTfHNdC2ZCumjLQxSBGk0XCgvYH0OxJt7YdvBr66Lw/eQSCJIyO5a62YXB9LH0wEMHIkfU1dM4gjh5l7niQ2vfOJl5egQY7wxeDzC6wiBZJnOwtqGnnbFThUk5VnVSZbxyZ1Uk22sBIBsflgYvFVbX8RQ01LlEsqRRvqBILBr28x5W9PXC9hCgZgUGcyvRhaerSppTaaPfV+IA8yPli9RcTyoECV7AM2hElAIJwveIDUU7xmiFTU1LDWwU7Lf4cmPoMMHs+7M4qrus440aeWewaPLxMUCb7d6RuTb8IsPUk7D2zUamzcWlB9LTSm1FEhh4hV4qqiFHLJUQMzSSK9h5zew6+nPArs0r66p4tzakSpZKmKITNTmPUxQPtIG5DSRYjqDth1tSZZT5bLR0OX0tJTybMqRhdXuTzJ+OFZxR2b53T10+bZNLLFI8bwh4J9MojkXSbX57dCfhY4qLQ9QGTmDpXb4jWyzO1npNczFJEUa06fEexxiOIuOKyizCXPIeH6jMcujkan8RAwLRKgGptHNlLEi4/3cBezqar4h4dOST5pTrmuUN4aomsS7JyUsuxDWG6tyIPrjRz5RUw0KZZl+a9xS047tGjp1klkH4mJc6blid7HfGyznt+o9SteMgcmLSo7Tsz4k4mpo8jpI6KJ5E/vDi8gYX3tyC8wb8xg7nvGs9VRS5YdMNdq7qRSfutyNvUeh98SU/ZtQLViur6TMmKMGtJVIqsb3/w4Aq79b4J5xUZbQ0sdN4antBJZCQNaAjURc72v79cI6hSByY5WSIlc3nat4iThqNzG8UqSSsSSz2ANrcrb79bgDG0yOvqOHZWXLM67o1cwXu57yNYbKCFBCD8IvzwueDY5uKO1rxFKzCnlrJJ5mQ/gvZbHoLDl1x6GquzvgyWpFTPR1EFRM2rvoJ2Qs30v8sdNJACj1/ckMvWLO3v/AJA2VVcuXwHKUgWojkmaonCqSNTsXJudrE326Yn4e4kywGaFqKeB0dg8giup35bcsaHMeEqdqS1BUGaUKy6pn0yEHpqAsbe4wrc+QU+bLRV+XV1IzXNVBp8zFRZSN/MOuobYXeuxDzPJVSyYccxicBcEz8Nu2YZi4kq5JNUMFwyUu1hv+J7czyHT1xtaSllqZZGZQvQ6if8ALH2RDUMGZyFjX1G/rizQOWpmO4GoHZt+VufT99cVKEAfjxCW5CHHmWzQqYFUPte4G3/3FuaFPDoCAQoA3+uOvl7mNWsTYcxi04Ag08/LttiiBkRAkggzzTw/HS0HaHxu8Szw56a2d3BLBKiHWStxqYgqQLG52ccuWLGTdrRp/E+LpCqwLqb0UDn8MCO1iHNOBO2f+1EVIwo6ufxMJCFY6gHyyRE7i/3j8wbb4uca8DZTxbltXmXAFfTzrWLqmiNQidwObI6nzLv/AE5WOB/IaQ5W6vwRzN/FawYal/IJ/wASCs7cKbMJjSZdpd3XVck2VRhW8c8V1lXSSTCseI1LWkN99Bve3pfAbN8izDhardczoniqraUi1C+/U+31xmFpMwzrMoYEgnqJJm7uCnjBZ3cmy7D3/LC1OhN1gfPaPcJq/lDTXsP5j9CPj+EigSrgzTNUiIWOoFMjEDlpBPv15e+PQ+YUrzyRIG06Bq5c7nGE7A+EKvg7gGKhzKOJK0yyVFSI2VgHY2A1DZrBRvvzt0wxUV0CqrkaiGNuhtvgVu3qsR4htOrmhQ3nEGSQVESAgm45jY8vf0wLr8ogzGRKis7sT0xIhlkW+nV95fcfHGglkU5toLXVbKUIPl5+YG2/09xinGqPlk82qMt3h8pF7ea1rG2BuMwiqDlTIVrWmmfdg4NxYXJ9rDnjUQACCQCwAIHMG373/dsZrhqOGeSWY7vG4jRbdTvff0GNRTxSSQWUG7v1IP72wbSoeTO6t1yF9TvK/dwlgfukHBaErJSqbC+m9sBXh10RIa9wSvv+wP31I5TL3tIQu4tYbW6XxSQSbcQV49zlZwzk/FmQZhkedUkdTTzFZtOmzIwBUOG6MLbEWt88IPPv4YmWsZclzqqhpkWwMyK51H12BKmw9eWGv2gZ7V8P0VDnFLSpVrFVgSRSSFEHlJVjY3JBFhzHmNweYyLdsC0ystdLXUqaKdEeVEqlQK32rEAKzO6gi5NgbEDocnXLT2bsGcX4DWapTfVXuX+x748xdV/8OVJlYFTnvF0vhwpPdQxKjs9trGx29rHGw7LOyDKuFa5+IDTlJWX+7RyMZHQtzJZrb9bAWF+uI6rtpoK6ol8DRTy6DL3ZWmRO7vtGSXc7gbmwsbgC25Ok4A4jzDiaWvr6qkhgpopFjiBlZ5NWnr+EC29lAFzhK7Vm1thfP6Rqr8P6mivrWVbVH2f9fc0syhYCgvqY6b3tfHQz65GdWsFN79LY5mTFVRgQLC97fIfXAx5kip3Y76UPTn+74ARzHlGRmcoZjLXVT/fIIBPP9+vt8xj7SKTSyRNpKpM217jc3HP44EZVIrSSsXGsyDbTvy23+R9uvPENRVyvm1TRRkxuqRyOQbsARyuR6gcvTAGbaMwlaZcif//Z";
  },
  "980b": function (e, t, c) {
    e.exports = c.p + "img/invoicing-1.0c9005e6.jpg";
  },
  "9d64": function (e, t, c) {
    e.exports = c.p + "img/logo.5f94f6fd.png";
  },
  a109: function (e, t, c) {
    e.exports = c.p + "img/black-logo.7eb39304.png";
  },
  a26f: function (e, t, c) {
    e.exports = c.p + "img/inst.39e79c45.png";
  },
  b874: function (e, t, c) {
    e.exports = c.p + "img/reabilitation.3e078690.webp";
  },
  c44d: function (e, t, c) {
    e.exports = c.p + "img/businesses-2.3f018ee9.webp";
  },
  d16c: function (e, t, c) {
    e.exports = c.p + "img/intro-vorzel.48a7ca43.webp";
  },
  d6a0: function (e, t, c) {
    e.exports = c.p + "img/medicom.43d1709d.png";
  },
  de82: function (e, t, c) {},
  df9d: function (e, t, c) {
    e.exports = c.p + "img/about-img1.f7c1aec5.webp";
  },
  f3a4: function (e, t, c) {
    e.exports = c.p + "img/letki.affdc2f9.webp";
  },
});
//# sourceMappingURL=app.489e238b.js.map

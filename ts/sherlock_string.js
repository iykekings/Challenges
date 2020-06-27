// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

System.register("deno_test", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function assertEq(left, right, info = "") {
        if (String(left) !== String(right)) {
            console.error(`Test Failed ❗️:
    Expected => 
      ${right}
    Got => 
      ${left}`);
        }
        else {
            console.log(`Test: ${info} Passed`);
        }
    }
    exports_1("assertEq", assertEq);
    function assertDeepEqual(left, right, info = "") {
        if (!left.every((e, i) => e === right[i])) {
            console.error(`Test Failed:
    Expected =>  ${right}
    Got => ${left}\n`);
        }
        else {
            console.log(`\n${info}: Passed ✅\n`);
        }
    }
    exports_1("assertDeepEqual", assertDeepEqual);
    function shouldThrow(cb, info = "") {
        let hasthrown = false;
        try {
            cb();
        }
        catch (error) {
            hasthrown = true;
            console.log(`\n${info}: Passed ✅\n`);
        }
        finally {
            if (!hasthrown) {
                console.error(`Test Failed: Didn't throw an error\n`);
            }
        }
    }
    exports_1("shouldThrow", shouldThrow);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("sherlock_strings", ["deno_test"], function (exports_2, context_2) {
    "use strict";
    var deno_test_ts_1;
    var __moduleName = context_2 && context_2.id;
    function isValid(s) {
        const set = new Set(s);
        const size = set.size;
        return 0 === s.length % size || size === s.length || 1 === s.length % size
            ? "YES"
            : "NO";
    }
    return {
        setters: [
            function (deno_test_ts_1_1) {
                deno_test_ts_1 = deno_test_ts_1_1;
            }
        ],
        execute: function () {
            deno_test_ts_1.assertEq(isValid("abcdefghhgfedecba"), "YES");
            deno_test_ts_1.assertEq(isValid("abc"), "YES");
            deno_test_ts_1.assertEq(isValid("aabbcd"), "NO");
            deno_test_ts_1.assertEq(isValid("aabbccddeefghi"), "NO");
        }
    };
});

__instantiate("sherlock_strings");


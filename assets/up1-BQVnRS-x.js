import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
var r = e(t()),
  i = n(),
  a = 2 * Math.PI * 45;
function o() {
  let [e, t] = (0, r.useState)(0),
    [n, o] = (0, r.useState)(!1),
    [s, c] = (0, r.useState)(!1),
    l = (0, r.useRef)(null),
    u = (0, r.useRef)(!1);
  ((0, r.useEffect)(() => {
    if (!n) return;
    let e = setInterval(() => {
      t((t) => (t >= 100 ? (clearInterval(e), 100) : Math.min(100, t + 1)));
    }, 45);
    return () => clearInterval(e);
  }, [n]),
    (0, r.useEffect)(() => {
      if (e >= 100) {
        let e = setTimeout(() => c(!0), 500);
        return () => clearTimeout(e);
      }
    }, [e]),
    (0, r.useEffect)(() => {
      let e = new URLSearchParams(window.location.search);
      Array.from(e.keys()).length > 0 &&
        sessionStorage.setItem(`vendepay_checkout_params`, e.toString());
    }, []),
    (0, r.useEffect)(() => {
      if (!s || u.current || !l.current) return;
      u.current = !0;
      let e = new URLSearchParams(
        window.location.search ||
          sessionStorage.getItem(`vendepay_checkout_params`) ||
          ``,
      );
      e.set(`upsellId`, `d008b783-7445-4ec4-956c-865ae6c660ef`);
      let t = document.createElement(`script`);
      ((t.src = `https://widget.vendepay.com/upsell-widget/v1/vendepay-upsell-widget-1.0.16.js?${e.toString()}`),
        (t.async = !0),
        (t.onload = () => {
          window.VendepayUpsellWidget?.showIframe(`vendepay-upsell-container`);
        }),
        document.body.appendChild(t));
    }, [s]));
  let d = n
    ? e < 100
      ? `Activating...`
      : `Activation complete!`
    : `Click to start`;
  return (0, i.jsxs)(`main`, {
    className: `min-h-screen bg-[#f7f8fa]`,
    children: [
      (0, i.jsx)(`section`, {
        className: `bg-[#dc2626] py-3 px-4`,
        children: (0, i.jsx)(`h1`, {
          className: `text-white font-bold text-[15px] sm:text-[17px] text-center leading-snug`,
          children: `⚠️ Attention! Your access to the application is not yet 100% complete...`,
        }),
      }),
      (0, i.jsxs)(`div`, {
        className: `max-w-[720px] mx-auto px-4`,
        children: [
          (0, i.jsxs)(`section`, {
            className: `pt-8 text-center`,
            children: [
              (0, i.jsxs)(`p`, {
                className: `text-[#475569] text-[17px] leading-relaxed`,
                children: [
                  `The app was recently updated to `,
                  (0, i.jsx)(`span`, {
                    className: `font-bold`,
                    children: `version 2.0`,
                  }),
                  ` — and all that's missing is your final activation.`,
                ],
              }),
              (0, i.jsxs)(`p`, {
                className: `text-[#475569] text-[17px] leading-relaxed mt-4`,
                children: [
                  (0, i.jsx)(`span`, {
                    className: `font-bold`,
                    children: `Activate now`,
                  }),
                  ` and start earning up to`,
                  ` `,
                  (0, i.jsx)(`span`, {
                    className: `font-bold`,
                    children: `3× more`,
                  }),
                  `. 🚀`,
                ],
              }),
            ],
          }),
          (0, i.jsxs)(`section`, {
            className: `mt-8`,
            children: [
              (0, i.jsx)(`p`, {
                className: `text-[#475569] text-[15px] text-center mb-4`,
                children: `Click the button below to start the activation process.`,
              }),
              (0, i.jsx)(`button`, {
                onClick: () => o(!0),
                disabled: n,
                className: `w-full h-[56px] rounded-[14px] bg-[#22c55e] text-white font-bold text-[18px] tracking-wide active:scale-[0.99] transition-all disabled:opacity-95`,
                children: s ? `APP ACTIVATED` : `ACTIVATE APP 2.0`,
              }),
            ],
          }),
          (0, i.jsx)(`section`, {
            className: `mt-10 flex justify-center`,
            children: (0, i.jsxs)(`div`, {
              className: `relative w-[250px] h-[250px]`,
              children: [
                (0, i.jsxs)(`svg`, {
                  viewBox: `0 0 100 100`,
                  className: `w-full h-full -rotate-90`,
                  children: [
                    (0, i.jsx)(`circle`, {
                      cx: `50`,
                      cy: `50`,
                      r: `45`,
                      fill: `none`,
                      stroke: `#e5e7eb`,
                      strokeWidth: `8`,
                    }),
                    (0, i.jsx)(`circle`, {
                      cx: `50`,
                      cy: `50`,
                      r: `45`,
                      fill: `none`,
                      stroke: s ? `#dc2626` : `#22c55e`,
                      strokeWidth: `8`,
                      strokeLinecap: `round`,
                      strokeDasharray: a,
                      strokeDashoffset: a - (a * e) / 100,
                      style: { transition: `stroke-dashoffset 0.2s linear` },
                    }),
                  ],
                }),
                (0, i.jsxs)(`div`, {
                  className: `absolute inset-0 flex flex-col items-center justify-center`,
                  children: [
                    (0, i.jsxs)(`span`, {
                      className: `text-[30px] font-extrabold ${s ? `text-[#dc2626]` : `text-[#475569]`}`,
                      children: [e, `%`],
                    }),
                    (0, i.jsx)(`span`, {
                      className: `text-[13px] font-bold mt-1 ${s ? `text-[#dc2626]` : `text-[#64748b]`}`,
                      children: d,
                    }),
                  ],
                }),
              ],
            }),
          }),
          s &&
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(`section`, {
                  className: `mt-6 text-center bg-[#eff6ff] rounded-[14px] p-5`,
                  children: [
                    (0, i.jsx)(`h3`, {
                      className: `text-[#2563eb] text-[20px] font-extrabold`,
                      children: `✓ Activation complete!`,
                    }),
                    (0, i.jsx)(`p`, {
                      className: `text-[#2563eb] text-[15px] mt-2`,
                      children: `Your application has been updated and is ready to use.`,
                    }),
                  ],
                }),
                (0, i.jsx)(`section`, {
                  className: `mt-6 pb-16`,
                  children: (0, i.jsx)(`div`, {
                    id: `vendepay-upsell-container`,
                    ref: l,
                  }),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
export { o as component };

import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
import { n as r, r as i } from "./index-DR5iDunX.js";
import { t as a } from "./createLucideIcon-CgQsGnsD.js";
import { t as o } from "./lock-CGcujdFZ.js";
import { r as s, t as c } from "./checkout-Cr0clKbN.js";
var l = a(`badge-check`, [
    [
      `path`,
      {
        d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
        key: `3c2336`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  u = a(`music-2`, [
    [`circle`, { cx: `8`, cy: `18`, r: `4`, key: `1fc0mg` }],
    [`path`, { d: `M12 18V2l7 4`, key: `g04rme` }],
  ]),
  d = a(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  f = a(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  p = a(`zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  m = e(t()),
  h = n();
function g() {
  let [e, t] = (0, m.useState)({ m: 4, s: 59 });
  (0, m.useEffect)(() => {
    let e = setInterval(() => {
      t((e) =>
        e.m === 0 && e.s === 0
          ? e
          : e.s === 0
            ? { m: e.m - 1, s: 59 }
            : { m: e.m, s: e.s - 1 },
      );
    }, 1e3);
    return () => clearInterval(e);
  }, []);
  let [n, a] = (0, m.useState)(c);
  (0, m.useEffect)(() => {
    a(r(c));
  }, []);
  let g = (e) => e.toString().padStart(2, `0`);
  return (0, h.jsxs)(`div`, {
    className: `min-h-screen bg-black max-w-[430px] mx-auto pb-8 text-white`,
    children: [
      (0, h.jsxs)(`div`, {
        className: `relative bg-gradient-to-r from-pink via-[#FF3D6B] to-pink py-2.5 px-4 flex items-center justify-center gap-2 overflow-hidden`,
        children: [
          (0, h.jsx)(`div`, {
            className: `absolute inset-0 bg-white/10 animate-pulse`,
          }),
          (0, h.jsx)(f, { className: `text-white relative z-10`, size: 14 }),
          (0, h.jsx)(`span`, {
            className: `text-white text-[12px] font-bold uppercase tracking-wider relative z-10`,
            children: `Offer expires in`,
          }),
          (0, h.jsxs)(`div`, {
            className: `flex items-center gap-1 relative z-10 ml-1`,
            children: [
              (0, h.jsx)(`span`, {
                className: `bg-white text-pink text-[12px] font-black px-1.5 py-0.5 rounded-md tabular-nums`,
                children: g(e.m),
              }),
              (0, h.jsx)(`span`, {
                className: `text-white font-black text-[12px]`,
                children: `:`,
              }),
              (0, h.jsx)(`span`, {
                className: `bg-white text-pink text-[12px] font-black px-1.5 py-0.5 rounded-md tabular-nums`,
                children: g(e.s),
              }),
            ],
          }),
        ],
      }),
      (0, h.jsxs)(`div`, {
        className: `relative bg-black px-5 pt-7 pb-10 overflow-hidden`,
        children: [
          (0, h.jsx)(`div`, {
            className: `absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-pink/25 blur-[80px]`,
          }),
          (0, h.jsx)(`div`, {
            className: `absolute top-10 left-0 w-[160px] h-[160px] rounded-full bg-[#25F4EE]/20 blur-[60px]`,
          }),
          (0, h.jsxs)(`div`, {
            className: `relative z-10 flex flex-col items-center`,
            children: [
              (0, h.jsxs)(`div`, {
                className: `flex items-center gap-1.5 mb-4`,
                children: [
                  (0, h.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full bg-pink animate-pulse`,
                  }),
                  (0, h.jsx)(`span`, {
                    className: `text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]`,
                    children: `Withdrawal Paused`,
                  }),
                  (0, h.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full bg-[#25F4EE] animate-pulse`,
                  }),
                ],
              }),
              (0, h.jsx)(`h1`, {
                className: `text-white text-[36px] font-black text-center leading-[1] tracking-tight`,
                children: `Hey,`,
              }),
              (0, h.jsx)(`h2`, {
                className: `text-[36px] font-black text-center leading-[1] tracking-tight mt-1`,
                children: (0, h.jsx)(`span`, {
                  className: `bg-gradient-to-r from-[#25F4EE] via-white to-pink bg-clip-text text-transparent`,
                  children: `wait a second!`,
                }),
              }),
              (0, h.jsxs)(`p`, {
                className: `text-white/80 text-[14px] font-medium text-center max-w-[290px] mt-4 leading-snug`,
                children: [
                  `Your reward of `,
                  (0, h.jsx)(`span`, {
                    className: `text-white font-black bg-pink px-1.5 rounded`,
                    children: `$2,800.00`,
                  }),
                  ` is still reserved for a few more minutes`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, h.jsxs)(`div`, {
        className: `bg-[#0a0a0a] flex flex-col items-center px-4 pt-5`,
        children: [
          (0, h.jsx)(`div`, {
            className: `w-full bg-[#161616] rounded-[20px] p-4 mb-3 border border-white/5`,
            children: (0, h.jsxs)(`div`, {
              className: `flex items-start gap-3`,
              children: [
                (0, h.jsx)(`div`, {
                  className: `w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-pink to-[#FF6B8A] flex items-center justify-center shrink-0 shadow-lg shadow-pink/30`,
                  children: (0, h.jsx)(f, {
                    className: `text-white`,
                    size: 20,
                  }),
                }),
                (0, h.jsxs)(`div`, {
                  className: `flex-1`,
                  children: [
                    (0, h.jsx)(`p`, {
                      className: `text-white text-[14px] font-bold leading-tight`,
                      children: `You're about to receive $2,800.00`,
                    }),
                    (0, h.jsxs)(`p`, {
                      className: `text-white/60 text-[12px] leading-snug mt-1`,
                      children: [
                        `The security verification is the `,
                        (0, h.jsx)(`span`, {
                          className: `text-white font-semibold`,
                          children: `final step`,
                        }),
                        ` to release your withdrawal.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, h.jsx)(`div`, {
            className: `w-full relative rounded-[20px] p-[1.5px] mb-3 bg-gradient-to-br from-[#25F4EE] via-white/30 to-pink`,
            children: (0, h.jsxs)(`div`, {
              className: `bg-[#0f0f0f] rounded-[19px] p-5 relative overflow-hidden`,
              children: [
                (0, h.jsx)(`div`, {
                  className: `absolute -top-12 -right-12 w-[140px] h-[140px] rounded-full bg-pink/15 blur-2xl`,
                }),
                (0, h.jsx)(`div`, {
                  className: `absolute -bottom-12 -left-12 w-[120px] h-[120px] rounded-full bg-[#25F4EE]/10 blur-2xl`,
                }),
                (0, h.jsxs)(`div`, {
                  className: `relative z-10 text-center`,
                  children: [
                    (0, h.jsxs)(`div`, {
                      className: `inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full mb-3`,
                      children: [
                        (0, h.jsx)(s, {
                          className: `text-[#25F4EE]`,
                          size: 12,
                        }),
                        (0, h.jsx)(`span`, {
                          className: `text-white text-[10px] font-black uppercase tracking-[0.15em]`,
                          children: `Exclusive discount`,
                        }),
                      ],
                    }),
                    (0, h.jsxs)(`p`, {
                      className: `text-white/60 text-[13px]`,
                      children: [
                        `From `,
                        (0, h.jsx)(`span`, {
                          className: `line-through`,
                          children: `$37.12`,
                        }),
                        ` for:`,
                      ],
                    }),
                    (0, h.jsx)(`p`, {
                      className: `text-white text-[52px] font-black leading-none mt-2 tracking-tight`,
                      children: (0, h.jsx)(`span`, {
                        className: `bg-gradient-to-r from-[#25F4EE] to-white bg-clip-text text-transparent`,
                        children: `$19.70`,
                      }),
                    }),
                    (0, h.jsxs)(`div`, {
                      className: `inline-flex items-center gap-1.5 bg-pink/15 border border-pink/30 px-3 py-1 rounded-full mt-3`,
                      children: [
                        (0, h.jsx)(p, {
                          className: `text-pink fill-pink`,
                          size: 11,
                        }),
                        (0, h.jsx)(`span`, {
                          className: `text-[#FF6B8A] text-[11px] font-black`,
                          children: `Save $17.42`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, h.jsx)(`div`, {
            className: `w-full grid grid-cols-3 gap-2 mb-3`,
            children: [
              {
                icon: (0, h.jsx)(o, { size: 18, style: { color: `#25F4EE` } }),
                label: `Payment
secure`,
              },
              {
                icon: (0, h.jsx)(l, { size: 18, style: { color: `#FE2C55` } }),
                label: `100%
refundable`,
              },
              {
                icon: (0, h.jsx)(p, { size: 18, style: { color: `#FFD700` } }),
                label: `Instant
release`,
              },
            ].map((e, t) =>
              (0, h.jsxs)(
                `div`,
                {
                  className: `bg-[#161616] rounded-[14px] p-2.5 flex flex-col items-center text-center border border-white/5`,
                  children: [
                    (0, h.jsx)(`div`, { className: `mb-1`, children: e.icon }),
                    (0, h.jsx)(`span`, {
                      className: `text-white text-[10px] font-bold leading-tight whitespace-pre-line`,
                      children: e.label,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, h.jsxs)(`div`, {
            className: `w-full bg-[#161616] rounded-[20px] p-4 mb-4 border border-white/5`,
            children: [
              (0, h.jsxs)(`div`, {
                className: `flex items-center justify-between mb-3 px-1`,
                children: [
                  (0, h.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [
                      (0, h.jsx)(u, { className: `text-pink`, size: 13 }),
                      (0, h.jsx)(`span`, {
                        className: `text-white text-[12px] font-bold`,
                        children: `+2,847 payouts today`,
                      }),
                    ],
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `flex items-center gap-0.5`,
                    children: [
                      [0, 1, 2, 3, 4].map((e) =>
                        (0, h.jsx)(
                          d,
                          {
                            className: `fill-[#FFD700] text-[#FFD700]`,
                            size: 11,
                          },
                          e,
                        ),
                      ),
                      (0, h.jsx)(`span`, {
                        className: `text-white text-[11px] font-bold ml-1`,
                        children: `4.9`,
                      }),
                    ],
                  }),
                ],
              }),
              [
                {
                  img: `/assets/back-avatar-1-B739FASV.png`,
                  name: `Brianna Sanders`,
                  loc: `Austin, TX`,
                  text: `paid the fee and in seconds the $2,800 hit my Cash App, I cried 😭💸`,
                  time: `8 min ago`,
                },
                {
                  img: `/assets/back-avatar-2-yldg5XHd.jpg`,
                  name: `Tyler Miller`,
                  loc: `Dallas, TX`,
                  text: `thought it was a scam but it's real, got every dollar 🤝`,
                  time: `19 min ago`,
                },
                {
                  img: `/assets/back-avatar-3-Cr0ZmILk.jpeg`,
                  name: `Julia Vaughn`,
                  loc: `Phoenix, AZ`,
                  text: `paid the release fee and did not think twice, the payout was worth it`,
                  time: `33 min ago`,
                },
              ].map((e) =>
                (0, h.jsxs)(
                  `div`,
                  {
                    className: `flex gap-3 items-start py-2.5 border-b border-white/5 last:border-0 last:pb-0`,
                    children: [
                      (0, h.jsx)(`img`, {
                        src: e.img,
                        alt: e.name,
                        className: `w-[40px] h-[40px] rounded-full object-cover shrink-0 ring-2 ring-pink/40`,
                      }),
                      (0, h.jsxs)(`div`, {
                        className: `flex-1 min-w-0`,
                        children: [
                          (0, h.jsxs)(`div`, {
                            className: `flex items-center gap-1.5 flex-wrap`,
                            children: [
                              (0, h.jsx)(`span`, {
                                className: `text-white text-[13px] font-bold`,
                                children: e.name,
                              }),
                              (0, h.jsx)(l, {
                                className: `text-[#25F4EE]`,
                                size: 11,
                              }),
                              (0, h.jsx)(`span`, {
                                className: `text-white/40 text-[10px]`,
                                children: e.loc,
                              }),
                            ],
                          }),
                          (0, h.jsxs)(`p`, {
                            className: `text-white/80 text-[12px] italic leading-snug mt-0.5`,
                            children: [`"`, e.text, `"`],
                          }),
                          (0, h.jsx)(`p`, {
                            className: `text-white/40 text-[10px] mt-0.5`,
                            children: e.time,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            ],
          }),
          (0, h.jsxs)(`div`, {
            className: `w-full sticky bottom-3 z-20`,
            children: [
              (0, h.jsx)(`a`, {
                href: n,
                onClick: () =>
                  i(`InitiateCheckout`, {
                    currency: `USD`,
                    value: 20.7,
                    content_type: `product`,
                    content_id: `withdrawal-release-discount`,
                  }),
                className: `w-full h-[60px] bg-gradient-to-r from-pink via-[#FF3D6B] to-pink text-white font-black text-[15px] rounded-[16px] flex items-center justify-center gap-2 active:scale-[0.97] transition-all shadow-[0_8px_30px_rgba(254,44,85,0.5)] uppercase tracking-wider`,
                children: `Release $2,800.00`,
              }),
              (0, h.jsxs)(`div`, {
                className: `flex items-center justify-center gap-1.5 mt-2.5 bg-[#25F4EE]/10 border border-[#25F4EE]/30 rounded-full py-1.5 px-3 mx-auto w-fit`,
                children: [
                  (0, h.jsx)(s, { className: `text-[#25F4EE]`, size: 12 }),
                  (0, h.jsx)(`span`, {
                    className: `text-[#25F4EE] text-[11px] font-bold`,
                    children: `Refund of $19.70 in 1 minute`,
                  }),
                ],
              }),
            ],
          }),
          (0, h.jsxs)(`div`, {
            className: `w-full mt-6 pt-5 border-t border-white/5`,
            children: [
              (0, h.jsx)(`p`, {
                className: `text-white/40 text-[10px] uppercase tracking-[0.2em] text-center font-bold mb-3`,
                children: `Regulated by`,
              }),
              (0, h.jsxs)(`div`, {
                className: `flex items-center justify-center gap-6 bg-white rounded-[14px] py-4 px-5`,
                children: [
                  (0, h.jsx)(`img`, {
                    src: `/assets/govbr-logo-DUdxlXZj.png`,
                    alt: `gov.br`,
                    className: `h-[26px] object-contain`,
                  }),
                  (0, h.jsx)(`div`, { className: `w-px h-8 bg-gray-300` }),
                  (0, h.jsx)(`img`, {
                    src: `/assets/receita-federal-new-CMD7EUle.png`,
                    alt: `IRS`,
                    className: `h-[40px] object-contain`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { g as component };

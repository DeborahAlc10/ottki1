import { a as e, n as t, t as n } from "./jsx-runtime-C27Mmbu5.js";
import { _ as r } from "./index-DR5iDunX.js";
import { t as i } from "./createLucideIcon-CgQsGnsD.js";
import { t as a } from "./check-CrDZetXF.js";
import { t as o } from "./chevron-right-DNeRKKcS.js";
var s = i(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  c = i(`user`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  f = i(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1lvqbn` }]]),
  g = i(`ticket`, [
    [
      `path`,
      {
        d: `M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z`,
        key: `qn84l0`,
      },
    ],
    [`path`, { d: `M13 5v2`, key: `dyzc3o` }],
    [`path`, { d: `M13 17v2`, key: `9wwlr5` }],
    [`path`, { d: `M13 11v2`, key: `53n1uv` }],
  ]),
  l = e(t()),
  u = n(),
  m = (() => {
    let e = (e) =>
        e.toLocaleDateString(`en-US`, { month: `short`, day: `numeric` }),
      t = new Date(),
      n = new Date(t.getTime() + 12096e5);
    return `${e(t)} - ${e(n)}`;
  })();
function d() {
  let e = r(),
    [t, n] = (0, l.useState)(!0);
  return (0, u.jsxs)(`div`, {
    className: `min-h-screen bg-background max-w-[430px] mx-auto`,
    children: [
      (0, u.jsxs)(`header`, {
        className: `h-[60px] flex items-center justify-between px-4 bg-white sticky top-0 z-50`,
        children: [
          (0, u.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, u.jsx)(f, { className: `text-foreground`, size: 28 }),
              (0, u.jsx)(`img`, {
                src: `/assets/tiktok-logo-full-BWCPYanr.png`,
                alt: `TikTok`,
                className: `h-[18px] object-contain`,
              }),
            ],
          }),
          (0, u.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, u.jsxs)(`div`, {
                className: `bg-white border border-[#E5E7EB] rounded-full h-8 flex items-center px-1 pr-3 gap-1.5`,
                children: [
                  (0, u.jsx)(`img`, {
                    src: `/assets/p-saldo-Cbw24AHL.svg`,
                    alt: `P`,
                    width: 24,
                    height: 24,
                    className: `w-6 h-6`,
                  }),
                  (0, u.jsx)(`span`, {
                    className: `font-bold text-foreground text-sm`,
                    children: `2.800`,
                  }),
                  (0, u.jsx)(`span`, {
                    className: `text-pink text-xs font-semibold`,
                    children: `Cash out`,
                  }),
                ],
              }),
              (0, u.jsxs)(`div`, {
                className: `border border-[#E5E7EB] rounded-full h-8 flex items-center px-3 gap-1`,
                children: [
                  (0, u.jsx)(g, { className: `text-foreground`, size: 14 }),
                  (0, u.jsx)(`span`, {
                    className: `text-foreground text-sm font-medium`,
                    children: `0`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      t &&
        (0, u.jsx)(`div`, {
          className: `fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md`,
          children: (0, u.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center max-w-[320px] w-[85%] rounded-[32px] p-8`,
            style: { backgroundColor: `rgba(37,37,37,0.75)` },
            children: [
              (0, u.jsx)(`img`, {
                src: `/assets/coin-p-D_rWn80y.png`,
                alt: `Coin`,
                width: 80,
                height: 80,
                className: `w-[80px] h-[80px] object-contain`,
              }),
              (0, u.jsx)(`p`, {
                className: `text-white text-2xl font-extrabold mt-6`,
                children: `Verification Complete`,
              }),
              (0, u.jsx)(`p`, {
                className: `text-white/90 text-center text-sm mt-2 leading-relaxed`,
                children: `You've done great as an active user on the platform. Your engagement has been recognized and your reward is now available.`,
              }),
              (0, u.jsx)(`button`, {
                onClick: () => n(!1),
                className: `mt-8 w-full py-3 bg-pink text-white font-bold text-[15px] rounded-[12px] active:scale-[0.97] transition-all`,
                children: `Continue`,
              }),
            ],
          }),
        }),
      (0, u.jsx)(`div`, {
        className: `px-4 mt-2`,
        children: (0, u.jsxs)(`div`, {
          className: `rounded-[24px] overflow-hidden bg-pink`,
          children: [
            (0, u.jsxs)(`div`, {
              className: `p-5 pb-6 relative overflow-hidden bg-pink`,
              children: [
                (0, u.jsxs)(`div`, {
                  className: `relative z-10`,
                  children: [
                    (0, u.jsx)(`p`, {
                      className: `text-white/90 text-[11px] font-medium tracking-wide mb-1.5`,
                      children: m,
                    }),
                    (0, u.jsxs)(`h1`, {
                      className: `text-[26px] font-[900] leading-[1.1] text-white max-w-[180px]`,
                      children: [
                        `Verification Complete You earned `,
                        (0, u.jsx)(`span`, {
                          className: `text-yellow`,
                          children: `$2,800`,
                        }),
                      ],
                    }),
                    (0, u.jsx)(`p`, {
                      className: `text-white text-[13px] leading-snug mt-3 font-medium max-w-[210px]`,
                      children: `Your Digital Reward has been successfully unlocked.`,
                    }),
                  ],
                }),
                (0, u.jsx)(`img`, {
                  src: `/assets/phone-hand-CSBHJ1bd.png`,
                  alt: `Hand holding phone with coins`,
                  width: 220,
                  height: 293,
                  className: `absolute -top-3 -right-12 w-[220px] h-auto z-[5] object-contain object-bottom pointer-events-none`,
                }),
                (0, u.jsx)(`div`, {
                  className: `h-[110px] mt-8 flex items-end justify-between relative z-10`,
                  children: [850, 720, 680, 550].map((e) =>
                    (0, u.jsxs)(
                      `div`,
                      {
                        className: `w-[72px] h-[105px] flex flex-col items-center justify-center rounded-[36px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)]`,
                        style: { backgroundColor: `#F9FD5A` },
                        children: [
                          (0, u.jsx)(`div`, {
                            className: `w-[50px] h-[50px] rounded-full border-[3px] border-pink bg-pink flex items-center justify-center`,
                            children: (0, u.jsx)(c, {
                              className: `text-yellow`,
                              size: 30,
                            }),
                          }),
                          (0, u.jsxs)(`span`, {
                            className: `text-[#1a1a1a] font-extrabold text-[14px] mt-1.5`,
                            children: [`$`, e],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, u.jsxs)(`div`, {
              className: `bg-pink px-5 pb-5`,
              children: [
                (0, u.jsx)(`button`, {
                  onClick: () => e({ to: `/resgatar` }),
                  className: `w-full h-[52px] bg-yellow text-foreground font-[800] text-[17px] rounded-full mt-4 flex items-center justify-center active:scale-[0.98] transition-transform shadow-[0px_2px_8px_rgba(0,0,0,0.08)]`,
                  children: `Claim Reward`,
                }),
                (0, u.jsxs)(`p`, {
                  className: `mt-5 text-center text-white text-[13px]`,
                  children: [
                    `Invite code:`,
                    ` `,
                    (0, u.jsxs)(`span`, {
                      className: `font-bold text-yellow underline underline-offset-4 cursor-pointer`,
                      children: [
                        `JN869241770351`,
                        (0, u.jsx)(s, { className: `inline ml-1`, size: 14 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, u.jsxs)(`div`, {
              className: `bg-pink px-5 py-6`,
              children: [
                (0, u.jsx)(`h2`, {
                  className: `text-white text-[18px] font-black mb-3`,
                  children: `Summary of your activity on the platform`,
                }),
                (0, u.jsx)(`p`, {
                  className: `text-white/90 text-[13px] leading-relaxed mb-5 font-medium`,
                  children: `Verification Complete As an active user on the platform, you're being rewarded based on your ongoing engagement.`,
                }),
                (0, u.jsx)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    `Over 100 videos shared with friends`,
                    `Over 250 hours watched on the platform`,
                    `Over 420 ads watched`,
                    `Over 1,000 videos liked`,
                    `7 consecutive days of daily login`,
                    `Consistent activity validated throughout the entire campaign period`,
                  ].map((e) =>
                    (0, u.jsxs)(
                      `div`,
                      {
                        className: `flex items-start gap-2.5`,
                        children: [
                          (0, u.jsx)(`div`, {
                            className: `w-[20px] h-[20px] rounded-full bg-yellow flex items-center justify-center shrink-0 mt-0.5`,
                            children: (0, u.jsx)(a, {
                              className: `text-pink`,
                              size: 11,
                              strokeWidth: 3,
                            }),
                          }),
                          (0, u.jsx)(`span`, {
                            className: `text-white text-[13px] leading-snug font-medium`,
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, u.jsx)(`p`, {
                  className: `text-white/80 text-[12px] leading-relaxed mt-5 font-medium`,
                  children: `These actions confirm that all criteria required by the campaign have been fully met.`,
                }),
              ],
            }),
            (0, u.jsxs)(`div`, {
              className: `bg-pink px-5 py-6 border-t border-dashed border-white/30`,
              children: [
                (0, u.jsx)(`h2`, {
                  className: `text-white text-[18px] font-black mb-5`,
                  children: `How you completed verification`,
                }),
                (0, u.jsx)(`p`, {
                  className: `text-white text-[13px] font-medium leading-[1.4]`,
                  children: `1. You shared your link and your friends downloaded the app, signed up, and entered your invite code.`,
                }),
                (0, u.jsx)(`p`, {
                  className: `mt-1`,
                  children: (0, u.jsx)(`span`, {
                    className: `text-yellow font-bold text-[13px]`,
                    children: `$1,000 received`,
                  }),
                }),
                (0, u.jsx)(`div`, {
                  className: `w-full border-t border-dotted border-white/20 my-5`,
                }),
                (0, u.jsxs)(`div`, {
                  className: `flex items-start justify-between`,
                  children: [
                    (0, u.jsxs)(`div`, {
                      className: `flex-1`,
                      children: [
                        (0, u.jsx)(`p`, {
                          className: `text-white text-[13px] font-medium leading-[1.4]`,
                          children: `2. Your friends watched 30 minutes of videos per day during the entire period.`,
                        }),
                        (0, u.jsx)(`p`, {
                          className: `mt-1`,
                          children: (0, u.jsx)(`span`, {
                            className: `text-yellow font-bold text-[13px]`,
                            children: `$2,700 received`,
                          }),
                        }),
                      ],
                    }),
                    (0, u.jsx)(`span`, {
                      className: `bg-dark-red text-white text-[11px] font-bold px-4 py-2 rounded-full ml-3 shrink-0`,
                      children: `Completed`,
                    }),
                  ],
                }),
                (0, u.jsxs)(`div`, {
                  className: `mt-10 px-2 relative`,
                  children: [
                    (0, u.jsx)(`div`, {
                      className: `absolute top-[38px] left-6 right-6 h-[3px] bg-yellow rounded-full`,
                    }),
                    (0, u.jsx)(`div`, {
                      className: `flex items-center justify-between relative`,
                      children: [
                        { d: `3 days`, v: `+$300` },
                        { d: `7 days`, v: `+$500` },
                        { d: `14 days`, v: `+$1,000` },
                      ].map((e) =>
                        (0, u.jsxs)(
                          `div`,
                          {
                            className: `flex flex-col items-center`,
                            children: [
                              (0, u.jsx)(`span`, {
                                className: `bg-white/20 text-[9px] px-2 py-0.5 rounded-full text-white mb-2 font-medium`,
                                children: e.d,
                              }),
                              (0, u.jsx)(`div`, {
                                className: `bg-yellow border-2 border-yellow w-5 h-5 rounded-full flex items-center justify-center z-10`,
                                children: (0, u.jsx)(a, {
                                  className: `text-pink`,
                                  size: 10,
                                  strokeWidth: 3,
                                }),
                              }),
                              (0, u.jsx)(`span`, {
                                className: `text-yellow font-black text-[11px] mt-2`,
                                children: e.v,
                              }),
                            ],
                          },
                          e.d,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, u.jsx)(`div`, {
                  className: `w-full border-t border-dashed border-white/30 mt-8`,
                }),
                (0, u.jsxs)(`p`, {
                  className: `text-center text-white/80 text-[12px] font-medium py-8 cursor-pointer hover:underline flex items-center justify-center gap-1`,
                  children: [`View details `, (0, u.jsx)(o, { size: 14 })],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { d as component };

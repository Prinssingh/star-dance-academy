"use client";

import { useState } from "react";
const Newmember = [
  {
    id: "registration",
    name: "Registration Fee",
    time: "-",
    duration: "-",
    fee: 500,
    icon: "📝",
    badge: "Mandatory",
    accent: "orange",
    special: false,
  },
];

const batches = [
  {
    id: "personal",
    session: "Custom",
    name: "Personal Class",
    time: "Flexible",
    duration: "Flexible",
    fee: 2500,
    icon: "🧑‍🏫",
    badge: "1-on-1",
    accent: "dark", // make sure gold exists in accentStyles
    special: true,
  },
  {
    id: "morning",
    session: "Morning",
    name: "Morning Session",
    time: "8:30 AM – 10:00 AM",
    duration: "90 min",
    fee: 1500,
    icon: "☀️",
    badge: "Early Bird",
    accent: "orange",
    special: false,
  },
  {
    id: "girls",
    session: "Evening",
    name: "Girls Batch",
    time: "04:00 PM – 05:00 PM",
    duration: "60 min",
    fee: 1200,
    icon: "👧",
    badge: "Girls Only",
    accent: "pink",
    special: false,
  },
  {
    id: "kids",
    session: "Evening",
    name: "Kids Batch",
    time: "05:00 PM – 06:00 PM",
    duration: "60 min",
    fee: 1200,
    icon: "🧒",
    badge: "Kids",
    accent: "orange",
    special: false,
  },
  {
    id: "zumba",
    session: "Evening",
    name: "Zumba Batch",
    time: "06:00 PM – 07:00 PM",
    duration: "60 min",
    feeOriginal: 1800,
    fee: 1500,
    icon: "🎵",
    badge: "Fitness Dance",
    accent: "pink",
    special: false,
  },
  {
    id: "combine",
    session: "Evening",
    name: "Combine Batch",
    time: "07:00 PM – 08:00 PM",
    duration: "60 min",
    fee: 1200,
    icon: "🕺",
    badge: "All Levels",
    accent: "dark",
    special: false,
  },
  {
    id: "special",
    session: "Evening",
    name: "Special Batch",
    time: "08:00 PM – 09:30 PM",
    duration: "60 min",
    feeOriginal: 2000,
    fee: 1800,
    icon: "⭐",
    badge: "Premium",
    accent: "special",
    special: true,
  },
];

const MEMBERSHIPS = [
  {
    id: "m3",
    name: "3 Months Plan",
    duration: "3 Months",
    feeOriginal: 4500,
    fee: 3500,
    icon: "💃",
    accent: "pink",
  },
  {
    id: "m6",
    name: "6 Months Plan",
    duration: "6 Months",
    feeOriginal: 9000,
    fee: 6500,
    icon: "🔥",
    accent: "purple",
  },
  {
    id: "m12",
    name: "1 Year Plan",
    duration: "12 Months",
    feeOriginal: 18000,
    fee: 12000,
    icon: "🏆",
    accent: "special",
  },
];

const accentStyles = {
  pink: {
    card: "bg-white border border-[#f6466c]/20 hover:shadow-[0_16px_40px_rgba(246,70,108,0.15)]",
    bar: "bg-[#f6466c]",
    slot: "text-[#f6466c]",
    badge: "bg-[#f6466c]/10 text-[#f6466c]",
    icon: "bg-[#f6466c]/10",
  },
  orange: {
    card: "bg-white border border-[#f28b00]/20 hover:shadow-[0_16px_40px_rgba(242,139,0,0.15)]",
    bar: "bg-[#f28b00]",
    slot: "text-[#f28b00]",
    badge: "bg-[#f28b00]/10 text-[#f28b00]",
    icon: "bg-[#f28b00]/10",
  },
  dark: {
    card: "bg-white border border-[#1a1a1a]/10 hover:shadow-[0_16px_40px_rgba(26,26,26,0.1)]",
    bar: "bg-[#1a1a1a]",
    slot: "text-[#1a1a1a]",
    badge: "bg-[#1a1a1a]/8 text-[#1a1a1a]",
    icon: "bg-[#1a1a1a]/8",
  },
  special: {
    card: "bg-gradient-to-br from-[#f6466c] to-[#c8234a] border-none hover:shadow-[0_20px_50px_rgba(246,70,108,0.4)]",
    bar: "bg-white/30",
    slot: "text-white/70",
    badge: "bg-white/20 text-white",
    icon: "bg-white/20",
  },
};

function BatchCard({ batch, index }) {
  const s = accentStyles[batch.accent];
  const isSpecial = batch.accent === "special";

  return (
    <div
      className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer group overflow-hidden ${s.card}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${s.bar}`}
      />

      {/* Special star */}
      {isSpecial && (
        <span className="absolute right-4 top-4 text-3xl opacity-30">★</span>
      )}

      {/* Fee top-right */}
      <div className="absolute right-4 top-4 text-right">
        <div className="grid grid-cols-1">
          {typeof batch.feeOriginal === "number" && (
            <span
              className={`line-through mr-2 text-[0.875rem] md:text-[1rem] ${isSpecial ? "text-gray-200" : "text-gray-500"}`}
            >
              ₹{batch.feeOriginal.toLocaleString()}/-
            </span>
          )}
          <p
            className={`bebas text-3xl tracking-wide ${isSpecial ? "text-white" : "text-[#f6466c]"}`}
          >
            {typeof batch.fee === "number" && (
              <span className="text-[1.5rem]">
                ₹{batch.fee.toLocaleString()}
              </span>
            )}
          </p>

          <p
            className={`text-[9px] dmsans uppercase tracking-wider ${isSpecial ? "text-white/60" : "text-gray-400"}`}
          >
            / month
          </p>
        </div>
      </div>

      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${s.icon}`}
      >
        {batch.icon}
      </div>

      <p
        className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${s.slot}`}
      >
        {batch.time}
      </p>

      <h3
        className={`font-bold text-xl mb-3 ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
      >
        {batch.name}
      </h3>

      <span
        className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${s.badge}`}
      >
        {batch.badge}
      </span>
    </div>
  );
}

export default function DanceSchedule() {
  const [activeTab, setActiveTab] = useState("schedule");
  const morning = batches.filter((b) => b.session === "Morning");
  const evening = batches.filter((b) => b.session === "Evening");

  return (
    <div className=" bg-[#faf7f4] relative overflow-x-hidden ">
      {/* Google Fonts */}

      <div className="relative z-10 w-full ">
        {/* HEADER */}
        <div className="text-center py-20 grid justify-center items-center  mb-14 fade-up  pt-6 relative">
          {/* Background image */}
          <div
            className="absolute inset-0 -z-10  pointer-events-none"
            style={{
              backgroundImage: "url('/assets/about/about-1.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0  bg-linear-to-r from-black/90 via-black/70 to-black/50" />
          </div>

          <h1
            className="bebas text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight  mb-3 mt-20"
            style={{
              // fontSize: "clamp(60px, 12vw, 100px)",
              letterSpacing: "0.02em",
            }}
          >
            Batch
            <span className="block text-[#f6466c]">Schedule</span>
          </h1>
          <p className="text-gray-400">Timings & Fee Structure 2025</p>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-0 w-full pb-20">
          {/* TAB SWITCHER */}
          <div
            className="flex justify-center mb-10 fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="bg-white rounded-2xl p-1.5 flex gap-1 shadow-sm border border-black/5">
              {["schedule", "fees"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-2.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-200 dmsans ${
                    activeTab === tab
                      ? "bg-[#f6466c] text-white shadow-md"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab === "schedule" ? "🕐 Timings" : "₹ Fees"}
                </button>
              ))}
            </div>
          </div>

          {/* SCHEDULE TAB */}
          {activeTab === "schedule" && (
            <div className="fade-up">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#f28b00]/10 flex items-center justify-center text-lg">
                  ☀️
                </div>
                <div>
                  <h2 className="bebas text-3xl tracking-wider text-[#1a1a1a]">
                    Morning Batch
                  </h2>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest dmsans">
                    Daily Session
                  </p>
                </div>
              </div>

              {/* Morning hero card */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-5 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
                <span className="absolute text-[120px] right-2 top-0 leading-none opacity-5 select-none">
                  ☀️
                </span>
                <div>
                  <p className="text-[#f28b00] text-[10px] font-semibold tracking-[0.25em] uppercase dmsans mb-2">
                    Morning Session
                  </p>
                  <h3
                    className="bebas text-white leading-none"
                    style={{ fontSize: "44px" }}
                  >
                    Morning
                    <br />
                    Session
                  </h3>
                </div>
                {/* jfjf */}
                <div className="absolute right-8 top-3 text-right text-white">
                  <p
                    className={`bebas text-4xl tracking-wide font-semibold "}`}
                  >
                    <span className={`text-xs align-top mt-0.5 inline-block`}>
                      ₹
                    </span>
                    555
                  </p>
                  <p className={`text-[9px] dmsans uppercase tracking-wider }`}>
                    / month
                  </p>
                </div>

                <div className="shrink-0 md:mt-20 bg-[#f28b00]/20 border border-[#f28b00]/40 text-[#f28b00] bebas text-2xl tracking-wider px-6 py-3 rounded-full">
                  8:30 AM – 10:00 AM
                </div>
              </div>

              {/* Evening label */}
              <div className="flex items-center gap-3 mb-5 mt-8">
                <div className="w-10 h-10 rounded-xl bg-[#f6466c]/10 flex items-center justify-center text-lg">
                  🌆
                </div>
                <div>
                  <h2 className="bebas text-3xl tracking-wider text-[#1a1a1a]">
                    Evening Batches
                  </h2>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest dmsans">
                    5 Slots Available
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {evening.map((b, i) => (
                  <BatchCard key={b.id} batch={b} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* FEES TAB */}
          {activeTab === "fees" && (
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f28b00]/10 flex items-center justify-center text-lg">
                  ₹
                </div>
                <div>
                  <h2 className="bebas text-3xl tracking-wider text-[#1a1a1a]">
                    Fee Structure
                  </h2>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest dmsans">
                    Monthly Fees
                  </p>
                </div>
              </div>

              {/* new ragistrations */}
              <div className="flex flex-col mb-3 gap-3">
                {/* <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f28b00]/10 flex items-center justify-center text-lg">
                    📝
                  </div>
                  <div>
                    <h2 className="bebas text-3xl tracking-wider text-[#1a1a1a]">
                      New Member
                    </h2>
                    <p className="text-[11px] text-gray-400 uppercase tracking-widest dmsans">
                      One-Time Fee
                    </p>
                  </div>
                </div> */}

                {Newmember.map((n, i) => (
                  <div
                    key={n.id}
                    className="flex items-center justify-between rounded-2xl px-5 py-4 bg-white border border-black/5 hover:shadow-md transition-all"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-[#f28b00]/10">
                        {n.icon}
                      </div>

                      <div>
                        <p className="font-bold text-base playfair text-[#1a1a1a]">
                          {n.name}
                        </p>
                        <p className="text-xs text-gray-400 dmsans">
                          {n.badge}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-right">
                      <p className="bebas text-3xl tracking-wide text-[#1a1a1a]">
                        ₹{n.fee.toLocaleString()}/-
                      </p>

                      <p className="text-[10px] dmsans uppercase tracking-wider text-gray-400">
                        / one-time
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {batches.map((b, i) => {
                  const isSpecial = b.accent === "special";
                  return (
                    <div
                      key={b.id}
                      className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-200 group ${
                        isSpecial
                          ? "bg-linear-to-r from-[#f6466c] to-[#c8234a] shadow-lg"
                          : "bg-white border border-black/5 hover:shadow-md hover:translate-x-1"
                      }`}
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                            isSpecial
                              ? "bg-white/20"
                              : accentStyles[b.accent].icon
                          }`}
                        >
                          {b.icon}
                        </div>
                        <div>
                          <p
                            className={`font-bold text-base playfair ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
                          >
                            {b.name}
                          </p>
                          <p
                            className={`text-xs dmsans mt-0.5 ${isSpecial ? "text-white/60" : "text-gray-400"}`}
                          >
                            {b.time} · {b.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`bebas text-3xl tracking-wide ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
                        >
                          {typeof b.feeOriginal === "number" && (
                            <span
                              className={`line-through mr-2 text-[1.22rem] ${isSpecial ? "text-gray-200" : "text-gray-500"}`}
                            >
                              ₹{b.feeOriginal.toLocaleString()}/-
                            </span>
                          )}

                          {typeof b.fee === "number" && (
                            <span>₹{b.fee.toLocaleString()}</span>
                          )}
                        </p>

                        {/* <p
                          className={`bebas text-3xl tracking-wide ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
                        >
                          <span
                            className={`text-sm align-top mt-1.5 inline-block ${isSpecial ? "text-white/70" : "text-gray-400"}`}
                          >
                            ₹
                          </span>
                          {b.fee.toLocaleString()}
                        </p> */}
                        <p
                          className={`text-[10px] dmsans uppercase tracking-wider ${isSpecial ? "text-white/60" : "text-gray-400"}`}
                        >
                          / month
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col mt-9 gap-3">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f28b00]/10 flex items-center justify-center text-lg">
                    ₹
                  </div>
                  <div>
                    <h2 className="bebas text-3xl tracking-wider text-[#1a1a1a]">
                      Dance Memberships
                    </h2>
                    <p className="text-[11px] text-gray-400 uppercase tracking-widest dmsans">
                      Fees
                    </p>
                  </div>
                </div>
                {MEMBERSHIPS.map((m, i) => {
                  const isSpecial = m.accent === "special";

                  return (
                    <div
                      key={m.id}
                      className={`flex items-center justify-between rounded-2xl px-5 py-5 transition-all duration-200 group ${
                        isSpecial
                          ? "bg-gradient-to-r from-[#f6466c] to-[#c8234a] shadow-lg"
                          : "bg-white border border-black/5 hover:shadow-md hover:translate-x-1"
                      }`}
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                            isSpecial
                              ? "bg-white/20"
                              : accentStyles[m.accent]?.icon
                          }`}
                        >
                          {m.icon}
                        </div>

                        <div>
                          <p
                            className={`font-bold text-base playfair ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
                          >
                            {m.name}
                          </p>
                          <p
                            className={`text-xs dmsans mt-0.5 ${isSpecial ? "text-white/60" : "text-gray-400"}`}
                          >
                            {m.duration}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="text-right">
                        <p
                          className={`bebas text-3xl tracking-wide ${isSpecial ? "text-white" : "text-[#1a1a1a]"}`}
                        >
                          {/* Original Price */}
                          {typeof m.feeOriginal === "number" && (
                            <span
                              className={`line-through mr-2 text-[1.22rem] ${isSpecial ? "text-gray-200" : "text-gray-500"}`}
                            >
                              ₹{m.feeOriginal.toLocaleString()}/-
                            </span>
                          )}

                          {/* Discounted Price */}
                          <span>₹{m.fee.toLocaleString()}</span>
                        </p>

                        <p
                          className={`text-[10px] dmsans uppercase tracking-wider ${isSpecial ? "text-white/60" : "text-gray-400"}`}
                        >
                          / plan
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="mt-5 bg-linear-to-r from-[#f28b00]/8 to-[#f6466c]/8 border border-[#f28b00]/20 rounded-2xl px-5 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">💡</span>
                <p className="text-sm text-gray-500 dmsans leading-relaxed">
                  Fees due by the{" "}
                  <strong className="text-[#1a1a1a]">
                    5th of every month.
                  </strong>{" "}
                  Registration fee applicable for new students. Ask us about
                  sibling discounts & quarterly plans.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

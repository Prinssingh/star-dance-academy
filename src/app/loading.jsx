"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-black via-gray-900 to-black">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 blur-[140px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 7s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Core Orb */}
      <div className="relative mb-12 animate-orbFloat">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spinSlow" />

        {/* Glow halo */}
        <div className="absolute -inset-6 rounded-full bg-linear-to-r from-primary/30 via-pink-400/30 to-secondary/30 blur-2xl animate-pulseSlow" />

        {/* Inner orb */}
        <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-primary via-pink-400 to-secondary shadow-2xl flex items-center justify-center">
          {/* Loading dots */}
          <div className="flex gap-2">
            <span className="dot delay-0" />
            <span className="dot delay-150" />
            <span className="dot delay-300" />
          </div>
        </div>
      </div>

      {/* Brand */}
      <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-[0.35em] text-transparent bg-clip-text bg-linear-to-r from-primary via-pink-400 to-secondary animate-fadeUp">
        STAR DANCE ACADEMY
      </h2>

      {/* Tagline */}
      <p className="mt-3 text-white/80 text-lg tracking-wide animate-fadeUp delay-300">
        Feel the Rhythm 
      </p>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-14px);
            opacity: 0.6;
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-spinSlow {
          animation: spin 7s linear infinite;
        }

        .animate-orbFloat {
          animation: orbFloat 3.5s ease-in-out infinite;
        }

        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            to right,
            var(--primary),
            var(--secondary)
          );
          animation: bounce 1.4s infinite ease-in-out;
        }

        .delay-0 {
          animation-delay: 0s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

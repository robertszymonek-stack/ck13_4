import { useRef, useState } from "react";
import Icon from "./Icon";
import { TWILIO_WEBHOOK_URL } from "../config";

const ACCESS_KEY = "7142b5c3-09f0-4888-a63a-c95a7accb443";

export default function Hero() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", phone: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData();
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `Nowe zapytanie CzasKlimy.pl — ${form.name || "Hero"}`);
    data.append("from_name", "CzasKlimy.pl");
    data.append("Imię", form.name);
    data.append("Telefon", form.phone);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        if (TWILIO_WEBHOOK_URL) {
          try {
            const sms = new FormData();
            sms.append("name", form.name);
            sms.append("phone", form.phone);
            sms.append("email", "");
            await fetch(TWILIO_WEBHOOK_URL, { method: "POST", body: sms, keepalive: true });
          } catch {}
        }
        setStatus("sent");
        setForm({ name: "", phone: "" });
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 pb-10 pt-8 text-white sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-16"
    >
      {/* tło dekoracyjne */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEWA STRONA — treść */}
          <div className="text-center lg:text-left">
            {/* Badge dostępności */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-300 sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm lg:mx-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Wolne terminy w tym tygodniu — szybka odpowiedź</span>
            </div>

            <h1 className="text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              Montaż klimatyzacji
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Białołęka, Marki, Legionowo i okolice
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base lg:mx-0 lg:text-lg">
              Wycena jeszcze dziś. Bezpłatna, bez zobowiązań.
              Termin montażu w kilka dni — nie w kilka tygodni.
            </p>

            {/* Alternatywne CTA — telefon + napisz */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:mt-8 lg:justify-start">
              <a
                href="tel:+48788304845"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:px-6 sm:text-base"
              >
                <Icon name="phone" className="h-4 w-4" />
                +48 788 304 845
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm text-white/60 transition hover:text-white sm:px-6"
              >
                Napisz do nas
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Mikro-dowody społeczne */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-white/55 sm:gap-x-6 sm:gap-y-3 sm:text-sm lg:justify-start">
              <span className="flex items-center gap-1.5">
                <Icon name="star" className="h-3.5 w-3.5 text-amber-400 sm:h-4 sm:w-4" />
                Ocena 5/5 na Google
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                Montaż za 3–5 dni
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                Gwarancja 5–7 lat
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                Bezpłatna wycena
              </span>
            </div>

            {/* Autoryzacje */}
            <p className="mt-5 text-[10px] leading-relaxed text-white/35 sm:mt-6 sm:text-xs lg:text-xs">
              Autoryzacja: Mitsubishi Electric • Gree • LG • Haier • Rotenso • Kaisai • AUX • Fuji Electric
            </p>
          </div>

          {/* PRAWA STRONA — formularz */}
          <div className="lg:flex lg:justify-end">
            <div className="mx-auto max-w-xl w-full lg:max-w-md xl:max-w-lg">
              {status === "sent" ? (
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-5 text-center sm:px-6 sm:py-6">
                  <div className="mb-2 text-2xl">✅</div>
                  <p className="text-base font-bold text-white sm:text-lg">
                    Dziękujemy! Oddzwonimy wkrótce.
                  </p>
                  <p className="mt-1 text-xs text-white/70 sm:text-sm">
                    Pracujemy pn–pt 9:00–18:00. Montaże także w weekendy.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl sm:p-6"
                >
                  <p className="mb-4 text-center text-sm font-semibold text-white/90 sm:text-base">
                    Zostaw numer — zadzwonimy i umówimy termin
                  </p>
                  <div className="grid gap-3">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input"
                      placeholder="Imię"
                    />
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input"
                      placeholder="Telefon"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full whitespace-nowrap rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-3.5 text-base font-bold text-slate-950 shadow-lg transition hover:brightness-110 disabled:opacity-60"
                    >
                      {status === "sending" ? "Wysyłanie..." : "Zadzwońcie do mnie →"}
                    </button>
                  </div>
                  <p className="mt-3 text-center text-[10px] text-white/40 sm:text-xs">
                    Pracujemy pn–pt 9:00–18:00 • Bezpłatna wycena • Dane chronione RODO
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

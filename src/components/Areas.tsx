import Icon from "./Icon";

export default function Areas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-4xl">📍</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Obsługujemy:
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Montaż klimatyzacji w Warszawie i okolicach — Białołęka, Targówek,
            Marki, Legionowo i wiele innych.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏙️</span>
              Warszawa - dzielnice wschodnie i północne
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Białołęka</strong> — Tarchomin, Nowodwory, Brzeziny,
                  Henryków, Choszczówka, Białołęka Dworska
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Targówek</strong> — Bródno, Zacisze
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Praga Północ</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏘️</span>
              Serock i okolice (do 25 km)
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Serock:</strong> Jachranka, Jadwisin, Zegrze, Wola Kiełpińska, Skubianka, Dębe
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Północ i wschód:</strong> Legionowo, Nieporęt, Wieliszew, Nowy Dwór Mazowiecki, Pułtusk
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Okoliczne gminy:</strong> Nasielsk, Pomiechówek, Radzymin, Somianka, Zatory, Winnica, Pokrzywnica
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Pod Warszawą:</strong> Marki, Ząbki, Zielonka, Wołomin, Kobyłka, Jabłonna, Łomianki
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-sky-100 bg-white p-6 text-center">
          <p className="text-sm text-slate-600">
            <strong>Klimatyzacja Białołęka</strong> • <strong>Klimatyzacja Targówek</strong> •{" "}
            <strong>Klimatyzacja Legionowo</strong> • <strong>Klimatyzacja Marki</strong> •{" "}
            <strong>Klimatyzacja Ząbki</strong> • <strong>Klimatyzacja Wołomin</strong> •{" "}
            <strong>Klimatyzacja Warszawa Wschód</strong> • <strong>Montaż klimy Warszawa Północ</strong>
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-3xl rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-center">
          <p className="text-base leading-relaxed text-slate-700">
            📞 Nie wiesz, czy obsługujemy Twoją okolicę?
            <br />
            Zadzwoń:{' '}
            <a
              href="tel:+48788304845"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              788 304 845
            </a>{' '}
            lub{' '}
            <a
              href="#kontakt"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              zostaw kontakt
            </a>{' '}
            — odpowiemy w 24h.
          </p>
        </div>

        {/* Subtelna lista SEO - bezpieczna dla Google, mało widoczna dla użytkownika */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-slate-200 pt-6 text-center text-[10px] leading-relaxed text-slate-400">
          <p className="mb-2 font-semibold uppercase tracking-wider text-slate-300">
            Szczegółowy obszar działania
          </p>
          <p>
            Klimatyzacja Serock, Jachranka, Jadwisin, Zegrze, Wola Kiełpińska, Skubianka, Dębe, Legionowo, Nieporęt, Wieliszew, Nowy Dwór Mazowiecki, Pułtusk, Nasielsk, Pomiechówek, Radzymin, Somianka, Zatory, Winnica, Pokrzywnica, Marki, Ząbki, Zielonka, Wołomin, Kobyłka, Jabłonna, Łomianki, Tarchomin, Nowodwory, Bródno, Zacisze, Praga Północ.
          </p>
        </div>
      </div>
    </section>
  );
}

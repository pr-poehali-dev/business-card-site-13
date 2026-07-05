import Icon from '@/components/ui/icon';

const NAME = 'Кудров Геннадий';
const ROLE = 'Founder & Web Developer';

const services = [
  {
    n: '01',
    title: 'Разработка сайтов',
    desc: 'Создаю сайты под ключ — от лендинга до сложного продукта. Дизайн, код, запуск.',
  },
  {
    n: '02',
    title: 'SaaS-продукты',
    desc: 'Проектирую и строю собственные SaaS-сервисы: от идеи и MVP до работающего бизнеса.',
  },
  {
    n: '03',
    title: 'Продуктовая разработка',
    desc: 'Продумываю продукт целиком — архитектуру, монетизацию, рост и техническую базу.',
  },
];

const socials = [
  { label: 'GitHub', handle: '@kudrov', icon: 'Github', href: '#' },
  { label: 'Telegram', handle: '@kudrov', icon: 'Send', href: '#' },
  { label: 'LinkedIn', handle: '/in/kudrov', icon: 'Linkedin', href: '#' },
  { label: 'Twitter / X', handle: '@kudrov', icon: 'Twitter', href: '#' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between text-white">
          <a href="#top" className="font-mono text-sm tracking-widest uppercase">
            К·Г
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#about" className="hover:opacity-50 transition-opacity">Обо мне</a>
            <a href="#services" className="hover:opacity-50 transition-opacity">Услуги</a>
            <a href="#social" className="hover:opacity-50 transition-opacity">Соцсети</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Контакты</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 mb-8 animate-fade-up">
            {ROLE} · Делаю сайты и строю SaaS
          </div>
          <h1 className="font-sans font-bold leading-[0.9] tracking-tight text-[15vw] md:text-[11vw] lg:text-[9rem] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {NAME.split(' ')[0]}
            <br />
            <span className="inline-block text-black/20">{NAME.split(' ')[1]}</span>
          </h1>
          <p className="mt-10 max-w-lg text-lg md:text-xl text-black/60 leading-relaxed animate-fade-up" style={{ animationDelay: '0.25s' }}>
            Создаю сайты и запускаю собственные SaaS-проекты. Превращаю идеи
            в работающие продукты.
          </p>
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest border border-black rounded-full px-7 py-4 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Связаться
              <Icon name="ArrowDown" size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 font-mono text-[10px] uppercase tracking-widest text-black/40 rotate-90 origin-bottom-right hidden md:block">
          Scroll ↓
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-black py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="font-mono text-sm uppercase tracking-widest flex items-center">
              {['Web Development', 'SaaS', 'Product', 'Startups', 'MVP', 'Design', 'Automation'].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-6">
                  {t} <span className="text-black/30">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-28 md:py-40 border-b border-black/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">(01) — Обо мне</span>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-medium leading-tight tracking-tight">
              Я — Геннадий. Делаю сайты и строю собственные SaaS-проекты.
              Мне нравится превращать сырые идеи в живые продукты, которыми
              пользуются каждый день.
            </p>
            <p className="mt-8 text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
              Работаю на стыке разработки и продукта: сам проектирую, сам пишу
              код, сам запускаю. Ценю простоту, скорость и результат — без
              лишней воды и бесконечных согласований.
            </p>
            <div className="mt-16 grid sm:grid-cols-3 gap-px bg-black/15 border border-black/15 font-mono">
              {[
                { k: 'Fast', v: 'От идеи до запуска — быстро' },
                { k: 'Own', v: 'Свои SaaS-продукты' },
                { k: 'Full', v: 'Дизайн, код и запуск' },
              ].map((s) => (
                <div key={s.k} className="bg-white p-6">
                  <div className="text-2xl md:text-3xl font-bold">{s.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-black/50 leading-relaxed">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 py-28 md:py-40 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Услуги</h2>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">(02)</span>
          </div>
          <div>
            {services.map((s) => (
              <div
                key={s.n}
                className="group grid md:grid-cols-12 gap-4 md:gap-10 items-start py-10 border-t border-black/15 hover:bg-black hover:text-white hover:px-6 transition-all duration-300"
              >
                <div className="md:col-span-1 font-mono text-sm text-black/40 group-hover:text-white/50">{s.n}</div>
                <h3 className="md:col-span-4 text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="md:col-span-6 text-black/60 group-hover:text-white/70 leading-relaxed">{s.desc}</p>
                <div className="md:col-span-1 flex md:justify-end">
                  <Icon name="ArrowUpRight" size={24} className="group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            ))}
            <div className="border-t border-black/15" />
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="px-6 md:px-10 py-28 md:py-40 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Соцсети</h2>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">(03)</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-black/15 border border-black/15">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group bg-white flex items-center justify-between p-8 md:p-10 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <Icon name={s.icon} size={28} />
                  <div>
                    <div className="text-xl font-semibold">{s.label}</div>
                    <div className="font-mono text-xs text-black/50 group-hover:text-white/50">{s.handle}</div>
                  </div>
                </div>
                <Icon name="ArrowUpRight" size={22} className="group-hover:rotate-45 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-10 py-28 md:py-40 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">(04) — Контакты</span>
          <h2 className="mt-8 text-[12vw] md:text-[8rem] font-bold leading-none tracking-tighter">
            Let's talk
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Email</div>
              <a href="mailto:hello@kudrov.dev" className="text-2xl md:text-3xl font-medium hover:opacity-60 transition-opacity break-all">
                hello@kudrov.dev
              </a>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Телефон</div>
              <a href="tel:+79001234567" className="text-2xl md:text-3xl font-medium hover:opacity-60 transition-opacity">
                +7 900 123-45-67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-8 bg-black text-white/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest">
          <span>© {new Date().getFullYear()} {NAME}</span>
          <span>Designed with precision</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
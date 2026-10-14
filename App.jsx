import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header shadow and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site da Odonto Styllo e gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/5511943277806?text=${whatsappMessage}`;

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Atendimento', href: '#atendimento' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#64748B] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#34B6B4] selection:text-white">
      {/* Google Fonts & Tailwind CDN fallback / meta injection via useEffect */}
      {/* SEO Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Odonto Styllo",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Praça Padre Aleixo Monteiro Mafra, 5",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "08011-010",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.4988,
          "longitude": -46.4431
        },
        "telephone": "+5511943277806",
        "url": "https://dentmap.com.br/dentistas/sao-paulo/odonto-styllo-5ba14720",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "reviewCount": "24"
        }
      })}} />

      {/* HEADER FIXO */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#142D4E] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-[#34B6B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#142D4E] tracking-tight">Odonto Styllo</span>
              <span className="text-[10px] uppercase tracking-wider text-[#34B6B4] font-semibold">São Miguel Paulista</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#142D4E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#34B6B4] hover:bg-[#2da3a1] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#142D4E] hover:bg-[#EAF5FB] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-[#142D4E] hover:text-[#34B6B4] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#34B6B4] text-white text-base font-semibold shadow-md"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* SEÇÃO 2 — HERO / BOAS-VINDAS */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[#EAF5FB]/60 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="flex flex-col items-start gap-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-xs sm:text-sm font-medium text-[#142D4E]">
                <span className="flex items-center gap-1 text-[#34B6B4]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                  4.6
                </span>
                <span className="text-gray-300">|</span>
                <span>📍 São Miguel Paulista • São Paulo</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#142D4E] tracking-tight leading-[1.15]">
                Seu sorriso merece um <span className="text-[#34B6B4]">cuidado especial.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-[#64748B] leading-relaxed max-w-xl">
                Bem-vindo à Odonto Styllo! Um espaço dedicado à saúde bucal, ao cuidado e ao bem-estar do seu sorriso, em São Miguel Paulista.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#142D4E] hover:bg-[#1a3861] text-white font-semibold shadow-lg shadow-[#142D4E]/20 transition-all transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Agendar atendimento pelo WhatsApp
                </a>
                <a
                  href="#localizacao"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-[#142D4E] font-semibold transition-all"
                >
                  Conheça nossa localização
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34B6B4]"></div>
                  <span>Atendimento Humanizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34B6B4]"></div>
                  <span>Ambiente Acolhedor</span>
                </div>
              </div>

            </div>

            {/* Right Column - Image Composition */}
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#34B6B4] to-[#142D4E] rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                    alt="Atendimento odontológico na Odonto Styllo"
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#34B6B4]/10 flex items-center justify-center text-[#34B6B4]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#142D4E]">Praça Padre Aleixo Monteiro Mafra</p>
                        <p className="text-xs text-[#64748B]">São Miguel Paulista, São Paulo</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#EAF5FB] text-[#34B6B4] rounded-full text-xs font-bold">SP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — SOBRE A CLÍNICA */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual element / Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-[#EAF5FB] p-2">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  alt="Clínica Odonto Styllo"
                  className="rounded-2xl w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#142D4E] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                <p className="text-sm font-bold text-[#34B6B4] mb-1">Cuidado & Dedicação</p>
                <p className="text-xs text-gray-200 leading-relaxed">Referência em atendimento odontológico atencioso em São Miguel Paulista.</p>
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-start gap-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FB] text-[#34B6B4] text-xs font-bold uppercase tracking-wider">
                Sobre nós
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#142D4E] tracking-tight">
                Conheça a Odonto Styllo
              </h2>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                Na Odonto Styllo, acreditamos que cuidar do sorriso é também cuidar da autoestima e do bem-estar. Nossa clínica está localizada em São Miguel Paulista e recebe pacientes que procuram atendimento odontológico com atenção e acolhimento.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                <div className="p-5 rounded-2xl bg-[#EAF5FB]/50 border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#34B6B4] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#142D4E] text-sm">Atendimento Humanizado</h3>
                    <p className="text-xs text-[#64748B] mt-1">Foco no seu conforto e bem-estar durante cada consulta.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#EAF5FB]/50 border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#34B6B4] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#142D4E] text-sm">Localização Central</h3>
                    <p className="text-xs text-[#64748B] mt-1">Fácil acesso na Praça Padre Aleixo Monteiro Mafra.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — ATENDIMENTO */}
      <section id="atendimento" className="py-20 bg-[#EAF5FB]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EAF5FB] text-[#34B6B4] text-xs font-bold uppercase tracking-wider mb-4">
              Como Funciona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142D4E] tracking-tight">
              Cuidar do seu sorriso começa com o primeiro contato.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FB] flex items-center justify-center text-[#34B6B4] group-hover:bg-[#34B6B4] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-3xl font-extrabold text-[#142D4E]/10">01</span>
                </div>
                <h3 className="text-xl font-bold text-[#142D4E] mb-3">Entre em contato</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Converse com a clínica pelo WhatsApp para tirar suas dúvidas de forma rápida e prática.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-50">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#34B6B4] hover:text-[#142D4E] transition-colors"
                >
                  Falar no WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FB] flex items-center justify-center text-[#34B6B4] group-hover:bg-[#34B6B4] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-3xl font-extrabold text-[#142D4E]/10">02</span>
                </div>
                <h3 className="text-xl font-bold text-[#142D4E] mb-3">Converse sobre sua necessidade</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Informe qual atendimento odontológico você procura e receba orientações personalizadas.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-50">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#34B6B4] hover:text-[#142D4E] transition-colors"
                >
                  Enviar mensagem &rarr;
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EAF5FB] flex items-center justify-center text-[#34B6B4] group-hover:bg-[#34B6B4] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-3xl font-extrabold text-[#142D4E]/10">03</span>
                </div>
                <h3 className="text-xl font-bold text-[#142D4E] mb-3">Organize sua visita</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Consulte a disponibilidade de horários diretamente com a equipe e agende sua consulta.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-50">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#34B6B4] hover:text-[#142D4E] transition-colors"
                >
                  Ver horários &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 5 — LOCALIZAÇÃO */}
      <section id="localizacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EAF5FB] text-[#34B6B4] text-xs font-bold uppercase tracking-wider mb-4">
              Onde Estamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142D4E] tracking-tight">
              Estamos em São Miguel Paulista
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Info Card */}
            <div className="bg-[#142D4E] text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#34B6B4] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Odonto Styllo</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Praça Padre Aleixo Monteiro Mafra, 5<br />
                  São Miguel Paulista, São Paulo — SP<br />
                  CEP: 08011-010
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <p className="text-xs text-[#34B6B4] font-semibold">Contato Direto</p>
                  <p className="text-sm font-bold text-white mt-1">(11) 94327-7806</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://maps.google.com/?q=Praca+Padre+Aleixo+Monteiro+Mafra+5+Sao+Miguel+Paulista+Sao+Paulo+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#34B6B4] hover:bg-[#2da3a1] text-white text-sm font-semibold transition-colors shadow-md"
                >
                  Como chegar
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  Falar com a clínica
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-sm border border-gray-100 min-h-[380px] bg-gray-100 relative">
              <iframe
                title="Localização Odonto Styllo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.35!2d-46.4431!3d-23.4988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63b655555555%3A0x0!2zQcOHLmEgUGFkcmUgQWxlaXhvIE1vbnRlaXJvIE1hZnJhLCA1IC0gU8OjbyBNaWd1ZWwgUGF1bGlzdGEsIFPDoyBQYXVsbyAtIFNQ!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 6 — CHAMADA FINAL PARA AÇÃO (CTA) */}
      <section className="py-20 bg-gradient-to-br from-[#142D4E] to-[#1c3e6b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34B6B4_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Vamos cuidar do seu sorriso?
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Entre em contato com a Odonto Styllo pelo WhatsApp e converse com nossa equipe.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#34B6B4] hover:bg-[#2da3a1] text-white text-lg font-bold shadow-xl shadow-[#34B6B4]/30 transition-all transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Conversar no WhatsApp
          </a>

        </div>
      </section>

      {/* SEÇÃO 7 — RODAPÉ */}
      <footer className="bg-[#0e2038] text-gray-400 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center">
            
            <div>
              <span className="text-xl font-bold text-white tracking-tight">Odonto Styllo</span>
              <p className="text-sm text-gray-400 mt-2">Clínica odontológica em São Miguel Paulista</p>
            </div>

            <div className="text-sm">
              <p className="text-white font-semibold mb-1">Endereço:</p>
              <p>Praça Padre Aleixo Monteiro Mafra, 5 — São Miguel Paulista, São Paulo — SP, CEP 08011-010</p>
            </div>

            <div className="flex md:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                WhatsApp: (11) 94327-7806
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Odonto Styllo. Todos os direitos reservados.</p>
            <p className="mt-2 sm:mt-0">Desenvolvido com excelência e foco em conversão.</p>
          </div>

        </div>
      </footer>

      {/* FLATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 animate-bounce"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
  );
}

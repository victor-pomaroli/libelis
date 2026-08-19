"use client";
import Image from "next/image";
import { useState } from "react";

const WA_URL =
  "https://wa.me/5531995356323?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20neuropsicol%C3%B3gica.";
const WA_URL_SCHEDULE =
  "https://wa.me/5531995356323?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20neuropsicol%C3%B3gica.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppButton({
  href,
  text,
  microcopy,
  large,
  light,
}: {
  href: string;
  text: string;
  microcopy?: string;
  large?: boolean;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-3 font-semibold rounded-full shadow-lg active:scale-95 transition-all duration-200 ${
          light
            ? "bg-white text-titulo hover:bg-fundo"
            : "bg-titulo text-white hover:bg-titulo-light"
        } ${large ? "w-full sm:w-auto px-7 py-4 text-base sm:text-lg" : "px-6 py-3.5 text-base"}`}
      >
        <WhatsAppIcon className={large ? "w-6 h-6 flex-shrink-0" : "w-5 h-5 flex-shrink-0"} />
        {text}
      </a>
      {microcopy && (
        <p className="text-xs text-texto-light text-center">{microcopy}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <IndicationsSection />
      <InvestigateSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-fundo min-h-[90vh] flex items-center">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#f5d0c5", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "#4faf9e", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 lg:py-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-sand text-titulo text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full mb-6 shadow-sm">
            <span
              className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"
              style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
            />
            Agenda aberta — presencial e online
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-titulo leading-[1.05] mb-5 lg:mb-6">
            Clareza para compreender <br />
            dificuldades, potencialidades{" "}
            <br className="hidden lg:block" />e{" "}
            <em className="not-italic" style={{ fontStyle: "italic", fontWeight: 300 }}>
              próximos passos
            </em>
          </h1>

          <p className="text-texto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            A avaliação neuropsicológica investiga habilidades como atenção,
            memória, aprendizagem, linguagem e funções executivas,
            contribuindo para a compreensão do funcionamento cognitivo e para
            a tomada de decisões mais assertivas sobre diagnóstico e
            tratamento.
          </p>

          <WhatsAppButton
            href={WA_URL}
            text="Quero agendar minha avaliação"
            microcopy="Resposta em até 24 horas · Sem compromisso"
            large
          />
        </div>

        <div className="flex-shrink-0 relative w-[min(288px,85vw)] h-72 sm:h-80 lg:w-96 lg:h-[480px]">
          <div
            className="w-full h-full overflow-hidden shadow-2xl"
            style={{ borderRadius: "2rem" }}
          >
            <Image
              src="/teen.jpg"
              alt="Adolescente em contexto de aprendizagem e reflexão"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute -bottom-4 left-3 sm:-left-4 bg-white shadow-lg p-3 sm:p-4 flex items-center gap-3"
            style={{ borderRadius: "1rem" }}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-titulo font-bold text-base sm:text-lg flex-shrink-0"
              style={{ background: "#f5d0c5", borderRadius: "50%" }}
            >
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-titulo">Laudo completo</p>
              <p className="text-xs text-texto-light">Com orientações personalizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { number: "10+", label: "Anos de experiência" },
    { number: "500+", label: "Avaliações realizadas" },
    { number: "4", label: "Faixas etárias atendidas" },
    { number: "CRP/MG", label: "Registro profissional ativo" },
  ];

  return (
    <div className="bg-titulo text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-semibold">{stat.number}</p>
              <p className="text-sm mt-1" style={{ opacity: 0.75 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-shrink-0 relative">
            <div
              className="w-[min(288px,85vw)] h-72 sm:h-80 lg:w-80 lg:h-96 overflow-hidden shadow-xl"
              style={{ borderRadius: "2rem" }}
            >
              <Image
                src="/quebra-cabeca.jpeg"
                alt="Ambiente de avaliação neuropsicológica"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 bg-white shadow-lg p-3 sm:p-4 text-center"
              style={{ borderRadius: "1rem" }}
            >
              <p className="text-titulo font-bold text-sm">CRP/MG</p>
              <p className="text-xs text-texto-light">Registro ativo</p>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
            <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-3 block">
              Nossa abordagem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-titulo mb-5 leading-tight">
              Rigor científico{" "}
              <em style={{ fontWeight: 300 }}>e olhar individualizado</em>
            </h2>
            <p className="text-texto text-base sm:text-lg leading-relaxed mb-5">
              Na Libelis, acreditamos que cada pessoa possui uma forma
              única de processar informações, aprender, se relacionar e
              enfrentar desafios.
            </p>
            <p className="text-texto text-base sm:text-lg leading-relaxed mb-5">
              Por isso, conduzimos avaliações neuropsicológicas com rigor
              científico, olhar individualizado e comunicação clara,
              contribuindo para a compreensão de dificuldades, potencialidades
              e necessidades de intervenção.
            </p>
            <p className="text-texto text-base sm:text-lg leading-relaxed mb-8">
              Nosso compromisso é oferecer informações confiáveis que
              auxiliem pacientes, familiares e profissionais na tomada de
              decisões mais seguras e assertivas.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {[
                "Neuropsicologia",
                "Avaliação Cognitiva",
                "Neurodesenvolvimento",
                "Demências",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-fundo-alt text-titulo text-sm px-3 py-2 border border-sand font-medium"
                  style={{ borderRadius: "9999px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndicationsSection() {
  const groups = [
    {
      title: "Crianças",
      description:
        "Quando surgem dificuldades de aprendizagem, problemas de atenção, atrasos no desenvolvimento, suspeita de TDAH, TEA ou outras questões que impactam o desenvolvimento infantil.",
      image: "/lapis.jpeg",
      emoji: "🧒",
    },
    {
      title: "Adolescentes",
      description:
        "Quando há dificuldades de concentração, queda no rendimento escolar, desafios na organização dos estudos, alterações comportamentais ou suspeita de TDAH, TEA e transtornos de aprendizagem.",
      image: "/teen.jpg",
      emoji: "🧑",
    },
    {
      title: "Adultos",
      description:
        "Quando dificuldades de atenção, organização, memória ou planejamento começam a impactar o desempenho acadêmico, profissional, nos relacionamentos ou nas atividades do dia a dia.",
      image: "/adult.jpg",
      emoji: "🧑‍💼",
    },
    {
      title: "Idosos",
      description:
        "Quando surgem esquecimentos frequentes, dificuldades cognitivas ou mudanças comportamentais que levantam dúvidas sobre o envelhecimento cognitivo ou possíveis quadros demenciais.",
      image: "/senior.jpg",
      emoji: "👴",
    },
  ];

  return (
    <section id="indicacoes" className="py-16 lg:py-28 bg-fundo-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-3 block">
            Para quem é indicado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-titulo leading-tight">
            Você se identifica{" "}
            <em style={{ fontWeight: 300 }}>com alguma situação?</em>
          </h2>
          <p className="text-texto text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Quando surgem dúvidas sobre aprendizagem, atenção, memória ou
            comportamento, uma avaliação especializada pode oferecer
            respostas mais claras e direcionamentos mais assertivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              style={{ borderRadius: "1.5rem" }}
            >
              <div className="relative h-52 sm:h-48">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,87,83,0.7) 0%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl">{group.emoji}</span>
                  <h3 className="font-display text-2xl text-white font-semibold">
                    {group.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-texto text-base leading-relaxed">{group.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton href={WA_URL} text="Tire suas dúvidas pelo WhatsApp" />
        </div>
      </div>
    </section>
  );
}

function InvestigateSection() {
  const conditions = [
    {
      icon: "🎯",
      title: "TDAH",
      desc: "Investigação de dificuldades relacionadas à atenção, impulsividade e funções executivas.",
    },
    {
      icon: "♾️",
      title: "TEA",
      desc: "Avaliação de características relacionadas à comunicação social, comportamento e neurodesenvolvimento.",
    },
    {
      icon: "📚",
      title: "Transtornos de Aprendizagem",
      desc: "Investigação de dificuldades específicas relacionadas à leitura, escrita e matemática.",
    },
    {
      icon: "⭐",
      title: "Altas Habilidades/Superdotação",
      desc: "Identificação de potencial intelectual e habilidades cognitivas acima da média.",
    },
    {
      icon: "🔀",
      title: "Atenção e Funções Executivas",
      desc: "Avaliação de planejamento, organização, flexibilidade cognitiva e controle inibitório.",
    },
    {
      icon: "🌱",
      title: "Deficiência Intelectual",
      desc: "Avaliação do funcionamento intelectual e adaptativo.",
    },
    {
      icon: "🔍",
      title: "Avaliação Cognitiva e Comportamental",
      desc: "Investigação integrada do funcionamento cognitivo e comportamental.",
    },
    {
      icon: "🧠",
      title: "Memória e Envelhecimento Cognitivo",
      desc: "Investigação de alterações cognitivas relacionadas ao envelhecimento e possíveis quadros neurodegenerativos.",
    },
  ];

  return (
    <section className="py-16 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-3 block">
            Áreas de investigação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-titulo leading-tight">
            O que a avaliação{" "}
            <em style={{ fontWeight: 300 }}>pode identificar?</em>
          </h2>
          <p className="text-texto text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Com instrumentos científicos validados, investigamos uma ampla gama
            de condições cognitivas, emocionais e do neurodesenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {conditions.map((c) => (
            <div
              key={c.title}
              className="min-w-0 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow border border-sand"
              style={{ borderRadius: "1rem" }}
            >
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="font-semibold text-titulo text-sm sm:text-base mb-1 break-words">
                {c.title}
              </h3>
              <p className="text-sm text-texto-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-14 text-center">
          <p className="font-semibold text-titulo text-base sm:text-lg">
            Não encontrou sua dúvida?
          </p>
          <p className="text-texto-light text-sm sm:text-base mt-1 max-w-xl mx-auto">
            Cada avaliação é individualizada e pode investigar diferentes
            aspectos do funcionamento cognitivo e comportamental.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      bgClass: "bg-destaque",
      title: "Primeiro contato",
      desc: "Você entra em contato para esclarecer dúvidas, conhecer o processo de avaliação e receber informações sobre etapas, valores e prazos.",
    },
    {
      number: "02",
      bgClass: "bg-blue-100",
      title: "Entrevista inicial",
      desc: "O processo começa com uma entrevista clínica detalhada, na qual são exploradas as principais queixas, histórico de desenvolvimento, aspectos acadêmicos, profissionais, emocionais e objetivos da avaliação.",
    },
    {
      number: "03",
      bgClass: "bg-green-100",
      title: "Sessões de avaliação",
      desc: "São realizadas sessões de testagem utilizando instrumentos psicológicos e neuropsicológicos validados cientificamente, selecionados de acordo com a faixa etária, a demanda apresentada e os objetivos da avaliação.",
    },
    {
      number: "04",
      bgClass: "bg-amber-100",
      title: "Devolutiva e laudo",
      desc: "Os resultados são apresentados em uma entrevista devolutiva, acompanhada de laudo técnico e orientações personalizadas que auxiliam pacientes, familiares e profissionais na tomada de decisões e no planejamento das intervenções necessárias.",
    },
  ];

  const deliverables = [
    "Entrevista devolutiva",
    "Laudo técnico detalhado",
    "Integração dos resultados e compreensão do perfil cognitivo avaliado",
    "Orientações para os próximos passos",
  ];

  return (
    <section id="processo" className="py-16 lg:py-28 bg-titulo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#f5d0c5" }}
          >
            Passo a passo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Como funciona o <em style={{ fontWeight: 300 }}>processo?</em>
          </h2>
          <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Do primeiro contato ao laudo final, tudo é conduzido com cuidado,
            transparência e respeito pelo seu tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 lg:p-8 border"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                borderRadius: "1.5rem",
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 ${step.bgClass} text-titulo font-bold text-base sm:text-lg mb-4`}
                style={{ borderRadius: "0.75rem" }}
              >
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-3">
                {step.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.72)" }} className="text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 sm:mt-8 p-6 lg:p-8 border"
          style={{
            background: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.2)",
            borderRadius: "1.5rem",
          }}
        >
          <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 text-center">
            O que você recebe ao final da avaliação?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl mx-auto">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="text-botao font-bold flex-shrink-0" style={{ color: "#4faf9e" }}>
                  ✓
                </span>
                <p className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Atendimentos presenciais em Contagem/MG. A possibilidade de
            realização de etapas online será definida conforme a demanda
            apresentada e os critérios técnicos da avaliação.
          </p>
          <WhatsAppButton
            href={WA_URL_SCHEDULE}
            text="Agendar agora"
            microcopy="Resposta em até 24 horas"
            large
            light
          />
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: "🔍",
      title: "Clareza sobre o funcionamento cognitivo",
      desc: "Compreender como atenção, memória, aprendizagem, linguagem e funções executivas estão funcionando permite enxergar dificuldades e potencialidades com mais objetividade.",
    },
    {
      icon: "🧭",
      title: "Direcionamento para os próximos passos",
      desc: "Os resultados da avaliação auxiliam no planejamento de intervenções, acompanhamentos e estratégias mais adequadas às necessidades identificadas.",
    },
    {
      icon: "👥",
      title: "Suporte para escola, família e profissionais",
      desc: "As informações obtidas podem auxiliar familiares, educadores e profissionais da saúde na construção de estratégias mais alinhadas às necessidades de cada pessoa.",
    },
    {
      icon: "⭐",
      title: "Compreensão das potencialidades e desafios",
      desc: "Além de identificar dificuldades, a avaliação também contribui para reconhecer recursos, habilidades e pontos fortes que podem ser desenvolvidos e utilizados no dia a dia.",
    },
  ];

  return (
    <section className="py-16 lg:py-28 bg-fundo-alt">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-3 block">
            O que você leva
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-titulo leading-tight">
            Mais do que um laudo:{" "}
            <em style={{ fontWeight: 300 }}>
              compreensão, direcionamento e possibilidades de ação
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
              style={{ borderRadius: "1.5rem" }}
            >
              <span className="text-4xl mb-4 block">{b.icon}</span>
              <h3 className="font-semibold text-titulo text-lg sm:text-xl mb-3">
                {b.title}
              </h3>
              <p className="text-texto text-base leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      text: "A avaliação foi muito mais completa do que eu esperava. A explicação foi clara e empática, e saí com um relatório que me ajudou a entender meu filho de uma forma que nenhum outro profissional tinha conseguido.",
      author: "Mãe de paciente, 8 anos",
      initial: "A",
    },
    {
      text: "Sempre soube que tinha algo diferente na forma como processo informações. A avaliação confirmou meu TDAH e me deu as ferramentas para lidar com isso. Foi um divisor de águas.",
      author: "Paciente adulta, 34 anos",
      initial: "C",
    },
    {
      text: "Minha mãe estava com esquecimentos frequentes e ficávamos preocupados. A avaliação trouxe clareza e as orientações nos ajudaram a tomar as providências certas rapidamente.",
      author: "Filha de paciente idosa",
      initial: "M",
    },
  ];

  return (
    <section className="py-16 lg:py-28 bg-fundo">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-3 block">
            Experiências compartilhadas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-titulo leading-tight">
            O que dizem <em style={{ fontWeight: 300 }}>nossos pacientes</em>
          </h2>
          <p className="text-texto-light text-sm mt-3 italic">
            *Relatos adaptados para preservar a identidade dos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 lg:p-8 shadow-sm border border-sand"
              style={{ borderRadius: "1.5rem" }}
            >
              <p
                className="font-display text-5xl leading-none mb-4"
                style={{ color: "#d4896f" }}
              >
                &ldquo;
              </p>
              <p className="text-texto text-base leading-relaxed mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-titulo font-bold"
                  style={{ background: "#f5d0c5", borderRadius: "50%" }}
                >
                  {t.initial}
                </div>
                <p className="text-sm text-texto-light">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.1)",
        borderColor: "rgba(255,255,255,0.2)",
        borderRadius: "1rem",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left min-h-[56px]"
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <span
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            color: "rgba(255,255,255,0.7)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Como saber se uma avaliação neuropsicológica é indicada?",
      a: "Se você percebe dificuldades persistentes de atenção, memória, aprendizagem ou comportamento — em qualquer idade — ou tem dúvidas sobre o funcionamento cognitivo de alguém, uma conversa inicial pode esclarecer se a avaliação é indicada para o seu caso.",
    },
    {
      q: "Quanto tempo dura o processo de avaliação?",
      a: "O processo é estruturado em etapas — entrevista inicial, sessões de avaliação e devolutiva — e a duração varia conforme a faixa etária e a demanda apresentada. No primeiro contato você recebe informações sobre prazos.",
    },
    {
      q: "A avaliação é realizada em uma única sessão?",
      a: "Não. A avaliação neuropsicológica é um processo estruturado em etapas: entrevista inicial, sessões de testagem com instrumentos científicos validados e, por fim, a devolutiva com o laudo técnico.",
    },
    {
      q: "A avaliação pode ser realizada online?",
      a: "Os atendimentos presenciais acontecem em Contagem/MG. A possibilidade de realização de etapas online é definida conforme a demanda apresentada e os critérios técnicos da avaliação.",
    },
    {
      q: "O que está incluído na avaliação?",
      a: "Você recebe entrevista inicial, sessões de testagem, entrevista devolutiva, laudo técnico detalhado com integração dos resultados e orientações para os próximos passos.",
    },
    {
      q: "O laudo tem validade?",
      a: "Sim. Assim como outros documentos técnicos em saúde, o laudo reflete o momento avaliado, e uma reavaliação pode ser recomendada após alguns anos ou diante de mudanças clínicas significativas.",
    },
    {
      q: "A avaliação é aceita por médicos e escolas?",
      a: "Sim. O laudo técnico segue os critérios da neuropsicologia e pode ser utilizado por médicos, escolas e demais profissionais envolvidos no cuidado, servindo de base para decisões diagnósticas e de intervenção.",
    },
    {
      q: "O plano de saúde cobre a avaliação?",
      a: "A cobertura varia conforme o plano de saúde. Recomendamos verificar diretamente com sua operadora; para informações sobre valores e formas de pagamento, entre em contato pelo WhatsApp.",
    },
    {
      q: "Para quais idades a avaliação neuropsicológica é indicada?",
      a: "A avaliação neuropsicológica é indicada para crianças, adolescentes, adultos e idosos, sempre com instrumentos selecionados de acordo com a faixa etária e os objetivos da avaliação.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-28 bg-titulo">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 lg:mb-14">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#f5d0c5" }}
          >
            Dúvidas frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Perguntas que{" "}
            <em style={{ fontWeight: 300 }}>todo mundo faz</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-medium mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
            Ainda tem dúvidas?
          </p>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            Estamos disponíveis para esclarecer informações sobre o processo
            de avaliação, prazos e formas de atendimento.
          </p>
          <WhatsAppButton
            href={WA_URL}
            text="Perguntar pelo WhatsApp"
            light
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 lg:py-28 bg-fundo relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "#f5d0c5",
          opacity: 0.2,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <span className="text-xs sm:text-sm font-semibold text-botao uppercase tracking-widest mb-4 block">
          Pronto para começar?
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-titulo leading-[1.1] mb-6">
          O próximo passo é <br />
          <em style={{ fontWeight: 300 }}>compreender com mais clareza</em>
        </h2>
        <p className="text-texto text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Entre em contato para conhecer o processo de avaliação
          neuropsicológica, esclarecer dúvidas e receber orientações sobre a
          melhor forma de iniciar sua avaliação.
        </p>
        <WhatsAppButton
          href={WA_URL_SCHEDULE}
          text="Iniciar conversa pelo WhatsApp"
          microcopy="Atendimento personalizado · Resposta em até 24 horas"
          large
        />
        <p className="mt-6 text-sm text-texto-light">
          Contagem — MG · Atendimento presencial e online
        </p>
      </div>
    </section>
  );
}

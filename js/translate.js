// lang-detect.js

// Traduções simples (adicione o que precisar)
const translations = {
  en: {
    heroTitleFounder: "Founder, Startup or Agency?",
    heroTitleLetsCollaborate:
      "Let's collaborate to design your vision into solutions that drive customer and business growth.",

    heroTitleReady: "Ready to get design done?",
    heroTitleLetsTalk: "Let's talk about your next thing.",

    heroTitleCustom: "Have a custom project in mind?",
    heroTitleContact: "Contact me to receive a proposal.",

    buttonBookCall: "Book a call",
    buttonChat: "Chat",

    quoteOne: "“Companies that invest in design grow 2x faster.”",
    quoteTwo: "“Every $1 invested in design can return up to $100.”",

    serviceOneTitle: "Web & Mobile App Design",
    serviceOneText:
      "From scratch or improving what you already have, I design intuitive and engaging digital products. I've worked on everything from simple apps to full-scale platforms, always aligning user experience with real business goals.",

    serviceTwoTitle: "Web development",
    serviceTwoText:
      "I build fast, accessible websites using clean code (HTML, SCSS, JavaScript, Vue.js, React, Tailwind, Shadcn) or tools like Webflow and Framer. Always following high industry standards to ensure a smooth and responsive experience on any device.",

    serviceThreeTitle: "Design Systems",
    serviceThreeText:
      "I build easy-to-use design systems with clear component architecture, sub-systems, and design token structures. Everything is documented and built to stay in sync with code, helping your team move faster and stay consistent as the product scales.",

    serviceFourTitle: "Brand Identity & Logo Design",
    serviceFourText:
      "I help brands find their voice and visual identity. From logo design and pitch decks to complete brand guidelines, I create systems that are consistent, memorable, and built to scale across every touchpoint, digital or physical.",

    howOneTitle: "Briefing",
    howOneText:
      "We start with a quick conversation via email, WhatsApp, or video call to understand your needs, goals, and target audience.",

    howTwoTitle: "Proposal",
    howTwoText:
      "Based on the briefing, I’ll send a clear and objective proposal outlining scope, timeline, and investment. Everything aligned before we begin.",

    howThreeTitle: "Design & Development",
    howThreeText:
      "Once the proposal is approved, I start the project. I share each step with you, always welcoming feedback to ensure we hit the mark.",

    howFourTitle: "Delivery",
    howFourText:
      "I deliver the final assets ready to use, whether it’s a published website, design files for development, or a product ready to grow.",

    whyLabel: "Why",

    whyItemOneTitle: "11+ years designing",
    whyItemOneText:
      "With over a decade of experience, I’ve helped bring ideas to life across different industries, always balancing user needs with business goals.",

    whyItemTwoTitle: "High-quality work, delivered fast",
    whyItemTwoText:
      "I focus on delivering clean, thoughtful design and front-end code, fast. Without cutting corners on quality, usability, or performance.",

    whyItemThreeTitle: "Made specifically for your audience",
    whyItemThreeText:
      "Every project is shaped by real user insights. The result? Experiences that feel natural, solve real problems, and connect with the people who matter most.",

    contactTitle: "Let’s talk about our next project.",

    menuPortfolio: "Portfolio",
    menuServices: "Services",
    menuAbout: "About",
    menuContact: "Contact",
  },
  pt: {
    heroTitleFounder: "Fundador, Startup ou Agência?",
    heroTitleLetsCollaborate:
      "Vamos transformar sua visão em soluções que impulsionam o crescimento do seu negócio.",

    heroTitleReady: "Pronto escalar com design?",
    heroTitleLetsTalk: "Vamos falar sobre o seu próximo projeto.",

    heroTitleCustom: "Tem um projeto personalizado?",
    heroTitleContact: "Receba uma proposta.",

    buttonBookCall: "Receber proposta",
    buttonChat: "Chat",

    quoteOne: "“Empresas que investem em design crescem 2x mais rápido.”",
    quoteTwo: "“Cada R$1 investido em design pode retornar até R$100.”",

    serviceOneTitle: "Design para Web e Apps",
    serviceOneText:
      "Do zero ou melhorando o que você já tem, eu projeto produtos digitais intuitivos e envolventes. Já trabalhei desde apps simples até plataformas completas, sempre alinhando a experiência do usuário com objetivos reais de negócio.",

    serviceTwoTitle: "Desenvolvimento",
    serviceTwoText:
      "Construo sites rápidos e acessíveis usando código limpo (HTML, SCSS, JavaScript, Vue.js, React, Tailwind, Shadcn) ou ferramentas como Webflow e Framer. Sempre seguindo os mais altos padrões do mercado para garantir uma experiência fluida e responsiva em qualquer dispositivo.",

    serviceThreeTitle: "Design Systems",
    serviceThreeText:
      "Crio design systems fáceis de usar, com arquitetura clara de componentes, sub-sistemas e estrutura de design tokens. Tudo documentado e sincronizado com o código, ajudando sua equipe a ser mais rápida e manter a consistência à medida que o produto cresce.",

    serviceFourTitle: "Identidade Visual e design de marca",
    serviceFourText:
      "Ajudo marcas a encontrar sua voz e identidade visual. Desde criação de marcas e apresentações até diretrizes completas, crio sistemas consistentes, memoráveis e preparados para escalar tanto no digital ou físico.",

    howOneTitle: "Briefing",
    howOneText:
      "Começamos com uma conversa rápida por e-mail, WhatsApp ou videochamada para entender suas necessidades, metas e público-alvo.",

    howTwoTitle: "Proposta",
    howTwoText:
      "Com base no briefing, envio uma proposta clara e objetiva com escopo, prazos e investimento. Tudo alinhado antes de começar.",

    howThreeTitle: "Design & Desenvolvimento",
    howThreeText:
      "Com a proposta aprovada, inicio o projeto. Compartilho cada etapa com você, sempre aberto a feedbacks para garantir que atingiremos o resultado esperado.",

    howFourTitle: "Entrega",
    howFourText:
      "Entrego os arquivos finais prontos para uso, seja um site publicado, arquivos de design para desenvolvimento ou um produto pronto para crescer.",

    whyLabel: "Por que escolher",

    whyItemOneTitle: "Mais de 11 anos de experiência",
    whyItemOneText:
      "Com mais de uma década atuando, ajudo a transformar ideias em realidade em diversos setores, sempre equilibrando as necessidades do usuário com os objetivos do negócio.",

    whyItemTwoTitle: "Trabalho de alta qualidade, entregue rápido",
    whyItemTwoText:
      "Sem abrir mão da qualidade, usabilidade ou desempenho. Foco em entregar seu projeto com agilidade, qualidade e de acordo com suas necessidades. ",

    whyItemThreeTitle: "Feito especialmente para seu público",
    whyItemThreeText:
      "Cada projeto é moldado por insights reais dos usuários. O resultado? Experiências naturais, que resolvem problemas reais e se conectam com quem realmente importa.",

    contactTitle: "Vamos conversar sobre o seu próximo projeto.",

    menuPortfolio: "Portfólio",
    menuServices: "Serviços",
    menuAbout: "Sobre",
    menuContact: "Contato",
  },
};

// Função para atualizar textos no HTML conforme data-i18n
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

// Função principal que detecta o país e aplica idioma
async function detectCountryAndSetLanguage() {
  try {
    // Troque 'YOUR_TOKEN_HERE' pelo seu token da ipinfo.io (gratuito)
    const response = await fetch("https://ipinfo.io/json?token=8772dc964a45be");
    const data = await response.json();

    if (data.country === "BR") {
      setLanguage("pt");
      console.log("Idioma definido para Português (Brasil)");
    } else {
      setLanguage("en");
      console.log("Idioma definido para Inglês (default)");
    }
  } catch (error) {
    console.error("Erro na detecção do país, usando inglês:", error);
    setLanguage("en");
  }
}

// Executa ao carregar a página
window.addEventListener("load", detectCountryAndSetLanguage);

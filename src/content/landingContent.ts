export type NavItem = {
  label: string
  href: string
}

export type Metric = {
  value: string
  label: string
}

export type OverviewCard = {
  tag: string
  title: string
  text: string
}

export type InfrastructureCard = {
  title: string
  text: string
  detail: string
}

export type FlowStep = {
  step: string
  title: string
  text: string
}

export type UseCase = {
  title: string
  text: string
}

export type HeroPanel = {
  kicker: string
  title: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const landingContent = {
  nav: [
    { label: 'O que é', href: '#overview' },
    { label: 'Infraestrutura', href: '#infrastructure' },
    { label: 'Fluxo', href: '#flow' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavItem[],
  hero: {
    eyebrow: 'Hermes Agent + Hostinger',
    title: 'Seu agente pode trabalhar na nuvem, não só no seu laptop.',
    body:
      'O Hermes Agent pode rodar em um VPS, usar Docker como base de execução e continuar acessível por terminal ou apps de mensagem. Com a Hostinger, você monta esse ambiente com mais controle e sem depender do laptop ligado o tempo todo.',
    note:
      'Se a oferta fizer sentido para você, use o link afiliado e teste o cupom OTAVIOMIRANDA no checkout. Como campanhas e descontos podem mudar, vale conferir o benefício disponível no momento da compra.',
    panel: {
      kicker: 'Hermes Agent fora da máquina local',
      title: 'Um jeito prático de rodar o agente em um ambiente próprio, com mais previsibilidade.',
    } satisfies HeroPanel,
    primaryCta: {
      label: 'Ver opção de VPS na Hostinger',
      href: 'https://www.hostg.xyz/SHJH8',
    },
    secondaryCta: { label: 'Entender o Hermes Agent', href: '#overview' },
    badges: ['CLI + canais de mensagem', 'Memória e skills', 'VPS + Docker'],
    metrics: [
      { value: 'Nous Research', label: 'projeto oficial por trás do Hermes Agent' },
      { value: 'Full root access', label: 'recurso oficial destacado na VPS da Hostinger' },
      { value: 'OTAVIOMIRANDA', label: 'cupom para testar no checkout, sem desconto fixo prometido' },
    ] satisfies Metric[],
  },
  overview: {
    sectionLabel: 'O que é o Hermes Agent',
    sectionTitle: 'Um agente que continua útil depois da primeira conversa.',
    sectionBody:
      'O Hermes Agent é um projeto da Nous Research com CLI própria, memória entre sessões, sistema de skills e suporte a vários canais de conversa. Em vez de ficar preso a uma única máquina, ele pode operar em ambientes diferentes e manter o contexto de uso ao longo do tempo.',
    supportNote:
      'Ele pode ser usado por terminal e também por integrações de mensagem como Telegram, Discord, Slack, WhatsApp e Signal.',
    cards: [
      {
        tag: 'CLI',
        title: 'Uso direto, sem camada desnecessária',
        text: 'O acesso por terminal entra como base prática para quem quer configurar, testar e acompanhar o agente com mais controle.',
      },
      {
        tag: 'Canais',
        title: 'Mais de um jeito de conversar com o agente',
        text: 'A documentação oficial cita integrações com Telegram, Discord, Slack, WhatsApp e Signal, além do uso por CLI.',
      },
      {
        tag: 'Persistência',
        title: 'Memória e skills para evoluir com o uso',
        text: 'A proposta do Hermes inclui memória entre sessões e sistema de skills, o que ajuda em fluxos que precisam crescer com o tempo.',
      },
    ] satisfies OverviewCard[],
  },
  infrastructure: {
    sectionLabel: 'Hostinger + VPS + Docker',
    sectionTitle: 'Uma base direta para publicar, testar e manter o ambiente.',
    sectionBody:
      'Se a ideia é rodar o Hermes Agent fora da máquina local, o caminho mais direto é começar por um VPS. A Hostinger oferece full root access, opções de Linux e suporte claro a Docker. Isso ajuda a montar um ambiente controlado, replicável e mais fácil de ajustar com o tempo.',
    cards: [
      {
        title: 'Controle de ambiente sem depender do laptop',
        text: 'Um VPS ajuda a separar o agente da máquina pessoal e cria um espaço mais estável para testar, revisar e iterar.',
        detail: 'Boa escolha para quem quer manter o projeto rodando fora do próprio computador.',
      },
      {
        title: 'Docker como caminho prático para empacotar o setup',
        text: 'Containers entram como um caminho claro para organizar instalação, repetição do ambiente e manutenção sem depender de improviso.',
        detail: 'A própria Hostinger publica material oficial sobre Docker em Ubuntu dentro desse contexto.',
      },
      {
        title: 'Linux disponível para um fluxo previsível',
        text: 'Ubuntu e outras distros Linux aparecem como base útil para um setup que você pode ajustar com calma, sem prender tudo a uma máquina só.',
        detail: 'O foco aqui é mostrar um caminho viável, não vender facilidade absoluta.',
      },
    ] satisfies InfrastructureCard[],
  },
  flow: {
    sectionLabel: 'Fluxo em 3 passos',
    sectionTitle: 'Como esse setup entra no ar.',
    note: 'O foco é mostrar um caminho viável, com menos improviso e mais controle.',
    steps: [
      {
        step: '01',
        title: 'Escolha a base',
        text: 'Comece com um VPS compatível com o tipo de carga que você quer testar.',
      },
      {
        step: '02',
        title: 'Prepare o ambiente',
        text: 'Use Ubuntu e Docker para deixar a instalação mais previsível e fácil de repetir.',
      },
      {
        step: '03',
        title: 'Rode e acompanhe',
        text: 'Suba o Hermes Agent no ambiente, valide o canal de acesso que faz sentido para você e ajuste o uso com calma.',
      },
    ] satisfies FlowStep[],
  },
  useCases: {
    sectionLabel: 'Casos de uso e benefícios',
    sectionTitle: 'Quando essa combinação faz sentido.',
    intro:
      'Essa combinação faz sentido para quem quer sair do teste local e colocar o agente em um ambiente mais estável.',
    items: [
      {
        title: 'Ambiente separado do laptop',
        text: 'Bom para quem não quer depender da própria máquina ligada o tempo todo.',
      },
      {
        title: 'Mais controle técnico',
        text: 'VPS com root access e Docker ajudam quando você quer ajustar o ambiente com mais liberdade.',
      },
      {
        title: 'Conversa por mais de um canal',
        text: 'O Hermes Agent pode ser acessado por CLI e também por canais de mensagem, dependendo da configuração escolhida.',
      },
      {
        title: 'Memória e skills',
        text: 'A proposta do Hermes inclui memória persistente e criação de skills, o que ajuda em fluxos que precisam evoluir com o uso.',
      },
    ] satisfies UseCase[],
  },
  cta: {
    sectionLabel: 'Oferta e CTA final',
    title: 'Se a ideia faz sentido, o próximo passo é montar a base.',
    body:
      'Se você quer testar o Hermes Agent em um ambiente próprio, a Hostinger pode ser um bom ponto de partida. Abra a oferta pelo link afiliado e, se o cupom estiver ativo no momento da compra, aplique OTAVIOMIRANDA no checkout.',
    coupon: 'OTAVIOMIRANDA',
    primaryCta: {
      label: 'Abrir oferta da Hostinger',
      href: 'https://www.hostg.xyz/SHJH8',
    },
    secondaryCta: { label: 'Ler a documentação do Hermes Agent', href: 'https://hermes-agent.nousresearch.com/' },
    note: 'Campanhas e condições comerciais podem mudar sem aviso. Confira o benefício disponível no checkout.',
  },
  faq: {
    sectionLabel: 'Perguntas frequentes',
    sectionTitle: 'Perguntas frequentes antes de subir o ambiente.',
    items: [
      {
        question: 'Preciso deixar meu computador ligado?',
        answer:
          'Não necessariamente. A ideia aqui é mostrar um cenário em que o Hermes Agent roda em um VPS, fora da máquina local.',
      },
      {
        question: 'Esse setup depende de Docker?',
        answer:
          'Docker não é a única forma de uso, mas é um caminho claro para organizar o ambiente. A própria Hostinger tem material oficial sobre instalação de Docker em Ubuntu e oferta de VPS com suporte a esse tipo de fluxo.',
      },
      {
        question: 'A página promete instalação automática?',
        answer:
          'Não. O conteúdo mostra um caminho viável. A configuração final depende do ambiente escolhido e da documentação oficial do Hermes Agent e da Hostinger.',
      },
      {
        question: 'O cupom garante um desconto específico?',
        answer:
          'Não. O texto apenas orienta você a testar o cupom OTAVIOMIRANDA no checkout, sem comunicar percentual fixo.',
      },
    ] satisfies FaqItem[],
  },
  footer: {
    kicker: 'Hermes Agent + Hostinger',
    title: 'VPS, Docker e um caminho mais claro para rodar fora do laptop',
    body: 'Uma página direta para entender o cenário, validar o setup e decidir se faz sentido levar o Hermes Agent para um ambiente próprio.',
  },
}

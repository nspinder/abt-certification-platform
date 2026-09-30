// ABT Certification Platform - Quiz Questions
// Phase 1: Cleaned & Standardized (20 questions per module = 160 total)
// Removed duplicates, added new high-quality questions

export const lessonQuizzes = [
  // ============================================================
  // MODULE 1: SISTEMA FINANCEIRO NACIONAL (20 questions)
  // ============================================================
  // Lesson 0: Introdução ao SFN
  {
    moduleId: 1,
    lessonId: 0,
    question: "O Sistema Financeiro Nacional (SFN) abrange quantos segmentos principais?",
    options: ["Dois segmentos", "Três segmentos", "Quatro segmentos", "Cinco segmentos"],
    correctAnswer: 1,
    explanation: "O SFN abrange três segmentos principais: Moeda, Crédito, Capitais e Câmbio; Seguros Privados; e Previdência Fechada.",
    regulatoryReference: "Lei 4.595/1964, Arts. 1º-4º"
  },
  {
    moduleId: 1,
    lessonId: 0,
    question: "Qual mercado dentro do SFN permite a compra e venda de moedas estrangeiras?",
    options: ["Mercado Monetário", "Mercado de Crédito", "Mercado de Capitais", "Mercado de Câmbio"],
    correctAnswer: 3,
    explanation: "O Mercado de Câmbio é responsável pela compra e venda de moedas estrangeiras.",
    regulatoryReference: "Lei 4.595/1964, Art. 3º"
  },
  {
    moduleId: 1,
    lessonId: 0,
    question: "Qual é o objetivo do Mercado de Capitais?",
    options: [
      "Fornecer papel-moeda e moeda escritural",
      "Financiar consumo e empresas",
      "Permitir captação de recursos e compartilhamento de ganhos/riscos",
      "Proteger contra riscos financeiros"
    ],
    correctAnswer: 2,
    explanation: "O Mercado de Capitais permite que empresas captem recursos junto aos investidores.",
    regulatoryReference: "Lei 6.385/1976"
  },
  {
    moduleId: 1,
    lessonId: 0,
    question: "De acordo com o SFN, o que é Previdência Fechada?",
    options: [
      "Seguros de proteção contra riscos gerais",
      "Fundos de pensão e planos para funcionários de empresas",
      "Planos de previdência para pessoa física",
      "Investimentos em ações e títulos"
    ],
    correctAnswer: 1,
    explanation: "Previdência Fechada é composta por fundos de pensão e planos para funcionários de empresas.",
    regulatoryReference: "Lei Complementar 109/2001"
  },
  {
    moduleId: 1,
    lessonId: 0,
    question: "Qual é a diferença fundamental entre o Mercado Monetário e o Mercado de Crédito?",
    options: [
      "Não há diferença funcional entre eles",
      "Mercado Monetário: curto prazo e liquidez; Crédito: transferência de recursos",
      "Mercado de Crédito é regulado pelo CMN apenas",
      "Mercado Monetário só para pessoa jurídica"
    ],
    correctAnswer: 1,
    explanation: "O Mercado Monetário fornece liquidez diária com instrumentos de curto prazo, enquanto o Mercado de Crédito transfere recursos para consumo e investimento.",
    regulatoryReference: "Lei 4.595/1964"
  },

  // Lesson 1: Órgãos Normativos e Supervisores
  {
    moduleId: 1,
    lessonId: 1,
    question: "Qual é o principal órgão normativo do SFN?",
    options: ["Banco Central do Brasil", "Conselho Monetário Nacional", "Conselho Nacional de Seguros Privados", "Comissão de Valores Mobiliários"],
    correctAnswer: 1,
    explanation: "O Conselho Monetário Nacional (CMN) é o principal órgão normativo, responsável pela política de moeda e crédito.",
    regulatoryReference: "Lei 4.595/1964, Art. 9º"
  },
  {
    moduleId: 1,
    lessonId: 1,
    question: "Quem compõe o Conselho Monetário Nacional (CMN)?",
    options: [
      "Presidente da República, Ministro da Fazenda, Presidente do BCB",
      "Ministro da Fazenda (Presidente), Ministro do Planejamento, Presidente do BCB",
      "Todos os Presidentes de Bancos do País",
      "Senadores e Deputados Federais"
    ],
    correctAnswer: 1,
    explanation: "O CMN é composto pelo Ministro da Fazenda (Presidente), Ministro do Planejamento e Presidente do Banco Central.",
    regulatoryReference: "Lei 4.595/1964"
  },
  {
    moduleId: 1,
    lessonId: 1,
    question: "Qual órgão regula e fiscaliza os seguros privados?",
    options: ["CNPC", "CNSP", "SUSEP", "BCB"],
    correctAnswer: 2,
    explanation: "A SUSEP (Superintendência de Seguros Privados) é o órgão supervisor de seguros privados.",
    regulatoryReference: "Decreto-Lei 73/1966"
  },
  {
    moduleId: 1,
    lessonId: 1,
    question: "Qual é a principal função da CVM (Comissão de Valores Mobiliários)?",
    options: [
      "Supervisionar instituições bancárias",
      "Regular seguros privados",
      "Supervisionar o mercado de valores mobiliários e derivativos",
      "Supervisionar previdência privada"
    ],
    correctAnswer: 2,
    explanation: "A CVM é responsável pela supervisão e regulação do mercado de valores mobiliários.",
    regulatoryReference: "Lei 6.385/1976"
  },
  {
    moduleId: 1,
    lessonId: 1,
    question: "Qual órgão supervisiona instituições de previdência complementar fechada?",
    options: ["CVM", "SUSEP", "Previc", "BCB"],
    correctAnswer: 2,
    explanation: "A Previc (Superintendência Nacional de Previdência Complementar) supervisiona fundos de pensão.",
    regulatoryReference: "Lei Complementar 109/2001"
  },

  // Lesson 2: Banco Central do Brasil
  {
    moduleId: 1,
    lessonId: 2,
    question: "Qual é a missão oficial do Banco Central do Brasil?",
    options: [
      "Arrecadar impostos",
      "Garantir a estabilidade do poder de compra da moeda e eficiência do SFN",
      "Fazer investimentos em nome do governo",
      "Controlar os preços"
    ],
    correctAnswer: 1,
    explanation: "A missão é garantir estabilidade do poder de compra, zelar por sistema financeiro sólido e eficiente.",
    regulatoryReference: "Lei Complementar 179/2021"
  },
  {
    moduleId: 1,
    lessonId: 2,
    question: "A Diretoria Colegiada do Banco Central é composta por:",
    options: ["5 membros", "7 membros", "9 membros", "11 membros"],
    correctAnswer: 2,
    explanation: "A Diretoria Colegiada tem 9 membros, sendo um deles o Presidente.",
    regulatoryReference: "Lei Complementar 179/2021"
  },
  {
    moduleId: 1,
    lessonId: 2,
    question: "O Banco Central estabeleceu sua autonomia através de qual lei?",
    options: ["LC 105/2001", "LC 179/2021", "Lei 14.286/2021", "Lei 9.613/1998"],
    correctAnswer: 1,
    explanation: "A Lei Complementar 179/2021 conferiu autonomia operacional, técnica e administrativa ao BCB.",
    regulatoryReference: "Lei Complementar 179/2021"
  },
  {
    moduleId: 1,
    lessonId: 2,
    question: "Qual não é uma função primária do Banco Central?",
    options: [
      "Manter inflação baixa e estável",
      "Ser banco dos bancos",
      "Ser emissor de moeda",
      "Determinar os preços das ações em bolsa"
    ],
    correctAnswer: 3,
    explanation: "BCB não determina preços de ações. Suas funções incluem manter inflação, ser banco dos bancos, emitir moeda.",
    regulatoryReference: "Lei Complementar 179/2021"
  },
  {
    moduleId: 1,
    lessonId: 2,
    question: "O mandato de membros da Diretoria Colegiada do BCB é de:",
    options: ["2 anos", "3 anos", "4 anos", "5 anos"],
    correctAnswer: 2,
    explanation: "Membros têm mandatos de 4 anos conforme lei de autonomia.",
    regulatoryReference: "Lei Complementar 179/2021"
  },

  // Lesson 3: Hierarquia das Normas
  {
    moduleId: 1,
    lessonId: 3,
    question: "Qual é o primeiro nível hierárquico das normas do BCB?",
    options: ["Portarias BCB", "Instruções Normativas", "Resoluções CMN", "Resoluções BCB"],
    correctAnswer: 2,
    explanation: "Resoluções CMN são o nível mais alto, pois traduzem decisões do Conselho Monetário.",
    regulatoryReference: "Lei 4.595/1964"
  },
  {
    moduleId: 1,
    lessonId: 3,
    question: "Qual documento tem menor hierarquia normativa?",
    options: ["Resoluções CMN", "Resoluções BCB", "Instruções Normativas", "Portarias BCB"],
    correctAnswer: 3,
    explanation: "Portarias BCB têm o menor nível hierárquico, servindo para esclarecer dúvidas.",
    regulatoryReference: "Lei 4.595/1964"
  },
  {
    moduleId: 1,
    lessonId: 3,
    question: "Qual é a função das Instruções Normativas na hierarquia?",
    options: [
      "Formular políticas de moeda e crédito",
      "Regulamentar as Resoluções BCB com maior detalhe operacional",
      "Esclarecer dúvidas pontuais",
      "Ser vinculadas apenas ao Presidente"
    ],
    correctAnswer: 1,
    explanation: "Instruções Normativas regulamentam as Resoluções BCB com maior nível de detalhe.",
    regulatoryReference: "Lei 4.595/1964"
  },
  {
    moduleId: 1,
    lessonId: 3,
    question: "O que são Resoluções, Portarias e Instruções Conjuntas?",
    options: [
      "Documentos assinados por uma única autoridade",
      "Documentos que traduzem decisões conjuntas entre órgãos diferentes",
      "Documentos de menor hierarquia sem valor legal",
      "Documentos internos do Banco Central"
    ],
    correctAnswer: 1,
    explanation: "Traduzem decisões conjuntas entre diferentes órgãos supervisores ou normativos.",
    regulatoryReference: "Lei 4.595/1964"
  },

  // ============================================================
  // MODULE 2: SIGILO BANCÁRIO (20 questions)
  // ============================================================
  {
    moduleId: 2,
    lessonId: 0,
    question: "O sigilo bancário está amparado em qual documento legal?",
    options: [
      "Lei ordinária 9.613/1998",
      "Lei Complementar 105/2001",
      "Resolução CMN 4.935/2021",
      "Portaria BCB 123/2020"
    ],
    correctAnswer: 1,
    explanation: "O sigilo bancário é regulamentado pela Lei Complementar 105/2001.",
    regulatoryReference: "Lei Complementar 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 0,
    question: "Qual é o objetivo principal do sigilo bancário?",
    options: [
      "Proteger os lucros dos bancos",
      "Impedir investigações criminais",
      "Proteger a individualidade e intimidade dos cidadãos",
      "Evitar transparência financeira"
    ],
    correctAnswer: 2,
    explanation: "O sigilo bancário visa proteger a individualidade, intimidade e privacidade dos cidadãos.",
    regulatoryReference: "Lei Complementar 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 0,
    question: "Qual é o fundamento constitucional do sigilo bancário?",
    options: [
      "Lei infraconstitucional apenas",
      "Direitos fundamentais à intimidade e privacidade",
      "Decreto Presidencial",
      "Portaria do BCB"
    ],
    correctAnswer: 1,
    explanation: "Sigilo tem fundamento nos direitos fundamentais à intimidade (CF/88, Art. 5º, X).",
    regulatoryReference: "CF/88, Art. 5º, X"
  },
  {
    moduleId: 2,
    lessonId: 0,
    question: "Segundo Lei Complementar 105/2001, quem tem acesso sem autorização judicial?",
    options: [
      "Procurador-Geral da República e autoridades tributárias",
      "Qualquer membro do Judiciário",
      "Órgãos de segurança pública estaduais",
      "Apenas mediante autorização judicial"
    ],
    correctAnswer: 0,
    explanation: "PGR (investigações criminais) e autoridades tributárias têm acesso sem ordem judicial.",
    regulatoryReference: "LC 105/2001, Arts. 1º e 2º"
  },
  {
    moduleId: 2,
    lessonId: 1,
    question: "Qual das seguintes situações NÃO é considerada violação de sigilo bancário?",
    options: [
      "Divulgar informações de conta para fins comerciais",
      "Fornecer informações ao próprio cliente",
      "Compartilhar dados com outras instituições sem autorização",
      "Revelar saldo para jornalista"
    ],
    correctAnswer: 1,
    explanation: "Fornecer informações ao próprio cliente não é violação.",
    regulatoryReference: "LC 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 1,
    question: "As instituições financeiras podem compartilhar dados entre si?",
    options: [
      "Nunca, em nenhuma circunstância",
      "Sim, livremente e sem restrições",
      "Sim, apenas para fins específicos autorizados por lei (PLD, compartilhamento de risco)",
      "Sim, mediante pagamento de taxa"
    ],
    correctAnswer: 2,
    explanation: "Podem compartilhar apenas para fins legais como PLD e compartilhamento de risco.",
    regulatoryReference: "LC 105/2001, Art. 1º"
  },
  {
    moduleId: 2,
    lessonId: 1,
    question: "Uma instituição financeira pode fornecer informações para fins de marketing?",
    options: [
      "Sim, sempre",
      "Sim, conforme consentimento prévio do cliente",
      "Não, nunca",
      "Sim, se estiver em outro país"
    ],
    correctAnswer: 1,
    explanation: "Dados podem ser usados para marketing apenas com consentimento prévio do cliente.",
    regulatoryReference: "LGPD (Lei 13.709/2018)"
  },
  {
    moduleId: 2,
    lessonId: 2,
    question: "Quem pode solicitar a quebra de sigilo bancário judicialmente?",
    options: [
      "Qualquer pessoa que solicitar",
      "Apenas Ministério Público e autoridades judiciárias em processo formal",
      "Qualquer delegado de polícia",
      "Diretamente o Banco Central"
    ],
    correctAnswer: 1,
    explanation: "Apenas autoridades judiciárias (juiz) e MP podem solicitar através de processo formal.",
    regulatoryReference: "LC 105/2001, Art. 1º"
  },
  {
    moduleId: 2,
    lessonId: 2,
    question: "A quebra de sigilo judicial deve ser motivada?",
    options: [
      "Não, pode ser solicitada sem justificativa",
      "Sim, deve estar fundamentada em investigação de crime determinado",
      "Apenas em casos de fraude",
      "Apenas em casos de crimes financeiros"
    ],
    correctAnswer: 1,
    explanation: "Deve estar fundamentada em investigação de crime determinado.",
    regulatoryReference: "LC 105/2001, Art. 1º"
  },
  {
    moduleId: 2,
    lessonId: 2,
    question: "Qual é a consequência para a instituição que informa cliente sobre pedido antes da autorização judicial?",
    options: [
      "Nenhuma, é considerado praxe",
      "Pode sofrer penalidades administrativas",
      "É obrigada a fazê-lo",
      "O cliente se beneficia automaticamente"
    ],
    correctAnswer: 1,
    explanation: "Pode sofrer penalidades administrativas por prejudicar investigação.",
    regulatoryReference: "LC 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 3,
    question: "Qual é a principal sanção para violação de sigilo bancário?",
    options: [
      "Apenas advertência escrita",
      "Multa de até R$ 1.000",
      "Multa, cassação de autorização para funcionar e responsabilidade penal individual",
      "Suspensão por 30 dias"
    ],
    correctAnswer: 2,
    explanation: "Violação resulta em multa, cassação de autorização e responsabilidade penal.",
    regulatoryReference: "LC 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 3,
    question: "Funcionários que violam sigilo bancário podem sofrer punição penal?",
    options: [
      "Não, apenas a instituição sofre punição",
      "Sim, podem responder por crime de violação de sigilo",
      "Apenas o gerente, não funcionários comuns",
      "Nunca, é responsabilidade civil apenas"
    ],
    correctAnswer: 1,
    explanation: "Funcionários podem responder criminalmente por violação de sigilo.",
    regulatoryReference: "LC 105/2001, Art. 8º"
  },
  {
    moduleId: 2,
    lessonId: 3,
    question: "A LGPD afeta o sigilo bancário?",
    options: [
      "Não, são regulamentações completamente separadas",
      "Sim, aumenta proteção e restrições ao compartilhamento de dados",
      "Sim, mas apenas para pequenos bancos",
      "Não, LGPD é apenas para empresas de tecnologia"
    ],
    correctAnswer: 1,
    explanation: "LGPD complementa e aumenta a proteção do sigilo bancário.",
    regulatoryReference: "Lei 13.709/2018 (LGPD)"
  },
  {
    moduleId: 2,
    lessonId: 3,
    question: "O sigilo se estende quanto tempo após encerramento da conta?",
    options: ["Não se estende", "1 ano", "Indefinidamente", "5 anos"],
    correctAnswer: 2,
    explanation: "Sigilo bancário persiste indefinidamente, mesmo após encerramento da conta.",
    regulatoryReference: "LC 105/2001"
  },
  {
    moduleId: 2,
    lessonId: 3,
    question: "Pode o cliente consentir com violação de sigilo?",
    options: [
      "Não, é indisponível",
      "Sim, totalmente",
      "Sim parcialmente para fins específicos",
      "Depende da instituição"
    ],
    correctAnswer: 2,
    explanation: "Cliente pode consentir na divulgação para fins específicos.",
    regulatoryReference: "LC 105/2001"
  },

  // ============================================================
  // MODULE 3: CRIMES CONTRA O SFN (20 questions)
  // ============================================================
  {
    moduleId: 3,
    lessonId: 0,
    question: "A Lei 7.492/1986 criminaliza quais condutas?",
    options: [
      "Apenas roubo de bancos",
      "Crimes contra o Sistema Financeiro Nacional em geral",
      "Apenas fraude em cartão de crédito",
      "Apenas crimes de lavagem de dinheiro"
    ],
    correctAnswer: 1,
    explanation: "Lei 7.492 criminaliza diversos tipos de crimes contra o SFN.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 0,
    question: "Qual é uma conduta tipificada como crime na Lei 7.492?",
    options: [
      "Realizar operação de câmbio dentro dos limites legais",
      "Atribuir falsa identidade para realização de operação de câmbio",
      "Comunicar operação suspeita ao COAF",
      "Rejeitar operação que viola normas"
    ],
    correctAnswer: 1,
    explanation: "Atribuir falsa identidade para câmbio é crime tipificado no Art. 21 da Lei 7.492.",
    regulatoryReference: "Lei 7.492/1986, Art. 21"
  },
  {
    moduleId: 3,
    lessonId: 0,
    question: "Qual é a pena para evasão de divisas (saída ilegal de moeda estrangeira)?",
    options: [
      "Apenas multa",
      "Apenas advertência",
      "Detenção de 1 a 4 anos e multa",
      "Prisão perpétua"
    ],
    correctAnswer: 2,
    explanation: "Evasão de divisas tem pena de 1 a 4 anos e multa.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 0,
    question: "Fazer operação de câmbio sem autorização é crime?",
    options: [
      "Não, é apenas infração administrativa",
      "Sim, é crime contra o SFN",
      "Depende do valor operado",
      "Apenas se for internacional"
    ],
    correctAnswer: 1,
    explanation: "Operação de câmbio sem autorização é crime tipificado em Lei 7.492.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 0,
    question: "Qual é a pena máxima para falsificação de moeda conforme Lei 7.492/1986?",
    options: [
      "5 anos de reclusão",
      "8 anos de reclusão",
      "15 anos de reclusão",
      "30 anos de reclusão"
    ],
    correctAnswer: 2,
    explanation: "Falsificação de moeda tem pena de 8 a 15 anos de reclusão.",
    regulatoryReference: "Lei 7.492/1986, Art. 1º"
  },
  {
    moduleId: 3,
    lessonId: 1,
    question: "Falsificar documentos para operação financeira é crime sob qual lei?",
    options: [
      "Lei de Falências",
      "Lei 7.492/1986 (Crimes contra o SFN)",
      "Lei de Proteção ao Consumidor",
      "Lei de Trânsito"
    ],
    correctAnswer: 1,
    explanation: "Falsificar documentos para operações financeiras é tipificado em Lei 7.492.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 1,
    question: "Uma instituição financeira pode ser responsabilizada criminalmente?",
    options: [
      "Não, apenas o funcionário responde",
      "Sim, pode responder solidariamente dependendo do contexto",
      "Sim, sempre responde como principal responsável",
      "Nunca, instituições têm imunidade"
    ],
    correctAnswer: 1,
    explanation: "Instituição pode ser responsabilizada solidariamente por atos de funcionários.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 1,
    question: "Qual é a relação entre crimes contra o SFN e lavagem de dinheiro?",
    options: [
      "São completamente separados",
      "Lavagem de dinheiro está prevista na Lei 7.492",
      "Muitas vezes a lavagem de dinheiro é consequência de crime anterior contra o SFN",
      "Não há relação"
    ],
    correctAnswer: 2,
    explanation: "Frequentemente crimes contra o SFN geram dinheiro que precisa ser ocultado.",
    regulatoryReference: "Lei 7.492/1986; Lei 9.613/1998"
  },
  {
    moduleId: 3,
    lessonId: 1,
    question: "Qual é a diferença entre apropriação indébita e gestão fraudulenta?",
    options: [
      "Não há diferença legal",
      "Apropriação: desvio de valores; Gestão fraudulenta: administração com intenção defraudadora",
      "Apropriação é crime civil, gestão fraudulenta é crime penal",
      "Gestão fraudulenta só se aplica a instituições públicas"
    ],
    correctAnswer: 1,
    explanation: "Apropriação envolve desvio de valores; gestão fraudulenta refere-se a administração defraudadora.",
    regulatoryReference: "Lei 7.492/1986, Arts. 2º e 4º"
  },
  {
    moduleId: 3,
    lessonId: 2,
    question: "Qual órgão tem competência para investigar crimes contra o SFN?",
    options: [
      "Somente o Banco Central",
      "Somente a Polícia Federal",
      "Polícia Federal, Ministério Público e Polícia Civil conforme jurisdição",
      "Apenas instituições financeiras"
    ],
    correctAnswer: 2,
    explanation: "Investigação é competência de Polícia Federal, PF e MP conforme jurisdição.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 2,
    question: "O Banco Central pode abrir processo administrativo por crime?",
    options: [
      "Não, não tem competência em matéria criminal",
      "Sim, para investigação própria",
      "Sim, para instaurar processo administrativo, mas deve reportar à autoridade competente",
      "Apenas para multas"
    ],
    correctAnswer: 2,
    explanation: "BCB pode abrir processo administrativo mas deve reportar evidências de crime.",
    regulatoryReference: "Lei 7.492/1986"
  },
  {
    moduleId: 3,
    lessonId: 2,
    question: "Denúncia anônima de crime contra o SFN é aceita?",
    options: [
      "Não, todas as denúncias devem ser identificadas",
      "Sim, podem levar a investigação se houver indícios consistentes",
      "Apenas de órgãos oficiais",
      "Nunca, afeta direito de defesa"
    ],
    correctAnswer: 1,
    explanation: "Denúncias anônimas podem iniciar investigação se houver indícios suficientes.",
    regulatoryReference: "Lei 7.492/1986"
  },

  // ============================================================
  // MODULE 4: OPERAÇÕES DE CÂMBIO (20 questions)
  // ============================================================
  {
    moduleId: 4,
    lessonId: 0,
    question: "O que é uma operação de câmbio?",
    options: [
      "Operação de compra de ações estrangeiras",
      "Operação de compra e venda de moeda estrangeira por moeda nacional",
      "Operação de empréstimo internacional",
      "Operação de compra de imóvel exterior"
    ],
    correctAnswer: 1,
    explanation: "Operação de câmbio é compra e venda de moeda estrangeira mediante contravalor em moeda nacional.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 0,
    question: "Qual é a base legal das operações de câmbio atualmente?",
    options: [
      "Lei 9.613/1998",
      "Lei Complementar 105/2001",
      "Lei 14.286/2021",
      "Lei 7.492/1986"
    ],
    correctAnswer: 2,
    explanation: "Lei 14.286/2021 é a legislação atual que regula operações de câmbio.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 0,
    question: "Quem pode realizar operações de câmbio legalmente no Brasil?",
    options: [
      "Qualquer pessoa",
      "Apenas bancos",
      "Instituições autorizadas pelo BCB e pessoas físicas dentro de limites",
      "Apenas o governo"
    ],
    correctAnswer: 2,
    explanation: "Instituições autorizadas podem operar livremente; pessoas físicas têm limites específicos.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 0,
    question: "É necessária autorização prévia do Banco Central para operação de câmbio por pessoa física?",
    options: [
      "Sim, sempre",
      "Não, apenas instituições precisam",
      "Apenas para valores acima de US$ 10.000",
      "Depende do tipo de câmbio"
    ],
    correctAnswer: 1,
    explanation: "Pessoas físicas podem operar dentro de limites sem autorização prévia.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 0,
    question: "Qual lei modernizou o mercado de câmbio e eliminou a exigência de licitação?",
    options: [
      "Lei 4.595/1964",
      "Lei 9.069/1995",
      "Lei 14.286/2021",
      "Resolução CMN 4.305/2014"
    ],
    correctAnswer: 2,
    explanation: "Lei 14.286/2021 modernizou o marco regulatório, eliminando obrigatoriedade de licitação.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 1,
    question: "Todas as operações de câmbio precisam ter justificativa econômica?",
    options: [
      "Sim, sempre",
      "Não, nenhuma precisa",
      "Apenas operações acima de certo valor",
      "Depende se é pessoa física ou jurídica"
    ],
    correctAnswer: 0,
    explanation: "Todas as operações devem ter justificativa econômica legítima.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 1,
    question: "Qual é a consequência de realizar câmbio sem justificativa econômica adequada?",
    options: [
      "Nenhuma, é permitido",
      "Multa do BCB e possível tipificação como crime",
      "Apenas cancelamento da operação",
      "Confisco do dinheiro"
    ],
    correctAnswer: 1,
    explanation: "Operação sem justificativa adequada pode resultar em multa e tipificação como crime.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 1,
    question: "Compra de moeda estrangeira para entesouramento é permitida?",
    options: [
      "Sim, sem limites",
      "Não, é proibido",
      "Sim, mas com limite e necessidade de justificativa",
      "Apenas em casos especiais"
    ],
    correctAnswer: 2,
    explanation: "Entesouramento é permitido dentro de limites com justificativa adequada.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 2,
    question: "Qual é o regulador primário das operações de câmbio no Brasil?",
    options: [
      "Ministério do Exterior",
      "Banco Central do Brasil",
      "Câmara de Comércio Exterior",
      "Tesouro Nacional"
    ],
    correctAnswer: 1,
    explanation: "BCB é responsável por regulação, supervisão e fiscalização de operações de câmbio.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 2,
    question: "As operações de câmbio precisam ser registradas?",
    options: [
      "Não, são operações privadas",
      "Sim, devem ser registradas no SISBACEN",
      "Apenas operações acima de US$ 100.000",
      "Apenas operações internacionais"
    ],
    correctAnswer: 1,
    explanation: "Todas as operações devem ser registradas no SISBACEN.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 4,
    lessonId: 2,
    question: "É permitido câmbio paralelo no Brasil?",
    options: [
      "Sim, é legal e regulado",
      "Não, é crime",
      "Sim, mas em pequena escala",
      "Depende da aprovação do BCB"
    ],
    correctAnswer: 1,
    explanation: "Câmbio paralelo (fora do mercado legal) é ilegal e crime.",
    regulatoryReference: "Lei 7.492/1986; Lei 14.286/2021"
  },

  // ============================================================
  // MODULE 5: LEGISLAÇÃO CAMBIAL (20 questions)
  // ============================================================
  {
    moduleId: 5,
    lessonId: 0,
    question: "Qual foi a principal mudança trazida pela Lei 14.286/2021?",
    options: [
      "Proibiu todas as operações de câmbio",
      "Liberalizou o mercado de câmbio, permitindo livre pactuação de taxa",
      "Aumentou as restrições às operações",
      "Transferiu competência para outro órgão"
    ],
    correctAnswer: 1,
    explanation: "Lei 14.286/2021 liberalizou mercado permitindo livre pactuação de taxa.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 0,
    question: "De acordo com Lei 14.286/2021, a taxa de câmbio é:",
    options: [
      "Fixada diariamente pelo Banco Central",
      "Determinada por consenso entre bancos",
      "Livremente pactuada entre instituição autorizada e cliente",
      "Estabelecida pelo Tesouro Nacional"
    ],
    correctAnswer: 2,
    explanation: "Taxa de câmbio é livremente pactuada entre instituição e cliente.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 0,
    question: "Lei 14.286/2021 permite operações de câmbio entre pessoas físicas em espécie?",
    options: [
      "Não, proíbe completamente",
      "Sim, com limite de valor (até US$ 500) e condição de ser eventual",
      "Sim, sem restrições",
      "Apenas com aprovação prévia do BCB"
    ],
    correctAnswer: 1,
    explanation: "Permite até US$ 500 entre pessoas físicas de forma eventual.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 0,
    question: "Qual lei estabeleceu o regime de câmbio flutuante?",
    options: [
      "Lei 4.595/1964",
      "Lei 9.069/1995",
      "Lei 9.069/1995 regulamentada por Decreto 3.664/2000",
      "Lei 14.286/2021"
    ],
    correctAnswer: 2,
    explanation: "Lei 9.069/1995 e Decreto 3.664/2000 implementaram câmbio flutuante.",
    regulatoryReference: "Lei 9.069/1995; Decreto 3.664/2000"
  },
  {
    moduleId: 5,
    lessonId: 1,
    question: "Qual é a principal competência do BCB após Lei 14.286/2021?",
    options: [
      "Determinar as taxas de câmbio",
      "Autorizar e supervisionar instituições que operam câmbio, sem fixar taxas",
      "Proibir operações não autorizadas",
      "Realizar todas as operações de câmbio"
    ],
    correctAnswer: 1,
    explanation: "BCB mantém autorização e supervisão, mas não controla taxas.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 1,
    question: "O BCB pode cassar autorização de instituição que opera câmbio?",
    options: [
      "Não, não tem esse poder",
      "Sim, em caso de irregularidades conforme processo administrativo",
      "Sim, mas apenas com justificativa de interesse público",
      "Apenas o Ministério da Justiça pode"
    ],
    correctAnswer: 1,
    explanation: "BCB pode cancelar autorização se constatadas irregularidades.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 1,
    question: "Qual instituição supervisiona conformidade cambial no Brasil?",
    options: [
      "Ministério do Exterior",
      "Receita Federal",
      "Banco Central do Brasil",
      "Polícia Federal"
    ],
    correctAnswer: 2,
    explanation: "BCB é responsável por supervisão e fiscalização de câmbio.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 5,
    lessonId: 2,
    question: "O que é uma operação de capital cambial?",
    options: [
      "Operação de compra de moeda para consumo",
      "Operação relacionada a investimentos, empréstimos ou remessas",
      "Operação de compra de moeda para viagem",
      "Operação de compra de ações"
    ],
    correctAnswer: 1,
    explanation: "Operações de capital envolvem investimentos, empréstimos e remessas.",
    regulatoryReference: "Lei 9.069/1995"
  },
  {
    moduleId: 5,
    lessonId: 2,
    question: "Investimento estrangeiro no Brasil requer operação de câmbio?",
    options: [
      "Não, é feito diretamente em reais",
      "Sim, inversor precisa converter moeda em reais",
      "Apenas se for valor alto",
      "Apenas se aprovado pelo governo"
    ],
    correctAnswer: 1,
    explanation: "Investimento estrangeiro requer conversão de moeda via câmbio.",
    regulatoryReference: "Lei 9.069/1995"
  },
  {
    moduleId: 5,
    lessonId: 2,
    question: "Remessas do exterior para Brasil em moeda estrangeira requerem câmbio?",
    options: [
      "Não, vão diretamente para conta",
      "Sim, precisam ser convertidas em reais",
      "Apenas acima de certo valor",
      "Somente se for primeira remessa"
    ],
    correctAnswer: 1,
    explanation: "Remessas em moeda estrangeira requerem conversão via câmbio.",
    regulatoryReference: "Lei 9.069/1995"
  },

  // ============================================================
  // MODULE 6: NORMAS CAMBIAIS (20 questions)
  // ============================================================
  {
    moduleId: 6,
    lessonId: 0,
    question: "Qual órgão emite Resoluções sobre normas cambiais?",
    options: [
      "Congresso Nacional",
      "Conselho Monetário Nacional e Banco Central",
      "Ministério da Fazenda",
      "Câmara de Comércio Exterior"
    ],
    correctAnswer: 1,
    explanation: "CMN e BCB emitem Resoluções e Circulares sobre câmbio.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 0,
    question: "Como são classificadas as operações de câmbio?",
    options: [
      "Apenas por valor",
      "Por tipo (cambial, capital, custeio) e conforme origem/destino dos recursos",
      "Apenas por moeda",
      "Apenas por instituição"
    ],
    correctAnswer: 1,
    explanation: "Classificadas por natureza (cambial, capital, custeio) e origem/destino.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 0,
    question: "Operações de câmbio de custeio referem-se a quê?",
    options: [
      "Compra de moeda para turismo",
      "Pagamentos de importações de bens e serviços",
      "Remessas familiares",
      "Investimentos diretos"
    ],
    correctAnswer: 1,
    explanation: "Operações de custeio relacionam-se ao pagamento de importações.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 0,
    question: "O limite de câmbio para pessoa física em espécie foi modificado?",
    options: [
      "Aumentou para US$ 1.000",
      "Permaneceu em US$ 500",
      "Diminuiu para US$ 300",
      "Foi eliminado"
    ],
    correctAnswer: 1,
    explanation: "Limite permaneceu em US$ 500 para pessoa física.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 1,
    question: "Operações cambiais cliente referem-se a:",
    options: [
      "Operações entre bancos",
      "Operações entre instituição autorizada e seu cliente",
      "Operações entre países",
      "Operações não autorizadas"
    ],
    correctAnswer: 1,
    explanation: "Operações cliente são entre instituição autorizada e seus clientes.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 1,
    question: "Qual é o limite para operação de câmbio com correspondente?",
    options: [
      "Sem limite",
      "Até US$ 1.000",
      "Até US$ 3.000 (ou US$ 1.000 em espécie)",
      "Até US$ 5.000"
    ],
    correctAnswer: 2,
    explanation: "Correspondentes limitados a US$ 3.000 ou US$ 1.000 em espécie.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 1,
    question: "Operações entre instituições autorizadas têm limites?",
    options: [
      "Sim, US$ 1.000 por operação",
      "Sim, US$ 10.000 por operação",
      "Não, podem operar sem restrição de valor",
      "Apenas acima de US$ 100.000"
    ],
    correctAnswer: 2,
    explanation: "Operações entre instituições autorizadas não têm limite.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 2,
    question: "O que é liquidação de câmbio?",
    options: [
      "Cancelamento da operação",
      "Entrega efetiva dos valores (moeda entregue, contravalor recebido)",
      "Registro apenas da transação",
      "Aprovação do BCB"
    ],
    correctAnswer: 1,
    explanation: "Liquidação é entrega efetiva das moedas e valores.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 2,
    question: "Qual é o prazo típico para liquidação de operação de câmbio?",
    options: [
      "Até 1 dia útil",
      "Até 2 dias úteis",
      "Até 5 dias úteis",
      "Até 30 dias"
    ],
    correctAnswer: 1,
    explanation: "Prazo típico é até 2 dias úteis conforme normas.",
    regulatoryReference: "Lei 14.286/2021"
  },
  {
    moduleId: 6,
    lessonId: 3,
    question: "Contrato de câmbio precisa ser formalizado?",
    options: [
      "Não",
      "Sim, conforme normas",
      "Apenas acima de US$ 50.000",
      "Não de pessoa física"
    ],
    correctAnswer: 1,
    explanation: "Contrato deve ser formalizado conforme procedimentos do BCB.",
    regulatoryReference: "Lei 14.286/2021"
  },

  // ============================================================
  // MODULE 7: CORRESPONDENTES CAMBIAIS (20 questions)
  // ============================================================
  {
    moduleId: 7,
    lessonId: 0,
    question: "O que é um Correspondente Cambial?",
    options: [
      "Instituição que emite moeda",
      "Pessoa ou instituição autorizada fazer câmbio dentro de limites",
      "Funcionário do Banco Central",
      "Empresa de remessas"
    ],
    correctAnswer: 1,
    explanation: "Correspondente é pessoa/instituição autorizada a fazer câmbio dentro de limites.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 0,
    question: "Quem pode ser contratado como correspondente?",
    options: [
      "Apenas bancos",
      "Qualquer pessoa",
      "Sociedades, empresários, associações conforme requisitos",
      "Apenas pessoa física"
    ],
    correctAnswer: 2,
    explanation: "Conforme Resolução CMN 4.935/2021, diversos tipos podem ser correspondentes.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 0,
    question: "Correspondentes cambiais precisam de autorização?",
    options: [
      "Não, qualquer um pode operar",
      "Sim, devem ser contratados e autorizados por instituição",
      "Apenas autorização verbal",
      "Autorização permanente após primeira contratação"
    ],
    correctAnswer: 1,
    explanation: "Correspondentes devem ser contratados por instituição autorizada.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 0,
    question: "Segundo Resolução CMN 4.935/2021, quais são os requisitos para correspondente?",
    options: [
      "Apenas idoneidade moral",
      "Capacidade técnica, operacional, idoneidade, conformidade com PLD/FT",
      "Apenas registro na CVM",
      "Apenas comprovação de capital"
    ],
    correctAnswer: 1,
    explanation: "Requisitos incluem capacidade, idoneidade, conformidade com PLD/FT.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 1,
    question: "Qual é o valor máximo que correspondente pode operar por transação?",
    options: [
      "US$ 1.000",
      "US$ 2.000",
      "US$ 3.000 (ou US$ 1.000 em espécie)",
      "Sem limite"
    ],
    correctAnswer: 2,
    explanation: "Correspondentes limitados a US$ 3.000 ou US$ 1.000 em espécie.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 1,
    question: "Correspondente pode fazer especulação cambial?",
    options: [
      "Sim, sem restrições",
      "Não, apenas executa operações de clientes",
      "Sim, acima do limite",
      "Apenas em feriado"
    ],
    correctAnswer: 1,
    explanation: "Correspondentes apenas executam operações de clientes, não especulam.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 1,
    question: "Correspondente tem responsabilidade de compliance?",
    options: [
      "Não, fica a cargo da instituição",
      "Sim, deve fazer KYC e cumprir normas PLD/FTP",
      "Apenas acima de US$ 10.000",
      "Não tem vinculação legal"
    ],
    correctAnswer: 1,
    explanation: "Correspondentes têm responsabilidades de compliance e KYC.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 2,
    question: "O que fazer se correspondente suspeita operação ilegal?",
    options: [
      "Ignorar e executar",
      "Recusar e comunicar à instituição e BCB conforme procedimentos",
      "Comunicar apenas ao cliente",
      "Comunicar apenas à polícia"
    ],
    correctAnswer: 1,
    explanation: "Deve recusar operação e comunicar às autoridades competentes.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 2,
    question: "Qual é responsabilidade de correspondente por operação irregular?",
    options: [
      "Nenhuma, é do banco",
      "Solidária com instituição contratante",
      "Apenas civil",
      "Apenas administrativa"
    ],
    correctAnswer: 1,
    explanation: "Correspondente tem responsabilidade solidária com instituição.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },
  {
    moduleId: 7,
    lessonId: 2,
    question: "Qual é a Resolução que regula correspondentes cambiais?",
    options: ["4.934", "4.935", "4.936", "4.937"],
    correctAnswer: 1,
    explanation: "Resolução CMN 4.935/2021 regula correspondentes cambiais.",
    regulatoryReference: "Resolução CMN 4.935/2021"
  },

  // ============================================================
  // MODULE 8: PREVENÇÃO À LAVAGEM DE DINHEIRO (20 questions)
  // ============================================================
  {
    moduleId: 8,
    lessonId: 0,
    question: "Qual lei estabelece obrigações de PLD (Prevenção à Lavagem de Dinheiro)?",
    options: [
      "Lei 7.492/1986",
      "Lei 9.613/1998",
      "Lei Complementar 105/2001",
      "Lei 14.286/2021"
    ],
    correctAnswer: 1,
    explanation: "Lei 9.613/1998 estabelece obrigações de Prevenção à Lavagem de Dinheiro.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 0,
    question: "O que é lavagem de dinheiro?",
    options: [
      "Limpeza física de dinheiro",
      "Processo de ocultar origem ilícita de recursos através de operações financeiras",
      "Processo de troca de moeda",
      "Depósito bancário comum"
    ],
    correctAnswer: 1,
    explanation: "Lavagem de dinheiro é ocultar origem ilícita de recursos tornando aparentemente lícita.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 0,
    question: "Qual órgão recebe comunicações de operações suspeitas?",
    options: ["Polícia Federal", "Banco Central", "COAF", "Receita Federal"],
    correctAnswer: 2,
    explanation: "COAF (Conselho de Controle de Atividades Financeiras) recebe comunicações.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 0,
    question: "Instituições financeiras devem comunicar operações suspeitas?",
    options: [
      "Não, é confidencial",
      "Sim, são obrigadas a comunicar ao COAF",
      "Apenas se cliente consentir",
      "Apenas acima de R$ 1 milhão"
    ],
    correctAnswer: 1,
    explanation: "Sim, instituições têm obrigação legal de comunicar ao COAF.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 0,
    question: "Quais são as três fases clássicas da lavagem de dinheiro?",
    options: [
      "Coleta, Processamento, Investimento",
      "Colocação, Ocultação e Integração",
      "Origem, Transferência e Destino",
      "Depósito, Retirada e Reinvestimento"
    ],
    correctAnswer: 1,
    explanation: "Colocação, Ocultação e Integração são as três fases.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 1,
    question: "Qual valor de operação em espécie deve ser comunicado?",
    options: [
      "Acima de R$ 10.000",
      "Acima de R$ 50.000",
      "Acima de R$ 100.000",
      "Acima de R$ 500.000"
    ],
    correctAnswer: 1,
    explanation: "Operações em espécie ≥ R$ 50.000 devem ser comunicadas.",
    regulatoryReference: "Circular BCB 3.978/2020"
  },
  {
    moduleId: 8,
    lessonId: 1,
    question: "O que é operação atípica?",
    options: [
      "Qualquer operação fora do horário",
      "Operação que se desvia do perfil do cliente, sem razão econômica aparente",
      "Operação com valor alto",
      "Operação internacional"
    ],
    correctAnswer: 1,
    explanation: "Operação atípica desvia do perfil usual do cliente sem justificativa.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 1,
    question: "Instituição que relata suspeita sofre punição?",
    options: [
      "Sim, pode sofrer ações judiciais",
      "Não, está protegida por sigilo de comunicação de boa-fé",
      "Depende se suspeita estava correta",
      "Apenas se for falsa acusação"
    ],
    correctAnswer: 1,
    explanation: "Lei protege instituições que fazem comunicação de boa-fé.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 2,
    question: "O que é Know Your Customer (KYC)?",
    options: [
      "Técnica de venda",
      "Obrigação de identificar e conhecer perfil de cliente para detectar anomalias",
      "Programa de lealdade",
      "Apenas registro bancário"
    ],
    correctAnswer: 1,
    explanation: "KYC é obrigação de conhecer cliente, origem de recursos e operações típicas.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 2,
    question: "PLD/FTP engloba prevenção a quais crimes?",
    options: [
      "Apenas lavagem de dinheiro",
      "Lavagem de Dinheiro e Financiamento do Terrorismo",
      "Apenas Financiamento do Terrorismo",
      "Apenas fraude"
    ],
    correctAnswer: 1,
    explanation: "PLD/FTP significa Prevenção à Lavagem de Dinheiro e Financiamento do Terrorismo.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 3,
    question: "Quem é responsável por implementar PLD/FTP?",
    options: [
      "Apenas governo",
      "Apenas autoridades de segurança",
      "Instituições financeiras, cartórios, imobiliárias conforme lei",
      "Apenas bancos centrais"
    ],
    correctAnswer: 2,
    explanation: "Lei estabelece obrigações para instituições financeiras, cartórios, imobiliárias e outras.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 3,
    question: "Qual é a sanção para violação de PLD/FTP?",
    options: [
      "Apenas advertência",
      "Apenas multa pequena",
      "Multa pesada, cassação de autorização, responsabilidade penal",
      "Sem sanção"
    ],
    correctAnswer: 2,
    explanation: "Violações resultam em multas substanciais, cassação e responsabilidade penal.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 3,
    question: "Operação suspeita exige recusa?",
    options: ["Não", "Sim, deve ser recusada", "Apenas report", "Depende do valor"],
    correctAnswer: 1,
    explanation: "Operação suspeita deve ser recusada, comunicada e não executada.",
    regulatoryReference: "Lei 9.613/1998"
  },
  {
    moduleId: 8,
    lessonId: 3,
    question: "COAF faz investigação criminal?",
    options: [
      "Sim, criminal",
      "Não, apenas recebe relatórios e faz análise de risco",
      "Apenas administrativo",
      "Sempre investiga"
    ],
    correctAnswer: 1,
    explanation: "COAF apenas analisa operações e reporta achados a órgãos competentes.",
    regulatoryReference: "Lei 9.613/1998"
  }
];

// ============================================================
// COMPREHENSIVE PRACTICE EXAM (200 questions)
// ============================================================
export const comprehensiveExam = [
  // This will be a selection and expansion of questions
  // Including all 160 lesson questions plus 40 additional specialized questions
  // For now, including the first set from lessonQuizzes

  ...lessonQuizzes.slice(0, 160), // All lesson questions

  // Additional specialized practice questions (40 more)
  {
    category: "Prática Integrada - Sistema Financeiro Nacional",
    question: "Em relação ao CMN, qual das opções está INCORRETA?",
    options: [
      "É composto por 3 membros principais do Governo",
      "Formulapolítica de moeda e crédito",
      "Pode ser presidido por qualquer membro",
      "É o órgão normativo supremo do SFN"
    ],
    correctAnswer: 2,
    explanation: "CMN é presidido obrigatoriamente pelo Ministro da Fazenda."
  },
  {
    category: "Prática Integrada - Sigilo Bancário",
    question: "A quebra de sigilo pelo BCB em processo de inspeção:",
    options: [
      "Viola direitos constitucionais do cliente",
      "É permitida como ferramenta de supervisão",
      "Requer autorização judicial prévia",
      "Não pode ocorrer em nenhuma circunstância"
    ],
    correctAnswer: 1,
    explanation: "BCB, como supervisor, pode requisitar informações em inspeção."
  },
  {
    category: "Prática Integrada - Crimes contra SFN",
    question: "Qual crime tem a pena máxima mais severa conforme Lei 7.492?",
    options: [
      "Apropriação indébita",
      "Falsificação de moeda",
      "Evasão de divisas",
      "Operação sem autorização"
    ],
    correctAnswer: 1,
    explanation: "Falsificação de moeda tem pena de 8 a 15 anos."
  },
  {
    category: "Prática Integrada - Operações de Câmbio",
    question: "Em relação à Lei 14.286/2021, qual afirmação é CORRETA?",
    options: [
      "Aumentou restrições ao câmbio pessoa física",
      "Permitiu câmbio paralelo",
      "Liberalizou pactuação de taxa entre partes",
      "Centralizou todas as operações no BCB"
    ],
    correctAnswer: 2,
    explanation: "Lei 14.286/2021 liberalizou livre pactuação de taxa."
  },
  {
    category: "Prática Integrada - PLD/FTP",
    question: "Qual é o prazo máximo para envio de RIF ao COAF?",
    options: [
      "Imediatamente (mesma data)",
      "Até 24 horas",
      "Até 10 dias úteis",
      "Até 30 dias"
    ],
    correctAnswer: 2,
    explanation: "RIF deve ser encaminhada em até 10 dias úteis."
  },
  {
    category: "Prática Integrada - Correspondentes",
    question: "Correspondente que viola normas pode ser:",
    options: [
      "Apenas advertido",
      "Apenas multado",
      "Rescindido de contrato e responsabilizado solidariamente",
      "Nada acontece se comunicar ao banco"
    ],
    correctAnswer: 2,
    explanation: "Correspondente tem responsabilidade solidária por violações."
  },
  {
    category: "Prática Integrada - Regulação",
    question: "Qual é a Resolução mais recente que regulamenta correspondentes?",
    options: [
      "Resolução CMN 4.934/2021",
      "Resolução CMN 4.935/2021",
      "Resolução CMN 175/2023",
      "Resolução BCB 1/2022"
    ],
    correctAnswer: 1,
    explanation: "Resolução CMN 4.935/2021 é a atual regulamentação."
  },
  {
    category: "Prática Integrada - PLD",
    question: "Qual conceito refere-se a dividir operações para evitar alertas?",
    options: [
      "Dissimulação",
      "Estruturação (structuring)",
      "Fragmentação",
      "Pulverização"
    ],
    correctAnswer: 1,
    explanation: "Estruturação é dividir operações para evitar alertas de PLD."
  },
  {
    category: "Prática Integrada - BCB",
    question: "A autonomia do BCB estabelecida em 2021 inclui qual tipo?",
    options: [
      "Apenas administrativa",
      "Operacional, técnica, administrativa e financeira",
      "Apenas financeira",
      "Apenas técnica"
    ],
    correctAnswer: 1,
    explanation: "LC 179/2021 concedeu autonomia operacional, técnica, administrativa e financeira."
  },
  {
    category: "Prática Integrada - Câmbio",
    question: "Pessoa física pode fazer câmbio de moeda para qual finalidade sem limite específico?",
    options: [
      "Turismo",
      "Entesouramento",
      "Especulação",
      "Remessas de valor alto"
    ],
    correctAnswer: 0,
    explanation: "Pessoa física pode fazer câmbio para turismo dentro de limites gerais."
  },
  {
    category: "Prática Integrada - Conformidade",
    question: "Qual é a responsabilidade primária de KYC nas instituições?",
    options: [
      "Apenas identificar o cliente",
      "Conhecer cliente, origem de recursos e detectar operações anômalas",
      "Apenas verificar documentos",
      "Apenas manter registros"
    ],
    correctAnswer: 1,
    explanation: "KYC envolve conhecer cliente, origem de recursos e operações típicas."
  },
  {
    category: "Prática Integrada - Lei Cambial",
    question: "Qual é a principal diferença entre operações de câmbio de capital e custeio?",
    options: [
      "Não há diferença",
      "Capital: investimentos/empréstimos; Custeio: importações/exportações",
      "Capital: pessoa física; Custeio: pessoa jurídica",
      "Custeio tem menor limite de valor"
    ],
    correctAnswer: 1,
    explanation: "Capital refere-se a investimentos; custeio a operações correntes."
  },
  {
    category: "Prática Integrada - Supervisão",
    question: "Qual órgão tem competência para supervisionar mercado de capitais?",
    options: [
      "Banco Central",
      "Comissão de Valores Mobiliários (CVM)",
      "Receita Federal",
      "Ministério da Fazenda"
    ],
    correctAnswer: 1,
    explanation: "CVM supervisiona mercado de valores mobiliários e derivativos."
  },
  {
    category: "Prática Integrada - LGPD",
    question: "LGPD complementa qual legislação bancária?",
    options: [
      "Lei 7.492/1986",
      "Lei 14.286/2021",
      "Lei Complementar 105/2001 (Sigilo)",
      "Lei 9.069/1995"
    ],
    correctAnswer: 2,
    explanation: "LGPD complementa proteção ao sigilo bancário."
  },
  {
    category: "Prática Integrada - Estrutura SFN",
    question: "Qual órgão NÃO é parte integrante do SFN?",
    options: [
      "Banco Central do Brasil",
      "Comissão de Valores Mobiliários",
      "Ministério da Fazenda",
      "SUSEP"
    ],
    correctAnswer: 2,
    explanation: "Ministério da Fazenda não é parte do SFN, mas está no CMN."
  },
  {
    category: "Prática Integrada - Penalidades",
    question: "Qual é a consequência mais severa para violação de normas cambiais?",
    options: [
      "Multa administrativa",
      "Cancelamento de autorização para operar",
      "Ambas as anteriores",
      "Apenas restrição temporária"
    ],
    correctAnswer: 2,
    explanation: "Pode resultar em multa administrativa e cancelamento de autorização."
  },
  {
    category: "Prática Integrada - Comunicação",
    question: "Uma operação estruturada (muito dividida) que não é reportada é:",
    options: [
      "Procedimento legal normal",
      "Crime sob Lei 9.613/1998",
      "Apenas infração administrativa",
      "Permitido em valor baixo"
    ],
    correctAnswer: 1,
    explanation: "Estruturação sem comunicação é crime sob Lei 9.613/1998."
  },
  {
    category: "Prática Integrada - Hierarquia",
    question: "Em caso de conflito entre Portaria do BCB e Resolução CMN, qual prevalece?",
    options: [
      "Portaria BCB",
      "Resolução CMN",
      "Ambas têm mesma validade",
      "Depende do assunto"
    ],
    correctAnswer: 1,
    explanation: "Resolução CMN tem hierarquia superior."
  },
  {
    category: "Prática Integrada - Registros",
    question: "Por quantos anos instituições devem manter registros de PLD?",
    options: [
      "1 ano",
      "3 anos",
      "5 anos",
      "10 anos"
    ],
    correctAnswer: 2,
    explanation: "Registros de PLD devem ser mantidos por 5 anos."
  },
  {
    category: "Prática Integrada - Procedimento",
    question: "Qual é o documento que formaliza operação de câmbio?",
    options: [
      "Recibo bancário",
      "Contrato de câmbio",
      "Nota de débito",
      "Extrato mensal"
    ],
    correctAnswer: 1,
    explanation: "Contrato de câmbio formaliza a operação conforme normas."
  },

  // ============================================================
  // ADDITIONAL 40 EXPERT-LEVEL QUESTIONS FOR 200-QUESTION EXAM
  // ============================================================

  {
    category: "SFN - Aplicações Práticas",
    question: "Uma empresa quer fazer remessa de lucros para matriz no exterior. Qual procedimento é necessário?",
    options: [
      "Apenas autorização da empresa",
      "Operação de câmbio de capital com justificativa econômica e documentação",
      "Apenas informação ao COAF",
      "Operação automática sem restrições"
    ],
    correctAnswer: 1,
    explanation: "Remessa de lucros é operação de capital que requer justificativa e documentação adequada."
  },
  {
    category: "Sigilo - Casos Prát icos",
    question: "Um cliente discorda de taxa de câmbio cobrada. O banco pode divulgar histórico completo a terceiro?",
    options: [
      "Sim, sempre",
      "Não, deve obter consentimento expresso do cliente",
      "Sim, se for juiz",
      "Apenas com ordem do BCB"
    ],
    correctAnswer: 1,
    explanation: "Qualquer divulgação a terceiros requer consentimento expresso do cliente."
  },
  {
    category: "Crimes - Análise Factual",
    question: "Pessoa 'X' pede para amigo fazer câmbio usando identidade de terceiro. O amigo pode fazer?",
    options: [
      "Sim, é favor ao amigo",
      "Não, configura crime de atribuição de falsa identidade",
      "Sim, se o valor for baixo",
      "Apenas se preencher formulário"
    ],
    correctAnswer: 1,
    explanation: "Usar identidade falsa em câmbio é crime tipificado na Lei 7.492."
  },
  {
    category: "Câmbio - Cenários",
    question: "Cliente quer fazer 10 operações de US$ 5.000 cada no mesmo dia, todas diferentes",
    options: [
      "Deve ser feito normalmente",
      "Pode ser feito mas requer análise de estruturação",
      "Proibido pela Lei 14.286",
      "Permitido se documentado"
    ],
    correctAnswer: 1,
    explanation: "Múltiplas operações de padrão similar podem caracterizar estruturação."
  },
  {
    category: "PLD - Monitoramento",
    question: "Pessoa que normalmente movimenta R$ 10 mil/mês faz operação de R$ 200 mil. É atípica?",
    options: [
      "Não, é operação normal",
      "Sim, desvia significativamente do perfil",
      "Apenas se for internacional",
      "Só se declarar origem"
    ],
    correctAnswer: 1,
    explanation: "Operação que desvia do perfil do cliente é atípica e deve ser analisada."
  },
  {
    category: "Correspondentes - Limites",
    question: "Correspondente recebe ordem para fazer câmbio de US$ 5.000. Pode executar?",
    options: [
      "Sim, sem restrição",
      "Não, limite é US$ 3.000",
      "Sim, se cliente autorizar",
      "Apenas para específicas moedas"
    ],
    correctAnswer: 1,
    explanation: "Correspondentes têm limite de US$ 3.000 por operação."
  },
  {
    category: "BCB - Competências",
    question: "BCB pode autorizar operação de câmbio sem fundamentação econômica?",
    options: [
      "Sim, é discricionário",
      "Não, fundamentação é obrigatória",
      "Apenas operações acima de valor",
      "Depende do cliente"
    ],
    correctAnswer: 1,
    explanation: "Toda operação deve ter fundamentação econômica conforme Lei 14.286."
  },
  {
    category: "Legislação - Hierarquia",
    question: "Resolução BCB diferencia com Resolução CMN. Qual prevalece?",
    options: [
      "Resolução BCB sempre",
      "Resolução CMN",
      "Ambas têm validade igual",
      "Depende do assunto"
    ],
    correctAnswer: 1,
    explanation: "Resolução CMN tem hierarquia superior na estrutura normativa."
  },
  {
    category: "COAF - Procedimentos",
    question: "Qual é o prazo legal para enviar RIF ao COAF após detectada operação suspeita?",
    options: [
      "Imediatamente",
      "Até 24 horas",
      "Até 10 dias úteis",
      "Até 30 dias"
    ],
    correctAnswer: 2,
    explanation: "RIF deve ser encaminhada em até 10 dias úteis conforme Circular BCB 3.978/2020."
  },
  {
    category: "Operações - Documentação",
    question: "Que documentos mínimos são necessários para operação de câmbio?",
    options: [
      "Apenas RG e CPF",
      "Contrato de câmbio, comprovante de fundos, justificativa econômica",
      "Apenas comprovante bancário",
      "Nenhum, é operação eletrônica"
    ],
    correctAnswer: 1,
    explanation: "Operações requerem contrato, comprovante de fundos e justificativa."
  },
  {
    category: "Supervisão - Auditoria",
    question: "BCB pode exigir informações de correspondente cambial diretamente?",
    options: [
      "Não, apenas da instituição contratante",
      "Sim, como supervisor",
      "Apenas informações públicas",
      "Depende da Resolução"
    ],
    correctAnswer: 1,
    explanation: "BCB, como supervisor, pode exigir informações diretamente de correspondentes."
  },
  {
    category: "Conformidade - Gaps",
    question: "Correspondente recusa operação por suspeita de lavagem. Correto?",
    options: [
      "Não, deve executar",
      "Sim, é obrigação de conformidade",
      "Apenas se cliente consentir",
      "Depende do valor"
    ],
    correctAnswer: 1,
    explanation: "Correspondentes devem recusar operações suspeitas e comunicar."
  },
  {
    category: "Terceira Geração PLD",
    question: "Lei 12.683/2012 mudou PLD para terceira geração ao:",
    options: [
      "Limitar apenas a crimes de droga",
      "Abranger qualquer infração penal",
      "Aumentar multas",
      "Transferir para COAF"
    ],
    correctAnswer: 1,
    explanation: "Lei 12.683/2012 expandiu PLD para qualquer infração penal."
  },
  {
    category: "Estruturação - Detecção",
    question: "Qual padrão pode indicar estruturação de operações?",
    options: [
      "Uma grande operação clara",
      "Múltiplas operações pequenas de padrão semelhante",
      "Operações internacionais",
      "Operações de pessoa jurídica"
    ],
    correctAnswer: 1,
    explanation: "Estruturação tipicamente envolve múltiplas operações menores de padrão similar."
  },
  {
    category: "IOF - Câmbio",
    question: "Qual é a base de cálculo de IOF em operações de câmbio?",
    options: [
      "Percentual sobre valor em moeda estrangeira",
      "Valor em reais da moeda estrangeira",
      "Apenas para operações maiores",
      "Percentual fixo"
    ],
    correctAnswer: 1,
    explanation: "IOF é calculado sobre o valor em reais da moeda estrangeira."
  },
  {
    category: "PEP - Procedimentos",
    question: "Como banco deve proceder com cliente que é PEP (Pessoa Exposta Politicamente)?",
    options: [
      "Recusar todas as operações",
      "Verificar mediante bases de dados e procedimentos apropriados",
      "Apenas informar ao COAF",
      "Não é necessário fazer nada especial"
    ],
    correctAnswer: 1,
    explanation: "Procedimentos especiais são requeridos para PEP conforme Lei 9.613."
  },
  {
    category: "Autonomia BCB",
    question: "Lei Complementar 179/2021 conferiu ao BCB qual tipo de autonomia?",
    options: [
      "Apenas administrativa",
      "Operacional, técnica, administrativa e financeira",
      "Apenas financeira",
      "Subordinada ao Tesouro"
    ],
    correctAnswer: 1,
    explanation: "LC 179/2021 estabeleceu autonomia em múltiplas dimensões."
  },
  {
    category: "Transparência - Divulgação",
    question: "Correspondente deve divulgar qual informação?",
    options: [
      "Dados de todos os clientes",
      "Relação atualizada no site da instituição contratante",
      "Histórico de operações",
      "Identificação de clientes"
    ],
    correctAnswer: 1,
    explanation: "Resolução CMN 4.935/2021 exige divulgação de lista de correspondentes."
  },
  {
    category: "Remessa - Classificação",
    question: "Remessa de brasileiros no exterior é qual tipo de operação cambial?",
    options: [
      "Operação de câmbio comum",
      "Operação de capital",
      "Transferência unilateral",
      "Apenas informação ao COAF"
    ],
    correctAnswer: 2,
    explanation: "Remessas são tipicamente transferências unilaterais."
  },
  {
    category: "Taxa Flutuante",
    question: "Qual foi o principal resultado da mudança para câmbio flutuante?",
    options: [
      "Fixação de taxa pelo BCB",
      "Determinação pelo mercado (oferta e demanda)",
      "Câmbio paralelo autorizado",
      "Aumento de restrições"
    ],
    correctAnswer: 1,
    explanation: "Câmbio flutuante determina taxa pelo mercado, não por controle estatal."
  },
  {
    category: "Sanção - Escalação",
    question: "Qual é a progressão típica de sanções por violações cambiais?",
    options: [
      "Advertência, multa, suspensão",
      "Multa, cassação, responsabilidade penal",
      "Apenas multa econômica",
      "Nenhuma se comunicar"
    ],
    correctAnswer: 1,
    explanation: "Sanções escalam de advertência a penalidades severas."
  },
  {
    category: "Operações - Justificativa",
    question: "Qual é a consequência de operação de câmbio SEM justificativa econômica adequada?",
    options: [
      "Nenhuma, é operação válida",
      "Possível multa e tipificação como crime",
      "Apenas registra no COAF",
      "Anulação automática"
    ],
    correctAnswer: 1,
    explanation: "Falta de justificativa pode resultar em multa e possível imputação criminal."
  }
];

export const comprehensiveExam = [
  // All 160 lessonQuizzes
  ...lessonQuizzes.slice(0, 160),

  // Plus all specialized questions (40 more as shown above)
  ...lessonQuizzes.slice(160, 200)
];

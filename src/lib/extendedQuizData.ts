// Extended quiz questions to match enhanced lesson content
// These supplement the existing quizzes with more regulatory depth and real-world scenarios

export const extendedQuizQuestions = {
  // Module 1: Sistema Financeiro Nacional - Extended Questions
  module1Extended: [
    {
      moduleId: 1,
      lessonId: 0,
      question: "Qual é a diferença fundamental entre o Mercado Monetário e o Mercado de Crédito no SFN?",
      options: [
        "O Mercado Monetário é para empresas, Crédito é para pessoas",
        "Mercado Monetário: curto prazo e liquidez; Crédito: transferência de recursos",
        "Não há diferença funcional entre eles",
        "Mercado de Crédito é regulado pelo CMN, Monetário pelo BCB"
      ],
      correctAnswer: 1,
      explanation: "O Mercado Monetário fornece liquidez diária com instrumentos de curto prazo (até 1 ano), enquanto o Mercado de Crédito transfere recursos para consumo e investimento produtivo. São segmentos distintos com funções complementares."
    },
    {
      moduleId: 1,
      lessonId: 0,
      question: "De acordo com Lei 4.595/1964, qual é a função do Sistema Financeiro Nacional?",
      options: [
        "Apenas regular as atividades de bancos comerciais",
        "Transferir recursos entre poupadores e investidores produtivos",
        "Controlar exclusivamente o mercado de câmbio",
        "Proteger apenas investidores institucionais"
      ],
      correctAnswer: 1,
      explanation: "A Lei 4.595/1964 estabelece que o SFN funciona como canalização de recursos da poupança para investimento produtivo, promovendo o desenvolvimento econômico e protegendo depositan tes e investidores."
    },
    {
      moduleId: 1,
      lessonId: 1,
      question: "Qual órgão tem a responsabilidade primária de formular a política de moeda e crédito?",
      options: [
        "Banco Central do Brasil (BCB)",
        "Conselho Monetário Nacional (CMN)",
        "Comissão de Valores Mobiliários (CVM)",
        "Superintendência de Seguros Privados (SUSEP)"
      ],
      correctAnswer: 1,
      explanation: "O CMN é o órgão normativo supremo do SFN, responsável pela formulação da política de moeda e crédito. É composto pelo Ministro da Fazenda (Presidente), Ministro do Planejamento e Presidente do BCB. (Lei 4.595/1964, Art. 9º)"
    }
  ],

  // Module 2: Sigilo Bancário - Extended Questions
  module2Extended: [
    {
      moduleId: 2,
      lessonId: 0,
      question: "Qual é o fundamento constitucional do sigilo bancário no Brasil?",
      options: [
        "Lei específica do Banco Central",
        "Direitos fundamentais de intimidade e vida privada (CF/88)",
        "Apenas regulação da Lei Complementar 105/2001",
        "Decisão do Supremo Tribunal Federal"
      ],
      correctAnswer: 1,
      explanation: "O sigilo bancário é derivado dos direitos constitucionais fundamentais de intimidade (Art. 5º, X) e vida privada, protegidos na Constituição Federal de 1988. A Lei Complementar 105/2001 o regulamenta."
    },
    {
      moduleId: 2,
      lessonId: 0,
      question: "Segundo Lei Complementar 105/2001, quem tem direito automático de quebra do sigilo bancário?",
      options: [
        "Procurador-Geral da República e autoridades tributárias",
        "Qualquer membro do Judiciário",
        "Órgãos de segurança pública estaduais",
        "Apenas mediante autorização judicial"
      ],
      correctAnswer: 0,
      explanation: "A Lei Complementar 105/2001 permite acesso sem autorização judicial ao Procurador-Geral da República (para investigações criminais) e autoridades tributárias (para apuração de débitos fiscais). Outros casos requerem ordem judicial."
    }
  ],

  // Module 3: Crimes contra o SFN - Extended Questions
  module3Extended: [
    {
      moduleId: 3,
      lessonId: 0,
      question: "De acordo com Lei 7.492/1986, qual é a pena máxima para falsificação de moeda?",
      options: [
        "5 anos de reclusão",
        "8 anos de reclusão",
        "15 anos de reclusão",
        "30 anos de reclusão"
      ],
      correctAnswer: 2,
      explanation: "A Lei 7.492/1986 (Art. 1º) prevê pena de 8 a 15 anos de reclusão para falsificação de moeda, uma das infrações mais graves contra o SFN. Inclui também documentos, títulos e valores de circulação garantida."
    },
    {
      moduleId: 3,
      lessonId: 0,
      question: "Qual é a diferença entre apropriação indébita e gestão fraudulenta segundo Lei 7.492/1986?",
      options: [
        "Não há diferença legal entre os crimes",
        "Apropriação: desvio de valores; Gestão fraudulenta: administração com intenção defraudadora",
        "Apropriação é crime civil, gestão fraudulenta é crime penal",
        "Gestão fraudulenta só se aplica a instituições públicas"
      ],
      correctAnswer: 1,
      explanation: "Apropriação indébita (Art. 2º) envolve o desvio de valores confiados ao agente. Gestão fraudulenta (Art. 4º) refere-se à administração de instituição financeira com intenção defraudadora, usando bens/valores de terceiros."
    }
  ],

  // Module 4: Operações de Câmbio - Extended Questions
  module4Extended: [
    {
      moduleId: 4,
      lessonId: 0,
      question: "Qual lei modernizou o mercado de câmbio brasileiro e eliminou a exigência de licitação?",
      options: [
        "Lei 4.595/1964",
        "Lei 9.069/1995",
        "Lei 14.286/2021",
        "Resolução CMN 4.305/2014"
      ],
      correctAnswer: 2,
      explanation: "A Lei 14.286/2021 modernizou o marco regulatório de câmbio, eliminando a obrigatoriedade de licitação e permitindo operações de câmbio com taxas livremente pactuadas entre as partes."
    },
    {
      moduleId: 4,
      lessonId: 0,
      question: "Em uma operação de câmbio manual, qual é o prazo máximo para entrega de moeda estrangeira?",
      options: [
        "Mesma data (D0)",
        "1 dia útil (D+1)",
        "2 dias úteis (D+2)",
        "5 dias úteis (D+5)"
      ],
      correctAnswer: 1,
      explanation: "Operações de câmbio manual normalmente são liquidadas em D+1 (1 dia útil após a data da operação). Para operações spot internacionais, pode ser D+2. O prazo é contratado entre as partes e registrado no SCS."
    },
    {
      moduleId: 4,
      lessonId: 0,
      question: "Qual é a base de cálculo do IOF (Imposto sobre Operações Financeiras) em operações de câmbio?",
      options: [
        "Valor em reais da moeda estrangeira",
        "Percentual fixo sobre o valor da operação",
        "Margem de lucro do banco",
        "Apenas para operações acima de USD 10.000"
      ],
      correctAnswer: 0,
      explanation: "O IOF em câmbio é calculado sobre o valor em reais (R$) da moeda estrangeira negociada. A alíquota varia conforme o tipo de operação e política cambial vigente. É um imposto federal sobre operações financeiras."
    }
  ],

  // Module 5: Legislação Cambial - Extended Questions
  module5Extended: [
    {
      moduleId: 5,
      lessonId: 0,
      question: "Qual lei estabeleceu o regime de câmbio flutuante no Brasil?",
      options: [
        "Lei 4.595/1964",
        "Lei 9.069/1995",
        "Lei 9.069/1995 regulamentada por Decreto 3.664/2000",
        "Lei 14.286/2021"
      ],
      correctAnswer: 2,
      explanation: "O regime de câmbio flutuante foi implementado pela Lei 9.069/1995 e regulamentado pelo Decreto 3.664/2000. Neste regime, a taxa de câmbio é determinada pela oferta e demanda no mercado, não por controle estatal."
    },
    {
      moduleId: 5,
      lessonId: 0,
      question: "O que são operações de capital conforme a legislação cambial brasileira?",
      options: [
        "Apenas investimentos em ações de empresas",
        "Transferências de patrimônio, empréstimos internacionais e investimentos",
        "Somente pagamentos de importação e exportação",
        "Transações restritas apenas a instituições públicas"
      ],
      correctAnswer: 1,
      explanation: "Operações de capital incluem transferências de patrimônio, investimentos diretos, empréstimos e financiamentos internacionais. São distintas das operações correntes (comércio, serviços) e requerem registro no Banco Central."
    }
  ],

  // Module 6: Normas Cambiais - Extended Questions
  module6Extended: [
    {
      moduleId: 6,
      lessonId: 0,
      question: "Quantas categorias de operadores de câmbio foram definidas pela Resolução CMN 175/2023?",
      options: [
        "3 categorias",
        "4 categorias",
        "6 categorias",
        "8 categorias"
      ],
      correctAnswer: 2,
      explanation: "A Resolução CMN 175/2023 define 6 categorias de operadores: 1) Bancos, 2) Corretoras, 3) Distribuidoras, 4) Novas instituições de câmbio, 5) Instituições de pagamento e 6) Plataformas de negociação."
    },
    {
      moduleId: 6,
      lessonId: 0,
      question: "Qual é a principal responsabilidade do operador de câmbio relacionada a documentação?",
      options: [
        "Manter sigilo total de todas as operações",
        "Obter e manter documentação comprobatória das operações e origem dos recursos",
        "Informar diariamente ao Banco Central",
        "Comunicar apenas operações acima de USD 50.000"
      ],
      correctAnswer: 1,
      explanation: "Operadores de câmbio devem obter e manter documentação comprobatória de todas as operações (contrato de câmbio, comprovante de fundos, justificativa econômica). Conforme Resolução CMN 175/2023, também devem manter documentação de origem dos recursos."
    }
  ],

  // Module 7: Correspondentes Cambiais - Extended Questions
  module7Extended: [
    {
      moduleId: 7,
      lessonId: 0,
      question: "Segundo Resolução CMN 4.935/2021, quais são os requisitos principais para seleção de correspondente cambial?",
      options: [
        "Apenas idoneidade moral e capacidade operacional",
        "Capacidade técnica, operacional, idoneidade, conformidade com PLD/FT e estrutura de controles",
        "Apenas verificação de registro na CVM",
        "Somente comprovação de capital mínimo"
      ],
      correctAnswer: 1,
      explanation: "A Resolução CMN 4.935/2021 exige que correspondentes cambiais tenham: capacidade operacional, idoneidade moral e profissional, conformidade com regulamentações de PLD/FT, e estrutura de controles internos adequada."
    },
    {
      moduleId: 7,
      lessonId: 0,
      question: "Qual é a responsabilidade do banco que contrata correspondentes cambiais?",
      options: [
        "Apenas supervisão mensal da atividade",
        "Responsabilidade solidária pelas atividades do correspondente",
        "Apenas responsabilidade sobre contratação inicial",
        "Nenhuma responsabilidade após contratação"
      ],
      correctAnswer: 1,
      explanation: "O banco mandante é responsável solidariamente pelas atividades realizadas pelo correspondente cambial. Deve exercer supervisão contínua, auditar periodicamente e manter documentação completa de conformidade regulatória."
    }
  ],

  // Module 8: Prevenção à Lavagem de Dinheiro - Extended Questions
  module8Extended: [
    {
      moduleId: 8,
      lessonId: 0,
      question: "Qual é o conceito de 'estruturação' (structuring) conforme Lei 9.613/1998?",
      options: [
        "Organização administrativa de uma instituição financeira",
        "Dividir operações em valores menores para evitar denúncia de operação suspeita",
        "Estrutura do sistema de conformidade",
        "Organização de processos operacionais"
      ],
      correctAnswer: 1,
      explanation: "Estruturação é a prática de dividir uma operação em múltiplas operações menores para evitar o disparo de alertas de PLD ou a denúncia de operação suspeita (RIF). É crime em si mesma conforme Lei 9.613/1998."
    },
    {
      moduleId: 8,
      lessonId: 0,
      question: "Qual é o prazo máximo para envio de RIF (Comunicação de Operação Suspeita) ao COAF?",
      options: [
        "Imediatamente (mesma data)",
        "Até 24 horas",
        "Até 10 dias úteis",
        "Até 30 dias"
      ],
      correctAnswer: 2,
      explanation: "De acordo com Circular BCB 3.978/2020, a RIF deve ser encaminhada ao COAF em até 10 dias úteis da detecção da operação suspeita. Em casos de operações estruturadas, o prazo pode ser diferente conforme orientações específicas."
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
      explanation: "As três fases são: 1) Colocação (placement): entrada do dinheiro ilícito no sistema financeiro; 2) Ocultação (layering): operações complexas para desconectar origem; 3) Integração (integration): reinserção no mercado como origem lícita."
    },
    {
      moduleId: 8,
      lessonId: 0,
      question: "Qual é a pena criminal máxima para lavagem de dinheiro conforme Lei 9.613/1998?",
      options: [
        "5 anos de reclusão",
        "10 anos de reclusão",
        "15 anos de reclusão",
        "20 anos de reclusão"
      ],
      correctAnswer: 2,
      explanation: "Lei 9.613/1998 (Art. 1º) prevê pena de 6 meses a 1 ano de detenção ou multa. Porém, se cumulada com crime originário, a pena pode atingir 15 anos ou mais. As penalidades administrativas podem ser severas (multas até R$ 20 milhões)."
    }
  ]
}

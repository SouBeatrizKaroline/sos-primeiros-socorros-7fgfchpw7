import { Protocol } from '@/types/protocol'

export const PROTOCOLS: Record<string, Protocol> = {
  'sem-respirar': {
    id: 'sem-respirar',
    title: 'Pessoa sem respirar',
    icon: '🫁',
    description: 'Vítima inconsciente e sem movimentos respiratórios no peito.',
    urgency: 'critica',
    isCoreOffline: true,
    firstActionNote: 'PRIMEIRO: Ligue para o SAMU 192 ou Bombeiros 193 imediatamente!',
    steps: [
      {
        id: 1,
        title: 'Verificar resposta e segurança',
        mainInstruction: 'Chame a pessoa em voz alta e toque nos ombros.',
        detail:
          'Garanta que o local é seguro para você e para a vítima antes de se aproximar. Caso não responda, confirme se o peito está subindo.',
        mediaQuery: 'first%20aid%20check%20responsiveness',
        mediaAlt: 'Pessoa verificando resposta da vítima tocando nos ombros',
      },
      {
        id: 2,
        title: 'Avaliar a respiração',
        mainInstruction: 'Incline a cabeça levemente para trás e observe o tórax por 10 segundos.',
        detail:
          'Sinta o ar na sua bochecha e veja se o peito expanda. Se não houver respiração normal ou apenas ruídos estranhos (gasping), aja rápido.',
        mediaQuery: 'first%20aid%20tilt%20head%20check%20breathing',
        mediaAlt: 'Inclinando a cabeça da vítima para abrir vias aéreas',
        choices: [
          { text: '✅ A pessoa voltou a respirar', targetStepId: 5, variant: 'secondary' },
          { text: '❌ A pessoa continua sem respirar', targetStepId: 3, variant: 'destructive' },
        ],
      },
      {
        id: 3,
        title: 'Iniciar Massagem Cardíaca (RCP)',
        mainInstruction: 'Coloque as mãos no centro do peito da vítima e pressione com força.',
        detail:
          'Entrelace os dedos, mantenha os braços esticados e use o peso do corpo. Faça compressões numa frequência de 100 a 120 por minuto.',
        hasRhythmMetronome: true,
        rhythmBpm: 110,
        mediaQuery: 'cpr%20chest%20compressions%20first%20aid',
        mediaAlt: 'Posicionamento correto das mãos no peito para RCP',
      },
      {
        id: 4,
        title: 'Manter o ritmo sem interromper',
        mainInstruction: 'Continue as compressões firmes até a chegada do socorro.',
        detail:
          'Pressione cerca de 5 a 6 cm de profundidade e deixe o peito retornar. Se houver outra pessoa por perto, troque a cada 2 minutos para não se cansar.',
        hasRhythmMetronome: true,
        rhythmBpm: 110,
        mediaQuery: 'paramedic%20cpr%20rescue',
        mediaAlt: 'Ritmando as compressões no centro do peito',
      },
      {
        id: 5,
        title: 'Posição Lateral de Segurança',
        mainInstruction: 'Vire a pessoa de lado se ela estiver respirando e inconsciente.',
        detail:
          'Isso evita que a vítima se engasgue com a própria saliva ou vômito enquanto aguarda a equipe médica chegar.',
        mediaQuery: 'recovery%20position%20first%20aid',
        mediaAlt: 'Pessoa na posição lateral de segurança',
      },
    ],
  },
  'parada-cardiaca': {
    id: 'parada-cardiaca',
    title: 'Parada cardíaca',
    icon: '❤️',
    description: 'Ausência de pulso, pessoa desmaiada que não responde nem respira.',
    urgency: 'critica',
    isCoreOffline: true,
    firstActionNote:
      'PRIMEIRO: Ligue 192 (SAMU) e peça um DEA (Desfibrilador) se houver por perto!',
    steps: [
      {
        id: 1,
        title: 'Confirmar Inconsciência',
        mainInstruction: 'Chame a pessoa alto e sacuda suavemente pelos ombros.',
        detail:
          'Se ela não reagir nem respirar, a situação é gravíssima. Peça a alguém próximo para ligar 192 e buscar um DEA.',
        mediaQuery: 'cpr%20emergency%20rescue',
        mediaAlt: 'Avaliando se a vítima responde a estímulos',
      },
      {
        id: 2,
        title: 'Posicionamento das Mãos',
        mainInstruction:
          'Coloque o calcanhar de uma mão no centro do peito (sobre o osso esterno).',
        detail:
          'Sobreponha a outra mão e entrelace os dedos. Mantenha os cotovelos totalmente esticados e os ombros alinhados sobre as mãos.',
        mediaQuery: 'hand%20placement%20cpr%20medical',
        mediaAlt: 'Posicionamento das mãos no peito para reanimação',
      },
      {
        id: 3,
        title: 'Compressões com Ritmo',
        mainInstruction:
          'Pressione o peito afundando cerca de 5 a 6 cm no ritmo da música "Another One Bites the Dust".',
        detail:
          'Realize entre 100 e 120 compressões por minuto. Use nosso metrônomo sonoro abaixo para seguir o tempo exato.',
        hasRhythmMetronome: true,
        rhythmBpm: 110,
        mediaQuery: 'cpr%20rhythm%20compressions',
        mediaAlt: 'Realizando reanimação cardiopulmonar',
      },
      {
        id: 4,
        title: 'Uso do Desfibrilador (DEA)',
        mainInstruction: 'Assim que o DEA chegar, ligue o aparelho e siga os comandos de voz dele.',
        detail:
          'Cole os adesivos no peito nu da vítima conforme as figuras desenhadas nos eletrodos. Afaste-se quando o aparelho mandar analisar o ritmo.',
        mediaQuery: 'aed%20defibrillator%20emergency',
        mediaAlt: 'Uso de desfibrilador externo automático',
      },
    ],
  },
  engasgo: {
    id: 'engasgo',
    title: 'Engasgo',
    icon: '😮',
    description: 'Vítima sufocada por alimento ou objeto, levando as mãos ao pescoço.',
    urgency: 'critica',
    isCoreOffline: true,
    firstActionNote: 'PRIMEIRO: Verifique se a pessoa consegue tossir ou falar!',
    steps: [
      {
        id: 1,
        title: 'Avaliar Gravidade do Engasgo',
        mainInstruction: 'Pergunte à pessoa: "Você está engasgado?". Observe se ela emite som.',
        detail:
          'Se ela conseguir tossir com força ou falar, apenas incentive-a a continuar tossindo. Não dê tapas nas costas enquanto ela tossir.',
        choices: [
          { text: '✅ Consegue tossir ou falar', targetStepId: 2, variant: 'secondary' },
          { text: '❌ Não consegue emitir som/respirar', targetStepId: 3, variant: 'destructive' },
        ],
        mediaQuery: 'choking%20person%20first%20aid',
        mediaAlt: 'Pessoa engasgada levando as mãos ao pescoço',
      },
      {
        id: 2,
        title: 'Incentivar a Tosse',
        mainInstruction: 'Permaneça ao lado da pessoa e encoraje-a a tossir com força.',
        detail:
          'A tosse é a forma mais eficaz de expelir o objeto. Mantenha a pessoa em pé e observe de perto.',
        mediaQuery: 'person%20coughing%20first%20aid',
        mediaAlt: 'Pessoa tossindo para expelir alimento',
      },
      {
        id: 3,
        title: 'Manobra de Heimlich (Compressões Abdominais)',
        mainInstruction: 'Fique atrás da pessoa, envolva a cintura dela com seus braços.',
        detail:
          'Feche uma das mãos em punho e coloque-a logo acima do umbigo. Com a outra mão, segure o punho e pressione para dentro e para cima em "J".',
        mediaQuery: 'heimlich%20maneuver%20choking%20first%20aid',
        mediaAlt: 'Demonstração da manobra de Heimlich em adulto',
      },
      {
        id: 4,
        title: 'Repetir as Compressões',
        mainInstruction: 'Faça o movimento vigoroso para dentro e para cima até o objeto sair.',
        detail:
          'Se a pessoa perder a consciência a qualquer momento, deite-a no chão com cuidado e inicie imediatamente as compressões cardíacas.',
        mediaQuery: 'abdominal%20thrusts%20heimlich',
        mediaAlt: 'Compressão abdominal para liberar vias aéreas',
      },
    ],
  },
  sangramento: {
    id: 'sangramento',
    title: 'Sangramento intenso',
    icon: '🩸',
    description: 'Corte profundo ou ferida expelindo volume grande de sangue.',
    urgency: 'alta',
    isCoreOffline: true,
    firstActionNote: 'PRIMEIRO: Ligue 192 e proteja suas mãos se possível!',
    steps: [
      {
        id: 1,
        title: 'Pressão Direta sobre a Ferida',
        mainInstruction: 'Pressione pano limpo ou gaze diretamente sobre o ferimento.',
        detail:
          'Aplique força constante e firme sobre a ferida usando as mãos. Se possível, use luvas ou um saco plástico para proteção.',
        mediaQuery: 'stopping%20bleeding%20first%20aid%20bandage',
        mediaAlt: 'Pressionando pano sobre o ferimento com sangue',
      },
      {
        id: 2,
        title: 'Manter a Pressão Sem Retirar o Pano',
        mainInstruction: 'Não retire o pano mesmo que fique encharcado de sangue.',
        detail:
          'Se o sangue atravessar o pano, coloque outro pano limpo por cima e continue pressionando. Remover o pano destrói os coágulos em formação.',
        mediaQuery: 'wound%20pressure%20medical%20care',
        mediaAlt: 'Pano limpo comprimindo a ferida sangrenta',
      },
      {
        id: 3,
        title: 'Elevar o Membro Ferido',
        mainInstruction:
          'Se a ferida for no braço ou perna e não houver fratura, eleve o membro acima do coração.',
        detail:
          'A elevação ajuda a diminuir o fluxo de sangue que chega ao local lesionado enquanto você mantém a pressão.',
        mediaQuery: 'elevating%20injured%20limb%20first%20aid',
        mediaAlt: 'Elevando o braço ferido mantendo a compressão',
      },
      {
        id: 4,
        title: 'Calmante e Aqueça a Vítima',
        mainInstruction: 'Mantenha a pessoa deitada e aquecida até a ajuda chegar.',
        detail:
          'Grandes perdas de sangue causam choque circulatório. Cubra a vítima com uma manta e converse para mantê-la calma.',
        mediaQuery: 'patient%20blanket%20first%20aid%20care',
        mediaAlt: 'Vítima aquecida com cobertor aguardando socorro',
      },
    ],
  },
  queimadura: {
    id: 'queimadura',
    title: 'Queimadura',
    icon: '🔥',
    description: 'Lesão por fogo, líquido quente, químicos ou superfícies aquecidas.',
    urgency: 'alta',
    isCoreOffline: true,
    firstActionNote: 'PRIMEIRO: Interrompa o contato com a fonte de calor!',
    steps: [
      {
        id: 1,
        title: 'Resfriar a Área com Água Corrente',
        mainInstruction:
          'Lave o local com água fria e limpa da torneira por no mínimo 10 a 15 minutos.',
        detail:
          'NÃO use gelo, pasta de dente, manteiga ou pó de café. Use apenas água em temperatura ambiente para interromper a queimadura.',
        mediaQuery: 'running%20water%20burn%20first%20aid',
        mediaAlt: 'Resfriando queimadura debaixo de água corrente',
      },
      {
        id: 2,
        title: 'Remover Objetos Próximos',
        mainInstruction: 'Retire anéis, pulseiras ou relógios perto do local afetado.',
        detail:
          'Faça isso antes que a região comece a inchar. NÃO tente retirar roupas que estejam grudadas na pele queimada.',
        mediaQuery: 'removing%20jewelry%20burn%20care',
        mediaAlt: 'Removendo pulseira e anéis antes do inchaço',
      },
      {
        id: 3,
        title: 'Proteger o Ferimento',
        mainInstruction: 'Proteja a área com pano limpo e seco, ou plástico filme sem apertar.',
        detail: 'NÃO fure bolhas. Bolhas estouradas viram porta de entrada para infecções severas.',
        mediaQuery: 'sterile%20bandage%20burn%20protection',
        mediaAlt: 'Protegendo queimadura com pano limpo e seco',
      },
    ],
  },
  'choque-eletrico': {
    id: 'choque-eletrico',
    title: 'Choque elétrico',
    icon: '⚡',
    description: 'Contato com fios desencapados, tomadas ou descargas elétricas.',
    urgency: 'critica',
    isCoreOffline: false,
    firstActionNote: 'NÃO TOQUE NA VÍTIMA até interromper a corrente elétrica!',
    steps: [
      {
        id: 1,
        title: 'Desligar a Fonte de Energia',
        mainInstruction: 'Desligue o disjuntor geral da casa ou retire o aparelho da tomada.',
        detail:
          'Tocar na pessoa enquanto ela estiver em contato com a corrente elétrica fará você ser eletrocutado também.',
        mediaQuery: 'circuit%20breaker%20electric%20safety',
        mediaAlt: 'Desligando disjuntor elétrico de emergência',
      },
      {
        id: 2,
        title: 'Afastar o Fio com Objeto Isolante',
        mainInstruction:
          'Se não puder desligar a luz, use cabo de vassoura de madeira ou plástico para afastar o fio.',
        detail:
          'Nunca use objetos metálicos nem materiais molhados. Fique sobre uma superfície seca.',
        mediaQuery: 'wooden%20stick%20electric%20cable%20safety',
        mediaAlt: 'Afastando fio elétrico com cabo de madeira seco',
      },
      {
        id: 3,
        title: 'Avaliar a Vítima',
        mainInstruction: 'Verifique se a pessoa responde e se está respirando.',
        detail:
          'Choques graves podem causar parada cardíaca. Se ela estiver inconsciente e sem respirar, inicie a massagem cardíaca.',
        mediaQuery: 'checking%20pulse%20electric%20shock',
        mediaAlt: 'Verificando consciência após choque elétrico',
      },
    ],
  },
  convulsao: {
    id: 'convulsao',
    title: 'Convulsão',
    icon: '🧠',
    description: 'Tremores involuntários violentos, olhos virados, perda de consciência.',
    urgency: 'alta',
    isCoreOffline: true,
    firstActionNote: 'NÃO segure os braços e NUNCA coloque nada dentro da boca!',
    steps: [
      {
        id: 1,
        title: 'Proteger a Cabeça da Vítima',
        mainInstruction: 'Coloque um casaco dobrado ou almofada debaixo da cabeça da pessoa.',
        detail:
          'Abaixe-se ao lado dela e remova móveis ou objetos pontiagudos ao redor para evitar batidas.',
        mediaQuery: 'seizure%20first%20aid%20head%20pillow',
        mediaAlt: 'Protegendo a cabeça de pessoa em crise convulsiva',
      },
      {
        id: 2,
        title: 'Liberar as Vias Aéreas e Roupas',
        mainInstruction: 'Afrouxe gravatas, golas apertadas ou cintos.',
        detail:
          'Deixe os tremores acontecerem naturalmente. NÃO tente conter os movimentos da pessoa.',
        mediaQuery: 'loosen%20clothing%20medical%20help',
        mediaAlt: 'Afrouxando roupas apertadas no pescoço',
      },
      {
        id: 3,
        title: 'Virar de Lado ao Final das Contrações',
        mainInstruction: 'Assim que os tremores pararem, vire a pessoa suavemente de lado.',
        detail:
          'Isso evita que ela se engasgue com saliva ou sangue. Permaneça ao lado até que recobre a consciência por completo.',
        mediaQuery: 'recovery%20position%20seizure%20aftermath',
        mediaAlt: 'Posicionando a vítima de lado após a crise convulsiva',
      },
    ],
  },
  desmaio: {
    id: 'desmaio',
    title: 'Desmaio',
    icon: '😵',
    description: 'Perda temporária e rápida da consciência por falta de oxigênio no cérebro.',
    urgency: 'moderada',
    isCoreOffline: true,
    firstActionNote: 'Deite a pessoa de costas e eleve as pernas!',
    steps: [
      {
        id: 1,
        title: 'Deitar e Elevar as Pernas',
        mainInstruction: 'Mantenha a pessoa deitada e eleve as pernas a cerca de 30 cm do chão.',
        detail:
          'A elevação das pernas facilita o retorno do sangue para o cérebro, acelerando a recuperação da consciência.',
        mediaQuery: 'fainting%20first%20aid%20elevate%20legs',
        mediaAlt: 'Pessoa deitada com as pernas elevadas',
      },
      {
        id: 2,
        title: 'Garantir Ventilação',
        mainInstruction: 'Afrouxe as roupas no pescoço e peça para as pessoas se afastarem.',
        detail: 'Abra janelas se estiver em ambiente fechado para aumentar o fluxo de ar fresco.',
        mediaQuery: 'fresh%20air%20fainting%20recovery',
        mediaAlt: 'Abrindo espaço para passagem de ar limpo',
      },
      {
        id: 3,
        title: 'Recuperação Gradual',
        mainInstruction: 'Não deixe a pessoa se levantar rapidamente após acordar.',
        detail:
          'Aguarde ao menos 5 minutos com ela sentada antes de tentar levantar, para evitar um novo desmaio.',
        mediaQuery: 'sitting%20up%20recovering%20faint',
        mediaAlt: 'Pessoa sentando calmamente após desmaio',
      },
    ],
  },
  'reacao-alergica': {
    id: 'reacao-alergica',
    title: 'Reação alérgica (Anafilaxia)',
    icon: '🤧',
    description: 'Inchaço nos lábios, urticária generalizada ou dificuldade grave para respirar.',
    urgency: 'critica',
    isCoreOffline: false,
    firstActionNote: 'SE HOUVER DIFICULDADE PARA RESPIRAR, LIGUE 192 IMEDIATAMENTE!',
    steps: [
      {
        id: 1,
        title: 'Identificar Sinais de Anafilaxia',
        mainInstruction:
          'Verifique se há inchaço nos lábios, olhos, garganta ou placas vermelhas pela pele.',
        detail:
          'A anafilaxia é uma emergência médica gravíssima que pode fechar a garganta em minutos.',
        mediaQuery: 'allergic%20reaction%20swelling%20lips',
        mediaAlt: 'Exemplo de inchaço alérgico e pele avermelhada',
      },
      {
        id: 2,
        title: 'Injetor de Adrenalina (EpiPen)',
        mainInstruction: 'Se a vítima possui caneta de adrenalina auto-injetável, aplique na coxa.',
        detail:
          'Pressione o dispositivo firmemente contra a parte externa da coxa por 10 segundos, mesmo por cima da roupa.',
        mediaQuery: 'epipen%20auto%20injector%20thigh',
        mediaAlt: 'Aplicação de auto-injetor de adrenalina na coxa',
      },
      {
        id: 3,
        title: 'Manter a Pessoa Confortável',
        mainInstruction:
          'Deite a pessoa de costas. Se ela estiver com falta de ar, deixe-a sentada.',
        detail: 'Evite mudanças bruscas de posição até a chegada da ambulância do SAMU.',
        mediaQuery: 'allergic%20patient%20sitting%20comfortably',
        mediaAlt: 'Posicionamento confortável de paciente em alergia',
      },
    ],
  },
  acidente: {
    id: 'acidente',
    title: 'Acidente de trânsito',
    icon: '🚗',
    description: 'Colisão com veículos, atropelamentos ou quedas de moto.',
    urgency: 'critica',
    isCoreOffline: false,
    firstActionNote: 'SINALIZE O LOCAL antes de se aproximar! Ligue 192 ou 193.',
    steps: [
      {
        id: 1,
        title: 'Sinalizar e Proteger a Área',
        mainInstruction:
          'Ligue o pisca-alerta do seu carro e coloque o triângulo a uma distância segura.',
        detail:
          'Sua segurança vem em primeiro lugar. Evite novos acidentes na via antes de prestar qualquer ajuda.',
        mediaQuery: 'car%20accident%20triangle%20warning',
        mediaAlt: 'Sinalização com triângulo em acidente de trânsito',
      },
      {
        id: 2,
        title: 'NÃO Mova as Vítimas',
        mainInstruction:
          'NÃO retire o capacete do motociclista nem tire a pessoa de dentro do veículo.',
        detail:
          'Mover a vítima pode quebrar a coluna vertebral e causar paralisia definitiva. Apenas mova se houver risco iminente de incêndio.',
        mediaQuery: 'do%20not%20move%20accident%20victim',
        mediaAlt: 'Aguardando resgate sem mover a vítima no local',
      },
      {
        id: 3,
        title: 'Estabilizar o Pescoço',
        mainInstruction: 'Fique atrás da cabeça da pessoa e segure-a firme sem girar.',
        detail:
          'Mantenha a cabeça e o pescoço alinhados com o tronco enquanto conversa e acalma a vítima até os bombeiros chegarem.',
        mediaQuery: 'neck%20stabilization%20first%20aid',
        mediaAlt: 'Segurando a cabeça para estabilizar a coluna cervical',
      },
    ],
  },
  'queda-fratura': {
    id: 'queda-fratura',
    title: 'Queda ou fratura',
    icon: '🦴',
    description: 'Dor intensa, deformidade, inchaço ou osso visível após impacto.',
    urgency: 'alta',
    isCoreOffline: false,
    firstActionNote: 'Imobilize o membro e NÃO tente colocar o osso no lugar!',
    steps: [
      {
        id: 1,
        title: 'Imobilizar o LocalAfetado',
        mainInstruction: 'Peça para a pessoa não mexer o braço ou perna machucado.',
        detail:
          'Use papelão, tábua ou travesseiro ao redor do membro e amarre suavemente com panos para impedir o movimento.',
        mediaQuery: 'splint%20fracture%20leg%20first%20aid',
        mediaAlt: 'Imobilização de perna fraturada com frestas de apoio',
      },
      {
        id: 2,
        title: 'Aplicar Bolsa de Gelo Indireta',
        mainInstruction: 'Coloque compressa fria ou gelo enrolado num pano sobre a região.',
        detail:
          'O frio ajuda a reduzir o inchaço e amenizar a dor. Nunca aplique gelo diretamente na pele.',
        mediaQuery: 'ice%20pack%20towel%20swelling',
        mediaAlt: 'Gelo enrolado em toalha sobre inchaço de fratura',
      },
    ],
  },
  'emergencia-bebe': {
    id: 'emergencia-bebe',
    title: 'Emergência com bebê',
    icon: '👶',
    description: 'Engasgo, sufocamento ou parada em bebês menores de 1 ano.',
    urgency: 'critica',
    isCoreOffline: true,
    firstActionNote: 'MANOBRA ESPECÍFICA PARA BEBÊS! Ligue 192 ou peça ajuda imediata.',
    steps: [
      {
        id: 1,
        title: 'Engasgo em Bebê - Posicionamento',
        mainInstruction: 'Coloque o bebê debruçado sobre seu antebraço, inclinado para baixo.',
        detail: 'Apoie a cabeça do bebê na sua mão, segurando o queixo sem apertar o pescoço.',
        mediaQuery: 'baby%20choking%20first%20aid%20forearm',
        mediaAlt: 'Bebê debruçado no antebraço para desengasgo',
      },
      {
        id: 2,
        title: 'Golpes nas Costas (5 Tapas)',
        mainInstruction:
          'Com a base da outra mão, dê 5 tapas firmes entre as escápulas das costas.',
        detail:
          'Mantenha a cabeça do bebê mais baixa que o corpo para a gravidade ajudar a expulsor o objeto.',
        mediaQuery: 'baby%20back%20slaps%20choking',
        mediaAlt: 'Tapas suaves e firmes nas costas do bebê',
      },
      {
        id: 3,
        title: 'Compressões Torácicas em Bebê',
        mainInstruction:
          'Vire o bebê de frente e faça 5 compressões no centro do peito com 2 dedos.',
        detail:
          'Use o indicador e o médio no centro do peito. Alterne 5 tapas nas costas e 5 compressões no peito até expelir o objeto.',
        mediaQuery: 'baby%20cpr%20two%20fingers',
        mediaAlt: 'Compressões torácicas no bebê usando dois dedos',
      },
    ],
  },
  'emergencia-idoso': {
    id: 'emergencia-idoso',
    title: 'Emergência com idoso',
    icon: '👴',
    description: 'Quedas, suspeita de AVC (Derrame), tontura intensa ou confusão mental.',
    urgency: 'alta',
    isCoreOffline: false,
    firstActionNote: 'SUSPEITA DE AVC? Teste Sorriso, Abraço e Música (SAMU 192)!',
    steps: [
      {
        id: 1,
        title: 'Teste Rápido de AVC (SAMU)',
        mainInstruction:
          '1. Sorriso: peça para sorrir (boca torta?). 2. Abraço: peça para erguer os dois braços (um cai?).',
        detail:
          '3. Música: peça para repetir uma frase simples (fala enrolada?). Se notar qualquer alteração, é AVC grave! Ligue 192.',
        mediaQuery: 'stroke%20fast%20test%20elderly',
        mediaAlt: 'Avaliando sinais de AVC em pessoa idosa',
      },
      {
        id: 2,
        title: 'Queda de Idoso',
        mainInstruction: 'Não levante o idoso imediatamente após cair.',
        detail:
          'Verifique se há dor forte no quadril ou perna encurtada. Pergunte onde dói e espere o socorro se suspeitar de fratura fêmur.',
        mediaQuery: 'elderly%20fall%20assistance',
        mediaAlt: 'Apoiando idoso no chão após queda',
      },
    ],
  },
  'socorros-animal': {
    id: 'socorros-animal',
    title: 'Primeiros socorros animal',
    icon: '🐕',
    description: 'Cão ou gato atropelado, engasgado, ferido ou sofrendo envenenamento.',
    urgency: 'moderada',
    isCoreOffline: false,
    firstActionNote: 'CUIDADO: Animais com dor podem morder por reflexo!',
    steps: [
      {
        id: 1,
        title: 'Segurança e Focinheira Improvisada',
        mainInstruction: 'Enrole uma tiragem de pano ao redor do focinho antes de examinar.',
        detail:
          'Mesmo o animal mais dócil pode morder quando está sentindo dor intensa. Proteja suas mãos.',
        mediaQuery: 'dog%20first%20aid%20muzzle%20care',
        mediaAlt: 'Atendimento de emergência veterinária a um cão',
      },
      {
        id: 2,
        title: 'Transporte Seguro para o Veterinário',
        mainInstruction: 'Apoie o animal numa tábua firme ou cobertor esticado como maca.',
        detail:
          'Mantenha a coluna retilínea durante a locomoção até o hospital veterinário mais próximo.',
        mediaQuery: 'pet%20emergency%20transport%20blanket',
        mediaAlt: 'Transportando animal ferido em cobertor estendido',
      },
    ],
  },
}

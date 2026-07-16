# Anato — Base de Conhecimento do Projeto

> Documento de referência único do projeto **Anato**, um aplicativo gamificado para o aprendizado de anatomia humana. Reúne tudo que foi definido ao longo da disciplina de Empreendedorismo (Curso de Sistemas de Informação — UESB) para servir de base à futura construção da aplicação.
>
> **Status do projeto:** ideação / validação (pré-MVP)
> **Última atualização:** junho de 2026
> **Nome provisório:** "Anato" (ver seção [Marca e Nome](#marca-e-nome))

---

## Índice

1. [Visão Geral](#1-visão-geral)
2. [Problema](#2-problema)
3. [Solução](#3-solução)
4. [Público-Alvo e Personas](#4-público-alvo-e-personas)
5. [Concorrência](#5-concorrência)
6. [Diferenciais Competitivos](#6-diferenciais-competitivos)
7. [Funcionalidades do Produto](#7-funcionalidades-do-produto)
8. [Tipos de Exercício](#8-tipos-de-exercício)
9. [Conteúdo e Trilhas](#9-conteúdo-e-trilhas)
10. [Gamificação](#10-gamificação)
11. [Arquitetura Técnica](#11-arquitetura-técnica)
12. [Modelo de Dados (rascunho)](#12-modelo-de-dados-rascunho)
13. [Algoritmo de Repetição Espaçada](#13-algoritmo-de-repetição-espaçada)
14. [Modelo de Negócio](#14-modelo-de-negócio)
15. [Roadmap](#15-roadmap)
16. [Marca e Nome](#16-marca-e-nome)
17. [Riscos e Questões em Aberto](#17-riscos-e-questões-em-aberto)
18. [Decisões Pendentes](#18-decisões-pendentes)
19. [Referências e Inspirações](#19-referências-e-inspirações)

---

## 1. Visão Geral

**Anato é o "Duolingo da anatomia humana":** um aplicativo mobile gamificado que organiza o estudo de anatomia em lições curtas, trilhas progressivas e revisão diária, feito para o estudante brasileiro da área da saúde, em português e a preço acessível.

- **Missão:** tornar o estudo de anatomia acessível, constante e menos sofrido para os estudantes da saúde no Brasil.
- **Visão:** ser, até 2031, o aplicativo de anatomia mais usado pelos estudantes da saúde brasileiros, e depois expandir para outras disciplinas básicas dos cursos da saúde.
- **Valores:** rigor científico (conteúdo revisado por professores), acessibilidade (preço em reais), constância (pouco todo dia > maratona de véspera), honestidade com o usuário (organiza o esforço, não promete substituí-lo).

**Proposta de valor em uma frase (formato "Ajudamos [público] a [resultado] sem [inconveniente]"):**
> Ajudamos estudantes da saúde a dominar anatomia e reter o conteúdo a longo prazo sem gastar fortunas com atlas e sem depender de apps em inglês.

---

## 2. Problema

Aprender anatomia exige memorizar centenas de estruturas em latim e grego, localizá-las no corpo e entender as relações entre elas. Esse esforço esbarra em três obstáculos centrais:

1. **Custo elevado.** Atlas de referência (Netter, Sobotta) passam de R$ 600. Os principais aplicativos cobram assinatura anual em dólar (US$ 35 a US$ 75).
2. **Curva de esquecimento.** Sem revisão sistemática, o conteúdo é decorado às pressas para a prova e perdido entre semestres. Cobra a conta no ciclo clínico e nos estágios.
3. **Fragmentação.** Não existe ferramenta única que combine teoria, treino de prova prática e revisão espaçada num fluxo contínuo e engajador.

**Quem sofre:** estudantes dos cursos da saúde, principalmente nos primeiros semestres e em universidades públicas (orçamento mais apertado).

**Impactos:**
- Reprovação numa disciplina básica que trava o fluxo do curso.
- Ansiedade diante da prova prática (peça cadavérica + alfinete numerado).
- Gasto alto com atlas e assinaturas.
- Retenção fraca de longo prazo.

**Evidências:**
- Preço dos atlas (> R$ 600) e das assinaturas internacionais (US$ 35–75/ano).
- Relatos recorrentes de veteranos sobre alta reprovação (a validar em campo na roda de conversa com estudantes da UESB).

> **Nota de validação:** a existência e a intensidade do problema serão confirmadas em pesquisa de campo (roda de conversa + entrevistas). Ver `Roteiro_Roda_de_Conversa_Anato`.

---

## 3. Solução

Aplicativo mobile multiplataforma que transforma anatomia em um hábito diário de poucos minutos:

- Lições curtas (5 a 10 min) encadeadas em **trilhas por sistema anatômico**.
- **Modo Prova Prática:** foto de peça anatômica com alfinete numerado, sob tempo, replicando a avaliação real brasileira.
- **Repetição espaçada** que retoma automaticamente estruturas erradas ou não revisadas.
- **Gamificação completa:** streak, XP, vidas, ligas.
- **Multi-curso:** trilhas com profundidade ajustada ao curso do estudante.
- Conteúdo em **português**, na ordem do currículo brasileiro.

**Benefícios:** retenção a longo prazo, menos ansiedade na prova prática, custo muito inferior às alternativas e um formato que cabe na rotina apertada.

---

## 4. Público-Alvo e Personas

**Segmento:** estudantes da área da saúde cursando anatomia — medicina, fisioterapia, enfermagem, odontologia, educação física, biomedicina, nutrição e fonoaudiologia.
**Foco inicial (MVP):** universidades públicas. Curso âncora a definir (fisioterapia ou medicina são os candidatos mais fortes).
**Mercado potencial:** ~1,8 milhão de estudantes da saúde no Brasil.

### Persona 1 — Marina (a calourada da saúde)
- **Idade:** 19 anos
- **Curso:** 1º ano de Fisioterapia, universidade pública
- **Objetivos:** passar em anatomia sem sufoco; ganhar confiança para a prova prática; criar rotina de estudo
- **Dores:** ansiedade com a prova de peça e alfinete; volume de termos em latim; materiais caros; decora e esquece
- **Comportamento digital:** celular o dia todo; YouTube; WhatsApp da turma; Instagram e TikTok; já usou Duolingo
- **Poder de compra:** baixo; pagaria R$ 10–15/mês se o benefício for claro

### Persona 2 — Pedro (o veterano que precisa reter)
- **Idade:** 21 anos
- **Curso:** 2º ano de Medicina
- **Objetivos:** manter a anatomia viva para o ciclo clínico; revisar de forma eficiente
- **Dores:** rotina lotada; manter baralhos no Anki dá trabalho; melhor conteúdo em inglês; medo de chegar ao internato com lacunas
- **Comportamento digital:** Anki e YouTube; perfis de medicina; PDF no tablet; paga assinaturas digitais
- **Poder de compra:** médio; pagaria R$ 20–30/mês por algo que economize tempo

> **Nota:** os valores de disposição a pagar são hipóteses da equipe, a validar.

---

## 5. Concorrência

| Concorrente | Solução | Pontos fortes | Pontos fracos |
|---|---|---|---|
| **Complete Anatomy** (Elsevier) | Atlas 3D por assinatura | Modelos 3D de referência; marca forte; conteúdo profundo | Caro (US$ 40–75/ano); pouco engajante para revisão diária; não cobre o formato de prova brasileiro |
| **Visible Body** | Atlas 3D | Boa qualidade visual; adotado por universidades no exterior | Assinatura em dólar; sem versão completa em português; sem gamificação |
| **Kenhub** | Atlas + quizzes + vídeos | Conteúdo estruturado; tem versão em português | Preço em euro; gamificação limitada; sem modo prova prática |
| **Anatomist** | Quiz gamificado | Gratuito; grande banco de identificações; versão em português | Sem trilha estruturada nem repetição espaçada; experiência simples |
| **Anatomania** (UFMA) | Quiz gratuito brasileiro | Em português; ranking entre estudantes; gratuito | Projeto pequeno; só Android; sem trilhas e sem revisão espaçada |

**Posicionamento:** o mercado se divide entre atlas 3D caros (profundos, mas pouco engajadores) e quizzes simples (acessíveis, mas superficiais). O quadrante vazio — gamificação completa + preço acessível + conteúdo brasileiro — é onde o Anato entra. O concorrente mais próximo (Anatomania) é um projeto universitário pequeno.

---

## 6. Diferenciais Competitivos

- **Inovação tecnológica:** microlearning + repetição espaçada + treino de prova prática num único produto mobile.
- **Modo de prova prática no formato brasileiro:** peça cadavérica + alfinete. **É o diferencial mais forte** — ninguém treina exatamente isso.
- **Propriedade intelectual:** marca Anato + banco autoral de questões e imagens validadas. Sem patentes nesta fase.
- **Algoritmos exclusivos:** variação do SM-2 calibrada para nomenclatura anatômica e para o calendário de provas do semestre brasileiro.
- **Uso de IA:** geração assistida de questões e alternativas (com revisão docente); depois, personalização do plano de revisão.
- **Modelo de negócio:** freemium em reais, num mercado dominado por assinaturas anuais em dólar.
- **Multi-curso:** trilhas por curso da saúde, não só medicina.
- **Experiência do usuário:** lições de 5–10 min, linguagem de jogo, onboarding que adapta as trilhas ao curso.

---

## 7. Funcionalidades do Produto

### Core (MVP)
- [ ] Onboarding com seleção de curso (define profundidade e ênfase das trilhas)
- [ ] Trilha progressiva de um sistema (candidato a piloto: **osteologia**)
- [ ] Lições curtas (5–10 min) com múltiplos tipos de exercício
- [ ] Modo Prova Prática (foto de peça + alfinete + tempo)
- [ ] Repetição espaçada (retoma erros automaticamente)
- [ ] Sistema de streak diário
- [ ] Sistema de XP e níveis
- [ ] Sistema de vidas/erros
- [ ] Perfil do usuário com progresso

### Pós-MVP
- [ ] Demais sistemas anatômicos (trilhas completas)
- [ ] Ligas competitivas entre usuários
- [ ] Conquistas / medalhas
- [ ] Powerups (pular, dica, congelar streak)
- [ ] Avatares customizáveis / mascote que evolui
- [ ] Loja de itens cosméticos com XP
- [ ] Eventos sazonais ("semana da neuroanatomia")
- [ ] PvP / duelo 1v1
- [ ] Times ou guildas por curso
- [ ] Salas privadas com a turma
- [ ] Compartilhar progresso em rede social
- [ ] Modelos 3D rotacionáveis (avaliar BioDigital, Sketchfab)
- [ ] Personalização do plano de revisão por IA

---

## 8. Tipos de Exercício

Variar os formatos é o que impede o quiz de ficar monótono (aprendizado da análise de concorrência — o ponto fraco do Anatomania é ser quiz único e simples).

1. **Identificar em peça cadavérica** (foto real com estrutura destacada)
2. **Identificar em modelo 3D** (pós-MVP)
3. **Drag-and-drop de etiquetas** sobre uma imagem
4. **Origem → Inserção → Inervação → Ação** (para músculos, em formato flashcard ativo)
5. **Quebrar a etimologia** em pedaços (ex.: "esterno-cleido-mastóideo")
6. **Caso clínico básico** (correlação clínica)
7. **Corte anatômico** (cross-section: TC/RM/corte)
8. **Verdadeiro/falso com peça**
9. **Pareamento** (relacionar duas listas)
10. **Áudio com pronúncia** em latim

---

## 9. Conteúdo e Trilhas

Trilhas por sistema, na ordem usual das disciplinas brasileiras. Sugestão de sequência:

1. **Osteologia** (candidato a trilha-piloto do MVP — é o ponto de partida usual)
2. **Artrologia / Sindesmologia** (articulações)
3. **Miologia** (músculos)
4. **Sistema Cardiovascular** (angiologia)
5. **Sistema Nervoso** (neuroanatomia)
6. **Sistema Respiratório**
7. **Sistema Digestório**
8. **Sistema Urogenital**
9. **Sistema Endócrino + Linfático**
10. **Anatomia de Superfície**
11. **Embriologia** (futuro)

**Terminologia:** seguir a Terminologia Anatômica oficial em português. Atenção às diferenças de nomenclatura entre atlas usados no Brasil (Netter, Sobotta, Dangelo & Fattini, Yokochi).

**Fonte das imagens de peças:** ponto crítico — depende de parceria com departamentos de anatomia e/ou produção de acervo próprio com autorização (ver [Riscos](#17-riscos-e-questões-em-aberto)).

---

## 10. Gamificação

Loop de engajamento inspirado no Duolingo (o diferencial vs. concorrentes que são "só quiz"):

- **Streak diário:** dias consecutivos de estudo. Estudante da saúde já é obcecado por rotina — encaixa bem.
- **XP e níveis:** pontos por lição concluída; progressão visível.
- **Vidas/erros:** limite de erros por sessão, simulando a pressão da prova.
- **Ligas competitivas:** rankings entre usuários (o Anatomania mostrou que ranking engaja o público brasileiro).
- **Conquistas/medalhas:** marcos (ex.: "concluiu osteologia", "30 dias de streak").
- **Notificações:** lembretes diários no estilo Duolingo (carinhosas/insistentes).

**Princípio:** não é só o quiz isolado — é o sistema inteiro que faz o usuário voltar todo dia.

---

## 11. Arquitetura Técnica

> Decisões preliminares. A stack definitiva será fechada na fase de MVP (ver [Decisões Pendentes](#18-decisões-pendentes)).

- **Front-end (mobile):** React Native **ou** Flutter — base única para Android e iOS.
- **Back-end:** Node.js **ou** Python, expondo API REST.
- **Banco de dados:** PostgreSQL (perfis, progresso, banco de questões, ranqueamento).
- **Cloud:** hospedagem em nuvem + armazenamento de objetos para as imagens das peças anatômicas.
- **IA:** IA generativa para apoiar a redação de questões e alternativas (sempre com revisão docente antes de publicar). Pós-MVP: personalização do plano de revisão.

### Considerações
- **Mobile-first**, mas a arquitetura de back-end deve permitir uma futura versão web.
- **Offline parcial:** avaliar cache de lições para estudo sem conexão (estudante nem sempre tem dados).
- **LGPD:** dados de estudantes exigem cuidado desde o início (consentimento, minimização, segurança).
- **Custo de imagens:** armazenamento de objetos deve considerar volume de fotos de peças em alta resolução.

---

## 12. Modelo de Dados (rascunho)

> Esboço inicial para orientar o desenvolvimento. Não é o schema final.

**Entidades principais:**

- **User** — id, nome, email, curso, data_cadastro, plano (free/premium), streak_atual, xp_total, nivel
- **Course** — id, nome (ex.: "Fisioterapia"), config de profundidade das trilhas
- **System** (sistema anatômico) — id, nome (ex.: "Osteologia"), ordem
- **Track** (trilha) — id, system_id, course_id, ordem, título
- **Lesson** (lição) — id, track_id, ordem, título, tipo
- **Question** (questão) — id, lesson_id, tipo_exercicio, enunciado, midia (URL da imagem/peça), alternativas, resposta_correta, status_revisao (pendente/aprovada), revisor_id
- **AnatomicalStructure** (estrutura) — id, nome_pt, nome_latim, system_id, sinônimos[]
- **Media** (peça/imagem) — id, url, tipo (foto_peça / modelo_3d / corte), fonte, autorizacao
- **UserProgress** — id, user_id, question_id, acertos, erros, ultima_revisao, proxima_revisao, fator_facilidade (SM-2), intervalo
- **Achievement** — id, nome, critério
- **UserAchievement** — user_id, achievement_id, data
- **LeagueEntry** — user_id, liga, pontos_semana

**Relações-chave:**
- Um `Course` influencia quais `Track` (e com que profundidade) o `User` vê.
- `UserProgress` guarda o estado do algoritmo de repetição espaçada por par usuário × questão.
- `Question` sempre referencia uma `AnatomicalStructure` e, quando aplicável, uma `Media`.
- Toda `Question` precisa passar por `status_revisao = aprovada` antes de ir para produção.

---

## 13. Algoritmo de Repetição Espaçada

Base: **SM-2** (o mesmo princípio do Anki), com calibração própria.

**Ideia central:** cada estrutura/questão tem um intervalo de revisão que cresce quando o usuário acerta e encolhe quando erra. Estruturas erradas voltam logo; estruturas dominadas voltam cada vez menos.

**Parâmetros por par usuário × questão (ver `UserProgress`):**
- `fator_facilidade` (ease factor) — começa em ~2.5; ajustado a cada revisão
- `intervalo` — dias até a próxima revisão
- `proxima_revisao` — data calculada

**Calibração específica do Anato (diferencial):**
- Ajuste ao **calendário de provas do semestre brasileiro**: intensificar revisão de um sistema conforme se aproxima a prova daquele conteúdo.
- Priorizar estruturas com maior taxa de erro coletiva (mais cobradas / mais difíceis).

> Implementação de referência: lógica do SM-2 é pública e bem documentada. Começar simples e calibrar com dados reais de uso.

---

## 14. Modelo de Negócio

Modelo **freemium**. Detalhe visual no `Canvas_Modelo_de_Negocio_Anato`.

| Bloco | Conteúdo |
|---|---|
| **Proposta de valor** | Anatomia em lições curtas estilo Duolingo, com prova prática no formato BR, revisão espaçada, conteúdo em PT-BR e plano gratuito + pago acessível |
| **Segmentos de clientes** | Estudantes da saúde cursando anatomia (foco inicial: universidades públicas); depois candidatos a residência; depois universidades (B2B) |
| **Canais** | Google Play e App Store; Instagram e TikTok; ligas acadêmicas e monitores; indicação veterano → calouro |
| **Relacionamento** | Autosserviço pelo app; notificações e streak; comunidade e ligas; embaixadores nos campi; suporte por redes sociais |
| **Fontes de receita** | Assinatura premium (mensal/anual, em reais); plano gratuito com anúncios leves; depois licenciamento B2B e pacotes por área |
| **Recursos-chave** | Equipe de desenvolvimento; banco de questões e imagens validadas; infra em nuvem; algoritmo de repetição espaçada; comunidade |
| **Atividades-chave** | Desenvolver e manter o app; produzir banco de questões; fotografar e catalogar peças; revisar com professores; marketing e métricas |
| **Parcerias-chave** | Departamentos de anatomia; ligas e centros acadêmicos; professores revisores; UESB como campo de piloto |
| **Estrutura de custos** | Equipe; infra em nuvem; produção/revisão de conteúdo; marketing; jurídico; taxas das lojas (15–30%) |

**Precificação (hipótese, a validar):** premium na faixa de R$ 10–30/mês conforme persona. Plano gratuito generoso para atrair base.

---

## 15. Roadmap

| Fase | Prazo | Entregas |
|---|---|---|
| **MVP** | 6 meses | Trilha-piloto de um sistema (osteologia), modo prova prática, streak e XP; teste com estudantes da UESB |
| **Validação** | 12 meses | Ajustes com feedback, novas trilhas, plano pago, métricas de retenção |
| **Escala** | 24 meses | Cobertura dos principais sistemas, expansão nacional, parcerias com ligas e universidades |
| **Internacionalização** | 36 meses | Adaptação para outros países de língua portuguesa; estudo de versão em espanhol |

**Métricas a acompanhar desde o lançamento:** retenção semanal, completion rate das lições, NPS, conversão free→premium, CAC, LTV. Comparar desempenho em provas entre usuários e grupo controle (se viável com parceria acadêmica).

---

## 16. Marca e Nome

**"Anato" é provisório**, mas forte. Racional:
- É como os estudantes **já chamam a matéria** ("prova de anato", "bombei em anato") — familiaridade imediata.
- Curto, fácil de virar marca e verbo ("fiz minhas lições no Anato").
- Carrega a raiz de "anatomia" sem precisar explicar.

**Alternativas consideradas** (caso a equipe queira trocar): Decorpo, Vesa/Vesalius, Disseca, Corpus, Forame, Osteo, Esqueletino (mascote).

**Pendências de marca:** registrar domínio (anato.app sugerido), verificar disponibilidade da marca, definir identidade visual. Paleta atual dos materiais: azul tecnológico (#1E40AF), roxo (#7C3AED), ciano (#0891B2), verde-esmeralda (#059669).

---

## 17. Riscos e Questões em Aberto

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Concorrentes (inclusive gigantes lançarem versão gamificada em PT-BR) | Média | Alta | Inovação contínua; foco no modo prova prática e no currículo BR; comunidade fiel |
| Falta de recursos para desenvolver e manter | Alta | Alta | MVP enxuto; editais e incubadoras; tecnologias de baixo custo inicial |
| Problemas tecnológicos (falhas, indisponibilidade) | Média | Média | Testes, backups, monitoramento; arquitetura simples na largada |
| Baixa adesão ou baixa conversão para o pago | Média | Alta | Validar preço e valor na roda de conversa; plano gratuito generoso |
| **Direitos de imagem das peças anatômicas** | Média | Média | Parcerias com departamentos de anatomia; acervo próprio com autorização |
| Validação científica do conteúdo | Média | Alta | Revisão docente obrigatória antes de publicar |

**Questões em aberto:**
- De onde virão as imagens de peças cadavéricas? (parceria vs. acervo próprio vs. licenciamento)
- Custo de modelagem 3D justifica no MVP, ou fica para depois?
- Como garantir validação científica contínua com escala?

---

## 18. Decisões Pendentes

- [ ] **Nome definitivo** da marca
- [ ] **Curso âncora** do MVP (fisioterapia vs. medicina)
- [ ] **Sistema âncora** da primeira trilha (osteologia é o candidato)
- [ ] **Stack técnica:** React Native vs. Flutter; Node.js vs. Python
- [ ] **Divisão de papéis** na equipe (estratégia/CEO, tecnologia/CTO, operações, marketing)
- [ ] **Fonte das imagens** de peças anatômicas
- [ ] **Preço** exato dos planos (depende da validação)
- [ ] Incluir modelos 3D no MVP ou não

---

## 19. Referências e Inspirações

**Produtos de referência:**
- **Duolingo** — loop de engajamento (streak, XP, vidas, ligas)
- **Anki** — repetição espaçada (SM-2)
- **Brilliant** — lições visuais
- **Memrise** — mnemônicos
- **Strava** — streak/competição
- **Khan Academy** — trilhas

**Atlas de anatomia (para nomenclatura e conteúdo):** Netter, Sobotta, Gray's, Rohen (fotográfico), Dangelo & Fattini, Yokochi.

**Documentos do projeto (entregas da disciplina):**
- `Proposta_Anato` — proposta inicial
- `Mapa_de_Empatia_Anato` — persona e dores
- `Diamante_Duplo_Anato` — método de design (divergir/convergir)
- `Roteiro_Roda_de_Conversa_Anato` — instrumento de validação (Design Thinking)
- `Canvas_Modelo_de_Negocio_Anato` — modelo de negócio visual
- `Plano_de_Negocios_Anato` — plano completo (12 seções)
- `Pitch_Anato` — apresentação de venda

---

*Documento vivo. Atualizar conforme o projeto evolui e as hipóteses são validadas.*

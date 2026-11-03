export type Turma = {
  id: number;
  nome: string;
  alunos: number;
  registros: number;
  engajamento: number;
  ultimoRegistro: string;
  criterios: { nome: string; valor: number }[];
};

export const turmas: Turma[] = [
  {
    id: 1,
    nome: "Terceiro Ano Tulipa",
    alunos: 40,
    registros: 10,
    engajamento: 85,
    ultimoRegistro: "Ontem",
    criterios: [
      { nome: "Postura e Colaboração", valor: 85 },
      { nome: "Atividades", valor: 65 },
      { nome: "Presença", valor: 65 },
      { nome: "Participação", valor: 80 },
    ],
  },
  {
    id: 2,
    nome: "Segundo Ano Betônia",
    alunos: 40,
    registros: 10,
    engajamento: 85,
    ultimoRegistro: "Ontem",
    criterios: [
      { nome: "Postura e Colaboração", valor: 85 },
      { nome: "Atividades", valor: 65 },
      { nome: "Presença", valor: 65 },
      { nome: "Participação", valor: 80 },
    ],
  },
  {
    id: 3,
    nome: "Primeiro Ano Abóbora",
    alunos: 40,
    registros: 10,
    engajamento: 85,
    ultimoRegistro: "Ontem",
    criterios: [
      { nome: "Postura e Colaboração", valor: 85 },
      { nome: "Atividades", valor: 65 },
      { nome: "Presença", valor: 65 },
      { nome: "Participação", valor: 80 },
    ],
  },
];

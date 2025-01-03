export type Word = {
  id: number;
  word: string;
  hint: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const words = (): Array<Word> => ([
  {
    "id": 1190,
    "word": "fallout",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 4,
    "word": "alexandre",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 6,
    "word": "fernanda",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 7,
    "word": "felicia",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 8,
    "word": "danilo",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 9,
    "word": "francisco",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 10,
    "word": "gabriel",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 11,
    "word": "juliano",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 12,
    "word": "johnny",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:56.000Z")
  },
  {
    "id": 13,
    "word": "luciana",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 14,
    "word": "lucinete",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 16,
    "word": "marina",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 17,
    "word": "mônique",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 18,
    "word": "mônica",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 19,
    "word": "natália",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 21,
    "word": "nicolas",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 22,
    "word": "rodolfo",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 23,
    "word": "rodrigo",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 24,
    "word": " wladimir",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 25,
    "word": "walquiria",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 26,
    "word": "gustavo",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 27,
    "word": "wesley",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 28,
    "word": "joão",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 29,
    "word": "pedro",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 30,
    "word": "rafael",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 31,
    "word": "thiago",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 32,
    "word": "paulo",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 33,
    "word": "vinicius",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 34,
    "word": "vitor",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 35,
    "word": "igor",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 37,
    "word": "josé",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 38,
    "word": "matheus",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 40,
    "word": "suzana",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 41,
    "word": "william",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 42,
    "word": "andré",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 43,
    "word": "simone",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 44,
    "word": "andrea",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 45,
    "word": "ivone",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 46,
    "word": "nilson",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 47,
    "word": "nadson",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 48,
    "word": "geovanna",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 49,
    "word": "sandro",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 51,
    "word": "gracielle",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 52,
    "word": "helena",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 53,
    "word": "ravi",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 54,
    "word": "joselho",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 56,
    "word": "isabella",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 55,
    "word": "cássia",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:58.000Z")
  },
  {
    "id": 57,
    "word": "antílope",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 58,
    "word": "babuíno",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 59,
    "word": "búfalo",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 60,
    "word": "boi",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 61,
    "word": "cachorro",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 62,
    "word": "chimpanzé",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 63,
    "word": "dinosauro",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 64,
    "word": "dragão",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 67,
    "word": "elefante",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 68,
    "word": "girafa",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 70,
    "word": "iguana",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 71,
    "word": "jacaré",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 72,
    "word": "leão",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 73,
    "word": "krill",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 74,
    "word": "libélula",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 75,
    "word": "lobo guará",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 76,
    "word": "macaco",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 77,
    "word": "marsupial",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 78,
    "word": "morcego",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 79,
    "word": "naja",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 80,
    "word": "órix do cabo",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 81,
    "word": "onça",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 82,
    "word": "pato",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 83,
    "word": "peixe",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 84,
    "word": "quati",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 85,
    "word": "rato",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 86,
    "word": "sapo",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 87,
    "word": "serpente",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 88,
    "word": "tamanduá",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 89,
    "word": "tigre",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 90,
    "word": "vaca",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 92,
    "word": "yak",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 93,
    "word": "urso",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 94,
    "word": "zebra",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 95,
    "word": "zebu",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 96,
    "word": "zangão",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 97,
    "word": "avestruz",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 98,
    "word": "baleia",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 99,
    "word": "amarelo",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 100,
    "word": "anil",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 101,
    "word": "azul",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 102,
    "word": "âmbar",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 103,
    "word": "cinza",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 104,
    "word": "branco",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 105,
    "word": "beje",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:21.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:21.000Z")
  },
  {
    "id": 106,
    "word": "castanho",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 107,
    "word": "ciano",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 108,
    "word": "dourado",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 109,
    "word": "creme",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 110,
    "word": "fúcsia ",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 111,
    "word": "lilás",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 112,
    "word": "magenta",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 113,
    "word": "índigo",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 114,
    "word": "marfim",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 115,
    "word": "laranja",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 116,
    "word": "marrom",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 117,
    "word": "preto",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 118,
    "word": "mostarda",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 119,
    "word": "prata",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 120,
    "word": "rosa",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 122,
    "word": "verde",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 123,
    "word": "púrpura",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 124,
    "word": "salmão",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 125,
    "word": "vermelho",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 126,
    "word": "violeta",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 127,
    "word": "vinho",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 128,
    "word": "açucar",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 129,
    "word": "amendoim",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 130,
    "word": "champanhe",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 91,
    "word": "wallabee",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:11.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:11.000Z")
  },
  {
    "id": 121,
    "word": "roxo",
    "hint": "cor",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:22.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:22.000Z")
  },
  {
    "id": 15,
    "word": "maria",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 39,
    "word": "lucas",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-07-31T22:17:57.000Z")
  },
  {
    "id": 66,
    "word": "flamingo",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  },
  {
    "id": 20,
    "word": "renato",
    "hint": "nome",
    "description": "De quem será este nome?",
    "createdAt": new Date("2022-07-31T22:17:57.000Z"),
    "updatedAt": new Date("2022-08-09T04:01:07.000Z")
  },
  {
    "id": 50,
    "word": "gabriella",
    "hint": "nome",
    "description": "0",
    "createdAt": new Date("2022-07-31T22:17:58.000Z"),
    "updatedAt": new Date("2022-08-12T15:52:25.000Z")
  },
  {
    "id": 131,
    "word": "bolo",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 132,
    "word": "arroz",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 133,
    "word": "café",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:16.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:16.000Z")
  },
  {
    "id": 134,
    "word": "espinafre",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 135,
    "word": "doce",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 136,
    "word": "feijão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 137,
    "word": "geleia",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 138,
    "word": "hortelã ",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 139,
    "word": "kiwi",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 140,
    "word": "jaca",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 141,
    "word": "manjericão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 142,
    "word": "leite",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 143,
    "word": "naruto",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 144,
    "word": "iogurte",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 145,
    "word": "nugget",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 146,
    "word": "omelete",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 147,
    "word": "paçoca",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 148,
    "word": "pão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 149,
    "word": "pizza",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 1191,
    "word": "grand theft auto",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 185,
    "word": "Kirby",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-07T21:56:21.000Z"),
    "updatedAt": new Date("2022-08-07T21:56:21.000Z")
  },
  {
    "id": 152,
    "word": "rabanada",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 153,
    "word": "ratatouille",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 154,
    "word": "rapadura",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 155,
    "word": "ravioli",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 156,
    "word": "requeijão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 157,
    "word": "risoto",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 158,
    "word": "rocambole",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 159,
    "word": "sopa",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 184,
    "word": "mario",
    "hint": "personagem",
    "description": "Você conhece o Mario?",
    "createdAt": new Date("2022-08-07T21:56:13.000Z"),
    "updatedAt": new Date("2022-08-12T15:55:39.000Z")
  },
  {
    "id": 161,
    "word": "taco",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 162,
    "word": "tamara",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 163,
    "word": "tamarindo",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 164,
    "word": "torrada",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 165,
    "word": "tapioca",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 166,
    "word": "torta",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 167,
    "word": "uva",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 168,
    "word": "yakisoba",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 187,
    "word": "colômbia",
    "hint": "país",
    "description": "País da América do Sul",
    "createdAt": new Date("2022-08-07T21:56:56.000Z"),
    "updatedAt": new Date("2022-08-09T20:35:43.000Z")
  },
  {
    "id": 170,
    "word": "pão de milho",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 171,
    "word": "macarrão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 172,
    "word": "pão de batata",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 173,
    "word": "pão de queijo",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 174,
    "word": "lasanha",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 175,
    "word": "pão de cenoura",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 176,
    "word": "grão de bico",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 177,
    "word": "pão de feijão",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 178,
    "word": "pão de trigo",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 179,
    "word": "tomate",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 188,
    "word": "argentina",
    "hint": "país",
    "description": "País da América do Sul",
    "createdAt": new Date("2022-08-07T21:56:59.000Z"),
    "updatedAt": new Date("2022-08-09T20:38:18.000Z")
  },
  {
    "id": 1,
    "word": "gato",
    "hint": "animal",
    "description": "0",
    "createdAt": new Date("2022-07-31T21:25:48.000Z"),
    "updatedAt": new Date("2022-07-31T21:25:48.000Z")
  },
  {
    "id": 150,
    "word": "queijo",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 160,
    "word": "sorvete",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:17.000Z")
  },
  {
    "id": 169,
    "word": "pudim",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-07-31T22:22:18.000Z"),
    "updatedAt": new Date("2022-07-31T22:22:18.000Z")
  },
  {
    "id": 181,
    "word": "nayara",
    "hint": "nome",
    "description": null,
    "createdAt": new Date("2022-08-07T21:28:37.000Z"),
    "updatedAt": new Date("2022-08-07T21:28:37.000Z")
  },
  {
    "id": 189,
    "word": "bermuda",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 190,
    "word": "boné",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 191,
    "word": "camisa",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 192,
    "word": "blusa",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 193,
    "word": "calça",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 194,
    "word": "camiseta",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 195,
    "word": "casaco",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 196,
    "word": "chinelo",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 197,
    "word": "chapéu",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 198,
    "word": "cinto",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 199,
    "word": "meia",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 200,
    "word": "luva",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 201,
    "word": "sapato",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 202,
    "word": "vestido",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 203,
    "word": "tênis",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 204,
    "word": "saia",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 205,
    "word": "regata",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 206,
    "word": "sandália",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 207,
    "word": "paletó",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T21:55:46.000Z"),
    "updatedAt": new Date("2022-08-08T21:55:46.000Z")
  },
  {
    "id": 230,
    "word": "calopsita",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 231,
    "word": "águia",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 232,
    "word": "canário",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 233,
    "word": "cacatua",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 234,
    "word": "andorinha",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 235,
    "word": "arara",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 236,
    "word": "gaivota",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 237,
    "word": "papagaio",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 238,
    "word": "gavião",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 239,
    "word": "coruja",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 240,
    "word": "pardal",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 241,
    "word": "periquito",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 242,
    "word": "sabiá",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 243,
    "word": "pombo",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 244,
    "word": "urubu",
    "hint": "pássaro",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:19.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:19.000Z")
  },
  {
    "id": 245,
    "word": "afeganistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 247,
    "word": "albânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 248,
    "word": "alemanha",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 250,
    "word": "lituânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 251,
    "word": "áfrica do sul",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 253,
    "word": "macau",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 254,
    "word": "macedónia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 255,
    "word": "maldivas",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 256,
    "word": "madagáscar",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 257,
    "word": "mali",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 259,
    "word": "malásia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 260,
    "word": "malta",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 261,
    "word": "isle of man",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 262,
    "word": "marrocos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 264,
    "word": "maurícia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 265,
    "word": "mauritânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 266,
    "word": "méxico",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 267,
    "word": "mónaco",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 268,
    "word": "moçambique",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 269,
    "word": "moldávia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 270,
    "word": "micronésia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 271,
    "word": "mongólia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 272,
    "word": "monserrate",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 273,
    "word": "montenegro",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 274,
    "word": "namíbia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 275,
    "word": "nauru",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 276,
    "word": "navassa island",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 277,
    "word": "mundo",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 278,
    "word": "nepal",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 279,
    "word": "niue",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 280,
    "word": "níger",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 281,
    "word": "nicarágua",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 282,
    "word": "nigéria",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 283,
    "word": "noruega",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 284,
    "word": "nova caledónia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 285,
    "word": "nova zelândia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 286,
    "word": "palau",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 287,
    "word": "omã",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 1192,
    "word": "gears of war",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 289,
    "word": "panamá",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 290,
    "word": "países baixos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 291,
    "word": "papua nova guiné",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 292,
    "word": "paquistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 293,
    "word": "peru",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 294,
    "word": "paracel islands",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 295,
    "word": "paraguai",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 296,
    "word": "pitcairn",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 297,
    "word": "polinésia francesa",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 298,
    "word": "polónia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 299,
    "word": "porto rico",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 300,
    "word": "portugal",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 301,
    "word": "quénia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 302,
    "word": "quirguizistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 303,
    "word": "reino unido",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 304,
    "word": "quiribáti",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 305,
    "word": "república dominicana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 306,
    "word": "república centro africana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 308,
    "word": "ruanda",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 309,
    "word": "rússia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 310,
    "word": "samoa americana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 311,
    "word": "salvador",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 312,
    "word": "santa lúcia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 313,
    "word": "samoa",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 315,
    "word": "são marinho",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 318,
    "word": "são martinho",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 320,
    "word": "são cristóvão e neves",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 321,
    "word": "são vicente e granadinas",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 322,
    "word": "sara ocidental",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 323,
    "word": "seicheles",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 324,
    "word": "senegal",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 325,
    "word": "serra leoa",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 326,
    "word": "sérvia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 327,
    "word": "somália",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 328,
    "word": "síria",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 329,
    "word": "singapura",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 330,
    "word": "sint maarten",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 331,
    "word": "southern ocean",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 332,
    "word": "spratly islands",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 333,
    "word": "sudão do sul",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 335,
    "word": "sudão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 336,
    "word": "suécia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 337,
    "word": "suazilândia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 338,
    "word": "suíça",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 340,
    "word": "taiwan",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 339,
    "word": "suriname",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 342,
    "word": "svalbard e jan mayen",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 343,
    "word": "tajiquistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 344,
    "word": "tanzânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 1193,
    "word": "halo",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 346,
    "word": "territórios austrais franceses",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 347,
    "word": "tokelau",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 349,
    "word": "timor leste",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 351,
    "word": "trindade e tobago",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 352,
    "word": "tunísia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 353,
    "word": "turquemenistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 355,
    "word": "tuvalu",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 356,
    "word": "ucrânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 357,
    "word": "uruguai",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 358,
    "word": "uganda",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 319,
    "word": "são tomé e príncipe",
    "hint": "país",
    "description": "0",
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 348,
    "word": "togo",
    "hint": "país",
    "description": "Togo, uma nação da África Ocidental situada no Golfo da Guiné, é conhecido pelas praias repletas de palmeiras e pelos vilarejos no topo de colinas. Koutammakou, habitado pelo povo batammariba, é um tradicional povoado de casas de barro parecidas com...",
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 307,
    "word": "roménia",
    "hint": "país",
    "description": "A Romênia é um país do sudeste europeu conhecido pela região florestal da Transilvânia, cercada pelos Cárpatos. Entre suas cidades medievais preservadas está Sighişoara, e há muitos castelos e igrejas fortificados, com destaque para o Castelo de Bran,...",
    "createdAt": new Date("2022-08-08T21:58:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:02.000Z")
  },
  {
    "id": 361,
    "word": "usbequistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 362,
    "word": "vaticano",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 363,
    "word": "vietname",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 390,
    "word": "benim",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 394,
    "word": "bielorrússia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 397,
    "word": "bolívia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 398,
    "word": "brasil",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 399,
    "word": "brunei",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 403,
    "word": "burquina faso",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 404,
    "word": "cabo verde",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 405,
    "word": "camboja",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 407,
    "word": "camarões",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 1194,
    "word": "grim fandango",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 416,
    "word": "chipre",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 417,
    "word": "congo brazzaville",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 419,
    "word": "coreia do sul",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 439,
    "word": "espanha",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 443,
    "word": "finlândia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 455,
    "word": "guernsey",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 463,
    "word": "hong kong",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 470,
    "word": "ilhas caimão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 478,
    "word": "indian ocean",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 487,
    "word": "israel",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 490,
    "word": "jibuti",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 493,
    "word": "japão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 494,
    "word": "jordânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 495,
    "word": "kosovo",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 496,
    "word": "letónia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 1195,
    "word": "heavy rain",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1196,
    "word": "journey",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1198,
    "word": "half life",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1199,
    "word": "kingdom hearts",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1200,
    "word": "league of legends",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1201,
    "word": "mario kart",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1202,
    "word": "max payne",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1203,
    "word": "mass effect",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1204,
    "word": "metal gear solid",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1205,
    "word": "metroid",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1206,
    "word": "resident evil",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1207,
    "word": "portal",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1208,
    "word": "okami",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1209,
    "word": "pokemon",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1210,
    "word": "planescape",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1211,
    "word": "shadow of the colossus",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1212,
    "word": "skyrim",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1213,
    "word": "sid meiers civilization",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1214,
    "word": "silent hill",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1215,
    "word": "shenmue",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1217,
    "word": "star wars",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1218,
    "word": "street fighter",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1219,
    "word": "super smash bros",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1220,
    "word": "super metroid",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1221,
    "word": "super mario kart",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1223,
    "word": "red dead redemption",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1224,
    "word": "the last of us",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1225,
    "word": "the secret of monkey island",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1226,
    "word": "the elder scrolls",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1227,
    "word": "team fortress",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1228,
    "word": "the legend of zelda",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1229,
    "word": "the walking dead",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1230,
    "word": "system shock",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1231,
    "word": "tomb raider",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1232,
    "word": "starcraft",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1233,
    "word": "tetris",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1234,
    "word": "uncharted",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1236,
    "word": "vampire the masquerade bloodlines",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1237,
    "word": "warcraft",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1238,
    "word": "world of warcraft",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:53.000Z")
  },
  {
    "id": 1222,
    "word": "super mario",
    "hint": "vídeo game",
    "description": "Clássico!",
    "createdAt": new Date("2022-08-08T22:46:53.000Z"),
    "updatedAt": new Date("2022-08-20T23:25:32.000Z")
  },
  {
    "id": 208,
    "word": "boneco",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 209,
    "word": "boneca",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 210,
    "word": "feiticeira",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 211,
    "word": "bruxa",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 212,
    "word": "caçador",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 213,
    "word": "princesa",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 214,
    "word": "fada",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 215,
    "word": "príncipe",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:01.000Z")
  },
  {
    "id": 216,
    "word": "rainha",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 217,
    "word": "rei",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 218,
    "word": "lobo",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 219,
    "word": "porquinho",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 220,
    "word": "sorcerer",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 221,
    "word": "vampiro",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 224,
    "word": "sorcete",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 228,
    "word": "voz",
    "hint": "personagem dos contos de fadas",
    "description": null,
    "createdAt": new Date("2022-08-08T21:57:02.000Z"),
    "updatedAt": new Date("2022-08-08T21:57:02.000Z")
  },
  {
    "id": 932,
    "word": "costas",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 933,
    "word": "braço",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 934,
    "word": "testa",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 935,
    "word": "dente",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 433,
    "word": "egito",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 371,
    "word": "antártica",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 395,
    "word": "bósnia e herzegovina",
    "hint": "país",
    "description": "A Bósnia e Herzegovina é um país localizado na península balcânica, no sudeste da Europa. Sua área rural abriga aldeias medievais, rios e lagos, além dos acidentados Alpes Dináricos. A capital Sarajevo tem um centro histórico bem preservado, Baščaršija...",
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 364,
    "word": "venezuela",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 365,
    "word": "west bank",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 373,
    "word": "arábia saudita",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 380,
    "word": "arménia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 381,
    "word": "áustria",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 385,
    "word": "austrália",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 386,
    "word": "bangladeche",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 387,
    "word": "barém",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 388,
    "word": "belize",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 402,
    "word": "bulgária",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 408,
    "word": "catar",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 410,
    "word": "chade",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 411,
    "word": "clipperton island",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 415,
    "word": "comores",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 420,
    "word": "costa do marfim",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 422,
    "word": "coral sea islands",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 423,
    "word": "dhekelia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 426,
    "word": "cuba",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 427,
    "word": "dinamarca",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 428,
    "word": "croácia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 430,
    "word": "equador",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 431,
    "word": "emiratos árabes unidos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 434,
    "word": "eslováquia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 435,
    "word": "eslovénia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 436,
    "word": "estónia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 437,
    "word": "estados unidos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 445,
    "word": "frança",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 446,
    "word": "filipinas",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 447,
    "word": "geórgia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 453,
    "word": "gronelândia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 936,
    "word": "cabeça",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 937,
    "word": "dedo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 938,
    "word": "língua",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 939,
    "word": "nariz",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 940,
    "word": "pulso",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 941,
    "word": "olho",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 942,
    "word": "boca",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 943,
    "word": "mandíbula",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 944,
    "word": "orelha",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 945,
    "word": "bochecha",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 946,
    "word": "garganta",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 947,
    "word": "pescoço",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 948,
    "word": "face",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 949,
    "word": "ombros",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 950,
    "word": "queixo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 952,
    "word": "cotovelo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 954,
    "word": "pomo de adão",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 956,
    "word": "polegar",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 957,
    "word": "abdómen",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 959,
    "word": "coluna",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 960,
    "word": "costela",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 962,
    "word": "quadril",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 963,
    "word": "calcanhar",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 964,
    "word": "joelho",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 965,
    "word": "coxa",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 967,
    "word": "panturrilha",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 968,
    "word": "pé",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 970,
    "word": "tornozelo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:50.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:50.000Z")
  },
  {
    "id": 406,
    "word": "canadá",
    "hint": "país",
    "description": "O Canadá é um país norte-americano que se estende desde os EUA, no sul, até o Círculo Polar Ártico, no norte. Entre suas grandes cidades estão a gigantesca Toronto; Vancouver, centro cinematográfico da costa oeste; Montreal e Québec City, que falam...",
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 368,
    "word": "zâmbia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 369,
    "word": "zimbabué",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 370,
    "word": "anguila",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 372,
    "word": "antígua e barbuda",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 374,
    "word": "arctic ocean",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 375,
    "word": "angola",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 1075,
    "word": "a festa no céu",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 377,
    "word": "aruba",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 378,
    "word": "argélia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 382,
    "word": "azerbaijão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 383,
    "word": "atlantic ocean",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 1076,
    "word": "a galinha dos ovos de ouro",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 389,
    "word": "bélgica",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 392,
    "word": "barbados",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 393,
    "word": "birmânia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 396,
    "word": "botsuana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:05.000Z")
  },
  {
    "id": 400,
    "word": "burúndi",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 401,
    "word": "butão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 409,
    "word": "cazaquistão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 412,
    "word": "chile",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 413,
    "word": "china",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 421,
    "word": "coreia do norte",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 424,
    "word": "costa rica",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 425,
    "word": "curacao",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:06.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:06.000Z")
  },
  {
    "id": 429,
    "word": "domínica",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 432,
    "word": "eritreia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 438,
    "word": "etiópia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 440,
    "word": "faroé",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 441,
    "word": "gabão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 442,
    "word": "fiji",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 456,
    "word": "grécia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 458,
    "word": "guiana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 459,
    "word": "guiné bissau",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 462,
    "word": "honduras",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 465,
    "word": "ilha do natal",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 469,
    "word": "ilha norfolk",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 481,
    "word": "índia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 482,
    "word": "indonésia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 483,
    "word": "iraque",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 488,
    "word": "islândia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 489,
    "word": "jamaica",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 492,
    "word": "jersey",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 497,
    "word": "lesoto",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 498,
    "word": "kuwait",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 499,
    "word": "laos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 500,
    "word": "líbano",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 501,
    "word": "libéria",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 502,
    "word": "líbia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 503,
    "word": "listenstaine",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 384,
    "word": "bahamas",
    "hint": "país",
    "description": "país da América Central",
    "createdAt": new Date("2022-08-08T21:58:05.000Z"),
    "updatedAt": new Date("2022-08-13T03:42:42.000Z")
  },
  {
    "id": 1077,
    "word": "a galinha ruiva",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1078,
    "word": "a lebre e a tartaruga",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1079,
    "word": "a lebre e o cágado",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1080,
    "word": "a menina do leite",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1081,
    "word": "a menina e o vampiro",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1082,
    "word": "a patinha esmeralda",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1083,
    "word": "a pequena vendedora de fósforos",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1084,
    "word": "a pequena sereia",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1085,
    "word": "a raposa e as uvas",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1086,
    "word": "a velha e suas criadas",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1087,
    "word": "ali babá e os quarenta ladrões",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1088,
    "word": "as fadas",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1089,
    "word": "branca de neve",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1090,
    "word": "cachinhos dourados e os três ursos",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1091,
    "word": "chapeuzinho vermelho",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1092,
    "word": "cinderela",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1093,
    "word": "2001-02-01 3:0:0",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1094,
    "word": "guerra de travesseiros",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1095,
    "word": "joão e maria",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1096,
    "word": "o asno e o cavalo",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1097,
    "word": "no circo",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1098,
    "word": "o cão e a carne",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1099,
    "word": "o corvo e a raposa",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1100,
    "word": "o príncipe sapo",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1101,
    "word": "o leão e o ratinho",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1102,
    "word": "o patinho feio",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1103,
    "word": "o soldadinho de chumbo",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1104,
    "word": "o vento e o sol",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1105,
    "word": "o gato de botas",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1106,
    "word": "rapunzel",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1107,
    "word": "os sacis",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1108,
    "word": "um visitante diferente",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1109,
    "word": "pinóquio",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1110,
    "word": "os três porquinhos",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 1112,
    "word": "zinho, o detetive",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:22.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:22.000Z")
  },
  {
    "id": 486,
    "word": "itália",
    "hint": "país",
    "description": "A Itália, país europeu com uma longa costa mediterrânea, deixou uma marca poderosa na culinária e na cultura ocidentais. A capital, Roma, é sede do Vaticano e abriga obras de arte monumentais e ruínas antigas. Outra cidade importante é Florença, com...",
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 576,
    "word": "bola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 575,
    "word": "boia",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 578,
    "word": "botão",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 580,
    "word": "brinco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 581,
    "word": "bumerangue",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 464,
    "word": "guiné",
    "hint": "país",
    "description": "A Guiné, oficialmente República da Guiné é um país da África Ocidental limitado a norte pela Guiné-Bissau e pelo Senegal, a norte e leste pelo Mali, a leste pela Costa do Marfim, a sul pela Libéria e pela Serra Leoa e a oeste pelo oceano Atlântico.",
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 354,
    "word": "turquia",
    "hint": "país",
    "description": "0",
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 334,
    "word": "sri lanca",
    "hint": "país",
    "description": "O Sri Lanka (anteriormente conhecido como Ceilão) é um país insular ao sul da Índia, situado no Oceano Índico. As paisagens diversificadas incluem desde floresta tropical e planícies áridas até planaltos e praias. A nação é famosa pelas antigas ruínas...",
    "createdAt": new Date("2022-08-08T21:58:03.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:03.000Z")
  },
  {
    "id": 444,
    "word": "gâmbia",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 448,
    "word": "gana",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 451,
    "word": "gibraltar",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 452,
    "word": "granada",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:07.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:07.000Z")
  },
  {
    "id": 454,
    "word": "guame",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 258,
    "word": "malávi",
    "hint": "país",
    "description": "Malawi, um país sem saída para o mar situado no sudeste da África, é definido pela topografia de regiões montanhosas dividida pelo Vale do Rift e pelo enorme lago Malawi. A extremidade sul do lago faz parte do Parque Nacional do Lago Malawi, que abriga...",
    "createdAt": new Date("2022-08-08T21:58:01.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:01.000Z")
  },
  {
    "id": 252,
    "word": "andorra",
    "hint": "país",
    "description": "Andorra é um pequeno principado independente situado entre a França e a Espanha nas montanhas dos Pireneus. O país é conhecido por suas estações de esqui e pelo status de paraíso fiscal que incentiva compras isentas de impostos. A capital Andorra la...",
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 350,
    "word": "tonga",
    "hint": "país",
    "description": "Tonga é um reino polinésio com mais de 170 ilhas do Pacífico Sul, muitas desabitadas e a maioria repleta de praias de areia branca e recifes de corais e coberta por floresta tropical. A principal ilha, Tongatapu, é protegida por lagoas e penhascos de...",
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 249,
    "word": "luxemburgo",
    "hint": "país",
    "description": "Luxemburgo é um pequeno país europeu, rodeado por Bélgica, França e Alemanha. Trata-se de uma nação predominantemente rural, com a densa floresta de Ardenas e parques naturais ao norte, desfiladeiros rochosos da região de Mullerthal ao leste e o vale...",
    "createdAt": new Date("2022-08-08T21:58:00.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:00.000Z")
  },
  {
    "id": 360,
    "word": "vanuatu",
    "hint": "país",
    "description": "Vanuatu é um país no sul do Oceano Pacífico formado por cerca de 80 ilhas que se estendem por 1.300 quilômetros. As ilhas oferecem mergulho em recifes de corais, cavernas subaquáticas e naufrágios como o SS President Coolidge, um navio de transporte...",
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 341,
    "word": "tailândia",
    "hint": "país",
    "description": "A Tailândia é um país do Sudeste Asiático conhecido pelas praias tropicais, pelos palácios reais suntuosos, pelas ruínas antigas e pelos templos ornamentados com figuras de Buda. Bangcoc, a capital, tem uma paisagem urbana ultramoderna que contrasta...",
    "createdAt": new Date("2022-08-08T21:58:04.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:04.000Z")
  },
  {
    "id": 457,
    "word": "guatemala",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 460,
    "word": "guiné equatorial",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 461,
    "word": "haiti",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 467,
    "word": "iémen",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 468,
    "word": "hungria",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 475,
    "word": "ilhas salomão",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 477,
    "word": "ilhas turcas e caicos",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 480,
    "word": "ilhas virgens britânicas",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:08.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:08.000Z")
  },
  {
    "id": 484,
    "word": "irlanda",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 504,
    "word": "basquete",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:25.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:25.000Z")
  },
  {
    "id": 505,
    "word": "blackjack",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:25.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:25.000Z")
  },
  {
    "id": 506,
    "word": "amarelinha",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:25.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:25.000Z")
  },
  {
    "id": 507,
    "word": "cabra cega",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:25.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:25.000Z")
  },
  {
    "id": 508,
    "word": "buraco",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:25.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:25.000Z")
  },
  {
    "id": 509,
    "word": "forca",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 510,
    "word": "ludo",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 511,
    "word": "esconde esconde",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 512,
    "word": "dama",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 513,
    "word": "futebol",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 514,
    "word": "mãe da rua",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 515,
    "word": "vôlei",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 516,
    "word": "resta um",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 517,
    "word": "truco",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 518,
    "word": "xadrez",
    "hint": "jogo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:05:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:05:26.000Z")
  },
  {
    "id": 519,
    "word": "caminhonete",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 520,
    "word": "caminhão",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 521,
    "word": "bicicleta",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 522,
    "word": "carreta",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 523,
    "word": "carro",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 524,
    "word": "barco",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 525,
    "word": "moto",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 526,
    "word": "avião",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 527,
    "word": "helicóptero",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 528,
    "word": "trator",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 529,
    "word": "ônibus",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 530,
    "word": "trem",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 531,
    "word": "van",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 532,
    "word": "skate",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:08.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:08.000Z")
  },
  {
    "id": 533,
    "word": "abajur",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:29.000Z")
  },
  {
    "id": 535,
    "word": "abre latas",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:29.000Z")
  },
  {
    "id": 536,
    "word": "óculos",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:29.000Z")
  },
  {
    "id": 537,
    "word": "estojo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:29.000Z")
  },
  {
    "id": 538,
    "word": "faca",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:29.000Z")
  },
  {
    "id": 539,
    "word": "chocalho",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:30.000Z")
  },
  {
    "id": 540,
    "word": "tesoura",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:30.000Z")
  },
  {
    "id": 541,
    "word": "xícara",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:30.000Z")
  },
  {
    "id": 542,
    "word": "mamadeira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:30.000Z")
  },
  {
    "id": 543,
    "word": "caneta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:06:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:06:30.000Z")
  },
  {
    "id": 545,
    "word": "alfinete",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:26.000Z")
  },
  {
    "id": 555,
    "word": "aquecedor",
    "hint": "eletrodoméstico",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 547,
    "word": "algema",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:26.000Z")
  },
  {
    "id": 549,
    "word": "alicate",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:26.000Z")
  },
  {
    "id": 550,
    "word": "almofada",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:26.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:26.000Z")
  },
  {
    "id": 551,
    "word": "apagador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 552,
    "word": "anzol",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 553,
    "word": "apito",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 554,
    "word": "anel",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 556,
    "word": "aro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 557,
    "word": "azulejo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 558,
    "word": "âncora",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 559,
    "word": "antena",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 560,
    "word": "arco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 561,
    "word": "banco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 562,
    "word": "balança",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 563,
    "word": "apontador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 564,
    "word": "bacia",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 565,
    "word": "aspirador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 566,
    "word": "berço",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 567,
    "word": "bidê",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 569,
    "word": "bengala",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 570,
    "word": "bigorna",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 485,
    "word": "irã",
    "hint": "país",
    "description": null,
    "createdAt": new Date("2022-08-08T21:58:09.000Z"),
    "updatedAt": new Date("2022-08-08T21:58:09.000Z")
  },
  {
    "id": 572,
    "word": "binóculo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 573,
    "word": "biruta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 574,
    "word": "bisturi",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:27.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:27.000Z")
  },
  {
    "id": 582,
    "word": "bule",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 583,
    "word": "cabide",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 584,
    "word": "cadeado",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 585,
    "word": "cadeira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 586,
    "word": "caderno",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 587,
    "word": "cálice",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 588,
    "word": "cajado",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 591,
    "word": "capa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 592,
    "word": "capacete",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 593,
    "word": "cata",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 594,
    "word": "castiçal",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 596,
    "word": "celular",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 597,
    "word": "chicote",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 599,
    "word": "clipe",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 600,
    "word": "chupeta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 601,
    "word": "colchão",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 602,
    "word": "colher",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 603,
    "word": "copo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 604,
    "word": "dardo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 605,
    "word": "dado",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 606,
    "word": "dedal",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 607,
    "word": "dentadura",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 608,
    "word": "desentupidor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 609,
    "word": "desfibrilador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 610,
    "word": "desodorante",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 611,
    "word": "despertador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 612,
    "word": "detergente",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 534,
    "word": "cama",
    "hint": "móvel",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:06:29.000Z"),
    "updatedAt": new Date("2022-08-13T03:45:59.000Z")
  },
  {
    "id": 614,
    "word": "diamante",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 616,
    "word": "diário",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 617,
    "word": "dicionário",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:28.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:28.000Z")
  },
  {
    "id": 619,
    "word": "disco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 620,
    "word": "disquete",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 621,
    "word": "divã",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 622,
    "word": "dominó",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 623,
    "word": "dvd",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 624,
    "word": "edredom",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 625,
    "word": "elástico",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 638,
    "word": "espremedor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 640,
    "word": "esteira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 641,
    "word": "estetoscópio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 643,
    "word": "extintor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 645,
    "word": "fax",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 646,
    "word": "fichário",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 647,
    "word": "ferradura",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 648,
    "word": "filmadora",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 649,
    "word": "filtro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 650,
    "word": "fio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 651,
    "word": "fita",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 658,
    "word": "folha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 659,
    "word": "frasco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 660,
    "word": "frigideira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 662,
    "word": "fruteira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 663,
    "word": "funil",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 666,
    "word": "gaiola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 667,
    "word": "gargantilha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 668,
    "word": "garfo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 669,
    "word": "garrafa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 670,
    "word": "gaveta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 671,
    "word": "gorro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 673,
    "word": "gramofone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 674,
    "word": "grampeador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 675,
    "word": "grampo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 691,
    "word": "aquário",
    "hint": "objeto",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-09-06T13:54:36.000Z")
  },
  {
    "id": 677,
    "word": "grelha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 678,
    "word": "grinalda",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 679,
    "word": "gravata",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 680,
    "word": "guarda-chuva",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 681,
    "word": "guarda-sol",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 683,
    "word": "guitarra",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 684,
    "word": "haltere",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 687,
    "word": "hélice",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 774,
    "word": "navio",
    "hint": "veículo",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-18T03:28:26.000Z")
  },
  {
    "id": 690,
    "word": "hidrante",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 692,
    "word": "hidroavião",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 693,
    "word": "hidrômetro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 695,
    "word": "higrômetro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 696,
    "word": "holofote",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 699,
    "word": "impressora",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 700,
    "word": "inalador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 701,
    "word": "ingresso",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 707,
    "word": "ioiô",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 708,
    "word": "isqueiro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 713,
    "word": "jaqueta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 715,
    "word": "jarra",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 716,
    "word": "jarro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 718,
    "word": "jaula",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 739,
    "word": "lente",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 740,
    "word": "lençol",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 741,
    "word": "leque",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 743,
    "word": "lixa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 755,
    "word": "manequim",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 756,
    "word": "mala",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 757,
    "word": "manivela",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 758,
    "word": "marreta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 759,
    "word": "martelo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 764,
    "word": "medalha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 765,
    "word": "mola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 775,
    "word": "novelo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 776,
    "word": "notebook",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 784,
    "word": "ouro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 785,
    "word": "ombreira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 786,
    "word": "ovo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 789,
    "word": "pá",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 795,
    "word": "piano",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 802,
    "word": "pistola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 803,
    "word": "placa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 804,
    "word": "pote",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 805,
    "word": "prancha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 806,
    "word": "prateleira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 807,
    "word": "prato",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 849,
    "word": "serrote",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 850,
    "word": "sino",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 851,
    "word": "serpentina",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 858,
    "word": "tábua",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 862,
    "word": "tampa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 863,
    "word": "teclado",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 770,
    "word": "nave",
    "hint": "objeto",
    "description": "Objeto voador não identificado (OVNI)",
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-18T03:25:59.000Z")
  },
  {
    "id": 742,
    "word": "liquidificador",
    "hint": "eletrodoméstico",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 694,
    "word": "iate",
    "hint": "veículo",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-09-03T17:43:39.000Z")
  },
  {
    "id": 717,
    "word": "jato",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 661,
    "word": "freezer",
    "hint": "eletrodoméstico",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:30.000Z")
  },
  {
    "id": 709,
    "word": "jaleco",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 626,
    "word": "escorredor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 627,
    "word": "envelope",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 628,
    "word": "enxada",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 629,
    "word": "escada",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 630,
    "word": "escova",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 631,
    "word": "escudo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 632,
    "word": "esponja",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 634,
    "word": "espanador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 635,
    "word": "espada",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 636,
    "word": "espelho",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 637,
    "word": "esquadro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 654,
    "word": "flecha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:29.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:29.000Z")
  },
  {
    "id": 704,
    "word": "interruptor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 705,
    "word": "interfone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 706,
    "word": "isca",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 710,
    "word": "isopor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 711,
    "word": "janela",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 719,
    "word": "joelheira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 721,
    "word": "joia",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 723,
    "word": "jornal",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 724,
    "word": "karaokê",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 725,
    "word": "kart",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 726,
    "word": "kit",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 729,
    "word": "lança",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 730,
    "word": "lâmpada",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 731,
    "word": "lâmina",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 732,
    "word": "lancheira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 733,
    "word": "lanterna",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 734,
    "word": "lantejoula",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 735,
    "word": "lápis",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 736,
    "word": "lapiseira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 738,
    "word": "lenço",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 744,
    "word": "livro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 745,
    "word": "lustre",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 746,
    "word": "luneta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 747,
    "word": "luminária",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 816,
    "word": "quimono",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 749,
    "word": "maçaneta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 750,
    "word": "maçarico",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 751,
    "word": "machado",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 727,
    "word": "ketchup",
    "hint": "alimento",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 753,
    "word": "maiô",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 754,
    "word": "mangueira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 760,
    "word": "máquina",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 761,
    "word": "máscara",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:32.000Z")
  },
  {
    "id": 712,
    "word": "jangada",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:31.000Z")
  },
  {
    "id": 763,
    "word": "megafone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 766,
    "word": "microfone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 767,
    "word": "microscópio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 768,
    "word": "nadadeira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 769,
    "word": "narguilé",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 771,
    "word": "mochila",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 772,
    "word": "navalha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 809,
    "word": "quadriciclo",
    "hint": "veículo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 781,
    "word": "odre",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 782,
    "word": "orelhão",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:33.000Z")
  },
  {
    "id": 790,
    "word": "pandeiro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 791,
    "word": "paliteiro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 792,
    "word": "panela",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 793,
    "word": "pano",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 794,
    "word": "paraquedas",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 796,
    "word": "parafuso",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 797,
    "word": "papel",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 798,
    "word": "picareta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 799,
    "word": "pinça",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 800,
    "word": "pincel",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 801,
    "word": "pingente",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 808,
    "word": "pulseira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 810,
    "word": "quadro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 811,
    "word": "quadro negro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 813,
    "word": "quebra-nozes",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:34.000Z")
  },
  {
    "id": 815,
    "word": "quepe",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 817,
    "word": "rádio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 818,
    "word": "ralo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 819,
    "word": "ralador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 820,
    "word": "raquete",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 821,
    "word": "reco-reco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 822,
    "word": "ratoeira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 823,
    "word": "régua",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 824,
    "word": "rede",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 825,
    "word": "relógio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 826,
    "word": "remo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 827,
    "word": "retrovisor",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 828,
    "word": "revista",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 829,
    "word": "revólver",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 830,
    "word": "roda",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 832,
    "word": "rodo",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 834,
    "word": "roleta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 835,
    "word": "rolha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 837,
    "word": "sabonete",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 838,
    "word": "sacola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 839,
    "word": "saca-rolhas",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 841,
    "word": "saleiro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 842,
    "word": "sanfona",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 844,
    "word": "saxofone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 845,
    "word": "scanner",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 846,
    "word": "secador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 847,
    "word": "seringa",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:35.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:35.000Z")
  },
  {
    "id": 860,
    "word": "tamanco",
    "hint": "vestuário",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 855,
    "word": "sombrinha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 856,
    "word": "spray",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 857,
    "word": "taça",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 859,
    "word": "tabuleiro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 872,
    "word": "trampolim",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 883,
    "word": "urso de pelúcia",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 891,
    "word": "vaso",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 892,
    "word": "varal",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 854,
    "word": "sofá",
    "hint": "móvel",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 894,
    "word": "velocímetro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 914,
    "word": "xarope",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 878,
    "word": "ultraleve",
    "hint": "veículo",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-29T00:46:58.000Z")
  },
  {
    "id": 864,
    "word": "telefone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 865,
    "word": "telescópio",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 866,
    "word": "televisão",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 869,
    "word": "touca",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 873,
    "word": "termômetro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 874,
    "word": "tigela",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 875,
    "word": "umbral",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 876,
    "word": "troféu",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 879,
    "word": "umidificador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 882,
    "word": "válvula",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 887,
    "word": "vara",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 890,
    "word": "vareta",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 895,
    "word": "ventilador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 907,
    "word": "walkman",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 877,
    "word": "ukulele",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 881,
    "word": "uniforme",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:36.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:36.000Z")
  },
  {
    "id": 888,
    "word": "vaporizador",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 889,
    "word": "varinha",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 896,
    "word": "vidro",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 897,
    "word": "vela",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 926,
    "word": "torax",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:48.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:48.000Z")
  },
  {
    "id": 899,
    "word": "violão",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 900,
    "word": "viseira",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 904,
    "word": "vitrola",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 905,
    "word": "volante",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 906,
    "word": "webcam",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 909,
    "word": "walkie-talkie",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 910,
    "word": "wafer",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:37.000Z")
  },
  {
    "id": 911,
    "word": "xale",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 912,
    "word": "xilofone",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 915,
    "word": "xequerê",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 927,
    "word": "cabelo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:48.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:48.000Z")
  },
  {
    "id": 923,
    "word": "zarabatana",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 924,
    "word": "zinco",
    "hint": "objeto",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:38.000Z")
  },
  {
    "id": 928,
    "word": "barriga",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:48.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:48.000Z")
  },
  {
    "id": 929,
    "word": "perna",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 930,
    "word": "mão",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 931,
    "word": "umbigo",
    "hint": "parte do corpo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:41:49.000Z"),
    "updatedAt": new Date("2022-08-08T22:41:49.000Z")
  },
  {
    "id": 971,
    "word": "bonnie e clyde uma rajada de balas",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:30.000Z")
  },
  {
    "id": 972,
    "word": "a bela e a fera",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:30.000Z")
  },
  {
    "id": 973,
    "word": "amnésia",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:30.000Z")
  },
  {
    "id": 974,
    "word": "a origem",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:30.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:30.000Z")
  },
  {
    "id": 975,
    "word": "cães de aluguel",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 976,
    "word": "duro de matar",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 977,
    "word": "doutor jivago",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 978,
    "word": "contatos imediatos de terceiro grau",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 979,
    "word": "o franco atirador",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 980,
    "word": "apertem os cintos o piloto sumiu",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 981,
    "word": "coração valente",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 982,
    "word": "o labirinto do fauno",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 983,
    "word": "rocky um lutador",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 984,
    "word": "os sete samurais",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 985,
    "word": "up altas aventuras",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 986,
    "word": "senhor dos anéis",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 987,
    "word": "quem quer ser um milionário",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 988,
    "word": "12 homens e uma sentença",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 989,
    "word": "seven os sete crimes capitais",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 990,
    "word": "wall - e",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 991,
    "word": "sindicato de ladrões",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 992,
    "word": "amadeus",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 993,
    "word": "os caça - fantasmas",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 994,
    "word": "quase famosos",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 995,
    "word": "banzé no oeste",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 996,
    "word": "o jovem frankenstein",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 997,
    "word": "a ponte do rio kwai",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 998,
    "word": "senhor dos anéis: a sociedade do anel",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:31.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:31.000Z")
  },
  {
    "id": 999,
    "word": "gladiador",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1000,
    "word": "um corpo que cai",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1001,
    "word": "todos os homens do presidente",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1002,
    "word": "o segredo de brokeback mountain",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1003,
    "word": "monty python em busca do cálice sagrado",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1004,
    "word": "avatar",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1005,
    "word": "o rei leão",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1006,
    "word": "touro indomável",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 917,
    "word": "iene",
    "hint": "objeto",
    "description": "Moeda do Japão",
    "createdAt": new Date("2022-08-08T22:41:38.000Z"),
    "updatedAt": new Date("2022-08-20T23:24:40.000Z")
  },
  {
    "id": 1007,
    "word": "mary poppins",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1015,
    "word": "batman: o cavaleiro das trevas",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1008,
    "word": "feitiço do tempo",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1012,
    "word": "thelma & louise",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1013,
    "word": "gênio indomável",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1022,
    "word": "quanto mais quente melhor",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1026,
    "word": "o resgate do soldado ryan",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1029,
    "word": "matrix",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1030,
    "word": "toy story",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1031,
    "word": "o iluminado",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1034,
    "word": "dr.fantástico",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1038,
    "word": "um estranho no ninho",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1040,
    "word": "blade runner, o caçador de andróides",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1044,
    "word": "cantando na chuva",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1052,
    "word": "noivo neurótico, noiva nervosa",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1056,
    "word": "…e o vento levou",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1065,
    "word": "star wars: uma nova esperança",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1066,
    "word": "o poderoso chefão: parte ii",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1067,
    "word": "casablanca",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1009,
    "word": "intriga internacional",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1010,
    "word": "amor, sublime amor",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1011,
    "word": "o fabuloso destino de amélie poulain",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1014,
    "word": "brilho eterno de uma mente sem lembranças",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1018,
    "word": "crepúsculo dos deuses",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1019,
    "word": "o grande lebowski",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1053,
    "word": "apocalypse now",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1054,
    "word": "o silêncio dos inocentes",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1055,
    "word": "o sol é para todos",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1058,
    "word": "indiana jones e os caçadores da arca perdida",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1062,
    "word": "de volta para o futuro",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1063,
    "word": "pulp fiction - tempo de violência",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1016,
    "word": "taxi driver - motorista de táxi",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1017,
    "word": "butch cassidy",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1020,
    "word": "janela indiscreta",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1021,
    "word": "jurassic park: o parque dos dinossauros",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1023,
    "word": "a malvada",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1024,
    "word": "os suspeitos",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:32.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:32.000Z")
  },
  {
    "id": 1025,
    "word": "alien, o oitavo passageiro",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1027,
    "word": "titanic",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1028,
    "word": "psicose",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1032,
    "word": "curtindo a vida adoidado",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1033,
    "word": "clube da luta",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1035,
    "word": "laranja mecânica",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1036,
    "word": "harry e sally - feitos um para o outro",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1037,
    "word": "fargo",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1039,
    "word": "star wars: o império contra - ataca",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1041,
    "word": "a princesa prometida",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1042,
    "word": "beleza americana",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1043,
    "word": "lawrence da arábia",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1045,
    "word": "tubarão",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1046,
    "word": "a noviça rebelde",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1047,
    "word": "a primeira noite de um homem",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1048,
    "word": "clube dos cinco",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1049,
    "word": "os bons companheiros",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1050,
    "word": "a felicidade não se compra",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1051,
    "word": "chinatown",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:33.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:33.000Z")
  },
  {
    "id": 1057,
    "word": "forrest gump: o contador de histórias",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1059,
    "word": "a lista de schindler",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1060,
    "word": "2001: uma odisséia no espaço",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1071,
    "word": "a batalha na neve",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1064,
    "word": "cidadão kane",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1068,
    "word": "um sonho de liberdade",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1069,
    "word": "o mágico de oz",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1070,
    "word": "o poderoso chefão",
    "hint": "filme",
    "description": null,
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-08T22:43:34.000Z")
  },
  {
    "id": 1072,
    "word": "a bela adormecida",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1113,
    "word": "chiquinha",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1114,
    "word": "boomberman",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1115,
    "word": "aladdin",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1116,
    "word": "quico",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1117,
    "word": "moana",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1118,
    "word": "chaves",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1119,
    "word": "pacman",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1120,
    "word": "jasmine",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1121,
    "word": "crash bandicoot",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1122,
    "word": "tails",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1123,
    "word": "nemo",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1074,
    "word": "a cigarra e a formiga",
    "hint": "conto infantil",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:21.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:21.000Z")
  },
  {
    "id": 1125,
    "word": "knuckles",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1126,
    "word": "sonic the hedgehog",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1127,
    "word": "ralph",
    "hint": "personagem",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:37.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:37.000Z")
  },
  {
    "id": 1128,
    "word": "jovens titãs",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1129,
    "word": "alice no país das maravilhas",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1130,
    "word": "monstros sa",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1131,
    "word": "branca de neve e os sete anões",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1132,
    "word": "frozen uma aventura congelante",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1133,
    "word": "a viagem de chihiro",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1134,
    "word": "meu amigo totoro",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1135,
    "word": "divertida mente",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1136,
    "word": "samurai jack",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1061,
    "word": "e.t., o extraterrestre",
    "hint": "filme",
    "description": "E.T., minha casa, telefone...",
    "createdAt": new Date("2022-08-08T22:43:34.000Z"),
    "updatedAt": new Date("2022-08-27T16:54:08.000Z")
  },
  {
    "id": 1138,
    "word": "liga da justiça",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1140,
    "word": "sonic saturday",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1141,
    "word": "procurando nemo",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:51.000Z")
  },
  {
    "id": 1143,
    "word": "super shock",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1146,
    "word": "wall e",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1153,
    "word": "facebook messenger",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:11.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:11.000Z")
  },
  {
    "id": 1154,
    "word": "uc browser",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1157,
    "word": "netflix",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1158,
    "word": "whatsapp",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1159,
    "word": "twitter",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1160,
    "word": "pandora music",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1164,
    "word": "tiktok",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1165,
    "word": "tinder",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1166,
    "word": "kwai",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1144,
    "word": "spider man",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1145,
    "word": "projeto zeta",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1148,
    "word": "yu yu hakusho",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1149,
    "word": "túmulo dos vagalumes",
    "hint": "animação",
    "description": null,
    "createdAt": new Date("2022-08-08T22:45:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:45:52.000Z")
  },
  {
    "id": 1150,
    "word": "skype",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:11.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:11.000Z")
  },
  {
    "id": 1151,
    "word": "facebook",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:11.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:11.000Z")
  },
  {
    "id": 1152,
    "word": "instagram",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:11.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:11.000Z")
  },
  {
    "id": 1156,
    "word": "youtube",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1155,
    "word": "snapchat",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1161,
    "word": "iqiyi",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1162,
    "word": "tencent video",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1163,
    "word": "line",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1167,
    "word": "hbo now",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 1168,
    "word": "spotify",
    "hint": "aplicativo",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:12.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:12.000Z")
  },
  {
    "id": 812,
    "word": "quebra-cabeça",
    "hint": "jogo",
    "description": "0",
    "createdAt": new Date("2022-08-08T22:41:34.000Z"),
    "updatedAt": new Date("2022-08-23T01:02:11.000Z")
  },
  {
    "id": 1197,
    "word": "homeworld",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1170,
    "word": "call of duty",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1171,
    "word": "age of empires",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 5,
    "word": "ana julia",
    "hint": "nome",
    "description": "0",
    "createdAt": new Date("2022-07-31T22:17:56.000Z"),
    "updatedAt": new Date("2022-08-09T15:27:02.000Z")
  },
  {
    "id": 546,
    "word": "agulha",
    "hint": "objeto",
    "description": "objeto pontiagudo que serve para costurar",
    "createdAt": new Date("2022-08-08T22:41:26.000Z"),
    "updatedAt": new Date("2022-08-13T03:44:08.000Z")
  },
  {
    "id": 898,
    "word": "vídeo cassete",
    "hint": "objeto",
    "description": "Aparelho antigo que servia para ler e gravar fitas de vídeo",
    "createdAt": new Date("2022-08-08T22:41:37.000Z"),
    "updatedAt": new Date("2022-08-13T03:48:29.000Z")
  },
  {
    "id": 151,
    "word": "rabanete",
    "hint": "alimento",
    "description": "Legume rosa, muito gostoso na salada!",
    "createdAt": new Date("2022-07-31T22:22:17.000Z"),
    "updatedAt": new Date("2022-08-21T20:57:10.000Z")
  },
  {
    "id": 1239,
    "word": "mettalica",
    "hint": "banda",
    "description": null,
    "createdAt": new Date("2022-09-03T00:00:10.000Z"),
    "updatedAt": new Date("2022-09-03T00:00:10.000Z")
  },
  {
    "id": 1172,
    "word": "baldurs gate",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1173,
    "word": "batman",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1174,
    "word": "assassins creed",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1175,
    "word": "chrono trigger",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1176,
    "word": "bioshock",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1178,
    "word": "call of juarez",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:51.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:51.000Z")
  },
  {
    "id": 1179,
    "word": "counter strike",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1180,
    "word": "dead space",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1181,
    "word": "dark souls",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1182,
    "word": "championship manager",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1183,
    "word": "dragon age",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1184,
    "word": "diablo",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1185,
    "word": "deus ex",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1186,
    "word": "doom",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1187,
    "word": "duke nukem",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1188,
    "word": "elite",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 1189,
    "word": "final fantasy",
    "hint": "vídeo game",
    "description": null,
    "createdAt": new Date("2022-08-08T22:46:52.000Z"),
    "updatedAt": new Date("2022-08-08T22:46:52.000Z")
  },
  {
    "id": 69,
    "word": "hipopótamo",
    "hint": "animal",
    "description": null,
    "createdAt": new Date("2022-07-31T22:19:10.000Z"),
    "updatedAt": new Date("2022-07-31T22:19:10.000Z")
  }
]);

export default words();
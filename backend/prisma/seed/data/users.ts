export type User = {
  id: number;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const users = (): Array<User> => ([
  {
    "id": 1,
    "name": "renatobmpsilva",
    "password": "$2b$10$XiD0pXQYVDv.0cFIdLHFjOLhwFcy.DNWIp4797qu.KNPYcaNsjNAm",
    "createdAt": new Date("2022-07-31T21:09:28.000Z"),
    "updatedAt": new Date("2022-07-31T21:09:28.000Z")
  },
  {
    "id": 4,
    "name": "123",
    "password": "$2b$10$SaltUDmfMYxwgIbPaKaGQe7lUOH0A8Py8piMfknOiTIu5MFGnoc3q",
    "createdAt": new Date("2022-08-07T20:52:09.000Z"),
    "updatedAt": new Date("2022-08-07T20:52:09.000Z")
  },
  {
    "id": 5,
    "name": "Danila1",
    "password": "$2b$10$q5izVSRsaRaf71LNjzB92O.i7JNSXYFHwcWA9kiXXm9WywsCFzRiK",
    "createdAt": new Date("2022-08-08T15:15:38.000Z"),
    "updatedAt": new Date("2022-08-08T15:15:38.000Z")
  },
  {
    "id": 7,
    "name": "renato",
    "password": "$2b$10$wk64OP7QUuSCSdMDhi1TvO0ScA0tDniY3uW7pIojgWXrDFPoEOekC",
    "createdAt": new Date("2022-08-12T16:22:53.000Z"),
    "updatedAt": new Date("2022-08-12T16:22:53.000Z")
  },
  {
    "id": 8,
    "name": "Fernanda",
    "password": "$2b$10$CD8Xrxybwqvfy08QtiwgCeAv8B98LenuaZ2Tm9/3O783HL.eN/y5i",
    "createdAt": new Date("2022-08-21T23:18:29.000Z"),
    "updatedAt": new Date("2022-08-21T23:18:29.000Z")
  },
  {
    "id": 9,
    "name": "renatobmps",
    "password": "$2b$10$ougMk8tF26XzINa9PJtSiedynobMaQ/QcVKW/S0mEMRwlY3suSCYm",
    "createdAt": new Date("2022-08-24T19:49:40.000Z"),
    "updatedAt": new Date("2022-08-24T19:49:40.000Z")
  },
  {
    "id": 10,
    "name": "Sah ",
    "password": "$2b$10$dKfQBy2F4Cl5LGq9Buz9re9tPPsweSwmgTBRsbN4fXdMoJAs3yEMO",
    "createdAt": new Date("2022-08-25T15:35:35.000Z"),
    "updatedAt": new Date("2022-08-25T15:35:35.000Z")
  },
  {
    "id": 27,
    "name": "Gabriel Grandão",
    "password": "$2b$10$WRwgXooXRkONyoftylyW4uCdkaWcpAc3uex0kKxLE5f3R0hnGL.fO",
    "createdAt": new Date("2022-09-14T19:06:43.000Z"),
    "updatedAt": new Date("2022-09-14T19:06:43.000Z")
  },
  {
    "id": 16,
    "name": "Família ",
    "password": "$2b$10$7aUT/V/GpZi.wqgYWDw5LOmiyLz.iywkccxZAZ2oJf67mzFC08G.a",
    "createdAt": new Date("2022-09-03T19:47:34.000Z"),
    "updatedAt": new Date("2022-09-03T19:47:34.000Z")
  },
  {
    "id": 18,
    "name": "Gustavo",
    "password": "$2b$10$9K8uiIP3l9cHLRN.4MuQtu7oHdAODP1uVDM6qNpBw7qo6ZsuTNr3y",
    "createdAt": new Date("2022-09-11T19:09:30.000Z"),
    "updatedAt": new Date("2022-09-11T19:09:30.000Z")
  },
  {
    "id": 19,
    "name": "Danilo",
    "password": "$2b$10$nsa7U2v2eReaxaPiQprh..KHHYxcGadIY06hE5w4oTd.L4duFCAF2",
    "createdAt": new Date("2022-09-11T20:07:12.000Z"),
    "updatedAt": new Date("2022-09-11T20:07:12.000Z")
  },
  {
    "id": 20,
    "name": "Walki",
    "password": "$2b$10$PqHGQgkp3.qNT56ssorpzeuKdy196Kti4PZH9iIzMd9sBF2./1ese",
    "createdAt": new Date("2022-09-11T20:11:20.000Z"),
    "updatedAt": new Date("2022-09-11T20:11:20.000Z")
  },
  {
    "id": 23,
    "name": "Aribe013",
    "password": "$2b$10$iUtxyfmd0VIPG1WPTPtCg.2oI/ENemoqYGoCCvLeYgpaIKHBo3RBW",
    "createdAt": new Date("2022-09-11T23:08:34.000Z"),
    "updatedAt": new Date("2022-09-11T23:08:34.000Z")
  },
  {
    "id": 21,
    "name": "Simone Martins Pinheiro",
    "password": "$2b$10$P8JWtYDzY.RWImX/BRLRX.ZH1DTRGFsnmO0C1yiMNudUXBFP9mHp6",
    "createdAt": new Date("2022-09-11T23:07:11.000Z"),
    "updatedAt": new Date("2022-09-11T23:48:10.000Z")
  },
  {
    "id": 24,
    "name": "Yutaro",
    "password": "$2b$10$GkBFZP2/H2g1cwk.nLsdTulhHJPeuTvtDKug/AhMMvfaeQgvykgl6",
    "createdAt": new Date("2022-09-12T00:35:42.000Z"),
    "updatedAt": new Date("2022-09-12T00:35:42.000Z")
  },
  {
    "id": 26,
    "name": "Usuário ",
    "password": "$2b$10$rE6NixAiPumvGKJzLBqlz.4439Q2cbHe6LqkTBQT4wPUADU99shVu",
    "createdAt": new Date("2022-09-12T11:21:50.000Z"),
    "updatedAt": new Date("2022-09-12T11:21:50.000Z")
  },
  {
    "id": 3,
    "name": "natalia",
    "password": "$2b$10$MRGOLwgMO2eCjbJbi8PGrOWWy5t.uktJB6YgXns9tHvBHijWjNTwy",
    "createdAt": new Date("2022-07-31T23:15:24.000Z"),
    "updatedAt": new Date("2022-09-13T00:12:49.000Z")
  },
  {
    "id": 30,
    "name": "rodrigobmps",
    "password": "$2b$10$1QpQs5q4Nxx2z/kqZHVteempcs8SnJVjBRDeskz.viEPj1rNUCoQ.",
    "createdAt": new Date("2022-09-14T20:58:30.000Z"),
    "updatedAt": new Date("2022-09-17T19:26:25.000Z")
  },
  {
    "id": 31,
    "name": "steelfox",
    "password": "$2b$10$tjsPz/01s07ninrP7x54neMJPVa6u4w0o/cQub/ayuu6xna6MqaPG",
    "createdAt": new Date("2022-09-17T19:40:31.000Z"),
    "updatedAt": new Date("2022-09-17T19:40:31.000Z")
  },
  {
    "id": 33,
    "name": "felicia",
    "password": "$2b$10$y/8pIaDTtDvm4M3LBXXWJeLoDSqH6WGxw4LHtt2VJ2htvyXp2t5Je",
    "createdAt": new Date("2022-10-22T16:39:06.000Z"),
    "updatedAt": new Date("2022-10-22T16:39:06.000Z")
  },
  {
    "id": 2,
    "name": "nicolas",
    "password": "$2b$10$VaCtxm06tue7G/blH.H9MuPS0.4/pZY6n6QBcdnsiankIYK24oVL2",
    "createdAt": new Date("2022-07-31T21:24:29.000Z"),
    "updatedAt": new Date("2022-07-31T21:24:29.000Z")
  },
  {
    "id": 34,
    "name": "denilsonmpinheiro@hotmail.com",
    "password": "$2b$10$zflq0gIUzQQKqh7zFqtrX.G4i80NHk1zb4AEwGVeSaUn9gj/wGSc6",
    "createdAt": new Date("2023-05-11T06:39:53.000Z"),
    "updatedAt": new Date("2023-05-11T06:39:53.000Z")
  },
  {
    "id": 38,
    "name": "tendado_coringar_o_app",
    "password": "$2b$10$7U5rRf1T.E9sZ8xxhNeOnOssmhjHHvwvR2ENgnKzbCURX7LOj9EoC",
    "createdAt": new Date("2023-08-02T06:01:34.000Z"),
    "updatedAt": new Date("2023-08-02T06:01:34.000Z")
  },
  {
    "id": 39,
    "name": "suzanadeov",
    "password": "$2b$10$x18cpsn.Rkm5QCs.pKCMgeKLrD/bcu/3IcbHXIgxZUkkMOrGUencW",
    "createdAt": new Date("2023-08-02T12:23:05.000Z"),
    "updatedAt": new Date("2023-08-02T12:23:05.000Z")
  },
  {
    "id": 40,
    "name": "brunafurlan",
    "password": "$2b$10$6VCONp6Q1IqnOw3YTJ447umopjrkdRBjpQ15IZY7dQ7lwydvv1lX.",
    "createdAt": new Date("2023-08-02T12:24:49.000Z"),
    "updatedAt": new Date("2023-08-02T12:24:49.000Z")
  },
  {
    "id": 41,
    "name": "diego_amps",
    "password": "$2b$10$js3qn3Ycu4O0j/OVKPk7OOfmzv/C2WdzuCYugCO95cECUaRyFhUMG",
    "createdAt": new Date("2023-08-02T13:01:04.000Z"),
    "updatedAt": new Date("2023-08-02T13:01:04.000Z")
  },
  {
    "id": 43,
    "name": "denilson",
    "password": "$2b$10$Ph8OujUU90K1WV2Lsb563ubZlHTfj3D4qdU.2DEsn9ugngqxXZ3P6",
    "createdAt": new Date("2023-08-03T18:07:45.000Z"),
    "updatedAt": new Date("2023-08-03T18:07:45.000Z")
  },
  {
    "id": 44,
    "name": "johnwick",
    "password": "$2b$10$5EtgkbcOfFIGWZjd0DPSkOObnWSJtngmxKZbOhIPxsTUf14Lq8Sma",
    "createdAt": new Date("2023-08-03T18:44:20.000Z"),
    "updatedAt": new Date("2023-08-03T18:44:20.000Z")
  },
  {
    "id": 45,
    "name": "fredson",
    "password": "$2b$10$C5hnSO8XQXM0jWnYjILac.MjrflHzwlp3XR1BnClzIRkPmRJ3WEYu",
    "createdAt": new Date("2023-08-04T00:48:40.000Z"),
    "updatedAt": new Date("2023-08-04T00:48:40.000Z")
  },
  {
    "id": 46,
    "name": "andréa",
    "password": "$2b$10$Uzs9mPA7o4GWofPNxI0O7eb.AyvNNXy2Fo05K64GIioIWWe4uDZgi",
    "createdAt": new Date("2023-08-04T01:59:20.000Z"),
    "updatedAt": new Date("2023-08-04T01:59:20.000Z")
  },
  {
    "id": 47,
    "name": "anthonyfurlan",
    "password": "$2b$10$nz5Ou1nXrOSqFAxDXvrjM.ezxgsZ9IQSfEbRXugYbQpwHlfWYOqg2",
    "createdAt": new Date("2023-08-13T19:34:38.000Z"),
    "updatedAt": new Date("2023-08-13T19:34:38.000Z")
  },
  {
    "id": 15,
    "name": "monicabdolv",
    "password": "$2b$10$hrg2ti42wkD5v8WviF6KFO9w9pYxGlZmcsXx.Xlv2R/RhWW73jSsK",
    "createdAt": new Date("2022-09-03T17:29:11.000Z"),
    "updatedAt": new Date("2023-08-15T19:11:13.000Z")
  },
  {
    "id": 51,
    "name": "gabii03",
    "password": "$2b$10$TdBOqgUH18RhtEr.6x4Tg.cfVUXNTl.0JGpaqOOtiEYRIidmxCvGa",
    "createdAt": new Date("2023-09-25T14:17:09.000Z"),
    "updatedAt": new Date("2023-09-25T14:17:09.000Z")
  }
])

export default users();

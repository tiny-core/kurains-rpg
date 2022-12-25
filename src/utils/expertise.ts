import type * as zod from 'zod'

import type { ExpertiseSchema } from '@/schemas/npc/base'

export const expertiseList: Array<zod.infer<typeof ExpertiseSchema>> = [
  {
    uid: '1107063e-7e28-4808-be43-551c9e54bc24',
    name: 'Acrobacia',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: 'e221baed-af87-4e98-9e17-861a88c4425a',
    name: 'Adestramento',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: 'e3458c29-eb9f-4733-bb95-021e5a8bf512',
    name: 'Artes',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: '3b88b04b-188d-453e-8a9e-fe1c541b5f99',
    name: 'Atletismo',
    abilitiesCheck: 'strength',
    level: 0
  },
  {
    uid: 'fc86176f-c5e0-4fe8-8a1e-409ac93beb89',
    name: 'Atualidades',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '1f2bc869-32c5-4a04-9ff0-488aac4fc22e',
    name: 'Ciências',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: 'abf29fab-719c-4d8a-827a-ce13f82d0ee6',
    name: 'Crime',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '17852f6b-3e2b-4583-b403-633684921f04',
    name: 'Diplomacia',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: 'a84a64a0-2663-4267-9081-668534915b00',
    name: 'Enganação',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: '9d31bedd-02eb-4bd2-b670-bc1f4a829b41',
    name: 'Fortitude',
    abilitiesCheck: 'vitality',
    level: 0
  },
  {
    uid: '6d2e1317-bfef-47cd-af7f-a0f74dfd0aa1',
    name: 'Furtividade',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '5eacb058-a67b-4f41-bb6a-e9ab1fee48c6',
    name: 'Iniciativa',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '075e761e-921d-44e8-b8b3-f4221b5a2b74',
    name: 'Intimidação',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: 'e4ba8a24-d8b9-4db8-9097-8c394a7993d5',
    name: 'Intuição',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '75072fd5-a263-48a5-9f73-1b30f270bd5a',
    name: 'Investigação',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '7c82d12a-844d-4504-92ec-d2eceb6dcae8',
    name: 'Luta',
    abilitiesCheck: 'strength',
    level: 0
  },
  {
    uid: '540a6c8a-40ef-4a1a-bfaa-afcf6d42ab42',
    name: 'Medicina',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '03051245-b42f-42e6-b9ac-0463728ed5e9',
    name: 'Ocultismo',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: 'a0d25b64-ba2c-4546-8951-5061c064fb16',
    name: 'Percepção',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: '38b1be43-2c85-4869-99dd-2272d39c9643',
    name: 'Pilotagem',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '325e6fb0-7fb8-4282-9c2d-938a2548dc2d',
    name: 'Pontaria',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '0e1d31af-165d-4f1e-a178-7df6809a0e3e',
    name: 'Profissão',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '2c47a938-000c-4a9b-bc97-b254ca212849',
    name: 'Reflexos',
    abilitiesCheck: 'agility',
    level: 0
  },
  {
    uid: '00222f04-8594-4333-a784-769a773f62c6',
    name: 'Religião',
    abilitiesCheck: 'presence',
    level: 0
  },
  {
    uid: '0c746d13-89ef-44e2-90ce-4667e783d8ed',
    name: 'Sobrevivência',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '0b99a90f-6fad-4c57-b883-c6227de6e085',
    name: 'Tática',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '5744cedd-90cd-4287-a4ba-3698551561a8',
    name: 'Tecnologia',
    abilitiesCheck: 'intelligence',
    level: 0
  },
  {
    uid: '8b4feea4-9e3d-48c1-98fd-37bc4c4463ab',
    name: 'Vontade',
    abilitiesCheck: 'presence',
    level: 0
  }
]

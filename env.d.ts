/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_DATABASE_URL: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_ID: string
  readonly VITE_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface FirebaseError {
  code: string
  message: string
}

// interface Item {
//   id: string
//   category: 'any' | 'weapon' | 'armor'
//   range?: 'Curto' | 'Medio' | 'Longo'
//   name: string
//   effect: string
//   damage: number
//   rarity: number // 0 - 4
//   slots: number
// }

// interface Expertise {
//   id: string
//   name: string
//   abilitiesCheck: 'agility' | 'strength' | 'intelligence' | 'presence' | 'vitality'
//   trained: 'T' | 'E' | 'V'
//   level: 0
// }

// interface Rituals {
//   id: string
//   name: string
//   cost: number
//   description: string
// }

// interface NPC {
//   name: string
//   level: number

//   stats: {
//     life: { current: number; total: number }
//     sanity: { current: number; total: number }
//     mana: { current: number; total: number }
//   }

//   abilities: {
//     agility: number
//     strength: number
//     intelligence: number
//     presence: number
//     vitality: number
//   }

//   expertise: Array<Expertise>

//   inventory: {
//     slots: {
//       used: number
//       total: number
//     }

//     items: Array<Item>
//   }
// }

// interface MonsterNPC extends NPC {}

// interface HumanNPC extends NPC {
//   age: number
//   born: string
//   origin: string
//   class: string
//   prestige: number // 0 - 4

//   protection: string
//   resistance: string
//   defense: number

//   rituals: Array<Rituals>
// }

// interface Character extends HumanNPC {}

// // interface Account {
// //   uid: string
// //   email: string
// //   displayName: string
// //   photoUrl: string
// //   refreshToken: string
// // }

// // interface Player {
// //   account: Account
// //   connected: boolean
// //   isTheMaster: boolean
// //   characters: Array<Character>
// // }

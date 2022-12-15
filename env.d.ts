/// <reference types="vite/client" />

interface Item {
  id: string
  category: 'any' | 'weapon' | 'armor'
  range?: 'Curto' | 'Medio' | 'Longo'
  name: string
  effect: string
  damage: number
  rarity: number // 0 - 4
  slots: number
}

interface Expertise {
  id: string
  name: string
  abilitiesCheck: 'agility' | 'strength' | 'intelligence' | 'presence' | 'vitality'
  trained: 'T' | 'E' | 'V'
  level: 0
}

interface Rituals {
  id: string
  name: string
  cost: number
  description: string
}

interface NPC {
  name: string
  level: number

  stats: {
    life: { current: number; total: number }
    sanity: { current: number; total: number }
    mana: { current: number; total: number }
  }

  abilities: {
    agility: number
    strength: number
    intelligence: number
    presence: number
    vitality: number
  }

  expertise: Array<Expertise>

  inventory: {
    slots: {
      used: number
      total: number
    }

    items: Array<Item>
  }
}

interface MonsterNPC extends NPC {}

interface HumanNPC extends NPC {
  age: number
  born: string
  origin: string
  class: string
  prestige: number // 0 - 4

  protection: string
  resistance: string
  defense: number

  rituals: Array<Rituals>
}

interface Character extends HumanNPC {}

interface Player {
  email: string
  name: string
  connected: boolean
  isTheMaster: boolean
  characters: Array<Character>
}

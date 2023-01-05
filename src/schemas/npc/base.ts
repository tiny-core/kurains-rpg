import zod from '@/schemas/zod'

const StatsItemsSchema = zod
  .object({
    current: zod.number().min(0).int(),
    total: zod.number().min(1).int()
  })
  .refine((data) => data.current <= data.total, { path: ['current'] })

const StatsSchema = zod.object({
  life: StatsItemsSchema,
  sanity: StatsItemsSchema,
  mana: StatsItemsSchema
})

export const abilitiesCheckList = [
  { name: 'Agilidade', value: 0 },
  { name: 'Força', value: 1 },
  { name: 'Inteligencia', value: 2 },
  { name: 'Presença', value: 3 },
  { name: 'Vitalidade', value: 4 }
] as const

export const ExpertiseSchema = zod.object({
  name: zod.string().trim().min(1),
  // 0: agility | 1: strength | 2: intelligence | 3: presence | 4: vitality
  abilitiesCheck: zod.number().int().min(0).max(4),
  level: zod.number().int()
})

const AttributesSchema = zod.object({
  agility: zod.number().min(0),
  strength: zod.number().min(0),
  intelligence: zod.number().min(0),
  presence: zod.number().min(0),
  vitality: zod.number().min(0)
})

export const categoryList = [
  { name: 'Item', value: 0 },
  { name: 'Arma', value: 1 },
  { name: 'Armadura', value: 2 }
]

export const rangeList = [
  { name: 'Não possui', value: 0 },
  { name: 'Curto', value: 1 },
  { name: 'Médio', value: 2 },
  { name: 'Longo', value: 3 }
]

const ItemSchema = zod.object({
  name: zod.string().trim().min(1),
  // 0: Any ! 1: Weapon | 2: Armor
  category: zod.number().int().min(0).max(2),
  // 0: Empty | 2: Short | 3: Medium | 4: Long
  range: zod.number().int().min(0).max(4),
  effect: zod.string().trim().min(1),
  damage: zod.number().int().min(0),
  rarity: zod.number().int().min(0).max(4),
  slots: zod.number().int().min(1)
})

const InventorySchema = zod.object({
  slots: zod
    .object({
      used: zod.number().int().min(0),
      total: zod.number().int().min(1)
    })
    .refine((data) => data.used > data.total, { path: ['used'] }),

  items: zod.array(ItemSchema)
})

export const NPCSchema = zod.object({
  name: zod.string().trim().min(5),
  level: zod
    .number()
    .int()
    .min(0)
    .max(100)
    .refine((v) => v % 5 === 0)
    .default(0),
  expertises: zod.array(ExpertiseSchema),
  description: zod.string().trim(),
  stats: StatsSchema,
  inventory: InventorySchema,
  attributes: AttributesSchema
})

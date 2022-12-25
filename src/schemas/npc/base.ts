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

const ExpertiseSchema = zod.object({
  uid: zod.string().trim().uuid(),
  name: zod.string().trim().min(1),
  abilitiesCheck: zod.enum([
    'agility',
    'strength',
    'intelligence',
    'presence',
    'vitality'
  ] as const),
  trained: zod.enum(['T', 'E', 'V']),
  level: zod.number().int()
})

const AttributesSchema = zod.object({
  agility: zod.number().min(0),
  strength: zod.number().min(0),
  intelligence: zod.number().min(0),
  presence: zod.number().min(0),
  vitality: zod.number().min(0)
})

const ItemSchema = zod.object({
  uid: zod.string().trim().uuid(),
  name: zod.string().trim().min(1),
  category: zod.enum(['Any', 'Weapon', 'Armor']),
  range: zod.enum(['', 'Short', 'Medium', 'Long']),
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
  level: zod.number().int().min(0),
  expertises: zod.array(ExpertiseSchema),
  stats: StatsSchema,
  inventory: InventorySchema,
  attributes: AttributesSchema
})

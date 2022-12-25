import zod from '@/schemas/zod'

import { NPCSchema } from './base'

const RitualSchema = zod.object({
  uid: zod.string().trim().uuid(),
  name: zod.string().trim().min(1),
  cost: zod.number().int().min(0),
  description: zod.string().trim().min(1)
})

export const JobSchema = zod.object({
  main: zod.string().trim().min(1),
  specialization: zod.string().trim().min(1)
})

export const NPCHumanSchema = NPCSchema.merge(
  zod.object({
    age: zod.number().int().min(1),
    born: zod.string().trim().min(1),
    origin: zod.string().trim().min(1),
    job: JobSchema,
    prestige: zod.number().int().min(0).max(4),
    protection: zod.array(zod.string().trim()),
    resistance: zod.array(zod.string().trim()),
    defense: zod.number().int().min(0),
    rituals: zod.array(RitualSchema)
  })
)

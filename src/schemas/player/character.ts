import { NPCHumanSchema } from '@/schemas/npc'
import zod from '@/schemas/zod'

export const CharacterSchema = NPCHumanSchema.merge(zod.object({}))

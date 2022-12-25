import zod from '@/schemas/zod'

import { AccountSchema } from './account'
import { CharacterSchema } from './character'

export const PlayerSchema = zod.object({
  account: AccountSchema,
  characters: zod.array(CharacterSchema)
})

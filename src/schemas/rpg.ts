import zod from '@/schemas/zod'

export const RPGSchema = zod.object({
  name: zod.string().trim().min(1),
  description: zod.string().trim().min(1)
})

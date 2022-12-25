import zod from '@/schemas/zod'

const SignInSchema = zod.object({
  email: zod.string().trim().email(),
  password: zod.string().trim().min(8)
})

const SingUpSchema = SignInSchema.merge(zod.object({ passwordCheck: zod.string().trim() })).refine(
  (data) => data.passwordCheck === data.password,
  { path: ['passwordCheck'] }
)

export const AccountForm = { SignInSchema, SingUpSchema }

export const AccountSchema = zod.object({
  uid: zod.string().trim().uuid(),
  email: zod.string().trim().min(1),
  displayName: zod.string().trim().min(1),
  photoURL: zod.string().trim().optional(),
  refreshToken: zod.string().trim().min(1)
})

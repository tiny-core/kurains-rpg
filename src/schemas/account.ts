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
  uid: zod.string(),
  email: zod.string(),
  emailVerified: zod.boolean(),
  displayName: zod.string(),
  isAnonymous: zod.boolean(),
  photoURL: zod.string(),
  stsTokenManager: zod.object({
    refreshToken: zod.string(),
    accessToken: zod.string(),
    expirationTime: zod.number()
  }),
  createdAt: zod.string(),
  lastLoginAt: zod.string()
})

export const AccountProfileSchema = AccountSchema.merge(
  zod.object({
    isAdministrator: zod.boolean().optional().default(false)
  })
)

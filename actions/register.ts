import { z } from 'zod'
import { RegisterSchema } from '@/schema'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.data) {
    return { error: 'Invalid Fields' }
  }

  return { success: 'Register Sent' }
}

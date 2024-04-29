'use server'

import { z } from 'zod'
import { RegisterSchema } from '@/schema'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // validated fields
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.data) {
    return { error: 'Invalid Fields' }
  }
  const { name, email, password } = validatedFields.data

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // check if user already exists in db
  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  })
  if (existingUser) {
    return { error: 'Email already in use!' }
  }

  // create User
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: sent verification token email

  return { success: 'User Created' }
}

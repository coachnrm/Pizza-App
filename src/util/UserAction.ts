'use server'

import connectToDatabase from "./connectToDatabase"
import z from 'zod'
import userModel from "./model/user"

const userSchema = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string(),
    phoneNumber: z.string()
})

export async function saveUser(formData: FormData) {
    await connectToDatabase()
    const data = userSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
        phoneNumber: formData.get("phoneNumber")
    })
    if (!data.success) {
        return {
            message: 'schema validation failed'
        }
    }
    try {
        const user = await userModel.create(data.data)
        console.log("user++++++++++", user)
        return {
            user,
            message: 'user saved successfully'
        }
    } catch(error) {
        return {
            error,
            message: 'failed to save user'
        }
    }
}
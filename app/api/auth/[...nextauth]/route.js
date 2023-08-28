import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const isCorrectCredentials = (credentials) =>
    credentials.username === process.env.NEXTAUTH_USERNAME && credentials.password === process.env.NEXTAUTH_PASSWORD

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: {
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },

            authorize: async (credentials) => {
                if(isCorrectCredentials(credentials)){
                    const user = { id: 1, name: "admin"}
                    return Promise.resolve(user)
                }
                else{
                    return Promise.resolve(null)
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
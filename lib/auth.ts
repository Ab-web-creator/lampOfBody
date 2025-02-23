import { auth } from '@clerk/nextjs/server'

export async function authenticateUser() {
  const { userId, sessionId } = await auth();
  return { userId, sessionId };
}

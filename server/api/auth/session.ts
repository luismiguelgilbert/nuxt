import { auth } from '@/lib/auth';

export default defineEventHandler(async (event) => {
  console.log('is this session?');
    const session = await auth.api.getSession({
      headers: event.headers,
    })
    console.log('/session');
    console.log({ session });
    return session;
});
import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    host: import.meta.env.DATABASE_HOST,
    port: import.meta.env.DATABASE_PORT,
    database: import.meta.env.DATABASE_NAME,
    user: import.meta.env.DATABASE_USER,
    password: import.meta.env.DATABASE_PWD,
    idleTimeoutMillis: 60 * 1000 * 5, // 5 minutes
    connectionTimeoutMillis: 30 * 1000, // 30 seconds
    max: 20, // 20 connections
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  advanced: {
    cookiePrefix: 'bitt'
  },
  session: {
    expiresIn: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 60  * 60 * 24, // 1 day
    }
  },
  plugins: [
    customSession(async ({ user, session }) => {
      const userQuery = await db.query(`select
        b.sys_link_id  
        from sys_users a
        inner join sys_profiles_links b on a.sys_profile_id = b.sys_profile_id
        where a.email = '${user.email}'`);
      const roles = userQuery.rows.map(item => item.sys_link_id);
      return {
        roles: roles,
        user: user,
        session,
      };
    }),
  ],
  // trustedOrigins: ['http://localhost:4321', 'http://192.168.68.64:4321']
});

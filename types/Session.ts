export interface Session {
  user: {
    id: string;
    name: string;
    image?: string | null | undefined | undefined;
    email: string;
    createdAt: string;
    updatedAt: string;
    emailVerified: boolean;
  };
  session: {
    id: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    userId: string;
    expiresAt: string | Date;
    token: string;
    ipAddress?: string | null | undefined | undefined;
    userAgent?: string | null | undefined | undefined;
  };
  roles: string[];
}

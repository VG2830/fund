
// In-memory session store (replace with DB in production)
export const sessions = new Map<string, { phone: string, status: string, createdAt: number }>();

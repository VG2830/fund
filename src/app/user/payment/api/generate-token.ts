import { v4 as uuidv4 } from 'uuid';
import { sessions } from '../../../../lib/sessions';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { phone } = req.body;
  const token = uuidv4();

  sessions.set(token, {
    phone,
    status: 'pending',
    createdAt: Date.now()
  });

  res.status(200).json({ token });
}

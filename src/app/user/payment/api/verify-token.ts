import { sessions } from '../../../../lib/sessions';

export default async function handler(req, res) {
  const { token } = req.query;
  const session = sessions.get(token);

  if (!session) return res.status(400).json({ message: 'Invalid token.' });
  if (session.status === 'authenticated')
    return res.status(200).json({ message: 'Already authenticated.' });

  session.status = 'authenticated';
  res.status(200).json({ message: 'Authentication successful!' });
}

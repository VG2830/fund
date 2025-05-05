
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    if (token) {
      fetch(`/api/verify-token?token=${token}`)
        .then(res => res.json())
        .then(data => setStatus(data.message));
    }
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">QR Authentication</h1>
      <p className="mt-4">{status}</p>
    </div>
  );
}

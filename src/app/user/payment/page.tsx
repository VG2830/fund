
"use client"
import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function Home() {
  const [phone, setPhone] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('payment/api/generate-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    setToken(data.token);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Login via QR Code</h1>
      <input
        className="border p-2"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2" onClick={handleSubmit}>
        Generate QR
      </button>

      {token && (
        <div className="mt-6">
          <p>Scan this QR with your phone:</p>
          <QRCode value={`http://localhost:3000/verify?token=${token}`} />
        </div>
      )}
    </div>
  );
}

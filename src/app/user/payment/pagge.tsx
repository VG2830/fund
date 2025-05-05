import Qrpage from "../../../components/QrPaymentSystem";


export default function page(){
  return(
     <>
     <div className="mt-1">
      <Qrpage/>
     </div>
    </>
  );
}

// "use client"
// import { useEffect, useState } from 'react';
// import { QRCode } from 'react-qrcode-logo';

// export default function PaymentPage() {
//   const [token, setToken] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const userId = 1; // Assume logged-in user ID

//   useEffect(() => {
//     // Step 1: Generate token
//     async function fetchToken() {
//       const res = await fetch(`/api/generate-token?userId=${userId}`);
//       const data = await res.json();
//       setToken(data.token);
//     }

//     fetchToken();
//   }, [userId]);

//   useEffect(() => {
//     if (!token) return;

//     const interval = setInterval(async () => {
//       const res = await fetch(`/api/check-verification?userId=${userId}`);
//       const data = await res.json();
//       setIsVerified(data.isVerified);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [token, userId]);

//   if (!token) return <p> waiting for token and Loading...</p>;

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       {!isVerified ? (
//         <>
//           <h2>Scan this QR to Verify</h2>
//           <QRCode value={`http://localhost:3000/verify?token=${token}`} size={256} />
//           <p>Waiting for verification...</p>
//         </>
//       ) : (
//         <>
//           <h2>✅ Verified!</h2>
//           <button
//             style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: 'green', color: 'white' }}
//             onClick={() => alert('Proceed to Payment')}
//           >
//             Pay Now
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

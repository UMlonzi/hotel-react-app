// import React from 'react'
// import './login.css'
// // import Zebra from '../../Images/Shamwari-Game-Reserve-is-back-in-the-game.webp';
// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isRegistering, setIsRegistering] = useState(false);
//     const [registerInformation, setRegisterInformation] = useState({
//       email: "",
//       confirmEmail: "",
//       password: "",
//       confirmPassword: ""
//     });

//     return (
//         <div className="welcome">
   
//         <h1>Todo-List</h1>
//         <div className="login-register-container">
//           {isRegistering ? (
//             <>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={registerInformation.email}
//                 onChange={(e) =>
//                   setRegisterInformation({
//                     ...registerInformation,
//                     email: e.target.value
//                   })
//                 }
//               />
//               <input
//                 type="email"
//                 placeholder="Confirm Email"
//                 value={registerInformation.confirmEmail}
//                 onChange={(e) =>
//                   setRegisterInformation({
//                     ...registerInformation,
//                     confirmEmail: e.target.value
//                   })
//                 }
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={registerInformation.password}
//                 onChange={(e) =>
//                   setRegisterInformation({
//                     ...registerInformation,
//                     password: e.target.value
//                   })
//                 }
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={registerInformation.confirmPassword}
//                 onChange={(e) =>
//                   setRegisterInformation({
//                     ...registerInformation,
//                     confirmPassword: e.target.value
//                   })
//                 }
//               />
//               <button className="sign-in-register-button" onClick={handleRegister}>Register</button>
//               <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
//             </>
//           ) : (
//             <>
//               <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
//               <input
//                 type="password"
//                 onChange={handlePasswordChange}
//                 value={password}
//                 placeholder="Password"
//               />
//               <button className="sign-in-register-button" onClick={handleSignIn}>
//                 Sign In
//               </button>
//               <button
//                 className="create-account-button"
//                 onClick={() => setIsRegistering(true)}
//               >
//                 Create an account
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }


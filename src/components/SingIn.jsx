// import React, { useState } from 'react';

// export default function SingIn() {
//   const [input, setInput] = useState({ email: '', password: '' });
//   const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   return (
//     <div className="center" style={{ width: '400px' }}>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" name="email" value={input.email} onChange={changeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" name="password" value={input.password} onChange={changeHandler} className="form-control" id="exampleInputPassword1" />
//         </div>
//         <button type="button" className="btn btn-success">LogIn</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';

const Login = ({login, auth}) => {


   

   const [username, setUserName] = useState('');
   const [password, setPassword] = useState('');


   const check = {
      login: username.trim().length === 0,
      password: password.trim().length === 0,
   };



   return (
      <>
         <div className="card mx-auto p-4 border-1 w-100">
       
            <div className="  w-50 mx-auto mt-5">
               <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUserName(e.target.value)} className=" p-3 form-control m-2 bg-light " />


               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' className="p-3 form-control m-2 bg-light  " />


               <button className="btn btn-success m-2" onClick={()=> auth(username, password, check) }>
                  LOGIN
               </button>


            </div>
         </div>
      </>
   );
};

export default Login;
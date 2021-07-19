import React from 'react'
import {Auth} from "aws-amplify";
import "./CustomSignout.css";

async function CustomSignout() {
  const signOut = (e) => {
      e.preventDefault();
      await Auth.signOut();
      window.location.reload();
   }

  return (
     <button onClick={signOut} className = "signout" /button>
   );
}

export default CustomSignout;
import React from 'react'
import {Auth} from "aws-amplify";
import "./CustomSignout.css";

function CustomSignout() {
  const signOut = (e) => {
      e.preventDefault();
      Auth.signOut();
      window.location.reload();
   }

  return (
     <button onClick={signOut} className = "signout"> Sign out </button>
   );
}

export default CustomSignout;
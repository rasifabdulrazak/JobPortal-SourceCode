
import React from 'react'

function AuthContext() {
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("accessTokens");
        console.log(user)
        navigate("/login");
      };
    
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext
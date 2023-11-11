import React, { createContext, useState } from 'react';

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state to track the user

  // The value that will be given to the context
  const contextValue = {
    user,
    setUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

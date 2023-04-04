import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Thiago Taujiro",
      profilePic:
        "https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE=",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

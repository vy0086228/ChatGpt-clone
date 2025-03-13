import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return { user, logout };
}

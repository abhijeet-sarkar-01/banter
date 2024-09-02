import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useState } from "react";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      const data = res.json();
  
      if (data.error){
        throw new Error(data.error);
      }
  
      localStorage.removeItem("user-info");
      setAuthUser(null);
  
    } catch (error) {
      toast.error(error.message);
    } finally{
      setLoading(false);
    }
  }

  return {loading, logout};
}
 
export default useLogout;
import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    //checking if online
    setIsOnline(true);
  };

  const handleOffline = () => {
    //checking if offline
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline); //adding eventListeners for online
    window.addEventListener("offline", handleOffline); //adding eventListeners for offline

    return () => {
      window.removeEventListener("online", handleOnline); //removing eventListeners for online
      window.removeEventListener("offline", handleOffline); //removing eventListeners for online
    };
  }, []);

  return isOnline; //return true or false
};
export default useOnline;

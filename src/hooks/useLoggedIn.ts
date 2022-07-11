import { useEffect, useState } from 'react';

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginInfo = () => {
      let isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
        setIsLoggedIn(JSON.parse(isLoggedIn));
      } else {
        isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
          setIsLoggedIn(JSON.parse(isLoggedIn));
        } else {
          setIsLoggedIn(false);
        }
      }
    };

    getLoginInfo();

    window.addEventListener('storage', getLoginInfo);

    return () => {
      window.removeEventListener('storage', getLoginInfo);
    };
  }, []);

  return isLoggedIn;
};

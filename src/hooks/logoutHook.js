import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';

const useInactivityLogout = (timeout = 86400000) => { // Default to 2 hours
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = () => {
      sessionStorage.clear();
      localStorage.clear();
      dispatch(logout()); // Clear all local storage on logout
    };

    const resetTimeout = () => {
      const currentTime = new Date().getTime(); // Update the current time
      localStorage.setItem('lastInteraction', currentTime.toString()); // Save last interaction
      clearTimeout(timeoutId); // Clear any existing timeouts
      timeoutId = setTimeout(handleLogout, timeout); // Start a new timeout
    };

    let timeoutId = setTimeout(handleLogout, timeout); // Start the initial timeout

    // Check if the last interaction time exceeds the timeout
    const loginTime = parseInt(localStorage.getItem('lastInteraction'), 10);
    const currentTime = new Date().getTime();

    if (loginTime && currentTime - loginTime > timeout) {
      handleLogout(); // Logout if the user has been inactive for too long
    }

    // Add event listeners to reset timeout on user activity
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'resize'];
    events.forEach(event => window.addEventListener(event, resetTimeout));

    // Set initial interaction time if not already set
    if (!loginTime) {
      localStorage.setItem('lastInteraction', currentTime.toString());
    }

    // Cleanup on component unmount
    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  }, [timeout]); // Include navigate and timeout in dependencies
};

export default useInactivityLogout;


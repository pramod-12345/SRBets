// ToastContext.js
import React, { createContext, useState, useContext } from "react";
import { ToastError, ToastSuccess } from "components";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000); // Auto-hide after 3 seconds
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast?.type === "success" && (
        <ToastSuccess message={toast.message} onClose={() => setToast(null)} />
      )}
      {toast?.type === "error" && (
        <ToastError message={toast.message} onClose={() => setToast(null)} />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

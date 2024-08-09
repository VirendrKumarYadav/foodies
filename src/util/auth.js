
export const isAuthenticated = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem('authToken') : null;
    return !!token; 
  };
  
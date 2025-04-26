import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('tokenLogin');
  if (!user) {
    return (
      <Navigate to={'/auth/login'} replace />
    );
  }
  return children;
};
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = '';
  if (!user) {
    return (
        <Navigate to={'/'} replace />
    );
  }
  return children;
};
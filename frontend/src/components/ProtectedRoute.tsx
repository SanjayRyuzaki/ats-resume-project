import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: Add authentication logic
  return <>{children}</>;
}

export default ProtectedRoute;

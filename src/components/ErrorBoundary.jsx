import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // You can log the error to an error reporting service
      console.error('Error caught by error boundary:', error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render a fallback UI here
    return <div>Something went wrong.500 Server error</div>;
  }

  return children;
};

export default ErrorBoundary;

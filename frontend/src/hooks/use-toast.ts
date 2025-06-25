// Simple placeholder for shadcn/ui use-toast
import { useCallback } from 'react';

export function useToast() {
  // In a real app, this would show a toast notification
  // Here, just use alert as a placeholder
  return {
    toast: useCallback((opts: { title: string; description?: string; }) => {
      alert(`${opts.title}${opts.description ? '\n' + opts.description : ''}`);
    }, [])
  };
}

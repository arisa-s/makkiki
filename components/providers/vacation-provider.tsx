'use client';

import { createContext, ReactNode, useContext } from 'react';

interface VacationContextType {
  onVacation: boolean;
  description?: string;
  loading: boolean;
}

const VacationContext = createContext<VacationContextType | undefined>(undefined);

export function VacationProvider({ 
  children, 
  initialState 
}: { 
  children: ReactNode;
  initialState: VacationContextType;
}) {
  return (
    <VacationContext.Provider value={initialState}>
      {children}
    </VacationContext.Provider>
  );
}

export function useVacation() {
  const context = useContext(VacationContext);
  if (context === undefined) {
    throw new Error('useVacation must be used within a VacationProvider');
  }
  return context;
} 
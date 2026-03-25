import { createContext, useState, useContext, ReactNode } from 'react';
import { ViewType, NavigationType } from '../types';

interface ViewContextType {
  view: ViewType;
  navigation: NavigationType;
  setView: (view: ViewType) => void;
  setNavigation: (nav: NavigationType) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('list');
  const [navigation, setNavigation] = useState<NavigationType>('all');

  return (
    <ViewContext.Provider value={{ view, navigation, setView, setNavigation }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useViewContext() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useViewContext must be used within ViewProvider');
  }
  return context;
}

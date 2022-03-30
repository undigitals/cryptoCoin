import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider, focusManager } from 'react-query';
import Navigation from './src/navigation';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <StatusBar style="auto" /> 
    </QueryClientProvider>
    </>
  );
}

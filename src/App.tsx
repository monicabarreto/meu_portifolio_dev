import React from 'react';
import BannerOne from './Components/BannerOne';
import BannerTwo from './Components/BannerTwo';
import BannerThree from './Components/BannerThree';
import BannerFour from './Components/BannerFour';
import Contacts from './Components/Contacts';
import Sidebar from './Components/Sidebar';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Cria uma instância do React Query
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex">
        {/* Sidebar - Fica fixo à esquerda */}
        <Sidebar />

        {/* Conteúdo Principal */}
        <main className="ml-64 w-full">
       
          <BannerOne />
          <BannerTwo />
          <BannerThree />
          <BannerFour />
          <Contacts/> 

        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;

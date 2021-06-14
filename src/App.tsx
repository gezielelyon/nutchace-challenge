import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index.routes';

import { Header } from './components/Header/index';
import { NewEmployeeModal } from './components/NewEmployeeModal/index';

import { GlobalStyles } from './styles/global';

export default function App() {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

  function handleOpenModal() {
    setIsEmployeeModalOpen(true);
  }

  function handleCloseModal() {
    setIsEmployeeModalOpen(false);
  }

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header onRequestOpenModal={handleOpenModal} />
        <Routes />
      </BrowserRouter>
      <NewEmployeeModal
        isOpen={isEmployeeModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

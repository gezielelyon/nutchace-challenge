import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CloseImg from '../../assets/close.svg';

import { Wrapper, Title } from './styles';

interface INewEmployeeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewEmployeeModal({
  isOpen,
  onRequestClose,
}: INewEmployeeModalProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleSetSelectedDate(date: Date) {
    setSelectedDate(date);
  }

  async function handleAddNewEmployee(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={CloseImg} alt="close" />
      </button>

      <Wrapper action="#" onSubmit={handleAddNewEmployee}>
        <Title>Novo cadastro</Title>

        <input type="text" placeholder="Nome *" />

        <div className="picker">
          <DatePicker
            selected={selectedDate}
            onChange={handleSetSelectedDate}
          />
          <select className="select" name="gender">
            <option value="masculino" selected>
              Masculino
            </option>
            <option value="feminino">Feminino</option>
            <option value="other">Outros</option>
          </select>
        </div>

        <input type="email" placeholder="Email *" />
        <input type="text" placeholder="CPF *" />
        <input type="text" placeholder="Data de início *" />
        <input type="text" placeholder="Área" />

        <button type="submit">Criar cadastro</button>
      </Wrapper>
    </Modal>
  );
}

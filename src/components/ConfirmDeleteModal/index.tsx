import { FormEvent } from 'react';
import Modal from 'react-modal';

import { Wrapper, Title } from './styles';

interface IConfirmDeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ConfirmDeleteModal({
  isOpen,
  onRequestClose,
}: IConfirmDeleteModalProps) {
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
      <Wrapper action="#" onSubmit={handleAddNewEmployee}>
        <Title>Deseja mesmo excluir cadastro?</Title>

        <button type="submit" className="btn-delete">
          Excluir cadastro
        </button>
        <button type="submit">Cancelar</button>
      </Wrapper>
    </Modal>
  );
}

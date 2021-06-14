import { useState, useEffect } from 'react';

import { EmployeeCard } from '../../components/EmployeeCard';
import { EditEmployeeModal } from '../../components/EditEmployeeModal';
import { ConfirmDeleteModal } from '../../components/ConfirmDeleteModal';

import { api } from '../../services/api';

import { Container, Wrapper } from './styles';

interface IEmployeeProps {
  id: string;
  name: string;
  email: string;
  CPF: string;
  gender: string;
  birthday: string;
  started: string;
  team: string;
}

export default function Home() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [employees, setEmployees] = useState<IEmployeeProps[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<IEmployeeProps[]>('/employees');

      setEmployees(data);
    })();
  }, []);

  return (
    <Container>
      <Wrapper>
        <strong>{employees.length} resultados</strong>

        {employees.map(item => (
          <EmployeeCard
            employee={item}
            onRequestOpenEditModal={() => {
              setIsEditModalOpen(true);
            }}
            onRequestOpenDeleteModal={() => {
              setIsDeleteModalOpen(true);
            }}
          />
        ))}

        <EditEmployeeModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
        />

        <ConfirmDeleteModal
          isOpen={isDeleteModalOpen}
          onRequestClose={() => setIsDeleteModalOpen(false)}
        />
      </Wrapper>
    </Container>
  );
}

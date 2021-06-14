import { Container } from './styles';

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

interface IEmployeeCardProps {
  employee: IEmployeeProps;
  onRequestOpenEditModal: () => void;
  onRequestOpenDeleteModal: () => void;
}

export function EmployeeCard({
  employee,
  onRequestOpenEditModal,
  onRequestOpenDeleteModal,
}: IEmployeeCardProps) {
  return (
    <Container>
      <div>
        <h2>{employee.name}</h2>
        <h2>{employee.team}</h2>
      </div>

      <div>
        <span>{employee.email}</span>
        <span>{employee.started}</span>
      </div>

      <button
        type="button"
        className="btn-edit"
        onClick={onRequestOpenEditModal}
      >
        Editar
      </button>
      <button
        type="button"
        className="btn-delete"
        onClick={onRequestOpenDeleteModal}
      >
        Deletar
      </button>
    </Container>
  );
}

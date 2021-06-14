import Logo from '../../assets/logo.png';

import { Container, Wrapper } from './styles';

interface IHeaderProps {
  onRequestOpenModal: () => void;
}

export function Header({ onRequestOpenModal }: IHeaderProps) {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="Nutcache" />

        <button type="button" onClick={onRequestOpenModal}>
          Novo cadastro
        </button>
      </Wrapper>
    </Container>
  );
}

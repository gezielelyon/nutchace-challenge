import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background: var(--white);
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 6px 15px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(15px);
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    span {
      font-size: 0.85rem;
      font-weight: 600;
      opacity: 0.7;
    }
  }

  .btn-edit {
    height: 3rem;
    width: 100%;
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border: 2px solid var(--blue);
    background: var(--background);
    border-radius: 0.5rem;
    outline: 0;
    color: var(--blue);
    font-weight: 600;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: 'Editar informações do funcionário';
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: var(--blue);
      transition: all 0.35s ease;
      font-size: 1rem;
      font-weight: 600;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      &::after {
        left: 0;
      }
    }
  }

  .btn-delete {
    height: 3rem;
    width: 100%;
    position: relative;
    border-radius: 0.5rem;
    outline: 0;
    border: 2px solid var(--red);
    background: var(--background);
    color: var(--red);
    font-weight: 600;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: 'Deletar registro do funcionário';
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: var(--red);
      transition: all 0.35s ease;
      font-size: 1rem;
      font-weight: 600;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      &::after {
        left: 0;
      }
    }
  }
`;

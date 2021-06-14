import styled from 'styled-components';

export const Container = styled.header`
  top: 0;
  z-index: 99;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  height: 6rem;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 3rem;
    cursor: pointer;
  }

  button {
    position: relative;
    padding: 1rem;
    outline: 0;
    border: 0;
    border-radius: 0.5rem 0.5rem 0 0.5rem;
    background: var(--blue);
    overflow: hidden;

    color: var(--white);
    font-weight: 600;

    &::after {
      position: absolute;
      content: 'Criar';
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: var(--background);
      color: var(--blue);
      font-weight: 600;
      transition: all 0.2s ease;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    :hover {
      &::after {
        left: 0;
      }
    }
  }
`;

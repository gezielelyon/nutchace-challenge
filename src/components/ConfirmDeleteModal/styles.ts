import styled from 'styled-components';

export const Wrapper = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 3rem;
    width: 100%;
    border: 0;
    outline: 0;
    background: var(--blue);
    color: var(--white);
    font-weight: 600;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
    margin-bottom: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .btn-delete {
    height: 3rem;
    width: 100%;
    position: relative;
    border-radius: 0.5rem;
    outline: 0;
    border: 0;
    background: var(--red);
    color: var(--white);
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

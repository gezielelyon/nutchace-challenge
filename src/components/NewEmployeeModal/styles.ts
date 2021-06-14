import styled from 'styled-components';

export const Wrapper = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    height: 3rem;
    width: 100%;
    border: 0;
    padding: 0 1rem;
    outline-color: var(--blue);
    margin-bottom: 1rem;
  }

  .picker {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .select {
    height: 3rem;
    width: 100%;
    border: 0;
    outline: 0;
    padding: 0 1rem;
  }

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

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

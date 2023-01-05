import { css } from 'lit';

export const carCardStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .car-card {
    box-shadow: 0 0 1rem #0002;
    padding: 1rem;
    border-radius: 1rem;
    font-family: poppins;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .car-model {
    text-align: center;
    font-size: 40px;
    letter-spacing: 2px;
  }
  .car-type {
    font-size: 24px;
    text-align: center;
  }
  .other-details {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 3rem;
    font-size: 18px;
  }
`;

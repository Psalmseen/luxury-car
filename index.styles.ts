import { css } from 'lit';

export const indexStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .car-view {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    gap: 2rem;
  }
  .index {
    padding: 3rem;
  }
  .index-title {
    background-color: powderblue;
    padding: 4rem;
    text-transform: uppercase;
    font-family: poppins;
    text-align: center;
    font-size: 52px;
    letter-spacing: 2px;
  }
  .navigations {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .next,
  .prev {
    padding: 0.5rem 1.3rem;
    background-color: powderblue;
    text-align: center;
    word-spacing: 0.5rem;
    border-radius: 4px;
    font-size: 1.2rem;
    font-family: poppins;
    cursor: pointer;
  }
  .inactive {
    background-color: #e4e4e4;
    cursor: not-allowed;
  }
`;

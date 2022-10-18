import styled from 'styled-components';



export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(340deg, #e95110, #1110e9, #e8e910, #10e957);
    animation: AnimationName 90s ease infinite;
    @keyframes AnimationName {
      0%{background-position:0% 24%}
      50%{background-position:100% 77%}
      100%{background-position:0% 24%}
  }
    background-size: 800% 800%;
    overflow: hidden;
  `;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
      width: 100%;
      max-width: 200px;
      display: block;
      padding: 0 20px;
    }
  `;

import styled from 'styled-components';

export const StyledDisplay = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 0 0 4px 0;
padding: 5px;
border: 2px solid rgba(250, 250, 250, .5);
min-height: 30px;
width: 100%;
border-radius: 20px;
color: ${props => (props.gameOver ? 'red' : '#333')};
background: rgba(255, 255, 255, .3);
font-family: Sriracha, Ariel, Helvetica, sans-serif;
font-size: 1rem;
`;

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
    margin: 0;
    padding: 0;
}

title {
    color: #ffffff;
    font-family: Inter, Bold;
}

h1 {
    color: #3E85F3;
    font-family: Inter, Bold;
    text-transform: uppercase;
    background: #E3F3FF;
}

h2 {
    color: #3E85F3;
    font-family: Inter, Bold;
    text-transform: uppercase;
}

h3 {
    color ? '#fffff' : '#111111';
    font-family: Inter, Bold;
}

h4 {
    color: #3E85F3;
    font-family: Inter, Semi Bold;
}

h5 {
    color: #343434;
    font-family: Inter, Bold;

}

p {
    color: #111111;
    font-family: Inter, Medium;
}

header {
    background-color: #3E85F3;
}

section {
    background-color: #E3F3FF;
}

button {
    background-color: #3E85F3;
    font-family: Inter, Semi Bold;
    color: #ffffff;

}

button:hover {
    background-folor: #2B78EF;
    font-family: Inter, Semi Bold;
    color: #ffffff;
}

form {

}

input {
    font-family: Inter, Semi Bold;
    color: #111111;
    opacity: 0.15;
}

input: error, input: correct {
    font-family: Inter, Semi Bold;
    color: #111111;
}

label {
    font-family: Inter, Regular;
    color: #111111;
}

label: error {
    font-family: Inter, Regular;
    color: #E74A3B;
}

label: correct {
    font-family: Inter, Regular;
    color: #3CBC81;
}
`;
 
export default GlobalStyle;
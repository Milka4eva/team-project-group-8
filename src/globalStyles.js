import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
    margin: 0;
    padding: 0;
}

$main-blue-color: #3E85F3;
$light-blue-color: #E3F3FF;
$white-color: #FFFFFF;
$black-color: #111111;
$grey-color: rgba(0,0,0,0.15);
$hover-blue-color: #2B78EF;
$error-red-color: #E74A3B;
$correct-green-color: #3CBC81;
$name-avatar-color: #343434;
$linear-pink-color: #FFD2DD;

$main-font: Inter, Bold;
$button-font: Inter, Semi Bold;
$text-font: Inter, Medium;
$form-font: Inter, Regular;

$header-background: #3E85F3;
$section-background: #E3F3FF;

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

p {
    color: #111111;
    font-family: Inter, Medium;
}
`;
 
export default GlobalStyle;
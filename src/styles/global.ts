import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
::-webkit-scrollbar {
    width: 0.75em;
}
::-webkit-scrollbar-track {
    background: #111;
    margin-block: 0.5em;
    border-radius: 100vw;
}
::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 100vw;

}
@supports (scrollbar-color: ${({ theme }) => `blue #111`}) {
    * {
        scrollbar-color: ${({ theme }) => `blue #111`};
        scrollbar-width: thin;
    }
}

body {
    background-color: #111;
    color: #fff;
}
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;

}
#root{
    margin:0 auto;
}
`;

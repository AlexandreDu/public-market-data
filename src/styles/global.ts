import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    ${({ theme }) => `
        ::-webkit-scrollbar {
            width: 0.5em;
            height: 0.5em;
        }
        ::-webkit-scrollbar-track {
            background: ${theme.colors.black};
            margin-block: 0.5em;
            border-radius: 100vw;
        }
        ::-webkit-scrollbar-thumb {
            background: ${theme.colors.grey};
            border-radius: 100vw;

        }
        @supports (scrollbar-color: ${theme.colors.grey} ${theme.colors.black}) {
            * {
                scrollbar-color: ${theme.colors.grey} ${theme.colors.black};
                scrollbar-width: thin;
            }
        }

        body {
            background-color: ${theme.colors.darkBlue};
            color: #fff;
            overflow-x: hidden;
        }
        *{
            margin: 0;
            padding: 0;
            outline:0;
            box-sizing:border-box;
            font-family: 'Poppins', sans-serif;

        }
        #root{
            margin:0 auto;
        }
    `}
`;

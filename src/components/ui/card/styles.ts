import styled from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.blue};
    padding: ${theme.spaces.md};
    border-radius: ${theme.radiuses.md};
    word-wrap: break-word;
    overflow: hidden;
    
  `}
`;

export const CardTitle = styled.span``;

export const CardContent = styled.div``;

export const CardHeader = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  `}
`;

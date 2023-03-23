import styled from 'styled-components';

export const ResultsBlock = styled('div')`
  max-width: 1880px;
  margin: 50px auto;
  box-sizing: border-box;
`;

export const ResultsTitle = styled('h3')`
  margin-top: 30px;
  margin-bottom: 60px;
  color: black;
`;

export const ResultsItemsBlock = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
`;

export const ResultsCardItemWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 480px;
  width: 380px;
  background-color: rgba(98, 98, 66, 0.23);
  margin-bottom: 4px;

  & p:nth-child(2) {
    margin: 15px 250px 5px 0;
  }

  & p:nth-child(4) {
    margin: 5px 250px 0 0;
  }
`;

export const ResultCardItemImage = styled('img')`
  margin-top: 30px;
  background: url("https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817kywRJjVL.jpg") no-repeat center;
  background-size: cover;
  width: 200px;
  height: 300px;
`;

export const ResultCardItemCategory = styled('p')`
  color: #b24646;
  font-weight: normal;
  text-decoration: underline;
`;

export const ResultCardItemBookName = styled('h4')`
  color: #000000;
  max-width: 314px;
  overflow-wrap: break-word;
  text-align: start;
  margin: 0;
`;

export const ResultCardItemAuthorName = styled('p')`
  color: #b24646;
  font-weight: normal;
`;
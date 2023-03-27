import styled from 'styled-components';

type ResultCardItemImageType = {
    img?: string
}

export const ResultsBlock = styled('div')`
  max-width: 1600px;
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
export const ResultsCardImageBlock = styled('div')`
  display: block;
  width: 200px;
  height: 300px;
  margin-bottom: 25px;
`

export const ResultCardItemImage =  styled('img')<ResultCardItemImageType>`
  margin-top: 10px;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const ResultCardItemNoImage =  styled('img')`
  margin-top: 10px;
  background: url("https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;


export const ResultCardText = styled('div')`
  width: 350px;
  text-align: start;
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
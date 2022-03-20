import styled from "styled-components";

const BoxAll = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 190vh;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 25px 25px 0px 0px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
    100px 100px 80px rgba(0, 0, 0, 0.02);
`;

const ItemList = styled.li`
  color: white;
  font-size: 3.5vh;
  &:hover {
    cursor: pointer;
    color: #000;
    padding: 1.5vh;
    border-radius: 50px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.07),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.05),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.042),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.028),
      100px 100px 80px rgba(0, 0, 0, 0.02);
  }
`;

const Footer = () => {
  return (
    <BoxAll>
      <List>
        <ItemList>Voltar ao topo</ItemList>
        <ItemList>Conheça mais</ItemList>
        <ItemList>Trabalhe com a gente</ItemList>
      </List>
    </BoxAll>
  );
};

export default Footer;

import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff6d4;
  width: 100vw;
  height: 70px;
  z-index: 99;
`;

export const Title = styled.div`
  font-size: 36px;
  font-family: "Merienda";
  cursor: pointer;
`;

export const Search = styled.input`
  position: relative;
  width: 314px;
  height: 26px;
  border: 0;
  outline: 0;
  background-color: #ecebef;
  font-size: 15px;
  border-radius: 30px;
  padding: 10px;
  padding-left: 40px;
`;

export const Move = styled.div`
  position: absolute;
`;

export const MovieSearch = styled(Move)`
  top: 25px;
  margin-left: 10px;
  z-index: 99;
`;

export const Div = styled.div`
  display: flex;
  margin: 0px 30px;
  gap: 20px;
  cursor: pointer;
`;

import { useRecoilValue } from "recoil";
import styled from "styled-components";

export const Box = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  border-radius: 30px;
  background-color: ${(props) => (props.isActive ? "#2f3640" : "#FFFFFF")};
  border: 1px solid ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const Img = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  left: 80px;
  width: 300px;
  height: 300px;
`;

export const Num = styled.div`
  position: absolute;
  top: 130px;
  left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: gray;
`;

export const Name = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 170px;
  left: 400px;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const TypeWrapper = styled.div`
  position: absolute;
  top: 205px;
  left: 400px;
  gap: 10px;
  display: flex;
  align-items: center;
  width: 250px;
  height: 30px;
`;

export const Type = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 30px;
  width: 120px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const Height = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 240px;
  left: 400px;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const Weight = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 260px;
  left: 400px;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const Abilities = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 280px;
  left: 400px;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const Ability = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? "whitesmoke" : "black")};
`;

export const Table = styled.div`
  display: flex;
  gap: 10px;
`;

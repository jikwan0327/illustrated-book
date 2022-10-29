import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 190px;
  border: 1px solid #717171;
  border-radius: 30px;
  &:hover {
    transition: 0.3s;
    scale: 1.1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 130px;
  margin-left: 15px;
`;

export const Img = styled.img`
  position: absolute;
  top: 45px;
  right: 20px;
  width: 120px;
  height: 120px;
`;

export const Num = styled.div`
  color: #a0a0a0;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Name = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "whitesmoke" : "#00000")};
  font-size: 20px;
  font-weight: 600;
`;

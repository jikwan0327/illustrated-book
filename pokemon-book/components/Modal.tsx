import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isModalAtom, isDarkAtom } from "../utils/atoms";

const Modal = () => {
  const isModal = useRecoilValue(isModalAtom);
  const setModalAtom = useSetRecoilState(isModalAtom);
  return <>{isModal && <Back></Back>}</>;
};

export default Modal;

const Back = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

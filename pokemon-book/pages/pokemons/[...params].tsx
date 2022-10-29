import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
import DetailCard from "../../components/DetailCard";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../utils/atoms";

export default function Detail({ params }) {
  const [name] = params || [];
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <NameContainer isActive={isDark}>
      <Seo name={name} />
      <DetailCard name={name} />
    </NameContainer>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}

const NameContainer = styled.div<{ isActive: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#2f3640" : "#FFFFFF")};
`;

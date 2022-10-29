import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../utils/atoms";
import * as _ from "../styles/Card.style.ts";

const Card = ({ name, num, image }) => {
  const router = useRouter();
  const isDark = useRecoilValue(isDarkAtom);

  const onClick = (name: string) => {
    router.push(`/pokemons/${name}`);
    console.log(name);
  };

  return (
    <_.CardContainer onClick={() => onClick(name)}>
      <_.Img src={image}></_.Img>
      <_.Div>
        <_.Num>No.{num}</_.Num>
        <_.Name isActive={isDark}>{name}</_.Name>
      </_.Div>
    </_.CardContainer>
  );
};

export default Card;

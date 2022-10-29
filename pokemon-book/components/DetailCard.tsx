import React, { useState } from "react";
import Types from "../utils/Types";
import { DetailIcon } from "./Icon";
import axios from "axios";
import useSWR from "swr";
import { isDarkAtom, isModalAtom } from "../utils/atoms";
import Modal from "./Modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as _ from "../styles/DetailCard.style";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

const DetailCard = ({ name }) => {
  const [img, setImg] = useState("");
  const detail = async () => {
    try {
      const response = await axios.get(`${BASEURL}/pokemon/${name}/`);
      const { id } = response.data;
      setImg(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      );
      return response.data;
    } catch (error) {
      alert("포켓몬 정보가 없어요!");
    }
  };

  const { data } = useSWR(`/pokemons/${name}`, detail);
  const isDark = useRecoilValue(isDarkAtom);
  const setModalAtom = useSetRecoilState(isModalAtom);

  console.log(data);

  const IsModal = () => {
    setModalAtom((prev) => !prev);
  };

  return (
    <_.Box isActive={isDark}>
      <_.Img src={img}></_.Img>
      <_.Num>No.{data?.id}</_.Num>
      <_.Name isActive={isDark}>{data?.name}</_.Name>
      <_.Height isActive={isDark}>Height: {data?.height / 10}m</_.Height>
      <_.Weight isActive={isDark}>Weigth: {data?.weight / 10}kg</_.Weight>
      <_.TypeWrapper>
        <_.Type onClick={IsModal} color={Types(data?.types[0]?.type.name) || ""}>
          {data?.types[0]?.type.name}
        </_.Type>
        <_.Type color={Types(data?.types[1]?.type.name) || ""}>{data?.types[1]?.type.name}</_.Type>
      </_.TypeWrapper>
      <_.Abilities isActive={isDark}>
        Abilities:
        <_.Table>
          <_.Ability isActive={isDark}>
            {data?.abilities[0]?.ability.name || "없음"}
            {data?.abilities[0] && <DetailIcon color={isDark ? "whitesmoke" : "black"} width={15} height={15} />}
          </_.Ability>
          <_.Ability isActive={isDark}>
            {data?.abilities[1]?.ability.name}
            {data?.abilities[1] && <DetailIcon color={isDark ? "whitesmoke" : "black"} width={15} height={15} />}
          </_.Ability>
          <_.Ability isActive={isDark}>
            {data?.abilities[2]?.ability.name}
            {data?.abilities[2] && <DetailIcon color={isDark ? "whitesmoke" : "black"} width={15} height={15} />}
          </_.Ability>
        </_.Table>
      </_.Abilities>
    </_.Box>
  );
};

export default DetailCard;

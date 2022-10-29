import React, { useState } from "react";
import Seo from "../components/Seo";
import axios from "axios";
import useSWR from "swr";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom, search } from "../utils/atoms";
import { useRouter } from "next/router";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Detail() {
  const router = useRouter();
  const isDark = useRecoilValue(isDarkAtom);
  const earch = useRecoilValue(search);
  const [text, setText] = useState("");

  const fetcher = async (url) => {
    const resp = await axios.get(BASEURL + url);
    return resp.data;
  };
  const { data: name } = useSWR("/pokemon?offset=0&limit=905", fetcher);
  const pokemons = name?.results;

  const onClick = (name: string) => {
    router.push(`/pokemons/${name}`);
    console.log(name);
  };

  return (
    <>
      <Seo name="pokemon" />
      <Cards isActive={isDark}>
        {pokemons
          ?.filter((word) => word.name.includes(earch))
          .map((pokemon) => (
            <Card onClick={() => onClick(pokemon?.name)} key={pokemon.name}>
              <Name isActive={isDark}>{pokemon.name}</Name>
            </Card>
          ))}
      </Cards>
    </>
  );
}

const Cards = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 100px;
  background-color: ${(props) => (props.isActive ? "#2f3640" : "#FFFFFF")};
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: 0.5s;
  }
`;

const Name = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "whitesmoke" : "#00000")};
  font-size: 20px;
  font-weight: 600;
`;

import React from "react";
import Card from "../components/Card";
import Seo from "../components/Seo";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import { isDarkAtom } from "../utils/atoms";
import { useRecoilValue } from "recoil";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home(props) {
  const router = useRouter();
  const isDark = useRecoilValue(isDarkAtom);

  const fetcher = async (url) => {
    const resp = await axios.get(BASEURL + url);
    return resp.data;
  };
  const { data: name } = useSWR("/pokemon?offset=0&limit=905", fetcher);

  const pokemons = name?.results;

  return (
    <>
      <Seo name="pokemon" />
      <Cards isActive={isDark}>
        {pokemons.map((pokemon, index) => (
          <Card
            key={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            num={index + 1}
            name={pokemon.name}
          ></Card>
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

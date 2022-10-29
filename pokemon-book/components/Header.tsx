import React, { useCallback, useState } from "react";
import Link from "next/link";
import { DarkMode, LightMode, Logo, SearchIcon } from "./Icon";
import { isDarkAtom, search } from "../utils/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as _ from "../styles/Header.style";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const [text, setText] = useState("");

  const setSearchAtom = useSetRecoilState(search);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  }, []);

  const Enter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/search`);
      setSearchAtom(text);
    }
  }, []);

  return (
    <_.Container>
      <Link href={"/"}>
        <_.Div>
          <Logo></Logo>
          <_.Title>POKEMON DICTIONARY</_.Title>
        </_.Div>
      </Link>
      <_.Div>
        <_.MovieSearch>
          <SearchIcon></SearchIcon>
        </_.MovieSearch>
        <_.Search onChange={onChange} onKeyDown={Enter} placeholder="Search Pokemon" />
      </_.Div>
      <_.Div onClick={toggleDarkAtom}>
        {isDark ? <LightMode width={25} height={25} /> : <DarkMode width={25} height={25} />}
      </_.Div>
    </_.Container>
  );
};

export default Header;

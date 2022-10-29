import React from "react";
import Head from "next/head";

export default function Seo({ name }) {
  return (
    <Head>
      <title>{name}</title>
    </Head>
  );
}

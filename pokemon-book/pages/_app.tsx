import Header from "../components/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../public/static/fonts/style.css";
import React from "react";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Header />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

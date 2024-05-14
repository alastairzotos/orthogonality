import "@/styles/globals.css";
import { urls } from "@/utils/urls";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Head>
        <title>Orthogonality</title>
      </Head>

      <CssBaseline />

      <AppBar>
        <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              href={urls.home()}
              sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
            >
              Orthogonality
            </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

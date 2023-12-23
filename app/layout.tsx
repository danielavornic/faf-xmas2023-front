"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import store from "@/store/store";
import Layout2 from "./layout2";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <html lang="en">
          <body suppressHydrationWarning={true}>
            <Layout2>{children}</Layout2>
          </body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}

"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { Provider } from "react-redux";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import store from "@/store/store";
import Modal from "@/components/modal";
import Layout2 from "./layout2";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Layout2>{children}</Layout2>
        </body>
      </html>
    </Provider>
  );
}

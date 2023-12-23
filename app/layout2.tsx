"use client";
import React, { useState, useEffect, ReactNode } from "react";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import Loader from "@/components/common/Loader";
import { Provider } from "react-redux";
import { closeModal } from "../slices/modalSlice";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import store from "@/store/store";
import Modal from "@/components/modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

const Layout2 = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  const { isOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      <Modal />
      <div
        className={isOpen ? "filter blur-sm cursor-pointer" : ""}
        onClick={() => {
          if (isOpen) {
            handleModalClose();
          }
        }}
      >
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout2;

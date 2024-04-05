import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { trio } from 'ldrs'
import styled from "@emotion/styled";

trio.register()


const HomePageController = lazy(() => import("./pages/HomePageController"));

export const AppController: FC = () => {

    const MainDiv = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
      justify-content: center;
      align-items: center;
      
      
    `
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Suspense fallback={<MainDiv>
                    <l-trio
                        size="40"
                        speed="1.3"
                        color={theme.color.blue.default}
                    ></l-trio>
                </MainDiv>}>
                <HomePageController />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

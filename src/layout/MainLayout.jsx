import { Outlet } from "react-router-dom";
import { ScrollToTop } from "react-to-top";
import { Header, Footer } from "./common";
import { MainContainer } from "components/ui";
import { Suspense } from "react";
import { ProgressBar } from "components/ProgressBar";



export const MainLayout = () => {
  return (
    <>
      <Header />
        <main>
          <MainContainer>
            <Suspense fallback={<ProgressBar />}>
              <Outlet />
            </Suspense>
            <ScrollToTop
              style={{ bottom: '50px' }}
              bgColor="#3DA5AA"
              size={50}
              strokeWidth={3}
              strokeColor='#eead71'
              symbolSize={25}
              symbol="⇧"
              />
          </MainContainer>
        </main>
      <Footer />       
    </>
  );
};
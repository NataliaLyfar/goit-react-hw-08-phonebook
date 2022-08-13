import { Outlet } from "react-router-dom";
import { ScrollToTop } from "react-to-top";
import { Header, Footer } from "./common";
import { MainContainer } from "components/ui";



export const MainLayout = () => {
  return (
    <>
      <Header />
        <main>
          <MainContainer>
              <Outlet />
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
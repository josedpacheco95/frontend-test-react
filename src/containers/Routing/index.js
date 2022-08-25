import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../../screens/Home";
import Category from "../../screens/Category";
import Page from "../../components/Page";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Page>
                        <Home />
                    </Page>
                }
                />
                <Route path="/drink" element={
                    <Page tab={false} footer={false} cancelTab={true}>
                        <Category />
                    </Page>
                }
                />
                <Route path="/food" element={
                    <Page tab={false} footer={false} cancelTab={true}>
                        <Category />
                    </Page>
                }
                />
            </Routes>
        </BrowserRouter>
    )
};

export default Routing;
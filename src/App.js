import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import DefaultLayout from './Components/Layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div id="main">
                <Routes>
                    {routes.map((ele, idx) => {
                        const Page = ele.component;
                        let Layout = DefaultLayout;
                        if (ele.layout) {
                            Layout = ele.layout;
                        } else if (ele.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={idx}
                                path={ele.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

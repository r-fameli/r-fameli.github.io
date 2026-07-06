import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import JobSearch from "./pages/JobSearch/JobSearch";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PortfolioPage />} />
                <Route path="/job-search" element={<JobSearch />} />
            </Routes>
        </HashRouter>
    );
}

export default App;

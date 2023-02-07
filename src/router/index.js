import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home/Home';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} /> 
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
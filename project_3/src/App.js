import "./App.css";
import Main from "./main_page/main";
import { Route, Routes } from "react-router-dom";
import Login from "./main_page/login";
import Users from "./users/Users";
import Movies from "./movies/movies";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="main/:id" element={<Main />}>
                    
                    {/* <Route path="/" element={} /> */}
                    <Route path="users" element={<Users />} />
                    <Route path="movies" element={<Movies />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <h1>{`error - page not found :\n \n \n${window.location.href}`}</h1>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;

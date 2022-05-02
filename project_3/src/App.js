import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./main_page/Login";
import Main from "./main_page/Main";
import Members from "./members/Members";
import MembersAll from "./members/Members_all";
import NewMember from "./members/NewMember";
import EditMember from "./members/EditMember";

import Movies from "./movies/Movies";
import MoviesAll from "./movies/Movies_all";
import NewMovie from "./movies/NewMovie";
import EditMovie from "./movies/EditMovie";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={} /> */}
                <Route path="/" element={<Login />} />
                <Route path="main/:id" element={<Main />}>
                    <Route path="members" element={<Members />}>
                        <Route path="all-members/:Name" element={<MembersAll />} /> 
                        <Route path="all-members/" element={<MembersAll />} /> 
                        <Route path="add-member" element={<NewMember />} />
                        <Route
                            path="edit-member/:memberid"
                            element={<EditMember />}
                        />
                    </Route>
                    <Route path="movies" element={<Movies />}>
                        <Route
                            path="all-movies/:Name"
                            element={<MoviesAll />}
                        />
                        <Route path="all-movies/" element={<MoviesAll />} />
                        <Route path="add-movie" element={<NewMovie />} />
                        <Route
                            path="edit-movie/:movieid"
                            element={<EditMovie />}
                        />
                    </Route>
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

import "./App.css";
import Header from "./header/index";
import CreateWorkSpace from "./createWorkSpace/index";
import { Routes, Route } from "react-router-dom";
import UsersData from "./usersApiData";
import AlbumsData from "./albumsData";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CreateWorkSpace />} />
        <Route path="/users" element={<UsersData />} />
        <Route path="/albums" element={<AlbumsData />} />
      </Routes>
    </div>
  );
};

export default App;

import {Route, Routes} from 'react-router-dom';
import {Navigation} from "./components/Navigation";
import {CabinetPage} from "./pages/CabinetPage/CabinetPage";
import {FriendsPage} from "./pages/FriendsPage/FriendsPage";
import {RoomsPage} from "./pages/RoomsPage/RoomsPage";

function App() {
    return (
        <div className="container mx-auto bg-white border-x border-b rounded-b-md min-h-screen antialiased">
            <Navigation/>
            <div className="container mx-auto h-screen">
                <Routes>
                    <Route path="/*" element={<CabinetPage/>}/>
                    <Route path="/friends" element={<FriendsPage/>}/>
                    <Route path="/rooms" element={<RoomsPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;

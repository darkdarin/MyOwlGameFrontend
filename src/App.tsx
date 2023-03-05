import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { CabinetPage } from './pages/CabinetPage/CabinetPage';
import { FriendsPage } from './pages/FriendsPage/FriendsPage';
import { RoomsPage } from './pages/RoomsPage/RoomsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

function App(): JSX.Element {
  return (
    <div
      className='container mx-auto bg-white border-x border-b rounded-b-md min-h-screen antialiased text-grey-800'>
      <Navigation />
      <div className='container mx-auto h-screen'>
        <Routes>
          <Route path='/*' element={<CabinetPage />} />
          <Route path='/friends' element={<FriendsPage />} />
          <Route path='/rooms' element={<RoomsPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

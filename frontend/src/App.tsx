import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UsersList } from "./user/components/UsersList";
import { User } from "./types/user";
function App() {
  const USERS: User[] = [
    { id: "1", name: "ayush", image: "habib", places: [] },
    { id: "2", name: "rahul", image: "habib", places: [] },
    { id: "3", name: "Kishan", image: "habib", places: [] },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UsersList data={USERS} />}></Route>
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

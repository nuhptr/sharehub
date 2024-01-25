import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Users from "./pages/Users"
import NewPlace from "./pages/NewPlace"
import MainNavigation from "./components/navigation/MainNavigation"
import UserPlace from "./pages/UserPlace"

export default function App() {
   return (
      <BrowserRouter future={{ v7_startTransition: true }}>
         <MainNavigation />
         <main>
            <Routes>
               <Route path="/" element={<Users />} exact />
               <Route path="/:userId/places" element={<UserPlace />} />
               <Route path="/places/new" element={<NewPlace />} />
               <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
         </main>
      </BrowserRouter>
   )
}

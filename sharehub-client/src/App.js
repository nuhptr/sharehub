import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Users from "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./shared/components/MainNavigation"

export default function App() {
   return (
      <BrowserRouter future={{ v7_startTransition: true }}>
         <MainNavigation />
         <main>
            <Routes>
               <Route path="/" element={<Users />} exact />
               <Route path="/places/new" element={<NewPlace />} exact />
               <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
         </main>
      </BrowserRouter>
   )
}

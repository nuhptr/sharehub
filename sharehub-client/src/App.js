import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Users from "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace"

// React.createElement('h1', {title: 'This Works'}, 'Hi, this is ReactJS')
const App = () => {
   return (
      <BrowserRouter future={{ v7_startTransition: true }}>
         <Routes>
            <Route path="/" element={<Users />} exact />
            <Route path="/places/new" element={<NewPlace />} exact />
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App

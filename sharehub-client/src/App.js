import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { styled } from "styled-components"

import Users from "./pages/user/users"
import NewPlace from "./pages/place/new-place"
import MainNavigation from "./components/navigation/main-navigation"
import UserPlace from "./pages/user-place/user-place"

const StyledMain = styled.main`
    margin-top: 6.5rem;
`

export default function App() {
    return (
        <BrowserRouter future={{ v7_startTransition: true }}>
            <MainNavigation />
            <StyledMain>
                <Routes>
                    <Route path="/" element={<Users />} exact />
                    <Route path="/:userId/places" element={<UserPlace />} />
                    <Route path="/places/new" element={<NewPlace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </StyledMain>
        </BrowserRouter>
    )
}

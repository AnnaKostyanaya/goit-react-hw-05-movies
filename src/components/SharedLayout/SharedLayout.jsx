import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./SharedLayout.styled";
import { FcFilmReel } from 'react-icons/fc';
import { IconContext } from "react-icons";

const SharedLayout = () => {
return (
<Container>
    <Header>
        <nav>
            <Link to="/" end>
            Home
            </Link>
            <Link to="/movies">Movies</Link>
        </nav>
        <IconContext.Provider value={{ size: "3em" }}>
            <div>
                <FcFilmReel />
            </div>
        </IconContext.Provider>
    </Header>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
    </Suspense>
</Container>
);
};

export default SharedLayout;
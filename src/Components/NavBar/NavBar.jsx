import { Link } from "react-router-dom"

const routes = [
    {
        path: "/",
        label: "Posts",
        id: "1",
    },
];

const NavBar = () => {
    return (
        <>
            <div>
                {routes.map((el) => (
                    <Link style={{ marginRight: "30px" }}
                        to={el.path}
                        key={`${el.id} ${el.label}`}
                    >
                        {el.label}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default NavBar
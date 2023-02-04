import { Link } from "./AuthNav.styled";


export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default AuthNav;
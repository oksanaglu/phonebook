import { Home, Title, Title2, Title3, TitleName, Button, Contacts } from "./HomePage.styled";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { authSelectors } from "redux/auth";
import { RiContactsBook2Line } from 'react-icons/ri';

export const HomePage = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName);

    return (
        <Home>
            <Title>Welcome to the Phonebook</Title>
            <RiContactsBook2Line size={250} color='#ffffff' />
          
            {!isLoggedIn && (
                <Title2>
                    Please register or login to start using the application:
                </Title2>
            )}

            {isLoggedIn ? (
                <Title3>
                    Hello, <TitleName>{name}!</TitleName>
                    <Link to="/contacts" >
                        <Contacts>Open your contacts</Contacts>
                    </Link>
                </Title3>
            ) : (
                <>
                    <Link to="/register">
                        <Button>
                            Registration
                        </Button>
                    </Link>

                    <Link to="/login">
                        <Button>
                            Login
                        </Button>
                    </Link>
                </>
            )}
        </Home>
    );
};

export default HomePage;



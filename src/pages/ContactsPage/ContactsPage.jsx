import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { Container, Error } from "./ContactsPage.styled";


export const ContactsPage = () => {
    const error = useSelector(authSelectors.getUserError);
    return (
        <Container>
            <ContactForm/>
            <Filter/>
            <ContactList/>
            {error && <Error>{error}</Error>}
        </Container>
    );
};

export default ContactsPage;
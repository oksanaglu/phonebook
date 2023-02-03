import PropTypes from 'prop-types';
import { Item, Text, Button } from './ContactItem.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contactsSliceApi';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <Text>
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <RotatingLines width="10" />} Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
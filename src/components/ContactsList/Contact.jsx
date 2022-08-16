import {Link, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { useDeleteContactMutation } from "redux/phonebookApiQuery";
import { IconButton } from 'components/ui';
import {FaUserMinus} from "react-icons/fa";
import {GrDocumentUpdate} from "react-icons/gr";


export const Contact = ({ id, name, number }) => {
  const location = useLocation();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
  const getInitials = () => name.slice(0,1).toUpperCase();

  return (
    <ListItem key={id} id={id}>
      <GapBox>
        <Initials>{getInitials()}</Initials>
          {name}: {number}
       </GapBox>
       <GapBox>
         <StyledLink to={`/update/${id}`} state={{ from: location }}>
            <IconButton
              type="button"
              aria-label="link to update contact page">
              <GrDocumentUpdate/>
            </IconButton>
        </StyledLink>
        <IconButton 
          onClick={() => deleteContact(id)}
          disabled={isDeleting}>
          <FaUserMinus/>
        </IconButton>
      </GapBox>
    </ListItem> 
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

const ListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: ${p => p.theme.space[1]}px;
box-shadow: 0px 5px 5px -5px ${p => p.theme.colors.tertiary};
background-color: ${p => p.theme.colors.white};
`;
const Initials = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: ${p => p.theme.radii.round};
color: ${p => p.theme.colors.white};
background-color: ${p => p.theme.colors.primary};
box-shadow: 
    -10px -10px 15px rgba(255, 255, 255, 0.6),
    10px 10px 15px rgba(70, 70, 70, 0.18);
`;
const GapBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: ${p => p.theme.space[1]}px;
`;
const StyledLink = styled(Link)`
display:block;
margin-left: auto;
`;

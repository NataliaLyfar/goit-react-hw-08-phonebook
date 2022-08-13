import styled from 'styled-components';
import { Section } from 'components/ui';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { breakpoints } from "styleConfig/breakpoints";
import BackPic from 'assets/contactBack.jpg'


const ContactsPage  = () => {
  return (
    <ContactsWrapper>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </ContactsWrapper>
  );
};

const ContactsWrapper = styled.div`
width: 100%;
height: 100%;
overflow: auto;
color: ${p => p.theme.colors.primary}; 
padding: 0 ${p => p.theme.space[2]}px;
display: flex;
flex-direction: column;
align-items: center;
  @media (${breakpoints.tablet}) {
    padding: 0 ${p => p.theme.space[3]}px;
  };
  @media (${breakpoints.laptop}) {
    padding: 0 ${p => p.theme.space[4]}px;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;
  };
margin: 0 auto;
background-color: white;
background-image: url(${BackPic});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;

export default ContactsPage;
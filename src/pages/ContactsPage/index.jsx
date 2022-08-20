import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Section } from 'components/ui';
import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { breakpoints } from "styleConfig/breakpoints";
import { 
  useCreateContactMutation,
  useGetContactsQuery,
 } from "redux/phonebookApiQuery";
import BackPic from 'assets/contactBack.jpg'


const ContactsPage  = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();
 
  const initialValues = {
    name: '',
    number: ''
  };
  
  const handleSubmit = (values, {resetForm}) => {
    const isContactExist = contacts?.find(({name}) => name.toLowerCase() === values.name.toLowerCase());
    if(isContactExist){
      return toast.info(`${values.name} is already in contacts`);
    };
    createContact(values);
    resetForm();
  };
  
  return (
    <ContactsWrapper>
      <Section>
        <ContactForm 
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          isLoading={isLoading}
        />
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
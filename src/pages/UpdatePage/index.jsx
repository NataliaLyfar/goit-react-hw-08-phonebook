import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "components/ContactForm";
import { SecondaryButton } from "components/ui";
import { FormPageContainer, UpdateFormWrapper } from "components/ui";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { 
  useUpdateContactMutation,
  useGetContactsQuery,
 } from "redux/phonebookApiQuery";


const UpdatePage  = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [url, setUrl] = useState(location.state.from);
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const index = contacts.findIndex(contact => id === contact.id);
  const [backLocation, setBackLocation] = useState(null);

  useEffect(() => {
    if (backLocation === null) setBackLocation(location?.state?.from ?? '/');
  }, [backLocation, location?.state?.from]);
    
  const onGoBack = () => navigate(backLocation);

  const initialValues={
    name: contacts[index].name,
    number: contacts[index].number
  };

  const handleSubmit = (values, {resetForm}) => {
    updateContact({id, ...values});
    setUrl(null);
    navigate(url);
    resetForm();
  };

  return (
    <FormPageContainer>
      <UpdateFormWrapper>
        <SecondaryButton onClick={onGoBack}><BsFillArrowLeftCircleFill/></SecondaryButton>
        <ContactForm 
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          isLoading={isLoading}
          update={true}/>
      </UpdateFormWrapper>
    </FormPageContainer>
  );
};


export default UpdatePage;
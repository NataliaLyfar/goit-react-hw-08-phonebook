import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateForm } from "components/ContactForm";
import { SecondaryButton } from "components/ui";
import { FormPageContainer, UpdateFormWrapper } from "components/ui";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


const UpdatePage  = () => {
  const [backLocation, setBackLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (backLocation === null) setBackLocation(location?.state?.from ?? '/');
  }, [backLocation, location?.state?.from]);
    
  const onGoBack = () => navigate(backLocation);

  return (
    <FormPageContainer>
      <UpdateFormWrapper>
        <SecondaryButton onClick={onGoBack}><BsFillArrowLeftCircleFill/></SecondaryButton>
        <UpdateForm/>
      </UpdateFormWrapper>
    </FormPageContainer>
  );
};


export default UpdatePage;
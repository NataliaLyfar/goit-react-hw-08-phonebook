import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authSelectors, authOperations } from "redux/auth";
import { Title, List, Box, TertiaryButton, SecondaryButton } from "components/ui";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";
import { breakpoints } from "styleConfig/breakpoints";
import styled from "styled-components";
import noAvatar from 'assets/noAvatar.jpg';
import addPhoto from 'assets/addPhoto.jpg';
import BackPic from 'assets/profileBack.jpg';



const ProfilePage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const token = useSelector(authSelectors.getToken);
  const [backLocation, setBackLocation] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {   
    const imageListRef = ref(storage, `${token}/images/`); 
    listAll(imageListRef).then((response) => {
      response.items.forEach(item => {getDownloadURL(item).then(url => {
        setImageList(prev => [url, ...prev]);
        });
      });
    });
  },[token]);

  useEffect(() => {
    if (backLocation === null) {
      setBackLocation(location?.state?.from ?? '/');
    };
  }, [backLocation, location?.state?.from]);

  const onGoBack = () => {
    navigate(backLocation);
};

useEffect(()=> {
  if(!imageUpload) return;
  const imageRef = ref(storage, `${token}/images/${imageUpload.name + nanoid()}`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    toast.info('Image Uploaded');
    getDownloadURL(snapshot.ref).then((url) => {
      setImageList(prev => [url, ...prev])
    })
  });
}, [token, imageUpload]);

  return (
    <ProfileWrapper>
      <Box>
        <SecondaryButton onClick={onGoBack}><BsFillArrowLeftCircleFill/></SecondaryButton>
        <Title>Personal Info</Title>
        <AvatarWrapper>
          {imageList.length > 0 ? (
            <Avatar  src={imageList[0]} alt="avatar" />
            ) : (
            <Avatar src={noAvatar} alt='noAvatar' />
            )
          }   
          <UpLoad>
            <AvatarInput type="file" onChange={e => setImageUpload(e.target.files[0])}/>
          </UpLoad>
        </AvatarWrapper>
        <List>
            <Item><Label>Name</Label><Value>{userName}</Value></Item>
            <Item><Label>Email</Label><Value>{userEmail}</Value></Item>
        </List>
        <TertiaryButton type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log out
        </TertiaryButton>
      </Box>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
height: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
background-color: white;
background-image: url(${BackPic});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;
const AvatarInput = styled.input`
position: absolute;
top: 0;
right: 0;
display: block;
width: 50px;
height: 50px;
opacity: 0;
z-index: 2;
  &:hover{
    cursor: pointer;
  };
`;
const Avatar = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 190px;
border-radius: ${p => p.theme.radii.normal};
background-color: transparent;
  @media (${breakpoints.tablet}) {
    width: 190px;
    height: 230px;
  };
`;
const UpLoad = styled.div`
z-index: 10;
position: absolute;
bottom: -10px;
right: -10px;
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
border-radius: ${p => p.theme.radii.round};
border: none;
background-color: transparent;
background-image: url(${addPhoto});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;
const AvatarWrapper = styled.div`
position: relative;
margin: ${p => p.theme.space[3]}px 0;
`;
const Item =styled.li`
display: flex;
flex-direction: column;
`;
const Label = styled.span`
padding-left: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.semibold};
color: ${p => p.theme.colors.primary};
`;
const Value = styled.span`
margin-bottom: ${p => p.theme.space[0]}px;
padding-left: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
`;

export default ProfilePage;
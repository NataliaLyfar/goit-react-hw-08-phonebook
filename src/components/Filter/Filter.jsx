import {FaSearch} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { Label, Input, Box } from "components/ui";
import { getFilter } from "redux/contacts";


export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  return (
    <Box>
      <Label htmlFor="filter"><FaSearch/>Find contacts by name</Label>
        <Input type='text' name='filter' 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />      
    </Box>
  );
};


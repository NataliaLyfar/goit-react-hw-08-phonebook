import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import styled from "styled-components";
import { useGetContactsQuery } from "redux/phonebookApiQuery";
import { getFilter } from "redux/contacts";
import { SpinnerDotted } from 'spinners-react';
import { Contact } from "./Contact";
import { List } from "components/ui";


export const ContactsList = () => {
  const contact = useSelector(getFilter);

  const checkedContacts = useMemo(() => {
    return createSelector(
      [res => res.data, (_, contact) => contact],
      (contacts, contact) => 
        contacts?.filter(({name}) => {
          return name.toLowerCase().includes(contact.toLowerCase());
          }).sort((a, b) => a.name.localeCompare(b.name)) ?? [],
    );
  },[]);

  const { filteredContacts, isFetching} = useGetContactsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredContacts: checkedContacts(result, contact)
      };
    },
  });

  return (
    <>
      {isFetching && <StyledSpinner speed={20} size={100} color={'#0e6769'}/>}
      <List>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact}/>)
        )}
      </List>
    </>
  );
};

const StyledSpinner = styled(SpinnerDotted)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;



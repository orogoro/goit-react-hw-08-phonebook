export const getContacts = state => state.phonebook.contactsReducer;
export const getFilter = state => state.phonebook.filter;
export const getLoading = state => state.phonebook.isLoading;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

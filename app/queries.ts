import { gql } from "@apollo/client";

export const CONTACTS_LIST_QUERY = gql`
  query ContactsList {
    contactsList {
      id
      name
      email
      message
    }
  }
`

export const CONTACT_MUTATION = gql`
  mutation Contact($data: ContactInput!) {
    contact(data: $data)
  }
`;
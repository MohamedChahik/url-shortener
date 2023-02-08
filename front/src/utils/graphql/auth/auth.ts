import { gql } from "@apollo/client";

export const CONNECT_USER = gql`
  mutation connectUser($input: LoginUserInput!) {
    authLogin(input: $input) {
      accessToken
      user {
        id
        lastName
      }
    }
  }
`;

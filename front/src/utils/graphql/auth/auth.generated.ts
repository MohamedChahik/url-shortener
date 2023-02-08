import * as Types from '../../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ConnectUserMutationVariables = Types.Exact<{
  input: Types.LoginUserInput;
}>;


export type ConnectUserMutation = { __typename?: 'Mutation', authLogin: { __typename?: 'UserOutput', accessToken: string, user: { __typename?: 'BaseUserOut', id: string, lastName: string } } };


export const ConnectUserDocument = gql`
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
export function useConnectUserMutation(baseOptions?: Apollo.MutationHookOptions<ConnectUserMutation, ConnectUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConnectUserMutation, ConnectUserMutationVariables>(ConnectUserDocument, options);
      }
export type ConnectUserMutationHookResult = ReturnType<typeof useConnectUserMutation>;
export type ConnectUserMutationResult = Apollo.MutationResult<ConnectUserMutation>;
export type ConnectUserMutationOptions = Apollo.BaseMutationOptions<ConnectUserMutation, ConnectUserMutationVariables>;
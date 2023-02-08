import * as Types from '../../../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateShortMutationVariables = Types.Exact<{
  input: Types.UrlInputDto;
}>;


export type CreateShortMutation = { __typename?: 'Mutation', shortenUrl: { __typename?: 'UrlOutput', id: string, shortUrl: string } };


export const CreateShortDocument = gql`
    mutation createShort($input: UrlInputDto!) {
  shortenUrl(input: $input) {
    id
    shortUrl
  }
}
    `;
export function useCreateShortMutation(baseOptions?: Apollo.MutationHookOptions<CreateShortMutation, CreateShortMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShortMutation, CreateShortMutationVariables>(CreateShortDocument, options);
      }
export type CreateShortMutationHookResult = ReturnType<typeof useCreateShortMutation>;
export type CreateShortMutationResult = Apollo.MutationResult<CreateShortMutation>;
export type CreateShortMutationOptions = Apollo.BaseMutationOptions<CreateShortMutation, CreateShortMutationVariables>;
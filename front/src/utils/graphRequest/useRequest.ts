import { useMutation, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import { MutationHookOptions } from "@apollo/client/react/types/types";

export const useMutationRequest = <T, U>(
  documentNode: DocumentNode,
  options?: MutationHookOptions<T, U>
) => {
  return useMutation(documentNode, options);
};

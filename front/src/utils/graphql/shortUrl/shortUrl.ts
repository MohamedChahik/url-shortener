import gql from "graphql-tag";

export const CREATE_SHORT_URL = gql`
  mutation createShortUrl($input: UrlInputDto!) {
    shortenUrl(input: $input) {
      id
      shortUrl
    }
  }
`;

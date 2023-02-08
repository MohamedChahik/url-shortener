import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { FC, PropsWithChildren } from "react";
import { cache } from "./cache";
import getErrorType, { UNAUTHORIZED } from "./errors";

const params = {
	link: ApolloLink.from([
		onError(({ graphQLErrors }) => {
			if (graphQLErrors)
				graphQLErrors.forEach(({ message, extensions }) => {
					if (message) {
						const error = getErrorType(
							message.toUpperCase(),
							extensions.response?.statusCode,
						);
						if (error.statusCode === UNAUTHORIZED) {
							localStorage.removeItem("@connectUser");
							window.location.href = `${window.location.origin}/`;
							return;
							// localStorage.removeItem("@connectUser");
							// window.location.href = `${window.location.origin}/`;
						}
					}
				});
		}),
		setContext((_, { headers }) => {
			// const user = localStorage.getItem("@connectUser");
			const token = localStorage.getItem("accessToken");
			// const { auth } = JSON.parse(user ?? "");
			return {
				headers: {
					...headers,
					authorization: `Bearer ${token}`,
				},
			};
		}),
		new HttpLink({
			uri: process.env.REACT_APP_API ?? "",
			fetchOptions: {
				notifyOnNetworkStatusChange: true,
			},
		}),
	]),
	cache,
};

const client = new ApolloClient(params);

export const GraphqlProvider: FC<PropsWithChildren<unknown>> = ({
	children,
}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

// import {
// 	ApolloClient,
// 	ApolloLink,
// 	ApolloProvider,
// 	HttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { onError } from "@apollo/client/link/error";
// import { FC, PropsWithChildren } from "react";
// import { cache } from "./cache";
// import getErrorType, { UNAUTHORIZED } from "./errors";

// const params = {
// 	link: ApolloLink.from([
// 		onError(({ graphQLErrors }) => {
// 			if (graphQLErrors)
// 				graphQLErrors.forEach(({ message, extensions }) => {
// 					if (message) {
// 						const error = getErrorType(
// 							message.toUpperCase(),
// 							extensions.response.statusCode,
// 						);
// 						if (error.statusCode === UNAUTHORIZED) {
// 							localStorage.removeItem("accessToken");
// 							window.location.href = `${window.location.origin}/login`;
// 							return;
// 						}
// 					}
// 				});
// 		}),
// 		setContext((_, { headers }) => {
// 			const token = localStorage.getItem("accessToken");
// 			console.log("token", token);
// 			return {
// 				headers: {
// 					...headers,
// 					authorization: `Bearer ${token}`,
// 				},
// 			};
// 		}),
// 		new HttpLink({
// 			uri: process.env.REACT_APP_API ?? "",
// 			fetchOptions: {
// 				notifyOnNetworkStatusChange: true,
// 			},
// 		}),
// 	]),
// 	cache,
// };

// const client = new ApolloClient(params);

// export const GraphqlProvider: FC<PropsWithChildren<unknown>> = ({
// 	children,
// }) => {
// 	return <ApolloProvider client={client}>{children}</ApolloProvider>;
// };

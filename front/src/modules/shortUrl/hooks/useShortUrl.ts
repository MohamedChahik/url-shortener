import { ChangeEvent, FormEvent, useState } from "react";
import { useNotifications } from "../../../config/notifications/NotificationsProvider";
import { CREATE_SHORT_URL } from "../../../utils/graphql/shortUrl/shortUrl";
import {
	CreateShortMutation,
	CreateShortMutationVariables,
} from "../../../utils/graphql/shortUrl/shortUrl.generated";
import { useMutationRequest } from "../../../utils/graphRequest/useRequest";

export const WAITING_TIME = 5000;

export const useShortUrl = () => {
	const [text, setText] = useState<string>("");
	const [createShortUrl, { data, loading }] = useMutationRequest<
		CreateShortMutation,
		CreateShortMutationVariables
	>(CREATE_SHORT_URL);

	const { confirmRef } = useNotifications();

	const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setText(event.target.value);
	};

	const handleCloseDialog = (
		callback: (isOpen: boolean, timeId: NodeJS.Timer) => void,
	) => {
		const timeId = setInterval(() => {
			callback(false, timeId);
		}, WAITING_TIME);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		if (!text.length) console.log("Please enter");
		event.preventDefault();

		await createShortUrl({
			variables: {
				input: {
					longUrl: text,
				},
			},
			onCompleted: () => {
				confirmRef.current({
					content: "shurtUrl generer avec success",
					onCancel: () => handleCloseDialog,
					isSuccess: true,
				});
			},
			onError: err => {
				console.log(err);
				confirmRef.current({
					content: err.message,
					onCancel: () => handleCloseDialog,
					isSuccess: false,
				});
			},
		});

		setText("");
	};

	return {
		shortUrl: data?.shortenUrl.shortUrl ?? "",
		text,
		loading,
		handleChangeText,
		handleSubmit,
	};
};

import Loader from "../../utils/ui/Loader";
import { useShortUrl } from "./hooks/useShortUrl";
import "./short.url.css";

const ShortUrl = () => {
	const { text, handleChangeText, handleSubmit, loading, shortUrl } =
		useShortUrl();

	const link = () => (
		<a href={shortUrl} target="_blank">
			{shortUrl}
		</a>
	);

	return (
		<>
			<div className="title">
				<h1>Raccourcisseur d'url</h1>
			</div>
			<div className="form_short_url">
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={text}
							className="text"
							onChange={handleChangeText}
							placeholder="https://example.com"
						/>
						<button type="submit">Raccourcir</button>
					</form>
				</div>
				<div>{loading ? <Loader /> : link()}</div>
			</div>
		</>
	);
};

export default ShortUrl;

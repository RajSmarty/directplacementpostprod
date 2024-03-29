import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const PasswordReset = () => {
	const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `https://directplacement.herokuapp.com/api/password-reset/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/admin";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<Fragment>
			{validUrl ? (
				<section className="login_sec">
					<div className="login_area">
						<div >
							<form style={{backgroundColor:"transparent"}} className={styles.form_container} onSubmit={handleSubmit}>
								<h1 style={{color:"white", marginBottom:"0.5em"}}>Add New Password</h1>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									required
									className={styles.input}
								/>
								{error && <div className={styles.error_msg}>{error}</div>}
								{msg && <div className={styles.success_msg}>{msg}</div>}
								<button type="submit" className={styles.green_btn}>
									Submit
								</button>
							</form>
						</div>
					</div>
				</section>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default PasswordReset;

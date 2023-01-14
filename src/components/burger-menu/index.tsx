import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.css";
import cancel from "assets/cancel.png";
import nav from "assets/menu.png";
import { SpecialText, LinkText } from "ui/text";
import { Link } from "react-router-dom";
import { useEmailState, useTokenState, useTokenValeu } from "hooks";

export function BurgerMenu() {
	const navigate = useNavigate();
	const tokenValue = useTokenValeu();
	const [open, setOpen] = useState(false);
	const [token, setToken] = useTokenState();
	const [email, setEmail] = useEmailState();
	let emailValue: string;

	function handleToggle() {
		setOpen(!open);
	}

	function handleSession() {
		setToken("");
		setEmail("");
		sessionStorage.removeItem("local_data");
		navigate("/");
		setOpen(!open);
	}

	useEffect(() => {
		if (email) {
			emailValue = email;
		}
	}, [email]);

	return (
		<div>
			<img onClick={handleToggle} src={nav} className={styles.open_nav} />
			<div className={`${styles.menuNav} ${open ? styles.showMenu : ""}`}>
				<img onClick={handleToggle} src={cancel} className={styles.close} />
				<ul className={styles.menu_ul}>
					<li onClick={handleToggle} className={styles.menu_li}>
						<Link
							to={tokenValue ? "/mydata" : "/signin"}
							className={styles.link}
						>
							Mis datos
						</Link>
					</li>
					<li onClick={handleToggle} className={styles.menu_li}>
						<Link to={tokenValue ? "/pets" : "/signin"} className={styles.link}>
							Mis mascotas reportadas
						</Link>
					</li>
					<li onClick={handleToggle} className={styles.menu_li}>
						<Link
							to={tokenValue ? "/report" : "/signin"}
							className={styles.link}
						>
							Reportar mascota
						</Link>
					</li>
					<li onClick={handleToggle} className={styles.menu_li}>
						{tokenValue ? (
							<div className={styles.user}>
								<SpecialText>{email}</SpecialText>
								<LinkText onClick={handleSession}>cerrar sesión</LinkText>
							</div>
						) : (
							<Link to={"/signin"} className={styles.link}>
								Iniciar sesión
							</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}

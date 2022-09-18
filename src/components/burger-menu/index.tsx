import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.css";
import cancel from "assets/cancel.png";
import nav from "assets/menu.png";
import { SpecialText, LinkText } from "ui/text";
import { Link } from "react-router-dom";
import { useEmailValue, useTokenState, useTokenValeu } from "hooks";

export function BurgerMenu() {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const email = useEmailValue();
	const [token, setToken] = useTokenState();
	const tokenValue = useTokenValeu();
	function handleToggle() {
		setOpen(!open);
	}
	function handleSession() {
		setToken("");
		navigate("/");
	}
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
				</ul>
				{tokenValue ? (
					<div className={styles.user}>
						<SpecialText>{email}</SpecialText>
						<LinkText onClick={handleSession}>cerrar sesión</LinkText>
					</div>
				) : null}
			</div>
		</div>
	);
}

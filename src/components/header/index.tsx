import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.css";
import logo from "assets/logo.png";
import { BurgerMenu } from "components/burger-menu";
import { SpecialText, LinkText } from "ui/text";
import { Link } from "react-router-dom";
import { useEmailState, useTokenState, useTokenValeu } from "hooks";

export function CustomHeader() {
	const navigate = useNavigate();
	const tokenValue = useTokenValeu();
	const [token, setToken] = useTokenState();
	const [email, setEmail] = useEmailState();

	function handleSession() {
		setToken("");
		setEmail("");
		sessionStorage.removeItem("local_data");
		navigate("/");
	}

	function handleClick() {
		navigate("/home");
	}

	return (
		<header className={styles.header}>
			<img onClick={handleClick} src={logo} className={styles.logo} />
			<BurgerMenu></BurgerMenu>
			<ul className={styles.desktop_ul}>
				<li className={styles.desktop_li}>
					<Link to={tokenValue ? "/mydata" : "/signin"} className={styles.link}>
						Mis datos
					</Link>
				</li>
				<li className={styles.desktop_li}>
					<Link to={tokenValue ? "/pets" : "/signin"} className={styles.link}>
						Mis mascotas reportadas
					</Link>
				</li>
				<li className={styles.desktop_li}>
					<Link to={tokenValue ? "/report" : "/signin"} className={styles.link}>
						Reportar mascota
					</Link>
				</li>
			</ul>
			{tokenValue ? (
				<div className={styles.desktop_user}>
					<SpecialText>{email}</SpecialText>
					<LinkText onClick={handleSession}>cerrar sesión</LinkText>
				</div>
			) : null}
		</header>
	);
}

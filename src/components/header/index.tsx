import React from "react";
import styles from "./index.css";
import logo from "assets/logo.png";
import { BurgerMenu } from "components/burger-menu";
import { SpecialText, LinkText } from "ui/text";
import { Link } from "react-router-dom";

export function CustomHeader() {
	return (
		<header className={styles.header}>
			<img src={logo} className={styles.logo} />
			<BurgerMenu></BurgerMenu>
			<ul className={styles.desktop_ul}>
				<li className={styles.desktop_li}>
					<Link to={"/mydata"} className={styles.link}>
						Mis datos
					</Link>
				</li>
				<li className={styles.desktop_li}>
					<Link to={"/pets"} className={styles.link}>
						Mis mascotas reportadas
					</Link>
				</li>
				<li className={styles.desktop_li}>
					<Link to={"/report"} className={styles.link}>
						Reportar mascota
					</Link>
				</li>
			</ul>
			<div className={styles.desktop_user}>
				<SpecialText>leandro@mail</SpecialText>
				<LinkText>cerrar sesión</LinkText>
			</div>
		</header>
	);
}

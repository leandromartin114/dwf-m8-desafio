import React, { useState } from "react";
import styles from "./index.css";
import cancel from "assets/cancel.png";
import nav from "assets/menu.png";
import { SpecialText, LinkText } from "ui/text";
import { Link } from "react-router-dom";

export function BurgerMenu() {
	const [open, setOpen] = useState(false);
	function handleToggle() {
		setOpen(!open);
	}
	return (
		<div>
			<img onClick={handleToggle} src={nav} className={styles.open_nav} />
			<div className={`${styles.menuNav} ${open ? styles.showMenu : ""}`}>
				<img onClick={handleToggle} src={cancel} className={styles.close} />
				<ul className={styles.menu_ul}>
					<li className={styles.menu_li}>
						<Link to={"/mydata"} className={styles.link}>
							Mis datos
						</Link>
					</li>
					<li className={styles.menu_li}>
						<Link to={"/pets"} className={styles.link}>
							Mis mascotas reportadas
						</Link>
					</li>
					<li className={styles.menu_li}>
						<Link to={"/report"} className={styles.link}>
							Reportar mascota
						</Link>
					</li>
				</ul>
				<div className={styles.user}>
					<SpecialText>leandro@mail</SpecialText>
					<LinkText>cerrar sesión</LinkText>
				</div>
			</div>
		</div>
	);
}

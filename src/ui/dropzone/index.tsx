import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./index.css";
import { GreenButton } from "ui/buttons";

type DropzoneProps = {
	onLoadImg?: (any) => any;
};
export function MyDropzone(props: DropzoneProps) {
	const [img, setImg] = useState(null);
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps, open } = useDropzone({
		accept: {
			"image/*": [".jpeg", ".png"],
		},
		noClick: true,
		onDrop: (acceptedFiles) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				setImg(event.target.result);
				if (props.onLoadImg) {
					props.onLoadImg(event.target.result);
				}
			};
			reader.readAsDataURL(acceptedFiles[0]);
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});
	const thumbs = files.map((file) => (
		<div
			style={{
				display: "inline-flex",
				borderRadius: "2px",
				border: "2px solid rgb(128, 38, 212)",
				marginBottom: "8px",
				marginRight: "8px",
				maxWidth: "290px",
				maxHeight: "290px",
				padding: "8px",
				boxSizing: "border-box",
			}}
			key={file.name}
		>
			<div
				style={{
					display: "flex",
					minWidth: "0",
					overflow: "hidden",
					objectFit: "contain",
					objectPosition: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src={file.preview}
					style={{
						display: "block",
						width: "auto",
						height: "100%",
						objectFit: "contain",
						objectPosition: "center",
					}}
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(file.preview);
					}}
				/>
			</div>
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<section className='container'>
			<aside className={styles.container}>{thumbs}</aside>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<div style={{ width: "290px" }}>
					<GreenButton type='button' onClick={open}>
						Agregar o Modificar foto
					</GreenButton>
				</div>
			</div>
		</section>
	);
}

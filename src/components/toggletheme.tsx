"use client";

if (
	localStorage.theme === "dark" ||
	(!("theme" in localStorage) &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	console.log("oi ta dark");
	document.body.classList.add("dark");
} else {
	document.body.classList.remove("dark");
}

const toggleDark = () => {
	localStorage.theme = "dark";
};
const toggleWhite = () => {
	localStorage.theme = "white";
};
export function ThemeToggle() {
	return (
		<div>
			<button onClick={toggleDark}>dark theme</button> <br />
			<button onClick={toggleWhite}>light theme</button>
		</div>
	);
}

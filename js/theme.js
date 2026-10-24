// 1.
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
}

// 2.
document.addEventListener('DOMContentLoaded', () => {
	const themeSelect = document.getElementById('theme-select');

	// if we on setting
	if (themeSelect) {
		if (savedTheme === 'dark') {
			themeSelect.value = 'dark';
		}
		//listen for change
		themeSelect.addEventListener('change', (event) => {
			const selectedTheme = event.target.value;
			if (selectedTheme === 'dark') {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			} else {
document.documentElement.removeAttribute('data-theme');
				localStorage.setItem('theme', 'light');
			}
		});
	}
});
// 1.
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
	document.documentElement.setAttribute('data-theme', 'dark');
}

// 2.
document.addEventListener('DOMContentLoaded', () => {
	updateHomeIcon();
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
				updateHomeIcon();
			} else {
document.documentElement.removeAttribute('data-theme');
				localStorage.setItem('theme', 'light');
				updateHomeIcon();
			}
		});
	}
});
// 3.
function updateHomeIcon() {
	const homeIcon = document.querySelector('.home');

	if (!homeIcon) return;

	if (document.documentElement.getAttribute('data-theme') === 'dark') {
		homeIcon.src = 'media/images/darkhome.png';
	} else {
		homeIcon.src = 'media/images/home.png';
	}
}
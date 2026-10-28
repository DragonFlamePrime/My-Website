// 1.
const savedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    }
    else if (theme === 'system') {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    updateHomeIcon();
}

applyTheme(savedTheme || 'system');
// 2.
document.addEventListener('DOMContentLoaded', () => {
	updateHomeIcon();
	const themeSelect = document.getElementById('theme-select');

	// if we on setting
	if (themeSelect) {
		themeSelect.value = savedTheme || 'system';
		//listen for change
		themeSelect.addEventListener('change', (event) => {
			const selectedTheme = event.target.value;
			localStorage.setItem('theme', selectedTheme);
applyTheme(selectedTheme);
		});
	}
});

function updateHomeIcon() {
    const homeIcon = document.querySelector('.home');

    if (!homeIcon) return;

    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        homeIcon.src = 'media/images/darkhome.png';
    } else {
        homeIcon.src = 'media/images/home.png';
    }
}

window.matchMedia('(prefers-color-scheme: dark)')
.addEventListener('change', () => {

    if (localStorage.getItem('theme') === 'system') {
        applyTheme('system');
    }

});
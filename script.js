const button = document.querySelector('.copy-btn')

const addToClipboard = async (link) => {
	await navigator.clipboard.writeText(link);
}

const copyLink = async (link) => {
	const copied = await addToClipboard(link)
	button.innerText = 'Скопировано!'
	setTimeout(() => {
		button.innerText = 'Скопировать IP'
	}, 3000)
};

button.addEventListener('click', () => copyLink('play.vimeline.online'))


import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const dataPath = resolve('data.json');

async function getUsedThemes() {
	const data = await readFile(dataPath);
	const parsedData = JSON.parse(data);
	const usedThemes = parsedData?.usedThemes;

	return usedThemes;
}

async function setUsedTheme(theme) {
	const usedThemes = await getUsedThemes();
	usedThemes.push(theme);

	await writeFile(dataPath, JSON.stringify({ usedThemes }));
}

async function verifyThemeWasUsed(theme) {
	const usedThemes = await getUsedThemes();

	if (usedThemes.includes(theme)) {
		return true;
	} else {
		return false;
	}
}

export { verifyThemeWasUsed, getUsedThemes, setUsedTheme };

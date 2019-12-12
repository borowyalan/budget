export const collectIdsAndDocs = doc => {
	return { id: doc.id, ...doc.data() };
};

export const getFormattedDate = timestamp => {
	const date = new Date(timestamp);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();

	const formattedDate = `${day}.${month}.${year}`;

	return formattedDate;
};

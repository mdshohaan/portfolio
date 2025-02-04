export function calculateAge(birthDate: string): number {
	const bDate = new Date(birthDate);
	const today = new Date();
	let age = today.getFullYear() - bDate.getFullYear();
	const monthDifference = today.getMonth() - bDate.getMonth();

	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < bDate.getDate())
	) {
		age--;
	}

	return age;
}

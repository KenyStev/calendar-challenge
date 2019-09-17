export function validateReminder(object: any): any {
	const validObject = { ...object };

	if (validObject.text.length > 30) {
		return {
			invalid: true,
			error: 'text must be less or equal to 30'
		}
	}

	if (validObject.hour === undefined) {
		return {
			invalid: true,
			error: 'hour needed'
		}
	}

	if (validObject.minute === undefined) {
		return {
			invalid: true,
			error: 'minute needed'
		}
	}

	if (!validObject.city) {
		return {
			invalid: true,
			error: 'city needed'
		}
	}

	delete validObject.errors;
	return validObject;
}

export function toPascalCase(str) {
	let parts = str.split(' ')
	let final = ''
	for (let part of parts) {
		final += part[0].toUpperCase() + part.slice(1)
	}
	return final
}

export function toSnakeCase(str) {
	return str.toLowerCase().split(' ').join('_')
}
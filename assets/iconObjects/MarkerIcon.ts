/* eslint-disable no-undef */

type MarkerIcon = {
	path?: string
	fillColor?: string
	fillOpacity?: number
	strokeWeight?: number
	rotation?: number
	scale?: number
	anchor?: any
}

export let MarkerIcon = (
	obj: MarkerIcon = {
		path: '',
		fillColor: 'gray',
		fillOpacity: 1,
		strokeWeight: 0,
		rotation: 0,
		scale: 0.03,
	}
) => {
	return {
		...obj,
	}
}

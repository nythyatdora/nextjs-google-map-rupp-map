import * as icons from '../assets/iconObjects'
import { LocationType } from '../data/locations'

const iconTypeMapped = [
	{
		icon: icons.BookSvg,
		type: LocationType.LIBRARY,
	},
	{
		icon: icons.BuildingSvg,
		type: LocationType.BUILDING,
	},
	{
		icon: icons.CoffeSvg,
		type: LocationType.COFFEE,
	},
	{
		icon: icons.DumbBellSvg,
		type: LocationType.GYM,
	},
	{
		icon: icons.DungeonSvg,
		type: LocationType.GATE,
	},
	{
		icon: icons.FlagSvg,
		type: LocationType.FLAG,
	},
	{
		icon: icons.ParkingSvg,
		type: LocationType.PARKING_LOTS,
	},
	{
		icon: icons.QuestionSvg,
		type: LocationType.OTHERS,
	},
	{
		icon: icons.SpaceShuttleSvg,
		type: LocationType.DOMBOUL_TUK_HALL,
	},
	{
		icon: icons.UntensilsSvg,
		type: LocationType.CAFETERIA,
	},
	{
		icon: icons.BasketballSvg,
		type: LocationType.BASKETBALL_FIELD,
	},
	{
		icon: icons.FutbolSvg,
		type: LocationType.FOOTBALL_FIELD,
	},
]

export const getLocationIcon = (
	locationType: LocationType,
	anchorPoint: any
): any => {
	for (let item of iconTypeMapped) {
		if (item.type === locationType) {
			return {
				...item.icon,
				anchor: anchorPoint,
			}
		}
	}
	return null
}

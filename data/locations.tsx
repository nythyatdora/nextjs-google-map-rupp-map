export type Marker = {
	name: string
	type: LocationType
	position: {
		lat: number
		lng: number
	}
	icon?: {
		anchor: {
			x: number
			y: number
		}
	}
}

export enum LocationType {
	BUILDING,
	LIBRARY,
	CAFETERIA,
	COFFEE,
	GYM,
	PARKING_LOTS,
	FOOTBALL_FIELD,
	BASKETBALL_FIELD,
	FLAG,
	GATE,
	DOMBOUL_TUK_HALL,
	OTHERS,
}

export const markers: Marker[] = [
	{
		name: 'Cambodia Flag',
		type: LocationType.FLAG,
		position: {
			lat: 11.567994153806316,
			lng: 104.89148856485798,
		},
		icon: {
			anchor: {
				x: 256,
				y: 256,
			},
		},
	},
	{
		name: 'Domboul Touk Hall',
		type: LocationType.DOMBOUL_TUK_HALL,
		position: {
			lat: 11.56801828875792,
			lng: 104.89180239098403,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'Techno Startup Center',
		type: LocationType.BUILDING,
		position: {
			lat: 11.568357922178489,
			lng: 104.89207463522189,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP Blend Cafe',
		type: LocationType.COFFEE,
		position: {
			lat: 11.568744210733803,
			lng: 104.89206806166149,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP Football Field',
		type: LocationType.FOOTBALL_FIELD,
		position: {
			lat: 11.569542568177368,
			lng: 104.89165586177708,
		},
		icon: {
			anchor: {
				x: 256,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Building A',
		type: LocationType.BUILDING,
		position: {
			lat: 11.56838213711628,
			lng: 104.89066044674352,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Library',
		type: LocationType.LIBRARY,
		position: {
			lat: 11.56833070950186,
			lng: 104.88944857117401,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Library',
		type: LocationType.LIBRARY,
		position: {
			lat: 11.56833070950186,
			lng: 104.88906358338338,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Cambodia Korea Cooperation Center (CKCC)',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569045930188782,
			lng: 104.88848012630345,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Building A: Cateria',
		type: LocationType.CAFETERIA,
		position: {
			lat: 11.568804180161168,
			lng: 104.89063394014241,
		},
		icon: {
			anchor: {
				x: 203,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Building B',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569900147565312,
			lng: 104.8895382875715,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Building D',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569419018216243,
			lng: 104.88911056647639,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Building B: Parking Lots',
		type: LocationType.PARKING_LOTS,
		position: {
			lat: 11.569938025660997,
			lng: 104.88883333406996,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'STEM Building',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569618771811932,
			lng: 104.88999557439686,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Office',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569204906995319,
			lng: 104.89030134622456,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Niset Coffee 2',
		type: LocationType.COFFEE,
		position: {
			lat: 11.570001760454145,
			lng: 104.89042171423395,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP GYM',
		type: LocationType.GYM,
		position: {
			lat: 11.570088359210114,
			lng: 104.89037043567085,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'Building B: Cafeteria',
		type: LocationType.CAFETERIA,
		position: {
			lat: 11.56988283592469,
			lng: 104.89065862125983,
		},
		icon: {
			anchor: {
				x: 203,
				y: 256,
			},
		},
	},
	{
		name: 'Building A: Parking Lots',
		type: LocationType.PARKING_LOTS,
		position: {
			lat: 11.568013235676924,
			lng: 104.89072781745793,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Building C',
		type: LocationType.BUILDING,
		position: {
			lat: 11.57022153495874,
			lng: 104.89094518069633,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Building T',
		type: LocationType.BUILDING,
		position: {
			lat: 11.570318342442095,
			lng: 104.89176782863849,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'Niset Cafe',
		type: LocationType.COFFEE,
		position: {
			lat: 11.568708066628654,
			lng: 104.88963032084258,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #1',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569283570026029,
			lng: 104.89322006203763,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #2',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569653000555764,
			lng: 104.89354969283133,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #3',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569223747970433,
			lng: 104.89275078086327,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #4',
		type: LocationType.BUILDING,
		position: {
			lat: 11.568871633954057,
			lng: 104.89247183112572,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #5',
		type: LocationType.BUILDING,
		position: {
			lat: 11.56884535677089,
			lng: 104.89296803979347,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #6',
		type: LocationType.BUILDING,
		position: {
			lat: 11.569854299124362,
			lng: 104.89289305630726,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #7',
		type: LocationType.BUILDING,
		position: {
			lat: 11.57009079283149,
			lng: 104.89362798157734,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #8',
		type: LocationType.BUILDING,
		position: {
			lat: 11.56984268387656,
			lng: 104.89347444054904,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL #9',
		type: LocationType.BUILDING,
		position: {
			lat: 11.570222178137975,
			lng: 104.8934590024094,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL: Parking Lots 1',
		type: LocationType.PARKING_LOTS,
		position: {
			lat: 11.569734551385613,
			lng: 104.89223574149553,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL: Parking Lots 2',
		type: LocationType.PARKING_LOTS,
		position: {
			lat: 11.570542579618216,
			lng: 104.89369066202218,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL: Parking Lots 3',
		type: LocationType.PARKING_LOTS,
		position: {
			lat: 11.568487192145797,
			lng: 104.89283077669043,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL - Nature Coffee',
		type: LocationType.COFFEE,
		position: {
			lat: 11.569205215938155,
			lng: 104.89366684358116,
		},
		icon: {
			anchor: {
				x: 320,
				y: 256,
			},
		},
	},
	{
		name: 'Cambodia Japanese Culture Center (CJCC)',
		type: LocationType.BUILDING,
		position: {
			lat: 11.568929666125877,
			lng: 104.89368071749226,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'IFL - Food Court',
		type: LocationType.CAFETERIA,
		position: {
			lat: 11.569632257628555,
			lng: 104.89311299744648,
		},
		icon: {
			anchor: {
				x: 203,
				y: 256,
			},
		},
	},
	{
		name: 'CJCC Hall',
		type: LocationType.BUILDING,
		position: {
			lat: 11.56944158290837,
			lng: 104.89367441555052,
		},
		icon: {
			anchor: {
				x: 224,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Gate 1',
		type: LocationType.GATE,
		position: {
			lat: 11.567368452449099,
			lng: 104.89160541720123,
		},
		icon: {
			anchor: {
				x: 256,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Gate 2',
		type: LocationType.GATE,
		position: {
			lat: 11.5679268738948,
			lng: 104.88836010628792,
		},
		icon: {
			anchor: {
				x: 256,
				y: 256,
			},
		},
	},
	{
		name: 'IFL: Gate',
		type: LocationType.GATE,
		position: {
			lat: 11.568026230962325,
			lng: 104.89336516659888,
		},
		icon: {
			anchor: {
				x: 256,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Basketball Court',
		type: LocationType.BASKETBALL_FIELD,
		position: {
			lat: 11.568745750657373,
			lng: 104.88996339357034,
		},
		icon: {
			anchor: {
				x: 248,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP: Cateria 3',
		type: LocationType.CAFETERIA,
		position: { lat: 11.568931805031482, lng: 104.89196547263822 },
		icon: {
			anchor: {
				x: 203,
				y: 256,
			},
		},
	},
	{
		name: 'RUPP Park',
		type: LocationType.OTHERS,
		position: {
			lat: 11.569838113518616,
			lng: 104.89098262112732,
		},
		icon: {
			anchor: {
				x: 142,
				y: 256,
			},
		},
	},
]

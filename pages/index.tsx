import { Component, createRef } from 'react'
import { GetStaticProps } from 'next'
import styled, { createGlobalStyle } from 'styled-components'
import { Loader } from '@googlemaps/js-api-loader'
import { getLocationIcon } from '../helpers/getLocationIcon'

const Map = styled.div`
	width: 100%;
	height: 100%;
`

const GlobalStyle = createGlobalStyle`
	html, body {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}

	#__next {
		width: 100%;
		height: 100%;
	}
`

interface Props {}

export default class Home extends Component<Props> {
	loader: Loader
	mapRef: any
	state = {
		markers: [],
	}
	map: google.maps.Map | null
	infoWindow: google.maps.InfoWindow | null | undefined

	constructor(props: Readonly<Props>) {
		super(props)
		this.mapRef = createRef<HTMLElement>()

		const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID as string
		const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY as string
		this.loader = new Loader({
			apiKey: API_KEY,
			mapIds: [MAP_ID],
		})
		this.map = null
	}

	async componentDidMount() {
		const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID as string
		const RUPP = { lat: 11.56856768536689, lng: 104.8906473511875 }
		await this.loader.load().then(() => {
			const google = window.google
			this.map = new google.maps.Map(this.mapRef.current, {
				mapId: MAP_ID,
				center: RUPP,
				zoom: 18,
				mapTypeControl: false,
				streetViewControl: false,
			} as any)

			this.map.addListener('click', (mapsMouseEvent) => {
				if (this.infoWindow != null) {
					this.infoWindow.close()
				}

				this.infoWindow = new google.maps.InfoWindow({
					position: mapsMouseEvent.latLng,
				})
				this.infoWindow.setContent(
					JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
				)
				this.infoWindow.open(this.map)
			})
		})

		const response = await (
			await fetch('http://localhost:3000/api/markers')
		).json()

		const markers = []
		for (let location of response.data) {
			const marker = new google.maps.Marker({
				title: location.name,
				position: location.position,
				map: this.map,
				icon: getLocationIcon(
					location.type,
					new google.maps.Point(
						location.icon?.anchor?.x || 0,
						location.icon?.anchor?.y || 0
					)
				),
			})
			markers.push(marker)
		}

		this.setState({
			markers: markers,
		})
	}

	render() {
		return (
			<>
				<GlobalStyle />
				<Map ref={this.mapRef}></Map>
			</>
		)
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {},
	}
}

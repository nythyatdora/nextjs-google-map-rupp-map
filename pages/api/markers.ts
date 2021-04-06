import { NextApiRequest, NextApiResponse } from 'next'
import { markers } from '../../data/locations'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		data: markers,
	})
}

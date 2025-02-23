import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../db/mongoose';
import CommunityModel from '../../../db/models/communityModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  const communities = await CommunityModel.find();
  console.log(communities);
  res.status(200).json(communities);
}
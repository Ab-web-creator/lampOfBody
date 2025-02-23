import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
});

export default mongoose.models.Community || mongoose.model('Community', CommunitySchema);
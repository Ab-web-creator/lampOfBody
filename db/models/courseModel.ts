import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
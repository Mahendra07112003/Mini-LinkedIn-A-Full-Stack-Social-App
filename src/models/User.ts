import mongoose, { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
}, {
  timestamps: true,
});

// Check if model already exists to prevent re-registering on hot reload
const User = models.User || model('User', userSchema);

export default User;

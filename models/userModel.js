import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, default: '' },
  address: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', UserSchema);

export default User;

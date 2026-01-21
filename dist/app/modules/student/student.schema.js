import { Schema, model } from 'mongoose';
export const studentSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'], required: true },
    dateOfBirts: { type: String, required: true },
    bladGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    address: { type: String, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    gurdian: { type: Object, required: true },
    depermant: { type: String, required: true },
    isActive: { type: String, enum: ['active', 'inactive'], required: true }
});
const User = model('Student', studentSchema);
export default User;

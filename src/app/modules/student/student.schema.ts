import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface.js';

export const studentSchema = new Schema<IStudent>({
  name: {
    type: String,
    required: [true, 'name is required'],
    set: (value: string) =>
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHER'],
    required: [true, 'gender is required'],
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  bloodGroup: {
    type: String,
    enum: {
      values: ['A+','A-','B+','B-','AB+','AB-','O+','O-'],
      message: 'invalid blood group',
    },
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phoneNumber: {
    type: String, // ✅ Number না
    required: true,
  },

  guardian: {
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    phone: { type: String, required: true },
  },

  department: {
    type: String,
    required: true,
  },

  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
});

const StudentModel = model<IStudent>('Student', studentSchema);
export default StudentModel;

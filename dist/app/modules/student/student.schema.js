import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../config/index.js';
// import { string } from 'joi';
const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        set: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
    },
    id: {
        type: String,
        required: [true, 'id is required']
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
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
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
//middewear 
studentSchema.pre('save', async function () {
    this.password = await (bcrypt.hash(this.password, Number(config.bcrypt_Salt)));
});
studentSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
//query middlwer
studentSchema.pre('find', function (next) {
    console.log(this);
});
studentSchema.statics.isExitsStudent = async function (id) {
    const exits = StudentModel.findOne({ id });
    return exits;
};
// studentSchema.methods.isUserExits=async function(id:string) {
//   const exits=StudentModel.findOne({id});
//   return exits;
// }
export const StudentModel = model('Student', studentSchema);

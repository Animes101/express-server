
import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface.js';


 export const studentSchema = new Schema<IStudent>({
  name: { type: String ,required : [true, 'name is Required'] , set: (value: string) => {

    const fristName= value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    return fristName === value;
  }},
  password:{type:String,required:true},
  age: { type: Number, required: true},
  gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'], required: [true, 'gender is Reqired ture'] },
  dateOfBirts:{type:String,required:true},
  bladGroup:{type:String,enum:{values:['A+','A-','B+','B-','AB+','AB-','O+','O-'], message:'blad gorup is this'}},
  address:{type:String,required:true},
  grade:{type:String,required:true},
  email:{type:String, required:true, unique:true},
  phoneNumber:{type:Number,required:true},
  gurdian:{type:Object,required:true},
  depermant:{type:String,required:true},
  isActive:{type:String,enum:['active','inactive'],required:true}   


});

const StudentModel=model<IStudent>('Student', studentSchema);


export default   StudentModel;


import { Model } from "mongoose";

export type Guardian = {
  fatherName: string;
  motherName: string;
  phone: string; // ✅ string (schema অনুযায়ী)
};

export interface IStudent {
  name: string;
  id:string;
  password: string;
  age: number;

  gender: 'MALE' | 'FEMALE' | 'OTHER';

  dateOfBirth: string; // ✅ spelling fix

  bloodGroup:
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-';

  address: string;
  grade: string;

  email: string;

  phoneNumber: string; // ✅ string, number না

  guardian: Guardian; // ✅ spelling fix + type fix

  department: string; // ✅ spelling fix

  isActive: 'active' | 'inactive';
}


export type StudentMethod={

   isUserExits(id:string): Promise<IStudent | null>
   
}

 export type StudentModels=Model<IStudent, Record<string, never>, StudentMethod>


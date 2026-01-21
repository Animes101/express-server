

export type guardian={
    fatherName:string;
    motherName:string;
    phoneNumber:number;
  };



export interface IStudent {
  name: string;
  password:string;
  age: number;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dateOfBirts:string;
  bladGroup?:'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address:string;
  grade: string;
  email:string;
  phoneNumber:number;
  gurdian:guardian;
  depermant:string;
  isActive:'active' | 'inactive'
}

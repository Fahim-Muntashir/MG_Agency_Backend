export type Name = {
    firstName: string;
    lastName: string;
}

export type Address = {
    country: string;
    city: string;
}

export type Employee = {
    id: string;
    name: Name;
    age: string;
    dateOfBirth: string;
    email: string;
    address: Address;
    phoneNumber: string;
    position: string;
    gender: 'Male' | 'Female';
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    isActive: "active" | 'blocked';
    profile: string;
    hobby: string;
}
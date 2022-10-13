export default class User {
    id: number
    email: string
    firstName: string
    lastName: string
    address: string
    phonenumber: string
    role: string

    constructor (id: number, email: string, firstName: string, lastName: string, address:string, phonenumber: string, role: string) {
        this.id = id
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.phonenumber = phonenumber
        this.role = role
    }
}
import User from "./User"

export default class Post {
    id: number
    text: string
    imageUrl: string
    author!: User
    comments: Post[]
    likes:User[]

    constructor (id: number, text: string, imageUrl: string, author: User, comments: Post[], likes:User[]) {
        this.id = id
        this.text = text
        this.imageUrl = imageUrl
        this.author = author
        this.comments = comments
        this.likes = likes
    }
}
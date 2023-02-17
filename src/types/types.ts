export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IPosts {
  userId: number
  id: number
  title: string
  body: string
}

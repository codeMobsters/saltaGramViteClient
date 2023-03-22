export type Post = {
    postId :number,
    Comments : Array<Comment> | null
    uploadedAt :Date,
    likes :number,
    description :string,
    pictureUrl :string,
    userId :number
}

export type Comment = {
    commentId :number,
    createdAt :Date,
    commentText :string,
    name :string,
    postId :number
}

export type CommentAddREquest = {
    postId :number,
    commentText :string,
    name :string
}

export type ImageCardProps = {
    postData: Post
    AddComment: (request :CommentAddREquest) => void
}


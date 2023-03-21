export type Picture = {
    pictureId :number,
    uploadedDate :Date,
    likes :number,
    description :string,
    url :string
}

export type Comment = {
    commentId :number,
    createdAtDate :Date,
    commentText :string,
    name :string
}
export type Picture = {
    pictureId :number,
    UploadedDate :Date,
    Likes :number,
    Description :string
}

export type Comment = {
    CommentId :number,
    CreatedAtDate :Date,
    CommentText :string,
    Name :string
}
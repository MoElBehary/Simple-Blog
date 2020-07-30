export class Blog {
    title: String;
    imgURL: String;
    author: { id: String, name: String };
    content: String;
    createdAt: { type: Date }
    id: String
}

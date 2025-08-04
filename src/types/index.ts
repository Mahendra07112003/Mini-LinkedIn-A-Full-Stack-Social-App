export type PostType = {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    _id: string;
    name: string;
  };
};
interface JwtPayload {
  userId: string;
}
type Post = {
  _id: string;
  content: string;
  createdAt: string;
};

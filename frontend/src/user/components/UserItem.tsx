import { User } from "../../types/user";

export interface UserItemProps {
  user: User;
}
export const UserItem = ({ user }: UserItemProps) => {
  return <li>{user.name}</li>;
};

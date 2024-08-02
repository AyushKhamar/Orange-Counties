import { User } from "../../types/user";
import { UserItem } from "./UserItem";

export interface UserListProps {
  data: User[];
}
export const UsersList = ({ data }: UserListProps) => {
  return (
    <>
      {data.length === 0 ? (
        <div className="center">Sorry, No Users till now</div>
      ) : (
        <div>
          <ul>
            {data.map((item) => {
              return <UserItem user={item} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

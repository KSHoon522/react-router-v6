import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>{" "}
      {/*followers를 사용한다면 절대 경로인 locathost:3000/followers에 가게 된다 -> /가 없는 상대 경로로 작성*/}
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
      {/* User 컴포넌트가 render하고 있는 자식들에게 context의 값을 전달하고 있음 */}
    </div>
  );
}
export default User;

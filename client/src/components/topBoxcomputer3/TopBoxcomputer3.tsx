import "./topBoxcomputer3.scss"
import {compsemester5th} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Sem 5 Toppers</h1>
      <p>Winter 2024 Computer</p>
      <div className="list">
        {compsemester5th.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount"> {user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
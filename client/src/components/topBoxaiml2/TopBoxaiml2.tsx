import "./topBoxaiml2.scss"
import { aimlsemester3 } from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Sem 3 Toppers</h1>
      <p>Winter 2024 CSE AIML</p>
      <div className="list">
        {aimlsemester3.map(user=>(
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
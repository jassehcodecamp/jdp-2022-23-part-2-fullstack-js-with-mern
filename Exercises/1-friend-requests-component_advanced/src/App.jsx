import "./App.css"
import FriendRequestLists from "./FriendRequestLists"

function App() {
  return (
    <main>
      <div className="card">
        <div className="card-header">
          <h3>Friend Requests</h3>
          <a href="/">View All</a>
        </div>

        <div className="card-body">
          <FriendRequestLists />
        </div>
      </div>
    </main>
  )
}

export default App

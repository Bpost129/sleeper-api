const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`} alt="" />
      <p>Username: {user.username}</p>
      <p>Display Name: {user.display_name}</p>
      <p>User ID: {user.user_id}</p>
      <p>Avatar: {user.avatar}</p>
    </div>
  )
}

export default UserCard
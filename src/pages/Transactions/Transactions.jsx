import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getTransactions, getLeagueUsers } from "../../services/sleeper-api"

const Transactions = () => {
  const { leagueId } = useParams()
  const [transactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactionData = await getTransactions(leagueId)
      const usersData = await getLeagueUsers(leagueId)
      setTransactions(transactionData)
      setUsers(usersData)

      console.log(transactionData)
    }
    fetchTransactions()
  }, [])

  return (
    <>
      <h1>Transactions</h1>
      {transactions.map(trans => 
        <div>
          <p>Season: {trans.season}</p>
          <p>Round: {trans.round}</p>
          {/* <p>Recipient: {users[trans.owner_id].display_name}</p>
          <p>Previous Owner: {users[trans.previous_owner_id].display_name}</p> */}
        </div>
      )}
    </>
  )
}

export default Transactions
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Router } from "@reach/router"

// nie wiem czy cos musi byc w tych <p>
// const HomeAccount = ({ user }) => {
//   return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
const HomeAccount = ({user}) => <p>{user.name ? user.name : "unknown"}</p>
const Settings = ({user}) => <p>{user.name ? user.name : "unknown"}</p>
const Diary = () => <p></p>


const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
  <>
   <Router>
    <HomeAccount path="/account" user={user}/>
    <Settings path="/settings/" />
    <Diary path="/diary/" />
  </Router>

  <Layout>
    <p>This is going to be a protected route.</p>
    <ul>
      <li><Link to="/diary/">Diary</Link>{" "}</li>
      <li><Link to="/settings/">Personal Settings</Link>{" "}</li>
    </ul>
  </Layout>
   </>
)
  }
  

export default Account
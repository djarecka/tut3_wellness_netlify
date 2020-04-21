import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"

// nie wiem czy cos musi byc w tych <p>
const HomeAccount = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p></p>
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
    <Settings path="/account/settings" />
    <Diary path="/account/diary" />
  </Router>

  <Layout>
    <p>This is going to be a protected route.</p>
    <ul>
      <li><Link to="/account/diary">Diary</Link>{" "}</li>
      <li><Link to="/account/settings">Personal Settings</Link>{" "}</li>
    </ul>
  </Layout>
  </>
)
}  

export default Account
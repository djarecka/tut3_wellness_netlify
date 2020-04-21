import React from "react"
import Layout from "../components/layout"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Router } from "@reach/router"

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
    <Settings path="/settings" />
    <Diary path="/diary" />
  </Router>

  <Layout>
    <p>This is diary</p>
    </Layout>
   </>
)
  }

export default Account
import React from "react"
import { useRecoilState } from "recoil"
import profileState from "./../states/profile"

function Profile(props) {

  const uid = props.match.params.uid
  const [profile, setProfile] = useRecoilState(profileState)

  return (
    <div className="container">
      <div className="hero is-medium is-light is-bold">
        <div className="hero-body">
          <div className="columns level">
            <div className="column align-right-and-centered">
              <figure class="image is-128x128">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/256x256.png" alt="ProfilePic" />
              </figure>
            </div>
            <div className="column align-left-and-centered">
              <p className="title align-left-and-centered">{profile.name}</p>
              <p className="subtitle align-left-and-centered">{uid}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
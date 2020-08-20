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
          <div className="columns">
            <div className="column">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
              </figure>
            </div>
            <div className="column is-centered">
              <p className="title">{profile.name}</p>
              <p className="subtitle">{uid}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
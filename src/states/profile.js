import { atom } from "recoil";

const profileState = atom({
  key: 'profileState',
  default: {name: 'Vaideeswar'}
})

export default profileState
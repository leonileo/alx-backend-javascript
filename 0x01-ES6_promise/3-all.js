import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;

  uploadPhoto()
    .then((res) => { body = res.body; });
  createUser()
    .then((res) => {
      console.log(body, res.firstName, res.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
//   let firstName;
//   let lastName;
//   let body;

  const photo = uploadPhoto();
  const user = createUser();
  // const obj = JSON.parse(photo)

  return Promise.all([photo, user])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

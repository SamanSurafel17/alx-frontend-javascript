import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const arg1 = await uploadPhoto();
    const arg2 = await createUser();
    return Promise.all([arg1, arg2]).then((value) => ({
      photo: value[0],
      user: value[1],
    }));
  } catch {
    return {
      photo: null,
      user: null,
    };
  }
}

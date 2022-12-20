export default function getFullResponseFromAPI(sucess) {
    const pro = new Promise((resolve, reject) => {
        if (sucess === true) {
            resolve({ status: 200, body: 'Success' })
        } else {
            reject( new Error("The fake API is not working currently"));
}
    })
    return pro
  }
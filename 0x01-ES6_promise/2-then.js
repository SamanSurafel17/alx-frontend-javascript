export default function handleResponseFromAPI(promise){
    promise
    .then(()=> ({ status: 200, body: 'Success' }))
    .catch(() => {new Error()})
    .finally(console.log("Got a response from the API"))   
    return promise

}
const GetUserLocation = () => {
    if (navigator.geolocation) {
       return new Promise((resolve, reject) => {
           navigator.geolocation.getCurrentPosition(
               pos => {
                   resolve(console.log(pos))
               },
               err => {
                   reject(console.log(err))
               }
           )
       })
    } else return [1, -1]
}

export default GetUserLocation
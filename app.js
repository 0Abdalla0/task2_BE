const forcast = require("./data/forcast")
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Enter the name of a country: ', (countryName) => {
    forcast(countryName,(error , data) => {
        console.log("ERROR:" , error)
        console.log("DATA: \n" , data)
    
    })
    rl.close();
})


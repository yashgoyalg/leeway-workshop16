const express=require('express')
const axios = require('axios');
const app=express();

const url = 'https://jsonplaceholder.typicode.com/posts';
const makeApiCall=() =>{
    return axios.get(url);
} 

// Using promise
makeApiCall()
    .then(response => {
        // console.log(JSON.stringify(response));
        console.log("Promise resolved: " + response);
        console.log(response.data[2].title);

        //******** */
        // response.data.map(postuser =>{
        //     console.log("title",postuser.title)
        //     console.log("id",postuser.id)
        })
        // console.log("name: " + response.data.name);
        // console.log("id: " + response.data.id);
    .catch(error => {
        console.log("Promise rejected: " + error);
    });
    
 app.get('/',(req,res) =>{
    res.send("WOW");

 });
 app.listen(5100);
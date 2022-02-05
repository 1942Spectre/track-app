import axios from "axios";

export default axios.create({
    // NGROK URL's expire after 8 hours
    baseURL: 'http://db8c-188-3-233-144.ngrok.io'
})

/*

######### AUTHORIZATION #############

POST /signup {email , password} => signs up
POST /signin {email , password} => signs in


############## TRACKS ###############

POST /tracks {name , locations} | HEADER: {Authorization : bearer key} => adds a new track
GET /tracks | HEADER: {Authorization : bearer key} => returns tracks


*/
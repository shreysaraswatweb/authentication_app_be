In a App there is 
1. Validation => Ex. Email= Test@test.com [Valid]
2. Verfication => Data jo input dala vo shi hai ya nhi
3. Authentication => Multiple User to identify request konsa user kr rha hai us user ko identify krna
4. Autherization => Multiple user konsa user kis feature ko use kr payega Ex. Students acess only class room, Teacher can access claa and staff room and principal acess all
* Need JWT TOken for this 
* we create APIs in Routes
* Logic in Controller
/api/auth is commonly used as a route prefix to organize authentication-related APIs.

npm i jsonwebtoken

const token = jwt.sign({
    id:user._id
}, process.env.JWT_SECRET)

* We send token data in cookies 
npm i cookie-parser //middleware
* cookies ke andar jo bhi data rhega server usko access kr sakta hai 
 email : {
        type: String,
        unique: true  //make email unique
    },
1.  jwt.verify(token, SECRET_KEY) for verifying the token
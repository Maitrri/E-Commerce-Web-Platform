const express=require('express');
const app=new express();
const cors=require('cors');//cross origin 
const con=require('./proj')
const mobileRoute=require('./routes/mobile-route')
const foodRoute=require('./routes/food-route')
const fashionRoute=require('./routes/fashion-route')
const booksRoute=require('./routes/books-route')
const beautyRoute=require('./routes/beauty-route')
const signinRoute=require('./routes/signin-route')
const loginRoute=require('./routes/login-route')

app.use(cors());
app.use(express.json());
app.use('/user',mobileRoute)
app.use('/food',foodRoute)
app.use('/fashion',fashionRoute)
app.use('/books',booksRoute)
app.use('/beauty',beautyRoute)
app.use('/signin',signinRoute)
app.use('/login',loginRoute)

app.listen(3000,()=> {
    console.log("Running on 3000")
})
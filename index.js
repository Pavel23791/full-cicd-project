import express from 'express';

const app = express();

app.use(express.urlencoded({extends: false}));
app.use(express.json());

app.use('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Full-CICD-Project using AWS, Docker, Jenkis,  Github!!'
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running via port ${port}`);
})

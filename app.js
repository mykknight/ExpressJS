const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');


const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.json({ extended: false }));

app.use(adminRoutes);

// app.post('/user/add-user', async (req,res,next) => {
//     const Name = req.body.name;
//     const Email = req.body.email;
//     const PhoneNo = req.body.PhoneNo;

//     const data = await User.create({
//         Name: Name,
//         Email: Email,
//         PhoneNo: PhoneNo
//     })
//     res.status(201).json({newUserDetail: data});
// })

// app.get('/user/get-user', (req,res,next) => {
//     User.findAll()
//    .then(products => {
//      res.status(250).json(products);
//    })
//    .catch(err => console.log(err));
//    console.log(9);
// })

// app.put('/user/update-user/:prodID', async (req,res,next) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phn = req.body.PhoneNo;
//     const id = req.params.prodID;
//     User.findByPk(id)
//     .then(async user => {
//         user.Name = name;
//         user.Email = email;
//         user.PhoneNo = phn;
//         user.save(); 
//         res.status(225).json({updatedDetails: user});
//     })
//     .catch(err => console.log(err));
// })

// app.delete('/user/delete-user/:prodID', (req,res,next) => {
//     const uid = req.params.prodID;
//     User.destroy({where: {id: uid}})
//     res.status(217).json({msg: 'user deleted'});
// })

app.use(errorController.get404);

sequelize.sync()
.then(result => {
    //console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})

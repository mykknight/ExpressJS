const User = require('../models/user');

exports.AddUser = async (req,res,next) => {
    const Name = req.body.name;
    const Email = req.body.email;
    const PhoneNo = req.body.PhoneNo;

    const data = await User.create({
        Name: Name,
        Email: Email,
        PhoneNo: PhoneNo
    })
    res.status(201).json({newUserDetail: data});
}

exports.GetUsers = async (req,res,next) => {
    User.findAll()
   .then(products => {
     res.status(250).json(products);
   })
   .catch(err => console.log(err));
   console.log(9);
}

exports.updateUser = async (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phn = req.body.PhoneNo;
    const id = req.params.prodID;
    User.findByPk(id)
    .then(async user => {
        user.Name = name;
        user.Email = email;
        user.PhoneNo = phn;
        user.save(); 
        res.status(225).json({updatedDetails: user});
    })
    .catch(err => console.log(err));
}

exports.DltUser = async (req,res,next) => {
    const uid = req.params.prodID;
    User.destroy({where: {id: uid}})
    res.status(217).json();
}
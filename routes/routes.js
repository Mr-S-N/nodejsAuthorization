const express = require('express');
const router = express.Router();
const db = require('../confing/database');
const Dep = require('../models/tbldepartments');
const Emp = require('../models/tblEmployees');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.post('/serch', async (req, res) => {

    let data = req.body.name.name.toString();

    let a = await Emp.findOne({where: {empName: data}, raw: true,});
    console.log(a);

    if (a !== null) {
        let result = await Emp.findAll({
            where: {
                empID: {[Op.gt]: a.empID}
            },
            raw: true,

        });

        res.send(JSON.stringify(result));

    } else {
        res.send(JSON.stringify(false));
    }


});
router.post('/edit', async (req, res) => {

    let data = req.body;
    console.log(data.name);
    console.log(data.department);
    let obj = await Dep.findOne({
        where: {dpName: data.department},
        raw: true,
    });
    console.log();

    Emp.create({
        empName: data.name,
        empActive: data.active,
        emp_dpID: obj.dpID
    });


});
router.post('/delete', async (req, res) => {

    let data = req.body;
    Emp.destroy({
        where: {
            empID: data.id
        }
    })


});

router.post('/find', async (req, res) => {
    let skip = req.body.skip;

    let data = await Emp.findAll({offset: skip, limit: 4, raw: true});
    res.send(JSON.stringify(data));
});
router.get('/getall', async (req, res) => {


    console.log('------------------');
    let date = await Emp.findAll({
        raw: true,
    });
    res.send(JSON.stringify(date));


});
router.get('/amount', async (req, res) => {

    let data = await Emp.findAll({});
    console.log(data.length);
    let a = Number(data.length);
    res.send(JSON.stringify(a));
});

router.get("/departments", async (req, res) => {


    let a = await Dep.findAll({
        raw: true,
    });
    let arr = [];
    for (var i = 0; i < a.length; i++) {

        arr.push(a[i].dpName)
    }
    res.send(JSON.stringify(arr));

});

module.exports = router;

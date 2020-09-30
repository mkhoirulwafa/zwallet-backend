const db = require("../helper/db");

const transfer = {
    getAllTransfer: (req, res) => {
        db.query(`SELECT * from transfer`, (err, result, fields) => {
            if (!err) {
              res.status(200).send({
                success: true,
                message: "Success get all data",
                totalData: result.length,
                data: result,
              });
            } else {
              res.status(500).send({
                success: false,
                message: "Failed to fetch data",
                data: [],
              });
            }
        });   
    },
    search: (req, res) => {
      let {search} = req.query;
      //query
      const query = `SELECT * FROM users WHERE firstName LIKE '${search}%' ORDER BY firstName` 
      db.query(query, (err, result, fields) => {
          //catch err
          if (!err) {
            res.status(200).send({
              success: true,
              message: "Success get specific user data",
              totalData: result.length,
              data: result,
            });
          } else {
            res.status(500).send({
              success: false,
              message: "Result Not Found",
              data: [],
            });
          }
        }
      );
    },
    postTransfer: (req, res) => {
        const {
            receiverName,
            receiverAvatar,
            receiverPhone,
            amount,
            balanceLeft,
            notes} = req.body;
      if (receiverName &&
        receiverAvatar &&
        receiverPhone &&
        amount &&
        balanceLeft &&
        notes ) {
            //query
            db.query(
            `INSERT INTO transfer (receiverName,
                receiverAvatar,
                receiverPhone,
                amount,
                balanceLeft,
                notes) VALUES ('${receiverName}', '${receiverAvatar}', '${receiverPhone}', '${amount}', '${balanceLeft}', '${notes}')`,
            (err, result, fields) => {
                if (!err) {
                res.status(201).send({
                    success: true,
                    message: "Success Created Data",
                    data: result,
                });
                } else {
                res.status(500).send({
                    success: false,
                    message: "Internal Server Error",
                    data: [],
                });
                }
            }
            );
        } else {
            res.status(400).send({
            success: false,
            message: "Failed to create data",
            });
        }
    },
    patchTransfer: (req, res) => {
        const { id } = req.params;
        const {
          receiverName = "",
          receiverAvatar = "",
          receiverPhone = "",
          amount = "",
          balanceLeft = "",
          notes = ""
        } = req.body;
        //clear whitespace with trim
        if (
          receiverName.trim() ||
          receiverAvatar.trim() ||
          receiverPhone.trim() ||
          amount.trim() ||
          balanceLeft.trim() ||
          notes.trim()
        ) {
          db.query(`SELECT * FROM transfer where id=${id}`, (err, result, fields) => {
            if (!err) {
              if (result.length) {
                const data = Object.entries(req.body).map((item) => {
                  return parseInt(item[1]) > 0
                    ? `${item[0]}=${item[1]}`
                    : `${item[0]}='${item[1]}'`;
                });
                console.log(data)
                let query = `UPDATE transfer SET ${data} WHERE id=${id}`;
                db.query(query, (err, result, fields) => {
                  if (result.affectedRows) {
                    res.status(200).send({
                      success: true,
                      message: `Data ${id} Succesfully updated`,
                    });
                  } else {
                    res.status(400).send({
                      success: false,
                      message: "Failed update Data",
                    });
                  }
                });
              } else {
                res.status(400).send({
                  success: false,
                  message: "id not found",
                });
              }
            } else {
              console.log(err);
              res.status(500).send({
                success: false,
                message: "Failed update data",
              });
            }
          });
        }
    },
    deleteTransfer: (req, res)=>{
        let {id} = req.params
        db.query(`DELETE from transfer WHERE id = ${id}`, (err, result)=>{
            if (!err) {
                res.status(200).send({
                  success: true,
                  message: "Success delete data",
                  affectedRows: result.affectedRows,
                  data: result,
                });
              } else {
                res.status(500).send({
                  success: false,
                  message: "Failed to delete user data",
                  data: [],
                });
              }
        })
    }
}

module.exports = transfer
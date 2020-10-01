const db = require("../helper/db");

const topup = {
    getAlltopup: (req, res) => {
        db.query(`SELECT * FROM topup`, (err, result, fields) => {
          if (!err) {
            res.status(200).send({
              success: true,
              message: "Success get all data",
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
    getOrderedTopup: (req, res) => {
        let { order } = req.query;
        if (order == 0) {
          res.send({
            success: false,
            message: "enter req params correctly",
          });
        } else if (order == 1) {
          db.query(`SELECT * FROM topup ORDER BY number`, (err, result, fields) => {
            if (!err) {
              res.status(200).send({
                success: true,
                message: "Success get all data",
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
        }
    },
    postTopup: (req, res) => {
        const { number, title, description } = req.body;
        if (number && title && description) {
          db.query(
            `INSERT INTO topup (number, title, description) VALUES ('${number}', '${title}', '${description}')`,
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
    patchTopup: (req, res) => {
        const { num } = req.params;
        const {
          number = "",
          title = "",
          description = ""
        } = req.body;
      
        if (
          number.trim() ||
          title.trim() ||
          description.trim()
        ) {
          db.query(`SELECT * FROM topup where number=${num}`, (err, result, fields) => {
            if (!err) {
              if (result.length) {
                const data = Object.entries(req.body).map((item) => {
                  return parseInt(item[1]) > 0
                    ? `${item[0]}=${item[1]}`
                    : `${item[0]}='${item[1]}'`;
                });
                console.log(data)
                let query = `UPDATE topup SET ${data} WHERE number=${num}`;
                db.query(query, (err, result, fields) => {
                  if (result.affectedRows) {
                    res.status(200).send({
                      success: true,
                      message: `Data ${num} Succesfully updated`,
                    });
                  } else {
                    res.status(400).send({
                      success: false,
                      message: "Failed update data",
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
    deleteTopup: (req, res) => {
        let { number } = req.params;
        db.query(`DELETE from topup WHERE number = ${number}`, (err, result) => {
          if (!err) {
            res.status(200).send({
              success: true,
              message: "Success delete data",
              data: result,
            });
          } else {
            res.status(500).send({
              success: false,
              message: "Failed to delete data",
              data: [],
            });
          }
        });
    }
}

module.exports = topup
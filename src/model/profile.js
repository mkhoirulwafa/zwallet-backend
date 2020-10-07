const db = require("../helper/db");

const profile = {
  getByName: (req, res) => {
    let { first, last } = req.params;
    const query = `SELECT CONCAT(firstName, ' ', lastName) AS fullName, phone, avatar, balance, email FROM users WHERE firstName LIKE '${first}' AND lastName LIKE '${last}%'`;
    db.query(query, (err, result, fields) => {
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
  getPersonalById: (req, res) => {
    let { id } = req.query;
    const query = `SELECT CONCAT(firstName, ' ', lastName) AS fullName, phone, avatar, balance, email FROM users WHERE id=${id}`;
    db.query(query, (err, result, fields) => {
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
  create: (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    if (firstName && lastName && email && phone) {
      const query = `INSERT INTO users (
                        firstName,
                        lastName,
                        email,
                        phone) VALUES ('${firstName}', '${lastName}', '${email}', '${phone}')`;
      //query
      db.query(query, (err, result, fields) => {
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
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Failed to create data",
      });
    }
  },
  update: (req, res) => {
    const { id } = req.params;
    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      password = "",
      pin = "",
    } = req.body;
    //clear whitespace with trim
    if (
      firstName.trim() ||
      lastName.trim() ||
      email.trim() ||
      phone.trim() ||
      password.trim() ||
      pin.trim()
    ) {
      const query1 = `SELECT * FROM users where id=${id}`;

      db.query(query1, (err, result, fields) => {
        if (!err) {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0
                ? `${item[0]}=${item[1]}`
                : `${item[0]}='${item[1]}'`;
            });
            console.log(data);
            const query2 = `UPDATE users SET ${data} WHERE id=${id}`;
            db.query(query2, (err, result, fields) => {
              if (result.affectedRows) {
                res.status(200).send({
                  success: true,
                  message: `User ${id} Succesfully updated`,
                });
              } else {
                res.status(400).send({
                  success: false,
                  message: "Failed update user",
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
  delete: (req, res) => {
    let { id } = req.params;
    const query = `DELETE from users WHERE id = ${id}`;
    db.query(query, (err, result) => {
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
    });
  },
};

module.exports = profile;

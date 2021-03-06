const db = require("../helper/db");

const users = {
  getUserPagination: (req, res) => {
    let { page, limit, search } = req.query;
    let { first, last } = req.params;
    //pagination
    if (!limit) {
      limit = 4;
    } else {
      parseInt(limit);
    }
    if (!page) {
      page = 1;
    } else {
      parseInt(page);
    }
    //query
    let query1 = `SELECT CONCAT(firstName, ' ', lastName) AS fullName, phone, avatar FROM users LIMIT ${limit} OFFSET ${
      (page - 1) * limit
    }`;
    db.query(query1, (err, result, fields) => {
      //catch err
      if (!err) {
        res.status(200).send({
          success: true,
          message: "Success get all users data",
          totalData: result.length,
          data: result,
        });
      } else {
        res.status(500).send({
          success: false,
          message: "Failed to fetch users data",
          data: [],
        });
      }
    });
  },
  getSearch: (req, res) => {
    let { first } = req.params;
    //query
    let query1 = `SELECT CONCAT(firstName, ' ', lastName) AS fullName, phone, avatar FROM users }`;
    let query2 = `SELECT CONCAT(firstName, ' ', lastName) AS fullName, phone, avatar FROM users WHERE firstName LIKE '${first}'`;
    db.query(!first ? query1: query2, (err, result, fields) => {
      //catch err
      if (!err) {
        res.status(200).send({
          success: true,
          message: "Success get all users data",
          totalData: result.length,
          data: result,
        });
      } else {
        res.status(500).send({
          success: false,
          message: "Failed to fetch users data",
          data: [],
        });
      }
    });
  },
  postUser: (req, res) => {
    const {
      firstName,
      lastName,
      avatar,
      phone,
      email,
      password,
      balance,
      pin,
    } = req.body;
    if (
      firstName &&
      lastName &&
      avatar &&
      phone &&
      email &&
      password &&
      balance &&
      pin
    ) {
      //query
      db.query(
        `INSERT INTO users (firstName,
                lastName,
                avatar,
                phone,
                email,
                password,
                balance,
                pin) VALUES ('${firstName}', '${lastName}', '${avatar}', '${phone}', '${email}', '${password}', '${balance}', '${pin}')`,
        (err, result, fields) => {
          if (!err) {
            res.status(201).send({
              success: true,
              message: "Success Created Data",
              data: result,
            });
          } else {
            res.status(400).send({
              success: false,
              message: "Failed to create data",
              data: [],
            });
          }
        }
      );
    } else {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
  // patchUser: (req, res) => {
  //   const { id } = req.params;
  //   const {
  //     firstName = "",
  //     lastName = "",
  //     avatar = "",
  //     phone = "",
  //     email = "",
  //     password = "",
  //     balance = "",
  //     pin = "",
  //     updateAt = "",
  //   } = req.body;
  //   //clear whitespace with trim
  //   if (
  //     firstName.trim() ||
  //     lastName.trim() ||
  //     avatar.trim() ||
  //     phone.trim() ||
  //     email.trim() ||
  //     password.trim() ||
  //     balance.trim() ||
  //     pin.trim() ||
  //     updateAt.trim()
  //   ) {
  //     db.query(`SELECT * FROM users where id=${id}`, (err, result, fields) => {
  //       if (!err) {
  //         if (result.length) {
  //           const data = Object.entries(req.body).map((item) => {
  //             return parseInt(item[1]) > 0
  //               ? `${item[0]}=${item[1]}`
  //               : `${item[0]}='${item[1]}'`;
  //           });
  //           console.log(data);
  //           let query = `UPDATE users SET ${data} WHERE id=${id}`;
  //           db.query(query, (err, result, fields) => {
  //             if (result.affectedRows) {
  //               res.status(200).send({
  //                 success: true,
  //                 message: `User ${id} Succesfully updated`,
  //               });
  //             } else {
  //               res.status(400).send({
  //                 success: false,
  //                 message: "Failed update user",
  //               });
  //             }
  //           });
  //         } else {
  //           res.status(400).send({
  //             success: false,
  //             message: "id not found",
  //           });
  //         }
  //       } else {
  //         console.log(err);
  //         res.status(500).send({
  //           success: false,
  //           message: "Failed update data",
  //         });
  //       }
  //     });
  //   }
  // },
  patchUser: (req, res) => {
    const { email } = req.query;
    const {
      firstName = "",
      lastName = "",
      avatar = "",
      phone = "",
      email = "",
      password = "",
      balance = "",
      pin = "",
      updateAt = "",
    } = req.body;
    //clear whitespace with trim
    if (
      firstName.trim() ||
      lastName.trim() ||
      avatar.trim() ||
      phone.trim() ||
      email.trim() ||
      password.trim() ||
      balance.trim() ||
      pin.trim() ||
      updateAt.trim()
    ) {
      db.query(`SELECT * FROM users where email=${email}`, (err, result, fields) => {
        if (!err) {
          if (result.length) {
            const data = Object.entries(req.body).map((item) => {
              return parseInt(item[1]) > 0
                ? `${item[0]}=${item[1]}`
                : `${item[0]}='${item[1]}'`;
            });
            console.log(data);
            let query = `UPDATE users SET ${data} WHERE id=${id}`;
            db.query(query, (err, result, fields) => {
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
  deleteUser: (req, res) => {
    let { id } = req.params;
    db.query(`DELETE from users WHERE id = ${id}`, (err, result) => {
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

module.exports = users;

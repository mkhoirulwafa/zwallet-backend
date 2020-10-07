const db = require("../helper/db");

const history = {
  getAllHistory: (req, res) => {
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
};

module.exports = history;
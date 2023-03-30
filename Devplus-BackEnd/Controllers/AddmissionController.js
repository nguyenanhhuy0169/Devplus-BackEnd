const AdmissionSchema = require("../Models/Admission");


class Admisstion_Controller {
  async get_Admisstion(req, res) {
    try {
      const banner = await AdmissionSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Admisstion(req, res) {
    const newBanner = new AdmissionSchema(req.body);
    if (!newBanner) {
      res.status(500);
    }
    try {
      const savedBanner = await newBanner.save();
      res.status(200).json(savedBanner);
      console.log("hiii");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = new Admisstion_Controller();

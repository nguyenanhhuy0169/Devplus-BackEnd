const Plus_CampusSchema = require("../Models/Plus_Campus");

class CampusController {
  async get_Campus(req, res) {
    try {
      const banner = await Plus_CampusSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Campus(req, res) {
    const newBanner = new Plus_CampusSchema(req.body);
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
module.exports = new CampusController();

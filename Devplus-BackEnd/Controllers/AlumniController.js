const AlumniSchema = require("../Models/Alumni");

class Alumni_Controller {
  async get_Alumni(req, res) {
    try {
      const banner = await AlumniSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Alumni(req, res) {
    const newBanner = new AlumniSchema(req.body);
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
module.exports = new Alumni_Controller();

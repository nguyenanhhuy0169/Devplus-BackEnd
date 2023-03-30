const About_DevplusSchema = require("../Models/About_Devplus");


class About_Controller {
  async get_About(req, res) {
    try {
      const banner = await About_DevplusSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_About(req, res) {
    const newBanner = new About_DevplusSchema(req.body);
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
module.exports = new About_Controller();

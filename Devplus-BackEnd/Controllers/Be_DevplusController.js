const Be_DevplusSchema = require("../Models/Be_Devplus");

class Be_DevPlus_Controller {
  async get_be_devplus(req, res) {
    console.log(res);
    try {
      const banner = await Be_DevplusSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_be_devplus(req, res) {
    const newBanner = new Be_DevplusSchema(req.body);
    if (!newBanner) {
      res.status(500);
    }
    try {
      const savedBanner = await newBanner.save();
      res.status(200).json(savedBanner);
    } catch (err) {
      console.log("hiii");
      res.status(500).json(err);
    }
  }
}
module.exports = new Be_DevPlus_Controller();

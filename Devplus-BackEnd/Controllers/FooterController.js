const FooterSchema = require("../Models/Footer");
class Footer_Controller {
  async get_Footer(req, res) {
    try {
      const banner = await FooterSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Footer(req, res) {
    const newBanner = new FooterSchema(req.body);
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
module.exports = new Footer_Controller();

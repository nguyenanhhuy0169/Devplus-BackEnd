const ConcernsSchema = require("../Models/Concerns");
class Concerns_Controller {
  async get_Concerns(req, res) {
    try {
      const banner = await ConcernsSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Concerns(req, res) {
    const newBanner = new ConcernsSchema(req.body);
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
module.exports = new Concerns_Controller();

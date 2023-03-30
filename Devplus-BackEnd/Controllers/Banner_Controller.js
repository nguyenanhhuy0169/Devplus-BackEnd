const Banner = require("../Models/Banner");


class BannerController {
  async get_Banner(req, res) {
    try {
      const banner = await Banner.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Banner(req, res) {
    const newBanner = new Banner(req.body);
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
module.exports = new BannerController();

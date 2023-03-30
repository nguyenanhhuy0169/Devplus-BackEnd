const CategorySchema = require("../Models/Category");
class Category_Controller {
  async get_Category(req, res) {
    try {
      const banner = await CategorySchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Category(req, res) {
    const newBanner = new CategorySchema(req.body);
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
module.exports = new Category_Controller();

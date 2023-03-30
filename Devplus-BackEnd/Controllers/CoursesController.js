const CoursesSchema = require("../Models/Courses");
class Courses_Controller {
  async get_Courses(req, res) {
    try {
      const banner = await CoursesSchema.find();
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async add_Courses(req, res) {
    const newBanner = new CoursesSchema(req.body);
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
module.exports = new Courses_Controller();

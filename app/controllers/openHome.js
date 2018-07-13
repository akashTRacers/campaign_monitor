const path = '../views/index.pug';
class openHomeController {
  static getHome(req, res) {
    res.send("inside get home");
  }
}
module.exports = openHomeController;
class listController {
  static getLists(request, response) {
    request.esp.getLists(request, response);
  }

  static createList(request, response) {
    request.esp.createList(request, response);
  }

  static getEmailState(request, response) {
    request.esp.getEmailState(request, response);
  }
}
module.exports = listController;

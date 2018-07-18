const campaignMonitor = require('../app/adapter/CampaignMonitor');
const mailChimp = require('../app/adapter/MailChimp');

const getEsp = (request, response, next) => {
  let espobj;
  const provider = request.headers.provider;
  if (provider == 'campaignMonitor') {
    espobj = new campaignMonitor('campaignMonitor');
  }
  if (provider == 'mailChimp') {
    espobj = new mailChimp('mailChimp');
  }
  request.esp = espobj;
  next();
}
module.exports = { getEsp };
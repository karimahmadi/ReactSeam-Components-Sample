const inquirer = require('inquirer');
const containerComponents = require('./getContainerComponents') ;
function createModuleList()
{
  return containerComponents().concat(new inquirer.Separator()).concat(['Create new business (module)']);
}
module.exports = createModuleList;

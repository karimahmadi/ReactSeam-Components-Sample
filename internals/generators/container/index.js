/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');
const getContainerComponents = require('../utils/getContainerComponents');
const createModuleList = require('../utils/createModuleList');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'What your business (module) name?',
      default: 'MyBusiness',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'The name is required';
      },
      when : () =>getContainerComponents().length === 0,
    },
    {
      type: 'list',
      name: 'chooseModuleName',
      message: 'choose your business (module) name from list?',
      choices: createModuleList(),
      default: 'MyBusiness',
      when : () =>getContainerComponents().length !== 0,
    },
    {
      type: 'input',
      name: 'moduleName',
      message: 'What your business (module) name?',
      default: 'MyBusiness',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }
        return 'The name is required';
      },
      when : (ans) =>ans.chooseModuleName === "Create new business (module)",
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/index.test.js',
        templateFile: './container/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/messages.js',
        templateFile: './container/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/actions.test.js',
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/saga.js',
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/tests/saga.test.js',
        templateFile: './container/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{#if moduleName}}{{properCase moduleName}}{{else}}{{properCase chooseModuleName}}{{/if}}/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: `/containers/${data.moduleName || data.chooseModuleName}`,
    });

    return actions;
  },
};

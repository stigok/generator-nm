#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const <%= camelModuleName %> = require('./');

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What to do?',
    choices: [
      'The usual'
    ]
  }
];

inquirer.prompt(questions, answers => {
  console.log('You chose to do %s...', answers.action);
});

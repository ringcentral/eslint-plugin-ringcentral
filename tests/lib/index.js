const RuleTester = require('eslint').RuleTester;
const rule = require('../../lib').rules['specified-comment-with-jira-task-id'];

const ruleTester = new RuleTester();
const error = 'Please specify comment with JIRA task id';

ruleTester.run('specified-comment-with-jira-task-id', rule, {
    valid: [
        '// TODO RLZ-12345',
        '// todo RLZ-12345 ',
        '// TODO [RLZ-12345]',
        '// FIXME RLZ-12345',
        '// fixme RLZ-12345 ',
        '// FIXME [RLZ-12345]',
        '// TODO RLZ-12345 explanation',
        '// FIXME RLZ-12345 explanation',
        '/* TODO \n some comment \n UIA-98765 */'
    ],
    invalid: [
        {
            code: '// TODO explanation',
            errors: [error]
        },
        {
            code: '// FIXME explanation',
            errors: [error]
        },
        {
            code: '// todo explanation',
            errors: [error]
        },
        {
            code: '// fixme explanation',
            errors: [error]
        },
        {
            code: '/* TODO \n explanation */',
            errors: [error]
        }
    ]
});


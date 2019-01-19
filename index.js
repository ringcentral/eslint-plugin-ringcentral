module.exports = {
    rules: {
        'specified-comment-with-jira-task-id': require('./lib/rules/specified-comment-with-jira-task-id')
    },
    configs: {
        error: {
            rules: {
                'ringcentral/specified-comment-with-jira-task-id': 2,
            },
        },
        warn: {
            rules: {
                'ringcentral/specified-comment-with-jira-task-id': 1,
            },
        },
    }
};
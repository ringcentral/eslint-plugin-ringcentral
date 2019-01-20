module.exports = {
    rules: {
        'specified-comment-with-jira-task-id': require('./lib/rules/specified-comment-with-jira-task-id')
    },
    configs: {
        all: {
            rules: {
                'ringcentral/specified-comment-with-jira-task-id': 2,
            },
        },
        'all-warn': {
            rules: {
                'ringcentral/specified-comment-with-jira-task-id': 1,
            },
        },
    }
};
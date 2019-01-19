/**
 * @fileoverview plugin for ringcentral products
 * @author ledamint
 */
'use strict';

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const jiraIdTaskRegex = /((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\d+)/;

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
    rules: {
        'specified-comment-with-jira-task-id': {
            create(context) {
                return {
                    Program() {
                        const sourceCode = context.getSourceCode();
                        const comments = sourceCode.getAllComments();

                        comments.forEach((node) => {
                            const {value: comment} = node;

                            if (comment.match(/\b(todo|fixme)\b/i)) {
                                if (!comment.match(jiraIdTaskRegex)) {
                                    context.report({
                                        node,
                                        message: 'Please specify comment with JIRA task id'
                                    });
                                }
                            }
                        })
                    }
                }
            }
        }
    }
};

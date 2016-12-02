'use strict';

var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {

        TableName : "User",
        Key : { 
          "email" : event.email.toString(),
        },
        UpdateExpression: "set userStatus = :p",
        ExpressionAttributeValues:{
            ":p": "Inactive"
        }
    };

    docClient.update(params, context.done);
};
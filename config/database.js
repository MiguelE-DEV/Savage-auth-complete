// config/database.js
const dbName = 'RC'
const userName = 'xyzver'
const passWord = '12345'

module.exports = {
    'url' : `mongodb+srv://${userName}:${passWord}@cluster0.mjtmne3.mongodb.net/${dbName}?retryWrites=true&w=majority`, 
    'dbName': 'RC'
};

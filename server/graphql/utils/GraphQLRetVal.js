
module.exports = class GraphQLRetVal{
  constructor(payload, success, message){
    this.payload = payload
    this.success = success
    this.message = message
  }
  payload;
  success;
  message;
  
}
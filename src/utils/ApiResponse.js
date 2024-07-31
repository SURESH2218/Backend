// class ApiResponse {
//   constructor(statusCode, data, message = "success") {
//     this.statusCode = statusCode;
//     this.data = data;
//     this.message = message;
//     this.success = statusCode < 400;
//   }
// }

function ApiResponse(statusCode, data, message = "success") {
  return {
    statusCode: statusCode,
    data: data,
    message: message,
    success: statusCode < 400,
  };
}

export default ApiResponse;

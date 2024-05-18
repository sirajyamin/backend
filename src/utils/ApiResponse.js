class ApiResponse {
	constructor(statusCode, message = "Success", data) {
		this.statusCode = statusCode;
		this.message = statusCode < 400;
		this.data = data;
	}
}

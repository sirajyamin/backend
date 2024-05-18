class ApiError extends Error {
	constructor(statusCode, message = "Whatever", error = [], statck = "") {
		super(message);
		this.statusCode = statusCode;
		this.data = null;
		this.error = error;
		this.stack = statck;
	}
}

export { ApiError };

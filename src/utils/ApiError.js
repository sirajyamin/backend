class ApiError extends Error {
	constructor(statusCode, message = "Whatever", error = [], statck = "") {
		super(message);
		this.statusCode = statusCode;
		this.data = null;
		this.error = error;
		if (statck) {
			this.stack = statck;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export { ApiError };

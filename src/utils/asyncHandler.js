const asyncHandler = (fn) => {
	(res, req, next) => {
		Promise.resolve(fn(res, req, next)).catch((err) => next(err));
	};
};

// const asyncHandler = (func) => async (req, res, next) => {
// 	try {
// 		await func(req, res, next);
// 	} catch (error) {
// 		res.staus(err.code || 500).json({
// 			success: false,
// 			message: err.code,
// 		});
// 	}
// };
 
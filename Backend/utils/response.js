import { StatusCodes } from "http-status-codes";

export const successResponse = (res,statusCode, data, message = "Success") => {    
    return res.status(statusCode).json({
        status: "success",
        message,
        data
    });
}

export const errorResponse = (res, error, message = "An error occurred") => {
    if(error.status) {
        return res.status(error.status).json({
            status: "error",
            message: error.message || message,
            error: error.error || error
        });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message,
        error: error.message || error
    });
}
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error";
import handelZodError from "../errors/HandelZodError";
import handelValidationError from "../errors/HandelValidationError";
import handelCastError from "../errors/HandleCastError";
import handelDuplicateError from "../errors/HandelDuplicateError";
import AppError from "../errors/AppError";
import config from "../config";



 
export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  let statsCode = err.statusCode || 500;
  let message = err.message || "sumThink want wrong";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "sumThink want wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handelZodError(err);

    statsCode = simplifiedError.statsCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handelValidationError(err);
    statsCode = simplifiedError.statsCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handelCastError(err);

    statsCode = simplifiedError.statsCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handelDuplicateError(err);
    // console.log(simplifiedError)
    statsCode = simplifiedError.statsCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err instanceof AppError) {
    statsCode = err?.statusCode;
    message = err?.name;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.name;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }
  

  return res.status(statsCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.node_dev == "development" ? err?.stack : null,
  });
};

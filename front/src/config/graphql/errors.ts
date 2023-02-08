export const UNAUTHORIZED = 401;

const getErrorType = (type: string, statusCode: number) => {
  switch (type) {
    case "UNAUTHORIZED":
      return {
        message: "Unauthenticated user.",
        statusCode,
      };
    case "SERVER_ERROR":
      return {
        message: "Server error.",
        statusCode,
      };
    default:
      return { message: "Server error.", statusCode };
  }
};

export default getErrorType;

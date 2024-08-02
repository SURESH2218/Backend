import asyncHandler from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});
export const loginRegister = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "login",
  });
});

export default userRegister;

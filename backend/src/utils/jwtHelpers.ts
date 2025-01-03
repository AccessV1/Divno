import jwt, { JwtPayload } from "jsonwebtoken";
import { Response } from "express";
import { RefreshTokens } from "../models/RefreshToken";

/**
 * Generates a JWT Access Token using the secret.
 * @param id - User ID
 * @returns Access Token
 */
export const generateAccessToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_SECRET!, {
    expiresIn: "2h",
  });
};

/**
 * Generates a JWT Refresh Token, stores it in the database, and sets it as a cookie.
 * @param res - Express Response object
 * @param id - User ID
 * @returns Refresh Token
 */
export const generateRefreshToken = async (id: string): Promise<string> => {
  const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "14d",
  });

  const expiresAt: Date = new Date();
  expiresAt.setDate(expiresAt.getDate() + 14);

  await RefreshTokens.create(id, refreshToken);

  return refreshToken;
};

/**
 * Refreshes Access Token using a Refresh Token.
 * @param refreshToken - Refresh Token from the client
 * @param res - Express Response object
 * @returns New Access Token
 */
export const refreshAccessToken = async (
  refreshToken: string,
  res: Response
): Promise<string> => {
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    ) as JwtPayload;

    const existingToken = await RefreshTokens.find(decoded.id, refreshToken);
    if (!existingToken) {
      res.status(401);
      throw new Error("Invalid or expired refresh token");
    }

    await RefreshTokens.delete(decoded.id, refreshToken);
    const newAccessToken = generateAccessToken(decoded.id);
    return newAccessToken;
  } catch (error) {
    res.status(401);
    throw new Error("Invalid or expired refresh token");
  }
};

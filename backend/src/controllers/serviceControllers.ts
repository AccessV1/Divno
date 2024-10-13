import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Services } from "../models/Service";

/**
 * @desc Create a new service
 * @route POST /api/services
 * @access Public
 */
export const createService = asyncHandler(async (req: Request, res: Response) => {
  const serviceData = req.body;
  const newService = await Services.create(serviceData);
  res.status(201).json(newService);
});

/**
 * @desc Get a service by ID
 * @route GET /api/services/:id
 * @access Public
 */
export const getServiceById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await Services.findById(id);
  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ message: "Service not found" });
  }
});

// Future methods: update, delete, list all services
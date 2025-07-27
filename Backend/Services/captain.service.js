import { captainModel } from "../Model/captain.model.js";

export const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    if (!firstname || !email || !password || !color || !plate || !capacity) {
        throw new Error("All fields are required");
    }

    const captain = await captainModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        vehicle: { vehicleType, color, capacity, plate }
    });

    return captain;
};

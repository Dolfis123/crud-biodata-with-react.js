import { user } from "../models/UserModels.js";

export const getUsers = async (req, res) => {
  try {
    const response = await user.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await user.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log("Error");
    console.log(error.message);
  }
};
export const creatUser = async (req, res) => {
  try {
    await user.create(req.body);
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await user.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async(req, res) => {
  try {
    await user.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

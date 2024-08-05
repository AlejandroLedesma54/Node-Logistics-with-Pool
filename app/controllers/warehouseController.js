import { searchbyId, findAll, save, updateWarehouse, deleteWarehouse } from "../models/warehouseModel.js";

export const getAll = async (_,res) => {
    const warehouses = await findAll();
    console.log(warehouses);
    res.json({message: "Ok", data: warehouses})
};

export const getId = async (req ,res) => {
    const warehouseId = req.params.id;
    const warehouse = await searchbyId(warehouseId);
    console.log(warehouse);
    res.json({message: "Obtained", data: warehouse})
};

export const insert = async (req, res) => {
    const { name , location } = req.body;
    console.log(name, location);
    const warehouseCreated = await save({name, location});

    res.status(201).send({
        message: "Successfully created",
        data: warehouseCreated
    });
};

export const update = async (req, res) => {
    const warehouseId = req.params.id;
    console.log(req.params);
    const { name, location } = req.body;
    const updatedWarehouse = await updateWarehouse(warehouseId, {name, location});
    res.status(204).json({message: "Updated successfully", response: updatedWarehouse});
};

export const eliminate = async (req, res) => {
    const warehouseId = req.params.id;
    console.log(req.params);
    const deletedWarehouse = await deleteWarehouse(warehouseId);
    res.status(200).json({message: "Deleted successfully", response: deletedWarehouse});
};
import { StudentService } from "./student.services.js";
import createStudentSchema from "./zod.validation.js";
import mongoose from "mongoose";
const createStudent = async (req, res) => {
    try {
        const student = req.body;
        const zodParseData = createStudentSchema.safeParse(student);
        if (!zodParseData.success) {
            return res.status(400).json({
                success: false,
                message: 'Zod validation failed',
                error: zodParseData.error.format(),
            });
        }
        // validated data
        const result = await StudentService.createStudent(zodParseData.data);
        res.status(200).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'some problems',
            error: err,
        });
    }
};
const getAllStudents = async (req, res) => {
    try {
        const result = await StudentService.getAllStudents();
        res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to get students',
            error: err,
        });
    }
};
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid MongoDB ObjectId',
            });
        }
        const result = await StudentService.deleteStudent(id);
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: 'Failed to delete student',
            error: err,
        });
    }
};
export const studentController = {
    createStudent,
    getAllStudents,
    deleteStudent
};

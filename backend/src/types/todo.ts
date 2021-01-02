import { Document } from "mongoose";

// Interfaca Todo que estende o tipo Document fornecido por mongoose


export interface ITodo extends Document {
    name: string,
    description: string,
    status: boolean
}
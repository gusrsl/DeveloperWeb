import  mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { IProducto } from '../interfaces'

// Esto es un esquema de mongoose
const ProductoSchema: mongoose.Schema = new Schema<IProducto>({
    nombre: {
        type: String,
        required: [true, `El nombre es obligtorio`],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required:true
    },
    precio:{
        type:Number,
        default:0
    },
    costo:{
        type:Number,
        default:0
    },
    minimo:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    }
})

const Producto : mongoose.Model<IProducto> = model<IProducto>('Producto', ProductoSchema)

export {
    Producto
}
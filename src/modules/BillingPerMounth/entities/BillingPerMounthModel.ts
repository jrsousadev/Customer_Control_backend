import mongoose, { Schema } from "mongoose";
import { IBillingPerMounth } from "../interface/IBillingPerMounth";

const BillingPerMounthSchema = new Schema<IBillingPerMounth>(
  {
    mounthName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    billing: {
      type: Number,
      default: 0,
    },
    userResponsible: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  }, 
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

export const BillingPerMounthModel = mongoose.model('billingPerMounth', BillingPerMounthSchema)
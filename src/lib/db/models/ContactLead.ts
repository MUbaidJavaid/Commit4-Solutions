import { Schema, model, models } from "mongoose";

export interface ContactLeadDocument {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactLeadSchema = new Schema<ContactLeadDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    service: { type: String },
    budget: { type: String },
    timeline: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactLeadModel =
  (models.ContactLead as ReturnType<
    typeof model<ContactLeadDocument>
  >) || model<ContactLeadDocument>("ContactLead", ContactLeadSchema);


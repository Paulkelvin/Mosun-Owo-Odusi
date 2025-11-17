import { Schema, model, models } from "mongoose";

const OpportunitySchema = new Schema({
  title: String,
  source: String,
  url: String,
  category: String,
  deadline: String,
  location: String,
  type: String, // job, scholarship, grant, fellowship, training
  postedDate: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default models.Opportunity || model("Opportunity", OpportunitySchema);
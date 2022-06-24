import mongoose from "mongoose";

interface Client {
  name: string;
  description?: string;
}

const ClientSchema = new mongoose.Schema<Client>({
  name: {
    type: String,
    required: [true, "Please add a title"],
    unique: false,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: false,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});

const ClientModel = mongoose.models.Client || mongoose.model<Client>("Client", ClientSchema);

export default ClientModel;
export type { Client };

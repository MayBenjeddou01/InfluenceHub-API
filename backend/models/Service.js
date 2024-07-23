const ServiceSchema = new Schema({
    ID: { type: String, required: true },
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    Category: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  
  export const Service = mongoose.model('Service', ServiceSchema);
  
  
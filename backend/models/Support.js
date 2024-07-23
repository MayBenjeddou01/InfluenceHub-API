const SupportSchema = new Schema({
    ID: { type: String, required: true },
    Time: { type: Date, required: true },
    Message: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
 
  
  export const Support = mongoose.model('Support', SupportSchema);
  
  
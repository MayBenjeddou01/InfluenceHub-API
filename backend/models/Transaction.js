const TransactionSchema = new Schema({
    ID: { type: String, required: true },
    Amount: { type: Number, required: true },
    Date: { type: Date, required: true },
    Type: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
 
  
  export const Transaction = mongoose.model('Transaction', TransactionSchema);
  
  
const SubscriptionSchema = new Schema({
    ID: { type: String, required: true },
    StartDate: { type: Date, required: true },
    EndDate: { type: Date, required: true },
    Status: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
 
  export const Subscription = mongoose.model('Subscription', SubscriptionSchema);
  
  
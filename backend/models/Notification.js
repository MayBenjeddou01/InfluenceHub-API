const NotificationSchema = new Schema({
    ID: { type: String, required: true },
    Message: { type: String, required: true },
    Time: { type: Date, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
 
  
  export const Notification = mongoose.model('Notification', NotificationSchema);
  
  
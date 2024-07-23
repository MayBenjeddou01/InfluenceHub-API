const MessageSchema = new Schema({
    ID: { type: String, required: true },
    Sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    Time: { type: Date, required: true },
    Chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
  });
  
  
  
  export const Message = mongoose.model('Message', MessageSchema);
  
  
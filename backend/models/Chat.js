const ChatSchema = new Schema({
    ID: { type: String, required: true },
    Members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    Creation: { type: Date, required: true },
  });
  
 
  
  export const Chat = mongoose.model('Chat', ChatSchema);
  
  
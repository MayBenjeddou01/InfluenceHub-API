const VideoCallSchema = new Schema({
    ID: { type: String, required: true },
    Time: { type: Date, required: true },
    Members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    Chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
  });
  
 
  export const VideoCall = mongoose.model('VideoCall', VideoCallSchema);
  
  
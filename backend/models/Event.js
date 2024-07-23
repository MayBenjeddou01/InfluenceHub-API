const EventSchema = new Schema({
    ID: { type: String, required: true },
    Title: { type: String, required: true },
    Date: { type: Date, required: true },
    Time: { type: String, required: true },
    Calendar: { type: Schema.Types.ObjectId, ref: 'Calendar', required: true },
    Type: { type: String, required: true },
  });
  
 
  
  export const Event = mongoose.model('Event', EventSchema);
  
  
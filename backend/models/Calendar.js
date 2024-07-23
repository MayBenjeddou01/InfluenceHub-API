const CalendarSchema = new Schema({
    ID: { type: String, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    Events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  });
  
 
  
  export const Calendar = mongoose.model('Calendar', CalendarSchema);
  
  
const ReservationSchema = new Schema({
    ID: { type: String, required: true },
    Created: { type: Date, required: true },
    Time: { type: Date, required: true },
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    TargetUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
 
  
  export const Reservation = mongoose.model('Reservation', ReservationSchema);
  
  
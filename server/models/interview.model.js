import mongooese from "mongoose";


const questionsSchema = new mongooese.Schema({
  question:String,
  difficulty:String,
  timeLimt:String,
  answer:String,
  feedback:String,
  score:{type:Number,default:0},
  confidence:{type:Number,default:0},
  communication:{type:Number,default:0},
  correctness:{type:Number,default:0},
})
const interviewScehma = new mongooese.Schema({
  userId : {
    type:mongooese.Schema.Types.ObjectId,
    ref:"User",
    required : true
  },
  role : {
    type: String,
    required : true
  },
  experience : {
    type : String,
    required : true
  },
  mode:{
    type:String,
    enum:["HR","Technical"],
    required : true
  },
  resumeText:{
    type:String,
  },
  questions :{

  }
},{timestamps:true})
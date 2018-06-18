import mongoose from 'mongoose'

export type AuthorModel = mongoose.Document & {
  firstName: string,
  lastName: string
}

const schema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: String
  },
  {
    id: true,
    timestamps: true
  }
)

export default mongoose.model('Author', schema)

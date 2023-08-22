import Joi from "joi"

export const contactValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(new RegExp("^(2|3|5|6|7|9)[0-9]{6}$")).required(),
  // phone: Joi.string().length(7).required(),
  address: Joi.string().min(3).allow("").optional(),
})

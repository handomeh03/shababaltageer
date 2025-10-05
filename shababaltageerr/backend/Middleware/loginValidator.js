import Joi from "joi";

const phoneRegex = /^(07[789]\d{7})$/;

export const loginSchema=Joi.object({
    phonenumber: Joi.string()
    .pattern(phoneRegex)
    .required()
    .messages({
      "string.empty": "رقم الهاتف مطلوب",
      "string.pattern.base": "رقم الهاتف غير صالح",
    }),
    password: Joi.string().required().messages({
       "string.empty": "كلمة السر مطلوبة",
     }),  
})
export function loginValid(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    req.body = value;
    next();
  };
}
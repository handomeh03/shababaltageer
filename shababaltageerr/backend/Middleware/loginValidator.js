import Joi from "joi";
export const loginSchema=Joi.object({
   national_number: Joi.string().length(10).required().messages({
       "string.empty": "الرقم الوطني مطلوب",
       "string.length": "الرقم الوطني لازم يكون 10 أرقام",
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
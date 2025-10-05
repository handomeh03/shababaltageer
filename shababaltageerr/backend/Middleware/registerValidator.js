import Joi from "joi";

const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,}$/;
const phoneRegex = /^(07[789]\d{7})$/;

export const registerSchema = Joi.object({
  full_name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "الاسم مطلوب",
    "string.min": "الاسم لازم يكون على الأقل 3 حروف",
    "string.max": "الاسم طويل جدًا",
  }),
  phoneNumber: Joi.string()
    .pattern(phoneRegex)
    .required()
    .messages({
      "string.empty": "رقم الهاتف مطلوب",
      "string.pattern.base": "رقم الهاتف غير صالح",
    }),

  location: Joi.string().required().messages({
    "string.empty": "الموقع مطلوب",
  }),
  age: Joi.number().required().messages({
    "number.base": "العمر لازم يكون رقم",
    "number.min": "العمر لازم يكون على الأقل 18",
  }),
  description: Joi.string().min(10).max(200).required().messages({
    "string.empty": "الوصف مطلوب",
    "string.min": "الوصف لازم يكون على الأقل 10 أحرف",
    "string.max": "الوصف طويل جدًا",
  }),
  password: Joi.string().pattern(strongPassword).required().messages({
    "string.empty": "كلمة السر مطلوبة",
    "string.pattern.base":  "كلمة السر لازم تحتوي على حرف كبير، حرف صغير، رقم ورمز خاص وطولها ≥ 8",
  }),
});
export function registerValid(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    req.body = value;
    next();
  };
}

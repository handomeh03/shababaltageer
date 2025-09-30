import Joi from "joi";



export const editEventSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.empty": "الاسم مطلوب",
    "string.min": "الاسم لازم يكون على الأقل 3 حروف",
    "string.max": "الاسم طويل جدًا",
  }),
  location: Joi.string().min(3).max(50).messages({
    "string.empty": "الموقع مطلوب ",
    "string.min": "اسم الموقع لازم يكون على الأقل 3 حروف",
    "string.max": "اسم الموقع طويل جدًا",
  }),
  description: Joi.string().min(10).max(200).messages({
    "string.empty": "الوصف مطلوب",
    "string.min": "الوصف لازم يكون على الأقل 10 أحرف",
    "string.max": "الوصف طويل جدًا",
  }),
  image: Joi.string().min(10).max(200).messages({
    "string.empty": " الصورة مطلوبة "
  }),

  status: Joi.string()
  .valid("active", "inactive", "cancelled")
  .messages({
    "any.required": "الحالة مطلوبة",
    "any.only": "الحالة لازم تكون واحدة من: فعال, غير فعال, متوقف",
  }),

 number_of_members: Joi.number().messages({
    "number.base": "العدد لازم يكون رقم",
  }),
  
 price: Joi.number()
  .positive()
  .messages({
    "number.base": "السعر لازم يكون رقم",
    "number.positive": "السعر لازم يكون أكبر من 0",
    "any.required": "السعر مطلوب",
  }),

});
export function EditEventValid(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    req.body = value;
    next();
  };
}

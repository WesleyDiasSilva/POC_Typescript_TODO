import Joi from 'joi'

export const newTaskModel = Joi.object({
  name: Joi.string().required().min(3),
  priority: Joi.string().valid("high", "medium", "low").required(),
  finished: Joi.boolean()
})
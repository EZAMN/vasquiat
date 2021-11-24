export const validatePayload = (schema) => (req, res, next) => {
  const { params, query, body } = schema;
  const errors: { body?: string; query?: string; params?: string } = {};

  if (body) {
    const { error } = body.validate(req.body);
    if (error) {
      errors.body = error;
    }
  }

  if (params) {
    const { error } = params.validate(req.params);
    if (error) {
      errors.params = error;
    }
  }

  if (query) {
    const { error } = query.validate(req.query);
    if (error) {
      errors.query = error;
    }
  }

  if (errors.params || errors.query || errors.body) {
    res.status(400).json({
      success: false,
      errors,
    });
    return;
  }

  next();
};

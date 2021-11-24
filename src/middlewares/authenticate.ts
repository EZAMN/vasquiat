import { validApiKeys } from '../providers/config';

function unauthorized(res) {
  return res.status(401).json({
    error: 'Unauthorized',
  });
}

export function authenticate(req, res, next) {
  const { apikey } = req.headers;

  if (!apikey) {
    unauthorized(res);
    return;
  }

  const isValidKey = validApiKeys.includes(apikey.toString());

  if (!isValidKey) unauthorized(res);
  if (isValidKey) next();
}

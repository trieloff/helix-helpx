async function pre(payload, action) {
  const { logger, secrets, request: actionReq } = action;

  logger.info(payload);
  logger.info(action);
  console.log(action.request.headers);

  return { content: {meta: {headers: action.request.headers.join('\n')}}}
}

module.exports.pre = pre;
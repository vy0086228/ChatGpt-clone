import moment from "moment";

const logRequestTime = (req, res, next) => {
  const time = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log(`[${time}] ${req.method} request to ${req.url}`);
  next();
};

export default logRequestTime;

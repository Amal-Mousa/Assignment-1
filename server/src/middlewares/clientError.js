const clientError = (req, res, next) => {
  res.status(404).json({
    message: 'Page Not Found'
  });
  next();
};

export default clientError;

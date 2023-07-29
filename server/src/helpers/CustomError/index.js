class CustomError {
  status;
  message;

  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}

export default CustomError;

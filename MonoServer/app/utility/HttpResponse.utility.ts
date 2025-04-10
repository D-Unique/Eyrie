type DataType = {
  accessToken?: string
  refreshAccessToken?: string
}

export class HttpResponse {
    static OK(data: DataType | null = null, message = 'Success') {
      return {
        status: 200,
        message,
        data,
      };
    }
  
    static Created(data: DataType | null = null, message = 'Resource created') {
      return {
        status: 201,
        message,
        data,
      };
    }
  
    static BadRequest(data: DataType | null= null, message = 'Bad Request',) {
      return {
        status: 400,
        message,
        data,
      };
    }
  
    static Unauthorized(message = 'Unauthorized') {
      return {
        status: 401,
        message,
      };
    }
  
    static Forbidden(message = 'Forbidden') {
      return {
        status: 403,
        message,
      };
    }
  
    static NotFound(message = 'Not Found') {
      return {
        status: 404,
        message,
      };
    }
  
    static Conflict(message = 'Conflict') {
      return {
        status: 409,
        message,
      };
    }
  
    static UnprocessableEntity(data: DataType | null = null, message = 'Unprocessable Entity',) {
      return {
        status: 422,
        message,
        data,
      };
    }
  
    static InternalServerError(message = 'Internal Server Error') {
      return {
        status: 500,
        message,
      };
    }
  }
  
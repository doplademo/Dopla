export enum MethodType {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }
  
  export enum HeaderTypes {
    CONTENT_TYPE = 'Content-Type',
    AUTHORIZATION = 'Authorization',
    ACCEPT = 'Accept',
  }
  
  export enum ContentTypes {
    MULTIPART = 'multipart/form-data',
    JSON = 'application/json',
    URL_ENCODED = 'application/x-www-form-urlencoded',
  }
  
  export enum ResponseCode {
    SUCCESS = 200,
    OPERATION_SUCCESS = 201,
    CONFLICT = 409,
    UNAUTHENTICATED = 401,
    BLOCKED = 426,
    SERVER_ERROR = 500,
  }
  
  export interface ApiHeader {
    [key: string]: string;
  }
  
  /**
   * Wrapper of the axios response
   *
   * @template B The type of the endpoint response.
   * @var status status code returned by Axios.
   *
   * @public
   */
  export interface ApiResponse<B> {
    status: number;
    data: B;
  }
  
  export interface RequestBundle<B> {
    url: string;
    config: {
      method: MethodType;
      headers?: ApiHeader;
      excludeStringify?: boolean;
    };
    body?: B;
  }
  
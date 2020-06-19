import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpEventNormalizer from "@middy/http-event-normalizer";
import httpErrorHandler from "@middy/http-error-handler";

export default (handler) =>
  middy(handler).use([
    httpJsonBodyParser(), // parses stringified body - no need to do JSON.parse(event.body)
    httpEventNormalizer(), // reduces errors
    httpErrorHandler(),
  ]); // works with create error module

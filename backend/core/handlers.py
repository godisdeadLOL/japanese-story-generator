from fastapi import FastAPI
from fastapi.responses import JSONResponse

from fastapi.exceptions import RequestValidationError
from exceptions import ServiceException

async def service_exception_handler(request, e):
    return JSONResponse( {'detail' : e.detail}, 500 )

async def rate_limit_handler(request, e):
    return JSONResponse({'detail' : 'Rate Limit Exceeded'}, 429)

async def data_validation_handler(request, e):
    return JSONResponse({'detail' : 'Wrong Data'}, 422)

def add_exception_handlers(app : FastAPI) :
    app.add_exception_handler(ServiceException, service_exception_handler)
    app.add_exception_handler(429, rate_limit_handler)
    app.add_exception_handler(RequestValidationError, data_validation_handler)
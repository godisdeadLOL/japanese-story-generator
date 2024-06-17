from fastapi import FastAPI, HTTPException
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse, PlainTextResponse

from core.handlers import add_exception_handlers
import core.config
import core.limiter
from core.middleware import add_cors

from router import router as base_router

app = FastAPI()
add_cors(app)
add_exception_handlers(app)

app.include_router(base_router)
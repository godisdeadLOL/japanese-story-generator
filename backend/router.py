from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse, PlainTextResponse, StreamingResponse

from exceptions import ServiceException
from schemas import GenerateRequest
import service

from core.limiter import limiter
import core.config as config

router = APIRouter()

@router.get('/')
async def index() :
    return JSONResponse(service.get_root())

@router.post('/generate')
@limiter.limit(config.rate_limit)
async def generate(request : Request, data : GenerateRequest) :
    content = await service.generate(data)
    return PlainTextResponse(content) # StreamingResponse(generator, media_type="text/event-stream")
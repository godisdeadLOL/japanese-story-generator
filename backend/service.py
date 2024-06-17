import httpx

from exceptions import ServiceException
from schemas import GenerateRequest
from utils import check_proxy_error, parse_openai_chunk, prepare_openai_request, dump

import core.config as config

def get_root() :
    return {'status' : 'ok'}

async def generate(data : GenerateRequest) -> str :
    client = httpx.AsyncClient()
    request = prepare_openai_request(client, data)
    
    try:
        response : httpx.Response = await client.send(request, stream=True)
        response.raise_for_status()
    except:
        raise ServiceException('Completions Error')
    
    content = ''
    try :
        async for chunk in response.aiter_lines() :
            ch = parse_openai_chunk(chunk)
            if ch != None : content += ch
    finally :
        await response.aclose()
        await client.aclose()
    
    if config.debug : 
        dump(content)
    
    if check_proxy_error(content) : raise ServiceException('Completions Error')
    
    return content
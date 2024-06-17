from fastapi import Request
from slowapi import Limiter

def key_func(request : Request) :
    forwarded = request.headers.get('x-forwarded-for', 'localhost')
    print('forwarded:', forwarded)
    return forwarded

limiter = Limiter(key_func=key_func)
from slowapi import Limiter
from slowapi.util import get_ipaddr, get_remote_address

limiter = Limiter(key_func=get_remote_address)
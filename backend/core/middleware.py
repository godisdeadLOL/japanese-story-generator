from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import core.config as config

def add_cors(app : FastAPI) :
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.allow_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
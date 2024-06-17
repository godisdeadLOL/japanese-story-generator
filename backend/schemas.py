from typing import Annotated, Literal
from pydantic import BaseModel, Field


class GenerateRequest(BaseModel) :
    level : Literal['Novice', 'Intermediate', "Advanced"]
    sentences : Annotated[int, Field(ge=1, le=10)]
    notes : Annotated[str, Field('', max_length=100)]
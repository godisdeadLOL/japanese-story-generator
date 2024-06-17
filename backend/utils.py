import json
import httpx
from schemas import GenerateRequest
import core.config as config

def prepare_openai_messages(data : GenerateRequest) :
    notes_block = f"""
    ### Additional notes
    {data.notes}
    """
    
    instructions_block = f"""
    ### Instructions
    My japanese level is about {data.level}.
    Come up with a story in japanese. Make it corresponding to my level.
    Write every sentence on a new line.
    Don't write any transcriptions.
    Follow additional notes.
    Write excactly {data.sentences} sentence(s).
    """
    
    prefill_block = "Alright. I will write {data.sentences} sentence(s). Here's your story:"
    
    return [
        {'role' : 'system', 'content' : notes_block},
        {'role' : 'user', 'content' : instructions_block},
        {'role' : 'assistant', 'content' : prefill_block}
    ]
    
def prepare_openai_request(client : httpx.AsyncClient, data : GenerateRequest) :
    messages = prepare_openai_messages(data)
    
    json = {
        'messages' : messages,
        'model' : config.openai_model,
        'max_tokens' : config.openai_max_tokens,
        'stream' : True
    }
    
    headers = { "Authorization" : f"Bearer {config.openai_key}" }
    
    url = config.openai_url + 'chat/completions'
    request = client.build_request("POST", url, json=json, headers=headers, timeout=config.openai_timeout)
    
    return request

def parse_openai_chunk(chunk : str) :
    if not chunk.startswith('data:') : return ''
    
    raw = chunk[5:]
    if raw == '[DONE]' : return None
    
    try :
        data = json.loads(raw)
        return data['choices'][0]['delta']['content']
    except : return ''
    
def check_proxy_error(content : str) :
    return 'proxy' in content.lower()


def dump(content, path='./dump.txt') :
    with open(path, 'w', encoding='utf-8') as f :
        f.write(content)
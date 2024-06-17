import os
import dotenv

dotenv.load_dotenv()

rate_limit = os.environ['RATE_LIMIT']

openai_url = os.environ['OPENAI_URL']
openai_key = os.environ['OPENAI_KEY']
openai_timeout = int(os.environ['OPENAI_TIMEOUT'])
openai_model = os.environ['OPENAI_MODEL']
openai_max_tokens = int(os.environ['OPENAI_MAX_TOKENS'])

allow_origins = os.environ['ALLOW_ORIGINS'].split(',')

debug=False
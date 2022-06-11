import chat
from bson import json_util, ObjectId
import json
import aiohttp_cors


def get_messeges(request):
    conversation_id = int(request.rel_url.query.get('conversation_id'))

    pipeline = [
        {
            "$match": {
                "conversation_id": conversation_id
            }
        },
        {
            "$sort": {
                "created_at": 1
            }
        },
        {
            "$project": {
                "created_at": 0
            }
        }
    ]
    Chat = chat.Chat
    data = Chat.objects().aggregate(pipeline)

    messages_of_the_conversation_id = json.loads(json_util.dumps(data))
    return messages_of_the_conversation_id

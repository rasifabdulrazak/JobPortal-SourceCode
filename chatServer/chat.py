from aiohttp import web
import socketio
from models import Chat
import mongo_pipelines
import aiohttp_cors
from settings import *

sio = socketio.AsyncServer(
    cors_allowed_origins='*',
    cors_credentials=True
)


## Creates a new Aiohttp Web Application
app = web.Application()

cors = aiohttp_cors.setup(app)


online_users = {}


@sio.event
def set_online(sid, data):
    """
    set user sid in the dictionary
    """
    print("============== set online ==================")
    online_users[data["username"]] = sid
    print(online_users)


# Binds our Socket.IO server to our Web App
## instance
sio.attach(app)



@sio.event
def connect(*args):
    print("I'm connected!")

@sio.event
def disconnect(*args):
    print("I'm disconnect!")



@sio.on('message')
async def all_messages(sid, message):
    print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    print(message, "==========================")
    print("Socket ID: " , sid)
    print(online_users)

    if message['receiver'] in online_users:
        print("=========== receiver ================", online_users)
        await sio.emit('pass_message',message,room=online_users[ message['receiver'] ])

    if message['sender'] in online_users:
        print("=========== sender ================", online_users[ message['sender'] ])
        await sio.emit('pass_message',message,room=online_users[ message['sender'] ])

    chat = Chat(
        conversation_id=message["conversation_id"],
        sender=message["sender"],
        message=message['message']
    ).save()
    print(message)
    print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")




# get the messages of the selected coversation
async def _messages(request):
   
    return web.json_response({
        "messages":  mongo_pipelines.get_messeges(request)
    })


# cors setup
CORS_SETUP = {
    "ROUTE_AND_OPTIONS": {
        "http://localhost:3000": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
            max_age=3600,
        )
    }
}


url = cors.add(app.router.add_resource("/messages"))
route = cors.add(
    url.add_route("GET", _messages), CORS_SETUP["ROUTE_AND_OPTIONS"])



## We kick off our server
if __name__ == '__main__':
    web.run_app(app)
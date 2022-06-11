from uuid import uuid4
from datetime import datetime
from mongoengine.fields import ListField, ReferenceField
from mongoengine import Document, StringField, IntField, DateTimeField





# Chat Document containes the information about the chat details
class Chat(Document):
    conversation_id = IntField(required=True)
    sender = IntField(required=True)
    message = StringField(required=False)
    created_at = DateTimeField(required=True, default=datetime.now())




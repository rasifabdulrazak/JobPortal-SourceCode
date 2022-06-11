# mongodb+srv://Rasif:<password>@cluster0.xkwg2.mongodb.net/?retryWrites=true&w=majority
from decouple import config
from mongoengine import connect




# MONGO_CLIENT = config("mongodb+srv://shahin:shahin@cluster0.xkwg2.mongodb.net/?retryWrites=true&w=majority")
# connect to mogo db database
connect('my_db', host='127.0.0.1', port=27017)
print()
import mysql.connector

db = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = '#'

)

# prepare cursor

cursorObj = db.cursor()

#create db
cursorObj.execute("CREATE DATABASE #")
print("Done!")
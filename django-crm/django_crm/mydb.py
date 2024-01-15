import mysql.connector

db = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = '956677Enzi!'

)

# prepare cursor

cursorObj = db.cursor()

#create db
cursorObj.execute("CREATE DATABASE bruhMoment")
print("Done!")
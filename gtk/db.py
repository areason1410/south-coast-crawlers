import requests

reqs = ["GET", "POST", "DELETE", "PATCH", "PUT"]

dbUrl = "http://localhost:3000/south-coast-crawlers"

def databaseRequest(url, reqType="", data={}):
    if reqType == "":
        reqType = "GET"
    
    if reqType not in reqs:
        return
    if(reqType == "GET"):
        response = requests.get(url)
        return response.json()
    else:
        return
    



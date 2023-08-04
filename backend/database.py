import harperdb

HARPERDB_PASSWORD = '0^HpT47K8U@i'
HARPERDB_URL = "https://cloud-1-geney.harperdbcloud.com"
HARPERDB_USERNAME = "geney"
db = harperdb.HarperDB(
    url=HARPERDB_URL,
    username=HARPERDB_USERNAME,
    password=HARPERDB_PASSWORD
)

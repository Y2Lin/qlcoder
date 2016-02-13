import hashlib
name = "流云破风"
date = "20160207"

m = hashlib.md5()
m.update("Nobody inspects") 
m.hexdigest()
print(m.hexdigest())
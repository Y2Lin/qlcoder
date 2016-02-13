#coding:utf-8
file_object = open('144043123647536.txt')
try:
    all_the_text = file_object.read( )
    list = all_the_text.split('\r\n')
    # result = 0
    for var in list:
      print var 
      # if(var.split(' ')[0]==="query")
      #   print var.split(' ')[]
      # result = result
    # print list
finally:
    file_object.close( )
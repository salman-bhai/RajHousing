from PIL import Image
import os
from os import walk
from os import listdir
from os.path import isfile, join

files_list = [f for f in listdir(".") if isfile(join(".", f))]
for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
        files_list.append(os.path.join(root, name))
h = 475

for file_name in files_list:
	if(file_name[-4:] != ".jpg"):
		continue
	else:
		with Image.open(file_name) as img:
			width,height = img.size
			print(file_name + " " + str(width) + " " + str(height))

			if height > h:
				new_width = ((int)((float(width)/float(height))*h))
				img = img.resize((new_width,h), Image.ANTIALIAS)

			print("Image size after resizing")
			width,height = img.size
			print(str(width) + " " + str(height))

			img.save(file_name, optimize=True, quality=70)
import os
from os import listdir
from os.path import isfile, join
mypath = "C:\Users\utkarsh_23\Desktop\RajHousing\images\projects\Sarang Apartment\Actual Site Images"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
for i in range(len(onlyfiles)):
    os.rename(mypath + "\\" + onlyfiles[i] , mypath + "\\" + 'img' + str(i + 1) + '.jpg')

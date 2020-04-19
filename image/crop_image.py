from PIL import Image
import os, os.path

for i in range (13):
    i = i+1
    DIR = 'delavnica'+str(i)
    DIR_pic = DIR+'/'
    num_pic = len([name for name in os.listdir(DIR) if os.path.isfile(os.path.join(DIR, name))])
    os.mkdir(DIR_pic+'cropped')
    for i in range(num_pic):
        i = i+1
        img = Image.open(DIR_pic+str(i)+".jpg")
        width, height = img.size   # Get dimensions
        
        left = abs(width - width*0.5)/2
        top = abs(height - width*0.5)/2
        right = abs(width + width*0.5)/2
        bottom = abs(height + width*0.5)/2

        # Crop the center of the image
        img = img.crop((left, top, right, bottom))
        img = img.save(DIR_pic+"cropped/"+str(i)+"_cropped.jpg")

#----------------------------------------------

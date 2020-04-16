from PIL import Image
for i in range(10):
    i=i+7
    img = Image.open(str(i)+".jpg")
    width, height = img.size   # Get dimensions

    hpercent = (baseheight / float(img.size[1]))
    wsize = int((float(img.size[0]) * float(hpercent)))
    img = img.resize((wsize, baseheight), PIL.Image.ANTIALIAS)
         
    left = abs(width - 3000)/2
    top = abs(height - 3000)/2
    right = abs(width + 3000)/2
    bottom = abs(height + 3000)/2

    # Crop the center of the image
    img = img.crop((left, top, right, bottom))

    img = img.save("cropped/"+str(i)+"_cropped.png")

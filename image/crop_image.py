from PIL import Image
for i in range(12):
    i = i+1
    img = Image.open("delavnica2/"+str(i)+".jpg")
    width, height = img.size   # Get dimensions
    
    left = abs(width - width*0.5)/2
    top = abs(height - width*0.5)/2
    right = abs(width + width*0.5)/2
    bottom = abs(height + width*0.5)/2

    # Crop the center of the image
    img = img.crop((left, top, right, bottom))
    img = img.save("delavnica2/cropped/"+str(i)+"_cropped.png")

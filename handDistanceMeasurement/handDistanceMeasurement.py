####################################
#     Hand Distance Measurement    #
####################################

#### Libraries ####
import cv2
from cvzone.HandTrackingModule import HandDetector
import math
import numpy as np
import cvzone


# Launch Webcam and setting dimensions
cap=cv2.VideoCapture(0)
cap.set(3,1280)
cap.set(4,720)

# Defining the detector
detector=HandDetector(detectionCon=0.8,maxHands=2)

# Setting samples of distance between the hand and the camera
x=[800,500,400,305,250,200,175,145,132,113,100,87,80,75,70,67,62,59,57]
y=[0,17,22,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

# Finding the plot that fits the sample
coff=np.polyfit(x,y,2)


while True:
    success, img =cap.read() # Extracting frame from the video Capture
    
    # Extrating the coordinate of the hands in the frame using the detector
    hands, img =detector.findHands(img)
    if hands:
        lmList=hands[0]['lmList']

        # Extrating the Coordinates of 2 points from the skeleton of the hand
        x1,y1=lmList[5]
        x2,y2=lmList[17]

        # Calculating the distance between the two points
        distance= math.sqrt((y2-y1)**2 + (x2-x1)**2)

        # Determining the distance of the hand to the CAM
        a,b,c=coff
        distanceCM= a*distance**2+b*distance+c

        cvzone.putTextRect(img,"{} cm".format(int(distanceCM)),(x,y))

    cv2.imshow("Image",img)
    cv2.waitKey(1)
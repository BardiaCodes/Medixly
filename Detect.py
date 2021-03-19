import pandas as pd
from PIL import Image
from IPython.display import Image
import random
import os
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image, ImageEnhance, ImageChops, ImageFilter
import glob
import keras as k
import os
from PIL import Image, ImageOps
import numpy as np
from scipy.misc import imresize
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelBinarizer
import scipy.misc
from keras.utils import to_categorical

"""
**Leaving this to the side because the repository has no documentation**
# this is just getting the images from whatever folder we put it in, can change path value later
test_list = os.listdir("./test")
t_list = [ './test' + '/' + i  for i in test_list]

#originally it was "for path in file_list, but that made no sense since i think that referenced to the training set"
X_test = [np.array((ImageOps.fit(Image.open(path), (256, 256), Image.ANTIALIAS))) for path in test_list] 


X_test = np.array(X_test) #turns it into a numpy array 

X_test = X_test.reshape(X_test.shape[0], 3, 256, 256) #resizing it to 256 by 256, might need to modify these nunbers based on our test set
"""
"""

from numpy import loadtxt
from keras.models import load_model
from keras.applications.vgg16 import VGG16
model = VGG16(weights = "C:\\Users\\krish\\Downloads\\melanoma_melanoma_weights1.h5")
"""

import h5py

filename = "C:\\Users\\krish\\Downloads\\melanoma_melanoma_weights1.h5"

h5 = h5py.File(filename,'r')

futures_data = h5['futures_data']  # VSTOXX futures data
options_data = h5['options_data']  # VSTOXX call option data

h5.close()
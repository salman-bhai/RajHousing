import numpy as np

from PIL import Image
from rawkit.raw import Raw

filename = '4.CR2'
raw_image = Raw(filename)
buffered_image = np.array(raw_image.to_buffer())
image = Image.frombytes('RGB', (raw_image.metadata.width, raw_image.metadata.height), buffered_image)
image.save('4.JPG', format='jpeg')
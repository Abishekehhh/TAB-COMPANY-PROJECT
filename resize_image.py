from PIL import Image

# Load the image
image_path = r"src\assets\tab-icons.png"
img = Image.open(image_path)

# Get current dimensions
current_width, current_height = img.size
print(f"Original size: {current_width}x{current_height}")

# Set new width (CHANGE THIS VALUE)
new_width = 2000  # Set to your desired width in pixels

# Calculate new height to maintain aspect ratio
ratio = new_width / current_width
new_height = int(current_height * ratio)

# Resize the image
resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Save the resized image
output_path = r"src\assets\tab-icons.png"
resized_img.save(output_path, quality=95)

print(f"Resized to: {new_width}x{new_height}")
print(f"Saved to: {output_path}")

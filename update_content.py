import re
import os

# Paths
js_file_path = 'src/data/content.js'
letters_dir = 'letters'

# Read original content.js
with open(js_file_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Iterate over all text files in letters/ directory
for filename in os.listdir(letters_dir):
    if not filename.endswith('.txt'):
        continue
    
    file_path = os.path.join(letters_dir, filename)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        file_text = f.read()
    
    # Parse ID from the first line "LOCATION: Title (ID: film-id)"
    # We generated it as: f.write(f"LOCATION: {title} (ID: {film_id})\n")
    id_match = re.search(r'\(ID: (.*?)\)', file_text.split('\n')[0])
    
    if not id_match:
        print(f"Skipping {filename}: Could not find ID in first line.")
        continue
        
    film_id = id_match.group(1)
    
    # Extract CONTENT
    # We look for "CONTENT:\n" and take everything after it
    try:
        content_part = file_text.split('CONTENT:\n', 1)[1].strip()
    except IndexError:
        print(f"Skipping {filename}: Could not find CONTENT section.")
        continue

    # Escape backticks for JS template literal
    # Replaces ` with \`
    safe_content = content_part.replace('`', '\\`')

    # Update content.js using regex substitution
    # We want to replace group 2 with new content, wrapped in backticks
    
    pattern = re.compile(
        r'(id:\s*"' + re.escape(film_id) + r'".*?letter:\s*{.*?content:\s*)(["`])(.*?)(\2)',
        re.DOTALL
    )
    
    # Check if match exists
    if pattern.search(js_content):
        # Perform replacement
        # \1 is the prefix, safe_content is the new text, we use backticks
        js_content = pattern.sub(r'\1`' + safe_content + r'`', js_content)
        print(f"Updated content for ID: {film_id}")
    else:
        print(f"Warning: Could not find code block for ID {film_id} in {js_file_path}")

# Write updated content back to content.js
with open(js_file_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Finished updating content.js")

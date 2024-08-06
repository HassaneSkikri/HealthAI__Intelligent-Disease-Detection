import os
import site

def get_directory_size(directory):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(directory):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
    return total_size

site_packages_dir = site.getsitepackages()[0]
total_size = get_directory_size(site_packages_dir)

print(f"Total size of installed packages: {total_size / (1024 * 1024):.2f} MB")

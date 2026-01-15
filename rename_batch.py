# rename_batch.py
import os

# ===== 写死参数 =====
FOLDER = "北海"      # 目标文件夹
PREFIX = "bh"        # 新名字前缀
# ====================

def batch_rename(folder: str, prefix: str):
    if not os.path.isdir(folder):
        print(f"错误：{folder} 不是有效目录")
        return

    files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]
    files.sort()
    counter = 1

    for old_name in files:
        ext = os.path.splitext(old_name)[1]
        while True:
            new_name = f"{prefix}{counter}{ext}"
            new_path = os.path.join(folder, new_name)
            if not os.path.exists(new_path):
                break
            counter += 1
        old_path = os.path.join(folder, old_name)
        os.rename(old_path, new_path)
        print(f"{old_name}  ->  {new_name}")
        counter += 1

    print("全部重命名完成！")

if __name__ == "__main__":
    batch_rename(FOLDER, PREFIX)

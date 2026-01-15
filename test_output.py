import os
from pathlib import Path

def list_files_as_dict(folder_path: str) -> dict:
    """
    扫描指定文件夹，返回以文件夹名为键、
    文件列表为值的字典，文件路径使用相对于当前工作目录的相对路径。
    输出格式：
    {
        "北海": [
            "北海/IMG_2816.JPG",
            "北海/mov_bbb.mp4",
            ...
        ]
    }
    """
    path = Path(folder_path).resolve()
    if not path.is_dir():
        raise ValueError(f"{folder_path} 不是一个有效的文件夹路径")

    # 计算相对于当前工作目录的相对路径
    try:
        rel_path = path.relative_to(Path.cwd())
    except ValueError:
        # 如果不在当前工作目录下，则退而用传入的相对路径
        rel_path = Path(folder_path)

    folder_name = rel_path.name

    # 构造每条文件的相对路径：folder_name/filename
    files = [str(rel_path / f.name) for f in path.iterdir() if f.is_file()]

    return {folder_name: files}


# ------------------ 使用示例 ------------------
if __name__ == "__main__":
    folder = "./北海"          # 可改为任意相对路径
    result = list_files_as_dict(folder)
    print(result)

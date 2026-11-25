import html
import json
import os
import shutil
import subprocess


def main() -> None:
    root = os.getcwd()
    site_dir = os.path.join(root, "_site")
    os.makedirs(site_dir, exist_ok=True)
    entries = []

    for name in sorted(os.listdir(root), reverse=True):
        folder = os.path.join(root, name)
        pkg = os.path.join(folder, "package.json")
        if not os.path.isdir(folder) or not os.path.isfile(pkg):
            continue

        print(f"=== Building {name} ===")
        lockfile = os.path.join(folder, "package-lock.json")
        install_cmd = ["npm", "ci"] if os.path.isfile(lockfile) else ["npm", "install"]
        subprocess.run(install_cmd, cwd=folder, check=True)
        subprocess.run(["npm", "run", "build"], cwd=folder, check=True)

        cfg_path = os.path.join(folder, "invite.config.json")
        cfg = {}
        if os.path.isfile(cfg_path):
            with open(cfg_path, "r", encoding="utf-8") as f:
                cfg = json.load(f)

        slug = cfg.get("slug") or name
        title = cfg.get("title") or name
        date = cfg.get("date") or ""
        time_str = cfg.get("time") or ""
        venue = cfg.get("venue") or ""

        dist_dir = os.path.join(folder, "dist")
        target_dir = os.path.join(site_dir, slug)
        shutil.copytree(dist_dir, target_dir, dirs_exist_ok=True)
        entries.append(
            {
                "slug": slug,
                "title": title,
                "date": date,
                "time": time_str,
                "venue": venue,
            }
        )

    cards_html = "\n".join(
        f"""      <a class="card" href="./{html.escape(e['slug'])}/">
        <div class="date">{html.escape(e['date'])} {html.escape(e['time'])}</div>
        <div class="title">{html.escape(e['title'])}</div>
        <div class="venue">{html.escape(e['venue'])}</div>
        <span class="cta">초대장 보기 →</span>
      </a>"""
        for e in entries
    )

    index_html = f"""<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>InviteCraft · 모바일 초대장 모음</title>
    <style>
      body {{
        margin: 0;
        font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', system-ui, sans-serif;
        background: #e0e7d9;
        color: #2f2120;
        display: flex;
        justify-content: center;
        padding: 40px 16px;
      }}
      main {{
        width: 100%;
        max-width: 480px;
      }}
      h1 {{
        font-size: 1.5rem;
        margin: 0 0 8px;
        text-align: center;
      }}
      p.desc {{
        margin: 0 0 24px;
        text-align: center;
        color: #5b504e;
        font-size: 0.92rem;
      }}
      .list {{
        display: flex;
        flex-direction: column;
        gap: 14px;
      }}
      .card {{
        display: block;
        background: #ffffff;
        border: 1px solid #dce4d2;
        border-radius: 16px;
        padding: 20px;
        text-decoration: none;
        color: inherit;
        box-shadow: 0 6px 20px rgba(47, 33, 32, 0.06);
      }}
      .date {{
        font-size: 0.82rem;
        color: #6b7c65;
        font-weight: 600;
        margin-bottom: 6px;
      }}
      .title {{
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 4px;
      }}
      .venue {{
        font-size: 0.88rem;
        color: #5b504e;
        margin-bottom: 12px;
      }}
      .cta {{
        display: inline-block;
        font-size: 0.85rem;
        font-weight: 600;
        color: #d97a96;
      }}
    </style>
  </head>
  <body>
    <main>
      <h1>InviteCraft</h1>
      <p class="desc">모바일 초대장 목록</p>
      <div class="list">
{cards_html}
      </div>
    </main>
  </body>
</html>
"""
    with open(os.path.join(site_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(index_html)


if __name__ == "__main__":
    main()

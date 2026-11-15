import re

src = open("index_old.html", encoding="utf-8").read()

# 1. remove the teacherGroups block
src = re.sub(r"const teacherGroups = \{.*?\n\s*\};\s*\n", "", src, count=1, flags=re.S)

# 2. remove the embedded timetable CSV block
src = re.sub(r"const embeddedMasterTimetableCSV = `.*?`;\s*\n", "", src, count=1, flags=re.S)

# 3. link data.js just before the main script
src = re.sub(r"<script>(\s*)// MASTER DATA",
             r'<script src="data.js"></script>\n    <script>\1// MASTER DATA',
             src, count=1)

open("index.html", "w", encoding="utf-8").write(src)
print("Done: index.html created")

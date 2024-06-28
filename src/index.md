---
layout: base.njk
---
# Rowing 

| Date | Time | Distance |
| :--- | :--- | --------------: |
{% for row in rowing %}| {{ row.date }} | {{ row.time_formatted }} | {{ row.distance }} meters |
{% endfor %}

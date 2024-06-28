---
layout: layouts/home.njk
---

{% for row in rowing %}
{{ row.time_formatted }}
{% endfor %}

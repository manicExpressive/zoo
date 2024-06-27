# ROWING

{% for row in rowing %}
  * A row: {{ row.time_formatted }} to go {{ row.distance }}m at {{ row.date }}</li>
{% endfor %}

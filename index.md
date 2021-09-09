---
layout:     static_page
permalink:  /
title:      "Home"
---

Hello! Our names are Jiri and Wessel.
On this blog, we will post our or others' solutions to the exercises from [_High-Dimensional Statistics: A Non-Asymptotic Viewpoint_](https://www.cambridge.org/core/books/highdimensional-statistics/8A91ECEEC38F46DAB53E9FF8757C7A4E)
by [Martin J. Wainwright](https://people.eecs.berkeley.edu/~wainwrig).
Find out more about us [here]({{ site.baseurl }}/about).

Due to legal reasons, we are unfortunately unable to restate the text of the questions.
You can purchase the book [here](https://www.cambridge.org/core/books/highdimensional-statistics/8A91ECEEC38F46DAB53E9FF8757C7A4E),
or gain access [here](https://idiscover.lib.cam.ac.uk/permalink/f/1ii55o6/44CAM_ALMA51577318610003606)
if you are a student at the University of Cambridge.

## Tags

<!-- Capture all tags. -->
{% capture tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags = tags | split: ',' | sort_natural %}

<p class="tags">
    <!-- Print general tag first. -->
    {% for i in (0..site.tags.size) %}{% unless forloop.last
        %}{% assign tag = tags[i]
        %}{% if tag == "general" %}{% else %}{% continue %}{% endif
        %}<a href="#{{ tag | cgi_escape }}" class="tag">{{ tag }}
            <span class="count">({{ site.tags[tag].size }})</span>
        </a>{{ ""
    }}{% endunless %}{% endfor %}
    <!-- Print tags associated to chapters 2-9. -->
    {% for i in (0..site.tags.size) %}{% unless forloop.last
        %}{% assign tag = tags[i]
        %}{% assign tag_start = tag | slugify | slice: 0, 8
        %}{% assign tag_start2 = tag | slugify | slice: 0, 9
        %}{% if tag_start == "chapter-" %}{% else %}{% continue %}{% endif
        %}{% if tag_start2 == "chapter-1" %}{% continue %}{% endif
        %}<a href="#{{ tag | cgi_escape }}" class="tag">{{ tag }}
            <span class="count">({{ site.tags[tag].size }})</span>
        </a>{{ ""
    }}{% endunless %}{% endfor %}
    <!-- Print tags associated to chapters 10+. -->
    {% for i in (0..site.tags.size) %}{% unless forloop.last
        %}{% assign tag = tags[i]
        %}{% assign tag_start = tag | slugify | slice: 0, 9
        %}{% if tag_start == "chapter-1" %}{% else %}{% continue %}{% endif
        %}<a href="#{{ tag | cgi_escape }}" class="tag">{{ tag }}
            <span class="count">({{ site.tags[tag].size }})</span>
        </a>{{ ""
    }}{% endunless %}{% endfor %}
    <!-- Print other tags. -->
    {% for i in (0..site.tags.size) %}{% unless forloop.last
        %}{% assign tag = tags[i]
        %}{% assign tag_start = tag | slugify | slice: 0, 8
        %}{% if tag_start == "chapter-" %}{% continue %}{% endif
        %}{% if tag == "general" %}{% continue %}{% endif
        %}<a href="#{{ tag | cgi_escape }}" class="tag">{{ tag }}
            <span class="count">({{ site.tags[tag].size }})</span>
        </a>{{ ""
    }}{% endunless %}{% endfor %}
</p>

<!-- Print general section. -->
{% for tag in tags %}
    {% if tag == "general" %}{% else %}{% continue %}{% endif %}
    {% assign words = tag | split: ' ' %}
    {% capture tag_titled %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
<h2 id="{{ tag | cgi_escape }}">{{ tag_titled }}</h2>
    {% include posts.html tag=tag %}
{% endfor %}

<!-- Print sections associated to chapters 2–9 tags. -->
{% for tag in tags %}
    {% assign tag_start = tag | slugify | slice: 0, 8 %}
    {% assign tag_start2 = tag | slugify | slice: 0, 9 %}
    {% if tag_start == "chapter-" %}{% else %}{% continue %}{% endif %}
    {% if tag_start2 == "chapter-1" %}{% continue %}{% else %}{% endif %}
    {% assign words = tag | split: ' ' %}
    {% capture tag_titled %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
<h2 id="{{ tag | cgi_escape }}">{{ tag_titled }}</h2>
    {% include posts.html tag=tag %}
{% endfor %}

<!-- Print sections associated to chapters 10+ tags. -->
{% for tag in tags %}
    {% assign tag_start = tag | slugify | slice: 0, 9 %}
    {% if tag_start == "chapter-1" %}{% else %}{% continue %}{% endif %}
    {% assign words = tag | split: ' ' %}
    {% capture tag_titled %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
<h2 id="{{ tag | cgi_escape }}">{{ tag_titled }}</h2>
    {% include posts.html tag=tag %}
{% endfor %}

<!-- Print sections associated to other tags. -->
{% for tag in tags %}
    {% assign tag_start = tag | slugify | slice: 0, 8 %}
    {% if tag_start == "chapter-" %}{% continue %}{% else %}{% endif %}
    {% if tag == "general" %}{% continue %}{% else %}{% endif %}
    {% assign words = tag | split: ' ' %}
    {% capture tag_titled %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
<h2 id="{{ tag | cgi_escape }}">{{ tag_titled }}</h2>
    {% include posts.html tag=tag %}
{% endfor %}
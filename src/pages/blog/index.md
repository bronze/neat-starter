---
templateEngineOverride: njk
layout: blog
title: Blog
path: /blog/
slug: blog
eleventyNavigation:
  key: Blog
  order: 3
---

<section class="mt-15">
    {% set postslist = collections.post %}

    {% for post in postslist | reverse %}
        <article class="my-8">
            <h2 class="font-bold text-3xl text-gray-900 mb-2">
                <a href="{{ post.url | url }}">
                    {% if post.data.title %}
                        {{ post.data.title }}
                    {% else %}
                        Untitled
                    {% endif %}
                </a>
            </h2>
            <p class="text-base leading-6 text-gray-500 mb-3">
                <time>
                    {{ post.date | readableDate }}
                    by
                    <a>{{ post.data.author }}</a>

                </time>
            </p>
            {% if post.data.description %}
                <p class="text-lg text-gray-500 mb-3">
                    {{ post.data.description }}
                </p>
            {% endif %}

            <p>
                <a href="{{ post.url | url }}" class="text-indigo-500 font-bold text-lg">
                    Read more →
                </a>
            </p>

        </article>
    {% endfor %}
</section>
Title: Hello Pelican!
Date: 2017-11-07 06:00
Author: Aleksejus Kononovicius
Tags: general, Python
Slug: hello-pelican
Status: published

Exactly seven years ago we have launched second iteration of the Physics of Risk
website under the flag of the EU structural fund project *Science of business and society*
(lt. *Mokslas verslui ir visuomenei*; see the
[article]({filename}/articles/2010/hello-world.md)).
The second iteration was different from the first one as it was powered by
WordPress (instead of Drupal) and was multilingual (instead of being available
only in Lithuanian).

Today I (Aleksejus) launch a third iteration of the Physics of Risk. There will
be some changes as we will replace WordPress with a static site generator
[Pelican](https://docs.getpelican.com/).<!--more-->

## Why Pelican?

In the recent years WordPress has grown quite a lot. It is no longer flexible
and lightweight platform aimed at people with decent IT knowledge. In those
7 years it has changed and evolved to become more user (writer) friendly.
Sadly some of the changes made developer/maintainer unfriendly and extremely
slow to run. During the recent year or so I have found myself spending more
and more time reading the documentation of the new APIs as well as how to
disable some features I do not intend to use (e.g., Customizer). While some
new APIs made life quite easier for the new or WordPress-oriented developers,
I primarily am a researcher and would prefer doing research instead of reading
the updated documentation and rewriting my own plugins or looking for
replacements for the old and no longer maintained plugins.

Another big change might come with WordPress 5, which is now available as
separate plugin - Gutenberg. As the rumor goes this new feature might break
plugins related to the content editor. In case of Physics of Risk this would
break multilingual functionality as well as some less visible functionalities
dependent on the meta fields. Some of the plugins are no longer maintained and
most likely will not be updated to be compatible with Gutenberg.

So instead of rebuilding the infrastructure with WordPress, I decided to switch
to something more suitable for my taste, current programming interests and
skills. I have chosen a static site generator as a replacement for the content
management system, because static site generators are fast (they produce static
html files, which just need to be served and are not processed on every lookup).
I have chosen Pelican, not Jekyll or Hugo, because it is written in Python
(not Ruby or Go) and I am rather familiar with it.

## Other changes

With Pelican I introduce couple of other changes.

From now on Physics of Risk will be written in English only. While Pelican
allows to write content in multiple languages, I simply find no
strength in me to continue writing texts in two languages. This working
pattern allows to review some ideas and correct some mistakes,
the overall quality of writing suffers
as usually content ends up being translated in word-by-word manner. I have
chosen English as the sole language for the new iteration of the website
as I believe that most of the readers are fluent in English. While majority
of the readers freely speak Lithuanian, foreign readers are not that rare and
would like not to lose them. So at this point I have already imported all
of the old articles, which were written in English (over 30 articles written
in Lithuanian only are no longer available).

There will be no longer a comment section on the website. While Pelican supports
comments by integrating 3rd-party systems, I am simply too lazy to do this.
If you are willing to leave comment feel free to do so on social media (preferably
on our Facebook page) or write the author of the post an email.

## In conclusion

I hope to gather enough strength to overcome the recent writers block and prepare
at least few new texts and interactive apps.

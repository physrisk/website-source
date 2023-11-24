Title: Axelrod's culture dissemination model
Date: 2017-12-19 08:00
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, politics, culture, Axelrod model, opinion dynamics
Slug: axelrod-culture-dissemination-model
Status: published
Image_url: uploads/2018/axelrod-plural-fixed.png

Here we will briefly present another classic agent-based model - Axelrod's model [cite id="Axelrod1997"]. In his article Axelrod argues that culture is formed through social interactions, that it is "something people learn from each other". Hence he presents a model which describes competition between cultural traits via social interactions between the agents.<!--more-->

## Model specification

In this model agents are placed on a square grid. In general the agents could placed on any [network topology](/tag/network-models/), but square grid is rather common choice for the simple models. In the interactive applet below the grid is toroidal (the edges of the grid are connected to the opposite edges of the grid).

Each cell on the grid represents a single agent. The agents in this model do not move (they are "locked" to their cells). Each of the agents has a certain culture. Here culture is characterized by a set of features (such as language, religion or other cultural "dimensions"). Each feature may take on any value from a given set of alternatives. These alternative values are referred to as traits. For example, language feature could take on traits "English", "French" or "Lithuanian", religion feature could take on traits "Christian", "Atheist" or "Muslim". To keep the model simple it is assumed that the number of alternative traits is the same for each feature.

In the interactive applet below you can choose to have from \\\( 1 \\\) to \\\( 3 \\\) features and from \\\( 2 \\\) to \\\( 25 \\\) traits per feature. These limits are imposed by the selected visualization technique, where cell's color represents agent's culture. In the applet the brightness of the red color indicates various traits associated with the first feature, brightness of green - the second feature, brightness of blue - the third feature. Simply put the culture in the applet below is RGB color coded.

After the initialization of the model the following steps are being continuously iterated:

1. One agent (A1) is chosen at random.
1. One of A1's neighbors (A2) is chosen at random.
1. A1 and A2 may interact with probability dependent on their cultural similarity. Namely, the interaction probability is equal to the number of shared traits (features with the same values) divided by the total number of features. If A1 and A2 interact, then A1 replaces one of his traits with a trait from A2. The "copied" trait is picked at random from among the traits of A2 that A1 does not have. If all traits match, then no trait is "copied".

## Example iteration

For example at some point A1 is chosen and he has "English" and "Atheist" traits. His randomly picked neighbor (A2) has traits "English" and "Christian". As they share one trait, hence their interaction probability is \\\( 0.5 \\\). If A1 and A2 interact, then A1 would change his religion feature trait from "Atheist" to "Christian".

One the other hand if A2 would have the same traits as A1, nothing would change, because agents have the same traits. While if no traits would match, then also nothing would change as the agents would not interact. Hence the model will settle into a fixed state, if only one culture survives (interaction occur, but they do not change anything) or if multiple cultures with different traits survive (interaction do not occur as the agents are too different to interact). Namely, cultures identified by "French", "Christian" traits and "English", "Atheist" traits would co-exist, as the interaction probability between the agents with those sets of traits is  \\\( 0 \\\), given that no other cultures survive.

Note that if A1 and A2 would share religion feature trait (for example if they both would have "Muslim" trait), but not a language feature trait, then A1 would change his language feature trait. This is kind of illogical, but in a very simple and highly generalized model this would be possible.

## Interactive applet

What to try? Notice that the model is boring with just \\\( 1 \\\) feature. Note how the convergence (to a fixed state) speed depends on all model parameters. Try to discover the parameter values which would allow for multiple cultures to persist.

[html5-interactive
src="/uploads/models/axelrod-model/index.html" width="420"
height="510" mode="iframe"]

The applet also allows to change how fast the model is run. Here, "kips" and "mips" stand for thousands (kilo) interactions per second and millions (mega) interactions per second respectively. Note that older computers with weaker hardware might "lag" at faster speeds. If so, please decrease the speed.

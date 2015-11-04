---
title: Video Capture & Editing 101
menu: video101
---

## Shooting Beautiful Video ##

Don't get me wrong. Experiencing the flight from the first person perspective is an amazing feeling in itself. But sharing that experience, perhaps multiplied by some great music, is a great feeling too. So what kind of gear will you need? What sort of software is necessy and what kind of workflow do I use?

Depending on how much money you're willing to spend, here's a list of cameras you may get. I don't necessarily mean the amount needed to start recording, but the amount of money you are willing to lose in a crash. As I've mentioned miniquads are about crashing as much they are about flying.

There is quite a plethora of cameras you can choose on a wide price spectrum. But generally all the cheap chinese gopro clones are garbage. That doesn't mean you won't be able to find a gem I missed, but here's a list of proven cameras with all their advantages and diadvantages:

### Gopro Hero 4 Black ###

It makes no sense to get the silver edition as the LCD is just added weight. Gopro is the king of the action cameras and deservingly so. The cameras provide the best sharpness, automatic exposure and quality. The wide angle lens has lovely anti glare coating, giving a unique tint to the footage I actually like. You can also shoot in something they call prores, a very flat profile capturing the most difficult dynamic range situatons and giving you the ability to fix or color grade/tint the footage in post. Hero4 now shoots in 4K resolution at 30 frames per second.

Gopro provides a free beer software package to import and fix up clips from their cameras. You can also do quick edits in it, but really the only usable feature of it is the barrel distortion compensation and slow motion interpolation. It takes forever though, I ended up creating an [Apple Motion effect](#defisheye) to fix the fish eye in realtime.

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Best Quality
  - SuperView makes the flight *feel* faster
  - Fish eye aesthetic has to be removed in post (although at least with a free tool, GoPro Studio).
  </div>

  <div markdown="1" class="6u cons">
# Cons #

  - Heavy
  - Expensive
  - Non aerodynamic. Quite a brick.
  </div>
</div>

### Sony AZ1 ###

Sony has been trying to "me too" a Gopro for quite a while and they have a big lineup of their action cameras. It's Sony, so don't expect them to play the price card. They bet on image stabilization, something they used to be kings at. However for dramatic miniquad action shots, their image stabilization is useless. The smallest of their line up is the AZ1 and it includes the steady shot as well. You'll quickly turn it off as it tends to reset with a giant jerk every time you do a sharp turn. Much more distracting than not stabilizing at all. Also soft. The camera is far from being as sharp as the Gopro. 

So why did I get it? Mainly for costing half of what the GoPro black sold for in here. It does 1080P at 60fps. It can do xavc-s, a high bitstream codec that is quite an overkill for the kind of pictures you're getting out of it. It refused to eat many cards that the GoPro hero4 shooting 4K was fine with (U1 class). It also includes bells and whistles you don't need and just add weight. Wifi is in everything, but this does NFC as well. The lens protector sony sells costs almost as much as a Mobius. Technology has progressed since and there are much better choices now if you want a cheaper GoPro (see below).

<a id="defisheye"><img class="full image" src="/images/defisheye.jpg"></a>

Before I was able to compensate for its barrel distortion, I wasn't too happy about how the fish eye aesthetic felt. It was much more distorted towards the edges. For the longest time I wasn't able to find something to fix this, until I discovered you can make your own filters in Apple Motion to use in FCPX. It is adjustable in FCPX, so you can use it for any camera, including GoPros. You have to eyeball it, so it's not as accurate as using GoPro Studio, but you don't have to wait for a re-encode. It all works in real time using your GPU.

<a class="centered button" href="/zip/defisheye-az1.zip">De-fisheye for Final Cut Pro X</a>

Download and unzip the above effect into your `Movies/Motion Templates/Effects` folder and you should be good to go (I don't think you need Apple Motion for it to work, feel free to let me know it worked for you).

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Cheaper than a GoPro
  - Lighter, tubular, thus aerodynamic.

  </div>

  <div markdown="1" class="6u cons">
# Cons #

  - Cheaper than a GoPro yes, but still kind of expensive
  </div>
</div>

### Mobius ###

TODO

### Xiaomi Yi ###

TODO

### Foxeer Legend 1 ###

TODO

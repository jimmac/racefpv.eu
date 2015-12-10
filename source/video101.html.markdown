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

<p class="image full">
<img alt="" src="/images/video101/goprohero4.jpg">
<small>Gopro Hero4 with cheap lens protector</small>
</p>

Gopro provides a [free beer software](http://shop.gopro.com/EMEA/softwareandapp/gopro-studio/GoPro-Studio.html) package to import and fix up clips from their cameras. You can also do quick edits in it, but really the only usable feature of it is the barrel distortion compensation and slow motion interpolation. It takes forever though, I ended up creating an [Apple Motion effect](#defisheye) to fix the fish eye in realtime.

Instead of getting a silver version I opted to buy some older models second hand. Hero 3+ is still a superb camera, and includes the superview at 1080/60fps as well as 2.7k at 48fps. What sperview essentially does is to use the native 4:3 sensor and stretch all the pixels to the output 16:9 picture. Usually the stretching would be a horrible aesthetic, but for miniquad footage this works remarkably well. The fact you get extra view on top and bottom makes you feel go faster as the eye is attracted to the fast motion on the edges of the footage. I also have a Hero3 which doesn't do superview, but shooting 1440 (1920x1440) and stretching in post effectively gives you the same results.

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

<p class="image full">
<img alt="" src="/images/video101/sonyaz1.jpg">
<small>Banged up Sony AZ1 sans protector and lens ring. Lost both in a crash. Was my second already :)</small>
</p>

So why did I get it? Mainly for costing half of what the GoPro black sold for in here. It does 1080P at 60fps. It can do xavc-s, a high bitstream codec that is quite an overkill for the kind of pictures you're getting out of it. It refused to eat many cards that the GoPro hero4 shooting 4K was fine with (U1 class). It also includes bells and whistles you don't need and just add weight. Wifi is in everything, but this does NFC as well. The lens protector sony sells costs almost as much as a Mobius. Technology has progressed since and there are much better choices now if you want a cheaper GoPro (see below). Also GoPro itself has lowered the price of their Session mini camera that matches Sony's pricetag and provides a superior image I would say.

<a id="defisheye"><img class="full image" src="/images/defisheye.jpg"></a>

Before I was able to compensate for its barrel distortion, I wasn't too happy about how the fish eye aesthetic felt. It was much more distorted towards the edges. For the longest time I wasn't able to find something to fix this, until I discovered you can make your own filters in Apple Motion to use in FCPX. It is adjustable in FCPX, so you can use it for any camera, including GoPros. You have to eyeball it, so it's not as accurate as using GoPro Studio, but you don't have to wait for a re-encode. It all works in real time using your GPU.

<a class="centered button" href="/zip/defisheye-az1.zip">De-fisheye for Final Cut Pro X</a>

Download and unzip the above effect into your `Movies/Motion Templates/Effects` folder and you should be good to go (I don't think you need Apple Motion for it to work, feel free to let me know it worked for you).

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Lighter, tubular, thus aerodynamic.

  </div>

  <div markdown="1" class="6u cons">
# Cons #

  - Cheaper than a GoPro yes, but still kind of expensive
  - Soft, even without SteadyShot
  </div>
</div>

### Mobius ###

If you sport a small frame lik ethe 170 Kermit, you really get penalized for adding 50g+ of weight in the form of an HD cam. It messes up your center of gravity and becomes extremely demanding on the tune. You want the lightest possible camera that still produces reasonable image.

The Mobius provides 1080 footage at 30 frames a second. It's quite sharp and with the new C lens a nice wide angle aesthetic. The sharpness is a bit of a cheat though as by default image sharpening is applied. The camera is also capable of running at 60fps, but on at 720P. Not really worth it. The biggest downfall of the camera is the metering. It uses a kind of spot metering and you can see visible stepping as it changes aperture. It also tends to shift in color temperature. Luckily both of these quirks can be worked around in the later firmware by holding the mode button for 3 seconds after you started recording. That locks up the exposure and color temperature so while you can get to places that will be overexposed, you wont get the dreaded blackout when you look at an overcast sky.

<p class="image full">
<img alt="" src="/images/video101/mobius.jpg">
<small>No iterface, best interface. Note the SD card slot being taped down.</small>
</p>

Configuration is a bit spartan, but I prefer this approach to being forced to boot to Windows. You hold mode button as you power it on, the red led flashes a couple of times and a configuration file is being dumped onto the SD card, along with comments on what each configuration does. Once you edit it with your favorite text editor, save and unmount the SD card, you go through the exact process and this time the camera will read the config and delete the file, which you can check on your computer again. 

I actually prefer this simplistic 3 button approach to nested menus of the gopro. There are only essential options to chose from and the camera does what we need. Push to record. Done.

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Lightest camera at 47g (C-lens)
  - Cheap (around $60)
  </div>

  <div markdown="1" class="6u cons">
# Cons #
  - SD card ejecs on impact, ruining your footage (and usually impossible to find in grass). Tape it.
  - Exposure (spot metering, color balance shifts)
  </div>
</div>

### Xiaomi Yi ###

This camera is essentially what the AZ1 is, but a lot cheaper. In the wrong form factor. It produces well exposed 1080P/60fps footage in high enough bitrate (around 20mbit/s). The killer feature of the camera is that you can enable barrel distortion correction to happen in camera and get nice ortho-linear footage. It does make a hit on battery life though. Some models neede a bit of refocusing as the cameras were focused to about 5m rather than infinity.

<p class="image full">
<img alt="" src="/images/video101/xiaomiyi.jpg">
<small>Light but big brick.</small>
</p>

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #
  - Great quality 1080/60
  - Cheap (around $60)
  - Well made
  - Cheap spare parts available. Lens, protectors, batteries, chargers all cost peas.
  </div>

  <div markdown="1" class="6u cons">
# Cons #
  - Big brick
  - Laggy reponse on the buttons. Takes like 5seconds to accept changes between photo and video modes after startup.
  </div>
</div>

### Foxeer Legend 1 ###

If you don't strive to have the lightest camera, this is close to a perfect miniquad camera. Same form factor as the Mobius, it is only a tad heavier (51g). It produces similar quality as the XIaomi Yi or the Sony AZ1. The only downside may be the exposed lens that doesn't really provide a mean to put a lens cover on. But with 3D printers, I'm sure people will have a custom protector soon. I did smash my lens about 30 minutes in :)

<p class="image full">
<img alt="" src="/images/video101/foxeerlegend1.jpg">
<small>Best bits of every camera above. Small, aerodynamic, cheap, no-bs interface, great bitrate and quality.</small>
</p>

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Cheap (around $80)
  - High quality 1080/60
  - Simple UI, No BS config (might be a con if you're a tweaker)
  </div>

  <div markdown="1" class="6u cons">
# Cons #
  - I bought too many cameras before finding this one

  </div>
</div>

### GoPro Session ###

GoPro Session was introduced with a ridiculous pricetag. When it launched I thought to myself — brilliant camera if it cost half as much. Well now it does. GoPro luckily didn't scratch the product and did the dangerous thing of loweing the price. At $199 you get a brilliant tiny waterproof camera, that is still heavier than may come across from photos. At 73g it's almost a Hero3+ in terms of weight. You get a lot smaller profile though and it does still pack a 1080P superview (4:3 image smartly stretched to 16:9) at up to 48frames a second. While the bitrate is the same as the Hero3+, the image isn't as sharp and the magical light metering is not as good either. But compared to the Sony AZ1 or the Chinese low budget cameras, it's still a much better picture. 

<p class="image full">
<img alt="" src="/images/video101/gopro-session.jpg">
<small>One button control is great. LCD panel shows all you need.</small>
</p>


I also dig the 'less is more' approach. One button press turns the camera on and starts recording the preset quality video. Holding the button does the same for time lapse photos. The set up happens in the gopro app. I very rarely change what's working for me, so this is ideal.

<p class="image full">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/O172oHsV19M" frameborder="0" allowfullscreen>
<a href="https://www.youtube.com/watch?v=O172oHsV19M">GoPro Session Mini Review</a></iframe>
</p>

<div class="row">
  <div markdown="1" class="6u pros">
# Pros #

  - Compact
  - Water Resistant
  - Superview makes everything feel faster
  - microUSB rather than miniUSB
  - easy one button operation (Presets using the phone app)
  </div>

  <div markdown="1" class="6u cons">
# Cons #
  - Heavy (73g)
  - While reasonably priced, still on the expensive side, considering the options now (Legend1, Yi or Mobius are less than a half). Materials are top notch though.
  </div>
</div>


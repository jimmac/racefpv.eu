---
title: MiniQuad 101
menu: miniquad101
---

## MiniQuad 101 ##

Starting with FPV can be a little overwhelming, so I decided to put some essential info to help you understand how things work and have an easier job building your quad or buying components.

### How Does It Fly So Smoothly? ###

The most appealing thing about miniquads to me was just how smooth of a flight people like [Juz70](https://www.youtube.com/user/juz70) are able to achieve. A fixed wing can get you very far and fly for a very long time, but you never get such awesome fluidity with no turbulence jerks. The trick is microprocessors, and using the propellers to go all directions, not just forward. While the concept is easy and can be found in any household thermostat, at the heart of this smooth flight is a *flight controller* that runs a program called PID controller (enjoy the vague terminology). PID stands for Proprotional, Integral and Derivative and I try to explain the concept in detail in this [PID tuning article](/blog/2015-10-15-the-chore-of-tuning-pids/){: .button.small}. 

Suffice to say, regardless of the size and windy conditions out there, the software is able to compensate for all of that and take your fluid thumb movements and transform it into a gorgeous flight and your gopro can record a lovely session you then post on youtube. Once you learn to fly, that is. And build. And edit video. While many Flight Controllers allow to stabilize the craft on their own or even allow to fly autonomously, to get smooth footage you have to forget about all those aids and learn to fly so called *rate mode*.

### Terminology ###

To be able to navigate the lingo, here's some technical terms used.

 Term | Description 
 :--- | :---------- 
 `3S`   | Battery voltage. S refers to *series* and defines how many cells are connected into a single unit. Each cell has a nominal voltage of 3.3V. Lithium Polymer batteries that are used can give a lot of juice and are relatively light. See *C rating* below.
 `Band 2.4Ghz/5.8GHz` | Most countries don't require a license for transmitting on the 2.4 and 5.8 frequency spectrum. It's the same spectrum Wi-Fi networks operate on. Some areas might be more difficult to fly in, due to interference. It is common to have the control link at 2.4GHz and the video downlink at 5.8Ghz.
 `C-rating` | Instead of given the current at which the battery can be discharged (A), this values is labeled as C, which takes the capacity into consideration. A `C` rating of 40 for a battery that has a capacity of *2000mAh* means, that you can discharge ("feed the motors") at 80 amps. Sometimes an extra value is provided, called *burst* and that signifies that for a short amount of time (cca 1,2 seconds) the battery can provide more power than the base C rating. Sometimes you also get a charge C rating, that tells you how much current you can feed the battery when changing. Typically the rule of thumb is to use 1C for changing. Low C rating batteries are fine in larger capacity or non-performance multirotors, but for small capacities and quick flying you want to go 40C and above. That way you avoid so called battery sack. This happens when you give full throttle for a while, do a flip and then need to give it full throttle again, but the battery isn't able to provide it anymore and there is no thrust response (and you crash, typically).
 `BEC` | *Battery Elimination Circuit*. A device that can either lower (step down) voltage or increase voltage (step up). Useful for powering everything from a single battery, even when components need different voltage. Typically receivers, cameras and GPS units require 5V, while transmitters 12V.
 `ESC` | *Electronic Speed Controller*. The kind of motors used in miniquads is called 'brushless'. It is very durable and doesn't wear out like classical brushed motors. However they do need a special speed controller to make them spin. The ESC is connected to the motor with three wires that the ESC sends short pulses through and makes the motor spin. Typically to make the motor spin the other direction, you pick any two of the three wires and switch them.
  `OSD` | *On Screen Display*. Typicaly to get some essential information from the quad, instead of transmitting the *telemetry* to the radio, which you don't see when flying FPV, you get an overlay on top of your video feed. Most useful is either the voltage or sometimes even current draw and capacity. Also the name of the pilot is sometimes shown for competitions. 
  `VTX` | *Video transmitter*. All video transmissions are analog and free to "tap in" by anyone. Thus taking part in competitions can be more fun for the audience if shown on big screens or enjoyed through FPV goggles. See *OSD*. Typically 5.8Ghz is used for the transmission because it's commonly license-free and antennas are small and there is no harmonic interference with the control link at 2.4GHz. When multiple people are flying, extra care must be given when tuning on your quad as a conflicting frequency can blank the flying pilot. Most VTX' also blast across the whole band before initializing so it's a common practice to annouse tunring on a quad so pilots can gain altitude to cope with signal loss better.

### Components ###

Building a quad is like building a PC. It's just a matter of picking the right components and hooking them together. No big deal. Unless you use crappy components. And buggy software. Or suck at soldering. In any case, there is an easy path these days, as many manufactures provide RTF kits (ready to fly). Sometimes also called ARTF (almost ready to fly), as you will need to provide your own radio ("stick controller") and a receiver (the thing that receives your control commands and forwards it to the flight controller.


Sorry this part is unfinished. I promise to fill this in ASAP :)

<div class="row">
  <div class="6u">FIXME: Graphic</div>
  <div class="6u">
    <ul>
      <li><a href="#" class="button 12u">Batteries</a></div></li>
      <li><a href="#" class="button 12u">Motors</a></div></li>
      <li><a href="#" class="button 12u">ESCs</a></div></li>
      <li><a href="#" class="button 12u">Propellers</a></div></li>
      <li><a href="#" class="button 12u">Flight Controllers</a></div></li>
    </ul>
  </div>
</div>

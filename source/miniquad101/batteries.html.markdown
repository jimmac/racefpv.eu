---
title: MiniQuad 101
menu: miniquad101/batteries
---

## Batteries ##

Every beginner, including me, underestimates the importance of quality batteries. They are just as important as the motors, if not more important for performance. While low density, low weight batteries are great for "flying camera" multirotors, the ability to give constant high power quickly, without losing voltage is important for a racer.

This ability is described with the `C` rating. If you multiply this with the capacity (labeled in `Ah` on the battery), you get the current in `A` that the battery is able to provide you with. A high C rating battery is a bit heavier, because it's denser, but it is able to provide you with a bigger current for longer. The lower internal resistance also means it isn't getting warmer on discharge and the capacity goes into the current instead of producing heat. Low C rating batteries that are appealing to newcommers becase they are cheap often cause 'batery sack'. Sacking is dangerous, because you want to break away from a quick dive and recover and the quad just doesn't react on power anymore. Cheap batteries also tend to chemically change and "puff". The cells buldge and increase volume. You don't get that with quality batteries even if you discharge them to 3V per cell.

Sometimes you see two C ratings, the latter one meaning for short periods of time (burst), it is able to provide almost twice as much power, but it cannot do this for a longer period of time. 

### Balance Charging and Storage ###

Even if you get a balance charger, it allows you to just charge LiPos. Always balance charge them. Batteries don't combust when puffed. They combust when the voltage difference inbetween individual cells gets too high (and you either discharge or charge them at that time). There are many guides on how to charge LiPos. Here's just a few point worth rehashing:

- Store your batteries at 3.8V per cell for best lifetime. If you charged up and the weather sucks for the week, don't feel guilty about discharging them with your balance charger. Storing fully charged batteries for a long period of time kills lifetime.
- While some high quality batteries are able to charge to 4.3V, it does impact lifetime.
- Don't suck them dry. 3.6V is the minimum I go to, you can extend a battery's lifetime 5 fold if you don't discharge completely.
- Get a parallel changing board. Learn about [parallel charging](http://www.rchelicopterfun.com/parallel-lipo-charging.html) and save lots of time as you can charge 4 batteries in the same time as 1. Rule of thumb -- same type of battery, similar discharge state (+-0.1V)
  
### Capacity ###

If you started with a Phantom, you might still have a lot of 2.2Ah batteries around. Sticking to the XT60 connector type, because you already have them everywhere else makes sense. Sticking to the same capacity doesn't. Flying with high capacity batteries on  minis makes no sense. The smaller, the better. The increased size not only impacts the actual flight time (the gain is marginal), but the extra mass just destroys your frame on impact.

The downside to having low capacity is that you need higher quality batteries (high C rating). You can get away with low C rating batteries because it can still provide enough amps due to the larger capacity.

<div class="row">
  <div class="6u">FIXME: Graphic</div>
  <div class="6u">
    <ul>
      <li><a class="button 12u insensitive">Batteries</a></li>
      <li><a href="#" class="button 12u">Motors</a></li>
      <li><a href="#" class="button 12u">ESCs</a></li>
      <li><a href="#" class="button 12u">Propellers</a></li>
      <li><a href="#" class="button 12u">Flight Controllers</a></li>
    </ul>
  </div>
</div>

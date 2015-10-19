---
title: The chore of tuning PIDs
date: 2015-10-15 11:47 UTC
tags:
- naze32
- baseflight
- cleanflight
---
This article originall appeared on [my personal blog](http://jimmac.musichall.cz), but since it's so relevant to what this site is about, I'm reposting it here.


Tuning PIDs is one of those things you really don't want to do, but can't avoid it in the acrobatic quad space. Flying camera operators don't usually have to deal with this, but the power/weight ratio is so varied in the world of acro flying you'll have hard time avoiding it there. Having a multirotor "locked in" for doing fast spins is a must. Milliseconds count.

<p>
<iframe width="100%" height="500" src="https://www.youtube.com/embed/XX9hzDJB3Pg" frameborder="0" allowfullscreen>
<a href="https://www.youtube.com/watch?v=XX9hzDJB3Pg">FPV Weekend</a></iframe>
</p>

So what is PID tuning? The flight controller's job is to maintain a certain position of the craft. It has sensors to tell it how the craft is angled and how it's accellerating, and there's external forces acting on the quad. Gravity, wind. Then there's a human giving it RC orders to change its state. All this happens in a PID loop. The FC either wants to maintain its position or is given an updated position. That's the *target*. All the sensors give it the actual *current state*. Magic happens here, as the controller gives orders to individual ESCs to spin the motors so we get to there. Then we look at what the sensors say again. Rinse and repeat.

PID loop is actually a common process you can find in all sorts of computer controllers. Even something as simple as a thermostat does this. You have a temperature sensor and you drive a heater or an air conditioner to reach and maintain a target state.

The trick to a solid control is to apply just the right amount of action to get to our target state. If there is difference between where we *are* and where we *want to be*, we need to apply some force. If this difference is smaller, only a small force is required. If it's big, a powerful force is needed. This is essentially what the P means, *proprotional*. In most cases, as a controller, you are truly unhappy if you are elsewhere to where you were told to be. You want to correct this difference fast, so you provide a high proportional value/force. However, in the case of a miniquad, the momentum will continue pulling you when you reached your target point and don't apply any force anymore. At this point the difference occurs again and the controller will start correcting the craft pulling it back in the opposite direction. This results in an unstable state as the controller will be bouncing the quad back and forth, never reaching the target state of "not having to do anything". The P is too big. So what you need is a value that's high enough to correct the difference fast, but not as much so the momentum gets you oscillating around the target.

So if we found our P value, why do we need to bother with anything else? Well sadly pushing air around with props is a complicated way to remain stationary. The difference between where you are and where you want to be isn't just determined by the aircraft itself. There are external forces that are in play and those change. We can get a gust of wind. So what we do is we correct that P value based on the changed conditions. Suddenly we don't have a fixed P contoller, we have one that has variable P. Let's move on how P is dynamically corrected.

The *integral* part of the controller corrects the difference that suddenly appears due to the new external forces coming into play. I would probably do a better job explaining this if I enjoyed maths, but don't hate me, I'm a graphics designer. Magic maths corrects this offset. Having just the proprotional and integral part of the corrective measure is enough to form a capable controller perfectly able to provide a stable system.

However for something as dynamic as an acrobatic flight controller, you want to improve on the final stage of the correction where you are close to reaching your target after a fast dramatic correction. Typically what a PI controller would get you is a bit of a wobble at the end. To correct it, we have the *derivative* part of the correction. It's a sort of a predictive measure to lower the P as you're getting close to the target state. D gives you the nice smooth "locked in" feeling, despite having high P and I values, giving you really fast corrective ability.

There are three major control motions of a quad that the FC needs to worry about. Pitch for forward motion is controlled by spinning the back motors faster than the front two motors thus angling the quad forward. Roll motion is achieved exactly the same way, but with the two motors on one side spinning faster than the other two. The last motion is spinning in the Z axis, the yaw. That is achieved by torgue and the fact than the propellers and motors spin in different directions. Typically the front left and back right motor are clockwise spinning and the front right and back left motor are spinning counter clockwise. Thus spinning up/accellerating the front left and back right motors will turn the whole craft counter clockwise (counter motion).

I prepared a little cheat sheet on how to go about tuning PIDs on the NAZE32 board. Before you start though, make sure you set the PID looptime as low as your ESC allow. Usually ESC send the pulses *400 times a second* which is equivalent to a looptime of 2500. The more expensive ESC can do 600Hz and some, such as the miniscule KISS ESCs, can go as low as 1200.

| ESC refresh rate | NAZE32 Looptime |
| ---------------: | :-------------- |
| 286Hz            | 3500            |
| 333Hz            | 3000            |
| `400Hz`          | `2500`          |
| 500Hz            | 2000            |
| 600Hz            | 1600            |

You do this in the CLI tab of baseflight:

    set looptime=2500
    save

Hope this has been helpful for some as it was for me :).

<p class="image full">
<a href="/blog/2015-10-15-the-chore-of-tuning-pids/index/pids.pdf"><img type="image/svg+xml" alt="" src="/blog/2015-10-15-the-chore-of-tuning-pids/index/pids.svg"></a>
<small>Quick Guide on PID tuning</small>
</p>

 * [PID controller explained](https://www.youtube.com/watch?v=UR0hOmjaHp0)
 * [practical PID tuning with Cleanflight](https://www.youtube.com/watch?v=30Au6sEv6-o)

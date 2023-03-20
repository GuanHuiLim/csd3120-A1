# README

**Done By:**

Name : Lim Guan Hui

SITID: 2000552

You can play the project at : [here](https://guanhuilim.github.io/csd3120-IPA/)

---

This project is built for IPA for CSD3120.

### About Project:

The project is area where user is able to pick up a sword and cut things with it. 

### About Architecture:

---

this project uses unity game engine and thus the architecture will mostly comprise of unity’s Architecture.

> The Unity engine is built with native C/C++ internally, but it has a C# wrapper that you use to interact with it. As such, you need to be familiar with some of the key concepts of scripting in C#. This section of the User Manual contains information on how Unity implements .NET and C#, and any exceptions you might encounter as you code.
> 

[https://docs.unity3d.com/Manual/unity-architecture.html](https://docs.unity3d.com/Manual/unity-architecture.html)

As for the other 2 packages (VRTK , Unity-WebXR-Export) not much infomation is known about them but at least they work.

### Build Requirements:

---

The project comprises of a few key items.

The project comprises of a few key items.

Credits to : [De-Panther](https://github.com/De-Panther), [ExtendRealityLtd](https://github.com/ExtendRealityLtd), [CubicBrain](https://www.youtube.com/@CubicBrain)

- Unity-WebXR-Export - [https://github.com/De-Panther/unity-webxr-export](https://github.com/De-Panther/unity-webxr-export)
- VRTK - [https://github.com/ExtendRealityLtd/VRTK](https://github.com/ExtendRealityLtd/VRTK)
- Setup Guide by CubicBrain :
    
    [https://youtu.be/behdvI-G_oQ](https://youtu.be/behdvI-G_oQ)
    
    ### Building the project :
    
    - Requires : Unity 2021.3.20f1 (other versions may be incompatible)
    - A page to host the product after build.
    - you can find the scene under Project\Assets\Samples\WebXR Interactions\0.16.3-preview\Sample Scene\Scenes. the name of the scene is called Desert
    - open the scene and you can test it in unity
    - Important: Ensure the scene is included in the build list or nothing will play
    
    ---
    
    ### Step 1 :
    
    you can either follow the video guide (recomended)
    
    [https://youtu.be/vwA_xa8XJy8](https://youtu.be/vwA_xa8XJy8)
    
    or follow the following steps :
    
    Get WebGL in unity.
    
    ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled.png)
    
    Open project settings → player → Resolution and presentation
    
    Select the WebGL2020 template, it works the best from testing.
    
    ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%201.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%201.png)
    
    under project settings → player → publishing settings
    
    set compression format to disabled(web xr does not support compression for many files like textures)
    
    ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%202.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%202.png)
    
    press build and deploy.
    
    Host the project on a website.
    
    after building your project you should have 3 files which you will need to host.
    
    ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%203.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%203.png)
    
    As an example, github-pages can work as shown in the following steps.
    
    Find the settings tab
    
    ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%204.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%204.png)
    
    - Step 2
        
        Make sure your project is public or you pay for a private git repo
        
        and git your files (this how the repo should look like when u enter)
        
        ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%205.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%205.png)
        
    - Step 3
        
        Click on pages
        
        ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%206.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%206.png)
        
    - Step 4
        
        Choose your branch and deploy
        
        ![https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%207.png](https://github.com/JunXiang-Leong/IPA_CSD3120/raw/main/README%208a721b49747148b684caa4e52df92528/Untitled%207.png)
        
        check your github actions and ensure build is done. you can click on the link to play
        
        ![https://github.com/GuanHuiLim/csd3120-IPA/raw/working/Images/deploy.png](https://github.com/GuanHuiLim/csd3120-IPA/raw/working/Images/deploy.png)
        

### How to play:

---

The player must pick up the sword with the left hand(use mouse and click and drag if not using VR device) and slice the are you ready plane to begin. 

![https://github.com/GuanHuiLim/csd3120-IPA/raw/working/Images/ready.png](https://github.com/GuanHuiLim/csd3120-IPA/raw/working/Images/ready.png)

Objects will spawn and start flying at the player and player must use the sword to cut them down. There is no end to the game as of now.

You can teleport to a better position by using the right controller button select button.
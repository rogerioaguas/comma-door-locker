# Configuration
## What do you need?
- Comma device;
- Knowledge to connect with ssh;

## Steps

### 1 - Comma Device
- Connect in your comma with ssh ;
- Go to tools folder (if not exist create with command `mkdir tools`) ;
``` shell script
> $ cd tools/
> $ git clone https://github.com/rogerioaguas/door-lock-unlock-server
> $ cd door-lock-unlock-server/
> $ python3 run_server.py
```
- Go to your device and enable tethering ;

### 2 - In your Mobile Phone 

- Go to `https://rogerioaguas.github.io/comma-door-locker/` ;
- Install the web-app ;
- Connect with your mobile phone on hotspot created ;
- Now open the web-app `Comma Locker` ;
- Get ip generate from `Comma device hotspot` ;
- Write on field "x.x.x.x:5000" ;
- Now try lock and unlock the car door ; 


## Todo

- [ ] Add this feature on fork Cm3
- [ ] Add this feature on fork Eon Gold, Cm2 and etc...
- [ ] ...

## Contribution

- Comma Locker UI: `https://github.com/rogerioaguas/comma-door-locker`
- Comma Locker Server: `https://github.com/rogerioaguas/door-lock-unlock-server`
 


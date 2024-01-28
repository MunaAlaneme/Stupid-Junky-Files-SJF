var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

class DeviceInfo {
  constructor() {
  }

  getInfo() {
    return {
      "id": "deviceInfo",
      "name": "Device Info",
      "blocks": [
        {
          "opcode": "deviceBattery",
          "blockType": "reporter",
          "text": "device battery",
          "arguments": {}
        },
        {
          "opcode": "screenWidth",
          "blockType": "reporter",
          "text": "screen width",
          "arguments": {}
        },
        {
          "opcode": "screenHeight",
          "blockType": "reporter",
          "text": "screen height",
          "arguments": {}
        },
        {
          "opcode": "screenOrientation",
          "blockType": "reporter",
          "text": "screen orientation",
          "arguments": {}
        },
        {
          "opcode": "platform",
          "blockType": "reporter",
          "text": "platform",
          "arguments": {}
        }
      ]
    }
  }

  deviceBattery() {
    try {
      return navigator.getBattery().then((battery) => {
        return battery.level * 100;
      });
    } catch {
      return "undefined";
    }
  }

  screenWidth() {
    return screen.width;
  }

  screenHeight() {
    return screen.height;
  }

  screenOrientation() {
    try {
      return screen.orientation.type;
    } catch {
      return "undefined";
    }
  }

  platform() {
    try {
      return navigator.platform;
    } catch {
      return "undefined";
    }
  }
}

Scratch.extensions.register(new DeviceInfo());

}
/*
     FILE ARCHIVED ON 16:59:09 Oct 30, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:16:49 Jan 28, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.054
  cdx.remote: 0.094
  esindex: 0.01
  LoadShardBlock: 178.737 (6)
  PetaboxLoader3.datanode: 141.446 (7)
  load_resource: 92.655
  PetaboxLoader3.resolve: 39.472
*/

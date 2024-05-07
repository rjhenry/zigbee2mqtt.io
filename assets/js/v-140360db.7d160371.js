"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6776],{664566:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-140360db","path":"/devices/SRTS-A01.html","title":"Aqara SRTS-A01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara SRTS-A01 control via MQTT","description":"Integrate your Aqara SRTS-A01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Setup (binary)","slug":"setup-binary","link":"#setup-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"External temperature input (numeric)","slug":"external-temperature-input-numeric","link":"#external-temperature-input-numeric","children":[]},{"level":3,"title":"Calibrated (binary)","slug":"calibrated-binary","link":"#calibrated-binary","children":[]},{"level":3,"title":"Calibrate (enum)","slug":"calibrate-enum","link":"#calibrate-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Window detection (binary)","slug":"window-detection-binary","link":"#window-detection-binary","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Valve detection (binary)","slug":"valve-detection-binary","link":"#valve-detection-binary","children":[]},{"level":3,"title":"Valve alarm (binary)","slug":"valve-alarm-binary","link":"#valve-alarm-binary","children":[]},{"level":3,"title":"Away preset temperature (numeric)","slug":"away-preset-temperature-numeric","link":"#away-preset-temperature-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Schedule (binary)","slug":"schedule-binary","link":"#schedule-binary","children":[]},{"level":3,"title":"Schedule settings (text)","slug":"schedule-settings-text","link":"#schedule-settings-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715112310000},"filePathRelative":"devices/SRTS-A01.md"}')},530210:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var a=o(166252);const i=(0,a._)("h1",{id:"aqara-srts-a01",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#aqara-srts-a01","aria-hidden":"true"},"#"),(0,a.Uk)(" Aqara SRTS-A01")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SRTS-A01")],-1),r=(0,a._)("td",null,"Vendor",-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Smart radiator thermostat E1")],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"setup, climate (occupied_heating_setpoint, local_temperature, system_mode, preset), sensor, external_temperature_input, calibrated, calibrate, child_lock, window_detection, window_open, valve_detection, valve_alarm, away_preset_temperature, voltage, battery, power_outage_count, device_temperature, schedule, schedule_settings, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SRTS-A01.png",alt:"Aqara SRTS-A01"})])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),p=(0,a._)("p",null,"Press and hold the center ring for 10 seconds until the blue network indicator flashes.",-1),m=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),b=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),g=(0,a.uE)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="setup-binary" tabindex="-1"><a class="header-anchor" href="#setup-binary" aria-hidden="true">#</a> Setup (binary)</h3><p>Indicates if the device is in setup mode (E11). Value can be found in the published state on the <code>setup</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> setup is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>preset</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured by the internal or external sensor (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>away</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>internal</code>, <code>external</code>.</p><h3 id="external-temperature-input-numeric" tabindex="-1"><a class="header-anchor" href="#external-temperature-input-numeric" aria-hidden="true">#</a> External temperature input (numeric)</h3><p>Input for remote temperature sensor (when sensor is set to external). Value can be found in the published state on the <code>external_temperature_input</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_temperature_input&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_temperature_input&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>55</code>. The unit of this value is <code>°C</code>.</p><h3 id="calibrated-binary" tabindex="-1"><a class="header-anchor" href="#calibrated-binary" aria-hidden="true">#</a> Calibrated (binary)</h3><p>Indicates if this valve is calibrated, use the calibrate option to calibrate. Value can be found in the published state on the <code>calibrated</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> calibrated is ON, if <code>false</code> OFF.</p><h3 id="calibrate-enum" tabindex="-1"><a class="header-anchor" href="#calibrate-enum" aria-hidden="true">#</a> Calibrate (enum)</h3><p>Calibrates the valve. Value can be found in the published state on the <code>calibrate</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibrate&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate&quot;: NEW_VALUE}</code>. The possible values are: <code>calibrate</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child lock (binary)</h3><p>Unlocks/locks physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>true</code> child lock is ON, if <code>false</code> OFF.</p><h3 id="window-detection-binary" tabindex="-1"><a class="header-anchor" href="#window-detection-binary" aria-hidden="true">#</a> Window detection (binary)</h3><p>Enables/disables window detection on the device. Value can be found in the published state on the <code>window_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window detection is ON, if <code>false</code> OFF.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary" aria-hidden="true">#</a> Window open (binary)</h3><p>Indicates if window is open. Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="valve-detection-binary" tabindex="-1"><a class="header-anchor" href="#valve-detection-binary" aria-hidden="true">#</a> Valve detection (binary)</h3><p>Determines if temperature control abnormalities should be detected. Value can be found in the published state on the <code>valve_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: NEW_VALUE}</code>. If value equals <code>true</code> valve detection is ON, if <code>false</code> OFF.</p><h3 id="valve-alarm-binary" tabindex="-1"><a class="header-anchor" href="#valve-alarm-binary" aria-hidden="true">#</a> Valve alarm (binary)</h3><p>Notifies of a temperature control abnormality if valve detection is enabled (e.g., thermostat not installed correctly, valve failure or incorrect calibration, incorrect link to external temperature sensor). Value can be found in the published state on the <code>valve_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> valve alarm is ON, if <code>false</code> OFF.</p><h3 id="away-preset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-temperature-numeric" aria-hidden="true">#</a> Away preset temperature (numeric)</h3><p>Away preset temperature. Value can be found in the published state on the <code>away_preset_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;away_preset_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="schedule-binary" tabindex="-1"><a class="header-anchor" href="#schedule-binary" aria-hidden="true">#</a> Schedule (binary)</h3><p>When enabled, the device will change its state based on your schedule settings. Value can be found in the published state on the <code>schedule</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: NEW_VALUE}</code>. If value equals <code>true</code> schedule is ON, if <code>false</code> OFF.</p><h3 id="schedule-settings-text" tabindex="-1"><a class="header-anchor" href="#schedule-settings-text" aria-hidden="true">#</a> Schedule settings (text)</h3><p>Smart schedule configuration (default: mon,tue,wed,thu,fri|8:00,24.0|18:00,17.0|23:00,22.0|8:00,22.0). Value can be found in the published state on the <code>schedule_settings</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schedule_settings&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_settings&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',41),v={},y=(0,o(983744).Z)(v,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[c,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,a.w5)((()=>[(0,a.Uk)("Aqara")])),_:1})])]),l,n,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),b,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);
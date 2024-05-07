"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12579],{967764:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-6276f7ab","path":"/devices/41E2PBSWMZ_356PB2MBTZ.html","title":"Schneider Electric 41E2PBSWMZ/356PB2MBTZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric 41E2PBSWMZ/356PB2MBTZ control via MQTT","description":"Integrate your Schneider Electric 41E2PBSWMZ/356PB2MBTZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:02:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Indicator mode (enum, smart endpoint)","slug":"indicator-mode-enum-smart-endpoint","link":"#indicator-mode-enum-smart-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715112310000},"filePathRelative":"devices/41E2PBSWMZ_356PB2MBTZ.md"}')},465580:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var o=i(166252);const a=(0,o._)("h1",{id:"schneider-electric-41e2pbswmz-356pb2mbtz",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#schneider-electric-41e2pbswmz-356pb2mbtz","aria-hidden":"true"},"#"),(0,o.Uk)(" Schneider Electric 41E2PBSWMZ/356PB2MBTZ")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"41E2PBSWMZ/356PB2MBTZ")],-1),s=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Wiser 40/300-Series module switch 2AX")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"switch (state), indicator_mode, linkquality")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/41E2PBSWMZ-356PB2MBTZ.png",alt:"Schneider Electric 41E2PBSWMZ/356PB2MBTZ"})])],-1),h=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),u=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),p=(0,o._)("p",null,"Pair the switch to Zigbee2MQTT by pressing 3 times to enter pairing mode. When the LED is blinking in amber, it is in Zigbee pairing mode. If the LED indication is other than flashing amber, the device is in BLE mode.",-1),m=(0,o._)("p",null,"Set the device to Zigbee mode by short pressing the push-button for 4 times and hold it for 20 secs, until, the red LED flashes in high frequency.",-1),_=(0,o._)("p",null,[(0,o._)("strong",null,"NOTE"),(0,o.Uk)(": Do not release the button when it flashes at a low frequency.")],-1),f=(0,o._)("p",null,"Release the button and wait until the LED blinks red and green or there is no LED indication.",-1),g=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),w=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),q=(0,o.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="indicator-mode-enum-smart-endpoint" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum-smart-endpoint" aria-hidden="true">#</a> Indicator mode (enum, smart endpoint)</h3><p>Set Indicator Mode for smart switch.. Value can be found in the published state on the <code>indicator_mode_smart</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode_smart&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode_smart&quot;: NEW_VALUE}</code>. The possible values are: <code>reverse_with_load</code>, <code>consistent_with_load</code>, <code>always_off</code>, <code>always_on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),b={},k=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[d,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.w5)((()=>[(0,o.Uk)("Schneider Electric")])),_:1})])]),l,r,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,u,p,m,_,f,(0,o.kq)(" Notes END: Do not edit below this line "),g,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),w,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),q])}]])}}]);
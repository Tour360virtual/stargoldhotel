(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_D3B06EA9_CD15_AFDE_41E9_142641119081, this.audio_ECB70AF5_CD14_7731_41D5_C1809B99662D])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_54B2586A_750B_85DC_41D9_68368732F926",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129",
  "this.Container_DC52DE46_CB14_AF53_4189_B5CDA23C7736"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_ECB70AF5_CD14_7731_41D5_C1809B99662D.ogg",
  "mp3Url": "media/audio_ECB70AF5_CD14_7731_41D5_C1809B99662D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_ECB70AF5_CD14_7731_41D5_C1809B99662D",
 "data": {
  "label": "Relaxing songs on the free day - Soul R&B Music Playlist - Best soul of the time (128  kbps) (www.youtube2mp3.biz)"
 }
},
{
 "initialPosition": {
  "yaw": 131.76,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECAAA76A_CD14_DD53_41DD_CE06F938251A",
 "automaticZoomSpeed": 10,
 "id": "camera_ECAAD76A_CD14_DD53_41DD_98DCC3047B21",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECAAA76A_CD14_DD53_41DD_CE06F938251A",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Casal 1",
 "hfovMin": "150%",
 "id": "panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9",
 "overlays": [
  "this.overlay_FC922784_C097_6641_41DB_0FBB6E74F826"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.95,
   "panorama": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Caf\u00e9 da Manh\u00e3",
 "hfovMin": "150%",
 "id": "panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
 "overlays": [
  "this.overlay_FE3CEF88_C0A9_E641_4183_FF7328472A30",
  "this.overlay_FE7A1C61_C0A9_AAC3_41D9_9B2E20981592",
  "this.overlay_FEDB3855_C0A9_6AC3_41D5_6795F9E7C298"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 173.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -126.63,
   "panorama": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "distance": 1
  },
  {
   "yaw": 0.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.94,
   "panorama": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29",
   "distance": 1
  },
  {
   "yaw": 85.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 172.33,
   "panorama": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 3.55,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -19.68
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 91.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EDB4A8A3_CD14_D3D2_41DF_B9E809F66A16",
 "automaticZoomSpeed": 10,
 "id": "camera_EDB4C8A3_CD14_D3D2_41E5_DA39AC057DD2",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EDB4A8A3_CD14_D3D2_41DF_B9E809F66A16",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 93.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8626C3D_CD14_D336_41DA_DA53BBA2A13B",
 "automaticZoomSpeed": 10,
 "id": "camera_E87D9C3D_CD14_D336_41E1_240E2F8C7CE7",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8626C3D_CD14_D336_41DA_DA53BBA2A13B",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 115.48,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -23.49
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 172.63,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -11.61
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 68.71,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0.98
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -73.74,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EEA0C9AC_CD14_D5D7_41E1_13A8EB088B79",
 "automaticZoomSpeed": 10,
 "id": "camera_EEA0F9AC_CD14_D5D7_41E9_6A72E1E0940C",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EEA0C9AC_CD14_D5D7_41E1_13A8EB088B79",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -161.17,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E98B1E14_CD14_AEF6_41E0_7D80D5FD5C63",
 "automaticZoomSpeed": 10,
 "id": "camera_E98B0E14_CD14_AEF6_41D9_35DD803E3C04",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E98B1E14_CD14_AEF6_41E0_7D80D5FD5C63",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -50.13,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EEE7B96E_CD14_D552_41B4_C2304E47B766",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 35.54,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED2B4816_CD14_D2F3_41D4_722BF03EE4C7",
 "automaticZoomSpeed": 10,
 "id": "camera_ED2B7816_CD14_D2F3_41E4_516E77560B5A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED2B4816_CD14_D2F3_41D4_722BF03EE4C7",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 124.32,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "manualRotationSpeed": 200,
 "manualZoomSpeed": 0,
 "automaticZoomSpeed": 10,
 "id": "camera_E89ACCFB_CD14_D332_41E4_6C0D20BB3FFC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 12.93,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF7C9A39_CD14_D731_41D6_4D9C66CA8E69",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -81.56,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -23.46
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -142.81,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 7.32
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B556EF04_BF69_6641_41CA_11E06106904E_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -179.57,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -3.83
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B538B601_BF76_A643_41D8_72216C7D209D_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -44.63,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF5379DB_CD14_D571_41CB_4444631DE05D",
 "automaticZoomSpeed": 10,
 "id": "camera_EF52B9DB_CD14_D571_41CB_DAC2D89B8DA5",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF5379DB_CD14_D571_41CB_4444631DE05D",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 173.96,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF1F6A77_CD14_D731_41DC_A384D8E79040",
 "automaticZoomSpeed": 10,
 "id": "camera_EF1EBA77_CD14_D731_41E8_E0FA9CF1BCF3",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF1F6A77_CD14_D731_41DC_A384D8E79040",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 88.77,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF4D2A1A_CD14_D6F2_41E3_88982285E5EB",
 "automaticZoomSpeed": 10,
 "id": "camera_EF4D5A1A_CD14_D6F2_41D4_47339C3870C2",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF4D2A1A_CD14_D6F2_41E3_88982285E5EB",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -13.95,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE96F97D_CD14_D531_41DD_2F8B6DD5FCB3",
 "automaticZoomSpeed": 10,
 "id": "camera_EE96E97D_CD14_D531_41B0_5994632B5589",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE96F97D_CD14_D531_41DD_2F8B6DD5FCB3",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -83.71,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -14.46
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 5.39,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E80C7C8D_CD14_D3D1_41E6_1C1C7B482A4C",
 "automaticZoomSpeed": 10,
 "id": "camera_E80F9C8D_CD14_D3D1_41E7_4B13C7C0DB14",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E80C7C8D_CD14_D3D1_41E6_1C1C7B482A4C",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Solteiro",
 "hfovMin": "150%",
 "id": "panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F",
 "overlays": [
  "this.overlay_FE7D373F_C099_E6BF_41BF_E4718C5EB219"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -101,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.6,
   "panorama": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Parquinho",
 "hfovMin": "150%",
 "id": "panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680",
 "overlays": [
  "this.overlay_A15C2CB3_BFAE_AA47_41C2_ED9951FD99F1",
  "this.overlay_A1312A94_BFAE_AE41_41DE_6DEBEA3EFB10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 92.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -103.76,
   "panorama": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "distance": 1
  },
  {
   "yaw": 33.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 107.51,
   "panorama": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -129.26,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF0F5A97_CD14_D7F2_41C1_2CF251B7C693",
 "automaticZoomSpeed": 10,
 "id": "camera_EF0F7A97_CD14_D7F2_41E0_5D12F9C095B5",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF0F5A97_CD14_D7F2_41C1_2CF251B7C693",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 53.37,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE4C78E1_CD14_D351_41D3_0E8D2F7BF9AE",
 "automaticZoomSpeed": 10,
 "id": "camera_EE4F98E1_CD14_D351_41D0_BB74EF99F8A2",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE4C78E1_CD14_D351_41D3_0E8D2F7BF9AE",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "banheiros",
 "hfovMin": "150%",
 "id": "panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01",
 "overlays": [
  "this.overlay_A0DC007A_BFAE_BAC1_41DB_E89F087F8AAB",
  "this.overlay_A0A8012C_BFAE_9A41_41E3_033D03277F8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 54.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -19.35,
   "panorama": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "distance": 1
  },
  {
   "yaw": 107.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 33.91,
   "panorama": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 124.95,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED7657A9_CD14_DDDE_41E0_D4A49D3C0CB1",
 "automaticZoomSpeed": 10,
 "id": "camera_ED7647A9_CD14_DDDE_41E1_2E133D0D87C9",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED7657A9_CD14_DDDE_41E0_D4A49D3C0CB1",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -140.32,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE5C78D2_CD14_D372_41C3_5F88CCDEC26A",
 "automaticZoomSpeed": 10,
 "id": "camera_EE5F98D2_CD14_D372_41D4_95AC1F3438B8",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE5C78D2_CD14_D372_41C3_5F88CCDEC26A",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Caf\u00e9 da Manh\u00e3",
 "hfovMin": "150%",
 "id": "panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE",
 "overlays": [
  "this.overlay_FB43AF89_C0B6_A643_41CD_B20FE72631F3",
  "this.overlay_F7D70267_C0B6_9ECF_41B2_2C817B35DBBD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 24.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -36.94,
   "panorama": "this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E",
   "distance": 1
  },
  {
   "yaw": 172.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.91,
   "panorama": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -17.97,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC88373B_CD14_DD31_41E0_A810FBF66175",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -171.97,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -18.71
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -146.09,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E92C9DB6_CD14_AD33_41A3_26C8406B8A28",
 "automaticZoomSpeed": 10,
 "id": "camera_E92C8DB6_CD14_AD33_41E2_4E8878351BAE",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E92C9DB6_CD14_AD33_41A3_26C8406B8A28",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 120.95,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EFB66BA0_CD14_D5CF_41E2_3B6C6EF55168",
 "automaticZoomSpeed": 10,
 "id": "camera_EFB18BA0_CD14_D5CF_41CF_531845C5FB02",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EFB66BA0_CD14_D5CF_41E2_3B6C6EF55168",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Restaurante",
 "hfovMin": "150%",
 "id": "panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17",
 "overlays": [
  "this.overlay_9C20588F_BFA9_AA5F_41E1_7D77B3F14F8E",
  "this.overlay_9BF8FD75_BFA9_AAC3_41E4_189A132DF50A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 50.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -101.25,
   "panorama": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195",
   "distance": 1
  },
  {
   "yaw": -86.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 76.86,
   "panorama": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 14.69,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EC83372C_CD14_DED6_41E0_A8E40E4BE143",
 "automaticZoomSpeed": 10,
 "id": "camera_EC83272C_CD14_DED6_41B1_83514373AC46",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EC83372C_CD14_DED6_41E0_A8E40E4BE143",
 "manualRotationSpeed": 200
},
{
 "items": [
  {
   "media": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88_camera"
  },
  {
   "media": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_camera"
  },
  {
   "media": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_camera"
  },
  {
   "media": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_camera"
  },
  {
   "media": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_camera"
  },
  {
   "media": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_camera"
  },
  {
   "media": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_camera"
  },
  {
   "media": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_camera"
  },
  {
   "media": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_camera"
  },
  {
   "media": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_camera"
  },
  {
   "media": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_camera"
  },
  {
   "media": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_camera"
  },
  {
   "media": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_camera"
  },
  {
   "media": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_camera"
  },
  {
   "media": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_camera"
  },
  {
   "media": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_camera"
  },
  {
   "media": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_camera"
  },
  {
   "media": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_camera"
  },
  {
   "media": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_camera"
  },
  {
   "media": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_camera"
  },
  {
   "media": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D_camera"
  },
  {
   "media": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_camera"
  },
  {
   "media": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_camera"
  },
  {
   "media": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_camera"
  },
  {
   "media": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E_camera"
  },
  {
   "media": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_camera"
  },
  {
   "media": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_camera"
  },
  {
   "media": "this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_camera"
  },
  {
   "media": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_camera"
  },
  {
   "media": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_camera"
  },
  {
   "media": "this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_camera"
  },
  {
   "media": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_camera"
  },
  {
   "media": "this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_camera"
  },
  {
   "media": "this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_camera"
  },
  {
   "media": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_camera"
  },
  {
   "media": "this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_camera"
  },
  {
   "media": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_camera"
  },
  {
   "media": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_camera"
  },
  {
   "media": "this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_camera"
  },
  {
   "media": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_camera"
  },
  {
   "media": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_camera"
  }
 ],
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Churrasqueira",
 "hfovMin": "150%",
 "id": "panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F",
 "overlays": [
  "this.overlay_87D550EB_C0EF_7BC7_41E6_2115EFFAB01A",
  "this.overlay_8802A9D6_C0EF_6DC1_41AA_536E30FC7D84"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -3.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -167.07,
   "panorama": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "distance": 1
  },
  {
   "yaw": 92.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.35,
   "panorama": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -179.51,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED8BA893_CD14_D3F1_41E6_FE34B374372B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 76.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED5F7789_CD14_DDD1_41B1_3D728AFA8030",
 "automaticZoomSpeed": 10,
 "id": "camera_ED5F6789_CD14_DDD1_41D1_D4A3AAEDFDF5",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED5F7789_CD14_DDD1_41B1_3D728AFA8030",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 162.91,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECE196FD_CD14_DF36_41D9_0F2625E7E3B9",
 "automaticZoomSpeed": 10,
 "id": "camera_ECE1D6FD_CD14_DF36_41E9_85B38FAFB0A3",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECE196FD_CD14_DF36_41D9_0F2625E7E3B9",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -16.03,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -5.08
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -40.74,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF42B9FA_CD14_D533_41E5_8824CBD0C138",
 "automaticZoomSpeed": 10,
 "id": "camera_EF42C9FA_CD14_D533_41D2_8FA6582030C5",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF42B9FA_CD14_D533_41E5_8824CBD0C138",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -85.8,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EDA068B2_CD14_D333_41D1_7C4877A780AB",
 "automaticZoomSpeed": 10,
 "id": "camera_EDA398B2_CD14_D333_41D5_7E7BF8381CB6",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EDA068B2_CD14_D333_41D1_7C4877A780AB",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -92.58,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8F8DCDB_CD14_D371_41E3_8C8421F46088",
 "automaticZoomSpeed": 10,
 "id": "camera_E8F8FCDB_CD14_D371_41C2_440D612033D0",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8F8DCDB_CD14_D371_41E3_8C8421F46088",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrada",
 "hfovMin": "150%",
 "id": "panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
 "overlays": [
  "this.overlay_9A22C757_BF79_E6CF_41D2_F92242020D18",
  "this.overlay_998BDC05_BF79_AA43_41E7_BA36E8DB0477",
  "this.overlay_9A44579B_BF7F_6647_41CF_C2220A5438DF",
  "this.overlay_99D7BF48_BF7F_66C1_41D7_22B75335B5F0",
  "this.overlay_98F3E0A9_BF7F_FA43_41C2_29D9FE56B7A2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 39.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -140.09,
   "panorama": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "distance": 1
  },
  {
   "yaw": 139.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 68.05,
   "panorama": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
   "distance": 1
  },
  {
   "yaw": -1.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -161.19,
   "panorama": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E",
   "distance": 1
  },
  {
   "yaw": -86.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.15,
   "panorama": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC",
   "distance": 1
  },
  {
   "yaw": 106.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 18.83,
   "panorama": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -94.09,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF87CB81_CD14_D5D1_41E7_BD7202213034",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jardim",
 "hfovMin": "150%",
 "id": "panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
 "overlays": [
  "this.overlay_841CC02B_C096_9A47_41E0_6EF5FC304FA6",
  "this.overlay_84A09A20_C096_AE41_41D2_5F42B106866C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.76,
   "class": "AdjacentPanorama",
   "backwardYaw": -139.69,
   "panorama": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "distance": 1
  },
  {
   "yaw": -154.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 50.74,
   "panorama": "this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -85.58,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9602D68_CD14_AD5F_41D6_77BE3A824BA0",
 "automaticZoomSpeed": 10,
 "id": "camera_E9605D68_CD14_AD5F_41E8_DFE2F8EDC4A3",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9602D68_CD14_AD5F_41D6_77BE3A824BA0",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -87.46,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -9.46
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 15.19,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EDCFB845_CD14_D356_41E8_C1EC8833EBFC",
 "automaticZoomSpeed": 10,
 "id": "camera_EDCFA845_CD14_D356_41E8_F2C57484404C",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EDCFB845_CD14_D356_41E8_C1EC8833EBFC",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 123.34,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -10.81
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 40.31,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE1E6910_CD14_D2CF_41A8_FFD2BE844969",
 "automaticZoomSpeed": 10,
 "id": "camera_EE198910_CD14_D2CF_41E8_D9441ADDF139",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE1E6910_CD14_D2CF_41A8_FFD2BE844969",
 "manualRotationSpeed": 200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_D2C2F071_C57D_ACBD_41C1_E539EDD5BBC8.ogg",
  "mp3Url": "media/audio_D2C2F071_C57D_ACBD_41C1_E539EDD5BBC8.mp3",
  "class": "AudioResource"
 },
 "id": "audio_D2C2F071_C57D_ACBD_41C1_E539EDD5BBC8",
 "data": {
  "label": "2 introdu\u00e7\u00e3o narrador"
 }
},
{
 "initialPosition": {
  "yaw": -131.43,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EEDA794F_CD14_D552_41BA_F901C9DD55D2",
 "automaticZoomSpeed": 10,
 "id": "camera_EED5994F_CD14_D552_41E3_FAFA2AC2B646",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EEDA794F_CD14_D552_41BA_F901C9DD55D2",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 39.91,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9CF5DD5_CD14_AD71_41E3_6912BD7F30AC",
 "automaticZoomSpeed": 10,
 "id": "camera_E9CF7DD5_CD14_AD71_41E8_EAAB9BA69D5A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9CF5DD5_CD14_AD71_41E3_6912BD7F30AC",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -170.3,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -4.02
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 4.23,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EFFA6B23_CD14_D6D1_41C8_4EEA3B6D7EBE",
 "automaticZoomSpeed": 10,
 "id": "camera_EFF59B23_CD14_D6D1_41E3_03DA37A9BF12",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EFFA6B23_CD14_D6D1_41C8_4EEA3B6D7EBE",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 5.88,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -21.89
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -155.89,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E81C4C6E_CD14_D353_41DF_08E87EC00768",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -87.31,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EFA19BC0_CD14_D54E_41DF_F0CA4165C243",
 "automaticZoomSpeed": 10,
 "id": "camera_EFA18BC0_CD14_D54E_41C3_87F14918A26F",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EFA19BC0_CD14_D54E_41DF_F0CA4165C243",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -13.98,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E941CD49_CD14_AD5E_41E6_763AF9A08963",
 "automaticZoomSpeed": 10,
 "id": "camera_E941FD49_CD14_AD5E_41E5_4FDB520C0AA9",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E941CD49_CD14_AD5E_41E6_763AF9A08963",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 170.19,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED51A77A_CD14_DD32_41D1_13B2A81E720B",
 "automaticZoomSpeed": 10,
 "id": "camera_ED51C77A_CD14_DD32_41B1_4D7FD41B7D3D",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED51A77A_CD14_DD32_41D1_13B2A81E720B",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 108.98,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EC0B0EEF_CD14_AF52_41E2_B354FFCF3BC7",
 "automaticZoomSpeed": 10,
 "id": "camera_EC0B3EEF_CD14_AF52_41E0_0F0735867EB6",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EC0B0EEF_CD14_AF52_41E2_B354FFCF3BC7",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -85.05,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8406BFE_CD14_D533_41B4_27067EC4BD3B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -17.1,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -3.96
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Passeio",
 "hfovMin": "150%",
 "id": "panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
 "overlays": [
  "this.overlay_A89216F9_BF9B_67C3_41D2_47DCCAA352FE",
  "this.overlay_A83C45F5_BF9A_E5C3_41E5_4AA6F1F8FABC",
  "this.overlay_A799372C_BF9A_E641_41A9_2D0B79434B8C",
  "this.overlay_AAA4FC17_BF99_6A4F_4193_8D81F86BB8E8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 99.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.97,
   "panorama": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "distance": 1
  },
  {
   "yaw": 13.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.87,
   "panorama": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Casal 2",
 "hfovMin": "150%",
 "id": "panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9",
 "overlays": [
  "this.overlay_FD1D285D_C096_AAC3_41DA_5902B8A2EFF3",
  "this.overlay_FE3878B5_C099_6A43_41C1_C16E4048E387"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 95.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -81.41,
   "panorama": "this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B",
   "distance": 1
  },
  {
   "yaw": 124.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.81,
   "panorama": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_t.jpg",
 "hfovMax": 140
},
{
 "automaticZoomSpeed": 10,
 "manualRotationSpeed": 200,
 "id": "panorama_B556081E_BF76_AA41_41E7_0E9695031B88_camera",
 "initialPosition": {
  "yaw": 7.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -17.4
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "displayOriginPosition": {
  "yaw": 7.07,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 5000,
   "easing": "cubic_in_out",
   "targetHfov": 130,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -17.4
  }
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_DC2124B8_C48B_D5AB_41C1_5EB0B46AEBCF.ogg",
  "mp3Url": "media/audio_DC2124B8_C48B_D5AB_41C1_5EB0B46AEBCF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_DC2124B8_C48B_D5AB_41C1_5EB0B46AEBCF",
 "data": {
  "label": "Relaxing songs on the free day - Soul R&B Music Playlist - Best soul of the time (128  kbps) (www.youtube2mp3.biz)"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Fachada",
 "hfovMin": "150%",
 "id": "panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
 "overlays": [
  "this.overlay_F7AA1641_C0B9_A6C3_41CA_6C207B1C185A",
  "this.overlay_F8361A35_C0B9_EE43_41C2_D0C0FE2F0400",
  "this.overlay_FA1DD0F5_C0B9_7BC3_41AC_470541FCAAAF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 93.29,
   "class": "AdjacentPanorama",
   "backwardYaw": 135.37,
   "panorama": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "distance": 1
  },
  {
   "yaw": 68.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 139.26,
   "panorama": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "distance": 1
  },
  {
   "yaw": 94.93,
   "class": "AdjacentPanorama",
   "backwardYaw": -91.23,
   "panorama": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 51.05,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 4.17
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Fachada",
 "hfovMin": "150%",
 "id": "panorama_B556EF04_BF69_6641_41CA_11E06106904E",
 "overlays": [
  "this.overlay_F420A998_C0BA_AA41_41DF_0C9219628297",
  "this.overlay_F46A62ED_C0BA_FFC3_41A3_43342C8C7228",
  "this.overlay_F48CC603_C0B9_E647_41E4_D553A97B8B08",
  "this.overlay_F8515435_C0BE_BA43_41DF_98CC0A6EC2DE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 166.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -55.05,
   "panorama": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "distance": 1
  },
  {
   "yaw": -87.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.18,
   "panorama": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91",
   "distance": 1
  },
  {
   "yaw": -161.19,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.93,
   "panorama": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -89.23,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -7.66
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -99.12,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E873DC1D_CD14_D2F1_41D6_680AF0F5A4DA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -109.82,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED62A7B8_CD14_DD3F_41B6_105D51B0F4FB",
 "automaticZoomSpeed": 10,
 "id": "camera_ED62D7B8_CD14_DD3F_41B9_834009CDE688",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED62A7B8_CD14_DD3F_41B6_105D51B0F4FB",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -67.21,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E83E3C9D_CD14_D3F6_41E6_E97AFDDD4AB4",
 "automaticZoomSpeed": 10,
 "id": "camera_E83E5C9D_CD14_D3F6_41E4_63E333722EA8",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E83E3C9D_CD14_D3F6_41E6_E97AFDDD4AB4",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -6.16,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDADE8C2_CD14_D353_41CC_031D30A28681",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -166.19,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EFDB9AF4_CD14_D737_41E6_AC02CFF49BB1",
 "automaticZoomSpeed": 10,
 "id": "camera_EFDBBAF4_CD14_D737_41E5_53479F5ABA8A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EFDB9AF4_CD14_D737_41E6_AC02CFF49BB1",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -76.51,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECF0E6DD_CD14_DF71_41CB_42E2D7A50CE6",
 "automaticZoomSpeed": 10,
 "id": "camera_ECF036DD_CD14_DF71_41D1_30AB3BB24C97",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECF0E6DD_CD14_DF71_41CB_42E2D7A50CE6",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Casal 2",
 "hfovMin": "150%",
 "id": "panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B",
 "overlays": [
  "this.overlay_FDC7AEB3_C09A_E647_41DA_D3F3BF127E8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -81.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.71,
   "panorama": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -84.3,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0.98
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -148.36,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E86D9C4C_CD14_D357_41E6_632EFDFA9756",
 "automaticZoomSpeed": 10,
 "id": "camera_E86DBC4C_CD14_D357_41C5_0DE50DE2FBCA",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E86D9C4C_CD14_D357_41E6_632EFDFA9756",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Escada",
 "hfovMin": "150%",
 "id": "panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A",
 "overlays": [
  "this.overlay_EDE12C69_C09B_AAC3_41C5_ADD91AEB57BA",
  "this.overlay_EE72A10F_C09A_9A5F_41E3_F8B7A9AEA1D4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -174.61,
   "class": "AdjacentPanorama",
   "backwardYaw": -48.24,
   "panorama": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D",
   "distance": 1
  },
  {
   "yaw": -88.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.81,
   "panorama": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Quartos Superior",
 "hfovMin": "150%",
 "id": "panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8",
 "overlays": [
  "this.overlay_F07A5590_C096_9A41_41DB_CA5B77AA953A",
  "this.overlay_F0E548F9_C0A9_6BC3_41C9_603E36EB1E56"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 112.79,
   "class": "AdjacentPanorama",
   "backwardYaw": -144.46,
   "panorama": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D",
   "distance": 1
  },
  {
   "yaw": -165.31,
   "class": "AdjacentPanorama",
   "backwardYaw": -80.4,
   "panorama": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 25.74,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ECEFC70C_CD14_DED7_41C6_1FCB29C008B7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 160.11,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -14.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -178.25,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECF9B6ED_CD14_DF51_41D3_FAF53DB882AE",
 "automaticZoomSpeed": 10,
 "id": "camera_ECF9D6ED_CD14_DF51_41DC_0B2FC5692B0D",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECF9B6ED_CD14_DF51_41D3_FAF53DB882AE",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -84.29,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E9DC1DC6_CD14_AD52_41E9_6091956CAD7E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -18.27,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -18.53
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 113.52,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E82E2CAC_CD14_D3D7_4190_7D7A82A7DCD8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -93.2,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -7.62
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -80.27,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EDE45864_CD14_D357_41E1_5E57F18A8200",
 "automaticZoomSpeed": 10,
 "id": "camera_EDE44864_CD14_D357_41E2_D5411E6A256B",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EDE45864_CD14_D357_41E1_5E57F18A8200",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 157.13,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED0637E7_CD14_DD51_41D3_D6BA4CF4A52B",
 "automaticZoomSpeed": 10,
 "id": "camera_ED0627E7_CD14_DD51_41E6_9442D3F5DB48",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED0637E7_CD14_DD51_41D3_D6BA4CF4A52B",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 103.03,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -4.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -132.16,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -10.8
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 179.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_ED93E874_CD14_D336_41E2_2337FD192864",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 99.6,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDD60826_CD14_D2D2_41D3_AAB7A8722297",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 143.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EF97BB62_CD14_D552_41DC_4B52DC6A6158",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -3.9,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED3357F7_CD14_DD32_41C4_1F10D8A4FB09",
 "automaticZoomSpeed": 10,
 "id": "camera_ED3367F7_CD14_DD32_41B7_02CD60334807",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED3357F7_CD14_DD32_41C4_1F10D8A4FB09",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -175.99,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "manualRotationSpeed": 200,
 "manualZoomSpeed": 0,
 "automaticZoomSpeed": 10,
 "id": "camera_EFE5CB43_CD14_D552_41D3_20D29885A08D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 7.4,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EE3BB92F_CD14_D2D1_41BC_9007F85E1938",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 92.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EE7FA8F1_CD14_D34E_41BC_B2D919761C78",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Convivencia Superior",
 "hfovMin": "150%",
 "id": "panorama_B538B601_BF76_A643_41D8_72216C7D209D",
 "overlays": [
  "this.overlay_F0D0EFB5_C09F_6643_41B2_AAA44314986E",
  "this.overlay_ED791D23_C09E_AA47_41E1_833BA20C8805"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -48.24,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.61,
   "panorama": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A",
   "distance": 1
  },
  {
   "yaw": -144.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 112.79,
   "panorama": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -158.82,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9323D97_CD14_ADF2_41E5_8414348C9BDA",
 "automaticZoomSpeed": 10,
 "id": "camera_E9322D97_CD14_ADF2_41C5_883541DCE153",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9323D97_CD14_ADF2_41E5_8414348C9BDA",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -36.72,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED9C3883_CD14_D3D1_41D1_57074755E266",
 "automaticZoomSpeed": 10,
 "id": "camera_ED9C4883_CD14_D3D1_419E_AEBB53FE052F",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED9C3883_CD14_D3D1_41D1_57074755E266",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 176.98,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E903CD87_CD14_ADD1_41A0_7CAAC0CD2A67",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_D3B06EA9_CD15_AFDE_41E9_142641119081.ogg",
  "mp3Url": "media/audio_D3B06EA9_CD15_AFDE_41E9_142641119081.mp3",
  "class": "AudioResource"
 },
 "id": "audio_D3B06EA9_CD15_AFDE_41E9_142641119081",
 "data": {
  "label": "2 introdu\u00e7\u00e3o narrador"
 }
},
{
 "initialPosition": {
  "yaw": 54.62,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EEF4296E_CD14_D552_41E4_20E612FE8EE5",
 "automaticZoomSpeed": 10,
 "id": "camera_EEF4596E_CD14_D552_41E0_81BD96294D3C",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EEF4296E_CD14_D552_41E4_20E612FE8EE5",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 98.59,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EDC36835_CD14_D331_41E1_FC081E2F86AB",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Solteiro",
 "hfovMin": "150%",
 "id": "panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
 "overlays": [
  "this.overlay_FE95E76E_C09E_A6C1_41D3_F07446B630CB",
  "this.overlay_FF1D1CD9_C09E_EBC3_41B0_D60E590C6E88",
  "this.overlay_FF496963_C09E_EAC7_41E1_5966649533C3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -172.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -101,
   "panorama": "this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F",
   "distance": 1
  },
  {
   "yaw": -80.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -165.31,
   "panorama": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8",
   "distance": 1
  },
  {
   "yaw": 80.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 162.03,
   "panorama": "this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_t.jpg",
 "hfovMax": 140
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "yaw": -51.66,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8C8FCCC_CD14_D356_41E5_5ACE0A23B9B0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 92.29,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE2A393F_CD14_D531_41E8_9A8FA903CCE8",
 "automaticZoomSpeed": 10,
 "id": "camera_EE2A293F_CD14_D531_41BF_92201E0392E1",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE2A393F_CD14_D531_41E8_9A8FA903CCE8",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -147.27,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -7.6
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 78.75,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECB7674B_CD14_DD52_41D0_363B8B7D826D",
 "automaticZoomSpeed": 10,
 "id": "camera_ECB6974B_CD14_DD52_41E3_33102028BEB8",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECB7674B_CD14_DD52_41D0_363B8B7D826D",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -29.94,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EE86398D_CD14_D5D1_41E2_A65858714120",
 "automaticZoomSpeed": 10,
 "id": "camera_EE86298D_CD14_D5D1_4181_523B385CE10C",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EE86398D_CD14_D5D1_41E2_A65858714120",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -87.31,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC03CECF_CD14_AF51_41BF_D4290186FAC8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 3.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -18.26
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -89.76,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 5.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 160.65,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9221DA6_CD14_ADD3_41D8_D7795756A270",
 "automaticZoomSpeed": 10,
 "id": "camera_E9225DA6_CD14_ADD3_41BD_75D5DE5CC6AE",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9221DA6_CD14_ADD3_41D8_D7795756A270",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 86.03,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED1B67D8_CD14_DD7E_41B2_DB716176DC8E",
 "automaticZoomSpeed": 10,
 "id": "camera_ED1A97D8_CD14_DD7E_41E6_ED0FD20503F1",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED1B67D8_CD14_DD7E_41B2_DB716176DC8E",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 178.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED6E37C8_CD14_DD5E_41E0_FDC753CC705A",
 "automaticZoomSpeed": 10,
 "id": "camera_ED6E57C8_CD14_DD5E_41B3_4F17FF2EAE46",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED6E37C8_CD14_DD5E_41E0_FDC753CC705A",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Solteiro",
 "hfovMin": "150%",
 "id": "panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795",
 "overlays": [
  "this.overlay_81778030_C099_9A41_41E0_2DEE2990E0F6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 162.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 80.88,
   "panorama": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Restaurante",
 "hfovMin": "150%",
 "id": "panorama_B555B540_BF76_FAC1_41DB_B917F5012F01",
 "overlays": [
  "this.overlay_A711B924_BF9A_EA41_41D2_0C1306130DE5",
  "this.overlay_A651FFAF_BF9A_A65F_41B6_551DACEFA688"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -17.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 176.1,
   "panorama": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
   "distance": 1
  },
  {
   "yaw": 166.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.04,
   "panorama": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -89.57,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF293AD5_CD14_D771_41C1_4C434B6A4898",
 "automaticZoomSpeed": 10,
 "id": "camera_EF294AD5_CD14_D771_41CD_253A2A5369CD",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF293AD5_CD14_D771_41C1_4C434B6A4898",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -85.3,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8B49D1A_CD14_D2F2_41DA_1B8B3D0231A0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 79,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EC94871C_CD14_DEF7_41CD_7BD26D908C0D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 18.81,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9E95DF5_CD14_AD36_41C3_6952E9B5D2E8",
 "automaticZoomSpeed": 10,
 "id": "camera_E9E96DF5_CD14_AD36_41E8_7B008F0816D9",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9E95DF5_CD14_AD36_41C3_6952E9B5D2E8",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -1.55,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EDFB7855_CD14_D376_41C5_9E2C6023397D",
 "automaticZoomSpeed": 10,
 "id": "camera_EDFB6855_CD14_D376_41B7_26A6F47A7681",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EDFB7855_CD14_D376_41C5_9E2C6023397D",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -55.4,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EEC4195E_CD14_D573_41BA_96270A89F7A8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -125.24,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8500BDF_CD14_D572_41DB_1BD5F7EBAFAF",
 "automaticZoomSpeed": 10,
 "id": "camera_E8502BDF_CD14_D572_41C7_79AA8128D270",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8500BDF_CD14_D572_41DB_1BD5F7EBAFAF",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -85.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EEB0A99D_CD14_D5F6_41DE_0326A5D315CF",
 "automaticZoomSpeed": 10,
 "id": "camera_EEB0C99D_CD14_D5F6_41E3_F1E76AB7B2F1",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EEB0A99D_CD14_D5F6_41DE_0326A5D315CF",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -7.67,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EE698900_CD14_D2CF_41E3_D426C75C39B6",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Convivencia Terr\u00e9o",
 "hfovMin": "150%",
 "id": "panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1",
 "overlays": [
  "this.overlay_982FCA35_BF6B_AE43_41E5_8B3752386277",
  "this.overlay_97DED0F1_BF6B_9BC3_4185_53FEBACEF0A8",
  "this.overlay_9C07F111_BF6B_7A43_41E1_525165B5A2A8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.2,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.1,
   "panorama": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -125.38,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.43,
   "panorama": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Restaurante",
 "hfovMin": "150%",
 "id": "panorama_B5556833_BF77_AA47_41E3_0C8BCE333195",
 "overlays": [
  "this.overlay_9C8C7C56_BFAA_AAC1_41E3_47A1B2984958",
  "this.overlay_A14C6A53_BFAA_AEC7_41E2_EC581E51DD55"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 1.75,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.04,
   "panorama": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
   "distance": 1
  },
  {
   "yaw": -101.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 50.74,
   "panorama": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -117.96,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED3E2806_CD14_D2D3_41D0_DBEE9BF02258",
 "automaticZoomSpeed": 10,
 "id": "camera_ED3E4806_CD14_D2D3_41E2_94126F3FCE7A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED3E2806_CD14_D2D3_41D0_DBEE9BF02258",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina",
 "hfovMin": "150%",
 "id": "panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
 "overlays": [
  "this.overlay_AF3E70B8_BFEB_9A41_41D3_257741331F10",
  "this.overlay_AF732C9D_BFFE_AA43_41CD_CC2E833E532C",
  "this.overlay_AE00C77E_BFFB_E6C1_41D5_58A64CF354DB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -121.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.69,
   "panorama": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F",
   "distance": 1
  },
  {
   "yaw": 4.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.09,
   "panorama": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "distance": 1
  },
  {
   "yaw": -55.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -71.02,
   "panorama": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 41.06,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -8.48
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 62.89,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8856D0A_CD14_D2D3_41E8_AB2E4CFDCBB3",
 "automaticZoomSpeed": 10,
 "id": "camera_E8848D0A_CD14_D2D3_41E7_CBAB11C457FC",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8856D0A_CD14_D2D3_41E8_AB2E4CFDCBB3",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jardim",
 "hfovMin": "150%",
 "id": "panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29",
 "overlays": [
  "this.overlay_818203B6_C09A_FE41_41E2_2873904CFFE2",
  "this.overlay_81ED0EC2_C09A_E7C1_41B7_276B800FCCF9",
  "this.overlay_842E64E4_C09A_BBC1_4141_0F36EAF2DBB0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 128.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 143.28,
   "panorama": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -87.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.49,
   "panorama": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -166.65,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -15.07
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Caf\u00e9 da Manh\u00e3",
 "hfovMin": "150%",
 "id": "panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E",
 "overlays": [
  "this.overlay_F8B0AD8A_C0AB_6A41_41D5_1D8EA56AFA67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -36.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 24.11,
   "panorama": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 58.65,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "manualRotationSpeed": 200,
 "manualZoomSpeed": 0,
 "automaticZoomSpeed": 10,
 "id": "camera_EF6F5A58_CD14_D77F_41BC_4C6CE22B1E5C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88_camera"
  },
  {
   "media": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_camera"
  },
  {
   "media": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_camera"
  },
  {
   "media": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_camera"
  },
  {
   "media": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_camera"
  },
  {
   "media": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_camera"
  },
  {
   "media": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_camera"
  },
  {
   "media": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_camera"
  },
  {
   "media": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_camera"
  },
  {
   "media": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_camera"
  },
  {
   "media": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_camera"
  },
  {
   "media": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_camera"
  },
  {
   "media": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_camera"
  },
  {
   "media": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_camera"
  },
  {
   "media": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_camera"
  },
  {
   "media": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_camera"
  },
  {
   "media": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_camera"
  },
  {
   "media": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_camera"
  },
  {
   "media": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_camera"
  },
  {
   "media": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_camera"
  },
  {
   "media": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B538B601_BF76_A643_41D8_72216C7D209D_camera"
  },
  {
   "media": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_camera"
  },
  {
   "media": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_camera"
  },
  {
   "media": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_camera"
  },
  {
   "media": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E_camera"
  },
  {
   "media": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_camera"
  },
  {
   "media": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_camera"
  },
  {
   "media": "this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_camera"
  },
  {
   "media": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_camera"
  },
  {
   "media": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_camera"
  },
  {
   "media": "this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_camera"
  },
  {
   "media": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_camera"
  },
  {
   "media": "this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_camera"
  },
  {
   "media": "this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_camera"
  },
  {
   "media": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_camera"
  },
  {
   "media": "this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_camera"
  },
  {
   "media": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_camera"
  },
  {
   "media": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_camera"
  },
  {
   "media": "this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_camera"
  },
  {
   "media": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_camera"
  },
  {
   "media": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Estacionamento",
 "hfovMin": "150%",
 "id": "panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
 "overlays": [
  "this.overlay_F1A9FF92_C0AE_E641_41DB_49106484314B",
  "this.overlay_F219EA1D_C0AB_EE43_41D3_0088037B9BFE",
  "this.overlay_F2799998_C0AB_AA41_41DC_C441E1C410FB",
  "this.overlay_F2D93FC5_C0AB_65C3_41D4_575B085770A9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -157.44,
   "class": "AdjacentPanorama",
   "backwardYaw": -66.48,
   "panorama": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "distance": 1
  },
  {
   "yaw": 48.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -162.45,
   "panorama": "this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91",
   "distance": 1
  },
  {
   "yaw": 143.28,
   "class": "AdjacentPanorama",
   "backwardYaw": 128.34,
   "panorama": "this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29",
   "distance": 1
  },
  {
   "yaw": 178.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.42,
   "panorama": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -86.69,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0.24
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -72.49,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ED4B2799_CD14_DDF1_41DF_863FDD109A0D",
 "automaticZoomSpeed": 10,
 "id": "camera_ED4B4799_CD14_DDF1_41A9_4B745F18851B",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ED4B2799_CD14_DDF1_41DF_863FDD109A0D",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 22.56,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9106D78_CD14_AD3E_41B5_F93DCD880C24",
 "automaticZoomSpeed": 10,
 "id": "camera_E9139D78_CD14_AD3E_41E4_366328FD354D",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9106D78_CD14_AD3E_41B5_F93DCD880C24",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 98.85,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9992E04_CD14_AED7_41B2_125CCB02C5C6",
 "automaticZoomSpeed": 10,
 "id": "camera_E9995E04_CD14_AED7_41E3_6E6565DD4EBE",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9992E04_CD14_AED7_41B2_125CCB02C5C6",
 "manualRotationSpeed": 200
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_955093A0_C19E_FE41_41E4_CFFFA11263FC.ogg",
  "mp3Url": "media/audio_955093A0_C19E_FE41_41E4_CFFFA11263FC.mp3",
  "class": "AudioResource"
 },
 "id": "audio_955093A0_C19E_FE41_41E4_CFFFA11263FC",
 "data": {
  "label": "Relaxing songs on the free day - Soul R&B Music Playlist - Best soul of the time (128  kbps) (www.youtube2mp3.biz)"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Fachada",
 "hfovMin": "150%",
 "id": "panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91",
 "overlays": [
  "this.overlay_F2EF3326_C0B7_BE4E_41CC_E65421B5A9C9",
  "this.overlay_F3780D72_C0B7_EAC1_41E6_5B5341D9081E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 70.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -87.71,
   "panorama": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E",
   "distance": 1
  },
  {
   "yaw": -162.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 48.57,
   "panorama": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -172.47,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8A7FD29_CD14_D2D1_41E4_4308A4BEC48D",
 "automaticZoomSpeed": 10,
 "id": "camera_E8A70D29_CD14_D2D1_41D2_482CA27EFA80",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8A7FD29_CD14_D2D1_41E4_4308A4BEC48D",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Churrasqueira",
 "hfovMin": "150%",
 "id": "panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
 "overlays": [
  "this.overlay_838AAB57_C0E9_6ECF_41E2_C45E6E50C8EC",
  "this.overlay_8445E331_C0EE_BE43_41C2_CC1C0790A413",
  "this.overlay_84F3FC35_C0EE_EA43_41DB_AAE8E9A18E8B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -66.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -157.44,
   "panorama": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "distance": 1
  },
  {
   "yaw": -167.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.02,
   "panorama": "this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F",
   "distance": 1
  },
  {
   "yaw": 70.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 21.18,
   "panorama": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -77.75,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -0.21
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -139.32,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -7.8
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 3.9,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EF39EAB6_CD14_D733_41E5_84E1D2CC8C83",
 "automaticZoomSpeed": 10,
 "id": "camera_EF391AB6_CD14_D733_41E4_EAED59C62EB7",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EF39EAB6_CD14_D733_41E5_84E1D2CC8C83",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Recep\u00e7\u00e3o",
 "hfovMin": "150%",
 "id": "panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
 "overlays": [
  "this.overlay_93FD2C4A_BF6B_6AC1_41D7_5496F2B4D665",
  "this.overlay_936CE0DC_BF6A_9BC1_41BB_A0508F3629B5",
  "this.overlay_93258E4D_BF6A_A6C3_41B2_187FB4C42F6E",
  "this.overlay_92BB228F_BF6A_9E5F_41E6_EC8BDA62A535"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -9.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.94,
   "panorama": "this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A",
   "distance": 1
  },
  {
   "yaw": -176.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.2,
   "panorama": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1",
   "distance": 1
  },
  {
   "yaw": -126.63,
   "class": "AdjacentPanorama",
   "backwardYaw": 173.84,
   "panorama": "this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5",
   "distance": 1
  },
  {
   "yaw": 31.64,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.68,
   "panorama": "this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrada",
 "hfovMin": "150%",
 "id": "panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
 "overlays": [
  "this.overlay_9727293A_BF69_AA41_41E7_66B8A9814CE6",
  "this.overlay_9689F7BE_BF69_E641_41E7_89B248AF7671",
  "this.overlay_9811F8BE_BF69_6A41_41E2_5127D495E759"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 150.06,
   "panorama": "this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
   "distance": 1
  },
  {
   "yaw": -91.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.93,
   "panorama": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
   "distance": 1
  },
  {
   "yaw": 18.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.26,
   "panorama": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -86.71,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9575D39_CD14_AD31_41D2_BB4279B9CA61",
 "automaticZoomSpeed": 10,
 "id": "camera_E9574D39_CD14_AD31_41D8_356DA3A4676A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9575D39_CD14_AD31_41D2_BB4279B9CA61",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Restaurante",
 "hfovMin": "150%",
 "id": "panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
 "overlays": [
  "this.overlay_A291BD28_BFAA_EA41_41E1_626F00069D45",
  "this.overlay_A20F1EAC_BFAA_A641_41C1_03E508284BCC",
  "this.overlay_A1E2D428_BFAA_9A41_41D0_DA77A927ACFB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 103.49,
   "class": "AdjacentPanorama",
   "backwardYaw": -59.05,
   "panorama": "this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
   "distance": 1
  },
  {
   "yaw": -103.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.69,
   "panorama": "this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680",
   "distance": 1
  },
  {
   "yaw": -19.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.76,
   "panorama": "this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -140.22,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9719D58_CD14_AD7F_41C3_17D30035D0F3",
 "automaticZoomSpeed": 10,
 "id": "camera_E971BD58_CD14_AD7F_41C8_76426D8BD6A3",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9719D58_CD14_AD7F_41C3_17D30035D0F3",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 93.82,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EFCBCB04_CD14_D6D7_4189_2D015BD2C2CC",
 "automaticZoomSpeed": 10,
 "id": "camera_EFCB1B04_CD14_D6D7_41B2_7682AF7D4C0F",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EFCBCB04_CD14_D6D7_4189_2D015BD2C2CC",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 17.55,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E8D88CBC_CD14_D337_41B5_4A2672ABC1AC",
 "automaticZoomSpeed": 10,
 "id": "camera_E8D8BCBC_CD14_D337_41D0_4E454FC7869A",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E8D88CBC_CD14_D337_41B5_4A2672ABC1AC",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -19.1,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -5.91
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -8.08,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 1.64
 },
 "manualRotationSpeed": 200,
 "timeToIdle": 30000,
 "class": "PanoramaCamera",
 "manualZoomSpeed": 0,
 "automaticZoomSpeed": 10,
 "id": "panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_camera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jardim",
 "hfovMin": "150%",
 "id": "panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF",
 "overlays": [
  "this.overlay_82D51663_C0EA_E6C7_41E6_4E1FDB5B660B",
  "this.overlay_8379A8C3_C0EA_ABC7_41E2_8084AC9A4608"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 50.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.26,
   "panorama": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 21.9,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -3.69
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -109.07,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E8EB6CEB_CD14_D351_41C2_C78B0BFB0193",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -111.95,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_E9FE8DE5_CD14_AD51_41D6_3D06BD36ABD6",
 "automaticZoomSpeed": 10,
 "id": "camera_E9FEDDE5_CD14_AD51_41CC_23331ABC4BAF",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_E9FE8DE5_CD14_AD51_41D6_3D06BD36ABD6",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Casal 1",
 "hfovMin": "150%",
 "id": "panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE",
 "overlays": [
  "this.overlay_FEF8A56C_C0AA_9AC1_41AD_0C8987932E33",
  "this.overlay_FF435634_C0AA_A641_41AD_48A8751AB868"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 94.95,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.7,
   "panorama": "this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9",
   "distance": 1
  },
  {
   "yaw": 129.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.53,
   "panorama": "this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -129.26,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_EE0BD920_CD14_D2CE_41D1_ABC64CEAA25B",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Passeio",
 "hfovMin": "150%",
 "id": "panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
 "overlays": [
  "this.overlay_ACD4F74C_BFE9_A6C1_41E4_114DBBF6153D",
  "this.overlay_ABA66378_BFE9_FEC1_41B9_B76F78F9252E",
  "this.overlay_ABCD9841_BFE9_AAC3_4164_7A26506EB686",
  "this.overlay_AB5A10E4_BFE9_9BC1_41E4_F4749DB4586A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.45,
   "panorama": "this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -93.97,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.73,
   "panorama": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
   "distance": 1
  },
  {
   "yaw": -139.69,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.76,
   "panorama": "this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -161.63,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -3.72
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Fachada",
 "hfovMin": "150%",
 "id": "panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8",
 "overlays": [
  "this.overlay_F655FA7B_C0BE_AEC7_41D1_1A6D0BA340D6",
  "this.overlay_F824C5B7_C0BA_FA4F_41D0_C2A573D15DFE",
  "this.overlay_F69CAEEA_C0BA_A7C1_41C1_11E1A1DD8064",
  "this.overlay_953F10DE_C1A9_9BC1_41D1_2E8A7678FF4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 135.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.29,
   "panorama": "this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE",
   "distance": 1
  },
  {
   "yaw": -55.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 166.02,
   "panorama": "this.panorama_B556EF04_BF69_6641_41CA_11E06106904E",
   "distance": 1
  },
  {
   "yaw": -140.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 39.78,
   "panorama": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "distance": 1
  },
  {
   "yaw": 150.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 94.42,
   "panorama": "this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Recep\u00e7\u00e3o",
 "hfovMin": "150%",
 "id": "panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC",
 "overlays": [
  "this.overlay_96684F94_BF69_E641_41E7_170B408F2BE0",
  "this.overlay_95EFFC46_BF69_EAC1_41AF_7261227D908E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -81.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.93,
   "panorama": "this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7",
   "distance": 1
  },
  {
   "yaw": 39.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.64,
   "panorama": "this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_t.jpg",
 "hfovMax": 140
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Quartos Terr\u00e9o",
 "hfovMin": "150%",
 "id": "panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB",
 "overlays": [
  "this.overlay_9E1D6498_BF9E_BA41_41E6_3C02DFB1ECA3",
  "this.overlay_9D69FD14_BF99_6A41_41AD_4212F3007022",
  "this.overlay_9D3B9E80_BF99_6641_41D7_C03A6CF3B7BA",
  "this.overlay_9EC0547E_BF99_FAC1_41DB_5AA990B06C2B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -164.81,
   "class": "AdjacentPanorama",
   "backwardYaw": 124.6,
   "panorama": "this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9",
   "distance": 1
  },
  {
   "yaw": 90.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -125.38,
   "panorama": "this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1",
   "distance": 1
  },
  {
   "yaw": 7.53,
   "class": "AdjacentPanorama",
   "backwardYaw": 129.87,
   "panorama": "this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE",
   "distance": 1
  },
  {
   "yaw": 62.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 166.05,
   "panorama": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 8.91,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_EC046EDF_CD14_AF71_41D6_2CCD459148F6",
 "automaticZoomSpeed": 10,
 "id": "camera_EC078EDF_CD14_AF71_41C6_75D0EE792517",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_EC046EDF_CD14_AF71_41D6_2CCD459148F6",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina",
 "hfovMin": "150%",
 "id": "panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
 "overlays": [
  "this.overlay_9F15CBF0_BF99_6DC1_41E0_7CFA1E9ED35D",
  "this.overlay_9E71C687_BF99_A64F_41D9_16DF26918805",
  "this.overlay_9F75C933_BF99_AA47_41DA_4174E01E9705",
  "this.overlay_9E65B482_BF9A_BA41_41A3_FE3F4F6DD98B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 21.18,
   "class": "AdjacentPanorama",
   "backwardYaw": 70.93,
   "panorama": "this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832",
   "distance": 1
  },
  {
   "yaw": -71.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -55.68,
   "panorama": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
   "distance": 1
  },
  {
   "yaw": -175.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -117.11,
   "panorama": "this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": -103.14,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "timeToIdle": 30000,
 "initialSequence": "this.sequence_ECBCE75A_CD14_DD73_41C6_2ADFCBC4DD17",
 "automaticZoomSpeed": 10,
 "id": "camera_ECBC175A_CD14_DD73_41DB_154D5E010448",
 "class": "PanoramaCamera",
 "idleSequence": "this.sequence_ECBCE75A_CD14_DD73_41C6_2ADFCBC4DD17",
 "manualRotationSpeed": 200
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Restaurante",
 "hfovMin": "150%",
 "id": "panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633",
 "overlays": [
  "this.overlay_A717F258_BFAA_FEC1_41E3_C63807A31E77",
  "this.overlay_A6B1F373_BFAA_BEC7_41E5_EB29263981F2",
  "this.overlay_A5DADA4E_BFAB_6EC1_41BC_E3F9BDAB6E51",
  "this.overlay_A4DCAE65_BFAB_A6C3_41E2_328FEA05D5B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -59.05,
   "class": "AdjacentPanorama",
   "backwardYaw": 103.49,
   "panorama": "this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70",
   "distance": 1
  },
  {
   "yaw": -6.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.75,
   "panorama": "this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195",
   "distance": 1
  },
  {
   "panorama": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 176.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -17.09,
   "panorama": "this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 58.46,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -12.8
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Piscina",
 "hfovMin": "150%",
 "id": "panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0",
 "overlays": [
  "this.overlay_AE455DF3_BFF9_A5C7_41E7_6864A485514B",
  "this.overlay_AC38414D_BFF7_BAC3_41E3_88BFD3FFD0B7",
  "this.overlay_ADDF7C5B_BFF6_AAC7_41C1_F2F876859343",
  "this.overlay_AC282F90_BFE9_A641_41B7_743BA5689D4B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -22.87,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.81,
   "panorama": "this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA",
   "distance": 1
  },
  {
   "yaw": 76.86,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.18,
   "panorama": "this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17",
   "distance": 1
  },
  {
   "yaw": -117.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.77,
   "panorama": "this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410",
   "distance": 1
  },
  {
   "yaw": -171.09,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.01,
   "panorama": "this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "yaw": 161.66,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -1.53
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": 23.8,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": -14.65
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "initialPosition": {
  "yaw": -84.73,
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "pitch": 1.21
 },
 "timeToIdle": 30000,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 295,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 32.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 200
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_54B2586A_750B_85DC_41D9_68368732F926",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_498E74F4_545B_B067_41CC_63589B8419E3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 64,
 "width": 550,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": 34,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---INFO photo"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129",
 "left": "0%",
 "children": [
  "this.Container_6E63C913_57DF_81FB_41B3_4FCBC143F4CB",
  "this.Container_6E640913_57DF_81FB_41AB_7A46A483589F"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129, false, 0, null, null, false)"
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_DC52DE46_CB14_AF53_4189_B5CDA23C7736",
 "backgroundOpacity": 0,
 "width": 283,
 "scrollBarVisible": "rollOver",
 "right": 1,
 "children": [
  "this.Image_D3F67751_CB14_BD71_41E4_1F46184315E4"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "bottom": 1,
 "scrollBarWidth": 10,
 "height": 167,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container17630"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECAAA76A_CD14_DD53_41DD_CE06F938251A",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 94.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE, this.camera_E8406BFE_CD14_D533_41B4_27067EC4BD3B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876048CE_C0FA_EBC1_41E2_C2086C5C02DA",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 94.7
  }
 ],
 "id": "overlay_FC922784_C097_6641_41DB_0FBB6E74F826",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 0.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29, this.camera_EE7FA8F1_CD14_D34E_41BC_B2D919761C78); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876388CE_C0FA_EBC1_41D5_50622A1E60BC",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 0.49
  }
 ],
 "id": "overlay_FE3CEF88_C0A9_E641_4183_FF7328472A30",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 173.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59, this.camera_EE4F98E1_CD14_D351_41D0_BB74EF99F8A2); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763E8CE_C0FA_EBC1_41D8_72F1E4AF47EE",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 173.84
  }
 ],
 "id": "overlay_FE7A1C61_C0A9_AAC3_41D9_9B2E20981592",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 85.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE, this.camera_EE698900_CD14_D2CF_41E3_D426C75C39B6); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763D8CE_C0FA_EBC1_41CF_D261EDCD13B2",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 85.91
  }
 ],
 "id": "overlay_FEDB3855_C0A9_6AC3_41D5_6795F9E7C298",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EDB4A8A3_CD14_D3D2_41DF_B9E809F66A16",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8626C3D_CD14_D336_41DA_DA53BBA2A13B",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EEA0C9AC_CD14_D5D7_41E1_13A8EB088B79",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E98B1E14_CD14_AEF6_41E0_7D80D5FD5C63",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED2B4816_CD14_D2F3_41D4_722BF03EE4C7",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF5379DB_CD14_D571_41CB_4444631DE05D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF1F6A77_CD14_D731_41DC_A384D8E79040",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF4D2A1A_CD14_D6F2_41E3_88982285E5EB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE96F97D_CD14_D531_41DD_2F8B6DD5FCB3",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E80C7C8D_CD14_D3D1_41E6_1C1C7B482A4C",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -101,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E, this.camera_EE3BB92F_CD14_D2D1_41BC_9007F85E1938); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876128CE_C0FA_EBC1_41D1_FC30FD0DB380",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -101
  }
 ],
 "id": "overlay_FE7D373F_C099_E6BF_41BF_E4718C5EB219",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 33.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01, this.camera_ED4B4799_CD14_DDF1_41A9_4B745F18851B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877EC8BF_C0FA_EBBF_41DB_6BFDB32EA4FA",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 33.91
  }
 ],
 "id": "overlay_A15C2CB3_BFAE_AA47_41C2_ED9951FD99F1",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 92.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70, this.camera_ED5F6789_CD14_DDD1_41D1_D4A3AAEDFDF5); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F28BF_C0FA_EBBF_41E0_0E1431E5DD54",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.69
  }
 ],
 "id": "overlay_A1312A94_BFAE_AE41_41DE_6DEBEA3EFB10",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF0F5A97_CD14_D7F2_41C1_2CF251B7C693",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE4C78E1_CD14_D351_41D3_0E8D2F7BF9AE",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 54.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70, this.camera_E9225DA6_CD14_ADD3_41BD_75D5DE5CC6AE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F18BF_C0FA_EBBF_41D8_6C0B044906D2",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 54.76
  }
 ],
 "id": "overlay_A0DC007A_BFAE_BAC1_41DB_E89F087F8AAB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 107.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680, this.camera_E92C8DB6_CD14_AD33_41E2_4E8878351BAE); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F78BF_C0FA_EBBF_41E6_7AF6A47C0A47",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 107.51
  }
 ],
 "id": "overlay_A0A8012C_BFAE_9A41_41E3_033D03277F8D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED7657A9_CD14_DDDE_41E0_D4A49D3C0CB1",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE5C78D2_CD14_D372_41C3_5F88CCDEC26A",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 24.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E, this.camera_EF97BB62_CD14_D552_41DC_4B52DC6A6158); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876318CE_C0FA_EBC1_41D7_9CF716FC0CF2",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 24.11
  }
 ],
 "id": "overlay_FB43AF89_C0B6_A643_41CD_B20FE72631F3",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 172.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5, this.camera_EF87CB81_CD14_D5D1_41E7_BD7202213034); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876348CE_C0FA_EBC1_41E0_6BE4342C2348",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 172.33
  }
 ],
 "id": "overlay_F7D70267_C0B6_9ECF_41B2_2C817B35DBBD",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E92C9DB6_CD14_AD33_41A3_26C8406B8A28",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EFB66BA0_CD14_D5CF_41E2_3B6C6EF55168",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -86.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0, this.camera_ECBC175A_CD14_DD73_41DB_154D5E010448); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E18BF_C0FA_EBBF_41BA_08CB992E5834",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -86.18
  }
 ],
 "id": "overlay_9C20588F_BFA9_AA5F_41E1_7D77B3F14F8E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 50.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195, this.camera_ECB6974B_CD14_DD52_41E3_33102028BEB8); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E78BF_C0FA_EBBF_41CA_F013A38154CB",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 50.74
  }
 ],
 "id": "overlay_9BF8FD75_BFA9_AAC3_41E4_189A132DF50A",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EC83372C_CD14_DED6_41E0_A8E40E4BE143",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 92.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549, this.camera_EF6F5A58_CD14_D77F_41BC_4C6CE22B1E5C); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876188CE_C0FA_EBC1_41D7_A38C07B89EC7",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.69
  }
 ],
 "id": "overlay_87D550EB_C0EF_7BC7_41E6_2115EFFAB01A",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -3.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832, this.camera_EF7C9A39_CD14_D731_41D6_4D9C66CA8E69); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876778CE_C0FA_EBC1_41E4_2F9E84ECEB10",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -3.02
  }
 ],
 "id": "overlay_8802A9D6_C0EF_6DC1_41AA_536E30FC7D84",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED5F7789_CD14_DDD1_41B1_3D728AFA8030",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECE196FD_CD14_DF36_41D9_0F2625E7E3B9",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF42B9FA_CD14_D533_41E5_8824CBD0C138",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EDA068B2_CD14_D333_41D1_7C4877A780AB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8F8DCDB_CD14_D371_41E3_8C8421F46088",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -86.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC, this.camera_E9995E04_CD14_AED7_41E3_6E6565DD4EBE); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877C18BF_C0FA_EBBF_41D6_978624B292F6",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -86.93
  }
 ],
 "id": "overlay_9A22C757_BF79_E6CF_41D2_F92242020D18",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 106.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88, this.camera_E98B0E14_CD14_AEF6_41D9_35DD803E3C04); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877C78BF_C0FA_EBBF_41B9_799DFD58DC6C",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 106.26
  }
 ],
 "id": "overlay_998BDC05_BF79_AA43_41E7_BA36E8DB0477",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.21,
   "yaw": 39.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8, this.camera_E9CF7DD5_CD14_AD71_41E8_EAAB9BA69D5A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877CB8BF_C0FA_EBBF_41CB_F184CFA47117",
   "pitch": 10.87,
   "hfov": 15.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 39.78
  }
 ],
 "id": "overlay_9A44579B_BF7F_6647_41CF_C2220A5438DF",
 "data": {
  "label": "Arrow 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.22,
   "yaw": -1.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556EF04_BF69_6641_41CA_11E06106904E, this.camera_E9E96DF5_CD14_AD36_41E8_7B008F0816D9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877C98BF_C0FA_EBBF_41BB_239AC25D690D",
   "pitch": 10.49,
   "hfov": 16.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -1.93
  }
 ],
 "id": "overlay_99D7BF48_BF7F_66C1_41D7_22B75335B5F0",
 "data": {
  "label": "Arrow 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.22,
   "yaw": 139.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE, this.camera_E9FEDDE5_CD14_AD51_41CC_23331ABC4BAF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877CF8BF_C0FA_EBBF_41E5_50780E6B92CC",
   "pitch": 10.49,
   "hfov": 16.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 139.26
  }
 ],
 "id": "overlay_98F3E0A9_BF7F_FA43_41C2_29D9FE56B7A2",
 "data": {
  "label": "Arrow 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -0.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C, this.camera_EE198910_CD14_D2CF_41E8_D9441ADDF139); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8760B8CE_C0FA_EBC1_41E7_F32F9178A57B",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -0.76
  }
 ],
 "id": "overlay_841CC02B_C096_9A47_41E0_6EF5FC304FA6",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -154.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF, this.camera_EE0BD920_CD14_D2CE_41D1_ABC64CEAA25B); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876098CE_C0FA_EBC1_41E7_BD58E52652E0",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -154.26
  }
 ],
 "id": "overlay_84A09A20_C096_AE41_41D2_5F42B106866C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9602D68_CD14_AD5F_41D6_77BE3A824BA0",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EDCFB845_CD14_D356_41E8_C1EC8833EBFC",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE1E6910_CD14_D2CF_41A8_FFD2BE844969",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EEDA794F_CD14_D552_41BA_F901C9DD55D2",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9CF5DD5_CD14_AD71_41E3_6912BD7F30AC",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EFFA6B23_CD14_D6D1_41C8_4EEA3B6D7EBE",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EFA19BC0_CD14_D54E_41DF_F0CA4165C243",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E941CD49_CD14_AD5E_41E6_763AF9A08963",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED51A77A_CD14_DD32_41D1_13B2A81E720B",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EC0B0EEF_CD14_AF52_41E2_B354FFCF3BC7",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 13.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0, this.camera_ED0627E7_CD14_DD51_41E6_9442D3F5DB48); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877928BF_C0FA_EBBF_41E3_3DD25E112A85",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 13.81
  }
 ],
 "id": "overlay_A89216F9_BF9B_67C3_41D2_47DCCAA352FE",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -83.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877918BF_C0FA_EBBF_41D9_BC0C3D80793E",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -83.42
  }
 ],
 "id": "overlay_A83C45F5_BF9A_E5C3_41E5_4AA6F1F8FABC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 146.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877978BF_C0FA_EBBF_41E6_359ED741A25C",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 146.7
  }
 ],
 "id": "overlay_A799372C_BF9A_E641_41A9_2D0B79434B8C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 99.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C, this.camera_ED1A97D8_CD14_DD7E_41E6_ED0FD20503F1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877958BF_C0FA_EBBF_41DA_C8719CBA2322",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 99.73
  }
 ],
 "id": "overlay_AAA4FC17_BF99_6A4F_4193_8D81F86BB8E8",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 95.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B, this.camera_EDC36835_CD14_D331_41E1_FC081E2F86AB); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8760A8CE_C0FA_EBC1_41C9_192834FCBEE5",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 95.71
  }
 ],
 "id": "overlay_FD1D285D_C096_AAC3_41DA_5902B8A2EFF3",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 124.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB, this.camera_EDCFA845_CD14_D356_41E8_F2C57484404C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876088CE_C0FA_EBC1_41D3_AF34318DFE26",
   "pitch": 0.45,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 124.6
  }
 ],
 "id": "overlay_FE3878B5_C099_6A43_41C1_C16E4048E387",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.92,
   "yaw": 68.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7, this.camera_EF42C9FA_CD14_D533_41D2_8FA6582030C5); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763F8CE_C0FA_EBC1_41E1_68F03F3049FD",
   "pitch": -15.01,
   "hfov": 24.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 68.05
  }
 ],
 "id": "overlay_F7AA1641_C0B9_A6C3_41CA_6C207B1C185A",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.61,
   "yaw": 94.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88, this.camera_EF4D5A1A_CD14_D6F2_41D4_47339C3870C2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876028CE_C0FA_EBC1_41D8_2F45B428AAA0",
   "pitch": -17.52,
   "hfov": 24.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 94.93
  }
 ],
 "id": "overlay_F8361A35_C0B9_EE43_41C2_D0C0FE2F0400",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.31,
   "yaw": 93.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8, this.camera_EF52B9DB_CD14_D571_41CB_DAC2D89B8DA5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876008CE_C0FA_EBC1_41D4_A7BADD74FB4E",
   "pitch": 8.9,
   "hfov": 16.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 93.29
  }
 ],
 "id": "overlay_FA1DD0F5_C0B9_7BC3_41AC_470541FCAAAF",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.61,
   "yaw": -87.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91, this.camera_ED62D7B8_CD14_DD3F_41B9_834009CDE688); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762B8BF_C0FA_EBBF_41CD_7B9BC44D329F",
   "pitch": 7.9,
   "hfov": 14.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -87.71
  }
 ],
 "id": "overlay_F420A998_C0BA_AA41_41DF_0C9219628297",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.61,
   "yaw": 166.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8, this.camera_ED7647A9_CD14_DDDE_41E1_2E133D0D87C9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762E8CE_C0FA_EBC1_41C2_F8938243DF05",
   "pitch": 7.9,
   "hfov": 14.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 166.02
  }
 ],
 "id": "overlay_F46A62ED_C0BA_FFC3_41A3_43342C8C7228",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.26,
   "yaw": -161.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7, this.camera_ED6E57C8_CD14_DD5E_41B3_4F17FF2EAE46); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8762C8CE_C0FA_EBC1_41E1_E02EDE1AAD4D",
   "pitch": -8.73,
   "hfov": 24.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -161.19
  }
 ],
 "id": "overlay_F48CC603_C0B9_E647_41E4_D553A97B8B08",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.62,
   "yaw": 168.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876338CE_C0FA_EBC1_41CF_D33CDD706B0B",
   "pitch": -15.76,
   "hfov": 23.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 168.66
  }
 ],
 "id": "overlay_F8515435_C0BE_BA43_41DF_98CC0A6EC2DE",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED62A7B8_CD14_DD3F_41B6_105D51B0F4FB",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E83E3C9D_CD14_D3F6_41E6_E97AFDDD4AB4",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EFDB9AF4_CD14_D737_41E6_AC02CFF49BB1",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECF0E6DD_CD14_DF71_41CB_42E2D7A50CE6",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -81.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9, this.camera_E9DC1DC6_CD14_AD52_41E9_6091956CAD7E); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8760F8CE_C0FA_EBC1_41A0_20C3C8F2CBB7",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -81.41
  }
 ],
 "id": "overlay_FDC7AEB3_C09A_E647_41DA_D3F3BF127E8D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E86D9C4C_CD14_D357_41E6_632EFDFA9756",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.89,
   "yaw": -88.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59, this.camera_ED51C77A_CD14_DD32_41B1_4D7FD41B7D3D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877CC8BF_C0FA_EBBF_41B1_C0A2372F10B3",
   "pitch": -29.45,
   "hfov": 12.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -88.94
  }
 ],
 "id": "overlay_EDE12C69_C09B_AAC3_41C5_ADD91AEB57BA",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": -174.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B538B601_BF76_A643_41D8_72216C7D209D, this.camera_ECAAD76A_CD14_DD53_41DD_98DCC3047B21); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D28BF_C0FA_EBBF_41D0_4B6A01BF01AF",
   "pitch": 15.27,
   "hfov": 14.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -174.61
  }
 ],
 "id": "overlay_EE72A10F_C09A_9A5F_41E3_F8B7A9AEA1D4",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 112.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B538B601_BF76_A643_41D8_72216C7D209D, this.camera_ED2B7816_CD14_D2F3_41E4_516E77560B5A); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D58BF_C0FA_EBBF_41B4_F0FEF0EB6780",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 112.79
  }
 ],
 "id": "overlay_F07A5590_C096_9A41_41DB_CA5B77AA953A",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -165.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E, this.camera_EDD60826_CD14_D2D2_41D3_AAB7A8722297); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877DB8BF_C0FA_EBBF_41CE_11B223FF2022",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -165.31
  }
 ],
 "id": "overlay_F0E548F9_C0A9_6BC3_41C9_603E36EB1E56",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECF9B6ED_CD14_DF51_41D3_FAF53DB882AE",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EDE45864_CD14_D357_41E1_5E57F18A8200",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED0637E7_CD14_DD51_41D3_D6BA4CF4A52B",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED3357F7_CD14_DD32_41C4_1F10D8A4FB09",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -48.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A, this.camera_E80F9C8D_CD14_D3D1_41E7_4B13C7C0DB14); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D08BF_C0FA_EBBF_41D5_F812AA486907",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -48.24
  }
 ],
 "id": "overlay_F0D0EFB5_C09F_6643_41B2_AAA44314986E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -144.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8, this.camera_E83E5C9D_CD14_D3F6_41E4_63E333722EA8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D78BF_C0FA_EBBF_41E0_3AB11312E542",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -144.46
  }
 ],
 "id": "overlay_ED791D23_C09E_AA47_41E1_833BA20C8805",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9323D97_CD14_ADF2_41E5_8414348C9BDA",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED9C3883_CD14_D3D1_41D1_57074755E266",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EEF4296E_CD14_D552_41E4_20E612FE8EE5",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -172.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F, this.camera_EC94871C_CD14_DEF7_41CD_7BD26D908C0D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876108CE_C0FA_EBC1_41D3_C76A0AB27F11",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -172.6
  }
 ],
 "id": "overlay_FE95E76E_C09E_A6C1_41D3_F07446B630CB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -80.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8, this.camera_EC83272C_CD14_DED6_41B1_83514373AC46); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876168CE_C0FA_EBC1_41DD_1AA160255C8E",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -80.4
  }
 ],
 "id": "overlay_FF1D1CD9_C09E_EBC3_41B0_D60E590C6E88",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 80.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795, this.camera_EC88373B_CD14_DD31_41E0_A810FBF66175); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876158CE_C0FA_EBC1_41E1_21E9AFA50789",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 80.88
  }
 ],
 "id": "overlay_FF496963_C09E_EAC7_41E1_5966649533C3",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE2A393F_CD14_D531_41E8_9A8FA903CCE8",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECB7674B_CD14_DD52_41D0_363B8B7D826D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EE86398D_CD14_D5D1_41E2_A65858714120",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9221DA6_CD14_ADD3_41D8_D7795756A270",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED1B67D8_CD14_DD7E_41B2_DB716176DC8E",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED6E37C8_CD14_DD5E_41E0_FDC753CC705A",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 162.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E, this.camera_E873DC1D_CD14_D2F1_41D6_680AF0F5A4DA); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8761B8CE_C0FA_EBC1_41DC_E285ABBFBBED",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 162.03
  }
 ],
 "id": "overlay_81778030_C099_9A41_41E0_2DEE2990E0F6",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -17.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633, this.camera_ED3367F7_CD14_DD32_41B7_02CD60334807); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877988BF_C0FA_EBBF_41D8_EFEA85F17EBE",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -17.09
  }
 ],
 "id": "overlay_A711B924_BF9A_EA41_41D2_0C1306130DE5",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 166.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB, this.camera_ED3E4806_CD14_D2D3_41E2_94126F3FCE7A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8779E8BF_C0FA_EBBF_41E4_6734B6A35802",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 166.05
  }
 ],
 "id": "overlay_A651FFAF_BF9A_A65F_41B6_551DACEFA688",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF293AD5_CD14_D771_41C1_4C434B6A4898",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9E95DF5_CD14_AD36_41C3_6952E9B5D2E8",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EDFB7855_CD14_D376_41C5_9E2C6023397D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8500BDF_CD14_D572_41DB_1BD5F7EBAFAF",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EEB0A99D_CD14_D5F6_41DE_0326A5D315CF",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 94.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59, this.camera_EF391AB6_CD14_D733_41E4_EAED59C62EB7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F88BF_C0FA_EBBF_41D7_BE50C70DB2FE",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 94.2
  }
 ],
 "id": "overlay_982FCA35_BF6B_AE43_41E5_8B3752386277",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 58.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877FE8BF_C0FA_EBBF_41E4_9FF3AB1F77AA",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 58.52
  }
 ],
 "id": "overlay_97DED0F1_BF6B_9BC3_4185_53FEBACEF0A8",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -125.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB, this.camera_EF294AD5_CD14_D771_41CD_253A2A5369CD); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877FC8BF_C0FA_EBBF_41D6_2038C7E89489",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -125.38
  }
 ],
 "id": "overlay_9C07F111_BF6B_7A43_41E1_525165B5A2A8",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 1.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633, this.camera_EF1EBA77_CD14_D731_41E8_E0FA9CF1BCF3); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8779C8BF_C0FA_EBBF_41DD_D77867C86E0A",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 1.75
  }
 ],
 "id": "overlay_9C8C7C56_BFAA_AAC1_41E3_47A1B2984958",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -101.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17, this.camera_EF0F7A97_CD14_D7F2_41E0_5D12F9C095B5); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E38BF_C0FA_EBBF_41E0_A40B00BADAAC",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -101.25
  }
 ],
 "id": "overlay_A14C6A53_BFAA_AEC7_41E2_EC581E51DD55",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED3E2806_CD14_D2D3_41D0_DBEE9BF02258",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 4.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0, this.camera_EC078EDF_CD14_AF71_41C6_75D0EE792517); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876068CE_C0FA_EBC1_41D4_7C82C45165E1",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 4.01
  }
 ],
 "id": "overlay_AF3E70B8_BFEB_9A41_41D3_257741331F10",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -121.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F, this.camera_EC03CECF_CD14_AF51_41BF_D4290186FAC8); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876058CE_C0FA_EBC1_41E1_19417E8301C4",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -121.35
  }
 ],
 "id": "overlay_AF732C9D_BFFE_AA43_41CD_CC2E833E532C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.81,
   "yaw": -55.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410, this.camera_EC0B3EEF_CD14_AF52_41E0_0F0735867EB6); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876338CE_C0FA_EBC1_41E7_7DEBC633DD9A",
   "pitch": 17.69,
   "hfov": 13.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -55.68
  }
 ],
 "id": "overlay_AE00C77E_BFFB_E6C1_41D5_58A64CF354DB",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8856D0A_CD14_D2D3_41E8_AB2E4CFDCBB3",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 20.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876198CE_C0FA_EBC1_41CA_BA13E2E01D79",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 20.34
  }
 ],
 "id": "overlay_818203B6_C09A_FE41_41E2_2873904CFFE2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -87.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5, this.camera_ED8BA893_CD14_D3F1_41E6_FE34B374372B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8761F8CE_C0FA_EBC1_41E2_8508C83B3E7F",
   "pitch": 0.95,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -87.94
  }
 ],
 "id": "overlay_81ED0EC2_C09A_E7C1_41B7_276B800FCCF9",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.12,
   "yaw": 128.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B, this.camera_ED9C4883_CD14_D3D1_419E_AEBB53FE052F); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876058CE_C0FA_EBC1_41E4_6996A207E9E5",
   "pitch": 7.14,
   "hfov": 21.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 128.34
  }
 ],
 "id": "overlay_842E64E4_C09A_BBC1_4141_0F36EAF2DBB0",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -36.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE, this.camera_E81C4C6E_CD14_D353_41DF_08E87EC00768); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763A8CE_C0FA_EBC1_41DE_BE7E3B192ED8",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -36.94
  }
 ],
 "id": "overlay_F8B0AD8A_C0AB_6A41_41D5_1D8EA56AFA67",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.85,
   "yaw": 48.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91, this.camera_E8D8BCBC_CD14_D337_41D0_4E454FC7869A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877DE8BF_C0FA_EBBF_41D3_B69ADA3C9B79",
   "pitch": 8.4,
   "hfov": 12.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 48.57
  }
 ],
 "id": "overlay_F1A9FF92_C0AE_E641_41DB_49106484314B",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.09,
   "yaw": 143.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29, this.camera_E8C8FCCC_CD14_D356_41E5_5ACE0A23B9B0); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877DC8BF_C0FA_EBBF_415E_DA512C244F86",
   "pitch": -22.55,
   "hfov": 17.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 143.28
  }
 ],
 "id": "overlay_F219EA1D_C0AB_EE43_41D3_0088037B9BFE",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.93,
   "yaw": 178.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C, this.camera_E8F8FCDB_CD14_D371_41C2_440D612033D0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876228BF_C0FA_EBBF_41C2_E27F045A409C",
   "pitch": -14.26,
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 178.45
  }
 ],
 "id": "overlay_F2799998_C0AB_AA41_41DC_C441E1C410FB",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.97,
   "yaw": -157.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832, this.camera_E82E2CAC_CD14_D3D7_4190_7D7A82A7DCD8); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876208BF_C0FA_EBBF_41CA_3F6D9CBDCF80",
   "pitch": -13.75,
   "hfov": 17.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -157.44
  }
 ],
 "id": "overlay_F2D93FC5_C0AB_65C3_41D4_575B085770A9",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ED4B2799_CD14_DDF1_41DF_863FDD109A0D",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9106D78_CD14_AD3E_41B5_F93DCD880C24",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9992E04_CD14_AED7_41B2_125CCB02C5C6",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.83,
   "yaw": -162.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B, this.camera_EED5994F_CD14_D552_41E3_FAFA2AC2B646); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876278BF_C0FA_EBBF_41C9_033EDA5AE628",
   "pitch": 8.52,
   "hfov": 14.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -162.45
  }
 ],
 "id": "overlay_F2EF3326_C0B7_BE4E_41CC_E65421B5A9C9",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.83,
   "yaw": 70.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556EF04_BF69_6641_41CA_11E06106904E, this.camera_EE2A293F_CD14_D531_41BF_92201E0392E1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876258BF_C0FA_EBBF_41DD_54C29EB2E940",
   "pitch": 8.52,
   "hfov": 14.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 70.18
  }
 ],
 "id": "overlay_F3780D72_C0B7_EAC1_41E6_5B5341D9081E",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8A7FD29_CD14_D2D1_41E4_4308A4BEC48D",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -167.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F, this.camera_E903CD87_CD14_ADD1_41A0_7CAAC0CD2A67); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876118CE_C0FA_EBC1_41B7_CDDB6B40A743",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -167.07
  }
 ],
 "id": "overlay_838AAB57_C0E9_6ECF_41E2_C45E6E50C8EC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.31,
   "yaw": -66.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B, this.camera_E9139D78_CD14_AD3E_41E4_366328FD354D); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876178CE_C0FA_EBC1_41A7_800742EF8DA8",
   "pitch": 8.52,
   "hfov": 19.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -66.48
  }
 ],
 "id": "overlay_8445E331_C0EE_BE43_41C2_CC1C0790A413",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.31,
   "yaw": 70.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410, this.camera_E9322D97_CD14_ADF2_41C5_883541DCE153); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8761A8CE_C0FA_EBC1_418D_BD7D10DD54AA",
   "pitch": 8.52,
   "hfov": 19.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 70.93
  }
 ],
 "id": "overlay_84F3FC35_C0EE_EA43_41DB_AAE8E9A18E8B",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EF39EAB6_CD14_D733_41E5_84E1D2CC8C83",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": -9.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A, this.camera_EDB4C8A3_CD14_D3D2_41E5_DA39AC057DD2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D98BF_C0FA_EBBF_41D5_E592763B524C",
   "pitch": -4.58,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -9.81
  }
 ],
 "id": "overlay_93FD2C4A_BF6B_6AC1_41D7_5496F2B4D665",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.77,
   "yaw": 31.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC, this.camera_EE5F98D2_CD14_D372_41D4_95AC1F3438B8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877DF8BF_C0FA_EBBF_41E3_7AA15408CFA4",
   "pitch": -3.82,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 31.64
  }
 ],
 "id": "overlay_936CE0DC_BF6A_9BC1_41BB_A0508F3629B5",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.73,
   "yaw": -126.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5, this.camera_EDADE8C2_CD14_D353_41CC_031D30A28681); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876228BF_C0FA_EBBF_41E4_C02C5B8C3720",
   "pitch": -5.57,
   "hfov": 14.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -126.63
  }
 ],
 "id": "overlay_93258E4D_BF6A_A6C3_41B2_187FB4C42F6E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -176.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1, this.camera_EDA398B2_CD14_D333_41D5_7E7BF8381CB6); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877CB8BF_C0FA_EBBF_41E4_687895093E40",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -176.1
  }
 ],
 "id": "overlay_92BB228F_BF6A_9E5F_41E6_EC8BDA62A535",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": 94.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8, this.camera_EE86298D_CD14_D5D1_4181_523B385CE10C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D28BF_C0FA_EBBF_41E6_18D89DF30434",
   "pitch": 9.4,
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 94.42
  }
 ],
 "id": "overlay_9727293A_BF69_AA41_41E7_66B8A9814CE6",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": -91.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE, this.camera_EEB0C99D_CD14_D5F6_41E3_F1E76AB7B2F1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D08BF_C0FA_EBBF_41E0_2865FEF31B40",
   "pitch": 9.4,
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -91.23
  }
 ],
 "id": "overlay_9689F7BE_BF69_E641_41E7_89B248AF7671",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 18.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7, this.camera_EEA0F9AC_CD14_D5D7_41E9_6A72E1E0940C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D68BF_C0FA_EBBF_41BC_A0DE80EC7FB5",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 18.83
  }
 ],
 "id": "overlay_9811F8BE_BF69_6A41_41E2_5127D495E759",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9575D39_CD14_AD31_41D2_BB4279B9CA61",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -19.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01, this.camera_E8502BDF_CD14_D572_41C7_79AA8128D270); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E58BF_C0FA_EBBF_418D_C029CD3F6D1C",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -19.35
  }
 ],
 "id": "overlay_A291BD28_BFAA_EA41_41E1_626F00069D45",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -103.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680, this.camera_EFA18BC0_CD14_D54E_41C3_87F14918A26F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E88BF_C0FA_EBBF_41E7_F99997E37A5F",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -103.76
  }
 ],
 "id": "overlay_A20F1EAC_BFAA_A641_41C1_03E508284BCC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 103.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633, this.camera_EFB18BA0_CD14_D5CF_41CF_531845C5FB02); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877EE8BF_C0FA_EBBF_41E6_7BFA21E4BE01",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 103.49
  }
 ],
 "id": "overlay_A1E2D428_BFAA_9A41_41D0_DA77A927ACFB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9719D58_CD14_AD7F_41C3_17D30035D0F3",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EFCBCB04_CD14_D6D7_4189_2D015BD2C2CC",
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E8D88CBC_CD14_D337_41B5_4A2672ABC1AC",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": 50.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21, this.camera_ECEFC70C_CD14_DED7_41C6_1FCB29C008B7); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8760C8CE_C0FA_EBC1_41D3_7B1245275BBA",
   "pitch": -4.32,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 50.74
  }
 ],
 "id": "overlay_82D51663_C0EA_E6C7_41E6_4E1FDB5B660B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -96.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876138CE_C0FA_EBC1_41E2_8A0ECD8B973C",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -96.73
  }
 ],
 "id": "overlay_8379A8C3_C0EA_ABC7_41E2_8084AC9A4608",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_E9FE8DE5_CD14_AD51_41D6_3D06BD36ABD6",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 129.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB, this.camera_E8A70D29_CD14_D2D1_41D2_482CA27EFA80); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876038CE_C0FA_EBC1_41DC_49C701571E58",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 129.87
  }
 ],
 "id": "overlay_FEF8A56C_C0AA_9AC1_41AD_0C8987932E33",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 94.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9, this.camera_E8B49D1A_CD14_D2F2_41DA_1B8B3D0231A0); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876018CE_C0FA_EBC1_41DC_04EFD809E5AF",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 94.95
  }
 ],
 "id": "overlay_FF435634_C0AA_A641_41AD_48A8751AB868",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 87.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556E784_BF69_6641_41AC_F82C3AC4145B, this.camera_EDFB6855_CD14_D376_41B7_26A6F47A7681); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877858AF_C0FA_EA5F_41C3_1F1302C72E7A",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 87.42
  }
 ],
 "id": "overlay_ACD4F74C_BFE9_A6C1_41E4_114DBBF6153D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 21.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877888AF_C0FA_EA5F_41D7_A06BD5F43ED8",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 21.6
  }
 ],
 "id": "overlay_ABA66378_BFE9_FEC1_41B9_B76F78F9252E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -93.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA, this.camera_EDE44864_CD14_D357_41E2_D5411E6A256B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8778E8BF_C0FA_EBBF_41DA_67194688D82D",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -93.97
  }
 ],
 "id": "overlay_ABCD9841_BFE9_AAC3_4164_7A26506EB686",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -139.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21, this.camera_ED93E874_CD14_D336_41E2_2337FD192864); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8778C8BF_C0FA_EBBF_41D2_492896A22835",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -139.69
  }
 ],
 "id": "overlay_AB5A10E4_BFE9_9BC1_41E4_F4749DB4586A",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.5,
   "yaw": -140.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7, this.camera_E971BD58_CD14_AD7F_41C8_76426D8BD6A3); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876348CE_C0FA_EBC1_41E7_4E3A13B5A6F8",
   "pitch": -24.05,
   "hfov": 21.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -140.09
  }
 ],
 "id": "overlay_F655FA7B_C0BE_AEC7_41D1_1A6D0BA340D6",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.64,
   "yaw": 135.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE, this.camera_E9574D39_CD14_AD31_41D8_356DA3A4676A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8763A8CE_C0FA_EBC1_41E2_836A54C15941",
   "pitch": 6.64,
   "hfov": 19.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 135.37
  }
 ],
 "id": "overlay_F824C5B7_C0BA_FA4F_41D0_C2A573D15DFE",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.64,
   "yaw": -55.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556EF04_BF69_6641_41CA_11E06106904E, this.camera_E941FD49_CD14_AD5E_41E5_4FDB520C0AA9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_876388CE_C0FA_EBC1_41E0_37DE1FE9CF39",
   "pitch": 6.64,
   "hfov": 19.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -55.05
  }
 ],
 "id": "overlay_F69CAEEA_C0BA_A7C1_41C1_11E1A1DD8064",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.76,
   "yaw": 150.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556081E_BF76_AA41_41E7_0E9695031B88, this.camera_E9605D68_CD14_AD5F_41E8_DFE2F8EDC4A3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9A758558_C1AA_9AC1_41DC_5D011980A3C3",
   "pitch": -31.59,
   "hfov": 15.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 150.06
  }
 ],
 "id": "overlay_953F10DE_C1A9_9BC1_41D1_2E8A7678FF4A",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -81.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7, this.camera_E87D9C3D_CD14_D336_41E1_240E2F8C7CE7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877D48BF_C0FA_EBBF_41C4_A87B6B797055",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -81.15
  }
 ],
 "id": "overlay_96684F94_BF69_E641_41E7_170B408F2BE0",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 39.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59, this.camera_E86DBC4C_CD14_D357_41C5_0DE50DE2FBCA); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877DB8BF_C0FA_EBBF_41BF_78A21EDBF497",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 39.68
  }
 ],
 "id": "overlay_95EFFC46_BF69_EAC1_41AF_7261227D908E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 62.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01, this.camera_EE96E97D_CD14_D531_41B0_5994632B5589); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F38BF_C0FA_EBBF_41B9_66598B14A30A",
   "pitch": -1.31,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 62.04
  }
 ],
 "id": "overlay_9E1D6498_BF9E_BA41_41E6_3C02DFB1ECA3",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 90.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1, this.camera_EEF4596E_CD14_D552_41E0_81BD96294D3C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F18BF_C0FA_EBBF_41E0_F39CA4B8ED62",
   "pitch": -0.81,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 90.43
  }
 ],
 "id": "overlay_9D69FD14_BF99_6A41_41AD_4212F3007022",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -164.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9, this.camera_EEC4195E_CD14_D573_41BA_96270A89F7A8); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F78BF_C0FA_EBBF_41B0_998D9CA5FD26",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -164.81
  }
 ],
 "id": "overlay_9D3B9E80_BF99_6641_41D7_C03A6CF3B7BA",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 7.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE, this.camera_EEE7B96E_CD14_D552_41B4_C2304E47B766); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877F58BF_C0FA_EBBF_41D6_52D2C7A2658D",
   "pitch": -1.56,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.53
  }
 ],
 "id": "overlay_9EC0547E_BF99_FAC1_41DB_5AA990B06C2B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_EC046EDF_CD14_AF71_41D6_2CCD459148F6",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.51,
   "yaw": 121.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E58BF_C0FA_EBBF_41DD_ADBEA2CFDF24",
   "pitch": -22.84,
   "hfov": 17.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 121.67
  }
 ],
 "id": "overlay_9F15CBF0_BF99_6DC1_41E0_7CFA1E9ED35D",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.68,
   "yaw": -71.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549, this.camera_E89ACCFB_CD14_D332_41E4_6C0D20BB3FFC); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E88BF_C0FA_EBBF_41D0_7A9E8B6F83AB",
   "pitch": -28.62,
   "hfov": 16.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -71.02
  }
 ],
 "id": "overlay_9E71C687_BF99_A64F_41D9_16DF26918805",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.95,
   "yaw": 21.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832, this.camera_E8EB6CEB_CD14_D351_41C2_C78B0BFB0193); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877EE8BF_C0FA_EBBF_41A9_671BB440A8AE",
   "pitch": -26.86,
   "hfov": 16.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 21.18
  }
 ],
 "id": "overlay_9F75C933_BF99_AA47_41DA_4174E01E9705",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.61,
   "yaw": -175.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0, this.camera_E8848D0A_CD14_D2D3_41E7_CBAB11C457FC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877EC8BF_C0FA_EBBF_41E5_9126FAA4E568",
   "pitch": -22.09,
   "hfov": 17.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -175.77
  }
 ],
 "id": "overlay_9E65B482_BF9A_BA41_41A3_FE3F4F6DD98B",
 "data": {
  "label": "Circle 03a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 295,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear"
  },
  {
   "yawSpeed": 7.96,
   "yawDelta": 32.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_ECBCE75A_CD14_DD73_41C6_2ADFCBC4DD17",
 "class": "PanoramaCameraSequence"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 63.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8779C8BF_C0FA_EBBF_41D1_8A34619DC256",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 63.05
  }
 ],
 "id": "overlay_A717F258_BFAA_FEC1_41E3_C63807A31E77",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 176.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555B540_BF76_FAC1_41DB_B917F5012F01, this.camera_ECE1D6FD_CD14_DF36_41E9_85B38FAFB0A3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E28BF_C0FA_EBBF_41B7_CF38DD183015",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 176.1
  }
 ],
 "id": "overlay_A6B1F373_BFAA_BEC7_41E5_EB29263981F2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -59.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70, this.camera_ECF036DD_CD14_DF71_41D1_30AB3BB24C97); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E18BF_C0FA_EBBF_41DC_14954690606B",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -59.05
  }
 ],
 "id": "overlay_A5DADA4E_BFAB_6EC1_41BC_E3F9BDAB6E51",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -6.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5556833_BF77_AA47_41E3_0C8BCE333195, this.camera_ECF9D6ED_CD14_DF51_41DC_0B2FC5692B0D); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877E78BF_C0FA_EBBF_41E4_CB0F017E26A9",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -6.04
  }
 ],
 "id": "overlay_A4DCAE65_BFAB_A6C3_41E2_328FEA05D5B5",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.03,
   "yaw": -117.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410, this.camera_EFF59B23_CD14_D6D1_41E3_03DA37A9BF12); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877B78AF_C0FA_EA5F_41E4_92A552FD3551",
   "pitch": 18.57,
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -117.11
  }
 ],
 "id": "overlay_AE455DF3_BFF9_A5C7_41E7_6864A485514B",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -171.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B40692D8_BF79_9FC1_41D4_A4832E641549, this.camera_EFE5CB43_CD14_D552_41D3_20D29885A08D); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877828AF_C0FA_EA5F_41E3_7F74F141F54B",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -171.09
  }
 ],
 "id": "overlay_AC38414D_BFF7_BAC3_41E3_88BFD3FFD0B7",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 76.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17, this.camera_EFCB1B04_CD14_D6D7_41B2_7682AF7D4C0F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877818AF_C0FA_EA5F_41E0_CAC42765F9D1",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 76.86
  }
 ],
 "id": "overlay_ADDF7C5B_BFF6_AAC7_41C1_F2F876859343",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": -22.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA, this.camera_EFDBBAF4_CD14_D737_41E5_53479F5ABA8A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877878AF_C0FA_EA5F_41E4_02420BA27605",
   "pitch": -1.06,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -22.87
  }
 ],
 "id": "overlay_AC282F90_BFE9_A641_41B7_743BA5689D4B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498E74F4_545B_B067_41CC_63589B8419E3",
 "left": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_498C54F0_545B_B07F_41AD_BD74D9355024",
  "this.IconButton_498E64F4_545B_B067_41C8_E0221EDD8242"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "top": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 78,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "top": 86,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 46,
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "blue block"
 },
 "shadowBlurRadius": 7,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "verticalAlign": "top",
 "height": 75,
 "minWidth": 1,
 "fontSize": 61,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "width": 385,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "minHeight": 1,
 "propagateClick": true,
 "top": 90,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "textShadowHorizontalLength": 0,
 "height": 44,
 "minWidth": 1,
 "fontSize": 29,
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E63C913_57DF_81FB_41B3_4FCBC143F4CB",
 "left": "15%",
 "children": [
  "this.Container_6E63B913_57DF_81FB_4140_DE29A26883D1",
  "this.Container_6E639913_57DF_81FB_41C0_78531DDF94D0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "shadowHorizontalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E640913_57DF_81FB_41AB_7A46A483589F",
 "left": "15%",
 "children": [
  "this.IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 970,
 "maxWidth": 1236,
 "id": "Image_D3F67751_CB14_BD71_41E4_1F46184315E4",
 "backgroundOpacity": 0,
 "width": 283,
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_D3F67751_CB14_BD71_41E4_1F46184315E4.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "height": 167,
 "minWidth": 1,
 "click": "this.openLink('https://upinfinitus.com/', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image17679"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1874182_BFBB_BA41_41E4_A47DA3A9D4B9_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876048CE_C0FA_EBC1_41E2_C2086C5C02DA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876388CE_C0FA_EBC1_41D5_50622A1E60BC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8763E8CE_C0FA_EBC1_41D8_72F1E4AF47EE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18F79D6_BFBB_EDC1_41DF_FE8419FC8CA5_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8763D8CE_C0FA_EBC1_41CF_D261EDCD13B2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18F6506_BFBB_7A41_41C3_87BD28032A3F_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876128CE_C0FA_EBC1_41D1_FC30FD0DB380",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877EC8BF_C0FA_EBBF_41DB_6BFDB32EA4FA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555A476_BF76_9AC1_41D3_3824AB1C2680_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F28BF_C0FA_EBBF_41E0_0E1431E5DD54",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F18BF_C0FA_EBBF_41D8_6C0B044906D2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555ACB8_BF77_6A41_41C8_EDD77F367A01_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F78BF_C0FA_EBBF_41E6_7AF6A47C0A47",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876318CE_C0FA_EBC1_41D7_9CF716FC0CF2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B0C061BF_BFBB_9DBF_41E0_F874A4AF50BE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876348CE_C0FA_EBC1_41E0_6BE4342C2348",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E18BF_C0FA_EBBF_41BA_08CB992E5834",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556ACC2_BF77_EBC1_41B8_D92BE0FBEA17_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E78BF_C0FA_EBBF_41CA_F013A38154CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876188CE_C0FA_EBC1_41D7_A38C07B89EC7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1AB4E2E_BFBA_A641_41D7_E0D3BCF3236F_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876778CE_C0FA_EBC1_41E4_2F9E84ECEB10",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877C18BF_C0FA_EBBF_41D6_978624B292F6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877C78BF_C0FA_EBBF_41B9_799DFD58DC6C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_877CB8BF_C0FA_EBBF_41CB_F184CFA47117",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_877C98BF_C0FA_EBBF_41BB_239AC25D690D",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 30,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5561C52_BF76_AAC1_4195_E96D1E5B0CE7_1_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_877CF8BF_C0FA_EBBF_41E5_50780E6B92CC",
 "rowCount": 6,
 "colCount": 5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8760B8CE_C0FA_EBC1_41E7_F32F9178A57B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1D096EB_BFBA_E7C6_41D9_C6F00FC03E21_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876098CE_C0FA_EBC1_41E7_BD58E52652E0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877928BF_C0FA_EBBF_41E3_3DD25E112A85",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877918BF_C0FA_EBBF_41D9_BC0C3D80793E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877978BF_C0FA_EBBF_41E6_359ED741A25C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B910_BF76_EA42_41DD_C5FEE5ABC7BA_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877958BF_C0FA_EBBF_41DA_C8719CBA2322",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8760A8CE_C0FA_EBC1_41C9_192834FCBEE5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1854D31_BFBB_AA43_41E0_0A9F2A52C5C9_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876088CE_C0FA_EBC1_41D3_AF34318DFE26",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8763F8CE_C0FA_EBC1_41E1_68F03F3049FD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_876028CE_C0FA_EBC1_41D8_2F45B428AAA0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563665_BF69_A6C3_41E7_101373EAF7EE_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876008CE_C0FA_EBC1_41D4_A7BADD74FB4E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_8762B8BF_C0FA_EBBF_41CD_7B9BC44D329F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_8762E8CE_C0FA_EBC1_41C2_F8938243DF05",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8762C8CE_C0FA_EBC1_41E1_E02EDE1AAD4D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556EF04_BF69_6641_41CA_11E06106904E_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_876338CE_C0FA_EBC1_41CF_D33CDD706B0B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B181E987_BFBB_6A4F_41A1_36A4AF39744B_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8760F8CE_C0FA_EBC1_41A0_20C3C8F2CBB7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877CC8BF_C0FA_EBBF_41B1_C0A2372F10B3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5567AC6_BF76_EFC1_41CC_7CDE1B67444A_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D28BF_C0FA_EBBF_41D0_4B6A01BF01AF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D58BF_C0FA_EBBF_41B4_F0FEF0EB6780",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5398107_BF76_BA4F_41D2_09220FDE6CF8_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877DB8BF_C0FA_EBBF_41CE_11B223FF2022",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D08BF_C0FA_EBBF_41D5_F812AA486907",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B538B601_BF76_A643_41D8_72216C7D209D_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D78BF_C0FA_EBBF_41E0_3AB11312E542",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876108CE_C0FA_EBC1_41D3_C76A0AB27F11",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876168CE_C0FA_EBC1_41DD_1AA160255C8E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1BEB132_BFBA_9A41_41D8_6E090B1E5C3E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876158CE_C0FA_EBC1_41E1_21E9AFA50789",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1BD8D1E_BFBA_AA41_41DF_3E50888A0795_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8761B8CE_C0FA_EBC1_41DC_E285ABBFBBED",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877988BF_C0FA_EBBF_41D8_EFEA85F17EBE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555B540_BF76_FAC1_41DB_B917F5012F01_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8779E8BF_C0FA_EBBF_41E4_6734B6A35802",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F88BF_C0FA_EBBF_41D7_BE50C70DB2FE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877FE8BF_C0FA_EBBF_41E4_9FF3AB1F77AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B557C0C9_BF76_9BC3_41E3_156E6AB44BC1_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877FC8BF_C0FA_EBBF_41D6_2038C7E89489",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8779C8BF_C0FA_EBBF_41DD_D77867C86E0A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5556833_BF77_AA47_41E3_0C8BCE333195_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E38BF_C0FA_EBBF_41E0_A40B00BADAAC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876068CE_C0FA_EBC1_41D4_7C82C45165E1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876058CE_C0FA_EBC1_41E1_19417E8301C4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B40692D8_BF79_9FC1_41D4_A4832E641549_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876338CE_C0FA_EBC1_41E7_7DEBC633DD9A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876198CE_C0FA_EBC1_41CA_BA13E2E01D79",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8761F8CE_C0FA_EBC1_41E2_8508C83B3E7F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1885A33_BFBA_AE47_41D8_A5FB9F2D1E29_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876058CE_C0FA_EBC1_41E4_6996A207E9E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18F9D93_BFBB_EA47_41C7_0F471F68196E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8763A8CE_C0FA_EBC1_41DE_BE7E3B192ED8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_877DE8BF_C0FA_EBBF_41D3_B69ADA3C9B79",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_877DC8BF_C0FA_EBBF_415E_DA512C244F86",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_876228BF_C0FA_EBBF_41C2_E27F045A409C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556E784_BF69_6641_41AC_F82C3AC4145B_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_876208BF_C0FA_EBBF_41CA_3F6D9CBDCF80",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876278BF_C0FA_EBBF_41C9_033EDA5AE628",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556034D_BF69_7EC3_41E7_E2A077F28C91_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876258BF_C0FA_EBBF_41DD_54C29EB2E940",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876118CE_C0FA_EBC1_41B7_CDDB6B40A743",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876178CE_C0FA_EBC1_41A7_800742EF8DA8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B1C4C0F0_BFBA_9BC1_41E7_DEC5FB3D1832_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_8761A8CE_C0FA_EBC1_418D_BD7D10DD54AA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D98BF_C0FA_EBBF_41D5_E592763B524C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877DF8BF_C0FA_EBBF_41E3_7AA15408CFA4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876228BF_C0FA_EBBF_41E4_C02C5B8C3720",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B546DFA1_BF76_E643_41D8_148B8CBA9C59_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877CB8BF_C0FA_EBBF_41E4_687895093E40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_877D28BF_C0FA_EBBF_41E6_18D89DF30434",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_877D08BF_C0FA_EBBF_41E0_2865FEF31B40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556081E_BF76_AA41_41E7_0E9695031B88_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D68BF_C0FA_EBBF_41BC_A0DE80EC7FB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E58BF_C0FA_EBBF_418D_C029CD3F6D1C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E88BF_C0FA_EBBF_41E7_F99997E37A5F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555985A_BF76_AAC1_41E6_F90816F8AD70_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877EE8BF_C0FA_EBBF_41E6_7BFA21E4BE01",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8760C8CE_C0FA_EBC1_41D3_7B1245275BBA",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18E9366_BFBA_FEC1_41DA_86AB6A87E9DF_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876138CE_C0FA_EBC1_41E2_8A0ECD8B973C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876038CE_C0FA_EBC1_41DC_49C701571E58",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B18FC609_BFBB_A643_41C4_1BF81B108ADE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_876018CE_C0FA_EBC1_41DC_04EFD809E5AF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877858AF_C0FA_EA5F_41C3_1F1302C72E7A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877888AF_C0FA_EA5F_41D7_A06BD5F43ED8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8778E8BF_C0FA_EBBF_41DA_67194688D82D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5554064_BF76_BAC1_41C6_FC7987D2A81C_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8778C8BF_C0FA_EBBF_41D2_492896A22835",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_876348CE_C0FA_EBC1_41E7_4E3A13B5A6F8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_8763A8CE_C0FA_EBC1_41E2_836A54C15941",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_1_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_876388CE_C0FA_EBC1_41E0_37DE1FE9CF39",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5563A6E_BF69_AEC1_41D4_F0A20F83ABC8_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_9A758558_C1AA_9AC1_41DC_5D011980A3C3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877D48BF_C0FA_EBBF_41C4_A87B6B797055",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5560436_BF76_9A41_41D4_ED046A71BDAC_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877DB8BF_C0FA_EBBF_41BF_78A21EDBF497",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F38BF_C0FA_EBBF_41B9_66598B14A30A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F18BF_C0FA_EBBF_41E0_F39CA4B8ED62",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F78BF_C0FA_EBBF_41B0_998D9CA5FD26",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5566926_BF77_6A41_41E0_2E6A76EF49DB_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877F58BF_C0FA_EBBF_41D6_52D2C7A2658D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_877E58BF_C0FA_EBBF_41DD_ADBEA2CFDF24",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_877E88BF_C0FA_EBBF_41D0_7A9E8B6F83AB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_877EE8BF_C0FA_EBBF_41A9_671BB440A8AE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B556B0CC_BF77_BBC1_41E3_9D019414C410_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_877EC8BF_C0FA_EBBF_41E5_9126FAA4E568",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_8779C8BF_C0FA_EBBF_41D1_8A34619DC256",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E28BF_C0FA_EBBF_41B7_CF38DD183015",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E18BF_C0FA_EBBF_41DC_14954690606B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B555E0FB_BF76_9BC7_41DB_C3B2AB3E3633_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877E78BF_C0FA_EBBF_41E4_CB0F017E26A9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_877B78AF_C0FA_EA5F_41E4_92A552FD3551",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877828AF_C0FA_EA5F_41E3_7F74F141F54B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877818AF_C0FA_EA5F_41E0_CAC42765F9D1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B55573DF_BF76_9DFF_41E4_07F8229D00B0_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_877878AF_C0FA_EA5F_41E4_02420BA27605",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 30,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.2,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container blue"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498C54F0_545B_B07F_41AD_BD74D9355024",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.2,
 "overflow": "scroll",
 "children": [
  "this.Container_D3472341_CB14_754E_41DB_265BDB1692E9",
  "this.Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
  "this.Container_498D74F4_545B_B067_41D3_9F91485C184B"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Buttons set"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 40,
 "id": "IconButton_498E64F4_545B_B067_41C8_E0221EDD8242",
 "left": 280,
 "maxHeight": 40,
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter('https://upinfinitus.com/tour/stargoldhotel')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook('https://upinfinitus.com/tour/stargoldhotel')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemLabelGap": 7,
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E63B913_57DF_81FB_4140_DE29A26883D1",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_6E63A913_57DF_81FB_41BC_B86096336E5C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_6E639913_57DF_81FB_41C0_78531DDF94D0",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_6E638913_57DF_81FB_41BC_06F02A7D7EF7",
  "this.Container_6E647913_57DF_81FB_41BD_582A8B4B2793",
  "this.Container_6E641913_57DF_81FB_41C9_2B69E82BC251"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_D3472341_CB14_754E_41DB_265BDB1692E9",
 "left": "0%",
 "children": [
  "this.Image_D998129A_CB1C_D7F2_41C6_8C79A64E3087"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.07%",
 "height": "24.192%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container19388"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.15,
 "id": "Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
 "left": "0%",
 "children": [
  "this.Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
  "this.Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
  "this.Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
  "this.Container_498DE4F0_545B_B07F_41C0_1B7EF8986CF6",
  "this.Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
  "this.Container_D8071C63_CB0C_7351_41C0_89B32D6DF3CB",
  "this.Button_498ED4F3_545B_B061_41A5_94E9C4493623",
  "this.Container_498D04F1_545B_B061_41D3_D5902B4681A6",
  "this.Container_498C14F1_545B_B061_41C8_E3BA647331FB",
  "this.Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
  "this.Container_498DF4F1_545B_B061_41C9_7FD80E72AE4D",
  "this.Container_498D34F2_545B_B063_41CE_EF1298571ABE",
  "this.Button_498D04F2_545B_B063_41CA_0925CE4010D5",
  "this.Container_498EE4F2_545B_B063_41CC_AAA0CAD20379",
  "this.Container_498EF4F2_545B_B063_41CC_405F62610B94",
  "this.Button_498E34F2_545B_B063_41C6_44A1C5C4635E",
  "this.Container_498E14F2_545B_B063_41BB_494D2838A4CD",
  "this.Container_498EA4F3_545B_B061_41C1_2FA3B75745E0",
  "this.Container_498EB4F3_545B_B061_41AD_F46F3D463910",
  "this.Button_D99B4F1F_CB0C_EEF1_41D5_22A45E16FBDA",
  "this.Container_D87529B1_CB0C_D531_41D9_9937661E25B1",
  "this.Button_D8DA88B5_CB35_F336_41CE_AA7EC57FD1ED",
  "this.Container_D895817F_CB35_B532_41C3_0AA9DA1D0C41"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "29.21%",
 "bottom": "12.93%",
 "scrollBarWidth": 6,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D74F4_545B_B067_41D3_9F91485C184B",
 "left": "0%",
 "children": [
  "this.Container_498D44F4_545B_B067_41D4_A2F9D126AD50",
  "this.HTMLText_498D54F4_545B_B067_41D1_C6FF626B4D08",
  "this.Container_498D24F4_545B_B067_41D3_1E56603A1693",
  "this.Container_498EC4F4_545B_B067_41D4_A0AFD617DEA5"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 95,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_6E63A913_57DF_81FB_41BC_B86096336E5C",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_6E63A913_57DF_81FB_41BC_B86096336E5C.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E638913_57DF_81FB_41BC_06F02A7D7EF7",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_6E647913_57DF_81FB_41BD_582A8B4B2793",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_6E646913_57DF_81FB_4164_71AB73EE8EC3",
  "this.Container_6E644913_57DF_81FB_41C4_A4AB18133F07"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E641913_57DF_81FB_41C9_2B69E82BC251",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 318,
 "maxWidth": 318,
 "id": "Image_D998129A_CB1C_D7F2_41C6_8C79A64E3087",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_D998129A_CB1C_D7F2_41C6_8C79A64E3087.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.openLink('https://goo.gl/maps/DP24bpTCSjw24JGc7', '_blank')",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4885"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "RECEP\u00c7\u00c3O",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 1 - Reception"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498DE4F0_545B_B07F_41C0_1B7EF8986CF6",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498DF4F0_545B_B07F_41D4_917BE5032F87",
  "this.Container_498DC4F0_545B_B07F_41B3_A86CCF02E897",
  "this.Button_498DD4F0_545B_B07F_419E_ACC18519E38E",
  "this.Button_498DA4F0_545B_B07F_41D0_7F211635EE26",
  "this.Button_498DB4F0_545B_B07F_41CF_F6102DC1041C",
  "this.Button_498D84F0_545B_B07F_41D1_706A37015AAC",
  "this.Button_498D94F1_545B_B061_41D3_E40406F43CEB",
  "this.Button_498D64F1_545B_B061_41D1_301A7BCC34EB",
  "this.Button_498D74F1_545B_B061_41D2_A08AAF47558C",
  "this.Button_498D44F1_545B_B061_41CB_2FA898691AC6",
  "this.Container_498D54F1_545B_B061_41D3_D6C6823E053E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1-1"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "CAF\u00c9 DA MANH\u00c3",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_D8071C63_CB0C_7351_41C0_89B32D6DF3CB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498ED4F3_545B_B061_41A5_94E9C4493623",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "RESTAURANTE",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498D04F1_545B_B061_41D3_D5902B4681A6",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498D14F1_545B_B061_41A6_2AA84F21ACEC",
  "this.Container_498EE4F1_545B_B061_41C9_E34F3BC5920D",
  "this.Button_498EF4F1_545B_B061_41D1_DC2B8A54A636",
  "this.Button_498EC4F1_545B_B061_41BF_2136C39F778A",
  "this.Button_498ED4F1_545B_B061_41BC_940046C7F74C",
  "this.Button_498EA4F1_545B_B061_41BC_4014364629D7",
  "this.Button_498C54F1_545B_B061_41B5_8AD6C58E460D",
  "this.Button_498C24F1_545B_B061_41B6_CEDA7A7916FC",
  "this.Button_498C34F1_545B_B061_41B7_1C9A8C4A3353",
  "this.Button_498C04F1_545B_B061_41D2_E0EF93D4F0B6"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498C14F1_545B_B061_41C8_E3BA647331FB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 29)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "QUARTO CASAL",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498DF4F1_545B_B061_41C9_7FD80E72AE4D",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498DD4F1_545B_B061_41C1_CBF7B7A195FA",
  "this.Container_498DA4F1_545B_B061_419D_5E29883AA123",
  "this.Button_498DB4F1_545B_B061_41B0_B150BAB12F82",
  "this.Button_498D84F1_545B_B061_4167_40FD68720642",
  "this.Button_498D94F1_545B_B061_41D1_18BCDABCEBFD",
  "this.Button_498D64F2_545B_B063_41CC_4EC29475E6D2",
  "this.Button_498D74F2_545B_B063_41C8_00AFD584CCC0",
  "this.Button_498D44F2_545B_B063_419C_788B4CBB08DB",
  "this.Button_498D54F2_545B_B063_41CB_896605F8C033",
  "this.Button_498D24F2_545B_B063_41C4_8AD109AA88B5"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 3-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D34F2_545B_B063_41CE_EF1298571ABE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D04F2_545B_B063_41CA_0925CE4010D5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 34)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "QUARTO SOLTEIRO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EE4F2_545B_B063_41CC_AAA0CAD20379",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498EF4F2_545B_B063_41CC_405F62610B94",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498EC4F2_545B_B063_41C2_565A53FBACC9",
  "this.Container_498ED4F2_545B_B063_41C4_E13B7162CADD",
  "this.Button_498EA4F2_545B_B063_41D1_F0BD4276FFEB",
  "this.Button_498EB4F2_545B_B063_41B6_DA15C685A014",
  "this.Button_498E84F2_545B_B063_41C9_7111AEB16F5F",
  "this.Button_498E94F2_545B_B063_41CD_75FF248F56BE",
  "this.Button_498E64F2_545B_B063_41C3_38648966AA37",
  "this.Button_498E74F2_545B_B063_41D1_21A868CAE3B3",
  "this.Button_498E44F2_545B_B063_41C5_A6AB96EDB240",
  "this.Button_498E54F2_545B_B063_41D2_B53F96A7986D"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 4-1"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E34F2_545B_B063_41C6_44A1C5C4635E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 25)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "PISCINA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498E14F2_545B_B063_41BB_494D2838A4CD",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498FE4F2_545B_B063_41BA_D8235AF33884",
  "this.Container_498FF4F2_545B_B063_41D3_4A4582DF8AEC",
  "this.Button_498D74F3_545B_B061_41D0_2FA576471727",
  "this.Button_498D44F3_545B_B061_418E_015D63C61CD1",
  "this.Button_498D54F3_545B_B061_41A8_427049DCFFEF",
  "this.Button_498D24F3_545B_B061_41C3_2F27F2C4BC83",
  "this.Button_498D34F3_545B_B061_41CC_B17EC474B478",
  "this.Button_498D04F3_545B_B061_41C2_2D555AAB9750",
  "this.Button_498D14F3_545B_B061_41C6_DAC15BDEC9C9",
  "this.Button_498EE4F3_545B_B061_41A2_3B3923D5CE0B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 5-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EA4F3_545B_B061_41C1_2FA3B75745E0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_498EB4F3_545B_B061_41AD_F46F3D463910",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_498E84F3_545B_B061_41A0_8CC1746BA4CA",
  "this.Container_498E64F3_545B_B061_41D4_E9B700D178A7",
  "this.Button_498E74F3_545B_B061_41D4_88AA10D1405C",
  "this.Button_498E44F3_545B_B061_41C5_2EC265C539DA",
  "this.Button_498E54F3_545B_B061_41A3_BA66D67FA350",
  "this.Button_498DD4F3_545B_B061_41D2_F08403E9AB59",
  "this.Button_498DA4F3_545B_B061_41D5_184F93E11E98",
  "this.Button_498DB4F3_545B_B061_41D0_2E6D24EE3A99",
  "this.Button_498D94F3_545B_B061_41B1_2861D2B7324D",
  "this.Button_498D64F4_545B_B067_41C8_30068856A4A6"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 6-1"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_D99B4F1F_CB0C_EEF1_41D5_22A45E16FBDA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 40)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "CHURRASQUEIRA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_D87529B1_CB0C_D531_41D9_9937661E25B1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_D8DA88B5_CB35_F336_41CE_AA7EC57FD1ED",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 37)",
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": "1.97vh",
 "paddingTop": 0,
 "paddingBottom": 0,
 "label": "JARDIM",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_D895817F_CB35_B532_41C3_0AA9DA1D0C41",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D44F4_545B_B067_41D4_A2F9D126AD50",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_498D54F4_545B_B067_41D1_C6FF626B4D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D24F4_545B_B067_41D3_1E56603A1693",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9",
  "this.IconButton_498D04F4_545B_B067_41CA_4475BC565319",
  "this.IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC",
  "this.IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 81,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EC4F4_545B_B067_41D4_A0AFD617DEA5",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_498ED4F4_545B_B067_41D0_C741994A9846",
  "this.IconButton_498EB4F4_545B_B067_41D5_019C59361AB8",
  "this.IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0",
  "this.IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 85,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 7,
 "paddingBottom": 0,
 "gap": 40,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.51vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.51vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.51vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.73vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "class": "Button",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 50,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_6E646913_57DF_81FB_4164_71AB73EE8EC3",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "46%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6E644913_57DF_81FB_41C4_A4AB18133F07",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_6E643913_57DF_81FB_41D0_88956FE4F3F8",
  "this.HTMLText_6E642913_57DF_81FB_41C3_C6B6AB4A596F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498DF4F0_545B_B07F_41D4_917BE5032F87",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498DC4F0_545B_B07F_41B3_A86CCF02E897",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DD4F0_545B_B07F_419E_ACC18519E38E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Main Entrance",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DA4F0_545B_B07F_41D0_7F211635EE26",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lobby",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Reception",
 "id": "Button_498DB4F0_545B_B07F_41CF_F6102DC1041C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Reception",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D84F0_545B_B07F_41D1_706A37015AAC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Meeting Area 1",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D94F1_545B_B061_41D3_E40406F43CEB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Meeting Area 2",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D64F1_545B_B061_41D1_301A7BCC34EB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Bar",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D74F1_545B_B061_41D2_A08AAF47558C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Chill Out",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D44F1_545B_B061_41CB_2FA898691AC6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Terrace",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D54F1_545B_B061_41D3_D6C6823E053E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498D14F1_545B_B061_41A6_2AA84F21ACEC",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EE4F1_545B_B061_41C9_E34F3BC5920D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EF4F1_545B_B061_41D1_DC2B8A54A636",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EC4F1_545B_B061_41BF_2136C39F778A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_498ED4F1_545B_B061_41BC_940046C7F74C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EA4F1_545B_B061_41BC_4014364629D7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498C54F1_545B_B061_41B5_8AD6C58E460D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498C24F1_545B_B061_41B6_CEDA7A7916FC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498C34F1_545B_B061_41B7_1C9A8C4A3353",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498C04F1_545B_B061_41D2_E0EF93D4F0B6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498DD4F1_545B_B061_41C1_CBF7B7A195FA",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498DA4F1_545B_B061_419D_5E29883AA123",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DB4F1_545B_B061_41B0_B150BAB12F82",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D84F1_545B_B061_4167_40FD68720642",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_498D94F1_545B_B061_41D1_18BCDABCEBFD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D64F2_545B_B063_41CC_4EC29475E6D2",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D74F2_545B_B063_41C8_00AFD584CCC0",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D44F2_545B_B063_419C_788B4CBB08DB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D54F2_545B_B063_41CB_896605F8C033",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D24F2_545B_B063_41C4_8AD109AA88B5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498EC4F2_545B_B063_41C2_565A53FBACC9",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498ED4F2_545B_B063_41C4_E13B7162CADD",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EA4F2_545B_B063_41D1_F0BD4276FFEB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EB4F2_545B_B063_41B6_DA15C685A014",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_498E84F2_545B_B063_41C9_7111AEB16F5F",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E94F2_545B_B063_41CD_75FF248F56BE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E64F2_545B_B063_41C3_38648966AA37",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E74F2_545B_B063_41D1_21A868CAE3B3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E44F2_545B_B063_41C5_A6AB96EDB240",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E54F2_545B_B063_41D2_B53F96A7986D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498FE4F2_545B_B063_41BA_D8235AF33884",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498FF4F2_545B_B063_41D3_4A4582DF8AEC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D74F3_545B_B061_41D0_2FA576471727",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D44F3_545B_B061_418E_015D63C61CD1",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_498D54F3_545B_B061_41A8_427049DCFFEF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D24F3_545B_B061_41C3_2F27F2C4BC83",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D34F3_545B_B061_41CC_B17EC474B478",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D04F3_545B_B061_41C2_2D555AAB9750",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D14F3_545B_B061_41C6_DAC15BDEC9C9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498EE4F3_545B_B061_41A2_3B3923D5CE0B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498E84F3_545B_B061_41A0_8CC1746BA4CA",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_498E64F3_545B_B061_41D4_E9B700D178A7",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E74F3_545B_B061_41D4_88AA10D1405C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498E44F3_545B_B061_41C5_2EC265C539DA",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_498E54F3_545B_B061_41A3_BA66D67FA350",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DD4F3_545B_B061_41D2_F08403E9AB59",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DA4F3_545B_B061_41D5_184F93E11E98",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498DB4F3_545B_B061_41D0_2E6D24EE3A99",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D94F3_545B_B061_41B1_2861D2B7324D",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_498D64F4_545B_B067_41C8_30068856A4A6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.instagram.com/upinfinitus/', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9.png",
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498D04F4_545B_B067_41CA_4475BC565319",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.facebook.com/upinfinitus', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=556199925874', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC.png",
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://goo.gl/maps/CADDXydCwz5y6A49A', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01.png",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498ED4F4_545B_B067_41D0_C741994A9846",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498ED4F4_545B_B067_41D0_C741994A9846_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=556199925874', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498ED4F4_545B_B067_41D0_C741994A9846.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498EB4F4_545B_B067_41D5_019C59361AB8",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8_pressed.png",
 "paddingBottom": 0,
 "click": "this.openLink('https://goo.gl/maps/2AZi98Q8yDvFnyuBA', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0",
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0.png",
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8",
 "backgroundOpacity": 0,
 "width": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8.png",
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_6E643913_57DF_81FB_41D0_88956FE4F3F8",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_6E643913_57DF_81FB_41D0_88956FE4F3F8.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_6E642913_57DF_81FB_41C3_C6B6AB4A596F",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.51vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();

YUI.add("moodle-mod_panoptocourseembed-contentselectionpanel",function(a,e){var t=function(){t.superclass.constructor.apply(this,arguments)};a.extend(t,a.Base,{courseid:null,init:function(e){var t,o,i;"0"!==e.folderviewbtnid&&"0"!==e.selectvidbtnid&&"0"!==e.lticimlaunchurl&&"0"!==e.ltilaunchurl&&0!==e.courseid&&0!==e.height&&0!==e.width&&(this.courseid=e.courseid,t=a.one("#"+e.selectvidbtnid),o=a.one("#"+e.folderviewbtnid),t.on("click",this.open_panopto_window_callback,this,e.lticimlaunchurl,e.height,e.width),o.on("click",this.panopto_folder_view_callback,this,e.ltilaunchurl,600,800),this._createResourceLinkId=(i=e.resourcebase,function(){return i+"_"+(new Date).getTime()}))},open_panopto_window_callback:function(e,t,o,i){var n=new M.core.dialogue({bodyContent:'<iframe src="'+t+'" width="100%" height="100%"></iframe>',headerContent:M.util.get_string("selectvideo","panoptocourseembed"),width:i,height:o,draggable:!1,visible:!0,zindex:100,modal:!0,focusOnPreviousTargetAfterHide:!0,render:!0});document.body.panoptoWindow=n,document.body.addEventListener("sessionSelected",this.close_popup_callback.bind(this),!1)},panopto_folder_view_callback:function(e,t,o,i){var n='<p><iframe src="'+new URL(t).toString()+'" style="width:100%; height:100%; min-width:'+i+"px; min-height:"+o+'px;"></iframe><br /></p>';a.one("input[name=intro]").setAttribute("value",n),a.one("#panopto-intro-preview").setContent(n),a.one("#id_select_video").set("value",M.util.get_string("selectvideo","panoptocourseembed")),a.one("#id_select_video").removeClass("btn-secondary"),a.one("#id_select_video").addClass("btn-primary")},close_popup_callback:function(e){var t,o=new URL(e.detail.ltiViewerUrl),i=o.searchParams;i.set("course",this.courseid),i.set("custom",decodeURI(e.detail.customData)),i.set("contentUrl",e.detail.contentUrl),i.set("resourcelinkid",this._createResourceLinkId()),o.search=i.toString(),t="<p><h1>"+e.detail.title+'</h1><iframe src="'+o.toString()+'" width="'+e.detail.width+'" height="'+e.detail.height+'"></iframe><br></p>',a.one("input[name=intro]").setAttribute("value",t),a.one("#panopto-intro-preview").setContent(t),a.one("#id_select_video").set("value",M.util.get_string("replacevideo","panoptocourseembed")),a.one("#id_select_video").addClass("btn-secondary"),a.one("#id_select_video").removeClass("btn-primary"),document.body.panoptoWindow.destroy()}},{NAME:"moodle-mod_panoptocourseembed-contentselectionpanel",ATTRS:{selectvidbtnid:{value:"0"},folderviewbtnid:{value:"0"},lticimlaunchurl:{value:"0"},ltilaunchurl:{value:"0"},height:{value:0},width:{value:0},courseid:{value:0},resourcebase:{value:"0"}}}),M.mod_panoptocourseembed=M.mod_panoptocourseembed||{},M.mod_panoptocourseembed.initcontentselectionpanel=function(e){return new t(e)}},"@VERSION@",{requires:["base","node","panel","moodle-core-notification","node-event-simulate"]});